import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c06d8755.js";import{_ as d,c as A,w as n,o as C,b as s,d as e,e as a,r as t,f as u,p as h}from"./app-aa1e5b4f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-a847d205.js";import"./YunCard.vue_vue_type_style_index_0_lang-61d41b45.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-944b3777.js";const qr=JSON.parse('{"title":"K8S(kubernetes)实践认知","description":"","frontmatter":{"title":"K8S(kubernetes)实践认知","categories":"DevOps","tags":["K8s"],"date":"2020-03-09T09:16:00.000Z"},"headers":[{"level":2,"title":"Kubernetes架构介绍","slug":"kubernetes架构介绍","link":"#kubernetes架构介绍","children":[{"level":3,"title":"Kubernetes系统架构","slug":"kubernetes系统架构","link":"#kubernetes系统架构","children":[]},{"level":3,"title":"Kubernetes逻辑架构","slug":"kubernetes逻辑架构","link":"#kubernetes逻辑架构","children":[]},{"level":3,"title":"Kubernetes网络介绍","slug":"kubernetes网络介绍","link":"#kubernetes网络介绍","children":[]}]},{"level":2,"title":"使用kubeadm部署Kubernetes v1.16.4","slug":"使用kubeadm部署kubernetes-v1-16-4","link":"#使用kubeadm部署kubernetes-v1-16-4","children":[{"level":3,"title":"部署Docker","slug":"部署docker","link":"#部署docker","children":[]},{"level":3,"title":"部署kubadm和kubelet","slug":"部署kubadm和kubelet","link":"#部署kubadm和kubelet","children":[]},{"level":3,"title":"初始化集群部署Master","slug":"初始化集群部署master","link":"#初始化集群部署master","children":[]},{"level":3,"title":"部署网络插件","slug":"部署网络插件","link":"#部署网络插件","children":[]},{"level":3,"title":"部署Node节点","slug":"部署node节点","link":"#部署node节点","children":[]}]},{"level":2,"title":"公有云中的Kubernetes","slug":"公有云中的kubernetes","link":"#公有云中的kubernetes","children":[{"level":3,"title":"阿里云中的Kubernetes","slug":"阿里云中的kubernetes","link":"#阿里云中的kubernetes","children":[]},{"level":3,"title":"私有云中的Kubernetes","slug":"私有云中的kubernetes","link":"#私有云中的kubernetes","children":[]}]},{"level":2,"title":"第一步：将应用封装进容器中","slug":"第一步：将应用封装进容器中","link":"#第一步：将应用封装进容器中","children":[{"level":3,"title":"部署Harbor镜像仓库","slug":"部署harbor镜像仓库","link":"#部署harbor镜像仓库","children":[]},{"level":3,"title":"制作实验用的Docker镜像","slug":"制作实验用的docker镜像","link":"#制作实验用的docker镜像","children":[]},{"level":3,"title":"配置Docker仓库","slug":"配置docker仓库","link":"#配置docker仓库","children":[]},{"level":3,"title":"登录Harbor镜像仓库","slug":"登录harbor镜像仓库","link":"#登录harbor镜像仓库","children":[]},{"level":3,"title":"提交镜像到Registry","slug":"提交镜像到registry","link":"#提交镜像到registry","children":[]}]},{"level":2,"title":"Pod管理","slug":"pod管理","link":"#pod管理","children":[{"level":3,"title":"创建Service","slug":"创建service","link":"#创建service","children":[]},{"level":3,"title":"创建一个Headless Service","slug":"创建一个headless-service","link":"#创建一个headless-service","children":[]}]},{"level":2,"title":"10.1 Ingress Controller","slug":"_10-1-ingress-controller","link":"#_10-1-ingress-controller","children":[]},{"level":2,"title":"Ingress Controller Traefik","slug":"ingress-controller-traefik","link":"#ingress-controller-traefik","children":[{"level":3,"title":"部署Treafik","slug":"部署treafik","link":"#部署treafik","children":[]}]},{"level":2,"title":"7.1 Rancher快速入门","slug":"_7-1-rancher快速入门","link":"#_7-1-rancher快速入门","children":[]},{"level":2,"title":"7.2 使用Rancher进行日常管理","slug":"_7-2-使用rancher进行日常管理","link":"#_7-2-使用rancher进行日常管理","children":[]},{"level":2,"title":"7.3 Rancher生产集群部署","slug":"_7-3-rancher生产集群部署","link":"#_7-3-rancher生产集群部署","children":[{"level":3,"title":"Liveness探测","slug":"liveness探测","link":"#liveness探测","children":[]},{"level":3,"title":"Readiness探测","slug":"readiness探测","link":"#readiness探测","children":[]}]},{"level":2,"title":"健康检查的方法","slug":"健康检查的方法","link":"#健康检查的方法","children":[{"level":3,"title":"Pod的域名解析策略","slug":"pod的域名解析策略","link":"#pod的域名解析策略","children":[]}]},{"level":2,"title":"应用的DNS管理","slug":"应用的dns管理-1","link":"#应用的dns管理-1","children":[]},{"level":2,"title":"15.1 使用ConfigMap管理应用配置","slug":"_15-1-使用configmap管理应用配置","link":"#_15-1-使用configmap管理应用配置","children":[{"level":3,"title":"通过kubectl命令创建ConfigMap","slug":"通过kubectl命令创建configmap","link":"#通过kubectl命令创建configmap","children":[]},{"level":3,"title":"通过YAML文件创建ConfigMap","slug":"通过yaml文件创建configmap","link":"#通过yaml文件创建configmap","children":[]},{"level":3,"title":"通过文件创建ConfigMap","slug":"通过文件创建configmap","link":"#通过文件创建configmap","children":[]},{"level":3,"title":"从目录创建ConfigMap","slug":"从目录创建configmap","link":"#从目录创建configmap","children":[]},{"level":3,"title":"混合选项创建ConfigMap","slug":"混合选项创建configmap","link":"#混合选项创建configmap","children":[]},{"level":3,"title":"通过环境变量给容器传递ConfigMap","slug":"通过环境变量给容器传递configmap","link":"#通过环境变量给容器传递configmap","children":[]}]},{"level":2,"title":"15.2 使用Secret管理敏感数据","slug":"_15-2-使用secret管理敏感数据","link":"#_15-2-使用secret管理敏感数据","children":[{"level":3,"title":"配置Pod使用Harbor镜像","slug":"配置pod使用harbor镜像","link":"#配置pod使用harbor镜像","children":[]}]},{"level":2,"title":"Helm部署","slug":"helm部署","link":"#helm部署","children":[{"level":3,"title":"安装Helm","slug":"安装helm","link":"#安装helm","children":[]},{"level":3,"title":"使用Helm部署第一个应用","slug":"使用helm部署第一个应用","link":"#使用helm部署第一个应用","children":[]},{"level":3,"title":"Helm组件","slug":"helm组件","link":"#helm组件","children":[]},{"level":3,"title":"自定义Jenkins的Chart","slug":"自定义jenkins的chart","link":"#自定义jenkins的chart","children":[]}]},{"level":2,"title":"创建自己的Chart","slug":"创建自己的chart","link":"#创建自己的chart","children":[{"level":3,"title":"创建自定义Nginx的Chart","slug":"创建自定义nginx的chart","link":"#创建自定义nginx的chart","children":[]},{"level":3,"title":"查看Helm实例","slug":"查看helm实例","link":"#查看helm实例","children":[]}]},{"level":2,"title":"Prometheus快速入门","slug":"prometheus快速入门","link":"#prometheus快速入门","children":[{"level":3,"title":"Prometheus架构介绍","slug":"prometheus架构介绍","link":"#prometheus架构介绍","children":[]},{"level":3,"title":"安装Prometheus","slug":"安装prometheus","link":"#安装prometheus","children":[]},{"level":3,"title":"使用Node Exporter采集主机数据","slug":"使用node-exporter采集主机数据","link":"#使用node-exporter采集主机数据","children":[]},{"level":3,"title":"使用Prometheus UI查看数据","slug":"使用prometheus-ui查看数据","link":"#使用prometheus-ui查看数据","children":[]},{"level":3,"title":"使用Grafana进行数据可视化","slug":"使用grafana进行数据可视化","link":"#使用grafana进行数据可视化","children":[]}]},{"level":2,"title":"Taints（污点）","slug":"taints（污点）","link":"#taints（污点）","children":[{"level":3,"title":"自定义污点","slug":"自定义污点","link":"#自定义污点","children":[]}]},{"level":2,"title":"亲缘性调度","slug":"亲缘性调度","link":"#亲缘性调度","children":[{"level":3,"title":"使用Swagger UI进行API交互","slug":"使用swagger-ui进行api交互","link":"#使用swagger-ui进行api交互","children":[]}]}],"relativePath":"pages/posts/K8S(kubernetes)实践认知.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/K8S(kubernetes)实践认知.md","lastUpdated":1671090556000}'),c=JSON.parse('{"title":"K8S(kubernetes)实践认知","description":"","frontmatter":{"title":"K8S(kubernetes)实践认知","categories":"DevOps","tags":["K8s"],"date":"2020-03-09T09:16:00.000Z"},"headers":[{"level":2,"title":"Kubernetes架构介绍","slug":"kubernetes架构介绍","link":"#kubernetes架构介绍","children":[{"level":3,"title":"Kubernetes系统架构","slug":"kubernetes系统架构","link":"#kubernetes系统架构","children":[]},{"level":3,"title":"Kubernetes逻辑架构","slug":"kubernetes逻辑架构","link":"#kubernetes逻辑架构","children":[]},{"level":3,"title":"Kubernetes网络介绍","slug":"kubernetes网络介绍","link":"#kubernetes网络介绍","children":[]}]},{"level":2,"title":"使用kubeadm部署Kubernetes v1.16.4","slug":"使用kubeadm部署kubernetes-v1-16-4","link":"#使用kubeadm部署kubernetes-v1-16-4","children":[{"level":3,"title":"部署Docker","slug":"部署docker","link":"#部署docker","children":[]},{"level":3,"title":"部署kubadm和kubelet","slug":"部署kubadm和kubelet","link":"#部署kubadm和kubelet","children":[]},{"level":3,"title":"初始化集群部署Master","slug":"初始化集群部署master","link":"#初始化集群部署master","children":[]},{"level":3,"title":"部署网络插件","slug":"部署网络插件","link":"#部署网络插件","children":[]},{"level":3,"title":"部署Node节点","slug":"部署node节点","link":"#部署node节点","children":[]}]},{"level":2,"title":"公有云中的Kubernetes","slug":"公有云中的kubernetes","link":"#公有云中的kubernetes","children":[{"level":3,"title":"阿里云中的Kubernetes","slug":"阿里云中的kubernetes","link":"#阿里云中的kubernetes","children":[]},{"level":3,"title":"私有云中的Kubernetes","slug":"私有云中的kubernetes","link":"#私有云中的kubernetes","children":[]}]},{"level":2,"title":"第一步：将应用封装进容器中","slug":"第一步：将应用封装进容器中","link":"#第一步：将应用封装进容器中","children":[{"level":3,"title":"部署Harbor镜像仓库","slug":"部署harbor镜像仓库","link":"#部署harbor镜像仓库","children":[]},{"level":3,"title":"制作实验用的Docker镜像","slug":"制作实验用的docker镜像","link":"#制作实验用的docker镜像","children":[]},{"level":3,"title":"配置Docker仓库","slug":"配置docker仓库","link":"#配置docker仓库","children":[]},{"level":3,"title":"登录Harbor镜像仓库","slug":"登录harbor镜像仓库","link":"#登录harbor镜像仓库","children":[]},{"level":3,"title":"提交镜像到Registry","slug":"提交镜像到registry","link":"#提交镜像到registry","children":[]}]},{"level":2,"title":"Pod管理","slug":"pod管理","link":"#pod管理","children":[{"level":3,"title":"创建Service","slug":"创建service","link":"#创建service","children":[]},{"level":3,"title":"创建一个Headless Service","slug":"创建一个headless-service","link":"#创建一个headless-service","children":[]}]},{"level":2,"title":"10.1 Ingress Controller","slug":"_10-1-ingress-controller","link":"#_10-1-ingress-controller","children":[]},{"level":2,"title":"Ingress Controller Traefik","slug":"ingress-controller-traefik","link":"#ingress-controller-traefik","children":[{"level":3,"title":"部署Treafik","slug":"部署treafik","link":"#部署treafik","children":[]}]},{"level":2,"title":"7.1 Rancher快速入门","slug":"_7-1-rancher快速入门","link":"#_7-1-rancher快速入门","children":[]},{"level":2,"title":"7.2 使用Rancher进行日常管理","slug":"_7-2-使用rancher进行日常管理","link":"#_7-2-使用rancher进行日常管理","children":[]},{"level":2,"title":"7.3 Rancher生产集群部署","slug":"_7-3-rancher生产集群部署","link":"#_7-3-rancher生产集群部署","children":[{"level":3,"title":"Liveness探测","slug":"liveness探测","link":"#liveness探测","children":[]},{"level":3,"title":"Readiness探测","slug":"readiness探测","link":"#readiness探测","children":[]}]},{"level":2,"title":"健康检查的方法","slug":"健康检查的方法","link":"#健康检查的方法","children":[{"level":3,"title":"Pod的域名解析策略","slug":"pod的域名解析策略","link":"#pod的域名解析策略","children":[]}]},{"level":2,"title":"应用的DNS管理","slug":"应用的dns管理-1","link":"#应用的dns管理-1","children":[]},{"level":2,"title":"15.1 使用ConfigMap管理应用配置","slug":"_15-1-使用configmap管理应用配置","link":"#_15-1-使用configmap管理应用配置","children":[{"level":3,"title":"通过kubectl命令创建ConfigMap","slug":"通过kubectl命令创建configmap","link":"#通过kubectl命令创建configmap","children":[]},{"level":3,"title":"通过YAML文件创建ConfigMap","slug":"通过yaml文件创建configmap","link":"#通过yaml文件创建configmap","children":[]},{"level":3,"title":"通过文件创建ConfigMap","slug":"通过文件创建configmap","link":"#通过文件创建configmap","children":[]},{"level":3,"title":"从目录创建ConfigMap","slug":"从目录创建configmap","link":"#从目录创建configmap","children":[]},{"level":3,"title":"混合选项创建ConfigMap","slug":"混合选项创建configmap","link":"#混合选项创建configmap","children":[]},{"level":3,"title":"通过环境变量给容器传递ConfigMap","slug":"通过环境变量给容器传递configmap","link":"#通过环境变量给容器传递configmap","children":[]}]},{"level":2,"title":"15.2 使用Secret管理敏感数据","slug":"_15-2-使用secret管理敏感数据","link":"#_15-2-使用secret管理敏感数据","children":[{"level":3,"title":"配置Pod使用Harbor镜像","slug":"配置pod使用harbor镜像","link":"#配置pod使用harbor镜像","children":[]}]},{"level":2,"title":"Helm部署","slug":"helm部署","link":"#helm部署","children":[{"level":3,"title":"安装Helm","slug":"安装helm","link":"#安装helm","children":[]},{"level":3,"title":"使用Helm部署第一个应用","slug":"使用helm部署第一个应用","link":"#使用helm部署第一个应用","children":[]},{"level":3,"title":"Helm组件","slug":"helm组件","link":"#helm组件","children":[]},{"level":3,"title":"自定义Jenkins的Chart","slug":"自定义jenkins的chart","link":"#自定义jenkins的chart","children":[]}]},{"level":2,"title":"创建自己的Chart","slug":"创建自己的chart","link":"#创建自己的chart","children":[{"level":3,"title":"创建自定义Nginx的Chart","slug":"创建自定义nginx的chart","link":"#创建自定义nginx的chart","children":[]},{"level":3,"title":"查看Helm实例","slug":"查看helm实例","link":"#查看helm实例","children":[]}]},{"level":2,"title":"Prometheus快速入门","slug":"prometheus快速入门","link":"#prometheus快速入门","children":[{"level":3,"title":"Prometheus架构介绍","slug":"prometheus架构介绍","link":"#prometheus架构介绍","children":[]},{"level":3,"title":"安装Prometheus","slug":"安装prometheus","link":"#安装prometheus","children":[]},{"level":3,"title":"使用Node Exporter采集主机数据","slug":"使用node-exporter采集主机数据","link":"#使用node-exporter采集主机数据","children":[]},{"level":3,"title":"使用Prometheus UI查看数据","slug":"使用prometheus-ui查看数据","link":"#使用prometheus-ui查看数据","children":[]},{"level":3,"title":"使用Grafana进行数据可视化","slug":"使用grafana进行数据可视化","link":"#使用grafana进行数据可视化","children":[]}]},{"level":2,"title":"Taints（污点）","slug":"taints（污点）","link":"#taints（污点）","children":[{"level":3,"title":"自定义污点","slug":"自定义污点","link":"#自定义污点","children":[]}]},{"level":2,"title":"亲缘性调度","slug":"亲缘性调度","link":"#亲缘性调度","children":[{"level":3,"title":"使用Swagger UI进行API交互","slug":"使用swagger-ui进行api交互","link":"#使用swagger-ui进行api交互","children":[]}]}],"relativePath":"pages/posts/K8S(kubernetes)实践认知.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/K8S(kubernetes)实践认知.md","lastUpdated":1671090556000}'),y={name:"pages/posts/K8S(kubernetes)实践认知.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){h("pageData",c)}},m={id:"kubernetes快速入门",tabindex:"-1"},D=s("p",null,"学习Kubernetes最权威的知识来源就是Kubernetes官方文档，而且对于初学者来说，官方文档可能不是最佳选择。本章将带你循循序渐进的学习Kubernetes，后面章节会通过大量的实践案例来理解和掌握Kubernetes的知识。",-1),g={id:"kubernetes架构介绍",tabindex:"-1"},_=s("p",null,"Kubernetes 源于希腊语，意为 “舵手” 或 “飞行员”，是用于自动部署，扩展和管理容器化应用程序的开源系统，由于K和S之间有8个字母，被简称为K8S。Kubernetes 构建在 Google 15 年生产环境经验基础之上，可以将Kubernetes看作为Google内部的容器管理平台Brog的开源版本，当然他们之间是有一些差异的。",-1),b={id:"kubernetes系统架构",tabindex:"-1"},k=s("p",null,"Kubernetes被设计为Master和Node两个角色，这类似于OpenStack的架构理念，Master为控制节点，Node为计算节点或者叫工作节点，在Master节点上有一个API Server服务，对外提供标准的RestAPI，这也是Kubernetes集群的入口，意外着只要和集群进行交互必须连接到API Server上。",-1),x=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/4f93fc22b605a967fa54a2491557c04e.png",alt:"img"})],-1),f=s("p",null,[s("strong",null,"Master节点介绍")],-1),v=s("p",null,"Kubernetes Master节点主要有4个组件，API Server、Scheduler、Controller、etcd。如下图所示：",-1),P=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/0786901c59be2f756d7b979619a048b2.png",alt:"img"})],-1),S=s("ul",null,[s("li",null,[s("strong",null,"API Server"),e("：提供Kubernetes API接口，主要处理 Rest操作以及更新Etcd中的对象。是所有资源增删改查的唯一入口。")]),s("li",null,[s("strong",null,"Scheduler"),e("：绑定Pod到Node上，主要做资源调度。")]),s("li",null,[s("strong",null,"Controller Manager"),e("：所有其他群集级别的功能，目前由控制器Manager执行。资源对象的自动化控制中心，Kubernetes集群有很多控制器。")]),s("li",null,[s("strong",null,"Etcd"),e("：所有持久化的状态信息存储在Etcd中，这个是Kubernetes集群的数据库。")])],-1),E=s("p",null,[s("strong",null,"Node节点介绍")],-1),N=s("p",null,"Node节点是Kubernetes集群的工作节点，在Node节点上主要运行了Docker、Kubelet、kube-proxy三个服务（Fluentd请先忽略），如下图所示：",-1),R=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/ff26ae9ea18c1a93e50b8226abfa2fa7.png",alt:"img"})],-1),T=s("ul",null,[s("li",null,[s("strong",null,"Docker Engine"),e("：负责节点的容器的管理工作，最终创建出来的是一个Docker容器。")]),s("li",null,[s("strong",null,"Kubelet"),e("：安装在Node上的代理服务，用来管理Pods以及容器、镜像、Volume等，实现对集群对节点的管理。")]),s("li",null,[s("strong",null,"Kube-proxy"),e("：安装在Node上的网络代理服务，提供网络代理以及负载均衡，实现与Service通讯。")])],-1),K={id:"kubernetes逻辑架构",tabindex:"-1"},I=s("p",null,"在上面的介绍中提到像Pod、Service这些概念，在Kubernetes的系统架构图中并没有体现出来，这些可以理解为Kubernetes逻辑架构中的组件。也就是在Master和Node上并不具体存在的一个服务或者进程，但却是Kubernetes的组件，也是我们的管理对象。主要有Pod、Service和各种控制器等。",-1),M=s("p",null,[s("strong",null,"Pod")],-1),w=s("p",null,"Pod是Kubernetes的最小管理单元，一个Pod可以包含一组容器和卷。虽然一个Pod里面可以包含一个或者多个容器，但是Pod只有一个IP地址，而且Pod重启后，IP地址会发生变化。",-1),L=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/e2a89d5ac819b578808e62d8fee0e960.png",alt:"img"})],-1),j=s("p",null,[s("strong",null,"Controller")],-1),O=s("p",null,"一个应用如果可以有一个或者多个Pod，就像你给某一个应用做集群，集群中的所有Pod是一模一样的。Kubernetes中有很多控制器可以来管理Pod，例如下图的Replication Controller可以控制Pod的副本数量，从而实现横向扩展。",-1),G=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/c4ae2886ff4fdb51b9a0dd20a14c8e50.png",alt:"img"})],-1),U=s("p",null,"Kubernetes中有很多控制器，后面的章节我们会一一讲到，常用的控制器如下：",-1),V=s("ul",null,[s("li",null,"Replication Controller（新版本已经被ReplicaSet所替代）"),s("li",null,"ReplicaSet（新版本被封装在Deployment中）"),s("li",null,"Deployment：封装了Pod的副本管理、部署更新、回滚、扩容、缩容等功能。"),s("li",null,"DaemonSet：保证所有的Node上有且只有一个Pod在运行。"),s("li",null,"StatefulSet：有状态的应用，为 Pod 提供唯一的标识，它可以保证部署和 scale 的顺序。"),s("li",null,"Job：使用Kubernetes运行单一任务。"),s("li",null,"CronJob：使用Kubernetes运行定时任务。")],-1),H=s("p",null,[s("strong",null,"Service")],-1),Y=s("p",null,"由于Pod的生命周期是短暂的，而且每次重启Pod的IP地址都会发生变化，而且一个Pod有多个副本，也就是说一个集群中有了多个节点，就需要考虑负载均衡的问题。Kubernetes使用Service来实现Pod的访问，而且Service有一个Cluster IP，通常也称之为VIP，是固定不变的。",-1),F=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/2e61328894d1eaf548ad6ff06d85a6a3.png",alt:"img"})],-1),B={id:"kubernetes网络介绍",tabindex:"-1"},$=s("p",null,"在Kubernetes集群中存在着三种网络，分别是Node网络、Pod网络和Service网络，这几种网络之间的通信需要依靠网络插件，Kubernetes本身并没有提供，社区提供了像Flannel、Calico、Cannal等，后面章节会详述。",-1),q=s("p",null,[s("strong",null,"Node网络")],-1),J=s("p",null,"Node网络指的是Kubernetes Node节点本地的网络，在本实验环境中使用的是192.168.56.0/24这个网段，所有的Node和Master在该网段都可以正常通信。",-1),z=s("p",null,[s("strong",null,"Pod网络")],-1),W=s("p",null,"后面创建的Pod，每一个Pod都会有一个IP地址，这个IP地址网络段被称之为Pod网络，如下图所示。",-1),Z=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-hpn68 1/1 Running 0 9m7s 10.2.1.2 linux-node2.linuxhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<none> <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-r4mfq 1/1 Running 0 7m46s 10.2.1.3 linux-node2.linuxhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<none> <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),X=s("p",null,[s("strong",null,"Service网络")],-1),Q=s("p",null,"Service是为Pod提供访问和负载均衡的网络地址段，如下图所示。",-1),ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 64m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx NodePort 10.1.216.23 <none> 80:30893/TCP 8m3s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),es=s("p",null,"Kubernetes的组件和知识绝非如此，快速入门可以先了解这么多，下一章节，我们先快速的部署一个Kubernetes集群。",-1),ns={id:"使用kubeadm部署kubernetes-v1-16-4",tabindex:"-1"},ls=s("p",null,"想要快速的体验Kubernetes的功能，官方提供了非常多的部署方案，可以使用官方提供的kubeadm以容器的方式运行Kubernetes集群，也可以使用二进制方式部署更有利于理解Kubernetes的架构，我们先使用kubeadm快速的部署一个Kubernetes集群后，学习Kubernetes的使用，然后动手使用二进制的方式来深入理解Kubernetes架构。",-1),as=s("blockquote",null,[s("p",null,"注意：请不要把目光仅仅放在部署上，要慢慢的了解其本质。")],-1),os=s("p",null,"Kubernetesv1.13版本发布后，kubeadm才正式进入GA，可以生产使用。目前Kubernetes的对应镜像仓库，在国内阿里云也有了镜像站点，使用kubeadm部署Kubernetes集群变得简单并且容易了很多，本文使用kubeadm带领大家快速部署Kubernetes v1.16.2版本。",-1),ts=s("p",null,[s("strong",null,"实验环境准备")],-1),cs=s("p",null,"在本书的实验环境的基础上，我们如下来分配角色：",-1),is=s("thead",null,[s("tr",null,[s("th",null,"主机名"),s("th",null,"IP地址（NAT）"),s("th",null,"最低配置"),s("th",null,"描述")])],-1),rs=s("td",null,"eth0:192.168.56.11",-1),ps=s("td",null,"1CPU/1G内存",-1),ds=s("td",null,"Kubernets Master/Etcd节点",-1),As=s("td",null,"eth0:192.168.56.12",-1),Cs=s("td",null,"1CPU/1G内存",-1),us=s("td",null,"Kubernets Node节点",-1),hs=s("td",null,"eth0:192.168.56.13",-1),ys=s("td",null,"1CPU/1G内存",-1),ms=s("td",null,"Kubernets Node节点",-1),Ds=s("tr",null,[s("td",null,"Service网段"),s("td",null,"10.1.0.0/16"),s("td"),s("td")],-1),gs=s("tr",null,[s("td",null,"Pod网段"),s("td",null,"10.2.0.0/16"),s("td"),s("td")],-1),_s=s("tr",null,[s("td",null,"备注"),s("td",null,"如果有条件可以部署多个Kubernets node，实验效果更佳。"),s("td"),s("td")],-1),bs={id:"部署docker",tabindex:"-1"},ks=s("p",null,"首先需要在所有Kubernetes集群的节点中安装Docker和kubeadm。",-1),xs=s("p",null,[s("strong",null,"1.设置使用国内Yum源")],-1),fs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /etc/yum.repos.d/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 yum.repos.d]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vs=s("p",null,[s("strong",null,"2.安装指定的Docker版本")],-1),Ps=s("p",null,"当前v1.16.2支持的Docker版本有v1.13.1, 17.03, 17.06, 17.09, 18.06, 18.09,可以通过下面命令查看：",-1),Ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum list docker-ce.x86_64 --showduplicates | sort -r")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * updates: mirror.jdcloud.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Loading mirror speeds from cached hostfile")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Loaded plugins: fastestmirror")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * extras: mirror.jdcloud.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * epel: mirrors.njupt.edu.cn")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.4-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.3-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.2-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.1-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.0-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.9-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.8-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.7-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.6-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.5-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.4-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.3-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.2-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.1-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.0-3.el7                     docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.3.ce-3.el7                    docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.2.ce-3.el7                    docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.1.ce-3.el7                    docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.0.ce-3.el7                    docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.03.1.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.03.0.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.12.1.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.12.0.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.09.1.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.09.0.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.06.2.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.06.1.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.06.0.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.3.ce-1.el7                    docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.2.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.1.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.0.ce-1.el7.centos             docker-ce-stable")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * base: mirrors.neusoft.edu.cn")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Available Packages")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Es=s("p",null,[s("strong",null,"3.安装Docker18.09版本")],-1),Ns=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum -y install docker-ce-18.09.9-3.el7 docker-ce-cli-18.09.9-3.el7")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rs=s("p",null,[s("strong",null,"4.设置cgroup驱动使用systemd")],-1),Ts=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /etc/docker")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat > /etc/docker/daemon.json <<EOF")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'      "registry-mirrors": ["https://dx5z2hy7.mirror.aliyuncs.com"],')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'      "exec-opts": ["native.cgroupdriver=systemd"]')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ks=s("p",null,[s("strong",null,"5.启动后台进程")],-1),Is=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable docker && systemctl start docker")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ms=s("p",null,[s("strong",null,"6.查看Docker版本")],-1),ws=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker --version")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Docker version 18.09.9, build 039a7df9ba")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ls={id:"部署kubadm和kubelet",tabindex:"-1"},js=s("p",null,"在Kubernetes集群的所有节点上部署完毕Docker后，还需要全部部署kubeadm和kubelet，其中kubeadm是管理工具，kubelet是一个服务，用于启动Kubernetes对应的服务。",-1),Os=s("p",null,[s("strong",null,"1.设置kubernetes YUM仓库")],-1),Gs=s("p",null,"这里在官方文档的基础上修改为了国内阿里云的yum仓库，",-1),Us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/yum.repos.d/kubernetes.repo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[kubernetes]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=Kubernetes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repo_gpgcheck=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vs=s("blockquote",null,[s("p",null,"注意：最下面一行gpgkey的两个URL地址之间是空格，因为排版问题可能导致换行。")],-1),Hs=s("p",null,[s("strong",null,"2.安装软件包")],-1),Ys=s("p",null,"由于版本更新频繁，请指定对应的版本号，本文采用1.16.2版本，其它版本未经测试，如果不指定版本默认安装最新版本。",-1),Fs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y kubelet-1.16.2 kubeadm-1.16.2 kubectl-1.16.2 ipvsadm")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bs=s("p",null,[s("strong",null,"3.配置kubelet")],-1),$s=s("p",null,"默认情况下，Kubelet不允许所在的主机存在交换分区，后期规划的时候，可以考虑在系统安装的时候不创建交换分区，针对已经存在交换分区的可以设置忽略禁止使用Swap的限制，不然无法启动Kubelet。",-1),qs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/kubelet")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'KUBELET_CGROUP_ARGS="--cgroup-driver=systemd"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'KUBELET_EXTRA_ARGS="--fail-swap-on=false"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Js=s("p",null,"在所有节点上关闭SWAP",-1),zs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# swapoff -a")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ws=s("p",null,[s("strong",null,"4.设置内核参数")],-1),Zs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat <<EOF >  /etc/sysctl.d/k8s.conf")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"net.bridge.bridge-nf-call-ip6tables = 1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"net.bridge.bridge-nf-call-iptables = 1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"net.ipv4.ip_forward = 1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xs=s("p",null,"使配置生效",-1),Qs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# sysctl --system")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),se=s("p",null,[s("strong",null,"5.启动kubelet并设置开机启动")],-1),ee=s("p",null,"注意，此时kubelet是无法正常启动的，可以查看/var/log/messages有报错信息，等待执行初始化之后即可正常，为正常现象。",-1),ne=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable kubelet && systemctl start kubelet")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),le=s("p",null,[s("strong",null,"6.使用IPVS进行负载均衡")],-1),ae=s("p",null,"在Kubernetes集群中Kube-Proxy组件负载均衡的功能，默认使用iptables，生产环境建议使用ipvs进行负载均衡。在所有节点启用ipvs模块",-1),oe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/modules/ipvs.modules")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs_rr")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs_wrr")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs_sh")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- nf_conntrack_ipv4")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# chmod +x /etc/sysconfig/modules/ipvs.modules")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /etc/sysconfig/modules/ipvs.modules")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),te=s("p",null,"查看模块是否加载正常",-1),ce=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# lsmod | grep -e ip_vs -e nf_conntrack_ipv4")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs_sh               12688  0 ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs_wrr              12697  0 ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs_rr               12600  0 ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs                 145497  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nf_conntrack_ipv4      15053  15 ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nf_defrag_ipv4         12729  1 nf_conntrack_ipv4")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nf_conntrack          133095  7 ip_vs,nf_nat,nf_nat_ipv4,xt_conntrack,nf_nat_masquerade_ipv4,nf_conntrack_netlink,nf_conntrack_ipv4")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"libcrc32c              12644  4 xfs,ip_vs,nf_nat,nf_conntrack")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ie={id:"初始化集群部署master",tabindex:"-1"},re=s("p",null,"在所有节点上安装完毕后，在linux-node1这台Master节点上进行集群的初始化工作。",-1),pe=s("p",null,[s("strong",null,"1.导出所有默认的配置")],-1),de=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm config print init-defaults > kubeadm.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ae=s("p",null,"上面的命令会生成一个默认配置的kubeadm配置文件，然后在此基础上进行修改即可。",-1),Ce=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat kubeadm.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: kubeadm.k8s.io/v1beta2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bootstrapTokens:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- groups:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - system:bootstrappers:kubeadm:default-node-token")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  token: abcdef.0123456789abcdef")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ttl: 24h0m0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  usages:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - signing")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - authentication")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: InitConfiguration")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"localAPIEndpoint:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  advertiseAddress: 192.168.56.11  #修改为API Server的地址")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  bindPort: 6443")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nodeRegistration:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  criSocket: /var/run/dockershim.sock")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: linux-node1.example.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  taints:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - effect: NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    key: node-role.kubernetes.io/master")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiServer:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  timeoutForControlPlane: 4m0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: kubeadm.k8s.io/v1beta2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"certificatesDir: /etc/kubernetes/pki")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"clusterName: kubernetes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"controllerManager: {}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type: CoreDNS")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"etcd:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  local:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    dataDir: /var/lib/etcd")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"imageRepository: registry.aliyuncs.com/google_containers  #修改为阿里云镜像仓库")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ClusterConfiguration")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetesVersion: v1.16.2  #修改为具体的版本")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"networking:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  dnsDomain: cluster.local")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  serviceSubnet: 10.1.0.0/16   #修改Service的网络")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  podSubnet: 10.2.0.0/16      #新增Pod的网络")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scheduler: {}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---   #下面有增加的三行配置，用于设置Kubeproxy使用LVS")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: kubeproxy.config.k8s.io/v1alpha1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: KubeProxyConfiguration")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mode: ipvs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ue=s("p",null,[s("strong",null,"2. 执行初始化操作")],-1),he=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[init] Using Kubernetes version: v1.16.2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] Running pre-flight checks")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"error execution phase preflight: [preflight] Some fatal errors occurred:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [ERROR NumCPU]: the number of available CPUs 1 is less than the required 2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [ERROR Swap]: running with swap on is not supported. Please disable swa")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To see the stack trace of this error execute with --v=5 or higher")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ye=s("p",null,"如果遇到上面这样的报错，是因为在实验环境开启了交换分区，以及CPU的核数小于2造成的，可以使用--ignore-preflight-errors=进行忽略。 --ignore-preflight-errors=：忽略运行时的错误，例如上面目前存在[ERROR NumCPU]和[ERROR Swap]，忽略这两个报错就是增加--ignore-preflight-errors=NumCPU 和--ignore-preflight-errors=Swap的配置即可。",-1),me=s("p",null,"再次执行初始化操作：",-1),De=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml \\")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --ignore-preflight-errors=Swap,NumCPU ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[init] Using Kubernetes version: v1.16.2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] Running pre-flight checks")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [WARNING NumCPU]: the number of available CPUs 1 is less than the required 2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [WARNING Swap]: running with swap on is not supported. Please disable swap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] Pulling images required for setting up a Kubernetes cluster")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] This might take a minute or two, depending on the speed of your internet connection")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ge=s("p",null,"执行完毕后，会在当前输出下停留，等待下载Kubernetes组件的Docker镜像。根据你的网络情况，可以持续1-5分钟，你也可以使用docker images查看下载的镜像。镜像下载完毕之后，就会进行初始操作：",-1),_e=s("p",null,"这里省略了所有输出，初始化操作主要经历了下面15个步骤，每个阶段均输出均使用[步骤名称]作为开头：",-1),be=s("ol",null,[s("li",null,"[init]：指定版本进行初始化操作"),s("li",null,"[preflight] ：初始化前的检查和下载所需要的Docker镜像文件。"),s("li",null,"[kubelet-start]：生成kubelet的配置文件”/var/lib/kubelet/config.yaml”，没有这个文件kubelet无法启动，所以初始化之前的kubelet实际上启动失败。"),s("li",null,"[certificates]：生成Kubernetes使用的证书，存放在/etc/kubernetes/pki目录中。"),s("li",null,"[kubeconfig] ：生成 KubeConfig文件，存放在/etc/kubernetes目录中，组件之间通信需要使用对应文件。"),s("li",null,"[control-plane]：使用/etc/kubernetes/manifest目录下的YAML文件，安装 Master组件。"),s("li",null,"[etcd]：使用/etc/kubernetes/manifest/etcd.yaml安装Etcd服务。"),s("li",null,"[wait-control-plane]：等待control-plan部署的Master组件启动。"),s("li",null,"[apiclient]：检查Master组件服务状态。"),s("li",null,"[uploadconfig]：更新配置"),s("li",null,"[kubelet]：使用configMap配置kubelet。"),s("li",null,"[patchnode]：更新CNI信息到Node上，通过注释的方式记录。"),s("li",null,"[mark-control-plane]：为当前节点打标签，打了角色Master，和不可调度标签，这样默认就不会使用Master节点来运行Pod。"),s("li",null,"[bootstrap-token]：生成token记录下来，后边使用kubeadm join往集群中添加节点时会用到"),s("li",null,"[addons]：安装附加组件CoreDNS和kube-proxy")],-1),ke=s("p",null,"成功执行之后，你会看到下面的输出：",-1),xe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Your Kubernetes master has initialized successfully!")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To start using your cluster, you need to run the following as a regular user:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p $HOME/.kube")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sudo chown $(id -u):$(id -g) $HOME/.kube/config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"You should now deploy a pod network to the cluster.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://kubernetes.io/docs/concepts/cluster-administration/addons/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"You can now join any number of machines by running the following on each node")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"as root:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubeadm join 192.168.56.11:6443 --token 19fhhl.3mzkyk16tcgp6vga --discovery-token-ca-cert-hash sha256:76a88c38b673d3b2ac73e33127a809688cb3e58c533512ac6d92ecb66aa57a45")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fe=s("p",null,"如果执行失败，那意味着之前的操作存在问题，检查顺序如下：",-1),ve=s("ul",null,[s("li",null,"基础环境"),s("li",null,"主机名是否可以解析，SELinux，iptables是否关闭。"),s("li",null,"交换分区是否存在free -m查看"),s("li",null,"内核参数是否修改、IPVS是否修改（目前阶段不会造成失败）"),s("li",null,"基础软件"),s("li",null,"Docker是否安装并启动"),s("li",null,"Kubelet是否安装并启动"),s("li",null,"执行kubeadm是否有别的报错是否忽略"),s("li",null,"systemctl status kubelet查看kubelet是否启动"),s("li",null,"如果kubelet无法启动，查看日志有什么报错，并解决报错。"),s("li",null,"以上都解决完毕，需要重新初始化"),s("li",null,"kubeadm reset 进行重置（生产千万不要执行，会直接删除集群）"),s("li",null,"根据kubeadm reset 提升，清楚iptables和LVS。")],-1),Pe=s("p",null,"请根据上面输出的要求配置kubectl命令来访问集群。",-1),Se=s("p",null,[s("strong",null,"3.为kubectl准备Kubeconfig文件。")],-1),Ee=s("p",null,"kubectl默认会在执行的用户家目录下面的.kube目录下寻找config文件。这里是将在初始化时[kubeconfig]步骤生成的admin.conf拷贝到.kube/config。",-1),Ne=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir -p $HOME/.kube")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp -i /etc/kubernetes/admin.conf $HOME/.kube/config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# chown $(id -u):$(id -g) $HOME/.kube/config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Re=s("p",null,"在该配置文件中，记录了API Server的访问地址，所以后面直接执行kubectl命令就可以正常连接到API Server中。",-1),Te=s("p",null,[s("strong",null,"4.使用kubectl命令查看组件状态")],-1),Ke=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get cs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS MESSAGE ERROR")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scheduler Healthy ok")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"controller-manager Healthy ok")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'etcd-0 Healthy {"health": "true"}')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ie=s("p",null,"**知识回顾：为什么上面的输出没有显示API Server组件的状态",-1),Me=s("p",null,"因为API Server是Kubernetes集群的入口，所有和Kubernetes集群的交互都必须经过APIServer，kubectl命令也是连接到API Server上进行交互，所以如果能够正常使用kubectl执行命令，意味着API Server运行正常。",-1),we=s("p",null,[s("strong",null,"5.使用kubectl获取Node信息")],-1),Le=s("p",null,"目前只有一个节点，角色是Master，状态是NotReady。",-1),je=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get node")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.unixhot.com NotReady master 14m v1.16.2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Oe={id:"部署网络插件",tabindex:"-1"},Ge=s("p",null,"Master节点NotReady的原因就是因为没有使用任何的网络插件，此时Node和Master的连接还不正常。目前最流行的Kubernetes网络插件有Flannel、Calico、Canal，这里分别列举了Canal和Flannel，你可以选择其中之一进行部署。 因为基础的Kubernetes集群已经配置完毕，后面的增加组件等操作，几乎都可以使用kubectl和一个YAML配置文件来完成。",-1),Ue=s("p",null,"【部署canal网络插件】",-1),Ve=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/rbac.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/canal.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),He=s("p",null,"【部署Flannel网络插件】（推荐） 部署Flannel网络插件需要修改Pod的IP地址段，修改为和你初始化一直的网段，可以先下载Flannel的YAML文件修改后，再执行。",-1),Ye=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# git clone --depth 1 https://github.com/coreos/flannel.git")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd flannel/Documentation/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 Documentation]# vim kube-flannel.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# 修改"Network": "10.244.0.0/16"为"Network": "10.2.0.0/16",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"74   net-conf.json: |")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"75     {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'76       "Network": "10.2.0.0/16",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'77       "Backend": {')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'78         "Type": "vxlan"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"79       }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"80     }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 请注意，Flannel的镜像拉取速度会比较慢，可以替换为国内镜像")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# image: quay.io/coreos/flannel:v0.10.0-amd64")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 如果Node中有多个网卡，可以使用--iface来指定对应的网卡参数。")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: kube-flannel")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        command:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - /opt/bin/flanneld")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        args:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - --ip-masq")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - --kube-subnet-mgr")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - --iface=eth0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fe=s("p",null,"部署Flannel",-1),Be=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 Documentation]# kubectl create -f kube-flannel.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$e=s("p",null,"查看Pod状态",-1),qe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 Documentation]# kubectl get pod -n kube-system")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                              READY   STATUS     RESTARTS   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"coredns-58cc8c89f4-cjhdv                          0/1     Pending    0          41m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"coredns-58cc8c89f4-vdfn2                          0/1     Pending    0          41m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"etcd-linux-node1.unixhot.com                      1/1     Running    0          41m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-apiserver-linux-node1.unixhot.com            1/1     Running    0          40m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-controller-manager-linux-node1.unixhot.com   1/1     Running    1          40m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-bwsxl                       0/1     Init:0/1   0          20s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-proxy-5qrmh                                  1/1     Running    0          41m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-scheduler-linux-node1.unixhot.com            1/1     Running    1          41m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Je=s("p",null,"可以看到此时CoreDNS处于Pending状态，需要等待网络插件canal或者Flannel的Pod状态变成Running之后CoreDNS也会正常。所有Pod的状态都变成Running之后，这个时候再次获取Node，会发现节点变成了Ready状态。",-1),ze=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get node")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.unixhot.com Ready master 29m v1.16.2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),We=s("p",null,[s("em",null,"kubeadm其实使用Kubernetes部署Kubernetes，这样就存在先有鸡还是先有蛋的问题，所以，我们首先手动部署了Docker和kubelet，然后kubeadm调用kubelet以静态Pod的方式部署了Kubernetes集群中的其它组件。静态Pod在后面的章节会讲到。")],-1),Ze={id:"部署node节点",tabindex:"-1"},Xe=s("p",null,"Master节点部署完毕之后，就可以部署Node节点，首先请遵循部署Docker和kubeadm章节为Node节点部署安装好docker、kubeadm和kubelet，此过程这里不再重复列出。",-1),Qe=s("p",null,[s("strong",null,"1.在Master节点输出增加节点的命令")],-1),sn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm token create --print-join-command")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),en=s("p",null,[s("strong",null,"2.在Node节点执行")],-1),nn=s("p",null,"注意如果节点有交换分区，需要增加--ignore-preflight-errors=Swap。",-1),ln=s("p",null,"部署linux-node2",-1),an=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),on=s("p",null,"部署linux-node3",-1),tn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node3 ~]# kubeadm join 192.168.56.11:6443 --tokenisggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cn=s("p",null,"这个时候kubernetes会使用DaemonSet在所有节点上都部署canal/flannel和kube-proxy。部署完毕之后节点即部署完毕。DaemonSet的内容后面会讲解。",-1),rn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    [root@linux-node1 ~]# kubectl get daemonset --all-namespaces")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    NAMESPACE NAME DESIRED CURRENT READY UP-TO-DATE AVAILABLE NODE SELECTOR AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system canal 2 2 1 2 1 beta.kubernetes.io/os=linux 17m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-proxy 2 2 2 2 2 <none> 47m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pn=s("p",null,"待所有Pod全部启动完毕之后，节点就恢复Ready状态。",-1),dn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    [root@linux-node1 ~]# kubectl get pod --all-namespaces")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    NAMESPACE NAME READY STATUS RESTARTS AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system canal-lv92w 3/3 Running 0 8m45s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system canal-rq5n5 3/3 Running 0 23m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system coredns-78d4cf999f-5k4sg 1/1 Running 0 53m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system coredns-78d4cf999f-bnbgf 1/1 Running 0 53m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system etcd-linux-node1.linuxhot.com 1/1 Running 0 52m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-apiserver-linux-node1.linuxhot.com 1/1 Running 0 52m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-controller-manager-linux-node1.linuxhot.com 1/1 Running 0 52m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-proxy-sddlp 1/1 Running 0 53m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-proxy-tw96b 1/1 Running 0 8m45s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-scheduler-linux-node1.linuxhot.com 1/1 Running 0 52m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),An=s("strong",null,"查看所有节点",-1),Cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**如何给Node加上Roles标签**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"使用kubectl get node能够看到linux-node1.linuxhot.com的ROLES是master这个是在进行集群初始化的时候[mark-control-plane]进行标记的。")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`by adding the label "node-role.kubernetes.io/master=''"`)]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"by adding the taints [node-role.kubernetes.io/master:NoSchedule]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.查看节点的标签")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get nodes --show-labels")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION LABELS")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.linuxhot.com Ready master 48m v1.13.3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node1.linuxhot.com,node-role.kubernetes.io/master=")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node2.linuxhot.com Ready <none> 7m13s v1.13.3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node2.linuxhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.增加标签")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl label nodes linux-node2.linuxhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node-role.kubernetes.io/node=")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node/linux-node2.linuxhot.com labeled")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.查看效果")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get nodes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.linuxhot.com Ready master 50m v1.13.3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node2.linuxhot.com Ready node 8m41s v1.13.3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"### 测试Kubernetes集群 {#test}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"在上面的步骤中，我们创建了一个Kubernetes集群，1个Master和2个Node节点，在生产环境需要考虑Master的高可用，这里先不用考虑，后面会讲到。")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**1.创建一个单Pod的Nginx应用**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create deployment nginx --image=nginx:alpine")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.apps/nginx created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-9j7ql 0/1 ContainerCreating 0 10s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**2.查看Pod详细信息**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"待Pod的状态为Running后，可以获取Pod的IP地址，这个IP地址是从Master节点初始化的--pod-network-cidr=10.2.0.0/16地址段中分配的。")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-9j7ql 1/1 Running 0 59s 10.2.1.2 linux-node2.linuxhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<none> <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**3.测试Nginx访问**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head http://10.2.1.2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.15.8")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Sun, 13 Jan 2019 01:16:36 GMT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "5c240d0d-264"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**4.测试扩容**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"现在将Nginx应用的Pod副本数量拓展到2个节点")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl scale deployment nginx --replicas=2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.extensions/nginx scaled")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-9j7ql 1/1 Running 0 2m13s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-vnm4f 1/1 Running 0 5s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**5.为Nginx增加Service**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"为Nginx增加Service，会创建一个Cluster")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IP，从Master初始化的--service-cidr=10.1.0.0/16地址段中进行分配，")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"并开启NodePort是在Node节点上进行端口映射，进行外部访问。")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl expose deployment nginx --port=80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--type=NodePort")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/nginx exposed")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 88m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx NodePort 10.1.147.204 <none> 80:30599/TCP 67m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**6.测试Service的VIP**")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head http://10.1.147.204/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.15.8")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Sun, 13 Jan 2019 01:26:21 GMT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "5c240d0d-264"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),un=s("p",null,[e("``` "),s("strong",null,"7.测试NodePort，外部访问。")],-1),hn=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/1f9d523f359ce6d49515d04703d8e941.png",alt:"img"})],-1),yn=s("p",null,"这一切看起来似乎不是十分完美，但是现在你已经拥有了一个Kubernetes集群，接下来就可以继续探索Kubernetes的世界了。",-1),mn={id:"公有云中的kubernetes",tabindex:"-1"},Dn=s("p",null,"截止2019年2月，大多数公有云已经提供了容器Kubernetes的产品服务，对于使用公有云的用户来说，最佳实践是直接购买公有云产品，而非自己部署Kubernetes集群，主要是因为公有云已经将网络和存储与Kubernetes集成好了，解决了生产应用的难题。",-1),gn={id:"阿里云中的kubernetes",tabindex:"-1"},_n=s("p",null,"国内阿里云提供了容器服务 Kubernetes 版（简称 ACK）提供高性能可伸缩的容器应用管理能力，支持企业级 Kubernetes 容器化应用的全生命周期管理。容器服务 Kubernetes 版简化集群的搭建和扩容等工作，整合阿里云虚拟化、存储、网络和安全能力，打造云端最佳的 Kubernetes 容器化应用运行环境。",-1),bn=s("p",null,[s("strong",null,"阿里云Kubernetes模式")],-1),kn=s("p",null,"容器服务Kubernetes版包含了经典Dedicated Kubernetes以及Serverless两种形态，方便您按需选择。",-1),xn=s("ul",null,[s("li",null,"经典Dedicated Kubernetes模式：您可以对集群基础设施和容器应用进行更细粒度的控制，比如选择宿主机实例规格和操作系统，指定Kubernetes 版本、自定义 Kubernetes 特性开关设置等。阿里云 Kubernetes 服务负责为集群创建底层云资源，升级等自动化运维操作。而您需要规划、维护、升级服务器集群，手动或自动在集群中添加或删除服务器。"),s("li",null,"Serverless 模式：您无需创建底层虚拟化资源，可以利用 Kubernetes 命令指明应用容器镜像、CPU 和内存要求以及对外服务方式，直接启动。")],-1),fn=s("p",null,[s("strong",null,"阿里云Kubernetes产品架构")],-1),vn=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/43688d33a81f2bd6af354d0715b6b297.png",alt:"C:UsersjasonDesktop15447553537457_zh-CN.png"})],-1),Pn=s("p",null,[s("strong",null,"阿里云Kubernetes创建")],-1),Sn=s("p",null,"默认情况下可以在阿里云中自行创建5个集群，每个集群最多可以添加 40 个节点。如需更高配额，需要提交工单申请。",-1),En=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/4c165d0ebc842862595f9fd0f4650d43.png",alt:"img"})],-1),Nn=s("p",null,"阿里云将网络、存储、安全等方面已经进行了深度集成，在创建Kubernetes集群时，阿里云容器服务提供两种网络插件：Terway和Flannel：",-1),Rn=s("ul",null,[s("li",null,"Flannel：使用的是简单稳定的社区的Flannel CNI插件，配合阿里云的VPC的高速网络，能给集群高性能和稳定的容器网络体验，但功能偏简单，支持的特性少，例如：不支持基于Kubernetes标准的Network Policy。"),s("li",null,"Terway：是阿里云容器服务自研的网络插件，功能上完全兼容Flannel，支持将阿里云的弹性网卡分配给容器，支持基于Kubernetes标准的NetworkPolicy来定义容器间的访问策略，支持对单个容器做带宽的限流。对于不需要使用Network Policy的用户，可以选择Flannel，其他情况建议选择Terway。了解更多Terway网络插件的相关内容，请参见Terway网络插件。")],-1),Tn=s("p",null,"最终阿里云会使用kubeadm帮你创建一个指定版本的Kubernetes集群。",-1),Kn={id:"私有云中的kubernetes",tabindex:"-1"},In=s("p",null,[s("strong",null,"内网部署Kubernetes")],-1),Mn=s("p",null,"很多企业需要内网部署Kubernetes但是内网又无法访问外网，就需要本地化部署，无忘了本地话部署主要包括两个方面，一个是软件仓库的准备，一个是Kubernetes镜像的准备。",-1),wn=s("ol",null,[s("li",null,"准备内网YUM仓库（略）"),s("li",null,"准备Docker Registry（请参考Harbor章节）"),s("li",null,"下载并提交镜像到Harbor中，然后将Harbor的镜像部署直接COPY到生产环境中")],-1),Ln=s("p",null,"下载脚本如下，请根据需求自行修改：",-1),jn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim k8s-images.sh")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# EVN")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ALIYUN_REG="registry.aliyuncs.com/google_containers"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'FLANNEL_REG="quay-mirror.qiniu.com/coreos"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'LOCAL_REG="192.168.56.11/kubernetes"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"K8S_VER=v1.15.5")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PAUSE_VER=3.1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ETCD_VER=3.3.10")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COREDNS_VER=1.3.1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FLANNEL_VER=v0.11.0-amd64")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Kubernetes Docker Images")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IMAGES=(")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-proxy:${K8S_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-scheduler:${K8S_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-controller-manager:${K8S_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-apiserver:${K8S_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  pause:${PAUSE_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  etcd-amd64:${ETCD_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  coredns:${COREDNS_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for IMAGE in ${IMAGES[@]}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"do")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  docker pull ${ALIYUN_REG}/${IMAGE}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  docker tag ${ALIYUN_REG}/${IMAGE} ${LOCAL_REG}/${IMAGE}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  #docker push ${LOCAL_REG}/${IMAGES}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"done")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Flannel")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker pull ${FLANNEL_REG}/flannel:${FLANNEL_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker tag ${FLANNEL_REG}/flannel:${FLANNEL_VER} ${LOCAL_REG}/flannel:${FLANNEL_VER}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),On={id:"第五部分-将应用迁移至kubernetes",tabindex:"-1"},Gn={id:"_6-第一步：将应用封装进容器中",tabindex:"-1"},Un={id:"第一步：将应用封装进容器中",tabindex:"-1"},Vn=s("p",null,"在之前的容器镜像实战中，我们已经学习了如何将应用容器化，这里我们将下载使用两个官方的Nginx镜像来完成接下来的实验。",-1),Hn={id:"部署harbor镜像仓库",tabindex:"-1"},Yn=s("p",null,"生产环境中可以使用Harbor来管理Docker镜像，请参考之前章节的内容完成Harbor镜像仓库的部署工作，并在Harbor中创建一个devopsedu的项目。",-1),Fn=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/093b4b731c05b54a1b8426e924f93d45.png",alt:"img"})],-1),Bn={id:"制作实验用的docker镜像",tabindex:"-1"},$n=s("p",null,"这里不再演示Docker镜像的构建，直接下载两个官方镜像作为案例。",-1),qn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker pull nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker pull nginx:1.14.0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jn={id:"配置docker仓库",tabindex:"-1"},zn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root\\@linux-node1 ~]# vim /etc/docker/daemon.json")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "insecure-registries" : ["http://192.168.56.11"]')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart docker")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wn={id:"登录harbor镜像仓库",tabindex:"-1"},Zn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker login 192.168.56.11")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Username: admin")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WARNING! Your password will be stored unencrypted in /root/.docker/config.json.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Configure a credential helper to remove this warning. See")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    https://docs.docker.com/engine/reference/commandline/login/\\#credentials-store")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Login Succeeded")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xn={id:"提交镜像到registry",tabindex:"-1"},Qn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker tag nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11/devopsedu/nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker tag nginx:1.14.0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11/devopsedu/nginx:1.14.0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.14.0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),sl=s("p",null,"在上面的步骤中，模拟了生产环境如何构建和提交镜像，如果对于构建和提交镜像有疑问可以复习第3章的内容。",-1),el={id:"_7-第二步：将容器封装到pod中",tabindex:"-1"},nl=s("p",null,"Pod是Kubernetes最小的管理单元，一个Pod可以代表一个运行在集群里的进程。之前是在宿主机上运行不同的进程，现在是运行不同的Pod。前面介绍过Pod是一个逻辑架构的组件，Pod里封装了一个（或者多个）应用容器，存储资源和IP地址。",-1),ll=s("p",null,[s("strong",null,"为什么要造一个Pod出来？"),e(" 学习Kubernetes遇到的最多的名称可能就是Pod了，其它开源的容器管理平台例如Mesos直接管理和调度的是容器，但是Kubernetes确是Pod，它在容器上面做了一层封装，方便用户将一组紧耦合的容器，放置在一个共享资源的单元中。对于很多没有此类场景的初学者，可以暂时将Pod看做是容器的一个壳，你也完全可以只在Pod中运行一个容器，随着学习的深入再慢慢理解。 Kubernetes运行Pod的两种方式：")],-1),al=s("ul",null,[s("li",null,"Pod里只运行一个单独容器，是Kubernetes最常见的使用场景；在这种情况下，可以把Pod看做是一个单独容器的连接器，Kubernetes通过Pod去管理容器，作为使用者几乎不用关心容器。"),s("li",null,"Pod里运行多个有关系容器。例如如果使用Nginx+Tomcat运行Java应用，可以制作一个镜像里面包含了Nginx+Tomcat，也可以分别制作两个镜像Nginx镜像和Tomcat镜像，如果使用Kubernetes就需要使用Pod，如果将Nginx和Tomcat单独放在两个Pod里面来管理，就会面临很多很多问题。这个时候，就可以把这两个容器放置在一个Pod中。")],-1),ol={id:"pod管理",tabindex:"-1"},tl=s("p",null,"在Kubernetes中使用YAML格式来描述一个Pod。",-1),cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nginx-pod.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- containerPort: 80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),il=s("p",null,"Pod的YAML描述内容还有很多，在使用kubeadm部署Kubernetes的时候，就是使用静态Pod的方式运行的相关服务，YAML文件存放在，当然现在很多配置还是看不懂的，带着问题继续学习。",-1),rl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ls -l /etc/kubernetes/manifests/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 16")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2041 Feb 11 20:33 etcd.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2700 Feb 11 20:33 kube-apiserver.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2345 Feb 11 20:33 kube-controller-manager.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 1080 Feb 11 20:33 kube-scheduler.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pl=s("p",null,"创建Pod",-1),dl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nginx-pod.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'pod "nginx-pod" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Al=s("p",null,"查看Pod",-1),Cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY     STATUS    RESTARTS   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-pod                           1/1       Running   0          49s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ul=s("p",null,"查看Pod更多信息",-1),hl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY     STATUS    RESTARTS   AGE       IP           NODE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-pod  1/1       Running   0          1m        10.2.53.18   192.168.56.13")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yl=s("p",null,"查看Pod详情",-1),ml=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe pod nginx-pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         nginx-pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Node:         192.168.56.13/192.168.56.13")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Start Time:   Sat, 02 Jun 2018 06:42:53 +0800")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       app=nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Status:       Running")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IP:           10.2.53.18")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dl=s("p",null,"查看Pod日志",-1),gl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl logs pod/nginx-pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_l=s("p",null,[s("strong",null,"Pod中的镜像拉取策略"),e(" 当kubelet尝试拉取指定的镜像时，[imagePullPolicy]和镜像的标签会生效。")],-1),bl=s("ul",null,[s("li",null,"imagePullPolicy: IfNotPresent：仅当镜像在本地不存在时镜像才被拉取。"),s("li",null,"imagePullPolicy: Always：每次启动 pod 的时候都会拉取镜像。")],-1),kl=s("p",null,"省略imagePullPolicy，镜像标签为:latest或被省略，Always被应用。 imagePullPolicy被省略，并且镜像的标签被指定且不是:latest，IfNotPresent被应用。 imagePullPolicy: Never：镜像被假设存在于本地。 没有尝试拉取镜像。",-1),xl={id:"_7-3-第三步：使用controllers管理pod",tabindex:"-1"},fl=s("p",null,"在实际的生产环境中，我们其实很少单独创建Pod，而是通过控制器来进行Pod的管理，Kubernetes提供了很多的控制器，一个 Controllers 可以创建和管理很多个 Pod, 也提供复制、初始化，以及提供集群范围的自我恢复的功能。比如说： 如果一个节点宕机，Controller 将调度一个在其他节点上完全相同的 pod 来自动取代当前的 pod。",-1),vl={id:"_8-1-replication-controller控制器",tabindex:"-1"},Pl={id:"_8-2-replica-sets控制器",tabindex:"-1"},Sl={id:"_8-3-deployment控制器",tabindex:"-1"},El={id:"_8-4-daemonset控制器",tabindex:"-1"},Nl=s("p",null,"DaemonSet 确保全部（或者一些）Node 上运行一个 Pod 的副本。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。 使用 DaemonSet 的一些典型用法：",-1),Rl=s("ul",null,[s("li",null,"运行集群存储 daemon，例如在每个 Node 上运行 glusterd、ceph。"),s("li",null,"在每个 Node 上运行日志收集 daemon，例如filebeat、logstash。"),s("li",null,"在每个 Node 上运行监控 daemon，例如 Prometheus Node Exporter、collectd、Datadog 代理、Zabbix Agent。")],-1),Tl=s("p",null,[s("strong",null,"创建DaemonSet")],-1),Kl=s("p",null,"DaemonSet的描述文件和Deployment非常相似，只需要修改Kind，并去掉副本数量的配置即可",-1),Il=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 example]# vim nginx-daemonset.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: DaemonSet")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-daemonset")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ml=s("p",null,"查看Pod在Node上的分布",-1),wl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                    READY     STATUS    RESTARTS   AGE       IP           NODE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-daemonset-hk28q   1/1       Running   0          1m        10.2.56.10   192.168.56.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-daemonset-wtt68   1/1       Running   0          1m        10.2.53.10   192.168.56.13")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get daemonset")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME              DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-daemonset   2         2         2         2            2           <none>          1m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ll={id:"_7-4-第四步：使用service管理pod访问",tabindex:"-1"},jl=s("p",null,"在上面的小节，我们通过Deployment可以为一个应用创建多个Pod，而且可以动态的进行增加、或者删除多余的Pod，Kubernetes Pod 是有生命周期的，它们可以被创建，也可以被销毁，但是每次Pod的IP地址就会发生变化，外面如何访问到该Pod呢？总不能每次Pod重启就修改访问的IP地址吧。 每个 Pod 都会获取它自己的 IP 地址，但是每次即使这些 IP 地址不总是稳定可依赖的。 这会导致一个问题：在 Kubernetes 集群中，如果一组 Pod（称为 backend）为其它 Pod （称为 frontend）提供服务，那么那些 frontend 该如何发现，并连接到这组 Pod 中的哪些 backend 呢？",-1),Ol={id:"_9-1-service介绍和管理",tabindex:"-1"},Gl={id:"创建service",tabindex:"-1"},Ul=s("p",null,"继续我们Nginx的案例，我们为之前的应用创建一个Service",-1),Vl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat nginx-service.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - protocol: TCP")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port: 80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hl=s("ul",null,[s("li",null,"第1行：定义资源类型为Service"),s("li",null,"第2行：定义当前Service API的版本"),s("li",null,"第3行：metadata设置"),s("li",null,"第4行：设置Service的名称为nginx-service"),s("li",null,"第5行：spec: 开始设置Service的内容"),s("li",null,"第6行：selector: 为该Service指定一个匹配的标签"),s("li",null,"第7行：app: nginx 所有带有标签app ：nginx的Pod将使用该Service"),s("li",null,"第8行：ports: 指定Service需要对外的端口"),s("li",null,"第9行：设置端口协议：支持TCP和UDP"),s("li",null,"第10行：设置Service的端口"),s("li",null,"第11行：设置Pod的端口，Kubernetes会将发送给Service端口的连接，转发到Pod的端口上。")],-1),Yl=s("p",null,"创建Nginx Service",-1),Fl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nginx-service.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'service "nginx-service" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bl=s("p",null,"查看Nginx Service",-1),$l=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes      ClusterIP   10.1.0.1      <none>        443/TCP   7h")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-service   ClusterIP   10.1.184.53   <none>        80/TCP    25s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ql=s("p",null,"访问Servce IP",-1),Jl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head 10.1.181.45")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.11.10")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Tue, 21 Feb 2017 08:20:42 GMT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Tue, 14 Feb 2017 15:36:04 GMT")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "58a323e4-264"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zl={id:"_9-2-service和endpoint",tabindex:"-1"},Wl=s("p",null,"Service作为Kubernetes中为Pod实现负载均衡的组件，几乎在所有的文章中为了方便初学者理解，基本上说的是Service会来监听Pod的变化，然后来更新Pod的IP地址。其实这个事情不是Service干的，而是有一个幕后英雄：Endpoint Endpoints表示了一个Service对应的所有Pod副本的访问地址，而Endpoints Controller负责生成和维护所有Endpoints对象的控制器。它负责监听Service和对应的Pod副本的变化。",-1),Zl=s("ul",null,[s("li",null,"如果监测到Service被删除，则删除和该Service同名的Endpoints对象；"),s("li",null,"如果监测到新的Service被创建或修改，则根据该Service信息获得相关的Pod列表，然后创建或更新Service对应的Endpoints对象。"),s("li",null,"如果监测到Pod的事件，则更新它对应的Service的Endpoints对象。")],-1),Xl=s("p",null,"kube-proxy进程获取每个Service的Endpoints，实现Service的负载均衡功能。",-1),Ql={id:"创建一个headless-service",tabindex:"-1"},sa=s("p",null,"编写一个Service不使用clusterip",-1),ea=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat mysql-service.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: mysql-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - protocol: TCP")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port: 3306")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 3306")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  clusterIP: None")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f mysql-service.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'service "mysql-service" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),na=s("p",null,"查看Service，可以放心CLUSTER-IP为None",-1),la=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service mysql-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mysql-service   ClusterIP   None         <none>        3306/TCP   17s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),aa=s("p",null,"2.创建一个Endpoint",-1),oa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim mysql-endpoint.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Endpoints")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," name: mysql-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subsets:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- addresses:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - ip: 192.168.56.13")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - port: 3306")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    protocol: TCP")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f mysql-endpoint.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'endpoints "mysql-service" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ta=s("p",null,"3.查看Service和Endpoint的关联",-1),ca=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get ep mysql-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            ENDPOINTS            AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mysql-service   192.168.56.13:3306   42s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe svc mysql-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:              mysql-service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:         default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:            <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:       <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Selector:          <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type:              ClusterIP")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IP:                None")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Port:              <unset>  3306/TCP")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TargetPort:        3306/TCP")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Endpoints:         192.168.56.13:3306")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Session Affinity:  None")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:            <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ia={id:"_7-5-第五步：使用ingress提供外部访问",tabindex:"-1"},ra=s("p",null,"通过Service可以将Kubernetes集群中的服务以IP：Port的方式暴露出来，我们称之为4层的负载均衡，因为这个是OSI七层模型中传输层的功能。",-1),pa=s("p",null,"那么如何实现七层的负载均衡呢，例如像Nginx那样，可以灵活的进行反向代理的设置，根据不同的URL进行转发等，难道我需要自己部署一个Nginx来做这个事情吗？首先，如果你有这个想法，并没有错，甚至你完全可以自己独立部署一个Nginx来完成，但是Kubernetes提供了更好的解决方案就是Ingress。 Ingress就是从kubernetes集群外访问集群的入口，将用户的URL请求转发到不同的service上。ingress相当于nginx反向代理服务器，它包括的规则定义就是URL的路由信息。",-1),da={id:"_10-1-ingress-controller",tabindex:"-1"},Aa=s("p",null,"在学习Service的时候，我们知道最终的负载均衡由kube-proxy和LVS来完成，那么Ingress靠什么来实现7层的路由机制呢？答案是Ingress Controller。",-1),Ca=s("p",null,"Ingress Controller 实质上可以理解为是个监视器，Ingress Controller 通过不断地跟 kubernetes API 打交道，实时的感知后端 service、pod 等变化，比如新增和减少 pod，service 增加与减少等；当得到这些变化信息后，Ingress Controller 再结合下文的 Ingress 生成配置，然后更新反向代理负载均衡器，并刷新其配置，达到服务发现的作用。",-1),ua=s("p",null,"Ingress Controller目前有两大开源项目，一个是Nginx Controller，一个是目前比较流行的Traefik，Traefik是一款开源的反向代理与负载均衡工具。它最大的优点是能够与常见的微服务系统直接整合，可以实现自动化动态配置。目前支持Docker, Swarm, Mesos/Marathon, Mesos, Kubernetes, Consul, Etcd, Zookeeper, BoltDB, Rest API等等后端模型。",-1),ha={id:"ingress-controller-traefik",tabindex:"-1"},ya={id:"部署treafik",tabindex:"-1"},ma=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl label nodes 192.168.56.12 edgenode=true")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'node "192.168.56.12" labeled')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f /srv/addons/ingress/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Da={id:"_11-第六步：使用pv和pvc管理数据存储",tabindex:"-1"},ga=s("p",null,"截止目前我们所启动Pod的容器中的数据存储都是临时的，因此Pod重启或者被删除的时候，产生在容器中的数据会发生丢失。实际应用中，我们有些应用是无状态，有些应用则需要保持状态数据，确保Pod重启之后能够读取到之前的状态数据，有些应用则作为集群提供服务。这三种服务归纳为无状态服务、有状态服务以及有状态的集群服务，其中后面两个存在数据保存与共享的需求，因此就要采用容器外的存储方案。 Kubernetes中存储中有四个重要的概念：Volume、PersistentVolume（PV）、PersistentVolumeClaim （PVC）、StorageClass。掌握了这四个概念，就掌握了Kubernetes中存储系统的核心。",-1),_a={id:"_11-1-kubernetes-volume",tabindex:"-1"},ba={id:"_11-2-persistentvolume（pv）",tabindex:"-1"},ka=s("p",null,"PersistentVolume（PV）是由管理员设置的存储，它是群集的一部分。就像节点是集群中的资源一样，PV 也是集群中的资源。 PV 是 Volume 之类的卷插件，但具有独立于使用 PV 的 Pod 的生命周期。此 API 对象包含存储实现的细节，即 NFS、iSCSI 或特定于云供应商的存储系统。",-1),xa=s("p",null,[s("strong",null,"1.安装并配置NFS")],-1),fa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y nfs-utils rpcbind")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir -p /data/k8s-nfs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/exports")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/data/k8s-nfs *(rw,sync,no_root_squash)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),va=s("p",null,"启动NFS",-1),Pa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable rpcbind nfs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start rpcbind nfs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sa=s("p",null,[s("strong",null,"2.创建并查看PV")],-1),Ea=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nfs-pv.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: PersistentVolume")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: pv-demo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  capacity:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"storage: 1Gi")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  volumeMode: Filesystem")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  accessModes:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - ReadWriteOnce")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  persistentVolumeReclaimPolicy: Recycle")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  storageClassName: nfs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  nfs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    path: /data/k8s-nfs/pv-demo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    server: 192.168.56.11")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nfs-pv.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'persistentvolume "pv-demo" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Na=s("p",null,"查看创建的PV",-1),Ra=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pv")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM     STORAGECLASS   REASON    AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pv-demo   1Gi        RWO            Recycle          Available             nfs                      15s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ta={id:"_11-3-persistentvolumeclaim（pvc）",tabindex:"-1"},Ka=s("p",null,"PersistentVolumeClaim（PVC）是用户存储的请求。它与 Pod 相似。Pod 消耗节点资源，PVC 消耗 PV 资源。Pod 可以请求特定级别的资源（CPU 和内存）。声明可以请求特定的大小和访问模式（例如，可以以读/写一次或 只读多次模式挂载）。",-1),Ia=s("p",null,"1.创建PVC",-1),Ma=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nfs-pvc.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: PersistentVolumeClaim")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: pvc-demo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  accessModes:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - ReadWriteOnce")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  resources:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    requests:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      storage: 1Gi")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  storageClassName: nfs")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wa=s("p",null,"创建并查看PVC",-1),La=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nfs-pvc.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'persistentvolumeclaim "pvc-demo" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pvc")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME       STATUS    VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pvc-demo   Bound     pv-demo   1Gi        RWO            nfs            6s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ja=s("p",null,"2.使用PVC",-1),Oa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nginx-deployment-pvc.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-deployment")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  replicas: 3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        volumeMounts:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        - mountPath: "/usr/share/nginx/html"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name: pvc-demo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      volumes:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: pvc-demo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        persistentVolumeClaim:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          claimName: pvc-demo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ga={id:"_11-4-storageclass",tabindex:"-1"},Ua={id:"_7-第七步：使用rancher管理kubernetes集群",tabindex:"-1"},Va=s("p",null,"现在我们已经具备把应用迁移到Kubernetes中来的能力，那么现在，迁移后，日常的运维工作就发生的变化，截止目前，在生产环境中，我们很少使用官方自带的Dashbaord来完成日常的运维工作，而是使用第三方的运维工具Rancher。",-1),Ha={id:"_7-1-rancher快速入门",tabindex:"-1"},Ya=s("p",null,"快速部署单机版Rancher",-1),Fa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /opt/rancher")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher/ -p 80:80 -p 443:443 rancher/rancher")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ba={id:"_7-2-使用rancher进行日常管理",tabindex:"-1"},$a={id:"_7-3-rancher生产集群部署",tabindex:"-1"},qa={id:"第六部分-管理kubernetes中的应用",tabindex:"-1"},Ja={id:"_13-应用的资源限制和健康检查",tabindex:"-1"},za={id:"_13-1-应用的资源限制",tabindex:"-1"},Wa={id:"_13-2-应用的健康检查",tabindex:"-1"},Za={id:"liveness探测",tabindex:"-1"},Xa=s("p",null,"Kubernetes有两种探测机制，Liveness和Readiness，配置都是相似的，只是实现的功能不同。 Liveness探测是针对Pod健康状态的探测，类似于集群中的健康检查，用户可以自定义这个健康检查的条件，如果探测失败，Kubernetes将会重启容器。 如果您希望容器在探测失败时被杀死并重新启动，那么请指定一个Liveness配置，并指定restartPolicy 为 Always 或 OnFailure。 配置案例",-1),Qa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"livenessProbe:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"exec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    command:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - ps aux | grep nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"initialDelaySeconds: 10")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"periodSeconds: 5")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"timeoutSeconds: 3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),so={id:"readiness探测",tabindex:"-1"},eo=s("p",null,"Readiness探测是探测Pod是否准备好对外提供访问，例如我们在Pod里面运行一个Tomcat的容器，里面运行了一个Jenkins的应用，那么等Jenkins完全启动能提供服务可能需要1分钟，所以在在1分钟之前是不能提供给用户访问的，也就是不能加入Service的负载均衡中，这个就靠Readiness探测来控制。 Readiness用来控制告诉Kubernetes什么时间可以将容器加入到Service的负载均衡中，配置方法和Liveness一样，只需要修改livennessProbe替换为readinessProbe即可。",-1),no={id:"健康检查的方法",tabindex:"-1"},lo=s("p",null,"Kubernetes的健康检查是由运行在各个Node上的kubelet来完成的，kubelet目前支持以下三种健康检查的方法：",-1),ao=s("ul",null,[s("li",null,"ExecAction：在容器中执行指定的命令。如果命令退出时状态码为0，则认为诊断成功。"),s("li",null,"TCPSocketAction:对指定端口上容器的IP地址执行TCP检查。如果端口是打开的，则认为诊断是成功的。"),s("li",null,"HTTPGetAction:对指定端口和路径上容器的IP地址执行HTTP Get请求。如果响应的状态码大于或等于200，小于400，则认为诊断是成功的。")],-1),oo=s("p",null,"以上三种健康检查的方法会有三种返回结果：",-1),to=s("li",null,[s("p",null,"Success：成功，容器通过诊断。")],-1),co=s("li",null,[s("p",null,"Failure：失败，容器诊断失败。")],-1),io=s("li",null,[s("p",null,"Unknown：探测失败，无法执行探测，所以不应该采取任何行动。"),s("p",null,"针对于探针有以下配置参数，需要注意不管是Liveness还是Readiness探测，探针的使用都是相同的，唯一的不同是探测完毕后，执行操作的不同。")],-1),ro=s("li",null,[s("p",null,"initialDelaySeconds: 探测的延迟时间，单位是秒。也就是说在容器启动多少秒之后开始进行第一次探测，例如你启动一个Java的应用需要50秒，那么这个值就需要大于50s。所以这个值是需要根据应用的具体情况来设置。")],-1),po=s("li",null,[s("p",null,"periodSeconds：探测执行的周期时间，单位是秒。是指每隔多长时间执行一次探测，频率越高，发现故障的时间也就越短，并不是越短越好。如果应用服务不够稳定，太高的频率反而会导致很多你认为的“误报”。默认是10秒，最小值是1秒。")],-1),Ao=s("li",null,[s("p",null,"timeoutSeconds: 探测超时时间，单位是秒，执行探测如果超过这个时间没有返回结果，变意味着探测的结果是失败。默认为1秒。最小值是1秒。")],-1),Co=s("li",null,[s("p",null,"failureThreshold：探测成功后，最少连续探测失败多少次才被认定为失败。这个是Kubernetes将在放弃之前尝试失败阈值时间。放弃生命探测意味着重新启动Pod。一旦准备就绪，Pod将被标记为未准备就绪。默认为3。最小值是1。")],-1),uo=s("p",null,"successThreshold: 在探测失败后，最少连续探测成功多少次才被认定为成功。默认为1，也就是必须探测成功1次，才能认为状态恢复，最小值是1。",-1),ho={id:"管理应用的dns访问",tabindex:"-1"},yo={id:"_14-1-kubernetes中的dns",tabindex:"-1"},mo={id:"应用的dns管理",tabindex:"-1"},Do={id:"pod的域名解析策略",tabindex:"-1"},go=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl run dns-test --generator=run-pod/v1 --image=alpine --replicas=1 sleep 360000")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pod/dns-test created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_o=s("p",null,"查看Pod",-1),bo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod dns-test")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME       READY   STATUS    RESTARTS   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns-test   1/1     Running   0          79s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ko=s("p",null,"Pod默认的DNS配置",-1),xo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl exec -it dns-test /bin/sh")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/ # cat /etc/resolv.conf ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nameserver 10.1.0.10")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"search default.svc.cluster.local svc.cluster.local cluster.local")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"options ndots:5")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fo=s("p",null,"如何访问Service名称",-1),vo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/ # ping -c 3 wordpress-service.default.svc.cluster.local")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PING wordpress-service.default.svc.cluster.local (10.1.92.244): 56 data bytes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 10.1.92.244: seq=0 ttl=64 time=0.074 ms")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 10.1.92.244: seq=1 ttl=64 time=0.141 ms")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 10.1.92.244: seq=2 ttl=64 time=0.187 ms")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--- wordpress-service.default.svc.cluster.local ping statistics ---")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3 packets transmitted, 3 packets received, 0% packet loss")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"round-trip min/avg/max = 0.074/0.134/0.187 ms")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Po=s("p",null,"DNS查询策略",-1),So=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod dns-test -o yaml | grep dnsPolicy")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  dnsPolicy: ClusterFirst")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Eo=s("ul",null,[s("li",null,"Default: Pod从其运行的节点中继承名称解析配置。"),s("li",null,"ClusterFirst:（默认策略）与配置的群集域名后缀不匹配的任何DNS查询都将转发到从节点继承的上游名称服务器。"),s("li",null,"ClusterFirstWithHostNet: 如果Pod使用了hostNetwork（例如Ingress Controller Treafik就是使用了hostNetwok），应显式设置其DNS策略为“ClusterFirstWithHostNet”。"),s("li",null,"None: 它允许Pod忽略Kubernetes环境中的DNS设置，这时候会使用Pod Spec中的dnsConfig字段提供的DNS设置。")],-1),No={id:"应用的dns管理-1",tabindex:"-1"},Ro={id:"_15-1-使用configmap管理应用配置",tabindex:"-1"},To={id:"通过kubectl命令创建configmap",tabindex:"-1"},Ko=s("p",null,[s("strong",null,"创建一个名称为cmd-config的ConfigMap")],-1),Io=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap cmd-config --from-literal=host=www.unixhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/cmd-config created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mo=s("p",null,[s("strong",null,"查看ConfigMap")],-1),wo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME         DATA   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cmd-config   1      63s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Lo=s("p",null,[s("strong",null,"查看ConfigMap内容")],-1),jo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe configmap cmd-config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         cmd-config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Data")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"====")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"host:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"----")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"www.unixhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Oo=s("p",null,[s("strong",null,"ConfigMap中包含多个键值对"),e(" 可以多次使用--from-literal为一个ConfigMap创建多个键值对，中间用空格分隔")],-1),Go=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap mcmd-config --from-literal=host=www.unixhot.com --from-literal=port=443 --from-literal=ssl=on")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/mcmd-config created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Uo={id:"通过yaml文件创建configmap",tabindex:"-1"},Vo=s("p",null,"查看已创建的ConfigMap生成的YAML文件",-1),Ho=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  host: www.unixhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  port: "443"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  ssl: "on"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ConfigMap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  creationTimestamp: "2019-11-05T01:45:13Z"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: mcmd-config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  resourceVersion: "5394993"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selfLink: /api/v1/namespaces/default/configmaps/mcmd-config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  uid: 02012d69-e324-4e9d-ba04-7132e9f6ecd8")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yo=s("p",null,"只需要将metadata中无需指定的字段去掉即可生成一个YAML文件。",-1),Fo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml > mcmd-config-v2.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# vim mcmd-config-v2.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  host: www.unixhot.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  port: "443"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  ssl: "on"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ConfigMap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: mcmd-config-v2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create -f mcmd-config-v2.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/mcmd-config-v2 created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME             DATA   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cmd-config       1      24m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mcmd-config      3      16m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mcmd-config-v2   3      9s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$o={id:"通过文件创建configmap",tabindex:"-1"},qo=s("p",null,"ConfigMap除了可以存储单个或者多个键值对之外，可以存储完整的配置文件，将单个配置文件直接转换为ConfigMap在生产中十分常用",-1),Jo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap file-config --from-file=/etc/hosts")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/file-config created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zo=s("p",null,"可以看到ConfigMap直接存储了文件的内容，Key名称为文件名hosts，也可以手动指定Key的名称。",-1),Wo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe configmap file-config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         file-config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Data")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"====")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hosts:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"----")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"::1         localhost localhost.localdomain localhost6 localhost6.localdomain6")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.27 k8s-master1 k8s-master1.dianjoy.com ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.28 k8s-master2 k8s-master2.dianjoy.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.29 k8s-master3 k8s-master3.dianjoy.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Zo=s("p",null,"将Key手动指定为host-hosts",-1),Xo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap file-config-v2 --from-file=host-hosts=/etc/hosts")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/file-config-v2 created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe configmap file-config-v2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         file-config-v2")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Data")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"====")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"host-hosts:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"----")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"::1         localhost localhost.localdomain localhost6 localhost6.localdomain6")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.27 k8s-master1 k8s-master1.dianjoy.com ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.28 k8s-master2 k8s-master2.dianjoy.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.29 k8s-master3 k8s-master3.dianjoy.com")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:  <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qo={id:"从目录创建configmap",tabindex:"-1"},st=s("p",null,"ConfigMap还支持通过目录创建，kubectl会为目录中的每个文件单独创建条目，需要注意的是如果目录下面包含子目录，会忽略这些子目录和子目录里面的内容。",-1),et=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap dir-config --from-file=/etc/kubernetes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/dir-config created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nt={id:"混合选项创建configmap",tabindex:"-1"},lt=s("p",null,"同时使用命令行、文件、目录创建ConfigMap也是支持的，只需要使用不同的选项即可。",-1),at=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap mycp --from-literal=env=test \\")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --from-file=/etc/hosts \\")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --from-file=myhosts=/etc/hosts \\")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --from-file=/etc/kubernetes")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/mycp created")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ot=s("p",null,"ConfigMap的内容可以通过环境变量的形成传递给容器，也可通过和Volume的形式挂载到容器中。",-1),tt={id:"通过环境变量给容器传递configmap",tabindex:"-1"},ct=s("p",null,"可以将ConfigMap中的键值对数据通过环境变量的形式传递到容器中，这样在配置容器的时候有一些数据可以使用环境变量，然后使用ConfigMap进行填充，这样就可以实现配置和Pod的分离。",-1),it={id:"_15-2-使用secret管理敏感数据",tabindex:"-1"},rt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"在应用启动过程中经常会有一些敏感信息需要存储，例如用户名和密码等，如果直接明文的方式保存会有安全风险。在Kubernetes中Secret这个资源对象类型用来保存敏感信息，例如密码、密钥、访问令牌、SSH Key等你认为需要保密的敏感信息。相对于将这些内容保存到容器镜像或者Pod的定义文件中，更加的灵活和安全。")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pt={id:"配置pod使用harbor镜像",tabindex:"-1"},dt=s("p",null,"1．docker login得到 docker密码文件",-1),At=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker login 192.168.56.11")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ct=s("p",null,"2.对密码文件进行加密",-1),ut=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat /root/.docker/config.json |base64")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ht=s("p",null,"3.创建harbor使用的Secret YAML文件：",-1),yt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim harbor-secret.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Secret")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: harbor-secret")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  .dockerconfigjson: 'ewoJImF1dGhzIjogewoJCSJyZWcuZ3JlYXRvcHMubmV0IjogewoJCQkiYXV0aCI6ICJZV1J0YVc0Nk1YRmhlbmh6ZHpJPSIKCQl9Cgl9Cn0='")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"type: kubernetes.io/dockerconfigjson")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mt=s("p",null,"4.创建Secret",-1),Dt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins k8s-deploy]# kubectl create -f reg-harbor.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'secret "reg-harbor" created')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gt=s("p",null,"5.创建pod并挂载资源",-1),_t=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: sectest")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name: sectest")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: 123.207.154.16/base/redis:alpine")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - containerPort: 6379")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  imagePullSecrets:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - name: harbor-secret")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bt={id:"使用helm管理kubernetes应用",tabindex:"-1"},kt=s("p",null,"通过前面的学习，掌握了将应用迁移至Kubernetes的步骤和技巧，过程比较艰辛。例如我们创建一个应用，涉及到Deployment、Service、Ingress、PV、PVC，如何有效的管理这些资源呢，Kubernetes给出了一个最佳实践就是Helm。 Helm是一个kubernetes应用的包管理工具，用来管理charts——预先配置好的安装包资源，有点类似于Ubuntu的APT和CentOS中的yum。 Helm chart是用来封装kubernetes原生应用程序的yaml文件，可以在你部署应用的时候自定义应用程序的一些metadata，便与应用程序的分发。",-1),xt=s("p",null,"Helm和charts的主要作用：",-1),ft=s("ul",null,[s("li",null,"应用程序封装"),s("li",null,"版本管理"),s("li",null,"依赖检查"),s("li",null,"便于应用程序分发")],-1),vt={id:"helm部署",tabindex:"-1"},Pt={id:"安装helm",tabindex:"-1"},St=s("p",null,"1.部署Helm客户端",-1),Et=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget https://get.helm.sh/helm-v3.0.2-linux-amd64.tar.gz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# tar zxf helm-v3.0.2-linux-amd64.tar.gz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# mv linux-amd64/helm /usr/local/bin/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nt=s("p",null,"2.验证安装是否成功",-1),Rt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm version")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'version.BuildInfo{Version:"v3.0.2", GitCommit:"19e47ee3283ae98139d98460de796c1be1e3975f", GitTreeState:"clean", GoVersion:"go1.13.5"}')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tt={id:"使用helm部署第一个应用",tabindex:"-1"},Kt=s("p",null,"4.搜索Helm应用",-1),It=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm search jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME              CHART VERSION    APP VERSION    DESCRIPTION                                       ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stable/jenkins    0.13.5           2.73           Open source continuous integration server. It s...")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mt=s("p",null,"5.查看仓库",-1),wt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm repo list")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME      URL                                                   ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stable    https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"local     http://127.0.0.1:8879/charts")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Lt=s("p",null,"6.安装第一个应用",-1),jt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm install stable/jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME:   viable-seal")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LAST DEPLOYED: Thu Jul 26 19:21:07 2018")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAMESPACE: default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"STATUS: DEPLOYED")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RESOURCES:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/ConfigMap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                       DATA  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins        3     1s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins-tests  1     1s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/PersistentVolumeClaim")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                 STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins  Pending  1s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                       TYPE          CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins-agent  ClusterIP     10.1.154.54  <none>       50000/TCP       1s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins        LoadBalancer  10.1.63.24   <pending>    8080:20031/TCP  0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1beta1/Deployment")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                 DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins  1        1        1           0          0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Pod(related)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                  READY  STATUS   RESTARTS  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins-7f5c7bd8d4-gc5hv  0/1    Pending  0         0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Secret")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                 TYPE    DATA  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins  Opaque  2     1s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NOTES:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1. Get your 'admin' user password by running:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  printf $(kubectl get secret --namespace default viable-seal-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2. Get the Jenkins URL to visit by running these commands in the same shell:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  NOTE: It may take a few minutes for the LoadBalancer IP to be available.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        You can watch the status of by running 'kubectl get svc --namespace default -w viable-seal-jenkins'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  export SERVICE_IP=$(kubectl get svc --namespace default viable-seal-jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  echo http://$SERVICE_IP:8080/login")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3. Login with the password from step 1 and the username: admin")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"For more information on running Jenkins on Kubernetes, visit:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://cloud.google.com/solutions/jenkins-on-container-engine")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ot={id:"_15-2-深入理解helm",tabindex:"-1"},Gt={id:"helm组件",tabindex:"-1"},Ut=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# tree ~/.helm/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/root/.helm/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── cache")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── archive")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│       └── jenkins-0.13.5.tgz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── plugins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── repository")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── cache")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   │   ├── local-index.yaml -> /root/.helm/repository/local/index.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   │   └── stable-index.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── local")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   │   └── index.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── repositories.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── starters")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"7 directories, 5 files")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vt=s("p",null,"默认缓存的文件",-1),Ht=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd .helm/cache/archive/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 archive]# ls -l")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 16")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 12650 Jul 26 19:21 jenkins-0.13.5.tgz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 archive]# tar zxf jenkins-0.13.5.tgz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 archive]# mv jenkins ~/.helm/repository/local/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd ~/.helm/repository/local/jenkins/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# tree")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},".")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── Chart.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── OWNERS")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── README.md")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── templates")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── config.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── _helpers.tpl")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── home-pvc.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-agent-svc.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-deployment.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-ingress.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-networkpolicy.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-svc.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-test.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jobs.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── NOTES.txt")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── rbac.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── secret.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── service-account.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── test-config.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── values.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 directory, 19 files")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yt={id:"自定义jenkins的chart",tabindex:"-1"},Ft=s("p",null,"修改为NodePort",-1),Bt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# vim values.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ServiceType: NodePort")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$t=s("p",null,"检查",-1),qt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm lint ~/.helm/repository/local/jenkins/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Linting /root/.helm/repository/local/jenkins/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Lint OK")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 chart(s) linted, no failures")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jt=s("p",null,"查看有哪些应用",-1),zt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm list")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME           REVISION    UPDATED                     STATUS      CHART          NAMESPACE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal    1           Thu Jul 26 19:21:07 2018    DEPLOYED    jenkins-0.13.5 default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm delete --purge viable-seal")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'release "viable-seal" deleted')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm install ~/.helm/repository/local/jenkins/ --name devops-jenkins ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME:   devops-jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LAST DEPLOYED: Thu Jul 26 19:36:10 2018")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAMESPACE: default")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"STATUS: DEPLOYED")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RESOURCES:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Secret")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            TYPE    DATA  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins  Opaque  2     0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/ConfigMap")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                  DATA  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins        3     0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins-tests  1     0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/PersistentVolumeClaim")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins  Pending  0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                  TYPE       CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins-agent  ClusterIP  10.1.74.175  <none>       50000/TCP       0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins        NodePort   10.1.3.112   <none>       8080:23558/TCP  0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1beta1/Deployment")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins  1        1        1           0          0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Pod(related)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                            READY  STATUS   RESTARTS  AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins-64d54b79c-pwjfb  0/1    Pending  0         0s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NOTES:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1. Get your 'admin' user password by running:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  printf $(kubectl get secret --namespace default devops-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2. Get the Jenkins URL to visit by running these commands in the same shell:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services devops-jenkins)')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  echo http://$NODE_IP:$NODE_PORT/login")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3. Login with the password from step 1 and the username: admin")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"For more information on running Jenkins on Kubernetes, visit:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://cloud.google.com/solutions/jenkins-on-container-engine")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wt=s("p",null,"查看状态",-1),Zt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm status devops-jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xt={id:"创建自己的chart",tabindex:"-1"},Qt={id:"创建自定义nginx的chart",tabindex:"-1"},sc=s("p",null,"1.创建自定义Chart Nginx的结构",-1),ec=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm create helm-nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Creating helm-nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," [root@linux-node1 ~]# tree helm-nginx/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"opencmdb/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── charts       #依赖的chart")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── Chart.yaml   #本chart的信息")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── templates    #模板目录")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── deployment.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── _helpers.tpl")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── ingress.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── NOTES.txt")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── service.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── values.yaml   #模板赋值")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nc=s("p",null,"2.编辑Chart配置",-1),lc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd helm-nginx/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 helm-nginx]# vim values.yaml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ac=s("p",null,"3.验证Chart配置，最后面的点表示当前目录",-1),oc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 helm-nginx]# helm install --dry-run --debug --name helm-nginx .")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tc=s("p",null,"4.安装自定义Chart，最后面的点表示当前目录",-1),cc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 helm-nginx]# helm install --name helm-nginx .")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ic={id:"查看helm实例",tabindex:"-1"},rc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm list")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME          REVISION    UPDATED                     STATUS      CHART                 NAMESPACE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"helm-nginx    1           Sun Sep 16 19:32:19 2018    DEPLOYED    helm-nginx-0.1.0      default  ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                          READY     STATUS    RESTARTS   AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"helm-nginx-6975f8dbcd-htvtd   1/1       Running   0          51s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get ingress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME         HOSTS                ADDRESS   PORTS     AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"helm-nginx   www.helm-nginx.com             80        1m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pc={id:"_17-应用的日志采集与分析",tabindex:"-1"},dc={id:"prometheus快速入门",tabindex:"-1"},Ac={id:"prometheus架构介绍",tabindex:"-1"},Cc=s("p",null,"在学习Prometheus之前我们需要清晰的掌握其架构，Prometheus是由多个组件组成的的监控系统，主要有：Prometheus Server、Alertmanager、Pushgateway组成，这三个组件均为独立的应用服务，独立部署和运行，其中Prometheus Server中内置了Prometheus web UI。",-1),uc=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/2ada1ece66fcc81d704c2ba46f9dd7d3.png",alt:"architecture"})],-1),hc=s("p",null,[s("strong",null,"Prometheus Server：")],-1),yc=s("p",null,"Promethedus Server是核心组件，负责数据的获取、存储、查询。Prometheus通过Pull的方式定期的从Jobs/Exporters中获取数据，并保存在内置的TSDB中；内置的Prometheus web UI可以让用户通过PromQL的方式进行数据的检索。",-1),mc=s("p",null,[s("strong",null,"Exporters：")],-1),Dc=s("p",null,"Exporters也是一个独立的组件，有官方提供的Exporters也有社区贡献的Exportes，它将监控采集的数据通过HTTP的方式暴露给Prometheus Server，Server定期获取数据。例如有一个Exporters叫做Node Exporter，它安装在受采集的主机上，为Server提供数据，有点类似于Zabbix监控系统中的Zabbix Agent。",-1),gc=s("p",null,[s("strong",null,"Prometheus web UI：")],-1),_c=s("p",null,"Prometheus web UI是Server启动后内置的一个Web界面，通过该Web界面我们可以进行数据查询工作，不包含设置的相关功能。",-1),bc=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/cc11e0cf02ff729fb905ac3648af18f7.png",alt:"img"})],-1),kc=s("p",null,[s("strong",null,"PromQL：")],-1),xc=s("p",null,"PromQL是Prometheus内置的自定义的查询语言，提供对Prometheus Server中的TSDB这个时间序列数据库进行数据查询，支持数据聚合和一些逻辑运算，是一个相对简单的查询语言，而且PromQL也提供了一些内置函数，帮助我们进行数据处理。",-1),fc=s("p",null,[s("strong",null,"Alertmanager：")],-1),vc=s("p",null,"Alertmanager是Promethedus的告警管理组件，它支持基于PromQL来创建告警规则，类似于Zabbix中的告警表达式，对获取到的数据进行计算和比较，如果满足PromQL定义的规则条件，就会产生报警。",-1),Pc=s("p",null,[s("strong",null,"Pushgateway：")],-1),Sc=s("p",null,"Pushgateway可以理解为数据的一个中转站，例如当Prometheus Server不能直接和Exporters进行通信的场景下。",-1),Ec={id:"安装prometheus",tabindex:"-1"},Nc=s("p",null,"学习Prometheus的第一步就是先部署一个实验环境，官方提供了多种方式进行Prometheus安装：",-1),Rc=s("ul",null,[s("li",null,"源码编译安装"),s("li",null,"下载预编译好的二进制文件"),s("li",null,"使用Docker部署"),s("li",null,"使用第三方工具：Ansible、SaltStack、Puppet、Chef。")],-1),Tc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://github.com/prometheus/prometheus/releases/download/v2.7.1/prometheus-2.7.1.linux-amd64.tar.gz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# tar zxf prometheus-2.7.1.linux-amd64.tar.gz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# mv prometheus-2.7.1.linux-amd64 /usr/local/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# ln -s /usr/local/prometheus-2.7.1.linux-amd64/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kc=s("p",null,[s("strong",null,"Prometheus配置")],-1),Ic=s("p",null,"Prometheus的配置文件在prometheus.yml中，直接启动也会到命令的当前目录下寻找该文件。",-1),Mc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 prometheus]# vim prometheus.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# my global config")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"global:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# scrape_timeout is set to the global default (10s).")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Alertmanager configuration")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alerting:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alertmanagers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- static_configs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# - alertmanager:9093")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Load rules once and periodically evaluate them according to the global")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"'evaluation_interval'.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rule_files:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# - "first_rules.yml"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# - "second_rules.yml"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# A scrape configuration containing exactly one endpoint to scrape:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Here it's Prometheus itself.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_configs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# The job name is added as a label `job=<job_name>` to any timeseries")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scraped from this config.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: 'prometheus'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# metrics_path defaults to '/metrics'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# scheme defaults to 'http'.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"static_configs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets: ['localhost:9090']")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wc=s("p",null,[s("strong",null,"启动Prometheus")],-1),Lc=s("p",null,'默认情况下Prometheus会把数据写在启动目录的./data目录下，可以通过启动参数指定目录：--storage.tsdb.path="data/"，更多参数可以通过—help查看',-1),jc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 prometheus]# ./prometheus –help")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 prometheus]# ./prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.799169159Z caller=main.go:620 msg="Starting')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'TSDB ..."')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.835497463Z caller=main.go:635 msg="TSDB')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'started"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.835598421Z caller=main.go:695 msg="Loading')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'configuration file" filename=prometheus.yml')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.83756508Z caller=main.go:722 msg="Completed')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'loading of configuration file" filename=prometheus.yml')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.83760078Z caller=main.go:589 msg="Server is')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ready to receive web requests."')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"level=info ts=2019-02-12T08:04:03.837641772Z caller=web.go:416 component=web")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'msg="Start listening for connections" address=0.0.0.0:9090')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Oc=s("p",null,"默认会在前台启动，并监听9090端口，会自动创建data目录，并存放数据。注意如何服务器时间不正确会有警告提示，请保证服务器时间同步。",-1),Gc=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/266a101825cbabc2782820895e161f59.png",alt:"img"})],-1),Uc=s("p",null,[s("strong",null,"放置在后台运行")],-1),Vc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# groupadd prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# useradd -g prometheus -d /var/lib/prometheus -s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/sbin/nologin prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /usr/lib/systemd/system/prometheus.service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=simple")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/prometheus/prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--config.file=/usr/local/prometheus/prometheus.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--storage.tsdb.path=/var/lib/prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Restart=on-failure")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hc=s("p",null,"后台启动",-1),Yc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fc=s("p",null,"查看启动状态",-1),Bc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp | grep 9090")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::9090 :::* LISTEN 61333/prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$c={id:"使用node-exporter采集主机数据",tabindex:"-1"},qc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<https://github.com/prometheus/node_exporter/releases/download/v0.17.0/node_exporter-0.17.0.linux-amd64.tar.gz>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# tar zxf node_exporter-0.17.0.linux-amd64.tar.gz")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# mv node_exporter-0.17.0.linux-amd64 /usr/local/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# ln -s /usr/local/node_exporter-0.17.0.linux-amd64/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/node_exporter")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /usr/lib/systemd/system/node_exporter.service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=node_exporter")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=simple")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/prometheus/node_exporter/node_exporter")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Restart=on-failure")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jc=s("p",null,"启动Node Exporter",-1),zc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable node_exporter")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start node_exporter")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wc=s("p",null,"查看状态 [root@linux-node1 ~]# netstat -ntlp | grep 9100",-1),Zc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::9100 :::* LISTEN 66239/node_exporter")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xc=s("p",null,"默认情况下Node Exporter监听9100端口，通过/metrics暴露采集到的监控数据，Prometheus默认也从该地址获取数据。",-1),Qc=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/1004a69a33423c72a2989005be5a790e.png",alt:"img"})],-1),si=s("p",null,[s("strong",null,"配置Prometheus读取Node Exporter数据")],-1),ei=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /usr/local/prometheus/prometheus.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_configs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# The job name is added as a label `job=<job_name>` to any timeseries")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scraped from this config.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: 'prometheus'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# metrics_path defaults to '/metrics'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# scheme defaults to 'http'.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"static_configs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets: ['localhost:9090']")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: 'linux-node1'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"static_configs:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets: ['192.168.56.11:9100']")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"instance: linux-node1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ni=s("p",null,[s("strong",null,"重启prometheus")],-1),li=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart prometheus")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ai=s("p",null,[s("strong",null,"查看监控状态")],-1),oi=s("p",null,"登录Prometheus的Web控制台，StatusTargets如果可以linux-node1并且状态是UP的状态即为配置成功。",-1),ti=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/8c3da60dbf5558dc649de1fd6ce43bf0.png",alt:"img"})],-1),ci={id:"使用prometheus-ui查看数据",tabindex:"-1"},ii={id:"使用grafana进行数据可视化",tabindex:"-1"},ri=s("p",null,[s("strong",null,"1.安装Grafana")],-1),pi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/yum.repos.d/grafana.repo")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[grafana]")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=grafana")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=https://packages.grafana.com/oss/rpm")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repo_gpgcheck=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgkey=https://packages.grafana.com/gpg.key")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sslverify=1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sslcacert=/etc/pki/tls/certs/ca-bundle.crt")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y grafana")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),di=s("p",null,[s("strong",null,"2.配置Grafana")],-1),Ai=s("p",null,"Grafana的配置文件在/etc/grafana/grafana.ini，默认情况下Grafana监听3000端口",-1),Ci=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/grafana/grafana.ini")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ui=s("p",null,[s("strong",null,"3.启动Grafana")],-1),hi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable grafana-server")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start grafana-server")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp | grep 3000")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::3000 :::* LISTEN 81427/grafana-serve")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yi=s("p",null,[s("strong",null,"4.访问Grafana")],-1),mi=s("p",null,[s("strong",null,"5.增加Prometheus数据源")],-1),Di=s("p",null,"点击",-1),gi=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/b681a9b528d2ff21ba66666ce2452e51.png",alt:"img"})],-1),_i=s("p",null,"，然后选择",-1),bi=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/d3e83ac4f090a51c5b5e0c341b99dda5.png",alt:"img"})],-1),ki=s("p",null,"。",-1),xi=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/e35d8aaebedd7e168ebd1b29b65b30bb.png",alt:"img"})],-1),fi=s("p",null,[s("strong",null,"6.设置Dashboard")],-1),vi=s("p",null,"数据源设置完毕后，就可以设置Dashboard图形展示，可以手动添加，也可以直接下载别人配置好保持的Json文件直接导入即可。",-1),Pi=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/d9ab69b29a964a12df52512a7b128b5b.png",alt:"img"})],-1),Si=s("p",null,"点击Home下的Import Dashboard",-1),Ei=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/53ffc0e739ca7b9421f9568ae4cbf117.png",alt:"img"})],-1),Ni=s("p",null,"然后直接上传刚才下载的JSON文件。",-1),Ri=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/500958891a82067b0c987d514239ffb0.png",alt:"img"})],-1),Ti=s("p",null,"导入完毕后，就可以在Grafana上查看对应节点的监控数据图表。你可以通过鼠标拖拽进行图表的自定义大小和位置的修改，效果如下：",-1),Ki=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/698a6241faa0adc1af6c09cc369b259b.png",alt:"img"})],-1),Ii={id:"第七部分-kubernetes高级进阶",tabindex:"-1"},Mi={id:"kubernetes的权限控制rbac",tabindex:"-1"},wi=s("p",null,[s("strong",null,"角色")],-1),Li=s("ul",null,[s("li",null,[s("p",null,"Role: 角色，命名空间范围内的一个权限集合。")]),s("li",null,[s("p",null,"ClusterRole：集群角色，集群范围内的一个权限的集合，"),s("p",null,"Role和ClusterROle在Kubernetes中都被定义为集群内部的 API 资源，和我们前面学习过的 Pod、ConfigMap 这些类似，都是我们集群的资源对象，所以同样的可以使用我们前面的kubectl相关的命令来进行操作 Subject：主题，对应在集群中尝试操作的对象，集群中定义了3种类型的主题资源：")])],-1),ji=s("p",null,"User Account：用户，这是有外部独立服务进行管理的，管理员进行私钥的分配，用户可以使用 KeyStone或者 Goolge 帐号，甚至一个用户名和密码的文件列表也可以。对于用户的管理集群内部没有一个关联的资源对象，所以用户不能通过集群内部的 API 来进行管理 Group：组，这是用来关联多个账户的，集群中有一些默认创建的组，比如cluster-admin Service Account：服务帐号，通过Kubernetes API 来管理的一些用户帐号，和 namespace 进行关联的，适用于集群内部运行的应用程序，需要通过 API 来完成权限认证，所以在集群内部进行权限操作，我们都需要使用到 ServiceAccount，这也是我们这节课的重点 RoleBinding 和 ClusterRoleBinding：角色绑定和集群角色绑定，简单来说就是把声明的 Subject 和我们的 Role 进行绑定的过程(给某个用户绑定上操作的权限)，二者的区别也是作用范围的区别：RoleBinding 只会影响到当前 namespace 下面的资源操作权限，而 ClusterRoleBinding 会影响到所有的 namespace。",-1),Oi=s("p",null,[s("strong",null,"创建用户凭证")],-1),Gi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openssl genrsa -out jenkins.key 2048")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# openssl req -new -key jenkins.key -out jenkins.csr -subj "/CN=jenkins/O=vmware"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openssl x509 -req -in jenkins.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out jenkins.crt -days 365")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl config set-credentials jenkins --client-certificate=jenkins.crt  --client-key=jenkins.key")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl config set-context jenkins-context --cluster=kubernetes --namespace=jenkins --user=jenkins  ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pods --context=jenkins-context")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ui=s("p",null,[s("strong",null,"创建角色")],-1),Vi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim jenkins-role.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: rbac.authorization.k8s.io/v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Role")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins-role")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rules:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'- apiGroups: ["", "extensions", "apps"]')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  resources: ["deployments", "replicasets", "pods"]')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hi=s("p",null,[s("strong",null,"创建角色绑定")],-1),Yi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim jenkins-role-binding.yml")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: rbac.authorization.k8s.io/v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: RoleBinding")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins-rolebinding")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subjects:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- kind: User")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  apiGroup: ""')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"roleRef:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kind: Role")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins-role")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  apiGroup: ""')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fi={id:"_22-深入理解pod调度",tabindex:"-1"},Bi={id:"深入理解pod调度",tabindex:"-1"},$i=s("p",null,"在前面的章节我们已经知道在Kubernetes中使用kube-scheduler进行Pod调度，它的目标是将Pod绑定到对应的Node上，经过一系列的条件和算法尽可能的让每个Pod都满意。kube-scheduler是Kubernetes默认的调度器。",-1),qi=s("p",null,"可以将代码克隆到本地方便查看",-1),Ji=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# git clone --depth 1 https://github.com/kubernetes/kubernetes.git")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zi=s("p",null,"在algorithm下有调度算法，调度算法分为两个阶段：Predicates和priorities，首先对Node进行过滤看哪些Node符合调度要求，然后在符合调度要求的Node上进行优先级计算，判断调度到哪个Node最合适。",-1),Wi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 algorithm]# pwd")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/root/kubernetes/pkg/scheduler/algorithm")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 algorithm]# ls -l")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 20")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 1256 Dec 17 22:52 BUILD")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root  735 Dec 17 22:52 doc.go")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root  276 Dec 17 22:52 predicates")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 4096 Dec 17 22:52 priorities")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3278 Dec 17 22:52 scheduler_interface.go")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3383 Dec 17 22:52 types.go")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Zi=s("p",null,[s("strong",null,"设置调度器")],-1),Xi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod kube-proxy-5wbtf -n kube-system -o yaml | grep schedulerName")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  schedulerName: default-scheduler")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qi={id:"taints（污点）",tabindex:"-1"},sr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe node linux-node1.unixhot.com | grep Taints")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Taints:             node-role.kubernetes.io/master:NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),er=s("p",null,"Taints的表现形式为",-1),nr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<key>=<value>:<effect>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lr=s("p",null,"effect的三种类型：",-1),ar=s("ul",null,[s("li",null,"NoSchedule: 如果Pod没有容忍该污点，不调度到该节点上。"),s("li",null,"PreferNoSchedule：尽量阻止Pod被调度到这个节点上，但是如果没有其它节点能够调度，可以调度到该节点。"),s("li",null,"NoExecute： NoScheduler和PreferNoSchedule只是在调度阶段起作用，但是NoExecute会影响正常运行的Pod，如果一个节点被打了NoExecute的污点，而运行在该节点的Pod没有容忍会直接被这个节点移除。")],-1),or=s("p",null,"查看Flannel为何能调度到Master节点",-1),tr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get po -n kube-system | grep flannel")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-f2jrk                       1/1     Running   2          22h")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-mh75v                       1/1     Running   2          22h")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-n52zm                       1/1     Running   4          22h")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe pod kube-flannel-ds-amd64-f2jrk -n kube-system")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Tolerations:     :NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/disk-pressure:NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/memory-pressure:NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/network-unavailable:NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/not-ready:NoExecute")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/pid-pressure:NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/unreachable:NoExecute")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/unschedulable:NoSchedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cr={id:"自定义污点",tabindex:"-1"},ir=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl taint node linux-node2.example.com node-ytpe=gpu:NoSchedule       ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node/linux-node2.example.com tainted")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 example]# cat nginx-deployment-taint.yaml    ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-deployment")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  replicas: 3")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: nginx")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: nginx:1.13.12")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      tolerations:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - key: node-type")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        operator: Equal")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        value: gpu")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        effect: Noschedule")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 example]# kubectl get po -o wide")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY   STATUS    RESTARTS   AGE     IP          NODE                      NOMINATED NODE   READINESS GATES")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns-test                            1/1     Running   1          6h15m   10.2.2.23   linux-node3.example.com   <none>           <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-deployment-77564d4546-2jkw9   1/1     Running   0          13s     10.2.2.26   linux-node3.example.com   <none>           <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-deployment-77564d4546-4hrbf   1/1     Running   0          13s     10.2.2.24   linux-node3.example.com   <none>           <none>")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-deployment-77564d4546-s2r4h   1/1     Running   0          13s     10.2.2.25   linux-node3.example")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rr={id:"亲缘性调度",tabindex:"-1"},pr={id:"_23-kubernetes-api介绍",tabindex:"-1"},dr=s("p",null,"查看集群状态",-1),Ar=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl cluster-info")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kubernetes master is running at https://192.168.56.11:6443")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KubeDNS is running at https://192.168.56.11:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cr=s("p",null,"直接访问Kubernetes API需要验证，无法直接访问。",-1),ur=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# curl -k https://192.168.56.11:6443")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "kind": "Status",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "apiVersion": "v1",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "metadata": {')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  },")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "status": "Failure",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "message": "forbidden: User \\"system:anonymous\\" cannot get path \\"/\\"",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "reason": "Forbidden",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "details": {')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  },")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "code": 403')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hr=s("p",null,[s("strong",null,"通过Proxy访问Kubernetes API")],-1),yr=s("p",null,"使用kubectl proxy可以在Master本地启动一个代理",-1),mr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl proxy")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Starting to serve on 127.0.0.1:8001")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dr=s("p",null,"可以通过127.0.0.1:8001与API Server进行交互",-1),gr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# curl http://127.0.0.1:8001")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "paths": [')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/api",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/api/v1",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/admissionregistration.k8s.io",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/admissionregistration.k8s.io/v1beta1",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiextensions.k8s.io",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiextensions.k8s.io/v1beta1",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiregistration.k8s.io",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiregistration.k8s.io/v1",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiregistration.k8s.io/v1beta1",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apps",')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...（省略其它输出）")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_r=s("p",null,"可以通过修改监听地址，并关闭过滤，实现在其它地方登录和查看，这样就可以在本地浏览器访问API。切记不要再生产环境将代理地址暴露在外网。",-1),br=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl proxy --address=0.0.0.0 --disable-filter=true")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"W1105 16:18:45.669591   16730 proxy.go:142] Request filter disabled, your proxy is vulnerable to XSRF attacks, please be cautious")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Starting to serve on [::]:8001")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kr={id:"使用swagger-ui进行api交互",tabindex:"-1"},xr=s("p",null,"Kubernetes支持Swagger UI访问API，需要在API Server开启，如果已经根据本书使用kubeadm部署的集群，可以通过修改Pod的YAML文件，重建Pod来开启",-1),fr=s("p",null,[s("strong",null,"修改API Server的Pod定义文件")],-1),vr=s("p",null,"在- kube-apiserver下面一行增加--enable-swagger-ui=true",-1),Pr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# vim /etc/kubernetes/manifests/kube-apiserver.yaml ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Pod")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  creationTimestamp: null")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    component: kube-apiserver")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    tier: control-plane")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: kube-apiserver")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: kube-system")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  containers:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - command:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - kube-apiserver")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - --enable-swagger-ui=true")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - --advertise-address=192.168.56.11")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - --allow-privileged=true")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sr=s("p",null,"删除Pod，kubelet会通过该YAML重建Pod",-1),Er=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get pod -n kube-system | grep api")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-apiserver-linux-node1.unixhot.com            1/1     Running   0          55m")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl delete pod kube-apiserver-linux-node1.unixhot.com -n kube-system")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nr=s("p",null,"可以看到配置已经生效",-1),Rr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe pod kube-apiserver-linux-node1.unixhot.com -n kube-system ")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Command:")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      kube-apiserver")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      --enable-swagger-ui=true")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      --advertise-address=192.168.99.27")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"....")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tr=s("p",null,"部署一个Swagger UI服务查看API",-1),Kr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl run swagger-ui --image=swaggerapi/swagger-ui:latest")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl expose deployment swagger-ui --port=8080 --type=NodePort")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get service")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME         TYPE        CLUSTER-IP    EXTERNAL-IP     PORT(S)          AGE")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes   ClusterIP   10.1.0.1      <none>          443/TCP          43d")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"swagger-ui   NodePort    10.1.205.94   <none>   8080:30410/TCP   34s")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ir=s("p",null,"因为我们部署的Swagger UI和API Server不在一个域名下，所以会有跨域的问题，Chrome浏览器需要提前安装Allow CROS插件解决",-1),Mr=s("hr",null,null,-1),wr=s("hr",null,null,-1),Lr=s("p",null,"摘录自赵班长--------",-1);function jr(o,Or,Gr,Ur,i,Vr){const l=u,r=p;return C(),A(r,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":n(()=>[s("h1",m,[e("Kubernetes快速入门 "),a(l,{class:"header-anchor",href:"#kubernetes快速入门","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),D,s("ul",null,[s("li",null,[e("Kubernetes官方文档："),a(l,{href:"https://kubernetes.io/docs/home/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://kubernetes.io/docs/home/")]),_:1})]),s("li",null,[e("Kuernetes Github："),a(l,{href:"https://github.com/kubernetes/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://github.com/kubernetes/")]),_:1})])]),s("h2",g,[e("Kubernetes架构介绍 "),a(l,{class:"header-anchor",href:"#kubernetes架构介绍","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),_,s("h3",b,[e("Kubernetes系统架构 "),a(l,{class:"header-anchor",href:"#kubernetes系统架构","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),k,x,f,v,P,S,E,N,R,T,s("h3",K,[e("Kubernetes逻辑架构 "),a(l,{class:"header-anchor",href:"#kubernetes逻辑架构","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),I,M,w,L,j,O,G,U,V,H,Y,F,s("h3",B,[e("Kubernetes网络介绍 "),a(l,{class:"header-anchor",href:"#kubernetes网络介绍","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),$,q,J,z,W,Z,X,Q,ss,es,s("h2",ns,[e("使用kubeadm部署Kubernetes v1.16.4 "),a(l,{class:"header-anchor",href:"#使用kubeadm部署kubernetes-v1-16-4","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ls,as,os,ts,cs,s("table",null,[is,s("tbody",null,[s("tr",null,[s("td",null,[a(l,{href:"http://linux-node1.linuxhot.com",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("linux-node1.linuxhot.com")]),_:1})]),rs,ps,ds]),s("tr",null,[s("td",null,[a(l,{href:"http://linux-node2.linuxhot.com",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("linux-node2.linuxhot.com")]),_:1})]),As,Cs,us]),s("tr",null,[s("td",null,[a(l,{href:"http://linux-node3.linuxhot.com",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("linux-node3.linuxhot.com")]),_:1})]),hs,ys,ms]),Ds,gs,_s])]),s("h3",bs,[e("部署Docker "),a(l,{class:"header-anchor",href:"#部署docker","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ks,xs,fs,vs,s("p",null,[e("由于kubeadm对Docker的版本是有要求的，需要安装与Kubernetes匹配的版本，这个对应关系一般在每次发布的Changlog中可以找到，例如1.16.2的CHANGELOG如下："),a(l,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.16.md",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("CHANGELOG")]),_:1})]),Ps,Ss,Es,Ns,Rs,Ts,Ks,Is,Ms,ws,s("h3",Ls,[e("部署kubadm和kubelet "),a(l,{class:"header-anchor",href:"#部署kubadm和kubelet","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),js,Os,Gs,Us,Vs,Hs,Ys,Fs,Bs,$s,qs,Js,zs,Ws,Zs,Xs,Qs,se,ee,ne,le,ae,oe,te,ce,s("ul",null,[s("li",null,[e("以上步骤请在Kubernetes的所有节点上执行，本实验环境是需要在linux-node1、linux-node2、linux-node3这三台机器上均安装Docker、kubeadm、kubelet，对于以上操作需要自动化可以参考我使用SaltStack完成的salt-kubeadm项目："),a(l,{href:"https://github.com/unixhot/salt-kubeadm",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://github.com/unixhot/salt-kubeadm")]),_:1})])]),s("h3",ie,[e("初始化集群部署Master "),a(l,{class:"header-anchor",href:"#初始化集群部署master","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),re,pe,de,Ae,Ce,ue,he,ye,me,De,ge,_e,be,ke,xe,fe,ve,Pe,Se,Ee,Ne,Re,Te,Ke,Ie,Me,we,Le,je,s("h3",Oe,[e("部署网络插件 "),a(l,{class:"header-anchor",href:"#部署网络插件","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ge,Ue,Ve,He,Ye,Fe,Be,$e,qe,Je,ze,We,s("h3",Ze,[e("部署Node节点 "),a(l,{class:"header-anchor",href:"#部署node节点","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Xe,Qe,sn,en,nn,ln,an,on,tn,cn,rn,pn,dn,s("p",null,[An,e(" `` [root@linux-node1 ~]# kubectl get node NAME STATUS ROLES AGE VERSION "),a(l,{href:"http://linux-node1.linuxhot.com",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("linux-node1.linuxhot.com")]),_:1}),e(" Ready master 49m v1.13.2 "),a(l,{href:"http://linux-node2.linuxhot.com",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("linux-node2.linuxhot.com")]),_:1}),e(" Ready 4m48s v1.13.2")]),Cn,un,hn,yn,s("h2",mn,[e("公有云中的Kubernetes "),a(l,{class:"header-anchor",href:"#公有云中的kubernetes","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Dn,s("h3",gn,[e("阿里云中的Kubernetes "),a(l,{class:"header-anchor",href:"#阿里云中的kubernetes","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),_n,bn,kn,xn,fn,vn,Pn,Sn,En,Nn,Rn,Tn,s("h3",Kn,[e("私有云中的Kubernetes "),a(l,{class:"header-anchor",href:"#私有云中的kubernetes","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),In,Mn,wn,Ln,jn,s("h1",On,[e("第五部分 将应用迁移至Kubernetes "),a(l,{class:"header-anchor",href:"#第五部分-将应用迁移至kubernetes","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Gn,[e("6 第一步：将应用封装进容器中 "),a(l,{class:"header-anchor",href:"#_6-第一步：将应用封装进容器中","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h2",Un,[e("第一步：将应用封装进容器中 "),a(l,{class:"header-anchor",href:"#第一步：将应用封装进容器中","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Vn,s("h3",Hn,[e("部署Harbor镜像仓库 "),a(l,{class:"header-anchor",href:"#部署harbor镜像仓库","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Yn,Fn,s("h3",Bn,[e("制作实验用的Docker镜像 "),a(l,{class:"header-anchor",href:"#制作实验用的docker镜像","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),$n,qn,s("h3",Jn,[e("配置Docker仓库 "),a(l,{class:"header-anchor",href:"#配置docker仓库","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),zn,s("h3",Wn,[e("登录Harbor镜像仓库 "),a(l,{class:"header-anchor",href:"#登录harbor镜像仓库","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Zn,s("h3",Xn,[e("提交镜像到Registry "),a(l,{class:"header-anchor",href:"#提交镜像到registry","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Qn,sl,s("h1",el,[e("7 第二步：将容器封装到Pod中 "),a(l,{class:"header-anchor",href:"#_7-第二步：将容器封装到pod中","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),nl,ll,al,s("h2",ol,[e("Pod管理 "),a(l,{class:"header-anchor",href:"#pod管理","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),tl,cl,il,rl,pl,dl,Al,Cl,ul,hl,yl,ml,Dl,gl,_l,bl,kl,s("h1",xl,[e("7.3 第三步：使用Controllers管理Pod "),a(l,{class:"header-anchor",href:"#_7-3-第三步：使用controllers管理pod","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),fl,s("h1",vl,[e("8.1 Replication Controller控制器 "),a(l,{class:"header-anchor",href:"#_8-1-replication-controller控制器","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Pl,[e("8.2 Replica Sets控制器 "),a(l,{class:"header-anchor",href:"#_8-2-replica-sets控制器","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Sl,[e("8.3 Deployment控制器 "),a(l,{class:"header-anchor",href:"#_8-3-deployment控制器","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",El,[e("8.4 DaemonSet控制器 "),a(l,{class:"header-anchor",href:"#_8-4-daemonset控制器","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Nl,Rl,Tl,Kl,Il,Ml,wl,s("h1",Ll,[e("7.4 第四步：使用Service管理Pod访问 "),a(l,{class:"header-anchor",href:"#_7-4-第四步：使用service管理pod访问","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),jl,s("h1",Ol,[e("9.1 Service介绍和管理 "),a(l,{class:"header-anchor",href:"#_9-1-service介绍和管理","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Gl,[e("创建Service "),a(l,{class:"header-anchor",href:"#创建service","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ul,Vl,Hl,Yl,Fl,Bl,$l,ql,Jl,s("h1",zl,[e("9.2 Service和Endpoint "),a(l,{class:"header-anchor",href:"#_9-2-service和endpoint","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Wl,Zl,Xl,s("h3",Ql,[e("创建一个Headless Service "),a(l,{class:"header-anchor",href:"#创建一个headless-service","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),sa,ea,na,la,aa,oa,ta,ca,s("h1",ia,[e("7.5 第五步：使用Ingress提供外部访问 "),a(l,{class:"header-anchor",href:"#_7-5-第五步：使用ingress提供外部访问","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ra,pa,s("h2",da,[e("10.1 Ingress Controller "),a(l,{class:"header-anchor",href:"#_10-1-ingress-controller","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Aa,Ca,ua,s("h2",ha,[e("Ingress Controller Traefik "),a(l,{class:"header-anchor",href:"#ingress-controller-traefik","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",ya,[e("部署Treafik "),a(l,{class:"header-anchor",href:"#部署treafik","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ma,s("h1",Da,[e("11 第六步：使用PV和PVC管理数据存储 "),a(l,{class:"header-anchor",href:"#_11-第六步：使用pv和pvc管理数据存储","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ga,s("h1",_a,[e("11.1 Kubernetes Volume "),a(l,{class:"header-anchor",href:"#_11-1-kubernetes-volume","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",ba,[e("11.2 PersistentVolume（PV） "),a(l,{class:"header-anchor",href:"#_11-2-persistentvolume（pv）","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ka,xa,fa,va,Pa,Sa,Ea,Na,Ra,s("h1",Ta,[e("11.3 PersistentVolumeClaim（PVC） "),a(l,{class:"header-anchor",href:"#_11-3-persistentvolumeclaim（pvc）","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ka,Ia,Ma,wa,La,ja,Oa,s("h1",Ga,[e("11.4 StorageClass "),a(l,{class:"header-anchor",href:"#_11-4-storageclass","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Ua,[e("7 第七步：使用Rancher管理Kubernetes集群 "),a(l,{class:"header-anchor",href:"#_7-第七步：使用rancher管理kubernetes集群","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Va,s("h2",Ha,[e("7.1 Rancher快速入门 "),a(l,{class:"header-anchor",href:"#_7-1-rancher快速入门","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ya,Fa,s("h2",Ba,[e("7.2 使用Rancher进行日常管理 "),a(l,{class:"header-anchor",href:"#_7-2-使用rancher进行日常管理","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h2",$a,[e("7.3 Rancher生产集群部署 "),a(l,{class:"header-anchor",href:"#_7-3-rancher生产集群部署","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",qa,[e("第六部分 管理Kubernetes中的应用 "),a(l,{class:"header-anchor",href:"#第六部分-管理kubernetes中的应用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Ja,[e("13 应用的资源限制和健康检查 "),a(l,{class:"header-anchor",href:"#_13-应用的资源限制和健康检查","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",za,[e("13.1 应用的资源限制 "),a(l,{class:"header-anchor",href:"#_13-1-应用的资源限制","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Wa,[e("13.2 应用的健康检查 "),a(l,{class:"header-anchor",href:"#_13-2-应用的健康检查","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Za,[e("Liveness探测 "),a(l,{class:"header-anchor",href:"#liveness探测","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Xa,Qa,s("h3",so,[e("Readiness探测 "),a(l,{class:"header-anchor",href:"#readiness探测","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),eo,s("h2",no,[e("健康检查的方法 "),a(l,{class:"header-anchor",href:"#健康检查的方法","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),lo,ao,oo,s("ul",null,[to,co,io,ro,po,Ao,Co,s("li",null,[uo,s("h1",ho,[e("管理应用的DNS访问 "),a(l,{class:"header-anchor",href:"#管理应用的dns访问","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})])])]),s("h1",yo,[a(l,{href:"http://k8s.unixhot.com/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("14.1 Kubernetes中的DNS")]),_:1}),e(),a(l,{class:"header-anchor",href:"#_14-1-kubernetes中的dns","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",mo,[e("应用的DNS管理 "),a(l,{class:"header-anchor",href:"#应用的dns管理","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Do,[e("Pod的域名解析策略 "),a(l,{class:"header-anchor",href:"#pod的域名解析策略","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),go,_o,bo,ko,xo,fo,vo,Po,So,Eo,s("h2",No,[e("应用的DNS管理 "),a(l,{class:"header-anchor",href:"#应用的dns管理-1","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h2",Ro,[e("15.1 使用ConfigMap管理应用配置 "),a(l,{class:"header-anchor",href:"#_15-1-使用configmap管理应用配置","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",To,[e("通过kubectl命令创建ConfigMap "),a(l,{class:"header-anchor",href:"#通过kubectl命令创建configmap","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ko,Io,Mo,wo,Lo,jo,Oo,Go,s("h3",Uo,[e("通过YAML文件创建ConfigMap "),a(l,{class:"header-anchor",href:"#通过yaml文件创建configmap","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Vo,Ho,Yo,Fo,s("p",null,[a(l,{href:"http://xn--metadata-0n3mp82lcujlhxj58f8qvb.name",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("注意需要修改metadata.name")]),_:1}),e(",修改完毕后直接创建即可")]),Bo,s("h3",$o,[e("通过文件创建ConfigMap "),a(l,{class:"header-anchor",href:"#通过文件创建configmap","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),qo,Jo,zo,Wo,Zo,Xo,s("h3",Qo,[e("从目录创建ConfigMap "),a(l,{class:"header-anchor",href:"#从目录创建configmap","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),st,et,s("h3",nt,[e("混合选项创建ConfigMap "),a(l,{class:"header-anchor",href:"#混合选项创建configmap","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),lt,at,ot,s("h3",tt,[e("通过环境变量给容器传递ConfigMap "),a(l,{class:"header-anchor",href:"#通过环境变量给容器传递configmap","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ct,s("h2",it,[e("15.2 使用Secret管理敏感数据 "),a(l,{class:"header-anchor",href:"#_15-2-使用secret管理敏感数据","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),rt,s("h3",pt,[e("配置Pod使用Harbor镜像 "),a(l,{class:"header-anchor",href:"#配置pod使用harbor镜像","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),dt,At,Ct,ut,ht,yt,mt,Dt,gt,_t,s("h1",bt,[e("使用Helm管理Kubernetes应用 "),a(l,{class:"header-anchor",href:"#使用helm管理kubernetes应用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),kt,xt,ft,s("h2",vt,[e("Helm部署 "),a(l,{class:"header-anchor",href:"#helm部署","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Pt,[e("安装Helm "),a(l,{class:"header-anchor",href:"#安装helm","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),St,Et,Nt,Rt,s("h3",Tt,[e("使用Helm部署第一个应用 "),a(l,{class:"header-anchor",href:"#使用helm部署第一个应用","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Kt,It,Mt,wt,Lt,jt,s("h1",Ot,[e("15.2 深入理解Helm "),a(l,{class:"header-anchor",href:"#_15-2-深入理解helm","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Gt,[e("Helm组件 "),a(l,{class:"header-anchor",href:"#helm组件","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ut,Vt,Ht,s("h3",Yt,[e("自定义Jenkins的Chart "),a(l,{class:"header-anchor",href:"#自定义jenkins的chart","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Ft,Bt,$t,qt,Jt,zt,Wt,Zt,s("h2",Xt,[e("创建自己的Chart "),a(l,{class:"header-anchor",href:"#创建自己的chart","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Qt,[e("创建自定义Nginx的Chart "),a(l,{class:"header-anchor",href:"#创建自定义nginx的chart","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),sc,ec,nc,lc,ac,oc,tc,cc,s("h3",ic,[e("查看Helm实例 "),a(l,{class:"header-anchor",href:"#查看helm实例","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),rc,s("h1",pc,[e("17 应用的日志采集与分析 "),a(l,{class:"header-anchor",href:"#_17-应用的日志采集与分析","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h2",dc,[e("Prometheus快速入门 "),a(l,{class:"header-anchor",href:"#prometheus快速入门","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h3",Ac,[e("Prometheus架构介绍 "),a(l,{class:"header-anchor",href:"#prometheus架构介绍","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Cc,uc,hc,yc,mc,Dc,gc,_c,bc,kc,xc,fc,vc,Pc,Sc,s("h3",Ec,[e("安装Prometheus "),a(l,{class:"header-anchor",href:"#安装prometheus","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),Nc,Rc,s("p",null,[e("为了方便学习，首先我们使用二进制方式部署，可以在这里"),a(l,{href:"https://prometheus.io/download/%E4%B8%8B%E8%BD%BD%E5%AF%B9%E5%BA%94%E7%9A%84%E9%A2%84%E7%BC%96%E8%AF%91%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%E3%80%82",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://prometheus.io/download/下载对应的预编译的二进制文件。")]),_:1})]),Tc,Kc,Ic,Mc,wc,Lc,jc,Oc,Gc,Uc,Vc,Hc,Yc,Fc,Bc,s("h3",$c,[e("使用Node Exporter采集主机数据 "),a(l,{class:"header-anchor",href:"#使用node-exporter采集主机数据","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),qc,Jc,zc,Wc,Zc,Xc,Qc,si,ei,ni,li,ai,oi,ti,s("h3",ci,[e("使用Prometheus UI查看数据 "),a(l,{class:"header-anchor",href:"#使用prometheus-ui查看数据","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("p",null,[e("现在Prometheus会定期的从"),a(l,{href:"http://192.168.56.11:9100/metrics%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%EF%BC%8C%E5%B9%B6%E5%AD%98%E5%82%A8%EF%BC%8C%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8Prometheus",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("http://192.168.56.11:9100/metrics获取数据，并存储，我们可以使用Prometheus")]),_:1}),e(" UI来查看监控数据。")]),s("h3",ii,[e("使用Grafana进行数据可视化 "),a(l,{class:"header-anchor",href:"#使用grafana进行数据可视化","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ri,pi,di,Ai,Ci,ui,hi,yi,s("p",null,[e("访问"),a(l,{href:"http://192.168.56.11:3000/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("http://192.168.56.11:3000")]),_:1}),e("，用户名和密码默认为admin/admin，第一次登陆会要求修改密码，请使用安全密码。")]),mi,Di,gi,_i,bi,ki,s("p",null,[e("配置URL为："),a(l,{href:"http://192.168.56.11:9090/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("http://192.168.56.11:9090")]),_:1}),e("，并点击Save&Test。")]),xi,fi,vi,s("p",null,[e("下载地址："),a(l,{href:"https://grafana.com/dashboards/405%EF%BC%8C%E5%9C%A8%E5%8F%B3%E4%BE%A7%E6%9C%89Download",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://grafana.com/dashboards/405，在右侧有Download")]),_:1}),e(" Json按钮，下载该Json文件。")]),Pi,Si,Ei,Ni,Ri,Ti,Ki,s("h1",Ii,[e("第七部分 Kubernetes高级进阶 "),a(l,{class:"header-anchor",href:"#第七部分-kubernetes高级进阶","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Mi,[e("Kubernetes的权限控制RBAC "),a(l,{class:"header-anchor",href:"#kubernetes的权限控制rbac","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),wi,Li,ji,Oi,Gi,Ui,Vi,Hi,Yi,s("h1",Fi,[e("22 深入理解Pod调度 "),a(l,{class:"header-anchor",href:"#_22-深入理解pod调度","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",Bi,[e("深入理解Pod调度 "),a(l,{class:"header-anchor",href:"#深入理解pod调度","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),$i,s("p",null,[e("kube-scheduler的代码位于"),a(l,{href:"https://github.com/kubernetes/kubernetes/tree/master/pkg/scheduler",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("GitHub")]),_:1})]),qi,Ji,zi,Wi,s("p",null,[e("官方文档详细的介绍了所有的步骤："),a(l,{href:"https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/")]),_:1})]),Zi,Xi,s("h2",Qi,[e("Taints（污点） "),a(l,{class:"header-anchor",href:"#taints（污点）","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),sr,er,nr,lr,ar,or,tr,s("h3",cr,[e("自定义污点 "),a(l,{class:"header-anchor",href:"#自定义污点","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),ir,s("h2",rr,[e("亲缘性调度 "),a(l,{class:"header-anchor",href:"#亲缘性调度","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),s("h1",pr,[e("23 Kubernetes API介绍 "),a(l,{class:"header-anchor",href:"#_23-kubernetes-api介绍","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),dr,Ar,Cr,ur,hr,yr,mr,Dr,gr,_r,br,s("h3",kr,[e("使用Swagger UI进行API交互 "),a(l,{class:"header-anchor",href:"#使用swagger-ui进行api交互","aria-hidden":"true"},{default:n(()=>[e("#")]),_:1})]),xr,fr,vr,Pr,Sr,Er,Nr,Rr,Tr,Kr,Ir,Mr,wr,Lr]),"main-header":n(()=>[t(o.$slots,"main-header")]),"main-header-after":n(()=>[t(o.$slots,"main-header-after")]),"main-nav":n(()=>[t(o.$slots,"main-nav")]),"main-content":n(()=>[t(o.$slots,"main-content")]),"main-content-after":n(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":n(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":n(()=>[t(o.$slots,"main-nav-after")]),comment:n(()=>[t(o.$slots,"comment")]),footer:n(()=>[t(o.$slots,"footer")]),aside:n(()=>[t(o.$slots,"aside")]),"aside-custom":n(()=>[t(o.$slots,"aside-custom")]),default:n(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Jr=d(y,[["render",jr]]);export{qr as __pageData,Jr as default};
