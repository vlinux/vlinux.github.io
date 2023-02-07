---
title: {{ 合理配置Coredns的Hosts }}
date: {{ date }}
updated: {{ date }}
tags: coredns
categories: Kubernetes
---

在日常运维Kubernetes中经常会遇到很多网络问题，比如在一个Pod中常常需要访问一些业务域名，或者别的集群的域名，如果想要解决那就要搭建一整套DNS系统，来让所有集群跟环境统一使用，但这样未免太麻烦，有时候我们只是想简单的实现Pod能把这个域名解析到某个IP即可，我记得Coredns支持自定义Hosts文件，在配置更新后，Pod可以优先使用coredns定义好的hosts，话不多说，开始修改。

<!-- more -->

---

直接编辑coredns的cm更改即可

```bash
kubectl edit cm -n kube-system coredns
```

```yaml
apiVersion: v1
data:
  Corefile: |-
    .:5353 {
        bind {$POD_IP}
        cache 30
        errors
        health {$POD_IP}:8080
        kubernetes cluster.local in-addr.arpa ip6.arpa {
          pods insecure
          fallthrough in-addr.arpa ip6.arpa
        }
        #加入下方hosts字段即可
        hosts {
          192.168.1.1 www.example.com
          fallthrough
        }
        loadbalance round_robin
        prometheus {$POD_IP}:9153
        forward . /etc/resolv.conf
        reload
    }
kind: ConfigMap
metadata:
  labels:
    app: coredns
    k8s-app: coredns
    kubernetes.io/cluster-service: "true"
    kubernetes.io/name: CoreDNS
    release: cceaddon-coredns
  name: coredns
  namespace: kube-system
  resourceVersion: "460"
```



<!-- Q.E.D. -->
