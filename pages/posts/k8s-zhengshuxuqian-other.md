---
title: Kubernetes 证书续签问题分析与解决
date: 2025-07-19 12:10:14
updated: 2025-07-19 12:10:14
tags: kube-controller-manager
categories: Kubernetes
end: false
---

<!-- more -->

# Kubernetes 证书续签问题分析与解决笔记

## 问题描述

在续签 Kubernetes 证书时遇到了以下错误：

```markdown
I0718 14:04:10.452667       1 tlsconfig.go:240] "Starting DynamicServingCertificateController"
E0718 14:04:11.397015       1 leaderelection.go:330] error retrieving resource lock kube-system/kube-controller-manager: leases.coordination.k8s.io "kube-controller-manager" is forbidden: User "system:kube-controller-manager" cannot get resource "leases" in API group "coordination.k8s.io" in the namespace "kube-system"
```

错误表明 `system:kube-controller-manager` 用户没有权限获取 `kube-system` 命名空间下的 `leases` 资源。

## 问题分析

1. **背景知识**：
   - Kubernetes 使用 leader election 机制来确保控制器管理器等高可用组件只有一个实例处于活跃状态
   - 这种选举机制依赖于 `coordination.k8s.io` API 组中的 `leases` 资源
   - `kube-controller-manager` 需要权限来创建和更新这些 lease 资源
2. **根本原因**：
   - 默认情况下，`system:kube-controller-manager` 用户可能缺少对 leases 资源的必要权限
   - 这可能是由于集群初始配置不完整或证书续签后权限重置导致的

## 解决方案

我采取了以下步骤解决问题：

1. **创建 ClusterRole 和 ClusterRoleBinding**：

   ```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     name: system:kube-controller-manager-binding
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: ClusterRole
     name: system:kube-controller-manager
   subjects:
   - apiGroup: rbac.authorization.k8s.io
     kind: User
     name: system:kube-controller-manager
   
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     name: system:kube-controller-manager-leases
   rules:
   - apiGroups:
     - coordination.k8s.io
     resources:
     - leases
     verbs:
     - get
     - create
     - update
     - patch
   ```

2. **创建 ServiceAccount**：

   ```bash
   kubectl -n kube-system create serviceaccount kube-controller-manager
   ```

3. **重启 kube-controller-manager 服务**：

   ```bash
   systemctl restart kube-controller-manager
   ```

## 解决原理

1. **ClusterRole**：
   - 创建了专门的 `system:kube-controller-manager-leases` ClusterRole
   - 授予了对 `leases` 资源的 get、create、update 和 patch 权限
2. **ClusterRoleBinding**：
   - 将 `system:kube-controller-manager` 用户绑定到 `system:kube-controller-manager` ClusterRole
   - 确保用户拥有执行其功能所需的权限
3. **ServiceAccount**：
   - 创建了 `kube-controller-manager` ServiceAccount
   - 虽然错误中涉及的是 User 而非 ServiceAccount，但创建它有助于确保权限体系的完整性

## 经验总结

1. Kubernetes 组件需要特定的 RBAC 权限才能正常工作
2. 证书续签或集群升级后，权限配置可能会发生变化，需要验证
3. 控制器管理器这类核心组件需要 leases 资源权限来实现 leader election
4. 查看组件日志是诊断权限问题的第一步
5. 使用 RBAC 资源可以精确控制 Kubernetes 组件的访问权限

## 预防措施

1. 在集群初始化时确保所有核心组件都有正确的 RBAC 配置
2. 定期检查核心组件的日志以发现潜在问题
3. 将关键 RBAC 配置纳入基础设施即代码(IaC)管理
4. 在升级或证书轮换前备份关键配置

通过这次问题解决，我对 Kubernetes 的 RBAC 系统和控制器管理器的工作原理有了更深入的理解。希望这个记录能帮助遇到类似问题的同行快速定位和解决问题。
