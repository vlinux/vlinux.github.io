import{_ as c}from"./ValaxyMain-5334b760.js";import{_ as r,p,c as d,w as a,o as h,r as e,b as s,R as l}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const us=JSON.parse('{"title":"轻量级日志分析新秀Loki","description":"","frontmatter":{"title":"轻量级日志分析新秀Loki","categories":"ELK-stack","tags":["Loki"],"date":"2021-04-07T14:08:55.000Z"},"headers":[{"level":3,"title":"简介：","slug":"简介：","link":"#简介：","children":[]},{"level":3,"title":"特点：","slug":"特点：","link":"#特点：","children":[]},{"level":3,"title":"缺点：","slug":"缺点：","link":"#缺点：","children":[]},{"level":3,"title":"组成","slug":"组成","link":"#组成","children":[]}],"relativePath":"pages/posts/轻量级日志分析新秀Loki.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/轻量级日志分析新秀Loki.md","lastUpdated":1671090556000}'),o=JSON.parse('{"title":"轻量级日志分析新秀Loki","description":"","frontmatter":{"title":"轻量级日志分析新秀Loki","categories":"ELK-stack","tags":["Loki"],"date":"2021-04-07T14:08:55.000Z"},"headers":[{"level":3,"title":"简介：","slug":"简介：","link":"#简介：","children":[]},{"level":3,"title":"特点：","slug":"特点：","link":"#特点：","children":[]},{"level":3,"title":"缺点：","slug":"缺点：","link":"#缺点：","children":[]},{"level":3,"title":"组成","slug":"组成","link":"#组成","children":[]}],"relativePath":"pages/posts/轻量级日志分析新秀Loki.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/轻量级日志分析新秀Loki.md","lastUpdated":1671090556000}'),m={name:"pages/posts/轻量级日志分析新秀Loki.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){p("pageData",o)}},C=s("h3",{id:"简介：",tabindex:"-1"},[l("简介： "),s("a",{class:"header-anchor",href:"#简介：","aria-hidden":"true"},"#")],-1),A=s("p",null,"Loki的第一个稳定版本于2019年11月19日发布，是 Grafana Labs 团队最新的开源项目，是一个水平可扩展，高可用性，多租户的日志聚合系统。Loki 是专门用于聚集日志数据，重点是高可用性和可伸缩性。与竞争对手不同的是，它确实易于安装且资源效率极高。",-1),_=s("h3",{id:"特点：",tabindex:"-1"},[l("特点： "),s("a",{class:"header-anchor",href:"#特点：","aria-hidden":"true"},"#")],-1),g=s("p",null,"优点：",-1),u=s("p",null,"1、Loki的架构非常简单，使用了和prometheus一样的标签来作为索引，通过这些标签既可以查询日志的内容也可以查询到监控的数据，不但减少了两种查询之间的切换成本，也极大地降低了日志索引的存储。",-1),y=s("p",null,"2、与ELK相比，消耗的成本更低，具有成本效益。",-1),D=s("p",null,"3、在日志的收集以及可视化上可以连用grafana，实现在日志上的筛选以及查看上下行的功能。",-1),k=s("h3",{id:"缺点：",tabindex:"-1"},[l("缺点： "),s("a",{class:"header-anchor",href:"#缺点：","aria-hidden":"true"},"#")],-1),f=s("p",null,"1、技术比较新颖，相对应的论坛不是非常活跃。",-1),v=s("p",null,"2、功能单一，只针对日志的查看，筛选有好的表现，对于数据的处理以及清洗没有ELK强大，同时与ELK相比，对于后期，ELK可以连用各种技术进行日志的大数据处理，但是loki不行。",-1),b=s("h3",{id:"组成",tabindex:"-1"},[l("组成 "),s("a",{class:"header-anchor",href:"#组成","aria-hidden":"true"},"#")],-1),x=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.loki是主服务器，负责存储日志和处理查询。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.promtail是代理，负责收集日志并将其发送给 loki 。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.Grafana用于 UI 展示。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),w=s("p",null,"本次安装使用docker部署",-1),L=s("h4",{id:"_1-0-安装-docker-compose",tabindex:"-1"},[l("1.0 安装 docker-compose "),s("a",{class:"header-anchor",href:"#_1-0-安装-docker-compose","aria-hidden":"true"},"#")],-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'curl -L "https://github.com/docker/compose/releases/download/1.28.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"chmod +x /usr/local/bin/docker-compose")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q=s("h4",{id:"_2-0-下载yaml文件",tabindex:"-1"},[l("2.0 下载yaml文件 "),s("a",{class:"header-anchor",href:"#_2-0-下载yaml文件","aria-hidden":"true"},"#")],-1),j=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"wget https://raw.githubusercontent.com/grafana/loki/v2.2.0/production/docker-compose.yaml -O docker-compose.yaml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'version: "3"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"networks:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  loki:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"services:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  loki:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: grafana/loki:2.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'      - "3100:3100"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    command: -config.file=/etc/loki/local-config.yaml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    networks:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - loki")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  promtail:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: grafana/promtail:2.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    volumes:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - /var/log:/var/log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    command: -config.file=/etc/promtail/config.yml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    networks:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - loki")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  grafana:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: grafana/grafana:latest")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'      - "3000:3000"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    networks:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - loki")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E=s("h4",{id:"_3-0-启动服务",tabindex:"-1"},[l("3.0 启动服务 "),s("a",{class:"header-anchor",href:"#_3-0-启动服务","aria-hidden":"true"},"#")],-1),K=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-compose -f docker-compose.yaml up")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),U=s("h4",{id:"_4-0-检查服务",tabindex:"-1"},[l("4.0 检查服务 "),s("a",{class:"header-anchor",href:"#_4-0-检查服务","aria-hidden":"true"},"#")],-1),B=s("h4",{id:"_5-0-配置服务",tabindex:"-1"},[l("5.0 配置服务 "),s("a",{class:"header-anchor",href:"#_5-0-配置服务","aria-hidden":"true"},"#")],-1),N=s("p",null,[s("a",{href:"http://192.168.106.202:3000/!%5B640%5D(https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140410.png)",target:"_blank",rel:"noreferrer"},"http://192.168.106.202:3000/![640](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140410.png)")],-1),O=s("p",null,"默认granfna密码admin/admin",-1),S=s("h5",{id:"_5-1-配置数据源",tabindex:"-1"},[l("5.1 配置数据源 "),s("a",{class:"header-anchor",href:"#_5-1-配置数据源","aria-hidden":"true"},"#")],-1),T=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140449.png",alt:"640 (1)"})],-1),V=s("p",null,"配置ip和默认数据源，配置完成点击测试/保存",-1),G=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140524.png",alt:"640 (2)"})],-1),J=s("h5",{id:"_5-2-配置数据源",tabindex:"-1"},[l("5.2 配置数据源 "),s("a",{class:"header-anchor",href:"#_5-2-配置数据源","aria-hidden":"true"},"#")],-1),P=s("p",null,"explore 查询样例",-1),Z=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140548.png",alt:"640 (3)"})],-1),I=s("h5",{id:"_5-3-输出匹配日志信息",tabindex:"-1"},[l("5.3 输出匹配日志信息 "),s("a",{class:"header-anchor",href:"#_5-3-输出匹配日志信息","aria-hidden":"true"},"#")],-1),M=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140619.png",alt:"640 (4)"})],-1),R=s("p",null,"至此一次样例日志查询完成",-1),z=s("h4",{id:"_6-0-promtail配置详解",tabindex:"-1"},[l("6.0 promtail配置详解 "),s("a",{class:"header-anchor",href:"#_6-0-promtail配置详解","aria-hidden":"true"},"#")],-1),F=s("p",null,"promtail容器为日志采集容器，配置文件在promtail容器/etc/promtail/config.yml，将该容器部署在需要采集日志的服务器上就能正常采集日志传回loki服务收集整理",-1),H=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@2a0cc144dd58:/#  cat  /etc/promtail/config.yml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  http_listen_port: 9080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  grpc_listen_port: 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"positions:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  filename: /tmp/positions.yaml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"clients:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - url: http://loki:3100/loki/api/v1/push     #这里配置的地址为loki服务器日志收集的信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_configs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: system")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  static_configs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - targets:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - localhost")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    labels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      job: varlogs                       #这里为刚才选择job下子标签")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      __path__: /var/log/*log            #将采集的日志放在/var/log/*log下自动发现")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q=s("h4",{id:"_7-0-增加一台服务器日志采集",tabindex:"-1"},[l("7.0 增加一台服务器日志采集 "),s("a",{class:"header-anchor",href:"#_7-0-增加一台服务器日志采集","aria-hidden":"true"},"#")],-1),W=s("h5",{id:"_7-1-编写-promtail的配置文件config-yml",tabindex:"-1"},[l("7.1 编写 promtail的配置文件config.yml "),s("a",{class:"header-anchor",href:"#_7-1-编写-promtail的配置文件config-yml","aria-hidden":"true"},"#")],-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir  /root/promtail  &&cd  /root/promtail")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@node2 promtail]# cat config.yml ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  http_listen_port: 9080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  grpc_listen_port: 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"positions:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  filename: /tmp/positions.yaml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"clients:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - url: http://192.168.106.202:3100/loki/api/v1/push     #这里配置的地址为loki服务器日志收集的信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_configs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: mysql")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  static_configs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - targets:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - localhost")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    labels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      job: mysql                         #这里为刚才选择job下子标签")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      __path__: /var/log/*log            #将采集的日志放在/var/log/*log下自动发现")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y=s("h5",{id:"_7-2-编写docker-compose-yaml配置文件",tabindex:"-1"},[l("7.2 编写docker-compose.yaml配置文件 "),s("a",{class:"header-anchor",href:"#_7-2-编写docker-compose-yaml配置文件","aria-hidden":"true"},"#")],-1),ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@node2 promtail]# cat  docker-compose.yaml ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'version: "v1"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"services:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  promtail:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: grafana/promtail:2.0.0               #拉去镜像")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    container_name: promtail-node              #镜像名称")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    volumes:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - /root/promtail/config.yml:/etc/promtail/config.yml    #挂载目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - /var/log:/var/log           ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    network_mode: 'host'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ls=s("h5",{id:"_7-3-启动",tabindex:"-1"},[l("7.3 启动 "),s("a",{class:"header-anchor",href:"#_7-3-启动","aria-hidden":"true"},"#")],-1),as=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-compose up -d ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ns=s("h5",{id:"_8-0-去loki上查看检索",tabindex:"-1"},[l("8.0 去loki上查看检索 "),s("a",{class:"header-anchor",href:"#_8-0-去loki上查看检索","aria-hidden":"true"},"#")],-1),es=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140652.png",alt:"640 (5)"})],-1),os=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140730.png",alt:"640 (6)"})],-1),ts=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/20210407140756.png",alt:"640 (7)"})],-1),is=s("p",null,"可以根据数据查询到相应日志信息",-1);function cs(n,rs,ps,ds,t,hs){const i=c;return h(),d(i,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":a(()=>[C,A,_,g,u,y,D,k,f,v,b,x,w,L,$,q,j,E,K,U,B,N,O,S,T,V,G,J,P,Z,I,M,R,z,F,H,Q,W,X,Y,ss,ls,as,ns,es,os,ts,is]),"main-header":a(()=>[e(n.$slots,"main-header")]),"main-header-after":a(()=>[e(n.$slots,"main-header-after")]),"main-nav":a(()=>[e(n.$slots,"main-nav")]),"main-content":a(()=>[e(n.$slots,"main-content")]),"main-content-after":a(()=>[e(n.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(n.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(n.$slots,"main-nav-after")]),comment:a(()=>[e(n.$slots,"comment")]),footer:a(()=>[e(n.$slots,"footer")]),aside:a(()=>[e(n.$slots,"aside")]),"aside-custom":a(()=>[e(n.$slots,"aside-custom")]),default:a(()=>[e(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const ys=r(m,[["render",cs],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/轻量级日志分析新秀Loki.md"]]);export{us as __pageData,ys as default};
