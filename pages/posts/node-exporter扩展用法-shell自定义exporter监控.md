---
title: node-exporter扩展用法-shell自定义exporter监控
categories: Prometheus
tags: [自定义exporter]
date: 2019-11-20 11:08:00
---
> 当Prometheus的node_exporter中没有我们需要的一些监控项时，就可以使用自定义exporter的扩展功能，但是对于那些开发能力稍微弱一些的朋友（特指我），如果你会shell脚本的编写，最基础的awk语法，那么你也可以进行自定义exporter，这就需要借助Node-exporter实现了。

**node_exporter 可在启动时指定路径，并将该路径下的 *.prom 识别为监控数据文件。**

## 添加取值脚本

```
[root@one tmp]# cat /data/exporter/key/key_runner 
#! /bin/bash

echo Logical_CPU_core_total  `cat /proc/cpuinfo| grep "processor"| wc -l`
echo logined_users_total     `who | wc -l`;
echo procs_total `ps aux|wc -l`
echo procs_zombie       `ps axo pid=,stat=|grep Z|wc -l`
```

执行效果

```
[root@one key]# bash  key_runner
Logical_CPU_core_total 2
logined_users_total 1
procs_total 148
procs_zombie 0
```

## 设置定时任务

> 每分钟执行一次

```
* * * * * bash /usr/local/node_exporter/key/key_runner > /usr/local/node_exporter/key/key.prom
```

## 添加启动参数

启动node_exporter，指定新加key值的prom路径

```
./node_exporter --collector.textfile.directory=/usr/local/node_exporter-0.16/key
```

如果你是Docker启动，请考虑使用下面这条命令.

```bash
docker run -d   --net="host"   --pid="host"   --name=node-exporter   -v "/:/host:ro"  quay.io/prometheus/node-exporter   --path.rootfs /host  --collector.textfile.directory=/host/data/exporter/key/
```

## 验证

查看metrics值是否新增了该监控项

```
[root@one key]# curl 127.0.0.1:9100/metrics|grep -E "Logical_CPU_core_total|logined_users_total|procs_total|procs_zombie"
# TYPE Logical_CPU_core_total untyped
Logical_CPU_core_total 2
# HELP logined_users_total Metric read from /usr/local/node_exporter/key/key.prom
# TYPE logined_users_total untyped
logined_users_total 1
# HELP procs_total Metric read from /usr/local/node_exporter/key/key.prom
# TYPE procs_total untyped
procs_total 151
# HELP procs_zombie Metric read from /usr/local/node_exporter/key/key.prom
# TYPE procs_zombie untyped
procs_zombie 0
```

