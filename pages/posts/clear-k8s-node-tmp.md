---
title: 清理k8s节点空间
date: 2025-07-08 16:49:11
updated: 2025-07-08 16:49:11
tags:
categories:
end: false
---

<!-- more -->

# Kubernetes Pod 数据清理笔记

## 背景

在 Kubernetes 集群中，节点的磁盘空间不足，触发了磁盘告警。为了清理不必要的数据，我需要找出 `/var/lib/kubelet/pods/44be8a3d-d1dc-4b41-8d16-1ecb80d216f5/volumes/kubernetes.io~empty-dir/tmpdata/persistent-queue/` 目录下的数据是由哪个 Pod 或容器生成的。

## 步骤

### 1. 确认 Pod 的 UID

首先，我确认了该路径中的 UID，即 `44be8a3d-d1dc-4b41-8d16-1ecb80d216f5`，这是目标 Pod 在 Kubernetes 中的唯一标识符。

### 2. 查找 Pod 的名称

使用以下命令列出当前命名空间下的所有 Pods，以找到与该 UID 相对应的 Pod 名称：

```bash
kubectl get pods --all-namespaces -o json | jq '.items[] | select(.metadata.uid=="44be8a3d-d1dc-4b41-8d16-1ecb80d216f5") | .metadata.name'
```

如果您没有安装 `jq`，可以手动逐个检查 Pods，确认 UID。

### 3. 确认 Pod 所在的命名空间

在查找 Pod 名称的同时，确认该 Pod 所在的命名空间，之后使用下述命令确认 Pod 的详细信息：

```
kubectl describe pod <pod-name> -n <namespace>
```

### 4. 进入 Pod 检查数据

确认 Pod 和容器信息后，我可以进入该 Pod 的终端，以查看具体存储在指定路径下的数据：

```
kubectl exec -it <pod-name> -n <namespace> -- /bin/sh
```

或者

```
kubectl exec -it <pod-name> -n <namespace> -- /bin/bash
```

进入之后，检查该目录：

```
cd /tmpdata/persistent-queue/
ls -la
```

### 5. 评估和清理数据

通过检查该目录中的文件和数据，评估哪些数据可以安全地删除，以释放磁盘空间。

