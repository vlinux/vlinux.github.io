---
title: Docker升级版本并迁移数据目录
categories: Docker
tags: [istio]
date: 2024-03-13 14:11:46
---
## 前言

- 由于Centos7自带的yum源中的Docker版本过低，先卸载默认的版本

```
[root@log jump]# docker --version
Docker version 1.13.1, build 7d71120/1.13.1
```

## 备份

- 原配置文件备份一下

```
[root@log config]# cat /usr/lib/systemd/system/docker.service 
[Unit]
Description=Docker Application Container Engine
Documentation=http://docs.docker.com
After=network.target rhel-push-plugin.service registries.service
Wants=docker-storage-setup.service
Requires=rhel-push-plugin.service registries.service
Requires=docker-cleanup.timer
 
[Service]
Type=notify
NotifyAccess=main
EnvironmentFile=-/run/containers/registries.conf
EnvironmentFile=-/etc/sysconfig/docker
EnvironmentFile=-/etc/sysconfig/docker-storage
EnvironmentFile=-/etc/sysconfig/docker-network
Environment=GOTRACEBACK=crash
Environment=DOCKER_HTTP_HOST_COMPAT=1
Environment=PATH=/usr/libexec/docker:/usr/bin:/usr/sbin
ExecStart=/usr/bin/dockerd-current \
          --add-runtime docker-runc=/usr/libexec/docker/docker-runc-current \
          --default-runtime=docker-runc \
          --authorization-plugin=rhel-push-plugin \
          --exec-opt native.cgroupdriver=systemd \
          --userland-proxy-path=/usr/libexec/docker/docker-proxy-current \
          --init-path=/usr/libexec/docker/docker-init-current \
          --seccomp-profile=/etc/docker/seccomp.json \
          $OPTIONS \
          $DOCKER_STORAGE_OPTIONS \
          $DOCKER_NETWORK_OPTIONS \
          $ADD_REGISTRY \
          $BLOCK_REGISTRY \
          $INSECURE_REGISTRY \
          $REGISTRIES
ExecReload=/bin/kill -s HUP $MAINPID
LimitNOFILE=1048576
LimitNPROC=1048576
LimitCORE=infinity
TimeoutStartSec=0
Restart=on-abnormal
KillMode=process
 
[Install]
WantedBy=multi-user.target
```

- 清楚知道Docker的存储目录在哪里

```
默认目录：/var/lib/docker
 
[root@log config]# docker info | grep "Docker Root Dir"
 Docker Root Dir: /var/lib/docker
```

## 升级高版本docker

- 不删除 /var/lib/docker 目录 就不会删除已安装的镜像及容器

```
[root@log config]# yum list installed | grep docker
docker.x86_64                         2:1.13.1-209.git7d71120.1.al7    @updates 
docker-client.x86_64                  2:1.13.1-209.git7d71120.1.al7    @updates 
docker-common.x86_64                  2:1.13.1-209.git7d71120.1.al7    @updates 
docker-rhel-push-plugin.x86_64        2:1.13.1-209.git7d71120.1.al7    @updates
 
[root@log config]# yum -y remove docker*
```

- 安装yum管理工具，添加国内镜像源

```
yum install -y yum-utils
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- 查看软件版本

```
[root@log config]# yum list docker-ce --showduplicates|sort -r
http://packages.treasuredata.com/4/redhat/2.1903/x86_64/repodata/repomd.xml: [Errno 14] HTTPS Error 404 - Not Found
Trying other mirror.
Loading mirror speeds from cached hostfile
Loaded plugins: fastestmirror, langpacks, releasever-adapter, update-motd
docker-ce.x86_64            3:26.0.0-1.el7                      docker-ce-stable
docker-ce.x86_64            3:25.0.5-1.el7                      docker-ce-stable
docker-ce.x86_64            3:25.0.4-1.el7                      docker-ce-stable
docker-ce.x86_64            3:25.0.3-1.el7                      docker-ce-stable
docker-ce.x86_64            3:25.0.2-1.el7                      docker-ce-stable
docker-ce.x86_64            3:25.0.1-1.el7                      docker-ce-stable
docker-ce.x86_64            3:25.0.0-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.9-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.8-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.7-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.6-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.5-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.4-1.el7                      docker-ce-stable
docker-ce.x86_64            3:24.0.3-1.el7                      docker-ce-stable
```

- 安装指定版本的docker

```
[root@log config]# yum install -y install docker-ce-20.10.8-3.el7
 
[root@log config]# systemctl start docker
systemctl start docker
```

- 启动容器报错

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-10-1024x125.png)

```
Error response from daemon: Unknown runtime specified docker-runc
 
这是因为低版本升级到高版本之后不兼容 修改参数进行解决
```

- 更改/var/lib/docker/containers目录中的文件参数，把docker-runc替换为runc

```
grep -rl 'docker-runc' /var/lib/docker/containers/ | xargs sed -i 's/docker-runc/runc/g'
 
 
//注：grep -rl：递归搜索目录和子目录，只列出含有匹配的文本行的文件名，而不显示具体的匹配内容
xargs：衔接执行之前得到的值
总体意思是把/var/lib/docker/containers中含有‘docker-runc’的文件搜索出来，并把‘docker-runc’字符为runc
```

- 重新启动docker

```
[root@log config]# systemctl restart docker
[root@log config]# docker start nsfocus-filebeat filebeat filebeat-web 
nsfocus-filebeat
filebeat
filebeat-web
[root@log config]# docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                       NAMES
c69c08e94c7b   6e372e62f3ba   "/usr/bin/tini -- /u…"   10 months ago   Up 6 seconds   0.0.0.0:5044->5044/udp, :::5044->5044/udp   nsfocus-filebeat
74edf701d43c   6e372e62f3ba   "/usr/bin/tini -- /u…"   12 months ago   Up 6 seconds                                               filebeat-web
5c8cc6afa17f   6e372e62f3ba   "/usr/bin/tini -- /u…"   12 months ago   Up 6 seconds                                               filebeat
```

## 迁移 Docker 存储目录

- 查看 Docker 存储位置

```
docker info | grep "Docker Root Dir"
 Docker Root Dir: /var/lib/docker
```

- 停止Docker 服务

```
systemctl stop docker
```

- 迁移 Docker 存储目录

```
当前从 /var/lib/docker目录迁移至 /data/docker目录
这里建议使用 cp 命令，在确认迁移无误后再操作旧目录的删除
数据量大的情况，迁移过程需要耐心等待
 
cp -r /var/lib/docker /data/docker
```

- 确认数据是否迁移完成

```
对比新目录与旧目录数据占用大小是否相同
旧目录数据大小
du -sh /var/lib/docker
19G    /var/lib/docker
 
# 新目录数据大小
du -sh /data/docker
19G    /data/docker
```

- 修改 daemon.json 配置文件

```
备份 daemon.json 配置文件
 
cp /etc/docker/daemon.json /etc/docker/daemon.json.bak
 
编辑 daemon.json 配置文件
vim /etc/docker/daemon.json
{
 "data-root": "/data/docker",  # 修改该配置为 /data/docker
 "live-restore": true,
 "log-driver": "json-file",
 "log-opts": {
  "max-file": "3",
  "max-size": "10m"
 }
}
```

- 启动 Docker 服务，确认 Docker 存储位置是否为新目录

```
# 启动 Docker 服务
systemctl daemon-reload
systemctl restart docker
 
# 查看 Docker 存储位置
docker info | grep "Docker Root Dir"
 Docker Root Dir: /data/docker
```

- 启动成功后，再确认之前的镜像还在

```
docker ps -a
docker images
```

- 确认 Docker 新迁移可正常使用后，删除 Docker 旧目录

```
# 删除 Docker 旧目录
rm -rf /var/lib/docker
```
