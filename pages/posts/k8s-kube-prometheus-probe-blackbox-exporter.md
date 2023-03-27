---
title: kubernetes中使用Prometheus-Operator和BlackBox—Exporter实现监控域名钉钉告警
date: 2023-03-01 09:16:00
updated: 
tags:
  - Prometheus-Operator
categories: Prometheus
end: false
---

现有的k8s+prome环境是几年前部署的，所以当时版本的operator并不自带Blackbox_exporter CRD，所以有了这篇文章

最近有个工作需求是监控域名，实际上我自己玩的机器上早就监控着了，但工资这边貌似一直没有，好了开干吧

<!-- more -->



>已有环境为Kubernetes+Kube-Prometheus（Prometheus-Operator项目更名为Kube-Prometheus）
>
>Kubernetes v1.19.6
>
>Kube-Prometheus 0.7.0

在这里贴一张Kube-Prometheus项目对应支持的Kubernetes版本，如果您需要安装kube-prome的话，请优选最新版本

![image-20230301142533409](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301142533409.png)

# 安装[blackboxExporter](https://github.com/prometheus-operator/kube-prometheus/blob/release-0.12/manifests/blackboxExporter-service.yaml)

> 该如何在现有环境下安装呢？我采用的办法是直接使用新版的blackbox crd文件即可，如果出现问题了，那就解决问题（结果就是一切顺利）

在这个[地址](https://github.com/prometheus-operator/kube-prometheus/tree/release-0.12/manifests)中找到所有blackboxExporter开头的文件，安装它

或许你可以直接这样做,如果你的网络允许的话

```bash
***
kubectl apply -f https://github.com/prometheus-operator/kube-prometheus/blob/release-0.12/manifests/blackboxExporter-service.yaml
***
```

安装成功之后，打开Prometheus WebUI，你会看到Target多了一个，不用惊慌，这是正常的表现，但如果五分钟内它是红色的，那你可以惊慌的

![image-20230301144149533](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301144149533.png)



# 配置监控

> 回想一下，在你刚学Prometheus的时候单击安装Blackbox，想要添加一个域名监控是否是直接去修改Prome的配置文件prometheus.yml？ 但现在是在k8s中的CRD，大人时代变了。
>
> 现在你想添加一个job，可并不是直接修改Prometheus配置文件了，当然你如果使用additional的话当我没说
>
> 你也并不能使用ServiceMonitor创建一个你以为的“job”，因为刚刚你安装的那些个CRD，把kind单独命名为了Prode

就像这样，创建一个Prometheus监控黑盒的特殊“job”,然后创建

```
vim blackboxExporter-probeDomain.yaml
```

```yaml
apiVersion: monitoring.coreos.com/v1
kind: Probe
metadata:
  name: probe
  namespace: monitoring
spec:
  jobName: 域名监控
  prober: # 指定blackbox的地址
    url: blackbox-exporter:19115
  module: http_2xx # 配置文件中的检测模块
  targets: # 目标（可以是static配置也可以是ingress配置）
    # ingress <Object>
    staticConfig: # 如果配置了 ingress，静态配置优先
      labels: 
        namespaces: monitoring #为什么加这个标签是因为后续我的alert配置里写了只对这个名称空间下的告警允许告警
      static:
        - https://www.vlinux.cn
#该文件支持的其他字段和配置可以自行探索 kubectl explain probe.spec
```

```bash
kubectl apply -f  blackboxExporter-probeDomain.yaml
```



假如一切顺利，你就会在Promethes WebUI看到如下target新增，这证明你配置的很成功

![image-20230301145914347](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301145914347.png)

如果你有Grafana，那么你已经可以在Grafana去做你想要的对应的面板了，比如这样

![image-20230301150433056](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301150433056.png)

# 配置告警

让我们捋一下如果想让这个域名一旦出现问题，就告警到钉钉需要几个关键步骤

Prometheus本身不支持发到钉钉应用，我们还需要安装Webhook 钩子，还需要在钉钉群里创建一个机器人。May be就这些

配置告警规则，配置钉钉WebHook和群机器人，配置Alertmanager，验证，完事儿

## 配置告警规则

创建Rule CRD文件

```yaml
vim prometheus-blackboxRules.yaml 
---
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  labels:
    prometheus: k8s
    role: alert-rules
  name: domain-rules
  namespace: monitoring
spec:
  groups:
    - name: domain-rules
      rules:
        - alert: 黑盒监控状态
          expr: probe_success == 0
          for: 10s
          labels:
            severity: critical
            namespace: monitoring
          annotations:
            summary: "黑盒探测失败,域名地址: {{ $labels.instance }}"
            description: "探测失败,探测值 = {{ $value }}"
            recoverymessage: "实例 {{ $labels.instance }} 已恢复正常监控"
---
kubectl apply -f  prometheus-blackboxRules.yaml    
```

创建后我们可以看到在WebUI的界面会新增一个规则

![image-20230301152122827](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301152122827.png)

## 配置钉钉WebHook和群机器人

> 在这里WebHook我们使用PrometheusAlert（全家桶）这个开源项目，方便就完事了
>
> 钉钉机器人的申请不再赘述，因为很简单，现在的机器人申请都需要添加关键词，记住了你的告警里面会发什么字就添加相应的关键词进去

**PrometheusAlert**

文档地址：https://feiyu563.github.io/

Github地址：https://github.com/feiyu563/PrometheusAlert

### 在k8s中安装全家桶

> 作者提供了相应的YAML，直接执行就好，执行前记得修改里面的配置文件，钉钉的tekon等等

```bash
kubectl apply -f https://github.com/feiyu563/PrometheusAlert/blob/master/example/kubernetes/PrometheusAlert-Deployment.yaml
```

访问部署好的全家桶，修改钉钉告警模版，像这样

![image-20230301153018566](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301153018566.png)

钉钉告警模版（这个模版的告警详情在下面）

```bash
{{ $var := .externalURL}}{{ $status := .status}}{{ range $k,$v:=.alerts }} {{if eq $status "resolved"}}
## [告警恢复-通知]({{$var}})
#### 监控指标: {{$v.labels.alertname}}
{{ if eq $v.labels.severity "warning" }}
#### 告警级别: **<font color="#E6A23C">{{$v.labels.severity}}</font>**
{{ else if eq $v.labels.severity "critical"  }}
#### 告警级别: **<font color="#F56C6C">{{$v.labels.severity}}</font>**
{{ end }}
#### 当前状态: **<font color="#67C23A" size=4>已恢复</font>**
#### 故障实例: {{$v.labels.instance}}
* ###### 开始时间: {{GetCSTtime $v.startsAt}}
* ###### 恢复时间: {{GetCSTtime $v.endsAt}}

#### 告警恢复: <font color="#67C23A">{{$v.annotations.recoverymessage}}</font>
{{ else }}
## [监控告警-通知]({{$var}})
#### 监控指标: {{$v.labels.alertname}}
{{ if eq $v.labels.severity "warning" }}
#### 告警级别: **<font color="#E6A23C" size=4>{{$v.labels.severity}}</font>**
#### 当前状态: **<font color="#E6A23C">需要处理</font>**
{{ else if eq $v.labels.severity "critical"  }}
#### 告警级别: **<font color="#F56C6C" size=4>{{$v.labels.severity}}</font>**
#### 当前状态: **<font color="#F56C6C">需要处理</font>**
{{ end }}
#### 故障实例: {{$v.labels.instance}}
* ###### 告警阈值: {{$v.annotations.description}}
* ###### 触发时间: {{GetCSTtime $v.startsAt}}
{{ if eq $v.labels.severity "warning" }}
#### 告警触发: <font color="#E6A23C">{{$v.annotations.summary}}</font>
{{ else if eq $v.labels.severity "critical" }}
#### 告警触发: <font color="#F56C6C">{{$v.annotations.summary}}</font>
{{ end }}
{{ end }}
{{ end }}
```

## 配置Alertmanager

新建Alert配置CRD

```bash
vim alertmanager-config.yaml
```

```yaml
apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
  name: dinghook
  namespace: monitoring
  labels:
    alertmanagerConfig: example
spec:
  receivers:
    - name: Critical
      webhookConfigs:
        - url: http://prometheus-alert-center:8080/prometheusalert?type=dd&tpl=prometheus-dd&ddurl=https://oapi.dingtalk.com/robot/send?access_token=e3c0bc10f8********
          sendResolved: true
  route:
    groupBy: ["job"]
    groupWait: 30s
    groupInterval: 5m
    repeatInterval: 12h
    receiver: Critical
    routes:
      - receiver: Critical
        match:
          severity: critical
          namespace: default
```

```bash
kubectl apply -f alertmanager-config.yaml
```

创建后你可以访问Alertmanger的Web界面看看你是否修改成功，他会自动加载配置文件的

## 验证

我使用的是我自己的域名，所以我停掉，并且恢复就可以验证，告警和恢复是否发出了。下面放一张恢复的样子。

![image-20230301153036377](https://cos.vlinux.cn/www-vlinux-cn-blog-img/image-20230301153036377.png)

文章就到这里，如有疑问，请直接点击微信联系我







```bash

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC4+hofFobukwiaECjTrKm3dNjmP2cFiOFCgkbU0Eg/Ot6BtCkk+Lu9OyRwJs/vELor42CSliNS1uAXqlh3a4vc4c0BvqBSLmuv2kNpm+FjlSB3JbElp2thW5Ris+Q+TuIFd7XfBjX9zZgm2swrumgpinPtHu31lH/lr472C5mjxjv20KmZUasoZ0lFZVWox9dqCq/UPCK1Zv4XeUHESSjT+8cHPsMa36Vej3W29YOzMMnCT70vIVqcM6LYS/5odyiuc+ofCJS0mIuKRG2mPh4f6owSID/xIKW6bX0Qo7M4b6z7lu6xJczzrOrif/47FBzNfzD+Mt3ww7BAi+tPs5Mr3ynZDMeMSeLk3aNtYMtOCwyCI0toxTr+SjMzHKzKJdE0K/f+lloGkC/c7zfIGB+TwO1eHYFoFf0ALyftExioUbJOmflBAgdiFaLfudxu/fCXZenGpCm9D+XhIlFu+lpsViu255xwy18nJNkvgapU7tukgOSyydUiD1kAl+L/NCc= jenkins@025447547acc


ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDQnmdriCxU7jQzBBg6vCyUKzI102UJpTWBJ6xa8jnpTXzBi8XBMtq96PbWKCp2N+33wNjcGMfIOHXxokomIzmMtHMFP7F9AHLLYQuARoP43cby9/HSS5qXEEpWL2b2X9wh2zIbY96pcCwX7zW9wMofS4AiWZIn/5bzG/qriobCuQKXO+UnmRLGUfGv9BYoGdNFyyMfaZc3JMRugSD9LIdqXvoCcmFp+PHV1ErKrDMLAN4mBc4bdRnU3SYtpnb/tEd6TCrUyze4zQ0TkdDyXfZpytLSAk39BRBR/PSnYiQoWirEixmQb5Y5Ru6Pe4MGwfJL4t5mQ7iIf2U9S1eq1+z4p92/jUr45F9rARt2pu1GOo/xOIndK7el4aRUVKL5oXimzuGH7XTyHL4wwdtYQQP1dWF391iNbD7eEAXB8PVdbV5mo6HwLoAg2aKRIqNyin7zdqA6bm+vtk8CtQfdx6yWL6W18ceSqNgz2GvG8FjPa0uuryIN8njzCKZVCqlvdTk= root@025447547acc
```

智慧巴士后端接口测试失败，请处理。Jenkins地址：http://10.99.102.11:8081/view/Monitor/job/bus-platform/
