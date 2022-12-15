---
title: Dockerfile小实验
categories: DevOps
tags: [Docker,Dockerfile]
date: 2020-06-16 18:42:00
---
综合实验
====
[tip type="success" title="运行一个Docker容器，在浏览器打开niubi.com能访问到百度首页"]
运行一个Docker容器，在浏览器打开niubi.com能访问到百度首页
[/tip]
准备Docekr镜像
----------
[tip type="warning" title="Dockerfile"]
Dockerfile
[/tip]

> /data/docker/dockerfile/Dockerfile

    FROM xoxoyun/nginx:v1.12.2
    USER root
    ENV WWW /usr/share/nginx/conf.d
    ENV CONF /etc/nginx/conf.d
    RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Aisa/Shanghai' >/etc/timezone
    WORKDIR $WWW
    ADD index.html $WWW/index.html
    ADD niubi.com.conf $CONF/niubi.com.conf
    EXPOSE 80
    CMD ["nginx","-g","daemon off;"]

[tip type="warning" title="index.html"]
index.html
[/tip]

> /data/docker/dockerfile/index.html

    wget www.baidu.com -O index.html

[tip type="warning" title="niubi.com.conf"]
niubi.com.conf(虚拟主机配置文件)
[/tip]

    server {
       listen 80;
       server_name niubi.com;
       root /usr/share/nginx/html;
    }

构建镜像
----

    docker build . -t xoxoyun/nginx:niubibaidu
    docker run --rm -p80:80 xoxoyun/nginx:niubibaidu 

Win+R运行drivers找到hosts文件添加域名解析 浏览器访问即可
-------------------------------------


