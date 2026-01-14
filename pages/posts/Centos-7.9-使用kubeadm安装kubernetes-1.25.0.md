---
title: Centos 7.9 使用kubeadm安装kubernetes 1.25.0
categories: Kubernetes
tags: [kubernetes install]
date: 2022-09-30 11:40:40
---
## 1.机器准备

| hostname   | ip地址        | 系统版本   | cpu  | 内存 |
| ---------- | ------------- | ---------- | ---- | ---- |
| k8s-master | 192.168.88.35 | centos 7.9 | 4核  | 8G   |
| k8s-node   | 192.168.88.37 | centos 7.9 | 4核  | 8G   |

## 2.初始化配置

  **master和node设置主机名**

```powershell
hostnamectl set-hostname k8s-master
hostnamectl set-hostname k8s-node
```

**设置hosts解析**

```powershell
cat >> /etc/hosts << EOF
192.168.88.35 k8s-master
192.168.88.37 k8s-node
EOF
```

**临时关闭防火墙**

```powershell
systemctl stop firewalld
systemctl disable firwalld
```

**关闭selinux**

```powershell
setenforce 0 
sed -i 's/enforcing/disabled/' /etc/selinux/config
```

**关闭swap交换分区**

```powershell
swapoff -a
sed -i '/swap/s/^/#/' /etc/fstab
```

**设置内核参数**

```powershell
modprobe br_netfilter
cat >> /etc/sysctl.conf  << EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward=1
EOF
sysctl -p
```

**设置系统时区为上海**

```powershell
timedatectl set-timezone Asia/Shanghai
```

## 3. 安装Docker

> 自 1.24.x版起,Docker不能再作为Kubernetes的容器运行时了,但因安装Docker会默认安装Containerd且个人觉得Docker用的顺手，所以这里还是安装Docker，也可以直接安装Containerd节省资源

**添加阿里yum源**

```powershell
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

**安装并启动**

```powershell
yum -y install docker-ce
#也可以直接安装containerd    
#yum -y install containerd
systemctl start docker
systemctl enable docker
```

**添加阿里的镜像源**

```powershell
cat > /etc/docker/daemon.json  << EOF
{
"registry-mirrors": ["https://r3ucysd2.mirror.aliyuncs.com"],
"exec-opts": ["native.cgroupdriver=systemd"],
"storage-driver": "overlay2"
}
EOF
```

**重启更新配置**

```powershell
systemctl daemon-reload
systemctl restart docker
```

## 4. 配置Containerd

**生成默认配置文件并修改**

```powershell
containerd config default > /etc/containerd/config.toml
sed -i 's/k8s.gcr.io/registry.aliyuncs.com\/google_containers/' /etc/containerd/config.toml
```

**重启加载配置**

```powershell
systemctl daemon-reload
systemctl restart containerd
```

## 5. 安装kubeadm、kubelet、kubectl

**添加K8S阿里源**

```powershell
cat > /etc/yum.repos.d/kubernetes.repo << EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```

**查看可安装版本并安装**

```powershell
yum list --showduplicates kubeadm
yum install -y kubelet-1.25.0 kubeadm-1.25.0 kubectl-1.25.0
```

**设置kubelet开机自启**

```powershell
systemctl enable kubelet
```

## 6. 初始化主节点

**在主节点设置集群信息**

```powershell
kubeadm init \
  --apiserver-advertise-address=192.168.88.35  \
  --image-repository registry.aliyuncs.com/google_containers \
  --kubernetes-version v1.25.0 \
  --service-cidr=10.96.0.0/12 \
  --pod-network-cidr=10.244.0.0/16 \
  --ignore-preflight-errors=all
```

**按照初始化日志提示创建目录**

```powershell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

**按照初始化日志提示将从节点加入集群**

```powershell
kubeadm join 192.168.88.35:6443 --token geald1.4kx7yoiofgh0wtk8 \
--discovery-token-ca-cert-hash sha256:ec36596f455d84ee9119eaa2b1c4d84006c890edbddc92caba8f1e61d7fdad71
#第一行最后会有个"."要删除掉否则报错
```

**kubectl命令补全**

```powershell
yum -y install bash-competion
echo "source <(kubectl completion bash)" >> ~/.bashrc
bash
```

## 7. 安装Canal网络插件

> 不安装网络插件节点无法正常通信 状态为NotReady

**下载Canal的 yaml 文件**
[官网参考文档](https://projectcalico.docs.tigera.io/getting-started/kubernetes/installation/config-options)

```powershell
curl https://raw.githubusercontent.com/projectcalico/calico/v3.24.1/manifests/canal.yaml -O
#不喜欢用Canal的也可以用Calico两个插件安装方法一样
curl https://projectcalico.docs.tigera.io/archive/v3.23/manifests/calico-etcd.yaml -O
```

**修改文件CALICO_IPV4POOL_CIDR字段** 

```powershell
#原文如下：
        # The default IPv4 pool to create on startup if none exists. Pod IPs will be
        # chosen from this range. Changing this value after installation will have
        # no effect. This should fall within `--cluster-cidr`.
        # - name: CALICO_IPV4POOL_CIDR
        #   value: "192.168.0.0/16"
        
#修改IP为master初始化 --pod-network-cidr选项的IP，并去掉注释格式与其他字段对齐，修改后如下：
       # The default IPv4 pool to create on startup if none exists. Pod IPs will be
       # chosen from this range. Changing this value after installation will have
       # no effect. This should fall within `--cluster-cidr`.
       - name: CALICO_IPV4POOL_CIDR
         value: "192.168.0.0/16"
```

**执行修改后的yaml，安装Canal**

```powershell
kubectl apply -f canal.yaml
```

**查看节点状态是否Ready**

```powershell
[root@k8s-master ~]# kubectl get nodes
NAME         STATUS   ROLES           AGE   VERSION
k8s-master   Ready    control-plane   17h   v1.25.0
k8s-node     Ready    <none>          17h   v1.25.0
```













