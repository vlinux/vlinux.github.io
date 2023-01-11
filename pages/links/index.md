---
title: 我的小伙伴们
keywords: 链接
description: 我的小伙伴们
links:
  - url: https://www.bococ.cn
    avatar: https://www.bococ.cn/favicon.ico
    name: 日暮里
    blog: 日墓里
    desc: 我的好朋友，派大星
    email: aliyum@88.com
    color: "#0078e7"
  - url: https://www.i4t.cn
    avatar: https://image.abcdocker.com/abcdocker/2020/11/20/18813ee9f7f96/18813ee9f7f96.png
    name: abcdocker运维博客
    blog: abcdocker运维博客
    desc: 专注DevOps SRE运维分享优秀i运维技术以梦为马不负韶华
    email: i@valaxy.site
    color: "#6058d9"
  - url: https://www.linux18.com
    avatar: https://www.linux18.com/images/avatar.jpg
    name: linux运维博客
    blog: linux运维博客
    desc:     風傾
    email: fengqing@fengqing.ltd
    color: "#0078e7"
# 也可以是一个 JSON 链接
# links: https://friends.yunyoujun.cn/links.json
random: true
---

<YunLinks :links="frontmatter.links" :random="frontmatter.random" />
