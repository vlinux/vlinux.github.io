import{_ as v}from"./ValaxyMain-69d5034a.js";import{d as w,U as k,o as r,f as c,b as o,F as _,g as b,O as x,h as p,t as u,_ as f,p as y,c as $,w as a,q as S,r as t}from"./app-2f70f213.js";import{o as q}from"./index-789cb553.js";import"./YunFooter-5ce7538e.js";import"./YunCard-e25878d2.js";import"./YunPageHeader-cb5c6fff.js";const U={class:"links"},D={class:"link-items"},E=["href","title"],B={class:"link-left"},O=["src","alt","onError"],j={class:"link-info",m:"l-2"},L={class:"link-blog",font:"serif black"},N={class:"link-desc"},I=w({__name:"YunLinks",props:{links:{type:[String,Array],required:!0},random:{type:Boolean,required:!0}},setup(e){const i=e,{data:d}=k(i.links,i.random);return(h,s)=>(r(),c("div",U,[o("ul",D,[(r(!0),c(_,null,b(p(d),(n,l)=>(r(),c("li",{key:l,class:"link-item",style:x(`--primary-color: ${n.color}`)},[o("a",{class:"link-url",p:"x-4 y-2",href:n.url,title:n.name,alt:"portrait",rel:"friend"},[o("div",B,[o("img",{class:"link-avatar",w:"16",h:"16",loading:"lazy",src:n.avatar,alt:n.name,onError:p(q)},null,40,O)]),o("div",j,[o("div",L,u(n.blog),1),o("div",N,u(n.desc),1)])],8,E)],4))),128))])]))}});const M=f(I,[["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/node_modules/.pnpm/valaxy-theme-yun@0.12.1/node_modules/valaxy-theme-yun/components/YunLinks.vue"]]),P=JSON.parse('{"title":"我的小伙伴们","description":"我的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"我的小伙伴们","links":[{"url":"https://www.bococ.cn","avatar":"https://www.bococ.cn/favicon.ico","name":"日暮里","blog":"日墓里","desc":"我的好朋友，派大星","email":"aliyum@88.com","color":"#0078e7"},{"url":"https://www.i4t.cn","avatar":"https://image.abcdocker.com/abcdocker/2020/11/20/18813ee9f7f96/18813ee9f7f96.png","name":"abcdocker运维博客","blog":"abcdocker运维博客","desc":"专注DevOps SRE运维分享优秀i运维技术以梦为马不负韶华","email":"i@valaxy.site","color":"#6058d9"},{"url":"https://www.linux18.com","avatar":"https://www.linux18.com/images/avatar.jpg","name":"linux运维博客-风倾","blog":"linux运维博客-风倾","desc":"这个运维是真菜，但是风倾那小子是真的坏","email":"fengqing@fengqing.ltd","color":"#0078e7"},{"url":"https://www.hukdoesn.cn","avatar":"https://www.hukdoesn.cn/wp-content/uploads/2022/12/WechatIMG114.jpeg","name":"胡图图","blog":"胡同学","desc":"撸猫撸到满手油","email":"hukdoesn@163.com","color":"#0078e7"}],"random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/links/index.md","lastUpdated":1673590492000}'),m=JSON.parse('{"title":"我的小伙伴们","description":"我的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"我的小伙伴们","links":[{"url":"https://www.bococ.cn","avatar":"https://www.bococ.cn/favicon.ico","name":"日暮里","blog":"日墓里","desc":"我的好朋友，派大星","email":"aliyum@88.com","color":"#0078e7"},{"url":"https://www.i4t.cn","avatar":"https://image.abcdocker.com/abcdocker/2020/11/20/18813ee9f7f96/18813ee9f7f96.png","name":"abcdocker运维博客","blog":"abcdocker运维博客","desc":"专注DevOps SRE运维分享优秀i运维技术以梦为马不负韶华","email":"i@valaxy.site","color":"#6058d9"},{"url":"https://www.linux18.com","avatar":"https://www.linux18.com/images/avatar.jpg","name":"linux运维博客-风倾","blog":"linux运维博客-风倾","desc":"这个运维是真菜，但是风倾那小子是真的坏","email":"fengqing@fengqing.ltd","color":"#0078e7"},{"url":"https://www.hukdoesn.cn","avatar":"https://www.hukdoesn.cn/wp-content/uploads/2022/12/WechatIMG114.jpeg","name":"胡图图","blog":"胡同学","desc":"撸猫撸到满手油","email":"hukdoesn@163.com","color":"#0078e7"}],"random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/links/index.md","lastUpdated":1673590492000}'),R={name:"pages/links/index.md",data(){return{data:m,frontmatter:m.frontmatter}},setup(){y("pageData",m)}};function V(e,i,d,h,s,n){const l=M,g=v;return r(),$(g,{frontmatter:s.frontmatter,data:s.data},{"main-content-md":a(()=>[S(l,{links:s.frontmatter.links,random:s.frontmatter.random},null,8,["links","random"])]),"main-header":a(()=>[t(e.$slots,"main-header")]),"main-header-after":a(()=>[t(e.$slots,"main-header-after")]),"main-nav":a(()=>[t(e.$slots,"main-nav")]),"main-content":a(()=>[t(e.$slots,"main-content")]),"main-content-after":a(()=>[t(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(e.$slots,"main-nav-after")]),comment:a(()=>[t(e.$slots,"comment")]),footer:a(()=>[t(e.$slots,"footer")]),aside:a(()=>[t(e.$slots,"aside")]),"aside-custom":a(()=>[t(e.$slots,"aside-custom")]),default:a(()=>[t(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const W=f(R,[["render",V],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/links/index.md"]]);export{P as __pageData,W as default};
