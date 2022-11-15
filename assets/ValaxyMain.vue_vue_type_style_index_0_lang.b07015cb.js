import{d as k,u as x,a as P,o,b as m,F as S,e as E,f as e,g as n,t as $,c as f,h as u,n as g,_ as A,i as M,j as w,k as R,l as z,m as F,v as L,q as h,s as j,x as H,y as q,z as G,r as i,A as J,B as K,w as y,C as Q,D as U,E as W,G as X,H as Z,T as ee,I as te,J as ne,K as se,L as oe,M as Y,N as O,O as ae,P as I}from"./index.946a4958.js";import{_ as le}from"./YunFooter.vue_vue_type_script_setup_true_lang.14218404.js";import{_ as ie}from"./YunCard.vue_vue_type_style_index_0_lang.204b0135.js";import{_ as re}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.f122e8bc.js";const ce=["lang"],ue=["href"],de=k({__name:"YunOutlineItem",props:{headers:null,onClick:null,root:{type:Boolean}},setup(t){const{locale:l}=x();return(s,r)=>{const _=P("YunOutlineItem",!0);return o(),m("ul",{class:g(t.root?"root":"nested")},[(o(!0),m(S,null,E(t.headers,({children:a,link:d,title:v,lang:p})=>(o(),m("li",{key:d,class:"va-toc-item",lang:p||e(l)},[n("a",{class:"outline-link",href:d,onClick:r[0]||(r[0]=(...b)=>t.onClick&&t.onClick(...b))},$(v),9,ue),a!=null&&a.length?(o(),f(_,{key:0,headers:a,"on-click":t.onClick},null,8,["headers","on-click"])):u("v-if",!0)],8,ce))),128))],2)}}});const _e=A(de,[["__scopeId","data-v-00264c1d"]]),me=t=>(j("data-v-3ec1ec4d"),t=t(),H(),t),fe={class:"content"},ve={class:"outline-title"},pe={"aria-labelledby":"doc-outline-aria-label"},he=me(()=>n("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),ye=k({__name:"YunOutline",setup(t){const l=M(),s=w(),r=w();R(s,r);const{headers:_,handleClick:a}=z();return(d,v)=>{const p=_e;return F((o(),m("div",{ref_key:"container",ref:s},[n("div",fe,[n("div",ve,$(e(l).outlineTitle||"On this page"),1),n("div",{ref_key:"marker",ref:r,class:"outline-marker"},null,512),n("nav",pe,[he,h(p,{class:"va-toc relative z-1",headers:e(_),"on-click":e(a),root:""},null,8,["headers","on-click"])])])],512)),[[L,e(_).length]])}}});const $e=A(ye,[["__scopeId","data-v-3ec1ec4d"]]),ke=n("div",{"i-ri-file-list-line":""},null,-1),ge=[ke],be={class:"aside-container",flex:"~ col"},we={key:0,m:"t-6 b-2",font:"serif black"},xe=n("div",{class:"flex-grow"},null,-1),Ce={key:2,class:"custom-container"},Ye=k({__name:"YunAside",setup(t){const l=q(),{t:s}=x(),r=G();return(_,a)=>{const d=J,v=$e;return o(),m(S,null,[n("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=p=>e(r).toggleRightSidebar())},ge),h(d,{show:e(r).isRightSidebarOpen,onClick:a[1]||(a[1]=p=>e(r).toggleRightSidebar())},null,8,["show"]),u("  "),n("aside",{class:g(["va-card aside",e(r).isRightSidebarOpen&&"open"]),m:"l-4",text:"center"},[n("div",be,[e(l).toc!==!1?(o(),m("h2",we,$(e(s)("sidebar.toc")),1)):u("v-if",!0),e(l).toc!==!1?(o(),f(v,{key:1})):u("v-if",!0),xe,_.$slots.default?(o(),m("div",Ce,[i(_.$slots,"default")])):u("v-if",!0)])],2)],64)}}});const Oe={class:"post-nav"},Ie={class:"post-nav-item"},Pe=n("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),Se={class:"title truncate",text:"sm"},Ae={class:"post-nav-item"},Te={class:"title truncate",text:"sm"},Ve=n("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),Ne=k({__name:"YunPostNav",setup(t){const[l,s]=K();return(r,_)=>{const a=P("router-link");return o(),m("div",Oe,[n("div",Ie,[e(l)?(o(),f(a,{key:0,class:"post-nav-prev",to:e(l).path||"",title:e(l).title},{default:y(()=>[Pe,n("span",Se,$(e(l).title),1)]),_:1},8,["to","title"])):u("v-if",!0)]),n("div",Ae,[e(s)?(o(),f(a,{key:0,to:e(s).path||"",title:e(s).title,class:"post-nav-next"},{default:y(()=>[n("span",Te,$(e(s).title),1),Ve]),_:1},8,["to","title"])):u("v-if",!0)])])}}});const Be={text:"center"},De=["href"],Ee={m:"y-4",class:"end flex justify-center items-center"},Me=n("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Re={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},ze=n("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Fe=k({__name:"ValaxyMd",props:{frontmatter:null,excerpt:null},setup(t){const l=t,s=Q("onContentUpdated"),{t:r}=x(),_=w();function a(){var d;te(_.value),(d=s.value)==null||d.call(s)}return U(()=>{a()}),l.frontmatter.aplayer&&W(),l.frontmatter.codepen&&X(),Z(),(d,v)=>(o(),f(ee,{appear:""},{default:y(()=>[d.$slots.default?(o(),m("article",{key:0,class:g(t.frontmatter.markdown!==!1&&"markdown-body")},[i(d.$slots,"default",{ref_key:"content",ref:_,onVnodeUpdated:a}),n("div",Be,[t.frontmatter.url?(o(),m("a",{key:0,href:t.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},$(e(r)("post.view_link")),9,De)):u("v-if",!0)]),t.frontmatter.end!==void 0?i(d.$slots,"end",{key:0},()=>[n("div",Ee,[Me,n("span",Re,$(t.frontmatter.end?"Q.E.D.":"To Be Continued."),1),ze])]):u("v-if",!0)],2)):u("v-if",!0)]),_:3}))}}),Le={class:"yun-main lt-md:ml-0",flex:"~"},je={w:"full",flex:"~"},He={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Ue=k({__name:"ValaxyMain",props:{frontmatter:null,data:null},setup(t){const l=t,s=ne(),{styles:r,icon:_,color:a}=se(l.frontmatter.type),d=oe(Y(()=>l.frontmatter)),v=Y(()=>l.frontmatter.aside!==!1),p=s.value.comment.waline.enable?O(()=>I(()=>import("./YunWaline.5241b07a.js"),["assets/YunWaline.5241b07a.js","assets/index.946a4958.js","assets/index.e5d80596.css","assets/YunWaline.24edbdfc.css"])):()=>null,b=s.value.comment.waline.enable?O(()=>I(()=>import("./YunTwikoo.a3605b4c.js"),["assets/YunTwikoo.a3605b4c.js","assets/index.946a4958.js","assets/index.e5d80596.css"])):()=>null;return(c,qe)=>{const T=re,V=Fe,C=ie,N=Ne,B=le,D=Ye;return o(),m("main",Le,[n("div",je,[i(c.$slots,"main",{},()=>[n("div",{class:g(["content",!e(v)&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[h(C,{cover:t.frontmatter.cover,m:"0",class:"relative",style:ae(e(r))},{default:y(()=>[i(c.$slots,"main-header",{},()=>[h(T,{title:e(d),icon:t.frontmatter.icon||e(_),color:t.frontmatter.color||e(a),cover:t.frontmatter.cover},null,8,["title","icon","color","cover"])]),i(c.$slots,"main-header-after"),n("div",He,[i(c.$slots,"main-content",{},()=>[h(V,{frontmatter:t.frontmatter},{default:y(()=>[i(c.$slots,"main-content-md"),i(c.$slots,"default")]),_:3},8,["frontmatter"])]),i(c.$slots,"main-content-after")])]),_:3},8,["cover","style"]),i(c.$slots,"main-nav-before"),i(c.$slots,"main-nav",{},()=>[t.frontmatter.nav!==!1?(o(),f(N,{key:0})):u("v-if",!0)]),i(c.$slots,"main-nav-after"),e(s).comment.enable&&t.frontmatter.comment!==!1?i(c.$slots,"comment",{key:0},()=>[h(C,{w:"full",p:"4",class:g(["comment sm:p-6 lg:px-12 xl:px-16",t.frontmatter.nav===!1?"mt-4":0])},{default:y(()=>[e(s).comment.waline.enable?(o(),f(e(p),{key:0})):u("v-if",!0),e(s).comment.twikoo.enable?(o(),f(e(b),{key:1})):u("v-if",!0)]),_:1},8,["class"])]):u("v-if",!0),i(c.$slots,"main-footer-before"),h(B),i(c.$slots,"main-footer-after")],2)]),i(c.$slots,"aside",{},()=>[e(v)?(o(),f(D,{key:0},{default:y(()=>[i(c.$slots,"aside-custom")]),_:3})):u("v-if",!0)])])])}}});export{Ue as _};
