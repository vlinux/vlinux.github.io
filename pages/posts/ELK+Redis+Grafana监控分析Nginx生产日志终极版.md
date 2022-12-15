---
title: ELK+Redis+Grafana监控分析Nginx生产日志终极版
categories: DevOps
tags: [ELK+Redis+Grafana]
date: 2020-10-13 13:23:00
---
## 先上架构图

![74899ea95827d087e0f86d034cfbaea6](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/74899ea95827d087e0f86d034cfbaea6.png)

- Nginx 会将我们定义的log*format写入/var/log/nginx/access*json.log文件，Filebeat会将其作为输入项。
- Filebeat会将数据输出到Redis
- Logstash作为Redis数据的过滤将数据存储Elasticsearch
- Grafana读取Elasticsearch数据源

## 简单介绍下Grafana

> grafana 是一款采用 go 语言编写的开源应用，主要用于大规模指标数据的可视化展现，是网络架构和应用分析中最流行的时序数据展示工具，目前已经支持绝大部分常用的时序数据库,官网（http://docs.grafana.org/）.

## 监控指标

针对入口Nginx，我设计了如下的监控指标：

- 最近的24小时内访问量Top10的国家
- 最近24小时最受欢迎的页面
- 200状态码和404状态码的比例
- 最受欢迎的世界题图展示
- 等等
- 实际上这些东西根本不是我设计的，百度一大堆，甚至最后模板也是照抄官网
- 可我们活着每一天不都是在复制粘贴吗

## 开始部署

### Nginx

关闭安全机制

```
setenforce 0
systemctl stop firewalld
```



配置repo源

```
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
```

安装nginx

```
yum -y install
```

替换nginx输入日志格式为json格式

```
    log_format  main '{"@timestamp":"$time_iso8601",'
    '"host":"$hostname",'
    '"server_ip":"$server_addr",'
    '"client_ip":"$remote_addr",'
    '"xff":"$http_x_forwarded_for",'
    '"domain":"$host",'
    '"url":"$uri",'
    '"referer":"$http_referer",'
    '"args":"$args",'
    '"upstreamtime":"$upstream_response_time",'
    '"responsetime":"$request_time",'
    '"request_method":"$request_method",'
    '"status":"$status",'
    '"size":"$body_bytes_sent",'
    '"request_body":"$request_body",'
    '"request_length":"$request_length",'
    '"protocol":"$server_protocol",'
    '"upstreamhost":"$upstream_addr",'
    '"file_dir":"$request_filename",'
    '"http_user_agent":"$http_user_agent"'
  '}';
```

#不知道怎么替换的可以查百度,如果您用的是虚拟主机,请在虚拟主机conf文件中配置引用你主配置文件的log输入定义.

虚拟主机配置文件修改log输入写法如下#如果您没有虚拟主机请跳过这一步

```
access_log  /var/log/nginx/access.log main ;
```

配置完成后启动Nginx.

```
systemctl start nginx
```

```
curl 127.0.0.1
tail -1 /var/log/nginx/access.log
检测是否输入格式为json
```

## Redis

```
yum -y install redis
```

```
cat /etc/redis.conf

bind 127.0.0.1 192.168.1.101 #只有这里需要配置为您的内网IP地址
protected-mode yes
port 6379
tcp-backlog 511
timeout 0
tcp-keepalive 300
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile /var/log/redis/redis.log
databases 16
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
dir /var/lib/redis
slave-serve-stale-data yes
slave-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-disable-tcp-nodelay no
slave-priority 100
appendonly no
appendfilename "appendonly.aof"
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
aof-load-truncated yes
lua-time-limit 5000
slowlog-log-slower-than 10000
slowlog-max-len 128
latency-monitor-threshold 0
notify-keyspace-events ""
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit slave 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
hz 10
aof-rewrite-incremental-fsync yes
```

启动redis

```
systemctl start redis
```

## 安装ELK

ELK的安装前提是需要java环境的,这里图省事,直接用yum安装java

安装java

```
yum -y install java
```

验证java

```
java -version
```

### ELK版本需要统一不然会出大问题,这里统一采用最新版7.9.1

#### 安装ES(elasticsearch)

```
[root@master1 opt]# ls
elasticsearch-7.9.1-x86_64.rpm  grafana-7.0.1-1.x86_64.rpm  logstash-7.9.1.rpm
filebeat-7.9.1-x86_64.rpm       kibana-7.9.1-x86_64.rpm
[root@master1 opt]# rpm -ivh elasticsearch-7.9.1-x86_64.rpm 
```

不要着急启动,先修改配置文件

```
[root@master1 opt]# cat /etc/elasticsearch/elasticsearch.yml | grep -v "^$" | grep -v "^#"
#节点名称
node.name: node-1
#程序工作目录
path.data: /var/lib/elasticsearch
#程序日志产生目录
path.logs: /var/log/elasticsearch
#内存锁定
bootstrap.memory_lock: true
#你的本地IP跟本地回环
network.host: 192.168.1.101,127.0.0.1  
#端口
http.port: 9200
#7.0以后都需要加的配置项
cluster.initial_master_nodes: ["node-1"] 
```

由于我们配置了锁定内存所以在系统文件里也要有相应的配置

```
官方解决方案
https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setup-configuration-memory.html

https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setting-system-settings.html#sysconfig
```

```
vim /usr/lib/systemd/system/elasticsearch.service
### 增加如下参数
[Service]
LimitMEMLOCK=infinity
```

保存后重载系统配置,启动ES

```
systemctl daemon-reload
systemctl restart elasticsearch
```

检测ES

```
检测端口是否开启
netstat -apunt | grep 9200
或者
curl 127.0.0.1:9200
```

#### 安装filebeat

```
[root@master1 opt]# rpm -ivh filebeat-7.9.1-x86_64.rpm
```

配置文件修改

```
[root@QLaliyun ~]# cat /etc/filebeat/filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/nginx/access.log
  json.keys_under_root: true
  json.overwrite_keys: true
  json.add_error_key: true
filebeat.config.modules:
  path: ${path.config}/modules.d/*.yml
  reload.enabled: false
setup.template.settings:
  index.number_of_shards: 1
setup.kibana:
  host: "127.0.0.1:5601"
output.redis:
  hosts: ["localhost"] 
  db: 0
  key: "nginx_logs" 
  timeout: 5
processors:
  - add_host_metadata:
      when.not.contains.tags: forwarded
  - add_cloud_metadata: ~
  - add_docker_metadata: ~
  - add_kubernetes_metadata: ~
```

启动filebeat

````
systemctl start filebeat
````

#### 安装logstash

```
[root@master1 opt]# rpm -ivh logstash-7.9.1.rpm 
```

修改logstash配置文件,后期用nohup方式启动,不知道的话不用关心 跟着操作就行，注意下载世界IP库文件
[file href="https://wwe.lanzous.com/i0a1Amdjezi"]GeoLite2-City.mmdb[/file]

```
[root@master1 ~]# cat /etc/logstash/conf.d/yh_nginx_redis.conf
input {
  # redis nginx key
  redis {
    data_type =>"list"
    key =>"nginx_logs"
    host =>"127.0.0.1"
    port => 6379
   # password => "password"
    db => 0
  }
}

filter {
  geoip {
    #multiLang => "zh-CN"
    target => "geoip"
    source => "client_ip"
    #下面这个IP库请一定要配置到位,不然装不了逼
    database => "/usr/share/logstash/GeoLite2-City.mmdb"
    add_field => [ "[geoip][coordinates]", "%{[geoip][longitude]}" ]
    add_field => [ "[geoip][coordinates]", "%{[geoip][latitude]}" ]
    remove_field => ["[geoip][latitude]", "[geoip][longitude]", "[geoip][country_code]", "[geoip][country_code2]", "[geoip][country_code3]", "[geoip][timezone]", "[geoip][continent_code]", "[geoip][region_code]"]
  }
  mutate {
    convert => [ "size", "integer" ]
    convert => [ "status", "integer" ]
    convert => [ "responsetime", "float" ]
    convert => [ "upstreamtime", "float" ]
    convert => [ "[geoip][coordinates]", "float" ]
    remove_field => [ "ecs","agent","host","cloud","@version","input","logs_type" ]
  }
  useragent {
    source => "http_user_agent"
    target => "ua"
    remove_field => [ "[ua][minor]","[ua][major]","[ua][build]","[ua][patch]","[ua][os_minor]","[ua][os_major]" ]
  }
}
output {
  elasticsearch {
    hosts => "http://127.0.0.1:9200"
#    user => "elastic"
#    password => "password"
    index => "logstash-nginx-%{+YYYY.MM}"
  }
}
[root@lyecs ~]# 

```

启动logstash

```
nohup /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/yh_nginx_redis.conf &
```

#### 安装Grafana

推荐使用7.0以下版本,否则可能会和部分插件不兼容,这里用的是6.3.2

```
[root@master1 opt]# rpm -ivh grafana-7.0.1-1.x86_64.rpm
```

由于我们后期会用到某些插件所以在这里提前安装

```
grafana-cli plugins install grafana-piechart-panel
grafana-cli plugins install grafana-world-map
```

国内服务器可能安装不上,那就自己想办法好吧

由于某些不可抗力因素如果后期在模板导入后出现地图图片不能正常显示的原因可以.采用以下做法

参考博客:https://www.cnblogs.com/xuewenlong/p/12929443.html

好的我们直接打开Grafana奥里给

```
systemctl start grafana-server
```

##### 配置数据源

![image-20201013131436778](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131436778.png)

点击Save&test测试成功后Back

导入监控模板

![image-20201013131610205](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131610205.png)

![image-20201013131647199](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131647199.png)

![image-20201013131729032](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131729032.png)

下面直接出图![123](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/123.png)

![456](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/456.png)