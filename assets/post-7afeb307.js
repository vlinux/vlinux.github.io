import{d as f,u as $,M as C,P as g,o as s,f as c,b as n,t as m,h as e,a as u,j as S,F as z,g as P,n as y,Q as V,c as d,a6 as j,B as L,y as M,ad as B,w as v,a1 as T,q as x,r as F}from"./app-84496ba8.js";import{a as N,b as U,_ as q}from"./YunPostMeta.vue_vue_type_style_index_0_lang-a19c1a56.js";const H={class:"post-copyright"},R={class:"post-copyright-author"},W={key:0,class:"post-copyright-link"},A=["href"],Q={class:"post-copyright-license"},D=["innerHTML"],E=f({__name:"ValaxyCopyright",props:{url:{default:""}},setup(a){const{t:o,locale:l}=$(),t=C(),i=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",r=g(()=>{const h=t.value.license.language?t.value.license.language:l.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${i}/deed.${h}`}),p=g(()=>o("post.copyright.license_content",[`<a href="${r.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${i}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(h,k)=>(s(),c("ul",H,[n("li",R,[n("strong",null,m(e(o)("post.copyright.author")+e(o)("symbol.colon")),1),n("span",null,m(e(t).author.name),1)]),a.url?(s(),c("li",W,[n("strong",null,m(e(o)("post.copyright.link")+e(o)("symbol.colon")),1),n("a",{href:a.url},m(a.url),9,A)])):u("v-if",!0),n("li",Q,[n("strong",null,m(e(o)("post.copyright.license_title")+e(o)("symbol.colon")),1),n("span",{innerHTML:e(p)},null,8,D)])]))}});const I={class:"yun-sponsor-container flex justify-center items-center flex-col"},G=["title"],J=n("div",{"i-ri-heart-line":""},null,-1),K=[J],O=["href"],X=["src","title"],Z=f({__name:"YunSponsor",setup(a){const{t:o}=$(),l=C(),t=S(!1);return(i,_)=>(s(),c("div",I,[n("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:e(o)("reward.donate"),text:"red-400",onClick:_[0]||(_[0]=r=>t.value=!t.value)},K,8,G),n("div",{class:y(["qrcode-container qrcode flex justify-around",t.value&&"show"]),m:"y-4"},[(s(!0),c(z,null,P(e(l).sponsor.methods,(r,p)=>(s(),c("a",{key:p,class:y(["flex flex-col justify-center items-center animate-iteration-1",t.value&&"animate-fade-in"]),href:r.url,target:"_blank",style:V(`color:${r.color}`)},[n("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:r.url,title:r.name},null,8,X),n("div",{text:"xl",m:"2",class:y(r.icon)},null,2)],14,O))),128))],2)]))}});const ee={class:"inline-flex",text:"sm",py:"1"},te={key:1,mx:"2"},ne=f({__name:"YunPostCategoriesAndTags",props:{frontmatter:null},setup(a){return(o,l)=>{const t=N,i=U;return s(),c("div",ee,[a.frontmatter.categories?(s(),d(t,{key:0,categories:a.frontmatter.categories},null,8,["categories"])):u("v-if",!0),a.frontmatter.categories&&a.frontmatter.tags?(s(),c("span",te,"-")):u("v-if",!0),a.frontmatter.tags?(s(),d(i,{key:2,tags:a.frontmatter.tags},null,8,["tags"])):u("v-if",!0)])}}}),oe={key:0,flex:"~",text:"sm",py:"1"},se=["title"],ae=n("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),le=["data-path"],ie=["title"],re=n("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),ce=["data-path"],ue=f({__name:"YunWalineMeta",setup(a){const o=j(),l=L(),t=g(()=>l.value.addons["valaxy-addon-waline"]),{t:i}=$();return(_,r)=>e(t)&&e(t).options?(s(),c("div",oe,[e(t).options.pageview?(s(),c("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(i)("post.pageview_count")},[ae,n("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":e(o).path},null,8,le)],8,se)):u("v-if",!0),e(t).options.comment?(s(),c("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(i)("post.comment_count")},[re,n("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":e(o).path},null,8,ce)],8,ie)):u("v-if",!0)])):u("v-if",!0)}}),me=f({__name:"post",setup(a){const o=C(),l=M(),t=B(),i=g(()=>typeof l.value.sponsor=="boolean"?l.value.sponsor:o.value.sponsor.enable);return(_,r)=>{const p=q,h=ue,k=ne,b=Z,w=E,Y=T;return s(),d(Y,null,{"main-header-after":v(()=>[x(p,{frontmatter:e(l)},null,8,["frontmatter"]),x(h),x(k,{frontmatter:e(l)},null,8,["frontmatter"])]),"main-content-after":v(()=>[e(i)?(s(),d(b,{key:0,m:"t-6"})):u("v-if",!0),e(l).copyright||e(o).license.enabled?(s(),d(w,{key:1,url:e(t),m:"y-4"},null,8,["url"])):u("v-if",!0)]),"aside-custom":v(()=>[F(_.$slots,"aside-custom")]),_:3})}}});export{me as default};