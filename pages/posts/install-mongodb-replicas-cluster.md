---
title: Centos8二进制安装Mongodb副本集群
categories: Linux技术
tags: [Mongodb]
date: 2024-2-16 21:12:00
end: false
---



<!-- more -->



# 1.副本集概述

官网网站：[www.mongodb.com/docs/manual…](https://link.juejin.cn?target=https%3A%2F%2Fwww.mongodb.com%2Fdocs%2Fmanual%2Ftutorial%2Fdeploy-replica-set%2F)

之前是主从复制，后来官方废弃掉了，为了给之前的名字区分开，之后就成为了副本集。副本集可以有多个副本，至少 有2个副本组成副本集。

副本集是维护相同数据集的mongodb服务

**副本集的好处:**
 1.数据冗余：副本集可以确保主节点与副本节点的更新，以防单个数据库的服务宕机造成数据丢失的问题。 
 2.自动故障转移：副本集没有固定的主节点，整个集群会选举出一个主节点，当这个主节点不在正常工作时， 会选举一个副本节点切换为主节点，客户端会连接到这个新的主节点，并且数据和应用都将保持可用。 
 3.读写分离：副本集可以将读取请求分到所有副本集上，以减轻主节点的读写压力 Mongodb副本集实现主/副本切换都是自动的，给我们的redis集群原理差不多

**主从复制和副本集区别：** 副本集没有固定的“主节点”，副本集总有一个活跃(主primary)节点或多个备份节点(从seccondary)

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/3142f2f0be70488aafd81c7012841cfd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0-20240306164527418.awebp)

# 2.副本集的角色

副本集有两种类型，三种角色

**两种类型：** 
 Primary节点：数据操作的主要连接点，可读写 
 Secondary节点：数据冗余备份节点，可以读或者选举

**三种角色：** 
 主节点：副本集中负责处理客户端请求和读写数据的主要角色，主节点通过操作日志记录所有操作 副本集中只有一个主节点(Primary),如果当主节点不可用时，则会从副本节点中选举出新的主节点 
 副本节点：从主节点来获取操作日志记录的操作内容，然后对自己的数据副本执行这些操作，从而保证 副本节点的数据副本与主节点保持一致。副本集中可以有一个或者多个副本节点，当主节点宕机时， 副本集会根据副本节点的优先级进行选举，最终确定那个副本成为新的主节点；不可写可读。 
 仲裁节点：不会同步主节点的数据，也不会选举为主节点。它主要作用参与选举投票，使用的资源很小

副本集可以互相感应其他人的状态

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/35e9ea7e395c48738e02e8d8b8c5b380~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0-20240306164519464.awebp)

## 仲裁节点

Arbiter:不负责处理数据，只负责投票选举，不会选举自己

仲裁者将永远是仲裁者，而主要人员可能会退出并成为次要人员，而次要人员可能成为选举期间的主要人员。 如果你的副本+主节点的个数是偶数，建议加一个仲裁者，形成奇数，容易满足大多数的投票。 如果你的副本+主节点的个数是奇数，可以不加仲裁者。

副本集的架构最好是：一主一副本一仲裁

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/ab72b225b2654050b52217193b31a76d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

# 3.故障转换

第一种架构：一主二副 
 如果主坏掉了，这时候二副会自动进行选举，谁优秀就成为了主

第二种架构：一主一副一仲裁 
 如果主坏掉了，副会自动成为主，因为仲裁不会进行选举

三节点的副本集，任何一台故障，集群都会进行自动的切换，不影响的服务

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/9f755b1d6a1e4dcb84b7116f29ba39e3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/d1c149131f8b4c0389c8127eabd6a7c8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

# 4.部署Mongodb副本集

## 4.1.环境规则

| IP              | 成员角色  | 端口  |
| --------------- | --------- | ----- |
| 192.168.146.138 | primary   | 29017 |
| 192.168.146.138 | secondary | 29018 |
| 192.168.146.138 | Arbiter   | 29019 |

## 4.2.创建多实例目录

```kotlin
1.创建 
[root@mongodb-1 ~]# mkdir -p /data1/mongodb_cluster/mongodb_2901{7,8,9}/{conf,logs,pid,data} 
[root@mongodb-1 ~]# tree /data1/mongodb_cluster/ 
/data1/mongodb_cluster/ 
├── mongodb_29017 
│ ├── conf 
│ ├── logs 
│ └── pid │ 
├── data 
├── mongodb_29018 
│ ├── conf 
│ ├── logs 
│ └── pid 
│ ├── data 
└── mongodb_29019 
│ ├── conf 
│ ├── logs 
│ └── pid 
│ ├── data 

12 directories, 0 files
```

## 4.3.下载软件包

```kotlin
[root@mongodb-1 /data]# cd /data/soft/ 
[root@mongodb-1 /data/soft]# wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.14.tgz
```

## 4.4.安装mongodb

```bash
[root@mongodb-1 /data/soft]# tar xf mongodb-linux-x86_64-4.0.14.tgz -C /data1/mongodb_cluster/ 
[root@mongodb-1 /data/soft]# cd /data1/mongodb_cluster/ 
[root@mongodb-1 /data1/mongodb_cluster]# ln -s mongodb-linux-x86_64-4.0.14/ mongodb 
[root@mongodb-1 /data1/mongodb_cluster]# tree /data1/mongodb_cluster/ 
/data1/mongodb_cluster/ 
├── mongodb -> mongodb-linux-x86_64-4.0.14/ 
├── mongodb_29017 
│ ├── conf 
│ ├── logs 
│ ├── data 
│ └── pid 
├── mongodb_29018 
│ ├── conf 
│├── logs 
│ ├── data 
│ └── pid 
├── mongodb_29019 
│ ├── conf 
│ ├── logs 
│ ├── data 
│ └── pid 
└── mongodb-linux-x86_64-4.0.14 
├── bin
```

## 4.5.编辑mongodb配置文件

```yaml
[root@mongodb-1 /data1/mongodb_cluster]# cat >/data1/mongodb_cluster/mongodb_29017/conf/mongo_29017.conf <<EOF 
systemLog: 
  destination: file 
  logAppend: true 
  path: /data1/mongodb_cluster/mongodb_29017/logs/mongodb.log

storage: 
  journal: 
    enabled: true 
  dbPath: /data1/mongodb_cluster/mongodb_29017/data 
  directoryPerDB: true 
  wiredTiger: 
    engineConfig: 
      cacheSizeGB: 1 
      directoryForIndexes: true 
    collectionConfig: 
      blockCompressor: zlib 
    indexConfig: 
      prefixCompression: true 
processManagement: 
  fork: true 
  pidFilePath: /data1/mongodb_cluster/mongodb_29017/pid/mongod.pid 
  
net: 
  port: 29017 
  bindIp: 127.0.0.1,192.168.146.138 
  
replication: 
  oplogSizeMB: 1024 
  replSetName: dba01 
EOF 

[root@mongodb-1 /data1/mongodb_cluster]# cp mongodb_29017/conf/mongo_29017.conf mongodb_29018/conf/mongo_29018.conf 
[root@mongodb-1 /data1/mongodb_cluster]# cp mongodb_29017/conf/mongo_29017.conf mongodb_29019/conf/mongo_29019.conf 
[root@mongodb-1 /data1/mongodb_cluster]# sed -i 's/29017/29018/' mongodb_29018/conf/mongo_29018.conf 
[root@mongodb-1 /data1/mongodb_cluster]# sed -i 's/29017/29019/' mongodb_29019/conf/mongo_29019.conf 

解释说明 
oplogSizeMB: 1024 日志为1G 
replSetName: dba01 组名
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/467df9dd365f438a95b075684ecb6f4c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 4.6.优化启动用户警告

```bash
[root@mongodb-1 /data1/mongodb_cluster]# useradd mongo 
[root@mongodb-1 /data1/mongodb_cluster]# echo '123456' | passwd --stdin mongo 
更改用户 mongo 的密码 。 
passwd：所有的身份验证令牌已经成功更新。 

[root@mongodb-1 /data1/mongodb_cluster]# su - mongo 
上一次登录：二 8月 30 09:05:30 CST 2022pts/3 上 

[mongo@mongodb-1 ~]$ vim .bashrc export 
PATH=/data1/mongodb_cluster/mongodb/bin/:$PATH 

[mongo@mongodb-1 ~]$ source .bashrc
```

## 4.7.启动mongodb副本集

```bash
1.修改权限 
[root@mongodb-1 /data1/mongodb_cluster]# chown -R mongo:mongo /data1/mongodb_cluster/ 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29017/conf/mongo_29017.conf 
about to fork child process, waiting until server is ready for connections. 
forked process: 128405 
child process started successfully, parent exiting 

[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29018/conf/mongo_29018.conf 
about to fork child process, waiting until server is ready for connections. 
forked process: 128627 
child process started successfully, parent exiting 

[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29019/conf/mongo_29019.conf 
about to fork child process, waiting until server is ready for connections. 
forked process: 128787
child process started successfully, parent exiting 

==查看进程== 
[root@mongodb-1 /data1/mongodb_cluster]# ps -ef | grep mongodb 
root 128405 1 1 16:56 ? 00:00:01 ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29017/conf/mongo_29017.conf 
root 128627 1 1 16:56 ? 00:00:01 ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29018/conf/mongo_29018.conf 
root 128787 1 1 16:57 ? 00:00:01 ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29019/conf/mongo_29019.conf 

==查看端口号== 
[root@mongodb-1 /data1/mongodb_cluster]# netstat -anlp | grep 2901 
tcp 0 0 192.168.146.138:29017 0.0.0.0:* LISTEN 128405/./mongodb/bi 
tcp 0 0 127.0.0.1:29017 0.0.0.0:* LISTEN 128405/./mongodb/bi 
tcp 0 0 192.168.146.138:29018 0.0.0.0:* LISTEN 128627/./mongodb/bi 
tcp 0 0 127.0.0.1:29018 0.0.0.0:* LISTEN 128627/./mongodb/bi 
tcp 0 0 192.168.146.138:29019 0.0.0.0:* LISTEN 128787/./mongodb/bi 
tcp 0 0 127.0.0.1:29019 0.0.0.0:*
```

## 4.8.登录mongo

```bash
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29017
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29018 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29019
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/f5c1b5d275a74bd59b578437783bd8cc~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

# 5.mongo副本集初始化配置

## 5.1.初始化副本集

```css
> config = {
_id : "dba01",
members : [
{_id : 0, host : "mongodb-1:29017"},
{_id : 1, host : "mongodb-1:29018"},
{_id : 2, host : "mongodb-1:29019"},
] }
{
        "_id" : "dba01",
        "members" : [
                {
                        "_id" : 0,
                        "host" : "mongodb-1:29017"
                },
                {
                        "_id" : 1,
                        "host" : "mongodb-1:29018"
                },
                {
                        "_id" : 2,
                        "host" : "mongodb-1:29019"
                }
        ]
}
```

## 5.2.生效初始化副本集

```css
css
> rs.initiate(config)
{
        "ok" : 1,      //返回ok：1成功，返回ok：0失败
        "operationTime" : Timestamp(1663205888, 1),
        "$clusterTime" : {
                "clusterTime" : Timestamp(1663205888, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        }
}
```

## 5.3.查看副本集的状态

```bash
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29017
dba01:SECONDARY>
dba01:PRIMARY>

[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/binmongo mongodb-1:29018
>
dba01:SECONDARY>

[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29019
dba01:SECONDARY>
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/6a2c5613dbba4387ac202042b6b78b4d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 5.4.集群服务器状态命令

```css
查询集群服务器状态 
dba01:PRIMARY> rs.status()
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/d517be4f07b7471e8de1dff1e813f731~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

# 6.初始化副本集报错

```javascript
> rs.initiate(config)
{
        "ok" : 0,
        "errmsg" : "command replSetInitiate requires authentication",
        "code" : 13,
        "codeName" : "Unauthorized"
}

这个报错的原因是因为配置文件里面启用用户认证
security:
  authorization: enabled
注释掉，重新启动mongo即可  
bash
1.停掉 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29017/conf/mongo_29017.conf --shutdown 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29018/conf/mongo_29018.conf --shutdown 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29019/conf/mongo_29019.conf --shutdown 

2.开启 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29017/conf/mongo_29017.conf 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29018/conf/mongo_29018.conf 
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongod -f /data1/mongodb_cluster/mongodb_29019/conf/mongo_29019.conf
```

# 7.写入测试数据

## 7.1.向mongodb-1:29017插入数据

```bash
[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29017
db.test1.insertMany([
	{"desk":"wood","qty":30,"size":{"h":20,"w":40,"colour":"purple"},"status":"A"},
	{"desk":"stone","qty":58,"size":{"h":80,"w":80,"colour":"green"},"status":"C"},
	{"desk":"plastic","qty":73,"size":{"h":75,"w":60,"colour":"blue"},"status":"B"},
	{"desk":"glass","qty":98,"size":{"h":43,"w":50,"colour":"orange"},"status":"A"}
]);
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/4e4db5c24383496ab32265b56b017947~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 7.2.查看数据是否正常

```css
1.在primary节点上查看
dba01:PRIMARY> db
test
dba01:PRIMARY> show tables
test1
dba01:PRIMARY> db.test1.find();
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6b"), "desk" : "wood", "qty" : 30, "size" : { "h" : 20, "w" : 40, "colour" : "purple" }, "status" : "A" }
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6c"), "desk" : "stone", "qty" : 58, "size": { "h" : 80, "w" : 80, "colour" : "green" }, "status" : "C" }
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6d"), "desk" : "plastic", "qty" : 73, "size" : { "h" : 75, "w" : 60, "colour" : "blue" }, "status" : "B" }
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6e"), "desk" : "glass", "qty" : 98, "size": { "h" : 43, "w" : 50, "colour" : "orange" }, "status" : "A" }

2.在secondary节点上查看
dba01:SECONDARY> db
test
dba01:SECONDARY> show tables;
2022-09-15T13:44:16.460+0800 E QUERY    [js] Error: listCollections failed: {
        "operationTime" : Timestamp(1663220647, 1),
        "ok" : 0,
        "errmsg" : "not master and slaveOk=false",
        "code" : 13435,
        "codeName" : "NotMasterNoSlaveOk",
        "$clusterTime" : {
                "clusterTime" : Timestamp(1663220647, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        }
} :
_getErrorWithCode@src/mongo/shell/utils.js:25:13
DB.prototype._getCollectionInfosCommand@src/mongo/shell/db.js:943:1
DB.prototype.getCollectionInfos@src/mongo/shell/db.js:993:20
DB.prototype.getCollectionNames@src/mongo/shell/db.js:1031:16
shellHelper.show@src/mongo/shell/utils.js:869:9
shellHelper@src/mongo/shell/utils.js:766:15
@(shellhelp2):1:1
发现我们查看数据的时候报错

3.解决（临时生效）
dba01:SECONDARY> rs.slaveOk();
dba01:SECONDARY> show tables;
test1
dba01:SECONDARY> db.test1.find();
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/c8d3fb8493e34042926710f44101bf12~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/bfa0ffb6e6154a03bfd2468ca1921cee~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

```ini
4.长期生效
[root@mongodb-1 ~]# ll .mongorc.js
-rw------- 1 root root 0 8月  26 16:38 .mongorc.js
[root@mongodb-1 ~]# echo "rs.slaveOk();" > .mongorc.js

[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29018
dba01:SECONDARY> db.test1.find();
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/d10dcdbd3bca4133a7a87f2ddecb4d32~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 7.3.删除数据

```css
dba01:PRIMARY> db.test1.deleteOne({"desk" : "wood"})
{ "acknowledged" : true, "deletedCount" : 1 }
dba01:PRIMARY> db.test1.find();
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6c"), "desk" : "stone", "qty" : 58, "size" : { "h" : 80, "w" : 80, "colour" : "green" }, "status" : "C" }
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6d"), "desk" : "plastic", "qty" : 73, "size" : { "h" : 75, "w" : 60, "colour" : "blue" }, "status" : "B" }
{ "_id" : ObjectId("6322bb1ef6c8bbebaffe6a6e"), "desk" : "glass", "qty" : 98, "size" : { "h" : 43, "w" : 50, "colour" : "orange" }, "status" : "A" }


[root@mongodb-1 /data1/mongodb_cluster]# ./mongodb/bin/mongo mongodb-1:29018
dba01:SECONDARY> db.test1.find();
```

![图片.png](https://cos.vlinux.cn/www-vlinux-cn-blog-img/063d070aa5db4690afbeac9c28fee0b3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)



