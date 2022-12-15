---
title: 简述文件系统共享网络服务NFS
categories: Linux技术
tags: [文件系统,NFS]
date: 2019-06-27 13:42:00
---
 

第1章 存储与nfs存储概述
==============

> 1.为什么用共享存储
> 2.存储有哪些工具
> 3.共享存储应用场景有哪些
> 4.部署nfs共享存储
> 5.客户端尝试连接共享存储

**什么是NFS？**
NFS 是 Network File System 的缩写及网络文件系统。 NFS 主要功能是通过局域网络让不同的主机系统之间可以共享文件或目录。
NFS 系统和 Windows 网络共享、网络驱动器类似, 只不过 windows 用于局域网, NFS 用于企业集群架构中, 如果是大型网站, 会用到更复杂的分布式文件系统 FastDFS,glusterfs,HDFS
**那么我们为什么要使用数据存储共享服务？**

> 1.实现多台服务器之间数据共享
> 2.实现多台服务器之间数据一致

1.1 NFS应用场景
-----------

下面我将通过图解给大家展示集群需要共享存储服务的理由。
1.A 用户上传图片经过负载均衡，负载均衡将上传请求调度至 WEB1 服务器上。
2.B 用户访问 A 用户上传的图片，此时 B 用户被负载均衡调度至 WEB2 上，因为 WEB2 上没有这张图片，所以 B用户无法看到 A 用户传的图片
 
![请输入图片描述][1]

如果有共享存储的情况
1.A 用户上传图片无论被负载均衡调度至 WEB1 还是 WEB2, 最终数据都被写入至共享存储
2.B 用户访问 A 用户上传图片时，无论调度至 WEB1 还是 WEB2，最终都会上共享存储访问对应的文件，这样就可以访问到资源了

 

![请输入图片描述][2]

1.2 nfs存储工作原理实现
---------------

 
 
![请输入图片描述][3]

NFS工作原理

    1.用户进程访问 NFS 客户端，使用不同的函数对数据进行处理
    2.NFS 客户端通过 TCP/IP 的方式传递给 NFS 服务端
    3.NFS 服务端接收到请求后，会先调用 portmap 进程进行端口映射。
    4.nfsd 进程用于判断 NFS 客户端是否拥有权限连接 NFS 服务端。
    5.Rpc.mount 进程判断客户端是否有对应的权限进行验证。
    6.idmap 进程实现用户映射和压缩
    7.最后 NFS 服务端会将对应请求的函数转换为本地能识别的命令，传递至内核，由内核驱动硬件。
    注意: rpc 是一个远程过程调用，那么使用 nfs 必须有 rpc 服务

1.3 前提条件
--------

> 1.nfs依赖于RPC服务来传递消息
> 2.NFS服务启动的端口号是随机的,启动之后会向本地的RCP注册
> 3.先启动RPC服务,再启动NFS服务
> 4.NFS和RPC之间的通讯是他们自己内部完成的,对于用户来说无感知
> 5.NFS客户端和服务端不会直接沟通,必须通过RPC服务传递消息
> 6.防火墙要开放RPC服务的端口

第2章 nfs服务端部署
============

2.1 安装nfs
---------

    yum install nfs-utils -y

2.2 配置参数
--------

nfs 服务程序的配置文件为/etc/exports，需要严格按照共享目录的路径 允许访问的 NFS 客户端（共享权限参数）格式书写，定义要共享的目录与相应的权限，具体书写方式如下图所示

 
![111][4]

配置文件参数解释：
执行 man exports 命令，然后切换到文件结尾，可以快速查看如下样例格式：

    nfs共享参数 参数作用
    rw 读写权限
    ro 只读权限
    root_squash
    当 NFS 客户端以 root 管理员访问时，映射为 NFS 服务器的匿名用户(不常用)
    no_root_squash
    当 NFS 客户端以 root 管理员访问时，映射为 NFS 服务器的 root 管理员(不常用)
    all_squash
    无论 NFS 客户端使用什么账户访问，均映射为 NFS 服务器的匿名用户(常用)
    no_all_squash
    无论 NFS 客户端使用什么账户访问，都不进行压缩
    sync
    同时将数据写入到内存与硬盘中，保证不丢失数据
    async
    优先将数据保存到内存，然后再写入硬盘；这样效率更高，但可能会丢失数据
    anonuid
    配置 all_squash 使用,指定 NFS 的用户 UID,必须存在系统
    anongid
    配置 all_squash 使用,指定 NFS 的用户 UID,必须存在系统

2.3 配置NFS服务端
------------

写入配置文件：注意！IP地址和后面的小括号没有空格

    [root@nfs01 ~]# cat > /etc/exports <<EOF /data 172.16.1.0/24(rw,sync,all_squash) EOF

创建数据目录和授权:

    [root@nfs01 ~]# mkdir /data -p
    [root@nfs01 ~]# chown -R nfsnobody:nfsnobody /data/

2.4 启动nfs
---------

    [root@nfs01 ~]# systemctl start nfs-server.service

2.5 检查命令
--------

    [root@nfs01 ~]# showmount -e 172.16.1.31
    Export list for 172.16.1.31:
    /data 172.16.1.0/24

2.6 加入开机自启动
-----------

在使用 NFS 服务进行文件共享之前，需要使用 RPC（Remote Procedure Call 远程过程调用服务将 NFS 服务器的IP 地址和端口号信息发送给客户端。因此，在启动 NFS 服务之前，需要先重启并启用 rpcbind 服务程序,同时都加入开机自启动

    [root@nfs01 ~]# systemctl enable rpcbind nfs-server
    [root@nfs01 ~]# systemctl restart rpcbind nfs-server

2.7 客户端挂载命令
-----------

客户端安装nfs服务十分简单，只需要安装nfs软件包即可

    [root@backup ~]# yum install nfs-utils rpcbind -y

安装完成后只需要启动rpcbind，不需要启动nfs

    [root@backup ~]# systemctl restart rpcbind

使用showmount命令查看nfs共享信息查询 NFS 服务器的远程共享信息，其输出格式为“共享的目录名称 允许使用客户端地址”。

    [root@backup ~]# showmount -e 172.16.1.31
    Export list for 172.16.1.31:
    /data 172.16.1.0/24 

挂载命令: 创建挂载目录
在 NFS 客户端创建一个挂载目录, 使用 mount 命令并结合-t 参数, 指定要挂载的文件系统的类型, 并在命令后面写上服务器的 IP 地址, 以及服务器上的共享目录, 最后需要写上要挂载到本地系统(客户端)的目录

    [root@backup ~]# mkdir /data -p
    [root@backup ~]# mount -t nfs 172.16.1.31:/data /data

查看是否挂载成功：

    [root@backup ~]# df -h
    文件系统           容量  已用  可用 已用% 挂载点
    /dev/sda3           18G  1.9G   17G   11% /
    devtmpfs           480M     0  480M    0% /dev
    tmpfs              489M     0  489M    0% /dev/shm
    tmpfs              489M   32M  458M    7% /run
    tmpfs              489M     0  489M    0% /sys/fs/cgroup
    /dev/sda1         1014M  110M  905M   11% /boot
    tmpfs               98M     0   98M    0% /run/user/0
    172.16.1.31:/data   18G  1.9G   17G   11% /data

测试写入数据是否正常

    [root@backup ~]# echo "123" > /data/123.txt
    [root@backup ~]# cat /data/123.txt 
    123

写入开机自动挂载

    [root@backup ~]# vim /etc/fstab 
    [root@backup ~]# tail -1 /etc/fstab       
    172.16.1.31:/data                         /data                   nfs     defaults        0 0
    [root@backup ~]# mount -a
    [root@backup ~]# df -h
    文件系统           容量  已用  可用 已用% 挂载点
    /dev/sda3           18G  1.9G   17G   11% /
    devtmpfs           480M     0  480M    0% /dev
    tmpfs              489M     0  489M    0% /dev/shm
    tmpfs              489M   32M  458M    7% /run
    tmpfs              489M     0  489M    0% /sys/fs/cgroup
    /dev/sda1         1014M  110M  905M   11% /boot
    tmpfs               98M     0   98M    0% /run/user/0
    172.16.1.31:/data   18G  1.9G   17G   11% /data

卸载命令：注意!卸载的时候如果提示”umount.nfs: /nfsdir: device is busy”先切换到其他目录再卸载

    [root@backup ~]# umount /data/

强制卸载命令：

    [root@backup ~]# umount -rl /data/

2.8 NFS 权限验证
------------

2.8.1 验证ro权限
服务端配置：

    [root@nfs01 ~]# cat /etc/exports
    /data 172.16.1.0/24(ro,sync,all_squash)
    [root@nfs01 ~]# systemctl restart nfs-server.service
    [root@nfs01 ~]# showmount -e 172.16.1.31
    Export list for 172.16.1.31:
    /data 172.16.1.0/24

客户端挂载：

    [root@backup ~]# mount -t nfs 172.16.1.31:/data /data
    [root@backup ~]# df -h
    文件系统           容量  已用  可用 已用% 挂载点
    /dev/sda3           18G  1.9G   17G   11% /
    devtmpfs           480M     0  480M    0% /dev
    tmpfs              489M     0  489M    0% /dev/shm
    tmpfs              489M   38M  452M    8% /run
    tmpfs              489M     0  489M    0% /sys/fs/cgroup
    /dev/sda1         1014M  110M  905M   11% /boot
    tmpfs               98M     0   98M    0% /run/user/0
    172.16.1.31:/data   18G  1.9G   17G   11% /data

测试读取：

    [root@backup ~]# cat /data/123.txt 
    123

写入测试：

    [root@backup ~]# echo "backup" > /data/123.txt 
    -bash: /data/123.txt: 权限不够

2.8.2 验证all_squash、 anonuid、 anongid 权限
服务端配置：

    [root@nfs01 ~]# cat /etc/exports 
    /data 172.16.1.0/24(rw,sync,all_squash,anonuid=666,anongid=666)

服务端创建用户及授权：

    [root@nfs01 ~]# useradd -s /sbin/nologin -M -u 666 -g 666 www
    [root@nfs01 ~]# id www
    uid=666(www) gid=666(www) 组=666(www)

重启NFS服务：

    [root@nfs01 ~]# systemctl restart nfs-server.service

更改目录授权：

    [root@nfs01 ~]# chown -R www:www /data/
    [root@nfs01 ~]# ls -ld /data/
    drwxr-xr-x 2 www www 35 7月  17 19:50 /data/

客户端操作:

    [root@backup ~]# mount -t nfs 172.16.1.31:/data /data
    [root@backup ~]# ls -ld /data/
    drwxr-xr-x 2 666 666 35 7月  17 19:50 /data/
    [root@backup ~]# ll /data/
    总用量 4
    -rw-r--r-- 1 666 666 0 7月  17 19:50 123
    -rw-r--r-- 1 666 666 9 7月  17 19:46 oldzhang.txt
    [root@backup ~]# echo "oldzhangy" > /data/oldzhang.txt 
    [root@backup ~]# cat /data/oldzhang.txt                    
    oldzhangy

我们会发现依然可以写入，但是为了避免这种情况发生，建议客户端也创建相同uid gid的用户

    [root@backup ~]# groupadd -g 666 www
    [root@backup ~]# useradd -s /sbin/nologin -M -u 666 -g 666 www
    [root@backup ~]# id www
    uid=666(www) gid=666(www) 组=666(www)
    [root@backup ~]# ls -ld /data/
    drwxr-xr-x 2 www www 35 7月  17 19:50 /data/
    [root@backup ~]# ll /data/    
    总用量 4
    -rw-r--r-- 1 www www  0 7月  17 19:50 123
    -rw-r--r-- 1 www www 10 7月  17 21:31 oldzhang.txt

查看nfs的端口

    [root@nfs01 ~]# rpcinfo -p
       program vers proto   port  service
        100000    4   tcp    111  portmapper
        100000    3   tcp    111  portmapper
        100000    2   tcp    111  portmapper
        100000    4   udp    111  portmapper
        100000    3   udp    111  portmapper
        100000    2   udp    111  portmapper
        100024    1   udp  43177  status
        100024    1   tcp  36750  status
        100003    3   tcp   2049  nfs
        100003    4   tcp   2049  nfs
        100227    3   tcp   2049  nfs_acl
        100003    3   udp   2049  nfs
        100003    4   udp   2049  nfs
        100227    3   udp   2049  nfs_acl
        100021    1   udp  41388  nlockmgr
        100021    3   udp  41388  nlockmgr
        100021    4   udp  41388  nlockmgr
        100021    1   tcp  43678  nlockmgr
        100021    3   tcp  43678  nlockmgr
        100021    4   tcp  43678  nlockmgr```

firewall防火墙配置

    firewall-cmd --add-service=nfs --permanent
    firewall-cmd --add-service=mountd --permanent
    firewall-cmd --add-service=rpc-bind --permanent
    firewall-cmd --reload

iptables防火墙配置
参考博客
[https://www.cnblogs.com/xiangsikai/p/10297233.html][5]
启动NFS会开启如下端口：

    1）portmapper 端口：111 udp/tcp；
    2）nfs/nfs_acl 端口：2049 udp/tcp；
    3）mountd 端口："32768--65535" udp/tcp
    4）nlockmgr 端口："32768--65535" udp/tcp

系统 RPC服务在 nfs服务启动时默认会给 mountd 和 nlockmgr 动态选取一个随机端口来进行通讯。
1.查看NFS启动后的端口

    [root@nfs01 /opt/sersync]# rpcinfo -p
       program vers proto   port  service
        100000    4   tcp    111  portmapper
        100000    3   tcp    111  portmapper
        100000    2   tcp    111  portmapper
        100000    4   udp    111  portmapper
        100000    3   udp    111  portmapper
        100000    2   udp    111  portmapper
        100024    1   udp  43177  status
        100024    1   tcp  36750  status
        100003    3   tcp   2049  nfs
        100003    4   tcp   2049  nfs
        100227    3   tcp   2049  nfs_acl
        100003    3   udp   2049  nfs
        100003    4   udp   2049  nfs
        100227    3   udp   2049  nfs_acl
        100021    1   udp  41388  nlockmgr
        100021    3   udp  41388  nlockmgr
        100021    4   udp  41388  nlockmgr
        100021    1   tcp  43678  nlockmgr
        100021    3   tcp  43678  nlockmgr
        100021    4   tcp  43678  nlockmgr

2.将随机的端口号设置固定

    [root@nfs01 ~]# vim /etc/sysconfig/nfs
    [root@nfs01 ~]# tail -5 /etc/sysconfig/nfs
    RQUOTAD_PORT=4001
    LOCKD_TCPPORT=4002
    LOCKD_UDPPORT=4002
    MOUNTD_PORT=4003
    STATD_PORT=4004

3.重启nfs和rpc服务

    [root@nfs01 ~]# systemctl restart rpcbind.service nfs-server.service

4.再次查看端口信息,发现端口号已经固定了

    [root@nfs01 ~]# rpcinfo -p
       program vers proto   port  service
        100000    4   tcp    111  portmapper
        100000    3   tcp    111  portmapper
        100000    2   tcp    111  portmapper
        100000    4   udp    111  portmapper
        100000    3   udp    111  portmapper
        100000    2   udp    111  portmapper
        100024    1   udp  43177  status
        100024    1   tcp  36750  status
        100005    1   udp   4003  mountd
        100005    1   tcp   4003  mountd
        100005    2   udp   4003  mountd
        100005    2   tcp   4003  mountd
        100005    3   udp   4003  mountd
        100005    3   tcp   4003  mountd
        100003    3   tcp   2049  nfs
        100003    4   tcp   2049  nfs
        100227    3   tcp   2049  nfs_acl
        100003    3   udp   2049  nfs
        100003    4   udp   2049  nfs
        100227    3   udp   2049  nfs_acl
        100021    1   udp   4002  nlockmgr
        100021    3   udp   4002  nlockmgr
        100021    4   udp   4002  nlockmgr
        100021    1   tcp   4002  nlockmgr
        100021    3   tcp   4002  nlockmgr
        100021    4   tcp   4002  nlockmgr

5.设置iptables

    -A INPUT -p tcp -m tcp --dport 111 -j ACCEPT
    -A INPUT -p udp -m udp --dport 111 -j ACCEPT
    -A INPUT -p tcp -m tcp --dport 2049 -j ACCEPT
    -A INPUT -p udp -m udp --dport 2049 -j ACCEPT
    -A INPUT -p tcp -m tcp --dport 4001:4004 -j ACCEPT
    -A INPUT -p udp -m udp --dport 4001:4004 -j ACCEPT

6.保存配置

    iptables-save 
    iptables -nL

NFS故障案例
如果设置了开机自启动，但是系统启动的时候NFS并没有提供服务，就会导致开机自检的时候卡在挂在那一步
开机启动时添加rd.break

    ctrl+x
    mount -o remount,rw /sysroot/
    chroot /sysroot/

第3章 NFS小结
=========

NFS 存储优点

> 1.NFS 文件系统简单易用、方便部署、数据可靠、服务稳定、满足中小企业需求。
> 2.NFS 文件系统内存放的数据都在文件系统之上，所有数据都是能看得见

NFS 存储局限

> 1.存在单点故障, 如果构建高可用维护麻烦 web->nfs()->backup
> 2.NFS 数据明文, 并不对数据做任何校验。
> 3.客户端挂载 NFS 服务没有密码验证, 安全性一般(内网使用)

NFS 应用建议

> 1.生产场景应将静态数据尽可能往前端推, 减少后端存储压力
> 2.必须将存储里的静态资源通过 CDN 缓存 jpg\png\mp4\avi\css\js
> 3.如果没有缓存或架构本身历史遗留问题太大, 在多存储也无用


----------
[player id='712292593' type='collect' autoplay='true'/]


  [1]: http://upload-images.jianshu.io/upload_images/14248468-126daaf52c3df95f.png
  [2]: http://upload-images.jianshu.io/upload_images/14248468-97354c7a9be2dea0.png
  [3]: http://upload-images.jianshu.io/upload_images/14248468-b92ace7bacf7aeb2.png
  [4]: http://upload-images.jianshu.io/upload_images/14248468-78e854e15c61eb10.png
  [5]: https://www.cnblogs.com/xiangsikai/p/10297233.html