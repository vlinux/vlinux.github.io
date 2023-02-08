---
title: 轻量级日志分析新秀Loki
categories: ELK-stack
tags: [Loki]
date: 2021-04-07 14:08:55
---
### 简介：

Loki的第一个稳定版本于2019年11月19日发布，是 Grafana Labs 团队最新的开源项目，是一个水平可扩展，高可用性，多租户的日志聚合系统。Loki 是专门用于聚集日志数据，重点是高可用性和可伸缩性。与竞争对手不同的是，它确实易于安装且资源效率极高。

### 特点：

优点：

1、Loki的架构非常简单，使用了和prometheus一样的标签来作为索引，通过这些标签既可以查询日志的内容也可以查询到监控的数据，不但减少了两种查询之间的切换成本，也极大地降低了日志索引的存储。

2、与ELK相比，消耗的成本更低，具有成本效益。

3、在日志的收集以及可视化上可以连用grafana，实现在日志上的筛选以及查看上下行的功能。

### 缺点：

1、技术比较新颖，相对应的论坛不是非常活跃。

2、功能单一，只针对日志的查看，筛选有好的表现，对于数据的处理以及清洗没有ELK强大，同时与ELK相比，对于后期，ELK可以连用各种技术进行日志的大数据处理，但是loki不行。

### 组成

```
1.loki是主服务器，负责存储日志和处理查询。
2.promtail是代理，负责收集日志并将其发送给 loki 。
3.Grafana用于 UI 展示。
```

本次安装使用docker部署

#### 1.0 安装  docker-compose

```
curl -L "https://github.com/docker/compose/releases/download/1.28.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

#### 2.0 下载yaml文件

```
wget https://raw.githubusercontent.com/grafana/loki/v2.2.0/production/docker-compose.yaml -O docker-compose.yaml
version: "3"

networks:
  loki:

services:
  loki:
    image: grafana/loki:2.0.0
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml
    networks:
      - loki

  promtail:
    image: grafana/promtail:2.0.0
    volumes:
      - /var/log:/var/log
    command: -config.file=/etc/promtail/config.yml
    networks:
      - loki

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    networks:
      - loki
```

#### 3.0 启动服务

```
docker-compose -f docker-compose.yaml up
```

#### 4.0 检查服务



#### 5.0 配置服务

http://192.168.106.202:3000/![640](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140410.png)

默认granfna密码admin/admin

##### 5.1 配置数据源

![640 (1)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140449.png)

配置ip和默认数据源，配置完成点击测试/保存

![640 (2)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140524.png)

##### 5.2 配置数据源

explore 查询样例

![640 (3)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140548.png)

##### 5.3 输出匹配日志信息

![640 (4)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140619.png)

至此一次样例日志查询完成

#### 6.0 promtail配置详解

promtail容器为日志采集容器，配置文件在promtail容器/etc/promtail/config.yml，将该容器部署在需要采集日志的服务器上就能正常采集日志传回loki服务收集整理

```
root@2a0cc144dd58:/#  cat  /etc/promtail/config.yml
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push     #这里配置的地址为loki服务器日志收集的信息

scrape_configs:
- job_name: system
  static_configs:
  - targets:
      - localhost
    labels:
      job: varlogs                       #这里为刚才选择job下子标签
      __path__: /var/log/*log            #将采集的日志放在/var/log/*log下自动发现
```

#### 7.0 增加一台服务器日志采集

##### 7.1 编写  promtail的配置文件config.yml

```
mkdir  /root/promtail  &&cd  /root/promtail

[root@node2 promtail]# cat config.yml 
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://192.168.106.202:3100/loki/api/v1/push     #这里配置的地址为loki服务器日志收集的信息

scrape_configs:
- job_name: mysql
  static_configs:
  - targets:
      - localhost
    labels:
      job: mysql                         #这里为刚才选择job下子标签
      __path__: /var/log/*log            #将采集的日志放在/var/log/*log下自动发现
```

##### 7.2 编写docker-compose.yaml配置文件

```
[root@node2 promtail]# cat  docker-compose.yaml 
version: "v1"

services:
  promtail:
    image: grafana/promtail:2.0.0               #拉去镜像
    container_name: promtail-node              #镜像名称
    volumes:
      - /root/promtail/config.yml:/etc/promtail/config.yml    #挂载目录
      - /var/log:/var/log           
    network_mode: 'host'
```

##### 7.3 启动

```
docker-compose up -d 
```

##### 8.0 去loki上查看检索

![640 (5)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140652.png)

![640 (6)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140730.png)

![640 (7)](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140756.png)

可以根据数据查询到相应日志信息