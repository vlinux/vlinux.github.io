---
title: Nginx平滑升级
categories: Linux技术
tags: [Nginx,Nginx平滑升级]
date: 2023-01-16 21:00:00
---

二进制安装的Nginx平滑升级还是有点点麻烦的，这个教程我用它平滑无感知升级过无数次，可放心食用

<!-- more -->

## **Nginx信号简介**

## **主进程支持的信号 **

TERM, INT: 立刻退出

QUIT: 等待工作进程结束后再退出

KILL: 强制终止进程

HUP: 重新加载配置文件，使用新的配置启动工作进程，并逐步关闭旧进程。

USR1: 重新打开日志文件

USR2: 启动新的主进程，实现热升级

WINCH: 逐步关闭工作进程

## **工作进程支持的信号**

TERM, INT: 立刻退出

QUIT: 等待请求处理结束后再退出

USR1: 重新打开日志文件

## 1、查看现有的nginx编译参数

```bash
[root@wenmao ~]# /usr/local/nginx/sbin/nginx -V
nginx version: nginx/1.16.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) 
built with OpenSSL 1.1.0g  2 Nov 2017
TLS SNI support enabled
configure arguments: --prefix=/usr/local/nginx --with-http_ssl_module --with-openssl=/root/devops/openssl-1.1.0g --with-pcre=/root/devops/pcre-8.32 --with-zlib=/root/devops/zlib-1.2.11 --with-http_stub_status_module --add-module=/root/devops/nginx-module-vts
```

## 2.上传新版本的源码包nginx-1.22.0.tar.gz，解压缩到/usr/local/

```bash
[root@wenmao ~]# cd /usr/local/nginx-1.22.0/

[root@wenmao nginx-1.22.0]# ./configure --prefix=/usr/local/nginx-1.22.0 --with-http_ssl_module --with-openssl=/root/devops/openssl-1.1.0g  --with-pcre=/root/devops/pcre-8.32 --with-zlib=/root/devops/zlib-1.2.11 --with-http_stub_status_module --add-module=/root/devops/nginx-module-vts
注意指定依赖包具体位置
[root@wenmao ~]# make

不要make install 
```

## 3、备份nginx二进制文件（期间nginx不会停止服务） 

```bash
[root@wenmao ~]# mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx_`date +%F`
```

## 4、复制新的nginx二进制文件，进入新的nginx源码包

```bash
[root@wenmao ~]# cp /usr/local/nginx/nginx-1.22.0/objs/nginx  /usr/local/nginx/sbin/
```

## 5、测试新版本的nginx是否正常

```bash
[root@wenmao ~]# /usr/local/nginx/sbin/nginx -t
```

## 6、给nginx发送平滑迁移信号（若不清楚pid路径，请查看nginx配置文件）

## USR2: 启动新的主进程，实现热升级

```bash
[root@wenmao ~]# kill -USR2 `cat /var/run/nginx.pid`
```

## 7、查看nginx pid，会出现一个nginx.pid.oldbin

```bash
[root@wenmao ~]# ll /var/run/nginx.pid*

-rw-r--r-- 1 root root 5 Jul  1 00:00 /var/run/nginx.pid

-rw-r--r-- 1 root root 5 Jul 1 11:11 /var/run/nginx.pid.oldbin
```

## 8、从容关闭旧的Nginx进程(WINCH: 逐步关闭工作进程)

```bash
[root@wenmao ~]# kill -WINCH `cat /var/run/nginx.pid.oldbin`
```

## 9、此时不重载配置启动旧的工作进程

## HUP: 重新加载配置文件，使用新的配置启动工作进程，并逐步关闭旧进程。

```bash
[root@wenmao ~]# kill -HUP `cat /var/run/nginx.pid.oldbin`
```

## 10、结束工作进程，完成此次升级

## QUIT: 等待请求处理结束后再退出

```bash
[root@wenmao ~]# kill -QUIT `cat /var/run/nginx.pid.oldbin`
```

## 11、验证Nginx是否升级成功

```bash
[root@wenmao ~]# /usr/local/nginx/sbin/nginx -V
```



