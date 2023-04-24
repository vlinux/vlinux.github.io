import{_ as r}from"./ValaxyMain.vue_vue_type_style_index_0_lang-9abaf40c.js";import{_ as C,c as A,w as l,o as g,b as s,U as n,q as e,r as t,W as m,p as y}from"./app-72d5294e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-aa07348b.js";import"./YunCard.vue_vue_type_style_index_0_lang-b9c57d9f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-538d271c.js";const Hl=JSON.parse('{"title":"Jenkins（CA/CI）部署","description":"","frontmatter":{"title":"Jenkins（CA/CI）部署","categories":"DevOps","tags":["Jenkins","CA","CI","Maven","Pipeline项目","回滚脚本"],"date":"2020-03-10T20:13:00.000Z"},"headers":[{"level":3,"title":"Jenkins","slug":"jenkins","link":"#jenkins","children":[]}],"relativePath":"pages/posts/Jenkins（CA-CI）部署.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Jenkins（CA-CI）部署.md","lastUpdated":1675833042000}'),c=JSON.parse('{"title":"Jenkins（CA/CI）部署","description":"","frontmatter":{"title":"Jenkins（CA/CI）部署","categories":"DevOps","tags":["Jenkins","CA","CI","Maven","Pipeline项目","回滚脚本"],"date":"2020-03-10T20:13:00.000Z"},"headers":[{"level":3,"title":"Jenkins","slug":"jenkins","link":"#jenkins","children":[]}],"relativePath":"pages/posts/Jenkins（CA-CI）部署.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Jenkins（CA-CI）部署.md","lastUpdated":1675833042000}'),d={name:"pages/posts/Jenkins（CA-CI）部署.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){y("pageData",c)}},_={id:"jenkins",tabindex:"-1"},D=s("p",null,"官网",-1),u=s("p",null,"Jenkins 是一个开源软件项目，是基于 Java 开发的一种持续集成工具，用于监控持续重复的工作，指在提供一个开 放易用的软件平台，使软件的持续集成变成可能。",-1),h={id:"_01-安装准备",tabindex:"-1"},w=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"主机"),s("th",null,"IP"),s("th",null,"内存"),s("th",null,"硬盘")])]),s("tbody",null,[s("tr",null,[s("td",null,"Jenkins"),s("td",null,"10.0.0.201"),s("td",null,"2G"),s("td",null,"50G+")]),s("tr",null,[s("td",null,"nexus"),s("td",null,"10.0.0.202"),s("td",null,"2G"),s("td",null,"50G+")])])],-1),b={id:"_02-安装-jdk-和-jenkins",tabindex:"-1"},v=s("p",null,"上传 JDK 和 Jenkins 安装包，使用 rpm ‐ivh 进行安装，安装完 JDK 运行 Java 测试是否安装成功",-1),k=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 170023183 2018-08-14 11:05 jdk-8u181-linux-x64.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 74141787 2018-08-13 20:23 jenkins-2.99-1.1.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# rpm -ivh jdk-8u181-linux-x64.rpm ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"warning: jdk-8u181-linux-x64.rpm: Header V3 RSA/SHA256 Signature, key ID ec551f03: NOKEY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Preparing... ################################# [100%]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Updating / installing...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1:jdk1.8-2000:1.8.0_181-fcs ################################# [100%]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Unpacking JAR files...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," tools.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," plugin.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," javaws.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," deploy.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," rt.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," jsse.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," charsets.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," localedata.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# rpm -ivh jenkins-2.99-1.1.noarch.rpm ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"warning: jenkins-2.99-1.1.noarch.rpm: Header V4 DSA/SHA1 Signature, key ID d50582e6: NOKEY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Preparing... ################################# [100%]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Updating / installing...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1:jenkins-2.99-1.1 ################################# [100%]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),x={id:"_03-配置-jenkins",tabindex:"-1"},j=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#启动用户修改为root")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# grep 'root' /etc/sysconfig/jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'JENKINS_USER="root"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#启动")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# systemctl start jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#查看端口")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# netstat -lntp | grep 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::8080 ::: LISTEN 8504/java")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#查看进程")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ps aux |grep jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 8504 8.8 11.6 2618104 235556 ? Ssl 15:29 0:25 /etc/alternatives/java -Dcom.sun.akuma.Daemon=daemonized -Djava.awt.headless=true -DJENKINS_HOME=/var/lib/jenkins -jar /usr/lib/jenkins/jenkins.war --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war --daemon --httpPort=8080 --debug=5 --handlerCountMax=100 --handlerCountMaxIdle=20")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#访问页面进行配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http://10.0.0.201:8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#查看密码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cat /var/lib/jenkins/secrets/initialAdminPassword")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"e8e69c5646cc4f3b88315fb20156ce6c")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),f=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_88.png",alt:"img"})],-1),S=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_89.png",alt:"img"})],-1),I=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_90.png",alt:"img"})],-1),J=s("p",null,"修改密码",-1),T=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_91.png",alt:"img"})],-1),O={id:"_04-插件安装",tabindex:"-1"},N=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#插件安装（跳过安装插件，直接上传插件到目录）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.自动安装可选插件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.手动下载插件上传安装")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.插件放入插件目录")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cd /var/lib/jenkins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins jenkins]# ll         #jobs为每次构建后构建的结果目录，plugins为插件目录")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"总用量 36")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐‐‐‐‐‐‐ 1 root root 1822 8月 26 00:35 config.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐‐‐‐‐‐‐ 1 root root 156 8月 26 00:31 hudson.model.UpdateCenter.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐‐‐‐‐‐‐ 1 root root 1712 8月 26 00:32 identity.key.enc")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐‐‐‐‐‐‐ 1 root root 94 8月 26 00:32 jenkins.CLI.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐r‐‐r‐‐ 1 root root 4 8月 26 00:35 jenkins.install.InstallUtil.lastExecVersion")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐r‐‐r‐‐ 1 root root 4 8月 26 00:35 jenkins.install.UpgradeWizard.state")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr‐xr‐x 2 root root 6 8月 26 00:31 jobs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr‐xr‐x 3 root root 18 8月 26 00:32 logs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐‐‐‐‐‐‐ 1 root root 907 8月 26 00:32 nodeMonitors.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr‐xr‐x 2 root root 6 8月 26 00:32 nodes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr‐xr‐x 2 root root 6 8月 26 00:31 plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐‐‐‐‐‐‐ 1 root root 64 8月 26 00:31 secret.key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"‐rw‐r‐‐r‐‐ 1 root root 0 8月 26 00:31 secret.key.not‐so‐secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwx‐‐‐‐‐‐ 4 root root 4096 8月 26 00:32 secrets")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr‐xr‐x 2 root root 23 8月 26 00:32 userContent")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr‐xr‐x 3 root root 18 8月 26 00:34 users")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#上传插件包解压到plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins jenkins]# cd plugins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 160580")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 164431230 2018-08-14 21:00 plugins.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# tar xf plugins.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# rm -f plugins.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# mv plugins/ ./")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# rm -rf plugins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#重启生效")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# systemctl restart jenkins.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),z=s("p",null,"4.jenkins 主要的目录",-1),E=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/lib/jenkins/：          #jenkins安装目录，WAR包会放在这里")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'/etc/sysconfig/jenkins：        #jenkins配置文件，"端口"，"JENKINS_HOME"等都可以在这里配置')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/lib/jenkins/：          #默认的JENKINS_HOME")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/log/jenkins/jenkins.log：    #Jenkins日志文件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),P=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_92.png",alt:"img"})],-1),U={id:"_05-创建项目",tabindex:"-1"},H=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_93.png",alt:"img"})],-1),M=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_94.png",alt:"img"})],-1),R=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_95.png",alt:"img"})],-1),L=s("p",null,"进行构建",-1),B=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_96.png",alt:"img"})],-1),$=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_97.png",alt:"img"})],-1),W=s("p",null,"进入控制台",-1),q=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_98.png",alt:"img"})],-1),K=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_99.png",alt:"img"})],-1),G=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),F=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_100.png",alt:"img"})],-1),V=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_101.png",alt:"img"})],-1),Q=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_102.png",alt:"img"})],-1),Y=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_103.png",alt:"img"})],-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 0 2019-11-19 16:19 test.txt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z={id:"_06-jenkins-获取-git-源代码",tabindex:"-1"},ss=s("p",null,"这里我们有码云导入一个 HTML 页面的监控平台到 gitlab 仓库，打开码云，找到一个大转盘项目，将其代码路径进行复制",-1),ns=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_104.png",alt:"img"})],-1),ls=s("p",null,"在 Gitlab 上面新创建一个项目仓库。将源代码导入进去。",-1),as=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_105.png",alt:"img"})],-1),es=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_106.png",alt:"img"})],-1),os=s("p",null,"dev 用户端配置从 git 获取代码。",-1),ts=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~]# git clone git@10.0.0.100:OPS/dzp.git ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Cloning into 'dzp'... ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"remote: Counting objects: 19, done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"remote: Compressing objects: 100% (15/15), done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"remote: Total 19 (delta 2), reused 0 (delta 0) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Receiving objects: 100% (19/19), 104.36 KiB | 0 bytes/s, done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Resolving deltas: 100% (2/2), done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~]# ll ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 6 root root 87 Nov 19 20:41 dzp ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 52 Nov 17 17:21 git_test ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~]# cd dzp/ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# ll ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 8 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 25 Nov 19 20:41 css ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 84 Nov 19 20:41 img ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 41 Nov 19 20:41 js ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 2170 Nov 19 20:41 lottery.html ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 113 Nov 19 20:41 README.md ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dev用户修改了源代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# vim lottery.html ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@dev ~/dzp]# git commit -am "modify html" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[master 1e2125e] modify html ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 file changed, 5 insertions(+), 5 deletions(-) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# git push -u origin master ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Counting objects: 5, done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Compressing objects: 100% (3/3), done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Writing objects: 100% (3/3), 365 bytes | 0 bytes/s, done. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Total 3 (delta 2), reused 0 (delta 0) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To git@10.0.0.100:OPS/dzp.git ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3935eb7..1e2125e master -> master ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Branch master set up to track remote branch master from origin.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cs=s("p",null,"Jenkins 配置从 Git 获取代码，由于我们 dev 用户不是配置在 Jenkins 上，所以需认证即可下载代码。进行面认证方法，需要配置 deploy key",-1),is=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ssh-keygen -t rsa ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Generating public/private rsa key pair. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Enter file in which to save the key (/root/.ssh/id_rsa): ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Enter passphrase (empty for no passphrase): ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Enter same passphrase again: ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Your identification has been saved in /root/.ssh/id_rsa. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Your public key has been saved in /root/.ssh/id_rsa.pub. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"The key fingerprint is: ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SHA256:1z+H0mc9hUwOWiO3mFOGswuOW9jNr2bmOwRE50eECQU root@jenkins ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"The key's randomart image is: ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---[RSA 2048]----+ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| .E+o+o | ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| .ooo | ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| . = O . | ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| . # B . | ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| S.B o + .| ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| = =.o o .o| ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| o +.+ . =.=| ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| o =. . =.| ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| . =++. | ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----[SHA256]-----+ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cat .ssh/ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"id_rsa id_rsa.pub known_hosts ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cat .ssh/id_rsa.pub ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCY3WrgTCmZeapjV9Tx6GmmHX+SVigxHnz37f8iUUjAexmR2/gSAjvsY3ez5iITmamf2I62+5n+gx9f1OPXUsUAzOApD6R8zHmvzQ/yheDO1y5XHcmRtklN1HpOq2g0PChrRjrr4QcXITKafU30OjTu4Fx3vndxqD/3RpHD3IVSZGAsiJC6T+C/PYW8YfeLNEAA7O3QKskjuSkoH2PZyF7qQgwjxfudno1g3qLQkmB+CjFFwgj0vkam/W4OwUwapC1O591CU7+VmSWL/z8uMTpSV+FQkyH04qS/HSs27pfpAI0wpBB/gBxx+wU8FCUh++2SWpuJR8/TPqkS8YKhfl+p root@jenkins  #复制该串代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ps=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_107.png",alt:"img"})],-1),rs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_108.png",alt:"img"})],-1),Cs=s("p",null,"Jenkins 配置从 Git 获取代码，配置好后保存",-1),As=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_109.png",alt:"img"})],-1),gs={id:"_07-立即构建获取源代码",tabindex:"-1"},ms=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_110.png",alt:"img"})],-1),ys=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_111.png",alt:"img"})],-1),ds=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_112.png",alt:"img"})],-1),_s=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Jenkins服务器查看代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll /var/lib/jenkins/workspace/freestyle-job/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 25 2019-11-19 21:12 css")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 84 2019-11-19 21:12 img")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 41 2019-11-19 21:12 js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 2205 2019-11-19 21:12 lottery.html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 113 2019-11-19 21:12 README.md")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ds={id:"_08-jenkins-代码推送到-web",tabindex:"-1"},us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#写一个脚本把从git仓库里获取的代码上传到web服务器站点目录下")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# mkdir -p /server/script ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cd /server/script ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins script]# vim deploy.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins script]# cat deploy.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date=$(date +%s) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Dir=/var/lib/jenkins/workspace/freestyle-job ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Web_Dir=/code ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Ip=10.0.0.202 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Tar() { ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," cd Code_Dir && tar zcf /opt/web_Code_Dir && tar zcf /opt/web_{Date}.tar.gz ./ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Scp_Code_Web() { ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," scp /opt/web_Date.tar.gzroot@Date.tar.gzroot@{Ip}:/opt ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Tar_Xf() { ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' ssh root@Ip " cd /opt && mkdir web_Ip " cd /opt && mkdir web_Date && tar xf web_{Date}.tar.gz -C web_{Date}.tar.gz -C web_Date " ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Ln_Html() { ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' ssh root@Ip"rm−rfIp"rm−rfWeb_Dir && ln -s /opt/web_$Date /code " ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Tar; ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Scp_Code_Web; ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Tar_Xf; ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Ln_Html ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#分发公钥")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins script]# ssh-copy-id -i /root/.ssh/id_rsa.pub root@10.0.0.202 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"The authenticity of host '10.0.0.202 (10.0.0.202)' can't be established. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ECDSA key fingerprint is SHA256:K8NapPzlTxhCMXC/bRFTtI9mdwr63FH4Wu7psrXXqBs. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ECDSA key fingerprint is MD5:73:9f:67:f1:5d:39:10:3d:b2:be:f7:c1:66:aa:00:6e. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Are you sure you want to continue connecting (yes/no)? yes ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@10.0.0.202's password: ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Number of key(s) added: 1 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`Now try logging into the machine, with: "ssh 'root@10.0.0.202'" `)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"and check to make sure that only the key(s) you wanted were added. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins script]# ssh root@10.0.0.202 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last login: Tue Nov 19 15:10:55 2019 from 10.0.0.1 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@nexus ~]# logout ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection to 10.0.0.202 closed. ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Jenkins上面添加脚本进行构建")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_113.png",alt:"img"})],-1),ws=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_114.png",alt:"img"})],-1),bs=s("p",null,"查看网站是否更新成功",-1),vs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_115.png",alt:"img"})],-1),ks={id:"_09-配置自动触发构建",tabindex:"-1"},xs={id:"需要设置安全令牌-secret-token",tabindex:"-1"},js=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_116.png",alt:"img"})],-1),fs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_117.png",alt:"img"})],-1),Ss=s("p",null,"Gitlab 上面操作",-1),Is=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_118.png",alt:"img"})],-1),Js=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_119.png",alt:"img"})],-1),Ts=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_120.png",alt:"img"})],-1),Os={id:"_10-测试是否触发",tabindex:"-1"},Ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dev用户修改源代码后进行推送测试是否自动触发")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# vim lottery.html ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@dev ~/dzp]# git commit -am "modify html test"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[master d8849aa] modify html test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 file changed, 3 insertions(+), 3 deletions(-)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~/dzp]# git push -u origin master")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Counting objects: 5, done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Compressing objects: 100% (3/3), done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Writing objects: 100% (3/3), 303 bytes | 0 bytes/s, done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Total 3 (delta 2), reused 0 (delta 0)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To git@10.0.0.100:OPS/dzp.git")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1e2125e..d8849aa master -> master")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Branch master set up to track remote branch master from origin.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_121.png",alt:"img"})],-1),Es=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_122.png",alt:"img"})],-1),Ps={id:"_11-返回构建状态",tabindex:"-1"},Us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Jenkins配置Jenkins返回构建状态到Gitlab")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#先获得gitlab的token")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_123.png",alt:"img"})],-1),Ms=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_124.png",alt:"img"})],-1),Rs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_125.png",alt:"img"})],-1),Ls=s("p",null,"将获得的 token 值进行复制备用",-1),Bs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_126.png",alt:"img"})],-1),$s=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_127.png",alt:"img"})],-1),Ws=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_128.png",alt:"img"})],-1),qs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_129.png",alt:"img"})],-1),Ks=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_130.png",alt:"img"})],-1),Gs=s("p",null,"进行测试",-1),Fs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_131.png",alt:"img"})],-1),Vs=s("p",null,"添加构建后操作",-1),Qs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_132.png",alt:"img"})],-1),Ys=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_133.png",alt:"img"})],-1),Xs=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_134.png",alt:"img"})],-1),Zs=s("p",null,"检查结果",-1),sn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_135.png",alt:"img"})],-1),nn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_136.png",alt:"img"})],-1),ln={id:"创建-maven-项目",tabindex:"-1"},an=s("p",null,"Maven 是一个项目管理和综合工具。Maven 提供给开发人员构建一个完整的生命周期框架。 开发团队可以自动完成该项目的基础设施建设，Maven 使用标准的目录结构和默认构建生命周期。 Apache 的开源项目主要服务于 Java 平台的构建、依赖管理、项目管理。 Project Object Model，项目对象模型。通过 xml 格式保存的 pom.xml 文件。该文件用于管理：源代码、配置文 件、开发者的信息和角色、问题追踪系统、组织信息、项目授权、项目的 url、项目的依赖关系等等。该文件是由开发维护，我们运维人员可以不用去关心。",-1),en=s("p",null,"配置仓库两个选项 1、项目下的 pom.xml 配置、只生效当前的项目 2、在 maven 配置全局所有项目生效 上传 JDK 和 nexus 安装包",-1),on=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rpm ‐ivh jdk‐8u121‐linux‐x64.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mv nexus‐3.13.0‐01 /usr/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ln ‐s /usr/local/nexus‐3.13.0‐01 /usr/local/nexus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/nexus/bin/nexus start")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.202:8081 admin admin123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tn=s("p",null,"配置 Maven 全局配置文件",-1),cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/maven/conf/settings.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pn=s("p",null,"\\6. 创建一个 Maven 项目 创建前上传代码到 gitlab 服务器，把 java 项目添加到 gitlab 仓库中",-1),rn={id:"_01-部署-maven",tabindex:"-1"},Cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#上传软件包")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 8491533 2018-08-27 14:38 apache-maven-3.3.9-bin.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#解压")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# tar xf apache-maven-3.3.9-bin.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#改变目录位置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# mv apache-maven-3.3.9 /usr/local/maven-3.3.9")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#软连接")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# ln -s /usr/local/maven-3.3.9 /usr/local/maven")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cd /usr/local/maven")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 32")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 97 2019-11-20 21:55 bin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 42 2019-11-20 21:55 boot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 63 2015-11-11 00:38 conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 4096 2019-11-20 21:55 lib")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 19335 2015-11-11 00:44 LICENSE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 182 2015-11-11 00:44 NOTICE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 2541 2015-11-11 00:38 README.txt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置环境变量")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@jenkins maven]# echo "export PATH=/usr/local/maven/bin/:$PATH" >>/etc/profile')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# source /etc/profile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#查看结果")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# mvn -v")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Maven home: /usr/local/maven")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Java version: 1.8.0_181, vendor: Oracle Corporation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Java home: /usr/java/jdk1.8.0_181-amd64/jre")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Default locale: en_US, platform encoding: UTF-8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OS name: "linux", version: "3.10.0-957.el7.x86_64", arch: "amd64", family: "unix"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),An={id:"_02-编译测试",tabindex:"-1"},gn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#上传一个简单的java项目包hello‐world.tar.gz进行解压")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 1325 2018-08-22 13:43 hello-world.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# tar xf hello-world.tar.gz ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cd hello-world/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"validate（验证）:   验证项目正确，并且所有必要信息可用。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"compile（编译）:  编译项目源码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"test（测试）:     使用合适的单元测试框架测试编译后的源码。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"package（打包）:   源码编译之后，使用合适的格式（例如JAR格式）对编译后的源码进行打包。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"integration‐test（集成测试）: 如果有需要，把包处理并部署到可以运行集成测试的环境中去。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"verify（验证）:   进行各种测试来验证包是否有效并且符合质量标准。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"install（安装）:   把包安装到本地仓库，使该包可以作为其他本地项目的依赖。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deploy（部署）:   在集成或发布环境中完成，将最终软件包复制到远程存储库，以与其他开发人员和项目共享。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mvn clean (清除) : 清除上次编译的结果")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#测试")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins hello-world]# mvn test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#打包")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins hello-world]# mvn package  #会去maven的中央仓库去下载需要的依赖包和插件到.m2目录下")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#打包结果")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins hello-world]# ll target/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 17 2019-11-20 22:13 classes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3130 2019-11-20 23:39 hello-world-1.0-SNAPSHOT.jar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 28 2019-11-20 23:38 maven-archiver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 35 2019-11-20 22:13 maven-status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 2872 2019-11-20 23:38 original-hello-world-1.0-SNAPSHOT.jar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 125 2019-11-20 22:14 surefire-reports")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 17 2019-11-20 22:13 test-classes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mn={id:"_03-部署-tomcat-及数据库",tabindex:"-1"},yn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#上传压缩包")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 9128610 Mar 27 2019 apache-tomcat-8.0.27.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 170023183 Aug 14 2018 jdk-8u181-linux-x64.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#安装JDK")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# rpm -ivh jdk-8u181-linux-x64.rpm ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"warning: jdk-8u181-linux-x64.rpm: Header V3 RSA/SHA256 Signature, key ID ec551f03: NOKEY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Preparing... ################################# [100%]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Updating / installing...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1:jdk1.8-2000:1.8.0_181-fcs ################################# [100%]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Unpacking JAR files...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," tools.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," plugin.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," javaws.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," deploy.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," rt.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," jsse.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," charsets.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," localedata.jar...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#解压Tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# mkdir /application")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# tar xf apache-tomcat-8.0.27.tar.gz -C /application")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#创建软连接")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# ln -s /application/apache-tomcat-8.0.27 /application/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#tomcat启动加速的方法")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# vim /usr/java/jdk1.8.0_181-amd64/jre/lib/security/java.security ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"117 securerandom.source=file:/dev/urandom #修改之后")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#启动tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# /application/tomcat/bin/startup.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CATALINA_BASE: /application/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CATALINA_HOME: /application/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CATALINA_TMPDIR: /application/tomcat/temp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using JRE_HOME: /usr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CLASSPATH: /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Tomcat started.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#检查端口")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# netstat -lntp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Active Internet connections (only servers)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp 0 0 0.0.0.0:22 0.0.0.0: LISTEN 6758/sshd ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp 0 0 127.0.0.1:25 0.0.0.0: LISTEN 7134/master ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::8009 ::: LISTEN 24383/java ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::8080 ::: LISTEN 24383/java ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::22 ::: LISTEN 6758/sshd ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 ::1:25 ::: LISTEN 7134/master ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 127.0.0.1:8005 ::: LISTEN 24383/java")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#浏览器使用8080端口访问")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_137.png",alt:"img"})],-1),_n=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#为项目准备好数据库jeesns，设置数据库root用户密码为root")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#安装数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# yum install mariadb-server -y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# systemctl start mariadb.service ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# mysqladmin password 'root'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#创建jeesns库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@tomcat ~]# mysql -uroot -proot -e "create database jeesns;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dev上面上传一个项目")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 15376795 2019-03-27 17:33 jeesns.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~]# tar xf jeesns.tar.gz ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~]# cd jeesns/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# git remote")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"origin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# git remote remove origin ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# ll jeesns-web/database/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 40")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rwxr-xr-x 1 root root 28667 2018-11-19 15:01 jeesns.sql")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3491 2018-11-19 15:01 update_1.2.0to1.2.1.sql")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 1026 2018-11-19 15:01 update_1.2.1to1.3.sql")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 1344 2018-11-19 15:01 update_1.3to1.3.1.sql")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#将该数据库传输到tomcat节点进行导入")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# scp jeesns-web/database/jeesns.sql root@10.0.0.80:~")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#导入数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# mysql -uroot -proot jeesns < jeesns.sql ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@tomcat ~]# mysql -uroot -proot -e "use jeesns; show tables"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Tables_in_jeesns |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_action |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_action_log |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_ads |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_archive |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_archive_favor |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_article |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_article_cate |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_article_comment |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_checkin |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_config |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_group |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_group_fans |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_group_topic |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_group_topic_comment |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_group_topic_type |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_group_type |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_link |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_member |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_member_fans |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_member_level |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_member_token |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_memgroup |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_message |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture_album |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture_album_comment |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture_album_favor |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture_comment |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture_favor |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_picture_tag |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_score_detail |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_score_rule |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_tag |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_validate_code |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_weibo |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_weibo_comment |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_weibo_favor |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| tbl_weibo_topic |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#打包jeesns项目")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# mvn package")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#打包之后生成的war包")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# ll jeesns-web/target/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 25496")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 4 root root 181 2019-11-20 23:19 classes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 25 2019-11-20 23:19 generated-sources")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 5 root root 104 2019-11-20 23:19 jeesns-web")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 26106028 2019-11-20 23:20 jeesns-web.war")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 28 2019-11-20 23:19 maven-archiver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 35 2019-11-20 23:19 maven-status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#将其手动传输到tomcat节点上面测试")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# scp jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#浏览器刷新测试")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png",alt:"img"})],-1),un={id:"_04-创建一个-jeesns-项目",tabindex:"-1"},hn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png",alt:"img"})],-1),wn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#清除上次编译的结果")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# mvn clean")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# git remote remove origin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# git remote add origin git@10.0.0.100:OPS/jeesns.git")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# git add .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@git ~/jeesns]# git commit -m "Initial commit"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# On branch master")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nothing to commit, working directory clean")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# git push -u origin master")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Counting objects: 1946, done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Compressing objects: 100% (1862/1862), done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Writing objects: 100% (1946/1946), 7.09 MiB | 7.25 MiB/s, done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Total 1946 (delta 285), reused 0 (delta 0)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"remote: Resolving deltas: 100% (285/285), done.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To git@10.0.0.100:OPS/jeesns.git")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," [new branch] master -> master")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Branch master set up to track remote branch master from origin.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bn={id:"_05-jenkins-创建一个-maven",tabindex:"-1"},vn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_140.png",alt:"img"})],-1),kn={id:"此处如果出现报错，请添加-deploy-keys",tabindex:"-1"},xn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_141.png",alt:"img"})],-1),jn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_142.png",alt:"img"})],-1),fn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_143.png",alt:"img"})],-1),Sn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#发现已经打包成功了")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 26106007 2019-11-23 11:49 /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#jenkins用户给tomcat节点进行分发公钥")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ssh-copy-id -i .ssh/id_rsa.pub root@10.0.0.80 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#构建后操作")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ssh root@10.0.0.80 "mv /application/tomcat/webapps/ROOT.war /tmp/$BUILD_ID-ROOT.war" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scp /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),In=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_144.png",alt:"img"})],-1),Jn=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_145.png",alt:"img"})],-1),Tn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# ll /tmp/ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 50992 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 26106004 2019-11-23 01:28 2-ROOT.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),On=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_146.png",alt:"img"})],-1),Nn={id:"pipeline-项目",tabindex:"-1"},zn={id:"_01-基础概念",tabindex:"-1"},En=s("p",null,[s("strong",null,"CI/CD 持续集成 / 持续部署")],-1),Pn=s("p",null,"持续集成 (Continuous integration) 是一种软件开发实践，即团队开发成员经常集成它们的工作，通过每个成员",-1),Un=s("p",null,"每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动",-1),Hn=s("p",null,"化测试）来验证，从而尽早地发现集成错误。",-1),Mn=s("p",null,"比如（你家装修厨房，其中一项是铺地砖，边角地砖要切割大小。如果一次全切割完再铺上去，发现尺寸有误的话",-1),Rn=s("p",null,"浪费和返工时间就大了，不如切一块铺一块。这就是持续集成。）",-1),Ln=s("p",null,"持续部署（continuous deployment）是通过自动化的构建、测试和部署循环来快速交付高质量的产品。某种程度上代表了一个开发团队工程化的程度，毕竟快速运转的互联网公司人力成本会高于机器，投资机器优化开发流程化",-1),Bn=s("p",null,"相对也提高了人的效率。",-1),$n=s("p",null,"比如（装修厨房有很多部分，每个部分都有检测手段，如地砖铺完了要测试漏水与否，线路铺完了要通电测试电路",-1),Wn=s("p",null,"通顺，水管装好了也要测试冷水热水。如果全部装完了再测，出现问题可能会互相影响，比如电路不行可能要把地",-1),qn=s("p",null,"砖给挖开……。那么每完成一部分就测试，这是持续部署。）",-1),Kn=s("p",null,"持续交付 Continuous Delivery: 频繁地将软件的新版本，交付给质量团队或者用户，以供评审尽早发现生产环境中存在的问题；如果评审通过，代码就进入生产阶段.",-1),Gn=s("p",null,"比如（全部装修完了，你去验收，发现地砖颜色不合意，水池太小，灶台位置不对，返工吗？所以不如没完成一部",-1),Fn=s("p",null,"分，你就去用一下试用验收，这就是持续交付。）",-1),Vn=s("p",null,"敏捷思想中提出的这三个观点，还强调一件事：通过技术手段自动化这三个工作。加快交付速度。",-1),Qn=s("p",null,"\\1. 什么是 pipeline",-1),Yn=s("p",null,"Jenkins 2.0 的精髓是 Pipeline as Code，是帮助 Jenkins 实现 CI 到 CD 转变的重要角色。什么是 Pipeline，简单来说，就是一套运行于 Jenkins 上的工作流框架，将原本独立运行于单个或者多个节点的任务连接起来，实现单个",-1),Xn=s("p",null,"任务难以完成的复杂发布流程。Pipeline 的实现方式是一套 Groovy DSL，任何发布流程都可以表述为一段 Groovy 脚本，并且 Jenkins 支持从代码库直接读取脚本，从而实现了 Pipeline as Code 的理念。",-1),Zn=s("p",null,"2.Pipeline 概念",-1),sl=s("p",null,"Pipeline 是一个用户定义的 CD 流水线模式。Pipeline 代码定义了通常包含构建、测试和发布步骤的完整的构",-1),nl=s("p",null,"建过程。",-1),ll=s("p",null,"Node node 是一个机器，它是 Jenkins 环境的一部分，并且能够执行 Pipeline。同时，node 代码块也是脚本式",-1),al=s("p",null,"Pipeline 语法的关键特性。",-1),el=s("p",null,'Stage Stage 块定义了在整个 Pipeline 中执行的概念上不同的任务子集（例如 "构建"，"测试" 和 "部署" 阶段），',-1),ol=s("p",null,"许多插件使用它来可视化或呈现 Jenkins 管道状态 / 进度。",-1),tl=s("p",null,'Step 一项任务。从根本上讲，一个步骤告诉 Jenkins 在特定时间点（或过程中的 "步骤"）要做什么。例如，使用',-1),cl=s("p",null,"sh step：sh 'make' 可以执行 make 这个 shell 命令。",-1),il=s("p",null,"3.jenkins file 声明式 脚本式",-1),pl=s("p",null,"脚本式语法格式：",-1),rl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pipeline{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," agent any ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stages{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("get code"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'     echo "get code from scm" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("package"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'   echo "packge code" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("deploy"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'     echo "deploy packge to node1" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cl={id:"_02-创建-pipeline-项目",tabindex:"-1"},Al=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_147.png",alt:"img"})],-1),gl=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_148.png",alt:"img"})],-1),ml=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_149.png",alt:"img"})],-1),yl=s("p",null,"在仓库创建一个 Jenkinsfile 文件进行调用",-1),dl=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_150.png",alt:"img"})],-1),_l=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png",alt:"img"})],-1),Dl=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png",alt:"img"})],-1),ul=s("p",null,"编辑 Jenkinsfile 文件",-1),hl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pipeline{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," agent any ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stages{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("get code"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'     echo "get code" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("unit test"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'   echo "unit test" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("package"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," sh 'tar zcf /opt/web-${BUILD_ID}.tar.gz ./ --exclude=./.git --exclude=Jenkinsfile' ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' stage("deploy"){ ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   steps{ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`     sh 'ssh 10.0.0.80 "mkdir /opt/web-\${BUILD_ID}"' `)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     sh 'scp /opt/web-${BUILD_ID}.tar.gz 10.0.0.80:/opt' ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`     sh 'ssh 10.0.0.80 "tar xf /opt/web-\${BUILD_ID}.tar.gz -C /code"' `)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," } ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wl=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_153.png",alt:"img"})],-1),bl=s("p",null,"执行构建报错",-1),vl=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_154.png",alt:"img"})],-1),kl=s("p",null,"修改脚本再次构建",-1),xl=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_155.png",alt:"img"})],-1),jl={id:"回滚脚本",tabindex:"-1"},fl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /usr/share/nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ls -d web-*")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'read -p "请复制你需要回滚的目录版本" ver')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rm -rf html*")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ln -s $ver html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1);function Sl(o,Il,Jl,Tl,i,Ol){const a=m,p=r;return g(),A(p,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":l(()=>[s("h3",_,[n("Jenkins "),e(a,{class:"header-anchor",href:"#jenkins","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),D,s("p",null,[e(a,{href:"https://jenkins.io/",target:"_blank",rel:"noreferrer"},{default:l(()=>[n("https://jenkins.io")]),_:1})]),u,s("h4",h,[n("01. 安装准备 "),e(a,{class:"header-anchor",href:"#_01-安装准备","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),w,s("h4",b,[n("02 . 安装 Jdk 和 Jenkins "),e(a,{class:"header-anchor",href:"#_02-安装-jdk-和-jenkins","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),v,k,s("h4",x,[n("03 . 配置 Jenkins "),e(a,{class:"header-anchor",href:"#_03-配置-jenkins","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),j,f,S,I,J,T,s("h4",O,[n("04. 插件安装 "),e(a,{class:"header-anchor",href:"#_04-插件安装","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),N,z,E,P,s("h4",U,[n("05. 创建项目 "),e(a,{class:"header-anchor",href:"#_05-创建项目","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),H,M,R,L,B,$,W,q,K,G,F,V,Q,Y,X,s("h4",Z,[n("06. Jenkins 获取 Git 源代码 "),e(a,{class:"header-anchor",href:"#_06-jenkins-获取-git-源代码","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),ss,ns,ls,as,es,os,ts,cs,is,ps,rs,Cs,As,s("h4",gs,[n("07. 立即构建获取源代码 "),e(a,{class:"header-anchor",href:"#_07-立即构建获取源代码","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),ms,ys,ds,_s,s("h4",Ds,[n("08. Jenkins 代码推送到 Web "),e(a,{class:"header-anchor",href:"#_08-jenkins-代码推送到-web","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),us,hs,ws,bs,vs,s("h4",ks,[n("09. 配置自动触发构建 "),e(a,{class:"header-anchor",href:"#_09-配置自动触发构建","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),s("h1",xs,[n("需要设置安全令牌 Secret token "),e(a,{class:"header-anchor",href:"#需要设置安全令牌-secret-token","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),js,fs,Ss,Is,Js,Ts,s("h4",Os,[n("10. 测试是否触发 "),e(a,{class:"header-anchor",href:"#_10-测试是否触发","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),Ns,zs,Es,s("h4",Ps,[n("11. 返回构建状态 "),e(a,{class:"header-anchor",href:"#_11-返回构建状态","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),Us,Hs,Ms,Rs,Ls,Bs,$s,Ws,qs,Ks,Gs,Fs,Vs,Qs,Ys,Xs,Zs,sn,nn,s("h1",ln,[n("创建 Maven 项目 "),e(a,{class:"header-anchor",href:"#创建-maven-项目","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),an,s("p",null,[n("mvn package #会去 maven 的中央仓库去下载需要的依赖包和插件到.m2 目录下 \\5. 创建 Maven 私服 nexus 部署私服 xenus 下载 "),e(a,{href:"https://www.sonatype.com/download%E2%80%90oss%E2%80%90sonatype",target:"_blank",rel:"noreferrer"},{default:l(()=>[n("https://www.sonatype.com/download‐oss‐sonatype")]),_:1})]),en,on,tn,cn,pn,s("h4",rn,[n("01. 部署 Maven "),e(a,{class:"header-anchor",href:"#_01-部署-maven","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),s("p",null,[n("官网： "),e(a,{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noreferrer"},{default:l(()=>[n("http://maven.apache.org/download.cgi")]),_:1}),n(" 清华镜像： "),e(a,{href:"https://mirrors.tuna.tsinghua.edu.cn/apache/maven/",target:"_blank",rel:"noreferrer"},{default:l(()=>[n("https://mirrors.tuna.tsinghua.edu.cn/apache/maven/")]),_:1})]),Cn,s("h4",An,[n("02. 编译测试 "),e(a,{class:"header-anchor",href:"#_02-编译测试","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),gn,s("h4",mn,[n("03. 部署 Tomcat 及数据库 "),e(a,{class:"header-anchor",href:"#_03-部署-tomcat-及数据库","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),yn,dn,_n,Dn,s("h4",un,[n("04. 创建一个 jeesns 项目 "),e(a,{class:"header-anchor",href:"#_04-创建一个-jeesns-项目","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),hn,wn,s("h4",bn,[n("05. Jenkins 创建一个 maven "),e(a,{class:"header-anchor",href:"#_05-jenkins-创建一个-maven","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),vn,s("h1",kn,[n("此处如果出现报错，请添加 Deploy Keys "),e(a,{class:"header-anchor",href:"#此处如果出现报错，请添加-deploy-keys","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),xn,jn,fn,Sn,In,Jn,Tn,On,s("h1",Nn,[n("Pipeline 项目 "),e(a,{class:"header-anchor",href:"#pipeline-项目","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),s("h4",zn,[n("01. 基础概念 "),e(a,{class:"header-anchor",href:"#_01-基础概念","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),En,Pn,Un,Hn,Mn,Rn,Ln,Bn,$n,Wn,qn,Kn,Gn,Fn,Vn,Qn,Yn,Xn,Zn,sl,nl,ll,al,el,ol,tl,cl,il,pl,rl,s("h4",Cl,[n("02. 创建 pipeline 项目 "),e(a,{class:"header-anchor",href:"#_02-创建-pipeline-项目","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),Al,gl,ml,yl,dl,_l,Dl,ul,hl,wl,bl,vl,kl,xl,s("h1",jl,[n("回滚脚本 "),e(a,{class:"header-anchor",href:"#回滚脚本","aria-hidden":"true"},{default:l(()=>[n("#")]),_:1})]),fl]),"main-header":l(()=>[t(o.$slots,"main-header")]),"main-header-after":l(()=>[t(o.$slots,"main-header-after")]),"main-nav":l(()=>[t(o.$slots,"main-nav")]),"main-content":l(()=>[t(o.$slots,"main-content")]),"main-content-after":l(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(o.$slots,"main-nav-after")]),comment:l(()=>[t(o.$slots,"comment")]),footer:l(()=>[t(o.$slots,"footer")]),aside:l(()=>[t(o.$slots,"aside")]),"aside-custom":l(()=>[t(o.$slots,"aside-custom")]),default:l(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Ml=C(d,[["render",Sl]]);export{Hl as __pageData,Ml as default};
