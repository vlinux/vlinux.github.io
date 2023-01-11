import{_ as r}from"./ValaxyMain-f02151dd.js";import{_ as p,p as d,c,w as e,o as u,r as s,b as t,R as o}from"./app-b8a6f45d.js";import"./YunFooter-17369ec4.js";import"./YunCard-b0df9910.js";import"./YunPageHeader-95685dde.js";const Q=JSON.parse('{"title":"PXE+Kickstart批量装机","description":"","frontmatter":{"title":"PXE+Kickstart批量装机","categories":"Linux技术","tags":["PXE","Kickstart","批量装机"],"date":"2020-02-17T11:43:00.000Z"},"headers":[{"level":2,"title":"工作过程","slug":"工作过程","link":"#工作过程","children":[]},{"level":2,"title":"Kickstart安装要求","slug":"kickstart安装要求","link":"#kickstart安装要求","children":[]},{"level":2,"title":"PXE服务器配置详解","slug":"pxe服务器配置详解","link":"#pxe服务器配置详解","children":[]},{"level":2,"title":"PXE常见故障：","slug":"pxe常见故障：","link":"#pxe常见故障：","children":[]}],"relativePath":"pages/posts/PXE+Kickstart批量装机.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/PXE+Kickstart批量装机.md","lastUpdated":1671090556000}'),i=JSON.parse('{"title":"PXE+Kickstart批量装机","description":"","frontmatter":{"title":"PXE+Kickstart批量装机","categories":"Linux技术","tags":["PXE","Kickstart","批量装机"],"date":"2020-02-17T11:43:00.000Z"},"headers":[{"level":2,"title":"工作过程","slug":"工作过程","link":"#工作过程","children":[]},{"level":2,"title":"Kickstart安装要求","slug":"kickstart安装要求","link":"#kickstart安装要求","children":[]},{"level":2,"title":"PXE服务器配置详解","slug":"pxe服务器配置详解","link":"#pxe服务器配置详解","children":[]},{"level":2,"title":"PXE常见故障：","slug":"pxe常见故障：","link":"#pxe常见故障：","children":[]}],"relativePath":"pages/posts/PXE+Kickstart批量装机.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/PXE+Kickstart批量装机.md","lastUpdated":1671090556000}'),f={name:"pages/posts/PXE+Kickstart批量装机.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){d("pageData",i)}},h=t("h1",{id:"简介",tabindex:"-1"},[o("简介 "),t("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#")],-1),m=t("blockquote",null,[t("p",null,"PXE（预启动执行环境）是由intel公司开发的技术，可以让计算机通过网络来启动操作系统（前提是网卡支持pxe技术），主要用于在无人值守安装系统中引导客户端主机安装linux操作系统，kickstart是一种无人值守的安装方式，工作原理是预先把原本需要运维人员手工填写的参数保存成一个ks.cfg文件，当安装过程中需要填写参数时则自动匹配，kickstart生成的文件，所有只要kickstart文件包含了安装过程中需要人工填写的所有参数，从理论上来讲完全不需要人工干预")],-1),x=t("h2",{id:"工作过程",tabindex:"-1"},[o("工作过程 "),t("a",{class:"header-anchor",href:"#工作过程","aria-hidden":"true"},"#")],-1),k=t("pre",null,[t("code",null,`1. PXE Client 从自己的PXE网卡启动，向本网络中的DHCP服务器索取IP
2.DHCP 服务器返回分配给客户机的IP * 以及PXE文件的放置位置(该文件一般是放在TFTP服务器上)
3.PXE Client 向本网络中的TFTP服务器索取pxelinux.0 文件
4.PXE Client 取得pxelinux.0 文件后之执行该文件
5. 根据pxelinux.0 的执行结果，通过TFTP服务器加载内核和文件系统 
6.进入安装画面, 此时可以通过选择HTTP、FTP、NFS 方式之一进行安装
`)],-1),_=t("p",null,[t("img",{src:"https://www.kococ.cn/usr/uploads/2020/02/2309972010.jpg",alt:"1.jpg"})],-1),g=t("h2",{id:"kickstart安装要求",tabindex:"-1"},[o("Kickstart安装要求 "),t("a",{class:"header-anchor",href:"#kickstart安装要求","aria-hidden":"true"},"#")],-1),v=t("pre",null,[t("code",null,`1.网卡必须支持PXE引导
2.客户端需要有与Kickstart 通信的IP地址，这里一般都是通过DHCP自动分配IP地址来实现
3.提供引导所需的文件，内核文件，内核镜像文件等，此时一般通过tftp-server等实现
4.kickstart文件，它主要实现自动化安装的过程，比如配置主机名、添加用户、安装系统后相关操作
5.提供安装源，一般就是NFS/ftp/httpd等
`)],-1),b=t("p",null,"工具：dhcp + tftp + syslinux + kickstart + vsftpd",-1),P=t("p",null,"可以结合httpd进行部署，这里不详细说明",-1),E=t("h2",{id:"pxe服务器配置详解",tabindex:"-1"},[o("PXE服务器配置详解 "),t("a",{class:"header-anchor",href:"#pxe服务器配置详解","aria-hidden":"true"},"#")],-1),y=t("p",null,[t("strong",null,"环境")],-1),X=t("pre",null,[t("code",null,`服务器系统：centos7.3
网卡地址：192.168.3.0/24
光盘镜像：centos-server-7.3-x86_64-dvd.iso
安装工具：dhcp + tftp + syslinux + kickstart + vsftpd
`)],-1),K=t("p",null,[t("strong",null,"部署")],-1),$=t("ol",null,[t("li",null,[t("p",null,"挂载系统光盘到/media/cdrom并搭建本地yum源或网络源 省略")]),t("li",null,[t("p",null,"使用yum安装需要的服务dhcp、tftpserver、syslinux、kickstart"),t("p",null,"[root@cenos2 ]# yum install -y dhcp vsftpd tftp tftp-server syslinux system-config-kickstart ##使用yum安装需要的软件包")]),t("li",null,[t("p",null,"配置dhcp服务器并启动dhcpd服务"),t("p",null,'[root@cenos2 ]# vim /etc/dhcp/dhcpd.conf ##编辑dhcp主配置文件 :r /usr/share/doc/dhcp-4.2.5/dhcpd.conf.example ##读入dhcp配置模板文件 ---------------------------修改或添加以下参数----------------------------- subnet 192.168.3.0 netmask 255.255.255.0 { range 192.168.3.200 192.168.3.220; next-server 192.168.3.1; #ip不加引号，设置tftp地址 filename "pxelinux.0"; ##设置pxe引导文件名称 } [root@cenos2]# systemctl restart dhcpd ##启动dhcpd服务')]),t("li",null,[t("p",null,"编辑tftp配置文件开启tftp并重启服务"),t("p",null,"vim /etc/xinetd.d/tftp ##编辑tftp配置文件 -----------------------将下列参数改为no--------------------- { disable = no #将yes改为no } [root@cenos2]# systemctl restart tftp ##启动tftp服务程序")])],-1),T=t("p",null,"5.准备内核、初始化镜像、pxe引导、启动菜单文件复制到tftp目录，tftp的默认根目录为/var/lib/tftpboot/ 内核和初始化文件：vmlinuz和initrd.img，文件光盘目录的Images/pxeboot目录下 Pxe引导文件：pxelinux.0由syslinux软件提供，目录在/usr/shar/syslinux/目录下 启动菜单文件：在光盘ioslinux/isolinux.cfg文件，复制后更名default",-1),w=t("pre",null,[t("code",null,`[root@cenos2 network-scripts]# cd /var/lib/tftpboot/	#切换到tftp目录
[root@cenos2 tftpboot]# mkdir pxelinux.cfg	#在tftp根目录创建启动菜单存放目录
[root@cenos2 tftpboot]# cp /media/cdrom/images/pxeboot/initrd.img .
					#将初始化文件复制到tftp根目录
[root@cenos2 tftpboot]# cp /media/cdrom/images/pxeboot/vmlinuz .
					#将内核文件复制到tftp根目录
[root@cenos2 tftpboot]# cp /usr/share/syslinux/pxelinux.0 .
					#将pxe引导文件复制到tftp根目录
[root@cenos2 tftpboot]# cp /media/cdrom/isolinux/isolinux.cfg ./pxelinux.cfg/default
		#将启动菜单复制到tftp根目录的pxelinux.cfg目录下，更名为default
[root@cenos2 tftpboot]# vim ./pxelinux.cfg/default		#编辑启动菜单文件
`)],-1),C=t("p",null,"----------------------------修改以下行的内容------------------------------",-1),S=t("pre",null,[t("code",null,`  原1行 default vesamenu.c32
  改1行 default linux
  原64行 append initrd=initrd.img inst.stage2=hd:LABEL=CentOS\\x207\\x20x86_64 quiet
  改64行 append initrd=initrd.img inst.stage2=ftp://192.168.3.1 ks=ftp://192.168.3.1/ks.cfg quiet
`)],-1),D=t("p",null,"6.复制所有系统镜像文件到vsftp根目录下，vsftp默认根目录为/var/ftp/",-1),I=t("pre",null,[t("code",null,`[root@cenos2 tftpboot]# cp -rf /media/cdrom/* /var/ftp/	##复制镜像到vsftp根目录
`)],-1),N=t("p",null,"7.安装kickstart工具生成自动应答文件或者编辑一个自动应答文件，将其保存到vsftp根目录 这里用编辑的方式新建自动应答文件",-1),z=t("pre",null,[t("code",null,`[root@cenos2 tftpboot]# vim /var/ftp/ks.cfg		//编辑自动应答文件
----------------------------添加以下内容-----------------------------------
#platform=x86, AMD64, 或 Intel EM64T
#version=DEVEL
# Install OS instead of upgrade
install
keyboard 'us'  			 #设置键盘语言
rootpw --plaintext putianhui           	 #设置管理员密码
url --url="ftp://192.168.3.1/"         	 #设置安装源的路径这里用的ftp
lang zh_CN                              		#设置安装语言为中文
auth  --useshadow  --passalgo=md5
graphical
firstboot --disable
selinux --disabled                      		#设置selinux为关闭
firewall --disabled                     		#设置防火墙为关闭
network  --bootproto=dhcp --device=eth0 #网卡的ip获取类型和网卡的名称
reboot                                  		#设置安装成功之后自动重启
timezone Asia/Shanghai                  	#设置时区为亚洲shagnhai
bootloader --location=mbr
zerombr
clearpart --all --initlabel
part / --fstype="xfs" --size=15000      	#设置磁盘挂载位置和分配磁盘大小15G
%packages				#到end结束是复制anaconda中的安装脚本
@desktop-debugging
@development
@gnome-desktop
@remote-desktop-clients
vinagre
%end
`)],-1),F=t("p",null,"8.重启dhcpd、vsftpd、tftp服务，然后关闭防火墙和selinux",-1),L=t("pre",null,[t("code",null,`[root@cenos2 tftpboot]# systemctl restart dhcpd		##重启dhcpd服务
[root@cenos2 tftpboot]# systemctl restart vsftpd		##重启vsftpd服务
[root@cenos2 tftpboot]# systemctl restart tftp		##重启tftp服务
[root@cenos2 tftpboot]# systemctl stop firewalld		##关闭防火墙
[root@cenos2 tftpboot]# setenforce 0			##关闭selinux
`)],-1),U=t("p",null,"9.新建虚拟机将网络和服务器改为同一模式，开机验证",-1),B=t("h2",{id:"pxe常见故障：",tabindex:"-1"},[o("PXE常见故障： "),t("a",{class:"header-anchor",href:"#pxe常见故障：","aria-hidden":"true"},"#")],-1),H=t("p",null,"故障一：如果客户机开机可以获取到ip，但是提示pxe-e11:arp-timeout 解决办法：查看next-server的ip地址是否正确 故障二：如果使用system-config-kickstart工具选择软件包提示由于下载软件包失败 解决办法：将本地yum源的第一项 [***] 改为 [development] 故障三：虚拟机内存不足 解决方法：你懂的",-1);function O(n,V,q,A,l,M){const a=r;return u(),c(a,{frontmatter:l.frontmatter,data:l.data},{"main-content-md":e(()=>[h,m,x,k,_,g,v,b,P,E,y,X,K,$,T,w,C,S,D,I,N,z,F,L,U,B,H]),"main-header":e(()=>[s(n.$slots,"main-header")]),"main-header-after":e(()=>[s(n.$slots,"main-header-after")]),"main-nav":e(()=>[s(n.$slots,"main-nav")]),"main-content":e(()=>[s(n.$slots,"main-content")]),"main-content-after":e(()=>[s(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(n.$slots,"main-nav-after")]),comment:e(()=>[s(n.$slots,"comment")]),footer:e(()=>[s(n.$slots,"footer")]),aside:e(()=>[s(n.$slots,"aside")]),"aside-custom":e(()=>[s(n.$slots,"aside-custom")]),default:e(()=>[s(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const W=p(f,[["render",O],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/PXE+Kickstart批量装机.md"]]);export{Q as __pageData,W as default};
