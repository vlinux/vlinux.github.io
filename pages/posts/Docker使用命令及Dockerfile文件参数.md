---
title: Docker使用命令及Dockerfile文件参数
categories: Kubernetes
tags: [Docker,命令,Dockerfile]
date: 2020-02-22 10:32:00
---
**Docket 使用命令**
===============

------

**查**
-----

**# 查询当前可以下载的镜像**

- **docker search httpd** 
- 　　　　**|_ NAME:镜像仓库源的名称**
- 　　　　**|_ DESCRIPTION:镜像的描述**
- 　　　　**|_ OFFICIAL:是否docker官方发布**

------

**# 镜像查看**

- **docker images**
- 　　　　**|_ REPOSITORY：表示镜像的仓库源**
- 　　　　**|_ TAG：镜像的标签**
- 　　　　**|_ IMAGE ID：镜像ID**
- 　　　　**|_ CREATED：镜像创建时间**
- 　　　　**|_ SIZE：镜像大小**

------

- **# 深入帮助**
- **docker command --help**

------

- **# 概要信息**
- **docker info**

------

- **# 列出本机的所有 image 文件。**
- **docker image ls**

------

- **# 列出本机正在运行的容器**
- **docker container ls**
- **docker container ps**

------

- **# 列出本机所有容器，包括终止运行的容器**
- **docker container ls --all**

------

- **# 容器查看，即进程查看**
- **docker ps -a**

------

- **# 查看容器输出内容**
- **docker logs ID/NAMES**

------

- **# 查看服务日志 类似tail -f**
- **docker logs -f ID/NAMES**

------

- **# 查看指定容器端口**
- **docker port ID/NAMES**

------

- **# 查询最后一次创建的容器**
- **docker ps -l**

------

- **# 查看容器内启用的线程**
- **docker top ID/NAMES**

------

- **# 查看容器配置参数**
- **docker inspect ID/NAMES**

------

-  **# 查看已创建网络环境**
- **docker network ls**

------

-  **# 查看网络属性信息**
- **docker network inspect ID/KEY**

------

-  **# 查看持久化数据名称**
- **docker volume ls**
- **# 查看卷标详细信息**
- **docker volume inspect 名称**

------

**改**
-----

- **# 设置镜像标签,接着，为本地的 image 标注用户名和版本。**
- **docker image tag [imageName] [username]/[repository]:[tag]**
- **docker tag 860c279d2fec runoob/centos:dev**
- **docker image tag koa-demos:0.0.1 ruanyf/koa-demos:0.0.1**

------

**删**
-----

- **# 删除容器**
- **docker rm ID/NAMES**

------

- **# 删除 image 文件**
- **docker image rm [imageName]**

------

- **# 删除容器文件**
- **docker container rm [containerID]**

------

-  **# 删除已创建网络**
- **docker network rm [containerID]**

------

-  **# 删除所有未使用的网络**
- **docker network prune -f**

------

- **# docker container run命令的--rm参数，在容器终止运行后自动删除容器文件。**
- **docker container run --rm -p 8000:3000 -it koa-demo /bin/bash**

------

-  **# 删除所有容器**
- **docker rm -f $(docker ps -qa)**

------

**执行方式**
--------

- **# 执行一个镜像run 加参数 名称:镜像标签(自定义:latest)。**
- **docker run -t -i ubuntu:15.10 /bin/bash**
- 　　　　**|_ -i:--interactive=false:打开STDIN，用于控制台交互。**
- 　　　　**|_ -t:--tty=false:分配tty设备，该可以支持终端登录，默认为false。**
- 　　　　**|_ -d:让容器在后台运行。**
- 　　　　**|_ -p:将容器内部使用的网络端口映射到我们使用的主机上。**
- 　　　　**|_ 注：如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像。**

------

- **# 执行nginx应用。**
- **docker run -d -p 8080:80 nginx**

------

- **# 关闭web服务端口**
- **docker stop ID/NAMES**

------

- **# 开启web服务端口**
- **docker start ID/NAMES**

------

- **# 根据容器ID 进入到指定容器。要有-i参数。**
- **docker attach ID/NAMES**

------

- **# 通过此命令进入未加入-it参数的已存在容器中添加-i-t参数进入**
- **docker container exec -it [containerID] /bin/bash**

------

- **# 停止容器运行， SIGTERM 信号以后，可以自行进行收尾清理工作，但也可以不理会这个信号**
- **bash container stop [containerID]**

------

- **# SIGKILL 信号，就会强行立即终止，那些正在进行中的操作会全部丢失。**
- **docker container kill**

------

- **# 终止容器**
- **docker container kill [containID]**

------

- **# 启动已经生成或者已经停止的容器**
- **docker container start [containerID]**

------

- **# 容器内使用命令,退出容器**
- **exit**

------

**其他**
------

- **# 下载，安装nginx测试服务**
- **docker pull nginx**

------

- **# 通过此条命令将，容器内的文件 copy到原服务器内的当前目录下。**
- **docker container cp [containID]:[/path/to/file] .**

------

- **# 去 hub.docker.com 或 cloud.docker.com 注册一个账户。然后，用下面的命令登录。**
- **docker login**

------

- **# 最后，发布 image 文件。**
- **docker push [username]/[repository]:[tag]**

------

- **# 构建容器镜像 -t 指定image名称，当前目录需要有Dockerfile文件。**
- **docker build -t [自定义名称]:[版本] .**

------

-  **# 生成容器**
- **docker container run -p 8000:3000 -it koa-demo /bin/bash**
- ​         **|_ -p参数：容器的 3000 端口映射到本机的 8000 端口。**
- ​         **|_ -it参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。**
- ​         **|_ koa-demo:0.0.1：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。**
- ​         **|_ /bin/bash：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。**

------

- **# 打包镜像**
- **docker save eb40dcf64078> /root/mydjango-save-1016.tar**
- **# 导入镜像**
- **docker load -i /root/mydjango-save-1016.tar**
- **docker load < /root/mydjango-save-1016.tar**
- **# 打 tag**
- **docker tag \**eb40dcf64078\** runoob/centos:dev**

------

 

**增**
-----

- **# 创建NFS数据卷** 
- **docker volume create**

 **创建命令**

    docker volume create --driver local \
    > --opt type=nfs \
    > --opt o=addr=服务端IP,vers=4,soft,timeo=180,bg,tcp,rw \
    > --opt device=服务端IP:/data

自定义名称

------

- **# 创建config配置文件**
- **docker config create 创建配置文件名称 本地配置文件路径名称** 


Docker run命令参数
==============

    docker run [OPTIONS] IMAGE [COMMAND] [ARG...]   
       
      -d, --detach=false         指定容器运行于前台还是后台，默认为false    
      -i, --interactive=false    打开STDIN，用于控制台交互   
      -t, --tty=false            分配tty设备，该可以支持终端登录，默认为false   
      -u, --user=""              指定容器的用户   
      -a, --attach=[]            登录容器（必须是以docker run -d启动的容器） 
      -w, --workdir=""           指定容器的工作目录  
      -c, --cpu-shares=0         设置容器CPU权重，在CPU共享场景使用   
      -e, --env=[]               指定环境变量，容器中可以使用该环境变量   
      -m, --memory=""            指定容器的内存上限   
      -P, --publish-all=false    指定容器暴露的端口   
      -p, --publish=[]           指定容器暴露的端口  
      -h, --hostname=""          指定容器的主机名   
      -v, --volume=[]            给容器挂载存储卷，挂载到容器的某个目录   
      --volumes-from=[]          给容器挂载其他容器上的卷，挂载到容器的某个目录 
      --cap-add=[]               添加权限，权限清单详见：http://linux.die.net/man/7/capabilities   
      --cap-drop=[]              删除权限，权限清单详见：http://linux.die.net/man/7/capabilities   
      --cidfile=""               运行容器后，在指定文件中写入容器PID值，一种典型的监控系统用法   
      --cpuset=""                设置容器可以使用哪些CPU，此参数可以用来容器独占CPU   
      --device=[]                添加主机设备给容器，相当于设备直通   
      --dns=[]                   指定容器的dns服务器   
      --dns-search=[]            指定容器的dns搜索域名，写入到容器的/etc/resolv.conf文件   
      --entrypoint=""            覆盖image的入口点   
      --env-file=[]              指定环境变量文件，文件格式为每行一个环境变量   
      --expose=[]                指定容器暴露的端口，即修改镜像的暴露端口   
      --link=[]                  指定容器间的关联，使用其他容器的IP、env等信息   
      --lxc-conf=[]              指定容器的配置文件，只有在指定--exec-driver=lxc时使用   
      --name=""                  指定容器名字，后续可以通过名字进行容器管理，links特性需要使用名字   
      --net="bridge"             容器网络设置: 
                                    bridge 使用docker daemon指定的网桥      
                                    host    //容器使用主机的网络   
                                    container:NAME_or_ID  >//使用其他容器的网路，共享IP和PORT等网络资源   
                                    none 容器使用自己的网络（类似--net=bridge），但是不进行配置  
      --privileged=false         指定容器是否为特权容器，特权容器拥有所有的capabilities   
      --restart="no"             指定容器停止后的重启策略: 
                                    no：容器退出时不重启   
                                    on-failure：容器故障退出（返回值非零）时重启  
                                    always：容器退出时总是重启   
      --rm=false                 指定容器停止后自动删除容器(不支持以docker run -d启动的容器)   
      --sig-proxy=true           设置由代理接受并处理信号，但是SIGCHLD、SIGSTOP和SIGKILL不能被代理 

# Dockerfile

**FROM**

功能为指定基础镜像，并且必须是第一条指令。
如果不以任何镜像为基础，那么写法为：FROM scratch。
同时意味着接下来所写的指令将作为镜像的第一层开始

语法：

```
FROM <image>
FROM <image>:<tag>
FROM <image>:<digest> 三种写法，其中<tag>和<digest> 是可选项，如果没有选择，那么默认值为latest
```

**RUN**
功能为运行指定的命令
RUN命令有两种格式

```
1. RUN <command>
2. RUN ["executable", "param1", "param2"]第一种后边直接跟shell命令
 在linux操作系统上默认 /bin/sh -c
 在windows操作系统上默认 cmd /S /C
```

第二种是类似于函数调用。
可将executable理解成为可执行文件，后面就是两个参数。

两种写法比对：

```
RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME
 RUN ["/bin/bash", "-c", "echo hello"]
注意：多行命令不要写多个RUN，原因是Dockerfile中每一个指令都会建立一层.
 多少个RUN就构建了多少层镜像，会造成镜像的臃肿、多层，不仅仅增加了构件部署的时间，还容易出错。
RUN书写时的换行符是\
```

**CMD**

功能为容器启动时要运行的命令
语法有三种写法

```
1. CMD ["executable","param1","param2"]
2. CMD ["param1","param2"]
3. CMD command param1 param2第三种比较好理解了，就时shell这种执行方式和写法
第一种和第二种其实都是可执行文件加上参数的形式

举例说明两种写法：
 CMD [ "sh", "-c", "echo $HOME" 
 CMD [ "echo", "$HOME" ]
补充细节：这里边包括参数的一定要用双引号，就是",不能是单引号。千万不能写成单引号。
原因是参数传递后，docker解析的是一个JSON array
```

**RUN & CMD**
不要把RUN和CMD搞混了。

```
RUN是构件容器时就运行的命令以及提交运行结果
CMD是容器启动时执行的命令，在构件时并不运行，构件时紧紧指定了这个命令到底是个什么样子
```

**LABEL**
功能是为镜像指定标签

语法：

```
LABEL <key>=<value> <key>=<value> <key>=<value> ... 一个Dockerfile种可以有多个LABEL，如下：
LABEL "com.example.vendor"="ACME Incorporated"
LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \
that label-values can span multiple lines." 但是并不建议这样写，最好就写成一行，如太长需要换行的话则使用\符号
```

如下：

```
LABEL multi.label1="value1" \
multi.label2="value2" \
other="value3" 
说明：LABEL会继承基础镜像种的LABEL，如遇到key相同，则值覆盖
```

**MAINTAINER**
指定作者
语法：

```
MAINTAINER <name> 
EXPOSE
功能为暴漏容器运行时的监听端口给外部
但是EXPOSE并不会使容器访问主机的端口
如果想使得容器与主机的端口有映射关系，必须在容器启动的时候加上 -P参数
```

**ENV**
功能为设置环境变量
语法有两种

```
1. ENV <key> <value>
2. ENV <key>=<value> ...两者的区别就是第一种是一次设置一个，第二种是一次设置多个
```

**ADD**
一个复制命令，把文件复制到景象中。
如果把虚拟机与容器想象成两台linux服务器的话，那么这个命令就类似于scp，只是scp需要加用户名和密码的权限验证，而ADD不用。

语法如下：

```
1. ADD <src>... <dest>
2. ADD ["<src>",... "<dest>"] 
<dest>路径的填写可以是容器内的绝对路径，也可以是相对于工作目录的相对路径
<src>可以是一个本地文件或者是一个本地压缩文件，还可以是一个url
```

如果把<src>写成一个url，那么ADD就类似于wget命令

如以下写法都是可以的：

```
ADD test relativeDir/ 
ADD test /relativeDir
ADD http://example.com/foobar /
尽量不要把<scr>写成一个文件夹，如果<src>是一个文件夹了，复制整个目录的内容,包括文件系统元数据
```

**COPY**
看这个名字就知道，又是一个复制命令
语法如下：

```
1. COPY <src>... <dest>
2. COPY ["<src>",... "<dest>"]与ADD的区别
COPY的<src>只能是本地文件，其他用法一致
```

**ENTRYPOINT**
功能是启动时的默认命令

语法如下：

```
1. ENTRYPOINT ["executable", "param1", "param2"]
2. ENTRYPOINT command param1 param2 
如果从上到下看到这里的话，那么你应该对这两种语法很熟悉啦。
第二种就是写shell
第一种就是可执行文件加参数
```

与CMD比较说明（这俩命令太像了，而且还可以配合使用）：

```
1. 相同点：
 只能写一条，如果写了多条，那么只有最后一条生效
 容器启动时才运行，运行时机相同

2. 不同点：
  ENTRYPOINT不会被运行的command覆盖，而CMD则会被覆盖
  如果我们在Dockerfile种同时写了ENTRYPOINT和CMD，并且CMD指令不是一个完整的可执行命令，那么CMD指定的内容将会作为ENTRYPOINT的参数
```

如下：

```
FROM ubuntu
ENTRYPOINT ["top", "-b"]
CMD ["-c"] 如果我们在Dockerfile种同时写了ENTRYPOINT和CMD，并且CMD是一个完整的指令，那么它们两个会互相覆盖，谁在最后谁生效
```

如下：

```
FROM ubuntu
ENTRYPOINT ["top", "-b"]
CMD ls -al那么将执行ls -al ,top -b不会执行。
```

**VOLUME**

可实现挂载功能，可以将内地文件夹或者其他容器种得文件夹挂在到这个容器种

语法为：

```
VOLUME ["/data"]    
说明：
   ["/data"]可以是一个JsonArray ，也可以是多个值。所以如下几种写法都是正确的
VOLUME ["/var/log/"]VOLUME /var/logVOLUME /var/log /var/db一般的使用场景为需要持久化存储数据时
容器使用的是AUFS，这种文件系统不能持久化数据，当容器关闭后，所有的更改都会丢失。
所以当数据需要持久化时用这个命令。
```

**USER**

设置启动容器的用户，可以是用户名或UID，所以，只有下面的两种写法是正确的

```
 USER daemo
 USER UID
注意：如果设置了容器以daemon用户去运行，那么RUN, CMD 和 ENTRYPOINT 都会以这个用户去运行
```

**WORKDIR**

语法：

```
WORKDIR /path/to/workdir 
设置工作目录，对RUN,CMD,ENTRYPOINT,COPY,ADD生效。如果不存在则会创建，也可以设置多次。
```

如：

```
WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwdpwd执行的结果是/a/b/c
```

WORKDIR也可以解析环境变量
如：

```
ENV DIRPATH /path
WORKDIR $DIRPATH/$DIRNAME
RUN pwdpwd的执行结果是/path/$DIRNAME
```

**ARG**
语法：

```
ARG <name>[=<default value>]设置变量命令，ARG命令定义了一个变量，在docker build创建镜像的时候，使用 --build-arg <varname>=<value>来指定参数
如果用户在build镜像时指定了一个参数没有定义在Dockerfile种，那么将有一个Warning
提示如下：
[Warning] One or more build-args [foo] were not consumed.    
```

我们可以定义一个或多个参数，如下：

```
FROM busybox
ARG user1
ARG buildno
```

也可以给参数一个默认值：

```
FROM busybox
ARG user1=someuser
ARG buildno=1
```

如果我们给了ARG定义的参数默认值，那么当build镜像时没有指定参数值，将会使用这个默认值

**ONBUILD**
语法：

```
ONBUILD [INSTRUCTION]这个命令只对当前镜像的子镜像生效。
比如当前镜像为A，在Dockerfile种添加：
ONBUILD RUN ls -al这个 ls -al 命令不会在A镜像构建或启动的时候执行

此时有一个镜像B是基于A镜像构建的，那么这个ls -al 命令会在B镜像构建的时候被执行。
```

**STOPSIGNAL**
语法：

```
STOPSIGNAL signalSTOPSIGNAL命令是的作用是当容器推出时给系统发送什么样的指令
```

**HEALTHCHECK**
容器健康状况检查命令
语法有两种：

```
1. HEALTHCHECK [OPTIONS] CMD command
2. HEALTHCHECK NONE第一个的功能是在容器内部运行一个命令来检查容器的健康状况
第二个的功能是在基础镜像中取消健康检查命令
```

[OPTIONS]的选项支持以下三中选项：

```
    --interval=DURATION 两次检查默认的时间间隔为30秒
    --timeout=DURATION 健康检查命令运行超时时长，默认30秒
    --retries=N 当连续失败指定次数后，则容器被认为是不健康的，状态为unhealthy，默认次数是3
```

**注意：
HEALTHCHECK命令只能出现一次，如果出现了多次，只有最后一个生效。**

CMD后边的命令的返回值决定了本次健康检查是否成功，具体的返回值如下：

```
0: success - 表示容器是健康的
1: unhealthy - 表示容器已经不能工作了
2: reserved - 保留值
```

例子：

```
HEALTHCHECK --interval=5m --timeout=3s \
CMD curl -f http://localhost/ || exit 1  
健康检查命令是：curl -f http://localhost/ || exit 1
两次检查的间隔时间是5秒
命令超时时间为3秒
```

![Dockerfile详解](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/4bdf2128fa547271a482544e49e47366.png)

