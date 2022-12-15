---
title: Sersync/lsync实时同步
categories: Linux技术
tags: [Sersync,Lsync,实时同步]
date: 2020-03-12 16:10:00
---
# 第一章 为什么需要实时同步

## 1.第二阶段实时同步解决了什么问题:

解决 NFS单点故障问题
 备份NFS数据并且提供冗余的服务功能

## 2.实时同步难点



```bash
什么条件才同步
多久同步一次
用什么备份方式同步
用什么工具同步
```

# 第二章 inotify简介



```css
Inotify是一种强大的,细粒度的,异步的文件系统事件监视机制
Linux2.6.13起加入了inotify支持,通过inotify可以监控文件系统中添加,删除,修改,移动等各种事件
利用这个内核接口,第三方软件就可以监控文件系统下文件的各种变化情况
而inotify-tools正是实施这样监控的软件
```

关系图



![img](http:////upload-images.jianshu.io/upload_images/14248468-e23cc9187ab60ed7.png?imageMogr2/auto-orient/strip|imageView2/2/w/448/format/webp)

# 第三章 Inotify实时同步

## 1.查看当前系统是否支持inotify



```csharp
[root@nfs ~]# uname -r
3.10.0-862.el7.x86_64
[root@nfs ~]# ls -l /proc/sys/fs/inotify/
total 0
-rw-r--r-- 1 root root 0 Oct 21 10:47 max_queued_events
-rw-r--r-- 1 root root 0 Oct 21 10:47 max_user_instances
-rw-r--r-- 1 root root 0 Oct 21 10:47 max_user_watches
===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
max_queued_events   =====>设置inotify实例事件(event)队列可容纳的事件数量
max_user_instances  =====>设置每个用户可以运行的inotify或者inotifywatch命令的进程数
max_user_watches    =====>设置inotifywait或者inotifywatch命令可以监视的文件数量(单进程)
```

## 2.安装inotify-tools



```csharp
[root@nfs ~]# yum install inotify-tools -y
```

## 3.inotifywait详细参数解释



```go
inotifywait参数说明
参数名称            参数说明
-m ,-monitor       始终保持事件监听状态
-r,-recursive      递归查询目录
-q,-quiet          只打印监控事件的信息
-exclude           排除文件或目录时,不区分大小写
-t,-timeout        超时时间
--timefmt          指定时间输出格式
--format           指定输出格式
-e,event           后面指定增,删,改等事件
inotifywait events 事件说明
access             读取文件或目录内容
modify             修改文件或目录内容
attrib             文件或目录的属性改变
close_write        修改真实文件内容
close_nowrite   
close   
open               文件或目录被打开
moved_to           文件或目录移动到
moved_from         文件或目录从...移动到
move               移动文件或目录移动到监视目录
create             在监视目录下创建文件或目录
delete             删除监视目录下的文件或目录
delete_self 
umount             卸载文件系统
```

## 4.查看inotify默认参数



```ruby
[root@nfs01 ~]# sysctl -a |egrep max_queued_events
fs.inotify.max_queued_events = 16384
[root@nfs01 ~]#  sysctl -a |egrep max_user_watches
fs.epoll.max_user_watches = 201256
fs.inotify.max_user_watches = 8192
[root@nfs01 ~]# sysctl -a |egrep max_user_instances
fs.inotify.max_user_instances = 128
```

## 5.针对上述命令进行测试

参数解释:



```bash
%T   #调用并显示定义好的时间格式
%w   #显示发生变化的文件的绝对路径
%f   #显示监控到的文件名称,去掉后只显示目录路径
-e delete,create   #指定监控文件变化的类型 
```

1.开启两个窗口:测试create和delete



```go
inotifywait -mrq --timefmt '%d/%m/%y %H:%M' --format '%T %w%f' -e delete,create /backup
```

2.测试close_write



```bash
inotifywait -mrq --timefmt '%d/%m/%y %H:%M' --format '%w%f' -e close_write /backup
```

3.打印出事件类型



```go
inotifywait -mrq --format '%w%f %e' -e delete,create /backup
```

## 6.把客户端监控到情况出发rsync推送变化的文件



```bash
#!/bin/bash 

Path=/data
backup_Server=172.16.1.41
export RSYNC_PASSWORD=123456

/usr/bin/inotifywait -mrq --format '%w%f' -e create,close_write,delete /data | while read line
do
    echo ${line}
    if [ -f ${line} ]
    then
       rsync -az ${line} rsync_backup@${backup_Server}::data
    else
       rsync -az --delete /data/ rsync_backup@${backup_Server}::data
    fi
done
```

## 7.inotify优缺点



```bash
inotify优点
1)监控文件系统事件变化

inotify缺点
1)并发如果大于200个文(10-100k),同步就会由延迟
2)我们前面的脚本,每次都是全部推送一次,但是确实是增量的,也可以只同步变化的文件
3)监控到事件后,调用rsync同步是单进程(加&并发)
4)我们自己写的脚本健壮性不高
```

# 第四章 sersync简介

## 1.sersync介绍

以下内容摘抄sersync作者官网的说明



```css
sersync主要用于服务器同步,web镜像等功能.
基于boost1.41.0,inotify api,rsync command开发.
目前使用的比较多的同步解决方案是inotify-tools+rsync
```

## 2.sersync优点



```css
1.sersync是使用c++编写,而且对linux系统文件系统产生的临时文件和重复的文件操作进行过滤(详细见附录,这个过滤脚本程序没有实现),所以结合rsync同步的时候,节省了运行时耗和网络资源,因此更快
2.相比较上面两个项目,sersync配置起来很简单,其中bin目录下已经有基本上静态编译的2进制文件,配合bin目录下的xml配置文件直接使用即可.
3.另外本项目相比较其他脚本开源项目,使用多线程进行同步,尤其在同步较大文件时,能够保证多个服务器保持同步状态
4.本项目有出错处理机制,通过失败队列对出错的文件重新同步,如果仍旧失败,则每10个小时对同步失败的文件重新同步
5.本项目自带crontab功能,只需在xml配置文件中开启,即可按照您的要求,隔一段时间整体同步一次,无须在额外配置crontab功能
6.本项目socket与http插件拓展,满足您二次开发的需要.
```

# 第五章 sersync安装部署

## 1.主机规划



```css
nfs-server 172.16.1.31 rsync+inotify+sersync  nfs-client
backup     172.16.1.41 rsync-server           nfs-server
```

## 2.安装sersync



```bash
cd /opt/
wget http://down.whsir.com/downloads/sersync2.5.4_64bit_binary_stable_final.tar.gz
tar zxf sersync2.5.4_64bit_binary_stable_final.tar.gz
mv GNU-Linux-x86 sersync
cd sersync
cp confxml.xml confxml.xml.bak
```

## 3.配置解释



```xml
#需要监控的目录      <localpath watch="/data">   
#远程rsync服务器的IP地址和模块名称   <remote ip="172.16.1.41" name="data"/>  
#rsync传输的参数    <commonParams params="-az"/> 
#rsync密码文件路径  <auth start="true" users="rsync_backup" passwordfile="/etc/rsync.passwd"/>    #
```

## 4.配置文件修改



```xml
 23     <sersync>
 24         <localpath watch="/data">
 25             <remote ip="172.16.1.41" name="data"/>
 26             <!--<remote ip="192.168.8.39" name="tongbu"/>-->
 27             <!--<remote ip="192.168.8.40" name="tongbu"/>-->
 28         </localpath>
 29         <rsync>
 30             <commonParams params="-az"/>
 31             <auth start="true" users="rsync_backup" passwordfile="/etc/rsync.passwd"/>
```

## 5.查看帮助说明



```bash
[root@nfs /opt/sersync]# ./sersync2 -h
set the system param
execute：echo 50000000 > /proc/sys/fs/inotify/max_user_watches
execute：echo 327679 > /proc/sys/fs/inotify/max_queued_events
parse the command param
_______________________________________________________
参数-d:启用守护进程模式
参数-r:在监控前，将监控目录与远程主机用rsync命令推送一遍
c参数-n: 指定开启守护线程的数量，默认为10个
参数-o:指定配置文件，默认使用confxml.xml文件
参数-m:单独启用其他模块，使用 -m refreshCDN 开启刷新CDN模块
参数-m:单独启用其他模块，使用 -m socket 开启socket模块
参数-m:单独启用其他模块，使用 -m http 开启http模块
不加-m参数，则默认执行同步程序
________________________________________________________________
[root@nfs /opt/sersync]# 
```

## 6.启动服务



```bash
./sersync2 -rdo confxml.xml
```

## 7.测试数据是否同步

backup服务器操作：

1秒查看一下/data目录下文件的个数



```bash
cd /data
while true ;do ls |wc -l;sleep 0.1;done
```

nfs服务端操作：



```bash
cd /data
for i in {1..1000};do echo "${i}"; echo "${i}" > ${i}.txt;sleep 0.1;done
```

# 第六章 lsyncd同步

## 1.官方地址



```cpp
https://github.com/axkibe/lsyncd](https://github.com/axkibe/lsyncd
```

## 2.lsyncd介绍



```css
Lysncd 实际上是lua语言封装了 inotify 和 rsync 工具，采用了 Linux 内核（2.6.13 及以后）里的 inotify 触发机制，然后通过rsync去差异同步，达到实时的效果。
它最令人称道的特性是，完美解决了 `inotify + rsync`海量文件同步带来的文件频繁发送文件列表的问题 —— 通过时间延迟或累计触发事件次数实现。
另外，它的配置方式很简单，lua本身就是一种配置语言，可读性非常强。lsyncd也有多种工作模式可以选择，本地目录cp，本地目录rsync，远程目录rsyncssh。
实现简单高效的本地目录同步备份（网络存储挂载也当作本地目录），一个命令搞定。
```

## 3.lsyncd安装



```bash
yum install lsyncd -y
```

## 4.创建配置文件

只监控1个目录



```bash
[root@nfs ~]# cat /etc/lsyncd.conf
settings {
  logfile = "/var/log/lsyncd/lsyncd.log",
  statusFile = "/var/log/lsyncd/lsyncd.status",
  inotifyMode = "CloseWrite",
  maxProcesses = 8,
}
sync {
  default.rsync,
  source = "/data",
  target = "rsync_backup@172.16.1.41::data",
  delete = true,
  exclude = { ".*" },
  delay = 1,
  rsync = {
    binary = "/usr/bin/rsync",
    archive = true,
    compress = true,
    verbose = true,
    password_file = "/etc/rsync.passwd",
    _extra = {"--bwlimit=200"}
  }
}
```

监控2个目录



```bash
[root@nfs ~]# cat /etc/lsyncd.conf
settings {
  logfile = "/var/log/lsyncd/lsyncd.log",
  statusFile = "/var/log/lsyncd/lsyncd.status",
  inotifyMode = "CloseWrite",
  maxProcesses = 8,
}
sync {
  default.rsync,
  source = "/data",
  target = "rsync_backup@172.16.1.41::data",
  delete = true,
  exclude = { ".*" },
  delay = 1,
  rsync = {
    binary = "/usr/bin/rsync",
    archive = true,
    compress = true,
    verbose = true,
    password_file = "/etc/rsync.passwd",
    _extra = {"--bwlimit=200"}
  }
}

sync {
  default.rsync,
  source = "/backup",
  target = "rsync_backup@172.16.1.41::backup",
  delete = true,
  exclude = { ".*" },
  delay = 1,
  rsync = {
    binary = "/usr/bin/rsync",
    archive = true,
    compress = true,
    verbose = true,
    password_file = "/etc/rsync.passwd",
    _extra = {"--bwlimit=200"}
  }
}
```

## 5.配置文件解释

参考网友博客



```ruby
https://www.cnblogs.com/zxci/p/6243574.html
```

## 6.启动命令



```bash
systemctl start lsyncd 
```

## 7.检查测试

backup测试



```bash
cd /data
while true ;do ls |wc -l;sleep 0.1;done
```

NFS测试



```bash
cd /data
for i in {1..1000};do echo "${i}"; echo "${i}" > ${i}.txt;sleep 0.1;done
```



