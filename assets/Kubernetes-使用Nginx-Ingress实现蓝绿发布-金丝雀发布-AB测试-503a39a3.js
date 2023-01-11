import{_ as t}from"./ValaxyMain-5334b760.js";import{_ as p,p as i,c as A,w as e,o as C,r as a,b as s,R as n}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const _s=JSON.parse('{"title":"Kubernetes 使用Nginx-Ingress实现蓝绿发布/金丝雀发布/AB测试","description":"","frontmatter":{"title":"Kubernetes 使用Nginx-Ingress实现蓝绿发布/金丝雀发布/AB测试","categories":"微服务","tags":["Nginx-ingress","蓝绿发布","金丝雀发布","用户无感知"],"date":"2019-08-09T14:44:00.000Z"},"headers":[{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"Ingress-Nginx-Annotation Canary 功能介绍","slug":"ingress-nginx-annotation-canary-功能介绍","link":"#ingress-nginx-annotation-canary-功能介绍","children":[{"level":3,"title":"1.基于权重的小规模版本测试","slug":"_1-基于权重的小规模版本测试","link":"#_1-基于权重的小规模版本测试","children":[]},{"level":3,"title":"2.基于header的A/B测试","slug":"_2-基于header的a-b测试","link":"#_2-基于header的a-b测试","children":[]},{"level":3,"title":"3.基于cookie的流控","slug":"_3-基于cookie的流控","link":"#_3-基于cookie的流控","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"pages/posts/Kubernetes-使用Nginx-Ingress实现蓝绿发布-金丝雀发布-AB测试.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes-使用Nginx-Ingress实现蓝绿发布-金丝雀发布-AB测试.md","lastUpdated":1671090556000}'),o=JSON.parse('{"title":"Kubernetes 使用Nginx-Ingress实现蓝绿发布/金丝雀发布/AB测试","description":"","frontmatter":{"title":"Kubernetes 使用Nginx-Ingress实现蓝绿发布/金丝雀发布/AB测试","categories":"微服务","tags":["Nginx-ingress","蓝绿发布","金丝雀发布","用户无感知"],"date":"2019-08-09T14:44:00.000Z"},"headers":[{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"Ingress-Nginx-Annotation Canary 功能介绍","slug":"ingress-nginx-annotation-canary-功能介绍","link":"#ingress-nginx-annotation-canary-功能介绍","children":[{"level":3,"title":"1.基于权重的小规模版本测试","slug":"_1-基于权重的小规模版本测试","link":"#_1-基于权重的小规模版本测试","children":[]},{"level":3,"title":"2.基于header的A/B测试","slug":"_2-基于header的a-b测试","link":"#_2-基于header的a-b测试","children":[]},{"level":3,"title":"3.基于cookie的流控","slug":"_3-基于cookie的流控","link":"#_3-基于cookie的流控","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"pages/posts/Kubernetes-使用Nginx-Ingress实现蓝绿发布-金丝雀发布-AB测试.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes-使用Nginx-Ingress实现蓝绿发布-金丝雀发布-AB测试.md","lastUpdated":1671090556000}'),y={name:"pages/posts/Kubernetes-使用Nginx-Ingress实现蓝绿发布-金丝雀发布-AB测试.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){i("pageData",o)}},v=s("h2",{id:"背景介绍",tabindex:"-1"},[n("背景介绍 "),s("a",{class:"header-anchor",href:"#背景介绍","aria-hidden":"true"},"#")],-1),D=s("blockquote",null,[s("p",null,"某些情况下，我们在使用Kubernetes作为业务应用的云平台，想要实现应用的蓝绿部署用来迭代应用版本，用lstio太重太复杂，而且它本身定位于流控和网格治理；Ingress-Nginx在0.21版本引入了Canary功能，可以为网关入口配置多个版本的应用程序，使用annotation来控制多个后端服务的流量分配")],-1),h=s("h2",{id:"ingress-nginx-annotation-canary-功能介绍",tabindex:"-1"},[n("Ingress-Nginx-Annotation Canary 功能介绍 "),s("a",{class:"header-anchor",href:"#ingress-nginx-annotation-canary-功能介绍","aria-hidden":"true"},"#")],-1),b=s("blockquote",null,[s("p",null,[n("如果想启用Canary功能，要先设置"),s("code",null,'nginx.ingress.kubernetes.io/canary: "true"'),n("，然后可以启用以下注释来配置Canary")])],-1),u=s("ul",null,[s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-weight"),n(" 请求到Canary ingress中指定的服务的请求百分比，值为0-100的整数，根据设置的值来决定大概有百分之多少的流量会分配Canary Ingress中指定的后端s服务")]),s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-by-header"),n(" 基于request header 的流量切分，适用于灰度发布或者A/B测试，当设定的hearder值为always是，请求流量会被一直分配到Canary入口，当hearder值被设置为never时，请求流量不会分配到Canary入口，对于其他hearder值，将忽略，并通过优先级将请求流量分配到其他规则")]),s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-by-header-value"),n(" 这个配置要和"),s("code",null,"nginx.ingress.kubernetes.io/canary-by-header"),n(" 一起使用，当请求中的hearder key和value 和"),s("code",null,"nginx.ingress.kubernetes.io/canary-by-header"),n(),s("code",null,"nginx.ingress.kubernetes.io/canary-by-header-value"),n("匹配时，请求流量会被分配到Canary Ingress入口，对于其他任何hearder值，将忽略，并通过优先级将请求流量分配到其他规则")]),s("li",null,[s("code",null,"nginx.ingress.kubernetes.io/canary-by-cookie"),n(" 这个配置是基于cookie的流量切分，也适用于灰度发布或者A/B测试，当cookie值设置为always时，请求流量将被路由到Canary Ingress入口，当cookie值设置为never时，请求流量将不会路由到Canary入口，对于其他值，将忽略，并通过优先级将请求流量分配到其他规则")])],-1),d=s("blockquote",null,[s("p",null,"金丝雀规则按优先顺序进行如下排序：canary-by-header - > canary-by-cookie - > canary-weight")],-1),m=s("h3",{id:"_1-基于权重的小规模版本测试",tabindex:"-1"},[n("1.基于权重的小规模版本测试 "),s("a",{class:"header-anchor",href:"#_1-基于权重的小规模版本测试","aria-hidden":"true"},"#")],-1),g=s("ul",null,[s("li",null,"v1版本编排文件")],-1),_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q=s("ul",null,[s("li",null,"查看v1版本创建的资源")],-1),H=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl get pod,service,ingress -n echoserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY   STATUS    RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pod/echoserverv1-657b966cb5-7grqs   1/1     Running   0          24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                   TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/echoserverv1   ClusterIP   10.99.68.72   <none>        8080/TCP   24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                              HOSTS              ADDRESS   PORTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ingress.extensions/echoserverv1   echo.chulinx.com             80      24h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),f=s("ul",null,[s("li",null,"访问v1的服务,可以看到10个请求都是访问到一个pod上也就是v1版本的服务")],-1),k=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] for i in `seq 10`;do curl -s echo.chulinx.com|grep Hostname;done")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),x=s("ul",null,[s("li",null,"创建v2版本的服务")],-1),S=s("blockquote",null,[s("p",null,"我们开启canary功能，将v2版本的权重设置为50%,这个百分比并不能精确的将请求平均分配到两个版本的服务，而是在50%上下浮动")],-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),I=s("ul",null,[s("li",null,"再次查看创建的资源")],-1),N=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl get pod,service,ingress -n echoserver")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),B=s("ul",null,[s("li",null,"访问测试")],-1),$=s("blockquote",null,[s("p",null,"可以看到请求有4个落到v2版本，6个落到v1版本，理论上来说，请求说越多，落到v2版本的请求数越接近设置的权重50%")],-1),K=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] for i in `seq 10`;do curl -s echo.chulinx.com|grep Hostname;done")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E=s("h3",{id:"_2-基于header的a-b测试",tabindex:"-1"},[n("2.基于header的A/B测试 "),s("a",{class:"header-anchor",href:"#_2-基于header的a-b测试","aria-hidden":"true"},"#")],-1),T=s("ul",null,[s("li",null,"更改v2版本的编排文件")],-1),j=s("blockquote",null,[s("p",null,[n("增加header"),s("code",null,'nginx.ingress.kubernetes.io/canary-by-header: "v2"')])],-1),R=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V=s("ul",null,[s("li",null,"更新访问测试")],-1),w=s("blockquote",null,[s("p",null,[n("测试了header 为"),s("code",null,"v2:always"),n(),s("code",null,"v2:never"),n(),s("code",null,"v2:true"),n("这三个hearder值，可以看到当hearder为"),s("code",null,"v2:always"),n("时，流量会全部流入v2，当"),s("code",null,"v2:never"),n("时，流量会全部流入v1，当"),s("code",null,"v2:true"),n("时，也就是非"),s("code",null,"always/never"),n(",流量会按照配置的权重流入对应版本的服务")])],-1),U=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl apply -f appv2.yml")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),M=s("ul",null,[s("li",null,"自定义header-value")],-1),O=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G=s("ul",null,[s("li",null,"更新测试")],-1),z=s("blockquote",null,[s("p",null,[n("可以看到只有header为"),s("code",null,"v2:never"),n("时，请求流量才会流入v2版本，其他值流量都会按照权重设置流入不通版本的服务")])],-1),L=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl apply -f appv2.yml")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y=s("h3",{id:"_3-基于cookie的流控",tabindex:"-1"},[n("3.基于cookie的流控 "),s("a",{class:"header-anchor",href:"#_3-基于cookie的流控","aria-hidden":"true"},"#")],-1),J=s("blockquote",null,[s("p",null,"cookie其实和header原理大致相同，也是ingress自动cookie值，客户访问如果cookie匹配，流量就会流入与之匹配的后端服务")],-1),X=s("ul",null,[s("li",null,"更新v2版本的编排文件")],-1),Z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: extensions/v1beta1")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W=s("ul",null,[s("li",null,"访问测试")],-1),F=s("blockquote",null,[s("p",null,"可以看和header的访问效果是一样的，只不过cookie不能自定义value")],-1),Q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ [K8sSj] kubectl apply -f appv2.yml")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"复制代码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ss=s("h2",{id:"总结",tabindex:"-1"},[n("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#")],-1),ns=s("blockquote",null,[s("p",null,"灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以对新版本进行测试、发现和调整问题，以保证其影响度,以上内容通过实例详细介绍了Ingress-Nginx的实战Canary Annotation，可以借助Ingress-Nginx轻松实现蓝绿发布和金丝雀发布")],-1),es=s("h3",{id:"其他",tabindex:"-1"},[n("其他 "),s("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#")],-1),ls=s("h4",{id:"关于蓝绿发布、金丝雀发布、和a-b测试",tabindex:"-1"},[n("关于蓝绿发布、金丝雀发布、和A/B测试 "),s("a",{class:"header-anchor",href:"#关于蓝绿发布、金丝雀发布、和a-b测试","aria-hidden":"true"},"#")],-1),as=s("ul",null,[s("li",null,"蓝绿发布")],-1),os=s("blockquote",null,[s("p",null,"蓝绿部署中，一共有两套系统：一套是正在提供服务系统，标记为“绿色”；另一套是准备发布的系统，标记为“蓝色”。两套系统都是功能完善的，并且正在运行的系统，只是系统版本和对外服务情况不同。 最初，没有任何系统，没有蓝绿之分。 然后，第一套系统开发完成，直接上线，这个过程只有一个系统，也没有蓝绿之分。 后来，开发了新版本，要用新版本替换线上的旧版本，在线上的系统之外，搭建了一个使用新版本代码的全新系统。 这时候，一共有两套系统在运行，正在对外提供服务的老系统是绿色系统，新部署的系统是蓝色系统。 蓝色系统不对外提供服务，用来做啥？ 用来做发布前测试，测试过程中发现任何问题，可以直接在蓝色系统上修改，不干扰用户正在使用的系统。（注意，两套系统没有耦合的时候才能百分百保证不干扰） 蓝色系统经过反复的测试、修改、验证，确定达到上线标准之后，直接将用户切换到蓝色系统： 切换后的一段时间内，依旧是蓝绿两套系统并存，但是用户访问的已经是蓝色系统。这段时间内观察蓝色系统（新系统）工作状态，如果出现问题，直接切换回绿色系统。 当确信对外提供服务的蓝色系统工作正常，不对外提供服务的绿色系统已经不再需要的时候，蓝色系统正式成为对外提供服务系统，成为新的绿色系统。 原先的绿色系统可以销毁，将资源释放出来，用于部署下一个蓝色系统。 蓝绿部署只是上线策略中的一种，它不是可以应对所有情况的万能方案。 蓝绿部署能够简单快捷实施的前提假设是目标系统是非常内聚的，如果目标系统相当复杂，那么如何切换、两套系统的数据是否需要以及如何同步等，都需要仔细考虑。")],-1),cs=s("ul",null,[s("li",null,"金丝雀发布")],-1),rs=s("blockquote",null,[s("p",null,"金丝雀发布（Canary）也是一种发布策略，和国内常说的灰度发布是同一类策略。蓝绿部署是准备两套系统，在两套系统之间进行切换，金丝雀策略是只有一套系统，逐渐替换这套系统 譬如说，目标系统是一组无状态的Web服务器，但是数量非常多，假设有一万台。 这时候，蓝绿部署就不能用了，因为你不可能申请一万台服务器专门用来部署蓝色系统（在蓝绿部署的定义中，蓝色的系统要能够承接所有访问）。 可以想到的一个方法是： 只准备几台服务器，在上面部署新版本的系统并测试验证。测试通过之后，担心出现意外，还不敢立即更新所有的服务器。 先将线上的一万台服务器中的10台更新为最新的系统，然后观察验证。确认没有异常之后，再将剩余的所有服务器更新。 这个方法就是金丝雀发布。 实际操作中还可以做更多控制，譬如说，给最初更新的10台服务器设置较低的权重、控制发送给这10台服务器的请求数，然后逐渐提高权重、增加请求数。 这个控制叫做“流量切分”，既可以用于金丝雀发布，也可以用于后面的A/B测试。 蓝绿部署和金丝雀发布是两种发布策略，都不是万能的。有时候两者都可以使用，有时候只能用其中一种。")],-1),ts=s("ul",null,[s("li",null,"A/B测试")],-1),ps=s("blockquote",null,[s("p",null,"首先需要明确的是，A/B测试和蓝绿部署以及金丝雀，完全是两回事。 蓝绿部署和金丝雀是发布策略，目标是确保新上线的系统稳定，关注的是新系统的BUG、隐患。 A/B测试是效果测试，同一时间有多个版本的服务对外服务，这些服务都是经过足够测试，达到了上线标准的服务，有差异但是没有新旧之分（它们上线时可能采用了蓝绿部署的方式）。 A/B测试关注的是不同版本的服务的实际效果，譬如说转化率、订单情况等。 A/B测试时，线上同时运行多个版本的服务，这些服务通常会有一些体验上的差异，譬如说页面样式、颜色、操作流程不同。相关人员通过分析各个版本服务的实际效果，选出效果最好的版本。 在A/B测试中，需要能够控制流量的分配，譬如说，为A版本分配10%的流量，为B版本分配10%的流量，为C版本分配80%的流量。")],-1),is=s("h3",{id:"参考",tabindex:"-1"},[n("参考 "),s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#")],-1),As=s("p",null,[s("a",{href:"https://juejin.cn/post/6844903927318577159",target:"_blank",rel:"noreferrer"},"https://juejin.cn/post/6844903927318577159")],-1);function Cs(l,ys,vs,Ds,c,hs){const r=t;return C(),A(r,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[v,D,h,b,u,d,m,g,_,q,H,f,k,x,S,P,I,N,B,$,K,E,T,j,R,V,w,U,M,O,G,z,L,Y,J,X,Z,W,F,Q,ss,ns,es,ls,as,os,cs,rs,ts,ps,is,As]),"main-header":e(()=>[a(l.$slots,"main-header")]),"main-header-after":e(()=>[a(l.$slots,"main-header-after")]),"main-nav":e(()=>[a(l.$slots,"main-nav")]),"main-content":e(()=>[a(l.$slots,"main-content")]),"main-content-after":e(()=>[a(l.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(l.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(l.$slots,"main-nav-after")]),comment:e(()=>[a(l.$slots,"comment")]),footer:e(()=>[a(l.$slots,"footer")]),aside:e(()=>[a(l.$slots,"aside")]),"aside-custom":e(()=>[a(l.$slots,"aside-custom")]),default:e(()=>[a(l.$slots,"default")]),_:3},8,["frontmatter","data"])}const qs=p(y,[["render",Cs],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes-使用Nginx-Ingress实现蓝绿发布-金丝雀发布-AB测试.md"]]);export{_s as __pageData,qs as default};
