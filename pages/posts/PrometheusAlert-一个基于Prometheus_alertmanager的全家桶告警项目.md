---
title: PrometheusAlert 一个基于Prometheus_alertmanager的全家桶告警项目
categories: Prometheus
tags: [PrometheusAlert]
date: 2021-01-13 14:30:00
---
# PrometheusAlert 一个基于Prometheus_alertmanager的全家桶告警项目

Prometheus Alert是开源的运维告警中心消息转发系统,支持主流的监控系统Prometheus,Zabbix,日志系统Graylog和数据可视化系统Grafana发出的预警消息,支持钉钉,微信,华为云短信,腾讯云短信,腾讯云电话,阿里云短信,阿里云电话等



*PrometheusAlert可以部署在本地和云平台上，支持windows、linux、公有云、私有云、混合云、容器和kubernetes。你可以根据实际场景或需求，选择相应的方式来部署PrometheusAlert*

**在这里优先采用Docker容器化部署.没有安装Docker的小伙伴,可以采取下面的方式一键安装Docker**

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Al
```

## 部署

*告警固然离不开数据的支撑,所以需提前部署好Prometheus以及alertmanager组件并且已经有相应的指标*

**Prometheus监控设计部署可采纳==>> [button href="https://www.kococ.cn/20200830/cid=612.html"]Prometheus+Grafana 全方位监控系统[/button]

### 安装部署PrometheusAlert

**Clone项目源代码**

```bash
git clone https://github.com/feiyu563/PrometheusAlert.git
```

**创建项目配置文件**

```bash
mkdir /etc/prometheusalert-center/
cp PrometheusAlert/conf/app.conf /etc/prometheusalert-center/
```

**启动PrometheusAlert并挂载配置文件**

```bash
docker run -d -p 8080:8080 -v /etc/prometheusalert-center:/app/conf --name PrometheusAlert feiyu563/prometheus-alert:latest
```

**启动后可使用浏览器打开以下地址查看**

```http
http://127.0.0.1:8080
```

### 配置

*这里贴出测试环境所使用配置文件,我使用的是企业微信机器人进行告警通知*

`机器人地址需在企业微信群内新建机器人才可得到地址,复制在默认配置项wxurl里就可以`

[collapse title="Prometheus-Alert-app.conf"]
```yaml
#---------------------↓全局配置-----------------------
appname = PrometheusAlert
#监听端口
httpport = 8080
runmode = dev
#设置代理 proxy = http://123.123.123.123:8080
proxy =
#开启JSON请求
copyrequestbody = true
#告警消息标题
title=PrometheusAlert
#链接到告警平台地址
GraylogAlerturl=http://www.kococ.cn
#钉钉告警 告警logo图标地址
logourl=https://raw.githubusercontent.com/feiyu563/PrometheusAlert/master/doc/alert-center.png
#钉钉告警 恢复logo图标地址
rlogourl=https://raw.githubusercontent.com/feiyu563/PrometheusAlert/master/doc/alert-center.png
#短信告警级别(等于3就进行短信告警) 告警级别定义 0 信息,1 警告,2 一般严重,3 严重,4 灾难
messagelevel=3
#电话告警级别(等于4就进行语音告警) 告警级别定义 0 信息,1 警告,2 一般严重,3 严重,4 灾难
phonecalllevel=4
#默认拨打号码(页面测试短信和电话功能需要配置此项)
defaultphone=xxxxxxxx
#故障恢复是否启用电话通知0为关闭,1为开启
phonecallresolved=0
#自动告警抑制(自动告警抑制是默认同一个告警源的告警信息只发送告警级别最高的第一条告警信息,其他消息默认屏蔽,这么做的目的是为了减少相同告警来源的消息数量,防止告警炸弹,0为关闭,1为开启)
silent=0
#是否前台输出file or console
logtype=file
#日志文件路径
logpath=logs/prometheusalertcenter.log
#转换Prometheus,graylog告警消息的时区为CST时区(如默认已经是CST时区，请勿开启)
prometheus_cst_time=1
#数据库驱动，支持sqlite3，mysql,如使用mysql，请开启db_host,db_user,db_password,db_name的注释
db_driver=sqlite3
#db_host=127.0.0.1:3306
#db_user=root
#db_password=root
#db_name=prometheusalert

#---------------------↓webhook-----------------------
#是否开启钉钉告警通道,可同时开始多个通道0为关闭,1为开启
open-dingding=1
#默认钉钉机器人地址
ddurl=https://oapi.dingtalk.com/robot/send?access_token=xxxxx
#是否开启 @所有人(0为关闭,1为开启)
dd_isatall=1

#是否开启微信告警通道,可同时开始多个通道0为关闭,1为开启
open-weixin=1
#默认企业微信机器人地址
wxurl=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e5f4************

#是否开启飞书告警通道,可同时开始多个通道0为关闭,1为开启
open-feishu=0
#默认飞书机器人地址
fsurl=https://open.feishu.cn/open-apis/bot/hook/xxxxxxxxx

#---------------------↓腾讯云接口-----------------------
#是否开启腾讯云短信告警通道,可同时开始多个通道0为关闭,1为开启
open-txdx=0
#腾讯云短信接口key
TXY_DX_appkey=xxxxx
#腾讯云短信模版ID 腾讯云短信模版配置可参考 prometheus告警:{1}
TXY_DX_tpl_id=xxxxx
#腾讯云短信sdk app id
TXY_DX_sdkappid=xxxxx
#腾讯云短信签名 根据自己审核通过的签名来填写
TXY_DX_sign=腾讯云

#是否开启腾讯云电话告警通道,可同时开始多个通道0为关闭,1为开启
open-txdh=0
#腾讯云电话接口key
TXY_DH_phonecallappkey=xxxxx
#腾讯云电话模版ID
TXY_DH_phonecalltpl_id=xxxxx
#腾讯云电话sdk app id
TXY_DH_phonecallsdkappid=xxxxx

#---------------------↓华为云接口-----------------------
#是否开启华为云短信告警通道,可同时开始多个通道0为关闭,1为开启
open-hwdx=0
#华为云短信接口key
HWY_DX_APP_Key=xxxxxxxxxxxxxxxxxxxxxx
#华为云短信接口Secret
HWY_DX_APP_Secret=xxxxxxxxxxxxxxxxxxxxxx
#华为云APP接入地址(端口接口地址)
HWY_DX_APP_Url=https://rtcsms.cn-north-1.myhuaweicloud.com:10743
#华为云短信模板ID
HWY_DX_Templateid=xxxxxxxxxxxxxxxxxxxxxx
#华为云签名名称，必须是已审核通过的，与模板类型一致的签名名称,按照自己的实际签名填写
HWY_DX_Signature=华为云
#华为云签名通道号
HWY_DX_Sender=xxxxxxxxxx

#---------------------↓阿里云接口-----------------------
#是否开启阿里云短信告警通道,可同时开始多个通道0为关闭,1为开启
open-alydx=0
#阿里云短信主账号AccessKey的ID
ALY_DX_AccessKeyId=xxxxxxxxxxxxxxxxxxxxxx
#阿里云短信接口密钥
ALY_DX_AccessSecret=xxxxxxxxxxxxxxxxxxxxxx
#阿里云短信签名名称
ALY_DX_SignName=阿里云
#阿里云短信模板ID
ALY_DX_Template=xxxxxxxxxxxxxxxxxxxxxx

#是否开启阿里云电话告警通道,可同时开始多个通道0为关闭,1为开启
open-alydh=0
#阿里云电话主账号AccessKey的ID
ALY_DH_AccessKeyId=xxxxxxxxxxxxxxxxxxxxxx
#阿里云电话接口密钥
ALY_DH_AccessSecret=xxxxxxxxxxxxxxxxxxxxxx
#阿里云电话被叫显号，必须是已购买的号码
ALY_DX_CalledShowNumber=xxxxxxxxx
#阿里云电话文本转语音（TTS）模板ID
ALY_DH_TtsCode=xxxxxxxx

#---------------------↓容联云接口-----------------------
#是否开启容联云电话告警通道,可同时开始多个通道0为关闭,1为开启
RLY_DH_open-rlydh=0
#容联云基础接口地址
RLY_URL=https://app.cloopen.com:8883/2013-12-26/Accounts/
#容联云后台SID
RLY_ACCOUNT_SID=xxxxxxxxxxx
#容联云api-token
RLY_ACCOUNT_TOKEN=xxxxxxxxxx
#容联云app_id
RLY_APP_ID=xxxxxxxxxxxxx

#---------------------↓邮件配置-----------------------
#是否开启邮件
open-email=1
#邮件发件服务器
Email_host=smtp.88.com
#邮件发件服务器端口
Email_port=25
#邮件帐号
Email_user=ilinux@88.com
#邮件密码
Email_password=wunurj******
#邮件标题
Email_title=运维告警
#默认发送邮箱
Default_emails=ilinux@111.com

#---------------------↓七陌云接口-----------------------
#是否开启七陌短信告警通道,可同时开始多个通道0为关闭,1为开启
open-7moordx=0
#七陌账户ID
7MOOR_ACCOUNT_ID=Nxxx
#七陌账户APISecret
7MOOR_ACCOUNT_APISECRET=xxx
#七陌账户短信模板编号
7MOOR_DX_TEMPLATENUM=n
#注意：七陌短信变量这里只用一个var1，在代码里写死了。
#-----------
#是否开启七陌webcall语音通知告警通道,可同时开始多个通道0为关闭,1为开启
open-7moordh=0
#请在七陌平台添加虚拟服务号、文本节点
#七陌账户webcall的虚拟服务号
7MOOR_WEBCALL_SERVICENO=xxx
# 文本节点里被替换的变量，我配置的是text。如果被替换的变量不是text，请修改此配置
7MOOR_WEBCALL_VOICE_VAR=text

#---------------------↓telegram接口-----------------------
#是否开启telegram告警通道,可同时开始多个通道0为关闭,1为开启
open-tg=0
#tg机器人token
TG_TOKEN=xxxxx
#tg消息模式 个人消息或者频道消息 0为关闭(推送给个人)，1为开启(推送给频道)
TG_MODE_CHAN=0
#tg用户ID
TG_USERID=xxxxx
#tg频道name
TG_CHANNAME=xxxxx
#tg api地址, 可以配置为代理地址
#TG_API_PROXY="https://api.telegram.org/bot%s/%s"

#---------------------↓workwechat接口-----------------------
#是否开启workwechat告警通道,可同时开始多个通道0为关闭,1为开启
open-workwechat=1
# 企业ID
WorkWechat_CropID=wwbc6f*****
# 应用ID
WorkWechat_AgentID=1000****
# 应用secret
WorkWechat_AgentSecret=wlTGz8T9ETPCyxxtSHRs*****
# 接受用户
WorkWechat_ToUser="liu***|Ze***"
# 接受部门
WorkWechat_ToParty="An***"
# 接受标签
WorkWechat_ToTag=""
# 消息类型, 暂时只支持markdown
WorkWechat_Msgtype = "markdown"
```
[/collapse]

#### 更新alertmanager配置文件

```bash
cat /etc/alertmanager/config.yml 
```
[collapse title="config.conf"]
```yaml
global:
 resolve_timeout: 5m
route:
  group_by: ['alertname']
  group_wait: 30s
  group_interval: 10s
  repeat_interval: 30m 
  receiver: 'web.hook.prometheusalert'
  routes:
  - receiver: 'prometheusalert-weixin'
    group_wait: 10s
    match:
      level: '3'
  - receiver: 'prometheusalert-weixinyingyong'
    group_wait: 10s
    match:
      level: '4'
receivers:
- name: 'web.hook.prometheusalert'
  webhook_configs:
  - url: 'http://192.168.0.212:8080/prometheusalert?type=email&tpl=prometheus-email&email=ilinux@111.com'
- name: 'prometheusalert-weixin'
  webhook_configs:
  - url: 'http://192.168.0.212:8080/prometheusalert?type=wx&tpl=prometheus-wx&wxurl=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e5f4c03c-9***********'
- name: 'prometheusalert-weixinyingyong'
  webhook_configs:
  - url: 'http://192.168.0.212:8080/prometheusalert?type=workwechat&tpl=prometheus-wechatapp&wxuser=liuyongheng&wxparty=Andu'
```
[/collapse]
### 告警规则编写

例: 主机节点丢失

```bash
cat /etc/prometheus/rules/node.yml 
```

```yaml
groups:
- name: exports.rules    
  rules:
  - alert: 实例信息告警
    expr: up == 0      
    for: 1m           
    labels:          
      severity: ERROR
      level: 4
    annotations:    
      summary: "实例 {{ $labels.instance }} 信息丢失,疑似服务器失联或者关机"
      description: "实例 {{ $labels.instance }} job 名为 {{ $labels.job }} 已经失联长达一分钟,请运维人员排查故障"
```
>这里提供一些已经适配的Prometheus告警规则，别谢我，往下滑有打赏按钮谢谢

[file href="https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/code/rules.tar.gz"]常用告警规则下载[/file]

[button href="https://awesome-prometheus-alerts.grep.to/rules"]告警规则全家桶[/button]
>告警规则中serverity默认不被调用,PrometheusAlert默认使用的是level.含义为告警等级,是为了不同的告警等级分发给不同的告警平台准备的，算是抑制把，我也不知道
>但是我们直接不使用全家桶的默认配置，我们直接使用自定义模板进行发送服务，上去直接整高级，奥里给
>虽然这样我们已经可以使用了，但是为更高的定制化，我们还需要去设置全家桶告警模板。包括我们用到的企业微信机器人模板，企业微信应用模板，邮件模板

#### 告警通知模板
**企业微信机器人robot**
```bash
{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
[Prometheus恢复信息]($v.generatorURL}})
>**[{{$v.labels.alertname}}]({{$var}})**
开始时间: {{GetCSTtime $v.startsAt}}
结束时间: {{GetCSTtime $v.endsAt}}
恢复主机IP: {{$v.labels.instance}}
**{{$v.annotations.recoverymessage}}**
{{else}}
[Prometheus告警信息]($v.generatorURL}})
>**[{{$v.labels.alertname}}]({{$var}})**
>告警级别: {{$v.labels.severity}}
开始时间: {{GetCSTtime $v.startsAt}}
故障主机IP: {{$v.labels.instance}}
**{{$v.annotations.description}}**
{{end}}
{{ end }}
```
**企业微信应用**
```bash
{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
[Prometheus恢复信息]($v.generatorURL}})
>**[{{$v.labels.alertname}}]({{$var}})**
开始时间: {{GetCSTtime $v.startsAt}}
结束时间: {{GetCSTtime $v.endsAt}}
恢复主机: {{$v.labels.instance}}
**{{$v.annotations.recoverymessage}}**
{{else}}
[Prometheus告警信息]($v.generatorURL}})
>**[{{$v.labels.alertname}}]({{$var}})**
>告警级别: {{$v.labels.severity}}
开始时间: {{GetCSTtime $v.startsAt}}
故障主机: {{$v.labels.instance}}
**{{$v.annotations.description}}**
{{end}}
{{ end }}
```
**邮件正儿八经模板**
```bash
{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
<h1><a href ={{$v.generatorURL}}>海外卡片怪兽监控告警</a></h1>
<h2><a href ={{$var}}>{{$v.labels.alertname}}</a></h2>
<h5>告警级别：{{$v.labels.level}}</h5>
<h5>告警程度：{{$v.labels.severity}}</h5>
<h5>开始时间：{{GetCSTtime $v.startsAt}}</h5>
<h5>结束时间：{{GetCSTtime $v.endsAt}}</h5>
<h5>故障主机IP：{{$v.labels.instance}}</h5>
<h3>{{$v.annotations.recoverymessage}}</h3>
{{else}}
<h1><a href ={{$v.generatorURL}}>海外卡片怪兽监控告警</a></h1>
<h2><a href ={{$var}}>{{$v.labels.alertname}}</a></h2>
<h5>告警级别：{{$v.labels.level}}</h5>
<h5>告警程度：{{$v.labels.severity}}</h5>
<h5>开始时间：{{GetCSTtime $v.startsAt}}</h5>
<h5>故障主机IP：{{$v.labels.instance}}</h5>
<h3>{{$v.annotations.description}}</h3>
{{end}}
{{ end }}
```
**邮件花里胡哨模板**
```html
<html>
<meta charset="utf-8">
<div style="position:relative;width:450px;height:auto;margin:0 auto;padding-bottom:5px;border:rgb(224, 221, 224) solid 1px;border-radius:10px">    <div style="background-image:url(https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/1-1.jpg);width:100%;height:300px;background-size:cover;background-repeat:no-repeat;border-radius:10px 10px 0px 0px"></div>
    <div style="width:40%;height:40px;background-color:rgb(231, 145, 145);margin-top:-20px;margin-left:20px;color:#fff;text-align:center;line-height:40px;border-radius:30px">
        亲爱的：运维同学！
    </div>
    <div style="line-height:180%;padding:0 15px 12px;width:90%;margin:auto;margin-bottom:0px;font-size:12px">
        <div style="border-bottom:1px solid rgb(216, 213, 213);font-size:13px;margin:10px 0px;padding:10px 0px">
            <span style="color:#12ADDB;font-weight:bold">&gt;&nbsp;</span>
            <span>您有一条新的告警信息！</span>
            <a style="text-decoration:none;color:#12ADDB;font-weight:bold;" href="{$comment->permalink}" target="_blank">{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
<h1><a href ={{$v.generatorURL}}>北青服务器告警信息</a></h1>
<h2><a href ={{$var}}>{{$v.labels.alertname}}</a></h2>
<h5>告警级别：{{$v.labels.level}}</h5>
<h5>告警程度：{{$v.labels.severity}}</h5>
<h5>开始时间：{{GetCSTtime $v.startsAt}}</h5>
<h5>结束时间：{{GetCSTtime $v.endsAt}}</h5>
<h5>故障主机IP：{{$v.labels.instance}}</h5>
<h3>{{$v.annotations.recoverymessage}}</h3>
{{else}}
<h1><a href ={{$v.generatorURL}}>北青服务器告警信息</a></h1>
<h2><a href ={{$var}}>{{$v.labels.alertname}}</a></h2>
<h5>告警级别：{{$v.labels.level}}</h5>
<h5>告警程度：{{$v.labels.severity}}</h5>
<h5>开始时间：{{GetCSTtime $v.startsAt}}</h5>
<h5>故障主机IP：{{$v.labels.instance}}</h5>
<h3>{{$v.annotations.description}}</h3>
{{end}}
{{ end }}</a>
        </div>
    <div
        style="color:#8c8c8c;font-size:8px;width:93%;margin:auto;margin-top:-30px">
        <p style="padding:20px;">                                 对生产环境要有一颗敬畏之心！</p>
    </div>
    <a style="text-decoration:none;background-color:rgb(155, 151, 221);color:#FFF;width:40%;text-align:center;height:40px;line-height:40px;box-shadow:5px 5px 5px rgba(0,0,0,0.2);margin:-10px auto;display:block;border-radius:30px" href="http://uc.kococ.cn:9090/" target="_blank">查看完整回复内容</a>
    <div style="color:#8c8c8c;font-size:8px;width:100%;text-align:center;margin-top:30px">
        <p>本邮件为系统自动发送，请勿直接回复哦！</p>
    </div>
    <div style="color:#8c8c8c;font-size:8px;width:100%;text-align:center">
        <p>Copyright © 北青永恒. All Rights Reserved.</p>
    </div>
</div>   
</html> 
```
>请注意如果您按照我的配置的话，请从头到尾都按照我的配置来，我这三个模板需要您打开并配置全家桶的三个告警模板,这些扩展功能我先用，至于设置我放在下面，请务必举一反三

---------------------
**更新完以上配置后,默认就可以"开箱即用了",记得重启这三个服务**

```bash
docker restart prometheus alertmanager PrometheusAlert
```

*更改后,alertmanager默认不再承担告警角色,它会转发到PrometheusAlert程序中*

同时可以访问http://192.168.1.101:8080/test界面进行测试发信
这里提供一个可以测试发信的日志信息，你会用到的
```bash
{"receiver":"prometheusalert-weixinyingyong","status":"resolved","alerts":[{"status":"resolved","labels":{"alertname":"Agent状态","instance":"192.168.0.212:8001","job":"容器指标","level":"4","severity":"ERROR"},"annotations":{"description":"实例 192.168.0.212:8001 Job 名为 容器指标 已经丢失信息长达一分钟,请相关运维介入","recoverymessage":"实例 192.168.0.212:8001 已恢复正常监控","summary":"实例 192.168.0.212:8001 监控信息告警"},"startsAt":"2021-01-27T07:20:52.83520515Z","endsAt":"2021-01-27T07:34:22.83520515Z","generatorURL":"http://uc.kococ.cn:9090/graph?g0.expr=up+%3D%3D+0\u0026g0.tab=1","fingerprint":"3d737b721cd900a3"}],"groupLabels":{"alertname":"Agent状态"},"commonLabels":{"alertname":"Agent状态","instance":"192.168.0.212:8001","job":"容器指标","level":"4","severity":"ERROR"},"commonAnnotations":{"description":"实例 192.168.0.212:8001 Job 名为 容器指标 已经丢失信息长达一分钟,请相关运维介入","recoverymessage":"实例 192.168.0.212:8001 已恢复正常监控","summary":"实例 192.168.0.212:8001 监控信息告警"},"externalURL":"http://uc.kococ.cn:9090","version":"4","groupKey":"{}/{level=\"4\"}:{alertname=\"Agent状态\"}","truncatedAlerts":0}
```



## 扩展功能 PrometheusAlert高级自定义消息模版



*在我的理解下,其实并不算是扩展功能.但凡你想使用自己的发信模板,哪怕你只想更改一丢丢默认的模板,那么你也需要学一下这个扩展功能.*

**环境中使用企业微信机器人进行故障告警及故障恢复测试**

### 部署配置

**PrometheusAlert 配置**  

访问网页地址http://192.168.1.101:8080/template

*点击模板编辑-*

![image-20201130180052868](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201130180052868.png)

温馨提示: 企业微信告警分两种,一种是企业微信应用告警,一种是企业微信机器人告警.这里采用的是企业微信机器人告警.如需使用企业微信应用告警请自行摸索配置文件app.conf

![image-20201130180349108](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201130180349108.png)

```yaml
{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
[Prometheus恢复信息]($v.generatorURL}})
>**[{{$v.labels.alertname}}]({{$var}})**
开始时间: {{$v.startsAt}}
结束时间: {{$v.endsAt}}
恢复主机IP: {{$v.labels.instance}}
**{{$v.annotations.recoverymessage}}**
{{else}}
[Prometheus告警信息]($v.generatorURL}})
>**[{{$v.labels.alertname}}]({{$var}})**
>告警级别: {{$v.labels.severity}}
开始时间: {{$v.startsAt}}
故障主机IP: {{$v.labels.instance}}
**{{$v.annotations.description}}**
{{end}}
{{ end }}
```

往下滑

![image-20201130180530253](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201130180530253.png)

这里填入你在企业微信中新建的**机器人地址**,填写后点击**保存模板**

回到刚刚的界面复制路径

![image-20201130180809297](https://vlinux-1259060227.cos.ap-shanghai.myqcloud.com/www-vlinux-cn-blog-img/gitee-backup/img-master/image/image-20201130180809297.png)


将你复制的路径地址填写在config.yml文件中.**记得更换其中企业微信的地址**

**更新完以上配置后,重启这两个服务**:-1:

```bash
docker restart alertmanager PrometheusAlert
```



关闭您的Job或者采集器,测试是否正常告警.

如果有错,请分析PrometheusAlert程序日志.或者直接百度.谢谢您的阅读

### 参考
https://gitee.com/feiyu563/PrometheusAlert
https://feiyu563.gitbook.io/prometheusalert/













