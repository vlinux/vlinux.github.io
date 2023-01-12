import{_ as d}from"./ValaxyMain-56eaee8c.js";import{_ as c,p as r,c as u,w as e,o as m,a as _,r as l,b as n,R as t}from"./app-275f6332.js";import"./YunFooter-f6a2c496.js";import"./YunCard-317d6aea.js";import"./YunPageHeader-4fc472d3.js";const cn=JSON.parse('{"title":"Linux 双网卡绑定","description":"","frontmatter":{"title":"Linux 双网卡绑定","categories":"Linux技术","tags":["双网卡"],"date":"2019-10-09T11:21:00.000Z"},"headers":[{"level":2,"title":"bond 模式 修改配置文件实现双网卡绑定","slug":"bond-模式-修改配置文件实现双网卡绑定","link":"#bond-模式-修改配置文件实现双网卡绑定","children":[]},{"level":2,"title":"bond 模式 nmcli命令行实现双网卡绑定","slug":"bond-模式-nmcli命令行实现双网卡绑定","link":"#bond-模式-nmcli命令行实现双网卡绑定","children":[]},{"level":2,"title":"注意：","slug":"注意：","link":"#注意：","children":[]}],"relativePath":"pages/posts/Linux-双网卡绑定.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Linux-双网卡绑定.md","lastUpdated":1671090556000}'),s=JSON.parse('{"title":"Linux 双网卡绑定","description":"","frontmatter":{"title":"Linux 双网卡绑定","categories":"Linux技术","tags":["双网卡"],"date":"2019-10-09T11:21:00.000Z"},"headers":[{"level":2,"title":"bond 模式 修改配置文件实现双网卡绑定","slug":"bond-模式-修改配置文件实现双网卡绑定","link":"#bond-模式-修改配置文件实现双网卡绑定","children":[]},{"level":2,"title":"bond 模式 nmcli命令行实现双网卡绑定","slug":"bond-模式-nmcli命令行实现双网卡绑定","link":"#bond-模式-nmcli命令行实现双网卡绑定","children":[]},{"level":2,"title":"注意：","slug":"注意：","link":"#注意：","children":[]}],"relativePath":"pages/posts/Linux-双网卡绑定.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Linux-双网卡绑定.md","lastUpdated":1671090556000}'),p={name:"pages/posts/Linux-双网卡绑定.md",data(){return{data:s,frontmatter:s.frontmatter}},setup(){r("pageData",s)}},h=n("h1",{id:"linux-双网卡绑定",tabindex:"-1"},[t("Linux 双网卡绑定 "),n("a",{class:"header-anchor",href:"#linux-双网卡绑定","aria-hidden":"true"},"#")],-1),b=n("p",null,"双网卡绑定这项继续特别适合利用再生产环境7x24小时的网络传输服务，采取双网卡绑定模式不仅可以提高网络传输速度，更重要的是，还可以确保其中一块网卡出现故障时，依然可以正常高效可靠的措施。下面我会使用两种方案来完成网双卡绑定 一种是传统的配置文件修改方案，另一种是最新的命令生成配置文件方案。",-1),g=n("p",null,[n("strong",null,"主要常用的三种模式")],-1),f=n("ul",null,[n("li",null,"mode0（平衡负载模式）：平时两块网卡均工作，且自动备援，但需要在与服务器本地网卡相连的交换机设备上进行端口聚合来支持绑定技术。"),n("li",null,"mode1（自动备援模式）：平时只有一块网卡工作，在它故障后自动替换为另外的网卡。"),n("li",null,"mode6（平衡负载模式）：平时两块网卡均工作，且自动备援，无须交换机设备提供辅助支持。(推荐)")],-1),v=n("p",null,[n("strong",null,"其他模式介绍")],-1),x=n("pre",null,[n("code",null,`balance-rr (mode=0)       默认, 有高可用 (容错) 和负载均衡的功能,  需要交换机的配置，每块网卡轮询发包 (流量分发比较均衡).
active-backup (mode=1)  只有高可用 (容错) 功能, 不需要交换机配置, 这种模式只有一块网卡工作, 对外只有一个mac地址。缺点是端口利用率比较低
balance-xor (mode=2)     不常用
broadcast (mode=3)        不常用
802.3ad (mode=4)          IEEE 802.3ad 动态链路聚合，需要交换机配置，没用过
balance-tlb (mode=5)      不常用
balance-alb (mode=6)     有高可用 ( 容错 )和负载均衡的功能，不需要交换机配置  (流量分发到每个接口不是特别均衡)
`)],-1),L=n("h2",{id:"bond-模式-修改配置文件实现双网卡绑定",tabindex:"-1"},[t("bond 模式 修改配置文件实现双网卡绑定 "),n("a",{class:"header-anchor",href:"#bond-模式-修改配置文件实现双网卡绑定","aria-hidden":"true"},"#")],-1),S=n("p",null,[n("strong",null,"注意"),n("code",null,"必须保证服务器有两块同网段网卡设备"),n("strong",null,"环境：")],-1),E=n("ul",null,[n("li",null,"已添加 网卡1 ens33"),n("li",null,"已添加 网卡2 ens34")],-1),y=n("p",null,[n("strong",null,"1、新建Master配置文件")],-1),O=n("p",null,"/etc/sysconfig/network-scripts/ifcfg-bond6",-1),T=n("pre",null,[n("code",null,`# 设备名
DEVICE=bond6
# 手动配置地址
BOOTPROTO=none
# 配置模式
BONDING_OPTS="miimon=100 mode=6"
# IP地址
IPADDR=192.168.1.100
# 子网掩码
PREFIX=24
# 网关地址
GATEWAY=192.168.1.1
# DNS1地址
DNS1=114.114.114.114
# DNS2地址
DNS2=8.8.8.8
`)],-1),$=n("p",null,[n("strong",null,"2、新建Slave1配置文件")],-1),k=n("p",null,"/etc/sysconfig/network-scripts/ifcfg-ens33",-1),D=n("pre",null,[n("code",null,`# 设备名
DEVICE=ens33
# 手动获取                                                            
BOOTPROTO=none
# master设备名
MASTER=bond0
# 开启SLAVE
SLAVE=yes
#是否允许普通用户管理此端口
USERCTL=no
`)],-1),N=n("p",null,[n("strong",null,"3、新建Slave2配置文件")],-1),V=n("pre",null,[n("code",null,`# 设备名
DEVICE=ens34
# 手动获取                                                            
BOOTPROTO=none
# master设备名
MASTER=bond0
# 开启SLAVE
SLAVE=yes
#是否允许普通用户管理此端口
USERCTL=no
`)],-1),R=n("p",null,[n("strong",null,"4、重启网卡服务")],-1),A=n("pre",null,[n("code",null,`systemctl restart network
`)],-1),P=n("p",null,[n("strong",null,"5、查看详情信息")],-1),I=n("pre",null,[n("code",null,`cat /proc/net/bonding/bond6 
`)],-1),B=n("h2",{id:"bond-模式-nmcli命令行实现双网卡绑定",tabindex:"-1"},[n("strong",null,"bond 模式 nmcli命令行实现双网卡绑定"),t(),n("a",{class:"header-anchor",href:"#bond-模式-nmcli命令行实现双网卡绑定","aria-hidden":"true"},"#")],-1),C=n("h2",{id:"注意：",tabindex:"-1"},[t("注意： "),n("a",{class:"header-anchor",href:"#注意：","aria-hidden":"true"},"#")],-1),U=n("p",null,[n("code",null,"必须保证服务器有两块同网段网卡设备"),n("strong",null,"环境：")],-1),w=n("ul",null,[n("li",null,"已添加 网卡1 ens33"),n("li",null,"已添加 网卡2 ens34")],-1),M=n("p",null,[n("strong",null,"1、创建Master配置文件")],-1),G=n("pre",null,[n("code",null,`# nmcli connection add type bond con-name 设备名称 ifname 设备名称 mode 模式号 miimon 毫秒
nmcli connection add type bond con-name bond6 ifname bond6 mode 1 miimon 100
`)],-1),J=n("p",null,[n("code",null,"注：miimon：指定当发现一个链路恢复时，在激活该链路之前的等待时间，以毫秒计算")],-1),Z=n("p",null,[n("strong",null,"2、新建Slave1配置文件")],-1),F=n("pre",null,[n("code",null,`# nmcli connection add type bond-slave ifname 设备名称 master master设备名称
nmcli connection add type bond-slave ifname ens33 master bond6
`)],-1),W=n("p",null,[n("strong",null,"3、新建Slave2配置文件")],-1),X=n("pre",null,[n("code",null,`# nmcli connection add type bond-slave ifname 设备名称 master master设备名称
nmcli connection add type bond-slave ifname ens34 master bond6
`)],-1),Y=n("p",null,[n("strong",null,"4、激活网路设备")],-1),j=n("pre",null,[n("code",null,`# 激活bond6网络设备
nmcli connection up "bond6"
# 激活ens33网络设备
nmcli connection up "bond-slave-ens33"
# 激活ens34网络设备
nmcli connection up "bond-slave-ens33"
`)],-1),q=n("p",null,[n("strong",null,"5、查看详情信息")],-1),z=n("pre",null,[n("code",null,`cat /proc/net/bonding/bond6 
`)],-1),H=n("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function K(o,Q,nn,en,i,on){const a=d;return m(),u(a,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":e(()=>[h,b,g,f,v,x,L,S,E,y,O,T,$,k,D,N,V,R,A,P,I,B,C,U,w,M,G,J,Z,F,W,X,Y,j,q,z,_("more"),H]),"main-header":e(()=>[l(o.$slots,"main-header")]),"main-header-after":e(()=>[l(o.$slots,"main-header-after")]),"main-nav":e(()=>[l(o.$slots,"main-nav")]),"main-content":e(()=>[l(o.$slots,"main-content")]),"main-content-after":e(()=>[l(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[l(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[l(o.$slots,"main-nav-after")]),comment:e(()=>[l(o.$slots,"comment")]),footer:e(()=>[l(o.$slots,"footer")]),aside:e(()=>[l(o.$slots,"aside")]),"aside-custom":e(()=>[l(o.$slots,"aside-custom")]),default:e(()=>[l(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const rn=c(p,[["render",K],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Linux-双网卡绑定.md"]]);export{cn as __pageData,rn as default};
