---
title: SSH Config 配置如何覆盖 Git 默认端口
categories: Linux技术
tags: [网络,SSH,Gitlab]
date: 2025-09-04 16:56:45
---

## 背景

因安全需求，Gitlab部署好后，原22端口需替换为2222端口。所以会出现开发拉代码报错，因为git clone默认使用22端口拉代码。

需要修改SSH相关参数就可以实现在本机对即将请求的22端口进行转发至2222

## 核心原理：SSH 配置优先级

### SSH Config 工作机制

SSH 客户端会按照以下优先级读取配置：

1. 命令行参数（最高优先级）
2. `~/.ssh/config`用户级配置
3. `/etc/ssh/ssh_config`系统级配置
4. SSH 默认值（最低优先级）

### 示例配置分析

```
# ~/.ssh/config 内容
Host git.hycs.sitc
  HostName git.hycs.sitc
  User git
  Port 2222  # 显式指定端口，覆盖默认值
  IdentityFile ~/.ssh/id_rsa
```

## 验证方法

### 查看实际连接信息

```
# 使用详细模式查看 SSH 连接过程
ssh -v git@git.hycs.sitc

# 输出示例：
debug1: Connecting to git.hycs.sitc [x.x.x.x] port 2222.
```

### 测试端口连通性

```
# 测试默认端口
telnet git.hycs.sitc 22

# 测试自定义端口  
telnet git.hycs.sitc 2222
```

## 端口配置方案

### 方案一：使用 SSH 配置（推荐）

```
# ~/.ssh/config
Host git.example.com
  HostName git.example.com
  User git
  Port 2222
  IdentityFile ~/.ssh/id_rsa

# 多个 Git 服务配置示例
Host github.com
  User git
  Port 22

Host gitlab.company.com
  User git
  Port 2222
```

### 方案二：Git URL 显式指定端口

```
# 克隆时指定端口
git clone ssh://git@git.hycs.sitc:2222/username/repo.git

# 修改现有远程地址
git remote set-url origin ssh://git@git.hycs.sitc:2222/username/repo.git
```

### 方案三：全局 SSH 参数配置

```
# 设置全局 SSH 选项
git config --global core.sshCommand "ssh -p 2222"

# 或针对特定仓库设置
git config core.sshCommand "ssh -p 2222 -i ~/.ssh/custom_key"
```

## 服务器端检查

### 查看 GitLab SSH 配置

```
# 查看 GitLab 当前 SSH 端口配置
sudo gitlab-rails runner 'puts Gitlab.config.gitlab_shell.ssh_port'

# 检查配置文件
cat /etc/gitlab/gitlab.rb | grep gitlab_shell.ssh_port
```

### 修改 GitLab SSH 端口

```
# /etc/gitlab/gitlab.rb
gitlab_rails['gitlab_shell_ssh_port'] = 2222

# 重载配置
sudo gitlab-ctl reconfigure
```

## 故障排除

### 常见问题及解决方案

| 问题现象 |      可能原因      |        解决方案        |
| :------: | :----------------: | :--------------------: |
| 连接超时 |   防火墙阻止端口   |     检查防火墙规则     |
| 权限拒绝 |   SSH 密钥不匹配   | 检查 IdentityFile 配置 |
| 协议错误 | 服务未监听指定端口 |    验证端口监听状态    |

### 端口检测命令

```
# 检查服务器端口监听状态
sudo netstat -tlnp | grep :2222
sudo ss -tlnp | grep :2222

# 检查防火墙设置
sudo ufw status
sudo iptables -L -n
```

## 最佳实践

1. **统一配置管理**：使用 SSH Config 统一管理多环境配置
2. **端口标准化**：尽量使用标准端口，减少特殊配置
3. **文档化**：记录端口特殊配置及原因
4. **安全考虑**：非标准端口可减少自动化攻击，但不应作为唯一安全措施

## 配置示例汇总

### 多环境 SSH 配置

```
# ~/.ssh/config
# 公司内部 GitLab
Host internal-git
  HostName git.internal.com
  User git
  Port 2222
  IdentityFile ~/.ssh/internal_key

# GitHub
Host github.com
  User git
  Port 22
  IdentityFile ~/.ssh/github_key

# 其他 Git 服务
Host *
  # 默认配置
  TCPKeepAlive yes
  ServerAliveInterval 60
```
