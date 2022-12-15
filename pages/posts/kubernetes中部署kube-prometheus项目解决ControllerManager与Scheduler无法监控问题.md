---
title: kubernetes中部署kube-prometheus项目解决ControllerManager与Scheduler无法监控问题
categories: Kubernetes
tags: [监控ControllerManager与Scheduler]
date: 2021-03-02 15:26:00
---
## 一、问题描述
------------

> 在部署kube-prometheus到kubernetes集群中总会遇到一个问题，当pod都正常运行的时候，却发现kube-controller-manager和kube-scheduler并没有正常被监控到，即使是新建了新的SVC与两个Pod进行绑定但还是不行。故有此篇文章

**原因如下**

版本1.18+现在使用更安全的https端口10257，并默认禁用http。不幸的是，kube-controller-manager和kube-scheduler都使用了--secure-port绑定到127.0.0.1而不是0.0.0.0

**解决方法：**

更新/etc/kubernetes/manifests/中的清单以将--bind-address 0.0.0.0用于调度程序和控制器管理器，将使用正确的绑定地址重新启动Pod，但是这些设置将无法生存kubeadm升级

 

## 二、新增、更改KubeControllerManager配置

**新增service.yaml**

```bash
vim prometheus-kubeControllerManagerService.yaml
apiVersion: v1
kind: Service
metadata:
  namespace: kube-system
  name: kube-controller-manager
  labels:
    k8s-app: kube-controller-manager
spec:
  selector:
    component: kube-controller-manager
  ports:
  - name: https-metrics
    port: 10257 #端口要和你describe到的ControllerManager的Pod端口信息一致
```

```bash
vim /etc/kubernetes/manifests/kube-controller-manager.yaml
将--bind-address=127.0.0.1 改为 --bind-address=0.0.0.0
```

由于kube-controller-manager是以静态Pod运行在集群中的，所以只要修改静态Pod目录下对应的yaml文件即可。等待一会后，对应服务会自动重启

## 三、新增、更改KubeScheduler配置

**新增service.yaml**

 vim kube-prometheus/manifests/prometheus-serviceMonitorKubeScheduler-service.yaml
输入下面内容 ：

```bash
apiVersion: v1
kind: Service
metadata:
  namespace: kube-system
  name: kube-scheduler
  labels:
    k8s-app: kube-scheduler
spec:
  selector:
    component: kube-scheduler
  ports:
  - name: https-metrics
    port: 10259 #端口要和你describe到的ControllerManager的Pod端口信息一致
```

```bash
vim /etc/kubernetes/manifests/kube-scheduler.yaml
将--bind-address=127.0.0.1 改为 --bind-address=0.0.0.0
```


由于kube-scheduler是以静态Pod运行在集群中的，所以只要修改静态Pod目录下对应的yaml文件即可。等待一会后，对应服务会自动重启



## 四、结果图

![image-20210302150944346](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20210302150944346.png)

## 五、参考信息

https://github.com/prometheus-operator/kube-prometheus/issues/718

## 六、参考Kube-prom项目（已优化）支持k8s-v1.18.0+
[github repo="vlinux/Kube-Prometheus" /]