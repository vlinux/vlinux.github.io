---
title: Docker搭建Nginx日志高级监控-基于Loki + Promtail + Grafana
categories: 监控分析
tags: [Loki]
date: 2021-06-30 14:55:35
---
# 手把手搭建Nginx日志高级监控 —— 基于Loki + Promtail + Grafana

>参考官方文档：
>
>Loki: https://grafana.com/docs/loki/latest/
>
>Grafana Loki V2 Dashboard for Nginx https://grafana.com/grafana/dashboards/12559?pg=dashboards&plcmt=featured-main

日志收集效果截图：

![12345678](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/12345678.png)

![23456](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/23456.png)

# 1. Loki + Promtail简介

官网有说明。

简单理解，

Loki是个日志监控系统，可用来分析日志，并提供给Grafana进行图形化展示。

Promtail是个日志转发的代理，用于给Loki提供日志数据的。

# 2. Loki + Promtail下载并安装启动

```shell
wget https://github.com/grafana/loki/blob/main/cmd/loki/loki-local-config.yaml -O loki-config.yaml
docker run --name loki -v $(pwd):/mnt/config -p 3100:3100 grafana/loki:2.1.0 -config.file=/mnt/config/loki-config.yaml
wget https://github.com/grafana/loki/blob/main/clients/cmd/promtail/promtail-docker-config.yaml -O promtail-config.yaml
docker run --name promtail -v $(pwd):/mnt/config -v /usr/local/nginx/logs:/usr/local/nginx/logs grafana/promtail:2.1.0 -config.file=/mnt/config/promtail-config.yaml
```

> 脚本来自官网，容器启动后先停止，然后修改配置文件

# 3. 修改Nginx配置

```
log_format json_analytics '{'
                            '"msec": "$msec", ' # request unixtime in seconds with a milliseconds resolution
                            '"connection": "$connection", ' # connection serial number
                            '"connection_requests": "$connection_requests", ' # number of requests made in connection
                    '"pid": "$pid", ' # process pid
                    '"request_id": "$request_id", ' # the unique request id
                    '"request_length": "$request_length", ' # request length (including headers and body)
                    '"remote_addr": "$remote_addr", ' # client IP
                    '"remote_user": "$remote_user", ' # client HTTP username
                    '"remote_port": "$remote_port", ' # client port
                    '"time_local": "$time_local", '
                    '"time_iso8601": "$time_iso8601", ' # local time in the ISO 8601 standard format
                    '"request": "$request", ' # full path no arguments if the request
                    '"request_uri": "$request_uri", ' # full path and arguments if the request
                    '"args": "$args", ' # args
                    '"status": "$status", ' # response status code
                    '"body_bytes_sent": "$body_bytes_sent", ' # the number of body bytes exclude headers sent to a client
                    '"bytes_sent": "$bytes_sent", ' # the number of bytes sent to a client
                    '"http_referer": "$http_referer", ' # HTTP referer
                    '"http_user_agent": "$http_user_agent", ' # user agent
                    '"http_x_forwarded_for": "$http_x_forwarded_for", ' # http_x_forwarded_for
                    '"http_host": "$http_host", ' # the request Host: header
                    '"server_name": "$server_name", ' # the name of the vhost serving the request
                    '"request_time": "$request_time", ' # request processing time in seconds with msec resolution
                    '"upstream": "$upstream_addr", ' # upstream backend server for proxied requests
                    '"upstream_connect_time": "$upstream_connect_time", ' # upstream handshake time incl. TLS
                    '"upstream_header_time": "$upstream_header_time", ' # time spent receiving upstream headers
                    '"upstream_response_time": "$upstream_response_time", ' # time spend receiving upstream body
                    '"upstream_response_length": "$upstream_response_length", ' # upstream response length
                    '"upstream_cache_status": "$upstream_cache_status", ' # cache HIT/MISS where applicable
                    '"ssl_protocol": "$ssl_protocol", ' # TLS protocol
                    '"ssl_cipher": "$ssl_cipher", ' # TLS cipher
                    '"scheme": "$scheme", ' # http or https
                    '"request_method": "$request_method", ' # request method
                    '"server_protocol": "$server_protocol", ' # request protocol, like HTTP/1.1 or HTTP/2.0
                    '"pipe": "$pipe", ' # "p" if request was pipelined, "." otherwise
                    '"gzip_ratio": "$gzip_ratio", '
                    '"http_cf_ray": "$http_cf_ray"'
                    '}';
access_log logs/json_access.log json_analytics;
```

> 这一步是将Nginx输出的日志文件进行格式化

# 4. 修改Promtail配置

```yaml
server:
  http_listen_port: 0
  grpc_listen_port: 0
 
positions:
  filename: /tmp/positions.yaml
 
clients:
  - url: http://172.17.0.4:3100/loki/api/v1/push  # Loki日志推送地址
 
scrape_configs:
  - job_name: system
    #pipeline_stages:
    #- replace:
    #    expression: '(?:[0-9]{1,3}\.){3}([0-9]{1,3})'
    #    replace: '***'
    static_configs:
      - targets:
          - localhost # 根据官方文档，这里只能是localhost
        labels:
          job: nginx_access_log
          agent: promtail
          __path__: /usr/local/nginx/logs/json_access.log  # 需要上传的日志地址。
```

# 5. 重启Loki+Promtail容器

```shell
docker restart loki 
docker restart promtail
```

# 6. 配置Grafana数据源

![image-20210630142131562](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630142131.png)

# 7. 配置Grafana模版

模版ID：12559

非常装逼，非常热门

导入方法与本博客多篇日志收集Grafana导入方法相同

![image-20210630142256248](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630142256.png)

# 8. 查看面板

![image-20210630142558503](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630142558.png)

![image-20210630142622826](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630142622.png)

插件因素显示不全请自行安装，grafana-cli plugins install *****

# 9. 可查看指标

- 总请求量
- 状态码 2xx,3xx,5xx请求量
- 流量情况
- 请求明细
- 百分之95请求响应时间
- 最大请求IP
- 最大请求路径

# 10. 国家面板

Country面板无数据，是因为Grafana没有地图面板插件，且Nginx默认没有开启国家城市过滤。

**文章最下面进行操作**

# 11. 资源消耗

![image-20210630143102322](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630143102.png)

就这资源消耗，还要啥自行车？要啥ELK？



-----------------------------------------



## Ngin添加GeoIP模块

## 1.1 停止现有Nginx

```bash
./nginx -s stop
```

## 1.2 带GeoIP重新编译Nginx

### 1.2.1 下载GeoIP依赖

```bash
sudo apt install libgeoip1 libgeoip-dev geoip-bin
```

github文档如下

![img](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630143344.png)

### 1.2.2 进入nginx/sbin目录查看现有nginx模块依赖

```bash
./nginx -V
```

![image-20210630143504540](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630143504.png)

如上图，将红线位置拷贝，用于添加模块重新编译

### 1.2.3 添加geoip模块重新编译

```shell
./configure --prefix=/usr/local/nginx --with-http_gzip_static_module \
 --with-http_stub_status_module --with-http_ssl_module --with-pcre --with-file-aio \
 --with-http_realip_module --with-http_geoip_module --add-module=/usr/local/nginx-module-vts-master
```

```shell
make && make install 
```

### 1.2.4 执行命令，查看geoip是否编译成功

```
nginx -V
```

带 --with-http_geoip_module 即编译成功

## 1.3. 查看GeoIP.dat位置

```shell
root@daicytest01:/usr/local/nginx/sbin# whereis GeoIP
GeoIP: /usr/include/GeoIP.h /usr/share/GeoIP
root@daicytest01:/usr/share/GeoIP# ls -al
total 10012
drwxr-xr-x   2 root root    4096 Feb 17 22:14 .
drwxr-xr-x 121 root root    4096 Feb 17 22:14 ..
-rw-r--r--   1 root root 2099217 Jan 23  2020 GeoIP.dat
-rw-r--r--   1 root root 8138841 Jan 23  2020 GeoIPv6.dat
```

## 1.4. 修改nginx配置文件

```bash
# 添加国家模块配置
 geoip_country /usr/share/GeoIP/GeoIP.dat;
```

## 1.5. 重启nginx

```shell
nginx -s reload 
```

## 1.6. 查看大图

![img](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210630144706.png)

## 1.7. 监控日志支持正则匹配

```bash
root@daicytest01:/usr/local/nginx/logs# ls
access.log  error.log  json_access.log  json_access.log.2021-02-17  nginx.pid
 
root@daicytest01:/usr/local/loki+promtail# vim promtail-config.yaml  
  static_configs:
      - targets:
          - localhost
        labels:
          job: nginx_access_log
          agent: promtail
          __path__: /usr/local/nginx/logs/*json_access.log*
```



