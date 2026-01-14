---
title: 分享10个可免费使用的网站CDN加速服务
categories: Linux技术
tags: [CDN,OSS,网站加速,对象存储]
date: 2021-01-14 09:47:42
---
## 分享10个可免费使用的网站CDN加速服务
CDN也称内容分发网络，其原理大概是将服务内容分发至全网加速节点，让用户从就近的服务器节点上获取内容，从而提高网站的访问速度。大部分服务商（如阿里云，网易蜂巢，京东云等）的CDN服务是按使用量收费的，也有一些服务商提供免费的CDN服务，本文简单的总结一下目前可免费使用的CDN，对个人网站来说，免费的已经够用了。

**腾讯云CDN** 官网：https://cloud.tencent.com/product/cdn
（评分 9.0）腾讯云可以免费申请SSL证书，腾讯云CDN也能很好的支持SSL证书，从而实现https访问，腾讯云的CDN不是完全免费的，但新注册的用户目前可有免费的流量包赠送，而且腾讯云每月都会赠送10G免费的加速流量，对个人网站来说相当的实用。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526131724248-818699815.png)

 

**360网站卫士** 官网：http://wangzhan.360.com/
（评分 8.5）360提供的免费CDN服务，不限流量，CDN加速功能和基本的安全防御功能比较稳定，其提供的免费域名解析服务也很稳定。360网站卫士支持上传SSL证书，还提供免费网站备案服务。请注意360网站卫士与360云加速（cdn.cloud.360.cn）是两个不同的产品，后者主要提供付费的CDN服务。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526131933401-1179452108.png)

 

**百度云加速** 官网：https://su.baidu.com/
（评分 8.0）云加速分为免费版和付费版，免费版不支持SSL证书，海外网站也支持加速。百度云加速声称可以加速百度收录，但效果不是很明显，云加速还提供免费的域名解析服务。请注意，百度云加速与百度云（cloud.baidu.com）以及百度云盘（yun.baidu.com）分别是不同的产品，不要被这混乱的名称绕晕了。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526131954602-397623773.png)

 

**又拍云CDN** 官网：https://www.upyun.com/products/cdn
（评分 7.5）新注册的又拍云用户可以免费获得代金券，成为又拍云联盟的用户，一年内每月可免费使用10GB存储空间及15GB流量，又拍云也可以免费申请SSL证书实现https访问。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132005948-483680210.png)

 

**魔门云** 官网：https://www.cachemoment.com/
（评分 7.0）免费支持SSL，免费版每月10GB的免费流量，每月免费10万次的https请求数，加入魔门云联盟，可享受每月50GB的免费流量和每月50万次免费HTTPS请求数，魔门云还支持海外网站的加速。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132017656-2035711731.png)

 

**七牛云CDN** 官网：https://www.qiniu.com/products/fusion
（评分 7.0）每个月可使用10G的免费存储量和10G的CDN流量与100万次的Get请求数，七牛云在海外也有众多加速节点，七牛云TCP压缩优化使网页中大图和样式等实现秒加载。使用七牛CDN，须保证账户中有最低金额10元。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132030382-1609637966.png)

 

**性能魔方CDN** 官网：http://www.mmtrix.com/ispeed
（评分 7.5）性能魔方云加速提供国内外30个IDC和300+CDN节点网络加速，免费版前3个月免费使用百余个CDN节点和每月1000GB流量，之后每月可获得200GB的免费流量，此网站还免费提供网站云监测和WEB检测服务，值得体验。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132044512-1291173303.png)

 

**VeryCloud云分发** 官网：https://www.verycloud.cn/cloud/cdninfo
（评分 7.0）云端网络将用户的加速内容分发至部署在全球的近500个服务节点，每月免费赠送50G的CDN加速流量，稳定支撑大量图片、音频、视频等文件的访问。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132056003-1963199958.png)

 

 

**云盾CDN** 官网：https://www.yundun.com/
（评分 7.5）免费版的云盾不支持SSL，云盾的缓存功能很强大，它拥有遍布全球的加速节点和精细的性能优化能力，开启缓存后网站速度会有明显的提升，它拦截CC攻击的效果也很不错。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132319733-428557093.png)





 

 

**Cloudflare** 官网：https://www.cloudflare.com/
（评分 7.5）Cloudflare的免费版功能很强大，它最大亮点是提供完全免费的SSL证书一键实现https访问，如果不想使用国内的CDN服务，Cloudflare是最好的选择。但是由于它的域名解析服务器在国外，速度方面可能比国内差一些。

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/gitee-backup/img-master/image/645365-20190526132337259-363372808.png)

 

 

使用免费CDN的时候，偶尔会出现网站打不开的现象，出现的情况极少，但这也是难免的，免费的东西或多或少都会有一些不稳定的情况。针对网站的静态资源，目前有些网站提供了免费的CDN公共库，这样站长可以直接通过公共库引入所需的资源，也能加速网站的访问，常用的公共库如下：

 

百度静态资源公共库：http://cdn.code.baidu.com/

BootCDN开源项目加速服务：http://www.bootcdn.cn/

七牛云免费开放公共库：https://www.staticfile.org/

又拍云免费JS库：http://jscdn.upai.com/