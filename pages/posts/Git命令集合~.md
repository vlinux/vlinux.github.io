---
title: Git命令集合~
categories: Linux技术
tags: [GIt,命令]
date: 2019-03-27 16:59:00
---
水一篇文章
=====
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