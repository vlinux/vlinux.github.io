---
title: Jenkins（CA/CI）部署
categories: DevOps
tags: [Jenkins,CA,CI,Maven,Pipeline项目,回滚脚本]
date: 2020-03-10 20:13:00
---
### Jenkins

官网

[https://jenkins.io](https://jenkins.io/)

Jenkins 是一个开源软件项目，是基于 Java 开发的一种持续集成工具，用于监控持续重复的工作，指在提供一个开
放易用的软件平台，使软件的持续集成变成可能。



#### 01. 安装准备

| 主机    | IP         | 内存 | 硬盘 |
| ------- | ---------- | ---- | ---- |
| Jenkins | 10.0.0.201 | 2G   | 50G+ |
| nexus   | 10.0.0.202 | 2G   | 50G+ |



#### 02 . 安装 Jdk 和 Jenkins

上传 JDK 和 Jenkins 安装包，使用 rpm ‐ivh 进行安装，安装完 JDK 运行 Java 测试是否安装成功

```
[root@jenkins ~]# ll
-rw-r--r-- 1 root root 170023183 2018-08-14 11:05 jdk-8u181-linux-x64.rpm
-rw-r--r-- 1 root root 74141787 2018-08-13 20:23 jenkins-2.99-1.1.noarch.rpm
[root@jenkins ~]# rpm -ivh jdk-8u181-linux-x64.rpm 
warning: jdk-8u181-linux-x64.rpm: Header V3 RSA/SHA256 Signature, key ID ec551f03: NOKEY
Preparing... ################################# [100%]
Updating / installing...
1:jdk1.8-2000:1.8.0_181-fcs ################################# [100%]
Unpacking JAR files...
 tools.jar...
 plugin.jar...
 javaws.jar...
 deploy.jar...
 rt.jar...
 jsse.jar...
 charsets.jar...
 localedata.jar...
[root@jenkins ~]# rpm -ivh jenkins-2.99-1.1.noarch.rpm 
warning: jenkins-2.99-1.1.noarch.rpm: Header V4 DSA/SHA1 Signature, key ID d50582e6: NOKEY
Preparing... ################################# [100%]
Updating / installing...
1:jenkins-2.99-1.1 ################################# [100%]
```



#### 03 . 配置 Jenkins

```
#启动用户修改为root
[root@jenkins ~]# grep 'root' /etc/sysconfig/jenkins
JENKINS_USER="root"


#启动
[root@jenkins ~]# systemctl start jenkins


#查看端口
[root@jenkins ~]# netstat -lntp | grep 8080
tcp6 0 0 :::8080 ::: LISTEN 8504/java


#查看进程
[root@jenkins ~]# ps aux |grep jenkins
root 8504 8.8 11.6 2618104 235556 ? Ssl 15:29 0:25 /etc/alternatives/java -Dcom.sun.akuma.Daemon=daemonized -Djava.awt.headless=true -DJENKINS_HOME=/var/lib/jenkins -jar /usr/lib/jenkins/jenkins.war --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war --daemon --httpPort=8080 --debug=5 --handlerCountMax=100 --handlerCountMaxIdle=20


#访问页面进行配置
http://10.0.0.201:8080


#查看密码
[root@jenkins ~]# cat /var/lib/jenkins/secrets/initialAdminPassword
e8e69c5646cc4f3b88315fb20156ce6c
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_88.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_89.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_90.png)

修改密码

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_91.png)



#### 04. 插件安装

```
#插件安装（跳过安装插件，直接上传插件到目录）
1.自动安装可选插件
2.手动下载插件上传安装
3.插件放入插件目录

[root@jenkins ~]# cd /var/lib/jenkins/
[root@jenkins jenkins]# ll         #jobs为每次构建后构建的结果目录，plugins为插件目录
总用量 36
‐rw‐‐‐‐‐‐‐ 1 root root 1822 8月 26 00:35 config.xml
‐rw‐‐‐‐‐‐‐ 1 root root 156 8月 26 00:31 hudson.model.UpdateCenter.xml
‐rw‐‐‐‐‐‐‐ 1 root root 1712 8月 26 00:32 identity.key.enc
‐rw‐‐‐‐‐‐‐ 1 root root 94 8月 26 00:32 jenkins.CLI.xml
‐rw‐r‐‐r‐‐ 1 root root 4 8月 26 00:35 jenkins.install.InstallUtil.lastExecVersion
‐rw‐r‐‐r‐‐ 1 root root 4 8月 26 00:35 jenkins.install.UpgradeWizard.state
drwxr‐xr‐x 2 root root 6 8月 26 00:31 jobs
drwxr‐xr‐x 3 root root 18 8月 26 00:32 logs
‐rw‐‐‐‐‐‐‐ 1 root root 907 8月 26 00:32 nodeMonitors.xml
drwxr‐xr‐x 2 root root 6 8月 26 00:32 nodes
drwxr‐xr‐x 2 root root 6 8月 26 00:31 plugins
‐rw‐‐‐‐‐‐‐ 1 root root 64 8月 26 00:31 secret.key
‐rw‐r‐‐r‐‐ 1 root root 0 8月 26 00:31 secret.key.not‐so‐secret
drwx‐‐‐‐‐‐ 4 root root 4096 8月 26 00:32 secrets
drwxr‐xr‐x 2 root root 23 8月 26 00:32 userContent
drwxr‐xr‐x 3 root root 18 8月 26 00:34 users


#上传插件包解压到plugins
[root@jenkins jenkins]# cd plugins/
[root@jenkins plugins]# ll
total 160580
-rw-r--r-- 1 root root 164431230 2018-08-14 21:00 plugins.tar.gz
[root@jenkins plugins]# tar xf plugins.tar.gz
[root@jenkins plugins]# rm -f plugins.tar.gz
[root@jenkins plugins]# mv plugins/ ./
[root@jenkins plugins]# rm -rf plugins/


#重启生效
[root@jenkins plugins]# systemctl restart jenkins.service
```

4.jenkins 主要的目录

```
/usr/lib/jenkins/：          #jenkins安装目录，WAR包会放在这里
/etc/sysconfig/jenkins：        #jenkins配置文件，"端口"，"JENKINS_HOME"等都可以在这里配置
/var/lib/jenkins/：          #默认的JENKINS_HOME
/var/log/jenkins/jenkins.log：    #Jenkins日志文件
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_92.png)



#### 05. 创建项目

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_93.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_94.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_95.png)

进行构建

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_96.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_97.png)

进入控制台

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_98.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_99.png)

```
[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job
total 0
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_100.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_101.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_102.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_103.png)

```
[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job
total 0
-rw-r--r-- 1 root root 0 2019-11-19 16:19 test.txt
```



#### 06. Jenkins 获取 Git 源代码

这里我们有码云导入一个 HTML 页面的监控平台到 gitlab 仓库，打开码云，找到一个大转盘项目，将其代码路径进行复制

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_104.png)

在 Gitlab 上面新创建一个项目仓库。将源代码导入进去。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_105.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_106.png)

dev 用户端配置从 git 获取代码。

```
[root@dev ~]# git clone git@10.0.0.100:OPS/dzp.git 
Cloning into 'dzp'... 
remote: Counting objects: 19, done. 
remote: Compressing objects: 100% (15/15), done. 
remote: Total 19 (delta 2), reused 0 (delta 0) 
Receiving objects: 100% (19/19), 104.36 KiB | 0 bytes/s, done. 
Resolving deltas: 100% (2/2), done. 
[root@dev ~]# ll 
drwxr-xr-x 6 root root 87 Nov 19 20:41 dzp 
drwxr-xr-x 3 root root 52 Nov 17 17:21 git_test 
[root@dev ~]# cd dzp/ 
[root@dev ~/dzp]# ll 
total 8 
drwxr-xr-x 2 root root 25 Nov 19 20:41 css 
drwxr-xr-x 2 root root 84 Nov 19 20:41 img 
drwxr-xr-x 2 root root 41 Nov 19 20:41 js 
-rw-r--r-- 1 root root 2170 Nov 19 20:41 lottery.html 
-rw-r--r-- 1 root root 113 Nov 19 20:41 README.md 


#dev用户修改了源代码



[root@dev ~/dzp]# vim lottery.html 
[root@dev ~/dzp]# 
[root@dev ~/dzp]# 
[root@dev ~/dzp]# git commit -am "modify html" 
[master 1e2125e] modify html 
1 file changed, 5 insertions(+), 5 deletions(-) 
[root@dev ~/dzp]# git push -u origin master 
Counting objects: 5, done. 
Compressing objects: 100% (3/3), done. 
Writing objects: 100% (3/3), 365 bytes | 0 bytes/s, done. 
Total 3 (delta 2), reused 0 (delta 0) 
To git@10.0.0.100:OPS/dzp.git 
3935eb7..1e2125e master -> master 
Branch master set up to track remote branch master from origin.
```

Jenkins 配置从 Git 获取代码，由于我们 dev 用户不是配置在 Jenkins 上，所以需认证即可下载代码。进行面认证方法，需要配置 deploy key

```
[root@jenkins ~]# ssh-keygen -t rsa 
Generating public/private rsa key pair. 
Enter file in which to save the key (/root/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_rsa. 
Your public key has been saved in /root/.ssh/id_rsa.pub. 
The key fingerprint is: 
SHA256:1z+H0mc9hUwOWiO3mFOGswuOW9jNr2bmOwRE50eECQU root@jenkins 
The key's randomart image is: 
+---[RSA 2048]----+ 
| .E+o+o | 
| .ooo | 
| . = O . | 
| . # B . | 
| S.B o + .| 
| = =.o o .o| 
| o +.+ . =.=| 
| o =. . =.| 
| . =++. | 
+----[SHA256]-----+ 
[root@jenkins ~]# cat .ssh/ 
id_rsa id_rsa.pub known_hosts 
[root@jenkins ~]# cat .ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCY3WrgTCmZeapjV9Tx6GmmHX+SVigxHnz37f8iUUjAexmR2/gSAjvsY3ez5iITmamf2I62+5n+gx9f1OPXUsUAzOApD6R8zHmvzQ/yheDO1y5XHcmRtklN1HpOq2g0PChrRjrr4QcXITKafU30OjTu4Fx3vndxqD/3RpHD3IVSZGAsiJC6T+C/PYW8YfeLNEAA7O3QKskjuSkoH2PZyF7qQgwjxfudno1g3qLQkmB+CjFFwgj0vkam/W4OwUwapC1O591CU7+VmSWL/z8uMTpSV+FQkyH04qS/HSs27pfpAI0wpBB/gBxx+wU8FCUh++2SWpuJR8/TPqkS8YKhfl+p root@jenkins  #复制该串代码
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_107.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_108.png)

Jenkins 配置从 Git 获取代码，配置好后保存

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_109.png)



#### 07. 立即构建获取源代码

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_110.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_111.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_112.png)

```
Jenkins服务器查看代码


[root@jenkins ~]# ll /var/lib/jenkins/workspace/freestyle-job/
total 8
drwxr-xr-x 2 root root 25 2019-11-19 21:12 css
drwxr-xr-x 2 root root 84 2019-11-19 21:12 img
drwxr-xr-x 2 root root 41 2019-11-19 21:12 js
-rw-r--r-- 1 root root 2205 2019-11-19 21:12 lottery.html
-rw-r--r-- 1 root root 113 2019-11-19 21:12 README.md
```



#### 08. Jenkins 代码推送到 Web

```
#写一个脚本把从git仓库里获取的代码上传到web服务器站点目录下



[root@jenkins ~]# mkdir -p /server/script 
[root@jenkins ~]# cd /server/script 
[root@jenkins script]# vim deploy.sh 
[root@jenkins script]# cat deploy.sh 
#!/bin/sh 
Date=$(date +%s) 
Code_Dir=/var/lib/jenkins/workspace/freestyle-job 
Web_Dir=/code 
Ip=10.0.0.202 
Code_Tar() { 
 cd Code_Dir && tar zcf /opt/web_Code_Dir && tar zcf /opt/web_{Date}.tar.gz ./ 
} 
Scp_Code_Web() { 
 scp /opt/web_Date.tar.gzroot@Date.tar.gzroot@{Ip}:/opt 
} 
Code_Tar_Xf() { 
 ssh root@Ip " cd /opt && mkdir web_Ip " cd /opt && mkdir web_Date && tar xf web_{Date}.tar.gz -C web_{Date}.tar.gz -C web_Date " 
} 
Ln_Html() { 
 ssh root@Ip"rm−rfIp"rm−rfWeb_Dir && ln -s /opt/web_$Date /code " 
} 
Code_Tar; 
Scp_Code_Web; 
Code_Tar_Xf; 
Ln_Html 




#分发公钥

[root@jenkins script]# ssh-copy-id -i /root/.ssh/id_rsa.pub root@10.0.0.202 
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub" 
The authenticity of host '10.0.0.202 (10.0.0.202)' can't be established. 
ECDSA key fingerprint is SHA256:K8NapPzlTxhCMXC/bRFTtI9mdwr63FH4Wu7psrXXqBs. 
ECDSA key fingerprint is MD5:73:9f:67:f1:5d:39:10:3d:b2:be:f7:c1:66:aa:00:6e. 
Are you sure you want to continue connecting (yes/no)? yes 
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed 
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys 
root@10.0.0.202's password: 


Number of key(s) added: 1 


Now try logging into the machine, with: "ssh 'root@10.0.0.202'" 
and check to make sure that only the key(s) you wanted were added. 


[root@jenkins script]# ssh root@10.0.0.202 
Last login: Tue Nov 19 15:10:55 2019 from 10.0.0.1 
[root@nexus ~]# logout 
Connection to 10.0.0.202 closed. 


#Jenkins上面添加脚本进行构建
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_113.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_114.png)

查看网站是否更新成功

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_115.png)



#### 09. 配置自动触发构建









# 需要设置安全令牌 Secret token





![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_116.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_117.png)

Gitlab 上面操作

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_118.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_119.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_120.png)



#### 10. 测试是否触发

```
#dev用户修改源代码后进行推送测试是否自动触发


[root@dev ~/dzp]# vim lottery.html 
[root@dev ~/dzp]# git commit -am "modify html test"
[master d8849aa] modify html test
1 file changed, 3 insertions(+), 3 deletions(-)
[root@dev ~/dzp]# git push -u origin master
Counting objects: 5, done.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 303 bytes | 0 bytes/s, done.
Total 3 (delta 2), reused 0 (delta 0)
To git@10.0.0.100:OPS/dzp.git
1e2125e..d8849aa master -> master
Branch master set up to track remote branch master from origin.
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_121.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_122.png)



#### 11. 返回构建状态

```
#Jenkins配置Jenkins返回构建状态到Gitlab


#先获得gitlab的token
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_123.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_124.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_125.png)

将获得的 token 值进行复制备用

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_126.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_127.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_128.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_129.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_130.png)

进行测试

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_131.png)

添加构建后操作

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_132.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_133.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_134.png)

检查结果

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_135.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_136.png)



# 创建 Maven 项目

Maven 是一个项目管理和综合工具。Maven 提供给开发人员构建一个完整的生命周期框架。
开发团队可以自动完成该项目的基础设施建设，Maven 使用标准的目录结构和默认构建生命周期。
Apache 的开源项目主要服务于 Java 平台的构建、依赖管理、项目管理。
Project Object Model，项目对象模型。通过 xml 格式保存的 pom.xml 文件。该文件用于管理：源代码、配置文
件、开发者的信息和角色、问题追踪系统、组织信息、项目授权、项目的 url、项目的依赖关系等等。该文件是由开发维护，我们运维人员可以不用去关心。

mvn package #会去 maven 的中央仓库去下载需要的依赖包和插件到.m2 目录下
\5. 创建 Maven 私服 nexus
部署私服 xenus 下载 https://www.sonatype.com/download‐oss‐sonatype

配置仓库两个选项
1、项目下的 pom.xml 配置、只生效当前的项目
2、在 maven 配置全局所有项目生效
上传 JDK 和 nexus 安装包

```
rpm ‐ivh jdk‐8u121‐linux‐x64.rpm
mv nexus‐3.13.0‐01 /usr/local/
ln ‐s /usr/local/nexus‐3.13.0‐01 /usr/local/nexus
/usr/local/nexus/bin/nexus start
10.0.0.202:8081 admin admin123
```

配置 Maven 全局配置文件

```
/usr/local/maven/conf/settings.xml
```

\6. 创建一个 Maven 项目
创建前上传代码到 gitlab 服务器，把 java 项目添加到 gitlab 仓库中



#### 01. 部署 Maven

官网： http://maven.apache.org/download.cgi
清华镜像： https://mirrors.tuna.tsinghua.edu.cn/apache/maven/

```
#上传软件包
[root@jenkins ~]# ll
-rw-r--r-- 1 root root 8491533 2018-08-27 14:38 apache-maven-3.3.9-bin.tar.gz


#解压
[root@jenkins ~]# tar xf apache-maven-3.3.9-bin.tar.gz


#改变目录位置
[root@jenkins maven]# mv apache-maven-3.3.9 /usr/local/maven-3.3.9


#软连接
[root@jenkins maven]# ln -s /usr/local/maven-3.3.9 /usr/local/maven


[root@jenkins ~]# cd /usr/local/maven
[root@jenkins maven]# ll
total 32
drwxr-xr-x 2 root root 97 2019-11-20 21:55 bin
drwxr-xr-x 2 root root 42 2019-11-20 21:55 boot
drwxr-xr-x 3 root root 63 2015-11-11 00:38 conf
drwxr-xr-x 3 root root 4096 2019-11-20 21:55 lib
-rw-r--r-- 1 root root 19335 2015-11-11 00:44 LICENSE
-rw-r--r-- 1 root root 182 2015-11-11 00:44 NOTICE
-rw-r--r-- 1 root root 2541 2015-11-11 00:38 README.txt


#设置环境变量
[root@jenkins maven]# echo "export PATH=/usr/local/maven/bin/:$PATH" >>/etc/profile
[root@jenkins maven]# source /etc/profile


#查看结果
[root@jenkins maven]# mvn -v
Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)
Maven home: /usr/local/maven
Java version: 1.8.0_181, vendor: Oracle Corporation
Java home: /usr/java/jdk1.8.0_181-amd64/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "3.10.0-957.el7.x86_64", arch: "amd64", family: "unix"
```



#### 02. 编译测试

```
#上传一个简单的java项目包hello‐world.tar.gz进行解压


[root@jenkins ~]# ll
-rw-r--r-- 1 root root 1325 2018-08-22 13:43 hello-world.tar.gz


[root@jenkins ~]# tar xf hello-world.tar.gz 
[root@jenkins ~]# cd hello-world/

validate（验证）:   验证项目正确，并且所有必要信息可用。
compile（编译）:  编译项目源码
test（测试）:     使用合适的单元测试框架测试编译后的源码。
package（打包）:   源码编译之后，使用合适的格式（例如JAR格式）对编译后的源码进行打包。
integration‐test（集成测试）: 如果有需要，把包处理并部署到可以运行集成测试的环境中去。
verify（验证）:   进行各种测试来验证包是否有效并且符合质量标准。
install（安装）:   把包安装到本地仓库，使该包可以作为其他本地项目的依赖。
deploy（部署）:   在集成或发布环境中完成，将最终软件包复制到远程存储库，以与其他开发人员和项目共享。
mvn clean (清除) : 清除上次编译的结果
#测试
[root@jenkins hello-world]# mvn test


#打包
[root@jenkins hello-world]# mvn package  #会去maven的中央仓库去下载需要的依赖包和插件到.m2目录下


#打包结果
[root@jenkins hello-world]# ll target/
total 8
drwxr-xr-x 3 root root 17 2019-11-20 22:13 classes
-rw-r--r-- 1 root root 3130 2019-11-20 23:39 hello-world-1.0-SNAPSHOT.jar
drwxr-xr-x 2 root root 28 2019-11-20 23:38 maven-archiver
drwxr-xr-x 3 root root 35 2019-11-20 22:13 maven-status
-rw-r--r-- 1 root root 2872 2019-11-20 23:38 original-hello-world-1.0-SNAPSHOT.jar
drwxr-xr-x 2 root root 125 2019-11-20 22:14 surefire-reports
drwxr-xr-x 3 root root 17 2019-11-20 22:13 test-classes
```



#### 03. 部署 Tomcat 及数据库

```
#上传压缩包
[root@tomcat ~]# ll
-rw-r--r-- 1 root root 9128610 Mar 27 2019 apache-tomcat-8.0.27.tar.gz
-rw-r--r-- 1 root root 170023183 Aug 14 2018 jdk-8u181-linux-x64.rpm


#安装JDK
[root@tomcat ~]# rpm -ivh jdk-8u181-linux-x64.rpm 
warning: jdk-8u181-linux-x64.rpm: Header V3 RSA/SHA256 Signature, key ID ec551f03: NOKEY
Preparing... ################################# [100%]
Updating / installing...
1:jdk1.8-2000:1.8.0_181-fcs ################################# [100%]
Unpacking JAR files...
 tools.jar...
 plugin.jar...
 javaws.jar...
 deploy.jar...
 rt.jar...
 jsse.jar...
 charsets.jar...
 localedata.jar...


#解压Tomcat
[root@tomcat ~]# mkdir /application
[root@tomcat ~]# tar xf apache-tomcat-8.0.27.tar.gz -C /application


#创建软连接
[root@tomcat ~]# ln -s /application/apache-tomcat-8.0.27 /application/tomcat


#tomcat启动加速的方法
[root@tomcat ~]# vim /usr/java/jdk1.8.0_181-amd64/jre/lib/security/java.security 
117 securerandom.source=file:/dev/urandom #修改之后


#启动tomcat
[root@tomcat ~]# /application/tomcat/bin/startup.sh 
Using CATALINA_BASE: /application/tomcat
Using CATALINA_HOME: /application/tomcat
Using CATALINA_TMPDIR: /application/tomcat/temp
Using JRE_HOME: /usr
Using CLASSPATH: /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar
Tomcat started.


#检查端口
[root@tomcat ~]# netstat -lntp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name 
tcp 0 0 0.0.0.0:22 0.0.0.0: LISTEN 6758/sshd 
tcp 0 0 127.0.0.1:25 0.0.0.0: LISTEN 7134/master 
tcp6 0 0 :::8009 ::: LISTEN 24383/java 
tcp6 0 0 :::8080 ::: LISTEN 24383/java 
tcp6 0 0 :::22 ::: LISTEN 6758/sshd 
tcp6 0 0 ::1:25 ::: LISTEN 7134/master 
tcp6 0 0 127.0.0.1:8005 ::: LISTEN 24383/java


#浏览器使用8080端口访问
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_137.png)

```
#为项目准备好数据库jeesns，设置数据库root用户密码为root


#安装数据库
[root@tomcat ~]# yum install mariadb-server -y


[root@tomcat ~]# systemctl start mariadb.service 
[root@tomcat ~]# mysqladmin password 'root'


#创建jeesns库
[root@tomcat ~]# mysql -uroot -proot -e "create database jeesns;"


#dev上面上传一个项目
[root@git ~]# ll
-rw-r--r-- 1 root root 15376795 2019-03-27 17:33 jeesns.tar.gz
[root@git ~]# tar xf jeesns.tar.gz 
[root@git ~]# cd jeesns/
[root@git ~/jeesns]# git remote
origin
[root@git ~/jeesns]# git remote remove origin 
[root@git ~/jeesns]# ll jeesns-web/database/
total 40
-rwxr-xr-x 1 root root 28667 2018-11-19 15:01 jeesns.sql
-rw-r--r-- 1 root root 3491 2018-11-19 15:01 update_1.2.0to1.2.1.sql
-rw-r--r-- 1 root root 1026 2018-11-19 15:01 update_1.2.1to1.3.sql
-rw-r--r-- 1 root root 1344 2018-11-19 15:01 update_1.3to1.3.1.sql


#将该数据库传输到tomcat节点进行导入
[root@git ~/jeesns]# scp jeesns-web/database/jeesns.sql root@10.0.0.80:~


#导入数据库


[root@tomcat ~]# mysql -uroot -proot jeesns < jeesns.sql 
[root@tomcat ~]# mysql -uroot -proot -e "use jeesns; show tables"
+---------------------------+
| Tables_in_jeesns |
+---------------------------+
| tbl_action |
| tbl_action_log |
| tbl_ads |
| tbl_archive |
| tbl_archive_favor |
| tbl_article |
| tbl_article_cate |
| tbl_article_comment |
| tbl_checkin |
| tbl_config |
| tbl_group |
| tbl_group_fans |
| tbl_group_topic |
| tbl_group_topic_comment |
| tbl_group_topic_type |
| tbl_group_type |
| tbl_link |
| tbl_member |
| tbl_member_fans |
| tbl_member_level |
| tbl_member_token |
| tbl_memgroup |
| tbl_message |
| tbl_picture |
| tbl_picture_album |
| tbl_picture_album_comment |
| tbl_picture_album_favor |
| tbl_picture_comment |
| tbl_picture_favor |
| tbl_picture_tag |
| tbl_score_detail |
| tbl_score_rule |
| tbl_tag |
| tbl_validate_code |
| tbl_weibo |
| tbl_weibo_comment |
| tbl_weibo_favor |
| tbl_weibo_topic |
+---------------------------+


#打包jeesns项目
[root@git ~/jeesns]# mvn package


#打包之后生成的war包
[root@git ~/jeesns]# ll jeesns-web/target/
total 25496
drwxr-xr-x 4 root root 181 2019-11-20 23:19 classes
drwxr-xr-x 3 root root 25 2019-11-20 23:19 generated-sources
drwxr-xr-x 5 root root 104 2019-11-20 23:19 jeesns-web
-rw-r--r-- 1 root root 26106028 2019-11-20 23:20 jeesns-web.war
drwxr-xr-x 2 root root 28 2019-11-20 23:19 maven-archiver
drwxr-xr-x 3 root root 35 2019-11-20 23:19 maven-status


#将其手动传输到tomcat节点上面测试
[root@git ~/jeesns]# scp jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war


#浏览器刷新测试
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png)



#### 04. 创建一个 jeesns 项目

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png)

```
#清除上次编译的结果
[root@git ~/jeesns]# mvn clean


[root@git ~/jeesns]# git remote remove origin
[root@git ~/jeesns]# 
[root@git ~/jeesns]# 
[root@git ~/jeesns]# git remote add origin git@10.0.0.100:OPS/jeesns.git
[root@git ~/jeesns]# git add .
[root@git ~/jeesns]# git commit -m "Initial commit"
# On branch master
nothing to commit, working directory clean
[root@git ~/jeesns]# git push -u origin master
Counting objects: 1946, done.
Compressing objects: 100% (1862/1862), done.
Writing objects: 100% (1946/1946), 7.09 MiB | 7.25 MiB/s, done.
Total 1946 (delta 285), reused 0 (delta 0)
remote: Resolving deltas: 100% (285/285), done.
To git@10.0.0.100:OPS/jeesns.git
 [new branch] master -> master
Branch master set up to track remote branch master from origin.
```



#### 05. Jenkins 创建一个 maven

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_140.png)









# 此处如果出现报错，请添加 Deploy Keys





![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_141.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_142.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_143.png)

```
#发现已经打包成功了



[root@jenkins ~]# ll /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war 
-rw-r--r-- 1 root root 26106007 2019-11-23 11:49 /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war 


#jenkins用户给tomcat节点进行分发公钥

[root@jenkins ~]# ssh-copy-id -i .ssh/id_rsa.pub root@10.0.0.80 


#构建后操作

ssh root@10.0.0.80 "mv /application/tomcat/webapps/ROOT.war /tmp/$BUILD_ID-ROOT.war" 


scp /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war 
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_144.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_145.png)

```
[root@tomcat ~]# ll /tmp/ 
total 50992 
-rw-r--r-- 1 root root 26106004 2019-11-23 01:28 2-ROOT.war 
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_146.png)



# Pipeline 项目



#### 01. 基础概念

**CI/CD 持续集成 / 持续部署**

持续集成 (Continuous integration) 是一种软件开发实践，即团队开发成员经常集成它们的工作，通过每个成员

每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动

化测试）来验证，从而尽早地发现集成错误。

比如（你家装修厨房，其中一项是铺地砖，边角地砖要切割大小。如果一次全切割完再铺上去，发现尺寸有误的话

浪费和返工时间就大了，不如切一块铺一块。这就是持续集成。）

持续部署（continuous deployment）是通过自动化的构建、测试和部署循环来快速交付高质量的产品。某种程度上代表了一个开发团队工程化的程度，毕竟快速运转的互联网公司人力成本会高于机器，投资机器优化开发流程化

相对也提高了人的效率。

比如（装修厨房有很多部分，每个部分都有检测手段，如地砖铺完了要测试漏水与否，线路铺完了要通电测试电路

通顺，水管装好了也要测试冷水热水。如果全部装完了再测，出现问题可能会互相影响，比如电路不行可能要把地

砖给挖开……。那么每完成一部分就测试，这是持续部署。）

持续交付 Continuous Delivery: 频繁地将软件的新版本，交付给质量团队或者用户，以供评审尽早发现生产环境中存在的问题；如果评审通过，代码就进入生产阶段.

比如（全部装修完了，你去验收，发现地砖颜色不合意，水池太小，灶台位置不对，返工吗？所以不如没完成一部

分，你就去用一下试用验收，这就是持续交付。）

敏捷思想中提出的这三个观点，还强调一件事：通过技术手段自动化这三个工作。加快交付速度。

\1. 什么是 pipeline

Jenkins 2.0 的精髓是 Pipeline as Code，是帮助 Jenkins 实现 CI 到 CD 转变的重要角色。什么是 Pipeline，简单来说，就是一套运行于 Jenkins 上的工作流框架，将原本独立运行于单个或者多个节点的任务连接起来，实现单个

任务难以完成的复杂发布流程。Pipeline 的实现方式是一套 Groovy DSL，任何发布流程都可以表述为一段 Groovy
脚本，并且 Jenkins 支持从代码库直接读取脚本，从而实现了 Pipeline as Code 的理念。

2.Pipeline 概念

Pipeline 是一个用户定义的 CD 流水线模式。Pipeline 代码定义了通常包含构建、测试和发布步骤的完整的构

建过程。

Node
node 是一个机器，它是 Jenkins 环境的一部分，并且能够执行 Pipeline。同时，node 代码块也是脚本式

Pipeline 语法的关键特性。

Stage
Stage 块定义了在整个 Pipeline 中执行的概念上不同的任务子集（例如 "构建"，"测试" 和 "部署" 阶段），

许多插件使用它来可视化或呈现 Jenkins 管道状态 / 进度。

Step
一项任务。从根本上讲，一个步骤告诉 Jenkins 在特定时间点（或过程中的 "步骤"）要做什么。例如，使用

sh step：sh 'make' 可以执行 make 这个 shell 命令。

3.jenkins file
声明式
脚本式

脚本式语法格式：

```
pipeline{ 
 agent any 
stages{ 
 stage("get code"){ 
   steps{ 
     echo "get code from scm" 
   } 
 } 
 stage("package"){ 
   steps{ 
   echo "packge code" 
   } 
 } 
 stage("deploy"){ 
   steps{ 
     echo "deploy packge to node1" 
   } 
 } 
 } 
} 
```



#### 02. 创建 pipeline 项目

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_147.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_148.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_149.png)

在仓库创建一个 Jenkinsfile 文件进行调用

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_150.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png)

编辑 Jenkinsfile 文件

```
pipeline{ 
 agent any 
stages{ 
 stage("get code"){ 
   steps{ 
     echo "get code" 
   } 
 } 
 stage("unit test"){ 
   steps{ 
   echo "unit test" 
   } 
 } 
 stage("package"){ 
   steps{ 
 sh 'tar zcf /opt/web-${BUILD_ID}.tar.gz ./ --exclude=./.git --exclude=Jenkinsfile' 
   } 
 } 
 stage("deploy"){ 
   steps{ 
     sh 'ssh 10.0.0.80 "mkdir /opt/web-${BUILD_ID}"' 
     sh 'scp /opt/web-${BUILD_ID}.tar.gz 10.0.0.80:/opt' 
     sh 'ssh 10.0.0.80 "tar xf /opt/web-${BUILD_ID}.tar.gz -C /code"' 
   } 
 } 
} 
} 
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_153.png)

执行构建报错

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_154.png)

修改脚本再次构建

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_155.png)



# 回滚脚本

```
#!/bin/bash
cd /usr/share/nginx
ls -d web-*
read -p "请复制你需要回滚的目录版本" ver
rm -rf html*
ln -s $ver html
```