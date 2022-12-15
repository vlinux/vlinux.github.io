---
title: DHCP动态分配IP地址（Linux）
categories: Linux技术
tags: [DHCP,自动分配IP地址]
date: 2020-02-17 11:31:00
---
简介
==

> 动态主机配置协议（DHCP，Dynamic Host Configuration Protocol），该协议用于自动管理局域网内主机的IP地址、子网掩码、网关地址及DNS地址等参数，可以有效地提升IP地址的利用率，提高配置效率，并降低管理与维护成本。
> 动态主机配置协议（DHCP）是一种基于UDP协议且仅限于在局域网内部使用的网络协议，主要用于大型的局域网环境或者存在较多移动办公设备的局域网环境中，其主要用途是为局域网内部的设备或网络供应商自动分配IP地址等参数

常见术语
----

作用域：一个完整的IP地址段，DHCP协议根据作用域来管理网络的分布、分配IP地址及其他配置参数。
超级作用域：用于管理处于同一个物理网络中的多个逻辑子网段。超级作用域中包含了可以统一管理的作用域列表。
排除范围：把作用域中的某些IP地址排除，确保这些IP地址不会分配给DHCP客户端。
地址池：在定义了DHCP的作用域并应用了排除范围后，剩余的用来动态分配给DHCP客户端的IP地址范围。
租约：DHCP客户端能够使用动态分配的IP地址的时间。
预约：保证网络中的特定设备总是获取到相同的IP地址。

常见参数
----
参数  |	作用

    ddns-update-style none;	设置DNS服务不自动进行动态更新
    ignore client-updates;	忽略客户端更新DNS记录
    subnet 192.168.10.0 netmask 255.255.255.0 {	作用域为192.168.10.0/24网段
    range 192.168.10.50 192.168.10.150;	IP地址池为192.168.10.50-150（约100个IP地址）
    option subnet-mask 255.255.255.0;	定义客户端默认的子网掩码
    option routers 192.168.10.1;	定义客户端的网关地址
    option domain-name "linuxprobe.com";	定义默认的搜索域
    option domain-name-servers 192.168.10.1;	定义客户端的DNS地址
    default-lease-time 21600;	定义默认租约时间（单位：秒）
    max-lease-time 43200;	定义最大预约时间（单位：秒）
    }	结束符

部署
--
Dhcp服务名称：dhcpd
主配置文件： /etc/dhcp/dhcpd.conf
配置文件模板：/usr/share/doc/dhcp-4.2.5/dhcpd.conf.example

1.	搭建本地yum源。（或使用网络YUM源）
2.	使用yum方式安装dhcpd服务

        yum install dhcp* -y			//使用yum方式安装dhcp软件

3.	查看dhcp主配置文件内容

        cat /etc/dhcp/dhcpd.conf		//查看dhcp的主配置文件内容

4.	过滤配置文件模板到主配置文件

        cat /usr/share/doc/dhcp-4.2.5/dhcpd.conf.example | grep -v '^#' | grep -v '^$' > /etc/dhcp/dhcpd.conf

5.	编辑主配置文件

   

     option domain-name "example.org";			//定义DNS域名
        option domain-name-servers ns1.example.org;	//定义DNS服务器地址
        default-lease-time 600;				//默认超时时间
        max-lease-time 7200;					//最大超时时间
        log-facility local7;					//
        subnet 10.5.5.0 netmask 255.255.255.224 {		//定义网段和子网掩码
        range 10.5.5.26 10.5.5.30;				//定义地址池的范围
        option domain-name-servers ns1.internal.example.org;	//定义DNS服务器地址
        option domain-name "internal.example.org";	//定义DNS域名
        option routers 10.5.5.1;				//定义网关地址
        option broadcast-address 10.5.5.31;			//定义广播地址
        default-lease-time 600;				//默认超时时间
        max-lease-time 7200;					//最大超时时间
        } 

客户端IP地址保留
---------

    host 主机名称 {
                           Hardware     ethernet          该主机的mac地址;
                           Fixed-address              欲指定的ip地址；
    }

1.	获取客户端mac地址，先让客户端自动获取一次，然后去日志文件获取mac地址，并追加到dhcpd主配置文件里面

    tail -7 /var/log/messages >> /etc/dhcp/dhcpd.conf

2.	更改主配置文件，设置保留mac地址和保留的ip地址

    host boss {
    hardware ethernet 00:50:56:3F:EC:80;
    fixed-address 192.168.1.209;
    }	

3.	重启dhcpd的服务程序

    systemctl restart dhcpd.service 

4.	客户端重新获取ip地址







