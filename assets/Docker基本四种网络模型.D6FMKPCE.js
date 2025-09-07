import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang.C2bsXNP9.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as f,u as k,a as b}from"./chunks/vue-router.DESBU8cS.js";import{aa as h,ap as a,ag as l,af as n,ai as s,P as g,ab as v,a1 as T}from"./framework.GHZxz7jq.js";import"./index.fe-YlSh0.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.Bfmmp6N5.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.Dv7YwUny.js";const N=f("/posts/Docker基本四种网络模型",async t=>JSON.parse('{"title":"Docker基本四种网络模型","description":"","frontmatter":{"title":"Docker基本四种网络模型","categories":"DevOps","tags":["Docker"],"date":"2020-06-23 16:40:00"},"headers":[],"relativePath":"pages/posts/Docker基本四种网络模型.md","lastUpdated":null}'),{lazy:(t,o)=>t.name===o.name}),x={__name:"Docker基本四种网络模型",setup(t,{expose:o}){const{data:p}=N(),c=b(),u=k(),r=Object.assign(u.meta.frontmatter||{},p.value?.frontmatter||{});return c.currentRoute.value.data=p.value,T("valaxy:frontmatter",r),globalThis.$frontmatter=r,o({frontmatter:{title:"Docker基本四种网络模型",categories:"DevOps",tags:["Docker"],date:"2020-06-23 16:40:00"}}),(e,i)=>{const d=m;return v(),h(d,{frontmatter:g(r)},{"main-content-md":a(()=>[...i[0]||(i[0]=[n("h3",{id:"一-nat-最小",tabindex:"-1"},[s("一，NAT（最小） "),n("a",{class:"header-anchor",href:"#一-nat-最小","aria-label":'Permalink to "一，NAT（最小）"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"NAT网络模型，默认情况下，均为NAT模式，如网络的端口映射就为NAT")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h3",{id:"二-none",tabindex:"-1"},[s("二，none "),n("a",{class:"header-anchor",href:"#二-none","aria-label":'Permalink to "二，none"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"格式：docker run --net=none")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@docker ~]# docker run --rm -ti --net=none centos:centos7")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h3",{id:"三-主机-与主机相同ip",tabindex:"-1"},[s("三，主机（与主机相同IP） "),n("a",{class:"header-anchor",href:"#三-主机-与主机相同ip","aria-label":'Permalink to "三，主机（与主机相同IP）"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"格式：docker run --net=host")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@docker ~]# docker run --rm -ti --net=Host centos:centos7")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@docker /]# ifconfig")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet 172.7.5.1  netmask 255.255.255.0  broadcast 172.7.5.255")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet6 fe80::42:28ff:fe56:8b6  prefixlen 64  scopeid 0x20<link>")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ether 02:42:28:56:08:b6  txqueuelen 0  (Ethernet)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX packets 135990  bytes 9017234 (8.5 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX errors 0  dropped 0  overruns 0  frame 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX packets 158771  bytes 317188403 (302.4 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet 10.3.153.120  netmask 255.255.255.0  broadcast 10.3.153.255")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet6 fe80::36aa:b367:aa13:b475  prefixlen 64  scopeid 0x20<link>")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ether 00:50:56:9b:00:06  txqueuelen 1000  (Ethernet)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX packets 747539  bytes 528246025 (503.7 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX errors 0  dropped 1227  overruns 0  frame 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX packets 249250  bytes 38867074 (37.0 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet 127.0.0.1  netmask 255.0.0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet6 ::1  prefixlen 128  scopeid 0x10<host>")]),s(`
`),n("span",{class:"line"},[n("span",null,"        loop  txqueuelen 1  (Local Loopback)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX packets 0  bytes 0 (0.0 B)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX errors 0  dropped 0  overruns 0  frame 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX packets 0  bytes 0 (0.0 B)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h3",{id:"四-联合网络-即两个容器共享一个ip地址",tabindex:"-1"},[s("四，联合网络（即两个容器共享一个IP地址） "),n("a",{class:"header-anchor",href:"#四-联合网络-即两个容器共享一个ip地址","aria-label":'Permalink to "四，联合网络（即两个容器共享一个IP地址）"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"第一个容器运行")]),s(`
`),n("span",{class:"line"},[n("span",null,"-----")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@docker ~]# docker run --rm -ti centos:centos7     #以nat模式启动了一个容器")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@2f504d6966dc /]# ifconfig")]),s(`
`),n("span",{class:"line"},[n("span",null,"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255     #IP172.7.5.2")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX packets 7417  bytes 13726936 (13.0 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX errors 0  dropped 0  overruns 0  frame 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX packets 6118  bytes 473182 (462.0 KiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"第二个容器运行，以联合网络的方式")]),s(`
`),n("span",{class:"line"},[n("span",null,"-----")]),s(`
`),n("span",{class:"line"},[n("span",null,"格式：Docker run —net=container:${container_id}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@docker ~]# docker ps       #查看第一个容器的ID值")]),s(`
`),n("span",{class:"line"},[n("span",null,"CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES")]),s(`
`),n("span",{class:"line"},[n("span",null,'2f504d6966dc        centos:centos7      "/bin/bash"         6 minutes ago       Up 6 minutes                            thirsty_bhabha')]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@docker ~]# docker run --rm -ti --net=container:2f504d6966dc centos:centos7")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@2f504d6966dc /]# ifconfig")]),s(`
`),n("span",{class:"line"},[n("span",null,"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet 172.7.5.2  netmask 255.255.255.0  broadcast 172.7.5.255")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ether 02:42:ac:07:05:02  txqueuelen 0  (Ethernet)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX packets 15431  bytes 27381590 (26.1 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX errors 0  dropped 0  overruns 0  frame 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX packets 13359  bytes 1061065 (1.0 MiB)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536")]),s(`
`),n("span",{class:"line"},[n("span",null,"        inet 127.0.0.1  netmask 255.0.0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        loop  txqueuelen 1  (Local Loopback)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX packets 0  bytes 0 (0.0 B)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        RX errors 0  dropped 0  overruns 0  frame 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX packets 0  bytes 0 (0.0 B)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0")])])]),n("button",{class:"code-block-unfold-btn"})],-1)])]),"main-header":a(()=>[l(e.$slots,"main-header")]),"main-header-after":a(()=>[l(e.$slots,"main-header-after")]),"main-nav":a(()=>[l(e.$slots,"main-nav")]),"main-content-before":a(()=>[l(e.$slots,"main-content-before")]),"main-content":a(()=>[l(e.$slots,"main-content")]),"main-content-after":a(()=>[l(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[l(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[l(e.$slots,"main-nav-after")]),comment:a(()=>[l(e.$slots,"comment")]),footer:a(()=>[l(e.$slots,"footer")]),aside:a(()=>[l(e.$slots,"aside")]),"aside-custom":a(()=>[l(e.$slots,"aside-custom")]),default:a(()=>[l(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{x as default,N as usePageData};
