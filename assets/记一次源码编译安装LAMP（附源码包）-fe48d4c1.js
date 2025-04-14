import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5525d3bb.js";import{_ as d,c as u,w as l,o as h,b as n,d as e,e as a,r,f as m,p as _}from"./app-d0cf86c9.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-e6f5dbbc.js";import"./YunCard.vue_vue_type_style_index_0_lang-04289a5a.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-7e4be088.js";const In=JSON.parse('{"title":"记一次源码编译安装LAMP（附源码包）","description":"","frontmatter":{"title":"记一次源码编译安装LAMP（附源码包）","categories":"Linux技术","tags":["LAMP"],"date":"2018-06-04T17:25:00.000Z"},"headers":[{"level":2,"title":"Apache源码编译","slug":"apache源码编译","link":"#apache源码编译","children":[]},{"level":2,"title":"MYSQL源码编译","slug":"mysql源码编译","link":"#mysql源码编译","children":[]},{"level":2,"title":"编译安装配置PHP","slug":"编译安装配置php","link":"#编译安装配置php","children":[]},{"level":2,"title":"然后使用客户端浏览此页面","slug":"然后使用客户端浏览此页面","link":"#然后使用客户端浏览此页面","children":[]},{"level":2,"title":"当然也可以采用lamp一键安装脚本直通车","slug":"当然也可以采用lamp一键安装脚本直通车","link":"#当然也可以采用lamp一键安装脚本直通车","children":[]}],"relativePath":"pages/posts/记一次源码编译安装LAMP（附源码包）.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/记一次源码编译安装LAMP（附源码包）.md","lastUpdated":1671090556000}'),s=JSON.parse('{"title":"记一次源码编译安装LAMP（附源码包）","description":"","frontmatter":{"title":"记一次源码编译安装LAMP（附源码包）","categories":"Linux技术","tags":["LAMP"],"date":"2018-06-04T17:25:00.000Z"},"headers":[{"level":2,"title":"Apache源码编译","slug":"apache源码编译","link":"#apache源码编译","children":[]},{"level":2,"title":"MYSQL源码编译","slug":"mysql源码编译","link":"#mysql源码编译","children":[]},{"level":2,"title":"编译安装配置PHP","slug":"编译安装配置php","link":"#编译安装配置php","children":[]},{"level":2,"title":"然后使用客户端浏览此页面","slug":"然后使用客户端浏览此页面","link":"#然后使用客户端浏览此页面","children":[]},{"level":2,"title":"当然也可以采用lamp一键安装脚本直通车","slug":"当然也可以采用lamp一键安装脚本直通车","link":"#当然也可以采用lamp一键安装脚本直通车","children":[]}],"relativePath":"pages/posts/记一次源码编译安装LAMP（附源码包）.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/记一次源码编译安装LAMP（附源码包）.md","lastUpdated":1671090556000}'),g={name:"pages/posts/记一次源码编译安装LAMP（附源码包）.md",data(){return{data:s,frontmatter:s.frontmatter}},setup(){_("pageData",s)}},f={id:"源码编译安装lamp",tabindex:"-1"},A=n("p",null,[n("strong",null,"为什么要源码编译"),e(" 一般来说，我们软件的安装方式有yum（rpm），和源码编译两种方式，那么为什么我们需要源码编译安装一部分软件？选择源码编译安装软件有以下几个原因： 1：满足不同的运行平台，我们Linux发型版本众多，但是每个版本采用的软件或者内核版本都不一样，而我们的二进制包所依赖的环境不一定能够正常运行，所以大部分软件直接提供源码！ 2：方便定制，满足不同的需求，很多时候我们所需要的软件都是可以定制的，我需要什么就安装什么，大多数二进制代码都是一键装全，所以自由度并不高！ 3：方便运维、开发人员维护，我们的源码是可以打包二进制的，但是对于这个软件的打包都会有一份代价不小的额外工作，包括维护，所以如果是源码的话，软件产商会直接维护，但是如果是二进制的话，一般都是Linux发行商提供！ "),n("strong",null,"什么是LAMP")],-1),y=n("pre",null,[n("code",null,`LAMP=Linux Apache Mysql/MariaDB PHP/Perl/Python 这些软件都是开源免费的软件，几个程序各自是独立的，经常为了达到我们需要的效果而协同工作，组成了我们常见的LAMP架构平台!LAMP是世界上最流行的组合，当然同时也有Nginx，也就是LNMP: LAMP 相对于 NGINX 来说较为安全，但是Nginx处理高并发比Apache要强，NGINX 相对于 LAMP 来说安全较为差一点，同样的配制环境负载远远高于 LAMP 向国内的一些大公司，淘宝、新浪都在用这一些 NGINX，向那么大的公司网站需要用到服务器群用LAMP搭建环境成本远远大于NGINX。打个比方本来1000000W访问量需要 10台LAMP环境服务器才能完成，但是使用NGINX也许只需要5、6台这样一来对于这样的公司来说就大大的节约了成本。
从网站的流量上来说，70%以上的访问流量是LAMP来提供的，LAMP是最强大的网站解决方案，在以前这句话没有错，但是在现在，这句话有待证实！！！因为在以后的过程中，会发现我们会使用的架构是Nginx和Apache结合使用：使用Nginx可以做集群等相关配置，可以和apache一起使用，有的会用apache去跑php，然后用nginx做反向代理，比如apache运行在8080端口，nginx在80端口，访问php文件时，反向代理到apache，静态页通过nginx处理。nginx支持高并发，apache对php的运行比较稳定。











常见的网页类型：htm,html,shtml,stm.php,asp,aspx,shtm,jsp等等Apache本事只处理静态页面，处理动态页面需要使用libphp5.so这个模块去工作，编译php也其实是将一个至关重要的模块打入到apache内部，然后apache收到php请求，将请求交给这个模块来处理！
`)],-1),b=n("p",null,"Apache工作原理： Apache本身只处理html静态语言页面，当客户端需要访问php页面的时候，Apache会调用libphp5.so这个模块去工作，这个模块会把php页面转换成html静态页面，让Apache处理，Apache处理过，会返回给客户端",-1),L=n("p",null,[n("code",null,"LAMP相关网站")],-1),M=n("p",null,"PCRE(Perl Compatible Regular Expressions中文含义：perl语言兼容正则表达式)是一个用C语言编写的正则表达式函数库，PCRE被广泛使用在许多开源软件之中，最著名的莫过于Apache HTTP服务器和PHP脚本语言、R脚本语言，此外，正如从其名字所能看到的，PCRE也是perl语言的缺省正则库。",-1),k=n("p",null,[e("对应我们源码编译的版本 编译安装LAMP所需要及其所使用的源码版本： httpd version：httpd-2.4.16 apr version：apr-1.5.2 pcre version：pcre-8.37 apr-util version：apr-util-1.5.4 mysql version：mysql-5.6.26 php version：php-5.6.13 "),n("code",null,"安装之前需要注意：")],-1),q=n("p",null,[n("strong",null,"LAMP源码编译的基础环境")],-1),x=n("pre",null,[n("code",null,`[root@Andu101 ~]# lsb_release -a
……
Description:        Red Hat Enterprise Linux Server release 6.5(Santiago)
……
        [root@Andu101 ~]# uname -a
Linux Andu101.cn 2.6.32-431.el6.x86_64 …
`)],-1),P=n("p",null,[n("strong",null,"确保系统的干净的系统，不要和现在源码编译安装的软件冲突")],-1),v=n("p",null,[n("code",null,"不要在一个系统上同时存在 RPM-Apache+源码-Apache")],-1),E=n("p",null,[n("strong",null,"建议在编译之前，把开发包组安装：")],-1),S=n("pre",null,[n("code",null,`"Development Tools"和 "Development Libraries"
yum groupinstall "Development Tools" "Development Libraries" -y
 [root@Andu101 ~]# yum install gcc gcc-c++ openssl-devel -y   



[root@Andu101 ~]# ls
apr-1.5.2.tar.gz            httpd-2.4.16.tar.bz2    pcre-8.37.tar.bz2
apr-util-1.5.4.tar.bz2      mysql-5.6.26.tar.gz     php-5.6.13.tar.bz2
`)],-1),D=n("p",null,"apr和apr-util依赖 apr和apr-util独立编译",-1),N=n("pre",null,[n("code",null,` [root@Andu101 ~]# tar xf apr-1.5.2.tar.gz -C /usr/local/src/ &&tar xf apr-util-1.5.4.tar.bz2 -C /usr/local/src/
 [root@Andu101 ~]# cd /usr/local/src/apr-1.5.2/ && ./configure --prefix=/usr/local/apr && make -j 2 && make install
 [root@Andu101 apr-1.5.2]# cd ../apr-util-1.5.4/ && ./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr && make -j 2 && make install
 [root@Andu101 apr-util-1.5.4]# cd && tar xf pcre-8.37.tar.bz2 -C /usr/local/src/

 [root@Andu101 ~]# cd /usr/local/src/pcre-8.37/ && ./configure --prefix=/usr/local/pcre && make -j 2 && make install && cd
`)],-1),I={id:"apache源码编译",tabindex:"-1"},T=n("strong",null,"Apache源码编译",-1),w=n("pre",null,[n("code",null,`依赖环境安装完成，开始编译安装apache
[root@Andu101 ~]# tar xvf httpd-2.4.16.tar.bz2 -C /usr/local/src/ && cd /usr/local/src/httpd-2.4.16
[root@Andu101 httpd-2.4.16]# ./configure --prefix=/usr/local/apache2.4 --enable-so --enable-rewrite --enable-ssl --with-pcre=/usr/local/pcre --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --enable-modules=most --enable-mpms-shared=all --with-mpm=event && make -j 2 && make install 
--prefix=/usr/local/apache2.4                       #安装路径
--enable-so                                         #支持动态加载模块
--enable-rewrite                                    #支持网站地址重写
--enable-ssl                                        #支持SSL加密
--with-pcre=/usr/local/pcre                         #pcre路径
--with-apr=/usr/local/apr                           #apr路径
--with-apr-util=/usr/local/apr-util                 #apr-util路径
`)],-1),R=n("p",null,[e("一共有三种稳定的MPM（Multi-Processing Module，多进程处理模块）模式。它们分别是prefork，worker和event，它们同时也代表这Apache的演变和发展。 "),n("strong",null,"配置Apache的启动脚本")],-1),C=n("pre",null,[n("code",null,`[root@Andu101 ~]# cp /usr/local/apache2.4/bin/apachectl  /etc/init.d/apache2.4
`)],-1),H=n("p",null,[n("strong",null,"若是你按照我的实验环境安装了桌面，那么需要停掉httpd服务，若不是，则不需要"),e(" [root@Andu101 ~]# /etc/init.d/httpd stop [root@Andu101 ~]# chkconfig httpd off "),n("strong",null,"编辑启动脚本文件")],-1),O=n("pre",null,[n("code",null,` [root@Andu101 ~]# vim /etc/init.d/apache2.4
#!/bin/sh
# chkconfig: 2345 64 36           
`)],-1),z=n("p",null,[n("strong",null,"#这个是启动级别的服务，2345是指那些级别启动，64是开启顺序，应该在network服务的后面，36是关闭顺序，应该在network的前面，这里并不是注释 #默认network的是：2345 10 90")],-1),G={id:"description-apache2-4-16-start-script-描述字段，有了这两个字段，就可以用chkconfig命令控制",tabindex:"-1"},U=n("pre",null,[n("code",null,`[root@Andu101 ~]# service apache2.4 start
[root@Andu101 ~]# chkconfig apache2.4 on
`)],-1),Y=n("p",null,[n("strong",null,"Apache安装完成需要注意的地方")],-1),Q=n("pre",null,[n("code",null,`     [root@Andu101 ~]# ps -aux | grep apache     //源码编译apache，运行用户为deamon
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
`)],-1),$=n("p",null,[n("strong",null,"更改目录权限"),e(" [root@Andu101 ~]# chown -R apache:apache /usr/local/apache2.4/ //默认是root，改为apache")],-1),W={id:"mysql源码编译",tabindex:"-1"},X=n("pre",null,[n("code",null,`     Mysql 5.5.15 以后，使用了新的 cmake 编译方式，所以先安装 cmake。 以前的版本直接 configure然后make ，make install ，对于5.5.16的后续版本，将需要先使用cmake之后再make，然后make install
     CMake 是一个跨平台的安装（编译）工具，可以用简单的语句来描述所有平台的安装(编译过程)。他能够输出各种各样的 makefile 或者 project 文件，能测试编译器所支持的 C++特性,类似 UNIX 下的automake。 只是 CMake 的建构档取名为 CmakeLists.txt。Cmake 并不直接建构出最终的软件，而是产生标准的建构档（如 Unix 的 Makefile 或Windows Visual C++ 的 projects/workspaces），然后再依一般的建构方式使用。这使得熟悉某个集成开发环境（IDE）的开发者可以用标准的方式建构他的软件，这种可以使用各平台的原生建构系统的能力是 CMake 和 SCons 等其他类似系统的区别之处。
`)],-1),j=n("p",null,[n("strong",null,"解决依赖")],-1),B=n("pre",null,[n("code",null,`[root@Andu101 ~]# yum install -y cmake     ncurses-devel              //gcc等相关在编译apache已安装
`)],-1),F=n("p",null,[n("strong",null,"编译安装MySql"),e(" 安装之前使用 yum remove mysql 确保没有安装MySQL [root@Andu101 ~]# tar xf mysql-5.6.26.tar.gz -C /usr/local/src/ ; cd /usr/local/src/mysql-5.6.26"),n("br"),e(" [root@Andu101 mysql-5.6.26]# useradd -M -s /sbin/nologin mysql //创建mysql运行用户 [root@Andu101 mysql-5.6.26]# cmake "),n("br"),e(" -DCMAKE_INSTALL_PREFIX=/usr/local/mysql "),n("br"),e(" -DMYSQL_UNIX_ADDR=/tmp/mysql.sock "),n("br"),e(" -DDEFAULT_CHARSET=utf8 "),n("br"),e(" -DDEFAULT_COLLATION=utf8_general_ci "),n("br"),e(" -DWITH_EXTRA_CHARSETS=all "),n("br"),e(" -DWITH_MYISAM_STORAGE_ENGINE=1"),n("br"),e(" -DWITH_INNOBASE_STORAGE_ENGINE=1"),n("br"),e(" -DWITH_MEMORY_STORAGE_ENGINE=1"),n("br"),e(" -DWITH_READLINE=1"),n("br"),e(" -DENABLED_LOCAL_INFILE=1"),n("br"),e(" -DMYSQL_DATADIR=/usr/local/mysql/data "),n("br"),e(" -DMYSQL-USER=mysql")],-1),V=n("p",null,[n("em",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,[n("strong",null,"参数解释")])])])])])])])])])])])])])])])])]),e("*******************************************")],-1),K=n("pre",null,[n("code",null,`DCMAKE_INSTALL_PREFIX                                      #制定mysql的安装根目录，目录在安装的时候会自动创建，这个值也可以在服务器启动时，用--basedir来设置
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
`)],-1),Z=n("strong",null,"这些编译参数的帮助寻找方法：",-1),J=n("p",null,[n("strong",null,"配置mysql")],-1),nn=n("pre",null,[n("code",null,` [root@Andu101 mysql-5.6.26]# cd && chown -R mysql:mysql /usr/local/mysql/                //属主属组更改
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
`)],-1),en=n("p",null,[n("strong",null,"初始化数据库")],-1),ln=n("pre",null,[n("code",null,` [root@Andu101 ~]# /usr/local/mysql/scripts/mysql_install_db \\
--defaults-file=/etc/my.cnf  \\
--basedir=/usr/local/mysql/\\
--datadir=/usr/local/mysql/data/\\
--user=mysql
`)],-1),tn=n("p",null,[n("strong",null,"#类似于在rpm安装的时候启动数据库弹出的初始化消息")],-1),an=n("pre",null,[n("code",null,`[root@Andu101 ~]# ls /usr/local/mysql/data/                     //初始化看这个下面有无mysql和test等数据库
ibdata1  ib_logfile0  ib_logfile1  mysql  performance_schema  test
[root@Andu101 ~]# ln -s /usr/local/mysql/bin/* /bin/                  //这个里面是部分命令，让系统直接调用
[root@Andu101 ~]# servie mysqld  start                                 //启动数据库
[root@Andu101 ~]# mysql_secure_installation                                   //初始安全设置（设置root密码，123456）
 [root@Andu101 ~]# mysql -uroot -p123456                                //测试登录（OK）
`)],-1),on={id:"编译安装配置php",tabindex:"-1"},rn=n("p",null,'PHP原始为Personal Home Page的缩写，已经正式更名为 "PHP: Hypertext Preprocessor"。 Apache对于php的解析，就是通过众多Module中的php Module来完成的，把php最终集成到Apache系统中，还需要对Apache进行一些必要的设置！',-1),sn=n("p",null,[n("strong",null,"解决依赖"),e(" [root@Andu101 php-5.6.13]# yum install -y libxml2-devel [root@Andu101 ~]# tar xf php-5.6.13.tar.bz2 -C /usr/local/src/ ; cd /usr/local/src/php-5.6.13")],-1),pn=n("p",null,[n("strong",null,"正式安装")],-1),cn=n("pre",null,[n("code",null,`[root@Andu101 php-5.6.13]# ./configure --prefix=/usr/local/php --with-mysql=/usr/local/mysql/ --with-apxs2=/usr/local/apache2.4/bin/apxs --with-config-file-path=/usr/local/php
--prefix                        #指定安装路径
--with-apxs2                    #用apache的apxs工具将php编译成apache的一个模块
--with-mysql                    #与mysql结合，如果不跟路径，编译出来的版本将是低版本
--with-config-file-path         #php的主配置文件php.ini路径
`)],-1),dn=n("p",null,[n("strong",null,"看到下面一段内容，表示configure成功")],-1),un=n("pre",null,[n("code",null,`Thank you for using PHP.
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
`)],-1),hn=n("p",null,[n("strong",null,"检测编译安装结果")],-1),mn=n("p",null,"只有有下面这两个文件（模块），代表我们的apache就可以支持php了",-1),_n=n("pre",null,[n("code",null,`[root@Andu101 ~]#
ls  /usr/local/apache2.4/modules/httpd.exp 
/usr/local/apache2.4/modules/httpd.exp
[root@Andu101 ~]# ls /usr/local/apache2.4/modules/libphp5.so
/usr/local/apache2.4/modules/libphp5.so
`)],-1),gn=n("p",null,[n("strong",null,"配置Apache支持PHP")],-1),fn=n("pre",null,[n("code",null,`[root@Andu101 ~]# vim /usr/local/apache2.4/conf/httpd.conf
……
248    <IfModule dir_module>
249       DirectoryIndex index.html index.php           #添加index.php
250    </IfModule>
……
376     AddType application/x-compress .Z
377     AddType application/x-gzip .gz .tgz       #上面两行是以前有的
378     AddType application/x-httpd-php .php      #下面两行是添加的，需要添加以支持PHP
379     AddType application/x-httpd-php-source .phps
`)],-1),An=n("p",null,"修改完，重启下Apache服务。 测试",-1),yn=n("pre",null,[n("code",null,`[root@Andu101 ~]# vim /usr/local/apache2.4/htdocs/index.php               
<?php
        phpinfo();
?>
`)],-1),bn={id:"然后使用客户端浏览此页面",tabindex:"-1"},Ln={id:"当然也可以采用lamp一键安装脚本直通车",tabindex:"-1"};function Mn(o,kn,qn,xn,p,Pn){const t=m,c=i;return h(),u(c,{frontmatter:p.frontmatter,data:p.data},{"main-content-md":l(()=>[n("h1",f,[e("源码编译安装LAMP "),a(t,{class:"header-anchor",href:"#源码编译安装lamp","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),A,y,b,L,n("p",null,[e("Apache="),a(t,{href:"http://httpd.apache.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://httpd.apache.org/")]),_:1}),e(" httpd主程序包 MySQL="),a(t,{href:"http://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://dev.mysql.com/downloads/mysql/")]),_:1}),e(" mysql主程序包 PHP="),a(t,{href:"http://php.net/downloads.php",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://php.net/downloads.php")]),_:1}),e(" php主程序包 apr="),a(t,{href:"http://apr.apache.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://apr.apache.org/")]),_:1}),e(" apr是httpd的依赖包 apr-util="),a(t,{href:"http://apr.apache.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://apr.apache.org/")]),_:1}),e(" apr-util是httpd的第二个依赖包 apr和apr-util这个两个软件是对后端服务软件进行优化的， apr-util只是在apr的基础上提供了更多的数据结构和操作系统封装接口而已。 pcre 是httpd的第三个依赖包 "),a(t,{href:"http://pcre.org/",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://pcre.org/")]),_:1})]),M,k,q,x,P,v,E,S,D,N,n("h2",I,[T,e(),a(t,{class:"header-anchor",href:"#apache源码编译","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),w,R,C,H,O,z,n("h1",G,[e("description: Apache2.4.16 start script #描述字段，有了这两个字段，就可以用chkconfig命令控制 "),a(t,{class:"header-anchor",href:"#description-apache2-4-16-start-script-描述字段，有了这两个字段，就可以用chkconfig命令控制","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),U,Y,Q,$,n("h2",W,[e("MYSQL源码编译 "),a(t,{class:"header-anchor",href:"#mysql源码编译","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),X,j,B,F,V,K,n("p",null,[Z,a(t,{href:"http://www.mysql.xn--comDocumentation-fr1jana58052aj8laziygmxop7di9wawx6m",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://www.mysql.com→→Documentation→→选择对应的版本")]),_:1}),e("（5.6）→→HTML Online→→View→→Installation & Upgrades→→Installing MySQL from Source →→MySQL Source-Configuration Options→→ "),a(t,{href:"http://dev.mysql.com/doc/refman/5.6/en/source-configuration-options.html",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("http://dev.mysql.com/doc/refman/5.6/en/source-configuration-options.html")]),_:1})]),J,nn,en,ln,tn,an,n("h2",on,[e("编译安装配置PHP "),a(t,{class:"header-anchor",href:"#编译安装配置php","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),rn,sn,pn,cn,dn,un,hn,mn,_n,gn,fn,An,yn,n("h2",bn,[e("然后使用客户端浏览此页面 "),a(t,{class:"header-anchor",href:"#然后使用客户端浏览此页面","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),n("h2",Ln,[e("当然也可以采用lamp一键安装脚本"),a(t,{href:"http://lamp.sh",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("直通车")]),_:1}),e(),a(t,{class:"header-anchor",href:"#当然也可以采用lamp一键安装脚本直通车","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})])]),"main-header":l(()=>[r(o.$slots,"main-header")]),"main-header-after":l(()=>[r(o.$slots,"main-header-after")]),"main-nav":l(()=>[r(o.$slots,"main-nav")]),"main-content":l(()=>[r(o.$slots,"main-content")]),"main-content-after":l(()=>[r(o.$slots,"main-content-after")]),"main-nav-before":l(()=>[r(o.$slots,"main-nav-before")]),"main-nav-after":l(()=>[r(o.$slots,"main-nav-after")]),comment:l(()=>[r(o.$slots,"comment")]),footer:l(()=>[r(o.$slots,"footer")]),aside:l(()=>[r(o.$slots,"aside")]),"aside-custom":l(()=>[r(o.$slots,"aside-custom")]),default:l(()=>[r(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Tn=d(g,[["render",Mn]]);export{In as __pageData,Tn as default};
