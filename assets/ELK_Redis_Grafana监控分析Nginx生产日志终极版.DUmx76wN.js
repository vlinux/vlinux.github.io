import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Bv-Ltzoo.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as h,u as m,a as b}from"./chunks/vue-router.ClANm_mH.js";import{aa as f,ap as l,ag as e,af as s,ai as n,P as v,ab as k,a1 as y}from"./framework.GHZxz7jq.js";import"./index.Dp3W9g7b.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.C3MeNfs5.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.G7lgMgan.js";const _=h("/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版",async i=>JSON.parse('{"title":"ELK+Redis+Grafana监控分析Nginx生产日志终极版","description":"","frontmatter":{"title":"ELK+Redis+Grafana监控分析Nginx生产日志终极版","categories":"DevOps","tags":["ELK+Redis+Grafana"],"date":"2020-10-13 13:23:00"},"headers":[],"relativePath":"pages/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版.md","lastUpdated":null}'),{lazy:(i,t)=>i.name===t.name}),B={__name:"ELK+Redis+Grafana监控分析Nginx生产日志终极版",setup(i,{expose:t}){const{data:c}=_(),u=b(),r=m(),p=Object.assign(r.meta.frontmatter||{},c.value?.frontmatter||{});return u.currentRoute.value.data=c.value,y("valaxy:frontmatter",p),globalThis.$frontmatter=p,t({frontmatter:{title:"ELK+Redis+Grafana监控分析Nginx生产日志终极版",categories:"DevOps",tags:["ELK+Redis+Grafana"],date:"2020-10-13 13:23:00"}}),(a,o)=>{const d=g;return k(),f(d,{frontmatter:v(p)},{"main-content-md":l(()=>[...o[0]||(o[0]=[s("h2",{id:"先上架构图",tabindex:"-1"},[n("先上架构图 "),s("a",{class:"header-anchor",href:"#先上架构图","aria-label":'Permalink to "先上架构图"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/74899ea95827d087e0f86d034cfbaea6.png",alt:"74899ea95827d087e0f86d034cfbaea6",loading:"lazy",decoding:"async"})],-1),s("ul",null,[s("li",null,[n("Nginx 会将我们定义的log"),s("em",null,"format写入/var/log/nginx/access"),n("json.log文件，Filebeat会将其作为输入项。")]),s("li",null,"Filebeat会将数据输出到Redis"),s("li",null,"Logstash作为Redis数据的过滤将数据存储Elasticsearch"),s("li",null,"Grafana读取Elasticsearch数据源")],-1),s("h2",{id:"简单介绍下grafana",tabindex:"-1"},[n("简单介绍下Grafana "),s("a",{class:"header-anchor",href:"#简单介绍下grafana","aria-label":'Permalink to "简单介绍下Grafana"'},"​")],-1),s("blockquote",null,[s("p",null,[n("grafana 是一款采用 go 语言编写的开源应用，主要用于大规模指标数据的可视化展现，是网络架构和应用分析中最流行的时序数据展示工具，目前已经支持绝大部分常用的时序数据库,官网（"),s("a",{href:"http://docs.grafana.org/%EF%BC%89",target:"_blank",rel:"noreferrer"},"http://docs.grafana.org/）"),n(".")])],-1),s("h2",{id:"监控指标",tabindex:"-1"},[n("监控指标 "),s("a",{class:"header-anchor",href:"#监控指标","aria-label":'Permalink to "监控指标"'},"​")],-1),s("p",null,"针对入口Nginx，我设计了如下的监控指标：",-1),s("ul",null,[s("li",null,"最近的24小时内访问量Top10的国家"),s("li",null,"最近24小时最受欢迎的页面"),s("li",null,"200状态码和404状态码的比例"),s("li",null,"最受欢迎的世界题图展示"),s("li",null,"等等"),s("li",null,"实际上这些东西根本不是我设计的，百度一大堆，甚至最后模板也是照抄官网"),s("li",null,"可我们活着每一天不都是在复制粘贴吗")],-1),s("h2",{id:"开始部署",tabindex:"-1"},[n("开始部署 "),s("a",{class:"header-anchor",href:"#开始部署","aria-label":'Permalink to "开始部署"'},"​")],-1),s("h3",{id:"nginx",tabindex:"-1"},[n("Nginx "),s("a",{class:"header-anchor",href:"#nginx","aria-label":'Permalink to "Nginx"'},"​")],-1),s("p",null,"关闭安全机制",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"setenforce 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl stop firewalld")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"配置repo源",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo")]),n(`
`),s("span",{class:"line"},[s("span",null,"curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"安装nginx",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"yum -y install")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"替换nginx输入日志格式为json格式",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,`    log_format  main '{"@timestamp":"$time_iso8601",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"host":"$hostname",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"server_ip":"$server_addr",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"client_ip":"$remote_addr",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"xff":"$http_x_forwarded_for",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"domain":"$host",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"url":"$uri",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"referer":"$http_referer",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"args":"$args",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"upstreamtime":"$upstream_response_time",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"responsetime":"$request_time",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"request_method":"$request_method",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"status":"$status",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"size":"$body_bytes_sent",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"request_body":"$request_body",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"request_length":"$request_length",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"protocol":"$server_protocol",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"upstreamhost":"$upstream_addr",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"file_dir":"$request_filename",'`)]),n(`
`),s("span",{class:"line"},[s("span",null,`    '"http_user_agent":"$http_user_agent"'`)]),n(`
`),s("span",{class:"line"},[s("span",null,"  '}';")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"#不知道怎么替换的可以查百度,如果您用的是虚拟主机,请在虚拟主机conf文件中配置引用你主配置文件的log输入定义.",-1),s("p",null,"虚拟主机配置文件修改log输入写法如下#如果您没有虚拟主机请跳过这一步",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"access_log  /var/log/nginx/access.log main ;")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"配置完成后启动Nginx.",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"systemctl start nginx")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"curl 127.0.0.1")]),n(`
`),s("span",{class:"line"},[s("span",null,"tail -1 /var/log/nginx/access.log")]),n(`
`),s("span",{class:"line"},[s("span",null,"检测是否输入格式为json")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"redis",tabindex:"-1"},[n("Redis "),s("a",{class:"header-anchor",href:"#redis","aria-label":'Permalink to "Redis"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"yum -y install redis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"cat /etc/redis.conf")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind 127.0.0.1 192.168.1.101 #只有这里需要配置为您的内网IP地址")]),n(`
`),s("span",{class:"line"},[s("span",null,"protected-mode yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"port 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,"tcp-backlog 511")]),n(`
`),s("span",{class:"line"},[s("span",null,"timeout 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"tcp-keepalive 300")]),n(`
`),s("span",{class:"line"},[s("span",null,"daemonize no")]),n(`
`),s("span",{class:"line"},[s("span",null,"supervised no")]),n(`
`),s("span",{class:"line"},[s("span",null,"pidfile /var/run/redis_6379.pid")]),n(`
`),s("span",{class:"line"},[s("span",null,"loglevel notice")]),n(`
`),s("span",{class:"line"},[s("span",null,"logfile /var/log/redis/redis.log")]),n(`
`),s("span",{class:"line"},[s("span",null,"databases 16")]),n(`
`),s("span",{class:"line"},[s("span",null,"save 900 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"save 300 10")]),n(`
`),s("span",{class:"line"},[s("span",null,"save 60 10000")]),n(`
`),s("span",{class:"line"},[s("span",null,"stop-writes-on-bgsave-error yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"rdbcompression yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"rdbchecksum yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"dbfilename dump.rdb")]),n(`
`),s("span",{class:"line"},[s("span",null,"dir /var/lib/redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"slave-serve-stale-data yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"slave-read-only yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"repl-diskless-sync no")]),n(`
`),s("span",{class:"line"},[s("span",null,"repl-diskless-sync-delay 5")]),n(`
`),s("span",{class:"line"},[s("span",null,"repl-disable-tcp-nodelay no")]),n(`
`),s("span",{class:"line"},[s("span",null,"slave-priority 100")]),n(`
`),s("span",{class:"line"},[s("span",null,"appendonly no")]),n(`
`),s("span",{class:"line"},[s("span",null,'appendfilename "appendonly.aof"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendfsync everysec")]),n(`
`),s("span",{class:"line"},[s("span",null,"no-appendfsync-on-rewrite no")]),n(`
`),s("span",{class:"line"},[s("span",null,"auto-aof-rewrite-percentage 100")]),n(`
`),s("span",{class:"line"},[s("span",null,"auto-aof-rewrite-min-size 64mb")]),n(`
`),s("span",{class:"line"},[s("span",null,"aof-load-truncated yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"lua-time-limit 5000")]),n(`
`),s("span",{class:"line"},[s("span",null,"slowlog-log-slower-than 10000")]),n(`
`),s("span",{class:"line"},[s("span",null,"slowlog-max-len 128")]),n(`
`),s("span",{class:"line"},[s("span",null,"latency-monitor-threshold 0")]),n(`
`),s("span",{class:"line"},[s("span",null,'notify-keyspace-events ""')]),n(`
`),s("span",{class:"line"},[s("span",null,"hash-max-ziplist-entries 512")]),n(`
`),s("span",{class:"line"},[s("span",null,"hash-max-ziplist-value 64")]),n(`
`),s("span",{class:"line"},[s("span",null,"list-max-ziplist-size -2")]),n(`
`),s("span",{class:"line"},[s("span",null,"list-compress-depth 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"set-max-intset-entries 512")]),n(`
`),s("span",{class:"line"},[s("span",null,"zset-max-ziplist-entries 128")]),n(`
`),s("span",{class:"line"},[s("span",null,"zset-max-ziplist-value 64")]),n(`
`),s("span",{class:"line"},[s("span",null,"hll-sparse-max-bytes 3000")]),n(`
`),s("span",{class:"line"},[s("span",null,"activerehashing yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"client-output-buffer-limit normal 0 0 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"client-output-buffer-limit slave 256mb 64mb 60")]),n(`
`),s("span",{class:"line"},[s("span",null,"client-output-buffer-limit pubsub 32mb 8mb 60")]),n(`
`),s("span",{class:"line"},[s("span",null,"hz 10")]),n(`
`),s("span",{class:"line"},[s("span",null,"aof-rewrite-incremental-fsync yes")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"启动redis",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"systemctl start redis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"安装elk",tabindex:"-1"},[n("安装ELK "),s("a",{class:"header-anchor",href:"#安装elk","aria-label":'Permalink to "安装ELK"'},"​")],-1),s("p",null,"ELK的安装前提是需要java环境的,这里图省事,直接用yum安装java",-1),s("p",null,"安装java",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"yum -y install java")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"验证java",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"java -version")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1",tabindex:"-1"},[n("ELK版本需要统一不然会出大问题,这里统一采用最新版7.9.1 "),s("a",{class:"header-anchor",href:"#elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1","aria-label":'Permalink to "ELK版本需要统一不然会出大问题,这里统一采用最新版7.9.1"'},"​")],-1),s("h4",{id:"安装es-elasticsearch",tabindex:"-1"},[n("安装ES(elasticsearch) "),s("a",{class:"header-anchor",href:"#安装es-elasticsearch","aria-label":'Permalink to "安装ES(elasticsearch)"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"[root@master1 opt]# ls")]),n(`
`),s("span",{class:"line"},[s("span",null,"elasticsearch-7.9.1-x86_64.rpm  grafana-7.0.1-1.x86_64.rpm  logstash-7.9.1.rpm")]),n(`
`),s("span",{class:"line"},[s("span",null,"filebeat-7.9.1-x86_64.rpm       kibana-7.9.1-x86_64.rpm")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@master1 opt]# rpm -ivh elasticsearch-7.9.1-x86_64.rpm")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"不要着急启动,先修改配置文件",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,'[root@master1 opt]# cat /etc/elasticsearch/elasticsearch.yml | grep -v "^$" | grep -v "^#"')]),n(`
`),s("span",{class:"line"},[s("span",null,"#节点名称")]),n(`
`),s("span",{class:"line"},[s("span",null,"node.name: node-1")]),n(`
`),s("span",{class:"line"},[s("span",null,"#程序工作目录")]),n(`
`),s("span",{class:"line"},[s("span",null,"path.data: /var/lib/elasticsearch")]),n(`
`),s("span",{class:"line"},[s("span",null,"#程序日志产生目录")]),n(`
`),s("span",{class:"line"},[s("span",null,"path.logs: /var/log/elasticsearch")]),n(`
`),s("span",{class:"line"},[s("span",null,"#内存锁定")]),n(`
`),s("span",{class:"line"},[s("span",null,"bootstrap.memory_lock: true")]),n(`
`),s("span",{class:"line"},[s("span",null,"#你的本地IP跟本地回环")]),n(`
`),s("span",{class:"line"},[s("span",null,"network.host: 192.168.1.101,127.0.0.1  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"#端口")]),n(`
`),s("span",{class:"line"},[s("span",null,"http.port: 9200")]),n(`
`),s("span",{class:"line"},[s("span",null,"#7.0以后都需要加的配置项")]),n(`
`),s("span",{class:"line"},[s("span",null,'cluster.initial_master_nodes: ["node-1"]')])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"由于我们配置了锁定内存所以在系统文件里也要有相应的配置",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"官方解决方案")]),n(`
`),s("span",{class:"line"},[s("span",null,"https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setup-configuration-memory.html")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setting-system-settings.html#sysconfig")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"vim /usr/lib/systemd/system/elasticsearch.service")]),n(`
`),s("span",{class:"line"},[s("span",null,"### 增加如下参数")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Service]")]),n(`
`),s("span",{class:"line"},[s("span",null,"LimitMEMLOCK=infinity")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"保存后重载系统配置,启动ES",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"systemctl daemon-reload")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl restart elasticsearch")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"检测ES",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"检测端口是否开启")]),n(`
`),s("span",{class:"line"},[s("span",null,"netstat -apunt | grep 9200")]),n(`
`),s("span",{class:"line"},[s("span",null,"或者")]),n(`
`),s("span",{class:"line"},[s("span",null,"curl 127.0.0.1:9200")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h4",{id:"安装filebeat",tabindex:"-1"},[n("安装filebeat "),s("a",{class:"header-anchor",href:"#安装filebeat","aria-label":'Permalink to "安装filebeat"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"[root@master1 opt]# rpm -ivh filebeat-7.9.1-x86_64.rpm")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"配置文件修改",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"[root@QLaliyun ~]# cat /etc/filebeat/filebeat.yml")]),n(`
`),s("span",{class:"line"},[s("span",null,"filebeat.inputs:")]),n(`
`),s("span",{class:"line"},[s("span",null,"- type: log")]),n(`
`),s("span",{class:"line"},[s("span",null,"  enabled: true")]),n(`
`),s("span",{class:"line"},[s("span",null,"  paths:")]),n(`
`),s("span",{class:"line"},[s("span",null,"    - /var/log/nginx/access.log")]),n(`
`),s("span",{class:"line"},[s("span",null,"  json.keys_under_root: true")]),n(`
`),s("span",{class:"line"},[s("span",null,"  json.overwrite_keys: true")]),n(`
`),s("span",{class:"line"},[s("span",null,"  json.add_error_key: true")]),n(`
`),s("span",{class:"line"},[s("span",null,"filebeat.config.modules:")]),n(`
`),s("span",{class:"line"},[s("span",null,"  path: ${path.config}/modules.d/*.yml")]),n(`
`),s("span",{class:"line"},[s("span",null,"  reload.enabled: false")]),n(`
`),s("span",{class:"line"},[s("span",null,"setup.template.settings:")]),n(`
`),s("span",{class:"line"},[s("span",null,"  index.number_of_shards: 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"setup.kibana:")]),n(`
`),s("span",{class:"line"},[s("span",null,'  host: "127.0.0.1:5601"')]),n(`
`),s("span",{class:"line"},[s("span",null,"output.redis:")]),n(`
`),s("span",{class:"line"},[s("span",null,'  hosts: ["localhost"] ')]),n(`
`),s("span",{class:"line"},[s("span",null,"  db: 0")]),n(`
`),s("span",{class:"line"},[s("span",null,'  key: "nginx_logs" ')]),n(`
`),s("span",{class:"line"},[s("span",null,"  timeout: 5")]),n(`
`),s("span",{class:"line"},[s("span",null,"processors:")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - add_host_metadata:")]),n(`
`),s("span",{class:"line"},[s("span",null,"      when.not.contains.tags: forwarded")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - add_cloud_metadata: ~")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - add_docker_metadata: ~")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - add_kubernetes_metadata: ~")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"启动filebeat",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"systemctl start filebeat")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h4",{id:"安装logstash",tabindex:"-1"},[n("安装logstash "),s("a",{class:"header-anchor",href:"#安装logstash","aria-label":'Permalink to "安装logstash"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"[root@master1 opt]# rpm -ivh logstash-7.9.1.rpm")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,[n('修改logstash配置文件,后期用nohup方式启动,不知道的话不用关心 跟着操作就行，注意下载世界IP库文件 [file href="'),s("a",{href:"https://wwe.lanzous.com/i0a1Amdjezi",target:"_blank",rel:"noreferrer"},"https://wwe.lanzous.com/i0a1Amdjezi"),n('"]GeoLite2-City.mmdb[/file]')],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"[root@master1 ~]# cat /etc/logstash/conf.d/yh_nginx_redis.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"input {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  # redis nginx key")]),n(`
`),s("span",{class:"line"},[s("span",null,"  redis {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    data_type =>"list"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    key =>"nginx_logs"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    host =>"127.0.0.1"')]),n(`
`),s("span",{class:"line"},[s("span",null,"    port => 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,'   # password => "password"')]),n(`
`),s("span",{class:"line"},[s("span",null,"    db => 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"filter {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  geoip {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    #multiLang => "zh-CN"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    target => "geoip"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    source => "client_ip"')]),n(`
`),s("span",{class:"line"},[s("span",null,"    #下面这个IP库请一定要配置到位,不然装不了逼")]),n(`
`),s("span",{class:"line"},[s("span",null,'    database => "/usr/share/logstash/GeoLite2-City.mmdb"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    add_field => [ "[geoip][coordinates]", "%{[geoip][longitude]}" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    add_field => [ "[geoip][coordinates]", "%{[geoip][latitude]}" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    remove_field => ["[geoip][latitude]", "[geoip][longitude]", "[geoip][country_code]", "[geoip][country_code2]", "[geoip][country_code3]", "[geoip][timezone]", "[geoip][continent_code]", "[geoip][region_code]"]')]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  mutate {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    convert => [ "size", "integer" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    convert => [ "status", "integer" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    convert => [ "responsetime", "float" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    convert => [ "upstreamtime", "float" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    convert => [ "[geoip][coordinates]", "float" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,'    remove_field => [ "ecs","agent","host","cloud","@version","input","logs_type" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  useragent {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    source => "http_user_agent"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    target => "ua"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    remove_field => [ "[ua][minor]","[ua][major]","[ua][build]","[ua][patch]","[ua][os_minor]","[ua][os_major]" ]')]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"output {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  elasticsearch {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    hosts => "http://127.0.0.1:9200"')]),n(`
`),s("span",{class:"line"},[s("span",null,'#    user => "elastic"')]),n(`
`),s("span",{class:"line"},[s("span",null,'#    password => "password"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    index => "logstash-nginx-%{+YYYY.MM}"')]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@lyecs ~]#")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"启动logstash",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"nohup /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/yh_nginx_redis.conf &")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h4",{id:"安装grafana",tabindex:"-1"},[n("安装Grafana "),s("a",{class:"header-anchor",href:"#安装grafana","aria-label":'Permalink to "安装Grafana"'},"​")],-1),s("p",null,"推荐使用7.0以下版本,否则可能会和部分插件不兼容,这里用的是6.3.2",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"[root@master1 opt]# rpm -ivh grafana-7.0.1-1.x86_64.rpm")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"由于我们后期会用到某些插件所以在这里提前安装",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"grafana-cli plugins install grafana-piechart-panel")]),n(`
`),s("span",{class:"line"},[s("span",null,"grafana-cli plugins install grafana-world-map")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"国内服务器可能安装不上,那就自己想办法好吧",-1),s("p",null,"由于某些不可抗力因素如果后期在模板导入后出现地图图片不能正常显示的原因可以.采用以下做法",-1),s("p",null,[n("参考博客:"),s("a",{href:"https://www.cnblogs.com/xuewenlong/p/12929443.html",target:"_blank",rel:"noreferrer"},"https://www.cnblogs.com/xuewenlong/p/12929443.html")],-1),s("p",null,"好的我们直接打开Grafana奥里给",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"systemctl start grafana-server")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h5",{id:"配置数据源",tabindex:"-1"},[n("配置数据源 "),s("a",{class:"header-anchor",href:"#配置数据源","aria-label":'Permalink to "配置数据源"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131436778.png",alt:"image-20201013131436778",loading:"lazy",decoding:"async"})],-1),s("p",null,"点击Save&test测试成功后Back",-1),s("p",null,"导入监控模板",-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131610205.png",alt:"image-20201013131610205",loading:"lazy",decoding:"async"})],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131647199.png",alt:"image-20201013131647199",loading:"lazy",decoding:"async"})],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131729032.png",alt:"image-20201013131729032",loading:"lazy",decoding:"async"})],-1),s("p",null,[n("下面直接出图"),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/123.png",alt:"123"})],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/456.png",alt:"456",loading:"lazy",decoding:"async"})],-1)])]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content-before":l(()=>[e(a.$slots,"main-content-before")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{B as default,_ as usePageData};
