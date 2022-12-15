---
title: Tomcat认知梳理
categories: Linux技术
tags: [Tomcat]
date: 2020-03-11 16:25:00
---
# 第1章 tomcat简介

Tomcat是Apache软件基金会(Apache Software Foundation)的Jakarta项目中的一个核心项目,由Apache,Sun和其他一些公司及个人共同开发而成

Tomcat服务器是一个免费的开放源代码的Web应用服务器,属于轻量级应用服务器,在中小型系统和并发访问用户不是很多的场合下被普遍使用,是开发和调试JSP程序的首选.

Tomcat和Nginx,Apache(httpd),lighttpd等Web服务器一样,具有处理HTML页面的功能,另外它还是一个Server和JSP容器,独立的Server容器是Tomcat的默认模式,.不过,Tomcat处理静态HTML的能力不如Nginx/Apache服务器.
 其他JAVA容器还有resin,weblogic等

# 第2章 tomcat安装

## 1.环境介绍

## 2.部署java环境



```css
[root@sweb01 ~]# yum install java-1.8.0 -y
[root@sweb01 ~]# java -version
openjdk version "1.8.0_222"
OpenJDK Runtime Environment (build 1.8.0_222-b10)
OpenJDK 64-Bit Server VM (build 25.222-b10, mixed mode)
```

## 3.部署tomcat



```csharp
[root@sweb01 ~]# mkdir /data/soft -p
[root@sweb01 ~]# cd /data/soft/
[root@sweb01 /data/soft]# wget http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.43/bin/apache-tomcat-8.5.43.tar.gz
[root@sweb01 /data/soft]# tar zxf apache-tomcat-8.5.43.tar.gz -C /opt/
[root@sweb01 /data/soft]# cd /opt/
[root@sweb01 /opt]# ll
总用量 4
drwxr-xr-x 9 root root 4096 8月  10 16:37 apache-tomcat-8.5.43
[root@sweb01 /opt]# ln -s apache-tomcat-8.5.43 tomcat
[root@sweb01 /opt]# ll -h
总用量 4.0K
drwxr-xr-x 9 root root 4.0K 8月  10 16:37 apache-tomcat-8.5.43
lrwxrwxrwx 1 root root   20 8月  10 16:37 tomcat -> apache-tomcat-8.5.43
[root@sweb01 /opt]# echo 'export TOMCAT_HOME=/opt/tomcat'>>/etc/profile
[root@sweb01 /opt]# source /etc/profile
[root@sweb01 /opt]# /opt/tomcat/bin/version.sh    
Using CATALINA_BASE:   /opt/tomcat
Using CATALINA_HOME:   /opt/tomcat
Using CATALINA_TMPDIR: /opt/tomcat/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar
Server version: Apache Tomcat/8.5.43
Server built:   Jul 4 2019 20:53:15 UTC
Server number:  8.5.43.0
OS Name:        Linux
OS Version:     3.10.0-327.el7.x86_64
Architecture:   amd64
JVM Version:    1.8.0_222-b10
JVM Vendor:     Oracle Corporation
```

## 4.tomcat目录介绍

总目录



```csharp
[root@sweb01 ~]# cd /opt/tomcat/
[root@sweb01 /opt/tomcat]# tree -L 1
├── bin             #用以启动,关闭Tomcat或其他脚本功能的脚本(.bat和.sh)
├── conf            #用以配置Tomcat的XML及DTD文件
├── lib             #存放web应用能访问的JAR包
├── logs            #Catalina和其他web应用程序的日志文件
├── temp            #临时文件
├── webapps         #Web应用程序根目录
└── work            #用以产生有JSP编译出的Servlet的.java和.class文件
```

webapps目录



```csharp
[root@sweb01 /opt/tomcat]# cd webapps/
[root@sweb01 /opt/tomcat/webapps]# ll
总用量 8
drwxr-x--- 14 root root 4096 8月  10 16:37 docs          #tomcat帮助文档
drwxr-x---  6 root root   78 8月  10 16:37 examples      #web应用
drwxr-x---  5 root root   82 8月  10 16:37 host-manager  #管理
drwxr-x---  5 root root   97 8月  10 16:37 manager       #管理
drwxr-x---  3 root root 4096 8月  10 16:37 ROOT          #默认网站根目录
```

bin目录



```css
脚本            作用
startup.sh           开启tomcat脚本
shutdown.sh          关闭tomcat脚本
catalina.shtomcat    核心管理脚本,以后jvm优化参数及相关配置,修改tomcat启动参数
```

## 5.启动tomcat



```bash
[root@sweb01 /opt/tomcat/bin]# cd
[root@sweb01 ~]# /opt/tomcat/bin/startup.sh 
Using CATALINA_BASE:   /opt/tomcat
Using CATALINA_HOME:   /opt/tomcat
Using CATALINA_TMPDIR: /opt/tomcat/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar
Tomcat started.
```

## 6.检查和测试



```tsx
[root@sweb01 ~]# ps -ef|grep tomcat
root       2249      1  5 16:49 pts/1    00:00:01 /usr/bin/java -Djava.util.logging.config.file=/opt/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dignore.endorsed.dirs= -classpath /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar -Dcatalina.base=/opt/tomcat -Dcatalina.home=/opt/tomcat -Djava.io.tmpdir=/opt/tomcat/temp org.apache.catalina.startup.Bootstrap start
[root@sweb01 ~]# ss -lntup|grep tomcat
[root@sweb01 ~]# ss -lntup|grep java
tcp    LISTEN     0      100      :::8009                 :::*                   users:(("java",pid=2249,fd=54))
tcp    LISTEN     0      100      :::8080                 :::*                   users:(("java",pid=2249,fd=49))
tcp    LISTEN     0      1      ::ffff:127.0.0.1:8005                 :::*                   users:(("java",pid=2249,fd=69))
```

## 8.访问网站

![](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-0ef5effeee563a3d.png#mirages-width=2626&mirages-height=938&mirages-cdn-type=5)


## 9.查看tomcat日志



```ruby
[root@sweb01 ~]# tail -f /opt/tomcat/logs/catalina.out 
10-Aug-2019 16:50:03.831 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/opt/apache-tomcat-8.5.43/webapps/docs] has finished in [25] ms
10-Aug-2019 16:50:03.831 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/opt/apache-tomcat-8.5.43/webapps/examples]
10-Aug-2019 16:50:04.144 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/opt/apache-tomcat-8.5.43/webapps/examples] has finished in [313] ms
10-Aug-2019 16:50:04.144 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/opt/apache-tomcat-8.5.43/webapps/host-manager]
10-Aug-2019 16:50:04.164 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/opt/apache-tomcat-8.5.43/webapps/host-manager] has finished in [20] ms
10-Aug-2019 16:50:04.164 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deploying web application directory [/opt/apache-tomcat-8.5.43/webapps/manager]
10-Aug-2019 16:50:04.196 信息 [localhost-startStop-1] org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory [/opt/apache-tomcat-8.5.43/webapps/manager] has finished in [31] ms
10-Aug-2019 16:50:04.213 信息 [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
10-Aug-2019 16:50:04.219 信息 [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["ajp-nio-8009"]
10-Aug-2019 16:50:04.221 信息 [main] org.apache.catalina.startup.Catalina.start Server startup in 44249 ms
```

## 10.关闭命令



```bash
[root@sweb01 ~]# /opt/tomcat/bin/shutdown.sh 
Using CATALINA_BASE:   /opt/tomcat
Using CATALINA_HOME:   /opt/tomcat
Using CATALINA_TMPDIR: /opt/tomcat/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar
[root@sweb01 ~]# ss -lntup|grep java  
```

# 第4章 tomcat配置文件

## 1.tomcat配置文件介绍



```csharp
[root@sweb01 ~]# tree /opt/tomcat/conf/
/opt/tomcat/conf/
├── Catalina
│   └── localhost
├── catalina.policy
├── catalina.properties
├── context.xml
├── jaspic-providers.xml
├── jaspic-providers.xsd
├── logging.properties
├── server.xml              #主配置文件
├── tomcat-users.xml        #管理用户配置文件
├── tomcat-users.xsd
└── web.xml
```

## 2.tomcat管理

测试功能,生产环境不要用
 Tomcat管理功能用于对Tomcat自身以及部署在Tomcat的应用管理的web应用,在默认的情况下处于禁止状态的.如果需要开启这个功能,就要配置管理用户,即配置前面说过的tomcat-user.xml
 下面是命令集合:
 修改tomcat-users.xml



```xml
[root@sweb01 ~]# cat /opt/tomcat/conf/tomcat-users.xml    
<?xml version='1.0' encoding='utf-8'?>
<!--
     这是个优雅的注释
-->
<tomcat-users xmlns="http://tomcat.apache.org/xml"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
              version="1.0">
  <role rolename="admin-gui"/>
  <role rolename="host-gui"/>
  <role rolename="manager-gui"/>
  <user username="tomcat" password="tomcat" roles="admin-gui,host-gui,manager-gui"/>
</tomcat-users>
```

修改context.xml文件



```cpp
[root@sweb01 ~]# grep "10" /opt/tomcat/webapps/manager/META-INF/context.xml    
         allow="10\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
```

重新启动tomcat



```bash
[root@sweb01 ~]# /opt/tomcat/bin/shutdown.sh 
Using CATALINA_BASE:   /opt/tomcat
Using CATALINA_HOME:   /opt/tomcat
Using CATALINA_TMPDIR: /opt/tomcat/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar
[root@sweb01 ~]# /opt/tomcat/bin/startup.sh 
Using CATALINA_BASE:   /opt/tomcat
Using CATALINA_HOME:   /opt/tomcat
Using CATALINA_TMPDIR: /opt/tomcat/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar
Tomcat started.
```

## 3.访问网页测试

![img](https://upload-images.jianshu.io/upload_images/14248468-4cdf44cb4681fc8b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

# 第5章 tomcat主配置文件Server.xml详解

## 1.server.xml组件类别

   顶级组件:位于整个配置的顶层,如server
    容器类组件:可以包含其它组件的组件,如server,engine,host,context
    连接器组件:连接用户请求至tomcat,如connector
    被嵌套类组件:位于一个容器内,不能包含其它组件,如Valve,logger.



```xml
<server>
     <service>
     <connector />
     <engine>
     <host>
     <context></context>
     </host>
     <host>
     <context></context>
     </host>
     </engine>
     </service>
</server>
```

## 2.组件详情



```css
engine:核心容器组件,catalina引擎,负责通过connector接受用户请求,并处理请求,将请求转至对应的虚拟主机host
host:类似于httpd中的虚拟主机,一般而言支持基于FQDN的虚拟主机
context:定义一个应用程序,是一个最内层的容器类组件(不能再嵌套).篇日志context的主要目的指定对应的webapp的根目录,类似于httpd的alias,其还能为webapp指定额外的属性,如部署方式等.
connector:接收用户请求,类似于httpd的listen配置监听端口.
service(服务):将connector关联至engine,因此一个service内部可以有多个connector,但只能有一个引擎engine.service内部有两个connector,一个engine.因此一个service内部可以有多个connector.
server:表示一个运行于JVM中的tomcat实例
Valve:阀门,拦截请求并在将其转至对应的webapp前进行某种处理操作,可以用于任何容器中,比如记录日志(access log valve),基于IP做访问控制(remote address filter valve).
logger: 日志记录器,用于记录组件内部的状态信息,可以用于除context外的任何容器中.
realm:可以用于任意容器类的组件中,关联一个用户认证库,实现认证和授权.可以关联的认证库有两种:UserDatabaseRealm,MemoryRealm和JDBCRealm
UserDatabaseRealm:使用JNDI自定义的用户认证库.
MemoryRealm:认证信息定义在tomcat-users.xml中
JDBCRealm:认证信息定义在数据库中,并通过JDBC连接至数据库查找认证用户.
```

## 3.配置文件注释



```xml
tomcat配置文件注释

<?xml version='1.0' encoding='utf-8'?>
<!--
<Server>元素代表整个容器,是Tomcat实例的顶层元素.由org.apache.catalina.Server接口来定义.它包含一个<Service>元素.并且它不能做为任何元素的子元素.
    port指定Tomcat监听shutdown命令端口.终止服务器运行时,必须在Tomcat服务器所在的机器上发出shutdown命令.该属性是必须的.
    shutdown指定终止Tomcat服务器运行时,发给Tomcat服务器的shutdown监听端口的字符串.该属性必须设置
-->
<Server port="8005" shutdown="SHUTDOWN">
  <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
  <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
  <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
  <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
  <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />
  <GlobalNamingResources>
    <Resource name="UserDatabase" auth="Container"
              type="org.apache.catalina.UserDatabase"
              description="User database that can be updated and saved"
              factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
              pathname="conf/tomcat-users.xml" />
  </GlobalNamingResources>
  <!--service服务组件-->
  <Service name="Catalina">
    <!--
    connector：接收用户请求，类似于httpd的listen配置监听端口.
        port指定服务器端要创建的端口号，并在这个端口监听来自客户端的请求。
        address：指定连接器监听的地址，默认为所有地址（即0.0.0.0）
        protocol连接器使用的协议，支持HTTP和AJP。AJP（Apache Jserv Protocol）专用于tomcat与apache建立通信的， 在httpd反向代理用户请求至tomcat时使用（可见Nginx反向代理时不可用AJP协议）。
        minProcessors服务器启动时创建的处理请求的线程数
        maxProcessors最大可以创建的处理请求的线程数
        enableLookups如果为true，则可以通过调用request.getRemoteHost()进行DNS查询来得到远程客户端的实际主机名，若为false则不进行DNS查询，而是返回其ip地址
        redirectPort指定服务器正在处理http请求时收到了一个SSL传输请求后重定向的端口号
        acceptCount指定当所有可以使用的处理请求的线程数都被使用时，可以放到处理队列中的请求数，超过这个数的请求将不予处理
        connectionTimeout指定超时的时间数(以毫秒为单位)
    -->
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
    <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
    <!--engine,核心容器组件,catalina引擎,负责通过connector接收用户请求,并处理请求,将请求转至对应的虚拟主机host
        defaultHost指定缺省的处理请求的主机名，它至少与其中的一个host元素的name属性值是一样的
    -->
    <Engine name="Catalina" defaultHost="localhost">
      <!--Realm表示存放用户名，密码及role的数据库-->
      <Realm className="org.apache.catalina.realm.LockOutRealm">
        <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
               resourceName="UserDatabase"/>
      </Realm>
      <!--
      host表示一个虚拟主机
        name指定主机名
        appBase应用程序基本目录，即存放应用程序的目录.一般为appBase="webapps" ，相对于CATALINA_HOME而言的，也可以写绝对路径。
        unpackWARs如果为true，则tomcat会自动将WAR文件解压，否则不解压，直接从WAR文件中运行应用程序
        autoDeploy：在tomcat启动时，是否自动部署。
        xmlValidation：是否启动xml的校验功能，一般xmlValidation="false"。
        xmlNamespaceAware：检测名称空间，一般xmlNamespaceAware="false"。
      -->
      <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
        <!--
        Context表示一个web应用程序，通常为WAR文件
            docBase应用程序的路径或者是WAR文件存放的路径,也可以使用相对路径，起始路径为此Context所属Host中appBase定义的路径。
            path表示此web应用程序的url的前缀，这样请求的url为http://localhost:8080/path/****
            reloadable这个属性非常重要，如果为true，则tomcat会自动检测应用程序的/WEB-INF/lib 和/WEB-INF/classes目录的变化，自动装载新的应用程序，可以在不重启tomcat的情况下改变应用程序
        -->
        <Context path="" docBase="" debug=""/>
        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />
      </Host>
    </Engine>
  </Service>
</Server>
```

# 第6章 Tomcat端口解释

参考博客：



```cpp
https://www.jianshu.com/p/95d6ac54fc67
```

tomcat启动之后默认会启动3个端口，分别是8080,8009,8005

# 8080端口和8443端口



```xml
<Connector port="80" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" />
```

这个端口用于监听浏览器发送的请求，设置为80后可以直接使用域名访问，但是如果使用普通账户启动的tomcat，则不能使用小于1024的端口
 8443端口是用于https连接的，除了打开注释之外还需要有域名证书才可以

# 8009端口



```xml
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
```

Nginx反向代理tomcat的时候可以使用ajp协议反向代理到该端口
 不过我们常用的还是反向代理到8080。

# 8005端口



```xml
<Server port="8005" shutdown="SHUTDOWN">
```

tomcat监听的额关闭端口，就是说这个端口负责关闭tomcat的请求
 当执行shutdown.sh关闭tomcat就是链接8085端口执行shutdown命令

# 第7章 WEB站点部署

## 1.使用war包部署web站点

上线的代码有两种方式,第一种方式是直接将程序目录放在webapps目录下面,这种方式大家已经明白了,就不多说了,第二种方式是使用开发工具将程序打包成war包,然后上传到webapps目录下面,下面我们见识一下这种方式.

## 2.自定义默认网站目录



```csharp
[root@sweb01 /opt/tomcat/webapps]# ls
docs  examples  host-manager  manager  ROOT
[root@sweb01 /opt/tomcat/webapps]# rz      #上传软件包
[root@sweb01 /opt/tomcat/webapps]# ls      #上传完毕后tomcat会自动解压memtest.war包
docs  examples  host-manager  manager  memtest  memtest.war  ROOT
```

## 3.访问测试

浏览器访问：[http://10.0.1.9:8080/memtest/meminfo.jsp](https://links.jianshu.com/go?to=http%3A%2F%2F10.0.1.9%3A8080%2Fmemtest%2Fmeminfo.jsp)

![img](https://upload-images.jianshu.io/upload_images/14248468-80abed6733369b7d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1056/format/webp)



## 4.自定义默认网站目录

上面访问的的网址为:[http://10.0.1.9:8080/memtest/meminfo.jsp](https://links.jianshu.com/go?to=http%3A%2F%2F10.0.1.9%3A8080%2Fmemtest%2Fmeminfo.jsp)
 现在我想访问格式为:[http://10.0.1.9:8080/meminfo.jsp](https://links.jianshu.com/go?to=http%3A%2F%2F10.0.1.9%3A8080%2Fmeminfo.jsp)
 应该怎么修改呢？
 方法一：
 将meminfo.jsp或其他程序放在tomcat/webapps/ROOT目录下即可.因为默认网站根目录为tomcat/webapps/ROOT
 方法二：
 修改配置文件,操作命令如下:



```csharp
[root@sweb01 ~]# vim /opt/tomcat/conf/server.xml 
   148        <Host name="localhost"  appBase="webapps"
   149              unpackWARs="true" autoDeploy="true">
   150              <Context path="" docBase="/opt/tomcat/webapps/memtest" debug="0" reloadable="false" crossContext="true"/>
```

## 5.访问测试

![img](https://upload-images.jianshu.io/upload_images/14248468-d7cd653bbacfc642.png?imageMogr2/auto-orient/strip|imageView2/2/w/850/format/webp)

# 第x章 搭建jpress部署实践

## 1.安装配置mariadb数据库



```csharp
[root@sweb01 ~]# yum -y install mariadb mariadb-server
[root@sweb01 ~]# systemctl start mariadb.service
[root@sweb01 ~]# mysqladmin password 123456
[root@sweb01 ~]# mysql -uroot -p123456
> create database jpress DEFAULT CHARACTER SET utf8;
> grant all on jpress.* to jpress@'10.0.1.%' identified by '123456';
>  flush privileges;
```

## 2.上传jpress代码



```csharp
[root@sweb01 /data/soft]# ls
apache-tomcat-8.5.43.tar.gz  jpress-web-newest.war  memtest.war
[root@sweb01 /data/soft]# mv jpress-web-newest.war jpress.war
[root@sweb01 /data/soft]# ll /opt/tomcat/webapps/           
总用量 20324
drwxr-x--- 14 root root     4096 8月  10 16:37 docs
drwxr-x---  6 root root       78 8月  10 16:37 examples
drwxr-x---  5 root root       82 8月  10 16:37 host-manager
drwxr-x---  7 root root       96 8月  10 21:42 jpress
-rw-r--r--  1 root root 20797013 8月  10 15:39 jpress.war
drwxr-x---  2 root root       23 8月  10 21:41 logs
drwxr-x---  5 root root       97 8月  10 16:37 manager
drwxr-x---  3 root root       39 8月  10 17:36 memtest
-rw-r--r--  1 root root      643 8月  10 15:39 memtest.war
drwxr-x---  3 root root     4096 8月  10 17:41 ROOT
```

## 3.web页面配置jpress

打开浏览器：[http://10.0.1.9:8080/jpress/](https://links.jianshu.com/go?to=http%3A%2F%2F10.0.1.9%3A8080%2Fjpress%2F)

![img](https://upload-images.jianshu.io/upload_images/14248468-59cee70dabc96a21.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-c3300c0c77bec7f0.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-9b80a111231a3e23.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


 重启一下tomcat





```csharp
[root@sweb01 ~]# /opt/tomcat/bin/startup.sh
[root@sweb01 ~]# /opt/tomcat/bin/shutdown.sh   
```

后台登陆页面



![img](https://upload-images.jianshu.io/upload_images/14248468-42fb54294309015d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-a580588b1400d7d9.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



测试写一篇文章并上传附件



![img](https://upload-images.jianshu.io/upload_images/14248468-09344890f016171d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


 上传文件的路径



```csharp
[root@sweb01 ~]# ll /opt/tomcat/webapps/jpress/attachment/20190810/
总用量 16
-rw-r----- 1 root root 7630 8月  10 22:31 55f65d452e9b4fdb99a09f0c68532f6a_780x240.jpeg
-rw-r----- 1 root root 4430 8月  10 22:31 55f65d452e9b4fdb99a09f0c68532f6a.jpeg
```

文章内容在数据库的位置：



```cpp
MariaDB [jpress]> select * from  jpress.jpress_content\G
*************************** 1. row ***************************
              id: 1
           title: 第一篇博客
            text: <p><img src="/jpress/attachment/20190810/55f65d452e9b4fdb99a09f0c68532f6a.jpeg" alt="" width="256" height="256"></p> 
<p>测试页面</p>
         summary: NULL
         link_to: NULL
 markdown_enable: 0
       thumbnail: NULL
          module: article
           style: NULL
         user_id: 1
          author: NULL
      user_email: NULL
         user_ip: NULL
      user_agent: NULL
       parent_id: NULL
       object_id: NULL
    order_number: 0
          status: normal
         vote_up: 0
       vote_down: 0
            rate: NULL
      rate_count: 0
           price: 0.00
  comment_status: NULL
   comment_count: 0
    comment_time: NULL
      view_count: 0
         created: 2019-08-10 22:31:34
        modified: 2019-08-10 22:31:34
            slug: 第一篇博客
            flag: NULL
             lng: NULL
             lat: NULL
   meta_keywords: NULL
meta_description: NULL
         remarks: NULL
1 row in set (0.00 sec)
```

# 第8章 zabbix监控tomcat

## 1.tomcat服务器安装zabbix-agent服务



```ruby
[root@sweb01 ~]# rpm -ivh https://mirrors.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm
[root@sweb01 ~]# yum install zabbix-agent -y
[root@sweb01 ~]# cat /etc/zabbix/zabbix_agentd.conf    
PidFile=/var/run/zabbix/zabbix_agentd.pid
LogFile=/var/log/zabbix/zabbix_agentd.log
LogFileSize=0
Server=10.0.1.61
ServerActive=127.0.0.1
Hostname=Zabbix server
Include=/etc/zabbix/zabbix_agentd.d/*.conf
[root@sweb01 ~]# systemctl restart zabbix-agent.service 
```

## 2.tomcat服务器修改配置文件开启远程监控功能

注意！建议把下面的参数放在最前面



```bash
[root@sweb01 ~]# head -7 /opt/tomcat/bin/catalina.sh  
#!/bin/sh
CATALINA_OPTS="$CATALINA_OPTS
-Dcom.sun.management.jmxremote 
-Dcom.sun.management.jmxremote.port=12345  
-Dcom.sun.management.jmxremote.authenticate=false 
-Dcom.sun.management.jmxremote.ssl=false 
-Djava.rmi.server.hostname=10.0.1.9"
```

重启tomcat



```csharp
[root@sweb01 ~]# /opt/tomcat/bin/shutdown.sh 
[root@sweb01 ~]# /opt/tomcat/bin/startup.sh 
```

## 3.修改hosts解析



```csharp
[root@sweb01 ~]# tail -1 /etc/hosts
10.0.1.9  sweb01
```

## 4.检查进程和端口号



```tsx
[root@sweb01 ~]# ps -ef|grep java           
root       3790      1 99 23:37 pts/0    00:00:01 /usr/bin/java -Djava.util.logging.config.file=/opt/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dorg.apache.catalina.security.SecurityListener.UMASK=0027 -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=12345 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=10.0.1.9 -Dignore.endorsed.dirs= -classpath /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar -Dcatalina.base=/opt/tomcat -Dcatalina.home=/opt/tomcat -Djava.io.tmpdir=/opt/tomcat/temp org.apache.catalina.startup.Bootstrap start
root       3810   1834  0 23:37 pts/0    00:00:00 grep -E --color=auto --color=auto java
[root@sweb01 ~]# ss -lntup|grep 12345
tcp    LISTEN     0      50       :::12345                :::*                   users:(("java",pid=3790,fd=20))
```

## 5.zabbi服务器上的配置操作

安装java



```css
[root@m01 ~]# yum install java-1.8.0 -y
[root@m01 ~]# java  -version
openjdk version "1.8.0_222"
OpenJDK Runtime Environment (build 1.8.0_222-b10)
OpenJDK 64-Bit Server VM (build 25.222-b10, mixed mode)
```

安装并启动zabbix-java-gateway服务



```csharp
[root@m01 ~]# yum install zabbix-java-gateway.x86_64 -y
[root@m01 ~]# systemctl start zabbix-java-gateway.service
```

修改zabbix_server.conf配置文件



```cpp
[root@m01 ~]# grep "Java" /etc/zabbix/zabbix_server.conf|grep -v "#"
JavaGateway=127.0.0.1
JavaGatewayPort=10052
StartJavaPollers=5
```

重启zabbix服务



```csharp
[root@m01 ~]# systemctl restart httpd
[root@m01 ~]# systemctl restart zabbix-server.service 
[root@m01 ~]# systemctl restart zabbix-java-gateway.service 
```

zabbix网页操作



![img](https://upload-images.jianshu.io/upload_images/14248468-95909378fc1ef024.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-9fca375ac8352343.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-d31e04fe5d981f38.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-8bb4b9973e65ac5d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

# 第9章 tomcat多实例及反向代理

## 1.tomcat多实例介绍

其本质就是复制多个tomcat目录，然后修改为不同的端口并启动
 代码一致，但是公用一个数据库

## 2.复制目录



```ruby
[root@sweb01 ~]# cd /opt/
[root@sweb01 /opt]# cp -a apache-tomcat-8.5.43 tomcat_01
[root@sweb01 /opt]# cp -a apache-tomcat-8.5.43 tomcat_02
```

## 3.修改配置文件

修改端口号



```csharp
[root@sweb01 /opt]# sed -i 's#8005#8006#g'  tomcat_01/conf/server.xml 
[root@sweb01 /opt]# sed -i 's#8009#8010#g'  tomcat_01/conf/server.xml
[root@sweb01 /opt]# sed -i 's#8080#8081#g'  tomcat_01/conf/server.xml 
[root@sweb01 /opt]# 
[root@sweb01 /opt]# sed -i 's#8005#8007#g'  tomcat_02/conf/server.xml 
[root@sweb01 /opt]# sed -i 's#8009#8011#g'  tomcat_02/conf/server.xml
[root@sweb01 /opt]# sed -i 's#8080#8082#g'  tomcat_02/conf/server.xml
```

删除自定义的配置路径



```xml
150             <Context path="" docBase="/opt/tomcat_02/webapps/memtest" debug="0" reloadable="false" crossContext="true"/>
```

修改监听端口



```csharp
[root@sweb01 ~]# grep "1234" /opt/tomcat_01/bin/catalina.sh  
-Dcom.sun.management.jmxremote.port=12345 
[root@sweb01 ~]# grep "1234" /opt/tomcat_02/bin/catalina.sh               
-Dcom.sun.management.jmxremote.port=12346 
```

## 4.启动多实例



```bash
[root@sweb01 /opt/tomcat_02/conf]# /opt/tomcat_01/bin/startup.sh 
Using CATALINA_BASE:   /opt/tomcat_01
Using CATALINA_HOME:   /opt/tomcat_01
Using CATALINA_TMPDIR: /opt/tomcat_01/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat_01/bin/bootstrap.jar:/opt/tomcat_01/bin/tomcat-juli.jar
Tomcat started.
[root@sweb01 ~]# /opt/tomcat_02/bin/startup.sh 
Using CATALINA_BASE:   /opt/tomcat_02
Using CATALINA_HOME:   /opt/tomcat_02
Using CATALINA_TMPDIR: /opt/tomcat_02/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/tomcat_02/bin/bootstrap.jar:/opt/tomcat_02/bin/tomcat-juli.jar
Tomcat started.
```

## 5.查看服务是否启动



```ruby
[root@sweb01 ~]# ss -lntup|grep java
tcp    LISTEN     0      100      :::8010                 :::*                   users:(("java",pid=5874,fd=57))
tcp    LISTEN     0      100      :::8011                 :::*                   users:(("java",pid=6076,fd=57))
tcp    LISTEN     0      100      :::8081                 :::*                   users:(("java",pid=5874,fd=53))
tcp    LISTEN     0      100      :::8082                 :::*                   users:(("java",pid=6076,fd=53))
tcp    LISTEN     0      50       :::12345                :::*                   users:(("java",pid=5874,fd=20))
tcp    LISTEN     0      50       :::12346                :::*                   users:(("java",pid=6076,fd=20))
tcp    LISTEN     0      50       :::36383                :::*                   users:(("java",pid=5874,fd=23))
tcp    LISTEN     0      50       :::59493                :::*                   users:(("java",pid=5874,fd=19))
tcp    LISTEN     0      1      ::ffff:127.0.0.1:8006                 :::*                   users:(("java",pid=5874,fd=77))
tcp    LISTEN     0      1      ::ffff:127.0.0.1:8007                 :::*                   users:(("java",pid=6076,fd=77))
tcp    LISTEN     0      50       :::46535                :::*                   users:(("java",pid=6076,fd=23))
tcp    LISTEN     0      50       :::46471                :::*                   users:(("java",pid=6076,fd=19)
```

## 6.浏览器测试多实例

![img](https://upload-images.jianshu.io/upload_images/14248468-1226658996c2c39d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1010/format/webp)



![img](https://upload-images.jianshu.io/upload_images/14248468-e97046bc91469475.png?imageMogr2/auto-orient/strip|imageView2/2/w/938/format/webp)

# 第10章 tomcat集群配置

## 1.实验环境准备

a.多实例tomcat 8081 8082
 b.数据库使用共有的db 10.0.1.9:3306
 c.代码使用各自目录的jpress
 d.使用nginx反向代理到后端的2个端口

## 2.安装配置nginx



```csharp
[root@sweb01 ~]# cat /etc/yum.repos.d/nginx.repo
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
[root@sweb01 ~]# yum install nginx -y
```

## 3.创建代理配置文件



```php
[root@sweb01 /etc/nginx/conf.d]# cat /etc/nginx/conf.d/proxy.conf 
upstream java {
    server 10.0.1.9:8081;
    server 10.0.1.9:8082;
}
server {
    listen       80;
    server_name  www.oldzhang.com;
    root   html;
    index  index.html index.htm;
    location / {
        proxy_pass http://java;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 4.检查并启动nginx



```csharp
[root@sweb01 /etc/nginx/conf.d]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@sweb01 ~]# systemctl start nginx
```

## 5.网页访问

![img](https://upload-images.jianshu.io/upload_images/14248468-3f39b2522e14f0a3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

# 第11章 tomcat安全优化

降权启动



```ruby
cp -a apache-tomcat-8.0.27 /home/zy/tomcat
chown -R  zy.zy /home/zy/tomcat
[zy@CentOS7 ~]$ ./tomcat/bin/startup.sh
```

telnet管理端口保护
 ajp连接端口保护
 禁用管理端

# 第x章 tomcat性能优化



```bash
#屏蔽dns查询enableLookups="false";
vim /application/tomcat/conf/server.xml
    <Connector  port="8081" protocol="HTTP/1.1"
               connectionTimeout="6000" enableLookups="false" acceptCount="800"
               redirectPort="8443" />
```

# 第12章 jvm调优

Tomcat最吃内存，只要内存足够，这只猫就跑的很快。
 如果系统资源有限，那就需要进行调优，提高资源使用率。
 优化catalina.sh配置文件。在catalina.sh配置文件中添加以下代码：



```cpp
JAVA_OPTS="-Djava.awt.headless=true -Dfile.encoding=UTF-8 -server -Xms1024m -Xmx1024m -XX:NewSize=512m -XX:MaxNewSize=512m -XX:PermSize=512m -XX:MaxPermSize=512m"
server:一定要作为第一个参数，在多个CPU时性能佳
-Xms：初始堆内存Heap大小，使用的最小内存,cpu性能高时此值应设的大一些
-Xmx：初始堆内存heap最大值，使用的最大内存
上面两个值是分配JVM的最小和最大内存，取决于硬件物理内存的大小，建议均设为物理内存的一半。
-XX:PermSize:设定内存的永久保存区域
-XX:MaxPermSize:设定最大内存的永久保存区域
-XX:MaxNewSize:
-Xss 15120 这使得JBoss每增加一个线程（thread)就会立即消耗15M内存，而最佳值应该是128K,默认值好像是512k.
+XX:AggressiveHeap 会使得 Xms没有意义。这个参数让jvm忽略Xmx参数,疯狂地吃完一个G物理内存,再吃尽一个G的swap。
-Xss：每个线程的Stack大小
-verbose:gc 现实垃圾收集信息
-Xloggc:gc.log 指定垃圾收集日志文件
-Xmn：young generation的heap大小，一般设置为Xmx的3、4分之一
-XX:+UseParNewGC ：缩短minor收集的时间
-XX:+UseConcMarkSweepGC ：缩短major收集的时间
```

# 第13章 Tomcat启动慢解决

没优化之前的启动时间



```csharp
[root@sweb01 ~]# tail -1 /opt/tomcat/logs/catalina.out  
12-Aug-2019 19:59:30.207 信息 [main] org.apache.catalina.startup.Catalina.start Server startup in 66131 ms
```

解决方法



```csharp
[root@sweb01 ~]# find / -name "java.security"
/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64/jre/lib/security/java.security
[root@sweb01 ~]# vim /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64/jre/lib/security/java.security 
[root@sweb01 ~]# sed -n '117p' /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64/jre/lib/security/java.security               
securerandom.source=file:/dev/urandom
```

优化后的启动时间



```csharp
[root@sweb01 ~]# tail -1 /opt/tomcat/logs/catalina.out  
12-Aug-2019 20:11:16.619 信息 [main] org.apache.catalina.startup.Catalina.start Server startup in 2606 ms
```

# 第14章 打包和解压war包

使用jkd二进制包自带的jar命令可以打包和解压war包

解压命令
 /opt/jdk1.8.0_60/bin/jar -xvf jpress-web-newest.war

打包命令
 /opt/jdk1.8.0_60/bin/jar  -cvfM0 jpress.war ./

# 第15章 ansible启动tomcat

参考博客：
 https://www.jianshu.com/p/91014c311c09

如果直接使用ansible的shell模块启动tomcat会发现并不能启动成功，需要使用chdir切换工作目录并结合nohub放在后台启动
 下面是一个简单的测试剧本



```bash
[root@m01 ~/tomcat]# cat tomcat.yml 
- hosts: tomcat
  tasks:

  - name: 01-start-tomcat
    shell: chdir=/opt/tomcat/bin nohup ./startup.sh start &

  - name: 02-copy-jpress
    copy: 
      src: /root/tomcat/jpress.war
      dest: /opt/tomcat/webapps
```



