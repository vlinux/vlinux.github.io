---
title: Jumpserver安装使用
categories: Linux技术
tags: [Jumpserver,跳板机,堡垒机]
date: 2020-02-21 23:39:00
---
 

 

# xo.1 Jumpserver堡垒机概述-部署Jumpserver运行环境

## xo.1.1 跳板机概述：

**跳板机就是一台服务器，开发或运维人员在维护过程中首先要统一登录到这台服务器，然后再登录到目标设备进行维护和操作；**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)**][1]

**跳板机缺点：没有实现对运维人员操作行为的控制和审计，使用跳板机的过程中还是会出现误操作、违规操作导致的事故，一旦出现操作事故很难快速定位到原因和责任人；**

 

**堡垒机概述：**

**堡垒机，即在一个特定的网络环境下，为了保障网络和数据不受来自外部和内部用户的入侵和破坏，而运用各种技术手段实时收集和监控网络环境中每一个组成部分的系统状态、安全事件、网络活动，以便集中报警、及时处理及审计定责。**

**总结：堡垒机比跳板机多了实时收集、监控网络环境、集中报警等功能。**

 

**Jumpserver****概述：**

**Jumpserver****是一款使用Python, Django开发的开源跳板机系统, 为互联网企业提供了认证，授权，审计，自动化运维等功能。**

 

**官方网址****： http://www.jumpserver.org**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)][2]

**jumpserver****堡垒机组件说明：**

**1****、Jumpserver：**

**现指 Jumpserver 管理后台，是核心组件（Core）, 使用 Django Class Based View 风格开发，支持 Restful API。**

**2****、Coco：**

**实现了 SSH Server 和 Web Terminal Server 的组件，提供 SSH 和 WebSocket 接口, 使用 Paramiko 和 Flask 开发。**

**3****、Luna：**

**现在是 Web Terminal 前端，计划前端页面都由该项目提供，Jumpserver 只提供 API，不再负责后台渲染html等。**

实验所需软件包[file href="http://cloud.xoxoyun.cn/index.php?share/folder&user=1&sid=tYZErASh"]Jumpserver所需包[/file]
=======

## xo.1.2 部署Jumpserver运行环境

**实验环境：**

**Andu66.cn IP : 192.168.10.66 jumpserver****服务端**

**Andu101.cn IP****：192.168.10.101 资源，被管理的服务器**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)**][3]

**上传依赖的软件到到Linux系统上（因为在线安装下载太慢了）：**


**关闭 selinux 和防火墙**

**[root@Andu66 ~]# setenforce 0 #** **可以设置配置文件永久关闭**

**[root@Andu66 ~]# systemctl stop firewalld.service ; systemctl disable firewalld.service**

 

**#** **修改字符集，否则可能报 input/output error的问题，因为日志里打印了中文**

**[root@Andu66 ~]# localedef -c -f UTF-8 -i zh_CN zh_CN.UTF-8**

**[root@Andu66 ~]# export LC_ALL=zh_CN.UTF-8**

**[root@Andu66 ~]# echo 'LANG=zh_CN.UTF-8' > /etc/locale.conf**

**[root@Andu66 ~]# exit**

**再重新连接， 这样语言环境就改变了。**

 

## xo.1.3  准备 Python3 和 Python 虚拟环境

**1****、安装依赖包**

**注：安装前，可以开启yum缓存功能，把软件包下载下来，方便后期使用。**

**[root@Andu66 ~]# vim /etc/yum.conf**

**改：keepcache=0**

**为：keepcache=1**

**[root@Andu66 ~]# yum -y install wget sqlite-devel xz gcc automake zlib-devel openssl-devel epel-release git**

 

**2****、编译安装python3.6.1**

**[root@Andu66 ~]# cd /opt** 

**[root@Andu66 ~]# tar xvf Python-3.6.1.tar.xz && cd Python-3.6.1**

**[root@Andu66 ~]# ./configure  && make -j 4 && make install** 

**#** **这里必须执行编译安装，否则在安装 Python 库依赖时会有麻烦...**

**注：在线下载 wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tar.xz**

 

**互动： python2.7和python3.5冲突了怎么办？ 老程序需要使用2.7，新程序需要3.6？**

 

**3****、建立 Python 虚拟环境**

**因为 CentOS 6/7 自带的是 Python2，而 Yum 等工具依赖原来的 Python，为了不扰乱原来的环境我们来使用 Python 虚拟环境**

**[root@Andu66 ~]# cd /opt**

**[root@Andu66 ~]# python3 -m venv py3**

**[root@Andu66 ~]# source /opt/py3/bin/activate**

**(py3) [root@Andu66 ~]#    #****切换成功的，前面有一个py3 标识**

**#** **看到下面的提示符代表成功，以后运行 Jumpserver 都要先运行以上 source 命令，以下所有命令均在该虚拟环境中运行**

**这一招学到手:1**

 

## xo.1.4 安装 Jumpserver 1.0.0

**1****、下载或 Clone 项目**

**项目提交较多 git clone 时较大，你可以选择去 Github 项目页面直接下载zip包。**

**(py3) [root@Andu66 ~]#  cd /opt/jumpserver/  #****我们已经提前下载**

**注：在线下载方法：**

**git clone --depth=1 https://github.com/jumpserver/jumpserver.git && cd jumpserver && git checkout master**

**注：depth用于指定克隆深度，为1即表示只克隆最近一次commit**

 

**2****、 安装依赖 RPM 包**

**[root@Andu66 ~]# cd /opt/jumpserver/requirements**

**[root@Andu66 ~]# yum -y install $(cat rpm_requirements.txt)** 

**3****、 安装 Python 库依赖**

**[root@Andu66 ~]# cd /opt/jumpserver/requirements**

**[root@Andu66 ~]# source /opt/py3/bin/activate**

**(py3) [root@Andu66 ~]# pip -V**

**pip 9.0.1 from /opt/py3/lib/python3.6/site-packages (python 3.6)** 

**方法1：离线安装：**

**(py3) [root@Andu66 python-package]# cd /opt/python-package** 

**(py3) [root@Andu66 ~]# pip install  ./\*** 

**方法2：在线安装：(py3) [root@Andu66 ~]#  pip install -r requirements.txt** 

**pip** **是一个安装和管理 Python 包的工具，相当于yum命令**

 

**4****、安装 Redis, Jumpserver 使用 Redis 做 cache 和 celery broke**

**[root@Andu66 ~]# yum  -y install redis** 

**[root@Andu66 ~]# systemctl enable redis ; systemctl start redis**

**5****、安装 MySQL**

**本教程使用 Mysql 作为数据库，如果不使用 Mysql 可以跳过相关 Mysql 安装和配置**

**[root@Andu66 ~]# yum  install mariadb mariadb-devel mariadb-server  -y**

**[root@Andu66 ~]# systemctl enable mariadb ; systemctl start mariadb**

 

**6****、建数据库 Jumpserver 并授权**

**[root@Andu66 ~]# mysql**

**MariaDB [(none)]> create database jumpserver default charset 'utf8';**

**MariaDB [(none)]> grant all on jumpserver.\* to 'jumpserver'@'127.0.0.1' identified by '12xo56';**

**MariaDB [(none)]> exit;**

**7****、改 Jumpserver 配置文件**

**[root@Andu66 ~]# cd /opt/jumpserver**

**[root@Andu66 ~]# cp config_example.py config.py**

**[root@Andu66 ~]# vim config.py**

 

**#** **我们计划修改 DevelopmentConfig 中的配置，因为默认 Jumpserver 使用该配置，它继承自 Config**

**注意: 配置文件是 Python 格式，不要用 TAB，而要用空格**

**class DevelopmentConfig(Config):**

  **DEBUG = True**

  **DB_ENGINE = 'mysql'**

  **DB_HOST = '127.0.0.1'**

  **DB_PORT = 3306**

  **DB_USER = 'jumpserver'**

  **DB_PASSWORD = '12xo56'**

  **DB_NAME = 'jumpserver'**

**如下：一定要注意前面空格的对齐。**


![4.png][4]

 

**8****、成数据库表结构和初始化数据**

**(py3) [root@Andu66 jumpserver]# cd /opt/jumpserver/utils**

**(py3) [root@Andu66 jumpserver]# bash make_migrations.sh #****注，在执行这一条命令之前，必续保障之前的pip install ./\* 命令已经执行完了，不然后导入不了Django等软件包。**

**9****、行 Jumpserver**

**(py3) [root@Andu66 jumpserver]# cd /opt/jumpserver**

**(py3) [root@Andu66 jumpserver]# chmod +x jms**

**(py3) [root@Andu66 jumpserver]# ./jms start all -d #** **后台运行使用 -d 参数**

**注： ./jms start all #前台运行**

**如果运行失败了，重新启动一下。**

 

**#****启动服务的脚本，使用方式./jms start|stop|status|restart all 后台运行请添加 -d 参数**

**测试：**

**访问 http://192.168.10.66:8080/  用户 ： admin 密码： admin**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg)][5]

**这里需要使用8080端口来访问页面。后期搭建 nginx 代理，就可以直接使用80端口正常访问了**

**附上重启的方法**

**(py3) [root@Andu66 jumpserver]# ./jms restart -d** 

# xo.2 安装 Coco组件

## xo.2.1  安装coco组件

**1****、默认点击web终端，弹出：**

下载coco配置包，git地址： git clone https://github.com/jumpserver/coco.git


![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image014.jpg)**][6]


**所以接下来，我们安装luna和coco：**

**coco****概述：coco实现了 SSH Server 和 Web Terminal Server 的组件，提供 SSH 和 WebSocket 接口, 使用 Paramiko 和 Flask 开发。**

**(py3) [root@Andu66 jumpserver]# cd /opt/coco #****直接使用离线代码**

**(py3) [root@Andu66 jumpserver]# source /opt/py3/bin/activate** 

**附：在线下载代码：# git clone https://github.com/jumpserver/coco.git && cd coco && git checkout master**

**2****、 安装coco的依赖包，主要有rpm和python包**

**(py3) [root@Andu66 jumpserver]# cd /opt/coco/requirements**

**(py3) [root@Andu66 jumpserver]# yum -y install $(cat rpm_requirements.txt)** 

**(py3) [root@Andu66 jumpserver]# pip install -r requirements.txt  #****前面已经离线安装过python的包，这里就很快安装成功了，或提示已经安装成功。**

**注：扩展： pip download -r requirements.txt #使用download可以下载python包到本地**

 

**3****、查看配置文件并运行**

**(py3) [root@Andu66 jumpserver]# cd /opt/coco**

**(py3) [root@Andu66 jumpserver]# cp conf_example.py conf.py #** **如果 coco 与 jumpserver 分开部署，请手动修改 conf.py**

**(py3) [root@Andu66 coco]# chmod +x cocod** 

**(py3) [root@Andu66 jumpserver]# ./cocod start -d  #****后台运行使用 -d 参数**

**#** **新版本更新了运行脚本，使用方式./cocod start|stop|status|restart 后台运行请添加 -d 参数**

```
 
```

# xo.3 安装Web-Terminal前端-Luna组件-配置Nginx整合各组件

## xo.3.1 安装luna组件

**Luna****概述：Luna现在是 Web Terminal 前端，计划前端页面都由该项目提供，Jumpserver 只提供 API，不再负责后台渲染html等。**

**访问（https://github.com/jumpserver/luna/releases）下载对应版本的 release 包，直接解压，不需要编译**

 **解压 Luna**

**(py3) [root@Andu66 jumpserver]# cd /opt**

**(py3) [root@Andu66 jumpserver]# tar xvf luna.tar.gz**

**(py3) [root@Andu66 jumpserver]# ls /opt/luna**

**注：在线下载**

**#wget https://github.com/jumpserver/luna/releases/download/v1.0.0/luna.tar.gz**

 

## xo.3.2 配置 Nginx 整合各组件

**安装 Nginx 根据喜好选择安装方式和版本**

**(py3) [root@Andu66 jumpserver]# yum -y install nginx**

**5.2** **准备配置文件 修改 /etc/nginx/conf.d/jumpserver.conf**

**内容如下：**

**(py3) [root@Andu66 opt]# vim /etc/nginx/nginx.conf**

**删除第38行到 57行中server {。。。}相关的内容，在vim命令模式，输入38gg，快速跳到38行，然后输入20dd，就可以删除。**

**删除后，在38行插入以一下内容:**

 

```
server {
    listen 80;
 
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
 
    location /luna/ {
        try_files $uri / /index.html;
        alias /opt/luna/;
    }
 
    location /media/ {
        add_header Content-Encoding gzip;
        root /opt/jumpserver/data/;
    }
 
    location /static/ {
        root /opt/jumpserver/data/;
    }
 
    location /socket.io/ {
        proxy_pass       http://localhost:5000/socket.io/;  # 如果coco安装在别的服务器，请填写它的ip
        proxy_buffering off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
 
    location / {
        proxy_pass http://localhost:8080;  # 如果jumpserver安装在别的服务器，请填写它的ip
    }
}
```

 

## xo.3.3 运行 Nginx

**(py3) [root@Andu66 opt]# nginx -t  #** **检测配置文件**

**(py3) [root@Andu66 jumpserver]# systemctl start nginx ; systemctl enable nginx**

 

## xo.3.4 接受coco注册

**到会话管理-终端管理 接受 Coco的注册。点接受。**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image018.jpg)][7]


![8.png][8]


**再刷新页面：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg)][9]

***\*** **测试连接\****

**(py3) [root@Andu66 jumpserver]# ssh -p2222 admin@192.168.10.66  #****密码: admin**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)][10]

**到此安装成功。**

 

 

# xo.4 jumpserver平台系统初始化

## xo.4.1 系统基本设置

**这里要写成自己真实的URL地址，不然后期用户访问不了。http://192.168.10.66**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)!\[img\]][11]

![12.png][12]
## xo.4.2 配置邮件发送服务器

**点击页面上边的"邮件设置" TAB ，进入邮件设置页面：** 

**SMTP****服务器：smtp.163.com**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image030.jpg)][13]

**注：自己邮箱要开启smtp和pop3服务。**

开启POP3/SMTP/IMAP服务方法：

**请登录[163邮箱](http://email.163.com/)，点击页面右上角的“设置”—在“高级”下，点“POP3/SMTP/IMAP”，勾选图中两个选项，点击确定。即可开启成功。开通后即可用[闪电邮](http://help.163.com/09/1218/14/5QQS7HIA00753VB8.html)、[Outlook](http://help.163.com/09/1222/17/5R5GPV6C00753VB8.html)等软件收发邮件了。**

**![什么是POP3、SMTP及IMAP？　]![(file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image031.gif)][14]**

服务器地址**：POP3服务器：pop.163.com  |** **SMTP****服务器：smtp.163.com  | IMAP服务器：imap.163.com**

**注：配置完后，需要重启一下服务。不然后期创建用户，收不到邮件。**

**(py3) [root@Andu66 jumpserver]# /opt/jumpserver/jms stop all -d**

**(py3) [root@Andu66 jumpserver]# /opt/jumpserver/jms start all -d**

 

**配置邮件服务后，点击页面的"测试连接"按钮，如果配置正确，Jumpserver 会发送一条测试邮件到您的 SMTP 账号邮箱里面：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image033.jpg)][15]

**查看邮箱：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image035.jpg)][16]

**收到邮件后，点提交：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image037.jpg)][17]

 

**注意： 在使用jumpserver过程中，有一步是系统用户推送，要推送成功，client（后端服务器）要满足以下条件： 
 1）后端服务器需要有python、sudo环境才能使用推送用户，批量命令等功能 
 2）后端服务器如果开启了selinux，请安装libselinux-python。一般情况服务器上都关闭了selinux**

 

# xo.5 使用jumpserver 管理王者荣耀数万台游戏服务器                                                                                                                                                                                                                                                                                                                         

## xo.5.1 用户管理

**1****、添加用户组。**

**用户名即 Jumpserver 登录账号。用户组是用于资产授权，当某个资产对一个用户组授权后，这个用户组下面的所有用户就都可以使用这个资产了。角色用于区分一个用户是管理员还是普通用户。**

**点击用户管理 —> 查看用户组 —> 添加用户组**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image039.jpg)**][18]



**添加新的小组 —> 王者荣耀-华北区运维部门**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image041.jpg)**][19]



**查看刚才添加的组**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image043.jpg)**][20]

 

**2****、添加用户**

**点击用户管理 —> 用户列表 —> 创建用户**

**其中，名称是真实姓名，用户名即 Jumpserver 登录账号。**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image045.jpg)**][21]

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image047.jpg)][22]

**然后点提交。**

 

**查看添加的用户**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image049.jpg)**][23]

 

**成功提交用户信息后，Jumpserver 会发送一条设置"用户密码"的邮件到您填写的用户邮箱。**



**点击链接，开始修改密码：**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image053.jpg)**][24]

**用户首次登录 Jumpserver，会被要求完善用户信息。**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image055.jpg)][25]

**这个需要用户自己生成SSH 密钥，方便后期登录：我在自己的另一台linux上，使用mk用户生成自己的ssh密钥。**

**(py3) [root@Andu66 luna]# useradd xoxo123**

**(py3) [root@Andu66 luna]# echo 12xo56 | passwd --stdin xoxo123** 

**[root@Andu66 opt]# su - xoxo123**

**[mk@Andu66 ~]$ ssh-keygen  #****一路回车**

**[mk@Andu66 ~]$ cat ~/.ssh/id_rsa.pub** 

**ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDDW+wUBeICXOoguax/sO+uhg/EkaCNVQXgCldmiRSReXrwFYNRDbTdLwOTUWs8y6mo79XvdnF8Wkk0Yy1p4xH6FOU7+TY+WX/hz7IH+/y73vJHur2UP54j3QxDTH+bv36dERcJGu8PZ2ck8uS/emxGttIacg8lM5KtUthdKD9cEXVUBzSiSkpqwkCffKcg8ZJ4rYIsucJOgNLUGwZJ71uPETg1mQHvJryPQhfkrFvUn0jkXrhjBlcko+mJPimuct8PdEWSzcUrKTRCPWAWsLWUA8mWR7Bga8WE5iUICj/KfHq2enxRClj8ZRajxt2Kei50T8BAN0EreG/oZyI4cYrr xoxo123@Andu**

**把上面生成的公钥粘到这里：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image057.jpg)][26]

## xo.5.2 编辑资产树添加节点

**节点不能重名，右击节点可以添加、删除和重命名节点，以及进行资产相关的操作。**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image059.jpg)**][27]

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image061.jpg)**][28]

**改成节点名字为：王者荣耀-华北区-服务器**

 

 

## xo.5.3  创建管理用户

**Jumpserver****里各个用户的说明：
 ![简单使用jumpserver]![(file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image063.gif)][29]**

**管理用户是服务器的 root，或拥有 NOPASSWD: ALL sudo 权限的用户，Jumpserver 使用该用户来推送系统用户、获取资产硬件信息等。**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image065.jpg)**][30]

**王者荣耀-华北区-服务器管理用户-root   密码是： 12xo56** 

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image067.jpg)**][31]

**前提，你的王者荣耀-华北区-服务器节点中所有的服务器root用户密码都是：123456**

**这样就可以使用此root用户管理服务器。**

 

## xo.5.4  创建系统用户

**系统用户是 Jumpserver 跳转登录资产时使用的用户，可以理解为登录资产用户， Jumpserver使用系统用户登录资产。**

**系统用户的 Sudo 栏填写允许当前系统用户免sudo密码执行的程序路径，如默认的/sbin/ifconfig，意思是当前系统用户可以直接执行 ifconfig 命令或 sudo ifconfig 而不需要输入当前系统用户的密码，执行其他的命令任然需要密码，以此来达到权限控制的目的。**

**#** **此处的权限应该根据使用用户的需求汇总后定制，原则上给予最小权限即可。**

**系统用户创建时，如果选择了自动推送 Jumpserver 会使用 Ansible 自动推送系统用户到资产中，如果资产(交换机、Windows )不支持 Ansible, 请手动填写账号密码。**

**Linux** **系统协议项务必选择 ssh 。如果用户在系统中已存在，请去掉自动生成密钥、自动推送勾选。**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image069.jpg)**][32]

**增加一个：检查服务器运行状态的用户： user 权限： /sbin/ifconfig,/usr/bin/top,/usr/bin/free**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image071.jpg)**][33]

 

**再加一个： 系统管理员用户：manager** 

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image073.jpg)**][34]

 

## xo.5.5  创建资产

**点击页面左侧的“资产管理”菜单下的“资产列表”按钮，查看当前所有的资产列表。**

**点击页面左上角的“创建资产”按钮，进入资产创建页面，填写资产信息。**

**IP** **地址和管理用户要确保正确，确保所选的管理用户的用户名和密码能"牢靠"地登录指定的 IP 主机上。资产的系统平台也务必正确填写。公网 IP 信息只用于展示，可不填，Jumpserver 连接资产使用的是 IP 信息。**

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image075.jpg)**][35]

**开启虚拟机Andu101.cn。 一会把这台机器当成资源添加平台中。**

**game64.xuegod.cn-****王者荣耀-华北区 192.168.10.101**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image077.jpg)][36]

 

**资产创建信息填写好保存之后，可以看到已经可以连接资产，说明正常：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image079.jpg)][37]

**如果资产不能正常连接，请检查管理用户的用户名和密钥是否正确以及该管理用户是否能使用 SSH 从 Jumpserver 主机正确登录到资产主机上。**

 

## xo.5.6  网域列表

**网域功能是为了解决部分环境无法直接连接而新增的功能，原理是通过网关服务器进行跳转登录。**

**这个功能，一般情况不用到。**

 

## xo.5.7 创建授权规则

**节点，对应的是资产，代表该节点下的所有资产。**

**用户组，对应的是用户，代表该用户组下所有的用户。**

**系统用户，及所选的用户组下的用户能通过该系统用户使用所选节点下的资产。**

**节点，用户组，系统用户是一对一的关系，所以当拥有 Linux、Windows 不同类型资产时，应该分别给 Linux 资产和 Windows 资产创建授权规则。**

 

![**!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image081.jpg)**][38]

 

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image083.jpg)][39]

 

**授权成功后，你自己手动到Andu101上查看：**

**[root@Andu101 ~]# tail /etc/passwd -n 5**

**postfix:x:89:89::/var/spool/postfix:/sbin/nologin**

**ntp:x:38:38::/etc/ntp:/sbin/nologin**

**tcpdump:x:72:72::/:/sbin/nologin**

**mk:x:1000:1000:mk:/home/mk:/bin/bash**

**manager:x:1001:1001::/home/manager:/bin/bash #****自动推送一个帐号，自动在资产服务器上创建系统用户**

 

**[root@Andu101 ~]# visudo #sudo****相关的规则也会被自动推送过来**

**manager ALL=(ALL) NOPASSWD: /sbin/,/bin/**

 

## xo.5.8 用户使用资产

**登录 Jumpserver**

**创建授权规则的时候，选择了用户组，所以这里需要登录所选用户组下面的用户才能看见相应的资产。**

**使用无痕浏览器，再打开一个窗口，进行登录：**

**用户正确登录后的页面：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image085.jpg)][40]

**连接资产，点击页面左边的 Web 终端：**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image087.jpg)][41]

**打开资产所在的节点：**

**双击资产名字，就连上资产了：**

**如果显示连接超时，请检查为资产分配的系统用户用户名和密钥是否正确，是否正确选择 Linux 操作系统，协议 ssh，端口22，以及资产的防火墙策略是否正确配置等信息。**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image089.jpg)][42]

**接下来，就可以对资产进行操作了。**

 

## xo.5.9 在xshell字符终端下连接jumpserver管理服务器

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image091.jpg)][43]

**输入jumpserver用户xoxo123 和密码12xo56**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image093.jpg)][44]

**点击确定开始连接**

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image095.jpg)][45]

**Opt> 64  #****输入一个101，就可以直接登录：192.168.10.101**

**Connecting to manager@Game-****王者荣耀-华北区 0.3**

**Last login: Fri Feb 21 23:02:58 2020 from 192.168.10.66**

**[manager@Andu101 ~]$** 

**[manager@Andu101 ~]$ whoami  #****发现登录使用的是系统用户manager**

**manager**

**[manager@Andu101 ~]$ exit**

**登出**

**Opt> p #****显示你有权限的主机**

 **ID  Hostname             IP       LoginAs    Comment**                

 **1  game64.xuegod.cn-****王者荣耀-华北区 192.168.10.101  [系统管理员用户]** 

 

**Opt> g #****显示你有权限的主机组**

 **ID Name      Assets   Comment**                         

 **1**  **王者荣耀-华北区-服务器             1**                   

 

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image097.jpg)][46]

## xo.5.10 查看历史命令记录

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image099.jpg)][47]

## xo.5.10 查看历史会话并回放视频

![!\[img\](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image101.jpg)][48]

**更多内容，可以参数官方手册：http://docs.jumpserver.org/zh/docs/step_by_step.html**

 


<!--more-->


----------
原创不易，转载请注明出处

 


  [1]: https://www.xoxoyun.cn/usr/uploads/2020/02/2075287634.png
  [2]: https://www.xoxoyun.cn/usr/uploads/2020/02/60833568.png
  [3]: https://www.xoxoyun.cn/usr/uploads/2020/02/887254899.png
  [4]: https://www.xoxoyun.cn/usr/uploads/2020/02/2466249223.png
  [5]: https://www.xoxoyun.cn/usr/uploads/2020/02/950863279.png
  [6]: https://www.xoxoyun.cn/usr/uploads/2020/02/987735106.png
  [7]: https://www.xoxoyun.cn/usr/uploads/2020/02/2219189626.png
  [8]: https://www.xoxoyun.cn/usr/uploads/2020/02/3820716859.png
  [9]: https://www.xoxoyun.cn/usr/uploads/2020/02/1909261169.png
  [10]: https://www.xoxoyun.cn/usr/uploads/2020/02/3248456103.png
  [11]: https://www.xoxoyun.cn/usr/uploads/2020/02/757874155.png
  [12]: https://www.xoxoyun.cn/usr/uploads/2020/02/3773867249.png
  [13]: https://www.xoxoyun.cn/usr/uploads/2020/02/1787807832.png
  [14]: https://www.xoxoyun.cn/usr/uploads/2020/02/3526646633.png
  [15]: https://www.xoxoyun.cn/usr/uploads/2020/02/4035821686.png
  [16]: https://www.xoxoyun.cn/usr/uploads/2020/02/468941603.png
  [17]: https://www.xoxoyun.cn/usr/uploads/2020/02/976514992.png
  [18]: https://www.xoxoyun.cn/usr/uploads/2020/02/525957325.png
  [19]: https://www.xoxoyun.cn/usr/uploads/2020/02/3232072531.png
  [20]: https://www.xoxoyun.cn/usr/uploads/2020/02/4175844189.png
  [21]: https://www.xoxoyun.cn/usr/uploads/2020/02/3694903309.png
  [22]: https://www.xoxoyun.cn/usr/uploads/2020/02/2914417934.png
  [23]: https://www.xoxoyun.cn/usr/uploads/2020/02/3476289403.png
  [24]: https://www.xoxoyun.cn/usr/uploads/2020/02/1237722763.png
  [25]: https://www.xoxoyun.cn/usr/uploads/2020/02/819598847.png
  [26]: https://www.xoxoyun.cn/usr/uploads/2020/02/2126088747.png
  [27]: https://www.xoxoyun.cn/usr/uploads/2020/02/1251946814.png
  [28]: https://www.xoxoyun.cn/usr/uploads/2020/02/746729145.png
  [29]: https://www.xoxoyun.cn/usr/uploads/2020/02/171879106.png
  [30]: https://www.xoxoyun.cn/usr/uploads/2020/02/3441084798.png
  [31]: https://www.xoxoyun.cn/usr/uploads/2020/02/313563219.png
  [32]: https://www.xoxoyun.cn/usr/uploads/2020/02/632738152.png
  [33]: https://www.xoxoyun.cn/usr/uploads/2020/02/1422730946.png
  [34]: https://www.xoxoyun.cn/usr/uploads/2020/02/3511509906.png
  [35]: https://www.xoxoyun.cn/usr/uploads/2020/02/1861558840.png
  [36]: https://www.xoxoyun.cn/usr/uploads/2020/02/35627710.png
  [37]: https://www.xoxoyun.cn/usr/uploads/2020/02/1998648710.png
  [38]: https://www.xoxoyun.cn/usr/uploads/2020/02/1790809110.png
  [39]: https://www.xoxoyun.cn/usr/uploads/2020/02/267442749.png
  [40]: https://www.xoxoyun.cn/usr/uploads/2020/02/1938123452.png
  [41]: https://www.xoxoyun.cn/usr/uploads/2020/02/3363908533.png
  [42]: https://www.xoxoyun.cn/usr/uploads/2020/02/3366625010.png
  [43]: https://www.xoxoyun.cn/usr/uploads/2020/02/3940823113.png
  [44]: https://www.xoxoyun.cn/usr/uploads/2020/02/2929532066.png
  [45]: https://www.xoxoyun.cn/usr/uploads/2020/02/855979927.png
  [46]: https://www.xoxoyun.cn/usr/uploads/2020/02/1499231695.png
  [47]: https://www.xoxoyun.cn/usr/uploads/2020/02/1119876398.png
  [48]: https://www.xoxoyun.cn/usr/uploads/2020/02/2496026948.png