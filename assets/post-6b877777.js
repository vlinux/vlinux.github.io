import{d as f,u as C,J as x,M as v,o as a,f as p,b as t,t as _,h as n,a as g,_ as $,j as S,F as w,g as V,n as y,O as z,y as U,aa as L,c as d,w as h,$ as Y,q as j,r as q}from"./app-a113c884.js";import{_ as B}from"./YunPostMeta-f922fb6e.js";const F={class:"post-copyright"},M={class:"post-copyright-author"},N={key:0,class:"post-copyright-link"},H=["href"],P={class:"post-copyright-license"},T=["innerHTML"],D=f({__name:"ValaxyCopyright",props:{url:{type:String,required:!1,default:""}},setup(c){const{t:o,locale:l}=C(),e=x(),i=e.value.license.type==="zero"?"1.0":"4.0",r=e.value.license.type==="zero"?"publicdomain":"licenses",s=v(()=>{const m=e.value.license.language?e.value.license.language:l.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${r}/${e.value.license.type}/${i}/deed.${m}`}),u=v(()=>o("post.copyright.license_content",[`<a href="${s.value}" target="_blank" rel="noopener" title="CC ${`${e.value.license.type.toUpperCase()} ${i}`} ">CC ${e.value.license.type.toUpperCase()}</a>`]));return(m,b)=>(a(),p("ul",F,[t("li",M,[t("strong",null,_(n(o)("post.copyright.author")+n(o)("symbol.colon")),1),t("span",null,_(n(e).author.name),1)]),c.url?(a(),p("li",N,[t("strong",null,_(n(o)("post.copyright.link")+n(o)("symbol.colon")),1),t("a",{href:c.url},_(c.url),9,H)])):g("v-if",!0),t("li",P,[t("strong",null,_(n(o)("post.copyright.license_title")+n(o)("symbol.colon")),1),t("span",{innerHTML:n(u)},null,8,T)])]))}});const E=$(D,[["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/node_modules/.pnpm/valaxy@0.12.1_typescript@4.9.4/node_modules/valaxy/client/components/ValaxyCopyright.vue"]]),I={class:"yun-sponsor-container flex justify-center items-center flex-col"},J=["title"],O=t("div",{"i-ri-heart-line":""},null,-1),Q=[O],R=["href"],A=["src","title"],G=f({__name:"YunSponsor",setup(c){const{t:o}=C(),l=x(),e=S(!1);return(i,r)=>(a(),p("div",I,[t("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:n(o)("reward.donate"),text:"red-400",onClick:r[0]||(r[0]=s=>e.value=!e.value)},Q,8,J),t("div",{class:y(["qrcode-container qrcode flex justify-around",e.value&&"show"]),m:"y-4"},[(a(!0),p(w,null,V(n(l).sponsor.methods,(s,u)=>(a(),p("a",{key:u,class:y(["flex flex-col justify-center items-center animate-iteration-1",e.value&&"animate-fade-in"]),href:s.url,target:"_blank",style:z(`color:${s.color}`)},[t("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:s.url,title:s.name},null,8,A),t("div",{text:"xl",m:"2",class:y(s.icon)},null,2)],14,R))),128))],2)]))}});const K=$(G,[["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/node_modules/.pnpm/valaxy-theme-yun@0.12.1/node_modules/valaxy-theme-yun/components/YunSponsor.vue"]]),W=f({__name:"post",setup(c){const o=x(),l=U(),e=L(),i=v(()=>typeof l.value.sponsor=="boolean"?l.value.sponsor:o.value.sponsor.enable);return(r,s)=>{const u=B,m=K,b=E,k=Y;return a(),d(k,null,{"main-header-after":h(()=>[j(u,{frontmatter:n(l)},null,8,["frontmatter"])]),"main-content-after":h(()=>[n(i)?(a(),d(m,{key:0,m:"t-6"})):g("v-if",!0),n(l).copyright||n(o).license.enabled?(a(),d(b,{key:1,url:n(e),m:"y-4"},null,8,["url"])):g("v-if",!0)]),"aside-custom":h(()=>[q(r.$slots,"aside-custom")]),_:3})}}}),ee=$(W,[["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/node_modules/.pnpm/valaxy-theme-yun@0.12.1/node_modules/valaxy-theme-yun/layouts/post.vue"]]);export{ee as default};
