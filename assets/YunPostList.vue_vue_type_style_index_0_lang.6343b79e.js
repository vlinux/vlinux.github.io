import{d as $,M as b,o as t,b as n,c as m,w as g,h as c,F as _,e as C,Q as k,t as y,n as w,f as r,g as l,a as j,u as V,K as z,q as h,O as A,U as E,j as F,V as T,T as Y}from"./index.89bd7b27.js";import{_ as B}from"./YunCard.vue_vue_type_style_index_0_lang.2f4282c6.js";import{_ as M}from"./YunPostMeta.vue_vue_type_style_index_0_lang.993c2f1c.js";const S={class:"pagination"},N=l("div",{"i-ri-arrow-left-s-line":""},null,-1),q=l("div",{"i-ri-arrow-right-s-line":""},null,-1),D=$({__name:"ValaxyPagination",props:{curPage:null,total:null,pageSize:null},emits:["pageChange"],setup(e,{emit:u}){const s=e,d=b(()=>Math.ceil(s.total/s.pageSize)),i=b(()=>s.curPage===1||s.curPage===d.value?3:2),p=o=>o===1||o===d.value?!0:o>s.curPage-i.value&&o<s.curPage+i.value,v=o=>(u("pageChange",o),o===1?"/":`/page/${o}`);return(o,x)=>{const f=j("router-link");return t(),n("nav",S,[e.curPage!==1?(t(),m(f,{key:0,class:"page-number",to:v(e.curPage-1),"aria-label":"prev"},{default:g(()=>[N]),_:1},8,["to"])):c("v-if",!0),(t(!0),n(_,null,C(r(d),a=>(t(),n(_,null,[p(a)?(t(),m(f,{key:a,class:w(["page-number",e.curPage===a&&"active"]),to:v(a)},{default:g(()=>[k(y(a),1)]),_:2},1032,["class","to"])):a===e.curPage-r(i)?(t(),n("span",{key:`prev-space-${a}`,class:"space",disabled:""}," ... ")):a===e.curPage+r(i)?(t(),n("span",{key:`next-space-${a}`,class:"space",disabled:""}," ... ")):c("v-if",!0)],64))),256)),e.curPage!==r(d)?(t(),m(f,{key:1,class:"page-number",to:v(e.curPage+1),"aria-label":"next"},{default:g(()=>[q]),_:1},8,["to"])):c("v-if",!0)])}}});const H={class:"flex flex-1 of-hidden justify-start items-start post-card-info",w:"full"},I=["src","alt"],K={class:"flex justify-center items-center title text-2xl",font:"serif black"},O=["innerHTML"],Q=l("div",{m:"b-5"},null,-1),U=["href"],G={w:"full",class:"yun-card-actions flex justify-between",border:"t",text:"sm"},J={class:"inline-flex"},R=l("div",{m:"x-1","i-ri-folder-2-line":""},null,-1),W={class:"post-tags inline-flex",m:"r-2"},X=l("div",{m:"r-1","i-ri-price-tag-3-line":""},null,-1),Z=$({__name:"YunPostCard",props:{post:null},setup(e){const u=e,{t:s}=V(),{icon:d,styles:i}=z(u.post.type);return(p,v)=>{const o=E,x=M,f=j("router-link"),a=B;return t(),m(a,{m:"y-4 auto",class:w(e.post.cover?"post-card-image":"post-card"),style:A(r(i))},{default:g(()=>[l("div",H,[e.post.cover?(t(),n("img",{key:0,src:e.post.cover,alt:r(s)("post.cover"),width:"320",height:"180",w:"40%",h:"54",class:"cover object-cover object-center md:shadow"},null,8,I)):c("v-if",!0),l("div",{class:w(["flex flex-col flex-1 items-center",e.post.cover&&"max-h-54"]),w:"full"},[h(o,{class:"post-title-link",to:e.post.path||"",m:"t-3"},{default:g(()=>[l("div",K,[e.post.type?(t(),n("div",{key:0,class:w(["inline-flex",r(d)]),m:"r-1"},null,2)):c("v-if",!0),k(y(e.post.title),1)])]),_:1},8,["to"]),h(x,{frontmatter:e.post},null,8,["frontmatter"]),e.post.excerpt?(t(),n("div",{key:0,class:"markdown-body",text:"left",w:"full",p:"x-6 lt-sm:4",innerHTML:e.post.excerpt},null,8,O)):c("v-if",!0),Q,e.post.url?(t(),n("a",{key:1,href:e.post.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},y(r(s)("post.view_link")),9,U)):c("v-if",!0)],2)]),c(" always show "),l("div",G,[l("div",J,[h(f,{to:{path:"/categories/",query:{category:Array.isArray(e.post.categories)?e.post.categories[e.post.categories.length-1]:e.post.categories}},class:"post-categories inline-flex justify-center items-center",m:"l-2"},{default:g(()=>[R,k(" "+y(Array.isArray(e.post.categories)?e.post.categories.join(" > "):e.post.categories),1)]),_:1},8,["to"])]),l("div",W,[e.post.tags?(t(!0),n(_,{key:0},C(e.post.tags,(P,L)=>(t(),m(f,{key:L,to:{path:"/tags/",query:{tag:P}},m:"x-1",class:"post-tag inline-flex justify-center items-center"},{default:g(()=>[X,k(" "+y(P),1)]),_:2},1032,["to"]))),128)):c("v-if",!0)])])]),_:1},8,["class","style"])}}}),ee={w:"full",p:"x-4 lt-sm:0"},te={key:0,py2:"",op50:""},oe=$({__name:"YunPostList",props:{type:null,posts:null,curPage:{default:1}},setup(e){const u=e,s=F(7),d=T({type:u.type||""}),i=b(()=>u.posts||d.value),p=b(()=>i.value.slice((u.curPage-1)*s.value,u.curPage*s.value));return(v,o)=>{const x=Z,f=D;return t(),n(_,null,[l("div",ee,[r(p).length?c("v-if",!0):(t(),n("div",te," \u535A\u4E3B\u8FD8\u4EC0\u4E48\u90FD\u6CA1\u5199\u54E6\uFF5E ")),(t(!0),n(_,null,C(r(p),(a,P)=>(t(),m(Y,{key:P,name:"fade"},{default:g(()=>[h(x,{post:a},null,8,["post"])]),_:2},1024))),128))]),h(f,{"cur-page":e.curPage,"page-size":s.value,total:r(i).length},null,8,["cur-page","page-size","total"])],64)}}});export{oe as _};
