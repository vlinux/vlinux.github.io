---
title: Kubernetes使用NFS作为动态存储（提供下载YAML）
categories: Kubernetes
tags: [NFS-client]
date: 2021-01-19 11:30:00
---
>记录一下小实验，以免以后忘记


## 一、nfs服务器安装nfs与配置

```
yum -y install nfs-utils rpcbind
systemctl  start rpcbind.service 
systemctl  start nfs

#配置
mkdir /data/nfs -p
chow nfsnobody.nfsnobody /data/nfs

cat>>/etc/exports<<EOF
/data/nfs 172.16.208.0/20(rw,sync,no_root_squash,no_all_squash)
EOF
exportfs  -arv
```

## 二、其它客户端服务器安装nfs-utils

```
yum install -y  nfs-utils
```

## 三、部署NFS实现自动创建PV插件：
```
git clone https://github.com/kubernetes-incubator/external-storage
```
上面的Clone下来的仓库由于是官网的所以可能导致内部有些资源是外网资源，无法正常部署跟启动，于是乎博主自己使用科学上网的方式已经把外网资源给PUll下来替换进去了，现在你只需要下载博主提供的就可以了，下载链接在下面@(你懂的)不用谢

[file href="https://wwa.lanzoui.com/i2mohkkammj"]NFS动态存储类[/file]
>部署流程如下
```
unzip nfs-client.zip
cd nfs-client/
kubectl apply -f rbac.yaml # 授权访问apiserver
kubectl apply -f deployment.yaml # 部署插件，需修改里面NFS服务器地址与共享目录
kubectl apply -f class.yaml # 创建存储类
kubectl get cs # 查看存储类
```
当你出现报错
```
pod has unbound immediate PersistentVolumeClaims
```
多半是你的k8s版本高于1.20的问题

第一种解决方法
[tip type="danger" title="使用k8s版本高于v1.20.0的注意"]
修改**/etc/kubernetes/manifests/kube-apiserver.yaml** 文件

添加添加**- --feature-gates=RemoveSelfLink=false**

```
[root@master ~]# grep -B 5 'feature-gates' /etc/kubernetes/manifests/kube-apiserver.yaml
    - --service-account-key-file=/etc/kubernetes/pki/sa.pub
    - --service-account-signing-key-file=/etc/kubernetes/pki/sa.key
    - --service-cluster-ip-range=10.96.0.0/12
    - --tls-cert-file=/etc/kubernetes/pki/apiserver.crt
    - --tls-private-key-file=/etc/kubernetes/pki/apiserver.key
    - --feature-gates=RemoveSelfLink=false #添加内容
```
[/tip]

第二种解决方法
修改nfs-client的deployment参数：
```
kubectl -n kube-system edit deploy <nfs-client-deploy名>
```
将其中的.spec.template.spec.containers[0].image参数修改为：k8s.gcr.io/sig-storage/nfs-subdir-external-provisioner:v4.0.2
等待nfs-client pod启动即可。