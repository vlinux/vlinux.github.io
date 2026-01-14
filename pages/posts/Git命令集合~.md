---
title: 记一篇Git使用攻略
categories: Linux技术
tags: [GIt,命令]
date: 2025-08-27 16:59:00
---
# Git 命令大全与深度解读

本文全面梳理了 Git 的常用命令及其应用场景，旨在帮助开发者从入门到精通。

## 一、配置与初始化

### 1.1 全局配置
```bash
# 设置全局用户名和邮箱（提交者身份标识）
git config --global user.name "您的姓名"
git config --global user.email "您的邮箱"

# 查看当前所有配置
git config --list

# 设置默认文本编辑器（如 VS Code）
git config --global core.editor "code --wait"
```

### 1.2 仓库初始化
```bash
# 在当前目录初始化一个新的 Git 仓库
git init

# 初始化并指定默认分支名（如 main）
git init -b main

# 克隆一个远程仓库到本地
git clone <仓库URL>

# 克隆时指定分支
git clone -b <分支名> <仓库URL>
```

## 二、文件操作与提交

### 2.1 文件状态管理
```bash
# 查看工作区和暂存区的状态
git status

# 简洁模式查看状态
git status -s

# 显示工作区与暂存区的差异
git diff

# 显示暂存区与最后一次提交的差异
git diff --cached
```

### 2.2 添加与提交
```bash
# 添加指定文件到暂存区
git add <文件名>

# 添加所有变更（新建、修改，但不包括删除）
git add .

# 添加所有变更（包括删除）
git add -A

# 交互式暂存（选择要添加的更改块）
git add -p

# 提交暂存区内容到本地仓库
git commit -m "提交信息"

# 直接提交所有已跟踪文件的变更（跳过 add）
git commit -a -m "提交信息"

# 修改最后一次提交的信息或内容
git commit --amend
```

### 2.3 文件管理
```bash
# 删除工作区文件并停止跟踪
git rm <文件名>

# 停止跟踪文件但保留在工作区
git rm --cached <文件名>

# 移动或重命名文件
git mv <原文件名> <新文件名>
```

## 三、分支与标签

### 3.1 分支管理
```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地和远程分支
git branch -a

# 创建新分支
git branch <分支名>

# 切换分支
git checkout <分支名>

# 创建并切换到新分支
git checkout -b <分支名>

# 删除已合并的分支
git branch -d <分支名>

# 强制删除未合并的分支
git branch -D <分支名>
```

### 3.2 分支合并与变基
```bash
# 合并指定分支到当前分支
git merge <分支名>

# 将当前分支变基到目标分支
git rebase <分支名>

# 交互式变基（编辑、合并、重排提交）
git rebase -i <提交哈希或分支名>
```

### 3.3 标签管理
```bash
# 列出所有标签
git tag

# 创建轻量标签
git tag <标签名>

# 创建带注释的标签
git tag -a <标签名> -m "标签说明"

# 推送单个标签到远程
git push origin <标签名>

# 推送所有标签到远程
git push origin --tags

# 删除本地标签
git tag -d <标签名>
```

## 四、远程仓库协作

### 4.1 远程仓库管理
```bash
# 查看远程仓库信息
git remote -v

# 添加远程仓库
git remote add <名称> <URL>

# 删除远程仓库
git remote rm <名称>

# 修改远程仓库 URL
git remote set-url <名称> <新URL>
```

### 4.2 拉取与推送
```bash
# 从远程获取最新数据但不合并
git fetch <远程名>

# 拉取并合并远程分支到本地
git pull <远程名> <分支名>

# 拉取并通过变基合并（保持线性历史）
git pull --rebase <远程名> <分支名>

# 推送本地分支到远程
git push <远程名> <分支名>

# 强制推送（覆盖远程，慎用！）
git push --force

# 删除远程分支
git push <远程名> --delete <分支名>
```

## 五、撤销与重置

### 5.1 撤销修改
```bash
# 丢弃工作区的修改（恢复到最后一次提交状态）
git checkout -- <文件名>

# 将文件从暂存区移回工作区（取消暂存）
git reset <文件名>

# 重置到指定提交（保留工作区修改）
git reset --soft <提交哈希>

# 重置到指定提交（默认，保留工作区修改但取消暂存）
git reset --mixed <提交哈希>

# 彻底重置到指定提交（丢弃所有修改）
git reset --hard <提交哈希>
```

### 5.2 撤销提交
```bash
# 创建一个新提交来撤销指定提交的更改
git revert <提交哈希>
```

### 5.3 暂存更改
```bash
# 暂存当前工作区和暂存区的修改
git stash

# 列出所有暂存记录
git stash list

# 恢复最近暂存的修改并删除记录
git stash pop

# 恢复暂存的修改但保留记录
git stash apply

# 删除最近暂存的修改
git stash drop
```

## 六、查看历史与比较

### 6.1 查看历史
```bash
# 显示当前分支的提交历史
git log

# 简洁模式显示历史
git log --oneline

# 图形化显示分支和合并历史
git log --graph

# 显示指定文件的修改历史
git log -p <文件名>

# 显示最近 n 条提交
git log -n <数量>
```

### 6.2 比较与追溯
```bash
# 显示某次提交的详细内容
git show <提交哈希>

# 显示文件每行的最后修改信息
git blame <文件名>

# 显示 HEAD 的所有历史操作（包括撤销的）
git reflog
```

## 七、高级功能

### 7.1 二分查找
```bash
# 开始二分查找
git bisect start

# 标记当前提交为"有问题"
git bisect bad

# 标记已知的"正常"提交
git bisect good <提交哈希>

# 结束查找并重置
git bisect reset
```

### 7.2 子模块
```bash
# 添加子模块
git submodule add <URL> <路径>

# 初始化子模块
git submodule init

# 更新子模块
git submodule update
```

### 7.3 清理工作区
```bash
# 预览将被删除的未跟踪文件
git clean -n

# 强制删除未跟踪文件
git clean -f

# 强制删除未跟踪文件和目录
git clean -df
```

## 八、实用技巧与场景

### 8.1 命令别名
```bash
# 设置全局别名
git config --global alias.st 'status -sb'
git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)'"
```

### 8.2 紧急修复流程
1. 暂存当前工作：`git stash save "工作描述"`
2. 创建修复分支：`git checkout -b hotfix main`
3. 修复并提交
4. 切换回主分支：`git checkout main`
5. 合并修复：`git merge hotfix`
6. 推送：`git push origin main`
7. 恢复工作：`git stash pop`

### 8.3 选择性提交（Cherry-pick）
```bash
# 将指定提交应用到当前分支
git cherry-pick <提交哈希>
```

---

# Git免密拉代码配置教程

下文详细介绍了在 Linux 和 Windows 系统上，为 Git 配置免身份验证拉取代码的多种方法，涵盖 SSH 方式、HTTPS 方式以及应对 MFA (双因素认证) 的特殊场景。

## 📊 免密方式对比速查

| 方式                      | 安全性 | 便利性             | 适用场景                     | 特点                                     |
| :------------------------ | :----- | :----------------- | :--------------------------- | :--------------------------------------- |
| **SSH 密钥对**            | 非常高 | 一次配置，长期有效 | 所有主流 Git 服务            | 需配置密钥对，无需传输密码，完美支持 MFA |
| **HTTPS 凭证缓存**        | 中     | 需定期重新认证     | 内网或非关键项目             | 将密码缓存于内存一段时间                 |
| **HTTPS 凭证存储**        | 中     | 一次输入，长期有效 | 个人开发机                   | 将密码**明文**保存于本地文件             |
| **Personal Access Token** | 高     | 令牌需妥善保管     | **启用了 MFA 的 HTTPS 操作** | 使用令牌替代密码，需配置                 |

---

## 🔐 一、SSH 密钥方式（推荐，支持 MFA）

这是最安全且一劳永逸的方法，尤其适合已开启 MFA 的账户。

### 1. 生成 SSH 密钥对
在终端 (Linux/macOS) 或 Git Bash (Windows) 中执行：

```bash
# 使用默认名称和路径（推荐）
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 或者，为特定平台生成自定义名称的密钥
# ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_rsa_github
```
*   `-t rsa`: 指定密钥类型为 RSA。
*   `-b 4096`: 指定密钥长度为 4096 位，更安全。
*   `-C`: 添加注释，通常用邮箱，便于识别。
*   `-f`: 指定密钥文件的自定义名称和路径（非必需）。
*   执行命令后，按提示操作即可（可设置密钥密码，也可直接回车留空）。

### 2. 启动 SSH 代理并添加私钥
```bash
# 这一步可做可不做
# 启动 SSH 代理
eval "$(ssh-agent -s)"

# 将默认私钥 (~/.ssh/id_rsa) 添加到代理
ssh-add ~/.ssh/id_rsa

# 如果生成了自定义名称的密钥，则指定路径添加
# ssh-add ~/.ssh/id_rsa_github
```

### 3. 将公钥添加到 Git 服务器
1.  复制公钥内容（`.pub` 文件）：
    ```bash
    # Linux/macOS
    cat ~/.ssh/id_rsa.pub
    
    # Windows (Git Bash)
    cat /c/Users/your_username/.ssh/id_rsa.pub
    
    # Windows (PowerShell)
    type $env:USERPROFILE\.ssh\id_rsa.pub
    ```
2.  登录你的 Git 服务商（GitHub, GitLab, Gitee 等）。
3.  进入 **Settings** -> **SSH and GPG keys** (或类似名称)。
4.  点击 **New SSH Key**，将复制的公钥内容粘贴进去，并添加一个可识别的标题。
5.  保存。

### 4. 修改本地仓库的远程地址为 SSH 协议
检查当前远程地址：
```bash
git remote -v
```
如果显示的是 HTTPS 地址，将其修改为 SSH：
```bash
git remote set-url origin git@github.com:username/repository.git
```
*   将 `github.com` 替换为你的 Git 服务商域名，`username/repository.git` 替换为你的用户名和仓库名。

### 5. 测试连接
```bash
ssh -T git@github.com # 测试 GitHub
```
看到 `You've successfully authenticated` 等欢迎信息即表示成功。

---

## 🔑 二、HTTPS 免密方式

### 1. 缓存凭证（临时免密）
将凭证在内存中缓存一段时间（默认 15 分钟）。
```bash
# 启用凭证缓存
git config --global credential.helper cache

# 设置自定义缓存时间（单位：秒），例如设置1小时
git config --global credential.helper 'cache --timeout=3600'
```

### 2. 存储凭证（永久免密，但密码明文存储）
**注意：此方法会将你的密码以明文形式存储在 `~/.git-credentials` 文件中，请谨慎使用。**
```bash
# 启用全局凭证存储
git config --global credential.helper store

# 首次操作（如 git pull）仍需输入密码，此后将不再需要
```
*   首次输入账号密码后，凭证会保存在 `~/.git-credentials` (Linux/macOS) 或 `C:\Users\<用户名>\.git-credentials` (Windows) 文件中。

### 3. 系统凭证管理器（更安全的选择）
Windows 和 macOS 提供了更安全的凭证管理方式。
```bash
# Windows
git config --global credential.helper wincred

# macOS
git config --global credential.helper osxkeychain

# Linux (需要安装 libsecret)
git config --global credential.helper libsecret
```
使用这些助手，凭证会被加密保存在系统的密钥管理器中，而非明文文件。

---

## 🛡️ 三、应对 MFA：使用 Personal Access Token (PAT)

当你的账户启用了双因素认证 (MFA) 后，直接使用账户密码进行 HTTPS 操作可能会被拒绝。此时需要使用 Personal Access Token (PAT) 来替代密码。

### 1. 生成 PAT
1.  登录你的 Git 服务商（如 GitHub）。
2.  进入 **Settings** -> **Developer settings** -> **Personal access tokens** -> **Tokens (classic)**。
3.  点击 **Generate new token** -> **Generate new token (classic)**。
4.  设置备注名（Note）、有效期（Expiration），并勾选所需的权限（如 `repo`）。
5.  点击 **Generate token**。
6.  **务必立即复制生成的 Token**！关闭页面后将无法再次查看。

### 2. 使用 PAT
*   **首次使用**：当下次执行 `git pull` 或 `git push` 时：
    *   **用户名**：输入你的 Git 用户名。
    *   **密码**：**粘贴之前生成的 PAT**（而不是你的账户密码）。
*   **结合凭证存储**：首次输入 PAT 后，可以配合上述 `credential.helper` 配置（如 `store` 或 `osxkeychain`）将 PAT 保存起来，实现长期免密。
*   或使用以下方法

直接使用access token拉取代码：

```text
git clone https://oauth2:7af5f492a74499e7@code.test.com/test/xxx.git
```

每次拉取代码都需要加上access token稍微有点麻烦，可以配置一下git：

```text
git config --global url."https://oauth2:7af5f492a74499e7@code.test.com".insteadof "https://code.test.com"
```

配置好后，每次按正常的拉取方式拉取代码就好了，例如：

```text
git clone https://code.test.com/test/xxx.git
```

---

## ⚙️ 四、高级配置与技巧

### 1. 为不同 Git 服务器配置多个 SSH 密钥
如果需要在同一台机器上使用不同的密钥访问不同的 Git 服务器（如公司和个人的账户），可以编辑 `~/.ssh/config` 文件（不存在则创建）。
```bash
# ~/.ssh/config 文件示例
# 默认配置
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_github # 指定用于 GitHub 的私钥

Host gitlab.company.com
    HostName gitlab.company.com
    User git
    IdentityFile ~/.ssh/id_rsa_company # 指定用于公司 GitLab 的私钥
    IdentitiesOnly yes
```

### 2. 强制 Git 使用 SSH 替代 HTTPS
如果你习惯克隆 HTTPS 仓库，但想统一使用 SSH 进行认证，可以设置全局替换规则：
```bash
git config --global url."git@github.com:".insteadOf "https://github.com/"
```
此后，当你执行 `git clone https://github.com/username/repo.git`，Git 会自动将其转换为 `git@github.com:username/repo.git`。

---

## 💡 五、安全提示

1.  **私钥即密码**：你的 SSH **私钥**（如 `id_rsa`）等同于密码，**绝不能泄露**给任何人。公钥（`.pub`）可以随意分享。
2.  **HTTPS 凭证安全**：使用 `store` 方式时，密码或 PAT 以明文形式存储在本地。请确保你的系统安全，并谨慎在公共或共享计算机上使用此方式。
3.  **PAT 的安全性**：Personal Access Token 拥有其指定范围的权限，务必像保护密码一样保护它。若泄露，应立即到 Git 服务商后台撤销它。
4.  **MFA 的重要性**：为你的 Git 账户启用双因素认证 (MFA) 是保护账户安全的最重要措施。

希望这份详细的指南能帮助你更好地配置 Git 免密操作。根据你的安全需求和使用场景，选择最适合你的方式吧。











----

下面这些是很早期的记录

上面的还是比较全的。

1.git init 初始化仓库 把一个目录初始化为版本仓库 （可以是空的目录 也可以是带内容的仓库）

2.git status 查看当前仓库的状态	

3.git add file 添加文件到暂存区

4.git add . 或者git add * 添加当前所有的文件到暂存区

5.git rm --cached file 从缓存区撤回该文件

6.rm -rf file 删除工作区文件

7.git rm -f file 直接从暂存区域同工作区一同删除命令

小结：如果真正意义上通过版本控制系统 管理文件

````
1.工作目录必须有个代码文件
2.通过 git add file 添加到暂存区域
3.通过 git commit -m "你自己输入的有关代码信息" 添加到本地仓库 
````

8.git mv old-filename new-filename 直接更改文件名称，包括缓存区

9.git diff 默认比对工作目录和暂存区域有什么不同

10.git diff --cached 比对暂存区域和本地仓库

11.如果某个文件已经被仓库管理 如果再更改此文件 直接需要一条命令提交即可

git commit -am “add newfile”

12.git log 查看历史提交信息

13.git log --oneline 一行显示提交信息 

-p 查看具体的改动

-1 查看最近一次

14.git reset --hard **** 回滚数据到某一个提交

15.git reflog 查看所有修改信息

16.git log --oneline --decorate 查看当前指针的指向

17.git branch 查看分支 （*在什么上面什么就是主分支）

18.git branch ** 创建分支

19.git checkout testing 切换分支

20.git checkout -b testing 创建并切换分支

21.git branch -d testing 删除分支

22.git merge testing 合并分支。操作必须在主分支上做