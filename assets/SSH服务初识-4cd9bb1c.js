import{_ as l}from"./ValaxyMain-3652fbf7.js";import{_ as d,p as r,c,w as n,o as _,a as p,r as o,b as s,R as e}from"./app-096d6a25.js";import"./YunFooter-3373f0a7.js";import"./YunCard-56d4c4e2.js";import"./YunPageHeader-4c29e8a4.js";const Ps=JSON.parse('{"title":"SSH服务初识","description":"","frontmatter":{"title":"SSH服务初识","categories":"Linux技术","tags":["SSH"],"date":"2018-09-08T16:38:00.000Z"},"headers":[{"level":2,"title":"1.管理端服务器","slug":"_1-管理端服务器","link":"#_1-管理端服务器","children":[]},{"level":2,"title":"2.被管理端服务器","slug":"_2-被管理端服务器","link":"#_2-被管理端服务器","children":[]},{"level":2,"title":"1.解决免交互问题：","slug":"_1-解决免交互问题：","link":"#_1-解决免交互问题：","children":[]},{"level":2,"title":"2.ssh-copy-id分发公钥原理：","slug":"_2-ssh-copy-id分发公钥原理：","link":"#_2-ssh-copy-id分发公钥原理：","children":[]},{"level":2,"title":"3.分发脚本：","slug":"_3-分发脚本：","link":"#_3-分发脚本：","children":[]},{"level":2,"title":"4.if判断比较信息：","slug":"_4-if判断比较信息：","link":"#_4-if判断比较信息：","children":[]},{"level":2,"title":"5.分发公钥问题说明：","slug":"_5-分发公钥问题说明：","link":"#_5-分发公钥问题说明：","children":[]},{"level":2,"title":"6.排错方法：","slug":"_6-排错方法：","link":"#_6-排错方法：","children":[]}],"relativePath":"pages/posts/SSH服务初识.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/SSH服务初识.md","lastUpdated":1671090556000}'),i=JSON.parse('{"title":"SSH服务初识","description":"","frontmatter":{"title":"SSH服务初识","categories":"Linux技术","tags":["SSH"],"date":"2018-09-08T16:38:00.000Z"},"headers":[{"level":2,"title":"1.管理端服务器","slug":"_1-管理端服务器","link":"#_1-管理端服务器","children":[]},{"level":2,"title":"2.被管理端服务器","slug":"_2-被管理端服务器","link":"#_2-被管理端服务器","children":[]},{"level":2,"title":"1.解决免交互问题：","slug":"_1-解决免交互问题：","link":"#_1-解决免交互问题：","children":[]},{"level":2,"title":"2.ssh-copy-id分发公钥原理：","slug":"_2-ssh-copy-id分发公钥原理：","link":"#_2-ssh-copy-id分发公钥原理：","children":[]},{"level":2,"title":"3.分发脚本：","slug":"_3-分发脚本：","link":"#_3-分发脚本：","children":[]},{"level":2,"title":"4.if判断比较信息：","slug":"_4-if判断比较信息：","link":"#_4-if判断比较信息：","children":[]},{"level":2,"title":"5.分发公钥问题说明：","slug":"_5-分发公钥问题说明：","link":"#_5-分发公钥问题说明：","children":[]},{"level":2,"title":"6.排错方法：","slug":"_6-排错方法：","link":"#_6-排错方法：","children":[]}],"relativePath":"pages/posts/SSH服务初识.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/SSH服务初识.md","lastUpdated":1671090556000}'),u={name:"pages/posts/SSH服务初识.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){r("pageData",i)}},f=s("h1",{id:"第一章-远程连接服务概念介绍",tabindex:"-1"},[e("第一章 远程连接服务概念介绍 "),s("a",{class:"header-anchor",href:"#第一章-远程连接服务概念介绍","aria-hidden":"true"},"#")],-1),m=s("p",null,"SSH: 系统默认配置 22 默认可以使用root用户进行登录 数据信息进行加密 TELNET：网络设备默认开启 23 默认只能使用普通用户进行登录 数据信息显示明文",-1),g=s("h1",{id:"第二章-远程连接服务连接原理",tabindex:"-1"},[e("第二章 远程连接服务连接原理 "),s("a",{class:"header-anchor",href:"#第二章-远程连接服务连接原理","aria-hidden":"true"},"#")],-1),y=s("p",null,"openssh 远程连接数据包进行加密处理 openssl 网站访问请求信息和响应信息进行加密（HTTPS） 连接示意图：",-1),b=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-af025c4191bb5a68.png",alt:"SSH密钥认证过程"})],-1),k=s("p",null,"原理总结：",-1),S=s("pre",null,[s("code",null,`01. 客户端 - 服务端   请求建立ssh远程连接 
02. 服务端 - 客户端   请求确认公钥信息
03. 客户端 - 服务端   确认接收公钥信息，保存到~/.ssh/authorized_keys文件中  
04. 服务端 - 客户端   询问用户密码信息
05. 客户端 - 服务端   用户密码信息
06. 服务端 - 客户端   确认密码信息正确 远程连接建立
01 之后：不用反复确认公钥信息
06 之后：所有传输的数据信息会进行加密处理
`)],-1),v=s("p",null,"总结：",-1),$=s("pre",null,[s("code",null,`作用01：利用公钥和私钥对数据信息进行加密处理
作用02：对用户身份信息进行认证
`)],-1),w=s("p",null,[s("strong",null,"远程连接通讯建立方式")],-1),A=s("p",null,"基于口令方式（基于密码方式） 文档/脑子 国家服务器 远程 -- 密码（钱） 基于密钥方式",-1),H=s("h1",{id:"第三章-基于密钥方式实现远程连接步骤：",tabindex:"-1"},[e("第三章 基于密钥方式实现远程连接步骤： "),s("a",{class:"header-anchor",href:"#第三章-基于密钥方式实现远程连接步骤：","aria-hidden":"true"},"#")],-1),x=s("h2",{id:"_1-管理端服务器",tabindex:"-1"},[e("1.管理端服务器 "),s("a",{class:"header-anchor",href:"#_1-管理端服务器","aria-hidden":"true"},"#")],-1),P=s("p",null,"第一个历程：创建密钥对信息",-1),N=s("pre",null,[s("code",null,`[root@m01 ~]# ssh-keygen -t dsa
Generating public/private dsa key pair.
Enter file in which to save the key (/root/.ssh/id_dsa): 
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_dsa.
Your public key has been saved in /root/.ssh/id_dsa.pub.
The key fingerprint is:
40:72:ff:19:de:23:70:df:cf:f2:a2:6f:0d:ce:42:dc root@m01
The key's randomart image is:
+--[ DSA 1024]----+
|    . o          |
|     + .         |
|      . o o      |
|       . = = .   |
|        S =.+..  |
|           .o.Eo |
|           . o.oo|
|            . =o.|
|            .=...|
+-----------------+
[root@m01 ~]# ll .ssh/
总用量 8
-rw------- 1 root root 668 7月  19 15:13 id_dsa
-rw-r--r-- 1 root root 598 7月  19 15:13 id_dsa.pub
`)],-1),L=s("p",null,"第二个历程：分发公钥",-1),T=s("pre",null,[s("code",null,`[root@m01 ~]# ssh-copy-id -i ~/.ssh/id_dsa.pub root@172.16.1.31
The authenticity of host '172.16.1.31 (172.16.1.31)' can't be established.
ECDSA key fingerprint is 7d:76:4f:bc:02:b3:3c:55:ff:22:9c:63:1a:88:17:3d.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@172.16.1.31's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'root@172.16.1.31'"
and check to make sure that only the key(s) you wanted were added.
`)],-1),C=s("p",null,"第三个历程：检查确认",-1),z=s("pre",null,[s("code",null,`[root@m01 ~]# ssh 172.16.1.31
Last login: Fri Jul 19 08:12:12 2019 from 10.0.1.1
[root@nfs01 ~]# hostname
nfs01
[root@nfs01 ~]# 登出
Connection to 172.16.1.31 closed.
[root@m01 ~]# ssh 172.16.1.31 hostname
nfs01
[root@m01 ~]# 
`)],-1),I=s("h2",{id:"_2-被管理端服务器",tabindex:"-1"},[e("2.被管理端服务器 "),s("a",{class:"header-anchor",href:"#_2-被管理端服务器","aria-hidden":"true"},"#")],-1),q=s("p",null,"第一个历程：检查确认",-1),B=s("pre",null,[s("code",null,`[root@nfs01 ~]# cd /root/.ssh/
[root@nfs01 ~/.ssh]# ll
总用量 8
-rw------- 1 root root 988 7月  19 15:15 authorized_keys
-rw-r--r-- 1 root root 170 6月  26 20:55 known_hosts
[root@nfs01 ~/.ssh]# cat authorized_keys 
ssh-dss AAAAB3NzaC1kc3MAAACBAPFwzIpjQqTXGmTPgABweyY6sxewiNdPiPwBaSz5hAauYnskJSXKbFl5usAxgXbuLcBzGp1RvTH+tVtoUpokAbGbhVX9bhT/5LxjKA31kfp0hicZHtNUDCMOTtgwJmIHo/25BsMURx4i4Mfu8V7lRg5a3WXDXI2JXBLiWtgl/0yHAAAAFQDLicZIPhcZkfLbg26vSPm9cMK14wAAAIAVHBMsnB6TasY3yQzdqQpnVH5dOtD6bIjy48U6CEge7m9jxXb9HUMExOOqRNj/x7HiCeiiML7ebZmLYPZfjam5NWiJ1A5l9FL6QKFvnLSrUOk3b0seBLyWEhM8yWkK5yYaqV9e7jCTJoR/UZjKbZ1lRtLbczytn1e6c8wFVHguHQAAAIBqHcq7NbGPDbkeQEQmSahNubgZ/nXTMR7r2CHsNP+71qxDfkYdDo2dVoWSmhN5Lv+mHLSBFMuJPIvZg/zVc7So6vRgJWiIVedgnJw/Ima+q2f7VJudA+ZNT5vHmlaS77bJ/9tYBdlUO/Ae56gmuNzYYnTdY1UIf1EzEtJnKtUr4Q== root@m01
`)],-1),U=s("h1",{id:"第四章-免交户分发密钥",tabindex:"-1"},[e("第四章 免交户分发密钥 "),s("a",{class:"header-anchor",href:"#第四章-免交户分发密钥","aria-hidden":"true"},"#")],-1),V=s("p",null,"被管理主机有多台，如何进行批量分发公钥???",-1),E=s("h2",{id:"_1-解决免交互问题：",tabindex:"-1"},[e("1.解决免交互问题： "),s("a",{class:"header-anchor",href:"#_1-解决免交互问题：","aria-hidden":"true"},"#")],-1),J=s("p",null,"第一次连接有yes/no",-1),K=s("pre",null,[s("code",null,`ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no
`)],-1),D=s("p",null,"需要有密码信息确认",-1),M=s("pre",null,[s("code",null,`yum install -y sshpass
sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no 
`)],-1),Y=s("h2",{id:"_2-ssh-copy-id分发公钥原理：",tabindex:"-1"},[e("2.ssh-copy-id分发公钥原理： "),s("a",{class:"header-anchor",href:"#_2-ssh-copy-id分发公钥原理：","aria-hidden":"true"},"#")],-1),Z=s("pre",null,[s("code",null,` 01. 进行ssh远程连接
    02. scp将公钥进行传输
    03. 被管理端将公钥保存到用户家目录中的.ssh目录中
    04. 修改公钥文件名称和权限  authorized_keys  600
`)],-1),F=s("h2",{id:"_3-分发脚本：",tabindex:"-1"},[e("3.分发脚本： "),s("a",{class:"header-anchor",href:"#_3-分发脚本：","aria-hidden":"true"},"#")],-1),O=s("pre",null,[s("code",null,`[root@m01 ~]# cat /server/scripts/fenfa.sh 
#!/bin/bash
for ip in {31,41}
do
  sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no &>/dev/null
  if [ $? -eq 0 ]
  then
     echo "===============pub_key fenfa ok with 172.16.1.$ip========================="
     ssh 172.16.1.\${ip} hostname
     echo ""
  else
     echo "===============pub_key fenfa failed with 172.16.1.$ip========================="
     echo ""
  fi 
done
`)],-1),R=s("h2",{id:"_4-if判断比较信息：",tabindex:"-1"},[e("4.if判断比较信息： "),s("a",{class:"header-anchor",href:"#_4-if判断比较信息：","aria-hidden":"true"},"#")],-1),Q=s("pre",null,[s("code",null,`   =    -eq   equal
    >    -gt   greater than
    <    -lt   less than
    >=   -ge   greater equal
    <=   -le   less equal
    <>   -ne   no equal
`)],-1),X=s("h2",{id:"_5-分发公钥问题说明：",tabindex:"-1"},[e("5.分发公钥问题说明： "),s("a",{class:"header-anchor",href:"#_5-分发公钥问题说明：","aria-hidden":"true"},"#")],-1),j=s("pre",null,[s("code",null,`01. 密码信息不正确
02. 免密码分发公钥  yum install -y sshpass 
03. 分发公钥信息，需要分发你有的公钥   是否有公钥 m01--/root/.ssh/id_dsa.pub
`)],-1),G=s("h2",{id:"_6-排错方法：",tabindex:"-1"},[e("6.排错方法： "),s("a",{class:"header-anchor",href:"#_6-排错方法：","aria-hidden":"true"},"#")],-1),W=s("ol",null,[s("li",null,[s("p",null,"测试脚本 ssh 172.16.1.7 hostname")]),s("li",null,[s("p",null,"脚本中命令手动执行"),s("p",null,"sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no")])],-1),ss=s("p",null,"7.远程服务端口号发生变化了，如何修改脚本命令 centos7：掌握",-1),es=s("pre",null,[s("code",null,`sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.7 -o StrictHostKeyChecking=no -p 52113
`)],-1),ns=s("p",null,"8.ssh-copy id命令解释",-1),ts=s("pre",null,[s("code",null,`   ssh $1 "exec sh -c 'cd; umask 077; test -d .ssh || mkdir .ssh ; cat >> .ssh/authorized_keys && (test -x /sbin/restorecon && /sbin/restorecon .ssh .ssh/authorized_keys >/dev/null 2>&1 || true)'"

01. 远程连接到指定主机
02. 切换到家目录，临时修改umask数值
03. 判断是否存在.ssh目录，不存在创建.ssh 
04. 生成.ssh/authorized_keys,并且把公钥信息保存在此文件中
`)],-1),os=s("p",null,"9.总结：掌握批量分发公钥脚本编写能力",-1),is=s("pre",null,[s("code",null,`01. 解决免交互问题： yes/no  密码问题
02. 远程被管理主机端口变化：解决端口问题
`)],-1),as=s("h1",{id:"第五章-ssh服务端配置文件说明：",tabindex:"-1"},[e("第五章 SSH服务端配置文件说明： "),s("a",{class:"header-anchor",href:"#第五章-ssh服务端配置文件说明：","aria-hidden":"true"},"#")],-1),hs=s("pre",null,[s("code",null,`vim /etc/ssh/sshd_config
#Port 22                 --- 指定服务端口号信息
#ListenAddress 0.0.0.0   --- 指定相应网卡可以接收远程访问请求  web
默认：主机上所有网卡都可以接收远程连接请求
监听地址信息，一定是本地网卡上有的地址信息 ******
#PermitEmptyPasswords no --- 是否允许空密码登录
#PermitRootLogin yes     --- 不允许root用户登录
#UseDNS yes              --- 是否进行DNS反向解析 no  172.16.1.31 --> 172.16.1.61 
GSSAPIAuthentication yes --- 是否开启GSSAPI  no      
`)],-1),ls=s("h1",{id:"第六章-ssh防范远程入侵方案-亡羊补牢-未雨绸缪",tabindex:"-1"},[e("第六章 SSH防范远程入侵方案 亡羊补牢 -- 未雨绸缪 "),s("a",{class:"header-anchor",href:"#第六章-ssh防范远程入侵方案-亡羊补牢-未雨绸缪","aria-hidden":"true"},"#")],-1),ds=s("p",null,[e("参考博客"),s("a",{href:"http://blog.51cto.com/phenixikki/1546669",target:"_blank",rel:"noreferrer"},"https://blog.51cto.com/phenixikki/1546669")],-1),rs=s("pre",null,[s("code",null,` 1. 用密钥登录，不用密码登陆
    2. 防火墙封闭SSH,指定源IP限制(局域网、信任公网)  ？？？
    3. 尽量不给服务器外网IP
    4. 负载均衡主机，只监听内网地址的远程访问
    5. 最小化（软件安装-授权）  web nfs rsync mysql zabbix ... 端口（门）
       yum install -y nmap  --- 扫描网站端口信息
       nmap -p 1-65535 www.baidu.com   80 443
    6. 给系统的重要文件或命令做一个指纹   md5sum -c /etc/passwd  abcd  --- zabbix
    7. chattr +i 锁住文件  
`)],-1),cs=s("h1",{id:"第七章-课程知识回顾说明：",tabindex:"-1"},[e("第七章 课程知识回顾说明： "),s("a",{class:"header-anchor",href:"#第七章-课程知识回顾说明：","aria-hidden":"true"},"#")],-1),_s=s("pre",null,[s("code",null,`1）远程连接的服务程序 （ssh-22（加密） telnet-23（明文））
2）远程连接的原理过程 了解
3）远程连接的方式
   基于密码方式 
   基于密钥方式  重点
4）如何实现密钥远程登录
   如何实现多台主机基于密钥远程登录 -- 批量分发公钥的脚本
5）远程服务配置文件参数
   listen address  监听参数  ******
6）远程入侵防范防范
`)],-1),ps=s("p",null,"脚本分享：",-1),us=s("pre",null,[s("code",null,`#!/bin/bash
if [ -f /root/.ssh/id_dsa ];then
    echo "密钥已存在,将发送现有文件"
else
    ssh-keygen -t dsa -P "" -f /root/.ssh/id_dsa && echo "密钥生成成功"
fi

for ip in {31,41}
do
    sshpass -p123456 ssh-copy-id -p 22 172.16.1.\${ip} -o StrictHostKeyChecking=no >> /dev/null 2>&1
    if [ $?==0 ];then
        echo "172.16.1.\${ip} key sent successful"
        ssh 172.16.1.\${ip} "cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak"
        ssh 172.16.1.\${ip} "sed -ri 's@#Port 22@Port 9999@g' /etc/ssh/sshd_config && echo 'port ok'"
        ssh 172.16.1.\${ip} "sed -ri 's@#ListenAddress 0.0.0.0@ListenAddress 172.16.1.\${ip}@g' /etc/ssh/sshd_config && echo 'listen ok'"
    ssh 172.16.1.\${ip} "sed -ri 's#^PasswordAuthentication yes#PasswordAuthentication no#g' /etc/ssh/sshd_config && echo 'pass ok'"
    ssh 172.16.1.\${ip} "systemctl restart sshd"
    sleep 3
    echo "------------------"
    echo "172.16.1.\${ip} hostname is :$(ssh -p 9999 172.16.1.\${ip} hostname)"
    echo "------------------"
    else
    echo "172.16.1.\${ip} key sent faild"
fi
done
`)],-1),fs=s("p",null,"脚本分享2:",-1),ms=s("pre",null,[s("code",null,`#!/bin/bash

if [ -f /root/.ssh/id_rsa ];then
   echo "----------密钥对已经存在---------------"
else
   echo "----------正在生成密钥对---------------"
   ssh-keygen -f /root/.ssh/id_rsa -N '' > /dev/null 2>&1
fi

for i in {7,31,41}
do
    echo "正在操作：172.16.1.\${i}"
    echo "----------正在分发--------"
    sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.\${i} -o StrictHostKeyChecking=no > /tmp/ssh.log 2>&1
    echo "----------正在备份SSH配置-----"
    ssh 172.16.1.\${i} "\\cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak"
    echo "----------正在优化SSH配置----"
    ssh 172.16.1.\${i} "sed -i 's@#Port 22@Port 9999@g' /etc/ssh/sshd_config"
    ssh 172.16.1.\${i} "sed -i 's@#ListenAddress 0.0.0.0@ListenAddress 172.16.1.\${i}@g' /etc/ssh/sshd_config"
    ssh 172.16.1.\${i} "sed -i 's@^PasswordAuthentication yes@PasswordAuthentication no@g' /etc/ssh/sshd_config"
    ssh 172.16.1.\${i} "systemctl restart sshd"
    sleep 2 
    echo "----------测试优化后的连接"
    ssh 172.16.1.\${i} -p 9999 hostname
done
`)],-1),gs=s("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function ys(t,bs,ks,Ss,a,vs){const h=l;return _(),c(h,{frontmatter:a.frontmatter,data:a.data},{"main-content-md":n(()=>[f,m,g,y,b,k,S,v,$,w,A,H,x,P,N,L,T,C,z,I,q,B,U,V,E,J,K,D,M,Y,Z,F,O,R,Q,X,j,G,W,ss,es,ns,ts,os,is,as,hs,ls,ds,rs,cs,_s,ps,us,fs,ms,p("more"),gs]),"main-header":n(()=>[o(t.$slots,"main-header")]),"main-header-after":n(()=>[o(t.$slots,"main-header-after")]),"main-nav":n(()=>[o(t.$slots,"main-nav")]),"main-content":n(()=>[o(t.$slots,"main-content")]),"main-content-after":n(()=>[o(t.$slots,"main-content-after")]),"main-nav-before":n(()=>[o(t.$slots,"main-nav-before")]),"main-nav-after":n(()=>[o(t.$slots,"main-nav-after")]),comment:n(()=>[o(t.$slots,"comment")]),footer:n(()=>[o(t.$slots,"footer")]),aside:n(()=>[o(t.$slots,"aside")]),"aside-custom":n(()=>[o(t.$slots,"aside-custom")]),default:n(()=>[o(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const Ns=d(u,[["render",ys],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/SSH服务初识.md"]]);export{Ps as __pageData,Ns as default};
