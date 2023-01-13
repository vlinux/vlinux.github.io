import{_ as o}from"./ValaxyMain-69d5034a.js";import{_ as d,p as c,c as h,w as t,o as _,a as b,r as i,b as e,R as n}from"./app-2f70f213.js";import"./YunFooter-5ce7538e.js";import"./YunCard-e25878d2.js";import"./YunPageHeader-cb5c6fff.js";const $a=JSON.parse('{"title":"初识Zabbix4.0~","description":"","frontmatter":{"title":"初识Zabbix4.0~","categories":"默认分类","tags":["Zabbix"],"date":"2019-05-09T23:09:00.000Z"},"headers":[{"level":2,"title":"1.为什么要使用监控","slug":"_1-为什么要使用监控","link":"#_1-为什么要使用监控","children":[]},{"level":2,"title":"2.如何进行监控，比如我们需要监控磁盘的使用率","slug":"_2-如何进行监控，比如我们需要监控磁盘的使用率","link":"#_2-如何进行监控，比如我们需要监控磁盘的使用率","children":[]},{"level":2,"title":"3.流行的监控工具","slug":"_3-流行的监控工具","link":"#_3-流行的监控工具","children":[]},{"level":2,"title":"4.如果去到一家新公司，如何入手监控","slug":"_4-如果去到一家新公司，如何入手监控","link":"#_4-如果去到一家新公司，如何入手监控","children":[]},{"level":2,"title":"1.配置zabbix仓库","slug":"_1-配置zabbix仓库","link":"#_1-配置zabbix仓库","children":[]},{"level":2,"title":"[file href=\\"http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn\\"]可用4.0镜像源[/file]2.安装 Zabbix 程序包，以及 MySQL、 Zabbix-agent","slug":"file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包，以及-mysql、-zabbix-agent","link":"#file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包，以及-mysql、-zabbix-agent","children":[]},{"level":2,"title":"3.创建 Zabbix 数据库以及用户","slug":"_3-创建-zabbix-数据库以及用户","link":"#_3-创建-zabbix-数据库以及用户","children":[]},{"level":2,"title":"4.导入 Zabbix 数据至数据库中","slug":"_4-导入-zabbix-数据至数据库中","link":"#_4-导入-zabbix-数据至数据库中","children":[]},{"level":2,"title":"5.编辑/etc/zabbix/zabbix_server.conf 文件，修改数据库配置","slug":"_5-编辑-etc-zabbix-zabbix-server-conf-文件，修改数据库配置","link":"#_5-编辑-etc-zabbix-zabbix-server-conf-文件，修改数据库配置","children":[]},{"level":2,"title":"6.启动 Zabbix 服务进程，并加入开机自启","slug":"_6-启动-zabbix-服务进程，并加入开机自启","link":"#_6-启动-zabbix-服务进程，并加入开机自启","children":[]},{"level":2,"title":"7.配置 Apache 的配置文件/etc/httpd/conf.d/zabbix.conf，修改时区","slug":"_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf，修改时区","link":"#_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf，修改时区","children":[]},{"level":2,"title":"8.重启 Apache Web 服务器","slug":"_8-重启-apache-web-服务器","link":"#_8-重启-apache-web-服务器","children":[]},{"level":2,"title":"[root@m01 ~]# systemctl start httpd","slug":"root-m01-systemctl-start-httpd","link":"#root-m01-systemctl-start-httpd","children":[]},{"level":2,"title":"1.浏览器打开地址：http://192.168.10.66/zabbix/setup.php","slug":"_1-浏览器打开地址：http-192-168-10-66-zabbix-setup-php","link":"#_1-浏览器打开地址：http-192-168-10-66-zabbix-setup-php","children":[]},{"level":2,"title":"2.检查依赖项是否存在异常","slug":"_2-检查依赖项是否存在异常","link":"#_2-检查依赖项是否存在异常","children":[]},{"level":2,"title":"3.配置zabbix连接数据库","slug":"_3-配置zabbix连接数据库","link":"#_3-配置zabbix连接数据库","children":[]},{"level":2,"title":"4.配置 ZabbixServer 服务器的信息","slug":"_4-配置-zabbixserver-服务器的信息","link":"#_4-配置-zabbixserver-服务器的信息","children":[]},{"level":2,"title":"5.最终确认检查","slug":"_5-最终确认检查","link":"#_5-最终确认检查","children":[]},{"level":2,"title":"6.安装成功","slug":"_6-安装成功","link":"#_6-安装成功","children":[]},{"level":2,"title":"7.登陆zabbix","slug":"_7-登陆zabbix","link":"#_7-登陆zabbix","children":[]},{"level":2,"title":"8.调整字符集为中文","slug":"_8-调整字符集为中文","link":"#_8-调整字符集为中文","children":[]},{"level":2,"title":"9.修复中文乱码","slug":"_9-修复中文乱码","link":"#_9-修复中文乱码","children":[]},{"level":2,"title":"1.安装zabbix-agent","slug":"_1-安装zabbix-agent","link":"#_1-安装zabbix-agent","children":[]},{"level":2,"title":"2.配置zabbix-agent","slug":"_2-配置zabbix-agent","link":"#_2-配置zabbix-agent","children":[]},{"level":2,"title":"4.zabbix-web界面，添加主机","slug":"_4-zabbix-web界面，添加主机","link":"#_4-zabbix-web界面，添加主机","children":[]},{"level":2,"title":"1.监控需求","slug":"_1-监控需求","link":"#_1-监控需求","children":[]},{"level":2,"title":"2.命令行实现","slug":"_2-命令行实现","link":"#_2-命令行实现","children":[]},{"level":2,"title":"3.编写zabbix监控文件(传参形式)","slug":"_3-编写zabbix监控文件-传参形式","link":"#_3-编写zabbix监控文件-传参形式","children":[]},{"level":2,"title":"4.server端进行测试","slug":"_4-server端进行测试","link":"#_4-server端进行测试","children":[]},{"level":2,"title":"5.web端添加","slug":"_5-web端添加","link":"#_5-web端添加","children":[]},{"level":2,"title":"6.克隆监控项","slug":"_6-克隆监控项","link":"#_6-克隆监控项","children":[]},{"level":2,"title":"7.创建图形","slug":"_7-创建图形","link":"#_7-创建图形","children":[]},{"level":2,"title":"8.查看图形","slug":"_8-查看图形","link":"#_8-查看图形","children":[]},{"level":2,"title":"9.设置触发器","slug":"_9-设置触发器","link":"#_9-设置触发器","children":[]},{"level":2,"title":"1.定义发件人","slug":"_1-定义发件人","link":"#_1-定义发件人","children":[]},{"level":2,"title":"2.定义收件人","slug":"_2-定义收件人","link":"#_2-定义收件人","children":[]},{"level":2,"title":"3.自定义报警内容过","slug":"_3-自定义报警内容过","link":"#_3-自定义报警内容过","children":[]},{"level":2,"title":"1.查看配置文件里的脚本目录路径","slug":"_1-查看配置文件里的脚本目录路径","link":"#_1-查看配置文件里的脚本目录路径","children":[]},{"level":2,"title":"2.将weixin.py放在zabbix特定目录","slug":"_2-将weixin-py放在zabbix特定目录","link":"#_2-将weixin-py放在zabbix特定目录","children":[]},{"level":2,"title":"3.配置发信人","slug":"_3-配置发信人","link":"#_3-配置发信人","children":[]},{"level":2,"title":"4.配置收信人","slug":"_4-配置收信人","link":"#_4-配置收信人","children":[]},{"level":2,"title":"5.登陆企业微信公众号添加账户","slug":"_5-登陆企业微信公众号添加账户","link":"#_5-登陆企业微信公众号添加账户","children":[]},{"level":2,"title":"1.监控TCP11种状态","slug":"_1-监控tcp11种状态","link":"#_1-监控tcp11种状态","children":[]},{"level":2,"title":"2.重启zabbix-agent","slug":"_2-重启zabbix-agent","link":"#_2-重启zabbix-agent","children":[]},{"level":2,"title":"3.测试监控项","slug":"_3-测试监控项","link":"#_3-测试监控项","children":[]},{"level":2,"title":"第x章 自定义模版监控nginx状态","slug":"第x章-自定义模版监控nginx状态","link":"#第x章-自定义模版监控nginx状态","children":[]},{"level":2,"title":"1.开启监控页面并访问测试","slug":"_1-开启监控页面并访问测试","link":"#_1-开启监控页面并访问测试","children":[]},{"level":2,"title":"2.准备nginx监控状态脚本","slug":"_2-准备nginx监控状态脚本","link":"#_2-准备nginx监控状态脚本","children":[]},{"level":2,"title":"3.编写zabbix监控配置文件","slug":"_3-编写zabbix监控配置文件","link":"#_3-编写zabbix监控配置文件","children":[]},{"level":2,"title":"4.使用zabbix_get取值","slug":"_4-使用zabbix-get取值","link":"#_4-使用zabbix-get取值","children":[]},{"level":2,"title":"5.导入模版","slug":"_5-导入模版","link":"#_5-导入模版","children":[]},{"level":2,"title":"6.链接模版","slug":"_6-链接模版","link":"#_6-链接模版","children":[]},{"level":2,"title":"1.开启监控页面","slug":"_1-开启监控页面","link":"#_1-开启监控页面","children":[]},{"level":2,"title":"2.访问测试","slug":"_2-访问测试","link":"#_2-访问测试","children":[]},{"level":2,"title":"3.准备访问脚本","slug":"_3-准备访问脚本","link":"#_3-准备访问脚本","children":[]},{"level":2,"title":"故障1","slug":"故障1","link":"#故障1","children":[]},{"level":2,"title":"故障2","slug":"故障2","link":"#故障2","children":[]},{"level":2,"title":"故障3","slug":"故障3","link":"#故障3","children":[]}],"relativePath":"pages/posts/初识Zabbix4.0~.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/初识Zabbix4.0~.md","lastUpdated":1671090556000}'),l=JSON.parse('{"title":"初识Zabbix4.0~","description":"","frontmatter":{"title":"初识Zabbix4.0~","categories":"默认分类","tags":["Zabbix"],"date":"2019-05-09T23:09:00.000Z"},"headers":[{"level":2,"title":"1.为什么要使用监控","slug":"_1-为什么要使用监控","link":"#_1-为什么要使用监控","children":[]},{"level":2,"title":"2.如何进行监控，比如我们需要监控磁盘的使用率","slug":"_2-如何进行监控，比如我们需要监控磁盘的使用率","link":"#_2-如何进行监控，比如我们需要监控磁盘的使用率","children":[]},{"level":2,"title":"3.流行的监控工具","slug":"_3-流行的监控工具","link":"#_3-流行的监控工具","children":[]},{"level":2,"title":"4.如果去到一家新公司，如何入手监控","slug":"_4-如果去到一家新公司，如何入手监控","link":"#_4-如果去到一家新公司，如何入手监控","children":[]},{"level":2,"title":"1.配置zabbix仓库","slug":"_1-配置zabbix仓库","link":"#_1-配置zabbix仓库","children":[]},{"level":2,"title":"[file href=\\"http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn\\"]可用4.0镜像源[/file]2.安装 Zabbix 程序包，以及 MySQL、 Zabbix-agent","slug":"file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包，以及-mysql、-zabbix-agent","link":"#file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包，以及-mysql、-zabbix-agent","children":[]},{"level":2,"title":"3.创建 Zabbix 数据库以及用户","slug":"_3-创建-zabbix-数据库以及用户","link":"#_3-创建-zabbix-数据库以及用户","children":[]},{"level":2,"title":"4.导入 Zabbix 数据至数据库中","slug":"_4-导入-zabbix-数据至数据库中","link":"#_4-导入-zabbix-数据至数据库中","children":[]},{"level":2,"title":"5.编辑/etc/zabbix/zabbix_server.conf 文件，修改数据库配置","slug":"_5-编辑-etc-zabbix-zabbix-server-conf-文件，修改数据库配置","link":"#_5-编辑-etc-zabbix-zabbix-server-conf-文件，修改数据库配置","children":[]},{"level":2,"title":"6.启动 Zabbix 服务进程，并加入开机自启","slug":"_6-启动-zabbix-服务进程，并加入开机自启","link":"#_6-启动-zabbix-服务进程，并加入开机自启","children":[]},{"level":2,"title":"7.配置 Apache 的配置文件/etc/httpd/conf.d/zabbix.conf，修改时区","slug":"_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf，修改时区","link":"#_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf，修改时区","children":[]},{"level":2,"title":"8.重启 Apache Web 服务器","slug":"_8-重启-apache-web-服务器","link":"#_8-重启-apache-web-服务器","children":[]},{"level":2,"title":"[root@m01 ~]# systemctl start httpd","slug":"root-m01-systemctl-start-httpd","link":"#root-m01-systemctl-start-httpd","children":[]},{"level":2,"title":"1.浏览器打开地址：http://192.168.10.66/zabbix/setup.php","slug":"_1-浏览器打开地址：http-192-168-10-66-zabbix-setup-php","link":"#_1-浏览器打开地址：http-192-168-10-66-zabbix-setup-php","children":[]},{"level":2,"title":"2.检查依赖项是否存在异常","slug":"_2-检查依赖项是否存在异常","link":"#_2-检查依赖项是否存在异常","children":[]},{"level":2,"title":"3.配置zabbix连接数据库","slug":"_3-配置zabbix连接数据库","link":"#_3-配置zabbix连接数据库","children":[]},{"level":2,"title":"4.配置 ZabbixServer 服务器的信息","slug":"_4-配置-zabbixserver-服务器的信息","link":"#_4-配置-zabbixserver-服务器的信息","children":[]},{"level":2,"title":"5.最终确认检查","slug":"_5-最终确认检查","link":"#_5-最终确认检查","children":[]},{"level":2,"title":"6.安装成功","slug":"_6-安装成功","link":"#_6-安装成功","children":[]},{"level":2,"title":"7.登陆zabbix","slug":"_7-登陆zabbix","link":"#_7-登陆zabbix","children":[]},{"level":2,"title":"8.调整字符集为中文","slug":"_8-调整字符集为中文","link":"#_8-调整字符集为中文","children":[]},{"level":2,"title":"9.修复中文乱码","slug":"_9-修复中文乱码","link":"#_9-修复中文乱码","children":[]},{"level":2,"title":"1.安装zabbix-agent","slug":"_1-安装zabbix-agent","link":"#_1-安装zabbix-agent","children":[]},{"level":2,"title":"2.配置zabbix-agent","slug":"_2-配置zabbix-agent","link":"#_2-配置zabbix-agent","children":[]},{"level":2,"title":"4.zabbix-web界面，添加主机","slug":"_4-zabbix-web界面，添加主机","link":"#_4-zabbix-web界面，添加主机","children":[]},{"level":2,"title":"1.监控需求","slug":"_1-监控需求","link":"#_1-监控需求","children":[]},{"level":2,"title":"2.命令行实现","slug":"_2-命令行实现","link":"#_2-命令行实现","children":[]},{"level":2,"title":"3.编写zabbix监控文件(传参形式)","slug":"_3-编写zabbix监控文件-传参形式","link":"#_3-编写zabbix监控文件-传参形式","children":[]},{"level":2,"title":"4.server端进行测试","slug":"_4-server端进行测试","link":"#_4-server端进行测试","children":[]},{"level":2,"title":"5.web端添加","slug":"_5-web端添加","link":"#_5-web端添加","children":[]},{"level":2,"title":"6.克隆监控项","slug":"_6-克隆监控项","link":"#_6-克隆监控项","children":[]},{"level":2,"title":"7.创建图形","slug":"_7-创建图形","link":"#_7-创建图形","children":[]},{"level":2,"title":"8.查看图形","slug":"_8-查看图形","link":"#_8-查看图形","children":[]},{"level":2,"title":"9.设置触发器","slug":"_9-设置触发器","link":"#_9-设置触发器","children":[]},{"level":2,"title":"1.定义发件人","slug":"_1-定义发件人","link":"#_1-定义发件人","children":[]},{"level":2,"title":"2.定义收件人","slug":"_2-定义收件人","link":"#_2-定义收件人","children":[]},{"level":2,"title":"3.自定义报警内容过","slug":"_3-自定义报警内容过","link":"#_3-自定义报警内容过","children":[]},{"level":2,"title":"1.查看配置文件里的脚本目录路径","slug":"_1-查看配置文件里的脚本目录路径","link":"#_1-查看配置文件里的脚本目录路径","children":[]},{"level":2,"title":"2.将weixin.py放在zabbix特定目录","slug":"_2-将weixin-py放在zabbix特定目录","link":"#_2-将weixin-py放在zabbix特定目录","children":[]},{"level":2,"title":"3.配置发信人","slug":"_3-配置发信人","link":"#_3-配置发信人","children":[]},{"level":2,"title":"4.配置收信人","slug":"_4-配置收信人","link":"#_4-配置收信人","children":[]},{"level":2,"title":"5.登陆企业微信公众号添加账户","slug":"_5-登陆企业微信公众号添加账户","link":"#_5-登陆企业微信公众号添加账户","children":[]},{"level":2,"title":"1.监控TCP11种状态","slug":"_1-监控tcp11种状态","link":"#_1-监控tcp11种状态","children":[]},{"level":2,"title":"2.重启zabbix-agent","slug":"_2-重启zabbix-agent","link":"#_2-重启zabbix-agent","children":[]},{"level":2,"title":"3.测试监控项","slug":"_3-测试监控项","link":"#_3-测试监控项","children":[]},{"level":2,"title":"第x章 自定义模版监控nginx状态","slug":"第x章-自定义模版监控nginx状态","link":"#第x章-自定义模版监控nginx状态","children":[]},{"level":2,"title":"1.开启监控页面并访问测试","slug":"_1-开启监控页面并访问测试","link":"#_1-开启监控页面并访问测试","children":[]},{"level":2,"title":"2.准备nginx监控状态脚本","slug":"_2-准备nginx监控状态脚本","link":"#_2-准备nginx监控状态脚本","children":[]},{"level":2,"title":"3.编写zabbix监控配置文件","slug":"_3-编写zabbix监控配置文件","link":"#_3-编写zabbix监控配置文件","children":[]},{"level":2,"title":"4.使用zabbix_get取值","slug":"_4-使用zabbix-get取值","link":"#_4-使用zabbix-get取值","children":[]},{"level":2,"title":"5.导入模版","slug":"_5-导入模版","link":"#_5-导入模版","children":[]},{"level":2,"title":"6.链接模版","slug":"_6-链接模版","link":"#_6-链接模版","children":[]},{"level":2,"title":"1.开启监控页面","slug":"_1-开启监控页面","link":"#_1-开启监控页面","children":[]},{"level":2,"title":"2.访问测试","slug":"_2-访问测试","link":"#_2-访问测试","children":[]},{"level":2,"title":"3.准备访问脚本","slug":"_3-准备访问脚本","link":"#_3-准备访问脚本","children":[]},{"level":2,"title":"故障1","slug":"故障1","link":"#故障1","children":[]},{"level":2,"title":"故障2","slug":"故障2","link":"#故障2","children":[]},{"level":2,"title":"故障3","slug":"故障3","link":"#故障3","children":[]}],"relativePath":"pages/posts/初识Zabbix4.0~.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/初识Zabbix4.0~.md","lastUpdated":1671090556000}'),p={name:"pages/posts/初识Zabbix4.0~.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){c("pageData",l)}},u=e("h1",{id:"zabbix监控服务",tabindex:"-1"},[n("zabbix监控服务 "),e("a",{class:"header-anchor",href:"#zabbix监控服务","aria-hidden":"true"},"#")],-1),g=e("hr",null,null,-1),m=e("h1",{id:"第一章-监控知识基本概述",tabindex:"-1"},[n("第一章 监控知识基本概述 "),e("a",{class:"header-anchor",href:"#第一章-监控知识基本概述","aria-hidden":"true"},"#")],-1),x=e("h2",{id:"_1-为什么要使用监控",tabindex:"-1"},[n("1.为什么要使用监控 "),e("a",{class:"header-anchor",href:"#_1-为什么要使用监控","aria-hidden":"true"},"#")],-1),f=e("ul",null,[e("li",null,"1.对系统不间断实时监控"),e("li",null,"2.实时反馈系统当前状态"),e("li",null,"3.保证服务可靠性安全性"),e("li",null,"4.保证业务持续稳定运行")],-1),z=e("h2",{id:"_2-如何进行监控，比如我们需要监控磁盘的使用率",tabindex:"-1"},[n("2.如何进行监控，比如我们需要监控磁盘的使用率 "),e("a",{class:"header-anchor",href:"#_2-如何进行监控，比如我们需要监控磁盘的使用率","aria-hidden":"true"},"#")],-1),v=e("ul",null,[e("li",null,"1.如何查看磁盘使用率 df -h"),e("li",null,"2.监控磁盘的那些指标 block、 inode"),e("li",null,"3.如何获取具体的信息 df -h|awk '///{print(NF-1)}'"),e("li",null,"4.获取的数值到达多少报警 80%")],-1),w=e("h2",{id:"_3-流行的监控工具",tabindex:"-1"},[n("3.流行的监控工具 "),e("a",{class:"header-anchor",href:"#_3-流行的监控工具","aria-hidden":"true"},"#")],-1),k=e("ul",null,[e("li",null,"1.Zabbix"),e("li",null,"2.Lepus(天兔)数据库监控系统"),e("li",null,"3.Open-Falcon 小米"),e("li",null,"4.Prometheus(普罗米修斯， Docker、 K8s)")],-1),E=e("h2",{id:"_4-如果去到一家新公司，如何入手监控",tabindex:"-1"},[n("4.如果去到一家新公司，如何入手监控 "),e("a",{class:"header-anchor",href:"#_4-如果去到一家新公司，如何入手监控","aria-hidden":"true"},"#")],-1),y=e("ul",null,[e("li",null,"1.硬件监控 路由器、交换机、防火墙"),e("li",null,"2.系统监控 CPU、内存、磁盘、网络、进程、 TCP"),e("li",null,"3.服务监控 nginx、 php、 tomcat、 redis、 memcache、 mysql"),e("li",null,[e("a",{href:"http://4.WEB",target:"_blank",rel:"noreferrer"},"4.WEB"),n(" 监控 请求时间、响应时间、加载时间、")]),e("li",null,"5.日志监控 ELk（收集、存储、分析、展示） 日志易"),e("li",null,"6.安全监控 Firewalld、 WAF(Nginx+lua)、安全宝、牛盾云、安全狗"),e("li",null,"7.网络监控 smokeping 多机房"),e("li",null,"8.业务监控 活动引入多少流量、产生多少注册量、带来多大价值")],-1),T=e("h1",{id:"第二章-单机时代如何监控",tabindex:"-1"},[n("第二章 单机时代如何监控 "),e("a",{class:"header-anchor",href:"#第二章-单机时代如何监控","aria-hidden":"true"},"#")],-1),A=e("p",null,"CPU 监控命令: w、 top、 htop、 glances",-1),I=e("pre",null,[e("code",null,`%Cpu(s): 0.3 us, 0.3 sy, 0.0 ni, 99.3 id, 0.0 wa, 0.0 hi, 0.0 si, 0.0 st
us 用户态: 跟用户的操作有关 35%
sy 系统态: 跟内核的处理有关 60%
id CPU 空闲:
`)],-1),S=e("p",null,"内存监控命令: free",-1),$=e("pre",null,[e("code",null,`[root@m01 ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:           977M        105M        724M        6.6M        148M        729M
Swap:          1.0G          0B        1.0G
`)],-1),N=e("p",null,"磁盘监控命令: df、 iotop",-1),R=e("pre",null,[e("code",null,`Device: tps kB_read/s kB_wrtn/s kB_read kB_wrtn
sda 0.80 25.32 33.36 221034 291193
设备名 每秒传输次数 每秒读大小 每秒写大小 读的总大小 写的总大小
`)],-1),M=e("p",null,"网络监控命令: ifconfig、 route、 glances、 iftop、 nethogs、 netstat",-1),C=e("pre",null,[e("code",null,`单位换算
Mbps 100Mbps/8
MB 12MB
iftop 中间的<= =>这两个左右箭头，表示的是流量的方向。
TX：发送流量、 RX：接收流量、 TOTAL：总流量
#查看 TCP11 中状态
netstat -an|grep ESTABLISHED
netstat -rn # 查看路由信息
netstat -lntup
`)],-1),L=e("p",null,"随着时间的推移，用户不断的增多，服务随时可能扛不住会被 oom(out of memory)，当系统内存不足的时候，会 触发 oom 1.当系统内存不足的时候就会大量使用 swap 2.当系统大量使用 swap 的时候，系统会特别卡 注意: 有时可能内存还有剩余 300Mb-500Mb，但会发现 swap 依然被使用",-1),q=e("pre",null,[e("code",null,`[root@ZabbixServer ~]# dd if=/dev/zero of=/dev/null bs=800M
[root@ZabbixServer ~]# tail -f /var/log/messages
Out of memory: Kill process 2227 (dd) score 778 or sacrifice child
Killed process 2227 (dd) total-vm:906724kB, anon-rss:798820kB, file-rss:0kB
`)],-1),Z=e("p",null,"3.那单机时代，如何使用 shell 脚本来实现服务器的监控 需求: 每隔 1 分钟监控一次内存,当你的可用内存低于 100m,发邮件报警,要求显示剩余内存",-1),j=e("ul",null,[e("li",null,[e("p",null,"1.怎么获取内存可用的值 free -m|awk '/^Mem/{print $NF}'")]),e("li",null,[e("p",null,"2.获取到内存可用的值如何和设定的阈值进行比较")]),e("li",null,[e("p",null,"3.比较如果大于 100m 则不处理，如果小于 100 则报警")]),e("li",null,[e("p",null,"4.如何每隔 1 分钟执行一次"),e("p",null,[n("[root@ZabbixServer ~]# cat "),e("a",{href:"http://free.sh",target:"_blank",rel:"noreferrer"},"free.sh"),n(" #!/usr/bin/bash HostName=(hostname)_(hostname -i) Date="),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"("),e("mi",null,"d"),e("mi",null,"a"),e("mi",null,"t"),e("mi",null,"e"),e("mo",null,"+"),e("mi",null,"w"),e("mi",null,"h"),e("mi",null,"i"),e("mi",null,"l"),e("mi",null,"e"),e("mi",null,"t"),e("mi",null,"r"),e("mi",null,"u"),e("mi",null,"e"),e("mo",{separator:"true"},";"),e("mi",null,"d"),e("mi",null,"o"),e("mi",null,"F"),e("mi",null,"r"),e("mi",null,"e"),e("mi",null,"e"),e("mo",null,"=")]),e("annotation",{encoding:"application/x-tex"},"(date +%F) while true;do Free=")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"a"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),e("span",{class:"mord mathnormal"},"hi"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),e("span",{class:"mord mathnormal"},"u"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mpunct"},";"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"d"),e("span",{class:"mord mathnormal"},"o"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),e("span",{class:"mord mathnormal"},"ree"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"=")])])]),n("(free -m|awk '/^Mem/{print $NF}') if [ "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"F"),e("mi",null,"r"),e("mi",null,"e"),e("mi",null,"e"),e("mo",null,"−"),e("mi",null,"l"),e("mi",null,"e"),e("mn",null,"100"),e("mo",{stretchy:"false"},"]"),e("mo",{separator:"true"},";"),e("mi",null,"t"),e("mi",null,"h"),e("mi",null,"e"),e("mi",null,"n"),e("mi",null,"e"),e("mi",null,"c"),e("mi",null,"h"),e("mi",null,"o"),e("mi",{mathvariant:"normal"},'"')]),e("annotation",{encoding:"application/x-tex"},'Free -le 100 ];then echo "')])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),e("span",{class:"mord mathnormal"},"ree"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord"},"100"),e("span",{class:"mclose"},"]"),e("span",{class:"mpunct"},";"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord mathnormal"},"h"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mord mathnormal"},"ec"),e("span",{class:"mord mathnormal"},"h"),e("span",{class:"mord mathnormal"},"o"),e("span",{class:"mord"},'"')])])]),n('Date: $HostName Mem Is < ${Free}MB" fi sleep 5 done')])])],-1),U=e("h1",{id:"第三章-zabbix-监控快速安装",tabindex:"-1"},[n("第三章 zabbix 监控快速安装 "),e("a",{class:"header-anchor",href:"#第三章-zabbix-监控快速安装","aria-hidden":"true"},"#")],-1),D=e("h2",{id:"_1-配置zabbix仓库",tabindex:"-1"},[n("1.配置zabbix仓库 "),e("a",{class:"header-anchor",href:"#_1-配置zabbix仓库","aria-hidden":"true"},"#")],-1),B=e("p",null,"###在这里提供zabbix4.2yum仓库可供日常使用",-1),F=e("p",null,[e("a",{href:"http://www.kococ.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz",target:"_blank",rel:"noreferrer"},"Zabbix4.2仓库链接"),n(" （"),e("a",{href:"http://www.xoxoyun.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz%EF%BC%89",target:"_blank",rel:"noreferrer"},"http://www.xoxoyun.cn/cloud/index.php?share/folder&user=1&sid=eJIcXWhz）")],-1),G=e("pre",null,[e("code",null,`[root@m01 ~]# rpm -ivh http://mirrors.aliyun.com/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm
`)],-1),P=e("h2",{id:"file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包，以及-mysql、-zabbix-agent",tabindex:"-1"},[n('[file href="'),e("a",{href:"http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn",target:"_blank",rel:"noreferrer"},"http://cloud.xoxoyun.cn/index.php?share/file&user=1&sid=TIDYUqRn"),n('"]可用4.0镜像源[/file] 2.安装 Zabbix 程序包，以及 MySQL、 Zabbix-agent '),e("a",{class:"header-anchor",href:"#file-href-http-cloud-xoxoyun-cn-index-php-share-file-user-1-sid-tidyuqrn-可用4-0镜像源-file-2-安装-zabbix-程序包，以及-mysql、-zabbix-agent","aria-hidden":"true"},"#")],-1),O=e("pre",null,[e("code",null,`[root@m01 ~]# yum install -y zabbix-server-mysql zabbix-web-mysql zabbix-agent mariadb-server
`)],-1),W=e("p",null,"下载阿里云epel源base源",-1),H=e("pre",null,[e("code",null,`wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
yum install -y http://springdale.math.ias.edu/data/puias/unsupported/7/x86_64/iksemel-1.4-6.sdl7.x86_64.rpm

[root@m01 ~]# systemctl start mariadb.service && systemctl enable mariadb.service
`)],-1),X=e("h2",{id:"_3-创建-zabbix-数据库以及用户",tabindex:"-1"},[n("3.创建 Zabbix 数据库以及用户 "),e("a",{class:"header-anchor",href:"#_3-创建-zabbix-数据库以及用户","aria-hidden":"true"},"#")],-1),V=e("pre",null,[e("code",null,`[root@m01 ~]# mysqladmin password 123456
[root@m01 ~]# mysql -uroot -p123456
MariaDB [(none)]> create database zabbix character set utf8 collate utf8_bin;
MariaDB [(none)]> grant all privileges on zabbix.* to zabbix@localhost identified by 'zabbix';
MariaDB [(none)]> flush privileges;
`)],-1),Y=e("h2",{id:"_4-导入-zabbix-数据至数据库中",tabindex:"-1"},[n("4.导入 Zabbix 数据至数据库中 "),e("a",{class:"header-anchor",href:"#_4-导入-zabbix-数据至数据库中","aria-hidden":"true"},"#")],-1),Q=e("pre",null,[e("code",null,`[root@m01 ~]# zcat /usr/share/doc/zabbix-server-mysql-4.0.11/create.sql.gz | mysql -uzabbix -pzabbix zabbix
`)],-1),K=e("h2",{id:"_5-编辑-etc-zabbix-zabbix-server-conf-文件，修改数据库配置",tabindex:"-1"},[n("5.编辑/etc/zabbix/zabbix_server.conf 文件，修改数据库配置 "),e("a",{class:"header-anchor",href:"#_5-编辑-etc-zabbix-zabbix-server-conf-文件，修改数据库配置","aria-hidden":"true"},"#")],-1),J=e("pre",null,[e("code",null,`[root@m01 ~]# grep "^[a-Z]" /etc/zabbix/zabbix_server.conf 
...............
DBHost=localhost
DBName=zabbix
DBUser=zabbix
DBPassword=zabbix
...............
`)],-1),ee=e("h2",{id:"_6-启动-zabbix-服务进程，并加入开机自启",tabindex:"-1"},[n("6.启动 Zabbix 服务进程，并加入开机自启 "),e("a",{class:"header-anchor",href:"#_6-启动-zabbix-服务进程，并加入开机自启","aria-hidden":"true"},"#")],-1),ne=e("pre",null,[e("code",null,`[root@m01 ~]# systemctl start zabbix-server.service 
[root@m01 ~]# systemctl enable zabbix-server.service
`)],-1),te=e("h2",{id:"_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf，修改时区",tabindex:"-1"},[n("7.配置 Apache 的配置文件/etc/httpd/conf.d/zabbix.conf，修改时区 "),e("a",{class:"header-anchor",href:"#_7-配置-apache-的配置文件-etc-httpd-conf-d-zabbix-conf，修改时区","aria-hidden":"true"},"#")],-1),ae=e("pre",null,[e("code",null,`[root@m01 ~]# grep "Shanghai" /etc/httpd/conf.d/zabbix.conf 
        php_value date.timezone Asia/Shanghai
`)],-1),ie=e("h2",{id:"_8-重启-apache-web-服务器",tabindex:"-1"},[n("8.重启 Apache Web 服务器 "),e("a",{class:"header-anchor",href:"#_8-重启-apache-web-服务器","aria-hidden":"true"},"#")],-1),le=e("h2",{id:"root-m01-systemctl-start-httpd",tabindex:"-1"},[n("[root@m01 ~]# systemctl start httpd "),e("a",{class:"header-anchor",href:"#root-m01-systemctl-start-httpd","aria-hidden":"true"},"#")],-1),se=e("h1",{id:"第四章-web安装步骤",tabindex:"-1"},[n("第四章 WEB安装步骤 "),e("a",{class:"header-anchor",href:"#第四章-web安装步骤","aria-hidden":"true"},"#")],-1),re=e("h2",{id:"_1-浏览器打开地址：http-192-168-10-66-zabbix-setup-php",tabindex:"-1"},[n("1.浏览器打开地址："),e("a",{href:"http://192.168.10.66/zabbix/setup.php",target:"_blank",rel:"noreferrer"},"http://192.168.10.66/zabbix/setup.php"),n(),e("a",{class:"header-anchor",href:"#_1-浏览器打开地址：http-192-168-10-66-zabbix-setup-php","aria-hidden":"true"},"#")],-1),oe=e("p",null,[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/194576284.png",alt:"1.png"})],-1),de=e("h2",{id:"_2-检查依赖项是否存在异常",tabindex:"-1"},[n("2.检查依赖项是否存在异常 "),e("a",{class:"header-anchor",href:"#_2-检查依赖项是否存在异常","aria-hidden":"true"},"#")],-1),ce=e("p",null,[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/2386190024.png",alt:"2.png"})],-1),he=e("h2",{id:"_3-配置zabbix连接数据库",tabindex:"-1"},[n("3.配置zabbix连接数据库 "),e("a",{class:"header-anchor",href:"#_3-配置zabbix连接数据库","aria-hidden":"true"},"#")],-1),_e=e("p",null,[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/395866565.png",alt:"请输入图片描述"})],-1),be=e("h2",{id:"_4-配置-zabbixserver-服务器的信息",tabindex:"-1"},[n("4.配置 ZabbixServer 服务器的信息 "),e("a",{class:"header-anchor",href:"#_4-配置-zabbixserver-服务器的信息","aria-hidden":"true"},"#")],-1),pe=e("h2",{id:"_5-最终确认检查",tabindex:"-1"},[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/3424985468.png",alt:"4.png"}),n(" 5.最终确认检查 "),e("a",{class:"header-anchor",href:"#_5-最终确认检查","aria-hidden":"true"},"#")],-1),ue=e("h2",{id:"_6-安装成功",tabindex:"-1"},[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/3424985468.png",alt:"5.png"}),n(" 6.安装成功 "),e("a",{class:"header-anchor",href:"#_6-安装成功","aria-hidden":"true"},"#")],-1),ge=e("p",null,[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/1365103457.png",alt:"6.png"})],-1),me=e("p",null,"提示已成功地安装了 Zabbix 前端。配置文件/etc/zabbix/web/zabbix.conf.php 被创建。",-1),xe=e("h2",{id:"_7-登陆zabbix",tabindex:"-1"},[n("7.登陆zabbix "),e("a",{class:"header-anchor",href:"#_7-登陆zabbix","aria-hidden":"true"},"#")],-1),fe=e("p",null,[e("img",{src:"http://www.kcooc.cn/usr/uploads/2020/01/1375784407.png",alt:"7.png"})],-1),ze=e("p",null,"默认登陆 ZabbixWeb 的用户名 Admin，密码 zabbix",-1),ve=e("h2",{id:"_8-调整字符集为中文",tabindex:"-1"},[n("8.调整字符集为中文 "),e("a",{class:"header-anchor",href:"#_8-调整字符集为中文","aria-hidden":"true"},"#")],-1),we=e("p",null,[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/632295469.png",alt:"8.png"})],-1),ke=e("p",null,[e("img",{src:"http://www.kcooc.cn/usr/uploads/2020/01/3064526244.png",alt:"9.png"})],-1),Ee=e("h2",{id:"_9-修复中文乱码",tabindex:"-1"},[n("9.修复中文乱码 "),e("a",{class:"header-anchor",href:"#_9-修复中文乱码","aria-hidden":"true"},"#")],-1),ye=e("p",null,[e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/172339092.png",alt:"10.png"})],-1),Te=e("p",null,"打开图形之后会发现语言为乱码，原因是缺少字体",-1),Ae=e("p",null,[e("strong",null,"解决方法:安装字体并替换现有字体")],-1),Ie=e("pre",null,[e("code",null,`[root@m01 ~]# yum install wqy-microhei-fonts -y
[root@m01 ~]# cp /usr/share/fonts/wqy-microhei/wqy-microhei.ttc /usr/share/zabbix/assets/fonts/graphfont.ttf
`)],-1),Se=e("p",null,[n("再次刷新发现已经变成中文了 "),e("img",{src:"http://www.kococ.cn/usr/uploads/2020/01/643160504.png",alt:"11.png"})],-1),$e=e("h1",{id:"第五章-zabbix-监控基础架构",tabindex:"-1"},[n("第五章 Zabbix 监控基础架构 "),e("a",{class:"header-anchor",href:"#第五章-zabbix-监控基础架构","aria-hidden":"true"},"#")],-1),Ne=e("p",null,[n("zabbix-agent(数据采集)—>zabbix-server(数据分析|报警)—> 数据库(数据存储)<—zabbix web(数据展示) "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-189ad59c27ddffec.png",alt:"请输入图片描述"})],-1),Re=e("h1",{id:"第六章-zabbix-快速监控主机",tabindex:"-1"},[n("第六章 zabbix 快速监控主机 "),e("a",{class:"header-anchor",href:"#第六章-zabbix-快速监控主机","aria-hidden":"true"},"#")],-1),Me=e("h2",{id:"_1-安装zabbix-agent",tabindex:"-1"},[n("1.安装zabbix-agent "),e("a",{class:"header-anchor",href:"#_1-安装zabbix-agent","aria-hidden":"true"},"#")],-1),Ce=e("pre",null,[e("code",null,`[root@web01 ~]# rpm -ivh https://mirror.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-agent-4.0.11-1.el7.x86_64.rpm
`)],-1),Le=e("h2",{id:"_2-配置zabbix-agent",tabindex:"-1"},[n("2.配置zabbix-agent "),e("a",{class:"header-anchor",href:"#_2-配置zabbix-agent","aria-hidden":"true"},"#")],-1),qe=e("pre",null,[e("code",null,`[root@web01 ~]# grep "^[a-Z]" /etc/zabbix/zabbix_agentd.conf    
PidFile=/var/run/zabbix/zabbix_agentd.pid
LogFile=/var/log/zabbix/zabbix_agentd.log
LogFileSize=0
Server=10.0.1.61
ServerActive=127.0.0.1
Hostname=Zabbix server
Include=/etc/zabbix/zabbix_agentd.d/*.conf
`)],-1),Ze=e("p",null,"3.启动zabbix-agent并检查",-1),je=e("pre",null,[e("code",null,`[root@web01 ~]# systemctl start zabbix-agent.service 
[root@web01 ~]# systemctl enable zabbix-agent.service
[root@web01 ~]# netstat -lntup|grep 10050
tcp        0      0 0.0.0.0:10050           0.0.0.0:*               LISTEN      10351/zabbix_agentd 
tcp6       0      0 :::10050                :::*                    LISTEN      10351/zabbix_agentd 
`)],-1),Ue=e("h2",{id:"_4-zabbix-web界面，添加主机",tabindex:"-1"},[n("4.zabbix-web界面，添加主机 "),e("a",{class:"header-anchor",href:"#_4-zabbix-web界面，添加主机","aria-hidden":"true"},"#")],-1),De=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-10db69c42454d500.png",alt:"请输入图片描述"})],-1),Be=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-ceee736beb333ce5.png",alt:"请输入图片描述"})],-1),Fe=e("h1",{id:"第七章-自定义监控主机",tabindex:"-1"},[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-5d12b07231386679.png",alt:"请输入图片描述"}),n(" 第七章 自定义监控主机 "),e("a",{class:"header-anchor",href:"#第七章-自定义监控主机","aria-hidden":"true"},"#")],-1),Ge=e("h2",{id:"_1-监控需求",tabindex:"-1"},[n("1.监控需求 "),e("a",{class:"header-anchor",href:"#_1-监控需求","aria-hidden":"true"},"#")],-1),Pe=e("p",null,"监控TCP11种状态集",-1),Oe=e("h2",{id:"_2-命令行实现",tabindex:"-1"},[n("2.命令行实现 "),e("a",{class:"header-anchor",href:"#_2-命令行实现","aria-hidden":"true"},"#")],-1),We=e("pre",null,[e("code",null,`[root@web01 ~]# netstat -ant|grep -c TIME_WAIT
55
[root@web01 ~]# netstat -ant|grep -c LISTEN
12
`)],-1),He=e("h2",{id:"_3-编写zabbix监控文件-传参形式",tabindex:"-1"},[n("3.编写zabbix监控文件(传参形式) "),e("a",{class:"header-anchor",href:"#_3-编写zabbix监控文件-传参形式","aria-hidden":"true"},"#")],-1),Xe=e("pre",null,[e("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/tcp_status.conf 
UserParameter=tcp_state[*],netstat -ant|grep -c $1
root@web01 ~]# systemctl restart zabbix-agent.service
`)],-1),Ve=e("h2",{id:"_4-server端进行测试",tabindex:"-1"},[n("4.server端进行测试 "),e("a",{class:"header-anchor",href:"#_4-server端进行测试","aria-hidden":"true"},"#")],-1),Ye=e("pre",null,[e("code",null,`[root@m01 ~]# rpm -ivh https://mirrors.tuna.tsinghua.edu.cn/zabbix/zabbix/4.0/rhel/7/x86_64/zabbix-release-4.0-1.el7.noarch.rpm
[root@m01 ~]# yum install zabbix-get.x86_64 -y 
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k tcp_state[TIME_WAIT]
51
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k tcp_state[LISTEN]   
12
`)],-1),Qe=e("h2",{id:"_5-web端添加",tabindex:"-1"},[n("5.web端添加 "),e("a",{class:"header-anchor",href:"#_5-web端添加","aria-hidden":"true"},"#")],-1),Ke=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-0b20f0a22391f3d1.png",alt:"请输入图片描述"})],-1),Je=e("h2",{id:"_6-克隆监控项",tabindex:"-1"},[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-19c41a9832857c2b.png",alt:"请输入图片描述"}),n(" 6.克隆监控项 "),e("a",{class:"header-anchor",href:"#_6-克隆监控项","aria-hidden":"true"},"#")],-1),en=e("p",null,[n("由于TCP有多种状态，需要添加多个监控项，我们可以使用克隆快速达到创建的效果 "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-743524f196e73c5e.png",alt:"请输入图片描述"})],-1),nn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-35342ea8d4cb7a44.png",alt:"请输入图片描述"})],-1),tn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2e2be3806f3c1c42.png",alt:"请输入图片描述"})],-1),an=e("p",null,"其他的状态依次添加即可",-1),ln=e("h2",{id:"_7-创建图形",tabindex:"-1"},[n("7.创建图形 "),e("a",{class:"header-anchor",href:"#_7-创建图形","aria-hidden":"true"},"#")],-1),sn=e("h2",{id:"_8-查看图形",tabindex:"-1"},[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-6203bb8201c63361.png",alt:"请输入图片描述"}),n(" 8.查看图形 "),e("a",{class:"header-anchor",href:"#_8-查看图形","aria-hidden":"true"},"#")],-1),rn=e("h2",{id:"_9-设置触发器",tabindex:"-1"},[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-a6cf4a1d2bdb3449.png",alt:"请输入图片描述"}),n(" 9.设置触发器 "),e("a",{class:"header-anchor",href:"#_9-设置触发器","aria-hidden":"true"},"#")],-1),on=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-98cb06eb3b07e1d5.png",alt:"请输入图片描述"})],-1),dn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-37e7cc88098879d9.png",alt:"请输入图片描述"})],-1),cn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-d684d487eb68da11.png",alt:"请输入图片描述"})],-1),hn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2e3bc7010546c2a1.png",alt:"请输入图片描述"})],-1),_n=e("h1",{id:"第八章-邮件报警",tabindex:"-1"},[n("第八章 邮件报警 "),e("a",{class:"header-anchor",href:"#第八章-邮件报警","aria-hidden":"true"},"#")],-1),bn=e("h2",{id:"_1-定义发件人",tabindex:"-1"},[n("1.定义发件人 "),e("a",{class:"header-anchor",href:"#_1-定义发件人","aria-hidden":"true"},"#")],-1),pn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-816d27e93e19aa6f.png",alt:"请输入图片描述"})],-1),un=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-7e3279840e20452e.png",alt:"请输入图片描述"})],-1),gn=e("h2",{id:"_2-定义收件人",tabindex:"-1"},[n("2.定义收件人 "),e("a",{class:"header-anchor",href:"#_2-定义收件人","aria-hidden":"true"},"#")],-1),mn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-57e702ed809d0b1b.png",alt:"https://upload-images.jianshu.io/upload_images/14248468-57e702ed809d0b1b.png"})],-1),xn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-ced9fc46c956b1e3.png",alt:"请输入图片描述"})],-1),fn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-90efc1aa92eb84da.png",alt:"请输入图片描述"})],-1),zn=e("h2",{id:"_3-自定义报警内容过",tabindex:"-1"},[n("3.自定义报警内容过 "),e("a",{class:"header-anchor",href:"#_3-自定义报警内容过","aria-hidden":"true"},"#")],-1),vn=e("p",null,[n("定制报警内容： "),e("a",{href:"http://www.zabbix.com/documentation/4.0/zh/manual/appendix/macros/supported_by_location",target:"_blank",rel:"noreferrer"},"https://www.zabbix.com/documentation/4.0/zh/manual/appendix/macros/supported_by_location"),n(" 参考博客")],-1),wn=e("p",null,[e("a",{href:"http://www.cnblogs.com/bixiaoyu/p/7302541.html",target:"_blank",rel:"noreferrer"},"https://www.cnblogs.com/bixiaoyu/p/7302541.html"),n(" 发送警告")],-1),kn=e("pre",null,[e("code",null,`报警邮件标题可以使用默认信息，亦可使用如下中文报警内容
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
`)],-1),En=e("p",null,[n("恢复标题：恢复{TRIGGER.STATUS}, 服务器:{HOSTNAME1}: {"),e("a",{href:"http://TRIGGER.NAME",target:"_blank",rel:"noreferrer"},"TRIGGER.NAME"),n("}已恢复!")],-1),yn=e("pre",null,[e("code",null,`恢复信息：
告警主机:{HOSTNAME1}
告警时间:{EVENT.DATE} {EVENT.TIME}
告警等级:{TRIGGER.SEVERITY}
告警信息: {TRIGGER.NAME}
告警项目:{TRIGGER.KEY1}
问题详情:{ITEM.NAME}:{ITEM.VALUE}
当前状态:{TRIGGER.STATUS}:{ITEM.VALUE1}
事件ID:{EVENT.ID}
`)],-1),Tn=e("h1",{id:"第九章-微信报警",tabindex:"-1"},[n("第九章 微信报警 "),e("a",{class:"header-anchor",href:"#第九章-微信报警","aria-hidden":"true"},"#")],-1),An=e("h2",{id:"_1-查看配置文件里的脚本目录路径",tabindex:"-1"},[n("1.查看配置文件里的脚本目录路径 "),e("a",{class:"header-anchor",href:"#_1-查看配置文件里的脚本目录路径","aria-hidden":"true"},"#")],-1),In=e("pre",null,[e("code",null,`[root@m01 ~]# grep "^AlertScriptsPath" /etc/zabbix/zabbix_server.conf
AlertScriptsPath=/usr/lib/zabbix/alertscripts
`)],-1),Sn=e("h2",{id:"_2-将weixin-py放在zabbix特定目录",tabindex:"-1"},[n("2.将weixin.py放在zabbix特定目录 "),e("a",{class:"header-anchor",href:"#_2-将weixin-py放在zabbix特定目录","aria-hidden":"true"},"#")],-1),$n=e("pre",null,[e("code",null,`[root@m01 /usr/lib/zabbix/alertscripts]# ll
总用量 4
-rwxr-xr-x 1 root root 1344 8月   7 21:58 weixin.py
`)],-1),Nn=e("h2",{id:"_3-配置发信人",tabindex:"-1"},[n("3.配置发信人 "),e("a",{class:"header-anchor",href:"#_3-配置发信人","aria-hidden":"true"},"#")],-1),Rn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-75d0cf249f19bafe.png",alt:"请输入图片描述"})],-1),Mn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-7f1aaedd340ef02f.png",alt:"请输入图片描述"})],-1),Cn=e("h2",{id:"_4-配置收信人",tabindex:"-1"},[n("4.配置收信人 "),e("a",{class:"header-anchor",href:"#_4-配置收信人","aria-hidden":"true"},"#")],-1),Ln=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9709cce24dcb910a.png",alt:"请输入图片描述"})],-1),qn=e("h2",{id:"_5-登陆企业微信公众号添加账户",tabindex:"-1"},[n("5.登陆企业微信公众号添加账户 "),e("a",{class:"header-anchor",href:"#_5-登陆企业微信公众号添加账户","aria-hidden":"true"},"#")],-1),Zn=e("p",null,[e("a",{href:"https://work.weixin.qq.com/wework_admin/loginpage_wx",target:"_blank",rel:"noreferrer"},"https://work.weixin.qq.com/wework_admin/loginpage_wx"),n(" 1.登陆后在企业号上新建应用")],-1),jn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-1ae7607fe5113d11.png",alt:"请输入图片描述"})],-1),Un=e("p",null,"2.上传logo，填写应用名称 ，应用介绍等",-1),Dn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-ee6bc21e8c1e9d39.png",alt:"请输入图片描述"})],-1),Bn=e("p",null,[n("3.查看启动应用 同时会生成应用的AgentId以及Secret，这个在后面步骤会有用 "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2cccdc342330c5d0.png",alt:"请输入图片描述"})],-1),Fn=e("p",null,[n("4.接口调用测试 "),e("a",{href:"http://work.weixin.qq.com/api/devtools/devtool.php",target:"_blank",rel:"noreferrer"},"http://work.weixin.qq.com/api/devtools/devtool.php"),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-f24ffa3b5922d0c0.png",alt:"请输入图片描述"})],-1),Gn=e("p",null,"这里的corpid为公司ID",-1),Pn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-03544eed481caa53.png",alt:"请输入图片描述"})],-1),On=e("p",null,"Corpsecret就是刚才创建应用生成的Secrt，确认没问题填写进去然后下一步 如果没问题会显示200状态码",-1),Wn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-c6aba38bf4da189c.png",alt:"请输入图片描述"})],-1),Hn=e("p",null,"6.添加成员",-1),Xn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-27ba2ae8bf3773fb.png",alt:"请输入图片描述"})],-1),Vn=e("p",null,"7.关注公众号",-1),Yn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-b0341893f157d0fb.png",alt:"请输入图片描述"})],-1),Qn=e("p",null,"8.查看自己的账号",-1),Kn=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-8247e4f85f7ddc9a.png",alt:"加粗文字"})],-1),Jn=e("p",null,"9.修改脚本里的信息",-1),et=e("pre",null,[e("code",null,`[root@m01 /usr/lib/zabbix/alertscripts]# cat weixin.py 
..............
corpid='微信企业号corpid'
appsecret='应用的Secret'
agentid=应用的id
..............
`)],-1),nt=e("p",null,"10.发信测试",-1),tt=e("pre",null,[e("code",null,`[root@m01 /usr/lib/zabbix/alertscripts]# python  weixin.py  你的账号  '发信测试'  ‘微信测试消息’
`)],-1),at=e("p",null,"11.微信号上查看",-1),it=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9f1dc0fa9d6b8abb.png",alt:""})],-1),lt=e("p",null,"12.发送到整个微信组 虽然我们实现了发送到单个用户的功能，但是如果我们的用户比较多，这样还是麻烦的，不过我们可以发送到整个组，其实脚本里已经预留好了配置，只不过默认注释了。 将脚本修改为以下内容，注释掉用户，打开组设置",-1),st=e("pre",null,[e("code",null,`#!/usr/bin/env python

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
`)],-1),rt=e("h1",{id:"第十章-自定义模版",tabindex:"-1"},[n("第十章 自定义模版 "),e("a",{class:"header-anchor",href:"#第十章-自定义模版","aria-hidden":"true"},"#")],-1),ot=e("h2",{id:"_1-监控tcp11种状态",tabindex:"-1"},[n("1.监控TCP11种状态 "),e("a",{class:"header-anchor",href:"#_1-监控tcp11种状态","aria-hidden":"true"},"#")],-1),dt=e("p",null,"编写zabbix配置文件",-1),ct=e("pre",null,[e("code",null,`[root@web01 /etc/zabbix/zabbix_agentd.d]# cat zbx_tcp.conf 
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
`)],-1),ht=e("h2",{id:"_2-重启zabbix-agent",tabindex:"-1"},[n("2.重启zabbix-agent "),e("a",{class:"header-anchor",href:"#_2-重启zabbix-agent","aria-hidden":"true"},"#")],-1),_t=e("pre",null,[e("code",null,`[root@web01 ~]# systemctl restart zabbix-agent.service 
`)],-1),bt=e("h2",{id:"_3-测试监控项",tabindex:"-1"},[n("3.测试监控项 "),e("a",{class:"header-anchor",href:"#_3-测试监控项","aria-hidden":"true"},"#")],-1),pt=e("p",null,"使用zabbix-get命令测试",-1),ut=e("pre",null,[e("code",null,`[root@m01 ~]# yum install zabbix-get.x86_64 -y
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k ESTABLISHED
2
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k LISTEN
12
`)],-1),gt=e("p",null,"4.导入模版文件",-1),mt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-bf27be32d233f194.png",alt:"请输入图片描述"})],-1),xt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-784f18988c7debab.png",alt:"请输入图片描述"})],-1),ft=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-2a388d1ec74725e9.png",alt:"请输入图片描述"})],-1),zt=e("p",null,[n("5.主机关联模版文件 "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9070da45843e2644.png",alt:"请输入图片描述"})],-1),vt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-0ab34947877205eb.png",alt:"请输入图片描述"})],-1),wt=e("p",null,[n("6.查看最新数据 "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-e17fda198f1ec1ac.png",alt:"请输入图片描述"})],-1),kt=e("p",null,[n("7.查看图形 "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-9c011ab3f383de99.png",alt:"请输入图片描述"})],-1),Et=e("h2",{id:"第x章-自定义模版监控nginx状态",tabindex:"-1"},[n("第x章 自定义模版监控nginx状态 "),e("a",{class:"header-anchor",href:"#第x章-自定义模版监控nginx状态","aria-hidden":"true"},"#")],-1),yt=e("h2",{id:"_1-开启监控页面并访问测试",tabindex:"-1"},[n("1.开启监控页面并访问测试 "),e("a",{class:"header-anchor",href:"#_1-开启监控页面并访问测试","aria-hidden":"true"},"#")],-1),Tt=e("pre",null,[e("code",null,`[root@web01 ~]# cat /etc/nginx/conf.d/status.conf 
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
`)],-1),At=e("h2",{id:"_2-准备nginx监控状态脚本",tabindex:"-1"},[n("2.准备nginx监控状态脚本 "),e("a",{class:"header-anchor",href:"#_2-准备nginx监控状态脚本","aria-hidden":"true"},"#")],-1),It=e("pre",null,[e("code",null,`[root@web01 /etc/zabbix/zabbix_agentd.d]# cat nginx_monitor.sh 
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
`)],-1),St=e("h2",{id:"_3-编写zabbix监控配置文件",tabindex:"-1"},[n("3.编写zabbix监控配置文件 "),e("a",{class:"header-anchor",href:"#_3-编写zabbix监控配置文件","aria-hidden":"true"},"#")],-1),$t=e("pre",null,[e("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/nginx_status.conf
UserParameter=nginx_status[*],/bin/bash /etc/zabbix/zabbix_agentd.d/nginx_monitor.sh $1

[root@web01 ~]# systemctl restart zabbix-agent.service
`)],-1),Nt=e("h2",{id:"_4-使用zabbix-get取值",tabindex:"-1"},[n("4.使用zabbix_get取值 "),e("a",{class:"header-anchor",href:"#_4-使用zabbix-get取值","aria-hidden":"true"},"#")],-1),Rt=e("pre",null,[e("code",null,`[root@m01 ~]# zabbix_get -s 10.0.1.7 -k nginx_status[accepts]
7
`)],-1),Mt=e("h2",{id:"_5-导入模版",tabindex:"-1"},[n("5.导入模版 "),e("a",{class:"header-anchor",href:"#_5-导入模版","aria-hidden":"true"},"#")],-1),Ct=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-c3bbd17a2587f6b4.png",alt:"请输入图片描述"})],-1),Lt=e("h2",{id:"_6-链接模版",tabindex:"-1"},[n("6.链接模版 "),e("a",{class:"header-anchor",href:"#_6-链接模版","aria-hidden":"true"},"#")],-1),qt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-7f460c46106c792c.png",alt:"请输入图片描述"})],-1),Zt=e("p",null,[n("7.查看数据 "),e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-3edb2a100a2a3987.png",alt:"请输入图片描述"})],-1),jt=e("h1",{id:"第x章-自定义模版监控php状态",tabindex:"-1"},[n("第x章 自定义模版监控php状态 "),e("a",{class:"header-anchor",href:"#第x章-自定义模版监控php状态","aria-hidden":"true"},"#")],-1),Ut=e("h2",{id:"_1-开启监控页面",tabindex:"-1"},[n("1.开启监控页面 "),e("a",{class:"header-anchor",href:"#_1-开启监控页面","aria-hidden":"true"},"#")],-1),Dt=e("pre",null,[e("code",null,`[root@web01 ~]# tail -1 /etc/php-fpm.d/www.conf    
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
`)],-1),Bt=e("h2",{id:"_2-访问测试",tabindex:"-1"},[n("2.访问测试 "),e("a",{class:"header-anchor",href:"#_2-访问测试","aria-hidden":"true"},"#")],-1),Ft=e("pre",null,[e("code",null,`[root@web01 ~]# curl 127.0.0.1/php_status
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
`)],-1),Gt=e("h2",{id:"_3-准备访问脚本",tabindex:"-1"},[n("3.准备访问脚本 "),e("a",{class:"header-anchor",href:"#_3-准备访问脚本","aria-hidden":"true"},"#")],-1),Pt=e("pre",null,[e("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/fpm.sh 
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
`)],-1),Ot=e("p",null,"4.准备zabbix配置文件",-1),Wt=e("pre",null,[e("code",null,`[root@web01 ~]# cat /etc/zabbix/zabbix_agentd.d/fpm.conf    
UserParameter=php-fpm[*],/etc/zabbix/zabbix_agentd.d/fpm.sh "$1" "$2"
[root@web01 ~]# systemctl restart zabbix-agent.service
4.使用zabbix_get取值
[root@m01 ~]# zabbix_get -s 10.0.1.7 -k php-fpm["total processes",http://127.0.0.1/php_status]
5
`)],-1),Ht=e("p",null,"5.导入模版 导入之后需要修改一下模版里的宏配置",-1),Xt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-e9002db6117b2a36.png",alt:"请输入图片描述"})],-1),Vt=e("h1",{id:"第x章-web监控",tabindex:"-1"},[n("第x章 WEB监控 "),e("a",{class:"header-anchor",href:"#第x章-web监控","aria-hidden":"true"},"#")],-1),Yt=e("p",null,"需求，监控页面状态码",-1),Qt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-5b73f2eb0bbc026e.png",alt:"请输入图片描述"})],-1),Kt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-29b41892ec2a2652.png",alt:"请输入图片描述"})],-1),Jt=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-4d04849ba09f7aa2.png",alt:"请输入图片描述"})],-1),ea=e("h1",{id:"第x章-故障记录",tabindex:"-1"},[n("第x章 故障记录 "),e("a",{class:"header-anchor",href:"#第x章-故障记录","aria-hidden":"true"},"#")],-1),na=e("h2",{id:"故障1",tabindex:"-1"},[n("故障1 "),e("a",{class:"header-anchor",href:"#故障1","aria-hidden":"true"},"#")],-1),ta=e("p",null,"故障现象： 提示zabbix-server is not running",-1),aa=e("p",null,[e("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-5ec40e3f9f9c0b22.png",alt:"请输入图片描述"})],-1),ia=e("p",null,"报错日志：",-1),la=e("pre",null,[e("code",null,` 34983:20190807:202215.171 database is down: reconnecting in 10 seconds
 34983:20190807:202225.172 [Z3001] connection to database 'zabbix' failed: [1045] Access denied for user 'zabbix'@'localhost' (using password: NO)
`)],-1),sa=e("p",null,"故障原因： zabbix-server的配置文件里配有配置数据库密码 故障解决： 添加正确的数据库账号密码信息",-1),ra=e("pre",null,[e("code",null,`[root@m01 ~]# grep "^DB" /etc/zabbix/zabbix_server.conf     
DBHost=localhost
DBName=zabbix
DBUser=zabbix
DBPassword=zabbix
`)],-1),oa=e("h2",{id:"故障2",tabindex:"-1"},[n("故障2 "),e("a",{class:"header-anchor",href:"#故障2","aria-hidden":"true"},"#")],-1),da=e("p",null,"故障现象：微信报警失败 报错日志：",-1),ca=e("pre",null,[e("code",null,`[root@m01 ~]# tail -f /var/log/zabbix/zabbix_server.log 
Problem name: TIME_WAIT过多
Host: web01
Severity: Average

Original problem ID: 51
'": Traceback (most recent call last):
  File "/usr/lib/zabbix/alertscripts/weixin.py", line 7, in <module>
    import requests
ImportError: No module named requests
`)],-1),ha=e("p",null,"问题原因： 缺少模块 requests",-1),_a=e("p",null,"问题解决： 安装缺失的依赖包",-1),ba=e("pre",null,[e("code",null,`[root@m01 ~]# yum install python-pip
[root@m01 ~]# pip install --upgrade pip
[root@m01 ~]# pip install requests
`)],-1),pa=e("h2",{id:"故障3",tabindex:"-1"},[n("故障3 "),e("a",{class:"header-anchor",href:"#故障3","aria-hidden":"true"},"#")],-1),ua=e("p",null,"故障现象： 在server端使用zabbix_get命令测试键值命令时提示警告",-1),ga=e("pre",null,[e("code",null,`[root@m01 ~]# zabbix_get -s 10.0.1.7 -k ESTABLISHED  
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
2
`)],-1),ma=e("p",null,"问题原因： zabbix_agent是以普通用户zabbix运行的，而普通用户执行netstat -antp时会有警告，网上查找发现只要不是用p参数就可以以普通用户运行 解决方案： 监控脚本里的命令修改为netstat -ant",-1),xa=e("hr",null,null,-1),fa=e("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function za(a,va,wa,ka,s,Ea){const r=o;return _(),h(r,{frontmatter:s.frontmatter,data:s.data},{"main-content-md":t(()=>[u,g,m,x,f,z,v,w,k,E,y,T,A,I,S,$,N,R,M,C,L,q,Z,j,U,D,B,F,G,P,O,W,H,X,V,Y,Q,K,J,ee,ne,te,ae,ie,le,se,re,oe,de,ce,he,_e,be,pe,ue,ge,me,xe,fe,ze,ve,we,ke,Ee,ye,Te,Ae,Ie,Se,b("more"),$e,Ne,Re,Me,Ce,Le,qe,Ze,je,Ue,De,Be,Fe,Ge,Pe,Oe,We,He,Xe,Ve,Ye,Qe,Ke,Je,en,nn,tn,an,ln,sn,rn,on,dn,cn,hn,_n,bn,pn,un,gn,mn,xn,fn,zn,vn,wn,kn,En,yn,Tn,An,In,Sn,$n,Nn,Rn,Mn,Cn,Ln,qn,Zn,jn,Un,Dn,Bn,Fn,Gn,Pn,On,Wn,Hn,Xn,Vn,Yn,Qn,Kn,Jn,et,nt,tt,at,it,lt,st,rt,ot,dt,ct,ht,_t,bt,pt,ut,gt,mt,xt,ft,zt,vt,wt,kt,Et,yt,Tt,At,It,St,$t,Nt,Rt,Mt,Ct,Lt,qt,Zt,jt,Ut,Dt,Bt,Ft,Gt,Pt,Ot,Wt,Ht,Xt,Vt,Yt,Qt,Kt,Jt,ea,na,ta,aa,ia,la,sa,ra,oa,da,ca,ha,_a,ba,pa,ua,ga,ma,xa,fa]),"main-header":t(()=>[i(a.$slots,"main-header")]),"main-header-after":t(()=>[i(a.$slots,"main-header-after")]),"main-nav":t(()=>[i(a.$slots,"main-nav")]),"main-content":t(()=>[i(a.$slots,"main-content")]),"main-content-after":t(()=>[i(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[i(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[i(a.$slots,"main-nav-after")]),comment:t(()=>[i(a.$slots,"comment")]),footer:t(()=>[i(a.$slots,"footer")]),aside:t(()=>[i(a.$slots,"aside")]),"aside-custom":t(()=>[i(a.$slots,"aside-custom")]),default:t(()=>[i(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Na=d(p,[["render",za],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/初识Zabbix4.0~.md"]]);export{$a as __pageData,Na as default};
