---
title: Mysql+Keepalived 双主热备高可用图文配置详解
categories: 数据库
tags: [MySQL]
date: 2018-11-05 11:07:00
---
**环境描述：**
---------

    Centos7 版本
    Master1：192.168.10.1        安装mysql和keepalived
    Master2: 192.168.10.2      安装mysql和keepalived
    VIP：192.168.10.188
要实现主主同步，可以先实现主从同步，即master1->master2的主从同步，然后master2->master1的主从同步.
这样，双方就完成了主主同步。

**注意下面几点：**

> 1）要保证同步服务期间之间的网络联通。即能相互ping通，能使用对方授权信息连接到对方数据库（防火墙开放3306端口）。
> 
> 2）关闭selinux。
> 
> 3）同步前，双方数据库中需要同步的数据要保持一致。这样，同步环境实现后，再次更新的数据就会如期同步了。

配置Mysql+Keepalived故障转移的高可用环境
----------------------------

> 1）	安装keepalived并将其配置成系统服务。master1和master2两台机器上同样进行如下操作：

    [root@master1 ~]# yum install -y openssl-devel popt-devel
    [root@master1 ~]# cd /usr/local/src/
    [root@master1 src]# wget http://www.keepalived.org/software/keepalived-1.3.5.tar.gz
    [root@master1 src]# tar -zvxf keepalived-1.3.5.tar.gz
    [root@master1 src]# cd keepalived-1.3.5
    [root@master1 keepalived-1.3.5]# ./configure --prefix=/usr/local/keepalived
    [root@master1 keepalived-1.3.5]# make && make install
    [root@master1 keepalived-1.3.5]# cp /usr/local/src/keepalived-1.3.5/keepalived/etc/init.d/keepalived /etc/rc.d/init.d/
    [root@master1 keepalived-1.3.5]# cp /usr/local/keepalived/etc/sysconfig/keepalived /etc/sysconfig/
    [root@master1 keepalived-1.3.5]# mkdir /etc/keepalived/
    [root@master1 keepalived-1.3.5]# cp /usr/local/keepalived/etc/keepalived/keepalived.conf /etc/keepalived/
    [root@master1 keepalived-1.3.5]# cp /usr/local/keepalived/sbin/keepalived /usr/sbin/
    [root@master1 keepalived-1.3.5]# echo "/etc/init.d/keepalived start" >> /etc/rc.local

**2）	master1机器上的keepalived.conf配置。（下面配置中没有使用lvs的负载均衡功能，所以不需要配置虚拟服务器virtual server）(在这里可以使用yum安装keepalived。配置在有关Keepalived博文中详细介绍，这里略)**

    [root@master1 ~]# cp /etc/keepalived/keepalived.conf /etc/keepalived/keepalived.conf.bak
    [root@master1 ~]# vim /etc/keepalived/keepalived.conf 

      
**＃清空默认内容，直接采用下面配置：**

    ! Configuration File for keepalived
           
    global_defs {
    router_id MASTER-HA
    }
           
    vrrp_script chk_mysql_port {
        script "/etc/keepalived/chk_mysql.sh"
        interval 2            
        weight -5                 
        fall 2                 
        rise 1               
    }
           
    vrrp_instance VI_1 {
        state MASTER
        interface ens33    
        mcast_src_ip 192.168.10.1
        virtual_router_id 51    
        priority 101          
        advert_int 1         
        authentication {   
            auth_type PASS 
            auth_pass 1111     
        }
        virtual_ipaddress {    
            192.168.10.188
        }
          
    track_script {               
       chk_mysql_port             
    }
    virtual_server 192.168.10.188 3306 {
        delay_loop 6               
        lb_algo wrr             
        lb_kind DR                 
        #nat_mask 255.255.255.0
        persistence_timeout 50     
        protocol TCP              
        
        ## Real Server设置，3306就是连接端口
        real_server 192.168.10.1 3306 {
            weight 3  ##权重
            TCP_CHECK {
                connect_timeout 3
                nb_get_retry 3
                delay_before_retry 3
                connect_port 3306
            }
        }
        real_server 192.168.10.2 3306 {
            weight 3
            TCP_CHECK {
                connect_timeout 3
                nb_get_retry 3
                delay_before_retry 3
                connect_port 3306
            }
        }
    }
    }
**master2机器上的keepalived配置。master2机器上的keepalived.conf文件只修改priority为90、nopreempt不设置、real_server设置本地IP。**

    ! Configuration File for keepalived
           
    global_defs {
    router_id BACKUP-HA
    }
           
    vrrp_script chk_mysql_port {
        script "/etc/keepalived/chk_mysql.sh"
        interval 2            
        weight -5                 
        fall 2                 
        rise 1               
    }
           
    vrrp_instance VI_1 {
        state BACKUP
        interface ens33    
        mcast_src_ip 192.168.10.2
        virtual_router_id 51    
        priority 99          
        advert_int 1         
        authentication {   
            auth_type PASS 
            auth_pass 1111     
        }
        virtual_ipaddress {    
            192.168.10.188
        }
          
    track_script {               
       chk_mysql_port             
    }
    virtual_server 192.168.10.188 3306 {
        delay_loop 6               #服务轮询的时间间隔
        lb_algo wrr                #加权轮询调度，LVS调度算法 rr|wrr|lc|wlc|lblc|sh|sh
        lb_kind DR                 #LVS集群模式 NAT|DR|TUN，其中DR模式要求负载均衡器网卡必须有一块与物理网卡在同一个网段
        #nat_mask 255.255.255.0
        persistence_timeout 50     #会话保持时间
        protocol TCP              #健康检查协议
        
        ## Real Server设置，3306就是连接端口
        real_server 192.168.10.1 3306 {
            weight 3  ##权重
            TCP_CHECK {
                connect_timeout 3
                nb_get_retry 3
                delay_before_retry 3
                connect_port 3306
            }
        }
        real_server 192.168.10.2 3306 {
            weight 3
            TCP_CHECK {
                connect_timeout 3
                nb_get_retry 3
                delay_before_retry 3
                connect_port 3306
            }
        }
    }
    }

**编写切换脚本。KeepAlived做心跳检测，如果Master的MySQL服务挂了(3306端口挂了),那么它就会选择自杀。Slave的KeepAlived通过心跳检测发现这个情况，就会将VIP的请求接管。**

    [root@master1 ~]# vim /etc/keepalived/chk_mysql.sh
    #!/bin/bash
    counter=$(netstat -na|grep "LISTEN"|grep "3306"|wc -l)
    if [ "${counter}" -eq 0 ]; then
        /etc/init.d/keepalived stop
    fi 
    [root@master1 ~]# chmod 755 /etc/keepalived/chk_mysql.sh
**启动keepalived服务**

    [root@master1 ~]# /etc/init.d/keepalived start

> 正在启动 keepalived：                                      [确定]

**在启动的时候有可能启动失败   打开 vim /lib/systemd/system/keepalived.service  在第7行**

    PIDFile=/usr/local/program/keepalived/var/run/keepalived.pid      ##发现这个目录不存在，无法写入keepalived.pid  

> 修改成 PIDFile=/var/run/keepalived.pid  执行 systemctl daemon-reload   
> 重新载入 systemd，扫描新的或有变动的单元   在运行就Ok了    /etc/init.d/keepalived start

**ip addr 可以看到 vip在master上**

![请输入图片描述][1]


测试
--

    mysql -h192.168.10.188 -uroot1 -proot1
    show databases;

在147服务上看 ip addr 也可以看到vip漂移到了192.168.10.2服务器上
![请输入图片描述][2]


<!--more-->

**上面那个脚本简单且粗暴，即脚本一旦监测到Master的mysql服务关闭，就立刻把keepalived服务关闭，不能实现vip转移，也就是当Master数据库恢复的是时候不能再切回来！**

**下面这个脚本可以实现 当监测到Master的mysql服务关闭后，就会将vip切换到Backup上 当Master的mysql服务恢复后，就会再次将VIP资源切回来**

    #!/bin/bash
    MYSQL=/usr/local/mysql/bin/mysql
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=123456
    CHECK_TIME=3
      
    #mysql  is working MYSQL_OK is 1 , mysql down MYSQL_OK is 0
      
    MYSQL_OK=1
      
    function check_mysql_helth (){
        $MYSQL -h $MYSQL_HOST -u $MYSQL_USER -p${MYSQL_PASSWORD} -e "show status;" >/dev/null 2>&1
        if [ $? = 0 ] ;then
        MYSQL_OK=1
        else
        MYSQL_OK=0
        fi
        return $MYSQL_OK
    }
    while [ $CHECK_TIME -ne 0 ]
    do
        let "CHECK_TIME -= 1"
        check_mysql_helth
    if [ $MYSQL_OK = 1 ] ; then
        CHECK_TIME=0
        exit 0
    fi
    if [ $MYSQL_OK -eq 0 ] &&  [ $CHECK_TIME -eq 0 ]
    then
        pkill keepalived
        exit 1
    fi
    sleep 1
    done


----------

谢谢查阅，转载请注明出处
------------

  [1]: https://www.kococ.cn/usr/uploads/2020/01/2374467709.png
  [2]: https://www.kococ.cn/usr/uploads/2020/01/530623913.png
