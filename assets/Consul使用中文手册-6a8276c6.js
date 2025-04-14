import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c06d8755.js";import{_ as C,c as A,w as e,o as d,b as s,d as l,e as a,r as t,f as u,p as h}from"./app-aa1e5b4f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-a847d205.js";import"./YunCard.vue_vue_type_style_index_0_lang-61d41b45.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-944b3777.js";const to=JSON.parse('{"title":"Consul使用中文手册","description":"","frontmatter":{"title":"Consul使用中文手册","categories":"自动注册","tags":["Consul"],"date":"2021-01-28T14:49:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"基础架构","slug":"基础架构","link":"#基础架构","children":[]},{"level":2,"title":"安装Consul","slug":"安装consul","link":"#安装consul","children":[]},{"level":2,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]},{"level":2,"title":"运行Agent","slug":"运行agent","link":"#运行agent","children":[]},{"level":2,"title":"启动 Consul Server","slug":"启动-consul-server","link":"#启动-consul-server","children":[]},{"level":2,"title":"启动 Consul Client","slug":"启动-consul-client","link":"#启动-consul-client","children":[]},{"level":2,"title":"停止Agent","slug":"停止agent","link":"#停止agent","children":[]},{"level":2,"title":"更新服务","slug":"更新服务","link":"#更新服务","children":[]},{"level":2,"title":"查询服务","slug":"查询服务","link":"#查询服务","children":[]},{"level":2,"title":"WEB管理界面","slug":"web管理界面","link":"#web管理界面","children":[]},{"level":2,"title":"健康检查","slug":"健康检查","link":"#健康检查","children":[]},{"level":2,"title":"检查健康状态","slug":"检查健康状态","link":"#检查健康状态","children":[]},{"level":2,"title":"K ／V","slug":"k-／v","link":"#k-／v","children":[]},{"level":2,"title":"Agent","slug":"agent","link":"#agent","children":[]},{"level":2,"title":"event","slug":"event","link":"#event","children":[]},{"level":2,"title":"exec","slug":"exec","link":"#exec","children":[]},{"level":2,"title":"force-leave","slug":"force-leave","link":"#force-leave","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]},{"level":2,"title":"join","slug":"join","link":"#join","children":[]},{"level":2,"title":"keygen","slug":"keygen","link":"#keygen","children":[]},{"level":2,"title":"leave","slug":"leave","link":"#leave","children":[]},{"level":2,"title":"members","slug":"members","link":"#members","children":[]},{"level":2,"title":"monitor","slug":"monitor","link":"#monitor","children":[]},{"level":2,"title":"reload","slug":"reload","link":"#reload","children":[]},{"level":2,"title":"version","slug":"version","link":"#version","children":[]},{"level":2,"title":"watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"agent","slug":"agent-1","link":"#agent-1","children":[]},{"level":2,"title":"catalog","slug":"catalog","link":"#catalog","children":[]},{"level":2,"title":"health","slug":"health","link":"#health","children":[]},{"level":2,"title":"session","slug":"session","link":"#session","children":[]},{"level":2,"title":"acl","slug":"acl","link":"#acl","children":[]},{"level":2,"title":"event","slug":"event-1","link":"#event-1","children":[]},{"level":2,"title":"status","slug":"status","link":"#status","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"命令行","slug":"命令行","link":"#命令行","children":[]},{"level":2,"title":"模版语法","slug":"模版语法","link":"#模版语法","children":[]},{"level":2,"title":"API 函数","slug":"api-函数","link":"#api-函数","children":[]},{"level":2,"title":"Haproxy 实例","slug":"haproxy-实例","link":"#haproxy-实例","children":[]}],"relativePath":"pages/posts/Consul使用中文手册.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Consul使用中文手册.md","lastUpdated":1675833042000}'),c=JSON.parse('{"title":"Consul使用中文手册","description":"","frontmatter":{"title":"Consul使用中文手册","categories":"自动注册","tags":["Consul"],"date":"2021-01-28T14:49:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"基础架构","slug":"基础架构","link":"#基础架构","children":[]},{"level":2,"title":"安装Consul","slug":"安装consul","link":"#安装consul","children":[]},{"level":2,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]},{"level":2,"title":"运行Agent","slug":"运行agent","link":"#运行agent","children":[]},{"level":2,"title":"启动 Consul Server","slug":"启动-consul-server","link":"#启动-consul-server","children":[]},{"level":2,"title":"启动 Consul Client","slug":"启动-consul-client","link":"#启动-consul-client","children":[]},{"level":2,"title":"停止Agent","slug":"停止agent","link":"#停止agent","children":[]},{"level":2,"title":"更新服务","slug":"更新服务","link":"#更新服务","children":[]},{"level":2,"title":"查询服务","slug":"查询服务","link":"#查询服务","children":[]},{"level":2,"title":"WEB管理界面","slug":"web管理界面","link":"#web管理界面","children":[]},{"level":2,"title":"健康检查","slug":"健康检查","link":"#健康检查","children":[]},{"level":2,"title":"检查健康状态","slug":"检查健康状态","link":"#检查健康状态","children":[]},{"level":2,"title":"K ／V","slug":"k-／v","link":"#k-／v","children":[]},{"level":2,"title":"Agent","slug":"agent","link":"#agent","children":[]},{"level":2,"title":"event","slug":"event","link":"#event","children":[]},{"level":2,"title":"exec","slug":"exec","link":"#exec","children":[]},{"level":2,"title":"force-leave","slug":"force-leave","link":"#force-leave","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]},{"level":2,"title":"join","slug":"join","link":"#join","children":[]},{"level":2,"title":"keygen","slug":"keygen","link":"#keygen","children":[]},{"level":2,"title":"leave","slug":"leave","link":"#leave","children":[]},{"level":2,"title":"members","slug":"members","link":"#members","children":[]},{"level":2,"title":"monitor","slug":"monitor","link":"#monitor","children":[]},{"level":2,"title":"reload","slug":"reload","link":"#reload","children":[]},{"level":2,"title":"version","slug":"version","link":"#version","children":[]},{"level":2,"title":"watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"agent","slug":"agent-1","link":"#agent-1","children":[]},{"level":2,"title":"catalog","slug":"catalog","link":"#catalog","children":[]},{"level":2,"title":"health","slug":"health","link":"#health","children":[]},{"level":2,"title":"session","slug":"session","link":"#session","children":[]},{"level":2,"title":"acl","slug":"acl","link":"#acl","children":[]},{"level":2,"title":"event","slug":"event-1","link":"#event-1","children":[]},{"level":2,"title":"status","slug":"status","link":"#status","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"命令行","slug":"命令行","link":"#命令行","children":[]},{"level":2,"title":"模版语法","slug":"模版语法","link":"#模版语法","children":[]},{"level":2,"title":"API 函数","slug":"api-函数","link":"#api-函数","children":[]},{"level":2,"title":"Haproxy 实例","slug":"haproxy-实例","link":"#haproxy-实例","children":[]}],"relativePath":"pages/posts/Consul使用中文手册.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Consul使用中文手册.md","lastUpdated":1675833042000}'),y={name:"pages/posts/Consul使用中文手册.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){h("pageData",c)}},D={id:"使用consul",tabindex:"-1"},g={id:"介绍",tabindex:"-1"},_=s("p",null,"Consul包含多个组件,但是作为一个整体,为你的基础设施提供服务发现和服务配置的工具.他提供以下关键特性:",-1),m=s("p",null,[s("strong",null,"服务发现"),l(" Consul的客户端可用提供一个服务,比如 api 或者mysql ,另外一些客户端可用使用Consul去发现一个指定服务的提供者.通过DNS或者HTTP应用程序可用很容易的找到他所依赖的服务. "),s("strong",null,"健康检查"),l(" Consul客户端可用提供任意数量的健康检查,指定一个服务(比如:webserver是否返回了200 OK 状态码)或者使用本地节点(比如:内存使用是否大于90%). 这个信息可由operator用来监视集群的健康.被服务发现组件用来避免将流量发送到不健康的主机. "),s("strong",null,"Key/Value存储"),l(" 应用程序可用根据自己的需要使用Consul的层级的Key/Value存储.比如动态配置,功能标记,协调,领袖选举等等,简单的HTTP API让他更易于使用. "),s("strong",null,"多数据中心"),l(" Consul支持开箱即用的多数据中心.这意味着用户不需要担心需要建立额外的抽象层让业务扩展到多个区域. Consul面向DevOps和应用开发者友好.是他适合现代的弹性的基础设施. "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/cluster.png",alt:"consul-cluster"})],-1),v={id:"基础架构",tabindex:"-1"},f=s("p",null,"Consul是一个分布式高可用的系统. 这节将包含一些基础,我们忽略掉一些细节这样你可以快速了解Consul是如何工作的.如果要了解更多细节,请参考深入的架构描述.",-1),b=s("p",null,"每个提供服务给Consul的阶段都运行了一个Consul agent . 发现服务或者设置和获取 key/value存储的数据不是必须运行agent.这个agent是负责对节点自身和节点上的服务进行健康检查的.",-1),k=s("p",null,"Agent与一个和多个Consul Server 进行交互.Consul Server 用于存放和复制数据.server自行选举一个领袖.虽然Consul可以运行在一台server , 但是建议使用3到5台来避免失败情况下数据的丢失.每个数据中心建议配置一个server集群.",-1),w=s("p",null,"你基础设施中需要发现其他服务的组件可以查询任何一个Consul 的server或者 agent.Agent会自动转发请求到server .",-1),x=s("p",null,"每个数据中运行了一个Consul server集群.当一个跨数据中心的服务发现和配置请求创建时.本地Consul Server转发请求到远程的数据中心并返回结果.",-1),T={id:"安装consul",tabindex:"-1"},I=s("p",null,[l("下载后解开压缩包.拷贝Consul到你的PATH路径中,在Unix系统中"),s("code",null,"~/bin"),l("和"),s("code",null,"/usr/local/bin"),l("是通常的安装目录.根据你是想为单个用户安装还是给整个系统安装来选择.在Windows系统中有可以安装到"),s("code",null,"%PATH%"),l("的路径中.")],-1),S={id:"验证安装",tabindex:"-1"},N=s("p",null,[l("完成安装后,通过打开一个新终端窗口检查"),s("code",null,"consul"),l("安装是否成功.通过执行 "),s("code",null,"consul"),l("你应该看到类似下面的输出")],-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-248 ~]# consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"usage: consul [--version] [--help] <command> [<args>]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Available commands are:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    agent          Runs a Consul agent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    configtest     Validate config file")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    event          Fire a new event")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    exec           Executes a command on Consul nodes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    force-leave    Forces a member of the cluster to enter the "left" state')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    info           Provides debugging information for operators")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    join           Tell Consul agent to join cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    keygen         Generates a new encryption key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    keyring        Manages gossip layer encryption keys")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kv             Interact with the key-value store")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    leave          Gracefully leaves the Consul cluster and shuts down")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    lock           Execute a command holding a lock")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    maint          Controls node or service maintenance mode")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    members        Lists the members of a Consul cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    monitor        Stream logs from a Consul agent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    operator       Provides cluster-level tools for Consul operators")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    reload         Triggers the agent to reload configuration files")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    rtt            Estimates network round trip time between nodes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    snapshot       Saves, restores and inspects snapshots of Consul server state")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    version        Prints the Consul version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    watch          Watch for changes in Consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E=s("p",null,[l("如果你得到一个"),s("code",null,"consul not be found"),l("的错误,你的"),s("code",null,"PATH"),l("可能没有正确设置.请返回检查你的consul的安装路径是否包含在"),s("code",null,"PATH"),l("中.")],-1),R={id:"运行agent",tabindex:"-1"},j=s("p",null,[l("完成Consul的安装后,必须运行agent. agent可以运行为"),s("code",null,"server"),l("或"),s("code",null,"client"),l("模式.每个数据中心至少必须拥有一台server . 建议在一个集群中有3或者5个server.部署单一的server,在出现失败时会不可避免的造成数据丢失.")],-1),L=s("p",null,"其他的agent运行为client模式.一个client是一个非常轻量级的进程.用于注册服务,运行健康检查和转发对server的查询.agent必须在集群中的每个主机上运行.",-1),O={id:"启动-consul-server",tabindex:"-1"},V=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"consul agent -server -bootstrap-expect 3 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -ui-dir ./consul_ui/ -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H=s("p",null,[l("运行cosnul agent以"),s("code",null,"server"),l("模式，")],-1),F=s("ul",null,[s("li",null,[s("code",null,"-server"),l(" ： 定义agent运行在server模式")]),s("li",null,[s("code",null,"-bootstrap-expect"),l(" ：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap共用")]),s("li",null,[s("code",null,"-bind"),l("：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0")]),s("li",null,[s("code",null,"-node"),l("：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名")]),s("li",null,[s("code",null,"-ui-dir"),l("： 提供存放web ui资源的路径，该目录必须是可读的")]),s("li",null,[s("code",null,"-rejoin"),l("：使consul忽略先前的离开，在再次启动后仍旧尝试加入集群中。")]),s("li",null,[s("code",null,"-config-dir"),l("：配置文件目录，里面所有以.json结尾的文件都会被加载")]),s("li",null,[s("code",null,"-client"),l("：consul服务侦听地址，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1所以不对外提供服务，如果你要对外提供服务改成0.0.0.0")])],-1),U=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 consul]# consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -ui-dir ./consul_ui/ -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> WARNING: Expect Mode enabled, expecting 3 servers")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Starting Consul agent...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Starting Consul agent RPC...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Consul agent running!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"           Version: 'v0.7.4'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"           Node ID: '422ec677-74ef-8f29-2f22-01effeed6334'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"         Node name: 's1'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        Datacenter: 'dc1'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            Server: true (bootstrap: false)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"       Client Addr: 0.0.0.0 (HTTP: 8500, HTTPS: -1, DNS: 8600, RPC: 8400)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      Cluster Addr: 10.201.102.198 (LAN: 8301, WAN: 8302)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Gossip encrypt: false, RPC-TLS: false, TLS-Incoming: false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"             Atlas: <disabled>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Log data will now stream in as it occurs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] raft: Restored from snapshot 139-352267-1489707086023")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] raft: Initial configuration (index=6982): [{Suffrage:Voter ID:10.201.102.199:8300 Address:10.201.102.199:8300} {Suffrage:Voter ID:10.201.102.200:8300 Address:10.201.102.200:8300} {Suffrage:Voter ID:10.201.102.198:8300 Address:10.201.102.198:8300}]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    2017/03/17 18:03:08 [INFO] raft: Node at 10.201.102.198:8300 [Follower] entering Follower state (Leader: "")')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s1 10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] serf: Attempting re-join to previously known node: s2: 10.201.102.199:8301")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] consul: Adding LAN server s1 (Addr: tcp/10.201.102.198:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] consul: Raft data found, disabling bootstrap mode")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s2 10.201.102.199")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s3 10.201.102.200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] serf: Re-joined to previously known node: s2: 10.201.102.199:8301")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] consul: Adding LAN server s2 (Addr: tcp/10.201.102.199:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] consul: Adding LAN server s3 (Addr: tcp/10.201.102.200:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] serf: EventMemberJoin: s1.dc1 10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [INFO] consul: Adding WAN server s1.dc1 (Addr: tcp/10.201.102.198:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:08 [WARN] serf: Failed to re-join any previously known node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:14 [INFO] agent: Synced service 'consul'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:14 [INFO] agent: Deregistered service 'consul01'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:14 [INFO] agent: Deregistered service 'consul02'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 18:03:14 [INFO] agent: Deregistered service 'consul03'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G=s("p",null,[s("strong",null,"查看集群成员"),l(" 新开一个终端窗口运行"),s("code",null,"consul members"),l(", 你可以看到Consul集群的成员.")],-1),M=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# consul members")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Node  Address              Status  Type    Build  Protocol  DC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s1    10.201.102.198:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s2    10.201.102.199:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s3    10.201.102.200:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W={id:"启动-consul-client",tabindex:"-1"},K=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"consul agent -data-dir /tmp/consul -node=c1 -bind=10.201.102.248 -config-dir=/etc/consul.d/ -join 10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q=s("p",null,[l("运行cosnul agent以client模式，"),s("code",null,"-join"),l(" 加入到已有的集群中去。")],-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-248 ~]# consul agent -data-dir /tmp/consul -node=c1 -bind=10.201.102.248 -config-dir=/etc/consul.d/ -join 10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Starting Consul agent...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Starting Consul agent RPC...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Joining cluster...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Join completed. Synced with 1 initial agents")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Consul agent running!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"           Version: 'v0.7.4'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"           Node ID: '564dc0c7-7f4f-7402-a301-cebe7f024294'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"         Node name: 'c1'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        Datacenter: 'dc1'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            Server: false (bootstrap: false)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"       Client Addr: 127.0.0.1 (HTTP: 8500, HTTPS: -1, DNS: 8600, RPC: 8400)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      Cluster Addr: 10.201.102.248 (LAN: 8301, WAN: 8302)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Gossip encrypt: false, RPC-TLS: false, TLS-Incoming: false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"             Atlas: <disabled>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Log data will now stream in as it occurs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: c1 10.201.102.248")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] agent: (LAN) joining: [10.201.102.198]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: s2 10.201.102.199")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: s3 10.201.102.200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] serf: EventMemberJoin: s1 10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] agent: (LAN) joined: 1 Err: <nil>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] consul: adding server s2 (Addr: tcp/10.201.102.199:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] consul: adding server s3 (Addr: tcp/10.201.102.200:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] consul: adding server s1 (Addr: tcp/10.201.102.198:8300) (DC: dc1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    2017/03/17 15:35:16 [INFO] agent: Synced node info")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q=s("p",null,[s("strong",null,"查看集群成员"),l(" 新开一个终端窗口运行"),s("code",null,"consul members"),l(", 你可以看到Consul集群的成员.")],-1),J=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-248 ~]# consul members")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Node  Address              Status  Type    Build  Protocol  DC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"c1    10.201.102.248:8301  alive   client  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s1    10.201.102.198:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s2    10.201.102.199:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s3    10.201.102.200:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),z=s("p",null,[s("strong",null,"加入集群")],-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-248 ~]# consul join 10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Node  Address              Status  Type    Build  Protocol  DC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"c1    10.201.102.248:8301  alive   client  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s1    10.201.102.198:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s2    10.201.102.199:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s3    10.201.102.200:8301  alive   server  0.7.4  2         dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),B={id:"停止agent",tabindex:"-1"},Y=s("p",null,[l("你可以使用"),s("code",null,"Ctrl-C"),l(" 优雅的关闭Agent. 中断Agent之后你可以看到他离开了集群并关闭.")],-1),Z=s("p",null,"在退出中,Consul提醒其他集群成员,这个节点离开了.如果你强行杀掉进程.集群的其他成员应该能检测到这个节点失效了.当一个成员离开,他的服务和检测也会从目录中移除.当一个成员失效了,他的健康状况被简单的标记为危险,但是不会从目录中移除.Consul会自动尝试对失效的节点进行重连.允许他从某些网络条件下恢复过来.离开的节点则不会再继续联系.",-1),ss={id:"更新服务",tabindex:"-1"},ls=s("p",null,[l("服务定义可以通过配置文件并发送"),s("code",null,"SIGHUP"),l("给agent来进行更新.这样你可以让你在不关闭服务或者保持服务请求可用的情况下进行更新.")],-1),es=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"consul reload")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ns=s("p",null,"另外 HTTP API可以用来动态的添加,移除和修改服务.",-1),as=s("p",null,"注册服务 搭建好conusl集群后，用户或者程序就能到consul中去查询或者注册服务。可以通过提供服务定义文件或者调用HTTP API来注册一个服务.",-1),os=s("p",null,[l("首先,为Consul配置创建一个目录.Consul会载入配置文件夹里的所有配置文件.在Unix系统中通常类似 "),s("code",null,"/etc/consul.d"),l(" (.d 后缀意思是这个路径包含了一组配置文件).")],-1),ts=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir /etc/consul.d")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cs=s("p",null,"然后,我们将编写服务定义配置文件.假设我们有一个名叫web的服务运行在 80端口.另外,我们将给他设置一个标签.这样我们可以使用他作为额外的查询方式:",-1),is=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`echo '{"service": {"name": "web", "tags": ["rails"], "port": 80}}' >/etc/consul.d/web.json`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rs=s("p",null,"现在重启agent , 设置配置目录:",-1),ps=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    [INFO] agent: Synced service 'web'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cs=s("ul",null,[s("li",null,[s("code",null,"-data-dir"),l("：提供一个目录用来存放agent的状态，所有的agent允许都需要该目录，该目录必须是稳定的，系统重启后都继续存在 你可能注意到了输出了 “synced” 了 web这个服务.意思是这个agent从配置文件中载入了服务定义,并且成功注册到服务目录.")])],-1),As=s("p",null,"如果你想注册多个服务,你应该在Consul配置目录创建多个服务定义文件.",-1),ds=s("code",null,"PUT",-1),us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`curl -X PUT -d '{"Datacenter": "dc1", "Node": "c2", "Address": "10.155.0.106", "Service": {"Service": "MAC", "tags": ["lianglian", "Mac"], "Port": 22}}' http://127.0.0.1:8500/v1/catalog/register`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hs={id:"查询服务",tabindex:"-1"},ys=s("p",null,"一旦agent启动并且服务同步了.我们可以通过DNS或者HTTP的API来查询服务.",-1),Ds=s("p",null,[s("strong",null,"DNS API"),l(" 让我们首先使用DNS API来查询.在DNS API中,服务的DNS名字是 "),s("code",null,"NAME.service.consul"),l(". 虽然是可配置的,但默认的所有DNS名字会都在"),s("code",null,"consul"),l("命名空间下.这个子域告诉Consul,我们在查询服务,"),s("code",null,"NAME"),l("则是服务的名称.")],-1),gs=s("p",null,[l("对于我们上面注册的Web服务.它的域名是 "),s("code",null,"web.service.consul"),l(" :")],-1),_s=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 web.service.consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 web.service.consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; (1 server found)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; global options: +cmd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Got answer:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 39468")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WARNING: recursion requested but not available")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; QUESTION SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";web.service.consul.            IN      A")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ANSWER SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"web.service.consul.     0       IN      A       10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Query time: 0 msec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WHEN: Tue Mar 28 16:10:24 2017")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; MSG SIZE  rcvd: 52")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]#")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ms=s("p",null,[l("如你所见,一个"),s("code",null,"A"),l("记录返回了一个可用的服务所在的节点的IP地址."),s("code",null,"A"),l("记录只能设置为IP地址. 有也可用使用 DNS API 来接收包含 地址和端口的 SRV记录:")],-1),vs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 web.service.consul SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 web.service.consul SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; (1 server found)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; global options: +cmd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Got answer:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 13331")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WARNING: recursion requested but not available")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; QUESTION SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";web.service.consul.            IN      SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ANSWER SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"web.service.consul.     0       IN      SRV     1 1 80 s1.node.dc1.consul.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ADDITIONAL SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s1.node.dc1.consul.     0       IN      A       10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Query time: 0 msec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WHEN: Tue Mar 28 16:10:56 2017")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; MSG SIZE  rcvd: 84")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]#")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fs=s("p",null,[s("code",null,"SRV"),l("记录告诉我们 web 这个服务运行于节点"),s("code",null,"dhcp-10-201-102-198"),l(" 的"),s("code",null,"80"),l("端口. DNS额外返回了节点的A记录.")],-1),bs=s("p",null,[l("最后,我们也可以用 DNS API 通过标签来过滤服务.基于标签的服务查询格式为"),s("code",null,"TAG.NAME.service.consul"),l(". 在下面的例子中,我们请求Consul返回有 "),s("code",null,"rails"),l("标签的 "),s("code",null,"web"),l("服务.我们成功获取了我们注册为这个标签的服务:")],-1),ks=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 rails.web.service.consul SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 rails.web.service.consul SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; (1 server found)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; global options: +cmd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Got answer:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 37307")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WARNING: recursion requested but not available")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; QUESTION SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";rails.web.service.consul.      IN      SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ANSWER SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rails.web.service.consul. 0     IN      SRV     1 1 80 s1.node.dc1.consul.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ADDITIONAL SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s1.node.dc1.consul.     0       IN      A       10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Query time: 0 msec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WHEN: Tue Mar 28 16:11:45 2017")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; MSG SIZE  rcvd: 90")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]#")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ws=s("p",null,[s("strong",null,"HTTP API"),l(" 除了DNS API之外,HTTP API也可以用来进行服务查询:")],-1),xs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -s 127.0.0.1:8500/v1/catalog/service/web | python -m json.tool")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Address": "10.201.102.198",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 492843,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ID": "422ec677-74ef-8f29-2f22-01effeed6334",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 492843,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Node": "s1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "NodeMeta": {},')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceAddress": "",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceEnableTagOverride": false,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceID": "web",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceName": "web",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServicePort": 80,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceTags": [')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "rails"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "TaggedAddresses": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "lan": "10.201.102.198",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "wan": "10.201.102.198"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ts=s("p",null,"目录API给出所有节点提供的服务.稍后我们会像通常的那样带上健康检查进行查询.就像DNS内部处理的那样.这是只查看健康的实例的查询方法:",-1),Is=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -s 127.0.0.1:8500/v1/catalog/service/web?passing | python -m json.tool")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Address": "10.201.102.198",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 492843,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ID": "422ec677-74ef-8f29-2f22-01effeed6334",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 492843,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Node": "s1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "NodeMeta": {},')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceAddress": "",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceEnableTagOverride": false,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceID": "web",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceName": "web",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServicePort": 80,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceTags": [')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "rails"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "TaggedAddresses": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "lan": "10.201.102.198",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "wan": "10.201.102.198"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ss={id:"web管理界面",tabindex:"-1"},Ns=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/ui_download.png",alt:"UI_Download"})],-1),Ps=s("p",null,"下载完后上传至服务器，建议所有server角色都使用WebUI，。",-1),Es=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=s1 -bind=10.201.102.198 -ui-dir ./consul_ui/ -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rs=s("li",null,[s("code",null,"-ui-dir"),l("： 提供存放web ui资源的路径，指向该目录必须是可读的")],-1),js=s("code",null,"-client",-1),Ls=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/ui.png",alt:"UI_Download"})],-1),Os={id:"健康检查",tabindex:"-1"},Vs=s("p",null,"我们现在看到Consul运行时如此简单.添加节点和服务,查询节点和服务.在这一节.我们将继续添加健康检查到节点和服务.健康检查是服务发现的关键组件.预防使用到不健康的服务.",-1),Hs=s("p",null,"这一步建立在前一节的Consul集群创建之上.目前你应该有一个包含多个节点的Consul集群.",-1),Fs=s("p",null,[s("strong",null,"自定义检查"),l(" 和服务注册类似,一个检查可以通过检查定义或HTTP API请求来注册.")],-1),Us=s("p",null,"我们将使用和检查定义来注册检查.和服务类似,因为这是建立检查最常用的方式.",-1),Gs=s("p",null,"在第二个节点的配置目录建立定义文件:",-1),Ms=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/etc/consul.d/web.json1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{"service": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "name": "Faceid",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "tags": ["extract", "verify", "compare", "idcard"],')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "address": "10.201.102.198",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "port": 9000,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "check": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "name": "ping",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "script": "curl -s localhost:9000",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "interval": "3s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ws=s("p",null,"or",-1),Ks=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/etc/consul.d/web.json1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{"service": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "name": "Faceid",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "tags": ["extract", "verify", "compare", "idcard"],')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "address": "10.201.102.199",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "port": 9000,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "check": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "id": "api",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'           "name": "HTTP API on port 9000",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "http": "http://localhost:9000",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "interval": "10s",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "timeout": "1s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),qs=s("p",null,"more",-1),$s={id:"检查健康状态",tabindex:"-1"},Qs=s("p",null,"我们能适应HTTP API来检查他们.首先我们检查有哪些失败的检查.使用这个命令(注意:这个命令可以运行在任何节点)",-1),Js=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -s http://localhost:8500/v1/health/state/critical | python -m json.tool")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CheckID": "service:Faceid",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 493398,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 493846,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`        "Name": "Service 'Faceid' check",`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Node": "s1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Notes": "",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Output": "",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceID": "Faceid",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ServiceName": "Faceid",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Status": "critical"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zs=s("p",null,[l("我们可以看到,只有一个检查我们的"),s("code",null,"web"),l("服务在"),s("code",null,"critical"),l("状态")],-1),Xs=s("p",null,"另外,我们可以尝试用DNS查询web服务,Consul将不会返回结果.因为服务不健康.",-1),Bs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# dig @127.0.0.1 -p 8600 Faceid.service.consul SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> @127.0.0.1 -p 8600 Faceid.service.consul SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"; (1 server found)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; global options: +cmd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Got answer:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 40884")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WARNING: recursion requested but not available")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; QUESTION SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";Faceid.service.consul.         IN      SRV")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ANSWER SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Faceid.service.consul.  0       IN      SRV     1 1 9000 s3.node.dc1.consul.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Faceid.service.consul.  0       IN      SRV     1 1 9000 s1.node.dc1.consul.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Faceid.service.consul.  0       IN      SRV     1 1 9000 s2.node.dc1.consul.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; ADDITIONAL SECTION:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s3.node.dc1.consul.     0       IN      A       10.201.102.200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s1.node.dc1.consul.     0       IN      A       10.201.102.198")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"s2.node.dc1.consul.     0       IN      A       10.201.102.199")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; Query time: 0 msec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; SERVER: 127.0.0.1#8600(127.0.0.1)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; WHEN: Tue Mar 28 18:20:15 2017")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";; MSG SIZE  rcvd: 165")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ys={id:"k-／v",tabindex:"-1"},Zs=s("p",null,"除了提供服务发现和健康检查的集成.Consul提供了一个易用的键/值存储.这可以用来保持动态配置,协助服务协调,领袖选举,做开发者可以想到的任何事情.",-1),sl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -v http://localhost:8500/v1/kv/?recurse")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"* About to connect() to localhost port 8500 (#0)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"*   Trying ::1... 拒绝连接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"*   Trying 127.0.0.1... connected")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"* Connected to localhost (127.0.0.1) port 8500 (#0)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"> GET /v1/kv/?recurse HTTP/1.1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"> User-Agent: curl/7.19.7 (x86_64-redhat-linux-gnu) libcurl/7.19.7 NSS/3.21 Basic ECC zlib/1.2.3 libidn/1.18 libssh2/1.4.2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"> Host: localhost:8500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"> Accept: */*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< HTTP/1.1 404 Not Found")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< X-Consul-Index: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< X-Consul-Knownleader: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< X-Consul-Lastcontact: 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< Date: Thu, 18 Aug 2016 08:21:39 GMT")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< Content-Length: 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"< Content-Type: text/plain; charset=utf-8")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"* Connection #0 to host localhost left intact")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"* Closing connection #0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ll=s("p",null,[l("因为没有key所以我们得到了一个404响应.现在我们"),s("code",null,"PUT"),l("一些示例的Key:")],-1),el=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -X PUT -d 'test' http://localhost:8500/v1/kv/web/key1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -X PUT -d 'test' http://localhost:8500/v1/kv/web/key2?flags=42")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -X PUT -d 'test'  http://localhost:8500/v1/kv/web/sub/key3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nl=s("p",null,[l("我们创建了值为”test”的3个Key,注意返回的值是经过了"),s("code",null,"base64"),l("编码的.用来支持非UTF8编码字符.对Key "),s("code",null,"web/key2"),l("我们设置了一个标志值为 "),s("code",null,"42"),l(".所有的key支持设置一个64位的整形数字标志.Consul内部不适用这个值.但是他可以被客户端适用来做一些元数据.")],-1),al=s("p",null,[l("完成设置后,我们发起了一个"),s("code",null,"GET"),l("请求来接收多个key的值,使用"),s("code",null,"?recurse"),l("参数.")],-1),ol=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -s http://localhost:8500/v1/kv/web/?recurse | python -m json.tool")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 502660,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Flags": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Key": "web/key1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "LockIndex": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 502660,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Value": "dGVzdA=="')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 502663,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Flags": 42,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Key": "web/key2",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "LockIndex": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 502663,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Value": "dGVzdA=="')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 502665,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Flags": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Key": "web/sub/key3",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "LockIndex": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 502665,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Value": "dGVzdA=="')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tl=s("p",null,[l("你可以获取"),s("strong",null,"单个"),l("的key")],-1),cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -s http://localhost:8500/v1/kv/web/key1 | python -m json.tool")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "CreateIndex": 502660,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Flags": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Key": "web/key1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "LockIndex": 0,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "ModifyIndex": 502660,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "Value": "dGVzdA=="')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),il=s("p",null,[l("删除key也很简单.通过"),s("code",null,"DELETE"),l("动作来完成.我们可以通过指定完整路径来删除一个单独的key.或者我们可以使用"),s("code",null,"?recurse"),s("strong",null,"递归"),l("的删除主路径下所有key.")],-1),rl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# curl -X DELETE http://localhost:8500/v1/kv/web/sub?recurse")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pl=s("p",null,[l("可以通过发送相同的URL并提供不同的消息体的"),s("code",null,"PUT"),l("请求去修改一个Key.另外,Consul提供一个检查并设置的操作,实现原子的Key修改.通过"),s("code",null,"?cas=参数"),l("加上"),s("code",null,"GET"),l("中最近的"),s("code",null,"ModifyIndex"),l("来达到. 例如我们想修改 “web/key1”:")],-1),Cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -X PUT -d 'newval' http://localhost:8500/v1/kv/web/key1?cas=502660")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -X PUT -d 'newval' http://localhost:8500/v1/kv/web/key1?cas=502660")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Al=s("p",null,[l("在这种情况下,第一次"),s("code",null,"CAS"),l(" 更新成功因为"),s("code",null,"ModifyIndex"),l("是"),s("code",null,"502660"),l(".而第二次失败是因为"),s("code",null,"ModifyIndex"),l("在第一次更新后已经不是"),s("code",null,"502660"),l("了 .")],-1),dl=s("p",null,[l("我们也可以使用"),s("code",null,"ModifyIndex"),l("来等待key值的改变.例如我们想等待"),s("code",null,"key2"),l("被修改:")],-1),ul=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@dhcp-10-201-102-198 ~]# curl "http://localhost:8500/v1/kv/web/key2"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[{"LockIndex":0,"Key":"web/key2","Flags":42,"Value":"dGVzdA==","CreateIndex":502663,"ModifyIndex":502663}]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@dhcp-10-201-102-198 ~]# curl "http://localhost:8500/v1/kv/web/key2?index=502663&wait=5s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[{"LockIndex":0,"Key":"web/key2","Flags":42,"Value":"dGVzdA==","CreateIndex":502663,"ModifyIndex":502663}]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hl=s("p",null,[l("通过提供 "),s("code",null,"?index="),l(",我们请求等待key值有一个比"),s("code",null,"502663"),l("更大的"),s("code",null,"ModifyIndex"),l(".虽然"),s("code",null,"?wait=5s"),l("参数限制了这个请求最多5秒,否则返回当前的未改变的值. 这样可以有效的等待key的改变.另外,这个功能可以用于等待一组key.直到其中的某个key有修改.")],-1),yl={id:"conusl-命令行",tabindex:"-1"},Dl=s("p",null,"见识了consul的强大，consul可以通过一个简单的CLI来控制，consul只有一个命令行应用，就是consul命令，consul命令可以包含agent、members等参数进行使用，这一篇来具体看看consul CLI的具体用法，consul -h即可看到consul cli所支持的参数，而每个参数里面又支持其他参数，下面我们就来具体看看。",-1),gl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dhcp-10-201-102-198 ~]# consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"usage: consul [--version] [--help] <command> [<args>]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Available commands are:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    agent          Runs a Consul agent  运行一个consul agent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    configtest     Validate config file")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    event          Fire a new event")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    exec           Executes a command on Consul nodes  在consul节点上执行一个命令")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    force-leave    Forces a member of the cluster to enter the "left" state   强制节点成员在集群中的状态转换到left状态')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    info           Provides debugging information for operators  提供操作的debug级别的信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    join           Tell Consul agent to join cluster   加入consul节点到集群中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    keygen         Generates a new encryption key  生成一个新的加密key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    keyring        Manages gossip layer encryption keys")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kv             Interact with the key-value store")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    leave          Gracefully leaves the Consul cluster and shuts down")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    lock           Execute a command holding a lock")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    maint          Controls node or service maintenance mode")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    members        Lists the members of a Consul cluster    列出集群中成员")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    monitor        Stream logs from a Consul agent  打印consul节点的日志信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    operator       Provides cluster-level tools for Consul operators")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    reload         Triggers the agent to reload configuration files   触发节点重新加载配置文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    rtt            Estimates network round trip time between nodes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    snapshot       Saves, restores and inspects snapshots of Consul server state")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    version        Prints the Consul version    打印consul的版本信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    watch          Watch for changes in Consul   监控consul的改变")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_l={id:"agent",tabindex:"-1"},ml=s("p",null,[s("code",null,"agent"),l("指令是consul的核心，它运行agent来维护成员的重要信息、运行检查、服务宣布、查询处理等等。")],-1),vl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Usage: consul agent [options]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  Starts the Consul agent and runs until an interrupt is received. The")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  agent represents a single node in a cluster.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Options:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -advertise=addr                  Sets the advertise address to use")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -advertise-wan=addr              Sets address to advertise on wan instead of")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   advertise addr")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -bootstrap                       Sets server to bootstrap mode")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -bind=0.0.0.0                    Sets the bind address for cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   communication")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -http-port=8500                  Sets the HTTP API port to listen on")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -bootstrap-expect=0              Sets server to expect bootstrap mode.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -client=127.0.0.1                Sets the address to bind for client access.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   This includes RPC, DNS, HTTP and HTTPS (if")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   configured)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -config-file=foo                 Path to a JSON file to read configuration")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   from. This can be specified multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -config-dir=foo                  Path to a directory to read configuration")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   files from. This will read every file ending")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'                                   in ".json" as configuration in this')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   directory in alphabetical order. This can be")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   specified multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -data-dir=path                   Path to a data directory to store agent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   state")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -dev                             Starts the agent in development mode.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -recursor=1.2.3.4                Address of an upstream DNS server.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   Can be specified multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -dc=east-aws                     Datacenter of the agent (deprecated: use")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   'datacenter' instead).")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -datacenter=east-aws             Datacenter of the agent.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -encrypt=key                     Provides the gossip encryption key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -join=1.2.3.4                    Address of an agent to join at start time.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   Can be specified multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -join-wan=1.2.3.4                Address of an agent to join -wan at start")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   time. Can be specified multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join=1.2.3.4              Address of an agent to join at start time")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   with retries enabled. Can be specified")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-interval=30s              Time to wait between join attempts.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-max=0                     Maximum number of join attempts. Defaults to")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   0, which will retry indefinitely.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-ec2-region           EC2 Region to use for discovering servers to")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   join.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-ec2-tag-key          EC2 tag key to filter on for server")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   discovery")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-ec2-tag-value        EC2 tag value to filter on for server")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   discovery")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-gce-project-name     Google Compute Engine project to discover")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   servers in")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-gce-zone-pattern     Google Compute Engine region or zone to")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   discover servers in (regex pattern)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-gce-tag-value        Google Compute Engine tag value to filter")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   for server discovery")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-gce-credentials-file Path to credentials JSON file to use with")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   Google Compute Engine")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-join-wan=1.2.3.4          Address of an agent to join -wan at start")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   time with retries enabled. Can be specified")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-interval-wan=30s          Time to wait between join -wan attempts.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry-max-wan=0                 Maximum number of join -wan attempts.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   Defaults to 0, which will retry")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   indefinitely.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -log-level=info                  Log level of the agent.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -node=hostname                   Name of this node. Must be unique in the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -node-meta=key:value             An arbitrary metadata key/value pair for")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   this node.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   This can be specified multiple times.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -protocol=N                      Sets the protocol version. Defaults to")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   latest.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -rejoin                          Ignores a previous leave and attempts to")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   rejoin the cluster.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -server                          Switches agent to server mode.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -syslog                          Enables logging to syslog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ui                              Enables the built-in static web UI server")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ui-dir=path                     Path to directory containing the Web UI")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                   resources")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -pid-file=path                   Path to file to store agent PID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fl={id:"event",tabindex:"-1"},bl=s("p",null,[s("code",null,"event"),l("命令提供了一种机制，用来fire自定义的用户事件，这些事件对consul来说是不透明的，但它们可以用来构建自动部署、重启服务或者其他行动的脚本。")],-1),kl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-http-addr：http服务的地址，agent可以链接上来发送命令，如果没有设置，则默认是127.0.0.1:8500。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-datacenter：数据中心。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-name：事件的名称")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-node：一个正则表达式，用来过滤节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-service：一个正则表达式，用来过滤节点上匹配的服务")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-tag：一个正则表达式，用来过滤节点上符合tag的服务，必须和-service一起使用。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wl={id:"exec",tabindex:"-1"},xl=s("p",null,[s("code",null,"exec"),l("指令提供了一种远程执行机制，比如你要在所有的机器上执行uptime命令，远程执行的工作通过job来指定，存储在KV中，agent使用event系统可以快速的知道有新的job产生，消息是通过gossip协议来传递的，因此消息传递是最佳的，但是并不保证命令的执行。事件通过gossip来驱动，远程执行依赖KV存储系统(就像消息代理一样)。")],-1),Tl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-http-addr：http服务的地址，agent可以链接上来发送命令，如果没有设置，则默认是127.0.0.1:8500。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-datacenter：数据中心。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-prefix：key在KV系统中的前缀，用来存储请求数据，默认是_rexec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-node：一个正则表达式，用来过滤节点，评估事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-service：一个正则表达式，用来过滤节点上匹配的服务")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-tag：一个正则表达式，用来过滤节点上符合tag的服务，必须和-service一起使用。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-wait：在节点多长时间没有响应后，认为job已经完成。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-wait-repl：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-verbose：输出更多信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Il={id:"force-leave",tabindex:"-1"},Sl=s("p",null,[s("code",null,"force-leave"),l("治疗可以强制consul集群中的成员进入left状态(空闲状态)，记住，即使一个成员处于活跃状态，它仍旧可以再次加入集群中，这个方法的真实目的是强制移除failed的节点。如果failed的节点还是网络的一部分，则consul会周期性的重新链接failed的节点，如果经过一段时间后(默认是72小时)，consul则会宣布停止尝试链接failed的节点。force-leave指令可以快速的把failed节点转换到left状态。")],-1),Nl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr:一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pl={id:"info",tabindex:"-1"},El=s("p",null,[s("code",null,"info"),l("指令提供了各种操作时可以用到的debug信息，对于client和server，info有返回不同的子系统信息，目前有以下几个KV信息：agent(提供agent信息)，consul(提供consul库的信息)，raft(提供raft库的信息)，serf_lan(提供LAN gossip pool),serf_wan(提供WAN gossip pool)")],-1),Rl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jl={id:"join",tabindex:"-1"},Ll=s("p",null,[s("code",null,"join"),l("指令告诉consul agent加入一个已经存在的集群中，一个新的consul agent必须加入一个已经有至少一个成员的集群中，这样它才能加入已经存在的集群中，如果你不加入一个已经存在的集群，则agent是它自身集群的一部分，其他agent则可以加入进来。agents可以加入其他agent多次。consul join [options] address。如果你想加入多个集群，则可以写多个地址，consul会加入所有的地址。")],-1),Ol=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-wan：agent运行在server模式，xxxxxxx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vl={id:"keygen",tabindex:"-1"},Hl=s("p",null,[s("code",null,"keygen"),l("指令生成加密的密钥，可以用在consul agent通讯加密")],-1),Fl=s("p",null,"生成一个key",-1),Ul={id:"leave",tabindex:"-1"},Gl=s("p",null,[s("code",null,"leave"),l("指令触发一个优雅的离开动作并关闭agent，节点离开后不会尝试重新加入集群中。运行在server状态的节点，节点会被优雅的删除，这是很严重的，在某些情况下一个不优雅的离开会影响到集群的可用性。")],-1),Ml=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr:一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wl={id:"members",tabindex:"-1"},Kl=s("p",null,[s("code",null,"members"),l("指令输出consul agent目前所知道的所有的成员以及它们的状态，节点的状态只有alive、left、failed三种状态。")],-1),ql=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-detailed：输出每个节点更详细的信息。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-status：过滤出符合正则规则的节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-wan：xxxxxx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$l={id:"monitor",tabindex:"-1"},Ql=s("p",null,[s("code",null,"monitor"),l("指令用来链接运行的agent，并显示日志。monitor会显示最近的日志，并持续的显示日志流，不会自动退出，除非你手动或者远程agent自己退出。")],-1),Jl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-log-level：显示哪个级别的日志，默认是info")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zl={id:"reload",tabindex:"-1"},Xl=s("p",null,[s("code",null,"reload"),l("指令可以重新加载agent的配置文件。SIGHUP指令在重新加载配置文件时使用，任何重新加载的错误都会写在agent的log文件中，并不会打印到屏幕。")],-1),Bl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rpc-addr：一个rpc地址，agent可以链接上来发送命令，如果没有指定，默认是127.0.0.1:8400")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yl={id:"version",tabindex:"-1"},Zl=s("p",null,"打印consul的版本",-1),se={id:"watch",tabindex:"-1"},le=s("p",null,[s("code",null,"watch"),l("指令提供了一个机制，用来监视实际数据视图的改变(节点列表、成员服务、KV)，如果没有指定进程，当前值会被dump出来")],-1),ee=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-http-addr：http服务的地址，agent可以链接上来发送命令，如果没有设置，则默认是127.0.0.1:8500。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-datacenter：数据中心查询。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-token：ACL token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-key：监视key，只针对key类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-name：监视event，只针对event类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-prefix：监视key prefix，只针对keyprefix类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-service：监控service，只针对service类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-state：过略check state")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-tag：过滤service tag")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-type：监控类型，一般有key、keyprefix、service、nodes、checks、event")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ne={id:"consul-配置",tabindex:"-1"},ae=s("p",null,"agent有各种各样的配置项可以在命令行或者配置文件进行定义，所有的配置项都是可选择的，当加载配置文件的时候，consul从配置文件或者配置目录加载配置。后面定义的配置会合并前面定义的配置，但是大多数情况下，合并的意思是后面定义的配置会覆盖前面定义的配置，但是有些情况，例如event句柄，合并仅仅是添加到前面定义的句柄后面。consul重新加载配置文件也支持以信号的方式接收update信号。",-1),oe=s("p",null,"下面看看命令行参数：",-1),te=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-advertise：通知展现地址用来改变我们给集群中的其他节点展现的地址，一般情况下-bind地址就是展现地址")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-bootstrap：用来控制一个server是否在bootstrap模式，在一个datacenter中只能有一个server处于bootstrap模式，当一个server处于bootstrap模式时，可以自己选举为raft leader。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-bootstrap-expect：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap公用")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-bind：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-client：consul绑定在哪个client地址上，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-config-file：明确的指定要加载哪个配置文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-config-dir：配置文件目录，里面所有以.json结尾的文件都会被加载")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-data-dir：提供一个目录用来存放agent的状态，所有的agent允许都需要该目录，该目录必须是稳定的，系统重启后都继续存在")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-dc：该标记控制agent允许的datacenter的名称，默认是dc1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-encrypt：指定secret key，使consul在通讯时进行加密，key可以通过consul keygen生成，同一个集群中的节点必须使用相同的key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-join：加入一个已经启动的agent的ip地址，可以多次指定多个agent的地址。如果consul不能加入任何指定的地址中，则agent会启动失败，默认agent启动时不会加入任何节点。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-retry-join：和join类似，但是允许你在第一次失败后进行尝试。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-retry-interval：两次join之间的时间间隔，默认是30s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-retry-max：尝试重复join的次数，默认是0，也就是无限次尝试")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-log-level：consul agent启动后显示的日志信息级别。默认是info，可选：trace、debug、info、warn、err。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-node：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-protocol：consul使用的协议版本")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rejoin：使consul忽略先前的离开，在再次启动后仍旧尝试加入集群中。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-server：定义agent运行在server模式，每个集群至少有一个server，建议每个集群的server不要超过5个")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-syslog：开启系统日志功能，只在linux/osx上生效")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-ui-dir:提供存放web ui资源的路径，该目录必须是可读的")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-pid-file:提供一个路径来存放pid文件，可以使用该文件进行SIGINT/SIGHUP(关闭/更新)agent")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ce=s("p",null,"除了命令行参数外，配置也可以写入文件中，在某些情况下配置文件会更简单一些，例如：利用consul被用来管理系统。配置文件是json格式的，很容易编写。配置文件不仅被用来设置agent的启动，也可以用来提供健康检测和服务发现的定义。配置文件的一般样例如下：",-1),ie=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "datacenter": "dc1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "data_dir": "/opt/consul",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "log_level": "INFO",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "node_name": "s1",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "server": true,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "bootstrap_expect": 3,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "bind_addr": "10.201.102.198",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "client_addr": "0.0.0.0",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "ui_dir": "/root/consul_ui",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "retry_join": ["10.201.102.198","10.201.102.199","10.201.102.200","10.201.102.248"],')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "retry_interval": "30s",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "enable_debug": false,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "rejoin_after_leave": true,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "start_join": ["10.201.102.198","10.201.102.199","10.201.102.200","10.201.102.248"],')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "enable_syslog": true,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "syslog_facility": "local5"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),re=s("p",null,"下面看看详细的配置文件参数：",-1),pe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl_datacenter：只用于server，指定的datacenter的权威ACL信息，所有的servers和datacenter必须同意ACL datacenter")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl_default_policy：默认是allow")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl_down_policy：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl_master_token：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl_token：agent会使用这个token和consul server进行请求")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl_ttl：控制TTL的cache，默认是30s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"addresses：一个嵌套对象，可以设置以下key：dns、http、rpc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"advertise_addr：等同于-advertise")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bootstrap：等同于-bootstrap")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bootstrap_expect：等同于-bootstrap-expect")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind_addr：等同于-bind")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ca_file：提供CA文件路径，用来检查客户端或者服务端的链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cert_file：必须和key_file一起")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"check_update_interval：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"client_addr：等同于-client")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"datacenter：等同于-dc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data_dir：等同于-data-dir")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"disable_anonymous_signature：在进行更新检查时禁止匿名签名")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"disable_remote_exec：禁止支持远程执行，设置为true，agent会忽视所有进入的远程执行请求")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"disable_update_check：禁止自动检查安全公告和新版本信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns_config：是一个嵌套对象，可以设置以下参数：allow_stale、max_stale、node_ttl 、service_ttl、enable_truncate")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"domain：默认情况下consul在进行DNS查询时，查询的是consul域，可以通过该参数进行修改")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enable_debug：开启debug模式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enable_syslog：等同于-syslog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"encrypt：等同于-encrypt")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"key_file：提供私钥的路径")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"leave_on_terminate：默认是false，如果为true，当agent收到一个TERM信号的时候，它会发送leave信息到集群中的其他节点上。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"log_level：等同于-log-level")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node_name:等同于-node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ports：这是一个嵌套对象，可以设置以下key：dns(dns地址：8600)、http(http api地址：8500)、rpc(rpc:8400)、serf_lan(lan port:8301)、serf_wan(wan port:8302)、server(server rpc:8300)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"protocol：等同于-protocol")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"recursor：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rejoin_after_leave：等同于-rejoin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"retry_join：等同于-retry-join")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"retry_interval：等同于-retry-interval")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server：等同于-server")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server_name：会覆盖TLS CA的node_name，可以用来确认CA name和hostname相匹配")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"skip_leave_on_interrupt：和leave_on_terminate比较类似，不过只影响当前句柄")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"start_join：一个字符数组提供的节点地址会在启动时被加入")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"statsd_addr：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"statsite_addr：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"syslog_facility：当enable_syslog被提供后，该参数控制哪个级别的信息被发送，默认Local0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ui_dir：等同于-ui-dir")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"verify_incoming：默认false，如果为true，则所有进入链接都需要使用TLS，需要客户端使用ca_file提供ca文件，只用于consul server端，因为client从来没有进入的链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"verify_outgoing：默认false，如果为true，则所有出去链接都需要使用TLS，需要服务端使用ca_file提供ca文件，consul server和client都需要使用，因为两者都有出去的链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"watches：watch一个详细名单")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ce={id:"http-api",tabindex:"-1"},Ae=s("p",null,"consul的主要接口是RESTful HTTP API，该API可以用来增删查改nodes、services、checks、configguration。所有的endpoints主要分为以下类别：",-1),de=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kv - Key/Value存储")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"agent - Agent控制")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"catalog - 管理nodes和services")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"health - 管理健康监测")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"session - Session操作")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"acl - ACL创建和管理")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"event - 用户Events")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"status - Consul系统状态")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ue=s("p",null,"下面我们就单独看看每个模块的具体内容。",-1),he={id:"agent-1",tabindex:"-1"},ye=s("p",null,"agent endpoints用来和本地agent进行交互，一般用来服务注册和检查注册，支持以下接口",-1),De=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/checks : 返回本地agent注册的所有检查(包括配置文件和HTTP接口)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/services : 返回本地agent注册的所有 服务")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/members : 返回agent在集群的gossip pool中看到的成员")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/self : 返回本地agent的配置和成员信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/join/<address> : 触发本地agent加入node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/force-leave/<node>>: 强制删除node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/check/register : 在本地agent增加一个检查项，使用PUT方法传输一个json格式的数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/check/deregister/<checkID> : 注销一个本地agent的检查项")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/check/pass/<checkID> : 设置一个本地检查项的状态为passing")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/check/warn/<checkID> : 设置一个本地检查项的状态为warning")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/check/fail/<checkID> : 设置一个本地检查项的状态为critical")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/service/register : 在本地agent增加一个新的服务项，使用PUT方法传输一个json格式的数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/agent/service/deregister/<serviceID> : 注销一个本地agent的服务项")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ge={id:"catalog",tabindex:"-1"},_e=s("p",null,"catalog endpoints用来注册/注销nodes、services、checks",-1),me=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/register : Registers a new node, service, or check")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/deregister : Deregisters a node, service, or check")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/datacenters : Lists known datacenters")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/nodes : Lists nodes in a given DC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/services : Lists services in a given DC")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/service/<service> : Lists the nodes in a given service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/catalog/node/<node> : Lists the services provided by a node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ve={id:"health",tabindex:"-1"},fe=s("p",null,"health endpoints用来查询健康状况相关信息，该功能从catalog中单独分离出来",-1),be=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/healt/node/<node>: 返回node所定义的检查，可用参数?dc=")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/health/checks/<service>: 返回和服务相关联的检查，可用参数?dc=")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/health/service/<service>: 返回给定datacenter中给定node中service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'/v1/health/state/<state>: 返回给定datacenter中指定状态的服务，state可以是"any", "unknown", "passing", "warning", or "critical"，可用参数?dc=')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ke={id:"session",tabindex:"-1"},we=s("p",null,"session endpoints用来create、update、destory、query sessions",-1),xe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/session/create: Creates a new session")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/session/destroy/<session>: Destroys a given session")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/session/info/<session>: Queries a given session")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/session/node/<node>: Lists sessions belonging to a node")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/session/list: Lists all the active sessions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Te={id:"acl",tabindex:"-1"},Ie=s("p",null,"acl endpoints用来create、update、destory、query acl",-1),Se=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/acl/create: Creates a new token with policy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/acl/update: Update the policy of a token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/acl/destroy/<id>: Destroys a given token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/acl/info/<id>: Queries the policy of a given token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/acl/clone/<id>: Creates a new token by cloning an existing token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/acl/list: Lists all the active tokens")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ne={id:"event-1",tabindex:"-1"},Pe=s("p",null,"event endpoints用来fire新的events、查询已有的events",-1),Ee=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/event/fire/<name>: 触发一个新的event，用户event需要name和其他可选的参数，使用PUT方法")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/event/list: 返回agent知道的events")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Re={id:"status",tabindex:"-1"},je=s("p",null,"status endpoints用来或者consul 集群的信息",-1),Le=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/status/leader : 返回当前集群的Raft leader")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/v1/status/peers : 返回当前集群中同事")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Oe={id:"consul-template",tabindex:"-1"},Ve=s("p",null,"在consul-template没出现之前，大家构建服务发现系统，大多采用的是zookeeper、etcd+confd这样类似的系统，之前写过一篇consul+confd的文，讲的是如何动态生成配置文件的，如今consul官方推出了自己的模板系统，就是consul-template，这样的话动态的配置系统可以分化为etcd+confd和consul+consul-template两大阵营。consul是一个和etcd类似但又强于etcd的系统，关于etcd和consul可以翻阅以前的文章，consul-template的定位就和confd差不多一样了，confd的后端可以是etcd或者consul，相信consul搭配consul-template能发挥更大的效果。consul-template提供了一个便捷的方式从consul中获取存储的值，consul-template守护进程会查询consul实例，来更新系统上指定的任何模板，当更新完成后，模板可以选择运行一些任意的命令。",-1),He=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    consul template的使用场景：consul template可以查询consul中的服务目录、key、key-values等。这种强大的抽象功能和查询语言模板可以使consul template特别适合动态的创建配置文件。例如：创建apache/nginx proxy balancers、haproxy backends、varnish servers、application configurations。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fe=s("p",null,"consul template的特性：",-1),Ue=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    quiescence：consul template内制静止平衡功能，可以智能的发现consul实例中的更改信息。这个功能可以防止频繁的更新模板而引起系统的波动。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    dry mode：不确定当前架构的状态？担心模板的变化会破坏子系统？无须担心，因为consul template还有-dry模式。在dry模式，consul template会将结果呈现在STDOUT，所以操作员可以检查输出是否正常，以决定更换模板是否安全")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    CLI and Config：如果你喜欢在命令行上指定一切，consul template都可以hold住。随着内置HCL的支持，consul template接收一个配置文件，命令行参数，或者两者的混合。通过这种方式你可以继续使用你现在已有的配置管理工具和consul template来配合。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    verbose debugging：即使每件事你都做的近乎完美，但是有时候还是会有失败发生。consul template可以提供更详细的debug日志信息。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ge={id:"安装",tabindex:"-1"},Me={id:"使用",tabindex:"-1"},We=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-auth=<user[:pass]>      设置基本的认证用户名和密码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -consul-addr=<address>   设置Consul实例的地址")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -max-stale=<duration>    查询过期的最大频率，默认是1s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -dedup                   启用重复数据删除，当许多consul template实例渲染一个模板的时候可以降低consul的负载")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ssl                     使用https连接Consul使用SSL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ssl-verify              通过SSL连接的时候检查证书")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ssl-cert                SSL客户端证书发送给服务器")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ssl-key                 客户端认证时使用的SSL/TLS私钥")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -ssl-ca-cert             验证服务器的CA证书列表")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -token=<token>           设置Consul API的token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -syslog                  把标准输出和标准错误重定向到syslog，syslog的默认级别是local0。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -syslog-facility=<f>     设置syslog级别，默认是local0，必须和-syslog配合使用")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -template=<template>     增加一个需要监控的模板，格式是：'templatePath:outputPath(:command)'，多个模板则可以设置多次")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -wait=<duration>         当呈现一个新的模板到系统和触发一个命令的时候，等待的最大最小时间。如果最大值被忽略，默认是最小值的4倍。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -retry=<duration>        当在和consul api交互的返回值是error的时候，等待的时间，默认是5s。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -config=<path>           配置文件或者配置目录的路径")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -pid-file=<path>         PID文件的路径")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  -log-level=<level>       设置日志级别，可以是"debug","info", "warn" (default), and "err"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -dry                     Dump生成的模板到标准输出，不会生成到磁盘")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -once                    运行consul-template一次后退出，不以守护进程运行")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  -reap                    子进程自动收割123456789101112131415161718192021")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ke=s("p",null,"查看全部选项,使用以下命令",-1),qe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"consul-template -h")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$e={id:"命令行",tabindex:"-1"},Qe=s("p",null,"1、查询本地consl实例，生成模板后重启nginx，如果consul不可用，如果api故障则每30s尝试检测一次值，consul-template运行一次后退出",-1),Je=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul-template -retry 30s -once -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ze=s("p",null,"test.ctmpl",-1),Xe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range service "Faceid"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{.ID}} {{.Address}}:{{.Port}} check inter 5000 fall 1 rise 2 weight 2{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Be=s("p",null,"test.out",-1),Ye=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Faceid 10.201.102.198:9000 check inter 5000 fall 1 rise 2 weight 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Faceid 10.201.102.199:9000 check inter 5000 fall 1 rise 2 weight 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Faceid 10.201.102.200:9000 check inter 5000 fall 1 rise 2 weight 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ze=s("p",null,"2、运行consul-temple作为一个服务",-1),sn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul-template -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ln=s("p",null,"3、查询一个实例，渲染多个模板，然后重启相关服务",-1),en=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul-template -retry 30s -once -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"\\')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' -template "/tmp/redis.ctmpl:/var/redis/redis.conf:service redis restart" \\')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' -template "/tmp/haproxy.ctmpl:/var/haproxy/haproxy.conf"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nn=s("p",null,"4、查询一个实例，dump模板到标准输出，参数中的-template则会被忽略",-1),an=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul-template -dry -consul-addr=10.201.102.198:8500 -template "test.ctmpl:test.out"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),on=s("p",null,"以上参数除了在命令行使用，也可以直接配置在文件中，下面看看Consul-Template的配置文件，简称HCL(HashiCorp Configuration Language)，它是和JSON兼容的，下面看个例子：",-1),tn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#### 配置文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"​```Consul-Template```配置文件是使用[HashiCorp Configuration Language (HCL)](https://github.com/hashicorp/hcl)编写的.这意味着```Consul Template```是和JSON兼容的,查看更多信息请查看 [HCL 规范](https://github.com/hashicorp/hcl)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"配置文件语法支持上面的所有的选项,除非在表格中进行标明.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"​```json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是要连接的Consul Agent的地址.默认为127.0.0.1:8500.这是Consul的默认绑定地址和端口.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 不建议你直接与 Consul的 Server直接进行交互,请与本地的Consul Agent进行交互.这样做是有一些原因")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 最重要的是本地agent可以复用与server的连接.减少HTTP的连接数.另外这个地址更好记.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul = "127.0.0.1:8500"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是用于连接Consul的ACL token. 如果你的集群未启用就不需要设置.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"//")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这个选项也可以通过环境变量 CONSUL_TOKEN 来进行设置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'token = "abcd1234"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是监听出发reload事件的信号,默认值如下所示.将这个值设置为空将引起 CT ,从而不监听reload事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'reload_signal = "SIGHUP"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是监听出发core dump事件的信号,默认值如下所示.将这个值设置为空将引起 CT ,从而不监听core dump信号")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'dump_signal = "SIGQUIT"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是监听出发graceful stop事件的信号,默认值如下所示.将这个值设置为空将引起 CT ,从而不监听graceful stop信号")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'kill_signal = "SIGINT"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是连接Consul的重试时间.Consul Template是高容错的设计.这意味着,出现失败他不会退出.而按照")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 分布式系统的惯例进行指数补偿和重试来等待集群恢复.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'retry = "10s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'// This is the maximum interval to allow "stale" data. By default, only the')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// Consul leader will respond to queries; any requests to a follower will")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// forward to the leader. In large clusters with many requests, this is not as")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// scalable, so this option allows any follower to respond to a query, so long")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// as the last-replicated data is within these bounds. Higher values result in")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// less cluster load, but are more likely to have outdated data.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是允许陈旧数据的最大时间.Consul默认只有领袖对请求进行相应.所有对追随者的请求将被转发给领袖.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 在有大量请求的大型集群中,这显得不够有扩展性.所以这个选项允许任何追随者响应查询,只要最后复制的数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 在这个范围内.数值越高,越减少集群负载,但是更容易接受到过期数据.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'max_stale = "10m"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是log的等级,如果你找到了bug,请打开debug 日志,这样我们可以更好的定位问题.这个选项也可用在命令行.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'log_level = "warn"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是存放Consul Template 进程的PID文件的路径,如果你计划发送定制的信号到这个进程这会比较有用.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'pid_file = "/path/to/pid"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是一个静止定时器,他定义了在模板渲染之前等待集群达到一致状态的最小和最大时间.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这对于一些变化较大的系统中比较有用,可以减少模板渲染的次数")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'wait = "5s:10s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这是 Vault配置的开始")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// Vault是HashiCorp的另外一个产品")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"vault {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the address of the Vault leader. The protocol (http(s)) portion")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // of the address is required.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  address = "https://vault.service.consul:8200"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the token to use when communicating with the Vault server.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // Like other tools that integrate with Vault, Consul Template makes the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // assumption that you provide it with a Vault token; it does not have the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // incorporated logic to generate tokens via Vault's auth methods.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  //")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This value can also be specified via the environment variable VAULT_TOKEN.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  token = "abcd1234"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This option tells Consul Template to automatically renew the Vault token")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // given. If you are unfamiliar with Vault's architecture, Vault requires")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // tokens be renewed at some regular interval or they will be revoked. Consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // Template will automatically renew the token at half the lease duration of")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // the token. The default value is true, but this option can be disabled if")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // you want to renew the Vault token using an out-of-band process.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  //")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // Note that secrets specified in a template (using {{secret}} for example)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // are always renewed, even if this option is set to false. This option only")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // applies to the top-level Vault token itself.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  renew = true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This section details the SSL options for connecting to the Vault server.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // Please see the SSL options below for more information (they are the same).")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ssl {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    // ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这部分配置请求的基本的权限验证信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  enabled  = true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  username = "test"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  password = "test"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这部分配置连接到Consul服务器的SSL信息.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssl {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 使用SSL需要先打开这个开关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  enabled = true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  // This enables SSL peer verification. The default value is "true", which')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // will check the global CA chain to make sure the given certificates are")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // valid. If you are using a self-signed certificate that you have not added")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // to the CA chain, you may want to disable SSL verification. However, please")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // understand this is a potential security vulnerability.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  verify = false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the path to the certificate to use to authenticate. If just a")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // certificate is provided, it is assumed to contain both the certificate and")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // the key to convert to an X509 certificate. If both the certificate and")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // key are specified, Consul Template will automatically combine them into an")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // X509 certificate for you.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  cert = "/path/to/client/cert"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  key = "/path/to/client/key"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the path to the certificate authority to use as a CA. This is")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // useful for self-signed certificates or for organizations using their own")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // internal certificate authority.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  ca_cert = "/path/to/ca"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 设置连接到syslog服务器的配置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 用于进行日志记录syslog {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 打开开关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  enabled = true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 设备名称")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  facility = "LOCAL5"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// This block defines the configuration for de-duplication mode. Please see the")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// de-duplication mode documentation later in the README for more information")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// on how de-duplication mode operates.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deduplicate {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This enables de-duplication mode. Specifying any other options also enables")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // de-duplication mode.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  enabled = true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the prefix to the path in Consul's KV store where de-duplication")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // templates will be pre-rendered and stored.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  prefix = "consul-template/dedup/"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// This block defines the configuration for exec mode. Please see the exec mode")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// documentation at the bottom of this README for more information on how exec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// mode operates and the caveats of this mode.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"exec {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the command to exec as a child process. There can be only one")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // command per Consul Template process.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  command = "/usr/bin/app"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is a random splay to wait before killing the command. The default")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // value is 0 (no wait), but large clusters should consider setting a splay")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // value to prevent all child processes from reloading at the same time when")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // data changes occur. When this value is set to non-zero, Consul Template")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // will wait a random period of time up to the splay value before reloading")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // or killing the child process. This can be used to prevent the thundering")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // herd problem on applications that do not gracefully reload.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  splay = "5s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This defines the signal that will be sent to the child process when a")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // change occurs in a watched template. The signal will only be sent after")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // the process is started, and the process will only be started after all")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // dependent templates have been rendered at least once. The default value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  // is "" (empty or nil), which tells Consul Template to restart the child')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // process instead of sending it a signal. This is useful for legacy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // applications or applications that cannot properly reload their")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // configuration without a full reload.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  reload_signal = "SIGUSR1"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This defines the signal sent to the child process when Consul Template is")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // gracefully shutting down. The application should begin a graceful cleanup.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // If the application does not terminate before the `kill_timeout`, it will")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  // be terminated (effectively "kill -9"). The default value is "SIGTERM".')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  kill_signal = "SIGINT"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This defines the amount of time to wait for the child process to gracefully")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // terminate when Consul Template exits. After this specified time, the child")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  // process will be force-killed (effectively "kill -9"). The default value is')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  // "30s".')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  kill_timeout = "2s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 这部分定义了对模板的配置,和其他配置块不同.这部分可以针对不同模板配置多次.也可以在CLI命令")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// 直接进行配置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"template {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这是输入模板的配置文件路径,必选项")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  source = "/path/on/disk/to/template.ctmpl"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这是源模板渲染之后存放的路径,如果父目录不存在Consul Template会尝试进行创建")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  destination = "/path/on/disk/where/template/will/render.txt"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // This is the optional command to run when the template is rendered. The")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // command will only run if the resulting template changes. The command must")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // return within 30s (configurable), and it must have a successful exit code.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // Consul Template is not a replacement for a process monitor or init system.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这是当模板渲染完成后可选的要执行的命令.这个命令只会在模板发生改变后才会运行.这个命令必须要在30秒")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 内进行返回(可配置),必须返回一个成功的退出码.Consul Template不能替代进程监视或者init 系统")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 的功能")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  command = "restart service foo"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这是最大的等待命令返回的时间,默认是30秒")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  command_timeout = "60s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这是渲染后的文件的权限,如果不设置,Consul Template将去匹配之前已经存在的文件的权限.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 如果文件不存在,权限会被设置为 0644")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  perms = 0600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这个选项对渲染之前的文件进行备份.他保持一个备份.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这个选项在发生意外更高时,有一个回滚策略.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  backup = true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  // 模板的分隔符,默认是 "{{"和"}}".但是对于一些模板用其他的分隔符可能更好')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 可以避免与本身的冲突")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  left_delimiter  = "{{"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  right_delimiter = "}}"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 这是最小和最大等待渲染一个新模板和执行命令的时间.使用 分号 个号.如果忽略最大值,最大")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  // 值会被设置为最小值的4倍.这个选项没有默认值.这个值相对全局所以的等待时间有最高优先级")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  wait = "2s:6s"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cn=s("p",null,[s("strong",null,"注意"),l(": 不是所有的选项都是必选的.例如: 如果你没有使用Vault你不用设置这一块. 类似的你没有使用syslog系统你也不需要指定syslog配置.")],-1),rn=s("p",null,[l("为了更加安全,"),s("code",null,"token"),l("也可以从环境变量里读取,使用 "),s("code",null,"CONSUL_TOKEN"),l(" 和 "),s("code",null,"VAULT_TOKEN"),l(".强烈建议你不要把token放到未加密的文本配置文件中.")],-1),pn={id:"模版语法",tabindex:"-1"},Cn=s("p",null,"Consul Template 使用了Go的模板语法.如果你对他的语法不熟悉建议你读下文档.他的语法看起来与 Mustache, Handlebars, 或者 Liquid 类似.",-1),An=s("p",null,"在Go 提供的模板函数之外,Consul Template暴露了以下的函数:",-1),dn={id:"api-函数",tabindex:"-1"},un=s("p",null,[s("strong",null,"datacenters"),l(" 查询目录中的所有数据中心.使用以下语法:")],-1),hn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{datacenters}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yn=s("p",null,[s("strong",null,"file"),l(" 读取并输出磁盘上的本地文件,如果无法读取产生一个错误.使用如下语法")],-1),Dn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{file "/path/to/local/file"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gn=s("p",null,[l("这个例子将输出 "),s("code",null,"/path/to/local/file"),l(" 文件内容到模板. 注意:这不会在嵌套模板中被处理")],-1),_n=s("p",null,[s("strong",null,"key"),l(" 查询Consul指定key的值,如果key的值不能转换为字符串,将产生错误.使用如下语法:")],-1),mn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{key "service/redis/maxconns@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vn=s("p",null,[l("上面的例子查询了在"),s("code",null,"east-aws"),l("数据中心的 "),s("code",null,"service/redis/maxconns"),l("的值.如果忽略数据中心参数,将会查询本地数据中心的值:")],-1),fn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{key "service/redis/maxconns"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bn=s("p",null,"Consul键值结构的美妙在于,这完全取决于你!",-1),kn=s("p",null,[s("strong",null,"key_or_default"),l(" 查询Consul中指定的key的值,如果key不存在,则返回默认值.使用方式如下")],-1),wn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{key_or_default "service/redis/maxconns@east-aws" "5"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xn=s("p",null,[l("注意Consul Template使用了多个阶段的运算.在第一阶段的运算如果Consul没有返回值,则会一直使用默认值.后续模板解析中如果值存在了则会读取真实的值.这很重要,运维Consul Templae不会因为"),s("code",null,"key_or_default"),l("没找到key而阻塞模板的的渲染.即使key存在如果Consul没有按时返回这个数据,也会使用默认值来进行替代.")],-1),Tn=s("p",null,[s("strong",null,"ls"),l(" 查看Consul的所有以指定前缀开头的key-value对.如果有值无法转换成字符串则会产生一个错误:")],-1),In=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range ls "service/redis@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{.Key}} {{.Value}}{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sn=s("p",null,[l("如果Consul实例在"),s("code",null,"east-aws"),l("数据中心存在这个结构"),s("code",null,"service/redis"),l(",渲染后的模板应该类似这样:")],-1),Nn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"minconns 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"maxconns 12")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pn=s("p",null,"如果你忽略数据中心属性,则会返回本地数据中心的查询结果.",-1),En=s("p",null,[s("strong",null,"node"),l(" 查询目录中的一个节点信息")],-1),Rn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{node "node1"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jn=s("p",null,"如果未指定任何参数,则当前agent所在节点将会被返回:",-1),Ln=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{node}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),On=s("p",null,"你可以指定一个可选的参数来指定数据中心:",-1),Vn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{node "node1" "@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hn=s("p",null,[l("如果指定的节点没有找到则会返回"),s("code",null,"nil"),l(".如果节点存在就会列出节点的信息和节点提供的服务.")],-1),Fn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{with node}}{{.Node.Node}} ({{.Node.Address}}){{range .Services}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  {{.Service}} {{.Port}} ({{.Tags | join ","}}){{end}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Un=s("p",null,[s("strong",null,"nodes"),l(" 查询目录中的全部节点,使用如下语法")],-1),Gn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{nodes}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mn=s("p",null,"这个例子会查询Consul的默认数据中心.你可以使用可选参数指定一个可选参数来指定数据中心:",-1),Wn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{nodes "@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kn=s("p",null,"这个例子会查询east-aws数据中心的所有几点.",-1),qn=s("p",null,[s("strong",null,"secret"),l(" 查询"),s("code",null,"Vault"),l("中指定路径的密匙.如果指定的路径不存在或者"),s("code",null,"Vault"),l("的"),s("code",null,"Token"),l("没有足够权限去读取指定的路径,将会产生一个错误.如果路径存在但是key不存在则返回“.")],-1),$n=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{with secret "secret/passwords"}}{{.Data.password}}{{end}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qn=s("p",null,"可以使用如下字段:",-1),Jn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LeaseID - the unique lease identifier")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LeaseDuration - the number of seconds the lease is valid")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Renewable - if the secret is renewable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`Data - the raw data - this is a map[string]interface{}, so it can be queried using Go's templating "dot notation"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'If the map key has dots "." in it, you need to access the value using the index function:')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{index .Data "my.key.with.dots"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"If additional arguments are passed to the function, then the operation is assumed to be a write operation instead of a read operation. The write operation must return data in order to be valid. This is especially useful for the PKI secret backend, for example.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{ with secret "pki/issue/my-domain-dot-com" "common_name=foo.example.com" }}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{ .Data.certificate }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{ end }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"The parameters must be key=value pairs, and each pair must be its own argument to the function:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{ secret "path/" "a=b" "c=d" "e=f" }}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Please always consider the security implications of having the contents of a secret in plain-text on disk. If an attacker is able to get access to the file, they will have access to plain-text secrets.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zn=s("p",null,"Please note that Vault does not support blocking queries. As a result, Consul Template will not immediately reload in the event a secret is changed as it does with Consul’s key-value store. Consul Template will fetch a new secret at half the lease duration of the original secret. For example, most items in Vault’s generic secret backend have a default 30 day lease. This means Consul Template will renew the secret every 15 days. As such, it is recommended that a smaller lease duration be used when generating the initial secret to force Consul Template to renew more often.",-1),Xn=s("p",null,[s("strong",null,"secrets"),l(" Query Vault to list the secrets at the given path. Please note this requires Vault 0.5+ and the endpoint you want to list secrets must support listing. Not all endpoints support listing. The result is the list of secret names as strings.")],-1),Bn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range secrets "secret/"}}{{.}}{{end}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yn=s("p",null,"The trailing slash is optional in the template, but the generated secret dependency will always have a trailing slash in log output.",-1),Zn=s("p",null,"To iterate and list over every secret in the generic secret backend in Vault, for example, you would need to do something like this:",-1),sa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range secrets "secret/"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{with secret (printf "secret/%s" .)}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{range $k, $v := .Data}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{$k}}: {{$v}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),la=s("p",null,"You should probably never do this. Please also note that Vault does not support blocking queries. To understand the implications, please read the note at the end of the secret function.",-1),ea=s("p",null,[s("strong",null,"service"),l(" 查询Consul中匹配表达式的服务.语法如下:")],-1),na=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "release.web@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),aa=s("p",null,[l("上面的例子查询Consul中,在"),s("code",null,"east-aws"),l("数据中心存在的健康的 "),s("code",null,"web"),l("服务.tag和数据中心参数是可选的.从当前数据中心查询所有节点的"),s("code",null,"web"),l("服务而不管tag,查询语法如下:")],-1),oa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "web"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ta=s("p",null,[l("这个函数返回"),s("code",null,"[]*HealthService"),l("结构.可按照如下方式应用到模板:")],-1),ca=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range service "web@data center"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server {{.Name}} {{.Address}}:{{.Port}}{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ia=s("p",null,"产生如下输出:",-1),ra=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server nyc_web_01 123.456.789.10:8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server nyc_web_02 456.789.101.213:8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pa=s("p",null,[l("默认值会返回健康的服务,如果你想获取所有服务,可以增加"),s("code",null,"any"),l("选项,如下:")],-1),Ca=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "web" "any"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Aa=s("p",null,"这样就会返回注册过的所有服务,而不论他的状态如何.",-1),da=s("p",null,"如果你想过滤指定的一个或者多个健康状态,你可以通过逗号隔开多个健康状态:",-1),ua=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "web" "passing, warning"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ha=s("p",null,[l("这样将会返回被他们的节点和服务级别的检查定义标记为 “passing” 或者 “warning”的服务. 请注意逗号是 "),s("code",null,"OR"),l("而不是"),s("code",null,"AND"),l("的意思.")],-1),ya=s("p",null,[l("指定了超过一个状态过滤,并包含"),s("code",null,"any"),l("将会返回一个错误.因为"),s("code",null,"any"),l("是比所有状态更高级的过滤.")],-1),Da=s("p",null,"后面这2种方式有些架构上的不同:",-1),ga=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "web"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "web" "passing"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_a=s("p",null,[l("前者会返回Consul认为"),s("code",null,"healthy"),l("和"),s("code",null,"passing"),l("的所有服务.后者将返回所有已经在Consul注册的服务.然后会执行一个客户端的过滤.通常如果你想获取健康的服务,你应该不要使用"),s("code",null,"passing"),l("参数,直接忽略第三个参数即可.然而第三个参数在你想查询 passing或者"),s("code",null,"warning"),l("的服务会比较有用,如下:")],-1),ma=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{service "web" "passing, warning"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),va=s("p",null,"服务的状态也是可见的,如果你想自己做一些额外的过滤,语法如下:",-1),fa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range service "web" "any"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{if eq .Status "critical"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// Critical state!{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{if eq .Status "passing"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"// Ok{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ba=s("p",null,[l("执行命令时,在Consul将服务设置为维护模式,只需要在你的命令上包上Consul的 "),s("code",null,"maint"),l(" 调用:")],-1),ka=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/sh")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set -e")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul maint -enable -service web -reason "Consul Template updated"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service nginx reload")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"consul maint -disable -service web")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wa=s("p",null,"另外如果你没有安装Consul agent,你可以直接调用API请求:",-1),xa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/sh")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set -e")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'curl -X PUT "http://$CONSUL_HTTP_ADDR/v1/agent/service/maintenance/web?enable=true&reason=Consul+Template+Updated"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service nginx reload")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'curl -X PUT "http://$CONSUL_HTTP_ADDR/v1/agent/service/maintenance/web?enable=false"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ta=s("p",null,[s("strong",null,"services"),l(" 查询Consul目录中的所有服务,使用如下语法:")],-1),Ia=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{services}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sa=s("p",null,"这个例子将查询Consul的默认数据中心,你可以指定一个可选参数来指定数据中心:",-1),Na=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{services "@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pa=s("p",null,"请注意: services函数与service是不同的,service接受更多参数并且查询监控的服务列表.这个查询Consul目录并返回一个服务的tag的Map,如下:",-1),Ea=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{range services}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{.Name}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{range .Tags}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  {{.}}{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ra=s("p",null,[s("strong",null,"tree"),l(" 查询所有指定前缀的key-value值对,如果其中的值有无法转换为字符串的则引发错误:")],-1),ja=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'{{range tree "service/redis@east-aws"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{{.Key}} {{.Value}}{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),La=s("p",null,[l("如果Consul实例在"),s("code",null,"east-aws"),l("数据中心有一个"),s("code",null,"service/redis"),l("结构,模板的渲染结果类似下面:")],-1),Oa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"minconns 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"maxconns 12")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'nested/config/value "value"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Va=s("p",null,[l("和"),s("code",null,"ls"),l("不同,"),s("code",null,"tree"),l("返回前缀下的所有key.和Unix的tree命令比较像.如果忽略数据中心参数,则会使用本地数据中心")],-1),Ha={id:"haproxy-实例",tabindex:"-1"},Fa=s("p",null,[l("根据haproxy服务的配置文件创建一个consul-template模版渲染文件："),s("code",null,"haproxy.ctmpl")],-1),Ua=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Consul Haproxy configured")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"global")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        maxconn         20480")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ulimit-n        65535")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log             127.0.0.1 local5")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        uid             200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        gid             200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        chroot          /usr/local/haproxy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        nbproc          1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        daemon")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        pidfile         /usr/local/haproxy/logs/haproxy.pid")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"defaults")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log             global")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode            http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          httplog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          dontlognull")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          forwardfor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          abortonclose")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        retries         3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        maxconn         3000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats           enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats           hide-version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   uri     /admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   auth    admin:admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   refresh 10s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        balance         roundrobin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout connect 5000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout client 50000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout server 50000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout check 2000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"listen web_haproxy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        bind 0.0.0.0:8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log     127.0.0.1 local5 err")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   refresh 5s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   uri /admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   realm liang lian")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   auth admin:admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   hide-version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   admin if TRUE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"frontend consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        bind    0.0.0.0:8500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode    http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log     global")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        default_backend consul-cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"backend consul-cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        {{range service "Faceid"}}')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        server {{.ID}} {{.Address}}:{{.Port}} check inter 5000 fall 1 rise 2 weight 2{{end}}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ga=s("p",null,"运行consul-template作为一个服务,通过上面的渲染模版渲染一个haproxy.cfg的配置文件，然后重启haproxy服务",-1),Ma=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'consul-template -consul-addr=10.201.102.185:8500 -template "/root/haproxy.ctmpl:/etc/haproxy.cfg:service haproxy restart"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wa=s("p",null,[l("渲染后的"),s("code",null,"haproxy.cfg")],-1),Ka=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Consul Haproxy configured")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"global")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        maxconn         20480")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ulimit-n        65535")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log             127.0.0.1 local5")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        uid             200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        gid             200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        chroot          /usr/local/haproxy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        nbproc          1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        daemon")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        pidfile         /usr/local/haproxy/logs/haproxy.pid")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"defaults")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log             global")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode            http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          httplog")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          dontlognull")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          forwardfor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        option          abortonclose")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        retries         3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        maxconn         3000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats           enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats           hide-version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   uri     /admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   auth    admin:admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   refresh 10s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        balance         roundrobin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout connect 5000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout client 50000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout server 50000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        timeout check 2000ms")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"listen web_haproxy")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        bind 0.0.0.0:8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log     127.0.0.1 local5 err")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   refresh 5s")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   uri /admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   realm liang lian")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   auth admin:admin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   hide-version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        stats   admin if TRUE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"frontend consul")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        bind    0.0.0.0:8500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode    http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        log     global")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        default_backend consul-cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"backend consul-cluster")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        mode http")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        server Faceid 10.201.102.198:9000 check inter 5000 fall 1 rise 2 weight 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        server Faceid 10.201.102.199:9000 check inter 5000 fall 1 rise 2 weight 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        server Faceid 10.201.102.200:9000 check inter 5000 fall 1 rise 2 weight 2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),qa=s("p",null,"整个就是搭建consul集群，平台中的服务会注册到consul集群中，haproxy避免consul-template调consul时出现单点故障consul-template无法工作做的高可用，Consul-template就是能在整个平台的各个系统和应用中使用，查询consul集群来获取平台上各个应用的存活状态和IP。",-1),$a=s("p",null,"整套下来实现了两个重点：",-1),Qa=s("p",null,"实现了中心服务注册查询 平台中其他节点的查询服务和配置文件自动更新",-1),Ja={id:"参考资料",tabindex:"-1"},za={id:"下载",tabindex:"-1"};function Xa(o,Ba,Ya,Za,i,so){const n=u,r=p;return d(),A(r,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":e(()=>[s("h1",D,[l("使用consul "),a(n,{class:"header-anchor",href:"#使用consul","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("h2",g,[l("介绍 "),a(n,{class:"header-anchor",href:"#介绍","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),_,m,s("h2",v,[l("基础架构 "),a(n,{class:"header-anchor",href:"#基础架构","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),f,b,k,w,x,s("p",null,[l("更多介绍查看官网"),a(n,{href:"https://www.consul.io/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("点击前往")]),_:1})]),s("h2",T,[l("安装Consul "),a(n,{class:"header-anchor",href:"#安装consul","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[l("安装Consul,找到适合你系统的包下载他.Consul打包为一个’Zip’文件."),a(n,{href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("前往下载")]),_:1})]),I,s("h2",S,[l("验证安装 "),a(n,{class:"header-anchor",href:"#验证安装","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),N,P,E,s("h2",R,[l("运行Agent "),a(n,{class:"header-anchor",href:"#运行agent","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),j,L,s("p",null,[l("查看启动数据中心的细节请查看"),a(n,{href:"https://www.consul.io/docs/guides/bootstrapping.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("这里")]),_:1}),l(".")]),s("h2",O,[l("启动 Consul Server "),a(n,{class:"header-anchor",href:"#启动-consul-server","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),V,H,F,U,G,M,s("h2",W,[l("启动 Consul Client "),a(n,{class:"header-anchor",href:"#启动-consul-client","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),K,q,$,Q,J,z,X,s("h2",B,[l("停止Agent "),a(n,{class:"header-anchor",href:"#停止agent","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Y,Z,s("p",null,[l("此外,如果一个agent作为一个服务器,一个优雅的离开是很重要的,可以避免引起潜在的可用性故障影响达成"),a(n,{href:"https://www.consul.io/docs/internals/consensus.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("一致性协议")]),_:1}),l(".")]),s("p",null,[l("查看"),a(n,{href:"https://www.consul.io/docs/internals/consensus.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("这里")]),_:1}),l("了解添加和移除server.")]),s("h2",ss,[l("更新服务 "),a(n,{class:"header-anchor",href:"#更新服务","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),ls,es,ns,as,os,ts,cs,is,rs,ps,Cs,As,s("p",null,[l("HTTP API注册服务,curl命令或者postman 以"),ds,l("方式请求consul HTTP API更多细节"),a(n,{href:"https://www.consul.io/docs/agent/http/catalog.html#catalog_register",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("点击查看")]),_:1})]),us,s("h2",hs,[l("查询服务 "),a(n,{class:"header-anchor",href:"#查询服务","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),ys,Ds,gs,_s,ms,vs,fs,bs,ks,ws,xs,Ts,Is,s("h2",Ss,[l("WEB管理界面 "),a(n,{class:"header-anchor",href:"#web管理界面","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[l("Consul同时提供了一个漂亮的功能齐全的WEB界面,开箱即用.界面可以用来查看所有的节点,可以查看健康检查和他们的当前状态.可以读取和设置K/V 存储的数据.UI自动支持多数据中心."),a(n,{href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("点击前往下载")]),_:1})]),Ns,Ps,Es,s("ul",null,[Rs,s("li",null,[js,l("：consul服务侦听地址，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1所以不对外提供服务，如果你要对外提供服务改成0.0.0.0 可通过"),a(n,{href:"http://10.201.102.198:8500/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("http://10.201.102.198:8500")]),_:1}),l("访问WEB管理界面。")])]),Ls,s("h2",Os,[l("健康检查 "),a(n,{class:"header-anchor",href:"#健康检查","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Vs,Hs,Fs,Us,Gs,Ms,Ws,Ks,qs,s("h2",$s,[l("检查健康状态 "),a(n,{class:"header-anchor",href:"#检查健康状态","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Qs,Js,zs,Xs,Bs,s("h2",Ys,[l("K ／V "),a(n,{class:"header-anchor",href:"#k-／v","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Zs,sl,ll,el,nl,al,ol,tl,cl,il,rl,pl,Cl,Al,dl,ul,hl,s("h1",yl,[l("Conusl 命令行 "),a(n,{class:"header-anchor",href:"#conusl-命令行","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Dl,gl,s("p",null,[l("更详细见"),a(n,{href:"https://www.consul.io/docs/commands/index.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("官网")]),_:1})]),s("h2",_l,[l("Agent "),a(n,{class:"header-anchor",href:"#agent","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),ml,vl,s("h2",fl,[l("event "),a(n,{class:"header-anchor",href:"#event","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),bl,kl,s("h2",wl,[l("exec "),a(n,{class:"header-anchor",href:"#exec","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),xl,Tl,s("h2",Il,[l("force-leave "),a(n,{class:"header-anchor",href:"#force-leave","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Sl,Nl,s("h2",Pl,[l("info "),a(n,{class:"header-anchor",href:"#info","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),El,Rl,s("h2",jl,[l("join "),a(n,{class:"header-anchor",href:"#join","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Ll,Ol,s("h2",Vl,[l("keygen "),a(n,{class:"header-anchor",href:"#keygen","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Hl,Fl,s("h2",Ul,[l("leave "),a(n,{class:"header-anchor",href:"#leave","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Gl,Ml,s("h2",Wl,[l("members "),a(n,{class:"header-anchor",href:"#members","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Kl,ql,s("h2",$l,[l("monitor "),a(n,{class:"header-anchor",href:"#monitor","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Ql,Jl,s("h2",zl,[l("reload "),a(n,{class:"header-anchor",href:"#reload","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Xl,Bl,s("h2",Yl,[l("version "),a(n,{class:"header-anchor",href:"#version","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Zl,s("h2",se,[l("watch "),a(n,{class:"header-anchor",href:"#watch","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),le,ee,s("h1",ne,[l("Consul 配置 "),a(n,{class:"header-anchor",href:"#consul-配置","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),ae,oe,te,ce,ie,re,pe,s("h1",Ce,[l("HTTP API "),a(n,{class:"header-anchor",href:"#http-api","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Ae,de,ue,s("h2",he,[l("agent "),a(n,{class:"header-anchor",href:"#agent-1","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),ye,De,s("h2",ge,[l("catalog "),a(n,{class:"header-anchor",href:"#catalog","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),_e,me,s("h2",ve,[l("health "),a(n,{class:"header-anchor",href:"#health","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),fe,be,s("h2",ke,[l("session "),a(n,{class:"header-anchor",href:"#session","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),we,xe,s("h2",Te,[l("acl "),a(n,{class:"header-anchor",href:"#acl","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Ie,Se,s("h2",Ne,[l("event "),a(n,{class:"header-anchor",href:"#event-1","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Pe,Ee,s("h2",Re,[l("status "),a(n,{class:"header-anchor",href:"#status","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),je,Le,s("h1",Oe,[l("Consul-Template "),a(n,{class:"header-anchor",href:"#consul-template","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Ve,He,Fe,Ue,s("h2",Ge,[l("安装 "),a(n,{class:"header-anchor",href:"#安装","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[l("你可以在"),a(n,{href:"https://releases.hashicorp.com/consul-template/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("发布页")]),_:1}),l("下载发布包.如果你希望自己编译请查看"),a(n,{href:"https://github.com/hashicorp/consul-template#contributing",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("说明文档")]),_:1}),l(".")]),s("h2",Me,[l("使用 "),a(n,{class:"header-anchor",href:"#使用","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),We,Ke,qe,s("h2",$e,[l("命令行 "),a(n,{class:"header-anchor",href:"#命令行","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Qe,Je,ze,Xe,Be,Ye,Ze,sn,ln,en,nn,an,on,tn,cn,rn,s("h2",pn,[l("模版语法 "),a(n,{class:"header-anchor",href:"#模版语法","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Cn,An,s("h2",dn,[l("API 函数 "),a(n,{class:"header-anchor",href:"#api-函数","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),un,hn,yn,Dn,gn,_n,mn,vn,fn,bn,kn,wn,xn,Tn,In,Sn,Nn,Pn,En,Rn,jn,Ln,On,Vn,Hn,Fn,Un,Gn,Mn,Wn,Kn,qn,$n,Qn,Jn,zn,Xn,Bn,Yn,Zn,sa,la,ea,na,aa,oa,ta,ca,ia,ra,pa,Ca,Aa,da,ua,ha,ya,Da,ga,_a,ma,va,fa,ba,ka,wa,xa,Ta,Ia,Sa,Na,Pa,Ea,Ra,ja,La,Oa,Va,s("p",null,[a(n,{href:"https://book-consul-guide.vnzmi.com/11_consul_template.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("查看更多")]),_:1})]),s("p",null,[a(n,{href:"https://book-consul-guide.vnzmi.com/11_consul_template.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("项目Github地址")]),_:1})]),s("h2",Ha,[l("Haproxy 实例 "),a(n,{class:"header-anchor",href:"#haproxy-实例","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),Fa,Ua,Ga,Ma,s("p",null,[l("10.201.102.185 看我上篇文章"),a(n,{href:"http://www.liangxiansen.cn/2017/03/06/haproxy/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Haproxy")]),_:1}),l("，这是consul集群的VIP，为了避免单独调某一台服务器服务器出现故障后consul-template无法工作。")]),Wa,Ka,qa,$a,Qa,s("h1",Ja,[l("参考资料 "),a(n,{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[a(n,{href:"https://my.oschina.net/guol/blog/675281",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://my.oschina.net/guol/blog/675281")]),_:1}),a(n,{href:"https://www.consul.io/docs/guides/index.html",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://www.consul.io/docs/guides/index.html")]),_:1}),a(n,{href:"https://www.gitbook.com/book/vincentmi/consul-guide/details",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://www.gitbook.com/book/vincentmi/consul-guide/details")]),_:1})]),s("p",null,[a(n,{href:"https://my.oschina.net/abcfy2/blog/675665",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://my.oschina.net/abcfy2/blog/675665")]),_:1})]),s("h1",za,[l("下载 "),a(n,{class:"header-anchor",href:"#下载","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[a(n,{href:"http://www.liangxiansen.cn/files/consul.pdf",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("点击下载PDF文件")]),_:1})]),s("p",null,[l("原:"),a(n,{href:"http://www.liangxiansen.cn/2017/04/06/consul/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("http://www.liangxiansen.cn/2017/04/06/consul/")]),_:1})])]),"main-header":e(()=>[t(o.$slots,"main-header")]),"main-header-after":e(()=>[t(o.$slots,"main-header-after")]),"main-nav":e(()=>[t(o.$slots,"main-nav")]),"main-content":e(()=>[t(o.$slots,"main-content")]),"main-content-after":e(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[t(o.$slots,"main-nav-after")]),comment:e(()=>[t(o.$slots,"comment")]),footer:e(()=>[t(o.$slots,"footer")]),aside:e(()=>[t(o.$slots,"aside")]),"aside-custom":e(()=>[t(o.$slots,"aside-custom")]),default:e(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const co=C(y,[["render",Xa]]);export{to as __pageData,co as default};
