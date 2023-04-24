import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-9abaf40c.js";import{_ as c,c as _,w as n,o as u,b as e,U as s,q as r,a as v,r as l,W as m,p as h}from"./app-72d5294e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-aa07348b.js";import"./YunCard.vue_vue_type_style_index_0_lang-b9c57d9f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-538d271c.js";const ie=JSON.parse('{"title":"Mysql+Keepalived 双主热备高可用图文配置详解","description":"","frontmatter":{"title":"Mysql+Keepalived 双主热备高可用图文配置详解","categories":"数据库","tags":["MySQL"],"date":"2018-11-05T11:07:00.000Z"},"headers":[{"level":2,"title":"环境描述：","slug":"环境描述：","link":"#环境描述：","children":[]},{"level":2,"title":"配置Mysql+Keepalived故障转移的高可用环境","slug":"配置mysql-keepalived故障转移的高可用环境","link":"#配置mysql-keepalived故障转移的高可用环境","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"谢谢查阅，转载请注明出处","slug":"谢谢查阅，转载请注明出处","link":"#谢谢查阅，转载请注明出处","children":[]}],"relativePath":"pages/posts/Mysql+Keepalived-双主热备高可用图文配置详解.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Mysql+Keepalived-双主热备高可用图文配置详解.md","lastUpdated":1671090556000}'),i=JSON.parse('{"title":"Mysql+Keepalived 双主热备高可用图文配置详解","description":"","frontmatter":{"title":"Mysql+Keepalived 双主热备高可用图文配置详解","categories":"数据库","tags":["MySQL"],"date":"2018-11-05T11:07:00.000Z"},"headers":[{"level":2,"title":"环境描述：","slug":"环境描述：","link":"#环境描述：","children":[]},{"level":2,"title":"配置Mysql+Keepalived故障转移的高可用环境","slug":"配置mysql-keepalived故障转移的高可用环境","link":"#配置mysql-keepalived故障转移的高可用环境","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"谢谢查阅，转载请注明出处","slug":"谢谢查阅，转载请注明出处","link":"#谢谢查阅，转载请注明出处","children":[]}],"relativePath":"pages/posts/Mysql+Keepalived-双主热备高可用图文配置详解.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Mysql+Keepalived-双主热备高可用图文配置详解.md","lastUpdated":1671090556000}'),k={name:"pages/posts/Mysql+Keepalived-双主热备高可用图文配置详解.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){h("pageData",i)}},y={id:"环境描述：",tabindex:"-1"},f=e("strong",null,"环境描述：",-1),g=e("pre",null,[e("code",null,`Centos7 版本
Master1：192.168.10.1        安装mysql和keepalived
Master2: 192.168.10.2      安装mysql和keepalived
VIP：192.168.10.188
`)],-1),q=e("p",null,"要实现主主同步，可以先实现主从同步，即master1->master2的主从同步，然后master2->master1的主从同步. 这样，双方就完成了主主同步。",-1),M=e("p",null,[e("strong",null,"注意下面几点：")],-1),S=e("blockquote",null,[e("p",null,"1）要保证同步服务期间之间的网络联通。即能相互ping通，能使用对方授权信息连接到对方数据库（防火墙开放3306端口）。"),e("p",null,"2）关闭selinux。"),e("p",null,"3）同步前，双方数据库中需要同步的数据要保持一致。这样，同步环境实现后，再次更新的数据就会如期同步了。")],-1),b={id:"配置mysql-keepalived故障转移的高可用环境",tabindex:"-1"},K=e("blockquote",null,[e("p",null,"1） 安装keepalived并将其配置成系统服务。master1和master2两台机器上同样进行如下操作：")],-1),C=e("pre",null,[e("code",null,`[root@master1 ~]# yum install -y openssl-devel popt-devel
[root@master1 ~]# cd /usr/local/src/
[root@master1 src]# wget http://www.keepalived.org/software/keepalived-1.3.5.tar.gz
[root@master1 src]# tar -zvxf keepalived-1.3.5.tar.gz
[root@master1 src]# cd keepalived-1.3.5
[root@master1 keepalived-1.3.5]# ./configure --prefix=/usr/local/keepalived
[root@master1 keepalived-1.3.5]# make && make install
[root@master1 keepalived-1.3.5]# cp /usr/local/src/keepalived-1.3.5/keepalived/etc/init.d/keepalived /etc/rc.d/init.d/
[root@master1 keepalived-1.3.5]# cp /usr/local/keepalived/etc/sysconfig/keepalived /etc/sysconfig/
[root@master1 keepalived-1.3.5]# mkdir /etc/keepalived/
[root@master1 keepalived-1.3.5]# cp /usr/local/keepalived/etc/keepalived/keepalived.conf /etc/keepalived/
[root@master1 keepalived-1.3.5]# cp /usr/local/keepalived/sbin/keepalived /usr/sbin/
[root@master1 keepalived-1.3.5]# echo "/etc/init.d/keepalived start" >> /etc/rc.local
`)],-1),w=e("p",null,[e("strong",null,"2） master1机器上的keepalived.conf配置。（下面配置中没有使用lvs的负载均衡功能，所以不需要配置虚拟服务器virtual server）(在这里可以使用yum安装keepalived。配置在有关Keepalived博文中详细介绍，这里略)")],-1),$=e("pre",null,[e("code",null,`[root@master1 ~]# cp /etc/keepalived/keepalived.conf /etc/keepalived/keepalived.conf.bak
[root@master1 ~]# vim /etc/keepalived/keepalived.conf 
`)],-1),L=e("p",null,[e("strong",null,"＃清空默认内容，直接采用下面配置：")],-1),T=e("pre",null,[e("code",null,`! Configuration File for keepalived
       
global_defs {
router_id MASTER-HA
}
       
vrrp_script chk_mysql_port {
    script "/etc/keepalived/chk_mysql.sh"
    interval 2            
    weight -5                 
    fall 2                 
    rise 1               
}
       
vrrp_instance VI_1 {
    state MASTER
    interface ens33    
    mcast_src_ip 192.168.10.1
    virtual_router_id 51    
    priority 101          
    advert_int 1         
    authentication {   
        auth_type PASS 
        auth_pass 1111     
    }
    virtual_ipaddress {    
        192.168.10.188
    }
      
track_script {               
   chk_mysql_port             
}
virtual_server 192.168.10.188 3306 {
    delay_loop 6               
    lb_algo wrr             
    lb_kind DR                 
    #nat_mask 255.255.255.0
    persistence_timeout 50     
    protocol TCP              
    
    ## Real Server设置，3306就是连接端口
    real_server 192.168.10.1 3306 {
        weight 3  ##权重
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 3306
        }
    }
    real_server 192.168.10.2 3306 {
        weight 3
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 3306
        }
    }
}
}
`)],-1),P=e("p",null,[e("strong",null,"master2机器上的keepalived配置。master2机器上的keepalived.conf文件只修改priority为90、nopreempt不设置、real_server设置本地IP。")],-1),E=e("pre",null,[e("code",null,`! Configuration File for keepalived
       
global_defs {
router_id BACKUP-HA
}
       
vrrp_script chk_mysql_port {
    script "/etc/keepalived/chk_mysql.sh"
    interval 2            
    weight -5                 
    fall 2                 
    rise 1               
}
       
vrrp_instance VI_1 {
    state BACKUP
    interface ens33    
    mcast_src_ip 192.168.10.2
    virtual_router_id 51    
    priority 99          
    advert_int 1         
    authentication {   
        auth_type PASS 
        auth_pass 1111     
    }
    virtual_ipaddress {    
        192.168.10.188
    }
      
track_script {               
   chk_mysql_port             
}
virtual_server 192.168.10.188 3306 {
    delay_loop 6               #服务轮询的时间间隔
    lb_algo wrr                #加权轮询调度，LVS调度算法 rr|wrr|lc|wlc|lblc|sh|sh
    lb_kind DR                 #LVS集群模式 NAT|DR|TUN，其中DR模式要求负载均衡器网卡必须有一块与物理网卡在同一个网段
    #nat_mask 255.255.255.0
    persistence_timeout 50     #会话保持时间
    protocol TCP              #健康检查协议
    
    ## Real Server设置，3306就是连接端口
    real_server 192.168.10.1 3306 {
        weight 3  ##权重
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 3306
        }
    }
    real_server 192.168.10.2 3306 {
        weight 3
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 3306
        }
    }
}
}
`)],-1),Q=e("p",null,[e("strong",null,"编写切换脚本。KeepAlived做心跳检测，如果Master的MySQL服务挂了(3306端口挂了),那么它就会选择自杀。Slave的KeepAlived通过心跳检测发现这个情况，就会将VIP的请求接管。")],-1),Y=e("pre",null,[e("code",null,`[root@master1 ~]# vim /etc/keepalived/chk_mysql.sh
#!/bin/bash
counter=$(netstat -na|grep "LISTEN"|grep "3306"|wc -l)
if [ "\${counter}" -eq 0 ]; then
    /etc/init.d/keepalived stop
fi 
[root@master1 ~]# chmod 755 /etc/keepalived/chk_mysql.sh
`)],-1),O=e("p",null,[e("strong",null,"启动keepalived服务")],-1),A=e("pre",null,[e("code",null,`[root@master1 ~]# /etc/init.d/keepalived start
`)],-1),I=e("blockquote",null,[e("p",null,"正在启动 keepalived： [确定]")],-1),H=e("p",null,[e("strong",null,"在启动的时候有可能启动失败 打开 vim /lib/systemd/system/keepalived.service 在第7行")],-1),R=e("pre",null,[e("code",null,`PIDFile=/usr/local/program/keepalived/var/run/keepalived.pid      ##发现这个目录不存在，无法写入keepalived.pid  
`)],-1),V=e("blockquote",null,[e("p",null,[s("修改成 PIDFile=/var/run/keepalived.pid 执行 systemctl daemon-reload"),e("br"),s(" 重新载入 systemd，扫描新的或有变动的单元 在运行就Ok了 /etc/init.d/keepalived start")])],-1),x=e("p",null,[e("strong",null,"ip addr 可以看到 vip在master上")],-1),D=e("p",null,[e("img",{src:"https://www.kococ.cn/usr/uploads/2020/01/2374467709.png",alt:"请输入图片描述"})],-1),U={id:"测试",tabindex:"-1"},N=e("pre",null,[e("code",null,`mysql -h192.168.10.188 -uroot1 -proot1
show databases;
`)],-1),B=e("p",null,[s("在147服务上看 ip addr 也可以看到vip漂移到了192.168.10.2服务器上 "),e("img",{src:"https://www.kococ.cn/usr/uploads/2020/01/530623913.png",alt:"请输入图片描述"})],-1),F=e("p",null,[e("strong",null,"上面那个脚本简单且粗暴，即脚本一旦监测到Master的mysql服务关闭，就立刻把keepalived服务关闭，不能实现vip转移，也就是当Master数据库恢复的是时候不能再切回来！")],-1),z=e("p",null,[e("strong",null,"下面这个脚本可以实现 当监测到Master的mysql服务关闭后，就会将vip切换到Backup上 当Master的mysql服务恢复后，就会再次将VIP资源切回来")],-1),W=e("pre",null,[e("code",null,`#!/bin/bash
MYSQL=/usr/local/mysql/bin/mysql
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=123456
CHECK_TIME=3
  
#mysql  is working MYSQL_OK is 1 , mysql down MYSQL_OK is 0
  
MYSQL_OK=1
  
function check_mysql_helth (){
    $MYSQL -h $MYSQL_HOST -u $MYSQL_USER -p\${MYSQL_PASSWORD} -e "show status;" >/dev/null 2>&1
    if [ $? = 0 ] ;then
    MYSQL_OK=1
    else
    MYSQL_OK=0
    fi
    return $MYSQL_OK
}
while [ $CHECK_TIME -ne 0 ]
do
    let "CHECK_TIME -= 1"
    check_mysql_helth
if [ $MYSQL_OK = 1 ] ; then
    CHECK_TIME=0
    exit 0
fi
if [ $MYSQL_OK -eq 0 ] &&  [ $CHECK_TIME -eq 0 ]
then
    pkill keepalived
    exit 1
fi
sleep 1
done
`)],-1),J=e("hr",null,null,-1),Z={id:"谢谢查阅，转载请注明出处",tabindex:"-1"};function j(t,G,X,ee,o,ne){const a=m,d=p;return u(),_(d,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":n(()=>[e("h2",y,[f,s(),r(a,{class:"header-anchor",href:"#环境描述：","aria-hidden":"true"},{default:n(()=>[s("#")]),_:1})]),g,q,M,S,e("h2",b,[s("配置Mysql+Keepalived故障转移的高可用环境 "),r(a,{class:"header-anchor",href:"#配置mysql-keepalived故障转移的高可用环境","aria-hidden":"true"},{default:n(()=>[s("#")]),_:1})]),K,C,w,$,L,T,P,E,Q,Y,O,A,I,H,R,V,x,D,e("h2",U,[s("测试 "),r(a,{class:"header-anchor",href:"#测试","aria-hidden":"true"},{default:n(()=>[s("#")]),_:1})]),N,B,v("more"),F,z,W,J,e("h2",Z,[s("谢谢查阅，转载请注明出处 "),r(a,{class:"header-anchor",href:"#谢谢查阅，转载请注明出处","aria-hidden":"true"},{default:n(()=>[s("#")]),_:1})])]),"main-header":n(()=>[l(t.$slots,"main-header")]),"main-header-after":n(()=>[l(t.$slots,"main-header-after")]),"main-nav":n(()=>[l(t.$slots,"main-nav")]),"main-content":n(()=>[l(t.$slots,"main-content")]),"main-content-after":n(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":n(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":n(()=>[l(t.$slots,"main-nav-after")]),comment:n(()=>[l(t.$slots,"comment")]),footer:n(()=>[l(t.$slots,"footer")]),aside:n(()=>[l(t.$slots,"aside")]),"aside-custom":n(()=>[l(t.$slots,"aside-custom")]),default:n(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const oe=c(k,[["render",j]]);export{ie as __pageData,oe as default};
