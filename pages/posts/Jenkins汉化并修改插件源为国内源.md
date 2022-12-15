---
title: Jenkins汉化并修改插件源为国内源
categories: DevOps
tags: [Jenkins]
date: 2020-10-14 09:17:00
---
# jenkins插件安装更换为国内源



1.在jenkins登陆后进入“系统管理”-“插件管理”-“高级”中，设置升级站点

![22988262-5fa9df82a2f0e033](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/22988262-5fa9df82a2f0e033.png)



2.设置升级站点为如下地址：

https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

3.提交

4.在后台服务器中找到jenkins的安装路径下的update配置文件

路径/var/lib/jenkins/updates

找到default.json文件

替换updates.jenkins-ci.org/download为mirrors.tuna.tsinghua.edu.cn/jenkins

替换 www.google.com为www.baidu.com



![22988262-00136718ba2d05b6](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/22988262-00136718ba2d05b6.png)

5.重启jenkins服务service jenkins restart,重新登录，速度飞快

# Jenkins汉化
支持最新版本全部汉化
在jenkins插件中安装以下插件后 重启jenkins即可

Localization:Chinese

三、应用保存。

