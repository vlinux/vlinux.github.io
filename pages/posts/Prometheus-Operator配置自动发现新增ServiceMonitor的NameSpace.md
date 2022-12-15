---
title: Prometheus-Operator配置自动发现新增ServiceMonitor的NameSpace
categories: Prometheus
tags: [kube-prometheus,Prometheus-Operator,Service-Monitor]
date: 2021-11-24 16:23:00
---
> 最近在监控k8s当中的Jenkins 的时候,新增ServiceMonitor总是不显示,这里的不显示指的是不在Prometheus-Operator中显示,我认为这其中一定有问题,于是查阅了大量的资料,终于从中找到了答案, 原因竟是Prometheus-Operator在安装的时候默认只会自动发现`default`,`kube-system`,`monitoring`这三个名称空间下新建的ServiceMonitor,而我的ServiceMonitor又是新建在别的名称空间下所以他无法进行自动发现
>
> 更奇怪的是,网上对这个问题的记录文章几乎为0,我根本找不到,所以才写下这个笔记,供看到的人借鉴!



## 1. 监控其他 namespace 中的 endpoint 资源

需要做的操作

1. 创建新增命名空间的 role， 用于获取监控的信息。
2. 将创建的role绑定到 monitoring 命名空间中的 prometheus-k8s SA。

```
kubectl create ns test

namespace=test

cat <<EOF | kubectl apply -f - 
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: prometheus-k8s
  namespace: ${namespace}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: prometheus-k8s
subjects:
- kind: ServiceAccount
  name: prometheus-k8s
  namespace: monitoring

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: prometheus-k8s
  namespace: ${namespace}
rules:
- apiGroups:
  - ""
  resources:
  - services
  - endpoints
  - pods
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - extensions
  resources:
  - ingresses
  verbs:
  - get
  - list
  - watch
EOF
COPY
```

## 2. 监控其他 namespace 中的 serviceMonitor 资源

> serviceMonitorNamespaceSelector 命名空间的标签匹配，不指定时，只匹配自身命名空间的资源
>
> serviceMonitorSelector serviceMonitor的标签匹配， 不指定时，只匹配自身命名空间的资源

修改 Prometheus 资源配置

```
apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  labels:
    prometheus: k8s
  name: k8s
  namespace: monitoring
spec:
...
# 增加 ns 匹配的标签
  serviceMonitorNamespaceSelector:
    matchLabels:
      serviceMonitor: prometheus
      
# 或者 增加下面的匹配，用来匹配 serviceMonitor
  serviceMonitorSelector:
    matchLabels:
      serviceMonitor: prometheus
COPY
```

添加命名空间的标签

```
for ns in default kube-system monitoring test; do 
  kubectl patch ns $ns --patch '{"metadata":{"labels":{"serviceMonitor": "prometheus" } } }'
done
COPY
```

添加 serviceMonitor 的标签

```
kubectl patch -n test servicemonitor demo-app --patch '{"metadata":{"labels":{"serviceMonitor":"prometheus"}}}' --type=merge
COPY
```

测试

```
cat <<EOF | kubectl-test apply -f - 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ingress-demo-app
  namespace: test
  labels:
    app: ingress-demo-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ingress-demo-app
  template:
    metadata:
      labels:
        app: ingress-demo-app
        namespace: test
    spec:
      containers:
      - name: whoami
        image: traefik/whoami:v1.6.1
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: ingress-demo-app
  namespace: test
  labels:
    app: ingress-demo-app
spec:
  type: ClusterIP
  selector:
    app: ingress-demo-app
  ports:
    - name: http
      port: 80
      targetPort: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-demo-app
  namespace: test
  labels:
    app: ingress-demo-app
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - host: app.demo.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: ingress-demo-app
            port:
              number: 80
---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    name: ingress-demo-app
  name: ingress-demo-app
  namespace: test
spec:
  endpoints:
  - port: http
    path: /health
    interval: 5s
  selector:
    matchLabels:
      app: ingress-demo-app
EOF
```

希望能对你有所帮助