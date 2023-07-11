import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-4c3630d7.js";import{_ as A,c as C,w as n,o as d,b as s,d as e,e as t,r as l,f as D,p as y}from"./app-51906e02.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6fa326dc.js";import"./YunCard.vue_vue_type_style_index_0_lang-116c695f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-4e1cc7e0.js";const M=JSON.parse('{"title":"Docker基本四种网络模型","description":"","frontmatter":{"title":"Docker基本四种网络模型","categories":"DevOps","tags":["Docker"],"date":"2020-06-23T16:40:00.000Z"},"headers":[{"level":3,"title":"一，NAT（最小）","slug":"一，nat（最小）","link":"#一，nat（最小）","children":[]},{"level":3,"title":"二，none","slug":"二，none","link":"#二，none","children":[]},{"level":3,"title":"三，主机（与主机相同IP）","slug":"三，主机（与主机相同ip）","link":"#三，主机（与主机相同ip）","children":[]},{"level":3,"title":"四，联合网络（即两个容器共享一个IP地址）","slug":"四，联合网络（即两个容器共享一个ip地址）","link":"#四，联合网络（即两个容器共享一个ip地址）","children":[]}],"relativePath":"pages/posts/Docker基本四种网络模型.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker基本四种网络模型.md","lastUpdated":1671090556000}'),r=JSON.parse('{"title":"Docker基本四种网络模型","description":"","frontmatter":{"title":"Docker基本四种网络模型","categories":"DevOps","tags":["Docker"],"date":"2020-06-23T16:40:00.000Z"},"headers":[{"level":3,"title":"一，NAT（最小）","slug":"一，nat（最小）","link":"#一，nat（最小）","children":[]},{"level":3,"title":"二，none","slug":"二，none","link":"#二，none","children":[]},{"level":3,"title":"三，主机（与主机相同IP）","slug":"三，主机（与主机相同ip）","link":"#三，主机（与主机相同ip）","children":[]},{"level":3,"title":"四，联合网络（即两个容器共享一个IP地址）","slug":"四，联合网络（即两个容器共享一个ip地址）","link":"#四，联合网络（即两个容器共享一个ip地址）","children":[]}],"relativePath":"pages/posts/Docker基本四种网络模型.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker基本四种网络模型.md","lastUpdated":1671090556000}'),u={name:"pages/posts/Docker基本四种网络模型.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){y("pageData",r)}},m={id:"一，nat（最小）",tabindex:"-1"},h=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAT网络模型，默认情况下，均为NAT模式，如网络的端口映射就为NAT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),f={id:"二，none",tabindex:"-1"},k=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"格式：docker run --net=none")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti --net=none centos:centos7")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),g={id:"三，主机（与主机相同ip）",tabindex:"-1"},v=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"格式：docker run --net=host")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti --net=Host centos:centos7")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker /]# ifconfig")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 172.7.5.1  netmask 255.255.255.0  broadcast 172.7.5.255")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet6 fe80::42:28ff:fe56:8b6  prefixlen 64  scopeid 0x20<link>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 02:42:28:56:08:b6  txqueuelen 0  (Ethernet)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 135990  bytes 9017234 (8.5 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 158771  bytes 317188403 (302.4 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 10.3.153.120  netmask 255.255.255.0  broadcast 10.3.153.255")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet6 fe80::36aa:b367:aa13:b475  prefixlen 64  scopeid 0x20<link>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 00:50:56:9b:00:06  txqueuelen 1000  (Ethernet)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 747539  bytes 528246025 (503.7 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 1227  overruns 0  frame 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 249250  bytes 38867074 (37.0 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 127.0.0.1  netmask 255.0.0.0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet6 ::1  prefixlen 128  scopeid 0x10<host>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        loop  txqueuelen 1  (Local Loopback)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 0  bytes 0 (0.0 B)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 0  bytes 0 (0.0 B)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),b={id:"四，联合网络（即两个容器共享一个ip地址）",tabindex:"-1"},_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第一个容器运行")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-----")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti centos:centos7     #以nat模式启动了一个容器")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2f504d6966dc /]# ifconfig")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255     #IP172.7.5.2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 7417  bytes 13726936 (13.0 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 6118  bytes 473182 (462.0 KiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第二个容器运行，以联合网络的方式")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-----")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"格式：Docker run —net=container:${container_id}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker ps       #查看第一个容器的ID值")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2f504d6966dc        centos:centos7      "/bin/bash"         6 minutes ago       Up 6 minutes                            thirsty_bhabha')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti --net=container:2f504d6966dc centos:centos7")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2f504d6966dc /]# ifconfig")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 15431  bytes 27381590 (26.1 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 13359  bytes 1061065 (1.0 MiB)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 127.0.0.1  netmask 255.0.0.0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        loop  txqueuelen 1  (Local Loopback)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 0  bytes 0 (0.0 B)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 0  bytes 0 (0.0 B)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1);function T(a,N,R,X,c,x){const o=D,i=p;return d(),C(i,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":n(()=>[s("h3",m,[e("一，NAT（最小） "),t(o,{class:"header-anchor",href:"#一，nat（最小）","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),h,s("h3",f,[e("二，none "),t(o,{class:"header-anchor",href:"#二，none","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),k,s("h3",g,[e("三，主机（与主机相同IP） "),t(o,{class:"header-anchor",href:"#三，主机（与主机相同ip）","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),v,s("h3",b,[e("四，联合网络（即两个容器共享一个IP地址） "),t(o,{class:"header-anchor",href:"#四，联合网络（即两个容器共享一个ip地址）","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),_]),"main-header":n(()=>[l(a.$slots,"main-header")]),"main-header-after":n(()=>[l(a.$slots,"main-header-after")]),"main-nav":n(()=>[l(a.$slots,"main-nav")]),"main-content":n(()=>[l(a.$slots,"main-content")]),"main-content-after":n(()=>[l(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[l(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[l(a.$slots,"main-nav-after")]),comment:n(()=>[l(a.$slots,"comment")]),footer:n(()=>[l(a.$slots,"footer")]),aside:n(()=>[l(a.$slots,"aside")]),"aside-custom":n(()=>[l(a.$slots,"aside-custom")]),default:n(()=>[l(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const O=A(u,[["render",T]]);export{M as __pageData,O as default};
