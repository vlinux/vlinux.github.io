import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.CdMcCuLR.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as b,u as g,a as k}from"./chunks/vue-router.Cro35QNm.js";import{aa as m,ap as l,ag as e,af as s,ai as n,P as y,ab as v,a1 as f}from"./framework.GHZxz7jq.js";import"./index.mH_NH_pU.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.BaL1KWr8.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.Dy68RlFi.js";const _=b("/posts/Redis-5.x知识体系梳理",async i=>JSON.parse('{"title":"Redis-5.x知识体系梳理","description":"","frontmatter":{"title":"Redis-5.x知识体系梳理","categories":"Redis","tags":["Redis5.*"],"date":"2021-01-01 13:10:00"},"headers":[],"relativePath":"pages/posts/Redis-5.x知识体系梳理.md","lastUpdated":null}'),{lazy:(i,c)=>i.name===c.name}),H={__name:"Redis-5.x知识体系梳理",setup(i,{expose:c}){const{data:t}=_(),d=k(),r=g(),p=Object.assign(r.meta.frontmatter||{},t.value?.frontmatter||{});return d.currentRoute.value.data=t.value,f("valaxy:frontmatter",p),globalThis.$frontmatter=p,c({frontmatter:{title:"Redis-5.x知识体系梳理",categories:"Redis",tags:["Redis5.*"],date:"2021-01-01 13:10:00"}}),(a,o)=>{const u=h;return v(),m(u,{frontmatter:y(p)},{"main-content-md":l(()=>[...o[0]||(o[0]=[s("h1",{id:"redis-5-x",tabindex:"-1"},[n("Redis-5.x "),s("a",{class:"header-anchor",href:"#redis-5-x","aria-label":'Permalink to "Redis-5.x"'},"​")],-1),s("h1",{id:"第1章-关系型与非关系型",tabindex:"-1"},[n("第1章 关系型与非关系型 "),s("a",{class:"header-anchor",href:"#第1章-关系型与非关系型","aria-label":'Permalink to "第1章 关系型与非关系型"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"关系型： mysql oracle")]),n(`
`),s("span",{class:"line"},[s("span",null,"非关系型：redis mongo ES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第2章-redis重要特性",tabindex:"-1"},[n("第2章 Redis重要特性 "),s("a",{class:"header-anchor",href:"#第2章-redis重要特性","aria-label":'Permalink to "第2章 Redis重要特性"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"SWIFT")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.速度快")]),n(`
`),s("span",{class:"line"},[s("span",null,"  c语言写的")]),n(`
`),s("span",{class:"line"},[s("span",null,"  代码优雅")]),n(`
`),s("span",{class:"line"},[s("span",null,"  单线程架构 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.支持多种数据结构")]),n(`
`),s("span",{class:"line"},[s("span",null,"  字符串，哈希，列表，集合，有序集合，地理位置")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.丰富的功能")]),n(`
`),s("span",{class:"line"},[s("span",null,"  天然计数器")]),n(`
`),s("span",{class:"line"},[s("span",null,"  健过期功能")]),n(`
`),s("span",{class:"line"},[s("span",null,"  消息队列")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.支持客户端语言多")]),n(`
`),s("span",{class:"line"},[s("span",null,"  php,java,python")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.数据持久化")]),n(`
`),s("span",{class:"line"},[s("span",null,"  所有的数据都运行在内存中")]),n(`
`),s("span",{class:"line"},[s("span",null,"  支持2种格式持久化数据AOF RDB AOF&RDB")]),n(`
`),s("span",{class:"line"},[s("span",null,"6.自带多种高可用架构")]),n(`
`),s("span",{class:"line"},[s("span",null,"  主从")]),n(`
`),s("span",{class:"line"},[s("span",null,"  哨兵")]),n(`
`),s("span",{class:"line"},[s("span",null,"  集群")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第3章-redis应用场景",tabindex:"-1"},[n("第3章 redis应用场景 "),s("a",{class:"header-anchor",href:"#第3章-redis应用场景","aria-label":'Permalink to "第3章 redis应用场景"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.缓存-键过期时间")]),n(`
`),s("span",{class:"line"},[s("span",null,"  把session会话存在redis,过期删除")]),n(`
`),s("span",{class:"line"},[s("span",null,"  缓存用户信息，缓存Mysql部分数据，用户先访问redis，redis没有再访问mysql，然后回写给redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"  商城优惠卷过期时间")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.排行榜-列表&有序集合")]),n(`
`),s("span",{class:"line"},[s("span",null,"  热度/点击数排行榜")]),n(`
`),s("span",{class:"line"},[s("span",null,"  直播间礼物积分排行")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.计数器-天然支持计数器")]),n(`
`),s("span",{class:"line"},[s("span",null,"  帖子浏览数")]),n(`
`),s("span",{class:"line"},[s("span",null,"  视频播放数")]),n(`
`),s("span",{class:"line"},[s("span",null,"  评论数")]),n(`
`),s("span",{class:"line"},[s("span",null,"  点赞/踩")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.社交网络-集合")]),n(`
`),s("span",{class:"line"},[s("span",null,"  粉丝")]),n(`
`),s("span",{class:"line"},[s("span",null,"  共同好友 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"  兴趣爱好")]),n(`
`),s("span",{class:"line"},[s("span",null,"  标签")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.消息队列-发布订阅")]),n(`
`),s("span",{class:"line"},[s("span",null,"  配合ELK缓存收集来的日志")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第4章-redis安装部署",tabindex:"-1"},[n("第4章 Redis安装部署 "),s("a",{class:"header-anchor",href:"#第4章-redis安装部署","aria-label":'Permalink to "第4章 Redis安装部署"'},"​")],-1),s("h2",{id:"_1-redis官网",tabindex:"-1"},[n("1.redis官网 "),s("a",{class:"header-anchor",href:"#_1-redis官网","aria-label":'Permalink to "1.redis官网"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CPP")]),n(`
`),s("span",{class:"line"},[s("span",null,"https://redis.io/")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-版本选择",tabindex:"-1"},[n("2.版本选择 "),s("a",{class:"header-anchor",href:"#_2-版本选择","aria-label":'Permalink to "2.版本选择"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.x     very old")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.x     redis-cluster ")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.x     混合持久化")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.x     新增加了流处理类型 最新稳定版")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-规划目录",tabindex:"-1"},[n("3.规划目录 "),s("a",{class:"header-anchor",href:"#_3-规划目录","aria-label":'Permalink to "3.规划目录"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"KOTLIN")]),n(`
`),s("span",{class:"line"},[s("span",null,"/data/soft  下载目录  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"/opt/redis_6379/{conf,logs,pid} 安装目录,日志目录,pid目录,配置目录")]),n(`
`),s("span",{class:"line"},[s("span",null,"/data/redis_6379/  数据目录")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-安装命令",tabindex:"-1"},[n("4.安装命令 "),s("a",{class:"header-anchor",href:"#_4-安装命令","aria-label":'Permalink to "4.安装命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"GO")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir /data/soft -p")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /data/soft ")]),n(`
`),s("span",{class:"line"},[s("span",null,"wget http://download.redis.io/releases/redis-5.0.7.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",null,"tar xf redis-5.0.7.tar.gz -C /opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"ln -s /opt/redis-5.0.7 /opt/redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /opt/redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"make ")]),n(`
`),s("span",{class:"line"},[s("span",null,"make install")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-配置文件",tabindex:"-1"},[n("5.配置文件 "),s("a",{class:"header-anchor",href:"#_5-配置文件","aria-label":'Permalink to "5.配置文件"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /opt/redis_6379/{conf,pid,logs}")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /data/redis_6379")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/opt/redis_6379/conf/redis_6379.conf<< EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"daemonize yes ")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind 127.0.0.1 10.0.0.51")]),n(`
`),s("span",{class:"line"},[s("span",null,"port 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,"pidfile /opt/redis_6379/pid/redis_6379.pid")]),n(`
`),s("span",{class:"line"},[s("span",null,"logfile /opt/redis_6379/logs/redis_6379.log")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-启动命令",tabindex:"-1"},[n("6.启动命令 "),s("a",{class:"header-anchor",href:"#_6-启动命令","aria-label":'Permalink to "6.启动命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-server /opt/redis_6379/conf/redis_6379.conf")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_7-检查",tabindex:"-1"},[n("7.检查 "),s("a",{class:"header-anchor",href:"#_7-检查","aria-label":'Permalink to "7.检查"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"ps -ef|grep redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"netstat -lntup|grep 6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_8-连接redis终端",tabindex:"-1"},[n("8.连接redis终端 "),s("a",{class:"header-anchor",href:"#_8-连接redis终端","aria-label":'Permalink to "8.连接redis终端"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@db01 ~]# redis-cli")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> ")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> set k1 v1 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"OK")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> get k1")]),n(`
`),s("span",{class:"line"},[s("span",null,'"v1"')]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379>")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_9-关闭命令",tabindex:"-1"},[n("9.关闭命令 "),s("a",{class:"header-anchor",href:"#_9-关闭命令","aria-label":'Permalink to "9.关闭命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"kill ")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill ")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli")]),n(`
`),s("span",{class:"line"},[s("span",null,">SHUTDOWN")]),n(`
`),s("span",{class:"line"},[s("span",null,"- redis-cli shutdown")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_10-system启动配置",tabindex:"-1"},[n("10.system启动配置 "),s("a",{class:"header-anchor",href:"#_10-system启动配置","aria-label":'Permalink to "10.system启动配置"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"groupadd -g 1000 redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"useradd -u 1000 -g 1000 -M -s /sbin/nologin")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /data/redis*")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /opt/redis*")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/usr/lib/systemd/system/redis.service<<EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Unit]")]),n(`
`),s("span",{class:"line"},[s("span",null,"Description=Redis persistent key-value database")]),n(`
`),s("span",{class:"line"},[s("span",null,"After=network.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"After=network-online.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"Wants=network-online.target")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Service]")]),n(`
`),s("span",{class:"line"},[s("span",null,"ExecStart=/usr/local/bin/redis /opt/redis_6379/conf/redis_6379.conf --supervised systemd")]),n(`
`),s("span",{class:"line"},[s("span",null,"ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 6379 shutdown")]),n(`
`),s("span",{class:"line"},[s("span",null,"Type=notify")]),n(`
`),s("span",{class:"line"},[s("span",null,"User=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"Group=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"RuntimeDirectory=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"RuntimeDirectoryMode=0755")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Install]")]),n(`
`),s("span",{class:"line"},[s("span",null,"WantedBy=multi-user.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl daemon-reload ")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第5章-redis全局命令",tabindex:"-1"},[n("第5章 Redis全局命令 "),s("a",{class:"header-anchor",href:"#第5章-redis全局命令","aria-label":'Permalink to "第5章 Redis全局命令"'},"​")],-1),s("p",null,"全局命令是指对所有数据类型都通用的命令",-1),s("h2",{id:"_0-redis数据格式",tabindex:"-1"},[n("0.redis数据格式 "),s("a",{class:"header-anchor",href:"#_0-redis数据格式","aria-label":'Permalink to "0.redis数据格式"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"key:value")]),n(`
`),s("span",{class:"line"},[s("span",null,"键:值")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_1-写入测试key",tabindex:"-1"},[n("1.写入测试key "),s("a",{class:"header-anchor",href:"#_1-写入测试key","aria-label":'Permalink to "1.写入测试key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k2 v2 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k3 v3")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-查看所有的key",tabindex:"-1"},[n("2.查看所有的key "),s("a",{class:"header-anchor",href:"#_2-查看所有的key","aria-label":'Permalink to "2.查看所有的key"'},"​")],-1),s("p",null,"！！！危险命令！！！此操作未满30岁禁止请在家人的看管下执行",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"keys *")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-查看有多少个key",tabindex:"-1"},[n("3.查看有多少个key "),s("a",{class:"header-anchor",href:"#_3-查看有多少个key","aria-label":'Permalink to "3.查看有多少个key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"DBSIZE")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-查看某个key是否存在",tabindex:"-1"},[n("4.查看某个Key是否存在 "),s("a",{class:"header-anchor",href:"#_4-查看某个key是否存在","aria-label":'Permalink to "4.查看某个Key是否存在"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"EXISTS k1 ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"状态码：")]),n(`
`),s("span",{class:"line"},[s("span",null,"0 表示这个key不存在 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"1 表示这个key存在")]),n(`
`),s("span",{class:"line"},[s("span",null,"N 表示存在N个key")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-删除key",tabindex:"-1"},[n("5.删除key "),s("a",{class:"header-anchor",href:"#_5-删除key","aria-label":'Permalink to "5.删除key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"DEL k1 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"DEL k1 k2 ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"状态码：")]),n(`
`),s("span",{class:"line"},[s("span",null,"0   表示这个key不存在")]),n(`
`),s("span",{class:"line"},[s("span",null,"1   表示这个key存在，并且删除成功了")]),n(`
`),s("span",{class:"line"},[s("span",null,"N   表示N个key存在，并且删除成功了N个key")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-键过期",tabindex:"-1"},[n("6.键过期 "),s("a",{class:"header-anchor",href:"#_6-键过期","aria-label":'Permalink to "6.键过期"'},"​")],-1),s("p",null,"设置过期时间",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"EXPIRE k1 10")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"状态码：")]),n(`
`),s("span",{class:"line"},[s("span",null,"0   这个key不存在")]),n(`
`),s("span",{class:"line"},[s("span",null,"1   这个key存在，并且设置过期时间成功")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"查看keys是否过期",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"TTL k1 ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"状态码：")]),n(`
`),s("span",{class:"line"},[s("span",null,"-1  这个key存在,并且没有设定存活周期，永不过期")]),n(`
`),s("span",{class:"line"},[s("span",null,"-2  这个key不存在")]),n(`
`),s("span",{class:"line"},[s("span",null,"N   这个key存在，并且在N秒后过期")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"取消过期时间：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"第一种方法：")]),n(`
`),s("span",{class:"line"},[s("span",null,"PERSIST k1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第二种方法：")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"结论：")]),n(`
`),s("span",{class:"line"},[s("span",null,"过期后的key会被直接删除")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第6章-字符串操作",tabindex:"-1"},[n("第6章 字符串操作 "),s("a",{class:"header-anchor",href:"#第6章-字符串操作","aria-label":'Permalink to "第6章 字符串操作"'},"​")],-1),s("h2",{id:"_1-设置一个key",tabindex:"-1"},[n("1.设置一个key "),s("a",{class:"header-anchor",href:"#_1-设置一个key","aria-label":'Permalink to "1.设置一个key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k1 v1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-查看一个key",tabindex:"-1"},[n("2.查看一个key "),s("a",{class:"header-anchor",href:"#_2-查看一个key","aria-label":'Permalink to "2.查看一个key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"get k1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-设置多个key",tabindex:"-1"},[n("3.设置多个key "),s("a",{class:"header-anchor",href:"#_3-设置多个key","aria-label":'Permalink to "3.设置多个key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"MSET k1 v1 k2 v2 k3 v3 k4 v4")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-查看多个key",tabindex:"-1"},[n("4.查看多个key "),s("a",{class:"header-anchor",href:"#_4-查看多个key","aria-label":'Permalink to "4.查看多个key"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"MGET k1 k2 k3 k4")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-天然计数器",tabindex:"-1"},[n("5.天然计数器 "),s("a",{class:"header-anchor",href:"#_5-天然计数器","aria-label":'Permalink to "5.天然计数器"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"加1:")]),n(`
`),s("span",{class:"line"},[s("span",null,"SET k1 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"INCR k1")]),n(`
`),s("span",{class:"line"},[s("span",null,"GET k1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"加N：")]),n(`
`),s("span",{class:"line"},[s("span",null,"INCRBY k1 100")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"减1:")]),n(`
`),s("span",{class:"line"},[s("span",null,"INCRBY k1 -1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"减N:")]),n(`
`),s("span",{class:"line"},[s("span",null,"INCRBY k1 -100")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第7章-列表操作",tabindex:"-1"},[n("第7章 列表操作 "),s("a",{class:"header-anchor",href:"#第7章-列表操作","aria-label":'Permalink to "第7章 列表操作"'},"​")],-1),s("h2",{id:"_1-插入列表",tabindex:"-1"},[n("1.插入列表 "),s("a",{class:"header-anchor",href:"#_1-插入列表","aria-label":'Permalink to "1.插入列表"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"LPUSH: 从列表左侧插入数据")]),n(`
`),s("span",{class:"line"},[s("span",null,"RPUSH: 从列表右侧插入数据")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-查看列表长度",tabindex:"-1"},[n("2.查看列表长度 "),s("a",{class:"header-anchor",href:"#_2-查看列表长度","aria-label":'Permalink to "2.查看列表长度"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"LLEN list1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-查看列表内容",tabindex:"-1"},[n("3.查看列表内容 "),s("a",{class:"header-anchor",href:"#_3-查看列表内容","aria-label":'Permalink to "3.查看列表内容"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"LRANGE list1 0 -1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-删除列表元素",tabindex:"-1"},[n("4.删除列表元素 "),s("a",{class:"header-anchor",href:"#_4-删除列表元素","aria-label":'Permalink to "4.删除列表元素"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"LPOP: 从列表左边删除一个元素")]),n(`
`),s("span",{class:"line"},[s("span",null,"RPOP: 从列表右边删除一个元素")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"LPOP list1")]),n(`
`),s("span",{class:"line"},[s("span",null,"RPOP list1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-删除整个列表",tabindex:"-1"},[n("5.删除整个列表 "),s("a",{class:"header-anchor",href:"#_5-删除整个列表","aria-label":'Permalink to "5.删除整个列表"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"DEL list1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第8章-hash操作",tabindex:"-1"},[n("第8章 hash操作 "),s("a",{class:"header-anchor",href:"#第8章-hash操作","aria-label":'Permalink to "第8章 hash操作"'},"​")],-1),s("h2",{id:"_1-mysql数据如何缓存到redis",tabindex:"-1"},[n("1.mysql数据如何缓存到redis "),s("a",{class:"header-anchor",href:"#_1-mysql数据如何缓存到redis","aria-label":'Permalink to "1.mysql数据如何缓存到redis"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"mysql存储格式：")]),n(`
`),s("span",{class:"line"},[s("span",null,"user")]),n(`
`),s("span",{class:"line"},[s("span",null,"id name   job  age")]),n(`
`),s("span",{class:"line"},[s("span",null,"1  bobo   IT   28")]),n(`
`),s("span",{class:"line"},[s("span",null,"2  json   py   25")]),n(`
`),s("span",{class:"line"},[s("span",null,"3  hao    bug  26")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"hash类型存储格式：")]),n(`
`),s("span",{class:"line"},[s("span",null,"key    field value field   value        ")]),n(`
`),s("span",{class:"line"},[s("span",null,"user:1   name  bobo  job     IT     age 28")]),n(`
`),s("span",{class:"line"},[s("span",null,"user:2   name  json  job     py     age 25")]),n(`
`),s("span",{class:"line"},[s("span",null,"user:3   name  hao   job     bug    age 26")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-创建一个hash数据",tabindex:"-1"},[n("2.创建一个Hash数据 "),s("a",{class:"header-anchor",href:"#_2-创建一个hash数据","aria-label":'Permalink to "2.创建一个Hash数据"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMSET user:1 name bobo job IT age 28")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMSET user:2 name json job py age 29")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMSET user:3 name hao job bug age 19")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-查看hash里指定的值",tabindex:"-1"},[n("3.查看hash里指定的值 "),s("a",{class:"header-anchor",href:"#_3-查看hash里指定的值","aria-label":'Permalink to "3.查看hash里指定的值"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"select name from user where id =1 ;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMGET user:1 name  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMGET user:1 name job age")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-查看hash里所有的值",tabindex:"-1"},[n("4.查看Hash里所有的值 "),s("a",{class:"header-anchor",href:"#_4-查看hash里所有的值","aria-label":'Permalink to "4.查看Hash里所有的值"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"select * from user where id =1 ;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"HGETALL user:1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第9章-集合操作-set",tabindex:"-1"},[n("第9章 集合操作 set "),s("a",{class:"header-anchor",href:"#第9章-集合操作-set","aria-label":'Permalink to "第9章 集合操作 set"'},"​")],-1),s("h2",{id:"_1-创建集合",tabindex:"-1"},[n("1.创建集合 "),s("a",{class:"header-anchor",href:"#_1-创建集合","aria-label":'Permalink to "1.创建集合"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"SADD set1 1 2 3")]),n(`
`),s("span",{class:"line"},[s("span",null,"SADD set2 1 3 5 7")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-查看集合成员",tabindex:"-1"},[n("2.查看集合成员 "),s("a",{class:"header-anchor",href:"#_2-查看集合成员","aria-label":'Permalink to "2.查看集合成员"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"SMEMBERS set1")]),n(`
`),s("span",{class:"line"},[s("span",null,"SMEMBERS set2")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-查看集合的交集",tabindex:"-1"},[n("3.查看集合的交集 "),s("a",{class:"header-anchor",href:"#_3-查看集合的交集","aria-label":'Permalink to "3.查看集合的交集"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> SINTER set1 set2")]),n(`
`),s("span",{class:"line"},[s("span",null,'1) "1"')]),n(`
`),s("span",{class:"line"},[s("span",null,'2) "3"')])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-查看集合的并集",tabindex:"-1"},[n("4.查看集合的并集 "),s("a",{class:"header-anchor",href:"#_4-查看集合的并集","aria-label":'Permalink to "4.查看集合的并集"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> SUNION set1 set2")]),n(`
`),s("span",{class:"line"},[s("span",null,'1) "1"')]),n(`
`),s("span",{class:"line"},[s("span",null,'2) "2"')]),n(`
`),s("span",{class:"line"},[s("span",null,'3) "3"')]),n(`
`),s("span",{class:"line"},[s("span",null,'4) "5"')]),n(`
`),s("span",{class:"line"},[s("span",null,'5) "7"')])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-查看集合的差集",tabindex:"-1"},[n("5.查看集合的差集 "),s("a",{class:"header-anchor",href:"#_5-查看集合的差集","aria-label":'Permalink to "5.查看集合的差集"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> SDIFF set1 set2")]),n(`
`),s("span",{class:"line"},[s("span",null,'1) "2"')]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> SDIFF set2 set1")]),n(`
`),s("span",{class:"line"},[s("span",null,'1) "5"')]),n(`
`),s("span",{class:"line"},[s("span",null,'2) "7"')])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-删除一个成员",tabindex:"-1"},[n("6.删除一个成员 "),s("a",{class:"header-anchor",href:"#_6-删除一个成员","aria-label":'Permalink to "6.删除一个成员"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"SREM set1 1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-注意",tabindex:"-1"},[n("6.注意 "),s("a",{class:"header-anchor",href:"#_6-注意","aria-label":'Permalink to "6.注意"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"集合不允许出现重复的值，自动去重")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第10章-有序集合操作",tabindex:"-1"},[n("第10章 有序集合操作 "),s("a",{class:"header-anchor",href:"#第10章-有序集合操作","aria-label":'Permalink to "第10章 有序集合操作"'},"​")],-1),s("h2",{id:"_1-添加成员",tabindex:"-1"},[n("1.添加成员 "),s("a",{class:"header-anchor",href:"#_1-添加成员","aria-label":'Permalink to "1.添加成员"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZADD SZ3 100 json")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZADD SZ3 90 bobo")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZADD SZ3 99 xiaocancan")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZADD SZ3 98 bughao")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-计算成员个数",tabindex:"-1"},[n("2.计算成员个数 "),s("a",{class:"header-anchor",href:"#_2-计算成员个数","aria-label":'Permalink to "2.计算成员个数"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZCARD SZ3")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-计算某个成员分数",tabindex:"-1"},[n("3.计算某个成员分数 "),s("a",{class:"header-anchor",href:"#_3-计算某个成员分数","aria-label":'Permalink to "3.计算某个成员分数"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZSCORE SZ3 json")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-按照降序查看成员名次",tabindex:"-1"},[n("4.按照降序查看成员名次： "),s("a",{class:"header-anchor",href:"#_4-按照降序查看成员名次","aria-label":'Permalink to "4.按照降序查看成员名次："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANK SZ3 json")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANK SZ3 bobo")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-按照升序查看成员名次",tabindex:"-1"},[n("5.按照升序查看成员名次： "),s("a",{class:"header-anchor",href:"#_5-按照升序查看成员名次","aria-label":'Permalink to "5.按照升序查看成员名次："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZREVRANK SZ3 json")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZREVRANK SZ3 bobo")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-删除成员",tabindex:"-1"},[n("6.删除成员 "),s("a",{class:"header-anchor",href:"#_6-删除成员","aria-label":'Permalink to "6.删除成员"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZREM SZ3 json")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_7-增加成员分数",tabindex:"-1"},[n("7.增加成员分数 "),s("a",{class:"header-anchor",href:"#_7-增加成员分数","aria-label":'Permalink to "7.增加成员分数"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZINCRBY SZ3 2 xiaocancan")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZSCORE SZ3 xiaocancan")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_8-返回指定排名范围的成员",tabindex:"-1"},[n("8.返回指定排名范围的成员 "),s("a",{class:"header-anchor",href:"#_8-返回指定排名范围的成员","aria-label":'Permalink to "8.返回指定排名范围的成员"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANGE SZ3 0 3 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANGE SZ3 0 3 WITHSCORES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_9-返回指定分数范围的成员",tabindex:"-1"},[n("9.返回指定分数范围的成员 "),s("a",{class:"header-anchor",href:"#_9-返回指定分数范围的成员","aria-label":'Permalink to "9.返回指定分数范围的成员"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANGEBYSCORE SZ3 95 100")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANGEBYSCORE SZ3 95 100  WITHSCORES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_10-返回指定分数范围的成员的个数",tabindex:"-1"},[n("10.返回指定分数范围的成员的个数 "),s("a",{class:"header-anchor",href:"#_10-返回指定分数范围的成员的个数","aria-label":'Permalink to "10.返回指定分数范围的成员的个数"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZCOUNT SZ3 90 110")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第11章-持久化",tabindex:"-1"},[n("第11章 持久化 "),s("a",{class:"header-anchor",href:"#第11章-持久化","aria-label":'Permalink to "第11章 持久化"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-4bec444f44920615.png#mirages-width=382&mirages-height=352&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("p",null,"RDB流程图",-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-e70993005208cde6.png#mirages-width=220&mirages-height=310&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("p",null,"AOF流程图",-1),s("h2",{id:"_1-rdb和aof介绍",tabindex:"-1"},[n("1.RDB和AOF介绍 "),s("a",{class:"header-anchor",href:"#_1-rdb和aof介绍","aria-label":'Permalink to "1.RDB和AOF介绍"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"RDB：类似于快照的形式，当前内存里的状态持久化到硬盘里")]),n(`
`),s("span",{class:"line"},[s("span",null,"优点：压缩格式/恢复速度快")]),n(`
`),s("span",{class:"line"},[s("span",null,"缺点：不是实时的，可能会丢失数据,操作比较重")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ")]),n(`
`),s("span",{class:"line"},[s("span",null,"AOF：类似于mysql的binlog，可以设置为每秒/每次操作以追加的形式持久化")]),n(`
`),s("span",{class:"line"},[s("span",null,"优点：安全，最多损失1秒的数据，可读")]),n(`
`),s("span",{class:"line"},[s("span",null,"缺点：文件比较大，恢复速度慢")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-配置rdb",tabindex:"-1"},[n("2.配置RDB "),s("a",{class:"header-anchor",href:"#_2-配置rdb","aria-label":'Permalink to "2.配置RDB"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"KOTLIN")]),n(`
`),s("span",{class:"line"},[s("span",null,"save 900 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"save 300 10")]),n(`
`),s("span",{class:"line"},[s("span",null,"save 60 10000")]),n(`
`),s("span",{class:"line"},[s("span",null,"dbfilename redis.rdb")]),n(`
`),s("span",{class:"line"},[s("span",null,"dir /data/redis_6379/")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-rdb结论",tabindex:"-1"},[n("3.RDB结论 "),s("a",{class:"header-anchor",href:"#_3-rdb结论","aria-label":'Permalink to "3.RDB结论"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.没有配置save参数时，shutdown不会持久化保存")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.没有配置save参数时，可以手动执行bgsave触发持久化")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.在配置了save参数后，shutdown,kill,pkill都会自动触发bgsave")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.恢复的时候，rdb文件名要和配置文件里写的一样。")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.RDB高版本兼容低版本，低版本不兼容高版本")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-aof配置",tabindex:"-1"},[n("4.AOF配置 "),s("a",{class:"header-anchor",href:"#_4-aof配置","aria-label":'Permalink to "4.AOF配置"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"appendonly yes")]),n(`
`),s("span",{class:"line"},[s("span",null,'appendfilename "redis.aof"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendfsync everysec")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-aof重写机制",tabindex:"-1"},[n("5.AOF重写机制 "),s("a",{class:"header-anchor",href:"#_5-aof重写机制","aria-label":'Permalink to "5.AOF重写机制"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"执行的命令   aof记录        redis的数据       ")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k1    v1    set k1   k1                 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k2    v2    set k2   k1 k2          ")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k3    v3    set k3   k1 k2 k3       ")]),n(`
`),s("span",{class:"line"},[s("span",null,"del k1      del k1       k2 k3")]),n(`
`),s("span",{class:"line"},[s("span",null,"del k2      del k2       k3 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"实际有意义的只有一条记录：")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k3")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-aof和rdb实验",tabindex:"-1"},[n("6.aof和rdb实验 "),s("a",{class:"header-anchor",href:"#_6-aof和rdb实验","aria-label":'Permalink to "6.aof和rdb实验"'},"​")],-1),s("p",null,"实验背景：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"aof和rdb同时存在的时候，redis重启会读取哪一个数据？")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"实验步骤：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"KOTLIN")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k2 v2 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"bgsave ")]),n(`
`),s("span",{class:"line"},[s("span",null,"RDB k1 k2")]),n(`
`),s("span",{class:"line"},[s("span",null,"mv redis.rdb /opt/  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ")]),n(`
`),s("span",{class:"line"},[s("span",null,"flushall")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k3 v3")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k4 v4")]),n(`
`),s("span",{class:"line"},[s("span",null,"AOF k3 k4")]),n(`
`),s("span",{class:"line"},[s("span",null,"mv redis.aof /opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"rm -rf /data/redis_6379/*")]),n(`
`),s("span",{class:"line"},[s("span",null,"mv /opt/redis.rdb .")]),n(`
`),s("span",{class:"line"},[s("span",null,"mv /opt/redis.aof .")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-server /opt/redis_6379/conf/redis.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli ")]),n(`
`),s("span",{class:"line"},[s("span",null,"keys *")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"结论：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"当aof和rdb同时存在时，重启redis会优先读取aof的内容")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_7-如何选择是rdb还是aof",tabindex:"-1"},[n("7.如何选择是rdb还是aof "),s("a",{class:"header-anchor",href:"#_7-如何选择是rdb还是aof","aria-label":'Permalink to "7.如何选择是rdb还是aof"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CPP")]),n(`
`),s("span",{class:"line"},[s("span",null,"https://redis.io/topics/persistence")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.开启混合模式")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.开启aof")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.不开启rdb")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.rdb采用定时任务的方式定时备份")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_8-aof文件故障模拟实验结论",tabindex:"-1"},[n("8.aof文件故障模拟实验结论 "),s("a",{class:"header-anchor",href:"#_8-aof文件故障模拟实验结论","aria-label":'Permalink to "8.aof文件故障模拟实验结论"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.aof文件损坏之后，使用修复工具，一刀流，从aof文件出错的地方开始到最后全部删掉")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.任何操作之前，先备份数据")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.aof备份一般情况最多损失1秒的数据")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_9-实验-如果设置了过期时间-恢复数据会如何处理",tabindex:"-1"},[n("9.实验：如果设置了过期时间，恢复数据会如何处理 "),s("a",{class:"header-anchor",href:"#_9-实验-如果设置了过期时间-恢复数据会如何处理","aria-label":'Permalink to "9.实验：如果设置了过期时间，恢复数据会如何处理"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.aof文件会记录下过期的时间")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.恢复的时候会去对比记录的过期时间和当前时间，如果超过了，就删除key")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.key的过期时间不受备份恢复影响")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第12章-redis用户认证",tabindex:"-1"},[n("第12章 redis用户认证 "),s("a",{class:"header-anchor",href:"#第12章-redis用户认证","aria-label":'Permalink to "第12章 redis用户认证"'},"​")],-1),s("h2",{id:"_1-写入配置文件",tabindex:"-1"},[n("1.写入配置文件 "),s("a",{class:"header-anchor",href:"#_1-写入配置文件","aria-label":'Permalink to "1.写入配置文件"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"requirepass cookzhang")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-使用密码登陆",tabindex:"-1"},[n("2.使用密码登陆 "),s("a",{class:"header-anchor",href:"#_2-使用密码登陆","aria-label":'Permalink to "2.使用密码登陆"'},"​")],-1),s("p",null,"第一种：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@db01 ~]# redis-cli ")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> AUTH cookzhang")]),n(`
`),s("span",{class:"line"},[s("span",null,"OK")]),n(`
`),s("span",{class:"line"},[s("span",null,"127.0.0.1:6379> set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span",null,"OK")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"第二种：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -a cookz get k1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-为什么redis的密码认证这么简单",tabindex:"-1"},[n("3.为什么redis的密码认证这么简单？ "),s("a",{class:"header-anchor",href:"#_3-为什么redis的密码认证这么简单","aria-label":'Permalink to "3.为什么redis的密码认证这么简单？"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.redis一般都部署在内网环境，默认是比较安全的环境")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.有同学担心密码写在配置文件里，开发不允许登陆到Linux服务器上，但是可以连接到redis,设个密码安全些")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第13章-禁用或重命名危险命令",tabindex:"-1"},[n("第13章 禁用或重命名危险命令 "),s("a",{class:"header-anchor",href:"#第13章-禁用或重命名危险命令","aria-label":'Permalink to "第13章 禁用或重命名危险命令"'},"​")],-1),s("h2",{id:"_1-禁用危险命令",tabindex:"-1"},[n("1.禁用危险命令 "),s("a",{class:"header-anchor",href:"#_1-禁用危险命令","aria-label":'Permalink to "1.禁用危险命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command CONFIG ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command KEYS ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command SHUTDOWN ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command FLUSHALL ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command DEL ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command FLUSHDB ""')])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-来自json的灵魂拷问-shutdown禁用了-让后用kill",tabindex:"-1"},[n("2.来自json的灵魂拷问：shutdown禁用了 让后用kill? "),s("a",{class:"header-anchor",href:"#_2-来自json的灵魂拷问-shutdown禁用了-让后用kill","aria-label":'Permalink to "2.来自json的灵魂拷问：shutdown禁用了 让后用kill?"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command CONFIG ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command KEYS ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command SHUTDOWN "qq526195417"')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command FLUSHALL ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command DEL "byebye"')]),n(`
`),s("span",{class:"line"},[s("span",null,'rename-command FLUSHDB ""')])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第14章-redis主从复制",tabindex:"-1"},[n("第14章 Redis主从复制 "),s("a",{class:"header-anchor",href:"#第14章-redis主从复制","aria-label":'Permalink to "第14章 Redis主从复制"'},"​")],-1),s("h2",{id:"_1-快速部署第二台服务器",tabindex:"-1"},[n("1.快速部署第二台服务器 "),s("a",{class:"header-anchor",href:"#_1-快速部署第二台服务器","aria-label":'Permalink to "1.快速部署第二台服务器"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz 10.0.0.51:/opt/* /opt/*")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir /data/redis_6379/ -p")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /opt/redis ")]),n(`
`),s("span",{class:"line"},[s("span",null,"make install ")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#51#52#g' /opt/redis_6379/conf/redis_6379.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-server /opt/redis_6379/conf/redis_6379.conf")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-db01插入测试命令",tabindex:"-1"},[n("2.db01插入测试命令 "),s("a",{class:"header-anchor",href:"#_2-db01插入测试命令","aria-label":'Permalink to "2.db01插入测试命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"for i in {1..1000};do redis-cli -h 10.0.0.51 set ${i} ${i};done")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-配置主从复制",tabindex:"-1"},[n("3.配置主从复制 "),s("a",{class:"header-anchor",href:"#_3-配置主从复制","aria-label":'Permalink to "3.配置主从复制"'},"​")],-1),s("p",null,"方法1:临时生效",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.52 slaveof 10.0.0.51 6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"方法2:写进配置文件",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"slaveof 10.0.0.51 6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-主从复制的流程",tabindex:"-1"},[n("4.主从复制的流程 "),s("a",{class:"header-anchor",href:"#_4-主从复制的流程","aria-label":'Permalink to "4.主从复制的流程"'},"​")],-1),s("p",null,"1.简单流程：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.从节点发送同步请求到主节点")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.主节点接收到从节点的请求之后,做了如下操作")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - 立即执行bgsave将当前内存里的数据持久化到磁盘上")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - 持久化完成之后,将rdb文件发送给从节点")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.从节点从主节点接收到rdb文件之后,做了如下操作")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - 清空自己的数据")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - 载入从主节点接收的rdb文件到自己的内存里")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.后面的操作就是和主节点实时的了")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-取消复制",tabindex:"-1"},[n("5.取消复制 "),s("a",{class:"header-anchor",href:"#_5-取消复制","aria-label":'Permalink to "5.取消复制"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"SLAVEOF no one")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-主从复制注意",tabindex:"-1"},[n("6.主从复制注意 "),s("a",{class:"header-anchor",href:"#_6-主从复制注意","aria-label":'Permalink to "6.主从复制注意"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.从节点只读不可写")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.从节点不会自动故障转移,它会一直同步主节点")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.52:6379> set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span",null,"(error) READONLY You can't write against a read only slave.")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.主从复制故障转移需要人工介入")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - 修改代码指向REDIS的IP地址")]),n(`
`),s("span",{class:"line"},[s("span",null,"  - 从节点需要执行SLAVEOF no one")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.从节点会清空自己原有的数据,如果同步的对象写错了,就会导致数据丢失")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.从库和主库后续的同步依靠的是redis的SYNC协议，而不是RDB文件，RDB文件只是第一次建立同步时使用。")]),n(`
`),s("span",{class:"line"},[s("span",null,"6.从库也可以正常的持久化文件")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_7-安全的操作",tabindex:"-1"},[n("7.安全的操作 "),s("a",{class:"header-anchor",href:"#_7-安全的操作","aria-label":'Permalink to "7.安全的操作"'},"​")],-1),s("p",null,"无论是同步,无论是主节点还是从节点,请先备份一下数据",-1),s("h1",{id:"第15章-redis哨兵",tabindex:"-1"},[n("第15章 Redis哨兵 "),s("a",{class:"header-anchor",href:"#第15章-redis哨兵","aria-label":'Permalink to "第15章 Redis哨兵"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-c5cf045607671b40.png#mirages-width=1200&mirages-height=605&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("h2",{id:"_1-哨兵的作用",tabindex:"-1"},[n("1.哨兵的作用 "),s("a",{class:"header-anchor",href:"#_1-哨兵的作用","aria-label":'Permalink to "1.哨兵的作用"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.解决了主从复制故障需要人为干预的问题")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.提供了自动的高可用解决方案")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-目录和端口规划",tabindex:"-1"},[n("2.目录和端口规划 "),s("a",{class:"header-anchor",href:"#_2-目录和端口规划","aria-label":'Permalink to "2.目录和端口规划"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis节点： 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,"哨兵节点：    26379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-部署3台redis单节点",tabindex:"-1"},[n("3.部署3台redis单节点 "),s("a",{class:"header-anchor",href:"#_3-部署3台redis单节点","aria-label":'Permalink to "3.部署3台redis单节点"'},"​")],-1),s("h3",{id:"db01操作",tabindex:"-1"},[n("db01操作： "),s("a",{class:"header-anchor",href:"#db01操作","aria-label":'Permalink to "db01操作："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/opt/redis_6379/conf/redis_6379.conf <<EOF   ")]),n(`
`),s("span",{class:"line"},[s("span",null,"daemonize yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind 127.0.0.1 10.0.0.51")]),n(`
`),s("span",{class:"line"},[s("span",null,"port 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,'pidfile "/opt/redis_6379/pid/redis_6379.pid"')]),n(`
`),s("span",{class:"line"},[s("span",null,'logfile "/opt/redis_6379/logs/redis_6379.log"')]),n(`
`),s("span",{class:"line"},[s("span",null,'dbfilename "redis.rdb"')]),n(`
`),s("span",{class:"line"},[s("span",null,'dir "/data/redis_6379"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendonly yes")]),n(`
`),s("span",{class:"line"},[s("span",null,'appendfilename "redis.aof"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendfsync everysec")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"db02和db03的操作",tabindex:"-1"},[n("db02和db03的操作： "),s("a",{class:"header-anchor",href:"#db02和db03的操作","aria-label":'Permalink to "db02和db03的操作："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill redis ")]),n(`
`),s("span",{class:"line"},[s("span",null,"rm -rf /opt/redis*")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz 10.0.0.51:/usr/local/bin/redis-*  /usr/local/bin")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz 10.0.0.51:/usr/lib/systemd/system/redis.service /usr/lib/systemd/system/")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir /opt/redis_6379/{conf,logs,pid} -p")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir /data/redis_6379 -p")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/opt/redis_6379/conf/redis_6379.conf <<EOF   ")]),n(`
`),s("span",{class:"line"},[s("span",null,"daemonize yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind 127.0.0.1 $(ifconfig eth0|awk 'NR==2{print $2}')")]),n(`
`),s("span",{class:"line"},[s("span",null,"port 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,'pidfile "/opt/redis_6379/pid/redis_6379.pid"')]),n(`
`),s("span",{class:"line"},[s("span",null,'logfile "/opt/redis_6379/logs/redis_6379.log"')]),n(`
`),s("span",{class:"line"},[s("span",null,'dbfilename "redis.rdb"')]),n(`
`),s("span",{class:"line"},[s("span",null,'dir "/data/redis_6379"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendonly yes")]),n(`
`),s("span",{class:"line"},[s("span",null,'appendfilename "redis.aof"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendfsync everysec")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"useradd redis -M -s /sbin/nologin")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /opt/redis*")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /data/redis*")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl daemon-reload ")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis ")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-配置主从复制",tabindex:"-1"},[n("4.配置主从复制 "),s("a",{class:"header-anchor",href:"#_4-配置主从复制","aria-label":'Permalink to "4.配置主从复制"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.52 slaveof 10.0.0.51 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.53 slaveof 10.0.0.51 6379")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.51 info Replication")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-部署哨兵节点-3台机器都操作",tabindex:"-1"},[n("5.部署哨兵节点-3台机器都操作 "),s("a",{class:"header-anchor",href:"#_5-部署哨兵节点-3台机器都操作","aria-label":'Permalink to "5.部署哨兵节点-3台机器都操作"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"KOTLIN")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /data/redis_26379")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /opt/redis_26379/{conf,pid,logs}")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/opt/redis_26379/conf/redis_26379.conf << EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind $(ifconfig eth0|awk 'NR==2{print $2}')")]),n(`
`),s("span",{class:"line"},[s("span",null,"port 26379")]),n(`
`),s("span",{class:"line"},[s("span",null,"daemonize yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"logfile /opt/redis_26379/logs/redis_26379.log")]),n(`
`),s("span",{class:"line"},[s("span",null,"dir /data/redis_26379")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel monitor myredis 10.0.0.51 6379 2")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel down-after-milliseconds myredis 3000")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel parallel-syncs myredis 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel failover-timeout myredis 18000")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis  /data/redis*")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis  /opt/redis*")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"参数解释：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel monitor mymaster 10.0.0.51 6379 2")]),n(`
`),s("span",{class:"line"},[s("span",null,"#mymaster 主节点别名 主节点 ip 和端口， 判断主节点失败， 两个 sentinel 节点同意")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel down-after-milliseconds mymaster 3000")]),n(`
`),s("span",{class:"line"},[s("span",null,"#选项指定了 Sentinel 认为服务器已经断线所需的毫秒数。")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel parallel-syncs mymaster 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"#向新的主节点发起复制操作的从节点个数， 1 轮询发起复制")]),n(`
`),s("span",{class:"line"},[s("span",null,"sentinel failover-timeout mymaster 180000")]),n(`
`),s("span",{class:"line"},[s("span",null,"#故障转移超时时间")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-编写哨兵system配置文件-3台机器都操作",tabindex:"-1"},[n("6.编写哨兵system配置文件-3台机器都操作 "),s("a",{class:"header-anchor",href:"#_6-编写哨兵system配置文件-3台机器都操作","aria-label":'Permalink to "6.编写哨兵system配置文件-3台机器都操作"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/usr/lib/systemd/system/redis-sentinel.service<<EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Unit]")]),n(`
`),s("span",{class:"line"},[s("span",null,"Description=Redis persistent key-value database")]),n(`
`),s("span",{class:"line"},[s("span",null,"After=network.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"After=network-online.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"Wants=network-online.target")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Service]")]),n(`
`),s("span",{class:"line"},[s("span",null,"ExecStart=/usr/local/bin/redis-sentinel /opt/redis_26379/conf/redis_26379.conf --supervised systemd")]),n(`
`),s("span",{class:"line"},[s("span",null,"ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 26379 shutdown")]),n(`
`),s("span",{class:"line"},[s("span",null,"Type=notify")]),n(`
`),s("span",{class:"line"},[s("span",null,"User=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"Group=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"RuntimeDirectory=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"RuntimeDirectoryMode=0755")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Install]")]),n(`
`),s("span",{class:"line"},[s("span",null,"WantedBy=multi-user.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl daemon-reload")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_7-启动哨兵并检查",tabindex:"-1"},[n("7.启动哨兵并检查 "),s("a",{class:"header-anchor",href:"#_7-启动哨兵并检查","aria-label":'Permalink to "7.启动哨兵并检查"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-sentinel")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_8-验证主节点",tabindex:"-1"},[n("8.验证主节点 "),s("a",{class:"header-anchor",href:"#_8-验证主节点","aria-label":'Permalink to "8.验证主节点"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.51 -p 26379 Sentinel get-master-addr-by-name myredis")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.52 -p 26379 Sentinel get-master-addr-by-name myredis")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.53 -p 26379 Sentinel get-master-addr-by-name myredis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_9-模拟故障转移",tabindex:"-1"},[n("9.模拟故障转移 "),s("a",{class:"header-anchor",href:"#_9-模拟故障转移","aria-label":'Permalink to "9.模拟故障转移"'},"​")],-1),s("p",null,"关闭主节点服务上的所有redis进程 观察其他2个节点会不会发生选举 查看配置文件里会不会自动更新 查看新的主节点能不能写入 查看从节点能否正常同步",-1),s("h2",{id:"_10-模拟故障修复上线",tabindex:"-1"},[n("10.模拟故障修复上线 "),s("a",{class:"header-anchor",href:"#_10-模拟故障修复上线","aria-label":'Permalink to "10.模拟故障修复上线"'},"​")],-1),s("p",null,"启动单节点 启动哨兵",-1),s("h2",{id:"_11-来自json的灵魂发问-能够给redis-节点加权-来确定优先备选主节点嘛",tabindex:"-1"},[n("11.来自json的灵魂发问：能够给redis 节点加权 来确定优先备选主节点嘛? "),s("a",{class:"header-anchor",href:"#_11-来自json的灵魂发问-能够给redis-节点加权-来确定优先备选主节点嘛","aria-label":'Permalink to "11.来自json的灵魂发问：能够给redis 节点加权 来确定优先备选主节点嘛?"'},"​")],-1),s("p",null,"流程说明： 设置其他节点的权重为0 手动发起重新选举 观察所有节点消息是否同步 观察切换结果是否符合预期",-1),s("p",null,"命令解释：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"查询命令:CONFIG GET slave-priority")]),n(`
`),s("span",{class:"line"},[s("span",null,"设置命令:CONFIG SET slave-priority 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"主动切换:sentinel failover myredis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"操作命令：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.52 -p 6379 CONFIG SET slave-priority 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.53 -p 6379 CONFIG SET slave-priority 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.51 -p 26379 sentinel failover myredis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"验证选举结果：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h 10.0.0.51 -p 26379 Sentinel get-master-addr-by-name myredis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第16章-手动部署redis集群",tabindex:"-1"},[n("第16章 手动部署Redis集群 "),s("a",{class:"header-anchor",href:"#第16章-手动部署redis集群","aria-label":'Permalink to "第16章 手动部署Redis集群"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-f6153b9ec44340b7.png#mirages-width=1200&mirages-height=668&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("p",null,"集群架构图1",-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-4c60e0aa042e4599.png#mirages-width=1200&mirages-height=749&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("p",null,"集群架构图2",-1),s("h2",{id:"_1-烧饼的不足",tabindex:"-1"},[n("1.烧饼的不足 "),s("a",{class:"header-anchor",href:"#_1-烧饼的不足","aria-label":'Permalink to "1.烧饼的不足"'},"​")],-1),s("p",null,"资源利用率不高 主库压力大 连接过程繁琐",-1),s("h2",{id:"_2-集群重要概念",tabindex:"-1"},[n("2.集群重要概念 "),s("a",{class:"header-anchor",href:"#_2-集群重要概念","aria-label":'Permalink to "2.集群重要概念"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis集群，无论有几个节点，一共只有16384个槽")]),n(`
`),s("span",{class:"line"},[s("span",null,"所有的槽位都必须分配，哪怕有1个槽位不正常，整个集群都不能用")]),n(`
`),s("span",{class:"line"},[s("span",null,"每个节点的槽的顺序不重要，重点是数量")]),n(`
`),s("span",{class:"line"},[s("span",null,"hash算法足够随机，足够平均")]),n(`
`),s("span",{class:"line"},[s("span",null,"每个槽被分配到数据的概率是相当的")]),n(`
`),s("span",{class:"line"},[s("span",null,"集群的高可用依赖于主从复制")]),n(`
`),s("span",{class:"line"},[s("span",null,"集群拥有自己的配置文件，动态更新，不要手欠修改")]),n(`
`),s("span",{class:"line"},[s("span",null,"集群通讯会使用基础端口号+10000的端口，这个是自动创建的，不是配置文件配置的")]),n(`
`),s("span",{class:"line"},[s("span",null,"集群槽位分配比例允许误差在%2之间")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-目录规划",tabindex:"-1"},[n("3.目录规划 "),s("a",{class:"header-anchor",href:"#_3-目录规划","aria-label":'Permalink to "3.目录规划"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"主节点  6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"从节点  6381")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-db01的操作",tabindex:"-1"},[n("4.db01的操作 "),s("a",{class:"header-anchor",href:"#_4-db01的操作","aria-label":'Permalink to "4.db01的操作"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"JSX")]),n(`
`),s("span",{class:"line"},[s("span",null,"ssh-keygen")]),n(`
`),s("span",{class:"line"},[s("span",null,"ssh-copy-id 10.0.0.52")]),n(`
`),s("span",{class:"line"},[s("span",null,"ssh-copy-id 10.0.0.53")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /opt/redis_{6380,6381}/{conf,logs,pid}")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /data/redis_{6380,6381}")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/opt/redis_6380/conf/redis_6380.conf<<EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"bind 10.0.0.51")]),n(`
`),s("span",{class:"line"},[s("span",null,"port 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"daemonize yes")]),n(`
`),s("span",{class:"line"},[s("span",null,'pidfile "/opt/redis_6380/pid/redis_6380.pid"')]),n(`
`),s("span",{class:"line"},[s("span",null,'logfile "/opt/redis_6380/logs/redis_6380.log"')]),n(`
`),s("span",{class:"line"},[s("span",null,'dbfilename "redis_6380.rdb"')]),n(`
`),s("span",{class:"line"},[s("span",null,'dir "/data/redis_6380/"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendonly yes")]),n(`
`),s("span",{class:"line"},[s("span",null,'appendfilename "redis.aof"')]),n(`
`),s("span",{class:"line"},[s("span",null,"appendfsync everysec")]),n(`
`),s("span",{class:"line"},[s("span",null,"cluster-enabled yes")]),n(`
`),s("span",{class:"line"},[s("span",null,"cluster-config-file nodes_6380.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"cluster-node-timeout 15000")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"cp redis_6380/conf/redis_6380.conf redis_6381/conf/redis_6381.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#6380#6381#g' redis_6381/conf/redis_6381.conf ")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /opt/redis_*")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /data/redis_*")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >/usr/lib/systemd/system/redis-master.service<<EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Unit]")]),n(`
`),s("span",{class:"line"},[s("span",null,"Description=Redis persistent key-value database")]),n(`
`),s("span",{class:"line"},[s("span",null,"After=network.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"After=network-online.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"Wants=network-online.target")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Service]")]),n(`
`),s("span",{class:"line"},[s("span",null,"ExecStart=/usr/local/bin/redis-server /opt/redis_6380/conf/redis_6380.conf --supervised systemd")]),n(`
`),s("span",{class:"line"},[s("span",null,"ExecStop=/usr/local/bin/redis-cli -h $(ifconfig eth0|awk 'NR==2{print $2}') -p 6380 shutdown")]),n(`
`),s("span",{class:"line"},[s("span",null,"Type=notify")]),n(`
`),s("span",{class:"line"},[s("span",null,"User=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"Group=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"RuntimeDirectory=redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"RuntimeDirectoryMode=0755")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"[Install]")]),n(`
`),s("span",{class:"line"},[s("span",null,"WantedBy=multi-user.target")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /usr/lib/systemd/system/")]),n(`
`),s("span",{class:"line"},[s("span",null,"cp redis-master.service redis-slave.service")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#6380#6381#g' redis-slave.service")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl daemon-reload ")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-master")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-slave")]),n(`
`),s("span",{class:"line"},[s("span",null,"ps -ef|grep redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz /opt/redis_638* 10.0.0.52:/opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz /opt/redis_638* 10.0.0.53:/opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz /usr/lib/systemd/system/redis-*.service 10.0.0.52:/usr/lib/systemd/system/redis-master.service")]),n(`
`),s("span",{class:"line"},[s("span",null,"rsync -avz /usr/lib/systemd/system/redis-*.service 10.0.0.53:/usr/lib/systemd/system/redis-master.service")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_5-db02的操作",tabindex:"-1"},[n("5.db02的操作 "),s("a",{class:"header-anchor",href:"#_5-db02的操作","aria-label":'Permalink to "5.db02的操作"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill redis")]),n(`
`),s("span",{class:"line"},[s("span",null,'find /opt/redis_638* -type f -name "*.conf"|xargs sed -i "/bind/s#51#52#g"')]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /usr/lib/systemd/system/")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#51#52#g' redis-*.service ")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir –p /data/redis_{6380,6381}")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /opt/redis_*")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /data/redis_*")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl daemon-reload ")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-master")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-slave")]),n(`
`),s("span",{class:"line"},[s("span",null,"ps -ef|grep redis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_6-db03的操作",tabindex:"-1"},[n("6.db03的操作 "),s("a",{class:"header-anchor",href:"#_6-db03的操作","aria-label":'Permalink to "6.db03的操作"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"pkill redis")]),n(`
`),s("span",{class:"line"},[s("span",null,'find /opt/redis_638* -type f -name "*.conf"|xargs sed -i "/bind/s#51#53#g"')]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /usr/lib/systemd/system/")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#51#53#g' redis-*.service ")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir –p /data/redis_{6380,6381}")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /opt/redis_*")]),n(`
`),s("span",{class:"line"},[s("span",null,"chown -R redis:redis /data/redis_*")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl daemon-reload ")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-master")]),n(`
`),s("span",{class:"line"},[s("span",null,"systemctl start redis-slave")]),n(`
`),s("span",{class:"line"},[s("span",null,"ps -ef|grep redis")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_7-集群手动发现节点",tabindex:"-1"},[n("7.集群手动发现节点 "),s("a",{class:"header-anchor",href:"#_7-集群手动发现节点","aria-label":'Permalink to "7.集群手动发现节点"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.51 6381")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6381")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6381")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_8-集群手动分配槽位",tabindex:"-1"},[n("8.集群手动分配槽位 "),s("a",{class:"header-anchor",href:"#_8-集群手动分配槽位","aria-label":'Permalink to "8.集群手动分配槽位"'},"​")],-1),s("h3",{id:"_1-槽位规划",tabindex:"-1"},[n("1.槽位规划 "),s("a",{class:"header-anchor",href:"#_1-槽位规划","aria-label":'Permalink to "1.槽位规划"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"db01:6380 5461  0-5460")]),n(`
`),s("span",{class:"line"},[s("span",null,"db02:6380 5461  5461-10921")]),n(`
`),s("span",{class:"line"},[s("span",null,"db03:6380 5462  10922-16383")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_2-分配槽位",tabindex:"-1"},[n("2.分配槽位 "),s("a",{class:"header-anchor",href:"#_2-分配槽位","aria-label":'Permalink to "2.分配槽位"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_3-查看集群状态",tabindex:"-1"},[n("3.查看集群状态 "),s("a",{class:"header-anchor",href:"#_3-查看集群状态","aria-label":'Permalink to "3.查看集群状态"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER INFO")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_9-手动部署复制关系",tabindex:"-1"},[n("9.手动部署复制关系 "),s("a",{class:"header-anchor",href:"#_9-手动部署复制关系","aria-label":'Permalink to "9.手动部署复制关系"'},"​")],-1),s("h3",{id:"_0-先获取集群节点信息",tabindex:"-1"},[n("0.先获取集群节点信息 "),s("a",{class:"header-anchor",href:"#_0-先获取集群节点信息","aria-label":'Permalink to "0.先获取集群节点信息"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_1-先删除所有6381的内容和不需要内容",tabindex:"-1"},[n("1.先删除所有6381的内容和不需要内容 "),s("a",{class:"header-anchor",href:"#_1-先删除所有6381的内容和不需要内容","aria-label":'Permalink to "1.先删除所有6381的内容和不需要内容"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"6380的ID 10.0.0.51")]),n(`
`),s("span",{class:"line"},[s("span",null,"6380的ID 10.0.0.53")]),n(`
`),s("span",{class:"line"},[s("span",null,"6380的ID 10.0.0.52")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_2-画图",tabindex:"-1"},[n("2.画图 "),s("a",{class:"header-anchor",href:"#_2-画图","aria-label":'Permalink to "2.画图"'},"​")],-1),s("h3",{id:"_3-确定复制关系",tabindex:"-1"},[n("3.确定复制关系 "),s("a",{class:"header-anchor",href:"#_3-确定复制关系","aria-label":'Permalink to "3.确定复制关系"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6381 CLUSTER REPLICATE 52的6380的ID")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6381 CLUSTER REPLICATE 53的6380的ID")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6381 CLUSTER REPLICATE 51的6380的ID")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_4-检查复制关系",tabindex:"-1"},[n("4.检查复制关系 "),s("a",{class:"header-anchor",href:"#_4-检查复制关系","aria-label":'Permalink to "4.检查复制关系"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_10-集群插入数据",tabindex:"-1"},[n("10.集群插入数据 "),s("a",{class:"header-anchor",href:"#_10-集群插入数据","aria-label":'Permalink to "10.集群插入数据"'},"​")],-1),s("h3",{id:"_1-尝试插入一条数据发现报错",tabindex:"-1"},[n("1.尝试插入一条数据发现报错 "),s("a",{class:"header-anchor",href:"#_1-尝试插入一条数据发现报错","aria-label":'Permalink to "1.尝试插入一条数据发现报错"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.51:6380> set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span",null,"(error) MOVED 12706 10.0.0.53:6380")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_2-目前的现象",tabindex:"-1"},[n("2.目前的现象 "),s("a",{class:"header-anchor",href:"#_2-目前的现象","aria-label":'Permalink to "2.目前的现象"'},"​")],-1),s("p",null,"在db01的6380节点插入数据提示报错 报错内容提示应该移动到db03的6380上 在db03的6380上执行相同的插入命令可以插入成功 在db01的6380节点插入数据有时候可以,有时候不行 使用-c参数后,可以正常插入命令,并且节点切换到了提示的对应节点上",-1),s("h3",{id:"_3-问题原因",tabindex:"-1"},[n("3.问题原因 "),s("a",{class:"header-anchor",href:"#_3-问题原因","aria-label":'Permalink to "3.问题原因"'},"​")],-1),s("p",null,"因为集群模式有ASK路由规则,加入-c参数后,会自动跳转到目标节点处理 并且最后由目标节点返回信息",-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-328242f763d20b0b.png#mirages-width=1886&mirages-height=952&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("h2",{id:"_11-验证集群是否足够足迹足够平均",tabindex:"-1"},[n("11.验证集群是否足够足迹足够平均 "),s("a",{class:"header-anchor",href:"#_11-验证集群是否足够足迹足够平均","aria-label":'Permalink to "11.验证集群是否足够足迹足够平均"'},"​")],-1),s("h3",{id:"_0-写入测试数据",tabindex:"-1"},[n("0.写入测试数据 "),s("a",{class:"header-anchor",href:"#_0-写入测试数据","aria-label":'Permalink to "0.写入测试数据"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"for i in {1..10000};do redis-cli -c -h db01 -p 6380 set k_${i} v_${i};echo ${i};done")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_1-验证足够平均",tabindex:"-1"},[n("1.验证足够平均: "),s("a",{class:"header-anchor",href:"#_1-验证足够平均","aria-label":'Permalink to "1.验证足够平均:"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"DBSIZE")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_2-验证足够随机",tabindex:"-1"},[n("2.验证足够随机： "),s("a",{class:"header-anchor",href:"#_2-验证足够随机","aria-label":'Permalink to "2.验证足够随机："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"SWIFT")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h db03 -p 6380 keys \\* > keys_all.txt")]),n(`
`),s("span",{class:"line"},[s("span",null,`cat keys_all.txt |awk -F "_" '{print $2}'|sort -rn`)])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_3-允许节点的key在2-误差的依据来源",tabindex:"-1"},[n("3.允许节点的key在2%误差的依据来源： "),s("a",{class:"header-anchor",href:"#_3-允许节点的key在2-误差的依据来源","aria-label":'Permalink to "3.允许节点的key在2%误差的依据来源："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@db01 /opt/redis/src]# redis-cli --cluster rebalance 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,">>> Performing Cluster Check (using node 10.0.0.51:6380)")]),n(`
`),s("span",{class:"line"},[s("span",null,"[OK] All nodes agree about slots configuration.")]),n(`
`),s("span",{class:"line"},[s("span",null,">>> Check for open slots...")]),n(`
`),s("span",{class:"line"},[s("span",null,">>> Check slots coverage...")]),n(`
`),s("span",{class:"line"},[s("span",null,"[OK] All 16384 slots covered.")]),n(`
`),s("span",{class:"line"},[s("span",null,"*** No rebalancing needed! All nodes are within the 2.00% threshold.")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_4-检查集群健康状态",tabindex:"-1"},[n("4.检查集群健康状态： "),s("a",{class:"header-anchor",href:"#_4-检查集群健康状态","aria-label":'Permalink to "4.检查集群健康状态："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@db01 /opt/redis/src]# redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.51:6380 (ccaa5dcb...) -> 3343 keys | 5461 slots | 1 slaves.")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.53:6380 (a69e46ea...) -> 3343 keys | 5462 slots | 1 slaves.")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.52:6380 (b2719c41...) -> 3314 keys | 5461 slots | 1 slaves.")]),n(`
`),s("span",{class:"line"},[s("span",null,"[OK] 10000 keys in 3 masters.")]),n(`
`),s("span",{class:"line"},[s("span",null,"0.61 keys per slot on average.")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第17章-实战-槽位分配错误如何调整",tabindex:"-1"},[n("第17章 实战-槽位分配错误如何调整 "),s("a",{class:"header-anchor",href:"#第17章-实战-槽位分配错误如何调整","aria-label":'Permalink to "第17章 实战-槽位分配错误如何调整"'},"​")],-1),s("h2",{id:"_1-故障背景",tabindex:"-1"},[n("1.故障背景 "),s("a",{class:"header-anchor",href:"#_1-故障背景","aria-label":'Permalink to "1.故障背景"'},"​")],-1),s("p",null,"某日某豪接到任务，需要部署redis集群结果不小心无脑复制粘贴，把所有的槽都分配给了1个节点，还没发现，然后就交付使用了，过了1天才发现问题。",-1),s("p",null,"而此时，已经有不少数据写入了，如何在不丢失数据的情况下解决这个问题？",-1),s("h2",{id:"_2-前提",tabindex:"-1"},[n("2.前提 "),s("a",{class:"header-anchor",href:"#_2-前提","aria-label":'Permalink to "2.前提"'},"​")],-1),s("p",null,"数据不能丢，最好不中断业务",-1),s("h2",{id:"_3-实验现象",tabindex:"-1"},[n("3.实验现象 "),s("a",{class:"header-anchor",href:"#_3-实验现象","aria-label":'Permalink to "3.实验现象"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"RUBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"[root@db01 ~]# redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.51:6380 (ccaa5dcb...) -> 1000 keys | 16384 slots | 3 slaves.")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.53:6380 (a69e46ea...) -> 0 keys | 0 slots | 0 slaves.")]),n(`
`),s("span",{class:"line"},[s("span",null,"10.0.0.52:6380 (b2719c41...) -> 0 keys | 0 slots | 0 slaves.")]),n(`
`),s("span",{class:"line"},[s("span",null,"[OK] 1000 keys in 3 masters.")]),n(`
`),s("span",{class:"line"},[s("span",null,"0.06 keys per slot on average.")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"解决思路1-备份数据-重做集群-导入数据",tabindex:"-1"},[n("解决思路1：备份数据，重做集群，导入数据 "),s("a",{class:"header-anchor",href:"#解决思路1-备份数据-重做集群-导入数据","aria-label":'Permalink to "解决思路1：备份数据，重做集群，导入数据"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"来自json的灵魂发问：")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis.cof的数据  集群重做后 aof文件里面的数据能被hash嘛?")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"备份数据：")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h db01 -p 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"db01:6380> BGREWRITEAOF")]),n(`
`),s("span",{class:"line"},[s("span",null,"cp redis.aof redis.aof-1000.bak")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"重做集群：")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES  ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"实验结论：")]),n(`
`),s("span",{class:"line"},[s("span",null,"重启后所有的数据还是在db01上。")]),n(`
`),s("span",{class:"line"},[s("span",null,"db01重启后数据虽然可以写入，但是访问的时候还是按照正常的hash规则去分配的，所以db01的数据实际上是没用的。")]),n(`
`),s("span",{class:"line"},[s("span",null,"所以这样的方法是不可行的。")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"相关日志：")]),n(`
`),s("span",{class:"line"},[s("span",null,"16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5812, but the slot is assigned to another node. Setting it to importing state.")]),n(`
`),s("span",{class:"line"},[s("span",null,"16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5821, but the slot is assigned to another node. Setting it to importing state.")]),n(`
`),s("span",{class:"line"},[s("span",null,"16790:M 12 Mar 2020 10:08:08.875 # I have keys for slot 5842, but the slot is assigned to another node. Setting it to importing state.")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"解决思路2-获得所有key的名称-导出再导入",tabindex:"-1"},[n("解决思路2:获得所有key的名称，导出再导入 "),s("a",{class:"header-anchor",href:"#解决思路2-获得所有key的名称-导出再导入","aria-label":'Permalink to "解决思路2:获得所有key的名称，导出再导入"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"0.重新制作一个测试集群，槽位分布和线上出错的一样")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.将线上环境里的aof导出来")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.恢复到测试的集群里")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.收集所有的key")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h db01 -p 6380 keys \\* > keys_all.txt")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.编写脚本遍历所有的key获取值")]),n(`
`),s("span",{class:"line"},[s("span",null,"cat >get_key.sh<<EOF ")]),n(`
`),s("span",{class:"line"},[s("span",null,"#!/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",null,"for key in $(cat keys_all.txt)")]),n(`
`),s("span",{class:"line"},[s("span",null,"do")]),n(`
`),s("span",{class:"line"},[s("span",null,"  value=$(redis-cli -c -h 10.0.0.51 -p 6380 get ${key})")]),n(`
`),s("span",{class:"line"},[s("span",null,"  echo redis-cli -c -h 10.0.0.51 -p 6380 set ${key} ${value} >> backup_all_key.txt")]),n(`
`),s("span",{class:"line"},[s("span",null,"done")]),n(`
`),s("span",{class:"line"},[s("span",null,"EOF")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.按照正常槽位分配去重新初始化集群")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.52 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER MEET 10.0.0.53 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER ADDSLOTS {0..5460}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 CLUSTER ADDSLOTS {5461..10921}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 CLUSTER ADDSLOTS {10922..16383}")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"6.执行导入脚本")]),n(`
`),s("span",{class:"line"},[s("span",null,"bash backup_all_key.txt")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"7.检查是否导入成功")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"8.测试环境没问题之后再去生产环境操作")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"解决思路3-流水线-pipline",tabindex:"-1"},[n("解决思路3: 流水线 pipline "),s("a",{class:"header-anchor",href:"#解决思路3-流水线-pipline","aria-label":'Permalink to "解决思路3: 流水线 pipline"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"前提条件：")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.了解aof格式")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.了解新版本redis默认是开启混合模式的")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.需要修改为普通的aof格式并重启")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.恢复时使用-c参数无效，需要在每一个节点都执行")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"命令：")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h 10.0.0.51 -p 6380 --pipe < redis.aof")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h 10.0.0.52 -p 6380 --pipe < redis.aof")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h 10.0.0.53 -p 6380 --pipe < redis.aof")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"解决思路4-使用redis-cli工具重新分配槽位",tabindex:"-1"},[n("解决思路4: 使用redis-cli工具重新分配槽位 "),s("a",{class:"header-anchor",href:"#解决思路4-使用redis-cli工具重新分配槽位","aria-label":'Permalink to "解决思路4: 使用redis-cli工具重新分配槽位"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"重新分配槽位")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster reshard 10.0.0.51:6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第一次交互：输入迁出的槽的数量")]),n(`
`),s("span",{class:"line"},[s("span",null,"How many slots do you want to move (from 1 to 16384)? 5461")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第二次交互：输入接受的ID")]),n(`
`),s("span",{class:"line"},[s("span",null,"What is the receiving node ID? db02的6380的ID")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第三次交互：输入发送者的ID")]),n(`
`),s("span",{class:"line"},[s("span",null,"Please enter all the source node IDs.")]),n(`
`),s("span",{class:"line"},[s("span",null,"  Type 'all' to use all the nodes as source nodes for the hash slots.")]),n(`
`),s("span",{class:"line"},[s("span",null,"  Type 'done' once you entered all the source nodes IDs.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Source node #1: db01的6390的ID")]),n(`
`),s("span",{class:"line"},[s("span",null,"Source node #2: done")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第四次交互：YES!")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"重复上面的操作，知道所有的节点槽位都分配正确")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"解决思路5-直接使用工具在线导入",tabindex:"-1"},[n("解决思路5:直接使用工具在线导入 "),s("a",{class:"header-anchor",href:"#解决思路5-直接使用工具在线导入","aria-label":'Permalink to "解决思路5:直接使用工具在线导入"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第18章-使用工具自动部署redis集群",tabindex:"-1"},[n("第18章 使用工具自动部署redis集群 "),s("a",{class:"header-anchor",href:"#第18章-使用工具自动部署redis集群","aria-label":'Permalink to "第18章 使用工具自动部署redis集群"'},"​")],-1),s("h2",{id:"_1-恢复集群初始化",tabindex:"-1"},[n("1.恢复集群初始化 "),s("a",{class:"header-anchor",href:"#_1-恢复集群初始化","aria-label":'Permalink to "1.恢复集群初始化"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6381 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6381 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6381 FLUSHALL")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6380 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6381 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db02 -p 6381 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db03 -p 6381 CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-使用工具初始化",tabindex:"-1"},[n("2.使用工具初始化 "),s("a",{class:"header-anchor",href:"#_2-使用工具初始化","aria-label":'Permalink to "2.使用工具初始化"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster create 10.0.0.51:6380 10.0.0.52:6380 10.0.0.53:6380 10.0.0.51:6381 10.0.0.52:6381 10.0.0.53:6381 --cluster-replicas 1")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-检查集群",tabindex:"-1"},[n("3.检查集群 "),s("a",{class:"header-anchor",href:"#_3-检查集群","aria-label":'Permalink to "3.检查集群"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380 CLUSTER NODES ")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster check 10.0.0.51 6380")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第19章-使用工具扩容",tabindex:"-1"},[n("第19章 使用工具扩容 "),s("a",{class:"header-anchor",href:"#第19章-使用工具扩容","aria-label":'Permalink to "第19章 使用工具扩容"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-e7e156608ed2c55c.png#mirages-width=1312&mirages-height=974&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("h2",{id:"_1-来自json的灵魂发问",tabindex:"-1"},[n("1.来自json的灵魂发问： "),s("a",{class:"header-anchor",href:"#_1-来自json的灵魂发问","aria-label":'Permalink to "1.来自json的灵魂发问："'},"​")],-1),s("p",null,"迁移时候槽的数据咋办？ 需要停库吗？ 访问受影响吗？ 从库呢？",-1),s("h2",{id:"_2-如何设计实验验证数据是否受影响",tabindex:"-1"},[n("2.如何设计实验验证数据是否受影响？ "),s("a",{class:"header-anchor",href:"#_2-如何设计实验验证数据是否受影响","aria-label":'Permalink to "2.如何设计实验验证数据是否受影响？"'},"​")],-1),s("p",null,"迁移的过程中 一个窗口不断的写数据 一个窗口不断的读数据 观察是否会中断",-1),s("h2",{id:"_3-创建新节点",tabindex:"-1"},[n("3.创建新节点 "),s("a",{class:"header-anchor",href:"#_3-创建新节点","aria-label":'Permalink to "3.创建新节点"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /opt/redis_{6390,6391}/{conf,logs,pid}")]),n(`
`),s("span",{class:"line"},[s("span",null,"mkdir -p /data/redis_{6390,6391}")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"cp redis_6380/conf/redis_6380.conf redis_6390/conf/redis_6390.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"cp redis_6380/conf/redis_6380.conf redis_6391/conf/redis_6391.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#6380#6390#g' redis_6390/conf/redis_6390.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"sed -i 's#6380#6391#g' redis_6391/conf/redis_6391.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-server /opt/redis_6390/conf/redis_6390.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-server /opt/redis_6391/conf/redis_6391.conf")]),n(`
`),s("span",{class:"line"},[s("span",null,"ps -ef|grep redis")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h db01 -p 6380 cluster meet 10.0.0.51 6390")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h db01 -p 6380 cluster meet 10.0.0.51 6391")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -c -h db01 -p 6380 cluster nodes")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_4-使用工具扩容步骤",tabindex:"-1"},[n("4.使用工具扩容步骤 "),s("a",{class:"header-anchor",href:"#_4-使用工具扩容步骤","aria-label":'Permalink to "4.使用工具扩容步骤"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"重新分配槽位")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster reshard 10.0.0.51:6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第一次交互：每个节点分配多少个槽位")]),n(`
`),s("span",{class:"line"},[s("span",null,"How many slots do you want to move (from 1 to 16384)? 4096")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第二次交互：接受节点的ID是什么")]),n(`
`),s("span",{class:"line"},[s("span",null,"What is the receiving node ID? 6390的ID")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第三次交互：哪些节点需要导出")]),n(`
`),s("span",{class:"line"},[s("span",null,"Source node #1: all")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第四次交互：确认是否执行")]),n(`
`),s("span",{class:"line"},[s("span",null,"Do you want to proceed with the proposed reshard plan (yes/no)? yes")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第20章-使用工具缩容",tabindex:"-1"},[n("第20章 使用工具缩容 "),s("a",{class:"header-anchor",href:"#第20章-使用工具缩容","aria-label":'Permalink to "第20章 使用工具缩容"'},"​")],-1),s("figure",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-eea042bfbf7c3d19.png#mirages-width=1674&mirages-height=958&mirages-cdn-type=5",alt:"img",loading:"lazy",decoding:"async"})],-1),s("h2",{id:"_1-操作命令",tabindex:"-1"},[n("1.操作命令 "),s("a",{class:"header-anchor",href:"#_1-操作命令","aria-label":'Permalink to "1.操作命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"PHP")]),n(`
`),s("span",{class:"line"},[s("span",null,"重新分配槽位")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster reshard 10.0.0.51:6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第一次交互：需要迁移多少个槽位")]),n(`
`),s("span",{class:"line"},[s("span",null,"How many slots do you want to move (from 1 to 16384)? 1365")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第二次交互：接受节点的ID是什么")]),n(`
`),s("span",{class:"line"},[s("span",null,"What is the receiving node ID? db01的6380的ID ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第三次交互：哪些节点需要导出")]),n(`
`),s("span",{class:"line"},[s("span",null,"Source node #1: db01的6390的ID ")]),n(`
`),s("span",{class:"line"},[s("span",null,"Source node #2: done")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"第四次交互：确认")]),n(`
`),s("span",{class:"line"},[s("span",null,"Do you want to proceed with the proposed reshard plan (yes/no)? yes")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"重复上面的操作，直到6390所有的槽位都被分配出去了")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"检查集群状态，确认6390没有槽位了")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster info 10.0.0.51:6380")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"使用工具删除节点了")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster del-node 10.0.0.51:6390 6390的ID")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster del-node 10.0.0.51:6391 6391的ID")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-提问-公司先用的是哨兵然后在改集群-如何迁移数据",tabindex:"-1"},[n("2.提问：公司先用的是哨兵然后在改集群 如何迁移数据 "),s("a",{class:"header-anchor",href:"#_2-提问-公司先用的是哨兵然后在改集群-如何迁移数据","aria-label":'Permalink to "2.提问：公司先用的是哨兵然后在改集群 如何迁移数据"'},"​")],-1),s("p",null,"用槽位分配解决方法：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.搭建好Redis集群并互相发现")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.把所有的key都分配到db01上")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.把哨兵里的数据AOF持久化")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.拷贝到db01上，启动集群节点")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.重新分配槽位迁移到其他2个节点")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第21章-验证集群高可用",tabindex:"-1"},[n("第21章 .验证集群高可用 "),s("a",{class:"header-anchor",href:"#第21章-验证集群高可用","aria-label":'Permalink to "第21章 .验证集群高可用"'},"​")],-1),s("h2",{id:"_1-提问-故障的主库修复后启动会变成备胎吗",tabindex:"-1"},[n("1.提问：故障的主库修复后启动会变成备胎吗？ "),s("a",{class:"header-anchor",href:"#_1-提问-故障的主库修复后启动会变成备胎吗","aria-label":'Permalink to "1.提问：故障的主库修复后启动会变成备胎吗？"'},"​")],-1),s("h2",{id:"_2-实验结论",tabindex:"-1"},[n("2.实验结论： "),s("a",{class:"header-anchor",href:"#_2-实验结论","aria-label":'Permalink to "2.实验结论："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.主库挂了，从库会自动接替主库的角色，集群恢复正常会受超时时间控制")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.老得主库修复上线后，会自动变成从库，同步新的主库")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-主动发起集群角色切换",tabindex:"-1"},[n("3.主动发起集群角色切换： "),s("a",{class:"header-anchor",href:"#_3-主动发起集群角色切换","aria-label":'Permalink to "3.主动发起集群角色切换："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER FAILOVER")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第22章-模拟分配时故障",tabindex:"-1"},[n("第22章 模拟分配时故障 "),s("a",{class:"header-anchor",href:"#第22章-模拟分配时故障","aria-label":'Permalink to "第22章 模拟分配时故障"'},"​")],-1),s("h2",{id:"_1-模拟场景-迁移数据时人为中断了-导致槽的状态不对",tabindex:"-1"},[n("1.模拟场景：迁移数据时人为中断了，导致槽的状态不对 "),s("a",{class:"header-anchor",href:"#_1-模拟场景-迁移数据时人为中断了-导致槽的状态不对","aria-label":'Permalink to "1.模拟场景：迁移数据时人为中断了，导致槽的状态不对"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"JSON")]),n(`
`),s("span",{class:"line"},[s("span",null,"[11213-<-a69e46ea7560684a7061ddb6dc3f854a1ef3dbd4] 51")]),n(`
`),s("span",{class:"line"},[s("span",null,"[11213->-ccaa5dcb0f0320332100594d629122b2702660d5] 53")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-使用工具修复",tabindex:"-1"},[n("2.使用工具修复： "),s("a",{class:"header-anchor",href:"#_2-使用工具修复","aria-label":'Permalink to "2.使用工具修复："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster fix 10.0.0.51:6380")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-手动修复",tabindex:"-1"},[n("3.手动修复： "),s("a",{class:"header-anchor",href:"#_3-手动修复","aria-label":'Permalink to "3.手动修复："'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"OBJECTIVEC")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER SETSLOT <slot> STABLE")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第23章-使用工具维护集群的好处",tabindex:"-1"},[n("第23章 使用工具维护集群的好处 "),s("a",{class:"header-anchor",href:"#第23章-使用工具维护集群的好处","aria-label":'Permalink to "第23章 使用工具维护集群的好处"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"工具有很多判断条件，更加严谨，健壮性更好")]),n(`
`),s("span",{class:"line"},[s("span",null,"删除槽，使用工具会判断，如果槽里有数据，就不执行")]),n(`
`),s("span",{class:"line"},[s("span",null,"添加节点使用工具会判断，如果新增加的节点本身不为空，不允许加入到集群里")]),n(`
`),s("span",{class:"line"},[s("span",null,"删除节点使用工具会判断，如果本删除节点本身还有槽，不允许删除")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第24章-数据迁移",tabindex:"-1"},[n("第24章 数据迁移 "),s("a",{class:"header-anchor",href:"#第24章-数据迁移","aria-label":'Permalink to "第24章 数据迁移"'},"​")],-1),s("h2",{id:"_1-新版本直接使用工具迁移",tabindex:"-1"},[n("1.新版本直接使用工具迁移 "),s("a",{class:"header-anchor",href:"#_1-新版本直接使用工具迁移","aria-label":'Permalink to "1.新版本直接使用工具迁移"'},"​")],-1),s("p",null,"不加copy参数相当于mv，老数据迁移成功就删掉了",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster import 10.0.0.51:6380 --cluster-from 10.0.0.51:6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"添加copy参数相当于cp,老数据迁移成功后会保留",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-from 10.0.0.51:6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"添加replace参数会覆盖掉同名的数据，对新集群新增加的数据不受影响",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"验证迁移期间边写边导会不会影响: 同时开2个终端，一个写入key，",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"for i in {1..1000};do redis-cli set k_${i} v_${i};sleep 0.2;echo ${i};done")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"一个执行导入命令",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster import 10.0.0.51:6380 --cluster-copy --cluster-replace --cluster-from  10.0.0.51:6379")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,"得出结论：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"只会导入当你执行导入命令那一刻时，当前被导入节点的所有数据，类似于快照，对于后面再写入的数据不会更新")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第25章-分析key的大小",tabindex:"-1"},[n("第25章 分析key的大小 "),s("a",{class:"header-anchor",href:"#第25章-分析key的大小","aria-label":'Permalink to "第25章 分析key的大小"'},"​")],-1),s("h2",{id:"_0-使用自带工具分析",tabindex:"-1"},[n("0.使用自带工具分析 "),s("a",{class:"header-anchor",href:"#_0-使用自带工具分析","aria-label":'Permalink to "0.使用自带工具分析"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --bigkeys")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_1-使用第三方工具分析",tabindex:"-1"},[n("1.使用第三方工具分析 "),s("a",{class:"header-anchor",href:"#_1-使用第三方工具分析","aria-label":'Permalink to "1.使用第三方工具分析"'},"​")],-1),s("h3",{id:"_1-安装命令",tabindex:"-1"},[n("1.安装命令 "),s("a",{class:"header-anchor",href:"#_1-安装命令","aria-label":'Permalink to "1.安装命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"yum install python-pip gcc python-devel -y")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /opt/")]),n(`
`),s("span",{class:"line"},[s("span",null,"git clone https://github.com/sripathikrishnan/redis-rdb-tools")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd redis-rdb-tools")]),n(`
`),s("span",{class:"line"},[s("span",null,"pip install python-lzf")]),n(`
`),s("span",{class:"line"},[s("span",null,"python setup.py install")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_2-生成测试数据",tabindex:"-1"},[n("2.生成测试数据 "),s("a",{class:"header-anchor",href:"#_2-生成测试数据","aria-label":'Permalink to "2.生成测试数据"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6379 set txt $(cat txt.txt)")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_3-执行bgsave生成rdb文件",tabindex:"-1"},[n("3.执行bgsave生成rdb文件 "),s("a",{class:"header-anchor",href:"#_3-执行bgsave生成rdb文件","aria-label":'Permalink to "3.执行bgsave生成rdb文件"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6379 BGSAVE")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_4-使用工具分析",tabindex:"-1"},[n("4.使用工具分析 "),s("a",{class:"header-anchor",href:"#_4-使用工具分析","aria-label":'Permalink to "4.使用工具分析"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"cd /data/redis_6379/")]),n(`
`),s("span",{class:"line"},[s("span",null,"rdb -c memory redis_6379.rdb -f redis_6379.rdb.csv")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_5-过滤分析",tabindex:"-1"},[n("5.过滤分析 "),s("a",{class:"header-anchor",href:"#_5-过滤分析","aria-label":'Permalink to "5.过滤分析"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"DART")]),n(`
`),s("span",{class:"line"},[s("span",null,`awk -F"," '{print $4,$3}' redis_6379.rdb.csv |sort -r`)])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h3",{id:"_6-汇报领导",tabindex:"-1"},[n("6.汇报领导 "),s("a",{class:"header-anchor",href:"#_6-汇报领导","aria-label":'Permalink to "6.汇报领导"'},"​")],-1),s("p",null,"将结果整理汇报给领导,询问开发这个key是否可以删除",-1),s("h1",{id:"第26章-redis的内存管理",tabindex:"-1"},[n("第26章 redis的内存管理 "),s("a",{class:"header-anchor",href:"#第26章-redis的内存管理","aria-label":'Permalink to "第26章 redis的内存管理"'},"​")],-1),s("h2",{id:"_1-设置最大内存限制",tabindex:"-1"},[n("1.设置最大内存限制 "),s("a",{class:"header-anchor",href:"#_1-设置最大内存限制","aria-label":'Permalink to "1.设置最大内存限制"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"BASH")]),n(`
`),s("span",{class:"line"},[s("span",null,"config set maxmemory 2G")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_2-内存回收机制",tabindex:"-1"},[n("2.内存回收机制 "),s("a",{class:"header-anchor",href:"#_2-内存回收机制","aria-label":'Permalink to "2.内存回收机制"'},"​")],-1),s("p",null,"生产上一定要限制redis的内存使用大小。",-1),s("p",null,"当达到内存使用限制之后redis会出发对应的控制策略",-1),s("p",null,"redis支持6种策略：",-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.noevicition       默认策略，不会删除任务数据，拒绝所有写入操作并返回客户端错误信息，此时只响应读操作")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.volatile-lru      根据LRU算法删除设置了超时属性的key，指导腾出足够空间为止，如果没有可删除的key，则退回到noevicition策略")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.allkeys-lru       根据LRU算法删除key，不管数据有没有设置超时属性")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.allkeys-random    随机删除所有key")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.volatile-random   随机删除过期key")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.volatile-ttl      根据key的ttl，删除最近要过期的key")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h2",{id:"_3-生产上redis限制多大内存",tabindex:"-1"},[n("3.生产上redis限制多大内存 "),s("a",{class:"header-anchor",href:"#_3-生产上redis限制多大内存","aria-label":'Permalink to "3.生产上redis限制多大内存"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"先空出来系统一半内存")]),n(`
`),s("span",{class:"line"},[s("span",null,"48G 一共 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"24G 系统")]),n(`
`),s("span",{class:"line"},[s("span",null,"24G redis ")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis先给8G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis再给到12G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis再给到16G内存 满了之后，分析结果告诉老大和开发，让他们排查一下是否所有的key都是必须的")]),n(`
`),s("span",{class:"line"},[s("span",null,"等到24G都用完了之后，汇报领导，要考虑买内存了。")]),n(`
`),s("span",{class:"line"},[s("span",null,"等到35G的时候，就要考虑是加内存，还是扩容机器。")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第27章-性能测试",tabindex:"-1"},[n("第27章 性能测试 "),s("a",{class:"header-anchor",href:"#第27章-性能测试","aria-label":'Permalink to "第27章 性能测试"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CODE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-benchmark -n 10000  -q")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第28章-集群相关命令",tabindex:"-1"},[n("第28章 集群相关命令 "),s("a",{class:"header-anchor",href:"#第28章-集群相关命令","aria-label":'Permalink to "第28章 集群相关命令"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSS")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli -h db01 -p 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER NODES    ")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER MEET 10.0.0.52 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER INFO")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER REPLICATE")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER ADDSLOTS")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER RESET")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER FAILOVER")]),n(`
`),s("span",{class:"line"},[s("span",null,"CLUSTER SETSLOT <slot> STABLE")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster info 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster rebalance 10.0.0.51 6380")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster del-node")]),n(`
`),s("span",{class:"line"},[s("span",null,"redis-cli --cluster fix 10.0.0.51:6380")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("h1",{id:"第29章-命令总结",tabindex:"-1"},[n("第29章 命令总结 "),s("a",{class:"header-anchor",href:"#第29章-命令总结","aria-label":'Permalink to "第29章 命令总结"'},"​")],-1),s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"CSHARP")]),n(`
`),s("span",{class:"line"},[s("span",null,"1.全局命令")]),n(`
`),s("span",{class:"line"},[s("span",null,"keys *                ")]),n(`
`),s("span",{class:"line"},[s("span",null,"DBSIZE                ")]),n(`
`),s("span",{class:"line"},[s("span",null,"EXISTS k1         ")]),n(`
`),s("span",{class:"line"},[s("span",null,"EXPIRE k1 10      ")]),n(`
`),s("span",{class:"line"},[s("span",null,"TTL k1            ")]),n(`
`),s("span",{class:"line"},[s("span",null,"DEL k1                ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"2.字符串:")]),n(`
`),s("span",{class:"line"},[s("span",null,"set k1 v1")]),n(`
`),s("span",{class:"line"},[s("span",null,"get k1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"mset k1 v1 k2 v2 k3 v3 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"mget k1 k2 k3 ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"incr k1 ")]),n(`
`),s("span",{class:"line"},[s("span",null,"incrby k1 N ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"3.列表：")]),n(`
`),s("span",{class:"line"},[s("span",null,"LPUSH")]),n(`
`),s("span",{class:"line"},[s("span",null,"RPUSH")]),n(`
`),s("span",{class:"line"},[s("span",null,"LPOP")]),n(`
`),s("span",{class:"line"},[s("span",null,"RPOP")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"LLEN")]),n(`
`),s("span",{class:"line"},[s("span",null,"LRANGE list1 0 -1")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"HASH:")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMSET ")]),n(`
`),s("span",{class:"line"},[s("span",null,"HGET")]),n(`
`),s("span",{class:"line"},[s("span",null,"HMGET")]),n(`
`),s("span",{class:"line"},[s("span",null,"HGETALL")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"4.集合：")]),n(`
`),s("span",{class:"line"},[s("span",null,"SADD ")]),n(`
`),s("span",{class:"line"},[s("span",null,"SDIFF")]),n(`
`),s("span",{class:"line"},[s("span",null,"SINTER")]),n(`
`),s("span",{class:"line"},[s("span",null,"SUNION")]),n(`
`),s("span",{class:"line"},[s("span",null,"SREM")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"5.有序集合：")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZADD")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZCARD")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZSCORE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANK")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZREVRANK")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANGE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZRANGEBYSCORE")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZINCRBY")]),n(`
`),s("span",{class:"line"},[s("span",null,"ZCOUNT")])])]),s("button",{class:"code-block-unfold-btn"})],-1),s("p",null,[n("转自：简书张导"),s("a",{href:"https://www.jianshu.com/p/9622d5906bcf",target:"_blank",rel:"noreferrer"},"https://www.jianshu.com/p/9622d5906bcf")],-1),s("p",null,[s("a",{href:"https://www.jianshu.com/nb/38272646",target:"_blank",rel:"noreferrer"},"老男孩-NoSQL")],-1)])]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content-before":l(()=>[e(a.$slots,"main-content-before")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{H as default,_ as usePageData};
