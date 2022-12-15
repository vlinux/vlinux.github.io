---
title: k8s删除pv一直处于terminating
categories: Kubernetes
tags: [terminating]
date: 2021-02-24 17:16:14
---
pod显示解决办法

kubectl delete pod [pod name] --force --grace-period=0 -n [namespace]
pv 显示解决办法

kubectl patch pv pvName1  pvName2 -p '{"metadata":{"finalizers":null}}'
PVC 显示解决办法

kubectl patch pvc pvcName1  pvcName2 -p '{"metadata":{"finalizers": []}}' --type=merge