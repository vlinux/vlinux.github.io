---
title: Telegraf+InfluxDB+Grafana+Docker搭建服务器监控平台
categories: Grafana
tags: [Telegraf+InfluxDB+Grafana+Docker]
date: 2021-01-13 14:02:00
---
# Telegraf+InfluxDB+Grafana+Docker搭建服务器监控平台

## 写在前面

因为监控Docker的事情头疼了很久,终于找到了这个很适合业务需求的方案.(我知道你们肯定想说,那么多监控docker的方案都不能使用吗?答案是:可能会使用,但我是FW)

要搭建服务器监控平台，总共分三步：
第一步，数据采集；
第二步，数据存储；
第三步，数据可视化。

其中，数据存储连接数据采集与数据可视化，是非常重要的中间环节。本文选择了时序数据库InfluxDB。

InfluxDB是一款优秀的**时间序列数据库**，适合存储设备性能、日志、物联网传感器等带时间戳的数据。能轻松处理高写入和高查询负载（数据采集与数据可视化非常常见的场景）。具体介绍请参阅InfluxDB官方文档：https://docs.influxdata.com/influxdb/。

数据采集方面有非常多的选择，~~你甚至可以自己开发一个。~~这里为了方便直接选择Influxdata官方出品的采集工具Telegraf ，毕竟是全家桶产品。Telegraf详情介绍：[https://docs.influxdata.com/telegraf](https://docs.influxdata.com/telegraf/)。

可视化方面选择了超高颜值、功能强大的开源可视化利器Gafana，具体颜值有多高，功能有多强大，本文就不再赘述了，直接上官网：[https://grafana.com/grafana/dashboards](https://grafana.com/grafana/dashboards)。

**原博主甚至还给Grafana做了一下中文的本地汉化：https://github.com/WangHL0927/grafana-chinese。**

Grafana从早期版本就对InfluxDB有着完善的支持。

**最终平台的方案：**
**Telegraf(数据采集)+InfluxDB（数据存储）+Grafana（数据可视化）==>Docker(监控Docker相关业务)。**

## 设计部署

InfluxDB与Grafana直接使用官方容器进行部署，方便快捷。服务器需先安装Docker，具体步骤参考本站文章[CentOS7安装Docker](https://kococ.cn/posts/39421/)。

当然你也可以选择我下面给出的一键安装Docker.适用范围Centos 7.2-7.8,需提前准备epel源

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### 1 部署InfluxDB

```bash
docker pull influxdb:1.6.5
docker run -d -p 8086:8086 --name=influxdb influxdb:1.6.5
```

以上命令dcoker会自动从仓库下载最新版本的influxdb镜像，后台运行一个名为influxdb的容器并映射主机8086端口到容器8086端口。

若想将数据存储到宿主机而非容器内，可使用以下命令启动挂载本地目录到容器内。

```bash
# $pwd为当前工作目录，可替换为其它宿主机目录

docker run -d -p 8086:8086 -v $PWD:/var/lib/influxdb --name=influxdb influxdb
```

启动InfluxDB容器后，通过http接口访问进行测试。

```bash
curl -G http://localhost:8086/query --data-urlencode "q=show databases"
```

若influxdb运行正常，则会返回如下结果：

```bash
# 链接查询参数为show databases 数据库会返回所有的数据库名，新安装的influxdb默认只有一个"_internal"
# 数据库。

{"results":[{"statement_id":0,"series":[{"name":"databases","columns":["name"],"values":[["_internal"],["telegraf"]]}]}]}
```

#### influxdb容器管理

```bash
# 启动
docker start influxdb

# 停止
docker stop influxdb

# 重启
docker restart influxdb
```

------

### 2 安装Telegraf

#### 下载安装

Telegraf为了方便配置调试，选择直接在宿主机安装。

```bash
# 以CentOS为例
# 下载Telegraf
wget https://dl.influxdata.com/telegraf/releases/telegraf-1.6.3-1.x86_64.rpm

# 安装Telegraf
sudo yum localinstall telegraf-1.6.3-1.x86_64.rpm
```

#### 配置Telegraf

用户可修改Telegraf配置文件进行采集项的配置。配置文件默认位于`/etc/telegraf/telegraf.conf`。
在本文方案中，需要配置数据输出项（输出到influxdb），其它项使用telegraf默认即可。

按照示例配置influxdb url、database名称

```bash
###############################################################################
#                            OUTPUT PLUGINS                                   #
###############################################################################

# Configuration for sending metrics to InfluxDB
[[outputs.influxdb]]
  ## The full HTTP or UDP URL for your InfluxDB instance.
  ##
  ## Multiple URLs can be specified for a single cluster, only ONE of the
  ## urls will be written to each interval.
  # urls = ["unix:///var/run/influxdb.sock"]
  # urls = ["udp://127.0.0.1:8089"]

  # influxdb http地址，由于是宿主机直接安装，直接访问本地8086端口即可。
  urls = ["http://127.0.0.1:8086"]

  ## The target database for metrics; will be created as needed.

  # 数据库名，不存在会自动创建，默认"telegraf"
  database = "telegraf"

  ## If true, no CREATE DATABASE queries will be sent.  Set to true when using
  ## Telegraf with a user without permissions to create databases or when the
  ## database already exists.

  # 跳过创建数据库
  skip_database_creation = false

  ## Name of existing retention policy to write to.  Empty string writes to
  ## the default retention policy.
  # retention_policy = ""

  ## Write consistency (clusters only), can be: "any", "one", "quorum", "all"
  # write_consistency = "any"

  ## Timeout for HTTP messages.

  # 超时时间
  timeout = "5s"

  ## HTTP Basic Auth
  # username = "telegraf"
  # password = "metricsmetricsmetricsmetrics"

  ## HTTP User-Agent
  # user_agent = "telegraf"

  ## UDP payload size is the maximum packet size to send.
  # udp_payload = 512

  ## Optional SSL Config
  # ssl_ca = "/etc/telegraf/ca.pem"
  # ssl_cert = "/etc/telegraf/cert.pem"
  # ssl_key = "/etc/telegraf/key.pem"
  ## Use SSL but skip chain & host verification
  # insecure_skip_verify = false

  ## HTTP Proxy override, if unset values the standard proxy environment
  ## variables are consulted to determine which proxy, if any, should be used.
  # http_proxy = "http://corporate.proxy:3128"

  ## Additional HTTP headers
  # http_headers = {"X-Special-Header" = "Special-Value"}

  ## HTTP Content-Encoding for write request body, can be set to "gzip" to
  ## compress body or "identity" to apply no encoding.
  # content_encoding = "identity"

  ## When true, Telegraf will output unsigned integers as unsigned values,
  ## i.e.: "42u".  You will need a version of InfluxDB supporting unsigned
  ## integer values.  Enabling this option will result in field type errors if
  ## existing data has been written.
  # influx_uint_support = false
  [[inputs.docker]]
  ###指定本机docker运行时sock文件
  endpoint = "unix:///var/run/docker.sock"
  ###设置为true以收集集群度量
  ###如果使用docker-compose或者docker-swarm需要用到
  gather_services = false
  ###排除容器名等配置
  container_name_include = []
  container_name_exclude = []
  ###Docker统计信息超时时间
  timeout = "5s"
  ###包含和排除docker标签,空数组包含所有标签
  ###哪些环境变量，我们应该作为一个标签使用＃tag_env = “ JAVA_HOME ”，“ HEAP_SIZE ” ] ＃＃可选TLS配置＃ tls_ca = “/etc/telegraf/ca.pem” ＃ TLS_CERT = “/etc/telegraf/cert.pem” ＃ TLS_KEY = “/etc/telegraf/key.pem”
  docker_label_include = []
  docker_label_exclude = []
  ###每个容器的IO报告
  perdevice = true
  ###每个容器的总IO和网络统计信息
  total = false
```

Telegraf提供的采集内容非常丰富，将相应配置项取消注释并重启Telegraf即可生效。其它更多配置项请参考Telegraf官方文档：https://docs.influxdata.com/telegraf

#### 启动Telegraf

[tip type="danger" title="注意telegraf权限问题"]
确保telegraf程序正常访问docker.sock
[/tip]

```bash
# 启动
usermod -aG docker telegraf
systemctl start telegraf

# 停止
systemctl stop telegraf

# 重启
systemctl restart telegraf

# 查看服务状态
systemctl status telegraf
```

------

### 部署Grafana

Grafana同样采用官方docker镜像进行快速部署。

```bash
docker run -d -p 3000:3000 --name=grafana grafana/grafana
```

以上命令docker会拉取最新版grafana镜像，运行名为grafana的容器，并映射宿主机3000端口。

初次启动，grafana会创建数据库，时间稍长，稍后即可访问`http://localhost:3000`打开grafana登录页面。
输入默认用户名密码登录（admin）。

你可以自行创建仪表盘,当然也可以引用Grafana官网已经创建好的模板,毕竟你走过的路可能别人早就走过好几遍了.

### Grafana绘图示例

![img1](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/70.jpg)

按照主页向导完成初次配置。

![img2](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/71.jpg)

#### 1 添加数据源

点击添加数据源，按照下图配置选择influxdb添加一个influxdb数据源。

url需配置成正确的宿主机ip和端口（防火墙需放行8086），若不想暴露数据库端口，可换成influxdb容器的ip地址（需自行进入容器查看，容器重启后可能会发生变化）避免数据库暴露至公网。

InfluxDB Details需填写数据名（默认telegraf）、用户名和密码（默认均为root）。

填写完成后，点击`Save&Test`按钮，若访问正常，会出现`Data source is working`提示，否则请检查配置内容以及网络（防火墙）。

![img3](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/72.jpg)

![img4](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/79.jpg)

------

#### 添加仪表板

返回主页，点击添加仪表板按钮添加新仪表板，点击`Graph`创建一个Graph Panel。
![img5](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/80.jpg)

点击标题展开菜单，选择`Edit`进入面板编辑。

![img6](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/75.jpg)

选择`Metrics`选项卡配置面板数据。

如图示配置可显示一条CPU-total的数据曲线。

![img7](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/76.jpg)

还可添加多条查询，同时在一个panel显示多条曲线。

![img8](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/77.jpg)

配置完成后点击上方保存按钮保存仪表板。

Grafana详细的使用方法请参考官方文档：http://docs.grafana.org/或其它教程。

### 引用Grafana官网模板

![image-20201117101720227](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201117101720227.png)

![image-20201117102348557](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201117102348557.png)

![image-20201117102511029](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201117102511029.png)

![cascascascascas](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/cascascascascas.png)

就写到这里.欢迎大佬补充.