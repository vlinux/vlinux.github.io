---
title: Typecho博客更改邮件发送模板
categories: Linux技术
tags: [Typecho插件优化]
date: 2021-01-20 14:12:00
---
> 声明博主使用的插件为Comment2Mail，如果你跟我的一样，那么你可以继续看下去，如果不一样，你可以接着去百度。

默认模板：

打开插件目录下有个文件叫做Plugin.php,编辑它，找到下面这段，就是他的原模板

```php
<head>
    <meta charset="utf-8">
</head>
<body style="width:100%;height:800px;background-color:#EEF3FA; font-size:14px;font-family:Microsoft YaHei;">
    <div style="margin:100px auto;background-color:#fff;  width:866px; border:1px solid #F1F0F0;box-shadow: 0 0 5px #F1F0F0;">
    <div style="width:838px;height: 78px; padding-top: 10px;padding-left:28px; background-color:#F7F7F7;">
        <a style="cursor:pointer; font-size:30px; color:#333;text-decoration: none; font-weight: bold;"
           href="{$options->siteUrl}">{$options->title}</a><span
            style="color:#999; font-size:14px;padding-left:20px;">{$options->description}</span>
    </div>
    <div style="padding:30px;">
        <div style="height:50px; line-height:50px; font-size:16px; color:#9e9e9e;">{$desc}</div>
        <div style="line-height:30px;  font-size:16px; margin-bottom:20px; text-indent: 2em;">
            {$commentText}
        </div>
        <div style="line-height:40px;  font-size:14px;">
            <label style="color:#999;">评论人：</label>
            <span style="color:#333;">{$comment->author} 邮箱: {$comment->mail}</span>
        </div>
        <div style="line-height:40px;  font-size:14px;">
            <label style="color:#999;">评论地址：</label>
            <a href="{$comment->permalink}" style="color:#333;">{$comment->permalink}</a>
        </div>
        <div style="line-height:40px;  font-size:14px;">
            <label style="color:#999;">评论时间：</label>
            <span style="color:#333;">{$commentAt}</span>
        </div>
    </div>
</div>
</body>
```

以上就是主题原模板， 如需更换，请删除这段代码

> 好看的模板

![image-20210120140157435](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/%20image/image-20210120140157435.png)

这是模板使用后的图片，涉及到一些作者的自定义变量，如果你会改的话，那就可以直接用原版主题模板

```php
<meta charset="utf-8">
<div style="position:relative;width:450px;height:auto;margin:0 auto;padding-bottom:5px;border:rgb(224, 221, 224) solid 1px;border-radius:10px">
    <div style="background-image:url(https://ae01.alicdn.com/kf/UTB8uTIaPSnEXKJk43Ubq6zLppXaW.jpg);width:100%;height:300px;background-size:cover;background-repeat:no-repeat;border-radius:10px 10px 0px 0px"></div>
    <div style="width:40%;height:40px;background-color:rgb(231, 145, 145);margin-top:-20px;margin-left:20px;color:#fff;text-align:center;line-height:40px;border-radius:30px">
        亲爱的：{author} ！
    </div>
    <div style="line-height:180%;padding:0 15px 12px;width:90%;margin:auto;margin-bottom:0px;font-size:12px">
        <div style="border-bottom:1px solid rgb(216, 213, 213);font-size:13px;margin:10px 0px;padding:10px 0px">
            <span style="color:#12ADDB;font-weight:bold">&gt;&nbsp;</span>
            <span>您在</span>
            <a style="text-decoration:none;color:#12ADDB;font-weight:bold;" href="{permalink}" target="_blank">《{title}》</a>
            <span>的评论有了新回复呢！</span>
        </div>
        <div style="padding:0 10px 0 10px;margin-top:18px">
            <p>您的评论：</p>
            <p style="padding:10px 15px;margin:18px 0;border-radius:30px;background-color:rgb(255, 240, 240);">{text}</p>
            <p><strong>{replyAuthor}</strong>&nbsp;给您的回复：</p>
            <p style="padding:10px 15px;margin:18px 0;border-radius:30px;background-color:rgb(240, 240, 255);">{replyText}</p>
        </div>
    </div>
    <div
        style="color:#8c8c8c;font-size:8px;width:93%;margin:auto;margin-top:-30px">
        <p style="padding:20px;">萤火虫消失之后，那光的轨迹仍久久地印在我的脑际。那微弱浅淡的光点，仿佛迷失方向的魂灵，在漆黑厚重的夜幕中彷徨。——《挪威的森林》村上春树</p>
    </div>
    <a style="text-decoration:none;background-color:rgb(155, 151, 221);color:#FFF;width:40%;text-align:center;height:40px;line-height:40px;box-shadow:5px 5px 5px rgba(0,0,0,0.2);margin:-10px auto;display:block;border-radius:30px" href="{commentUrl}" target="_blank">查看完整回复內容</a>
    <div style="color:#8c8c8c;font-size:8px;width:100%;text-align:center;margin-top:30px">
        <p>本邮件为系统自动发送，请勿直接回复哦！</p>
    </div>
    <div style="color:#8c8c8c;font-size:8px;width:100%;text-align:center">
        <p>Copyright © {blogName}. All Rights Reserved.</p>
    </div>
</div>
```



> 如果你不会改，可以直接使用我的。请先删除Plugin.php文件内部原有模板代码。后将我提供的模板代码进行替换
```html
<html>
<meta charset="utf-8">
<div style="position:relative;width:450px;height:auto;margin:0 auto;padding-bottom:5px;border:rgb(224, 221, 224) solid 1px;border-radius:10px">    <div style="background-image:url(https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/1-1.jpg);width:100%;height:300px;background-size:cover;background-repeat:no-repeat;border-radius:10px 10px 0px 0px"></div>
    <div style="width:40%;height:40px;background-color:rgb(231, 145, 145);margin-top:-20px;margin-left:20px;color:#fff;text-align:center;line-height:40px;border-radius:30px">
        亲爱的：小家伙 ！
    </div>
    <div style="line-height:180%;padding:0 15px 12px;width:90%;margin:auto;margin-bottom:0px;font-size:12px">
        <div style="border-bottom:1px solid rgb(216, 213, 213);font-size:13px;margin:10px 0px;padding:10px 0px">
            <span style="color:#12ADDB;font-weight:bold">&gt;&nbsp;</span>
            <span>您在</span>
            <a style="text-decoration:none;color:#12ADDB;font-weight:bold;" href="{$comment->permalink}" target="_blank">{$comment->title}</a>
            <span>的评论有了新回复呢！</span>
        </div>
        <div style="padding:0 10px 0 10px;margin-top:18px">
            <p>您的评论：</p>
            <p style="padding:10px 15px;margin:18px 0;border-radius:30px;background-color:rgb(255, 240, 240);">小家伙自己评论了点啥？心里没数嘛？好吧实际上是这个变量博主调用不出来，所以只能
以这句话来敷衍你一下~</p>
            <p><strong>{$comment->author}</strong>&nbsp;给您的回复：</p>
            <p style="padding:10px 15px;margin:18px 0;border-radius:30px;background-color:rgb(240, 240, 255);">{$commentText}</p>
        </div>
    </div>
    <div
        style="color:#8c8c8c;font-size:8px;width:93%;margin:auto;margin-top:-30px">
        <p style="padding:20px;">村头的狗叫了，其他的狗也跟着叫。但他们不知道为什么而叫。          ??《狂人日记》??周树人</p>
    </div>
    <a style="text-decoration:none;background-color:rgb(155, 151, 221);color:#FFF;width:40%;text-align:center;height:40px;line-height:40px;box-shadow:5px 5px 5px rgba(0,0,0,0.2);margin:-10px auto;display:block;border-radius:30px" href="{$comment->permalink}" target="_blank">查看完整回复?容</a>
    <div style="color:#8c8c8c;font-size:8px;width:100%;text-align:center;margin-top:30px">
        <p>本邮件为系统自动发送，请勿直接回复哦！</p>
    </div>
    <div style="color:#8c8c8c;font-size:8px;width:100%;text-align:center">
        <p>Copyright ? 北青永恒. All Rights Reserved.</p>
    </div>
</div>  
        
</html> 
```
#### 参考

- https://logi.im/blog/comment-to-email.html

