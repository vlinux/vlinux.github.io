---
title: Redis-5.x知识体系梳理
categories: Redis
tags: [Redis5.*]
date: 2021-01-01 13:10:00
---
# Redis-5.x

# 第1章 关系型与非关系型

```
CODE
关系型： mysql oracle
非关系型：redis mongo ES 
```

# 第2章 Redis重要特性

```
SWIFT
1.速度快
  c语言写的
  代码优雅
  单线程架构 
2.支持多种数据结构
  字符串，哈希，列表，集合，有序集合，地理位置
3.丰富的功能
  天然计数器
  健过期功能
  消息队列
4.支持客户端语言多
  php,java,python
5.数据持久化
  所有的数据都运行在内存中
  支持2种格式持久化数据AOF RDB AOF&RDB
6.自带多种高可用架构
  主从
  哨兵
  集群
```

# 第3章 redis应用场景

```
CODE
1.缓存-键过期时间
  把session会话存在redis,过期删除
  缓存用户信息，缓存Mysql部分数据，用户先访问redis，redis没有再访问mysql，然后回写给redis
  商城优惠卷过期时间
2.排行榜-列表&有序集合
  热度/点击数排行榜
  直播间礼物积分排行
3.计数器-天然支持计数器
  帖子浏览数
  视频播放数
  评论数
  点赞/踩
4.社交网络-集合
  粉丝
  共同好友 
  兴趣爱好
  标签
5.消息队列-发布订阅
  配合ELK缓存收集来的日志
```

# 第4章 Redis安装部署

## 1.redis官网

```
CPP
https://redis.io/
```

## 2.版本选择

```
CSS
2.x     very old
3.x     redis-cluster 
4.x     混合持久化
5.x     新增加了流处理类型 最新稳定版 
```

## 3.规划目录

```
KOTLIN
/data/soft  下载目录  
/opt/redis_6379/{conf,logs,pid} 安装目录,日志目录,pid目录,配置目录
/data/redis_6379/  数据目录
```

## 4.安装命令

```
GO
mkdir /data/soft -p
cd /data/soft 
wget http://download.redis.io/releases/redis-5.0.7.tar.gz
tar xf redis-5.0.7.tar.gz -C /opt/
ln -s /opt/redis-5.0.7 /opt/redis
cd /opt/redis
make 
make install 
```

## 5.配置文件

```
BASH
mkdir -p /opt/redis_6379/{conf,pid,logs}
mkdir -p /data/redis_6379
cat >/opt/redis_6379/conf/redis_6379.conf<< EOF
daemonize yes 
bind 127.0.0.1 10.0.0.51
port 6379
pidfile /opt/redis_6379/pid/redis_6379.pid
logfile /opt/redis_6379/logs/redis_6379.log
EOF
```

## 6.启动命令

```
CODE
redis-server /opt/redis_6379/conf/redis_6379.conf
```

## 7.检查

```
RUBY
ps -ef|grep redis
netstat -lntup|grep 6379
```

## 8.连接redis终端

```
CSS
[root@db01 ~]# redis-cli
127.0.0.1:6379> 
127.0.0.1:6379> set k1 v1 
OK
127.0.0.1:6379> get k1
"v1"
127.0.0.1:6379>
```

## 9.关闭命令

```
BASH
kill 
pkill 
redis-cli
>SHUTDOWN
- redis-cli shutdown
```

## 10.system启动配置

```
CSHARP
groupadd -g 1000 redis
useradd -u 1000 -g 1000 -M -s /sbin/nologin
chown -R redis:redis /data/redis*
chown -R redis:redis /opt/redis*
cat >/usr/lib/systemd/system/redis.service<<EOF
[Unit]
Description=Redis persistent key-value database
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/redis /opt/redis_6379/conf/redis_6379.conf --supervised systemd
ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 6379 shutdown
Type=notify
User=redis
Group=redis
RuntimeDirectory=redis
RuntimeDirectoryMode=0755

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload 
systemctl start redis
```

# 第5章 Redis全局命令

全局命令是指对所有数据类型都通用的命令

## 0.redis数据格式

```
CSHARP
key:value
键:值
```

## 1.写入测试key

```
BASH
set k1 v1
set k2 v2 
set k3 v3
```

## 2.查看所有的key

！！！危险命令！！！此操作未满30岁禁止请在家人的看管下执行

```
CODE
keys *
```

## 3.查看有多少个key

```
CODE
DBSIZE
```

## 4.查看某个Key是否存在

```
CODE
EXISTS k1 

状态码：
0 表示这个key不存在 
1 表示这个key存在
N 表示存在N个key
```

## 5.删除key

```
CODE
DEL k1 
DEL k1 k2 

状态码：
0   表示这个key不存在
1   表示这个key存在，并且删除成功了
N   表示N个key存在，并且删除成功了N个key
```

## 6.键过期

设置过期时间

```
CODE
EXPIRE k1 10

状态码：
0   这个key不存在
1   这个key存在，并且设置过期时间成功
```

查看keys是否过期

```
CODE
TTL k1 

状态码：
-1  这个key存在,并且没有设定存活周期，永不过期
-2  这个key不存在
N   这个key存在，并且在N秒后过期
```

取消过期时间：

```
BASH
第一种方法：
PERSIST k1

第二种方法：
set k1 v1

结论：
过期后的key会被直接删除
```

# 第6章 字符串操作

## 1.设置一个key

```
BASH
set k1 v1
```

## 2.查看一个key

```
CSHARP
get k1
```

## 3.设置多个key

```
CODE
MSET k1 v1 k2 v2 k3 v3 k4 v4
```

## 4.查看多个key

```
CODE
MGET k1 k2 k3 k4
```

## 5.天然计数器

```
CODE
加1:
SET k1 1
INCR k1
GET k1

加N：
INCRBY k1 100

减1:
INCRBY k1 -1

减N:
INCRBY k1 -100
```

# 第7章 列表操作

## 1.插入列表

```
CODE
LPUSH: 从列表左侧插入数据
RPUSH: 从列表右侧插入数据
```

## 2.查看列表长度

```
CODE
LLEN list1
```

## 3.查看列表内容

```
CODE
LRANGE list1 0 -1
```

## 4.删除列表元素

```
CODE
LPOP: 从列表左边删除一个元素
RPOP: 从列表右边删除一个元素

LPOP list1
RPOP list1 
```

## 5.删除整个列表

```
CODE
DEL list1
```

# 第8章 hash操作

## 1.mysql数据如何缓存到redis

```
CSS
mysql存储格式：
user
id name   job  age
1  bobo   IT   28
2  json   py   25
3  hao    bug  26
  
hash类型存储格式：
key    field value field   value        
user:1   name  bobo  job     IT     age 28
user:2   name  json  job     py     age 25
user:3   name  hao   job     bug    age 26
```

## 2.创建一个Hash数据

```
CSS
HMSET user:1 name bobo job IT age 28
HMSET user:2 name json job py age 29
HMSET user:3 name hao job bug age 19 
```

## 3.查看hash里指定的值

```
CSHARP
select name from user where id =1 ;
  
HMGET user:1 name  
HMGET user:1 name job age
```

## 4.查看Hash里所有的值

```
CSHARP
select * from user where id =1 ;

HGETALL user:1
```

# 第9章 集合操作 set

## 1.创建集合

```
CODE
SADD set1 1 2 3
SADD set2 1 3 5 7 
```

## 2.查看集合成员

```
CODE
SMEMBERS set1
SMEMBERS set2
```

## 3.查看集合的交集

```
CSS
127.0.0.1:6379> SINTER set1 set2
1) "1"
2) "3"
```

## 4.查看集合的并集

```
RUBY
127.0.0.1:6379> SUNION set1 set2
1) "1"
2) "2"
3) "3"
4) "5"
5) "7"
```

## 5.查看集合的差集

```
CSS
127.0.0.1:6379> SDIFF set1 set2
1) "2"
  
127.0.0.1:6379> SDIFF set2 set1
1) "5"
2) "7"
```

## 6.删除一个成员

```
CODE
SREM set1 1
```

## 6.注意

```
CODE
集合不允许出现重复的值，自动去重
```

# 第10章 有序集合操作

## 1.添加成员

```
CODE
ZADD SZ3 100 json
ZADD SZ3 90 bobo
ZADD SZ3 99 xiaocancan
ZADD SZ3 98 bughao
```

## 2.计算成员个数

```
CODE
ZCARD SZ3
```

## 3.计算某个成员分数

```
CODE
ZSCORE SZ3 json
```

## 4.按照降序查看成员名次：

```
CODE
ZRANK SZ3 json
ZRANK SZ3 bobo
```

## 5.按照升序查看成员名次：

```
CODE
ZREVRANK SZ3 json
ZREVRANK SZ3 bobo
```

## 6.删除成员

```
CODE
ZREM SZ3 json
```

## 7.增加成员分数

```
CODE
ZINCRBY SZ3 2 xiaocancan
ZSCORE SZ3 xiaocancan
```

## 8.返回指定排名范围的成员

```
CODE
ZRANGE SZ3 0 3 
ZRANGE SZ3 0 3 WITHSCORES
```

## 9.返回指定分数范围的成员

```
CODE
ZRANGEBYSCORE SZ3 95 100
ZRANGEBYSCORE SZ3 95 100  WITHSCORES
```

## 10.返回指定分数范围的成员的个数

```
CODE
ZCOUNT SZ3 90 110
```

# 第11章 持久化

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-4bec444f44920615.png#mirages-width=382&mirages-height=352&mirages-cdn-type=5)

RDB流程图

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-e70993005208cde6.png#mirages-width=220&mirages-height=310&mirages-cdn-type=5)

AOF流程图

## 1.RDB和AOF介绍

```
CODE
RDB：类似于快照的形式，当前内存里的状态持久化到硬盘里
优点：压缩格式/恢复速度快
缺点：不是实时的，可能会丢失数据,操作比较重
    
AOF：类似于mysql的binlog，可以设置为每秒/每次操作以追加的形式持久化
优点：安全，最多损失1秒的数据，可读
缺点：文件比较大，恢复速度慢
```

## 2.配置RDB

```
KOTLIN
save 900 1
save 300 10
save 60 10000
dbfilename redis.rdb
dir /data/redis_6379/
```

## 3.RDB结论

```
BASH
1.没有配置save参数时，shutdown不会持久化保存
2.没有配置save参数时，可以手动执行bgsave触发持久化
3.在配置了save参数后，shutdown,kill,pkill都会自动触发bgsave
4.恢复的时候，rdb文件名要和配置文件里写的一样。
5.RDB高版本兼容低版本，低版本不兼容高版本
```

## 4.AOF配置

```
BASH
appendonly yes
appendfilename "redis.aof"
appendfsync everysec
```

## 5.AOF重写机制

```
BASH
执行的命令   aof记录        redis的数据       
set k1    v1    set k1   k1                 
set k2    v2    set k2   k1 k2          
set k3    v3    set k3   k1 k2 k3       
del k1      del k1       k2 k3
del k2      del k2       k3 
实际有意义的只有一条记录：
set k3
```

## 6.aof和rdb实验

实验背景：

```
CODE
aof和rdb同时存在的时候，redis重启会读取哪一个数据？
```

实验步骤：

```
KOTLIN
set k1 v1
set k2 v2 
bgsave 
RDB k1 k2
mv redis.rdb /opt/  
    
flushall
set k3 v3
set k4 v4
AOF k3 k4
mv redis.aof /opt/
  
pkill redis
rm -rf /data/redis_6379/*
mv /opt/redis.rdb .
mv /opt/redis.aof .
  
redis-server /opt/redis_6379/conf/redis.conf
redis-cli 
keys * 
```

结论：

```
CODE
当aof和rdb同时存在时，重启redis会优先读取aof的内容
```

## 7.如何选择是rdb还是aof

```
CPP
https://redis.io/topics/persistence
1.开启混合模式
2.开启aof
3.不开启rdb
4.rdb采用定时任务的方式定时备份
```

## 8.aof文件故障模拟实验结论

```
CSS
1.aof文件损坏之后，使用修复工具，一刀流，从aof文件出错的地方开始到最后全部删掉
2.任何操作之前，先备份数据
3.aof备份一般情况最多损失1秒的数据
```

## 9.实验：如果设置了过期时间，恢复数据会如何处理

```
CSS
1.aof文件会记录下过期的时间
2.恢复的时候会去对比记录的过期时间和当前时间，如果超过了，就删除key
3.key的过期时间不受备份恢复影响
```

# 第12章 redis用户认证

## 1.写入配置文件

```
CODE
requirepass cookzhang
```

## 2.使用密码登陆

第一种：

```
CSS
[root@db01 ~]# redis-cli 
127.0.0.1:6379> AUTH cookzhang
OK
127.0.0.1:6379> set k1 v1
OK
  
```

第二种：

```
CSHARP
redis-cli -a cookz get k1
```

## 3.为什么redis的密码认证这么简单？

```
CSS
1.redis一般都部署在内网环境，默认是比较安全的环境
2.有同学担心密码写在配置文件里，开发不允许登陆到Linux服务器上，但是可以连接到redis,设个密码安全些
```

# 第13章 禁用或重命名危险命令

## 1.禁用危险命令

```
BASH
rename-command CONFIG ""
rename-command KEYS ""
rename-command SHUTDOWN ""
rename-command FLUSHALL ""
rename-command DEL ""
rename-command FLUSHDB ""
```

## 2.来自json的灵魂拷问：shutdown禁用了 让后用kill?

```
BASH
rename-command CONFIG ""
rename-command KEYS ""
rename-command SHUTDOWN "qq526195417"
rename-command FLUSHALL ""
rename-command DEL "byebye"
rename-command FLUSHDB ""
```

# 第14章 Redis主从复制

## 1.快速部署第二台服务器

```
RUBY
rsync -avz 10.0.0.51:/opt/* /opt/*
mkdir /data/redis_6379/ -p
cd /opt/redis 
make install 
sed -i 's#51#52#g' /opt/redis_6379/conf/redis_6379.conf
redis-server /opt/redis_6379/conf/redis_6379.conf
```

## 2.db01插入测试命令

```
BASH
for i in {1..1000};do redis-cli -h 10.0.0.51 set ${i} ${i};done
```

## 3.配置主从复制

方法1:临时生效

```
CSS
redis-cli -h 10.0.0.52 slaveof 10.0.0.51 6379 
```

方法2:写进配置文件

```
CSS
slaveof 10.0.0.51 6379
```

## 4.主从复制的流程

1.简单流程：

```
CODE
1.从节点发送同步请求到主节点
2.主节点接收到从节点的请求之后,做了如下操作
  - 立即执行bgsave将当前内存里的数据持久化到磁盘上
  - 持久化完成之后,将rdb文件发送给从节点
3.从节点从主节点接收到rdb文件之后,做了如下操作
  - 清空自己的数据
  - 载入从主节点接收的rdb文件到自己的内存里
4.后面的操作就是和主节点实时的了
```

## 5.取消复制

```
CODE
SLAVEOF no one
```

## 6.主从复制注意

```
RUBY
1.从节点只读不可写
2.从节点不会自动故障转移,它会一直同步主节点
10.0.0.52:6379> set k1 v1
(error) READONLY You can't write against a read only slave.
3.主从复制故障转移需要人工介入
  - 修改代码指向REDIS的IP地址
  - 从节点需要执行SLAVEOF no one
4.从节点会清空自己原有的数据,如果同步的对象写错了,就会导致数据丢失
5.从库和主库后续的同步依靠的是redis的SYNC协议，而不是RDB文件，RDB文件只是第一次建立同步时使用。
6.从库也可以正常的持久化文件
```

## 7.安全的操作

无论是同步,无论是主节点还是从节点,请先备份一下数据

# 第15章 Redis哨兵

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-c5cf045607671b40.png#mirages-width=1200&mirages-height=605&mirages-cdn-type=5)

## 1.哨兵的作用

```
CODE
1.解决了主从复制故障需要人为干预的问题
2.提供了自动的高可用解决方案
```

## 2.目录和端口规划

```
CODE
redis节点： 6379
哨兵节点：    26379
```

## 3.部署3台redis单节点

### db01操作：

```
BASH
pkill redis
cat >/opt/redis_6379/conf/redis_6379.conf <<EOF   
daemonize yes
bind 127.0.0.1 10.0.0.51
port 6379
pidfile "/opt/redis_6379/pid/redis_6379.pid"
logfile "/opt/redis_6379/logs/redis_6379.log"
dbfilename "redis.rdb"
dir "/data/redis_6379"
appendonly yes
appendfilename "redis.aof"
appendfsync everysec
EOF
systemctl start redis
redis-cli
```

### db02和db03的操作：

```
RUBY
pkill redis 
rm -rf /opt/redis*
rsync -avz 10.0.0.51:/usr/local/bin/redis-*  /usr/local/bin
rsync -avz 10.0.0.51:/usr/lib/systemd/system/redis.service /usr/lib/systemd/system/
mkdir /opt/redis_6379/{conf,logs,pid} -p
mkdir /data/redis_6379 -p
cat >/opt/redis_6379/conf/redis_6379.conf <<EOF   
daemonize yes
bind 127.0.0.1 $(ifconfig eth0|awk 'NR==2{print $2}')
port 6379
pidfile "/opt/redis_6379/pid/redis_6379.pid"
logfile "/opt/redis_6379/logs/redis_6379.log"
dbfilename "redis.rdb"
dir "/data/redis_6379"
appendonly yes
appendfilename "redis.aof"
appendfsync everysec
EOF
useradd redis -M -s /sbin/nologin
chown -R redis:redis /opt/redis*
chown -R redis:redis /data/redis*
systemctl daemon-reload 
systemctl start redis 
redis-cli
```

## 4.配置主从复制

```
CSS
redis-cli -h 10.0.0.52 slaveof 10.0.0.51 6379
redis-cli -h 10.0.0.53 slaveof 10.0.0.51 6379
redis-cli -h 10.0.0.51 info Replication
```

## 5.部署哨兵节点-3台机器都操作

```
KOTLIN
mkdir -p /data/redis_26379
mkdir -p /opt/redis_26379/{conf,pid,logs}
cat >/opt/redis_26379/conf/redis_26379.conf << EOF
bind $(ifconfig eth0|awk 'NR==2{print $2}')
port 26379
daemonize yes
logfile /opt/redis_26379/logs/redis_26379.log
dir /data/redis_26379
sentinel monitor myredis 10.0.0.51 6379 2
sentinel down-after-milliseconds myredis 3000
sentinel parallel-syncs myredis 1
sentinel failover-timeout myredis 18000
EOF
chown -R redis:redis  /data/redis*
chown -R redis:redis  /opt/redis*
```

参数解释：

```
BASH
sentinel monitor mymaster 10.0.0.51 6379 2
#mymaster 主节点别名 主节点 ip 和端口， 判断主节点失败， 两个 sentinel 节点同意
sentinel down-after-milliseconds mymaster 3000
#选项指定了 Sentinel 认为服务器已经断线所需的毫秒数。
sentinel parallel-syncs mymaster 1
#向新的主节点发起复制操作的从节点个数， 1 轮询发起复制
sentinel failover-timeout mymaster 180000
#故障转移超时时间
```

## 6.编写哨兵system配置文件-3台机器都操作

```
CSHARP
cat >/usr/lib/systemd/system/redis-sentinel.service<<EOF
[Unit]
Description=Redis persistent key-value database
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/redis-sentinel /opt/redis_26379/conf/redis_26379.conf --supervised systemd
ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 26379 shutdown
Type=notify
User=redis
Group=redis
RuntimeDirectory=redis
RuntimeDirectoryMode=0755

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload 
```

## 7.启动哨兵并检查

```
CODE
systemctl start redis-sentinel 
```

## 8.验证主节点

```
CSS
redis-cli -h 10.0.0.51 -p 26379 Sentinel get-master-addr-by-name myredis
redis-cli -h 10.0.0.52 -p 26379 Sentinel get-master-addr-by-name myredis
redis-cli -h 10.0.0.53 -p 26379 Sentinel get-master-addr-by-name myredis
```

## 9.模拟故障转移

关闭主节点服务上的所有redis进程
观察其他2个节点会不会发生选举
查看配置文件里会不会自动更新
查看新的主节点能不能写入
查看从节点能否正常同步

## 10.模拟故障修复上线

启动单节点
启动哨兵

## 11.来自json的灵魂发问：能够给redis 节点加权 来确定优先备选主节点嘛?

流程说明：
设置其他节点的权重为0
手动发起重新选举
观察所有节点消息是否同步
观察切换结果是否符合预期

命令解释：

```
CSS
查询命令:CONFIG GET slave-priority
设置命令:CONFIG SET slave-priority 0
主动切换:sentinel failover myredis
```

操作命令：

```
CSS
redis-cli -h 10.0.0.52 -p 6379 CONFIG SET slave-priority 0
redis-cli -h 10.0.0.53 -p 6379 CONFIG SET slave-priority 0
redis-cli -h 10.0.0.51 -p 26379 sentinel failover myredis
```

验证选举结果：

```
CSS
redis-cli -h 10.0.0.51 -p 26379 Sentinel get-master-addr-by-name myredis
```

# 第16章 手动部署Redis集群

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-f6153b9ec44340b7.png#mirages-width=1200&mirages-height=668&mirages-cdn-type=5)

集群架构图1

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-4c60e0aa042e4599.png#mirages-width=1200&mirages-height=749&mirages-cdn-type=5)

集群架构图2

## 1.烧饼的不足

资源利用率不高
主库压力大
连接过程繁琐

## 2.集群重要概念

```
BASH
redis集群，无论有几个节点，一共只有16384个槽
所有的槽位都必须分配，哪怕有1个槽位不正常，整个集群都不能用
每个节点的槽的顺序不重要，重点是数量
hash算法足够随机，足够平均
每个槽被分配到数据的概率是相当的
集群的高可用依赖于主从复制
集群拥有自己的配置文件，动态更新，不要手欠修改
集群通讯会使用基础端口号+10000的端口，这个是自动创建的，不是配置文件配置的
集群槽位分配比例允许误差在%2之间
```

## 3.目录规划

```
CODE
主节点  6380
从节点  6381
```

## 4.db01的操作

```
JSX
ssh-keygen
ssh-copy-id 10.0.0.52
ssh-copy-id 10.0.0.53
pkill redis
mkdir -p /opt/redis_{6380,6381}/{conf,logs,pid}
mkdir -p /data/redis_{6380,6381}
cat >/opt/redis_6380/conf/redis_6380.conf<<EOF
bind 10.0.0.51
port 6380
daemonize yes
pidfile "/opt/redis_6380/pid/redis_6380.pid"
logfile "/opt/redis_6380/logs/redis_6380.log"
dbfilename "redis_6380.rdb"
dir "/data/redis_6380/"
appendonly yes
appendfilename "redis.aof"
appendfsync everysec
cluster-enabled yes
cluster-config-file nodes_6380.conf
cluster-node-timeout 15000
EOF
cd /opt/
cp redis_6380/conf/redis_6380.conf redis_6381/conf/redis_6381.conf
sed -i 's#6380#6381#g' redis_6381/conf/redis_6381.conf 
chown -R redis:redis /opt/redis_*
chown -R redis:redis /data/redis_*
cat >/usr/lib/systemd/system/redis-master.service<<EOF
[Unit]
Description=Redis persistent key-value database
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
ExecStart=/usr/local/bin/redis-server /opt/redis_6380/conf/redis_6380.conf --supervised systemd
ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 6380 shutdown
Type=notify
User=redis
Group=redis
RuntimeDirectory=redis
RuntimeDirectoryMode=0755

[Install]
WantedBy=multi-user.target
EOF
cd /usr/lib/systemd/system/
cp redis-master.service redis-slave.service
sed -i 's#6380#6381#g' redis-slave.service
systemctl daemon-reload 
systemctl start redis-master
systemctl start redis-slave
ps -ef|grep redis
rsync -avz /opt/redis_638* 10.0.0.52:/opt/
rsync -avz /opt/redis_638* 10.0.0.53:/opt/
rsync -avz /usr/lib/systemd/system/redis-*.service 10.0.0.52:/usr/lib/systemd/system/redis-master.service
rsync -avz /usr/lib/systemd/system/redis-*.service 10.0.0.53:/usr/lib/systemd/system/redis-master.service
```

## 5.db02的操作

```
BASH
pkill redis
find /opt/redis_638* -type f -name "*.conf"|xargs sed -i "/bind/s#51#52#g"
cd /usr/lib/systemd/system/
sed -i 's#51#52#g' redis-*.service 
mkdir –p /data/redis_{6380,6381}
chown -R redis:redis /opt/redis_*
chown -R redis:redis /data/redis_*
systemctl daemon-reload 
systemctl start redis-master
systemctl start redis-slave
ps -ef|grep redis
```

## 6.db03的操作

```
BASH
pkill redis
find /opt/redis_638* -type f -name "*.conf"|xargs sed -i "/bind/s#51#53#g"
cd /usr/lib/systemd/system/
sed -i 's#51#53#g' redis-*.service 
mkdir –p /data/redis_{6380,6381}
chown -R redis:redis /opt/redis_*
chown -R redis:redis /data/redis_*
systemctl daemon-reload 
systemctl start redis-master
systemctl start redis-slave
ps -ef|grep redis
```

## 7.集群手动发现节点

```
CSS
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.51 6381
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6381
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6381
redis-cli -h db01 -p 6380 CLUSTER NODES  
```

## 8.集群手动分配槽位

### 1.槽位规划

```
CSS
db01:6380 5461  0-5460
db02:6380 5461  5461-10921
db03:6380 5462  10922-16383
```

### 2.分配槽位

```
OBJECTIVEC
redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}
redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}
redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}
```

### 3.查看集群状态

```
OBJECTIVEC
redis-cli -h db01 -p 6380 CLUSTER NODES
redis-cli -h db01 -p 6380 CLUSTER INFO
```

## 9.手动部署复制关系

### 0.先获取集群节点信息

```
OBJECTIVEC
redis-cli -h db01 -p 6380 CLUSTER NODES
```

### 1.先删除所有6381的内容和不需要内容

```
CSS
6380的ID 10.0.0.51
6380的ID 10.0.0.53
6380的ID 10.0.0.52
```

### 2.画图

### 3.确定复制关系

```
OBJECTIVEC
redis-cli -h db01 -p 6381 CLUSTER REPLICATE 52的6380的ID
redis-cli -h db02 -p 6381 CLUSTER REPLICATE 53的6380的ID
redis-cli -h db03 -p 6381 CLUSTER REPLICATE 51的6380的ID
```

### 4.检查复制关系

```
OBJECTIVEC
redis-cli -h db01 -p 6380 CLUSTER NODES
```

## 10.集群插入数据

### 1.尝试插入一条数据发现报错

```
CSS
10.0.0.51:6380> set k1 v1
(error) MOVED 12706 10.0.0.53:6380
```

### 2.目前的现象

在db01的6380节点插入数据提示报错
报错内容提示应该移动到db03的6380上
在db03的6380上执行相同的插入命令可以插入成功
在db01的6380节点插入数据有时候可以,有时候不行
使用-c参数后,可以正常插入命令,并且节点切换到了提示的对应节点上

### 3.问题原因

因为集群模式有ASK路由规则,加入-c参数后,会自动跳转到目标节点处理
并且最后由目标节点返回信息

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-328242f763d20b0b.png#mirages-width=1886&mirages-height=952&mirages-cdn-type=5)

## 11.验证集群是否足够足迹足够平均

### 0.写入测试数据

```
BASH
for i in {1..10000};do redis-cli -c -h db01 -p 6380 set k_${i} v_${i};echo ${i};done
```

### 1.验证足够平均:

```
CODE
DBSIZE
```

### 2.验证足够随机：

```
SWIFT
redis-cli -c -h db03 -p 6380 keys \* > keys_all.txt
cat keys_all.txt |awk -F "_" '{print $2}'|sort -rn 
```

### 3.允许节点的key在2%误差的依据来源：

```
CSS
[root@db01 /opt/redis/src]# redis-cli --cluster rebalance 10.0.0.51 6380
>>> Performing Cluster Check (using node 10.0.0.51:6380)
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
*** No rebalancing needed! All nodes are within the 2.00% threshold.
```

### 4.检查集群健康状态：

```
RUBY
[root@db01 /opt/redis/src]# redis-cli --cluster info 10.0.0.51 6380
10.0.0.51:6380 (ccaa5dcb...) -> 3343 keys | 5461 slots | 1 slaves.
10.0.0.53:6380 (a69e46ea...) -> 3343 keys | 5462 slots | 1 slaves.
10.0.0.52:6380 (b2719c41...) -> 3314 keys | 5461 slots | 1 slaves.
[OK] 10000 keys in 3 masters.
0.61 keys per slot on average.
```

# 第17章 实战-槽位分配错误如何调整

## 1.故障背景

某日某豪接到任务，需要部署redis集群结果不小心无脑复制粘贴，把所有的槽都分配给了1个节点，还没发现，然后就交付使用了，过了1天才发现问题。

而此时，已经有不少数据写入了，如何在不丢失数据的情况下解决这个问题？

## 2.前提

数据不能丢，最好不中断业务

## 3.实验现象

```
RUBY
[root@db01 ~]# redis-cli --cluster info 10.0.0.51 6380
10.0.0.51:6380 (ccaa5dcb...) -> 1000 keys | 16384 slots | 3 slaves.
10.0.0.53:6380 (a69e46ea...) -> 0 keys | 0 slots | 0 slaves.
10.0.0.52:6380 (b2719c41...) -> 0 keys | 0 slots | 0 slaves.
[OK] 1000 keys in 3 masters.
0.06 keys per slot on average.
```

## 解决思路1：备份数据，重做集群，导入数据

```
OBJECTIVEC
来自json的灵魂发问：
redis.cof的数据  集群重做后 aof文件里面的数据能被hash嘛?

备份数据：
redis-cli -c -h db01 -p 6380
db01:6380> BGREWRITEAOF
cp redis.aof redis.aof-1000.bak

重做集群：
redis-cli -h db01 -p 6380 FLUSHALL
redis-cli -h db02 -p 6380 FLUSHALL
redis-cli -h db03 -p 6380 FLUSHALL

redis-cli -h db01 -p 6380 CLUSTER RESET
redis-cli -h db02 -p 6380 CLUSTER RESET
redis-cli -h db03 -p 6380 CLUSTER RESET

redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380
redis-cli -h db01 -p 6380 CLUSTER NODES  

redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}
redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}
redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}

redis-cli --cluster info 10.0.0.51 6380

实验结论：
重启后所有的数据还是在db01上。
db01重启后数据虽然可以写入，但是访问的时候还是按照正常的hash规则去分配的，所以db01的数据实际上是没用的。
所以这样的方法是不可行的。

相关日志：
16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5812, but the slot is assigned to another node. Setting it to importing state.
16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5821, but the slot is assigned to another node. Setting it to importing state.
16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5842, but the slot is assigned to another node. Setting it to importing state.
```

## 解决思路2:获得所有key的名称，导出再导入

```
BASH
0.重新制作一个测试集群，槽位分布和线上出错的一样
1.将线上环境里的aof导出来
2.恢复到测试的集群里
3.收集所有的key
redis-cli -c -h db01 -p 6380 keys \* > keys_all.txt
4.编写脚本遍历所有的key获取值
cat >get_key.sh<<EOF 
#!/bin/bash
for key in $(cat keys_all.txt)
do
  value=$(redis-cli -c -h 10.0.0.51 -p 6380 get ${key})
  echo redis-cli -c -h 10.0.0.51 -p 6380 set ${key} ${value} >> backup_all_key.txt
done
EOF

5.按照正常槽位分配去重新初始化集群
redis-cli -h db01 -p 6380 FLUSHALL
redis-cli -h db02 -p 6380 FLUSHALL
redis-cli -h db03 -p 6380 FLUSHALL
redis-cli -h db01 -p 6380 CLUSTER RESET
redis-cli -h db02 -p 6380 CLUSTER RESET
redis-cli -h db03 -p 6380 CLUSTER RESET
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380
redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380
redis-cli -h db01 -p 6380 CLUSTER NODES  
redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}
redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}
redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}
redis-cli --cluster info 10.0.0.51 6380

6.执行导入脚本
bash backup_all_key.txt

7.检查是否导入成功
redis-cli --cluster info 10.0.0.51 6380

8.测试环境没问题之后再去生产环境操作
```

## 解决思路3: 流水线 pipline

```
CSS
前提条件：
1.了解aof格式
2.了解新版本redis默认是开启混合模式的
3.需要修改为普通的aof格式并重启
4.恢复时使用-c参数无效，需要在每一个节点都执行

命令：
redis-cli -c -h 10.0.0.51 -p 6380 --pipe < redis.aof
redis-cli -c -h 10.0.0.52 -p 6380 --pipe < redis.aof
redis-cli -c -h 10.0.0.53 -p 6380 --pipe < redis.aof
```

## 解决思路4: 使用redis-cli工具重新分配槽位

```
BASH
重新分配槽位
redis-cli --cluster reshard 10.0.0.51:6380

第一次交互：输入迁出的槽的数量
How many slots do you want to move (from 1 to 16384)? 5461

第二次交互：输入接受的ID
What is the receiving node ID? db02的6380的ID

第三次交互：输入发送者的ID
Please enter all the source node IDs.
  Type 'all' to use all the nodes as source nodes for the hash slots.
  Type 'done' once you entered all the source nodes IDs.
Source node #1: db01的6390的ID
Source node #2: done

第四次交互：YES!

重复上面的操作，知道所有的节点槽位都分配正确
```

## 解决思路5:直接使用工具在线导入

```
CSS
redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379 
```

# 第18章 使用工具自动部署redis集群

## 1.恢复集群初始化

```
OBJECTIVEC
redis-cli -h db01 -p 6380 FLUSHALL
redis-cli -h db02 -p 6380 FLUSHALL
redis-cli -h db03 -p 6380 FLUSHALL
redis-cli -h db01 -p 6381 FLUSHALL
redis-cli -h db02 -p 6381 FLUSHALL
redis-cli -h db03 -p 6381 FLUSHALL
redis-cli -h db01 -p 6380 CLUSTER RESET
redis-cli -h db02 -p 6380 CLUSTER RESET
redis-cli -h db03 -p 6380 CLUSTER RESET
redis-cli -h db01 -p 6381 CLUSTER RESET
redis-cli -h db02 -p 6381 CLUSTER RESET
redis-cli -h db03 -p 6381 CLUSTER RESET
redis-cli -h db01 -p 6380 CLUSTER NODES  
```

## 2.使用工具初始化

```
CSS
redis-cli --cluster create 10.0.0.51:6380 10.0.0.52:6380 10.0.0.53:6380 10.0.0.51:6381 10.0.0.52:6381 10.0.0.53:6381 --cluster-replicas 1
```

## 3.检查集群

```
CSS
redis-cli --cluster info 10.0.0.51 6380
redis-cli -h db01 -p 6380 CLUSTER NODES 
redis-cli --cluster check 10.0.0.51 6380  
```

# 第19章 使用工具扩容

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-e7e156608ed2c55c.png#mirages-width=1312&mirages-height=974&mirages-cdn-type=5)

## 1.来自json的灵魂发问：

迁移时候槽的数据咋办？
需要停库吗？
访问受影响吗？
从库呢？

## 2.如何设计实验验证数据是否受影响？

迁移的过程中
一个窗口不断的写数据
一个窗口不断的读数据
观察是否会中断

## 3.创建新节点

```
BASH
mkdir -p /opt/redis_{6390,6391}/{conf,logs,pid}
mkdir -p /data/redis_{6390,6391}
cd /opt/
cp redis_6380/conf/redis_6380.conf redis_6390/conf/redis_6390.conf
cp redis_6380/conf/redis_6380.conf redis_6391/conf/redis_6391.conf
sed -i 's#6380#6390#g' redis_6390/conf/redis_6390.conf
sed -i 's#6380#6391#g' redis_6391/conf/redis_6391.conf
redis-server /opt/redis_6390/conf/redis_6390.conf
redis-server /opt/redis_6391/conf/redis_6391.conf
ps -ef|grep redis
redis-cli -c -h db01 -p 6380 cluster meet 10.0.0.51 6390
redis-cli -c -h db01 -p 6380 cluster meet 10.0.0.51 6391
redis-cli -c -h db01 -p 6380 cluster nodes
```

## 4.使用工具扩容步骤

```
CSHARP
重新分配槽位
redis-cli --cluster reshard 10.0.0.51:6380

第一次交互：每个节点分配多少个槽位
How many slots do you want to move (from 1 to 16384)? 4096

第二次交互：接受节点的ID是什么
What is the receiving node ID? 6390的ID

第三次交互：哪些节点需要导出
Source node #1: all

第四次交互：确认是否执行
Do you want to proceed with the proposed reshard plan (yes/no)? yes
```

# 第20章 使用工具缩容

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-eea042bfbf7c3d19.png#mirages-width=1674&mirages-height=958&mirages-cdn-type=5)

## 1.操作命令

```
PHP
重新分配槽位
redis-cli --cluster reshard 10.0.0.51:6380

第一次交互：需要迁移多少个槽位
How many slots do you want to move (from 1 to 16384)? 1365

第二次交互：接受节点的ID是什么
What is the receiving node ID? db01的6380的ID 

第三次交互：哪些节点需要导出
Source node #1: db01的6390的ID 
Source node #2: done

第四次交互：确认
Do you want to proceed with the proposed reshard plan (yes/no)? yes

重复上面的操作，直到6390所有的槽位都被分配出去了

检查集群状态，确认6390没有槽位了
redis-cli --cluster info 10.0.0.51:6380

使用工具删除节点了
redis-cli --cluster del-node 10.0.0.51:6390 6390的ID
redis-cli --cluster del-node 10.0.0.51:6391 6391的ID
```

## 2.提问：公司先用的是哨兵然后在改集群 如何迁移数据

用槽位分配解决方法：

```
CODE
1.搭建好Redis集群并互相发现
2.把所有的key都分配到db01上
3.把哨兵里的数据AOF持久化
4.拷贝到db01上，启动集群节点
5.重新分配槽位迁移到其他2个节点
```

# 第21章 .验证集群高可用

## 1.提问：故障的主库修复后启动会变成备胎吗？

## 2.实验结论：

```
CODE
1.主库挂了，从库会自动接替主库的角色，集群恢复正常会受超时时间控制
2.老得主库修复上线后，会自动变成从库，同步新的主库
```

## 3.主动发起集群角色切换：

```
OBJECTIVEC
CLUSTER FAILOVER
```

# 第22章 模拟分配时故障

## 1.模拟场景：迁移数据时人为中断了，导致槽的状态不对

```
JSON
[11213-<-a69e46ea7560684a7061ddb6dc3f854a1ef3dbd4] 51
[11213->-ccaa5dcb0f0320332100594d629122b2702660d5] 53
```

## 2.使用工具修复：

```
CSS
redis-cli --cluster fix 10.0.0.51:6380
```

## 3.手动修复：

```
OBJECTIVEC
CLUSTER SETSLOT <slot> STABLE
```

# 第23章 使用工具维护集群的好处

```
CODE
工具有很多判断条件，更加严谨，健壮性更好
删除槽，使用工具会判断，如果槽里有数据，就不执行
添加节点使用工具会判断，如果新增加的节点本身不为空，不允许加入到集群里
删除节点使用工具会判断，如果本删除节点本身还有槽，不允许删除
```

# 第24章 数据迁移

## 1.新版本直接使用工具迁移

不加copy参数相当于mv，老数据迁移成功就删掉了

```
CSS
redis-cli --cluster import 10.0.0.51:6380 --cluster-from 10.0.0.51:6379
```

添加copy参数相当于cp,老数据迁移成功后会保留

```
CSS
redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-from 10.0.0.51:6379 
```

添加replace参数会覆盖掉同名的数据，对新集群新增加的数据不受影响

```
CSS
redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379 
```

验证迁移期间边写边导会不会影响: 同时开2个终端，一个写入key，

```
BASH
for i in {1..1000};do redis-cli set k_${i} v_${i};sleep 0.2;echo ${i};done
```

一个执行导入命令

```
CSS
redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379 
```

得出结论：

```
CODE
只会导入当你执行导入命令那一刻时，当前被导入节点的所有数据，类似于快照，对于后面再写入的数据不会更新
```

# 第25章 分析key的大小

## 0.使用自带工具分析

```
CODE
redis-cli --bigkeys 
```

## 1.使用第三方工具分析

### 1.安装命令

```
BASH
yum install python-pip gcc python-devel -y
cd /opt/
git clone https://github.com/sripathikrishnan/redis-rdb-tools
cd redis-rdb-tools
pip install python-lzf
python setup.py install
```

### 2.生成测试数据

```
CODE
redis-cli -h db01 -p 6379 set txt $(cat txt.txt)
```

### 3.执行bgsave生成rdb文件

```
CODE
redis-cli -h db01 -p 6379 BGSAVE
```

### 4.使用工具分析

```
BASH
cd /data/redis_6379/
rdb -c memory redis_6379.rdb -f redis_6379.rdb.csv
```

### 5.过滤分析

```
DART
awk -F"," '{print $4,$3}' redis_6379.rdb.csv |sort -r
```

### 6.汇报领导

将结果整理汇报给领导,询问开发这个key是否可以删除

# 第26章 redis的内存管理

## 1.设置最大内存限制

```
BASH
config set maxmemory 2G
```

## 2.内存回收机制

生产上一定要限制redis的内存使用大小。

当达到内存使用限制之后redis会出发对应的控制策略

redis支持6种策略：

```
CSS
1.noevicition       默认策略，不会删除任务数据，拒绝所有写入操作并返回客户端错误信息，此时只响应读操作
2.volatile-lru      根据LRU算法删除设置了超时属性的key，指导腾出足够空间为止，如果没有可删除的key，则退回到noevicition策略
3.allkeys-lru       根据LRU算法删除key，不管数据有没有设置超时属性
4.allkeys-random    随机删除所有key
5.volatile-random   随机删除过期key
5.volatile-ttl      根据key的ttl，删除最近要过期的key
```

## 3.生产上redis限制多大内存

```
CODE
先空出来系统一半内存
48G 一共 
24G 系统
24G redis 
redis先给8G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的
redis再给到12G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的
redis再给到16G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的
等到24G都用完了之后，汇报领导，要考虑买内存了。
等到35G的时候，就要考虑是加内存，还是扩容机器。
```

# 第27章 性能测试

```
CODE
redis-benchmark -n 10000  -q
```

# 第28章 集群相关命令

```
CSS
redis-cli -h db01 -p 6380
CLUSTER NODES    
CLUSTER MEET 10.0.0.52 6380
CLUSTER INFO
CLUSTER REPLICATE
CLUSTER ADDSLOTS
CLUSTER RESET
CLUSTER FAILOVER
CLUSTER SETSLOT <slot> STABLE
redis-cli --cluster info 10.0.0.51 6380
redis-cli --cluster rebalance 10.0.0.51 6380
redis-cli --cluster del-node
redis-cli --cluster fix 10.0.0.51:6380
```

# 第29章 命令总结

```
CSHARP
1.全局命令
keys *                
DBSIZE                
EXISTS k1         
EXPIRE k1 10      
TTL k1            
DEL k1                

2.字符串:
set k1 v1
get k1

mset k1 v1 k2 v2 k3 v3 
mget k1 k2 k3 

incr k1 
incrby k1 N 

3.列表：
LPUSH
RPUSH
LPOP
RPOP

LLEN
LRANGE list1 0 -1

HASH:
HMSET 
HGET
HMGET
HGETALL

4.集合：
SADD 
SDIFF
SINTER
SUNION
SREM

5.有序集合：
ZADD
ZCARD
ZSCORE
ZRANK
ZREVRANK
ZRANGE
ZRANGEBYSCORE
ZINCRBY
ZCOUNT
```

转自：简书张导https://www.jianshu.com/p/9622d5906bcf

[老男孩-NoSQL](https://www.jianshu.com/nb/38272646)