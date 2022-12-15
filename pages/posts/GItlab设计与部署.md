---
title: GItlab设计与部署
categories: DevOps
tags: [GItlab]
date: 2020-03-09 17:16:00
---
# Gitlab安装


GitLab简介 
 GitLab 是一个用于仓库管理系统的开源项目。使用Git作为代码管理工具，并在此基础上搭建起来的web服务。可通过Web界面进行访问公开的或者私人项目。它拥有与Github类似的功能，能够浏览源代码，管理权限和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序(Wall)进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用。 
 常用的网站： 
 官网：https://about.gitlab.com/ 
 国内镜像：https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/ 
 安装环境： 
 1、CentOS 6或者7 
 2、2G内存（实验）生产（至少4G） 
 3、安装包：gitlab-ce-10.2.2-ce 
 4、禁用防火墙，关闭selinux

 
 https://about.gitlab.com/installation/           # git官网 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_22.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_23.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_24.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_25.png)


 [root@git ~]# yum install -y curl policycoreutils-python openssh-server # 安装依赖

 

 #上传gitlab安装包
下载方式可通过国内清华源gitlab-ce社区版本下载

 [root@git ~]# ll  
 drwxr-xr-x 3 root root 39 Nov 16 15:04 git_data  
 -rw-r--r-- 1 root root 389758391 Aug 22 2018 gitlab-ce-10.2.2-ce.0.el7.x86_64.rpm  


 #rpm安装，发现缺少依赖

 [root@git ~]# rpm -ivh gitlab-ce-10.2.2-ce.0.el7.x86_64.rpm  
 warning: gitlab-ce-10.2.2-ce.0.el7.x86_64.rpm: Header V4 RSA/SHA1 Signature, key ID f27eab47: NOKEY  
 error: Failed dependencies:  
   policycoreutils-python is needed by gitlab-ce-10.2.2-ce.0.el7.x86_64  
     
 #安装依赖之后再次安装

 [root@git ~]# yum install -y policycoreutils-python  


 [root@git ~]# vim /etc/gitlab/gitlab.rb # gitlab 配置文件

 更改url地址为本机IP地址 external_url 'http://10.0.0.100'  


 # 更改配置文件后需重新配置

 [root@git ~]# gitlab-ctl reconfigure  


 /opt/gitlab/ # gitlab的程序安装目录

 /var/opt/gitlab # gitlab目录数据目录

 /var/opt/gitlab/git-dfata # 存放仓库数据

 gitlab-ctl status # 查看目前gitlab所有服务运维状态

 gitlab-ctl stop # 停止gitlab服务

 gitlab-ctl stop nginx # 单独停止某个服务

 gitlab-ctl tail # 查看所有服务的日志

 

 Gitlab的服务构成：

 nginx：           #静态web服务器

 gitlab-workhorse:        #轻量级的反向代理服务器

 logrotate：          #日志文件管理工具

 postgresql：          #数据库

 redis：            #缓存数据库

 sidekiq：          #用于在后台执行队列任务（异步执行）。（Ruby）

 unicorn：An HTTP server for Rack applications，GitLab Rails应用是托管在这个服务器上面的。（Ruby Web Server,主要使用Ruby编写）

 

 #通过浏览器输入IP地址进行访问gitlab  


 使用默认用户登录：  root  
 密码：        12345678  

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_26.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_27.png)



### 7. Gitlab使用

 

#### 01. 外观配置

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_28.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_29.png)



#### 02. Gitlab汉化配置

 
 1、下载汉化补丁 
 git clone https://gitlab.com/xhang/gitlab.git 
 2、查看全部分支版本 
 git branch -a 
 3、对比版本、生成补丁包 
 git diff remotes/origin/10-2-stable remotes/origin/10-2-stable-zh > ../10.2.2-zh.diff 
 4、停止服务器 
 gitlab-ctl stop 
 5、打补丁 
 patch -d /opt/gitlab/embedded/service/gitlab-rails -p1 < /tmp/10.2.2-zh.diff  
 6、启动和重新配置 
 gitlab-ctl start 
 gitlab-ctl reconfigure 
 





#### 03. 注册限制

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_30.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_31.png)



#### 04. 创建用户及组

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_32.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_33.png)



#### 05. 创建用户

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_34.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_35.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_36.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_37.png)



#### 06. 把用户添加到组

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_38.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_39.png)



#### 07. 创建项目

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_40.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_41.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_42.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_43.png)

  返回首页，进入项目  

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_44.png)

 
 #删除github的仓库

 
 [root@git ~/git_data]# git remote remove origin  
 [root@git ~/git_data]# git remote

 
 #添加gitlab的远程仓库，进行代码上传

 
 [root@git ~/git_data]# git remote add origin git@10.0.0.100:OPS/git_test.git 
 [root@git ~/git_data]# git push -u origin master  
 The authenticity of host '10.0.0.100 (10.0.0.100)' can't be established. 
 ECDSA key fingerprint is SHA256:6gbyCCIw3zFuNSUR2Y7UOG8fbSrj/BVUaeXwllvrGXM. 
 ECDSA key fingerprint is MD5:95:10:02:7c:71:73:c6:4a:b2:f9:d8:88:5d:4a:3d:e0. 
 Are you sure you want to continue connecting (yes/no)? yes 
 Warning: Permanently added '10.0.0.100' (ECDSA) to the list of known hosts. 
 Counting objects: 17, done. 
 Compressing objects: 100% (8/8), done. 
 Writing objects: 100% (17/17), 1.25 KiB | 0 bytes/s, done. 
 Total 17 (delta 1), reused 0 (delta 0) 
 To git@10.0.0.100:OPS/git_test.git 
   [new branch] master -> master 
 Branch master set up to track remote branch master from origin. 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_45.png)



#### 08. 推送代码到Gitlab

 
 [root@git ~/git_data]# echo oldboy >>a.txt 
 [root@git ~/git_data]# git add . 
 [root@git ~/git_data]# git commit -m "create a.txt" 
 [master a5c15de] create a.txt 
 1 file changed, 1 insertion(+) 
 create mode 100644 a.txt 
 [root@git ~/git_data]# git push -u origin master  
 Counting objects: 4, done. 
 Compressing objects: 100% (2/2), done. 
 Writing objects: 100% (3/3), 289 bytes | 0 bytes/s, done. 
 Total 3 (delta 0), reused 0 (delta 0) 
 To git@10.0.0.100:OPS/git_test.git 
 0924a70..a5c15de master -> master 
 Branch master set up to track remote branch master from origin.

 
 #刷新Gitlab仓库 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_46.png)



#### 09. 开发推送代码到Gitlab

 
 #给其创建dev用户，并给其分配到项目组，然后进行登录 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_47.png)

 
 #克隆一台服务器，作为开发人员使用，并进行生成密钥文件，进行密钥认证

 
 [root@dev ~]# ssh-keygen -t rsa 
 Generating public/private rsa key pair. 
 Enter file in which to save the key (/root/.ssh/id_rsa):  
 Created directory '/root/.ssh'. 
 Enter passphrase (empty for no passphrase):  
 Enter same passphrase again:  
 Your identification has been saved in /root/.ssh/id_rsa. 
 Your public key has been saved in /root/.ssh/id_rsa.pub. 
 The key fingerprint is: 
 SHA256:qx5BldjQ4qy+HTSH9zpg8nVQqJDNP/M8gfq/4k+E09c root@dev 
 The key's randomart image is: 
 +---[RSA 2048]----+ 
 | +.=.o | 
 | o =.= . | 
 | +.+ o | 
 | .+. o. . | 
 | .=.S o.. E | 
 | o.+=.==. | 
 | . +o+..o. | 
 | ...++o | 
 | .o+.o=+. | 
 +----[SHA256]-----+ 
 [root@dev ~]# cat .ssh/id_rsa.pub  
 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDa4HBEOk10oode36lPcrybpjK++3bsjbaO67CjzY9S8w2WbAFfsVUwM+Hz8uRlehfjiCxuXF/oQgK2TATDdVYw89CrUMMmjuR1nRKKslA/Xhj0XxIjtUY+86UpVYp0t3963mmHrvoe45DTHYHIQqHEP8FM1fi5T6EzYrVhWFmmjqQYbVYQL+4oHwJBsCvQ4XZ6PCgTBlw2D8s1jk2Sx2vTsPLURA/+iL7WqzM5bGQLcAP5R3yG09v5O0+C/RLIHMw/qY54DaxVGTXhs0PnrfQhdzlUcKREsGkF7Ya3khyfss1jY+/QslS3Y6be9s8sfBKuWwx3Llob2nkgKiZOpQ+5 root@dev    #复制其公钥 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_48.png)

 
 #进行将代码克隆下来，进行更改

 
 [root@dev ~]# git clone git@10.0.0.100:OPS/git_test.git 
 Cloning into 'git_test'... 
 The authenticity of host '10.0.0.100 (10.0.0.100)' can't be established. 
 ECDSA key fingerprint is SHA256:6gbyCCIw3zFuNSUR2Y7UOG8fbSrj/BVUaeXwllvrGXM. 
 ECDSA key fingerprint is MD5:95:10:02:7c:71:73:c6:4a:b2:f9:d8:88:5d:4a:3d:e0. 
 Are you sure you want to continue connecting (yes/no)? yes 
 Warning: Permanently added '10.0.0.100' (ECDSA) to the list of known hosts. 
 remote: Counting objects: 20, done. 
 remote: Compressing objects: 100% (10/10), done. 
 remote: Total 20 (delta 1), reused 0 (delta 0) 
 Receiving objects: 100% (20/20), done. 
 Resolving deltas: 100% (1/1), done. 
 [root@dev ~]# ll 
 drwxr-xr-x 3 root root 52 Nov 17 17:21 git_test 
 [root@dev ~]# ll git_test/ 
 total 8 
 -rw-r--r-- 1 root root 16 Nov 17 17:21 a 
 -rw-r--r-- 1 root root 7 Nov 17 17:21 a.txt 
 -rw-r--r-- 1 root root 0 Nov 17 17:21 test

 
 #修改代码

 
 [root@dev ~]# cd git_test/ 
 [root@dev ~/git_test]# echo dev01 >> a 
 [root@dev ~/git_test]# git commit -am "dev01 add a"

 
     Please tell me who you are.

 
 Run

 
 git config --global user.email "you@example.com" 
 git config --global user.name "Your Name"

 
 to set your account's default identity. 
 Omit --global to set the identity only in this repository.

 
 fatal: unable to auto-detect email address (got 'root@dev.(none)')

 
 #配置邮件及用户信息

 
 [root@dev ~/git_test]# git config --global user.email "dev@example.com" 
 [root@dev ~/git_test]# git config --global user.name "dev01"

 
 [root@dev ~/git_test]# git commit -am "dev01 add a" 
 [master 6cc6aff] dev01 add a 
 1 file changed, 1 insertion(+)

 
 #推送到远程仓库

 
 [root@dev ~/git_test]# git push -u origin master 
 Counting objects: 5, done. 
 Compressing objects: 100% (2/2), done. 
 Writing objects: 100% (3/3), 305 bytes | 0 bytes/s, done. 
 Total 3 (delta 0), reused 0 (delta 0) 
 To git@10.0.0.100:OPS/git_test.git 
 a5c15de..6cc6aff master -> master 
 Branch master set up to track remote branch master from origin. 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_49.png)



#### 10. 分支保护

 
 #创建一个dev分支

 
 [root@dev ~/git_test]# git branch dev 
 [root@dev ~/git_test]# git push -u origin dev 
 Total 0 (delta 0), reused 0 (delta 0) 
 remote:  
 remote: To create a merge request for dev, visit: 
 remote: http://10.0.0.100/OPS/git_test/merge_requests/new?merge_request%5Bsource_branch%5D=dev 
 remote:  
 To git@10.0.0.100:OPS/git_test.git 
   [new branch] dev -> dev 
 Branch dev set up to track remote branch dev from origin.

 
 #登录root用户，进行分支保护 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_50.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_51.png)



#### 11. 代码合并

 
 #清除旧的分支，创建新的分支，并切换

 
 [root@dev ~/git_test]# git branch -d dev 
 Deleted branch dev (was 6cc6aff). 
 [root@dev ~/git_test]# git checkout -b dev 
 Switched to a new branch 'dev' 
 [root@dev ~/git_test]# git branch 
   dev 
 master 
 
 
 #推送到远程仓库 
 
 
 [root@dev ~/git_test]# git push -u origin dev 
 Counting objects: 5, done. 
 Compressing objects: 100% (2/2), done. 
 Writing objects: 100% (3/3), 311 bytes | 0 bytes/s, done. 
 Total 3 (delta 0), reused 0 (delta 0) 
 remote:  
 remote: To create a merge request for dev, visit: 
 remote: http://10.0.0.100/OPS/git_test/merge_requests/new?merge_request%5Bsource_branch%5D=dev 
 remote:  
 To git@10.0.0.100:OPS/git_test.git 
 6cc6aff..315f127 dev -> dev 
 Branch dev set up to track remote branch dev from origin.

 
 #dev分支上面有a文件的最新信息，而master中没有 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_52.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_53.png)

  进行合并分支  

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_54.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_55.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_56.png)

  登录root用户进行处理请求  

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_57.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_58.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_59.png)



#### 12. Git-gui安装

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_60.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_61.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_62.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_63.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_64.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_65.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_66.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_67.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_68.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_69.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_70.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_71.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_72.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_73.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_74.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_75.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_76.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_77.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_78.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_79.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_80.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_81.png)

  修改代码  

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_82.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_83.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_84.png)

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_85.png)



### 8. Gitlab备份与恢复


 
 
 
   对gitlab进行备份将会创建一个包含所有库和附件的归档文件。对备份的恢复只能恢复到与备份时的gitlab相同的
 
 版本。将gitlab迁移到另一台服务器上的最佳方法就是通过备份和还原。
 
   gitlab提供了一个简单的命令行来备份整个gitlab，并且能灵活的满足需求。
 
   备份文件将保存在配置文件中定义的backup_path中，文件名为TIMESTAMP_gitlab_backup.tar,TIMESTAMP为备份时的时间戳。TIMESTAMP的格式为：EPOCH_YYYY_MM_DD_Gitlab‐version。如果自定义备份目录需要赋予git权限。
 
    
 





#### 01. 备份

   
 #配置文件中加入 
 [root@git ~/git_data]# vim /etc/gitlab/gitlab.rb 
 gitlab_rails['manage_backup_path'] = true      #开启备份 
 gitlab_rails['backup_path'] = '/data/backup/gitlab' #备份目录 
 gitlab_rails['backup_archive_permissions'] = 0644 #生成的备份文件权限 
 gitlab_rails['backup_keep_time'] = 604800       #备份保留的时间（以秒为单位，这是七天默认值） 
 [root@git ~/git_data]# mkdir /data/backup/gitlab 
 [root@git ~/git_data]# chown ‐R git.git /data/backup/gitlab

 
 #完成后执行下面命令进行生效

 
 [root@git ~/git_data]# gitlab‐ctl reconfigure

 
 #手动备份 
 [root@git ~/git_data]# gitlab-rake gitlab:backup:create

 
 #检查结果 
 [root@git ~/git_data]# ll /data/opt/gitlab/ 
 total 112 
 -rw-r--r-- 1 git git 112640 Nov 17 18:22 1573986174_2019_11_17_10.2.2_gitlab_backup.tar

 
 自动备份需要写一个备份脚本及定时任务

 
 #Gitlab恢复操作

 
 Gitlab只能还原到与备份文件相同的gitlab版本。

 
 #误删除数据

 
 [root@git ~/git_test]# rm -rf ./ 

 
 #提交推送

 
 [root@git ~/git_test]# git commit -am "add 123 " 
 [master 35ef629] add 123 
 3 files changed, 8 deletions(-) 
 delete mode 100644 a 
 delete mode 100644 a.txt 
 delete mode 100644 test 
 [root@git ~/git_test]# git push -u origin master 
 Counting objects: 3, done. 
 Compressing objects: 100% (1/1), done. 
 Writing objects: 100% (2/2), 182 bytes | 0 bytes/s, done. 
 Total 2 (delta 0), reused 0 (delta 0) 
 To git@10.0.0.100:OPS/git_test.git 
 02250b6..35ef629 master -> master 
 Branch master set up to track remote branch master from origin. 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_86.png)



#### 02. 恢复

 
 #停止相关服务

 
 [root@git ~/git_test]# gitlab-ctl stop unicorn 
 ok: down: unicorn: 0s, normally up 
 [root@git ~/git_test]# gitlab-ctl stop sidekiq 
 ok: down: sidekiq: 1s, normally up 
 [root@git ~/git_test]# gitlab-ctl status 
 run: gitaly: (pid 78774) 15714s; run: log: (pid 78466) 15758s 
 run: gitlab-monitor: (pid 78790) 15713s; run: log: (pid 78565) 15746s 
 run: gitlab-workhorse: (pid 78762) 15714s; run: log: (pid 78419) 15776s 
 run: logrotate: (pid 106694) 1364s; run: log: (pid 78447) 15764s 
 run: nginx: (pid 78432) 15770s; run: log: (pid 78431) 15770s 
 run: node-exporter: (pid 78515) 15752s; run: log: (pid 78514) 15752s 
 run: postgres-exporter: (pid 78818) 15712s; run: log: (pid 78692) 15728s 
 run: postgresql: (pid 78190) 15819s; run: log: (pid 78189) 15819s 
 run: prometheus: (pid 78806) 15713s; run: log: (pid 78646) 15734s 
 run: redis: (pid 78130) 15825s; run: log: (pid 78129) 15825s 
 run: redis-exporter: (pid 78626) 15740s; run: log: (pid 78625) 15740s 
 down: sidekiq: 8s, normally up; run: log: (pid 78402) 15782s 
 down: unicorn: 20s, normally up; run: log: (pid 78363) 15788s

 
 #Gitlab的恢复操作会先将当前所有的数据清空，然后再根据备份数据进行恢复

 
 [root@git ~/git_test]# ll /data/opt/gitlab/ 
 total 112 
 -rw------- 1 git git 112640 Nov 17 18:22 1573986174_2019_11_17_10.2.2_gitlab_backup.tar 
 [root@git ~/git_test]# gitlab-rake gitlab:backup:restore BACKUP=1573986174_2019_11_17_10.2.2

 
 #启动gitlab 
 [root@git ~/git_test]# gitlab-ctl start 
 ok: run: gitaly: (pid 78774) 16168s 
 ok: run: gitlab-monitor: (pid 78790) 16167s 
 ok: run: gitlab-workhorse: (pid 78762) 16168s 
 ok: run: logrotate: (pid 106694) 1818s 
 ok: run: nginx: (pid 78432) 16224s 
 ok: run: node-exporter: (pid 78515) 16206s 
 ok: run: postgres-exporter: (pid 78818) 16166s 
 ok: run: postgresql: (pid 78190) 16273s 
 ok: run: prometheus: (pid 78806) 16167s 
 ok: run: redis: (pid 78130) 16279s 
 ok: run: redis-exporter: (pid 78626) 16194s 
 ok: run: sidekiq: (pid 109932) 1s 
 ok: run: unicorn: (pid 109939) 0s

 
 #检查是否恢复成功 
 [root@git ~/git_test]# gitlab-rake gitlab:check SANITIZE=true 
 

![img](https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_87.png)

 
 #web界面数据已经恢复，从新克隆到本地

 
 [root@git ~]# git clone git@10.0.0.100:OPS/git_test.git 
 Cloning into 'git_test'... 
 remote: Counting objects: 27, done. 
 remote: Compressing objects: 100% (14/14), done. 
 remote: Total 27 (delta 1), reused 27 (delta 1) 
 Receiving objects: 100% (27/27), done. 
 Resolving deltas: 100% (1/1), done. 
 [root@git ~/git_test]# ll 
 total 8 
 -rw-r--r-- 1 root root 27 Nov 17 19:00 a 
 -rw-r--r-- 1 root root 7 Nov 17 19:00 a.txt 
 -rw-r--r-- 1 root root 0 Nov 17 19:00 test