---
title: Harbor部署总结
categories: DevOps
tags: [Harbor]
date: 2021-01-13 14:14:44
---
# Harbor部署总结

### 简介概述

Harbor是由VMWare公司开源的容器镜像仓库。事实上，Harbor是在Docker Registry上进行了相应的企业级扩展，

从而获得了更加广泛的应用，这些新的企业级特性包括：管理用户界面，基于角色的访问控制 ，AD/LDAP集成以及

审计日志等，足以满足基本企业需求。

官方：https://goharbor.io/

Github：https://github.com/goharbor/harbor

### 部署条件

**服务器硬件配置：**

• 最低要求：CPU2核/内存4G/硬盘40GB

• 推荐：CPU4核/内存8G/硬盘160GB

**软件：**

• Docker CE 17.06版本+ 

• Docker Compose 1.18版本+

**Harbor安装有2种方式：**

• 在线安装：从Docker Hub下载Harbor相关镜像，因此安装软件包非常小 

• 离线安装：安装包包含部署的相关镜像，因此安装包比较大

### 部署

**1、先安装Docker和Docker Compose**

https://github.com/docker/compose/releases

**2、部署Harbor HTTP**

```
# tar zxvf harbor-offline-installer-v*.tgz

# cd harbor

# cp harbor.yml.tmpl harbor.yml

# vi harbor.yml
hostname: reg.ctnrs.com
https: # 先注释https相关配置
harbor_admin_password: Harbor12345
# ./prepare
# ./install.sh
```

### 基本使用

**1、配置http镜像仓库可信任**

```
# vi /etc/docker/daemon.json 

{"insecure-registries":["reg.ctnrs.com"]}

# systemctl restart docker
```

**2、打标签**

```
# docker tag centos:7 reg.ctnrs.com/library/centos:7
```

**3、上传**

```
# docker push reg.ctnrs.com/library/centos:7
```

**4、下载**

```
# docker pull reg.ctnrs.com/library/centos:7
```



