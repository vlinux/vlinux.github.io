---
title: 腾讯云对象存储COSCMD工具安装配置与使用命令详解
categories: Linux技术
tags: [COS,COSCMD]
date: 2021-01-22 09:37:00
---
## 前言

COSCMD 工具是一款腾讯云 COS 的命令行操作工具,能方便的在 Linux 服务器上管理对象存储 COS 中的桶文件,支持上传文件,文件夹,下载文件,文件夹,以及删除功能.配合更详细的参数例如 md5 比对,跳过,删除等可以很方便的配置定时备份服务器上的文件到 COS 中.本文将简单介绍在 Linux 系统中的安装,配置和常规上传下载命令,更详细的用法请参考下文中的相关参考链接.



------

## 安装

### 环境依赖

- Python 2.7/3.5/3.6
- 最新版本的 pip

### 安装命令

```shell
yum -y install python-pip
python -m pip install --upgrade pip    
pip install -I requests
pip install coscmd
```


 



**常见参数配置说明如下：**

| 选项             | 参数说明                                                     | 有效值 | 是否必选 |
| :--------------- | :----------------------------------------------------------- | :----- | :------- |
| -a               | 密钥 ID 请前往 [API 密钥控制台](https://console.cloud.tencent.com/cam/capi) 获取 | 字符串 | 是       |
| -s               | 密钥 Key 请前往 [API 密钥控制台](https://console.cloud.tencent.com/cam/capi) 获取 | 字符串 | 是       |
| -t               | 临时密钥 token，当使用临时密钥时需要配置，设置 x-cos-security-token 头部 | 字符串 | 否       |
| -b               | 指定的存储桶名称，存储桶的命名格式为 BucketName-APPID，请参见 [命名规范](https://cloud.tencent.com/document/product/436/13312#.E5.AD.98.E5.82.A8.E6.A1.B6.E5.91.BD.E5.90.8D.E8.A7.84.E8.8C.83)。初次配置使用时，您需要在 COS 控制台创建一个存储桶，用于配置工具 | 字符串 | 是       |
| -r               | 存储桶所在地域，请参见 [地域和访问域名](https://cloud.tencent.com/doc/product/436/6224) | 字符串 | 是       |
| -e               | 设置请求的 ENDPOINT，设置 ENDPOINT 参数后，REGION 参数会失效。当您使用的是默认域名，则此处配置格式为`cos.<region>.myqcloud.com`；当您使用全球加速域名，则配置为`cos.accelerate.myqcloud.com` | 字符串 | 否       |
| -m               | 多线程操作的最大线程数（默认为5，范围为1 - 30）              | 数字   | 否       |
| -p               | 分块操作的单块大小（单位MB，默认为1MB，范围为1 - 1000）      | 数字   | 否       |
| --do-not-use-ssl | 使用 HTTP 协议，而不使用 HTTPS                               | 字符串 | 否       |
| --anonymous      | 匿名操作（不携带签名）                                       | 字符串 | 否       |



## 配置

### 获取存储桶信息

#### 登录腾讯云 - 控制台 - 对象存储 - 存储桶获取相关信息

- BucketName-APPID : `test-1250000000` 为存储桶名称
- 区域地址 : `https://cos.ap-shanghai.myqcloud.com` 存储桶所在的区域域名.

#### 登录腾讯云 - 控制台 - 访问管理

创建子账号并赋予 COS 相关权限,生成`SecretId`和`SecretKey`.

- SecretId : XXXXXX
- SecretKey : XXXXXX

### 配置密钥

```shell
coscmd config -a Axxxxxxxxxxxxxx -s xxxxxxxxxxxxxxxxx -b test-1250000000 -r ap-shanghai
```
命令执行成功后默认会在家目录下生成隐藏文件.cos.conf
[tip type="info" title="多存储桶命令配置"]
您可以使用coscmd命令的-c参数，指定相应的文件进行一系列的相关操作。如果不指定，以Centos7.6系统为例，默认读取/root/.cos.conf文件中的对象存储配置进行操作
[/tip]



## 命令

### 参数

```shell
-f
# 强制跳过提示
-r
# 递归子目录
-s
# 比对 md5
--delete
# 对比并删除文件
--ignore
# 忽略文件或文件夹,支持 *.* 或文件夹路径.
```

### 下载文件 / 文件夹

```shell
coscmd download -f -s /test/test.txt /data/
# 下载文件
coscmd download -rf -s --delete /test /data/
# 下载文件夹
# 结尾含 / 则下载桶中 /test 整个目录至本地 /data 目录之下,路径为 /data/test
# 结尾不含 / 则下载桶中 /test 目录内所有子目录和文件至本地 /data 目录之下
```

### 上传文件 / 文件夹

```shell
coscmd upload -f -s /test/test.txt /data/
# 上传文件
coscmd upload -rf -s --delete /test /data/
# 上传文件夹
# 结尾含 / 则上传本地 /test 整个目录至桶中 /data 目录之下,路径为 /data/test
# 结尾不含 / 则上传本地 /test 目录内所有子目录和文件至桶中 /data 目录之下
```

------

## 结语

推荐当服务器也是腾讯云时,可以创建与服务器同区域的对象存储,此时两者为内网传输速度,并且 COS 不计下行流量,搭配 crontab 做定时备份任务非常高效稳定.

## 参考

https://www.ioiox.com/archives/110.html

https://cloud.tencent.com/document/product/436/10976