---
title: Docker基本四种网络模型
categories: DevOps
tags: [Docker]
date: 2020-06-23 16:40:00
---
### 一，NAT（最小）

```
NAT网络模型，默认情况下，均为NAT模式，如网络的端口映射就为NAT
```

### 二，none

```
格式：docker run --net=none

[root@docker ~]# docker run --rm -ti --net=none centos:centos7
```

### 三，主机（与主机相同IP）

```
格式：docker run --net=host

[root@docker ~]# docker run --rm -ti --net=Host centos:centos7
[root@docker /]# ifconfig
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.7.5.1  netmask 255.255.255.0  broadcast 172.7.5.255
        inet6 fe80::42:28ff:fe56:8b6  prefixlen 64  scopeid 0x20<link>
        ether 02:42:28:56:08:b6  txqueuelen 0  (Ethernet)
        RX packets 135990  bytes 9017234 (8.5 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 158771  bytes 317188403 (302.4 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.3.153.120  netmask 255.255.255.0  broadcast 10.3.153.255
        inet6 fe80::36aa:b367:aa13:b475  prefixlen 64  scopeid 0x20<link>
        ether 00:50:56:9b:00:06  txqueuelen 1000  (Ethernet)
        RX packets 747539  bytes 528246025 (503.7 MiB)
        RX errors 0  dropped 1227  overruns 0  frame 0
        TX packets 249250  bytes 38867074 (37.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

### 四，联合网络（即两个容器共享一个IP地址）

```
第一个容器运行
-----
[root@docker ~]# docker run --rm -ti centos:centos7     #以nat模式启动了一个容器
[root@2f504d6966dc /]# ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255     #IP172.7.5.2
        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)
        RX packets 7417  bytes 13726936 (13.0 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6118  bytes 473182 (462.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

第二个容器运行，以联合网络的方式
-----
格式：Docker run —net=container:${container_id}

[root@docker ~]# docker ps       #查看第一个容器的ID值
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
2f504d6966dc        centos:centos7      "/bin/bash"         6 minutes ago       Up 6 minutes                            thirsty_bhabha
[root@docker ~]# docker run --rm -ti --net=container:2f504d6966dc centos:centos7
[root@2f504d6966dc /]# ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255
        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)
        RX packets 15431  bytes 27381590 (26.1 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 13359  bytes 1061065 (1.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        loop  txqueuelen 1  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```