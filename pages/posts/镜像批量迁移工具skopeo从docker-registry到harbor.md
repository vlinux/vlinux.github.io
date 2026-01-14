---
title: 镜像批量迁移工具skopeo从docker-registry到harbor
categories: Kubernetes
tags: [skopeo]
date: 2022-09-20 15:23:00
---
## 背景
> docker-registry地址：docker-registry.kococ.cn
>
> 新镜像仓库harbor地址：harbor.kococ.cn
>
> 本例将docker-registry镜像迁移至 harbor



### 安装

> 可以从github项目直接下载使用二进制命令
>
> 也可以在centos服务器上直接yum安装,需要epel源

```bash
yum -y install skopeo
```

### 获取test该namespace下所有服务镜像

> 这里我的原镜像为docker-registry

```bash
kubectl get deployment,statefulset,daemonset -o custom-columns='NAME:metadata.name,IMAGES:spec.template.spec.containers[*].image' -n test > all-image
## 获取到所有image之后将域名去掉只保留除域名外
```

### 登录两个镜像仓库

```
docker login harbor.kcooc.cn
docker login docker-registry.kococ.cn
```

### 迁移

```bash
cat mv-image.sh
#!/bin/bash
for i in `cat all-image`;do
skopeo copy docker://docker-registry.kococ.cn/${i} docker://harbor.kococ.cn/${i} --authfile /root/.docker/config.json
done
```

