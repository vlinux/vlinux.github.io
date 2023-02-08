import{_ as r}from"./ValaxyMain.vue_vue_type_style_index_0_lang-01eb07f5.js";import{_ as u,c as m,w as e,o as _,b as n,U as l,q as a,a as p,r as t,W as h,p as b}from"./app-84496ba8.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-8e866644.js";import"./YunCard.vue_vue_type_style_index_0_lang-1adf57e7.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-3f7b80af.js";const _n=JSON.parse('{"title":"Linux 双网卡绑定","description":"","frontmatter":{"title":"Linux 双网卡绑定","categories":"Linux技术","tags":["双网卡"],"date":"2019-10-09T11:21:00.000Z"},"headers":[{"level":2,"title":"bond 模式 修改配置文件实现双网卡绑定","slug":"bond-模式-修改配置文件实现双网卡绑定","link":"#bond-模式-修改配置文件实现双网卡绑定","children":[]},{"level":2,"title":"bond 模式 nmcli命令行实现双网卡绑定","slug":"bond-模式-nmcli命令行实现双网卡绑定","link":"#bond-模式-nmcli命令行实现双网卡绑定","children":[]},{"level":2,"title":"注意：","slug":"注意：","link":"#注意：","children":[]}],"relativePath":"pages/posts/Linux-双网卡绑定.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Linux-双网卡绑定.md","lastUpdated":1671090556000}'),i=JSON.parse('{"title":"Linux 双网卡绑定","description":"","frontmatter":{"title":"Linux 双网卡绑定","categories":"Linux技术","tags":["双网卡"],"date":"2019-10-09T11:21:00.000Z"},"headers":[{"level":2,"title":"bond 模式 修改配置文件实现双网卡绑定","slug":"bond-模式-修改配置文件实现双网卡绑定","link":"#bond-模式-修改配置文件实现双网卡绑定","children":[]},{"level":2,"title":"bond 模式 nmcli命令行实现双网卡绑定","slug":"bond-模式-nmcli命令行实现双网卡绑定","link":"#bond-模式-nmcli命令行实现双网卡绑定","children":[]},{"level":2,"title":"注意：","slug":"注意：","link":"#注意：","children":[]}],"relativePath":"pages/posts/Linux-双网卡绑定.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Linux-双网卡绑定.md","lastUpdated":1671090556000}'),f={name:"pages/posts/Linux-双网卡绑定.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){b("pageData",i)}},g={id:"linux-双网卡绑定",tabindex:"-1"},v=n("p",null,"双网卡绑定这项继续特别适合利用再生产环境7x24小时的网络传输服务，采取双网卡绑定模式不仅可以提高网络传输速度，更重要的是，还可以确保其中一块网卡出现故障时，依然可以正常高效可靠的措施。下面我会使用两种方案来完成网双卡绑定 一种是传统的配置文件修改方案，另一种是最新的命令生成配置文件方案。",-1),x=n("p",null,[n("strong",null,"主要常用的三种模式")],-1),L=n("ul",null,[n("li",null,"mode0（平衡负载模式）：平时两块网卡均工作，且自动备援，但需要在与服务器本地网卡相连的交换机设备上进行端口聚合来支持绑定技术。"),n("li",null,"mode1（自动备援模式）：平时只有一块网卡工作，在它故障后自动替换为另外的网卡。"),n("li",null,"mode6（平衡负载模式）：平时两块网卡均工作，且自动备援，无须交换机设备提供辅助支持。(推荐)")],-1),S=n("p",null,[n("strong",null,"其他模式介绍")],-1),E=n("pre",null,[n("code",null,`balance-rr (mode=0)       默认, 有高可用 (容错) 和负载均衡的功能,  需要交换机的配置，每块网卡轮询发包 (流量分发比较均衡).
active-backup (mode=1)  只有高可用 (容错) 功能, 不需要交换机配置, 这种模式只有一块网卡工作, 对外只有一个mac地址。缺点是端口利用率比较低
balance-xor (mode=2)     不常用
broadcast (mode=3)        不常用
802.3ad (mode=4)          IEEE 802.3ad 动态链路聚合，需要交换机配置，没用过
balance-tlb (mode=5)      不常用
balance-alb (mode=6)     有高可用 ( 容错 )和负载均衡的功能，不需要交换机配置  (流量分发到每个接口不是特别均衡)
`)],-1),y={id:"bond-模式-修改配置文件实现双网卡绑定",tabindex:"-1"},O=n("p",null,[n("strong",null,"注意"),n("code",null,"必须保证服务器有两块同网段网卡设备"),n("strong",null,"环境：")],-1),$=n("ul",null,[n("li",null,"已添加 网卡1 ens33"),n("li",null,"已添加 网卡2 ens34")],-1),T=n("p",null,[n("strong",null,"1、新建Master配置文件")],-1),k=n("p",null,"/etc/sysconfig/network-scripts/ifcfg-bond6",-1),D=n("pre",null,[n("code",null,`# 设备名
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
`)],-1),N=n("p",null,[n("strong",null,"2、新建Slave1配置文件")],-1),V=n("p",null,"/etc/sysconfig/network-scripts/ifcfg-ens33",-1),A=n("pre",null,[n("code",null,`# 设备名
DEVICE=ens33
# 手动获取                                                            
BOOTPROTO=none
# master设备名
MASTER=bond0
# 开启SLAVE
SLAVE=yes
#是否允许普通用户管理此端口
USERCTL=no
`)],-1),P=n("p",null,[n("strong",null,"3、新建Slave2配置文件")],-1),R=n("pre",null,[n("code",null,`# 设备名
DEVICE=ens34
# 手动获取                                                            
BOOTPROTO=none
# master设备名
MASTER=bond0
# 开启SLAVE
SLAVE=yes
#是否允许普通用户管理此端口
USERCTL=no
`)],-1),I=n("p",null,[n("strong",null,"4、重启网卡服务")],-1),B=n("pre",null,[n("code",null,`systemctl restart network
`)],-1),C=n("p",null,[n("strong",null,"5、查看详情信息")],-1),U=n("pre",null,[n("code",null,`cat /proc/net/bonding/bond6 
`)],-1),w={id:"bond-模式-nmcli命令行实现双网卡绑定",tabindex:"-1"},M=n("strong",null,"bond 模式 nmcli命令行实现双网卡绑定",-1),G={id:"注意：",tabindex:"-1"},J=n("p",null,[n("code",null,"必须保证服务器有两块同网段网卡设备"),n("strong",null,"环境：")],-1),W=n("ul",null,[n("li",null,"已添加 网卡1 ens33"),n("li",null,"已添加 网卡2 ens34")],-1),Z=n("p",null,[n("strong",null,"1、创建Master配置文件")],-1),q=n("pre",null,[n("code",null,`# nmcli connection add type bond con-name 设备名称 ifname 设备名称 mode 模式号 miimon 毫秒
nmcli connection add type bond con-name bond6 ifname bond6 mode 1 miimon 100
`)],-1),F=n("p",null,[n("code",null,"注：miimon：指定当发现一个链路恢复时，在激活该链路之前的等待时间，以毫秒计算")],-1),X=n("p",null,[n("strong",null,"2、新建Slave1配置文件")],-1),Y=n("pre",null,[n("code",null,`# nmcli connection add type bond-slave ifname 设备名称 master master设备名称
nmcli connection add type bond-slave ifname ens33 master bond6
`)],-1),j=n("p",null,[n("strong",null,"3、新建Slave2配置文件")],-1),z=n("pre",null,[n("code",null,`# nmcli connection add type bond-slave ifname 设备名称 master master设备名称
nmcli connection add type bond-slave ifname ens34 master bond6
`)],-1),H=n("p",null,[n("strong",null,"4、激活网路设备")],-1),K=n("pre",null,[n("code",null,`# 激活bond6网络设备
nmcli connection up "bond6"
# 激活ens33网络设备
nmcli connection up "bond-slave-ens33"
# 激活ens34网络设备
nmcli connection up "bond-slave-ens33"
`)],-1),Q=n("p",null,[n("strong",null,"5、查看详情信息")],-1),nn=n("pre",null,[n("code",null,`cat /proc/net/bonding/bond6 
`)],-1),en=n("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function on(o,tn,ln,sn,d,an){const s=h,c=r;return _(),m(c,{frontmatter:d.frontmatter,data:d.data},{"main-content-md":e(()=>[n("h1",g,[l("Linux 双网卡绑定 "),a(s,{class:"header-anchor",href:"#linux-双网卡绑定","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),v,x,L,S,E,n("h2",y,[l("bond 模式 修改配置文件实现双网卡绑定 "),a(s,{class:"header-anchor",href:"#bond-模式-修改配置文件实现双网卡绑定","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),O,$,T,k,D,N,V,A,P,R,I,B,C,U,n("h2",w,[M,l(),a(s,{class:"header-anchor",href:"#bond-模式-nmcli命令行实现双网卡绑定","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),n("h2",G,[l("注意： "),a(s,{class:"header-anchor",href:"#注意：","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),J,W,Z,q,F,X,Y,j,z,H,K,Q,nn,p("more"),en]),"main-header":e(()=>[t(o.$slots,"main-header")]),"main-header-after":e(()=>[t(o.$slots,"main-header-after")]),"main-nav":e(()=>[t(o.$slots,"main-nav")]),"main-content":e(()=>[t(o.$slots,"main-content")]),"main-content-after":e(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[t(o.$slots,"main-nav-after")]),comment:e(()=>[t(o.$slots,"comment")]),footer:e(()=>[t(o.$slots,"footer")]),aside:e(()=>[t(o.$slots,"aside")]),"aside-custom":e(()=>[t(o.$slots,"aside-custom")]),default:e(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const pn=u(f,[["render",on]]);export{_n as __pageData,pn as default};
