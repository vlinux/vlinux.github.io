---
title: Docker的引入
categories: Linux技术
tags: [Docker]
date: 2019-07-23 11:09:00
---
第1章 Docker容器介绍
==============

1.1 docker是什么
-------------

Docker 是 Docker.Inc 公司开源的一个基于 LXC技术之上构建的Container容器引擎， 源代码托管在 GitHub 上, 基于Go语言并遵从Apache2.0协议开源。
Docker是通过内核虚拟化技术（namespaces及cgroups等）来提供容器的资源隔离与安全保障等。由于Docker通过操作系统层的虚拟化实现隔离，所以Docker容器在运行时，不需要类似虚拟机（VM）额外的操作系统开销，提高资源利用率。

1.2 容器与虚拟机对比
------------

![Docker对比图][1]

![启动速度对比][2]

1.3 docker的三个重要概念
-----------------

Image(镜像):
那么镜像到底是什么呢？Docker 镜像可以看作是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。
Container(容器)
容器(Container)的定义和镜像(Image)几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的。
Repository(仓库)
镜像仓库是 Docker 用来集中存放镜像文件的地方，类似于我们之前常用的代码仓库。
通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本 。
我们可以通过<仓库名>:<标签>的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 Latest 作为默认标签。

![构成图][3]

1.4 docker的组成部分
---------------

docker是传统的CS架构分为docker client和docker server
Docker 客户端是 Docker 用户与 Docker 交互的主要方式。当您使用 Docker 命令行运行命令时，Docker 客户端将这些命令发送给服务器端，服务端将执行这些命令。
Docker 命令使用 Docker API 。Docker 客户端可以与多个服务端进行通信。

![请输入图片描述][4]

第2章 Docker安装部署
==============

2.1 国内源安装docker-ce
------------------

    # step 1: 安装必要的一些系统工具
    sudo yum install -y yum-utils device-mapper-persistent-data lvm2
    # Step 2: 添加软件源信息
    sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    # Step 3: 更新并安装Docker-CE
    sudo yum makecache fast
    sudo yum -y install docker-ce
    # Step 4: 开启Docker服务
    sudo service docker start
    
    # 注意：
    # 官方软件源默认启用了最新的软件，您可以通过编辑软件源的方式获取各个版本的软件包。例如官方并没有将测试版本的软件源置为可用，您可以通过以下方式开启。同理可以开启各种测试版本等。
    # vim /etc/yum.repos.d/docker-ee.repo
    #   将[docker-ce-test]下方的enabled=0修改为enabled=1
    #
    # 安装指定版本的Docker-CE:
    # Step 1: 查找Docker-CE的版本:
    # yum list docker-ce.x86_64 --showduplicates | sort -r
    #   Loading mirror speeds from cached hostfile
    #   Loaded plugins: branch, fastestmirror, langpacks
    #   docker-ce.x86_64            17.03.1.ce-1.el7.centos            docker-ce-stable
    #   docker-ce.x86_64            17.03.1.ce-1.el7.centos            @docker-ce-stable
    #   docker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable
    #   Available Packages
    # Step2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.0.ce.1-1.el7.centos)
    # sudo yum -y install docker-ce-[VERSION]
安装校验

    root@iZbp12adskpuoxodbkqzjfZ:$ docker version
    Client:
     Version:      17.03.0-ce
     API version:  1.26
     Go version:   go1.7.5
     Git commit:   3a232c8
     Built:        Tue Feb 28 07:52:04 2017
     OS/Arch:      linux/amd64
    
    Server:
     Version:      17.03.0-ce
     API version:  1.26 (minimum version 1.12)
     Go version:   go1.7.5
     Git commit:   3a232c8
     Built:        Tue Feb 28 07:52:04 2017
     OS/Arch:      linux/amd64
     Experimental: false

2.2 （国内远镜像加速）等配置
-------------

    [root@docker01 ~]# cat /etc/docker/daemon.json 
    {
        "graph": "/data/docker",
        "storage-driver": "overlay2",
        "insecure-registries": ["registry.access.redhat.com","quay.io"],
        "registry-mirrors": ["https://q2gr04ke.mirror.aliyuncs.com"],
        "bip": "192.168.1.1/24",
        "exec-opts": ["native.cgroupdriver=systemd"],
        "live-restore": true
    }
    [root@docker01 ~]# systemctl restart docker

2.3 快速安装
--------

思路：

    1.开启yum缓存
    2.全新环境安装docker
    3.将缓存的包全部打包出来
    4.安装的时候使用rpm -ivh *.rpm方式安装

2.4 运行第一个容器
-----------

运行一个Hello world

    docker run alpine /bin/echo "Hello world"

第3章 Docker镜像和容器管理
=================

3.1 镜像相关命令
----------

3.1.1 搜索镜像
----------

选择镜像建议：

    1.优先选择官方的
    2.选择星星多的

    docker search centos

3.1.2 获取镜像
----------

    docker pull centos
    docker pull busybox
    docker pull busybox:1.29

3.1.3 查看镜像
----------

    docker images

3.1.4 删除镜像
----------

    docker rmi centos

3.1.5 导出镜像
----------

    docker save -o centos.tar centos:latest

3.1.6 导入镜像
----------

    docker load  < centos.tar

3.2 容器相关命令
----------

3.2.1 启动容器
----------

    docker run -d -p 80:80 nginx 
    docker run --name mydocker -t -i centos /bin/bash

**报错：**

    WARNING: IPv4 forwarding is disabled. Networking will not work.

**解决方法：**

    vim /usr/lib/sysctl.d/00-system.conf
    net.ipv4.ip_forward=1
    
    systemctl restart network


3.2.2 停止容器

----------

    docker stop 

3.2.3 查看容器
----------

    docker ps 
    docker ps -a 
    docker ps -q
    docker ps -aq

3.2.4 进入容器
----------

    docker exec会分配一个新的终端tty
    docker exec -it 容器ID  /bin/bash 
    docker attach会使用同一个终端
    docker attach 容器ID

3.2.5 删除容器
----------

删除单个容器

    docker rm 容器ID

批量删除容器

    docker stop $(docker ps -q)
    docker rm $(docker ps -aq)

容器内部修改软件源（Nginx举例）
==================

    tee /etc/apt/sources.list <<EOF 
    deb http://mirrors.163.com/debian/ jessie main non-free contrib   
    deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib
    EOF
    apt-get update 
    apt-get -y install curl

第4章 Docker网络管理
==============

4.1 随机映射端口
----------

    docker run -P 

4.2 指定映射端口
----------

p 宿主机端口:容器端口

    -p 80:80 -p 443:443

-p 宿主机IP:宿主机端口:容器端口
如果想多个容器使用8080端口，可以通过添加多个IP地址实现

    ifconfig eth0:1 10.0.1.13 up
    docker run -d -p 10.0.1.11:8080:80 nginx:latest
    docker run -d -p 10.0.1.13:8080:80 nginx:latest

进入容器里修改站点目录，然后访问测试

    docker exec -it bdb2a4e7e24d /bin/bash
    echo "web01" > /usr/share/nginx/html/index.html
    docker exec -it 31c1de138dda /bin/bash
    echo "web02" > /usr/share/nginx/html/index.html

访问测试：

    [root@docker01 ~]# curl 10.0.1.11:8080
    web02
    [root@docker01 ~]# curl 10.0.1.13:8080
    web01

第5章 Docker数据卷管理
===============

5.1 持久化数据卷
----------

v 宿主机目录:容器内目录
下面我们来创建一个html5小游戏

5.1.1 创建游戏代码目录
--------------

    mkdir /data/xiaoniao -p
    cd /data/
    unzip xiaoniaofeifei.zip  -d xiaoniao /

5.1.2 创建容器并映射数据卷
----------------

    docker run -d  -p 80:80 -v /data/xiaoniao:/usr/share/nginx/html nginx:latest
    docker ps

5.1.3 访问游戏页面
------------

    10.0.1.11

5.2 持久化数据卷容器
------------

`volumes-from` (跟某一个已经存在的容器挂载相同的卷)
查看当前容器有哪些卷

    docker volume ls

下面我们利用容器卷创建一个小游戏

5.2.1 创建一个容器卷
-------------

    docker run -d  -p 8080:80 --volume xiaoniao:/usr/share/nginx/html nginx:latest
    docker volume ls

5.2.2 查看卷的目录
------------

    docker volume inspect xiaoniao

5.2.3 复制代码目录到容器卷目录
------------------

    \cp -a /data/xiaoniao/* /var/lib/docker/volumes/xiaoniao/_data/

5.2.4 使用容器卷创建新容器
----------------

    docker run -d  -p 8090:80 --volume xiaoniao:/usr/share/nginx/html nginx:latest

5.3 实验-访问不同端口展示不同页面
-------------------

`需求：`
访问8080端口，展示xiaoniao首页
访问8090端口，展示游戏集合页面

5.3.1 准备nginx配置文件
-----------------

    [root@docker01 ~]# cat /data/game.conf 
    server {
        listen       8080;
        server_name  localhost;
        location / {
            root   /opt/game/;
            index  index.html index.htm;
        }
    }
    
    server {
        listen       8090;
        server_name  localhost;
        location / {
            root   /opt/xiaoniao/;
            index  index.html index.htm;
        }
    }

5.3.2 上传代码目录
------------

    [root@docker01 /data]# ll 
    总用量 18896
    drwxr-xr-x 5 root root       73 9月   7 23:03 game
    -rw-r--r-- 1 root root      309 9月   7 22:57 game.conf
    -rw-r--r-- 1 root root 19248295 8月  28 09:48 html5.zip
    drwxr-xr-x 3 root root       92 9月   7 22:15 xiaoniao
    -rw-r--r-- 1 root root    91014 9月   7 22:11 xiaoniaofeifei.zip

5.3.3 创建容器并挂载
-------------

需要挂载的内容：
1.nginx配置文件
2.游戏目录
创建容器命令

    docker run -d -p 8080:8080 -p 8090:8090 -v /data/game.conf:/etc/nginx/conf.d/game.conf -v /data/game:/opt/game -v /data/xiaoniao:/opt/xiaoniao nginx:latest   
    5.3.4 访问测试
    10.0.1.11:8080
    10.0.1.11:8090

第6章 Docker镜像手动构建
================

6.1 手动制作游戏镜像
------------

下面我们基于centos容器制作一个新镜像，并安装nginx服务

6.1.1 启动一个容器并安装nginx
--------------------

    [root@docker01 ~]# docker run -it centos /bin/bash
    [root@0ede2760ba65 /]# yum install wget install openssh-clients -y 
    [root@0ede2760ba65 /]# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
    [root@0ede2760ba65 /]# wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
    [root@0ede2760ba65 /]# sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
    [root@0ede2760ba65 /]# cat /etc/yum.repos.d/nginx.repo  
    [nginx-stable]
    name=nginx stable repo
    baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
    gpgcheck=1
    enabled=1
    gpgkey=https://nginx.org/keys/nginx_signing.key
    [nginx-mainline]
    name=nginx mainline repo
    baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
    gpgcheck=1
    enabled=0
    gpgkey=https://nginx.org/keys/nginx_signing.key
    [root@0ede2760ba65 /]# yum makecache fast
    [root@0ede2760ba65 /]# yum install nginx -y

6.1.2 上传代码目录并配置nginx配置文件
------------------------

    [root@0ede2760ba65 /]# scp -r 10.0.1.11:/data/* /opt/
    [root@0ede2760ba65 /]# ll /opt/
    total 18896
    drwxr-xr-x 5 root root       73 Sep  7 16:02 game
    -rw-r--r-- 1 root root      303 Sep  7 16:02 game.conf
    -rw-r--r-- 1 root root 19248295 Sep  7 16:02 html5.zip
    drwxr-xr-x 3 root root       92 Sep  7 16:02 xiaoniao
    -rw-r--r-- 1 root root    91014 Sep  7 16:02 xiaoniaofeifei.zip
    [root@0ede2760ba65 /]# cp /opt/game.conf /etc/nginx/conf.d/

6.1.3 将容器提交为新的镜像
----------------

    [root@docker01 ~]# docker ps -aq
    0ede2760ba65
    [root@docker01 ~]# docker commit 0ede2760ba65 game:v1
    sha256:a61d28fbfe27ebe36d4b73825b55e5f94097083273ab56dccce0453ce2bd6d38

6.1.4 测试镜像功能是否可用
----------------

    [root@docker01 ~]# docker run -d -p 8080:8080 -p 8090:8090 game:v1  nginx -g 'daemon off;'
    f58f209d4761c4bdd9bb164c0050a94a3273b1ee0e57eafe29e48b1517c72950

6.1.5 将新镜像导出
------------

    docker save -o game_v1.tar game:v1

6.2 手动制作云盘镜像
------------

6.2.1 创建容器
----------

    docker run -d -p 80:80 --name clould game:v1  nginx -g 'daemon off;'

6.2.2 进入容器安装php并求改运行用户
----------------------

    [root@d0c987bcefa2 /]# yum install php-fpm -y
    [root@d0c987bcefa2 /]# php-fpm -v
    PHP 5.4.16 (fpm-fcgi) (built: Oct 30 2018 19:32:20)
    Copyright (c) 1997-2013 The PHP Group
    Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies
    [root@d0c987bcefa2 /]# sed -i '/^user/c user = nginx' /etc/php-fpm.d/www.conf
    [root@d0c987bcefa2 /]# sed -i '/^group/c group = nginx' /etc/php-fpm.d/www.conf
    [root@d0c987bcefa2 /]# sed -i '/daemonize/s#no#yes#g' /etc/php-fpm.conf     
    [root@d0c987bcefa2 /]# php-fpm -c /etc/php.ini -y /etc/php-fpm.conf
    [root@d0c987bcefa2 /]# php-fpm -c /etc/php.ini -y /etc/php-fpm.conf                                   
    [root@d0c987bcefa2 /]# ps -ef|grep php
    root         77      0  0 21:43 ?        00:00:00 php-fpm: master process (/etc/php-fpm.conf)
    nginx        78     77  0 21:43 ?        00:00:00 php-fpm: pool www
    nginx        79     77  0 21:43 ?        00:00:00 php-fpm: pool www
    nginx        80     77  0 21:43 ?        00:00:00 php-fpm: pool www
    nginx        81     77  0 21:43 ?        00:00:00 php-fpm: pool www
    nginx        82     77  0 21:43 ?        00:00:00 php-fpm: pool www

6.2.3 配置nginx
-------------

    [root@d0c987bcefa2 /]# cat /etc/nginx/conf.d/cloud.conf   
    server {
        listen 80;
        server_name localhost;
        root /code;
        index index.php index.html;
    
        location ~ \.php$ {
            root /code;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
    }
    [root@d0c987bcefa2 /]# nginx -t
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    [root@d0c987bcefa2 /]# nginx -s reload

6.2.4 下载代码目录
------------

    [root@d0c987bcefa2 /]# mkdir /code
    [root@d0c987bcefa2 /]# cd /code/
    [root@d0c987bcefa2 code]# scp -r 10.0.1.11:/data/kod/* /code/
    [root@d0c987bcefa2 code]# ls
    ChangeLog.md  README.MD  app  config  data  index.php  plugins  static
    [root@d0c987bcefa2 code]# chown -R nginx:nginx /code/

6.2.5 测试
--------

    [root@d0c987bcefa2 code]# curl -I 127.0.0.1
    HTTP/1.1 302 Moved Temporarily
    Server: nginx/1.16.1
    Date: Sat, 07 Sep 2019 21:53:17 GMT
    Content-Type: text/html; charset=utf-8
    Connection: keep-alive
    X-Powered-By: PHP/5.4.16
    Set-Cookie: KOD_SESSION_ID_9d6d9=ljq63o0tmcscon6eb3gdpqscf4; path=/
    Set-Cookie: KOD_SESSION_ID_9d6d9=ljq63o0tmcscon6eb3gdpqscf4; path=/
    Set-Cookie: KOD_SESSION_ID_9d6d9=ljq63o0tmcscon6eb3gdpqscf4; path=/
    Set-Cookie: KOD_SESSION_SSO=bboh1p0h1uc50tfibrg67dnra7; path=/
    Expires: Thu, 19 Nov 1981 08:52:00 GMT
    Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
    Pragma: no-cache
    Set-Cookie: KOD_SESSION_ID_9d6d9=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
    Set-Cookie: kod_name=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT
    Set-Cookie: kodToken=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT
    Set-Cookie: X-CSRF-TOKEN=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT
    Location: ./index.php?user/login

6.2.6 提交新的镜像
------------

    [root@docker01 ~]# docker commit d0c987bcefa2 kod:v1
    sha256:169df6e8db11bd044e3e05237f2947783f9cc7a65b643dc9206ecf05fdc4a3ea

6.2.7 编写启动脚本并提交新镜像
------------------

    [root@docker01 ~]# docker exec -it c14835183fb5 /bin/bash
    [root@c14835183fb5 /]# cat init.sh     
    #!/bin/bash
    php-fpm -c /etc/php.ini -y /etc/php-fpm.conf
    nginx -g 'daemon off;'
    [root@c14835183fb5 /]# chmod +x init.sh 
    [root@docker01 ~]# docker commit c14835183fb5 kod:v2
    sha256:c05ebdf400aa7f7a27aa857df0d9c75c42943db89abca66f79101771db8e9585

6.2.8 启动测试
----------

    [root@docker01 ~]# docker stop $(docker ps -qa)
    [root@docker01 ~]# docker run -d -p 80:80 kod:v2 /bin/bash /init.sh
    dccf4aea5471713872e4fefaca45f7fac3bffec8f5f602570863ed14231dea1a
    [root@docker01 ~]# docker ps
    CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                            NAMES
    dccf4aea5471        kod:v2              "/bin/bash /init.sh"     36 seconds ago      Up 35 seconds       0.0.0.0:80->80/tcp                               magical_napier

6.2.9 添加GD库
-----------

此时打开页面提示缺少GD库，进入容器内安装php支持插件

    [root@dccf4aea5471 /]yum install php-mbstring php-gd -y

然后重启容器

    

    [root@docker01 ~]# docker restart dccf4aea5471



6.2.10 访问测试没问题后提交新镜像
--------------------

    [root@docker01 ~]# docker commit dccf4aea5471 kod:v2
    sha256:23051ce545a2eb6bb50bb2307bd9cfbaf6139e52f205a4126fb1d8d974c417f4

第7章 Dockerfile自动构建Docker镜像
==========================

7.1 Dockerfile操作命令说明
--------------------

    Docker通过对于在Dockerfile中的一系列指令的顺序解析实现自动的image的构建
    　　通过使用build命令，根据Dockerfiel的描述来构建镜像
    　　通过源代码路径的方式
    　　通过标准输入流的方式
    Dockerfile指令：
    　　只支持Docker自己定义的一套指令，不支持自定义
    　　大小写不敏感，但是建议全部使用大写
    　　根据Dockerfile的内容顺序执行
    FROM：
    　　FROM {base镜像}
    　　必须放在DOckerfile的第一行，表示从哪个baseimage开始构建
    MAINTAINER：
    　　可选的，用来标识image作者的地方
    RUN：
    　　每一个RUN指令都会是在一个新的container里面运行，并提交为一个image作为下一个RUN的base
    　　一个Dockerfile中可以包含多个RUN，按定义顺序执行
    　　RUN支持两种运行方式：
    　　　　RUN <cmd> 这个会当作/bin/sh -c “cmd” 运行
    　　　　RUN [“executable”，“arg1”，。。]，Docker把他当作json的顺序来解析，因此必须使用双引号，而且executable需要是完整路径
    　　RUN 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 RUN command1 的执行仅仅是当前进程，一个内存上的变化而已，其结果不会造成任何文件。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。而如果需要将两条命令或者多条命令联合起来执行需要加上&&。如：cd /usr/local/src && wget xxxxxxx
    CMD：
    　　CMD的作用是作为执行container时候的默认行为（容器默认的启动命令）
    　　当运行container的时候声明了command，则不再用image中的CMD默认所定义的命令
    　　一个Dockerfile中只能有一个有效的CMD，当定义多个CMD的时候，只有最后一个才会起作用 
    CMD定义的三种方式：
    　　CMD <cmd> 这个会当作/bin/sh -c "cmd"来执行
    　　CMD ["executable","arg1",....]
    　　CMD ["arg1","arg2"]，这个时候CMD作为ENTRYPOINT的参数 
    EXPOSE 声明端口
    　　格式为 EXPOSE <端口1> [<端口2>...]。
    　　EXPOSE 指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。
    entrypoint：
    　　entrypoint的作用是，把整个container变成了一个可执行的文件，这样不能够通过替换CMD的方法来改变创建container的方式。但是可以通过参数传递的方法影响到container内部
    　　每个Dockerfile只能够包含一个entrypoint，多个entrypoint只有最后一个有效
    　　当定义了entrypoint以后，CMD只能够作为参数进行传递
    entrypoint定义方式：
    　　entrypoint ["executable","arg1","arg2"]，这种定义方式下，CMD可以通过json的方式来定义entrypoint的参数，可以通过在运行container的时候通过指定command的方式传递参数
    　　entrypoint <cmd>，当作/bin/bash -c "cmd"运行命令
    ADD & COPY：
    　　当在源代码构建的方式下，可以通过ADD和COPY的方式，把host上的文件或者目录复制到image中
    　　ADD和COPY的源必须在context路径下
    　　当src为网络URL的情况下，ADD指令可以把它下载到dest的指定位置，这个在任何build的方式下都可以work
    　　ADD相对COPY还有一个多的功能，能够进行自动解压压缩包
    ENV：
    　　ENV key value
        调用变量格式：${key}
    　　用来设置环境变量，后续的RUN可以使用它所创建的环境变量
    　　当创建基于该镜像的container的时候，会自动拥有设置的环境变量 
    WORKDIR：
    　　用来指定当前工作目录（或者称为当前目录）
    　　当使用相对目录的情况下，采用上一个WORKDIR指定的目录作为基准 
    USER：
    　　指定UID或者username，来决定运行RUN指令的用户 
    ONBUILD：
    　　ONBUILD作为一个trigger的标记，可以用来trigger任何Dockerfile中的指令
    　　可以定义多个ONBUILD指令
    　　当下一个镜像B使用镜像A作为base的时候，在FROM A指令前，会先按照顺序执行在构建A时候定义的ONBUILD指令
    　　ONBUILD <DOCKERFILE 指令> <content>
    VOLUME：
    　　用来创建一个在image之外的mount point，用来在多个container之间实现数据共享
    　　运行使用json array的方式定义多个volume
    　　VOLUME ["/var/data1","/var/data2"]
    　　或者plain text的情况下定义多个VOLUME指令

7.2 使用Dockerfile创建云盘
--------------------

7.2.1 准备需要的文件
-------------

    [root@docker01 ~/dockerfile/kod]# ls CentOS-Base.repo cloud.conf dockerfile epel.repo init.sh kodexplorer4.40.zip nginx.repo

7.2.2 编写dockerfile
------------------

    [root@docker01 ~/dockerfile/kod]# cat dockerfile 
    FROM centos:latest
    
    ADD CentOS-Base.repo  /etc/yum.repos.d/CentOS-Base.repo
    ADD epel.repo  /etc/yum.repos.d/epel.repo
    ADD nginx.repo  /etc/yum.repos.d/nginx.repo
    RUN yum install nginx php-fpm unzip php-gd php-mbstring -y 
    
    RUN rm -rf /etc/nginx/conf.d/default.conf 
    RUN sed -i '/^user/c user = nginx' /etc/php-fpm.d/www.conf
    RUN sed -i '/^group/c group = nginx' /etc/php-fpm.d/www.conf
    RUN sed -i '/daemonize/s#no#yes#g' /etc/php-fpm.conf   
    ADD cloud.conf /etc/nginx/conf.d/cloud.conf
    
    RUN   mkdir /code
    WORKDIR /code
    ADD kodexplorer4.40.zip /code/kodexplorer4.40.zip 
    RUN unzip kodexplorer4.40.zip 
    RUN chown -R nginx:nginx .
    VOLUME /code
    
    ADD init.sh  /init.sh
    EXPOSE 80
    
    CMD ["/bin/bash","/init.sh"]

7.2.3 构建新镜像
-----------

    [root@docker01 ~/dockerfile/kod]# docker build --network=host -t centos_kod:v1 .
    [root@docker01 ~/dockerfile/kod]# docker images
    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
    centos_kod          v1                  87071ea7c86b        2 minutes ago       465MB

7.2.4 基于新镜像运行容器
---------------

    [root@docker01 ~/dockerfile/kod]# docker run -d -p 80:80 centos_kod:v1
    4d1007d7194d434248762e5aca76070206643f0f0f533f2112d0359b25fe7ba0

第8章 Docker私有仓库
==============

8.1 普通的docker registry
----------------------

8.2 带认证的docker registry
-----------------------

8.3 企业级的docker-harbor
---------------------

8.3.1 部署思路
----------

    第一步：安装docker和docker-compose
    第二步：下载harbor-offline-installer-v1.9.0-rc1.tgz
    第三步：上传到/opt,并解压
    第四步：修改harbor.yml配置文件 hostname = 10.0.0.11 harbor_admin_password = 123456
    第五步：执行install.sh

8.3.2 安装docker-compose
----------------------

1.安装docker-compose

    yum install -y python2-pip

2.这里使用pip安装，默认源为国外，可以使用国内加速，相关网站

    https://mirrors.tuna.tsinghua.edu.cn/help/pypi/

pip加速操作命令

    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
    pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

3.继续安装docker-compose

    pip install docker-compose

4.检查

    docker-compose version

8.3.3 上传解压docker-harbor
-----------------------

    [root@docker01 ~]# cd /opt/
    [root@docker01 /opt]# ls
    harbor-offline-installer-v1.9.0-rc1.tgz
    [root@docker01 /opt]# tar zxf harbor-offline-installer-v1.9.0-rc1.tgz 
    [root@docker01 /opt]# ls
    harbor  harbor-offline-installer-v1.9.0-rc1.tgz
    [root@docker01 /opt]# cd harbor/

8.3.4 修改配置文件
------------

修改2个地方：

    [root@docker01 /opt/harbor]# egrep "10.0.1.11|123456" harbor.yml 
    hostname: 10.0.1.11
    harbor_admin_password: 123456

8.3.5 安装
--------

    [root@docker01 /opt/harbor]# ./install.sh

8.3.6 修改docker信任仓库
------------------

    [root@docker01 /opt/harbor]# cat /etc/docker/daemon.json    
    {
          "registry-mirrors": ["http://hub-mirror.c.163.com"],
          "insecure-registries": ["http://10.0.1.11"] 
    }

8.3.7 重启docker并上传镜像
-------------------

    systemctl restart docker  

8.3.8 给镜像打标签并提交到dockerharbor
----------------------------

    [root@docker01 /opt/harbor]# docker login 10.0.1.11           
    Username: zhangya 
    Password: 
    WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
    Configure a credential helper to remove this warning. See
    https://docs.docker.com/engine/reference/commandline/login/#credentials-store
    
    Login Succeeded
    [root@docker01 ~]# docker run -d -p 8080:80 centos_kod:v1          
    78be80f7c2029b68e8943e38fa99131ec6709f798e63c94afb5a7fdfa4a8047c
    [root@docker01 ~]# docker ps|grep kod
    78be80f7c202        centos_kod:v1                                       "/bin/bash /init.sh"     15 seconds ago      Up 13 seconds            0.0.0.0:8080->80/tcp        tender_dirac
    [root@docker01 ~]# docker commit 78be80f7c202 10.0.1.11/linux/centos_kod:v1
    sha256:6bf1e1eef1969bcd4c82472aed945d4dda74a923c0d7dae91e38539676f8c240
    [root@docker01 ~/dockerfile/kod]# docker images
    REPOSITORY                      TAG                        IMAGE ID            CREATED             SIZE
    10.0.1.11/linux/centos_kod      v1                         6bf1e1eef196        13 minutes ago      465MB
    [root@docker01 /opt/harbor]# docker push 10.0.1.11/linux/centos_kod:v1

8.3.9 在docker-harbor上查看
-----------------------

8.3.10 其他主机上下载镜像
----------------

    [root@docker02 ~]# cat /etc/docker/daemon.json 
    {
          "registry-mirrors": ["http://hub-mirror.c.163.com"],
          "insecure-registries": ["http://10.0.1.11"],
          "insecure-registries": ["https://10.0.1.11"] 
    }
    [root@docker02 ~]# docker pull 10.0.1.11/linux/centos_kod:v1


  [1]: https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/1147648620.png
  [2]: https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/2783417689.png
  [3]: https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/497164864.png
  [4]: https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/3695901469.png























