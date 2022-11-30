import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang.af4b7254.js";import{_ as p,c as r,w as n,o as C,r as e,g as s,R as l,p as A}from"./app.a7fb63da.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.a9762eb1.js";import"./YunCard.vue_vue_type_style_index_0_lang.de862d4d.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.edfa1d34.js";const Js=JSON.parse('{"title":"ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248","description":"","frontmatter":{"title":"ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248","categories":"DevOps","tags":["ELK+Redis+Grafana"],"date":"2020-10-13T13:23:00.000Z"},"headers":[{"level":2,"title":"\u5148\u4E0A\u67B6\u6784\u56FE","slug":"\u5148\u4E0A\u67B6\u6784\u56FE","link":"#\u5148\u4E0A\u67B6\u6784\u56FE","children":[]},{"level":2,"title":"\u7B80\u5355\u4ECB\u7ECD\u4E0BGrafana","slug":"\u7B80\u5355\u4ECB\u7ECD\u4E0Bgrafana","link":"#\u7B80\u5355\u4ECB\u7ECD\u4E0Bgrafana","children":[]},{"level":2,"title":"\u76D1\u63A7\u6307\u6807","slug":"\u76D1\u63A7\u6307\u6807","link":"#\u76D1\u63A7\u6307\u6807","children":[]},{"level":2,"title":"\u5F00\u59CB\u90E8\u7F72","slug":"\u5F00\u59CB\u90E8\u7F72","link":"#\u5F00\u59CB\u90E8\u7F72","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":2,"title":"\u5B89\u88C5ELK","slug":"\u5B89\u88C5elk","link":"#\u5B89\u88C5elk","children":[{"level":3,"title":"ELK\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898,\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487.9.1","slug":"elk\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898-\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487-9-1","link":"#elk\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898-\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487-9-1","children":[]}]}],"relativePath":"pages/posts/ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248.md","lastUpdated":0}'),o=JSON.parse('{"title":"ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248","description":"","frontmatter":{"title":"ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248","categories":"DevOps","tags":["ELK+Redis+Grafana"],"date":"2020-10-13T13:23:00.000Z"},"headers":[{"level":2,"title":"\u5148\u4E0A\u67B6\u6784\u56FE","slug":"\u5148\u4E0A\u67B6\u6784\u56FE","link":"#\u5148\u4E0A\u67B6\u6784\u56FE","children":[]},{"level":2,"title":"\u7B80\u5355\u4ECB\u7ECD\u4E0BGrafana","slug":"\u7B80\u5355\u4ECB\u7ECD\u4E0Bgrafana","link":"#\u7B80\u5355\u4ECB\u7ECD\u4E0Bgrafana","children":[]},{"level":2,"title":"\u76D1\u63A7\u6307\u6807","slug":"\u76D1\u63A7\u6307\u6807","link":"#\u76D1\u63A7\u6307\u6807","children":[]},{"level":2,"title":"\u5F00\u59CB\u90E8\u7F72","slug":"\u5F00\u59CB\u90E8\u7F72","link":"#\u5F00\u59CB\u90E8\u7F72","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":2,"title":"\u5B89\u88C5ELK","slug":"\u5B89\u88C5elk","link":"#\u5B89\u88C5elk","children":[{"level":3,"title":"ELK\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898,\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487.9.1","slug":"elk\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898-\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487-9-1","link":"#elk\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898-\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487-9-1","children":[]}]}],"relativePath":"pages/posts/ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248.md","lastUpdated":0}'),d={name:"pages/posts/ELK+Redis+Grafana\u76D1\u63A7\u5206\u6790Nginx\u751F\u4EA7\u65E5\u5FD7\u7EC8\u6781\u7248.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){A("pageData",o)}},y=s("h2",{id:"\u5148\u4E0A\u67B6\u6784\u56FE",tabindex:"-1"},[l("\u5148\u4E0A\u67B6\u6784\u56FE "),s("a",{class:"header-anchor",href:"#\u5148\u4E0A\u67B6\u6784\u56FE","aria-hidden":"true"},"#")],-1),u=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/74899ea95827d087e0f86d034cfbaea6.png",alt:"74899ea95827d087e0f86d034cfbaea6"})],-1),g=s("ul",null,[s("li",null,[l("Nginx \u4F1A\u5C06\u6211\u4EEC\u5B9A\u4E49\u7684log"),s("em",null,"format\u5199\u5165/var/log/nginx/access"),l("json.log\u6587\u4EF6\uFF0CFilebeat\u4F1A\u5C06\u5176\u4F5C\u4E3A\u8F93\u5165\u9879\u3002")]),s("li",null,"Filebeat\u4F1A\u5C06\u6570\u636E\u8F93\u51FA\u5230Redis"),s("li",null,"Logstash\u4F5C\u4E3ARedis\u6570\u636E\u7684\u8FC7\u6EE4\u5C06\u6570\u636E\u5B58\u50A8Elasticsearch"),s("li",null,"Grafana\u8BFB\u53D6Elasticsearch\u6570\u636E\u6E90")],-1),h=s("h2",{id:"\u7B80\u5355\u4ECB\u7ECD\u4E0Bgrafana",tabindex:"-1"},[l("\u7B80\u5355\u4ECB\u7ECD\u4E0BGrafana "),s("a",{class:"header-anchor",href:"#\u7B80\u5355\u4ECB\u7ECD\u4E0Bgrafana","aria-hidden":"true"},"#")],-1),_=s("blockquote",null,[s("p",null,[l("grafana \u662F\u4E00\u6B3E\u91C7\u7528 go \u8BED\u8A00\u7F16\u5199\u7684\u5F00\u6E90\u5E94\u7528\uFF0C\u4E3B\u8981\u7528\u4E8E\u5927\u89C4\u6A21\u6307\u6807\u6570\u636E\u7684\u53EF\u89C6\u5316\u5C55\u73B0\uFF0C\u662F\u7F51\u7EDC\u67B6\u6784\u548C\u5E94\u7528\u5206\u6790\u4E2D\u6700\u6D41\u884C\u7684\u65F6\u5E8F\u6570\u636E\u5C55\u793A\u5DE5\u5177\uFF0C\u76EE\u524D\u5DF2\u7ECF\u652F\u6301\u7EDD\u5927\u90E8\u5206\u5E38\u7528\u7684\u65F6\u5E8F\u6570\u636E\u5E93,\u5B98\u7F51\uFF08"),s("a",{href:"http://docs.grafana.org/%EF%BC%89",target:"_blank",rel:"noreferrer"},"http://docs.grafana.org/\uFF09"),l(".")])],-1),m=s("h2",{id:"\u76D1\u63A7\u6307\u6807",tabindex:"-1"},[l("\u76D1\u63A7\u6307\u6807 "),s("a",{class:"header-anchor",href:"#\u76D1\u63A7\u6307\u6807","aria-hidden":"true"},"#")],-1),D=s("p",null,"\u9488\u5BF9\u5165\u53E3Nginx\uFF0C\u6211\u8BBE\u8BA1\u4E86\u5982\u4E0B\u7684\u76D1\u63A7\u6307\u6807\uFF1A",-1),f=s("ul",null,[s("li",null,"\u6700\u8FD1\u768424\u5C0F\u65F6\u5185\u8BBF\u95EE\u91CFTop10\u7684\u56FD\u5BB6"),s("li",null,"\u6700\u8FD124\u5C0F\u65F6\u6700\u53D7\u6B22\u8FCE\u7684\u9875\u9762"),s("li",null,"200\u72B6\u6001\u7801\u548C404\u72B6\u6001\u7801\u7684\u6BD4\u4F8B"),s("li",null,"\u6700\u53D7\u6B22\u8FCE\u7684\u4E16\u754C\u9898\u56FE\u5C55\u793A"),s("li",null,"\u7B49\u7B49"),s("li",null,"\u5B9E\u9645\u4E0A\u8FD9\u4E9B\u4E1C\u897F\u6839\u672C\u4E0D\u662F\u6211\u8BBE\u8BA1\u7684\uFF0C\u767E\u5EA6\u4E00\u5927\u5806\uFF0C\u751A\u81F3\u6700\u540E\u6A21\u677F\u4E5F\u662F\u7167\u6284\u5B98\u7F51"),s("li",null,"\u53EF\u6211\u4EEC\u6D3B\u7740\u6BCF\u4E00\u5929\u4E0D\u90FD\u662F\u5728\u590D\u5236\u7C98\u8D34\u5417")],-1),v=s("h2",{id:"\u5F00\u59CB\u90E8\u7F72",tabindex:"-1"},[l("\u5F00\u59CB\u90E8\u7F72 "),s("a",{class:"header-anchor",href:"#\u5F00\u59CB\u90E8\u7F72","aria-hidden":"true"},"#")],-1),b=s("h3",{id:"nginx",tabindex:"-1"},[l("Nginx "),s("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#")],-1),x=s("p",null,"\u5173\u95ED\u5B89\u5168\u673A\u5236",-1),k=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"setenforce 0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl stop firewalld")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),w=s("p",null,"\u914D\u7F6Erepo\u6E90",-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E=s("p",null,"\u5B89\u88C5nginx",-1),L=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum -y install")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),N=s("p",null,"\u66FF\u6362nginx\u8F93\u5165\u65E5\u5FD7\u683C\u5F0F\u4E3Ajson\u683C\u5F0F",-1),G=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`    log_format  main '{"@timestamp":"$time_iso8601",'`)]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K=s("p",null,"#\u4E0D\u77E5\u9053\u600E\u4E48\u66FF\u6362\u7684\u53EF\u4EE5\u67E5\u767E\u5EA6,\u5982\u679C\u60A8\u7528\u7684\u662F\u865A\u62DF\u4E3B\u673A,\u8BF7\u5728\u865A\u62DF\u4E3B\u673Aconf\u6587\u4EF6\u4E2D\u914D\u7F6E\u5F15\u7528\u4F60\u4E3B\u914D\u7F6E\u6587\u4EF6\u7684log\u8F93\u5165\u5B9A\u4E49.",-1),z=s("p",null,"\u865A\u62DF\u4E3B\u673A\u914D\u7F6E\u6587\u4EF6\u4FEE\u6539log\u8F93\u5165\u5199\u6CD5\u5982\u4E0B#\u5982\u679C\u60A8\u6CA1\u6709\u865A\u62DF\u4E3B\u673A\u8BF7\u8DF3\u8FC7\u8FD9\u4E00\u6B65",-1),R=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"access_log  /var/log/nginx/access.log main ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),j=s("p",null,"\u914D\u7F6E\u5B8C\u6210\u540E\u542F\u52A8Nginx.",-1),q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start nginx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),S=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl 127.0.0.1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tail -1 /var/log/nginx/access.log")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u68C0\u6D4B\u662F\u5426\u8F93\u5165\u683C\u5F0F\u4E3Ajson")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),B=s("h2",{id:"redis",tabindex:"-1"},[l("Redis "),s("a",{class:"header-anchor",href:"#redis","aria-hidden":"true"},"#")],-1),O=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum -y install redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat /etc/redis.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind 127.0.0.1 192.168.1.101 #\u53EA\u6709\u8FD9\u91CC\u9700\u8981\u914D\u7F6E\u4E3A\u60A8\u7684\u5185\u7F51IP\u5730\u5740")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),M=s("p",null,"\u542F\u52A8redis",-1),I=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start redis")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T=s("h2",{id:"\u5B89\u88C5elk",tabindex:"-1"},[l("\u5B89\u88C5ELK "),s("a",{class:"header-anchor",href:"#\u5B89\u88C5elk","aria-hidden":"true"},"#")],-1),U=s("p",null,"ELK\u7684\u5B89\u88C5\u524D\u63D0\u662F\u9700\u8981java\u73AF\u5883\u7684,\u8FD9\u91CC\u56FE\u7701\u4E8B,\u76F4\u63A5\u7528yum\u5B89\u88C5java",-1),Y=s("p",null,"\u5B89\u88C5java",-1),F=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum -y install java")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V=s("p",null,"\u9A8C\u8BC1java",-1),J=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"java -version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z=s("h3",{id:"elk\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898-\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487-9-1",tabindex:"-1"},[l("ELK\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898,\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487.9.1 "),s("a",{class:"header-anchor",href:"#elk\u7248\u672C\u9700\u8981\u7EDF\u4E00\u4E0D\u7136\u4F1A\u51FA\u5927\u95EE\u9898-\u8FD9\u91CC\u7EDF\u4E00\u91C7\u7528\u6700\u65B0\u72487-9-1","aria-hidden":"true"},"#")],-1),Q=s("h4",{id:"\u5B89\u88C5es-elasticsearch",tabindex:"-1"},[l("\u5B89\u88C5ES(elasticsearch) "),s("a",{class:"header-anchor",href:"#\u5B89\u88C5es-elasticsearch","aria-hidden":"true"},"#")],-1),H=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# ls")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"elasticsearch-7.9.1-x86_64.rpm  grafana-7.0.1-1.x86_64.rpm  logstash-7.9.1.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filebeat-7.9.1-x86_64.rpm       kibana-7.9.1-x86_64.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh elasticsearch-7.9.1-x86_64.rpm ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W=s("p",null,"\u4E0D\u8981\u7740\u6025\u542F\u52A8,\u5148\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@master1 opt]# cat /etc/elasticsearch/elasticsearch.yml | grep -v "^$" | grep -v "^#"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u8282\u70B9\u540D\u79F0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node.name: node-1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u7A0B\u5E8F\u5DE5\u4F5C\u76EE\u5F55")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"path.data: /var/lib/elasticsearch")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u7A0B\u5E8F\u65E5\u5FD7\u4EA7\u751F\u76EE\u5F55")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"path.logs: /var/log/elasticsearch")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5185\u5B58\u9501\u5B9A")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bootstrap.memory_lock: true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u4F60\u7684\u672C\u5730IP\u8DDF\u672C\u5730\u56DE\u73AF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"network.host: 192.168.1.101,127.0.0.1  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u7AEF\u53E3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http.port: 9200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#7.0\u4EE5\u540E\u90FD\u9700\u8981\u52A0\u7684\u914D\u7F6E\u9879")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'cluster.initial_master_nodes: ["node-1"] ')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ss=s("p",null,"\u7531\u4E8E\u6211\u4EEC\u914D\u7F6E\u4E86\u9501\u5B9A\u5185\u5B58\u6240\u4EE5\u5728\u7CFB\u7EDF\u6587\u4EF6\u91CC\u4E5F\u8981\u6709\u76F8\u5E94\u7684\u914D\u7F6E",-1),ls=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u5B98\u65B9\u89E3\u51B3\u65B9\u6848")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setup-configuration-memory.html")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://www.elastic.co/guide/en/elasticsearch/reference/6.4/setting-system-settings.html#sysconfig")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"vim /usr/lib/systemd/system/elasticsearch.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"### \u589E\u52A0\u5982\u4E0B\u53C2\u6570")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LimitMEMLOCK=infinity")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),as=s("p",null,"\u4FDD\u5B58\u540E\u91CD\u8F7D\u7CFB\u7EDF\u914D\u7F6E,\u542F\u52A8ES",-1),es=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl restart elasticsearch")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),os=s("p",null,"\u68C0\u6D4BES",-1),ts=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u68C0\u6D4B\u7AEF\u53E3\u662F\u5426\u5F00\u542F")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"netstat -apunt | grep 9200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u6216\u8005")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl 127.0.0.1:9200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cs=s("h4",{id:"\u5B89\u88C5filebeat",tabindex:"-1"},[l("\u5B89\u88C5filebeat "),s("a",{class:"header-anchor",href:"#\u5B89\u88C5filebeat","aria-hidden":"true"},"#")],-1),is=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh filebeat-7.9.1-x86_64.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ps=s("p",null,"\u914D\u7F6E\u6587\u4EF6\u4FEE\u6539",-1),rs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@QLaliyun ~]# cat /etc/filebeat/filebeat.yml")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cs=s("p",null,"\u542F\u52A8filebeat",-1),As=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start filebeat")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ds=s("h4",{id:"\u5B89\u88C5logstash",tabindex:"-1"},[l("\u5B89\u88C5logstash "),s("a",{class:"header-anchor",href:"#\u5B89\u88C5logstash","aria-hidden":"true"},"#")],-1),ys=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh logstash-7.9.1.rpm ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),us=s("p",null,[l('\u4FEE\u6539logstash\u914D\u7F6E\u6587\u4EF6,\u540E\u671F\u7528nohup\u65B9\u5F0F\u542F\u52A8,\u4E0D\u77E5\u9053\u7684\u8BDD\u4E0D\u7528\u5173\u5FC3 \u8DDF\u7740\u64CD\u4F5C\u5C31\u884C\uFF0C\u6CE8\u610F\u4E0B\u8F7D\u4E16\u754CIP\u5E93\u6587\u4EF6 [file href="'),s("a",{href:"https://wwe.lanzous.com/i0a1Amdjezi",target:"_blank",rel:"noreferrer"},"https://wwe.lanzous.com/i0a1Amdjezi"),l('"]GeoLite2-City.mmdb[/file]')],-1),gs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 ~]# cat /etc/logstash/conf.d/yh_nginx_redis.conf")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    #\u4E0B\u9762\u8FD9\u4E2AIP\u5E93\u8BF7\u4E00\u5B9A\u8981\u914D\u7F6E\u5230\u4F4D,\u4E0D\u7136\u88C5\u4E0D\u4E86\u903C")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hs=s("p",null,"\u542F\u52A8logstash",-1),_s=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nohup /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/yh_nginx_redis.conf &")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ms=s("h4",{id:"\u5B89\u88C5grafana",tabindex:"-1"},[l("\u5B89\u88C5Grafana "),s("a",{class:"header-anchor",href:"#\u5B89\u88C5grafana","aria-hidden":"true"},"#")],-1),Ds=s("p",null,"\u63A8\u8350\u4F7F\u75287.0\u4EE5\u4E0B\u7248\u672C,\u5426\u5219\u53EF\u80FD\u4F1A\u548C\u90E8\u5206\u63D2\u4EF6\u4E0D\u517C\u5BB9,\u8FD9\u91CC\u7528\u7684\u662F6.3.2",-1),fs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@master1 opt]# rpm -ivh grafana-7.0.1-1.x86_64.rpm")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vs=s("p",null,"\u7531\u4E8E\u6211\u4EEC\u540E\u671F\u4F1A\u7528\u5230\u67D0\u4E9B\u63D2\u4EF6\u6240\u4EE5\u5728\u8FD9\u91CC\u63D0\u524D\u5B89\u88C5",-1),bs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"grafana-cli plugins install grafana-piechart-panel")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"grafana-cli plugins install grafana-world-map")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xs=s("p",null,"\u56FD\u5185\u670D\u52A1\u5668\u53EF\u80FD\u5B89\u88C5\u4E0D\u4E0A,\u90A3\u5C31\u81EA\u5DF1\u60F3\u529E\u6CD5\u597D\u5427",-1),ks=s("p",null,"\u7531\u4E8E\u67D0\u4E9B\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\u5982\u679C\u540E\u671F\u5728\u6A21\u677F\u5BFC\u5165\u540E\u51FA\u73B0\u5730\u56FE\u56FE\u7247\u4E0D\u80FD\u6B63\u5E38\u663E\u793A\u7684\u539F\u56E0\u53EF\u4EE5.\u91C7\u7528\u4EE5\u4E0B\u505A\u6CD5",-1),ws=s("p",null,[l("\u53C2\u8003\u535A\u5BA2:"),s("a",{href:"https://www.cnblogs.com/xuewenlong/p/12929443.html",target:"_blank",rel:"noreferrer"},"https://www.cnblogs.com/xuewenlong/p/12929443.html")],-1),$s=s("p",null,"\u597D\u7684\u6211\u4EEC\u76F4\u63A5\u6253\u5F00Grafana\u5965\u91CC\u7ED9",-1),Es=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start grafana-server")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ls=s("h5",{id:"\u914D\u7F6E\u6570\u636E\u6E90",tabindex:"-1"},[l("\u914D\u7F6E\u6570\u636E\u6E90 "),s("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6570\u636E\u6E90","aria-hidden":"true"},"#")],-1),Ns=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131436778.png",alt:"image-20201013131436778"})],-1),Gs=s("p",null,"\u70B9\u51FBSave&test\u6D4B\u8BD5\u6210\u529F\u540EBack",-1),Ks=s("p",null,"\u5BFC\u5165\u76D1\u63A7\u6A21\u677F",-1),zs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131610205.png",alt:"image-20201013131610205"})],-1),Rs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131647199.png",alt:"image-20201013131647199"})],-1),js=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201013131729032.png",alt:"image-20201013131729032"})],-1),qs=s("p",null,[l("\u4E0B\u9762\u76F4\u63A5\u51FA\u56FE"),s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/123.png",alt:"123"})],-1),Ss=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/456.png",alt:"456"})],-1);function Bs(a,Os,Ps,Ms,t,Is){const c=i;return C(),r(c,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":n(()=>[y,u,g,h,_,m,D,f,v,b,x,k,w,$,E,L,N,G,K,z,R,j,q,S,B,O,P,M,I,T,U,Y,F,V,J,Z,Q,H,W,X,ss,ls,ns,as,es,os,ts,cs,is,ps,rs,Cs,As,ds,ys,us,gs,hs,_s,ms,Ds,fs,vs,bs,xs,ks,ws,$s,Es,Ls,Ns,Gs,Ks,zs,Rs,js,qs,Ss]),"main-header":n(()=>[e(a.$slots,"main-header")]),"main-header-after":n(()=>[e(a.$slots,"main-header-after")]),"main-nav":n(()=>[e(a.$slots,"main-nav")]),"main-content":n(()=>[e(a.$slots,"main-content")]),"main-content-after":n(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[e(a.$slots,"main-nav-after")]),comment:n(()=>[e(a.$slots,"comment")]),footer:n(()=>[e(a.$slots,"footer")]),aside:n(()=>[e(a.$slots,"aside")]),"aside-custom":n(()=>[e(a.$slots,"aside-custom")]),default:n(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Zs=p(d,[["render",Bs]]);export{Js as __pageData,Zs as default};
