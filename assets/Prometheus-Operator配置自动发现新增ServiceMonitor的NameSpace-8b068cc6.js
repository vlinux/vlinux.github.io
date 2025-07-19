import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ad5e9c82.js";import{_ as C,c as A,w as e,o as m,b as s,d as n,e as c,r as l,f as y,p as D}from"./app-8df0fa73.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-204785b8.js";import"./YunCard.vue_vue_type_style_index_0_lang-a0362047.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-87671209.js";const G=JSON.parse('{"title":"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace","description":"","frontmatter":{"title":"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace","categories":"Prometheus","tags":["kube-prometheus","Prometheus-Operator","Service-Monitor"],"date":"2021-11-24T16:23:00.000Z"},"headers":[{"level":2,"title":"1. 监控其他 namespace 中的 endpoint 资源","slug":"_1-监控其他-namespace-中的-endpoint-资源","link":"#_1-监控其他-namespace-中的-endpoint-资源","children":[]},{"level":2,"title":"2. 监控其他 namespace 中的 serviceMonitor 资源","slug":"_2-监控其他-namespace-中的-servicemonitor-资源","link":"#_2-监控其他-namespace-中的-servicemonitor-资源","children":[]}],"relativePath":"pages/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace.md","lastUpdated":1671090556000}'),o=JSON.parse('{"title":"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace","description":"","frontmatter":{"title":"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace","categories":"Prometheus","tags":["kube-prometheus","Prometheus-Operator","Service-Monitor"],"date":"2021-11-24T16:23:00.000Z"},"headers":[{"level":2,"title":"1. 监控其他 namespace 中的 endpoint 资源","slug":"_1-监控其他-namespace-中的-endpoint-资源","link":"#_1-监控其他-namespace-中的-endpoint-资源","children":[]},{"level":2,"title":"2. 监控其他 namespace 中的 serviceMonitor 资源","slug":"_2-监控其他-namespace-中的-servicemonitor-资源","link":"#_2-监控其他-namespace-中的-servicemonitor-资源","children":[]}],"relativePath":"pages/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace.md","lastUpdated":1671090556000}'),d={name:"pages/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){D("pageData",o)}},h=s("blockquote",null,[s("p",null,[n("最近在监控k8s当中的Jenkins 的时候,新增ServiceMonitor总是不显示,这里的不显示指的是不在Prometheus-Operator中显示,我认为这其中一定有问题,于是查阅了大量的资料,终于从中找到了答案, 原因竟是Prometheus-Operator在安装的时候默认只会自动发现"),s("code",null,"default"),n(","),s("code",null,"kube-system"),n(","),s("code",null,"monitoring"),n("这三个名称空间下新建的ServiceMonitor,而我的ServiceMonitor又是新建在别的名称空间下所以他无法进行自动发现")]),s("p",null,"更奇怪的是,网上对这个问题的记录文章几乎为0,我根本找不到,所以才写下这个笔记,供看到的人借鉴!")],-1),u={id:"_1-监控其他-namespace-中的-endpoint-资源",tabindex:"-1"},v=s("p",null,"需要做的操作",-1),g=s("ol",null,[s("li",null,"创建新增命名空间的 role， 用于获取监控的信息。"),s("li",null,"将创建的role绑定到 monitoring 命名空间中的 prometheus-k8s SA。")],-1),_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubectl create ns test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"namespace=test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat <<EOF | kubectl apply -f - ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: rbac.authorization.k8s.io/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: RoleBinding")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: prometheus-k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: ${namespace}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"roleRef:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  apiGroup: rbac.authorization.k8s.io")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kind: Role")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: prometheus-k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subjects:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- kind: ServiceAccount")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: prometheus-k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: monitoring")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: rbac.authorization.k8s.io/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Role")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: prometheus-k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: ${namespace}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- apiGroups:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  - ""')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  resources:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - services")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - endpoints")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - pods")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  verbs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - get")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - watch")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- apiGroups:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - extensions")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  resources:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - ingresses")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  verbs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - get")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - watch")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k={id:"_2-监控其他-namespace-中的-servicemonitor-资源",tabindex:"-1"},b=s("blockquote",null,[s("p",null,"serviceMonitorNamespaceSelector 命名空间的标签匹配，不指定时，只匹配自身命名空间的资源"),s("p",null,"serviceMonitorSelector serviceMonitor的标签匹配， 不指定时，只匹配自身命名空间的资源")],-1),f=s("p",null,"修改 Prometheus 资源配置",-1),S=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: monitoring.coreos.com/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    prometheus: k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: monitoring")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 增加 ns 匹配的标签")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  serviceMonitorNamespaceSelector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      serviceMonitor: prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 或者 增加下面的匹配，用来匹配 serviceMonitor")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  serviceMonitorSelector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      serviceMonitor: prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),M=s("p",null,"添加命名空间的标签",-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for ns in default kube-system monitoring test; do ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`  kubectl patch ns $ns --patch '{"metadata":{"labels":{"serviceMonitor": "prometheus" } } }'`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"done")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O=s("p",null,"添加 serviceMonitor 的标签",-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`kubectl patch -n test servicemonitor demo-app --patch '{"metadata":{"labels":{"serviceMonitor":"prometheus"}}}' --type=merge`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),N=s("p",null,"测试",-1),x=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat <<EOF | kubectl-test apply -f - ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  replicas: 2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        namespace: test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: whoami")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: traefik/whoami:v1.6.1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type: ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - name: http")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      port: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      targetPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: networking.k8s.io/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  annotations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kubernetes.io/ingress.class: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - host: app.demo.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    http:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      paths:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - path: /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        pathType: Prefix")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        backend:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          service:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            name: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            port:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"              number: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: monitoring.coreos.com/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ServiceMonitor")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    name: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  endpoints:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - port: http")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    path: /health")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    interval: 5s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: ingress-demo-app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V=s("p",null,"希望能对你有所帮助",-1);function w(a,L,B,E,t,F){const p=y,r=i;return m(),A(r,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":e(()=>[h,s("h2",u,[n("1. 监控其他 namespace 中的 endpoint 资源 "),c(p,{class:"header-anchor",href:"#_1-监控其他-namespace-中的-endpoint-资源","aria-hidden":"true"},{default:e(()=>[n("#")]),_:1})]),v,g,_,s("h2",k,[n("2. 监控其他 namespace 中的 serviceMonitor 资源 "),c(p,{class:"header-anchor",href:"#_2-监控其他-namespace-中的-servicemonitor-资源","aria-hidden":"true"},{default:e(()=>[n("#")]),_:1})]),b,f,S,M,P,O,$,N,x,V]),"main-header":e(()=>[l(a.$slots,"main-header")]),"main-header-after":e(()=>[l(a.$slots,"main-header-after")]),"main-nav":e(()=>[l(a.$slots,"main-nav")]),"main-content":e(()=>[l(a.$slots,"main-content")]),"main-content-after":e(()=>[l(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[l(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[l(a.$slots,"main-nav-after")]),comment:e(()=>[l(a.$slots,"comment")]),footer:e(()=>[l(a.$slots,"footer")]),aside:e(()=>[l(a.$slots,"aside")]),"aside-custom":e(()=>[l(a.$slots,"aside-custom")]),default:e(()=>[l(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const J=C(d,[["render",w]]);export{G as __pageData,J as default};
