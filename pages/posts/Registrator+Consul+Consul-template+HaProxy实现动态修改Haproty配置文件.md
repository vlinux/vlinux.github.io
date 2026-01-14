---
title: Registrator+Consul+Consul-template+HaProxy实现动态修改Haproty配置文件
categories: 自动注册
tags: [Registrator+Consul+Consul-template+HaProxy]
date: 2020-09-16 16:26:00
---
# Registrator+Consul+Consul-template+HaProxy实现动态修改Haproty配置文件

**实现需求：**

用Haproxy做负载均衡，手动方式在配置文件中添加或删除节点服务器信息，比较麻烦。

通过Registrator收集需要注册到Consul作为Haproxy节点服务器的信息，然后注册到Consul key/value。

Consul-template去Consul key/value中读取信息,然后自动修改Haproxy配置文件，并重载Haproxy。不需要修改haproxy.cfg。

**集群环境：**

![wKioL1ePH8TyP4vwAAA_diaQRtU606](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/wKioL1ePH8TyP4vwAAA_diaQRtU606.png)

Postil：Mesos集群搭建过程此处省略



关闭selinux和防火墙

```bash
setenforce 0
sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
systemctl stop firewalld && systemctl disable firewalld
```



ZK-server

```bash
容器来做consul：
获取Consul-server镜像
[root@zk-server ~]# docker pull docker.io/gliderlabs/consul-server
启动Consul-server
[root@zk-server ~]# docker run -d --name=consul --net=host docker.io/gliderlabs/consul-server -bootstrap -bind=192.168.200.8
```



宿主机来做consul

下载consul包，并解压

```bash
[root@zk-server ~]# wget https://releases.hashicorp.com/consul/0.6.4/consul_0.6.4_linux_386.zip
[root@zk-server ~]# unzip consul_0.6.4_linux_386.zip
[root@zk-server ~]# mv consul /usr/bin/
```





下载consul-template包，并解压

```bash
[root@zk-server ~]# wget https://releases.hashicorp.com/consul-template/0.15.0/consul-template_0.15.0_linux_386.zip
[root@zk-server ~]# unzip consul-template_0.15.0_linux_386.zip
[root@zk-server ~]# mv consul-template /usr/bin/
```



安装HaProxy并启动

```bash
[root@zk-server ~]# yum -y install haproxy
[root@zk-server ~]# systemctl start haproxy
```



创建consul服务器配置目录

```bash
[root@zk-server ~]# mkdir /config
```





编写agent和server的json文件

```bash
[root@zk-server ~]# vi /config/agent.json 
添加内容如下：
{
        "client_addr": "0.0.0.0",
        "data_dir": "/data",
        "leave_on_terminate": true,
        "dns_config": {
                "allow_stale": true,
                "max_stale": "1s"
        }
}
[root@zk-server ~]# vi /config/server.json
添加内容如下：
{
        "ui": true,
        "dns_config": {
                "allow_stale": false
        }
}
```



启动consul单节点服务器，当然，你consul服务器节点多的话也可以做consul集群。

```bash
[root@zk-server ~]# consul agent -server -config-dir=/config -bootstrap -bind=192.168.200.8 &
```

Postil：可用consul members 查看consul集群节点



Slave1-server

获取Registrator镜像

```bash
[root@slave1 ~]# docker pull gliderlabs/registrator:latest
```

启动Registrator

Postil：这种启动方式是注册到Consul的key/value

```bash
[root@slave1 ~]# docker run -d --restart=always --name=registrator --net=host --volume=/var/run/docker.sock:/tmp/docker.sock docker.io/gliderlabs/registrator -ip 192.168.200.10 consulkv://192.168.200.8:8500/hello
```

Postil：-ip后面跟registration 所属的主机 IP, 一定要设置此属性, 否则服务IP会显示为127.0.0.1



测试Registrator是否把本机容器注册到Consul key/value

启动个容器

```bash
[root@slave1 ~]# docker run -d -P --name=test --net=bridge p_w_picpath/nginx
```





进入Consul UI界面查看

http://192.168.200.8:8500/ui/#/dc1/kv/

![wKioL1eN2n-BKahmAAAlbgipA10864](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/wKioL1eN2n-BKahmAAAlbgipA10864.png)



ZK-server

创建consul配置目录

```bash
[root@zk-server ~]# mkdir -p /data/cfg/consul
[root@zk-server ~]# vi /data/cfg/consul/tmpl.json
添加内容如下：
consul = "127.0.0.1:8500"
 
template {
  source = "/etc/haproxy/haproxy.ctmpl"
  destination = "/etc/haproxy/haproxy.cfg"
  command = "systemctl reload haproxy"
}
```



编写haproxy模版

```bash
[root@zk-server ~]# vi /etc/haproxy/haproxy.ctmpl
添加内容如下：
global
    log         127.0.0.1 local2
 
    chroot      /var/lib/haproxy
    pidfile     /var/run/haproxy.pid
    maxconn     4000
    user        haproxy
    group       haproxy
    daemon
 
    # turn on stats unix socket
    stats socket /var/lib/haproxy/stats
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except 127.0.0.0/8
    option                  redispatch
    retries                 3
    timeout http-request    10s
    timeout queue           1m
    timeout connect         10s
    timeout client          1m
    timeout server          1m
    timeout http-keep-alive 10s
    timeout check           10s
    maxconn                 3000
 
frontend  main *:80
    acl url_static       path_beg       -i /static /p_w_picpaths /javascript /stylesheets
    acl url_static       path_end       -i .jpg .gif .png .css .js
 
    use_backend static          if url_static
    default_backend             app
 
backend static
    balance     roundrobin
    server      static 127.0.0.1:4331 check
 
backend app
    balance     roundrobin
     {{range $key, $pairs := tree "hello/" | byKey}}{{range $serverid, $pair := $pairs}}
     server app ``.`Value` check inter 2000 fall 3 weight 1 `end``end`
```



启动consul-template

```bash
[root@zk-server ~]#consul-template -config /data/cfg/consul/tmpl.json > consul-template.out 2>&1 &
```





用marathon启动一个nginx容器，看registrator是否注册到consul,然后看consul-template是否自动添加了这个后端服务器到/etc/haproxy/haproxy.cfg



[![wKiom1eN29Ch92f1AAAn-FZu8sk782.png](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/wKiom1eN29Ch92f1AAAn-FZu8sk782.png)](https://s5.51cto.com/wyfs02/M01/84/5A/wKiom1eN29Ch92f1AAAn-FZu8sk782.png)

[![wKioL1eN29DSwwZMAABEjcHBKnE132.png](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/wKioL1eN29DSwwZMAABEjcHBKnE132.png)](https://s5.51cto.com/wyfs02/M01/84/59/wKioL1eN29DSwwZMAABEjcHBKnE132.png)

[![wKiom1eN29HBhfyIAAFS6Sq96qE500.png](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/wKiom1eN29HBhfyIAAFS6Sq96qE500.png)](https://s2.51cto.com/wyfs02/M01/84/5A/wKiom1eN29HBhfyIAAFS6Sq96qE500.png)



访问HaProxy_IP

[![wKioL1eN2_DwH-usAABMZxBsa6s864.png](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/wKioL1eN2_DwH-usAABMZxBsa6s864.png)](https://s4.51cto.com/wyfs02/M02/84/59/wKioL1eN2_DwH-usAABMZxBsa6s864.png)