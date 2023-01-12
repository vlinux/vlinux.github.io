import{_ as t}from"./ValaxyMain-fde20bcc.js";import{_ as r,p,c as d,w as n,o as C,r as a,b as s,R as l}from"./app-73107480.js";import"./YunFooter-091e638c.js";import"./YunCard-a5dab7a4.js";import"./YunPageHeader-0348731d.js";const ki=JSON.parse('{"title":"Redis-5.x知识体系梳理","description":"","frontmatter":{"title":"Redis-5.x知识体系梳理","categories":"Redis","tags":["Redis5.*"],"date":"2021-01-01T13:10:00.000Z"},"headers":[{"level":2,"title":"1.redis官网","slug":"_1-redis官网","link":"#_1-redis官网","children":[]},{"level":2,"title":"2.版本选择","slug":"_2-版本选择","link":"#_2-版本选择","children":[]},{"level":2,"title":"3.规划目录","slug":"_3-规划目录","link":"#_3-规划目录","children":[]},{"level":2,"title":"4.安装命令","slug":"_4-安装命令","link":"#_4-安装命令","children":[]},{"level":2,"title":"5.配置文件","slug":"_5-配置文件","link":"#_5-配置文件","children":[]},{"level":2,"title":"6.启动命令","slug":"_6-启动命令","link":"#_6-启动命令","children":[]},{"level":2,"title":"7.检查","slug":"_7-检查","link":"#_7-检查","children":[]},{"level":2,"title":"8.连接redis终端","slug":"_8-连接redis终端","link":"#_8-连接redis终端","children":[]},{"level":2,"title":"9.关闭命令","slug":"_9-关闭命令","link":"#_9-关闭命令","children":[]},{"level":2,"title":"10.system启动配置","slug":"_10-system启动配置","link":"#_10-system启动配置","children":[]},{"level":2,"title":"0.redis数据格式","slug":"_0-redis数据格式","link":"#_0-redis数据格式","children":[]},{"level":2,"title":"1.写入测试key","slug":"_1-写入测试key","link":"#_1-写入测试key","children":[]},{"level":2,"title":"2.查看所有的key","slug":"_2-查看所有的key","link":"#_2-查看所有的key","children":[]},{"level":2,"title":"3.查看有多少个key","slug":"_3-查看有多少个key","link":"#_3-查看有多少个key","children":[]},{"level":2,"title":"4.查看某个Key是否存在","slug":"_4-查看某个key是否存在","link":"#_4-查看某个key是否存在","children":[]},{"level":2,"title":"5.删除key","slug":"_5-删除key","link":"#_5-删除key","children":[]},{"level":2,"title":"6.键过期","slug":"_6-键过期","link":"#_6-键过期","children":[]},{"level":2,"title":"1.设置一个key","slug":"_1-设置一个key","link":"#_1-设置一个key","children":[]},{"level":2,"title":"2.查看一个key","slug":"_2-查看一个key","link":"#_2-查看一个key","children":[]},{"level":2,"title":"3.设置多个key","slug":"_3-设置多个key","link":"#_3-设置多个key","children":[]},{"level":2,"title":"4.查看多个key","slug":"_4-查看多个key","link":"#_4-查看多个key","children":[]},{"level":2,"title":"5.天然计数器","slug":"_5-天然计数器","link":"#_5-天然计数器","children":[]},{"level":2,"title":"1.插入列表","slug":"_1-插入列表","link":"#_1-插入列表","children":[]},{"level":2,"title":"2.查看列表长度","slug":"_2-查看列表长度","link":"#_2-查看列表长度","children":[]},{"level":2,"title":"3.查看列表内容","slug":"_3-查看列表内容","link":"#_3-查看列表内容","children":[]},{"level":2,"title":"4.删除列表元素","slug":"_4-删除列表元素","link":"#_4-删除列表元素","children":[]},{"level":2,"title":"5.删除整个列表","slug":"_5-删除整个列表","link":"#_5-删除整个列表","children":[]},{"level":2,"title":"1.mysql数据如何缓存到redis","slug":"_1-mysql数据如何缓存到redis","link":"#_1-mysql数据如何缓存到redis","children":[]},{"level":2,"title":"2.创建一个Hash数据","slug":"_2-创建一个hash数据","link":"#_2-创建一个hash数据","children":[]},{"level":2,"title":"3.查看hash里指定的值","slug":"_3-查看hash里指定的值","link":"#_3-查看hash里指定的值","children":[]},{"level":2,"title":"4.查看Hash里所有的值","slug":"_4-查看hash里所有的值","link":"#_4-查看hash里所有的值","children":[]},{"level":2,"title":"1.创建集合","slug":"_1-创建集合","link":"#_1-创建集合","children":[]},{"level":2,"title":"2.查看集合成员","slug":"_2-查看集合成员","link":"#_2-查看集合成员","children":[]},{"level":2,"title":"3.查看集合的交集","slug":"_3-查看集合的交集","link":"#_3-查看集合的交集","children":[]},{"level":2,"title":"4.查看集合的并集","slug":"_4-查看集合的并集","link":"#_4-查看集合的并集","children":[]},{"level":2,"title":"5.查看集合的差集","slug":"_5-查看集合的差集","link":"#_5-查看集合的差集","children":[]},{"level":2,"title":"6.删除一个成员","slug":"_6-删除一个成员","link":"#_6-删除一个成员","children":[]},{"level":2,"title":"6.注意","slug":"_6-注意","link":"#_6-注意","children":[]},{"level":2,"title":"1.添加成员","slug":"_1-添加成员","link":"#_1-添加成员","children":[]},{"level":2,"title":"2.计算成员个数","slug":"_2-计算成员个数","link":"#_2-计算成员个数","children":[]},{"level":2,"title":"3.计算某个成员分数","slug":"_3-计算某个成员分数","link":"#_3-计算某个成员分数","children":[]},{"level":2,"title":"4.按照降序查看成员名次：","slug":"_4-按照降序查看成员名次：","link":"#_4-按照降序查看成员名次：","children":[]},{"level":2,"title":"5.按照升序查看成员名次：","slug":"_5-按照升序查看成员名次：","link":"#_5-按照升序查看成员名次：","children":[]},{"level":2,"title":"6.删除成员","slug":"_6-删除成员","link":"#_6-删除成员","children":[]},{"level":2,"title":"7.增加成员分数","slug":"_7-增加成员分数","link":"#_7-增加成员分数","children":[]},{"level":2,"title":"8.返回指定排名范围的成员","slug":"_8-返回指定排名范围的成员","link":"#_8-返回指定排名范围的成员","children":[]},{"level":2,"title":"9.返回指定分数范围的成员","slug":"_9-返回指定分数范围的成员","link":"#_9-返回指定分数范围的成员","children":[]},{"level":2,"title":"10.返回指定分数范围的成员的个数","slug":"_10-返回指定分数范围的成员的个数","link":"#_10-返回指定分数范围的成员的个数","children":[]},{"level":2,"title":"1.RDB和AOF介绍","slug":"_1-rdb和aof介绍","link":"#_1-rdb和aof介绍","children":[]},{"level":2,"title":"2.配置RDB","slug":"_2-配置rdb","link":"#_2-配置rdb","children":[]},{"level":2,"title":"3.RDB结论","slug":"_3-rdb结论","link":"#_3-rdb结论","children":[]},{"level":2,"title":"4.AOF配置","slug":"_4-aof配置","link":"#_4-aof配置","children":[]},{"level":2,"title":"5.AOF重写机制","slug":"_5-aof重写机制","link":"#_5-aof重写机制","children":[]},{"level":2,"title":"6.aof和rdb实验","slug":"_6-aof和rdb实验","link":"#_6-aof和rdb实验","children":[]},{"level":2,"title":"7.如何选择是rdb还是aof","slug":"_7-如何选择是rdb还是aof","link":"#_7-如何选择是rdb还是aof","children":[]},{"level":2,"title":"8.aof文件故障模拟实验结论","slug":"_8-aof文件故障模拟实验结论","link":"#_8-aof文件故障模拟实验结论","children":[]},{"level":2,"title":"9.实验：如果设置了过期时间，恢复数据会如何处理","slug":"_9-实验：如果设置了过期时间，恢复数据会如何处理","link":"#_9-实验：如果设置了过期时间，恢复数据会如何处理","children":[]},{"level":2,"title":"1.写入配置文件","slug":"_1-写入配置文件","link":"#_1-写入配置文件","children":[]},{"level":2,"title":"2.使用密码登陆","slug":"_2-使用密码登陆","link":"#_2-使用密码登陆","children":[]},{"level":2,"title":"3.为什么redis的密码认证这么简单？","slug":"_3-为什么redis的密码认证这么简单？","link":"#_3-为什么redis的密码认证这么简单？","children":[]},{"level":2,"title":"1.禁用危险命令","slug":"_1-禁用危险命令","link":"#_1-禁用危险命令","children":[]},{"level":2,"title":"2.来自json的灵魂拷问：shutdown禁用了 让后用kill?","slug":"_2-来自json的灵魂拷问：shutdown禁用了-让后用kill","link":"#_2-来自json的灵魂拷问：shutdown禁用了-让后用kill","children":[]},{"level":2,"title":"1.快速部署第二台服务器","slug":"_1-快速部署第二台服务器","link":"#_1-快速部署第二台服务器","children":[]},{"level":2,"title":"2.db01插入测试命令","slug":"_2-db01插入测试命令","link":"#_2-db01插入测试命令","children":[]},{"level":2,"title":"3.配置主从复制","slug":"_3-配置主从复制","link":"#_3-配置主从复制","children":[]},{"level":2,"title":"4.主从复制的流程","slug":"_4-主从复制的流程","link":"#_4-主从复制的流程","children":[]},{"level":2,"title":"5.取消复制","slug":"_5-取消复制","link":"#_5-取消复制","children":[]},{"level":2,"title":"6.主从复制注意","slug":"_6-主从复制注意","link":"#_6-主从复制注意","children":[]},{"level":2,"title":"7.安全的操作","slug":"_7-安全的操作","link":"#_7-安全的操作","children":[]},{"level":2,"title":"1.哨兵的作用","slug":"_1-哨兵的作用","link":"#_1-哨兵的作用","children":[]},{"level":2,"title":"2.目录和端口规划","slug":"_2-目录和端口规划","link":"#_2-目录和端口规划","children":[]},{"level":2,"title":"3.部署3台redis单节点","slug":"_3-部署3台redis单节点","link":"#_3-部署3台redis单节点","children":[{"level":3,"title":"db01操作：","slug":"db01操作：","link":"#db01操作：","children":[]},{"level":3,"title":"db02和db03的操作：","slug":"db02和db03的操作：","link":"#db02和db03的操作：","children":[]}]},{"level":2,"title":"4.配置主从复制","slug":"_4-配置主从复制","link":"#_4-配置主从复制","children":[]},{"level":2,"title":"5.部署哨兵节点-3台机器都操作","slug":"_5-部署哨兵节点-3台机器都操作","link":"#_5-部署哨兵节点-3台机器都操作","children":[]},{"level":2,"title":"6.编写哨兵system配置文件-3台机器都操作","slug":"_6-编写哨兵system配置文件-3台机器都操作","link":"#_6-编写哨兵system配置文件-3台机器都操作","children":[]},{"level":2,"title":"7.启动哨兵并检查","slug":"_7-启动哨兵并检查","link":"#_7-启动哨兵并检查","children":[]},{"level":2,"title":"8.验证主节点","slug":"_8-验证主节点","link":"#_8-验证主节点","children":[]},{"level":2,"title":"9.模拟故障转移","slug":"_9-模拟故障转移","link":"#_9-模拟故障转移","children":[]},{"level":2,"title":"10.模拟故障修复上线","slug":"_10-模拟故障修复上线","link":"#_10-模拟故障修复上线","children":[]},{"level":2,"title":"11.来自json的灵魂发问：能够给redis 节点加权 来确定优先备选主节点嘛?","slug":"_11-来自json的灵魂发问：能够给redis-节点加权-来确定优先备选主节点嘛","link":"#_11-来自json的灵魂发问：能够给redis-节点加权-来确定优先备选主节点嘛","children":[]},{"level":2,"title":"1.烧饼的不足","slug":"_1-烧饼的不足","link":"#_1-烧饼的不足","children":[]},{"level":2,"title":"2.集群重要概念","slug":"_2-集群重要概念","link":"#_2-集群重要概念","children":[]},{"level":2,"title":"3.目录规划","slug":"_3-目录规划","link":"#_3-目录规划","children":[]},{"level":2,"title":"4.db01的操作","slug":"_4-db01的操作","link":"#_4-db01的操作","children":[]},{"level":2,"title":"5.db02的操作","slug":"_5-db02的操作","link":"#_5-db02的操作","children":[]},{"level":2,"title":"6.db03的操作","slug":"_6-db03的操作","link":"#_6-db03的操作","children":[]},{"level":2,"title":"7.集群手动发现节点","slug":"_7-集群手动发现节点","link":"#_7-集群手动发现节点","children":[]},{"level":2,"title":"8.集群手动分配槽位","slug":"_8-集群手动分配槽位","link":"#_8-集群手动分配槽位","children":[{"level":3,"title":"1.槽位规划","slug":"_1-槽位规划","link":"#_1-槽位规划","children":[]},{"level":3,"title":"2.分配槽位","slug":"_2-分配槽位","link":"#_2-分配槽位","children":[]},{"level":3,"title":"3.查看集群状态","slug":"_3-查看集群状态","link":"#_3-查看集群状态","children":[]}]},{"level":2,"title":"9.手动部署复制关系","slug":"_9-手动部署复制关系","link":"#_9-手动部署复制关系","children":[{"level":3,"title":"0.先获取集群节点信息","slug":"_0-先获取集群节点信息","link":"#_0-先获取集群节点信息","children":[]},{"level":3,"title":"1.先删除所有6381的内容和不需要内容","slug":"_1-先删除所有6381的内容和不需要内容","link":"#_1-先删除所有6381的内容和不需要内容","children":[]},{"level":3,"title":"2.画图","slug":"_2-画图","link":"#_2-画图","children":[]},{"level":3,"title":"3.确定复制关系","slug":"_3-确定复制关系","link":"#_3-确定复制关系","children":[]},{"level":3,"title":"4.检查复制关系","slug":"_4-检查复制关系","link":"#_4-检查复制关系","children":[]}]},{"level":2,"title":"10.集群插入数据","slug":"_10-集群插入数据","link":"#_10-集群插入数据","children":[{"level":3,"title":"1.尝试插入一条数据发现报错","slug":"_1-尝试插入一条数据发现报错","link":"#_1-尝试插入一条数据发现报错","children":[]},{"level":3,"title":"2.目前的现象","slug":"_2-目前的现象","link":"#_2-目前的现象","children":[]},{"level":3,"title":"3.问题原因","slug":"_3-问题原因","link":"#_3-问题原因","children":[]}]},{"level":2,"title":"11.验证集群是否足够足迹足够平均","slug":"_11-验证集群是否足够足迹足够平均","link":"#_11-验证集群是否足够足迹足够平均","children":[{"level":3,"title":"0.写入测试数据","slug":"_0-写入测试数据","link":"#_0-写入测试数据","children":[]},{"level":3,"title":"1.验证足够平均:","slug":"_1-验证足够平均","link":"#_1-验证足够平均","children":[]},{"level":3,"title":"2.验证足够随机：","slug":"_2-验证足够随机：","link":"#_2-验证足够随机：","children":[]},{"level":3,"title":"3.允许节点的key在2%误差的依据来源：","slug":"_3-允许节点的key在2-误差的依据来源：","link":"#_3-允许节点的key在2-误差的依据来源：","children":[]},{"level":3,"title":"4.检查集群健康状态：","slug":"_4-检查集群健康状态：","link":"#_4-检查集群健康状态：","children":[]}]},{"level":2,"title":"1.故障背景","slug":"_1-故障背景","link":"#_1-故障背景","children":[]},{"level":2,"title":"2.前提","slug":"_2-前提","link":"#_2-前提","children":[]},{"level":2,"title":"3.实验现象","slug":"_3-实验现象","link":"#_3-实验现象","children":[]},{"level":2,"title":"解决思路1：备份数据，重做集群，导入数据","slug":"解决思路1：备份数据，重做集群，导入数据","link":"#解决思路1：备份数据，重做集群，导入数据","children":[]},{"level":2,"title":"解决思路2:获得所有key的名称，导出再导入","slug":"解决思路2-获得所有key的名称，导出再导入","link":"#解决思路2-获得所有key的名称，导出再导入","children":[]},{"level":2,"title":"解决思路3: 流水线 pipline","slug":"解决思路3-流水线-pipline","link":"#解决思路3-流水线-pipline","children":[]},{"level":2,"title":"解决思路4: 使用redis-cli工具重新分配槽位","slug":"解决思路4-使用redis-cli工具重新分配槽位","link":"#解决思路4-使用redis-cli工具重新分配槽位","children":[]},{"level":2,"title":"解决思路5:直接使用工具在线导入","slug":"解决思路5-直接使用工具在线导入","link":"#解决思路5-直接使用工具在线导入","children":[]},{"level":2,"title":"1.恢复集群初始化","slug":"_1-恢复集群初始化","link":"#_1-恢复集群初始化","children":[]},{"level":2,"title":"2.使用工具初始化","slug":"_2-使用工具初始化","link":"#_2-使用工具初始化","children":[]},{"level":2,"title":"3.检查集群","slug":"_3-检查集群","link":"#_3-检查集群","children":[]},{"level":2,"title":"1.来自json的灵魂发问：","slug":"_1-来自json的灵魂发问：","link":"#_1-来自json的灵魂发问：","children":[]},{"level":2,"title":"2.如何设计实验验证数据是否受影响？","slug":"_2-如何设计实验验证数据是否受影响？","link":"#_2-如何设计实验验证数据是否受影响？","children":[]},{"level":2,"title":"3.创建新节点","slug":"_3-创建新节点","link":"#_3-创建新节点","children":[]},{"level":2,"title":"4.使用工具扩容步骤","slug":"_4-使用工具扩容步骤","link":"#_4-使用工具扩容步骤","children":[]},{"level":2,"title":"1.操作命令","slug":"_1-操作命令","link":"#_1-操作命令","children":[]},{"level":2,"title":"2.提问：公司先用的是哨兵然后在改集群 如何迁移数据","slug":"_2-提问：公司先用的是哨兵然后在改集群-如何迁移数据","link":"#_2-提问：公司先用的是哨兵然后在改集群-如何迁移数据","children":[]},{"level":2,"title":"1.提问：故障的主库修复后启动会变成备胎吗？","slug":"_1-提问：故障的主库修复后启动会变成备胎吗？","link":"#_1-提问：故障的主库修复后启动会变成备胎吗？","children":[]},{"level":2,"title":"2.实验结论：","slug":"_2-实验结论：","link":"#_2-实验结论：","children":[]},{"level":2,"title":"3.主动发起集群角色切换：","slug":"_3-主动发起集群角色切换：","link":"#_3-主动发起集群角色切换：","children":[]},{"level":2,"title":"1.模拟场景：迁移数据时人为中断了，导致槽的状态不对","slug":"_1-模拟场景：迁移数据时人为中断了，导致槽的状态不对","link":"#_1-模拟场景：迁移数据时人为中断了，导致槽的状态不对","children":[]},{"level":2,"title":"2.使用工具修复：","slug":"_2-使用工具修复：","link":"#_2-使用工具修复：","children":[]},{"level":2,"title":"3.手动修复：","slug":"_3-手动修复：","link":"#_3-手动修复：","children":[]},{"level":2,"title":"1.新版本直接使用工具迁移","slug":"_1-新版本直接使用工具迁移","link":"#_1-新版本直接使用工具迁移","children":[]},{"level":2,"title":"0.使用自带工具分析","slug":"_0-使用自带工具分析","link":"#_0-使用自带工具分析","children":[]},{"level":2,"title":"1.使用第三方工具分析","slug":"_1-使用第三方工具分析","link":"#_1-使用第三方工具分析","children":[{"level":3,"title":"1.安装命令","slug":"_1-安装命令","link":"#_1-安装命令","children":[]},{"level":3,"title":"2.生成测试数据","slug":"_2-生成测试数据","link":"#_2-生成测试数据","children":[]},{"level":3,"title":"3.执行bgsave生成rdb文件","slug":"_3-执行bgsave生成rdb文件","link":"#_3-执行bgsave生成rdb文件","children":[]},{"level":3,"title":"4.使用工具分析","slug":"_4-使用工具分析","link":"#_4-使用工具分析","children":[]},{"level":3,"title":"5.过滤分析","slug":"_5-过滤分析","link":"#_5-过滤分析","children":[]},{"level":3,"title":"6.汇报领导","slug":"_6-汇报领导","link":"#_6-汇报领导","children":[]}]},{"level":2,"title":"1.设置最大内存限制","slug":"_1-设置最大内存限制","link":"#_1-设置最大内存限制","children":[]},{"level":2,"title":"2.内存回收机制","slug":"_2-内存回收机制","link":"#_2-内存回收机制","children":[]},{"level":2,"title":"3.生产上redis限制多大内存","slug":"_3-生产上redis限制多大内存","link":"#_3-生产上redis限制多大内存","children":[]}],"relativePath":"pages/posts/Redis-5.x知识体系梳理.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Redis-5.x知识体系梳理.md","lastUpdated":1671090556000}'),c=JSON.parse('{"title":"Redis-5.x知识体系梳理","description":"","frontmatter":{"title":"Redis-5.x知识体系梳理","categories":"Redis","tags":["Redis5.*"],"date":"2021-01-01T13:10:00.000Z"},"headers":[{"level":2,"title":"1.redis官网","slug":"_1-redis官网","link":"#_1-redis官网","children":[]},{"level":2,"title":"2.版本选择","slug":"_2-版本选择","link":"#_2-版本选择","children":[]},{"level":2,"title":"3.规划目录","slug":"_3-规划目录","link":"#_3-规划目录","children":[]},{"level":2,"title":"4.安装命令","slug":"_4-安装命令","link":"#_4-安装命令","children":[]},{"level":2,"title":"5.配置文件","slug":"_5-配置文件","link":"#_5-配置文件","children":[]},{"level":2,"title":"6.启动命令","slug":"_6-启动命令","link":"#_6-启动命令","children":[]},{"level":2,"title":"7.检查","slug":"_7-检查","link":"#_7-检查","children":[]},{"level":2,"title":"8.连接redis终端","slug":"_8-连接redis终端","link":"#_8-连接redis终端","children":[]},{"level":2,"title":"9.关闭命令","slug":"_9-关闭命令","link":"#_9-关闭命令","children":[]},{"level":2,"title":"10.system启动配置","slug":"_10-system启动配置","link":"#_10-system启动配置","children":[]},{"level":2,"title":"0.redis数据格式","slug":"_0-redis数据格式","link":"#_0-redis数据格式","children":[]},{"level":2,"title":"1.写入测试key","slug":"_1-写入测试key","link":"#_1-写入测试key","children":[]},{"level":2,"title":"2.查看所有的key","slug":"_2-查看所有的key","link":"#_2-查看所有的key","children":[]},{"level":2,"title":"3.查看有多少个key","slug":"_3-查看有多少个key","link":"#_3-查看有多少个key","children":[]},{"level":2,"title":"4.查看某个Key是否存在","slug":"_4-查看某个key是否存在","link":"#_4-查看某个key是否存在","children":[]},{"level":2,"title":"5.删除key","slug":"_5-删除key","link":"#_5-删除key","children":[]},{"level":2,"title":"6.键过期","slug":"_6-键过期","link":"#_6-键过期","children":[]},{"level":2,"title":"1.设置一个key","slug":"_1-设置一个key","link":"#_1-设置一个key","children":[]},{"level":2,"title":"2.查看一个key","slug":"_2-查看一个key","link":"#_2-查看一个key","children":[]},{"level":2,"title":"3.设置多个key","slug":"_3-设置多个key","link":"#_3-设置多个key","children":[]},{"level":2,"title":"4.查看多个key","slug":"_4-查看多个key","link":"#_4-查看多个key","children":[]},{"level":2,"title":"5.天然计数器","slug":"_5-天然计数器","link":"#_5-天然计数器","children":[]},{"level":2,"title":"1.插入列表","slug":"_1-插入列表","link":"#_1-插入列表","children":[]},{"level":2,"title":"2.查看列表长度","slug":"_2-查看列表长度","link":"#_2-查看列表长度","children":[]},{"level":2,"title":"3.查看列表内容","slug":"_3-查看列表内容","link":"#_3-查看列表内容","children":[]},{"level":2,"title":"4.删除列表元素","slug":"_4-删除列表元素","link":"#_4-删除列表元素","children":[]},{"level":2,"title":"5.删除整个列表","slug":"_5-删除整个列表","link":"#_5-删除整个列表","children":[]},{"level":2,"title":"1.mysql数据如何缓存到redis","slug":"_1-mysql数据如何缓存到redis","link":"#_1-mysql数据如何缓存到redis","children":[]},{"level":2,"title":"2.创建一个Hash数据","slug":"_2-创建一个hash数据","link":"#_2-创建一个hash数据","children":[]},{"level":2,"title":"3.查看hash里指定的值","slug":"_3-查看hash里指定的值","link":"#_3-查看hash里指定的值","children":[]},{"level":2,"title":"4.查看Hash里所有的值","slug":"_4-查看hash里所有的值","link":"#_4-查看hash里所有的值","children":[]},{"level":2,"title":"1.创建集合","slug":"_1-创建集合","link":"#_1-创建集合","children":[]},{"level":2,"title":"2.查看集合成员","slug":"_2-查看集合成员","link":"#_2-查看集合成员","children":[]},{"level":2,"title":"3.查看集合的交集","slug":"_3-查看集合的交集","link":"#_3-查看集合的交集","children":[]},{"level":2,"title":"4.查看集合的并集","slug":"_4-查看集合的并集","link":"#_4-查看集合的并集","children":[]},{"level":2,"title":"5.查看集合的差集","slug":"_5-查看集合的差集","link":"#_5-查看集合的差集","children":[]},{"level":2,"title":"6.删除一个成员","slug":"_6-删除一个成员","link":"#_6-删除一个成员","children":[]},{"level":2,"title":"6.注意","slug":"_6-注意","link":"#_6-注意","children":[]},{"level":2,"title":"1.添加成员","slug":"_1-添加成员","link":"#_1-添加成员","children":[]},{"level":2,"title":"2.计算成员个数","slug":"_2-计算成员个数","link":"#_2-计算成员个数","children":[]},{"level":2,"title":"3.计算某个成员分数","slug":"_3-计算某个成员分数","link":"#_3-计算某个成员分数","children":[]},{"level":2,"title":"4.按照降序查看成员名次：","slug":"_4-按照降序查看成员名次：","link":"#_4-按照降序查看成员名次：","children":[]},{"level":2,"title":"5.按照升序查看成员名次：","slug":"_5-按照升序查看成员名次：","link":"#_5-按照升序查看成员名次：","children":[]},{"level":2,"title":"6.删除成员","slug":"_6-删除成员","link":"#_6-删除成员","children":[]},{"level":2,"title":"7.增加成员分数","slug":"_7-增加成员分数","link":"#_7-增加成员分数","children":[]},{"level":2,"title":"8.返回指定排名范围的成员","slug":"_8-返回指定排名范围的成员","link":"#_8-返回指定排名范围的成员","children":[]},{"level":2,"title":"9.返回指定分数范围的成员","slug":"_9-返回指定分数范围的成员","link":"#_9-返回指定分数范围的成员","children":[]},{"level":2,"title":"10.返回指定分数范围的成员的个数","slug":"_10-返回指定分数范围的成员的个数","link":"#_10-返回指定分数范围的成员的个数","children":[]},{"level":2,"title":"1.RDB和AOF介绍","slug":"_1-rdb和aof介绍","link":"#_1-rdb和aof介绍","children":[]},{"level":2,"title":"2.配置RDB","slug":"_2-配置rdb","link":"#_2-配置rdb","children":[]},{"level":2,"title":"3.RDB结论","slug":"_3-rdb结论","link":"#_3-rdb结论","children":[]},{"level":2,"title":"4.AOF配置","slug":"_4-aof配置","link":"#_4-aof配置","children":[]},{"level":2,"title":"5.AOF重写机制","slug":"_5-aof重写机制","link":"#_5-aof重写机制","children":[]},{"level":2,"title":"6.aof和rdb实验","slug":"_6-aof和rdb实验","link":"#_6-aof和rdb实验","children":[]},{"level":2,"title":"7.如何选择是rdb还是aof","slug":"_7-如何选择是rdb还是aof","link":"#_7-如何选择是rdb还是aof","children":[]},{"level":2,"title":"8.aof文件故障模拟实验结论","slug":"_8-aof文件故障模拟实验结论","link":"#_8-aof文件故障模拟实验结论","children":[]},{"level":2,"title":"9.实验：如果设置了过期时间，恢复数据会如何处理","slug":"_9-实验：如果设置了过期时间，恢复数据会如何处理","link":"#_9-实验：如果设置了过期时间，恢复数据会如何处理","children":[]},{"level":2,"title":"1.写入配置文件","slug":"_1-写入配置文件","link":"#_1-写入配置文件","children":[]},{"level":2,"title":"2.使用密码登陆","slug":"_2-使用密码登陆","link":"#_2-使用密码登陆","children":[]},{"level":2,"title":"3.为什么redis的密码认证这么简单？","slug":"_3-为什么redis的密码认证这么简单？","link":"#_3-为什么redis的密码认证这么简单？","children":[]},{"level":2,"title":"1.禁用危险命令","slug":"_1-禁用危险命令","link":"#_1-禁用危险命令","children":[]},{"level":2,"title":"2.来自json的灵魂拷问：shutdown禁用了 让后用kill?","slug":"_2-来自json的灵魂拷问：shutdown禁用了-让后用kill","link":"#_2-来自json的灵魂拷问：shutdown禁用了-让后用kill","children":[]},{"level":2,"title":"1.快速部署第二台服务器","slug":"_1-快速部署第二台服务器","link":"#_1-快速部署第二台服务器","children":[]},{"level":2,"title":"2.db01插入测试命令","slug":"_2-db01插入测试命令","link":"#_2-db01插入测试命令","children":[]},{"level":2,"title":"3.配置主从复制","slug":"_3-配置主从复制","link":"#_3-配置主从复制","children":[]},{"level":2,"title":"4.主从复制的流程","slug":"_4-主从复制的流程","link":"#_4-主从复制的流程","children":[]},{"level":2,"title":"5.取消复制","slug":"_5-取消复制","link":"#_5-取消复制","children":[]},{"level":2,"title":"6.主从复制注意","slug":"_6-主从复制注意","link":"#_6-主从复制注意","children":[]},{"level":2,"title":"7.安全的操作","slug":"_7-安全的操作","link":"#_7-安全的操作","children":[]},{"level":2,"title":"1.哨兵的作用","slug":"_1-哨兵的作用","link":"#_1-哨兵的作用","children":[]},{"level":2,"title":"2.目录和端口规划","slug":"_2-目录和端口规划","link":"#_2-目录和端口规划","children":[]},{"level":2,"title":"3.部署3台redis单节点","slug":"_3-部署3台redis单节点","link":"#_3-部署3台redis单节点","children":[{"level":3,"title":"db01操作：","slug":"db01操作：","link":"#db01操作：","children":[]},{"level":3,"title":"db02和db03的操作：","slug":"db02和db03的操作：","link":"#db02和db03的操作：","children":[]}]},{"level":2,"title":"4.配置主从复制","slug":"_4-配置主从复制","link":"#_4-配置主从复制","children":[]},{"level":2,"title":"5.部署哨兵节点-3台机器都操作","slug":"_5-部署哨兵节点-3台机器都操作","link":"#_5-部署哨兵节点-3台机器都操作","children":[]},{"level":2,"title":"6.编写哨兵system配置文件-3台机器都操作","slug":"_6-编写哨兵system配置文件-3台机器都操作","link":"#_6-编写哨兵system配置文件-3台机器都操作","children":[]},{"level":2,"title":"7.启动哨兵并检查","slug":"_7-启动哨兵并检查","link":"#_7-启动哨兵并检查","children":[]},{"level":2,"title":"8.验证主节点","slug":"_8-验证主节点","link":"#_8-验证主节点","children":[]},{"level":2,"title":"9.模拟故障转移","slug":"_9-模拟故障转移","link":"#_9-模拟故障转移","children":[]},{"level":2,"title":"10.模拟故障修复上线","slug":"_10-模拟故障修复上线","link":"#_10-模拟故障修复上线","children":[]},{"level":2,"title":"11.来自json的灵魂发问：能够给redis 节点加权 来确定优先备选主节点嘛?","slug":"_11-来自json的灵魂发问：能够给redis-节点加权-来确定优先备选主节点嘛","link":"#_11-来自json的灵魂发问：能够给redis-节点加权-来确定优先备选主节点嘛","children":[]},{"level":2,"title":"1.烧饼的不足","slug":"_1-烧饼的不足","link":"#_1-烧饼的不足","children":[]},{"level":2,"title":"2.集群重要概念","slug":"_2-集群重要概念","link":"#_2-集群重要概念","children":[]},{"level":2,"title":"3.目录规划","slug":"_3-目录规划","link":"#_3-目录规划","children":[]},{"level":2,"title":"4.db01的操作","slug":"_4-db01的操作","link":"#_4-db01的操作","children":[]},{"level":2,"title":"5.db02的操作","slug":"_5-db02的操作","link":"#_5-db02的操作","children":[]},{"level":2,"title":"6.db03的操作","slug":"_6-db03的操作","link":"#_6-db03的操作","children":[]},{"level":2,"title":"7.集群手动发现节点","slug":"_7-集群手动发现节点","link":"#_7-集群手动发现节点","children":[]},{"level":2,"title":"8.集群手动分配槽位","slug":"_8-集群手动分配槽位","link":"#_8-集群手动分配槽位","children":[{"level":3,"title":"1.槽位规划","slug":"_1-槽位规划","link":"#_1-槽位规划","children":[]},{"level":3,"title":"2.分配槽位","slug":"_2-分配槽位","link":"#_2-分配槽位","children":[]},{"level":3,"title":"3.查看集群状态","slug":"_3-查看集群状态","link":"#_3-查看集群状态","children":[]}]},{"level":2,"title":"9.手动部署复制关系","slug":"_9-手动部署复制关系","link":"#_9-手动部署复制关系","children":[{"level":3,"title":"0.先获取集群节点信息","slug":"_0-先获取集群节点信息","link":"#_0-先获取集群节点信息","children":[]},{"level":3,"title":"1.先删除所有6381的内容和不需要内容","slug":"_1-先删除所有6381的内容和不需要内容","link":"#_1-先删除所有6381的内容和不需要内容","children":[]},{"level":3,"title":"2.画图","slug":"_2-画图","link":"#_2-画图","children":[]},{"level":3,"title":"3.确定复制关系","slug":"_3-确定复制关系","link":"#_3-确定复制关系","children":[]},{"level":3,"title":"4.检查复制关系","slug":"_4-检查复制关系","link":"#_4-检查复制关系","children":[]}]},{"level":2,"title":"10.集群插入数据","slug":"_10-集群插入数据","link":"#_10-集群插入数据","children":[{"level":3,"title":"1.尝试插入一条数据发现报错","slug":"_1-尝试插入一条数据发现报错","link":"#_1-尝试插入一条数据发现报错","children":[]},{"level":3,"title":"2.目前的现象","slug":"_2-目前的现象","link":"#_2-目前的现象","children":[]},{"level":3,"title":"3.问题原因","slug":"_3-问题原因","link":"#_3-问题原因","children":[]}]},{"level":2,"title":"11.验证集群是否足够足迹足够平均","slug":"_11-验证集群是否足够足迹足够平均","link":"#_11-验证集群是否足够足迹足够平均","children":[{"level":3,"title":"0.写入测试数据","slug":"_0-写入测试数据","link":"#_0-写入测试数据","children":[]},{"level":3,"title":"1.验证足够平均:","slug":"_1-验证足够平均","link":"#_1-验证足够平均","children":[]},{"level":3,"title":"2.验证足够随机：","slug":"_2-验证足够随机：","link":"#_2-验证足够随机：","children":[]},{"level":3,"title":"3.允许节点的key在2%误差的依据来源：","slug":"_3-允许节点的key在2-误差的依据来源：","link":"#_3-允许节点的key在2-误差的依据来源：","children":[]},{"level":3,"title":"4.检查集群健康状态：","slug":"_4-检查集群健康状态：","link":"#_4-检查集群健康状态：","children":[]}]},{"level":2,"title":"1.故障背景","slug":"_1-故障背景","link":"#_1-故障背景","children":[]},{"level":2,"title":"2.前提","slug":"_2-前提","link":"#_2-前提","children":[]},{"level":2,"title":"3.实验现象","slug":"_3-实验现象","link":"#_3-实验现象","children":[]},{"level":2,"title":"解决思路1：备份数据，重做集群，导入数据","slug":"解决思路1：备份数据，重做集群，导入数据","link":"#解决思路1：备份数据，重做集群，导入数据","children":[]},{"level":2,"title":"解决思路2:获得所有key的名称，导出再导入","slug":"解决思路2-获得所有key的名称，导出再导入","link":"#解决思路2-获得所有key的名称，导出再导入","children":[]},{"level":2,"title":"解决思路3: 流水线 pipline","slug":"解决思路3-流水线-pipline","link":"#解决思路3-流水线-pipline","children":[]},{"level":2,"title":"解决思路4: 使用redis-cli工具重新分配槽位","slug":"解决思路4-使用redis-cli工具重新分配槽位","link":"#解决思路4-使用redis-cli工具重新分配槽位","children":[]},{"level":2,"title":"解决思路5:直接使用工具在线导入","slug":"解决思路5-直接使用工具在线导入","link":"#解决思路5-直接使用工具在线导入","children":[]},{"level":2,"title":"1.恢复集群初始化","slug":"_1-恢复集群初始化","link":"#_1-恢复集群初始化","children":[]},{"level":2,"title":"2.使用工具初始化","slug":"_2-使用工具初始化","link":"#_2-使用工具初始化","children":[]},{"level":2,"title":"3.检查集群","slug":"_3-检查集群","link":"#_3-检查集群","children":[]},{"level":2,"title":"1.来自json的灵魂发问：","slug":"_1-来自json的灵魂发问：","link":"#_1-来自json的灵魂发问：","children":[]},{"level":2,"title":"2.如何设计实验验证数据是否受影响？","slug":"_2-如何设计实验验证数据是否受影响？","link":"#_2-如何设计实验验证数据是否受影响？","children":[]},{"level":2,"title":"3.创建新节点","slug":"_3-创建新节点","link":"#_3-创建新节点","children":[]},{"level":2,"title":"4.使用工具扩容步骤","slug":"_4-使用工具扩容步骤","link":"#_4-使用工具扩容步骤","children":[]},{"level":2,"title":"1.操作命令","slug":"_1-操作命令","link":"#_1-操作命令","children":[]},{"level":2,"title":"2.提问：公司先用的是哨兵然后在改集群 如何迁移数据","slug":"_2-提问：公司先用的是哨兵然后在改集群-如何迁移数据","link":"#_2-提问：公司先用的是哨兵然后在改集群-如何迁移数据","children":[]},{"level":2,"title":"1.提问：故障的主库修复后启动会变成备胎吗？","slug":"_1-提问：故障的主库修复后启动会变成备胎吗？","link":"#_1-提问：故障的主库修复后启动会变成备胎吗？","children":[]},{"level":2,"title":"2.实验结论：","slug":"_2-实验结论：","link":"#_2-实验结论：","children":[]},{"level":2,"title":"3.主动发起集群角色切换：","slug":"_3-主动发起集群角色切换：","link":"#_3-主动发起集群角色切换：","children":[]},{"level":2,"title":"1.模拟场景：迁移数据时人为中断了，导致槽的状态不对","slug":"_1-模拟场景：迁移数据时人为中断了，导致槽的状态不对","link":"#_1-模拟场景：迁移数据时人为中断了，导致槽的状态不对","children":[]},{"level":2,"title":"2.使用工具修复：","slug":"_2-使用工具修复：","link":"#_2-使用工具修复：","children":[]},{"level":2,"title":"3.手动修复：","slug":"_3-手动修复：","link":"#_3-手动修复：","children":[]},{"level":2,"title":"1.新版本直接使用工具迁移","slug":"_1-新版本直接使用工具迁移","link":"#_1-新版本直接使用工具迁移","children":[]},{"level":2,"title":"0.使用自带工具分析","slug":"_0-使用自带工具分析","link":"#_0-使用自带工具分析","children":[]},{"level":2,"title":"1.使用第三方工具分析","slug":"_1-使用第三方工具分析","link":"#_1-使用第三方工具分析","children":[{"level":3,"title":"1.安装命令","slug":"_1-安装命令","link":"#_1-安装命令","children":[]},{"level":3,"title":"2.生成测试数据","slug":"_2-生成测试数据","link":"#_2-生成测试数据","children":[]},{"level":3,"title":"3.执行bgsave生成rdb文件","slug":"_3-执行bgsave生成rdb文件","link":"#_3-执行bgsave生成rdb文件","children":[]},{"level":3,"title":"4.使用工具分析","slug":"_4-使用工具分析","link":"#_4-使用工具分析","children":[]},{"level":3,"title":"5.过滤分析","slug":"_5-过滤分析","link":"#_5-过滤分析","children":[]},{"level":3,"title":"6.汇报领导","slug":"_6-汇报领导","link":"#_6-汇报领导","children":[]}]},{"level":2,"title":"1.设置最大内存限制","slug":"_1-设置最大内存限制","link":"#_1-设置最大内存限制","children":[]},{"level":2,"title":"2.内存回收机制","slug":"_2-内存回收机制","link":"#_2-内存回收机制","children":[]},{"level":2,"title":"3.生产上redis限制多大内存","slug":"_3-生产上redis限制多大内存","link":"#_3-生产上redis限制多大内存","children":[]}],"relativePath":"pages/posts/Redis-5.x知识体系梳理.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Redis-5.x知识体系梳理.md","lastUpdated":1671090556000}'),A={name:"pages/posts/Redis-5.x知识体系梳理.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){p("pageData",c)}},h=s("h1",{id:"redis-5-x",tabindex:"-1"},[l("Redis-5.x "),s("a",{class:"header-anchor",href:"#redis-5-x","aria-hidden":"true"},"#")],-1),_=s("h1",{id:"第1章-关系型与非关系型",tabindex:"-1"},[l("第1章 关系型与非关系型 "),s("a",{class:"header-anchor",href:"#第1章-关系型与非关系型","aria-hidden":"true"},"#")],-1),y=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"关系型： mysql oracle")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"非关系型：redis mongo ES ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),D=s("h1",{id:"第2章-redis重要特性",tabindex:"-1"},[l("第2章 Redis重要特性 "),s("a",{class:"header-anchor",href:"#第2章-redis重要特性","aria-hidden":"true"},"#")],-1),u=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SWIFT")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.速度快")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  c语言写的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  代码优雅")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  单线程架构 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.支持多种数据结构")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  字符串，哈希，列表，集合，有序集合，地理位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.丰富的功能")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  天然计数器")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  健过期功能")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  消息队列")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.支持客户端语言多")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  php,java,python")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.数据持久化")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  所有的数据都运行在内存中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  支持2种格式持久化数据AOF RDB AOF&RDB")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6.自带多种高可用架构")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  主从")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  哨兵")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  集群")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),g=s("h1",{id:"第3章-redis应用场景",tabindex:"-1"},[l("第3章 redis应用场景 "),s("a",{class:"header-anchor",href:"#第3章-redis应用场景","aria-hidden":"true"},"#")],-1),v=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.缓存-键过期时间")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  把session会话存在redis,过期删除")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  缓存用户信息，缓存Mysql部分数据，用户先访问redis，redis没有再访问mysql，然后回写给redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  商城优惠卷过期时间")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.排行榜-列表&有序集合")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  热度/点击数排行榜")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  直播间礼物积分排行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.计数器-天然支持计数器")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  帖子浏览数")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  视频播放数")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  评论数")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  点赞/踩")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.社交网络-集合")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  粉丝")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  共同好友 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  兴趣爱好")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  标签")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.消息队列-发布订阅")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  配合ELK缓存收集来的日志")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k=s("h1",{id:"第4章-redis安装部署",tabindex:"-1"},[l("第4章 Redis安装部署 "),s("a",{class:"header-anchor",href:"#第4章-redis安装部署","aria-hidden":"true"},"#")],-1),b=s("h2",{id:"_1-redis官网",tabindex:"-1"},[l("1.redis官网 "),s("a",{class:"header-anchor",href:"#_1-redis官网","aria-hidden":"true"},"#")],-1),f=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CPP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://redis.io/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),m=s("h2",{id:"_2-版本选择",tabindex:"-1"},[l("2.版本选择 "),s("a",{class:"header-anchor",href:"#_2-版本选择","aria-hidden":"true"},"#")],-1),S=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.x     very old")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.x     redis-cluster ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.x     混合持久化")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.x     新增加了流处理类型 最新稳定版 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E=s("h2",{id:"_3-规划目录",tabindex:"-1"},[l("3.规划目录 "),s("a",{class:"header-anchor",href:"#_3-规划目录","aria-hidden":"true"},"#")],-1),x=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KOTLIN")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/data/soft  下载目录  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/opt/redis_6379/{conf,logs,pid} 安装目录,日志目录,pid目录,配置目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/data/redis_6379/  数据目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),R=s("h2",{id:"_4-安装命令",tabindex:"-1"},[l("4.安装命令 "),s("a",{class:"header-anchor",href:"#_4-安装命令","aria-hidden":"true"},"#")],-1),O=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GO")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir /data/soft -p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /data/soft ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"wget http://download.redis.io/releases/redis-5.0.7.tar.gz")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tar xf redis-5.0.7.tar.gz -C /opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ln -s /opt/redis-5.0.7 /opt/redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /opt/redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"make ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"make install ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T=s("h2",{id:"_5-配置文件",tabindex:"-1"},[l("5.配置文件 "),s("a",{class:"header-anchor",href:"#_5-配置文件","aria-hidden":"true"},"#")],-1),L=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /opt/redis_6379/{conf,pid,logs}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /data/redis_6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/opt/redis_6379/conf/redis_6379.conf<< EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemonize yes ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind 127.0.0.1 10.0.0.51")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"port 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pidfile /opt/redis_6379/pid/redis_6379.pid")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"logfile /opt/redis_6379/logs/redis_6379.log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),w=s("h2",{id:"_6-启动命令",tabindex:"-1"},[l("6.启动命令 "),s("a",{class:"header-anchor",href:"#_6-启动命令","aria-hidden":"true"},"#")],-1),U=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-server /opt/redis_6379/conf/redis_6379.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),I=s("h2",{id:"_7-检查",tabindex:"-1"},[l("7.检查 "),s("a",{class:"header-anchor",href:"#_7-检查","aria-hidden":"true"},"#")],-1),B=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ps -ef|grep redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"netstat -lntup|grep 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H=s("h2",{id:"_8-连接redis终端",tabindex:"-1"},[l("8.连接redis终端 "),s("a",{class:"header-anchor",href:"#_8-连接redis终端","aria-hidden":"true"},"#")],-1),N=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@db01 ~]# redis-cli")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> set k1 v1 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OK")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> get k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"v1"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),F=s("h2",{id:"_9-关闭命令",tabindex:"-1"},[l("9.关闭命令 "),s("a",{class:"header-anchor",href:"#_9-关闭命令","aria-hidden":"true"},"#")],-1),Z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kill ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},">SHUTDOWN")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- redis-cli shutdown")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),j=s("h2",{id:"_10-system启动配置",tabindex:"-1"},[l("10.system启动配置 "),s("a",{class:"header-anchor",href:"#_10-system启动配置","aria-hidden":"true"},"#")],-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"groupadd -g 1000 redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"useradd -u 1000 -g 1000 -M -s /sbin/nologin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /data/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /opt/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/usr/lib/systemd/system/redis.service<<EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=Redis persistent key-value database")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network-online.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Wants=network-online.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/bin/redis /opt/redis_6379/conf/redis_6379.conf --supervised systemd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 6379 shutdown")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=notify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Group=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RuntimeDirectory=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RuntimeDirectoryMode=0755")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$=s("h1",{id:"第5章-redis全局命令",tabindex:"-1"},[l("第5章 Redis全局命令 "),s("a",{class:"header-anchor",href:"#第5章-redis全局命令","aria-hidden":"true"},"#")],-1),M=s("p",null,"全局命令是指对所有数据类型都通用的命令",-1),G=s("h2",{id:"_0-redis数据格式",tabindex:"-1"},[l("0.redis数据格式 "),s("a",{class:"header-anchor",href:"#_0-redis数据格式","aria-hidden":"true"},"#")],-1),q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"key:value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"键:值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K=s("h2",{id:"_1-写入测试key",tabindex:"-1"},[l("1.写入测试key "),s("a",{class:"header-anchor",href:"#_1-写入测试key","aria-hidden":"true"},"#")],-1),V=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k2 v2 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k3 v3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y=s("h2",{id:"_2-查看所有的key",tabindex:"-1"},[l("2.查看所有的key "),s("a",{class:"header-anchor",href:"#_2-查看所有的key","aria-hidden":"true"},"#")],-1),z=s("p",null,"！！！危险命令！！！此操作未满30岁禁止请在家人的看管下执行",-1),W=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"keys *")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),J=s("h2",{id:"_3-查看有多少个key",tabindex:"-1"},[l("3.查看有多少个key "),s("a",{class:"header-anchor",href:"#_3-查看有多少个key","aria-hidden":"true"},"#")],-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DBSIZE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q=s("h2",{id:"_4-查看某个key是否存在",tabindex:"-1"},[l("4.查看某个Key是否存在 "),s("a",{class:"header-anchor",href:"#_4-查看某个key是否存在","aria-hidden":"true"},"#")],-1),ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXISTS k1 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"状态码：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0 表示这个key不存在 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 表示这个key存在")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"N 表示存在N个key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ls=s("h2",{id:"_5-删除key",tabindex:"-1"},[l("5.删除key "),s("a",{class:"header-anchor",href:"#_5-删除key","aria-hidden":"true"},"#")],-1),ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEL k1 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEL k1 k2 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"状态码：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0   表示这个key不存在")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1   表示这个key存在，并且删除成功了")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"N   表示N个key存在，并且删除成功了N个key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),es=s("h2",{id:"_6-键过期",tabindex:"-1"},[l("6.键过期 "),s("a",{class:"header-anchor",href:"#_6-键过期","aria-hidden":"true"},"#")],-1),as=s("p",null,"设置过期时间",-1),cs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPIRE k1 10")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"状态码：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0   这个key不存在")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1   这个key存在，并且设置过期时间成功")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),is=s("p",null,"查看keys是否过期",-1),os=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TTL k1 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"状态码：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-1  这个key存在,并且没有设定存活周期，永不过期")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-2  这个key不存在")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"N   这个key存在，并且在N秒后过期")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ts=s("p",null,"取消过期时间：",-1),rs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第一种方法：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PERSIST k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第二种方法：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"结论：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"过期后的key会被直接删除")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ps=s("h1",{id:"第6章-字符串操作",tabindex:"-1"},[l("第6章 字符串操作 "),s("a",{class:"header-anchor",href:"#第6章-字符串操作","aria-hidden":"true"},"#")],-1),ds=s("h2",{id:"_1-设置一个key",tabindex:"-1"},[l("1.设置一个key "),s("a",{class:"header-anchor",href:"#_1-设置一个key","aria-hidden":"true"},"#")],-1),Cs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),As=s("h2",{id:"_2-查看一个key",tabindex:"-1"},[l("2.查看一个key "),s("a",{class:"header-anchor",href:"#_2-查看一个key","aria-hidden":"true"},"#")],-1),hs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"get k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_s=s("h2",{id:"_3-设置多个key",tabindex:"-1"},[l("3.设置多个key "),s("a",{class:"header-anchor",href:"#_3-设置多个key","aria-hidden":"true"},"#")],-1),ys=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MSET k1 v1 k2 v2 k3 v3 k4 v4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ds=s("h2",{id:"_4-查看多个key",tabindex:"-1"},[l("4.查看多个key "),s("a",{class:"header-anchor",href:"#_4-查看多个key","aria-hidden":"true"},"#")],-1),us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MGET k1 k2 k3 k4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gs=s("h2",{id:"_5-天然计数器",tabindex:"-1"},[l("5.天然计数器 "),s("a",{class:"header-anchor",href:"#_5-天然计数器","aria-hidden":"true"},"#")],-1),vs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"加1:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SET k1 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"INCR k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GET k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"加N：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"INCRBY k1 100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"减1:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"INCRBY k1 -1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"减N:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"INCRBY k1 -100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ks=s("h1",{id:"第7章-列表操作",tabindex:"-1"},[l("第7章 列表操作 "),s("a",{class:"header-anchor",href:"#第7章-列表操作","aria-hidden":"true"},"#")],-1),bs=s("h2",{id:"_1-插入列表",tabindex:"-1"},[l("1.插入列表 "),s("a",{class:"header-anchor",href:"#_1-插入列表","aria-hidden":"true"},"#")],-1),fs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LPUSH: 从列表左侧插入数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RPUSH: 从列表右侧插入数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ms=s("h2",{id:"_2-查看列表长度",tabindex:"-1"},[l("2.查看列表长度 "),s("a",{class:"header-anchor",href:"#_2-查看列表长度","aria-hidden":"true"},"#")],-1),Ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LLEN list1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Es=s("h2",{id:"_3-查看列表内容",tabindex:"-1"},[l("3.查看列表内容 "),s("a",{class:"header-anchor",href:"#_3-查看列表内容","aria-hidden":"true"},"#")],-1),xs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LRANGE list1 0 -1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rs=s("h2",{id:"_4-删除列表元素",tabindex:"-1"},[l("4.删除列表元素 "),s("a",{class:"header-anchor",href:"#_4-删除列表元素","aria-hidden":"true"},"#")],-1),Os=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LPOP: 从列表左边删除一个元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RPOP: 从列表右边删除一个元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LPOP list1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RPOP list1 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ts=s("h2",{id:"_5-删除整个列表",tabindex:"-1"},[l("5.删除整个列表 "),s("a",{class:"header-anchor",href:"#_5-删除整个列表","aria-hidden":"true"},"#")],-1),Ls=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEL list1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ws=s("h1",{id:"第8章-hash操作",tabindex:"-1"},[l("第8章 hash操作 "),s("a",{class:"header-anchor",href:"#第8章-hash操作","aria-hidden":"true"},"#")],-1),Us=s("h2",{id:"_1-mysql数据如何缓存到redis",tabindex:"-1"},[l("1.mysql数据如何缓存到redis "),s("a",{class:"header-anchor",href:"#_1-mysql数据如何缓存到redis","aria-hidden":"true"},"#")],-1),Is=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mysql存储格式：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"id name   job  age")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1  bobo   IT   28")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2  json   py   25")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3  hao    bug  26")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hash类型存储格式：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"key    field value field   value        ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user:1   name  bobo  job     IT     age 28")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user:2   name  json  job     py     age 25")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user:3   name  hao   job     bug    age 26")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bs=s("h2",{id:"_2-创建一个hash数据",tabindex:"-1"},[l("2.创建一个Hash数据 "),s("a",{class:"header-anchor",href:"#_2-创建一个hash数据","aria-hidden":"true"},"#")],-1),Hs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMSET user:1 name bobo job IT age 28")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMSET user:2 name json job py age 29")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMSET user:3 name hao job bug age 19 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ns=s("h2",{id:"_3-查看hash里指定的值",tabindex:"-1"},[l("3.查看hash里指定的值 "),s("a",{class:"header-anchor",href:"#_3-查看hash里指定的值","aria-hidden":"true"},"#")],-1),Fs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"select name from user where id =1 ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMGET user:1 name  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMGET user:1 name job age")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Zs=s("h2",{id:"_4-查看hash里所有的值",tabindex:"-1"},[l("4.查看Hash里所有的值 "),s("a",{class:"header-anchor",href:"#_4-查看hash里所有的值","aria-hidden":"true"},"#")],-1),js=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"select * from user where id =1 ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HGETALL user:1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ps=s("h1",{id:"第9章-集合操作-set",tabindex:"-1"},[l("第9章 集合操作 set "),s("a",{class:"header-anchor",href:"#第9章-集合操作-set","aria-hidden":"true"},"#")],-1),$s=s("h2",{id:"_1-创建集合",tabindex:"-1"},[l("1.创建集合 "),s("a",{class:"header-anchor",href:"#_1-创建集合","aria-hidden":"true"},"#")],-1),Ms=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SADD set1 1 2 3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SADD set2 1 3 5 7 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Gs=s("h2",{id:"_2-查看集合成员",tabindex:"-1"},[l("2.查看集合成员 "),s("a",{class:"header-anchor",href:"#_2-查看集合成员","aria-hidden":"true"},"#")],-1),qs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SMEMBERS set1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SMEMBERS set2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ks=s("h2",{id:"_3-查看集合的交集",tabindex:"-1"},[l("3.查看集合的交集 "),s("a",{class:"header-anchor",href:"#_3-查看集合的交集","aria-hidden":"true"},"#")],-1),Vs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> SINTER set1 set2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'1) "1"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2) "3"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ys=s("h2",{id:"_4-查看集合的并集",tabindex:"-1"},[l("4.查看集合的并集 "),s("a",{class:"header-anchor",href:"#_4-查看集合的并集","aria-hidden":"true"},"#")],-1),zs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> SUNION set1 set2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'1) "1"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2) "2"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'3) "3"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'4) "5"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'5) "7"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ws=s("h2",{id:"_5-查看集合的差集",tabindex:"-1"},[l("5.查看集合的差集 "),s("a",{class:"header-anchor",href:"#_5-查看集合的差集","aria-hidden":"true"},"#")],-1),Js=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> SDIFF set1 set2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'1) "2"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> SDIFF set2 set1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'1) "5"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2) "7"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xs=s("h2",{id:"_6-删除一个成员",tabindex:"-1"},[l("6.删除一个成员 "),s("a",{class:"header-anchor",href:"#_6-删除一个成员","aria-hidden":"true"},"#")],-1),Qs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SREM set1 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),sl=s("h2",{id:"_6-注意",tabindex:"-1"},[l("6.注意 "),s("a",{class:"header-anchor",href:"#_6-注意","aria-hidden":"true"},"#")],-1),ll=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"集合不允许出现重复的值，自动去重")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nl=s("h1",{id:"第10章-有序集合操作",tabindex:"-1"},[l("第10章 有序集合操作 "),s("a",{class:"header-anchor",href:"#第10章-有序集合操作","aria-hidden":"true"},"#")],-1),el=s("h2",{id:"_1-添加成员",tabindex:"-1"},[l("1.添加成员 "),s("a",{class:"header-anchor",href:"#_1-添加成员","aria-hidden":"true"},"#")],-1),al=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZADD SZ3 100 json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZADD SZ3 90 bobo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZADD SZ3 99 xiaocancan")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZADD SZ3 98 bughao")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cl=s("h2",{id:"_2-计算成员个数",tabindex:"-1"},[l("2.计算成员个数 "),s("a",{class:"header-anchor",href:"#_2-计算成员个数","aria-hidden":"true"},"#")],-1),il=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZCARD SZ3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ol=s("h2",{id:"_3-计算某个成员分数",tabindex:"-1"},[l("3.计算某个成员分数 "),s("a",{class:"header-anchor",href:"#_3-计算某个成员分数","aria-hidden":"true"},"#")],-1),tl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZSCORE SZ3 json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rl=s("h2",{id:"_4-按照降序查看成员名次：",tabindex:"-1"},[l("4.按照降序查看成员名次： "),s("a",{class:"header-anchor",href:"#_4-按照降序查看成员名次：","aria-hidden":"true"},"#")],-1),pl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANK SZ3 json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANK SZ3 bobo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dl=s("h2",{id:"_5-按照升序查看成员名次：",tabindex:"-1"},[l("5.按照升序查看成员名次： "),s("a",{class:"header-anchor",href:"#_5-按照升序查看成员名次：","aria-hidden":"true"},"#")],-1),Cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZREVRANK SZ3 json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZREVRANK SZ3 bobo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Al=s("h2",{id:"_6-删除成员",tabindex:"-1"},[l("6.删除成员 "),s("a",{class:"header-anchor",href:"#_6-删除成员","aria-hidden":"true"},"#")],-1),hl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZREM SZ3 json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_l=s("h2",{id:"_7-增加成员分数",tabindex:"-1"},[l("7.增加成员分数 "),s("a",{class:"header-anchor",href:"#_7-增加成员分数","aria-hidden":"true"},"#")],-1),yl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZINCRBY SZ3 2 xiaocancan")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZSCORE SZ3 xiaocancan")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dl=s("h2",{id:"_8-返回指定排名范围的成员",tabindex:"-1"},[l("8.返回指定排名范围的成员 "),s("a",{class:"header-anchor",href:"#_8-返回指定排名范围的成员","aria-hidden":"true"},"#")],-1),ul=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANGE SZ3 0 3 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANGE SZ3 0 3 WITHSCORES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gl=s("h2",{id:"_9-返回指定分数范围的成员",tabindex:"-1"},[l("9.返回指定分数范围的成员 "),s("a",{class:"header-anchor",href:"#_9-返回指定分数范围的成员","aria-hidden":"true"},"#")],-1),vl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANGEBYSCORE SZ3 95 100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANGEBYSCORE SZ3 95 100  WITHSCORES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kl=s("h2",{id:"_10-返回指定分数范围的成员的个数",tabindex:"-1"},[l("10.返回指定分数范围的成员的个数 "),s("a",{class:"header-anchor",href:"#_10-返回指定分数范围的成员的个数","aria-hidden":"true"},"#")],-1),bl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZCOUNT SZ3 90 110")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fl=s("h1",{id:"第11章-持久化",tabindex:"-1"},[l("第11章 持久化 "),s("a",{class:"header-anchor",href:"#第11章-持久化","aria-hidden":"true"},"#")],-1),ml=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-4bec444f44920615.png#mirages-width=382&mirages-height=352&mirages-cdn-type=5",alt:"img"})],-1),Sl=s("p",null,"RDB流程图",-1),El=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-e70993005208cde6.png#mirages-width=220&mirages-height=310&mirages-cdn-type=5",alt:"img"})],-1),xl=s("p",null,"AOF流程图",-1),Rl=s("h2",{id:"_1-rdb和aof介绍",tabindex:"-1"},[l("1.RDB和AOF介绍 "),s("a",{class:"header-anchor",href:"#_1-rdb和aof介绍","aria-hidden":"true"},"#")],-1),Ol=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RDB：类似于快照的形式，当前内存里的状态持久化到硬盘里")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"优点：压缩格式/恢复速度快")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"缺点：不是实时的，可能会丢失数据,操作比较重")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"AOF：类似于mysql的binlog，可以设置为每秒/每次操作以追加的形式持久化")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"优点：安全，最多损失1秒的数据，可读")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"缺点：文件比较大，恢复速度慢")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tl=s("h2",{id:"_2-配置rdb",tabindex:"-1"},[l("2.配置RDB "),s("a",{class:"header-anchor",href:"#_2-配置rdb","aria-hidden":"true"},"#")],-1),Ll=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KOTLIN")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"save 900 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"save 300 10")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"save 60 10000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dbfilename redis.rdb")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dir /data/redis_6379/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wl=s("h2",{id:"_3-rdb结论",tabindex:"-1"},[l("3.RDB结论 "),s("a",{class:"header-anchor",href:"#_3-rdb结论","aria-hidden":"true"},"#")],-1),Ul=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.没有配置save参数时，shutdown不会持久化保存")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.没有配置save参数时，可以手动执行bgsave触发持久化")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.在配置了save参数后，shutdown,kill,pkill都会自动触发bgsave")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.恢复的时候，rdb文件名要和配置文件里写的一样。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.RDB高版本兼容低版本，低版本不兼容高版本")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Il=s("h2",{id:"_4-aof配置",tabindex:"-1"},[l("4.AOF配置 "),s("a",{class:"header-anchor",href:"#_4-aof配置","aria-hidden":"true"},"#")],-1),Bl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendonly yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'appendfilename "redis.aof"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendfsync everysec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hl=s("h2",{id:"_5-aof重写机制",tabindex:"-1"},[l("5.AOF重写机制 "),s("a",{class:"header-anchor",href:"#_5-aof重写机制","aria-hidden":"true"},"#")],-1),Nl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"执行的命令   aof记录        redis的数据       ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k1    v1    set k1   k1                 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k2    v2    set k2   k1 k2          ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k3    v3    set k3   k1 k2 k3       ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"del k1      del k1       k2 k3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"del k2      del k2       k3 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"实际有意义的只有一条记录：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fl=s("h2",{id:"_6-aof和rdb实验",tabindex:"-1"},[l("6.aof和rdb实验 "),s("a",{class:"header-anchor",href:"#_6-aof和rdb实验","aria-hidden":"true"},"#")],-1),Zl=s("p",null,"实验背景：",-1),jl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"aof和rdb同时存在的时候，redis重启会读取哪一个数据？")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pl=s("p",null,"实验步骤：",-1),$l=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KOTLIN")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k2 v2 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bgsave ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RDB k1 k2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mv redis.rdb /opt/  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"flushall")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k3 v3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k4 v4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"AOF k3 k4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mv redis.aof /opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rm -rf /data/redis_6379/*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mv /opt/redis.rdb .")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mv /opt/redis.aof .")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-server /opt/redis_6379/conf/redis.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"keys * ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ml=s("p",null,"结论：",-1),Gl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"当aof和rdb同时存在时，重启redis会优先读取aof的内容")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ql=s("h2",{id:"_7-如何选择是rdb还是aof",tabindex:"-1"},[l("7.如何选择是rdb还是aof "),s("a",{class:"header-anchor",href:"#_7-如何选择是rdb还是aof","aria-hidden":"true"},"#")],-1),Kl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CPP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://redis.io/topics/persistence")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.开启混合模式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.开启aof")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.不开启rdb")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.rdb采用定时任务的方式定时备份")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vl=s("h2",{id:"_8-aof文件故障模拟实验结论",tabindex:"-1"},[l("8.aof文件故障模拟实验结论 "),s("a",{class:"header-anchor",href:"#_8-aof文件故障模拟实验结论","aria-hidden":"true"},"#")],-1),Yl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.aof文件损坏之后，使用修复工具，一刀流，从aof文件出错的地方开始到最后全部删掉")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.任何操作之前，先备份数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.aof备份一般情况最多损失1秒的数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zl=s("h2",{id:"_9-实验：如果设置了过期时间，恢复数据会如何处理",tabindex:"-1"},[l("9.实验：如果设置了过期时间，恢复数据会如何处理 "),s("a",{class:"header-anchor",href:"#_9-实验：如果设置了过期时间，恢复数据会如何处理","aria-hidden":"true"},"#")],-1),Wl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.aof文件会记录下过期的时间")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.恢复的时候会去对比记录的过期时间和当前时间，如果超过了，就删除key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.key的过期时间不受备份恢复影响")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jl=s("h1",{id:"第12章-redis用户认证",tabindex:"-1"},[l("第12章 redis用户认证 "),s("a",{class:"header-anchor",href:"#第12章-redis用户认证","aria-hidden":"true"},"#")],-1),Xl=s("h2",{id:"_1-写入配置文件",tabindex:"-1"},[l("1.写入配置文件 "),s("a",{class:"header-anchor",href:"#_1-写入配置文件","aria-hidden":"true"},"#")],-1),Ql=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"requirepass cookzhang")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),sn=s("h2",{id:"_2-使用密码登陆",tabindex:"-1"},[l("2.使用密码登陆 "),s("a",{class:"header-anchor",href:"#_2-使用密码登陆","aria-hidden":"true"},"#")],-1),ln=s("p",null,"第一种：",-1),nn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@db01 ~]# redis-cli ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> AUTH cookzhang")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OK")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1:6379> set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OK")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),en=s("p",null,"第二种：",-1),an=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -a cookz get k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cn=s("h2",{id:"_3-为什么redis的密码认证这么简单？",tabindex:"-1"},[l("3.为什么redis的密码认证这么简单？ "),s("a",{class:"header-anchor",href:"#_3-为什么redis的密码认证这么简单？","aria-hidden":"true"},"#")],-1),on=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.redis一般都部署在内网环境，默认是比较安全的环境")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.有同学担心密码写在配置文件里，开发不允许登陆到Linux服务器上，但是可以连接到redis,设个密码安全些")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tn=s("h1",{id:"第13章-禁用或重命名危险命令",tabindex:"-1"},[l("第13章 禁用或重命名危险命令 "),s("a",{class:"header-anchor",href:"#第13章-禁用或重命名危险命令","aria-hidden":"true"},"#")],-1),rn=s("h2",{id:"_1-禁用危险命令",tabindex:"-1"},[l("1.禁用危险命令 "),s("a",{class:"header-anchor",href:"#_1-禁用危险命令","aria-hidden":"true"},"#")],-1),pn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command CONFIG ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command KEYS ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command SHUTDOWN ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command FLUSHALL ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command DEL ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command FLUSHDB ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dn=s("h2",{id:"_2-来自json的灵魂拷问：shutdown禁用了-让后用kill",tabindex:"-1"},[l("2.来自json的灵魂拷问：shutdown禁用了 让后用kill? "),s("a",{class:"header-anchor",href:"#_2-来自json的灵魂拷问：shutdown禁用了-让后用kill","aria-hidden":"true"},"#")],-1),Cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command CONFIG ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command KEYS ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command SHUTDOWN "qq526195417"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command FLUSHALL ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command DEL "byebye"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'rename-command FLUSHDB ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),An=s("h1",{id:"第14章-redis主从复制",tabindex:"-1"},[l("第14章 Redis主从复制 "),s("a",{class:"header-anchor",href:"#第14章-redis主从复制","aria-hidden":"true"},"#")],-1),hn=s("h2",{id:"_1-快速部署第二台服务器",tabindex:"-1"},[l("1.快速部署第二台服务器 "),s("a",{class:"header-anchor",href:"#_1-快速部署第二台服务器","aria-hidden":"true"},"#")],-1),_n=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz 10.0.0.51:/opt/* /opt/*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir /data/redis_6379/ -p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /opt/redis ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"make install ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#51#52#g' /opt/redis_6379/conf/redis_6379.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-server /opt/redis_6379/conf/redis_6379.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yn=s("h2",{id:"_2-db01插入测试命令",tabindex:"-1"},[l("2.db01插入测试命令 "),s("a",{class:"header-anchor",href:"#_2-db01插入测试命令","aria-hidden":"true"},"#")],-1),Dn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for i in {1..1000};do redis-cli -h 10.0.0.51 set ${i} ${i};done")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),un=s("h2",{id:"_3-配置主从复制",tabindex:"-1"},[l("3.配置主从复制 "),s("a",{class:"header-anchor",href:"#_3-配置主从复制","aria-hidden":"true"},"#")],-1),gn=s("p",null,"方法1:临时生效",-1),vn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.52 slaveof 10.0.0.51 6379 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kn=s("p",null,"方法2:写进配置文件",-1),bn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"slaveof 10.0.0.51 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fn=s("h2",{id:"_4-主从复制的流程",tabindex:"-1"},[l("4.主从复制的流程 "),s("a",{class:"header-anchor",href:"#_4-主从复制的流程","aria-hidden":"true"},"#")],-1),mn=s("p",null,"1.简单流程：",-1),Sn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.从节点发送同步请求到主节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.主节点接收到从节点的请求之后,做了如下操作")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - 立即执行bgsave将当前内存里的数据持久化到磁盘上")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - 持久化完成之后,将rdb文件发送给从节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.从节点从主节点接收到rdb文件之后,做了如下操作")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - 清空自己的数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - 载入从主节点接收的rdb文件到自己的内存里")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.后面的操作就是和主节点实时的了")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),En=s("h2",{id:"_5-取消复制",tabindex:"-1"},[l("5.取消复制 "),s("a",{class:"header-anchor",href:"#_5-取消复制","aria-hidden":"true"},"#")],-1),xn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SLAVEOF no one")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rn=s("h2",{id:"_6-主从复制注意",tabindex:"-1"},[l("6.主从复制注意 "),s("a",{class:"header-anchor",href:"#_6-主从复制注意","aria-hidden":"true"},"#")],-1),On=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.从节点只读不可写")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.从节点不会自动故障转移,它会一直同步主节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.52:6379> set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"(error) READONLY You can't write against a read only slave.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.主从复制故障转移需要人工介入")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - 修改代码指向REDIS的IP地址")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - 从节点需要执行SLAVEOF no one")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.从节点会清空自己原有的数据,如果同步的对象写错了,就会导致数据丢失")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.从库和主库后续的同步依靠的是redis的SYNC协议，而不是RDB文件，RDB文件只是第一次建立同步时使用。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6.从库也可以正常的持久化文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tn=s("h2",{id:"_7-安全的操作",tabindex:"-1"},[l("7.安全的操作 "),s("a",{class:"header-anchor",href:"#_7-安全的操作","aria-hidden":"true"},"#")],-1),Ln=s("p",null,"无论是同步,无论是主节点还是从节点,请先备份一下数据",-1),wn=s("h1",{id:"第15章-redis哨兵",tabindex:"-1"},[l("第15章 Redis哨兵 "),s("a",{class:"header-anchor",href:"#第15章-redis哨兵","aria-hidden":"true"},"#")],-1),Un=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-c5cf045607671b40.png#mirages-width=1200&mirages-height=605&mirages-cdn-type=5",alt:"img"})],-1),In=s("h2",{id:"_1-哨兵的作用",tabindex:"-1"},[l("1.哨兵的作用 "),s("a",{class:"header-anchor",href:"#_1-哨兵的作用","aria-hidden":"true"},"#")],-1),Bn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.解决了主从复制故障需要人为干预的问题")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.提供了自动的高可用解决方案")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hn=s("h2",{id:"_2-目录和端口规划",tabindex:"-1"},[l("2.目录和端口规划 "),s("a",{class:"header-anchor",href:"#_2-目录和端口规划","aria-hidden":"true"},"#")],-1),Nn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis节点： 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"哨兵节点：    26379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fn=s("h2",{id:"_3-部署3台redis单节点",tabindex:"-1"},[l("3.部署3台redis单节点 "),s("a",{class:"header-anchor",href:"#_3-部署3台redis单节点","aria-hidden":"true"},"#")],-1),Zn=s("h3",{id:"db01操作：",tabindex:"-1"},[l("db01操作： "),s("a",{class:"header-anchor",href:"#db01操作：","aria-hidden":"true"},"#")],-1),jn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/opt/redis_6379/conf/redis_6379.conf <<EOF   ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemonize yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind 127.0.0.1 10.0.0.51")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"port 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'pidfile "/opt/redis_6379/pid/redis_6379.pid"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'logfile "/opt/redis_6379/logs/redis_6379.log"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dbfilename "redis.rdb"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dir "/data/redis_6379"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendonly yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'appendfilename "redis.aof"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendfsync everysec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pn=s("h3",{id:"db02和db03的操作：",tabindex:"-1"},[l("db02和db03的操作： "),s("a",{class:"header-anchor",href:"#db02和db03的操作：","aria-hidden":"true"},"#")],-1),$n=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill redis ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rm -rf /opt/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz 10.0.0.51:/usr/local/bin/redis-*  /usr/local/bin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz 10.0.0.51:/usr/lib/systemd/system/redis.service /usr/lib/systemd/system/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir /opt/redis_6379/{conf,logs,pid} -p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir /data/redis_6379 -p")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/opt/redis_6379/conf/redis_6379.conf <<EOF   ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemonize yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind 127.0.0.1 $(ifconfig eth0|awk 'NR==2{print $2}')")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"port 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'pidfile "/opt/redis_6379/pid/redis_6379.pid"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'logfile "/opt/redis_6379/logs/redis_6379.log"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dbfilename "redis.rdb"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dir "/data/redis_6379"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendonly yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'appendfilename "redis.aof"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendfsync everysec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"useradd redis -M -s /sbin/nologin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /opt/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /data/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mn=s("h2",{id:"_4-配置主从复制",tabindex:"-1"},[l("4.配置主从复制 "),s("a",{class:"header-anchor",href:"#_4-配置主从复制","aria-hidden":"true"},"#")],-1),Gn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.52 slaveof 10.0.0.51 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.53 slaveof 10.0.0.51 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.51 info Replication")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),qn=s("h2",{id:"_5-部署哨兵节点-3台机器都操作",tabindex:"-1"},[l("5.部署哨兵节点-3台机器都操作 "),s("a",{class:"header-anchor",href:"#_5-部署哨兵节点-3台机器都操作","aria-hidden":"true"},"#")],-1),Kn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KOTLIN")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /data/redis_26379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /opt/redis_26379/{conf,pid,logs}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/opt/redis_26379/conf/redis_26379.conf << EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind $(ifconfig eth0|awk 'NR==2{print $2}')")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"port 26379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemonize yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"logfile /opt/redis_26379/logs/redis_26379.log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dir /data/redis_26379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel monitor myredis 10.0.0.51 6379 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel down-after-milliseconds myredis 3000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel parallel-syncs myredis 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel failover-timeout myredis 18000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis  /data/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis  /opt/redis*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vn=s("p",null,"参数解释：",-1),Yn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel monitor mymaster 10.0.0.51 6379 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#mymaster 主节点别名 主节点 ip 和端口， 判断主节点失败， 两个 sentinel 节点同意")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel down-after-milliseconds mymaster 3000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#选项指定了 Sentinel 认为服务器已经断线所需的毫秒数。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel parallel-syncs mymaster 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#向新的主节点发起复制操作的从节点个数， 1 轮询发起复制")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sentinel failover-timeout mymaster 180000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#故障转移超时时间")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zn=s("h2",{id:"_6-编写哨兵system配置文件-3台机器都操作",tabindex:"-1"},[l("6.编写哨兵system配置文件-3台机器都操作 "),s("a",{class:"header-anchor",href:"#_6-编写哨兵system配置文件-3台机器都操作","aria-hidden":"true"},"#")],-1),Wn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/usr/lib/systemd/system/redis-sentinel.service<<EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=Redis persistent key-value database")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network-online.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Wants=network-online.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/bin/redis-sentinel /opt/redis_26379/conf/redis_26379.conf --supervised systemd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 26379 shutdown")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=notify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Group=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RuntimeDirectory=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RuntimeDirectoryMode=0755")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jn=s("h2",{id:"_7-启动哨兵并检查",tabindex:"-1"},[l("7.启动哨兵并检查 "),s("a",{class:"header-anchor",href:"#_7-启动哨兵并检查","aria-hidden":"true"},"#")],-1),Xn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-sentinel ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qn=s("h2",{id:"_8-验证主节点",tabindex:"-1"},[l("8.验证主节点 "),s("a",{class:"header-anchor",href:"#_8-验证主节点","aria-hidden":"true"},"#")],-1),se=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.51 -p 26379 Sentinel get-master-addr-by-name myredis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.52 -p 26379 Sentinel get-master-addr-by-name myredis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.53 -p 26379 Sentinel get-master-addr-by-name myredis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),le=s("h2",{id:"_9-模拟故障转移",tabindex:"-1"},[l("9.模拟故障转移 "),s("a",{class:"header-anchor",href:"#_9-模拟故障转移","aria-hidden":"true"},"#")],-1),ne=s("p",null,"关闭主节点服务上的所有redis进程 观察其他2个节点会不会发生选举 查看配置文件里会不会自动更新 查看新的主节点能不能写入 查看从节点能否正常同步",-1),ee=s("h2",{id:"_10-模拟故障修复上线",tabindex:"-1"},[l("10.模拟故障修复上线 "),s("a",{class:"header-anchor",href:"#_10-模拟故障修复上线","aria-hidden":"true"},"#")],-1),ae=s("p",null,"启动单节点 启动哨兵",-1),ce=s("h2",{id:"_11-来自json的灵魂发问：能够给redis-节点加权-来确定优先备选主节点嘛",tabindex:"-1"},[l("11.来自json的灵魂发问：能够给redis 节点加权 来确定优先备选主节点嘛? "),s("a",{class:"header-anchor",href:"#_11-来自json的灵魂发问：能够给redis-节点加权-来确定优先备选主节点嘛","aria-hidden":"true"},"#")],-1),ie=s("p",null,"流程说明： 设置其他节点的权重为0 手动发起重新选举 观察所有节点消息是否同步 观察切换结果是否符合预期",-1),oe=s("p",null,"命令解释：",-1),te=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"查询命令:CONFIG GET slave-priority")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"设置命令:CONFIG SET slave-priority 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"主动切换:sentinel failover myredis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),re=s("p",null,"操作命令：",-1),pe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.52 -p 6379 CONFIG SET slave-priority 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.53 -p 6379 CONFIG SET slave-priority 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.51 -p 26379 sentinel failover myredis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),de=s("p",null,"验证选举结果：",-1),Ce=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h 10.0.0.51 -p 26379 Sentinel get-master-addr-by-name myredis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ae=s("h1",{id:"第16章-手动部署redis集群",tabindex:"-1"},[l("第16章 手动部署Redis集群 "),s("a",{class:"header-anchor",href:"#第16章-手动部署redis集群","aria-hidden":"true"},"#")],-1),he=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-f6153b9ec44340b7.png#mirages-width=1200&mirages-height=668&mirages-cdn-type=5",alt:"img"})],-1),_e=s("p",null,"集群架构图1",-1),ye=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-4c60e0aa042e4599.png#mirages-width=1200&mirages-height=749&mirages-cdn-type=5",alt:"img"})],-1),De=s("p",null,"集群架构图2",-1),ue=s("h2",{id:"_1-烧饼的不足",tabindex:"-1"},[l("1.烧饼的不足 "),s("a",{class:"header-anchor",href:"#_1-烧饼的不足","aria-hidden":"true"},"#")],-1),ge=s("p",null,"资源利用率不高 主库压力大 连接过程繁琐",-1),ve=s("h2",{id:"_2-集群重要概念",tabindex:"-1"},[l("2.集群重要概念 "),s("a",{class:"header-anchor",href:"#_2-集群重要概念","aria-hidden":"true"},"#")],-1),ke=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis集群，无论有几个节点，一共只有16384个槽")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"所有的槽位都必须分配，哪怕有1个槽位不正常，整个集群都不能用")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"每个节点的槽的顺序不重要，重点是数量")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hash算法足够随机，足够平均")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"每个槽被分配到数据的概率是相当的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"集群的高可用依赖于主从复制")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"集群拥有自己的配置文件，动态更新，不要手欠修改")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"集群通讯会使用基础端口号+10000的端口，这个是自动创建的，不是配置文件配置的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"集群槽位分配比例允许误差在%2之间")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),be=s("h2",{id:"_3-目录规划",tabindex:"-1"},[l("3.目录规划 "),s("a",{class:"header-anchor",href:"#_3-目录规划","aria-hidden":"true"},"#")],-1),fe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"主节点  6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"从节点  6381")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),me=s("h2",{id:"_4-db01的操作",tabindex:"-1"},[l("4.db01的操作 "),s("a",{class:"header-anchor",href:"#_4-db01的操作","aria-hidden":"true"},"#")],-1),Se=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"JSX")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssh-keygen")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssh-copy-id 10.0.0.52")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssh-copy-id 10.0.0.53")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /opt/redis_{6380,6381}/{conf,logs,pid}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /data/redis_{6380,6381}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/opt/redis_6380/conf/redis_6380.conf<<EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind 10.0.0.51")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"port 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemonize yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'pidfile "/opt/redis_6380/pid/redis_6380.pid"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'logfile "/opt/redis_6380/logs/redis_6380.log"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dbfilename "redis_6380.rdb"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dir "/data/redis_6380/"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendonly yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'appendfilename "redis.aof"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendfsync everysec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cluster-enabled yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cluster-config-file nodes_6380.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cluster-node-timeout 15000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp redis_6380/conf/redis_6380.conf redis_6381/conf/redis_6381.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#6380#6381#g' redis_6381/conf/redis_6381.conf ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /opt/redis_*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /data/redis_*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >/usr/lib/systemd/system/redis-master.service<<EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=Redis persistent key-value database")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network-online.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Wants=network-online.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/bin/redis-server /opt/redis_6380/conf/redis_6380.conf --supervised systemd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 6380 shutdown")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=notify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Group=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RuntimeDirectory=redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RuntimeDirectoryMode=0755")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /usr/lib/systemd/system/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp redis-master.service redis-slave.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#6380#6381#g' redis-slave.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-master")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-slave")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ps -ef|grep redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz /opt/redis_638* 10.0.0.52:/opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz /opt/redis_638* 10.0.0.53:/opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz /usr/lib/systemd/system/redis-*.service 10.0.0.52:/usr/lib/systemd/system/redis-master.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rsync -avz /usr/lib/systemd/system/redis-*.service 10.0.0.53:/usr/lib/systemd/system/redis-master.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ee=s("h2",{id:"_5-db02的操作",tabindex:"-1"},[l("5.db02的操作 "),s("a",{class:"header-anchor",href:"#_5-db02的操作","aria-hidden":"true"},"#")],-1),xe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'find /opt/redis_638* -type f -name "*.conf"|xargs sed -i "/bind/s#51#52#g"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /usr/lib/systemd/system/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#51#52#g' redis-*.service ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir –p /data/redis_{6380,6381}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /opt/redis_*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /data/redis_*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-master")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-slave")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ps -ef|grep redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Re=s("h2",{id:"_6-db03的操作",tabindex:"-1"},[l("6.db03的操作 "),s("a",{class:"header-anchor",href:"#_6-db03的操作","aria-hidden":"true"},"#")],-1),Oe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pkill redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'find /opt/redis_638* -type f -name "*.conf"|xargs sed -i "/bind/s#51#53#g"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /usr/lib/systemd/system/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#51#53#g' redis-*.service ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir –p /data/redis_{6380,6381}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /opt/redis_*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chown -R redis:redis /data/redis_*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-master")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis-slave")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ps -ef|grep redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Te=s("h2",{id:"_7-集群手动发现节点",tabindex:"-1"},[l("7.集群手动发现节点 "),s("a",{class:"header-anchor",href:"#_7-集群手动发现节点","aria-hidden":"true"},"#")],-1),Le=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.51 6381")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6381")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6381")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),we=s("h2",{id:"_8-集群手动分配槽位",tabindex:"-1"},[l("8.集群手动分配槽位 "),s("a",{class:"header-anchor",href:"#_8-集群手动分配槽位","aria-hidden":"true"},"#")],-1),Ue=s("h3",{id:"_1-槽位规划",tabindex:"-1"},[l("1.槽位规划 "),s("a",{class:"header-anchor",href:"#_1-槽位规划","aria-hidden":"true"},"#")],-1),Ie=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"db01:6380 5461  0-5460")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"db02:6380 5461  5461-10921")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"db03:6380 5462  10922-16383")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Be=s("h3",{id:"_2-分配槽位",tabindex:"-1"},[l("2.分配槽位 "),s("a",{class:"header-anchor",href:"#_2-分配槽位","aria-hidden":"true"},"#")],-1),He=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ne=s("h3",{id:"_3-查看集群状态",tabindex:"-1"},[l("3.查看集群状态 "),s("a",{class:"header-anchor",href:"#_3-查看集群状态","aria-hidden":"true"},"#")],-1),Fe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER INFO")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ze=s("h2",{id:"_9-手动部署复制关系",tabindex:"-1"},[l("9.手动部署复制关系 "),s("a",{class:"header-anchor",href:"#_9-手动部署复制关系","aria-hidden":"true"},"#")],-1),je=s("h3",{id:"_0-先获取集群节点信息",tabindex:"-1"},[l("0.先获取集群节点信息 "),s("a",{class:"header-anchor",href:"#_0-先获取集群节点信息","aria-hidden":"true"},"#")],-1),Pe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$e=s("h3",{id:"_1-先删除所有6381的内容和不需要内容",tabindex:"-1"},[l("1.先删除所有6381的内容和不需要内容 "),s("a",{class:"header-anchor",href:"#_1-先删除所有6381的内容和不需要内容","aria-hidden":"true"},"#")],-1),Me=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6380的ID 10.0.0.51")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6380的ID 10.0.0.53")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6380的ID 10.0.0.52")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ge=s("h3",{id:"_2-画图",tabindex:"-1"},[l("2.画图 "),s("a",{class:"header-anchor",href:"#_2-画图","aria-hidden":"true"},"#")],-1),qe=s("h3",{id:"_3-确定复制关系",tabindex:"-1"},[l("3.确定复制关系 "),s("a",{class:"header-anchor",href:"#_3-确定复制关系","aria-hidden":"true"},"#")],-1),Ke=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6381 CLUSTER REPLICATE 52的6380的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6381 CLUSTER REPLICATE 53的6380的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6381 CLUSTER REPLICATE 51的6380的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ve=s("h3",{id:"_4-检查复制关系",tabindex:"-1"},[l("4.检查复制关系 "),s("a",{class:"header-anchor",href:"#_4-检查复制关系","aria-hidden":"true"},"#")],-1),Ye=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ze=s("h2",{id:"_10-集群插入数据",tabindex:"-1"},[l("10.集群插入数据 "),s("a",{class:"header-anchor",href:"#_10-集群插入数据","aria-hidden":"true"},"#")],-1),We=s("h3",{id:"_1-尝试插入一条数据发现报错",tabindex:"-1"},[l("1.尝试插入一条数据发现报错 "),s("a",{class:"header-anchor",href:"#_1-尝试插入一条数据发现报错","aria-hidden":"true"},"#")],-1),Je=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.51:6380> set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"(error) MOVED 12706 10.0.0.53:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xe=s("h3",{id:"_2-目前的现象",tabindex:"-1"},[l("2.目前的现象 "),s("a",{class:"header-anchor",href:"#_2-目前的现象","aria-hidden":"true"},"#")],-1),Qe=s("p",null,"在db01的6380节点插入数据提示报错 报错内容提示应该移动到db03的6380上 在db03的6380上执行相同的插入命令可以插入成功 在db01的6380节点插入数据有时候可以,有时候不行 使用-c参数后,可以正常插入命令,并且节点切换到了提示的对应节点上",-1),sa=s("h3",{id:"_3-问题原因",tabindex:"-1"},[l("3.问题原因 "),s("a",{class:"header-anchor",href:"#_3-问题原因","aria-hidden":"true"},"#")],-1),la=s("p",null,"因为集群模式有ASK路由规则,加入-c参数后,会自动跳转到目标节点处理 并且最后由目标节点返回信息",-1),na=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-328242f763d20b0b.png#mirages-width=1886&mirages-height=952&mirages-cdn-type=5",alt:"img"})],-1),ea=s("h2",{id:"_11-验证集群是否足够足迹足够平均",tabindex:"-1"},[l("11.验证集群是否足够足迹足够平均 "),s("a",{class:"header-anchor",href:"#_11-验证集群是否足够足迹足够平均","aria-hidden":"true"},"#")],-1),aa=s("h3",{id:"_0-写入测试数据",tabindex:"-1"},[l("0.写入测试数据 "),s("a",{class:"header-anchor",href:"#_0-写入测试数据","aria-hidden":"true"},"#")],-1),ca=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for i in {1..10000};do redis-cli -c -h db01 -p 6380 set k_${i} v_${i};echo ${i};done")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ia=s("h3",{id:"_1-验证足够平均",tabindex:"-1"},[l("1.验证足够平均: "),s("a",{class:"header-anchor",href:"#_1-验证足够平均","aria-hidden":"true"},"#")],-1),oa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DBSIZE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ta=s("h3",{id:"_2-验证足够随机：",tabindex:"-1"},[l("2.验证足够随机： "),s("a",{class:"header-anchor",href:"#_2-验证足够随机：","aria-hidden":"true"},"#")],-1),ra=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SWIFT")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h db03 -p 6380 keys \\* > keys_all.txt")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`cat keys_all.txt |awk -F "_" '{print $2}'|sort -rn `)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pa=s("h3",{id:"_3-允许节点的key在2-误差的依据来源：",tabindex:"-1"},[l("3.允许节点的key在2%误差的依据来源： "),s("a",{class:"header-anchor",href:"#_3-允许节点的key在2-误差的依据来源：","aria-hidden":"true"},"#")],-1),da=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@db01 /opt/redis/src]# redis-cli --cluster rebalance 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},">>> Performing Cluster Check (using node 10.0.0.51:6380)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[OK] All nodes agree about slots configuration.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},">>> Check for open slots...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},">>> Check slots coverage...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[OK] All 16384 slots covered.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"*** No rebalancing needed! All nodes are within the 2.00% threshold.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ca=s("h3",{id:"_4-检查集群健康状态：",tabindex:"-1"},[l("4.检查集群健康状态： "),s("a",{class:"header-anchor",href:"#_4-检查集群健康状态：","aria-hidden":"true"},"#")],-1),Aa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@db01 /opt/redis/src]# redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.51:6380 (ccaa5dcb...) -> 3343 keys | 5461 slots | 1 slaves.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.53:6380 (a69e46ea...) -> 3343 keys | 5462 slots | 1 slaves.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.52:6380 (b2719c41...) -> 3314 keys | 5461 slots | 1 slaves.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[OK] 10000 keys in 3 masters.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.61 keys per slot on average.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ha=s("h1",{id:"第17章-实战-槽位分配错误如何调整",tabindex:"-1"},[l("第17章 实战-槽位分配错误如何调整 "),s("a",{class:"header-anchor",href:"#第17章-实战-槽位分配错误如何调整","aria-hidden":"true"},"#")],-1),_a=s("h2",{id:"_1-故障背景",tabindex:"-1"},[l("1.故障背景 "),s("a",{class:"header-anchor",href:"#_1-故障背景","aria-hidden":"true"},"#")],-1),ya=s("p",null,"某日某豪接到任务，需要部署redis集群结果不小心无脑复制粘贴，把所有的槽都分配给了1个节点，还没发现，然后就交付使用了，过了1天才发现问题。",-1),Da=s("p",null,"而此时，已经有不少数据写入了，如何在不丢失数据的情况下解决这个问题？",-1),ua=s("h2",{id:"_2-前提",tabindex:"-1"},[l("2.前提 "),s("a",{class:"header-anchor",href:"#_2-前提","aria-hidden":"true"},"#")],-1),ga=s("p",null,"数据不能丢，最好不中断业务",-1),va=s("h2",{id:"_3-实验现象",tabindex:"-1"},[l("3.实验现象 "),s("a",{class:"header-anchor",href:"#_3-实验现象","aria-hidden":"true"},"#")],-1),ka=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@db01 ~]# redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.51:6380 (ccaa5dcb...) -> 1000 keys | 16384 slots | 3 slaves.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.53:6380 (a69e46ea...) -> 0 keys | 0 slots | 0 slaves.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.52:6380 (b2719c41...) -> 0 keys | 0 slots | 0 slaves.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[OK] 1000 keys in 3 masters.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.06 keys per slot on average.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ba=s("h2",{id:"解决思路1：备份数据，重做集群，导入数据",tabindex:"-1"},[l("解决思路1：备份数据，重做集群，导入数据 "),s("a",{class:"header-anchor",href:"#解决思路1：备份数据，重做集群，导入数据","aria-hidden":"true"},"#")],-1),fa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"来自json的灵魂发问：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis.cof的数据  集群重做后 aof文件里面的数据能被hash嘛?")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"备份数据：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h db01 -p 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"db01:6380> BGREWRITEAOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp redis.aof redis.aof-1000.bak")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重做集群：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"实验结论：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重启后所有的数据还是在db01上。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"db01重启后数据虽然可以写入，但是访问的时候还是按照正常的hash规则去分配的，所以db01的数据实际上是没用的。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"所以这样的方法是不可行的。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"相关日志：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5812, but the slot is assigned to another node. Setting it to importing state.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5821, but the slot is assigned to another node. Setting it to importing state.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5842, but the slot is assigned to another node. Setting it to importing state.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ma=s("h2",{id:"解决思路2-获得所有key的名称，导出再导入",tabindex:"-1"},[l("解决思路2:获得所有key的名称，导出再导入 "),s("a",{class:"header-anchor",href:"#解决思路2-获得所有key的名称，导出再导入","aria-hidden":"true"},"#")],-1),Sa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.重新制作一个测试集群，槽位分布和线上出错的一样")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.将线上环境里的aof导出来")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.恢复到测试的集群里")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.收集所有的key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h db01 -p 6380 keys \\* > keys_all.txt")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.编写脚本遍历所有的key获取值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat >get_key.sh<<EOF ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for key in $(cat keys_all.txt)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"do")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  value=$(redis-cli -c -h 10.0.0.51 -p 6380 get ${key})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  echo redis-cli -c -h 10.0.0.51 -p 6380 set ${key} ${value} >> backup_all_key.txt")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"done")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.按照正常槽位分配去重新初始化集群")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6.执行导入脚本")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bash backup_all_key.txt")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"7.检查是否导入成功")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"8.测试环境没问题之后再去生产环境操作")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ea=s("h2",{id:"解决思路3-流水线-pipline",tabindex:"-1"},[l("解决思路3: 流水线 pipline "),s("a",{class:"header-anchor",href:"#解决思路3-流水线-pipline","aria-hidden":"true"},"#")],-1),xa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"前提条件：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.了解aof格式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.了解新版本redis默认是开启混合模式的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.需要修改为普通的aof格式并重启")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.恢复时使用-c参数无效，需要在每一个节点都执行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"命令：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h 10.0.0.51 -p 6380 --pipe < redis.aof")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h 10.0.0.52 -p 6380 --pipe < redis.aof")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h 10.0.0.53 -p 6380 --pipe < redis.aof")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ra=s("h2",{id:"解决思路4-使用redis-cli工具重新分配槽位",tabindex:"-1"},[l("解决思路4: 使用redis-cli工具重新分配槽位 "),s("a",{class:"header-anchor",href:"#解决思路4-使用redis-cli工具重新分配槽位","aria-hidden":"true"},"#")],-1),Oa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重新分配槽位")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster reshard 10.0.0.51:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第一次交互：输入迁出的槽的数量")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"How many slots do you want to move (from 1 to 16384)? 5461")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第二次交互：输入接受的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"What is the receiving node ID? db02的6380的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第三次交互：输入发送者的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Please enter all the source node IDs.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  Type 'all' to use all the nodes as source nodes for the hash slots.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  Type 'done' once you entered all the source nodes IDs.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Source node #1: db01的6390的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Source node #2: done")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第四次交互：YES!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重复上面的操作，知道所有的节点槽位都分配正确")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ta=s("h2",{id:"解决思路5-直接使用工具在线导入",tabindex:"-1"},[l("解决思路5:直接使用工具在线导入 "),s("a",{class:"header-anchor",href:"#解决思路5-直接使用工具在线导入","aria-hidden":"true"},"#")],-1),La=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wa=s("h1",{id:"第18章-使用工具自动部署redis集群",tabindex:"-1"},[l("第18章 使用工具自动部署redis集群 "),s("a",{class:"header-anchor",href:"#第18章-使用工具自动部署redis集群","aria-hidden":"true"},"#")],-1),Ua=s("h2",{id:"_1-恢复集群初始化",tabindex:"-1"},[l("1.恢复集群初始化 "),s("a",{class:"header-anchor",href:"#_1-恢复集群初始化","aria-hidden":"true"},"#")],-1),Ia=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6381 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6381 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6381 FLUSHALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6380 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6381 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db02 -p 6381 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db03 -p 6381 CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ba=s("h2",{id:"_2-使用工具初始化",tabindex:"-1"},[l("2.使用工具初始化 "),s("a",{class:"header-anchor",href:"#_2-使用工具初始化","aria-hidden":"true"},"#")],-1),Ha=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster create 10.0.0.51:6380 10.0.0.52:6380 10.0.0.53:6380 10.0.0.51:6381 10.0.0.52:6381 10.0.0.53:6381 --cluster-replicas 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Na=s("h2",{id:"_3-检查集群",tabindex:"-1"},[l("3.检查集群 "),s("a",{class:"header-anchor",href:"#_3-检查集群","aria-hidden":"true"},"#")],-1),Fa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380 CLUSTER NODES ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster check 10.0.0.51 6380  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Za=s("h1",{id:"第19章-使用工具扩容",tabindex:"-1"},[l("第19章 使用工具扩容 "),s("a",{class:"header-anchor",href:"#第19章-使用工具扩容","aria-hidden":"true"},"#")],-1),ja=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-e7e156608ed2c55c.png#mirages-width=1312&mirages-height=974&mirages-cdn-type=5",alt:"img"})],-1),Pa=s("h2",{id:"_1-来自json的灵魂发问：",tabindex:"-1"},[l("1.来自json的灵魂发问： "),s("a",{class:"header-anchor",href:"#_1-来自json的灵魂发问：","aria-hidden":"true"},"#")],-1),$a=s("p",null,"迁移时候槽的数据咋办？ 需要停库吗？ 访问受影响吗？ 从库呢？",-1),Ma=s("h2",{id:"_2-如何设计实验验证数据是否受影响？",tabindex:"-1"},[l("2.如何设计实验验证数据是否受影响？ "),s("a",{class:"header-anchor",href:"#_2-如何设计实验验证数据是否受影响？","aria-hidden":"true"},"#")],-1),Ga=s("p",null,"迁移的过程中 一个窗口不断的写数据 一个窗口不断的读数据 观察是否会中断",-1),qa=s("h2",{id:"_3-创建新节点",tabindex:"-1"},[l("3.创建新节点 "),s("a",{class:"header-anchor",href:"#_3-创建新节点","aria-hidden":"true"},"#")],-1),Ka=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /opt/redis_{6390,6391}/{conf,logs,pid}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p /data/redis_{6390,6391}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp redis_6380/conf/redis_6380.conf redis_6390/conf/redis_6390.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp redis_6380/conf/redis_6380.conf redis_6391/conf/redis_6391.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#6380#6390#g' redis_6390/conf/redis_6390.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sed -i 's#6380#6391#g' redis_6391/conf/redis_6391.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-server /opt/redis_6390/conf/redis_6390.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-server /opt/redis_6391/conf/redis_6391.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ps -ef|grep redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h db01 -p 6380 cluster meet 10.0.0.51 6390")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h db01 -p 6380 cluster meet 10.0.0.51 6391")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -c -h db01 -p 6380 cluster nodes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Va=s("h2",{id:"_4-使用工具扩容步骤",tabindex:"-1"},[l("4.使用工具扩容步骤 "),s("a",{class:"header-anchor",href:"#_4-使用工具扩容步骤","aria-hidden":"true"},"#")],-1),Ya=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重新分配槽位")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster reshard 10.0.0.51:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第一次交互：每个节点分配多少个槽位")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"How many slots do you want to move (from 1 to 16384)? 4096")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第二次交互：接受节点的ID是什么")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"What is the receiving node ID? 6390的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第三次交互：哪些节点需要导出")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Source node #1: all")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第四次交互：确认是否执行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Do you want to proceed with the proposed reshard plan (yes/no)? yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),za=s("h1",{id:"第20章-使用工具缩容",tabindex:"-1"},[l("第20章 使用工具缩容 "),s("a",{class:"header-anchor",href:"#第20章-使用工具缩容","aria-hidden":"true"},"#")],-1),Wa=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-eea042bfbf7c3d19.png#mirages-width=1674&mirages-height=958&mirages-cdn-type=5",alt:"img"})],-1),Ja=s("h2",{id:"_1-操作命令",tabindex:"-1"},[l("1.操作命令 "),s("a",{class:"header-anchor",href:"#_1-操作命令","aria-hidden":"true"},"#")],-1),Xa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PHP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重新分配槽位")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster reshard 10.0.0.51:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第一次交互：需要迁移多少个槽位")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"How many slots do you want to move (from 1 to 16384)? 1365")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第二次交互：接受节点的ID是什么")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"What is the receiving node ID? db01的6380的ID ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第三次交互：哪些节点需要导出")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Source node #1: db01的6390的ID ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Source node #2: done")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第四次交互：确认")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Do you want to proceed with the proposed reshard plan (yes/no)? yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"重复上面的操作，直到6390所有的槽位都被分配出去了")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"检查集群状态，确认6390没有槽位了")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster info 10.0.0.51:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"使用工具删除节点了")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster del-node 10.0.0.51:6390 6390的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster del-node 10.0.0.51:6391 6391的ID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qa=s("h2",{id:"_2-提问：公司先用的是哨兵然后在改集群-如何迁移数据",tabindex:"-1"},[l("2.提问：公司先用的是哨兵然后在改集群 如何迁移数据 "),s("a",{class:"header-anchor",href:"#_2-提问：公司先用的是哨兵然后在改集群-如何迁移数据","aria-hidden":"true"},"#")],-1),sc=s("p",null,"用槽位分配解决方法：",-1),lc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.搭建好Redis集群并互相发现")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.把所有的key都分配到db01上")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.把哨兵里的数据AOF持久化")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.拷贝到db01上，启动集群节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.重新分配槽位迁移到其他2个节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nc=s("h1",{id:"第21章-验证集群高可用",tabindex:"-1"},[l("第21章 .验证集群高可用 "),s("a",{class:"header-anchor",href:"#第21章-验证集群高可用","aria-hidden":"true"},"#")],-1),ec=s("h2",{id:"_1-提问：故障的主库修复后启动会变成备胎吗？",tabindex:"-1"},[l("1.提问：故障的主库修复后启动会变成备胎吗？ "),s("a",{class:"header-anchor",href:"#_1-提问：故障的主库修复后启动会变成备胎吗？","aria-hidden":"true"},"#")],-1),ac=s("h2",{id:"_2-实验结论：",tabindex:"-1"},[l("2.实验结论： "),s("a",{class:"header-anchor",href:"#_2-实验结论：","aria-hidden":"true"},"#")],-1),cc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.主库挂了，从库会自动接替主库的角色，集群恢复正常会受超时时间控制")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.老得主库修复上线后，会自动变成从库，同步新的主库")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ic=s("h2",{id:"_3-主动发起集群角色切换：",tabindex:"-1"},[l("3.主动发起集群角色切换： "),s("a",{class:"header-anchor",href:"#_3-主动发起集群角色切换：","aria-hidden":"true"},"#")],-1),oc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER FAILOVER")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tc=s("h1",{id:"第22章-模拟分配时故障",tabindex:"-1"},[l("第22章 模拟分配时故障 "),s("a",{class:"header-anchor",href:"#第22章-模拟分配时故障","aria-hidden":"true"},"#")],-1),rc=s("h2",{id:"_1-模拟场景：迁移数据时人为中断了，导致槽的状态不对",tabindex:"-1"},[l("1.模拟场景：迁移数据时人为中断了，导致槽的状态不对 "),s("a",{class:"header-anchor",href:"#_1-模拟场景：迁移数据时人为中断了，导致槽的状态不对","aria-hidden":"true"},"#")],-1),pc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"JSON")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[11213-<-a69e46ea7560684a7061ddb6dc3f854a1ef3dbd4] 51")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[11213->-ccaa5dcb0f0320332100594d629122b2702660d5] 53")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dc=s("h2",{id:"_2-使用工具修复：",tabindex:"-1"},[l("2.使用工具修复： "),s("a",{class:"header-anchor",href:"#_2-使用工具修复：","aria-hidden":"true"},"#")],-1),Cc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster fix 10.0.0.51:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ac=s("h2",{id:"_3-手动修复：",tabindex:"-1"},[l("3.手动修复： "),s("a",{class:"header-anchor",href:"#_3-手动修复：","aria-hidden":"true"},"#")],-1),hc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OBJECTIVEC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER SETSLOT <slot> STABLE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_c=s("h1",{id:"第23章-使用工具维护集群的好处",tabindex:"-1"},[l("第23章 使用工具维护集群的好处 "),s("a",{class:"header-anchor",href:"#第23章-使用工具维护集群的好处","aria-hidden":"true"},"#")],-1),yc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"工具有很多判断条件，更加严谨，健壮性更好")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"删除槽，使用工具会判断，如果槽里有数据，就不执行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"添加节点使用工具会判断，如果新增加的节点本身不为空，不允许加入到集群里")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"删除节点使用工具会判断，如果本删除节点本身还有槽，不允许删除")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dc=s("h1",{id:"第24章-数据迁移",tabindex:"-1"},[l("第24章 数据迁移 "),s("a",{class:"header-anchor",href:"#第24章-数据迁移","aria-hidden":"true"},"#")],-1),uc=s("h2",{id:"_1-新版本直接使用工具迁移",tabindex:"-1"},[l("1.新版本直接使用工具迁移 "),s("a",{class:"header-anchor",href:"#_1-新版本直接使用工具迁移","aria-hidden":"true"},"#")],-1),gc=s("p",null,"不加copy参数相当于mv，老数据迁移成功就删掉了",-1),vc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster import 10.0.0.51:6380 --cluster-from 10.0.0.51:6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kc=s("p",null,"添加copy参数相当于cp,老数据迁移成功后会保留",-1),bc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-from 10.0.0.51:6379 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fc=s("p",null,"添加replace参数会覆盖掉同名的数据，对新集群新增加的数据不受影响",-1),mc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sc=s("p",null,"验证迁移期间边写边导会不会影响: 同时开2个终端，一个写入key，",-1),Ec=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for i in {1..1000};do redis-cli set k_${i} v_${i};sleep 0.2;echo ${i};done")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xc=s("p",null,"一个执行导入命令",-1),Rc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Oc=s("p",null,"得出结论：",-1),Tc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"只会导入当你执行导入命令那一刻时，当前被导入节点的所有数据，类似于快照，对于后面再写入的数据不会更新")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Lc=s("h1",{id:"第25章-分析key的大小",tabindex:"-1"},[l("第25章 分析key的大小 "),s("a",{class:"header-anchor",href:"#第25章-分析key的大小","aria-hidden":"true"},"#")],-1),wc=s("h2",{id:"_0-使用自带工具分析",tabindex:"-1"},[l("0.使用自带工具分析 "),s("a",{class:"header-anchor",href:"#_0-使用自带工具分析","aria-hidden":"true"},"#")],-1),Uc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --bigkeys ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ic=s("h2",{id:"_1-使用第三方工具分析",tabindex:"-1"},[l("1.使用第三方工具分析 "),s("a",{class:"header-anchor",href:"#_1-使用第三方工具分析","aria-hidden":"true"},"#")],-1),Bc=s("h3",{id:"_1-安装命令",tabindex:"-1"},[l("1.安装命令 "),s("a",{class:"header-anchor",href:"#_1-安装命令","aria-hidden":"true"},"#")],-1),Hc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum install python-pip gcc python-devel -y")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /opt/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"git clone https://github.com/sripathikrishnan/redis-rdb-tools")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd redis-rdb-tools")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pip install python-lzf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"python setup.py install")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nc=s("h3",{id:"_2-生成测试数据",tabindex:"-1"},[l("2.生成测试数据 "),s("a",{class:"header-anchor",href:"#_2-生成测试数据","aria-hidden":"true"},"#")],-1),Fc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6379 set txt $(cat txt.txt)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Zc=s("h3",{id:"_3-执行bgsave生成rdb文件",tabindex:"-1"},[l("3.执行bgsave生成rdb文件 "),s("a",{class:"header-anchor",href:"#_3-执行bgsave生成rdb文件","aria-hidden":"true"},"#")],-1),jc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6379 BGSAVE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pc=s("h3",{id:"_4-使用工具分析",tabindex:"-1"},[l("4.使用工具分析 "),s("a",{class:"header-anchor",href:"#_4-使用工具分析","aria-hidden":"true"},"#")],-1),$c=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /data/redis_6379/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rdb -c memory redis_6379.rdb -f redis_6379.rdb.csv")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mc=s("h3",{id:"_5-过滤分析",tabindex:"-1"},[l("5.过滤分析 "),s("a",{class:"header-anchor",href:"#_5-过滤分析","aria-hidden":"true"},"#")],-1),Gc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DART")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`awk -F"," '{print $4,$3}' redis_6379.rdb.csv |sort -r`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),qc=s("h3",{id:"_6-汇报领导",tabindex:"-1"},[l("6.汇报领导 "),s("a",{class:"header-anchor",href:"#_6-汇报领导","aria-hidden":"true"},"#")],-1),Kc=s("p",null,"将结果整理汇报给领导,询问开发这个key是否可以删除",-1),Vc=s("h1",{id:"第26章-redis的内存管理",tabindex:"-1"},[l("第26章 redis的内存管理 "),s("a",{class:"header-anchor",href:"#第26章-redis的内存管理","aria-hidden":"true"},"#")],-1),Yc=s("h2",{id:"_1-设置最大内存限制",tabindex:"-1"},[l("1.设置最大内存限制 "),s("a",{class:"header-anchor",href:"#_1-设置最大内存限制","aria-hidden":"true"},"#")],-1),zc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BASH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"config set maxmemory 2G")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wc=s("h2",{id:"_2-内存回收机制",tabindex:"-1"},[l("2.内存回收机制 "),s("a",{class:"header-anchor",href:"#_2-内存回收机制","aria-hidden":"true"},"#")],-1),Jc=s("p",null,"生产上一定要限制redis的内存使用大小。",-1),Xc=s("p",null,"当达到内存使用限制之后redis会出发对应的控制策略",-1),Qc=s("p",null,"redis支持6种策略：",-1),si=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.noevicition       默认策略，不会删除任务数据，拒绝所有写入操作并返回客户端错误信息，此时只响应读操作")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.volatile-lru      根据LRU算法删除设置了超时属性的key，指导腾出足够空间为止，如果没有可删除的key，则退回到noevicition策略")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.allkeys-lru       根据LRU算法删除key，不管数据有没有设置超时属性")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.allkeys-random    随机删除所有key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.volatile-random   随机删除过期key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.volatile-ttl      根据key的ttl，删除最近要过期的key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),li=s("h2",{id:"_3-生产上redis限制多大内存",tabindex:"-1"},[l("3.生产上redis限制多大内存 "),s("a",{class:"header-anchor",href:"#_3-生产上redis限制多大内存","aria-hidden":"true"},"#")],-1),ni=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"先空出来系统一半内存")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"48G 一共 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"24G 系统")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"24G redis ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis先给8G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis再给到12G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis再给到16G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"等到24G都用完了之后，汇报领导，要考虑买内存了。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"等到35G的时候，就要考虑是加内存，还是扩容机器。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ei=s("h1",{id:"第27章-性能测试",tabindex:"-1"},[l("第27章 性能测试 "),s("a",{class:"header-anchor",href:"#第27章-性能测试","aria-hidden":"true"},"#")],-1),ai=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CODE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-benchmark -n 10000  -q")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ci=s("h1",{id:"第28章-集群相关命令",tabindex:"-1"},[l("第28章 集群相关命令 "),s("a",{class:"header-anchor",href:"#第28章-集群相关命令","aria-hidden":"true"},"#")],-1),ii=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli -h db01 -p 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER NODES    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER MEET 10.0.0.52 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER INFO")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER REPLICATE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER ADDSLOTS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER RESET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER FAILOVER")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CLUSTER SETSLOT <slot> STABLE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster info 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster rebalance 10.0.0.51 6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster del-node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis-cli --cluster fix 10.0.0.51:6380")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),oi=s("h1",{id:"第29章-命令总结",tabindex:"-1"},[l("第29章 命令总结 "),s("a",{class:"header-anchor",href:"#第29章-命令总结","aria-hidden":"true"},"#")],-1),ti=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CSHARP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.全局命令")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"keys *                ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DBSIZE                ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXISTS k1         ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPIRE k1 10      ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TTL k1            ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEL k1                ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.字符串:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set k1 v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"get k1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mset k1 v1 k2 v2 k3 v3 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mget k1 k2 k3 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"incr k1 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"incrby k1 N ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.列表：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LPUSH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RPUSH")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LPOP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RPOP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LLEN")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LRANGE list1 0 -1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HASH:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMSET ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HGET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HMGET")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HGETALL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4.集合：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SADD ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SDIFF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SINTER")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SUNION")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SREM")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5.有序集合：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZADD")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZCARD")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZSCORE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANK")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZREVRANK")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANGE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZRANGEBYSCORE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZINCRBY")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ZCOUNT")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ri=s("p",null,[l("转自：简书张导"),s("a",{href:"https://www.jianshu.com/p/9622d5906bcf",target:"_blank",rel:"noreferrer"},"https://www.jianshu.com/p/9622d5906bcf")],-1),pi=s("p",null,[s("a",{href:"https://www.jianshu.com/nb/38272646",target:"_blank",rel:"noreferrer"},"老男孩-NoSQL")],-1);function di(e,Ci,Ai,hi,i,_i){const o=t;return C(),d(o,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":n(()=>[h,_,y,D,u,g,v,k,b,f,m,S,E,x,R,O,T,L,w,U,I,B,H,N,F,Z,j,P,$,M,G,q,K,V,Y,z,W,J,X,Q,ss,ls,ns,es,as,cs,is,os,ts,rs,ps,ds,Cs,As,hs,_s,ys,Ds,us,gs,vs,ks,bs,fs,ms,Ss,Es,xs,Rs,Os,Ts,Ls,ws,Us,Is,Bs,Hs,Ns,Fs,Zs,js,Ps,$s,Ms,Gs,qs,Ks,Vs,Ys,zs,Ws,Js,Xs,Qs,sl,ll,nl,el,al,cl,il,ol,tl,rl,pl,dl,Cl,Al,hl,_l,yl,Dl,ul,gl,vl,kl,bl,fl,ml,Sl,El,xl,Rl,Ol,Tl,Ll,wl,Ul,Il,Bl,Hl,Nl,Fl,Zl,jl,Pl,$l,Ml,Gl,ql,Kl,Vl,Yl,zl,Wl,Jl,Xl,Ql,sn,ln,nn,en,an,cn,on,tn,rn,pn,dn,Cn,An,hn,_n,yn,Dn,un,gn,vn,kn,bn,fn,mn,Sn,En,xn,Rn,On,Tn,Ln,wn,Un,In,Bn,Hn,Nn,Fn,Zn,jn,Pn,$n,Mn,Gn,qn,Kn,Vn,Yn,zn,Wn,Jn,Xn,Qn,se,le,ne,ee,ae,ce,ie,oe,te,re,pe,de,Ce,Ae,he,_e,ye,De,ue,ge,ve,ke,be,fe,me,Se,Ee,xe,Re,Oe,Te,Le,we,Ue,Ie,Be,He,Ne,Fe,Ze,je,Pe,$e,Me,Ge,qe,Ke,Ve,Ye,ze,We,Je,Xe,Qe,sa,la,na,ea,aa,ca,ia,oa,ta,ra,pa,da,Ca,Aa,ha,_a,ya,Da,ua,ga,va,ka,ba,fa,ma,Sa,Ea,xa,Ra,Oa,Ta,La,wa,Ua,Ia,Ba,Ha,Na,Fa,Za,ja,Pa,$a,Ma,Ga,qa,Ka,Va,Ya,za,Wa,Ja,Xa,Qa,sc,lc,nc,ec,ac,cc,ic,oc,tc,rc,pc,dc,Cc,Ac,hc,_c,yc,Dc,uc,gc,vc,kc,bc,fc,mc,Sc,Ec,xc,Rc,Oc,Tc,Lc,wc,Uc,Ic,Bc,Hc,Nc,Fc,Zc,jc,Pc,$c,Mc,Gc,qc,Kc,Vc,Yc,zc,Wc,Jc,Xc,Qc,si,li,ni,ei,ai,ci,ii,oi,ti,ri,pi]),"main-header":n(()=>[a(e.$slots,"main-header")]),"main-header-after":n(()=>[a(e.$slots,"main-header-after")]),"main-nav":n(()=>[a(e.$slots,"main-nav")]),"main-content":n(()=>[a(e.$slots,"main-content")]),"main-content-after":n(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":n(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":n(()=>[a(e.$slots,"main-nav-after")]),comment:n(()=>[a(e.$slots,"comment")]),footer:n(()=>[a(e.$slots,"footer")]),aside:n(()=>[a(e.$slots,"aside")]),"aside-custom":n(()=>[a(e.$slots,"aside-custom")]),default:n(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const bi=r(A,[["render",di],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Redis-5.x知识体系梳理.md"]]);export{ki as __pageData,bi as default};
