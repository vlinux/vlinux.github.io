---
title: ELK-Nginx日志分析及绘图
categories: DevOps
tags: [ELK]
date: 2020-08-27 16:28:00
---
## 1. 前言

先上一张整体的效果图：

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171756743-1335980347.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171756743-1335980347.png)

 

 

 

上面这张图就是通过 ELK 分析 nginx 日志所得到的数据，通过 kibana 的功能展示出来的效果图。是不是这样对日志做了解析，想要知道的数据一目了然。接下来就是实现过程实录。

 

## 2. 实现过程

通过上一篇：[ELK 部署文档](https://www.kococ.cn/20200924/cid=619.html) 已经对 ELK + filebeat 获取 nginx 做了详细的配置介绍，这里重点就不在安装 ELK 上面了。 下面这边的内容，主要是针对 logstash 配置文件的编写和 kibana web界面的配置。

主机信息在申明下，和上一篇一样：

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914165802139-1352161924.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914165802139-1352161924.png)

 

 

 

### 2.1 nginx 日志格式编写

在编写logstash 文件之前，得有一个标准输入输出格式，这个格式通用的就是 json 格式。

首先，考虑如何才能获取 json 格式的日志，当然可以直接通过修改 nginx 日志的格式来实现，因此开始修改 nginx 日志格式。如果获取的日志无法修改json 格式，则可以通过正则表达式来匹配。



在nginx 配置文件中添加如下日志格式：





```
http {
…
    log_format main_json '{"domain":"$server_name",'
    '"http_x_forwarded_for":"$http_x_forwarded_for",'
    '"time_local":"$time_iso8601",'
    '"request":"$request",'
    '"request_body":"$request_body",'
    '"status":$status,'
    '"body_bytes_sent":"$body_bytes_sent",'
    '"http_referer":"$http_referer",'
    '"upstream_response_time":"$upstream_response_time",'
    '"request_time":"$request_time",'
    '"http_user_agent":"$http_user_agent",'
    '"upstream_addr":"$upstream_addr",'
    '"upstream_status":"$upstream_status"}';
 
 
….
}
```


定义的这个nginx 日志格式叫 main_json 后面的配置文件，都可以引用这个日志格式。除了nginx 日志参数以外，还可以通过配置文件来自行添加自定义参数，比如 获取用户的真实ip

于是编写一个自定义变量的配置文件：

```
[root@192.168.118.16 ~]`` vim /etc/nginx/location.conf` ` set $real_ip $remote_addr;``if` `( $http_x_forwarded_for ~ ``"^(\d+\.\d+\.\d+\.\d+)"` `) {``    ``set` `$real_ip $1;``}
```

这个配置文件只是为了获取用户的真实IP，变量名为： real_ip 需要在nginx.conf 中引用，在刚才的配置文件中也加入该变量，完整日志格式如下：

```
log_format main_json '{"domain":"$server_name",'
'"real_ip":"$real_ip",'
'"http_x_forwarded_for":"$http_x_forwarded_for",'
'"time_local":"$time_iso8601",'
'"request":"$request",'
'"request_body":"$request_body",'
'"status":$status,'
'"body_bytes_sent":"$body_bytes_sent",'
'"http_referer":"$http_referer",'
'"upstream_response_time":"$upstream_response_time",'
'"request_time":"$request_time",'
'"http_user_agent":"$http_user_agent",'
'"upstream_addr":"$upstream_addr",'
'"upstream_status":"$upstream_status"}';
```

 

注释掉该行：

```
 access_log /var/log/nginx/access.log main;
```

接下来，编写一个nginx 配置文件 端口为 9527 作为测试使用

```
[root@192.168.118.16 ~]`` vim /etc/nginx/conf.d/server_9527.conf``server {``  ``listen 9527;``  ``server_name localhost;``  ``include location.conf;``  ``location / {``    ``root ``/www/9527/``;``    ``index index.html;``    ``access_log ``/www/log/access``.log main_json;``    ``error_log ``/www/log/error``.log;``  ``}``  ``location ``/shop` `{``    ``root ``/www/9527``;``    ``access_log ``/www/log/shop_access``.log main_json;``    ``error_log ``/www/log/shop_error``.log;``  ``}``}` `[root@192.168.118.16 ~]`` mkdir -p /www/{9527,log}``[root@192.168.118.16 ~]`` cd /www/9527/``[root@192.168.118.16 ``/www/9527``]`` vim index.html``hello, 9527``[root@192.168.118.16 ``/www/9527``]`` mkdir -pv /www/9527/shop``[root@192.168.118.16 ``/www/9527``]`` vim /www/9527/shop/index.html``出售9527` `[root@192.168.118.16 ``/www/9527``]`` nginx -t``[root@192.168.118.16 ``/www/9527``]`` nginx -s reload
```

Nginx 配置完成，重新加载，访问测试：

```
[root@192.168.118.16 ~]`` curl http://192.168.118.16:9527/index.html``hello, 9527``[root@192.168.118.16 ~]`` curl http://192.168.118.16:9527/shop/index.html``出售9527
```

页面访问正常，查看日志：

```
[root@192.168.118.16 ~]`` ll -tsh /www/log/``total 8.0K``4.0K -rw-r--r-- 1 root root 346 Sep 14 14:35 shop_access.log``4.0K -rw-r--r--. 1 root root 341 Sep 14 14:35 access.log``  ``0 -rw-r--r--. 1 root root  0 Sep 14 14:35 error.log``  ``0 -rw-r--r-- 1 root root  0 Sep 14 14:34 shop_error.log
```

 日志文件已生成，查看日志格式：

```
[root@192.168.118.16 ~]`` cat /www/log/access.log``{``"domain"``:``"localhost"``,``"real_ip"``:``""``,``"http_x_forwarded_for"``:``"-"``,``"time_local"``:``"2019-09-14T14:35:11+08:00"``,``"request"``:``"GET /index.html HTTP/1.1"``,``"request_body"``:``"-"``,``"status"``:200,``"body_bytes_sent"``:``"12"``,``"http_referer"``:``"-"``,``"upstream_response_time"``:``"-"``,``"request_time"``:``"0.000"``,``"http_user_agent"``:``"curl/7.29.0"``,``"upstream_addr"``:``"-"``,``"upstream_status"``:``"-"``}
```

 定义的 json 格式已经被引用到，nginx日志格式配置完成，接下来就是 通过filebeat 将nginx 日志传递给 logstash

 

### 2.2 filebeat 传输 nginx 日志

这里在上一篇的基础上做修改，直接修改 filebeat 配置文件：

```
[root@192.168.118.16 ~]`` vim /etc/filebeat/modules.d/nginx.yml
```

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170056822-999219778.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170056822-999219778.png)

重启 filebeat 服务

 

 

```
[root@192.168.118.16 ~]`` systemctl restart filebeat
```

 

### 2.3 logstash 配置文件编写

 

 

通过上面的步骤，filebeat 已经将 nginx 日志传输过来了，接下来就看 logstash 要怎么接收日志数据了，还是通过循序渐进的方式来编写。

首先将日志数据打印到屏幕，保证数据的正确性。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170146062-105485249.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170146062-105485249.png)

 

 

从 nginx.conf 启动 logstash。通过浏览器访问 nginx 9527端口产生日志数据。

这里启动 logstash 可以添加 修改自动重载的模式，这样当修改了 nginx.conf 时，不必频繁的去关闭重启。

```
[root@192.168.118.15 ``/etc/logstash/conf``.d]`` logstash -f nginx.conf --config.reload.automatic
```

通过抓取一段 json 数据，分析下：

logstash 输出内容

这里面数据很多，但是这里的有些数据不是必要的，应该保留需要的数据，而剔除没必要的数据，使 json 看起来更加简洁。

首先来查看这段 json ，发现真正的 nginx 日志数据都存在 message 里面，其他的都是一些主机服务相关的信息，但是 message 看起来乱糟糟的，简直没法看。既然采用的 json 格式，那就能够格式化。

修改配置文件如下：

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170309225-1319713742.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170309225-1319713742.png)

 

 

logstash 输出内容

将这两次获取的数据进行一个对比，下面这个数据 message 被删除了，但是 message 中的每个字段都独立出来了。这样的好处：

　　（1）日志信息更加清晰，能够准确的定位到某一个字段；

　　（2）为后面存储到 elasticsearch 中，进行查询或者筛选做好了准备。

 

上面这个操作就等于是将原来的 message 分列存放了。

上面这个json 发现有两个时间：

　　@timestamp - 格林尼治时间 - logstash 获取日志时间

 　Time_local - 东八区时间 - nginx日志记录时间

 

这两个时间的 分钟和秒钟并不一致，而后面过滤日志采用的是 @timestamp 时间，也就是 logstash 时间，这就会造成 nginx 日志时间不准确的现象，因此需要将两个时间修改为一致。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170415825-1466620540.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170415825-1466620540.png)

 

 

logstash 输出内容

现在，对比两个时间的分钟 和秒钟，完全一致了。接下来，删除一些不必要的字段，并重命名一些字段名，修改配置文件如下：

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170447494-320560085.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170447494-320560085.png)

 

 

logstash 输出内容

经过重命名和删除没有的字段，json 也变的精简了很多，这样存储 elasticsearch 消耗的存储空间也响应的变小了。

接下来就可以将数据写入到 elasticsearch 中了。在这之前，做的都是 access.log，压根就没考虑到 error.log 的格式，因为 nginx 中 error.log 日志格式无法自定义。

尝试访问一个错误uri 来查看下获取到的数据：

logstash 输出内容

error.log 过来的数据就变成上面这个样子了。这又是个问题，做 ELK 一是为了分析数据，二是为了尽快排错，如果 ELK 连这个都做不到，那就有点鸡肋了。

上面的这个格式看起来又是很乱了，nginx 错误日志都在 message 中，虽然nginx 错误日志无法定义格式，但是 logstash 可以通过正则表达式来将它转换为 json 格式。但在这之前，应该考虑，access.log 和 error.log 是两种不同的格式，不能用同一种方式去匹配。那怎么判断数据是来自 access.log 还是 error.log 呢？

这里语法肯定是想到了：

```
If … {``Access.log``} elseif … {``Error.log``}
```

 对，语法没错，但是用什么条件呢？查看上面的日志，不难发现每次都有这样的字段：

```
Access.log 日志数据：``      ``"fileset"` `=> {``    ``"module"` `=> ``"nginx"``,``     ``"name"` `=> ``"access"` `error.log 日志数据：``    ``"fileset"` `=> {``    ``"module"` `=> ``"nginx"``,``     ``"name"` `=> ``"error"
```

 

这样，就有判断的依据了，根据logstash配置语法开始写：

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170627274-1480014623.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170627274-1480014623.png)

 

 

 

到目前为止，logstash 的 nginx 日志收集过滤配置文件如下：

配置文件名：nginx.conf

nginx.conf

测试 access.log 日志格式数据：

logstash 输出内容

 

测试 error.log 日志格式数据：

logstash 输出内容

 

 

这下没问题了， 两种格式的数据都获取到了。接下来就将数据写入到 elasticsearch中。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170756327-915369456.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170756327-915369456.png)

 

 

到目前为止，logstash 配置文件 nginx.conf 如下：

nginx.conf

这个配置也算是本次 nginx 最终版配置了。

 

使用浏览器多次访问nginx 9527 端口，然后切换到 elasticsearch-head 查看索引是否创建成功。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170831161-1371655326.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170831161-1371655326.png)

 

 

 ok，已经看到今天的索引创建成功，查看数据。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170839396-1643090650.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170839396-1643090650.png)

 

 

 

数据也是没有问题的，切换到 kibana 添加索引。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170848522-1424711383.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170848522-1424711383.png)

 

 

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170858050-1439014079.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170858050-1439014079.png)

 

 

 [![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170902088-655673391.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170902088-655673391.png)

 

 

 

ok，目前已经将数据存储到 elasticsearch 并通过 kibana 展示出来了，但是想要更清晰的分析查看数据还需要在 kibana 上下一番功夫。

 

### 2.4 kibana 展示[ ](https://www.cnblogs.com/hukey/p/11519612.html 1813218387)

首先是 Discover 这里，每次进来，都需要一目了然的查看日志，做以下配置：

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170918203-1826275736.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170918203-1826275736.png)

 

 

 [![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170923063-911065831.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170923063-911065831.png)

 

 

上面两个设置以后，每次登录进来只需要点击 打开 查看相关模板就能看到清晰的日志数据。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914170934181-472655354.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914170934181-472655354.png)

 

 

 

接下来，就是绘制最上面那副图啦。

 

在绘制之前必须要有数据支撑，因为这个是测试环境没有真是的用户访问。因此需要造一批假数据访问。

方法就是 直接去 access.log 里复制一条数据，修改 real_ip 为 公网ip

假数据添加成功后，来进行图表的配置，点击 可视化

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171008460-526233651.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171008460-526233651.png)

 

 

 

第一个：访问省会城市 TOP 5 （饼图）

选择饼图，然后选择 logstash-nginx-* 索引

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171025923-579239111.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171025923-579239111.png)

 

 

完成后点击保存。

 

 

 

第二个：访问分布地图（坐标地图）

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171056562-1145989517.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171056562-1145989517.png)

 

 

 完成后点击保存。

 

 

 

第三个：域名TOP5 （数据表）

 [![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171117412-2106656346.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171117412-2106656346.png)

 

 

 

 完成后点击保存。

 

 

第四个：后端服务TOP5（数据表）

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171137657-803006825.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171137657-803006825.png)

 

 

完成后点击保存。

 



第五个：uri top 5（数据表）

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171158766-897281550.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171158766-897281550.png)

 

 

 

完成后点击保存。



 

 

 

第六个：realipTOP5 （水平条形图）

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171224021-218490679.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171224021-218490679.png)

 

 

 

完成后点击保存。

 

第七个：http状态TOP5 （饼图）

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171315469-1780001853.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171315469-1780001853.png)

 

 

 

完成后点击保存。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171337035-743648824.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171337035-743648824.png)

 

 

 

好了， 在 可视化 一栏中，创建了 7 个数据表图，点开 仪表板，将这些图表展示出来就行了。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171349921-1797704129.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171349921-1797704129.png)

 

 

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171357047-1867714541.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171357047-1867714541.png)

 

 

 

然后将图表摆放好，大功告成。

[![img](https://cdn.jsdelivr.net/gh/kococ/TYPECHO_IMG/mu77/828019-20190914171408307-1023715408.png)](https://img2018.cnblogs.com/blog/828019/201909/828019-20190914171408307-1023715408.png)

