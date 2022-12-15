---
title: Nginx反向代理负载均衡
categories: Linux技术
tags: [Nginx,Nginx反向代理,Nginx负载均衡]
date: 2019-09-16 21:00:00
---
# 第一章 反向代理

## Nginx代理服务基本概述

1.代理一词往往并不陌生, 该服务我们常常用到如(代理理财、代理租房、代理收货等等)，如下图所示



![img](http://upload-images.jianshu.io/upload_images/14248468-a3b5875e1b44445a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



2.在没有代理模式的情况下，客户端和 Nginx 服务端，都是客户端直接请求服务端，服务端直接响应客户端。



![img](http://upload-images.jianshu.io/upload_images/14248468-b0f9334374c9a40f.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


3.那么在互联网请求里面, 客户端往往无法直接向服务端发起请求, 那么就需要用到代理服务, 来实现客户端和服务通信，如下图所示

![img](http://upload-images.jianshu.io/upload_images/14248468-7ef0e8f177241a7b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

## 正向代理和反向代理

以访问Goo为例，客户端连接到VPN相当于正向代理
VPN代理请求访问后端服务器并返回属于反向代理

## Nginx代理服务支持的协议

1.Nginx 作为代理服务，可支持的代理协议非常的多，具体如下图



![img](http://upload-images.jianshu.io/upload_images/14248468-e812f49d132dc120.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



2.如果将 Nginx 作为反向代理服务，常常会用到如下几种代理协议，如下图所示



![img](http://upload-images.jianshu.io/upload_images/14248468-9338a70ac645620d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


3.反向代理模式与 Nginx 代理模块总结如表格所示

![img](http://upload-images.jianshu.io/upload_images/14248468-5dd0c477e40e6079.png?imageMogr2/auto-orient/strip|imageView2/2/w/742/format/webp)

## Nginx反向代理配置语法

1.Nginx代理配置语法



```php
Syntax: proxy_pass URL;
Default: —
Context: location, if in location, limit_except
http://localhost:8000/uri/
http://192.168.56.11:8000/uri/
http://unix:/tmp/backend.socket:/uri/
```

2.添加传递给后端服务器的请求头信息



```php
Syntax: proxy_set_header field value;
Default: proxy_set_header Host $proxy_host;
proxy_set_header Connection close;
Context: http, server, location
# 用户请求的时候 HOST 的值是 www.oldboy.com, 那么代理服务会像后端传递请求的还是 www.oldboy.com
proxy_set_header Host $http_host;
# 将$remote_addr 的值放进变量 X-Real-IP 中， $remote_addr 的值为客户端的 ip
proxy_set_header X-Real-IP $remote_addr;
# 客户端通过代理服务访问后端服务, 后端服务通过该变量会记录真实客户端地址
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```

3.代理到后端的TCP连接数，响应，返回等超时时间



```php
//nginx 代理与后端服务器连接超时时间(代理连接超时)
Syntax: proxy_connect_timeout time;
Default: proxy_connect_timeout 60s;
Context: http, server, location
//nginx 代理等待后端服务器的响应时间
Syntax: proxy_read_timeout time;
Default: proxy_read_timeout 60s;
Context: http, server, location
//后端服务器数据回传给 nginx 代理超时时间
Syntax: proxy_send_timeout time;
Default: proxy_send_timeout 60s;
Context: http, server, location
```

4.代理缓冲区



```php
//nignx 会把后端返回的内容先放到缓冲区当中，然后再返回给客户端,边收边传, 不是全部接收完再传给客户端
Syntax: proxy_buffering on | off;
Default: proxy_buffering on;
Context: http, server, location
//设置 nginx 代理保存用户头信息的缓冲区大小
Syntax: proxy_buffer_size size;
Default: proxy_buffer_size 4k|8k;
Context: http, server, location
//proxy_buffers 缓冲区
Syntax: proxy_buffers number size;
Default: proxy_buffers 8 4k|8k;
Context: http, server, location
```

5.proxy代理网站常用配置
将配置写入新文件，调用时使用include引用即可



```ruby
[root@lb01 ~]# cat /etc/nginx/proxy_params 
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_connect_timeout 30;
proxy_send_timeout 60;
proxy_read_timeout 60;
proxy_buffering on;
proxy_buffer_size 32k;
proxy_buffers 4 128k;
```

6.代理配置location时调用，方便后面多个location重复使用



```php
location / {
    proxy_pass http://127.0.0.1:8080;
    include proxy_params;
}
```

## Nginx反向代理实战

配置关系图：



![img](http://upload-images.jianshu.io/upload_images/14248468-624ce98a23326448.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



1.环境准备



```undefined
lb01       代理服务器
web01   web服务器
```

2.web01服务器配置
配置一个网站，监听在 8080，此时网站仅 172 网段的用户能访问



```csharp
[root@web01 ~]# cd /etc/nginx/conf.d/
[root@web01 conf.d]# vim web.conf
server {
    listen 8080;
    server_name localhost;
    location / {
        root /code;
        index index.html;
        deny 10.0.0.0/24;
        allow all;
    }
}
[root@web01 conf.d]# mkdir /code
[root@web01 conf.d]# echo "web01-7" >/code/index.html
[root@web01 conf.d]# systemctl restart nginx
```

3.配置lb01代理服务器
配置监听 eth0 的 80 端口，使 10.0.0.0 网段的用户，能够通过代理服务器访问到后端的172.16.1.7 的 8080 端口站点内容



```csharp
[root@lb01 ~]# cd /etc/nginx/conf.d/
[root@lb01 conf.d]# cat proxy_web_node1.conf
server {
    listen 80;
    server_name nginx.oldboy.com;
    location / {
        proxy_pass http://172.16.1.7:8080;
        include proxy_params;
    }
}
[root@lb01 conf.d]# systemctl enable nginx
[root@lb01 conf.d]# systemctl start nginx
```

# 第二章 负载均衡

## Nginx负载均衡概述

### 为什么需要负载均衡

我们的 Web 服务器直接面向用户，往往要承载大量并发请求，单台服务器难以负荷，我使用多台 WEB 服务器组成集群，前端使用 Nginx 负载均衡，将请求分散的打到我们的后端服务器集群中，实现负载的分发。那么会大大提升系统的吞吐率、请求性能、高容灾



![img](http://upload-images.jianshu.io/upload_images/14248468-3e3daa9bf57283c3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



往往我们接触的最多的是 SLB(Server Load Balance)负载均衡，实现最多的也是 SLB、那么 SLB 它的调度节点和服务节点通常是在一个地域里面。那么它在这个小的逻辑地域里面决定了他对部分服务的实时性、响应性是非常好的。
所以说当海量用户请求过来以后，它同样是请求调度节点，调度节点将用户的请求转发给后端对应的服务节点，服务节点处理完请求后在转发给调度节点，调度节点最后响应给用户节点。这样也能实现一个均衡的作用，那么Nginx 则是一个典型的 SLB

## Nginx负载均衡配置场景

### 1.四层负载均衡

所谓四层负载均衡指的是 OSI 七层模型中的传输层，那么传输层 Nginx 已经能支持 TCP/IP 的控制，所以只需要对客户端的请求进行 TCP/IP 协议的包转发就可以实现负载均衡，那么它的好处是性能非常快、只需要底层进行应用处理，而不需要进行一些复杂的逻辑



![img](http://upload-images.jianshu.io/upload_images/14248468-969d03f8082a1915.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

### 2.七层负载均衡

七层负载均衡它是在应用层，那么它可以完成很多应用方面的协议请求，比如我们说的 http 应用的负载均衡，它可以实现 http 信息的改写、头信息的改写、安全应用规则控制、 URL 匹配规则控制、以及转发、 rewrite 等等的规则，所以在应用层的服务里面，我们可以做的内容就更多，那么 Nginx 则是一个典型的七层负载均衡 SLB



![img](http://upload-images.jianshu.io/upload_images/14248468-f61309f2feaf95e3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

### 3.四层负载均衡与七层负载均衡区别

四层负载均衡数据包在底层就进行了分发，而七层负载均衡数据包则是在最顶层进行分发、由此可以看出，七层负载均衡效率没有四负载均衡高。
但七层负载均衡更贴近于服务，如:http 协议就是七层协议，我们可以用 Nginx 可以作会话保持， URL 路径规则匹配、 head 头改写等等，这些是四层负载均衡无法实现的

## Nginx负载均衡调度算法

![img](http://upload-images.jianshu.io/upload_images/14248468-373a5e02f00f66ae.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

## Nginx负载均衡配置参数

![img](http://upload-images.jianshu.io/upload_images/14248468-3f7e8e92e3982c78.png?imageMogr2/auto-orient/strip|imageView2/2/w/746/format/webp)

## Nginx反向代理负载均衡关系图

![img](http://upload-images.jianshu.io/upload_images/14248468-c02fb171c4f25977.png?imageMogr2/auto-orient/strip|imageView2/2/w/704/format/webp)

## Nginx负载均衡实战

### 1.规划分类



```cpp
/upload     10.0.0.8:80     upload服务器
/static     10.0.0.7:80     static静态服务器
/           10.0.0.9:80     默认服务器
```

### 2.创建地址池



```undefined
upstream upload_pools{
    server 10.0.0.8:80;
}

upstream static_pools{
    server 10.0.0.7:80;
}

upstream defaule_pools{
    server 10.0.0.9:80;
}
```

### 3.匹配条件



```php
location /static/ { 
    proxy_pass http://static_pools;
    include proxy_params;
}

###将符合upload的请求交给上传服务器池upload_pools,配置如下
location /upload/ { 
    proxy_pass http://upload_pools;
    include proxy_params;
}

###不符合上述规则的请求,默认全交给动态服务器池default_pools,配置如下:
location / { 
    proxy_pass http://default_pools;
    include proxy_params;
}
```

### 4.组合在一起



```php
[root@lb01 ~]# cat /etc/nginx/conf.d/node_proxy.conf
upstream upload_pools {
    server 10.0.0.8:80;
}
upstream static_pools {
    server 10.0.0.7:80;
}
upstream default_pools {
    server 10.0.0.9:80;
}

server {
    listen 80;
    server_name www.oldboy.com;
    location /static/ { 
        proxy_pass http://static_pools;
        include proxy_params;
    }
    location /upload/ { 
        proxy_pass http://upload_pools;
        include proxy_params;
    }
    location / { 
        proxy_pass http://default_pools;
        include proxy_params;
    }
}
```

### 5.创建代码环境

每个虚拟机存放的网页路径



```cpp
www.oldboy.com/index.html
www.oldboy.com/upload/index.html
www.oldboy.com/static/index.html
```

创建目录及测试页面命令



```bash
mkdir -p /data/html/www/{upload,static}
echo  "$(hostname) default" >/data/html/www/index.html 
echo  "$(hostname) upload" >/data/html/www/upload/index.html 
echo  "$(hostname) static" >/data/html/www/static/index.html 
```

### 6.进行测试



```csharp
[root@lb01 ~]# curl www.oldboy.com/index.html
sweb01 default
[root@lb01 ~]# curl www.oldboy.com/static/
web01 static
[root@lb01 ~]# curl www.oldboy.com/upload/
web02 upload
```

# 第三章 根据条件转发实战

## 3.1 根据文件类型转发

### 转发需求

只需修改nginx.conf的配置文件中的loaction区块代码即可

### lb配置文件



```php
location ~ .*.(gif|jpg|jpeg|png|bmp|swf|css|js)$ {
    proxy_pass http://static_pools;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
}
  
    upstream server_pools {
        server 10.0.0.7 weight=1 max_fails=3 fail_timeout=10s;
        server 10.0.0.8 weight=1 max_fails=3 fail_timeout=10s;
        server 10.0.0.9 weight=1 max_fails=3 fail_timeout=10s;
    }
```

## 3.2 动静分离

### 转发需求

动态资源转发到php服务器
静态资源转发到静态服务器

### 配置文件



```php
[root@lb01 /etc/nginx/conf.d]# cat ds_proxy.conf 
root@lb01 conf.d]# cat ds_proxy.conf
upstream static {
    server 10.0.0.7:80;
}
upstream php {
    server 10.0.0.8:8080;
}
server {
    listen 80;
    server_name ds.oldboy.com;
    location / {
        root /code;
        index index.html;
    }
    location ~ .*\.(png|jpg|gif)$ {
        proxy_pass http://static;
        include proxy_params;
    }
    location ~ .*\.php$ {
        proxy_pass http://php;
        include proxy_params;
    }
}
```

## 3.3 根据客户端转发

### 转发需求

手机和电脑 访问相同的网站----结果不同

### lb服务器配置文件



```php
[root@lb01 conf.d]# cat sj.conf    
upstream iphone {
    server 172.16.1.7:9091;
}
upstream android {
    server 172.16.1.7:9090;
}
upstream pc {
    server 172.16.1.7:9092;
}

server {
    listen 80;
    server_name sj.oldboy.com;
    location / {
        #默认跳转至 pc 站点
        proxy_pass http://pc;
        include proxy_params;
        #如果客户端是 Iphone 则跳转到 iphone 的资源池
        if ($http_user_agent ~* "Iphone") {
            proxy_pass http://iphone;
        } 
        #如果客户端是 Android 则跳转到 android 的资源池
        if ($http_user_agent ~* "Android"){
            proxy_pass http://android;
        } 
        #如果客户端是 IE 浏览器，则返回 403 错误。
        if ($http_user_agent ~* "msie"){
         return 403;
        }
    }
}
```

### web服务器配置



```csharp
[root@web01 conf.d]# cat sj.conf    
server {
    listen 9090;
    location / {
        root /code/android;
        index index.html;
    }
}
server {
    listen 9091;
    location / {
        root /code/iphone;
        index index.html;
    }
}
server {
    listen 9092;
    location / {
        root /code/pc;
        index index.html;
    }
}
[root@web01 conf.d]# mkdir -p /code/{android,iphone,pc}
[root@web01 conf.d]# echo "PC" > /code/pc/index.html
[root@web01 conf.d]# echo "Iphone" > /code/iphone/index.html
[root@web01 conf.d]# echo "Android" > /code/android/index.html
[root@web01 conf.d]# systemctl restart nginx
```

### 访问测试



```css
[root@lb01 conf.d]# curl -A "chrome" sj.oldboy.com
PC
[root@lb01 conf.d]# curl -A "iphone" sj.oldboy.com      
Iphone
[root@lb01 conf.d]# curl -A "android" sj.oldboy.com      
Android  
```