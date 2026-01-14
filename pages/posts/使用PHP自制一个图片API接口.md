---
title: 使用PHP自制一个图片API接口
categories: Linux技术
tags: [API,PHP,图片API]
date: 2021-01-13 14:07:00
---
# 使用php自制一个图片API接口@(你懂的)

有时候我们需要获得一些随机图片，如果用别人的api接口，可能接口不太稳定，也可能别人的图片不符合你的审美，这时候我们就需要自制一个简易的图片api接口了，下面我介绍两种方法制作属于自己的api图片接口~

文章参考来自[梦独吟](https://www.datealive.top/)

所有源码可以在github上下载，顺便点个[star](https://github.com/img-api)吧~

# 第一种 

------

方法很简单，我们新建一个php文件，插入下面的代码

```php
<?php
//存有链接的文件名，这里是存放图片链接的txt文件
$filename = "文件名.txt";
if(!file_exists($filename)){
die('文件不存在');
}

//从文本获取链接
$pics = [];
$fs = fopen($filename, "r");
while(!feof($fs)){
$line=trim(fgets($fs));
if($line!=''){
array_push($pics, $line);
}
}

//从数组随机获取链接
$pic = $pics[array_rand($pics)];

//返回指定格式
$type=$_GET['type'];
switch($type){

//JSON返回
case 'json':
header('Content-type:text/json');
die(json_encode(['pic'=>$pic]));

default:
die(header("Location: $pic"));
}
```

------

接下来，我们新建一个txt文件，在每一行(注意是每行)插入一条图片的url链接

```txt
https://image.datealive.top/images/2020/05/13/timg-1.jpg
https://image.datealive.top/images/2020/05/13/timg-2.jpg
```

------

最后，我们把两个文件上传到服务器上，通过访问php文件即可，注意是同一目录下！！

演示demo:

[button href="http://img-api.kococ.cn"]图片PHP自制API接口[/button]

------

# 第二种

### 基于**jsDeliver** +github的图片api接口

参考于[Toomey](https://blog.toomey.top/) 这位大佬，这位大大的博客非常不错哦~~

------

方法：

1.首先你先得上传图片到你的github仓库里，这里提供两种方法上传

(1)参考这篇博客——[传送门](https://blog.toomey.top/2020/04/08/gitsx/)

(2)直接下载[Github Desktop ](https://desktop.github.com/) ，绑定你的github账号后，克隆你的仓库(注意要有README.md文件)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/15899882811-300x208.png)

然后选择你的克隆下来的仓库，右键打开show in explorer，在里面添加图片，打开github Desktop，我们就可以看到刚刚上传的文件。我们首先在summary里输入“第一次”(或者其他)，点击commit to master，最后在push即可。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/4d9f303f2ad991cb71e02e9749a43d6-300x117.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/10b6deaf922f23a36287d33f7e84dd4-300x207.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/15900269711-1-300x208.png)

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/d753ed272e3c472d834778219a4eaa7-300x131.png)

 

------

2.获取图片链接

方法：这里使用的是 jsDeliver +github

首先，打开你的github仓库，找到releases

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/429dd1317bdf0959971f663e18c3703-300x131.png)

然后依次输入版本号，描述，最后更新releases即可

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/dd3b0836c8dcd7aeb359b6ac5568d56-300x183.png)

接下来我们引用资源即可

https://cdn.jsdelivr.net/gh/你的github用户名/你的仓库名@发布的版本号/文件名
例如： https://cdn.jsdelivr.net/gh/dateolive/images@V-2.0/images
ps：也可以不加版本号，这样会默认加载最新的版本
例如：https://cdn.jsdelivr.net/gh/dateolive/images/images

 

------

3.编写php文件

```php
<?php

$rand = rand(1,201);
$url = 'https://cdn.jsdelivr.net/gh/dateolive/images@V-2.0/images/'.$rand.'.jpg';
$img = file_get_contents($url,true);
header("Content-Type: image/jpeg;");
echo $img;
?>
```

这里rand就是一个随机函数，随机产生1-100的数字，因为我上传的图片是要数字排好的，所以这样可以实现随机调用

第二行就是使用jsDeliver加载资源了，具体方法上面第二步有说明

最后是利用header函数重定向到后面的url地址，实现跳转

------

4.把写好的php文件上传服务器即可。

5.演示demo：

[button href="http://imapi.datealive.top/tp/api.php"]传送门[/button]
