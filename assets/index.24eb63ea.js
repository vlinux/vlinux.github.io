import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.b0a392d2.js";import{d as k,S as v,o as r,b as d,g as e,F as y,e as g,O as $,f as p,t as u,_ as x,c as b,w as n,q as j,r as a,p as S}from"./index.f9a20581.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.6f1a9685.js";import"./YunCard.vue_vue_type_style_index_0_lang.ed33b1f1.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.05f8eaf6.js";const w="https://cdn.yunyoujun.cn/img/avatar/none.jpg",B=t=>{t.target.src=w},D={class:"links"},E={class:"link-items"},N=["href","title"],U={class:"link-left"},L=["src","alt","onError"],O={class:"link-info",m:"l-2"},V={class:"link-blog",font:"serif black"},z={class:"link-desc"},C=k({__name:"YunLinks",props:{links:null,random:{type:Boolean}},setup(t){const i=t,{data:c}=v(i.links,i.random);return(f,o)=>(r(),d("div",D,[e("ul",E,[(r(!0),d(y,null,g(p(c),(s,l)=>(r(),d("li",{key:l,class:"link-item",style:$(`--primary-color: ${s.color}`)},[e("a",{class:"link-url",p:"x-4 y-2",href:s.url,title:s.name,alt:"portrait",rel:"friend"},[e("div",U,[e("img",{class:"link-avatar",w:"16",h:"16",loading:"lazy",src:s.avatar,alt:s.name,onError:p(B)},null,40,L)]),e("div",O,[e("div",V,u(s.blog),1),e("div",z,u(s.desc),1)])],8,N)],4))),128))])]))}});const R=JSON.parse('{"title":"\u6211\u7684\u5C0F\u4F19\u4F34\u4EEC","description":"\u4E91\u6E38\u7684\u5C0F\u4F19\u4F34\u4EEC","frontmatter":{"title":"\u6211\u7684\u5C0F\u4F19\u4F34\u4EEC","keywords":"\u94FE\u63A5","description":"\u4E91\u6E38\u7684\u5C0F\u4F19\u4F34\u4EEC","links":"https://friends.yunyoujun.cn/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/links/index.md","lastUpdated":0}'),m=JSON.parse('{"title":"\u6211\u7684\u5C0F\u4F19\u4F34\u4EEC","description":"\u4E91\u6E38\u7684\u5C0F\u4F19\u4F34\u4EEC","frontmatter":{"title":"\u6211\u7684\u5C0F\u4F19\u4F34\u4EEC","keywords":"\u94FE\u63A5","description":"\u4E91\u6E38\u7684\u5C0F\u4F19\u4F34\u4EEC","links":"https://friends.yunyoujun.cn/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/links/index.md","lastUpdated":0}'),F={name:"pages/links/index.md",data(){return{data:m,frontmatter:m.frontmatter}},setup(){S("pageData",m)}};function I(t,i,c,f,o,s){const l=C,_=h;return r(),b(_,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":n(()=>[j(l,{links:o.frontmatter.links,random:o.frontmatter.random},null,8,["links","random"])]),"main-header":n(()=>[a(t.$slots,"main-header")]),"main-header-after":n(()=>[a(t.$slots,"main-header-after")]),"main-nav":n(()=>[a(t.$slots,"main-nav")]),"main-content":n(()=>[a(t.$slots,"main-content")]),"main-content-after":n(()=>[a(t.$slots,"main-content-after")]),"main-nav-before":n(()=>[a(t.$slots,"main-nav-before")]),"main-nav-after":n(()=>[a(t.$slots,"main-nav-after")]),comment:n(()=>[a(t.$slots,"comment")]),footer:n(()=>[a(t.$slots,"footer")]),aside:n(()=>[a(t.$slots,"aside")]),"aside-custom":n(()=>[a(t.$slots,"aside-custom")]),default:n(()=>[a(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const A=x(F,[["render",I]]);export{R as __pageData,A as default};
