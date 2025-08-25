import{_ as k}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Bv-Ltzoo.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as g,u as b,a as m}from"./chunks/vue-router.ClANm_mH.js";import{aa as h,ap as l,ag as e,af as n,ai as s,P as f,ab as v,a1 as y}from"./framework.GHZxz7jq.js";import"./index.Dp3W9g7b.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.C3MeNfs5.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.G7lgMgan.js";const D=g("/posts/docker-version-update",async c=>JSON.parse('{"title":"Docker升级版本并迁移数据目录","description":"","frontmatter":{"title":"Docker升级版本并迁移数据目录","categories":"Docker","tags":["istio"],"date":"2024-03-13 14:11:46"},"headers":[],"relativePath":"pages/posts/docker-version-update.md","lastUpdated":null}'),{lazy:(c,o)=>c.name===o.name}),G={__name:"docker-version-update",setup(c,{expose:o}){const{data:t}=D(),r=m(),u=b(),i=Object.assign(u.meta.frontmatter||{},t.value?.frontmatter||{});return r.currentRoute.value.data=t.value,y("valaxy:frontmatter",i),globalThis.$frontmatter=i,o({frontmatter:{title:"Docker升级版本并迁移数据目录",categories:"Docker",tags:["istio"],date:"2024-03-13 14:11:46"}}),(a,p)=>{const d=k;return v(),h(d,{frontmatter:f(i)},{"main-content-md":l(()=>[...p[0]||(p[0]=[n("h2",{id:"前言",tabindex:"-1"},[s("前言 "),n("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),n("ul",null,[n("li",null,"由于Centos7自带的yum源中的Docker版本过低，先卸载默认的版本")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@log jump]# docker --version")]),s(`
`),n("span",{class:"line"},[n("span",null,"Docker version 1.13.1, build 7d71120/1.13.1")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"备份",tabindex:"-1"},[s("备份 "),n("a",{class:"header-anchor",href:"#备份","aria-label":'Permalink to "备份"'},"​")],-1),n("ul",null,[n("li",null,"原配置文件备份一下")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@log config]# cat /usr/lib/systemd/system/docker.service ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[Unit]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Description=Docker Application Container Engine")]),s(`
`),n("span",{class:"line"},[n("span",null,"Documentation=http://docs.docker.com")]),s(`
`),n("span",{class:"line"},[n("span",null,"After=network.target rhel-push-plugin.service registries.service")]),s(`
`),n("span",{class:"line"},[n("span",null,"Wants=docker-storage-setup.service")]),s(`
`),n("span",{class:"line"},[n("span",null,"Requires=rhel-push-plugin.service registries.service")]),s(`
`),n("span",{class:"line"},[n("span",null,"Requires=docker-cleanup.timer")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[Service]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Type=notify")]),s(`
`),n("span",{class:"line"},[n("span",null,"NotifyAccess=main")]),s(`
`),n("span",{class:"line"},[n("span",null,"EnvironmentFile=-/run/containers/registries.conf")]),s(`
`),n("span",{class:"line"},[n("span",null,"EnvironmentFile=-/etc/sysconfig/docker")]),s(`
`),n("span",{class:"line"},[n("span",null,"EnvironmentFile=-/etc/sysconfig/docker-storage")]),s(`
`),n("span",{class:"line"},[n("span",null,"EnvironmentFile=-/etc/sysconfig/docker-network")]),s(`
`),n("span",{class:"line"},[n("span",null,"Environment=GOTRACEBACK=crash")]),s(`
`),n("span",{class:"line"},[n("span",null,"Environment=DOCKER_HTTP_HOST_COMPAT=1")]),s(`
`),n("span",{class:"line"},[n("span",null,"Environment=PATH=/usr/libexec/docker:/usr/bin:/usr/sbin")]),s(`
`),n("span",{class:"line"},[n("span",null,"ExecStart=/usr/bin/dockerd-current \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --add-runtime docker-runc=/usr/libexec/docker/docker-runc-current \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --default-runtime=docker-runc \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --authorization-plugin=rhel-push-plugin \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --exec-opt native.cgroupdriver=systemd \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --userland-proxy-path=/usr/libexec/docker/docker-proxy-current \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --init-path=/usr/libexec/docker/docker-init-current \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          --seccomp-profile=/etc/docker/seccomp.json \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $OPTIONS \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $DOCKER_STORAGE_OPTIONS \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $DOCKER_NETWORK_OPTIONS \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $ADD_REGISTRY \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $BLOCK_REGISTRY \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $INSECURE_REGISTRY \\")]),s(`
`),n("span",{class:"line"},[n("span",null,"          $REGISTRIES")]),s(`
`),n("span",{class:"line"},[n("span",null,"ExecReload=/bin/kill -s HUP $MAINPID")]),s(`
`),n("span",{class:"line"},[n("span",null,"LimitNOFILE=1048576")]),s(`
`),n("span",{class:"line"},[n("span",null,"LimitNPROC=1048576")]),s(`
`),n("span",{class:"line"},[n("span",null,"LimitCORE=infinity")]),s(`
`),n("span",{class:"line"},[n("span",null,"TimeoutStartSec=0")]),s(`
`),n("span",{class:"line"},[n("span",null,"Restart=on-abnormal")]),s(`
`),n("span",{class:"line"},[n("span",null,"KillMode=process")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[Install]")]),s(`
`),n("span",{class:"line"},[n("span",null,"WantedBy=multi-user.target")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"清楚知道Docker的存储目录在哪里")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"默认目录：/var/lib/docker")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@log config]# docker info | grep "Docker Root Dir"')]),s(`
`),n("span",{class:"line"},[n("span",null," Docker Root Dir: /var/lib/docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"升级高版本docker",tabindex:"-1"},[s("升级高版本docker "),n("a",{class:"header-anchor",href:"#升级高版本docker","aria-label":'Permalink to "升级高版本docker"'},"​")],-1),n("ul",null,[n("li",null,"不删除 /var/lib/docker 目录 就不会删除已安装的镜像及容器")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@log config]# yum list installed | grep docker")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker.x86_64                         2:1.13.1-209.git7d71120.1.al7    @updates ")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-client.x86_64                  2:1.13.1-209.git7d71120.1.al7    @updates ")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-common.x86_64                  2:1.13.1-209.git7d71120.1.al7    @updates ")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-rhel-push-plugin.x86_64        2:1.13.1-209.git7d71120.1.al7    @updates")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@log config]# yum -y remove docker*")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"安装yum管理工具，添加国内镜像源")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"yum install -y yum-utils")]),s(`
`),n("span",{class:"line"},[n("span",null,"yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"查看软件版本")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@log config]# yum list docker-ce --showduplicates|sort -r")]),s(`
`),n("span",{class:"line"},[n("span",null,"http://packages.treasuredata.com/4/redhat/2.1903/x86_64/repodata/repomd.xml: [Errno 14] HTTPS Error 404 - Not Found")]),s(`
`),n("span",{class:"line"},[n("span",null,"Trying other mirror.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Loading mirror speeds from cached hostfile")]),s(`
`),n("span",{class:"line"},[n("span",null,"Loaded plugins: fastestmirror, langpacks, releasever-adapter, update-motd")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:26.0.0-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:25.0.5-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:25.0.4-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:25.0.3-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:25.0.2-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:25.0.1-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:25.0.0-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.9-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.8-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.7-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.6-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.5-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.4-1.el7                      docker-ce-stable")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker-ce.x86_64            3:24.0.3-1.el7                      docker-ce-stable")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"安装指定版本的docker")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@log config]# yum install -y install docker-ce-20.10.8-3.el7")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@log config]# systemctl start docker")]),s(`
`),n("span",{class:"line"},[n("span",null,"systemctl start docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"启动容器报错")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-10-1024x125.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"Error response from daemon: Unknown runtime specified docker-runc")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"这是因为低版本升级到高版本之后不兼容 修改参数进行解决")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"更改/var/lib/docker/containers目录中的文件参数，把docker-runc替换为runc")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"grep -rl 'docker-runc' /var/lib/docker/containers/ | xargs sed -i 's/docker-runc/runc/g'")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"//注：grep -rl：递归搜索目录和子目录，只列出含有匹配的文本行的文件名，而不显示具体的匹配内容")]),s(`
`),n("span",{class:"line"},[n("span",null,"xargs：衔接执行之前得到的值")]),s(`
`),n("span",{class:"line"},[n("span",null,"总体意思是把/var/lib/docker/containers中含有‘docker-runc’的文件搜索出来，并把‘docker-runc’字符为runc")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"重新启动docker")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@log config]# systemctl restart docker")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@log config]# docker start nsfocus-filebeat filebeat filebeat-web ")]),s(`
`),n("span",{class:"line"},[n("span",null,"nsfocus-filebeat")]),s(`
`),n("span",{class:"line"},[n("span",null,"filebeat")]),s(`
`),n("span",{class:"line"},[n("span",null,"filebeat-web")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@log config]# docker ps")]),s(`
`),n("span",{class:"line"},[n("span",null,"CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                       NAMES")]),s(`
`),n("span",{class:"line"},[n("span",null,'c69c08e94c7b   6e372e62f3ba   "/usr/bin/tini -- /u…"   10 months ago   Up 6 seconds   0.0.0.0:5044->5044/udp, :::5044->5044/udp   nsfocus-filebeat')]),s(`
`),n("span",{class:"line"},[n("span",null,'74edf701d43c   6e372e62f3ba   "/usr/bin/tini -- /u…"   12 months ago   Up 6 seconds                                               filebeat-web')]),s(`
`),n("span",{class:"line"},[n("span",null,'5c8cc6afa17f   6e372e62f3ba   "/usr/bin/tini -- /u…"   12 months ago   Up 6 seconds                                               filebeat')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"迁移-docker-存储目录",tabindex:"-1"},[s("迁移 Docker 存储目录 "),n("a",{class:"header-anchor",href:"#迁移-docker-存储目录","aria-label":'Permalink to "迁移 Docker 存储目录"'},"​")],-1),n("ul",null,[n("li",null,"查看 Docker 存储位置")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'docker info | grep "Docker Root Dir"')]),s(`
`),n("span",{class:"line"},[n("span",null," Docker Root Dir: /var/lib/docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"停止Docker 服务")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"systemctl stop docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"迁移 Docker 存储目录")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"当前从 /var/lib/docker目录迁移至 /data/docker目录")]),s(`
`),n("span",{class:"line"},[n("span",null,"这里建议使用 cp 命令，在确认迁移无误后再操作旧目录的删除")]),s(`
`),n("span",{class:"line"},[n("span",null,"数据量大的情况，迁移过程需要耐心等待")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"cp -r /var/lib/docker /data/docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"确认数据是否迁移完成")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"对比新目录与旧目录数据占用大小是否相同")]),s(`
`),n("span",{class:"line"},[n("span",null,"旧目录数据大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"du -sh /var/lib/docker")]),s(`
`),n("span",{class:"line"},[n("span",null,"19G    /var/lib/docker")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 新目录数据大小")]),s(`
`),n("span",{class:"line"},[n("span",null,"du -sh /data/docker")]),s(`
`),n("span",{class:"line"},[n("span",null,"19G    /data/docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"修改 daemon.json 配置文件")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"备份 daemon.json 配置文件")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"cp /etc/docker/daemon.json /etc/docker/daemon.json.bak")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"编辑 daemon.json 配置文件")]),s(`
`),n("span",{class:"line"},[n("span",null,"vim /etc/docker/daemon.json")]),s(`
`),n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,' "data-root": "/data/docker",  # 修改该配置为 /data/docker')]),s(`
`),n("span",{class:"line"},[n("span",null,' "live-restore": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,' "log-driver": "json-file",')]),s(`
`),n("span",{class:"line"},[n("span",null,' "log-opts": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "max-file": "3",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "max-size": "10m"')]),s(`
`),n("span",{class:"line"},[n("span",null," }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"启动 Docker 服务，确认 Docker 存储位置是否为新目录")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"# 启动 Docker 服务")]),s(`
`),n("span",{class:"line"},[n("span",null,"systemctl daemon-reload")]),s(`
`),n("span",{class:"line"},[n("span",null,"systemctl restart docker")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 查看 Docker 存储位置")]),s(`
`),n("span",{class:"line"},[n("span",null,'docker info | grep "Docker Root Dir"')]),s(`
`),n("span",{class:"line"},[n("span",null," Docker Root Dir: /data/docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"启动成功后，再确认之前的镜像还在")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"docker ps -a")]),s(`
`),n("span",{class:"line"},[n("span",null,"docker images")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("ul",null,[n("li",null,"确认 Docker 新迁移可正常使用后，删除 Docker 旧目录")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"# 删除 Docker 旧目录")]),s(`
`),n("span",{class:"line"},[n("span",null,"rm -rf /var/lib/docker")])])]),n("button",{class:"code-block-unfold-btn"})],-1)])]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content-before":l(()=>[e(a.$slots,"main-content-before")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{G as default,D as usePageData};
