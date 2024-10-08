import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-fa7e3bd6.js";import{_ as d,c as A,w as e,o as C,b as s,d as l,e as c,r as a,f as u,p as y}from"./app-c9a35e04.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-aee502c7.js";import"./YunCard.vue_vue_type_style_index_0_lang-68a832c1.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-1a130fa6.js";const us=JSON.parse('{"title":"Docker升级版本并迁移数据目录","description":"","frontmatter":{"title":"Docker升级版本并迁移数据目录","categories":"Docker","tags":["istio"],"date":"2024-03-13T14:11:46.000Z"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"备份","slug":"备份","link":"#备份","children":[]},{"level":2,"title":"升级高版本docker","slug":"升级高版本docker","link":"#升级高版本docker","children":[]},{"level":2,"title":"迁移 Docker 存储目录","slug":"迁移-docker-存储目录","link":"#迁移-docker-存储目录","children":[]}],"relativePath":"pages/posts/docker-version-update.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/docker-version-update.md","lastUpdated":1711086073000}'),t=JSON.parse('{"title":"Docker升级版本并迁移数据目录","description":"","frontmatter":{"title":"Docker升级版本并迁移数据目录","categories":"Docker","tags":["istio"],"date":"2024-03-13T14:11:46.000Z"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"备份","slug":"备份","link":"#备份","children":[]},{"level":2,"title":"升级高版本docker","slug":"升级高版本docker","link":"#升级高版本docker","children":[]},{"level":2,"title":"迁移 Docker 存储目录","slug":"迁移-docker-存储目录","link":"#迁移-docker-存储目录","children":[]}],"relativePath":"pages/posts/docker-version-update.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/docker-version-update.md","lastUpdated":1711086073000}'),D={name:"pages/posts/docker-version-update.md",data(){return{data:t,frontmatter:t.frontmatter}},setup(){y("pageData",t)}},k={id:"前言",tabindex:"-1"},h=s("ul",null,[s("li",null,"由于Centos7自带的yum源中的Docker版本过低，先卸载默认的版本")],-1),m=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log jump]# docker --version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Docker version 1.13.1, build 7d71120/1.13.1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),g={id:"备份",tabindex:"-1"},_=s("ul",null,[s("li",null,"原配置文件备份一下")],-1),b=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# cat /usr/lib/systemd/system/docker.service ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=Docker Application Container Engine")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Documentation=http://docs.docker.com")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target rhel-push-plugin.service registries.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Wants=docker-storage-setup.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Requires=rhel-push-plugin.service registries.service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Requires=docker-cleanup.timer")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=notify")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NotifyAccess=main")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EnvironmentFile=-/run/containers/registries.conf")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EnvironmentFile=-/etc/sysconfig/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EnvironmentFile=-/etc/sysconfig/docker-storage")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EnvironmentFile=-/etc/sysconfig/docker-network")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Environment=GOTRACEBACK=crash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Environment=DOCKER_HTTP_HOST_COMPAT=1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Environment=PATH=/usr/libexec/docker:/usr/bin:/usr/sbin")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/bin/dockerd-current \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --add-runtime docker-runc=/usr/libexec/docker/docker-runc-current \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --default-runtime=docker-runc \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --authorization-plugin=rhel-push-plugin \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --exec-opt native.cgroupdriver=systemd \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --userland-proxy-path=/usr/libexec/docker/docker-proxy-current \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --init-path=/usr/libexec/docker/docker-init-current \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          --seccomp-profile=/etc/docker/seccomp.json \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $OPTIONS \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $DOCKER_STORAGE_OPTIONS \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $DOCKER_NETWORK_OPTIONS \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $ADD_REGISTRY \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $BLOCK_REGISTRY \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $INSECURE_REGISTRY \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          $REGISTRIES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecReload=/bin/kill -s HUP $MAINPID")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LimitNOFILE=1048576")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LimitNPROC=1048576")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LimitCORE=infinity")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TimeoutStartSec=0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Restart=on-abnormal")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KillMode=process")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),f=s("ul",null,[s("li",null,"清楚知道Docker的存储目录在哪里")],-1),v=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"默认目录：/var/lib/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@log config]# docker info | grep "Docker Root Dir"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," Docker Root Dir: /var/lib/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),x={id:"升级高版本docker",tabindex:"-1"},E=s("ul",null,[s("li",null,"不删除 /var/lib/docker 目录 就不会删除已安装的镜像及容器")],-1),R=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# yum list installed | grep docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker.x86_64                         2:1.13.1-209.git7d71120.1.al7    @updates ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-client.x86_64                  2:1.13.1-209.git7d71120.1.al7    @updates ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-common.x86_64                  2:1.13.1-209.git7d71120.1.al7    @updates ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-rhel-push-plugin.x86_64        2:1.13.1-209.git7d71120.1.al7    @updates")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# yum -y remove docker*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T=s("ul",null,[s("li",null,"安装yum管理工具，添加国内镜像源")],-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum install -y yum-utils")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O=s("ul",null,[s("li",null,"查看软件版本")],-1),S=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# yum list docker-ce --showduplicates|sort -r")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http://packages.treasuredata.com/4/redhat/2.1903/x86_64/repodata/repomd.xml: [Errno 14] HTTPS Error 404 - Not Found")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Trying other mirror.")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Loading mirror speeds from cached hostfile")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Loaded plugins: fastestmirror, langpacks, releasever-adapter, update-motd")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:26.0.0-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:25.0.5-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:25.0.4-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:25.0.3-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:25.0.2-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:25.0.1-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:25.0.0-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.9-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.8-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.7-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.6-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.5-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.4-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:24.0.3-1.el7                      docker-ce-stable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),N=s("ul",null,[s("li",null,"安装指定版本的docker")],-1),I=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# yum install -y install docker-ce-20.10.8-3.el7")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# systemctl start docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl start docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),P=s("ul",null,[s("li",null,"启动容器报错")],-1),U=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-10-1024x125.png",alt:"img"})],-1),w=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Error response from daemon: Unknown runtime specified docker-runc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"这是因为低版本升级到高版本之后不兼容 修改参数进行解决")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),j=s("ul",null,[s("li",null,"更改/var/lib/docker/containers目录中的文件参数，把docker-runc替换为runc")],-1),G=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"grep -rl 'docker-runc' /var/lib/docker/containers/ | xargs sed -i 's/docker-runc/runc/g'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"//注：grep -rl：递归搜索目录和子目录，只列出含有匹配的文本行的文件名，而不显示具体的匹配内容")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"xargs：衔接执行之前得到的值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"总体意思是把/var/lib/docker/containers中含有‘docker-runc’的文件搜索出来，并把‘docker-runc’字符为runc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),L=s("ul",null,[s("li",null,"重新启动docker")],-1),M=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# systemctl restart docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# docker start nsfocus-filebeat filebeat filebeat-web ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nsfocus-filebeat")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filebeat")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filebeat-web")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log config]# docker ps")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                       NAMES")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'c69c08e94c7b   6e372e62f3ba   "/usr/bin/tini -- /u…"   10 months ago   Up 6 seconds   0.0.0.0:5044->5044/udp, :::5044->5044/udp   nsfocus-filebeat')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'74edf701d43c   6e372e62f3ba   "/usr/bin/tini -- /u…"   12 months ago   Up 6 seconds                                               filebeat-web')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'5c8cc6afa17f   6e372e62f3ba   "/usr/bin/tini -- /u…"   12 months ago   Up 6 seconds                                               filebeat')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K={id:"迁移-docker-存储目录",tabindex:"-1"},B=s("ul",null,[s("li",null,"查看 Docker 存储位置")],-1),F=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'docker info | grep "Docker Root Dir"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," Docker Root Dir: /var/lib/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H=s("ul",null,[s("li",null,"停止Docker 服务")],-1),V=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl stop docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W=s("ul",null,[s("li",null,"迁移 Docker 存储目录")],-1),Y=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"当前从 /var/lib/docker目录迁移至 /data/docker目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"这里建议使用 cp 命令，在确认迁移无误后再操作旧目录的删除")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"数据量大的情况，迁移过程需要耐心等待")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp -r /var/lib/docker /data/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q=s("ul",null,[s("li",null,"确认数据是否迁移完成")],-1),z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"对比新目录与旧目录数据占用大小是否相同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"旧目录数据大小")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"du -sh /var/lib/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"19G    /var/lib/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 新目录数据大小")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"du -sh /data/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"19G    /data/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),J=s("ul",null,[s("li",null,"修改 daemon.json 配置文件")],-1),Z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"备份 daemon.json 配置文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cp /etc/docker/daemon.json /etc/docker/daemon.json.bak")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"编辑 daemon.json 配置文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"vim /etc/docker/daemon.json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' "data-root": "/data/docker",  # 修改该配置为 /data/docker')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' "live-restore": true,')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' "log-driver": "json-file",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' "log-opts": {')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "max-file": "3",')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "max-size": "10m"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q=s("ul",null,[s("li",null,"启动 Docker 服务，确认 Docker 存储位置是否为新目录")],-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 启动 Docker 服务")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl daemon-reload")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"systemctl restart docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 查看 Docker 存储位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'docker info | grep "Docker Root Dir"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," Docker Root Dir: /data/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ss=s("ul",null,[s("li",null,"启动成功后，再确认之前的镜像还在")],-1),ls=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker ps -a")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker images")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),es=s("ul",null,[s("li",null,"确认 Docker 新迁移可正常使用后，删除 Docker 旧目录")],-1),ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 删除 Docker 旧目录")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rm -rf /var/lib/docker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1);function as(n,os,cs,ts,r,rs){const o=u,i=p;return C(),A(i,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":e(()=>[s("h2",k,[l("前言 "),c(o,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),h,m,s("h2",g,[l("备份 "),c(o,{class:"header-anchor",href:"#备份","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),_,b,f,v,s("h2",x,[l("升级高版本docker "),c(o,{class:"header-anchor",href:"#升级高版本docker","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),E,R,T,$,O,S,N,I,P,U,w,j,G,L,M,s("h2",K,[l("迁移 Docker 存储目录 "),c(o,{class:"header-anchor",href:"#迁移-docker-存储目录","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),B,F,H,V,W,Y,q,z,J,Z,Q,X,ss,ls,es,ns]),"main-header":e(()=>[a(n.$slots,"main-header")]),"main-header-after":e(()=>[a(n.$slots,"main-header-after")]),"main-nav":e(()=>[a(n.$slots,"main-nav")]),"main-content":e(()=>[a(n.$slots,"main-content")]),"main-content-after":e(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(n.$slots,"main-nav-after")]),comment:e(()=>[a(n.$slots,"comment")]),footer:e(()=>[a(n.$slots,"footer")]),aside:e(()=>[a(n.$slots,"aside")]),"aside-custom":e(()=>[a(n.$slots,"aside-custom")]),default:e(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const ys=d(D,[["render",as]]);export{us as __pageData,ys as default};
