import{_ as r}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c06d8755.js";import{_ as C,c as A,w as a,o as d,b as s,d as l,e,r as o,f as h,p as y}from"./app-aa1e5b4f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-a847d205.js";import"./YunCard.vue_vue_type_style_index_0_lang-61d41b45.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-944b3777.js";const Js=JSON.parse('{"title":"ELK+Redis+Grafana监控分析Nginx生产日志终极版","description":"","frontmatter":{"title":"ELK+Redis+Grafana监控分析Nginx生产日志终极版","categories":"DevOps","tags":["ELK+Redis+Grafana"],"date":"2020-10-13T13:23:00.000Z"},"headers":[{"level":2,"title":"先上架构图","slug":"先上架构图","link":"#先上架构图","children":[]},{"level":2,"title":"简单介绍下Grafana","slug":"简单介绍下grafana","link":"#简单介绍下grafana","children":[]},{"level":2,"title":"监控指标","slug":"监控指标","link":"#监控指标","children":[]},{"level":2,"title":"开始部署","slug":"开始部署","link":"#开始部署","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":2,"title":"安装ELK","slug":"安装elk","link":"#安装elk","children":[{"level":3,"title":"ELK版本需要统一不然会出大问题,这里统一采用最新版7.9.1","slug":"elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1","link":"#elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1","children":[]}]}],"relativePath":"pages/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版.md","lastUpdated":1675833042000}'),i=JSON.parse('{"title":"ELK+Redis+Grafana监控分析Nginx生产日志终极版","description":"","frontmatter":{"title":"ELK+Redis+Grafana监控分析Nginx生产日志终极版","categories":"DevOps","tags":["ELK+Redis+Grafana"],"date":"2020-10-13T13:23:00.000Z"},"headers":[{"level":2,"title":"先上架构图","slug":"先上架构图","link":"#先上架构图","children":[]},{"level":2,"title":"简单介绍下Grafana","slug":"简单介绍下grafana","link":"#简单介绍下grafana","children":[]},{"level":2,"title":"监控指标","slug":"监控指标","link":"#监控指标","children":[]},{"level":2,"title":"开始部署","slug":"开始部署","link":"#开始部署","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":2,"title":"安装ELK","slug":"安装elk","link":"#安装elk","children":[{"level":3,"title":"ELK版本需要统一不然会出大问题,这里统一采用最新版7.9.1","slug":"elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1","link":"#elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1","children":[]}]}],"relativePath":"pages/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版.md","lastUpdated":1675833042000}'),g={name:"pages/posts/ELK+Redis+Grafana监控分析Nginx生产日志终极版.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){y("pageData",i)}},u={id:"先上架构图",tabindex:"-1"},m=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/74899ea95827d087e0f86d034cfbaea6.png",alt:"74899ea95827d087e0f86d034cfbaea6"})],-1),_=s("ul",null,[s("li",null,[l("Nginx 会将我们定义的log"),s("em",null,"format写入/var/log/nginx/access"),l("json.log文件，Filebeat会将其作为输入项。")]),s("li",null,"Filebeat会将数据输出到Redis"),s("li",null,"Logstash作为Redis数据的过滤将数据存储Elasticsearch"),s("li",null,"Grafana读取Elasticsearch数据源")],-1),D={id:"简单介绍下grafana",tabindex:"-1"},f={id:"监控指标",tabindex:"-1"},v=s("p",null,"针对入口Nginx，我设计了如下的监控指标：",-1),b=s("ul",null,[s("li",null,"最近的24小时内访问量Top10的国家"),s("li",null,"最近24小时最受欢迎的页面"),s("li",null,"200状态码和404状态码的比例"),s("li",null,"最受欢迎的世界题图展示"),s("li",null,"等等"),s("li",null,"实际上这些东西根本不是我设计的，百度一大堆，甚至最后模板也是照抄官网"),s("li",null,"可我们活着每一天不都是在复制粘贴吗")],-1),x={id:"开始部署",tabindex:"-1"},k={id:"nginx",tabindex:"-1"},w=s("p",null,"关闭安全机制",-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"setenforce 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl stop firewalld")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),L=s("p",null,"配置repo源",-1),E=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),N=s("p",null,"安装nginx",-1),G=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum -y install")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K=s("p",null,"替换nginx输入日志格式为json格式",-1),z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    log_format  main '{"@timestamp":"$time_iso8601",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"host":"$hostname",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"server_ip":"$server_addr",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"client_ip":"$remote_addr",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"xff":"$http_x_forwarded_for",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"domain":"$host",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"url":"$uri",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"referer":"$http_referer",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"args":"$args",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"upstreamtime":"$upstream_response_time",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"responsetime":"$request_time",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"request_method":"$request_method",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"status":"$status",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"size":"$body_bytes_sent",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"request_body":"$request_body",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"request_length":"$request_length",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"protocol":"$server_protocol",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"upstreamhost":"$upstream_addr",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"file_dir":"$request_filename",'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    '"http_user_agent":"$http_user_agent"'`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  '}';")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),R=s("p",null,"#不知道怎么替换的可以查百度,如果您用的是虚拟主机,请在虚拟主机conf文件中配置引用你主配置文件的log输入定义.",-1),j=s("p",null,"虚拟主机配置文件修改log输入写法如下#如果您没有虚拟主机请跳过这一步",-1),q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"access_log  /var/log/nginx/access.log main ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),S=s("p",null,"配置完成后启动Nginx.",-1),B=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start nginx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl 127.0.0.1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tail -1 /var/log/nginx/access.log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"检测是否输入格式为json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),P={id:"redis",tabindex:"-1"},M=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum -y install redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),I=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat /etc/redis.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind 127.0.0.1 192.168.1.101 #只有这里需要配置为您的内网IP地址")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"protected-mode yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"port 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp-backlog 511")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"timeout 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp-keepalive 300")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemonize no")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"supervised no")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pidfile /var/run/redis_6379.pid")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"loglevel notice")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"logfile /var/log/redis/redis.log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"databases 16")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"save 900 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"save 300 10")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"save 60 10000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stop-writes-on-bgsave-error yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rdbcompression yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rdbchecksum yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dbfilename dump.rdb")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dir /var/lib/redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"slave-serve-stale-data yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"slave-read-only yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repl-diskless-sync no")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repl-diskless-sync-delay 5")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repl-disable-tcp-nodelay no")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"slave-priority 100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendonly no")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'appendfilename "appendonly.aof"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"appendfsync everysec")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"no-appendfsync-on-rewrite no")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auto-aof-rewrite-percentage 100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auto-aof-rewrite-min-size 64mb")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"aof-load-truncated yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lua-time-limit 5000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"slowlog-log-slower-than 10000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"slowlog-max-len 128")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"latency-monitor-threshold 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'notify-keyspace-events ""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hash-max-ziplist-entries 512")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hash-max-ziplist-value 64")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"list-max-ziplist-size -2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"list-compress-depth 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"set-max-intset-entries 512")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"zset-max-ziplist-entries 128")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"zset-max-ziplist-value 64")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hll-sparse-max-bytes 3000")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"activerehashing yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"client-output-buffer-limit normal 0 0 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"client-output-buffer-limit slave 256mb 64mb 60")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"client-output-buffer-limit pubsub 32mb 8mb 60")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hz 10")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"aof-rewrite-incremental-fsync yes")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T=s("p",null,"启动redis",-1),U=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V={id:"安装elk",tabindex:"-1"},Y=s("p",null,"ELK的安装前提是需要java环境的,这里图省事,直接用yum安装java",-1),F=s("p",null,"安装java",-1),J=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum -y install java")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z=s("p",null,"验证java",-1),Q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"java -version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H={id:"elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1",tabindex:"-1"},W={id:"安装es-elasticsearch",tabindex:"-1"},X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# ls")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"elasticsearch-7.9.1-x86_64.rpm  grafana-7.0.1-1.x86_64.rpm  logstash-7.9.1.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filebeat-7.9.1-x86_64.rpm       kibana-7.9.1-x86_64.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh elasticsearch-7.9.1-x86_64.rpm ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ss=s("p",null,"不要着急启动,先修改配置文件",-1),ls=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@master1 opt]# cat /etc/elasticsearch/elasticsearch.yml | grep -v "^$" | grep -v "^#"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#节点名称")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node.name: node-1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#程序工作目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"path.data: /var/lib/elasticsearch")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#程序日志产生目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"path.logs: /var/log/elasticsearch")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#内存锁定")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bootstrap.memory_lock: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#你的本地IP跟本地回环")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"network.host: 192.168.1.101,127.0.0.1  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#端口")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http.port: 9200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#7.0以后都需要加的配置项")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'cluster.initial_master_nodes: ["node-1"] ')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),as=s("p",null,"由于我们配置了锁定内存所以在系统文件里也要有相应的配置",-1),ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"官方解决方案")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setup-configuration-memory.html")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setting-system-settings.html#sysconfig")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),es=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"vim /usr/lib/systemd/system/elasticsearch.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"### 增加如下参数")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LimitMEMLOCK=infinity")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ts=s("p",null,"保存后重载系统配置,启动ES",-1),os=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl restart elasticsearch")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),is=s("p",null,"检测ES",-1),cs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"检测端口是否开启")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"netstat -apunt | grep 9200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"或者")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl 127.0.0.1:9200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ps={id:"安装filebeat",tabindex:"-1"},rs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh filebeat-7.9.1-x86_64.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cs=s("p",null,"配置文件修改",-1),As=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@QLaliyun ~]# cat /etc/filebeat/filebeat.yml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filebeat.inputs:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- type: log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  enabled: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  paths:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - /var/log/nginx/access.log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  json.keys_under_root: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  json.overwrite_keys: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  json.add_error_key: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filebeat.config.modules:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  path: ${path.config}/modules.d/*.yml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  reload.enabled: false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"setup.template.settings:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  index.number_of_shards: 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"setup.kibana:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  host: "127.0.0.1:5601"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"output.redis:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  hosts: ["localhost"] ')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  db: 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  key: "nginx_logs" ')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  timeout: 5")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"processors:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - add_host_metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      when.not.contains.tags: forwarded")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - add_cloud_metadata: ~")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - add_docker_metadata: ~")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - add_kubernetes_metadata: ~")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ds=s("p",null,"启动filebeat",-1),hs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start filebeat")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ys={id:"安装logstash",tabindex:"-1"},gs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh logstash-7.9.1.rpm ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 ~]# cat /etc/logstash/conf.d/yh_nginx_redis.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"input {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  # redis nginx key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  redis {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    data_type =>"list"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    key =>"nginx_logs"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    host =>"127.0.0.1"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port => 6379")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'   # password => "password"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    db => 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filter {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  geoip {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    #multiLang => "zh-CN"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    target => "geoip"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    source => "client_ip"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    #下面这个IP库请一定要配置到位,不然装不了逼")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    database => "/usr/share/logstash/GeoLite2-City.mmdb"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    add_field => [ "[geoip][coordinates]", "%{[geoip][longitude]}" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    add_field => [ "[geoip][coordinates]", "%{[geoip][latitude]}" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    remove_field => ["[geoip][latitude]", "[geoip][longitude]", "[geoip][country_code]", "[geoip][country_code2]", "[geoip][country_code3]", "[geoip][timezone]", "[geoip][continent_code]", "[geoip][region_code]"]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  mutate {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    convert => [ "size", "integer" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    convert => [ "status", "integer" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    convert => [ "responsetime", "float" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    convert => [ "upstreamtime", "float" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    convert => [ "[geoip][coordinates]", "float" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    remove_field => [ "ecs","agent","host","cloud","@version","input","logs_type" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  useragent {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    source => "http_user_agent"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    target => "ua"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    remove_field => [ "[ua][minor]","[ua][major]","[ua][build]","[ua][patch]","[ua][os_minor]","[ua][os_major]" ]')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"output {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  elasticsearch {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    hosts => "http://127.0.0.1:9200"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'#    user => "elastic"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'#    password => "password"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    index => "logstash-nginx-%{+YYYY.MM}"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@lyecs ~]# ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ms=s("p",null,"启动logstash",-1),_s=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nohup /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/yh_nginx_redis.conf &")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ds={id:"安装grafana",tabindex:"-1"},fs=s("p",null,"推荐使用7.0以下版本,否则可能会和部分插件不兼容,这里用的是6.3.2",-1),vs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh grafana-7.0.1-1.x86_64.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bs=s("p",null,"由于我们后期会用到某些插件所以在这里提前安装",-1),xs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"grafana-cli plugins install grafana-piechart-panel")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"grafana-cli plugins install grafana-world-map")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ks=s("p",null,"国内服务器可能安装不上,那就自己想办法好吧",-1),ws=s("p",null,"由于某些不可抗力因素如果后期在模板导入后出现地图图片不能正常显示的原因可以.采用以下做法",-1),$s=s("p",null,"好的我们直接打开Grafana奥里给",-1),Ls=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start grafana-server")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Es={id:"配置数据源",tabindex:"-1"},Ns=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131436778.png",alt:"image-20201013131436778"})],-1),Gs=s("p",null,"点击Save&test测试成功后Back",-1),Ks=s("p",null,"导入监控模板",-1),zs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131610205.png",alt:"image-20201013131610205"})],-1),Rs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131647199.png",alt:"image-20201013131647199"})],-1),js=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131729032.png",alt:"image-20201013131729032"})],-1),qs=s("p",null,[l("下面直接出图"),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/123.png",alt:"123"})],-1),Ss=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/456.png",alt:"456"})],-1);function Bs(t,Os,Ps,Ms,c,Is){const n=h,p=r;return d(),A(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":a(()=>[s("h2",u,[l("先上架构图 "),e(n,{class:"header-anchor",href:"#先上架构图","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),m,_,s("h2",D,[l("简单介绍下Grafana "),e(n,{class:"header-anchor",href:"#简单介绍下grafana","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),s("blockquote",null,[s("p",null,[l("grafana 是一款采用 go 语言编写的开源应用，主要用于大规模指标数据的可视化展现，是网络架构和应用分析中最流行的时序数据展示工具，目前已经支持绝大部分常用的时序数据库,官网（"),e(n,{href:"http://docs.grafana.org/%EF%BC%89",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("http://docs.grafana.org/）")]),_:1}),l(".")])]),s("h2",f,[l("监控指标 "),e(n,{class:"header-anchor",href:"#监控指标","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),v,b,s("h2",x,[l("开始部署 "),e(n,{class:"header-anchor",href:"#开始部署","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),s("h3",k,[l("Nginx "),e(n,{class:"header-anchor",href:"#nginx","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),w,$,L,E,N,G,K,z,R,j,q,S,B,O,s("h2",P,[l("Redis "),e(n,{class:"header-anchor",href:"#redis","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),M,I,T,U,s("h2",V,[l("安装ELK "),e(n,{class:"header-anchor",href:"#安装elk","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),Y,F,J,Z,Q,s("h3",H,[l("ELK版本需要统一不然会出大问题,这里统一采用最新版7.9.1 "),e(n,{class:"header-anchor",href:"#elk版本需要统一不然会出大问题-这里统一采用最新版7-9-1","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),s("h4",W,[l("安装ES(elasticsearch) "),e(n,{class:"header-anchor",href:"#安装es-elasticsearch","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),X,ss,ls,as,ns,es,ts,os,is,cs,s("h4",ps,[l("安装filebeat "),e(n,{class:"header-anchor",href:"#安装filebeat","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),rs,Cs,As,ds,hs,s("h4",ys,[l("安装logstash "),e(n,{class:"header-anchor",href:"#安装logstash","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),gs,s("p",null,[l('修改logstash配置文件,后期用nohup方式启动,不知道的话不用关心 跟着操作就行，注意下载世界IP库文件 [file href="'),e(n,{href:"https://wwe.lanzous.com/i0a1Amdjezi",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("https://wwe.lanzous.com/i0a1Amdjezi")]),_:1}),l('"]GeoLite2-City.mmdb[/file]')]),us,ms,_s,s("h4",Ds,[l("安装Grafana "),e(n,{class:"header-anchor",href:"#安装grafana","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),fs,vs,bs,xs,ks,ws,s("p",null,[l("参考博客:"),e(n,{href:"https://www.cnblogs.com/xuewenlong/p/12929443.html",target:"_blank",rel:"noreferrer"},{default:a(()=>[l("https://www.cnblogs.com/xuewenlong/p/12929443.html")]),_:1})]),$s,Ls,s("h5",Es,[l("配置数据源 "),e(n,{class:"header-anchor",href:"#配置数据源","aria-hidden":"true"},{default:a(()=>[l("#")]),_:1})]),Ns,Gs,Ks,zs,Rs,js,qs,Ss]),"main-header":a(()=>[o(t.$slots,"main-header")]),"main-header-after":a(()=>[o(t.$slots,"main-header-after")]),"main-nav":a(()=>[o(t.$slots,"main-nav")]),"main-content":a(()=>[o(t.$slots,"main-content")]),"main-content-after":a(()=>[o(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[o(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[o(t.$slots,"main-nav-after")]),comment:a(()=>[o(t.$slots,"comment")]),footer:a(()=>[o(t.$slots,"footer")]),aside:a(()=>[o(t.$slots,"aside")]),"aside-custom":a(()=>[o(t.$slots,"aside-custom")]),default:a(()=>[o(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const Zs=C(g,[["render",Bs]]);export{Js as __pageData,Zs as default};
