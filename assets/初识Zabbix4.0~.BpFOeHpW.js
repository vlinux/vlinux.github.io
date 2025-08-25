import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang.CdMcCuLR.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as g,u as x,a as f}from"./chunks/vue-router.Cro35QNm.js";import{aa as z,ap as i,ag as t,af as n,ae as h,ai as l,P as y,ab as w,a1 as k}from"./framework.GHZxz7jq.js";import"./index.mH_NH_pU.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.BaL1KWr8.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.Dy68RlFi.js";const E=g("/posts/初识Zabbix4.0~",async r=>JSON.parse('{"title":"初识Zabbix4.0~","description":"","frontmatter":{"title":"初识Zabbix4.0~","categories":"默认分类","tags":["Zabbix"],"date":"2019-05-09 23:09:00"},"headers":[],"relativePath":"pages/posts/初识Zabbix4.0~.md","lastUpdated":null}'),{lazy:(r,s)=>r.name===s.name}),B={__name:"初识Zabbix4.0~",setup(r,{expose:s}){const{data:d}=E(),p=f(),b=x(),o=Object.assign(b.meta.frontmatter||{},d.value?.frontmatter||{});return p.currentRoute.value.data=d.value,k("valaxy:frontmatter",o),globalThis.$frontmatter=o,s({frontmatter:{title:"初识Zabbix4.0~",categories:"默认分类",tags:["Zabbix"],date:"2019-05-09 23:09:00"}}),(e,a)=>{const m=u;return w(),z(m,{frontmatter:y(o)},{"main-content-md":i(()=>[a[0]||(a[0]=n("h1",{id:"zabbix监控服务",tabindex:"-1"},[l("zabbix监控服务 "),n("a",{class:"header-anchor",href:"#zabbix监控服务","aria-label":'Permalink to "zabbix监控服务"'},"​")],-1)),a[1]||(a[1]=n("hr",null,null,-1)),a[2]||(a[2]=n("h1",{id:"第一章-监控知识基本概述",tabindex:"-1"},[l("第一章 监控知识基本概述 "),n("a",{class:"header-anchor",href:"#第一章-监控知识基本概述","aria-label":'Permalink to "第一章 监控知识基本概述"'},"​")],-1)),a[3]||(a[3]=n("h2",{id:"_1-为什么要使用监控",tabindex:"-1"},[l("1.为什么要使用监控 "),n("a",{class:"header-anchor",href:"#_1-为什么要使用监控","aria-label":'Permalink to "1.为什么要使用监控"'},"​")],-1)),a[4]||(a[4]=n("ul",null,[n("li",null,"1.对系统不间断实时监控"),n("li",null,"2.实时反馈系统当前状态"),n("li",null,"3.保证服务可靠性安全性"),n("li",null,"4.保证业务持续稳定运行")],-1)),a[5]||(a[5]=n("h2",{id:"_2-如何进行监控-比如我们需要监控磁盘的使用率",tabindex:"-1"},[l("2.如何进行监控，比如我们需要监控磁盘的使用率 "),n("a",{class:"header-anchor",href:"#_2-如何进行监控-比如我们需要监控磁盘的使用率","aria-label":'Permalink to "2.如何进行监控，比如我们需要监控磁盘的使用率"'},"​")],-1)),a[6]||(a[6]=n("ul",null,[n("li",null,"1.如何查看磁盘使用率 df -h"),n("li",null,"2.监控磁盘的那些指标 block、 inode"),n("li",null,"3.如何获取具体的信息 df -h|awk '///{print(NF-1)}'"),n("li",null,"4.获取的数值到达多少报警 80%")],-1)),a[7]||(a[7]=n("h2",{id:"_3-流行的监控工具",tabindex:"-1"},[l("3.流行的监控工具 "),n("a",{class:"header-anchor",href:"#_3-流行的监控工具","aria-label":'Permalink to "3.流行的监控工具"'},"​")],-1)),a[8]||(a[8]=n("ul",null,[n("li",null,"1.Zabbix"),n("li",null,"2.Lepus(天兔)数据库监控系统"),n("li",null,"3.Open-Falcon 小米"),n("li",null,"4.Prometheus(普罗米修斯， Docker、 K8s)")],-1)),a[9]||(a[9]=n("h2",{id:"_4-如果去到一家新公司-如何入手监控",tabindex:"-1"},[l("4.如果去到一家新公司，如何入手监控 "),n("a",{class:"header-anchor",href:"#_4-如果去到一家新公司-如何入手监控","aria-label":'Permalink to "4.如果去到一家新公司，如何入手监控"'},"​")],-1)),a[10]||(a[10]=n("ul",null,[n("li",null,"1.硬件监控 路由器、交换机、防火墙"),n("li",null,"2.系统监控 CPU、内存、磁盘、网络、进程、 TCP"),n("li",null,"3.服务监控 nginx、 php、 tomcat、 redis、 memcache、 mysql"),n("li",null,"4.WEB 监控 请求时间、响应时间、加载时间、"),n("li",null,"5.日志监控 ELk（收集、存储、分析、展示） 日志易"),n("li",null,"6.安全监控 Firewalld、 WAF(Nginx+lua)、安全宝、牛盾云、安全狗"),n("li",null,"7.网络监控 smokeping 多机房"),n("li",null,"8.业务监控 活动引入多少流量、产生多少注册量、带来多大价值")],-1)),a[11]||(a[11]=n("h1",{id:"第二章-单机时代如何监控",tabindex:"-1"},[l("第二章 单机时代如何监控 "),n("a",{class:"header-anchor",href:"#第二章-单机时代如何监控","aria-label":'Permalink to "第二章 单机时代如何监控"'},"​")],-1)),a[12]||(a[12]=n("p",null,"CPU 监控命令: w、 top、 htop、 glances",-1)),a[13]||(a[13]=n("pre",null,[n("code",null,`%Cpu(s): 0.3 us, 0.3 sy, 0.0 ni, 99.3 id, 0.0 wa, 0.0 hi, 0.0 si, 0.0 st
us 用户态: 跟用户的操作有关 35%
sy 系统态: 跟内核的处理有关 60%
id CPU 空闲:
`)],-1)),a[14]||(a[14]=n("p",null,"内存监控命令: free",-1)),a[15]||(a[15]=n("pre",null,[n("code",null,`[root@m01 ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:           977M        105M        724M        6.6M        148M        729M
Swap:          1.0G          0B        1.0G
`)],-1)),a[16]||(a[16]=n("p",null,"磁盘监控命令: df、 iotop",-1)),a[17]||(a[17]=n("pre",null,[n("code",null,`Device: tps kB_read/s kB_wrtn/s kB_read kB_wrtn
sda 0.80 25.32 33.36 221034 291193
设备名 每秒传输次数 每秒读大小 每秒写大小 读的总大小 写的总大小
`)],-1)),a[18]||(a[18]=n("p",null,"网络监控命令: ifconfig、 route、 glances、 iftop、 nethogs、 netstat",-1)),a[19]||(a[19]=n("pre",null,[n("code",null,`单位换算
Mbps 100Mbps/8
MB 12MB
iftop 中间的<= =>这两个左右箭头，表示的是流量的方向。
TX：发送流量、 RX：接收流量、 TOTAL：总流量
#查看 TCP11 中状态
netstat -an|grep ESTABLISHED
netstat -rn # 查看路由信息
netstat -lntup
`)],-1)),a[20]||(a[20]=n("p",null,"随着时间的推移，用户不断的增多，服务随时可能扛不住会被 oom(out of memory)，当系统内存不足的时候，会 触发 oom 1.当系统内存不足的时候就会大量使用 swap 2.当系统大量使用 swap 的时候，系统会特别卡 注意: 有时可能内存还有剩余 300Mb-500Mb，但会发现 swap 依然被使用",-1)),a[21]||(a[21]=n("pre",null,[n("code",null,`[root@ZabbixServer ~]# dd if=/dev/zero of=/dev/null bs=800M
[root@ZabbixServer ~]# tail -f /var/log/messages
Out of memory: Kill process 2227 (dd) score 778 or sacrifice child
Killed process 2227 (dd) total-vm:906724kB, anon-rss:798820kB, file-rss:0kB
`)],-1)),a[22]||(a[22]=n("p",null,"3.那单机时代，如何使用 shell 脚本来实现服务器的监控 需求: 每隔 1 分钟监控一次内存,当你的可用内存低于 100m,发邮件报警,要求显示剩余内存",-1)),a[23]||(a[23]=n("ul",null,[n("li",null,[n("p",null,"1.怎么获取内存可用的值 free -m|awk '/^Mem/{print $NF}'")]),n("li",null,[n("p",null,"2.获取到内存可用的值如何和设定的阈值进行比较")]),n("li",null,[n("p",null,"3.比较如果大于 100m 则不处理，如果小于 100 则报警")]),n("li",null,[n("p",null,"4.如何每隔 1 分钟执行一次"),n("p",null,[l("[root@ZabbixServer ~]# cat free.sh #!/usr/bin/bash HostName=(hostname)_(hostname -i) Date="),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"("),n("mi",null,"d"),n("mi",null,"a"),n("mi",null,"t"),n("mi",null,"e"),n("mo",null,"+"),n("mi",null,"w"),n("mi",null,"h"),n("mi",null,"i"),n("mi",null,"l"),n("mi",null,"e"),n("mi",null,"t"),n("mi",null,"r"),n("mi",null,"u"),n("mi",null,"e"),n("mo",{separator:"true"},";"),n("mi",null,"d"),n("mi",null,"o"),n("mi",null,"F"),n("mi",null,"r"),n("mi",null,"e"),n("mi",null,"e"),n("mo",null,"=")]),n("annotation",{encoding:"application/x-tex"},"(date +%F) while true;do Free=")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"d"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),n("span",{class:"mord mathnormal"},"hi"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mord mathnormal"},"u"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mpunct"},";"),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"d"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),n("span",{class:"mord mathnormal"},"ree"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"=")])])]),l("(free -m|awk '/^Mem/{print $NF}') if [ "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"F"),n("mi",null,"r"),n("mi",null,"e"),n("mi",null,"e"),n("mo",null,"−"),n("mi",null,"l"),n("mi",null,"e"),n("mn",null,"100"),n("mo",{stretchy:"false"},"]"),n("mo",{separator:"true"},";"),n("mi",null,"t"),n("mi",null,"h"),n("mi",null,"e"),n("mi",null,"n"),n("mi",null,"e"),n("mi",null,"c"),n("mi",null,"h"),n("mi",null,"o"),n("mi",{mathvariant:"normal"},'"')]),n("annotation",{encoding:"application/x-tex"},'Free -le 100 ];then echo "')])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),n("span",{class:"mord mathnormal"},"ree"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord"},"100"),n("span",{class:"mclose"},"]"),n("span",{class:"mpunct"},";"),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"h"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord mathnormal"},"ec"),n("span",{class:"mord mathnormal"},"h"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord"},'"')])])]),l('Date: $HostName Mem Is < ${Free}MB" fi sleep 5 done')])])],-1)),a[24]||(a[24]=n("h1",{id:"第三章-zabbix-监控快速安装",tabindex:"-1"},[l("第三章 zabbix 监控快速安装 "),n("a",{class:"header-anchor",href:"#第三章-zabbix-监控快速安装","aria-label":'Permalink to "第三章 zabbix 监控快速安装"'},"​")],-1)),a[25]||(a[25]=n("h2",{id:"_1-配置zabbix仓库",tabindex:"-1"},[l("1.配置zabbix仓库 "),n("a",{class:"header-anchor",href:"#_1-配置zabbix仓库","aria-label":'Permalink to "1.配置zabbix仓库"'},"​")],-1)),a[26]||(a[26]=n("p",null,"###在这里提供zabbix4.2yum仓库可供日常使用",-1)),a[27]||(a[27]=n("p",null,[n("a",{href:"http://www.kococ.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz",target:"_blank",rel:"noreferrer"},"Zabbix4.2仓库链接"),l(" （"),n("a",{href:"http://www.xoxoyun.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz%EF%BC%89",target:"_blank",rel:"noreferrer"},"http://www.xoxoyun.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz）")],-1)),a[28]||(a[28]=n("pre",null,[n("code",null,`[root@m01 ~]# rpm -ivh http://mirrors.aliyun.com/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm
`)],-1)),a[29]||(a[29]=n("h2",{id:"file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包-以及-mysql、-zabbix-agent",tabindex:"-1"},[l('[file href="'),n("a",{href:"http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn",target:"_blank",rel:"noreferrer"},"http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn"),l('"]可用4.0镜像源[/file] 2.安装 Zabbix 程序包，以及 MySQL、 Zabbix-agent '),n("a",{class:"header-anchor",href:"#file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包-以及-mysql、-zabbix-agent","aria-label":`Permalink to "[file href="http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn"]可用4.0镜像源[/file]
2.安装 Zabbix 程序包，以及 MySQL、 Zabbix-agent"`},"​")],-1)),a[30]||(a[30]=n("pre",null,[n("code",null,`[root@m01 ~]# yum install -y zabbix-server-mysql zabbix-web-mysql zabbix-agent mariadb-server
`)],-1)),a[31]||(a[31]=n("p",null,"下载阿里云epel源base源",-1)),a[32]||(a[32]=n("pre",null,[n("code",null,`wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
yum install -y http://springdale.math.ias.edu/data/puias/unsupported/7/x86_64/iksemel-1.4-6.sdl7.x86_64.rpm

[root@m01 ~]# systemctl start mariadb.service && systemctl enable mariadb.service
`)],-1)),a[33]||(a[33]=n("h2",{id:"_3-创建-zabbix-数据库以及用户",tabindex:"-1"},[l("3.创建 Zabbix 数据库以及用户 "),n("a",{class:"header-anchor",href:"#_3-创建-zabbix-数据库以及用户","aria-label":'Permalink to "3.创建 Zabbix 数据库以及用户"'},"​")],-1)),a[34]||(a[34]=n("pre",null,[n("code",null,`[root@m01 ~]# mysqladmin password 123456
[root@m01 ~]# mysql -uroot -p123456
MariaDB [(none)]> create database zabbix character set utf8 collate utf8_bin;
MariaDB [(none)]> grant all privileges on zabbix.* to zabbix@localhost identified by 'zabbix';
MariaDB [(none)]> flush privileges;
`)],-1)),a[35]||(a[35]=n("h2",{id:"_4-导入-zabbix-数据至数据库中",tabindex:"-1"},[l("4.导入 Zabbix 数据至数据库中 "),n("a",{class:"header-anchor",href:"#_4-导入-zabbix-数据至数据库中","aria-label":'Permalink to "4.导入 Zabbix 数据至数据库中"'},"​")],-1)),a[36]||(a[36]=n("pre",null,[n("code",null,`[root@m01 ~]# zcat /usr/share/doc/zabbix-server-mysql-4.0.11/create.sql.gz | mysql -uzabbix -pzabbix zabbix
`)],-1)),a[37]||(a[37]=n("h2",{id:"_5-编辑-etc-zabbix-zabbix-server-conf-文件-修改数据库配置",tabindex:"-1"},[l("5.编辑/etc/zabbix/zabbix_server.conf 文件，修改数据库配置 "),n("a",{class:"header-anchor",href:"#_5-编辑-etc-zabbix-zabbix-server-conf-文件-修改数据库配置","aria-label":'Permalink to "5.编辑/etc/zabbix/zabbix_server.conf 文件，修改数据库配置"'},"​")],-1)),a[38]||(a[38]=n("pre",null,[n("code",null,`[root@m01 ~]# grep "^[a-Z]" /etc/zabbix/zabbix_server.conf 
...............
DBHost=localhost
DBName=zabbix
DBUser=zabbix
DBPassword=zabbix
...............
`)],-1)),a[39]||(a[39]=n("h2",{id:"_6-启动-zabbix-服务进程-并加入开机自启",tabindex:"-1"},[l("6.启动 Zabbix 服务进程，并加入开机自启 "),n("a",{class:"header-anchor",href:"#_6-启动-zabbix-服务进程-并加入开机自启","aria-label":'Permalink to "6.启动 Zabbix 服务进程，并加入开机自启"'},"​")],-1)),a[40]||(a[40]=n("pre",null,[n("code",null,`[root@m01 ~]# systemctl start zabbix-server.service 
[root@m01 ~]# systemctl enable zabbix-server.service
`)],-1)),a[41]||(a[41]=n("h2",{id:"_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf-修改时区",tabindex:"-1"},[l("7.配置 Apache 的配置文件/etc/httpd/conf.d/zabbix.conf，修改时区 "),n("a",{class:"header-anchor",href:"#_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf-修改时区","aria-label":'Permalink to "7.配置 Apache 的配置文件/etc/httpd/conf.d/zabbix.conf，修改时区"'},"​")],-1)),a[42]||(a[42]=n("pre",null,[n("code",null,`[root@m01 ~]# grep "Shanghai" /etc/httpd/conf.d/zabbix.conf 
        php_value date.timezone Asia/Shanghai
`)],-1)),a[43]||(a[43]=n("h2",{id:"_8-重启-apache-web-服务器",tabindex:"-1"},[l("8.重启 Apache Web 服务器 "),n("a",{class:"header-anchor",href:"#_8-重启-apache-web-服务器","aria-label":'Permalink to "8.重启 Apache Web 服务器"'},"​")],-1)),a[44]||(a[44]=n("h2",{id:"root-m01-systemctl-start-httpd",tabindex:"-1"},[l("[root@m01 ~]# systemctl start httpd "),n("a",{class:"header-anchor",href:"#root-m01-systemctl-start-httpd","aria-label":'Permalink to "[root@m01 ~]# systemctl start httpd"'},"​")],-1)),a[45]||(a[45]=n("h1",{id:"第四章-web安装步骤",tabindex:"-1"},[l("第四章 WEB安装步骤 "),n("a",{class:"header-anchor",href:"#第四章-web安装步骤","aria-label":'Permalink to "第四章 WEB安装步骤"'},"​")],-1)),a[46]||(a[46]=n("h2",{id:"_1-浏览器打开地址-http-192-168-10-66-zabbix-setup-php",tabindex:"-1"},[l("1.浏览器打开地址："),n("a",{href:"http://192.168.10.66/zabbix/setup.php",target:"_blank",rel:"noreferrer"},"http://192.168.10.66/zabbix/setup.php"),l(),n("a",{class:"header-anchor",href:"#_1-浏览器打开地址-http-192-168-10-66-zabbix-setup-php","aria-label":'Permalink to "1.浏览器打开地址：http://192.168.10.66/zabbix/setup.php"'},"​")],-1)),a[47]||(a[47]=n("figure",null,[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/194576284.png",alt:"1.png",loading:"lazy",decoding:"async"})],-1)),a[48]||(a[48]=n("h2",{id:"_2-检查依赖项是否存在异常",tabindex:"-1"},[l("2.检查依赖项是否存在异常 "),n("a",{class:"header-anchor",href:"#_2-检查依赖项是否存在异常","aria-label":'Permalink to "2.检查依赖项是否存在异常"'},"​")],-1)),a[49]||(a[49]=n("figure",null,[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/2386190024.png",alt:"2.png",loading:"lazy",decoding:"async"})],-1)),a[50]||(a[50]=n("h2",{id:"_3-配置zabbix连接数据库",tabindex:"-1"},[l("3.配置zabbix连接数据库 "),n("a",{class:"header-anchor",href:"#_3-配置zabbix连接数据库","aria-label":'Permalink to "3.配置zabbix连接数据库"'},"​")],-1)),a[51]||(a[51]=n("figure",null,[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/395866565.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[52]||(a[52]=n("h2",{id:"_4-配置-zabbixserver-服务器的信息",tabindex:"-1"},[l("4.配置 ZabbixServer 服务器的信息 "),n("a",{class:"header-anchor",href:"#_4-配置-zabbixserver-服务器的信息","aria-label":'Permalink to "4.配置 ZabbixServer 服务器的信息"'},"​")],-1)),a[53]||(a[53]=n("h2",{id:"_4-png5-最终确认检查",tabindex:"-1"},[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/3424985468.png",alt:"4.png"}),l(" 5.最终确认检查 "),n("a",{class:"header-anchor",href:"#_4-png5-最终确认检查","aria-label":`Permalink to "![4.png][6]
5.最终确认检查"`},"​")],-1)),a[54]||(a[54]=n("h2",{id:"_5-png6-安装成功",tabindex:"-1"},[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/3424985468.png",alt:"5.png"}),l(" 6.安装成功 "),n("a",{class:"header-anchor",href:"#_5-png6-安装成功","aria-label":`Permalink to "![5.png][7]
6.安装成功"`},"​")],-1)),a[55]||(a[55]=n("figure",null,[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/1365103457.png",alt:"6.png",loading:"lazy",decoding:"async"})],-1)),a[56]||(a[56]=n("p",null,"提示已成功地安装了 Zabbix 前端。配置文件/etc/zabbix/web/zabbix.conf.php 被创建。",-1)),a[57]||(a[57]=n("h2",{id:"_7-登陆zabbix",tabindex:"-1"},[l("7.登陆zabbix "),n("a",{class:"header-anchor",href:"#_7-登陆zabbix","aria-label":'Permalink to "7.登陆zabbix"'},"​")],-1)),a[58]||(a[58]=n("figure",null,[n("img",{src:"http://www.kcooc.cn/usr/uploads/2020/01/1375784407.png",alt:"7.png",loading:"lazy",decoding:"async"})],-1)),a[59]||(a[59]=n("p",null,"默认登陆 ZabbixWeb 的用户名 Admin，密码 zabbix",-1)),a[60]||(a[60]=n("h2",{id:"_8-调整字符集为中文",tabindex:"-1"},[l("8.调整字符集为中文 "),n("a",{class:"header-anchor",href:"#_8-调整字符集为中文","aria-label":'Permalink to "8.调整字符集为中文"'},"​")],-1)),a[61]||(a[61]=n("figure",null,[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/632295469.png",alt:"8.png",loading:"lazy",decoding:"async"})],-1)),a[62]||(a[62]=n("figure",null,[n("img",{src:"http://www.kcooc.cn/usr/uploads/2020/01/3064526244.png",alt:"9.png",loading:"lazy",decoding:"async"})],-1)),a[63]||(a[63]=n("h2",{id:"_9-修复中文乱码",tabindex:"-1"},[l("9.修复中文乱码 "),n("a",{class:"header-anchor",href:"#_9-修复中文乱码","aria-label":'Permalink to "9.修复中文乱码"'},"​")],-1)),a[64]||(a[64]=n("figure",null,[n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/172339092.png",alt:"10.png",loading:"lazy",decoding:"async"})],-1)),a[65]||(a[65]=n("p",null,"打开图形之后会发现语言为乱码，原因是缺少字体",-1)),a[66]||(a[66]=n("p",null,[n("strong",null,"解决方法:安装字体并替换现有字体")],-1)),a[67]||(a[67]=n("pre",null,[n("code",null,`[root@m01 ~]# yum install wqy-microhei-fonts -y
[root@m01 ~]# cp /usr/share/fonts/wqy-microhei/wqy-microhei.ttc /usr/share/zabbix/assets/fonts/graphfont.ttf
`)],-1)),a[68]||(a[68]=n("p",null,[l("再次刷新发现已经变成中文了 "),n("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/643160504.png",alt:"11.png"})],-1)),h("more"),a[69]||(a[69]=n("h1",{id:"第五章-zabbix-监控基础架构",tabindex:"-1"},[l("第五章 Zabbix 监控基础架构 "),n("a",{class:"header-anchor",href:"#第五章-zabbix-监控基础架构","aria-label":'Permalink to "第五章 Zabbix 监控基础架构"'},"​")],-1)),a[70]||(a[70]=n("p",null,[l("zabbix-agent(数据采集)—>zabbix-server(数据分析|报警)—> 数据库(数据存储)<—zabbix web(数据展示) "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-189ad59c27ddffec.png",alt:"请输入图片描述"})],-1)),a[71]||(a[71]=n("h1",{id:"第六章-zabbix-快速监控主机",tabindex:"-1"},[l("第六章 zabbix 快速监控主机 "),n("a",{class:"header-anchor",href:"#第六章-zabbix-快速监控主机","aria-label":'Permalink to "第六章 zabbix 快速监控主机"'},"​")],-1)),a[72]||(a[72]=n("h2",{id:"_1-安装zabbix-agent",tabindex:"-1"},[l("1.安装zabbix-agent "),n("a",{class:"header-anchor",href:"#_1-安装zabbix-agent","aria-label":'Permalink to "1.安装zabbix-agent"'},"​")],-1)),a[73]||(a[73]=n("pre",null,[n("code",null,`[root@web01 ~]# rpm -ivh https://mirror.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-agent-4.0.11-1.el7.x86_64.rpm
`)],-1)),a[74]||(a[74]=n("h2",{id:"_2-配置zabbix-agent",tabindex:"-1"},[l("2.配置zabbix-agent "),n("a",{class:"header-anchor",href:"#_2-配置zabbix-agent","aria-label":'Permalink to "2.配置zabbix-agent"'},"​")],-1)),a[75]||(a[75]=n("pre",null,[n("code",null,`[root@web01 ~]# grep "^[a-Z]" /etc/zabbix/zabbix_agentd.conf    
PidFile=/var/run/zabbix/zabbix_agentd.pid
LogFile=/var/log/zabbix/zabbix_agentd.log
LogFileSize=0
Server=10.0.1.61
ServerActive=127.0.0.1
Hostname=Zabbix server
Include=/etc/zabbix/zabbix_agentd.d/*.conf
`)],-1)),a[76]||(a[76]=n("p",null,"3.启动zabbix-agent并检查",-1)),a[77]||(a[77]=n("pre",null,[n("code",null,`[root@web01 ~]# systemctl start zabbix-agent.service 
[root@web01 ~]# systemctl enable zabbix-agent.service
[root@web01 ~]# netstat -lntup|grep 10050
tcp        0      0 0.0.0.0:10050           0.0.0.0:*               LISTEN      10351/zabbix_agentd 
tcp6       0      0 :::10050                :::*                    LISTEN      10351/zabbix_agentd 
`)],-1)),a[78]||(a[78]=n("h2",{id:"_4-zabbix-web界面-添加主机",tabindex:"-1"},[l("4.zabbix-web界面，添加主机 "),n("a",{class:"header-anchor",href:"#_4-zabbix-web界面-添加主机","aria-label":'Permalink to "4.zabbix-web界面，添加主机"'},"​")],-1)),a[79]||(a[79]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-10db69c42454d500.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[80]||(a[80]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-ceee736beb333ce5.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[81]||(a[81]=n("h1",{id:"请输入图片描述第七章-自定义监控主机",tabindex:"-1"},[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-5d12b07231386679.png",alt:"请输入图片描述"}),l(" 第七章 自定义监控主机 "),n("a",{class:"header-anchor",href:"#请输入图片描述第七章-自定义监控主机","aria-label":`Permalink to "![请输入图片描述][17]
第七章 自定义监控主机"`},"​")],-1)),a[82]||(a[82]=n("h2",{id:"_1-监控需求",tabindex:"-1"},[l("1.监控需求 "),n("a",{class:"header-anchor",href:"#_1-监控需求","aria-label":'Permalink to "1.监控需求"'},"​")],-1)),a[83]||(a[83]=n("p",null,"监控TCP11种状态集",-1)),a[84]||(a[84]=n("h2",{id:"_2-命令行实现",tabindex:"-1"},[l("2.命令行实现 "),n("a",{class:"header-anchor",href:"#_2-命令行实现","aria-label":'Permalink to "2.命令行实现"'},"​")],-1)),a[85]||(a[85]=n("pre",null,[n("code",null,`[root@web01 ~]# netstat -ant|grep -c TIME_WAIT
55
[root@web01 ~]# netstat -ant|grep -c LISTEN
12
`)],-1)),a[86]||(a[86]=n("h2",{id:"_3-编写zabbix监控文件-传参形式",tabindex:"-1"},[l("3.编写zabbix监控文件(传参形式) "),n("a",{class:"header-anchor",href:"#_3-编写zabbix监控文件-传参形式","aria-label":'Permalink to "3.编写zabbix监控文件(传参形式)"'},"​")],-1)),a[87]||(a[87]=n("pre",null,[n("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/tcp_status.conf 
UserParameter=tcp_state[*],netstat -ant|grep -c $1
root@web01 ~]# systemctl restart zabbix-agent.service
`)],-1)),a[88]||(a[88]=n("h2",{id:"_4-server端进行测试",tabindex:"-1"},[l("4.server端进行测试 "),n("a",{class:"header-anchor",href:"#_4-server端进行测试","aria-label":'Permalink to "4.server端进行测试"'},"​")],-1)),a[89]||(a[89]=n("pre",null,[n("code",null,`[root@m01 ~]# rpm -ivh https://mirrors.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm
[root@m01 ~]# yum install zabbix-get.x86_64 -y 
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k tcp_state[TIME_WAIT]
51
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k tcp_state[LISTEN]   
12
`)],-1)),a[90]||(a[90]=n("h2",{id:"_5-web端添加",tabindex:"-1"},[l("5.web端添加 "),n("a",{class:"header-anchor",href:"#_5-web端添加","aria-label":'Permalink to "5.web端添加"'},"​")],-1)),a[91]||(a[91]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-0b20f0a22391f3d1.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[92]||(a[92]=n("h2",{id:"请输入图片描述6-克隆监控项",tabindex:"-1"},[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-19c41a9832857c2b.png",alt:"请输入图片描述"}),l(" 6.克隆监控项 "),n("a",{class:"header-anchor",href:"#请输入图片描述6-克隆监控项","aria-label":`Permalink to "![请输入图片描述][19]
6.克隆监控项"`},"​")],-1)),a[93]||(a[93]=n("p",null,[l("由于TCP有多种状态，需要添加多个监控项，我们可以使用克隆快速达到创建的效果 "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-743524f196e73c5e.png",alt:"请输入图片描述"})],-1)),a[94]||(a[94]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-35342ea8d4cb7a44.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[95]||(a[95]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2e2be3806f3c1c42.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[96]||(a[96]=n("p",null,"其他的状态依次添加即可",-1)),a[97]||(a[97]=n("h2",{id:"_7-创建图形",tabindex:"-1"},[l("7.创建图形 "),n("a",{class:"header-anchor",href:"#_7-创建图形","aria-label":'Permalink to "7.创建图形"'},"​")],-1)),a[98]||(a[98]=n("h2",{id:"请输入图片描述8-查看图形",tabindex:"-1"},[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-6203bb8201c63361.png",alt:"请输入图片描述"}),l(" 8.查看图形 "),n("a",{class:"header-anchor",href:"#请输入图片描述8-查看图形","aria-label":`Permalink to "![请输入图片描述][23]
8.查看图形"`},"​")],-1)),a[99]||(a[99]=n("h2",{id:"请输入图片描述9-设置触发器",tabindex:"-1"},[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-a6cf4a1d2bdb3449.png",alt:"请输入图片描述"}),l(" 9.设置触发器 "),n("a",{class:"header-anchor",href:"#请输入图片描述9-设置触发器","aria-label":`Permalink to "![请输入图片描述][24]
9.设置触发器"`},"​")],-1)),a[100]||(a[100]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-98cb06eb3b07e1d5.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[101]||(a[101]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-37e7cc88098879d9.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[102]||(a[102]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-d684d487eb68da11.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[103]||(a[103]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2e3bc7010546c2a1.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[104]||(a[104]=n("h1",{id:"第八章-邮件报警",tabindex:"-1"},[l("第八章 邮件报警 "),n("a",{class:"header-anchor",href:"#第八章-邮件报警","aria-label":'Permalink to "第八章 邮件报警"'},"​")],-1)),a[105]||(a[105]=n("h2",{id:"_1-定义发件人",tabindex:"-1"},[l("1.定义发件人 "),n("a",{class:"header-anchor",href:"#_1-定义发件人","aria-label":'Permalink to "1.定义发件人"'},"​")],-1)),a[106]||(a[106]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-816d27e93e19aa6f.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[107]||(a[107]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-7e3279840e20452e.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[108]||(a[108]=n("h2",{id:"_2-定义收件人",tabindex:"-1"},[l("2.定义收件人 "),n("a",{class:"header-anchor",href:"#_2-定义收件人","aria-label":'Permalink to "2.定义收件人"'},"​")],-1)),a[109]||(a[109]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-57e702ed809d0b1b.png",alt:"https://upload-images.jianshu.io/upload_images/14248468-57e702ed809d0b1b.png",loading:"lazy",decoding:"async"})],-1)),a[110]||(a[110]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-ced9fc46c956b1e3.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[111]||(a[111]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-90efc1aa92eb84da.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[112]||(a[112]=n("h2",{id:"_3-自定义报警内容过",tabindex:"-1"},[l("3.自定义报警内容过 "),n("a",{class:"header-anchor",href:"#_3-自定义报警内容过","aria-label":'Permalink to "3.自定义报警内容过"'},"​")],-1)),a[113]||(a[113]=n("p",null,[l("定制报警内容： "),n("a",{href:"http://www.zabbix.com/documentation/4.0/zh/manual/appendix/macros/supported_by_location",target:"_blank",rel:"noreferrer"},"https://www.zabbix.com/documentation/4.0/zh/manual/appendix/macros/supported_by_location"),l(" 参考博客")],-1)),a[114]||(a[114]=n("p",null,[n("a",{href:"http://www.cnblogs.com/bixiaoyu/p/7302541.html",target:"_blank",rel:"noreferrer"},"https://www.cnblogs.com/bixiaoyu/p/7302541.html"),l(" 发送警告")],-1)),a[115]||(a[115]=n("pre",null,[n("code",null,`报警邮件标题可以使用默认信息，亦可使用如下中文报警内容
名称：Action-Email
默认标题：故障{TRIGGER.STATUS},服务器:{HOSTNAME1}发生: {TRIGGER.NAME}故障!
告警主机:{HOSTNAME1}
告警时间:{EVENT.DATE} {EVENT.TIME}
告警等级:{TRIGGER.SEVERITY}
告警信息: {TRIGGER.NAME}
告警项目:{TRIGGER.KEY1}
问题详情:{ITEM.NAME}:{ITEM.VALUE}
当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}
事件ID:{EVENT.ID}　
恢复警告
`)],-1)),a[116]||(a[116]=n("p",null,"恢复标题：恢复{TRIGGER.STATUS}, 服务器:{HOSTNAME1}: {TRIGGER.NAME}已恢复!",-1)),a[117]||(a[117]=n("pre",null,[n("code",null,`恢复信息：
告警主机:{HOSTNAME1}
告警时间:{EVENT.DATE} {EVENT.TIME}
告警等级:{TRIGGER.SEVERITY}
告警信息: {TRIGGER.NAME}
告警项目:{TRIGGER.KEY1}
问题详情:{ITEM.NAME}:{ITEM.VALUE}
当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}
事件ID:{EVENT.ID}
`)],-1)),a[118]||(a[118]=n("h1",{id:"第九章-微信报警",tabindex:"-1"},[l("第九章 微信报警 "),n("a",{class:"header-anchor",href:"#第九章-微信报警","aria-label":'Permalink to "第九章 微信报警"'},"​")],-1)),a[119]||(a[119]=n("h2",{id:"_1-查看配置文件里的脚本目录路径",tabindex:"-1"},[l("1.查看配置文件里的脚本目录路径 "),n("a",{class:"header-anchor",href:"#_1-查看配置文件里的脚本目录路径","aria-label":'Permalink to "1.查看配置文件里的脚本目录路径"'},"​")],-1)),a[120]||(a[120]=n("pre",null,[n("code",null,`[root@m01 ~]# grep "^AlertScriptsPath" /etc/zabbix/zabbix_server.conf
AlertScriptsPath=/usr/lib/zabbix/alertscripts
`)],-1)),a[121]||(a[121]=n("h2",{id:"_2-将weixin-py放在zabbix特定目录",tabindex:"-1"},[l("2.将weixin.py放在zabbix特定目录 "),n("a",{class:"header-anchor",href:"#_2-将weixin-py放在zabbix特定目录","aria-label":'Permalink to "2.将weixin.py放在zabbix特定目录"'},"​")],-1)),a[122]||(a[122]=n("pre",null,[n("code",null,`[root@m01 /usr/lib/zabbix/alertscripts]# ll
总用量 4
-rwxr-xr-x 1 root root 1344 8月   7 21:58 weixin.py
`)],-1)),a[123]||(a[123]=n("h2",{id:"_3-配置发信人",tabindex:"-1"},[l("3.配置发信人 "),n("a",{class:"header-anchor",href:"#_3-配置发信人","aria-label":'Permalink to "3.配置发信人"'},"​")],-1)),a[124]||(a[124]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-75d0cf249f19bafe.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[125]||(a[125]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-7f1aaedd340ef02f.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[126]||(a[126]=n("h2",{id:"_4-配置收信人",tabindex:"-1"},[l("4.配置收信人 "),n("a",{class:"header-anchor",href:"#_4-配置收信人","aria-label":'Permalink to "4.配置收信人"'},"​")],-1)),a[127]||(a[127]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9709cce24dcb910a.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[128]||(a[128]=n("h2",{id:"_5-登陆企业微信公众号添加账户",tabindex:"-1"},[l("5.登陆企业微信公众号添加账户 "),n("a",{class:"header-anchor",href:"#_5-登陆企业微信公众号添加账户","aria-label":'Permalink to "5.登陆企业微信公众号添加账户"'},"​")],-1)),a[129]||(a[129]=n("p",null,[n("a",{href:"https://work.weixin.qq.com/wework_admin/loginpage_wx",target:"_blank",rel:"noreferrer"},"https://work.weixin.qq.com/wework_admin/loginpage_wx"),l(" 1.登陆后在企业号上新建应用")],-1)),a[130]||(a[130]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-1ae7607fe5113d11.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[131]||(a[131]=n("p",null,"2.上传logo，填写应用名称 ，应用介绍等",-1)),a[132]||(a[132]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-ee6bc21e8c1e9d39.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[133]||(a[133]=n("p",null,[l("3.查看启动应用 同时会生成应用的AgentId以及Secret，这个在后面步骤会有用 "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2cccdc342330c5d0.png",alt:"请输入图片描述"})],-1)),a[134]||(a[134]=n("p",null,[l("4.接口调用测试 "),n("a",{href:"http://work.weixin.qq.com/api/devtools/devtool.php",target:"_blank",rel:"noreferrer"},"http://work.weixin.qq.com/api/devtools/devtool.php"),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-f24ffa3b5922d0c0.png",alt:"请输入图片描述"})],-1)),a[135]||(a[135]=n("p",null,"这里的corpid为公司ID",-1)),a[136]||(a[136]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-03544eed481caa53.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[137]||(a[137]=n("p",null,"Corpsecret就是刚才创建应用生成的Secrt，确认没问题填写进去然后下一步 如果没问题会显示200状态码",-1)),a[138]||(a[138]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-c6aba38bf4da189c.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[139]||(a[139]=n("p",null,"6.添加成员",-1)),a[140]||(a[140]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-27ba2ae8bf3773fb.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[141]||(a[141]=n("p",null,"7.关注公众号",-1)),a[142]||(a[142]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-b0341893f157d0fb.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[143]||(a[143]=n("p",null,"8.查看自己的账号",-1)),a[144]||(a[144]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-8247e4f85f7ddc9a.png",alt:"加粗文字",loading:"lazy",decoding:"async"})],-1)),a[145]||(a[145]=n("p",null,"9.修改脚本里的信息",-1)),a[146]||(a[146]=n("pre",null,[n("code",null,`[root@m01 /usr/lib/zabbix/alertscripts]# cat weixin.py 
..............
corpid='微信企业号corpid'
appsecret='应用的Secret'
agentid=应用的id
..............
`)],-1)),a[147]||(a[147]=n("p",null,"10.发信测试",-1)),a[148]||(a[148]=n("pre",null,[n("code",null,`[root@m01 /usr/lib/zabbix/alertscripts]# python  weixin.py  你的账号  '发信测试'  ‘微信测试消息’
`)],-1)),a[149]||(a[149]=n("p",null,"11.微信号上查看",-1)),a[150]||(a[150]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9f1dc0fa9d6b8abb.png",alt:"",loading:"lazy",decoding:"async"})],-1)),a[151]||(a[151]=n("p",null,"12.发送到整个微信组 虽然我们实现了发送到单个用户的功能，但是如果我们的用户比较多，这样还是麻烦的，不过我们可以发送到整个组，其实脚本里已经预留好了配置，只不过默认注释了。 将脚本修改为以下内容，注释掉用户，打开组设置",-1)),a[152]||(a[152]=n("pre",null,[n("code",null,`#!/usr/bin/env python

import requests
import sys
import os
import json
import logging

logging.basicConfig(level = logging.DEBUG, format = '%(asctime)s, %(filename)s, %(levelname)s, %(message)s',
                datefmt = '%a, %d %b %Y %H:%M:%S',
                filename = os.path.join('/tmp','weixin.log'),
                filemode = 'a')
corpid='wwd26fdfb9940e7efa'
appsecret='Btg89FnZfMu0k7l6b4iagmAR5Z9TCgKknYbx-SMQvmg'
agentid=1000005

token_url='https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=' + corpid + '&corpsecret=' + appsecret
req=requests.get(token_url)
accesstoken=req.json()['access_token']

msgsend_url='https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=' + accesstoken

#touser=sys.argv[1]
toparty=sys.argv[1]
subject=sys.argv[2]
message=sys.argv[2] + "\\n\\n" +sys.argv[3]

params={
        #"touser": touser,
        "toparty": toparty,
        "msgtype": "text",
        "agentid": agentid,
        "text": {
                "content": message
        },
        "safe":0
}

req=requests.post(msgsend_url, data=json.dumps(params))

logging.info('sendto:' + toparty + ';;subject:' + subject + ';;message:' + message)                                                                              
12.随机发送到指定用户玩笑脚本
#!/bin/bash 
num=$(echo $(($RANDOM%28+1)))
name=$(sed -n "\${num}p" name.txt)
ok_boy=$(grep -v "\${name}" name.txt)

for ok in \${ok_boy}
do
  python  weixin.py \${ok}  "$1"  "$2"
done
`)],-1)),a[153]||(a[153]=n("h1",{id:"第十章-自定义模版",tabindex:"-1"},[l("第十章 自定义模版 "),n("a",{class:"header-anchor",href:"#第十章-自定义模版","aria-label":'Permalink to "第十章 自定义模版"'},"​")],-1)),a[154]||(a[154]=n("h2",{id:"_1-监控tcp11种状态",tabindex:"-1"},[l("1.监控TCP11种状态 "),n("a",{class:"header-anchor",href:"#_1-监控tcp11种状态","aria-label":'Permalink to "1.监控TCP11种状态"'},"​")],-1)),a[155]||(a[155]=n("p",null,"编写zabbix配置文件",-1)),a[156]||(a[156]=n("pre",null,[n("code",null,`[root@web01 /etc/zabbix/zabbix_agentd.d]# cat zbx_tcp.conf 
UserParameter=ESTABLISHED,netstat -ant|grep  -c 'ESTABLISHED'
UserParameter=SYN_SENT,netstat -ant|grep  -c 'SYN_SENT'
UserParameter=SYN_RECV,netstat -ant|grep  -c 'SYN_RECV'
UserParameter=FIN_WAIT1,netstat -ant|grep  -c 'FIN_WAIT1'
UserParameter=FIN_WAIT2,netstat -ant|grep  -c 'FIN_WAIT2'
UserParameter=TIME_WAIT,netstat -ant|grep  -c 'TIME_WAIT'
UserParameter=CLOSE,netstat -ant|grep  -c 'CLOSE'
UserParameter=CLOSE_WAIT,netstat -ant|grep  -c 'CLOSE_WAIT'
UserParameter=LAST_ACK,netstat -ant|grep  -c 'LAST_ACK'
UserParameter=LISTEN,netstat -ant|grep  -c 'LISTEN'
UserParameter=CLOSING,netstat -ant|grep  -c 'CLOSING'
`)],-1)),a[157]||(a[157]=n("h2",{id:"_2-重启zabbix-agent",tabindex:"-1"},[l("2.重启zabbix-agent "),n("a",{class:"header-anchor",href:"#_2-重启zabbix-agent","aria-label":'Permalink to "2.重启zabbix-agent"'},"​")],-1)),a[158]||(a[158]=n("pre",null,[n("code",null,`[root@web01 ~]# systemctl restart zabbix-agent.service 
`)],-1)),a[159]||(a[159]=n("h2",{id:"_3-测试监控项",tabindex:"-1"},[l("3.测试监控项 "),n("a",{class:"header-anchor",href:"#_3-测试监控项","aria-label":'Permalink to "3.测试监控项"'},"​")],-1)),a[160]||(a[160]=n("p",null,"使用zabbix-get命令测试",-1)),a[161]||(a[161]=n("pre",null,[n("code",null,`[root@m01 ~]# yum install zabbix-get.x86_64 -y
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k ESTABLISHED
2
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k LISTEN
12
`)],-1)),a[162]||(a[162]=n("p",null,"4.导入模版文件",-1)),a[163]||(a[163]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-bf27be32d233f194.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[164]||(a[164]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-784f18988c7debab.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[165]||(a[165]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2a388d1ec74725e9.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[166]||(a[166]=n("p",null,[l("5.主机关联模版文件 "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9070da45843e2644.png",alt:"请输入图片描述"})],-1)),a[167]||(a[167]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-0ab34947877205eb.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[168]||(a[168]=n("p",null,[l("6.查看最新数据 "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-e17fda198f1ec1ac.png",alt:"请输入图片描述"})],-1)),a[169]||(a[169]=n("p",null,[l("7.查看图形 "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9c011ab3f383de99.png",alt:"请输入图片描述"})],-1)),a[170]||(a[170]=n("h2",{id:"第x章-自定义模版监控nginx状态",tabindex:"-1"},[l("第x章 自定义模版监控nginx状态 "),n("a",{class:"header-anchor",href:"#第x章-自定义模版监控nginx状态","aria-label":'Permalink to "第x章 自定义模版监控nginx状态"'},"​")],-1)),a[171]||(a[171]=n("h2",{id:"_1-开启监控页面并访问测试",tabindex:"-1"},[l("1.开启监控页面并访问测试 "),n("a",{class:"header-anchor",href:"#_1-开启监控页面并访问测试","aria-label":'Permalink to "1.开启监控页面并访问测试"'},"​")],-1)),a[172]||(a[172]=n("pre",null,[n("code",null,`[root@web01 ~]# cat /etc/nginx/conf.d/status.conf 
server {
   listen 80;
   server_name localhost;
   location /nginx_status {
       stub_status on;
       access_log off;
   }
}

[root@web01 ~]# curl 127.0.0.1/nginx_status/
Active connections: 1 
server accepts handled requests
 6 6 6 
Reading: 0 Writing: 1 Waiting: 0 
`)],-1)),a[173]||(a[173]=n("h2",{id:"_2-准备nginx监控状态脚本",tabindex:"-1"},[l("2.准备nginx监控状态脚本 "),n("a",{class:"header-anchor",href:"#_2-准备nginx监控状态脚本","aria-label":'Permalink to "2.准备nginx监控状态脚本"'},"​")],-1)),a[174]||(a[174]=n("pre",null,[n("code",null,`[root@web01 /etc/zabbix/zabbix_agentd.d]# cat nginx_monitor.sh 
#!/bin/bash
NGINX_COMMAND=$1
CACHEFILE="/tmp/nginx_status.txt"
CMD="/usr/bin/curl http://127.0.0.1/nginx_status/"
if [ ! -f $CACHEFILE  ];then
   $CMD >$CACHEFILE 2>/dev/null
fi
# Check and run the script
TIMEFLM=\`stat -c %Y $CACHEFILE\`
TIMENOW=\`date +%s\`

if [ \`expr $TIMENOW - $TIMEFLM\` -gt 60 ]; then
    rm -f $CACHEFILE
fi
if [ ! -f $CACHEFILE  ];then
   $CMD >$CACHEFILE 2>/dev/null
fi

nginx_active(){
         grep 'Active' $CACHEFILE| awk '{print $NF}'
         exit 0;
}
nginx_reading(){
         grep 'Reading' $CACHEFILE| awk '{print $2}'
         exit 0;
}
nginx_writing(){
         grep 'Writing' $CACHEFILE | awk '{print $4}'
         exit 0;
}
nginx_waiting(){
         grep 'Waiting' $CACHEFILE| awk '{print $6}'
         exit 0;
}
nginx_accepts(){
         awk NR==3 $CACHEFILE| awk '{print $1}' 
         exit 0;
}
nginx_handled(){
         awk NR==3 $CACHEFILE| awk '{print $2}' 
         exit 0;
}
nginx_requests(){
         awk NR==3 $CACHEFILE| awk '{print $3}'
         exit 0;
}

case $NGINX_COMMAND in
    active)
        nginx_active;
        ;;
    reading)
        nginx_reading;
        ;;
    writing)
        nginx_writing;
        ;;
    waiting)
        nginx_waiting;
        ;;
    accepts)
        nginx_accepts;
        ;;
    handled)
        nginx_handled;
        ;;
    requests)
        nginx_requests;
        ;;
    *)
echo 'Invalid credentials';
exit 2;
esac
`)],-1)),a[175]||(a[175]=n("h2",{id:"_3-编写zabbix监控配置文件",tabindex:"-1"},[l("3.编写zabbix监控配置文件 "),n("a",{class:"header-anchor",href:"#_3-编写zabbix监控配置文件","aria-label":'Permalink to "3.编写zabbix监控配置文件"'},"​")],-1)),a[176]||(a[176]=n("pre",null,[n("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/nginx_status.conf
UserParameter=nginx_status[*],/bin/bash /etc/zabbix/zabbix_agentd.d/nginx_monitor.sh $1

[root@web01 ~]# systemctl restart zabbix-agent.service
`)],-1)),a[177]||(a[177]=n("h2",{id:"_4-使用zabbix-get取值",tabindex:"-1"},[l("4.使用zabbix_get取值 "),n("a",{class:"header-anchor",href:"#_4-使用zabbix-get取值","aria-label":'Permalink to "4.使用zabbix_get取值"'},"​")],-1)),a[178]||(a[178]=n("pre",null,[n("code",null,`[root@m01 ~]# zabbix_get -s 10.0.1.7 -k nginx_status[accepts]
7
`)],-1)),a[179]||(a[179]=n("h2",{id:"_5-导入模版",tabindex:"-1"},[l("5.导入模版 "),n("a",{class:"header-anchor",href:"#_5-导入模版","aria-label":'Permalink to "5.导入模版"'},"​")],-1)),a[180]||(a[180]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-c3bbd17a2587f6b4.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[181]||(a[181]=n("h2",{id:"_6-链接模版",tabindex:"-1"},[l("6.链接模版 "),n("a",{class:"header-anchor",href:"#_6-链接模版","aria-label":'Permalink to "6.链接模版"'},"​")],-1)),a[182]||(a[182]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-7f460c46106c792c.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[183]||(a[183]=n("p",null,[l("7.查看数据 "),n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-3edb2a100a2a3987.png",alt:"请输入图片描述"})],-1)),a[184]||(a[184]=n("h1",{id:"第x章-自定义模版监控php状态",tabindex:"-1"},[l("第x章 自定义模版监控php状态 "),n("a",{class:"header-anchor",href:"#第x章-自定义模版监控php状态","aria-label":'Permalink to "第x章 自定义模版监控php状态"'},"​")],-1)),a[185]||(a[185]=n("h2",{id:"_1-开启监控页面",tabindex:"-1"},[l("1.开启监控页面 "),n("a",{class:"header-anchor",href:"#_1-开启监控页面","aria-label":'Permalink to "1.开启监控页面"'},"​")],-1)),a[186]||(a[186]=n("pre",null,[n("code",null,`[root@web01 ~]# tail -1 /etc/php-fpm.d/www.conf    
pm.status_path = /php_status

[root@web01 ~]# cat /etc/nginx/conf.d/status.conf    
server {
   listen 80;
   server_name localhost;
   location /nginx_status {
       stub_status on;
       access_log off;
   }

   location /php_status {
       fastcgi_pass 127.0.0.1:9000;
       fastcgi_index index.php;
       fastcgi_param SCRIPT_FILENAME html$fastcgi_script_name;
       include fastcgi_params;
   }
}

[root@web01 ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@web01 ~]# systemctl restart nginx.service php-fpm.service
`)],-1)),a[187]||(a[187]=n("h2",{id:"_2-访问测试",tabindex:"-1"},[l("2.访问测试 "),n("a",{class:"header-anchor",href:"#_2-访问测试","aria-label":'Permalink to "2.访问测试"'},"​")],-1)),a[188]||(a[188]=n("pre",null,[n("code",null,`[root@web01 ~]# curl 127.0.0.1/php_status
pool:                 www
process manager:      dynamic
start time:           08/Aug/2019:22:31:27 +0800
start since:          37
accepted conn:        1
listen queue:         0
max listen queue:     0
listen queue len:     128
idle processes:       4
active processes:     1
total processes:      5
max active processes: 1
max children reached: 0
slow requests:        0
`)],-1)),a[189]||(a[189]=n("h2",{id:"_3-准备访问脚本",tabindex:"-1"},[l("3.准备访问脚本 "),n("a",{class:"header-anchor",href:"#_3-准备访问脚本","aria-label":'Permalink to "3.准备访问脚本"'},"​")],-1)),a[190]||(a[190]=n("pre",null,[n("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/fpm.sh 
#!/bin/bash
##################################
# Zabbix monitoring script
#
# php-fpm:
#  - anything available via FPM status page
#
##################################
# Contact:
#  vincent.viallet@gmail.com
##################################
# ChangeLog:
#  20100922     VV      initial creation
##################################

# Zabbix requested parameter
ZBX_REQ_DATA="$1"
ZBX_REQ_DATA_URL="$2"

# Nginx defaults
NGINX_STATUS_DEFAULT_URL="http://localhost/fpm/status"
WGET_BIN="/usr/bin/wget"

#
# Error handling:
#  - need to be displayable in Zabbix (avoid NOT_SUPPORTED)
#  - items need to be of type "float" (allow negative + float)
#
ERROR_NO_ACCESS_FILE="-0.91"
ERROR_NO_ACCESS="-0.92"
ERROR_WRONG_PARAM="-0.93"
ERROR_DATA="-0.94" # either can not connect /   bad host / bad port

# Handle host and port if non-default
if [ ! -z "$ZBX_REQ_DATA_URL" ]; then
  URL="$ZBX_REQ_DATA_URL"
else
  URL="$NGINX_STATUS_DEFAULT_URL"
fi

# save the nginx stats in a variable for future parsing
NGINX_STATS=$($WGET_BIN -q $URL -O - 2>/dev/null)

# error during retrieve
if [ $? -ne 0 -o -z "$NGINX_STATS" ]; then
  echo $ERROR_DATA
  exit 1
fi

# 
# Extract data from nginx stats
#
#RESULT=$(echo "$NGINX_STATS" | awk 'print $0;match($0, "^'"$ZBX_REQ_DATA"':[[:space:]]+(.*)", a) { print a[1] }')
#RESULT=$(echo "$NGINX_STATS" | grep "$ZBX_REQ_DATA" | awk -F : '{print $2}')
RESULT=$(echo "$NGINX_STATS" | awk -F : "{if(\\$1==\\"$ZBX_REQ_DATA\\") print \\$2}")
if [ $? -ne 0 -o -z "$RESULT" ]; then
    echo $ERROR_WRONG_PARAM
    exit 1
fi

echo $RESULT

exit 0

[root@web01 ~]# bash /etc/zabbix/zabbix_agentd.d/fpm.sh "total processes" http://127.0.0.1/php_status
5
`)],-1)),a[191]||(a[191]=n("p",null,"4.准备zabbix配置文件",-1)),a[192]||(a[192]=n("pre",null,[n("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/fpm.conf    
UserParameter=php-fpm[*],/etc/zabbix/zabbix_agentd.d/fpm.sh "$1" "$2"
[root@web01 ~]# systemctl restart zabbix-agent.service
4.使用zabbix_get取值
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k php-fpm["total processes",http://127.0.0.1/php_status]
5
`)],-1)),a[193]||(a[193]=n("p",null,"5.导入模版 导入之后需要修改一下模版里的宏配置",-1)),a[194]||(a[194]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-e9002db6117b2a36.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[195]||(a[195]=n("h1",{id:"第x章-web监控",tabindex:"-1"},[l("第x章 WEB监控 "),n("a",{class:"header-anchor",href:"#第x章-web监控","aria-label":'Permalink to "第x章 WEB监控"'},"​")],-1)),a[196]||(a[196]=n("p",null,"需求，监控页面状态码",-1)),a[197]||(a[197]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-5b73f2eb0bbc026e.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[198]||(a[198]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-29b41892ec2a2652.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[199]||(a[199]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-4d04849ba09f7aa2.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[200]||(a[200]=n("h1",{id:"第x章-故障记录",tabindex:"-1"},[l("第x章 故障记录 "),n("a",{class:"header-anchor",href:"#第x章-故障记录","aria-label":'Permalink to "第x章 故障记录"'},"​")],-1)),a[201]||(a[201]=n("h2",{id:"故障1",tabindex:"-1"},[l("故障1 "),n("a",{class:"header-anchor",href:"#故障1","aria-label":'Permalink to "故障1"'},"​")],-1)),a[202]||(a[202]=n("p",null,"故障现象： 提示zabbix-server is not running",-1)),a[203]||(a[203]=n("figure",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-5ec40e3f9f9c0b22.png",alt:"请输入图片描述",loading:"lazy",decoding:"async"})],-1)),a[204]||(a[204]=n("p",null,"报错日志：",-1)),a[205]||(a[205]=n("pre",null,[n("code",null,` 34983:20190807:202215.171 database is down: reconnecting in 10 seconds
 34983:20190807:202225.172 [Z3001] connection to database 'zabbix' failed: [1045] Access denied for user 'zabbix'@'localhost' (using password: NO)
`)],-1)),a[206]||(a[206]=n("p",null,"故障原因： zabbix-server的配置文件里配有配置数据库密码 故障解决： 添加正确的数据库账号密码信息",-1)),a[207]||(a[207]=n("pre",null,[n("code",null,`[root@m01 ~]# grep "^DB" /etc/zabbix/zabbix_server.conf     
DBHost=localhost
DBName=zabbix
DBUser=zabbix
DBPassword=zabbix
`)],-1)),a[208]||(a[208]=n("h2",{id:"故障2",tabindex:"-1"},[l("故障2 "),n("a",{class:"header-anchor",href:"#故障2","aria-label":'Permalink to "故障2"'},"​")],-1)),a[209]||(a[209]=n("p",null,"故障现象：微信报警失败 报错日志：",-1)),a[210]||(a[210]=n("pre",null,[n("code",null,`[root@m01 ~]# tail -f /var/log/zabbix/zabbix_server.log 
Problem name: TIME_WAIT过多
Host: web01
Severity: Average

Original problem ID: 51
'": Traceback (most recent call last):
  File "/usr/lib/zabbix/alertscripts/weixin.py", line 7, in <module>
    import requests
ImportError: No module named requests
`)],-1)),a[211]||(a[211]=n("p",null,"问题原因： 缺少模块 requests",-1)),a[212]||(a[212]=n("p",null,"问题解决： 安装缺失的依赖包",-1)),a[213]||(a[213]=n("pre",null,[n("code",null,`[root@m01 ~]# yum install python-pip
[root@m01 ~]# pip install --upgrade pip
[root@m01 ~]# pip install requests
`)],-1)),a[214]||(a[214]=n("h2",{id:"故障3",tabindex:"-1"},[l("故障3 "),n("a",{class:"header-anchor",href:"#故障3","aria-label":'Permalink to "故障3"'},"​")],-1)),a[215]||(a[215]=n("p",null,"故障现象： 在server端使用zabbix_get命令测试键值命令时提示警告",-1)),a[216]||(a[216]=n("pre",null,[n("code",null,`[root@m01 ~]# zabbix_get -s 10.0.1.7 -k ESTABLISHED  
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
2
`)],-1)),a[217]||(a[217]=n("p",null,"问题原因： zabbix_agent是以普通用户zabbix运行的，而普通用户执行netstat -antp时会有警告，网上查找发现只要不是用p参数就可以以普通用户运行 解决方案： 监控脚本里的命令修改为netstat -ant",-1)),a[218]||(a[218]=n("hr",null,null,-1)),a[219]||(a[219]=n("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1))]),"main-header":i(()=>[t(e.$slots,"main-header")]),"main-header-after":i(()=>[t(e.$slots,"main-header-after")]),"main-nav":i(()=>[t(e.$slots,"main-nav")]),"main-content-before":i(()=>[t(e.$slots,"main-content-before")]),"main-content":i(()=>[t(e.$slots,"main-content")]),"main-content-after":i(()=>[t(e.$slots,"main-content-after")]),"main-nav-before":i(()=>[t(e.$slots,"main-nav-before")]),"main-nav-after":i(()=>[t(e.$slots,"main-nav-after")]),comment:i(()=>[t(e.$slots,"comment")]),footer:i(()=>[t(e.$slots,"footer")]),aside:i(()=>[t(e.$slots,"aside")]),"aside-custom":i(()=>[t(e.$slots,"aside-custom")]),default:i(()=>[t(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{B as default,E as usePageData};
