---
title: K8S(kubernetes)实践认知
categories: DevOps
tags: [K8s]
date: 2020-03-09 09:16:00
---
# Kubernetes快速入门

学习Kubernetes最权威的知识来源就是Kubernetes官方文档，而且对于初学者来说，官方文档可能不是最佳选择。本章将带你循循序渐进的学习Kubernetes，后面章节会通过大量的实践案例来理解和掌握Kubernetes的知识。

- Kubernetes官方文档：https://kubernetes.io/docs/home/
- Kuernetes Github：https://github.com/kubernetes/

## Kubernetes架构介绍

Kubernetes 源于希腊语，意为 “舵手” 或 “飞行员”，是用于自动部署，扩展和管理容器化应用程序的开源系统，由于K和S之间有8个字母，被简称为K8S。Kubernetes 构建在 Google 15 年生产环境经验基础之上，可以将Kubernetes看作为Google内部的容器管理平台Brog的开源版本，当然他们之间是有一些差异的。

### Kubernetes系统架构

Kubernetes被设计为Master和Node两个角色，这类似于OpenStack的架构理念，Master为控制节点，Node为计算节点或者叫工作节点，在Master节点上有一个API Server服务，对外提供标准的RestAPI，这也是Kubernetes集群的入口，意外着只要和集群进行交互必须连接到API Server上。

![img](http://k8s.unixhot.com/kubernetes/media/4f93fc22b605a967fa54a2491557c04e.png)

**Master节点介绍**

Kubernetes Master节点主要有4个组件，API Server、Scheduler、Controller、etcd。如下图所示：

![img](http://k8s.unixhot.com/kubernetes/media/0786901c59be2f756d7b979619a048b2.png)

- **API Server**：提供Kubernetes API接口，主要处理 Rest操作以及更新Etcd中的对象。是所有资源增删改查的唯一入口。
- **Scheduler**：绑定Pod到Node上，主要做资源调度。
- **Controller Manager**：所有其他群集级别的功能，目前由控制器Manager执行。资源对象的自动化控制中心，Kubernetes集群有很多控制器。
- **Etcd**：所有持久化的状态信息存储在Etcd中，这个是Kubernetes集群的数据库。

**Node节点介绍**

Node节点是Kubernetes集群的工作节点，在Node节点上主要运行了Docker、Kubelet、kube-proxy三个服务（Fluentd请先忽略），如下图所示：

![img](http://k8s.unixhot.com/kubernetes/media/ff26ae9ea18c1a93e50b8226abfa2fa7.png)

- **Docker Engine**：负责节点的容器的管理工作，最终创建出来的是一个Docker容器。
- **Kubelet**：安装在Node上的代理服务，用来管理Pods以及容器、镜像、Volume等，实现对集群对节点的管理。
- **Kube-proxy**：安装在Node上的网络代理服务，提供网络代理以及负载均衡，实现与Service通讯。

### Kubernetes逻辑架构

在上面的介绍中提到像Pod、Service这些概念，在Kubernetes的系统架构图中并没有体现出来，这些可以理解为Kubernetes逻辑架构中的组件。也就是在Master和Node上并不具体存在的一个服务或者进程，但却是Kubernetes的组件，也是我们的管理对象。主要有Pod、Service和各种控制器等。

**Pod**

Pod是Kubernetes的最小管理单元，一个Pod可以包含一组容器和卷。虽然一个Pod里面可以包含一个或者多个容器，但是Pod只有一个IP地址，而且Pod重启后，IP地址会发生变化。

![img](http://k8s.unixhot.com/kubernetes/media/e2a89d5ac819b578808e62d8fee0e960.png)

**Controller**

一个应用如果可以有一个或者多个Pod，就像你给某一个应用做集群，集群中的所有Pod是一模一样的。Kubernetes中有很多控制器可以来管理Pod，例如下图的Replication Controller可以控制Pod的副本数量，从而实现横向扩展。

![img](http://k8s.unixhot.com/kubernetes/media/c4ae2886ff4fdb51b9a0dd20a14c8e50.png)

Kubernetes中有很多控制器，后面的章节我们会一一讲到，常用的控制器如下：

- Replication Controller（新版本已经被ReplicaSet所替代）
- ReplicaSet（新版本被封装在Deployment中）
- Deployment：封装了Pod的副本管理、部署更新、回滚、扩容、缩容等功能。
- DaemonSet：保证所有的Node上有且只有一个Pod在运行。
- StatefulSet：有状态的应用，为 Pod 提供唯一的标识，它可以保证部署和 scale 的顺序。
- Job：使用Kubernetes运行单一任务。
- CronJob：使用Kubernetes运行定时任务。

**Service**

由于Pod的生命周期是短暂的，而且每次重启Pod的IP地址都会发生变化，而且一个Pod有多个副本，也就是说一个集群中有了多个节点，就需要考虑负载均衡的问题。Kubernetes使用Service来实现Pod的访问，而且Service有一个Cluster IP，通常也称之为VIP，是固定不变的。

![img](http://k8s.unixhot.com/kubernetes/media/2e61328894d1eaf548ad6ff06d85a6a3.png)

### Kubernetes网络介绍

在Kubernetes集群中存在着三种网络，分别是Node网络、Pod网络和Service网络，这几种网络之间的通信需要依靠网络插件，Kubernetes本身并没有提供，社区提供了像Flannel、Calico、Cannal等，后面章节会详述。

**Node网络**

Node网络指的是Kubernetes Node节点本地的网络，在本实验环境中使用的是192.168.56.0/24这个网段，所有的Node和Master在该网段都可以正常通信。

**Pod网络**

后面创建的Pod，每一个Pod都会有一个IP地址，这个IP地址网络段被称之为Pod网络，如下图所示。

```
[root@linux-node1 ~]# kubectl get pod -o wide

NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES

nginx-54458cd494-hpn68 1/1 Running 0 9m7s 10.2.1.2 linux-node2.linuxhot.com
<none> <none>

nginx-54458cd494-r4mfq 1/1 Running 0 7m46s 10.2.1.3 linux-node2.linuxhot.com
<none> <none>
```

**Service网络**

Service是为Pod提供访问和负载均衡的网络地址段，如下图所示。

```
[root@linux-node1 ~]# kubectl get service

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE

kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 64m

nginx NodePort 10.1.216.23 <none> 80:30893/TCP 8m3s
```

Kubernetes的组件和知识绝非如此，快速入门可以先了解这么多，下一章节，我们先快速的部署一个Kubernetes集群。

## 使用kubeadm部署Kubernetes v1.16.4

想要快速的体验Kubernetes的功能，官方提供了非常多的部署方案，可以使用官方提供的kubeadm以容器的方式运行Kubernetes集群，也可以使用二进制方式部署更有利于理解Kubernetes的架构，我们先使用kubeadm快速的部署一个Kubernetes集群后，学习Kubernetes的使用，然后动手使用二进制的方式来深入理解Kubernetes架构。

> 注意：请不要把目光仅仅放在部署上，要慢慢的了解其本质。

Kubernetesv1.13版本发布后，kubeadm才正式进入GA，可以生产使用。目前Kubernetes的对应镜像仓库，在国内阿里云也有了镜像站点，使用kubeadm部署Kubernetes集群变得简单并且容易了很多，本文使用kubeadm带领大家快速部署Kubernetes v1.16.2版本。

**实验环境准备**

在本书的实验环境的基础上，我们如下来分配角色：

| 主机名                   | IP地址（NAT）                                        | 最低配置    | 描述                      |
| ------------------------ | ---------------------------------------------------- | ----------- | ------------------------- |
| linux-node1.linuxhot.com | eth0:192.168.56.11                                   | 1CPU/1G内存 | Kubernets Master/Etcd节点 |
| linux-node2.linuxhot.com | eth0:192.168.56.12                                   | 1CPU/1G内存 | Kubernets Node节点        |
| linux-node3.linuxhot.com | eth0:192.168.56.13                                   | 1CPU/1G内存 | Kubernets Node节点        |
| Service网段              | 10.1.0.0/16                                          |             |                           |
| Pod网段                  | 10.2.0.0/16                                          |             |                           |
| 备注                     | 如果有条件可以部署多个Kubernets node，实验效果更佳。 |             |                           |

### 部署Docker

首先需要在所有Kubernetes集群的节点中安装Docker和kubeadm。

**1.设置使用国内Yum源**

```
[root@linux-node1 ~]# cd /etc/yum.repos.d/
[root@linux-node1 yum.repos.d]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

**2.安装指定的Docker版本**

由于kubeadm对Docker的版本是有要求的，需要安装与Kubernetes匹配的版本，这个对应关系一般在每次发布的Changlog中可以找到，例如1.16.2的CHANGELOG如下：[CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.16.md)

当前v1.16.2支持的Docker版本有v1.13.1, 17.03, 17.06, 17.09, 18.06, 18.09,可以通过下面命令查看：

```
[root@linux-node1 ~]# yum list docker-ce.x86_64 --showduplicates | sort -r
 * updates: mirror.jdcloud.com
Loading mirror speeds from cached hostfile
Loaded plugins: fastestmirror
 * extras: mirror.jdcloud.com
 * epel: mirrors.njupt.edu.cn
docker-ce.x86_64            3:19.03.4-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.3-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.2-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.1-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.0-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.9-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.8-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.7-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.6-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.5-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.4-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.3-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.2-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.1-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.0-3.el7                     docker-ce-stable
docker-ce.x86_64            18.06.3.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.06.2.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.06.1.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.06.0.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.03.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            18.03.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.12.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.12.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.09.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.09.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.06.2.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.06.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.06.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.03.3.ce-1.el7                    docker-ce-stable
docker-ce.x86_64            17.03.2.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.03.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.03.0.ce-1.el7.centos             docker-ce-stable
 * base: mirrors.neusoft.edu.cn
Available Packages
```

**3.安装Docker18.09版本**

```
[root@linux-node1 ~]# yum -y install docker-ce-18.09.9-3.el7 docker-ce-cli-18.09.9-3.el7
```

**4.设置cgroup驱动使用systemd**

```
[root@linux-node1 ~]# mkdir /etc/docker
[root@linux-node1 ~]# cat > /etc/docker/daemon.json <<EOF
    {
      "registry-mirrors": ["https://dx5z2hy7.mirror.aliyuncs.com"],
      "exec-opts": ["native.cgroupdriver=systemd"]
    }
EOF
```

**5.启动后台进程**

```
[root@linux-node1 ~]# systemctl enable docker && systemctl start docker
```

**6.查看Docker版本**

```
[root@linux-node1 ~]# docker --version
Docker version 18.09.9, build 039a7df9ba
```

### 部署kubadm和kubelet

在Kubernetes集群的所有节点上部署完毕Docker后，还需要全部部署kubeadm和kubelet，其中kubeadm是管理工具，kubelet是一个服务，用于启动Kubernetes对应的服务。

**1.设置kubernetes YUM仓库**

这里在官方文档的基础上修改为了国内阿里云的yum仓库，

```
[root@linux-node1 ~]# vim /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
```

> 注意：最下面一行gpgkey的两个URL地址之间是空格，因为排版问题可能导致换行。

**2.安装软件包**

由于版本更新频繁，请指定对应的版本号，本文采用1.16.2版本，其它版本未经测试，如果不指定版本默认安装最新版本。

```
[root@linux-node1 ~]# yum install -y kubelet-1.16.2 kubeadm-1.16.2 kubectl-1.16.2 ipvsadm
```

**3.配置kubelet**

默认情况下，Kubelet不允许所在的主机存在交换分区，后期规划的时候，可以考虑在系统安装的时候不创建交换分区，针对已经存在交换分区的可以设置忽略禁止使用Swap的限制，不然无法启动Kubelet。

```
[root@linux-node1 ~]# vim /etc/sysconfig/kubelet
KUBELET_CGROUP_ARGS="--cgroup-driver=systemd"
KUBELET_EXTRA_ARGS="--fail-swap-on=false"
```

在所有节点上关闭SWAP

```
[root@linux-node1 ~]# swapoff -a
```

**4.设置内核参数**

```
[root@linux-node1 ~]# cat <<EOF >  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF
```

使配置生效

```
[root@linux-node1 ~]# sysctl --system
```

**5.启动kubelet并设置开机启动**

注意，此时kubelet是无法正常启动的，可以查看/var/log/messages有报错信息，等待执行初始化之后即可正常，为正常现象。

```
[root@linux-node1 ~]# systemctl enable kubelet && systemctl start kubelet
```

**6.使用IPVS进行负载均衡**

在Kubernetes集群中Kube-Proxy组件负载均衡的功能，默认使用iptables，生产环境建议使用ipvs进行负载均衡。在所有节点启用ipvs模块

```
[root@linux-node1 ~]# vim /etc/sysconfig/modules/ipvs.modules
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
[root@linux-node1 ~]# chmod +x /etc/sysconfig/modules/ipvs.modules
[root@linux-node1 ~]# source /etc/sysconfig/modules/ipvs.modules
```

查看模块是否加载正常

```
[root@linux-node1 ~]# lsmod | grep -e ip_vs -e nf_conntrack_ipv4
ip_vs_sh               12688  0 
ip_vs_wrr              12697  0 
ip_vs_rr               12600  0 
ip_vs                 145497  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr
nf_conntrack_ipv4      15053  15 
nf_defrag_ipv4         12729  1 nf_conntrack_ipv4
nf_conntrack          133095  7 ip_vs,nf_nat,nf_nat_ipv4,xt_conntrack,nf_nat_masquerade_ipv4,nf_conntrack_netlink,nf_conntrack_ipv4
libcrc32c              12644  4 xfs,ip_vs,nf_nat,nf_conntrack
```

- 以上步骤请在Kubernetes的所有节点上执行，本实验环境是需要在linux-node1、linux-node2、linux-node3这三台机器上均安装Docker、kubeadm、kubelet，对于以上操作需要自动化可以参考我使用SaltStack完成的salt-kubeadm项目：https://github.com/unixhot/salt-kubeadm

### 初始化集群部署Master

在所有节点上安装完毕后，在linux-node1这台Master节点上进行集群的初始化工作。

**1.导出所有默认的配置**

```
[root@linux-node1 ~]# kubeadm config print init-defaults > kubeadm.yaml
```

上面的命令会生成一个默认配置的kubeadm配置文件，然后在此基础上进行修改即可。

```
[root@linux-node1 ~]# cat kubeadm.yaml 
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.56.11  #修改为API Server的地址
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: linux-node1.example.com
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: registry.aliyuncs.com/google_containers  #修改为阿里云镜像仓库
kind: ClusterConfiguration
kubernetesVersion: v1.16.2  #修改为具体的版本
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.1.0.0/16   #修改Service的网络
  podSubnet: 10.2.0.0/16      #新增Pod的网络
scheduler: {}
---   #下面有增加的三行配置，用于设置Kubeproxy使用LVS
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: ipvs
```

**2. 执行初始化操作**

```
[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml
[init] Using Kubernetes version: v1.16.2
[preflight] Running pre-flight checks
error execution phase preflight: [preflight] Some fatal errors occurred:
        [ERROR NumCPU]: the number of available CPUs 1 is less than the required 2
        [ERROR Swap]: running with swap on is not supported. Please disable swa
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```

如果遇到上面这样的报错，是因为在实验环境开启了交换分区，以及CPU的核数小于2造成的，可以使用--ignore-preflight-errors=进行忽略。 --ignore-preflight-errors=：忽略运行时的错误，例如上面目前存在[ERROR NumCPU]和[ERROR Swap]，忽略这两个报错就是增加--ignore-preflight-errors=NumCPU 和--ignore-preflight-errors=Swap的配置即可。

再次执行初始化操作：

```
[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml \
  --ignore-preflight-errors=Swap,NumCPU 
[init] Using Kubernetes version: v1.16.2
[preflight] Running pre-flight checks
        [WARNING NumCPU]: the number of available CPUs 1 is less than the required 2
        [WARNING Swap]: running with swap on is not supported. Please disable swap
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
```

执行完毕后，会在当前输出下停留，等待下载Kubernetes组件的Docker镜像。根据你的网络情况，可以持续1-5分钟，你也可以使用docker images查看下载的镜像。镜像下载完毕之后，就会进行初始操作：

这里省略了所有输出，初始化操作主要经历了下面15个步骤，每个阶段均输出均使用[步骤名称]作为开头：

1. [init]：指定版本进行初始化操作
2. [preflight] ：初始化前的检查和下载所需要的Docker镜像文件。
3. [kubelet-start]：生成kubelet的配置文件”/var/lib/kubelet/config.yaml”，没有这个文件kubelet无法启动，所以初始化之前的kubelet实际上启动失败。
4. [certificates]：生成Kubernetes使用的证书，存放在/etc/kubernetes/pki目录中。
5. [kubeconfig] ：生成 KubeConfig文件，存放在/etc/kubernetes目录中，组件之间通信需要使用对应文件。
6. [control-plane]：使用/etc/kubernetes/manifest目录下的YAML文件，安装 Master组件。
7. [etcd]：使用/etc/kubernetes/manifest/etcd.yaml安装Etcd服务。
8. [wait-control-plane]：等待control-plan部署的Master组件启动。
9. [apiclient]：检查Master组件服务状态。
10. [uploadconfig]：更新配置
11. [kubelet]：使用configMap配置kubelet。
12. [patchnode]：更新CNI信息到Node上，通过注释的方式记录。
13. [mark-control-plane]：为当前节点打标签，打了角色Master，和不可调度标签，这样默认就不会使用Master节点来运行Pod。
14. [bootstrap-token]：生成token记录下来，后边使用kubeadm join往集群中添加节点时会用到
15. [addons]：安装附加组件CoreDNS和kube-proxy

成功执行之后，你会看到下面的输出：

```
Your Kubernetes master has initialized successfully!
To start using your cluster, you need to run the following as a regular user:
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
https://kubernetes.io/docs/concepts/cluster-administration/addons/
You can now join any number of machines by running the following on each node
as root:
kubeadm join 192.168.56.11:6443 --token 19fhhl.3mzkyk16tcgp6vga --discovery-token-ca-cert-hash sha256:76a88c38b673d3b2ac73e33127a809688cb3e58c533512ac6d92ecb66aa57a45
```

如果执行失败，那意味着之前的操作存在问题，检查顺序如下：

- 基础环境
- 主机名是否可以解析，SELinux，iptables是否关闭。
- 交换分区是否存在free -m查看
- 内核参数是否修改、IPVS是否修改（目前阶段不会造成失败）
- 基础软件
- Docker是否安装并启动
- Kubelet是否安装并启动
- 执行kubeadm是否有别的报错是否忽略
- systemctl status kubelet查看kubelet是否启动
- 如果kubelet无法启动，查看日志有什么报错，并解决报错。
- 以上都解决完毕，需要重新初始化
- kubeadm reset 进行重置（生产千万不要执行，会直接删除集群）
- 根据kubeadm reset 提升，清楚iptables和LVS。

请根据上面输出的要求配置kubectl命令来访问集群。

**3.为kubectl准备Kubeconfig文件。**

kubectl默认会在执行的用户家目录下面的.kube目录下寻找config文件。这里是将在初始化时[kubeconfig]步骤生成的admin.conf拷贝到.kube/config。

```
[root@linux-node1 ~]# mkdir -p $HOME/.kube
[root@linux-node1 ~]# cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
[root@linux-node1 ~]# chown $(id -u):$(id -g) $HOME/.kube/config
```

在该配置文件中，记录了API Server的访问地址，所以后面直接执行kubectl命令就可以正常连接到API Server中。

**4.使用kubectl命令查看组件状态**

```
[root@linux-node1 ~]# kubectl get cs
NAME STATUS MESSAGE ERROR
scheduler Healthy ok
controller-manager Healthy ok
etcd-0 Healthy {"health": "true"}
```

**知识回顾：为什么上面的输出没有显示API Server组件的状态

因为API Server是Kubernetes集群的入口，所有和Kubernetes集群的交互都必须经过APIServer，kubectl命令也是连接到API Server上进行交互，所以如果能够正常使用kubectl执行命令，意味着API Server运行正常。

**5.使用kubectl获取Node信息**

目前只有一个节点，角色是Master，状态是NotReady。

```
[root@linux-node1 ~]# kubectl get node
NAME STATUS ROLES AGE VERSION
linux-node1.unixhot.com NotReady master 14m v1.16.2
```

### 部署网络插件

Master节点NotReady的原因就是因为没有使用任何的网络插件，此时Node和Master的连接还不正常。目前最流行的Kubernetes网络插件有Flannel、Calico、Canal，这里分别列举了Canal和Flannel，你可以选择其中之一进行部署。 因为基础的Kubernetes集群已经配置完毕，后面的增加组件等操作，几乎都可以使用kubectl和一个YAML配置文件来完成。

【部署canal网络插件】

```
[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/rbac.yaml
[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/canal.yaml
```

【部署Flannel网络插件】（推荐） 部署Flannel网络插件需要修改Pod的IP地址段，修改为和你初始化一直的网段，可以先下载Flannel的YAML文件修改后，再执行。

```
[root@linux-node1 ~]# git clone --depth 1 https://github.com/coreos/flannel.git
[root@linux-node1 ~]# cd flannel/Documentation/
[root@linux-node1 Documentation]# vim kube-flannel.yml
# 修改"Network": "10.244.0.0/16"为"Network": "10.2.0.0/16",

74   net-conf.json: |
75     {
76       "Network": "10.2.0.0/16",
77       "Backend": {
78         "Type": "vxlan"
79       }
80     }

# 请注意，Flannel的镜像拉取速度会比较慢，可以替换为国内镜像
# image: quay.io/coreos/flannel:v0.10.0-amd64
image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64

# 如果Node中有多个网卡，可以使用--iface来指定对应的网卡参数。
containers:
      - name: kube-flannel
        image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        - --iface=eth0
```

部署Flannel

```
[root@linux-node1 Documentation]# kubectl create -f kube-flannel.yml
```

查看Pod状态

```
[root@linux-node1 Documentation]# kubectl get pod -n kube-system
NAME                                              READY   STATUS     RESTARTS   AGE
coredns-58cc8c89f4-cjhdv                          0/1     Pending    0          41m
coredns-58cc8c89f4-vdfn2                          0/1     Pending    0          41m
etcd-linux-node1.unixhot.com                      1/1     Running    0          41m
kube-apiserver-linux-node1.unixhot.com            1/1     Running    0          40m
kube-controller-manager-linux-node1.unixhot.com   1/1     Running    1          40m
kube-flannel-ds-amd64-bwsxl                       0/1     Init:0/1   0          20s
kube-proxy-5qrmh                                  1/1     Running    0          41m
kube-scheduler-linux-node1.unixhot.com            1/1     Running    1          41m
```

可以看到此时CoreDNS处于Pending状态，需要等待网络插件canal或者Flannel的Pod状态变成Running之后CoreDNS也会正常。所有Pod的状态都变成Running之后，这个时候再次获取Node，会发现节点变成了Ready状态。

```
[root@linux-node1 ~]# kubectl get node
NAME STATUS ROLES AGE VERSION
linux-node1.unixhot.com Ready master 29m v1.16.2
```

*kubeadm其实使用Kubernetes部署Kubernetes，这样就存在先有鸡还是先有蛋的问题，所以，我们首先手动部署了Docker和kubelet，然后kubeadm调用kubelet以静态Pod的方式部署了Kubernetes集群中的其它组件。静态Pod在后面的章节会讲到。*

### 部署Node节点

Master节点部署完毕之后，就可以部署Node节点，首先请遵循部署Docker和kubeadm章节为Node节点部署安装好docker、kubeadm和kubelet，此过程这里不再重复列出。

**1.在Master节点输出增加节点的命令**

```
[root@linux-node1 ~]# kubeadm token create --print-join-command
kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569
```

**2.在Node节点执行**

注意如果节点有交换分区，需要增加--ignore-preflight-errors=Swap。

部署linux-node2

```
[root@linux-node2 ~]# kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap
```

部署linux-node3

```
[root@linux-node3 ~]# kubeadm join 192.168.56.11:6443 --tokenisggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap
```

这个时候kubernetes会使用DaemonSet在所有节点上都部署canal/flannel和kube-proxy。部署完毕之后节点即部署完毕。DaemonSet的内容后面会讲解。

```
    [root@linux-node1 ~]# kubectl get daemonset --all-namespaces
    NAMESPACE NAME DESIRED CURRENT READY UP-TO-DATE AVAILABLE NODE SELECTOR AGE
    kube-system canal 2 2 1 2 1 beta.kubernetes.io/os=linux 17m
    kube-system kube-proxy 2 2 2 2 2 <none> 47m
```

待所有Pod全部启动完毕之后，节点就恢复Ready状态。

```
    [root@linux-node1 ~]# kubectl get pod --all-namespaces
    NAMESPACE NAME READY STATUS RESTARTS AGE
    kube-system canal-lv92w 3/3 Running 0 8m45s
    kube-system canal-rq5n5 3/3 Running 0 23m
    kube-system coredns-78d4cf999f-5k4sg 1/1 Running 0 53m
    kube-system coredns-78d4cf999f-bnbgf 1/1 Running 0 53m
    kube-system etcd-linux-node1.linuxhot.com 1/1 Running 0 52m
    kube-system kube-apiserver-linux-node1.linuxhot.com 1/1 Running 0 52m
    kube-system kube-controller-manager-linux-node1.linuxhot.com 1/1 Running 0 52m
    kube-system kube-proxy-sddlp 1/1 Running 0 53m
    kube-system kube-proxy-tw96b 1/1 Running 0 8m45s
    kube-system kube-scheduler-linux-node1.linuxhot.com 1/1 Running 0 52m
```

**查看所有节点** `` [root@linux-node1 ~]# kubectl get node NAME STATUS ROLES AGE VERSION linux-node1.linuxhot.com Ready master 49m v1.13.2 linux-node2.linuxhot.com Ready 4m48s v1.13.2

```
**如何给Node加上Roles标签**

使用kubectl get node能够看到linux-node1.linuxhot.com的ROLES是master这个是在进行集群初始化的时候[mark-control-plane]进行标记的。
[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane
by adding the label "node-role.kubernetes.io/master=''"

[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane
by adding the taints [node-role.kubernetes.io/master:NoSchedule]
1.查看节点的标签
[root@linux-node1 ~]# kubectl get nodes --show-labels

NAME STATUS ROLES AGE VERSION LABELS

linux-node1.linuxhot.com Ready master 48m v1.13.3
beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node1.linuxhot.com,node-role.kubernetes.io/master=

linux-node2.linuxhot.com Ready <none> 7m13s v1.13.3
beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node2.linuxhot.com
2.增加标签
[root@linux-node1 ~]# kubectl label nodes linux-node2.linuxhot.com
node-role.kubernetes.io/node=

node/linux-node2.linuxhot.com labeled
3.查看效果
[root@linux-node1 ~]# kubectl get nodes
NAME STATUS ROLES AGE VERSION
linux-node1.linuxhot.com Ready master 50m v1.13.3
linux-node2.linuxhot.com Ready node 8m41s v1.13.3
### 测试Kubernetes集群 {#test}

在上面的步骤中，我们创建了一个Kubernetes集群，1个Master和2个Node节点，在生产环境需要考虑Master的高可用，这里先不用考虑，后面会讲到。

**1.创建一个单Pod的Nginx应用**
[root@linux-node1 ~]# kubectl create deployment nginx --image=nginx:alpine
deployment.apps/nginx created

[root@linux-node1 ~]# kubectl get pod
NAME READY STATUS RESTARTS AGE
nginx-54458cd494-9j7ql 0/1 ContainerCreating 0 10s
**2.查看Pod详细信息**

待Pod的状态为Running后，可以获取Pod的IP地址，这个IP地址是从Master节点初始化的--pod-network-cidr=10.2.0.0/16地址段中分配的。
[root@linux-node1 ~]# kubectl get pod -o wide

NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES

nginx-54458cd494-9j7ql 1/1 Running 0 59s 10.2.1.2 linux-node2.linuxhot.com
<none> <none>
**3.测试Nginx访问**
[root@linux-node1 ~]# curl --head http://10.2.1.2

HTTP/1.1 200 OK
Server: nginx/1.15.8
Date: Sun, 13 Jan 2019 01:16:36 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT
Connection: keep-alive
ETag: "5c240d0d-264"
Accept-Ranges: bytes
**4.测试扩容**

现在将Nginx应用的Pod副本数量拓展到2个节点
[root@linux-node1 ~]# kubectl scale deployment nginx --replicas=2

deployment.extensions/nginx scaled

[root@linux-node1 ~]# kubectl get pod

NAME READY STATUS RESTARTS AGE

nginx-54458cd494-9j7ql 1/1 Running 0 2m13s

nginx-54458cd494-vnm4f 1/1 Running 0 5s
**5.为Nginx增加Service**

为Nginx增加Service，会创建一个Cluster
IP，从Master初始化的--service-cidr=10.1.0.0/16地址段中进行分配，
并开启NodePort是在Node节点上进行端口映射，进行外部访问。
[root@linux-node1 ~]# kubectl expose deployment nginx --port=80
--type=NodePort

service/nginx exposed

[root@linux-node1 ~]# kubectl get service

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 88m
nginx NodePort 10.1.147.204 <none> 80:30599/TCP 67m
**6.测试Service的VIP**
[root@linux-node1 ~]# curl --head http://10.1.147.204/

HTTP/1.1 200 OK 
Server: nginx/1.15.8
Date: Sun, 13 Jan 2019 01:26:21 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT
Connection: keep-alive
ETag: "5c240d0d-264"
Accept-Ranges: bytes
```

\``` **7.测试NodePort，外部访问。**

![img](http://k8s.unixhot.com/kubernetes/media/1f9d523f359ce6d49515d04703d8e941.png)

这一切看起来似乎不是十分完美，但是现在你已经拥有了一个Kubernetes集群，接下来就可以继续探索Kubernetes的世界了。

## 公有云中的Kubernetes

截止2019年2月，大多数公有云已经提供了容器Kubernetes的产品服务，对于使用公有云的用户来说，最佳实践是直接购买公有云产品，而非自己部署Kubernetes集群，主要是因为公有云已经将网络和存储与Kubernetes集成好了，解决了生产应用的难题。

### 阿里云中的Kubernetes

国内阿里云提供了容器服务 Kubernetes 版（简称 ACK）提供高性能可伸缩的容器应用管理能力，支持企业级 Kubernetes 容器化应用的全生命周期管理。容器服务 Kubernetes 版简化集群的搭建和扩容等工作，整合阿里云虚拟化、存储、网络和安全能力，打造云端最佳的 Kubernetes 容器化应用运行环境。

**阿里云Kubernetes模式**

容器服务Kubernetes版包含了经典Dedicated Kubernetes以及Serverless两种形态，方便您按需选择。

- 经典Dedicated Kubernetes模式：您可以对集群基础设施和容器应用进行更细粒度的控制，比如选择宿主机实例规格和操作系统，指定Kubernetes 版本、自定义 Kubernetes 特性开关设置等。阿里云 Kubernetes 服务负责为集群创建底层云资源，升级等自动化运维操作。而您需要规划、维护、升级服务器集群，手动或自动在集群中添加或删除服务器。
- Serverless 模式：您无需创建底层虚拟化资源，可以利用 Kubernetes 命令指明应用容器镜像、CPU 和内存要求以及对外服务方式，直接启动。

**阿里云Kubernetes产品架构**

![C:\\Users\\jason\\Desktop\\15447553537457_zh-CN.png](http://k8s.unixhot.com/kubernetes/media/43688d33a81f2bd6af354d0715b6b297.png)

**阿里云Kubernetes创建**

默认情况下可以在阿里云中自行创建5个集群，每个集群最多可以添加 40 个节点。如需更高配额，需要提交工单申请。

![img](http://k8s.unixhot.com/kubernetes/media/4c165d0ebc842862595f9fd0f4650d43.png)

阿里云将网络、存储、安全等方面已经进行了深度集成，在创建Kubernetes集群时，阿里云容器服务提供两种网络插件：Terway和Flannel：

- Flannel：使用的是简单稳定的社区的Flannel CNI插件，配合阿里云的VPC的高速网络，能给集群高性能和稳定的容器网络体验，但功能偏简单，支持的特性少，例如：不支持基于Kubernetes标准的Network Policy。
- Terway：是阿里云容器服务自研的网络插件，功能上完全兼容Flannel，支持将阿里云的弹性网卡分配给容器，支持基于Kubernetes标准的NetworkPolicy来定义容器间的访问策略，支持对单个容器做带宽的限流。对于不需要使用Network Policy的用户，可以选择Flannel，其他情况建议选择Terway。了解更多Terway网络插件的相关内容，请参见Terway网络插件。

最终阿里云会使用kubeadm帮你创建一个指定版本的Kubernetes集群。

### 私有云中的Kubernetes

**内网部署Kubernetes**

很多企业需要内网部署Kubernetes但是内网又无法访问外网，就需要本地化部署，无忘了本地话部署主要包括两个方面，一个是软件仓库的准备，一个是Kubernetes镜像的准备。

1. 准备内网YUM仓库（略）
2. 准备Docker Registry（请参考Harbor章节）
3. 下载并提交镜像到Harbor中，然后将Harbor的镜像部署直接COPY到生产环境中

下载脚本如下，请根据需求自行修改：

```
[root@linux-node1 ~]# vim k8s-images.sh
#!/bin/bash

# EVN
ALIYUN_REG="registry.aliyuncs.com/google_containers"
FLANNEL_REG="quay-mirror.qiniu.com/coreos"
LOCAL_REG="192.168.56.11/kubernetes"
K8S_VER=v1.15.5
PAUSE_VER=3.1
ETCD_VER=3.3.10
COREDNS_VER=1.3.1
FLANNEL_VER=v0.11.0-amd64

# Kubernetes Docker Images
IMAGES=(
  kube-proxy:${K8S_VER}
  kube-scheduler:${K8S_VER}
  kube-controller-manager:${K8S_VER}
  kube-apiserver:${K8S_VER}
  pause:${PAUSE_VER}
  etcd-amd64:${ETCD_VER}
  coredns:${COREDNS_VER}
)

for IMAGE in ${IMAGES[@]}
do
  docker pull ${ALIYUN_REG}/${IMAGE}
  docker tag ${ALIYUN_REG}/${IMAGE} ${LOCAL_REG}/${IMAGE}
  #docker push ${LOCAL_REG}/${IMAGES}
done

# Flannel

docker pull ${FLANNEL_REG}/flannel:${FLANNEL_VER}
docker tag ${FLANNEL_REG}/flannel:${FLANNEL_VER} ${LOCAL_REG}/flannel:${FLANNEL_VER}
```

# 第五部分 将应用迁移至Kubernetes

# 6 第一步：将应用封装进容器中

## 第一步：将应用封装进容器中

在之前的容器镜像实战中，我们已经学习了如何将应用容器化，这里我们将下载使用两个官方的Nginx镜像来完成接下来的实验。

### 部署Harbor镜像仓库

生产环境中可以使用Harbor来管理Docker镜像，请参考之前章节的内容完成Harbor镜像仓库的部署工作，并在Harbor中创建一个devopsedu的项目。

![img](http://k8s.unixhot.com/kubernetes/media/093b4b731c05b54a1b8426e924f93d45.png)

### 制作实验用的Docker镜像

这里不再演示Docker镜像的构建，直接下载两个官方镜像作为案例。

```
[root@linux-node1 ~]# docker pull nginx:1.13.12
[root@linux-node1 ~]# docker pull nginx:1.14.0
```

### 配置Docker仓库

```
[root\@linux-node1 ~]# vim /etc/docker/daemon.json
{
    "registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],
    "insecure-registries" : ["http://192.168.56.11"]
}

[root@linux-node1 ~]# systemctl restart docker
```

### 登录Harbor镜像仓库

```
[root@linux-node1 ~]# docker login 192.168.56.11
Username: admin
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
    Configure a credential helper to remove this warning. See
    https://docs.docker.com/engine/reference/commandline/login/\#credentials-store
    Login Succeeded
```

### 提交镜像到Registry

```
[root@linux-node1 ~]# docker tag nginx:1.13.12
192.168.56.11/devopsedu/nginx:1.13.12

[root@linux-node1 ~]# docker tag nginx:1.14.0
192.168.56.11/devopsedu/nginx:1.14.0

[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.13.12
[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.14.0
```

在上面的步骤中，模拟了生产环境如何构建和提交镜像，如果对于构建和提交镜像有疑问可以复习第3章的内容。

# 7 第二步：将容器封装到Pod中

Pod是Kubernetes最小的管理单元，一个Pod可以代表一个运行在集群里的进程。之前是在宿主机上运行不同的进程，现在是运行不同的Pod。前面介绍过Pod是一个逻辑架构的组件，Pod里封装了一个（或者多个）应用容器，存储资源和IP地址。

**为什么要造一个Pod出来？** 学习Kubernetes遇到的最多的名称可能就是Pod了，其它开源的容器管理平台例如Mesos直接管理和调度的是容器，但是Kubernetes确是Pod，它在容器上面做了一层封装，方便用户将一组紧耦合的容器，放置在一个共享资源的单元中。对于很多没有此类场景的初学者，可以暂时将Pod看做是容器的一个壳，你也完全可以只在Pod中运行一个容器，随着学习的深入再慢慢理解。 Kubernetes运行Pod的两种方式：

- Pod里只运行一个单独容器，是Kubernetes最常见的使用场景；在这种情况下，可以把Pod看做是一个单独容器的连接器，Kubernetes通过Pod去管理容器，作为使用者几乎不用关心容器。
- Pod里运行多个有关系容器。例如如果使用Nginx+Tomcat运行Java应用，可以制作一个镜像里面包含了Nginx+Tomcat，也可以分别制作两个镜像Nginx镜像和Tomcat镜像，如果使用Kubernetes就需要使用Pod，如果将Nginx和Tomcat单独放在两个Pod里面来管理，就会面临很多很多问题。这个时候，就可以把这两个容器放置在一个Pod中。

## Pod管理

在Kubernetes中使用YAML格式来描述一个Pod。

```
[root@linux-node1 ~]# vim nginx-pod.yaml 
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.13.12
    ports:
- containerPort: 80
```

Pod的YAML描述内容还有很多，在使用kubeadm部署Kubernetes的时候，就是使用静态Pod的方式运行的相关服务，YAML文件存放在，当然现在很多配置还是看不懂的，带着问题继续学习。

```
[root@linux-node1 ~]# ls -l /etc/kubernetes/manifests/
total 16
-rw------- 1 root root 2041 Feb 11 20:33 etcd.yaml
-rw------- 1 root root 2700 Feb 11 20:33 kube-apiserver.yaml
-rw------- 1 root root 2345 Feb 11 20:33 kube-controller-manager.yaml
-rw------- 1 root root 1080 Feb 11 20:33 kube-scheduler.yaml
```

创建Pod

```
[root@linux-node1 ~]# kubectl create -f nginx-pod.yaml 
pod "nginx-pod" created
```

查看Pod

```
[root@linux-node1 ~]# kubectl get pod
NAME                                READY     STATUS    RESTARTS   AGE
nginx-pod                           1/1       Running   0          49s
```

查看Pod更多信息

```
[root@linux-node1 ~]# kubectl get pod -o wide
NAME                                READY     STATUS    RESTARTS   AGE       IP           NODE
nginx-pod  1/1       Running   0          1m        10.2.53.18   192.168.56.13
```

查看Pod详情

```
[root@linux-node1 ~]# kubectl describe pod nginx-pod
Name:         nginx-pod
Namespace:    default
Node:         192.168.56.13/192.168.56.13
Start Time:   Sat, 02 Jun 2018 06:42:53 +0800
Labels:       app=nginx
Annotations:  <none>
Status:       Running
IP:           10.2.53.18
```

查看Pod日志

```
[root@linux-node1 ~]# kubectl logs pod/nginx-pod
```

**Pod中的镜像拉取策略** 当kubelet尝试拉取指定的镜像时，[imagePullPolicy]和镜像的标签会生效。

- imagePullPolicy: IfNotPresent：仅当镜像在本地不存在时镜像才被拉取。
- imagePullPolicy: Always：每次启动 pod 的时候都会拉取镜像。

省略imagePullPolicy，镜像标签为:latest或被省略，Always被应用。 imagePullPolicy被省略，并且镜像的标签被指定且不是:latest，IfNotPresent被应用。 imagePullPolicy: Never：镜像被假设存在于本地。 没有尝试拉取镜像。

# 7.3 第三步：使用Controllers管理Pod

在实际的生产环境中，我们其实很少单独创建Pod，而是通过控制器来进行Pod的管理，Kubernetes提供了很多的控制器，一个 Controllers 可以创建和管理很多个 Pod, 也提供复制、初始化，以及提供集群范围的自我恢复的功能。比如说： 如果一个节点宕机，Controller 将调度一个在其他节点上完全相同的 pod 来自动取代当前的 pod。

# 8.1 Replication Controller控制器

# 8.2 Replica Sets控制器

# 8.3 Deployment控制器

# 8.4 DaemonSet控制器

DaemonSet 确保全部（或者一些）Node 上运行一个 Pod 的副本。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。 使用 DaemonSet 的一些典型用法：

- 运行集群存储 daemon，例如在每个 Node 上运行 glusterd、ceph。
- 在每个 Node 上运行日志收集 daemon，例如filebeat、logstash。
- 在每个 Node 上运行监控 daemon，例如 Prometheus Node Exporter、collectd、Datadog 代理、Zabbix Agent。

**创建DaemonSet**

DaemonSet的描述文件和Deployment非常相似，只需要修改Kind，并去掉副本数量的配置即可

```
[root@linux-node1 example]# vim nginx-daemonset.yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.13.12
        ports:
        - containerPort: 80
```

查看Pod在Node上的分布

```
[root@linux-node1 ~]# kubectl get pod -o wide
NAME                    READY     STATUS    RESTARTS   AGE       IP           NODE
nginx-daemonset-hk28q   1/1       Running   0          1m        10.2.56.10   192.168.56.12
nginx-daemonset-wtt68   1/1       Running   0          1m        10.2.53.10   192.168.56.13

[root@linux-node1 ~]# kubectl get daemonset
NAME              DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
nginx-daemonset   2         2         2         2            2           <none>          1m
```

# 7.4 第四步：使用Service管理Pod访问

在上面的小节，我们通过Deployment可以为一个应用创建多个Pod，而且可以动态的进行增加、或者删除多余的Pod，Kubernetes Pod 是有生命周期的，它们可以被创建，也可以被销毁，但是每次Pod的IP地址就会发生变化，外面如何访问到该Pod呢？总不能每次Pod重启就修改访问的IP地址吧。 每个 Pod 都会获取它自己的 IP 地址，但是每次即使这些 IP 地址不总是稳定可依赖的。 这会导致一个问题：在 Kubernetes 集群中，如果一组 Pod（称为 backend）为其它 Pod （称为 frontend）提供服务，那么那些 frontend 该如何发现，并连接到这组 Pod 中的哪些 backend 呢？

# 9.1 Service介绍和管理

### 创建Service

继续我们Nginx的案例，我们为之前的应用创建一个Service

```
[root@linux-node1 ~]# cat nginx-service.yaml 
kind: Service
apiVersion: v1
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

- 第1行：定义资源类型为Service
- 第2行：定义当前Service API的版本
- 第3行：metadata设置
- 第4行：设置Service的名称为nginx-service
- 第5行：spec: 开始设置Service的内容
- 第6行：selector: 为该Service指定一个匹配的标签
- 第7行：app: nginx 所有带有标签app ：nginx的Pod将使用该Service
- 第8行：ports: 指定Service需要对外的端口
- 第9行：设置端口协议：支持TCP和UDP
- 第10行：设置Service的端口
- 第11行：设置Pod的端口，Kubernetes会将发送给Service端口的连接，转发到Pod的端口上。

创建Nginx Service

```
[root@linux-node1 ~]# kubectl create -f nginx-service.yaml 
service "nginx-service" created
```

查看Nginx Service

```
[root@linux-node1 ~]# kubectl get service
NAME            TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE
kubernetes      ClusterIP   10.1.0.1      <none>        443/TCP   7h
nginx-service   ClusterIP   10.1.184.53   <none>        80/TCP    25s
```

访问Servce IP

```
[root@linux-node1 ~]# curl --head 10.1.181.45
HTTP/1.1 200 OK
Server: nginx/1.11.10
Date: Tue, 21 Feb 2017 08:20:42 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 14 Feb 2017 15:36:04 GMT
Connection: keep-alive
ETag: "58a323e4-264"
Accept-Ranges: bytes
```

# 9.2 Service和Endpoint

Service作为Kubernetes中为Pod实现负载均衡的组件，几乎在所有的文章中为了方便初学者理解，基本上说的是Service会来监听Pod的变化，然后来更新Pod的IP地址。其实这个事情不是Service干的，而是有一个幕后英雄：Endpoint Endpoints表示了一个Service对应的所有Pod副本的访问地址，而Endpoints Controller负责生成和维护所有Endpoints对象的控制器。它负责监听Service和对应的Pod副本的变化。

- 如果监测到Service被删除，则删除和该Service同名的Endpoints对象；
- 如果监测到新的Service被创建或修改，则根据该Service信息获得相关的Pod列表，然后创建或更新Service对应的Endpoints对象。
- 如果监测到Pod的事件，则更新它对应的Service的Endpoints对象。

kube-proxy进程获取每个Service的Endpoints，实现Service的负载均衡功能。

### 创建一个Headless Service

编写一个Service不使用clusterip

```
[root@linux-node1 ~]# cat mysql-service.yaml 
kind: Service
apiVersion: v1
metadata:
  name: mysql-service
spec:
  ports:
  - protocol: TCP
    port: 3306
    targetPort: 3306
  clusterIP: None

[root@linux-node1 ~]# kubectl create -f mysql-service.yaml 
service "mysql-service" created
```

查看Service，可以放心CLUSTER-IP为None

```
[root@linux-node1 ~]# kubectl get service mysql-service
NAME            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
mysql-service   ClusterIP   None         <none>        3306/TCP   17s
```

2.创建一个Endpoint

```
[root@linux-node1 ~]# vim mysql-endpoint.yaml 
apiVersion: v1
kind: Endpoints
metadata:
 name: mysql-service
subsets:
- addresses:
  - ip: 192.168.56.13
  ports:
  - port: 3306
    protocol: TCP

[root@linux-node1 ~]# kubectl create -f mysql-endpoint.yaml 
endpoints "mysql-service" created
```

3.查看Service和Endpoint的关联

```
[root@linux-node1 ~]# kubectl get ep mysql-service
NAME            ENDPOINTS            AGE
mysql-service   192.168.56.13:3306   42s
[root@linux-node1 ~]# kubectl describe svc mysql-service
Name:              mysql-service
Namespace:         default
Labels:            <none>
Annotations:       <none>
Selector:          <none>
Type:              ClusterIP
IP:                None
Port:              <unset>  3306/TCP
TargetPort:        3306/TCP
Endpoints:         192.168.56.13:3306
Session Affinity:  None
Events:            <none>
```

# 7.5 第五步：使用Ingress提供外部访问

通过Service可以将Kubernetes集群中的服务以IP：Port的方式暴露出来，我们称之为4层的负载均衡，因为这个是OSI七层模型中传输层的功能。

那么如何实现七层的负载均衡呢，例如像Nginx那样，可以灵活的进行反向代理的设置，根据不同的URL进行转发等，难道我需要自己部署一个Nginx来做这个事情吗？首先，如果你有这个想法，并没有错，甚至你完全可以自己独立部署一个Nginx来完成，但是Kubernetes提供了更好的解决方案就是Ingress。 Ingress就是从kubernetes集群外访问集群的入口，将用户的URL请求转发到不同的service上。ingress相当于nginx反向代理服务器，它包括的规则定义就是URL的路由信息。

## 10.1 Ingress Controller

在学习Service的时候，我们知道最终的负载均衡由kube-proxy和LVS来完成，那么Ingress靠什么来实现7层的路由机制呢？答案是Ingress Controller。

Ingress Controller 实质上可以理解为是个监视器，Ingress Controller 通过不断地跟 kubernetes API 打交道，实时的感知后端 service、pod 等变化，比如新增和减少 pod，service 增加与减少等；当得到这些变化信息后，Ingress Controller 再结合下文的 Ingress 生成配置，然后更新反向代理负载均衡器，并刷新其配置，达到服务发现的作用。

Ingress Controller目前有两大开源项目，一个是Nginx Controller，一个是目前比较流行的Traefik，Traefik是一款开源的反向代理与负载均衡工具。它最大的优点是能够与常见的微服务系统直接整合，可以实现自动化动态配置。目前支持Docker, Swarm, Mesos/Marathon, Mesos, Kubernetes, Consul, Etcd, Zookeeper, BoltDB, Rest API等等后端模型。

## Ingress Controller Traefik

### 部署Treafik

```
[root@linux-node1 ~]# kubectl label nodes 192.168.56.12 edgenode=true
node "192.168.56.12" labeled
[root@linux-node1 ~]# kubectl create -f /srv/addons/ingress/
```

# 11 第六步：使用PV和PVC管理数据存储

截止目前我们所启动Pod的容器中的数据存储都是临时的，因此Pod重启或者被删除的时候，产生在容器中的数据会发生丢失。实际应用中，我们有些应用是无状态，有些应用则需要保持状态数据，确保Pod重启之后能够读取到之前的状态数据，有些应用则作为集群提供服务。这三种服务归纳为无状态服务、有状态服务以及有状态的集群服务，其中后面两个存在数据保存与共享的需求，因此就要采用容器外的存储方案。 Kubernetes中存储中有四个重要的概念：Volume、PersistentVolume（PV）、PersistentVolumeClaim （PVC）、StorageClass。掌握了这四个概念，就掌握了Kubernetes中存储系统的核心。

# 11.1 Kubernetes Volume

# 11.2 PersistentVolume（PV）

PersistentVolume（PV）是由管理员设置的存储，它是群集的一部分。就像节点是集群中的资源一样，PV 也是集群中的资源。 PV 是 Volume 之类的卷插件，但具有独立于使用 PV 的 Pod 的生命周期。此 API 对象包含存储实现的细节，即 NFS、iSCSI 或特定于云供应商的存储系统。

**1.安装并配置NFS**

```
[root@linux-node1 ~]# yum install -y nfs-utils rpcbind
[root@linux-node1 ~]# mkdir -p /data/k8s-nfs
[root@linux-node1 ~]# vim /etc/exports
/data/k8s-nfs *(rw,sync,no_root_squash)
```

启动NFS

```
[root@linux-node1 ~]# systemctl enable rpcbind nfs
[root@linux-node1 ~]# systemctl start rpcbind nfs
```

**2.创建并查看PV**

```
[root@linux-node1 ~]# vim nfs-pv.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-demo
spec:
  capacity:
storage: 1Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: nfs
  nfs:
    path: /data/k8s-nfs/pv-demo
    server: 192.168.56.11
[root@linux-node1 ~]# kubectl create -f nfs-pv.yaml 
persistentvolume "pv-demo" created
```

查看创建的PV

```
[root@linux-node1 ~]# kubectl get pv
NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM     STORAGECLASS   REASON    AGE
pv-demo   1Gi        RWO            Recycle          Available             nfs                      15s
```

# 11.3 PersistentVolumeClaim（PVC）

PersistentVolumeClaim（PVC）是用户存储的请求。它与 Pod 相似。Pod 消耗节点资源，PVC 消耗 PV 资源。Pod 可以请求特定级别的资源（CPU 和内存）。声明可以请求特定的大小和访问模式（例如，可以以读/写一次或 只读多次模式挂载）。

1.创建PVC

```
[root@linux-node1 ~]# vim nfs-pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: nfs
```

创建并查看PVC

```
[root@linux-node1 ~]# kubectl create -f nfs-pvc.yaml 
persistentvolumeclaim "pvc-demo" created
[root@linux-node1 ~]# kubectl get pvc
NAME       STATUS    VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE
pvc-demo   Bound     pv-demo   1Gi        RWO            nfs            6s
```

2.使用PVC

```
[root@linux-node1 ~]# vim nginx-deployment-pvc.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.13.12
        ports:
        - containerPort: 80
        volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: pvc-demo
      volumes:
      - name: pvc-demo
        persistentVolumeClaim:
          claimName: pvc-demo
```

# 11.4 StorageClass

# 7 第七步：使用Rancher管理Kubernetes集群

现在我们已经具备把应用迁移到Kubernetes中来的能力，那么现在，迁移后，日常的运维工作就发生的变化，截止目前，在生产环境中，我们很少使用官方自带的Dashbaord来完成日常的运维工作，而是使用第三方的运维工具Rancher。

## 7.1 Rancher快速入门

快速部署单机版Rancher

```
[root@linux-node1 ~]# mkdir /opt/rancher
[root@linux-node1 ~]# docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher/ -p 80:80 -p 443:443 rancher/rancher
```

## 7.2 使用Rancher进行日常管理

## 7.3 Rancher生产集群部署

# 第六部分 管理Kubernetes中的应用

# 13 应用的资源限制和健康检查

# 13.1 应用的资源限制

# 13.2 应用的健康检查

### Liveness探测

Kubernetes有两种探测机制，Liveness和Readiness，配置都是相似的，只是实现的功能不同。 Liveness探测是针对Pod健康状态的探测，类似于集群中的健康检查，用户可以自定义这个健康检查的条件，如果探测失败，Kubernetes将会重启容器。 如果您希望容器在探测失败时被杀死并重新启动，那么请指定一个Liveness配置，并指定restartPolicy 为 Always 或 OnFailure。 配置案例

```
livenessProbe:
exec:
    command:
    - ps aux | grep nginx
initialDelaySeconds: 10
periodSeconds: 5
timeoutSeconds: 3
```

### Readiness探测

Readiness探测是探测Pod是否准备好对外提供访问，例如我们在Pod里面运行一个Tomcat的容器，里面运行了一个Jenkins的应用，那么等Jenkins完全启动能提供服务可能需要1分钟，所以在在1分钟之前是不能提供给用户访问的，也就是不能加入Service的负载均衡中，这个就靠Readiness探测来控制。 Readiness用来控制告诉Kubernetes什么时间可以将容器加入到Service的负载均衡中，配置方法和Liveness一样，只需要修改livennessProbe替换为readinessProbe即可。

## 健康检查的方法

Kubernetes的健康检查是由运行在各个Node上的kubelet来完成的，kubelet目前支持以下三种健康检查的方法：

- ExecAction：在容器中执行指定的命令。如果命令退出时状态码为0，则认为诊断成功。
- TCPSocketAction:对指定端口上容器的IP地址执行TCP检查。如果端口是打开的，则认为诊断是成功的。
- HTTPGetAction:对指定端口和路径上容器的IP地址执行HTTP Get请求。如果响应的状态码大于或等于200，小于400，则认为诊断是成功的。

以上三种健康检查的方法会有三种返回结果：

- Success：成功，容器通过诊断。

- Failure：失败，容器诊断失败。

- Unknown：探测失败，无法执行探测，所以不应该采取任何行动。

  针对于探针有以下配置参数，需要注意不管是Liveness还是Readiness探测，探针的使用都是相同的，唯一的不同是探测完毕后，执行操作的不同。

- initialDelaySeconds: 探测的延迟时间，单位是秒。也就是说在容器启动多少秒之后开始进行第一次探测，例如你启动一个Java的应用需要50秒，那么这个值就需要大于50s。所以这个值是需要根据应用的具体情况来设置。

- periodSeconds：探测执行的周期时间，单位是秒。是指每隔多长时间执行一次探测，频率越高，发现故障的时间也就越短，并不是越短越好。如果应用服务不够稳定，太高的频率反而会导致很多你认为的“误报”。默认是10秒，最小值是1秒。

- timeoutSeconds: 探测超时时间，单位是秒，执行探测如果超过这个时间没有返回结果，变意味着探测的结果是失败。默认为1秒。最小值是1秒。

- failureThreshold：探测成功后，最少连续探测失败多少次才被认定为失败。这个是Kubernetes将在放弃之前尝试失败阈值时间。放弃生命探测意味着重新启动Pod。一旦准备就绪，Pod将被标记为未准备就绪。默认为3。最小值是1。

- successThreshold: 在探测失败后，最少连续探测成功多少次才被认定为成功。默认为1，也就是必须探测成功1次，才能认为状态恢复，最小值是1。

  # 管理应用的DNS访问

# [14.1 Kubernetes中的DNS](http://k8s.unixhot.com/)

# 应用的DNS管理

### Pod的域名解析策略

```
[root@linux-node1 ~]# kubectl run dns-test --generator=run-pod/v1 --image=alpine --replicas=1 sleep 360000
pod/dns-test created
```

查看Pod

```
[root@linux-node1 ~]# kubectl get pod dns-test
NAME       READY   STATUS    RESTARTS   AGE
dns-test   1/1     Running   0          79s
```

Pod默认的DNS配置

```
[root@linux-node1 ~]# kubectl exec -it dns-test /bin/sh
/ # cat /etc/resolv.conf 
nameserver 10.1.0.10
search default.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```

如何访问Service名称

```
/ # ping -c 3 wordpress-service.default.svc.cluster.local
PING wordpress-service.default.svc.cluster.local (10.1.92.244): 56 data bytes
64 bytes from 10.1.92.244: seq=0 ttl=64 time=0.074 ms
64 bytes from 10.1.92.244: seq=1 ttl=64 time=0.141 ms
64 bytes from 10.1.92.244: seq=2 ttl=64 time=0.187 ms

--- wordpress-service.default.svc.cluster.local ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss
round-trip min/avg/max = 0.074/0.134/0.187 ms
```

DNS查询策略

```
[root@linux-node1 ~]# kubectl get pod dns-test -o yaml | grep dnsPolicy
  dnsPolicy: ClusterFirst
```

- Default: Pod从其运行的节点中继承名称解析配置。
- ClusterFirst:（默认策略）与配置的群集域名后缀不匹配的任何DNS查询都将转发到从节点继承的上游名称服务器。
- ClusterFirstWithHostNet: 如果Pod使用了hostNetwork（例如Ingress Controller Treafik就是使用了hostNetwok），应显式设置其DNS策略为“ClusterFirstWithHostNet”。
- None: 它允许Pod忽略Kubernetes环境中的DNS设置，这时候会使用Pod Spec中的dnsConfig字段提供的DNS设置。

## 应用的DNS管理

## 15.1 使用ConfigMap管理应用配置

### 通过kubectl命令创建ConfigMap

**创建一个名称为cmd-config的ConfigMap**

```
[root@k8s-master1 ~]# kubectl create configmap cmd-config --from-literal=host=www.unixhot.com
configmap/cmd-config created
```

**查看ConfigMap**

```
[root@k8s-master1 ~]# kubectl get configmap
NAME         DATA   AGE
cmd-config   1      63s
```

**查看ConfigMap内容**

```
[root@k8s-master1 ~]# kubectl describe configmap cmd-config
Name:         cmd-config
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
host:
----
www.unixhot.com
Events:  <none>
```

**ConfigMap中包含多个键值对** 可以多次使用--from-literal为一个ConfigMap创建多个键值对，中间用空格分隔

```
[root@k8s-master1 ~]# kubectl create configmap mcmd-config --from-literal=host=www.unixhot.com --from-literal=port=443 --from-literal=ssl=on
configmap/mcmd-config created
```

### 通过YAML文件创建ConfigMap

查看已创建的ConfigMap生成的YAML文件

```
[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml
apiVersion: v1
data:
  host: www.unixhot.com
  port: "443"
  ssl: "on"
kind: ConfigMap
metadata:
  creationTimestamp: "2019-11-05T01:45:13Z"
  name: mcmd-config
  namespace: default
  resourceVersion: "5394993"
  selfLink: /api/v1/namespaces/default/configmaps/mcmd-config
  uid: 02012d69-e324-4e9d-ba04-7132e9f6ecd8
```

只需要将metadata中无需指定的字段去掉即可生成一个YAML文件。

```
[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml > mcmd-config-v2.yaml
[root@k8s-master1 ~]# vim mcmd-config-v2.yaml 
apiVersion: v1
data:
  host: www.unixhot.com
  port: "443"
  ssl: "on"
kind: ConfigMap
metadata:
  name: mcmd-config-v2
  namespace: default
```

注意需要修改metadata.name,修改完毕后直接创建即可

```
[root@k8s-master1 ~]# kubectl create -f mcmd-config-v2.yaml 
configmap/mcmd-config-v2 created
[root@k8s-master1 ~]# kubectl get configmap
NAME             DATA   AGE
cmd-config       1      24m
mcmd-config      3      16m
mcmd-config-v2   3      9s
```

### 通过文件创建ConfigMap

ConfigMap除了可以存储单个或者多个键值对之外，可以存储完整的配置文件，将单个配置文件直接转换为ConfigMap在生产中十分常用

```
[root@k8s-master1 ~]# kubectl create configmap file-config --from-file=/etc/hosts
configmap/file-config created
```

可以看到ConfigMap直接存储了文件的内容，Key名称为文件名hosts，也可以手动指定Key的名称。

```
[root@k8s-master1 ~]# kubectl describe configmap file-config
Name:         file-config
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
hosts:
----
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.99.27 k8s-master1 k8s-master1.dianjoy.com 
192.168.99.28 k8s-master2 k8s-master2.dianjoy.com
192.168.99.29 k8s-master3 k8s-master3.dianjoy.com


Events:  <none>
```

将Key手动指定为host-hosts

```
[root@k8s-master1 ~]# kubectl create configmap file-config-v2 --from-file=host-hosts=/etc/hosts
configmap/file-config-v2 created
[root@k8s-master1 ~]# kubectl describe configmap file-config-v2
Name:         file-config-v2
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
host-hosts:
----
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.99.27 k8s-master1 k8s-master1.dianjoy.com 
192.168.99.28 k8s-master2 k8s-master2.dianjoy.com
192.168.99.29 k8s-master3 k8s-master3.dianjoy.com


Events:  <none>
```

### 从目录创建ConfigMap

ConfigMap还支持通过目录创建，kubectl会为目录中的每个文件单独创建条目，需要注意的是如果目录下面包含子目录，会忽略这些子目录和子目录里面的内容。

```
[root@k8s-master1 ~]# kubectl create configmap dir-config --from-file=/etc/kubernetes
configmap/dir-config created
```

### 混合选项创建ConfigMap

同时使用命令行、文件、目录创建ConfigMap也是支持的，只需要使用不同的选项即可。

```
[root@k8s-master1 ~]# kubectl create configmap mycp --from-literal=env=test \
 --from-file=/etc/hosts \
 --from-file=myhosts=/etc/hosts \
 --from-file=/etc/kubernetes
configmap/mycp created
```

ConfigMap的内容可以通过环境变量的形成传递给容器，也可通过和Volume的形式挂载到容器中。

### 通过环境变量给容器传递ConfigMap

可以将ConfigMap中的键值对数据通过环境变量的形式传递到容器中，这样在配置容器的时候有一些数据可以使用环境变量，然后使用ConfigMap进行填充，这样就可以实现配置和Pod的分离。

## 15.2 使用Secret管理敏感数据

```
在应用启动过程中经常会有一些敏感信息需要存储，例如用户名和密码等，如果直接明文的方式保存会有安全风险。在Kubernetes中Secret这个资源对象类型用来保存敏感信息，例如密码、密钥、访问令牌、SSH Key等你认为需要保密的敏感信息。相对于将这些内容保存到容器镜像或者Pod的定义文件中，更加的灵活和安全。
```

### 配置Pod使用Harbor镜像

1．docker login得到 docker密码文件

```
[root@linux-node1 ~]# docker login 192.168.56.11
```

2.对密码文件进行加密

```
[root@linux-node1 ~]# cat /root/.docker/config.json |base64
```

3.创建harbor使用的Secret YAML文件：

```
[root@linux-node1 ~]# vim harbor-secret.yaml 
apiVersion: v1
kind: Secret
metadata:
  name: harbor-secret
  namespace: default
data:
  .dockerconfigjson: 'ewoJImF1dGhzIjogewoJCSJyZWcuZ3JlYXRvcHMubmV0IjogewoJCQkiYXV0aCI6ICJZV1J0YVc0Nk1YRmhlbmh6ZHpJPSIKCQl9Cgl9Cn0='
type: kubernetes.io/dockerconfigjson
```

4.创建Secret

```
[root@jenkins k8s-deploy]# kubectl create -f reg-harbor.yaml 
secret "reg-harbor" created
```

5.创建pod并挂载资源

```
apiVersion: v1
kind: Pod
metadata:
  name: sectest
spec:
  containers:
  - name: sectest
    image: 123.207.154.16/base/redis:alpine
    ports:
    - containerPort: 6379
  imagePullSecrets:
    - name: harbor-secret
```

# 使用Helm管理Kubernetes应用

通过前面的学习，掌握了将应用迁移至Kubernetes的步骤和技巧，过程比较艰辛。例如我们创建一个应用，涉及到Deployment、Service、Ingress、PV、PVC，如何有效的管理这些资源呢，Kubernetes给出了一个最佳实践就是Helm。 Helm是一个kubernetes应用的包管理工具，用来管理charts——预先配置好的安装包资源，有点类似于Ubuntu的APT和CentOS中的yum。 Helm chart是用来封装kubernetes原生应用程序的yaml文件，可以在你部署应用的时候自定义应用程序的一些metadata，便与应用程序的分发。

Helm和charts的主要作用：

- 应用程序封装
- 版本管理
- 依赖检查
- 便于应用程序分发

## Helm部署

### 安装Helm

1.部署Helm客户端

```
[root@linux-node1 ~]# cd /usr/local/src
[root@linux-node1 src]# wget https://get.helm.sh/helm-v3.0.2-linux-amd64.tar.gz
[root@linux-node1 src]# tar zxf helm-v3.0.2-linux-amd64.tar.gz
[root@linux-node1 src]# mv linux-amd64/helm /usr/local/bin/
```

2.验证安装是否成功

```
[root@linux-node1 ~]# helm version
version.BuildInfo{Version:"v3.0.2", GitCommit:"19e47ee3283ae98139d98460de796c1be1e3975f", GitTreeState:"clean", GoVersion:"go1.13.5"}
```

### 使用Helm部署第一个应用

4.搜索Helm应用

```
[root@linux-node1 ~]# helm search jenkins
NAME              CHART VERSION    APP VERSION    DESCRIPTION                                       
stable/jenkins    0.13.5           2.73           Open source continuous integration server. It s...
```

5.查看仓库

```
[root@linux-node1 ~]# helm repo list
NAME      URL                                                   
stable    https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts
local     http://127.0.0.1:8879/charts
```

6.安装第一个应用

```
[root@linux-node1 ~]# helm install stable/jenkins
NAME:   viable-seal
LAST DEPLOYED: Thu Jul 26 19:21:07 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                       DATA  AGE
viable-seal-jenkins        3     1s
viable-seal-jenkins-tests  1     1s

==> v1/PersistentVolumeClaim
NAME                 STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE
viable-seal-jenkins  Pending  1s

==> v1/Service
NAME                       TYPE          CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE
viable-seal-jenkins-agent  ClusterIP     10.1.154.54  <none>       50000/TCP       1s
viable-seal-jenkins        LoadBalancer  10.1.63.24   <pending>    8080:20031/TCP  0s

==> v1beta1/Deployment
NAME                 DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
viable-seal-jenkins  1        1        1           0          0s

==> v1/Pod(related)
NAME                                  READY  STATUS   RESTARTS  AGE
viable-seal-jenkins-7f5c7bd8d4-gc5hv  0/1    Pending  0         0s

==> v1/Secret
NAME                 TYPE    DATA  AGE
viable-seal-jenkins  Opaque  2     1s


NOTES:
1. Get your 'admin' user password by running:
  printf $(kubectl get secret --namespace default viable-seal-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
2. Get the Jenkins URL to visit by running these commands in the same shell:
  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        You can watch the status of by running 'kubectl get svc --namespace default -w viable-seal-jenkins'
  export SERVICE_IP=$(kubectl get svc --namespace default viable-seal-jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
  echo http://$SERVICE_IP:8080/login

3. Login with the password from step 1 and the username: admin

For more information on running Jenkins on Kubernetes, visit:
https://cloud.google.com/solutions/jenkins-on-container-engine
```

# 15.2 深入理解Helm

### Helm组件

```
[root@linux-node1 ~]# tree ~/.helm/
/root/.helm/
├── cache
│   └── archive
│       └── jenkins-0.13.5.tgz
├── plugins
├── repository
│   ├── cache
│   │   ├── local-index.yaml -> /root/.helm/repository/local/index.yaml
│   │   └── stable-index.yaml
│   ├── local
│   │   └── index.yaml
│   └── repositories.yaml
└── starters

7 directories, 5 files
```

默认缓存的文件

```
[root@linux-node1 ~]# cd .helm/cache/archive/
[root@linux-node1 archive]# ls -l
total 16
-rw-r--r-- 1 root root 12650 Jul 26 19:21 jenkins-0.13.5.tgz

[root@linux-node1 archive]# tar zxf jenkins-0.13.5.tgz


[root@linux-node1 archive]# mv jenkins ~/.helm/repository/local/

[root@linux-node1 ~]# cd ~/.helm/repository/local/jenkins/
[root@linux-node1 jenkins]# tree
.
├── Chart.yaml
├── OWNERS
├── README.md
├── templates
│   ├── config.yaml
│   ├── _helpers.tpl
│   ├── home-pvc.yaml
│   ├── jenkins-agent-svc.yaml
│   ├── jenkins-master-deployment.yaml
│   ├── jenkins-master-ingress.yaml
│   ├── jenkins-master-networkpolicy.yaml
│   ├── jenkins-master-svc.yaml
│   ├── jenkins-test.yaml
│   ├── jobs.yaml
│   ├── NOTES.txt
│   ├── rbac.yaml
│   ├── secret.yaml
│   ├── service-account.yaml
│   └── test-config.yaml
└── values.yaml

1 directory, 19 files
```

### 自定义Jenkins的Chart

修改为NodePort

```
[root@linux-node1 jenkins]# vim values.yaml
ServiceType: NodePort
```

检查

```
[root@linux-node1 ~]# helm lint ~/.helm/repository/local/jenkins/
==> Linting /root/.helm/repository/local/jenkins/
Lint OK

1 chart(s) linted, no failures
```

查看有哪些应用

```
[root@linux-node1 ~]# helm list
NAME           REVISION    UPDATED                     STATUS      CHART          NAMESPACE
viable-seal    1           Thu Jul 26 19:21:07 2018    DEPLOYED    jenkins-0.13.5 default
[root@linux-node1 ~]# helm delete --purge viable-seal
release "viable-seal" deleted

[root@linux-node1 ~]# helm install ~/.helm/repository/local/jenkins/ --name devops-jenkins 
NAME:   devops-jenkins
LAST DEPLOYED: Thu Jul 26 19:36:10 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME            TYPE    DATA  AGE
devops-jenkins  Opaque  2     0s

==> v1/ConfigMap
NAME                  DATA  AGE
devops-jenkins        3     0s
devops-jenkins-tests  1     0s

==> v1/PersistentVolumeClaim
NAME            STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE
devops-jenkins  Pending  0s

==> v1/Service
NAME                  TYPE       CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE
devops-jenkins-agent  ClusterIP  10.1.74.175  <none>       50000/TCP       0s
devops-jenkins        NodePort   10.1.3.112   <none>       8080:23558/TCP  0s

==> v1beta1/Deployment
NAME            DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
devops-jenkins  1        1        1           0          0s

==> v1/Pod(related)
NAME                            READY  STATUS   RESTARTS  AGE
devops-jenkins-64d54b79c-pwjfb  0/1    Pending  0         0s


NOTES:
1. Get your 'admin' user password by running:
  printf $(kubectl get secret --namespace default devops-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
2. Get the Jenkins URL to visit by running these commands in the same shell:
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services devops-jenkins)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT/login

3. Login with the password from step 1 and the username: admin

For more information on running Jenkins on Kubernetes, visit:
https://cloud.google.com/solutions/jenkins-on-container-engine
```

查看状态

```
[root@linux-node1 ~]# helm status devops-jenkins
```

## 创建自己的Chart

### 创建自定义Nginx的Chart

1.创建自定义Chart Nginx的结构

```
[root@linux-node1 ~]# helm create helm-nginx
Creating helm-nginx
 [root@linux-node1 ~]# tree helm-nginx/
opencmdb/
├── charts       #依赖的chart
├── Chart.yaml   #本chart的信息
├── templates    #模板目录
│   ├── deployment.yaml
│   ├── _helpers.tpl
│   ├── ingress.yaml
│   ├── NOTES.txt
│   └── service.yaml
└── values.yaml   #模板赋值
```

2.编辑Chart配置

```
[root@linux-node1 ~]# cd helm-nginx/
[root@linux-node1 helm-nginx]# vim values.yaml
```

3.验证Chart配置，最后面的点表示当前目录

```
[root@linux-node1 helm-nginx]# helm install --dry-run --debug --name helm-nginx .
```

4.安装自定义Chart，最后面的点表示当前目录

```
[root@linux-node1 helm-nginx]# helm install --name helm-nginx .
```

### 查看Helm实例

```
[root@linux-node1 ~]# helm list
NAME          REVISION    UPDATED                     STATUS      CHART                 NAMESPACE
helm-nginx    1           Sun Sep 16 19:32:19 2018    DEPLOYED    helm-nginx-0.1.0      default  
[root@linux-node1 ~]# kubectl get pod
NAME                          READY     STATUS    RESTARTS   AGE
helm-nginx-6975f8dbcd-htvtd   1/1       Running   0          51s

[root@linux-node1 ~]# kubectl get ingress
NAME         HOSTS                ADDRESS   PORTS     AGE
helm-nginx   www.helm-nginx.com             80        1m
```

# 17 应用的日志采集与分析

## Prometheus快速入门

### Prometheus架构介绍

在学习Prometheus之前我们需要清晰的掌握其架构，Prometheus是由多个组件组成的的监控系统，主要有：Prometheus Server、Alertmanager、Pushgateway组成，这三个组件均为独立的应用服务，独立部署和运行，其中Prometheus Server中内置了Prometheus web UI。

![architecture](http://k8s.unixhot.com/kubernetes/media/2ada1ece66fcc81d704c2ba46f9dd7d3.png)

**Prometheus Server：**

Promethedus Server是核心组件，负责数据的获取、存储、查询。Prometheus通过Pull的方式定期的从Jobs/Exporters中获取数据，并保存在内置的TSDB中；内置的Prometheus web UI可以让用户通过PromQL的方式进行数据的检索。

**Exporters：**

Exporters也是一个独立的组件，有官方提供的Exporters也有社区贡献的Exportes，它将监控采集的数据通过HTTP的方式暴露给Prometheus Server，Server定期获取数据。例如有一个Exporters叫做Node Exporter，它安装在受采集的主机上，为Server提供数据，有点类似于Zabbix监控系统中的Zabbix Agent。

**Prometheus web UI：**

Prometheus web UI是Server启动后内置的一个Web界面，通过该Web界面我们可以进行数据查询工作，不包含设置的相关功能。

![img](http://k8s.unixhot.com/kubernetes/media/cc11e0cf02ff729fb905ac3648af18f7.png)

**PromQL：**

PromQL是Prometheus内置的自定义的查询语言，提供对Prometheus Server中的TSDB这个时间序列数据库进行数据查询，支持数据聚合和一些逻辑运算，是一个相对简单的查询语言，而且PromQL也提供了一些内置函数，帮助我们进行数据处理。

**Alertmanager：**

Alertmanager是Promethedus的告警管理组件，它支持基于PromQL来创建告警规则，类似于Zabbix中的告警表达式，对获取到的数据进行计算和比较，如果满足PromQL定义的规则条件，就会产生报警。

**Pushgateway：**

Pushgateway可以理解为数据的一个中转站，例如当Prometheus Server不能直接和Exporters进行通信的场景下。

### 安装Prometheus

学习Prometheus的第一步就是先部署一个实验环境，官方提供了多种方式进行Prometheus安装：

- 源码编译安装
- 下载预编译好的二进制文件
- 使用Docker部署
- 使用第三方工具：Ansible、SaltStack、Puppet、Chef。

为了方便学习，首先我们使用二进制方式部署，可以在这里https://prometheus.io/download/下载对应的预编译的二进制文件。

```
[root@linux-node1 ~]# cd /usr/local/src

[root@linux-node1 src]# wget
https://github.com/prometheus/prometheus/releases/download/v2.7.1/prometheus-2.7.1.linux-amd64.tar.gz

[root@linux-node1 src]# tar zxf prometheus-2.7.1.linux-amd64.tar.gz

[root@linux-node1 src]# mv prometheus-2.7.1.linux-amd64 /usr/local/

[root@linux-node1 src]# ln -s /usr/local/prometheus-2.7.1.linux-amd64/
/usr/local/prometheus
```

**Prometheus配置**

Prometheus的配置文件在prometheus.yml中，直接启动也会到命令的当前目录下寻找该文件。

```
[root@linux-node1 ~]# cd /usr/local/prometheus

[root@linux-node1 prometheus]# vim prometheus.yml

# my global config

global:
scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
# scrape_timeout is set to the global default (10s).
# Alertmanager configuration
alerting:
alertmanagers:
- static_configs:
- targets:
# - alertmanager:9093
# Load rules once and periodically evaluate them according to the global
'evaluation_interval'.
rule_files:
# - "first_rules.yml"
# - "second_rules.yml"
# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
# The job name is added as a label `job=<job_name>` to any timeseries
scraped from this config.
- job_name: 'prometheus'
# metrics_path defaults to '/metrics'
# scheme defaults to 'http'.
static_configs:
- targets: ['localhost:9090']
```

**启动Prometheus**

默认情况下Prometheus会把数据写在启动目录的./data目录下，可以通过启动参数指定目录：--storage.tsdb.path="data/"，更多参数可以通过—help查看

```
[root@linux-node1 prometheus]# ./prometheus –help

[root@linux-node1 prometheus]# ./prometheus

…

level=info ts=2019-02-12T08:04:03.799169159Z caller=main.go:620 msg="Starting
TSDB ..."
level=info ts=2019-02-12T08:04:03.835497463Z caller=main.go:635 msg="TSDB
started"
level=info ts=2019-02-12T08:04:03.835598421Z caller=main.go:695 msg="Loading
configuration file" filename=prometheus.yml
level=info ts=2019-02-12T08:04:03.83756508Z caller=main.go:722 msg="Completed
loading of configuration file" filename=prometheus.yml
level=info ts=2019-02-12T08:04:03.83760078Z caller=main.go:589 msg="Server is
ready to receive web requests."
level=info ts=2019-02-12T08:04:03.837641772Z caller=web.go:416 component=web
msg="Start listening for connections" address=0.0.0.0:9090
```

默认会在前台启动，并监听9090端口，会自动创建data目录，并存放数据。注意如何服务器时间不正确会有警告提示，请保证服务器时间同步。

![img](http://k8s.unixhot.com/kubernetes/media/266a101825cbabc2782820895e161f59.png)

**放置在后台运行**

```
[root@linux-node1 ~]# groupadd prometheus

[root@linux-node1 ~]# useradd -g prometheus -d /var/lib/prometheus -s
/sbin/nologin prometheus

[root@linux-node1 ~]# vim /usr/lib/systemd/system/prometheus.service

[Unit]

Description=prometheus
After=network.target
[Service]
Type=simple
User=prometheus
ExecStart=/usr/local/prometheus/prometheus
--config.file=/usr/local/prometheus/prometheus.yml
--storage.tsdb.path=/var/lib/prometheus
Restart=on-failure
[Install]
WantedBy=multi-user.target
```

后台启动

```
[root@linux-node1 ~]# systemctl enable prometheus

[root@linux-node1 ~]# systemctl start prometheus
```

查看启动状态

```
[root@linux-node1 ~]# netstat -ntlp | grep 9090

tcp6 0 0 :::9090 :::* LISTEN 61333/prometheus
```

### 使用Node Exporter采集主机数据

```
[root@linux-node1 ~]# cd /usr/local/src

[root@linux-node1 src]# wget
<https://github.com/prometheus/node_exporter/releases/download/v0.17.0/node_exporter-0.17.0.linux-amd64.tar.gz>

[root@linux-node1 src]# tar zxf node_exporter-0.17.0.linux-amd64.tar.gz

[root@linux-node1 src]# mv node_exporter-0.17.0.linux-amd64 /usr/local/

[root@linux-node1 src]# ln -s /usr/local/node_exporter-0.17.0.linux-amd64/
/usr/local/node_exporter

[root@linux-node1 ~]# vim /usr/lib/systemd/system/node_exporter.service

[Unit]
Description=node_exporter
After=network.target
[Service]
Type=simple
User=prometheus
ExecStart=/usr/local/prometheus/node_exporter/node_exporter
Restart=on-failure
[Install]
WantedBy=multi-user.target
```

启动Node Exporter

```
[root@linux-node1 ~]# systemctl enable node_exporter

[root@linux-node1 ~]# systemctl start node_exporter
```

查看状态
[root@linux-node1 ~]# netstat -ntlp | grep 9100

```
tcp6 0 0 :::9100 :::* LISTEN 66239/node_exporter
```

默认情况下Node Exporter监听9100端口，通过/metrics暴露采集到的监控数据，Prometheus默认也从该地址获取数据。

![img](http://k8s.unixhot.com/kubernetes/media/1004a69a33423c72a2989005be5a790e.png)

**配置Prometheus读取Node Exporter数据**

```
[root@linux-node1 ~]# vim /usr/local/prometheus/prometheus.yml

scrape_configs:
# The job name is added as a label `job=<job_name>` to any timeseries
scraped from this config.
- job_name: 'prometheus'
# metrics_path defaults to '/metrics'
# scheme defaults to 'http'.
static_configs:
- targets: ['localhost:9090']
- job_name: 'linux-node1'
static_configs:
- targets: ['192.168.56.11:9100']
labels:
instance: linux-node1
```

**重启prometheus**

```
[root@linux-node1 ~]# systemctl restart prometheus
```

**查看监控状态**

登录Prometheus的Web控制台，StatusTargets如果可以linux-node1并且状态是UP的状态即为配置成功。

![img](http://k8s.unixhot.com/kubernetes/media/8c3da60dbf5558dc649de1fd6ce43bf0.png)

### 使用Prometheus UI查看数据

现在Prometheus会定期的从http://192.168.56.11:9100/metrics获取数据，并存储，我们可以使用Prometheus UI来查看监控数据。

### 使用Grafana进行数据可视化

**1.安装Grafana**

```
[root@linux-node1 ~]# vim /etc/yum.repos.d/grafana.repo

[grafana]
name=grafana
baseurl=https://packages.grafana.com/oss/rpm
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://packages.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt

[root@linux-node1 ~]# yum install -y grafana
```

**2.配置Grafana**

Grafana的配置文件在/etc/grafana/grafana.ini，默认情况下Grafana监听3000端口

```
[root@linux-node1 ~]# vim /etc/grafana/grafana.ini
```

**3.启动Grafana**

```
[root@linux-node1 ~]# systemctl enable grafana-server

[root@linux-node1 ~]# systemctl start grafana-server

[root@linux-node1 ~]# netstat -ntlp | grep 3000

tcp6 0 0 :::3000 :::* LISTEN 81427/grafana-serve
```

**4.访问Grafana**

访问[http://192.168.56.11:3000](http://192.168.56.11:3000/)，用户名和密码默认为admin/admin，第一次登陆会要求修改密码，请使用安全密码。

**5.增加Prometheus数据源**

点击

![img](http://k8s.unixhot.com/kubernetes/media/b681a9b528d2ff21ba66666ce2452e51.png)

，然后选择

![img](http://k8s.unixhot.com/kubernetes/media/d3e83ac4f090a51c5b5e0c341b99dda5.png)

。

配置URL为：[http://192.168.56.11:9090](http://192.168.56.11:9090/)，并点击Save&Test。

![img](http://k8s.unixhot.com/kubernetes/media/e35d8aaebedd7e168ebd1b29b65b30bb.png)

**6.设置Dashboard**

数据源设置完毕后，就可以设置Dashboard图形展示，可以手动添加，也可以直接下载别人配置好保持的Json文件直接导入即可。

下载地址：https://grafana.com/dashboards/405，在右侧有Download Json按钮，下载该Json文件。

![img](http://k8s.unixhot.com/kubernetes/media/d9ab69b29a964a12df52512a7b128b5b.png)

点击Home下的Import Dashboard

![img](http://k8s.unixhot.com/kubernetes/media/53ffc0e739ca7b9421f9568ae4cbf117.png)

然后直接上传刚才下载的JSON文件。

![img](http://k8s.unixhot.com/kubernetes/media/500958891a82067b0c987d514239ffb0.png)

导入完毕后，就可以在Grafana上查看对应节点的监控数据图表。你可以通过鼠标拖拽进行图表的自定义大小和位置的修改，效果如下：

![img](http://k8s.unixhot.com/kubernetes/media/698a6241faa0adc1af6c09cc369b259b.png)

# 第七部分 Kubernetes高级进阶

# Kubernetes的权限控制RBAC

**角色**

- Role: 角色，命名空间范围内的一个权限集合。

- ClusterRole：集群角色，集群范围内的一个权限的集合，

  Role和ClusterROle在Kubernetes中都被定义为集群内部的 API 资源，和我们前面学习过的 Pod、ConfigMap 这些类似，都是我们集群的资源对象，所以同样的可以使用我们前面的kubectl相关的命令来进行操作 Subject：主题，对应在集群中尝试操作的对象，集群中定义了3种类型的主题资源：

User Account：用户，这是有外部独立服务进行管理的，管理员进行私钥的分配，用户可以使用 KeyStone或者 Goolge 帐号，甚至一个用户名和密码的文件列表也可以。对于用户的管理集群内部没有一个关联的资源对象，所以用户不能通过集群内部的 API 来进行管理 Group：组，这是用来关联多个账户的，集群中有一些默认创建的组，比如cluster-admin Service Account：服务帐号，通过Kubernetes API 来管理的一些用户帐号，和 namespace 进行关联的，适用于集群内部运行的应用程序，需要通过 API 来完成权限认证，所以在集群内部进行权限操作，我们都需要使用到 ServiceAccount，这也是我们这节课的重点 RoleBinding 和 ClusterRoleBinding：角色绑定和集群角色绑定，简单来说就是把声明的 Subject 和我们的 Role 进行绑定的过程(给某个用户绑定上操作的权限)，二者的区别也是作用范围的区别：RoleBinding 只会影响到当前 namespace 下面的资源操作权限，而 ClusterRoleBinding 会影响到所有的 namespace。

**创建用户凭证**

```
[root@linux-node1 ~]# openssl genrsa -out jenkins.key 2048
[root@linux-node1 ~]# openssl req -new -key jenkins.key -out jenkins.csr -subj "/CN=jenkins/O=vmware"
[root@linux-node1 ~]# openssl x509 -req -in jenkins.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out jenkins.crt -days 365
[root@linux-node1 ~]# kubectl config set-credentials jenkins --client-certificate=jenkins.crt  --client-key=jenkins.key
[root@linux-node1 ~]# kubectl config set-context jenkins-context --cluster=kubernetes --namespace=jenkins --user=jenkins  
[root@linux-node1 ~]# kubectl get pods --context=jenkins-context
```

**创建角色**

```
[root@linux-node1 ~]# vim jenkins-role.yml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: jenkins-role
  namespace: jenkins
rules:
- apiGroups: ["", "extensions", "apps"]
  resources: ["deployments", "replicasets", "pods"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
```

**创建角色绑定**

```
[root@linux-node1 ~]# vim jenkins-role-binding.yml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: jenkins-rolebinding
  namespace: jenkins
subjects:
- kind: User
  name: jenkins
  apiGroup: ""
roleRef:
  kind: Role
  name: jenkins-role
  apiGroup: ""
```

# 22 深入理解Pod调度

# 深入理解Pod调度

在前面的章节我们已经知道在Kubernetes中使用kube-scheduler进行Pod调度，它的目标是将Pod绑定到对应的Node上，经过一系列的条件和算法尽可能的让每个Pod都满意。kube-scheduler是Kubernetes默认的调度器。

kube-scheduler的代码位于[GitHub](https://github.com/kubernetes/kubernetes/tree/master/pkg/scheduler)

可以将代码克隆到本地方便查看

```
[root@linux-node1 ~]# git clone --depth 1 https://github.com/kubernetes/kubernetes.git
```

在algorithm下有调度算法，调度算法分为两个阶段：Predicates和priorities，首先对Node进行过滤看哪些Node符合调度要求，然后在符合调度要求的Node上进行优先级计算，判断调度到哪个Node最合适。

```
[root@linux-node1 algorithm]# pwd
/root/kubernetes/pkg/scheduler/algorithm
[root@linux-node1 algorithm]# ls -l
total 20
-rw-r--r-- 1 root root 1256 Dec 17 22:52 BUILD
-rw-r--r-- 1 root root  735 Dec 17 22:52 doc.go
drwxr-xr-x 2 root root  276 Dec 17 22:52 predicates
drwxr-xr-x 3 root root 4096 Dec 17 22:52 priorities
-rw-r--r-- 1 root root 3278 Dec 17 22:52 scheduler_interface.go
-rw-r--r-- 1 root root 3383 Dec 17 22:52 types.go
```

官方文档详细的介绍了所有的步骤：https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/

**设置调度器**

```
[root@linux-node1 ~]# kubectl get pod kube-proxy-5wbtf -n kube-system -o yaml | grep schedulerName
  schedulerName: default-scheduler
```

## Taints（污点）

```
[root@linux-node1 ~]# kubectl describe node linux-node1.unixhot.com | grep Taints
Taints:             node-role.kubernetes.io/master:NoSchedule
```

Taints的表现形式为

```
<key>=<value>:<effect>
```

effect的三种类型：

- NoSchedule: 如果Pod没有容忍该污点，不调度到该节点上。
- PreferNoSchedule：尽量阻止Pod被调度到这个节点上，但是如果没有其它节点能够调度，可以调度到该节点。
- NoExecute： NoScheduler和PreferNoSchedule只是在调度阶段起作用，但是NoExecute会影响正常运行的Pod，如果一个节点被打了NoExecute的污点，而运行在该节点的Pod没有容忍会直接被这个节点移除。

查看Flannel为何能调度到Master节点

```
[root@linux-node1 ~]# kubectl get po -n kube-system | grep flannel
kube-flannel-ds-amd64-f2jrk                       1/1     Running   2          22h
kube-flannel-ds-amd64-mh75v                       1/1     Running   2          22h
kube-flannel-ds-amd64-n52zm                       1/1     Running   4          22h

[root@linux-node1 ~]# kubectl describe pod kube-flannel-ds-amd64-f2jrk -n kube-system
...
Tolerations:     :NoSchedule
                 node.kubernetes.io/disk-pressure:NoSchedule
                 node.kubernetes.io/memory-pressure:NoSchedule
                 node.kubernetes.io/network-unavailable:NoSchedule
                 node.kubernetes.io/not-ready:NoExecute
                 node.kubernetes.io/pid-pressure:NoSchedule
                 node.kubernetes.io/unreachable:NoExecute
                 node.kubernetes.io/unschedulable:NoSchedule
```

### 自定义污点

```
[root@linux-node1 ~]# kubectl taint node linux-node2.example.com node-ytpe=gpu:NoSchedule       
node/linux-node2.example.com tainted
[root@linux-node1 example]# cat nginx-deployment-taint.yaml    
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.13.12
        ports:
        - containerPort: 80
      tolerations:
      - key: node-type
        operator: Equal
        value: gpu
        effect: Noschedule
[root@linux-node1 example]# kubectl get po -o wide
NAME                                READY   STATUS    RESTARTS   AGE     IP          NODE                      NOMINATED NODE   READINESS GATES
dns-test                            1/1     Running   1          6h15m   10.2.2.23   linux-node3.example.com   <none>           <none>
nginx-deployment-77564d4546-2jkw9   1/1     Running   0          13s     10.2.2.26   linux-node3.example.com   <none>           <none>
nginx-deployment-77564d4546-4hrbf   1/1     Running   0          13s     10.2.2.24   linux-node3.example.com   <none>           <none>
nginx-deployment-77564d4546-s2r4h   1/1     Running   0          13s     10.2.2.25   linux-node3.example
```

## 亲缘性调度

# 23 Kubernetes API介绍

查看集群状态

```
[root@k8s-master1 ~]# kubectl cluster-info
Kubernetes master is running at https://192.168.56.11:6443
KubeDNS is running at https://192.168.56.11:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

直接访问Kubernetes API需要验证，无法直接访问。

```
[root@k8s-master1 ~]# curl -k https://192.168.56.11:6443
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {

  },
  "status": "Failure",
  "message": "forbidden: User \"system:anonymous\" cannot get path \"/\"",
  "reason": "Forbidden",
  "details": {

  },
  "code": 403
}
```

**通过Proxy访问Kubernetes API**

使用kubectl proxy可以在Master本地启动一个代理

```
[root@k8s-master1 ~]# kubectl proxy
Starting to serve on 127.0.0.1:8001
```

可以通过127.0.0.1:8001与API Server进行交互

```
[root@k8s-master1 ~]# curl http://127.0.0.1:8001
{
  "paths": [
    "/api",
    "/api/v1",
    "/apis",
    "/apis/",
    "/apis/admissionregistration.k8s.io",
    "/apis/admissionregistration.k8s.io/v1beta1",
    "/apis/apiextensions.k8s.io",
    "/apis/apiextensions.k8s.io/v1beta1",
    "/apis/apiregistration.k8s.io",
    "/apis/apiregistration.k8s.io/v1",
    "/apis/apiregistration.k8s.io/v1beta1",
    "/apis/apps",
...（省略其它输出）
```

可以通过修改监听地址，并关闭过滤，实现在其它地方登录和查看，这样就可以在本地浏览器访问API。切记不要再生产环境将代理地址暴露在外网。

```
[root@k8s-master1 ~]# kubectl proxy --address=0.0.0.0 --disable-filter=true
W1105 16:18:45.669591   16730 proxy.go:142] Request filter disabled, your proxy is vulnerable to XSRF attacks, please be cautious
Starting to serve on [::]:8001
```

### 使用Swagger UI进行API交互

Kubernetes支持Swagger UI访问API，需要在API Server开启，如果已经根据本书使用kubeadm部署的集群，可以通过修改Pod的YAML文件，重建Pod来开启

**修改API Server的Pod定义文件**

在- kube-apiserver下面一行增加--enable-swagger-ui=true

```
[root@k8s-master1 ~]# vim /etc/kubernetes/manifests/kube-apiserver.yaml 
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    component: kube-apiserver
    tier: control-plane
  name: kube-apiserver
  namespace: kube-system
spec:
  containers:
  - command:
    - kube-apiserver
    - --enable-swagger-ui=true
    - --advertise-address=192.168.56.11
    - --allow-privileged=true
```

删除Pod，kubelet会通过该YAML重建Pod

```
[root@k8s-master1 ~]# kubectl get pod -n kube-system | grep api
kube-apiserver-linux-node1.unixhot.com            1/1     Running   0          55m
[root@k8s-master1 ~]# kubectl delete pod kube-apiserver-linux-node1.unixhot.com -n kube-system
```

可以看到配置已经生效

```
[root@k8s-master1 ~]# kubectl describe pod kube-apiserver-linux-node1.unixhot.com -n kube-system 
...
    Command:
      kube-apiserver
      --enable-swagger-ui=true
      --advertise-address=192.168.99.27
....
```

部署一个Swagger UI服务查看API

```
[root@k8s-master1 ~]# kubectl run swagger-ui --image=swaggerapi/swagger-ui:latest
[root@k8s-master1 ~]# kubectl expose deployment swagger-ui --port=8080 --type=NodePort
[root@k8s-master1 ~]# kubectl get service
NAME         TYPE        CLUSTER-IP    EXTERNAL-IP     PORT(S)          AGE
kubernetes   ClusterIP   10.1.0.1      <none>          443/TCP          43d
swagger-ui   NodePort    10.1.205.94   <none>   8080:30410/TCP   34s
```

因为我们部署的Swagger UI和API Server不在一个域名下，所以会有跨域的问题，Chrome浏览器需要提前安装Allow CROS插件解决


----------


----------
摘录自赵班长--------