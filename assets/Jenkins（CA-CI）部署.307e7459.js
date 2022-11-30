import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang.1aa046e0.js";import{_ as p,c as r,w as l,o as C,r as e,g as s,R as n,p as A}from"./app.f8763b1f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.9e45df7a.js";import"./YunCard.vue_vue_type_style_index_0_lang.ee20fc38.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.3a09cd11.js";const Ul=JSON.parse('{"title":"Jenkins\uFF08CA/CI\uFF09\u90E8\u7F72","description":"","frontmatter":{"title":"Jenkins\uFF08CA/CI\uFF09\u90E8\u7F72","categories":"DevOps","tags":["Jenkins","CA","CI","Maven","Pipeline\u9879\u76EE","\u56DE\u6EDA\u811A\u672C"],"date":"2020-03-10T20:13:00.000Z"},"headers":[{"level":3,"title":"Jenkins","slug":"jenkins","link":"#jenkins","children":[]}],"relativePath":"pages/posts/Jenkins\uFF08CA-CI\uFF09\u90E8\u7F72.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/Jenkins\uFF08CA-CI\uFF09\u90E8\u7F72.md","lastUpdated":0}'),o=JSON.parse('{"title":"Jenkins\uFF08CA/CI\uFF09\u90E8\u7F72","description":"","frontmatter":{"title":"Jenkins\uFF08CA/CI\uFF09\u90E8\u7F72","categories":"DevOps","tags":["Jenkins","CA","CI","Maven","Pipeline\u9879\u76EE","\u56DE\u6EDA\u811A\u672C"],"date":"2020-03-10T20:13:00.000Z"},"headers":[{"level":3,"title":"Jenkins","slug":"jenkins","link":"#jenkins","children":[]}],"relativePath":"pages/posts/Jenkins\uFF08CA-CI\uFF09\u90E8\u7F72.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/Jenkins\uFF08CA-CI\uFF09\u90E8\u7F72.md","lastUpdated":0}'),g={name:"pages/posts/Jenkins\uFF08CA-CI\uFF09\u90E8\u7F72.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){A("pageData",o)}},m=s("h3",{id:"jenkins",tabindex:"-1"},[n("Jenkins "),s("a",{class:"header-anchor",href:"#jenkins","aria-hidden":"true"},"#")],-1),y=s("p",null,"\u5B98\u7F51",-1),d=s("p",null,[s("a",{href:"https://jenkins.io/",target:"_blank",rel:"noreferrer"},"https://jenkins.io")],-1),u=s("p",null,"Jenkins \u662F\u4E00\u4E2A\u5F00\u6E90\u8F6F\u4EF6\u9879\u76EE\uFF0C\u662F\u57FA\u4E8E Java \u5F00\u53D1\u7684\u4E00\u79CD\u6301\u7EED\u96C6\u6210\u5DE5\u5177\uFF0C\u7528\u4E8E\u76D1\u63A7\u6301\u7EED\u91CD\u590D\u7684\u5DE5\u4F5C\uFF0C\u6307\u5728\u63D0\u4F9B\u4E00\u4E2A\u5F00 \u653E\u6613\u7528\u7684\u8F6F\u4EF6\u5E73\u53F0\uFF0C\u4F7F\u8F6F\u4EF6\u7684\u6301\u7EED\u96C6\u6210\u53D8\u6210\u53EF\u80FD\u3002",-1),D=s("h4",{id:"_01-\u5B89\u88C5\u51C6\u5907",tabindex:"-1"},[n("01. \u5B89\u88C5\u51C6\u5907 "),s("a",{class:"header-anchor",href:"#_01-\u5B89\u88C5\u51C6\u5907","aria-hidden":"true"},"#")],-1),h=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"\u4E3B\u673A"),s("th",null,"IP"),s("th",null,"\u5185\u5B58"),s("th",null,"\u786C\u76D8")])]),s("tbody",null,[s("tr",null,[s("td",null,"Jenkins"),s("td",null,"10.0.0.201"),s("td",null,"2G"),s("td",null,"50G+")]),s("tr",null,[s("td",null,"nexus"),s("td",null,"10.0.0.202"),s("td",null,"2G"),s("td",null,"50G+")])])],-1),_=s("h4",{id:"_02-\u5B89\u88C5-jdk-\u548C-jenkins",tabindex:"-1"},[n("02 . \u5B89\u88C5 Jdk \u548C Jenkins "),s("a",{class:"header-anchor",href:"#_02-\u5B89\u88C5-jdk-\u548C-jenkins","aria-hidden":"true"},"#")],-1),w=s("p",null,"\u4E0A\u4F20 JDK \u548C Jenkins \u5B89\u88C5\u5305\uFF0C\u4F7F\u7528 rpm \u2010ivh \u8FDB\u884C\u5B89\u88C5\uFF0C\u5B89\u88C5\u5B8C JDK \u8FD0\u884C Java \u6D4B\u8BD5\u662F\u5426\u5B89\u88C5\u6210\u529F",-1),b=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),v=s("h4",{id:"_03-\u914D\u7F6E-jenkins",tabindex:"-1"},[n("03 . \u914D\u7F6E Jenkins "),s("a",{class:"header-anchor",href:"#_03-\u914D\u7F6E-jenkins","aria-hidden":"true"},"#")],-1),x=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u542F\u52A8\u7528\u6237\u4FEE\u6539\u4E3Aroot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# grep 'root' /etc/sysconfig/jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'JENKINS_USER="root"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u542F\u52A8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# systemctl start jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u67E5\u770B\u7AEF\u53E3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# netstat -lntp | grep 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::8080 ::: LISTEN 8504/java")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u67E5\u770B\u8FDB\u7A0B")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ps aux |grep jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 8504 8.8 11.6 2618104 235556 ? Ssl 15:29 0:25 /etc/alternatives/java -Dcom.sun.akuma.Daemon=daemonized -Djava.awt.headless=true -DJENKINS_HOME=/var/lib/jenkins -jar /usr/lib/jenkins/jenkins.war --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war --daemon --httpPort=8080 --debug=5 --handlerCountMax=100 --handlerCountMaxIdle=20")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u8BBF\u95EE\u9875\u9762\u8FDB\u884C\u914D\u7F6E")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http://10.0.0.201:8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u67E5\u770B\u5BC6\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cat /var/lib/jenkins/secrets/initialAdminPassword")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"e8e69c5646cc4f3b88315fb20156ce6c")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_88.png",alt:"img"})],-1),j=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_89.png",alt:"img"})],-1),f=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_90.png",alt:"img"})],-1),q=s("p",null,"\u4FEE\u6539\u5BC6\u7801",-1),S=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_91.png",alt:"img"})],-1),I=s("h4",{id:"_04-\u63D2\u4EF6\u5B89\u88C5",tabindex:"-1"},[n("04. \u63D2\u4EF6\u5B89\u88C5 "),s("a",{class:"header-anchor",href:"#_04-\u63D2\u4EF6\u5B89\u88C5","aria-hidden":"true"},"#")],-1),J=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u63D2\u4EF6\u5B89\u88C5\uFF08\u8DF3\u8FC7\u5B89\u88C5\u63D2\u4EF6\uFF0C\u76F4\u63A5\u4E0A\u4F20\u63D2\u4EF6\u5230\u76EE\u5F55\uFF09")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.\u81EA\u52A8\u5B89\u88C5\u53EF\u9009\u63D2\u4EF6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.\u624B\u52A8\u4E0B\u8F7D\u63D2\u4EF6\u4E0A\u4F20\u5B89\u88C5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.\u63D2\u4EF6\u653E\u5165\u63D2\u4EF6\u76EE\u5F55")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cd /var/lib/jenkins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins jenkins]# ll         #jobs\u4E3A\u6BCF\u6B21\u6784\u5EFA\u540E\u6784\u5EFA\u7684\u7ED3\u679C\u76EE\u5F55\uFF0Cplugins\u4E3A\u63D2\u4EF6\u76EE\u5F55")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u603B\u7528\u91CF 36")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010\u2010\u2010\u2010\u2010\u2010\u2010 1 root root 1822 8\u6708 26 00:35 config.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010\u2010\u2010\u2010\u2010\u2010\u2010 1 root root 156 8\u6708 26 00:31 hudson.model.UpdateCenter.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010\u2010\u2010\u2010\u2010\u2010\u2010 1 root root 1712 8\u6708 26 00:32 identity.key.enc")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010\u2010\u2010\u2010\u2010\u2010\u2010 1 root root 94 8\u6708 26 00:32 jenkins.CLI.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010r\u2010\u2010r\u2010\u2010 1 root root 4 8\u6708 26 00:35 jenkins.install.InstallUtil.lastExecVersion")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010r\u2010\u2010r\u2010\u2010 1 root root 4 8\u6708 26 00:35 jenkins.install.UpgradeWizard.state")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr\u2010xr\u2010x 2 root root 6 8\u6708 26 00:31 jobs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr\u2010xr\u2010x 3 root root 18 8\u6708 26 00:32 logs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010\u2010\u2010\u2010\u2010\u2010\u2010 1 root root 907 8\u6708 26 00:32 nodeMonitors.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr\u2010xr\u2010x 2 root root 6 8\u6708 26 00:32 nodes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr\u2010xr\u2010x 2 root root 6 8\u6708 26 00:31 plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010\u2010\u2010\u2010\u2010\u2010\u2010 1 root root 64 8\u6708 26 00:31 secret.key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u2010rw\u2010r\u2010\u2010r\u2010\u2010 1 root root 0 8\u6708 26 00:31 secret.key.not\u2010so\u2010secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwx\u2010\u2010\u2010\u2010\u2010\u2010 4 root root 4096 8\u6708 26 00:32 secrets")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr\u2010xr\u2010x 2 root root 23 8\u6708 26 00:32 userContent")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr\u2010xr\u2010x 3 root root 18 8\u6708 26 00:34 users")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u4E0A\u4F20\u63D2\u4EF6\u5305\u89E3\u538B\u5230plugins")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u91CD\u542F\u751F\u6548")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# systemctl restart jenkins.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T=s("p",null,"4.jenkins \u4E3B\u8981\u7684\u76EE\u5F55",-1),O=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/lib/jenkins/\uFF1A          #jenkins\u5B89\u88C5\u76EE\u5F55\uFF0CWAR\u5305\u4F1A\u653E\u5728\u8FD9\u91CC")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'/etc/sysconfig/jenkins\uFF1A        #jenkins\u914D\u7F6E\u6587\u4EF6\uFF0C"\u7AEF\u53E3"\uFF0C"JENKINS_HOME"\u7B49\u90FD\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/lib/jenkins/\uFF1A          #\u9ED8\u8BA4\u7684JENKINS_HOME")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/log/jenkins/jenkins.log\uFF1A    #Jenkins\u65E5\u5FD7\u6587\u4EF6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),z=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_92.png",alt:"img"})],-1),N=s("h4",{id:"_05-\u521B\u5EFA\u9879\u76EE",tabindex:"-1"},[n("05. \u521B\u5EFA\u9879\u76EE "),s("a",{class:"header-anchor",href:"#_05-\u521B\u5EFA\u9879\u76EE","aria-hidden":"true"},"#")],-1),E=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_93.png",alt:"img"})],-1),P=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_94.png",alt:"img"})],-1),U=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_95.png",alt:"img"})],-1),H=s("p",null,"\u8FDB\u884C\u6784\u5EFA",-1),M=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_96.png",alt:"img"})],-1),R=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_97.png",alt:"img"})],-1),L=s("p",null,"\u8FDB\u5165\u63A7\u5236\u53F0",-1),B=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_98.png",alt:"img"})],-1),$=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_99.png",alt:"img"})],-1),W=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_100.png",alt:"img"})],-1),G=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_101.png",alt:"img"})],-1),F=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_102.png",alt:"img"})],-1),V=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_103.png",alt:"img"})],-1),Q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins plugins]# ll /var/lib/jenkins/workspace/freestyle-job")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 0 2019-11-19 16:19 test.txt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y=s("h4",{id:"_06-jenkins-\u83B7\u53D6-git-\u6E90\u4EE3\u7801",tabindex:"-1"},[n("06. Jenkins \u83B7\u53D6 Git \u6E90\u4EE3\u7801 "),s("a",{class:"header-anchor",href:"#_06-jenkins-\u83B7\u53D6-git-\u6E90\u4EE3\u7801","aria-hidden":"true"},"#")],-1),X=s("p",null,"\u8FD9\u91CC\u6211\u4EEC\u6709\u7801\u4E91\u5BFC\u5165\u4E00\u4E2A HTML \u9875\u9762\u7684\u76D1\u63A7\u5E73\u53F0\u5230 gitlab \u4ED3\u5E93\uFF0C\u6253\u5F00\u7801\u4E91\uFF0C\u627E\u5230\u4E00\u4E2A\u5927\u8F6C\u76D8\u9879\u76EE\uFF0C\u5C06\u5176\u4EE3\u7801\u8DEF\u5F84\u8FDB\u884C\u590D\u5236",-1),Z=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_104.png",alt:"img"})],-1),ss=s("p",null,"\u5728 Gitlab \u4E0A\u9762\u65B0\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u4ED3\u5E93\u3002\u5C06\u6E90\u4EE3\u7801\u5BFC\u5165\u8FDB\u53BB\u3002",-1),ns=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_105.png",alt:"img"})],-1),ls=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_106.png",alt:"img"})],-1),as=s("p",null,"dev \u7528\u6237\u7AEF\u914D\u7F6E\u4ECE git \u83B7\u53D6\u4EE3\u7801\u3002",-1),es=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@dev ~]# git clone git@10.0.0.100:OPS/dzp.git ")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dev\u7528\u6237\u4FEE\u6539\u4E86\u6E90\u4EE3\u7801")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),os=s("p",null,"Jenkins \u914D\u7F6E\u4ECE Git \u83B7\u53D6\u4EE3\u7801\uFF0C\u7531\u4E8E\u6211\u4EEC dev \u7528\u6237\u4E0D\u662F\u914D\u7F6E\u5728 Jenkins \u4E0A\uFF0C\u6240\u4EE5\u9700\u8BA4\u8BC1\u5373\u53EF\u4E0B\u8F7D\u4EE3\u7801\u3002\u8FDB\u884C\u9762\u8BA4\u8BC1\u65B9\u6CD5\uFF0C\u9700\u8981\u914D\u7F6E deploy key",-1),ts=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ssh-keygen -t rsa ")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCY3WrgTCmZeapjV9Tx6GmmHX+SVigxHnz37f8iUUjAexmR2/gSAjvsY3ez5iITmamf2I62+5n+gx9f1OPXUsUAzOApD6R8zHmvzQ/yheDO1y5XHcmRtklN1HpOq2g0PChrRjrr4QcXITKafU30OjTu4Fx3vndxqD/3RpHD3IVSZGAsiJC6T+C/PYW8YfeLNEAA7O3QKskjuSkoH2PZyF7qQgwjxfudno1g3qLQkmB+CjFFwgj0vkam/W4OwUwapC1O591CU7+VmSWL/z8uMTpSV+FQkyH04qS/HSs27pfpAI0wpBB/gBxx+wU8FCUh++2SWpuJR8/TPqkS8YKhfl+p root@jenkins  #\u590D\u5236\u8BE5\u4E32\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_107.png",alt:"img"})],-1),is=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_108.png",alt:"img"})],-1),ps=s("p",null,"Jenkins \u914D\u7F6E\u4ECE Git \u83B7\u53D6\u4EE3\u7801\uFF0C\u914D\u7F6E\u597D\u540E\u4FDD\u5B58",-1),rs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_109.png",alt:"img"})],-1),Cs=s("h4",{id:"_07-\u7ACB\u5373\u6784\u5EFA\u83B7\u53D6\u6E90\u4EE3\u7801",tabindex:"-1"},[n("07. \u7ACB\u5373\u6784\u5EFA\u83B7\u53D6\u6E90\u4EE3\u7801 "),s("a",{class:"header-anchor",href:"#_07-\u7ACB\u5373\u6784\u5EFA\u83B7\u53D6\u6E90\u4EE3\u7801","aria-hidden":"true"},"#")],-1),As=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_110.png",alt:"img"})],-1),gs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_111.png",alt:"img"})],-1),ms=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_112.png",alt:"img"})],-1),ys=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Jenkins\u670D\u52A1\u5668\u67E5\u770B\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll /var/lib/jenkins/workspace/freestyle-job/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 25 2019-11-19 21:12 css")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 84 2019-11-19 21:12 img")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 41 2019-11-19 21:12 js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 2205 2019-11-19 21:12 lottery.html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 113 2019-11-19 21:12 README.md")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ds=s("h4",{id:"_08-jenkins-\u4EE3\u7801\u63A8\u9001\u5230-web",tabindex:"-1"},[n("08. Jenkins \u4EE3\u7801\u63A8\u9001\u5230 Web "),s("a",{class:"header-anchor",href:"#_08-jenkins-\u4EE3\u7801\u63A8\u9001\u5230-web","aria-hidden":"true"},"#")],-1),us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5199\u4E00\u4E2A\u811A\u672C\u628A\u4ECEgit\u4ED3\u5E93\u91CC\u83B7\u53D6\u7684\u4EE3\u7801\u4E0A\u4F20\u5230web\u670D\u52A1\u5668\u7AD9\u70B9\u76EE\u5F55\u4E0B")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' ssh root@Ip"rm\u2212rfIp"rm\u2212rfWeb_Dir && ln -s /opt/web_$Date /code " ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"} ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Tar; ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Scp_Code_Web; ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Code_Tar_Xf; ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Ln_Html ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5206\u53D1\u516C\u94A5")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Jenkins\u4E0A\u9762\u6DFB\u52A0\u811A\u672C\u8FDB\u884C\u6784\u5EFA")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ds=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_113.png",alt:"img"})],-1),hs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_114.png",alt:"img"})],-1),_s=s("p",null,"\u67E5\u770B\u7F51\u7AD9\u662F\u5426\u66F4\u65B0\u6210\u529F",-1),ws=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_115.png",alt:"img"})],-1),bs=s("h4",{id:"_09-\u914D\u7F6E\u81EA\u52A8\u89E6\u53D1\u6784\u5EFA",tabindex:"-1"},[n("09. \u914D\u7F6E\u81EA\u52A8\u89E6\u53D1\u6784\u5EFA "),s("a",{class:"header-anchor",href:"#_09-\u914D\u7F6E\u81EA\u52A8\u89E6\u53D1\u6784\u5EFA","aria-hidden":"true"},"#")],-1),vs=s("h1",{id:"\u9700\u8981\u8BBE\u7F6E\u5B89\u5168\u4EE4\u724C-secret-token",tabindex:"-1"},[n("\u9700\u8981\u8BBE\u7F6E\u5B89\u5168\u4EE4\u724C Secret token "),s("a",{class:"header-anchor",href:"#\u9700\u8981\u8BBE\u7F6E\u5B89\u5168\u4EE4\u724C-secret-token","aria-hidden":"true"},"#")],-1),xs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_116.png",alt:"img"})],-1),ks=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_117.png",alt:"img"})],-1),js=s("p",null,"Gitlab \u4E0A\u9762\u64CD\u4F5C",-1),fs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_118.png",alt:"img"})],-1),qs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_119.png",alt:"img"})],-1),Ss=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_120.png",alt:"img"})],-1),Is=s("h4",{id:"_10-\u6D4B\u8BD5\u662F\u5426\u89E6\u53D1",tabindex:"-1"},[n("10. \u6D4B\u8BD5\u662F\u5426\u89E6\u53D1 "),s("a",{class:"header-anchor",href:"#_10-\u6D4B\u8BD5\u662F\u5426\u89E6\u53D1","aria-hidden":"true"},"#")],-1),Js=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dev\u7528\u6237\u4FEE\u6539\u6E90\u4EE3\u7801\u540E\u8FDB\u884C\u63A8\u9001\u6D4B\u8BD5\u662F\u5426\u81EA\u52A8\u89E6\u53D1")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ts=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_121.png",alt:"img"})],-1),Os=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_122.png",alt:"img"})],-1),zs=s("h4",{id:"_11-\u8FD4\u56DE\u6784\u5EFA\u72B6\u6001",tabindex:"-1"},[n("11. \u8FD4\u56DE\u6784\u5EFA\u72B6\u6001 "),s("a",{class:"header-anchor",href:"#_11-\u8FD4\u56DE\u6784\u5EFA\u72B6\u6001","aria-hidden":"true"},"#")],-1),Ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Jenkins\u914D\u7F6EJenkins\u8FD4\u56DE\u6784\u5EFA\u72B6\u6001\u5230Gitlab")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5148\u83B7\u5F97gitlab\u7684token")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Es=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_123.png",alt:"img"})],-1),Ps=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_124.png",alt:"img"})],-1),Us=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_125.png",alt:"img"})],-1),Hs=s("p",null,"\u5C06\u83B7\u5F97\u7684 token \u503C\u8FDB\u884C\u590D\u5236\u5907\u7528",-1),Ms=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_126.png",alt:"img"})],-1),Rs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_127.png",alt:"img"})],-1),Ls=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_128.png",alt:"img"})],-1),Bs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_129.png",alt:"img"})],-1),$s=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_130.png",alt:"img"})],-1),Ws=s("p",null,"\u8FDB\u884C\u6D4B\u8BD5",-1),Ks=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_131.png",alt:"img"})],-1),Gs=s("p",null,"\u6DFB\u52A0\u6784\u5EFA\u540E\u64CD\u4F5C",-1),Fs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_132.png",alt:"img"})],-1),Vs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_133.png",alt:"img"})],-1),Qs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_134.png",alt:"img"})],-1),Ys=s("p",null,"\u68C0\u67E5\u7ED3\u679C",-1),Xs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_135.png",alt:"img"})],-1),Zs=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_136.png",alt:"img"})],-1),sn=s("h1",{id:"\u521B\u5EFA-maven-\u9879\u76EE",tabindex:"-1"},[n("\u521B\u5EFA Maven \u9879\u76EE "),s("a",{class:"header-anchor",href:"#\u521B\u5EFA-maven-\u9879\u76EE","aria-hidden":"true"},"#")],-1),nn=s("p",null,"Maven \u662F\u4E00\u4E2A\u9879\u76EE\u7BA1\u7406\u548C\u7EFC\u5408\u5DE5\u5177\u3002Maven \u63D0\u4F9B\u7ED9\u5F00\u53D1\u4EBA\u5458\u6784\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u751F\u547D\u5468\u671F\u6846\u67B6\u3002 \u5F00\u53D1\u56E2\u961F\u53EF\u4EE5\u81EA\u52A8\u5B8C\u6210\u8BE5\u9879\u76EE\u7684\u57FA\u7840\u8BBE\u65BD\u5EFA\u8BBE\uFF0CMaven \u4F7F\u7528\u6807\u51C6\u7684\u76EE\u5F55\u7ED3\u6784\u548C\u9ED8\u8BA4\u6784\u5EFA\u751F\u547D\u5468\u671F\u3002 Apache \u7684\u5F00\u6E90\u9879\u76EE\u4E3B\u8981\u670D\u52A1\u4E8E Java \u5E73\u53F0\u7684\u6784\u5EFA\u3001\u4F9D\u8D56\u7BA1\u7406\u3001\u9879\u76EE\u7BA1\u7406\u3002 Project Object Model\uFF0C\u9879\u76EE\u5BF9\u8C61\u6A21\u578B\u3002\u901A\u8FC7 xml \u683C\u5F0F\u4FDD\u5B58\u7684 pom.xml \u6587\u4EF6\u3002\u8BE5\u6587\u4EF6\u7528\u4E8E\u7BA1\u7406\uFF1A\u6E90\u4EE3\u7801\u3001\u914D\u7F6E\u6587 \u4EF6\u3001\u5F00\u53D1\u8005\u7684\u4FE1\u606F\u548C\u89D2\u8272\u3001\u95EE\u9898\u8FFD\u8E2A\u7CFB\u7EDF\u3001\u7EC4\u7EC7\u4FE1\u606F\u3001\u9879\u76EE\u6388\u6743\u3001\u9879\u76EE\u7684 url\u3001\u9879\u76EE\u7684\u4F9D\u8D56\u5173\u7CFB\u7B49\u7B49\u3002\u8BE5\u6587\u4EF6\u662F\u7531\u5F00\u53D1\u7EF4\u62A4\uFF0C\u6211\u4EEC\u8FD0\u7EF4\u4EBA\u5458\u53EF\u4EE5\u4E0D\u7528\u53BB\u5173\u5FC3\u3002",-1),ln=s("p",null,[n("mvn package #\u4F1A\u53BB maven \u7684\u4E2D\u592E\u4ED3\u5E93\u53BB\u4E0B\u8F7D\u9700\u8981\u7684\u4F9D\u8D56\u5305\u548C\u63D2\u4EF6\u5230.m2 \u76EE\u5F55\u4E0B \\5. \u521B\u5EFA Maven \u79C1\u670D nexus \u90E8\u7F72\u79C1\u670D xenus \u4E0B\u8F7D "),s("a",{href:"https://www.sonatype.com/download%E2%80%90oss%E2%80%90sonatype",target:"_blank",rel:"noreferrer"},"https://www.sonatype.com/download\u2010oss\u2010sonatype")],-1),an=s("p",null,"\u914D\u7F6E\u4ED3\u5E93\u4E24\u4E2A\u9009\u9879 1\u3001\u9879\u76EE\u4E0B\u7684 pom.xml \u914D\u7F6E\u3001\u53EA\u751F\u6548\u5F53\u524D\u7684\u9879\u76EE 2\u3001\u5728 maven \u914D\u7F6E\u5168\u5C40\u6240\u6709\u9879\u76EE\u751F\u6548 \u4E0A\u4F20 JDK \u548C nexus \u5B89\u88C5\u5305",-1),en=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rpm \u2010ivh jdk\u20108u121\u2010linux\u2010x64.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mv nexus\u20103.13.0\u201001 /usr/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ln \u2010s /usr/local/nexus\u20103.13.0\u201001 /usr/local/nexus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/nexus/bin/nexus start")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"10.0.0.202:8081 admin admin123")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),on=s("p",null,"\u914D\u7F6E Maven \u5168\u5C40\u914D\u7F6E\u6587\u4EF6",-1),tn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/maven/conf/settings.xml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cn=s("p",null,"\\6. \u521B\u5EFA\u4E00\u4E2A Maven \u9879\u76EE \u521B\u5EFA\u524D\u4E0A\u4F20\u4EE3\u7801\u5230 gitlab \u670D\u52A1\u5668\uFF0C\u628A java \u9879\u76EE\u6DFB\u52A0\u5230 gitlab \u4ED3\u5E93\u4E2D",-1),pn=s("h4",{id:"_01-\u90E8\u7F72-maven",tabindex:"-1"},[n("01. \u90E8\u7F72 Maven "),s("a",{class:"header-anchor",href:"#_01-\u90E8\u7F72-maven","aria-hidden":"true"},"#")],-1),rn=s("p",null,[n("\u5B98\u7F51\uFF1A "),s("a",{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noreferrer"},"http://maven.apache.org/download.cgi"),n(" \u6E05\u534E\u955C\u50CF\uFF1A "),s("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/apache/maven/",target:"_blank",rel:"noreferrer"},"https://mirrors.tuna.tsinghua.edu.cn/apache/maven/")],-1),Cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u4E0A\u4F20\u8F6F\u4EF6\u5305")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 8491533 2018-08-27 14:38 apache-maven-3.3.9-bin.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u89E3\u538B")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# tar xf apache-maven-3.3.9-bin.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6539\u53D8\u76EE\u5F55\u4F4D\u7F6E")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# mv apache-maven-3.3.9 /usr/local/maven-3.3.9")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u8F6F\u8FDE\u63A5")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@jenkins maven]# echo "export PATH=/usr/local/maven/bin/:$PATH" >>/etc/profile')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# source /etc/profile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u67E5\u770B\u7ED3\u679C")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins maven]# mvn -v")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Maven home: /usr/local/maven")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Java version: 1.8.0_181, vendor: Oracle Corporation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Java home: /usr/java/jdk1.8.0_181-amd64/jre")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Default locale: en_US, platform encoding: UTF-8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OS name: "linux", version: "3.10.0-957.el7.x86_64", arch: "amd64", family: "unix"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),An=s("h4",{id:"_02-\u7F16\u8BD1\u6D4B\u8BD5",tabindex:"-1"},[n("02. \u7F16\u8BD1\u6D4B\u8BD5 "),s("a",{class:"header-anchor",href:"#_02-\u7F16\u8BD1\u6D4B\u8BD5","aria-hidden":"true"},"#")],-1),gn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u4E0A\u4F20\u4E00\u4E2A\u7B80\u5355\u7684java\u9879\u76EE\u5305hello\u2010world.tar.gz\u8FDB\u884C\u89E3\u538B")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 1325 2018-08-22 13:43 hello-world.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# tar xf hello-world.tar.gz ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# cd hello-world/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"validate\uFF08\u9A8C\u8BC1\uFF09:   \u9A8C\u8BC1\u9879\u76EE\u6B63\u786E\uFF0C\u5E76\u4E14\u6240\u6709\u5FC5\u8981\u4FE1\u606F\u53EF\u7528\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"compile\uFF08\u7F16\u8BD1\uFF09:  \u7F16\u8BD1\u9879\u76EE\u6E90\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"test\uFF08\u6D4B\u8BD5\uFF09:     \u4F7F\u7528\u5408\u9002\u7684\u5355\u5143\u6D4B\u8BD5\u6846\u67B6\u6D4B\u8BD5\u7F16\u8BD1\u540E\u7684\u6E90\u7801\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"package\uFF08\u6253\u5305\uFF09:   \u6E90\u7801\u7F16\u8BD1\u4E4B\u540E\uFF0C\u4F7F\u7528\u5408\u9002\u7684\u683C\u5F0F\uFF08\u4F8B\u5982JAR\u683C\u5F0F\uFF09\u5BF9\u7F16\u8BD1\u540E\u7684\u6E90\u7801\u8FDB\u884C\u6253\u5305\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"integration\u2010test\uFF08\u96C6\u6210\u6D4B\u8BD5\uFF09: \u5982\u679C\u6709\u9700\u8981\uFF0C\u628A\u5305\u5904\u7406\u5E76\u90E8\u7F72\u5230\u53EF\u4EE5\u8FD0\u884C\u96C6\u6210\u6D4B\u8BD5\u7684\u73AF\u5883\u4E2D\u53BB\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"verify\uFF08\u9A8C\u8BC1\uFF09:   \u8FDB\u884C\u5404\u79CD\u6D4B\u8BD5\u6765\u9A8C\u8BC1\u5305\u662F\u5426\u6709\u6548\u5E76\u4E14\u7B26\u5408\u8D28\u91CF\u6807\u51C6\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"install\uFF08\u5B89\u88C5\uFF09:   \u628A\u5305\u5B89\u88C5\u5230\u672C\u5730\u4ED3\u5E93\uFF0C\u4F7F\u8BE5\u5305\u53EF\u4EE5\u4F5C\u4E3A\u5176\u4ED6\u672C\u5730\u9879\u76EE\u7684\u4F9D\u8D56\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deploy\uFF08\u90E8\u7F72\uFF09:   \u5728\u96C6\u6210\u6216\u53D1\u5E03\u73AF\u5883\u4E2D\u5B8C\u6210\uFF0C\u5C06\u6700\u7EC8\u8F6F\u4EF6\u5305\u590D\u5236\u5230\u8FDC\u7A0B\u5B58\u50A8\u5E93\uFF0C\u4EE5\u4E0E\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u548C\u9879\u76EE\u5171\u4EAB\u3002")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mvn clean (\u6E05\u9664) : \u6E05\u9664\u4E0A\u6B21\u7F16\u8BD1\u7684\u7ED3\u679C")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6D4B\u8BD5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins hello-world]# mvn test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6253\u5305")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins hello-world]# mvn package  #\u4F1A\u53BBmaven\u7684\u4E2D\u592E\u4ED3\u5E93\u53BB\u4E0B\u8F7D\u9700\u8981\u7684\u4F9D\u8D56\u5305\u548C\u63D2\u4EF6\u5230.m2\u76EE\u5F55\u4E0B")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6253\u5305\u7ED3\u679C")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins hello-world]# ll target/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 17 2019-11-20 22:13 classes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3130 2019-11-20 23:39 hello-world-1.0-SNAPSHOT.jar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 28 2019-11-20 23:38 maven-archiver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 35 2019-11-20 22:13 maven-status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 2872 2019-11-20 23:38 original-hello-world-1.0-SNAPSHOT.jar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root 125 2019-11-20 22:14 surefire-reports")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 17 2019-11-20 22:13 test-classes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mn=s("h4",{id:"_03-\u90E8\u7F72-tomcat-\u53CA\u6570\u636E\u5E93",tabindex:"-1"},[n("03. \u90E8\u7F72 Tomcat \u53CA\u6570\u636E\u5E93 "),s("a",{class:"header-anchor",href:"#_03-\u90E8\u7F72-tomcat-\u53CA\u6570\u636E\u5E93","aria-hidden":"true"},"#")],-1),yn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u4E0A\u4F20\u538B\u7F29\u5305")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# ll")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 9128610 Mar 27 2019 apache-tomcat-8.0.27.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 170023183 Aug 14 2018 jdk-8u181-linux-x64.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5B89\u88C5JDK")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u89E3\u538BTomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# mkdir /application")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# tar xf apache-tomcat-8.0.27.tar.gz -C /application")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u521B\u5EFA\u8F6F\u8FDE\u63A5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# ln -s /application/apache-tomcat-8.0.27 /application/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#tomcat\u542F\u52A8\u52A0\u901F\u7684\u65B9\u6CD5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# vim /usr/java/jdk1.8.0_181-amd64/jre/lib/security/java.security ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"117 securerandom.source=file:/dev/urandom #\u4FEE\u6539\u4E4B\u540E")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u542F\u52A8tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# /application/tomcat/bin/startup.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CATALINA_BASE: /application/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CATALINA_HOME: /application/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CATALINA_TMPDIR: /application/tomcat/temp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using JRE_HOME: /usr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using CLASSPATH: /application/tomcat/bin/bootstrap.jar:/application/tomcat/bin/tomcat-juli.jar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Tomcat started.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u68C0\u67E5\u7AEF\u53E3")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6D4F\u89C8\u5668\u4F7F\u75288080\u7AEF\u53E3\u8BBF\u95EE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_137.png",alt:"img"})],-1),un=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u4E3A\u9879\u76EE\u51C6\u5907\u597D\u6570\u636E\u5E93jeesns\uFF0C\u8BBE\u7F6E\u6570\u636E\u5E93root\u7528\u6237\u5BC6\u7801\u4E3Aroot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5B89\u88C5\u6570\u636E\u5E93")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# yum install mariadb-server -y")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# systemctl start mariadb.service ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# mysqladmin password 'root'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u521B\u5EFAjeesns\u5E93")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@tomcat ~]# mysql -uroot -proot -e "create database jeesns;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dev\u4E0A\u9762\u4E0A\u4F20\u4E00\u4E2A\u9879\u76EE")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5C06\u8BE5\u6570\u636E\u5E93\u4F20\u8F93\u5230tomcat\u8282\u70B9\u8FDB\u884C\u5BFC\u5165")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# scp jeesns-web/database/jeesns.sql root@10.0.0.80:~")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5BFC\u5165\u6570\u636E\u5E93")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6253\u5305jeesns\u9879\u76EE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# mvn package")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6253\u5305\u4E4B\u540E\u751F\u6210\u7684war\u5305")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u5C06\u5176\u624B\u52A8\u4F20\u8F93\u5230tomcat\u8282\u70B9\u4E0A\u9762\u6D4B\u8BD5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@git ~/jeesns]# scp jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6D4F\u89C8\u5668\u5237\u65B0\u6D4B\u8BD5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png",alt:"img"})],-1),hn=s("h4",{id:"_04-\u521B\u5EFA\u4E00\u4E2A-jeesns-\u9879\u76EE",tabindex:"-1"},[n("04. \u521B\u5EFA\u4E00\u4E2A jeesns \u9879\u76EE "),s("a",{class:"header-anchor",href:"#_04-\u521B\u5EFA\u4E00\u4E2A-jeesns-\u9879\u76EE","aria-hidden":"true"},"#")],-1),_n=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_138.png",alt:"img"})],-1),wn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6E05\u9664\u4E0A\u6B21\u7F16\u8BD1\u7684\u7ED3\u679C")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bn=s("h4",{id:"_05-jenkins-\u521B\u5EFA\u4E00\u4E2A-maven",tabindex:"-1"},[n("05. Jenkins \u521B\u5EFA\u4E00\u4E2A maven "),s("a",{class:"header-anchor",href:"#_05-jenkins-\u521B\u5EFA\u4E00\u4E2A-maven","aria-hidden":"true"},"#")],-1),vn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_140.png",alt:"img"})],-1),xn=s("h1",{id:"\u6B64\u5904\u5982\u679C\u51FA\u73B0\u62A5\u9519\uFF0C\u8BF7\u6DFB\u52A0-deploy-keys",tabindex:"-1"},[n("\u6B64\u5904\u5982\u679C\u51FA\u73B0\u62A5\u9519\uFF0C\u8BF7\u6DFB\u52A0 Deploy Keys "),s("a",{class:"header-anchor",href:"#\u6B64\u5904\u5982\u679C\u51FA\u73B0\u62A5\u9519\uFF0C\u8BF7\u6DFB\u52A0-deploy-keys","aria-hidden":"true"},"#")],-1),kn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_141.png",alt:"img"})],-1),jn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_142.png",alt:"img"})],-1),fn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_143.png",alt:"img"})],-1),qn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u53D1\u73B0\u5DF2\u7ECF\u6253\u5305\u6210\u529F\u4E86")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ll /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 26106007 2019-11-23 11:49 /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#jenkins\u7528\u6237\u7ED9tomcat\u8282\u70B9\u8FDB\u884C\u5206\u53D1\u516C\u94A5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins ~]# ssh-copy-id -i .ssh/id_rsa.pub root@10.0.0.80 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#\u6784\u5EFA\u540E\u64CD\u4F5C")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ssh root@10.0.0.80 "mv /application/tomcat/webapps/ROOT.war /tmp/$BUILD_ID-ROOT.war" ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scp /var/lib/jenkins/workspace/maven-job/jeesns-web/target/jeesns-web.war root@10.0.0.80:/application/tomcat/webapps/ROOT.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_144.png",alt:"img"})],-1),In=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_145.png",alt:"img"})],-1),Jn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@tomcat ~]# ll /tmp/ ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 50992 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 26106004 2019-11-23 01:28 2-ROOT.war ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tn=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_146.png",alt:"img"})],-1),On=s("h1",{id:"pipeline-\u9879\u76EE",tabindex:"-1"},[n("Pipeline \u9879\u76EE "),s("a",{class:"header-anchor",href:"#pipeline-\u9879\u76EE","aria-hidden":"true"},"#")],-1),zn=s("h4",{id:"_01-\u57FA\u7840\u6982\u5FF5",tabindex:"-1"},[n("01. \u57FA\u7840\u6982\u5FF5 "),s("a",{class:"header-anchor",href:"#_01-\u57FA\u7840\u6982\u5FF5","aria-hidden":"true"},"#")],-1),Nn=s("p",null,[s("strong",null,"CI/CD \u6301\u7EED\u96C6\u6210 / \u6301\u7EED\u90E8\u7F72")],-1),En=s("p",null,"\u6301\u7EED\u96C6\u6210 (Continuous integration) \u662F\u4E00\u79CD\u8F6F\u4EF6\u5F00\u53D1\u5B9E\u8DF5\uFF0C\u5373\u56E2\u961F\u5F00\u53D1\u6210\u5458\u7ECF\u5E38\u96C6\u6210\u5B83\u4EEC\u7684\u5DE5\u4F5C\uFF0C\u901A\u8FC7\u6BCF\u4E2A\u6210\u5458",-1),Pn=s("p",null,"\u6BCF\u5929\u81F3\u5C11\u96C6\u6210\u4E00\u6B21\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u6BCF\u5929\u53EF\u80FD\u4F1A\u53D1\u751F\u591A\u6B21\u96C6\u6210\u3002\u6BCF\u6B21\u96C6\u6210\u90FD\u901A\u8FC7\u81EA\u52A8\u5316\u7684\u6784\u5EFA\uFF08\u5305\u62EC\u7F16\u8BD1\uFF0C\u53D1\u5E03\uFF0C\u81EA\u52A8",-1),Un=s("p",null,"\u5316\u6D4B\u8BD5\uFF09\u6765\u9A8C\u8BC1\uFF0C\u4ECE\u800C\u5C3D\u65E9\u5730\u53D1\u73B0\u96C6\u6210\u9519\u8BEF\u3002",-1),Hn=s("p",null,"\u6BD4\u5982\uFF08\u4F60\u5BB6\u88C5\u4FEE\u53A8\u623F\uFF0C\u5176\u4E2D\u4E00\u9879\u662F\u94FA\u5730\u7816\uFF0C\u8FB9\u89D2\u5730\u7816\u8981\u5207\u5272\u5927\u5C0F\u3002\u5982\u679C\u4E00\u6B21\u5168\u5207\u5272\u5B8C\u518D\u94FA\u4E0A\u53BB\uFF0C\u53D1\u73B0\u5C3A\u5BF8\u6709\u8BEF\u7684\u8BDD",-1),Mn=s("p",null,"\u6D6A\u8D39\u548C\u8FD4\u5DE5\u65F6\u95F4\u5C31\u5927\u4E86\uFF0C\u4E0D\u5982\u5207\u4E00\u5757\u94FA\u4E00\u5757\u3002\u8FD9\u5C31\u662F\u6301\u7EED\u96C6\u6210\u3002\uFF09",-1),Rn=s("p",null,"\u6301\u7EED\u90E8\u7F72\uFF08continuous deployment\uFF09\u662F\u901A\u8FC7\u81EA\u52A8\u5316\u7684\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u90E8\u7F72\u5FAA\u73AF\u6765\u5FEB\u901F\u4EA4\u4ED8\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u3002\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u4EE3\u8868\u4E86\u4E00\u4E2A\u5F00\u53D1\u56E2\u961F\u5DE5\u7A0B\u5316\u7684\u7A0B\u5EA6\uFF0C\u6BD5\u7ADF\u5FEB\u901F\u8FD0\u8F6C\u7684\u4E92\u8054\u7F51\u516C\u53F8\u4EBA\u529B\u6210\u672C\u4F1A\u9AD8\u4E8E\u673A\u5668\uFF0C\u6295\u8D44\u673A\u5668\u4F18\u5316\u5F00\u53D1\u6D41\u7A0B\u5316",-1),Ln=s("p",null,"\u76F8\u5BF9\u4E5F\u63D0\u9AD8\u4E86\u4EBA\u7684\u6548\u7387\u3002",-1),Bn=s("p",null,"\u6BD4\u5982\uFF08\u88C5\u4FEE\u53A8\u623F\u6709\u5F88\u591A\u90E8\u5206\uFF0C\u6BCF\u4E2A\u90E8\u5206\u90FD\u6709\u68C0\u6D4B\u624B\u6BB5\uFF0C\u5982\u5730\u7816\u94FA\u5B8C\u4E86\u8981\u6D4B\u8BD5\u6F0F\u6C34\u4E0E\u5426\uFF0C\u7EBF\u8DEF\u94FA\u5B8C\u4E86\u8981\u901A\u7535\u6D4B\u8BD5\u7535\u8DEF",-1),$n=s("p",null,"\u901A\u987A\uFF0C\u6C34\u7BA1\u88C5\u597D\u4E86\u4E5F\u8981\u6D4B\u8BD5\u51B7\u6C34\u70ED\u6C34\u3002\u5982\u679C\u5168\u90E8\u88C5\u5B8C\u4E86\u518D\u6D4B\uFF0C\u51FA\u73B0\u95EE\u9898\u53EF\u80FD\u4F1A\u4E92\u76F8\u5F71\u54CD\uFF0C\u6BD4\u5982\u7535\u8DEF\u4E0D\u884C\u53EF\u80FD\u8981\u628A\u5730",-1),Wn=s("p",null,"\u7816\u7ED9\u6316\u5F00\u2026\u2026\u3002\u90A3\u4E48\u6BCF\u5B8C\u6210\u4E00\u90E8\u5206\u5C31\u6D4B\u8BD5\uFF0C\u8FD9\u662F\u6301\u7EED\u90E8\u7F72\u3002\uFF09",-1),Kn=s("p",null,"\u6301\u7EED\u4EA4\u4ED8 Continuous Delivery: \u9891\u7E41\u5730\u5C06\u8F6F\u4EF6\u7684\u65B0\u7248\u672C\uFF0C\u4EA4\u4ED8\u7ED9\u8D28\u91CF\u56E2\u961F\u6216\u8005\u7528\u6237\uFF0C\u4EE5\u4F9B\u8BC4\u5BA1\u5C3D\u65E9\u53D1\u73B0\u751F\u4EA7\u73AF\u5883\u4E2D\u5B58\u5728\u7684\u95EE\u9898\uFF1B\u5982\u679C\u8BC4\u5BA1\u901A\u8FC7\uFF0C\u4EE3\u7801\u5C31\u8FDB\u5165\u751F\u4EA7\u9636\u6BB5.",-1),Gn=s("p",null,"\u6BD4\u5982\uFF08\u5168\u90E8\u88C5\u4FEE\u5B8C\u4E86\uFF0C\u4F60\u53BB\u9A8C\u6536\uFF0C\u53D1\u73B0\u5730\u7816\u989C\u8272\u4E0D\u5408\u610F\uFF0C\u6C34\u6C60\u592A\u5C0F\uFF0C\u7076\u53F0\u4F4D\u7F6E\u4E0D\u5BF9\uFF0C\u8FD4\u5DE5\u5417\uFF1F\u6240\u4EE5\u4E0D\u5982\u6CA1\u5B8C\u6210\u4E00\u90E8",-1),Fn=s("p",null,"\u5206\uFF0C\u4F60\u5C31\u53BB\u7528\u4E00\u4E0B\u8BD5\u7528\u9A8C\u6536\uFF0C\u8FD9\u5C31\u662F\u6301\u7EED\u4EA4\u4ED8\u3002\uFF09",-1),Vn=s("p",null,"\u654F\u6377\u601D\u60F3\u4E2D\u63D0\u51FA\u7684\u8FD9\u4E09\u4E2A\u89C2\u70B9\uFF0C\u8FD8\u5F3A\u8C03\u4E00\u4EF6\u4E8B\uFF1A\u901A\u8FC7\u6280\u672F\u624B\u6BB5\u81EA\u52A8\u5316\u8FD9\u4E09\u4E2A\u5DE5\u4F5C\u3002\u52A0\u5FEB\u4EA4\u4ED8\u901F\u5EA6\u3002",-1),Qn=s("p",null,"\\1. \u4EC0\u4E48\u662F pipeline",-1),Yn=s("p",null,"Jenkins 2.0 \u7684\u7CBE\u9AD3\u662F Pipeline as Code\uFF0C\u662F\u5E2E\u52A9 Jenkins \u5B9E\u73B0 CI \u5230 CD \u8F6C\u53D8\u7684\u91CD\u8981\u89D2\u8272\u3002\u4EC0\u4E48\u662F Pipeline\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u4E00\u5957\u8FD0\u884C\u4E8E Jenkins \u4E0A\u7684\u5DE5\u4F5C\u6D41\u6846\u67B6\uFF0C\u5C06\u539F\u672C\u72EC\u7ACB\u8FD0\u884C\u4E8E\u5355\u4E2A\u6216\u8005\u591A\u4E2A\u8282\u70B9\u7684\u4EFB\u52A1\u8FDE\u63A5\u8D77\u6765\uFF0C\u5B9E\u73B0\u5355\u4E2A",-1),Xn=s("p",null,"\u4EFB\u52A1\u96BE\u4EE5\u5B8C\u6210\u7684\u590D\u6742\u53D1\u5E03\u6D41\u7A0B\u3002Pipeline \u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\u4E00\u5957 Groovy DSL\uFF0C\u4EFB\u4F55\u53D1\u5E03\u6D41\u7A0B\u90FD\u53EF\u4EE5\u8868\u8FF0\u4E3A\u4E00\u6BB5 Groovy \u811A\u672C\uFF0C\u5E76\u4E14 Jenkins \u652F\u6301\u4ECE\u4EE3\u7801\u5E93\u76F4\u63A5\u8BFB\u53D6\u811A\u672C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86 Pipeline as Code \u7684\u7406\u5FF5\u3002",-1),Zn=s("p",null,"2.Pipeline \u6982\u5FF5",-1),sl=s("p",null,"Pipeline \u662F\u4E00\u4E2A\u7528\u6237\u5B9A\u4E49\u7684 CD \u6D41\u6C34\u7EBF\u6A21\u5F0F\u3002Pipeline \u4EE3\u7801\u5B9A\u4E49\u4E86\u901A\u5E38\u5305\u542B\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u53D1\u5E03\u6B65\u9AA4\u7684\u5B8C\u6574\u7684\u6784",-1),nl=s("p",null,"\u5EFA\u8FC7\u7A0B\u3002",-1),ll=s("p",null,"Node node \u662F\u4E00\u4E2A\u673A\u5668\uFF0C\u5B83\u662F Jenkins \u73AF\u5883\u7684\u4E00\u90E8\u5206\uFF0C\u5E76\u4E14\u80FD\u591F\u6267\u884C Pipeline\u3002\u540C\u65F6\uFF0Cnode \u4EE3\u7801\u5757\u4E5F\u662F\u811A\u672C\u5F0F",-1),al=s("p",null,"Pipeline \u8BED\u6CD5\u7684\u5173\u952E\u7279\u6027\u3002",-1),el=s("p",null,'Stage Stage \u5757\u5B9A\u4E49\u4E86\u5728\u6574\u4E2A Pipeline \u4E2D\u6267\u884C\u7684\u6982\u5FF5\u4E0A\u4E0D\u540C\u7684\u4EFB\u52A1\u5B50\u96C6\uFF08\u4F8B\u5982 "\u6784\u5EFA"\uFF0C"\u6D4B\u8BD5" \u548C "\u90E8\u7F72" \u9636\u6BB5\uFF09\uFF0C',-1),ol=s("p",null,"\u8BB8\u591A\u63D2\u4EF6\u4F7F\u7528\u5B83\u6765\u53EF\u89C6\u5316\u6216\u5448\u73B0 Jenkins \u7BA1\u9053\u72B6\u6001 / \u8FDB\u5EA6\u3002",-1),tl=s("p",null,'Step \u4E00\u9879\u4EFB\u52A1\u3002\u4ECE\u6839\u672C\u4E0A\u8BB2\uFF0C\u4E00\u4E2A\u6B65\u9AA4\u544A\u8BC9 Jenkins \u5728\u7279\u5B9A\u65F6\u95F4\u70B9\uFF08\u6216\u8FC7\u7A0B\u4E2D\u7684 "\u6B65\u9AA4"\uFF09\u8981\u505A\u4EC0\u4E48\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528',-1),cl=s("p",null,"sh step\uFF1Ash 'make' \u53EF\u4EE5\u6267\u884C make \u8FD9\u4E2A shell \u547D\u4EE4\u3002",-1),il=s("p",null,"3.jenkins file \u58F0\u660E\u5F0F \u811A\u672C\u5F0F",-1),pl=s("p",null,"\u811A\u672C\u5F0F\u8BED\u6CD5\u683C\u5F0F\uFF1A",-1),rl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pipeline{ ")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cl=s("h4",{id:"_02-\u521B\u5EFA-pipeline-\u9879\u76EE",tabindex:"-1"},[n("02. \u521B\u5EFA pipeline \u9879\u76EE "),s("a",{class:"header-anchor",href:"#_02-\u521B\u5EFA-pipeline-\u9879\u76EE","aria-hidden":"true"},"#")],-1),Al=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_147.png",alt:"img"})],-1),gl=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_148.png",alt:"img"})],-1),ml=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_149.png",alt:"img"})],-1),yl=s("p",null,"\u5728\u4ED3\u5E93\u521B\u5EFA\u4E00\u4E2A Jenkinsfile \u6587\u4EF6\u8FDB\u884C\u8C03\u7528",-1),dl=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_150.png",alt:"img"})],-1),ul=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png",alt:"img"})],-1),Dl=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_152.png",alt:"img"})],-1),hl=s("p",null,"\u7F16\u8F91 Jenkinsfile \u6587\u4EF6",-1),_l=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pipeline{ ")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wl=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_153.png",alt:"img"})],-1),bl=s("p",null,"\u6267\u884C\u6784\u5EFA\u62A5\u9519",-1),vl=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_154.png",alt:"img"})],-1),xl=s("p",null,"\u4FEE\u6539\u811A\u672C\u518D\u6B21\u6784\u5EFA",-1),kl=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/112319_1634_155.png",alt:"img"})],-1),jl=s("h1",{id:"\u56DE\u6EDA\u811A\u672C",tabindex:"-1"},[n("\u56DE\u6EDA\u811A\u672C "),s("a",{class:"header-anchor",href:"#\u56DE\u6EDA\u811A\u672C","aria-hidden":"true"},"#")],-1),fl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cd /usr/share/nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ls -d web-*")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'read -p "\u8BF7\u590D\u5236\u4F60\u9700\u8981\u56DE\u6EDA\u7684\u76EE\u5F55\u7248\u672C" ver')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rm -rf html*")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ln -s $ver html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1);function ql(a,Sl,Il,Jl,t,Tl){const c=i;return C(),r(c,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":l(()=>[m,y,d,u,D,h,_,w,b,v,x,k,j,f,q,S,I,J,T,O,z,N,E,P,U,H,M,R,L,B,$,W,K,G,F,V,Q,Y,X,Z,ss,ns,ls,as,es,os,ts,cs,is,ps,rs,Cs,As,gs,ms,ys,ds,us,Ds,hs,_s,ws,bs,vs,xs,ks,js,fs,qs,Ss,Is,Js,Ts,Os,zs,Ns,Es,Ps,Us,Hs,Ms,Rs,Ls,Bs,$s,Ws,Ks,Gs,Fs,Vs,Qs,Ys,Xs,Zs,sn,nn,ln,an,en,on,tn,cn,pn,rn,Cn,An,gn,mn,yn,dn,un,Dn,hn,_n,wn,bn,vn,xn,kn,jn,fn,qn,Sn,In,Jn,Tn,On,zn,Nn,En,Pn,Un,Hn,Mn,Rn,Ln,Bn,$n,Wn,Kn,Gn,Fn,Vn,Qn,Yn,Xn,Zn,sl,nl,ll,al,el,ol,tl,cl,il,pl,rl,Cl,Al,gl,ml,yl,dl,ul,Dl,hl,_l,wl,bl,vl,xl,kl,jl,fl]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Hl=p(g,[["render",ql]]);export{Ul as __pageData,Hl as default};
