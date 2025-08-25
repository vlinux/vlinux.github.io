import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang.v_edz1AO.js";import"./chunks/@vueuse/motion.BITvz5PP.js";import{e as h,u as b,a as g}from"./chunks/vue-router.RP1Gwspx.js";import{aa as v,ap as a,ag as e,af as n,ai as s,P as k,ab as f,a1 as P}from"./framework.GHZxz7jq.js";import"./index.CB7BvJPO.js";import"./chunks/dayjs.BldX5ftQ.js";import"./chunks/vue-i18n.C7V8WoQZ.js";import"./chunks/pinia.BfAlK2F6.js";import"./chunks/nprogress.BZwbcB2O.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.VQvYh279.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.fblE3Fel.js";import"./post.DrBLigmy.js";const S=h("/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace",async p=>JSON.parse('{"title":"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace","description":"","frontmatter":{"title":"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace","categories":"Prometheus","tags":["kube-prometheus","Prometheus-Operator","Service-Monitor"],"date":"2021-11-24 16:23:00"},"headers":[],"relativePath":"pages/posts/Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace.md","lastUpdated":null}'),{lazy:(p,i)=>p.name===i.name}),_={__name:"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace",setup(p,{expose:i}){const{data:o}=S(),r=g(),u=b(),t=Object.assign(u.meta.frontmatter||{},o.value?.frontmatter||{});return r.currentRoute.value.data=o.value,P("valaxy:frontmatter",t),globalThis.$frontmatter=t,i({frontmatter:{title:"Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace",categories:"Prometheus",tags:["kube-prometheus","Prometheus-Operator","Service-Monitor"],date:"2021-11-24 16:23:00"}}),(l,c)=>{const m=d;return f(),v(m,{frontmatter:k(t)},{"main-content-md":a(()=>[...c[0]||(c[0]=[n("blockquote",null,[n("p",null,[s("最近在监控k8s当中的Jenkins 的时候,新增ServiceMonitor总是不显示,这里的不显示指的是不在Prometheus-Operator中显示,我认为这其中一定有问题,于是查阅了大量的资料,终于从中找到了答案, 原因竟是Prometheus-Operator在安装的时候默认只会自动发现"),n("code",null,"default"),s(","),n("code",null,"kube-system"),s(","),n("code",null,"monitoring"),s("这三个名称空间下新建的ServiceMonitor,而我的ServiceMonitor又是新建在别的名称空间下所以他无法进行自动发现")]),n("p",null,"更奇怪的是,网上对这个问题的记录文章几乎为0,我根本找不到,所以才写下这个笔记,供看到的人借鉴!")],-1),n("h2",{id:"_1-监控其他-namespace-中的-endpoint-资源",tabindex:"-1"},[s("1. 监控其他 namespace 中的 endpoint 资源 "),n("a",{class:"header-anchor",href:"#_1-监控其他-namespace-中的-endpoint-资源","aria-label":'Permalink to "1. 监控其他 namespace 中的 endpoint 资源"'},"​")],-1),n("p",null,"需要做的操作",-1),n("ol",null,[n("li",null,"创建新增命名空间的 role， 用于获取监控的信息。"),n("li",null,"将创建的role绑定到 monitoring 命名空间中的 prometheus-k8s SA。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"kubectl create ns test")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"namespace=test")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"cat <<EOF | kubectl apply -f - ")]),s(`
`),n("span",{class:"line"},[n("span",null,"apiVersion: rbac.authorization.k8s.io/v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: RoleBinding")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: prometheus-k8s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: ${namespace}")]),s(`
`),n("span",{class:"line"},[n("span",null,"roleRef:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  apiGroup: rbac.authorization.k8s.io")]),s(`
`),n("span",{class:"line"},[n("span",null,"  kind: Role")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: prometheus-k8s")]),s(`
`),n("span",{class:"line"},[n("span",null,"subjects:")]),s(`
`),n("span",{class:"line"},[n("span",null,"- kind: ServiceAccount")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: prometheus-k8s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: monitoring")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"---")]),s(`
`),n("span",{class:"line"},[n("span",null,"apiVersion: rbac.authorization.k8s.io/v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: Role")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: prometheus-k8s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: ${namespace}")]),s(`
`),n("span",{class:"line"},[n("span",null,"rules:")]),s(`
`),n("span",{class:"line"},[n("span",null,"- apiGroups:")]),s(`
`),n("span",{class:"line"},[n("span",null,'  - ""')]),s(`
`),n("span",{class:"line"},[n("span",null,"  resources:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - services")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - endpoints")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - pods")]),s(`
`),n("span",{class:"line"},[n("span",null,"  verbs:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - get")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - list")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - watch")]),s(`
`),n("span",{class:"line"},[n("span",null,"- apiGroups:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - extensions")]),s(`
`),n("span",{class:"line"},[n("span",null,"  resources:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - ingresses")]),s(`
`),n("span",{class:"line"},[n("span",null,"  verbs:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - get")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - list")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - watch")]),s(`
`),n("span",{class:"line"},[n("span",null,"EOF")]),s(`
`),n("span",{class:"line"},[n("span",null,"COPY")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"_2-监控其他-namespace-中的-servicemonitor-资源",tabindex:"-1"},[s("2. 监控其他 namespace 中的 serviceMonitor 资源 "),n("a",{class:"header-anchor",href:"#_2-监控其他-namespace-中的-servicemonitor-资源","aria-label":'Permalink to "2. 监控其他 namespace 中的 serviceMonitor 资源"'},"​")],-1),n("blockquote",null,[n("p",null,"serviceMonitorNamespaceSelector 命名空间的标签匹配，不指定时，只匹配自身命名空间的资源"),n("p",null,"serviceMonitorSelector serviceMonitor的标签匹配， 不指定时，只匹配自身命名空间的资源")],-1),n("p",null,"修改 Prometheus 资源配置",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"apiVersion: monitoring.coreos.com/v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: Prometheus")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    prometheus: k8s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: k8s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: monitoring")]),s(`
`),n("span",{class:"line"},[n("span",null,"spec:")]),s(`
`),n("span",{class:"line"},[n("span",null,"...")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 增加 ns 匹配的标签")]),s(`
`),n("span",{class:"line"},[n("span",null,"  serviceMonitorNamespaceSelector:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    matchLabels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      serviceMonitor: prometheus")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ")]),s(`
`),n("span",{class:"line"},[n("span",null,"# 或者 增加下面的匹配，用来匹配 serviceMonitor")]),s(`
`),n("span",{class:"line"},[n("span",null,"  serviceMonitorSelector:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    matchLabels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      serviceMonitor: prometheus")]),s(`
`),n("span",{class:"line"},[n("span",null,"COPY")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"添加命名空间的标签",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"for ns in default kube-system monitoring test; do ")]),s(`
`),n("span",{class:"line"},[n("span",null,`  kubectl patch ns $ns --patch '{"metadata":{"labels":{"serviceMonitor": "prometheus" } } }'`)]),s(`
`),n("span",{class:"line"},[n("span",null,"done")]),s(`
`),n("span",{class:"line"},[n("span",null,"COPY")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"添加 serviceMonitor 的标签",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,`kubectl patch -n test servicemonitor demo-app --patch '{"metadata":{"labels":{"serviceMonitor":"prometheus"}}}' --type=merge`)]),s(`
`),n("span",{class:"line"},[n("span",null,"COPY")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"测试",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"cat <<EOF | kubectl-test apply -f - ")]),s(`
`),n("span",{class:"line"},[n("span",null,"apiVersion: apps/v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: Deployment")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: test")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"spec:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  replicas: 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selector:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    matchLabels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  template:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      labels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"        app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"        namespace: test")]),s(`
`),n("span",{class:"line"},[n("span",null,"    spec:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      containers:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      - name: whoami")]),s(`
`),n("span",{class:"line"},[n("span",null,"        image: traefik/whoami:v1.6.1")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ports:")]),s(`
`),n("span",{class:"line"},[n("span",null,"        - containerPort: 80")]),s(`
`),n("span",{class:"line"},[n("span",null,"---")]),s(`
`),n("span",{class:"line"},[n("span",null,"apiVersion: v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: Service")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: test")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"spec:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: ClusterIP")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selector:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ports:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    - name: http")]),s(`
`),n("span",{class:"line"},[n("span",null,"      port: 80")]),s(`
`),n("span",{class:"line"},[n("span",null,"      targetPort: 80")]),s(`
`),n("span",{class:"line"},[n("span",null,"---")]),s(`
`),n("span",{class:"line"},[n("span",null,"apiVersion: networking.k8s.io/v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: Ingress")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: test")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  annotations:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    kubernetes.io/ingress.class: nginx")]),s(`
`),n("span",{class:"line"},[n("span",null,"spec:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rules:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - host: app.demo.com")]),s(`
`),n("span",{class:"line"},[n("span",null,"    http:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      paths:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      - path: /")]),s(`
`),n("span",{class:"line"},[n("span",null,"        pathType: Prefix")]),s(`
`),n("span",{class:"line"},[n("span",null,"        backend:")]),s(`
`),n("span",{class:"line"},[n("span",null,"          service:")]),s(`
`),n("span",{class:"line"},[n("span",null,"            name: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"            port:")]),s(`
`),n("span",{class:"line"},[n("span",null,"              number: 80")]),s(`
`),n("span",{class:"line"},[n("span",null,"---")]),s(`
`),n("span",{class:"line"},[n("span",null,"apiVersion: monitoring.coreos.com/v1")]),s(`
`),n("span",{class:"line"},[n("span",null,"kind: ServiceMonitor")]),s(`
`),n("span",{class:"line"},[n("span",null,"metadata:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"  namespace: test")]),s(`
`),n("span",{class:"line"},[n("span",null,"spec:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  endpoints:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  - port: http")]),s(`
`),n("span",{class:"line"},[n("span",null,"    path: /health")]),s(`
`),n("span",{class:"line"},[n("span",null,"    interval: 5s")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selector:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    matchLabels:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      app: ingress-demo-app")]),s(`
`),n("span",{class:"line"},[n("span",null,"EOF")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"希望能对你有所帮助",-1)])]),"main-header":a(()=>[e(l.$slots,"main-header")]),"main-header-after":a(()=>[e(l.$slots,"main-header-after")]),"main-nav":a(()=>[e(l.$slots,"main-nav")]),"main-content-before":a(()=>[e(l.$slots,"main-content-before")]),"main-content":a(()=>[e(l.$slots,"main-content")]),"main-content-after":a(()=>[e(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(l.$slots,"main-nav-after")]),comment:a(()=>[e(l.$slots,"comment")]),footer:a(()=>[e(l.$slots,"footer")]),aside:a(()=>[e(l.$slots,"aside")]),"aside-custom":a(()=>[e(l.$slots,"aside-custom")]),default:a(()=>[e(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{_ as default,S as usePageData};
