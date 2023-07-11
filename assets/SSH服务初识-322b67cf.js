import{_ as r}from"./ValaxyMain.vue_vue_type_style_index_0_lang-4c3630d7.js";import{_ as c,c as _,w as n,o as u,b as s,d as e,e as o,a as p,r as l,f,p as m}from"./app-51906e02.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6fa326dc.js";import"./YunCard.vue_vue_type_style_index_0_lang-116c695f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-4e1cc7e0.js";const Ls=JSON.parse('{"title":"SSH服务初识","description":"","frontmatter":{"title":"SSH服务初识","categories":"Linux技术","tags":["SSH"],"date":"2018-09-08T16:38:00.000Z"},"headers":[{"level":2,"title":"1.管理端服务器","slug":"_1-管理端服务器","link":"#_1-管理端服务器","children":[]},{"level":2,"title":"2.被管理端服务器","slug":"_2-被管理端服务器","link":"#_2-被管理端服务器","children":[]},{"level":2,"title":"1.解决免交互问题：","slug":"_1-解决免交互问题：","link":"#_1-解决免交互问题：","children":[]},{"level":2,"title":"2.ssh-copy-id分发公钥原理：","slug":"_2-ssh-copy-id分发公钥原理：","link":"#_2-ssh-copy-id分发公钥原理：","children":[]},{"level":2,"title":"3.分发脚本：","slug":"_3-分发脚本：","link":"#_3-分发脚本：","children":[]},{"level":2,"title":"4.if判断比较信息：","slug":"_4-if判断比较信息：","link":"#_4-if判断比较信息：","children":[]},{"level":2,"title":"5.分发公钥问题说明：","slug":"_5-分发公钥问题说明：","link":"#_5-分发公钥问题说明：","children":[]},{"level":2,"title":"6.排错方法：","slug":"_6-排错方法：","link":"#_6-排错方法：","children":[]}],"relativePath":"pages/posts/SSH服务初识.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/SSH服务初识.md","lastUpdated":1675833042000}'),a=JSON.parse('{"title":"SSH服务初识","description":"","frontmatter":{"title":"SSH服务初识","categories":"Linux技术","tags":["SSH"],"date":"2018-09-08T16:38:00.000Z"},"headers":[{"level":2,"title":"1.管理端服务器","slug":"_1-管理端服务器","link":"#_1-管理端服务器","children":[]},{"level":2,"title":"2.被管理端服务器","slug":"_2-被管理端服务器","link":"#_2-被管理端服务器","children":[]},{"level":2,"title":"1.解决免交互问题：","slug":"_1-解决免交互问题：","link":"#_1-解决免交互问题：","children":[]},{"level":2,"title":"2.ssh-copy-id分发公钥原理：","slug":"_2-ssh-copy-id分发公钥原理：","link":"#_2-ssh-copy-id分发公钥原理：","children":[]},{"level":2,"title":"3.分发脚本：","slug":"_3-分发脚本：","link":"#_3-分发脚本：","children":[]},{"level":2,"title":"4.if判断比较信息：","slug":"_4-if判断比较信息：","link":"#_4-if判断比较信息：","children":[]},{"level":2,"title":"5.分发公钥问题说明：","slug":"_5-分发公钥问题说明：","link":"#_5-分发公钥问题说明：","children":[]},{"level":2,"title":"6.排错方法：","slug":"_6-排错方法：","link":"#_6-排错方法：","children":[]}],"relativePath":"pages/posts/SSH服务初识.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/SSH服务初识.md","lastUpdated":1675833042000}'),g={name:"pages/posts/SSH服务初识.md",data(){return{data:a,frontmatter:a.frontmatter}},setup(){m("pageData",a)}},y={id:"第一章-远程连接服务概念介绍",tabindex:"-1"},b=s("p",null,"SSH: 系统默认配置 22 默认可以使用root用户进行登录 数据信息进行加密 TELNET：网络设备默认开启 23 默认只能使用普通用户进行登录 数据信息显示明文",-1),k={id:"第二章-远程连接服务连接原理",tabindex:"-1"},S=s("p",null,"openssh 远程连接数据包进行加密处理 openssl 网站访问请求信息和响应信息进行加密（HTTPS） 连接示意图：",-1),v=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-af025c4191bb5a68.png",alt:"SSH密钥认证过程"})],-1),$=s("p",null,"原理总结：",-1),A=s("pre",null,[s("code",null,`01. 客户端 - 服务端   请求建立ssh远程连接 
02. 服务端 - 客户端   请求确认公钥信息
03. 客户端 - 服务端   确认接收公钥信息，保存到~/.ssh/authorized_keys文件中  
04. 服务端 - 客户端   询问用户密码信息
05. 客户端 - 服务端   用户密码信息
06. 服务端 - 客户端   确认密码信息正确 远程连接建立
01 之后：不用反复确认公钥信息
06 之后：所有传输的数据信息会进行加密处理
`)],-1),w=s("p",null,"总结：",-1),H=s("pre",null,[s("code",null,`作用01：利用公钥和私钥对数据信息进行加密处理
作用02：对用户身份信息进行认证
`)],-1),x=s("p",null,[s("strong",null,"远程连接通讯建立方式")],-1),P=s("p",null,"基于口令方式（基于密码方式） 文档/脑子 国家服务器 远程 -- 密码（钱） 基于密钥方式",-1),N={id:"第三章-基于密钥方式实现远程连接步骤：",tabindex:"-1"},L={id:"_1-管理端服务器",tabindex:"-1"},T=s("p",null,"第一个历程：创建密钥对信息",-1),C=s("pre",null,[s("code",null,`[root@m01 ~]# ssh-keygen -t dsa
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
`)],-1),z=s("p",null,"第二个历程：分发公钥",-1),I=s("pre",null,[s("code",null,`[root@m01 ~]# ssh-copy-id -i ~/.ssh/id_dsa.pub root@172.16.1.31
The authenticity of host '172.16.1.31 (172.16.1.31)' can't be established.
ECDSA key fingerprint is 7d:76:4f:bc:02:b3:3c:55:ff:22:9c:63:1a:88:17:3d.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@172.16.1.31's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'root@172.16.1.31'"
and check to make sure that only the key(s) you wanted were added.
`)],-1),B=s("p",null,"第三个历程：检查确认",-1),V=s("pre",null,[s("code",null,`[root@m01 ~]# ssh 172.16.1.31
Last login: Fri Jul 19 08:12:12 2019 from 10.0.1.1
[root@nfs01 ~]# hostname
nfs01
[root@nfs01 ~]# 登出
Connection to 172.16.1.31 closed.
[root@m01 ~]# ssh 172.16.1.31 hostname
nfs01
[root@m01 ~]# 
`)],-1),q={id:"_2-被管理端服务器",tabindex:"-1"},U=s("p",null,"第一个历程：检查确认",-1),E=s("pre",null,[s("code",null,`[root@nfs01 ~]# cd /root/.ssh/
[root@nfs01 ~/.ssh]# ll
总用量 8
-rw------- 1 root root 988 7月  19 15:15 authorized_keys
-rw-r--r-- 1 root root 170 6月  26 20:55 known_hosts
[root@nfs01 ~/.ssh]# cat authorized_keys 
ssh-dss AAAAB3NzaC1kc3MAAACBAPFwzIpjQqTXGmTPgABweyY6sxewiNdPiPwBaSz5hAauYnskJSXKbFl5usAxgXbuLcBzGp1RvTH+tVtoUpokAbGbhVX9bhT/5LxjKA31kfp0hicZHtNUDCMOTtgwJmIHo/25BsMURx4i4Mfu8V7lRg5a3WXDXI2JXBLiWtgl/0yHAAAAFQDLicZIPhcZkfLbg26vSPm9cMK14wAAAIAVHBMsnB6TasY3yQzdqQpnVH5dOtD6bIjy48U6CEge7m9jxXb9HUMExOOqRNj/x7HiCeiiML7ebZmLYPZfjam5NWiJ1A5l9FL6QKFvnLSrUOk3b0seBLyWEhM8yWkK5yYaqV9e7jCTJoR/UZjKbZ1lRtLbczytn1e6c8wFVHguHQAAAIBqHcq7NbGPDbkeQEQmSahNubgZ/nXTMR7r2CHsNP+71qxDfkYdDo2dVoWSmhN5Lv+mHLSBFMuJPIvZg/zVc7So6vRgJWiIVedgnJw/Ima+q2f7VJudA+ZNT5vHmlaS77bJ/9tYBdlUO/Ae56gmuNzYYnTdY1UIf1EzEtJnKtUr4Q== root@m01
`)],-1),J={id:"第四章-免交户分发密钥",tabindex:"-1"},K=s("p",null,"被管理主机有多台，如何进行批量分发公钥???",-1),D={id:"_1-解决免交互问题：",tabindex:"-1"},M=s("p",null,"第一次连接有yes/no",-1),Y=s("pre",null,[s("code",null,`ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no
`)],-1),Z=s("p",null,"需要有密码信息确认",-1),F=s("pre",null,[s("code",null,`yum install -y sshpass
sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no 
`)],-1),O={id:"_2-ssh-copy-id分发公钥原理：",tabindex:"-1"},Q=s("pre",null,[s("code",null,` 01. 进行ssh远程连接
    02. scp将公钥进行传输
    03. 被管理端将公钥保存到用户家目录中的.ssh目录中
    04. 修改公钥文件名称和权限  authorized_keys  600
`)],-1),R={id:"_3-分发脚本：",tabindex:"-1"},X=s("pre",null,[s("code",null,`[root@m01 ~]# cat /server/scripts/fenfa.sh 
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
`)],-1),j={id:"_4-if判断比较信息：",tabindex:"-1"},G=s("pre",null,[s("code",null,`   =    -eq   equal
    >    -gt   greater than
    <    -lt   less than
    >=   -ge   greater equal
    <=   -le   less equal
    <>   -ne   no equal
`)],-1),W={id:"_5-分发公钥问题说明：",tabindex:"-1"},ss=s("pre",null,[s("code",null,`01. 密码信息不正确
02. 免密码分发公钥  yum install -y sshpass 
03. 分发公钥信息，需要分发你有的公钥   是否有公钥 m01--/root/.ssh/id_dsa.pub
`)],-1),es={id:"_6-排错方法：",tabindex:"-1"},ns=s("ol",null,[s("li",null,[s("p",null,"测试脚本 ssh 172.16.1.7 hostname")]),s("li",null,[s("p",null,"脚本中命令手动执行"),s("p",null,"sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no")])],-1),ts=s("p",null,"7.远程服务端口号发生变化了，如何修改脚本命令 centos7：掌握",-1),os=s("pre",null,[s("code",null,`sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.7 -o StrictHostKeyChecking=no -p 52113
`)],-1),is=s("p",null,"8.ssh-copy id命令解释",-1),ls=s("pre",null,[s("code",null,`   ssh $1 "exec sh -c 'cd; umask 077; test -d .ssh || mkdir .ssh ; cat >> .ssh/authorized_keys && (test -x /sbin/restorecon && /sbin/restorecon .ssh .ssh/authorized_keys >/dev/null 2>&1 || true)'"

01. 远程连接到指定主机
02. 切换到家目录，临时修改umask数值
03. 判断是否存在.ssh目录，不存在创建.ssh 
04. 生成.ssh/authorized_keys,并且把公钥信息保存在此文件中
`)],-1),as=s("p",null,"9.总结：掌握批量分发公钥脚本编写能力",-1),ds=s("pre",null,[s("code",null,`01. 解决免交互问题： yes/no  密码问题
02. 远程被管理主机端口变化：解决端口问题
`)],-1),hs={id:"第五章-ssh服务端配置文件说明：",tabindex:"-1"},rs=s("pre",null,[s("code",null,`vim /etc/ssh/sshd_config
#Port 22                 --- 指定服务端口号信息
#ListenAddress 0.0.0.0   --- 指定相应网卡可以接收远程访问请求  web
默认：主机上所有网卡都可以接收远程连接请求
监听地址信息，一定是本地网卡上有的地址信息 ******
#PermitEmptyPasswords no --- 是否允许空密码登录
#PermitRootLogin yes     --- 不允许root用户登录
#UseDNS yes              --- 是否进行DNS反向解析 no  172.16.1.31 --> 172.16.1.61 
GSSAPIAuthentication yes --- 是否开启GSSAPI  no      
`)],-1),cs={id:"第六章-ssh防范远程入侵方案-亡羊补牢-未雨绸缪",tabindex:"-1"},_s=s("pre",null,[s("code",null,` 1. 用密钥登录，不用密码登陆
    2. 防火墙封闭SSH,指定源IP限制(局域网、信任公网)  ？？？
    3. 尽量不给服务器外网IP
    4. 负载均衡主机，只监听内网地址的远程访问
    5. 最小化（软件安装-授权）  web nfs rsync mysql zabbix ... 端口（门）
       yum install -y nmap  --- 扫描网站端口信息
       nmap -p 1-65535 www.baidu.com   80 443
    6. 给系统的重要文件或命令做一个指纹   md5sum -c /etc/passwd  abcd  --- zabbix
    7. chattr +i 锁住文件  
`)],-1),us={id:"第七章-课程知识回顾说明：",tabindex:"-1"},ps=s("pre",null,[s("code",null,`1）远程连接的服务程序 （ssh-22（加密） telnet-23（明文））
2）远程连接的原理过程 了解
3）远程连接的方式
   基于密码方式 
   基于密钥方式  重点
4）如何实现密钥远程登录
   如何实现多台主机基于密钥远程登录 -- 批量分发公钥的脚本
5）远程服务配置文件参数
   listen address  监听参数  ******
6）远程入侵防范防范
`)],-1),fs=s("p",null,"脚本分享：",-1),ms=s("pre",null,[s("code",null,`#!/bin/bash
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
`)],-1),gs=s("p",null,"脚本分享2:",-1),ys=s("pre",null,[s("code",null,`#!/bin/bash

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
`)],-1),bs=s("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function ks(i,Ss,vs,$s,d,As){const t=f,h=r;return u(),_(h,{frontmatter:d.frontmatter,data:d.data},{"main-content-md":n(()=>[s("h1",y,[e("第一章 远程连接服务概念介绍 "),o(t,{class:"header-anchor",href:"#第一章-远程连接服务概念介绍","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),b,s("h1",k,[e("第二章 远程连接服务连接原理 "),o(t,{class:"header-anchor",href:"#第二章-远程连接服务连接原理","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),S,v,$,A,w,H,x,P,s("h1",N,[e("第三章 基于密钥方式实现远程连接步骤： "),o(t,{class:"header-anchor",href:"#第三章-基于密钥方式实现远程连接步骤：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h2",L,[e("1.管理端服务器 "),o(t,{class:"header-anchor",href:"#_1-管理端服务器","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),T,C,z,I,B,V,s("h2",q,[e("2.被管理端服务器 "),o(t,{class:"header-anchor",href:"#_2-被管理端服务器","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),U,E,s("h1",J,[e("第四章 免交户分发密钥 "),o(t,{class:"header-anchor",href:"#第四章-免交户分发密钥","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),K,s("h2",D,[e("1.解决免交互问题： "),o(t,{class:"header-anchor",href:"#_1-解决免交互问题：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),M,Y,Z,F,s("h2",O,[e("2.ssh-copy-id分发公钥原理： "),o(t,{class:"header-anchor",href:"#_2-ssh-copy-id分发公钥原理：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Q,s("h2",R,[e("3.分发脚本： "),o(t,{class:"header-anchor",href:"#_3-分发脚本：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),X,s("h2",j,[e("4.if判断比较信息： "),o(t,{class:"header-anchor",href:"#_4-if判断比较信息：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),G,s("h2",W,[e("5.分发公钥问题说明： "),o(t,{class:"header-anchor",href:"#_5-分发公钥问题说明：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ss,s("h2",es,[e("6.排错方法： "),o(t,{class:"header-anchor",href:"#_6-排错方法：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ns,ts,os,is,ls,as,ds,s("h1",hs,[e("第五章 SSH服务端配置文件说明： "),o(t,{class:"header-anchor",href:"#第五章-ssh服务端配置文件说明：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),rs,s("h1",cs,[e("第六章 SSH防范远程入侵方案 亡羊补牢 -- 未雨绸缪 "),o(t,{class:"header-anchor",href:"#第六章-ssh防范远程入侵方案-亡羊补牢-未雨绸缪","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("p",null,[e("参考博客"),o(t,{href:"http://blog.51cto.com/phenixikki/1546669",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://blog.51cto.com/phenixikki/1546669")]),_:1})]),_s,s("h1",us,[e("第七章 课程知识回顾说明： "),o(t,{class:"header-anchor",href:"#第七章-课程知识回顾说明：","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ps,fs,ms,gs,ys,p("more"),bs]),"main-header":n(()=>[l(i.$slots,"main-header")]),"main-header-after":n(()=>[l(i.$slots,"main-header-after")]),"main-nav":n(()=>[l(i.$slots,"main-nav")]),"main-content":n(()=>[l(i.$slots,"main-content")]),"main-content-after":n(()=>[l(i.$slots,"main-content-after")]),"main-nav-before":n(()=>[l(i.$slots,"main-nav-before")]),"main-nav-after":n(()=>[l(i.$slots,"main-nav-after")]),comment:n(()=>[l(i.$slots,"comment")]),footer:n(()=>[l(i.$slots,"footer")]),aside:n(()=>[l(i.$slots,"aside")]),"aside-custom":n(()=>[l(i.$slots,"aside-custom")]),default:n(()=>[l(i.$slots,"default")]),_:3},8,["frontmatter","data"])}const Ts=c(g,[["render",ks]]);export{Ls as __pageData,Ts as default};
