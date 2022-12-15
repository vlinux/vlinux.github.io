---
title: linux压力测试工具
categories: Linux技术
tags: [ab,Webbench,压力测试]
date: 2020-02-21 12:18:00
---
## ab网站压力测试工具
水一篇~~~~~~~~~~~~~~
**参数：**

**语法： ab -n 数字 -c 数字 http://链接**

`-n requests Number of requests to perform**`

在测试会话中所执行的请求总个数。默认时，仅执行一个请求
 `-c concurrency Number of multiple requests to make`
 一次产生的请求个数。默认是一次一个。

 同时处理1000个请求。 一次要执行1000个并发请求。**

 `ab -n 1000 -c 1000 http://192.168.1.63/index.html**`

ab命令在一般系统上面做测试时候，一般并发不能超过1024个，其实是因为因为系统限制每个进程打开的最大文件数为1024，可以用ulimit -a来查看

`ab -n 1000 -c 1000 http://192.168.1.63/index.html`

 

`Server Software:    Apache/2.2.15  #****被测试的httpd服务器版本：//平台apache 版本2.0.54**`

`**Server Hostname:    192.168.1.63 //****服务器主机名**`

`**Server Port:      80 //****服务器端口**`

`**Document Path:     /index.html  //****测试的页面文档**`

`**Document Length:    13 bytes //****文档大小**`

`**Concurrency****（并发） Level:   1000** **//****并发数**`

`**Time taken for tests:  2.166 seconds #****整个测试花费的时间**`

`**Complete requests:   1000** **//****完成的请求数量**`

`**Failed requests:    0** **//****失败的请求数量**`

`**Write errors:      0**`

`**Total transferred:   281120 bytes**  **#****整个测试过程中总传输字节数**`

`**HTML transferred:    13052 bytes #****//****整个场景中的HTML内容传输量**`

`**Requests per second:  461.77 [#/sec] (mean)  #****每秒处理请求数。//大家最关心的指标之一，相当于服务器中的每秒事务数 ，后面括号中的 mean 表示这是一个平均值**`

`**Time per request:    2165.597 [ms] (mean) #** **//****大家最关心的指标之二，平均请求响应时间 ，后面括号中的 mean 表示这是一个平均值**`

`**Time per request:    2.166 [ms] (mean, across all concurrent requests)** **#****每个请求的时间：2.166[毫秒]（意思是说，在所有的并发请求） //每个请求实际运行时间的平均值。**`

**由于对于并发请求，cpu实际上并不是同时处理的，而是按照每个请求获得的时间片逐个轮转处理的，所以基本上第一个Time per request时间约等于第二个Time per request时间乘以并发请求数**

 

`**Transfer rate:     126.77 [Kbytes/sec] received #****传输速率：****//****平均每秒网络上的流量，可以帮助排除是否存在网络流量过大导致响应时间延长的问题**`



`**Connection Times (ms) #****连接时间（毫秒）**`

 `**min mean[+/-sd] median  max  # median****（中间）**`

## **网站压力测试工具-Webbench**

webbench简介：
 Webbench是有名的网站压力测试工具，它是由 Lionbridge公司（http://www.lionbridge.com）开发的网站压力测试工具，它能测试处在相同硬件上，不同服务的性能以及不同硬件上同一个服务的运行状况。webbench不但能具有便准静态页面的测试能力，还能对动态页面（ASP,PHP,JAVA,CGI）进行测试的能力。**

**官网：http://www.lionbridge.com**

 

 

下载并安装webbench：** 

`wget http://www.ha97.com/code/webbench-1.5.tar.gz`
`tar zxvf webbench-1.5.tar.gz** **`
`cd webbench-1.5`
`make**` 

 `mkdir -p /usr/local/man/man1 #****不创建这个执行make install报错：**`

`**install: cannot create regular file /usr/local/man/man1': No such file or directory`

`**make: \**\* [install] Error 1**`

`make install**`

`**install -s webbench /usr/local/bin**`   

`**install -m 644 webbench.1 /usr/local/man/man1**`  

`**install -d /usr/local/share/doc/webbench**`

`**install -m 644 debian/copyright /usr/local/share/doc/webbench**`

`**install -m 644 debian/changelog /usr/local/share/doc/webbench`**

 

进行测试
 `webbench -h**`

**测试参数解释：
  -c为客户端数，-t为时间(秒)**

**实战：当为1个客户端时，持续访问1秒。** 
`**webbench -c 1 -t 1 http://192.168.1.63/index.html**`

`**Webbench - Simple Web Benchmark 1.5**`

`**Copyright (c) Radim Kolar 1997-2004, GPL Open Source Software.**`


`**Benchmarking: GET http://192.168.1.63/index.html**`

`**1 client, running 1 sec.**`


`**Speed=****38219 pages/min****,** **178080** **bytes/sec.**`

**#****当只有一个客户端时，一分钟可以响应****38219****个页面，1秒可以传输****178080****字节**

 

`**Requests:** **637** **susceed,** **0** **failed.**`

**#1****个客户端，1秒产生了****637****个请求，0个失败。**

 

**实战：使用20个客户端并发访问并持续访问10秒
 


`webbench -c 20 -t 10 http://192.168.1.63/index.html`

`Webbench - Simple Web Benchmark 1.5`

`Copyright (c) Radim Kolar 1997-2004, GPL Open Source Software.`


`Benchmarking: GET http://192.168.1.63/index.html`

`**20 clients, running 10 sec.**`

`` 

`**Speed=****397356** **pages/min, 1854384 bytes/sec.`

`**Requests:** **66226** **susceed, 0 failed.`

 

测试注意事项：
 1.压力测试工作应该放到产品上线之前，而不是上线以后；
 2.webbench 做压力测试时，该软件自身也会消耗CPU和内存资源，为了测试准确，请将 webbench 安装在别的服务器上；
 3.测试时尽量跨公网进行，而不是内网； 如果带宽不够时，可以内网测试。
 4.测试时并发应当由小逐渐加大，观察一下网站负载及打开是否流畅，直到网站打开缓慢甚至网站完全打不开； 可以一边在linux测试，一个在浏览上打开，查看是否流畅。
 5.应尽量进行单元测试，如B2C网站可以着重测试购物车、推广页面等，因为这些页面占整个网站访问量比重较大。**

