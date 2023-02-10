---
title: Solr集群搭建-v7.4.0
categories: Linux技术
tags: [Solr]
date: 2023-01-12 16:10:00
end: false
---

Solr是很多年前时代的产物，他会不会被ES所替代，难说

<!-- more -->

# Solr集群搭建-v7.4.0-(使用内置Jetty搭建SolrCloud)

`目录划分`

solr

- 程序目录 /opt/solr
- 数据目录 /data/solr

zk

- 程序目录 /opt/zookeeper
- 数据目录 /data/zookeeper

Java 

- 程序目录 /usr/local/java1.8

 

### 一、硬件环境

私有云服务器已申请IP如下

| 环境   | 私有IP       | EIP           |
| ------ | ------------ | ------------- |
| 私有云 | 172.16.1.154 | 192.168.1.45  |
| 私有云 | 172.16.1.122 | 192.168.1.189 |
| 私有云 | 172.16.1.71  | 192.168.1.180 |

### 二、软件环境(三台机器统一操作)

操作系统：Centos 7.6

JDK：jdk1.8.0_201

Zk ：zookeeper-3.4.14

**0.安装包,相关目录准备**

```bash
#创建Solr，Zk程序目录
mkdir -p /data/{zookeeper,solr}/{data,logs}
#创建集合配置文件存放目录，程序包目录
mkdir /root/devops/collections && mkdir /opt/solr-app
#上传程序到服务器/opt/solr-app
cd /opt/solr-app && rz
ls 
jdk1.8.0_201.tar.gz  log4j2.xml  log4j-api-2.17.1.jar  log4j-core-2.17.1.jar  solr-7.4.0.tgz  zookeeper-3.4.14.tar.gz
```

**1.安装JDK**

解压

```bash
tar xf jdk1.8.0_201.tar.gz
mv jdk1.8.0_201 /usr/local/jdk1.8
cat /etc/profile
```

配置环境变量

```bash
cat /etc/profile
***
#配置Java环境变量
export JAVA_HOME=/usr/local/jdk1.8
export PATH=$PATH:$JAVA_HOME/bin
***
soucre /etc/profile
```

验证

```bash
java -version
```

**2.安装ZooKeeper**

解压

```bash
tar xf zookeeper-3.4.14.tar.gz
mv zookeeper-3.4.14 /opt/zookeeper 
```

配置hosts解析

```bash
vim /etc/hosts
192.168.1.45 zk1
192.168.1.189 zk2
192.168.1.180 zk3
```

配置myid

*三台机器ID分别为123*

```bash
echo 1 > /data/zookeeper/data/myid
```

配置zoo.cfg

```bash
vim /opt/zookeeper/conf/zoo.cfg

clientPort=2181
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/data/zookeeper/data
dataLogDir=/data/zookeeper/logs
server.1=zk1:2888:3888
server.2=zk2:2888:3888
server.3=zk3:2888:3888
forceSync=no
skipACL=yes
maxClientCnxns=1000
minSessionTimeout=30000
maxSessionTimeout=60000
quorumListenOnAllIPs=true
```

加入systemd系统管理服务

```bash
vim /usr/lib/systemd/system/zookeeper.service

[Unit]
Description=ZooKeeper Service
After=network.target
After=syslog.target
[Service]
Type=forking
User=root
LimitNOFILE=65536
LimitNPROC=65536
Environment=ZOO_LOG_DIR=/data/zookeeper/log
Environment=JAVA_HOME=/usr/local/jdk1.8
Environment=ZK_HOME=/opt/zookeeper
ExecStart=/opt/zookeeper/bin/zkServer.sh start /opt/zookeeper/conf/zoo.cfg
[Install]
WantedBy=default.target
```

开启开机自启动并启动服务

```bash
systemctl daemon-reload && systemctl enable zookeeper && systemctl start zookeeper && systemctl status zookeeper
```

加入系统环境变量

```bash
cat /etc/profile
***
#配置zk环境变量
export PATH=$PATH:/opt/zookeeper/bin
***
source /etc/profile
```

验证

```bash
zkServer.sh status
```

**3.Jetty**

Jetty是Solr内置的，不需要另外安装

 

### 三、搭建Solr集群(SolrCloud模式)

`先登录root账号再进行以下操作`

`下面第2到7步骤需要在所有机器都操作一次`

**1.下载**

http://archive.apache.org/dist/lucene/solr/7.4.0/

这里下载的是7.4.0，文件名是solr-7.4.0.tgz

**2.解压**

```
cd /opt/solr-app
tar -xvf solr-7.4.0.tgz
mv solr-7.4.0 /opt/solr
```

**3.配置环境变量**

```bash
vim /etc/profile
***
#配置Solr环境变量
export PATH=$PATH:/opt/solr/bin
***
soucre /etc/profile
```

**4.配置solr.in.sh**

```
cd /opt/solr/bin
vim solr.in.sh
```

反注释或添加以下属性：

```
SOLR_PID_DIR="/data/solr"
SOLR_HOME="/data/solr/data"
LOG4J_PROPS="/data/solr/log4j2.xml"
SOLR_LOGS_DIR="/data/solr/logs"
SOLR_PORT="8983"
ZK_HOST="zk1:2181,zk2:2181,zk3:2181"
```

配置solr.xml文件

```bash
cp -rp /opt/solr/server/solr/solr.xml /data/solr/data/
```

```bash
#Net模式下需要配置文件中的监听IP为NetIP，而不是内网IP
vim /data/solr/data/solr.xml
***
    <str name="host">${host:192.168.1.45}</str> 
   ***
```

**5.log4j2漏洞临时修复**

创建log4j2.xml文件

```bash
vim /data/solr/log4j2.xml
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  -->

<Configuration>
  <Appenders>

    <Console name="STDOUT" target="SYSTEM_OUT">
      <PatternLayout>
        <Pattern>
          %d{yyyy-MM-dd HH:mm:ss.SSS} %-5p (%t) [%X{collection} %X{shard} %X{replica} %X{core}] %c{1.} %m%n
        </Pattern>
      </PatternLayout>
    </Console>

    <RollingFile
        name="RollingFile"
        fileName="${sys:solr.log.dir}/solr.log"
        filePattern="${sys:solr.log.dir}/solr.log.%i" >
      <PatternLayout>
        <Pattern>
          %d{yyyy-MM-dd HH:mm:ss.SSS} %-5p (%t) [%X{collection} %X{shard} %X{replica} %X{core}] %c{1.} %m%n
        </Pattern>
      </PatternLayout>
      <Policies>
        <OnStartupTriggeringPolicy />
        <SizeBasedTriggeringPolicy size="32 MB"/>
      </Policies>
      <DefaultRolloverStrategy max="10"/>
    </RollingFile>

    <RollingFile
        name="SlowFile"
        fileName="${sys:solr.log.dir}/solr_slow_requests.log"
        filePattern="${sys:solr.log.dir}/solr_slow_requests.log.%i" >
      <PatternLayout>
        <Pattern>
          %d{yyyy-MM-dd HH:mm:ss.SSS} %-5p (%t) [%X{collection} %X{shard} %X{replica} %X{core}] %c{1.} %m%n
        </Pattern>
      </PatternLayout>
      <Policies>
        <OnStartupTriggeringPolicy />
        <SizeBasedTriggeringPolicy size="32 MB"/>
      </Policies>
      <DefaultRolloverStrategy max="10"/>
    </RollingFile>

  </Appenders>
  <Loggers>
    <Logger name="org.apache.hadoop" level="warn"/>
    <Logger name="org.apache.solr.update.LoggingInfoStream" level="off"/>
    <Logger name="org.apache.zookeeper" level="warn"/>
    <Logger name="org.apache.solr.core.SolrCore.SlowRequest" level="info" additivity="true">
      <AppenderRef ref="SlowFile"/>
    </Logger>

    <Root level="WARN">
      <AppenderRef ref="RollingFile"/>
      <AppenderRef ref="STDOUT"/>
    </Root>
  </Loggers>
</Configuration>
```

替换Solr-log4j2核心库文件

![image-20220322102108643](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20220322102108643.png)

```bash
替换log4j-api-2.11.0.jar，log4j-core-2.11.0.jar为log4j-api-2.17.1.jar，log4j-core-2.17.1.jar
```

**6.启动**

启动脚本

```bash
cat /root/devops/start_solr.sh 
#!/bin/bash
#Auther: vlinux
#Date: 2020-09-29
/opt/solr/bin/solr start -m 6g -force
```

关闭

```bash
solr stop
```



**7.测试并创建集合**

(1) 查看Web管理平台

在浏览器打开

http://192.168.1.45:8983

(2) 创建collection-conf（集合配置文件）

```bash
#配置集合的config文件
cd /opt/solr/server/scripts/cloud-scripts
./zkcli.sh -zkhost zk1:2181,zk2:2181,zk3:2181 -cmd upconfig -confdir /opt/solr/server/solr/configsets/sample_techproducts_configs/conf -confname solrconf

./zkcli.sh -zkhost zk1:2181,zk2:2181,zk3:2181 -cmd upconfig -confname status_config -confdir /root/devops/collections/status

./zkcli.sh -zkhost zk1:2181,zk2:2181,zk3:2181 -cmd upconfig -confname alert_config -confdir /root/devops//collections/alert

./zkcli.sh -zkhost zk1:2181,zk2:2181,zk3:2181 -cmd upconfig -confname vehicle_config -confdir /root/devops//collections/vehicle

./zkcli.sh -zkhost zk1:2181,zk2:2181,zk3:2181 -cmd upconfig -confname alert_summary_config -confdir /root/devops//collections/alert_summary

```

(3)在Web应用配置文件创建集合

![image-20220323164237927](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20220323164237927.png)

（4）创建集合别名（生产环境用作分散读写请求）status_read,status_write

![image-20220323164418209](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20220323164418209.png)

![image-20220323164630795](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20220323164630795.png)
