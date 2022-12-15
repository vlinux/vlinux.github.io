---
title: GlusterFS分布式文件系统群集
categories: Linux技术
tags: [文件系统]
date: 2018-12-05 17:25:00
---
13.1 GlusterFS概述
1.GlusterFS简介
GlusterFS是一个开源的分布式文件系统，同时也是Scale-Out存储解决方案Gluster的核心，在存储数据方面具有强大的横向扩展能力，通过扩展不同的节点可以支持数PB级别的存储容量GlusterFS借助TCP/IP或InfiniBand RDMA网络将分散的存储资源汇聚在一起，统一提供存储服务，并使用单一去全局命名空间来管理数据。GlusterFS基于可堆叠的用户空间以及无元的设计，可为各种不同的数据负载提供优异的性能
GlusterFS主要由存储服务器（Brick Server）、客户端及NFS/Samba存储网关（可选，根据需要选择使用）组成。GlusterFS架构中最大的设计特点是没有元数据服务器组件，这助于提升整个系统的性能、可靠性和稳定性。传统的分布式文件系统大多通过元服务器来存储元数据，元数据包含存储节点上的目录信息、目录结构等，这样的设计在浏览目录时效率非常高，但是也存在一些缺陷，如单点故障，一旦元数据服务器出现故障，即使节点具备再高的冗余性，整个存储系统也将崩溃，而GlusterFS分布式文件系统是基于无元服务器的设计，数据横向扩展能力强，具备较高的可靠性及存储效率。GlusterFS支持TCP/IP和InfiniBandRDMA高速网络互联，客户端可通过原生GlusterFS协议访问数据，其他没有运行GlusterFS客户端的终端可通过NFS/CIFS标准协议通过存储网关访问数据

![1.jpg][1]

2.GlusterFS的特点
扩展性和高性能。GlusterFS利用双重特性来提供高容量存储解决方案
Scale-Out架构通过增加存储节点的方式来提高存储容量和性能（磁盘、计算机和I/O资源都可以独立增加），支持10GbE和InfiniBand等高速网络互联
Gluster弹性哈希（Elastic Hash）解决了GlusterFS对元数据服务器的依赖，GlusterFS采用弹性哈希算法在存储池中定位数据。GlusterFS中可以智能地定位任意数据分片（将数据分片存储在不同节点上），不需要查看索引或者向元数据服务器查询。这种设计机制实现了存储的横向扩展，改善了单点故障及性能瓶颈，真正实现了并行化数据访问
高可用性。GlusterFS通过配置某些类型的存储卷，可以对文件进行自动复制（类似于RAID1），即使某个节点出现故障，也不影响数据的访问。当数据出现不一致时，自动修复功能能够把数据恢复到正确的状态，数据的修复是以增量的方式在后台执行，不会占用太多系统资源。GlusterFS可以支持所有的存储，因为它没有设计自己的私有数据文件格式，而是采用操作系统中标准的磁盘文件系统（如EXT3、XFS等）来存储文件，数据可以使用传统的访问磁盘的方式被访问
全局统一命名空间。全局统一命名空间将所有的存储资源聚集成一个单一的虚拟存储池，对用户和应用屏蔽了物理存储信息。存储资源（类似于LVM）可以根据生产环境中的需要进行弹性扩展或收缩。在多节点场景中，全局统一命名空间还可以基于不同节点做负载均衡，大大提高了存取效率
弹性卷管理。GlusterFS通过将数据储存在逻辑卷中，逻辑卷从逻辑存储池进行独立逻辑划分。逻辑存储池可以在线进行增加和移除，不会导致业务中断。逻辑卷可以根据需求在线增加缩减，并可以在多个节点中负载均衡。文件系统配置更改也可以实时在线进行并应用，从而可以适应工作负载条件变化或在线性能调优
基于标准协议。Gluster存储服务支持NFS、CIFS、HTTP、FTP、SMB及Gluster原生协议，完全与POSIX标准兼容。现有应用程序不需要做任何修改就可以对Gluster中的数据进行访问，也可以使用专用API进行访问（效率更高），这在公有云环境中部署Gluster时非常有用，Gluster对云服务器提供商专用API进行抽象，然后提供标准POSIX接口

3.GlusterFS术语

Brick（存储块）：指可信主机池中由主机提供的用于物理存储的专用分区，是GlusterFS中的基本存储单元，同时也是可信存储池中服务器上对外提供的存储目录。存储目录的格式由服务器和目录的绝对路径构成，表示方法为SERVER:EXPORT，如192.168.1.4:/data/mydir/
Volume（逻辑卷）：一个逻辑卷是一组Brick的集合。卷是数据存储的逻辑设备，类似于LVM中的逻辑卷。大部分Gluster管理操作是在卷上进行的
FUSE（Filesystem inUserspace）：是一个内核模块，允许用户创建自己的文件系统，无须修改内核代码
VFS：内核空间对用户空间提供的访问磁盘的接口
Glusterd（后台管理进程）：在存储群集中的每个节点上都要运行

4.模块化堆栈式架构

 
GlusterFS是模块化堆栈式的架构设计。模块称为Translator，是GlusterFS提供的一种强大机制，借助这种良好定义的接口可以高效简便地扩展文件系统的功能
(1)	服务端与客户端的设计高度模块化的同时模块接口是兼容的，同一个translator可同时在客户端和服务器加载
(2)	GlusterFS中所有的功能都是通过translator实现的，其中客户端要比服务端更复杂。所以功能的重点主要集中在客户端上

13.2 GlusterFS的工作原理
1.GlusterFS的工作流程

![请输入图片描述][2]
 
(1)	客户端或应用程序通过GlusterFS的挂载点访问数据
(2)	Linux系统内核通过VFS API收到请求并处理
(3)	VFS将数据递交给FUSE内核文件系统，并向系统注册一个实际的文件系统FUSE，而FUSE文件系统则是将数据通过/dev/fuse设备文件递交给了GlusterFS client端。可以将FUSE文件系统理解为一个代理
(4)	GlusterFS client收到数据后，client根据配置文件对数据进行处理
(5)	经过GlusterFS client处理后，通过网络将数据传递至远端的GlusterFS Server，并且将数据写入服务器存储设备

2.弹性HASH算法
 
![请输入图片描述][3]
 
![请输入图片描述][4]

13.3 GlusterFS的卷类型

> 分布式卷（Distribute volume）：文件通过HASH算法分布到所有Brick
> Server上，这种卷是GlusterFS的基础；以文件为单位根据HASH算法散列到不同的Brick，其实只是扩大了磁盘空间，如果有一块磁盘损坏，数据也将丢失，属于文件级的RAID0，不具有容错能力
> 条带卷（Stripe volume）：类似RAID0，文件被分成数据块并以轮询的方式分布到多个Brick
> Server上，文件存储以数据块为单位，支持大文件存储，文件越大，读取效率越高 复制卷（Replica
> volume）：将文件同步到多个Brick上，使其具备多个文件副本，属于文件级RAID1，具有容错能力。因为数据分散在多个Brick中，所以读性能得到很大提升，但写性能下降
> 分布式条带卷（Distribute Stripe volume）：Brick
> Server数量是条带数（数据快分布的Brick数量）的倍数，兼具分布式卷和条带卷的特点 分布式复制卷（Stripe Replica
> volume）：Brick Server数量是镜像数（数据副本数量）的倍数，兼具分布式卷和复制卷的特点 条带复制卷（Stripe
> Replica volume）：类似RAID 10，同时具有条带卷和复制卷的特点 分布式条带部复制卷（Distribute Stripe
> Replicavolume）：三种基本卷的复合卷，通常用于类Map Reduce应用

1.分布式卷
特点：
文件分布在不同的服务器，不具备冗余性
更容易且廉价地扩展卷的大小
单点故障会造成数据丢失
依赖底层的数据保护

![请输入图片描述][5]
 
2.条带卷
特点：
数据被分割成更小块分布到块服务器群中的不同条带区
分布减少了负载切更小的文件加速了存取的速度
没有数据冗余

![请输入图片描述][6]
 
3.复制卷
特点：
卷中所有的服务器均保存一个完整的副本
卷的副本数量可由客户创建的时候决定
至少有两块服务器或更多服务器
具备冗余性

![请输入图片描述][7]
 
4.分布式条带卷

![请输入图片描述][8]
 
5.分布式复制卷

![请输入图片描述][9]
 
13.4 GlusterFS部署
13.4.1 部署群集环境

![请输入图片描述][10]
 
服务器的相关信息（1）


![请输入图片描述][11]

服务器的相关信息（2）

![13.png][12]

1.准备环境
1)添加硬盘
node1添加四块硬盘
一块3G、一块4G、一块5G、一块6G
node2添加四块硬盘
一块3G、一块4G、一块5G、一块6G
node3添加三块硬盘
一块3G、一块4G、一块5G
node4添加三块硬盘
一块3G、一块4G、一块5G
2)修改主机名

    node1节点	
    vim /etc/hostname
    node1
    node2节点
    vim /etc/hostname
    node2
    node3节点
    vim /etc/hostname
    node3
    node4节点
    vim /etc/hostname
    node4

3)添加硬盘和修改主机名后重启系统生效
reboot
4)新建目录
node1、node2
mkdir /b3 /c4 /d5 /e6
node3、node4
mkdir /b3 /c4 /d5
5)分区硬盘
node1、node2
fdisk /dev/sdb
n
p
回车
回车
回车
p
w

fdisk /dev/sdc
fdisk /dev/sdd
fdisk /dev/sde
node3、node4
fdisk /dev/sdb
n
p
回车
回车
回车
p
w

fdisk /dev/sdc
fdisk /dev/sdd
6)	格式化硬盘
node1、node2
mkfs -t ext4 /dev/sdb1
mkfs -t ext4 /dev/sdc1
mkfs -t ext4 /dev/sdd1
mkfs -t ext4 /dev/sde1
node3、node4
mkfs -t ext4 /dev/sdb1
mkfs -t ext4 /dev/sdc1
mkfs -t ext4 /dev/sdd1
7)	手动挂载硬盘
node1、node2
mount /dev/sdb1 /b3
mount /dev/sdc1 /c4
mount /dev/sdd1 /d5
mount /dev/sde1 /e6
node3、node4
mount /dev/sdb1 /b3
mount /dev/sdc1 /c4
mount /dev/sdd1 /d5
8)自动挂载硬盘
node1、node2
vim /etc/fstab
/dev/sdb1       /b3     ext4     defaults  0 0
/dev/sdc1       /c4     ext4     defaults  0 0
/dev/sdd1       /d5     ext4     defaults  0 0
/dev/sde1       /e6     ext4     defaults  0 0
node3、node4
vim /etc/fstab
/dev/sdb1       /b3     ext4     defaults  0 0
/dev/sdc1       /c4     ext4     defaults  0 0
/dev/sdd1       /d5     ext4     defaults  0 0	
2.关闭防火墙和SELinux（node1、node2、node3、node4）
systemctl stop firewalld
setenforce 0
3.配置hosts文件（node1、node2、node3、node4）
vim /etc/hosts
192.168.10.101  node1
192.168.10.102  node2
192.168.10.103  node3
192.168.10.104  node4
4.安装软件（node1、node2、node3、node4）
把gfsrepo文件夹复制到每个节点的/opt目录下
修改YUM仓库配置文件
vim /etc/yum.repos.d/CentOS-Media.repo
[gfsrepo]
name=GFS
baseurl=file:///opt/gfsrepo
gpgcheck=0
enabled=1
创建YUM仓库
createrepo /opt/gfsrepo
安装GFS所需软件
yum -y install glusterfs glusterfs-server glusterfs-fuse glusterfs-rdma
5.启动GlusterFS（node1、node2、node3、node4）
启动GFS服务
systemctl start glusterd
设置GFS开机自启
systemctl enable glusterd
6.添加节点（node1）
gluster peer probe node1
gluster peer probe node2
gluster peer probe node3
gluster peer probe node4
7.查看群集状态（node1、node2、node3、node4）
gluster peer status
13.4.2 创建卷（node1）
1.创建分布式卷
gluster volume create dis-volume node1:/e6 node2:/e6 force
gluster volume info dis-volume
gluster volume start dis-volume
2.创建条带卷
gluster volume create stripe-volume stripe 2 node1:/d5 node2:/d5 force
gluster volume info stripe-volume
gluster volume start stripe-volume
3.创建复制卷
gluster volume create rep-volume replica 2 node3:/d5 node4:/d5 force
gluster volume info rep-volume
gluster volume start rep-volume
4.创建分布式条带卷
gluster volume create dis-stripe stripe 2 node1:/b3 node2:/b3 node3:/b3 node4:/b3 force
gluster volume info dis-stripe
gluster volume start dis-stripe
5.创建分布式复制卷
gluster volume create dis-rep replica 2 node1:/c4 node2:/c4 node3:/c4 node4:/c4 force
gluster volume info dis-rep
gluster volume start dis-rep
13.4.3 部署Gluster客户端（client）
1.安装客户端软件
修改主机名
hostname client
vim /etc/hostname
client
bash
关闭防火墙和SELinux
systemctl stop firewalld
setenforce 0
systemctl disable firewalld
把gfsrepo文件夹复制到每个节点的/opt目录下
修改YUM仓库配置文件
vim /etc/yum.repos.d/CentOS-Media.repo
[gfsrepo]
name=GFS
baseurl=file:///opt/gfsrepo
gpgcheck=0
enabled=1
创建YUM仓库
createrepo /opt/gfsrepo
安装GFS客户端
yum -y install glusterfs glusterfs-fuse
2.创建挂载目录
mkdir -p /test/{dis,stripe,rep,dis_and_stripe,dis_and_rep}
ls /test
3.修改hosts文件
vim /etc/hosts
192.168.10.101  node1
192.168.10.102  node2
192.168.10.103  node3
192.168.10.104  node4
4.挂载Gluster文件系统
mount -t glusterfs node1:dis-volume /test/dis
mount -t glusterfs node1:stripe-volume /test/stripe/
mount -t glusterfs node1:rep-volume /test/rep
mount -t glusterfs node1:dis-stripe /test/dis_and_stripe/
mount -t glusterfs node1:dis-rep /test/dis_and_rep/
df -h
5.修改fstab配置文件
vim /etc/fstab
node1:dis-volume     /test/dis             glusterfs  defaules,_netdev  0 0
node1:stripe-volume  /test/stripe          glusterfs  defaules,_netdev  0 0
node1:rep-volume     /test/rep             glusterfs  defaules,_netdev  0 0
node1:dis-stripe     /test/dis_and_stripe  glusterfs  defaules,_netdev  0 0
node1:dis-rep        /test/dis_and_rep     glusterfs  defaules,_netdev  0 0
13.4.4 测试Gluster文件系统
1.创建测试文件（client）
dd if=/dev/zero of=/root/demo1.log bs=1M count=43
dd if=/dev/zero of=/root/demo2.log bs=1M count=43
dd if=/dev/zero of=/root/demo3.log bs=1M count=43
dd if=/dev/zero of=/root/demo4.log bs=1M count=43
dd if=/dev/zero of=/root/demo5.log bs=1M count=43
2.卷中写入文件（client）
cp demo* /test/dis/
cp demo* /test/stripe/
cp demo* /test/rep/
cp demo* /test/dis_and_stripe/
cp demo* /test/dis_and_rep/
3.查看文件分布
1)查看分布式卷文件分布
node1
ll -h /e6
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo4.log
node2
ll -h /e6
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo5.log
2)查看条带卷文件分布
node1
ll -h /d5
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo4.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo5.log
node2
ll -h /d5
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo4.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo5.log
3)查看复制卷文件分布
node3
ll -h /d5
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo4.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo5.log
node4
ll -h /d5
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo4.log
-rw-r--r--. 2 root root 43M 3月  16 17:47 demo5.log
4)查看分布式条带卷文件分布
node1
ll -h /b3
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo4.log
node2
ll -h /b3
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo1.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo2.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo3.log
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo4.log
node3
ll -h /b3
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo5.log
node4
ll -h /b3
-rw-r--r--. 2 root root 22M 3月  16 17:47 demo5.log
5)查看分布式复制卷文件分布
node1
ll -h /c4
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo1.log
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo2.log
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo3.log
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo4.log
node2
ll -h /c4
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo1.log
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo2.log
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo3.log
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo4.log
node3
ll -h /c4
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo5.log
node4
ll -h /c4
-rw-r--r--. 2 root root 43M 3月  16 17:55 demo5.log
4.破坏性测试（client）
挂起node2节点
测试分布式卷数据是否可以访问
head -1 /test/dis/demo1.log
head -1 /test/dis/demo2.log
head -1 /test/dis/demo3.log
head -1 /test/dis/demo4.log
head -1 /test/dis/demo5.log
head: 无法打开"/test/dis/demo5.log" 读取数据: 没有那个文件或目录
测试条带卷数据是否可以访问
head -1 /test/stripe/demo1.log
head: 读取"/test/stripe/demo1.log" 时出错: 没有那个文件或目录
head -1 /test/stripe/demo2.log
head: 读取"/test/stripe/demo2.log" 时出错: 没有那个文件或目录
head -1 /test/stripe/demo3.log
head: 读取"/test/stripe/demo3.log" 时出错: 没有那个文件或目录
head -1 /test/stripe/demo4.log
head: 读取"/test/stripe/demo4.log" 时出错: 没有那个文件或目录
head -1 /test/stripe/demo5.log
head: 读取"/test/stripe/demo5.log" 时出错: 没有那个文件或目录
测试分布式条带卷数据是否可以访问
head -1 /test/dis_and_stripe/demo1.log
head: 读取"/test/dis_and_stripe/demo1.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo2.log
head: 读取"/test/dis_and_stripe/demo2.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo3.log
head: 读取"/test/dis_and_stripe/demo3.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo4.log
head: 读取"/test/dis_and_stripe/demo4.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo5.log
测试分布式复制卷数据是否可以访问
head -1 /test/dis_and_rep/demo1.log
head -1 /test/dis_and_rep/demo2.log
head -1 /test/dis_and_rep/demo3.log
head -1 /test/dis_and_rep/demo4.log
head -1 /test/dis_and_rep/demo5.log
挂起node4节点
测试复制卷数据是否可以访问
head -1 /test/rep/demo1.log
head -1 /test/rep/demo2.log
head -1 /test/rep/demo3.log
head -1 /test/rep/demo4.log
head -1 /test/rep/demo5.log
测试分布式条带卷数据是否可以访问
head -1 /test/dis_and_stripe/demo1.log
head: 读取"/test/dis_and_stripe/demo1.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo2.log
head: 读取"/test/dis_and_stripe/demo2.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo3.log
head: 读取"/test/dis_and_stripe/demo3.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo4.log
head: 读取"/test/dis_and_stripe/demo4.log" 时出错: 没有那个文件或目录
head -1 /test/dis_and_stripe/demo5.log
head: 读取"/test/dis_and_stripe/demo5.log" 时出错: 没有那个文件或目录
tail -1 /test/dis_and_stripe/demo5.log
tail: 读取"/test/dis_and_stripe/demo5.log" 时出错: 没有那个文件或目录
测试分布式复制卷数据是否可以访问
head -1 /test/dis_and_rep/demo1.log
head -1 /test/dis_and_rep/demo2.log
head -1 /test/dis_and_rep/demo3.log
head -1 /test/dis_and_rep/demo4.log
head -1 /test/dis_and_rep/demo5.log
13.4.5 其他的维护命令（node1、node2、node3、node4）
1.查看GlusterFS卷
查看卷的列表
gluster volume list
查看所有卷的信息
gluster volume info
查看卷的状态
gluster volume status
2.停止/删除卷
停止dis-stripe卷
gluster volume stop dis-stripe
启用dis-stripe卷
gluster volume start dis-stripe
删除dis-stripe卷
gluster volume delete dis-stripe
3.设置卷的访问控制
只允许192.168.1.0和10.1.1.0网段的客户端访问dis-rep卷
gluster volume set dis-rep auth.allow 192.168.1.*,10.1.1.*


  [1]: https://www.xoxoyun.cn/usr/uploads/2020/02/3542246066.jpg
  [2]: https://www.xoxoyun.cn/usr/uploads/2020/02/3904427408.png
  [3]: https://www.xoxoyun.cn/usr/uploads/2020/02/1491398914.png
  [4]: https://www.xoxoyun.cn/usr/uploads/2020/02/3063198327.png
  [5]: https://www.xoxoyun.cn/usr/uploads/2020/02/2140635533.png
  [6]: https://www.xoxoyun.cn/usr/uploads/2020/02/2297015581.png
  [7]: https://www.xoxoyun.cn/usr/uploads/2020/02/4226946028.png
  [8]: https://www.xoxoyun.cn/usr/uploads/2020/02/1477673389.png
  [9]: https://www.xoxoyun.cn/usr/uploads/2020/02/813965134.png
  [10]: https://www.xoxoyun.cn/usr/uploads/2020/02/3353905723.gif
  [11]: https://www.xoxoyun.cn/usr/uploads/2020/02/2181784901.png
  [12]: https://www.xoxoyun.cn/usr/uploads/2020/02/266306810.png