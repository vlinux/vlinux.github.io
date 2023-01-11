import{_ as c}from"./ValaxyMain-5334b760.js";import{_ as p,p as i,c as u,w as l,o as d,r as o,b as e,R as s}from"./app-a113c884.js";import"./YunFooter-2276fc1e.js";import"./YunCard-3c5e7f57.js";import"./YunPageHeader-d2dd14c2.js";const I=JSON.parse('{"title":"kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题","description":"","frontmatter":{"title":"kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题","categories":"Kubernetes","tags":["监控ControllerManager与Scheduler"],"date":"2021-03-02T15:26:00.000Z"},"headers":[{"level":2,"title":"一、问题描述","slug":"一、问题描述","link":"#一、问题描述","children":[]},{"level":2,"title":"二、新增、更改KubeControllerManager配置","slug":"二、新增、更改kubecontrollermanager配置","link":"#二、新增、更改kubecontrollermanager配置","children":[]},{"level":2,"title":"三、新增、更改KubeScheduler配置","slug":"三、新增、更改kubescheduler配置","link":"#三、新增、更改kubescheduler配置","children":[]},{"level":2,"title":"四、结果图","slug":"四、结果图","link":"#四、结果图","children":[]},{"level":2,"title":"五、参考信息","slug":"五、参考信息","link":"#五、参考信息","children":[]},{"level":2,"title":"六、参考Kube-prom项目（已优化）支持k8s-v1.18.0+","slug":"六、参考kube-prom项目（已优化）支持k8s-v1-18-0","link":"#六、参考kube-prom项目（已优化）支持k8s-v1-18-0","children":[]}],"relativePath":"pages/posts/kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题.md","lastUpdated":1671090556000}'),a=JSON.parse('{"title":"kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题","description":"","frontmatter":{"title":"kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题","categories":"Kubernetes","tags":["监控ControllerManager与Scheduler"],"date":"2021-03-02T15:26:00.000Z"},"headers":[{"level":2,"title":"一、问题描述","slug":"一、问题描述","link":"#一、问题描述","children":[]},{"level":2,"title":"二、新增、更改KubeControllerManager配置","slug":"二、新增、更改kubecontrollermanager配置","link":"#二、新增、更改kubecontrollermanager配置","children":[]},{"level":2,"title":"三、新增、更改KubeScheduler配置","slug":"三、新增、更改kubescheduler配置","link":"#三、新增、更改kubescheduler配置","children":[]},{"level":2,"title":"四、结果图","slug":"四、结果图","link":"#四、结果图","children":[]},{"level":2,"title":"五、参考信息","slug":"五、参考信息","link":"#五、参考信息","children":[]},{"level":2,"title":"六、参考Kube-prom项目（已优化）支持k8s-v1.18.0+","slug":"六、参考kube-prom项目（已优化）支持k8s-v1-18-0","link":"#六、参考kube-prom项目（已优化）支持k8s-v1-18-0","children":[]}],"relativePath":"pages/posts/kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题.md","lastUpdated":1671090556000}'),C={name:"pages/posts/kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题.md",data(){return{data:a,frontmatter:a.frontmatter}},setup(){i("pageData",a)}},h=e("h2",{id:"一、问题描述",tabindex:"-1"},[s("一、问题描述 "),e("a",{class:"header-anchor",href:"#一、问题描述","aria-hidden":"true"},"#")],-1),m=e("hr",null,null,-1),y=e("blockquote",null,[e("p",null,"在部署kube-prometheus到kubernetes集群中总会遇到一个问题，当pod都正常运行的时候，却发现kube-controller-manager和kube-scheduler并没有正常被监控到，即使是新建了新的SVC与两个Pod进行绑定但还是不行。故有此篇文章")],-1),b=e("p",null,[e("strong",null,"原因如下")],-1),k=e("p",null,"版本1.18+现在使用更安全的https端口10257，并默认禁用http。不幸的是，kube-controller-manager和kube-scheduler都使用了--secure-port绑定到127.0.0.1而不是0.0.0.0",-1),A=e("p",null,[e("strong",null,"解决方法：")],-1),g=e("p",null,"更新/etc/kubernetes/manifests/中的清单以将--bind-address 0.0.0.0用于调度程序和控制器管理器，将使用正确的绑定地址重新启动Pod，但是这些设置将无法生存kubeadm升级",-1),_=e("h2",{id:"二、新增、更改kubecontrollermanager配置",tabindex:"-1"},[s("二、新增、更改KubeControllerManager配置 "),e("a",{class:"header-anchor",href:"#二、新增、更改kubecontrollermanager配置","aria-hidden":"true"},"#")],-1),D=e("p",null,[e("strong",null,"新增service.yaml")],-1),B=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"vim"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"prometheus-kubeControllerManagerService.yaml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"apiVersion:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"v1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"kind:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"Service")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"metadata:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"namespace:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-system")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"name:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-controller-manager")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"labels:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#FFCB6B"}},"k8s-app:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-controller-manager")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"spec:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"selector:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#FFCB6B"}},"component:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-controller-manager")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"ports:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"-"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"name:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"https-metrics")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#FFCB6B"}},"port:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"10257"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#端口要和你describe到的ControllerManager的Pod端口信息一致")]),s(`
`),e("span",{class:"line"})])])],-1),F=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"vim"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"/etc/kubernetes/manifests/kube-controller-manager.yaml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"将--bind-address=127.0.0.1"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"改为"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--bind-address=0.0.0.0")]),s(`
`),e("span",{class:"line"})])])],-1),v=e("p",null,"由于kube-controller-manager是以静态Pod运行在集群中的，所以只要修改静态Pod目录下对应的yaml文件即可。等待一会后，对应服务会自动重启",-1),f=e("h2",{id:"三、新增、更改kubescheduler配置",tabindex:"-1"},[s("三、新增、更改KubeScheduler配置 "),e("a",{class:"header-anchor",href:"#三、新增、更改kubescheduler配置","aria-hidden":"true"},"#")],-1),E=e("p",null,[e("strong",null,"新增service.yaml")],-1),S=e("p",null,"vim kube-prometheus/manifests/prometheus-serviceMonitorKubeScheduler-service.yaml 输入下面内容 ：",-1),M=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"apiVersion:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"v1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"kind:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"Service")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"metadata:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"namespace:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-system")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"name:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-scheduler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"labels:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#FFCB6B"}},"k8s-app:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-scheduler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"spec:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"selector:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#FFCB6B"}},"component:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"kube-scheduler")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"ports:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#FFCB6B"}},"-"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"name:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"https-metrics")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#FFCB6B"}},"port:"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#F78C6C"}},"10259"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#676E95","font-style":"italic"}},"#端口要和你describe到的ControllerManager的Pod端口信息一致")]),s(`
`),e("span",{class:"line"})])])],-1),x=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"vim"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"/etc/kubernetes/manifests/kube-scheduler.yaml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"将--bind-address=127.0.0.1"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"改为"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"--bind-address=0.0.0.0")]),s(`
`),e("span",{class:"line"})])])],-1),$=e("p",null,"由于kube-scheduler是以静态Pod运行在集群中的，所以只要修改静态Pod目录下对应的yaml文件即可。等待一会后，对应服务会自动重启",-1),K=e("h2",{id:"四、结果图",tabindex:"-1"},[s("四、结果图 "),e("a",{class:"header-anchor",href:"#四、结果图","aria-hidden":"true"},"#")],-1),P=e("p",null,[e("img",{src:"https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20210302150944346.png",alt:"image-20210302150944346"})],-1),V=e("h2",{id:"五、参考信息",tabindex:"-1"},[s("五、参考信息 "),e("a",{class:"header-anchor",href:"#五、参考信息","aria-hidden":"true"},"#")],-1),w=e("p",null,[e("a",{href:"https://github.com/prometheus-operator/kube-prometheus/issues/718",target:"_blank",rel:"noreferrer"},"https://github.com/prometheus-operator/kube-prometheus/issues/718")],-1),U=e("h2",{id:"六、参考kube-prom项目（已优化）支持k8s-v1-18-0",tabindex:"-1"},[s("六、参考Kube-prom项目（已优化）支持k8s-v1.18.0+ "),e("a",{class:"header-anchor",href:"#六、参考kube-prom项目（已优化）支持k8s-v1-18-0","aria-hidden":"true"},"#")],-1),N=e("p",null,'[github repo="vlinux/Kube-Prometheus" /]',-1);function T(n,q,J,O,r,Z){const t=c;return d(),u(t,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":l(()=>[h,m,y,b,k,A,g,_,D,B,F,v,f,E,S,M,x,$,K,P,V,w,U,N]),"main-header":l(()=>[o(n.$slots,"main-header")]),"main-header-after":l(()=>[o(n.$slots,"main-header-after")]),"main-nav":l(()=>[o(n.$slots,"main-nav")]),"main-content":l(()=>[o(n.$slots,"main-content")]),"main-content-after":l(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":l(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":l(()=>[o(n.$slots,"main-nav-after")]),comment:l(()=>[o(n.$slots,"comment")]),footer:l(()=>[o(n.$slots,"footer")]),aside:l(()=>[o(n.$slots,"aside")]),"aside-custom":l(()=>[o(n.$slots,"aside-custom")]),default:l(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const L=p(C,[["render",T],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题.md"]]);export{I as __pageData,L as default};
