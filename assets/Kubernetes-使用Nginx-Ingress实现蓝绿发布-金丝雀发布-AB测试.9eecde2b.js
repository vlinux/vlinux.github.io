import{_ as t}from"./ValaxyMain.vue_vue_type_style_index_0_lang.a4515d0c.js";import{_ as p,c as i,w as e,o as A,r as a,g as s,R as n,p as C}from"./app.4929e81a.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.7ab74c38.js";import"./YunCard.vue_vue_type_style_index_0_lang.0015135d.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.d2fb5713.js";const _s=JSON.parse('{"title":"Kubernetes \u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03/\u91D1\u4E1D\u96C0\u53D1\u5E03/AB\u6D4B\u8BD5","description":"","frontmatter":{"title":"Kubernetes \u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03/\u91D1\u4E1D\u96C0\u53D1\u5E03/AB\u6D4B\u8BD5","categories":"\u5FAE\u670D\u52A1","tags":["Nginx-ingress","\u84DD\u7EFF\u53D1\u5E03","\u91D1\u4E1D\u96C0\u53D1\u5E03","\u7528\u6237\u65E0\u611F\u77E5"],"date":"2019-08-09T14:44:00.000Z"},"headers":[{"level":2,"title":"\u80CC\u666F\u4ECB\u7ECD","slug":"\u80CC\u666F\u4ECB\u7ECD","link":"#\u80CC\u666F\u4ECB\u7ECD","children":[]},{"level":2,"title":"Ingress-Nginx-Annotation Canary \u529F\u80FD\u4ECB\u7ECD","slug":"ingress-nginx-annotation-canary-\u529F\u80FD\u4ECB\u7ECD","link":"#ingress-nginx-annotation-canary-\u529F\u80FD\u4ECB\u7ECD","children":[{"level":3,"title":"1.\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","slug":"_1-\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","link":"#_1-\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","children":[]},{"level":3,"title":"2.\u57FA\u4E8Eheader\u7684A/B\u6D4B\u8BD5","slug":"_2-\u57FA\u4E8Eheader\u7684a-b\u6D4B\u8BD5","link":"#_2-\u57FA\u4E8Eheader\u7684a-b\u6D4B\u8BD5","children":[]},{"level":3,"title":"3.\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","slug":"_3-\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","link":"#_3-\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[]},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}]}],"relativePath":"pages/posts/Kubernetes-\u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03-\u91D1\u4E1D\u96C0\u53D1\u5E03-AB\u6D4B\u8BD5.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/Kubernetes-\u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03-\u91D1\u4E1D\u96C0\u53D1\u5E03-AB\u6D4B\u8BD5.md","lastUpdated":0}'),o=JSON.parse('{"title":"Kubernetes \u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03/\u91D1\u4E1D\u96C0\u53D1\u5E03/AB\u6D4B\u8BD5","description":"","frontmatter":{"title":"Kubernetes \u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03/\u91D1\u4E1D\u96C0\u53D1\u5E03/AB\u6D4B\u8BD5","categories":"\u5FAE\u670D\u52A1","tags":["Nginx-ingress","\u84DD\u7EFF\u53D1\u5E03","\u91D1\u4E1D\u96C0\u53D1\u5E03","\u7528\u6237\u65E0\u611F\u77E5"],"date":"2019-08-09T14:44:00.000Z"},"headers":[{"level":2,"title":"\u80CC\u666F\u4ECB\u7ECD","slug":"\u80CC\u666F\u4ECB\u7ECD","link":"#\u80CC\u666F\u4ECB\u7ECD","children":[]},{"level":2,"title":"Ingress-Nginx-Annotation Canary \u529F\u80FD\u4ECB\u7ECD","slug":"ingress-nginx-annotation-canary-\u529F\u80FD\u4ECB\u7ECD","link":"#ingress-nginx-annotation-canary-\u529F\u80FD\u4ECB\u7ECD","children":[{"level":3,"title":"1.\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","slug":"_1-\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","link":"#_1-\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","children":[]},{"level":3,"title":"2.\u57FA\u4E8Eheader\u7684A/B\u6D4B\u8BD5","slug":"_2-\u57FA\u4E8Eheader\u7684a-b\u6D4B\u8BD5","link":"#_2-\u57FA\u4E8Eheader\u7684a-b\u6D4B\u8BD5","children":[]},{"level":3,"title":"3.\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","slug":"_3-\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","link":"#_3-\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[]},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}]}],"relativePath":"pages/posts/Kubernetes-\u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03-\u91D1\u4E1D\u96C0\u53D1\u5E03-AB\u6D4B\u8BD5.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/Kubernetes-\u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03-\u91D1\u4E1D\u96C0\u53D1\u5E03-AB\u6D4B\u8BD5.md","lastUpdated":0}'),y={name:"pages/posts/Kubernetes-\u4F7F\u7528Nginx-Ingress\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03-\u91D1\u4E1D\u96C0\u53D1\u5E03-AB\u6D4B\u8BD5.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){C("pageData",o)}},v=s("h2",{id:"\u80CC\u666F\u4ECB\u7ECD",tabindex:"-1"},[n("\u80CC\u666F\u4ECB\u7ECD "),s("a",{class:"header-anchor",href:"#\u80CC\u666F\u4ECB\u7ECD","aria-hidden":"true"},"#")],-1),D=s("blockquote",null,[s("p",null,"\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528Kubernetes\u4F5C\u4E3A\u4E1A\u52A1\u5E94\u7528\u7684\u4E91\u5E73\u53F0\uFF0C\u60F3\u8981\u5B9E\u73B0\u5E94\u7528\u7684\u84DD\u7EFF\u90E8\u7F72\u7528\u6765\u8FED\u4EE3\u5E94\u7528\u7248\u672C\uFF0C\u7528lstio\u592A\u91CD\u592A\u590D\u6742\uFF0C\u800C\u4E14\u5B83\u672C\u8EAB\u5B9A\u4F4D\u4E8E\u6D41\u63A7\u548C\u7F51\u683C\u6CBB\u7406\uFF1BIngress-Nginx\u57280.21\u7248\u672C\u5F15\u5165\u4E86Canary\u529F\u80FD\uFF0C\u53EF\u4EE5\u4E3A\u7F51\u5173\u5165\u53E3\u914D\u7F6E\u591A\u4E2A\u7248\u672C\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u7528annotation\u6765\u63A7\u5236\u591A\u4E2A\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u5206\u914D")],-1),h=s("h2",{id:"ingress-nginx-annotation-canary-\u529F\u80FD\u4ECB\u7ECD",tabindex:"-1"},[n("Ingress-Nginx-Annotation Canary \u529F\u80FD\u4ECB\u7ECD "),s("a",{class:"header-anchor",href:"#ingress-nginx-annotation-canary-\u529F\u80FD\u4ECB\u7ECD","aria-hidden":"true"},"#")],-1),b=s("blockquote",null,[s("p",null,[n("\u5982\u679C\u60F3\u542F\u7528Canary\u529F\u80FD\uFF0C\u8981\u5148\u8BBE\u7F6E"),s("code",null,'nginx.ingress.kubernetes.io/canary: "true"'),n("\uFF0C\u7136\u540E\u53EF\u4EE5\u542F\u7528\u4EE5\u4E0B\u6CE8\u91CA\u6765\u914D\u7F6ECanary")])],-1),u=s("ul",null,[s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-weight"),n(" \u8BF7\u6C42\u5230Canary ingress\u4E2D\u6307\u5B9A\u7684\u670D\u52A1\u7684\u8BF7\u6C42\u767E\u5206\u6BD4\uFF0C\u503C\u4E3A0-100\u7684\u6574\u6570\uFF0C\u6839\u636E\u8BBE\u7F6E\u7684\u503C\u6765\u51B3\u5B9A\u5927\u6982\u6709\u767E\u5206\u4E4B\u591A\u5C11\u7684\u6D41\u91CF\u4F1A\u5206\u914DCanary Ingress\u4E2D\u6307\u5B9A\u7684\u540E\u7AEFs\u670D\u52A1")]),s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-by-header"),n(" \u57FA\u4E8Erequest header \u7684\u6D41\u91CF\u5207\u5206\uFF0C\u9002\u7528\u4E8E\u7070\u5EA6\u53D1\u5E03\u6216\u8005A/B\u6D4B\u8BD5\uFF0C\u5F53\u8BBE\u5B9A\u7684hearder\u503C\u4E3Aalways\u662F\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4F1A\u88AB\u4E00\u76F4\u5206\u914D\u5230Canary\u5165\u53E3\uFF0C\u5F53hearder\u503C\u88AB\u8BBE\u7F6E\u4E3Anever\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4E0D\u4F1A\u5206\u914D\u5230Canary\u5165\u53E3\uFF0C\u5BF9\u4E8E\u5176\u4ED6hearder\u503C\uFF0C\u5C06\u5FFD\u7565\uFF0C\u5E76\u901A\u8FC7\u4F18\u5148\u7EA7\u5C06\u8BF7\u6C42\u6D41\u91CF\u5206\u914D\u5230\u5176\u4ED6\u89C4\u5219")]),s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-by-header-value"),n(" \u8FD9\u4E2A\u914D\u7F6E\u8981\u548C"),s("code",null,"nginx.ingress.kubernetes.io/canary-by-header"),n(" \u4E00\u8D77\u4F7F\u7528\uFF0C\u5F53\u8BF7\u6C42\u4E2D\u7684hearder key\u548Cvalue \u548C"),s("code",null,"nginx.ingress.kubernetes.io/canary-by-header"),n(),s("code",null,"nginx.ingress.kubernetes.io/canary-by-header-value"),n("\u5339\u914D\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4F1A\u88AB\u5206\u914D\u5230Canary Ingress\u5165\u53E3\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u4EFB\u4F55hearder\u503C\uFF0C\u5C06\u5FFD\u7565\uFF0C\u5E76\u901A\u8FC7\u4F18\u5148\u7EA7\u5C06\u8BF7\u6C42\u6D41\u91CF\u5206\u914D\u5230\u5176\u4ED6\u89C4\u5219")]),s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-by-cookie"),n(" \u8FD9\u4E2A\u914D\u7F6E\u662F\u57FA\u4E8Ecookie\u7684\u6D41\u91CF\u5207\u5206\uFF0C\u4E5F\u9002\u7528\u4E8E\u7070\u5EA6\u53D1\u5E03\u6216\u8005A/B\u6D4B\u8BD5\uFF0C\u5F53cookie\u503C\u8BBE\u7F6E\u4E3Aalways\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u5C06\u88AB\u8DEF\u7531\u5230Canary Ingress\u5165\u53E3\uFF0C\u5F53cookie\u503C\u8BBE\u7F6E\u4E3Anever\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u5C06\u4E0D\u4F1A\u8DEF\u7531\u5230Canary\u5165\u53E3\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u503C\uFF0C\u5C06\u5FFD\u7565\uFF0C\u5E76\u901A\u8FC7\u4F18\u5148\u7EA7\u5C06\u8BF7\u6C42\u6D41\u91CF\u5206\u914D\u5230\u5176\u4ED6\u89C4\u5219")])],-1),d=s("blockquote",null,[s("p",null,"\u91D1\u4E1D\u96C0\u89C4\u5219\u6309\u4F18\u5148\u987A\u5E8F\u8FDB\u884C\u5982\u4E0B\u6392\u5E8F\uFF1Acanary-by-header - > canary-by-cookie - > canary-weight")],-1),m=s("h3",{id:"_1-\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5",tabindex:"-1"},[n("1.\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5 "),s("a",{class:"header-anchor",href:"#_1-\u57FA\u4E8E\u6743\u91CD\u7684\u5C0F\u89C4\u6A21\u7248\u672C\u6D4B\u8BD5","aria-hidden":"true"},"#")],-1),g=s("ul",null,[s("li",null,"v1\u7248\u672C\u7F16\u6392\u6587\u4EF6")],-1),_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  annotations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kubernetes.io/ingress.class: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - host: echo.chulinx.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    http:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      paths:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - backend:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          serviceName: echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          servicePort: 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        path: /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type:  ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - image:  mirrorgooglecontainers/echoserver:1.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv1 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name:  echoserverv1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q=s("ul",null,[s("li",null,"\u67E5\u770Bv1\u7248\u672C\u521B\u5EFA\u7684\u8D44\u6E90")],-1),H=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl get pod,service,ingress -n echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY   STATUS    RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pod/echoserverv1-657b966cb5-7grqs   1/1     Running   0          24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                   TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv1   ClusterIP   10.99.68.72   <none>        8080/TCP   24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                              HOSTS              ADDRESS   PORTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv1   echo.chulinx.com             80      24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),f=s("ul",null,[s("li",null,"\u8BBF\u95EEv1\u7684\u670D\u52A1,\u53EF\u4EE5\u770B\u523010\u4E2A\u8BF7\u6C42\u90FD\u662F\u8BBF\u95EE\u5230\u4E00\u4E2Apod\u4E0A\u4E5F\u5C31\u662Fv1\u7248\u672C\u7684\u670D\u52A1")],-1),k=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] for i in `seq 10`;do curl -s echo.chulinx.com|grep Hostname;done")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),x=s("ul",null,[s("li",null,"\u521B\u5EFAv2\u7248\u672C\u7684\u670D\u52A1")],-1),S=s("blockquote",null,[s("p",null,"\u6211\u4EEC\u5F00\u542Fcanary\u529F\u80FD\uFF0C\u5C06v2\u7248\u672C\u7684\u6743\u91CD\u8BBE\u7F6E\u4E3A50%,\u8FD9\u4E2A\u767E\u5206\u6BD4\u5E76\u4E0D\u80FD\u7CBE\u786E\u7684\u5C06\u8BF7\u6C42\u5E73\u5747\u5206\u914D\u5230\u4E24\u4E2A\u7248\u672C\u7684\u670D\u52A1\uFF0C\u800C\u662F\u572850%\u4E0A\u4E0B\u6D6E\u52A8")],-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  annotations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kubernetes.io/ingress.class: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary: "true"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-weight: "50"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - host: echo.chulinx.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    http:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      paths:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - backend:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          serviceName: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          servicePort: 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        path: /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type:  ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - image:  mirrorgooglecontainers/echoserver:1.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),I=s("ul",null,[s("li",null,"\u518D\u6B21\u67E5\u770B\u521B\u5EFA\u7684\u8D44\u6E90")],-1),N=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl get pod,service,ingress -n echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY   STATUS    RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pod/echoserverv1-657b966cb5-7grqs   1/1     Running   0          24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pod/echoserverv2-856bb5758-f9tqn    1/1     Running   0          4s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                   TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv1   ClusterIP   10.99.68.72      <none>        8080/TCP   24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv2   ClusterIP   10.111.103.170   <none>        8080/TCP   4s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                              HOSTS              ADDRESS   PORTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv1   echo.chulinx.com             80      24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv2   echo.chulinx.com             80      4s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$=s("ul",null,[s("li",null,"\u8BBF\u95EE\u6D4B\u8BD5")],-1),B=s("blockquote",null,[s("p",null,"\u53EF\u4EE5\u770B\u5230\u8BF7\u6C42\u67094\u4E2A\u843D\u5230v2\u7248\u672C\uFF0C6\u4E2A\u843D\u5230v1\u7248\u672C\uFF0C\u7406\u8BBA\u4E0A\u6765\u8BF4\uFF0C\u8BF7\u6C42\u8BF4\u8D8A\u591A\uFF0C\u843D\u5230v2\u7248\u672C\u7684\u8BF7\u6C42\u6570\u8D8A\u63A5\u8FD1\u8BBE\u7F6E\u7684\u6743\u91CD50%")],-1),K=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] for i in `seq 10`;do curl -s echo.chulinx.com|grep Hostname;done")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E=s("h3",{id:"_2-\u57FA\u4E8Eheader\u7684a-b\u6D4B\u8BD5",tabindex:"-1"},[n("2.\u57FA\u4E8Eheader\u7684A/B\u6D4B\u8BD5 "),s("a",{class:"header-anchor",href:"#_2-\u57FA\u4E8Eheader\u7684a-b\u6D4B\u8BD5","aria-hidden":"true"},"#")],-1),T=s("ul",null,[s("li",null,"\u66F4\u6539v2\u7248\u672C\u7684\u7F16\u6392\u6587\u4EF6")],-1),j=s("blockquote",null,[s("p",null,[n("\u589E\u52A0header"),s("code",null,'nginx.ingress.kubernetes.io/canary-by-header: "v2"')])],-1),R=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  annotations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kubernetes.io/ingress.class: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary: "true"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-weight: "50"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-by-header: "v2"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - host: echo.chulinx.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    http:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      paths:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - backend:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          serviceName: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          servicePort: 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        path: /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type:  ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - image:  mirrorgooglecontainers/echoserver:1.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V=s("ul",null,[s("li",null,"\u66F4\u65B0\u8BBF\u95EE\u6D4B\u8BD5")],-1),w=s("blockquote",null,[s("p",null,[n("\u6D4B\u8BD5\u4E86header \u4E3A"),s("code",null,"v2:always"),n(),s("code",null,"v2:never"),n(),s("code",null,"v2:true"),n("\u8FD9\u4E09\u4E2Ahearder\u503C\uFF0C\u53EF\u4EE5\u770B\u5230\u5F53hearder\u4E3A"),s("code",null,"v2:always"),n("\u65F6\uFF0C\u6D41\u91CF\u4F1A\u5168\u90E8\u6D41\u5165v2\uFF0C\u5F53"),s("code",null,"v2:never"),n("\u65F6\uFF0C\u6D41\u91CF\u4F1A\u5168\u90E8\u6D41\u5165v1\uFF0C\u5F53"),s("code",null,"v2:true"),n("\u65F6\uFF0C\u4E5F\u5C31\u662F\u975E"),s("code",null,"always/never"),n(",\u6D41\u91CF\u4F1A\u6309\u7167\u914D\u7F6E\u7684\u6743\u91CD\u6D41\u5165\u5BF9\u5E94\u7248\u672C\u7684\u670D\u52A1")])],-1),M=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl apply -f appv2.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv2 configured")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv2 unchanged")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.extensions/echoserverv2 unchanged")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s -H "v2:always" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s -H "v2:never" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s -H "v2:true" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),U=s("ul",null,[s("li",null,"\u81EA\u5B9A\u4E49header-value")],-1),O=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  annotations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kubernetes.io/ingress.class: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary: "true"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-weight: "50"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-by-header: "v2"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-by-header-value: "true"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - host: echo.chulinx.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    http:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      paths:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - backend:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          serviceName: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          servicePort: 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        path: /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type:  ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - image:  mirrorgooglecontainers/echoserver:1.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G=s("ul",null,[s("li",null,"\u66F4\u65B0\u6D4B\u8BD5")],-1),z=s("blockquote",null,[s("p",null,[n("\u53EF\u4EE5\u770B\u5230\u53EA\u6709header\u4E3A"),s("code",null,"v2:never"),n("\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u624D\u4F1A\u6D41\u5165v2\u7248\u672C\uFF0C\u5176\u4ED6\u503C\u6D41\u91CF\u90FD\u4F1A\u6309\u7167\u6743\u91CD\u8BBE\u7F6E\u6D41\u5165\u4E0D\u901A\u7248\u672C\u7684\u670D\u52A1")])],-1),L=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl apply -f appv2.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv2 configured")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv2 unchanged")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.extensions/echoserverv2 unchanged")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s -H "v2:true" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s -H "v2:always" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s -H "v2:never" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y=s("h3",{id:"_3-\u57FA\u4E8Ecookie\u7684\u6D41\u63A7",tabindex:"-1"},[n("3.\u57FA\u4E8Ecookie\u7684\u6D41\u63A7 "),s("a",{class:"header-anchor",href:"#_3-\u57FA\u4E8Ecookie\u7684\u6D41\u63A7","aria-hidden":"true"},"#")],-1),J=s("blockquote",null,[s("p",null,"cookie\u5176\u5B9E\u548Cheader\u539F\u7406\u5927\u81F4\u76F8\u540C\uFF0C\u4E5F\u662Fingress\u81EA\u52A8cookie\u503C\uFF0C\u5BA2\u6237\u8BBF\u95EE\u5982\u679Ccookie\u5339\u914D\uFF0C\u6D41\u91CF\u5C31\u4F1A\u6D41\u5165\u4E0E\u4E4B\u5339\u914D\u7684\u540E\u7AEF\u670D\u52A1")],-1),X=s("ul",null,[s("li",null,"\u66F4\u65B0v2\u7248\u672C\u7684\u7F16\u6392\u6587\u4EF6")],-1),Z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  annotations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kubernetes.io/ingress.class: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary: "true"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-weight: "50"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-by-header: "v2"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-by-header-value: "true"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    nginx.ingress.kubernetes.io/canary-by-cookie: "user_from_shanghai"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - host: echo.chulinx.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    http:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      paths:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - backend:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          serviceName: echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          servicePort: 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        path: /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type:  ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - image:  mirrorgooglecontainers/echoserver:1.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        name:  echoserverv2 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort:  8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name:  echoserverv2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W=s("ul",null,[s("li",null,"\u8BBF\u95EE\u6D4B\u8BD5")],-1),F=s("blockquote",null,[s("p",null,"\u53EF\u4EE5\u770B\u548Cheader\u7684\u8BBF\u95EE\u6548\u679C\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u4E0D\u8FC7cookie\u4E0D\u80FD\u81EA\u5B9A\u4E49value")],-1),Q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl apply -f appv2.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv2 configured")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv2 unchanged")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.extensions/echoserverv2 unchanged")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s --cookie "user_from_shanghai" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# zlx @ zlxdeMacBook-Pro in ~/Desktop/unicom/k8syml/nginx-ingress-canary-deployment [16:01:52]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s --cookie "user_from_shanghai:always" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv1-657b966cb5-7grqs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# zlx @ zlxdeMacBook-Pro in ~/Desktop/unicom/k8syml/nginx-ingress-canary-deployment [16:02:25]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'$ [K8sSj] for i in `seq 10`;do curl -s --cookie "user_from_shanghai=always" echo.chulinx.com|grep Hostname;done')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hostname: echoserverv2-856bb5758-f9tqn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"\u590D\u5236\u4EE3\u7801")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ss=s("h2",{id:"\u603B\u7ED3",tabindex:"-1"},[n("\u603B\u7ED3 "),s("a",{class:"header-anchor",href:"#\u603B\u7ED3","aria-hidden":"true"},"#")],-1),ns=s("blockquote",null,[s("p",null,"\u7070\u5EA6\u53D1\u5E03\u53EF\u4EE5\u4FDD\u8BC1\u6574\u4F53\u7CFB\u7EDF\u7684\u7A33\u5B9A\uFF0C\u5728\u521D\u59CB\u7070\u5EA6\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u5BF9\u65B0\u7248\u672C\u8FDB\u884C\u6D4B\u8BD5\u3001\u53D1\u73B0\u548C\u8C03\u6574\u95EE\u9898\uFF0C\u4EE5\u4FDD\u8BC1\u5176\u5F71\u54CD\u5EA6,\u4EE5\u4E0A\u5185\u5BB9\u901A\u8FC7\u5B9E\u4F8B\u8BE6\u7EC6\u4ECB\u7ECD\u4E86Ingress-Nginx\u7684\u5B9E\u6218Canary Annotation\uFF0C\u53EF\u4EE5\u501F\u52A9Ingress-Nginx\u8F7B\u677E\u5B9E\u73B0\u84DD\u7EFF\u53D1\u5E03\u548C\u91D1\u4E1D\u96C0\u53D1\u5E03")],-1),es=s("h3",{id:"\u5176\u4ED6",tabindex:"-1"},[n("\u5176\u4ED6 "),s("a",{class:"header-anchor",href:"#\u5176\u4ED6","aria-hidden":"true"},"#")],-1),ls=s("h4",{id:"\u5173\u4E8E\u84DD\u7EFF\u53D1\u5E03\u3001\u91D1\u4E1D\u96C0\u53D1\u5E03\u3001\u548Ca-b\u6D4B\u8BD5",tabindex:"-1"},[n("\u5173\u4E8E\u84DD\u7EFF\u53D1\u5E03\u3001\u91D1\u4E1D\u96C0\u53D1\u5E03\u3001\u548CA/B\u6D4B\u8BD5 "),s("a",{class:"header-anchor",href:"#\u5173\u4E8E\u84DD\u7EFF\u53D1\u5E03\u3001\u91D1\u4E1D\u96C0\u53D1\u5E03\u3001\u548Ca-b\u6D4B\u8BD5","aria-hidden":"true"},"#")],-1),as=s("ul",null,[s("li",null,"\u84DD\u7EFF\u53D1\u5E03")],-1),os=s("blockquote",null,[s("p",null,"\u84DD\u7EFF\u90E8\u7F72\u4E2D\uFF0C\u4E00\u5171\u6709\u4E24\u5957\u7CFB\u7EDF\uFF1A\u4E00\u5957\u662F\u6B63\u5728\u63D0\u4F9B\u670D\u52A1\u7CFB\u7EDF\uFF0C\u6807\u8BB0\u4E3A\u201C\u7EFF\u8272\u201D\uFF1B\u53E6\u4E00\u5957\u662F\u51C6\u5907\u53D1\u5E03\u7684\u7CFB\u7EDF\uFF0C\u6807\u8BB0\u4E3A\u201C\u84DD\u8272\u201D\u3002\u4E24\u5957\u7CFB\u7EDF\u90FD\u662F\u529F\u80FD\u5B8C\u5584\u7684\uFF0C\u5E76\u4E14\u6B63\u5728\u8FD0\u884C\u7684\u7CFB\u7EDF\uFF0C\u53EA\u662F\u7CFB\u7EDF\u7248\u672C\u548C\u5BF9\u5916\u670D\u52A1\u60C5\u51B5\u4E0D\u540C\u3002 \u6700\u521D\uFF0C\u6CA1\u6709\u4EFB\u4F55\u7CFB\u7EDF\uFF0C\u6CA1\u6709\u84DD\u7EFF\u4E4B\u5206\u3002 \u7136\u540E\uFF0C\u7B2C\u4E00\u5957\u7CFB\u7EDF\u5F00\u53D1\u5B8C\u6210\uFF0C\u76F4\u63A5\u4E0A\u7EBF\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EA\u6709\u4E00\u4E2A\u7CFB\u7EDF\uFF0C\u4E5F\u6CA1\u6709\u84DD\u7EFF\u4E4B\u5206\u3002 \u540E\u6765\uFF0C\u5F00\u53D1\u4E86\u65B0\u7248\u672C\uFF0C\u8981\u7528\u65B0\u7248\u672C\u66FF\u6362\u7EBF\u4E0A\u7684\u65E7\u7248\u672C\uFF0C\u5728\u7EBF\u4E0A\u7684\u7CFB\u7EDF\u4E4B\u5916\uFF0C\u642D\u5EFA\u4E86\u4E00\u4E2A\u4F7F\u7528\u65B0\u7248\u672C\u4EE3\u7801\u7684\u5168\u65B0\u7CFB\u7EDF\u3002 \u8FD9\u65F6\u5019\uFF0C\u4E00\u5171\u6709\u4E24\u5957\u7CFB\u7EDF\u5728\u8FD0\u884C\uFF0C\u6B63\u5728\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684\u8001\u7CFB\u7EDF\u662F\u7EFF\u8272\u7CFB\u7EDF\uFF0C\u65B0\u90E8\u7F72\u7684\u7CFB\u7EDF\u662F\u84DD\u8272\u7CFB\u7EDF\u3002 \u84DD\u8272\u7CFB\u7EDF\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u7528\u6765\u505A\u5565\uFF1F \u7528\u6765\u505A\u53D1\u5E03\u524D\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u84DD\u8272\u7CFB\u7EDF\u4E0A\u4FEE\u6539\uFF0C\u4E0D\u5E72\u6270\u7528\u6237\u6B63\u5728\u4F7F\u7528\u7684\u7CFB\u7EDF\u3002\uFF08\u6CE8\u610F\uFF0C\u4E24\u5957\u7CFB\u7EDF\u6CA1\u6709\u8026\u5408\u7684\u65F6\u5019\u624D\u80FD\u767E\u5206\u767E\u4FDD\u8BC1\u4E0D\u5E72\u6270\uFF09 \u84DD\u8272\u7CFB\u7EDF\u7ECF\u8FC7\u53CD\u590D\u7684\u6D4B\u8BD5\u3001\u4FEE\u6539\u3001\u9A8C\u8BC1\uFF0C\u786E\u5B9A\u8FBE\u5230\u4E0A\u7EBF\u6807\u51C6\u4E4B\u540E\uFF0C\u76F4\u63A5\u5C06\u7528\u6237\u5207\u6362\u5230\u84DD\u8272\u7CFB\u7EDF\uFF1A \u5207\u6362\u540E\u7684\u4E00\u6BB5\u65F6\u95F4\u5185\uFF0C\u4F9D\u65E7\u662F\u84DD\u7EFF\u4E24\u5957\u7CFB\u7EDF\u5E76\u5B58\uFF0C\u4F46\u662F\u7528\u6237\u8BBF\u95EE\u7684\u5DF2\u7ECF\u662F\u84DD\u8272\u7CFB\u7EDF\u3002\u8FD9\u6BB5\u65F6\u95F4\u5185\u89C2\u5BDF\u84DD\u8272\u7CFB\u7EDF\uFF08\u65B0\u7CFB\u7EDF\uFF09\u5DE5\u4F5C\u72B6\u6001\uFF0C\u5982\u679C\u51FA\u73B0\u95EE\u9898\uFF0C\u76F4\u63A5\u5207\u6362\u56DE\u7EFF\u8272\u7CFB\u7EDF\u3002 \u5F53\u786E\u4FE1\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684\u84DD\u8272\u7CFB\u7EDF\u5DE5\u4F5C\u6B63\u5E38\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684\u7EFF\u8272\u7CFB\u7EDF\u5DF2\u7ECF\u4E0D\u518D\u9700\u8981\u7684\u65F6\u5019\uFF0C\u84DD\u8272\u7CFB\u7EDF\u6B63\u5F0F\u6210\u4E3A\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7CFB\u7EDF\uFF0C\u6210\u4E3A\u65B0\u7684\u7EFF\u8272\u7CFB\u7EDF\u3002 \u539F\u5148\u7684\u7EFF\u8272\u7CFB\u7EDF\u53EF\u4EE5\u9500\u6BC1\uFF0C\u5C06\u8D44\u6E90\u91CA\u653E\u51FA\u6765\uFF0C\u7528\u4E8E\u90E8\u7F72\u4E0B\u4E00\u4E2A\u84DD\u8272\u7CFB\u7EDF\u3002 \u84DD\u7EFF\u90E8\u7F72\u53EA\u662F\u4E0A\u7EBF\u7B56\u7565\u4E2D\u7684\u4E00\u79CD\uFF0C\u5B83\u4E0D\u662F\u53EF\u4EE5\u5E94\u5BF9\u6240\u6709\u60C5\u51B5\u7684\u4E07\u80FD\u65B9\u6848\u3002 \u84DD\u7EFF\u90E8\u7F72\u80FD\u591F\u7B80\u5355\u5FEB\u6377\u5B9E\u65BD\u7684\u524D\u63D0\u5047\u8BBE\u662F\u76EE\u6807\u7CFB\u7EDF\u662F\u975E\u5E38\u5185\u805A\u7684\uFF0C\u5982\u679C\u76EE\u6807\u7CFB\u7EDF\u76F8\u5F53\u590D\u6742\uFF0C\u90A3\u4E48\u5982\u4F55\u5207\u6362\u3001\u4E24\u5957\u7CFB\u7EDF\u7684\u6570\u636E\u662F\u5426\u9700\u8981\u4EE5\u53CA\u5982\u4F55\u540C\u6B65\u7B49\uFF0C\u90FD\u9700\u8981\u4ED4\u7EC6\u8003\u8651\u3002")],-1),cs=s("ul",null,[s("li",null,"\u91D1\u4E1D\u96C0\u53D1\u5E03")],-1),rs=s("blockquote",null,[s("p",null,"\u91D1\u4E1D\u96C0\u53D1\u5E03\uFF08Canary\uFF09\u4E5F\u662F\u4E00\u79CD\u53D1\u5E03\u7B56\u7565\uFF0C\u548C\u56FD\u5185\u5E38\u8BF4\u7684\u7070\u5EA6\u53D1\u5E03\u662F\u540C\u4E00\u7C7B\u7B56\u7565\u3002\u84DD\u7EFF\u90E8\u7F72\u662F\u51C6\u5907\u4E24\u5957\u7CFB\u7EDF\uFF0C\u5728\u4E24\u5957\u7CFB\u7EDF\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\uFF0C\u91D1\u4E1D\u96C0\u7B56\u7565\u662F\u53EA\u6709\u4E00\u5957\u7CFB\u7EDF\uFF0C\u9010\u6E10\u66FF\u6362\u8FD9\u5957\u7CFB\u7EDF \u8B6C\u5982\u8BF4\uFF0C\u76EE\u6807\u7CFB\u7EDF\u662F\u4E00\u7EC4\u65E0\u72B6\u6001\u7684Web\u670D\u52A1\u5668\uFF0C\u4F46\u662F\u6570\u91CF\u975E\u5E38\u591A\uFF0C\u5047\u8BBE\u6709\u4E00\u4E07\u53F0\u3002 \u8FD9\u65F6\u5019\uFF0C\u84DD\u7EFF\u90E8\u7F72\u5C31\u4E0D\u80FD\u7528\u4E86\uFF0C\u56E0\u4E3A\u4F60\u4E0D\u53EF\u80FD\u7533\u8BF7\u4E00\u4E07\u53F0\u670D\u52A1\u5668\u4E13\u95E8\u7528\u6765\u90E8\u7F72\u84DD\u8272\u7CFB\u7EDF\uFF08\u5728\u84DD\u7EFF\u90E8\u7F72\u7684\u5B9A\u4E49\u4E2D\uFF0C\u84DD\u8272\u7684\u7CFB\u7EDF\u8981\u80FD\u591F\u627F\u63A5\u6240\u6709\u8BBF\u95EE\uFF09\u3002 \u53EF\u4EE5\u60F3\u5230\u7684\u4E00\u4E2A\u65B9\u6CD5\u662F\uFF1A \u53EA\u51C6\u5907\u51E0\u53F0\u670D\u52A1\u5668\uFF0C\u5728\u4E0A\u9762\u90E8\u7F72\u65B0\u7248\u672C\u7684\u7CFB\u7EDF\u5E76\u6D4B\u8BD5\u9A8C\u8BC1\u3002\u6D4B\u8BD5\u901A\u8FC7\u4E4B\u540E\uFF0C\u62C5\u5FC3\u51FA\u73B0\u610F\u5916\uFF0C\u8FD8\u4E0D\u6562\u7ACB\u5373\u66F4\u65B0\u6240\u6709\u7684\u670D\u52A1\u5668\u3002 \u5148\u5C06\u7EBF\u4E0A\u7684\u4E00\u4E07\u53F0\u670D\u52A1\u5668\u4E2D\u768410\u53F0\u66F4\u65B0\u4E3A\u6700\u65B0\u7684\u7CFB\u7EDF\uFF0C\u7136\u540E\u89C2\u5BDF\u9A8C\u8BC1\u3002\u786E\u8BA4\u6CA1\u6709\u5F02\u5E38\u4E4B\u540E\uFF0C\u518D\u5C06\u5269\u4F59\u7684\u6240\u6709\u670D\u52A1\u5668\u66F4\u65B0\u3002 \u8FD9\u4E2A\u65B9\u6CD5\u5C31\u662F\u91D1\u4E1D\u96C0\u53D1\u5E03\u3002 \u5B9E\u9645\u64CD\u4F5C\u4E2D\u8FD8\u53EF\u4EE5\u505A\u66F4\u591A\u63A7\u5236\uFF0C\u8B6C\u5982\u8BF4\uFF0C\u7ED9\u6700\u521D\u66F4\u65B0\u768410\u53F0\u670D\u52A1\u5668\u8BBE\u7F6E\u8F83\u4F4E\u7684\u6743\u91CD\u3001\u63A7\u5236\u53D1\u9001\u7ED9\u8FD910\u53F0\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u6570\uFF0C\u7136\u540E\u9010\u6E10\u63D0\u9AD8\u6743\u91CD\u3001\u589E\u52A0\u8BF7\u6C42\u6570\u3002 \u8FD9\u4E2A\u63A7\u5236\u53EB\u505A\u201C\u6D41\u91CF\u5207\u5206\u201D\uFF0C\u65E2\u53EF\u4EE5\u7528\u4E8E\u91D1\u4E1D\u96C0\u53D1\u5E03\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u540E\u9762\u7684A/B\u6D4B\u8BD5\u3002 \u84DD\u7EFF\u90E8\u7F72\u548C\u91D1\u4E1D\u96C0\u53D1\u5E03\u662F\u4E24\u79CD\u53D1\u5E03\u7B56\u7565\uFF0C\u90FD\u4E0D\u662F\u4E07\u80FD\u7684\u3002\u6709\u65F6\u5019\u4E24\u8005\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u6709\u65F6\u5019\u53EA\u80FD\u7528\u5176\u4E2D\u4E00\u79CD\u3002")],-1),ts=s("ul",null,[s("li",null,"A/B\u6D4B\u8BD5")],-1),ps=s("blockquote",null,[s("p",null,"\u9996\u5148\u9700\u8981\u660E\u786E\u7684\u662F\uFF0CA/B\u6D4B\u8BD5\u548C\u84DD\u7EFF\u90E8\u7F72\u4EE5\u53CA\u91D1\u4E1D\u96C0\uFF0C\u5B8C\u5168\u662F\u4E24\u56DE\u4E8B\u3002 \u84DD\u7EFF\u90E8\u7F72\u548C\u91D1\u4E1D\u96C0\u662F\u53D1\u5E03\u7B56\u7565\uFF0C\u76EE\u6807\u662F\u786E\u4FDD\u65B0\u4E0A\u7EBF\u7684\u7CFB\u7EDF\u7A33\u5B9A\uFF0C\u5173\u6CE8\u7684\u662F\u65B0\u7CFB\u7EDF\u7684BUG\u3001\u9690\u60A3\u3002 A/B\u6D4B\u8BD5\u662F\u6548\u679C\u6D4B\u8BD5\uFF0C\u540C\u4E00\u65F6\u95F4\u6709\u591A\u4E2A\u7248\u672C\u7684\u670D\u52A1\u5BF9\u5916\u670D\u52A1\uFF0C\u8FD9\u4E9B\u670D\u52A1\u90FD\u662F\u7ECF\u8FC7\u8DB3\u591F\u6D4B\u8BD5\uFF0C\u8FBE\u5230\u4E86\u4E0A\u7EBF\u6807\u51C6\u7684\u670D\u52A1\uFF0C\u6709\u5DEE\u5F02\u4F46\u662F\u6CA1\u6709\u65B0\u65E7\u4E4B\u5206\uFF08\u5B83\u4EEC\u4E0A\u7EBF\u65F6\u53EF\u80FD\u91C7\u7528\u4E86\u84DD\u7EFF\u90E8\u7F72\u7684\u65B9\u5F0F\uFF09\u3002 A/B\u6D4B\u8BD5\u5173\u6CE8\u7684\u662F\u4E0D\u540C\u7248\u672C\u7684\u670D\u52A1\u7684\u5B9E\u9645\u6548\u679C\uFF0C\u8B6C\u5982\u8BF4\u8F6C\u5316\u7387\u3001\u8BA2\u5355\u60C5\u51B5\u7B49\u3002 A/B\u6D4B\u8BD5\u65F6\uFF0C\u7EBF\u4E0A\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u7248\u672C\u7684\u670D\u52A1\uFF0C\u8FD9\u4E9B\u670D\u52A1\u901A\u5E38\u4F1A\u6709\u4E00\u4E9B\u4F53\u9A8C\u4E0A\u7684\u5DEE\u5F02\uFF0C\u8B6C\u5982\u8BF4\u9875\u9762\u6837\u5F0F\u3001\u989C\u8272\u3001\u64CD\u4F5C\u6D41\u7A0B\u4E0D\u540C\u3002\u76F8\u5173\u4EBA\u5458\u901A\u8FC7\u5206\u6790\u5404\u4E2A\u7248\u672C\u670D\u52A1\u7684\u5B9E\u9645\u6548\u679C\uFF0C\u9009\u51FA\u6548\u679C\u6700\u597D\u7684\u7248\u672C\u3002 \u5728A/B\u6D4B\u8BD5\u4E2D\uFF0C\u9700\u8981\u80FD\u591F\u63A7\u5236\u6D41\u91CF\u7684\u5206\u914D\uFF0C\u8B6C\u5982\u8BF4\uFF0C\u4E3AA\u7248\u672C\u5206\u914D10%\u7684\u6D41\u91CF\uFF0C\u4E3AB\u7248\u672C\u5206\u914D10%\u7684\u6D41\u91CF\uFF0C\u4E3AC\u7248\u672C\u5206\u914D80%\u7684\u6D41\u91CF\u3002")],-1),is=s("h3",{id:"\u53C2\u8003",tabindex:"-1"},[n("\u53C2\u8003 "),s("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#")],-1),As=s("p",null,[s("a",{href:"https://juejin.cn/post/6844903927318577159",target:"_blank",rel:"noreferrer"},"https://juejin.cn/post/6844903927318577159")],-1);function Cs(l,ys,vs,Ds,c,hs){const r=t;return A(),i(r,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[v,D,h,b,u,d,m,g,_,q,H,f,k,x,S,P,I,N,$,B,K,E,T,j,R,V,w,M,U,O,G,z,L,Y,J,X,Z,W,F,Q,ss,ns,es,ls,as,os,cs,rs,ts,ps,is,As]),"main-header":e(()=>[a(l.$slots,"main-header")]),"main-header-after":e(()=>[a(l.$slots,"main-header-after")]),"main-nav":e(()=>[a(l.$slots,"main-nav")]),"main-content":e(()=>[a(l.$slots,"main-content")]),"main-content-after":e(()=>[a(l.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(l.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(l.$slots,"main-nav-after")]),comment:e(()=>[a(l.$slots,"comment")]),footer:e(()=>[a(l.$slots,"footer")]),aside:e(()=>[a(l.$slots,"aside")]),"aside-custom":e(()=>[a(l.$slots,"aside-custom")]),default:e(()=>[a(l.$slots,"default")]),_:3},8,["frontmatter","data"])}const qs=p(y,[["render",Cs]]);export{_s as __pageData,qs as default};
