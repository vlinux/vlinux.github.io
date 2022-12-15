---
title: LInux系统介绍
categories: Linux技术
tags: [linux系统初识]
date: 2020-03-17 11:38:33
---
- **1.**linux版本有：redhat（收费），centos，ubuntu，suse（开发使用）

- **2.**/目录下的：etc配置文件目录，media挂载点，opt第三方安装目录，boot启动文件，home家，lost+found回收站，tmp临时，mnt挂载点， dev设备

- **3.**主分区P，扩展分区E，主分区+扩展分区小于等于4个，逻辑分区从5开始

- **4.**硬盘IDE（hd），scsi（sd），顺序（hda，hdb，hdc） 



```
命令：fdisk -l                #查看磁盘情况
命令：date                    #显示当前系统时间。-s修改时间
命令：cal                     #显示当前日历
命令：history                 #历史 
命令：pwd                     #绝对路径
命令：reboot，shutdown -r now，init 6 #重启
命令：uname -r                #内核版本   2（主版本）.6（次版本，偶数为稳定版，奇数为开发版）.32（2.6版本修订了32次）-358.el6（表示支持多处理器）.i666（CPU） 
```
![1584085602.jpg][1]


  [1]: https://cdn.jsdelivr.net/gh/xoxoyun/MCDN/usr/uploads/2020/03/783762425.jpg