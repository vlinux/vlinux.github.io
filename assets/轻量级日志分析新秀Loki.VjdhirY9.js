import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Bth_JSAQ.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as g,u as h,a as b}from"./chunks/vue-router.DpP0leKZ.js";import{aa as k,ap as l,ag as e,af as a,ai as n,P as f,ab as v,a1 as y}from"./framework.GHZxz7jq.js";import"./index.Di1n2b66.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.BWywLGB4.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.DoKt6roH.js";const _=g("/posts/轻量级日志分析新秀Loki",async i=>JSON.parse('{"title":"轻量级日志分析新秀Loki","description":"","frontmatter":{"title":"轻量级日志分析新秀Loki","categories":"ELK-stack","tags":["Loki"],"date":"2021-04-07 14:08:55"},"headers":[],"relativePath":"pages/posts/轻量级日志分析新秀Loki.md","lastUpdated":null}'),{lazy:(i,o)=>i.name===o.name}),V={__name:"轻量级日志分析新秀Loki",setup(i,{expose:o}){const{data:c}=_(),r=b(),m=h(),t=Object.assign(m.meta.frontmatter||{},c.value?.frontmatter||{});return r.currentRoute.value.data=c.value,y("valaxy:frontmatter",t),globalThis.$frontmatter=t,o({frontmatter:{title:"轻量级日志分析新秀Loki",categories:"ELK-stack",tags:["Loki"],date:"2021-04-07 14:08:55"}}),(s,p)=>{const u=d;return v(),k(u,{frontmatter:f(t)},{"main-content-md":l(()=>[...p[0]||(p[0]=[a("h3",{id:"简介",tabindex:"-1"},[n("简介： "),a("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介："'},"​")],-1),a("p",null,"Loki的第一个稳定版本于2019年11月19日发布，是 Grafana Labs 团队最新的开源项目，是一个水平可扩展，高可用性，多租户的日志聚合系统。Loki 是专门用于聚集日志数据，重点是高可用性和可伸缩性。与竞争对手不同的是，它确实易于安装且资源效率极高。",-1),a("h3",{id:"特点",tabindex:"-1"},[n("特点： "),a("a",{class:"header-anchor",href:"#特点","aria-label":'Permalink to "特点："'},"​")],-1),a("p",null,"优点：",-1),a("p",null,"1、Loki的架构非常简单，使用了和prometheus一样的标签来作为索引，通过这些标签既可以查询日志的内容也可以查询到监控的数据，不但减少了两种查询之间的切换成本，也极大地降低了日志索引的存储。",-1),a("p",null,"2、与ELK相比，消耗的成本更低，具有成本效益。",-1),a("p",null,"3、在日志的收集以及可视化上可以连用grafana，实现在日志上的筛选以及查看上下行的功能。",-1),a("h3",{id:"缺点",tabindex:"-1"},[n("缺点： "),a("a",{class:"header-anchor",href:"#缺点","aria-label":'Permalink to "缺点："'},"​")],-1),a("p",null,"1、技术比较新颖，相对应的论坛不是非常活跃。",-1),a("p",null,"2、功能单一，只针对日志的查看，筛选有好的表现，对于数据的处理以及清洗没有ELK强大，同时与ELK相比，对于后期，ELK可以连用各种技术进行日志的大数据处理，但是loki不行。",-1),a("h3",{id:"组成",tabindex:"-1"},[n("组成 "),a("a",{class:"header-anchor",href:"#组成","aria-label":'Permalink to "组成"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"1.loki是主服务器，负责存储日志和处理查询。")]),n(`
`),a("span",{class:"line"},[a("span",null,"2.promtail是代理，负责收集日志并将其发送给 loki 。")]),n(`
`),a("span",{class:"line"},[a("span",null,"3.Grafana用于 UI 展示。")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("p",null,"本次安装使用docker部署",-1),a("h4",{id:"_1-0-安装-docker-compose",tabindex:"-1"},[n("1.0 安装 docker-compose "),a("a",{class:"header-anchor",href:"#_1-0-安装-docker-compose","aria-label":'Permalink to "1.0 安装  docker-compose"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,'curl -L "https://github.com/docker/compose/releases/download/1.28.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose')]),n(`
`),a("span",{class:"line"},[a("span",null,"chmod +x /usr/local/bin/docker-compose")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h4",{id:"_2-0-下载yaml文件",tabindex:"-1"},[n("2.0 下载yaml文件 "),a("a",{class:"header-anchor",href:"#_2-0-下载yaml文件","aria-label":'Permalink to "2.0 下载yaml文件"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"wget https://raw.githubusercontent.com/grafana/loki/v2.2.0/production/docker-compose.yaml -O docker-compose.yaml")]),n(`
`),a("span",{class:"line"},[a("span",null,'version: "3"')]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"networks:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  loki:")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"services:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  loki:")]),n(`
`),a("span",{class:"line"},[a("span",null,"    image: grafana/loki:2.0.0")]),n(`
`),a("span",{class:"line"},[a("span",null,"    ports:")]),n(`
`),a("span",{class:"line"},[a("span",null,'      - "3100:3100"')]),n(`
`),a("span",{class:"line"},[a("span",null,"    command: -config.file=/etc/loki/local-config.yaml")]),n(`
`),a("span",{class:"line"},[a("span",null,"    networks:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - loki")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"  promtail:")]),n(`
`),a("span",{class:"line"},[a("span",null,"    image: grafana/promtail:2.0.0")]),n(`
`),a("span",{class:"line"},[a("span",null,"    volumes:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - /var/log:/var/log")]),n(`
`),a("span",{class:"line"},[a("span",null,"    command: -config.file=/etc/promtail/config.yml")]),n(`
`),a("span",{class:"line"},[a("span",null,"    networks:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - loki")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"  grafana:")]),n(`
`),a("span",{class:"line"},[a("span",null,"    image: grafana/grafana:latest")]),n(`
`),a("span",{class:"line"},[a("span",null,"    ports:")]),n(`
`),a("span",{class:"line"},[a("span",null,'      - "3000:3000"')]),n(`
`),a("span",{class:"line"},[a("span",null,"    networks:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - loki")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h4",{id:"_3-0-启动服务",tabindex:"-1"},[n("3.0 启动服务 "),a("a",{class:"header-anchor",href:"#_3-0-启动服务","aria-label":'Permalink to "3.0 启动服务"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"docker-compose -f docker-compose.yaml up")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h4",{id:"_4-0-检查服务",tabindex:"-1"},[n("4.0 检查服务 "),a("a",{class:"header-anchor",href:"#_4-0-检查服务","aria-label":'Permalink to "4.0 检查服务"'},"​")],-1),a("h4",{id:"_5-0-配置服务",tabindex:"-1"},[n("5.0 配置服务 "),a("a",{class:"header-anchor",href:"#_5-0-配置服务","aria-label":'Permalink to "5.0 配置服务"'},"​")],-1),a("p",null,[a("a",{href:"http://192.168.106.202:3000/!%5B640%5D(https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140410.png)",target:"_blank",rel:"noreferrer"},"http://192.168.106.202:3000/![640](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140410.png)")],-1),a("p",null,"默认granfna密码admin/admin",-1),a("h5",{id:"_5-1-配置数据源",tabindex:"-1"},[n("5.1 配置数据源 "),a("a",{class:"header-anchor",href:"#_5-1-配置数据源","aria-label":'Permalink to "5.1 配置数据源"'},"​")],-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140449.png",alt:"640 (1)",loading:"lazy",decoding:"async"})],-1),a("p",null,"配置ip和默认数据源，配置完成点击测试/保存",-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140524.png",alt:"640 (2)",loading:"lazy",decoding:"async"})],-1),a("h5",{id:"_5-2-配置数据源",tabindex:"-1"},[n("5.2 配置数据源 "),a("a",{class:"header-anchor",href:"#_5-2-配置数据源","aria-label":'Permalink to "5.2 配置数据源"'},"​")],-1),a("p",null,"explore 查询样例",-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140548.png",alt:"640 (3)",loading:"lazy",decoding:"async"})],-1),a("h5",{id:"_5-3-输出匹配日志信息",tabindex:"-1"},[n("5.3 输出匹配日志信息 "),a("a",{class:"header-anchor",href:"#_5-3-输出匹配日志信息","aria-label":'Permalink to "5.3 输出匹配日志信息"'},"​")],-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140619.png",alt:"640 (4)",loading:"lazy",decoding:"async"})],-1),a("p",null,"至此一次样例日志查询完成",-1),a("h4",{id:"_6-0-promtail配置详解",tabindex:"-1"},[n("6.0 promtail配置详解 "),a("a",{class:"header-anchor",href:"#_6-0-promtail配置详解","aria-label":'Permalink to "6.0 promtail配置详解"'},"​")],-1),a("p",null,"promtail容器为日志采集容器，配置文件在promtail容器/etc/promtail/config.yml，将该容器部署在需要采集日志的服务器上就能正常采集日志传回loki服务收集整理",-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"root@2a0cc144dd58:/#  cat  /etc/promtail/config.yml")]),n(`
`),a("span",{class:"line"},[a("span",null,"server:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  http_listen_port: 9080")]),n(`
`),a("span",{class:"line"},[a("span",null,"  grpc_listen_port: 0")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"positions:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  filename: /tmp/positions.yaml")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"clients:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  - url: http://loki:3100/loki/api/v1/push     #这里配置的地址为loki服务器日志收集的信息")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"scrape_configs:")]),n(`
`),a("span",{class:"line"},[a("span",null,"- job_name: system")]),n(`
`),a("span",{class:"line"},[a("span",null,"  static_configs:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  - targets:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - localhost")]),n(`
`),a("span",{class:"line"},[a("span",null,"    labels:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      job: varlogs                       #这里为刚才选择job下子标签")]),n(`
`),a("span",{class:"line"},[a("span",null,"      __path__: /var/log/*log            #将采集的日志放在/var/log/*log下自动发现")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h4",{id:"_7-0-增加一台服务器日志采集",tabindex:"-1"},[n("7.0 增加一台服务器日志采集 "),a("a",{class:"header-anchor",href:"#_7-0-增加一台服务器日志采集","aria-label":'Permalink to "7.0 增加一台服务器日志采集"'},"​")],-1),a("h5",{id:"_7-1-编写-promtail的配置文件config-yml",tabindex:"-1"},[n("7.1 编写 promtail的配置文件config.yml "),a("a",{class:"header-anchor",href:"#_7-1-编写-promtail的配置文件config-yml","aria-label":'Permalink to "7.1 编写  promtail的配置文件config.yml"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"mkdir  /root/promtail  &&cd  /root/promtail")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"[root@node2 promtail]# cat config.yml ")]),n(`
`),a("span",{class:"line"},[a("span",null,"server:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  http_listen_port: 9080")]),n(`
`),a("span",{class:"line"},[a("span",null,"  grpc_listen_port: 0")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"positions:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  filename: /tmp/positions.yaml")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"clients:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  - url: http://192.168.106.202:3100/loki/api/v1/push     #这里配置的地址为loki服务器日志收集的信息")]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"scrape_configs:")]),n(`
`),a("span",{class:"line"},[a("span",null,"- job_name: mysql")]),n(`
`),a("span",{class:"line"},[a("span",null,"  static_configs:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  - targets:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - localhost")]),n(`
`),a("span",{class:"line"},[a("span",null,"    labels:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      job: mysql                         #这里为刚才选择job下子标签")]),n(`
`),a("span",{class:"line"},[a("span",null,"      __path__: /var/log/*log            #将采集的日志放在/var/log/*log下自动发现")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h5",{id:"_7-2-编写docker-compose-yaml配置文件",tabindex:"-1"},[n("7.2 编写docker-compose.yaml配置文件 "),a("a",{class:"header-anchor",href:"#_7-2-编写docker-compose-yaml配置文件","aria-label":'Permalink to "7.2 编写docker-compose.yaml配置文件"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"[root@node2 promtail]# cat  docker-compose.yaml ")]),n(`
`),a("span",{class:"line"},[a("span",null,'version: "v1"')]),n(`
`),a("span",{class:"line"},[a("span")]),n(`
`),a("span",{class:"line"},[a("span",null,"services:")]),n(`
`),a("span",{class:"line"},[a("span",null,"  promtail:")]),n(`
`),a("span",{class:"line"},[a("span",null,"    image: grafana/promtail:2.0.0               #拉去镜像")]),n(`
`),a("span",{class:"line"},[a("span",null,"    container_name: promtail-node              #镜像名称")]),n(`
`),a("span",{class:"line"},[a("span",null,"    volumes:")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - /root/promtail/config.yml:/etc/promtail/config.yml    #挂载目录")]),n(`
`),a("span",{class:"line"},[a("span",null,"      - /var/log:/var/log           ")]),n(`
`),a("span",{class:"line"},[a("span",null,"    network_mode: 'host'")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h5",{id:"_7-3-启动",tabindex:"-1"},[n("7.3 启动 "),a("a",{class:"header-anchor",href:"#_7-3-启动","aria-label":'Permalink to "7.3 启动"'},"​")],-1),a("div",{class:"language-"},[a("button",{title:"Copy code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,"docker-compose up -d")])])]),a("button",{class:"code-block-unfold-btn"})],-1),a("h5",{id:"_8-0-去loki上查看检索",tabindex:"-1"},[n("8.0 去loki上查看检索 "),a("a",{class:"header-anchor",href:"#_8-0-去loki上查看检索","aria-label":'Permalink to "8.0 去loki上查看检索"'},"​")],-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140652.png",alt:"640 (5)",loading:"lazy",decoding:"async"})],-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140730.png",alt:"640 (6)",loading:"lazy",decoding:"async"})],-1),a("figure",null,[a("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140756.png",alt:"640 (7)",loading:"lazy",decoding:"async"})],-1),a("p",null,"可以根据数据查询到相应日志信息",-1)])]),"main-header":l(()=>[e(s.$slots,"main-header")]),"main-header-after":l(()=>[e(s.$slots,"main-header-after")]),"main-nav":l(()=>[e(s.$slots,"main-nav")]),"main-content-before":l(()=>[e(s.$slots,"main-content-before")]),"main-content":l(()=>[e(s.$slots,"main-content")]),"main-content-after":l(()=>[e(s.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(s.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(s.$slots,"main-nav-after")]),comment:l(()=>[e(s.$slots,"comment")]),footer:l(()=>[e(s.$slots,"footer")]),aside:l(()=>[e(s.$slots,"aside")]),"aside-custom":l(()=>[e(s.$slots,"aside-custom")]),default:l(()=>[e(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{V as default,_ as usePageData};
