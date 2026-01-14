---
title: 使用 Docker 自建 Bitwarden 密码管理服务器
categories: Linux技术
tags: [Bitwarden]
date: 2022-03-16 15:54:00
---
[Bitwarden](https://bitwarden.com/)是一款优秀的跨平台密码管理软件，类似于 1Password、EnPass、LastPass 等。Bitwarden  是免费开源的，可以将服务端部署在自己的服务器上，比如群晖，并且支持 Docker 部署。但官方的镜像要求至少 2G 以上内存，要求比较高。有人用 Rust 实现了 Bitwarden 服务器，项目叫 ~~bitwarden_rs~~[vaultwarden](https://github.com/dani-garcia/vaultwarden)

，并且提供了 Docker 镜像，这个实现更进一步降低了对机器配置的要求，并且 Docker 镜像体积很小，部署非常方便。

# 01 使用 Docker 镜像部署并开启反向代理

在安装 Docker 后，通过 SSH 连接服务器，键入以下命令：

```shell
docker run -d --name Bitwarden --restart=always \
  -e SIGNUPS_ALLOWED=true \
  -v /www/wwwroot/bitwarden.angustar.com/:/data/ \
  -p 6666:80 \
  vaultwarden/server:latest
```

Shell

其中，`SIGNUPS_ALLOWED=true`代表允许注册，首次部署必须允许注册（用于创建第一个用户），`/www/wwwroot/bitwarden.angustar.com`为数据实际存储目录，用于保存密码的 SQLite 数据库也存储于此，`6666`为服务端口。

之后添加一个站点，站点目录设置为上面的`/www/wwwroot/bitwarden.angustar.com`，FTP、数据库均不需要创建，PHP 版本选择纯静态，建议同时为网站配置 SSL 证书。

添加反向代理，目标URL为`http://127.0.0.1:6666`，端口号与上面创建容器时的服务端口保持一致。

[![在宝塔面板中可以很便捷地创建反向代理](https://cos.vlinux.cn/www-vlinux-cn-blog-img/3405439263-20220316155158798.jpg#mirages-width=748&mirages-height=704&mirages-cdn-type=5)](https://cdn.angustar.com/usr/uploads/2021/01/3405439263.jpg)

[在宝塔面板中可以很便捷地创建反向代理](https://cdn.angustar.com/usr/uploads/2021/01/3405439263.jpg)





请提前在防火墙中放行`6666`端口。





请提前在 DNS 服务提供商处做好域名解析。



全部完成后，不出意外的话访问`https://bitwarden.angustar.com`就能看到界面啦~
 之后创建账号并登录，如需更改语言，可以进入`设置`-`选项`-`语言`中更改。

[![首次登陆前需要先创建账号](https://cos.vlinux.cn/www-vlinux-cn-blog-img/3724638843.png#mirages-width=797&mirages-height=727&mirages-cdn-type=5)](https://cdn.angustar.com/usr/uploads/2021/08/3724638843.png)

[首次登陆前需要先创建账号](https://cdn.angustar.com/usr/uploads/2021/08/3724638843.png)



[![更改默认语言](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1355640409.png#mirages-width=902&mirages-height=772&mirages-cdn-type=5)](https://cdn.angustar.com/usr/uploads/2021/08/1355640409.png)

[更改默认语言](https://cdn.angustar.com/usr/uploads/2021/08/1355640409.png)



# 02 禁止注册 & 启用管理页面

若 Bitwarden 不对外提供服务，则可以禁止注册。

首先需要停止运行容器并删除容器，若已安装宝塔面板，则可以直接在 Docker 管理器中操作。



删除容器不会影响已有数据。



之后通过 SSH 连接服务器，键入以下命令：

```shell
docker run -d --name Bitwarden --restart=always \
  -e ADMIN_TOKEN=some_random_token_as_per_above_explanation \
  -e SIGNUPS_ALLOWED=false \
  -v /www/wwwroot/bitwarden.angustar.com/:/data/ \
  -p 6666:80 \
  vaultwarden/server
```

Shell

其中，`ADMIN_TOKEN=`后面的部分为管理密码，在登陆管理页面`https://bitwarden.angustar.com/admin`时使用，请尽量设置高强度密码，可以使用以下命令生成高强度密码：

```shell
openssl rand -base64 48
```

Shell

之后如果忘记管理密码的话可以查看`/www/wwwroot/bitwarden.angustar.com/config.json`（在管理页面第一次保存设置后会自动生成此文件）。

容器创建完成后，再创建账号就会出现错误提示：

[![禁止注册](https://cos.vlinux.cn/www-vlinux-cn-blog-img/4245330164.png#mirages-width=1296&mirages-height=810&mirages-cdn-type=5)](https://cdn.angustar.com/usr/uploads/2021/08/4245330164.png)

[禁止注册](https://cdn.angustar.com/usr/uploads/2021/08/4245330164.png)



在管理页面`https://bitwarden.angustar.com/admin`中可以配置发信邮箱、邀请新用户注册（即使系统已经禁止注册）、删除用户等，其中，配置的发信邮箱可以用于确认用户的邮箱地址是否正确、发送包含主密码提示的邮件以及通过邮件的形式发送两步登陆验证码等，值得注意的是，出于安全考虑，**Bitwarden 不支持找回主密码，哪怕你是管理员也不行！！！**所以，请一定一定设置一个“有用的”主密码提示，可以在你忘记密码时帮你回忆起来，而不是花费个把小时去几十个网站上一个一个地找回密码。





关于其它的配置项请参考项目的 Wiki：

https://github.com/dani-garcia/vaultwarden/wiki

https://rs.bitwarden.in





# 03 软件 & 浏览器插件下载

软件和浏览器插件可以到 Bitwarden 官网下载：https://bitwarden.com/download/

[![软件 & 浏览器插件下载](https://cos.vlinux.cn/www-vlinux-cn-blog-img/2291328307.png#mirages-width=1260&mirages-height=737&mirages-cdn-type=5)](https://cdn.angustar.com/usr/uploads/2021/08/2291328307.png)

[软件 & 浏览器插件下载](https://cdn.angustar.com/usr/uploads/2021/08/2291328307.png)



软件/浏览器插件安装完成后，需要连接自建的服务器（默认连接的是 Bitwarden 官方的服务器）才能正常使用，以 Chrome 插件为例，点击左上角齿轮状的设置图标，在`自托管环境`处填写自建服务器的 URL 后保存即可。

[![连接自建的服务器](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1639469236.jpg#mirages-width=538&mirages-height=244&mirages-cdn-type=5)](https://cdn.angustar.com/usr/uploads/2021/08/1639469236.jpg)

[连接自建的服务器](https://cdn.angustar.com/usr/uploads/2021/08/1639469236.jpg)



# 04 定时备份

**定时备份很简单却很重要。**

备份时将目录`/www/wwwroot/bitwarden.angustar.com`下的内容全部备份即可，可以用宝塔面板设置一个计划任务，定时备份至服务器磁盘或腾讯云 COS 等地，异地备份最好，不然服务器突然挂了就 GG 啦~

# 05 结语

现在就可以在浏览器和手机上愉快的使用l啦~顺便说句，Bitwarden 除了可以记录密码外，也可以记录身份证、银行卡等隐私信息，随时复制，还有它的 Send 功能很好用，可以安全地分享文本和文件，到期后自动销毁，不留后患。