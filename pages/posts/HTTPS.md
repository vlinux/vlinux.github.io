---
title: HTTPS
categories: Linux技术
tags: [HTTPS,安全证书]
date: 2019-10-16 21:12:00
---
# 第一章 HTTPS 安全证书基本概述

为什么需要使用HTTPS, 因为HTTP 不安全。当我们使用http 网站时，经常会遇到包遭到劫持和篡改，如果采用https 协议，那么数据在传输过程中是加密的，所以黑客无法窃取或者篡改数据报文信息。
https 主要解决了什么问题，避免网站传输时信息泄露，避免网站传输时内容不被劫持和篡改。
下面我们来了解一下HTTPS 证书类型
HTTPS 证书购买选择



```css
保护1 个域名www
保护5 个域名www images cdn test m
通配符域名 *.oldboy.com
```

## HTTPS 注意事项



```css
Https 不支持续费,证书到期需重新申请新并进行替换.
Https 如果是通配符域名，二级域名和三级域名需要分别购买，如test.m.oldboy.com
Https 显示绿色, 说明整个网站的URL 都是https 的。
Https 显示黄色, 因为网站代码中包含http的不安全连接。
Https 显示红色, 要么证书是假的，要么证书过期
```

# 第二章 Nginx 单台实现HTTPS 实战

1.环境准备



```csharp
#nginx 必须有ssl 模块
[root@web01 ~]# nginx -V
--with-http_ssl_module

#创建存放ssl 证书的路径
[root@web01 ~]# cd /etc/nginx/ssl_key
[root@web01 /etc/nginx/ssl_key]#
```

2.使用openssl 命令充当CA 权威机构创建证书(生产不使用此方式生成证书，因为不会被互联网认可)



```csharp
[root@web01 /etc/nginx/ssl_key]# openssl genrsa -idea -out server.key 2048
Generating RSA private key, 2048 bit long modulus
... +++
e is 65537 (0x10001)

#记住配置密码, 我这里是1234
Enter pass phrase for server.key:
Verifying - Enter pass phrase for server.key:
```

3.生成自签证书，同时去掉私钥的密码



```rust
[root@web01 /etc/nginx/ssl_key]# openssl req -days 36500 -x509 -sha256 -nodes -newkey rsa:2048 -keyout server.key -out server.crt

Country Name (2 letter code) [XX]:CN
State or Province Name (full name) []:BJ
Locality Name (eg, city) [Default City]:BJ
Organization Name (eg, company) [Default Company Ltd]:edu
Organizational Unit Name (eg, section) []:SA
Common Name (eg, your name or your server's hostname) []:oldboy
Email Address []:[oldboy@oldboy.com](mailto:oldboy@oldboy.com)

# req -->用于创建新的证书
# new -->表示创建的是新证书
# x509 -->表示定义证书的格式为标准格式
# key -->表示调用的私钥文件信息
# out -->表示输出证书文件信息
# days -->表示证书的有效期
```

4.证书申请完成后需要了解Nginx 如何配置Https



```php
#是否开始ssl 支持
Syntax: ssl on | off;
Default: ssl off;
Context: http, server

#ssl crt 文件存放位置
Syntax: ssl_certificate file;
Default: —
Context: http, server

#ssl key 文件存放位置
Syntax: ssl_certificate_key file;
Default: —
Context: http, server
```

5.配置Nginx 配置Https 实例



```csharp
[root@web01 ~]# cat /etc/nginx/conf.d/ssl.conf
server {
    listen 443;
    server_name s.oldboy.com;
    ssl on;
    ssl_certificate ssl_key/server.crt;
    ssl_certificate_key ssl_key/server.key;
    location / {
        root /code;
        index index.html;
    }
}
#准备对应的站点目录, 并重启 Nginx 服务
[root@web01 ~]# mkdir -p /code
[root@web01 ~]# echo "Https" > /code/index.html
[root@web01 ~]# nginx -t
nginx: [warn] the "ssl" directive is deprecated, use the "listen ... ssl" directive instead in /etc/nginx/conf.d/ssl.conf:4
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
#有个报警提示，告诉我们需要使用listen ... ssl这样的格式
[root@web01 ~]# cat /etc/nginx/conf.d/ssl.conf
server {
    listen 443 ssl;
    server_name s.oldboy.com;
    #ssl on;
    ssl_certificate ssl_key/server.crt;
    ssl_certificate_key ssl_key/server.key;
    location / {
        root /code;
        index index.html;
    }
}
#再次检查就没有问题了
[root@web01 ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@web01 ~]# systemctl restart nginx
```

6.浏览器输入[http://s.xoxoyun.com](https://links.jianshu.com/go?to=https%3A%2F%2Fs.xoxoyun.com) 访问, 由于该证书非第三方权威机构颁发，而是我们自己签发的，所以浏览器会警告

![img](http://upload-images.jianshu.io/upload_images/14248468-f38c27217b8740d8.png?imageMogr2/auto-orient/strip|imageView2/2/w/378/format/webp)

image.png



7.以上配置如果用户忘记在浏览器地址栏输入https:// 那么将不会跳转至https，建议配置将用户访问http 请求强制跳转https



```bash
[root@web01 ~]# cat /etc/nginx/conf.d/ssl.conf      
server {
    listen 443 ssl;
    server_name s.oldboy.com;
    #ssl on;
    ssl_certificate ssl_key/server.crt;
    ssl_certificate_key ssl_key/server.key;
    location / {
        root /code;
        index index.html;
    }
}
server {
    listen 80;
    server_name s.oldboy.com;
    #rewrite 跳转方式
    rewrite ^(.*) https://$server_name$1 redirect;
    #return 跳转方式
    #return 302 https://$server_name$request_uri;
}
```

# 第三章 Nginx 集群实现HTTPS 实践

实战Nginx 负载均衡+Nginx WEB 配置HTTPS 安全

1.环境准备

| 主机名 | 外网IP(NAT)   | 内网IP(LAN)     | 角色        |
| ------ | ------------- | --------------- | ----------- |
| lb01   | eth0:10.0.0.5 | eth1:172.16.1.5 | nginx-proxy |
| web01  | eth0:10.0.0.7 | eth1:172.16.1.7 | nginx-web01 |
| web02  | eth0:10.0.0.8 | eth1:172.16.1.8 | nginx-web02 |

2.配置后端两台web 节点监听80 端口, 如已配置则无需修改



```ruby
[root@web01 ~]# cat /etc/nginx/conf.d/blog.conf    
server {
        listen 80;
        server_name blog.xoxoyun.com;
        root /code/wordpress;
        index index.php index.html;

        location ~ \.php$ {
            root /code/wordpress;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
}
```

3.配置第二台WEB节点



```csharp
[root@web01 ~]# scp -rp /etc/nginx/ssl_key/ root@172.16.1.8:/etc/nginx/
[root@web01 ~]# scp -rp /etc/nginx/conf.d/ root@172.16.1.8:/etc/nginx/
```

4.重启两台后端web 节点Nginx



```csharp
[root@web01 ~]# systemctl restart nginx
[root@web02 ~]# systemctl restart nginx
```

5.Nginx 负载均衡先生成证书



```ruby
[root@lb01 ~]# mkdir /etc/nginx/ssl/ssh_key -p
[root@lb01 ~]# mkdir /etc/nginx/ssl_key -p
[root@lb01 ~]# cd /etc/nginx/ssl_key/
[root@lb01 /etc/nginx/ssl_key]# openssl genrsa -idea -out server.key 2048
[root@lb01 /etc/nginx/ssl_key]# openssl req -days 36500 -x509 -sha256 -nodes -newkey rsa:2048 -keyout server.key -out server.crt
Country Name (2 letter code) [XX]:CN
State or Province Name (full name) []:BJ
Locality Name (eg, city) [Default City]:BJ
Organization Name (eg, company) [Default Company Ltd]:edu
Organizational Unit Name (eg, section) []:SA
Common Name (eg, your name or your server's hostname) []:oldboy
Email Address []:[oldboy@oldboy.com](mailto:oldboy@oldboy.com)
```

6.Nginx 负载均衡配置文件如下



```csharp
[root@lb01 ~]# cat /etc/nginx/conf.d/proxy.conf
# 定义后端资源池
upstream site {
    server 172.16.1.7:80 max_fails=2 fail_timeout=10s;
    server 172.16.1.8:80 max_fails=2 fail_timeout=10s;
}

#https配置
server {
    listen 443 ssl;
    server_name blog.oldboy.com;
    ssl_certificate ssl_key/server.crt;
    ssl_certificate_key ssl_key/server.key;
    location / {
        proxy_pass http://site;
        include proxy_params;
    }
}
#用户http请求跳转至https
server {
    listen 80;
    server_name blog.oldboy.com;
    return 302 https://$server_name$request_uri;
}
```

7.重启Nginx 负载均衡



```csharp
[root@lb01 ~]# nginx -t
[root@lb01 ~]# systemctl restart nginx
```

8.配置代理和nginx服务都是https
proxy_params配置



```bash
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

反向代理配置文件



```php
# 定义后端资源池
upstream site {
    server 172.16.1.7:80 max_fails=2 fail_timeout=10s;
    server 172.16.1.8:80 max_fails=2 fail_timeout=10s;
}

upstream ssl {
    server 172.16.1.7:443 max_fails=2 fail_timeout=10s;
    server 172.16.1.8:443 max_fails=2 fail_timeout=10s;
}

#https配置
server {
    listen 443 ssl;
    server_name s.oldboy.com;
    ssl_certificate ssl_key/server.crt;
    ssl_certificate_key ssl_key/server.key;
    location / {
        proxy_pass https://ssl;
        include proxy_params;
    }
}
#用户http请求跳转至https
server {
    listen 80;
    server_name s.oldboy.com;
    return 302 https://$server_name$request_uri;
}
```

nginx配置文件



```bash
server {
    listen 443 ssl;
    server_name s.oldboy.com;
    #ssl on;
    ssl_certificate ssl_key/server.crt;
    ssl_certificate_key ssl_key/server.key;
    location / {
        root /code;
        index index.html;
    }
}
```

9.wordpress和wecenter配置https
wecenter在后台配置：



![img](http://upload-images.jianshu.io/upload_images/14248468-47b646c4f1d2d167.png?imageMogr2/auto-orient/strip|imageView2/2/w/837/format/webp)



wordpress除了后台配置以外还需要在nginx配置文件里添加php-fastcgi解析的参数



```csharp
location ~ \.php$ {
    ...
    fastcgi_param  HTTPS on;
    ...
}
```