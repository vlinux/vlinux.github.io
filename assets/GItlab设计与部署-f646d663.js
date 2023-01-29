import{_}from"./ValaxyMain.vue_vue_type_style_index_0_lang-f9369a8c.js";import{_ as d,c as p,w as o,o as g,b as t,U as e,q as i,r as a,W as u,p as h}from"./app-c05f80d3.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-d10a4101.js";import"./YunCard.vue_vue_type_style_index_0_lang-b99348e1.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-8e036763.js";const Oo=JSON.parse('{"title":"GItlab设计与部署","description":"","frontmatter":{"title":"GItlab设计与部署","categories":"DevOps","tags":["GItlab"],"date":"2020-03-09T17:16:00.000Z"},"headers":[{"level":3,"title":"7. Gitlab使用","slug":"_7-gitlab使用","link":"#_7-gitlab使用","children":[]},{"level":3,"title":"8. Gitlab备份与恢复","slug":"_8-gitlab备份与恢复","link":"#_8-gitlab备份与恢复","children":[]}],"relativePath":"pages/posts/GItlab设计与部署.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/GItlab设计与部署.md","lastUpdated":1671090556000}'),l=JSON.parse('{"title":"GItlab设计与部署","description":"","frontmatter":{"title":"GItlab设计与部署","categories":"DevOps","tags":["GItlab"],"date":"2020-03-09T17:16:00.000Z"},"headers":[{"level":3,"title":"7. Gitlab使用","slug":"_7-gitlab使用","link":"#_7-gitlab使用","children":[]},{"level":3,"title":"8. Gitlab备份与恢复","slug":"_8-gitlab备份与恢复","link":"#_8-gitlab备份与恢复","children":[]}],"relativePath":"pages/posts/GItlab设计与部署.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/GItlab设计与部署.md","lastUpdated":1671090556000}'),m={name:"pages/posts/GItlab设计与部署.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){h("pageData",l)}},w={id:"gitlab安装",tabindex:"-1"},b=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_22.png",alt:"img"})],-1),f=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_23.png",alt:"img"})],-1),v=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_24.png",alt:"img"})],-1),k=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_25.png",alt:"img"})],-1),y=t("p",null,"[root@git ~]# yum install -y curl policycoreutils-python openssh-server # 安装依赖",-1),x=t("p",null,"#上传gitlab安装包 下载方式可通过国内清华源gitlab-ce社区版本下载",-1),S=t("p",null,[e("[root@git ~]# ll"),t("br"),e(" drwxr-xr-x 3 root root 39 Nov 16 15:04 git_data"),t("br"),e(" -rw-r--r-- 1 root root 389758391 Aug 22 2018 gitlab-ce-10.2.2-ce.0.el7.x86_64.rpm")],-1),G=t("p",null,"#rpm安装，发现缺少依赖",-1),A=t("p",null,[e("[root@git ~]# rpm -ivh gitlab-ce-10.2.2-ce.0.el7.x86_64.rpm"),t("br"),e(" warning: gitlab-ce-10.2.2-ce.0.el7.x86_64.rpm: Header V4 RSA/SHA1 Signature, key ID f27eab47: NOKEY"),t("br"),e(" error: Failed dependencies:"),t("br"),e(" policycoreutils-python is needed by gitlab-ce-10.2.2-ce.0.el7.x86_64")],-1),T=t("p",null,"#安装依赖之后再次安装",-1),C=t("p",null,"[root@git ~]# yum install -y policycoreutils-python",-1),j=t("p",null,"[root@git ~]# vim /etc/gitlab/gitlab.rb # gitlab 配置文件",-1),P={id:"更改配置文件后需重新配置",tabindex:"-1"},q=t("p",null,"[root@git ~]# gitlab-ctl reconfigure",-1),O=t("p",null,"/opt/gitlab/ # gitlab的程序安装目录",-1),D=t("p",null,"/var/opt/gitlab # gitlab目录数据目录",-1),I=t("p",null,"/var/opt/gitlab/git-dfata # 存放仓库数据",-1),B=t("p",null,"gitlab-ctl status # 查看目前gitlab所有服务运维状态",-1),E=t("p",null,"gitlab-ctl stop # 停止gitlab服务",-1),N=t("p",null,"gitlab-ctl stop nginx # 单独停止某个服务",-1),R=t("p",null,"gitlab-ctl tail # 查看所有服务的日志",-1),Y=t("p",null,"Gitlab的服务构成：",-1),M=t("p",null,"nginx： #静态web服务器",-1),H=t("p",null,"gitlab-workhorse: #轻量级的反向代理服务器",-1),U=t("p",null,"logrotate： #日志文件管理工具",-1),$=t("p",null,"postgresql： #数据库",-1),W=t("p",null,"redis： #缓存数据库",-1),V=t("p",null,"sidekiq： #用于在后台执行队列任务（异步执行）。（Ruby）",-1),Q=t("p",null,"unicorn：An HTTP server for Rack applications，GitLab Rails应用是托管在这个服务器上面的。（Ruby Web Server,主要使用Ruby编写）",-1),z=t("p",null,"#通过浏览器输入IP地址进行访问gitlab",-1),K=t("p",null,[e("使用默认用户登录： root"),t("br"),e(" 密码： 12345678")],-1),L=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_26.png",alt:"img"})],-1),X=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_27.png",alt:"img"})],-1),F={id:"_7-gitlab使用",tabindex:"-1"},Z={id:"_01-外观配置",tabindex:"-1"},J=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_28.png",alt:"img"})],-1),tt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_29.png",alt:"img"})],-1),et={id:"_02-gitlab汉化配置",tabindex:"-1"},ot=t("br",null,null,-1),st={id:"_03-注册限制",tabindex:"-1"},it=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_30.png",alt:"img"})],-1),nt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_31.png",alt:"img"})],-1),at={id:"_04-创建用户及组",tabindex:"-1"},lt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_32.png",alt:"img"})],-1),rt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_33.png",alt:"img"})],-1),ct={id:"_05-创建用户",tabindex:"-1"},_t=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_34.png",alt:"img"})],-1),dt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_35.png",alt:"img"})],-1),pt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_36.png",alt:"img"})],-1),gt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_37.png",alt:"img"})],-1),ut={id:"_06-把用户添加到组",tabindex:"-1"},ht=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_38.png",alt:"img"})],-1),mt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_39.png",alt:"img"})],-1),wt={id:"_07-创建项目",tabindex:"-1"},bt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_40.png",alt:"img"})],-1),ft=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_41.png",alt:"img"})],-1),vt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_42.png",alt:"img"})],-1),kt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_43.png",alt:"img"})],-1),yt=t("p",null,"返回首页，进入项目",-1),xt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_44.png",alt:"img"})],-1),St=t("p",null,"#删除github的仓库",-1),Gt=t("p",null,[e("[root@git ~/git_data]# git remote remove origin"),t("br"),e(" [root@git ~/git_data]# git remote")],-1),At=t("p",null,"#添加gitlab的远程仓库，进行代码上传",-1),Tt=t("br",null,null,-1),Ct=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_45.png",alt:"img"})],-1),jt={id:"_08-推送代码到gitlab",tabindex:"-1"},Pt=t("br",null,null,-1),qt=t("p",null,"#刷新Gitlab仓库",-1),Ot=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_46.png",alt:"img"})],-1),Dt={id:"_09-开发推送代码到gitlab",tabindex:"-1"},It=t("p",null,"#给其创建dev用户，并给其分配到项目组，然后进行登录",-1),Bt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_47.png",alt:"img"})],-1),Et=t("p",null,"#克隆一台服务器，作为开发人员使用，并进行生成密钥文件，进行密钥认证",-1),Nt=t("p",null,[e("[root@dev ~]# ssh-keygen -t rsa Generating public/private rsa key pair. Enter file in which to save the key (/root/.ssh/id_rsa):"),t("br"),e(" Created directory '/root/.ssh'. Enter passphrase (empty for no passphrase):"),t("br"),e(" Enter same passphrase again:"),t("br"),e(" Your identification has been saved in /root/.ssh/id_rsa. Your public key has been saved in /root/.ssh/id_rsa.pub. The key fingerprint is: SHA256:qx5BldjQ4qy+HTSH9zpg8nVQqJDNP/M8gfq/4k+E09c root@dev The key's randomart image is: +---[RSA 2048]----+ | +.=.o | | o =.= . | | +.+ o | | .+. o. . | | .=.S o.. E | | o.+=.==. | | . +o+..o. | | ...++o | | .o+.o=+. | +----[SHA256]-----+ [root@dev ~]# cat .ssh/id_rsa.pub"),t("br"),e(" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDa4HBEOk10oode36lPcrybpjK++3bsjbaO67CjzY9S8w2WbAFfsVUwM+Hz8uRlehfjiCxuXF/oQgK2TATDdVYw89CrUMMmjuR1nRKKslA/Xhj0XxIjtUY+86UpVYp0t3963mmHrvoe45DTHYHIQqHEP8FM1fi5T6EzYrVhWFmmjqQYbVYQL+4oHwJBsCvQ4XZ6PCgTBlw2D8s1jk2Sx2vTsPLURA/+iL7WqzM5bGQLcAP5R3yG09v5O0+C/RLIHMw/qY54DaxVGTXhs0PnrfQhdzlUcKREsGkF7Ya3khyfss1jY+/QslS3Y6be9s8sfBKuWwx3Llob2nkgKiZOpQ+5 root@dev #复制其公钥")],-1),Rt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_48.png",alt:"img"})],-1),Yt=t("p",null,"#进行将代码克隆下来，进行更改",-1),Mt=t("p",null,"#修改代码",-1),Ht=t("p",null,'[root@dev ~]# cd git_test/ [root@dev ~/git_test]# echo dev01 >> a [root@dev ~/git_test]# git commit -am "dev01 add a"',-1),Ut=t("pre",null,[t("code",null,` Please tell me who you are.
`)],-1),$t=t("p",null,"Run",-1),Wt=t("p",null,"to set your account's default identity. Omit --global to set the identity only in this repository.",-1),Vt=t("p",null,"fatal: unable to auto-detect email address (got 'root@dev.(none)')",-1),Qt=t("p",null,"#配置邮件及用户信息",-1),zt=t("p",null,'[root@dev ~/git_test]# git commit -am "dev01 add a" [master 6cc6aff] dev01 add a 1 file changed, 1 insertion(+)',-1),Kt=t("p",null,"#推送到远程仓库",-1),Lt=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_49.png",alt:"img"})],-1),Xt={id:"_10-分支保护",tabindex:"-1"},Ft=t("p",null,"#创建一个dev分支",-1),Zt=t("br",null,null,-1),Jt=t("br",null,null,-1),te=t("p",null,"#登录root用户，进行分支保护",-1),ee=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_50.png",alt:"img"})],-1),oe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_51.png",alt:"img"})],-1),se={id:"_11-代码合并",tabindex:"-1"},ie=t("p",null,"#清除旧的分支，创建新的分支，并切换",-1),ne=t("p",null,"[root@dev ~/git_test]# git branch -d dev Deleted branch dev (was 6cc6aff). [root@dev ~/git_test]# git checkout -b dev Switched to a new branch 'dev' [root@dev ~/git_test]# git branch dev master",-1),ae=t("p",null,"#推送到远程仓库",-1),le=t("br",null,null,-1),re=t("br",null,null,-1),ce=t("p",null,"#dev分支上面有a文件的最新信息，而master中没有",-1),_e=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_52.png",alt:"img"})],-1),de=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_53.png",alt:"img"})],-1),pe=t("p",null,"进行合并分支",-1),ge=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_54.png",alt:"img"})],-1),ue=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_55.png",alt:"img"})],-1),he=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_56.png",alt:"img"})],-1),me=t("p",null,"登录root用户进行处理请求",-1),we=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_57.png",alt:"img"})],-1),be=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_58.png",alt:"img"})],-1),fe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_59.png",alt:"img"})],-1),ve={id:"_12-git-gui安装",tabindex:"-1"},ke=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_60.png",alt:"img"})],-1),ye=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_61.png",alt:"img"})],-1),xe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_62.png",alt:"img"})],-1),Se=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_63.png",alt:"img"})],-1),Ge=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_64.png",alt:"img"})],-1),Ae=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_65.png",alt:"img"})],-1),Te=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_66.png",alt:"img"})],-1),Ce=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_67.png",alt:"img"})],-1),je=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_68.png",alt:"img"})],-1),Pe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_69.png",alt:"img"})],-1),qe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_70.png",alt:"img"})],-1),Oe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_71.png",alt:"img"})],-1),De=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_72.png",alt:"img"})],-1),Ie=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_73.png",alt:"img"})],-1),Be=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_74.png",alt:"img"})],-1),Ee=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_75.png",alt:"img"})],-1),Ne=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_76.png",alt:"img"})],-1),Re=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_77.png",alt:"img"})],-1),Ye=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_78.png",alt:"img"})],-1),Me=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_79.png",alt:"img"})],-1),He=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_80.png",alt:"img"})],-1),Ue=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_81.png",alt:"img"})],-1),$e=t("p",null,"修改代码",-1),We=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_82.png",alt:"img"})],-1),Ve=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_83.png",alt:"img"})],-1),Qe=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_84.png",alt:"img"})],-1),ze=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_85.png",alt:"img"})],-1),Ke={id:"_8-gitlab备份与恢复",tabindex:"-1"},Le=t("p",null,"对gitlab进行备份将会创建一个包含所有库和附件的归档文件。对备份的恢复只能恢复到与备份时的gitlab相同的",-1),Xe=t("p",null,"版本。将gitlab迁移到另一台服务器上的最佳方法就是通过备份和还原。",-1),Fe=t("p",null,"gitlab提供了一个简单的命令行来备份整个gitlab，并且能灵活的满足需求。",-1),Ze=t("p",null,"备份文件将保存在配置文件中定义的backup_path中，文件名为TIMESTAMP_gitlab_backup.tar,TIMESTAMP为备份时的时间戳。TIMESTAMP的格式为：EPOCH_YYYY_MM_DD_Gitlab‐version。如果自定义备份目录需要赋予git权限。",-1),Je={id:"_01-备份",tabindex:"-1"},to=t("p",null,"#配置文件中加入 [root@git ~/git_data]# vim /etc/gitlab/gitlab.rb gitlab_rails['manage_backup_path'] = true #开启备份 gitlab_rails['backup_path'] = '/data/backup/gitlab' #备份目录 gitlab_rails['backup_archive_permissions'] = 0644 #生成的备份文件权限 gitlab_rails['backup_keep_time'] = 604800 #备份保留的时间（以秒为单位，这是七天默认值） [root@git ~/git_data]# mkdir /data/backup/gitlab [root@git ~/git_data]# chown ‐R git.git /data/backup/gitlab",-1),eo=t("p",null,"#完成后执行下面命令进行生效",-1),oo=t("p",null,"[root@git ~/git_data]# gitlab‐ctl reconfigure",-1),so=t("p",null,"#手动备份 [root@git ~/git_data]# gitlab-rake gitlab:backup:create",-1),io=t("p",null,"#检查结果 [root@git ~/git_data]# ll /data/opt/gitlab/ total 112 -rw-r--r-- 1 git git 112640 Nov 17 18:22 1573986174_2019_11_17_10.2.2_gitlab_backup.tar",-1),no=t("p",null,"自动备份需要写一个备份脚本及定时任务",-1),ao=t("p",null,"#Gitlab恢复操作",-1),lo=t("p",null,"Gitlab只能还原到与备份文件相同的gitlab版本。",-1),ro=t("p",null,"#误删除数据",-1),co=t("p",null,"[root@git ~/git_test]# rm -rf ./",-1),_o=t("p",null,"#提交推送",-1),po=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_86.png",alt:"img"})],-1),go={id:"_02-恢复",tabindex:"-1"},uo=t("p",null,"#停止相关服务",-1),ho=t("p",null,"[root@git ~/git_test]# gitlab-ctl stop unicorn ok: down: unicorn: 0s, normally up [root@git ~/git_test]# gitlab-ctl stop sidekiq ok: down: sidekiq: 1s, normally up [root@git ~/git_test]# gitlab-ctl status run: gitaly: (pid 78774) 15714s; run: log: (pid 78466) 15758s run: gitlab-monitor: (pid 78790) 15713s; run: log: (pid 78565) 15746s run: gitlab-workhorse: (pid 78762) 15714s; run: log: (pid 78419) 15776s run: logrotate: (pid 106694) 1364s; run: log: (pid 78447) 15764s run: nginx: (pid 78432) 15770s; run: log: (pid 78431) 15770s run: node-exporter: (pid 78515) 15752s; run: log: (pid 78514) 15752s run: postgres-exporter: (pid 78818) 15712s; run: log: (pid 78692) 15728s run: postgresql: (pid 78190) 15819s; run: log: (pid 78189) 15819s run: prometheus: (pid 78806) 15713s; run: log: (pid 78646) 15734s run: redis: (pid 78130) 15825s; run: log: (pid 78129) 15825s run: redis-exporter: (pid 78626) 15740s; run: log: (pid 78625) 15740s down: sidekiq: 8s, normally up; run: log: (pid 78402) 15782s down: unicorn: 20s, normally up; run: log: (pid 78363) 15788s",-1),mo=t("p",null,"#Gitlab的恢复操作会先将当前所有的数据清空，然后再根据备份数据进行恢复",-1),wo=t("p",null,"[root@git ~/git_test]# ll /data/opt/gitlab/ total 112 -rw------- 1 git git 112640 Nov 17 18:22 1573986174_2019_11_17_10.2.2_gitlab_backup.tar [root@git ~/git_test]# gitlab-rake gitlab:backup:restore BACKUP=1573986174_2019_11_17_10.2.2",-1),bo=t("p",null,"#启动gitlab [root@git ~/git_test]# gitlab-ctl start ok: run: gitaly: (pid 78774) 16168s ok: run: gitlab-monitor: (pid 78790) 16167s ok: run: gitlab-workhorse: (pid 78762) 16168s ok: run: logrotate: (pid 106694) 1818s ok: run: nginx: (pid 78432) 16224s ok: run: node-exporter: (pid 78515) 16206s ok: run: postgres-exporter: (pid 78818) 16166s ok: run: postgresql: (pid 78190) 16273s ok: run: prometheus: (pid 78806) 16167s ok: run: redis: (pid 78130) 16279s ok: run: redis-exporter: (pid 78626) 16194s ok: run: sidekiq: (pid 109932) 1s ok: run: unicorn: (pid 109939) 0s",-1),fo=t("p",null,"#检查是否恢复成功 [root@git ~/git_test]# gitlab-rake gitlab:check SANITIZE=true",-1),vo=t("p",null,[t("img",{src:"https://www.increase93.com/wp-content/uploads/2019/11/112319_1634_87.png",alt:"img"})],-1),ko=t("p",null,"#web界面数据已经恢复，从新克隆到本地",-1);function yo(n,xo,So,Go,r,Ao){const s=u,c=_;return g(),p(c,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":o(()=>[t("h1",w,[e("Gitlab安装 "),i(s,{class:"header-anchor",href:"#gitlab安装","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),t("p",null,[e("GitLab简介 GitLab 是一个用于仓库管理系统的开源项目。使用Git作为代码管理工具，并在此基础上搭建起来的web服务。可通过Web界面进行访问公开的或者私人项目。它拥有与Github类似的功能，能够浏览源代码，管理权限和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序(Wall)进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用。 常用的网站： 官网："),i(s,{href:"https://about.gitlab.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("https://about.gitlab.com/")]),_:1}),e(" 国内镜像："),i(s,{href:"https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/")]),_:1}),e(" 安装环境： 1、CentOS 6或者7 2、2G内存（实验）生产（至少4G） 3、安装包：gitlab-ce-10.2.2-ce 4、禁用防火墙，关闭selinux")]),t("p",null,[i(s,{href:"https://about.gitlab.com/installation/",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("https://about.gitlab.com/installation/")]),_:1}),e(" # git官网")]),b,f,v,k,y,x,S,G,A,T,C,j,t("p",null,[e("更改url地址为本机IP地址 external_url '"),i(s,{href:"http://10.0.0.100",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("http://10.0.0.100")]),_:1}),e("'")]),t("h1",P,[e("更改配置文件后需重新配置 "),i(s,{class:"header-anchor",href:"#更改配置文件后需重新配置","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),q,O,D,I,B,E,N,R,Y,M,H,U,$,W,V,Q,z,K,L,X,t("h3",F,[e("7. Gitlab使用 "),i(s,{class:"header-anchor",href:"#_7-gitlab使用","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),t("h4",Z,[e("01. 外观配置 "),i(s,{class:"header-anchor",href:"#_01-外观配置","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),J,tt,t("h4",et,[e("02. Gitlab汉化配置 "),i(s,{class:"header-anchor",href:"#_02-gitlab汉化配置","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),t("p",null,[e("1、下载汉化补丁 git clone "),i(s,{href:"https://gitlab.com/xhang/gitlab.git",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("https://gitlab.com/xhang/gitlab.git")]),_:1}),e(" 2、查看全部分支版本 git branch -a 3、对比版本、生成补丁包 git diff remotes/origin/10-2-stable remotes/origin/10-2-stable-zh > ../10.2.2-zh.diff 4、停止服务器 gitlab-ctl stop 5、打补丁 patch -d /opt/gitlab/embedded/service/gitlab-rails -p1 < /tmp/10.2.2-zh.diff"),ot,e(" 6、启动和重新配置 gitlab-ctl start gitlab-ctl reconfigure")]),t("h4",st,[e("03. 注册限制 "),i(s,{class:"header-anchor",href:"#_03-注册限制","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),it,nt,t("h4",at,[e("04. 创建用户及组 "),i(s,{class:"header-anchor",href:"#_04-创建用户及组","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),lt,rt,t("h4",ct,[e("05. 创建用户 "),i(s,{class:"header-anchor",href:"#_05-创建用户","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),_t,dt,pt,gt,t("h4",ut,[e("06. 把用户添加到组 "),i(s,{class:"header-anchor",href:"#_06-把用户添加到组","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),ht,mt,t("h4",wt,[e("07. 创建项目 "),i(s,{class:"header-anchor",href:"#_07-创建项目","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),bt,ft,vt,kt,yt,xt,St,Gt,At,t("p",null,[e("[root@git ~/git_data]# git remote add origin "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git [root@git ~/git_data]# git push -u origin master"),Tt,e(" The authenticity of host '10.0.0.100 (10.0.0.100)' can't be established. ECDSA key fingerprint is SHA256:6gbyCCIw3zFuNSUR2Y7UOG8fbSrj/BVUaeXwllvrGXM. ECDSA key fingerprint is MD5:95:10:02:7c:71:73:c6:4a:b2:f9:d8:88:5d:4a:3d:e0. Are you sure you want to continue connecting (yes/no)? yes Warning: Permanently added '10.0.0.100' (ECDSA) to the list of known hosts. Counting objects: 17, done. Compressing objects: 100% (8/8), done. Writing objects: 100% (17/17), 1.25 KiB | 0 bytes/s, done. Total 17 (delta 1), reused 0 (delta 0) To "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git [new branch] master -> master Branch master set up to track remote branch master from origin.")]),Ct,t("h4",jt,[e("08. 推送代码到Gitlab "),i(s,{class:"header-anchor",href:"#_08-推送代码到gitlab","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),t("p",null,[e('[root@git ~/git_data]# echo oldboy >>a.txt [root@git ~/git_data]# git add . [root@git ~/git_data]# git commit -m "create a.txt" [master a5c15de] create a.txt 1 file changed, 1 insertion(+) create mode 100644 a.txt [root@git ~/git_data]# git push -u origin master'),Pt,e(" Counting objects: 4, done. Compressing objects: 100% (2/2), done. Writing objects: 100% (3/3), 289 bytes | 0 bytes/s, done. Total 3 (delta 0), reused 0 (delta 0) To "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git 0924a70..a5c15de master -> master Branch master set up to track remote branch master from origin.")]),qt,Ot,t("h4",Dt,[e("09. 开发推送代码到Gitlab "),i(s,{class:"header-anchor",href:"#_09-开发推送代码到gitlab","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),It,Bt,Et,Nt,Rt,Yt,t("p",null,[e("[root@dev ~]# git clone "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git Cloning into 'git_test'... The authenticity of host '10.0.0.100 (10.0.0.100)' can't be established. ECDSA key fingerprint is SHA256:6gbyCCIw3zFuNSUR2Y7UOG8fbSrj/BVUaeXwllvrGXM. ECDSA key fingerprint is MD5:95:10:02:7c:71:73:c6:4a:b2:f9:d8:88:5d:4a:3d:e0. Are you sure you want to continue connecting (yes/no)? yes Warning: Permanently added '10.0.0.100' (ECDSA) to the list of known hosts. remote: Counting objects: 20, done. remote: Compressing objects: 100% (10/10), done. remote: Total 20 (delta 1), reused 0 (delta 0) Receiving objects: 100% (20/20), done. Resolving deltas: 100% (1/1), done. [root@dev ~]# ll drwxr-xr-x 3 root root 52 Nov 17 17:21 git_test [root@dev ~]# ll git_test/ total 8 -rw-r--r-- 1 root root 16 Nov 17 17:21 a -rw-r--r-- 1 root root 7 Nov 17 17:21 a.txt -rw-r--r-- 1 root root 0 Nov 17 17:21 test")]),Mt,Ht,Ut,$t,t("p",null,[e('git config --global user.email "'),i(s,{href:"mailto:you@example.com"},{default:o(()=>[e("you@example.com")]),_:1}),e('" git config --global '),i(s,{href:"http://user.name",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("user.name")]),_:1}),e(' "Your Name"')]),Wt,Vt,Qt,t("p",null,[e('[root@dev ~/git_test]# git config --global user.email "'),i(s,{href:"mailto:dev@example.com"},{default:o(()=>[e("dev@example.com")]),_:1}),e('" [root@dev ~/git_test]# git config --global '),i(s,{href:"http://user.name",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("user.name")]),_:1}),e(' "dev01"')]),zt,Kt,t("p",null,[e("[root@dev ~/git_test]# git push -u origin master Counting objects: 5, done. Compressing objects: 100% (2/2), done. Writing objects: 100% (3/3), 305 bytes | 0 bytes/s, done. Total 3 (delta 0), reused 0 (delta 0) To "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git a5c15de..6cc6aff master -> master Branch master set up to track remote branch master from origin.")]),Lt,t("h4",Xt,[e("10. 分支保护 "),i(s,{class:"header-anchor",href:"#_10-分支保护","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),Ft,t("p",null,[e("[root@dev ~/git_test]# git branch dev [root@dev ~/git_test]# git push -u origin dev Total 0 (delta 0), reused 0 (delta 0) remote:"),Zt,e(" remote: To create a merge request for dev, visit: remote: "),i(s,{href:"http://10.0.0.100/OPS/git_test/merge_requests/new?merge_request%5Bsource_branch%5D=dev",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("http://10.0.0.100/OPS/git_test/merge_requests/new?merge_request[source_branch]=dev")]),_:1}),e(" remote:"),Jt,e(" To "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git [new branch] dev -> dev Branch dev set up to track remote branch dev from origin.")]),te,ee,oe,t("h4",se,[e("11. 代码合并 "),i(s,{class:"header-anchor",href:"#_11-代码合并","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),ie,ne,ae,t("p",null,[e("[root@dev ~/git_test]# git push -u origin dev Counting objects: 5, done. Compressing objects: 100% (2/2), done. Writing objects: 100% (3/3), 311 bytes | 0 bytes/s, done. Total 3 (delta 0), reused 0 (delta 0) remote:"),le,e(" remote: To create a merge request for dev, visit: remote: "),i(s,{href:"http://10.0.0.100/OPS/git_test/merge_requests/new?merge_request%5Bsource_branch%5D=dev",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("http://10.0.0.100/OPS/git_test/merge_requests/new?merge_request[source_branch]=dev")]),_:1}),e(" remote:"),re,e(" To "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git 6cc6aff..315f127 dev -> dev Branch dev set up to track remote branch dev from origin.")]),ce,_e,de,pe,ge,ue,he,me,we,be,fe,t("h4",ve,[e("12. Git-gui安装 "),i(s,{class:"header-anchor",href:"#_12-git-gui安装","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),ke,ye,xe,Se,Ge,Ae,Te,Ce,je,Pe,qe,Oe,De,Ie,Be,Ee,Ne,Re,Ye,Me,He,Ue,$e,We,Ve,Qe,ze,t("h3",Ke,[e("8. Gitlab备份与恢复 "),i(s,{class:"header-anchor",href:"#_8-gitlab备份与恢复","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),Le,Xe,Fe,Ze,t("h4",Je,[e("01. 备份 "),i(s,{class:"header-anchor",href:"#_01-备份","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),to,eo,oo,so,io,no,ao,lo,ro,co,_o,t("p",null,[e('[root@git ~/git_test]# git commit -am "add 123 " [master 35ef629] add 123 3 files changed, 8 deletions(-) delete mode 100644 a delete mode 100644 a.txt delete mode 100644 test [root@git ~/git_test]# git push -u origin master Counting objects: 3, done. Compressing objects: 100% (1/1), done. Writing objects: 100% (2/2), 182 bytes | 0 bytes/s, done. Total 2 (delta 0), reused 0 (delta 0) To '),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git 02250b6..35ef629 master -> master Branch master set up to track remote branch master from origin.")]),po,t("h4",go,[e("02. 恢复 "),i(s,{class:"header-anchor",href:"#_02-恢复","aria-hidden":"true"},{default:o(()=>[e("#")]),_:1})]),uo,ho,mo,wo,bo,fo,vo,ko,t("p",null,[e("[root@git ~]# git clone "),i(s,{href:"mailto:git@10.0.0.100"},{default:o(()=>[e("git@10.0.0.100")]),_:1}),e(":OPS/git_test.git Cloning into 'git_test'... remote: Counting objects: 27, done. remote: Compressing objects: 100% (14/14), done. remote: Total 27 (delta 1), reused 27 (delta 1) Receiving objects: 100% (27/27), done. Resolving deltas: 100% (1/1), done. [root@git ~/git_test]# ll total 8 -rw-r--r-- 1 root root 27 Nov 17 19:00 a -rw-r--r-- 1 root root 7 Nov 17 19:00 a.txt -rw-r--r-- 1 root root 0 Nov 17 19:00 test")])]),"main-header":o(()=>[a(n.$slots,"main-header")]),"main-header-after":o(()=>[a(n.$slots,"main-header-after")]),"main-nav":o(()=>[a(n.$slots,"main-nav")]),"main-content":o(()=>[a(n.$slots,"main-content")]),"main-content-after":o(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":o(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":o(()=>[a(n.$slots,"main-nav-after")]),comment:o(()=>[a(n.$slots,"comment")]),footer:o(()=>[a(n.$slots,"footer")]),aside:o(()=>[a(n.$slots,"aside")]),"aside-custom":o(()=>[a(n.$slots,"aside-custom")]),default:o(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const Do=d(m,[["render",yo]]);export{Oo as __pageData,Do as default};
