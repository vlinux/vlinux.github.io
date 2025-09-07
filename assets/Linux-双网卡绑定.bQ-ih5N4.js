import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.C2bsXNP9.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as f,u as g,a as v}from"./chunks/vue-router.DESBU8cS.js";import{aa as E,ap as o,ag as e,af as n,ae as S,ai as r,P as y,ab as L,a1 as O}from"./framework.GHZxz7jq.js";import"./index.fe-YlSh0.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.Bfmmp6N5.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.Dv7YwUny.js";const $=f("/posts/Linux-双网卡绑定",async s=>JSON.parse('{"title":"Linux 双网卡绑定","description":"","frontmatter":{"title":"Linux 双网卡绑定","categories":"Linux技术","tags":["双网卡"],"date":"2019-10-09 11:21:00"},"headers":[],"relativePath":"pages/posts/Linux-双网卡绑定.md","lastUpdated":null}'),{lazy:(s,a)=>s.name===a.name}),G={__name:"Linux-双网卡绑定",setup(s,{expose:a}){const{data:m}=$(),u=v(),d=g(),i=Object.assign(d.meta.frontmatter||{},m.value?.frontmatter||{});return u.currentRoute.value.data=m.value,O("valaxy:frontmatter",i),globalThis.$frontmatter=i,a({frontmatter:{title:"Linux 双网卡绑定",categories:"Linux技术",tags:["双网卡"],date:"2019-10-09 11:21:00"}}),(t,l)=>{const p=b;return L(),E(p,{frontmatter:y(i)},{"main-content-md":o(()=>[l[0]||(l[0]=n("h1",{id:"linux-双网卡绑定",tabindex:"-1"},[r("Linux 双网卡绑定 "),n("a",{class:"header-anchor",href:"#linux-双网卡绑定","aria-label":'Permalink to "Linux 双网卡绑定"'},"​")],-1)),l[1]||(l[1]=n("p",null,"双网卡绑定这项继续特别适合利用再生产环境7x24小时的网络传输服务，采取双网卡绑定模式不仅可以提高网络传输速度，更重要的是，还可以确保其中一块网卡出现故障时，依然可以正常高效可靠的措施。下面我会使用两种方案来完成网双卡绑定 一种是传统的配置文件修改方案，另一种是最新的命令生成配置文件方案。",-1)),l[2]||(l[2]=n("p",null,[n("strong",null,"主要常用的三种模式")],-1)),l[3]||(l[3]=n("ul",null,[n("li",null,"mode0（平衡负载模式）：平时两块网卡均工作，且自动备援，但需要在与服务器本地网卡相连的交换机设备上进行端口聚合来支持绑定技术。"),n("li",null,"mode1（自动备援模式）：平时只有一块网卡工作，在它故障后自动替换为另外的网卡。"),n("li",null,"mode6（平衡负载模式）：平时两块网卡均工作，且自动备援，无须交换机设备提供辅助支持。(推荐)")],-1)),l[4]||(l[4]=n("p",null,[n("strong",null,"其他模式介绍")],-1)),l[5]||(l[5]=n("pre",null,[n("code",null,`balance-rr (mode=0)       默认, 有高可用 (容错) 和负载均衡的功能,  需要交换机的配置，每块网卡轮询发包 (流量分发比较均衡).
active-backup (mode=1)  只有高可用 (容错) 功能, 不需要交换机配置, 这种模式只有一块网卡工作, 对外只有一个mac地址。缺点是端口利用率比较低
balance-xor (mode=2)     不常用
broadcast (mode=3)        不常用
802.3ad (mode=4)          IEEE 802.3ad 动态链路聚合，需要交换机配置，没用过
balance-tlb (mode=5)      不常用
balance-alb (mode=6)     有高可用 ( 容错 )和负载均衡的功能，不需要交换机配置  (流量分发到每个接口不是特别均衡)
`)],-1)),l[6]||(l[6]=n("h2",{id:"bond-模式-修改配置文件实现双网卡绑定",tabindex:"-1"},[r("bond 模式 修改配置文件实现双网卡绑定 "),n("a",{class:"header-anchor",href:"#bond-模式-修改配置文件实现双网卡绑定","aria-label":'Permalink to "bond 模式 修改配置文件实现双网卡绑定"'},"​")],-1)),l[7]||(l[7]=n("p",null,[n("strong",null,"注意"),n("code",null,"必须保证服务器有两块同网段网卡设备"),n("strong",null,"环境：")],-1)),l[8]||(l[8]=n("ul",null,[n("li",null,"已添加 网卡1 ens33"),n("li",null,"已添加 网卡2 ens34")],-1)),l[9]||(l[9]=n("p",null,[n("strong",null,"1、新建Master配置文件")],-1)),l[10]||(l[10]=n("p",null,"/etc/sysconfig/network-scripts/ifcfg-bond6",-1)),l[11]||(l[11]=n("pre",null,[n("code",null,`# 设备名
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
`)],-1)),l[12]||(l[12]=n("p",null,[n("strong",null,"2、新建Slave1配置文件")],-1)),l[13]||(l[13]=n("p",null,"/etc/sysconfig/network-scripts/ifcfg-ens33",-1)),l[14]||(l[14]=n("pre",null,[n("code",null,`# 设备名
DEVICE=ens33
# 手动获取                                                            
BOOTPROTO=none
# master设备名
MASTER=bond0
# 开启SLAVE
SLAVE=yes
#是否允许普通用户管理此端口
USERCTL=no
`)],-1)),l[15]||(l[15]=n("p",null,[n("strong",null,"3、新建Slave2配置文件")],-1)),l[16]||(l[16]=n("pre",null,[n("code",null,`# 设备名
DEVICE=ens34
# 手动获取                                                            
BOOTPROTO=none
# master设备名
MASTER=bond0
# 开启SLAVE
SLAVE=yes
#是否允许普通用户管理此端口
USERCTL=no
`)],-1)),l[17]||(l[17]=n("p",null,[n("strong",null,"4、重启网卡服务")],-1)),l[18]||(l[18]=n("pre",null,[n("code",null,`systemctl restart network
`)],-1)),l[19]||(l[19]=n("p",null,[n("strong",null,"5、查看详情信息")],-1)),l[20]||(l[20]=n("pre",null,[n("code",null,`cat /proc/net/bonding/bond6 
`)],-1)),l[21]||(l[21]=n("h2",{id:"bond-模式-nmcli命令行实现双网卡绑定",tabindex:"-1"},[n("strong",null,"bond 模式 nmcli命令行实现双网卡绑定"),r(),n("a",{class:"header-anchor",href:"#bond-模式-nmcli命令行实现双网卡绑定","aria-label":'Permalink to "**bond 模式 nmcli命令行实现双网卡绑定**"'},"​")],-1)),l[22]||(l[22]=n("h2",{id:"注意",tabindex:"-1"},[r("注意： "),n("a",{class:"header-anchor",href:"#注意","aria-label":'Permalink to "注意："'},"​")],-1)),l[23]||(l[23]=n("p",null,[n("code",null,"必须保证服务器有两块同网段网卡设备"),n("strong",null,"环境：")],-1)),l[24]||(l[24]=n("ul",null,[n("li",null,"已添加 网卡1 ens33"),n("li",null,"已添加 网卡2 ens34")],-1)),l[25]||(l[25]=n("p",null,[n("strong",null,"1、创建Master配置文件")],-1)),l[26]||(l[26]=n("pre",null,[n("code",null,`# nmcli connection add type bond con-name 设备名称 ifname 设备名称 mode 模式号 miimon 毫秒
nmcli connection add type bond con-name bond6 ifname bond6 mode 1 miimon 100
`)],-1)),l[27]||(l[27]=n("p",null,[n("code",null,"注：miimon：指定当发现一个链路恢复时，在激活该链路之前的等待时间，以毫秒计算")],-1)),l[28]||(l[28]=n("p",null,[n("strong",null,"2、新建Slave1配置文件")],-1)),l[29]||(l[29]=n("pre",null,[n("code",null,`# nmcli connection add type bond-slave ifname 设备名称 master master设备名称
nmcli connection add type bond-slave ifname ens33 master bond6
`)],-1)),l[30]||(l[30]=n("p",null,[n("strong",null,"3、新建Slave2配置文件")],-1)),l[31]||(l[31]=n("pre",null,[n("code",null,`# nmcli connection add type bond-slave ifname 设备名称 master master设备名称
nmcli connection add type bond-slave ifname ens34 master bond6
`)],-1)),l[32]||(l[32]=n("p",null,[n("strong",null,"4、激活网路设备")],-1)),l[33]||(l[33]=n("pre",null,[n("code",null,`# 激活bond6网络设备
nmcli connection up "bond6"
# 激活ens33网络设备
nmcli connection up "bond-slave-ens33"
# 激活ens34网络设备
nmcli connection up "bond-slave-ens33"
`)],-1)),l[34]||(l[34]=n("p",null,[n("strong",null,"5、查看详情信息")],-1)),l[35]||(l[35]=n("pre",null,[n("code",null,`cat /proc/net/bonding/bond6 
`)],-1)),S("more"),l[36]||(l[36]=n("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1))]),"main-header":o(()=>[e(t.$slots,"main-header")]),"main-header-after":o(()=>[e(t.$slots,"main-header-after")]),"main-nav":o(()=>[e(t.$slots,"main-nav")]),"main-content-before":o(()=>[e(t.$slots,"main-content-before")]),"main-content":o(()=>[e(t.$slots,"main-content")]),"main-content-after":o(()=>[e(t.$slots,"main-content-after")]),"main-nav-before":o(()=>[e(t.$slots,"main-nav-before")]),"main-nav-after":o(()=>[e(t.$slots,"main-nav-after")]),comment:o(()=>[e(t.$slots,"comment")]),footer:o(()=>[e(t.$slots,"footer")]),aside:o(()=>[e(t.$slots,"aside")]),"aside-custom":o(()=>[e(t.$slots,"aside-custom")]),default:o(()=>[e(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{G as default,$ as usePageData};
