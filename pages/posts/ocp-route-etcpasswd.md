---
title: OpenShift Route 敏感路径拦截实战笔记
date: 2025-04-16 15:36:50
updated: 2025-04-16 15:36:50
tags: OCP
categories: Linux技术
end: false
---

在 OpenShift 环境中，我们遇到一个安全需求：**拦截 `/etc/passwd` 等敏感路径的访问请求**，防止路径遍历攻击。最初尝试直接在 Route 中配置正则表达式拦截，但发现 OpenShift Route 原生不支持类似 `haproxy.router.openshift.io/deny-regex` 的注解。经过多次探索，最终通过 **多 Route 组合方案** 成功实现目标。

<!-- more -->

# OpenShift Route 敏感路径拦截实战笔记

## 背景
---

## 问题分析
1. **需求场景**：
   - 拦截直接访问 `/etc/passwd` 的请求。
   - 防御路径遍历攻击（如 `/foo/../etc/passwd`）。
2. **技术限制**：
   - OpenShift Route 不支持正则表达式拦截。
   - 应用层（如 Nginx）未配置路径过滤，导致请求穿透到后端。

---

## 探索历程

### 错误尝试：HAProxy 注解拦截
最初误以为 OpenShift Route 支持 `haproxy.router.openshift.io/deny-regex`，但该注解实际不存在。**失败原因**：
- OpenShift Route 基于 HAProxy，但其配置抽象层未开放复杂正则匹配。

**问题**：需调整集群入口架构，与现有 Route 方案不兼容。

------

## 最终方案：多 Route 拦截

通过 **精确匹配敏感路径** 并指向无效服务，实现请求拦截。

### 配置步骤

#### 1. 主 Route（处理正常请求）

```yaml
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: ***
spec:
  host: ***
  path: /
  to:
    kind: Service
    name: ***  # 正常业务服务
    weight: 100
```

#### 2. 拦截 Route（精确匹配敏感路径）

```yaml
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: ***
spec:
  host: ***
  path: /etc/passwd        # 精确匹配路径
  to:
    kind: Service
    name: invalid-service  # 不存在或返回错误的服务
    weight: 100
```

#### 3. 静态错误服务（可选）

若需返回 403，可部署专用服务：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: error-service
spec:
  template:
    spec:
      containers:
      - name: nginx
        image: nginx
        volumeMounts:
        - name: config
          mountPath: /etc/nginx/conf.d
      volumes:
      - name: config
        configMap:
          name: error-config  # 包含返回 403 的 Nginx 配置
---
apiVersion: v1
kind: Service
metadata:
  name: error-service
spec:
  ports:
  - port: 80
    targetPort: 80
```

------

## 验证方法

```bash
# 测试敏感路径
curl -v http://*******/etc/passwd
# 预期结果：HTTP 503（无效服务）或 403（静态错误服务）

# 查看 HAProxy 日志
oc logs -n openshift-ingress <router-pod> | grep "etc/passwd"
```

------

## 总结与反思

1. **OpenShift Route 的限制**：
   - 不支持正则表达式拦截，需通过多 Route 组合实现。
   - 复杂场景建议结合 **Service Mesh** 或 **应用层拦截**。
2. **防御纵深**：
   - **入口层**：Route 拦截已知攻击模式。
   - **应用层**：Nginx 配置过滤敏感路径。
   - **容器层**：非 root 用户 + 只读文件系统。
3. **经验教训**：
   - 验证技术方案时需严格依赖官方文档。
   - 安全防护需多层互补，避免单点失效。
