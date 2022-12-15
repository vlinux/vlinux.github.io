---
title: 在k8s中搭建有状态应用Nacos集群
categories: 自动注册
tags: [Kubernetes,nacos]
date: 2022-02-25 14:09:01
---
## 在k8s中部署的难点

在k8s中部署nacos集群和在裸机器上直接部署nacos机器其实差别不大。
最主要的区别是k8s中部署的服务没有固定的IP，而nacos集群部署需要配置所有实例的IP地址

> 因Nacos本身是直接拿MySQL的数据,故在此服务中不做持久化操作

## 解决

- 在k8s中通过StatefulSet和Headless Service为每个nacos实例生成一个唯一的dns地址，
- 创建一个普通Service给可客户端使用

## 部署

### 创建数据库配置CM

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nacos-cm
data:
  mysql.host: "192.168.1.3"
  mysql.db.name: "nacos_devtest"
  mysql.port: "3306"
  mysql.user: "nacos"
  mysql.password: "nacos"
```

### 部署Headless Service无头服务SVC

Headless Service为每个Pod（nacos实例）生成一个地址，用作NACOS_SERVERS配置

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nacos-headless
  labels:
    app: nacos
  annotations:
    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"
spec:
  ports:
    - port: 8848
      name: server
      targetPort: 8848
  clusterIP: None
  selector:
    app: nacos
```

### 使用StatefulSet控制器部署Nacos

> StatefulSet部署方式为每个POD生成固定的名称，如nacos-0、nacos-1、nacos-2等。

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: nacos
spec:
  serviceName: nacos-headless
  replicas: 3
  template:
    metadata:
      labels:
        app: nacos
      annotations:
        pod.alpha.kubernetes.io/initialized: "true"
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: "app"
                    operator: In
                    values:
                      - nacos-headless
              topologyKey: "kubernetes.io/hostname"
      containers:
        - name: k8snacos
          imagePullPolicy: Always
          image: nacos/nacos-server:latest
          resources:
            requests:
              memory: "2Gi"
              cpu: "500m"
          ports:
            - containerPort: 8848
              name: client
          env:
            - name: NACOS_REPLICAS
              value: "3"
            - name: MYSQL_SERVICE_HOST
              valueFrom:
                configMapKeyRef:
                  name: nacos-cm
                  key: mysql.host
            - name: MYSQL_SERVICE_DB_NAME
              valueFrom:
                configMapKeyRef:
                  name: nacos-cm
                  key: mysql.db.name
            - name: MYSQL_SERVICE_PORT
              valueFrom:
                configMapKeyRef:
                  name: nacos-cm
                  key: mysql.port
            - name: MYSQL_SERVICE_USER
              valueFrom:
                configMapKeyRef:
                  name: nacos-cm
                  key: mysql.user
            - name: MYSQL_SERVICE_PASSWORD
              valueFrom:
                configMapKeyRef:
                  name: nacos-cm
                  key: mysql.password
            - name: MODE
              value: "cluster"
            - name: NACOS_SERVER_PORT
              value: "8848"
            - name: PREFER_HOST_MODE
              value: "hostname"
            - name: NACOS_SERVERS
              value: "nacos-0.nacos-headless.default.svc.cluster.local:8848 nacos-1.nacos-headless.default.svc.cluster.local:8848 nacos-2.nacos-headless.default.svc.cluster.local:8848"
              # 这里注意更换你的K8s内部域名
  selector:
    matchLabels:
      app: nacos

```

### 部署普通SVC(NodePort)

> 当不需要NodePort形式暴露时,删除type字段与nodePort相关字段即可

```yaml
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"
  labels:
    app: nacos
  name: nacos-nodeport
  namespace: prdtsp
spec:
  ports:
  - name: server
    nodePort: 30235
    port: 8848
  - name: client-rpc
    nodePort: 31294
    port: 9848
  - name: raft-rpc
    nodePort: 30311
    port: 9849
  - name: old-raft-rpc
    nodePort: 30904
    port: 7848
  selector:
    app: nacos
  type: NodePort
```

### 配置域名访问(Ingress)

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nacos-web
  namespace: default

spec:
  rules:
    - host: nacos-web.nacos-demo.com
      http:
        paths:
          - path: /
            backend:
              serviceName: nacos-service #这里填写你的SVC名称
              servicePort: server  #这里填写SVC中spec.ports.name字段,选择你想暴露出来的端口名称即可,也可直接填写spec.ports.port字段.
```



