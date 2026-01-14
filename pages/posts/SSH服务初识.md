---
title: SSH服务初识
categories: Linux技术
tags: [SSH]
date: 2018-09-08 16:38:00
---
第一章 远程连接服务概念介绍
==============

SSH: 系统默认配置 22 默认可以使用root用户进行登录 数据信息进行加密
TELNET：网络设备默认开启 23 默认只能使用普通用户进行登录 数据信息显示明文

第二章 远程连接服务连接原理
==============

openssh 远程连接数据包进行加密处理
openssl 网站访问请求信息和响应信息进行加密（HTTPS）
连接示意图：

![SSH密钥认证过程][1]


原理总结：

    01. 客户端 - 服务端   请求建立ssh远程连接 
    02. 服务端 - 客户端   请求确认公钥信息
    03. 客户端 - 服务端   确认接收公钥信息，保存到~/.ssh/authorized_keys文件中  
    04. 服务端 - 客户端   询问用户密码信息
    05. 客户端 - 服务端   用户密码信息
    06. 服务端 - 客户端   确认密码信息正确 远程连接建立
    01 之后：不用反复确认公钥信息
    06 之后：所有传输的数据信息会进行加密处理

总结：

    作用01：利用公钥和私钥对数据信息进行加密处理
    作用02：对用户身份信息进行认证

**远程连接通讯建立方式**

基于口令方式（基于密码方式） 文档/脑子 国家服务器 远程 -- 密码（钱）
基于密钥方式

第三章 基于密钥方式实现远程连接步骤：
===================

1.管理端服务器
--------

第一个历程：创建密钥对信息

    [root@m01 ~]# ssh-keygen -t dsa
    Generating public/private dsa key pair.
    Enter file in which to save the key (/root/.ssh/id_dsa): 
    Created directory '/root/.ssh'.
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /root/.ssh/id_dsa.
    Your public key has been saved in /root/.ssh/id_dsa.pub.
    The key fingerprint is:
    40:72:ff:19:de:23:70:df:cf:f2:a2:6f:0d:ce:42:dc root@m01
    The key's randomart image is:
    +--[ DSA 1024]----+
    |    . o          |
    |     + .         |
    |      . o o      |
    |       . = = .   |
    |        S =.+..  |
    |           .o.Eo |
    |           . o.oo|
    |            . =o.|
    |            .=...|
    +-----------------+
    [root@m01 ~]# ll .ssh/
    总用量 8
    -rw------- 1 root root 668 7月  19 15:13 id_dsa
    -rw-r--r-- 1 root root 598 7月  19 15:13 id_dsa.pub

第二个历程：分发公钥

    [root@m01 ~]# ssh-copy-id -i ~/.ssh/id_dsa.pub root@172.16.1.31
    The authenticity of host '172.16.1.31 (172.16.1.31)' can't be established.
    ECDSA key fingerprint is 7d:76:4f:bc:02:b3:3c:55:ff:22:9c:63:1a:88:17:3d.
    Are you sure you want to continue connecting (yes/no)? yes
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
    /usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
    root@172.16.1.31's password: 
    
    Number of key(s) added: 1
    
    Now try logging into the machine, with:   "ssh 'root@172.16.1.31'"
    and check to make sure that only the key(s) you wanted were added.

第三个历程：检查确认

    [root@m01 ~]# ssh 172.16.1.31
    Last login: Fri Jul 19 08:12:12 2019 from 10.0.1.1
    [root@nfs01 ~]# hostname
    nfs01
    [root@nfs01 ~]# 登出
    Connection to 172.16.1.31 closed.
    [root@m01 ~]# ssh 172.16.1.31 hostname
    nfs01
    [root@m01 ~]# 

2.被管理端服务器
---------

第一个历程：检查确认

    [root@nfs01 ~]# cd /root/.ssh/
    [root@nfs01 ~/.ssh]# ll
    总用量 8
    -rw------- 1 root root 988 7月  19 15:15 authorized_keys
    -rw-r--r-- 1 root root 170 6月  26 20:55 known_hosts
    [root@nfs01 ~/.ssh]# cat authorized_keys 
    ssh-dss AAAAB3NzaC1kc3MAAACBAPFwzIpjQqTXGmTPgABweyY6sxewiNdPiPwBaSz5hAauYnskJSXKbFl5usAxgXbuLcBzGp1RvTH+tVtoUpokAbGbhVX9bhT/5LxjKA31kfp0hicZHtNUDCMOTtgwJmIHo/25BsMURx4i4Mfu8V7lRg5a3WXDXI2JXBLiWtgl/0yHAAAAFQDLicZIPhcZkfLbg26vSPm9cMK14wAAAIAVHBMsnB6TasY3yQzdqQpnVH5dOtD6bIjy48U6CEge7m9jxXb9HUMExOOqRNj/x7HiCeiiML7ebZmLYPZfjam5NWiJ1A5l9FL6QKFvnLSrUOk3b0seBLyWEhM8yWkK5yYaqV9e7jCTJoR/UZjKbZ1lRtLbczytn1e6c8wFVHguHQAAAIBqHcq7NbGPDbkeQEQmSahNubgZ/nXTMR7r2CHsNP+71qxDfkYdDo2dVoWSmhN5Lv+mHLSBFMuJPIvZg/zVc7So6vRgJWiIVedgnJw/Ima+q2f7VJudA+ZNT5vHmlaS77bJ/9tYBdlUO/Ae56gmuNzYYnTdY1UIf1EzEtJnKtUr4Q== root@m01

第四章 免交户分发密钥
===========

被管理主机有多台，如何进行批量分发公钥???

1.解决免交互问题：
----------

第一次连接有yes/no

    ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no

需要有密码信息确认

    yum install -y sshpass
    sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no 

2.ssh-copy-id分发公钥原理：
--------------------

   

     01. 进行ssh远程连接
        02. scp将公钥进行传输
        03. 被管理端将公钥保存到用户家目录中的.ssh目录中
        04. 修改公钥文件名称和权限  authorized_keys  600

3.分发脚本：
-------

    [root@m01 ~]# cat /server/scripts/fenfa.sh 
    #!/bin/bash
    for ip in {31,41}
    do
      sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no &>/dev/null
      if [ $? -eq 0 ]
      then
         echo "===============pub_key fenfa ok with 172.16.1.$ip========================="
         ssh 172.16.1.${ip} hostname
         echo ""
      else
         echo "===============pub_key fenfa failed with 172.16.1.$ip========================="
         echo ""
      fi 
    done

4.if判断比较信息：
-----------

 

       =    -eq   equal
        >    -gt   greater than
        <    -lt   less than
        >=   -ge   greater equal
        <=   -le   less equal
        <>   -ne   no equal

5.分发公钥问题说明：
-----------

    01. 密码信息不正确
    02. 免密码分发公钥  yum install -y sshpass 
    03. 分发公钥信息，需要分发你有的公钥   是否有公钥 m01--/root/.ssh/id_dsa.pub
    

6.排错方法：
-------

01. 测试脚本  ssh 172.16.1.7 hostname
02. 脚本中命令手动执行

    sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no

7.远程服务端口号发生变化了，如何修改脚本命令
centos7：掌握

    sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.7 -o StrictHostKeyChecking=no -p 52113

8.ssh-copy id命令解释
 

       ssh $1 "exec sh -c 'cd; umask 077; test -d .ssh || mkdir .ssh ; cat >> .ssh/authorized_keys && (test -x /sbin/restorecon && /sbin/restorecon .ssh .ssh/authorized_keys >/dev/null 2>&1 || true)'"

    01. 远程连接到指定主机
    02. 切换到家目录，临时修改umask数值
    03. 判断是否存在.ssh目录，不存在创建.ssh 
    04. 生成.ssh/authorized_keys,并且把公钥信息保存在此文件中

9.总结：掌握批量分发公钥脚本编写能力

    01. 解决免交互问题： yes/no  密码问题
    02. 远程被管理主机端口变化：解决端口问题

第五章 SSH服务端配置文件说明：
=================

    vim /etc/ssh/sshd_config
    #Port 22                 --- 指定服务端口号信息
    #ListenAddress 0.0.0.0   --- 指定相应网卡可以接收远程访问请求  web
    默认：主机上所有网卡都可以接收远程连接请求
    监听地址信息，一定是本地网卡上有的地址信息 ******
    #PermitEmptyPasswords no --- 是否允许空密码登录
    #PermitRootLogin yes     --- 不允许root用户登录
    #UseDNS yes              --- 是否进行DNS反向解析 no  172.16.1.31 --> 172.16.1.61 
    GSSAPIAuthentication yes --- 是否开启GSSAPI  no      

第六章 SSH防范远程入侵方案 亡羊补牢 -- 未雨绸缪
============================

参考博客[https://blog.51cto.com/phenixikki/1546669][2]
   

     1. 用密钥登录，不用密码登陆
        2. 防火墙封闭SSH,指定源IP限制(局域网、信任公网)  ？？？
        3. 尽量不给服务器外网IP
        4. 负载均衡主机，只监听内网地址的远程访问
        5. 最小化（软件安装-授权）  web nfs rsync mysql zabbix ... 端口（门）
           yum install -y nmap  --- 扫描网站端口信息
           nmap -p 1-65535 www.baidu.com   80 443
        6. 给系统的重要文件或命令做一个指纹   md5sum -c /etc/passwd  abcd  --- zabbix
        7. chattr +i 锁住文件  

第七章 课程知识回顾说明：
=============

    1）远程连接的服务程序 （ssh-22（加密） telnet-23（明文））
    2）远程连接的原理过程 了解
    3）远程连接的方式
       基于密码方式 
       基于密钥方式  重点
    4）如何实现密钥远程登录
       如何实现多台主机基于密钥远程登录 -- 批量分发公钥的脚本
    5）远程服务配置文件参数
       listen address  监听参数  ******
    6）远程入侵防范防范


脚本分享：

    #!/bin/bash
    if [ -f /root/.ssh/id_dsa ];then
        echo "密钥已存在,将发送现有文件"
    else
        ssh-keygen -t dsa -P "" -f /root/.ssh/id_dsa && echo "密钥生成成功"
    fi
    
    for ip in {31,41}
    do
        sshpass -p123456 ssh-copy-id -p 22 172.16.1.${ip} -o StrictHostKeyChecking=no >> /dev/null 2>&1
        if [ $?==0 ];then
            echo "172.16.1.${ip} key sent successful"
            ssh 172.16.1.${ip} "cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak"
            ssh 172.16.1.${ip} "sed -ri 's@#Port 22@Port 9999@g' /etc/ssh/sshd_config && echo 'port ok'"
            ssh 172.16.1.${ip} "sed -ri 's@#ListenAddress 0.0.0.0@ListenAddress 172.16.1.${ip}@g' /etc/ssh/sshd_config && echo 'listen ok'"
        ssh 172.16.1.${ip} "sed -ri 's#^PasswordAuthentication yes#PasswordAuthentication no#g' /etc/ssh/sshd_config && echo 'pass ok'"
        ssh 172.16.1.${ip} "systemctl restart sshd"
        sleep 3
        echo "------------------"
        echo "172.16.1.${ip} hostname is :$(ssh -p 9999 172.16.1.${ip} hostname)"
        echo "------------------"
        else
        echo "172.16.1.${ip} key sent faild"
    fi
    done

脚本分享2:

    #!/bin/bash
    
    if [ -f /root/.ssh/id_rsa ];then
       echo "----------密钥对已经存在---------------"
    else
       echo "----------正在生成密钥对---------------"
       ssh-keygen -f /root/.ssh/id_rsa -N '' > /dev/null 2>&1
    fi
    
    for i in {7,31,41}
    do
        echo "正在操作：172.16.1.${i}"
        echo "----------正在分发--------"
        sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.${i} -o StrictHostKeyChecking=no > /tmp/ssh.log 2>&1
        echo "----------正在备份SSH配置-----"
        ssh 172.16.1.${i} "\cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak"
        echo "----------正在优化SSH配置----"
        ssh 172.16.1.${i} "sed -i 's@#Port 22@Port 9999@g' /etc/ssh/sshd_config"
        ssh 172.16.1.${i} "sed -i 's@#ListenAddress 0.0.0.0@ListenAddress 172.16.1.${i}@g' /etc/ssh/sshd_config"
        ssh 172.16.1.${i} "sed -i 's@^PasswordAuthentication yes@PasswordAuthentication no@g' /etc/ssh/sshd_config"
        ssh 172.16.1.${i} "systemctl restart sshd"
        sleep 2 
        echo "----------测试优化后的连接"
        ssh 172.16.1.${i} -p 9999 hostname
    done


<!--more-->

[player id='712292593' type='collect' autoplay='true'/]

  [1]: https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-af025c4191bb5a68.png

  [2]: http://blog.51cto.com/phenixikki/1546669
