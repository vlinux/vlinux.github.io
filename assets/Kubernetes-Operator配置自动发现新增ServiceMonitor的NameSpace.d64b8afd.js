import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang.99e0ece1.js";import{_ as r,c as i,w as e,o as C,r as l,b as s,R as n,p as A}from"./app.63e73a36.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.e7aef008.js";import"./YunCard.vue_vue_type_style_index_0_lang.340e535b.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.528b5e2b.js";const T=JSON.parse('{"title":"Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace","description":"","frontmatter":{"title":"Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace","categories":"Prometheus","tags":["kube-prometheus","Prometheus-Operator"],"date":"2022-01-29T14:26:32.000Z"},"headers":[{"level":2,"title":"1. \u76D1\u63A7\u5176\u4ED6 namespace \u4E2D\u7684 endpoint \u8D44\u6E90","slug":"_1-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-endpoint-\u8D44\u6E90","link":"#_1-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-endpoint-\u8D44\u6E90","children":[]},{"level":2,"title":"2. \u76D1\u63A7\u5176\u4ED6 namespace \u4E2D\u7684 serviceMonitor \u8D44\u6E90","slug":"_2-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-servicemonitor-\u8D44\u6E90","link":"#_2-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-servicemonitor-\u8D44\u6E90","children":[]}],"relativePath":"pages/posts/Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace.md","lastUpdated":1671090556000}'),o=JSON.parse('{"title":"Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace","description":"","frontmatter":{"title":"Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace","categories":"Prometheus","tags":["kube-prometheus","Prometheus-Operator"],"date":"2022-01-29T14:26:32.000Z"},"headers":[{"level":2,"title":"1. \u76D1\u63A7\u5176\u4ED6 namespace \u4E2D\u7684 endpoint \u8D44\u6E90","slug":"_1-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-endpoint-\u8D44\u6E90","link":"#_1-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-endpoint-\u8D44\u6E90","children":[]},{"level":2,"title":"2. \u76D1\u63A7\u5176\u4ED6 namespace \u4E2D\u7684 serviceMonitor \u8D44\u6E90","slug":"_2-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-servicemonitor-\u8D44\u6E90","link":"#_2-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-servicemonitor-\u8D44\u6E90","children":[]}],"relativePath":"pages/posts/Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace.md","lastUpdated":1671090556000}'),m={name:"pages/posts/Kubernetes-Operator\u914D\u7F6E\u81EA\u52A8\u53D1\u73B0\u65B0\u589EServiceMonitor\u7684NameSpace.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){A("pageData",o)}},y=s("blockquote",null,[s("p",null,[n("\u6700\u8FD1\u5728\u76D1\u63A7k8s\u5F53\u4E2D\u7684Jenkins \u7684\u65F6\u5019,\u65B0\u589EServiceMonitor\u603B\u662F\u4E0D\u663E\u793A,\u8FD9\u91CC\u7684\u4E0D\u663E\u793A\u6307\u7684\u662F\u4E0D\u5728Prometheus-Operator\u4E2D\u663E\u793A,\u6211\u8BA4\u4E3A\u8FD9\u5176\u4E2D\u4E00\u5B9A\u6709\u95EE\u9898,\u4E8E\u662F\u67E5\u9605\u4E86\u5927\u91CF\u7684\u8D44\u6599,\u7EC8\u4E8E\u4ECE\u4E2D\u627E\u5230\u4E86\u7B54\u6848, \u539F\u56E0\u7ADF\u662FPrometheus-Operator\u5728\u5B89\u88C5\u7684\u65F6\u5019\u9ED8\u8BA4\u53EA\u4F1A\u81EA\u52A8\u53D1\u73B0"),s("code",null,"default"),n(","),s("code",null,"kube-system"),n(","),s("code",null,"monitoring"),n("\u8FD9\u4E09\u4E2A\u540D\u79F0\u7A7A\u95F4\u4E0B\u65B0\u5EFA\u7684ServiceMonitor,\u800C\u6211\u7684ServiceMonitor\u53C8\u662F\u65B0\u5EFA\u5728\u522B\u7684\u540D\u79F0\u7A7A\u95F4\u4E0B\u6240\u4EE5\u4ED6\u65E0\u6CD5\u8FDB\u884C\u81EA\u52A8\u53D1\u73B0")]),s("p",null,"\u66F4\u5947\u602A\u7684\u662F,\u7F51\u4E0A\u5BF9\u8FD9\u4E2A\u95EE\u9898\u7684\u8BB0\u5F55\u6587\u7AE0\u51E0\u4E4E\u4E3A0,\u6211\u6839\u672C\u627E\u4E0D\u5230,\u6240\u4EE5\u624D\u5199\u4E0B\u8FD9\u4E2A\u7B14\u8BB0,\u4F9B\u770B\u5230\u7684\u4EBA\u501F\u9274!")],-1),D=s("h2",{id:"_1-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-endpoint-\u8D44\u6E90",tabindex:"-1"},[n("1. \u76D1\u63A7\u5176\u4ED6 namespace \u4E2D\u7684 endpoint \u8D44\u6E90 "),s("a",{class:"header-anchor",href:"#_1-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-endpoint-\u8D44\u6E90","aria-hidden":"true"},"#")],-1),d=s("p",null,"\u9700\u8981\u505A\u7684\u64CD\u4F5C",-1),u=s("ol",null,[s("li",null,"\u521B\u5EFA\u65B0\u589E\u547D\u540D\u7A7A\u95F4\u7684 role\uFF0C \u7528\u4E8E\u83B7\u53D6\u76D1\u63A7\u7684\u4FE1\u606F\u3002"),s("li",null,"\u5C06\u521B\u5EFA\u7684role\u7ED1\u5B9A\u5230 monitoring \u547D\u540D\u7A7A\u95F4\u4E2D\u7684 prometheus-k8s SA\u3002")],-1),h=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubectl create ns test")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),v=s("h2",{id:"_2-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-servicemonitor-\u8D44\u6E90",tabindex:"-1"},[n("2. \u76D1\u63A7\u5176\u4ED6 namespace \u4E2D\u7684 serviceMonitor \u8D44\u6E90 "),s("a",{class:"header-anchor",href:"#_2-\u76D1\u63A7\u5176\u4ED6-namespace-\u4E2D\u7684-servicemonitor-\u8D44\u6E90","aria-hidden":"true"},"#")],-1),g=s("blockquote",null,[s("p",null,"serviceMonitorNamespaceSelector \u547D\u540D\u7A7A\u95F4\u7684\u6807\u7B7E\u5339\u914D\uFF0C\u4E0D\u6307\u5B9A\u65F6\uFF0C\u53EA\u5339\u914D\u81EA\u8EAB\u547D\u540D\u7A7A\u95F4\u7684\u8D44\u6E90"),s("p",null,"serviceMonitorSelector serviceMonitor\u7684\u6807\u7B7E\u5339\u914D\uFF0C \u4E0D\u6307\u5B9A\u65F6\uFF0C\u53EA\u5339\u914D\u81EA\u8EAB\u547D\u540D\u7A7A\u95F4\u7684\u8D44\u6E90")],-1),_=s("p",null,"\u4FEE\u6539 Prometheus \u8D44\u6E90\u914D\u7F6E",-1),b=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: monitoring.coreos.com/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    prometheus: k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: k8s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: monitoring")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# \u589E\u52A0 ns \u5339\u914D\u7684\u6807\u7B7E")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  serviceMonitorNamespaceSelector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      serviceMonitor: prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# \u6216\u8005 \u589E\u52A0\u4E0B\u9762\u7684\u5339\u914D\uFF0C\u7528\u6765\u5339\u914D serviceMonitor")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  serviceMonitorSelector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      serviceMonitor: prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k=s("p",null,"\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4\u7684\u6807\u7B7E",-1),f=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for ns in default kube-system monitoring test; do ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`  kubectl patch ns $ns --patch '{"metadata":{"labels":{"serviceMonitor": "prometheus" } } }'`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"done")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),S=s("p",null,"\u6DFB\u52A0 serviceMonitor \u7684\u6807\u7B7E",-1),M=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`kubectl patch -n test servicemonitor demo-app --patch '{"metadata":{"labels":{"serviceMonitor":"prometheus"}}}' --type=merge`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COPY")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O=s("p",null,"\u6D4B\u8BD5",-1),P=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cat <<EOF | kubectl-test apply -f - ")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$=s("p",null,"\u5E0C\u671B",-1);function N(a,K,V,w,p,x){const t=c;return C(),i(t,{frontmatter:p.frontmatter,data:p.data},{"main-content-md":e(()=>[y,D,d,u,h,v,g,_,b,k,f,S,M,O,P,$]),"main-header":e(()=>[l(a.$slots,"main-header")]),"main-header-after":e(()=>[l(a.$slots,"main-header-after")]),"main-nav":e(()=>[l(a.$slots,"main-nav")]),"main-content":e(()=>[l(a.$slots,"main-content")]),"main-content-after":e(()=>[l(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[l(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[l(a.$slots,"main-nav-after")]),comment:e(()=>[l(a.$slots,"comment")]),footer:e(()=>[l(a.$slots,"footer")]),aside:e(()=>[l(a.$slots,"aside")]),"aside-custom":e(()=>[l(a.$slots,"aside-custom")]),default:e(()=>[l(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const U=r(m,[["render",N]]);export{T as __pageData,U as default};
