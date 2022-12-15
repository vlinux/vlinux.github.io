---
title: Grafana使用腾讯云监控插件监控腾讯云产品并形成Dashboard图片或PDF文件发送企业微信
categories: Grafana
tags: [Grafana,腾讯云监控]
date: 2022-01-26 16:18:23
---

## 背景

> 公司的服务资源几乎都在腾讯云上,现在客户需求每天看到服务器和部分服务的使用报告

经过一番查询发现还是有方法实现的(在不写代码的情况下,这里指出了shell以外的任何代码)

## 设计

首先我们需要有Grafana,这样才能用于展示,调试等操作

其次数据源我们可以直接使用腾讯云研发的基于Grafana的插件,使用该插件. 作用就是可以把你的Grafana数据源设置为腾讯云监控. 也就是说你在腾讯云监控界面能看到什么,经过一番不太困难的设置,你在Grafana里也同样能达到效果

将Grafana的Panel变成图片,我们可以使用grafana-image-renderer插件(玩起来颇吃力)

将Grafana的Dashboard变成PDF,我们可以使用Grafana-report 

最后就是将生成的图片或者PDF发送至企业微信,在最下面我会贴出我写的脚本,你只需要拿去直接用就可以了

- 部署Grafana
- 安装Tencent Cloud Monitoring和grafana-image-renderer插件
- 安装Grafana-report生成PDF文件
- 脚本定时发送运维日报(PDF文件或图片)至企业微信

## 开始

### 安装Grafana

接下来我们就来安装 Grafana，Grafana 本身是非常轻量级的，不会占用大量资源，此外 Grafana 需要一个数据库来存储其配置数据，比如用户、数据源和仪表盘等，目前 Grafana 支持 SQLite、MySQL、PostgreSQL 3 种数据库，默认使用的是 SQLite，该数据库文件会存储在 Grafana 的安装位置，所以需要对 Grafana 的安装目录进行持久化。

要安装 Grafana 的方式有很多，我们这里使用的是 CentOS 系统，可以在 Grafana 官方下载页面筛选合适的版本 https://grafana.com/grafana/download?edition=oss&platform=linux 根据自己的需求来进行安装，比如我们这里直接使用 rpm 包进行安装：

```
wget https://dl.grafana.com/oss/release/grafana-8.2.1-1.x86_64.rpm
yum install grafana-8.2.1-1.x86_64.rpm
```

安装完成后我们就可以使用 systemd 来管理 Grafana：

```
systemctl daemon-reload
systemctl enable grafana-server
systemctl start grafana-server
systemctl status grafana-server
```

默认的启动配置环境变量位于 `/etc/sysconfig/grafana-server` 文件中：

```
cat /etc/sysconfig/grafana-server

GRAFANA_USER=grafana
GRAFANA_GROUP=grafana
GRAFANA_HOME=/usr/share/grafana
LOG_DIR=/var/log/grafana
DATA_DIR=/var/lib/grafana
MAX_OPEN_FILES=10000
CONF_DIR=/etc/grafana
CONF_FILE=/etc/grafana/grafana.ini
RESTART_ON_UPGRADE=true
PLUGINS_DIR=/var/lib/grafana/plugins
PROVISIONING_CFG_DIR=/etc/grafana/provisioning
# Only used on systemd systems
PID_FILE_DIR=/var/run/grafana
```

从上面文件中可以找到 Grafana 的各种数据配置路径，比如数据目录、日志目录、插件目录等等，正常启动完成后 Grafana 会监听在 3000 端口上，所以我们可以在浏览器中打开 Grafana 的 WebUI。

![图片](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/640)

默认的用户名和密码为 `admin`，也可以在配置文件 `/etc/grafana/grafana.ini` 中配置 `admin_user` 和 `admin_password` 两个参数来进行覆盖。

![图片](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/640)

当然如果我们想要部署一个高可用版本的 Grafana 的话，那么使用 SQLite 数据库就不行了，需要切换到 MySQL 或者 PostgreSQL，我们可以在 Grafana 配置的 `[database]` 部分找到数据库的相关配置，Grafana 会将所有长期数据保存在数据库中，然后部署多个 Grafana 实例使用同一个数据库即可实现高可用。

### 配置Grafana腾讯云监控数据源

> 腾讯云监控 为用户提供云服务器、云数据库等多个云产品的负载和性能监控指标，用户可以使用云监控控制台、云监控 API 等方式获取相关监控数据。腾讯云监控应用插件 Tencent Cloud Monitor **App，是一款适配开源软件 Grafana 的应用插件，通过调用 腾讯云监控 API 3.0的方式获取监控数据，并对数据进行自定义 Dashboard 展示。**

参考Github项目地址:https://github.com/TencentCloud/tencentcloud-monitor-grafana-app

使用 Grafana CLI 安装：

```
grafana-cli plugins install tencentcloud-monitor-app
```

安装后重启Grafana

```bash
systemctl restart grafana-server
```

> 访问Grafana配置数据源,在此之前,您需要在腾讯云API管理中心创建属于你自己的Sercetkey.

> Grafana在配置数据源的时候需要使用该key进行认证.

![image-20220112151154005](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/image-20220112151154005.png#mirages-width=1920&mirages-height=940&mirages-cdn-type=5)

在Grafana插件中打开该应用,然后在数据源中进行配置

![image-20220112151259213](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/image-20220112151259213.png#mirages-width=1920&mirages-height=640&mirages-cdn-type=5)



![image-20220112151417057](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/image-20220112151417057.png#mirages-width=1920&mirages-height=937&mirages-cdn-type=5)

配置后好点击最下方得Save&Test就可以了.这时候你就可以在Grafana中查看你在腾讯云中得服务资源监控了.

### Grafana-image-renderer插件安装

> 该插件自己安装会报错比较多,推荐使用Docker启动,因为我机器上默认已经安装好了Docker所以就不再放安装Docker得文档了
>
> 该方法是采用插件和Grafana主体分离的形式运行的,以防生成图片过大时机器过载


运行

```
docker pull grafana/grafana-image-renderer
docker run -d --name=render --network=host --restart=always -e BROWSER_TZ=Asia/Shanghai grafana/grafana-image-renderer
```

在Grafana中配置插件地址

``` 
vim /etc/grafana/grafana.ini

#修改以下内容
[rendering]
server_url = http://你的Grafana插件地址:8081/render
callback_url = http://你的grafana地址:3000/
#字符改成zh；支持中文
rendering_language = zh
```

重启Grafana使配置生效

```bash
systemctl restart grafana-server
```

任选一Panel,点击Share,点击拍照图标即可生成该Panel图片

![image-20220112152306485](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/image-20220112152306485.png#mirages-width=939&mirages-height=372&mirages-cdn-type=5)



![image-20220112152355044](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/image-20220112152355044.png#mirages-width=870&mirages-height=476&mirages-cdn-type=5)

### 安装Grafana-report生成PDF文件

> 我尝试过Docker启动该服务,不过后来因各种报错和依赖放弃了,于是打算自己下载项目直接运行该服务.

安装该服务相关依赖,解决后续可能会出现的不显示中文,中文乱码,或者因为字体报错而无法生成文件等情况,在这之前你需要配置好Yum源,Base和epel

```bash
yum install go git texlive-pdftex texlive-latex-bin texlive-texconfig* texlive-latex* texlive-metafont* texlive-cmap* texlive-ec texlive-fncychap* texlive-pdftex-def texlive-fancyhdr* texlive-titlesec* texlive-multirow texlive-framed* texlive-wrapfig* texlive-parskip* texlive-caption texlive-ifluatex* texlive-collection-fontsrecommended texlive-collection-latexrecommended texinfo-tex
```

编译该程序

```bash
go get github.com/IzakMarais/reporter/...
go install -v github.com/IzakMarais/reporter/cmd/grafana-reporter
go/bin/grafana-reporter -ip ip:8686 （会开启8686端口）
```

因为该插件是以匿名方式访问Grafana所产生PDF文件的,所以在Grafana中我们还需要打开匿名访问的权限.

编辑grafana.ini

```ini
#################################### Anonymous Auth ######################
[auth.anonymous]
# enable anonymous access
enabled = true
 
# specify organization name that should be used for unauthenticated users
;org_name = Main Org.
 
# specify role for unauthenticated users
org_role = Viewer
```

重启Grafana以生效

```shell
systemctl restart grafana-server
```

## 生成图片或导出PDF发送至企业微信

### 图片生成

上面安装的时候我们演示了如何对一个Panel生成图片,那如何对一个dashboard也生成一个图片呢?

官网的说法是: 不支持

但我问了很多大佬,最终找到了好用的方法.

既然Panel可以生成,那我们直接拼接Panel的链接不就好了.

假如你的Dashboard的链接是这样的

http://GrafanaIP:3000/d/9CWBz0bik/zhu-ji-zi-yuan-qing-dan?orgId=1

那么你的图片生成链接就是这样子的

http://GrafanaIP:3000/render/d/9CWBz0bik/zhu-ji-zi-yuan-qing-dan?orgId=1&from=now-1h&to=now&width=1600&height=100000

如果图片的长宽或者显示图表时常你不满意,也可以通过修改参数来更改 from,width,height.

> 发送图片至企业微信机器人请借鉴:https://www.jianshu.com/p/f1a0cbd13a70

### PDF文件生成

假如你的Dashboard的链接是这样的

http://GrafanaIP:3000/d/9CWBz0bik/zhu-ji-zi-yuan-qing-dan?orgId=1

那么你的PDF生成链接就是这样子的

http://GrafanaIP:8686/api/v5/report/9CWBz0bik

> 定时发送运维日报文件PDF到企业微信机器人脚本如下

请根据自身情况合适修改,如修改企业微信机器人提供的KEY等

```shell
#**********************************************************
#作者: Vlinux
#最新修改: 2022-01-12 16:43
#文件名: wxbot_sendfile.sh
#描述: 自动发送服务器指定文件到企业微信群聊机器人
#**********************************************************
#!/bin/bash
time=$(date "+%Y%m%d")
wget -O /opt/devops/运维日报$(date "+%Y%m%d").pdf http://GrafanaIP:8686/api/v5/report/G3PSmI17k
#---------------------------------------------------修改部分-----------------------------------
Webhook=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=a3114e-9708--8135-6941761ffb08
file_dir=/opt/devops/运维日报${time}.pdf #文件所在目录
echo $file_dir
#----------------------------------------------------END--------------------------------------
key=$(echo $Webhook | awk -F = '{print $2}')
if test -s $file_dir; then
 file_id=`curl -s -F media=@$file_dir "https://qyapi.weixin.qq.com/cgi-bin/webhook/upload_media?key=$key&amp;type=file" |
 awk 'END{print}'|awk -F '"' '{print $14}'`
   else
 echo 未检测到文件，脚本退出
 exit 1
fi

curl ${Webhook} \
 -H 'Content-Type: application/json' \
 -d '
 {
 "msgtype": "file",
 "file": {
 "media_id": "'$file_id'"

 }
 }'
```

