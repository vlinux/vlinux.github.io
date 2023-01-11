import{_ as d}from"./ValaxyMain-5334b760.js";import{_ as p,p as c,c as i,w as s,o as u,r as e,b as n,R as t}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const vt=JSON.parse('{"title":"简述文件系统共享网络服务NFS","description":"","frontmatter":{"title":"简述文件系统共享网络服务NFS","categories":"Linux技术","tags":["文件系统","NFS"],"date":"2019-06-27T13:42:00.000Z"},"headers":[{"level":2,"title":"1.1 NFS应用场景","slug":"_1-1-nfs应用场景","link":"#_1-1-nfs应用场景","children":[]},{"level":2,"title":"1.2 nfs存储工作原理实现","slug":"_1-2-nfs存储工作原理实现","link":"#_1-2-nfs存储工作原理实现","children":[]},{"level":2,"title":"1.3 前提条件","slug":"_1-3-前提条件","link":"#_1-3-前提条件","children":[]},{"level":2,"title":"2.1 安装nfs","slug":"_2-1-安装nfs","link":"#_2-1-安装nfs","children":[]},{"level":2,"title":"2.2 配置参数","slug":"_2-2-配置参数","link":"#_2-2-配置参数","children":[]},{"level":2,"title":"2.3 配置NFS服务端","slug":"_2-3-配置nfs服务端","link":"#_2-3-配置nfs服务端","children":[]},{"level":2,"title":"2.4 启动nfs","slug":"_2-4-启动nfs","link":"#_2-4-启动nfs","children":[]},{"level":2,"title":"2.5 检查命令","slug":"_2-5-检查命令","link":"#_2-5-检查命令","children":[]},{"level":2,"title":"2.6 加入开机自启动","slug":"_2-6-加入开机自启动","link":"#_2-6-加入开机自启动","children":[]},{"level":2,"title":"2.7 客户端挂载命令","slug":"_2-7-客户端挂载命令","link":"#_2-7-客户端挂载命令","children":[]},{"level":2,"title":"2.8 NFS 权限验证","slug":"_2-8-nfs-权限验证","link":"#_2-8-nfs-权限验证","children":[]}],"relativePath":"pages/posts/简述文件系统共享网络服务NFS.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/简述文件系统共享网络服务NFS.md","lastUpdated":1671090556000}'),l=JSON.parse('{"title":"简述文件系统共享网络服务NFS","description":"","frontmatter":{"title":"简述文件系统共享网络服务NFS","categories":"Linux技术","tags":["文件系统","NFS"],"date":"2019-06-27T13:42:00.000Z"},"headers":[{"level":2,"title":"1.1 NFS应用场景","slug":"_1-1-nfs应用场景","link":"#_1-1-nfs应用场景","children":[]},{"level":2,"title":"1.2 nfs存储工作原理实现","slug":"_1-2-nfs存储工作原理实现","link":"#_1-2-nfs存储工作原理实现","children":[]},{"level":2,"title":"1.3 前提条件","slug":"_1-3-前提条件","link":"#_1-3-前提条件","children":[]},{"level":2,"title":"2.1 安装nfs","slug":"_2-1-安装nfs","link":"#_2-1-安装nfs","children":[]},{"level":2,"title":"2.2 配置参数","slug":"_2-2-配置参数","link":"#_2-2-配置参数","children":[]},{"level":2,"title":"2.3 配置NFS服务端","slug":"_2-3-配置nfs服务端","link":"#_2-3-配置nfs服务端","children":[]},{"level":2,"title":"2.4 启动nfs","slug":"_2-4-启动nfs","link":"#_2-4-启动nfs","children":[]},{"level":2,"title":"2.5 检查命令","slug":"_2-5-检查命令","link":"#_2-5-检查命令","children":[]},{"level":2,"title":"2.6 加入开机自启动","slug":"_2-6-加入开机自启动","link":"#_2-6-加入开机自启动","children":[]},{"level":2,"title":"2.7 客户端挂载命令","slug":"_2-7-客户端挂载命令","link":"#_2-7-客户端挂载命令","children":[]},{"level":2,"title":"2.8 NFS 权限验证","slug":"_2-8-nfs-权限验证","link":"#_2-8-nfs-权限验证","children":[]}],"relativePath":"pages/posts/简述文件系统共享网络服务NFS.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/简述文件系统共享网络服务NFS.md","lastUpdated":1671090556000}'),_={name:"pages/posts/简述文件系统共享网络服务NFS.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){c("pageData",l)}},h=n("h1",{id:"第1章-存储与nfs存储概述",tabindex:"-1"},[t("第1章 存储与nfs存储概述 "),n("a",{class:"header-anchor",href:"#第1章-存储与nfs存储概述","aria-hidden":"true"},"#")],-1),f=n("blockquote",null,[n("p",null,"1.为什么用共享存储 2.存储有哪些工具 3.共享存储应用场景有哪些 4.部署nfs共享存储 5.客户端尝试连接共享存储")],-1),m=n("p",null,[n("strong",null,"什么是NFS？"),t(" NFS 是 Network File System 的缩写及网络文件系统。 NFS 主要功能是通过局域网络让不同的主机系统之间可以共享文件或目录。 NFS 系统和 Windows 网络共享、网络驱动器类似, 只不过 windows 用于局域网, NFS 用于企业集群架构中, 如果是大型网站, 会用到更复杂的分布式文件系统 FastDFS,glusterfs,HDFS "),n("strong",null,"那么我们为什么要使用数据存储共享服务？")],-1),g=n("blockquote",null,[n("p",null,"1.实现多台服务器之间数据共享 2.实现多台服务器之间数据一致")],-1),w=n("h2",{id:"_1-1-nfs应用场景",tabindex:"-1"},[t("1.1 NFS应用场景 "),n("a",{class:"header-anchor",href:"#_1-1-nfs应用场景","aria-hidden":"true"},"#")],-1),b=n("p",null,"下面我将通过图解给大家展示集群需要共享存储服务的理由。 1.A 用户上传图片经过负载均衡，负载均衡将上传请求调度至 WEB1 服务器上。 2.B 用户访问 A 用户上传的图片，此时 B 用户被负载均衡调度至 WEB2 上，因为 WEB2 上没有这张图片，所以 B用户无法看到 A 用户传的图片",-1),k=n("p",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-126daaf52c3df95f.png",alt:"请输入图片描述"})],-1),v=n("p",null,"如果有共享存储的情况 1.A 用户上传图片无论被负载均衡调度至 WEB1 还是 WEB2, 最终数据都被写入至共享存储 2.B 用户访问 A 用户上传图片时，无论调度至 WEB1 还是 WEB2，最终都会上共享存储访问对应的文件，这样就可以访问到资源了",-1),N=n("p",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-97354c7a9be2dea0.png",alt:"请输入图片描述"})],-1),S=n("h2",{id:"_1-2-nfs存储工作原理实现",tabindex:"-1"},[t("1.2 nfs存储工作原理实现 "),n("a",{class:"header-anchor",href:"#_1-2-nfs存储工作原理实现","aria-hidden":"true"},"#")],-1),F=n("p",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-b92ace7bacf7aeb2.png",alt:"请输入图片描述"})],-1),x=n("p",null,"NFS工作原理",-1),M=n("pre",null,[n("code",null,`1.用户进程访问 NFS 客户端，使用不同的函数对数据进行处理
2.NFS 客户端通过 TCP/IP 的方式传递给 NFS 服务端
3.NFS 服务端接收到请求后，会先调用 portmap 进程进行端口映射。
4.nfsd 进程用于判断 NFS 客户端是否拥有权限连接 NFS 服务端。
5.Rpc.mount 进程判断客户端是否有对应的权限进行验证。
6.idmap 进程实现用户映射和压缩
7.最后 NFS 服务端会将对应请求的函数转换为本地能识别的命令，传递至内核，由内核驱动硬件。
注意: rpc 是一个远程过程调用，那么使用 nfs 必须有 rpc 服务
`)],-1),y=n("h2",{id:"_1-3-前提条件",tabindex:"-1"},[t("1.3 前提条件 "),n("a",{class:"header-anchor",href:"#_1-3-前提条件","aria-hidden":"true"},"#")],-1),P=n("blockquote",null,[n("p",null,"1.nfs依赖于RPC服务来传递消息 2.NFS服务启动的端口号是随机的,启动之后会向本地的RCP注册 3.先启动RPC服务,再启动NFS服务 4.NFS和RPC之间的通讯是他们自己内部完成的,对于用户来说无感知 5.NFS客户端和服务端不会直接沟通,必须通过RPC服务传递消息 6.防火墙要开放RPC服务的端口")],-1),C=n("h1",{id:"第2章-nfs服务端部署",tabindex:"-1"},[t("第2章 nfs服务端部署 "),n("a",{class:"header-anchor",href:"#第2章-nfs服务端部署","aria-hidden":"true"},"#")],-1),T=n("h2",{id:"_2-1-安装nfs",tabindex:"-1"},[t("2.1 安装nfs "),n("a",{class:"header-anchor",href:"#_2-1-安装nfs","aria-hidden":"true"},"#")],-1),A=n("pre",null,[n("code",null,`yum install nfs-utils -y
`)],-1),R=n("h2",{id:"_2-2-配置参数",tabindex:"-1"},[t("2.2 配置参数 "),n("a",{class:"header-anchor",href:"#_2-2-配置参数","aria-hidden":"true"},"#")],-1),E=n("p",null,"nfs 服务程序的配置文件为/etc/exports，需要严格按照共享目录的路径 允许访问的 NFS 客户端（共享权限参数）格式书写，定义要共享的目录与相应的权限，具体书写方式如下图所示",-1),G=n("p",null,[n("img",{src:"http://upload-images.jianshu.io/upload_images/14248468-78e854e15c61eb10.png",alt:"111"})],-1),q=n("p",null,"配置文件参数解释： 执行 man exports 命令，然后切换到文件结尾，可以快速查看如下样例格式：",-1),U=n("pre",null,[n("code",null,`nfs共享参数 参数作用
rw 读写权限
ro 只读权限
root_squash
当 NFS 客户端以 root 管理员访问时，映射为 NFS 服务器的匿名用户(不常用)
no_root_squash
当 NFS 客户端以 root 管理员访问时，映射为 NFS 服务器的 root 管理员(不常用)
all_squash
无论 NFS 客户端使用什么账户访问，均映射为 NFS 服务器的匿名用户(常用)
no_all_squash
无论 NFS 客户端使用什么账户访问，都不进行压缩
sync
同时将数据写入到内存与硬盘中，保证不丢失数据
async
优先将数据保存到内存，然后再写入硬盘；这样效率更高，但可能会丢失数据
anonuid
配置 all_squash 使用,指定 NFS 的用户 UID,必须存在系统
anongid
配置 all_squash 使用,指定 NFS 的用户 UID,必须存在系统
`)],-1),B=n("h2",{id:"_2-3-配置nfs服务端",tabindex:"-1"},[t("2.3 配置NFS服务端 "),n("a",{class:"header-anchor",href:"#_2-3-配置nfs服务端","aria-hidden":"true"},"#")],-1),$=n("p",null,"写入配置文件：注意！IP地址和后面的小括号没有空格",-1),D=n("pre",null,[n("code",null,`[root@nfs01 ~]# cat > /etc/exports <<EOF /data 172.16.1.0/24(rw,sync,all_squash) EOF
`)],-1),O=n("p",null,"创建数据目录和授权:",-1),j=n("pre",null,[n("code",null,`[root@nfs01 ~]# mkdir /data -p
[root@nfs01 ~]# chown -R nfsnobody:nfsnobody /data/
`)],-1),I=n("h2",{id:"_2-4-启动nfs",tabindex:"-1"},[t("2.4 启动nfs "),n("a",{class:"header-anchor",href:"#_2-4-启动nfs","aria-hidden":"true"},"#")],-1),W=n("pre",null,[n("code",null,`[root@nfs01 ~]# systemctl start nfs-server.service
`)],-1),z=n("h2",{id:"_2-5-检查命令",tabindex:"-1"},[t("2.5 检查命令 "),n("a",{class:"header-anchor",href:"#_2-5-检查命令","aria-hidden":"true"},"#")],-1),L=n("pre",null,[n("code",null,`[root@nfs01 ~]# showmount -e 172.16.1.31
Export list for 172.16.1.31:
/data 172.16.1.0/24
`)],-1),V=n("h2",{id:"_2-6-加入开机自启动",tabindex:"-1"},[t("2.6 加入开机自启动 "),n("a",{class:"header-anchor",href:"#_2-6-加入开机自启动","aria-hidden":"true"},"#")],-1),J=n("p",null,"在使用 NFS 服务进行文件共享之前，需要使用 RPC（Remote Procedure Call 远程过程调用服务将 NFS 服务器的IP 地址和端口号信息发送给客户端。因此，在启动 NFS 服务之前，需要先重启并启用 rpcbind 服务程序,同时都加入开机自启动",-1),K=n("pre",null,[n("code",null,`[root@nfs01 ~]# systemctl enable rpcbind nfs-server
[root@nfs01 ~]# systemctl restart rpcbind nfs-server
`)],-1),Z=n("h2",{id:"_2-7-客户端挂载命令",tabindex:"-1"},[t("2.7 客户端挂载命令 "),n("a",{class:"header-anchor",href:"#_2-7-客户端挂载命令","aria-hidden":"true"},"#")],-1),H=n("p",null,"客户端安装nfs服务十分简单，只需要安装nfs软件包即可",-1),Q=n("pre",null,[n("code",null,`[root@backup ~]# yum install nfs-utils rpcbind -y
`)],-1),X=n("p",null,"安装完成后只需要启动rpcbind，不需要启动nfs",-1),Y=n("pre",null,[n("code",null,`[root@backup ~]# systemctl restart rpcbind
`)],-1),nn=n("p",null,"使用showmount命令查看nfs共享信息查询 NFS 服务器的远程共享信息，其输出格式为“共享的目录名称 允许使用客户端地址”。",-1),tn=n("pre",null,[n("code",null,`[root@backup ~]# showmount -e 172.16.1.31
Export list for 172.16.1.31:
/data 172.16.1.0/24 
`)],-1),sn=n("p",null,"挂载命令: 创建挂载目录 在 NFS 客户端创建一个挂载目录, 使用 mount 命令并结合-t 参数, 指定要挂载的文件系统的类型, 并在命令后面写上服务器的 IP 地址, 以及服务器上的共享目录, 最后需要写上要挂载到本地系统(客户端)的目录",-1),on=n("pre",null,[n("code",null,`[root@backup ~]# mkdir /data -p
[root@backup ~]# mount -t nfs 172.16.1.31:/data /data
`)],-1),en=n("p",null,"查看是否挂载成功：",-1),ln=n("pre",null,[n("code",null,`[root@backup ~]# df -h
文件系统           容量  已用  可用 已用% 挂载点
/dev/sda3           18G  1.9G   17G   11% /
devtmpfs           480M     0  480M    0% /dev
tmpfs              489M     0  489M    0% /dev/shm
tmpfs              489M   32M  458M    7% /run
tmpfs              489M     0  489M    0% /sys/fs/cgroup
/dev/sda1         1014M  110M  905M   11% /boot
tmpfs               98M     0   98M    0% /run/user/0
172.16.1.31:/data   18G  1.9G   17G   11% /data
`)],-1),an=n("p",null,"测试写入数据是否正常",-1),rn=n("pre",null,[n("code",null,`[root@backup ~]# echo "123" > /data/123.txt
[root@backup ~]# cat /data/123.txt 
123
`)],-1),dn=n("p",null,"写入开机自动挂载",-1),pn=n("pre",null,[n("code",null,`[root@backup ~]# vim /etc/fstab 
[root@backup ~]# tail -1 /etc/fstab       
172.16.1.31:/data                         /data                   nfs     defaults        0 0
[root@backup ~]# mount -a
[root@backup ~]# df -h
文件系统           容量  已用  可用 已用% 挂载点
/dev/sda3           18G  1.9G   17G   11% /
devtmpfs           480M     0  480M    0% /dev
tmpfs              489M     0  489M    0% /dev/shm
tmpfs              489M   32M  458M    7% /run
tmpfs              489M     0  489M    0% /sys/fs/cgroup
/dev/sda1         1014M  110M  905M   11% /boot
tmpfs               98M     0   98M    0% /run/user/0
172.16.1.31:/data   18G  1.9G   17G   11% /data
`)],-1),cn=n("p",null,"卸载命令：注意!卸载的时候如果提示”umount.nfs: /nfsdir: device is busy”先切换到其他目录再卸载",-1),un=n("pre",null,[n("code",null,`[root@backup ~]# umount /data/
`)],-1),_n=n("p",null,"强制卸载命令：",-1),hn=n("pre",null,[n("code",null,`[root@backup ~]# umount -rl /data/
`)],-1),fn=n("h2",{id:"_2-8-nfs-权限验证",tabindex:"-1"},[t("2.8 NFS 权限验证 "),n("a",{class:"header-anchor",href:"#_2-8-nfs-权限验证","aria-hidden":"true"},"#")],-1),mn=n("p",null,"2.8.1 验证ro权限 服务端配置：",-1),gn=n("pre",null,[n("code",null,`[root@nfs01 ~]# cat /etc/exports
/data 172.16.1.0/24(ro,sync,all_squash)
[root@nfs01 ~]# systemctl restart nfs-server.service
[root@nfs01 ~]# showmount -e 172.16.1.31
Export list for 172.16.1.31:
/data 172.16.1.0/24
`)],-1),wn=n("p",null,"客户端挂载：",-1),bn=n("pre",null,[n("code",null,`[root@backup ~]# mount -t nfs 172.16.1.31:/data /data
[root@backup ~]# df -h
文件系统           容量  已用  可用 已用% 挂载点
/dev/sda3           18G  1.9G   17G   11% /
devtmpfs           480M     0  480M    0% /dev
tmpfs              489M     0  489M    0% /dev/shm
tmpfs              489M   38M  452M    8% /run
tmpfs              489M     0  489M    0% /sys/fs/cgroup
/dev/sda1         1014M  110M  905M   11% /boot
tmpfs               98M     0   98M    0% /run/user/0
172.16.1.31:/data   18G  1.9G   17G   11% /data
`)],-1),kn=n("p",null,"测试读取：",-1),vn=n("pre",null,[n("code",null,`[root@backup ~]# cat /data/123.txt 
123
`)],-1),Nn=n("p",null,"写入测试：",-1),Sn=n("pre",null,[n("code",null,`[root@backup ~]# echo "backup" > /data/123.txt 
-bash: /data/123.txt: 权限不够
`)],-1),Fn=n("p",null,"2.8.2 验证all_squash、 anonuid、 anongid 权限 服务端配置：",-1),xn=n("pre",null,[n("code",null,`[root@nfs01 ~]# cat /etc/exports 
/data 172.16.1.0/24(rw,sync,all_squash,anonuid=666,anongid=666)
`)],-1),Mn=n("p",null,"服务端创建用户及授权：",-1),yn=n("pre",null,[n("code",null,`[root@nfs01 ~]# useradd -s /sbin/nologin -M -u 666 -g 666 www
[root@nfs01 ~]# id www
uid=666(www) gid=666(www) 组=666(www)
`)],-1),Pn=n("p",null,"重启NFS服务：",-1),Cn=n("pre",null,[n("code",null,`[root@nfs01 ~]# systemctl restart nfs-server.service
`)],-1),Tn=n("p",null,"更改目录授权：",-1),An=n("pre",null,[n("code",null,`[root@nfs01 ~]# chown -R www:www /data/
[root@nfs01 ~]# ls -ld /data/
drwxr-xr-x 2 www www 35 7月  17 19:50 /data/
`)],-1),Rn=n("p",null,"客户端操作:",-1),En=n("pre",null,[n("code",null,`[root@backup ~]# mount -t nfs 172.16.1.31:/data /data
[root@backup ~]# ls -ld /data/
drwxr-xr-x 2 666 666 35 7月  17 19:50 /data/
[root@backup ~]# ll /data/
总用量 4
-rw-r--r-- 1 666 666 0 7月  17 19:50 123
-rw-r--r-- 1 666 666 9 7月  17 19:46 oldzhang.txt
[root@backup ~]# echo "oldzhangy" > /data/oldzhang.txt 
[root@backup ~]# cat /data/oldzhang.txt                    
oldzhangy
`)],-1),Gn=n("p",null,"我们会发现依然可以写入，但是为了避免这种情况发生，建议客户端也创建相同uid gid的用户",-1),qn=n("pre",null,[n("code",null,`[root@backup ~]# groupadd -g 666 www
[root@backup ~]# useradd -s /sbin/nologin -M -u 666 -g 666 www
[root@backup ~]# id www
uid=666(www) gid=666(www) 组=666(www)
[root@backup ~]# ls -ld /data/
drwxr-xr-x 2 www www 35 7月  17 19:50 /data/
[root@backup ~]# ll /data/    
总用量 4
-rw-r--r-- 1 www www  0 7月  17 19:50 123
-rw-r--r-- 1 www www 10 7月  17 21:31 oldzhang.txt
`)],-1),Un=n("p",null,"查看nfs的端口",-1),Bn=n("pre",null,[n("code",null,`[root@nfs01 ~]# rpcinfo -p
   program vers proto   port  service
    100000    4   tcp    111  portmapper
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    4   udp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
    100024    1   udp  43177  status
    100024    1   tcp  36750  status
    100003    3   tcp   2049  nfs
    100003    4   tcp   2049  nfs
    100227    3   tcp   2049  nfs_acl
    100003    3   udp   2049  nfs
    100003    4   udp   2049  nfs
    100227    3   udp   2049  nfs_acl
    100021    1   udp  41388  nlockmgr
    100021    3   udp  41388  nlockmgr
    100021    4   udp  41388  nlockmgr
    100021    1   tcp  43678  nlockmgr
    100021    3   tcp  43678  nlockmgr
    100021    4   tcp  43678  nlockmgr\`\`\`
`)],-1),$n=n("p",null,"firewall防火墙配置",-1),Dn=n("pre",null,[n("code",null,`firewall-cmd --add-service=nfs --permanent
firewall-cmd --add-service=mountd --permanent
firewall-cmd --add-service=rpc-bind --permanent
firewall-cmd --reload
`)],-1),On=n("p",null,[t("iptables防火墙配置 参考博客 "),n("a",{href:"https://www.cnblogs.com/xiangsikai/p/10297233.html",target:"_blank",rel:"noreferrer"},"https://www.cnblogs.com/xiangsikai/p/10297233.html"),t(" 启动NFS会开启如下端口：")],-1),jn=n("pre",null,[n("code",null,`1）portmapper 端口：111 udp/tcp；
2）nfs/nfs_acl 端口：2049 udp/tcp；
3）mountd 端口："32768--65535" udp/tcp
4）nlockmgr 端口："32768--65535" udp/tcp
`)],-1),In=n("p",null,"系统 RPC服务在 nfs服务启动时默认会给 mountd 和 nlockmgr 动态选取一个随机端口来进行通讯。 1.查看NFS启动后的端口",-1),Wn=n("pre",null,[n("code",null,`[root@nfs01 /opt/sersync]# rpcinfo -p
   program vers proto   port  service
    100000    4   tcp    111  portmapper
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    4   udp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
    100024    1   udp  43177  status
    100024    1   tcp  36750  status
    100003    3   tcp   2049  nfs
    100003    4   tcp   2049  nfs
    100227    3   tcp   2049  nfs_acl
    100003    3   udp   2049  nfs
    100003    4   udp   2049  nfs
    100227    3   udp   2049  nfs_acl
    100021    1   udp  41388  nlockmgr
    100021    3   udp  41388  nlockmgr
    100021    4   udp  41388  nlockmgr
    100021    1   tcp  43678  nlockmgr
    100021    3   tcp  43678  nlockmgr
    100021    4   tcp  43678  nlockmgr
`)],-1),zn=n("p",null,"2.将随机的端口号设置固定",-1),Ln=n("pre",null,[n("code",null,`[root@nfs01 ~]# vim /etc/sysconfig/nfs
[root@nfs01 ~]# tail -5 /etc/sysconfig/nfs
RQUOTAD_PORT=4001
LOCKD_TCPPORT=4002
LOCKD_UDPPORT=4002
MOUNTD_PORT=4003
STATD_PORT=4004
`)],-1),Vn=n("p",null,"3.重启nfs和rpc服务",-1),Jn=n("pre",null,[n("code",null,`[root@nfs01 ~]# systemctl restart rpcbind.service nfs-server.service
`)],-1),Kn=n("p",null,"4.再次查看端口信息,发现端口号已经固定了",-1),Zn=n("pre",null,[n("code",null,`[root@nfs01 ~]# rpcinfo -p
   program vers proto   port  service
    100000    4   tcp    111  portmapper
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    4   udp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
    100024    1   udp  43177  status
    100024    1   tcp  36750  status
    100005    1   udp   4003  mountd
    100005    1   tcp   4003  mountd
    100005    2   udp   4003  mountd
    100005    2   tcp   4003  mountd
    100005    3   udp   4003  mountd
    100005    3   tcp   4003  mountd
    100003    3   tcp   2049  nfs
    100003    4   tcp   2049  nfs
    100227    3   tcp   2049  nfs_acl
    100003    3   udp   2049  nfs
    100003    4   udp   2049  nfs
    100227    3   udp   2049  nfs_acl
    100021    1   udp   4002  nlockmgr
    100021    3   udp   4002  nlockmgr
    100021    4   udp   4002  nlockmgr
    100021    1   tcp   4002  nlockmgr
    100021    3   tcp   4002  nlockmgr
    100021    4   tcp   4002  nlockmgr
`)],-1),Hn=n("p",null,"5.设置iptables",-1),Qn=n("pre",null,[n("code",null,`-A INPUT -p tcp -m tcp --dport 111 -j ACCEPT
-A INPUT -p udp -m udp --dport 111 -j ACCEPT
-A INPUT -p tcp -m tcp --dport 2049 -j ACCEPT
-A INPUT -p udp -m udp --dport 2049 -j ACCEPT
-A INPUT -p tcp -m tcp --dport 4001:4004 -j ACCEPT
-A INPUT -p udp -m udp --dport 4001:4004 -j ACCEPT
`)],-1),Xn=n("p",null,"6.保存配置",-1),Yn=n("pre",null,[n("code",null,`iptables-save 
iptables -nL
`)],-1),nt=n("p",null,"NFS故障案例 如果设置了开机自启动，但是系统启动的时候NFS并没有提供服务，就会导致开机自检的时候卡在挂在那一步 开机启动时添加rd.break",-1),tt=n("pre",null,[n("code",null,`ctrl+x
mount -o remount,rw /sysroot/
chroot /sysroot/
`)],-1),st=n("h1",{id:"第3章-nfs小结",tabindex:"-1"},[t("第3章 NFS小结 "),n("a",{class:"header-anchor",href:"#第3章-nfs小结","aria-hidden":"true"},"#")],-1),ot=n("p",null,"NFS 存储优点",-1),et=n("blockquote",null,[n("p",null,"1.NFS 文件系统简单易用、方便部署、数据可靠、服务稳定、满足中小企业需求。 2.NFS 文件系统内存放的数据都在文件系统之上，所有数据都是能看得见")],-1),lt=n("p",null,"NFS 存储局限",-1),at=n("blockquote",null,[n("p",null,"1.存在单点故障, 如果构建高可用维护麻烦 web->nfs()->backup 2.NFS 数据明文, 并不对数据做任何校验。 3.客户端挂载 NFS 服务没有密码验证, 安全性一般(内网使用)")],-1),rt=n("p",null,"NFS 应用建议",-1),dt=n("blockquote",null,[n("p",null,"1.生产场景应将静态数据尽可能往前端推, 减少后端存储压力 2.必须将存储里的静态资源通过 CDN 缓存 jpg\\png\\mp4\\avi\\css\\js 3.如果没有缓存或架构本身历史遗留问题太大, 在多存储也无用")],-1),pt=n("hr",null,null,-1),ct=n("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function it(o,ut,_t,ht,a,ft){const r=d;return u(),i(r,{frontmatter:a.frontmatter,data:a.data},{"main-content-md":s(()=>[h,f,m,g,w,b,k,v,N,S,F,x,M,y,P,C,T,A,R,E,G,q,U,B,$,D,O,j,I,W,z,L,V,J,K,Z,H,Q,X,Y,nn,tn,sn,on,en,ln,an,rn,dn,pn,cn,un,_n,hn,fn,mn,gn,wn,bn,kn,vn,Nn,Sn,Fn,xn,Mn,yn,Pn,Cn,Tn,An,Rn,En,Gn,qn,Un,Bn,$n,Dn,On,jn,In,Wn,zn,Ln,Vn,Jn,Kn,Zn,Hn,Qn,Xn,Yn,nt,tt,st,ot,et,lt,at,rt,dt,pt,ct]),"main-header":s(()=>[e(o.$slots,"main-header")]),"main-header-after":s(()=>[e(o.$slots,"main-header-after")]),"main-nav":s(()=>[e(o.$slots,"main-nav")]),"main-content":s(()=>[e(o.$slots,"main-content")]),"main-content-after":s(()=>[e(o.$slots,"main-content-after")]),"main-nav-before":s(()=>[e(o.$slots,"main-nav-before")]),"main-nav-after":s(()=>[e(o.$slots,"main-nav-after")]),comment:s(()=>[e(o.$slots,"comment")]),footer:s(()=>[e(o.$slots,"footer")]),aside:s(()=>[e(o.$slots,"aside")]),"aside-custom":s(()=>[e(o.$slots,"aside-custom")]),default:s(()=>[e(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Nt=p(_,[["render",it],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/简述文件系统共享网络服务NFS.md"]]);export{vt as __pageData,Nt as default};
