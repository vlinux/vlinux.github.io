---
title: Alertmanage最详细的配置文件解释
date: 2022-04-01
updated: 2022-04-01
categories: Prometheus监控
tags:
  - Alertmanager配置
top: 1
---
```yaml
global:
#全局配置
  resolve_timeout: 5m
  #全局配置，设置解析超时时间
  http_config:
  #使用 WebHook 发送通知时，默认使用此处配置的 http 相关参数设置。如果不使用 WebHook，请忽略此处的参数。
    follow_redirects: true
    #跟随重定向
  smtp_from: 38867033@qq.com
  #你的邮箱账号
  smtp_smarthost: smtp.qq.com:25
  #你的邮箱SMTP服务器地址
  smtp_auth_username: 38867033@qq.com
  #你的邮箱名，可以自定义的
  smtp_auth_password: <secret>
  #你的邮箱授权码，如果不明白，那就网上搜
  smtp_require_tls: false
  #你是否启用TLS发信，如果启用，上面的那个25改为465
route:
#定义发信路由
  receiver: Default
  #路由名称Default
  group_by:
  #将标签值相同的告警事件组合到一个告警消息中发送。
  - namespace
  continue: false
  #看下面解释
  routes:
  #子路由
  - receiver: Watchdog
  #子路由名称
    match:
    #标签匹配
      alertname: Watchdog
    continue: false
  - receiver: Critical
  #子路由名称
    match:
    #标签匹配
      severity: critical
    continue: false
  group_wait: 30s
  #分组等候时间
  group_interval: 5m
  #同一分组消息发送间隔时间
  repeat_interval: 12h
  #一模一样的告警消息再次发送时间
inhibit_rules:
#抑制规则，博主不懂
- source_match:
    severity: critical
  target_match:
    severity_re: warning|info
  equal:
  - namespace
  - alertname
- source_match:
    severity: warning
  target_match:
    severity_re: info
  equal:
  - namespace
  - alertname
receivers:
#联系人组配置
- name: Default
#default组
  webhook_configs:
  #webhook配置
  - send_resolved: true
  #发送已解决的告警消息
    http_config:
      follow_redirects: true
    url: http://dingtalk:8060/dingtalk/Default-2t88s/send
    #你webhook的地址
    max_alerts: 0
    #不知道
- name: Watchdog
#Watchdog组
  email_configs:
  #email配置
  - send_resolved: true
    to: ilinux@88.com
    #发送给谁
    from: 38867033@qq.com
    hello: localhost
    #test
    smarthost: smtp.qq.com:25
    #邮箱配置
    auth_username: 38867033@qq.com
    auth_password: <secret>
    headers:
      From: 38867033@qq.com
      Subject: '{{ template "email.default.subject" . }}'
      To: ilinux@88.com
    html: '{{ template "email.default.html" . }}'
    require_tls: false
  webhook_configs:
  - send_resolved: true
    http_config:
      follow_redirects: true
    url: http://dingtalk:8060/dingtalk/Watchdog-5hi33/send
    max_alerts: 0
- name: Critical
  email_configs:
  - send_resolved: true
    to: yongheng.liu@nx-engine.com
    from: 38867033@qq.com
    hello: localhost
    smarthost: smtp.qq.com:25
    auth_username: 38867033@qq.com
    auth_password: <secret>
    headers:
      From: 38867033@qq.com
      Subject: '{{ template "email.default.subject" . }}'
      To: yongheng.liu@nx-engine.com
    html: '{{ template "email.default.html" . }}'
    require_tls: false
templates:
- /etc/alertmanager/config/*.tmpl
```

> 相关该配置文件解释说明如下

### 告警路由

告警路由可以通过条件判断，决定将告警信息发送给哪一个联系人组。

#### 作用

告警路由可以将 *告警标签匹配器* 以树形的结构组织起来，使得您可以对告警事件进行逐级分类，将不同类的事件发送给不同的告警联系人。

#### 匹配办法

- 当出现新的告警事件要发送给用户时，AlertManger 将以深度优先的原则遍历告警路由规则树，具体来说，对于每一个即将发送的告警信息，AlertManger 首先将 *告警路由规则树* 的根节点设置为 *当前节点*，然后

- 1.遍历 *当前节点* 的子节点，对于遍历中的子节点，比对告警事件的标签是否符合 *当前节点* 的标签匹配器：
  - 1.1. 如果不符合，则考察该子节点的下一个兄弟节点
  - 1.2. 如果符合，则：
    - 1.2.1. 将该子节点设置为 *当前节点*，并递归执行步骤 1.
    - 1.2.2. 从 1.1.1. 的递归调用返回后，判断该子节点的 *continue* 是否为 true
      - 1.2.2.1. 如果 *continue* 为 false，则跳过该子节点的后续兄弟节点
      - 1.2.2.2. 如果 *continue* 为 true，则将该子节点的后续兄弟节点设置为 *当前节点*，并递归执行步骤 1.
  - 1.3. 如果没有子节点的标签匹配器与告警事件符合，则按照 *当前节点* 定义的处理方式处理该告警事件

### **抑制规则**

抑制规则可以避免当某种问题告警产生之后用户接收到大量由此问题导致的一系列的其它告警通知。例如当集群不可用时，用户可能只希望接收到一条告警，告诉他这时候集群出现了问题，而不是大量的如集群中的应用异常、中间件服务异常的告警通知。

#### 匹配办法

当新的告警事件（目标告警事件）产生时，逐条比对抑制规则列表中的规则，对于每一条规则：

- 1.查找当前已产生的符合 *源告警事件匹配器* 的告警事件，得出 *匹配的源告警事件列表*；
- 2.比对 *匹配的源告警事件列表* 每一条源告警事件与目标告警事件，如果参与比对的源告警事件与目标告警事件都存在 *Equal 标签列表* 中的所有标签，且对于每一个标签来说，源告警事件中的标签值与目标告警事件中的标签值相同，则执行第 3 步的比对；

- 3.目标告警事件符合目标 *目标告警事件匹配器* 的条件；
- 对于目标告警事件，如果有一条抑制规则的 3 个比对步骤都通过，则不发送该事件的告警消息给告警联系人。



match 

>  标签选择器可以使用多个标签匹配器来匹配告警事件。
> 只有当所有标签匹配器都通过时，才认为该事件与此告警路由规则匹配。

group_by

> 按标签分组将标签值相同的告警事件组合到一个告警消息中发送。
> 例如：带有标签 cluster=A 以及 alertname=LatencyHigh 的告警事件放到同一个消息中发送。如果想要将每一个告警事件都通过一个独立的告警消息发送，则可以将此字段设置为你懂的

group_wait

>  在收到分组中的第一条告警事件之后，等候一定时间，以便尽量收集到更多属于同一个分组中的告警事件，超过等候时间后，再将该分组中的所有告警事件组合成一个告警消息发送。
> 一般设置在 0秒 - 180秒 之间

group_interval

> 在发送分组的一条告警消息后，间隔一定时间才允许发送同分组的下一条告警消息，
> 以避免用户过于频繁地接收到重复的告警消息。
> 一般设置在 5 分钟以上

repeat_interval

> 为一个告警事件成功发送告警消息之后，间隔一定时间才重复发送告警消息。
> 一般设置在 3 小时以上

## 上面的配置文件的总体解释为

声明三个Router路由，分别为Default,Watchdog,Critical，他们的父子关系如下

- Default
  - Watchdog
  - Critical

当有告警时，Alert深度匹配路由，也就是说三个都匹配，从Default开始以此匹配子路由，如果没有匹配到相关的标签，那么就由Default路由发出，如果匹配到相关标签，则以匹配到的相关标签的该路由发出

路由Default没有设置标签匹配，所以按理说，当子路由没有满足匹配标签相关的告警时，告警这件事由Default来发出

**Default**设置了标签分组,分组等候时间,分组间隔时间,重复间隔时间。配置文件翻译过来也就是当有告警通过Default路由发出时，他会在收到第一个发送请求后等待30秒钟，等待同一个Namespace标签的相关告警，如果没有等到，则直接发送。在发送后五分钟内如果再收到相同的分组告警发送请求，不予发送，必须等五分钟后再发。当告警通知成功后，在12个小时后才能再次发送一模一样的告警。

**Watchdog**设置了标签匹配器，配置文件翻译过来就是当有告警请求过来时，如果匹配到Watchdog路由上的标签匹配器alertname = Watchdog那么就等候30s发出（默认）

**Critical**设置了标签选择器，配置文件翻译过来就是当有告警请求过来时，如果匹配到Critical路由上的标签匹配器serverity = critical那么就等候30s发出（默认）
