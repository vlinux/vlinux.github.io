---
title: Kubernetes 证书续期实战记录
date: 2025-07-16 16:35:38
updated: 2025-07-16 16:35:38
tags: Kubernetes
categories:
end: false
---

<!-- more -->

某生产环境 Kubernetes 集群（v1.26.0）证书即将过期，具体表现为：
```bash
kubeadm certs check-expiration 
```

输出显示多个证书剩余有效期不足7天。

## 操作环境

- **集群规模**：3 Master + 5 Worker Nodes
- **部署方式**：kubeadm
- 证书类型
  - kubelet 客户端/服务端证书
  - apiserver 证书
  - 前端代理证书

## 完整操作流程

### 一、准备工作

#### 1. 备份关键数据

在主节点（master）上执行,一个一个来

```bash
BACKUP_DIR="/opt/k8s-cert-backup-$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# 备份证书和配置文件
cp -r /etc/kubernetes/ $BACKUP_DIR/

# 备份etcd数据
if [ -d "/var/lib/etcd" ]; then
  tar -czf $BACKUP_DIR/etcd.tar.gz /var/lib/etcd
fi
```

#### 2. 检查集群状态

```bash
kubectl get nodes -o wide
kubectl get pods -A | grep -Ev 'Running|Completed'
```

### 二、证书续期操作

#### 1. 续期证书

```bash
kubeadm certs renew all
```

#### 2. 更新kubeconfig文件

```bash
# 备份原有kubeconfig
mv $HOME/.kube/config $HOME/.kube/config.bak

# 获取新的kubeconfig
cp /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
```

#### 3. 重启控制平面组件

```bash
# 重启kube-apiserver, kube-controller-manager, kube-scheduler
docker ps | grep -E 'kube-apiserver|kube-controller-manager|kube-scheduler' | awk '{print $1}' | xargs docker restart

# 或者使用containerd
crictl ps | grep -E 'kube-apiserver|kube-controller-manager|kube-scheduler' | awk '{print $1}' | xargs crictl stop
```

### 4. 更新其他控制平面节点

在其他控制平面节点（master02, master03）上执行相同的操作：

1. 续期证书：`kubeadm certs renew all`
2. 重启控制平面组件

### 三、Worker节点处理

#### 1. 更新kubelet证书

```bash
# 先验证证书是否更新，因为有的kubelet会自动加载更新
openssl x509 -in /var/lib/kubelet/pki/kubelet-server-current.pem -text -noout | grep -A 2 Validity
# 若已更新，则不用更了
# 在所有Worker节点执行
sudo systemctl stop kubelet
sudo cp -rp  /var/lib/kubelet/pki /var/lib/kubelet/pki.bak
sudo systemctl start kubelet

# 批准新CSR（在Master执行）
watch kubectl get csr | grep Pending | awk '{print $1}' | xargs kubectl certificate approve
```

### 四、验证结果

```bash
# 检查新证书有效期
kubeadm certs check-expiration

# 验证集群功能
kubectl get nodes
kubectl run test-pod --image=nginx --restart=Never -- /bin/sh -c "echo OK"
```



## 五、恢复操作（如果续期失败）

如果证书续期过程中出现问题，可以按照以下步骤恢复：

### 5.1 停止kubelet服务

```bash
systemctl stop kubelet
```

### 5.2 恢复备份的证书

```bash
# 恢复证书目录
rm -rf /etc/kubernetes/pki
cp -r $BACKUP_DIR/pki /etc/kubernetes/

# 恢复kubeconfig文件
cp $BACKUP_DIR/admin.conf /etc/kubernetes/
cp $BACKUP_DIR/kubelet.conf /etc/kubernetes/
cp $BACKUP_DIR/controller-manager.conf /etc/kubernetes/
cp $BACKUP_DIR/scheduler.conf /etc/kubernetes/
```

### 5.3 恢复etcd数据（如果备份了）

```bash
if [ -d "$BACKUP_DIR/etcd" ]; then
    rm -rf /var/lib/etcd
    cp -r $BACKUP_DIR/etcd /var/lib/
fi
```

### 5.4 重启服务

```bash
systemctl restart kubelet
docker ps | grep -E 'kube-apiserver|kube-controller-manager|kube-scheduler' | awk '{print $1}' | xargs docker restart
```

### 5.5 验证恢复

```bash
kubectl get nodes
kubeadm certs check-expiration
```

文档参考：

- Kubernetes官方证书管理指南
- 证书轮换最佳实践

## 附录：常用命令速查表

|      功能      |                             命令                             |
| :------------: | :----------------------------------------------------------: |
|  检查证书过期  |               `kubeadm certs check-expiration`               |
|  手动批准CSR   |           `kubectl certificate approve <csr-name>`           |
| 检查控制器选举 |             `kubectl get leases -n kube-system`              |
|   验证证书链   | `openssl verify -CAfile /etc/kubernetes/pki/ca.crt <cert-file>` |
