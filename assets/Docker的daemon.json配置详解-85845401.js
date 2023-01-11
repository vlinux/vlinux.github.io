import{_ as l}from"./ValaxyMain-5334b760.js";import{_ as d,p as c,c as m,w as e,o as p,r as o,b as t,R as s}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const $=JSON.parse('{"title":"Docker的daemon.json配置详解","description":"","frontmatter":{"title":"Docker的daemon.json配置详解","categories":"DevOps","tags":["Docker"],"date":"2020-06-14T09:03:00.000Z"},"headers":[],"relativePath":"pages/posts/Docker的daemon.json配置详解.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker的daemon.json配置详解.md","lastUpdated":1671090556000}'),a=JSON.parse('{"title":"Docker的daemon.json配置详解","description":"","frontmatter":{"title":"Docker的daemon.json配置详解","categories":"DevOps","tags":["Docker"],"date":"2020-06-14T09:03:00.000Z"},"headers":[],"relativePath":"pages/posts/Docker的daemon.json配置详解.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker的daemon.json配置详解.md","lastUpdated":1671090556000}'),u={name:"pages/posts/Docker的daemon.json配置详解.md",data(){return{data:a,frontmatter:a.frontmatter}},setup(){c("pageData",a)}},f=t("p",null,"docker-daemon.json各配置详解",-1),v=t("pre",null,[t("code",null,`{
“api-cors-header”:"", ——————在引擎API中设置CORS标头
“authorization-plugins”:[], ——————要加载的授权插件
“bridge”:"", ————将容器附加到网桥
“cgroup-parent”:"", ——————为所有容器设置父cgroup
“cluster-store”:"", ——————分布式存储后端的URL
“cluster-store-opts”:{}, ————————设置集群存储选项（默认map []）
“cluster-advertise”:"", ————————要通告的地址或接口名称
“debug”: true, ————————启用调试模式，启用后，可以看到很多的启动信息。默认false
“default-gateway”:"", ——————容器默认网关IPv4地址
“default-gateway-v6”:"", ——————容器默认网关IPv6地址
“default-runtime”:“runc”, ————————容器的默认OCI运行时（默认为“ runc”）
“default-ulimits”:{}, ——————容器的默认ulimit（默认[]）
“dns”: [“192.168.1.1”], ——————设定容器DNS的地址，在容器的 /etc/resolv.conf文件中可查看。
“dns-opts”: [], ————————容器 /etc/resolv.conf 文件，其他设置
“dns-search”: [], ————————设定容器的搜索域，当设定搜索域为 .example.com 时，在搜索一个名为 host 的 主机时，DNS不仅搜索host，还会搜
索host.example.com 。 注意：如果不设置， Docker 会默认用主机上的 /etc/resolv.conf 来配置容器。
“exec-opts”: [], ————————运行时执行选项
“exec-root”:"", ————————执行状态文件的根目录（默认为’/var/run/docker‘）
“fixed-cidr”:"", ————————固定IP的IPv4子网
“fixed-cidr-v6”:"", ————————固定IP的IPv6子网
“data-root”:"/var/lib/docker", ————-Docker运行时使用的根路径，默认/var/lib/docker
“group”: “”, ——————UNIX套接字的组（默认为“docker”）
“hosts”: [], ——————设置容器hosts
“icc”: false, ——————启用容器间通信（默认为true）
“ip”:“0.0.0.0”, ————————绑定容器端口时的默认IP（默认0.0.0.0）
“iptables”: false, ———————启用iptables规则添加（默认为true）
“ipv6”: false, ——————启用IPv6网络
“ip-forward”: false, ————————默认true, 启用 net.ipv4.ip_forward ,进入容器后使用 sysctl -a | grepnet.ipv4.ip_forward 查看
“ip-masq”:false, ——————启用IP伪装（默认为true）
“labels”:[“nodeName=node-121”], ————————docker主机的标签，很实用的功能,例如定义：–label nodeName=host-121
“live-restore”: true, ——————在容器仍在运行时启用docker的实时还原
“log-driver”:"", ——————容器日志的默认驱动程序（默认为“ json-file”）
“log-level”:"", ——————设置日志记录级别（“调试”，“信息”，“警告”，“错误”，“致命”）（默认为“信息”）
“max-concurrent-downloads”:3, ——————设置每个请求的最大并发下载量（默认为3）
“max-concurrent-uploads”:5, ——————设置每次推送的最大同时上传数（默认为5）
“mtu”: 0, ——————设置容器网络MTU
“oom-score-adjust”:-500, ——————设置守护程序的oom_score_adj（默认值为-500）
“pidfile”: “”, ——————Docker守护进程的PID文件
“raw-logs”: false, ——————全时间戳机制
“selinux-enabled”: false, ——————默认 false，启用selinux支持
“storage-driver”:"", ——————要使用的存储驱动程序
“swarm-default-advertise-addr”:"", ——————设置默认地址或群集广告地址的接口
“tls”: true, ————————默认 false, 启动TLS认证开关
“tlscacert”: “”, ——————默认 ~/.docker/ca.pem，通过CA认证过的的certificate文件路径
“tlscert”: “”, ————————默认 ~/.docker/cert.pem ，TLS的certificate文件路径
“tlskey”: “”, ————————默认~/.docker/key.pem，TLS的key文件路径
“tlsverify”: true, ————————默认false，使用TLS并做后台进程与客户端通讯的验证
“userland-proxy”:false, ——————使用userland代理进行环回流量（默认为true）
“userns-remap”:"", ————————用户名称空间的用户/组设置
“bip”:“192.168.88.0/22”, ——————————指定网桥IP
“registry-mirrors”: [“https://192.498.89.232:89”], ————————设置镜像加速
“insecure-registries”: [“120.123.122.123:12312”], ———————设置私有仓库地址可以设为http
“storage-opts”: [
“overlay2.override_kernel_check=true”,
“overlay2.size=15G”
], ————————存储驱动程序选项
“log-opts”: {
“max-file”: “3”,
“max-size”: “10m”,
}, ————————容器默认日志驱动程序选项
“iptables”: false ————————启用iptables规则添加（默认为true）
}
`)],-1),g=t("p",null,[s('[button href="'),t("a",{href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file",target:"_blank",rel:"noreferrer"},"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file"),s('"]官方配置详解[/button]')],-1);function k(n,h,_,b,r,D){const i=l;return p(),m(i,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":e(()=>[f,v,g]),"main-header":e(()=>[o(n.$slots,"main-header")]),"main-header-after":e(()=>[o(n.$slots,"main-header-after")]),"main-nav":e(()=>[o(n.$slots,"main-nav")]),"main-content":e(()=>[o(n.$slots,"main-content")]),"main-content-after":e(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(n.$slots,"main-nav-after")]),comment:e(()=>[o(n.$slots,"comment")]),footer:e(()=>[o(n.$slots,"footer")]),aside:e(()=>[o(n.$slots,"aside")]),"aside-custom":e(()=>[o(n.$slots,"aside-custom")]),default:e(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const w=d(u,[["render",k],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker的daemon.json配置详解.md"]]);export{$ as __pageData,w as default};
