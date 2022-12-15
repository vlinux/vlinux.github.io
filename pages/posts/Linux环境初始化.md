---
title: Linux环境初始化
categories: Linux技术
tags: [环境准备,Centos优化]
date: 2020-02-25 18:29:00
---
# 第0章 学习方法的变化

## 1.第一阶段学习方法



```bash
1.记命令 80-150
2.记参数 常用 3-5个
3.练习 考试题手写
4.回顾 总结
```

## 2.第二阶段学习方法



```bash
1.理解 思考 提问
2.应用场景 干嘛用的 怎么用
3.安装部署 配置文件 启动 测试 关闭 
4.各种报错 看日志 看日志 看日志 收集 整理
5.英文单词量积累 不然看不懂报错
```

# 第1章 综合架构开场介绍

## 01. 中小规模网站架构组成



```css
1) 顾客--用户
   访问网站的人员
2) 保安--防火墙 (firewalld)
   进行访问策略控制
3) 迎宾--负载均衡服务器  (nginx)
   对用户的访问请求进行调度处理
4) 服务员---web服务器    (nginx)
   处理用户的请求
5) 厨师---数据库服务器   (mysql)
   存储的字符数据  (耳机  500   索尼  黑色  北京地址  订单时间2019-05-05 13:00)
6) 厨师---存储服务器     (nfs)
   存储图片 音频 视频 附件等数据信息
7) 厨师---备份服务器     (rsync+crond-定时备份 rsync+sersync--实时备份)
   存储网站所有服务器的重要数据
8) 厨师---缓存服务器     (redis mongodb) 
   a 将数据信息存储到内存中 
   b 减缓服务器的压力      
9) 经理---批量管理服务器 (ansible)
   批量管理多台服务器主机
```

## 02 部署网站架构:



```ruby
1) 需要解决网站架构单点问题
   迎宾:   高可用服务---keepalived
   数据库:   高可用服务---mha
   存储服务: 高可用服务---keepalived实现
              高可用服务---分布式存储
   备份服务:  
   面试题: 公司的数据是如何备份
   1) 利用开源软件实现数据备份  rsync(免费)
   2) 利用企业网盘进行数据备份  七牛云存储
   3) 利用自建备份存储架构      两地三中心  
   缓存服务: 高可用服务--- 缓存服务集群/哨兵模式
2) 内部员工如何远程访问架构
   部署搭建VPN服务器 openvpn
   https://blog.oldboyedu.com/pptp-l2tp/
3) 内部员工操作管理架构服务器要进行审计
   跳板机服务器  jumpserver
   https://jumpserver.readthedocs.io/zh/docs/setup_by_centos.html
4) 架构中服务器出现问题需要进行提前报警告知
   部署监控服务器 zabbix
```

## 03. 综合架构规划

主机名称和IP地址规划



```css
    01. 防火墙服务器      firewalld    10.0.0.81(外网地址)    172.16.1.81(内外地址)   软件: firewalld
    02. 负载均衡服务器 lb01           10.0.0.5                     172.16.1.5                  软件: nginx keepalived
    03. 负载均衡服务器 lb02           10.0.0.6                     172.16.1.6                  软件: nginx keepalived
    04. web服务器      web01        10.0.0.7               172.16.1.7                  软件: nginx
    05. web服务器      web02        10.0.0.8                       172.16.1.8                  软件: nginx
    06. web服务器      web03        10.0.0.9(存储)           172.16.1.9                  软件: nginx
    07. 数据库服务器      db01          10.0.0.51                 172.16.1.51                     软件: mysql(慢)  mariaDB
    08. 存储服务器       nfs01          10.0.0.31                    172.16.1.31                     软件: nfs 
    09. 备份服务器       backup       10.0.0.41                      172.16.1.41                     软件: rsync
    10. 批量管理服务器 m01           10.0.0.61                     172.16.1.61                     软件: ansible
    11. 跳板机服务器      jumpserver 10.0.0.71(61)            172.16.1.71                     软件: jumpserver
    12. 监控服务器       zabbix        10.0.0.72(61)             172.16.1.72                     软件: zabbix
    先把路走通,再进行变通
   *10. 缓存服务器     忽略
```

# 第2章 综合架构环境准备

## 2.1 创建一台全新虚拟机作为模版

系统 CentOS7
内存 建议2G
网卡 eth0: NAT模式 模拟外网 10.0.0.x
eth1: LAN区段 模拟内网 172.16.1.x
硬盘 不小于20G或40G

## 2.2 Centos7安装步骤

修改网卡名称：



```bash
net.ifnames=0 biosdevname=0
```

## 2.3 优化模版机内容

### 2.3.1 精简网卡信息



```csharp
[root@oldboyedu ~]# cat  /etc/sysconfig/network-scripts/ifcfg-eth0
TYPE=Ethernet
BOOTPROTO=none
NAME=eth0
DEVICE=eth0
ONBOOT=yes
IPADDR=10.0.0.201
PREFIX=24
GATEWAY=10.0.0.254
DNS1=10.0.0.254
[root@oldboyedu ~]# cat  /etc/sysconfig/network-scripts/ifcfg-eth1
TYPE=Ethernet
BOOTPROTO=static
IPADDR=172.16.1.201
PREFIX=24
NAME=eth1
DEVICE=eth1
ONBOOT=yes
[root@oldboyedu ~]# systemctl restart network
```

### 2.3.2 删除网络相关配置文件

如果不删除，重新克隆虚拟机会导致上不了网
删除网卡里面包含UUID 的行（centos7），删除UUID和HWADDR（CentOS5和6）
清空/etc/udev/rules.d/70-persistent-net.rules(centos 5 和6)

### 2.3.3 关闭防火墙和selinux

# 关闭firewalld 和NetworkManager



```csharp
[root@oldboyedu ~]# systemctl  stop  firewalld   NetworkManager  
[root@oldboyedu ~]# systemctl  disable  firewalld   NetworkManager 
#检查是否正在运行 
systemctl is-active  firewalld   NetworkManager  
#检查是否开机自启动
systemctl is-enabled  firewalld   NetworkManager  
[root@oldboyedu ~]# systemctl is-active  firewalld  NetworkManager  crond 
unknown
inactive
active
[root@oldboyedu ~]# systemctl is-enabled   firewalld  NetworkManager  crond 
disabled
disabled
enabled
关闭selinux   
[root@oldboyedu ~]# grep =disable /etc/selinux/config 
SELINUX=disabled
[root@oldboyedu ~]# setenforce 0
[root@oldboyedu ~]# getenforce 
Permissive
```

### 2.3.4 优化SSH连接速度慢



```ruby
[root@oldboyedu ~]# egrep -n '^(GSSAPIA|UseDNS)' /etc/ssh/sshd_config 
79:GSSAPIAuthentication no
115:UseDNS no
[root@oldboyedu ~]# systemctl restart sshd.service
```

### 2.3.5 优化命令行显示



```bash
export PS1="[\[\e[34;1m\]\u@\[\e[0m\]\[\e[32;1m\]\H\[\e[0m\] \[\e[31;1m\]\w\[\e[0m\]]\\$ "
```

### 2.3.6 配置yum源

查看yum源



```bash
yum repolist
```

CentOS 7系统默认的源更新



```cpp
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

增加epel源



```cpp
curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
```

### 2.3.7 安装常用软件



```bash
yum install -y tree vim wget bash-completion   bash-completion-extras  lrzsz net-tools sysstat iotop iftop htop unzip  telnet  ntpdate
```

### 2.3.8 配置普通用户sudo权限



```csharp
[root@oldboyedu ~]# grep oldboy  /etc/sudoers
oldboy  ALL=(ALL)     NOPASSWD: ALL
```

### 2.3.9 配置hosts解析



```css
10.0.1.5 172.16.1.5 lb01
10.0.1.6 172.16.1.6 lb02
10.0.1.7 172.16.1.7 web01
10.0.1.8 172.16.1.8 web02
10.0.1.9 172.16.1.9 web03
10.0.1.31 172.16.1.31 nfs
10.0.1.41 172.16.1.41 backup
10.0.1.51 172.16.1.51 db01
10.0.1.61 172.16.1.61 m01
10.0.1.71 172.16.1.71 zabbix
```

### 2.4.0 时间同步



```css
ntpdate time1.aliyun.com
```

网卡图解



![img](http://upload-images.jianshu.io/upload_images/14248468-d45985ae69efd118.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

Linux命令补全包
----------

    yum -y install bash-completion