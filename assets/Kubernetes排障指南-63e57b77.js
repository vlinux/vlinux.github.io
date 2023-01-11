import{_ as i}from"./ValaxyMain-5334b760.js";import{_ as r,p,c as u,w as n,o as d,r as o,b as s,R as l}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const In=JSON.parse('{"title":"Kubernetes排障指南","description":"","frontmatter":{"title":"Kubernetes排障指南","categories":"Kubernetes","tags":["Kubernetes排障指南"],"date":"2022-10-09T10:55:24.000Z"},"headers":[{"level":2,"title":"1. 排查 Pod 故障","slug":"_1-排查-pod-故障","link":"#_1-排查-pod-故障","children":[{"level":3,"title":"常见 Pod 错误","slug":"常见-pod-错误","link":"#常见-pod-错误","children":[]}]},{"level":2,"title":"2. 排查 Service 故障","slug":"_2-排查-service-故障","link":"#_2-排查-service-故障","children":[]},{"level":2,"title":"3. 排查 Ingress 故障","slug":"_3-排查-ingress-故障","link":"#_3-排查-ingress-故障","children":[]}],"relativePath":"pages/posts/Kubernetes排障指南.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes排障指南.md","lastUpdated":1671090556000}'),t=JSON.parse('{"title":"Kubernetes排障指南","description":"","frontmatter":{"title":"Kubernetes排障指南","categories":"Kubernetes","tags":["Kubernetes排障指南"],"date":"2022-10-09T10:55:24.000Z"},"headers":[{"level":2,"title":"1. 排查 Pod 故障","slug":"_1-排查-pod-故障","link":"#_1-排查-pod-故障","children":[{"level":3,"title":"常见 Pod 错误","slug":"常见-pod-错误","link":"#常见-pod-错误","children":[]}]},{"level":2,"title":"2. 排查 Service 故障","slug":"_2-排查-service-故障","link":"#_2-排查-service-故障","children":[]},{"level":2,"title":"3. 排查 Ingress 故障","slug":"_3-排查-ingress-故障","link":"#_3-排查-ingress-故障","children":[]}],"relativePath":"pages/posts/Kubernetes排障指南.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes排障指南.md","lastUpdated":1671090556000}'),_={name:"pages/posts/Kubernetes排障指南.md",data(){return{data:t,frontmatter:t.frontmatter}},setup(){p("pageData",t)}},A=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"原文：https://learnk8s.io/troubleshooting-deployments")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"一份排障指南流程图。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),C=s("p",null,[s("a",{href:"https://vflong.github.io/assets/files/troubleshooting-kubernetes.pdf",target:"_blank",rel:"noreferrer"},"点击下载 PDF 版本"),l("。")],-1),h=s("p",null,[s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes.jpg",alt:"troubleshooting-kubernetes"})],-1),g=s("p",null,"在 Kubernetes 中部署一个应用，需要定义 3 个组件：",-1),y=s("ul",null,[s("li",null,"Deployment - 这是创建名为 Pod 的应用程序副本的菜谱"),s("li",null,"Service - 内部负载均衡器，将流量路由到 Pods"),s("li",null,"Ingress - 有关流量如何从集群外部流向您的服务的描述")],-1),m=s("p",null,"下面是快速的回顾。",-1),b=s("ol",null,[s("li",null,[l("在 Kubernetes 中，应用程序通过两层负载均衡暴露：内部和外部。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-1.svg",alt:"troubleshooting-kubernetes-1"})]),s("li",null,[l("内部的负载平衡被称为 Service，而外部的被称为 Ingress。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-2.svg",alt:"troubleshooting-kubernetes-2"})]),s("li",null,[l("Pod 并不是被直接部署的，而是通过 Deployment 创建 Pod 并监测。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-3.svg",alt:"troubleshooting-kubernetes-3"})])],-1),v=s("p",null,[l("假设您希望部署一个简单的 Hello World 应用程序，则该应用程序的 YAML 应该类似于以下内容： "),s("code",null,"hello-world.yaml")],-1),D=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-deployment")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    track: canary")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      any-name: my-app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        any-name: my-app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: cont1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: learnk8s/app:1.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - port: 80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name: app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: networking.k8s.io/v1beta1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-ingress")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - http:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    paths:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - backend:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        serviceName: app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        servicePort: 80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      path: /")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k=s("p",null,"定义很长，很容易忽略组件之间的相互关系。",-1),P=s("p",null,"例如：",-1),f=s("ul",null,[s("li",null,"何时使用 80 端口？何时使用 8080 端口？"),s("li",null,"是否应该为每个服务创建一个新端口，避免冲突？"),s("li",null,"标签名称重要吗？到处都应该一样吗？")],-1),w=s("p",null,"在进行调试之前，让我们回顾一下这三个组件如何相互连接。",-1),S=s("p",null,"我们从 Deployment 和 Service 开始。",-1),x=s("h1",{id:"连接-deployment-和-service",tabindex:"-1"},[l("连接 Deployment 和 Service "),s("a",{class:"header-anchor",href:"#连接-deployment-和-service","aria-hidden":"true"},"#")],-1),I=s("p",null,"令人惊讶的消息是 Service 和 Deployment 根本没有连接。",-1),R=s("p",null,"相反，Service 端直接连接了 Pod，完全跳过了 Deployment。",-1),$=s("p",null,"所以你应该关心 Pod 和 Serivce 之前是如何相互关联的。",-1),E=s("p",null,"你应该注意以下 3 点：",-1),K=s("ul",null,[s("li",null,"Service 选择器（selector）应该匹配至少一个 Pod 的标签（label）"),s("li",null,[l("Service "),s("code",null,"targetPort"),l(" 应该匹配 Pod 内部容器内的的 "),s("code",null,"containerPort")]),s("li",null,[l("Service "),s("code",null,"port"),l(" 可以是任何数字。因为 Serivce 有不同的 IP 地址，所以多个 Service 可以使用相同的端口。")])],-1),N=s("p",null,"下图总结了如何连接端口：",-1),T=s("ol",null,[s("li",null,[l("通过 Service 暴露下面的 Pod。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-4.svg",alt:"troubleshooting-kubernetes-4"})]),s("li",null,[l("创建 Pod 时，应为 Pod 中的每个容器定义 "),s("code",null,"containerPort"),l("。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-5.svg",alt:"troubleshooting-kubernetes-5"})]),s("li",null,[l("创建服务时，您可以定义 "),s("code",null,"port"),l(" 和 "),s("code",null,"targetPort"),l("，但是您应该选择连接哪一个容器？ "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-6.svg",alt:"troubleshooting-kubernetes-6"})]),s("li",null,[s("code",null,"tagetPort"),l(" 和 "),s("code",null,"containerPort"),l(" 应该总是匹配。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-7.svg",alt:"troubleshooting-kubernetes-7"})]),s("li",null,[l("如果您的容器暴露了端口 3000，那么 "),s("code",null,"targetPort"),l(" 应该总是匹配这个数字。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-8.svg",alt:"troubleshooting-kubernetes-8"})])],-1),L=s("p",null,[l("如果您查看 YAML 文件，可以发现标签和 "),s("code",null,"ports"),l("/"),s("code",null,"targetPort"),l(" 应该匹配：")],-1),M=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hello-world.yaml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-deployment")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    track: canary")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      any-name: my-app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        any-name: my-app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: cont1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: learnk8s/app:1.0.0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - port: 80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    any-name: my-app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V=s("p",null,[l("Deployment 部分中的 "),s("code",null,"track: canary"),l(" 是什么意思？")],-1),B=s("p",null,"那也应该匹配吗？",-1),U=s("p",null,"该标签属于 Deployment，Service 的选择器（selector）不使用它来路由流量。",-1),O=s("p",null,"换句话说，您可以安全地删除或为其分配其他值。",-1),Y=s("p",null,[l("那么 "),s("code",null,"matchLabels"),l(" 选择器呢？")],-1),j=s("p",null,[s("strong",null,"它始终必须匹配 Pod 标签"),l("，因为它是 Deployment 用来追踪 Pod 的。")],-1),q=s("p",null,"假设您做出了正确的更改，如何测试它？",-1),z=s("p",null,"您可以使用一下命令检查 Pod 是否具有正确的标签：",-1),J=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl get pods --show-labels")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q=s("p",null,"或者您有属于多个应用的 Pod：",-1),Z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl get pods --selector any-name=my-app --show-labels")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),F=s("p",null,[l("其中 "),s("code",null,"any-time=my-app"),l(" 表示标签 "),s("code",null,"any-name: my-app"),l("。")],-1),G=s("p",null,"仍然存在问题？",-1),H=s("p",null,"您可以直接连接 Pod！",-1),W=s("p",null,[l("您可以在 kubectl 中使用 "),s("code",null,"port-forward"),l(" 命令连接 Service 并测试连接。")],-1),X=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl port-forward service/<service_name> 3000:80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ss=s("p",null,"其中：",-1),ls=s("ul",null,[s("li",null,[s("code",null,"service/<service_name>"),l(" 是 service 的名称 - 在当前 YAML 中是“my-service”。")]),s("li",null,"3000 是您想要在您的电脑中开放的端口"),s("li",null,[l("80 是 Service 中 "),s("code",null,"port"),l(" 字段暴露的端口")])],-1),ns=s("p",null,"如果您能够连接，说明设置是正确的。",-1),es=s("p",null,"如果您不能，那么您很可能配错了一个标签或者端口不匹配。",-1),os=s("h1",{id:"连接-service-和-ingress",tabindex:"-1"},[l("连接 Service 和 Ingress "),s("a",{class:"header-anchor",href:"#连接-service-和-ingress","aria-hidden":"true"},"#")],-1),ts=s("p",null,"下一步暴露您的应用的步骤是配置 Ingress。",-1),as=s("p",null,"Ingress 必须知道如何获取到 Service 然后获取到 Pod 并路由流量到它们。",-1),cs=s("p",null,"Ingress 获取根据名称和暴露的端口获取到正确的 Service。",-1),is=s("p",null,"Ingress 和 Service 中的两个属性应该匹配：",-1),rs=s("ol",null,[s("li",null,[l("Ingress 的 "),s("code",null,"servicePort"),l(" 应该匹配 Service 中的 "),s("code",null,"port")]),s("li",null,[l("Ingress 中的 "),s("code",null,"serviceName"),l(" 应该匹配 Service 中的 "),s("code",null,"name")])],-1),ps=s("p",null,"下图总结了如何连接端口：",-1),us=s("ol",null,[s("li",null,[l("您已经知道 Service 暴露了一个 "),s("code",null,"port"),l("。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-9.svg",alt:"troubleshooting-kubernetes-9"})]),s("li",null,[l("Ingress 中有一个字段叫做 "),s("code",null,"servicePort"),l("。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-10.svg",alt:"troubleshooting-kubernetes-10"})]),s("li",null,[l("Service 的 "),s("code",null,"port"),l(" 和 Ingress 的 "),s("code",null,"servicePort"),l(" 应该总是匹配。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-11.svg",alt:"troubleshooting-kubernetes-11"})]),s("li",null,[l("如果您决定分配端口 80 给 service，您应该也修改 "),s("code",null,"servicePort"),l(" 为 80。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-12.svg",alt:"troubleshooting-kubernetes-12"})])],-1),ds=s("p",null,"在实践中，您应该查看以下几行：",-1),_s=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hello-world.yaml")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - port: 80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 8080")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    any-name: my-app")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: networking.k8s.io/v1beta1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: my-ingress")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - http:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    paths:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - backend:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        serviceName: my-service")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        servicePort: 80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      path: /")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),As=s("p",null,"您该如何测试 Ingress 的功能？",-1),Cs=s("p",null,[l("您可以对 "),s("code",null,"kubectl port-forward"),l(" 使用与之前相同的策略，但是应该连接到 Ingress 控制器，而不是连接到 Service。")],-1),hs=s("p",null,"首先，使用以下命令获取 Ingress 控制器的 Pod 名称：",-1),gs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl get pods --all-namespaces")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAMESPACE   NAME                              READY STATUS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system coredns-5644d7b6d9-jn7cq          1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system etcd-minikube                     1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-apiserver-minikube           1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-controller-manager-minikube  1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-proxy-zvf2h                  1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-scheduler-minikube           1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system nginx-ingress-controller-6fc5bcc  1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ys=s("p",null,"找出 Ingress Pod（可能在其他 Namespace 中）并描述它以获取端口：",-1),ms=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl describe pod nginx-ingress-controller-6fc5bcc \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --namespace kube-system \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," | grep Ports")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Ports:         80/TCP, 443/TCP, 18080/TCP")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bs=s("p",null,"最后，连接 Pod：",-1),vs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl port-forward nginx-ingress-controller-6fc5bcc 3000:80 --namespace kube-system")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ds=s("p",null,"此时，每次您访问计算机上的端口 3000 时，请求都会转发到 Ingress 控制器 Pod 上的端口 80。",-1),ks=s("p",null,[l("如果您访问 "),s("a",{href:"http://localhost:3000/",target:"_blank",rel:"noreferrer"},"http://localhost:3000"),l("，则应该可以找到提供网页的应用程序。")],-1),Ps=s("h1",{id:"关于-port-的总结回顾",tabindex:"-1"},[l("关于 port 的总结回顾 "),s("a",{class:"header-anchor",href:"#关于-port-的总结回顾","aria-hidden":"true"},"#")],-1),fs=s("p",null,"快速回顾一下哪些端口和标签应该匹配：",-1),ws=s("ol",null,[s("li",null,"Service selector 应该匹配 Pod 的 label"),s("li",null,[l("Service 的 "),s("code",null,"targetPort"),l(" 应该匹配 Pod 中容器的 "),s("code",null,"containerPort")]),s("li",null,"Service 的 port 可以是任意值。多个 Service 可以使用相同的 port，因为它们被分配了不同的 IP 地址"),s("li",null,[l("Ingress 的 "),s("code",null,"servicePort"),l(" 应该匹配 Service 的 "),s("code",null,"port")]),s("li",null,[l("Service 的 "),s("code",null,"name"),l(" 应该匹配 Ingress 的 "),s("code",null,"serviceName")])],-1),Ss=s("p",null,"知道如何构造 YAML 定义只是故事的一部分。",-1),xs=s("p",null,"出了问题怎么办？",-1),Is=s("p",null,"Pod 可能无法启动，或者正在崩溃。",-1),Rs=s("h1",{id:"排查-kubernetes-deployment-故障的-3-个步骤",tabindex:"-1"},[l("排查 Kubernetes deployment 故障的 3 个步骤 "),s("a",{class:"header-anchor",href:"#排查-kubernetes-deployment-故障的-3-个步骤","aria-hidden":"true"},"#")],-1),$s=s("p",null,"在深入 Debug 崩溃的 Deployment 之前，必须把 Kubernetes 的工作方式铭记于心。",-1),Es=s("p",null,"由于每个 deployment 包含 3 个组件，因此您必须从底层开始依次 debug 这些组件。",-1),Ks=s("ol",null,[s("li",null,"您应该确保 Pod 处于 running 状态，然后"),s("li",null,"专注于让服务将流量路由到 Pod，然后"),s("li",null,"检查 Ingress 配置是否正确")],-1),Ns=s("p",null,"详细操作如下：",-1),Ts=s("ol",null,[s("li",null,[l("您应该从底层开始对 Deployment 进行故障排查。首先检查 Pod 就绪并正在运行。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-13.svg",alt:"troubleshooting-kubernetes-13"})]),s("li",null,[l("如果 Pod 已就绪，则应调查服务是否可以将流量分配到 Pod。 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-14.svg",alt:"troubleshooting-kubernetes-14"})]),s("li",null,[l("最后您应该检查 Service 与 Ingress 之间的连接 "),s("img",{src:"https://cos.vlinux.cn/www-vlinux-cn-blog-img/troubleshooting-kubernetes-15.svg",alt:"troubleshooting-kubernetes-15"})])],-1),Ls=s("h2",{id:"_1-排查-pod-故障",tabindex:"-1"},[l("1. 排查 Pod 故障 "),s("a",{class:"header-anchor",href:"#_1-排查-pod-故障","aria-hidden":"true"},"#")],-1),Ms=s("p",null,"大部分情况下，问题出现在 Pod 自身。",-1),Vs=s("p",null,[l("您应该确认您的 Pod 已经处于 "),s("em",null,"Running"),l(" 和 "),s("em",null,"Ready"),l(" 状态。")],-1),Bs=s("p",null,"您如何开始检查？",-1),Us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl get pods")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                    READY STATUS            RESTARTS  AGE")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"app1                    0/1   ImagePullBackOff  0         47h")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"app2                    0/1   Error             0         47h")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"app3-76f9fcd46b-xbv4k   1/1   Running           1         47h")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Os=s("p",null,[l("在上面的会话中，最后一个 Pod 已经处于 "),s("em",null,"Running"),l(" 和 "),s("em",null,"Ready"),l(" 状态 —— 然而，前两个 Pod 并未处于 "),s("em",null,"Running"),l(" 或 "),s("em",null,"Ready"),l(" 状态。")],-1),Ys=s("p",null,[s("em",null,"您如何调查出了什么问题？")],-1),js=s("p",null,"有 4 个常用的命令可以用来排查 Pod 故障：",-1),qs=s("ol",null,[s("li",null,[s("code",null,"kubectl logs <pod name>"),l(" 有助于获取 Pod 容器的日志")]),s("li",null,[s("code",null,"kubectl describe pod <pod name>"),l(" 用于获取 Pod 相关的事件列表")]),s("li",null,[s("code",null,"kubectl get po <pod name>"),l(" 用于提取存储在 Kubernetes 中的 Pod 的 YAML 定义")]),s("li",null,[s("code",null,"kubectl exec -it <pod name> bash"),l(" 用于在 Pod 内的容器中运行一个交互式命令")])],-1),zs=s("p",null,"您应该选择哪一个？",-1),Js=s("p",null,"没有一个命令是万能的。",-1),Qs=s("p",null,"相反，您应该结合使用它们。",-1),Zs=s("h3",{id:"常见-pod-错误",tabindex:"-1"},[l("常见 Pod 错误 "),s("a",{class:"header-anchor",href:"#常见-pod-错误","aria-hidden":"true"},"#")],-1),Fs=s("p",null,"Pod 可能会出现启动或运行时错误。",-1),Gs=s("p",null,"启动错误如下：",-1),Hs=s("ul",null,[s("li",null,"ImagePullBackOff"),s("li",null,"ImageInspectError"),s("li",null,"ErrImagePull"),s("li",null,"ErrImageNeverPull"),s("li",null,"RegistryUnavailavle"),s("li",null,"InvalidImageName")],-1),Ws=s("p",null,"运行时错误如下：",-1),Xs=s("ul",null,[s("li",null,"CrashLoopBackOff"),s("li",null,"RunContainerError"),s("li",null,"KillContainerError"),s("li",null,"VerifyNonRootError"),s("li",null,"RunInitContainerError"),s("li",null,"CreatePodSandboxError"),s("li",null,"ConfigPodSandboxError"),s("li",null,"KillPodSandboxError"),s("li",null,"SetupNetworkError"),s("li",null,"TeardownNetworkError")],-1),sl=s("p",null,"有些错误比其他错误更常见。",-1),ll=s("p",null,"以下是最常见的错误以及如何修复它们的列表。",-1),nl=s("h4",{id:"imagepullbackoff",tabindex:"-1"},[l("ImagePullBackOff "),s("a",{class:"header-anchor",href:"#imagepullbackoff","aria-hidden":"true"},"#")],-1),el=s("p",null,"这个错误出现的原因是 Kubernetes 不能拉取到 Pod 中的一个容器的镜像。",-1),ol=s("p",null,"有以下 3 中常见的原因：",-1),tl=s("ol",null,[s("li",null,"镜像名称无效 —— 例如，您错误输入了名称，或者镜像不存在"),s("li",null,"您为镜像指定了一个不存在的 tag"),s("li",null,"您试图拉取的镜像属于一个私有注册中心，并且 Kubernetes 没有权限访问它")],-1),al=s("p",null,"前两种情况可以通过修正镜像名称和 tag 来解决。",-1),cl=s("p",null,"对于最后一种情况，您应该将凭证添加到 Secret 中的私有注册中心，并在 Pod 中引用它。",-1),il=s("p",null,[s("a",{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",target:"_blank",rel:"noreferrer"},"官方文档中有一个如何实现此目标的示例。")],-1),rl=s("h4",{id:"crashloopbackoff",tabindex:"-1"},[l("CrashLoopBackOff "),s("a",{class:"header-anchor",href:"#crashloopbackoff","aria-hidden":"true"},"#")],-1),pl=s("p",null,"如果容器无法启动，则 Kubernetes 将 CrashLoopBackOff 消息显示为状态。",-1),ul=s("p",null,"通常，在以下情况下容器无法启动：",-1),dl=s("ol",null,[s("li",null,"应用程序中存在错误，导致无法启动"),s("li",null,[l("您"),s("a",{href:"https://stackoverflow.com/questions/41604499/my-kubernetes-pods-keep-crashing-with-crashloopbackoff-but-i-cant-find-any-lo",target:"_blank",rel:"noreferrer"},"未正确配置容器")]),s("li",null,"Liveness 探针失败次数过多")],-1),_l=s("p",null,"您应该尝试从该容器中获取日志以调查其失败的原因。",-1),Al=s("p",null,"如果由于容器重启太快而看不到日志，则可以使用以下命令：",-1),Cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl logs <pod-name> --previous")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hl=s("p",null,"以上命令会打印前一个容器错误信息。",-1),gl=s("h4",{id:"runcontainererror",tabindex:"-1"},[l("RunContainerError "),s("a",{class:"header-anchor",href:"#runcontainererror","aria-hidden":"true"},"#")],-1),yl=s("p",null,"当容器无法启动时出现错误。",-1),ml=s("p",null,"设置在容器内的应用程序启动之前。",-1),bl=s("p",null,"该问题通常是由于配置错误，例如：",-1),vl=s("ul",null,[s("li",null,"挂载不存在的卷，例如 ConfigMap 或 Secrets"),s("li",null,"将只读卷挂载为可读写")],-1),Dl=s("p",null,[l("您应该使用 "),s("code",null,"kubectl describe pod <pod-name> "),l("来收集并分析错误信息。")],-1),kl=s("h4",{id:"pod-处于-pending-状态",tabindex:"-1"},[l("Pod 处于 "),s("em",null,"Pending"),l(" 状态 "),s("a",{class:"header-anchor",href:"#pod-处于-pending-状态","aria-hidden":"true"},"#")],-1),Pl=s("p",null,[l("当您创建一个 Pod 时，该 Pod 保持处于 "),s("em",null,"Pending"),l(" 状态。")],-1),fl=s("p",null,"为什么？",-1),wl=s("p",null,"假设您的调度程序组件运行良好，原因如下：",-1),Sl=s("ol",null,[s("li",null,"集群没有足够的资源（例如 CPU 和内存）来运行 Pod"),s("li",null,"当前的 Namespace 具有 ResourceQuota 对象，创建 Pod 将使 Namespace 超过配额"),s("li",null,[l("该 Pod 绑定到了一个处于 "),s("em",null,"Pending"),l(" 状态的 PersistenVolumeClain")])],-1),xl=s("p",null,[l("最好的选择是检查 "),s("code",null,"kubectl describe"),l(" 命令中的 "),s("em",null,"Events"),l(" 部分：")],-1),Il=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl describe pod <pod name>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rl=s("p",null,"对于由于 ResourceQuotas 而造成的错误，可以使用以下方法检查集群日志：",-1),$l=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl get events --sort-by=.metadata.creationTimestamp")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),El=s("h4",{id:"pod-未处于-ready-状态",tabindex:"-1"},[l("Pod 未处于 "),s("em",null,"Ready"),l(" 状态 "),s("a",{class:"header-anchor",href:"#pod-未处于-ready-状态","aria-hidden":"true"},"#")],-1),Kl=s("p",null,[l("如果一个 Pod 处于 "),s("em",null,"Running"),l(" 状态但并未 "),s("em",null,"Ready"),l("，这说明 Readiness 探针失败了。")],-1),Nl=s("p",null,"当 Readiness 探针失败时，Pod 未连接到 Service，并且没有流量转发到该实例。",-1),Tl=s("p",null,[l("Readiness 探针失败是特定于应用程序的错误，因此您应该检查 "),s("code",null,"kubectl describe"),l(" 中的 "),s("em",null,"Events"),l(" 部分以找出错误。")],-1),Ll=s("h2",{id:"_2-排查-service-故障",tabindex:"-1"},[l("2. 排查 Service 故障 "),s("a",{class:"header-anchor",href:"#_2-排查-service-故障","aria-hidden":"true"},"#")],-1),Ml=s("p",null,[l("如果 Pod 处于 Running 状态并 "),s("em",null,"Ready"),l("，但仍无法收到应用程序的相应，则应检查 Service 的配置是否正确。")],-1),Vl=s("p",null,"Service 旨在根据 Pod 的标签将流量路由至 Pod。",-1),Bl=s("p",null,"因此，您应该检查的第一件事是 Service 匹配了多少 Pod。",-1),Ul=s("p",null,"您可以通过检查 Service 中的 Endpoint 来做到这一点：",-1),Ol=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl describe service <service-name> | grep Endpoints")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yl=s("p",null,[l("endpoint 是一对 "),s("code",null,"<ip address: port>"),l("，并且在 Service（至少）有一个 Pod，当 Service 以 Pod 为目标时。")],-1),jl=s("p",null,"如果“Endpoints”部分为空，则有两种解释：",-1),ql=s("ol",null,[s("li",null,"您并没有运行带有正确标签的 Pod（提示：您应检查自己是否在正确的 namespace）"),s("li",null,[l("您在 Service 的 "),s("code",null,"selector"),l(" 的标签中有错别字")])],-1),zl=s("p",null,[l("如果您看到了 endpoints 列表，但仍然无法访问您的应用程序，则 service 中的 "),s("code",null,"targetPort"),l(" 可能是罪魁祸首。")],-1),Jl=s("p",null,"您如何测试服务？",-1),Ql=s("p",null,[l("无论服务类型如何，都可以使用 "),s("code",null,"kubectl port-forward"),l(" 连接到它：")],-1),Zl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl port-forward service/<service-name> 3000:80")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fl=s("p",null,"其中：",-1),Gl=s("ul",null,[s("li",null,[s("code",null,"<service-name>"),l(" 是 Service 的名称")]),s("li",null,[s("code",null,"3000"),l(" 是您希望在您的电脑上开放的端口")]),s("li",null,[s("code",null,"80"),l(" 是 Service 暴露的端口")])],-1),Hl=s("h2",{id:"_3-排查-ingress-故障",tabindex:"-1"},[l("3. 排查 Ingress 故障 "),s("a",{class:"header-anchor",href:"#_3-排查-ingress-故障","aria-hidden":"true"},"#")],-1),Wl=s("p",null,"如果您已到达本节，则：",-1),Xl=s("ul",null,[s("li",null,[l("Pod 处于 "),s("em",null,"Running"),l(" 状态并 "),s("em",null,"Ready")]),s("li",null,"Service 将流量分配到了 Pod")],-1),sn=s("p",null,"但是您仍然看不到应用程序的响应。",-1),ln=s("p",null,"这意味着最有可能是 Ingress 配置错误。",-1),nn=s("p",null,"由于正在使用的 Ingress 控制器是集群中的第三方组件，因此针对 Ingress 控制器的类型有不同的调试技术。",-1),en=s("p",null,"但是在深入研究 Ingress 专用工具之前，您可以使用一些简单的方法来检查。",-1),on=s("p",null,"Ingress 使用 serviceName 和 servicePort 连接到 Service。",-1),tn=s("p",null,"您应该检查这些配置是否正确。",-1),an=s("p",null,"你可以使用以下命令检查 Ingress 是否配置正确：",-1),cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl describe ingress <ingress-name>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rn=s("p",null,[l("如果 "),s("em",null,"Backend"),l(" 列表为空，则配置中必有一个错误。")],-1),pn=s("p",null,[l("如果您可以在 "),s("em",null,"Backend"),l(" 列中看到 endpoint，但是仍然无法访问该应用程序，则可能是以下问题：")],-1),un=s("ul",null,[s("li",null,"您如何将 Ingress 暴露到互联网"),s("li",null,"您如何将集群暴露到互联网")],-1),dn=s("p",null,"您可以通过直连 Ingress Pod 将基础设施问题与 Ingress 隔离开来。",-1),_n=s("p",null,"首先，获取 Ingress 控制器的 Pod 名称（可以位于其他 namespace）：",-1),An=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl get pods --all-namespaces")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAMESPACE   NAME                              READY STATUS")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system coredns-5644d7b6d9-jn7cq          1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system etcd-minikube                     1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-apiserver-minikube           1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-controller-manager-minikube  1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-proxy-zvf2h                  1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system kube-scheduler-minikube           1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-system nginx-ingress-controller-6fc5bcc  1/1   Running")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cn=s("p",null,"描述它以获取端口：",-1),hn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl describe pod nginx-ingress-controller-6fc5bcc")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --namespace kube-system \\")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," | grep Ports")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gn=s("p",null,"最后，连接到 Pod：",-1),yn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ kubectl port-forward nginx-ingress-controller-6fc5bcc 3000:80 --namespace kube-system")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1);function mn(e,bn,vn,Dn,a,kn){const c=i;return d(),u(c,{frontmatter:a.frontmatter,data:a.data},{"main-content-md":n(()=>[A,C,h,g,y,m,b,v,D,k,P,f,w,S,x,I,R,$,E,K,N,T,L,M,V,B,U,O,Y,j,q,z,J,Q,Z,F,G,H,W,X,ss,ls,ns,es,os,ts,as,cs,is,rs,ps,us,ds,_s,As,Cs,hs,gs,ys,ms,bs,vs,Ds,ks,Ps,fs,ws,Ss,xs,Is,Rs,$s,Es,Ks,Ns,Ts,Ls,Ms,Vs,Bs,Us,Os,Ys,js,qs,zs,Js,Qs,Zs,Fs,Gs,Hs,Ws,Xs,sl,ll,nl,el,ol,tl,al,cl,il,rl,pl,ul,dl,_l,Al,Cl,hl,gl,yl,ml,bl,vl,Dl,kl,Pl,fl,wl,Sl,xl,Il,Rl,$l,El,Kl,Nl,Tl,Ll,Ml,Vl,Bl,Ul,Ol,Yl,jl,ql,zl,Jl,Ql,Zl,Fl,Gl,Hl,Wl,Xl,sn,ln,nn,en,on,tn,an,cn,rn,pn,un,dn,_n,An,Cn,hn,gn,yn]),"main-header":n(()=>[o(e.$slots,"main-header")]),"main-header-after":n(()=>[o(e.$slots,"main-header-after")]),"main-nav":n(()=>[o(e.$slots,"main-nav")]),"main-content":n(()=>[o(e.$slots,"main-content")]),"main-content-after":n(()=>[o(e.$slots,"main-content-after")]),"main-nav-before":n(()=>[o(e.$slots,"main-nav-before")]),"main-nav-after":n(()=>[o(e.$slots,"main-nav-after")]),comment:n(()=>[o(e.$slots,"comment")]),footer:n(()=>[o(e.$slots,"footer")]),aside:n(()=>[o(e.$slots,"aside")]),"aside-custom":n(()=>[o(e.$slots,"aside-custom")]),default:n(()=>[o(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const Rn=r(_,[["render",mn],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes排障指南.md"]]);export{In as __pageData,Rn as default};
