---
title: linux 性能、统计、分析、优化，常用的命令
categories: Linux技术
tags: [基础命令]
date: 2020-08-27 16:26:08
---
### uptime 	

显示当前时间、系统已经运行多长时间，当前有多少用户登录，过去一段时间平均负载

```
[root@Email ~]# uptime 
 14:03:56 up 48 days, 15:25,  1 user,  load average: 0.16, 0.42, 0.25
```

### ps

仅显示nginx进程可以输入 ps -C nginx

```
[root@Email ~]# ps -C nginx
  PID TTY          TIME CMD
23549 ?        00:00:00 nginx
23550 ?        00:00:00 nginx
```

> 仅显示nginx进程ID，可以输入 ps -C nginx -o pid（必须小写）=

```
[root@Email ~]# ps -C nginx -o pid=
23549
23550
```

> 查看线程信息， ps -L PID

```
[root@Email ~]# ps -C nginx -o pid=
23549
23550
```

### pstree

以树形结构显示运行的进程，部署软件时可以看到具体运行的哪一步，哪一个命令

```
[root@Email ~]# pstree -p
systemd(1)─┬─AliYunDun(9334)─┬─{AliYunDun}(9335)
           │                 ├─{AliYunDun}(9336)
           │                 ├─{AliYunDun}(9352)
           │                 ├─{AliYunDun}(9353)
           ├─AliYunDunUpdate(8252)─┬─{AliYunDunUpdate}(8253)
           │                       ├─{AliYunDunUpdate}(8254)
           │                       └─{AliYunDunUpdate}(8256)
```

### free

显示内存区域中使用了多少内存 free -ml

```
[root@Email ~]# free -ml
              total        used        free      shared  buff/cache   available
Mem:           1839         416         353          96        1069        1124
Low:           1839        1485         353
High:             0           0           0
Swap:             0           0           0
```

> 查看 /proc/buddyinfo 还可以确定每个区域内有多少内存块可用，每一列的数量意味着可用的分页数量

```
[root@Email ~]# cat /proc/buddyinfo 
Node 0, zone      DMA     27     15     15     10      5      2      3      3      0      2      0 
Node 0, zone    DMA32     25    636   1349   1147    896    587    338    141      0      0      0 
```

### mpstat

显示在多处理器服务器上每个可用CPU的相关统计信息，从CPU0开始。还会报告所有CPU的全局平均活动，mpstat工具是sysstat软件包的一部分

每隔1s采集一次数据，共采集4次： mpstat 1（interval） 4（count）

```
[root@Email ~]# mpstat 1 4
Linux 3.10.0-514.26.2.el7.x86_64 (Email)     04/15/2020  _x86_64_    (1 CPU)

02:26:25 PM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
02:26:26 PM  all    0.99    0.00    0.99    0.00    0.00    0.00    0.00    0.00    0.00   98.02
02:26:27 PM  all    1.01    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00   98.99
02:26:28 PM  all    1.00    0.00    1.00    0.00    0.00    0.00    0.00    0.00    0.00   98.00
02:26:29 PM  all    0.00    0.00    1.00    0.00    0.00    0.00    0.00    0.00    0.00   99.00
Average:     all    0.75    0.00    0.75    0.00    0.00    0.00    0.00    0.00    0.00   98.50
```

> 对于多处理器可以加 -P 选择CPU，如选择CPU0，mpstat -P 0 1 4

```
[root@Email ~]# mpstat -P 0 1 4
Linux 3.10.0-514.26.2.el7.x86_64 (Email)     04/15/2020  _x86_64_    (1 CPU)

02:29:08 PM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
02:29:09 PM    0    0.00    0.00    1.01    0.00    0.00    0.00    0.00    0.00    0.00   98.99
02:29:10 PM    0    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00  100.00
02:29:11 PM    0    1.01    0.00    0.00    0.00    0.00    0.00    0.00    0.00    0.00   98.99
02:29:12 PM    0    0.99    0.00    0.99    0.00    0.00    0.00    0.00    0.00    0.00   98.02
Average:       0    0.50    0.00    0.50    0.00    0.00    0.00    0.00    0.00    0.00   98.99
```

### vmstat

用来报告关于进程，内存，分页，块IO，中断，CPU活动信息
vmstat 1(每隔1s输出)

```
[root@Email ~]# vmstat 1
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 2  0      0 360320 109288 990168    0    0  4535    58    7    6  3  1 93  3  0
 0  0      0 360180 109288 990200    0    0     0     0  375 1065  1  0 99  0  0
 0  0      0 360180 109288 990200    0    0     0     0  326  994  1  1 98  0  0
 0  0      0 360180 109288 990200    0    0     0     0  334 1014  1  0 99  0  0
 0  0      0 360180 109288 990200    0    0     0     0  338 1018  0  1 99  0  0
 0  0      0 360180 109288 990200    0    0     0     0  330 1002  1  0 99  0  0
 0  0      0 360180 109296 990196    0    0     0    20  374 1072  1  1 97  1  0
 0  0      0 360180 109296 990204    0    0     0     0  343 1017  0  0 100  0  0
 0  0      0 360180 109296 990204    0    0     0     0  346 1030  1  1 98  0  0
...........
```

第一行产生的报告是自上次重启之后的平均值

> 以磁盘模式输出 vmstat -d 1 1

```
[root@Email ~]# vmstat -d 1 1
disk- ------------reads------------ ------------writes----------- -----IO------
       total merged sectors      ms  total merged sectors      ms    cur    sec
vda   245180755 290549 37927585746 2125938376 5820122 5747763 482611704 66760652      0 133137
```

> 以分区模式输出 vmstat -p /dev/sda1 1 10

```
[root@Email ~]# vmstat -p /dev/vda1 1 4
vda1          reads   read sectors  writes    requested writes
           245180653 37927582522    5738051  482612272
           245180653 37927582522    5738051  482612272
           245180653 37927582522    5738051  482612272
           245180653 37927582522    5738051  482612272
```

### ss

显示所有 TCP socket ：ss -t -a

```
[root@Email ~]# ss -t -a
State       Recv-Q Send-Q                   Local Address:Port                                    Peer Address:Port                
LISTEN      0      50                                   *:mysql                                              *:*                    
LISTEN      0      511                                  *:http                                               *:*                    
LISTEN      0      128                                  *:ssh                                                *:*                    
LISTEN      0      1024                         127.0.0.1:socks                                              *:*                    
LISTEN      0      1                            127.0.0.1:mxi                                                *:*  
```

> 显示所有 UDP socket ： ss -u -a

```
State       Recv-Q Send-Q                   Local Address:Port                                    Peer Address:Port                
UNCONN      0      0                            127.0.0.1:socks                                              *:*                    
UNCONN      0      0                                    *:bootpc                                             *:*                    
UNCONN      0      0                         172.24.54.44:ntp                                                *:*                    
UNCONN      0      0                            127.0.0.1:ntp                                                *:*                    
UNCONN      0      0                                    *:ntp                                                *:*      
```

> 显示已经建立的ssh连接

```
[root@Email ~]# ss -o state established sport = :22
Netid Recv-Q Send-Q                      Local Address:Port                                       Peer Address:Port                
tcp   0      248                          172.24.54.44:ssh                                       88.91.42.228:5552                  timer:(on,197ms,0)
```

### sar

用来收集、报告、保存系统活动信息，sysstat包的一部分
一般来说，系统已经默认为我们准备好了自动化作业 /etc/cron.d/sysstat

```
[root@Email ~]# cat /etc/cron.d/sysstat 
# Run system activity accounting tool every 10 minutes
*/10 * * * * root /usr/lib64/sa/sa1 1 1
# 0 * * * * root /usr/lib64/sa/sa1 600 6 &
# Generate a daily summary of process accounting at 23:53
53 23 * * * root /usr/lib64/sa/sa2 -A
```

> 提取15号的磁盘信息

```
root@Email ~]# sar -f /var/log/sa/sa15 （saX X为统计时的日期） -d
```

sar命令作用很多，可以参考其他博客

### numastat

为进程和操作系统显示每个NUMA节点的内存统计信息

```
[root@Email ~]# numastat 
                           node0
numa_hit              8549224367
numa_miss                      0
numa_foreign                   0
interleave_hit             14087
local_node            8549224367
other_node                     0
```

### pmap

用来报告一个进程或多个进程的内存映射，可以使用这个工具确定系统是如何为服务器上的进程分配内存的

```
[root@Email ~]# ps -C nginx
  PID TTY          TIME CMD
23549 ?        00:00:00 nginx
23550 ?        00:00:00 nginx

[root@Email ~] # pmap -d 23549 23549:   nginx: master process /usr/sbin/nginx Address           Kbytes Mode  Offset           Device    Mapping 00007f7989c1f000      20 r-x-- 0000000000000000 0fd:00001 nginx.so 00007f7989c24000    2048 ----- 0000000000005000 0fd:00001 nginx.so 00007f7989e26000     152 r-x-- 0000000000000000 0fd:00001 ngx_stream_module.so 00007f7989e4c000    2044 ----- 0000000000026000 0fd:00001 ngx_stream_module.so 00007f798a04b000       4 r---- 0000000000025000 0fd:00001 ngx_stream_module.so ...... 00007ffde65e7000       8 r-x-- 0000000000000000 000:00000   [ anon ] ffffffffff600000       4 r-x-- 0000000000000000 000:00000   [ anon ] mapped: 120900K    writeable/private: 2448K    shared: 4K 
```

### tcpdump 和 wireshark

用来捕捉和分析流量的两个工具，在linux下使用libpcap库可以捕获数据包

### tcpdump

捕获http数据

```
[root@Email ~]# tcpdump -i eth0 -nn port 80
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes
15:13:17.463903 IP 132.24.54.44.34584 > 100.100.30.26.80: Flags [P.], seq 1188473272:1188474570, ack 2089985175, win 2494, length 1298
15:13:17.488506 IP 110.100.30.26.80 > 172.24.54.44.34584: Flags [.], ack 1298, win 24567, length 0
15:13:18.389400 IP 132.24.54.44.34584 > 100.100.30.26.80: Flags [P.], seq 1298:1948, ack 1, win 2494, length 650
15:13:18.413997 IP 120.100.30.26.80 > 172.234.54.44.34584: Flags [.], ack 1948, win 24571, length 0
.....
62 packets captured
62 packets received by filter
0 packets dropped by kernel
```

如果没有 -c 选项 tcpdump 将持续捕捉数据包，直到SIGINT或SIGTERM（kill）信号来中断他

> 显示在eth0接口所捕获到的相关 192.168.1.100的icmp数据包

```
[root@Email ~]# tcpdump -i eth0 -nn -icmp and host 192.168.1.100
```

### wireshark

图形化工具

### strace

用来追踪系统调用和信号，可以很方便的诊断和解决出现的问题
跟踪 cat 命令

```
[root@Email ~]# strace cat /tmp/file 
execve("/usr/bin/cat", ["cat", "/tmp/file"], [/* 23 vars */]) = 0
brk(0)                                  = 0x190f000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7fbd2732f000
access("/etc/ld.so.preload", R_OK)      = -1 ENOENT (No such file or directory)
open("/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=50649, ...}) = 0
mmap(NULL, 50649, PROT_READ, MAP_PRIVATE, 3, 0) = 
............
fstat(3, {st_mode=S_IFREG|0644, st_size=106075056, ...}) = 0
mmap(NULL, 106075056, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7fbd20817000
close(3)                                = 0
fstat(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 0), ...}) = 0
open("/tmp/file", O_RDONLY)             = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=2, ...}) = 0
fadvise64(3, 0, 0, POSIX_FADV_SEQUENTIAL) = 0
read(3, "1\n", 65536)                   = 2
write(1, "1\n", 21
)                      = 2
read(3, "", 65536)                      = 0
close(3)                                = 0
close(1)                                = 0
close(2)                                = 0
exit_group(0)                           = ?
+++ exited with 0 +++
```

> 还有另一个有趣的用途，可以报告执行一个命令每个系统调用在内核中所消耗时间，使用 -c 选项

```
[root@Email ~]# strace -c cat /tmp/file 
1
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
 27.78    0.000015           4         4           open
 16.67    0.000009           1         8           mmap
 12.96    0.000007           2         4           mprotect
  9.26    0.000005           5         1           write
  7.41    0.000004           1         3           read
  5.56    0.000003           1         5           fstat
  5.56    0.000003           3         1           munmap
  5.56    0.000003           3         1           execve
  3.70    0.000002           2         1         1 access
  1.85    0.000001           0         6           close
  1.85    0.000001           0         4           brk
  1.85    0.000001           1         1           fadvise64
  0.00    0.000000           0         1           arch_prctl
------ ----------- ----------- --------- --------- ----------------
100.00    0.000054                    40         1 total
```

### ltrace

一个库的调用跟踪程序，strace的输出十分相似，只不过跟踪的是库调用

```
[root@Email ~]# ltrace cat /tmp/file 
__libc_start_main(0x401a20, 2, 0x7ffcd8746458, 0x408ca0 <unfinished ...>
getpagesize()                                                                     = 4096
strrchr("cat", '/')                                                               = nil
setlocale(LC_ALL, "")                                                             = "en_US.UTF-8"
bindtextdomain("coreutils", "/usr/share/locale")                                  = "/usr/share/locale"
textdomain("coreutils")                                                           = "coreutils"
__cxa_atexit(0x4029f0, 0, 0, 0x736c6974756572)             

.......                      

malloc(69631)                                                                     = 0x2553030

fflush(0x7f8cf18771c0)                                                            = 0
fclose(0x7f8cf18771c0)                                                            = 0
+++ exited (status 0) +++
```

跟踪cat命令

### gnuplot

命令行绘图工具
我们可以通过两种方法操作gnuplot
一种是交互式

```
[root@Email ~]# gnuplot

    G N U P L O T
    Version 4.6 patchlevel 2    last modified 2013-03-14 
    Build System: Linux x86_64

    Copyright (C) 1986-1993, 1998, 2004, 2007-2013
    Thomas Williams, Colin Kelley and many others

    gnuplot home:     http://www.gnuplot.info
    faq, bugs, etc:   type "help FAQ"
    immediate help:   type "help"  (plot window: hit 'h')

Terminal type set to 'x11'
gnuplot> 
```

第二种是将gnuplot的指令写入到一个文件中，使用gnuplot执行这个文件，这样方便调试和修改。

#### **示例一**

**线性趋势图**
使用sar命令分析统计数据

```
LANG=C sar -f /var/log/sa/sa15 > /tmp/cpu.txt
```

LANG=C 使sar输出的时间为24小时制
删除 cpu.txt 中空行和数据无关的字符，只保留分析数据

```
[root@Email ~]# cat !$
cat /tmp/cpu.txt
14:50:02        all      0.83      0.00      0.64      0.01      0.00     98.52
15:10:01        all      3.77      0.00      1.00      0.19      0.00     95.04
15:20:01        all      0.72      0.00      0.58      0.01      0.00     98.69
15:30:01        all      0.62      0.00      0.49      0.01      0.00     98.88
15:40:01        all      1.22      0.00      0.64      0.08      0.00     98.06
```

在此文件中，第一列的时间选作X轴，y轴选择第三列（%user）、第五列（%system）、第六列（%iowait）

> 编写gnuplot指令文件 cpu.gnuplot 内容如下：

```
[root@Email ~]# vim /tmp/cpu.gnuplot 
set xdata time #设置x轴数据为时间
set timefmt "%H:%M:%S" #设置时间格式
set xlabel 'TIME' #设置x轴标签为TIME
set ylabel 'CPU' #设置y轴便签为CPU
set term png size 1300,800 #设置图片大小
set output "/tmp/cpu.png" #设置平面图保存位置
plot \
'/tmp/cpu.txt' using 1:3 title '%US' with lines, \
'/tmp/cpu.txt' using 1:5 title '%SY' with lines, \
'/tmp/cpu.txt' using 1:6 title '%WA' with lines #绘制图片
```

执行

```
[root@Email ~]# gnuplot /tmp/cpu.gnuplot 
```

使用xshell的可以用sz导出图片

```
[root@Email ~]# sz /tmp/cpu.png 
```

得到下图

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020041516400134.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMTg0Njk5,size_16,color_FFFFFF,t_70)

#### **示例二**

**柱状趋势图**
编写gnuplot指令文件 cpu.gnuplot 内容如下：

```
vim /tmp/cpu.gnuplot 

set term png size 1300,800
set output "/tmp/cpu.png"
set grid
set style data histograms
set style fill solid 1.00 border -1
plot \
'/tmp/cpu.txt' using 3:xtic(1) title '%US'
set grid
```

执行

```
[root@Email ~]# gnuplot /tmp/cpu.gnuplot 
```

使用xshell的可以用sz导出图片

```
[root@Email ~]# sz /tmp/cpu.png 
```

得到下图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200415163945660.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMTg0Njk5,size_16,color_FFFFFF,t_70)

> **多柱状趋势图**
> 编写gnuplot指令文件 cpu.gnuplot 内容如下：

```
set term png size 1300,800
set output "/tmp/cpu.png"
set grid
set style data histograms
set style fill solid 1.00 border -1
plot \
'/tmp/cpu.txt' using 3:xtic(1) title '%US', \
'/tmp/cpu.txt' using 5:xtic(1) title '%SY', \
'/tmp/cpu.txt' using 6:xtic(1) title '%WA' \
```

得到以下图形：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200415163922120.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMTg0Njk5,size_16,color_FFFFFF,t_70)

END