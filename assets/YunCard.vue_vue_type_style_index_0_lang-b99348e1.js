import{d as a,o as s,f as t,a as o,b as c,r as n}from"./app-c05f80d3.js";const l={class:"yun-card"},d=["src"],u={key:1,class:"yun-card-header"},i={key:2,class:"yun-card-content",w:"full"},v=a({__name:"YunCard",props:{cover:null},setup(r){return(e,_)=>(s(),t("div",l,[r.cover?(s(),t("img",{key:0,width:"640",height:"360",class:"object-cover select-none",h:"64 md:sm",w:"full",src:r.cover},null,8,d)):o("v-if",!0),e.$slots.header?(s(),t("div",u,[c("header",null,[n(e.$slots,"header")])])):o("v-if",!0),n(e.$slots,"default"),e.$slots.content?(s(),t("div",i,[n(e.$slots,"content")])):o("v-if",!0)]))}});export{v as _};
