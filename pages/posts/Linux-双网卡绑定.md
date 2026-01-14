---
title: Linux 双网卡绑定
categories: Linux技术
tags: [双网卡]
date: 2019-10-09 11:21:00
---
Linux 双网卡绑定
===========
　双网卡绑定这项继续特别适合利用再生产环境7x24小时的网络传输服务，采取双网卡绑定模式不仅可以提高网络传输速度，更重要的是，还可以确保其中一块网卡出现故障时，依然可以正常高效可靠的措施。下面我会使用两种方案来完成网双卡绑定 一种是传统的配置文件修改方案，另一种是最新的命令生成配置文件方案。


**主要常用的三种模式**

 - mode0（平衡负载模式）：平时两块网卡均工作，且自动备援，但需要在与服务器本地网卡相连的交换机设备上进行端口聚合来支持绑定技术。
 - mode1（自动备援模式）：平时只有一块网卡工作，在它故障后自动替换为另外的网卡。
 - mode6（平衡负载模式）：平时两块网卡均工作，且自动备援，无须交换机设备提供辅助支持。(推荐)


**其他模式介绍**


    balance-rr (mode=0)       默认, 有高可用 (容错) 和负载均衡的功能,  需要交换机的配置，每块网卡轮询发包 (流量分发比较均衡).
    active-backup (mode=1)  只有高可用 (容错) 功能, 不需要交换机配置, 这种模式只有一块网卡工作, 对外只有一个mac地址。缺点是端口利用率比较低
    balance-xor (mode=2)     不常用
    broadcast (mode=3)        不常用
    802.3ad (mode=4)          IEEE 802.3ad 动态链路聚合，需要交换机配置，没用过
    balance-tlb (mode=5)      不常用
    balance-alb (mode=6)     有高可用 ( 容错 )和负载均衡的功能，不需要交换机配置  (流量分发到每个接口不是特别均衡)

bond 模式 修改配置文件实现双网卡绑定
---------------------
**注意**
`必须保证服务器有两块同网段网卡设备`
**环境：**

 - 已添加 网卡1 ens33
 - 已添加 网卡2 ens34

**1、新建Master配置文件**

/etc/sysconfig/network-scripts/ifcfg-bond6

    # 设备名
    DEVICE=bond6
    # 手动配置地址
    BOOTPROTO=none
    # 配置模式
    BONDING_OPTS="miimon=100 mode=6"
    # IP地址
    IPADDR=192.168.1.100
    # 子网掩码
    PREFIX=24
    # 网关地址
    GATEWAY=192.168.1.1
    # DNS1地址
    DNS1=114.114.114.114
    # DNS2地址
    DNS2=8.8.8.8


**2、新建Slave1配置文件**

/etc/sysconfig/network-scripts/ifcfg-ens33

    # 设备名
    DEVICE=ens33
    # 手动获取                                                            
    BOOTPROTO=none
    # master设备名
    MASTER=bond0
    # 开启SLAVE
    SLAVE=yes
    #是否允许普通用户管理此端口
    USERCTL=no

**3、新建Slave2配置文件**

    # 设备名
    DEVICE=ens34
    # 手动获取                                                            
    BOOTPROTO=none
    # master设备名
    MASTER=bond0
    # 开启SLAVE
    SLAVE=yes
    #是否允许普通用户管理此端口
    USERCTL=no

**4、重启网卡服务**

    systemctl restart network

**5、查看详情信息**

    cat /proc/net/bonding/bond6 


**bond 模式 nmcli命令行实现双网卡绑定**
---------------------------

注意：
---

`必须保证服务器有两块同网段网卡设备`
**环境：**

 - 已添加 网卡1 ens33
 - 已添加 网卡2 ens34

**1、创建Master配置文件**

    # nmcli connection add type bond con-name 设备名称 ifname 设备名称 mode 模式号 miimon 毫秒
    nmcli connection add type bond con-name bond6 ifname bond6 mode 1 miimon 100

`注：miimon：指定当发现一个链路恢复时，在激活该链路之前的等待时间，以毫秒计算`

**2、新建Slave1配置文件**

    # nmcli connection add type bond-slave ifname 设备名称 master master设备名称
    nmcli connection add type bond-slave ifname ens33 master bond6

**3、新建Slave2配置文件**

    # nmcli connection add type bond-slave ifname 设备名称 master master设备名称
    nmcli connection add type bond-slave ifname ens34 master bond6

**4、激活网路设备**

    # 激活bond6网络设备
    nmcli connection up "bond6"
    # 激活ens33网络设备
    nmcli connection up "bond-slave-ens33"
    # 激活ens34网络设备
    nmcli connection up "bond-slave-ens33"
**5、查看详情信息**

    cat /proc/net/bonding/bond6 


<!--more-->


[player id='712292593' type='collect' autoplay='true'/]

