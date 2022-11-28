import{_ as l}from"./ValaxyMain.vue_vue_type_style_index_0_lang.9ec5348a.js";import{_ as d,c as r,w as n,o as c,h as _,r as o,g as s,R as e,p}from"./app.b1d56752.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.7dcbcc8f.js";import"./YunCard.vue_vue_type_style_index_0_lang.2189ed33.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.0b20d5e4.js";const Ps=JSON.parse('{"title":"SSH\u670D\u52A1\u521D\u8BC6","description":"","frontmatter":{"title":"SSH\u670D\u52A1\u521D\u8BC6","categories":"Linux\u6280\u672F","tags":["SSH"],"date":"2018-09-08T16:38:00.000Z"},"headers":[{"level":2,"title":"1.\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","slug":"_1-\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","link":"#_1-\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","children":[]},{"level":2,"title":"2.\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","slug":"_2-\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","link":"#_2-\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","children":[]},{"level":2,"title":"1.\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","slug":"_1-\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","link":"#_1-\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","children":[]},{"level":2,"title":"2.ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","slug":"_2-ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","link":"#_2-ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","children":[]},{"level":2,"title":"3.\u5206\u53D1\u811A\u672C\uFF1A","slug":"_3-\u5206\u53D1\u811A\u672C\uFF1A","link":"#_3-\u5206\u53D1\u811A\u672C\uFF1A","children":[]},{"level":2,"title":"4.if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","slug":"_4-if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","link":"#_4-if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","children":[]},{"level":2,"title":"5.\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","slug":"_5-\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","link":"#_5-\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","children":[]},{"level":2,"title":"6.\u6392\u9519\u65B9\u6CD5\uFF1A","slug":"_6-\u6392\u9519\u65B9\u6CD5\uFF1A","link":"#_6-\u6392\u9519\u65B9\u6CD5\uFF1A","children":[]}],"relativePath":"pages/posts/SSH\u670D\u52A1\u521D\u8BC6.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/SSH\u670D\u52A1\u521D\u8BC6.md","lastUpdated":0}'),i=JSON.parse('{"title":"SSH\u670D\u52A1\u521D\u8BC6","description":"","frontmatter":{"title":"SSH\u670D\u52A1\u521D\u8BC6","categories":"Linux\u6280\u672F","tags":["SSH"],"date":"2018-09-08T16:38:00.000Z"},"headers":[{"level":2,"title":"1.\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","slug":"_1-\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","link":"#_1-\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","children":[]},{"level":2,"title":"2.\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","slug":"_2-\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","link":"#_2-\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","children":[]},{"level":2,"title":"1.\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","slug":"_1-\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","link":"#_1-\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","children":[]},{"level":2,"title":"2.ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","slug":"_2-ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","link":"#_2-ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","children":[]},{"level":2,"title":"3.\u5206\u53D1\u811A\u672C\uFF1A","slug":"_3-\u5206\u53D1\u811A\u672C\uFF1A","link":"#_3-\u5206\u53D1\u811A\u672C\uFF1A","children":[]},{"level":2,"title":"4.if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","slug":"_4-if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","link":"#_4-if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","children":[]},{"level":2,"title":"5.\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","slug":"_5-\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","link":"#_5-\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","children":[]},{"level":2,"title":"6.\u6392\u9519\u65B9\u6CD5\uFF1A","slug":"_6-\u6392\u9519\u65B9\u6CD5\uFF1A","link":"#_6-\u6392\u9519\u65B9\u6CD5\uFF1A","children":[]}],"relativePath":"pages/posts/SSH\u670D\u52A1\u521D\u8BC6.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/SSH\u670D\u52A1\u521D\u8BC6.md","lastUpdated":0}'),u={name:"pages/posts/SSH\u670D\u52A1\u521D\u8BC6.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){p("pageData",i)}},f=s("h1",{id:"\u7B2C\u4E00\u7AE0-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u6982\u5FF5\u4ECB\u7ECD",tabindex:"-1"},[e("\u7B2C\u4E00\u7AE0 \u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u6982\u5FF5\u4ECB\u7ECD "),s("a",{class:"header-anchor",href:"#\u7B2C\u4E00\u7AE0-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u6982\u5FF5\u4ECB\u7ECD","aria-hidden":"true"},"#")],-1),m=s("p",null,"SSH: \u7CFB\u7EDF\u9ED8\u8BA4\u914D\u7F6E 22 \u9ED8\u8BA4\u53EF\u4EE5\u4F7F\u7528root\u7528\u6237\u8FDB\u884C\u767B\u5F55 \u6570\u636E\u4FE1\u606F\u8FDB\u884C\u52A0\u5BC6 TELNET\uFF1A\u7F51\u7EDC\u8BBE\u5907\u9ED8\u8BA4\u5F00\u542F 23 \u9ED8\u8BA4\u53EA\u80FD\u4F7F\u7528\u666E\u901A\u7528\u6237\u8FDB\u884C\u767B\u5F55 \u6570\u636E\u4FE1\u606F\u663E\u793A\u660E\u6587",-1),g=s("h1",{id:"\u7B2C\u4E8C\u7AE0-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u8FDE\u63A5\u539F\u7406",tabindex:"-1"},[e("\u7B2C\u4E8C\u7AE0 \u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u8FDE\u63A5\u539F\u7406 "),s("a",{class:"header-anchor",href:"#\u7B2C\u4E8C\u7AE0-\u8FDC\u7A0B\u8FDE\u63A5\u670D\u52A1\u8FDE\u63A5\u539F\u7406","aria-hidden":"true"},"#")],-1),y=s("p",null,"openssh \u8FDC\u7A0B\u8FDE\u63A5\u6570\u636E\u5305\u8FDB\u884C\u52A0\u5BC6\u5904\u7406 openssl \u7F51\u7AD9\u8BBF\u95EE\u8BF7\u6C42\u4FE1\u606F\u548C\u54CD\u5E94\u4FE1\u606F\u8FDB\u884C\u52A0\u5BC6\uFF08HTTPS\uFF09 \u8FDE\u63A5\u793A\u610F\u56FE\uFF1A",-1),b=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/14248468-af025c4191bb5a68.png",alt:"SSH\u5BC6\u94A5\u8BA4\u8BC1\u8FC7\u7A0B"})],-1),k=s("p",null,"\u539F\u7406\u603B\u7ED3\uFF1A",-1),S=s("pre",null,[s("code",null,`01. \u5BA2\u6237\u7AEF - \u670D\u52A1\u7AEF   \u8BF7\u6C42\u5EFA\u7ACBssh\u8FDC\u7A0B\u8FDE\u63A5 
02. \u670D\u52A1\u7AEF - \u5BA2\u6237\u7AEF   \u8BF7\u6C42\u786E\u8BA4\u516C\u94A5\u4FE1\u606F
03. \u5BA2\u6237\u7AEF - \u670D\u52A1\u7AEF   \u786E\u8BA4\u63A5\u6536\u516C\u94A5\u4FE1\u606F\uFF0C\u4FDD\u5B58\u5230~/.ssh/authorized_keys\u6587\u4EF6\u4E2D  
04. \u670D\u52A1\u7AEF - \u5BA2\u6237\u7AEF   \u8BE2\u95EE\u7528\u6237\u5BC6\u7801\u4FE1\u606F
05. \u5BA2\u6237\u7AEF - \u670D\u52A1\u7AEF   \u7528\u6237\u5BC6\u7801\u4FE1\u606F
06. \u670D\u52A1\u7AEF - \u5BA2\u6237\u7AEF   \u786E\u8BA4\u5BC6\u7801\u4FE1\u606F\u6B63\u786E \u8FDC\u7A0B\u8FDE\u63A5\u5EFA\u7ACB
01 \u4E4B\u540E\uFF1A\u4E0D\u7528\u53CD\u590D\u786E\u8BA4\u516C\u94A5\u4FE1\u606F
06 \u4E4B\u540E\uFF1A\u6240\u6709\u4F20\u8F93\u7684\u6570\u636E\u4FE1\u606F\u4F1A\u8FDB\u884C\u52A0\u5BC6\u5904\u7406
`)],-1),v=s("p",null,"\u603B\u7ED3\uFF1A",-1),$=s("pre",null,[s("code",null,`\u4F5C\u752801\uFF1A\u5229\u7528\u516C\u94A5\u548C\u79C1\u94A5\u5BF9\u6570\u636E\u4FE1\u606F\u8FDB\u884C\u52A0\u5BC6\u5904\u7406
\u4F5C\u752802\uFF1A\u5BF9\u7528\u6237\u8EAB\u4EFD\u4FE1\u606F\u8FDB\u884C\u8BA4\u8BC1
`)],-1),w=s("p",null,[s("strong",null,"\u8FDC\u7A0B\u8FDE\u63A5\u901A\u8BAF\u5EFA\u7ACB\u65B9\u5F0F")],-1),A=s("p",null,"\u57FA\u4E8E\u53E3\u4EE4\u65B9\u5F0F\uFF08\u57FA\u4E8E\u5BC6\u7801\u65B9\u5F0F\uFF09 \u6587\u6863/\u8111\u5B50 \u56FD\u5BB6\u670D\u52A1\u5668 \u8FDC\u7A0B -- \u5BC6\u7801\uFF08\u94B1\uFF09 \u57FA\u4E8E\u5BC6\u94A5\u65B9\u5F0F",-1),H=s("h1",{id:"\u7B2C\u4E09\u7AE0-\u57FA\u4E8E\u5BC6\u94A5\u65B9\u5F0F\u5B9E\u73B0\u8FDC\u7A0B\u8FDE\u63A5\u6B65\u9AA4\uFF1A",tabindex:"-1"},[e("\u7B2C\u4E09\u7AE0 \u57FA\u4E8E\u5BC6\u94A5\u65B9\u5F0F\u5B9E\u73B0\u8FDC\u7A0B\u8FDE\u63A5\u6B65\u9AA4\uFF1A "),s("a",{class:"header-anchor",href:"#\u7B2C\u4E09\u7AE0-\u57FA\u4E8E\u5BC6\u94A5\u65B9\u5F0F\u5B9E\u73B0\u8FDC\u7A0B\u8FDE\u63A5\u6B65\u9AA4\uFF1A","aria-hidden":"true"},"#")],-1),x=s("h2",{id:"_1-\u7BA1\u7406\u7AEF\u670D\u52A1\u5668",tabindex:"-1"},[e("1.\u7BA1\u7406\u7AEF\u670D\u52A1\u5668 "),s("a",{class:"header-anchor",href:"#_1-\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","aria-hidden":"true"},"#")],-1),P=s("p",null,"\u7B2C\u4E00\u4E2A\u5386\u7A0B\uFF1A\u521B\u5EFA\u5BC6\u94A5\u5BF9\u4FE1\u606F",-1),N=s("pre",null,[s("code",null,`[root@m01 ~]# ssh-keygen -t dsa
Generating public/private dsa key pair.
Enter file in which to save the key (/root/.ssh/id_dsa): 
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_dsa.
Your public key has been saved in /root/.ssh/id_dsa.pub.
The key fingerprint is:
40:72:ff:19:de:23:70:df:cf:f2:a2:6f:0d:ce:42:dc root@m01
The key's randomart image is:
+--[ DSA 1024]----+
|    . o          |
|     + .         |
|      . o o      |
|       . = = .   |
|        S =.+..  |
|           .o.Eo |
|           . o.oo|
|            . =o.|
|            .=...|
+-----------------+
[root@m01 ~]# ll .ssh/
\u603B\u7528\u91CF 8
-rw------- 1 root root 668 7\u6708  19 15:13 id_dsa
-rw-r--r-- 1 root root 598 7\u6708  19 15:13 id_dsa.pub
`)],-1),L=s("p",null,"\u7B2C\u4E8C\u4E2A\u5386\u7A0B\uFF1A\u5206\u53D1\u516C\u94A5",-1),T=s("pre",null,[s("code",null,`[root@m01 ~]# ssh-copy-id -i ~/.ssh/id_dsa.pub root@172.16.1.31
The authenticity of host '172.16.1.31 (172.16.1.31)' can't be established.
ECDSA key fingerprint is 7d:76:4f:bc:02:b3:3c:55:ff:22:9c:63:1a:88:17:3d.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@172.16.1.31's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'root@172.16.1.31'"
and check to make sure that only the key(s) you wanted were added.
`)],-1),C=s("p",null,"\u7B2C\u4E09\u4E2A\u5386\u7A0B\uFF1A\u68C0\u67E5\u786E\u8BA4",-1),z=s("pre",null,[s("code",null,`[root@m01 ~]# ssh 172.16.1.31
Last login: Fri Jul 19 08:12:12 2019 from 10.0.1.1
[root@nfs01 ~]# hostname
nfs01
[root@nfs01 ~]# \u767B\u51FA
Connection to 172.16.1.31 closed.
[root@m01 ~]# ssh 172.16.1.31 hostname
nfs01
[root@m01 ~]# 
`)],-1),I=s("h2",{id:"_2-\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668",tabindex:"-1"},[e("2.\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668 "),s("a",{class:"header-anchor",href:"#_2-\u88AB\u7BA1\u7406\u7AEF\u670D\u52A1\u5668","aria-hidden":"true"},"#")],-1),q=s("p",null,"\u7B2C\u4E00\u4E2A\u5386\u7A0B\uFF1A\u68C0\u67E5\u786E\u8BA4",-1),B=s("pre",null,[s("code",null,`[root@nfs01 ~]# cd /root/.ssh/
[root@nfs01 ~/.ssh]# ll
\u603B\u7528\u91CF 8
-rw------- 1 root root 988 7\u6708  19 15:15 authorized_keys
-rw-r--r-- 1 root root 170 6\u6708  26 20:55 known_hosts
[root@nfs01 ~/.ssh]# cat authorized_keys 
ssh-dss AAAAB3NzaC1kc3MAAACBAPFwzIpjQqTXGmTPgABweyY6sxewiNdPiPwBaSz5hAauYnskJSXKbFl5usAxgXbuLcBzGp1RvTH+tVtoUpokAbGbhVX9bhT/5LxjKA31kfp0hicZHtNUDCMOTtgwJmIHo/25BsMURx4i4Mfu8V7lRg5a3WXDXI2JXBLiWtgl/0yHAAAAFQDLicZIPhcZkfLbg26vSPm9cMK14wAAAIAVHBMsnB6TasY3yQzdqQpnVH5dOtD6bIjy48U6CEge7m9jxXb9HUMExOOqRNj/x7HiCeiiML7ebZmLYPZfjam5NWiJ1A5l9FL6QKFvnLSrUOk3b0seBLyWEhM8yWkK5yYaqV9e7jCTJoR/UZjKbZ1lRtLbczytn1e6c8wFVHguHQAAAIBqHcq7NbGPDbkeQEQmSahNubgZ/nXTMR7r2CHsNP+71qxDfkYdDo2dVoWSmhN5Lv+mHLSBFMuJPIvZg/zVc7So6vRgJWiIVedgnJw/Ima+q2f7VJudA+ZNT5vHmlaS77bJ/9tYBdlUO/Ae56gmuNzYYnTdY1UIf1EzEtJnKtUr4Q== root@m01
`)],-1),U=s("h1",{id:"\u7B2C\u56DB\u7AE0-\u514D\u4EA4\u6237\u5206\u53D1\u5BC6\u94A5",tabindex:"-1"},[e("\u7B2C\u56DB\u7AE0 \u514D\u4EA4\u6237\u5206\u53D1\u5BC6\u94A5 "),s("a",{class:"header-anchor",href:"#\u7B2C\u56DB\u7AE0-\u514D\u4EA4\u6237\u5206\u53D1\u5BC6\u94A5","aria-hidden":"true"},"#")],-1),V=s("p",null,"\u88AB\u7BA1\u7406\u4E3B\u673A\u6709\u591A\u53F0\uFF0C\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u5206\u53D1\u516C\u94A5???",-1),E=s("h2",{id:"_1-\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A",tabindex:"-1"},[e("1.\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A "),s("a",{class:"header-anchor",href:"#_1-\u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A","aria-hidden":"true"},"#")],-1),J=s("p",null,"\u7B2C\u4E00\u6B21\u8FDE\u63A5\u6709yes/no",-1),K=s("pre",null,[s("code",null,`ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no
`)],-1),D=s("p",null,"\u9700\u8981\u6709\u5BC6\u7801\u4FE1\u606F\u786E\u8BA4",-1),M=s("pre",null,[s("code",null,`yum install -y sshpass
sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.31 -o StrictHostKeyChecking=no 
`)],-1),Y=s("h2",{id:"_2-ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A",tabindex:"-1"},[e("2.ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A "),s("a",{class:"header-anchor",href:"#_2-ssh-copy-id\u5206\u53D1\u516C\u94A5\u539F\u7406\uFF1A","aria-hidden":"true"},"#")],-1),Z=s("pre",null,[s("code",null,` 01. \u8FDB\u884Cssh\u8FDC\u7A0B\u8FDE\u63A5
    02. scp\u5C06\u516C\u94A5\u8FDB\u884C\u4F20\u8F93
    03. \u88AB\u7BA1\u7406\u7AEF\u5C06\u516C\u94A5\u4FDD\u5B58\u5230\u7528\u6237\u5BB6\u76EE\u5F55\u4E2D\u7684.ssh\u76EE\u5F55\u4E2D
    04. \u4FEE\u6539\u516C\u94A5\u6587\u4EF6\u540D\u79F0\u548C\u6743\u9650  authorized_keys  600
`)],-1),F=s("h2",{id:"_3-\u5206\u53D1\u811A\u672C\uFF1A",tabindex:"-1"},[e("3.\u5206\u53D1\u811A\u672C\uFF1A "),s("a",{class:"header-anchor",href:"#_3-\u5206\u53D1\u811A\u672C\uFF1A","aria-hidden":"true"},"#")],-1),O=s("pre",null,[s("code",null,`[root@m01 ~]# cat /server/scripts/fenfa.sh 
#!/bin/bash
for ip in {31,41}
do
  sshpass -p123456 ssh-copy-id -i /root/.ssh/id_dsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no &>/dev/null
  if [ $? -eq 0 ]
  then
     echo "===============pub_key fenfa ok with 172.16.1.$ip========================="
     ssh 172.16.1.\${ip} hostname
     echo ""
  else
     echo "===============pub_key fenfa failed with 172.16.1.$ip========================="
     echo ""
  fi 
done
`)],-1),R=s("h2",{id:"_4-if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A",tabindex:"-1"},[e("4.if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A "),s("a",{class:"header-anchor",href:"#_4-if\u5224\u65AD\u6BD4\u8F83\u4FE1\u606F\uFF1A","aria-hidden":"true"},"#")],-1),Q=s("pre",null,[s("code",null,`   =    -eq   equal
    >    -gt   greater than
    <    -lt   less than
    >=   -ge   greater equal
    <=   -le   less equal
    <>   -ne   no equal
`)],-1),X=s("h2",{id:"_5-\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A",tabindex:"-1"},[e("5.\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A "),s("a",{class:"header-anchor",href:"#_5-\u5206\u53D1\u516C\u94A5\u95EE\u9898\u8BF4\u660E\uFF1A","aria-hidden":"true"},"#")],-1),j=s("pre",null,[s("code",null,`01. \u5BC6\u7801\u4FE1\u606F\u4E0D\u6B63\u786E
02. \u514D\u5BC6\u7801\u5206\u53D1\u516C\u94A5  yum install -y sshpass 
03. \u5206\u53D1\u516C\u94A5\u4FE1\u606F\uFF0C\u9700\u8981\u5206\u53D1\u4F60\u6709\u7684\u516C\u94A5   \u662F\u5426\u6709\u516C\u94A5 m01--/root/.ssh/id_dsa.pub
`)],-1),G=s("h2",{id:"_6-\u6392\u9519\u65B9\u6CD5\uFF1A",tabindex:"-1"},[e("6.\u6392\u9519\u65B9\u6CD5\uFF1A "),s("a",{class:"header-anchor",href:"#_6-\u6392\u9519\u65B9\u6CD5\uFF1A","aria-hidden":"true"},"#")],-1),W=s("ol",null,[s("li",null,[s("p",null,"\u6D4B\u8BD5\u811A\u672C ssh 172.16.1.7 hostname")]),s("li",null,[s("p",null,"\u811A\u672C\u4E2D\u547D\u4EE4\u624B\u52A8\u6267\u884C"),s("p",null,"sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.$ip -o StrictHostKeyChecking=no")])],-1),ss=s("p",null,"7.\u8FDC\u7A0B\u670D\u52A1\u7AEF\u53E3\u53F7\u53D1\u751F\u53D8\u5316\u4E86\uFF0C\u5982\u4F55\u4FEE\u6539\u811A\u672C\u547D\u4EE4 centos7\uFF1A\u638C\u63E1",-1),es=s("pre",null,[s("code",null,`sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.7 -o StrictHostKeyChecking=no -p 52113
`)],-1),ns=s("p",null,"8.ssh-copy id\u547D\u4EE4\u89E3\u91CA",-1),ts=s("pre",null,[s("code",null,`   ssh $1 "exec sh -c 'cd; umask 077; test -d .ssh || mkdir .ssh ; cat >> .ssh/authorized_keys && (test -x /sbin/restorecon && /sbin/restorecon .ssh .ssh/authorized_keys >/dev/null 2>&1 || true)'"

01. \u8FDC\u7A0B\u8FDE\u63A5\u5230\u6307\u5B9A\u4E3B\u673A
02. \u5207\u6362\u5230\u5BB6\u76EE\u5F55\uFF0C\u4E34\u65F6\u4FEE\u6539umask\u6570\u503C
03. \u5224\u65AD\u662F\u5426\u5B58\u5728.ssh\u76EE\u5F55\uFF0C\u4E0D\u5B58\u5728\u521B\u5EFA.ssh 
04. \u751F\u6210.ssh/authorized_keys,\u5E76\u4E14\u628A\u516C\u94A5\u4FE1\u606F\u4FDD\u5B58\u5728\u6B64\u6587\u4EF6\u4E2D
`)],-1),os=s("p",null,"9.\u603B\u7ED3\uFF1A\u638C\u63E1\u6279\u91CF\u5206\u53D1\u516C\u94A5\u811A\u672C\u7F16\u5199\u80FD\u529B",-1),is=s("pre",null,[s("code",null,`01. \u89E3\u51B3\u514D\u4EA4\u4E92\u95EE\u9898\uFF1A yes/no  \u5BC6\u7801\u95EE\u9898
02. \u8FDC\u7A0B\u88AB\u7BA1\u7406\u4E3B\u673A\u7AEF\u53E3\u53D8\u5316\uFF1A\u89E3\u51B3\u7AEF\u53E3\u95EE\u9898
`)],-1),as=s("h1",{id:"\u7B2C\u4E94\u7AE0-ssh\u670D\u52A1\u7AEF\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E\uFF1A",tabindex:"-1"},[e("\u7B2C\u4E94\u7AE0 SSH\u670D\u52A1\u7AEF\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E\uFF1A "),s("a",{class:"header-anchor",href:"#\u7B2C\u4E94\u7AE0-ssh\u670D\u52A1\u7AEF\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E\uFF1A","aria-hidden":"true"},"#")],-1),hs=s("pre",null,[s("code",null,`vim /etc/ssh/sshd_config
#Port 22                 --- \u6307\u5B9A\u670D\u52A1\u7AEF\u53E3\u53F7\u4FE1\u606F
#ListenAddress 0.0.0.0   --- \u6307\u5B9A\u76F8\u5E94\u7F51\u5361\u53EF\u4EE5\u63A5\u6536\u8FDC\u7A0B\u8BBF\u95EE\u8BF7\u6C42  web
\u9ED8\u8BA4\uFF1A\u4E3B\u673A\u4E0A\u6240\u6709\u7F51\u5361\u90FD\u53EF\u4EE5\u63A5\u6536\u8FDC\u7A0B\u8FDE\u63A5\u8BF7\u6C42
\u76D1\u542C\u5730\u5740\u4FE1\u606F\uFF0C\u4E00\u5B9A\u662F\u672C\u5730\u7F51\u5361\u4E0A\u6709\u7684\u5730\u5740\u4FE1\u606F ******
#PermitEmptyPasswords no --- \u662F\u5426\u5141\u8BB8\u7A7A\u5BC6\u7801\u767B\u5F55
#PermitRootLogin yes     --- \u4E0D\u5141\u8BB8root\u7528\u6237\u767B\u5F55
#UseDNS yes              --- \u662F\u5426\u8FDB\u884CDNS\u53CD\u5411\u89E3\u6790 no  172.16.1.31 --> 172.16.1.61 
GSSAPIAuthentication yes --- \u662F\u5426\u5F00\u542FGSSAPI  no      
`)],-1),ls=s("h1",{id:"\u7B2C\u516D\u7AE0-ssh\u9632\u8303\u8FDC\u7A0B\u5165\u4FB5\u65B9\u6848-\u4EA1\u7F8A\u8865\u7262-\u672A\u96E8\u7EF8\u7F2A",tabindex:"-1"},[e("\u7B2C\u516D\u7AE0 SSH\u9632\u8303\u8FDC\u7A0B\u5165\u4FB5\u65B9\u6848 \u4EA1\u7F8A\u8865\u7262 -- \u672A\u96E8\u7EF8\u7F2A "),s("a",{class:"header-anchor",href:"#\u7B2C\u516D\u7AE0-ssh\u9632\u8303\u8FDC\u7A0B\u5165\u4FB5\u65B9\u6848-\u4EA1\u7F8A\u8865\u7262-\u672A\u96E8\u7EF8\u7F2A","aria-hidden":"true"},"#")],-1),ds=s("p",null,[e("\u53C2\u8003\u535A\u5BA2"),s("a",{href:"http://blog.51cto.com/phenixikki/1546669",target:"_blank",rel:"noreferrer"},"https://blog.51cto.com/phenixikki/1546669")],-1),rs=s("pre",null,[s("code",null,` 1. \u7528\u5BC6\u94A5\u767B\u5F55\uFF0C\u4E0D\u7528\u5BC6\u7801\u767B\u9646
    2. \u9632\u706B\u5899\u5C01\u95EDSSH,\u6307\u5B9A\u6E90IP\u9650\u5236(\u5C40\u57DF\u7F51\u3001\u4FE1\u4EFB\u516C\u7F51)  \uFF1F\uFF1F\uFF1F
    3. \u5C3D\u91CF\u4E0D\u7ED9\u670D\u52A1\u5668\u5916\u7F51IP
    4. \u8D1F\u8F7D\u5747\u8861\u4E3B\u673A\uFF0C\u53EA\u76D1\u542C\u5185\u7F51\u5730\u5740\u7684\u8FDC\u7A0B\u8BBF\u95EE
    5. \u6700\u5C0F\u5316\uFF08\u8F6F\u4EF6\u5B89\u88C5-\u6388\u6743\uFF09  web nfs rsync mysql zabbix ... \u7AEF\u53E3\uFF08\u95E8\uFF09
       yum install -y nmap  --- \u626B\u63CF\u7F51\u7AD9\u7AEF\u53E3\u4FE1\u606F
       nmap -p 1-65535 www.baidu.com   80 443
    6. \u7ED9\u7CFB\u7EDF\u7684\u91CD\u8981\u6587\u4EF6\u6216\u547D\u4EE4\u505A\u4E00\u4E2A\u6307\u7EB9   md5sum -c /etc/passwd  abcd  --- zabbix
    7. chattr +i \u9501\u4F4F\u6587\u4EF6  
`)],-1),cs=s("h1",{id:"\u7B2C\u4E03\u7AE0-\u8BFE\u7A0B\u77E5\u8BC6\u56DE\u987E\u8BF4\u660E\uFF1A",tabindex:"-1"},[e("\u7B2C\u4E03\u7AE0 \u8BFE\u7A0B\u77E5\u8BC6\u56DE\u987E\u8BF4\u660E\uFF1A "),s("a",{class:"header-anchor",href:"#\u7B2C\u4E03\u7AE0-\u8BFE\u7A0B\u77E5\u8BC6\u56DE\u987E\u8BF4\u660E\uFF1A","aria-hidden":"true"},"#")],-1),_s=s("pre",null,[s("code",null,`1\uFF09\u8FDC\u7A0B\u8FDE\u63A5\u7684\u670D\u52A1\u7A0B\u5E8F \uFF08ssh-22\uFF08\u52A0\u5BC6\uFF09 telnet-23\uFF08\u660E\u6587\uFF09\uFF09
2\uFF09\u8FDC\u7A0B\u8FDE\u63A5\u7684\u539F\u7406\u8FC7\u7A0B \u4E86\u89E3
3\uFF09\u8FDC\u7A0B\u8FDE\u63A5\u7684\u65B9\u5F0F
   \u57FA\u4E8E\u5BC6\u7801\u65B9\u5F0F 
   \u57FA\u4E8E\u5BC6\u94A5\u65B9\u5F0F  \u91CD\u70B9
4\uFF09\u5982\u4F55\u5B9E\u73B0\u5BC6\u94A5\u8FDC\u7A0B\u767B\u5F55
   \u5982\u4F55\u5B9E\u73B0\u591A\u53F0\u4E3B\u673A\u57FA\u4E8E\u5BC6\u94A5\u8FDC\u7A0B\u767B\u5F55 -- \u6279\u91CF\u5206\u53D1\u516C\u94A5\u7684\u811A\u672C
5\uFF09\u8FDC\u7A0B\u670D\u52A1\u914D\u7F6E\u6587\u4EF6\u53C2\u6570
   listen address  \u76D1\u542C\u53C2\u6570  ******
6\uFF09\u8FDC\u7A0B\u5165\u4FB5\u9632\u8303\u9632\u8303
`)],-1),ps=s("p",null,"\u811A\u672C\u5206\u4EAB\uFF1A",-1),us=s("pre",null,[s("code",null,`#!/bin/bash
if [ -f /root/.ssh/id_dsa ];then
    echo "\u5BC6\u94A5\u5DF2\u5B58\u5728,\u5C06\u53D1\u9001\u73B0\u6709\u6587\u4EF6"
else
    ssh-keygen -t dsa -P "" -f /root/.ssh/id_dsa && echo "\u5BC6\u94A5\u751F\u6210\u6210\u529F"
fi

for ip in {31,41}
do
    sshpass -p123456 ssh-copy-id -p 22 172.16.1.\${ip} -o StrictHostKeyChecking=no >> /dev/null 2>&1
    if [ $?==0 ];then
        echo "172.16.1.\${ip} key sent successful"
        ssh 172.16.1.\${ip} "cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak"
        ssh 172.16.1.\${ip} "sed -ri 's@#Port 22@Port 9999@g' /etc/ssh/sshd_config && echo 'port ok'"
        ssh 172.16.1.\${ip} "sed -ri 's@#ListenAddress 0.0.0.0@ListenAddress 172.16.1.\${ip}@g' /etc/ssh/sshd_config && echo 'listen ok'"
    ssh 172.16.1.\${ip} "sed -ri 's#^PasswordAuthentication yes#PasswordAuthentication no#g' /etc/ssh/sshd_config && echo 'pass ok'"
    ssh 172.16.1.\${ip} "systemctl restart sshd"
    sleep 3
    echo "------------------"
    echo "172.16.1.\${ip} hostname is :$(ssh -p 9999 172.16.1.\${ip} hostname)"
    echo "------------------"
    else
    echo "172.16.1.\${ip} key sent faild"
fi
done
`)],-1),fs=s("p",null,"\u811A\u672C\u5206\u4EAB2:",-1),ms=s("pre",null,[s("code",null,`#!/bin/bash

if [ -f /root/.ssh/id_rsa ];then
   echo "----------\u5BC6\u94A5\u5BF9\u5DF2\u7ECF\u5B58\u5728---------------"
else
   echo "----------\u6B63\u5728\u751F\u6210\u5BC6\u94A5\u5BF9---------------"
   ssh-keygen -f /root/.ssh/id_rsa -N '' > /dev/null 2>&1
fi

for i in {7,31,41}
do
    echo "\u6B63\u5728\u64CD\u4F5C\uFF1A172.16.1.\${i}"
    echo "----------\u6B63\u5728\u5206\u53D1--------"
    sshpass -p123456 ssh-copy-id -i /root/.ssh/id_rsa.pub 172.16.1.\${i} -o StrictHostKeyChecking=no > /tmp/ssh.log 2>&1
    echo "----------\u6B63\u5728\u5907\u4EFDSSH\u914D\u7F6E-----"
    ssh 172.16.1.\${i} "\\cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak"
    echo "----------\u6B63\u5728\u4F18\u5316SSH\u914D\u7F6E----"
    ssh 172.16.1.\${i} "sed -i 's@#Port 22@Port 9999@g' /etc/ssh/sshd_config"
    ssh 172.16.1.\${i} "sed -i 's@#ListenAddress 0.0.0.0@ListenAddress 172.16.1.\${i}@g' /etc/ssh/sshd_config"
    ssh 172.16.1.\${i} "sed -i 's@^PasswordAuthentication yes@PasswordAuthentication no@g' /etc/ssh/sshd_config"
    ssh 172.16.1.\${i} "systemctl restart sshd"
    sleep 2 
    echo "----------\u6D4B\u8BD5\u4F18\u5316\u540E\u7684\u8FDE\u63A5"
    ssh 172.16.1.\${i} -p 9999 hostname
done
`)],-1),gs=s("p",null,"[player id='712292593' type='collect' autoplay='true'/]",-1);function ys(t,bs,ks,Ss,a,vs){const h=l;return c(),r(h,{frontmatter:a.frontmatter,data:a.data},{"main-content-md":n(()=>[f,m,g,y,b,k,S,v,$,w,A,H,x,P,N,L,T,C,z,I,q,B,U,V,E,J,K,D,M,Y,Z,F,O,R,Q,X,j,G,W,ss,es,ns,ts,os,is,as,hs,ls,ds,rs,cs,_s,ps,us,fs,ms,_("more"),gs]),"main-header":n(()=>[o(t.$slots,"main-header")]),"main-header-after":n(()=>[o(t.$slots,"main-header-after")]),"main-nav":n(()=>[o(t.$slots,"main-nav")]),"main-content":n(()=>[o(t.$slots,"main-content")]),"main-content-after":n(()=>[o(t.$slots,"main-content-after")]),"main-nav-before":n(()=>[o(t.$slots,"main-nav-before")]),"main-nav-after":n(()=>[o(t.$slots,"main-nav-after")]),comment:n(()=>[o(t.$slots,"comment")]),footer:n(()=>[o(t.$slots,"footer")]),aside:n(()=>[o(t.$slots,"aside")]),"aside-custom":n(()=>[o(t.$slots,"aside-custom")]),default:n(()=>[o(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const Ns=d(u,[["render",ys]]);export{Ps as __pageData,Ns as default};
