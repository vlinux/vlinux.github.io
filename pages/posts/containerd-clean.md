---
title: 清理Docker和Containerd缓存镜像
date: 2025-03-28 10:57:15
updated: 2025-03-28 10:57:15
tags: Containerd
categories: Kubernetes
end: false
---

docker，ctr，crictl 清理容器缓存及镜像

<!-- more -->

文档说明：只记录关键有用的地方;

## docker 清理

```bash
 
docker system df
# 占用存储空间，又没有用的容器
docker images -aq -f 'dangling=true' | xargs docker rmi
 
 
# 删除所有
docker system prune -a
 
docker stop $(docker ps -a | grep "Exited" | awk '{print $1 }')  # 停止容器
docker rm $(docker ps -a | grep "Exited" | awk '{print $1 }')  #删除容器
docker rmi $(docker images | grep "none" | awk '{print $3}')  #删除镜像
 
docker rmi $(docker images -q) -f # 删除所有镜像 谨慎使用
 
 
 
```

## containerd 或者k8s 清理

```bash
 
ctr images list
 
crictl ps -a | grep -v Running | awk '{print $1}' | xargs sudo crictl rm && crictl rmi --prune
 
 
crictl images -q | xargs -n 1 crictl rmi 2>/dev/null
 
```

## 查看镜像（ctr和crictl 两个都可以用）

```shell
 
ctr -ns list 
 
ctr --namespace k8s.io containers ls
ctr --namespace k8s.io images ls
 
crictl images
crictl containers
```

## crictl 配置文件

```bash
vi /etc/crictl.yaml
runtime-endpoint: unix:///var/run/containerd/containerd.sock
image-endpoint: unix:///var/run/containerd/containerd.sock
timeout: 10
# debug: true
 
crictl ps -a | grep -v Running | awk '{print $1}'
crictl images
 
```

## 参考文档：

1. [crictl 与 ctr 区别](https://blog.csdn.net/u010157986/article/details/126118897)
