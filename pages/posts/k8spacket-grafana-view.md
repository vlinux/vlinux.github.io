---
title: 使用k8spacket对k8s集群中微服务之间链路调用可视化
date: 2023-02-13 17:16:14
updated: 2021-02-13 17:16:14
tags: 
  - 全链路监控
categories: Kubernetes
---

​    本文章可以助你可视化k8s集群中的 TCP 流量。了解微服务如何相互通信，以及建立了多少连接，交换了多少字节，这些连接处于活动状态的时间。

你在网上看到的任何文章，包括你在Github仓库看到的官方教程，根本搭建不出来，你想少踩坑？

那就跟我一起......往下看

<!-- more -->

### 前言 

如何知道 K8S 集群内 Pod 之间建立了哪些 TCP 连接？集群之间存在哪些调用关系？

使用 k8spacket 和Grafana，你可以可视化集群中的 TCP 流量。了解工作负载如何相互通信，以及建立了多少连接，交换了多少字节，这些连接处于活动状态的时间。

### 介绍 

k8spacket是用 Golang 编写的工具，它使用gopacket第三方库来嗅探工作负载（传入和传出）上的 TCP 数据包。它在运行的容器网络接口上创建 TCP 侦听器。当 Kubernetes 创建一个新容器时，CNI 插件负责提供与其他容器进行通信的可能性。最常见的方法是用linux namespace隔离网络并用veth pair连接隔离的 namespace 与网桥。除了bridge 类型，CNI 插件还可以使用其他类型（vlan, ipvlan,macvlan)，但都为容器创建了一个网络接口，它是k8spacket嗅探器的主要句柄。

k8spacket有助于了解 Kubernetes 集群中的 TCP 数据包流量：

-  显示集群中工作负载之间的流量
-  通知流量在集群外路由到哪里
-  显示有关连接关闭套接字的信息
-  显示工作负载发送/接收的字节数
-  计算建立连接的时间
-  显示整个集群中工作负载之间的网络连接拓扑

k8spacket是一个 Kubernetes API 客户端，可以将嗅探到的工作负载解析为可视化上可见的集群资源名称（Pods和Services）。它作为DaemonSet Pod启动，使用 hostNetwork，并监听节点上的网络接口。

k8spacket 收集 TCP 流、处理数据，使用 Node Graph API Grafana 数据源插件（详情请查看 Node Graph API 插件），通过 API 展示在Grafana面板。

要安装k8spacket，需要同时安装 Grafana。下面将在Kind安装的 k8s 集群上做演示。

### 安装 k8spacket 

使用 Helm 安装：

```
helm repo add k8spacket https://k8spacket.github.io/k8spacket-helm-chart
helm install k8spacket --namespace k8spacket k8spacket/k8spacket --create-namespace .
```

默认安装会使用下面的命令获取所有需要监听的网络接口：

```
ip address | grep @ | sed -E 's/.* (\w+)@.*/\1/' | tr '\n' ',' | sed 's/.$//'1.
```

其中可能包含一些状态为Down的接口，此时启动k8spacket会报错：

```
2022/08/15 00:17:34 error opening pcap handle: tunl0: That device is not up1.
```

报错中提示网络接口tunl0状态不是up。

所以需要自定义修改values.yaml中的参数。将charts包拉取到本地，解压之后再修改：

```
mkdir k8spacket
helm fecth k8spacket/k8spacket
tar -zxf k8spacket-0.1.0.tgz
cd k8spacket
```

修改 values.yaml 中的内容，过滤掉tunl0：

```
k8sPacket:
  plugins:
    - https://github.com/k8spacket/plugins/releases/download/v1.0.0/nodegraph.so 
    - https://github.com/k8spacket/plugins/releases/download/v1.0.0/tls-parser.so 
    #上面这两个地址如果你所部属的集群在国外，或者有其他的歪门邪道可以访问到并且下载，那么没问题，就默认，如果访问不到？那我推荐你提前下载下来并且上传你的oss得到外链替换，或者你可以用你觉得更简单的办法
 tcp:
   listener:
     interfaces:
       ## 实现容器网络接口的命令
       command: "ip address | grep @ | grep -v tunl0 | sed -E 's/.* (\\w+)@.*/\\1/' | tr '\\n' ',' | sed 's/.$//'"
       ## 多久刷新一次要监听的网络接口列表
       refreshPeriod: "10s"
     ## 每 (periodDuration) 秒，刷新在过去 (closeOlderThanDuration) 秒内没有看到活动的连接。
     flushing:
       periodDuration: "10s"
       closeOlderThanDuration: "20s"1.2.3.4.5.6.7.8.9.10.11.12.
```

-  refreshPeriod参数表示多久刷新一次要监听的网络接口列表，增加新的网络接口监听，移除旧网络接口监听。
-  每 periodDuration秒，刷新在过去 closeOlderThanDuration秒内没有看到活动的连接。

安装成功，包含以下Daemonset Pods 和 Service：

```
# k get pod -n k8spacket -o wide
NAME              READY   STATUS    RESTARTS   AGE   IP             NODE                    NOMINATED NODE   READINESS GATES
k8spacket-9m4cz   1/1     Running   0          10m   192.168.16.4   k8s118-control-plane    <none>           <none>
k8spacket-b4q9k   1/1     Running   0          10m   192.168.16.6   k8s118-control-plane3   <none>           <none>
k8spacket-b5nnp   1/1     Running   0          10m   192.168.16.7   k8s118-control-plane2   <none>           <none>
k8spacket-c25jh   1/1     Running   0          10m   192.168.16.2   k8s118-worker           <none>           <none>
k8spacket-cqqxh   1/1     Running   0          10m   192.168.16.5   k8s118-worker2          <none>           <none>
k8spacket-h9hjc   1/1     Running   0          10m   192.168.16.3   k8s118-worker3          <none>           <none>
# k get svc -n k8spacket -o wide
NAME        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE   SELECTOR
k8spacket   ClusterIP   11.0.227.158   <none>        8080/TCP   31m   app.kubernetes.io/instance=k8spacket,app.kubernetes.io/name=k8spacket1.2.3.4.5.6.7.8.9.10.11.
```

k8spacket Pod 提供了 /metrics 接口暴露指标：

```
curl 192.168.16.4:8080/metrics
```

### 安装 dashboards 

> 题外话，这步可以不做，Github仓库人直接有对应的面板Json 你可以直接下载，你做也没关系，更何况我Grafana在安装的时候也携带了面板

下载k8spacket项目，并将dashboards目录下的面板 configmaps 创建到 K8S 中：

```
wget https://github.com/k8spacket/k8spacket/archive/refs/heads/master.zip
unzip master.zip
cd k8spacket-master
kubectl  apply --recursive -f ./dashboards
```

创建了 k8spacket-logs-dashboard、k8spacket-metrics-dashboard、k8spacket-node-graph-dashboard三个面板。

其中的metrics面板公开了 Prometheus 指标，这里不做演示。只关心node-graph面板。

### 安装 grafana 

> 如果你已经安装好了Grafana并且熟悉怎么配置，那么就按你的来，如果你不想麻烦，就按我的来

使用 Helm 安装 grafana，helm-charts 包地址如下：

-  https://github.com/grafana/helm-charts

同样的拉取到本地：

> 这里有个重要的点，不管你看到这个文章的时候Grafana官方的chat包更新到什么时候，你都如果想少踩坑 你就必须按照我的要求来把

```
helm repo add grafana https://grafana.github.io/helm-charts
helm fetch grafana/grafana
tar -zxf grafana-6.50.7.tgz
cd grafana/
```

-  charts包版本为：6.50.7  
-  grafana版本为：8.5.15 （本文最重要的点）

修改values.yaml，将 Node Graph API 插件和数据源，以及 node-graph dashboard configmaps 添加到 Grafana。例如：

> 这里加不加其他的配置 持久化什么的 你自己看着办，总之下面的配置必须要加

```
env:
 GF_INSTALL_PLUGINS: hamedkarbasi93-nodegraphapi-datasource,marcusolsson-json-datasource,marcusolsson-dynamictext-panel
dashboardProviders:
 dashboardproviders.yaml:
   apiVersion: 1
   providers:
   - name: 'default'
     orgId: 1
     folder: ''
     type: file
     disableDeletion: false
     editable: true
     options:
       path: /var/lib/grafana/dashboards/default
dashboardsConfigMaps:
 default: k8spacket-node-graph-dashboard
datasources:
 nodegraphapi-plugin-datasource.yaml:
     apiVersion: 1
     datasources:
     - name: "Node Graph API"
       jsonData:
         url: "http://k8spacket.k8spacket.svc.cluster.local:8080/nodegraph"
       access: "proxy"
       basicAuth: false
       isDefault: false
       readOnly: false
       type: "hamedkarbasi93-nodegraphapi-datasource"
       typeLogoUrl: "public/plugins/hamedkarbasi93-nodegraphapi-datasource/img/logo.svg"
       typeName: "node-graph-plugin"
       orgId: 1
       version: 1
 marcusolsson-json-datasource.yaml:
     apiVersion: 1
     datasources:
       - name: "JSON API"
         url: "http://k8spacket.k8spacket.svc.cluster.local:8080/tlsparser/api/data"
         access: "proxy"
         basicAuth: false
         isDefault: false
         readOnly: false
         type: "marcusolsson-json-datasource"
         typeLogoUrl: "public/plugins/marcusolsson-json-datasource/img/logo.svg"
         typeName: "json-api-plugin"
         orgId: 1
         version: 1
```

在values.yaml目录下执行创建命令：

复制

```
helm install grafana -f values.yaml  ./
```

获取到admin账号的密码：

复制

```
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

开启临时端口转发，使得集群外可以访问grafana实例：

复制

```
kubectl --namespace default port-forward service/grafana 3000:80  --address 0.0.0.0
```

通过http://{Kind宿主机IP}:3000打开grafana面板，并使用上面获取到的密码登录，可以看到Node Graph API插件成功安装：

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/21a2a4033c886b86465457fb53ae3e0e892455.jpg)

在node graph面板可以看到集群中网络连接拓扑：

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/09be930814432ec76af146c04a5f47bf6d047b.jpg)

### 使用 

#### 统计类型 

-  connection：帮助了解工作负载之间以及与外部客户端之间建立了多少连接。它会告诉你哪些套接字保持打开状态并可能导致问题。
-  bytes：显示工作负载发送或接收的字节数。
-  duration：计算连接的生命周期。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/473a034013dbdddaa240304639729b6d1bfa66.jpg)

#### 过滤器 

-  by namespace：选择一个或多个 k8s 命名空间

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/730a6a477c925d706753817def6641f5c407bd.jpg)

-  by names included：选择工作负载名称进行可视化
-  by names excluded：从可视化中排除工作负载名称

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/47d2f8350733ec0d7ac1752f3fa46923558966.jpg)
