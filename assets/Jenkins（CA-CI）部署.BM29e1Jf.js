import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang.CWk9_bhA.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as d,u as b,a as h}from"./chunks/vue-router._WIYEsQP.js";import{aa as k,ap as l,ag as e,af as n,ai as s,P as v,ab as w,a1 as x}from"./framework.GHZxz7jq.js";import"./index.BOmfoNni.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.Scn_mnTZ.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.DOTZsJyO.js";const _=d("/posts/Jenkins（CA-CI）部署",async i=>JSON.parse('{"title":"Jenkins（CA/CI）部署","description":"","frontmatter":{"title":"Jenkins（CA/CI）部署","categories":"DevOps","tags":["Jenkins","CA","CI","Maven","Pipeline项目","回滚脚本"],"date":"2020-03-10 20:13:00"},"headers":[],"relativePath":"pages/posts/Jenkins（CA-CI）部署.md","lastUpdated":null}'),{lazy:(i,p)=>i.name===p.name}),M={__name:"Jenkins（CA-CI）部署",setup(i,{expose:p}){const{data:c}=_(),r=h(),u=b(),t=Object.assign(u.meta.frontmatter||{},c.value?.frontmatter||{});return r.currentRoute.value.data=c.value,x("valaxy:frontmatter",t),globalThis.$frontmatter=t,p({frontmatter:{title:"Jenkins（CA/CI）部署",categories:"DevOps",tags:["Jenkins","CA","CI","Maven","Pipeline项目","回滚脚本"],date:"2020-03-10 20:13:00"}}),(a,o)=>{const g=m;return w(),k(g,{frontmatter:v(t)},{"main-content-md":l(()=>[...o[0]||(o[0]=[n("h3",{id:"jenkins",tabindex:"-1"},[s("Jenkins "),n("a",{class:"header-anchor",href:"#jenkins","aria-label":'Permalink to "Jenkins"'},"​")],-1),n("p",null,"官网",-1),n("p",null,[n("a",{href:"https://jenkins.io/",target:"_blank",rel:"noreferrer"},"https://jenkins.io")],-1),n("p",null,"Jenkins 是一个开源软件项目，是基于 Java 开发的一种持续集成工具，用于监控持续重复的工作，指在提供一个开 放易用的软件平台，使软件的持续集成变成可能。",-1),n("h4",{id:"_01-安装准备",tabindex:"-1"},[s("01. 安装准备 "),n("a",{class:"header-anchor",href:"#_01-安装准备","aria-label":'Permalink to "01. 安装准备"'},"​")],-1),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"主机"),n("th",null,"IP"),n("th",null,"内存"),n("th",null,"硬盘")])]),n("tbody",null,[n("tr",null,[n("td",null,"Jenkins"),n("td",null,"10.0.0.201"),n("td",null,"2G"),n("td",null,"50G+")]),n("tr",null,[n("td",null,"nexus"),n("td",null,"10.0.0.202"),n("td",null,"2G"),n("td",null,"50G+")])])],-1),n("h4",{id:"_02-安装-jdk-和-jenkins",tabindex:"-1"},[s("02 . 安装 Jdk 和 Jenkins "),n("a",{class:"header-anchor",href:"#_02-安装-jdk-和-jenkins","aria-label":'Permalink to "02 . 安装 Jdk 和 Jenkins"'},"​")],-1),n("p",null,"上传 JDK 和 Jenkins 安装包，使用 rpm ‐ivh 进行安装，安装完 JDK 运行 Java 测试是否安装成功",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 170023183 2018-08-14 11:05 jdk-8u181-linux-x64.rpm")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 74141787 2018-08-13 20:23 jenkins-2.99-1.1.noarch.rpm")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# rpm -ivh jdk-8u181-linux-x64.rpm ")]),s(`
`),n("span",{class:"line"},[n("span",null,"warning: jdk-8u181-linux-x64.rpm: Header V3 RSA/SHA256 Signature, key ID ec551f03: NOKEY")]),s(`
`),n("span",{class:"line"},[n("span",null,"Preparing... ################################# [100%]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Updating / installing...")]),s(`
`),n("span",{class:"line"},[n("span",null,"1:jdk1.8-2000:1.8.0_181-fcs ################################# [100%]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Unpacking JAR files...")]),s(`
`),n("span",{class:"line"},[n("span",null," tools.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," plugin.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," javaws.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," deploy.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," rt.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," jsse.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," charsets.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," localedata.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# rpm -ivh jenkins-2.99-1.1.noarch.rpm ")]),s(`
`),n("span",{class:"line"},[n("span",null,"warning: jenkins-2.99-1.1.noarch.rpm: Header V4 DSA/SHA1 Signature, key ID d50582e6: NOKEY")]),s(`
`),n("span",{class:"line"},[n("span",null,"Preparing... ################################# [100%]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Updating / installing...")]),s(`
`),n("span",{class:"line"},[n("span",null,"1:jenkins-2.99-1.1 ################################# [100%]")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_03-配置-jenkins",tabindex:"-1"},[s("03 . 配置 Jenkins "),n("a",{class:"header-anchor",href:"#_03-配置-jenkins","aria-label":'Permalink to "03 . 配置 Jenkins"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#启动用户修改为root")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# grep 'root' /etc/sysconfig/jenkins")]),s(`
`),n("span",{class:"line"},[n("span",null,'JENKINS_USER="root"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#启动")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# systemctl start jenkins")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#查看端口")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# netstat -lntp | grep 8080")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp6 0 0 :::8080 ::: LISTEN 8504/java")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#查看进程")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ps aux |grep jenkins")]),s(`
`),n("span",{class:"line"},[n("span",null,"root 8504 8.8 11.6 2618104 235556 ? Ssl 15:29 0:25 /etc/alternatives/java -Dcom.sun.akuma.Daemon=daemonized -Djava.awt.headless=true -DJENKINS_HOME=/var/lib/jenkins -jar /usr/lib/jenkins/jenkins.war --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war --daemon --httpPort=8080 --debug=5 --handlerCountMax=100 --handlerCountMaxIdle=20")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#访问页面进行配置")]),s(`
`),n("span",{class:"line"},[n("span",null,"http://10.0.0.201:8080")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#查看密码")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cat /var/lib/jenkins/secrets/initialAdminPassword")]),s(`
`),n("span",{class:"line"},[n("span",null,"e8e69c5646cc4f3b88315fb20156ce6c")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_88.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_89.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_90.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"修改密码",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_91.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_04-插件安装",tabindex:"-1"},[s("04. 插件安装 "),n("a",{class:"header-anchor",href:"#_04-插件安装","aria-label":'Permalink to "04. 插件安装"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#插件安装（跳过安装插件，直接上传插件到目录）")]),s(`
`),n("span",{class:"line"},[n("span",null,"1.自动安装可选插件")]),s(`
`),n("span",{class:"line"},[n("span",null,"2.手动下载插件上传安装")]),s(`
`),n("span",{class:"line"},[n("span",null,"3.插件放入插件目录")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cd /var/lib/jenkins/")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins jenkins]# ll         #jobs为每次构建后构建的结果目录，plugins为插件目录")]),s(`
`),n("span",{class:"line"},[n("span",null,"总用量 36")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐‐‐‐‐‐‐ 1 root root 1822 8月 26 00:35 config.xml")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐‐‐‐‐‐‐ 1 root root 156 8月 26 00:31 hudson.model.UpdateCenter.xml")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐‐‐‐‐‐‐ 1 root root 1712 8月 26 00:32 identity.key.enc")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐‐‐‐‐‐‐ 1 root root 94 8月 26 00:32 jenkins.CLI.xml")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐r‐‐r‐‐ 1 root root 4 8月 26 00:35 jenkins.install.InstallUtil.lastExecVersion")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐r‐‐r‐‐ 1 root root 4 8月 26 00:35 jenkins.install.UpgradeWizard.state")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr‐xr‐x 2 root root 6 8月 26 00:31 jobs")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr‐xr‐x 3 root root 18 8月 26 00:32 logs")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐‐‐‐‐‐‐ 1 root root 907 8月 26 00:32 nodeMonitors.xml")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr‐xr‐x 2 root root 6 8月 26 00:32 nodes")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr‐xr‐x 2 root root 6 8月 26 00:31 plugins")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐‐‐‐‐‐‐ 1 root root 64 8月 26 00:31 secret.key")]),s(`
`),n("span",{class:"line"},[n("span",null,"‐rw‐r‐‐r‐‐ 1 root root 0 8月 26 00:31 secret.key.not‐so‐secret")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwx‐‐‐‐‐‐ 4 root root 4096 8月 26 00:32 secrets")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr‐xr‐x 2 root root 23 8月 26 00:32 userContent")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr‐xr‐x 3 root root 18 8月 26 00:34 users")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#上传插件包解压到plugins")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins jenkins]# cd plugins/")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 160580")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 164431230 2018-08-14 21:00 plugins.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# tar xf plugins.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# rm -f plugins.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# mv plugins/ ./")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# rm -rf plugins/")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#重启生效")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# systemctl restart jenkins.service")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"4.jenkins 主要的目录",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/usr/lib/jenkins/：          #jenkins安装目录，WAR包会放在这里")]),s(`
`),n("span",{class:"line"},[n("span",null,'/etc/sysconfig/jenkins：        #jenkins配置文件，"端口"，"JENKINS_HOME"等都可以在这里配置')]),s(`
`),n("span",{class:"line"},[n("span",null,"/var/lib/jenkins/：          #默认的JENKINS_HOME")]),s(`
`),n("span",{class:"line"},[n("span",null,"/var/log/jenkins/jenkins.log：    #Jenkins日志文件")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_92.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_05-创建项目",tabindex:"-1"},[s("05. 创建项目 "),n("a",{class:"header-anchor",href:"#_05-创建项目","aria-label":'Permalink to "05. 创建项目"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_93.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_94.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_95.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"进行构建",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_96.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_97.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"进入控制台",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_98.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_99.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_100.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_101.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_102.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_103.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 0 2019-11-19 16:19 test.txt")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_06-jenkins-获取-git-源代码",tabindex:"-1"},[s("06. Jenkins 获取 Git 源代码 "),n("a",{class:"header-anchor",href:"#_06-jenkins-获取-git-源代码","aria-label":'Permalink to "06. Jenkins 获取 Git 源代码"'},"​")],-1),n("p",null,"这里我们有码云导入一个 HTML 页面的监控平台到 gitlab 仓库，打开码云，找到一个大转盘项目，将其代码路径进行复制",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_104.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"在 Gitlab 上面新创建一个项目仓库。将源代码导入进去。",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_105.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_106.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"dev 用户端配置从 git 获取代码。",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@dev ~]# git clone git@10.0.0.100:OPS/dzp.git ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Cloning into 'dzp'... ")]),s(`
`),n("span",{class:"line"},[n("span",null,"remote: Counting objects: 19, done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"remote: Compressing objects: 100% (15/15), done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"remote: Total 19 (delta 2), reused 0 (delta 0) ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Receiving objects: 100% (19/19), 104.36 KiB | 0 bytes/s, done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Resolving deltas: 100% (2/2), done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~]# ll ")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 6 root root 87 Nov 19 20:41 dzp ")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 52 Nov 17 17:21 git_test ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~]# cd dzp/ ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# ll ")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 8 ")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 25 Nov 19 20:41 css ")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 84 Nov 19 20:41 img ")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 41 Nov 19 20:41 js ")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 2170 Nov 19 20:41 lottery.html ")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 113 Nov 19 20:41 README.md ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#dev用户修改了源代码")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# vim lottery.html ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# ")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@dev ~/dzp]# git commit -am "modify html" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"[master 1e2125e] modify html ")]),s(`
`),n("span",{class:"line"},[n("span",null,"1 file changed, 5 insertions(+), 5 deletions(-) ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# git push -u origin master ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Counting objects: 5, done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Compressing objects: 100% (3/3), done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Writing objects: 100% (3/3), 365 bytes | 0 bytes/s, done. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Total 3 (delta 2), reused 0 (delta 0) ")]),s(`
`),n("span",{class:"line"},[n("span",null,"To git@10.0.0.100:OPS/dzp.git ")]),s(`
`),n("span",{class:"line"},[n("span",null,"3935eb7..1e2125e master -> master ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Branch master set up to track remote branch master from origin.")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"Jenkins 配置从 Git 获取代码，由于我们 dev 用户不是配置在 Jenkins 上，所以需认证即可下载代码。进行面认证方法，需要配置 deploy key",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ssh-keygen -t rsa ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Generating public/private rsa key pair. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Enter file in which to save the key (/root/.ssh/id_rsa): ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Enter passphrase (empty for no passphrase): ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Enter same passphrase again: ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Your identification has been saved in /root/.ssh/id_rsa. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Your public key has been saved in /root/.ssh/id_rsa.pub. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"The key fingerprint is: ")]),s(`
`),n("span",{class:"line"},[n("span",null,"SHA256:1z+H0mc9hUwOWiO3mFOGswuOW9jNr2bmOwRE50eECQU root@jenkins ")]),s(`
`),n("span",{class:"line"},[n("span",null,"The key's randomart image is: ")]),s(`
`),n("span",{class:"line"},[n("span",null,"+---[RSA 2048]----+ ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| .E+o+o | ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| .ooo | ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| . = O . | ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| . # B . | ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| S.B o + .| ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| = =.o o .o| ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| o +.+ . =.=| ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| o =. . =.| ")]),s(`
`),n("span",{class:"line"},[n("span",null,"| . =++. | ")]),s(`
`),n("span",{class:"line"},[n("span",null,"+----[SHA256]-----+ ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cat .ssh/ ")]),s(`
`),n("span",{class:"line"},[n("span",null,"id_rsa id_rsa.pub known_hosts ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cat .ssh/id_rsa.pub ")]),s(`
`),n("span",{class:"line"},[n("span",null,"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCY3WrgTCmZeapjV9Tx6GmmHX+SVigxHnz37f8iUUjAexmR2/gSAjvsY3ez5iITmamf2I62+5n+gx9f1OPXUsUAzOApD6R8zHmvzQ/yheDO1y5XHcmRtklN1HpOq2g0PChrRjrr4QcXITKafU30OjTu4Fx3vndxqD/3RpHD3IVSZGAsiJC6T+C/PYW8YfeLNEAA7O3QKskjuSkoH2PZyF7qQgwjxfudno1g3qLQkmB+CjFFwgj0vkam/W4OwUwapC1O591CU7+VmSWL/z8uMTpSV+FQkyH04qS/HSs27pfpAI0wpBB/gBxx+wU8FCUh++2SWpuJR8/TPqkS8YKhfl+p root@jenkins  #复制该串代码")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_107.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_108.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"Jenkins 配置从 Git 获取代码，配置好后保存",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_109.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_07-立即构建获取源代码",tabindex:"-1"},[s("07. 立即构建获取源代码 "),n("a",{class:"header-anchor",href:"#_07-立即构建获取源代码","aria-label":'Permalink to "07. 立即构建获取源代码"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_110.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_111.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_112.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"Jenkins服务器查看代码")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ll /var/lib/jenkins/workspace/freestyle-job/")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 8")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 25 2019-11-19 21:12 css")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 84 2019-11-19 21:12 img")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 41 2019-11-19 21:12 js")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 2205 2019-11-19 21:12 lottery.html")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 113 2019-11-19 21:12 README.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_08-jenkins-代码推送到-web",tabindex:"-1"},[s("08. Jenkins 代码推送到 Web "),n("a",{class:"header-anchor",href:"#_08-jenkins-代码推送到-web","aria-label":'Permalink to "08. Jenkins 代码推送到 Web"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#写一个脚本把从git仓库里获取的代码上传到web服务器站点目录下")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# mkdir -p /server/script ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cd /server/script ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins script]# vim deploy.sh ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins script]# cat deploy.sh ")]),s(`
`),n("span",{class:"line"},[n("span",null,"#!/bin/sh ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Date=$(date +%s) ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Code_Dir=/var/lib/jenkins/workspace/freestyle-job ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Web_Dir=/code ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Ip=10.0.0.202 ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Code_Tar() { ")]),s(`
`),n("span",{class:"line"},[n("span",null," cd Code_Dir && tar zcf /opt/web_Code_Dir && tar zcf /opt/web_{Date}.tar.gz ./ ")]),s(`
`),n("span",{class:"line"},[n("span",null,"} ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Scp_Code_Web() { ")]),s(`
`),n("span",{class:"line"},[n("span",null," scp /opt/web_Date.tar.gzroot@Date.tar.gzroot@{Ip}:/opt ")]),s(`
`),n("span",{class:"line"},[n("span",null,"} ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Code_Tar_Xf() { ")]),s(`
`),n("span",{class:"line"},[n("span",null,' ssh root@Ip " cd /opt && mkdir web_Ip " cd /opt && mkdir web_Date && tar xf web_{Date}.tar.gz -C web_{Date}.tar.gz -C web_Date " ')]),s(`
`),n("span",{class:"line"},[n("span",null,"} ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Ln_Html() { ")]),s(`
`),n("span",{class:"line"},[n("span",null,' ssh root@Ip"rm−rfIp"rm−rfWeb_Dir && ln -s /opt/web_$Date /code " ')]),s(`
`),n("span",{class:"line"},[n("span",null,"} ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Code_Tar; ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Scp_Code_Web; ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Code_Tar_Xf; ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Ln_Html ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#分发公钥")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins script]# ssh-copy-id -i /root/.ssh/id_rsa.pub root@10.0.0.202 ")]),s(`
`),n("span",{class:"line"},[n("span",null,'/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"The authenticity of host '10.0.0.202 (10.0.0.202)' can't be established. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"ECDSA key fingerprint is SHA256:K8NapPzlTxhCMXC/bRFTtI9mdwr63FH4Wu7psrXXqBs. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"ECDSA key fingerprint is MD5:73:9f:67:f1:5d:39:10:3d:b2:be:f7:c1:66:aa:00:6e. ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Are you sure you want to continue connecting (yes/no)? yes ")]),s(`
`),n("span",{class:"line"},[n("span",null,"/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed ")]),s(`
`),n("span",{class:"line"},[n("span",null,"/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys ")]),s(`
`),n("span",{class:"line"},[n("span",null,"root@10.0.0.202's password: ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"Number of key(s) added: 1 ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,`Now try logging into the machine, with: "ssh 'root@10.0.0.202'" `)]),s(`
`),n("span",{class:"line"},[n("span",null,"and check to make sure that only the key(s) you wanted were added. ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins script]# ssh root@10.0.0.202 ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Last login: Tue Nov 19 15:10:55 2019 from 10.0.0.1 ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@nexus ~]# logout ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Connection to 10.0.0.202 closed. ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#Jenkins上面添加脚本进行构建")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_113.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_114.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"查看网站是否更新成功",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_115.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_09-配置自动触发构建",tabindex:"-1"},[s("09. 配置自动触发构建 "),n("a",{class:"header-anchor",href:"#_09-配置自动触发构建","aria-label":'Permalink to "09. 配置自动触发构建"'},"​")],-1),n("h1",{id:"需要设置安全令牌-secret-token",tabindex:"-1"},[s("需要设置安全令牌 Secret token "),n("a",{class:"header-anchor",href:"#需要设置安全令牌-secret-token","aria-label":'Permalink to "需要设置安全令牌 Secret token"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_116.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_117.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"Gitlab 上面操作",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_118.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_119.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_120.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_10-测试是否触发",tabindex:"-1"},[s("10. 测试是否触发 "),n("a",{class:"header-anchor",href:"#_10-测试是否触发","aria-label":'Permalink to "10. 测试是否触发"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#dev用户修改源代码后进行推送测试是否自动触发")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# vim lottery.html ")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@dev ~/dzp]# git commit -am "modify html test"')]),s(`
`),n("span",{class:"line"},[n("span",null,"[master d8849aa] modify html test")]),s(`
`),n("span",{class:"line"},[n("span",null,"1 file changed, 3 insertions(+), 3 deletions(-)")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@dev ~/dzp]# git push -u origin master")]),s(`
`),n("span",{class:"line"},[n("span",null,"Counting objects: 5, done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Compressing objects: 100% (3/3), done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Writing objects: 100% (3/3), 303 bytes | 0 bytes/s, done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Total 3 (delta 2), reused 0 (delta 0)")]),s(`
`),n("span",{class:"line"},[n("span",null,"To git@10.0.0.100:OPS/dzp.git")]),s(`
`),n("span",{class:"line"},[n("span",null,"1e2125e..d8849aa master -> master")]),s(`
`),n("span",{class:"line"},[n("span",null,"Branch master set up to track remote branch master from origin.")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_121.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_122.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_11-返回构建状态",tabindex:"-1"},[s("11. 返回构建状态 "),n("a",{class:"header-anchor",href:"#_11-返回构建状态","aria-label":'Permalink to "11. 返回构建状态"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#Jenkins配置Jenkins返回构建状态到Gitlab")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#先获得gitlab的token")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_123.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_124.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_125.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"将获得的 token 值进行复制备用",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_126.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_127.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_128.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_129.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_130.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"进行测试",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_131.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"添加构建后操作",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_132.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_133.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_134.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"检查结果",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_135.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_136.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h1",{id:"创建-maven-项目",tabindex:"-1"},[s("创建 Maven 项目 "),n("a",{class:"header-anchor",href:"#创建-maven-项目","aria-label":'Permalink to "创建 Maven 项目"'},"​")],-1),n("p",null,"Maven 是一个项目管理和综合工具。Maven 提供给开发人员构建一个完整的生命周期框架。 开发团队可以自动完成该项目的基础设施建设，Maven 使用标准的目录结构和默认构建生命周期。 Apache 的开源项目主要服务于 Java 平台的构建、依赖管理、项目管理。 Project Object Model，项目对象模型。通过 xml 格式保存的 pom.xml 文件。该文件用于管理：源代码、配置文 件、开发者的信息和角色、问题追踪系统、组织信息、项目授权、项目的 url、项目的依赖关系等等。该文件是由开发维护，我们运维人员可以不用去关心。",-1),n("p",null,[s("mvn package #会去 maven 的中央仓库去下载需要的依赖包和插件到.m2 目录下 \\5. 创建 Maven 私服 nexus 部署私服 xenus 下载 "),n("a",{href:"https://www.sonatype.com/download%E2%80%90oss%E2%80%90sonatype",target:"_blank",rel:"noreferrer"},"https://www.sonatype.com/download‐oss‐sonatype")],-1),n("p",null,"配置仓库两个选项 1、项目下的 pom.xml 配置、只生效当前的项目 2、在 maven 配置全局所有项目生效 上传 JDK 和 nexus 安装包",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"rpm ‐ivh jdk‐8u121‐linux‐x64.rpm")]),s(`
`),n("span",{class:"line"},[n("span",null,"mv nexus‐3.13.0‐01 /usr/local/")]),s(`
`),n("span",{class:"line"},[n("span",null,"ln ‐s /usr/local/nexus‐3.13.0‐01 /usr/local/nexus")]),s(`
`),n("span",{class:"line"},[n("span",null,"/usr/local/nexus/bin/nexus start")]),s(`
`),n("span",{class:"line"},[n("span",null,"10.0.0.202:8081 admin admin123")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"配置 Maven 全局配置文件",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"/usr/local/maven/conf/settings.xml")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"\\6. 创建一个 Maven 项目 创建前上传代码到 gitlab 服务器，把 java 项目添加到 gitlab 仓库中",-1),n("h4",{id:"_01-部署-maven",tabindex:"-1"},[s("01. 部署 Maven "),n("a",{class:"header-anchor",href:"#_01-部署-maven","aria-label":'Permalink to "01. 部署 Maven"'},"​")],-1),n("p",null,[s("官网： "),n("a",{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noreferrer"},"http://maven.apache.org/download.cgi"),s(" 清华镜像： "),n("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/apache/maven/",target:"_blank",rel:"noreferrer"},"https://mirrors.tuna.tsinghua.edu.cn/apache/maven/")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#上传软件包")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 8491533 2018-08-27 14:38 apache-maven-3.3.9-bin.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#解压")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# tar xf apache-maven-3.3.9-bin.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#改变目录位置")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins maven]# mv apache-maven-3.3.9 /usr/local/maven-3.3.9")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#软连接")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins maven]# ln -s /usr/local/maven-3.3.9 /usr/local/maven")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cd /usr/local/maven")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins maven]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 32")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 97 2019-11-20 21:55 bin")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 42 2019-11-20 21:55 boot")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 63 2015-11-11 00:38 conf")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 4096 2019-11-20 21:55 lib")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 19335 2015-11-11 00:44 LICENSE")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 182 2015-11-11 00:44 NOTICE")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 2541 2015-11-11 00:38 README.txt")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#设置环境变量")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@jenkins maven]# echo "export PATH=/usr/local/maven/bin/:$PATH" >>/etc/profile')]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins maven]# source /etc/profile")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#查看结果")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins maven]# mvn -v")]),s(`
`),n("span",{class:"line"},[n("span",null,"Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)")]),s(`
`),n("span",{class:"line"},[n("span",null,"Maven home: /usr/local/maven")]),s(`
`),n("span",{class:"line"},[n("span",null,"Java version: 1.8.0_181, vendor: Oracle Corporation")]),s(`
`),n("span",{class:"line"},[n("span",null,"Java home: /usr/java/jdk1.8.0_181-amd64/jre")]),s(`
`),n("span",{class:"line"},[n("span",null,"Default locale: en_US, platform encoding: UTF-8")]),s(`
`),n("span",{class:"line"},[n("span",null,'OS name: "linux", version: "3.10.0-957.el7.x86_64", arch: "amd64", family: "unix"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_02-编译测试",tabindex:"-1"},[s("02. 编译测试 "),n("a",{class:"header-anchor",href:"#_02-编译测试","aria-label":'Permalink to "02. 编译测试"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#上传一个简单的java项目包hello‐world.tar.gz进行解压")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 1325 2018-08-22 13:43 hello-world.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# tar xf hello-world.tar.gz ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# cd hello-world/")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"validate（验证）:   验证项目正确，并且所有必要信息可用。")]),s(`
`),n("span",{class:"line"},[n("span",null,"compile（编译）:  编译项目源码")]),s(`
`),n("span",{class:"line"},[n("span",null,"test（测试）:     使用合适的单元测试框架测试编译后的源码。")]),s(`
`),n("span",{class:"line"},[n("span",null,"package（打包）:   源码编译之后，使用合适的格式（例如JAR格式）对编译后的源码进行打包。")]),s(`
`),n("span",{class:"line"},[n("span",null,"integration‐test（集成测试）: 如果有需要，把包处理并部署到可以运行集成测试的环境中去。")]),s(`
`),n("span",{class:"line"},[n("span",null,"verify（验证）:   进行各种测试来验证包是否有效并且符合质量标准。")]),s(`
`),n("span",{class:"line"},[n("span",null,"install（安装）:   把包安装到本地仓库，使该包可以作为其他本地项目的依赖。")]),s(`
`),n("span",{class:"line"},[n("span",null,"deploy（部署）:   在集成或发布环境中完成，将最终软件包复制到远程存储库，以与其他开发人员和项目共享。")]),s(`
`),n("span",{class:"line"},[n("span",null,"mvn clean (清除) : 清除上次编译的结果")]),s(`
`),n("span",{class:"line"},[n("span",null,"#测试")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins hello-world]# mvn test")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#打包")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins hello-world]# mvn package  #会去maven的中央仓库去下载需要的依赖包和插件到.m2目录下")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#打包结果")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins hello-world]# ll target/")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 8")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 17 2019-11-20 22:13 classes")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 3130 2019-11-20 23:39 hello-world-1.0-SNAPSHOT.jar")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 28 2019-11-20 23:38 maven-archiver")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 35 2019-11-20 22:13 maven-status")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 2872 2019-11-20 23:38 original-hello-world-1.0-SNAPSHOT.jar")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 125 2019-11-20 22:14 surefire-reports")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 17 2019-11-20 22:13 test-classes")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_03-部署-tomcat-及数据库",tabindex:"-1"},[s("03. 部署 Tomcat 及数据库 "),n("a",{class:"header-anchor",href:"#_03-部署-tomcat-及数据库","aria-label":'Permalink to "03. 部署 Tomcat 及数据库"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#上传压缩包")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 9128610 Mar 27 2019 apache-tomcat-8.0.27.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 170023183 Aug 14 2018 jdk-8u181-linux-x64.rpm")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#安装JDK")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# rpm -ivh jdk-8u181-linux-x64.rpm ")]),s(`
`),n("span",{class:"line"},[n("span",null,"warning: jdk-8u181-linux-x64.rpm: Header V3 RSA/SHA256 Signature, key ID ec551f03: NOKEY")]),s(`
`),n("span",{class:"line"},[n("span",null,"Preparing... ################################# [100%]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Updating / installing...")]),s(`
`),n("span",{class:"line"},[n("span",null,"1:jdk1.8-2000:1.8.0_181-fcs ################################# [100%]")]),s(`
`),n("span",{class:"line"},[n("span",null,"Unpacking JAR files...")]),s(`
`),n("span",{class:"line"},[n("span",null," tools.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," plugin.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," javaws.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," deploy.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," rt.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," jsse.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," charsets.jar...")]),s(`
`),n("span",{class:"line"},[n("span",null," localedata.jar...")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#解压Tomcat")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# mkdir /application")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# tar xf apache-tomcat-8.0.27.tar.gz -C /application")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#创建软连接")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# ln -s /application/apache-tomcat-8.0.27 /application/tomcat")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#tomcat启动加速的方法")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# vim /usr/java/jdk1.8.0_181-amd64/jre/lib/security/java.security ")]),s(`
`),n("span",{class:"line"},[n("span",null,"117 securerandom.source=file:/dev/urandom #修改之后")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#启动tomcat")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# /application/tomcat/bin/startup.sh ")]),s(`
`),n("span",{class:"line"},[n("span",null,"Using CATALINA_BASE: /application/tomcat")]),s(`
`),n("span",{class:"line"},[n("span",null,"Using CATALINA_HOME: /application/tomcat")]),s(`
`),n("span",{class:"line"},[n("span",null,"Using CATALINA_TMPDIR: /application/tomcat/temp")]),s(`
`),n("span",{class:"line"},[n("span",null,"Using JRE_HOME: /usr")]),s(`
`),n("span",{class:"line"},[n("span",null,"Using CLASSPATH: /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar")]),s(`
`),n("span",{class:"line"},[n("span",null,"Tomcat started.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#检查端口")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# netstat -lntp")]),s(`
`),n("span",{class:"line"},[n("span",null,"Active Internet connections (only servers)")]),s(`
`),n("span",{class:"line"},[n("span",null,"Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp 0 0 0.0.0.0:22 0.0.0.0: LISTEN 6758/sshd ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp 0 0 127.0.0.1:25 0.0.0.0: LISTEN 7134/master ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp6 0 0 :::8009 ::: LISTEN 24383/java ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp6 0 0 :::8080 ::: LISTEN 24383/java ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp6 0 0 :::22 ::: LISTEN 6758/sshd ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp6 0 0 ::1:25 ::: LISTEN 7134/master ")]),s(`
`),n("span",{class:"line"},[n("span",null,"tcp6 0 0 127.0.0.1:8005 ::: LISTEN 24383/java")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#浏览器使用8080端口访问")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_137.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#为项目准备好数据库jeesns，设置数据库root用户密码为root")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#安装数据库")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# yum install mariadb-server -y")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# systemctl start mariadb.service ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# mysqladmin password 'root'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#创建jeesns库")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@tomcat ~]# mysql -uroot -proot -e "create database jeesns;"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#dev上面上传一个项目")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~]# ll")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 15376795 2019-03-27 17:33 jeesns.tar.gz")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~]# tar xf jeesns.tar.gz ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~]# cd jeesns/")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# git remote")]),s(`
`),n("span",{class:"line"},[n("span",null,"origin")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# git remote remove origin ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# ll jeesns-web/database/")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 40")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rwxr-xr-x 1 root root 28667 2018-11-19 15:01 jeesns.sql")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 3491 2018-11-19 15:01 update_1.2.0to1.2.1.sql")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 1026 2018-11-19 15:01 update_1.2.1to1.3.sql")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 1344 2018-11-19 15:01 update_1.3to1.3.1.sql")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#将该数据库传输到tomcat节点进行导入")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# scp jeesns-web/database/jeesns.sql root@10.0.0.80:~")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#导入数据库")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# mysql -uroot -proot jeesns < jeesns.sql ")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@tomcat ~]# mysql -uroot -proot -e "use jeesns; show tables"')]),s(`
`),n("span",{class:"line"},[n("span",null,"+---------------------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"| Tables_in_jeesns |")]),s(`
`),n("span",{class:"line"},[n("span",null,"+---------------------------+")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_action |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_action_log |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_ads |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_archive |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_archive_favor |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_article |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_article_cate |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_article_comment |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_checkin |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_config |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_group |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_group_fans |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_group_topic |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_group_topic_comment |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_group_topic_type |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_group_type |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_link |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_member |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_member_fans |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_member_level |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_member_token |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_memgroup |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_message |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture_album |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture_album_comment |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture_album_favor |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture_comment |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture_favor |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_picture_tag |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_score_detail |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_score_rule |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_tag |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_validate_code |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_weibo |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_weibo_comment |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_weibo_favor |")]),s(`
`),n("span",{class:"line"},[n("span",null,"| tbl_weibo_topic |")]),s(`
`),n("span",{class:"line"},[n("span",null,"+---------------------------+")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#打包jeesns项目")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# mvn package")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#打包之后生成的war包")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# ll jeesns-web/target/")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 25496")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 4 root root 181 2019-11-20 23:19 classes")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 25 2019-11-20 23:19 generated-sources")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 5 root root 104 2019-11-20 23:19 jeesns-web")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 26106028 2019-11-20 23:20 jeesns-web.war")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 2 root root 28 2019-11-20 23:19 maven-archiver")]),s(`
`),n("span",{class:"line"},[n("span",null,"drwxr-xr-x 3 root root 35 2019-11-20 23:19 maven-status")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#将其手动传输到tomcat节点上面测试")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# scp jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#浏览器刷新测试")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h4",{id:"_04-创建一个-jeesns-项目",tabindex:"-1"},[s("04. 创建一个 jeesns 项目 "),n("a",{class:"header-anchor",href:"#_04-创建一个-jeesns-项目","aria-label":'Permalink to "04. 创建一个 jeesns 项目"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#清除上次编译的结果")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# mvn clean")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# git remote remove origin")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# ")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# git remote add origin git@10.0.0.100:OPS/jeesns.git")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# git add .")]),s(`
`),n("span",{class:"line"},[n("span",null,'[root@git ~/jeesns]# git commit -m "Initial commit"')]),s(`
`),n("span",{class:"line"},[n("span",null,"# On branch master")]),s(`
`),n("span",{class:"line"},[n("span",null,"nothing to commit, working directory clean")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@git ~/jeesns]# git push -u origin master")]),s(`
`),n("span",{class:"line"},[n("span",null,"Counting objects: 1946, done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Compressing objects: 100% (1862/1862), done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Writing objects: 100% (1946/1946), 7.09 MiB | 7.25 MiB/s, done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"Total 1946 (delta 285), reused 0 (delta 0)")]),s(`
`),n("span",{class:"line"},[n("span",null,"remote: Resolving deltas: 100% (285/285), done.")]),s(`
`),n("span",{class:"line"},[n("span",null,"To git@10.0.0.100:OPS/jeesns.git")]),s(`
`),n("span",{class:"line"},[n("span",null," [new branch] master -> master")]),s(`
`),n("span",{class:"line"},[n("span",null,"Branch master set up to track remote branch master from origin.")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_05-jenkins-创建一个-maven",tabindex:"-1"},[s("05. Jenkins 创建一个 maven "),n("a",{class:"header-anchor",href:"#_05-jenkins-创建一个-maven","aria-label":'Permalink to "05. Jenkins 创建一个 maven"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_140.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h1",{id:"此处如果出现报错-请添加-deploy-keys",tabindex:"-1"},[s("此处如果出现报错，请添加 Deploy Keys "),n("a",{class:"header-anchor",href:"#此处如果出现报错-请添加-deploy-keys","aria-label":'Permalink to "此处如果出现报错，请添加 Deploy Keys"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_141.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_142.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_143.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#发现已经打包成功了")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ll /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war ")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 26106007 2019-11-23 11:49 /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#jenkins用户给tomcat节点进行分发公钥")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"[root@jenkins ~]# ssh-copy-id -i .ssh/id_rsa.pub root@10.0.0.80 ")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"#构建后操作")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'ssh root@10.0.0.80 "mv /application/tomcat/webapps/ROOT.war /tmp/$BUILD_ID-ROOT.war" ')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"scp /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_144.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_145.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"[root@tomcat ~]# ll /tmp/ ")]),s(`
`),n("span",{class:"line"},[n("span",null,"total 50992 ")]),s(`
`),n("span",{class:"line"},[n("span",null,"-rw-r--r-- 1 root root 26106004 2019-11-23 01:28 2-ROOT.war")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_146.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h1",{id:"pipeline-项目",tabindex:"-1"},[s("Pipeline 项目 "),n("a",{class:"header-anchor",href:"#pipeline-项目","aria-label":'Permalink to "Pipeline 项目"'},"​")],-1),n("h4",{id:"_01-基础概念",tabindex:"-1"},[s("01. 基础概念 "),n("a",{class:"header-anchor",href:"#_01-基础概念","aria-label":'Permalink to "01. 基础概念"'},"​")],-1),n("p",null,[n("strong",null,"CI/CD 持续集成 / 持续部署")],-1),n("p",null,"持续集成 (Continuous integration) 是一种软件开发实践，即团队开发成员经常集成它们的工作，通过每个成员",-1),n("p",null,"每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动",-1),n("p",null,"化测试）来验证，从而尽早地发现集成错误。",-1),n("p",null,"比如（你家装修厨房，其中一项是铺地砖，边角地砖要切割大小。如果一次全切割完再铺上去，发现尺寸有误的话",-1),n("p",null,"浪费和返工时间就大了，不如切一块铺一块。这就是持续集成。）",-1),n("p",null,"持续部署（continuous deployment）是通过自动化的构建、测试和部署循环来快速交付高质量的产品。某种程度上代表了一个开发团队工程化的程度，毕竟快速运转的互联网公司人力成本会高于机器，投资机器优化开发流程化",-1),n("p",null,"相对也提高了人的效率。",-1),n("p",null,"比如（装修厨房有很多部分，每个部分都有检测手段，如地砖铺完了要测试漏水与否，线路铺完了要通电测试电路",-1),n("p",null,"通顺，水管装好了也要测试冷水热水。如果全部装完了再测，出现问题可能会互相影响，比如电路不行可能要把地",-1),n("p",null,"砖给挖开……。那么每完成一部分就测试，这是持续部署。）",-1),n("p",null,"持续交付 Continuous Delivery: 频繁地将软件的新版本，交付给质量团队或者用户，以供评审尽早发现生产环境中存在的问题；如果评审通过，代码就进入生产阶段.",-1),n("p",null,"比如（全部装修完了，你去验收，发现地砖颜色不合意，水池太小，灶台位置不对，返工吗？所以不如没完成一部",-1),n("p",null,"分，你就去用一下试用验收，这就是持续交付。）",-1),n("p",null,"敏捷思想中提出的这三个观点，还强调一件事：通过技术手段自动化这三个工作。加快交付速度。",-1),n("p",null,"\\1. 什么是 pipeline",-1),n("p",null,"Jenkins 2.0 的精髓是 Pipeline as Code，是帮助 Jenkins 实现 CI 到 CD 转变的重要角色。什么是 Pipeline，简单来说，就是一套运行于 Jenkins 上的工作流框架，将原本独立运行于单个或者多个节点的任务连接起来，实现单个",-1),n("p",null,"任务难以完成的复杂发布流程。Pipeline 的实现方式是一套 Groovy DSL，任何发布流程都可以表述为一段 Groovy 脚本，并且 Jenkins 支持从代码库直接读取脚本，从而实现了 Pipeline as Code 的理念。",-1),n("p",null,"2.Pipeline 概念",-1),n("p",null,"Pipeline 是一个用户定义的 CD 流水线模式。Pipeline 代码定义了通常包含构建、测试和发布步骤的完整的构",-1),n("p",null,"建过程。",-1),n("p",null,"Node node 是一个机器，它是 Jenkins 环境的一部分，并且能够执行 Pipeline。同时，node 代码块也是脚本式",-1),n("p",null,"Pipeline 语法的关键特性。",-1),n("p",null,'Stage Stage 块定义了在整个 Pipeline 中执行的概念上不同的任务子集（例如 "构建"，"测试" 和 "部署" 阶段），',-1),n("p",null,"许多插件使用它来可视化或呈现 Jenkins 管道状态 / 进度。",-1),n("p",null,'Step 一项任务。从根本上讲，一个步骤告诉 Jenkins 在特定时间点（或过程中的 "步骤"）要做什么。例如，使用',-1),n("p",null,"sh step：sh 'make' 可以执行 make 这个 shell 命令。",-1),n("p",null,"3.jenkins file 声明式 脚本式",-1),n("p",null,"脚本式语法格式：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"pipeline{ ")]),s(`
`),n("span",{class:"line"},[n("span",null," agent any ")]),s(`
`),n("span",{class:"line"},[n("span",null,"stages{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("get code"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,'     echo "get code from scm" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("package"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,'   echo "packge code" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("deploy"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,'     echo "deploy packge to node1" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"_02-创建-pipeline-项目",tabindex:"-1"},[s("02. 创建 pipeline 项目 "),n("a",{class:"header-anchor",href:"#_02-创建-pipeline-项目","aria-label":'Permalink to "02. 创建 pipeline 项目"'},"​")],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_147.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_148.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_149.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"在仓库创建一个 Jenkinsfile 文件进行调用",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_150.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"编辑 Jenkinsfile 文件",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"pipeline{ ")]),s(`
`),n("span",{class:"line"},[n("span",null," agent any ")]),s(`
`),n("span",{class:"line"},[n("span",null,"stages{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("get code"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,'     echo "get code" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("unit test"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,'   echo "unit test" ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("package"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null," sh 'tar zcf /opt/web-${BUILD_ID}.tar.gz ./ --exclude=./.git --exclude=Jenkinsfile' ")]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,' stage("deploy"){ ')]),s(`
`),n("span",{class:"line"},[n("span",null,"   steps{ ")]),s(`
`),n("span",{class:"line"},[n("span",null,`     sh 'ssh 10.0.0.80 "mkdir /opt/web-\${BUILD_ID}"' `)]),s(`
`),n("span",{class:"line"},[n("span",null,"     sh 'scp /opt/web-${BUILD_ID}.tar.gz 10.0.0.80:/opt' ")]),s(`
`),n("span",{class:"line"},[n("span",null,`     sh 'ssh 10.0.0.80 "tar xf /opt/web-\${BUILD_ID}.tar.gz -C /code"' `)]),s(`
`),n("span",{class:"line"},[n("span",null,"   } ")]),s(`
`),n("span",{class:"line"},[n("span",null," } ")]),s(`
`),n("span",{class:"line"},[n("span",null,"} ")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_153.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"执行构建报错",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_154.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("p",null,"修改脚本再次构建",-1),n("figure",null,[n("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_155.png",alt:"img",loading:"lazy",decoding:"async"})],-1),n("h1",{id:"回滚脚本",tabindex:"-1"},[s("回滚脚本 "),n("a",{class:"header-anchor",href:"#回滚脚本","aria-label":'Permalink to "回滚脚本"'},"​")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#!/bin/bash")]),s(`
`),n("span",{class:"line"},[n("span",null,"cd /usr/share/nginx")]),s(`
`),n("span",{class:"line"},[n("span",null,"ls -d web-*")]),s(`
`),n("span",{class:"line"},[n("span",null,'read -p "请复制你需要回滚的目录版本" ver')]),s(`
`),n("span",{class:"line"},[n("span",null,"rm -rf html*")]),s(`
`),n("span",{class:"line"},[n("span",null,"ln -s $ver html")])])]),n("button",{class:"code-block-unfold-btn"})],-1)])]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content-before":l(()=>[e(a.$slots,"main-content-before")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{M as default,_ as usePageData};
