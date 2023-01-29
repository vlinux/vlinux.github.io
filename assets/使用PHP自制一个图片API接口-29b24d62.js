import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-f9369a8c.js";import{_ as D,c as F,w as e,o as y,b as s,U as l,q as t,r as a,W as d,p as h}from"./app-c05f80d3.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-d10a4101.js";import"./YunCard.vue_vue_type_style_index_0_lang-b99348e1.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-8e036763.js";const hs=JSON.parse('{"title":"使用PHP自制一个图片API接口","description":"","frontmatter":{"title":"使用PHP自制一个图片API接口","categories":"Linux技术","tags":["API","PHP","图片API"],"date":"2021-01-13T14:07:00.000Z"},"headers":[{"level":3,"title":"基于jsDeliver +github的图片api接口","slug":"基于jsdeliver-github的图片api接口","link":"#基于jsdeliver-github的图片api接口","children":[]}],"relativePath":"pages/posts/使用PHP自制一个图片API接口.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/使用PHP自制一个图片API接口.md","lastUpdated":1671090556000}'),p=JSON.parse('{"title":"使用PHP自制一个图片API接口","description":"","frontmatter":{"title":"使用PHP自制一个图片API接口","categories":"Linux技术","tags":["API","PHP","图片API"],"date":"2021-01-13T14:07:00.000Z"},"headers":[{"level":3,"title":"基于jsDeliver +github的图片api接口","slug":"基于jsdeliver-github的图片api接口","link":"#基于jsdeliver-github的图片api接口","children":[]}],"relativePath":"pages/posts/使用PHP自制一个图片API接口.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/使用PHP自制一个图片API接口.md","lastUpdated":1671090556000}'),u={name:"pages/posts/使用PHP自制一个图片API接口.md",data(){return{data:p,frontmatter:p.frontmatter}},setup(){h("pageData",p)}},g={id:"使用php自制一个图片api接口-你懂的",tabindex:"-1"},m=s("p",null,"有时候我们需要获得一些随机图片，如果用别人的api接口，可能接口不太稳定，也可能别人的图片不符合你的审美，这时候我们就需要自制一个简易的图片api接口了，下面我介绍两种方法制作属于自己的api图片接口~",-1),A={id:"第一种",tabindex:"-1"},_=s("hr",null,null,-1),f=s("p",null,"方法很简单，我们新建一个php文件，插入下面的代码",-1),C=s("div",{class:"language-php"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<?"),s("span",{style:{color:"#A6ACCD"}},"php")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"//存有链接的文件名，这里是存放图片链接的txt文件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"filename "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"文件名.txt"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"(!"),s("span",{style:{color:"#82AAFF"}},"file_exists"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"filename"),s("span",{style:{color:"#89DDFF"}},")){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"die"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"文件不存在"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"//从文本获取链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"pics "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"[];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"fs "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"fopen"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"filename"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"r"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"while"),s("span",{style:{color:"#89DDFF"}},"(!"),s("span",{style:{color:"#82AAFF"}},"feof"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"fs"),s("span",{style:{color:"#89DDFF"}},")){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"line"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#82AAFF"}},"trim"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#82AAFF"}},"fgets"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"fs"),s("span",{style:{color:"#89DDFF"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"line"),s("span",{style:{color:"#89DDFF"}},"!="),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#89DDFF"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"array_push"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"pics"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"line"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"//从数组随机获取链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"pic "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"pics"),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#82AAFF"}},"array_rand"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"pics"),s("span",{style:{color:"#89DDFF"}},")];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"//返回指定格式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"type"),s("span",{style:{color:"#89DDFF"}},"=$"),s("span",{style:{color:"#A6ACCD"}},"_GET"),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"type"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"switch"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"type"),s("span",{style:{color:"#89DDFF"}},"){")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"//JSON返回")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"case"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"json"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"header"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Content-type:text/json"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"die"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#82AAFF"}},"json_encode"),s("span",{style:{color:"#89DDFF"}},"(["),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"pic"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},"=>$"),s("span",{style:{color:"#A6ACCD"}},"pic"),s("span",{style:{color:"#89DDFF"}},"]));")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#89DDFF"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"die"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#82AAFF"}},"header"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Location: "),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"pic"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),b=s("hr",null,null,-1),v=s("p",null,"接下来，我们新建一个txt文件，在每一行(注意是每行)插入一条图片的url链接",-1),P=s("div",{class:"language-txt"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://image.datealive.top/images/2020/05/13/timg-1.jpg")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://image.datealive.top/images/2020/05/13/timg-2.jpg")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$=s("hr",null,null,-1),E=s("p",null,"最后，我们把两个文件上传到服务器上，通过访问php文件即可，注意是同一目录下！！",-1),x=s("p",null,"演示demo:",-1),k=s("hr",null,null,-1),w={id:"第二种",tabindex:"-1"},j={id:"基于jsdeliver-github的图片api接口",tabindex:"-1"},I=s("strong",null,"jsDeliver",-1),B=s("hr",null,null,-1),H=s("p",null,"方法：",-1),q=s("p",null,"1.首先你先得上传图片到你的github仓库里，这里提供两种方法上传",-1),V=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/15899882811-300x208.png",alt:"img"})],-1),N=s("p",null,"然后选择你的克隆下来的仓库，右键打开show in explorer，在里面添加图片，打开github Desktop，我们就可以看到刚刚上传的文件。我们首先在summary里输入“第一次”(或者其他)，点击commit to master，最后在push即可。",-1),T=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/4d9f303f2ad991cb71e02e9749a43d6-300x117.png",alt:"img"})],-1),U=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/10b6deaf922f23a36287d33f7e84dd4-300x207.png",alt:"img"})],-1),L=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/15900269711-1-300x208.png",alt:"img"})],-1),S=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/d753ed272e3c472d834778219a4eaa7-300x131.png",alt:"img"})],-1),J=s("hr",null,null,-1),O=s("p",null,"2.获取图片链接",-1),G=s("p",null,"方法：这里使用的是 jsDeliver +github",-1),M=s("p",null,"首先，打开你的github仓库，找到releases",-1),Z=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/429dd1317bdf0959971f663e18c3703-300x131.png",alt:"img"})],-1),R=s("p",null,"然后依次输入版本号，描述，最后更新releases即可",-1),W=s("p",null,[s("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/dd3b0836c8dcd7aeb359b6ac5568d56-300x183.png",alt:"img"})],-1),z=s("p",null,"接下来我们引用资源即可",-1),K=s("hr",null,null,-1),Q=s("p",null,"3.编写php文件",-1),X=s("div",{class:"language-php"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<?"),s("span",{style:{color:"#A6ACCD"}},"php")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"rand "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"rand"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F78C6C"}},"201"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"url "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://cdn.jsdelivr.net/gh/dateolive/images@V-2.0/images/"),s("span",{style:{color:"#89DDFF"}},"'."),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"rand"),s("span",{style:{color:"#89DDFF"}},".'"),s("span",{style:{color:"#C3E88D"}},".jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"img "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"file_get_contents"),s("span",{style:{color:"#89DDFF"}},"($"),s("span",{style:{color:"#A6ACCD"}},"url"),s("span",{style:{color:"#89DDFF"}},",true);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"header"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Content-Type: image/jpeg;"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"img"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"?>")]),l(`
`),s("span",{class:"line"})])])],-1),Y=s("p",null,"这里rand就是一个随机函数，随机产生1-100的数字，因为我上传的图片是要数字排好的，所以这样可以实现随机调用",-1),ss=s("p",null,"第二行就是使用jsDeliver加载资源了，具体方法上面第二步有说明",-1),ls=s("p",null,"最后是利用header函数重定向到后面的url地址，实现跳转",-1),es=s("hr",null,null,-1),os=s("p",null,"4.把写好的php文件上传服务器即可。",-1),ts=s("p",null,"5.演示demo：",-1);function ns(n,as,ps,rs,r,cs){const o=d,c=i;return y(),F(c,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":e(()=>[s("h1",g,[l("使用php自制一个图片API接口@(你懂的) "),t(o,{class:"header-anchor",href:"#使用php自制一个图片api接口-你懂的","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),m,s("p",null,[l("文章参考来自"),t(o,{href:"https://www.datealive.top/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("梦独吟")]),_:1})]),s("p",null,[l("所有源码可以在github上下载，顺便点个"),t(o,{href:"https://github.com/img-api",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("star")]),_:1}),l("吧~")]),s("h1",A,[l("第一种 "),t(o,{class:"header-anchor",href:"#第一种","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),_,f,C,b,v,P,$,E,x,s("p",null,[l('[button href="'),t(o,{href:"http://img-api.kococ.cn",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("http://img-api.kococ.cn")]),_:1}),l('"]图片PHP自制API接口[/button]')]),k,s("h1",w,[l("第二种 "),t(o,{class:"header-anchor",href:"#第二种","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("h3",j,[l("基于"),I,l(" +github的图片api接口 "),t(o,{class:"header-anchor",href:"#基于jsdeliver-github的图片api接口","aria-hidden":"true"},{default:e(()=>[l("#")]),_:1})]),s("p",null,[l("参考于"),t(o,{href:"https://blog.toomey.top/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Toomey")]),_:1}),l(" 这位大佬，这位大大的博客非常不错哦~~")]),B,H,q,s("p",null,[l("(1)参考这篇博客——"),t(o,{href:"https://blog.toomey.top/2020/04/08/gitsx/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("传送门")]),_:1})]),s("p",null,[l("(2)直接下载"),t(o,{href:"https://desktop.github.com/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Github Desktop ")]),_:1}),l(" ，绑定你的github账号后，克隆你的仓库(注意要有README.md文件)")]),V,N,T,U,L,S,J,O,G,M,Z,R,W,z,s("p",null,[t(o,{href:"https://cdn.jsdelivr.net/gh/%E4%BD%A0%E7%9A%84github%E7%94%A8%E6%88%B7%E5%90%8D/%E4%BD%A0%E7%9A%84%E4%BB%93%E5%BA%93%E5%90%8D@%E5%8F%91%E5%B8%83%E7%9A%84%E7%89%88%E6%9C%AC%E5%8F%B7/%E6%96%87%E4%BB%B6%E5%90%8D",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://cdn.jsdelivr.net/gh/你的github用户名/你的仓库名@发布的版本号/文件名")]),_:1}),l(" 例如： "),t(o,{href:"https://cdn.jsdelivr.net/gh/dateolive/images@V-2.0/images",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://cdn.jsdelivr.net/gh/dateolive/images@V-2.0/images")]),_:1}),l(" ps：也可以不加版本号，这样会默认加载最新的版本 例如："),t(o,{href:"https://cdn.jsdelivr.net/gh/dateolive/images/images",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("https://cdn.jsdelivr.net/gh/dateolive/images/images")]),_:1})]),K,Q,X,Y,ss,ls,es,os,ts,s("p",null,[l('[button href="'),t(o,{href:"http://imapi.datealive.top/tp/api.php",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("http://imapi.datealive.top/tp/api.php")]),_:1}),l('"]传送门[/button]')])]),"main-header":e(()=>[a(n.$slots,"main-header")]),"main-header-after":e(()=>[a(n.$slots,"main-header-after")]),"main-nav":e(()=>[a(n.$slots,"main-nav")]),"main-content":e(()=>[a(n.$slots,"main-content")]),"main-content-after":e(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(n.$slots,"main-nav-after")]),comment:e(()=>[a(n.$slots,"comment")]),footer:e(()=>[a(n.$slots,"footer")]),aside:e(()=>[a(n.$slots,"aside")]),"aside-custom":e(()=>[a(n.$slots,"aside-custom")]),default:e(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const us=D(u,[["render",ns]]);export{hs as __pageData,us as default};
