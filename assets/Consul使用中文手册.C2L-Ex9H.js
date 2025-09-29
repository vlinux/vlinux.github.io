import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Ds7uYSjE.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as g,u as b,a as v}from"./chunks/vue-router.DZN_KE5F.js";import{aa as m,ap as l,ag as e,af as n,ai as s,P as k,ab as f,a1 as y}from"./framework.GHZxz7jq.js";import"./index.D-1obavn.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.DXi5Caec.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.BDmJT3LT.js";const C=g("/posts/Consul使用中文手册",async t=>JSON.parse('{"title":"Consul使用中文手册","description":"","frontmatter":{"title":"Consul使用中文手册","categories":"自动注册","tags":["Consul"],"date":"2021-01-28 14:49:00"},"headers":[],"relativePath":"pages/posts/Consul使用中文手册.md","lastUpdated":null}'),{lazy:(t,i)=>t.name===i.name}),V={__name:"Consul使用中文手册",setup(t,{expose:i}){const{data:p}=C(),u=v(),r=b(),c=Object.assign(r.meta.frontmatter||{},p.value?.frontmatter||{});return u.currentRoute.value.data=p.value,y("valaxy:frontmatter",c),globalThis.$frontmatter=c,i({frontmatter:{title:"Consul使用中文手册",categories:"自动注册",tags:["Consul"],date:"2021-01-28 14:49:00"}}),(a,o)=>{const d=h;return f(),m(d,{frontmatter:k(c)},{"main-content-md":l(()=>[...o[0]||(o[0]=[n("h1",{id:"使用consul",tabindex:"-1"},[s("使用consul "),n("a",{class:"header-anchor",href:"#使用consul","aria-label":'Permalink to "使用consul"'},"​")],-1),n("h2",{id:"介绍",tabindex:"-1"},[s("介绍 "),n("a",{class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},"​")],-1),n("p",null,"Consul包含多个组件,但是作为一个整体,为你的基础设施提供服务发现和服务配置的工具.他提供以下关键特性:",-1),n("p",null,[n("strong",null,"服务发现"),s(" Consul的客户端可用提供一个服务,比如 api 或者mysql ,另外一些客户端可用使用Consul去发现一个指定服务的提供者.通过DNS或者HTTP应用程序可用很容易的找到他所依赖的服务. "),n("strong",null,"健康检查"),s(" Consul客户端可用提供任意数量的健康检查,指定一个服务(比如:webserver是否返回了200 OK 状态码)或者使用本地节点(比如:内存使用是否大于90%). 这个信息可由operator用来监视集群的健康.被服务发现组件用来避免将流量发送到不健康的主机. "),n("strong",null,"Key/Value存储"),s(" 应用程序可用根据自己的需要使用Consul的层级的Key/Value存储.比如动态配置,功能标记,协调,领袖选举等等,简单的HTTP API让他更易于使用. "),n("strong",null,"多数据中心"),s(" Consul支持开箱即用的多数据中心.这意味着用户不需要担心需要建立额外的抽象层让业务扩展到多个区域. Consul面向DevOps和应用开发者友好.是他适合现代的弹性的基础设施. "),n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/cluster.png",alt:"consul-cluster"})],-1),n("h2",{id:"基础架构",tabindex:"-1"},[s("基础架构 "),n("a",{class:"header-anchor",href:"#基础架构","aria-label":'Permalink to "基础架构"'},"​")],-1),n("p",null,"Consul是一个分布式高可用的系统. 这节将包含一些基础,我们忽略掉一些细节这样你可以快速了解Consul是如何工作的.如果要了解更多细节,请参考深入的架构描述.",-1),n("p",null,"每个提供服务给Consul的阶段都运行了一个Consul agent . 发现服务或者设置和获取 key/value存储的数据不是必须运行agent.这个agent是负责对节点自身和节点上的服务进行健康检查的.",-1),n("p",null,"Agent与一个和多个Consul Server 进行交互.Consul Server 用于存放和复制数据.server自行选举一个领袖.虽然Consul可以运行在一台server , 但是建议使用3到5台来避免失败情况下数据的丢失.每个数据中心建议配置一个server集群.",-1),n("p",null,"你基础设施中需要发现其他服务的组件可以查询任何一个Consul 的server或者 agent.Agent会自动转发请求到server .",-1),n("p",null,"每个数据中运行了一个Consul server集群.当一个跨数据中心的服务发现和配置请求创建时.本地Consul Server转发请求到远程的数据中心并返回结果.",-1),n("p",null,[s("更多介绍查看官网"),n("a",{href:"https://www.consul.io/",target:"_blank",rel:"noreferrer"},"点击前往")],-1),n("h2",{id:"安装consul",tabindex:"-1"},[s("安装Consul "),n("a",{class:"header-anchor",href:"#安装consul","aria-label":'Permalink to "安装Consul"'},"​")],-1),n("p",null,[s("安装Consul,找到适合你系统的包下载他.Consul打包为一个’Zip’文件."),n("a",{href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noreferrer"},"前往下载")],-1),n("p",null,[s("下载后解开压缩包.拷贝Consul到你的PATH路径中,在Unix系统中"),n("code",null,"~/bin"),s("和"),n("code",null,"/usr/local/bin"),s("是通常的安装目录.根据你是想为单个用户安装还是给整个系统安装来选择.在Windows系统中有可以安装到"),n("code",null,"%PATH%"),s("的路径中.")],-1),n("h2",{id:"验证安装",tabindex:"-1"},[s("验证安装 "),n("a",{class:"header-anchor",href:"#验证安装","aria-label":'Permalink to "验证安装"'},"​")],-1),n("p",null,[s("完成安装后,通过打开一个新终端窗口检查"),n("code",null,"consul"),s("安装是否成功.通过执行 "),n("code",null,"consul"),s("你应该看到类似下面的输出")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-248 ~]# consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"usage: consul [--version] [--help] <command> [<args>]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Available commands are:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    agent          Runs a Consul agent")]),s(`
`),n("span",{class:"line"},[n("span",null,"    configtest     Validate config file")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event          Fire a new event")]),s(`
`),n("span",{class:"line"},[n("span",null,"    exec           Executes a command on Consul nodes")]),s(`
`),n("span",{class:"line"},[n("span",null,'    force-leave    Forces a member of the cluster to enter the "left" state')]),s(`
`),n("span",{class:"line"},[n("span",null,"    info           Provides debugging information for operators")]),s(`
`),n("span",{class:"line"},[n("span",null,"    join           Tell Consul agent to join cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"    keygen         Generates a new encryption key")]),s(`
`),n("span",{class:"line"},[n("span",null,"    keyring        Manages gossip layer encryption keys")]),s(`
`),n("span",{class:"line"},[n("span",null,"    kv             Interact with the key-value store")]),s(`
`),n("span",{class:"line"},[n("span",null,"    leave          Gracefully leaves the Consul cluster and shuts down")]),s(`
`),n("span",{class:"line"},[n("span",null,"    lock           Execute a command holding a lock")]),s(`
`),n("span",{class:"line"},[n("span",null,"    maint          Controls node or service maintenance mode")]),s(`
`),n("span",{class:"line"},[n("span",null,"    members        Lists the members of a Consul cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"    monitor        Stream logs from a Consul agent")]),s(`
`),n("span",{class:"line"},[n("span",null,"    operator       Provides cluster-level tools for Consul operators")]),s(`
`),n("span",{class:"line"},[n("span",null,"    reload         Triggers the agent to reload configuration files")]),s(`
`),n("span",{class:"line"},[n("span",null,"    rtt            Estimates network round trip time between nodes")]),s(`
`),n("span",{class:"line"},[n("span",null,"    snapshot       Saves, restores and inspects snapshots of Consul server state")]),s(`
`),n("span",{class:"line"},[n("span",null,"    version        Prints the Consul version")]),s(`
`),n("span",{class:"line"},[n("span",null,"    watch          Watch for changes in Consul")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("如果你得到一个"),n("code",null,"consul not be found"),s("的错误,你的"),n("code",null,"PATH"),s("可能没有正确设置.请返回检查你的consul的安装路径是否包含在"),n("code",null,"PATH"),s("中.")],-1),n("h2",{id:"运行agent",tabindex:"-1"},[s("运行Agent "),n("a",{class:"header-anchor",href:"#运行agent","aria-label":'Permalink to "运行Agent"'},"​")],-1),n("p",null,[s("完成Consul的安装后,必须运行agent. agent可以运行为"),n("code",null,"server"),s("或"),n("code",null,"client"),s("模式.每个数据中心至少必须拥有一台server . 建议在一个集群中有3或者5个server.部署单一的server,在出现失败时会不可避免的造成数据丢失.")],-1),n("p",null,"其他的agent运行为client模式.一个client是一个非常轻量级的进程.用于注册服务,运行健康检查和转发对server的查询.agent必须在集群中的每个主机上运行.",-1),n("p",null,[s("查看启动数据中心的细节请查看"),n("a",{href:"https://www.consul.io/docs/guides/bootstrapping.html",target:"_blank",rel:"noreferrer"},"这里"),s(".")],-1),n("h2",{id:"启动-consul-server",tabindex:"-1"},[s("启动 Consul Server "),n("a",{class:"header-anchor",href:"#启动-consul-server","aria-label":'Permalink to "启动 Consul Server"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"consul agent -server -bootstrap-expect 3 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -ui-dir ./consul_ui/ -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("运行cosnul agent以"),n("code",null,"server"),s("模式，")],-1),n("ul",null,[n("li",null,[n("code",null,"-server"),s(" ： 定义agent运行在server模式")]),n("li",null,[n("code",null,"-bootstrap-expect"),s(" ：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap共用")]),n("li",null,[n("code",null,"-bind"),s("：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0")]),n("li",null,[n("code",null,"-node"),s("：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名")]),n("li",null,[n("code",null,"-ui-dir"),s("： 提供存放web ui资源的路径，该目录必须是可读的")]),n("li",null,[n("code",null,"-rejoin"),s("：使consul忽略先前的离开，在再次启动后仍旧尝试加入集群中。")]),n("li",null,[n("code",null,"-config-dir"),s("：配置文件目录，里面所有以.json结尾的文件都会被加载")]),n("li",null,[n("code",null,"-client"),s("：consul服务侦听地址，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1所以不对外提供服务，如果你要对外提供服务改成0.0.0.0")])],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 consul]# consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -ui-dir ./consul_ui/ -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> WARNING: Expect Mode enabled, expecting 3 servers")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Starting Consul agent...")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Starting Consul agent RPC...")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Consul agent running!")]),s(`
`),n("span",{class:"line"},[n("span",null,"           Version: 'v0.7.4'")]),s(`
`),n("span",{class:"line"},[n("span",null,"           Node ID: '422ec677-74ef-8f29-2f22-01effeed6334'")]),s(`
`),n("span",{class:"line"},[n("span",null,"         Node name: 's1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Datacenter: 'dc1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Server: true (bootstrap: false)")]),s(`
`),n("span",{class:"line"},[n("span",null,"       Client Addr: 0.0.0.0 (HTTP: 8500, HTTPS: -1, DNS: 8600, RPC: 8400)")]),s(`
`),n("span",{class:"line"},[n("span",null,"      Cluster Addr: 10.201.102.198 (LAN: 8301, WAN: 8302)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Gossip encrypt: false, RPC-TLS: false, TLS-Incoming: false")]),s(`
`),n("span",{class:"line"},[n("span",null,"             Atlas: <disabled>")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Log data will now stream in as it occurs:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] raft: Restored from snapshot 139-352267-1489707086023")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] raft: Initial configuration (index=6982): [{Suffrage:Voter ID:10.201.102.199:8300 Address:10.201.102.199:8300} {Suffrage:Voter ID:10.201.102.200:8300 Address:10.201.102.200:8300} {Suffrage:Voter ID:10.201.102.198:8300 Address:10.201.102.198:8300}]")]),s(`
`),n("span",{class:"line"},[n("span",null,'    2017/03/17 18:03:08 [INFO] raft: Node at 10.201.102.198:8300 [Follower] entering Follower state (Leader: "")')]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s1 10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] serf: Attempting re-join to previously known node: s2: 10.201.102.199:8301")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] consul: Adding LAN server s1 (Addr: tcp/10.201.102.198:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] consul: Raft data found, disabling bootstrap mode")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s2 10.201.102.199")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s3 10.201.102.200")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] serf: Re-joined to previously known node: s2: 10.201.102.199:8301")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] consul: Adding LAN server s2 (Addr: tcp/10.201.102.199:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] consul: Adding LAN server s3 (Addr: tcp/10.201.102.200:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s1.dc1 10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [INFO] consul: Adding WAN server s1.dc1 (Addr: tcp/10.201.102.198:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:08 [WARN] serf: Failed to re-join any previously known node")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:14 [INFO] agent: Synced service 'consul'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:14 [INFO] agent: Deregistered service 'consul01'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:14 [INFO] agent: Deregistered service 'consul02'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 18:03:14 [INFO] agent: Deregistered service 'consul03'")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"查看集群成员"),s(" 新开一个终端窗口运行"),n("code",null,"consul members"),s(", 你可以看到Consul集群的成员.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# consul members")]),s(`
`),n("span",{class:"line"},[n("span",null,"Node  Address              Status  Type    Build  Protocol  DC")]),s(`
`),n("span",{class:"line"},[n("span",null,"s1    10.201.102.198:8301  alive   server  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s2    10.201.102.199:8301  alive   server  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s3    10.201.102.200:8301  alive   server  0.7.4  2         dc1")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"启动-consul-client",tabindex:"-1"},[s("启动 Consul Client "),n("a",{class:"header-anchor",href:"#启动-consul-client","aria-label":'Permalink to "启动 Consul Client"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"consul agent -data-dir /tmp/consul -node=c1 -bind=10.201.102.248 -config-dir=/etc/consul.d/ -join 10.201.102.198")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("运行cosnul agent以client模式，"),n("code",null,"-join"),s(" 加入到已有的集群中去。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-248 ~]# consul agent -data-dir /tmp/consul -node=c1 -bind=10.201.102.248 -config-dir=/etc/consul.d/ -join 10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Starting Consul agent...")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Starting Consul agent RPC...")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Joining cluster...")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Join completed. Synced with 1 initial agents")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Consul agent running!")]),s(`
`),n("span",{class:"line"},[n("span",null,"           Version: 'v0.7.4'")]),s(`
`),n("span",{class:"line"},[n("span",null,"           Node ID: '564dc0c7-7f4f-7402-a301-cebe7f024294'")]),s(`
`),n("span",{class:"line"},[n("span",null,"         Node name: 'c1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        Datacenter: 'dc1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"            Server: false (bootstrap: false)")]),s(`
`),n("span",{class:"line"},[n("span",null,"       Client Addr: 127.0.0.1 (HTTP: 8500, HTTPS: -1, DNS: 8600, RPC: 8400)")]),s(`
`),n("span",{class:"line"},[n("span",null,"      Cluster Addr: 10.201.102.248 (LAN: 8301, WAN: 8302)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    Gossip encrypt: false, RPC-TLS: false, TLS-Incoming: false")]),s(`
`),n("span",{class:"line"},[n("span",null,"             Atlas: <disabled>")]),s(`
`),n("span",{class:"line"},[n("span",null,"==> Log data will now stream in as it occurs:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: c1 10.201.102.248")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] agent: (LAN) joining: [10.201.102.198]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: s2 10.201.102.199")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: s3 10.201.102.200")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: s1 10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] agent: (LAN) joined: 1 Err: <nil>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] consul: adding server s2 (Addr: tcp/10.201.102.199:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] consul: adding server s3 (Addr: tcp/10.201.102.200:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] consul: adding server s1 (Addr: tcp/10.201.102.198:8300) (DC: dc1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    2017/03/17 15:35:16 [INFO] agent: Synced node info")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"查看集群成员"),s(" 新开一个终端窗口运行"),n("code",null,"consul members"),s(", 你可以看到Consul集群的成员.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-248 ~]# consul members")]),s(`
`),n("span",{class:"line"},[n("span",null,"Node  Address              Status  Type    Build  Protocol  DC")]),s(`
`),n("span",{class:"line"},[n("span",null,"c1    10.201.102.248:8301  alive   client  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s1    10.201.102.198:8301  alive   server  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s2    10.201.102.199:8301  alive   server  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s3    10.201.102.200:8301  alive   server  0.7.4  2         dc1")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"加入集群")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-248 ~]# consul join 10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,"Node  Address              Status  Type    Build  Protocol  DC")]),s(`
`),n("span",{class:"line"},[n("span",null,"c1    10.201.102.248:8301  alive   client  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s1    10.201.102.198:8301  alive   server  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s2    10.201.102.199:8301  alive   server  0.7.4  2         dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"s3    10.201.102.200:8301  alive   server  0.7.4  2         dc1")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"停止agent",tabindex:"-1"},[s("停止Agent "),n("a",{class:"header-anchor",href:"#停止agent","aria-label":'Permalink to "停止Agent"'},"​")],-1),n("p",null,[s("你可以使用"),n("code",null,"Ctrl-C"),s(" 优雅的关闭Agent. 中断Agent之后你可以看到他离开了集群并关闭.")],-1),n("p",null,"在退出中,Consul提醒其他集群成员,这个节点离开了.如果你强行杀掉进程.集群的其他成员应该能检测到这个节点失效了.当一个成员离开,他的服务和检测也会从目录中移除.当一个成员失效了,他的健康状况被简单的标记为危险,但是不会从目录中移除.Consul会自动尝试对失效的节点进行重连.允许他从某些网络条件下恢复过来.离开的节点则不会再继续联系.",-1),n("p",null,[s("此外,如果一个agent作为一个服务器,一个优雅的离开是很重要的,可以避免引起潜在的可用性故障影响达成"),n("a",{href:"https://www.consul.io/docs/internals/consensus.html",target:"_blank",rel:"noreferrer"},"一致性协议"),s(".")],-1),n("p",null,[s("查看"),n("a",{href:"https://www.consul.io/docs/internals/consensus.html",target:"_blank",rel:"noreferrer"},"这里"),s("了解添加和移除server.")],-1),n("h2",{id:"更新服务",tabindex:"-1"},[s("更新服务 "),n("a",{class:"header-anchor",href:"#更新服务","aria-label":'Permalink to "更新服务"'},"​")],-1),n("p",null,[s("服务定义可以通过配置文件并发送"),n("code",null,"SIGHUP"),s("给agent来进行更新.这样你可以让你在不关闭服务或者保持服务请求可用的情况下进行更新.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"consul reload")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"另外 HTTP API可以用来动态的添加,移除和修改服务.",-1),n("p",null,"注册服务 搭建好conusl集群后，用户或者程序就能到consul中去查询或者注册服务。可以通过提供服务定义文件或者调用HTTP API来注册一个服务.",-1),n("p",null,[s("首先,为Consul配置创建一个目录.Consul会载入配置文件夹里的所有配置文件.在Unix系统中通常类似 "),n("code",null,"/etc/consul.d"),s(" (.d 后缀意思是这个路径包含了一组配置文件).")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"mkdir /etc/consul.d")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"然后,我们将编写服务定义配置文件.假设我们有一个名叫web的服务运行在 80端口.另外,我们将给他设置一个标签.这样我们可以使用他作为额外的查询方式:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,`echo '{"service": {"name": "web", "tags": ["rails"], "port": 80}}' >/etc/consul.d/web.json`)])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"现在重启agent , 设置配置目录:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"$ consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"...")]),s(`
`),n("span",{class:"line"},[n("span",null,"    [INFO] agent: Synced service 'web'")]),s(`
`),n("span",{class:"line"},[n("span",null,"...")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,[n("code",null,"-data-dir"),s("：提供一个目录用来存放agent的状态，所有的agent允许都需要该目录，该目录必须是稳定的，系统重启后都继续存在 你可能注意到了输出了 “synced” 了 web这个服务.意思是这个agent从配置文件中载入了服务定义,并且成功注册到服务目录.")])],-1),n("p",null,"如果你想注册多个服务,你应该在Consul配置目录创建多个服务定义文件.",-1),n("p",null,[s("HTTP API注册服务,curl命令或者postman 以"),n("code",null,"PUT"),s("方式请求consul HTTP API更多细节"),n("a",{href:"https://www.consul.io/docs/agent/http/catalog.html#catalog_register",target:"_blank",rel:"noreferrer"},"点击查看")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,`curl -X PUT -d '{"Datacenter": "dc1", "Node": "c2", "Address": "10.155.0.106", "Service": {"Service": "MAC", "tags": ["lianglian", "Mac"], "Port": 22}}' http://127.0.0.1:8500/v1/catalog/register`)])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"查询服务",tabindex:"-1"},[s("查询服务 "),n("a",{class:"header-anchor",href:"#查询服务","aria-label":'Permalink to "查询服务"'},"​")],-1),n("p",null,"一旦agent启动并且服务同步了.我们可以通过DNS或者HTTP的API来查询服务.",-1),n("p",null,[n("strong",null,"DNS API"),s(" 让我们首先使用DNS API来查询.在DNS API中,服务的DNS名字是 "),n("code",null,"NAME.service.consul"),s(". 虽然是可配置的,但默认的所有DNS名字会都在"),n("code",null,"consul"),s("命名空间下.这个子域告诉Consul,我们在查询服务,"),n("code",null,"NAME"),s("则是服务的名称.")],-1),n("p",null,[s("对于我们上面注册的Web服务.它的域名是 "),n("code",null,"web.service.consul"),s(" :")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 web.service.consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 web.service.consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"; (1 server found)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; global options: +cmd")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Got answer:")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 39468")]),s(`
`),n("span",{class:"line"},[n("span",null,";; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WARNING: recursion requested but not available")]),s(`
`),n("span",{class:"line"},[n("span",null,";; QUESTION SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,";web.service.consul.            IN      A")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ANSWER SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"web.service.consul.     0       IN      A       10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Query time: 0 msec")]),s(`
`),n("span",{class:"line"},[n("span",null,";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WHEN: Tue Mar 28 16:10:24 2017")]),s(`
`),n("span",{class:"line"},[n("span",null,";; MSG SIZE  rcvd: 52")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]#")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("如你所见,一个"),n("code",null,"A"),s("记录返回了一个可用的服务所在的节点的IP地址."),n("code",null,"A"),s("记录只能设置为IP地址. 有也可用使用 DNS API 来接收包含 地址和端口的 SRV记录:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 web.service.consul SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 web.service.consul SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,"; (1 server found)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; global options: +cmd")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Got answer:")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 13331")]),s(`
`),n("span",{class:"line"},[n("span",null,";; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WARNING: recursion requested but not available")]),s(`
`),n("span",{class:"line"},[n("span",null,";; QUESTION SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,";web.service.consul.            IN      SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ANSWER SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"web.service.consul.     0       IN      SRV     1 1 80 s1.node.dc1.consul.")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ADDITIONAL SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"s1.node.dc1.consul.     0       IN      A       10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Query time: 0 msec")]),s(`
`),n("span",{class:"line"},[n("span",null,";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WHEN: Tue Mar 28 16:10:56 2017")]),s(`
`),n("span",{class:"line"},[n("span",null,";; MSG SIZE  rcvd: 84")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]#")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("code",null,"SRV"),s("记录告诉我们 web 这个服务运行于节点"),n("code",null,"dhcp-10-201-102-198"),s(" 的"),n("code",null,"80"),s("端口. DNS额外返回了节点的A记录.")],-1),n("p",null,[s("最后,我们也可以用 DNS API 通过标签来过滤服务.基于标签的服务查询格式为"),n("code",null,"TAG.NAME.service.consul"),s(". 在下面的例子中,我们请求Consul返回有 "),n("code",null,"rails"),s("标签的 "),n("code",null,"web"),s("服务.我们成功获取了我们注册为这个标签的服务:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 rails.web.service.consul SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 rails.web.service.consul SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,"; (1 server found)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; global options: +cmd")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Got answer:")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 37307")]),s(`
`),n("span",{class:"line"},[n("span",null,";; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WARNING: recursion requested but not available")]),s(`
`),n("span",{class:"line"},[n("span",null,";; QUESTION SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,";rails.web.service.consul.      IN      SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ANSWER SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"rails.web.service.consul. 0     IN      SRV     1 1 80 s1.node.dc1.consul.")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ADDITIONAL SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"s1.node.dc1.consul.     0       IN      A       10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Query time: 0 msec")]),s(`
`),n("span",{class:"line"},[n("span",null,";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WHEN: Tue Mar 28 16:11:45 2017")]),s(`
`),n("span",{class:"line"},[n("span",null,";; MSG SIZE  rcvd: 90")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]#")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"HTTP API"),s(" 除了DNS API之外,HTTP API也可以用来进行服务查询:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -s 127.0.0.1:8500/v1/catalog/service/web | python -m json.tool")]),s(`
`),n("span",{class:"line"},[n("span",null,"[")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Address": "10.201.102.198",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 492843,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ID": "422ec677-74ef-8f29-2f22-01effeed6334",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 492843,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Node": "s1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "NodeMeta": {},')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceAddress": "",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceEnableTagOverride": false,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceID": "web",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceName": "web",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServicePort": 80,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceTags": [')]),s(`
`),n("span",{class:"line"},[n("span",null,'            "rails"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        ],")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "TaggedAddresses": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'            "lan": "10.201.102.198",')]),s(`
`),n("span",{class:"line"},[n("span",null,'            "wan": "10.201.102.198"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"目录API给出所有节点提供的服务.稍后我们会像通常的那样带上健康检查进行查询.就像DNS内部处理的那样.这是只查看健康的实例的查询方法:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -s 127.0.0.1:8500/v1/catalog/service/web?passing | python -m json.tool")]),s(`
`),n("span",{class:"line"},[n("span",null,"[")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Address": "10.201.102.198",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 492843,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ID": "422ec677-74ef-8f29-2f22-01effeed6334",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 492843,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Node": "s1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "NodeMeta": {},')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceAddress": "",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceEnableTagOverride": false,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceID": "web",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceName": "web",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServicePort": 80,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceTags": [')]),s(`
`),n("span",{class:"line"},[n("span",null,'            "rails"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        ],")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "TaggedAddresses": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'            "lan": "10.201.102.198",')]),s(`
`),n("span",{class:"line"},[n("span",null,'            "wan": "10.201.102.198"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"web管理界面",tabindex:"-1"},[s("WEB管理界面 "),n("a",{class:"header-anchor",href:"#web管理界面","aria-label":'Permalink to "WEB管理界面"'},"​")],-1),n("p",null,[s("Consul同时提供了一个漂亮的功能齐全的WEB界面,开箱即用.界面可以用来查看所有的节点,可以查看健康检查和他们的当前状态.可以读取和设置K/V 存储的数据.UI自动支持多数据中心."),n("a",{href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noreferrer"},"点击前往下载")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/ui_download.png",alt:"UI_Download",loading:"lazy",decoding:"async"})],-1),n("p",null,"下载完后上传至服务器，建议所有server角色都使用WebUI，。",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -ui-dir ./consul_ui/ -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,[n("code",null,"-ui-dir"),s("： 提供存放web ui资源的路径，指向该目录必须是可读的")]),n("li",null,[n("code",null,"-client"),s("：consul服务侦听地址，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1所以不对外提供服务，如果你要对外提供服务改成0.0.0.0 可通过"),n("a",{href:"http://10.201.102.198:8500/",target:"_blank",rel:"noreferrer"},"http://10.201.102.198:8500"),s("访问WEB管理界面。")])],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/ui.png",alt:"UI_Download",loading:"lazy",decoding:"async"})],-1),n("h2",{id:"健康检查",tabindex:"-1"},[s("健康检查 "),n("a",{class:"header-anchor",href:"#健康检查","aria-label":'Permalink to "健康检查"'},"​")],-1),n("p",null,"我们现在看到Consul运行时如此简单.添加节点和服务,查询节点和服务.在这一节.我们将继续添加健康检查到节点和服务.健康检查是服务发现的关键组件.预防使用到不健康的服务.",-1),n("p",null,"这一步建立在前一节的Consul集群创建之上.目前你应该有一个包含多个节点的Consul集群.",-1),n("p",null,[n("strong",null,"自定义检查"),s(" 和服务注册类似,一个检查可以通过检查定义或HTTP API请求来注册.")],-1),n("p",null,"我们将使用和检查定义来注册检查.和服务类似,因为这是建立检查最常用的方式.",-1),n("p",null,"在第二个节点的配置目录建立定义文件:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/etc/consul.d/web.json1")]),s(`
`),n("span",{class:"line"},[n("span",null,'{"service": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "name": "Faceid",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "tags": ["extract", "verify", "compare", "idcard"],')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "address": "10.201.102.198",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "port": 9000,')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "check": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "name": "ping",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "script": "curl -s localhost:9000",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "interval": "3s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"or",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/etc/consul.d/web.json1")]),s(`
`),n("span",{class:"line"},[n("span",null,'{"service": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "name": "Faceid",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "tags": ["extract", "verify", "compare", "idcard"],')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "address": "10.201.102.199",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "port": 9000,')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "check": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "id": "api",')]),s(`
`),n("span",{class:"line"},[n("span",null,'           "name": "HTTP API on port 9000",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "http": "http://localhost:9000",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "interval": "10s",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "timeout": "1s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"   }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"more",-1),n("h2",{id:"检查健康状态",tabindex:"-1"},[s("检查健康状态 "),n("a",{class:"header-anchor",href:"#检查健康状态","aria-label":'Permalink to "检查健康状态"'},"​")],-1),n("p",null,"我们能适应HTTP API来检查他们.首先我们检查有哪些失败的检查.使用这个命令(注意:这个命令可以运行在任何节点)",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -s http://localhost:8500/v1/health/state/critical | python -m json.tool")]),s(`
`),n("span",{class:"line"},[n("span",null,"[")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CheckID": "service:Faceid",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 493398,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 493846,')]),s(`
`),n("span",{class:"line"},[n("span",null,`        "Name": "Service 'Faceid' check",`)]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Node": "s1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Notes": "",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Output": "",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceID": "Faceid",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ServiceName": "Faceid",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Status": "critical"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("我们可以看到,只有一个检查我们的"),n("code",null,"web"),s("服务在"),n("code",null,"critical"),s("状态")],-1),n("p",null,"另外,我们可以尝试用DNS查询web服务,Consul将不会返回结果.因为服务不健康.",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 Faceid.service.consul SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 Faceid.service.consul SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,"; (1 server found)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; global options: +cmd")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Got answer:")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 40884")]),s(`
`),n("span",{class:"line"},[n("span",null,";; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 3")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WARNING: recursion requested but not available")]),s(`
`),n("span",{class:"line"},[n("span",null,";; QUESTION SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,";Faceid.service.consul.         IN      SRV")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ANSWER SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"Faceid.service.consul.  0       IN      SRV     1 1 9000 s3.node.dc1.consul.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Faceid.service.consul.  0       IN      SRV     1 1 9000 s1.node.dc1.consul.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Faceid.service.consul.  0       IN      SRV     1 1 9000 s2.node.dc1.consul.")]),s(`
`),n("span",{class:"line"},[n("span",null,";; ADDITIONAL SECTION:")]),s(`
`),n("span",{class:"line"},[n("span",null,"s3.node.dc1.consul.     0       IN      A       10.201.102.200")]),s(`
`),n("span",{class:"line"},[n("span",null,"s1.node.dc1.consul.     0       IN      A       10.201.102.198")]),s(`
`),n("span",{class:"line"},[n("span",null,"s2.node.dc1.consul.     0       IN      A       10.201.102.199")]),s(`
`),n("span",{class:"line"},[n("span",null,";; Query time: 0 msec")]),s(`
`),n("span",{class:"line"},[n("span",null,";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),s(`
`),n("span",{class:"line"},[n("span",null,";; WHEN: Tue Mar 28 18:20:15 2017")]),s(`
`),n("span",{class:"line"},[n("span",null,";; MSG SIZE  rcvd: 165")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"k-v",tabindex:"-1"},[s("K ／V "),n("a",{class:"header-anchor",href:"#k-v","aria-label":'Permalink to "K ／V"'},"​")],-1),n("p",null,"除了提供服务发现和健康检查的集成.Consul提供了一个易用的键/值存储.这可以用来保持动态配置,协助服务协调,领袖选举,做开发者可以想到的任何事情.",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -v http://localhost:8500/v1/kv/?recurse")]),s(`
`),n("span",{class:"line"},[n("span",null,"* About to connect() to localhost port 8500 (#0)")]),s(`
`),n("span",{class:"line"},[n("span",null,"*   Trying ::1... 拒绝连接")]),s(`
`),n("span",{class:"line"},[n("span",null,"*   Trying 127.0.0.1... connected")]),s(`
`),n("span",{class:"line"},[n("span",null,"* Connected to localhost (127.0.0.1) port 8500 (#0)")]),s(`
`),n("span",{class:"line"},[n("span",null,"> GET /v1/kv/?recurse HTTP/1.1")]),s(`
`),n("span",{class:"line"},[n("span",null,"> User-Agent: curl/7.19.7 (x86_64-redhat-linux-gnu) libcurl/7.19.7 NSS/3.21 Basic ECC zlib/1.2.3 libidn/1.18 libssh2/1.4.2")]),s(`
`),n("span",{class:"line"},[n("span",null,"> Host: localhost:8500")]),s(`
`),n("span",{class:"line"},[n("span",null,"> Accept: */*")]),s(`
`),n("span",{class:"line"},[n("span",null,">")]),s(`
`),n("span",{class:"line"},[n("span",null,"< HTTP/1.1 404 Not Found")]),s(`
`),n("span",{class:"line"},[n("span",null,"< X-Consul-Index: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"< X-Consul-Knownleader: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"< X-Consul-Lastcontact: 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"< Date: Thu, 18 Aug 2016 08:21:39 GMT")]),s(`
`),n("span",{class:"line"},[n("span",null,"< Content-Length: 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"< Content-Type: text/plain; charset=utf-8")]),s(`
`),n("span",{class:"line"},[n("span",null,"<")]),s(`
`),n("span",{class:"line"},[n("span",null,"* Connection #0 to host localhost left intact")]),s(`
`),n("span",{class:"line"},[n("span",null,"* Closing connection #0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("因为没有key所以我们得到了一个404响应.现在我们"),n("code",null,"PUT"),s("一些示例的Key:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -X PUT -d 'test' http://localhost:8500/v1/kv/web/key1")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -X PUT -d 'test' http://localhost:8500/v1/kv/web/key2?flags=42")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -X PUT -d 'test'  http://localhost:8500/v1/kv/web/sub/key3")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("我们创建了值为”test”的3个Key,注意返回的值是经过了"),n("code",null,"base64"),s("编码的.用来支持非UTF8编码字符.对Key "),n("code",null,"web/key2"),s("我们设置了一个标志值为 "),n("code",null,"42"),s(".所有的key支持设置一个64位的整形数字标志.Consul内部不适用这个值.但是他可以被客户端适用来做一些元数据.")],-1),n("p",null,[s("完成设置后,我们发起了一个"),n("code",null,"GET"),s("请求来接收多个key的值,使用"),n("code",null,"?recurse"),s("参数.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -s http://localhost:8500/v1/kv/web/?recurse | python -m json.tool")]),s(`
`),n("span",{class:"line"},[n("span",null,"[")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 502660,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Flags": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Key": "web/key1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "LockIndex": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 502660,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Value": "dGVzdA=="')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 502663,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Flags": 42,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Key": "web/key2",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "LockIndex": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 502663,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Value": "dGVzdA=="')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 502665,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Flags": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Key": "web/sub/key3",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "LockIndex": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 502665,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Value": "dGVzdA=="')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("你可以获取"),n("strong",null,"单个"),s("的key")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -s http://localhost:8500/v1/kv/web/key1 | python -m json.tool")]),s(`
`),n("span",{class:"line"},[n("span",null,"[")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        "CreateIndex": 502660,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Flags": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Key": "web/key1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "LockIndex": 0,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ModifyIndex": 502660,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "Value": "dGVzdA=="')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("删除key也很简单.通过"),n("code",null,"DELETE"),s("动作来完成.我们可以通过指定完整路径来删除一个单独的key.或者我们可以使用"),n("code",null,"?recurse"),n("strong",null,"递归"),s("的删除主路径下所有key.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# curl -X DELETE http://localhost:8500/v1/kv/web/sub?recurse")]),s(`
`),n("span",{class:"line"},[n("span",null,"true")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("可以通过发送相同的URL并提供不同的消息体的"),n("code",null,"PUT"),s("请求去修改一个Key.另外,Consul提供一个检查并设置的操作,实现原子的Key修改.通过"),n("code",null,"?cas=参数"),s("加上"),n("code",null,"GET"),s("中最近的"),n("code",null,"ModifyIndex"),s("来达到. 例如我们想修改 “web/key1”:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"curl -X PUT -d 'newval' http://localhost:8500/v1/kv/web/key1?cas=502660")]),s(`
`),n("span",{class:"line"},[n("span",null,"true")]),s(`
`),n("span",{class:"line"},[n("span",null,"curl -X PUT -d 'newval' http://localhost:8500/v1/kv/web/key1?cas=502660")]),s(`
`),n("span",{class:"line"},[n("span",null,"false")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("在这种情况下,第一次"),n("code",null,"CAS"),s(" 更新成功因为"),n("code",null,"ModifyIndex"),s("是"),n("code",null,"502660"),s(".而第二次失败是因为"),n("code",null,"ModifyIndex"),s("在第一次更新后已经不是"),n("code",null,"502660"),s("了 .")],-1),n("p",null,[s("我们也可以使用"),n("code",null,"ModifyIndex"),s("来等待key值的改变.例如我们想等待"),n("code",null,"key2"),s("被修改:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'[root@dhcp-10-201-102-198 ~]# curl "http://localhost:8500/v1/kv/web/key2"')]),s(`
`),n("span",{class:"line"},[n("span",null,'[{"LockIndex":0,"Key":"web/key2","Flags":42,"Value":"dGVzdA==","CreateIndex":502663,"ModifyIndex":502663}]')]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@dhcp-10-201-102-198 ~]# curl "http://localhost:8500/v1/kv/web/key2?index=502663&wait=5s"')]),s(`
`),n("span",{class:"line"},[n("span",null,'[{"LockIndex":0,"Key":"web/key2","Flags":42,"Value":"dGVzdA==","CreateIndex":502663,"ModifyIndex":502663}]')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("通过提供 "),n("code",null,"?index="),s(",我们请求等待key值有一个比"),n("code",null,"502663"),s("更大的"),n("code",null,"ModifyIndex"),s(".虽然"),n("code",null,"?wait=5s"),s("参数限制了这个请求最多5秒,否则返回当前的未改变的值. 这样可以有效的等待key的改变.另外,这个功能可以用于等待一组key.直到其中的某个key有修改.")],-1),n("h1",{id:"conusl-命令行",tabindex:"-1"},[s("Conusl 命令行 "),n("a",{class:"header-anchor",href:"#conusl-命令行","aria-label":'Permalink to "Conusl 命令行"'},"​")],-1),n("p",null,"见识了consul的强大，consul可以通过一个简单的CLI来控制，consul只有一个命令行应用，就是consul命令，consul命令可以包含agent、members等参数进行使用，这一篇来具体看看consul CLI的具体用法，consul -h即可看到consul cli所支持的参数，而每个参数里面又支持其他参数，下面我们就来具体看看。",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dhcp-10-201-102-198 ~]# consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"usage: consul [--version] [--help] <command> [<args>]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Available commands are:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    agent          Runs a Consul agent  运行一个consul agent")]),s(`
`),n("span",{class:"line"},[n("span",null,"    configtest     Validate config file")]),s(`
`),n("span",{class:"line"},[n("span",null,"    event          Fire a new event")]),s(`
`),n("span",{class:"line"},[n("span",null,"    exec           Executes a command on Consul nodes  在consul节点上执行一个命令")]),s(`
`),n("span",{class:"line"},[n("span",null,'    force-leave    Forces a member of the cluster to enter the "left" state   强制节点成员在集群中的状态转换到left状态')]),s(`
`),n("span",{class:"line"},[n("span",null,"    info           Provides debugging information for operators  提供操作的debug级别的信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"    join           Tell Consul agent to join cluster   加入consul节点到集群中")]),s(`
`),n("span",{class:"line"},[n("span",null,"    keygen         Generates a new encryption key  生成一个新的加密key")]),s(`
`),n("span",{class:"line"},[n("span",null,"    keyring        Manages gossip layer encryption keys")]),s(`
`),n("span",{class:"line"},[n("span",null,"    kv             Interact with the key-value store")]),s(`
`),n("span",{class:"line"},[n("span",null,"    leave          Gracefully leaves the Consul cluster and shuts down")]),s(`
`),n("span",{class:"line"},[n("span",null,"    lock           Execute a command holding a lock")]),s(`
`),n("span",{class:"line"},[n("span",null,"    maint          Controls node or service maintenance mode")]),s(`
`),n("span",{class:"line"},[n("span",null,"    members        Lists the members of a Consul cluster    列出集群中成员")]),s(`
`),n("span",{class:"line"},[n("span",null,"    monitor        Stream logs from a Consul agent  打印consul节点的日志信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"    operator       Provides cluster-level tools for Consul operators")]),s(`
`),n("span",{class:"line"},[n("span",null,"    reload         Triggers the agent to reload configuration files   触发节点重新加载配置文件")]),s(`
`),n("span",{class:"line"},[n("span",null,"    rtt            Estimates network round trip time between nodes")]),s(`
`),n("span",{class:"line"},[n("span",null,"    snapshot       Saves, restores and inspects snapshots of Consul server state")]),s(`
`),n("span",{class:"line"},[n("span",null,"    version        Prints the Consul version    打印consul的版本信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"    watch          Watch for changes in Consul   监控consul的改变")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("更详细见"),n("a",{href:"https://www.consul.io/docs/commands/index.html",target:"_blank",rel:"noreferrer"},"官网")],-1),n("h2",{id:"agent",tabindex:"-1"},[s("Agent "),n("a",{class:"header-anchor",href:"#agent","aria-label":'Permalink to "Agent"'},"​")],-1),n("p",null,[n("code",null,"agent"),s("指令是consul的核心，它运行agent来维护成员的重要信息、运行检查、服务宣布、查询处理等等。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"==> Usage: consul agent [options]")]),s(`
`),n("span",{class:"line"},[n("span",null,"  Starts the Consul agent and runs until an interrupt is received. The")]),s(`
`),n("span",{class:"line"},[n("span",null,"  agent represents a single node in a cluster.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Options:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -advertise=addr                  Sets the advertise address to use")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -advertise-wan=addr              Sets address to advertise on wan instead of")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   advertise addr")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -bootstrap                       Sets server to bootstrap mode")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -bind=0.0.0.0                    Sets the bind address for cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   communication")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -http-port=8500                  Sets the HTTP API port to listen on")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -bootstrap-expect=0              Sets server to expect bootstrap mode.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -client=127.0.0.1                Sets the address to bind for client access.")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   This includes RPC, DNS, HTTP and HTTPS (if")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   configured)")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -config-file=foo                 Path to a JSON file to read configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   from. This can be specified multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -config-dir=foo                  Path to a directory to read configuration")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   files from. This will read every file ending")]),s(`
`),n("span",{class:"line"},[n("span",null,'                                   in ".json" as configuration in this')]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   directory in alphabetical order. This can be")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   specified multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -data-dir=path                   Path to a data directory to store agent")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   state")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -dev                             Starts the agent in development mode.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -recursor=1.2.3.4                Address of an upstream DNS server.")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   Can be specified multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -dc=east-aws                     Datacenter of the agent (deprecated: use")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   'datacenter' instead).")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -datacenter=east-aws             Datacenter of the agent.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -encrypt=key                     Provides the gossip encryption key")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -join=1.2.3.4                    Address of an agent to join at start time.")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   Can be specified multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -join-wan=1.2.3.4                Address of an agent to join -wan at start")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   time. Can be specified multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join=1.2.3.4              Address of an agent to join at start time")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   with retries enabled. Can be specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-interval=30s              Time to wait between join attempts.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-max=0                     Maximum number of join attempts. Defaults to")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   0, which will retry indefinitely.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-ec2-region           EC2 Region to use for discovering servers to")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   join.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-ec2-tag-key          EC2 tag key to filter on for server")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   discovery")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-ec2-tag-value        EC2 tag value to filter on for server")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   discovery")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-gce-project-name     Google Compute Engine project to discover")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   servers in")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-gce-zone-pattern     Google Compute Engine region or zone to")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   discover servers in (regex pattern)")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-gce-tag-value        Google Compute Engine tag value to filter")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   for server discovery")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-gce-credentials-file Path to credentials JSON file to use with")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   Google Compute Engine")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-join-wan=1.2.3.4          Address of an agent to join -wan at start")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   time with retries enabled. Can be specified")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-interval-wan=30s          Time to wait between join -wan attempts.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry-max-wan=0                 Maximum number of join -wan attempts.")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   Defaults to 0, which will retry")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   indefinitely.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -log-level=info                  Log level of the agent.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -node=hostname                   Name of this node. Must be unique in the")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -node-meta=key:value             An arbitrary metadata key/value pair for")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   this node.")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   This can be specified multiple times.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -protocol=N                      Sets the protocol version. Defaults to")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   latest.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -rejoin                          Ignores a previous leave and attempts to")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   rejoin the cluster.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -server                          Switches agent to server mode.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -syslog                          Enables logging to syslog")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ui                              Enables the built-in static web UI server")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ui-dir=path                     Path to directory containing the Web UI")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                   resources")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -pid-file=path                   Path to file to store agent PID")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"event",tabindex:"-1"},[s("event "),n("a",{class:"header-anchor",href:"#event","aria-label":'Permalink to "event"'},"​")],-1),n("p",null,[n("code",null,"event"),s("命令提供了一种机制，用来fire自定义的用户事件，这些事件对consul来说是不透明的，但它们可以用来构建自动部署、重启服务或者其他行动的脚本。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-http-addr：http服务的地址，agent可以链接上来发送命令，如果没有设置，则默认是127.0.0.1:8500。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-datacenter：数据中心。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-name：事件的名称")]),s(`
`),n("span",{class:"line"},[n("span",null,"-node：一个正则表达式，用来过滤节点")]),s(`
`),n("span",{class:"line"},[n("span",null,"-service：一个正则表达式，用来过滤节点上匹配的服务")]),s(`
`),n("span",{class:"line"},[n("span",null,"-tag：一个正则表达式，用来过滤节点上符合tag的服务，必须和-service一起使用。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"exec",tabindex:"-1"},[s("exec "),n("a",{class:"header-anchor",href:"#exec","aria-label":'Permalink to "exec"'},"​")],-1),n("p",null,[n("code",null,"exec"),s("指令提供了一种远程执行机制，比如你要在所有的机器上执行uptime命令，远程执行的工作通过job来指定，存储在KV中，agent使用event系统可以快速的知道有新的job产生，消息是通过gossip协议来传递的，因此消息传递是最佳的，但是并不保证命令的执行。事件通过gossip来驱动，远程执行依赖KV存储系统(就像消息代理一样)。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-http-addr：http服务的地址，agent可以链接上来发送命令，如果没有设置，则默认是127.0.0.1:8500。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-datacenter：数据中心。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-prefix：key在KV系统中的前缀，用来存储请求数据，默认是_rexec")]),s(`
`),n("span",{class:"line"},[n("span",null,"-node：一个正则表达式，用来过滤节点，评估事件")]),s(`
`),n("span",{class:"line"},[n("span",null,"-service：一个正则表达式，用来过滤节点上匹配的服务")]),s(`
`),n("span",{class:"line"},[n("span",null,"-tag：一个正则表达式，用来过滤节点上符合tag的服务，必须和-service一起使用。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-wait：在节点多长时间没有响应后，认为job已经完成。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-wait-repl：")]),s(`
`),n("span",{class:"line"},[n("span",null,"-verbose：输出更多信息")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"force-leave",tabindex:"-1"},[s("force-leave "),n("a",{class:"header-anchor",href:"#force-leave","aria-label":'Permalink to "force-leave"'},"​")],-1),n("p",null,[n("code",null,"force-leave"),s("治疗可以强制consul集群中的成员进入left状态(空闲状态)，记住，即使一个成员处于活跃状态，它仍旧可以再次加入集群中，这个方法的真实目的是强制移除failed的节点。如果failed的节点还是网络的一部分，则consul会周期性的重新链接failed的节点，如果经过一段时间后(默认是72小时)，consul则会宣布停止尝试链接failed的节点。force-leave指令可以快速的把failed节点转换到left状态。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-rpc-addr:一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"info",tabindex:"-1"},[s("info "),n("a",{class:"header-anchor",href:"#info","aria-label":'Permalink to "info"'},"​")],-1),n("p",null,[n("code",null,"info"),s("指令提供了各种操作时可以用到的debug信息，对于client和server，info有返回不同的子系统信息，目前有以下几个KV信息：agent(提供agent信息)，consul(提供consul库的信息)，raft(提供raft库的信息)，serf_lan(提供LAN gossip pool),serf_wan(提供WAN gossip pool)")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"join",tabindex:"-1"},[s("join "),n("a",{class:"header-anchor",href:"#join","aria-label":'Permalink to "join"'},"​")],-1),n("p",null,[n("code",null,"join"),s("指令告诉consul agent加入一个已经存在的集群中，一个新的consul agent必须加入一个已经有至少一个成员的集群中，这样它才能加入已经存在的集群中，如果你不加入一个已经存在的集群，则agent是它自身集群的一部分，其他agent则可以加入进来。agents可以加入其他agent多次。consul join [options] address。如果你想加入多个集群，则可以写多个地址，consul会加入所有的地址。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-wan：agent运行在server模式，xxxxxxx")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"keygen",tabindex:"-1"},[s("keygen "),n("a",{class:"header-anchor",href:"#keygen","aria-label":'Permalink to "keygen"'},"​")],-1),n("p",null,[n("code",null,"keygen"),s("指令生成加密的密钥，可以用在consul agent通讯加密")],-1),n("p",null,"生成一个key",-1),n("h2",{id:"leave",tabindex:"-1"},[s("leave "),n("a",{class:"header-anchor",href:"#leave","aria-label":'Permalink to "leave"'},"​")],-1),n("p",null,[n("code",null,"leave"),s("指令触发一个优雅的离开动作并关闭agent，节点离开后不会尝试重新加入集群中。运行在server状态的节点，节点会被优雅的删除，这是很严重的，在某些情况下一个不优雅的离开会影响到集群的可用性。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-rpc-addr:一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"members",tabindex:"-1"},[s("members "),n("a",{class:"header-anchor",href:"#members","aria-label":'Permalink to "members"'},"​")],-1),n("p",null,[n("code",null,"members"),s("指令输出consul agent目前所知道的所有的成员以及它们的状态，节点的状态只有alive、left、failed三种状态。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-detailed：输出每个节点更详细的信息。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-status：过滤出符合正则规则的节点")]),s(`
`),n("span",{class:"line"},[n("span",null,"-wan：xxxxxx")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"monitor",tabindex:"-1"},[s("monitor "),n("a",{class:"header-anchor",href:"#monitor","aria-label":'Permalink to "monitor"'},"​")],-1),n("p",null,[n("code",null,"monitor"),s("指令用来链接运行的agent，并显示日志。monitor会显示最近的日志，并持续的显示日志流，不会自动退出，除非你手动或者远程agent自己退出。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-log-level：显示哪个级别的日志，默认是info")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"reload",tabindex:"-1"},[s("reload "),n("a",{class:"header-anchor",href:"#reload","aria-label":'Permalink to "reload"'},"​")],-1),n("p",null,[n("code",null,"reload"),s("指令可以重新加载agent的配置文件。SIGHUP指令在重新加载配置文件时使用，任何重新加载的错误都会写在agent的log文件中，并不会打印到屏幕。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"version",tabindex:"-1"},[s("version "),n("a",{class:"header-anchor",href:"#version","aria-label":'Permalink to "version"'},"​")],-1),n("p",null,"打印consul的版本",-1),n("h2",{id:"watch",tabindex:"-1"},[s("watch "),n("a",{class:"header-anchor",href:"#watch","aria-label":'Permalink to "watch"'},"​")],-1),n("p",null,[n("code",null,"watch"),s("指令提供了一个机制，用来监视实际数据视图的改变(节点列表、成员服务、KV)，如果没有指定进程，当前值会被dump出来")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-http-addr：http服务的地址，agent可以链接上来发送命令，如果没有设置，则默认是127.0.0.1:8500。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-datacenter：数据中心查询。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-token：ACL token")]),s(`
`),n("span",{class:"line"},[n("span",null,"-key：监视key，只针对key类型")]),s(`
`),n("span",{class:"line"},[n("span",null,"-name：监视event，只针对event类型")]),s(`
`),n("span",{class:"line"},[n("span",null,"-prefix：监视key prefix，只针对keyprefix类型")]),s(`
`),n("span",{class:"line"},[n("span",null,"-service：监控service，只针对service类型")]),s(`
`),n("span",{class:"line"},[n("span",null,"-state：过略check state")]),s(`
`),n("span",{class:"line"},[n("span",null,"-tag：过滤service tag")]),s(`
`),n("span",{class:"line"},[n("span",null,"-type：监控类型，一般有key、keyprefix、service、nodes、checks、event")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h1",{id:"consul-配置",tabindex:"-1"},[s("Consul 配置 "),n("a",{class:"header-anchor",href:"#consul-配置","aria-label":'Permalink to "Consul 配置"'},"​")],-1),n("p",null,"agent有各种各样的配置项可以在命令行或者配置文件进行定义，所有的配置项都是可选择的，当加载配置文件的时候，consul从配置文件或者配置目录加载配置。后面定义的配置会合并前面定义的配置，但是大多数情况下，合并的意思是后面定义的配置会覆盖前面定义的配置，但是有些情况，例如event句柄，合并仅仅是添加到前面定义的句柄后面。consul重新加载配置文件也支持以信号的方式接收update信号。",-1),n("p",null,"下面看看命令行参数：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-advertise：通知展现地址用来改变我们给集群中的其他节点展现的地址，一般情况下-bind地址就是展现地址")]),s(`
`),n("span",{class:"line"},[n("span",null,"-bootstrap：用来控制一个server是否在bootstrap模式，在一个datacenter中只能有一个server处于bootstrap模式，当一个server处于bootstrap模式时，可以自己选举为raft leader。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-bootstrap-expect：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap公用")]),s(`
`),n("span",{class:"line"},[n("span",null,"-bind：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0")]),s(`
`),n("span",{class:"line"},[n("span",null,"-client：consul绑定在哪个client地址上，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1")]),s(`
`),n("span",{class:"line"},[n("span",null,"-config-file：明确的指定要加载哪个配置文件")]),s(`
`),n("span",{class:"line"},[n("span",null,"-config-dir：配置文件目录，里面所有以.json结尾的文件都会被加载")]),s(`
`),n("span",{class:"line"},[n("span",null,"-data-dir：提供一个目录用来存放agent的状态，所有的agent允许都需要该目录，该目录必须是稳定的，系统重启后都继续存在")]),s(`
`),n("span",{class:"line"},[n("span",null,"-dc：该标记控制agent允许的datacenter的名称，默认是dc1")]),s(`
`),n("span",{class:"line"},[n("span",null,"-encrypt：指定secret key，使consul在通讯时进行加密，key可以通过consul keygen生成，同一个集群中的节点必须使用相同的key")]),s(`
`),n("span",{class:"line"},[n("span",null,"-join：加入一个已经启动的agent的ip地址，可以多次指定多个agent的地址。如果consul不能加入任何指定的地址中，则agent会启动失败，默认agent启动时不会加入任何节点。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-retry-join：和join类似，但是允许你在第一次失败后进行尝试。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-retry-interval：两次join之间的时间间隔，默认是30s")]),s(`
`),n("span",{class:"line"},[n("span",null,"-retry-max：尝试重复join的次数，默认是0，也就是无限次尝试")]),s(`
`),n("span",{class:"line"},[n("span",null,"-log-level：consul agent启动后显示的日志信息级别。默认是info，可选：trace、debug、info、warn、err。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-node：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名")]),s(`
`),n("span",{class:"line"},[n("span",null,"-protocol：consul使用的协议版本")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rejoin：使consul忽略先前的离开，在再次启动后仍旧尝试加入集群中。")]),s(`
`),n("span",{class:"line"},[n("span",null,"-server：定义agent运行在server模式，每个集群至少有一个server，建议每个集群的server不要超过5个")]),s(`
`),n("span",{class:"line"},[n("span",null,"-syslog：开启系统日志功能，只在linux/osx上生效")]),s(`
`),n("span",{class:"line"},[n("span",null,"-ui-dir:提供存放web ui资源的路径，该目录必须是可读的")]),s(`
`),n("span",{class:"line"},[n("span",null,"-pid-file:提供一个路径来存放pid文件，可以使用该文件进行SIGINT/SIGHUP(关闭/更新)agent")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"除了命令行参数外，配置也可以写入文件中，在某些情况下配置文件会更简单一些，例如：利用consul被用来管理系统。配置文件是json格式的，很容易编写。配置文件不仅被用来设置agent的启动，也可以用来提供健康检测和服务发现的定义。配置文件的一般样例如下：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,'  "datacenter": "dc1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "data_dir": "/opt/consul",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "log_level": "INFO",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "node_name": "s1",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "server": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "bootstrap_expect": 3,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "bind_addr": "10.201.102.198",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "client_addr": "0.0.0.0",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "ui_dir": "/root/consul_ui",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "retry_join": ["10.201.102.198","10.201.102.199","10.201.102.200","10.201.102.248"],')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "retry_interval": "30s",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "enable_debug": false,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "rejoin_after_leave": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "start_join": ["10.201.102.198","10.201.102.199","10.201.102.200","10.201.102.248"],')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "enable_syslog": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "syslog_facility": "local5"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"下面看看详细的配置文件参数：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"acl_datacenter：只用于server，指定的datacenter的权威ACL信息，所有的servers和datacenter必须同意ACL datacenter")]),s(`
`),n("span",{class:"line"},[n("span",null,"acl_default_policy：默认是allow")]),s(`
`),n("span",{class:"line"},[n("span",null,"acl_down_policy：")]),s(`
`),n("span",{class:"line"},[n("span",null,"acl_master_token：")]),s(`
`),n("span",{class:"line"},[n("span",null,"acl_token：agent会使用这个token和consul server进行请求")]),s(`
`),n("span",{class:"line"},[n("span",null,"acl_ttl：控制TTL的cache，默认是30s")]),s(`
`),n("span",{class:"line"},[n("span",null,"addresses：一个嵌套对象，可以设置以下key：dns、http、rpc")]),s(`
`),n("span",{class:"line"},[n("span",null,"advertise_addr：等同于-advertise")]),s(`
`),n("span",{class:"line"},[n("span",null,"bootstrap：等同于-bootstrap")]),s(`
`),n("span",{class:"line"},[n("span",null,"bootstrap_expect：等同于-bootstrap-expect")]),s(`
`),n("span",{class:"line"},[n("span",null,"bind_addr：等同于-bind")]),s(`
`),n("span",{class:"line"},[n("span",null,"ca_file：提供CA文件路径，用来检查客户端或者服务端的链接")]),s(`
`),n("span",{class:"line"},[n("span",null,"cert_file：必须和key_file一起")]),s(`
`),n("span",{class:"line"},[n("span",null,"check_update_interval：")]),s(`
`),n("span",{class:"line"},[n("span",null,"client_addr：等同于-client")]),s(`
`),n("span",{class:"line"},[n("span",null,"datacenter：等同于-dc")]),s(`
`),n("span",{class:"line"},[n("span",null,"data_dir：等同于-data-dir")]),s(`
`),n("span",{class:"line"},[n("span",null,"disable_anonymous_signature：在进行更新检查时禁止匿名签名")]),s(`
`),n("span",{class:"line"},[n("span",null,"disable_remote_exec：禁止支持远程执行，设置为true，agent会忽视所有进入的远程执行请求")]),s(`
`),n("span",{class:"line"},[n("span",null,"disable_update_check：禁止自动检查安全公告和新版本信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"dns_config：是一个嵌套对象，可以设置以下参数：allow_stale、max_stale、node_ttl 、service_ttl、enable_truncate")]),s(`
`),n("span",{class:"line"},[n("span",null,"domain：默认情况下consul在进行DNS查询时，查询的是consul域，可以通过该参数进行修改")]),s(`
`),n("span",{class:"line"},[n("span",null,"enable_debug：开启debug模式")]),s(`
`),n("span",{class:"line"},[n("span",null,"enable_syslog：等同于-syslog")]),s(`
`),n("span",{class:"line"},[n("span",null,"encrypt：等同于-encrypt")]),s(`
`),n("span",{class:"line"},[n("span",null,"key_file：提供私钥的路径")]),s(`
`),n("span",{class:"line"},[n("span",null,"leave_on_terminate：默认是false，如果为true，当agent收到一个TERM信号的时候，它会发送leave信息到集群中的其他节点上。")]),s(`
`),n("span",{class:"line"},[n("span",null,"log_level：等同于-log-level")]),s(`
`),n("span",{class:"line"},[n("span",null,"node_name:等同于-node")]),s(`
`),n("span",{class:"line"},[n("span",null,"ports：这是一个嵌套对象，可以设置以下key：dns(dns地址：8600)、http(http api地址：8500)、rpc(rpc:8400)、serf_lan(lan port:8301)、serf_wan(wan port:8302)、server(server rpc:8300)")]),s(`
`),n("span",{class:"line"},[n("span",null,"protocol：等同于-protocol")]),s(`
`),n("span",{class:"line"},[n("span",null,"recursor：")]),s(`
`),n("span",{class:"line"},[n("span",null,"rejoin_after_leave：等同于-rejoin")]),s(`
`),n("span",{class:"line"},[n("span",null,"retry_join：等同于-retry-join")]),s(`
`),n("span",{class:"line"},[n("span",null,"retry_interval：等同于-retry-interval")]),s(`
`),n("span",{class:"line"},[n("span",null,"server：等同于-server")]),s(`
`),n("span",{class:"line"},[n("span",null,"server_name：会覆盖TLS CA的node_name，可以用来确认CA name和hostname相匹配")]),s(`
`),n("span",{class:"line"},[n("span",null,"skip_leave_on_interrupt：和leave_on_terminate比较类似，不过只影响当前句柄")]),s(`
`),n("span",{class:"line"},[n("span",null,"start_join：一个字符数组提供的节点地址会在启动时被加入")]),s(`
`),n("span",{class:"line"},[n("span",null,"statsd_addr：")]),s(`
`),n("span",{class:"line"},[n("span",null,"statsite_addr：")]),s(`
`),n("span",{class:"line"},[n("span",null,"syslog_facility：当enable_syslog被提供后，该参数控制哪个级别的信息被发送，默认Local0")]),s(`
`),n("span",{class:"line"},[n("span",null,"ui_dir：等同于-ui-dir")]),s(`
`),n("span",{class:"line"},[n("span",null,"verify_incoming：默认false，如果为true，则所有进入链接都需要使用TLS，需要客户端使用ca_file提供ca文件，只用于consul server端，因为client从来没有进入的链接")]),s(`
`),n("span",{class:"line"},[n("span",null,"verify_outgoing：默认false，如果为true，则所有出去链接都需要使用TLS，需要服务端使用ca_file提供ca文件，consul server和client都需要使用，因为两者都有出去的链接")]),s(`
`),n("span",{class:"line"},[n("span",null,"watches：watch一个详细名单")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h1",{id:"http-api",tabindex:"-1"},[s("HTTP API "),n("a",{class:"header-anchor",href:"#http-api","aria-label":'Permalink to "HTTP API"'},"​")],-1),n("p",null,"consul的主要接口是RESTful HTTP API，该API可以用来增删查改nodes、services、checks、configguration。所有的endpoints主要分为以下类别：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"kv - Key/Value存储")]),s(`
`),n("span",{class:"line"},[n("span",null,"agent - Agent控制")]),s(`
`),n("span",{class:"line"},[n("span",null,"catalog - 管理nodes和services")]),s(`
`),n("span",{class:"line"},[n("span",null,"health - 管理健康监测")]),s(`
`),n("span",{class:"line"},[n("span",null,"session - Session操作")]),s(`
`),n("span",{class:"line"},[n("span",null,"acl - ACL创建和管理")]),s(`
`),n("span",{class:"line"},[n("span",null,"event - 用户Events")]),s(`
`),n("span",{class:"line"},[n("span",null,"status - Consul系统状态")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"下面我们就单独看看每个模块的具体内容。",-1),n("h2",{id:"agent-1",tabindex:"-1"},[s("agent "),n("a",{class:"header-anchor",href:"#agent-1","aria-label":'Permalink to "agent"'},"​")],-1),n("p",null,"agent endpoints用来和本地agent进行交互，一般用来服务注册和检查注册，支持以下接口",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/agent/checks : 返回本地agent注册的所有检查(包括配置文件和HTTP接口)")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/services : 返回本地agent注册的所有 服务")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/members : 返回agent在集群的gossip pool中看到的成员")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/self : 返回本地agent的配置和成员信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/join/<address> : 触发本地agent加入node")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/force-leave/<node>>: 强制删除node")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/check/register : 在本地agent增加一个检查项，使用PUT方法传输一个json格式的数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/check/deregister/<checkID> : 注销一个本地agent的检查项")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/check/pass/<checkID> : 设置一个本地检查项的状态为passing")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/check/warn/<checkID> : 设置一个本地检查项的状态为warning")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/check/fail/<checkID> : 设置一个本地检查项的状态为critical")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/service/register : 在本地agent增加一个新的服务项，使用PUT方法传输一个json格式的数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/agent/service/deregister/<serviceID> : 注销一个本地agent的服务项")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"catalog",tabindex:"-1"},[s("catalog "),n("a",{class:"header-anchor",href:"#catalog","aria-label":'Permalink to "catalog"'},"​")],-1),n("p",null,"catalog endpoints用来注册/注销nodes、services、checks",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/catalog/register : Registers a new node, service, or check")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/catalog/deregister : Deregisters a node, service, or check")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/catalog/datacenters : Lists known datacenters")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/catalog/nodes : Lists nodes in a given DC")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/catalog/services : Lists services in a given DC")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/catalog/service/<service> : Lists the nodes in a given service")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/catalog/node/<node> : Lists the services provided by a node")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"health",tabindex:"-1"},[s("health "),n("a",{class:"header-anchor",href:"#health","aria-label":'Permalink to "health"'},"​")],-1),n("p",null,"health endpoints用来查询健康状况相关信息，该功能从catalog中单独分离出来",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/healt/node/<node>: 返回node所定义的检查，可用参数?dc=")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/health/checks/<service>: 返回和服务相关联的检查，可用参数?dc=")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/health/service/<service>: 返回给定datacenter中给定node中service")]),s(`
`),n("span",{class:"line"},[n("span",null,'/v1/health/state/<state>: 返回给定datacenter中指定状态的服务，state可以是"any", "unknown", "passing", "warning", or "critical"，可用参数?dc=')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"session",tabindex:"-1"},[s("session "),n("a",{class:"header-anchor",href:"#session","aria-label":'Permalink to "session"'},"​")],-1),n("p",null,"session endpoints用来create、update、destory、query sessions",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/session/create: Creates a new session")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/session/destroy/<session>: Destroys a given session")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/session/info/<session>: Queries a given session")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/session/node/<node>: Lists sessions belonging to a node")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/session/list: Lists all the active sessions")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"acl",tabindex:"-1"},[s("acl "),n("a",{class:"header-anchor",href:"#acl","aria-label":'Permalink to "acl"'},"​")],-1),n("p",null,"acl endpoints用来create、update、destory、query acl",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/acl/create: Creates a new token with policy")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/acl/update: Update the policy of a token")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/acl/destroy/<id>: Destroys a given token")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/acl/info/<id>: Queries the policy of a given token")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/acl/clone/<id>: Creates a new token by cloning an existing token")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/acl/list: Lists all the active tokens")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"event-1",tabindex:"-1"},[s("event "),n("a",{class:"header-anchor",href:"#event-1","aria-label":'Permalink to "event"'},"​")],-1),n("p",null,"event endpoints用来fire新的events、查询已有的events",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/event/fire/<name>: 触发一个新的event，用户event需要name和其他可选的参数，使用PUT方法")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/event/list: 返回agent知道的events")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"status",tabindex:"-1"},[s("status "),n("a",{class:"header-anchor",href:"#status","aria-label":'Permalink to "status"'},"​")],-1),n("p",null,"status endpoints用来或者consul 集群的信息",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/v1/status/leader : 返回当前集群的Raft leader")]),s(`
`),n("span",{class:"line"},[n("span",null,"/v1/status/peers : 返回当前集群中同事")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h1",{id:"consul-template",tabindex:"-1"},[s("Consul-Template "),n("a",{class:"header-anchor",href:"#consul-template","aria-label":'Permalink to "Consul-Template"'},"​")],-1),n("p",null,"在consul-template没出现之前，大家构建服务发现系统，大多采用的是zookeeper、etcd+confd这样类似的系统，之前写过一篇consul+confd的文，讲的是如何动态生成配置文件的，如今consul官方推出了自己的模板系统，就是consul-template，这样的话动态的配置系统可以分化为etcd+confd和consul+consul-template两大阵营。consul是一个和etcd类似但又强于etcd的系统，关于etcd和consul可以翻阅以前的文章，consul-template的定位就和confd差不多一样了，confd的后端可以是etcd或者consul，相信consul搭配consul-template能发挥更大的效果。consul-template提供了一个便捷的方式从consul中获取存储的值，consul-template守护进程会查询consul实例，来更新系统上指定的任何模板，当更新完成后，模板可以选择运行一些任意的命令。",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"    consul template的使用场景：consul template可以查询consul中的服务目录、key、key-values等。这种强大的抽象功能和查询语言模板可以使consul template特别适合动态的创建配置文件。例如：创建apache/nginx proxy balancers、haproxy backends、varnish servers、application configurations。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"consul template的特性：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"    quiescence：consul template内制静止平衡功能，可以智能的发现consul实例中的更改信息。这个功能可以防止频繁的更新模板而引起系统的波动。")]),s(`
`),n("span",{class:"line"},[n("span",null,"    dry mode：不确定当前架构的状态？担心模板的变化会破坏子系统？无须担心，因为consul template还有-dry模式。在dry模式，consul template会将结果呈现在STDOUT，所以操作员可以检查输出是否正常，以决定更换模板是否安全")]),s(`
`),n("span",{class:"line"},[n("span",null,"    CLI and Config：如果你喜欢在命令行上指定一切，consul template都可以hold住。随着内置HCL的支持，consul template接收一个配置文件，命令行参数，或者两者的混合。通过这种方式你可以继续使用你现在已有的配置管理工具和consul template来配合。")]),s(`
`),n("span",{class:"line"},[n("span",null,"    verbose debugging：即使每件事你都做的近乎完美，但是有时候还是会有失败发生。consul template可以提供更详细的debug日志信息。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"安装",tabindex:"-1"},[s("安装 "),n("a",{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},"​")],-1),n("p",null,[s("你可以在"),n("a",{href:"https://releases.hashicorp.com/consul-template/",target:"_blank",rel:"noreferrer"},"发布页"),s("下载发布包.如果你希望自己编译请查看"),n("a",{href:"https://github.com/hashicorp/consul-template#contributing",target:"_blank",rel:"noreferrer"},"说明文档"),s(".")],-1),n("h2",{id:"使用",tabindex:"-1"},[s("使用 "),n("a",{class:"header-anchor",href:"#使用","aria-label":'Permalink to "使用"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"-auth=<user[:pass]>      设置基本的认证用户名和密码")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -consul-addr=<address>   设置Consul实例的地址")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -max-stale=<duration>    查询过期的最大频率，默认是1s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -dedup                   启用重复数据删除，当许多consul template实例渲染一个模板的时候可以降低consul的负载")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ssl                     使用https连接Consul使用SSL")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ssl-verify              通过SSL连接的时候检查证书")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ssl-cert                SSL客户端证书发送给服务器")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ssl-key                 客户端认证时使用的SSL/TLS私钥")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -ssl-ca-cert             验证服务器的CA证书列表")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -token=<token>           设置Consul API的token")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -syslog                  把标准输出和标准错误重定向到syslog，syslog的默认级别是local0。")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -syslog-facility=<f>     设置syslog级别，默认是local0，必须和-syslog配合使用")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -template=<template>     增加一个需要监控的模板，格式是：'templatePath:outputPath(:command)'，多个模板则可以设置多次")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -wait=<duration>         当呈现一个新的模板到系统和触发一个命令的时候，等待的最大最小时间。如果最大值被忽略，默认是最小值的4倍。")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -retry=<duration>        当在和consul api交互的返回值是error的时候，等待的时间，默认是5s。")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -config=<path>           配置文件或者配置目录的路径")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -pid-file=<path>         PID文件的路径")]),s(`
`),n("span",{class:"line"},[n("span",null,'  -log-level=<level>       设置日志级别，可以是"debug","info", "warn" (default), and "err"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  -dry                     Dump生成的模板到标准输出，不会生成到磁盘")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -once                    运行consul-template一次后退出，不以守护进程运行")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -reap                    子进程自动收割123456789101112131415161718192021")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"查看全部选项,使用以下命令",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"consul-template -h")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"命令行",tabindex:"-1"},[s("命令行 "),n("a",{class:"header-anchor",href:"#命令行","aria-label":'Permalink to "命令行"'},"​")],-1),n("p",null,"1、查询本地consl实例，生成模板后重启nginx，如果consul不可用，如果api故障则每30s尝试检测一次值，consul-template运行一次后退出",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'consul-template -retry 30s -once -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"test.ctmpl",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range service "Faceid"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"{{.ID}} {{.Address}}:{{.Port}} check inter 5000 fall 1 rise 2 weight 2{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"test.out",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"Faceid 10.201.102.198:9000 check inter 5000 fall 1 rise 2 weight 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"Faceid 10.201.102.199:9000 check inter 5000 fall 1 rise 2 weight 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"Faceid 10.201.102.200:9000 check inter 5000 fall 1 rise 2 weight 2")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"2、运行consul-temple作为一个服务",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'consul-template -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"3、查询一个实例，渲染多个模板，然后重启相关服务",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'consul-template -retry 30s -once -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"\\')]),s(`
`),n("span",{class:"line"},[n("span",null,' -template "/tmp/redis.ctmpl:/var/redis/redis.conf:service redis restart" \\')]),s(`
`),n("span",{class:"line"},[n("span",null,' -template "/tmp/haproxy.ctmpl:/var/haproxy/haproxy.conf"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"4、查询一个实例，dump模板到标准输出，参数中的-template则会被忽略",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'consul-template -dry -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"以上参数除了在命令行使用，也可以直接配置在文件中，下面看看Consul-Template的配置文件，简称HCL(HashiCorp Configuration Language)，它是和JSON兼容的，下面看个例子：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#### 配置文件")]),s(`
`),n("span",{class:"line"},[n("span",null,"​```Consul-Template```配置文件是使用[HashiCorp Configuration Language (HCL)](https://github.com/hashicorp/hcl)编写的.这意味着```Consul Template```是和JSON兼容的,查看更多信息请查看 [HCL 规范](https://github.com/hashicorp/hcl)")]),s(`
`),n("span",{class:"line"},[n("span",null,"配置文件语法支持上面的所有的选项,除非在表格中进行标明.")]),s(`
`),n("span",{class:"line"},[n("span",null,"​```json")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是要连接的Consul Agent的地址.默认为127.0.0.1:8500.这是Consul的默认绑定地址和端口.")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 不建议你直接与 Consul的 Server直接进行交互,请与本地的Consul Agent进行交互.这样做是有一些原因")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 最重要的是本地agent可以复用与server的连接.减少HTTP的连接数.另外这个地址更好记.")]),s(`
`),n("span",{class:"line"},[n("span",null,'consul = "127.0.0.1:8500"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是用于连接Consul的ACL token. 如果你的集群未启用就不需要设置.")]),s(`
`),n("span",{class:"line"},[n("span",null,"//")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这个选项也可以通过环境变量 CONSUL_TOKEN 来进行设置")]),s(`
`),n("span",{class:"line"},[n("span",null,'token = "abcd1234"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是监听出发reload事件的信号,默认值如下所示.将这个值设置为空将引起 CT ,从而不监听reload事件")]),s(`
`),n("span",{class:"line"},[n("span",null,'reload_signal = "SIGHUP"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是监听出发core dump事件的信号,默认值如下所示.将这个值设置为空将引起 CT ,从而不监听core dump信号")]),s(`
`),n("span",{class:"line"},[n("span",null,'dump_signal = "SIGQUIT"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是监听出发graceful stop事件的信号,默认值如下所示.将这个值设置为空将引起 CT ,从而不监听graceful stop信号")]),s(`
`),n("span",{class:"line"},[n("span",null,'kill_signal = "SIGINT"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是连接Consul的重试时间.Consul Template是高容错的设计.这意味着,出现失败他不会退出.而按照")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 分布式系统的惯例进行指数补偿和重试来等待集群恢复.")]),s(`
`),n("span",{class:"line"},[n("span",null,'retry = "10s"')]),s(`
`),n("span",{class:"line"},[n("span",null,'// This is the maximum interval to allow "stale" data. By default, only the')]),s(`
`),n("span",{class:"line"},[n("span",null,"// Consul leader will respond to queries; any requests to a follower will")]),s(`
`),n("span",{class:"line"},[n("span",null,"// forward to the leader. In large clusters with many requests, this is not as")]),s(`
`),n("span",{class:"line"},[n("span",null,"// scalable, so this option allows any follower to respond to a query, so long")]),s(`
`),n("span",{class:"line"},[n("span",null,"// as the last-replicated data is within these bounds. Higher values result in")]),s(`
`),n("span",{class:"line"},[n("span",null,"// less cluster load, but are more likely to have outdated data.")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是允许陈旧数据的最大时间.Consul默认只有领袖对请求进行相应.所有对追随者的请求将被转发给领袖.")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 在有大量请求的大型集群中,这显得不够有扩展性.所以这个选项允许任何追随者响应查询,只要最后复制的数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 在这个范围内.数值越高,越减少集群负载,但是更容易接受到过期数据.")]),s(`
`),n("span",{class:"line"},[n("span",null,'max_stale = "10m"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是log的等级,如果你找到了bug,请打开debug 日志,这样我们可以更好的定位问题.这个选项也可用在命令行.")]),s(`
`),n("span",{class:"line"},[n("span",null,'log_level = "warn"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是存放Consul Template 进程的PID文件的路径,如果你计划发送定制的信号到这个进程这会比较有用.")]),s(`
`),n("span",{class:"line"},[n("span",null,'pid_file = "/path/to/pid"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是一个静止定时器,他定义了在模板渲染之前等待集群达到一致状态的最小和最大时间.")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这对于一些变化较大的系统中比较有用,可以减少模板渲染的次数")]),s(`
`),n("span",{class:"line"},[n("span",null,'wait = "5s:10s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这是 Vault配置的开始")]),s(`
`),n("span",{class:"line"},[n("span",null,"// Vault是HashiCorp的另外一个产品")]),s(`
`),n("span",{class:"line"},[n("span",null,"vault {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the address of the Vault leader. The protocol (http(s)) portion")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // of the address is required.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  address = "https://vault.service.consul:8200"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the token to use when communicating with the Vault server.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // Like other tools that integrate with Vault, Consul Template makes the")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // assumption that you provide it with a Vault token; it does not have the")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // incorporated logic to generate tokens via Vault's auth methods.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  //")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This value can also be specified via the environment variable VAULT_TOKEN.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  token = "abcd1234"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This option tells Consul Template to automatically renew the Vault token")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // given. If you are unfamiliar with Vault's architecture, Vault requires")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // tokens be renewed at some regular interval or they will be revoked. Consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // Template will automatically renew the token at half the lease duration of")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // the token. The default value is true, but this option can be disabled if")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // you want to renew the Vault token using an out-of-band process.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  //")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // Note that secrets specified in a template (using {{secret}} for example)")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // are always renewed, even if this option is set to false. This option only")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // applies to the top-level Vault token itself.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  renew = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This section details the SSL options for connecting to the Vault server.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // Please see the SSL options below for more information (they are the same).")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ssl {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这部分配置请求的基本的权限验证信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"auth {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  enabled  = true")]),s(`
`),n("span",{class:"line"},[n("span",null,'  username = "test"')]),s(`
`),n("span",{class:"line"},[n("span",null,'  password = "test"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这部分配置连接到Consul服务器的SSL信息.")]),s(`
`),n("span",{class:"line"},[n("span",null,"ssl {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 使用SSL需要先打开这个开关")]),s(`
`),n("span",{class:"line"},[n("span",null,"  enabled = true")]),s(`
`),n("span",{class:"line"},[n("span",null,'  // This enables SSL peer verification. The default value is "true", which')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // will check the global CA chain to make sure the given certificates are")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // valid. If you are using a self-signed certificate that you have not added")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // to the CA chain, you may want to disable SSL verification. However, please")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // understand this is a potential security vulnerability.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  verify = false")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the path to the certificate to use to authenticate. If just a")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // certificate is provided, it is assumed to contain both the certificate and")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // the key to convert to an X509 certificate. If both the certificate and")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // key are specified, Consul Template will automatically combine them into an")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // X509 certificate for you.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  cert = "/path/to/client/cert"')]),s(`
`),n("span",{class:"line"},[n("span",null,'  key = "/path/to/client/key"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the path to the certificate authority to use as a CA. This is")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // useful for self-signed certificates or for organizations using their own")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // internal certificate authority.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  ca_cert = "/path/to/ca"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 设置连接到syslog服务器的配置")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 用于进行日志记录syslog {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 打开开关")]),s(`
`),n("span",{class:"line"},[n("span",null,"  enabled = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 设备名称")]),s(`
`),n("span",{class:"line"},[n("span",null,'  facility = "LOCAL5"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"// This block defines the configuration for de-duplication mode. Please see the")]),s(`
`),n("span",{class:"line"},[n("span",null,"// de-duplication mode documentation later in the README for more information")]),s(`
`),n("span",{class:"line"},[n("span",null,"// on how de-duplication mode operates.")]),s(`
`),n("span",{class:"line"},[n("span",null,"deduplicate {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This enables de-duplication mode. Specifying any other options also enables")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // de-duplication mode.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  enabled = true")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the prefix to the path in Consul's KV store where de-duplication")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // templates will be pre-rendered and stored.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  prefix = "consul-template/dedup/"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"// This block defines the configuration for exec mode. Please see the exec mode")]),s(`
`),n("span",{class:"line"},[n("span",null,"// documentation at the bottom of this README for more information on how exec")]),s(`
`),n("span",{class:"line"},[n("span",null,"// mode operates and the caveats of this mode.")]),s(`
`),n("span",{class:"line"},[n("span",null,"exec {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the command to exec as a child process. There can be only one")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // command per Consul Template process.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  command = "/usr/bin/app"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is a random splay to wait before killing the command. The default")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // value is 0 (no wait), but large clusters should consider setting a splay")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // value to prevent all child processes from reloading at the same time when")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // data changes occur. When this value is set to non-zero, Consul Template")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // will wait a random period of time up to the splay value before reloading")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // or killing the child process. This can be used to prevent the thundering")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // herd problem on applications that do not gracefully reload.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  splay = "5s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This defines the signal that will be sent to the child process when a")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // change occurs in a watched template. The signal will only be sent after")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // the process is started, and the process will only be started after all")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // dependent templates have been rendered at least once. The default value")]),s(`
`),n("span",{class:"line"},[n("span",null,'  // is "" (empty or nil), which tells Consul Template to restart the child')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // process instead of sending it a signal. This is useful for legacy")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // applications or applications that cannot properly reload their")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // configuration without a full reload.")]),s(`
`),n("span",{class:"line"},[n("span",null,'  reload_signal = "SIGUSR1"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This defines the signal sent to the child process when Consul Template is")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // gracefully shutting down. The application should begin a graceful cleanup.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // If the application does not terminate before the `kill_timeout`, it will")]),s(`
`),n("span",{class:"line"},[n("span",null,'  // be terminated (effectively "kill -9"). The default value is "SIGTERM".')]),s(`
`),n("span",{class:"line"},[n("span",null,'  kill_signal = "SIGINT"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This defines the amount of time to wait for the child process to gracefully")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // terminate when Consul Template exits. After this specified time, the child")]),s(`
`),n("span",{class:"line"},[n("span",null,'  // process will be force-killed (effectively "kill -9"). The default value is')]),s(`
`),n("span",{class:"line"},[n("span",null,'  // "30s".')]),s(`
`),n("span",{class:"line"},[n("span",null,'  kill_timeout = "2s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 这部分定义了对模板的配置,和其他配置块不同.这部分可以针对不同模板配置多次.也可以在CLI命令")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 直接进行配置")]),s(`
`),n("span",{class:"line"},[n("span",null,"template {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这是输入模板的配置文件路径,必选项")]),s(`
`),n("span",{class:"line"},[n("span",null,'  source = "/path/on/disk/to/template.ctmpl"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这是源模板渲染之后存放的路径,如果父目录不存在Consul Template会尝试进行创建")]),s(`
`),n("span",{class:"line"},[n("span",null,'  destination = "/path/on/disk/where/template/will/render.txt"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // This is the optional command to run when the template is rendered. The")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // command will only run if the resulting template changes. The command must")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // return within 30s (configurable), and it must have a successful exit code.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // Consul Template is not a replacement for a process monitor or init system.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这是当模板渲染完成后可选的要执行的命令.这个命令只会在模板发生改变后才会运行.这个命令必须要在30秒")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 内进行返回(可配置),必须返回一个成功的退出码.Consul Template不能替代进程监视或者init 系统")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 的功能")]),s(`
`),n("span",{class:"line"},[n("span",null,'  command = "restart service foo"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这是最大的等待命令返回的时间,默认是30秒")]),s(`
`),n("span",{class:"line"},[n("span",null,'  command_timeout = "60s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这是渲染后的文件的权限,如果不设置,Consul Template将去匹配之前已经存在的文件的权限.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 如果文件不存在,权限会被设置为 0644")]),s(`
`),n("span",{class:"line"},[n("span",null,"  perms = 0600")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这个选项对渲染之前的文件进行备份.他保持一个备份.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这个选项在发生意外更高时,有一个回滚策略.")]),s(`
`),n("span",{class:"line"},[n("span",null,"  backup = true")]),s(`
`),n("span",{class:"line"},[n("span",null,'  // 模板的分隔符,默认是 "{{"和"}}".但是对于一些模板用其他的分隔符可能更好')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 可以避免与本身的冲突")]),s(`
`),n("span",{class:"line"},[n("span",null,'  left_delimiter  = "{{"')]),s(`
`),n("span",{class:"line"},[n("span",null,'  right_delimiter = "}}"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 这是最小和最大等待渲染一个新模板和执行命令的时间.使用 分号 个号.如果忽略最大值,最大")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 值会被设置为最小值的4倍.这个选项没有默认值.这个值相对全局所以的等待时间有最高优先级")]),s(`
`),n("span",{class:"line"},[n("span",null,'  wait = "2s:6s"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"注意"),s(": 不是所有的选项都是必选的.例如: 如果你没有使用Vault你不用设置这一块. 类似的你没有使用syslog系统你也不需要指定syslog配置.")],-1),n("p",null,[s("为了更加安全,"),n("code",null,"token"),s("也可以从环境变量里读取,使用 "),n("code",null,"CONSUL_TOKEN"),s(" 和 "),n("code",null,"VAULT_TOKEN"),s(".强烈建议你不要把token放到未加密的文本配置文件中.")],-1),n("h2",{id:"模版语法",tabindex:"-1"},[s("模版语法 "),n("a",{class:"header-anchor",href:"#模版语法","aria-label":'Permalink to "模版语法"'},"​")],-1),n("p",null,"Consul Template 使用了Go的模板语法.如果你对他的语法不熟悉建议你读下文档.他的语法看起来与 Mustache, Handlebars, 或者 Liquid 类似.",-1),n("p",null,"在Go 提供的模板函数之外,Consul Template暴露了以下的函数:",-1),n("h2",{id:"api-函数",tabindex:"-1"},[s("API 函数 "),n("a",{class:"header-anchor",href:"#api-函数","aria-label":'Permalink to "API 函数"'},"​")],-1),n("p",null,[n("strong",null,"datacenters"),s(" 查询目录中的所有数据中心.使用以下语法:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{{datacenters}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"file"),s(" 读取并输出磁盘上的本地文件,如果无法读取产生一个错误.使用如下语法")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{file "/path/to/local/file"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("这个例子将输出 "),n("code",null,"/path/to/local/file"),s(" 文件内容到模板. 注意:这不会在嵌套模板中被处理")],-1),n("p",null,[n("strong",null,"key"),s(" 查询Consul指定key的值,如果key的值不能转换为字符串,将产生错误.使用如下语法:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{key "service/redis/maxconns@east-aws"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("上面的例子查询了在"),n("code",null,"east-aws"),s("数据中心的 "),n("code",null,"service/redis/maxconns"),s("的值.如果忽略数据中心参数,将会查询本地数据中心的值:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{key "service/redis/maxconns"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"Consul键值结构的美妙在于,这完全取决于你!",-1),n("p",null,[n("strong",null,"key_or_default"),s(" 查询Consul中指定的key的值,如果key不存在,则返回默认值.使用方式如下")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{key_or_default "service/redis/maxconns@east-aws" "5"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("注意Consul Template使用了多个阶段的运算.在第一阶段的运算如果Consul没有返回值,则会一直使用默认值.后续模板解析中如果值存在了则会读取真实的值.这很重要,运维Consul Templae不会因为"),n("code",null,"key_or_default"),s("没找到key而阻塞模板的的渲染.即使key存在如果Consul没有按时返回这个数据,也会使用默认值来进行替代.")],-1),n("p",null,[n("strong",null,"ls"),s(" 查看Consul的所有以指定前缀开头的key-value对.如果有值无法转换成字符串则会产生一个错误:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range ls "service/redis@east-aws"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"{{.Key}} {{.Value}}{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("如果Consul实例在"),n("code",null,"east-aws"),s("数据中心存在这个结构"),n("code",null,"service/redis"),s(",渲染后的模板应该类似这样:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"minconns 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"maxconns 12")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"如果你忽略数据中心属性,则会返回本地数据中心的查询结果.",-1),n("p",null,[n("strong",null,"node"),s(" 查询目录中的一个节点信息")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{node "node1"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"如果未指定任何参数,则当前agent所在节点将会被返回:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{{node}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"你可以指定一个可选的参数来指定数据中心:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{node "node1" "@east-aws"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("如果指定的节点没有找到则会返回"),n("code",null,"nil"),s(".如果节点存在就会列出节点的信息和节点提供的服务.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{{with node}}{{.Node.Node}} ({{.Node.Address}}){{range .Services}}")]),s(`
`),n("span",{class:"line"},[n("span",null,'  {{.Service}} {{.Port}} ({{.Tags | join ","}}){{end}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"nodes"),s(" 查询目录中的全部节点,使用如下语法")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{{nodes}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"这个例子会查询Consul的默认数据中心.你可以使用可选参数指定一个可选参数来指定数据中心:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{nodes "@east-aws"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"这个例子会查询east-aws数据中心的所有几点.",-1),n("p",null,[n("strong",null,"secret"),s(" 查询"),n("code",null,"Vault"),s("中指定路径的密匙.如果指定的路径不存在或者"),n("code",null,"Vault"),s("的"),n("code",null,"Token"),s("没有足够权限去读取指定的路径,将会产生一个错误.如果路径存在但是key不存在则返回“.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{with secret "secret/passwords"}}{{.Data.password}}{{end}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"可以使用如下字段:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"LeaseID - the unique lease identifier")]),s(`
`),n("span",{class:"line"},[n("span",null,"LeaseDuration - the number of seconds the lease is valid")]),s(`
`),n("span",{class:"line"},[n("span",null,"Renewable - if the secret is renewable")]),s(`
`),n("span",{class:"line"},[n("span",null,`Data - the raw data - this is a map[string]interface{}, so it can be queried using Go's templating "dot notation"`)]),s(`
`),n("span",{class:"line"},[n("span",null,'If the map key has dots "." in it, you need to access the value using the index function:')]),s(`
`),n("span",{class:"line"},[n("span",null,'{{index .Data "my.key.with.dots"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"If additional arguments are passed to the function, then the operation is assumed to be a write operation instead of a read operation. The write operation must return data in order to be valid. This is especially useful for the PKI secret backend, for example.")]),s(`
`),n("span",{class:"line"},[n("span",null,'{{ with secret "pki/issue/my-domain-dot-com" "common_name=foo.example.com" }}')]),s(`
`),n("span",{class:"line"},[n("span",null,"{{ .Data.certificate }}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{ end }}")]),s(`
`),n("span",{class:"line"},[n("span",null,"The parameters must be key=value pairs, and each pair must be its own argument to the function:")]),s(`
`),n("span",{class:"line"},[n("span",null,'{{ secret "path/" "a=b" "c=d" "e=f" }}')]),s(`
`),n("span",{class:"line"},[n("span",null,"Please always consider the security implications of having the contents of a secret in plain-text on disk. If an attacker is able to get access to the file, they will have access to plain-text secrets.")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"Please note that Vault does not support blocking queries. As a result, Consul Template will not immediately reload in the event a secret is changed as it does with Consul’s key-value store. Consul Template will fetch a new secret at half the lease duration of the original secret. For example, most items in Vault’s generic secret backend have a default 30 day lease. This means Consul Template will renew the secret every 15 days. As such, it is recommended that a smaller lease duration be used when generating the initial secret to force Consul Template to renew more often.",-1),n("p",null,[n("strong",null,"secrets"),s(" Query Vault to list the secrets at the given path. Please note this requires Vault 0.5+ and the endpoint you want to list secrets must support listing. Not all endpoints support listing. The result is the list of secret names as strings.")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range secrets "secret/"}}{{.}}{{end}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"The trailing slash is optional in the template, but the generated secret dependency will always have a trailing slash in log output.",-1),n("p",null,"To iterate and list over every secret in the generic secret backend in Vault, for example, you would need to do something like this:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range secrets "secret/"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,'{{with secret (printf "secret/%s" .)}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"{{range $k, $v := .Data}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{$k}}: {{$v}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{end}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{end}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"You should probably never do this. Please also note that Vault does not support blocking queries. To understand the implications, please read the note at the end of the secret function.",-1),n("p",null,[n("strong",null,"service"),s(" 查询Consul中匹配表达式的服务.语法如下:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{service "release.web@east-aws"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("上面的例子查询Consul中,在"),n("code",null,"east-aws"),s("数据中心存在的健康的 "),n("code",null,"web"),s("服务.tag和数据中心参数是可选的.从当前数据中心查询所有节点的"),n("code",null,"web"),s("服务而不管tag,查询语法如下:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{service "web"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("这个函数返回"),n("code",null,"[]*HealthService"),s("结构.可按照如下方式应用到模板:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range service "web@data center"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"server {{.Name}} {{.Address}}:{{.Port}}{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"产生如下输出:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"server nyc_web_01 123.456.789.10:8080")]),s(`
`),n("span",{class:"line"},[n("span",null,"server nyc_web_02 456.789.101.213:8080")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("默认值会返回健康的服务,如果你想获取所有服务,可以增加"),n("code",null,"any"),s("选项,如下:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{service "web" "any"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"这样就会返回注册过的所有服务,而不论他的状态如何.",-1),n("p",null,"如果你想过滤指定的一个或者多个健康状态,你可以通过逗号隔开多个健康状态:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{service "web" "passing, warning"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("这样将会返回被他们的节点和服务级别的检查定义标记为 “passing” 或者 “warning”的服务. 请注意逗号是 "),n("code",null,"OR"),s("而不是"),n("code",null,"AND"),s("的意思.")],-1),n("p",null,[s("指定了超过一个状态过滤,并包含"),n("code",null,"any"),s("将会返回一个错误.因为"),n("code",null,"any"),s("是比所有状态更高级的过滤.")],-1),n("p",null,"后面这2种方式有些架构上的不同:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{service "web"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,'{{service "web" "passing"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("前者会返回Consul认为"),n("code",null,"healthy"),s("和"),n("code",null,"passing"),s("的所有服务.后者将返回所有已经在Consul注册的服务.然后会执行一个客户端的过滤.通常如果你想获取健康的服务,你应该不要使用"),n("code",null,"passing"),s("参数,直接忽略第三个参数即可.然而第三个参数在你想查询 passing或者"),n("code",null,"warning"),s("的服务会比较有用,如下:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{service "web" "passing, warning"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"服务的状态也是可见的,如果你想自己做一些额外的过滤,语法如下:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range service "web" "any"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,'{{if eq .Status "critical"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"// Critical state!{{end}}")]),s(`
`),n("span",{class:"line"},[n("span",null,'{{if eq .Status "passing"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"// Ok{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("执行命令时,在Consul将服务设置为维护模式,只需要在你的命令上包上Consul的 "),n("code",null,"maint"),s(" 调用:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#!/bin/sh")]),s(`
`),n("span",{class:"line"},[n("span",null,"set -e")]),s(`
`),n("span",{class:"line"},[n("span",null,'consul maint -enable -service web -reason "Consul Template updated"')]),s(`
`),n("span",{class:"line"},[n("span",null,"service nginx reload")]),s(`
`),n("span",{class:"line"},[n("span",null,"consul maint -disable -service web")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"另外如果你没有安装Consul agent,你可以直接调用API请求:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#!/bin/sh")]),s(`
`),n("span",{class:"line"},[n("span",null,"set -e")]),s(`
`),n("span",{class:"line"},[n("span",null,'curl -X PUT "http://$CONSUL_HTTP_ADDR/v1/agent/service/maintenance/web?enable=true&reason=Consul+Template+Updated"')]),s(`
`),n("span",{class:"line"},[n("span",null,"service nginx reload")]),s(`
`),n("span",{class:"line"},[n("span",null,'curl -X PUT "http://$CONSUL_HTTP_ADDR/v1/agent/service/maintenance/web?enable=false"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"services"),s(" 查询Consul目录中的所有服务,使用如下语法:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{{services}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"这个例子将查询Consul的默认数据中心,你可以指定一个可选参数来指定数据中心:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{services "@east-aws"}}')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"请注意: services函数与service是不同的,service接受更多参数并且查询监控的服务列表.这个查询Consul目录并返回一个服务的tag的Map,如下:",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{{range services}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{.Name}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{range .Tags}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {{.}}{{end}}")]),s(`
`),n("span",{class:"line"},[n("span",null,"{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[n("strong",null,"tree"),s(" 查询所有指定前缀的key-value值对,如果其中的值有无法转换为字符串的则引发错误:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'{{range tree "service/redis@east-aws"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"{{.Key}} {{.Value}}{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("如果Consul实例在"),n("code",null,"east-aws"),s("数据中心有一个"),n("code",null,"service/redis"),s("结构,模板的渲染结果类似下面:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"minconns 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"maxconns 12")]),s(`
`),n("span",{class:"line"},[n("span",null,'nested/config/value "value"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("和"),n("code",null,"ls"),s("不同,"),n("code",null,"tree"),s("返回前缀下的所有key.和Unix的tree命令比较像.如果忽略数据中心参数,则会使用本地数据中心")],-1),n("p",null,[n("a",{href:"https://book-consul-guide.vnzmi.com/11_consul_template.html",target:"_blank",rel:"noreferrer"},"查看更多")],-1),n("p",null,[n("a",{href:"https://book-consul-guide.vnzmi.com/11_consul_template.html",target:"_blank",rel:"noreferrer"},"项目Github地址")],-1),n("h2",{id:"haproxy-实例",tabindex:"-1"},[s("Haproxy 实例 "),n("a",{class:"header-anchor",href:"#haproxy-实例","aria-label":'Permalink to "Haproxy 实例"'},"​")],-1),n("p",null,[s("根据haproxy服务的配置文件创建一个consul-template模版渲染文件："),n("code",null,"haproxy.ctmpl")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"# Consul Haproxy configured")]),s(`
`),n("span",{class:"line"},[n("span",null,"global")]),s(`
`),n("span",{class:"line"},[n("span",null,"        maxconn         20480")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ulimit-n        65535")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log             127.0.0.1 local5")]),s(`
`),n("span",{class:"line"},[n("span",null,"        uid             200")]),s(`
`),n("span",{class:"line"},[n("span",null,"        gid             200")]),s(`
`),n("span",{class:"line"},[n("span",null,"        chroot          /usr/local/haproxy")]),s(`
`),n("span",{class:"line"},[n("span",null,"        nbproc          1")]),s(`
`),n("span",{class:"line"},[n("span",null,"        daemon")]),s(`
`),n("span",{class:"line"},[n("span",null,"        pidfile         /usr/local/haproxy/logs/haproxy.pid")]),s(`
`),n("span",{class:"line"},[n("span",null,"defaults")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log             global")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode            http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          httplog")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          dontlognull")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          forwardfor")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          abortonclose")]),s(`
`),n("span",{class:"line"},[n("span",null,"        retries         3")]),s(`
`),n("span",{class:"line"},[n("span",null,"        maxconn         3000")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats           enable")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats           hide-version")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   uri     /admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   auth    admin:admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   refresh 10s")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balance         roundrobin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout connect 5000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout client 50000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout server 50000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout check 2000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"listen web_haproxy")]),s(`
`),n("span",{class:"line"},[n("span",null,"        bind 0.0.0.0:8080")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log     127.0.0.1 local5 err")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   refresh 5s")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   uri /admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   realm liang lian")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   auth admin:admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   hide-version")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   admin if TRUE")]),s(`
`),n("span",{class:"line"},[n("span",null,"frontend consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"        bind    0.0.0.0:8500")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode    http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log     global")]),s(`
`),n("span",{class:"line"},[n("span",null,"        default_backend consul-cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"backend consul-cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode http")]),s(`
`),n("span",{class:"line"},[n("span",null,'        {{range service "Faceid"}}')]),s(`
`),n("span",{class:"line"},[n("span",null,"        server {{.ID}} {{.Address}}:{{.Port}} check inter 5000 fall 1 rise 2 weight 2{{end}}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"运行consul-template作为一个服务,通过上面的渲染模版渲染一个haproxy.cfg的配置文件，然后重启haproxy服务",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'consul-template -consul-addr=10.201.102.185:8500 -template "/root/haproxy.ctmpl:/etc/haproxy.cfg:service haproxy restart"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[s("10.201.102.185 看我上篇文章"),n("a",{href:"http://www.liangxiansen.cn/2017/03/06/haproxy/",target:"_blank",rel:"noreferrer"},"Haproxy"),s("，这是consul集群的VIP，为了避免单独调某一台服务器服务器出现故障后consul-template无法工作。")],-1),n("p",null,[s("渲染后的"),n("code",null,"haproxy.cfg")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"# Consul Haproxy configured")]),s(`
`),n("span",{class:"line"},[n("span",null,"global")]),s(`
`),n("span",{class:"line"},[n("span",null,"        maxconn         20480")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ulimit-n        65535")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log             127.0.0.1 local5")]),s(`
`),n("span",{class:"line"},[n("span",null,"        uid             200")]),s(`
`),n("span",{class:"line"},[n("span",null,"        gid             200")]),s(`
`),n("span",{class:"line"},[n("span",null,"        chroot          /usr/local/haproxy")]),s(`
`),n("span",{class:"line"},[n("span",null,"        nbproc          1")]),s(`
`),n("span",{class:"line"},[n("span",null,"        daemon")]),s(`
`),n("span",{class:"line"},[n("span",null,"        pidfile         /usr/local/haproxy/logs/haproxy.pid")]),s(`
`),n("span",{class:"line"},[n("span",null,"defaults")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log             global")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode            http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          httplog")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          dontlognull")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          forwardfor")]),s(`
`),n("span",{class:"line"},[n("span",null,"        option          abortonclose")]),s(`
`),n("span",{class:"line"},[n("span",null,"        retries         3")]),s(`
`),n("span",{class:"line"},[n("span",null,"        maxconn         3000")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats           enable")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats           hide-version")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   uri     /admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   auth    admin:admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   refresh 10s")]),s(`
`),n("span",{class:"line"},[n("span",null,"        balance         roundrobin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout connect 5000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout client 50000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout server 50000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"        timeout check 2000ms")]),s(`
`),n("span",{class:"line"},[n("span",null,"listen web_haproxy")]),s(`
`),n("span",{class:"line"},[n("span",null,"        bind 0.0.0.0:8080")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log     127.0.0.1 local5 err")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   refresh 5s")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   uri /admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   realm liang lian")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   auth admin:admin")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   hide-version")]),s(`
`),n("span",{class:"line"},[n("span",null,"        stats   admin if TRUE")]),s(`
`),n("span",{class:"line"},[n("span",null,"frontend consul")]),s(`
`),n("span",{class:"line"},[n("span",null,"        bind    0.0.0.0:8500")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode    http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        log     global")]),s(`
`),n("span",{class:"line"},[n("span",null,"        default_backend consul-cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"backend consul-cluster")]),s(`
`),n("span",{class:"line"},[n("span",null,"        mode http")]),s(`
`),n("span",{class:"line"},[n("span",null,"        server Faceid 10.201.102.198:9000 check inter 5000 fall 1 rise 2 weight 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"        server Faceid 10.201.102.199:9000 check inter 5000 fall 1 rise 2 weight 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"        server Faceid 10.201.102.200:9000 check inter 5000 fall 1 rise 2 weight 2")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"整个就是搭建consul集群，平台中的服务会注册到consul集群中，haproxy避免consul-template调consul时出现单点故障consul-template无法工作做的高可用，Consul-template就是能在整个平台的各个系统和应用中使用，查询consul集群来获取平台上各个应用的存活状态和IP。",-1),n("p",null,"整套下来实现了两个重点：",-1),n("p",null,"实现了中心服务注册查询 平台中其他节点的查询服务和配置文件自动更新",-1),n("h1",{id:"参考资料",tabindex:"-1"},[s("参考资料 "),n("a",{class:"header-anchor",href:"#参考资料","aria-label":'Permalink to "参考资料"'},"​")],-1),n("p",null,[n("a",{href:"https://my.oschina.net/guol/blog/675281",target:"_blank",rel:"noreferrer"},"https://my.oschina.net/guol/blog/675281"),n("a",{href:"https://www.consul.io/docs/guides/index.html",target:"_blank",rel:"noreferrer"},"https://www.consul.io/docs/guides/index.html"),n("a",{href:"https://www.gitbook.com/book/vincentmi/consul-guide/details",target:"_blank",rel:"noreferrer"},"https://www.gitbook.com/book/vincentmi/consul-guide/details")],-1),n("p",null,[n("a",{href:"https://my.oschina.net/abcfy2/blog/675665",target:"_blank",rel:"noreferrer"},"https://my.oschina.net/abcfy2/blog/675665")],-1),n("h1",{id:"下载",tabindex:"-1"},[s("下载 "),n("a",{class:"header-anchor",href:"#下载","aria-label":'Permalink to "下载"'},"​")],-1),n("p",null,[n("a",{href:"http://www.liangxiansen.cn/files/consul.pdf",target:"_blank",rel:"noreferrer"},"点击下载PDF文件")],-1),n("p",null,[s("原:"),n("a",{href:"http://www.liangxiansen.cn/2017/04/06/consul/",target:"_blank",rel:"noreferrer"},"http://www.liangxiansen.cn/2017/04/06/consul/")],-1)])]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content-before":l(()=>[e(a.$slots,"main-content-before")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{V as default,C as usePageData};
