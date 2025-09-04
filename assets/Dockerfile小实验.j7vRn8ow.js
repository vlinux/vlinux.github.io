import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Bth_JSAQ.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as f,u as h,a as k}from"./chunks/vue-router.DpP0leKZ.js";import{aa as b,ap as t,ag as o,af as e,ai as a,P as D,ab as g,a1 as v}from"./framework.GHZxz7jq.js";import"./index.Di1n2b66.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.BWywLGB4.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.DoKt6roH.js";const $=f("/posts/Dockerfile小实验",async i=>JSON.parse('{"title":"Dockerfile小实验","description":"","frontmatter":{"title":"Dockerfile小实验","categories":"DevOps","tags":["Docker","Dockerfile"],"date":"2020-06-16 18:42:00"},"headers":[],"relativePath":"pages/posts/Dockerfile小实验.md","lastUpdated":null}'),{lazy:(i,r)=>i.name===r.name}),F={__name:"Dockerfile小实验",setup(i,{expose:r}){const{data:l}=$(),m=k(),d=h(),s=Object.assign(d.meta.frontmatter||{},l.value?.frontmatter||{});return m.currentRoute.value.data=l.value,v("valaxy:frontmatter",s),globalThis.$frontmatter=s,r({frontmatter:{title:"Dockerfile小实验",categories:"DevOps",tags:["Docker","Dockerfile"],date:"2020-06-16 18:42:00"}}),(n,c)=>{const u=p;return g(),b(u,{frontmatter:D(s)},{"main-content-md":t(()=>[...c[0]||(c[0]=[e("h1",{id:"综合实验",tabindex:"-1"},[a("综合实验 "),e("a",{class:"header-anchor",href:"#综合实验","aria-label":'Permalink to "综合实验"'},"​")],-1),e("h2",{id:"tip-type-success-title-运行一个docker容器-在浏览器打开niubi-com能访问到百度首页-运行一个docker容器-在浏览器打开niubi-com能访问到百度首页-tip-准备docekr镜像",tabindex:"-1"},[a('[tip type="success" title="运行一个Docker容器，在浏览器打开niubi.com能访问到百度首页"] 运行一个Docker容器，在浏览器打开niubi.com能访问到百度首页 [/tip] 准备Docekr镜像 '),e("a",{class:"header-anchor",href:"#tip-type-success-title-运行一个docker容器-在浏览器打开niubi-com能访问到百度首页-运行一个docker容器-在浏览器打开niubi-com能访问到百度首页-tip-准备docekr镜像","aria-label":`Permalink to "[tip type="success" title="运行一个Docker容器，在浏览器打开niubi.com能访问到百度首页"]
运行一个Docker容器，在浏览器打开niubi.com能访问到百度首页
[/tip]
准备Docekr镜像"`},"​")],-1),e("p",null,'[tip type="warning" title="Dockerfile"] Dockerfile [/tip]',-1),e("blockquote",null,[e("p",null,"/data/docker/dockerfile/Dockerfile")],-1),e("pre",null,[e("code",null,`FROM xoxoyun/nginx:v1.12.2
USER root
ENV WWW /usr/share/nginx/conf.d
ENV CONF /etc/nginx/conf.d
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Aisa/Shanghai' >/etc/timezone
WORKDIR $WWW
ADD index.html $WWW/index.html
ADD niubi.com.conf $CONF/niubi.com.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
`)],-1),e("p",null,'[tip type="warning" title="index.html"] index.html [/tip]',-1),e("blockquote",null,[e("p",null,"/data/docker/dockerfile/index.html")],-1),e("pre",null,[e("code",null,`wget www.baidu.com -O index.html
`)],-1),e("p",null,'[tip type="warning" title="niubi.com.conf"] niubi.com.conf(虚拟主机配置文件) [/tip]',-1),e("pre",null,[e("code",null,`server {
   listen 80;
   server_name niubi.com;
   root /usr/share/nginx/html;
}
`)],-1),e("h2",{id:"构建镜像",tabindex:"-1"},[a("构建镜像 "),e("a",{class:"header-anchor",href:"#构建镜像","aria-label":'Permalink to "构建镜像"'},"​")],-1),e("pre",null,[e("code",null,`docker build . -t xoxoyun/nginx:niubibaidu
docker run --rm -p80:80 xoxoyun/nginx:niubibaidu 
`)],-1),e("h2",{id:"win-r运行drivers找到hosts文件添加域名解析-浏览器访问即可",tabindex:"-1"},[a("Win+R运行drivers找到hosts文件添加域名解析 浏览器访问即可 "),e("a",{class:"header-anchor",href:"#win-r运行drivers找到hosts文件添加域名解析-浏览器访问即可","aria-label":'Permalink to "Win+R运行drivers找到hosts文件添加域名解析 浏览器访问即可"'},"​")],-1)])]),"main-header":t(()=>[o(n.$slots,"main-header")]),"main-header-after":t(()=>[o(n.$slots,"main-header-after")]),"main-nav":t(()=>[o(n.$slots,"main-nav")]),"main-content-before":t(()=>[o(n.$slots,"main-content-before")]),"main-content":t(()=>[o(n.$slots,"main-content")]),"main-content-after":t(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(n.$slots,"main-nav-after")]),comment:t(()=>[o(n.$slots,"comment")]),footer:t(()=>[o(n.$slots,"footer")]),aside:t(()=>[o(n.$slots,"aside")]),"aside-custom":t(()=>[o(n.$slots,"aside-custom")]),default:t(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{F as default,$ as usePageData};
