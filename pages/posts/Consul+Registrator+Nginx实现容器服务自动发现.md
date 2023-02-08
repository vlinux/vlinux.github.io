---
title: Consul+Registrator+Nginx实现容器服务自动发现
categories: 微服务
tags: [Consul+Registrator+Nginx,微服务]
date: 2019-01-01 15:34:00
---
# 基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架

> 我们先来看一下服务发现常用的框架有哪些：
>
> - zookeeper
> - eureka
> - etcd
> - consul

这里就不挨个来介绍它们了，本文中主要以consul为主，如果你在大量接触或使用微服务的话，你可能会碰到一个问题？当你创建的服务数量越来越多时，这些服务之间的通信便越难管理，而且维护代价会越来越高。consul可以给你答案，我们一起来了解一下consul：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/41b1033a119139c1375c52d5300eced9.jpg)

## 1.了解consul

Consul是一个分布式，高度可用且支持多数据中心的服务发现，配置和编排工具。 Consul支持大规模部署，配置和维护面向服务的体系结构。 欲了解更多官方信息，请参阅：

- [consul 文档](https://www.consul.io/)
- [consul github](https://github.com/hashicorp/consul)

### 1.1 架构设计

在现实中，我们一直渴望着追求提供高质量、高可用的服务架构体系，同时减少不必要的部署和维护代价，减少容错率。面对如此高的要求，可以有两种架构方案：

- Docker+Etcd+Confd+Nginx
- Docker+Consul+Nginx

本文中我们主要来介绍 Docker+Consul+Nginx方案，此方案更加高效、快捷，并且维护代价和容错率更低，分布式支持力度更强，如下图所示：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/de11c5f722122d7f4f64b27c0d56a7a3.png)

使用Docker将Consul、Consul Template、Registrator和Nginx组装成一个值得信任且可扩展的服务框架，这套架构让你在这个框架中添加和移除服务，不需要重写任何配置，也不需要重启任何服务，一切都能正常运行，工作流程很简单：

> docker节点 ---------> consul ---------> nginx.conf

### 1.2 架构优势

Docker+Consul+Nginx虽然看起来是三个组件的运用，但却证明是一个有机的整体。它们互相联系、互相作用，完全满足我们对高可用、高效服务架构方案的需求，是Docker生态圈中最理想的组合之一，具有以下优势：

1. 自动发现与注册组件consul使用 Raft 算法来保证一致性，比复杂的Paxos 算法更直接。相比较而言，zookeeper 采用的是 Paxos，而 etcd 使用的则是 Raft；
2. 支持多数据中心，多数据中心集群可以避免单数据中心的单点故障，zookeeper 和 etcd 均不提供多数据中心功能的支持；
3. 自动、实时发现及无感知服务刷新，具备资源弹性，伸缩自如；
4. 支持健康检查，负载能动态在可用的服务实例上进行均衡，etcd 不提供此功能；
5. 支持足够多台Docker容器(前提架构资源足以保证性能支撑)；
6. 支持http 和dns 协议接口，zookeeper 的集成较为复杂，etcd 只支持 http 协议；
7. 服务规模方便进行快速调整，官方提供web管理界面，etcd 无此功能；
8. Consul template 搭配consul使用，支持多种接入层，如Nginx、Haproxy。

## 2.环境说明

本文所用的环境均按1.1中的架构图来部署，nginx用1台服务器、consul用1台服务器、docker host用2台服务器，共用4台服务器来部署，当然如果你的服务器紧张，用3台也一样，减少1台docker host就行：

| 服务器IP     | 服务器名 | 角色                                                 |
| ------------ | -------- | ---------------------------------------------------- |
| 172.18.18.32 | nginx    | 运行nginx服务、consul-template守护进程               |
| 172.18.18.33 | consul   | 运行consul服务                                       |
| 172.18.18.34 | docker01 | 运行registrator容器、运行nginx容器（映射端口81、82） |
| 172.18.18.35 | docker02 | 运行registrator容器、运行nginx容器（映射端口83、84） |

## 3.部署nginx

> 在nginx服务器上操作

### 3.1 安装nginx

1、下载并解压nginx：
你可以用docker的方案运行nginx、也可以用源码包编译安装nginx。在本文中nginx用源码包的方式安装

```
[root@nginx /]# cd /usr/src/
[root@nginx src /]# tar -zxvf nginx-1.12.1.tar.gz
```

2、编译安装nginx：

```
[root@nginx src]# yum -y install gcc gcc-c++ make openssl-devel pcre-devel
[root@nginx src]# cd nginx-1.12.1/
[root@nginx nginx-1.12.1]# ./configure --prefix=/usr/local/nginx   --with-http_stub_status_module --with-http_realip_module --with-pcre  --with-http_ssl_module
[root@nginx nginx-1.12.1]# make -j 2
[root@nginx nginx-1.12.1]# make install
```

### 3.2 安装consul-template

安装consul-template非常简单，下载二进制包即可使用
1、下载consul-template
下载地址：https://releases.hashicorp.com/consul-template/0.19.3/consul-template_0.19.3_linux_amd64.zip

```
[root@nginx ]# wget https://releases.hashicorp.com/consul-template/0.19.3/consul-template_0.19.3_linux_amd64.zip
```

2、解压并安装到/usr/bin目录

```
[root@nginx ]# unzip consul-template_0.19.3_linux_amd64.zip
[root@nginx ]# mv consul-template /usr/bin/
```

## 4.部署consul

> 在consul服务器上操作

### 4.1 安装consul

有两种方式安装consul（容器、二进制包），在本文中选使用二制包的方式。
1、下载consul二进制包
下载地址 https://www.consul.io/downloads.html

2、解压、安装

```
[root@consul ~]#unzip consul_0.9.2_linux_amd64.zip
[root@consul ~]#mv consul /usr/bin/
```

3、部署consul

```
[root@consul ~]#consul agent -server -bootstrap -ui -data-dir=/var/lib/consul-data -bind=172.18.18.33 -client=0.0.0.0 -node=server01
```

参数说明：
agent:运行一个consul代理。
-server :切换代理到服务器模式。
-bootstrap :将服务器设置为引导模式。
-ui:启用内置的静态web UI服务器。
-data-dir:路径到数据目录存储代理状态。
-bind:设置集群通信的绑定地址。
-client:设置用于绑定客户端访问的地址。这包括RPC、DNS、HTTP和HTTPS(如果配置)。
-node:此节点的名称。 在集群中必须是唯一的，如果你运行第2台consul，可以写server02、server03等。

consul启动后它会在前台显示，如果你想让它在后台运行，可以加上nohup &来运行它：

```
[root@consul ~]#nohup consul agent -server -bootstrap -ui -data-dir=/var/lib/consul-data -bind=172.18.18.33 -client=0.0.0.0 -node=server01 &
```

4、查看consul启动后的情况：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/cbcdb4563e083359c0beb09e8cd66d3a.png)
启动consul后默认会监听5个端口：
8300： replication、leader farwarding的端口
8301： lan cossip的端口
8302： wan gossip的端口
8500： web ui界面的端口
8600： 使用dns协议查看节点信息的端口
可参考下图查看端口的意思：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/30228798a59a97b32f4018de04ec2f40.png)

### 4.2 查看consul集群信息

```
[root@consul ~]#consul members
[root@consul ~]#consul info |grep leader
[root@consul ~]#consul catalog services
```

### 4.3 通过http api获取集群信息

```
# 集群server成员
[root@consul ~]#curl 127.0.0.1:8500/v1/status/peers
# 集群Raft leader
[root@consul ~]#curl 127.0.0.1:8500/v1/status/leader
# 注册的所有服务
[root@consul ~]#curl 127.0.0.1:8500/v1/catalog/services
# 服务信息
[root@consul ~]#curl 127.0.0.1:8500/v1/catalog/services/nginx
# 集群节点详细信息
[root@consul ~]#curl 127.0.0.1:8500/v1/catalog/nodes
```

一般我们通过 [http://consul服务器:8500](http://xn--consul-gf4jr3wwp4b:8500/) web界面来访问查看：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/90afa2e429dcac75f0b794cd889763b0.png)
从上图可以看到，consul 界面有5个菜单项（SERVICES、NODES、KEY/VALUE、ACL、DC1）。在SERVICES中，目前因为没有任何服务加入进来，只显示了consul它自己的服务状态。

我们在来看下NODES，从图中很好理解， 在server01这台节点上有个consul :8300的服务：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/fbd5cf540d3daba111834be03eaebbaa.png)

接下来，我们去nginx服务器上配置一下nginx模板，并在两台docker主机上运行registrator服务进行测试。

## 5.配置nginx

> 在nginx服务器上操作

在步骤3中nginx已经安装好了，这一步只是配置nginx，大概配置的思路为：

- 在/usr/local/nginx/conf中创建目录consul，目录名自定义；
- 在consul目录中创建nginx.ctmpl模板；
- 在nginx.conf配置中添加include项并指向consul目录 ；
- 重启nginx服务；

### 5.1 创建nginx.ctmpl模板

```
[root@nginx /]#mkdir /usr/local/nginx/consul/
[root@nginx /]#cd /usr/local/nginx/consul/
[root@nginx consul]#vim nginx.ctmpl
upstream http_backend {
    {{range service "nginx"}}
    server {{ .Address }}:{{ .Port }};
    {{ end }}
}

server {
    listen 8000;
    server_name localhost;
    location / {
    proxy_pass http://http_backend;
    }
}
```

nginx.ctmpl模板中的内容就是两段意思，熟悉nginx的朋友一看也能明白：第1 定义nginx upstream一个简单模板，第2 定义一个server，监听8000端口，反向代理到upstream。

### 5.2 修改nginx.conf

```
[root@nginx consul]# vim /usr/local/nginx/conf/nginx.conf
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
        #添加这一行
    include /usr/local/nginx/consul/*.conf;
}
```

添加好了在重载nginx服务：

```
[root@nginx consul]# /usr/local/nginx/sbin/nginx  -s reload
```

### 5.3 运行consul-template进程

1、启动consul-template

```
[root@nginx consul]#consul-template --consul-addr 172.18.18.33:8500 --template "./nginx.ctmpl:vhost.conf" --log-level=info
2018/03/14 08:08:06.933447 [INFO] consul-template v0.19.3 (ebf2d3d)
2018/03/14 08:08:06.933459 [INFO] (runner) creating new runner (dry: false, once: false)
2018/03/14 08:08:06.933779 [INFO] (runner) creating watcher
2018/03/14 08:08:06.933858 [INFO] (runner) starting
2018/03/14 08:08:06.933873 [INFO] (runner) initiating run
2018/03/14 08:08:06.935387 [INFO] (runner) initiating run

注意：它这个日志是一直在前台输出，通过ctrl+c停止consul-template进程。
```

参数说明：
--consul-addr：指定consul服务的ip和端口；
./nginx.ctmpl：这是用nginx.ctmpl这个模板来启动进程，这是写的相对路径，也可以写绝对路径；
vhost.conf：nginx.ctmpl模板生成后的文件名，这也可以写绝对路径，如果不写绝对路径，这个文件就在当前目录生成（/usr/local/nginx/consul/）

2、验证consul-template
由于consul-template在前台运行，所以我们在打开一个nginx终端验证。

```
#查看下进程
[root@nginx ~]# ps -ef | grep consul-template
root     22954 22794  0 16:08 pts/0    00:00:00 consul-template --consul-addr 172.18.18.33:8500 --template ./nginx.ctmpl:vhost.conf --log-level=info
#查看下consul目录下的文件
[root@nginx ~]# cd /usr/local/nginx/consul/
[root@nginx consul]# ls
nginx.ctmpl  vhost.conf
```

在consul目录下，是不是发现多了一个文件vhost.conf，就是刚才启动consul-template进程时生成的。

在来查看下vhost.conf的内容，目前upstraem配置为空，还没有docker主机加入进来：

```
[root@nginx consul]# cat vhost.conf 
upstream http_backend {

}

server {
    listen 8000;
    server_name localhost;
    location / {
    proxy_pass http://http_backend;
    }
}
```

接下来去配置下docker主机。

## 6.部署docker

> 在docker01和docker02上操作

先来说一下在docker服务器上操作的大概思路：

- 分别在两台docker服务器上都创建registrator容器，注意到consul服务中心；
- 在docker01上运行两台nginx容器（端口81、82），在docker02上运行两台nginx容器（端口83、84）；
- 修改这4台nginx容器中的index.html页面内容为（docker01:81、docker01:82、docker02:83、docker02:84）
- 访问consul web界面验证
- 访问nginx服务器地址 [http://172.18.18.32:8000](http://172.18.18.32:8000/) 进行验证；

### 6.1 安装docker服务

> 安装过程省略，可参考笔者这篇文章进行安装 [《docker环境安装（Ubuntu、Centos）》](https://blog.51cto.com/ganbing/2050621)

### 6.2 创建registrator容器

分别在docker 01 和docker 02 上都创建：

```
[root@docker01 /]# docker run -d --name registrator --network=host -v /var/run/docker.sock:/tmp/docker.sock --restart=always gliderlabs/registrator:latest --ip 172.18.18.34 consul://172.18.18.33:8500

[root@docker02 /]# docker run -d --name registrator --network=host -v /var/run/docker.sock:/tmp/docker.sock --restart=always gliderlabs/registrator:latest --ip 172.18.18.35 consul://172.18.18.33:8500
```

参数说明：
--network：把运行的docker容器设定为host网络模式；
-v /var/run/docker.sock：把宿主机的Docker守护进程(Docker daemon)默认监听的Unix域套接字挂载到容器中；
--ip : 刚才把network指定了host模式，所以我们指定下IP为宿主机的IP；
consul:j最后这个选项是配置consul服务器的IP和端口。

```
### 6.3 启动nginx容器
```

1、先在docker01上启动第1台nginx，也就是端口为81的容器：

```
[root@docker01 /]#docker run -itd --name nginx_81 -p 81:80 nginx
```

进入容器修改index.html：

```
[root@docker01 /]# docker exec -it nginx_81 bash
root@272533504ab0:/# cd /usr/share/nginx/html/
root@272533504ab0:/usr/share/nginx/html# echo  "docker01:81" > index.html 
```

在去nginx服务器上验证下vhost.conf，从下面可以看到docker01的nginx 81注册进来了：

```
[root@nginx consul]# cat vhost.conf 
upstream http_backend {

    server 172.18.18.34:81;

}

server {
    listen 8000;
    server_name localhost;
    location / {
    proxy_pass http://http_backend;
    }
}
```

然后访问一下nginx服务器的IP地址，[http://172.18.18.32:8000](http://172.18.18.32:8000/) ，从下图可以看出是可以访问的：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/f9e6667d74a7be1d42284ffdffb4574d.png)

2、在docker01上启动第2台nginx，也就是端口为82的容器，并修改好index.html：

```
[root@docker01 /]# docker run -itd --name nginx_82 -p 82:80 nginx
[root@docker /]# docker exec -it nginx_82  bash
root@b66febfa0753:/# cd /usr/share/nginx/html/
root@b66febfa0753:/usr/share/nginx/html# echo  "docker01:82" > index.html 
```

在去nginx服务器上验证下vhost.conf，从下面可以看到docker01的nginx 82也注册进来了：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/875b40266e4604d164bde45162d241f2.png)

接着，我们访问下consul服务的web界面，[http://172.18.18.33:8500](http://172.18.18.33:8500/) ，从下图可以看出，在SERVICE中是不是发现多了个nginx 服务：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/e65f922f8c5d94cd4747c491c446f510.png)

然后，在看看NODES，从下图可以看出，刚才创建的两个nginx容器（81、82）都注册到了server01这台consul服务器，如果我们的consul是集群环境的话，可以分别注册到server02或server03中：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/75754c5d4892ed121ef07809d531bcc4.png)

3、把docker02服务器上的nginx容器83和84也创建了
创建nginx:83

```
[root@docker02 /]# docker run -itd --name nginx_83 -p 83:80 nginx
[root@docker02 /]# docker exec -it nginx_83 bash
root@5c21ba694829:/# cd /usr/share/nginx/html/
root@5c21ba694829:/usr/share/nginx/html# echo  "docker02:83" > index.html
```

创建nginx:84

```
[root@docker02 /]# docker run -itd --name nginx_84 -p 84:80 nginx
[root@docker02 /]#docker exec -it nginx_84  bash
root@0f9d72ff453b:/# cd /usr/share/nginx/html/
root@0f9d72ff453b:/usr/share/nginx/html#  echo  "docker02:84" > index.html
```

4、去nginx服务器上验证vhost.conf：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/5a805084f033178c246e11009878b25d.png)
从上图可以看出，docker02服务器上的83和84也自动注册进来了。

5、在来看看consul服务器上的web界面：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/b01af6a525853a49150d3a9078982d78.png)
从上图可以看出，SERVICE中的nginx已经有了4个，并且还多了些其它的服务，这些服务是我docker02上跑的其它应用容器，也都会自动注册进来。

6、访问nginx服务器做最后的验证，[http://172.18.18.32:8000](http://172.18.18.32:8000/) ，记得用f5刷新验证：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/b2ee65f22819aea534d34d1568a95310.png)
F5刷新一下页面：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/843ea731f4d6f357ed22541f5a01b546.png)
在刷新一下，是不是访问到了docker02这台主机了：
![基于Consul+Registrator+Nginx实现容器服务自动发现的集群框架](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/6f08d5ad7e7369095d726a3434aad4f7.png)

到此，自动注册服务的过程就完成了，想要详细了解consul的朋友可以参考官方文档：

consul 官方下载：https://www.consul.io/downloads.html
consul官方集群安装：https://www.consul.io/intro/getting-started/join.html
consul github ：https://github.com/hashicorp/consul
consul官方镜像： https://hub.docker.com/_/consul/
原作: https://blog.51cto.com/ganbing/2086851