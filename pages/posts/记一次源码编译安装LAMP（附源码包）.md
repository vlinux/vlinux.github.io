---
title: 记一次源码编译安装LAMP（附源码包）
categories: Linux技术
tags: [LAMP]
date: 2018-06-04 17:25:00
---
源码编译安装LAMP
==========

**为什么要源码编译**
  一般来说，我们软件的安装方式有yum（rpm），和源码编译两种方式，那么为什么我们需要源码编译安装一部分软件？选择源码编译安装软件有以下几个原因：
         1：满足不同的运行平台，我们Linux发型版本众多，但是每个版本采用的软件或者内核版本都不一样，而我们的二进制包所依赖的环境不一定能够正常运行，所以大部分软件直接提供源码！
         2：方便定制，满足不同的需求，很多时候我们所需要的软件都是可以定制的，我需要什么就安装什么，大多数二进制代码都是一键装全，所以自由度并不高！
         3：方便运维、开发人员维护，我们的源码是可以打包二进制的，但是对于这个软件的打包都会有一份代价不小的额外工作，包括维护，所以如果是源码的话，软件产商会直接维护，但是如果是二进制的话，一般都是Linux发行商提供！
**什么是LAMP**
   

    LAMP=Linux Apache Mysql/MariaDB PHP/Perl/Python 这些软件都是开源免费的软件，几个程序各自是独立的，经常为了达到我们需要的效果而协同工作，组成了我们常见的LAMP架构平台!LAMP是世界上最流行的组合，当然同时也有Nginx，也就是LNMP: LAMP 相对于 NGINX 来说较为安全，但是Nginx处理高并发比Apache要强，NGINX 相对于 LAMP 来说安全较为差一点，同样的配制环境负载远远高于 LAMP 向国内的一些大公司，淘宝、新浪都在用这一些 NGINX，向那么大的公司网站需要用到服务器群用LAMP搭建环境成本远远大于NGINX。打个比方本来1000000W访问量需要 10台LAMP环境服务器才能完成，但是使用NGINX也许只需要5、6台这样一来对于这样的公司来说就大大的节约了成本。
    从网站的流量上来说，70%以上的访问流量是LAMP来提供的，LAMP是最强大的网站解决方案，在以前这句话没有错，但是在现在，这句话有待证实！！！因为在以后的过程中，会发现我们会使用的架构是Nginx和Apache结合使用：使用Nginx可以做集群等相关配置，可以和apache一起使用，有的会用apache去跑php，然后用nginx做反向代理，比如apache运行在8080端口，nginx在80端口，访问php文件时，反向代理到apache，静态页通过nginx处理。nginx支持高并发，apache对php的运行比较稳定。











    常见的网页类型：htm,html,shtml,stm.php,asp,aspx,shtm,jsp等等Apache本事只处理静态页面，处理动态页面需要使用libphp5.so这个模块去工作，编译php也其实是将一个至关重要的模块打入到apache内部，然后apache收到php请求，将请求交给这个模块来处理！
Apache工作原理：
Apache本身只处理html静态语言页面，当客户端需要访问php页面的时候，Apache会调用libphp5.so这个模块去工作，这个模块会把php页面转换成html静态页面，让Apache处理，Apache处理过，会返回给客户端

`LAMP相关网站`

Apache=http://httpd.apache.org/                                                      httpd主程序包
MySQL=http://dev.mysql.com/downloads/mysql/                          mysql主程序包
PHP=http://php.net/downloads.php                                                 php主程序包
apr=http://apr.apache.org/                                               apr是httpd的依赖包
apr-util=http://apr.apache.org/                               apr-util是httpd的第二个依赖包
apr和apr-util这个两个软件是对后端服务软件进行优化的，
apr-util只是在apr的基础上提供了更多的数据结构和操作系统封装接口而已。
 pcre 是httpd的第三个依赖包 http://pcre.org/    

PCRE(Perl Compatible Regular Expressions中文含义：perl语言兼容正则表达式)是一个用C语言编写的正则表达式函数库，PCRE被广泛使用在许多开源软件之中，最著名的莫过于Apache HTTP服务器和PHP脚本语言、R脚本语言，此外，正如从其名字所能看到的，PCRE也是perl语言的缺省正则库。

对应我们源码编译的版本
         编译安装LAMP所需要及其所使用的源码版本：
                   httpd version：httpd-2.4.16
                   apr version：apr-1.5.2
                   pcre version：pcre-8.37
                   apr-util version：apr-util-1.5.4
                   mysql version：mysql-5.6.26
                   php version：php-5.6.13
`安装之前需要注意：`

**LAMP源码编译的基础环境**

    [root@Andu101 ~]# lsb_release -a
    ……
    Description:        Red Hat Enterprise Linux Server release 6.5(Santiago)
    ……
            [root@Andu101 ~]# uname -a
    Linux Andu101.cn 2.6.32-431.el6.x86_64 …

**确保系统的干净的系统，不要和现在源码编译安装的软件冲突**

`不要在一个系统上同时存在 RPM-Apache+源码-Apache`

**建议在编译之前，把开发包组安装：**

    "Development Tools"和 "Development Libraries"
    yum groupinstall "Development Tools" "Development Libraries" -y
     [root@Andu101 ~]# yum install gcc gcc-c++ openssl-devel -y   



    [root@Andu101 ~]# ls
    apr-1.5.2.tar.gz            httpd-2.4.16.tar.bz2    pcre-8.37.tar.bz2
    apr-util-1.5.4.tar.bz2      mysql-5.6.26.tar.gz     php-5.6.13.tar.bz2

apr和apr-util依赖
   apr和apr-util独立编译
  

     [root@Andu101 ~]# tar xf apr-1.5.2.tar.gz -C /usr/local/src/ &&tar xf apr-util-1.5.4.tar.bz2 -C /usr/local/src/
     [root@Andu101 ~]# cd /usr/local/src/apr-1.5.2/ && ./configure --prefix=/usr/local/apr && make -j 2 && make install
     [root@Andu101 apr-1.5.2]# cd ../apr-util-1.5.4/ && ./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr && make -j 2 && make install
     [root@Andu101 apr-util-1.5.4]# cd && tar xf pcre-8.37.tar.bz2 -C /usr/local/src/
    
     [root@Andu101 ~]# cd /usr/local/src/pcre-8.37/ && ./configure --prefix=/usr/local/pcre && make -j 2 && make install && cd


**Apache源码编译**
--------------

    依赖环境安装完成，开始编译安装apache
    [root@Andu101 ~]# tar xvf httpd-2.4.16.tar.bz2 -C /usr/local/src/ && cd /usr/local/src/httpd-2.4.16
    [root@Andu101 httpd-2.4.16]# ./configure --prefix=/usr/local/apache2.4 --enable-so --enable-rewrite --enable-ssl --with-pcre=/usr/local/pcre --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --enable-modules=most --enable-mpms-shared=all --with-mpm=event && make -j 2 && make install 
    --prefix=/usr/local/apache2.4                       #安装路径
    --enable-so                                         #支持动态加载模块
    --enable-rewrite                                    #支持网站地址重写
    --enable-ssl                                        #支持SSL加密
    --with-pcre=/usr/local/pcre                         #pcre路径
    --with-apr=/usr/local/apr                           #apr路径
    --with-apr-util=/usr/local/apr-util                 #apr-util路径

一共有三种稳定的MPM（Multi-Processing Module，多进程处理模块）模式。它们分别是prefork，worker和event，它们同时也代表这Apache的演变和发展。
**配置Apache的启动脚本**
   

    [root@Andu101 ~]# cp /usr/local/apache2.4/bin/apachectl  /etc/init.d/apache2.4

**若是你按照我的实验环境安装了桌面，那么需要停掉httpd服务，若不是，则不需要**
    [root@Andu101 ~]# /etc/init.d/httpd stop
    [root@Andu101 ~]# chkconfig httpd off
**编辑启动脚本文件**
   

     [root@Andu101 ~]# vim /etc/init.d/apache2.4
    #!/bin/sh
    # chkconfig: 2345 64 36           
**#这个是启动级别的服务，2345是指那些级别启动，64是开启顺序，应该在network服务的后面，36是关闭顺序，应该在network的前面，这里并不是注释
 #默认network的是：2345 10 90**
 # description: Apache2.4.16 start script            #描述字段，有了这两个字段，就可以用chkconfig命令控制
    [root@Andu101 ~]# service apache2.4 start
    [root@Andu101 ~]# chkconfig apache2.4 on

 **Apache安装完成需要注意的地方**

         [root@Andu101 ~]# ps -aux | grep apache     //源码编译apache，运行用户为deamon
    Warning: bad syntax, perhaps a bogus '-'? See /usr/share/doc/procps-3.2.8/FAQ
    root        43191  0.0  0.0  70632  2184?  Ss   16:54   0:00/usr/local/apache2.4/bin/httpd -k start
    daemon      43192  0.0  0.1663500  4820?  Sl   16:54   0:00/usr/local/apache2.4/bin/httpd -k start
    daemon      43193  0.0  0.1414892  4184?  Sl   16:54   0:00/usr/local/apache2.4/bin/httpd -k start
    daemon      43194  0.0  0.1414892  4188?  Sl   16:54   0:00/usr/local/apache2.4/bin/httpd -k start
    root        43344  0.0  0.0103244  864 pts/0 S+ 17:12   0:00 grep apache
             [root@Andu101 ~]# id daemon                                   //编译安装运行用户身份是daemon
    uid=2(daemon) gid=2(daemon) groups=2(daemon),1(bin),4(adm),7(lp)
    [root@Andu101 ~]# useradd -M -s /sbin/nologin apache                           //创建一个用户用来运行apache
            [root@Andu101 ~]# vim /usr/local/apache2.4/conf/httpd.conf           //修改配置文件改变apache运行身份
    User apache                     #运行用户
    Group apache                    #运行组，创建apache的时候已经即时创建了apache这个组
             [root@Andu101 ~]# id apache
    uid=500(apache) gid=500(apache) groups=500(apache)

**更改目录权限**
     [root@Andu101 ~]# chown -R apache:apache /usr/local/apache2.4/       //默认是root，改为apache





MYSQL源码编译
---------

         Mysql 5.5.15 以后，使用了新的 cmake 编译方式，所以先安装 cmake。 以前的版本直接 configure然后make ，make install ，对于5.5.16的后续版本，将需要先使用cmake之后再make，然后make install
         CMake 是一个跨平台的安装（编译）工具，可以用简单的语句来描述所有平台的安装(编译过程)。他能够输出各种各样的 makefile 或者 project 文件，能测试编译器所支持的 C++特性,类似 UNIX 下的automake。 只是 CMake 的建构档取名为 CmakeLists.txt。Cmake 并不直接建构出最终的软件，而是产生标准的建构档（如 Unix 的 Makefile 或Windows Visual C++ 的 projects/workspaces），然后再依一般的建构方式使用。这使得熟悉某个集成开发环境（IDE）的开发者可以用标准的方式建构他的软件，这种可以使用各平台的原生建构系统的能力是 CMake 和 SCons 等其他类似系统的区别之处。
**解决依赖**

    [root@Andu101 ~]# yum install -y cmake     ncurses-devel              //gcc等相关在编译apache已安装



**编译安装MySql**
安装之前使用 yum remove mysql  确保没有安装MySQL
    [root@Andu101 ~]# tar xf mysql-5.6.26.tar.gz -C /usr/local/src/ ; cd /usr/local/src/mysql-5.6.26                        
    [root@Andu101 mysql-5.6.26]# useradd -M -s /sbin/nologin mysql                            //创建mysql运行用户
    [root@Andu101 mysql-5.6.26]# cmake \
     -DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
     -DMYSQL_UNIX_ADDR=/tmp/mysql.sock \
     -DDEFAULT_CHARSET=utf8 \
     -DDEFAULT_COLLATION=utf8_general_ci \
     -DWITH_EXTRA_CHARSETS=all \
     -DWITH_MYISAM_STORAGE_ENGINE=1\
     -DWITH_INNOBASE_STORAGE_ENGINE=1\
     -DWITH_MEMORY_STORAGE_ENGINE=1\
     -DWITH_READLINE=1\
     -DENABLED_LOCAL_INFILE=1\
     -DMYSQL_DATADIR=/usr/local/mysql/data \
     -DMYSQL-USER=mysql

***********************************参数解释******************************************************************************

    DCMAKE_INSTALL_PREFIX                                      #制定mysql的安装根目录，目录在安装的时候会自动创建，这个值也可以在服务器启动时，用--basedir来设置
    DMYSQL_UNIX_ADDR                                           #服务器与本地客户端进行通信的Unix套接字文件，必须是绝对路径，默认位置/tmp/mysql.sock，可以在服务器启动时，用--socket改变
    DDEFAULT_CHARSET                        #mysql默认使用的字符集，不指定将默认使用Latin1西欧字符集
    DDEFAULT_COLLATION                           #默认字符校对
    DWITH_EXTRA_CHARSETS                  #制定mysql拓展字符集，默认值也是all支持所有的字符集
    DWITH_MYISAM_STORAGE_ENGINE 
    DWITH_INNOBASE_STORAGE_ENGINE
    DWITH_MEMORY_STORAGE_ENGINE
    #静态编译MYISAM，INNOBASE，MEMORY存储引擎到MYSQL服务 器，这样MYSQL就支持这三种存储引擎
    DWITH_READLINE                    #支持readline库
    DENABLED_LOCAL_INFILE                    #允许本地倒入数据，启用加载本地数据
    DMYSQL_DATADIR                                #mysql数据库存放路径
    DMYSQL-USER                                    #运行mysql的用户

    [root@Andu101 mysql-5.6.26]# make -j 4 && make install

**这些编译参数的帮助寻找方法：**
http://www.mysql.com→→Documentation→→选择对应的版本（5.6）→→HTML Online→→View→→Installation & Upgrades→→Installing MySQL from Source →→MySQL Source-Configuration Options→→
http://dev.mysql.com/doc/refman/5.6/en/source-configuration-options.html 


**配置mysql**

 

     [root@Andu101 mysql-5.6.26]# cd && chown -R mysql:mysql /usr/local/mysql/                //属主属组更改
     [root@Andu101 ~]# cp /usr/local/mysql/support-files/my-default.cnf /etc/my.cnf       //覆盖原配置文件
     [root@Andu101 ~]# cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld    //启动脚本
     [root@Andu101 ~]# vim /etc/init.d/mysqld                            
                           //更改启动脚本中指定mysql位置
    basedir=
    datadir=
    #修改为
    basedir=/usr/local/mysql
    datadir=/usr/local/mysql/data
    [root@Andu101 ~]# chkconfig mysqld  on                                         //开机启动

**初始化数据库**

     [root@Andu101 ~]# /usr/local/mysql/scripts/mysql_install_db \
    --defaults-file=/etc/my.cnf  \
    --basedir=/usr/local/mysql/\
    --datadir=/usr/local/mysql/data/\
    --user=mysql

**#类似于在rpm安装的时候启动数据库弹出的初始化消息**

    [root@Andu101 ~]# ls /usr/local/mysql/data/                     //初始化看这个下面有无mysql和test等数据库
    ibdata1  ib_logfile0  ib_logfile1  mysql  performance_schema  test
    [root@Andu101 ~]# ln -s /usr/local/mysql/bin/* /bin/                  //这个里面是部分命令，让系统直接调用
    [root@Andu101 ~]# servie mysqld  start                                 //启动数据库
    [root@Andu101 ~]# mysql_secure_installation                                   //初始安全设置（设置root密码，123456）
     [root@Andu101 ~]# mysql -uroot -p123456                                //测试登录（OK）

编译安装配置PHP
---------

PHP原始为Personal Home Page的缩写，已经正式更名为 "PHP: Hypertext Preprocessor"。
Apache对于php的解析，就是通过众多Module中的php Module来完成的，把php最终集成到Apache系统中，还需要对Apache进行一些必要的设置！

**解决依赖**
       [root@Andu101 php-5.6.13]# yum install -y libxml2-devel
       [root@Andu101 ~]# tar xf php-5.6.13.tar.bz2 -C  /usr/local/src/ ; cd /usr/local/src/php-5.6.13
 
**正式安装**

    [root@Andu101 php-5.6.13]# ./configure --prefix=/usr/local/php --with-mysql=/usr/local/mysql/ --with-apxs2=/usr/local/apache2.4/bin/apxs --with-config-file-path=/usr/local/php
    --prefix                        #指定安装路径
    --with-apxs2                    #用apache的apxs工具将php编译成apache的一个模块
    --with-mysql                    #与mysql结合，如果不跟路径，编译出来的版本将是低版本
    --with-config-file-path         #php的主配置文件php.ini路径

**看到下面一段内容，表示configure成功**

    Thank you for using PHP.
    config.status: creating php5.spec
    config.status: creating main/build-defs.h
    config.status: creating scripts/phpize
    config.status: creating scripts/man1/phpize.1
    config.status: creating scripts/php-config
    config.status: creating scripts/man1/php-config.1
    config.status: creating sapi/cli/php.1
    config.status: creating sapi/cgi/php-cgi.1
    config.status: creating ext/phar/phar.1
    config.status: creating ext/phar/phar.phar.1
    config.status: creating main/php_config.h
    config.status: executing default commands
    [root@Andu101 php-5.6.13]# make –j 3 ; make install ; cd /usr/local/src/php-5.6.13
    [root@Andu101 php-5.6.13]# cp php.ini-production /usr/local/php/php.ini ; cd        //php配置文件


**检测编译安装结果**

只有有下面这两个文件（模块），代表我们的apache就可以支持php了

    [root@Andu101 ~]#
    ls  /usr/local/apache2.4/modules/httpd.exp 
    /usr/local/apache2.4/modules/httpd.exp
    [root@Andu101 ~]# ls /usr/local/apache2.4/modules/libphp5.so
    /usr/local/apache2.4/modules/libphp5.so

**配置Apache支持PHP**

    [root@Andu101 ~]# vim /usr/local/apache2.4/conf/httpd.conf
    ……
    248    <IfModule dir_module>
    249       DirectoryIndex index.html index.php           #添加index.php
    250    </IfModule>
    ……
    376     AddType application/x-compress .Z
    377     AddType application/x-gzip .gz .tgz       #上面两行是以前有的
    378     AddType application/x-httpd-php .php      #下面两行是添加的，需要添加以支持PHP
    379     AddType application/x-httpd-php-source .phps

修改完，重启下Apache服务。
测试

    [root@Andu101 ~]# vim /usr/local/apache2.4/htdocs/index.php               
    <?php
            phpinfo();
    ?>

然后使用客户端浏览此页面
------------

当然也可以采用lamp一键安装脚本[直通车][2]
----------

 
 


  [2]: http://lamp.sh