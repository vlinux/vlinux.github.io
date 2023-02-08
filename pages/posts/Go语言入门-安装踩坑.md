---
title: Go语言入门-安装踩坑
categories: GO
tags: [Go,gotools,vscode]
date: 2021-03-18 10:22:00
---
## 前景

> GO近几年真的越来越热火朝天，本着人道主义精神，学吧。
>
> 其实是为了生存，本篇会详细介绍安装环境过程中的所有报错及解决方法
>
> 本文基于Win系统

## 安装

下载地址：https://golang.google.cn/dl



![image-20210318100030319](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20210318100030319.png)

下载后安装一路回车下一步

该网站对国内下载速度还是很友好的

## 配置 

`GOPATH`是一个环境变量，用来表明你写的`go`项目的存放路径

`GOPATH`路径最好只设置一个，所有的项目代码都放到`GOPATH`的`src`目录下。

Linux和Mac平台就参照上面配置环境变量的方式将自己的工作目录添加到环境变量中即可。 Windows平台按下面的步骤将（你的安装目录，例如：`D:\go`）添加到环境变量：



**我的电脑->属性->高级系统设置->环境变量**



检查一下你的电脑里面是否存在`GOPATH`并且设置值为你要存`go`代码的目录

然后将你已经安装好的GO路径添加系统变量PATH中

### go的项目目录

在进行`Go`语言开发的时候，我们的代码总是会保存在`$GOPATH/src`目录下。在工程经过`go build`、`go install`或`go get`等指令后，会将下载的第三方包源代码文件放在`$GOPATH/src`目录下， 产生的二进制可执行文件放在 `$GOPATH/bin`目录下，生成的中间缓存文件会被保存在 `$GOPATH/pkg` 下。

如果我们使用版本管理工具（`Version Control System`，`VCS`。常用如`Git`）来管理我们的项目代码时，我们只需要添加`$GOPATH/src`目录的源代码即可。`bin` 和 `pkg` 目录的内容无需版本控制。

![go-path-desc](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/4654654646.png)

## 扩展VScode配置

> 官网下载安装Vscode

- 安装GO支持插件

![image-20210318101002945](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20210318101002945.png)

- 安装GO-tools

> 其实GO语言插件安装完成后，已经可以正常使用了，但是每次打开Vscode，会报一些错误，会让你安装tools之类的，然而你去安装又安装不上去，因为一些不可控因素。即使你开了全局代理又如何

- 完美解决Vscode安装go-tools报错

打开VScode控制终端
执行

```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.io,direct
```

https://goproxy.io是一个国内的代理，非常的OK

然后关闭vscode重新打开，再次点击install all

然后安装完成！

## hello world

(1)学习语言的第一个程序肯定是hello word了

进入前面创建的三个目录里面的src目录

![image-20210318102122257](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20210318102122257.png)

(2)在`src`目录下创建一个hello目录，在hello目录中创建一个`main.go`文件：

```go
package main  // 声明 main 包，表明当前是一个可执行程序

import "fmt"  // 导入内置 fmt 

func main(){  // main函数，是程序执行的入口
    fmt.Println("Hello World!")  // 在终端打印 Hello World!
}
```

(3)在hello目录下执行：`go build`

`go`编译器会去 `GOPATH`的`src`目录下查找你要编译的`hello`项目

编译得到的可执行文件会保存在执行编译命令的当前目录下，如果是`windows`平台会在当前目录下找到`hello.exe`可执行文件。

(4)在终端直接执行该`hello.exe`文件：

```
d:\goproject\src\hello>hello.exe
Hello World!
```

我们还可以使用-o参数来指定编译后可执行文件的名字。

```
go build -o heiheihei.exe
```