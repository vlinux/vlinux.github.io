import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c06d8755.js";import{_ as d,c as u,w as e,o as y,a as C,b as l,d as s,e as o,r as t,f as g,p as h}from"./app-aa1e5b4f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-a847d205.js";import"./YunCard.vue_vue_type_style_index_0_lang-61d41b45.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-944b3777.js";const rl=JSON.parse('{"title":"Linux系统调整系统日志生命周期","description":"","frontmatter":{"title":"Linux系统调整系统日志生命周期","date":"2025-04-14T11:11:13.000Z","updated":"2025-04-14T11:11:13.000Z","tags":null,"categories":null,"end":false},"headers":[{"level":2,"title":"解决方案概述","slug":"解决方案概述","link":"#解决方案概述","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[{"level":3,"title":"1. 定位配置文件","slug":"_1-定位配置文件","link":"#_1-定位配置文件","children":[]},{"level":3,"title":"2. 修改配置","slug":"_2-修改配置","link":"#_2-修改配置","children":[]},{"level":3,"title":"3. 手动测试配置","slug":"_3-手动测试配置","link":"#_3-手动测试配置","children":[]},{"level":3,"title":"4. 验证结果","slug":"_4-验证结果","link":"#_4-验证结果","children":[]}]},{"level":2,"title":"配置解析","slug":"配置解析","link":"#配置解析","children":[]},{"level":2,"title":"验证与生效","slug":"验证与生效","link":"#验证与生效","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"pages/posts/linux-syslog-ttl.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/linux-syslog-ttl.md","lastUpdated":1744600603000}'),r=JSON.parse('{"title":"Linux系统调整系统日志生命周期","description":"","frontmatter":{"title":"Linux系统调整系统日志生命周期","date":"2025-04-14T11:11:13.000Z","updated":"2025-04-14T11:11:13.000Z","tags":null,"categories":null,"end":false},"headers":[{"level":2,"title":"解决方案概述","slug":"解决方案概述","link":"#解决方案概述","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[{"level":3,"title":"1. 定位配置文件","slug":"_1-定位配置文件","link":"#_1-定位配置文件","children":[]},{"level":3,"title":"2. 修改配置","slug":"_2-修改配置","link":"#_2-修改配置","children":[]},{"level":3,"title":"3. 手动测试配置","slug":"_3-手动测试配置","link":"#_3-手动测试配置","children":[]},{"level":3,"title":"4. 验证结果","slug":"_4-验证结果","link":"#_4-验证结果","children":[]}]},{"level":2,"title":"配置解析","slug":"配置解析","link":"#配置解析","children":[]},{"level":2,"title":"验证与生效","slug":"验证与生效","link":"#验证与生效","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"pages/posts/linux-syslog-ttl.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/linux-syslog-ttl.md","lastUpdated":1744600603000}'),A={name:"pages/posts/linux-syslog-ttl.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){h("pageData",r)}},_=l("p",null,[s("默认情况下，Linux 系统日志（如 "),l("code",null,"/var/log/messages"),s("）的保留周期可能较短（例如仅保留 4 周）。本文记录如何通过修改 "),l("code",null,"logrotate"),s(" 配置，将日志生命周期调整为 "),l("strong",null,"保留 180 天"),s("，并实现每日轮转、压缩存储。")],-1),D={id:"解决方案概述",tabindex:"-1"},m=l("ol",null,[l("li",null,[l("strong",null,"工具"),s("：使用 "),l("code",null,"logrotate"),s("（Linux 日志轮转管理工具）。")]),l("li",null,[l("strong",null,"核心配置"),s("： "),l("ul",null,[l("li",null,[s("将 "),l("code",null,"/var/log/messages"),s(" 独立配置，设置 "),l("code",null,"daily"),s("（每日轮转）和 "),l("code",null,"rotate 180"),s("（保留 180 份）。")]),l("li",null,[s("其他日志（如 "),l("code",null,"/var/log/cron"),s("）保持默认策略。")])])]),l("li",null,[l("strong",null,"效果"),s("：每日生成一个压缩日志文件（如 "),l("code",null,"messages-YYYYMMDD.gz"),s("），自动清理 180 天前的旧日志。")])],-1),F=l("hr",null,null,-1),v={id:"操作步骤",tabindex:"-1"},f={id:"_1-定位配置文件",tabindex:"-1"},B=l("p",null,[s("日志轮转配置位于 "),l("code",null,"/etc/logrotate.d/syslog"),s("：")],-1),x=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"cat"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/etc/logrotate.d/syslog")]),s(`
`),l("span",{class:"line"})])])],-1),b={id:"_2-修改配置",tabindex:"-1"},k=l("p",null,[s("将 "),l("code",null,"/var/log/messages"),s(" 分离为独立配置块：")],-1),E=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# 其他日志保持默认配置（按周轮转，保留4份）")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"/var/log/cron")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"/var/log/maillog")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"/var/log/secure")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"/var/log/spooler")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"/var/log/kern")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"missingok")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"sharedscripts")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"postrotate")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#FFCB6B"}},"/usr/bin/systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"kill"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-s"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"HUP"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"rsyslog.service"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#C3E88D"}},"/dev/null"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"2>&1"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"||"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"endscript")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"# 单独配置 messages 保留 180 天")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"/var/log/messages"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"daily"),l("span",{style:{color:"#A6ACCD"}},"          "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 每日轮转")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"rotate"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"180"),l("span",{style:{color:"#A6ACCD"}},"     "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 保留 180 份")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"compress"),l("span",{style:{color:"#A6ACCD"}},"       "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 启用压缩")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"dateext"),l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 日期后缀命名（如 messages-20250415.gz）")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"delaycompress"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 延迟压缩前一个日志")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"missingok"),l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 日志不存在时不报错")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"notifempty"),l("span",{style:{color:"#A6ACCD"}},"     "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 空文件不轮转")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"sharedscripts")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"postrotate")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#676E95","font-style":"italic"}},"# 发送 HUP 信号通知 rsyslog 重新打开日志文件")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#FFCB6B"}},"/usr/bin/systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"kill"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-s"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"HUP"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"rsyslog.service"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#C3E88D"}},"/dev/null"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"2>&1"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"||"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#FFCB6B"}},"endscript")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),$=l("blockquote",null,[l("p",null,"复制过去之后记得把#删除了")],-1),L={id:"_3-手动测试配置",tabindex:"-1"},U=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"logrotate"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-vf"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/etc/logrotate.d/syslog")]),s(`
`),l("span",{class:"line"})])])],-1),w=l("ul",null,[l("li",null,[l("strong",null,[l("code",null,"-v")]),s("：显示详细过程。")]),l("li",null,[l("strong",null,[l("code",null,"-f")]),s("：强制立即轮转。")])],-1),N={id:"_4-验证结果",tabindex:"-1"},P=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"ls"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-lth"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/var/log/messages"),l("span",{style:{color:"#A6ACCD"}},"*")]),s(`
`),l("span",{class:"line"})])])],-1),T=l("p",null,"输出示例：",-1),z=l("div",{class:"language-markdown"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 10M Apr 15 00:00 /var/log/messages")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2.1M Apr 14 00:00 /var/log/messages-20250414.gz")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2.0M Apr 13 00:00 /var/log/messages-20250413.gz")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"...")]),s(`
`),l("span",{class:"line"})])])],-1),M=l("hr",null,null,-1),S={id:"配置解析",tabindex:"-1"},V=l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}},"参数"),l("th",{style:{"text-align":"center"}},"作用"),l("th",{style:{"text-align":"center"}},"必要性")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}},[l("code",null,"daily")]),l("td",{style:{"text-align":"center"}},[s("每日轮转（覆盖默认的 "),l("code",null,"weekly"),s("）")]),l("td",{style:{"text-align":"center"}},"关键")]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("code",null,"rotate 180")]),l("td",{style:{"text-align":"center"}},"保留 180 份旧日志（按天数）"),l("td",{style:{"text-align":"center"}},"关键")]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("code",null,"compress")]),l("td",{style:{"text-align":"center"}},"启用 gzip 压缩节省空间"),l("td",{style:{"text-align":"center"}},"推荐")]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("code",null,"dateext")]),l("td",{style:{"text-align":"center"}},"使用日期后缀命名（而非序号）"),l("td",{style:{"text-align":"center"}},"可选")]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("code",null,"delaycompress")]),l("td",{style:{"text-align":"center"}},"延迟压缩前一个日志（避免漏压）"),l("td",{style:{"text-align":"center"}},"可选")]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("code",null,"postrotate")]),l("td",{style:{"text-align":"center"}},"轮转后通知 rsyslog 重新加载文件"),l("td",{style:{"text-align":"center"}},"必要")])])],-1),H=l("hr",null,null,-1),Y={id:"验证与生效",tabindex:"-1"},Z=l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"定时任务"),s("：logrotate 通过 "),l("code",null,"cron"),s(" 每日自动运行")]),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"cat"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/etc/cron.daily/logrotate")]),s(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,[l("strong",null,"轮转记录"),s("：")]),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"grep"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"logrotate"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/var/log/cron")]),s(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,[l("strong",null,"保留策略"),s("：每日检查 "),l("code",null,"/var/log/messages-*.gz"),s(" 文件数量，确认总数稳定在 180 个左右。")])])],-1),O=l("hr",null,null,-1),J={id:"注意事项",tabindex:"-1"},q=l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"磁盘空间"),s("：确保 "),l("code",null,"/var/log"),s(" 目录有足够空间存储 180 天日志。")]),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"df"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-h"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"/var/log")]),s(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,[l("strong",null,"压缩效果"),s("：压缩后日志大小通常减少 70%~90%，但需权衡 CPU 开销。")])]),l("li",null,[l("p",null,[l("strong",null,"时间同步"),s("：确保系统时间准确（NTP 同步），避免轮转异常。")])]),l("li",null,[l("p",null,[l("strong",null,"回滚配置"),s("：若需恢复默认，删除 "),l("code",null,"/var/log/messages"),s(" 的独立配置块即可。")])])],-1),R=l("hr",null,null,-1),j={id:"总结",tabindex:"-1"},G=l("p",null,[s("通过调整 "),l("code",null,"logrotate"),s(" 配置，我们实现了：")],-1),I=l("ul",null,[l("li",null,[l("strong",null,"精准控制"),s("：仅修改 "),l("code",null,"/var/log/messages"),s(" 的保留策略，不影响其他日志。")]),l("li",null,[l("strong",null,"自动化管理"),s("：每日轮转、压缩、清理旧日志。")]),l("li",null,[l("strong",null,"透明可查"),s("：通过日期后缀清晰追踪日志时间范围。")])],-1),K=l("p",null,"完整配置已通过实际环境验证，可直接应用于 CentOS、Alibaba Cloud Linux 等基于 RHEL 的发行版。",-1);function Q(n,W,X,ll,c,sl){const a=g,i=p;return y(),u(i,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[_,C(" more "),l("h2",D,[s("解决方案概述 "),o(a,{class:"header-anchor",href:"#解决方案概述","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),m,F,l("h2",v,[s("操作步骤 "),o(a,{class:"header-anchor",href:"#操作步骤","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),l("h3",f,[s("1. 定位配置文件 "),o(a,{class:"header-anchor",href:"#_1-定位配置文件","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),B,x,l("h3",b,[s("2. 修改配置 "),o(a,{class:"header-anchor",href:"#_2-修改配置","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),k,E,$,l("h3",L,[s("3. 手动测试配置 "),o(a,{class:"header-anchor",href:"#_3-手动测试配置","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),U,w,l("h3",N,[s("4. 验证结果 "),o(a,{class:"header-anchor",href:"#_4-验证结果","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),P,T,z,M,l("h2",S,[s("配置解析 "),o(a,{class:"header-anchor",href:"#配置解析","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),V,H,l("h2",Y,[s("验证与生效 "),o(a,{class:"header-anchor",href:"#验证与生效","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),Z,O,l("h2",J,[s("注意事项 "),o(a,{class:"header-anchor",href:"#注意事项","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),q,R,l("h2",j,[s("总结 "),o(a,{class:"header-anchor",href:"#总结","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),G,I,K]),"main-header":e(()=>[t(n.$slots,"main-header")]),"main-header-after":e(()=>[t(n.$slots,"main-header-after")]),"main-nav":e(()=>[t(n.$slots,"main-nav")]),"main-content":e(()=>[t(n.$slots,"main-content")]),"main-content-after":e(()=>[t(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[t(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[t(n.$slots,"main-nav-after")]),comment:e(()=>[t(n.$slots,"comment")]),footer:e(()=>[t(n.$slots,"footer")]),aside:e(()=>[t(n.$slots,"aside")]),"aside-custom":e(()=>[t(n.$slots,"aside-custom")]),default:e(()=>[t(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const cl=d(A,[["render",Q]]);export{rl as __pageData,cl as default};
