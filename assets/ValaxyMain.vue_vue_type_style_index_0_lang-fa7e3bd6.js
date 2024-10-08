import{h as y,u as w,g as b,o as r,i as f,F as S,j as E,k as e,b as o,t as h,c as $,a as m,n as g,_ as T,l as F,m as x,q as j,s as L,v as W,x as q,e as d,y as H,z as Q,A as U,B as G,r as u,C as J,D as K,E as O,G as I,w as p,H as Z,I as X,J as tt,K as et,L as nt,M as ot,N as st,O as at,P as k,Q as lt,R as C,S as it,T as rt,U as ct,V as ut,W as _t}from"./app-c9a35e04.js";import{_ as mt}from"./YunFooter.vue_vue_type_script_setup_true_lang-aee502c7.js";import{_ as P}from"./YunCard.vue_vue_type_style_index_0_lang-68a832c1.js";import{_ as dt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-1a130fa6.js";const ft=["lang"],vt=["href"],pt=y({__name:"YunOutlineItem",props:{headers:null,onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:n}=w();return(l,i)=>{const c=b("YunOutlineItem",!0);return r(),f("ul",{class:g(t.root?"root":"nested")},[(r(!0),f(S,null,E(t.headers,({children:s,link:_,title:v,lang:a})=>(r(),f("li",{key:_,class:"va-toc-item",lang:a||e(n)},[o("a",{class:"outline-link",href:_,onClick:i[0]||(i[0]=(...Y)=>t.onClick&&t.onClick(...Y))},h(v),9,vt),s!=null&&s.length?(r(),$(c,{key:0,headers:s,"on-click":t.onClick},null,8,["headers","on-click"])):m("v-if",!0)],8,ft))),128))],2)}}});const ht=T(pt,[["__scopeId","data-v-e736e6e6"]]),yt=t=>(H("data-v-e1350763"),t=t(),Q(),t),$t={class:"content"},gt={class:"outline-title"},kt={"aria-labelledby":"doc-outline-aria-label"},wt=yt(()=>o("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),xt=y({__name:"YunOutline",setup(t){const n=F(),l=x(),i=x();j(l,i);const{headers:c,handleClick:s}=L();return(_,v)=>{const a=ht;return W((r(),f("div",{ref_key:"container",ref:l},[o("div",$t,[o("div",gt,h(e(n).outlineTitle||"On this page"),1),o("div",{ref_key:"marker",ref:i,class:"outline-marker"},null,512),o("nav",kt,[wt,d(a,{class:"va-toc relative z-1",headers:e(c),"on-click":e(s),root:""},null,8,["headers","on-click"])])])],512)),[[q,e(c).length]])}}});const Ct=T(xt,[["__scopeId","data-v-e1350763"]]),bt=o("div",{"i-ri-file-list-line":""},null,-1),Yt=[bt],Ot={class:"aside-container",flex:"~ col",overflow:"auto"},It={key:0,m:"t-6 b-2",font:"serif black"},St=o("div",{class:"flex-grow"},null,-1),Tt={key:2,class:"custom-container"},Pt=y({__name:"YunAside",setup(t){const n=U(),{t:l}=w(),i=G();return(c,s)=>{const _=J,v=Ct;return r(),f(S,null,[o("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:s[0]||(s[0]=a=>e(i).toggleRightSidebar())},Yt),d(_,{show:e(i).isRightSidebarOpen,onClick:s[1]||(s[1]=a=>e(i).toggleRightSidebar())},null,8,["show"]),m("  "),o("aside",{class:g(["va-card yun-aside",e(i).isRightSidebarOpen&&"open"]),m:"l-4",text:"center"},[o("div",Ot,[e(n).toc!==!1?(r(),f("h2",It,h(e(l)("sidebar.toc")),1)):m("v-if",!0),e(n).toc!==!1?(r(),$(v,{key:1})):m("v-if",!0),St,c.$slots.default?(r(),f("div",Tt,[u(c.$slots,"default")])):m("v-if",!0)])],2)],64)}}});const Vt=y({__name:"YunComment",setup(t){const n=K(),l=n.value.addons["valaxy-addon-waline"]?O(()=>I(()=>import("./YunWaline-e524fc64.js"),["assets/YunWaline-e524fc64.js","assets/app-c9a35e04.js","assets/index-d62c0a7e.css","assets/YunWaline-85c8a758.css"])):()=>null,i=n.value.addons["valaxy-addon-twikoo"]?O(()=>I(()=>import("./YunTwikoo-b3cdf543.js"),["assets/YunTwikoo-b3cdf543.js","assets/app-c9a35e04.js","assets/index-d62c0a7e.css"])):()=>null;return(c,s)=>{const _=b("ClientOnly"),v=P;return r(),$(v,{w:"full",p:"4",class:"comment sm:p-6 lg:px-12 xl:px-16"},{default:p(()=>[d(_,null,{default:p(()=>[d(e(l)),d(e(i))]),_:1})]),_:1})}}}),At={class:"post-nav"},Mt={class:"post-nav-item"},Nt=o("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),Rt={class:"title truncate",text:"sm"},zt={class:"post-nav-item"},Bt={class:"title truncate",text:"sm"},Dt=o("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),Et=y({__name:"YunPostNav",setup(t){const[n,l]=Z();return(i,c)=>{const s=b("router-link");return r(),f("div",At,[o("div",Mt,[e(n)?(r(),$(s,{key:0,class:"post-nav-prev",to:e(n).path||"",title:e(n).title},{default:p(()=>[Nt,o("span",Rt,h(e(n).title),1)]),_:1},8,["to","title"])):m("v-if",!0)]),o("div",zt,[e(l)?(r(),$(s,{key:0,to:e(l).path||"",title:e(l).title,class:"post-nav-next"},{default:p(()=>[o("span",Bt,h(e(l).title),1),Dt]),_:1},8,["to","title"])):m("v-if",!0)])])}}});const Ft={text:"center"},jt=["href"],Lt={m:"y-4",class:"end flex justify-center items-center"},Wt=o("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),qt={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},Ht=o("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Qt=y({__name:"ValaxyMd",props:{frontmatter:null,excerpt:null},setup(t){const n=t,l=X("onContentUpdated"),{t:i}=w(),c=x();function s(){var _;at(c.value),(_=l.value)==null||_.call(l)}return tt(()=>{s()}),n.frontmatter.aplayer&&et(),n.frontmatter.codepen&&nt(),ot(),(typeof n.frontmatter.medium_zoom>"u"||n.frontmatter.medium_zoom)&&st(),(_,v)=>_.$slots.default?(r(),f("article",{key:0,class:g(t.frontmatter.markdown!==!1&&"markdown-body")},[u(_.$slots,"default",{ref_key:"content",ref:c,onVnodeUpdated:s}),o("div",Ft,[t.frontmatter.url?(r(),f("a",{key:0,href:t.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},h(e(i)("post.view_link")),9,jt)):m("v-if",!0)]),t.frontmatter.end!==void 0?u(_.$slots,"end",{key:0},()=>[o("div",Lt,[Wt,o("span",qt,h(t.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Ht])]):m("v-if",!0)],2)):m("v-if",!0)}});const Ut={key:0,op:"80"},Gt=y({__name:"YunMdTimeWarning",props:{frontmatter:null},setup(t){const n=t;k.extend(lt);const{t:l}=w(),i=C(()=>{const c=k().valueOf()-k(n.frontmatter.updated).valueOf();return typeof n.frontmatter.time_warning=="number"?c>n.frontmatter.time_warning:n.frontmatter.time_warning||c>30*24*60*60*1e3});return(c,s)=>e(i)?(r(),f("blockquote",Ut,h(e(l)("post.time_warning",{ago:e(k)(t.frontmatter.updated).fromNow()})),1)):m("v-if",!0)}}),Jt={class:"yun-main lt-md:ml-0",flex:"~"},Kt={w:"full",flex:"~"},Zt={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},oe=y({__name:"ValaxyMain",props:{frontmatter:null,data:null},setup(t){const n=t,l=it(),{styles:i,icon:c,color:s}=rt(n.frontmatter.type),_=ct(C(()=>n.frontmatter)),v=C(()=>n.frontmatter.aside!==!1);return(a,Y)=>{const V=dt,A=Gt,M=Qt,N=P,R=Et,z=Vt,B=mt,D=Pt;return r(),f("main",Jt,[o("div",Kt,[u(a.$slots,"main",{},()=>[o("div",{class:g(["content",!e(v)&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[d(N,{cover:t.frontmatter.cover,m:"0",class:"relative",style:_t(e(i))},{default:p(()=>[u(a.$slots,"main-header",{},()=>[d(V,{class:"mb-2",title:e(_),icon:t.frontmatter.icon||e(c),color:t.frontmatter.color||e(s),cover:t.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(a.$slots,"main-header-after"),o("div",Zt,[u(a.$slots,"main-content",{},()=>[d(ut,{appear:""},{default:p(()=>[d(M,{frontmatter:t.frontmatter},{default:p(()=>[d(A,{frontmatter:t.frontmatter},null,8,["frontmatter"]),u(a.$slots,"main-content-md"),u(a.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),u(a.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(a.$slots,"main-nav-before"),u(a.$slots,"main-nav",{},()=>[t.frontmatter.nav!==!1?(r(),$(R,{key:0})):m("v-if",!0)]),u(a.$slots,"main-nav-after"),e(l).comment.enable&&t.frontmatter.comment!==!1?u(a.$slots,"comment",{key:0},()=>[d(z,{class:g(t.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):m("v-if",!0),u(a.$slots,"main-footer-before"),d(B),u(a.$slots,"main-footer-after")],2)]),u(a.$slots,"aside",{},()=>[e(v)?(r(),$(D,{key:0},{default:p(()=>[u(a.$slots,"aside-custom")]),_:3})):m("v-if",!0)])])])}}});export{oe as _};