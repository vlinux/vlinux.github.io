---
title: Go使用Gin框架接入微信公众号用户消息处理
date: 2022-12-02 19:56:09
updated: 2022-12-02 19:56:09
tags:
  - 微信公众号
  - 机器人
  - Golang
categories:
  - Golang
---

---

之前机缘巧合下关注了一个公众号，名字忘记了，但是他具体的功能和作用我还记得

大体功能就是它可以帮你搜相关的影视资源，比如你可以向他发送钢铁侠，他就会帮你去搜索百度云盘上有关钢铁侠的相关资源并在公众号内反馈给你！

最近心血来潮，也想开发一个这样的功能，但我并不想搜百度云盘上的，至于为什么想必我不说，大家也都知道，LJ网盘毁我青春！

网络上有很多人开发了阿里云盘搜索引擎，输入你想找的内容就可以找到～ 那么让我们开始吧？

使用 Go 语言的 Web 框架 Gin 进行微信公众号接入，并实现对微信消息的接收以及回复处理。

同时借助 nginx 代理服务器对代理的端口号以及 URI 进行优化处理。

在文章末尾给出该 Demo 的项目地址。

<!-- more -->

## 目录

- 公众号接入
- 消息接收
- 消息回复
- 使用 ngxin 代理服务器
- 小结

### 公众号接入

这里使用微信公众平台提供的接口测试号用于开发使用，[接口测试号申请](https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index)。

公众号的接入主要有两个步骤，[微信公众平台接入指南](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html)：

1. 填写服务器配置
2. 验证服务器地址的有效性

第一步需要配置**服务器的 URL 地址**，并且必须以 `http://` 或 `https://` 开头，分别支持 **80** 端口和 **443** 端口；还需配置一个 3 ~ 32 位字符的 **Token**，用于消息验证。

第二步用于验证消息来源的正确性，当第一步配置完成并点提交后，微信服务器将发送 GET 请求到填写的服务器地址上，GET 请求携带的参数及描述如下表所示：

| 参数      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| signature | 微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。 |
| timestamp | 时间戳                                                       |
| nonce     | 随机数                                                       |
| echostr   | 随机字符串                                                   |

服务器需要做的验证操作流程大致为：

1. 对 `token`、`timestamp`、`nonce` 三个参数进行字典序排序；
2. 将排序后的 `token`、`timestamp`、`nonce` 三个参数按顺序拼接成一个字符串，并对该字符串进行 `sha1` 加密；
3. 使用加密后的字符串与 `signature` 参数进行比较，如果字符串值相同，则表示校验通过，将 `echostr` 参数原样返回即可。

使用 Go 实现的微信公众号接入代码如下：



```
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"weixin-demo/util"
)

// 与填写的服务器配置中的Token一致
const Token = "coleliedev"

func main() {
	router := gin.Default()

	router.GET("/wx", WXCheckSignature)

	log.Fatalln(router.Run(":80"))
}

// WXCheckSignature 微信接入校验
func WXCheckSignature(c *gin.Context) {
	signature := c.Query("signature")
	timestamp := c.Query("timestamp")
	nonce := c.Query("nonce")
	echostr := c.Query("echostr")

	ok := util.CheckSignature(signature, timestamp, nonce, Token)
	if !ok {
		log.Println("微信公众号接入校验失败!")
		return
	}

	log.Println("微信公众号接入校验成功!")
	_, _ = c.Writer.WriteString(echostr)
}
复制代码
package util

import (
	"crypto/sha1"
	"encoding/hex"
	"sort"
	"strings"
)

// CheckSignature 微信公众号签名检查
func CheckSignature(signature, timestamp, nonce, token string) bool {
	arr := []string{timestamp, nonce, token}
	// 字典序排序
	sort.Strings(arr)

	n := len(timestamp) + len(nonce) + len(token)
	var b strings.Builder
	b.Grow(n)
	for i := 0; i < len(arr); i++ {
		b.WriteString(arr[i])
	}

	return Sha1(b.String()) == signature
}

// 进行Sha1编码
func Sha1(str string) string {
	h := sha1.New()
	h.Write([]byte(str))
	return hex.EncodeToString(h.Sum(nil))
}
复制代码
```

最后，将项目部署至服务器，并在接口配置信息中点击提交按钮，完成微信公众号的接入。

![img](/Users/vlinux/Pictures/博客图片/1714486df7eeed57~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](/Users/vlinux/Pictures/博客图片/1714487012c20d72~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

需注意，由于该 Web 程序需监听 80 端口，所以服务器不能有其他监听 80 端口的程序，如 `nginx`。

### 消息接收

完成微信公众号的接入后，接下来以普通消息接收和被动回复用户消息这两个 API 为例，来完成 Go 对微信消息的接收和回复处理的具体实现。

首先是消息接收，参考微信官方文档，[接收普通消息](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html)。

> 当普通微信用户向公众账号发消息时，微信服务器将POST消息的XML数据包到开发者填写的URL上。

以文本消息为例，其 `XML` 数据包结构以及参数描述分别如下：



```
<xml>
  <ToUserName><![CDATA[toUser]]></ToUserName>
  <FromUserName><![CDATA[fromUser]]></FromUserName>
  <CreateTime>1348831860</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[this is a test]]></Content>
  <MsgId>1234567890123456</MsgId>
</xml>
复制代码
```

| 参数         | 描述                     |
| ------------ | ------------------------ |
| ToUserName   | 开发者微信号             |
| FromUserName | 发送方帐号（一个OpenID） |
| CreateTime   | 消息创建时间 （整型）    |
| MsgType      | 消息类型，文本为text     |
| Content      | 文本消息内容             |
| MsgId        | 消息id，64位整型         |

明白了微信服务器向开发服务器传递微信用户消息的方式以及传递的数据包结构后，可知进行消息接收开发，大致需要进行两个步骤：

1. 创建处理微信服务器发送到开发服务器的 `POST` 类型请求的处理函数；
2. 对请求中的 `XML` 数据包进行解析。

对于第二步，我们可以借助 Gin 框架的 `ShouldBindXML` 或 `BindXML` 方法来对 `XML` 数据包进行解析。

使用 Go 实现的消息接收代码如下：



```
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"weixin-demo/util"
)

const Token = "coleliedev"

func main() {
	router := gin.Default()

	router.GET("/wx", WXCheckSignature)
	router.POST("/wx", WXMsgReceive)

	log.Fatalln(router.Run(":80"))
}

// WXTextMsg 微信文本消息结构体
type WXTextMsg struct {
	ToUserName   string
	FromUserName string
	CreateTime   int64
	MsgType      string
	Content      string
	MsgId        int64
}

// WXMsgReceive 微信消息接收
func WXMsgReceive(c *gin.Context) {
	var textMsg WXTextMsg
	err := c.ShouldBindXML(&textMsg)
	if err != nil {
		log.Printf("[消息接收] - XML数据包解析失败: %v\n", err)
		return
	}

	log.Printf("[消息接收] - 收到消息, 消息类型为: %s, 消息内容为: %s\n", textMsg.MsgType, textMsg.Content)
}
复制代码
```

将添加消息接收的代码更新至服务器后，对该接口测试号发送消息，可在服务器查看到如下记录：

![img](/Users/vlinux/Pictures/博客图片/171448731a1af14a~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](/Users/vlinux/Pictures/博客图片/17144874a3fe06ae~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

### 消息回复

接下来以被动回复用户消息这个 API 为例，实现对微信用户发送的消息的回复，参考微信官方文档，[被动消息回复](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Passive_user_reply_message.html)。

消息回复与消息接收类似，都需要使用 `XML` 格式的数据包，回复文本消息需要的 `XML` 数据包结构以及参数如下：



```
<xml>
  <ToUserName><![CDATA[toUser]]></ToUserName>
  <FromUserName><![CDATA[fromUser]]></FromUserName>
  <CreateTime>12345678</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[你好]]></Content>
</xml>
复制代码
```

| 参数         | 是否必须 | 描述                                                         |
| ------------ | -------- | ------------------------------------------------------------ |
| ToUserName   | 是       | 接收方帐号（收到的OpenID）                                   |
| FromUserName | 是       | 开发者微信号                                                 |
| CreateTime   | 是       | 消息创建时间 （整型）                                        |
| MsgType      | 是       | 消息类型，文本为text                                         |
| Content      | 是       | 回复的消息内容（换行：在content中能够换行，微信客户端就支持换行显示） |

使用 Go 实现的消息回复代码如下：



```
package main

import (
	"encoding/xml"
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"time"
	"weixin-demo/util"
)

const Token = "coleliedev"

func main() {
	router := gin.Default()

	router.GET("/wx", WXCheckSignature)
	router.POST("/wx", WXMsgReceive)

	log.Fatalln(router.Run(":80"))
}

// WXMsgReceive 微信消息接收
func WXMsgReceive(c *gin.Context) {
	var textMsg WXTextMsg
	err := c.ShouldBindXML(&textMsg)
	if err != nil {
		log.Printf("[消息接收] - XML数据包解析失败: %v\n", err)
		return
	}

	log.Printf("[消息接收] - 收到消息, 消息类型为: %s, 消息内容为: %s\n", textMsg.MsgType, textMsg.Content)

	// 对接收的消息进行被动回复
	WXMsgReply(c, textMsg.ToUserName, textMsg.FromUserName)
}

// WXRepTextMsg 微信回复文本消息结构体
type WXRepTextMsg struct {
	ToUserName   string
	FromUserName string
	CreateTime   int64
	MsgType      string
	Content      string
	// 若不标记XMLName, 则解析后的xml名为该结构体的名称
	XMLName      xml.Name `xml:"xml"`
}

// WXMsgReply 微信消息回复
func WXMsgReply(c *gin.Context, fromUser, toUser string) {
	repTextMsg := WXRepTextMsg{
		ToUserName:   toUser,
		FromUserName: fromUser,
		CreateTime:   time.Now().Unix(),
		MsgType:      "text",
		Content:      fmt.Sprintf("[消息回复] - %s", time.Now().Format("2006-01-02 15:04:05")),
	}

	msg, err := xml.Marshal(&repTextMsg)
	if err != nil {
		log.Printf("[消息回复] - 将对象进行XML编码出错: %v\n", err)
		return
	}
	_, _ = c.Writer.Write(msg)
}
复制代码
```

需要注意的是 `WXRepTextMsg` 结构体中必须添加 `XMLName` 属性，并且对该属性进行 `xml` 标记，用于将该 `xml` 名标记为 `xml`，即使用 `xml.Marshal` 方法对该结构体对象进行编码后，得到的 `xml` 数据的最外层标签为 `<xml></xml>`，如若不添加该 `XMLName` 属性，则编码后得到的 `xml` 数据的最外层标签为 `<WXRepTextMsg></WXRepTextMsg>`，不符合微信官方要求的 `xml` 数据包格式，因此所有 `xml` 名称即编码后的 `xml` 数据的最外层标签不为 `<xml></xml>` 的数据包都无法成功回复。

将添加消息回复的代码更新至服务器后，向服务器发送消息将收到如下回复：

![img](/Users/vlinux/Pictures/博客图片/17144878432442f8~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](/Users/vlinux/Pictures/博客图片/17144879bee52984~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

### 使用 nginx 代理服务器

通常服务器都不会把 80 端口或 443 端口交给 Web 程序，这时可使用 `nginx` 作为代理服务器，将 Web 程序跑在其它端口上，如 8002，让 `nginx` 监听 80 端口或 443 端口，并对指定的 URI 进行反向代理操作，如以下配置，将把 80 端口 URI 为 `/weixin` 的请求代理到服务器本地的 8002 端口的 `/wx` 上：

> 不管你使用什么办法，只需要将程序以80 或 443的方式代理出去就好了，因为微信公众号后台只能配置80或443端口也就是http或https



```
server {
	listen 80;

	location /weixin {
		proxy_pass http://127.0.0.1:8002/wx;
		proxy_redirect default;
	}
}
复制代码
```

修改程序监听的端口号为 8002：



```
func main() {
	router := gin.Default()

	router.GET("/wx", WXCheckSignature)
	router.POST("/wx", WXMsgReceive)

	log.Fatalln(router.Run(":8002"))
}
复制代码
```

修改微信公众号接入接口配置：

![img](/Users/vlinux/Pictures/博客图片/17144883746a2922~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](/Users/vlinux/Pictures/博客图片/171448855223e19e~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

最后测试结果如下：

![img](/Users/vlinux/Pictures/博客图片/1714488856e74835~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](/Users/vlinux/Pictures/博客图片/1714488a49cf05d8~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

![img](/Users/vlinux/Pictures/博客图片/1714488c22ae1343~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

从 `nginx` 的日志文件中可以看到其确实收到了 URI 为 `/weixin` 的请求，并且在该 Web 程序的日志文件中，也可以看到其收到的 URI 为 `/wx` 的请求，通过观察两份日志记录的请求参数，可以发现，`nginx` 做的代理是成功的。

### 用户消息处理

既然我们做到这一步了，那使用Go对用户发送的消息进行处理，简直就是洒洒水啦，不做其他的讲解，直接贴代码，关键部分已有注释

main.go



```
package main

import (
	"encoding/xml"
	"fmt"
	"log"
	"net/url"
	"time"
	"weixin-demo/util"

	"github.com/gin-gonic/gin"
)

// 与填写的服务器配置中的Token一致
const Token = "aptech"

func main() {
	router := gin.Default()

	router.GET("/wx", WXCheckSignature)
	router.POST("/wx", WXMsgReceive)

	log.Fatalln(router.Run(":18888"))
}

// WXTextMsg 微信文本消息结构体
type WXTextMsg struct {
	ToUserName   string
	FromUserName string
	CreateTime   int64
	MsgType      string
	Content      string
	MsgId        int64
}

// WXRepTextMsg 微信回复文本消息结构体
type WXRepTextMsg struct {
	ToUserName   string
	FromUserName string
	CreateTime   int64
	MsgType      string
	Content      string
	// 若不标记XMLName, 则解析后的xml名为该结构体的名称
	XMLName xml.Name `xml:"xml"`
}

// WXMsgReceive 微信消息接收
func WXMsgReceive(c *gin.Context) {
	var textMsg WXTextMsg
	err := c.ShouldBindXML(&textMsg)
	if err != nil {
		log.Printf("[消息接收] - XML数据包解析失败: %v\n", err)
		return
	}

	log.Printf("[消息接收] - 收到消息, 消息类型为: %s, 消息内容为: %s\n", textMsg.MsgType, textMsg.Content)
	//回复内容
	Escapetext := url.QueryEscape(textMsg.Content)
	text := fmt.Sprintf("已为您搜索到很多%s相关的资源,赶快点击保存吧! \nhttps://www.alipansou.com/search?k=%s", textMsg.Content, Escapetext)
	// 对接收的消息进行被动回复
	huanying := "感谢您的关注,现在您可以发送任意关键词给我,我来帮您找资源! \n严禁搜索黄赌毒关键词\n搜了也没有!\n爱护国家爱护党\n黑恶势力没有好下场!"
	if textMsg.Content == "" {
		//判断用户是否第一次关注
		WXMsgReply(c, textMsg.ToUserName, textMsg.FromUserName, huanying)
	} else {
		//如果用户不是第一次关注，则直接发送用户搜索词相关的资源信息
		WXMsgReply(c, textMsg.ToUserName, textMsg.FromUserName, text)
	}

}

// WXCheckSignature 微信接入校验
func WXCheckSignature(c *gin.Context) {
	signature := c.Query("signature")
	timestamp := c.Query("timestamp")
	nonce := c.Query("nonce")
	echostr := c.Query("echostr")

	ok := util.CheckSignature(signature, timestamp, nonce, Token)
	if !ok {
		log.Println("微信公众号接入校验失败!")
		return
	}

	log.Println("微信公众号接入校验成功!")
	_, _ = c.Writer.WriteString(echostr)
}

// WXMsgReply 微信消息回复
func WXMsgReply(c *gin.Context, fromUser, toUser, content string) {
	repTextMsg := WXRepTextMsg{
		ToUserName:   toUser,
		FromUserName: fromUser,
		CreateTime:   time.Now().Unix(),
		MsgType:      "text",
		Content:      content,
	}

	msg, err := xml.Marshal(&repTextMsg)
	if err != nil {
		log.Printf("[消息回复] - 将对象进行XML编码出错: %v\n", err)
		return
	}
	_, _ = c.Writer.Write(msg)
}
```

util.go



```
package util

import (
	"crypto/sha1"
	"encoding/hex"
	"sort"
	"strings"
)

// CheckSignature 微信公众号签名检查
func CheckSignature(signature, timestamp, nonce, token string) bool {
	arr := []string{timestamp, nonce, token}
	// 字典序排序
	sort.Strings(arr)

	n := len(timestamp) + len(nonce) + len(token)
	var b strings.Builder
	b.Grow(n)
	for i := 0; i < len(arr); i++ {
		b.WriteString(arr[i])
	}

	return Sha1(b.String()) == signature
}

// 进行Sha1编码
func Sha1(str string) string {
	h := sha1.New()
	h.Write([]byte(str))
	return hex.EncodeToString(h.Sum(nil))
}
```

### 小结

最后做一个对该文章的小结，这篇文章主要使用了 Go 语言的 Gin 框架以及借助微信接口测试号，完成了对微信公众号接入的开发，以及实现接收微信用户消息和回复微信用户消息的两个功能。

以及，感谢大家的耐心阅读！！！

感谢以下文章的帮助

https://juejin.cn/post/6844904114707496973