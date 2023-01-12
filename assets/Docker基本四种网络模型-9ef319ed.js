import{_ as c}from"./ValaxyMain-56eaee8c.js";import{_ as p,p as i,c as A,w as e,o as C,r as a,b as s,R as n}from"./app-275f6332.js";import"./YunFooter-f6a2c496.js";import"./YunCard-317d6aea.js";import"./YunPageHeader-4fc472d3.js";const I=JSON.parse('{"title":"Docker基本四种网络模型","description":"","frontmatter":{"title":"Docker基本四种网络模型","categories":"DevOps","tags":["Docker"],"date":"2020-06-23T16:40:00.000Z"},"headers":[{"level":3,"title":"一，NAT（最小）","slug":"一，nat（最小）","link":"#一，nat（最小）","children":[]},{"level":3,"title":"二，none","slug":"二，none","link":"#二，none","children":[]},{"level":3,"title":"三，主机（与主机相同IP）","slug":"三，主机（与主机相同ip）","link":"#三，主机（与主机相同ip）","children":[]},{"level":3,"title":"四，联合网络（即两个容器共享一个IP地址）","slug":"四，联合网络（即两个容器共享一个ip地址）","link":"#四，联合网络（即两个容器共享一个ip地址）","children":[]}],"relativePath":"pages/posts/Docker基本四种网络模型.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker基本四种网络模型.md","lastUpdated":1671090556000}'),o=JSON.parse('{"title":"Docker基本四种网络模型","description":"","frontmatter":{"title":"Docker基本四种网络模型","categories":"DevOps","tags":["Docker"],"date":"2020-06-23T16:40:00.000Z"},"headers":[{"level":3,"title":"一，NAT（最小）","slug":"一，nat（最小）","link":"#一，nat（最小）","children":[]},{"level":3,"title":"二，none","slug":"二，none","link":"#二，none","children":[]},{"level":3,"title":"三，主机（与主机相同IP）","slug":"三，主机（与主机相同ip）","link":"#三，主机（与主机相同ip）","children":[]},{"level":3,"title":"四，联合网络（即两个容器共享一个IP地址）","slug":"四，联合网络（即两个容器共享一个ip地址）","link":"#四，联合网络（即两个容器共享一个ip地址）","children":[]}],"relativePath":"pages/posts/Docker基本四种网络模型.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker基本四种网络模型.md","lastUpdated":1671090556000}'),d={name:"pages/posts/Docker基本四种网络模型.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){i("pageData",o)}},D=s("h3",{id:"一，nat（最小）",tabindex:"-1"},[n("一，NAT（最小） "),s("a",{class:"header-anchor",href:"#一，nat（最小）","aria-hidden":"true"},"#")],-1),y=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAT网络模型，默认情况下，均为NAT模式，如网络的端口映射就为NAT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),u=s("h3",{id:"二，none",tabindex:"-1"},[n("二，none "),s("a",{class:"header-anchor",href:"#二，none","aria-hidden":"true"},"#")],-1),m=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"格式：docker run --net=none")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti --net=none centos:centos7")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),h=s("h3",{id:"三，主机（与主机相同ip）",tabindex:"-1"},[n("三，主机（与主机相同IP） "),s("a",{class:"header-anchor",href:"#三，主机（与主机相同ip）","aria-hidden":"true"},"#")],-1),f=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"格式：docker run --net=host")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti --net=Host centos:centos7")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker /]# ifconfig")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 172.7.5.1  netmask 255.255.255.0  broadcast 172.7.5.255")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet6 fe80::42:28ff:fe56:8b6  prefixlen 64  scopeid 0x20<link>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 02:42:28:56:08:b6  txqueuelen 0  (Ethernet)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 135990  bytes 9017234 (8.5 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 158771  bytes 317188403 (302.4 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 10.3.153.120  netmask 255.255.255.0  broadcast 10.3.153.255")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet6 fe80::36aa:b367:aa13:b475  prefixlen 64  scopeid 0x20<link>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 00:50:56:9b:00:06  txqueuelen 1000  (Ethernet)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 747539  bytes 528246025 (503.7 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 1227  overruns 0  frame 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 249250  bytes 38867074 (37.0 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 127.0.0.1  netmask 255.0.0.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet6 ::1  prefixlen 128  scopeid 0x10<host>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        loop  txqueuelen 1  (Local Loopback)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 0  bytes 0 (0.0 B)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 0  bytes 0 (0.0 B)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k=s("h3",{id:"四，联合网络（即两个容器共享一个ip地址）",tabindex:"-1"},[n("四，联合网络（即两个容器共享一个IP地址） "),s("a",{class:"header-anchor",href:"#四，联合网络（即两个容器共享一个ip地址）","aria-hidden":"true"},"#")],-1),v=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第一个容器运行")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-----")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti centos:centos7     #以nat模式启动了一个容器")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2f504d6966dc /]# ifconfig")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255     #IP172.7.5.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 7417  bytes 13726936 (13.0 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 6118  bytes 473182 (462.0 KiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"第二个容器运行，以联合网络的方式")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-----")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"格式：Docker run —net=container:${container_id}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker ps       #查看第一个容器的ID值")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2f504d6966dc        centos:centos7      "/bin/bash"         6 minutes ago       Up 6 minutes                            thirsty_bhabha')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker run --rm -ti --net=container:2f504d6966dc centos:centos7")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2f504d6966dc /]# ifconfig")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 15431  bytes 27381590 (26.1 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 13359  bytes 1061065 (1.0 MiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        inet 127.0.0.1  netmask 255.0.0.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        loop  txqueuelen 1  (Local Loopback)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX packets 0  bytes 0 (0.0 B)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        RX errors 0  dropped 0  overruns 0  frame 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX packets 0  bytes 0 (0.0 B)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1);function g(l,b,T,_,t,N){const r=c;return C(),A(r,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":e(()=>[D,y,u,m,h,f,k,v]),"main-header":e(()=>[a(l.$slots,"main-header")]),"main-header-after":e(()=>[a(l.$slots,"main-header-after")]),"main-nav":e(()=>[a(l.$slots,"main-nav")]),"main-content":e(()=>[a(l.$slots,"main-content")]),"main-content-after":e(()=>[a(l.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(l.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(l.$slots,"main-nav-after")]),comment:e(()=>[a(l.$slots,"comment")]),footer:e(()=>[a(l.$slots,"footer")]),aside:e(()=>[a(l.$slots,"aside")]),"aside-custom":e(()=>[a(l.$slots,"aside-custom")]),default:e(()=>[a(l.$slots,"default")]),_:3},8,["frontmatter","data"])}const P=p(d,[["render",g],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker基本四种网络模型.md"]]);export{I as __pageData,P as default};
