---
title: Docker+K8s实践指南
categories: DevOps
tags: [Prometheus,Kubernetes]
date: 2020-02-27 18:26:00
---
## 写在前面的话

不得不承认中国的IT行业已经进入了云计算时代，越来越多的企业开始使用弹性的云服务来支撑自己的业务。云计算是机遇也是挑战，作为运维人员需要面临云计算时代企业对运维需求的萎缩，以及对运维技术能力要求的大幅度提高的困境。

如果说云计算对运维行业的影响是第一波浪潮，那我认为容器技术的发展对本行业的影响算是第二波浪潮，目前几乎所有的企业招聘运维工程师都要求熟悉KVM、OpenStack、Docker和Kubernetes技术，各大公有云平台也都上线了容器服务Kubernetes版（AWS、Azure（全球版）阿里云、腾讯云、华为云、Ucloud、京东云、天翼云（公测阶段）等），掌握这些技术已经是大势所需。

## 参考文献

- Docker官方文档：https://docs.docker.com/
- Kubernetes官方文档：https://kubernetes.io/docs/home/
- OpenStack官方文档：https://docs.openstack.org/
- Prometheus官方文档：https://prometheus.io/docs/introduction/overview/

# 实验环境

**硬件设备准备**

- 电脑一台，CPU支持VT，内存>4G，可用磁盘空间大于80G。
- 安装VMware Workstation Pro虚拟机软件，用于创建虚拟机。
- 创建三台虚拟机，安装CentOS-7.7-x86_64系统。

**实验环境详情**

| 主机名                   | IP地址（NAT）                                                | 描述                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------- |
| linux-node1.linuxhot.com | eth0:192.168.56.11                                           | 1VCPU、2G内存、一块硬盘sda50G（动态） |
| linux-node2.linuxhot.com | eth0:192.168.56.12                                           | 1VCPU、2G内存、一块硬盘sda50G（动态） |
| linux-node3.linuxhot.com | eth0:192.168.56.13                                           | 1VCPU、2G内存、一块硬盘sda50G（动态） |
| 备注                     | 1.如何在安装的时候将网卡命名为eth0、eth1，请参考《附录一》。 2.其中linux-node3在学习Kubernetes中使用。 |                                       |

**环境准备**

- 安装操作系统CentOS-7.7-x86_64。
- 基本系统：1VCPU+2048M内存+50G（动态）硬盘。
- 网络选择：使用网络地址转换（NAT）。
- 软件包选择：Minimal Install。
- 关闭iptables和SELinux。
- 设置所有节点的主机名和IP地址，同时使用内部DNS或者/etc/hosts做好主机名解析。

**实验小技巧**

[hide]
- 建议初学者保持实验环境和本书一致，包括但不局限于IP地址，主机名，网卡名称等，可以帮你节约很多因为环境问题的排错时间。
- 做好虚拟机的快照，比如可以根据本书的不同章节，创建不同的快照，便于保留实验环境和在实验过程中进行环境的回滚。
- 请不要把关注点仅仅放在实验环节，一定要在理解的基础上完成实验，对于不明白的地方需要反复阅读，或者根据本书前言提到的途径获取技术支持。
[/hide]

# 附录一 实验环境准备

**环境准备案例：**

**界面位置：**文件新建虚拟机，打开新建虚拟机选项，

**创建虚拟机**：请参考目录前实验环境章节，按要求创建虚拟机（创建步骤略）。

**操作系统安装：**

为了统一环境，保证实验的通用性，将网卡名称设置为eth*，不使用CentOS 7默认的网卡命名规则。所以需要在安装的时候，增加内核参数。

1)光标选择“Install CentOS 7”

![img](http://k8s.unixhot.com/media/c4bb194b0f60ef7a32a7a4a269b31094.png)

2)点击Tab，打开kernel启动选项后，增加net.ifnames=0 biosdevname=0，如下图所示。

![img](http://k8s.unixhot.com/media/40432332febddc210781b55066a87252.png)

**安装完毕后设置：**

1.设置网络。

如果你的默认NAT地址段不是192.168.56.0/24可以修改VMware Workstation的配置，点击编辑虚拟网络配置，然后进行配置。

![img](http://k8s.unixhot.com/media/b4ac2c94cc558e1150c8cc77ecd6ad13.png)

2.设置IP地址，请配置静态IP地址。注意将UUID和MAC地址删除掉，便于进行虚拟机克隆。

```
[root@localhost ~]# vim /etc/sysconfig/network-scripts/ifcfg-eth0
TYPE=Ethernet
BOOTPROTO=static
DEFROUTE=yes
PEERDNS=no
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
NAME=eth0
DEVICE=eth0
ONBOOT=yes
IPADDR=192.168.56.11
NETMASK=255.255.255.0
GATEWAY=192.168.56.2
```

重启网络服务

```
[root@localhost ~]# systemctl restart network
```

3.关闭NetworkManager和防火墙开启自启动

```
[root@linux-node1 ~]# systemctl disable firewalld
[root@linux-node1 ~]# systemctl disable NetworkManager
```

4.设置主机名

```
[root@localhost ~]# vi /etc/hostname
linux-node1.unixhot.com
```

5.设置主机名解析

```
[root@linux-node1 ~]# cat /etc/hosts

127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
::1 localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.56.11 linux-node1 linux-node1.unixhot.com
192.168.56.12 linux-node2 linux-node2.unixhot.com
192.168.56.13 linux-node3 linux-node3.unixhot.com
```

6.设置DNS解析

```
[root@localhost ~]# vi /etc/resolv.conf
nameserver 192.168.56.2
```

7.安装EPEL仓库和常用命令

```
[root@linux-node1 ~]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
[root@linux-node1 ~]# yum install -y net-tools vim lrzsz tree screen lsof tcpdump nc mtr nmap
```

8.关闭并确认SELinux处于关闭状态

```
[root@linux-node1 ~]# vim /etc/sysconfig/selinux
SELINUX=disabled #修改为disabled
```

9.更新系统并重启

```
[root@linux-node1 ~]# yum update -y && reboot
```

10.克隆虚拟机

请关闭虚拟机，并克隆当前虚拟机linux-node1到linux-node2，建议选择“创建完整克隆”，而不是“创建链接克隆”。克隆完毕后请给linux-node2设置正确的IP地址和主机名。

11.给虚拟机做快照

分别给两台虚拟机做快照。以便于随时回到一个刚初始化完毕的系统中。可以有效的减少学习过程中的环境准备时间。




# 第一部分 Cobbler自动化安装实践

# 1 自动化安装概述

对于运维工程师来说，服务器上架和操作系统的安装，是实施运维工作的开始。对于自动化运维来说，自动化安装是实施自动化运维的第一步。面对大量的服务器设备，我们需要掌握如何快速，并且自动的将新上架的服务器安装上对应的操作系统、或者给已经在运行的服务器重新安装系统。而且很重要的是，从第一步开始，我们就要创建自己内部的软件仓库，而这一切的工作，Cobbler都可以完成。 对于Linux来说，我们通常使用PXE+KickStart的方式进行操作系统的自动化安装。那么首先需要先了解一下KickStart。

## 1.1 PXE+Kickstart介绍

### 1.1.1 KickStart工作原理

KickStart是Linux的一种无人职守的安装方式。KickStart的工作原理是通过记录典型的安装过程中所需人工干预填写的各种参数，并生成一个名为 ks.cfg的文件；这样在后面安装过程中当出现要求填写参数的情况时，安装程序会首先去查找 KickStart生成的文件，当找到合适的参数时，就采用找到的参数，当没有找到合适的参数时，才需要安装者手工干预。 如果KickStart文件涵盖了安装过程中出现的所有需要填写的参数时，那么就完全不需要人工干预，安装程序会根据ks.cfg中设置的选项自动进行安装，并通过设置重启选项来重启系统，并结束安装。那么如何让服务器开机就开始自动安装操作系统呢，我们要借助开机启动选项，比如从PXE启动。

### 1.1.2 PXE工作原理

不管是服务器还是普通的PC机都支持多种启动方式，例如从硬盘、从U盘、从网络启动。而PXE是服务器开机启动的一种方式，也可以称之为网卡启动，因为进行PXE安装的必要条件是计算机上的网卡要支持PXE，即网卡中必须要有 PXE Client，不过不用担心基本上我们常见的服务器都支持这种方式。 首先我们需要了解下PXE的工作方式：PXE （Pre-boot Execution Environment）协议使计算机可以通过网络启动。PXE协议分为 Client 和 Server 端，PXE client 在网卡的 ROM 中，当计算机引导时，BIOS 把 PXE client 调入内存执行，由 PXE client 将放置在远端的文件通过网络下载到本地运行。 运行 PXE 协议需要设置 DHCP 服务器和 TFTP 服务器。DHCP 服务器用来给 PXE Client（将要安装系统的主机）分配一个 IP 地址，由于是给 PXE Client 分配 IP 地址，所以在配置 DHCP 服务器时需要增加相应的 PXE 设置。此外，在 PXE Client 的 ROM 中，已经存在了 TFTP Client。PXE Client 通过 TFTP 协议到 TFTP Server 上下载所需的文件。

### 1.1.3 PXE+Kickstart工作流程

下图显示了PXE+Kickstart的工作流程

1.PXE Client发送DHCP请求到DHCP Server 2.DHCP Server提供相关信息包括IP地址和TFTP服务器的位置，以及要下载的文件。 3.PXE Client请求TFTP Server。 4.TFTP Server响应请求并将文件发送给PXE Client 5.PXE Client去下载对应的Kickstart文件，并根据Kickstart文件中的内容开始进行安装 6.安装操作系统。

## 1.2 制作本地Yum仓库

下面我们就要准备先手动来通过PXE+Kickstart来实现自动化的系统安装，那么首先需要有一个YUM仓库，而且是本地的。下面我就拿CentOS 7为例：

### 1.2.1 准备安装源

1. 安装需要软件包 我们使用HTTP的方式作为YUM仓库的安装源，需要首先安装Apache，其中createrepo 是一个对rpm 文件进行索引建立的工具。

   ```
   [root@linux-node1 ~]# yum install -y httpd createrepo
   [root@linux-node1 ~]# systemctl start httpd.service
   ```

2. 下载iso镜像

   ```
   [root@linux-node1 ~]# cd /usr/local/src
   # wget https://mirrors.aliyun.com/centos/7.4.1708/isos/x86_64/CentOS-7-x86_64-DVD-1708.iso
   ```

3. 创建yum仓库

```
[root@linux-node1 ~]# mount -o loop /usr/local/src/CentOS-7-x86_64-DVD-1511.iso /mnt/
```

> 如果你使用VMWare Workstation创建虚拟机的时候设置了ISO镜像，可以不用下载，直接挂载使用。

```
[root@linux-node1 ~]# mount /dev/cdrom /mnt/
mount: /dev/sr0 is write-protected, mounting read-only
```

在默认Apache的家目录下创建目录

```
[root@linux-node1 ~]# mkdir /var/www/html/CentOS-7.4-x86_64
[root@linux-node1 ~]# cp -a /mnt/* /var/www/html/CentOS-7.4-x86_64/
```

1. 准备Kickstart安装文件

   ```
   [root@linux-node1 ~]# cd /var/www/html/CentOS-7-x86_64/
   [root@linux-node1 CentOS-7-x86_64]# vim CentOS-7-x86_64.cfg
   #Kickstart Configurator by Jason Zhao
   #platform=x86, AMD64, or Intel EM64T
   #System  language
   lang en_US
   #System keyboard
   keyboard us
   #Sytem timezone
   timezone Asia/Shanghai
   #Root password
   rootpw --iscrypted $1$example$I.i3m26O7QYNja8p5Cj9.0
   #Use text mode install
   text
   #Install OS instead of upgrade
   install
   #Use NFS installation Media
   url --url=http://192.168.56.11/CentOS-7-x86_64
   #System bootloader configuration
   bootloader --location=mbr --driveorder=sda --append="net.ifnames=0 biosdevname=0"
   #Clear the Master Boot Record
   zerombr
   #Partition clearing information
   clearpart --all --initlabel 
   #Disk partitioning information
   part /boot --fstype=xfs --size=1024
   part swap --asprimary --fstype="swap" --size=1024
   part / --fstype=xfs --size=1 --grow
   #System authorization infomation
   auth  --useshadow  --enablemd5 
   #Network information
   network --bootproto=dhcp --device=eth0 --onboot=on --activate
   # Reboot after installation
   reboot
   #Firewall configuration
   firewall --disabled 
   #SELinux configuration
   selinux --disabled
   #Service configuration
   services --disabled=postfix
   #Do not configure XWindows
   skipx
   #Package install information
   %packages
   @ base
   @ core
   bash-completion
   sysstat
   ntp
   lrzsz
   openssl-devel
   zlib-devel
   OpenIPMI-tools
   screen
   %end
   ```

### 1.2.2 配置TFTP-Server

我们已经了解了PXE+Kickstart的原理，那么我们需要准备相关dhcp、tftp-server等。

1. 安装配置tftp-server

   ```
   [root@linux-node1 ~]# yum install -y tftp-server xinetd
   [root@linux-node1 ~]# vim /etc/xinetd.d/tftp
   disable                 = no（修改为no）
   ```

2. 准备安装需要的文件

   ```
   [root@linux-node1 ~]# yum install -y syslinux
   [root@linux-node1 ~]# mkdir /var/lib/tftpboot/pxelinux
   [root@linux-node1 ~]# cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/pxelinux
   [root@linux-node1 ~]# cp /mnt/isolinux/* /var/lib/tftpboot/pxelinux
   [root@linux-node1 ~]# cp /mnt/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/pxelinux/
   ```

在tftpboot下创建pxelinux.cfg目录

```
[root@linux-node1 ~]# mkdir /var/lib/tftpboot/pxelinux/pxelinux.cfg 
[root@linux-node1 ~]# cp /mnt/isolinux/isolinux.cfg /var/lib/tftpboot/pxelinux/pxelinux.cfg/default
```

1. 修改default配置，指定网站安装的kickstart文件

```
[root@linux-node1 ~]# vim /var/lib/tftpboot/pxelinux.cfg/default
…省略…
#在label linux上面增加自动化安装的配置
label ks
  menu label ^Auto Install CentOS 7
  kernel vmlinuz
  append initrd=initrd.img ip=dhcp inst.repo=http://192.168.56.11/CentOS-7-x86_64/ inst.ks=http://192.168.56.11/CentOS-7-x86_64/CentOS-7-x86_64.cfg net.ifnames=0 biosdevname=0
```

1. 配置DHCP Server

   ```
   [root@linux-node1 ~]# yum install -y dhcp
   [root@linux-node1 ~]# /bin/cp /usr/share/doc/dhcp-4.2.5/dhcpd.conf.example /etc/dhcp/dhcpd.conf
   [root@linux-node1 ~]# vim /etc/dhcp/dhcpd.conf
   option domain-name "devopsedu.com";
   option domain-name-servers 192.168.56.2;
   #请删除其他的subnet配置
   subnet 192.168.56.0 netmask 255.255.255.0 {
        range dynamic-bootp 192.168.56.100 192.168.56.200;
        option subnet-mask              255.255.255.0;  #设置子网掩码
   option routers                  192.168.56.2;    #设置网关
        next-server                     192.168.56.11;   #设置TFTP-Server地址
        filename                        "pxelinux/pxelinux.0";   #设置TFTP需要下载的文件
   }
   ```

2. 启动httpd、tftp和dhcpd服务

   ```
   [root@linux-node1 ~]# systemctl start xinetd.service dhcpd.service httpd.service
   ```

3. 检查服务是否启动

   ```
   [root@linux-node1 ~]# netstat -ntlp
   Active Internet connections (only servers)
   Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
   tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      871/sshd            
   tcp6       0      0 :::80                   :::*                    LISTEN      1321/httpd          
   tcp6       0      0 :::22                   :::*                    LISTEN      871/sshd
   ```

查看dhcpd和tftpd是否启动

```
[root@linux-node1 ~]# netstat -nulp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
udp        0      0 0.0.0.0:67              0.0.0.0:*                           1487/dhcpd          
udp        0      0 0.0.0.0:69              0.0.0.0:*                           1486/xinetd
```

### 1.2.4 自动化安装和流程总结

现在就可以新创建一台虚拟机来进行测试了，记着选择网卡启动。DHCP后，就可以看到安装页面。我们刚才添加的Auto Install CentOS 也可以看到了。

下面我们可以来总结下PXE+KickStart的安装流程了： 需要经历以下的过程： 1.网卡上的PXE芯片有512字节，存放了DHCP和TFTP的客户端。 2.启动计算机选择网卡启动。 3.PXE上的DHCP客户端会向DHCP服务器，申请IP地址 4.DHCP服务器分配给它IP地址的同时通过以下字段，告诉pxe，TFTP的地址和它要下载的文件 next-server 192.168.56.11； filename "pxelinux.0"； 5.pxelinux.0告诉PXE要下载的配置文件是pxelinux.cfg目录下面的default 6.pxe下载并依据配置文件的内容下载启动必须的文件，并通过ks.cfg配置内容开始系统安装。

**我们都干了什么** 所以我们看到设置一个网络环境可能涉及到许多步骤，才能为开始安装做好准备。您必须：

- 配置服务，比如 DHCP、TFTP、DNS、HTTP、FTP 和 NFS

- 在 DHCP 和 TFTP 配置文件中填入各个客户端机器的信息

- 创建自动部署文件（比如 kickstart 和 autoinst）

- 将安装媒介解压缩到 HTTP/FTP/NFS 存储库中。 这个过程并不简单，甚至可以说复杂，我们要自己管理和创建不同的操作系统版本、手动管理DHCP等，那么如何能让我们有一个功能强大，更实用的自动化装机平台，开源社区给了我们答案就是Cobbler。 官方网站：http://cobbler.github.io/

  

# 2 Cobbler快速入门

使用 Cobbler，您无需进行人工干预即可安装机器。Cobbler设置一个PXE引导环境，并控制与安装相关的所有软件和环境准备，比如网络引导服务（DHCP 和 TFTP）与存储库镜像。当希望安装一台新机器时，Cobbler 可以：

- 使用一个以前定义的模板来配置 DHCP 服务（如果启用了管理 DHCP）
- 将一个存储库（yum 或 rsync）建立镜像或解压缩一个媒介，以注册一个新操作系统
- 在 DHCP 配置文件中为需要安装的机器创建一个条目，并使用您指定的参数（IP 和 MAC 地址）
- 在 TFTFP 服务目录下创建适当的 PXE 文件
- 重新启动 DHCP 服务以反映更改
- 重新启动机器以开始安装（如果电源管理已启用）

## 2.1 Cobbler部署

### 2.1.1 Cobbler功能

Cobbler 支持众多的发行版：Red Hat、Fedora、CentOS、Debian、Ubuntu 和 SuSE。当添加一个操作系统（通常通过使用 ISO 文件）时，Cobbler 知道如何解压缩合适的文件并调整网络服务，以正确引导机器。

Cobbler 可使用 kickstart 模板。基于 Red Hat 或 Fedora 的系统使用 kickstart 文件来自动化安装流程。通过使用模板，您就会拥有基本的 kickstart 模板，然后定义如何针对一种配置文件或机器配置而替换其中的变量。例如，一个模板可能包含两个变量 $domain 和 $machine_name。在 Cobbler 配置中，一个配置文件指定 domain=mydomain.com，并且每台使用该配置文件的机器在 machine_name 变量中指定其名称。该配置文件中的所有机器都使用相同的 kickstart 安装且针对 domain=mydomain.com 进行配置，但每台机器拥有其自己的机器名称。您仍然可以使用 kickstart 模板在不同的域中安装其他机器并使用不同的机器名称。

使用 koan 客户端，Cobbler 可从客户端配置虚拟机并重新安装系统。我不会讨论配置管理和 koan 特性，因为它们不属于本文的介绍范畴。但是，它们是值得研究的有用特性。

### 2.1.2 Cobbler安装

1. 安装EPEL源

```
[root@linux-node1 ~]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
```

- yum安装cobbler

```
[root@linux-node1 ~]# yum install -y httpd dhcp tftp python-ctypes cobbler cobbler-web pykickstart fence-agents xinetd debmirror
```

1. 启动并配置cobbler

```
[root@linux-node1 ~]# systemctl enable httpd cobblerd
[root@linux-node1 ~]# systemctl start httpd cobblerd
```

- 下载Cobbler需要的启动文件

```
[root@linux-node1 ~]# cobbler get-loaders
```

- 检查Cobbler状态

```
[root@linux-node1 ~]# cobbler check
The following are potential configuration items that you may want to fix:

1 : The 'server' field in /etc/cobbler/settings must be set to something other than localhost, or kickstarting features will not work.  This should be a resolvable hostname or IP for the boot server as reachable by all machines that will use it.
2 : For PXE to be functional, the 'next_server' field in /etc/cobbler/settings must be set to something other than 127.0.0.1, and should match the IP of the boot server on the PXE network.
3 : change 'disable' to 'no' in /etc/xinetd.d/tftp
4 : enable and start rsyncd.service with systemctl
5 : comment out 'dists' on /etc/debmirror.conf for proper debian support
6 : comment out 'arches' on /etc/debmirror.conf for proper debian support
7 : The default password used by the sample templates for newly installed machines (default_password_crypted in /etc/cobbler/settings) is still set to 'cobbler' and should be changed, try: "openssl passwd -1 -salt 'random-phrase-here' 'your-password-here'" to generate new one

Restart cobblerd and then run 'cobbler sync' to apply changes.
```

这段话的意思就是需要处理上面的所有问题，然后重启cobblerd服务，然后执行cobbler sync同步修改操作。

**将上面提到的7个问题进行修复**

- 问题1和2解决

均是需要修改cobbler的配置文件。

```
[root@linux-node1 ~]# vim /etc/cobbler/settings
#修改以下两行即可，可以直接搜索127.0.0.1来定位
server: 192.168.56.11   #设置cobbler server的IP地址
next_server: 192.168.56.11  #设置PXE server的IP地址
```

- 问题3解决

```
[root@linux-node1 ~]# vim /etc/xinetd.d/tftp
service tftp
{
        socket_type             = dgram
        protocol                = udp
        wait                    = yes
        user                    = root
        server                  = /usr/sbin/in.tftpd
        server_args             = -s /var/lib/tftpboot
        disable                 = no
        per_source              = 11
        cps                     = 100 2
        flags                   = IPv4
}
```

- 问题4解决

启动rsyncd服务，并设置开机自动启动

```
[root@linux-node1 ~]# systemctl enable rsyncd
[root@linux-node1 ~]# systemctl start rsyncd
```

- 问题5、6解决

安装debmirror是debian系列系统使用的

```
[root@linux-node1 ~]# yum install -y debmirror
[root@linux-node1 ~]# vim /etc/debmirror.conf
#请注释掉下面两行配置
#@dists="sid";
#@arches="i386"
```

- 问题7解决

```
[root@linux-node1 ~]# openssl passwd -1 -salt 'example' 'devopsedu.com'
$1$example$I.i3m26O7QYNja8p5Cj9.0 
[root@ops-node1 ~]# vim /etc/cobbler/settings
将下面字段替换为上面生成的字段：
default_password_crypted: "$1$example$I.i3m26O7QYNja8p5Cj9.0"
[root@linux-node1 ~]# systemctl restart cobblerd
```

- 再次检查Cobbler

```
 [root@ops-node1 ~]# cobbler check
No configuration problems found.  All systems go.
```

### 2.1.3 Cobbler管理DHCP

1. 开启管理DHCP服务，这样Cobbler就可以接管DHCP的管理工作

```
[root@ops-node1 ~]# vim /etc/cobbler/settings
manage_dhcp: 1
```

1. 首先修改dhcp的配置文件

修改dhcp的模板配置文件，设置相对应的DHCP的IP地址和分配的网段。

```
[root@ops-node1 ~]# vim /etc/cobbler/dhcp.template 
subnet 192.168.56.0 netmask 255.255.255.0 {
     option routers             192.168.56.2;
     option domain-name-servers 192.168.56.2;
     option subnet-mask         255.255.255.0;
     range dynamic-bootp        192.168.56.100 192.168.56.254;
     default-lease-time         21600;
     max-lease-time             43200;
     next-server                $next_server;
  …
```

重启Cobbler并进行同步操作

```
[root@linux-node1 ~]# systemctl restart cobblerd 
[root@linux-node1 ~]# cobbler sync
```

> 执行完毕cobbler sync后，会自动生成/etc/dhcpd.conf。并重启dhcp服务。所以说使用Cobbler管理DHCP后，请勿修改/etc/dhcpd.conf。以后所有dhcp相关的配置都是修改Cobbler的DHCP模板文件/etc/cobbler/dhcp.template。

### 2.1.4 Cobbler导入镜像

1. 下载并导入镜像

```
[root@ops-node1 ~]# cd /usr/local/src
[root@ops-node1 ~]# wget https://mirror.tuna.tsinghua.edu.cn/centos/7.7.1908/isos/x86_64/CentOS-7-x86_64-Minimal-1908.iso
[root@ops-node1 ~]# mmount -o loop /usr/local/src/CentOS-7-x86_64-Minimal-1908.iso /mnt/
[root@ops-node1 ~]# cobbler import --path=/mnt/ --name=CentOS-7.7-x86_64 --arch=x86_64
```

**参数说明:**

- --name 为安装源定义一个名字
- --arch 指定安装源是32位还是64位、ia64, 目前支持的选项有: x86│x86_64│ia64

> 小提示：Cobbler 会把安装的镜像ISO拷贝到源安装镜像目录下: /var/www/cobbler/ks_mirror/

1. 查看导入后结果

```
[root@linux-node1 ~]# cobbler list
distros:
   CentOS-7-x86_64

profiles:
   CentOS-7-x86_64
```

### 2.1.5 自定义kickstart文件

Cobbler的Kickstart文件和默认的不同，我们需要修改，主要是增加上Cobbler的变量。导入镜像后，我们一般会自定义kickstart文件给这个镜像。首先可以将自定义后的Cobbler的kickstart文件放置在/var/lib/cobbler/kickstarts目录下，这也是Cobbler的默认存放kickstart文件的地方。

1. 自定义Kickstart文件

```
[root@linux-node1 ~]# vim /var/lib/cobbler/kickstarts/CentOS-7.7-x86_64-Cobbler.cfg
#Kickstart Configurator by Jason Zhao
#platform=x86, AMD64, or Intel EM64T
#System  language
lang en_US
#System keyboard
keyboard us
#Sytem timezone
timezone Asia/Shanghai
#Root password
rootpw --iscrypted $default_password_crypted
#Use text mode install
text
#Install OS instead of upgrade
install
#Use NFS installation Media
url --url=$tree
#System bootloader configuration
bootloader --location=mbr --driveorder=sda --append="net.ifnames=0 biosdevname=0"
#Clear the Master Boot Record
zerombr
#Partition clearing information
clearpart --all --initlabel 
#Disk partitioning information
part /boot --fstype=xfs --size=1024
part swap --asprimary --fstype="swap" --size=1024
part / --fstype=xfs --size=1 --grow
#System authorization infomation
auth  --useshadow  --enablemd5 
#Network information
$SNIPPET('network_config')
# Reboot after installation
reboot
#Firewall configuration
firewall --disabled 
#SELinux configuration
selinux --disabled
#Service configuration
services --disabled=postfix
#Do not configure XWindows
skipx
#Package install information

%pre
$SNIPPET('log_ks_pre')
$SNIPPET('kickstart_start')
$SNIPPET('pre_install_network_config')
# Enable installation monitoring
$SNIPPET('pre_anamon')
%end

%packages
@ base
@ core
bash-completion
sysstat
ntp
lrzsz
openssl-devel
zlib-devel
OpenIPMI-tools
screen
%end
```

1. 然后编辑profile来制定kickstart文件。

```
[root@ops-node1 ~]# cobbler profile edit --name=CentOS-7.7-x86_64 --kickstart=/var/lib/cobbler/kickstarts/CentOS-7.7-x86_64-Cobbler.cfg
```

1. 增加安装时的内核参数

```
[root@ops-node1 ~]# cobbler profile edit --name=CentOS-7.7-x86_64 --kopts='net.ifnames=0 biosdevname=0'
```

1. 最后，一定要执行同步，才能将Cobbler设置完成

```
[root@linux-node1 ~]# cobbler sync
```

## 2.2 使用Cobbler自动化安装CentOS

现在我们就可以使用Cobbler进行安装了。实验环境下，你可以新创建一个虚拟机（注意网卡的选择）来进行测试了。Cobbler非常人性化的创建了一个Local，即使从硬盘启动，这样也避免了有服务器从网卡启动开始自动安装的问题。

### 2.2.1 使用Cobbler安装CentOS

1. 启动物理服务器
2. 选择CentOS-7.7-x86_64之后即可重新开始安装。

> 在生产环境如果想要自动开始安装，我们的通常做法是有一个专门进行服务器安装的VLAN，安装完毕后，进入待调配状态，然后根据流程进入到生产环境。但是提醒大家，自动化开始进行操作系统安装风险依然很大。

### 2.2.2 Koan重新安装系统

在实践的运维工作中，你肯定需要重新安装操作系统，有了Cobbler你就不用去机房了，直接使用Koan就可以进行自动化重新安装操作系统。需要再待重装的服务器上安装koan。

安装Koan软件包

```
[root@localhost ~]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
[root@localhost ~]# yum install -y koan
```

列出可以安装的系统

```
[root@localhost ~]# koan --server=192.168.56.11 --list=profiles
- looking for Cobbler at http://192.168.56.11:80/cobbler_api
CentOS-7.7-x86_64
```

指定需要重新安装的操作系统

```
[root@localhost ~]# koan --replace-self --server=192.168.56.11 --profile=CentOS-7.7-x86_64
- looking for Cobbler at http://192.168.56.11:80/cobbler_api
- reading URL: http://192.168.56.11/cblr/svc/op/ks/profile/CentOS-7.7-x86_64
install_tree: http://192.168.56.11/cblr/links/CentOS-7.7-x86_64
downloading initrd initrd.img to /boot/initrd.img_koan
url=http://192.168.56.11/cobbler/images/CentOS-7.7-x86_64/initrd.img
- reading URL: http://192.168.56.11/cobbler/images/CentOS-7.7-x86_64/initrd.img
downloading kernel vmlinuz to /boot/vmlinuz_koan
url=http://192.168.56.11/cobbler/images/CentOS-7.7-x86_64/vmlinuz
- reading URL: http://192.168.56.11/cobbler/images/CentOS-7.4-x86_64/vmlinuz
- ['/sbin/grubby', '--add-kernel', '/boot/vmlinuz_koan', '--initrd', '/boot/initrd.img_koan', '--args', '"ksdevice=link lang= text net.ifnames=0 ks=http://192.168.56.11/cblr/svc/op/ks/profile/CentOS-7.4-x86_64 biosdevname=0 kssendmac "', '--copy-default', '--make-default', '--title=kick1526449287']
- ['/sbin/grubby', '--update-kernel', '/boot/vmlinuz_koan', '--remove-args=root']
- reboot to apply changes
```

如下图所示，Koan会创建一个新的启动选项，重启后，直接开始自动安装。

我们先不要执行reboot先研究下是如何实现的。你打开Grub的配置文件

```
[root@localhost ~]# vim /boot/grub2/grub.cfg
你会发现这样的配置
menuentry 'kick1526449287' --class centos --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.10.0-693.el7.x86_64-advanced-49e658db-2c61-475a-9325-903fdbeb7cd4' {
        load_video
        set gfxpayload=keep
        insmod gzio
        insmod part_msdos
        insmod xfs
        set root='hd0,msdos1'
        if [ x$feature_platform_search_hint = xy ]; then
          search --no-floppy --fs-uuid --set=root --hint-bios=hd0,msdos1 --hint-efi=hd0,msdos1 --hint-baremetal=ahci0,msdos1 --hint='hd0,msdos1'  0a801c26-5320-448d-b261-883499529bc6
        else
          search --no-floppy --fs-uuid --set=root 0a801c26-5320-448d-b261-883499529bc6
        fi
        linux16 /vmlinuz_koan ro crashkernel=auto biosdevname=0 net.ifnames=0 rhgb quiet LANG=en_US.UTF-8 ksdevice=link lang= text net.ifnames=0 ks=http://192.168.56.11/cblr/svc/op/ks/profile/CentOS-7.4-x86_64 biosdevname=0 kssendmac
        initrd16 /initrd.img_koan
也就是说，koan帮我们下载了安装需要的文件，并且修改了Grub的开机启动选项，增加了安装的配置，并且设置为默认启动选项，这样我们执行重启默认就开始安装了。现在执行重启来验证一下。
[root@hadoop-node1 ~]# reboot
```

你可以看到如下图所示的界面，然后开始进行自动化重新安装。

## 2.3 Cobbler Web介绍

Cobbler还提供了可视化的Web节界面叫做Cobbler Web。我们使用yum安装完毕后，会再/etc/http/conf.d/目录下生成cobbler_web.conf配置文件，可以通过[https://IP/cobbler_web来进行访问。](https://ip/cobbler_web来进行访问。)

1. 安装Cobbler Web

   ```
   [root@linux-node1 ~]# yum install -y cobbler-web
   ```

2. 配置Cobbler Web

Cobbler web的权限管理有两个配置文件 /etc/cobbler/users.conf和/etc/cobbler/users.digest 后者为Cobbler权限配置文件，我们需要使用htdigest来为用户设置密码

```
[root@linux-node1 ~]# htdigest  /etc/cobbler/users.digest "Cobbler" cobbler
Changing password for user cobbler in realm Cobbler
New password: 
Re-type new password:
```

然后就可以使用cobbler用户和你设置的密码登陆了。 https://192.168.56.11/cobbler_web

## 2.4 深入理解Cobbler

经过前面的内容，我们已经可以顺利的使用Cobbler进行操作系统的安装，使用Koan进行操作系统自动重新安装的操作了，那么我们还需要更多的掌握一些Cobbler的知识，才能在生产的应用中，更如鱼得水。

### 2.4.1 Cobbler 配置文件

1. Cobbler的目录 Cobbler安装完毕后会在系统生成如下目录：

```
[root@linux-node1 ~]# find / -name cobbler
/etc/selinux/targeted/active/modules/100/cobbler
/etc/cobbler
/var/lib/cobbler
/var/log/cobbler
/var/www/cobbler
/usr/bin/cobbler
/usr/lib/python2.7/site-packages/cobbler
/usr/share/cobbler
```

1. Cobbler配置文件目录

Cobbler的配置文件存放在/etc/cobbler下。

- /etc/cobbler/settings为主配置文件；
- 在/etc/cobbler下你还能看到dhcp、dns、pxe、dnsmasq的模板配置文件；
- /etc/cobbler/users.digest为用于web访问的用户名密码配置文件；
- /etc/cobbler/modules.conf 为模块配置文件；
- /etc/cobbler/users.conf为Cobbler WebUI/Web service授权配置文件。
- 修改Cobbler提示

如果你想修改Cobbler的提示，可以直接编辑下面文件。

```
[root@test-node1 ~]# vim /etc/cobbler/pxe/pxedefault.template
DEFAULT menu
PROMPT 0
MENU TITLE DevOpsEDU | http://www.devopsedu.com
TIMEOUT 200
TOTALTIMEOUT 6000
ONTIMEOUT $pxe_timeout_profile

LABEL local
        MENU LABEL (local)
        MENU DEFAULT
        LOCALBOOT -1

$pxe_menu_items

MENU end
```

1. Cobbler数据目录/var/lib/cobbler，

此目录存储和Cobbler profiles、systems、distros相关的配置。

- configs/ - 此目录用于存储distros、repos、systems和profiles相关信息。
- backup/ - 备份目录
- snippets/ - 用于放置一些可以在kickstarts导入的脚本小片段
- triggers/ - 此目录用来放置一些可执行脚本
- kickstarts/ - 此目录用来放置kickstart模板文件
- Repo数据目录/var/www/cobbler

导入的发行版，repos镜像和kickstart文件都放置在/var/www/cobbler目录下。确保/var目录有足够的空间来存储这些文件。

- images/ - 存储所有导入发行版的Kernel和initrd镜像用于远程网络启动
- ks_mirror/ - 存储导入的发行版
- repo_mirror/ - yum repos存储目录
- Cobbler日志目录

/var/log/cobbler用于存放日志文件/var/log/cobbler/cobbler.log

### 2.4.2 Cobbler设计方式 {$cs}

Cobbler 有多个对象组成的，对象和对象之间可以相互引用：

- Repo（存储库）：保存一个 yum 或 rsync 存储库的镜像信息。例如我们可以将Zabbix的软件仓库同步到我们本地，就是一个Repo。
- Distro（发行版）：表示一个操作系统。它承载了内核和 initrd 的信息，以及内核参数等其他数据。
- profile（配置文件）：包含一个distro（发行版）、一个 kickstart 文件以及可能的Repo（存储库），还包含更多特定的内核参数等其他数据。
- system（系统）：表示要安装的机器。它包含一个配置文件或一个镜像，还包含 IP 和 MAC 地址、电源管理（地址、凭据、类型）以及更为专业的数据等信息。
- Image（镜像）：可替换一个包含不属于此类别的文件的发行版对象（例如，无法分为内核和 initrd 的对象）。 基于注册的对象以及各个对象之间的关联，Cobbler 知道如何更改文件系统以反映具体配置。因为系统配置的内部是抽象的，所以您可以仅关注想要执行的操作。

### 2.4.3 Cobbler distro

使用Cobbler的第一步就是定义Distro，回想下我们最早执行的cobbler import，就会帮我们创建一个distro，我们可以使用下面的命令进行查看：

```
[root@linux-node1 ~]# cobbler distro list
   CentOS-7-x86_64
```

Cobbler所有的命令都可以使用help这样的方式获取帮助。

```
[root@linux-node1 ~]# cobbler distro help
usage
=====
cobbler distro add
cobbler distro copy
cobbler distro edit
cobbler distro find
cobbler distro list
cobbler distro remove
cobbler distro rename
cobbler distro report
```

我们可以使用report命令来看distro都包含哪些内容。

```
[root@linux-node1 ~]# cobbler distro report
Name                           : CentOS-7.7-x86_64
Architecture                   : x86_64
TFTP Boot Files                : {}
Breed                          : redhat
Comment                        : 
Fetchable Files                : {}
Initrd                         : /var/www/cobbler/ks_mirror/CentOS-7.7-x86_64/images/pxeboot/initrd.img
Kernel                         : /var/www/cobbler/ks_mirror/CentOS-7.7-x86_64/images/pxeboot/vmlinuz
Kernel Options                 : {}
Kernel Options (Post Install)  : {}
Kickstart Metadata             : {'tree': 'http://@@http_server@@/cblr/links/CentOS-7.7-x86_64'}
Management Classes             : []
OS Version                     : rhel7
Owners                         : ['admin']
Red Hat Management Key         : <<inherit>>
Red Hat Management Server      : <<inherit>>
Template Files                 : {}
  可以看到distro定义的仅仅是我们要安装操作系统发行版的kernel和initrd。
```

### 2.1.4 Cobbler profile

那么在cobbler import的同时也默认创建了一个和distro同名的profile，那么cobbler profile里面包括了distribution、kickstart file和repo。我们也可以把profile理解为一个配置集合，比如在distro的基础上增加可一个kiskstart文件来生成一个特定的系统安装配置。 比如前面我们多次使用cobbler profile edit为指定的Profile设置kickstart文件和内核参数，profile的名称即使我们在使用cobbler进行自动化安装选择的菜单名称。

```
[root@linux-node1 ~]# cobbler profile report
```

### 2.1.5Cobbler repo

Cobbler repos可以帮我们管理yum仓库，把创建企业内部的yum源变成了一件极其简单的工作，比如通常生成环境我们想把EPEL仓库同步到本地，这样就避免每次安装软件包占用公网贷款。 添加EPEL源：

```
# cobbler repo add --name=CentOS-7-x86_64-epel \
--mirror=http://mirrors.aliyun.com/epel/7/x86_64/ --arch=x86_64 --breed=wget
```

参数说明: --name 为安装源定义一个名字 --arch 指定安装源是32位还是64位、ia64, 目前支持的选项有: x86│x86_64│ia64 reposync 操作很重要，因为它会从远程存储库中复制文件。如果创建了存储库对象但未运行 reposync，那么您的存储库将是空的，而且您的安装可能会失败。 根据需要同步的仓库大小，注意硬盘空间，第一次同步时间比较长，建议放到screen里面允许。

添加repo到profile 把我们自定义的repo添加到对应的profile后，那么使用对应profile安装的机器，默认就会添加该repo，前提是需要进行设置

```
# cobbler profile edit --name=CentOS-7-x86_64 --repos="openstack-liberty"
[root@linux-node1 ~]# vim /etc/cobbler/settings
yum_post_install_mirror: 1  #默认是开启的。
```

添加更新仓库源计划任务 如果使用的外包源链接，可以定期的进行同步，放在crontab里面每天执行。 echo "0 2 0 cobbler reposync --tries=3 --no-fail" >> /var/spool/cron/root

设置装机自动设置Yum 修改ks脚本，增加

```
%post
# Start yum configuration
$yum_config_stanza
# End yum configuration
%end
这样开机的时候就可以调用yum_config_stanza这个snippets进行设置了。等等，这个snippets是什么东东？
```

### 2.1.6 Cobbler snippets

snippets可以说是cobbler管理中的精华部分，很少有文档提及，因为大多数人使用简单的cobbler功能已经足够了，如果你想对安装过程和安装后进行定制，可以自己编写Snippet来实现。现在我们可以参考Cobbler自带的kickstart模板，给我们的模板增加上snippets的功能

```
[root@linux-node1 ~]# vim /var/lib/cobbler/kickstarts/sample_end.ks
%post
$SNIPPET('log_ks_post')
# Start yum configuration
$yum_config_stanza
# End yum configuration
$SNIPPET('post_install_kernel_options')
$SNIPPET('post_install_network_config')
$SNIPPET('func_register_if_enabled')
$SNIPPET('download_config_files')
$SNIPPET('koan_environment')
$SNIPPET('redhat_register')
$SNIPPET('cobbler_register')
# Enable post-install boot notification
$SNIPPET('post_anamon')
# Start final steps
$SNIPPET('kickstart_done')
# End final steps
%end
```

将%post开始到%end的内容复制下来，编辑到 /var/lib/cobbler/kickstarts/CentOS-7.4-x86_64-Cobbler.cfg文件中。在后面的自动化实践和高级话题中，我们将用到这个功能。

# 3 Cobbler自动化实践

在了解了Cobbler的基本使用和Cobbler的各种组件之后，在生产环境中，我们就可以灵活的运用Cobbler来完成很多自动化的工作。

## 3.1 Cobbler构建私有YUM仓库

Cobbler除了用来进行自动化安装之外，最方便的一个功能就是做YUM仓库了。从此再也不用担心，在服务器无法上外网的情况下，如何使用开源工具了。而且如果你需要，Cobbler可以帮你进行同步，及时的和官方的源保持一致。

### 3.1.1 构建OpenStack私有仓库

添加OpenStack源：

```
[root@linux-node1 ~]# cobbler repo add --name=openstack-queens-x86_64 \
 --mirror=http://mirrors.aliyun.com/centos/7.4.1708/cloud/x86_64/openstack-queens/ \
 --arch=x86_64 --breed=yum
```

对于 yum 存储库 URL，Cobbler 接受 [http://、ftp://、rsync://、文件系统路径和](http://xn--ftp-3y3b//、rsync://、文件系统路径和) ssh 位置（通过使用基于私钥的身份验证）。

- http协议 方式：只能拉取到某一软件的最新版本，无法拉取所有版本。
- rsync协议方式：镜像方式，可以拉取提供 rsync 服务目录下的所有目录和文件。

同步仓库

```
[root@linux-node1 ~]# cobbler reposync
```

> 提示：OpenStack Queens的源同步完成大约在900M左右。

### 3.1.2 构建Zabbix私有仓库

由于Zabbix官方不支持rsync的方式同步，所以只能使用http的方式同步最新版本的源。

```
[root@linux-node1 ~]# cobbler repo add --name=zabbix-3.4-rhel7-x86_64  \
--mirror=http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/
[root@linux-node1 ~]# cobbler repo list
   zabbix-3.4-rhel7-x86_64
```

同步仓库

```
[root@linux-node1 ~]# cobbler reposync
```

> 提示：Zabbix 3.4版本的源同步完成大约在20M左右。

### 3.1.3 构建SaltStack私有仓库

由于SaltStack的国外源相对比较慢，所以生产会使用Cobbler构建内部源。

```
[root@linux-node1 ~]# cobbler repo add --name=saltstack-2018.3-rhel7-x86_64 \
 --mirror=https://repo.saltstack.com/yum/redhat/7/x86_64/2018.3
```

同步仓库

```
[root@linux-node1 ~]# cobbler reposync
```

> 提示：SaltStack 2018.3版本的源同步完成大约在50M左右。

### 3.1.4 将私有仓库添加到Profile

```
[root@linux-node1 ~]# cobbler repo list
   openstack-queens-rhel7-x86_64
   saltstack-2018.3-rhel7-x86_64
   zabbix-3.4-rhel7-x86_64
```

将自定义的Repo添加到对应的Profile之后，我们使用该Profile安装完毕的虚拟机默认就会增加这些仓库的配置。 提示：必须执行完毕reposync之后，才能添加到Profile。多个repo之间使用空格分隔。

```
[root@linux-node1 ~]# cobbler profile edit --name CentOS-7.4-x86_64 \
--repos="openstack-queens-rhel7-x86_64 saltstack-2018.3-rhel7-x86_64 zabbix-3.4-rhel7-x86_64"
```

使用Profile CentOS-7.4-x86_64创建出来的虚拟机都会有一个cobbler-config.repo文件

```
[root@localhost ~]# cd /etc/yum.repos.d/
[root@localhost yum.repos.d]# cat cobbler-config.repo 
[openstack-queens-rhel7-x86_64]
name=openstack-queens-rhel7-x86_64
baseurl=http://192.168.56.11/cobbler/repo_mirror/openstack-queens-rhel7-x86_64
enabled=1
priority=99
gpgcheck=0


[saltstack-2018.3-rhel7-x86_64]
name=saltstack-2018.3-rhel7-x86_64
baseurl=http://192.168.56.11/cobbler/repo_mirror/saltstack-2018.3-rhel7-x86_64
enabled=1
priority=99
gpgcheck=0

[zabbix-3.4-rhel7-x86_64]
name=zabbix-3.4-rhel7-x86_64
baseurl=http://192.168.56.11/cobbler/repo_mirror/zabbix-3.4-rhel7-x86_64
enabled=1
priority=99
gpgcheck=0
```

## 3.2 使用Cobbler自动化安装ESXi

1. 挂载ESXI镜像并导入

首先使用Vmware Workstation挂载对应的ESXi镜像，这里使用的6.5版本。

```
[root@linux-node1 ~]# mount /dev/cdrom /mnt/
mount: /dev/sr0 is write-protected, mounting read-only
[root@linux-node1 ~]# cobbler import --path=/mnt --name=ESXi6.5 --arch=x86_64
```

1. 会自动生成distros和profiles

```
[root@linux-node1 ~]# cobbler list
distros:
   CentOS-7.4-x86_64
   ESXi6.5-x86_64

profiles:
   CentOS-7.4-x86_64
   ESXi6.5-x86_64
```

1. 查看kickstart文件

```
[root@linux-node1 ~]# cobbler profile report --name ESXi6.5-x86_64
Name                           : ESXi6.5-x86_64
TFTP Boot Files                : {}
Comment                        : 
DHCP Tag                       : default
Distribution                   : ESXi6.5-x86_64
Enable gPXE?                   : 0
Enable PXE Menu?               : 1
Fetchable Files                : {}
Kernel Options                 : {}
Kernel Options (Post Install)  : {}
Kickstart                      : /var/lib/cobbler/kickstarts/sample_esxi6.ks
Kickstart Metadata             : {}
Management Classes             : []
Management Parameters          : <<inherit>>
Name Servers                   : []
Name Servers Search Path       : []
Owners                         : ['admin']
Parent Profile                 : 
Internal proxy                 : 
Red Hat Management Key         : <<inherit>>
Red Hat Management Server      : <<inherit>>
Repos                          : []
Server Override                : <<inherit>>
Template Files                 : {}
Virt Auto Boot                 : 1
Virt Bridge                    : xenbr0
Virt CPUs                      : 1
Virt Disk Driver Type          : raw
Virt File Size(GB)             : 5
Virt Path                      : 
Virt RAM (MB)                  : 512
Virt Type                      : kvm
```

1. 使用Cobbler安装ESXi

首先需要同步一下

```
[root@linux-node1 ~]# cobbler sync
```

1. 创建虚拟机进行实验。

## 3.3 定制化服务器安装

### 3.3.1 自动化安装流程梳理

- 采购设备送到机房。
- 机房同事，开机，插电验收，验收完毕。
- 进行CMDB资产录入。提供机器位置和MAC地址列表（供应商也可以提供）
- 调用IPMI开机，Cobbler API安装操作系统。
- 安装完毕，启动后，自动启动SaltStack。然后剩下的以SaltStack为核心了。

说明： 服务器网卡必须支持PXE功能 定制化 至少有这么几个：网络配置，Hostname 这些 注意： 如果不定制化，网卡通过PXE启动后，会出现一个菜单供人选择用哪个配置（其实就是Profile的名字）而且每个安装源 都有自己的默认KS文件，超过时间后，会指定使用默认的 KS文件 进行安装本文主要讨论 自动化一键部署，所以必须要做定制化 这部分的操作 主要通过 cobbler system 来实现

### 3.3.2 Cobbler获取安装进度

后面有章节介绍如何通过Cobbler API来调用Cobbler，在开始进行系统定制安装之前，我们可能有一个需求就是需要想知道安装进度。针对于基于Redhat的Linux发行版的系统安装程序叫做Anaconda，Cobbler提供了对Anaconda的监控，从而获取安装进度。

1. 开启Anaconda监控

   ```
   [root@linux-node1 ~]# vim /etc/cobbler/settings
   anamon_enabled: 1
   ```

重启Cobbler

```
[root@linux-node1 ~]# systemctl restart cobblerd
```

1. 查看Kickstart文件确保对应的snippet存在 ``` %pre $SNIPPET('pre_anamon')

%post $SNIPPET('post_anamon')

```
3. 进行系统安装后，会在/var/log/cobbler/anamon/下创建对应的System目录
```

[root@linux-node1 ~]# tree /var/log/cobbler/anamon/ /var/log/cobbler/anamon/ └── cobbler-api-test ├── anaconda.log ├── boot.log ├── dmesg ├── ks-post.log ├── ks-pre.log ├── messages ├── program.log ├── storage.log └── sys.log

1 directory, 9 files

```
### 3.3.3 Cobbler system定制安装

Cobbler system是Cobbler提供的可以用来进行系统定制的模块，我们可以通过Cobbler system来定制待安装服务器的IP地址、主机名等操作。

1. 添加一个主机
```

[root@linux-node1 ~]# cobbler system add --name=linux-node3 --mac=00:50:56:3F:84:4F \ --profile=CentOS-7.4-x86_64 --ip-address=192.168.56.110 --subnet=255.255.255.0 \ --gateway=192.168.56.2 --interface=eth0 --static=1 --hostname=new.devopsedu.com \ --name-servers="192.168.56.2" \ --kickstart=/var/lib/cobbler/kickstarts/CentOS-7.4-x86_64-Cobbler.cfg

```
- --name=linux-node3   #设置一个主机名称
- --mac=08:00:27:67:A0:BB  #设置对应的MAC地址
- --profile=CentOS-7.4-x86_64  #设置需要安装的操作系统
- --ip-address=192.168.56.13 #设置一个静态IP地址
- --subnet=255.255.255.0    #设置子网掩码
- --gateway=192.168.56.2    #设置网关
- --interface=eth0 \          设置网卡
- --static=1                 设置静态IP
- --dns-name=linux-node3.example.com  #设置dns name
- --hostname=linux-node3.example.com  #设置主机名
- --netboot-enabled=true #设置网络启动
- --name-servers="192.168.56.2" #设置DNS域名服务器

2. 查看主机
```

[root@linux-node1 ~]# cobbler system list linux-node3 ``` 下面，我们来启动虚拟机，进行自动化安装，不再出现选择的菜单，直接安装你制定的操作系统。



# 4 Cobbler高级话题

在实际的工作环境中，Cobbler还有很多高级的应用可以帮助我们更快的进行操作系统的部署工作。例如网卡绑定、电源管理和Cobbler API等。

## 4.1 自定义物理网卡bonding

1. 添加一台主机linux-node4

```
[root@linux-node1 ~]# cobbler system add --name=linux-node4 --profile=CentOS-7.7-x86_64 \
 --hostname=new.devopsedu.com \
 --name-servers="192.168.56.2" \
 --kickstart=/var/lib/cobbler/kickstarts/CentOS-7.7-x86_64-Cobbler.cfg
```

1. 添加bonding网卡

```
[root@linux-node1 ~]# cobbler system edit --name=linux-node4 --interface=eth0 \
 --mac=00:50:56:27:F0:07 --interface-type=bond_slave --interface-master=bond0
```

1. 添加bonding网卡

```
[root@linux-node1 ~]# cobbler system edit --name=linux-node4 --interface=eth1 \
 --mac=00:50:56:36:09:66 --interface-type=bond_slave --interface-master=bond0
```

1. 设置绑定网卡

```
[root@linux-node1 ~]# cobbler system edit --name=linux-node4 --interface=bond0 \
 --interface-type=bond --bonding-opts="miimon=100 mode=1" \
 --ip-address=192.168.56.111 --subnet=255.255.255.0 --gateway=192.168.56.2 --static=1
```

好的，万事具备，就差开机安装操作系统了。等等，怎么开机呢？既然是自动化安装，打电话让机房值班人员帮我们开机当然是不合适的，还记得IPMI吗，我们可以使用IPMI来进行电源管理。

1. 网卡绑定后的效果

```
[root@new ~]# cat /proc/net/bonding/bond0 
Ethernet Channel Bonding Driver: v3.7.1 (April 27, 2011)

Bonding Mode: fault-tolerance (active-backup)
Primary Slave: None
Currently Active Slave: eth0
MII Status: up
MII Polling Interval (ms): 100
Up Delay (ms): 0
Down Delay (ms): 0

Slave Interface: eth0
MII Status: up
Speed: 1000 Mbps
Duplex: full
Link Failure Count: 0
Permanent HW addr: 00:50:56:27:f0:07
Slave queue ID: 0

Slave Interface: eth1
MII Status: up
Speed: 1000 Mbps
Duplex: full
Link Failure Count: 0
Permanent HW addr: 00:50:56:36:09:66
Slave queue ID: 0
```

## 4.2 Cobbler电源管理

要管理服务器的电源，你可以直接使用IPMI命令进行，也可以使用cobbler间接的调用IPMI进行操作。默认情况下Cobbler使用IPMI进行电源管理，我们可以在cobbler的settings配置看到以下配置。

```
[root@linux-node1 ~]# vim /etc/cobbler/settings
power_management_default_type: 'ipmitool'
power_template_dir: "/etc/cobbler/power"
[root@linux-node1 ~]# cobbler system edit --name=linux-node3 --power-address=192.168.0.21 --power-type='ipmilan' --power-user=ipmi --power-pass=ipmi
```

服务器电源管理：

- cobbler system poweroff
- cobbler system poweron
- cobbler system powerstatus
- cobbler system reboot

重启从PXE引导启动，并指定安装的操作系统配置，如下命令，

```
[root@log-node1 ~]# cobbler system edit  --name=host-188116  --netboot-enabled=1 --profile=centos5.8-x86_64
[root@log-node1 ~]# cobbler reposync
```

## 4.3 Cobbler API使用

1. 连接Cobbler

   ```
   [root@linux-node1 ~]# cat cobbler.py 
   #!/usr/bin/env python
   import xmlrpclib
   server = xmlrpclib.Server("http://192.168.56.11/cobbler_api")
   print server.get_distros()
   print server.get_profiles()
   print server.get_systems()
   print server.get_images()
   print server.get_repos()
   ```

2. 登录Cobbler

默认情况下，不用登录Cobbler就可以获取到Cobbler的信息，但是如果需要进行操作，就需要登录。使用用户名和密码登录后，Cobbler会返回一个token令牌，后面的操作，我们调用任何一个Cobbler的方法，都需要将token作为最后一个参数。

```
[root@linux-node1 ~]# cat cobbler.py 
#!/usr/bin/env python
import xmlrpclib
server = xmlrpclib.Server("http://192.168.56.11/cobbler_api")
print server.get_distros()
print server.get_profiles()
print server.get_systems()
print server.get_images()
print server.get_repos()
token = server.login("cobbler","devopsedu.com")
print(token)


一个添加主机的例子
#!/usr/bin/env python 
# -*- coding: utf-8 -*-
import xmlrpclib 

class CobblerAPI(object):
    def __init__(self,url,user,password):
        self.cobbler_user= user
        self.cobbler_pass = password
        self.cobbler_url = url

    def add_system(self,hostname,ip_add,mac_add,profile):
        '''
        Add Cobbler System Infomation
        '''
        ret = {
            "result": True,
            "comment": [],
        }
        #get token
        remote = xmlrpclib.Server(self.cobbler_url) 
        token = remote.login(self.cobbler_user,self.cobbler_pass) 

        #add system
        system_id = remote.new_system(token) 
        remote.modify_system(system_id,"name",hostname,token) 
        remote.modify_system(system_id,"hostname",hostname,token) 
        remote.modify_system(system_id,'modify_interface', { 
            "macaddress-eth0" : mac_add, 
            "ipaddress-eth0" : ip_add, 
            "dnsname-eth0" : hostname, 
        }, token) 
        remote.modify_system(system_id,"profile",profile,token) 
        remote.save_system(system_id, token) 
        try:
            remote.sync(token)
        except Exception as e:
            ret['result'] = False
            ret['comment'].append(str(e))
        return ret

def main():
    cobbler = CobblerAPI("http://192.168.56.11/cobbler_api","cobbler","devopsedu.com")
    ret = cobbler.add_system(hostname='cobbler-api-test',ip_add='192.168.56.111',mac_add='00:50:56:25:C2:AA',profile='CentOS-7.4-x86_64')
    print ret

if __name__ == '__main__':
    main()
```

# 第二部分 KVM和OpenStack基础

# 云计算概述

在第一章，会介绍什么是云计算？什么是虚拟化？以及云计算与虚拟化的关系，然后讲解目前比较流行的虚拟化项目：KVM，了解KVM虚拟化的基本概念，使用KVM创建并管理虚拟机，为学习OpenStack打下坚实的基础。

## 云计算概述

任何事物的出现都是有背景的，云计算也不例外。云计算是由需求驱动的，首先让我们看看没有云计算之前我们都面临什么问题。

**传统数据中心面临的问题？**

- 资源利用率低：资源利用率低是数据中心目前普遍存在的问题，多项调查数据表明企业数据中心的服务器的平均利用率普遍低于15%。
- 资源分配不合理：系统统建设相对独立、各自为政，其基础设施相当于一个个独立的“孤岛”，因此很难从整体的角度考虑IT基础架构的资源分配及使用的合理性。
- 自动化能力差：资源配置和部署过程多采用人工方式，没有相应的平台支持，使大量人力资源耗费在繁重的重复性工作上，没有自服务和自动部署的能力。

**什么是云计算？**

云计算（Cloud Computing）是基于互联网的相关服务的增加、使用和交付模式。 好吧，我承认！如果你把上面那句话告诉业内人员，估计只有很少一部分人可以理解，更不用说非业内人士了。对云计算的定义有多种说法。对于到底什么是云计算,目前广为接受的是美国国家标准与技术研究院（NIST）定义：云计算是一种按使用量付费的模式，这种模式提供可用的、便捷的、按需的网络访问，进入可配置的计算资源共享池（资源包括网络，服务器，存储，应用软件，服务），这些资源能够被快速提供，只需投入很少的管理工作，或与服务供应商进行很少的交互。

**用比较好理解的方式解释就是：**

1. 是什么：云计算指的是一种模式。
2. 使用方法：云计算的必须通过网络来使用。
3. 特点和优势：弹性计算、按需付费、快速扩展，也就是你用多少，付多少钱。同时也不用关心基础设施的管理，由云计算供应商提供。

### 云计算的分类

根据云计算服务性质的不同,可以将云计算区分为公有云、私有云和混合云，如图1-1

（图1-1）

**公有云**

是将搭建好的云资源池放到Internet上，所有有使用权限的用户都可以按需使用。相对于私有云，公有云的所有者是提供商，企业用户只是具备使用权。 优势：云计算的最大优势就是其规模经济效益，大多数企业选择云计算方案是出于成本考虑，那么公有云不需要投入基础建设，可以实现按需付费，随时使用。

**私有云** 是为一个客户单独使用而构建的一套IAAS（基础设施既服务），企业可以对数据、安全性和服务质量进行最有效控制。该公司拥有基础设施，并可以控制在此基础设施上部署应用程序的方式。私有云可部署在企业数据中心的防火墙内，也可以将它们部署在一个安全的主机托管场所。 优势：数据安全对于企业来说是至关重要的，公有云服务存在较大的安全隐患，公有云平台只适合那些非关键性业务。尤其是大型企业会更多地倾向于选择私有云计算平台。

**混合云** 指公有云和私有云的混合，大多数是指在私有云搭建好自后，由于业务发展等原因，资源需求量超过了资源池，所以需要通过申请使用公有云作为私有云的补充。 优势：混合云既可以尽可能多地发挥云计算系统的规模经济效益，同时又可以保证数据安全性。对于不是很敏感的非关键业务可以由混合云中的公有模块实现，而对那些安全性要求较高的应用则可以迁移到私有模块实现。 公有云、私有云、混合云三种云计算模式并不会谁取代谁，谁优过谁。不同企业、不同需求，需要不同的解决方案。公有云、私有云、混合云会长期共存，优势互补，共同服务于企业用户。

### 云计算的分层

如果你理解了什么是云计算，那么就需要掌握，云基础是分层的。通常情况下，我们将云计算分为三层，分别是Infrastructure（基础设施）-as-a- Service，Platform（平台）-as-a-Service，Software（软件）-as-a-Service。基础设施在最下端，平台在中间，软件在顶端。

（图1-6） IaaS(Infrastructure as a Service，基础架构即服务)通过互联网提供了数据中心、基础架构硬件和软件资源。IaaS可以提供服务器、操作系统、磁盘存储、数据库和/或信息资源。最高端IaaS的代表产品是亚马逊的AWS(Elastic Compute Cloud)，不过IBM、Vmware和惠普以及其他一些传统IT厂商也提供这类的服务。国内的话阿里云、腾讯云、青云、盛大云等代表。 IaaS通常会按照"弹性云"的模式引入其他的使用和计价模式，也就是在任何一个特定的时间，都只使用你需要的服务，并且只为之付费。我们要讲的OpenStack就是IAAS的开源项目，可以用来构建公有云或者私有云。 PaaS(Platform as a Service，平台即服务)提供了基础架构，软件开发者可以在这个基础架构之上建设新的应用，或者扩展已有的应用，同时却不必购买开发、质量控制或生产服务器。Google的App Engine和新浪的SAE都采用了PASS的模式。这些平台允许公司创建个性化的应用，也允许独立软件厂商或者其他的第三方机构针对垂直细分行业创造新的解决方案。我们要讲的Docker可以用来构建PAAS平台，百度的PAAS平台核心就是基于Docker。 SaaS(Software as a Service，软件即服务)是最为成熟、最出名，也是得到最广泛应用的一种云计算。大家可以将它理解为一种软件分布模式，在这种模式下，应用软件安装在厂商或者服务供应商那里，用户可以通过某个网络来使用这些软件，通常使用的网络是互联网。这种模式通常也被称为"随需应变(on demand)"软件，这是最成熟的云计算模式，因为这种模式具有高度的灵活性、已经证明可靠的支持服务、强大的可扩展性，因此能够降低客户的维护成本和投入，而且由于这种模式的多宗旨式的基础架构，运营成本也得以降低。Google的Gmail和Jira都是SAAS的模式。

## 云计算与虚拟化

首先请大家不要把虚拟化和我们之前讲解的云计算进行联想，先入为主很容易让我们陷入概念的误区，让我来代理大家搞明白云计算与虚拟化的恩恩怨怨。因为提到云计算就不得不提到虚拟化，甚至说很多人将云计算和虚拟化混为一谈，这是不正确的。好的，答案有了，云计算不等于虚拟化，那么为什么呢？ 虚拟化，是指通过虚拟化技术将一台计算机虚拟为多台逻辑计算机。在一台计算机上同时运行多个逻辑计算机，每个逻辑计算机可运行不同的操作系统，并且应用程序都可以在相互独立的空间内运行而互不影响，从而显著提高计算机的工作效率。如图1.1.1所示：

（图1-1）

### 全虚拟化和半虚拟化

虚拟化技术根据特点，可以分为全虚拟化和半虚拟化。 全虚拟化（Full Virtualization)， 是原始虚拟化技术，该模型使用虚拟机协调guest操作系统和原始硬件，VMM（Virtual Machine Monitor）在GuestOS和裸硬件之间用于工作协调，一些受保护指令必须由Hypervisor（虚拟机管理程序）来捕获处理，如图1-2。

（图1-2） KVM是全虚拟化的典型代表，KVM是集成到Linux内核的Hypervisor，是X86架构且硬件支持虚拟化技术（Intel VT或AMD-V）的Linux的全虚拟化解决方案。它是Linux的一个很小的模块，利用Linux做大量的事，如任务调度、内存管理与硬件设备交互等，如图1-3。

半虚拟化（Para Virtualization），是另一种类似于全虚拟化的技术，它使用Hypervisor分享存取底层的硬件，但是它的guest操作系统集成了虚拟化方面的代码。该方法无需重新编译或引起陷阱，因为操作系统自身能够与虚拟进程进行很好的协作。半虚拟化需要guest操作系统做一些修改，使guest操作系统意识到自己是处于虚拟化环境的，但是半虚拟化提供了与原操作系统相近的性能，如图1-4。

（图1-4） 半虚拟化的一个典型代表是Xen。Xen是第一类运行在裸机上的虚拟化管理程序(Hypervisor)。它支持全虚拟化和半虚拟化,Xen支持hypervisor和虚拟机互相通讯。Xen最重要的优势在于半虚拟化，此外未经修改的操作系统也可以直接在xen上运行(如Windows)，能让虚拟机有效运行而不需要仿真，因此虚拟机能感知到hypervisor，而不需要模拟虚拟硬件，从而能实现高性能，如图1-5。

（图1-5） 在Xen环境中，主要有两个组成部分。 一个是虚拟机监控器（VMM），也叫hypervisor。Hypervisor层硬件与虚拟机之间，最先被载入到硬件的第一层。 Hypervisor载入就可部署虚拟机。在Xen中，虚拟机叫做Domain。在这些虚拟机中，Domain0具有很高的特权,负责一些专门的工作。由于hypervisor中不包含任何与硬件对话的驱动，也没有与管理员对话的接口，这些驱动就由 domain0来提供了。通过domain0，管理员可以利用一些Xen工具来创建其它虚拟机（DomainU）。这些domainU属于无特权domain。

### 虚拟化分类

刚才从类型中把虚拟化分为全虚拟化和半虚拟化，从使用场景中进行区分，虚拟化可以分为服务器虚拟化、桌面虚拟化和应用虚拟化。更详细的根据资源的不同还提出了网络虚拟化、存储虚拟化等。 服务器虚拟化是我们最常见的方式，我们通过KVM、Xen、VMWARE ESXi等软件将我们的服务器虚拟成多个来使用，提高硬件的使用效率。不熟悉的朋友可以使用搜索引擎来获取相关知识，目前我的生产环境还稳定的运行着数年前的ESXi。

**桌面虚拟**

化是指将计算机的终端系统（也称作桌面）进行虚拟化，以达到桌面使用的安全性和灵活性。可以通过任何设备，在任何地点，任何时间通过网络访问属于我们个人的桌面系统。目前在中小企业并没有完全普及，主要用于IT外包、呼叫中心、移动桌面等，因为在显示方面对于低成本的解决方案效果并不好，效果好的初始采购成本较高。 桌面虚拟化依赖于服务器虚拟化，首先在数据中心的服务器上进行服务器虚拟化，生成大量的独立的桌面操作系统（比如Win7），同时根据专有的虚拟桌面协议发送给终端设备（例如RDP、VNC、Spice协议）。用户终端通过以太网登陆到虚拟主机上，只需要记住用户名和密码及网关信息，即可随时随地的通过网络访问自己的桌面系统，从而实现单机多用户。 通过与IAAS的结合，桌面虚拟化也演变成桌面云（DAAS ：Desktop As a Service）.IAAS提供基础资源平台，桌面虚拟化和云平台的完美融合达到类似于SAAS一样的效果，这便是DAAS。

**应用虚拟化**

比较简单的解释就是通过虚拟化软件实现传统C/S结构的软件通过Web浏览器进行交付。在用户访问一个服务器虚拟化后的应用时，用户计算机只需要把人机交互逻辑传送到服务器端，服务器端为用户开设独立的会话空间，应用程序的计算逻辑在这个会话空间中运行，把变化后的人机交互逻辑传送给客户端，并且在客户端相应设备展示出来，从而使用户获得如同运行本地应用程序一样的访问感受。比如我曾经使用过Cirtrix公司的Xenapp这款应用虚拟化产品，实现ERP客户端的浏览器交付。 经过上面的理解，我们应该可以看出，从表面来看虚拟化是一种技术，那么云计算是一个概念。云计算里面包含了很多的技术，也包括虚拟化技术。云计算是和服务相关的，虚拟化是相对于物理设备的。所以说虚拟化绝不是云计算。而云计算则远远超出了虚拟化的范畴。

### 云计算不等于虚拟化

经过之前对云计算和虚拟化的学习，我们可以直接得出答案：云计算不等于虚拟化，云计算实质上是根据需要通过 Internet 交付共享计算资源。云计算可以通过虚拟化来实现，千万不要以为云计算就是虚拟化。我们再总结一下，云计算是一种资源使用和交付方式，虚拟化是一种具体的技术实现。但是呢，云计算的具体实现需要使用到虚拟化这项技术。

# 2 KVM虚拟化实战

可翻阅www.xoxoyun.cn博客其他KVM文章进行学习

# 3 OpenStack入门实战

在OpenStack入门实战章节，我们首先会介绍OpenStack的历史、架构。然后通过部署一个两个节点的OpenStack集群来学习OpenStack的基础组建。包括

- OpenStack共享服务MySQL、RabbitMQ、Memcached
- OpenStack验证服务Keystone
- OpenStack镜像服务Glance
- OpenStack计算服务Nova
- OpenSTack网络服务Neutron
- OpenStack管理节目Horizon

# 1.1 OpenStack介绍

OpenStack 是由 Rackspace 和 NASA（美国宇航局） 共同开发的云计算平台，是云计算中IAAS的开源实现。通过Apache许可证授权开放源码，它可以帮助服务商和企业实现类似于Amazon EC2和S3的云基础架构服务。

OpenStack是一个云平台管理的项目，它不是一个软件。OpenStack是一个可以管理整个数据中心里大量资源池的云操作系统，包括计算、存储及网络资源。管理员可以通过管理台管理整个系统，并可以通过web接口为用户划定资源。由以上可以知道OpenStack的主要目标是管理数据中心的资源，简化资源分派。它管理三部分资源，分别是：

- 计算资源：OpenStack可以规划并管理大量云主机，从而允许企业或服务提供商按需提供计算资源；开发者可以通过API访问计算资源从而创建云应用，管理员与用户则可以通过web访问这些资源；

- 存储资源：OpenStack可以为云服务或云应用提供所需的对象及块存储资源；因对性能及价格有需求，很多组织已经不能满足于传统的企业级存储技术，因此OpenStack可以根据用户需要提供可配置的对象存储或块存储功能；

- 网络资源：如今的数据中心存在大量的设置，如服务器、网络设备、存储设备、安全设备而它们还将被划分成更多的虚拟设备或虚拟网络；这会导致IP地址的数量、路由配置、安全规则将爆炸式增长；传统的网络管理技术无法真正的可高扩展、高自动化地管理下一代网络；因而OpenStack提供了插件式、可扩展、API驱动型的网络及IP管理； OpenStack通过整合相关的一组服务，提供了基础设施即服务（IaaS）的解决方案。每个服务提供了一组应用程序接口（API）来促进他们之间的整合。你可以根据您的需要，选择安装这些服务中的一些或全部。

  

# 3.2 OpenStack环境准备

### 3.2.1 OpenStack实战案例

从本章开始，开始介绍OpenStack的各个组件，为了让读者更直观的了解组件的作用和组件之间的依赖关系，将通过理论和实践部署相结合的方式进行讲解。 请参考《实验环境》来完成本实例的环境准备工作。

下图是我们快速学习OpenStack的实战架构图，目标是先以最小组件依赖运行一个OpenStack平台，然后再后面的章节添加其它组件。

注意：在后面的实验过程中，我们会使用到控制节点部署和计算节点部署这样的描述方法，请到对应的主机上进行操作。

### 3.2.2 NTP时间同步

各个服务器的时间同步是OpenStack部署和运维中往往被忽视的问题。如果各个节点时间不同步，会影响OpenStack平台的正常。所以需要保证所有节点时间同步。 在CentOS 7推荐使用Chrony来进行时间同步。 Chrony是一个开源的自由软件，它能帮助你保持系统时钟与时钟服务器（NTP）同步，因此让你的时间保持精确。它由两个程序组成，分别是chronyd和chronyc。chronyd是一个后台运行的守护进程，用于调整内核中运行的系统时钟和时钟服务器同步。它确定计算机增减时间的比率，并对此进行补偿。chronyc提供了一个用户界面，用于监控性能并进行多样化的配置。它可以在chronyd实例控制的计算机上工作，也可以在一台不同的远程计算机上工作。

**控制节点部署** 本实例中，我们把控制节点的chrony作为内部的时钟服务器，其它节点都同步控制节点的时间，如果你的环境中已经存在时间服务器可以设置为已经存在的时间服务器。

1. 安装chrony

   ```
   [root@linux-node1 ~]# yum install -y chrony
   ```

2. 配置chrony

   ```
   [root@linux-node1 ~]# vim /etc/chrony.conf
   #设置时钟服务器，可以设置多个，这里推荐使用阿里云的公共NTP时间服务器
   server time1.aliyun.com iburst
   server time2.aliyun.com iburst
   server time3.aliyun.com iburst
   server time4.aliyun.com iburst
   #设置允许192.168.0.0/16网段连接
   allow 192.168.56.0/24
   ```

3. 启动 NTP 服务并将其配置为开机启动：

   ```
   [root@linux-node1 ~]# systemctl enable chronyd.service
   [root@linux-node1 ~]# systemctl start chronyd.service
   ```

**其它节点部署**

1. 安装chrony

   ```
   [root@linux-node2 ~]# yum install -y chrony
   ```

2. 配置chrony

   ```
   [root@linux-node2 ~]# vim /etc/chrony.conf
   #设置为控制节点的IP地址，并将其它配置全部删除。
   server 192.168.56.11 iburst
   ```

3. 启动 NTP 服务并将其配置为开机启动：

   ```
   [root@linux-node2 ~]# systemctl enable chronyd.service
   [root@linux-node2 ~]# systemctl start chronyd.service
   ```

**验证同步时间**

在同时时间之前要确保你的时区是正确的。CentOS7提供了timedatectl用来修改。

```
[root@linux-node1 ~]# timedatectl set-timezone Asia/Shanghai
在所有节点上执行chronyc source保证配置都正确
[root@linux-node1 ~]# chronyc sources
```

### 3.2.3 基础软件包安装

基础软件包需要在所有的OpenStack节点上进行安装，包括控制节点和计算节点。

1. 安装EPEL仓库

```
# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
```

1. 安装OpenStack仓库

```
# yum install -y centos-release-openstack-train
```

1. 安装OpenStack客户端

```
# yum install -y python-openstackclient
```

> 注意：本文的实验环境是关闭SELinux，如果你启用了，需要安装openstack-selinux 包实现对OpenStac服务的安全策略进行自动管理。

1. 安装openstack SELinux管理包

虽然我们在实验环境准备中，已经要求环境中关闭SELinux，但是为了以防万一，你还是需要安装上openstack-selinux。

```
# yum install -y openstack-selinux
```

**OpenStack源码包**

本案例使用的是yum安装，如果你想使用源码进行OpenStack部署和开发，目前OpenStack所有的源码包，都可以在这里找到http://tarballs.openstack.org/，同时也可以访问https://launchpad.net/openstack/获取到每个项目的详情和下载地址。

### 3.2.4 MySQL数据库部署

数据库是OpenStack的基础组件之一，OpenStack的大多数组件如KeyStone、Glance、Nova、Neutron和Cinder都需要使用数据库存储数据，包括Horizon也可以使用数据库来进行Session的存储。因此数据库的可用率会直接影响到整个OpenStack平台的可用率。如果数据库故障，OpenStack平台将无法创建新的虚拟机和管理虚拟机，但是不不会影响到正在运行的虚拟机。
OpenStack支持MySQL、PostgreSQL等多种数据库，需要注意的是在CentOS7上默认不是MySQL，而是mariadb。 你可以将MySQL Server安装在任意的服务器上，当然最好是专用的数据库服务器，使用更多的CPU和IO性能更好的硬盘。 注：生产环境可以咨询DBA进行MySQL的性能优化和高可用的配置。

1. MySQL安装

```
[root@linux-node1 ~]# yum install -y mariadb mariadb-server python2-PyMySQL
```

1. 修改MySQL配置文件

   默认情况下MySQL已经包含了/etc/my.cnf.d的目录，我们需要把配置放在该目录下即可。

   ```
   [root@linux-node1 ~]# vim /etc/my.cnf.d/openstack.cnf
   [mysqld]
   bind-address = 192.168.56.11 #设置监听的IP地址
   default-storage-engine = innodb  #设置默认的存储引擎
   innodb_file_per_table = on#使用独享表空间
   collation-server = utf8_general_ci #服务器的默认校对规则
   character-set-server = utf8 #服务器安装时指定的默认字符集设定
   max_connections = 4096 #设置MySQL的最大连接数，生产请根据实际情况设置。
   ```

2. 启动MySQL Server并设置开机启动

```
[root@linux-node1 ~]# systemctl enable mariadb.service 
[root@linux-node1 ~]# systemctl start mariadb.service
```

1. 进行数据库安全设置

```
[root@linux-node1 ~]# mysql_secure_installation
```

1. 数据库创建

在部署完MySQL数据后，可以将各个服务的数据库创建上，给后期安装使用。注意在实际生产环境中，一定要使用复杂度更高的密码和做好访问控制，这里实验使用用户名和密码相同。

```
[root@linux-node1 ~]# mysql -u root -p
Enter password: 
…
MariaDB [(none)]>

#Keystone数据库

CREATE DATABASE keystone;
GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' IDENTIFIED BY 'keystone';
GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' IDENTIFIED BY 'keystone';

#Glance数据库

CREATE DATABASE glance;
GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' IDENTIFIED BY 'glance';
GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' IDENTIFIED BY 'glance';

#Placement数据库

CREATE DATABASE placement;
GRANT ALL PRIVILEGES ON placement.* TO placement@'localhost' IDENTIFIED BY 'placement';
GRANT ALL PRIVILEGES ON placement.* TO placement@'%' IDENTIFIED BY 'placement';

#Nova数据库

CREATE DATABASE nova;
GRANT ALL PRIVILEGES ON nova.* TO 'nova'@'localhost' IDENTIFIED BY 'nova';
GRANT ALL PRIVILEGES ON nova.* TO 'nova'@'%' IDENTIFIED BY 'nova';

CREATE DATABASE nova_api;
GRANT ALL PRIVILEGES ON nova_api.* TO 'nova'@'localhost' IDENTIFIED BY 'nova';
GRANT ALL PRIVILEGES ON nova_api.* TO 'nova'@'%' IDENTIFIED BY 'nova';

CREATE DATABASE nova_cell0;
GRANT ALL PRIVILEGES ON nova_cell0.* TO 'nova'@'localhost' IDENTIFIED BY 'nova';
GRANT ALL PRIVILEGES ON nova_cell0.* TO 'nova'@'%' IDENTIFIED BY 'nova';

#Neutron 数据库

CREATE DATABASE neutron;
GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'localhost' IDENTIFIED BY 'neutron';
GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'%' IDENTIFIED BY 'neutron';

#Cinder数据库

CREATE DATABASE cinder;
GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhost' IDENTIFIED BY 'cinder';
GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'%' IDENTIFIED BY 'cinder';
```

数据库部署完毕后，后期的很多操作都可以通过命令，甚至直接修改数据库的数据来进行。注意：本实例为了简化步骤，使用了较为简单的密码，生产环境请设置符合运维规范的复杂密码来进行替换。 注意：一定要给数据库做好相关的高可用和备份措施，像对待生成业务数据库一样对待它哦。

### 消息代理RabbitMQ

OpenStack 使用（Message broker）消息代理在各个服务之间进行协调和状态管理。OpenStack支持三种开源的消息队列服务。分别为RabbitMQ、Qpid、ZeroMQ。Openstack默认使用RabbitMQ。 消息队列在OpenStack整个架构中扮演着交通枢纽的作用，正是因为OpenStack部署的灵活性、各个组件的松耦合、架构的扁平化，反而使得OpenStack更加依赖于消息队列。OpenStack的控制、计算、网络与存储服务均需要通过消息队列进行通信。 你可以将RabbitMQ部署在独立的服务器中，或者使用RabbitMQ集群这取决于你的实际情况，在实验环境，部署在控制节点即可。

1. 安装RabbitMQ

```
[root@linux-node1 ~]# yum install -y rabbitmq-server
```

1. 设置开启启动，并启动RabbitMQ

```
[root@linux-node1 ~]# systemctl enable rabbitmq-server.service
[root@linux-node1 ~]# systemctl start rabbitmq-server.service
```

1. 添加openstack用户。

创建一个openstack用户，密码为openstack。注意实际使用中进行密码修改，这里设置的用户名和密码在后面配置OpenStack组件的时候需要在配置文件里面设置。

```
[root@linux-node1 ~]# rabbitmqctl add_user openstack openstack
Creating user "openstack" ...
```

1. 给刚才创建的openstack用户，创建权限。

```
[root@linux-node1 ~]# rabbitmqctl set_permissions openstack ".*" ".*" ".*"
Setting permissions for user "openstack" in vhost "/" ...
```

1. 启用Web监控插件

RabbitMQ自带了一个Web监控插件，可以通过Web界面监控RabbitMQ的运行状态。同时也提供了HTTP API。可以方便的集成到Nagios、Zabbix等监控平台上。 Web监控插件启用后就可以通过[http://IP:15672/来访问web管理界面。](http://ip:15672/来访问web管理界面。)

```
[root@linux-node1 ~]# rabbitmq-plugins list
[root@linux-node1 ~]# rabbitmq-plugins enable rabbitmq_management
（注：如果主机名不能解析，rabbitMQ将无法启动。在生产应用时建议设置为集群模式，建议三个节点。1个硬盘节点、两个内存节点。）
[root@linux-node1 ~]# lsof -i:15672
COMMAND  PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
beam    2620 rabbitmq   15u  IPv4  16805      0t0  TCP *:15672 (LISTEN)
```

默认情况下RabbitMQ服务使用5672端口，而Web管理插件监听15672端口，直接在浏览器输入[http://192.168.56.11:15672](http://192.168.56.11:15672/)

> RabbitMQ默认的用户名和密码均为guest。之前创建的openstack的用户是无法通过Web界面登录的。

（图2.2.2）

> 实践经验：消息队列收发消息的性能和消息队列的HA能力直接影响OpenStack的性能和高可用。如果消息队列Down机，OpenStack将无法创建新的云主机，以及进行其它的管理工作。所以在企业生产环境中，需要使用RabbitMQ的集群来保证可用性。同时做好监控工作，RabbitMQ自带HTTP的API，便于集成到企业的监控平台上。

# 1.3 OpenStack验证服务KeyStone

Keystone（OpenStack Identity Service）是OpenStack框架中，负责身份验证、服务规则和服务令牌的功能，它实现了OpenStack的Identity API。

Keystone类似一个服务总线， 或者说是整个OpenStack框架的注册中心，其他服务通过keystone来注册其服务的Endpoint（服务访问的URL），任何服务之间相互的调用，需要经过Keystone的身份验证，来获得目标服务的Endpoint来找到目标服务。

### Keystone概述

Keystone提供了以下两个主要的功能：

- 用户与认证:用户权限与用户行为跟踪；
- 服务目录:提供一个服务目录，包括所有服务项与相关Api的端点。

下面我们从这两个主要功能来了解Keystone的概念，和Keystone在Openstack中的作用。

1. Keystone用户与认证

   Keystone为各个Openstack组件提供用户和认证服务，各个组件都必须与Keystone进行交互。比如登陆认证是用户在访问Openstack各个组件中的API时，必须通过Keystone的用户名和密码验证，最终通过Kyestone验证获取token，完成对用户的登陆认证。如果认证失败，该用户将不能访问该API。

**User**

User即用户，它是用一个数字代表使用OpenStack云服务的一个人、系统、或服务。身份验证服务将会验证传入的由用户声明将调用的请求。用户如果已经登录，可就能分配令牌（tokens）访问资源。 用户可能被直接分配给特定的租户，用户行为被包含在租户（tenant），Users通过认证信息（credentials，如密码、API Keys等）进行验证。

**Credentials**

```
Credentials即证书，用户可以通过身份验证，保证数据通常只被一个用户属于或拥有(因为没有其他人应该知道数据)。
```

以下为证书的例子: 一个匹配的用户名和密码 一个匹配的用户名和API键 一个身份认证令牌

**Authentication**

Authentication即认证，认证是确认身份或识别真实性的行为。身份服务通过与用户的一组声明验证以确认传入的请求是由该用户声明过的。这些声明被初始化为一组证书 (username&password, or username and API key)。初始确认后，身份服务将会给用户发布一个确认身份的令牌(Token)，在用户随后的请求中可以使用这个令牌授权访问。

**Token：**

Token即令牌，是一个用户访问资源的任意文本，每一个令牌都有一个范围，描述了可以访问哪些资源。令牌可能随时撤消，是有有效期的。身份认证是支持令牌认证的，它的目的为在未来支持额外的协议。其目的是为了让它首先成为一种集成服务，而不是一种渴望成为丰富的身份存储和管理的解决方案。 T **Tenant：**

Tenant即租户，它是各个服务中的一些可以访问的资源集合。它是一个容器，用于组织和隔离资源，或标识对象。一个租户可以一个客户、账户、组织、项目的映射。例如，在Nova中一个tenant可以是一些机器，在Swift和Glance中一个tenant可以是一些镜像存储，在Neutron中一个tenant可以是一些网络资源。Users默认的总是绑定到某些tenant上。

**Role：**

Role即角色，Roles代表一组用户可以访问的资源权限，例如Nova中的虚拟机、Glance中的镜像。Users可以被添加到任意一个全局的或租户内的角色中。在全局的role中，用户的role权限作用于所有的租户，即可以对所有的租户执行role规定的权限；在租户内的role中，用户仅能在当前租户内执行role规定的权限。

**Domain：**

在KeyStone V3版本将 Tenant 改为 Project 并在其上添加 Domain 的概念，这更加符合现实世界和云服务的映射。利用 Domain 实现真正的多租户（multi-tenancy）架构，Domain 担任 Project 的高层容器。云服务的客户是 Domain 的所有者，他们可以在自己的 Domain 中创建多个 Projects、Users、Groups 和 Roles。通过引入 Domain，云服务客户可以对其拥有的多个 Project 进行统一管理，而不必再向过去那样对每一个 Project 进行单独管理。

**Group：**

Group 是一组 Users 的容器，可以向 Group 中添加用户，并直接给 Group 分配角色，那么在这个 Group 中的所有用户就都拥有了 Group 所拥有的角色权限。通过引入 Group 的概念，Keystone V3 实现了对用户组的管理，达到了同时管理一组用户权限的目的。这与 V2 中直接向 User/Project 指定 Role 不同，使得对云服务进行管理更加便捷。 Domain、Group、Project、User 和 Role 的关系图

如图 2 所示，在一个 Domain 中包含 3 个 Projects,可以通过 Group1 将 Role Sysadmin直接赋予 Domain,那么 Group1 中的所有用户将会对 Domain 中的所有 Projects 都拥有管理员权限。也可以通过 Group2 将 Role Engineer 只赋予 Project3,这样 Group2 中的 User 就只拥有对 Project3 相应的权限，而不会影响其它 Projects。

1. Keystone服务目录

   上文说过，Keystone除了用户管理相关的支撑，还有一个重要的作用是一个服务目录。KeyStone为Openstack各个服务提供了一个REST API端点列表。

2. Service Service即服务，如Nova、Glance、Swift。根据前三个概念（User，Tenant和Role）一个服务可以确认当前用户是否具有访问其资源的权限。但是当一个user尝试着访问其租户内的service时，他必须知道这个service是否存在以及如何访问这个service，这里通常使用一些不同的名称表示不同的服务。在上文中谈到的Role，实际上也是可以绑定到某个service的。

3. Endpoint Endpoint，翻译为“端点”，我们可以理解它是一个服务暴露出来的访问点，如果需要访问一个服务，则必须知道他的endpoint。因此，在keystone中包含一个endpoint模板（endpoint template，在安装keystone的时候我们可以在conf文件夹下看到这个文件），这个模板提供了所有存在的服务endpoints信息。一个endpoint template包含一个URLs列表，列表中的每个URL都对应一个服务实例的访问地址，并且具有public、private和admin这三种权限。public url可以被全局访问（如[http://compute.example.com），private](http://compute.example.com)%2Cprivate/) url只能被局域网访问（如[http://compute.example.local），admin](http://compute.example.local)%2Cadmin/) url被从常规的访问中分离。

### KeyStone部署

OpenStack中所有服务的安装可以说是最简单的。复杂的就在于本身的配置文件的修改和与Keystone相关的配置。还记得上面说的，OpenStack的每个组件如果能够使用都必须在Keystone创建Service和Endpoint吗？好的，我们开始。

1. 安装keystone

```
[root@linux-node1 ~]# yum install -y openstack-keystone httpd mod_wsgi memcached python-memcached
```

1. 设置Memcache开启启动并启动Memcached

```
#keystone使用Memcached来缓存验证后生成的token。
[root@linux-node1 ~]# systemctl enable memcached.service
[root@linux-node1 ~]# vim /etc/sysconfig/memcached
PORT="11211"
USER="memcached"
MAXCONN="1024"
CACHESIZE="64"
OPTIONS="-l 192.168.56.11,::1"
[root@linux-node1 ~]# systemctl start memcached.service
```

1. Keystone配置

KeyStone的配置只需要修改/etc/keystone/keystone.conf即可，涉及Admin Token和Mysql连接，其它均使用默认配置即可。所有配置文件都存放到/etc/keystone（项目名）目录下。日志都存放在/var/log/keystone（项目名）目录下，其它项目也是如此。 好的，我们暂停一下，在后面的部署中，我们会使用这样的方式列出配置，未列出的配置，保持默认不进行修改，除非特别提示到。另外要注意配置的位置，OpenStack所有服务都会有[DEFAULT] [dtabase] 这样的配置部分，请在文中列出的配置部分里面进行配置，切记！。因为确实有相同的配置存在在不同的配置端的情况，这样例外情况，如果没有按要求配置，可能就无法正常运行。

- 配置KeyStone数据库

  OpenStack中所有服务的数据库同步都需要依赖与配置文件中的数据库连接的配置，所以必须先修改完毕配置文件后，再进行数据库的初始化操作。

  ```
  [root@linux-node1 ~]# vim /etc/keystone/keystone.conf
  [database]
  connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone
  ```

- 设置Token和Memcached

在之前的KeyStone版本由于所有的API通信都要请求Keystone来生产Token，之前是存放在MySQL表里，导致表特别大，经常需要手动清理，而且性能下降，现在新的版本我们可以存放在memcache里面了。

```
[token]
provider = fernet
```

- 同步数据库：

```
[root@linux-node1 ~]# su -s /bin/sh -c "keystone-manage db_sync" keystone
```

> 小提示：为什么要使用keystone用户来同步数据呢，因为同步操作会生产日志/var/log/keystone/keystone.log，如果使用root用户，那么生成的文件权限为root用户，keystone启动的时候没有权限读取该文件，会无法启动。如果你的同步执行有问题，那么可以查看日志获取详细的错误信息。

- 验证数据库创建是否正常：

```
[root@linux-node1 ~]# mysql -h 192.168.56.11 -ukeystone -pkeystone -e "use keystone;show tables;"
```

1. 初始化fernet keys

   生成完毕之后，会创建/etc/keystone/fernet-keys目录

   ```
   [root@linux-node1 ~]# keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
   [root@linux-node1 ~]# keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
   ```

2. 初始化keystone

还记得上面说的Openstack的每个组件都必须在Keystone上进行注册。当然也包括Keystone本身。身份认证服务管理了一个与您环境相关的 API 端点的目录。服务使用这个目录来决定如何与您环境中的其他服务进行通信。 OpenStack使用三个API端点变种代表每种服务：admin，internal和public。默认情况下，管理API端点允许修改用户和租户而公共和内部APIs不允许这些操作。在生产环境中，处于安全原因，变种为了服务不同类型的用户可能驻留在单独的网络上。 对实例而言，公共API网络为了让顾客管理他们自己的云在互联网上是可见的。管理API网络在管理云基础设施的组织中操作也是有所限制的。内部API网络可能会被限制在包含OpenStack服务的主机上。此外，OpenStack支持可伸缩性的多区域。为了简单起见，我们这里均使用一个IP地址。192.168.56.11。

```
[root@linux-node1 ~]# keystone-manage bootstrap --bootstrap-password admin \
 --bootstrap-admin-url http://192.168.56.11:5000/v3/ \
 --bootstrap-internal-url http://192.168.56.11:5000/v3/ \
 --bootstrap-public-url http://192.168.56.11:5000/v3/ \
 --bootstrap-region-id RegionOne
```

1. 验证Keystone配置

下面我将上面进行的配置列出来，供读者进行比对，配置应该和本文保持一致。

```
[root@linux-node1 ~]# grep "^[a-z]" /etc/keystone/keystone.conf 
connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone
provider = fernet
```

1. KeyStone启动

OpenStack Keystone使用Apache来进行启动，提高了性能。 配置ServerName，注意一定要配置，不然会有奇怪的问题出现。

```
[root@linux-node1 ~]# vim /etc/httpd/conf/httpd.conf
ServerName 192.168.56.11:80
创建配置文件
[root@linux-node1 ~]# ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
```

启动keystone，并查看端口。

```
[root@linux-node1 ~]# systemctl enable httpd.service
[root@linux-node1 ~]# systemctl start httpd.service
[root@linux-node1 ~]# netstat -ntlp | grep httpd
tcp6       0      0 :::5000                 :::*              LISTEN      3408/httpd
tcp6       0      0 :::80                   :::*              LISTEN      3408/httpd
现在，如果你的Keystone没有正常的监听端口，那么请查看日志，后期我们会不停的强调读者通过查看日志来排查问题，OpenStack的日志是值得信赖的。如果你想让朋友帮助解决问题，请不要使用日志截图的方式，请发送完整的日志。
```

### Keystone权限管理

我们已经成功的运行了Keystone服务，要提供身份认证服务，需要使用域、项目、用户和角色的组合。 首先我们要创建一个超级管理员用户、角色和项目。默认情况下。在创建用户之前，我们需要连接到Keystone。问题来了，现在我们没有任何用户，我们如何登录KeyStone呢？这个时候ADMIN_TOKEN就可以帮忙了，我们可以使用这个超级密码直接登录到KeyStone上，所以说，一定要保护好你的ADMIN_TOKEN。 好的，现在我们要连接到Keystone上，有两种方法：

- 使用--os-token等参数的方式（就是通过参数的方式）
- 使用环境变量（将参数设置为环境变量，keystone直接读取环境变量）
- 设置环境变量

在这里，我们使用三个环境变量用来连接keystone。admin用户和密码就是我们前面使用keystone-manage bootstrap初始化的。

```
[root@linux-node1 ~]# 
export OS_USERNAME=admin
export OS_PASSWORD=admin
export OS_PROJECT_NAME=admin
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_DOMAIN_NAME=Default
export OS_AUTH_URL=http://192.168.56.11:5000/v3
export OS_IDENTITY_API_VERSION=3
```

请注意环境变量的问题，不要打开新的会话进行操作。

1. 创建实验用的demo项目、用户和角色

下面我们创建一个普通用户和租户，我们下面的实验均使用这个普通用户进行Openstack的管理。

```
# openstack domain create --description "An Example Domain" example
# openstack project create --domain default --description "Demo Project" myproject
# openstack user create --domain default --password-prompt myuser
# openstack role create myrole
# openstack role add --project myproject --user myuser myrole
```

> 在创建用户的时候可以使用--password-prompt，然后根据提示输入密码

1. 创建一个服务的项目

   OpenStack服务也需要使用用户名、租户和角色，用来访问OpenStack的各个服务。

   ```
   # openstack project create --domain default --description "Service Project" service
   ```

2. 创建各个服务连接Keystone的账户 后面我们部署的其它服务都需要到Keystone上进行认证，所以现在就可以提前将各个服务的账号创建上。并全部加入service项目。

   - 创建glance用户

     ```
     # openstack user create --domain default --password glance glance
     # openstack role add --project service --user glance admin
     ```

   - 创建nova用户

     ```
     # openstack user create --domain default --password nova nova
     # openstack role add --project service --user nova admin
     ```

   - 创建placement用户

     ```
     # openstack user create --domain default --password placement placement
     # openstack role add --project service --user placement admin
     ```

   - 创建Neutron用户

     ```
     # openstack user create --domain default --password neutron neutron
     # openstack role add --project service --user neutron admin
     ```

   - 创建cinder用户

     ```
     # openstack user create --domain default --password cinder cinder
     # openstack role add --project service --user cinder admin
     ```

### 验证Keystone安装

首先，我们需要取消OS_TOKEN和OS_URL这两个变量。这两个变量是用于引导我们创建Admin用户和Keystone服务自身Service和Endpoint注册时候的用的，现在已经不需要了。

```
[root@linux-node1 ~]# unset OS_AUTH_URL OS_PASSWORD
```

**测试admin用户**

密码为admin，需要输入两次，如果能正常获取token说明配置成功。

```
[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \
--os-project-domain-name Default --os-user-domain-name Default \
--os-project-name admin --os-username admin token issue
Password:
…
#密码为admin，需要输入两次，如果能正常获取token说明配置成功。
```

**测试myuser用户**

密码为你设置的，需要输入两次，如果能正常获取token说明配置成功。

```
[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \
--os-project-domain-name Default --os-user-domain-name Default \
--os-project-name myproject --os-username myuser token issue
Password:
…
```

### 环境变量脚本配置

使用Keystone命令有两种方式，第一种就像上面。我们使用指定--os-username、--os-password和--os-password这样的选项来进行操作，但是这样在我们日常操作中会比较麻烦。第二种方式就是使用环境变量，这样可以避免每次使用都要制定变量。我们将这些常用的变量设置为环境变量。 下面建立环境变量为其它服务部署和配置使用

1. 设置admin环境变量脚本

```
[root@linux-node1 ~]# vim /root/admin-openstack.sh
export OS_PROJECT_DOMAIN_NAME=Default
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_NAME=admin
export OS_USERNAME=admin
export OS_PASSWORD=admin
export OS_AUTH_URL=http://192.168.56.11:5000/v3
export OS_IDENTITY_API_VERSION=3
export OS_IMAGE_API_VERSION=2
```

1. 创建普通用户的环境变量脚本

```
[root@linux-node1 ~]# vim /root/demo-openstack.sh
export OS_PROJECT_DOMAIN_NAME=Default
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_NAME=myproject
export OS_USERNAME=myuser
export OS_PASSWORD=123.com
export OS_AUTH_URL=http://192.168.56.11:5000/v3
export OS_IDENTITY_API_VERSION=3
export OS_IMAGE_API_VERSION=2
```

创建完毕变量后，在后期使用某个账户的权限，只需要source一下就可以使用，例如：

```
[root@linux-node1 ~]# source /root/admin-openstack.sh
[root@linux-node1 ~]# openstack token issue
```

测试demo用户，是否能够获取token

```
[root@linux-node1 ~]# source /root/demo-openstack.sh 
[root@linux-node1 ~]# openstack token issue
```

# 1.3 OpenStack验证服务KeyStone

Keystone（OpenStack Identity Service）是OpenStack框架中，负责身份验证、服务规则和服务令牌的功能，它实现了OpenStack的Identity API。

Keystone类似一个服务总线， 或者说是整个OpenStack框架的注册中心，其他服务通过keystone来注册其服务的Endpoint（服务访问的URL），任何服务之间相互的调用，需要经过Keystone的身份验证，来获得目标服务的Endpoint来找到目标服务。

### Keystone概述

Keystone提供了以下两个主要的功能：

- 用户与认证:用户权限与用户行为跟踪；
- 服务目录:提供一个服务目录，包括所有服务项与相关Api的端点。

下面我们从这两个主要功能来了解Keystone的概念，和Keystone在Openstack中的作用。

1. Keystone用户与认证

   Keystone为各个Openstack组件提供用户和认证服务，各个组件都必须与Keystone进行交互。比如登陆认证是用户在访问Openstack各个组件中的API时，必须通过Keystone的用户名和密码验证，最终通过Kyestone验证获取token，完成对用户的登陆认证。如果认证失败，该用户将不能访问该API。

**User**

User即用户，它是用一个数字代表使用OpenStack云服务的一个人、系统、或服务。身份验证服务将会验证传入的由用户声明将调用的请求。用户如果已经登录，可就能分配令牌（tokens）访问资源。 用户可能被直接分配给特定的租户，用户行为被包含在租户（tenant），Users通过认证信息（credentials，如密码、API Keys等）进行验证。

**Credentials**

```
Credentials即证书，用户可以通过身份验证，保证数据通常只被一个用户属于或拥有(因为没有其他人应该知道数据)。
```

以下为证书的例子: 一个匹配的用户名和密码 一个匹配的用户名和API键 一个身份认证令牌

**Authentication**

Authentication即认证，认证是确认身份或识别真实性的行为。身份服务通过与用户的一组声明验证以确认传入的请求是由该用户声明过的。这些声明被初始化为一组证书 (username&password, or username and API key)。初始确认后，身份服务将会给用户发布一个确认身份的令牌(Token)，在用户随后的请求中可以使用这个令牌授权访问。

**Token：**

Token即令牌，是一个用户访问资源的任意文本，每一个令牌都有一个范围，描述了可以访问哪些资源。令牌可能随时撤消，是有有效期的。身份认证是支持令牌认证的，它的目的为在未来支持额外的协议。其目的是为了让它首先成为一种集成服务，而不是一种渴望成为丰富的身份存储和管理的解决方案。 T **Tenant：**

Tenant即租户，它是各个服务中的一些可以访问的资源集合。它是一个容器，用于组织和隔离资源，或标识对象。一个租户可以一个客户、账户、组织、项目的映射。例如，在Nova中一个tenant可以是一些机器，在Swift和Glance中一个tenant可以是一些镜像存储，在Neutron中一个tenant可以是一些网络资源。Users默认的总是绑定到某些tenant上。

**Role：**

Role即角色，Roles代表一组用户可以访问的资源权限，例如Nova中的虚拟机、Glance中的镜像。Users可以被添加到任意一个全局的或租户内的角色中。在全局的role中，用户的role权限作用于所有的租户，即可以对所有的租户执行role规定的权限；在租户内的role中，用户仅能在当前租户内执行role规定的权限。

**Domain：**

在KeyStone V3版本将 Tenant 改为 Project 并在其上添加 Domain 的概念，这更加符合现实世界和云服务的映射。利用 Domain 实现真正的多租户（multi-tenancy）架构，Domain 担任 Project 的高层容器。云服务的客户是 Domain 的所有者，他们可以在自己的 Domain 中创建多个 Projects、Users、Groups 和 Roles。通过引入 Domain，云服务客户可以对其拥有的多个 Project 进行统一管理，而不必再向过去那样对每一个 Project 进行单独管理。

**Group：**

Group 是一组 Users 的容器，可以向 Group 中添加用户，并直接给 Group 分配角色，那么在这个 Group 中的所有用户就都拥有了 Group 所拥有的角色权限。通过引入 Group 的概念，Keystone V3 实现了对用户组的管理，达到了同时管理一组用户权限的目的。这与 V2 中直接向 User/Project 指定 Role 不同，使得对云服务进行管理更加便捷。 Domain、Group、Project、User 和 Role 的关系图

如图 2 所示，在一个 Domain 中包含 3 个 Projects,可以通过 Group1 将 Role Sysadmin直接赋予 Domain,那么 Group1 中的所有用户将会对 Domain 中的所有 Projects 都拥有管理员权限。也可以通过 Group2 将 Role Engineer 只赋予 Project3,这样 Group2 中的 User 就只拥有对 Project3 相应的权限，而不会影响其它 Projects。

1. Keystone服务目录

   上文说过，Keystone除了用户管理相关的支撑，还有一个重要的作用是一个服务目录。KeyStone为Openstack各个服务提供了一个REST API端点列表。

2. Service Service即服务，如Nova、Glance、Swift。根据前三个概念（User，Tenant和Role）一个服务可以确认当前用户是否具有访问其资源的权限。但是当一个user尝试着访问其租户内的service时，他必须知道这个service是否存在以及如何访问这个service，这里通常使用一些不同的名称表示不同的服务。在上文中谈到的Role，实际上也是可以绑定到某个service的。

3. Endpoint Endpoint，翻译为“端点”，我们可以理解它是一个服务暴露出来的访问点，如果需要访问一个服务，则必须知道他的endpoint。因此，在keystone中包含一个endpoint模板（endpoint template，在安装keystone的时候我们可以在conf文件夹下看到这个文件），这个模板提供了所有存在的服务endpoints信息。一个endpoint template包含一个URLs列表，列表中的每个URL都对应一个服务实例的访问地址，并且具有public、private和admin这三种权限。public url可以被全局访问（如[http://compute.example.com），private](http://compute.example.com)%2Cprivate/) url只能被局域网访问（如[http://compute.example.local），admin](http://compute.example.local)%2Cadmin/) url被从常规的访问中分离。

### KeyStone部署

OpenStack中所有服务的安装可以说是最简单的。复杂的就在于本身的配置文件的修改和与Keystone相关的配置。还记得上面说的，OpenStack的每个组件如果能够使用都必须在Keystone创建Service和Endpoint吗？好的，我们开始。

1. 安装keystone

```
[root@linux-node1 ~]# yum install -y openstack-keystone httpd mod_wsgi memcached python-memcached
```

1. 设置Memcache开启启动并启动Memcached

```
#keystone使用Memcached来缓存验证后生成的token。
[root@linux-node1 ~]# systemctl enable memcached.service
[root@linux-node1 ~]# vim /etc/sysconfig/memcached
PORT="11211"
USER="memcached"
MAXCONN="1024"
CACHESIZE="64"
OPTIONS="-l 192.168.56.11,::1"
[root@linux-node1 ~]# systemctl start memcached.service
```

1. Keystone配置

KeyStone的配置只需要修改/etc/keystone/keystone.conf即可，涉及Admin Token和Mysql连接，其它均使用默认配置即可。所有配置文件都存放到/etc/keystone（项目名）目录下。日志都存放在/var/log/keystone（项目名）目录下，其它项目也是如此。 好的，我们暂停一下，在后面的部署中，我们会使用这样的方式列出配置，未列出的配置，保持默认不进行修改，除非特别提示到。另外要注意配置的位置，OpenStack所有服务都会有[DEFAULT] [dtabase] 这样的配置部分，请在文中列出的配置部分里面进行配置，切记！。因为确实有相同的配置存在在不同的配置端的情况，这样例外情况，如果没有按要求配置，可能就无法正常运行。

- 配置KeyStone数据库

  OpenStack中所有服务的数据库同步都需要依赖与配置文件中的数据库连接的配置，所以必须先修改完毕配置文件后，再进行数据库的初始化操作。

  ```
  [root@linux-node1 ~]# vim /etc/keystone/keystone.conf
  [database]
  connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone
  ```

- 设置Token和Memcached

在之前的KeyStone版本由于所有的API通信都要请求Keystone来生产Token，之前是存放在MySQL表里，导致表特别大，经常需要手动清理，而且性能下降，现在新的版本我们可以存放在memcache里面了。

```
[token]
provider = fernet
```

- 同步数据库：

```
[root@linux-node1 ~]# su -s /bin/sh -c "keystone-manage db_sync" keystone
```

> 小提示：为什么要使用keystone用户来同步数据呢，因为同步操作会生产日志/var/log/keystone/keystone.log，如果使用root用户，那么生成的文件权限为root用户，keystone启动的时候没有权限读取该文件，会无法启动。如果你的同步执行有问题，那么可以查看日志获取详细的错误信息。

- 验证数据库创建是否正常：

```
[root@linux-node1 ~]# mysql -h 192.168.56.11 -ukeystone -pkeystone -e "use keystone;show tables;"
```

1. 初始化fernet keys

   生成完毕之后，会创建/etc/keystone/fernet-keys目录

   ```
   [root@linux-node1 ~]# keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
   [root@linux-node1 ~]# keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
   ```

2. 初始化keystone

还记得上面说的Openstack的每个组件都必须在Keystone上进行注册。当然也包括Keystone本身。身份认证服务管理了一个与您环境相关的 API 端点的目录。服务使用这个目录来决定如何与您环境中的其他服务进行通信。 OpenStack使用三个API端点变种代表每种服务：admin，internal和public。默认情况下，管理API端点允许修改用户和租户而公共和内部APIs不允许这些操作。在生产环境中，处于安全原因，变种为了服务不同类型的用户可能驻留在单独的网络上。 对实例而言，公共API网络为了让顾客管理他们自己的云在互联网上是可见的。管理API网络在管理云基础设施的组织中操作也是有所限制的。内部API网络可能会被限制在包含OpenStack服务的主机上。此外，OpenStack支持可伸缩性的多区域。为了简单起见，我们这里均使用一个IP地址。192.168.56.11。

```
[root@linux-node1 ~]# keystone-manage bootstrap --bootstrap-password admin \
 --bootstrap-admin-url http://192.168.56.11:5000/v3/ \
 --bootstrap-internal-url http://192.168.56.11:5000/v3/ \
 --bootstrap-public-url http://192.168.56.11:5000/v3/ \
 --bootstrap-region-id RegionOne
```

1. 验证Keystone配置

下面我将上面进行的配置列出来，供读者进行比对，配置应该和本文保持一致。

```
[root@linux-node1 ~]# grep "^[a-z]" /etc/keystone/keystone.conf 
connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone
provider = fernet
```

1. KeyStone启动

OpenStack Keystone使用Apache来进行启动，提高了性能。 配置ServerName，注意一定要配置，不然会有奇怪的问题出现。

```
[root@linux-node1 ~]# vim /etc/httpd/conf/httpd.conf
ServerName 192.168.56.11:80
创建配置文件
[root@linux-node1 ~]# ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
```

启动keystone，并查看端口。

```
[root@linux-node1 ~]# systemctl enable httpd.service
[root@linux-node1 ~]# systemctl start httpd.service
[root@linux-node1 ~]# netstat -ntlp | grep httpd
tcp6       0      0 :::5000                 :::*              LISTEN      3408/httpd
tcp6       0      0 :::80                   :::*              LISTEN      3408/httpd
现在，如果你的Keystone没有正常的监听端口，那么请查看日志，后期我们会不停的强调读者通过查看日志来排查问题，OpenStack的日志是值得信赖的。如果你想让朋友帮助解决问题，请不要使用日志截图的方式，请发送完整的日志。
```

### Keystone权限管理

我们已经成功的运行了Keystone服务，要提供身份认证服务，需要使用域、项目、用户和角色的组合。 首先我们要创建一个超级管理员用户、角色和项目。默认情况下。在创建用户之前，我们需要连接到Keystone。问题来了，现在我们没有任何用户，我们如何登录KeyStone呢？这个时候ADMIN_TOKEN就可以帮忙了，我们可以使用这个超级密码直接登录到KeyStone上，所以说，一定要保护好你的ADMIN_TOKEN。 好的，现在我们要连接到Keystone上，有两种方法：

- 使用--os-token等参数的方式（就是通过参数的方式）
- 使用环境变量（将参数设置为环境变量，keystone直接读取环境变量）
- 设置环境变量

在这里，我们使用三个环境变量用来连接keystone。admin用户和密码就是我们前面使用keystone-manage bootstrap初始化的。

```
[root@linux-node1 ~]# 
export OS_USERNAME=admin
export OS_PASSWORD=admin
export OS_PROJECT_NAME=admin
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_DOMAIN_NAME=Default
export OS_AUTH_URL=http://192.168.56.11:5000/v3
export OS_IDENTITY_API_VERSION=3
```

请注意环境变量的问题，不要打开新的会话进行操作。

1. 创建实验用的demo项目、用户和角色

下面我们创建一个普通用户和租户，我们下面的实验均使用这个普通用户进行Openstack的管理。

```
# openstack domain create --description "An Example Domain" example
# openstack project create --domain default --description "Demo Project" myproject
# openstack user create --domain default --password-prompt myuser
# openstack role create myrole
# openstack role add --project myproject --user myuser myrole
```

> 在创建用户的时候可以使用--password-prompt，然后根据提示输入密码

1. 创建一个服务的项目

   OpenStack服务也需要使用用户名、租户和角色，用来访问OpenStack的各个服务。

   ```
   # openstack project create --domain default --description "Service Project" service
   ```

2. 创建各个服务连接Keystone的账户 后面我们部署的其它服务都需要到Keystone上进行认证，所以现在就可以提前将各个服务的账号创建上。并全部加入service项目。

   - 创建glance用户

     ```
     # openstack user create --domain default --password glance glance
     # openstack role add --project service --user glance admin
     ```

   - 创建nova用户

     ```
     # openstack user create --domain default --password nova nova
     # openstack role add --project service --user nova admin
     ```

   - 创建placement用户

     ```
     # openstack user create --domain default --password placement placement
     # openstack role add --project service --user placement admin
     ```

   - 创建Neutron用户

     ```
     # openstack user create --domain default --password neutron neutron
     # openstack role add --project service --user neutron admin
     ```

   - 创建cinder用户

     ```
     # openstack user create --domain default --password cinder cinder
     # openstack role add --project service --user cinder admin
     ```

### 验证Keystone安装

首先，我们需要取消OS_TOKEN和OS_URL这两个变量。这两个变量是用于引导我们创建Admin用户和Keystone服务自身Service和Endpoint注册时候的用的，现在已经不需要了。

```
[root@linux-node1 ~]# unset OS_AUTH_URL OS_PASSWORD
```

**测试admin用户**

密码为admin，需要输入两次，如果能正常获取token说明配置成功。

```
[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \
--os-project-domain-name Default --os-user-domain-name Default \
--os-project-name admin --os-username admin token issue
Password:
…
#密码为admin，需要输入两次，如果能正常获取token说明配置成功。
```

**测试myuser用户**

密码为你设置的，需要输入两次，如果能正常获取token说明配置成功。

```
[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \
--os-project-domain-name Default --os-user-domain-name Default \
--os-project-name myproject --os-username myuser token issue
Password:
…
```

### 环境变量脚本配置

使用Keystone命令有两种方式，第一种就像上面。我们使用指定--os-username、--os-password和--os-password这样的选项来进行操作，但是这样在我们日常操作中会比较麻烦。第二种方式就是使用环境变量，这样可以避免每次使用都要制定变量。我们将这些常用的变量设置为环境变量。 下面建立环境变量为其它服务部署和配置使用

1. 设置admin环境变量脚本

```
[root@linux-node1 ~]# vim /root/admin-openstack.sh
export OS_PROJECT_DOMAIN_NAME=Default
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_NAME=admin
export OS_USERNAME=admin
export OS_PASSWORD=admin
export OS_AUTH_URL=http://192.168.56.11:5000/v3
export OS_IDENTITY_API_VERSION=3
export OS_IMAGE_API_VERSION=2
```

1. 创建普通用户的环境变量脚本

```
[root@linux-node1 ~]# vim /root/demo-openstack.sh
export OS_PROJECT_DOMAIN_NAME=Default
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_NAME=myproject
export OS_USERNAME=myuser
export OS_PASSWORD=123.com
export OS_AUTH_URL=http://192.168.56.11:5000/v3
export OS_IDENTITY_API_VERSION=3
export OS_IMAGE_API_VERSION=2
```

创建完毕变量后，在后期使用某个账户的权限，只需要source一下就可以使用，例如：

```
[root@linux-node1 ~]# source /root/admin-openstack.sh
[root@linux-node1 ~]# openstack token issue
```

测试demo用户，是否能够获取token

```
[root@linux-node1 ~]# source /root/demo-openstack.sh 
[root@linux-node1 ~]# openstack token issue
```

# 1.4 OpenStack镜像服务Glance

### Glance概述

OpenStack中的Glance是镜像服务，能够提供发现、注册并查询虚拟机镜像，也是Openstack的一个组件或者说项目之一。镜像服务提供了一个Rest API的方式。 OpenStack的Glance镜像可以存放在本地文件系统，也可以存放在OpenStack的对象存储上。默认情况下是本地文件，存放在/var/lib/glance/images/目录下。 Glance还管理着快照，快照也是一种镜像，可以基于快照创建新的虚拟机。

Glance主要有两个组件

（图2.5.2）

- Glance-api接收REST API请求，然后通过其他模块（glance-registry及image store）来完成诸如镜像的查找、获取、上传、删除等操作，api默认监听端口9292。
- glance-registry用于与MySQL数据库交互，用于存储或获取镜像的元数据（metadata）；提供镜像元数据相关的REST接口，通过glance-registry，可以向数据库中写入或获取镜像的各种数据，glance-registry监听端口9191。Glance的数据库中有两张表，一张是image表，另一张是image property表。Image表保存了镜像格式、大小等信息；image property表则主要保存镜像的定制化信息。
- database 用户存放镜像的元数据。
- image store是一个存储的接口层，通过这个接口，glance可以获取镜像，image store支持的存储有Amazon的S3、OpenStack本身的Swift，还有诸如ceph，sheepdog，GlusterFS等分布式存储。 Image store是镜像保存与获取的接口，它仅仅是一个接口层，具体的实现需要外部的存储支持，

### Glance部署

1. 安装Glance

   ```
   [root@linux-node1 ~]# yum install -y openstack-glance
   ```

2. 配置Glance

Glance的配置是通过修改两个组件的配置文件来完成。Glance使用了MySQL和Keystone。

- Glance数据库配置

```
[root@linux-node1 ~]# vim /etc/glance/glance-api.conf 
[database]
connection= mysql+pymysql://glance:glance@192.168.56.11/glance
```

- 设置Keystone

就像在Keystone章节提到了。OpenStack其它组件都需要和Keystone进行交互，来进行用户认证和服务目录的管理。对于Glance来说，Keystone的配置在glance-api.conf和glance-registry.conf都需要设置，而且配置相同。 glance-api.conf配置

```
[root@linux-node1 ~]# vim /etc/glance/glance-api.conf
[keystone_authtoken]
www_authenticate_uri  = http://192.168.56.11:5000
auth_url = http://192.168.56.11:5000
memcached_servers = 192.168.56.11:11211
auth_type = password
project_domain_name = Default
user_domain_name = Default
project_name = service
username = glance
password = glance

[paste_deploy]
flavor=keystone
```

- 设置Glance镜像存储

  ```
  [root@linux-node1 ~]# vim /etc/glance/glance-api.conf
  #默认的存储方式是文件，可以指定镜像存储的路径
  [glance_store]
  stores = file,http
  default_store=file
  filesystem_store_datadir=/var/lib/glance/images/
  #也就是说，我们后面上传的镜像都保存在/var/lib/glance/images目录下。
  ```

1. 同步数据库

   ```
   [root@linux-node1 ~]# su -s /bin/sh -c "glance-manage db_sync" glance
   测试数据库同步情况
   [root@linux-node1 ~]# mysql -h 192.168.56.11 -uglance -pglance -e "use glance;show tables;"
   ```

2. 启动Glance服务

```
[root@linux-node1 ~]# systemctl enable openstack-glance-api.service 
[root@linux-node1 ~]# systemctl start openstack-glance-api.service
```

1. Glance服务注册

   想要让别的服务可以使用Glance，就需要在Keystone上完成服务的注册。注意需要先source一下admin的环境变量。

   ```
   [root@linux-node1 ~]# source /root/admin-openstack.sh
   # openstack service create --name glance --description "OpenStack Image" image
   # openstack endpoint create --region RegionOne image public http://192.168.56.11:9292
   # openstack endpoint create --region RegionOne image internal http://192.168.56.11:9292
   # openstack endpoint create --region RegionOne image admin http://192.168.56.11:9292
   ```

### 验证Glance安装

1. 测试Glance状态

   我们可以直接使用glance命令列出现在的所有镜像，如果出现一个空列表，说明Glance启动并配置完成。

   ```
   [root@linux-node1 ~]# source /root/admin-openstack.sh 
   [root@linux-node1 ~]# openstack image list
   ```

   如果未出现报错，基本上可以确实部署没有问题，可以上传镜像进行测试。

2. Glance镜像上传测试

在刚开始实施OpenStack平台阶段，如果没有制作镜像。可以使用一个实验的镜像进行测试，这是一个小的Linux系统。

```
[root@linux-node1 ~]# cd /usr/local/src
[root@linux-node1 src]# wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img

#上传并注册一个镜像。注意以后只要看到使用openstack命令，都需要保证，已经使用source命令导入了环境变量。因为这些操作都需要环境变量里面的账号进行认证授权。

[root@linux-node1 src]# openstack image create "cirros" --disk-format qcow2 \
--container-format bare --file cirros-0.4.0-x86_64-disk.img --public
```

# 上传完毕后可以通过openstack image list再次查看上传的镜像。默认情况下，Glance使用本地文件系统来保存上传的镜像。默认存放在/var/lib/glance/images/目录下，会将镜像以image id来进行命名。

```
[root@linux-node1 src]# openstack image list
+--------------------------------------+--------+--------+
| ID                                   | Name   | Status |
+--------------------------------------+--------+--------+
| cf154a84-a73a-451b-bcb3-83c98e7c0d3e | cirros | active |
+--------------------------------------+--------+--------+
```

# 同时，这个文件会被保存到配置文件设置的目录下，并以ID命名。

```
[root@linux-node1 ~]# ls -l /var/lib/glance/images/
total 12980
-rw-r----- 1 glance glance 13287936 Dec  1 14:11 65f9826a-5ccb-47d9-8a1a-75e31fb88a4a
```

Glance在OpenStack组件中，属于比较简单的一个。我建议读者如果一直跟着做实验的话，现在是时候停下来总结一下了。因为后面的服务的部署流程和glance都大同小异。

# 3.5 Placement服务安装

### 3.5.1 Placement概述

### 3.5.2 Placement部署

1. Placement服务注册

```
# openstack service create --name placement   --description "Placement API" placement
# openstack endpoint create --region RegionOne   placement public http://192.168.56.11:8778
# openstack endpoint create --region RegionOne   placement internal http://192.168.56.11:8778
# openstack endpoint create --region RegionOne   placement admin http://192.168.56.11:8778
```

1. 安装Placement

   ```
   [root@linux-node1 ~]# yum install -y openstack-placement-api
   ```

2. 配置Palacement

```
[root@linux-node1 ~]# vim /etc/placement/placement.conf
[placement_database]
connection = mysql+pymysql://placement:placement@192.168.56.11/placement
[api]
auth_strategy = keystone
[keystone_authtoken]
auth_url = http://192.168.56.11:5000/v3
memcached_servers = 192.168.56.11:11211
auth_type = password
project_domain_name = default
user_domain_name = default
project_name = service
username = placement
password = placement

[root@linux-node1 ~]# vim /etc/httpd/conf.d/00-placement-api.conf 

#增加下面配置
<Directory /usr/bin>
Require all granted
</Directory>

增加后如下：

Listen 8778

<VirtualHost *:8778>
  <Directory /usr/bin>
Require all granted
</Directory>
  WSGIProcessGroup placement-api
  WSGIApplicationGroup %{GLOBAL}
  WSGIPassAuthorization On
  WSGIDaemonProcess placement-api processes=3 threads=1 user=placement group=placement
  WSGIScriptAlias / /usr/bin/placement-api
  <IfVersion >= 2.4>
    ErrorLogFormat "%M"
  </IfVersion>
  ErrorLog /var/log/placement/placement-api.log
  #SSLEngine On
  #SSLCertificateFile ...
  #SSLCertificateKeyFile ...
</VirtualHost>

Alias /placement-api /usr/bin/placement-api
<Location /placement-api>
  SetHandler wsgi-script
  Options +ExecCGI
  WSGIProcessGroup placement-api
  WSGIApplicationGroup %{GLOBAL}
  WSGIPassAuthorization On
</Location>
```

1. 同步数据库

```
[root@linux-node1 ~]# su -s /bin/sh -c "placement-manage db sync" placement
```

1. 重启httpd

```
[root@linux-node1 ~]# systemctl restart httpd
```

# 1.6 OpenStack计算服务Nova

Nova是OpenStack最早的两个模块之一（另一个是对象存储）。在OpenStack体系中是计算资源虚拟化的项目。同时Nova也是OpenStack项目中组件最多的一个项目。在中小型部署中，我们常常把除nova-compute之外的其它组件部署到一台服务器上，称之为控制节点。将nova-compute部署到单独的一台服务器上，称之为计算节点。

### Nova服务组件

- Nova-Api服务

  主要用于接收和响应外部请求，它支持OpenStack API、Amazon EC2 等API

  - nova-api组件实现了RESTful API功能，是外部访问Nova的唯一途径。
  - 接收外部的请求并通过Message Queue将请求发送给其他的服务组件，同时也兼容EC2 API，所以也可以用EC2的管理工具对nova进行日常管理。

- Nova-Cert服务

  是Nova的证书管理服务，用来为EC2服务提供身份验证，仅仅是在EC2 API的请求中使用。

- Nova-Scheduler服务

  用于Nova的调度工作，在创建虚拟机时，由它选择将虚拟机创建在哪台计算节点上。

- Nova-Conductor服务

  这个是服务是计算节点访问数据库时的一个中间层，它出现的作用是防止计算节点的Nova-Compute服务直接访问数据库。同时这个中间层可以进行水平扩展。

- Nova-Console服务

  Nova增强了它的控制台服务。控制台服务允许用户可以通过代理服务器访问虚拟化实例。这就涉及了一对新的守护进程（nova-console和nova-consoleauth).

- Nova-Consoleauth服务

  主要用于控制台的用户访问授权

- Nova-Novncproxy服务

  用于为用户访问虚拟机提供了一个VNC的代理。通过VNC协议，可以支持基于浏览器的novnc客户端，后面你在网页打开的console界面就是依靠这个服务提供的。

- Nova-Compute

  Nova-compute是Nova最重要的组件之一。

  - nova-compute 一般运行在计算节点上，通过Message Queue接收并管理VM的生命周期。
  - Nova-compute 通过Libvirt管理KVM，通过XenAPI管理Xen等。

### Nova控制节点部署

首先我们需要先在控制节点部署除nova-compute之外的其它必备的服务。

1. 控制节点安装

```
[root@linux-node1 ~]# yum install -y openstack-nova-api \
  openstack-nova-conductor \
  openstack-nova-novncproxy openstack-nova-scheduler
```

nova.conf是配置Nova的核心配置文件，Nova的配置主要围绕该配置文件。

- 数据库配置

```
[root@linux-node1 ~]# vim /etc/nova/nova.conf
[api_database]
connection= mysql+pymysql://nova:nova@192.168.56.11/nova_api
[database]
connection= mysql+pymysql://nova:nova@192.168.56.11/nova
```

- RabbitMQ配置

  Nova和其它组件之间，以及Nova各个服务之间的通信都要通过消息队列来进行，所以需要配置RabbmitMQ的连接。注意是DEFAULT配置栏目下面。

```
[root@linux-node1 ~]# vim /etc/nova/nova.conf
[DEFAULT]
transport_url = rabbit://openstack:openstack@192.168.56.11
```

- Keystone相关配置

  Nova需要连接到Keystone进行认证和服务管理。

```
[root@linux-node1 ~]# vim /etc/nova/nova.conf
[api]
auth_strategy=keystone
[keystone_authtoken]
www_authenticate_uri = http://192.168.56.11:5000/
auth_url = http://192.168.56.11:5000/
memcached_servers = 192.168.56.11:11211
auth_type = password
project_domain_name = Default
user_domain_name = Default
project_name = service
username = nova
password = nova
```

- 关闭Nova的防火墙功能

  因为我们要使用Neutron的防火墙功能，所以关闭Nova自己的防火墙驱动。

```
[DEFAULT]
use_neutron=true
firewall_driver = nova.virt.firewall.NoopFirewallDriver
```

- VNC配置

  vnc的配置用于虚拟机VNC端口的监听和novncproxy的配置，这样后面我们通过DashBoard的novnc界面就可以查看虚拟机的界面。

```
[root@linux-node1 ~]# vim /etc/nova/nova.conf
[vnc]
enabled=true
server_listen = 0.0.0.0
server_proxyclient_address = 192.168.56.11
```

- 设置glance

```
[glance]
api_servers = http://192.168.56.11:9292
```

- 在 [oslo_concurrency] 部分，配置锁路径：

```
[oslo_concurrency]
lock_path=/var/lib/nova/tmp
```

- 设置启用的api

```
[DEFAULT]
enabled_apis=osapi_compute,metadata
```

- 设置placement

# 新增到配置文件末尾

```
[placement]
region_name = RegionOne
project_domain_name = Default
project_name = service
auth_type = password
user_domain_name = Default
auth_url = http://192.168.56.11:5000/v3
username = placement
password = placement
```

1. 同步数据库

```
[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage api_db sync" nova
```

- 注册cell0数据库

```
[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 map_cell0" nova
```

- 创建cell1的cell

```
[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 create_cell --name=cell1 --verbose" nova
```

- 同步nova数据库

```
[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage db sync" nova
```

- 验证cell0和cell1的注册是否正确

```
[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 list_cells" nova
```

- 测试数据库同步情况

```
[root@linux-node1 ~]# mysql -h 192.168.56.11 -unova -pnova -e "use nova;show tables;"
[root@linux-node1 ~]# mysql -h 192.168.56.11 -unova -pnova -e "use nova_api;show tables;"
```

1. 启动Nova Service
   - 设置开机自动启动

```
[root@linux-node1 ~]# systemctl enable openstack-nova-api.service \
openstack-nova-scheduler.service \
openstack-nova-conductor.service \
openstack-nova-novncproxy.service
```

- 启动控制节点服务

```
[root@linux-node1 ~]# systemctl start openstack-nova-api.service \
  openstack-nova-scheduler.service openstack-nova-conductor.service \
  openstack-nova-novncproxy.service
```

1. Nova服务注册

   和Keystone、Glance一样，Nova服务也需要在Keystone上做注册，并告诉Keystone它所暴漏的API。

   ```
   # source admin-openstack.sh
   # openstack service create --name nova --description "OpenStack Compute" compute
   # openstack endpoint create --region RegionOne compute public http://192.168.56.11:8774/v2.1
   # openstack endpoint create --region RegionOne compute internal http://192.168.56.11:8774/v2.1
   # openstack endpoint create --region RegionOne compute admin http://192.168.56.11:8774/v2.1
   ```

   - 验证控制节点服务

```
[root@openstack-node1 ~]# openstack compute service list
+----+----------------+-----------------------------+----------+---------+-------+----------------------------+
| ID | Binary         | Host                        | Zone     | Status  | State | Updated At                 |
+----+----------------+-----------------------------+----------+---------+-------+----------------------------+
|  4 | nova-scheduler | linux-node1.example.com | internal | enabled | up    | 2020-02-04T04:48:47.000000 |
| 11 | nova-conductor | linux-node1.example.com | internal | enabled | up    | 2020-02-04T04:48:47.000000 |
+----+----------------+-----------------------------+----------+---------+-------+----------------------------+
```

### Nova计算节点部署

根据我们开始实验规划，我们将使用一个控制节点和一个计算节点。计算节点是真正运行虚拟机的服务器，对CPU、内存和硬盘要求都比较高，通常是配置比较强劲的服务器充当。当然在实验的过程中，完全可以和控制节点在一台服务器上。好的，现在请你打开第二台虚拟机并且登陆。

1. 计算节点安装

计算节点需要依赖与虚拟化技术来运行虚拟机实例，还记得前面我们讨论OpenStack与虚拟化之间的关系吗？OpenStack默认使用KVM作为Hypervisor，所以在计算节点上需要安装KVM和libvirt。这样OpenStack的控制节点上的nova服务就可以调用Nova-compute进行虚拟机的创建和管理。

```
[root@linux-node2 ~]# yum install -y openstack-nova-compute
```

- 复制配置文件

  计算节点的配置文件和控制节点的基本相同，我们可以在控制节点nova.conf的基础上进行增加即可，所以首先请将控制节点的配置文件直接复制过来吧。

```
[root@linux-node1 ~]# scp /etc/nova/nova.conf 192.168.56.12:/etc/nova/nova.conf
[root@linux-node2 ~]# chown root:nova /etc/nova/nova.conf
```

- 删除多余的数据配置

  删除数据库配置 相对于控制节点的配置，计算节点需要变更VNC的配置。

- 修改VNC配置

  计算节点需要监听所有IP，同时设置novncproxy的访问地址

```
[vnc]
enabled=true
server_listen = 0.0.0.0
server_proxyclient_address = 192.168.56.12
novncproxy_base_url = http://192.168.56.11:6080/vnc_auto.html
```

- 虚拟化适配

  查看计算节点的服务器是否支持硬件虚拟化。

```
[root@linux-node2 ~]# egrep -c '(vmx|svm)' /proc/cpuinfo
如果返回的是0，表示不支持硬件虚拟化，需要在nova.conf里面设置
[libvirt]
virt_type=qemu
如果返回的是非0的值，那么表示计算节点服务器支持硬件虚拟化，需要在nova.conf里面设置
[libvirt]
virt_type=kvm
```

1. 启动nova-compute

```
# systemctl enable libvirtd.service openstack-nova-compute.service
# systemctl start libvirtd.service openstack-nova-compute.service
```

1. 计算节点加入控制节点

当添加新的计算节点时，必须在控制器节点上运行nova-manage cell_v2 discover_hosts来注册这些新的计算节点。

```
[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova
```

或者，您可以在/etc/nova/nova.conf中设置适当的间隔:

```
[scheduler]
discover_hosts_in_cells_interval = 300
```

1. 验证计算节点

在控制节点再次执行host list，可以发现nova-compute已经成功注册。 再次执行host list可以看到。计算节点已经注册成功。

```
[root@linux-node1 ~]# openstack host list
+------------------------+-------------+----------+
| Host Name              | Service     | Zone     |
+------------------------+-------------+----------+
| linux-node1.example.com | conductor   | internal |
| linux-node1.example.com | consoleauth | internal |
| linux-node1.example.com | scheduler   | internal |
| linux-node2.example.com | compute     | nova     |
+------------------------+-------------+----------+
```

### 验证Nova安装

```
[root@linux-node1 ~]# openstack compute service list
+----+------------------+-------------------------+----------+---------+-------+----------------------------+
| ID | Binary           | Host                    | Zone     | Status  | State | Updated At                 |
+----+------------------+-------------------------+----------+---------+-------+----------------------------+
|  1 | nova-consoleauth | linux-node1.example.com | internal | enabled | up    | 2018-02-03T10:38:30.000000 |
|  2 | nova-conductor   | linux-node1.example.com | internal | enabled | up    | 2018-02-03T10:38:30.000000 |
|  3 | nova-scheduler   | linux-node1.example.com | internal | enabled | up    | 2018-02-03T10:38:30.000000 |
|  6 | nova-compute     | linux-node2.example.com | nova     | enabled | up    | None                       |
+----+------------------+-------------------------+----------+---------+-------+----------------------------+
```

验证所有的Endpoint API是否正确

```
[root@linux-node1 ~]# openstack catalog list
+-----------+-----------+--------------------------------------------+
| Name      | Type      | Endpoints                                  |
+-----------+-----------+--------------------------------------------+
| placement | placement | RegionOne                                  |
|           |           |   public: http://192.168.56.11:8778        |
|           |           | RegionOne                                  |
|           |           |   internal: http://192.168.56.11:8778      |
|           |           | RegionOne                                  |
|           |           |   admin: http://192.168.56.11:8778         |
|           |           |                                            |
| keystone  | identity  | RegionOne                                  |
|           |           |   public: http://192.168.56.11:5000/v3/    |
|           |           | RegionOne                                  |
|           |           |   admin: http://192.168.56.11:35357/v3/    |
|           |           | RegionOne                                  |
|           |           |   internal: http://192.168.56.11:35357/v3/ |
|           |           |                                            |
| glance    | image     | RegionOne                                  |
|           |           |   public: http://192.168.56.11:9292        |
|           |           | RegionOne                                  |
|           |           |   admin: http://192.168.56.11:9292         |
|           |           |                                            |
| nova      | compute   | RegionOne                                  |
|           |           |   admin: http://192.168.56.11:8774/v2.1    |
|           |           | RegionOne                                  |
|           |           |   public: http://192.168.56.11:8774/v2.1   |
|           |           | RegionOne                                  |
|           |           |   internal: http://192.168.56.11:8774/v2.1 |
|           |           |                                            |
+-----------+-----------+--------------------------------------------+
```

检查cells和placement API状态

```
[root@linux-node1 ~]# nova-status upgrade check
+---------------------------+
| Upgrade Check Results     |
+---------------------------+
| Check: Cells v2           |
| Result: Success           |
| Details: None             |
+---------------------------+
| Check: Placement API      |
| Result: Success           |
| Details: None             |
+---------------------------+
| Check: Resource Providers |
| Result: Success           |
| Details: None             |
+---------------------------+
```

# 1.7 OpenStack网络服务Neutron

上一章我们讲到Nova服务提供了OpenStack平台计算资源池，实现了计算即服务。那么仅仅有一台孤立的云主机是无法正常使用的，我们需要把它接入网络，才能正常对外提供服务。

### Neutron概述

OpenStack Networking Services（Neutron），OpenStack 网络服务，OpenStack核心项目之一，由早期的nova-network独立成一个子项目后演变而来，它为OpenStack提供了云计算环境下的虚拟网络功能。

在OpenStack世界中，网络组件最初叫nova-network，nova-network实现简单，直接采用基于Linux内核的Linux网桥。由于少了很多层抽象，所以比较简单稳定算。但是它的不足之处是支持的插件少（只支持Linux网桥），支持的网络拓扑少（只支持flat, vlan)。

为了支持更多的插件，支持更多的网络拓扑，于是有了quantum工程。quantum插件不仅支持Linux网桥，也支持OpenvSwitch，以及一些SDN的插件和其他商业公司的插件。在网络拓扑上，除了支持flat，vlan外，还支持gre, vxlan。quantum因为和一家公司的名称冲突，于是，改名为neutron。

1. Neutron Server

这一部分包含守护进程neutron-server和各种插件neutron-*-plugin。neutron-server提供API接口，并把对API的调用请求传给已经配置好的插件进行后续处理。插件需要访问数据库来维护各种配置数据和对应关系，例如路由器、网络、子网、端口、浮动IP、安全组等等。

1. ML2(Module Layer2)plugin

上述整体框架中提到Neutron组件内部有很多个不同的插件（plugin），而在Neutron中，实现一个插件包括两个部分的内容：一部分与数据库db打交道称之为plugin（虽然都是plugin，但是这个是具体实现中的plugin），一部分是调用具体的网络设备真正干活的称之为agent。 与db进行交互的plugin在功能上有很多重复，所以在代码上有很多重复，因此在Neutron中提供了一个公共的plugin叫ML2(ModuleLayer2) plugin。所以ML2 plugin的第一个作用就是：提供与数据库交互的公共plugin。 ML2的第二个作用就是实现支持多种pulgin（原先使用linux bridge，就不能用openvswitch），ML2通过MechanismDriver实现。MechanismDriver的作用是将agent的类型agent_type和vif_type关联，这样vif_type就可以直接通过扩展api设置了。 ML2的第三个作用就是支持不同的网络拓扑，如flat, vlan, gre, vxlan，直接在ml2_conf.ini这个配置文件里都配上即可。

1. L3-Agent

   上面的ml2解决的只是网络中L2层的问题，对于L3层的路由功能，neturon单独用l3-agent实现，为客户机访问外部网络提供3层转发服务。 L3 层的路由分静态路由和动态路由两种： 在 Linux 中，通过打开 ipv4 forward 特性可以让数据包从一块网卡路由到另外一块网卡上。 动态路由，如内部网关协议 RIP，OSPF；如外部网关协议 BGP。能够自动地学习建立路由表。

目前 Neutron 只支持静态路由，要点如下： 对于不同 tenant 子网通过 namespace 功能进行隔离，在 Linux 中，一个命名空间 namespace 您可以简单理解成 linux 又启动了一个新的 TCP/IP 栈的进程。多个 tenant 意味着多个 namespace，也意味着多个 TCP/IP 栈。 对于同一tenant 中的不同子网的隔离通过 iptables 来做，也意味着，同一tenant中的相同子网的两个虚机不用走 L3 层，直接走 L2 层能通，没问题；但如果同一tenant中的不同子网的两个虚机要通讯的话，必须得绕道 L3-agent 网络节点，这是影响性能的。

1. dhcp-agent

Dhcp-agent主要负责为各个租户网络提供DHCP服务。 L4-L7的Agent 至于再之上的L4-L7层的FwaaS,VPNaaS, DNATaaS, DNSaaS的内容，在neutron又出来一个新的服务框架用于将所有这些除L2层以外的网络服务类似于上述ml2的思想在数据库这块一网打尽。 下面我们通过一个单一扁平的提供者网络FLAT来部署neutron。为虚拟机提供网络资源。

### Neutron控制节点部署

1. Neutron安装

```
[root@linux-node1 ~]# yum install -y openstack-neutron openstack-neutron-ml2 \
openstack-neutron-linuxbridge ebtables
```

1. Neutron配置
   - Neutron数据库配置

```
[root@linux-node1 ~]# vim /etc/neutron/neutron.conf
[database]
connection = mysql+pymysql://neutron:neutron@192.168.56.11:3306/neutron
```

- Keystone连接配置

```
[DEFAULT]
…
#注意：该配置默认不存在，需要添加
auth_strategy = keystone

[keystone_authtoken]
www_authenticate_uri = http://192.168.56.11:5000
auth_url = http://192.168.56.11:5000
memcached_servers = 192.168.56.11:11211
auth_type = password
project_domain_name = default
user_domain_name = default
project_name = service
username = neutron
password = neutron
```

- RabbitMQ相关设置

```
[root@linux-node1 ~]# vim /etc/neutron/neutron.conf
[DEFAULT]
transport_url = rabbit://openstack:openstack@192.168.56.11
#请注意是在DEFAULT配置栏目下，因为该配置文件有多个transport_url的配置
```

- Neutron网络基础配置

```
#注意：该配置默认不存在，需要添加
[DEFAULT]
core_plugin = ml2
# 这个配置没有错，就是设置为空
service_plugins =
```

- 网络拓扑变化Nova通知配置

```
[DEFAULT]
# 这两行配置需要新增
notify_nova_on_port_status_changes = True
notify_nova_on_port_data_changes = True

# 在配置文件最后增加以下配置段
[nova]
auth_url = http://192.168.56.11:5000
auth_type = password
project_domain_name = default
user_domain_name = default
region_name = RegionOne
project_name = service
username = nova
password = nova
```

- 在 [oslo_concurrency] 部分，配置锁路径：

```
[oslo_concurrency]
lock_path = /var/lib/neutron/tmp
```

1. Neutron ML2配置

还是在控制节点上，我们需要配置Neutron ML2。ML2使用Linux桥接机制为实例创建Layer-2的虚拟网络基础设施。

```
[root@linux-node1 ~]# vim /etc/neutron/plugins/ml2/ml2_conf.ini

#以下所有配置目前均需要新增，默认配置文件已经移除，注意删除注释。

[ml2]
type_drivers = flat,vlan,gre,vxlan,geneve #支持多选，所以把所有的驱动都选择上。
tenant_network_types = flat,vlan,gre,vxlan,geneve #支持多项，所以把所有的网络类型都选择上。
mechanism_drivers = linuxbridge,openvswitch,l2population #选择插件驱动，支持多选，开源的有linuxbridge和openvswitch
#启用端口安全扩展驱动
extension_drivers = port_security,qos 

[ml2_type_flat]
#设置网络提供
flat_networks = provider

[securitygroup]
#启用ipset
enable_ipset = True
```

1. Neutron Linuxbridge配置

```
[root@linux-node1 ~]# vim /etc/neutron/plugins/ml2/linuxbridge_agent.ini
#以下所有配置目前均需要新增，默认配置文件已经移除，注意删除注释。

[linux_bridge]
#映射虚拟网络接口和实际网络接口的对应
physical_interface_mappings = provider:eth0 

[vxlan]
#禁止vxlan网络
enable_vxlan = False

[securitygroup]
#设置使用Linux Bridge桥接的防火墙驱动和安全组
firewall_driver = neutron.agent.linux.iptables_firewall.IptablesFirewallDriver
enable_security_group = True
```

1. Neutron DHCP-Agent配置

Neutron中的dhcp-agent用来为云主机动态分配IP地址，DHCP Agent默认是通过调用dnsmasq来实现DHCP的分配工作。默认情况下dhcp-agent和后面要介绍的Lbaas-agent都需要依赖namespace,所以开始之前我们需要先介绍下linux的namespache。

**什么是namespace** Namespace(命名空间)，简单的说就是不同的名字空间，打个简单的比方，进程在a空间是叫a进程，在b空间也就可能叫b进程。为什么要有命名空间呢？主要是满足虚拟化的一些需求。试想，如果有一台机器，不管它是个人pc还是服务器，或是 网络交换机，路由器，一般情况下，它也就被一个用户使用。但是如果某一天，另外一个用户也要使用同样的机器，一种方法是再买一个机器，装上同样的 linux系统，但是还有一种更好的方法，就是使用容器（container），每个用户有属于自己的容器，而且容器之间相互隔离，而namespace 就是实现容器的一种手段。Namespace可以实现pid、net、ipc、mnt、uts、user等namespace将容器的进程、网络、消息、文件系统、UTS("UNIX Time-sharing System")和用户空间隔离开。在Docker中，我们会详解讲解namespace。

```
[root@linux-node1 ~]# vim /etc/neutron/dhcp_agent.ini
[DEFAULT]
interface_driver = linuxbridge
dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq
enable_isolated_metadata = True
```

1. Neutron metadata配置

metadata agent为实例提供诸如凭证的配置信息。需要设置Keystone的链接和nova的连接参数。

```
[root@linux-node1 ~]# vim /etc/neutron/metadata_agent.ini
[DEFAULT]
nova_metadata_host = 192.168.56.11
#注意这个是为元数据代理设置的密码，需要和nova的配置相对应。
metadata_proxy_shared_secret = unixhot.com
```

1. Neutron相关配置在nova.conf

Neutron的配置，需要修改nova的配置文件，因为默认大多数OpenStack发行版里nova.conf里面的网络相关的配置都是比较老的，使用的最早的nova-network的配置。所以需要进行修改。

```
[root@linux-node1 ~]# vim /etc/nova/nova.conf 
[neutron]
auth_url = http://192.168.56.11:5000
auth_type = password
project_domain_name = default
user_domain_name = default
region_name = RegionOne
project_name = service
username = neutron
password = neutron
service_metadata_proxy = true
metadata_proxy_shared_secret = unixhot.com
#注意这里设置的共享秘钥需要和之前的对应上。
```

1. 配置完毕后，我们需要设置一个软连接，因为默认服务会读取plugin.ini。

```
[root@linux-node1 ~]# ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini
```

1. 同步数据库

```
[root@linux-node1 ~]# su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \
--config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron
```

1. 重启计算API 服务

```
[root@linux-node1 ~]# systemctl restart openstack-nova-api.service
```

1. 启动网络服务并配置他们开机自启动。

```
# systemctl enable neutron-server.service \
  neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
  neutron-metadata-agent.service
# systemctl start neutron-server.service \
  neutron-linuxbridge-agent.service neutron-dhcp-agent.service \
  neutron-metadata-agent.service
```

1. Neutron服务注册

```
创建service
# openstack service create --name neutron --description "OpenStack Networking" network
创建endpoint
# openstack endpoint create --region RegionOne network public http://192.168.56.11:9696
# openstack endpoint create --region RegionOne network internal http://192.168.56.11:9696
# openstack endpoint create --region RegionOne network admin http://192.168.56.11:9696
```

1. 测试Neutron安装**

```
[root@openstack-compute-node1 neutron]# openstack network agent list
WARNING: Failed to import plugin orchestration.
WARNING: Failed to import plugin data_processing.
+--------------------------------------+--------------------+-------------------------------------+-------------------+-------+-------+---------------------------+
| ID                                   | Agent Type         | Host                                | Availability Zone | Alive | State | Binary                    |
+--------------------------------------+--------------------+-------------------------------------+-------------------+-------+-------+---------------------------+
| c4a78188-a3ad-4cda-8c47-41f854aad375 | Linux bridge agent | openstack-compute-node1.dianjoy.com | None              | :-)   | UP    | neutron-linuxbridge-agent |
| e2325b10-281b-447c-b46f-7875c0eda1fc | Metadata agent     | openstack-compute-node1.dianjoy.com | None              | :-)   | UP    | neutron-metadata-agent    |
| fb73fabc-2825-42c4-ae24-ea50bb1d37b8 | DHCP agent         | openstack-compute-node1.dianjoy.com | nova              | :-)   | UP    | neutron-dhcp-agent        |
+--------------------------------------+--------------------+-------------------------------------+-------------------+-------+-------+---------------------------+
```

如果可以正常输出，基本上Neutron的安装就没有问题。

### Neutron计算节点部署

1. 安装软件包

```
 [root@linux-node2 ~]# yum install -y openstack-neutron openstack-neutron-linuxbridge ebtables
```

1. 配置计算节点Neutron
   - Keystone连接配置

```
[root@linux-node2 ~]# vim /etc/neutron/neutron.conf
[DEFAULT]
auth_strategy = keystone

[keystone_authtoken]
www_authenticate_uri = http://192.168.56.11:5000
auth_url = http://192.168.56.11:5000
memcached_servers = 192.168.56.11:11211
auth_type = password
project_domain_name = default
user_domain_name = default
project_name = service
username = neutron
password = neutron
```

- RabbitMQ相关设置

```
[root@linux-node1 ~]# vim /etc/neutron/neutron.conf
[DEFAULT]
transport_url = rabbit://openstack:openstack@192.168.56.11
#请注意是在DEFAULT配置栏目下，因为该配置文件有多个transport_url的配置
```

- 锁路径

```
[oslo_concurrency]
lock_path = /var/lib/neutron/tmp
```

1. 配置LinuxBridge配置

```
[root@linux-node1 ~]# scp /etc/neutron/plugins/ml2/linuxbridge_agent.ini 192.168.56.12:/etc/neutron/plugins/ml2/
```

1. 设置计算节点的nova.conf

```
[root@linux-node2 ~]# vim /etc/nova/nova.conf
[neutron]
auth_url = http://192.168.56.11:5000
auth_type = password
project_domain_name = default
user_domain_name = default
region_name = RegionOne
project_name = service
username = neutron
password = neutron
```

1. 重启计算服务

```
[root@linux-node2 ~]# systemctl restart openstack-nova-compute.service
```

1. 启动计算节点linuxbridge-agent

```
[root@linux-node2 ~]# systemctl enable neutron-linuxbridge-agent.service
[root@linux-node2 ~]# systemctl start neutron-linuxbridge-agent.service
```

1. 在控制节点上测试Neutron安装

```
[root@linux-node1 ~]# source admin-openstack.sh 
[root@linux-node1 ~]# openstack network agent list
+--------------------------------------+--------------------+-----------------------------+-------------------+-------+-------+---------------------------+
| ID                                   | Agent Type         | Host                        | Availability Zone | Alive | State | Binary                    |
+--------------------------------------+--------------------+-----------------------------+-------------------+-------+-------+---------------------------+
| 11f1de57-836f-412f-b9b4-51dcdc9ae931 | Metadata agent     | linux-node1.example.com | None              | :-)   | UP    | neutron-metadata-agent    |
| 197b84cd-7d6e-4ed2-9fa0-46499fe7cdb7 | Linux bridge agent | linux-node2.example.com | None              | :-)   | UP    | neutron-linuxbridge-agent |
| 531afd6d-ee81-4b64-a0f4-ec5fd523eff8 | DHCP agent         | linux-node1.example.com | nova              | :-)   | UP    | neutron-dhcp-agent        |
| dfc431ff-dede-4a54-8371-653c6e72ffd9 | Linux bridge agent | linux-node1.example.com | None              | :-)   | UP    | neutron-linuxbridge-agent |
+--------------------------------------+--------------------+-----------------------------+-------------------+-------+-------+---------------------------+
```

看是否有linux-node2.example.com的Linux bridge agent

### Bug解决

```
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent [req-68a7936c-2bbc-454e-bee4-6785cd3dce7b - - - - -] Error in agent loop. Devices info: {'current': set(['tap07dc4c9c-f3']), 'timestamps': {'tap07dc4c9c-f3': 7}, 'removed': set([]), 'added': set(['tap07dc4c9c-f3']), 'updated': set([])}: KeyError: 'gateway'
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent Traceback (most recent call last):
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 465, in daemon_loop
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     sync = self.process_network_devices(device_info)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/osprofiler/profiler.py", line 160, in wrapper
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     result = f(*args, **kwargs)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 214, in process_network_devices
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     resync_a = self.treat_devices_added_updated(devices_added_updated)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/osprofiler/profiler.py", line 160, in wrapper
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     result = f(*args, **kwargs)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 231, in treat_devices_added_updated
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     self._process_device_if_exists(device_details)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 258, in _process_device_if_exists
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     device, device_details['device_owner'])
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 585, in plug_interface
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     network_segment.mtu)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 521, in add_tap_interface
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     return False
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/oslo_utils/excutils.py", line 220, in __exit__
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     self.force_reraise()
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/oslo_utils/excutils.py", line 196, in force_reraise
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     six.reraise(self.type_, self.value, self.tb)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 513, in add_tap_interface
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     tap_device_name, device_owner, mtu)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 546, in _add_tap_interface
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     mtu):
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 497, in ensure_physical_in_bridge
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     physical_interface)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 286, in ensure_flat_bridge
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     if self.ensure_bridge(bridge_name, physical_interface):
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 455, in ensure_bridge
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     self.update_interface_ip_details(bridge_name, interface)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 417, in update_interface_ip_details
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     gateway)
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 401, in _update_interface_ip_details
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     dst_device.route.add_gateway(gateway=gateway['gateway'],
2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent KeyError: 'gateway'
```

分别修改控制节点和计算节点上的Neutron源码，并重启服务

1. 将priority修改为metric

```
[root@openstack-compute-node3 ~]# vim +1503 /usr/lib/python2.7/site-packages/neutron/agent/linux/ip_lib.py

#'priority': get_attr(route, 'RTA_PRIORITY'),
'metric': get_attr(route, 'RTA_PRIORITY'),
```

1. 将gateway修改为via

```
[root@openstack-compute-node3 ~]# vim +402 /usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py

#dst_device.route.add_gateway(gateway=gateway['gateway'],
            dst_device.route.add_gateway(gateway=gateway['via'],
                                         metric=metric)
            #src_device.route.delete_gateway(gateway=gateway['gateway'])
            src_device.route.delete_gateway(gateway=gateway['via'])
```

计算节点重启服务

```
[root@openstack-compute-node3 ~]# systemctl restart neutron-linuxbridge-agent
```

控制节点重启服务

```
[root@openstack-compute-node1 ~]# systemctl restart neutron-server.service   neutron-linuxbridge-agent.s
```

# 1.8 创建第一台OpenStack云主机

好的，到目前为止，你已经完成了启动一台虚拟机所有的必备条件。

- MySQL：为各个服务提供数据存储
- RabbitMQ：为各个服务之间通信提供交通枢纽
- KeyStone：为各个服务器之间通信提供认证和服务注册
- Glance：为虚拟机提供镜像管理
- Nova：为虚拟机提供计算资源
- Neutron：为虚拟机提供网络资源。

现在你可以着手启动一台虚拟机，剩下的OpenStack服务都可以认为是可选的，不过通常我们会用到Dashboard来通过Web界面来管理，后面的章节我们会讲到，现在我们使用命令来创建我们的第一台虚拟机。

### 创建FLAT网络

首先我们需要创建一个网络。我们现在为demo租户，创建一个FLAT类型的网络。如下图所示。

1. 创建Flant网络

```
[root@linux-node1 ~]# source admin-openstack.sh
[root@linux-node1 ~]# openstack network create  --share --external \
  --provider-physical-network provider \
  --provider-network-type flat provider
```

1. 查看网络

```
[root@linux-node1 ~]# openstack network list
```

1. 创建子网

```
[root@linux-node1 ~]# openstack subnet create --network provider \
  --allocation-pool start=192.168.56.100,end=192.168.56.200 \
  --dns-nameserver 223.5.5.5  --gateway 192.168.56.2 \
  --subnet-range 192.168.56.0/24 provider-subnet
```

1. 查看子网

```
[root@linux-node1 ~]# openstack subnet list
+--------------------------------------+----------+--------------------------------------+-----------------+
| ID                                   | Name     | Network                              | Subnet          |
+--------------------------------------+----------+--------------------------------------+-----------------+
| 297530f8-62b6-4954-ad33-c8a4ba922a3e | provider | 6cf562b4-0537-4232-a2b9-ce5481e6a505 | 192.168.56.0/24 |
+--------------------------------------+----------+--------------------------------------+-----------------+
```

### 创建云主机

1. 创建云主机类型

由于默认的云主机大小内存最小是512M，考虑到多数人自己PC的实验环境内存有限，我们创建一个比较小的云主机类型。

```
[root@linux-node1 ~]# openstack flavor create --id 0 --vcpus 1 --ram 64 --disk 1 m1.nano
```

1. 创建密钥对

密钥对用来使用登录创建后的虚拟机，OpenStack在创建虚拟机的时候会把公钥放到虚拟机里面，这样我们就可以不使用密码连接。 注意现在切换到demo用户，因为我们要使用demo用户来创建第一台云主机

```
[root@linux-node1 ~]# source demo-openstack.sh
[root@linux-node1 ~]# ssh-keygen -q -N ""
[root@linux-node1 ~]# openstack keypair create --public-key ~/.ssh/id_rsa.pub mykey
[root@linux-node1 ~]# openstack keypair list
+-------+-------------------------------------------------+
| Name  | Fingerprint                                     |
+-------+-------------------------------------------------+
| mykey | d2:e0:bc:3e:35:58:5f:7b:fd:c1:0a:93:5e:bf:8f:2d |
+-------+-------------------------------------------------+
```

1. 添加安全组规则

默认情况下，有一个default安全组，这个安全组会拒绝所有访问，所以为了创建虚拟机能够连接，我们需要设置运行ICMP和22端口访问。

```
[root@linux-node1 ~]# openstack security group rule create --proto icmp default
[root@linux-node1 ~]# openstack security group rule create --proto tcp --dst-port 22 default
```

1. 启动实例前准备

```
[root@linux-node1 ~]# source demo-openstack.sh
```

- 查看可用的云主机类型

```
[root@linux-node1 ~]# openstack flavor list
+----+---------+-----+------+-----------+-------+-----------+
| ID | Name    | RAM | Disk | Ephemeral | VCPUs | Is Public |
+----+---------+-----+------+-----------+-------+-----------+
| 0  | m1.nano |  64 |    1 |         0 |     1 | True      |
+----+---------+-----+------+-----------+-------+-----------+
```

- 查看可用的镜像

```
[root@linux-node1 ~]# openstack image list
+--------------------------------------+--------+--------+--------+
| ID                                   | Name   | Status | Server |
+--------------------------------------+--------+--------+--------+
| 68615b2c-d10e-422f-9acb-c724808657ab | cirros | ACTIVE |        |
+--------------------------------------+--------+--------+--------+
```

- 查看可用的网络

```
[root@linux-node1 ~]# openstack network list
+--------------------------------------+--------+--------------------------------------+
| ID                                   | Name   | Subnets                              |
+--------------------------------------+--------+--------------------------------------+
| 557a00fa-f61d-4244-b350-29ffe0a03125 | public | c003b4b5-23d1-4211-ad2d-a62ec07d8853 |
+--------------------------------------+--------+--------------------------------------+
```

- 查看可用的安全组

```
[root@linux-node1 ~]# openstack security group list
+--------------------------------------+---------+------------------------+----------------------------------+
| ID                                   | Name    | Description            | Project                          |
+--------------------------------------+---------+------------------------+----------------------------------+
| 74d74309-0660-4eb9-abba-e89fb6fd23ae | default | Default security group | aec911c3ae68464ba989213e5f6060b1 |
```

1. 创建虚拟机

```
[root@linux-node1 ~]# openstack server create --flavor m1.nano --image cirros \
--nic net-id=5c4d0706-24cd-4d42-ba78-36a05b6c81c8 --security-group default \
--key-name mykey demo-instance
```

# 注意指定网络的时候需要使用ID，而不是名称。

### 测试云主机

1. 查看云主机状态

```
[root@linux-node1 ~]# openstack server list
+--------------------------------------+-----------------+--------+------------+-------------+-----------------------+
| ID                                   | Name            | Status | Task State | Power State | Networks              |
+--------------------------------------+-----------------+--------+------------+-------------+-----------------------+
| 7f94df9a-e547-4f56-9887-bbc52c4e0fff | public-instance | ACTIVE | -          | Running     | public=192.168.56.101 |
+--------------------------------------+-----------------+--------+------------+-------------+-----------------------+
```

1. 测试虚拟机连接

```
[root@linux-node1 ~]# ping -c 2 192.168.56.101
PING 192.168.56.101 (192.168.56.101) 56(84) bytes of data.
64 bytes from 192.168.56.101: icmp_seq=1 ttl=64 time=5.90 ms
64 bytes from 192.168.56.101: icmp_seq=2 ttl=64 time=0.484 ms

连接虚拟机
[root@linux-node1 ~]# ssh cirros@192.168.56.101
The authenticity of host '192.168.56.101 (192.168.56.101)' can't be established.
RSA key fingerprint is 29:4d:76:17:05:1a:4e:e6:f9:81:a5:1d:8c:27:ff:2c.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.56.101' (RSA) to the list of known hosts.
$ ifconfig eth0
eth0      Link encap:Ethernet  HWaddr FA:16:3E:E8:B9:C1  
          inet addr:192.168.56.101  Bcast:192.168.56.255  Mask:255.255.255.0
          inet6 addr: fe80::f816:3eff:fee8:b9c1/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:150 errors:0 dropped:0 overruns:0 frame:0
          TX packets:162 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:18634 (18.1 KiB)  TX bytes:17264 (16.8 KiB)
```

如果无法ping通虚拟机，还可以登陆虚拟机Web页面查看，是否启动

```
[root@linux-node1 ~]# openstack console url show demo-instance
+-------+------------------------------------------------------------------------------------+
| Type  | Url                                                                                |
+-------+------------------------------------------------------------------------------------+
| novnc | http://192.168.56.11:6080/vnc_auto.html?token=e97cffb8-cf0c-4c22-8dbc-fa88ff61f453 |
+-------+------------------------------------------------------------------------------------+
```

恭喜！你成功的使用OpenStack创建了第一台虚拟机，可能这一路走来有点坎坷，但是你成功了。不过这只是你在OpenStack世界里完成的第一步！

# OpenStack Dashboard

目前我们已经讲解并安装了OpenStack的Keystone、Glance、Nova、Neutron。而且我们已经使用命令成功的创建了一台虚拟机，并且可以进行连接和访问。我相信大家已经迫不及待的想看到OpenStack的DashBoard了。 那么OpenStack的有三种管理方法Horizon、CLI和API。本小节，我们就来部署Horizon。 Horizon是OpenStack的Dashboard，是一个可以让云管理员和用户管理OpenStack各种资源和服务的web接口。Horizon通过OpenStack API和各个组件进行交互。 Dashboard会根据Keystone中注册的Service去显示相应的功能。所以如果你没有安装相应的服务，却再Keystone中做了注册，登陆Dashboard是会报错的。

### Horizon部署

> 需要将Keystone和Hoarizon分开部署，彼此之间有冲突。部署到linux-node2节点上。

1. 安装Horizon

```
[root@linux-node2 ~]# yum install -y openstack-dashboard
```

1. Horizon配置

```
[root@linux-node2 ~]# vim /etc/openstack-dashboard/local_settings
#允许所有主机访问
ALLOWED_HOSTS = ['*', ]

#设置Keystone地址
OPENSTACK_HOST = "192.168.56.11"
OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST

#设置API版本，需要新增
OPENSTACK_API_VERSIONS = {
    "identity": 3,
    "volume": 2,
    "compute": 2,
}
#为通过仪表盘创建的用户配置默认的 user 角色
OPENSTACK_KEYSTONE_DEFAULT_ROLE = "user"
开启多域支持
OPENSTACK_KEYSTONE_MULTIDOMAIN_SUPPORT = True
设置默认的域
OPENSTACK_KEYSTONE_DEFAULT_DOMAIN = 'Default'



#设置Session存储到Memcached
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '192.168.56.11:11211',
    }
}

#启用Web界面上修改密码
OPENSTACK_HYPERVISOR_FEATURES = {
    'can_set_mount_point': True,
    'can_set_password': True,
    'requires_keypair': False,
}
#设置时区
TIME_ZONE = "Asia/Shanghai"
#禁用自服务网络的一些高级特性

OPENSTACK_NEUTRON_NETWORK = {
    ...
    'enable_router': False,
    'enable_quotas': False,
    'enable_distributed_router': False,
    'enable_ha_router': False,
    'enable_lb': False,
    'enable_firewall': False,
    'enable_vpn': False,
    'enable_fip_topology_check': False,
}
```

1. 重新生产Horizon配置文件

如果根据官方文档，和默认安装的配置，访问/dashboard后跳转到/auth/login并且会提示404 Not Found，需要重新生成配置文件

```
[root@linux-node2 ~]# cd /usr/share/openstack-dashboard
[root@linux-node2 ~]# python manage.py make_web_conf --apache > /etc/httpd/conf.d/openstack-dashboard.conf
```

1. 启动服务

```
[root@linux-node2 ~]# systemctl enable httpd.service
[root@linux-node2 ~]# systemctl restart httpd.service
```

好的，现在你就可以使用http://192.168.56.11/来访问仪表盘了。用户名和密码可以使用admin或者demo。需要你亲自来体验他们到底有什么不同。

### Horizon的Session存储

我们经常在负载均衡的环境下，会遇到Session的问题，一般的解决办法有三种：

- Session保持
- Session复制
- Session共享

Horizon作为一个典型的Django应用，是使用 Django session架构来处理用户的session数据，目前session支持以下几种存储方式：

- 本地内存缓存
- 键值对存储（Memcached或者Redis）
- 数据库存储
- cookies

通过修改 local_settings 文件的 SESSION_ENGINE 的配置值来自定制session后端

**本地内存缓存**

本地内存缓存是最快速和最简单的session后端配置方法，因为他不需要处理任何的依赖关系。尽管如此，他也拥有以下明显的缺点：

- 存储为非共享的，不能跨进程

- 进程终止后没有持续性。 单一的Horizon安装的默认为本地内存后端，因为他没有依赖性问题。生产环境是不推荐使用这个后端的，甚至在严肃的开发工作中也不推荐。你仍旧可以这样启用：

  ```
  SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
  CACHES = {
    'BACKEND': 'django.core.cache.backends.locmem.LocMemCache'
  }
  ```

**键值对存储**

你可以使用Memcached 或 Redis 等应用程序作为session的外部缓存机制。这些应用程序为session提供了持久并可以共享的存储，这在小规模或开发环境中的部署中十分有用。

1. Memcached

Memcached 是一个高性能和分布式的内存对象缓存系统，为小块的任意数据提供进驻内存的键值对的存储。 需求： Memcached服务运行并可以访问。 安装了python-memcached 的 Python 模块 通过下面的方法启用：

```
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
CACHES = {
    'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache'
    'LOCATION': 'my_memcached_host:11211',
}
```

1. Redis

Redis是一个开源的，BSD许可的，高级键值对存储。他通常被称为数据结构服务器。 需求： Redis服务运行并可以访问 安装了 redis 以及 django-redis 的python模块 通过以下配置方法启用：

```
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
CACHES = {
    "default": {
        "BACKEND": "redis_cache.cache.RedisCache",
        "LOCATION": "127.0.0.1:6379:1",
        "OPTIONS": {
            "CLIENT_CLASS": "redis_cache.client.DefaultClient",
        }
    }
}
```

# 第三部分 OpenStack进阶指南

联系作者----------------------------------------------------------------------

# 第四部分 Docker和Kubernetes基础

1.docker基础入门

在全链路自动化运维体系中，我们已经可以完成自动化系统安装、自动化监控、配置管理、代码部署。通过SaltStack的配置管理可以保证开发、测试、生产的环境一致性；自动化代码部署可以实现一键部署、秒级回滚；但是，你有没有考虑过，SaltStack配置的环境是很难回滚的，就像你安装了一个软件包更新了其它的软件包。想回滚到你安装软件之前的状态，这个可能有点难。再或者你的代码和环境需要一起回滚！

![img](http://k8s.unixhot.com/docker/media/6b19e69aac9d176124a719ad038e3bb2.png)

那么让我们马上进入容器的世界，虽然容器不仅仅是解决这些问题，但是至少我们遇到了运维痛点？引入一个新的解决方案一定是为了解决痛点。作为运维，我们不能局限于眼前的苟且，一定要高瞻远瞩，及时的跟上潮流。但是对于生产环境，我们必须要慎重的对待。

## Docker介绍

Docker是Docker.Inc公司开源的一个基于LXC技术之上构建的Container容器引擎，源代码托管在GitHub上,基于Go语言并遵从Apache2.0协议开源。

Docker是通过内核虚拟化技术（namespaces及cgroups等）来提供容器的资源隔离与安全保障等。由于Docker在操作系统层实现隔离，所以Docker容器在运行时，不需要类似虚拟机（VM）额外的操作系统开销，提高资源利用率。

**Docker运行结构**

![说明: Docker Engine Components Flow](http://k8s.unixhot.com/docker/media/3185f40a56d6a22b714b444d515be3f0.png)

Docker是一个C/S结构的项目，有Docker Client、RESTAPI、Docker Server组成。

- Docker Client：Docker客户端命令工具。
- REST API：提供标准的RESTful接口。
- Docker Server:：Docker daemon的主要组成部分，接收用户从Docker Client调用REST API发送过来的请求。

**Docker 包括三个基本概念：**

- 镜像（Image）
- 容器（Container）
- 仓库（Repository）

**Docker镜像**

Docker 镜像就是一个只读的模板。你可以拿KVM虚拟机镜像来对比理解。

例如：一个镜像可以包含一个完整的CentOS操作系统运行（注意不包含内核），里面仅安装了Nginx或用户需要的其它应用程序。

镜像可以用来创建Docker容器。就像你使用创建好的镜像直接启动一个虚拟机一样。

Docker 提供了一个很简单的机制来创建镜像或者更新现有的镜像，用户甚至可以直接从其他人那里下载一个已经做好的镜像来直接使用。

**小提示：为什么在CentOS的宿主机上可以运行一个Ubuntu的Docker容器？因为Docker镜像里面只是包含了容器运行时的文件、库文件等，并不包含Kernel，统一使用宿主机的Linux内核。**

**Docker容器**

Docker利用容器来运行应用，就像你运行一个KVM虚拟机一样。容器就是从镜像创建的运行实例，就像我们上面提到了虚拟机实例一样。它可以被启动、开始、停止、删除。每个容器都是相互独立的、隔离的个体。但其实没有虚拟机隔离的那么彻底，这个我们后面再说。

你可以把容器看做是一个简易版的Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。

**Docker仓库**

Docker仓库是集中存放镜像文件的场所。就像OpenStack的Glance服务，仓库分为公开仓库（Public）和私有仓库（Private）两种形式。这个有点像Git代码托管，你可以把代码放在GitHub上并公开，也可是使用Gitlab创建一个私有的代码托管平台。

Docker最大的公开仓库是Docker Hub，存放了数量庞大的镜像供用户下载，后面你也可以创建自己的镜像分享到Docker Hub中。

同时你可以创建自己的镜像托管平台，Docker有一个叫做Registry的组件，使用Docker Registry可以启动一个私有的镜像托管平台，这个平台可以存放多个仓库，每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。

有时候我们会把仓库和仓库注册服务器（Registry）混为一谈，并不严格区分，实际上不严谨的，不过也不用太纠结这些名词，可以根据上下文来理解。

当用户创建了自己的镜像之后就可以使用docker push命令将它上传到公有或者私有仓库，这样下次在另外一台机器上使用这个镜像时候，只需要从仓库上docker pull下来就可以了。是的，没错，就像你操作Git那样。

### Docker与虚拟化

Docker是一种容器技术，它和虚拟化是有区别，就像下图所示：

![0731013](http://k8s.unixhot.com/docker/media/50b4ac39d02c080a7e3284e9b078e0c2.jpg)

可以看到Docker的容器并不需要运行一个Hypervisor。直接是Docker Engine来管理容器，减少了Hypervisor的开销，但是由于Docker容器并不是一个虚拟机，所以也无法提供像虚拟机一样的完全的资源隔离，还有很多隔离层面的问题。所以如果你的业务要求完全的资源隔离，可能Docker并不是一个好的选择。例如我们之前支付业务，需要在物理机上插入U Key，在虚拟机的情况下可以通过USB重定向来实现，但是Docker却并不支持。

所有的技术都有它适用的场景，只有深入了解Docker，我们才能发挥它的作用，提高工作效率。

### Docker与OpenStack对比

在Docker还没有普及之前，云计算、OpenStack等流行的技术铺面而来。严格来说Docker不应该和OpenStack做对比，他们没有在一个层级上，和KVM比会更好一些。

| 类别     | Docker                | OpenStack/KVM                       |
| -------- | --------------------- | ----------------------------------- |
| 部署难度 | 非常简单              | 组件多，部署复杂                    |
| 启动速度 | 秒级                  | 分钟级                              |
| 执行性能 | 和物理系统几乎一致    | VM会占用一些资源                    |
| 镜像体积 | 镜像是MB级别          | 虚拟机镜像GB级别                    |
| 管理效率 | 管理简单              | 组件相互依赖，管理复杂              |
| 隔离性   | 隔离性高              | 彻底隔离                            |
| 可管理性 | 单进程、不建议启动SSH | 完整的系统管理                      |
| 网络连接 | 比较弱                | 借助Neutron可以灵活组件各类网络架构 |

### Docker改变了什么？

我觉得Docker在不同的层面都改变了我的工作方式：

**面向产品**

增加了产品交付模式。在产品交付方面，之前做产品交付我们都是交付的软件包、安装操作文档等，需要用户进行部署。而现在可以直接交付Docker镜像，直接启动就可以访问。例如现在很多开源的项目都提供了Docker镜像或者Dockerfile，对于只想尝试一下的人员来说，再也不用进行繁琐的安装步骤了，而且往往部署成功后，发现并不能满足我们的要求。

**面向开发**

简化了开发环境配置。公司每次有开发入职，当天除了办手续就是准备开发环境了。如果使用Docker，我们可以给不同项目，构建不同的Docker镜像。开发入职后，就可以快速的进入开发工作。而且这个镜像一次构建，可以在开发、测试、预生产、生产都可以使用。

**面向测试**

Docker实现了多版本测试。之前我公司测试团队，如果想测试一个项目的不同分支，由于测试环境的局限性大家要排队，串行的进行测试。测试人员A再使用某个项目的测试环境时，其它人要排队。现在每个测试人员都可以创建不同分支的Docker容器。让测试团队可以并行测试。

**面向运维**

解决环境一致性、实现运行环境回滚。我们也不需要使用SaltStack进行配置管理了。做好一个Docker镜像之后，开发、测试、生产都用一套运行环境，只是上面的代码不同。当然这个虚拟机也可以实现，但是不够敏捷。而且在生产代码部署的时候，以Docker容器为单位进行发布。如果要进行回滚，直接把上一个版本的Docker容器启动即可。

**面向架构**

SOA服务部署、微服务部署、自动化扩容。之前我们做SOA、微服务的时候最多以虚拟机为单位进行管理。但是现在启动一个Docker容器要远远快速启动一个KVM虚拟机。而且不需要太复杂的操作步骤，你就可以在一个新的服务器上安装上Docker，并下载镜像，启动容器。

## Docker部署

目前Docker仅支持Linux和Unix环境，在Windows Server 2016版本支持Windows容器。

### Docker for CentOS：

**第一步：使用官方yum仓库**

```
[root@linux-node1 ~]# yum install -y yum-utils
[root@linux-node1 ~]# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

使用国内Yum源

```
[root@linux-node1 ~]# cd /etc/yum.repos.d/
[root@linux-node1 yum.repos.d]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

第二步：Docker安装：

```
[root@linux-node1 ~]# yum install -y docker-ce
```

第三步：启动后台进程：

```
[root@linux-node1 ~]# systemctl start docker
[root@linux-node1 yum.repos.d]# docker --version

Docker version 18.09.2, build 6247962
```

### Docker for windows:

第一步：下载boot2docker：https://github.com/boot2docker/windows-installer/releases/latest

第二步：运行安装程序，

![img](http://k8s.unixhot.com/docker/media/ee82a72fe806ac1ae99ab7fa0aac210c.png)

选择需要安装的组件，如果初次安装请选择Full installation。

![img](http://k8s.unixhot.com/docker/media/920a1b8c46b133f431f0255197ddb3f8.png)

![img](http://k8s.unixhot.com/docker/media/bbe62c1244b68a92383658af3a72b3a0.png)

安装完毕，打开Docker，默认会进行初始化，初始化会创建一个virtualbox的虚拟机。

### Docker Hub

Docker之所以能这么快的火起来，和Docker Hub的作用是分不开的。Docker构建了像GitHub一样的仓库，用来存放大家构建好的Docker镜像，其中已经包括了超过15,000的镜像。大部分需求，都可以通过在 Docker Hub 中直接下载镜像来实现。

**搜索镜像**

搜索，你懂的，想寻找你需要的Docker镜像，先搜索吧，因为可能已经有人做好了，合并重复造轮子呢，尤其是很多是官方提供的，可以非常放心的使用。

![img](http://k8s.unixhot.com/docker/media/bd38bd717fa1a2f84aa5f62a965a7ecd.png)

输出依次为镜像名字、描述、星级（表示该镜像的受欢迎程度）、是否官方创建、是否自动创建。OFFICIAL为OK的就是官方镜像。

本章快速的带领读者使用上Docker，了解Docker的基本操作和管理工作。记住，唯有实践才会掌握。

## Docker镜像管理

镜像是Docker容器的基础，想运行一个Docker容器就需要有镜像。我们上面已经学会了使用search搜索镜像。那么这个镜像是怎么创建的呢？

### 创建镜像

镜像的创建有以下几种方法：

**使用ISO镜像：**回顾下OpenStack，我们在创建虚拟机的时候，首先使用iso安装定制了镜像上传到Glance上面，对于Docker来说，我们同样可以使用ISO镜像来制作基本镜像。

**使用工具制作镜像：**不同的操作系统都提供了相应的工具来让用户创建Docker镜像，比如Centos可以使用febootstrap。debian/ubuntu使用debootstrap。

**基于本地模板导入：**Docker支持从一个操作系统模板文件导入一个镜像。

一般我们都是使用一些公共的基础镜像，然后在这个基础上，再根据自身需求进行定制。比如后面要讲到的Docker File的方式，来创建镜像。

### 获取镜像

既然有了Docker Hub，我们就不要重复造轮子了，直接下载一个官方提供的centos镜像吧。

```
[root@linux-node1 ~]# docker pull centos
Using default tag: latest
latest: Pulling from library/centos
a02a4930cb5d: Pull complete
Digest: sha256:184e5f35598e333bfa7de10d8fb1cebb5ee4df5bc0f970bf2b1e7c7345136426
Status: Downloaded newer image for centos:latest
```

Docker镜像文件是有若干层组成的，行首的名称就是各层的ID。这就是Docker镜像的一个特点。其实分层设计是很多设计的最佳实践之一。由于网络原因，国内用户可能需要等待很久。如果下载中断可以再次执行docker pull centos。

镜像可以有不同的标签，例如v1.0、v1.1这样，默认情况下，如果我们不再centos后面增加任何的标签会下载标签为latest的镜像，也就是最新版本，而且默认是从docker hub上进行下载。

### 查看镜像

使用docker images可以查看当前系统中都有哪些镜像。

```
[root@linux-node1 ~]# docker images
REPOSITORY TAG IMAGE ID CREATED SIZE
centos latest 1e1148e4cc2c 2 months ago 202MB
```

使用docker images可以列出本地主机上已经存在的镜像，每个镜像都有一个唯一的镜像ID，我们可以看到有以下几个栏目：

- REPOSITORY：镜像来自于哪个仓库
- TAG：镜像的标签。用来标记镜像的不同版本等。
- IMAGE ID：镜像的唯一ID。
- CREATED：镜像创建时间。
- VIRTUAL SIZE：镜像的大小。

### 镜像的导入导出

如果你想把自己的镜像传给别人怎么办，Docker提供了导入和导出的命令：

**导出镜像**

```
[root@linux-node1 ~]# docker save -o centos.tar centos
```

**导入镜像**

将导出的镜像scp到另外的一台机器上后做导入。

```
[root@linux-node2 ~]# docker load --input centos.tar
```

或者使用重定向进行导入

```
[root@linux-node2 ~]# docker load < centos.tar
```

Docker镜像这种导入和导出是完整，可以看到镜像ID等都没有发生改变。

```
[root@linux-node2 ~]# docker images
REPOSITORY TAG IMAGE ID CREATED SIZE
centos latest 1e1148e4cc2c 2 months ago 202MB
```

### 删除镜像

使用docker rmi命令可以删除本地的镜像，可以使用镜像的标签或者镜像的ID。他们两者之间是不同的。

docker rmi 标签：会删除指定标签的镜像，但是镜像本身不会被删除，因为一个镜像对象可以有多个标签，就像Linux文件的硬链接，当镜像只剩下一个标签的时候，使用标签删除镜像，才会删除镜像本身。

docker rmi ID：使用镜像的ID删除镜像，会先删除该镜像的所有标签，然后再删除镜像文件本身。

注意：如果镜像创建的容器存在时，镜像是无法被删除的。不过你可以使用-f的参数强制删除镜像，并不建议这么做。

看起来Docker的镜像操作是比虚拟机要便捷的多，目前来说使用几个简单的命令，就可以完成镜像的管理工作，不过这还只是基础。

## Docker容器管理

Docker容器相对于OpenStack的云主机实例，虽然他们本质上不同。我们需要基于镜像来创建容器。容器是独立运行的一个或一组应用，以及它们的运行环境。对应的，虚拟机可以理解为模拟运行的一整套操作系统和跑在上面的应用。

### 启动容器

启动容器其实就是创建镜像并启动，启动镜像有两种方式，一种是将已经存在，但是是stopped状态的镜像启动，一种就是基于一个镜像新建一个新的容器并启动。

**新建并启动容器**

让我们先老生常谈，输出一个Hello World吧。

```
[root@linux-node1 ~]# docker run centos /bin/echo 'Hello world'

Hello world
```

很神奇，可以在精通各种语言的Hello World计数器+1了，这个和你在本地系统运行/bin/echo ‘Hello world’ 几乎没有任何区别，但是它是Docker容器输出的，而且输出后，它就完成使命，自动退出了。

> 注意：这里就是我们学习Docker要面临的第一个疑惑，就是容器只会在前台运行一个任务，任务结束，容器就终止了。

使用docker ps –a可以查看当前启动的容器：

```
[root@linux-node1 ~]# docker ps -a
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
789de67bb454 centos "/bin/echo 'Hello wor" 30 seconds ago Exited (0) 29 seconds
ago pedantic_kare
```

刚接触Docker到这里还会有第二个疑惑：

Docker自动帮你生成了一个名字，比如本例中是pedantic_kare。

很困惑？好吧，让我们来启动一个我们自定义名称，同时可以有终端的容器，就像启动一个虚拟机一样，不过只是像而已，它们本质上完全不同。

```
[root@linux-node1 ~]# docker run --name mydocker -t -i centos /bin/bash
[root@1b0cae722fa0 /]#
[root@1b0cae722fa0 /]# ls /

anaconda-post.log bin dev etc home lib lib64 lost+found media mnt opt proc root
run sbin srv sys tmp usr var
```

上面我们使用了两个选项，-t 选项让Docker分配一个伪终端并绑定到容器的标准输入上， -i 则让容器的标准输入保持打开。

在交互模式下，用户可以通过所创建的终端来输入命令，例如我们可以查看当前运行的进程，只有/bin/bash和你运行的命令，注意看/bin/bash的PID为1，有意思。先记着这个特殊的地方，随着我们深入学习，再回过头来研究它。

```
[root@1b0cae722fa0 /]# ps aux
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
root 1 0.1 0.1 11776 1872 ? Ss 15:30 0:00 /bin/bash
root 18 0.0 0.0 47424 1660 ? R+ 15:31 0:00 ps aux
```

当利用 docker run 来创建容器时，Docker 在后台运行的标准操作包括：

- 检查本地是否存在指定的镜像，不存在就从公共仓库下载；
- 利用镜像创建并启动一个容器；
- 分配一个文件系统，并在只读的镜像层外面挂载一层可读写层；
- 从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去；
- 从地址池配置一个ip地址给容器；
- 执行用户指定的应用程序；
- 执行完毕后容器被终止。

让我们输入exit来退出这个容器，退出后，容器会自动终止运行。为什么呢？请参考我们第一个疑惑，Docker容器在前台运行一个单任务，任务结束，容器就终止。这就是Docker容器的特性！同时你有没有注意到一个小细节，默认docker容器的主机名就是CONTAINER ID。

**让容器容器后台运行**

在使用docker run运行容器更多时候，我们是需要容器在后台运行的，也就是以守护态形式运行。可以通过-d参数来实现。

```
[root@linux-node1 ~]# docker run -d --name mydocker2 centos /bin/bash
38e42accfa2226bb6c7da2e28e12dc95f6b6d6717326442131887a24bb321cdd
```

容器启动后就会在后台运行，然后返回一个容器ID到控制台，而且上面这个容器也终止了，带着问题继续前进。

### 终止容器

在前面的输出Hello World的操作中我们看到了，当Docker容器中指定的应用程序运行完毕，容器也就自动终止了。同时我们可以使用exit命令退出运行/bin/bash的终端，同时我们也可以使用Ctrl+d来实现同样的效果。

使用docker stop来停止一个容器，默认是先给容器发送SIGTERM信号，然后10秒后发生SIGKILL信号终止容器，可以使用-t或者—time来设置等待的时间，单位是秒

docker stop 容器名称、容器ID

对于终止的容器，可以使用docker start来启动，或者使用docker restart来重启。

```
[root@bc419cd0b8fa /]# exit
Exit
```

可以使用docker ps –a来查看容器的状态，发现已经是停止模式。

```
[root@linux-node1 ~]# docker ps -a
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
38e42accfa22 centos "/bin/bash" 17 seconds ago Exited (0) 16 seconds ago
mydocker2
a5ef57e8783f centos "/bin/bash" 3 minutes ago Exited (0) About a minute ago
mydocker
d132d6e645ad centos "/bin/echo 'Hello wo…" 3 minutes ago Exited (0) 3 minutes
ago serene_dijkstra
```

**启动已终止容器**

可以使用docker start来开启已经终止的容器，可以通过输入容器的CONTAINER ID，或者NAMES来进行启动。

```
[root@linux-node1 ~]# docker start mydocker
mydocker
```

好的，我们又一次启动了运行/bin/bash的容器，那么问题来了，我们怎么进去呢。

### 进入容器

**Docker attach**

Docker提供了docker attach的命令，用来让我们进入已经启动的容器（如果容器已经终止，你需要使用docker start将它启动。

```
[root@linux-node1 ~]# docker attach mydocker
[root@a5ef57e8783f /]#
```

你可以继续执行一些命令，没错，很多命令都没有。

注意，在我们使用 attach 进入容器的时候，如果同时有多个窗口 attach 到同一个容器的时候，所有窗口都会同步显示。当某个窗口因命令阻塞时,其他窗口也无法执行操作了。这可怎么办，如果我们是团队作战，可能多个同事需要同时进入容器操作呢?还有一个最关键的问题。你输入exit以后呢？之前运行的容器退出了。

**nsenter进入容器**

nsenter命令被包含在util-linux软件包里面，使用nsenter可以访问另一个进程的名字空间,大多数Linux发行版默认包含了该软件，CentOS默认是有的。如果你的系统里面没有可以使用以下命令进行安装：

> **Yum安装：**

```
[root@docker ~]# yum install -y util-linux
```

为了连接到容器，你还需要找到容器的第一个进程的 PID，可以通过下面的命令获取。

```
# docker inspect --format "{{ .State.Pid }}" <container ID or NAMES>
```

通过这个 PID，就可以连接到这个容器：

```
# nsenter --target $PID --mount --uts --ipc --net –pid
```

如果你刚才停止了容器，请启动。

连接方式如下：

```
[root@linux-node1 ~]# PID=$(docker inspect --format "{{ .State.Pid }}"
mydocker)
[root@linux-node1 ~]# echo $PID
8029
```

注意如果你的PID变量为0，说明mydocker容器没有启动。

```
[root@linux-node1 ~]# nsenter --target $PID --mount --uts --ipc --net --pid
[root@a5ef57e8783f /]# ps -ef

UID PID PPID C STIME TTY TIME CMD

root 1 0 0 21:11 pts/0 00:00:00 /bin/bash

root 14 0 0 21:12 pts/0 00:00:00 -bash

root 27 14 0 21:12 pts/0 00:00:00 ps -ef
```

**编写一个脚本用户进入容器**

```
[root@linux-node1 ~]# vim docker_in.sh
#!/bin/bash
# Use nsenter to access docker
docker_in(){
NAME_ID=$1
PID=$(docker inspect --format "{{ .State.Pid }}" $NAME_ID)
nsenter --target $PID --mount --uts --ipc --net --pid
}
docker_in $1
[root@linux-node1 ~]# chmod +x docker_in.sh
```

这么后面的内容，我们就直接使用docker_in.sh这个脚本来进入Docker容器，只要传给它名称或者容器ID即可，就像下面这样：

```
[root@linux-node1 ~]# ./docker_in.sh mydocker
```

### 不进入容器执行命令

或许你的本意不是想进去容器，而是想让容器执行一个命令，docker提供了exec，使用exec可以在容器内运行命令。

```
[root@linux-node1 ~]# docker exec mydocker whoami
root
```

使用exec进入容器

```
[root@linux-node1 ~]# docker exec -it mydocker /bin/bash
```

注意，现在你进入容器和其它方法都是不一样的，其实是你执行了一个/bin/bash的命令，所以你现在拥有了一个shell，你现在所在的shell应该是下图中PID为33的进程。

```
[root@1b0cae722fa0 /]# ps -ef
UID PID PPID C STIME TTY TIME CMD
root 1 0 0 15:37 ? 00:00:00 /bin/bash
root 33 0 0 15:41 ? 00:00:00 /bin/bash
root 46 33 0 15:41 ? 00:00:00 ps -ef
```

或许你也发现使用docker exec、nsenter进入容器后，执行exit退出容器，容器并不会关闭。但是使用docker attach进入容器，输入exit退出容器后，容器也会自动终止。你可以想想为什么。因为除了attach，nsenter和exec实际中都是开了一个新的shell在执行。而attach是使用容器本身启动的/bin/bash，这个shell环境退出了。那么容器就自动退出了。所以Docker的魔咒来了：docker容器只能而且必须在前台运行一个进程，如果进程退出，容器就关闭。当然如果你想在Docker容器中启动多进程也是有办法的，我们后面会讲到。

### 删除容器

可以使用 docker rm 来删除一个处于终止状态的容器。 例如

```
[root@docker ~]# docker rm mydocker
```

如果要删除一个运行中的容器，可以添加-f参数。Docker会发送 SIGKILL信号给容器。

### 学习中的小技巧

如果你在学习和测试的过程中，经常因为启动非常多的容易想删除也很难，下面列举了几个小技巧，可以快速的帮我们进行容器的清理。

#### 容器停止后就自动删除：

```
docker run --rm centos /bin/echo "One"
```

#### 杀死所有正在运行的容器：

```
docker kill $(docker ps -a -q)
```

#### 删除所有已经停止的容器：

```
docker rm $(docker ps -a -q)
```

#### 删除所有未打 dangling 标签的镜像

```
docker rmi $(docker images -q -f dangling=true)
```

#### 删除所有镜像

```
docker rmi $(docker images -q)
```

如果你觉得名称很长，不容易记，还可以为这些命令创建别名。

#### 杀死所有正在运行的容器.

```
alias dockerkill='docker kill $(docker ps -a -q)'
```

#### 删除所有已经停止的容器.

```
alias dockerclean='docker rm $(docker ps -a -q)'
```

#### 删除所有未打标签的镜像.

```
alias dockercleani='docker rmi $(docker images -q -f dangling=true)'
```

#### 删除所有已经停止的容器和未打标签的镜像.

```
alias dockerclean='dockercleanc || true && dockercleani'
```

> 注意：生产环境一定要慎用！！！

## Docker网络访问

现在我们已经可以熟练的使用docker命令操作镜像和容器，并学会了如何进入到容器中去，那么实际的工作中，我们通常是在Docker中部署服务，我们需要在外部通过IP和端口进行访问的，那么如何访问到Docker的内部服务呢？

在后面我们会有专门的章节来讲解Docker的网络配置，这里我们先学习一个比较简单的通过网络访问容器的方法，就是端口映射。

容器中可以运行一些网络应用，要让外部也可以访问这些应用，可以通过 -P 或 -p 参数来指定端口映射。

### 随机映射

当使用 -P 标记时，Docker 会随机映射一个 49000~49900 的端口到内部容器开放的网络端口。

下面我们以一个nginx的容器为例子来测试一下-P的功能，大家可以使用search搜索下nginx镜像，我们使用官方的nginx镜像来启动一个容器。

```
[root@linux-node1 ~]# docker search nginx
```

这次我们不执行docker pull。直接来启动容器，你会发现docker会先查找你本地是否有该镜像，如果没有它会自动下载后，然后启动容器。

```
[root@linux-node1 ~]# docker run -d -P nginx
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
6ae821421a7d: Pull complete
da4474e5966c: Pull complete
eb2aec2b9c9f: Pull complete
Digest: sha256:dd2d0ac3fff2f007d99e033b64854be0941e19a2ad51f174d9240dda20d9f534
Status: Downloaded newer image for nginx:latest
ecf14adb9dec09555ae31673753093e03941c41d917669dd1f254b51fdec7b51
```

我们又学习了一个新的参数-d可以让容器直接在后台运行

```
[root@linux-node1 ~]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
6819734a680c nginx "nginx -g 'daemon off" About an hour ago Up About an hour
0.0.0.0:32769->80/tcp, 0.0.0.0:32768->443/tcp hungry_mayer
```

可以看到，随机映射了一个32769端口到容器的80端口。下面就可以直接访问了。

```
[root@linux-node1 ~]# curl --head http://192.168.56.11:32769/
HTTP/1.1 200 OK
Server: nginx/1.11.3
Date: Fri, 02 Sep 2016 17:44:14 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 26 Jul 2016 14:54:48 GMT
Connection: keep-alive
ETag: "579779b8-264"
Accept-Ranges: bytes
```

同样的，可以通过 docker logs 命令来查看应用的日志信息。

```
[root@linux-node1 ~]# docker logs hungry_mayer

192.168.56.11 - - [02/Sep/2016:17:44:01 +0000] "HEAD / HTTP/1.1" 200 0 "-"
"curl/7.29.0" "-"

192.168.56.11 - - [02/Sep/2016:17:44:06 +0000] "GET / HTTP/1.1" 200 612 "-"
"curl/7.29.0" "-"

192.168.56.11 - - [02/Sep/2016:17:44:14 +0000] "HEAD / HTTP/1.1" 200 0 "-"
"curl/7.29.0" "-"
```

是不是老使用随机的名字和ID操作容器很不方面，那么下面我们再创建容器的时候，一定要给它定义一个可读的名字。

### 指定端口映射

-p（小写的）则可以指定要映射的端口，并且，在一个指定端口上只可以绑定一个容器。支持的格式有以下三种：

- hostPort:containerPort。
- ip:hostPort:containerPort
- ip::containerPort

**映射所有IP地址的指定端口**

使用 hostPort:containerPort，将本地的 80 端口映射到Nginx容器的 80 端口

```
[root@linux-node1 ~]# docker run -d -p 80:80 --name nginx-demo1 nginx
```

此时默认会绑定本地所有接口上的所有地址。注意镜像名称需要放到最后。

**映射到指定地址的指定端口**

如果你宿主机拥有多个IP地址，可以使用 ip:hostPort:containerPort 格式指定映射使用一个特定地址，比如将Nginx的80端口绑定到本地IP地址的81端口。

```
[root@linux-node1 ~]# docker run -d -p 192.168.56.11:81:80 --name nginx-demo2
nginx
```

**映射到指定地址的任意端口**

使用 ip::containerPort 绑定Nginx80端口到本地192.168.56.11的任意端口，本地主机会自动分配一个端口。

```
[root@linux-node1 ~]# docker run -d -p 192.168.56.11::80 --name nginx-demo3 nginx
```

**使用 udp 标记来指定 udp 端口**

```
[root@linux-node1 ~]# docker run -d -p 192.168.56.11:53:53/udp –name dns-udp
```

**绑定多个端口**

如果你想绑定Docker容器里面的多个端口，可以使用多次使用-p 标记。

```
[root@linux-node1 ~]# docker run -d -p 80:80 -p 443:443 nginx
```

**查看映射端口配置**

使用 docker port 来查看当前映射的端口配置，也可以查看到绑定的地址

```
[root@linux-node1 ~]# docker port nginx-demo1
80/tcp -> 0.0.0.0:80 
```

## Docker数据管理

为了能够存储持久化数据以及共享容器间的数据，Docker提出了Volume的概念。让我们通过类似mount的方式将宿主机的文件或者目录挂载到容器中。

在容器中管理数据主要有两种方式：

- 数据卷（Data volumes）
- 数据卷容器（Data volume containers）

### 数据卷

**创建一个数据卷**

在使用docker run命令的时候，使用-v选项创建一个数据卷并挂载到容器里。

下面创建一个测试容器nginx，并加载一个数据卷到容器的/data目录。

```
[root@linux-node1 ~]# docker run -d --name nginx-volume-test1 -v /data nginx
```

容器启动后，登录到容器会发现/data目录是空的。

```
[root@linux-node1 ~]# ./docker_in.sh nginx-volume-test1
root@00741a2a44ad:/# ls -l /data
total 0
```

上面的命令会挂载一个data目录到容器中，并绕过联合文件系统，我们可以在主机上直接操作该目录。任何在该镜像/data 路径的文件会将被复制到Volume。那么在我们宿主机上，这个目录到底在哪里呢。

我们可以使用 docker inspect 命令找到Volume在主机上的存储位置：

```
[root@linux-node1 ~]# docker inspect -f {{.Mounts}} nginx-volume-test1

[{861cbee5b650461490633fc60bd94a0df0f8b01e4a4dcc4adff4825dff509159
/var/lib/docker/volumes/861cbee5b650461490633fc60bd94a0df0f8b01e4a4dcc4adff4825dff509159/_data
/data local true }]
```

你会发现，容器中的/data目录实际上挂载到了/var/lib/docker/volumes/容器ID/_data的目录下。

我们现在在宿主机该目录下创建一个文件。

```
[root@linux-node1 _data]# touch mount-test
```

我们再次在容器中查看，发现已经有了。

```
[root@linux-node1 ~]# ./docker_in.sh nginx-volume-test1
root@00741a2a44ad:/# ls -l /data
total 0
-rw-r--r-- 1 root root 0 Sep 2 18:58 mount-test
```

**指定一个宿主机目录作为数据卷**

有的时候，我们需要将宿主机的某个目录挂载到容器中来进行访问，可以通过-v 源路径：目标目录的方式进行。

```
[root@linux-node1 ~]# mkdir -p /data/docker-volume-nginx
[root@linux-node1 ~]# docker run -d --name nginx-volume-test2 \
-v /data/docker-volume-nginx:/data nginx
```

你会发现，目前容器中的/data目录和宿主机中的/data/ docker-volume-nginx目录是相同的。

**文件挂载**

数据卷也可以挂载一个宿主机的文件作到容器中作为数据卷。

```
[root@linux-node1 ~]# docker run -d --name nginx-volume-test3 \
-v /$HOME/.bash_history:/root/.bash_history nginx
```

上面案例将宿主机的.bash_history挂载到了容器中，这样就可以记录容器中的命令历史记录。

**只读挂载**

Docker 挂载数据卷的默认权限是读写，用户也可以通过 :ro 指定为只读。

```
[root@linux-node1 ~]# docker run -d --name nginx-volume-test \
-v /data/docker-volume-nginx:/data:ro nginx
```

### 数据卷生产实践

那么这种将本地的目录挂载到容器中的方法，在生产中有哪些应用场景呢？

**在开发环境中**

在基于Docker的开发环境中，例如我们将本地的/home/code目录挂载到容器中的/data/webroot，然后容器的应用的webroot同样设置为/data/webroot，那么容器启动后，我们就可以自由的本地进行代码的编写和调试，对于解释性的语言，就比较方便了。如果你的Docker运行在虚拟机中，可以先将本地例如D:code目录通过虚拟机软件共享到虚拟机里，目前VirtualBox和Vmware workstation都支持目录映射。在Vmware中需要在虚拟机中安装Vmware Tools。

![img](http://k8s.unixhot.com/docker/media/03822b520894cafdde1dbbc64b8b99e6.png)

**在生产环境中**

如果我们的容器里面运行的程序需要写一些持久化的数据到硬盘，或者共享宿主机的一些文件或者目录，显然这种数据卷的挂载非常的方便。

不过数据卷最大的缺陷应该是不灵活了，因为Docker的理念是Build、Ship、Run。因为有这个挂载目录的依赖，那么这个Docker镜像在新的宿主机上运行就需要考虑挂载的目录是否存在等问题。

### 数据卷容器

Docker还支持让一个容器访问另一个容器的Volume，我们可以使用 -volumes-from 参数挂载其它容器的卷。

```
[root@linux-node1 ~]# docker run -d --name nginx-volume-test4 \
--volumes-from nginx-volume-test1 nginx
7d650d332e3d9bf4086be35ae5a04b618f9d8e1df03fa2fef5f5766318a4ca12
[root@linux-node1 ~]# ./docker_in.sh nginx-volume-test4
root@7d650d332e3d:~# ls /data
mount-test
```

注意：不管数据卷容器nginx-volume-test1是否运行，nginx-volume-test4都可以访问到nginx-volume-test1里面挂载的数据卷。所以说数据卷容器，其实就是一个普通的容器，只不过是专门用来提供数据卷供其它容器挂载使用的。

### 数据卷容器生产实践

在生产中使用数据卷容器的方案有很多，一个非常典型的就是在进行日志收集的时候。我们可以在一台服务器上启动一个logstash或者filebeat的容器log-volume，然后其它所有应用容器启动都使用--volumes-from log-volume，将日志写入对应路径，然后使用统一收集，这样就避免在所有需要进行日志收集的容器中去部署logstash。相对于直接挂载本地目录也更加的方便。

# Docker镜像生产构建

我们已经了解了Docker的基本概念和管理，下面就开始着手创建自己的第一个Docker镜像，这里我们选用最早pull下来的centos作为基础镜像，然后在上面部署Nginx来做案例讲解。

## 手动构建镜像

手动构建镜像，简单的说就是我们基于一个基础镜像启动一个容器，然后对这个容器进行更改，更改完毕后，进行提交。

### 启动容器

运行一个CentOS容器，命名为mynginx

```
[root@linux-node1 ~]# docker pull centos
[root@linux-node1 ~]# docker run --name mynginx -it centos
```

在容器里面安装Nginx

```
[root@2e110e00eef4 /]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
[root@2e110e00eef4 /]# yum install -y nginx
```

想要Docker容器保持活跃的状态，需要其中运行的进程不能中断，默认情况下，Nginx会以守护进程的方式启动，这会导致容器只是短暂运行，在守护进程被fork启动后，发起守护进程的原始进程就会退出，这时容器就会停止运行了。所以我们需要将Nginx放在前端运行。

```
[root@2e110e00eef4 /]# vi /etc/nginx/nginx.conf
#在配置文件最上面增加下面配置
daemon off;
[root@2e110e00eef4 /]# exit
```

### 提交镜像

**获取容器ID**

```
[root@linux-node1 ~]# docker ps -a | grep mynginx
2e110e00eef4 centos "/bin/bash" 8 minutes ago Exited (0) 2 minutes ago mynginx
```

**提交修改后的容器为镜像**

```
[root@linux-node1 ~]# docker commit -m "My Nginx" 2e110e00eef4 test/mynginx:v1
sha256:cfd25da2c9c5dd2bcce9e5d2ef4e316b46b5f03617176b97b60a34f2958a6d70
```

- -m：指定提交的说明信息，类似SVN和Git。
- 之后是用来创建镜像的容器的 ID；
- 最后指定目标镜像的仓库名和标签信息。

**查看镜像**

```
[root@linux-node1 ~]# docker images
REPOSITORY TAG IMAGE ID CREATED SIZE
test/mynginx v1 cfd25da2c9c5 49 seconds ago 373MB
nginx latest f09fe80eb0e7 2 weeks ago 109MB
centos latest 1e1148e4cc2c 2 months ago 202MB
```

**从我们创建的镜像运行一个容器**

```
[root@linux-node1 ~]# docker run -d -p 91:80 test/mynginx:v1 nginx
```

现在你的手动构建的第一个镜像就完成了。你可以用同样的方式安装任意你需要的软件到镜像里面，然后使用镜像来启动一个容器，只要记住容器启动必须要有一个不会退出的进程在执行即可。

## Dockerfile构建

Dockerfile是为快速构建docker image而设计的，当你使用docker build命令的时候，docker 会读取当前目录下的命名为Dockerfile(首字母大写)的纯文本文件并执行里面的指令构建出一个docker image。这比SaltStack的配置管理要简单的多，不过还是要掌握一些简单的指令。

Dockerfile 由一行行命令语句组成，并且支持以#开头的注释行。指令是不区分大小写的，但是通常我们都大写。

下面我们通过构建一个Nginx的镜像来学习Dockerfile的编写。

### Nginx Dockerfile实战

**注意：第一个指令必须是FROM。**

```
[root@linux-node1 ~]# mkdir -p /opt/dockerfile/mynginx
[root@linux-node1 ~]# cd /opt/dockerfile/mynginx/
[root@test-node1 nginx]# vim Dockerfile
# This docker file uses the centos image
# VERSION 1
# Author: Jason Zhao
# Base image
FROM centos
# Maintainer
MAINTAINER shundong.zhao zhaoshundong@gmail.com
#Commands to update the image
RUN rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
RUN yum install -y nginx --enablerepo=epel
ADD index.html /usr/share/nginx/html/index.html
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx"]
```

为了大家更容易学习，我这里总结一个命令的介绍：

一般的，我们将Dockerfile 分为四部分：

- 基础镜像信息
- 维护者信息
- 镜像操作指令
- 容器启动时执行指令

### 常用指令的介绍

![img](http://k8s.unixhot.com/docker/media/74da151d98647093a4d1ade4f222fbe7.png)

**构建Dockerfile**

注意：ADD index.html就是放一个文件进去，这个文件需要大家自己准备一下。例如：

```
[root@linux-node1 mynginx]# echo "nginx in docker test" > index.html
```

使用dokcer build命令构建镜像，最后的.表示当前路径

```
[root@linux-node1 mynginx]# docker build -t mynginx:v2 .
```

构建完毕之后，我们就可以Run起来。

```
[root@linux-node1 ~]# docker run -d -p 92:80 mynginx:v2 nginx
```

测试访问

```
[root@linux-node1 mynginx]# curl http://192.168.56.11:92
nginx in docker test
```

现在你应该发现编写Dockerfile有多么的简单了吧，不过我们还是要系统的再来学习一遍。

### Dockerfile命令详解

下面我们来分别介绍下上面使用到的命令：

**FROM**

格式：FROM ![img]()或FROM ![img]():。 解释：FROM必须是Dockerfile里的第一条指令（注视除外），后面跟有效的镜像名（如果该镜像你的本地仓库没有则会从远程仓库Pull取）。然后后面的其它指令FROM的镜像中执行。

**MAINTAINER**

格式：MAINTAINER 解释：指定维护者的信息。

**RUN**

格式：RUN 或 RUN ["executable", "param1", "param2"]。 解释：运行命令，命令较长使可以使用来换行。推荐使用上面数组的格式

**CMD**

格式：

CMD ["executable","param1","param2"] 使用 exec 执行，推荐方式； CMD command param1 param2 在 /bin/sh 中执行，提供给需要交互的应用； CMD ["param1","param2"] 提供给ENTRYPOINT的默认参数；

解释：

CMD指定容器启动是执行的命令，每个Dockerfile只能有一条CMD命令，如果指定了多条，只有最后一条会被执行。如果你在启动容器的时候也指定的命令，那么会覆盖Dockerfile构建的镜像里面的CMD命令。

**ENTRYPOINT**

格式：

ENTRYPOINT ["executable", "param1", "param2"] ENTRYPOINT command param1 param2（shell中执行）。 解释：和CMD类似都是配置容器启动后执行的命令，并且不可被 docker run提供的参数覆盖。

每个 Dockerfile 中只能有一个ENTRYPOINT，当指定多个时，只有最后一个起效。ENTRYPOINT没有CMD的可替换特性，也就是你启动容器的时候增加运行的命令不会覆盖ENTRYPOINT指定的命令。

所以生产实践中我们可以同时使用ENTRYPOINT和CMD，例如：

```
ENTRYPOINT ["/usr/bin/rethinkdb"]
CMD ["--help"]
```

**USER**

格式：USER daemon 解释：指定运行容器时的用户名和UID，后续的RUN指令也会使用这里指定的用户。

**EXPOSE**

格式：EXPOSE [...] 解释：设置Docker容器内部暴露的端口号，如果需要外部访问，还需要启动容器时增加-p或者-P参数进行分配。

**ENV**

格式：ENV ENV = ... 解释：设置环境变量，可以在RUN之前使用，然后RUN命令时调用，容器启动时这些环境变量都会被指定

**ADD**

格式： ADD ... ADD ["",... ""] 解释：将指定的复制到容器文件系统中的

所有拷贝到container中的文件和文件夹权限为0755,uid和gid为0
如果文件是可识别的压缩格式，则docker会帮忙解压缩

**VOLUME**

格式：VOLUME ["/data"] 解释：可以将本地文件夹或者其他container的文件夹挂载到container中。

**WORKDIR**

格式：WORKDIR /path/to/workdir 解释：切换目录，为后续的 RUN、CMD、ENTRYPOINT 指令配置工作目录。可以多次切换(相当于cd命令)，也可以使用多个 WORKDIR指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。 例如：

```
WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwd
```

则最终路径为 /a/b/c。

**ONBUILD**

ONBUILD 指定的命令在构建镜像时并不执行，而是在它的子镜像中执行

**ARG**

格式：ARG [=] 解释：ARG指定了一个变量在docker build的时候使用，可以使用--build-arg =来指定参数的值，不过如果构建的时候不指定就会报错。

## Docker镜像生产规划实践

现在我们学会了如何使用Dockerfile来构建镜像，没错，真正生产环境我们也是大规模的使用Dockerfile。那么我们应该如何入手呢？

首先我们需要参考一些别人编写的Dockerfile，学习一些规范和技巧，可以来这里找找答案：https://github.com/dockerfile。

可以参考网友编写的Dockerfile的技巧和方法，那么真正的生产环境，肯定要根据自己公司或者团队的技术栈来构建不同的Docker镜像，根据Docker镜像的分层观念，我们可以在这个基础上对我们的镜像进行分层。

- 系统层
- 运行环境层
- 应用服务层

案例如下：

```
[root@linux-node1 ~]# mkdir /opt/dockerfile
[root@linux-node1 ~]# cd /opt/dockerfile/
[root@linux-node1 dockerfile]# mkdir system runtime app
[root@linux-node1 dockerfile]# tree
.
├── app
├── runtime
└── system
```

## 基础系统镜像

### CentOS系统镜像

默认的官方CentOS镜像有很多常用的命令并不提供，可以根据企业需求进行定制。需要注意的是使用yum安装完毕后，记得执行yum clean all。

因为yum会把下载的软件包和header存储在cache中，而不会自动删除。如果我们觉得它们占用了磁盘空间，可以使用yum clean all指令进行清除，可以减少镜像的大小。

```
[root@linux-node1 ~]# cd /opt/dockerfile/system/
[root@linux-node1 system]# mkdir centos
```

**1.编写Dockerfile**

```
[root@linux-node1 system]# vim centos/Dockerfile
# Docker for CentOS
#Base image
**FROM** centos
#Who
**MAINTAINER** Jason.Zhao xxx@gmail.com
#Base pkg
**RUN** rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
**RUN** yum install -y wget mysql-devel supervisor git redis tree net-tools sudo
psmisc && yum clean all
```

**2.构建镜像**

```
[root@linux-node1 system]# docker build -t unixhot/centos ./centos/
```

**3.查看镜像**

```
[root@linux-node1 system]# docker images | grep unixhot
unixhot/centos latest 4edcb790dacf 24 seconds ago 303 MB
```

**4.使用镜像创建容器**

```
[root@linux-node1 system]# docker run --name mycentos -it unixhot/centos
/bin/bash
[root@b137b1cdd3ac /]# ps aux
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
root 1 0.3 0.0 11776 1872 ? Ss 03:56 0:00 /bin/bash
root 15 0.0 0.0 47424 1668 ? R+ 03:56 0:00 ps aux
```

### CentOS系统镜像包含SSH

在很多时候如果你需要在CentOS里面启动sshd服务，那么就需要安装openssh-server并且重新生成SSH的主机密钥。同时如果，你需要给镜像设置一个密码，可以使用chpasswd非交互的方式来进行。

```
[root@linux-node1 ~]# cd /opt/dockerfile/system/
[root@linux-node1 system]# mkdir centos-ssh
```

**1.编写Dockerfile**

```
[root@linux-node1 system]# vim centos-ssh/Dockerfile
# Docker for CentOS
#Base image
FROM centos
#Who
MAINTAINER Jason.Zhao xxx@gmail.com
#EPEL
RUN rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
#Base pkg
RUN yum install -y openssh-clients openssl-devel openssh-server wget mysql-devel
supervisor git redis tree net-tools sudo psmisc && yum clean all
# For SSHD
RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
RUN ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key
RUN ssh-keygen -A -t dsa -f /etc/ssh/ssh_host_dsa_key
# Set root password
RUN echo "root:unixhot.com" | chpasswd
```

**2.构建镜像**

```
[root@linux-node1 system]# docker build -t unixhot/centos-ssh:v1 ./centos-ssh/
Sending build context to Docker daemon 2.048 kB
Step 1 : FROM centos
---> 980e0e4c79ec
Step 2 : MAINTAINER Jason.Zhao xxx@gmail.com
---> **Using cache**
---> d08da8648d91
Step 3 : RUN rpm -ivh
http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
---> **Using cache**
---> ad9a05bcfb78
…（省略后面输出）
```

> 这里有一个小技巧，为了加快构建的速度，注意到上面前三步的输出Using cache，因为Docker镜像的分层原理，已经构建过的layer不会重复构建。

**3.查看镜像**

```
[root@linux-node1 system]# docker images | grep unixhot
unixhot/centos-ssh v1 ff1ab7d7e7f4 19 seconds ago 304 MB
unixhot/centos latest 4edcb790dacf 2 hours ago 303 MB
```

**4.使用镜像创建容器**

```
[root@linux-node1 system]# docker run -d --name centos-ssh-demo -p 8022:22
unixhot/centos-ssh:v1 /usr/sbin/sshd -D
5f5bbe98a17c620f91a7d3e68a605a4bcbd48621f32aaa095245e59a8691e229

[root@linux-node1 system]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
5f5bbe98a17c unixhot/centos-ssh:v1 "/usr/sbin/sshd -D" 5 seconds ago Up 2
seconds 0.0.0.0:8022->22/tcp centos-ssh-demo
```

**5.使用ssh连接容器**

```
[root@linux-node1 ~]# ssh -p 8022 root@192.168.56.11
root@192.168.56.11's password:
[root@5f5bbe98a17c ~]# ps aux
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
root 1 0.0 0.0 82560 3600 ? Ss 05:46 0:00 /usr/sbin/sshd -D
root 7 0.0 0.0 11636 1116 ? Ss 05:47 0:00 /bin/bash
root 13 0.0 0.0 11636 1116 ? Ss 05:48 0:00 /bin/bash
root 63 0.7 0.0 139272 5424 ? Ss 05:51 0:00 sshd: root@pts/0
root 65 0.5 0.0 13376 1988 pts/0 Ss 05:51 0:00 -bash
root 78 0.0 0.0 49024 1808 pts/0 R+ 05:51 0:00 ps aux
```

Good Job，你现在可以通过ssh连接到自己创建的Docker容器上了。但是有没有发现一个问题，Docker只允许在前台运行一个进程，那已经运行了sshd。那么如何运行别的进程呢。显然我们做一个能ssh的镜像，目的就是为了在上面运行各种服务。怎么办呢？有很多解决方案。例如你编写一个脚本start.sh。可以在里面写多个服务的启动命令，只要start.sh不执行完毕，即可。当然真正生产推荐的是使用Supervisor。

### 使用Supervisor管理进程

Supervisor ([http://supervisord.org](http://supervisord.org/)) 是一个用 Python 写的进程管理工具，可以很方便的用来启动、重启、关闭进程（不仅仅是 Python 进程）。除了对单个进程的控制，还可以同时启动、关闭多个进程。

Supervisor 可以运行在 Linux、Mac OS X 上。如前所述，supervisor 是 Python 编写的，所以安装起来也很方便，可以直接用 pip :

```
pip install supervisor
```

现在让我们重新创建一个新的不启动ssh的容器，来实验下supervisor的安装和相关配置。以便于，我们编写Dockerfile。

**1.启动测试supervisor的docker容器**

```
[root@linux-node1 system]# docker run --rm -it unixhot/centos-ssh:v1 /bin/bash
[root@98aced104917 /]# ls -l /etc/supervisord*
-rw-r--r-- 1 root root 7953 Aug 20 2015 /etc/supervisord.conf
/etc/supervisord.d:
total 0
```

注意，在上一小节的镜像构建中，我们已经使用yum安装了supervisord。supervisor的配置文件为/etc/supervisord.conf。

**2.Supervisor配置**

Supervisor 相当强大，提供了很丰富的功能，不过我们可能只需要用到其中一小部分。安装完成之后，可以编写配置文件，来满足自己的需求。为了方便，我们把配置分成两部分：supervisord（supervisor 是一个 C/S 模型的程序，这是 server 端，对应的有 client 端：supervisorctl）和应用程序（即我们要管理的程序）。

```
[root@98aced104917 /]# vi /etc/supervisord.conf

#下面并没有列出完整的supervisord.conf的配置，默认注释掉的内容，请自行查看。

**[unix_http_server]**

# file=/var/run/supervisor/supervisor.sock #UNIX socket 文件，supervisorctl
会使用

**[supervisord]**
logfile=/var/log/supervisor/supervisord.log #主要日志文件，默认位置是
$CWD/supervisord.log
logfile_maxbytes=50MB #日志文件大小，超出会 rotate，默认 50MB
logfile_backups=10 #日志文件保留备份数量默认 10
loglevel=info #日志级别，默认 info，其它: debug,warn,trace
pidfile=/var/run/supervisord.pid #pid文件位置
**nodaemon=true #注意需要修改的为此处，将supervisor放在前台运行。**
minfds=1024 #可以打开的文件描述符的最小值，默认 1024
minprocs=200 #可以打开的进程数的最小值，默认 200
**[supervisorctl]**

#通过 UNIX socket 连接 supervisord，路径与 unix_http_server 部分的 file 一致

serverurl=unix:///var/run/supervisor/supervisor.sock ; use a unix:// URL for a
unix socket

**[include]**

#包含supervisord.d目录下*.ini文件，也就是说，我们可以将需要启动应用程序的配置放在这个目录下，这就是运维标准化。

files = supervisord.d/*.ini
```

**3. program 配置**

supervisor主配置文件的变更只需要修改nodaemon=true，可以看到关于程序的配置在主配置文件里面都是注释掉的：

```
;[program:theprogramname]
;command=/bin/cat ; the program (relative uses PATH, can take args)
;process_name=%(program_name)s ; process_name expr (default %(program_name)s)
;numprocs=1 ; number of processes copies to start (def 1)
;directory=/tmp ; directory to cwd to before exec (def no cwd)
;umask=022 ; umask for process (default None)
;priority=999 ; the relative start priority (default 999)
;autostart=true ; start at supervisord start (default: true)
;autorestart=true ; retstart at unexpected quit (default: true)

（省略部分输出）
```

我们现在要做的事情，就是编写一个sshd的程序管理配置，放置到/etc/supervisord.d目录下，注意文件后缀是.ini，你可以复制上面注释掉的内容进行修改：

```
[root@98aced104917 /]# vi /etc/supervisord.d/sshd.ini
[program:sshd]
command=/usr/sbin/sshd -D
process_name=%(program_name)s
autostart=true
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=10
```

**4.启动supervisord**

```
[root@98aced104917 ~]# /usr/bin/supervisord -c /etc/supervisord.conf
[root@98aced104917 ~]# netstat -ntlp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name
tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN 31/sshd
tcp6 0 0 :::22 :::* LISTEN 31/sshd
```

可以看到sshd已经启动了。是由supervisor进行启动的。

**5. 使用 supervisorctl**

Supervisorctl 是 supervisord 的一个命令行客户端工具，可以用来管理supervisord启动的进程。

```
[root@98aced104917 ~]# supervisorctl status
sshd RUNNING pid 31, uptime 0:02:35
```

**停止与启动sshd**

```
[root@98aced104917 ~]# supervisorctl stop sshd
sshd: stopped

[root@98aced104917 ~]# supervisorctl status
sshd STOPPED Oct 14 06:45 AM

[root@98aced104917 ~]# supervisorctl start sshd
sshd: started

[root@98aced104917 ~]# supervisorctl status
sshd RUNNING pid 42, uptime 0:00:03
```

**6..将supervisord.conf配置文件scp到宿主机目录下，和Dockerfile同目录**

```
[root@98aced104917 /]# scp /etc/supervisord.conf
192.168.56.11:/opt/dockerfile/system/centos-ssh/

[root@98aced104917 ~]# scp /etc/supervisord.d/sshd.ini
192.168.56.11:/opt/dockerfile/system/centos-ssh/
```

好的，可以退出容器，这个容器的生命周期结束。

### 标准化CentOS系统镜像

现在我们来构建一个全新的包含ssh的centos系统镜像。同时如果你不需要ssh。你依然可以使用supervisor连进行进程管理。

```
[root@linux-node1 ~]# cd /opt/dockerfile/system/centos-ssh/
[root@linux-node1 centos-ssh]# ls -l
total 16
-rw-r--r-- 1 root root 554 Oct 14 01:40 Dockerfile
-rw-r--r-- 1 root root 142 Oct 14 02:53 sshd.ini
-rw-r--r-- 1 root root 7953 Oct 14 02:30 supervisord.conf
```

**1.重新编写Dockerfile**

```
[root@linux-node1 centos-ssh]# vim Dockerfile
# Docker for CentOS
#Base image
FROM centos
#Who
MAINTAINER Jason.Zhao xxx@gmail.com
#EPEL
RUN rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
#Base pkg
RUN yum install -y openssh-clients openssl-devel openssh-server wget mysql-devel
supervisor git redis tree net-tools sudo psmisc && yum clean all
# For SSHD
RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
RUN ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key
RUN ssh-keygen -A -t dsa -f /etc/ssh/ssh_host_dsa_key
# Set root password
RUN echo "root:unixhot.com" | chpasswd
#Supervisord config
ADD supervisord.conf /etc/supervisord.conf
ADD sshd.ini /etc/supervisord.d/sshd.ini
# Outside Port
EXPOSE 22
#supervisord start
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
```

**2.构建镜像**

```
[root@linux-node1 centos-ssh]# docker build -t unixhot/centos-ssh:latest .
```

**3.查看镜像**

```
[root@linux-node1 centos-ssh]# docker images | grep unixhot
unixhot/centos-ssh latest 0d4b39f9100e 31 seconds ago 304 MB
unixhot/centos-ssh v1 ff1ab7d7e7f4 About an hour ago 304 MB
unixhot/centos latest 4edcb790dacf 3 hours ago 303 MB
```

**4.构建容器**

```
[root@linux-node1 ~]# docker run -d --name centos-ssh-supervisor -p 2222:22
unixhot/centos-ssh
9ebf53b3cacd093c11a9b5773c5fc62875626061f3f3fe0b5380013c78f2f15b

[root@linux-node1 ~]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
9ebf53b3cacd unixhot/centos-ssh "/usr/bin/supervisord" 6 seconds ago Up 3
seconds 0.0.0.0:2222->22/tcp centos-ssh-supervisor
```

**5.使用ssh连接容器**

```
[root@linux-node1 ~]# ssh root@192.168.56.11 -p 2222
root@192.168.56.11's password:
[root@9ebf53b3cacd ~]# ps aux
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
root 1 0.3 0.0 117248 14668 ? Ss 07:25 0:00 /usr/bin/python /usr/bin/supervisord
-c /etc/supervisord.conf
root 9 0.0 0.0 82560 3608 ? S 07:25 0:00 /usr/sbin/sshd -D
root 25 1.2 0.0 139272 5428 ? Ss 07:26 0:00 sshd: root@pts/0
root 27 0.0 0.0 13376 1984 pts/0 Ss 07:27 0:00 -bash
root 40 0.0 0.0 49024 1808 pts/0 R+ 07:27 0:00 ps aux
```

**操作系统标准化约定：**

统一使用supervisor进行进程的管理

所有Docker容器，使用centos-ssh镜像时提供supervisor的ini配置文件。

## 运行环境镜像

现在有了系统镜像，当然文中的知识案例，具体的情况可以根据你所在企业的具体情况进行相关的配置，现在我们可以在系统镜像的基础上来构建运行环境。

### Java 运行环境

Java环境在生产中非常常见，例如会启动一个单一的Java小进程处理队列里面的内容，只需要有JDK即可。那首先我们先构建一个只包含JDK的运行环境：

```
[root@linux-node1 ~]# cd /opt/dockerfile/runtime/
[root@linux-node1 runtime]# mkdir java
```

Java运行环境要基于centos-ssh的镜像来操作，所以先运行一个临时容器来构建Java运行环境，然后把操作步骤转换为Dockerfile。

```
[root@linux-node1 ~]# docker run --rm -it unixhot/centos-ssh /bin/bash
[root@ec2696c0f9f4 /]# yum install -y java-1.8.0-openjdk
java-1.8.0-openjdk-devel
```

使用yum安装的openjdk，默认可以不设置JAVA_HOME，即可执行相关的java程序。

**1.编写Dockerfile**

```
[root@linux-node1 runtime]# vim java/Dockerfile
# Docker for CentOS
#Base image
FROM unixhot/centos-ssh
#Who
MAINTAINER Jason.Zhao xxx@gmail.com
#Base pkg
RUN yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel && yum clean all
# JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk
# Outside Port
EXPOSE 22
#supervisord start
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
```

**2.构建镜像**

```
[root@linux-node1 runtime]# docker build -t unixhot/runtime-java ./java/
```

**3.查看镜像**

```
[root@linux-node1 ~]# docker images | grep unixhot
unixhot/runtime-java latest ff3a2bb0b2a9 2 minutes ago 505.1 MB
unixhot/centos-ssh latest 02d375a33cd1 38 minutes ago 304 MB
unixhot/centos-ssh v1 ff1ab7d7e7f4 2 hours ago 304 MB
unixhot/centos latest 4edcb790dacf 4 hours ago 303 MB
```

当然十分可以使用，需要大家去运行一个小程序进行测试，这里就不演示了。

### Tomcat运行环境

**相对于单一使用Java命令启动Java服务，Tomcat**

**1.启动centos-ssh镜像的实例**

```
[root@linux-node1 ~]# docker run --rm -it unixhot/centos-ssh /bin/bash
[root@80f529b965ef /]# yum install -y java-1.8.0-openjdk
java-1.8.0-openjdk-devel
```

**为什么不直接使用Java的运行环境构建Tomcat？**

首先，确实可以直接使用Java的运行环境来进行Tomcat的构建，但是会破坏我们系统层、运行环境层、业务层的架构，也就是将依赖关系复杂话了，这要根据企业自身情况来做。我先说说我的理由：

如果Tomcat使用的Java版本要升级到JDK 1.8版本，而Java运行环境的版本是1.7，不能升级，因为有很多服务就是在JDK 1.7的环境下开发的，未进行迁移。这个时候，如果Tomcat是基于Java 1.7的运行环境构建的，就出现依赖关系了。所以，仅仅是个人的建议：让问题简单化！

**2.安装部署Tomcat 8**

```
[root@80f529b965ef /]# cd /usr/local/src
[root@80f529b965ef src]# wget http://mirrors.cnnic.cn/apache/tomcat/tomcat-8/v8.5.6/bin/apache-tomcat-8.5.6.tar.gz
[root@80f529b965ef src]# tar zxf apache-tomcat-8.5.6.tar
[root@80f529b965ef src]# mv apache-tomcat-8.5.6 /usr/local/
[root@80f529b965ef src]# ln -s /usr/local/apache-tomcat-8.5.6/
/usr/local/tomcat
```

**3.使用supervisor启动tomcat**

```
[root@897cc10b8adf ~]# cd /etc/supervisord.d/
[root@897cc10b8adf supervisord.d]# vi tomcat.ini
[program:tomcat]
command=/usr/local/tomcat/bin/catalina.sh run
process_name=%(program_name)s
autostart=true
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=10
```

**更新supervisor并查看tomcat状态**

```
[root@897cc10b8adf supervisord.d]# supervisorctl update
tomcat: stopped
tomcat: updated process group
[root@897cc10b8adf supervisord.d]# supervisorctl status
sshd RUNNING pid 408, uptime 0:06:00
tomcat RUNNING pid 704, uptime 0:00:03
```

**4.准备Dockerfile的构建环境**

现在我们开始编写Dockerfile，在编写之前，我们先决定一件事情，apache-tomcat的包，我们应该是像实验中使用wget进行下载并解压呢，还是应该提前将包放在宿主机，构建的时候使用Dockerfile ADD进行呢。

我建议选择后者，因为实际的工作中，我们通常要对Tomcat进行很多定制化的配置，例如进行安全规范的调整等。

这里我们能演示的就是直接下载，可以想象一下，这个已经是你修改过的软件包。

```
[root@linux-node1 ~]# cd /opt/dockerfile/runtime/
[root@linux-node1 runtime]# mkdir tomcat
[root@linux-node1 runtime]# cd tomcat/
[root@linux-node1 tomcat]# wget http://mirrors.cnnic.cn/apache/tomcat/tomcat-8/v8.5.6/bin/apache-tomcat-8.5.6.tar.gz
```

**5.编写Dockerfile**

```
# Docker for CentOS
#Base image
FROM unixhot/centos-ssh
#Who
MAINTAINER Jason.Zhao xxx@gmail.com
#Base pkg
RUN yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel && yum clean all
# JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk
# Tomcat
ADD apache-tomcat-8.5.6.tar.gz /usr/local/
RUN ln -s /usr/local/apache-tomcat-8.5.6 /usr/local/tomcat
ADD tomcat.ini /etc/supervisord.d/tomcat.ini
ENV TOMCAT_HOME /usr/local/tomcat
# Outside Port
EXPOSE 22 8080
#supervisord start
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
```

**6.构建tomcat镜像**

```
[root@linux-node1 tomcat]# ls -l
total 9096
-rw-r--r-- 1 root root 9304958 Oct 6 16:39 apache-tomcat-8.5.6.tar.gz
-rw-r--r-- 1 root root 546 Oct 14 05:51 Dockerfile
-rw-r--r-- 1 root root 165 Oct 14 06:33 tomcat.ini
[root@linux-node1 tomcat]# docker build -t unixhot/runtime-tomcat .
```

**7.查看镜像**

```
[root@linux-node1 tomcat]# docker images | grep unixhot
unixhot/runtime-tomcat latest ef8372a88ad4 6 minutes ago 518.2 MB
unixhot/runtime-java latest ff3a2bb0b2a9 2 hours ago 505.1 MB
unixhot/centos-ssh latest 02d375a33cd1 3 hours ago 304 MB
unixhot/centos-ssh v1 ff1ab7d7e7f4 4 hours ago 304 MB
unixhot/centos latest 4edcb790dacf 6 hours ago 303 MB
```

**8.构建tomcat-demo容器**

```
[root@linux-node1 tomcat]# docker run -d --name tomcat-demo -p 88:8080 -p
89:22 unixhot/runtime-tomcat
8cea3ef85634210eb0cfab0f65a63b0ebd6961b5a67fc765b762785c01cd2c18
[root@linux-node1 tomcat]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
8cea3ef85634 unixhot/runtime-tomcat "/usr/bin/supervisord" 5 seconds ago Up 2
seconds 0.0.0.0:89->22/tcp, 0.0.0.0:88->8080/tcp tomcat-demo
```

**9.访问tomcat**

```
http://192.168.56.11:88/
```

## 应用镜像

最上层的业务镜像就是在运行环境的基础上，直接使用或者根据业务情况再次进行二次定制。例如对于PHP运行环境，默认只安装基础通用的模块，对于业务需要的时候再次进行二次构建。这里我们拿一个比较简单的Jenkins来模拟。

### Jenkins镜像构建

JenkinsJenkins是基于Java开发的一种持续集成工具，它有自己的yum安装方式，但是最直接的还是直接下载war包存放到tomcat目录下。

```
[root@linux-node1 ~]# cd /opt/dockerfile/app/
[root@linux-node1 app]# mkdir jenkins
[root@linux-node1 app]# cd jenkins/
[root@linux-node1 jenkins]# wget http://mirrors.jenkins-ci.org/war/latest/jenkins.war
```

**2.编写Dockerfile**

```
# Docker for CentOS
#Base image
FROM unixhot/runtime-tomcat
#Who
MAINTAINER Jason.Zhao xxx@gmail.com
# Jenkins
ADD jenkins.war /usr/local/tomcat/webapps/
# Outside Port
EXPOSE 22 8080
#supervisord start
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
```

**3.构建jenkins镜像**

```
[root@linux-node1 jenkins]# docker build -t unixhot/jenkins .
```

**4.查看镜像**

```
[root@linux-node1 jenkins]# docker images | grep unixhot
unixhot/jenkins latest a7b16bc093ed 40 seconds ago 588.7 MB
unixhot/runtime-tomcat latest 3b596c9a7696 2 hours ago 518.8 MB
unixhot/runtime-java latest 476a6a2fc074 2 hours ago 505.8 MB
unixhot/centos-ssh latest d85aa8a9dfd4 3 hours ago 304.6 MB
unixhot/centos-ssh v1 3309208ed679 4 hours ago 300.9 MB
unixhot/centos latest 83f0491a30e1 4 hours ago 282.3 MB
```

**5.创建jenkins-demo容器**

```
[root@linux-node1 jenkins]# docker run -d --name jenkins-demo -p 91:22 -p
92:8080 unixhot/jenkins
6d88ba756befc84ef1820818994be028c12ac13825c2b439d680358d101e922e
[root@linux-node1 jenkins]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
6d88ba756bef unixhot/jenkins "/usr/bin/supervisord" 7 seconds ago Up 2 seconds
0.0.0.0:91->22/tcp, 0.0.0.0:92->8080/tcp jenkins-demo
```

**6.访问jenkins并进行初始化安装**

![img](http://k8s.unixhot.com/docker/media/e59722d6316d2cc9702c1989e1c9f3f1.png)

当然如果你想构建一个启动后直接就可以使用的Jenkins，可以在安装完毕后，把刚才的容器重新提交成为镜像。

**7.安装Jenkins并提交成为jenkins-login镜像。**

进入镜像或者安装的密码，填入密码框并继续。后面步骤省略。全部安装默认即可。注意安装插件时时间会比较长。

```
[root@linux-node1 ~]# ./docker_in.sh jenkins-demo
[root@b3bbada66693 /]# cat /root/.jenkins/secrets/initialAdminPassword
b5257b8891464ebf890b38c00d24de71
```

**获取Container ID：**

```
[root@linux-node1 ~]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
b3bbada66693 unixhot/jenkins "/usr/bin/supervisord" 9 minutes ago Up 9 minutes
0.0.0.0:91->22/tcp, 0.0.0.0:92->8080/tcp jenkins-demo
```

**提交新的镜像**

```
[root@linux-node1 ~]# docker commit -m "jenkins login" b3bbada66693
unixhot/jenkins-login
[root@linux-node1 ~]# docker images | grep jenkins
unixhot/jenkins-login latest c453363bb9f7 22 seconds ago 776.6 MB
unixhot/jenkins latest a7b16bc093ed 13 minutes ago 588.7 MB
```

**8.使用jenkins-login镜像构建容器**

现在可以使用的Jenkins容器诞生了，赶紧创建一个容器来进行使用吧。

```
[root@linux-node1 ~]# docker run -d --name jenkins-login -p 93:22 -p 94:8080
unixhot/jenkins-login
af421b4d5b076c756ab58ed8cc95c615a321f9517d30b755667d5d80d1336a63
[root@linux-node1 ~]# docker ps -l
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
af421b4d5b07 unixhot/jenkins-login "/usr/bin/supervisord" 4 seconds ago Up 2
seconds 0.0.0.0:93->22/tcp, 0.0.0.0:94->8080/tcp jenkins-login
```

**9.访问Jenkins容器，开始持续集成之路**

![img](http://k8s.unixhot.com/docker/media/04b8b149d6c7ce1e18f67796998be9b5.png)

# 3 Docker私有仓库实践

## Docker Registry

### 创建Docker Registry

在安装了 Docker 后，可以通过获取官方 registry 镜像来运行。

```
[root@linux-node1 ~]# docker run -d --name docker-registry -p 5000:5000 registry
b822d0a3e77e6a3144408119ccc2e7344f60f7404651adc025ce84561245b2d2
```

### 配置Docker信任仓库

```
[root@linux-node1 ~]# vim /etc/docker/daemon.json
{
"registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],
"insecure-registries" : ["http://192.168.56.11:5000"]
}
[root@linux-node1 ~]# systemctl restart docker
```

### Push镜像到Docker Registry

```
[root@linux-node1 ~]# docker tag system/centos 192.168.56.11:5000/system/centos
[root@linux-node1 ~]# docker push 192.168.56.11:5000/system/centos
```

## Registry项目Harbor

上面我们简单的介绍了Docker Registry的使用，但是真正生产环境，我们无法有效的管理Docker Regisry。官方提供了收费版的Registry，社区有开源版本的Harbor。

**Harbor简介**

Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。提升用户使用Registry构建和运行环境传输镜像的效率。Harbor支持安装在多个Registry节点的镜像资源复制，镜像全部保存在私有Registry中， 确保数据和知识产权在公司内部网络中管控。另外，Harbor也提供了高级的安全特性，诸如用户管理，访问控制和活动审计等。

基于角色的访问控制 - 用户与Docker镜像仓库通过“项目”进行组织管理，一个用户可以对多个镜像仓库在同一命名空间（project）里有不同的权限。

镜像复制 - 镜像可以在多个Registry实例中复制（同步）。尤其适合于负载均衡，高可用，混合云和多云的场景。

图形化用户界面 - 用户可以通过浏览器来浏览，检索当前Docker镜像仓库，管理项目和命名空间。

AD/LDAP 支持 - Harbor可以集成企业内部已有的AD/LDAP，用于鉴权认证管理。

审计管理 - 所有针对镜像仓库的操作都可以被记录追溯，用于审计管理。

国际化 - 已拥有英文、中文、德文、日文和俄文的本地化版本。更多的语言将会添加进来。

RESTful API - RESTful API 提供给管理员对于Harbor更多的操控, 使得与其它管理软件集成变得更容易。

部署简单 - 提供在线和离线两种安装工具， 也可以安装到vSphere平台(OVA方式)虚拟设备。

### Harbor部署

Harbor为运维提供了多种部署方法，你可以直接clone最新代码，也可以支持offline的部署方法，直接下载官方构建好的镜像来进行使用。可以在github的releases查看最新版本，本文是1.7.1版本。*https://github.com/vmware/harbor/releases*

建议下载offline的压缩包，里面包含了harbor启动所用的所有docker镜像，可以快速的部署harbor。

```
# cd /usr/local/src
# wget https://storage.googleapis.com/harbor-releases/release-1.7.0/harbor-offline-installer-v1.7.1.tgz
# tar zxf harbor-offline-installer-v1.7.1.tgz
```

Harbor的每个组件都是以Docker容器的形式构建的，使用Docker Compose来对它进行部署，你可以查看docker-compose.yml文件。

### Harbor配置

**为Harbor配置HTTP访问**

```
[root@linux-node1 ~]# cd harbor
[root@linux-node1 harbor]# vim harbor.cfg
hostname = 192.168.56.11
```

**配置Docker信任仓库**

如果使用http的方式配置harbor需要为所有Docker添加信任配置。

```
[root@linux-node1 ~]# vim /etc/docker/daemon.json
{
"registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],
"insecure-registries" : ["http://192.168.56.11"]
}
[root@linux-node1 ~]# systemctl restart docker
```

**为Harbor配置https访问**

默认情况下Harbor是使用http进行访问，官方提供了自签名证书的方法，不过生产环境还是建议购买SSL证书。

**1.申请证书**

如果你没有SSL证书，那么也不要使用网上复杂的自签名证书的步骤了。目前阿里云提供Symantec 免费型DV SSL证书。申请成功后，下载Nginx版本的证书文件。

**2.Harbor配置**

```
[root@docker-node1 harbor]# cd /usr/local/src/harbor/
[root@docker-node1 harbor]# vim harbor.cfg
hostname = reg.unixhot.com
ui_url_protocol = https
ssl_cert = /usr/local/src/harbor/1_registry.linuxhot.com_bundle.crt
ssl_cert_key = /usr/local/src/harbor/2_registry.linuxhot.com.key
```

请将证书放置在宿主机上，并配置正确的证书路径。

**Docker Compose安装**

```
[root@linux-node1 ~]#yum install -y docker-compose
[root@linux-node1 ~]# docker-compose --version
docker-compose version 1.8.0, build 94f7016
```

**安装Harbor**

```
[root@k8s-harbor-1 ~]# cd /usr/local/src/harbor/
[root@k8s-harbor-1 harbor]# ./install.sh
```

**查看Harbor状态**

```
[root@k8s-harbor-1 harbor]# docker-compose ps
Name Command State Ports
------------------------------------------------------------------------------------------------------------------------------

harbor-adminserver /harbor/start.sh Up
harbor-core /harbor/start.sh Up
harbor-db /entrypoint.sh postgres Up 5432/tcp
harbor-jobservice /harbor/start.sh Up
harbor-log /bin/sh -c /usr/local/bin/ ... Up 127.0.0.1:1514->10514/tcp
harbor-portal nginx -g daemon off; Up 80/tcp
nginx nginx -g daemon off; Up 0.0.0.0:443->443/tcp, 0.0.0.0:4443->4443/tcp,
0.0.0.0:80->80/tcp
redis docker-entrypoint.sh redis ... Up 6379/tcp
registry /entrypoint.sh /etc/regist ... Up 5000/tcp
registryctl /harbor/start.sh Up
```

### 使用Harbor管理Registry

现在你就可以访问你的域名[http://reg.linuxhot.com进行登录。默认用户admin，密码Harbor12345。](http://reg.linuxhot.xn--com-vj3fu53h4lw8bl.xn--admin%2Charbor12345-8l75a8z3f3f3fwrmtj9hrk9d./)

![img](http://k8s.unixhot.com/docker/media/366c20c68d5e6467434fb8108baa6081.png)

登录后的第一件事情永远都是修改默认密码。然后你就可以在项目管理中，新建和管理项目了。不过默认情况下创建的项目library是公开的，如果你要使用这个项目，而且域名放在公网上，请取消公开。

```
[root@linux-node1 ~]# docker login reg.linuxhot.com
Username: admin
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store
Login Succeeded
```

**提交镜像到Registry**

```
# docker tag centos:latest reg.linuxhot.com/system/centos:latest
# docker push reg.linuxhot.com/system/centos:latest
```

# Kubernetes快速入门

学习Kubernetes最权威的知识来源就是Kubernetes官方文档，而且对于初学者来说，官方文档可能不是最佳选择。本章将带你循循序渐进的学习Kubernetes，后面章节会通过大量的实践案例来理解和掌握Kubernetes的知识。

- Kubernetes官方文档：https://kubernetes.io/docs/home/
- Kuernetes Github：https://github.com/kubernetes/

## Kubernetes架构介绍

Kubernetes 源于希腊语，意为 “舵手” 或 “飞行员”，是用于自动部署，扩展和管理容器化应用程序的开源系统，由于K和S之间有8个字母，被简称为K8S。Kubernetes 构建在 Google 15 年生产环境经验基础之上，可以将Kubernetes看作为Google内部的容器管理平台Brog的开源版本，当然他们之间是有一些差异的。

### Kubernetes系统架构

Kubernetes被设计为Master和Node两个角色，这类似于OpenStack的架构理念，Master为控制节点，Node为计算节点或者叫工作节点，在Master节点上有一个API Server服务，对外提供标准的RestAPI，这也是Kubernetes集群的入口，意外着只要和集群进行交互必须连接到API Server上。

![img](http://k8s.unixhot.com/kubernetes/media/4f93fc22b605a967fa54a2491557c04e.png)

**Master节点介绍**

Kubernetes Master节点主要有4个组件，API Server、Scheduler、Controller、etcd。如下图所示：

![img](http://k8s.unixhot.com/kubernetes/media/0786901c59be2f756d7b979619a048b2.png)

- **API Server**：提供Kubernetes API接口，主要处理 Rest操作以及更新Etcd中的对象。是所有资源增删改查的唯一入口。
- **Scheduler**：绑定Pod到Node上，主要做资源调度。
- **Controller Manager**：所有其他群集级别的功能，目前由控制器Manager执行。资源对象的自动化控制中心，Kubernetes集群有很多控制器。
- **Etcd**：所有持久化的状态信息存储在Etcd中，这个是Kubernetes集群的数据库。

**Node节点介绍**

Node节点是Kubernetes集群的工作节点，在Node节点上主要运行了Docker、Kubelet、kube-proxy三个服务（Fluentd请先忽略），如下图所示：

![img](http://k8s.unixhot.com/kubernetes/media/ff26ae9ea18c1a93e50b8226abfa2fa7.png)

- **Docker Engine**：负责节点的容器的管理工作，最终创建出来的是一个Docker容器。
- **Kubelet**：安装在Node上的代理服务，用来管理Pods以及容器、镜像、Volume等，实现对集群对节点的管理。
- **Kube-proxy**：安装在Node上的网络代理服务，提供网络代理以及负载均衡，实现与Service通讯。

### Kubernetes逻辑架构

在上面的介绍中提到像Pod、Service这些概念，在Kubernetes的系统架构图中并没有体现出来，这些可以理解为Kubernetes逻辑架构中的组件。也就是在Master和Node上并不具体存在的一个服务或者进程，但却是Kubernetes的组件，也是我们的管理对象。主要有Pod、Service和各种控制器等。

**Pod**

Pod是Kubernetes的最小管理单元，一个Pod可以包含一组容器和卷。虽然一个Pod里面可以包含一个或者多个容器，但是Pod只有一个IP地址，而且Pod重启后，IP地址会发生变化。

![img](http://k8s.unixhot.com/kubernetes/media/e2a89d5ac819b578808e62d8fee0e960.png)

**Controller**

一个应用如果可以有一个或者多个Pod，就像你给某一个应用做集群，集群中的所有Pod是一模一样的。Kubernetes中有很多控制器可以来管理Pod，例如下图的Replication Controller可以控制Pod的副本数量，从而实现横向扩展。

![img](http://k8s.unixhot.com/kubernetes/media/c4ae2886ff4fdb51b9a0dd20a14c8e50.png)

Kubernetes中有很多控制器，后面的章节我们会一一讲到，常用的控制器如下：

- Replication Controller（新版本已经被ReplicaSet所替代）
- ReplicaSet（新版本被封装在Deployment中）
- Deployment：封装了Pod的副本管理、部署更新、回滚、扩容、缩容等功能。
- DaemonSet：保证所有的Node上有且只有一个Pod在运行。
- StatefulSet：有状态的应用，为 Pod 提供唯一的标识，它可以保证部署和 scale 的顺序。
- Job：使用Kubernetes运行单一任务。
- CronJob：使用Kubernetes运行定时任务。

**Service**

由于Pod的生命周期是短暂的，而且每次重启Pod的IP地址都会发生变化，而且一个Pod有多个副本，也就是说一个集群中有了多个节点，就需要考虑负载均衡的问题。Kubernetes使用Service来实现Pod的访问，而且Service有一个Cluster IP，通常也称之为VIP，是固定不变的。

![img](http://k8s.unixhot.com/kubernetes/media/2e61328894d1eaf548ad6ff06d85a6a3.png)

### Kubernetes网络介绍

在Kubernetes集群中存在着三种网络，分别是Node网络、Pod网络和Service网络，这几种网络之间的通信需要依靠网络插件，Kubernetes本身并没有提供，社区提供了像Flannel、Calico、Cannal等，后面章节会详述。

**Node网络**

Node网络指的是Kubernetes Node节点本地的网络，在本实验环境中使用的是192.168.56.0/24这个网段，所有的Node和Master在该网段都可以正常通信。

**Pod网络**

后面创建的Pod，每一个Pod都会有一个IP地址，这个IP地址网络段被称之为Pod网络，如下图所示。

```
[root@linux-node1 ~]# kubectl get pod -o wide

NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES

nginx-54458cd494-hpn68 1/1 Running 0 9m7s 10.2.1.2 linux-node2.linuxhot.com
<none> <none>

nginx-54458cd494-r4mfq 1/1 Running 0 7m46s 10.2.1.3 linux-node2.linuxhot.com
<none> <none>
```

**Service网络**

Service是为Pod提供访问和负载均衡的网络地址段，如下图所示。

```
[root@linux-node1 ~]# kubectl get service

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE

kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 64m

nginx NodePort 10.1.216.23 <none> 80:30893/TCP 8m3s
```

Kubernetes的组件和知识绝非如此，快速入门可以先了解这么多，下一章节，我们先快速的部署一个Kubernetes集群。

## 使用kubeadm部署Kubernetes v1.16.4

想要快速的体验Kubernetes的功能，官方提供了非常多的部署方案，可以使用官方提供的kubeadm以容器的方式运行Kubernetes集群，也可以使用二进制方式部署更有利于理解Kubernetes的架构，我们先使用kubeadm快速的部署一个Kubernetes集群后，学习Kubernetes的使用，然后动手使用二进制的方式来深入理解Kubernetes架构。

> 注意：请不要把目光仅仅放在部署上，要慢慢的了解其本质。

Kubernetesv1.13版本发布后，kubeadm才正式进入GA，可以生产使用。目前Kubernetes的对应镜像仓库，在国内阿里云也有了镜像站点，使用kubeadm部署Kubernetes集群变得简单并且容易了很多，本文使用kubeadm带领大家快速部署Kubernetes v1.16.2版本。

**实验环境准备**

在本书的实验环境的基础上，我们如下来分配角色：

| 主机名                   | IP地址（NAT）                                        | 最低配置    | 描述                      |
| ------------------------ | ---------------------------------------------------- | ----------- | ------------------------- |
| linux-node1.linuxhot.com | eth0:192.168.56.11                                   | 1CPU/1G内存 | Kubernets Master/Etcd节点 |
| linux-node2.linuxhot.com | eth0:192.168.56.12                                   | 1CPU/1G内存 | Kubernets Node节点        |
| linux-node3.linuxhot.com | eth0:192.168.56.13                                   | 1CPU/1G内存 | Kubernets Node节点        |
| Service网段              | 10.1.0.0/16                                          |             |                           |
| Pod网段                  | 10.2.0.0/16                                          |             |                           |
| 备注                     | 如果有条件可以部署多个Kubernets node，实验效果更佳。 |             |                           |

### 部署Docker

首先需要在所有Kubernetes集群的节点中安装Docker和kubeadm。

**1.设置使用国内Yum源**

```
[root@linux-node1 ~]# cd /etc/yum.repos.d/
[root@linux-node1 yum.repos.d]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

**2.安装指定的Docker版本**

由于kubeadm对Docker的版本是有要求的，需要安装与Kubernetes匹配的版本，这个对应关系一般在每次发布的Changlog中可以找到，例如1.16.2的CHANGELOG如下：[CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.16.md)

当前v1.16.2支持的Docker版本有v1.13.1, 17.03, 17.06, 17.09, 18.06, 18.09,可以通过下面命令查看：

```
[root@linux-node1 ~]# yum list docker-ce.x86_64 --showduplicates | sort -r
 * updates: mirror.jdcloud.com
Loading mirror speeds from cached hostfile
Loaded plugins: fastestmirror
 * extras: mirror.jdcloud.com
 * epel: mirrors.njupt.edu.cn
docker-ce.x86_64            3:19.03.4-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.3-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.2-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.1-3.el7                     docker-ce-stable
docker-ce.x86_64            3:19.03.0-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.9-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.8-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.7-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.6-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.5-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.4-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.3-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.2-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.1-3.el7                     docker-ce-stable
docker-ce.x86_64            3:18.09.0-3.el7                     docker-ce-stable
docker-ce.x86_64            18.06.3.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.06.2.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.06.1.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.06.0.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            18.03.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            18.03.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.12.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.12.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.09.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.09.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.06.2.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.06.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.06.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.03.3.ce-1.el7                    docker-ce-stable
docker-ce.x86_64            17.03.2.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.03.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            17.03.0.ce-1.el7.centos             docker-ce-stable
 * base: mirrors.neusoft.edu.cn
Available Packages
```

**3.安装Docker18.09版本**

```
[root@linux-node1 ~]# yum -y install docker-ce-18.09.9-3.el7 docker-ce-cli-18.09.9-3.el7
```

**4.设置cgroup驱动使用systemd**

```
[root@linux-node1 ~]# mkdir /etc/docker
[root@linux-node1 ~]# cat > /etc/docker/daemon.json <<EOF
    {
      "registry-mirrors": ["https://dx5z2hy7.mirror.aliyuncs.com"],
      "exec-opts": ["native.cgroupdriver=systemd"]
    }
EOF
```

**5.启动后台进程**

```
[root@linux-node1 ~]# systemctl enable docker && systemctl start docker
```

**6.查看Docker版本**

```
[root@linux-node1 ~]# docker --version
Docker version 18.09.9, build 039a7df9ba
```

### 部署kubadm和kubelet

在Kubernetes集群的所有节点上部署完毕Docker后，还需要全部部署kubeadm和kubelet，其中kubeadm是管理工具，kubelet是一个服务，用于启动Kubernetes对应的服务。

**1.设置kubernetes YUM仓库**

这里在官方文档的基础上修改为了国内阿里云的yum仓库，

```
[root@linux-node1 ~]# vim /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
```

> 注意：最下面一行gpgkey的两个URL地址之间是空格，因为排版问题可能导致换行。

**2.安装软件包**

由于版本更新频繁，请指定对应的版本号，本文采用1.16.2版本，其它版本未经测试，如果不指定版本默认安装最新版本。

```
[root@linux-node1 ~]# yum install -y kubelet-1.16.2 kubeadm-1.16.2 kubectl-1.16.2 ipvsadm
```

**3.配置kubelet**

默认情况下，Kubelet不允许所在的主机存在交换分区，后期规划的时候，可以考虑在系统安装的时候不创建交换分区，针对已经存在交换分区的可以设置忽略禁止使用Swap的限制，不然无法启动Kubelet。

```
[root@linux-node1 ~]# vim /etc/sysconfig/kubelet
KUBELET_CGROUP_ARGS="--cgroup-driver=systemd"
KUBELET_EXTRA_ARGS="--fail-swap-on=false"
```

在所有节点上关闭SWAP

```
[root@linux-node1 ~]# swapoff -a
```

**4.设置内核参数**

```
[root@linux-node1 ~]# cat <<EOF >  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF
```

使配置生效

```
[root@linux-node1 ~]# sysctl --system
```

**5.启动kubelet并设置开机启动**

注意，此时kubelet是无法正常启动的，可以查看/var/log/messages有报错信息，等待执行初始化之后即可正常，为正常现象。

```
[root@linux-node1 ~]# systemctl enable kubelet && systemctl start kubelet
```

**6.使用IPVS进行负载均衡**

在Kubernetes集群中Kube-Proxy组件负载均衡的功能，默认使用iptables，生产环境建议使用ipvs进行负载均衡。在所有节点启用ipvs模块

```
[root@linux-node1 ~]# vim /etc/sysconfig/modules/ipvs.modules
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
[root@linux-node1 ~]# chmod +x /etc/sysconfig/modules/ipvs.modules
[root@linux-node1 ~]# source /etc/sysconfig/modules/ipvs.modules
```

查看模块是否加载正常

```
[root@linux-node1 ~]# lsmod | grep -e ip_vs -e nf_conntrack_ipv4
ip_vs_sh               12688  0 
ip_vs_wrr              12697  0 
ip_vs_rr               12600  0 
ip_vs                 145497  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr
nf_conntrack_ipv4      15053  15 
nf_defrag_ipv4         12729  1 nf_conntrack_ipv4
nf_conntrack          133095  7 ip_vs,nf_nat,nf_nat_ipv4,xt_conntrack,nf_nat_masquerade_ipv4,nf_conntrack_netlink,nf_conntrack_ipv4
libcrc32c              12644  4 xfs,ip_vs,nf_nat,nf_conntrack
```

- 以上步骤请在Kubernetes的所有节点上执行，本实验环境是需要在linux-node1、linux-node2、linux-node3这三台机器上均安装Docker、kubeadm、kubelet，对于以上操作需要自动化可以参考我使用SaltStack完成的salt-kubeadm项目：https://github.com/unixhot/salt-kubeadm

### 初始化集群部署Master

在所有节点上安装完毕后，在linux-node1这台Master节点上进行集群的初始化工作。

**1.导出所有默认的配置**

```
[root@linux-node1 ~]# kubeadm config print init-defaults > kubeadm.yaml
```

上面的命令会生成一个默认配置的kubeadm配置文件，然后在此基础上进行修改即可。

```
[root@linux-node1 ~]# cat kubeadm.yaml 
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.56.11  #修改为API Server的地址
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: linux-node1.example.com
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: registry.aliyuncs.com/google_containers  #修改为阿里云镜像仓库
kind: ClusterConfiguration
kubernetesVersion: v1.16.2  #修改为具体的版本
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.1.0.0/16   #修改Service的网络
  podSubnet: 10.2.0.0/16      #新增Pod的网络
scheduler: {}
---   #下面有增加的三行配置，用于设置Kubeproxy使用LVS
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: ipvs
```

**2. 执行初始化操作**

```
[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml
[init] Using Kubernetes version: v1.16.2
[preflight] Running pre-flight checks
error execution phase preflight: [preflight] Some fatal errors occurred:
        [ERROR NumCPU]: the number of available CPUs 1 is less than the required 2
        [ERROR Swap]: running with swap on is not supported. Please disable swa
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```

如果遇到上面这样的报错，是因为在实验环境开启了交换分区，以及CPU的核数小于2造成的，可以使用--ignore-preflight-errors=进行忽略。 --ignore-preflight-errors=：忽略运行时的错误，例如上面目前存在[ERROR NumCPU]和[ERROR Swap]，忽略这两个报错就是增加--ignore-preflight-errors=NumCPU 和--ignore-preflight-errors=Swap的配置即可。

再次执行初始化操作：

```
[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml \
  --ignore-preflight-errors=Swap,NumCPU 
[init] Using Kubernetes version: v1.16.2
[preflight] Running pre-flight checks
        [WARNING NumCPU]: the number of available CPUs 1 is less than the required 2
        [WARNING Swap]: running with swap on is not supported. Please disable swap
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
```

执行完毕后，会在当前输出下停留，等待下载Kubernetes组件的Docker镜像。根据你的网络情况，可以持续1-5分钟，你也可以使用docker images查看下载的镜像。镜像下载完毕之后，就会进行初始操作：

这里省略了所有输出，初始化操作主要经历了下面15个步骤，每个阶段均输出均使用[步骤名称]作为开头：

1. [init]：指定版本进行初始化操作
2. [preflight] ：初始化前的检查和下载所需要的Docker镜像文件。
3. [kubelet-start]：生成kubelet的配置文件”/var/lib/kubelet/config.yaml”，没有这个文件kubelet无法启动，所以初始化之前的kubelet实际上启动失败。
4. [certificates]：生成Kubernetes使用的证书，存放在/etc/kubernetes/pki目录中。
5. [kubeconfig] ：生成 KubeConfig文件，存放在/etc/kubernetes目录中，组件之间通信需要使用对应文件。
6. [control-plane]：使用/etc/kubernetes/manifest目录下的YAML文件，安装 Master组件。
7. [etcd]：使用/etc/kubernetes/manifest/etcd.yaml安装Etcd服务。
8. [wait-control-plane]：等待control-plan部署的Master组件启动。
9. [apiclient]：检查Master组件服务状态。
10. [uploadconfig]：更新配置
11. [kubelet]：使用configMap配置kubelet。
12. [patchnode]：更新CNI信息到Node上，通过注释的方式记录。
13. [mark-control-plane]：为当前节点打标签，打了角色Master，和不可调度标签，这样默认就不会使用Master节点来运行Pod。
14. [bootstrap-token]：生成token记录下来，后边使用kubeadm join往集群中添加节点时会用到
15. [addons]：安装附加组件CoreDNS和kube-proxy

成功执行之后，你会看到下面的输出：

```
Your Kubernetes master has initialized successfully!
To start using your cluster, you need to run the following as a regular user:
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
https://kubernetes.io/docs/concepts/cluster-administration/addons/
You can now join any number of machines by running the following on each node
as root:
kubeadm join 192.168.56.11:6443 --token 19fhhl.3mzkyk16tcgp6vga --discovery-token-ca-cert-hash sha256:76a88c38b673d3b2ac73e33127a809688cb3e58c533512ac6d92ecb66aa57a45
```

如果执行失败，那意味着之前的操作存在问题，检查顺序如下：

- 基础环境
- 主机名是否可以解析，SELinux，iptables是否关闭。
- 交换分区是否存在free -m查看
- 内核参数是否修改、IPVS是否修改（目前阶段不会造成失败）
- 基础软件
- Docker是否安装并启动
- Kubelet是否安装并启动
- 执行kubeadm是否有别的报错是否忽略
- systemctl status kubelet查看kubelet是否启动
- 如果kubelet无法启动，查看日志有什么报错，并解决报错。
- 以上都解决完毕，需要重新初始化
- kubeadm reset 进行重置（生产千万不要执行，会直接删除集群）
- 根据kubeadm reset 提升，清楚iptables和LVS。

请根据上面输出的要求配置kubectl命令来访问集群。

**3.为kubectl准备Kubeconfig文件。**

kubectl默认会在执行的用户家目录下面的.kube目录下寻找config文件。这里是将在初始化时[kubeconfig]步骤生成的admin.conf拷贝到.kube/config。

```
[root@linux-node1 ~]# mkdir -p $HOME/.kube
[root@linux-node1 ~]# cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
[root@linux-node1 ~]# chown $(id -u):$(id -g) $HOME/.kube/config
```

在该配置文件中，记录了API Server的访问地址，所以后面直接执行kubectl命令就可以正常连接到API Server中。

**4.使用kubectl命令查看组件状态**

```
[root@linux-node1 ~]# kubectl get cs
NAME STATUS MESSAGE ERROR
scheduler Healthy ok
controller-manager Healthy ok
etcd-0 Healthy {"health": "true"}
```

**知识回顾：为什么上面的输出没有显示API Server组件的状态

因为API Server是Kubernetes集群的入口，所有和Kubernetes集群的交互都必须经过APIServer，kubectl命令也是连接到API Server上进行交互，所以如果能够正常使用kubectl执行命令，意味着API Server运行正常。

**5.使用kubectl获取Node信息**

目前只有一个节点，角色是Master，状态是NotReady。

```
[root@linux-node1 ~]# kubectl get node
NAME STATUS ROLES AGE VERSION
linux-node1.unixhot.com NotReady master 14m v1.16.2
```

### 部署网络插件

Master节点NotReady的原因就是因为没有使用任何的网络插件，此时Node和Master的连接还不正常。目前最流行的Kubernetes网络插件有Flannel、Calico、Canal，这里分别列举了Canal和Flannel，你可以选择其中之一进行部署。 因为基础的Kubernetes集群已经配置完毕，后面的增加组件等操作，几乎都可以使用kubectl和一个YAML配置文件来完成。

【部署canal网络插件】

```
[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/rbac.yaml
[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/canal.yaml
```

【部署Flannel网络插件】（推荐） 部署Flannel网络插件需要修改Pod的IP地址段，修改为和你初始化一直的网段，可以先下载Flannel的YAML文件修改后，再执行。

```
[root@linux-node1 ~]# git clone --depth 1 https://github.com/coreos/flannel.git
[root@linux-node1 ~]# cd flannel/Documentation/
[root@linux-node1 Documentation]# vim kube-flannel.yml
# 修改"Network": "10.244.0.0/16"为"Network": "10.2.0.0/16",

74   net-conf.json: |
75     {
76       "Network": "10.2.0.0/16",
77       "Backend": {
78         "Type": "vxlan"
79       }
80     }

# 请注意，Flannel的镜像拉取速度会比较慢，可以替换为国内镜像
# image: quay.io/coreos/flannel:v0.10.0-amd64
image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64

# 如果Node中有多个网卡，可以使用--iface来指定对应的网卡参数。
containers:
      - name: kube-flannel
        image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        - --iface=eth0
```

部署Flannel

```
[root@linux-node1 Documentation]# kubectl create -f kube-flannel.yml
```

查看Pod状态

```
[root@linux-node1 Documentation]# kubectl get pod -n kube-system
NAME                                              READY   STATUS     RESTARTS   AGE
coredns-58cc8c89f4-cjhdv                          0/1     Pending    0          41m
coredns-58cc8c89f4-vdfn2                          0/1     Pending    0          41m
etcd-linux-node1.unixhot.com                      1/1     Running    0          41m
kube-apiserver-linux-node1.unixhot.com            1/1     Running    0          40m
kube-controller-manager-linux-node1.unixhot.com   1/1     Running    1          40m
kube-flannel-ds-amd64-bwsxl                       0/1     Init:0/1   0          20s
kube-proxy-5qrmh                                  1/1     Running    0          41m
kube-scheduler-linux-node1.unixhot.com            1/1     Running    1          41m
```

可以看到此时CoreDNS处于Pending状态，需要等待网络插件canal或者Flannel的Pod状态变成Running之后CoreDNS也会正常。所有Pod的状态都变成Running之后，这个时候再次获取Node，会发现节点变成了Ready状态。

```
[root@linux-node1 ~]# kubectl get node
NAME STATUS ROLES AGE VERSION
linux-node1.unixhot.com Ready master 29m v1.16.2
```

*kubeadm其实使用Kubernetes部署Kubernetes，这样就存在先有鸡还是先有蛋的问题，所以，我们首先手动部署了Docker和kubelet，然后kubeadm调用kubelet以静态Pod的方式部署了Kubernetes集群中的其它组件。静态Pod在后面的章节会讲到。*

### 部署Node节点

Master节点部署完毕之后，就可以部署Node节点，首先请遵循部署Docker和kubeadm章节为Node节点部署安装好docker、kubeadm和kubelet，此过程这里不再重复列出。

**1.在Master节点输出增加节点的命令**

```
[root@linux-node1 ~]# kubeadm token create --print-join-command
kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569
```

**2.在Node节点执行**

注意如果节点有交换分区，需要增加--ignore-preflight-errors=Swap。

部署linux-node2

```
[root@linux-node2 ~]# kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap
```

部署linux-node3

```
[root@linux-node3 ~]# kubeadm join 192.168.56.11:6443 --tokenisggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap
```

这个时候kubernetes会使用DaemonSet在所有节点上都部署canal/flannel和kube-proxy。部署完毕之后节点即部署完毕。DaemonSet的内容后面会讲解。

```
    [root@linux-node1 ~]# kubectl get daemonset --all-namespaces
    NAMESPACE NAME DESIRED CURRENT READY UP-TO-DATE AVAILABLE NODE SELECTOR AGE
    kube-system canal 2 2 1 2 1 beta.kubernetes.io/os=linux 17m
    kube-system kube-proxy 2 2 2 2 2 <none> 47m
```

待所有Pod全部启动完毕之后，节点就恢复Ready状态。

```
    [root@linux-node1 ~]# kubectl get pod --all-namespaces
    NAMESPACE NAME READY STATUS RESTARTS AGE
    kube-system canal-lv92w 3/3 Running 0 8m45s
    kube-system canal-rq5n5 3/3 Running 0 23m
    kube-system coredns-78d4cf999f-5k4sg 1/1 Running 0 53m
    kube-system coredns-78d4cf999f-bnbgf 1/1 Running 0 53m
    kube-system etcd-linux-node1.linuxhot.com 1/1 Running 0 52m
    kube-system kube-apiserver-linux-node1.linuxhot.com 1/1 Running 0 52m
    kube-system kube-controller-manager-linux-node1.linuxhot.com 1/1 Running 0 52m
    kube-system kube-proxy-sddlp 1/1 Running 0 53m
    kube-system kube-proxy-tw96b 1/1 Running 0 8m45s
    kube-system kube-scheduler-linux-node1.linuxhot.com 1/1 Running 0 52m
```

**查看所有节点** `` [root@linux-node1 ~]# kubectl get node NAME STATUS ROLES AGE VERSION linux-node1.linuxhot.com Ready master 49m v1.13.2 linux-node2.linuxhot.com Ready 4m48s v1.13.2

```
**如何给Node加上Roles标签**

使用kubectl get node能够看到linux-node1.linuxhot.com的ROLES是master这个是在进行集群初始化的时候[mark-control-plane]进行标记的。
[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane
by adding the label "node-role.kubernetes.io/master=''"

[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane
by adding the taints [node-role.kubernetes.io/master:NoSchedule]
1.查看节点的标签
[root@linux-node1 ~]# kubectl get nodes --show-labels

NAME STATUS ROLES AGE VERSION LABELS

linux-node1.linuxhot.com Ready master 48m v1.13.3
beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node1.linuxhot.com,node-role.kubernetes.io/master=

linux-node2.linuxhot.com Ready <none> 7m13s v1.13.3
beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node2.linuxhot.com
2.增加标签
[root@linux-node1 ~]# kubectl label nodes linux-node2.linuxhot.com
node-role.kubernetes.io/node=

node/linux-node2.linuxhot.com labeled
3.查看效果
[root@linux-node1 ~]# kubectl get nodes
NAME STATUS ROLES AGE VERSION
linux-node1.linuxhot.com Ready master 50m v1.13.3
linux-node2.linuxhot.com Ready node 8m41s v1.13.3
### 测试Kubernetes集群 {#test}

在上面的步骤中，我们创建了一个Kubernetes集群，1个Master和2个Node节点，在生产环境需要考虑Master的高可用，这里先不用考虑，后面会讲到。

**1.创建一个单Pod的Nginx应用**
[root@linux-node1 ~]# kubectl create deployment nginx --image=nginx:alpine
deployment.apps/nginx created

[root@linux-node1 ~]# kubectl get pod
NAME READY STATUS RESTARTS AGE
nginx-54458cd494-9j7ql 0/1 ContainerCreating 0 10s
**2.查看Pod详细信息**

待Pod的状态为Running后，可以获取Pod的IP地址，这个IP地址是从Master节点初始化的--pod-network-cidr=10.2.0.0/16地址段中分配的。
[root@linux-node1 ~]# kubectl get pod -o wide

NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES

nginx-54458cd494-9j7ql 1/1 Running 0 59s 10.2.1.2 linux-node2.linuxhot.com
<none> <none>
**3.测试Nginx访问**
[root@linux-node1 ~]# curl --head http://10.2.1.2

HTTP/1.1 200 OK
Server: nginx/1.15.8
Date: Sun, 13 Jan 2019 01:16:36 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT
Connection: keep-alive
ETag: "5c240d0d-264"
Accept-Ranges: bytes
**4.测试扩容**

现在将Nginx应用的Pod副本数量拓展到2个节点
[root@linux-node1 ~]# kubectl scale deployment nginx --replicas=2

deployment.extensions/nginx scaled

[root@linux-node1 ~]# kubectl get pod

NAME READY STATUS RESTARTS AGE

nginx-54458cd494-9j7ql 1/1 Running 0 2m13s

nginx-54458cd494-vnm4f 1/1 Running 0 5s
**5.为Nginx增加Service**

为Nginx增加Service，会创建一个Cluster
IP，从Master初始化的--service-cidr=10.1.0.0/16地址段中进行分配，
并开启NodePort是在Node节点上进行端口映射，进行外部访问。
[root@linux-node1 ~]# kubectl expose deployment nginx --port=80
--type=NodePort

service/nginx exposed

[root@linux-node1 ~]# kubectl get service

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 88m
nginx NodePort 10.1.147.204 <none> 80:30599/TCP 67m
**6.测试Service的VIP**
[root@linux-node1 ~]# curl --head http://10.1.147.204/

HTTP/1.1 200 OK 
Server: nginx/1.15.8
Date: Sun, 13 Jan 2019 01:26:21 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT
Connection: keep-alive
ETag: "5c240d0d-264"
Accept-Ranges: bytes
```

\``` **7.测试NodePort，外部访问。**

![img](http://k8s.unixhot.com/kubernetes/media/1f9d523f359ce6d49515d04703d8e941.png)

这一切看起来似乎不是十分完美，但是现在你已经拥有了一个Kubernetes集群，接下来就可以继续探索Kubernetes的世界了。

## 公有云中的Kubernetes

截止2019年2月，大多数公有云已经提供了容器Kubernetes的产品服务，对于使用公有云的用户来说，最佳实践是直接购买公有云产品，而非自己部署Kubernetes集群，主要是因为公有云已经将网络和存储与Kubernetes集成好了，解决了生产应用的难题。

### 阿里云中的Kubernetes

国内阿里云提供了容器服务 Kubernetes 版（简称 ACK）提供高性能可伸缩的容器应用管理能力，支持企业级 Kubernetes 容器化应用的全生命周期管理。容器服务 Kubernetes 版简化集群的搭建和扩容等工作，整合阿里云虚拟化、存储、网络和安全能力，打造云端最佳的 Kubernetes 容器化应用运行环境。

**阿里云Kubernetes模式**

容器服务Kubernetes版包含了经典Dedicated Kubernetes以及Serverless两种形态，方便您按需选择。

- 经典Dedicated Kubernetes模式：您可以对集群基础设施和容器应用进行更细粒度的控制，比如选择宿主机实例规格和操作系统，指定Kubernetes 版本、自定义 Kubernetes 特性开关设置等。阿里云 Kubernetes 服务负责为集群创建底层云资源，升级等自动化运维操作。而您需要规划、维护、升级服务器集群，手动或自动在集群中添加或删除服务器。
- Serverless 模式：您无需创建底层虚拟化资源，可以利用 Kubernetes 命令指明应用容器镜像、CPU 和内存要求以及对外服务方式，直接启动。

**阿里云Kubernetes产品架构**

![C:\\Users\\jason\\Desktop\\15447553537457_zh-CN.png](http://k8s.unixhot.com/kubernetes/media/43688d33a81f2bd6af354d0715b6b297.png)

**阿里云Kubernetes创建**

默认情况下可以在阿里云中自行创建5个集群，每个集群最多可以添加 40 个节点。如需更高配额，需要提交工单申请。

![img](http://k8s.unixhot.com/kubernetes/media/4c165d0ebc842862595f9fd0f4650d43.png)

阿里云将网络、存储、安全等方面已经进行了深度集成，在创建Kubernetes集群时，阿里云容器服务提供两种网络插件：Terway和Flannel：

- Flannel：使用的是简单稳定的社区的Flannel CNI插件，配合阿里云的VPC的高速网络，能给集群高性能和稳定的容器网络体验，但功能偏简单，支持的特性少，例如：不支持基于Kubernetes标准的Network Policy。
- Terway：是阿里云容器服务自研的网络插件，功能上完全兼容Flannel，支持将阿里云的弹性网卡分配给容器，支持基于Kubernetes标准的NetworkPolicy来定义容器间的访问策略，支持对单个容器做带宽的限流。对于不需要使用Network Policy的用户，可以选择Flannel，其他情况建议选择Terway。了解更多Terway网络插件的相关内容，请参见Terway网络插件。

最终阿里云会使用kubeadm帮你创建一个指定版本的Kubernetes集群。

### 私有云中的Kubernetes

**内网部署Kubernetes**

很多企业需要内网部署Kubernetes但是内网又无法访问外网，就需要本地化部署，无忘了本地话部署主要包括两个方面，一个是软件仓库的准备，一个是Kubernetes镜像的准备。

1. 准备内网YUM仓库（略）
2. 准备Docker Registry（请参考Harbor章节）
3. 下载并提交镜像到Harbor中，然后将Harbor的镜像部署直接COPY到生产环境中

下载脚本如下，请根据需求自行修改：

```
[root@linux-node1 ~]# vim k8s-images.sh
#!/bin/bash

# EVN
ALIYUN_REG="registry.aliyuncs.com/google_containers"
FLANNEL_REG="quay-mirror.qiniu.com/coreos"
LOCAL_REG="192.168.56.11/kubernetes"
K8S_VER=v1.15.5
PAUSE_VER=3.1
ETCD_VER=3.3.10
COREDNS_VER=1.3.1
FLANNEL_VER=v0.11.0-amd64

# Kubernetes Docker Images
IMAGES=(
  kube-proxy:${K8S_VER}
  kube-scheduler:${K8S_VER}
  kube-controller-manager:${K8S_VER}
  kube-apiserver:${K8S_VER}
  pause:${PAUSE_VER}
  etcd-amd64:${ETCD_VER}
  coredns:${COREDNS_VER}
)

for IMAGE in ${IMAGES[@]}
do
  docker pull ${ALIYUN_REG}/${IMAGE}
  docker tag ${ALIYUN_REG}/${IMAGE} ${LOCAL_REG}/${IMAGE}
  #docker push ${LOCAL_REG}/${IMAGES}
done

# Flannel

docker pull ${FLANNEL_REG}/flannel:${FLANNEL_VER}
docker tag ${FLANNEL_REG}/flannel:${FLANNEL_VER} ${LOCAL_REG}/flannel:${FLANNEL_VER}
```

# 第五部分 将应用迁移至Kubernetes

# 6 第一步：将应用封装进容器中

## 第一步：将应用封装进容器中

在之前的容器镜像实战中，我们已经学习了如何将应用容器化，这里我们将下载使用两个官方的Nginx镜像来完成接下来的实验。

### 部署Harbor镜像仓库

生产环境中可以使用Harbor来管理Docker镜像，请参考之前章节的内容完成Harbor镜像仓库的部署工作，并在Harbor中创建一个devopsedu的项目。

![img](http://k8s.unixhot.com/kubernetes/media/093b4b731c05b54a1b8426e924f93d45.png)

### 制作实验用的Docker镜像

这里不再演示Docker镜像的构建，直接下载两个官方镜像作为案例。

```
[root@linux-node1 ~]# docker pull nginx:1.13.12
[root@linux-node1 ~]# docker pull nginx:1.14.0
```

### 配置Docker仓库

```
[root\@linux-node1 ~]# vim /etc/docker/daemon.json
{
    "registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],
    "insecure-registries" : ["http://192.168.56.11"]
}

[root@linux-node1 ~]# systemctl restart docker
```

### 登录Harbor镜像仓库

```
[root@linux-node1 ~]# docker login 192.168.56.11
Username: admin
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
    Configure a credential helper to remove this warning. See
    https://docs.docker.com/engine/reference/commandline/login/\#credentials-store
    Login Succeeded
```

### 提交镜像到Registry

```
[root@linux-node1 ~]# docker tag nginx:1.13.12
192.168.56.11/devopsedu/nginx:1.13.12

[root@linux-node1 ~]# docker tag nginx:1.14.0
192.168.56.11/devopsedu/nginx:1.14.0

[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.13.12
[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.14.0
```

在上面的步骤中，模拟了生产环境如何构建和提交镜像，如果对于构建和提交镜像有疑问可以复习第3章的内容。

# 7 第二步：将容器封装到Pod中

Pod是Kubernetes最小的管理单元，一个Pod可以代表一个运行在集群里的进程。之前是在宿主机上运行不同的进程，现在是运行不同的Pod。前面介绍过Pod是一个逻辑架构的组件，Pod里封装了一个（或者多个）应用容器，存储资源和IP地址。

**为什么要造一个Pod出来？** 学习Kubernetes遇到的最多的名称可能就是Pod了，其它开源的容器管理平台例如Mesos直接管理和调度的是容器，但是Kubernetes确是Pod，它在容器上面做了一层封装，方便用户将一组紧耦合的容器，放置在一个共享资源的单元中。对于很多没有此类场景的初学者，可以暂时将Pod看做是容器的一个壳，你也完全可以只在Pod中运行一个容器，随着学习的深入再慢慢理解。 Kubernetes运行Pod的两种方式：

- Pod里只运行一个单独容器，是Kubernetes最常见的使用场景；在这种情况下，可以把Pod看做是一个单独容器的连接器，Kubernetes通过Pod去管理容器，作为使用者几乎不用关心容器。
- Pod里运行多个有关系容器。例如如果使用Nginx+Tomcat运行Java应用，可以制作一个镜像里面包含了Nginx+Tomcat，也可以分别制作两个镜像Nginx镜像和Tomcat镜像，如果使用Kubernetes就需要使用Pod，如果将Nginx和Tomcat单独放在两个Pod里面来管理，就会面临很多很多问题。这个时候，就可以把这两个容器放置在一个Pod中。

## Pod管理

在Kubernetes中使用YAML格式来描述一个Pod。

```
[root@linux-node1 ~]# vim nginx-pod.yaml 
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.13.12
    ports:
- containerPort: 80
```

Pod的YAML描述内容还有很多，在使用kubeadm部署Kubernetes的时候，就是使用静态Pod的方式运行的相关服务，YAML文件存放在，当然现在很多配置还是看不懂的，带着问题继续学习。

```
[root@linux-node1 ~]# ls -l /etc/kubernetes/manifests/
total 16
-rw------- 1 root root 2041 Feb 11 20:33 etcd.yaml
-rw------- 1 root root 2700 Feb 11 20:33 kube-apiserver.yaml
-rw------- 1 root root 2345 Feb 11 20:33 kube-controller-manager.yaml
-rw------- 1 root root 1080 Feb 11 20:33 kube-scheduler.yaml
```

创建Pod

```
[root@linux-node1 ~]# kubectl create -f nginx-pod.yaml 
pod "nginx-pod" created
```

查看Pod

```
[root@linux-node1 ~]# kubectl get pod
NAME                                READY     STATUS    RESTARTS   AGE
nginx-pod                           1/1       Running   0          49s
```

查看Pod更多信息

```
[root@linux-node1 ~]# kubectl get pod -o wide
NAME                                READY     STATUS    RESTARTS   AGE       IP           NODE
nginx-pod  1/1       Running   0          1m        10.2.53.18   192.168.56.13
```

查看Pod详情

```
[root@linux-node1 ~]# kubectl describe pod nginx-pod
Name:         nginx-pod
Namespace:    default
Node:         192.168.56.13/192.168.56.13
Start Time:   Sat, 02 Jun 2018 06:42:53 +0800
Labels:       app=nginx
Annotations:  <none>
Status:       Running
IP:           10.2.53.18
```

查看Pod日志

```
[root@linux-node1 ~]# kubectl logs pod/nginx-pod
```

**Pod中的镜像拉取策略** 当kubelet尝试拉取指定的镜像时，[imagePullPolicy]和镜像的标签会生效。

- imagePullPolicy: IfNotPresent：仅当镜像在本地不存在时镜像才被拉取。
- imagePullPolicy: Always：每次启动 pod 的时候都会拉取镜像。

省略imagePullPolicy，镜像标签为:latest或被省略，Always被应用。 imagePullPolicy被省略，并且镜像的标签被指定且不是:latest，IfNotPresent被应用。 imagePullPolicy: Never：镜像被假设存在于本地。 没有尝试拉取镜像。

# 7.3 第三步：使用Controllers管理Pod

在实际的生产环境中，我们其实很少单独创建Pod，而是通过控制器来进行Pod的管理，Kubernetes提供了很多的控制器，一个 Controllers 可以创建和管理很多个 Pod, 也提供复制、初始化，以及提供集群范围的自我恢复的功能。比如说： 如果一个节点宕机，Controller 将调度一个在其他节点上完全相同的 pod 来自动取代当前的 pod。

# 8.1 Replication Controller控制器

# 8.2 Replica Sets控制器

# 8.3 Deployment控制器

# 8.4 DaemonSet控制器

DaemonSet 确保全部（或者一些）Node 上运行一个 Pod 的副本。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。 使用 DaemonSet 的一些典型用法：

- 运行集群存储 daemon，例如在每个 Node 上运行 glusterd、ceph。
- 在每个 Node 上运行日志收集 daemon，例如filebeat、logstash。
- 在每个 Node 上运行监控 daemon，例如 Prometheus Node Exporter、collectd、Datadog 代理、Zabbix Agent。

**创建DaemonSet**

DaemonSet的描述文件和Deployment非常相似，只需要修改Kind，并去掉副本数量的配置即可

```
[root@linux-node1 example]# vim nginx-daemonset.yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.13.12
        ports:
        - containerPort: 80
```

查看Pod在Node上的分布

```
[root@linux-node1 ~]# kubectl get pod -o wide
NAME                    READY     STATUS    RESTARTS   AGE       IP           NODE
nginx-daemonset-hk28q   1/1       Running   0          1m        10.2.56.10   192.168.56.12
nginx-daemonset-wtt68   1/1       Running   0          1m        10.2.53.10   192.168.56.13

[root@linux-node1 ~]# kubectl get daemonset
NAME              DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
nginx-daemonset   2         2         2         2            2           <none>          1m
```

# 7.4 第四步：使用Service管理Pod访问

在上面的小节，我们通过Deployment可以为一个应用创建多个Pod，而且可以动态的进行增加、或者删除多余的Pod，Kubernetes Pod 是有生命周期的，它们可以被创建，也可以被销毁，但是每次Pod的IP地址就会发生变化，外面如何访问到该Pod呢？总不能每次Pod重启就修改访问的IP地址吧。 每个 Pod 都会获取它自己的 IP 地址，但是每次即使这些 IP 地址不总是稳定可依赖的。 这会导致一个问题：在 Kubernetes 集群中，如果一组 Pod（称为 backend）为其它 Pod （称为 frontend）提供服务，那么那些 frontend 该如何发现，并连接到这组 Pod 中的哪些 backend 呢？

# 9.1 Service介绍和管理

### 创建Service

继续我们Nginx的案例，我们为之前的应用创建一个Service

```
[root@linux-node1 ~]# cat nginx-service.yaml 
kind: Service
apiVersion: v1
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

- 第1行：定义资源类型为Service
- 第2行：定义当前Service API的版本
- 第3行：metadata设置
- 第4行：设置Service的名称为nginx-service
- 第5行：spec: 开始设置Service的内容
- 第6行：selector: 为该Service指定一个匹配的标签
- 第7行：app: nginx 所有带有标签app ：nginx的Pod将使用该Service
- 第8行：ports: 指定Service需要对外的端口
- 第9行：设置端口协议：支持TCP和UDP
- 第10行：设置Service的端口
- 第11行：设置Pod的端口，Kubernetes会将发送给Service端口的连接，转发到Pod的端口上。

创建Nginx Service

```
[root@linux-node1 ~]# kubectl create -f nginx-service.yaml 
service "nginx-service" created
```

查看Nginx Service

```
[root@linux-node1 ~]# kubectl get service
NAME            TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE
kubernetes      ClusterIP   10.1.0.1      <none>        443/TCP   7h
nginx-service   ClusterIP   10.1.184.53   <none>        80/TCP    25s
```

访问Servce IP

```
[root@linux-node1 ~]# curl --head 10.1.181.45
HTTP/1.1 200 OK
Server: nginx/1.11.10
Date: Tue, 21 Feb 2017 08:20:42 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 14 Feb 2017 15:36:04 GMT
Connection: keep-alive
ETag: "58a323e4-264"
Accept-Ranges: bytes
```

# 9.2 Service和Endpoint

Service作为Kubernetes中为Pod实现负载均衡的组件，几乎在所有的文章中为了方便初学者理解，基本上说的是Service会来监听Pod的变化，然后来更新Pod的IP地址。其实这个事情不是Service干的，而是有一个幕后英雄：Endpoint Endpoints表示了一个Service对应的所有Pod副本的访问地址，而Endpoints Controller负责生成和维护所有Endpoints对象的控制器。它负责监听Service和对应的Pod副本的变化。

- 如果监测到Service被删除，则删除和该Service同名的Endpoints对象；
- 如果监测到新的Service被创建或修改，则根据该Service信息获得相关的Pod列表，然后创建或更新Service对应的Endpoints对象。
- 如果监测到Pod的事件，则更新它对应的Service的Endpoints对象。

kube-proxy进程获取每个Service的Endpoints，实现Service的负载均衡功能。

### 创建一个Headless Service

编写一个Service不使用clusterip

```
[root@linux-node1 ~]# cat mysql-service.yaml 
kind: Service
apiVersion: v1
metadata:
  name: mysql-service
spec:
  ports:
  - protocol: TCP
    port: 3306
    targetPort: 3306
  clusterIP: None

[root@linux-node1 ~]# kubectl create -f mysql-service.yaml 
service "mysql-service" created
```

查看Service，可以放心CLUSTER-IP为None

```
[root@linux-node1 ~]# kubectl get service mysql-service
NAME            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
mysql-service   ClusterIP   None         <none>        3306/TCP   17s
```

2.创建一个Endpoint

```
[root@linux-node1 ~]# vim mysql-endpoint.yaml 
apiVersion: v1
kind: Endpoints
metadata:
 name: mysql-service
subsets:
- addresses:
  - ip: 192.168.56.13
  ports:
  - port: 3306
    protocol: TCP

[root@linux-node1 ~]# kubectl create -f mysql-endpoint.yaml 
endpoints "mysql-service" created
```

3.查看Service和Endpoint的关联

```
[root@linux-node1 ~]# kubectl get ep mysql-service
NAME            ENDPOINTS            AGE
mysql-service   192.168.56.13:3306   42s
[root@linux-node1 ~]# kubectl describe svc mysql-service
Name:              mysql-service
Namespace:         default
Labels:            <none>
Annotations:       <none>
Selector:          <none>
Type:              ClusterIP
IP:                None
Port:              <unset>  3306/TCP
TargetPort:        3306/TCP
Endpoints:         192.168.56.13:3306
Session Affinity:  None
Events:            <none>
```

# 7.5 第五步：使用Ingress提供外部访问

通过Service可以将Kubernetes集群中的服务以IP：Port的方式暴露出来，我们称之为4层的负载均衡，因为这个是OSI七层模型中传输层的功能。

那么如何实现七层的负载均衡呢，例如像Nginx那样，可以灵活的进行反向代理的设置，根据不同的URL进行转发等，难道我需要自己部署一个Nginx来做这个事情吗？首先，如果你有这个想法，并没有错，甚至你完全可以自己独立部署一个Nginx来完成，但是Kubernetes提供了更好的解决方案就是Ingress。 Ingress就是从kubernetes集群外访问集群的入口，将用户的URL请求转发到不同的service上。ingress相当于nginx反向代理服务器，它包括的规则定义就是URL的路由信息。

## 10.1 Ingress Controller

在学习Service的时候，我们知道最终的负载均衡由kube-proxy和LVS来完成，那么Ingress靠什么来实现7层的路由机制呢？答案是Ingress Controller。

Ingress Controller 实质上可以理解为是个监视器，Ingress Controller 通过不断地跟 kubernetes API 打交道，实时的感知后端 service、pod 等变化，比如新增和减少 pod，service 增加与减少等；当得到这些变化信息后，Ingress Controller 再结合下文的 Ingress 生成配置，然后更新反向代理负载均衡器，并刷新其配置，达到服务发现的作用。

Ingress Controller目前有两大开源项目，一个是Nginx Controller，一个是目前比较流行的Traefik，Traefik是一款开源的反向代理与负载均衡工具。它最大的优点是能够与常见的微服务系统直接整合，可以实现自动化动态配置。目前支持Docker, Swarm, Mesos/Marathon, Mesos, Kubernetes, Consul, Etcd, Zookeeper, BoltDB, Rest API等等后端模型。

## Ingress Controller Traefik

### 部署Treafik

```
[root@linux-node1 ~]# kubectl label nodes 192.168.56.12 edgenode=true
node "192.168.56.12" labeled
[root@linux-node1 ~]# kubectl create -f /srv/addons/ingress/
```

# 11 第六步：使用PV和PVC管理数据存储

截止目前我们所启动Pod的容器中的数据存储都是临时的，因此Pod重启或者被删除的时候，产生在容器中的数据会发生丢失。实际应用中，我们有些应用是无状态，有些应用则需要保持状态数据，确保Pod重启之后能够读取到之前的状态数据，有些应用则作为集群提供服务。这三种服务归纳为无状态服务、有状态服务以及有状态的集群服务，其中后面两个存在数据保存与共享的需求，因此就要采用容器外的存储方案。 Kubernetes中存储中有四个重要的概念：Volume、PersistentVolume（PV）、PersistentVolumeClaim （PVC）、StorageClass。掌握了这四个概念，就掌握了Kubernetes中存储系统的核心。

# 11.1 Kubernetes Volume

# 11.2 PersistentVolume（PV）

PersistentVolume（PV）是由管理员设置的存储，它是群集的一部分。就像节点是集群中的资源一样，PV 也是集群中的资源。 PV 是 Volume 之类的卷插件，但具有独立于使用 PV 的 Pod 的生命周期。此 API 对象包含存储实现的细节，即 NFS、iSCSI 或特定于云供应商的存储系统。

**1.安装并配置NFS**

```
[root@linux-node1 ~]# yum install -y nfs-utils rpcbind
[root@linux-node1 ~]# mkdir -p /data/k8s-nfs
[root@linux-node1 ~]# vim /etc/exports
/data/k8s-nfs *(rw,sync,no_root_squash)
```

启动NFS

```
[root@linux-node1 ~]# systemctl enable rpcbind nfs
[root@linux-node1 ~]# systemctl start rpcbind nfs
```

**2.创建并查看PV**

```
[root@linux-node1 ~]# vim nfs-pv.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-demo
spec:
  capacity:
storage: 1Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: nfs
  nfs:
    path: /data/k8s-nfs/pv-demo
    server: 192.168.56.11
[root@linux-node1 ~]# kubectl create -f nfs-pv.yaml 
persistentvolume "pv-demo" created
```

查看创建的PV

```
[root@linux-node1 ~]# kubectl get pv
NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM     STORAGECLASS   REASON    AGE
pv-demo   1Gi        RWO            Recycle          Available             nfs                      15s
```

# 11.3 PersistentVolumeClaim（PVC）

PersistentVolumeClaim（PVC）是用户存储的请求。它与 Pod 相似。Pod 消耗节点资源，PVC 消耗 PV 资源。Pod 可以请求特定级别的资源（CPU 和内存）。声明可以请求特定的大小和访问模式（例如，可以以读/写一次或 只读多次模式挂载）。

1.创建PVC

```
[root@linux-node1 ~]# vim nfs-pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: nfs
```

创建并查看PVC

```
[root@linux-node1 ~]# kubectl create -f nfs-pvc.yaml 
persistentvolumeclaim "pvc-demo" created
[root@linux-node1 ~]# kubectl get pvc
NAME       STATUS    VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE
pvc-demo   Bound     pv-demo   1Gi        RWO            nfs            6s
```

2.使用PVC

```
[root@linux-node1 ~]# vim nginx-deployment-pvc.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.13.12
        ports:
        - containerPort: 80
        volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: pvc-demo
      volumes:
      - name: pvc-demo
        persistentVolumeClaim:
          claimName: pvc-demo
```

# 11.4 StorageClass

# 7 第七步：使用Rancher管理Kubernetes集群

现在我们已经具备把应用迁移到Kubernetes中来的能力，那么现在，迁移后，日常的运维工作就发生的变化，截止目前，在生产环境中，我们很少使用官方自带的Dashbaord来完成日常的运维工作，而是使用第三方的运维工具Rancher。

## 7.1 Rancher快速入门

快速部署单机版Rancher

```
[root@linux-node1 ~]# mkdir /opt/rancher
[root@linux-node1 ~]# docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher/ -p 80:80 -p 443:443 rancher/rancher
```

## 7.2 使用Rancher进行日常管理

## 7.3 Rancher生产集群部署

# 第六部分 管理Kubernetes中的应用

# 13 应用的资源限制和健康检查

# 13.1 应用的资源限制

# 13.2 应用的健康检查

### Liveness探测

Kubernetes有两种探测机制，Liveness和Readiness，配置都是相似的，只是实现的功能不同。 Liveness探测是针对Pod健康状态的探测，类似于集群中的健康检查，用户可以自定义这个健康检查的条件，如果探测失败，Kubernetes将会重启容器。 如果您希望容器在探测失败时被杀死并重新启动，那么请指定一个Liveness配置，并指定restartPolicy 为 Always 或 OnFailure。 配置案例

```
livenessProbe:
exec:
    command:
    - ps aux | grep nginx
initialDelaySeconds: 10
periodSeconds: 5
timeoutSeconds: 3
```

### Readiness探测

Readiness探测是探测Pod是否准备好对外提供访问，例如我们在Pod里面运行一个Tomcat的容器，里面运行了一个Jenkins的应用，那么等Jenkins完全启动能提供服务可能需要1分钟，所以在在1分钟之前是不能提供给用户访问的，也就是不能加入Service的负载均衡中，这个就靠Readiness探测来控制。 Readiness用来控制告诉Kubernetes什么时间可以将容器加入到Service的负载均衡中，配置方法和Liveness一样，只需要修改livennessProbe替换为readinessProbe即可。

## 健康检查的方法

Kubernetes的健康检查是由运行在各个Node上的kubelet来完成的，kubelet目前支持以下三种健康检查的方法：

- ExecAction：在容器中执行指定的命令。如果命令退出时状态码为0，则认为诊断成功。
- TCPSocketAction:对指定端口上容器的IP地址执行TCP检查。如果端口是打开的，则认为诊断是成功的。
- HTTPGetAction:对指定端口和路径上容器的IP地址执行HTTP Get请求。如果响应的状态码大于或等于200，小于400，则认为诊断是成功的。

以上三种健康检查的方法会有三种返回结果：

- Success：成功，容器通过诊断。

- Failure：失败，容器诊断失败。

- Unknown：探测失败，无法执行探测，所以不应该采取任何行动。

  针对于探针有以下配置参数，需要注意不管是Liveness还是Readiness探测，探针的使用都是相同的，唯一的不同是探测完毕后，执行操作的不同。

- initialDelaySeconds: 探测的延迟时间，单位是秒。也就是说在容器启动多少秒之后开始进行第一次探测，例如你启动一个Java的应用需要50秒，那么这个值就需要大于50s。所以这个值是需要根据应用的具体情况来设置。

- periodSeconds：探测执行的周期时间，单位是秒。是指每隔多长时间执行一次探测，频率越高，发现故障的时间也就越短，并不是越短越好。如果应用服务不够稳定，太高的频率反而会导致很多你认为的“误报”。默认是10秒，最小值是1秒。

- timeoutSeconds: 探测超时时间，单位是秒，执行探测如果超过这个时间没有返回结果，变意味着探测的结果是失败。默认为1秒。最小值是1秒。

- failureThreshold：探测成功后，最少连续探测失败多少次才被认定为失败。这个是Kubernetes将在放弃之前尝试失败阈值时间。放弃生命探测意味着重新启动Pod。一旦准备就绪，Pod将被标记为未准备就绪。默认为3。最小值是1。

- successThreshold: 在探测失败后，最少连续探测成功多少次才被认定为成功。默认为1，也就是必须探测成功1次，才能认为状态恢复，最小值是1。

  # 管理应用的DNS访问

# [14.1 Kubernetes中的DNS](http://k8s.unixhot.com/)

# 应用的DNS管理

### Pod的域名解析策略

```
[root@linux-node1 ~]# kubectl run dns-test --generator=run-pod/v1 --image=alpine --replicas=1 sleep 360000
pod/dns-test created
```

查看Pod

```
[root@linux-node1 ~]# kubectl get pod dns-test
NAME       READY   STATUS    RESTARTS   AGE
dns-test   1/1     Running   0          79s
```

Pod默认的DNS配置

```
[root@linux-node1 ~]# kubectl exec -it dns-test /bin/sh
/ # cat /etc/resolv.conf 
nameserver 10.1.0.10
search default.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```

如何访问Service名称

```
/ # ping -c 3 wordpress-service.default.svc.cluster.local
PING wordpress-service.default.svc.cluster.local (10.1.92.244): 56 data bytes
64 bytes from 10.1.92.244: seq=0 ttl=64 time=0.074 ms
64 bytes from 10.1.92.244: seq=1 ttl=64 time=0.141 ms
64 bytes from 10.1.92.244: seq=2 ttl=64 time=0.187 ms

--- wordpress-service.default.svc.cluster.local ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss
round-trip min/avg/max = 0.074/0.134/0.187 ms
```

DNS查询策略

```
[root@linux-node1 ~]# kubectl get pod dns-test -o yaml | grep dnsPolicy
  dnsPolicy: ClusterFirst
```

- Default: Pod从其运行的节点中继承名称解析配置。
- ClusterFirst:（默认策略）与配置的群集域名后缀不匹配的任何DNS查询都将转发到从节点继承的上游名称服务器。
- ClusterFirstWithHostNet: 如果Pod使用了hostNetwork（例如Ingress Controller Treafik就是使用了hostNetwok），应显式设置其DNS策略为“ClusterFirstWithHostNet”。
- None: 它允许Pod忽略Kubernetes环境中的DNS设置，这时候会使用Pod Spec中的dnsConfig字段提供的DNS设置。

## 应用的DNS管理

## 15.1 使用ConfigMap管理应用配置

### 通过kubectl命令创建ConfigMap

**创建一个名称为cmd-config的ConfigMap**

```
[root@k8s-master1 ~]# kubectl create configmap cmd-config --from-literal=host=www.unixhot.com
configmap/cmd-config created
```

**查看ConfigMap**

```
[root@k8s-master1 ~]# kubectl get configmap
NAME         DATA   AGE
cmd-config   1      63s
```

**查看ConfigMap内容**

```
[root@k8s-master1 ~]# kubectl describe configmap cmd-config
Name:         cmd-config
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
host:
----
www.unixhot.com
Events:  <none>
```

**ConfigMap中包含多个键值对** 可以多次使用--from-literal为一个ConfigMap创建多个键值对，中间用空格分隔

```
[root@k8s-master1 ~]# kubectl create configmap mcmd-config --from-literal=host=www.unixhot.com --from-literal=port=443 --from-literal=ssl=on
configmap/mcmd-config created
```

### 通过YAML文件创建ConfigMap

查看已创建的ConfigMap生成的YAML文件

```
[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml
apiVersion: v1
data:
  host: www.unixhot.com
  port: "443"
  ssl: "on"
kind: ConfigMap
metadata:
  creationTimestamp: "2019-11-05T01:45:13Z"
  name: mcmd-config
  namespace: default
  resourceVersion: "5394993"
  selfLink: /api/v1/namespaces/default/configmaps/mcmd-config
  uid: 02012d69-e324-4e9d-ba04-7132e9f6ecd8
```

只需要将metadata中无需指定的字段去掉即可生成一个YAML文件。

```
[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml > mcmd-config-v2.yaml
[root@k8s-master1 ~]# vim mcmd-config-v2.yaml 
apiVersion: v1
data:
  host: www.unixhot.com
  port: "443"
  ssl: "on"
kind: ConfigMap
metadata:
  name: mcmd-config-v2
  namespace: default
```

注意需要修改metadata.name,修改完毕后直接创建即可

```
[root@k8s-master1 ~]# kubectl create -f mcmd-config-v2.yaml 
configmap/mcmd-config-v2 created
[root@k8s-master1 ~]# kubectl get configmap
NAME             DATA   AGE
cmd-config       1      24m
mcmd-config      3      16m
mcmd-config-v2   3      9s
```

### 通过文件创建ConfigMap

ConfigMap除了可以存储单个或者多个键值对之外，可以存储完整的配置文件，将单个配置文件直接转换为ConfigMap在生产中十分常用

```
[root@k8s-master1 ~]# kubectl create configmap file-config --from-file=/etc/hosts
configmap/file-config created
```

可以看到ConfigMap直接存储了文件的内容，Key名称为文件名hosts，也可以手动指定Key的名称。

```
[root@k8s-master1 ~]# kubectl describe configmap file-config
Name:         file-config
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
hosts:
----
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.99.27 k8s-master1 k8s-master1.dianjoy.com 
192.168.99.28 k8s-master2 k8s-master2.dianjoy.com
192.168.99.29 k8s-master3 k8s-master3.dianjoy.com


Events:  <none>
```

将Key手动指定为host-hosts

```
[root@k8s-master1 ~]# kubectl create configmap file-config-v2 --from-file=host-hosts=/etc/hosts
configmap/file-config-v2 created
[root@k8s-master1 ~]# kubectl describe configmap file-config-v2
Name:         file-config-v2
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
host-hosts:
----
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.99.27 k8s-master1 k8s-master1.dianjoy.com 
192.168.99.28 k8s-master2 k8s-master2.dianjoy.com
192.168.99.29 k8s-master3 k8s-master3.dianjoy.com


Events:  <none>
```

### 从目录创建ConfigMap

ConfigMap还支持通过目录创建，kubectl会为目录中的每个文件单独创建条目，需要注意的是如果目录下面包含子目录，会忽略这些子目录和子目录里面的内容。

```
[root@k8s-master1 ~]# kubectl create configmap dir-config --from-file=/etc/kubernetes
configmap/dir-config created
```

### 混合选项创建ConfigMap

同时使用命令行、文件、目录创建ConfigMap也是支持的，只需要使用不同的选项即可。

```
[root@k8s-master1 ~]# kubectl create configmap mycp --from-literal=env=test \
 --from-file=/etc/hosts \
 --from-file=myhosts=/etc/hosts \
 --from-file=/etc/kubernetes
configmap/mycp created
```

ConfigMap的内容可以通过环境变量的形成传递给容器，也可通过和Volume的形式挂载到容器中。

### 通过环境变量给容器传递ConfigMap

可以将ConfigMap中的键值对数据通过环境变量的形式传递到容器中，这样在配置容器的时候有一些数据可以使用环境变量，然后使用ConfigMap进行填充，这样就可以实现配置和Pod的分离。

## 15.2 使用Secret管理敏感数据

```
在应用启动过程中经常会有一些敏感信息需要存储，例如用户名和密码等，如果直接明文的方式保存会有安全风险。在Kubernetes中Secret这个资源对象类型用来保存敏感信息，例如密码、密钥、访问令牌、SSH Key等你认为需要保密的敏感信息。相对于将这些内容保存到容器镜像或者Pod的定义文件中，更加的灵活和安全。
```

### 配置Pod使用Harbor镜像

1．docker login得到 docker密码文件

```
[root@linux-node1 ~]# docker login 192.168.56.11
```

2.对密码文件进行加密

```
[root@linux-node1 ~]# cat /root/.docker/config.json |base64
```

3.创建harbor使用的Secret YAML文件：

```
[root@linux-node1 ~]# vim harbor-secret.yaml 
apiVersion: v1
kind: Secret
metadata:
  name: harbor-secret
  namespace: default
data:
  .dockerconfigjson: 'ewoJImF1dGhzIjogewoJCSJyZWcuZ3JlYXRvcHMubmV0IjogewoJCQkiYXV0aCI6ICJZV1J0YVc0Nk1YRmhlbmh6ZHpJPSIKCQl9Cgl9Cn0='
type: kubernetes.io/dockerconfigjson
```

4.创建Secret

```
[root@jenkins k8s-deploy]# kubectl create -f reg-harbor.yaml 
secret "reg-harbor" created
```

5.创建pod并挂载资源

```
apiVersion: v1
kind: Pod
metadata:
  name: sectest
spec:
  containers:
  - name: sectest
    image: 123.207.154.16/base/redis:alpine
    ports:
    - containerPort: 6379
  imagePullSecrets:
    - name: harbor-secret
```

# 使用Helm管理Kubernetes应用

通过前面的学习，掌握了将应用迁移至Kubernetes的步骤和技巧，过程比较艰辛。例如我们创建一个应用，涉及到Deployment、Service、Ingress、PV、PVC，如何有效的管理这些资源呢，Kubernetes给出了一个最佳实践就是Helm。 Helm是一个kubernetes应用的包管理工具，用来管理charts——预先配置好的安装包资源，有点类似于Ubuntu的APT和CentOS中的yum。 Helm chart是用来封装kubernetes原生应用程序的yaml文件，可以在你部署应用的时候自定义应用程序的一些metadata，便与应用程序的分发。

Helm和charts的主要作用：

- 应用程序封装
- 版本管理
- 依赖检查
- 便于应用程序分发

## Helm部署

### 安装Helm

1.部署Helm客户端

```
[root@linux-node1 ~]# cd /usr/local/src
[root@linux-node1 src]# wget https://get.helm.sh/helm-v3.0.2-linux-amd64.tar.gz
[root@linux-node1 src]# tar zxf helm-v3.0.2-linux-amd64.tar.gz
[root@linux-node1 src]# mv linux-amd64/helm /usr/local/bin/
```

2.验证安装是否成功

```
[root@linux-node1 ~]# helm version
version.BuildInfo{Version:"v3.0.2", GitCommit:"19e47ee3283ae98139d98460de796c1be1e3975f", GitTreeState:"clean", GoVersion:"go1.13.5"}
```

### 使用Helm部署第一个应用

4.搜索Helm应用

```
[root@linux-node1 ~]# helm search jenkins
NAME              CHART VERSION    APP VERSION    DESCRIPTION                                       
stable/jenkins    0.13.5           2.73           Open source continuous integration server. It s...
```

5.查看仓库

```
[root@linux-node1 ~]# helm repo list
NAME      URL                                                   
stable    https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts
local     http://127.0.0.1:8879/charts
```

6.安装第一个应用

```
[root@linux-node1 ~]# helm install stable/jenkins
NAME:   viable-seal
LAST DEPLOYED: Thu Jul 26 19:21:07 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                       DATA  AGE
viable-seal-jenkins        3     1s
viable-seal-jenkins-tests  1     1s

==> v1/PersistentVolumeClaim
NAME                 STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE
viable-seal-jenkins  Pending  1s

==> v1/Service
NAME                       TYPE          CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE
viable-seal-jenkins-agent  ClusterIP     10.1.154.54  <none>       50000/TCP       1s
viable-seal-jenkins        LoadBalancer  10.1.63.24   <pending>    8080:20031/TCP  0s

==> v1beta1/Deployment
NAME                 DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
viable-seal-jenkins  1        1        1           0          0s

==> v1/Pod(related)
NAME                                  READY  STATUS   RESTARTS  AGE
viable-seal-jenkins-7f5c7bd8d4-gc5hv  0/1    Pending  0         0s

==> v1/Secret
NAME                 TYPE    DATA  AGE
viable-seal-jenkins  Opaque  2     1s


NOTES:
1. Get your 'admin' user password by running:
  printf $(kubectl get secret --namespace default viable-seal-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
2. Get the Jenkins URL to visit by running these commands in the same shell:
  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        You can watch the status of by running 'kubectl get svc --namespace default -w viable-seal-jenkins'
  export SERVICE_IP=$(kubectl get svc --namespace default viable-seal-jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
  echo http://$SERVICE_IP:8080/login

3. Login with the password from step 1 and the username: admin

For more information on running Jenkins on Kubernetes, visit:
https://cloud.google.com/solutions/jenkins-on-container-engine
```

# 15.2 深入理解Helm

### Helm组件

```
[root@linux-node1 ~]# tree ~/.helm/
/root/.helm/
├── cache
│   └── archive
│       └── jenkins-0.13.5.tgz
├── plugins
├── repository
│   ├── cache
│   │   ├── local-index.yaml -> /root/.helm/repository/local/index.yaml
│   │   └── stable-index.yaml
│   ├── local
│   │   └── index.yaml
│   └── repositories.yaml
└── starters

7 directories, 5 files
```

默认缓存的文件

```
[root@linux-node1 ~]# cd .helm/cache/archive/
[root@linux-node1 archive]# ls -l
total 16
-rw-r--r-- 1 root root 12650 Jul 26 19:21 jenkins-0.13.5.tgz

[root@linux-node1 archive]# tar zxf jenkins-0.13.5.tgz


[root@linux-node1 archive]# mv jenkins ~/.helm/repository/local/

[root@linux-node1 ~]# cd ~/.helm/repository/local/jenkins/
[root@linux-node1 jenkins]# tree
.
├── Chart.yaml
├── OWNERS
├── README.md
├── templates
│   ├── config.yaml
│   ├── _helpers.tpl
│   ├── home-pvc.yaml
│   ├── jenkins-agent-svc.yaml
│   ├── jenkins-master-deployment.yaml
│   ├── jenkins-master-ingress.yaml
│   ├── jenkins-master-networkpolicy.yaml
│   ├── jenkins-master-svc.yaml
│   ├── jenkins-test.yaml
│   ├── jobs.yaml
│   ├── NOTES.txt
│   ├── rbac.yaml
│   ├── secret.yaml
│   ├── service-account.yaml
│   └── test-config.yaml
└── values.yaml

1 directory, 19 files
```

### 自定义Jenkins的Chart

修改为NodePort

```
[root@linux-node1 jenkins]# vim values.yaml
ServiceType: NodePort
```

检查

```
[root@linux-node1 ~]# helm lint ~/.helm/repository/local/jenkins/
==> Linting /root/.helm/repository/local/jenkins/
Lint OK

1 chart(s) linted, no failures
```

查看有哪些应用

```
[root@linux-node1 ~]# helm list
NAME           REVISION    UPDATED                     STATUS      CHART          NAMESPACE
viable-seal    1           Thu Jul 26 19:21:07 2018    DEPLOYED    jenkins-0.13.5 default
[root@linux-node1 ~]# helm delete --purge viable-seal
release "viable-seal" deleted

[root@linux-node1 ~]# helm install ~/.helm/repository/local/jenkins/ --name devops-jenkins 
NAME:   devops-jenkins
LAST DEPLOYED: Thu Jul 26 19:36:10 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME            TYPE    DATA  AGE
devops-jenkins  Opaque  2     0s

==> v1/ConfigMap
NAME                  DATA  AGE
devops-jenkins        3     0s
devops-jenkins-tests  1     0s

==> v1/PersistentVolumeClaim
NAME            STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE
devops-jenkins  Pending  0s

==> v1/Service
NAME                  TYPE       CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE
devops-jenkins-agent  ClusterIP  10.1.74.175  <none>       50000/TCP       0s
devops-jenkins        NodePort   10.1.3.112   <none>       8080:23558/TCP  0s

==> v1beta1/Deployment
NAME            DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
devops-jenkins  1        1        1           0          0s

==> v1/Pod(related)
NAME                            READY  STATUS   RESTARTS  AGE
devops-jenkins-64d54b79c-pwjfb  0/1    Pending  0         0s


NOTES:
1. Get your 'admin' user password by running:
  printf $(kubectl get secret --namespace default devops-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
2. Get the Jenkins URL to visit by running these commands in the same shell:
  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services devops-jenkins)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo http://$NODE_IP:$NODE_PORT/login

3. Login with the password from step 1 and the username: admin

For more information on running Jenkins on Kubernetes, visit:
https://cloud.google.com/solutions/jenkins-on-container-engine
```

查看状态

```
[root@linux-node1 ~]# helm status devops-jenkins
```

## 创建自己的Chart

### 创建自定义Nginx的Chart

1.创建自定义Chart Nginx的结构

```
[root@linux-node1 ~]# helm create helm-nginx
Creating helm-nginx
 [root@linux-node1 ~]# tree helm-nginx/
opencmdb/
├── charts       #依赖的chart
├── Chart.yaml   #本chart的信息
├── templates    #模板目录
│   ├── deployment.yaml
│   ├── _helpers.tpl
│   ├── ingress.yaml
│   ├── NOTES.txt
│   └── service.yaml
└── values.yaml   #模板赋值
```

2.编辑Chart配置

```
[root@linux-node1 ~]# cd helm-nginx/
[root@linux-node1 helm-nginx]# vim values.yaml
```

3.验证Chart配置，最后面的点表示当前目录

```
[root@linux-node1 helm-nginx]# helm install --dry-run --debug --name helm-nginx .
```

4.安装自定义Chart，最后面的点表示当前目录

```
[root@linux-node1 helm-nginx]# helm install --name helm-nginx .
```

### 查看Helm实例

```
[root@linux-node1 ~]# helm list
NAME          REVISION    UPDATED                     STATUS      CHART                 NAMESPACE
helm-nginx    1           Sun Sep 16 19:32:19 2018    DEPLOYED    helm-nginx-0.1.0      default  
[root@linux-node1 ~]# kubectl get pod
NAME                          READY     STATUS    RESTARTS   AGE
helm-nginx-6975f8dbcd-htvtd   1/1       Running   0          51s

[root@linux-node1 ~]# kubectl get ingress
NAME         HOSTS                ADDRESS   PORTS     AGE
helm-nginx   www.helm-nginx.com             80        1m
```

# 17 应用的日志采集与分析

## Prometheus快速入门

### Prometheus架构介绍

在学习Prometheus之前我们需要清晰的掌握其架构，Prometheus是由多个组件组成的的监控系统，主要有：Prometheus Server、Alertmanager、Pushgateway组成，这三个组件均为独立的应用服务，独立部署和运行，其中Prometheus Server中内置了Prometheus web UI。

![architecture](http://k8s.unixhot.com/kubernetes/media/2ada1ece66fcc81d704c2ba46f9dd7d3.png)

**Prometheus Server：**

Promethedus Server是核心组件，负责数据的获取、存储、查询。Prometheus通过Pull的方式定期的从Jobs/Exporters中获取数据，并保存在内置的TSDB中；内置的Prometheus web UI可以让用户通过PromQL的方式进行数据的检索。

**Exporters：**

Exporters也是一个独立的组件，有官方提供的Exporters也有社区贡献的Exportes，它将监控采集的数据通过HTTP的方式暴露给Prometheus Server，Server定期获取数据。例如有一个Exporters叫做Node Exporter，它安装在受采集的主机上，为Server提供数据，有点类似于Zabbix监控系统中的Zabbix Agent。

**Prometheus web UI：**

Prometheus web UI是Server启动后内置的一个Web界面，通过该Web界面我们可以进行数据查询工作，不包含设置的相关功能。

![img](http://k8s.unixhot.com/kubernetes/media/cc11e0cf02ff729fb905ac3648af18f7.png)

**PromQL：**

PromQL是Prometheus内置的自定义的查询语言，提供对Prometheus Server中的TSDB这个时间序列数据库进行数据查询，支持数据聚合和一些逻辑运算，是一个相对简单的查询语言，而且PromQL也提供了一些内置函数，帮助我们进行数据处理。

**Alertmanager：**

Alertmanager是Promethedus的告警管理组件，它支持基于PromQL来创建告警规则，类似于Zabbix中的告警表达式，对获取到的数据进行计算和比较，如果满足PromQL定义的规则条件，就会产生报警。

**Pushgateway：**

Pushgateway可以理解为数据的一个中转站，例如当Prometheus Server不能直接和Exporters进行通信的场景下。

### 安装Prometheus

学习Prometheus的第一步就是先部署一个实验环境，官方提供了多种方式进行Prometheus安装：

- 源码编译安装
- 下载预编译好的二进制文件
- 使用Docker部署
- 使用第三方工具：Ansible、SaltStack、Puppet、Chef。

为了方便学习，首先我们使用二进制方式部署，可以在这里https://prometheus.io/download/下载对应的预编译的二进制文件。

```
[root@linux-node1 ~]# cd /usr/local/src

[root@linux-node1 src]# wget
https://github.com/prometheus/prometheus/releases/download/v2.7.1/prometheus-2.7.1.linux-amd64.tar.gz

[root@linux-node1 src]# tar zxf prometheus-2.7.1.linux-amd64.tar.gz

[root@linux-node1 src]# mv prometheus-2.7.1.linux-amd64 /usr/local/

[root@linux-node1 src]# ln -s /usr/local/prometheus-2.7.1.linux-amd64/
/usr/local/prometheus
```

**Prometheus配置**

Prometheus的配置文件在prometheus.yml中，直接启动也会到命令的当前目录下寻找该文件。

```
[root@linux-node1 ~]# cd /usr/local/prometheus

[root@linux-node1 prometheus]# vim prometheus.yml

# my global config

global:
scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
# scrape_timeout is set to the global default (10s).
# Alertmanager configuration
alerting:
alertmanagers:
- static_configs:
- targets:
# - alertmanager:9093
# Load rules once and periodically evaluate them according to the global
'evaluation_interval'.
rule_files:
# - "first_rules.yml"
# - "second_rules.yml"
# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
# The job name is added as a label `job=<job_name>` to any timeseries
scraped from this config.
- job_name: 'prometheus'
# metrics_path defaults to '/metrics'
# scheme defaults to 'http'.
static_configs:
- targets: ['localhost:9090']
```

**启动Prometheus**

默认情况下Prometheus会把数据写在启动目录的./data目录下，可以通过启动参数指定目录：--storage.tsdb.path="data/"，更多参数可以通过—help查看

```
[root@linux-node1 prometheus]# ./prometheus –help

[root@linux-node1 prometheus]# ./prometheus

…

level=info ts=2019-02-12T08:04:03.799169159Z caller=main.go:620 msg="Starting
TSDB ..."
level=info ts=2019-02-12T08:04:03.835497463Z caller=main.go:635 msg="TSDB
started"
level=info ts=2019-02-12T08:04:03.835598421Z caller=main.go:695 msg="Loading
configuration file" filename=prometheus.yml
level=info ts=2019-02-12T08:04:03.83756508Z caller=main.go:722 msg="Completed
loading of configuration file" filename=prometheus.yml
level=info ts=2019-02-12T08:04:03.83760078Z caller=main.go:589 msg="Server is
ready to receive web requests."
level=info ts=2019-02-12T08:04:03.837641772Z caller=web.go:416 component=web
msg="Start listening for connections" address=0.0.0.0:9090
```

默认会在前台启动，并监听9090端口，会自动创建data目录，并存放数据。注意如何服务器时间不正确会有警告提示，请保证服务器时间同步。

![img](http://k8s.unixhot.com/kubernetes/media/266a101825cbabc2782820895e161f59.png)

**放置在后台运行**

```
[root@linux-node1 ~]# groupadd prometheus

[root@linux-node1 ~]# useradd -g prometheus -d /var/lib/prometheus -s
/sbin/nologin prometheus

[root@linux-node1 ~]# vim /usr/lib/systemd/system/prometheus.service

[Unit]

Description=prometheus
After=network.target
[Service]
Type=simple
User=prometheus
ExecStart=/usr/local/prometheus/prometheus
--config.file=/usr/local/prometheus/prometheus.yml
--storage.tsdb.path=/var/lib/prometheus
Restart=on-failure
[Install]
WantedBy=multi-user.target
```

后台启动

```
[root@linux-node1 ~]# systemctl enable prometheus

[root@linux-node1 ~]# systemctl start prometheus
```

查看启动状态

```
[root@linux-node1 ~]# netstat -ntlp | grep 9090

tcp6 0 0 :::9090 :::* LISTEN 61333/prometheus
```

### 使用Node Exporter采集主机数据

```
[root@linux-node1 ~]# cd /usr/local/src

[root@linux-node1 src]# wget
<https://github.com/prometheus/node_exporter/releases/download/v0.17.0/node_exporter-0.17.0.linux-amd64.tar.gz>

[root@linux-node1 src]# tar zxf node_exporter-0.17.0.linux-amd64.tar.gz

[root@linux-node1 src]# mv node_exporter-0.17.0.linux-amd64 /usr/local/

[root@linux-node1 src]# ln -s /usr/local/node_exporter-0.17.0.linux-amd64/
/usr/local/node_exporter

[root@linux-node1 ~]# vim /usr/lib/systemd/system/node_exporter.service

[Unit]
Description=node_exporter
After=network.target
[Service]
Type=simple
User=prometheus
ExecStart=/usr/local/prometheus/node_exporter/node_exporter
Restart=on-failure
[Install]
WantedBy=multi-user.target
```

启动Node Exporter

```
[root@linux-node1 ~]# systemctl enable node_exporter

[root@linux-node1 ~]# systemctl start node_exporter
```

查看状态
[root@linux-node1 ~]# netstat -ntlp | grep 9100

```
tcp6 0 0 :::9100 :::* LISTEN 66239/node_exporter
```

默认情况下Node Exporter监听9100端口，通过/metrics暴露采集到的监控数据，Prometheus默认也从该地址获取数据。

![img](http://k8s.unixhot.com/kubernetes/media/1004a69a33423c72a2989005be5a790e.png)

**配置Prometheus读取Node Exporter数据**

```
[root@linux-node1 ~]# vim /usr/local/prometheus/prometheus.yml

scrape_configs:
# The job name is added as a label `job=<job_name>` to any timeseries
scraped from this config.
- job_name: 'prometheus'
# metrics_path defaults to '/metrics'
# scheme defaults to 'http'.
static_configs:
- targets: ['localhost:9090']
- job_name: 'linux-node1'
static_configs:
- targets: ['192.168.56.11:9100']
labels:
instance: linux-node1
```

**重启prometheus**

```
[root@linux-node1 ~]# systemctl restart prometheus
```

**查看监控状态**

登录Prometheus的Web控制台，StatusTargets如果可以linux-node1并且状态是UP的状态即为配置成功。

![img](http://k8s.unixhot.com/kubernetes/media/8c3da60dbf5558dc649de1fd6ce43bf0.png)

### 使用Prometheus UI查看数据

现在Prometheus会定期的从http://192.168.56.11:9100/metrics获取数据，并存储，我们可以使用Prometheus UI来查看监控数据。

### 使用Grafana进行数据可视化

**1.安装Grafana**

```
[root@linux-node1 ~]# vim /etc/yum.repos.d/grafana.repo

[grafana]
name=grafana
baseurl=https://packages.grafana.com/oss/rpm
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://packages.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt

[root@linux-node1 ~]# yum install -y grafana
```

**2.配置Grafana**

Grafana的配置文件在/etc/grafana/grafana.ini，默认情况下Grafana监听3000端口

```
[root@linux-node1 ~]# vim /etc/grafana/grafana.ini
```

**3.启动Grafana**

```
[root@linux-node1 ~]# systemctl enable grafana-server

[root@linux-node1 ~]# systemctl start grafana-server

[root@linux-node1 ~]# netstat -ntlp | grep 3000

tcp6 0 0 :::3000 :::* LISTEN 81427/grafana-serve
```

**4.访问Grafana**

访问[http://192.168.56.11:3000](http://192.168.56.11:3000/)，用户名和密码默认为admin/admin，第一次登陆会要求修改密码，请使用安全密码。

**5.增加Prometheus数据源**

点击

![img](http://k8s.unixhot.com/kubernetes/media/b681a9b528d2ff21ba66666ce2452e51.png)

，然后选择

![img](http://k8s.unixhot.com/kubernetes/media/d3e83ac4f090a51c5b5e0c341b99dda5.png)

。

配置URL为：[http://192.168.56.11:9090](http://192.168.56.11:9090/)，并点击Save&Test。

![img](http://k8s.unixhot.com/kubernetes/media/e35d8aaebedd7e168ebd1b29b65b30bb.png)

**6.设置Dashboard**

数据源设置完毕后，就可以设置Dashboard图形展示，可以手动添加，也可以直接下载别人配置好保持的Json文件直接导入即可。

下载地址：https://grafana.com/dashboards/405，在右侧有Download Json按钮，下载该Json文件。

![img](http://k8s.unixhot.com/kubernetes/media/d9ab69b29a964a12df52512a7b128b5b.png)

点击Home下的Import Dashboard

![img](http://k8s.unixhot.com/kubernetes/media/53ffc0e739ca7b9421f9568ae4cbf117.png)

然后直接上传刚才下载的JSON文件。

![img](http://k8s.unixhot.com/kubernetes/media/500958891a82067b0c987d514239ffb0.png)

导入完毕后，就可以在Grafana上查看对应节点的监控数据图表。你可以通过鼠标拖拽进行图表的自定义大小和位置的修改，效果如下：

![img](http://k8s.unixhot.com/kubernetes/media/698a6241faa0adc1af6c09cc369b259b.png)

# 第七部分 Kubernetes高级进阶

# Kubernetes的权限控制RBAC

**角色**

- Role: 角色，命名空间范围内的一个权限集合。

- ClusterRole：集群角色，集群范围内的一个权限的集合，

  Role和ClusterROle在Kubernetes中都被定义为集群内部的 API 资源，和我们前面学习过的 Pod、ConfigMap 这些类似，都是我们集群的资源对象，所以同样的可以使用我们前面的kubectl相关的命令来进行操作 Subject：主题，对应在集群中尝试操作的对象，集群中定义了3种类型的主题资源：

User Account：用户，这是有外部独立服务进行管理的，管理员进行私钥的分配，用户可以使用 KeyStone或者 Goolge 帐号，甚至一个用户名和密码的文件列表也可以。对于用户的管理集群内部没有一个关联的资源对象，所以用户不能通过集群内部的 API 来进行管理 Group：组，这是用来关联多个账户的，集群中有一些默认创建的组，比如cluster-admin Service Account：服务帐号，通过Kubernetes API 来管理的一些用户帐号，和 namespace 进行关联的，适用于集群内部运行的应用程序，需要通过 API 来完成权限认证，所以在集群内部进行权限操作，我们都需要使用到 ServiceAccount，这也是我们这节课的重点 RoleBinding 和 ClusterRoleBinding：角色绑定和集群角色绑定，简单来说就是把声明的 Subject 和我们的 Role 进行绑定的过程(给某个用户绑定上操作的权限)，二者的区别也是作用范围的区别：RoleBinding 只会影响到当前 namespace 下面的资源操作权限，而 ClusterRoleBinding 会影响到所有的 namespace。

**创建用户凭证**

```
[root@linux-node1 ~]# openssl genrsa -out jenkins.key 2048
[root@linux-node1 ~]# openssl req -new -key jenkins.key -out jenkins.csr -subj "/CN=jenkins/O=vmware"
[root@linux-node1 ~]# openssl x509 -req -in jenkins.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out jenkins.crt -days 365
[root@linux-node1 ~]# kubectl config set-credentials jenkins --client-certificate=jenkins.crt  --client-key=jenkins.key
[root@linux-node1 ~]# kubectl config set-context jenkins-context --cluster=kubernetes --namespace=jenkins --user=jenkins  
[root@linux-node1 ~]# kubectl get pods --context=jenkins-context
```

**创建角色**

```
[root@linux-node1 ~]# vim jenkins-role.yml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: jenkins-role
  namespace: jenkins
rules:
- apiGroups: ["", "extensions", "apps"]
  resources: ["deployments", "replicasets", "pods"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
```

**创建角色绑定**

```
[root@linux-node1 ~]# vim jenkins-role-binding.yml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: jenkins-rolebinding
  namespace: jenkins
subjects:
- kind: User
  name: jenkins
  apiGroup: ""
roleRef:
  kind: Role
  name: jenkins-role
  apiGroup: ""
```

# 22 深入理解Pod调度

# 深入理解Pod调度

在前面的章节我们已经知道在Kubernetes中使用kube-scheduler进行Pod调度，它的目标是将Pod绑定到对应的Node上，经过一系列的条件和算法尽可能的让每个Pod都满意。kube-scheduler是Kubernetes默认的调度器。

kube-scheduler的代码位于[GitHub](https://github.com/kubernetes/kubernetes/tree/master/pkg/scheduler)

可以将代码克隆到本地方便查看

```
[root@linux-node1 ~]# git clone --depth 1 https://github.com/kubernetes/kubernetes.git
```

在algorithm下有调度算法，调度算法分为两个阶段：Predicates和priorities，首先对Node进行过滤看哪些Node符合调度要求，然后在符合调度要求的Node上进行优先级计算，判断调度到哪个Node最合适。

```
[root@linux-node1 algorithm]# pwd
/root/kubernetes/pkg/scheduler/algorithm
[root@linux-node1 algorithm]# ls -l
total 20
-rw-r--r-- 1 root root 1256 Dec 17 22:52 BUILD
-rw-r--r-- 1 root root  735 Dec 17 22:52 doc.go
drwxr-xr-x 2 root root  276 Dec 17 22:52 predicates
drwxr-xr-x 3 root root 4096 Dec 17 22:52 priorities
-rw-r--r-- 1 root root 3278 Dec 17 22:52 scheduler_interface.go
-rw-r--r-- 1 root root 3383 Dec 17 22:52 types.go
```

官方文档详细的介绍了所有的步骤：https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/

**设置调度器**

```
[root@linux-node1 ~]# kubectl get pod kube-proxy-5wbtf -n kube-system -o yaml | grep schedulerName
  schedulerName: default-scheduler
```

## Taints（污点）

```
[root@linux-node1 ~]# kubectl describe node linux-node1.unixhot.com | grep Taints
Taints:             node-role.kubernetes.io/master:NoSchedule
```

Taints的表现形式为

```
<key>=<value>:<effect>
```

effect的三种类型：

- NoSchedule: 如果Pod没有容忍该污点，不调度到该节点上。
- PreferNoSchedule：尽量阻止Pod被调度到这个节点上，但是如果没有其它节点能够调度，可以调度到该节点。
- NoExecute： NoScheduler和PreferNoSchedule只是在调度阶段起作用，但是NoExecute会影响正常运行的Pod，如果一个节点被打了NoExecute的污点，而运行在该节点的Pod没有容忍会直接被这个节点移除。

查看Flannel为何能调度到Master节点

```
[root@linux-node1 ~]# kubectl get po -n kube-system | grep flannel
kube-flannel-ds-amd64-f2jrk                       1/1     Running   2          22h
kube-flannel-ds-amd64-mh75v                       1/1     Running   2          22h
kube-flannel-ds-amd64-n52zm                       1/1     Running   4          22h

[root@linux-node1 ~]# kubectl describe pod kube-flannel-ds-amd64-f2jrk -n kube-system
...
Tolerations:     :NoSchedule
                 node.kubernetes.io/disk-pressure:NoSchedule
                 node.kubernetes.io/memory-pressure:NoSchedule
                 node.kubernetes.io/network-unavailable:NoSchedule
                 node.kubernetes.io/not-ready:NoExecute
                 node.kubernetes.io/pid-pressure:NoSchedule
                 node.kubernetes.io/unreachable:NoExecute
                 node.kubernetes.io/unschedulable:NoSchedule
```

### 自定义污点

```
[root@linux-node1 ~]# kubectl taint node linux-node2.example.com node-ytpe=gpu:NoSchedule       
node/linux-node2.example.com tainted
[root@linux-node1 example]# cat nginx-deployment-taint.yaml    
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.13.12
        ports:
        - containerPort: 80
      tolerations:
      - key: node-type
        operator: Equal
        value: gpu
        effect: Noschedule
[root@linux-node1 example]# kubectl get po -o wide
NAME                                READY   STATUS    RESTARTS   AGE     IP          NODE                      NOMINATED NODE   READINESS GATES
dns-test                            1/1     Running   1          6h15m   10.2.2.23   linux-node3.example.com   <none>           <none>
nginx-deployment-77564d4546-2jkw9   1/1     Running   0          13s     10.2.2.26   linux-node3.example.com   <none>           <none>
nginx-deployment-77564d4546-4hrbf   1/1     Running   0          13s     10.2.2.24   linux-node3.example.com   <none>           <none>
nginx-deployment-77564d4546-s2r4h   1/1     Running   0          13s     10.2.2.25   linux-node3.example
```

## 亲缘性调度

# 23 Kubernetes API介绍

查看集群状态

```
[root@k8s-master1 ~]# kubectl cluster-info
Kubernetes master is running at https://192.168.56.11:6443
KubeDNS is running at https://192.168.56.11:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

直接访问Kubernetes API需要验证，无法直接访问。

```
[root@k8s-master1 ~]# curl -k https://192.168.56.11:6443
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {

  },
  "status": "Failure",
  "message": "forbidden: User \"system:anonymous\" cannot get path \"/\"",
  "reason": "Forbidden",
  "details": {

  },
  "code": 403
}
```

**通过Proxy访问Kubernetes API**

使用kubectl proxy可以在Master本地启动一个代理

```
[root@k8s-master1 ~]# kubectl proxy
Starting to serve on 127.0.0.1:8001
```

可以通过127.0.0.1:8001与API Server进行交互

```
[root@k8s-master1 ~]# curl http://127.0.0.1:8001
{
  "paths": [
    "/api",
    "/api/v1",
    "/apis",
    "/apis/",
    "/apis/admissionregistration.k8s.io",
    "/apis/admissionregistration.k8s.io/v1beta1",
    "/apis/apiextensions.k8s.io",
    "/apis/apiextensions.k8s.io/v1beta1",
    "/apis/apiregistration.k8s.io",
    "/apis/apiregistration.k8s.io/v1",
    "/apis/apiregistration.k8s.io/v1beta1",
    "/apis/apps",
...（省略其它输出）
```

可以通过修改监听地址，并关闭过滤，实现在其它地方登录和查看，这样就可以在本地浏览器访问API。切记不要再生产环境将代理地址暴露在外网。

```
[root@k8s-master1 ~]# kubectl proxy --address=0.0.0.0 --disable-filter=true
W1105 16:18:45.669591   16730 proxy.go:142] Request filter disabled, your proxy is vulnerable to XSRF attacks, please be cautious
Starting to serve on [::]:8001
```

### 使用Swagger UI进行API交互

Kubernetes支持Swagger UI访问API，需要在API Server开启，如果已经根据本书使用kubeadm部署的集群，可以通过修改Pod的YAML文件，重建Pod来开启

**修改API Server的Pod定义文件**

在- kube-apiserver下面一行增加--enable-swagger-ui=true

```
[root@k8s-master1 ~]# vim /etc/kubernetes/manifests/kube-apiserver.yaml 
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    component: kube-apiserver
    tier: control-plane
  name: kube-apiserver
  namespace: kube-system
spec:
  containers:
  - command:
    - kube-apiserver
    - --enable-swagger-ui=true
    - --advertise-address=192.168.56.11
    - --allow-privileged=true
```

删除Pod，kubelet会通过该YAML重建Pod

```
[root@k8s-master1 ~]# kubectl get pod -n kube-system | grep api
kube-apiserver-linux-node1.unixhot.com            1/1     Running   0          55m
[root@k8s-master1 ~]# kubectl delete pod kube-apiserver-linux-node1.unixhot.com -n kube-system
```

可以看到配置已经生效

```
[root@k8s-master1 ~]# kubectl describe pod kube-apiserver-linux-node1.unixhot.com -n kube-system 
...
    Command:
      kube-apiserver
      --enable-swagger-ui=true
      --advertise-address=192.168.99.27
....
```

部署一个Swagger UI服务查看API

```
[root@k8s-master1 ~]# kubectl run swagger-ui --image=swaggerapi/swagger-ui:latest
[root@k8s-master1 ~]# kubectl expose deployment swagger-ui --port=8080 --type=NodePort
[root@k8s-master1 ~]# kubectl get service
NAME         TYPE        CLUSTER-IP    EXTERNAL-IP     PORT(S)          AGE
kubernetes   ClusterIP   10.1.0.1      <none>          443/TCP          43d
swagger-ui   NodePort    10.1.205.94   <none>   8080:30410/TCP   34s
```

因为我们部署的Swagger UI和API Server不在一个域名下，所以会有跨域的问题，Chrome浏览器需要提前安装Allow CROS插件解决


----------


----------
摘录自赵班长--------