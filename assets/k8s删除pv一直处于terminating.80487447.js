import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang.98bfeca7.js";import{_ as p,c as m,w as t,o as l,r as a,g as n,p as d}from"./app.d8405b3c.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.7ecd41bb.js";import"./YunCard.vue_vue_type_style_index_0_lang.eccece62.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.97f4c0bd.js";const P=JSON.parse('{"title":"k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating","description":"","frontmatter":{"title":"k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating","categories":"Kubernetes","tags":["terminating"],"date":"2021-02-24T17:16:14.000Z"},"headers":[],"relativePath":"pages/posts/k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating.md","lastUpdated":null}'),s=JSON.parse('{"title":"k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating","description":"","frontmatter":{"title":"k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating","categories":"Kubernetes","tags":["terminating"],"date":"2021-02-24T17:16:14.000Z"},"headers":[],"relativePath":"pages/posts/k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating.md","lastUpdated":null}'),v={name:"pages/posts/k8s\u5220\u9664pv\u4E00\u76F4\u5904\u4E8Eterminating.md",data(){return{data:s,frontmatter:s.frontmatter}},setup(){d("pageData",s)}},c=n("p",null,"pod\u663E\u793A\u89E3\u51B3\u529E\u6CD5",-1),f=n("p",null,"kubectl delete pod [pod name] --force --grace-period=0 -n [namespace] pv \u663E\u793A\u89E3\u51B3\u529E\u6CD5",-1),g=n("p",null,`kubectl patch pv pvName1 pvName2 -p '{"metadata":{"finalizers":null}}' PVC \u663E\u793A\u89E3\u51B3\u529E\u6CD5`,-1),u=n("p",null,`kubectl patch pvc pvcName1 pvcName2 -p '{"metadata":{"finalizers": []}}' --type=merge`,-1);function _(e,h,k,$,o,b){const r=i;return l(),m(r,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":t(()=>[c,f,g,u]),"main-header":t(()=>[a(e.$slots,"main-header")]),"main-header-after":t(()=>[a(e.$slots,"main-header-after")]),"main-nav":t(()=>[a(e.$slots,"main-nav")]),"main-content":t(()=>[a(e.$slots,"main-content")]),"main-content-after":t(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(e.$slots,"main-nav-after")]),comment:t(()=>[a(e.$slots,"comment")]),footer:t(()=>[a(e.$slots,"footer")]),aside:t(()=>[a(e.$slots,"aside")]),"aside-custom":t(()=>[a(e.$slots,"aside-custom")]),default:t(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const S=p(v,[["render",_]]);export{P as __pageData,S as default};
