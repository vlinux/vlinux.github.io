---
title: kubernetes coredns添加自定义DNS解析记录
categories: Kubernetes
tags: [Kubernetes,coredns]
date: 2022-02-25 10:10:18
---
# kubernetes  coredns 添加自定义DNS解析记录

> coredns 自带 hosts 插件， 允许像配置 hosts 一样配置自定义 DNS 解析，修改 `kube-system` 中 `configMap` 的 `coredns` 添加如下设置即可

```
 hosts {
        172.21.91.28 cache.redis
        172.21.91.28 persistent.redis
          
        fallthrough
    }
```

修改后文件如下

```yaml
.:53 {
    errors
    health
    kubernetes cluster.local in-addr.arpa ip6.arpa {
       pods insecure
       upstream
       fallthrough in-addr.arpa ip6.arpa
    }
    hosts {
        172.21.91.28 cache.redis
        172.21.91.28 persistent.redis
          
        fallthrough
    }
    prometheus :9153
    proxy . /etc/resolv.conf
    cache 30
    loop
    reload
    loadbalance
}
```

