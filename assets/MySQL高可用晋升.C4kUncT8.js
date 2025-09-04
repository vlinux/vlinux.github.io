import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Bth_JSAQ.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as u,u as p,a as f}from"./chunks/vue-router.DpP0leKZ.js";import{aa as _,ap as n,ag as r,af as a,ai as e,P as y,ab as S,a1 as g}from"./framework.GHZxz7jq.js";import"./index.Di1n2b66.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.BWywLGB4.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.DoKt6roH.js";const P=u("/posts/MySQL高可用晋升",async t=>JSON.parse('{"title":"MySQL高可用晋升","description":"","frontmatter":{"title":"MySQL高可用晋升","categories":"数据库","tags":["MySQL"],"date":"2019-02-05 23:54:00"},"headers":[],"relativePath":"pages/posts/MySQL高可用晋升.md","lastUpdated":null}'),{lazy:(t,s)=>t.name===s.name}),C={__name:"MySQL高可用晋升",setup(t,{expose:s}){const{data:i}=P(),c=f(),h=p(),o=Object.assign(h.meta.frontmatter||{},i.value?.frontmatter||{});return c.currentRoute.value.data=i.value,g("valaxy:frontmatter",o),globalThis.$frontmatter=o,s({frontmatter:{title:"MySQL高可用晋升",categories:"数据库",tags:["MySQL"],date:"2019-02-05 23:54:00"}}),(l,d)=>{const m=b;return S(),_(m,{frontmatter:y(o)},{"main-content-md":n(()=>[...d[0]||(d[0]=[a("h1",{id:"企业高可用性标准",tabindex:"-1"},[e("企业高可用性标准 "),a("a",{class:"header-anchor",href:"#企业高可用性标准","aria-label":'Permalink to "企业高可用性标准"'},"​")],-1),a("h2",{id:"全年无故障率-非计划内故障停机",tabindex:"-1"},[e("全年无故障率(非计划内故障停机) "),a("a",{class:"header-anchor",href:"#全年无故障率-非计划内故障停机","aria-label":'Permalink to "全年无故障率(非计划内故障停机)"'},"​")],-1),a("pre",null,[a("code",null,`99.9%                 ----> 0.001*365*24*60=525.6  min
99.99%                ----> 0.0001*365*24*60=52.56 min
99.999%               ----> 0.0001*365*24*60=5.256 min
`)],-1),a("h2",{id:"高可用架构方案",tabindex:"-1"},[e("高可用架构方案 "),a("a",{class:"header-anchor",href:"#高可用架构方案","aria-label":'Permalink to "高可用架构方案"'},"​")],-1),a("pre",null,[a("code",null,`负载均衡:有一定的高可用性 
LVS  Nginx
主备系统:有高可用性,但是需要切换,是单活的架构
KA ,   MHA, MMM
真正高可用(多活系统): 
NDB Cluster  Oracle RAC  Sysbase cluster   , InnoDB Cluster（MGR）,PXC , MGC
`)],-1),a("h1",{id:"主从复制简介",tabindex:"-1"},[e("主从复制简介 "),a("a",{class:"header-anchor",href:"#主从复制简介","aria-label":'Permalink to "主从复制简介"'},"​")],-1),a("pre",null,[a("code",null,`1.1. 基于二进制日志复制的
1.2. 主库的修改操作会记录二进制日志
1.3. 从库会请求新的二进制日志并回放,最终达到主从数据同步
1.4. 主从复制核心功能:
辅助备份,处理物理损坏                   
扩展新型的架构:高可用,高性能,分布式架构等
`)],-1),a("h1",{id:"主从复制前提-搭建主从的过程",tabindex:"-1"},[e("主从复制前提(搭建主从的过程) "),a("a",{class:"header-anchor",href:"#主从复制前提-搭建主从的过程","aria-label":'Permalink to "主从复制前提(搭建主从的过程)"'},"​")],-1),a("pre",null,[a("code",null,`2.1 两台以上mysql实例 ,server_id,server_uuid不同
2.2 主库开启二进制日志
2.3 专用的复制用户
2.4 保证主从开启之前的某个时间点,从库数据是和主库一致(补课)
2.5 告知从库,复制user,passwd,IP port,以及复制起点(change master to)
2.6 线程(三个):Dump thread  IO thread  SQL thread 开启(start slave)
`)],-1),a("h1",{id:"主从复制搭建-classic-replication",tabindex:"-1"},[e("主从复制搭建(Classic replication) "),a("a",{class:"header-anchor",href:"#主从复制搭建-classic-replication","aria-label":'Permalink to "主从复制搭建(Classic replication)"'},"​")],-1),a("h2",{id:"清理主库数据",tabindex:"-1"},[e("清理主库数据 "),a("a",{class:"header-anchor",href:"#清理主库数据","aria-label":'Permalink to "清理主库数据"'},"​")],-1),a("pre",null,[a("code",null,`rm -rf /data/3307/data/*
`)],-1),a("h2",{id:"重新初始化3307",tabindex:"-1"},[e("重新初始化3307 "),a("a",{class:"header-anchor",href:"#重新初始化3307","aria-label":'Permalink to "重新初始化3307"'},"​")],-1),a("pre",null,[a("code",null,`mysqld --initialize-insecure --user=mysql --basedir=/app/mysql --datadir=/data/3307/data
`)],-1),a("h2",{id:"修改my-cnf-开启二进制日志功能",tabindex:"-1"},[e("修改my.cnf ,开启二进制日志功能 "),a("a",{class:"header-anchor",href:"#修改my-cnf-开启二进制日志功能","aria-label":'Permalink to "修改my.cnf ,开启二进制日志功能"'},"​")],-1),a("pre",null,[a("code",null,`[root@db01 3307]# vim /data/3307/my.cnf 
log_bin=/data/3307/data/mysql-bin
`)],-1),a("h2",{id:"启动所有节点",tabindex:"-1"},[e("启动所有节点 "),a("a",{class:"header-anchor",href:"#启动所有节点","aria-label":'Permalink to "启动所有节点"'},"​")],-1),a("pre",null,[a("code",null,`[root@db01 3307]# systemctl start mysqld3307
[root@db01 3307]# systemctl start mysqld3308
[root@db01 3307]# systemctl start mysqld3309
[root@db01 3307]# ps -ef |grep mysqld
mysql      3684      1  4 09:59 ?        00:00:00 /app/mysql/bin/mysqld --defaults-file=/data/3307/my.cnf
mysql      3719      1  7 09:59 ?        00:00:00 /app/mysql/bin/mysqld --defaults-file=/data/3308/my.cnf
mysql      3754      1  8 09:59 ?        00:00:00 /app/mysql/bin/mysqld --defaults-file=/data/3309/my.cnf
[root@db01 3307]# mysql -S /data/3307/mysql.sock -e "select @@server_id"
[root@db01 3307]# mysql -S /data/3308/mysql.sock -e "select @@server_id"
[root@db01 3307]# mysql -S /data/3309/mysql.sock -e "select @@server_id"
`)],-1),a("h2",{id:"主库中创建复制用户",tabindex:"-1"},[e("主库中创建复制用户 "),a("a",{class:"header-anchor",href:"#主库中创建复制用户","aria-label":'Permalink to "主库中创建复制用户"'},"​")],-1),a("pre",null,[a("code",null,`[root@db01 3307]# mysql -S /data/3307/mysql.sock 
db01 [(none)]>grant replication slave on *.* to repl@'10.0.0.%' identified by '123';
db01 [(none)]>select user,host from mysql.user;
`)],-1),a("h2",{id:"备份主库并恢复到从库",tabindex:"-1"},[e("备份主库并恢复到从库 "),a("a",{class:"header-anchor",href:"#备份主库并恢复到从库","aria-label":'Permalink to "备份主库并恢复到从库"'},"​")],-1),a("pre",null,[a("code",null,`[root@db01 3307]# mysqldump -S /data/3307/mysql.sock -A --master-data=2 --single-transaction  -R --triggers >/backup/full.sql
-- CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000001', MASTER_LOG_POS=653;
[root@db01 3307]# mysql -S /data/3308/mysql.sock
db01 [(none)]>source /backup/full.sql
`)],-1),a("h2",{id:"告知从库关键复制信息",tabindex:"-1"},[e("告知从库关键复制信息 "),a("a",{class:"header-anchor",href:"#告知从库关键复制信息","aria-label":'Permalink to "告知从库关键复制信息"'},"​")],-1),a("pre",null,[a("code",null,`ip port user  password  binlog position 
[root@db01 3307]# mysql -S /data/3308/mysql.sock
db01 [mysql]>help change master to

CHANGE MASTER TO
  MASTER_HOST='10.0.0.51',
  MASTER_USER='repl',
  MASTER_PASSWORD='123',
  MASTER_PORT=3307,
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=653,
  MASTER_CONNECT_RETRY=10;
`)],-1),a("h2",{id:"开启主从专用线程",tabindex:"-1"},[e("开启主从专用线程 "),a("a",{class:"header-anchor",href:"#开启主从专用线程","aria-label":'Permalink to "开启主从专用线程"'},"​")],-1),a("pre",null,[a("code",null,`start slave ;
`)],-1),a("h2",{id:"检查复制状态",tabindex:"-1"},[e("检查复制状态 "),a("a",{class:"header-anchor",href:"#检查复制状态","aria-label":'Permalink to "检查复制状态"'},"​")],-1),a("pre",null,[a("code",null,`db01 [mysql]>show slave  status \\G
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
`)],-1),a("h1",{id:"主从复制的原理-classic-replication",tabindex:"-1"},[e("主从复制的原理 (Classic Replication) "),a("a",{class:"header-anchor",href:"#主从复制的原理-classic-replication","aria-label":'Permalink to "主从复制的原理 (Classic Replication)"'},"​")],-1),a("h2",{id:"主从中设置到的文件和线程",tabindex:"-1"},[e("主从中设置到的文件和线程 "),a("a",{class:"header-anchor",href:"#主从中设置到的文件和线程","aria-label":'Permalink to "主从中设置到的文件和线程"'},"​")],-1),a("h2",{id:"线程",tabindex:"-1"},[e("线程 "),a("a",{class:"header-anchor",href:"#线程","aria-label":'Permalink to "线程"'},"​")],-1),a("pre",null,[a("code",null,`主:
DUMP THREAD
从:
IO  THREAD
SQL THREAD
`)],-1),a("h2",{id:"文件",tabindex:"-1"},[e("文件 "),a("a",{class:"header-anchor",href:"#文件","aria-label":'Permalink to "文件"'},"​")],-1),a("pre",null,[a("code",null,`主:
mysql-bin.000001
从: 
db01-relay.000001     ===>中继日志
master.info                 ===》主库信息记录日志
relay-log.info              ===> 记录中继应用情况信息
`)],-1),a("h2",{id:"主从复制原理",tabindex:"-1"},[e("主从复制原理 "),a("a",{class:"header-anchor",href:"#主从复制原理","aria-label":'Permalink to "主从复制原理"'},"​")],-1),a("h2",{id:"主从复制原理描述",tabindex:"-1"},[e("主从复制原理描述： "),a("a",{class:"header-anchor",href:"#主从复制原理描述","aria-label":'Permalink to "主从复制原理描述："'},"​")],-1),a("hr",null,null,-1),a("pre",null,[a("code",null,`1.change master to 时，ip pot user password binlog position写入到master.info进行记录
2. start slave 时，从库会启动IO线程和SQL线程
3.IO_T，读取master.info信息，获取主库信息连接主库
4. 主库会生成一个准备binlog DUMP线程，来响应从库
5. IO_T根据master.info记录的binlog文件名和position号，请求主库DUMP最新日志
6. DUMP线程检查主库的binlog日志，如果有新的，TP(传送)给从从库的IO_T
7. IO_T将收到的日志存储到了TCP/IP 缓存，立即返回ACK给主库 ，主库工作完成
8.IO_T将缓存中的数据，存储到relay-log日志文件,更新master.info文件binlog 文件名和postion，IO_T工作完成
9.SQL_T读取relay-log.info文件，获取到上次执行到的relay-log的位置，作为起点，回放relay-log
10.SQL_T回放完成之后，会更新relay-log.info文件。
11. relay-log会有自动清理的功能。
细节：（5.5版本之后）
1.主库一旦有新的日志生成，会发送“信号”给binlog dump ，IO线程再请求
`)],-1),a("hr",null,null,-1),a("h1",{id:"主从故障监控-分析-处理",tabindex:"-1"},[e("主从故障监控\\分析\\处理 "),a("a",{class:"header-anchor",href:"#主从故障监控-分析-处理","aria-label":'Permalink to "主从故障监控\\分析\\处理"'},"​")],-1),a("h2",{id:"线程相关监控",tabindex:"-1"},[e("线程相关监控 "),a("a",{class:"header-anchor",href:"#线程相关监控","aria-label":'Permalink to "线程相关监控"'},"​")],-1),a("h2",{id:"主库",tabindex:"-1"},[e("主库: "),a("a",{class:"header-anchor",href:"#主库","aria-label":'Permalink to "主库:"'},"​")],-1),a("pre",null,[a("code",null,`show full processlist;
每个从库都会有一行dump相关的信息
HOSTS: 
db01:47176
State:
Master has sent all binlog to slave; waiting for more updates
如果现实非以上信息,说明主从之间的关系出现了问题    
`)],-1),a("h2",{id:"从库",tabindex:"-1"},[e("从库: "),a("a",{class:"header-anchor",href:"#从库","aria-label":'Permalink to "从库:"'},"​")],-1),a("pre",null,[a("code",null,`db01 [(none)]>show slave status \\G
`)],-1),a("h2",{id:"主库相关信息监控",tabindex:"-1"},[e("主库相关信息监控 "),a("a",{class:"header-anchor",href:"#主库相关信息监控","aria-label":'Permalink to "主库相关信息监控"'},"​")],-1),a("pre",null,[a("code",null,`Master_Host: 10.0.0.51
Master_User: repl
Master_Port: 3307
Master_Log_File: mysql-bin.000005
Read_Master_Log_Pos: 444
`)],-1),a("h2",{id:"从库中继日志的应用状态",tabindex:"-1"},[e("从库中继日志的应用状态 "),a("a",{class:"header-anchor",href:"#从库中继日志的应用状态","aria-label":'Permalink to "从库中继日志的应用状态"'},"​")],-1),a("pre",null,[a("code",null,`Relay_Log_File: db01-relay-bin.000002
Relay_Log_Pos: 485
`)],-1),a("h2",{id:"从库复制线程有关的状态",tabindex:"-1"},[e("从库复制线程有关的状态 "),a("a",{class:"header-anchor",href:"#从库复制线程有关的状态","aria-label":'Permalink to "从库复制线程有关的状态"'},"​")],-1),a("pre",null,[a("code",null,`Slave_IO_Running: Yes
Slave_SQL_Running: Yes
Last_IO_Errno: 0
Last_IO_Error: 
Last_SQL_Errno: 0
Last_SQL_Error: 
`)],-1),a("h2",{id:"过滤复制有关的状态",tabindex:"-1"},[e("过滤复制有关的状态 "),a("a",{class:"header-anchor",href:"#过滤复制有关的状态","aria-label":'Permalink to "过滤复制有关的状态"'},"​")],-1),a("pre",null,[a("code",null,`Replicate_Do_DB: 
Replicate_Ignore_DB: 
Replicate_Do_Table: 
Replicate_Ignore_Table: 
Replicate_Wild_Do_Table: 
Replicate_Wild_Ignore_Table: 
`)],-1),a("h2",{id:"主从延时相关状态-非人为",tabindex:"-1"},[e("主从延时相关状态(非人为) "),a("a",{class:"header-anchor",href:"#主从延时相关状态-非人为","aria-label":'Permalink to "主从延时相关状态(非人为)"'},"​")],-1),a("pre",null,[a("code",null,`Seconds_Behind_Master: 0
`)],-1),a("h2",{id:"延时从库有关的状态-人为",tabindex:"-1"},[e("延时从库有关的状态(人为) "),a("a",{class:"header-anchor",href:"#延时从库有关的状态-人为","aria-label":'Permalink to "延时从库有关的状态(人为)"'},"​")],-1),a("pre",null,[a("code",null,`SQL_Delay: 0
SQL_Remaining_Delay: NULL
`)],-1),a("h2",{id:"gtid-复制有关的状态",tabindex:"-1"},[e("GTID 复制有关的状态 "),a("a",{class:"header-anchor",href:"#gtid-复制有关的状态","aria-label":'Permalink to "GTID 复制有关的状态"'},"​")],-1),a("pre",null,[a("code",null,`Retrieved_Gtid_Set: 
Executed_Gtid_Set: 
Auto_Position: 0
`)],-1),a("h2",{id:"主从复制故障分析",tabindex:"-1"},[e("主从复制故障分析 "),a("a",{class:"header-anchor",href:"#主从复制故障分析","aria-label":'Permalink to "主从复制故障分析"'},"​")],-1),a("h2",{id:"io",tabindex:"-1"},[e("IO "),a("a",{class:"header-anchor",href:"#io","aria-label":'Permalink to "IO"'},"​")],-1),a("h2",{id:"连接主库",tabindex:"-1"},[e("连接主库 "),a("a",{class:"header-anchor",href:"#连接主库","aria-label":'Permalink to "连接主库"'},"​")],-1),a("pre",null,[a("code",null,`(1) 用户 密码  IP  port
Last_IO_Error: error reconnecting to master 'repl@10.0.0.51:3307' - retry-time: 10  retries: 7
[root@db01 ~]# mysql -urepl  -p123333  -h 10.0.0.51 -P 3307
ERROR 1045 (28000): Access denied for user 'repl'@'db01' (using password: YES)

原因:
密码错误 
用户错误 
skip_name_resolve
地址错误
端口
`)],-1),a("p",null,"处理方法",-1),a("pre",null,[a("code",null,`stop  slave  
reset slave all 
change master to 
start slave
主库连接数上线,或者是主库太繁忙

show slave  staus \\G 
Last_IO_Errno: 1040
Last_IO_Error: error reconnecting to master 'repl@10.0.0.51:3307' - retry-time: 10  retries: 7
处理思路:
拿复制用户,手工连接一下

[root@db01 ~]# mysql -urepl -p123 -h 10.0.0.51 -P 3307 
mysql: [Warning] Using a password on the command line interface can be insecure.
ERROR 1040 (HY000): Too many connections
处理方法:
db01 [(none)]>set global max_connections=300;

(3) 防火墙,网络不通
`)],-1),a("h2",{id:"请求二进制日志",tabindex:"-1"},[e("请求二进制日志 "),a("a",{class:"header-anchor",href:"#请求二进制日志","aria-label":'Permalink to "请求二进制日志"'},"​")],-1),a("pre",null,[a("code",null,`主库缺失日志
从库方面,二进制日志位置点不对
Last_IO_Error: Got fatal error 1236 from master when reading data from binary log: 'could not find next log; the first event 'mysql-bin.000001' at 154, the last event read from '/data/3307/data/mysql-bin.000002' at 154, the last byte read from '/data/3307/data/mysql-bin.000002' at 154.'
注意: 在主从复制环境中,严令禁止主库中reset master; 可以选择expire 进行定期清理主库二进制日志
解决方案:
重新构建主从
`)],-1),a("h2",{id:"sql-线程故障",tabindex:"-1"},[e("SQL 线程故障 "),a("a",{class:"header-anchor",href:"#sql-线程故障","aria-label":'Permalink to "SQL 线程故障"'},"​")],-1),a("p",null,"SQL线程功能：",-1),a("pre",null,[a("code",null,`(1)读写relay-log.info 
(2)relay-log损坏,断节,找不到
(3)接收到的SQL无法执行
`)],-1),a("p",null,"导致SQL线程故障原因分析：",-1),a("pre",null,[a("code",null,`1. 版本差异，参数设定不同，比如：数据类型的差异，SQL_MODE影响
2.要创建的数据库对象,已经存在
3.要删除或修改的对象不存在  
4.DML语句不符合表定义及约束时.  
归根揭底的原因都是由于从库发生了写入操作.
Last_SQL_Error: Error 'Can't create database 'db'; database exists' on query. Default database: 'db'. Query: 'create database db'

处理方法(以从库为核心的处理方案)：

方法一：
stop slave; 
set global sql_slave_skip_counter = 1;
#将同步指针向下移动一个，如果多次不同步，可以重复操作。
start slave;
方法二：
/etc/my.cnf
slave-skip-errors = 1032,1062,1007
常见错误代码:
1007:对象已存在
1032:无法执行DML
1062:主键冲突,或约束冲突

但是，以上操作有时是有风险的，最安全的做法就是重新构建主从。把握一个原则,一切以主库为主.
`)],-1),a("h2",{id:"一劳永逸的方法",tabindex:"-1"},[e("一劳永逸的方法: "),a("a",{class:"header-anchor",href:"#一劳永逸的方法","aria-label":'Permalink to "一劳永逸的方法:"'},"​")],-1),a("pre",null,[a("code",null,`(1) 可以设置从库只读.
db01 [(none)]>show variables like '%read_only%';
注意：
只会影响到普通用户，对管理员用户无效。
(2)加中间件
读写分离。
`)],-1),a("h2",{id:"主从延时监控及原因",tabindex:"-1"},[e("主从延时监控及原因 "),a("a",{class:"header-anchor",href:"#主从延时监控及原因","aria-label":'Permalink to "主从延时监控及原因"'},"​")],-1),a("pre",null,[a("code",null,`主库做了修改操作,从库比较长时间才能追上.
`)],-1),a("h2",{id:"外在因素",tabindex:"-1"},[e("外在因素 "),a("a",{class:"header-anchor",href:"#外在因素","aria-label":'Permalink to "外在因素"'},"​")],-1),a("pre",null,[a("code",null,`网络 
主从硬件差异较大
版本差异
参数因素
`)],-1),a("h2",{id:"主库-1",tabindex:"-1"},[e("主库 "),a("a",{class:"header-anchor",href:"#主库-1","aria-label":'Permalink to "主库"'},"​")],-1),a("pre",null,[a("code",null,`(1) 二进制日志写入不及时
[rep]>select @@sync_binlog;
(2) CR的主从复制中,binlog_dump线程,事件为单元,串行传送二进制日志(5.6 5.5)

1. 主库并发事务量大,主库可以并行,传送时是串行
2. 主库发生了大事务,由于是串行传送,会产生阻塞后续的事务.

解决方案:
1. 5.6 开始,开启GTID,实现了GC(group commit)机制,可以并行传输日志给从库IO
2. 5.7 开始,不开启GTID,会自动维护匿名的GTID,也能实现GC,我们建议还是认为开启GTID
3. 大事务拆成多个小事务,可以有效的减少主从延时.
`)],-1),a("h2",{id:"从库-1",tabindex:"-1"},[e("从库 "),a("a",{class:"header-anchor",href:"#从库-1","aria-label":'Permalink to "从库"'},"​")],-1),a("pre",null,[a("code",null,`SQL线程导致的主从延时
在CR复制情况下: 从库默认情况下只有一个SQL,只能串行回放事务SQL
1. 主库如果并发事务量较大,从库只能串行回放
2. 主库发生了大事务,会阻塞后续的所有的事务的运行

解决方案:
1. 5.6 版本开启GTID之后,加入了SQL多线程的特性,但是只能针对不同库(database)下的事务进行并发回放.
2. 5.7 版本开始GTID之后,在SQL方面,提供了基于逻辑时钟(logical_clock),binlog加入了seq_no机制,
真正实现了基于事务级别的并发回放,这种技术我们把它称之为MTS(enhanced multi-threaded slave).
3. 大事务拆成多个小事务,可以有效的减少主从延时.
[https://dev.mysql.com/worklog/task/?id=6314]
`)],-1),a("h2",{id:"小结",tabindex:"-1"},[e("小结 "),a("a",{class:"header-anchor",href:"#小结","aria-label":'Permalink to "小结"'},"​")],-1),a("pre",null,[a("code",null,`1. 主从复制原理
2. 主从复制故障
3. 主从延时：group commit    MTS   
`)],-1),a("hr",null,null,-1),a("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1)])]),"main-header":n(()=>[r(l.$slots,"main-header")]),"main-header-after":n(()=>[r(l.$slots,"main-header-after")]),"main-nav":n(()=>[r(l.$slots,"main-nav")]),"main-content-before":n(()=>[r(l.$slots,"main-content-before")]),"main-content":n(()=>[r(l.$slots,"main-content")]),"main-content-after":n(()=>[r(l.$slots,"main-content-after")]),"main-nav-before":n(()=>[r(l.$slots,"main-nav-before")]),"main-nav-after":n(()=>[r(l.$slots,"main-nav-after")]),comment:n(()=>[r(l.$slots,"comment")]),footer:n(()=>[r(l.$slots,"footer")]),aside:n(()=>[r(l.$slots,"aside")]),"aside-custom":n(()=>[r(l.$slots,"aside-custom")]),default:n(()=>[r(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{C as default,P as usePageData};
