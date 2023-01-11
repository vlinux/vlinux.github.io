import{_ as i}from"./ValaxyMain-5334b760.js";import{_ as p,p as D,c as y,w as e,o as d,a as c,r as n,b as s,R as l}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const Ls=JSON.parse('{"title":"Element Plus 的主题系统改造了哪些","description":"","frontmatter":{"title":"Element Plus 的主题系统改造了哪些","date":"2021-07-13T21:47:46.000Z","updated":"2021-07-13T21:47:46.000Z","tags":null,"categories":null},"headers":[{"level":2,"title":"变量名","slug":"变量名","link":"#变量名","children":[{"level":3,"title":"规范变量名（scss 与 css var）","slug":"规范变量名（scss-与-css-var）","link":"#规范变量名（scss-与-css-var）","children":[]},{"level":3,"title":"sass:map 组织组件变量","slug":"sass-map-组织组件变量","link":"#sass-map-组织组件变量","children":[]},{"level":3,"title":"通过 sass 自动生成 css var","slug":"通过-sass-自动生成-css-var","link":"#通过-sass-自动生成-css-var","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"vite import scss 无法互相影响","slug":"vite-import-scss-无法互相影响","link":"#vite-import-scss-无法互相影响","children":[]}]},{"level":2,"title":"每天一个小细节","slug":"每天一个小细节","link":"#每天一个小细节","children":[]},{"level":2,"title":"Why Scss module","slug":"why-scss-module","link":"#why-scss-module","children":[]},{"level":2,"title":"如何覆盖模块默认变量","slug":"如何覆盖模块默认变量","link":"#如何覆盖模块默认变量","children":[]},{"level":2,"title":"构建工具 gulp","slug":"构建工具-gulp","link":"#构建工具-gulp","children":[]}],"relativePath":"pages/_drafts/how-to-migrate-element-plus-var.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/_drafts/how-to-migrate-element-plus-var.md","lastUpdated":1652271529000}'),t=JSON.parse('{"title":"Element Plus 的主题系统改造了哪些","description":"","frontmatter":{"title":"Element Plus 的主题系统改造了哪些","date":"2021-07-13T21:47:46.000Z","updated":"2021-07-13T21:47:46.000Z","tags":null,"categories":null},"headers":[{"level":2,"title":"变量名","slug":"变量名","link":"#变量名","children":[{"level":3,"title":"规范变量名（scss 与 css var）","slug":"规范变量名（scss-与-css-var）","link":"#规范变量名（scss-与-css-var）","children":[]},{"level":3,"title":"sass:map 组织组件变量","slug":"sass-map-组织组件变量","link":"#sass-map-组织组件变量","children":[]},{"level":3,"title":"通过 sass 自动生成 css var","slug":"通过-sass-自动生成-css-var","link":"#通过-sass-自动生成-css-var","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"vite import scss 无法互相影响","slug":"vite-import-scss-无法互相影响","link":"#vite-import-scss-无法互相影响","children":[]}]},{"level":2,"title":"每天一个小细节","slug":"每天一个小细节","link":"#每天一个小细节","children":[]},{"level":2,"title":"Why Scss module","slug":"why-scss-module","link":"#why-scss-module","children":[]},{"level":2,"title":"如何覆盖模块默认变量","slug":"如何覆盖模块默认变量","link":"#如何覆盖模块默认变量","children":[]},{"level":2,"title":"构建工具 gulp","slug":"构建工具-gulp","link":"#构建工具-gulp","children":[]}],"relativePath":"pages/_drafts/how-to-migrate-element-plus-var.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/_drafts/how-to-migrate-element-plus-var.md","lastUpdated":1652271529000}'),u={name:"pages/_drafts/how-to-migrate-element-plus-var.md",data(){return{data:t,frontmatter:t.frontmatter}},setup(){D("pageData",t)}},F=s("p",null,"说说 Sass 预处理器",-1),h=s("p",null,"Sass VS Less VS Stylus",-1),C=s("p",null,[l("我经常举的例子就是，原先由 Less 编写的 "),s("a",{href:"https://github.com/twbs/bootstrap",target:"_blank",rel:"noreferrer"},"Bootstrap"),l(" 改为了使用 Sass 重构。")],-1),A=s("p",null,[l("Stylus 编写的 "),s("a",{href:"https://github.com/vuetifyjs/vuetify/",target:"_blank",rel:"noreferrer"},"Vuetify"),l(" 改为了使用 Sass 重构。")],-1),m=s("p",null,[s("a",{href:"https://github.com/element-plus/element-plus",target:"_blank",rel:"noreferrer"},"Element"),l(" 从一开始便使用 Sass 编写。")],-1),_=s("p",null,[l("除此之外，"),s("a",{href:"https://github.com/quasarframework/quasar",target:"_blank",rel:"noreferrer"},"quasar"),l(" 等一些知名 UI 库均采用 Sass 构建。")],-1),f=s("h2",{id:"变量名",tabindex:"-1"},[l("变量名 "),s("a",{class:"header-anchor",href:"#变量名","aria-hidden":"true"},"#")],-1),g=s("h3",{id:"规范变量名（scss-与-css-var）",tabindex:"-1"},[l("规范变量名（scss 与 css var） "),s("a",{class:"header-anchor",href:"#规范变量名（scss-与-css-var）","aria-hidden":"true"},"#")],-1),v=s("ul",null,[s("li",null,[s("code",null,"-background-color"),l(" -> "),s("code",null,"-bg-color")]),s("li",null,[s("code",null,"-font-color"),l(" -> "),s("code",null,"-text-color")])],-1),b=s("blockquote",null,[s("p",null,[l("与 "),s("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noreferrer"},"Tailwindcss"),l(" 一致")])],-1),k=s("p",null,"可以自定义 button 色彩，自动计算 hover active color",-1),E=s("h3",{id:"sass-map-组织组件变量",tabindex:"-1"},[s("code",null,"sass:map"),l(" 组织组件变量 "),s("a",{class:"header-anchor",href:"#sass-map-组织组件变量","aria-hidden":"true"},"#")],-1),S=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$button"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"!default"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("h3",{id:"通过-sass-自动生成-css-var",tabindex:"-1"},[l("通过 sass 自动生成 css var "),s("a",{class:"header-anchor",href:"#通过-sass-自动生成-css-var","aria-hidden":"true"},"#")],-1),x=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// set all css var for component by map")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@mixin"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"set-component-css-var"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"$name, $--variables"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@each"),s("span",{style:{color:"#A6ACCD"}}," $attribute, $value "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"in"),s("span",{style:{color:"#A6ACCD"}}," $--variables "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    --el-"),s("span",{style:{color:"#89DDFF"}},"#{"),s("span",{style:{color:"#A6ACCD"}},"$name"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},"-"),s("span",{style:{color:"#89DDFF"}},"#{"),s("span",{style:{color:"#A6ACCD"}},"$attribute"),s("span",{style:{color:"#89DDFF"}},"}:"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#{"),s("span",{style:{color:"#A6ACCD"}},"$value"),s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// use")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@include"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"b"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"alert"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@include"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"set-component-css-var"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"alert"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},", $alert"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("h2",{id:"faq",tabindex:"-1"},[l("FAQ "),s("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#")],-1),q=s("h3",{id:"vite-import-scss-无法互相影响",tabindex:"-1"},[l("vite import scss 无法互相影响 "),s("a",{class:"header-anchor",href:"#vite-import-scss-无法互相影响","aria-hidden":"true"},"#")],-1),T=s("p",null,"比方说，在 vite 中导入 scss 文件：",-1),V=s("div",{class:"language-ts"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"a.scss"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"b.scss"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"})])])],-1),P=s("p",null,"这完全没问题。 但是 a 和 b 本质是相互独立的（好处是热加载只需编译对应的文件），如果 b 想要使用 a 中已有的变量，这该如何是好？",-1),B=s("p",null,"而 element-plus 重构了主题系统，本身很多的变量依赖与一个全局的变量文件。",-1),U=s("p",null,"譬如，修改主色调为绿色，我们自然希望 button 主色调变成绿色，而 tag 主色调也变成绿色。",-1),N=s("hr",null,null,-1),W=s("p",null,"scss 编译",-1),Q=s("p",null,[s("code",null,"@use"),l(" 替代 "),s("code",null,"@import")],-1),Z=s("blockquote",null,[s("p",null,"Sass 文档写到， Sass 扩展了 CSS 的 @import 规则，能够导入 Sass 和 CSS 样式表，提供对 mixin、函数和变量的访问，并将多个样式表的 CSS 组合在一起。 与需要浏览器在呈现页面时发出多个 HTTP 请求的普通 CSS 导入不同，Sass 导入完全在编译期间处理。")],-1),I=s("div",{class:"danger"},[s("blockquote",null,[s("p",null,[l("Sass 团队不鼓励继续使用 "),s("code",null,"@import"),l(" 规则。 Sass 将在未来几年逐步淘汰它，并最终将其从语言中完全删除。 更喜欢 "),s("code",null,"@use"),l(" 规则。 （请注意，目前只有 Dart Sass 支持 "),s("code",null,"@use"),l("。其他实现的用户必须改用 "),s("code",null,"@import"),l(" 规则。）")])])],-1),L=s("p",null,[s("code",null,"@import"),l(" 的缺点：")],-1),M=s("ul",null,[s("li",null,[s("code",null,"@import"),l(" 使所有变量、mixins 和函数都可以全局访问。 这使得人们（或工具）很难分辨出这些是在哪里定义的。")]),s("li",null,"因为一切都是全局的，lib 必须为其所有成员添加前缀以避免命名冲突。"),s("li",null,[s("code",null,"@extend"),l(" 规则也是全局的，这使得很难预测将扩展哪些样式规则。")]),s("li",null,"每次 @imported（被导入） 时都会执行每个样式表并 emitted（发出）其 CSS，这会增加编译时间并产生臃肿的输出。"),s("li",null,"无法定义下游样式表中无法访问的私有成员或占位符选择器。")],-1),O=s("blockquote",null,[s("p",null,[s("a",{href:"https://sass-lang.com/documentation/at-rules/import",target:"_blank",rel:"noreferrer"},"@import | Sass"),s("a",{href:"https://www.liquidlight.co.uk/blog/use-and-import-rules-in-scss/",target:"_blank",rel:"noreferrer"},"@use and @import rules in SCSS")])],-1),J=s("p",null,[s("code",null,"@forward")],-1),j=s("blockquote",null,[s("p",null,[s("code",null,"@forward"),l(" 规则加载 Sass 样式表，并在使用 "),s("code",null,"@use"),l(" 规则加载样式表时使其 mixin、函数和变量可用。它使得跨多个文件组织 Sass 库成为可能，同时允许用户加载单个入口文件。")])],-1),H=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// packages/theme-chalk/src/date-picker.scss")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/date-table.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/month-table.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/year-table.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/time-spinner.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/date-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/date-range-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/time-range-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/time-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),R=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// packages/theme-chalk/src/date-picker.scss")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/date-table.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/month-table.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/year-table.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/time-spinner.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/date-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/date-range-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/time-range-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./date-picker/time-picker.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),z=s("p",null,"有点绕，来一个更加明显的例子。",-1),G=s("p",null,[s("code",null,"mixins.scss"),l(" 文件中需要用到 "),s("code",null,"config.scss"),l(" 文件中的变量。 我们可以这样使用。")],-1),K=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// mixins.scss")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@use"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"config"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"as"),s("span",{style:{color:"#A6ACCD"}}," *"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"})])])],-1),X=s("p",null,[l("这时我们 "),s("code",null,"button"),l(" 组件需要用到 "),s("code",null,"mixins.scss"),l("，那么我们就可以在 "),s("code",null,"button.scss"),l(" 中引入 "),s("code",null,"mixins.scss"),l("。")],-1),Y=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// button.scss")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@use"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"mixins"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"as"),s("span",{style:{color:"#A6ACCD"}}," *"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"})])])],-1),ss=s("p",null,[l("此时，sass 的模块化机制会保证 "),s("code",null,"config.scss"),l(" 中的变量只能在 "),s("code",null,"mixins.scss"),l(" 中使用。"),s("code",null,"button.scss"),l(" 则无法使用。")],-1),ls=s("p",null,[l("但是 button 组件中可能也需要使用 "),s("code",null,"config.scss"),l(" 中的变量，而我们已知每个组件都导入了 "),s("code",null,"mixins.scss"),l("，我们再去在每个组件的 scss 文件中导入 "),s("code",null,"config.scss"),l(" 既麻烦，又增加了复杂性。比如以后我们需要再导入 "),s("code",null,"c"),l(),s("code",null,"d"),l(" 文件，每次都再去头部加一遍吗？")],-1),es=s("p",null,[l("这时候我们就可以利用 "),s("code",null,"@forward"),l(" 将其转发至 "),s("code",null,"mixins.scss"),l(" 中。("),s("code",null,"@forward"),l(" 与 "),s("code",null,"@use"),l(" 是可以同时使用的)")],-1),os=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// mixins.scss")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"config"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@use"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"config"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"as"),s("span",{style:{color:"#A6ACCD"}}," *"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"})])])],-1),ns=s("p",null,[l("这时，我们的 "),s("code",null,"button.scss"),l(" 已经 "),s("code",null,'@use "mixins" as *;'),l("，那么转发的 "),s("code",null,"config"),l(" 变量也可以在 "),s("code",null,"button.scss"),l(" 中使用了。")],-1),ts=s("h2",{id:"每天一个小细节",tabindex:"-1"},[l("每天一个小细节 "),s("a",{class:"header-anchor",href:"#每天一个小细节","aria-hidden":"true"},"#")],-1),as=s("p",null,"还有个有趣的事情是。",-1),cs=s("p",null,[s("code",null,"/* */"),l(" 书写的 scss 注释会被编译到最终产物，因为这被当作 CSS 的注释。 而 "),s("code",null,"//"),l(" 的注释方式则不会。")],-1),rs=s("p",null,[l("为了保持最终产物最小，我们应当使用 "),s("code",null,"//"),l(" 注释代码，除非你希望你的注释也能显示在最终产物被大家看到。")],-1),is=s("h2",{id:"why-scss-module",tabindex:"-1"},[l("Why Scss module "),s("a",{class:"header-anchor",href:"#why-scss-module","aria-hidden":"true"},"#")],-1),ps=s("blockquote",null,[s("p",null,[s("a",{href:"https://css-tricks.com/introducing-sass-modules/",target:"_blank",rel:"noreferrer"},"Introducing Sass Modules")])],-1),Ds=s("p",null,"最开始主要是有人提了一个 Issue，想要按需加载的同时自定义主题。 通过自己按需导入 scss 的方法可以正常实现。 但是每引入一个组件，就需要自己导入 scss 很明显是不优雅的。",-1),ys=s("p",null,[l("我们有一个 "),s("a",{href:"https://github.com/element-plus/unplugin-element-plus",target:"_blank",rel:"noreferrer"},"unplugin-element-plus"),l(" 插件，可以作为 Vite/Webpack 等插件使用。")],-1),ds=s("blockquote",null,[s("p",null,[l("可以配置其中的 "),s("code",null,"useSource"),l(" 来使用 "),s("code",null,"scss"),l("。")])],-1),us=s("p",null,[l("但这也有一个问题，unplugin-element-plus 的机制本质是拼接了一个 "),s("code",null,"import 'xxx.scss'"),l(" 的 ts 文件，这就回到了之前提到的问题，import 进来的 scss 文件之间的编译是互相独立的。 所以它们无法使用额外 scss 自定义的变量。")],-1),Fs=s("p",null,[l("而我们可以通过自定义 "),s("code",null,"vite.config.ts"),l(" 中 "),s("code",null,"scss.additionalData"),l(" 来在编译 scss 时默认带上自己设置的全局变量。")],-1),hs=s("div",{class:"language-ts"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// vite.config.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"defineConfig"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"css"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"preprocessorOptions"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#F07178"}},"scss"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#F07178"}},"additionalData"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'@use "./styles/element/index.scss" as *;'),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"plugins"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"vue"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ]"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),s("span",{class:"line"})])])],-1),Cs=s("p",null,"你以为这么简单就结束了？",-1),As=s("p",null,[l("我起初在 "),s("code",null,"additionalData"),l(" 使用了 "),s("code",null,"@import"),l(" 的方式来导入 scss 文件，这是编译就会出现问题，提示你应当将 "),s("code",null,"@use"),l(" 写在")],-1),ms=s("hr",null,null,-1),_s=s("h2",{id:"如何覆盖模块默认变量",tabindex:"-1"},[l("如何覆盖模块默认变量 "),s("a",{class:"header-anchor",href:"#如何覆盖模块默认变量","aria-hidden":"true"},"#")],-1),fs=s("blockquote",null,[s("p",null,"With @import, libraries are often configured by setting global variables that override !default variables defined by those libraries. Because variables are no longer global with @use, it supports a more explicit way of configuring libraries: the with clause.")],-1),gs=s("p",null,[s("code",null,"@use"),l(" 与 "),s("code",null,"!default"),l(" 与 "),s("code",null,"with")],-1),vs=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// common/var.scss")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$colors"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"!default"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),bs=s("div",{class:"language-scss"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"@forward"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"element-plus/theme-chalk/src/common/var.scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"with"),s("span",{style:{color:"#A6ACCD"}}," ($colors: (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#82AAFF"}},"primary"),s("span",{style:{color:"#A6ACCD"}},": (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"base"),s("span",{style:{color:"#A6ACCD"}},": "),s("span",{style:{color:"#82AAFF"}},"green"),s("span",{style:{color:"#A6ACCD"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),ks=s("blockquote",null,[s("p",null,[s("a",{href:"https://github.com/sass/sass/blob/main/accepted/module-system.md#configuring-libraries",target:"_blank",rel:"noreferrer"},"Configuring Libraries | sass")])],-1),Es=s("h2",{id:"构建工具-gulp",tabindex:"-1"},[l("构建工具 gulp "),s("a",{class:"header-anchor",href:"#构建工具-gulp","aria-hidden":"true"},"#")],-1),Ss=s("p",null,"gulp 目前实际上是没有替代品的。",-1),ws=s("p",null,"严格上来说 gulp 并不是一个打包工具",-1),xs=s("p",null,"ts",-1),$s=s("hr",null,null,-1),qs=s("p",null,"To Be Continued.",-1);function Ts(o,Vs,Ps,Bs,a,Us){const r=i;return d(),y(r,{frontmatter:a.frontmatter,data:a.data},{"main-content-md":e(()=>[c(" more "),F,h,C,A,m,_,f,g,v,b,k,E,S,w,x,$,q,T,V,P,B,U,N,W,Q,Z,I,L,M,O,J,j,H,R,z,G,K,X,Y,ss,ls,es,os,ns,ts,as,cs,rs,is,ps,Ds,ys,ds,us,Fs,hs,Cs,As,ms,_s,fs,gs,vs,bs,ks,Es,Ss,ws,xs,$s,qs,c(" Q.E.D. ")]),"main-header":e(()=>[n(o.$slots,"main-header")]),"main-header-after":e(()=>[n(o.$slots,"main-header-after")]),"main-nav":e(()=>[n(o.$slots,"main-nav")]),"main-content":e(()=>[n(o.$slots,"main-content")]),"main-content-after":e(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(o.$slots,"main-nav-after")]),comment:e(()=>[n(o.$slots,"comment")]),footer:e(()=>[n(o.$slots,"footer")]),aside:e(()=>[n(o.$slots,"aside")]),"aside-custom":e(()=>[n(o.$slots,"aside-custom")]),default:e(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Ms=p(u,[["render",Ts],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/_drafts/how-to-migrate-element-plus-var.md"]]);export{Ls as __pageData,Ms as default};
