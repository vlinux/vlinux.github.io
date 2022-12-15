---
title: Centos7编译安装SHC并加密脚本文件
categories: Linux技术
tags: [shc,脚本加密]
date: 2019-08-27 15:28:00
---
## 工具说明

>- shc是一个加密shell脚本的工具.它的作用是把shell脚本转换为一个可执行的二进制文件.
>- 用shell脚本对系统进行自动化维护,简单,便捷而且可移植性好.
>- 但shell脚本是可读写的,很有可能会泄露敏感信息,如用户名,密码,路径,IP等.
>- 同样,在shell脚本运行时会也泄露敏感信息.
>
>使用shc进行加密，这就很好的解决了上述问题.

 ## 测试环境

>centos 7.6
>shc 9.3

 ## 下载shc的安装包

 可以去GIT中下载：https://github.com/neurobin/shc/tree/3.9.3

>```
> wget https://github.com/neurobin/shc/archive/3.9.3.zip
>```

 ## 安装

>```
>unzip 3.9.3.zip
>cd shc-3.9.3/
>./configure
>make
>make install
>```
>
>如果提示没有unzip，则运行
>
>```
>yum install zip unzip
>```

 ## 测试

> 测试一下是否安装成功
>
>```
>shc -v
>```
>
>[![QQ截图20200217230443.png](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/1370841726.png)](https://www.myyblog.cn/usr/uploads/2020/02/1370841726.png)

 ## 简单的使用

>基本命令
>
>```
>shc -v -r -f 文件名
>```
>
>-v：详细编译
>
>-r：创建一个可在发行的二进制文件
>
>-f：要编译的脚本名
>
>成功编译后会出现二个文件
>
>脚本.x ：可以执行的二进制脚本
>
>脚本.x.c ：可以脚本.x的原文件，简单来说就是c语言的脚本

## 执行方式

```bash
chmod +x ***
./***
```