import{_ as c}from"./ValaxyMain-5334b760.js";import{_ as r,p,c as h,w as s,o as d,r as a,b as l,R as e}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const I=JSON.parse('{"title":"Centos7编译安装SHC并加密脚本文件","description":"","frontmatter":{"title":"Centos7编译安装SHC并加密脚本文件","categories":"Linux技术","tags":["shc","脚本加密"],"date":"2019-08-27T15:28:00.000Z"},"headers":[{"level":2,"title":"工具说明","slug":"工具说明","link":"#工具说明","children":[]},{"level":2,"title":"测试环境","slug":"测试环境","link":"#测试环境","children":[]},{"level":2,"title":"下载shc的安装包","slug":"下载shc的安装包","link":"#下载shc的安装包","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"简单的使用","slug":"简单的使用","link":"#简单的使用","children":[]},{"level":2,"title":"执行方式","slug":"执行方式","link":"#执行方式","children":[]}],"relativePath":"pages/posts/Centos7编译安装SHC并加密脚本文件.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Centos7编译安装SHC并加密脚本文件.md","lastUpdated":1671090556000}'),t=JSON.parse('{"title":"Centos7编译安装SHC并加密脚本文件","description":"","frontmatter":{"title":"Centos7编译安装SHC并加密脚本文件","categories":"Linux技术","tags":["shc","脚本加密"],"date":"2019-08-27T15:28:00.000Z"},"headers":[{"level":2,"title":"工具说明","slug":"工具说明","link":"#工具说明","children":[]},{"level":2,"title":"测试环境","slug":"测试环境","link":"#测试环境","children":[]},{"level":2,"title":"下载shc的安装包","slug":"下载shc的安装包","link":"#下载shc的安装包","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"简单的使用","slug":"简单的使用","link":"#简单的使用","children":[]},{"level":2,"title":"执行方式","slug":"执行方式","link":"#执行方式","children":[]}],"relativePath":"pages/posts/Centos7编译安装SHC并加密脚本文件.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Centos7编译安装SHC并加密脚本文件.md","lastUpdated":1671090556000}'),u={name:"pages/posts/Centos7编译安装SHC并加密脚本文件.md",data(){return{data:t,frontmatter:t.frontmatter}},setup(){p("pageData",t)}},g=l("h2",{id:"工具说明",tabindex:"-1"},[e("工具说明 "),l("a",{class:"header-anchor",href:"#工具说明","aria-hidden":"true"},"#")],-1),m=l("blockquote",null,[l("ul",null,[l("li",null,"shc是一个加密shell脚本的工具.它的作用是把shell脚本转换为一个可执行的二进制文件."),l("li",null,"用shell脚本对系统进行自动化维护,简单,便捷而且可移植性好."),l("li",null,"但shell脚本是可读写的,很有可能会泄露敏感信息,如用户名,密码,路径,IP等."),l("li",null,"同样,在shell脚本运行时会也泄露敏感信息.")]),l("p",null,"使用shc进行加密，这就很好的解决了上述问题.")],-1),C=l("h2",{id:"测试环境",tabindex:"-1"},[e("测试环境 "),l("a",{class:"header-anchor",href:"#测试环境","aria-hidden":"true"},"#")],-1),_=l("blockquote",null,[l("p",null,"centos 7.6 shc 9.3")],-1),v=l("h2",{id:"下载shc的安装包",tabindex:"-1"},[e("下载shc的安装包 "),l("a",{class:"header-anchor",href:"#下载shc的安装包","aria-hidden":"true"},"#")],-1),f=l("p",null,[e("可以去GIT中下载："),l("a",{href:"https://github.com/neurobin/shc/tree/3.9.3",target:"_blank",rel:"noreferrer"},"https://github.com/neurobin/shc/tree/3.9.3")],-1),A=l("blockquote",null,[l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"wget https://github.com/neurobin/shc/archive/3.9.3.zip")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}})])])])])],-1),y=l("h2",{id:"安装",tabindex:"-1"},[e("安装 "),l("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#")],-1),b=l("blockquote",null,[l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"unzip 3.9.3.zip")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"cd shc-3.9.3/")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"./configure")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"make")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"make install")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}})])])])]),l("p",null,"如果提示没有unzip，则运行"),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"yum install zip unzip")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}})])])])])],-1),k=l("h2",{id:"测试",tabindex:"-1"},[e("测试 "),l("a",{class:"header-anchor",href:"#测试","aria-hidden":"true"},"#")],-1),x=l("blockquote",null,[l("p",null,"测试一下是否安装成功"),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"shc -v")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}})])])])]),l("p",null,[l("a",{href:"https://www.myyblog.cn/usr/uploads/2020/02/1370841726.png",target:"_blank",rel:"noreferrer"},[l("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/1370841726.png",alt:"QQ截图20200217230443.png"})])])],-1),D=l("h2",{id:"简单的使用",tabindex:"-1"},[e("简单的使用 "),l("a",{class:"header-anchor",href:"#简单的使用","aria-hidden":"true"},"#")],-1),S=l("blockquote",null,[l("p",null,"基本命令"),l("div",{class:"language-"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"shc -v -r -f 文件名")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}})])])])]),l("p",null,"-v：详细编译"),l("p",null,"-r：创建一个可在发行的二进制文件"),l("p",null,"-f：要编译的脚本名"),l("p",null,"成功编译后会出现二个文件"),l("p",null,"脚本.x ：可以执行的二进制脚本"),l("p",null,"脚本.x.c ：可以脚本.x的原文件，简单来说就是c语言的脚本")],-1),$=l("h2",{id:"执行方式",tabindex:"-1"},[e("执行方式 "),l("a",{class:"header-anchor",href:"#执行方式","aria-hidden":"true"},"#")],-1),H=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"chmod"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"+x"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD"}},"***")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"."),l("span",{style:{color:"#FFCB6B"}},"/***")]),e(`
`),l("span",{class:"line"})])])],-1);function w(n,q,B,z,o,F){const i=c;return d(),h(i,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":s(()=>[g,m,C,_,v,f,A,y,b,k,x,D,S,$,H]),"main-header":s(()=>[a(n.$slots,"main-header")]),"main-header-after":s(()=>[a(n.$slots,"main-header-after")]),"main-nav":s(()=>[a(n.$slots,"main-nav")]),"main-content":s(()=>[a(n.$slots,"main-content")]),"main-content-after":s(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":s(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":s(()=>[a(n.$slots,"main-nav-after")]),comment:s(()=>[a(n.$slots,"comment")]),footer:s(()=>[a(n.$slots,"footer")]),aside:s(()=>[a(n.$slots,"aside")]),"aside-custom":s(()=>[a(n.$slots,"aside-custom")]),default:s(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const J=r(u,[["render",w],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Centos7编译安装SHC并加密脚本文件.md"]]);export{I as __pageData,J as default};
