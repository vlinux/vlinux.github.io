import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang.CWk9_bhA.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as m,u as b,a as g}from"./chunks/vue-router._WIYEsQP.js";import{aa as f,ap as a,ag as l,af as n,ai as e,P as _,ab as k,a1 as x}from"./framework.GHZxz7jq.js";import"./index.BOmfoNni.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.Scn_mnTZ.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.DOTZsJyO.js";const y=m("/posts/ELK日志收集系统概括",async r=>JSON.parse('{"title":"ELK日志收集系统概括","description":"","frontmatter":{"title":"ELK日志收集系统概括","categories":"DevOps","tags":["ELK","filebeat","Kibana","日志收集"],"date":"2020-03-11 09:45:00"},"headers":[],"relativePath":"pages/posts/ELK日志收集系统概括.md","lastUpdated":null}'),{lazy:(r,s)=>r.name===s.name}),C={__name:"ELK日志收集系统概括",setup(r,{expose:s}){const{data:i}=y(),d=g(),h=b(),o=Object.assign(h.meta.frontmatter||{},i.value?.frontmatter||{});return d.currentRoute.value.data=i.value,x("valaxy:frontmatter",o),globalThis.$frontmatter=o,s({frontmatter:{title:"ELK日志收集系统概括",categories:"DevOps",tags:["ELK","filebeat","Kibana","日志收集"],date:"2020-03-11 09:45:00"}}),(t,c)=>{const u=p;return k(),f(u,{frontmatter:_(o)},{"main-content-md":a(()=>[...c[0]||(c[0]=[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"ELK收集日志")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"作者：Andu"),e(),n("strong",null,"2019/6/30")])]),n("tr",null,[n("td",null,"精华文章")]),n("tr",null,[n("td")])])],-1),n("h1",{id:"第1章-elk介绍",tabindex:"-1"},[e("第1章 ELK介绍 "),n("a",{class:"header-anchor",href:"#第1章-elk介绍","aria-label":'Permalink to "第1章 ELK介绍"'},"​")],-1),n("p",null,"没有日志收集平台的时候如何分析日志？什么是ELK/EFLK? ELK的数据流转流程?",-1),n("p",null,"官方演示地址：",-1),n("p",null,[n("a",{href:"https://demo.elastic.co/",target:"_blank",rel:"noreferrer"},"https://demo.elastic.co/")],-1),n("h1",{id:"第2章-日志收集分类",tabindex:"-1"},[e("第2章 日志收集分类 "),n("a",{class:"header-anchor",href:"#第2章-日志收集分类","aria-label":'Permalink to "第2章 日志收集分类"'},"​")],-1),n("p",null,"代理层：nginx,haproxy",-1),n("p",null,"web层：nginx,tomcat",-1),n("p",null,"数据库层：mysql,redis,mongo,elasticsearch",-1),n("p",null,"操作系统层：source,message",-1),n("h1",{id:"第3章-安装部署elk",tabindex:"-1"},[e("第3章 安装部署ELK "),n("a",{class:"header-anchor",href:"#第3章-安装部署elk","aria-label":'Permalink to "第3章 安装部署ELK"'},"​")],-1),n("h2",{id:"_3-1-官方地址",tabindex:"-1"},[e("3.1 官方地址 "),n("a",{class:"header-anchor",href:"#_3-1-官方地址","aria-label":'Permalink to "3.1 官方地址"'},"​")],-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/index.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/index.html")],-1),n("h2",{id:"_3-2-安装配置java",tabindex:"-1"},[e("3.2 安装配置java "),n("a",{class:"header-anchor",href:"#_3-2-安装配置java","aria-label":'Permalink to "3.2 安装配置java"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# yum install java-1.8.0-openjdk.x86_64 -y[[A1\\]](#_msocom_1) 

[root@Andu ~]# java -version 

openjdk version "1.8.0_212"

OpenJDK Runtime Environment (build 1.8.0_212-b04)

OpenJDK 64-Bit Server VM (build 25.212-b04, mixed mode)
`)],-1),n("h2",{id:"_3-3-更新时间",tabindex:"-1"},[e("3.3 更新时间 "),n("a",{class:"header-anchor",href:"#_3-3-更新时间","aria-label":'Permalink to "3.3 更新时间"'},"​")],-1),n("pre",null,[n("code",null,`yum install ntpdate -y

ntpdate time1.aliyun.com[[A2\\]](#_msocom_2) 
`)],-1),n("h2",{id:"_3-4-安装配置elasticsearch",tabindex:"-1"},[e("3.4 安装配置elasticsearch "),n("a",{class:"header-anchor",href:"#_3-4-安装配置elasticsearch","aria-label":'Permalink to "3.4 安装配置elasticsearch"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# mkdir /data/soft/ -p

[root@Andu ~]# cd /data/soft/

[root@Andu soft]# rz

[root@Andu soft]# ll

总用量 506120

-rw-r--r-- 1 root root 114059630 2月 25 11:09 elasticsearch-6.6.0.rpm

-rw-r--r-- 1 root root 36581177 4月 27 12:29 elasticsearch-head.tar.gz

-rw-r--r-- 1 root root 11790119 2月 25 11:08 filebeat-6.6.0-x86_64.rpm

-rw-r--r-- 1 root root 185123116 2月 25 11:11 kibana-6.6.0-x86_64.rpm

-rw-r--r-- 1 root root 170703770 2月 25 11:38 logstash-6.6.0.rpm

[root@Andu soft]# rpm -ivh elasticsearch-6.6.0.rpm 

警告：elasticsearch-6.6.0.rpm: 头V4 RSA/SHA512 Signature, 密钥 ID d88e42b4: NOKEY

准备中...             ################################# [100%]

Creating elasticsearch group... OK

Creating elasticsearch user... OK

正在升级/安装...

  1:elasticsearch-0:6.6.0-1     ################################# [100%]

\\### NOT starting on installation, please execute the following statements to configure elasticsearch service to start automatically using systemd

 sudo systemctl daemon-reload

 sudo systemctl enable elasticsearch.service

\\### You can start elasticsearch service by executing

 sudo systemctl start elasticsearch.serviceCreated elasticsearch keystore in /etc/elasticsearch
`)],-1),n("h3",{id:"_3-4-1-相关配置目录及配置文件",tabindex:"-1"},[e("3.4.1 相关配置目录及配置文件 "),n("a",{class:"header-anchor",href:"#_3-4-1-相关配置目录及配置文件","aria-label":'Permalink to "3.4.1 相关配置目录及配置文件"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# rpm -qc elasticsearch 

/etc/elasticsearch/elasticsearch.yml

/etc/elasticsearch/jvm.options

/etc/elasticsearch/log4j2.properties

/etc/elasticsearch/role_mapping.yml

/etc/elasticsearch/roles.yml

/etc/elasticsearch/users

/etc/elasticsearch/users_roles

/etc/init.d/elasticsearch

/etc/sysconfig/elasticsearch

/usr/lib/sysctl.d/elasticsearch.conf

/usr/lib/systemd/system/elasticsearch.service
`)],-1),n("h3",{id:"_3-4-2-es配置文件解读",tabindex:"-1"},[e("3.4.2 ES配置文件解读 "),n("a",{class:"header-anchor",href:"#_3-4-2-es配置文件解读","aria-label":'Permalink to "3.4.2 ES配置文件解读"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu soft]# vim /etc/elasticsearch/elasticsearch.yml

[root@Andu soft]# grep ^[a-z] /etc/elasticsearch/elasticsearch.yml 

node.name: node-1

path.data: /var/lib/elasticsearch[[A3\\]](#_msocom_3) 

path.logs: /var/log/elasticsearch[[A4\\]](#_msocom_4) 

bootstrap.memory_lock: true[[A5\\]](#_msocom_5) 

network.host: 192.168.10.66,127.0.0.1[[A6\\]](#_msocom_6) 

http.port: 9200[[A7\\]](#_msocom_7) 

[root@Andu soft]# systemctl daemon-reload

[root@Andu soft]# systemctl enable elasticsearch.service

Created symlink from /etc/systemd/system/multi-user.target.wants/elasticsearch.service to /usr/lib/systemd/system/elasticsearch.service.

[root@Andu soft]# systemctl start elasticsearch.service
`)],-1),n("h3",{id:"_3-4-3-启动失败报错",tabindex:"-1"},[e("3.4.3 启动失败报错 "),n("a",{class:"header-anchor",href:"#_3-4-3-启动失败报错","aria-label":'Permalink to "3.4.3 启动失败报错"'},"​")],-1),n("p",null,"此时启动会发现失败，原因是内存锁定失败",-1),n("pre",null,[n("code",null,`[2019-05-12T14:39:58,764][ERROR][o.e.b.Bootstrap     ] [node-1] node validation exception

[1] bootstrap checks failed

[1]: memory locking requested for elasticsearch process but memory is not locked
`)],-1),n("h3",{id:"_3-4-4-锁定内存失败解决方案",tabindex:"-1"},[e("3.4.4 锁定内存失败解决方案 "),n("a",{class:"header-anchor",href:"#_3-4-4-锁定内存失败解决方案","aria-label":'Permalink to "3.4.4 锁定内存失败解决方案"'},"​")],-1),n("p",null,"官方解决方案",-1),n("pre",null,[n("code",null,`https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setup-configuration-memory.html

https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setting-system-settings.html#sysconfig

\\### 修改启动配置文件

vim /usr/lib/systemd/system/elasticsearch.service



\\### 增加如下参数

[Service]

LimitMEMLOCK=infinity



\\### 重新启动

systemctl daemon-reload



systemctl restart elasticsearch
`)],-1),n("h3",{id:"_3-4-5-检查启动是否成功",tabindex:"-1"},[e("3.4.5 检查启动是否成功 "),n("a",{class:"header-anchor",href:"#_3-4-5-检查启动是否成功","aria-label":'Permalink to "3.4.5 检查启动是否成功"'},"​")],-1),n("pre",null,[n("code",null,`  [root@Andu ~]# netstat -lntup|grep 9200
    
    tcp6    0   0 192.168.10.66:9200   :::*          LISTEN   15824/java     
    
    tcp6    0   0 127.0.0.1:9200     :::*          LISTEN   15824/java
    
    [root@Andu ~]# curl localhost:9200   
    
    {
    
     "name" : "node-1",
    
     "cluster_name" : "elasticsearch",
    
     "cluster_uuid" : "As5ZlEQ2Syq0ktLL0hg5XA",
    
     "version" : {
    
      "number" : "6.6.0",
    
      "build_flavor" : "default",
    
      "build_type" : "rpm",
    
      "build_hash" : "a9861f4",
    
      "build_date" : "2019-01-24T11:27:09.439740Z",
    
      "build_snapshot" : false,
    
      "lucene_version" : "7.6.0",
    
      "minimum_wire_compatibility_version" : "5.6.0",
    
      "minimum_index_compatibility_version" : "5.0.0"
    
     },
    
     "tagline" : "You Know, for Search"
    
    }
`)],-1),n("h2",{id:"_3-5-服务模式安装配置es-head插件",tabindex:"-1"},[e("3.5 服务模式安装配置es-head插件 "),n("a",{class:"header-anchor",href:"#_3-5-服务模式安装配置es-head插件","aria-label":'Permalink to "3.5 服务模式安装配置es-head插件"'},"​")],-1),n("h3",{id:"_3-5-1-插件官方地址",tabindex:"-1"},[e("3.5.1 插件官方地址 "),n("a",{class:"header-anchor",href:"#_3-5-1-插件官方地址","aria-label":'Permalink to "3.5.1 插件官方地址"'},"​")],-1),n("p",null,[n("a",{href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noreferrer"},"https://github.com/mobz/elasticsearch-head")],-1),n("h3",{id:"_3-5-2-使用docker部署elasticsearch-head",tabindex:"-1"},[e("3.5.2 使用docker部署elasticsearch-head "),n("a",{class:"header-anchor",href:"#_3-5-2-使用docker部署elasticsearch-head","aria-label":'Permalink to "3.5.2 使用docker部署elasticsearch-head"'},"​")],-1),n("pre",null,[n("code",null,`docker pull alivv/elasticsearch-head

docker run --name es-head -p 9100:9100 -dit alivv/elasticsearch-head
`)],-1),n("h3",{id:"_3-5-3-使用nodejs编译安装",tabindex:"-1"},[e("3.5.3 使用nodejs编译安装 "),n("a",{class:"header-anchor",href:"#_3-5-3-使用nodejs编译安装","aria-label":'Permalink to "3.5.3 使用nodejs编译安装"'},"​")],-1),n("p",null,"官网地址",-1),n("p",null,[n("a",{href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noreferrer"},"https://nodejs.org/en/download/package-manager/")],-1),n("p",null,[n("a",{href:"https://nodejs.org/dist/latest-v10.x/",target:"_blank",rel:"noreferrer"},"https://nodejs.org/dist/latest-v10.x/")],-1),n("p",null,[n("a",{href:"http://npm.taobao.org",target:"_blank",rel:"noreferrer"},"http://npm.taobao.org")],-1),n("p",null,"下载安装",-1),n("pre",null,[n("code",null,`yum install nodejs npm openssl screen -y



node -v

npm -v

npm install -g cnpm --registry=https://registry.npm.taobao.org

cd /opt/             

git clone git://github.com/mobz/elasticsearch-head.git

cd elasticsearch-head/



cnpm install

screen -S es-head

cnpm run start

Ctrl+A+D
`)],-1),n("h3",{id:"_3-5-4-修改es配置文件支持跨域",tabindex:"-1"},[e("3.5.4 修改ES配置文件支持跨域 "),n("a",{class:"header-anchor",href:"#_3-5-4-修改es配置文件支持跨域","aria-label":'Permalink to "3.5.4 修改ES配置文件支持跨域"'},"​")],-1),n("p",null,"官方说明：",-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.6/modules-http.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/elasticsearch/reference/6.6/modules-http.html")],-1),n("p",null,"配置参数：",-1),n("pre",null,[n("code",null,`http.cors.enabled: true 

http.cors.allow-origin: "*"
`)],-1),n("h3",{id:"_3-5-5-网页访问",tabindex:"-1"},[e("3.5.5 网页访问 "),n("a",{class:"header-anchor",href:"#_3-5-5-网页访问","aria-label":'Permalink to "3.5.5 网页访问"'},"​")],-1),n("pre",null,[n("code",null,`IP地址:9200/9100
`)],-1),n("h2",{id:"_3-6-谷歌浏览器插件形式安装es-head",tabindex:"-1"},[e("3.6 谷歌浏览器插件形式安装es-head "),n("a",{class:"header-anchor",href:"#_3-6-谷歌浏览器插件形式安装es-head","aria-label":'Permalink to "3.6 谷歌浏览器插件形式安装es-head"'},"​")],-1),n("p",null,'[tip type="info"] 使用服务模式安装es-head插件过程比较繁琐，网络不好的时候还会经常卡住，幸运的是es-head插件官方还提供了另外一种更简便的方式，就是google chrome的插件 [/tip]',-1),n("p",null,'[collapse title="优势"] 1.免安装，直接下载插件安装在浏览器即可',-1),n("p",null,"2.只要浏览器和服务器可以通信就能使用",-1),n("p",null,"[/collapse]",-1),n("h2",{id:"_3-7-安装配置kibana",tabindex:"-1"},[e("3.7 安装配置kibana "),n("a",{class:"header-anchor",href:"#_3-7-安装配置kibana","aria-label":'Permalink to "3.7 安装配置kibana"'},"​")],-1),n("h3",{id:"_3-7-1-安装配置kibana",tabindex:"-1"},[e("3.7.1 安装配置kibana "),n("a",{class:"header-anchor",href:"#_3-7-1-安装配置kibana","aria-label":'Permalink to "3.7.1 安装配置kibana"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu soft]# rpm -ivh kibana-6.6.0-x86_64.rpm

[root@Andu soft]# grep "^[a-z]" /etc/kibana/kibana.yml

server.port: 5601

server.host: "192.168.10.66"

elasticsearch.hosts: ["http://localhost:9200"]

kibana.index: ".kibana

[root@Andu soft]# systemctl start kibana

[root@Andu soft]# systemctl status kibana

[root@Andu soft]# netstat -lntup|grep 5601

tcp    0   0 192.168.10.66:5601   0.0.0.0:*        LISTEN   16442/node
`)],-1),n("h2",{id:"_3-8-安装filebeat和logstash",tabindex:"-1"},[e("3.8 安装filebeat和logstash "),n("a",{class:"header-anchor",href:"#_3-8-安装filebeat和logstash","aria-label":'Permalink to "3.8 安装filebeat和logstash"'},"​")],-1),n("pre",null,[n("code",null,`rpm -ivh filebeat-6.6.0-x86_64.rpm

rpm -ivh logstash-6.6.0.rpm 
`)],-1),n("h2",{id:"_3-9-docker安装elk",tabindex:"-1"},[e("3.9 docker安装elk "),n("a",{class:"header-anchor",href:"#_3-9-docker安装elk","aria-label":'Permalink to "3.9 docker安装elk"'},"​")],-1),n("pre",null,[n("code",null,`version: '3'

services:

 elasticsearch:

  image: elasticsearch:v1

  container_name: elasticsearch

  environment:

   \\- cluster.name=docker-cluster

   \\- bootstrap.memory_lock=true

   \\- "ES_JAVA_OPTS=-Xms8g -Xmx8g"

   \\- "discovery.zen.ping.unicast.hosts=elasticsearch"

  ulimits:

   memlock:

​    soft: -1

​    hard: -1

  volumes:

   \\- /data/docker_es_data:/usr/share/elasticsearch/data

  ports:

   \\- 19200:9200

  networks:

   \\- esnet

 elasticsearch-head:

  image: elasticsearch-head:v1

  container_name: elasticsearch-head

  ports:

   \\- 19100:9100

  networks:

   \\- esnet

 kibana:

  image: kibana:v1

  container_name: kibana

  environment:

   \\- ELASTICSEARCH_URL="http://elasticsearch:9200"

   \\- kibana.index=".kibana"

  ports:

   \\- 15601:5601

  networks:

   \\- esnet

 logstash:

  image: logstash:v1

  container_name: logstash 

  environment:

   \\- ELASTICSEARCH_URL="http://elasticsearch:9200"

  ports:

   \\- 16379:6379

  networks:

   \\- esnet

networks:

 esnet:
`)],-1),n("h1",{id:"第4章-使用filebeat配置日志收集",tabindex:"-1"},[e("第4章 使用filebeat配置日志收集 "),n("a",{class:"header-anchor",href:"#第4章-使用filebeat配置日志收集","aria-label":'Permalink to "第4章 使用filebeat配置日志收集"'},"​")],-1),n("h2",{id:"_4-1-收集nginx日志",tabindex:"-1"},[e("4.1 收集nginx日志 "),n("a",{class:"header-anchor",href:"#_4-1-收集nginx日志","aria-label":'Permalink to "4.1 收集nginx日志"'},"​")],-1),n("h3",{id:"_4-1-1-安装nginx和ab工具",tabindex:"-1"},[e("4.1.1 安装nginx和ab工具 "),n("a",{class:"header-anchor",href:"#_4-1-1-安装nginx和ab工具","aria-label":'Permalink to "4.1.1 安装nginx和ab工具"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# yum install nginx httpd-tools -y
`)],-1),n("h3",{id:"_4-1-2-启动测试",tabindex:"-1"},[e("4.1.2 启动测试 "),n("a",{class:"header-anchor",href:"#_4-1-2-启动测试","aria-label":'Permalink to "4.1.2 启动测试"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]#  wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo

[root@Andu ~]# systemctl start nginx

[root@Andu ~]# netstat -lntup|grep nginx

tcp    0   0 0.0.0.0:80       0.0.0.0:*        LISTEN   1888/nginx: master 

tcp6    0   0 :::80          :::*          LISTEN   1888/nginx: master

[root@Andu ~]# ab -c 10 -n 100 192.168.10.66/

[root@Andu ~]# ab -c 10 -n 100 192.168.10.66/test.html
`)],-1),n("h3",{id:"_4-1-3-查看日志",tabindex:"-1"},[e("4.1.3 查看日志 "),n("a",{class:"header-anchor",href:"#_4-1-3-查看日志","aria-label":'Permalink to "4.1.3 查看日志"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# tail -f /var/log/nginx/access.log 

192.168.10.66 - - [13/May/2019:00:24:02 +0800] "GET /test.html HTTP/1.0" 404 3650 "-" "ApacheBench/2.3" "-"

192.168.10.66 - - [13/May/2019:00:24:02 +0800] "GET /test.html HTTP/1.0" 404 3650 "-" "ApacheBench/2.3" "-"

.......................................
`)],-1),n("h3",{id:"_4-1-4-配置filebeat收集普通日志",tabindex:"-1"},[e("4.1.4 配置filebeat收集普通日志 "),n("a",{class:"header-anchor",href:"#_4-1-4-配置filebeat收集普通日志","aria-label":'Permalink to "4.1.4 配置filebeat收集普通日志"'},"​")],-1),n("p",null,"相关网址",-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/7.x/filebeat-input-log.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/7.x/filebeat-input-log.html")],-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/7.x/configuration-template.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/7.x/configuration-template.html")],-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/7.x/configuration-template.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/7.x/configuration-template.html")],-1),n("p",null,"正确配置",-1),n("pre",null,[n("code",null,`filebeat.inputs:

\\- type: log

 enabled: true

 paths:

  \\- /var/log/nginx/access.log

 json.keys_under_root: true

 json.overwrite_keys: true

 

setup.kibana:

 host: "192.168.10.66:5601"

 

output.elasticsearch:

 hosts: ["192.168.10.66:9200"]

 index: "nginx-%{[beat.version]}-%{+yyyy.MM}"

setup.template.name: "nginx"

setup.template.pattern: "nginx-*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h3",{id:"_4-1-5-kibana配置",tabindex:"-1"},[e("4.1.5 kibana配置 "),n("a",{class:"header-anchor",href:"#_4-1-5-kibana配置","aria-label":'Permalink to "4.1.5 kibana配置"'},"​")],-1),n("pre",null,[n("code",null,`management-->index patterns-->nginx-->@timestamp
`)],-1),n("h3",{id:"_4-1-6-修改nginx日志为json格式",tabindex:"-1"},[e("4.1.6 修改nginx日志为json格式 "),n("a",{class:"header-anchor",href:"#_4-1-6-修改nginx日志为json格式","aria-label":'Permalink to "4.1.6 修改nginx日志为json格式"'},"​")],-1),n("pre",null,[n("code",null,` log_format main '{ "time_local": "$time_local", '

​              '"remote_addr": "$remote_addr", '

​              '"referer": "$http_referer", '

​              '"request": "$request", '

​              '"status": $status, '

​              '"bytes": $body_bytes_sent, '

​              '"agent": "$http_user_agent", '

​              '"x_forwarded": "$http_x_forwarded_for", '

​              '"up_addr": "$upstream_addr",'

​              '"up_host": "$upstream_http_host",'

​              '"upstream_time": "$upstream_response_time",'

​              '"request_time": "$request_time"'

  ' }';
`)],-1),n("h3",{id:"_4-1-7-查看日志是否为json格式",tabindex:"-1"},[e("4.1.7 查看日志是否为json格式 "),n("a",{class:"header-anchor",href:"#_4-1-7-查看日志是否为json格式","aria-label":'Permalink to "4.1.7 查看日志是否为json格式"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# tail -f /var/log/nginx/access.log  

{ "time_local": "13/May/2019:00:30:51 +0800", "remote_addr": "192.168.10.66", "referer": "-", "request": "GET /test.html HTTP/1.0", "status": 404, "bytes": 3650, "agent": "ApacheBench/2.3", "x_forwarded": "-", "up_addr": "-","up_host": "-","upstream_time": "-","request_time": "0.000" }

{ "time_local": "13/May/2019:00:30:51 +0800", "remote_addr": "192.168.10.66", "referer": "-", "request": "GET /test.html HTTP/1.0", "status": 404, "bytes": 3650, "agent": "ApacheBench/2.3", "x_forwarded": "-", "up_addr": "-","up_host": "-","upstream_time": "-","request_time": "0.000" }
`)],-1),n("h3",{id:"_4-1-8-收集多个日志并分类创建索引",tabindex:"-1"},[e("4.1.8 收集多个日志并分类创建索引 "),n("a",{class:"header-anchor",href:"#_4-1-8-收集多个日志并分类创建索引","aria-label":'Permalink to "4.1.8 收集多个日志并分类创建索引"'},"​")],-1),n("p",null,'[tip type="info"] filebeat配置 [/tip]',-1),n("pre",null,[n("code",null,`[root@Andu filebeat]# cat filebeat.yml 

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/access.log

 json.keys_under_root: true

 json.overwrite_keys: true

 tags: ["access"]

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/error.log

 tags: ["error"]

setup.template.settings:

 index.number_of_shards: 3

setup.kibana:

 host: "192.168.10.66:5601"

output.elasticsearch:

 hosts: ["localhost:9200"]

 indices:

  \\- index: "nginx_access-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​    tags: "access"

  \\- index: "nginx_error-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​    tags: "error"

setup.template.name: "nginx"

setup.template.pattern: "nginx_*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h2",{id:"_4-2-收集tomcat日志",tabindex:"-1"},[e("4.2 收集tomcat日志 "),n("a",{class:"header-anchor",href:"#_4-2-收集tomcat日志","aria-label":'Permalink to "4.2 收集tomcat日志"'},"​")],-1),n("h3",{id:"_4-2-1-安装tomcat",tabindex:"-1"},[e("4.2.1 安装tomcat "),n("a",{class:"header-anchor",href:"#_4-2-1-安装tomcat","aria-label":'Permalink to "4.2.1 安装tomcat"'},"​")],-1),n("pre",null,[n("code",null,`yum install tomcat tomcat-webapps tomcat-admin-webapps tomcat-docs-webapp tomcat-javadoc -y
`)],-1),n("h3",{id:"_4-2-2-启动检查",tabindex:"-1"},[e("4.2.2 启动检查 "),n("a",{class:"header-anchor",href:"#_4-2-2-启动检查","aria-label":'Permalink to "4.2.2 启动检查"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# systemctl start tomcat

[root@Andu ~]# systemctl status tomcat

[root@Andu ~]# lsof -i:8080

COMMAND  PID  USER  FD  TYPE DEVICE SIZE/OFF NODE NAME

java  18915 tomcat  49u IPv6 61950   0t0 TCP *:webcache (LISTEN)
`)],-1),n("h3",{id:"_4-2-3-访问测试",tabindex:"-1"},[e("4.2.3 访问测试 "),n("a",{class:"header-anchor",href:"#_4-2-3-访问测试","aria-label":'Permalink to "4.2.3 访问测试"'},"​")],-1),n("h3",{id:"_4-2-4-修改日志为json格式",tabindex:"-1"},[e("4.2.4 修改日志为json格式 "),n("a",{class:"header-anchor",href:"#_4-2-4-修改日志为json格式","aria-label":'Permalink to "4.2.4 修改日志为json格式"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# vim /etc/tomcat/server.xml

[root@Andu ~]# cat -n /etc/tomcat/server.xml

\\----------------

  137     <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"

  138         prefix="localhost_access_log." suffix=".txt"

  139         pattern="{&quot;clientip&quot;:&quot;%h&quot;,&quot;ClientUser&quot;:&quot;%l&quot;,&quot;authenticated&quot;:&quot;%u&quot;,&quot;AccessTime&quot;:&quot;%t&quot;,&quot;method&quot;:&quot;%r&quot;,&quot;status&quot;:&quot;%s&quot;,&quot;SendBytes&quot;:&quot;%b&quot;,&quot;Query?string&quot;:&quot;%q&quot;,&quot;partner&quot;:&quot;%{Referer}i&quot;,&quot;AgentVersion&quot;:&quot;%{User-Agent}i&quot;}"/>

\\----------------
`)],-1),n("h3",{id:"_4-2-5-重启确认日志是否为json格式",tabindex:"-1"},[e("4.2.5 重启确认日志是否为json格式 "),n("a",{class:"header-anchor",href:"#_4-2-5-重启确认日志是否为json格式","aria-label":'Permalink to "4.2.5 重启确认日志是否为json格式"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# systemctl restart tomcat

[root@Andu ~]# tail -f /var/log/tomcat/localhost_access_log.2019-05-13.txt 

{"clientip":"192.168.47.1","ClientUser":"-","authenticated":"-","AccessTime":"[13/May/2019:13:18:03 +0800]","method":"GET /docs/images/tomcat.gif HTTP/1.1","status":"200","SendBytes":"2066","Query?string":"","partner":"http://192.168.10.66:8080/docs/realm-howto.html","AgentVersion":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"}
`)],-1),n("p",null,"在线解析测试正确",-1),n("h3",{id:"_4-2-6-filebeat配置",tabindex:"-1"},[e("4.2.6 filebeat配置 "),n("a",{class:"header-anchor",href:"#_4-2-6-filebeat配置","aria-label":'Permalink to "4.2.6 filebeat配置"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# cat /etc/filebeat/filebeat.yml 

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/tomcat/localhost_access_log*

 json.keys_under_root: true

 json.overwrite_keys: true

tags: ["tomcat"][[A16\\]](#_msocom_16) 

setup.kibana:

 host: "192.168.10.66:5601"

output.elasticsearch:

 hosts: ["localhost:9200"]

 index: "tomcat-%{[beat.version]}-%{+yyyy.MM.dd}"

 when.contains:

​    tags: "tomcat"

setup.template.name: "tomcat"

setup.template.pattern: "tomcatn-*"

setup.template.enabled: false

setup.template.overwrite: true[[A17\\]](#_msocom_17) 
`)],-1),n("p",null,'[tip type="success"] 亲测可用配置为如下 [/tip]',-1),n("pre",null,[n("code",null,`filebeat.inputs:

\\#################tomcat#############

\\- type: log

 enabled: true

 paths:

  \\- /var/log/tomcat/localhost_access_log.*.txt

 json.keys_under_root: true

 json.overwrite_keys: true

\\#################output#############

setup.kibana:

 host: "192.168.10.66:5601"

output.elasticsearch:

 hosts: ["192.168.10.66:9200"]

 indices:

  \\- index: "tomcat-access-%{[beat.version]}-%{+yyyy.MM}"

setup.template.name: "tomcat"

setup.template.pattern: "tomcat-*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h3",{id:"_4-2-7-配置tomcat收集多个域名的日志",tabindex:"-1"},[e("4.2.7 配置tomcat收集多个域名的日志 "),n("a",{class:"header-anchor",href:"#_4-2-7-配置tomcat收集多个域名的日志","aria-label":'Permalink to "4.2.7 配置tomcat收集多个域名的日志"'},"​")],-1),n("p",null,"配置多个host标签",-1),n("h2",{id:"_4-3-收集java日志",tabindex:"-1"},[e("4.3 收集java日志 "),n("a",{class:"header-anchor",href:"#_4-3-收集java日志","aria-label":'Permalink to "4.3 收集java日志"'},"​")],-1),n("h3",{id:"_4-3-1-官方地址",tabindex:"-1"},[e("4.3.1 官方地址 "),n("a",{class:"header-anchor",href:"#_4-3-1-官方地址","aria-label":'Permalink to "4.3.1 官方地址"'},"​")],-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/6.6/multiline-examples.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/6.6/multiline-examples.html")],-1),n("p",null,"因为java日志的输出信息非常多，需要将多行拼成一个事件，所以需要多行匹配模式",-1),n("p",null,"因为elasticsearch本身就是java开发的，所以我们可以直接收集ES的日志",-1),n("h3",{id:"_4-3-2-filebeat配置",tabindex:"-1"},[e("4.3.2 filebeat配置 "),n("a",{class:"header-anchor",href:"#_4-3-2-filebeat配置","aria-label":'Permalink to "4.3.2 filebeat配置"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# cat /etc/filebeat/filebeat.yml    

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/elasticsearch/elasticsearch.log

 multiline.pattern: '^\\['

 multiline.negate: true

 multiline.match: after

setup.kibana:

 host: "192.168.10.66:5601"

output.elasticsearch:

 hosts: ["localhost:9200"]

 index: "es-%{[beat.version]}-%{+yyyy.MM.dd}"

setup.template.name: "es"

setup.template.pattern: "es-*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h2",{id:"_4-4-收集docker日志",tabindex:"-1"},[e("4.4 收集docker日志 "),n("a",{class:"header-anchor",href:"#_4-4-收集docker日志","aria-label":'Permalink to "4.4 收集docker日志"'},"​")],-1),n("h3",{id:"_4-4-1-安装docker",tabindex:"-1"},[e("4.4.1 安装docker "),n("a",{class:"header-anchor",href:"#_4-4-1-安装docker","aria-label":'Permalink to "4.4.1 安装docker"'},"​")],-1),n("pre",null,[n("code",null,`rm -fr /etc/yum.repos.d/local.repo

curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

wget -O /etc/yum.repos.d/docker-ce.repo https://mirrors.ustc.edu.cn/docker-ce/linux/centos/docker-ce.repo

sed -i 's#download.docker.com#mirrors.tuna.tsinghua.edu.cn/docker-ce#g' /etc/yum.repos.d/docker-ce.repo

yum install docker-ce -y

systemctl start docker

vi /etc/docker/daemon.json

{

 "registry-mirrors": ["https://registry.docker-cn.com"]

 }

systemctl restart docker
`)],-1),n("h3",{id:"_4-4-2-运行nginx镜像",tabindex:"-1"},[e("4.4.2 运行nginx镜像 "),n("a",{class:"header-anchor",href:"#_4-4-2-运行nginx镜像","aria-label":'Permalink to "4.4.2 运行nginx镜像"'},"​")],-1),n("pre",null,[n("code",null,`docker pull nginx

docker run --name nginx -p 80:80 -d nginx

docker ps

docker logs -f nginx
`)],-1),n("h3",{id:"_4-4-3-配置filebeat收集单个docker日志",tabindex:"-1"},[e("4.4.3 配置filebeat收集单个docker日志 "),n("a",{class:"header-anchor",href:"#_4-4-3-配置filebeat收集单个docker日志","aria-label":'Permalink to "4.4.3 配置filebeat收集单个docker日志"'},"​")],-1),n("p",null,"官方介绍：",-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/6.7/filebeat-input-docker.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/6.7/filebeat-input-docker.html")],-1),n("p",null,"首先查看docker容器的ID",-1),n("pre",null,[n("code",null,`docker inspect nginx-test|grep -w "Id"
`)],-1),n("p",null,"配置文件",-1),n("pre",null,[n("code",null,`filebeat.inputs:

\\- type: docker

 containers.ids: 

  \\- '2338d5038f7a2eac96d84d6cf424fb1829bd754ec5e0df944bdd29ba6d61a54e'

 tags: ["docker-nginx"] 

output.elasticsearch:

 hosts: ["localhost:9200"]

 index: "docker-nginx-%{[beat.version]}-%{+yyyy.MM.dd}"

setup.template.name: "docker"

setup.template.pattern: "docker-*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h3",{id:"_4-4-4-使用通配符收集所有容器的日志",tabindex:"-1"},[e("4.4.4 使用通配符收集所有容器的日志 "),n("a",{class:"header-anchor",href:"#_4-4-4-使用通配符收集所有容器的日志","aria-label":'Permalink to "4.4.4 使用通配符收集所有容器的日志"'},"​")],-1),n("p",null,"新版本的filebeat增加了收集多个容器的日志的选项",-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/7.2/filebeat-input-container.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/7.2/filebeat-input-container.html")],-1),n("h3",{id:"_4-4-5-配置filebeat通过标签收集多个容器日志",tabindex:"-1"},[e("4.4.5 配置filebeat通过标签收集多个容器日志 "),n("a",{class:"header-anchor",href:"#_4-4-5-配置filebeat通过标签收集多个容器日志","aria-label":'Permalink to "4.4.5 配置filebeat通过标签收集多个容器日志"'},"​")],-1),n("p",null,"假如我们有多个docker镜像或者重新提交了新镜像，那么直接指定ID的就不是太方便了。",-1),n("p",null,"我们从当前的容器提交一个新的镜像并且运行起来",-1),n("pre",null,[n("code",null,`docker commit nginx nginx:v2

docker images

docker run --name nginx -p 8080:80 -d nginx:v2
`)],-1),n("p",null,"此时我们的容器目录下就有了两个不同的容器目录",-1),n("pre",null,[n("code",null,`[root@elk-176 containers]# ls /var/lib/docker/containers/         

2338d5038f7a2eac96d84d6cf424fb1829bd754ec5e0df944bdd29ba6d61a54e 3bb5250e7e50a4ed8d1fae7a43d3bf4294864ac4e0af125ae5231cd9bd76b914
`)],-1),n("p",null,"如果直接配置filebeat存到es里本台机器所有的容器日志都会混在一起没有办法区分",-1),n("p",null,"多容器日志收集处理：",-1),n("p",null,"其实收集的日志本质来说还是文件，而这个日志是以容器-json.log命名存放在默认目录下的json格式的文件：",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# head -1 /var/lib/docker/containers/2338d5038f7a2eac96d84d6cf424fb1829bd754ec5e0df944bdd29ba6d61a54e/2338d5038f7a2eac96d84d6cf424fb1829bd754ec5e0df944bdd29ba6d61a54e-json.log

{"log":"192.168.47.1 - - [23/May/2019:19:12:04 +0000] \\"GET / HTTP/1.1\\" 200 612 \\"-\\" \\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36\\" \\"-\\"\\n","stream":"stdout","time":"2019-05-23T19:12:04.939212514Z"}
`)],-1),n("p",null,"但是每个容器的ID都不一样，为了区分不同服务运行的不同容器，可以使用docker-compose通过给容器添加labels标签来作为区分",-1),n("p",null,"然后filbeat把容器日志当作普通的json格式来解析并传输到es",-1),n("p",null,"操作步骤：",-1),n("p",null,"1.安装docker-compose",-1),n("pre",null,[n("code",null,`yum install -y python2-pip
`)],-1),n("p",null,"2.这里使用pip安装，默认源为国外，可以使用国内加速，相关网站",-1),n("p",null,[n("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/help/pypi/",target:"_blank",rel:"noreferrer"},"https://mirrors.tuna.tsinghua.edu.cn/help/pypi/")],-1),n("p",null,"pip加速操作命令",-1),n("pre",null,[n("code",null,`pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U

pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
`)],-1),n("p",null,"3.继续安装docker-compose",-1),n("pre",null,[n("code",null,`pip install docker-compose
`)],-1),n("p",null,"4.检查",-1),n("pre",null,[n("code",null,`docker-compose version
`)],-1),n("p",null,"5.编写docker-compose.yml",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# cat docker-compose.yml 

version: '3'

services:

 nginx:

  image: nginx:v2
`)],-1),n("p",null,"# 设置labels",-1),n("pre",null,[n("code",null,` labels:

   service: nginx

  \\# logging设置增加labels.service

  logging:

   options:

​    labels: "service"

  ports:

   \\- "8080:80"

 db:

  image: nginx:latest

  \\# 设置labels

  labels:

   service: db 

  \\# logging设置增加labels.service

  logging:

   options:

​    labels: "service"

  ports:

   \\- "80:80"
`)],-1),n("p",null,"6.清理镜像",-1),n("pre",null,[n("code",null,`docker ps -a|awk 'NR>1{print "docker rm",$1}'|bash
`)],-1),n("p",null,"7.运行docker-compose.yml",-1),n("pre",null,[n("code",null,`docker-compose up -d
`)],-1),n("p",null,"8.检查日志是否增加了lable标签",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# tail -1 /var/lib/docker/containers/b2c1f4f7f5a2967fe7d12c1db124ae41f009ec663c71608575a4773beb6ca5f8/b2c1f4f7f5a2967fe7d12c1db124ae41f009ec663c71608575a4773beb6ca5f8-json.log

{"log":"192.168.47.1 - - [23/May/2019:13:22:32 +0000] \\"GET / HTTP/1.1\\" 304 0 \\"-\\" \\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36\\" \\"-\\"\\n","stream":"stdout","attrs":{"service":"nginx"},"time":"2019-05-23T13:22:32.478708392Z"}
`)],-1),n("p",null,"9.配置filebeat",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# cat /etc/filebeat/filebeat.yml   

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/lib/docker/containers/*/*-json.log

 json.keys_under_root: true

 json.overwrite_keys: true

output.elasticsearch:

 hosts: ["192.168.10.66:9200"]

 indices:

  \\- index: "docker-nginx-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​    attrs.service: "nginx"

  \\- index: "docker-db-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​    attrs.service: "db"

setup.template.name: "docker"

setup.template.pattern: "docker-*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h3",{id:"_4-4-6-配置filebeat通过服务类型和日志类型多条件创建不同索引",tabindex:"-1"},[e("4.4.6 配置filebeat通过服务类型和日志类型多条件创建不同索引 "),n("a",{class:"header-anchor",href:"#_4-4-6-配置filebeat通过服务类型和日志类型多条件创建不同索引","aria-label":'Permalink to "4.4.6 配置filebeat通过服务类型和日志类型多条件创建不同索引"'},"​")],-1),n("p",null,"目前为止，已经可以按服务来收集日志了，但是错误日志和正确日志混在了一起，不好区分，所以可以进一步进行条件判断，根据服务和日志类型创建不同的索引",-1),n("p",null,"filebeat配置文件",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# cat /etc/filebeat/filebeat.yml     

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/lib/docker/containers/*/*-json.log

 json.keys_under_root: true

 json.overwrite_keys: true

output.elasticsearch:

 hosts: ["192.168.10.66:9200"]

 indices:

  \\- index: "docker-nginx-access-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​     attrs.service: "nginx"

​     stream: "stdout"

  \\- index: "docker-nginx-error-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​     attrs.service: "nginx"

​     stream: "stderr"

  \\- index: "docker-db-access-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​     attrs.service: "db"

​     stream: "stdout"

  \\- index: "docker-db-error-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​     attrs.service: "db"

​     stream: "stderr"

setup.template.name: "docker"

setup.template.pattern: "docker-*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h3",{id:"_4-4-7-验证提交新镜像运行后日志收集情况",tabindex:"-1"},[e("4.4.7 验证提交新镜像运行后日志收集情况 "),n("a",{class:"header-anchor",href:"#_4-4-7-验证提交新镜像运行后日志收集情况","aria-label":'Permalink to "4.4.7 验证提交新镜像运行后日志收集情况"'},"​")],-1),n("p",null,"1.提交新镜像",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# docker ps -a

CONTAINER ID    IMAGE        COMMAND         CREATED       STATUS           PORTS        NAMES

f92f4d747584    nginx:latest    "nginx -g 'daemon of…"  45 minutes ago   Exited (0) 51 seconds ago            root_db_1

b2c1f4f7f5a2    nginx:v2      "nginx -g 'daemon of…"  45 minutes ago   Exited (0) 51 seconds ago            root_nginx_1

[root@elk-176 ~]# docker commit root_nginx_1 nginx:v3     

sha256:4457e2b7afc719ef185c75c02031b11c1407efe2e2e57b85f0c9347d04a9ff00

[root@elk-176 ~]# docker commit root_db_1 nginx:v4

sha256:a7e8d8b3290c817194956aa06fc486ef928853121d9c6224fd64fe759c967dda

[root@elk-176 ~]# docker images

REPOSITORY     TAG         IMAGE ID      CREATED       SIZE

nginx        v4          a7e8d8b3290c    35 seconds ago   109MB

nginx        v3         4457e2b7afc7    45 seconds ago   109MB

nginx        v2         c181c6355cd9    2 hours ago     109MB

nginx        latest        53f3fd8007f7    2 weeks ago     109MB
`)],-1),n("p",null,"2.修改并运行docker-compose",-1),n("pre",null,[n("code",null,`[root@elk-176 ~]# cat docker-compose.yml 

version: '3'

services:

 nginx:

  image: nginx:v3

  \\# 设置labels

  labels:

   service: nginx

  \\# logging设置增加labels.service

  logging:

   options:

​    labels: "service"

  ports:

   \\- "8080:80"

 db:

  image: nginx:v4

  \\# 设置labels

  labels:

   service: db 

  \\# logging设置增加labels.service

  logging:

   options:

​    labels: "service"

  ports:

   \\- "80:80"

[root@elk-176 ~]# docker-compose up -d

Starting root_nginx_1 ... 

Starting root_nginx_1 ... done

Starting root_db_1  ... done

[root@elk-176 ~]# docker ps

CONTAINER ID    IMAGE        COMMAND         CREATED       STATUS       PORTS         NAMES

04308aa3928b    nginx:v4       "nginx -g 'daemon of…"  30 seconds ago   Up 1 second     0.0.0.0:80->80/tcp   root_db_1

49d2e2210e6f    nginx:v3       "nginx -g 'daemon of…"  30 seconds ago   Up 1 second     0.0.0.0:8080->80/tcp  root_nginx_1
`)],-1),n("p",null,"3.访问并查看是否有新数据生成",-1),n("pre",null,[n("code",null,`curl logcalhost/zhangya.html

curl logcalhost:8080/zhangya.html
`)],-1),n("p",null,"4.经过查看发现已经成功收集到了日志，这样我们就做到了不用修改filebeat配置文件也可以持续的收集新镜像的日志并按分类创建不同的索引",-1),n("h3",{id:"_4-4-8-修改docker容器内日志类型为json",tabindex:"-1"},[e("4.4.8 修改docker容器内日志类型为json "),n("a",{class:"header-anchor",href:"#_4-4-8-修改docker容器内日志类型为json","aria-label":'Permalink to "4.4.8 修改docker容器内日志类型为json"'},"​")],-1),n("p",null,"刚才收集的docker内的日志类型为普通格式，如果我们修改为json格式会如何呢？",-1),n("h1",{id:"第5章-使用filledeat-modules配置",tabindex:"-1"},[e("第5章 使用filledeat modules配置 "),n("a",{class:"header-anchor",href:"#第5章-使用filledeat-modules配置","aria-label":'Permalink to "第5章 使用filledeat modules配置"'},"​")],-1),n("h2",{id:"_5-1-官方网址",tabindex:"-1"},[e("5.1 官方网址 "),n("a",{class:"header-anchor",href:"#_5-1-官方网址","aria-label":'Permalink to "5.1 官方网址"'},"​")],-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/beats/filebeat/6.6/configuration-filebeat-modules.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/beats/filebeat/6.6/configuration-filebeat-modules.html")],-1),n("h2",{id:"_5-2-使用模版配置nginx正常日志",tabindex:"-1"},[e("5.2 使用模版配置nginx正常日志 "),n("a",{class:"header-anchor",href:"#_5-2-使用模版配置nginx正常日志","aria-label":'Permalink to "5.2 使用模版配置nginx正常日志"'},"​")],-1),n("p",null,"社区论坛：",-1),n("p",null,[n("a",{href:"https://discuss.elastic.co/t/filebeat-module-custom-index/181350",target:"_blank",rel:"noreferrer"},"https://discuss.elastic.co/t/filebeat-module-custom-index/181350")],-1),n("h3",{id:"_5-2-1-filebeat配置文件",tabindex:"-1"},[e("5.2.1 filebeat配置文件 "),n("a",{class:"header-anchor",href:"#_5-2-1-filebeat配置文件","aria-label":'Permalink to "5.2.1 filebeat配置文件"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# cat /etc/filebeat/filebeat.yml 

filebeat.config.modules:

 path: \${path.config}/modules.d/*.yml

 reload.enabled: true

setup.kibana:

 host: "192.168.10.66:5601"

output.elasticsearch:

 hosts: ["localhost:9200"]

 indices:

  \\- index: "nginx_access-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​    fileset.name: "access"

  \\- index: "nginx_error-%{[beat.version]}-%{+yyyy.MM.dd}"

   when.contains:

​    fileset.name: "error"

setup.template.name: "nginx"

setup.template.pattern: "nginx_*"

setup.template.enabled: false

setup.template.overwrite: true
`)],-1),n("h3",{id:"_5-2-2-filebeat-modules配置",tabindex:"-1"},[e("5.2.2 filebeat modules配置 "),n("a",{class:"header-anchor",href:"#_5-2-2-filebeat-modules配置","aria-label":'Permalink to "5.2.2 filebeat modules配置"'},"​")],-1),n("p",null,"使用nginx模版配置需要安装2个插件，默认从官网下载速度太慢，可以提前下载然后离线安装",-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/6.6/ingest-geoip.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/elasticsearch/plugins/6.6/ingest-geoip.html")],-1),n("p",null,[n("a",{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/6.6/plugin-management-custom-url.html",target:"_blank",rel:"noreferrer"},"https://www.elastic.co/guide/en/elasticsearch/plugins/6.6/plugin-management-custom-url.html")],-1),n("p",null,"在线安装：",-1),n("pre",null,[n("code",null,`[root@Andu ~]# /usr/share/elasticsearch/bin/elasticsearch-plugin install ingest-user-agent

[root@Andu ~]# /usr/share/elasticsearch/bin/elasticsearch-plugin install ingest-geoip
`)],-1),n("p",null,"离线下载安装：",-1),n("pre",null,[n("code",null,`[root@Andu ~]# wget https://artifacts.elastic.co/downloads/elasticsearch-plugins/ingest-user-agent/ingest-user-agent-6.6.0.zip

[root@Andu ~]# wget https://artifacts.elastic.co/downloads/elasticsearch-plugins/ingest-geoip/ingest-geoip-6.6.0.zip

[root@Andu ~]# /usr/share/elasticsearch/bin/elasticsearch-plugin install file:///root/ingest-geoip-6.6.0.zip 

[root@Andu ~]# /usr/share/elasticsearch/bin/elasticsearch-plugin install file:///root/ingest-user-agent-6.6.0.zip 
`)],-1),n("p",null,"激活nginx模块：",-1),n("pre",null,[n("code",null,`[root@Andu ~]# filebeat modules enable nginx      

[root@Andu ~]# egrep -v "#|^$" /etc/filebeat/modules.d/nginx.yml    

\\- module: nginx

 access:

  enabled: true

  var.paths: ["/var/log/nginx/access.log"]

 error:

  enabled: true

  var.paths: ["/var/log/nginx/error.log"
`)],-1),n("p",null,"注意：6.7之后这两个插件默认集成到了elasticsearch，不需要单独安装了",-1),n("h2",{id:"_5-3-使用模块收集系统日志message和secure日志",tabindex:"-1"},[e("5.3 使用模块收集系统日志message和secure日志 "),n("a",{class:"header-anchor",href:"#_5-3-使用模块收集系统日志message和secure日志","aria-label":'Permalink to "5.3 使用模块收集系统日志message和secure日志"'},"​")],-1),n("p",null,"如果不需要转换，也可以直接按普通日志模式收集message和secure日志",-1),n("h2",{id:"_5-4-导入kibana视图",tabindex:"-1"},[e("5.4 导入kibana视图 "),n("a",{class:"header-anchor",href:"#_5-4-导入kibana视图","aria-label":'Permalink to "5.4 导入kibana视图"'},"​")],-1),n("p",null,"默认如果使用filbeat模版导入视图会把所有的服务都导入进去,而我们实际上并不需要这么多视图，",-1),n("p",null,"而且默认的视图模版只能匹配filebeat-*开头的索引，所以这里我们有2个需要需要解决：",-1),n("p",null,"1.通过一定处理只导入我们需要的模版",-1),n("p",null,"2.导入的视图模版索引名称可以自定义",-1),n("p",null,"解决方法：",-1),n("p",null,"1.备份一份filebeat的kibana视图，删除不需要的视图模版文件",-1),n("p",null,"2.修改视图文件里默认的索引名称为我们需要的索引名称",-1),n("pre",null,[n("code",null,`cp -a /usr/share/filebeat/kibana /root

find . -type f ! -name "*nginx*"|xargs rm -rf

sed -i 's#filebeat\\-\\*#nginx\\-\\*#g' Filebeat-nginx-overview.json 
`)],-1),n("p",null,"替换索引名称",-1),n("pre",null,[n("code",null,`filebeat setup --dashboards -E setup.dashboards.directory=/root/kibana/
`)],-1),n("h2",{id:"_5-5-使用模块收集mysql日志和慢日志",tabindex:"-1"},[e("5.5 使用模块收集mysql日志和慢日志 "),n("a",{class:"header-anchor",href:"#_5-5-使用模块收集mysql日志和慢日志","aria-label":'Permalink to "5.5 使用模块收集mysql日志和慢日志"'},"​")],-1),n("h2",{id:"_5-6-使用模块收集mongo日志和redis日志",tabindex:"-1"},[e("5.6 使用模块收集mongo日志和redis日志 "),n("a",{class:"header-anchor",href:"#_5-6-使用模块收集mongo日志和redis日志","aria-label":'Permalink to "5.6 使用模块收集mongo日志和redis日志"'},"​")],-1),n("h1",{id:"第6章-使用缓存收集日志",tabindex:"-1"},[e("第6章 使用缓存收集日志 "),n("a",{class:"header-anchor",href:"#第6章-使用缓存收集日志","aria-label":'Permalink to "第6章 使用缓存收集日志"'},"​")],-1),n("p",null,"当日志的数量非常多的时候，可能需要引入缓存层作为临时存储数据的地方，防止因为ES处理不过来导致日志丢失的情况。",-1),n("p",null,"filebeat支持将日志发送到redis或者kafka作为消息队列缓存。",-1),n("p",null,"但是使用了缓存层，就不能使用模版来配置日志收集了。",-1),n("p",null,"所以最好日志是json格式",-1),n("h2",{id:"_6-1-使用单台redis作为缓存",tabindex:"-1"},[e("6.1 使用单台redis作为缓存 "),n("a",{class:"header-anchor",href:"#_6-1-使用单台redis作为缓存","aria-label":'Permalink to "6.1 使用单台redis作为缓存"'},"​")],-1),n("p",null,"这里需要说明，如果使用redis作为缓存",-1),n("p",null,"可以将不同的日志类型单独写成一个键，这样好处是清晰，但是缺点是logstash写起来起来复杂",-1),n("p",null,"也可以将所有的日志全部写入到一个键中，然后靠后端的logstash去过滤处理。",-1),n("h3",{id:"_6-1-1-安装启动测试redis",tabindex:"-1"},[e("6.1.1 安装启动测试redis "),n("a",{class:"header-anchor",href:"#_6-1-1-安装启动测试redis","aria-label":'Permalink to "6.1.1 安装启动测试redis"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# yum install redis -y

[root@Andu ~]# systemctl status redis

[root@Andu ~]# redis-cli 

127.0.0.1:6379> set k1 v1

OK

127.0.0.1:6379> GEt k1

"v1"

127.0.0.1:6379>
`)],-1),n("h3",{id:"_6-1-2-配置nginx的json日志",tabindex:"-1"},[e("6.1.2 配置nginx的json日志 "),n("a",{class:"header-anchor",href:"#_6-1-2-配置nginx的json日志","aria-label":'Permalink to "6.1.2 配置nginx的json日志"'},"​")],-1),n("p",null,"将nginx的日志调整为json格式",-1),n("pre",null,[n("code",null,`  log_format json '{ "time_local": "$time_local", '

​              '"remote_addr": "$remote_addr", '

​              '"referer": "$http_referer", '

​              '"request": "$request", '

​              '"status": $status, '

​              '"bytes": $body_bytes_sent, '

​              '"agent": "$http_user_agent", '

​              '"x_forwarded": "$http_x_forwarded_for", '

​              '"up_addr": "$upstream_addr",'

​              '"up_host": "$upstream_http_host",'

​              '"upstream_time": "$upstream_response_time",'

​              '"request_time": "$request_time"' ' }';
`)],-1),n("h3",{id:"_6-1-3-配置filebeat写入到不同的key中",tabindex:"-1"},[e("6.1.3 配置filebeat写入到不同的key中 "),n("a",{class:"header-anchor",href:"#_6-1-3-配置filebeat写入到不同的key中","aria-label":'Permalink to "6.1.3 配置filebeat写入到不同的key中"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# cat /etc/filebeat/filebeat.yml 

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/access.log

 json.keys_under_root: true

 json.overwrite_keys: true

 tags: ["access"]

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/error.log

 tags: ["error"]

setup.template.settings:

 index.number_of_shards: 3

setup.kibana:

 host: "192.168.10.66:5601"

output.redis:

 hosts: ["localhost"]

 keys:

  \\- key: "nginx_access"  

   when.contains:

​    tags: "access"

  \\- key: "nginx_error"

   when.contains:

​    tags: "error"
`)],-1),n("h3",{id:"_6-1-4-配置logstash读取不同的key",tabindex:"-1"},[e("6.1.4 配置logstash读取不同的key "),n("a",{class:"header-anchor",href:"#_6-1-4-配置logstash读取不同的key","aria-label":'Permalink to "6.1.4 配置logstash读取不同的key"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# cat /etc/logstash/conf.d/redis.conf  

input {

 redis {

  host => "127.0.0.1"

  port => "6379"

  db => "0"

  key => "nginx_access"

  data_type => "list"

 }

 redis {

  host => "127.0.0.1"

  port => "6379"

  db => "0"

  key => "nginx_error"

  data_type => "list"

 }

}

 

filter {

 mutate {

  convert => ["upstream_time", "float"]

  convert => ["request_time", "float"]

 }

}

 

output {

  stdout {}

  if "access" in [tags] {

   elasticsearch {

​    hosts => "http://localhost:9200"

​    manage_template => false

​    index => "nginx_access-%{+yyyy.MM.dd}"

   }

  }

  if "error" in [tags] {

   elasticsearch {

​    hosts => "http://localhost:9200"

​    manage_template => false

​    index => "nginx_error-%{+yyyy.MM.dd}"

   }

  }

}
`)],-1),n("h3",{id:"_6-1-5-filebeat收集日志写入到一个key中",tabindex:"-1"},[e("6.1.5 filebeat收集日志写入到一个key中 "),n("a",{class:"header-anchor",href:"#_6-1-5-filebeat收集日志写入到一个key中","aria-label":'Permalink to "6.1.5 filebeat收集日志写入到一个key中"'},"​")],-1),n("pre",null,[n("code",null,`[root@Andu ~]# cat /etc/filebeat/filebeat.yml 

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/access.log

 json.keys_under_root: true

 json.overwrite_keys: true

 tags: ["access"]

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/error.log

 tags: ["error"]

setup.template.settings:

 index.number_of_shards: 3

setup.kibana:

 host: "192.168.10.66:5601"

output.redis:

 hosts: ["localhost"]

 key: "filebeat"
`)],-1),n("h3",{id:"_6-1-6-logstash根据tag区分一个key里的不同日志",tabindex:"-1"},[e("6.1.6 logstash根据tag区分一个key里的不同日志 "),n("a",{class:"header-anchor",href:"#_6-1-6-logstash根据tag区分一个key里的不同日志","aria-label":'Permalink to "6.1.6 logstash根据tag区分一个key里的不同日志"'},"​")],-1),n("p",null,"[root@Andu ~]# cat /etc/logstash/conf.d/redis.conf",-1),n("pre",null,[n("code",null,`input {

 redis {

  host => "127.0.0.1"

  port => "6379"

  db => "0"

  key => "filebeat"

  data_type => "list"

 }

}

filter {

 mutate {

  convert => ["upstream_time", "float"]

  convert => ["request_time", "float"]

 }

}

output {

  if "access" in [tags] {

   elasticsearch {

​    hosts => "http://localhost:9200"

​    manage_template => false

​    index => "nginx_access-%{+yyyy.MM.dd}"

   }

  }

  if "error" in [tags] {

   elasticsearch {

​    hosts => "http://localhost:9200"

​    manage_template => false

​    index => "nginx_error-%{+yyyy.MM.dd}"

   }

  }

}
`)],-1),n("h2",{id:"_6-2-使用nginx-keepalived代理多台redis",tabindex:"-1"},[e("6.2 使用nginx+keepalived代理多台redis "),n("a",{class:"header-anchor",href:"#_6-2-使用nginx-keepalived代理多台redis","aria-label":'Permalink to "6.2 使用nginx+keepalived代理多台redis"'},"​")],-1),n("h3",{id:"_6-2-1-解决方案介绍",tabindex:"-1"},[e("6.2.1 解决方案介绍 "),n("a",{class:"header-anchor",href:"#_6-2-1-解决方案介绍","aria-label":'Permalink to "6.2.1 解决方案介绍"'},"​")],-1),n("p",null,"上面我们实验了单台redis作为收集日志的缓存层，但是单台redis存在一个问题，就是单点故障",-1),n("p",null,"虽然可以做持久化处理，但是加入服务器坏掉或者修复时间未知的情况下还是有可能会丢数据。",-1),n("p",null,"redis集群方案有哨兵和集群，但可惜的是filebeat和logstash都不支持这两种方案。",-1),n("p",null,"不过利用我们目前所学的知识完全可以解决这个问题，虽然不是彻底解决，但是已经很好了",-1),n("p",null,"方案如下：",-1),n("p",null,"1.使用nginx+keepalived反向代理负载均衡到后面的多台redis",-1),n("p",null,"2.考虑到redis故障切换中数据一致性的问题，所以最好我们只使用2台redis,并且只工作一台，另外一台作为backup，只有第一台坏掉后，第二台才会工作。",-1),n("p",null,"3.filebeat的oputut的redis地址为keepalived的虚拟IP",-1),n("p",null,"4.logstash可以启动多个节点来加速读取redis的数据",-1),n("p",null,"5.后端可以采用多台es集群来做支撑",-1),n("h3",{id:"_6-2-2-nginx配置文件",tabindex:"-1"},[e("6.2.2 nginx配置文件 "),n("a",{class:"header-anchor",href:"#_6-2-2-nginx配置文件","aria-label":'Permalink to "6.2.2 nginx配置文件"'},"​")],-1),n("p",null,"注意：添加stream模块，要在nginx.conf里最后添加，而不是在conf.d里面添加子配置",-1),n("pre",null,[n("code",null,`[root@lb02 ~]# cat /etc/nginx/nginx.conf

..........................

stream {

 upstream redis {

   server 10.0.0.51:6381 max_fails=2 fail_timeout=10s;

   server 10.0.0.51:6382 max_fails=2 fail_timeout=10s backup;

 }

 

 server {

​     listen 6379;

​     proxy_connect_timeout 1s;

​     proxy_timeout 3s;

​     proxy_pass redis;

 }

}
`)],-1),n("h3",{id:"_6-2-3-redis配置",tabindex:"-1"},[e("6.2.3 redis配置 "),n("a",{class:"header-anchor",href:"#_6-2-3-redis配置","aria-label":'Permalink to "6.2.3 redis配置"'},"​")],-1),n("pre",null,[n("code",null,`[root@db01 /opt/redis_6381/conf]# cat /opt/redis_6381/conf/redis_6381.conf       

bind 10.0.0.51

port 6381

daemonize yes

pidfile /opt/redis_6381/pid/redis_6381.pid

logfile /opt/redis_6381/logs/redis_6381.log

databases 16

save 900 1

save 300 10

save 60 10000

stop-writes-on-bgsave-error yes

rdbcompression yes

rdbchecksum yes

dbfilename redis_6381.rdb

dir /data/redis_6381
`)],-1),n("h3",{id:"_6-2-4-模拟故障测试",tabindex:"-1"},[e("6.2.4 模拟故障测试 "),n("a",{class:"header-anchor",href:"#_6-2-4-模拟故障测试","aria-label":'Permalink to "6.2.4 模拟故障测试"'},"​")],-1),n("h3",{id:"_6-2-5-logstash配置",tabindex:"-1"},[e("6.2.5 logstash配置 "),n("a",{class:"header-anchor",href:"#_6-2-5-logstash配置","aria-label":'Permalink to "6.2.5 logstash配置"'},"​")],-1),n("h3",{id:"_6-2-6-使用supervisor批量管理多个logstash进程",tabindex:"-1"},[e("6.2.6 使用supervisor批量管理多个logstash进程 "),n("a",{class:"header-anchor",href:"#_6-2-6-使用supervisor批量管理多个logstash进程","aria-label":'Permalink to "6.2.6 使用supervisor批量管理多个logstash进程"'},"​")],-1),n("h2",{id:"_6-3-使用kafka作为缓存",tabindex:"-1"},[e("6.3 使用kafka作为缓存 "),n("a",{class:"header-anchor",href:"#_6-3-使用kafka作为缓存","aria-label":'Permalink to "6.3 使用kafka作为缓存"'},"​")],-1),n("h3",{id:"_6-3-1-介绍",tabindex:"-1"},[e("6.3.1 介绍 "),n("a",{class:"header-anchor",href:"#_6-3-1-介绍","aria-label":'Permalink to "6.3.1 介绍"'},"​")],-1),n("h3",{id:"_6-3-2-zookeeper安装配置",tabindex:"-1"},[e("6.3.2 zookeeper安装配置 "),n("a",{class:"header-anchor",href:"#_6-3-2-zookeeper安装配置","aria-label":'Permalink to "6.3.2 zookeeper安装配置"'},"​")],-1),n("h3",{id:"_6-3-3-kafka安装配置",tabindex:"-1"},[e("6.3.3 kafka安装配置 "),n("a",{class:"header-anchor",href:"#_6-3-3-kafka安装配置","aria-label":'Permalink to "6.3.3 kafka安装配置"'},"​")],-1),n("h3",{id:"_6-3-4-kafka集群收发消息测试",tabindex:"-1"},[e("6.3.4 kafka集群收发消息测试 "),n("a",{class:"header-anchor",href:"#_6-3-4-kafka集群收发消息测试","aria-label":'Permalink to "6.3.4 kafka集群收发消息测试"'},"​")],-1),n("h3",{id:"_6-3-5-filebeat配置",tabindex:"-1"},[e("6.3.5 filebeat配置 "),n("a",{class:"header-anchor",href:"#_6-3-5-filebeat配置","aria-label":'Permalink to "6.3.5 filebeat配置"'},"​")],-1),n("pre",null,[n("code",null,`[root@kafka-175 conf.d]# cat /etc/filebeat/filebeat.yml 

filebeat.inputs:

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/access.log

 json.keys_under_root: true

 json.overwrite_keys: true

 tags: ["access"]

\\- type: log

 enabled: true 

 paths:

  \\- /var/log/nginx/error.log

 tags: ["error"]

setup.template.settings:

 index.number_of_shards: 3

setup.kibana:

 host: "192.168.10.66:5601"

output.kafka:

 hosts: ["192.168.10.66:9092","192.168.47.176:9092","192.168.47.177:9092"]

 topic: elklog
`)],-1),n("h3",{id:"_6-3-6-logstash配置",tabindex:"-1"},[e("6.3.6 logstash配置 "),n("a",{class:"header-anchor",href:"#_6-3-6-logstash配置","aria-label":'Permalink to "6.3.6 logstash配置"'},"​")],-1),n("pre",null,[n("code",null,`[root@kafka-175 conf.d]# cat /etc/logstash/conf.d/kafka.conf

input{

 kafka{

  bootstrap_servers=>"192.168.10.66:9092"

  topics=>["elklog"]

  group_id=>"logstash"

  codec => "json"

 }

}

filter {

 mutate {

  convert => ["upstream_time", "float"]                                                            

  convert => ["request_time", "float"]

 }

}

output {

  if "access" in [tags] {

   elasticsearch {

​    hosts => "http://localhost:9200"

​    manage_template => false

​    index => "nginx_access-%{+yyyy.MM.dd}"

   }

  }

  if "error" in [tags] {

   elasticsearch {

​    hosts => "http://localhost:9200"

​    manage_template => false

​    index => "nginx_error-%{+yyyy.MM.dd}"

   }

  }

}
`)],-1),n("h1",{id:"第7章-配置logstash同步mysql数据",tabindex:"-1"},[e("第7章 配置logstash同步mysql数据 "),n("a",{class:"header-anchor",href:"#第7章-配置logstash同步mysql数据","aria-label":'Permalink to "第7章 配置logstash同步mysql数据"'},"​")],-1),n("p",null,"略",-1),n("h1",{id:"第8章-kibana画图展示",tabindex:"-1"},[e("第8章 kibana画图展示 "),n("a",{class:"header-anchor",href:"#第8章-kibana画图展示","aria-label":'Permalink to "第8章 kibana画图展示"'},"​")],-1),n("p",null,"略",-1),n("h1",{id:"第9章-grafana画图展示",tabindex:"-1"},[e("第9章 grafana画图展示 "),n("a",{class:"header-anchor",href:"#第9章-grafana画图展示","aria-label":'Permalink to "第9章 grafana画图展示"'},"​")],-1),n("p",null,"除了kibana外，grafana也支持从es调取数据并展示",-1),n("p",null,[n("a",{href:"https://grafana.com/docs/features/datasources/elasticsearch/#using-elasticsearch-in-grafana",target:"_blank",rel:"noreferrer"},"https://grafana.com/docs/features/datasources/elasticsearch/#using-elasticsearch-in-grafana")],-1),n("h1",{id:"第10章-如何在公司推广elk项目",tabindex:"-1"},[e("第10章 如何在公司推广ELK项目 "),n("a",{class:"header-anchor",href:"#第10章-如何在公司推广elk项目","aria-label":'Permalink to "第10章 如何在公司推广ELK项目"'},"​")],-1),n("p",null,"如何在公司推广ELK的项目",-1),n("p",null,"1.优先表达出对其他人带来的便利和好处",-1),n("p",null,"- 领导",-1),n("p",null,"- 开发",-1),n("p",null,"- 测试",-1),n("p",null,"- DBA",-1),n("p",null,"– 以后你自己相查什么数据都可以直接查",-1),n("p",null,"– 以前插个日志运维得查10分钟，现在你只要点几下鼠标就ok了",-1),n("p",null,"– 我专门为你们部门定制了一个图形面板，你看看效果，有啥不满意的尽管说，我优先给你们部门解决",-1),n("p",null,"2.对于运维来说，json日志更友好",-1),n("p",null,"- 告诉领导，json格式更友好，做出测试环境，并给领导演示json格式优点",-1),n("p",null,"- 提前统计好到底需要收集哪些日志",-1),n("p",null,"- 要求能转成json的就转成json",-1),n("p",null,"- 自己改不了的，给领导说，让开发改成json格式",-1),n("p",null,"- 那行，领导你看，如果不改成json，就只能是这个效果了，后续的新需求，可能就满足不了了",-1),n("p",null,"- 并不是说所有日志，必须是json",-1),n("p",null,"3.推广演示",-1),n("p",null,"- 提前都准备好文档和ppt还有测试环境",-1),n("p",null,"- 一定要对比传统分析日志和ELK之后带来的巨大改变",-1),n("h1",{id:"第11章-面试问题",tabindex:"-1"},[e("第11章 面试问题 "),n("a",{class:"header-anchor",href:"#第11章-面试问题","aria-label":'Permalink to "第11章 面试问题"'},"​")],-1),n("hr",null,null,-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_1"},"A1]"),e("ELK每个组件都需要JAVA环境")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_2"},"A2]"),e("搭建群集一定要同步时间")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_3"},"A3]"),e("数据库存储目录")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_4"},"A4]"),e("日志文件存储位置")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_5"},"A5]"),e("锁定内存")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_6"},"A6]"),e("监听地址，最好添加上本机地址")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_7"},"A7]"),e("监听端口")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_8"},"A8]"),e("配置filebeat支持json格式传输到Es")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_9"},"A9]"),e("修改索引名称，推荐以月份结尾，因为Kibana支持月份")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_10"},"A10]"),e("关闭默认模板索引")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_11"},"A11]"),e("引用设置索引")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_13"},"A13]"),e("定义JSON键值对，使得ES读数据更加明显索引更加奥里给")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_14"},"A14]"),e("定义错误日志存放目录，tags指定下方可指定条件，可以是键值里得任何一种。")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_15"},"A15]"),e("当tags是error的时候收集日志简直不要奥里给")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_16"},"A16]"),e("如果只监听一个服务不用添加条件：定义条件")],-1),n("p",null,[e("["),n("a",{href:"#_msoanchor_17"},"A17]"),e("不用纠结每添加一种服务就要该名称 只要之前改过，就可以不用修改就可以使用")],-1)])]),"main-header":a(()=>[l(t.$slots,"main-header")]),"main-header-after":a(()=>[l(t.$slots,"main-header-after")]),"main-nav":a(()=>[l(t.$slots,"main-nav")]),"main-content-before":a(()=>[l(t.$slots,"main-content-before")]),"main-content":a(()=>[l(t.$slots,"main-content")]),"main-content-after":a(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[l(t.$slots,"main-nav-after")]),comment:a(()=>[l(t.$slots,"comment")]),footer:a(()=>[l(t.$slots,"footer")]),aside:a(()=>[l(t.$slots,"aside")]),"aside-custom":a(()=>[l(t.$slots,"aside-custom")]),default:a(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{C as default,y as usePageData};
