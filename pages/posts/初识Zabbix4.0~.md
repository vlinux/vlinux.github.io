---
title: 初识Zabbix4.0~
categories: 默认分类
tags: [Zabbix]
date: 2019-05-09 23:09:00
---
zabbix监控服务
==========


----------


第一章 监控知识基本概述
============

1.为什么要使用监控
----------

 - 1.对系统不间断实时监控
 - 2.实时反馈系统当前状态
 - 3.保证服务可靠性安全性
 - 4.保证业务持续稳定运行

2.如何进行监控，比如我们需要监控磁盘的使用率
-----------------------

 - 1.如何查看磁盘使用率 df -h
 - 2.监控磁盘的那些指标 block、 inode
 - 3.如何获取具体的信息 df -h|awk '///{print(NF-1)}'
 - 4.获取的数值到达多少报警 80%

3.流行的监控工具
---------

 - 1.Zabbix
 - 2.Lepus(天兔)数据库监控系统
 - 3.Open-Falcon 小米
 - 4.Prometheus(普罗米修斯， Docker、 K8s)

4.如果去到一家新公司，如何入手监控
------------------

 - 1.硬件监控 路由器、交换机、防火墙
 - 2.系统监控 CPU、内存、磁盘、网络、进程、 TCP
 - 3.服务监控 nginx、 php、 tomcat、 redis、 memcache、 mysql
 - 4.WEB 监控 请求时间、响应时间、加载时间、
 - 5.日志监控 ELk（收集、存储、分析、展示） 日志易
 - 6.安全监控 Firewalld、 WAF(Nginx+lua)、安全宝、牛盾云、安全狗
 - 7.网络监控 smokeping 多机房
 - 8.业务监控 活动引入多少流量、产生多少注册量、带来多大价值

第二章 单机时代如何监控
============

CPU 监控命令: w、 top、 htop、 glances

    %Cpu(s): 0.3 us, 0.3 sy, 0.0 ni, 99.3 id, 0.0 wa, 0.0 hi, 0.0 si, 0.0 st
    us 用户态: 跟用户的操作有关 35%
    sy 系统态: 跟内核的处理有关 60%
    id CPU 空闲:

内存监控命令: free

    [root@m01 ~]# free -h
                  total        used        free      shared  buff/cache   available
    Mem:           977M        105M        724M        6.6M        148M        729M
    Swap:          1.0G          0B        1.0G

磁盘监控命令: df、 iotop

    Device: tps kB_read/s kB_wrtn/s kB_read kB_wrtn
    sda 0.80 25.32 33.36 221034 291193
    设备名 每秒传输次数 每秒读大小 每秒写大小 读的总大小 写的总大小
  

  网络监控命令: ifconfig、 route、 glances、 iftop、 nethogs、 netstat

    单位换算
    Mbps 100Mbps/8
    MB 12MB
    iftop 中间的<= =>这两个左右箭头，表示的是流量的方向。
    TX：发送流量、 RX：接收流量、 TOTAL：总流量
    #查看 TCP11 中状态
    netstat -an|grep ESTABLISHED
    netstat -rn # 查看路由信息
    netstat -lntup

随着时间的推移，用户不断的增多，服务随时可能扛不住会被 oom(out of memory)，当系统内存不足的时候，会
触发 oom
1.当系统内存不足的时候就会大量使用 swap
2.当系统大量使用 swap 的时候，系统会特别卡
注意: 有时可能内存还有剩余 300Mb-500Mb，但会发现 swap 依然被使用

    [root@ZabbixServer ~]# dd if=/dev/zero of=/dev/null bs=800M
    [root@ZabbixServer ~]# tail -f /var/log/messages
    Out of memory: Kill process 2227 (dd) score 778 or sacrifice child
    Killed process 2227 (dd) total-vm:906724kB, anon-rss:798820kB, file-rss:0kB

3.那单机时代，如何使用 shell 脚本来实现服务器的监控
需求: 每隔 1 分钟监控一次内存,当你的可用内存低于 100m,发邮件报警,要求显示剩余内存

 - 1.怎么获取内存可用的值 free -m|awk '/^Mem/{print $NF}'
 - 2.获取到内存可用的值如何和设定的阈值进行比较
 - 3.比较如果大于 100m 则不处理，如果小于 100 则报警
 - 4.如何每隔 1 分钟执行一次

    [root@ZabbixServer ~]# cat free.sh
      #!/usr/bin/bash
    HostName=$(hostname)_$(hostname -i)
    Date=$(date +%F)
    while true;do
    Free=$(free -m|awk '/^Mem/{print $NF}')
    if [ $Free -le 100 ];then
    echo "$Date: $HostName Mem Is < ${Free}MB"
    fi
    sleep 5
    done

第三章 zabbix 监控快速安装
=================

1.配置zabbix仓库
------------
###在这里提供zabbix4.2yum仓库可供日常使用

  [Zabbix4.2仓库链接][1] （http://www.xoxoyun.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz）

    [root@m01 ~]# rpm -ivh http://mirrors.aliyun.com/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm


[file href="http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn"]可用4.0镜像源[/file]
2.安装 Zabbix 程序包，以及 MySQL、 Zabbix-agent
--------------------------------------

    [root@m01 ~]# yum install -y zabbix-server-mysql zabbix-web-mysql zabbix-agent mariadb-server


下载阿里云epel源base源

    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
    wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
    yum install -y http://springdale.math.ias.edu/data/puias/unsupported/7/x86_64/iksemel-1.4-6.sdl7.x86_64.rpm

    [root@m01 ~]# systemctl start mariadb.service && systemctl enable mariadb.service

3.创建 Zabbix 数据库以及用户
-------------------



    [root@m01 ~]# mysqladmin password 123456
    [root@m01 ~]# mysql -uroot -p123456
    MariaDB [(none)]> create database zabbix character set utf8 collate utf8_bin;
    MariaDB [(none)]> grant all privileges on zabbix.* to zabbix@localhost identified by 'zabbix';
    MariaDB [(none)]> flush privileges;

4.导入 Zabbix 数据至数据库中
-------------------

    [root@m01 ~]# zcat /usr/share/doc/zabbix-server-mysql-4.0.11/create.sql.gz | mysql -uzabbix -pzabbix zabbix

5.编辑/etc/zabbix/zabbix_server.conf 文件，修改数据库配置
---------------------------------------------

    [root@m01 ~]# grep "^[a-Z]" /etc/zabbix/zabbix_server.conf 
    ...............
    DBHost=localhost
    DBName=zabbix
    DBUser=zabbix
    DBPassword=zabbix
    ...............

6.启动 Zabbix 服务进程，并加入开机自启
------------------------

    [root@m01 ~]# systemctl start zabbix-server.service 
    [root@m01 ~]# systemctl enable zabbix-server.service

7.配置 Apache 的配置文件/etc/httpd/conf.d/zabbix.conf，修改时区
---------------------------------------------------

    [root@m01 ~]# grep "Shanghai" /etc/httpd/conf.d/zabbix.conf 
            php_value date.timezone Asia/Shanghai

8.重启 Apache Web 服务器
-------------------

[root@m01 ~]# systemctl start httpd
-----------------------------------

第四章 WEB安装步骤
===========

1.浏览器打开地址：http://192.168.10.66/zabbix/setup.php
-----------------------------------------------

![1.png][3]

2.检查依赖项是否存在异常
-------------
![2.png][4]

3.配置zabbix连接数据库
---------------
![请输入图片描述][5]

4.配置 ZabbixServer 服务器的信息
------------------------
![4.png][6]
5.最终确认检查
--------
![5.png][7]
6.安装成功
------
![6.png][8]

提示已成功地安装了 Zabbix 前端。配置文件/etc/zabbix/web/zabbix.conf.php 被创建。



7.登陆zabbix
----------
![7.png][9]

默认登陆 ZabbixWeb 的用户名 Admin，密码 zabbix



8.调整字符集为中文
----------
![8.png][10]

![9.png][11]

9.修复中文乱码
--------
![10.png][12]


打开图形之后会发现语言为乱码，原因是缺少字体



**解决方法:安装字体并替换现有字体**

    [root@m01 ~]# yum install wqy-microhei-fonts -y
    [root@m01 ~]# cp /usr/share/fonts/wqy-microhei/wqy-microhei.ttc /usr/share/zabbix/assets/fonts/graphfont.ttf

再次刷新发现已经变成中文了
![11.png][13]


<!--more-->

第五章 Zabbix 监控基础架构
=================

zabbix-agent(数据采集)—>zabbix-server(数据分析|报警)—> 数据库(数据存储)<—zabbix web(数据展示)
![请输入图片描述][14]


第六章 zabbix 快速监控主机
=================

1.安装zabbix-agent
----------------

    [root@web01 ~]# rpm -ivh https://mirror.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-agent-4.0.11-1.el7.x86_64.rpm

2.配置zabbix-agent
----------------

    [root@web01 ~]# grep "^[a-Z]" /etc/zabbix/zabbix_agentd.conf    
    PidFile=/var/run/zabbix/zabbix_agentd.pid
    LogFile=/var/log/zabbix/zabbix_agentd.log
    LogFileSize=0
    Server=10.0.1.61
    ServerActive=127.0.0.1
    Hostname=Zabbix server
    Include=/etc/zabbix/zabbix_agentd.d/*.conf

3.启动zabbix-agent并检查

    [root@web01 ~]# systemctl start zabbix-agent.service 
    [root@web01 ~]# systemctl enable zabbix-agent.service
    [root@web01 ~]# netstat -lntup|grep 10050
    tcp        0      0 0.0.0.0:10050           0.0.0.0:*               LISTEN      10351/zabbix_agentd 
    tcp6       0      0 :::10050                :::*                    LISTEN      10351/zabbix_agentd 

4.zabbix-web界面，添加主机
-------------------
![请输入图片描述][15]

![请输入图片描述][16]

![请输入图片描述][17]
第七章 自定义监控主机
===============

1.监控需求
------

监控TCP11种状态集

2.命令行实现
-------

    [root@web01 ~]# netstat -ant|grep -c TIME_WAIT
    55
    [root@web01 ~]# netstat -ant|grep -c LISTEN
    12

3.编写zabbix监控文件(传参形式)
--------------------

    [root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/tcp_status.conf 
    UserParameter=tcp_state[*],netstat -ant|grep -c $1
    root@web01 ~]# systemctl restart zabbix-agent.service

4.server端进行测试
-------------

    [root@m01 ~]# rpm -ivh https://mirrors.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm
    [root@m01 ~]# yum install zabbix-get.x86_64 -y 
    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k tcp_state[TIME_WAIT]
    51
    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k tcp_state[LISTEN]   
    12

5.web端添加
--------
![请输入图片描述][18]

![请输入图片描述][19]
6.克隆监控项
-------

由于TCP有多种状态，需要添加多个监控项，我们可以使用克隆快速达到创建的效果
![请输入图片描述][20]

![请输入图片描述][21]

![请输入图片描述][22]



其他的状态依次添加即可

7.创建图形
------
![请输入图片描述][23]
8.查看图形
------
![请输入图片描述][24]
9.设置触发器
-------
![请输入图片描述][25]

![请输入图片描述][26]

![请输入图片描述][27]

![请输入图片描述][28]



第八章 邮件报警
========

1.定义发件人
-------
![请输入图片描述][29]

![请输入图片描述][30]

2.定义收件人
-------
![https://upload-images.jianshu.io/upload_images/14248468-57e702ed809d0b1b.png][31]

![请输入图片描述][32]

![请输入图片描述][33]

3.自定义报警内容过
----------

定制报警内容：
[https://www.zabbix.com/documentation/4.0/zh/manual/appendix/macros/supported_by_location][34]
参考博客

[https://www.cnblogs.com/bixiaoyu/p/7302541.html][35]
发送警告

    报警邮件标题可以使用默认信息，亦可使用如下中文报警内容
    名称：Action-Email
    默认标题：故障{TRIGGER.STATUS},服务器:{HOSTNAME1}发生: {TRIGGER.NAME}故障!
    告警主机:{HOSTNAME1}
    告警时间:{EVENT.DATE} {EVENT.TIME}
    告警等级:{TRIGGER.SEVERITY}
    告警信息: {TRIGGER.NAME}
    告警项目:{TRIGGER.KEY1}
    问题详情:{ITEM.NAME}:{ITEM.VALUE}
    当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}
    事件ID:{EVENT.ID}　
    恢复警告

恢复标题：恢复{TRIGGER.STATUS}, 服务器:{HOSTNAME1}: {TRIGGER.NAME}已恢复!

    恢复信息：
    告警主机:{HOSTNAME1}
    告警时间:{EVENT.DATE} {EVENT.TIME}
    告警等级:{TRIGGER.SEVERITY}
    告警信息: {TRIGGER.NAME}
    告警项目:{TRIGGER.KEY1}
    问题详情:{ITEM.NAME}:{ITEM.VALUE}
    当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}
    事件ID:{EVENT.ID}

第九章 微信报警
========

1.查看配置文件里的脚本目录路径
----------------

    [root@m01 ~]# grep "^AlertScriptsPath" /etc/zabbix/zabbix_server.conf
    AlertScriptsPath=/usr/lib/zabbix/alertscripts

2.将weixin.py放在zabbix特定目录
------------------------

    [root@m01 /usr/lib/zabbix/alertscripts]# ll
    总用量 4
    -rwxr-xr-x 1 root root 1344 8月   7 21:58 weixin.py

3.配置发信人
-------
![请输入图片描述][36]

![请输入图片描述][37]

4.配置收信人
-------
![请输入图片描述][38]

5.登陆企业微信公众号添加账户
---------------

https://work.weixin.qq.com/wework_admin/loginpage_wx
1.登陆后在企业号上新建应用

![请输入图片描述][39]



2.上传logo，填写应用名称 ，应用介绍等

![请输入图片描述][40]

3.查看启动应用
同时会生成应用的AgentId以及Secret，这个在后面步骤会有用
![请输入图片描述][41]

4.接口调用测试
[http://work.weixin.qq.com/api/devtools/devtool.php][42]
![请输入图片描述][43]

这里的corpid为公司ID

![请输入图片描述][44]


Corpsecret就是刚才创建应用生成的Secrt，确认没问题填写进去然后下一步
如果没问题会显示200状态码

![请输入图片描述][45]

6.添加成员

![请输入图片描述][46]

7.关注公众号

![请输入图片描述][47]

8.查看自己的账号

![**加粗文字**][48]

9.修改脚本里的信息

    [root@m01 /usr/lib/zabbix/alertscripts]# cat weixin.py 
    ..............
    corpid='微信企业号corpid'
    appsecret='应用的Secret'
    agentid=应用的id
    ..............

10.发信测试

    [root@m01 /usr/lib/zabbix/alertscripts]# python  weixin.py  你的账号  '发信测试'  ‘微信测试消息’

11.微信号上查看

![][49]


12.发送到整个微信组
虽然我们实现了发送到单个用户的功能，但是如果我们的用户比较多，这样还是麻烦的，不过我们可以发送到整个组，其实脚本里已经预留好了配置，只不过默认注释了。
将脚本修改为以下内容，注释掉用户，打开组设置

    #!/usr/bin/env python
    
    import requests
    import sys
    import os
    import json
    import logging
    
    logging.basicConfig(level = logging.DEBUG, format = '%(asctime)s, %(filename)s, %(levelname)s, %(message)s',
                    datefmt = '%a, %d %b %Y %H:%M:%S',
                    filename = os.path.join('/tmp','weixin.log'),
                    filemode = 'a')
    corpid='wwd26fdfb9940e7efa'
    appsecret='Btg89FnZfMu0k7l6b4iagmAR5Z9TCgKknYbx-SMQvmg'
    agentid=1000005
    
    token_url='https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=' + corpid + '&corpsecret=' + appsecret
    req=requests.get(token_url)
    accesstoken=req.json()['access_token']
    
    msgsend_url='https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=' + accesstoken
    
    #touser=sys.argv[1]
    toparty=sys.argv[1]
    subject=sys.argv[2]
    message=sys.argv[2] + "\n\n" +sys.argv[3]
    
    params={
            #"touser": touser,
            "toparty": toparty,
            "msgtype": "text",
            "agentid": agentid,
            "text": {
                    "content": message
            },
            "safe":0
    }
    
    req=requests.post(msgsend_url, data=json.dumps(params))
    
    logging.info('sendto:' + toparty + ';;subject:' + subject + ';;message:' + message)                                                                              
    12.随机发送到指定用户玩笑脚本
    #!/bin/bash 
    num=$(echo $(($RANDOM%28+1)))
    name=$(sed -n "${num}p" name.txt)
    ok_boy=$(grep -v "${name}" name.txt)
    
    for ok in ${ok_boy}
    do
      python  weixin.py ${ok}  "$1"  "$2"
    done

第十章 自定义模版
=========

1.监控TCP11种状态
------------

编写zabbix配置文件

    [root@web01 /etc/zabbix/zabbix_agentd.d]# cat zbx_tcp.conf 
    UserParameter=ESTABLISHED,netstat -ant|grep  -c 'ESTABLISHED'
    UserParameter=SYN_SENT,netstat -ant|grep  -c 'SYN_SENT'
    UserParameter=SYN_RECV,netstat -ant|grep  -c 'SYN_RECV'
    UserParameter=FIN_WAIT1,netstat -ant|grep  -c 'FIN_WAIT1'
    UserParameter=FIN_WAIT2,netstat -ant|grep  -c 'FIN_WAIT2'
    UserParameter=TIME_WAIT,netstat -ant|grep  -c 'TIME_WAIT'
    UserParameter=CLOSE,netstat -ant|grep  -c 'CLOSE'
    UserParameter=CLOSE_WAIT,netstat -ant|grep  -c 'CLOSE_WAIT'
    UserParameter=LAST_ACK,netstat -ant|grep  -c 'LAST_ACK'
    UserParameter=LISTEN,netstat -ant|grep  -c 'LISTEN'
    UserParameter=CLOSING,netstat -ant|grep  -c 'CLOSING'

2.重启zabbix-agent
----------------

    [root@web01 ~]# systemctl restart zabbix-agent.service 

3.测试监控项
-------

使用zabbix-get命令测试

    [root@m01 ~]# yum install zabbix-get.x86_64 -y
    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k ESTABLISHED
    2
    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k LISTEN
    12

4.导入模版文件

![请输入图片描述][50]

![请输入图片描述][51]

![请输入图片描述][52]

5.主机关联模版文件
![请输入图片描述][53]

![请输入图片描述][54]



6.查看最新数据
![请输入图片描述][55]


7.查看图形
![请输入图片描述][56]

第x章 自定义模版监控nginx状态
------------------

1.开启监控页面并访问测试
-------------

    [root@web01 ~]# cat /etc/nginx/conf.d/status.conf 
    server {
       listen 80;
       server_name localhost;
       location /nginx_status {
           stub_status on;
           access_log off;
       }
    }
    
    [root@web01 ~]# curl 127.0.0.1/nginx_status/
    Active connections: 1 
    server accepts handled requests
     6 6 6 
    Reading: 0 Writing: 1 Waiting: 0 

2.准备nginx监控状态脚本
---------------

    [root@web01 /etc/zabbix/zabbix_agentd.d]# cat nginx_monitor.sh 
    #!/bin/bash
    NGINX_COMMAND=$1
    CACHEFILE="/tmp/nginx_status.txt"
    CMD="/usr/bin/curl http://127.0.0.1/nginx_status/"
    if [ ! -f $CACHEFILE  ];then
       $CMD >$CACHEFILE 2>/dev/null
    fi
    # Check and run the script
    TIMEFLM=`stat -c %Y $CACHEFILE`
    TIMENOW=`date +%s`
    
    if [ `expr $TIMENOW - $TIMEFLM` -gt 60 ]; then
        rm -f $CACHEFILE
    fi
    if [ ! -f $CACHEFILE  ];then
       $CMD >$CACHEFILE 2>/dev/null
    fi
    
    nginx_active(){
             grep 'Active' $CACHEFILE| awk '{print $NF}'
             exit 0;
    }
    nginx_reading(){
             grep 'Reading' $CACHEFILE| awk '{print $2}'
             exit 0;
    }
    nginx_writing(){
             grep 'Writing' $CACHEFILE | awk '{print $4}'
             exit 0;
    }
    nginx_waiting(){
             grep 'Waiting' $CACHEFILE| awk '{print $6}'
             exit 0;
    }
    nginx_accepts(){
             awk NR==3 $CACHEFILE| awk '{print $1}' 
             exit 0;
    }
    nginx_handled(){
             awk NR==3 $CACHEFILE| awk '{print $2}' 
             exit 0;
    }
    nginx_requests(){
             awk NR==3 $CACHEFILE| awk '{print $3}'
             exit 0;
    }
    
    case $NGINX_COMMAND in
        active)
            nginx_active;
            ;;
        reading)
            nginx_reading;
            ;;
        writing)
            nginx_writing;
            ;;
        waiting)
            nginx_waiting;
            ;;
        accepts)
            nginx_accepts;
            ;;
        handled)
            nginx_handled;
            ;;
        requests)
            nginx_requests;
            ;;
        *)
    echo 'Invalid credentials';
    exit 2;
    esac

3.编写zabbix监控配置文件
----------------

    [root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/nginx_status.conf
    UserParameter=nginx_status[*],/bin/bash /etc/zabbix/zabbix_agentd.d/nginx_monitor.sh $1
    
    [root@web01 ~]# systemctl restart zabbix-agent.service

4.使用zabbix_get取值
----------------

    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k nginx_status[accepts]
    7

5.导入模版
------

![请输入图片描述][57]

6.链接模版
------

![请输入图片描述][58]

7.查看数据
![请输入图片描述][59]

第x章 自定义模版监控php状态
================

1.开启监控页面
--------

    [root@web01 ~]# tail -1 /etc/php-fpm.d/www.conf    
    pm.status_path = /php_status
    
    [root@web01 ~]# cat /etc/nginx/conf.d/status.conf    
    server {
       listen 80;
       server_name localhost;
       location /nginx_status {
           stub_status on;
           access_log off;
       }
    
       location /php_status {
           fastcgi_pass 127.0.0.1:9000;
           fastcgi_index index.php;
           fastcgi_param SCRIPT_FILENAME html$fastcgi_script_name;
           include fastcgi_params;
       }
    }
    
    [root@web01 ~]# nginx -t
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    [root@web01 ~]# systemctl restart nginx.service php-fpm.service

2.访问测试
------

    [root@web01 ~]# curl 127.0.0.1/php_status
    pool:                 www
    process manager:      dynamic
    start time:           08/Aug/2019:22:31:27 +0800
    start since:          37
    accepted conn:        1
    listen queue:         0
    max listen queue:     0
    listen queue len:     128
    idle processes:       4
    active processes:     1
    total processes:      5
    max active processes: 1
    max children reached: 0
    slow requests:        0

3.准备访问脚本
--------

    [root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/fpm.sh 
    #!/bin/bash
    ##################################
    # Zabbix monitoring script
    #
    # php-fpm:
    #  - anything available via FPM status page
    #
    ##################################
    # Contact:
    #  vincent.viallet@gmail.com
    ##################################
    # ChangeLog:
    #  20100922     VV      initial creation
    ##################################
    
    # Zabbix requested parameter
    ZBX_REQ_DATA="$1"
    ZBX_REQ_DATA_URL="$2"
    
    # Nginx defaults
    NGINX_STATUS_DEFAULT_URL="http://localhost/fpm/status"
    WGET_BIN="/usr/bin/wget"
    
    #
    # Error handling:
    #  - need to be displayable in Zabbix (avoid NOT_SUPPORTED)
    #  - items need to be of type "float" (allow negative + float)
    #
    ERROR_NO_ACCESS_FILE="-0.91"
    ERROR_NO_ACCESS="-0.92"
    ERROR_WRONG_PARAM="-0.93"
    ERROR_DATA="-0.94" # either can not connect /   bad host / bad port
    
    # Handle host and port if non-default
    if [ ! -z "$ZBX_REQ_DATA_URL" ]; then
      URL="$ZBX_REQ_DATA_URL"
    else
      URL="$NGINX_STATUS_DEFAULT_URL"
    fi
    
    # save the nginx stats in a variable for future parsing
    NGINX_STATS=$($WGET_BIN -q $URL -O - 2>/dev/null)
    
    # error during retrieve
    if [ $? -ne 0 -o -z "$NGINX_STATS" ]; then
      echo $ERROR_DATA
      exit 1
    fi
    
    # 
    # Extract data from nginx stats
    #
    #RESULT=$(echo "$NGINX_STATS" | awk 'print $0;match($0, "^'"$ZBX_REQ_DATA"':[[:space:]]+(.*)", a) { print a[1] }')
    #RESULT=$(echo "$NGINX_STATS" | grep "$ZBX_REQ_DATA" | awk -F : '{print $2}')
    RESULT=$(echo "$NGINX_STATS" | awk -F : "{if(\$1==\"$ZBX_REQ_DATA\") print \$2}")
    if [ $? -ne 0 -o -z "$RESULT" ]; then
        echo $ERROR_WRONG_PARAM
        exit 1
    fi
    
    echo $RESULT
    
    exit 0
    
    [root@web01 ~]# bash /etc/zabbix/zabbix_agentd.d/fpm.sh "total processes" http://127.0.0.1/php_status
    5

4.准备zabbix配置文件

    [root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/fpm.conf    
    UserParameter=php-fpm[*],/etc/zabbix/zabbix_agentd.d/fpm.sh "$1" "$2"
    [root@web01 ~]# systemctl restart zabbix-agent.service
    4.使用zabbix_get取值
    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k php-fpm["total processes",http://127.0.0.1/php_status]
    5

5.导入模版
导入之后需要修改一下模版里的宏配置

![请输入图片描述][60]

第x章 WEB监控
=========

需求，监控页面状态码

![请输入图片描述][61]

![请输入图片描述][62]

![请输入图片描述][63]

第x章 故障记录
========

故障1
---

故障现象：
提示zabbix-server is not running

![请输入图片描述][64]

报错日志：

     34983:20190807:202215.171 database is down: reconnecting in 10 seconds
     34983:20190807:202225.172 [Z3001] connection to database 'zabbix' failed: [1045] Access denied for user 'zabbix'@'localhost' (using password: NO)

故障原因：
zabbix-server的配置文件里配有配置数据库密码
故障解决：
添加正确的数据库账号密码信息

    [root@m01 ~]# grep "^DB" /etc/zabbix/zabbix_server.conf     
    DBHost=localhost
    DBName=zabbix
    DBUser=zabbix
    DBPassword=zabbix

故障2
---

故障现象：微信报警失败
报错日志：

    [root@m01 ~]# tail -f /var/log/zabbix/zabbix_server.log 
    Problem name: TIME_WAIT过多
    Host: web01
    Severity: Average
    
    Original problem ID: 51
    '": Traceback (most recent call last):
      File "/usr/lib/zabbix/alertscripts/weixin.py", line 7, in <module>
        import requests
    ImportError: No module named requests

问题原因：
缺少模块 requests

问题解决：
安装缺失的依赖包

    [root@m01 ~]# yum install python-pip
    [root@m01 ~]# pip install --upgrade pip
    [root@m01 ~]# pip install requests

故障3
---

故障现象：
在server端使用zabbix_get命令测试键值命令时提示警告

    [root@m01 ~]# zabbix_get -s 10.0.1.7 -k ESTABLISHED  
    (Not all processes could be identified, non-owned process info
     will not be shown, you would have to be root to see it all.)
    2

问题原因：
zabbix_agent是以普通用户zabbix运行的，而普通用户执行netstat -antp时会有警告，网上查找发现只要不是用p参数就可以以普通用户运行
解决方案：
监控脚本里的命令修改为netstat -ant


----------
[player id='712292593' type='collect' autoplay='true'/]


  [1]: http://www.kococ.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz
  [2]: http://www.kococ.cn/usr/uploads/2020/01/194576284.png
  [3]: http://www.kococ.cn/usr/uploads/2020/01/194576284.png
  [4]: http://www.kococ.cn/usr/uploads/2020/01/2386190024.png
  [5]: http://www.kococ.cn/usr/uploads/2020/01/395866565.png
  [6]: http://www.kococ.cn/usr/uploads/2020/01/3424985468.png
  [7]: http://www.kococ.cn/usr/uploads/2020/01/3424985468.png
  [8]: http://www.kococ.cn/usr/uploads/2020/01/1365103457.png
  [9]: http://www.kcooc.cn/usr/uploads/2020/01/1375784407.png
  [10]: http://www.kococ.cn/usr/uploads/2020/01/632295469.png
  [11]: http://www.kcooc.cn/usr/uploads/2020/01/3064526244.png
  [12]: http://www.kococ.cn/usr/uploads/2020/01/172339092.png
  [13]: http://www.kococ.cn/usr/uploads/2020/01/643160504.png
  [14]: http://upload-images.jianshu.io/upload_images/14248468-189ad59c27ddffec.png
  [15]: http://upload-images.jianshu.io/upload_images/14248468-10db69c42454d500.png
  [16]: http://upload-images.jianshu.io/upload_images/14248468-ceee736beb333ce5.png
  [17]: http://upload-images.jianshu.io/upload_images/14248468-5d12b07231386679.png
  [18]: http://upload-images.jianshu.io/upload_images/14248468-0b20f0a22391f3d1.png
  [19]: http://upload-images.jianshu.io/upload_images/14248468-19c41a9832857c2b.png
  [20]: http://upload-images.jianshu.io/upload_images/14248468-743524f196e73c5e.png
  [21]: http://upload-images.jianshu.io/upload_images/14248468-35342ea8d4cb7a44.png
  [22]: http://upload-images.jianshu.io/upload_images/14248468-2e2be3806f3c1c42.png
  [23]: http://upload-images.jianshu.io/upload_images/14248468-6203bb8201c63361.png
  [24]: http://upload-images.jianshu.io/upload_images/14248468-a6cf4a1d2bdb3449.png
  [25]: http://upload-images.jianshu.io/upload_images/14248468-98cb06eb3b07e1d5.png
  [26]: http://upload-images.jianshu.io/upload_images/14248468-37e7cc88098879d9.png
  [27]: http://upload-images.jianshu.io/upload_images/14248468-d684d487eb68da11.png
  [28]: http://upload-images.jianshu.io/upload_images/14248468-2e3bc7010546c2a1.png
  [29]: http://upload-images.jianshu.io/upload_images/14248468-816d27e93e19aa6f.png
  [30]: http://upload-images.jianshu.io/upload_images/14248468-7e3279840e20452e.png
  [31]: http://upload-images.jianshu.io/upload_images/14248468-57e702ed809d0b1b.png
  [32]: http://upload-images.jianshu.io/upload_images/14248468-ced9fc46c956b1e3.png
  [33]: http://upload-images.jianshu.io/upload_images/14248468-90efc1aa92eb84da.png
  [34]: http://www.zabbix.com/documentation/4.0/zh/manual/appendix/macros/supported_by_location
  [35]: http://www.cnblogs.com/bixiaoyu/p/7302541.html
  [36]: http://upload-images.jianshu.io/upload_images/14248468-75d0cf249f19bafe.png
  [37]: http://upload-images.jianshu.io/upload_images/14248468-7f1aaedd340ef02f.png
  [38]: http://upload-images.jianshu.io/upload_images/14248468-9709cce24dcb910a.png
  [39]: http://upload-images.jianshu.io/upload_images/14248468-1ae7607fe5113d11.png
  [40]: http://upload-images.jianshu.io/upload_images/14248468-ee6bc21e8c1e9d39.png
  [41]: http://upload-images.jianshu.io/upload_images/14248468-2cccdc342330c5d0.png
  [42]: http://work.weixin.qq.com/api/devtools/devtool.php
  [43]: http://upload-images.jianshu.io/upload_images/14248468-f24ffa3b5922d0c0.png
  [44]: http://upload-images.jianshu.io/upload_images/14248468-03544eed481caa53.png
  [45]: http://upload-images.jianshu.io/upload_images/14248468-c6aba38bf4da189c.png
  [46]: http://upload-images.jianshu.io/upload_images/14248468-27ba2ae8bf3773fb.png
  [47]: http://upload-images.jianshu.io/upload_images/14248468-b0341893f157d0fb.png
  [48]: http://upload-images.jianshu.io/upload_images/14248468-8247e4f85f7ddc9a.png
  [49]: http://upload-images.jianshu.io/upload_images/14248468-9f1dc0fa9d6b8abb.png
  [50]: http://upload-images.jianshu.io/upload_images/14248468-bf27be32d233f194.png
  [51]: http://upload-images.jianshu.io/upload_images/14248468-784f18988c7debab.png
  [52]: http://upload-images.jianshu.io/upload_images/14248468-2a388d1ec74725e9.png
  [53]: http://upload-images.jianshu.io/upload_images/14248468-9070da45843e2644.png
  [54]: http://upload-images.jianshu.io/upload_images/14248468-0ab34947877205eb.png
  [55]: http://upload-images.jianshu.io/upload_images/14248468-e17fda198f1ec1ac.png
  [56]: http://upload-images.jianshu.io/upload_images/14248468-9c011ab3f383de99.png
  [57]: http://upload-images.jianshu.io/upload_images/14248468-c3bbd17a2587f6b4.png
  [58]: http://upload-images.jianshu.io/upload_images/14248468-7f460c46106c792c.png
  [59]: http://upload-images.jianshu.io/upload_images/14248468-3edb2a100a2a3987.png
  [60]: http://upload-images.jianshu.io/upload_images/14248468-e9002db6117b2a36.png
  [61]: http://upload-images.jianshu.io/upload_images/14248468-5b73f2eb0bbc026e.png
  [62]: http://upload-images.jianshu.io/upload_images/14248468-29b41892ec2a2652.png
  [63]: http://upload-images.jianshu.io/upload_images/14248468-4d04849ba09f7aa2.png
  [64]: http://upload-images.jianshu.io/upload_images/14248468-5ec40e3f9f9c0b22.png