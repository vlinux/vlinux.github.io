import{d as $,j as z,u as B,a as L,o as a,b as s,g as f,t as p,f as t,h as v,F as C,a1 as I,e as P,c as h,w as d,q as u,y as R,a2 as S,a3 as T,M as w,V as D,a4 as H,X as M,L as O,Z as X}from"./index.f0ca0b47.js";import{_ as Z}from"./YunCard.vue_vue_type_style_index_0_lang.2286a1f9.js";import{_ as A}from"./YunPostCollapse.vue_vue_type_style_index_0_lang.d33c34d6.js";import{_ as G}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.4e476da2.js";const J={key:0,class:"category-list-item inline-flex items-center cursor-pointer"},K={key:0,"i-ri-folder-add-line":""},Q={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},W={key:0},ee=f("div",{"i-ri-file-text-line":""},null,-1),te={m:"l-1",font:"serif black"},ae=$({__name:"YunCategory",props:{name:null,category:null,level:null,displayCategory:null,collapsable:{type:Boolean,default:!0}},setup(e){const l=z(e.collapsable),{t:y,locale:m}=B(),n=r=>{const o=m.value==="zh-CN"?"zh":m.value;return r[`title_${o}`]?r[`title_${o}`]:r.title};return(r,o)=>{const _=L("router-link"),k=N;return a(),s(C,null,[e.category.total?(a(),s("li",J,[f("span",{class:"folder-action inline-flex",onClick:o[0]||(o[0]=c=>l.value=!l.value)},[l.value?(a(),s("div",K)):(a(),s("div",Q))]),f("span",{class:"category-name",m:"l-1",onClick:o[1]||(o[1]=c=>e.displayCategory?e.displayCategory(e.name):null)},p(e.name==="Uncategorized"?t(y)("category.uncategorized"):e.name)+" ["+p(e.category.total)+"] ",1)])):v("v-if",!0),l.value?v("v-if",!0):(a(),s(C,{key:1},[t(I)(e.category)?(a(),h(k,{key:1,categories:e.category.children,"display-category":e.displayCategory,collapsable:l.value},null,8,["categories","display-category","collapsable"])):(a(),s("ul",W,[(a(!0),s(C,null,P(e.category.posts,(c,b)=>(a(),s("li",{key:b,class:"post-list-item",m:"l-4"},[c.title?(a(),h(_,{key:0,to:c.path||"",class:"inline-flex items-center"},{default:d(()=>[ee,f("span",te,p(n(c)),1)]),_:2},1032,["to"])):v("v-if",!0)]))),128))]))],64))],64)}}}),N=$({__name:"YunCategories",props:{categories:null,level:{default:0},displayCategory:null,collapsable:{type:Boolean,default:!0}},setup(e){const l=z(e.collapsable);return(y,m)=>{const n=ae;return a(!0),s(C,null,P(Object.fromEntries(e.categories),(r,o)=>(a(),s("ul",{key:o,class:"category-list",m:"l-4"},[u(n,{name:o.toString(),category:r,level:e.level+1,"display-category":e.displayCategory,collapsable:l.value},null,8,["name","category","level","display-category","collapsable"])]))),128)}}});const oe={text:"center",class:"yun-text-light",p:"2"},ce=$({__name:"categories",setup(e){const{t:g}=B(),l=R(),y=S(),m=T(),n=w(()=>m.query.category||""),r=D(),o=w(()=>r.value.filter(i=>i.categories&&n.value!=="Uncategorized"?typeof i.categories=="string"?i.categories===n.value:i.categories.includes(n.value):!i.categories&&n.value==="Uncategorized"?i.categories===void 0:!1)),_=z(),{show:k}=H(_),c=M(),b=x=>{c.push({query:{category:x}}),k()},U=O(l);return(x,i)=>{const Y=G,V=N,q=L("router-view"),E=A,F=Z,j=X;return a(),h(j,null,{"main-header":d(()=>[u(Y,{title:t(U)||t(g)("menu.categories"),icon:t(l).icon||"i-ri-folder-2-line",color:t(l).color},null,8,["title","icon","color"])]),"main-content":d(()=>[f("div",oe,p(t(g)("counter.categories",t(y).children.size)),1),u(V,{categories:t(y).children,"display-category":b},null,8,["categories"]),u(q)]),"main-nav-before":d(()=>[t(n)?(a(),h(F,{key:0,ref_key:"collapse",ref:_,m:"t-4",w:"full"},{default:d(()=>[u(Y,{title:t(n)==="Uncategorized"?t(g)("category.uncategorized"):t(n),icon:"i-ri-folder-open-line"},null,8,["title"]),u(E,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(o)},null,8,["posts"])]),_:1},512)):v("v-if",!0)]),_:1})}}});export{ce as default};