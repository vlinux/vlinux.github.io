import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang.9ec5348a.js";import{_ as r,c as D,w as o,o as y,r as n,g as s,R as l,p as F}from"./app.b1d56752.js";import"./YunFooter.vue_vue_type_script_setup_true_lang.7dcbcc8f.js";import"./YunCard.vue_vue_type_style_index_0_lang.2189ed33.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.0b20d5e4.js";const X=JSON.parse('{"title":"ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C","description":"","frontmatter":{"title":"ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C","categories":"ES","tags":["Elasticsearch\u5907\u4EFD\u811A\u672C"],"date":"2021-01-13T11:50:00.000Z"},"headers":[],"relativePath":"pages/posts/ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C.md","lastUpdated":0}'),e=JSON.parse('{"title":"ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C","description":"","frontmatter":{"title":"ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C","categories":"ES","tags":["Elasticsearch\u5907\u4EFD\u811A\u672C"],"date":"2021-01-13T11:50:00.000Z"},"headers":[],"relativePath":"pages/posts/ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C.md","path":"/Users/vlinux/vlinux/blog/valaxy/valaxy-vlinux/pages/posts/ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C.md","lastUpdated":0}'),C={name:"pages/posts/ES-Elasticsearch\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u811A\u672C.md",data(){return{data:e,frontmatter:e.frontmatter}},setup(){F("pageData",e)}},A=s("p",null,[s("strong",null,"1.\u5907\u4EFD\u6570\u636E"),l(" 1.1 \u521B\u5EFA\u5907\u4EFD\u4ED3\u5E93")],-1),i=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ curl -u elastic:123456 -XPOST "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"192.168.1.1:9200/_snapshot/hsbc_backup"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," -H  "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Content-Type: application/json"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," -d "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'{ "type": "fs",  "settings": { "location": "/alidata1/admin/backup/elasticsearch", "compress": true, "chunk_size": "1g", "max_snapshot_bytes_per_sec": "50m", "max_restore_bytes_per_sec": "50m"}}'),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1")]),l(`
`),s("span",{class:"line"})])])],-1),_=s("p",null,"1.2 \u5907\u4EFD\u811A\u672C",-1),E=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ cat /alidata1/admin/scripts/elasticsearch/es_bak_del.sh")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"#!/bin/bash")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"## define vars")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_url="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"http://192.168.1.1:9200"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_bak_repo="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hsbc_backup"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_user="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"elastic"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_pass="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"123456"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_bak_date="),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"date +"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"%Y-%m-%d-%H"),s("span",{style:{color:"#89DDFF"}},"'`")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," -e "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"\\n =========== "),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"es_bak_date"),s("span",{style:{color:"#C3E88D"}}," ============"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"## bak")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"curl -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," -XPUT "),s("span",{style:{color:"#89DDFF"}},'"${'),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_snapshot/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_bak_repo"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/es_bak_"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_bak_date"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"?wait_for_completion=true"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'""')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"##sleep")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sleep 10")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"##del \u6700\u540E\u768460: \u5B9A\u65F6\u4EFB\u52A1 \u6BCF4\u5C0F\u65F6\u5907\u4EFD\u4E00\u6B21 \u4E00\u5929\u5907\u4EFD6\u6B21  \u6570\u636E\u4FDD\u755910\u5929")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_del_snapshots="),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"curl -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," -s -XGET "),s("span",{style:{color:"#89DDFF"}},'"${'),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_snapshot/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_bak_repo"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_all"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#C3E88D"}}," python -m json.tool"),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#C3E88D"}}," python -c "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'import json; import sys; input = sys.stdin.read(); result = [x["snapshot"] for x in json.loads(input)["snapshots"]]; print("\\n".join(result[:-60]));'),s("span",{style:{color:"#89DDFF"}},"'`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"for"),s("span",{style:{color:"#A6ACCD"}}," es_del_snapshot "),s("span",{style:{color:"#89DDFF"}},"in"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_del_snapshots"),s("span",{style:{color:"#89DDFF"}},"};"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"do")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"==========="),s("span",{style:{color:"#89DDFF"}},"$"),s("span",{style:{color:"#A6ACCD"}},"es_del_snapshot"),s("span",{style:{color:"#C3E88D"}}," del"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    curl -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," -s -XDELETE "),s("span",{style:{color:"#89DDFF"}},'"${'),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_snapshot/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_bak_repo"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_del_snapshot"),s("span",{style:{color:"#89DDFF"}},'}"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"done")]),l(`
`),s("span",{class:"line"})])])],-1),d=s("p",null,"1.3 \u521B\u5EFA\u5B9A\u65F6\u4EFB\u52A1",-1),u=s("div",{class:"language-sh"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ crontab -e")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0 "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}},"/4 "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"**"),s("span",{style:{color:"#A6ACCD"}}," /bin/bash /alidata1/admin/scripts/elasticsearch/es_bak_del.sh "),s("span",{style:{color:"#89DDFF"}},">>"),s("span",{style:{color:"#A6ACCD"}}," /alidata1/admin/logs/crontab/es_bak/crontab.log "),s("span",{style:{color:"#89DDFF"}},"2>&1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"12")]),l(`
`),s("span",{class:"line"})])])],-1),h=s("p",null,[s("strong",null,"2.\u6570\u636E\u8FD8\u539F"),l(" \u76EE\u7684\uFF1A\u5C06\u67D0\u4E00\u4E2A\u5907\u4EFD\u7684\u6587\u4EF6\u8FD8\u539F\u5230192.168.1.1")],-1),m=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ cat es_restore.sh")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"#!/bin/bash")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"set"),s("span",{style:{color:"#A6ACCD"}}," -e")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"## define vars")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_url="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"http://192.168.1.1:9200"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_bak_repo="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hsbc_backup"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_restore_snapshots="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"es_bak_20200811"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_user="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"elastic"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_pass="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"123456"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"##(1)\u83B7\u53D6\u5907\u4EFD\u6587\u4EF6\u4E2D\u5B58\u5728\u7684\u7D22\u5F15")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"es_get_snapshots_index="),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"curl -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," -s -XGET "),s("span",{style:{color:"#89DDFF"}},'"${'),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_snapshot/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_bak_repo"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_restore_snapshots"),s("span",{style:{color:"#89DDFF"}},'}"'),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#C3E88D"}}," python -m json.tool"),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#C3E88D"}}," python -c "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'import json; import sys; input = sys.stdin.read(); result=json.loads(input); indices = result["snapshots"][0]["indices"]; sys.stdout.write("  ".join([i for i in indices]));'),s("span",{style:{color:"#89DDFF"}},"'`")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"##(2)\u5C06\u5907\u4EFD\u6587\u4EF6\u4E2D\u5B58\u5728\u7684\u7D22\u5F15\u5220\u9664  \u7136\u540E\u6062\u590D")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"for"),s("span",{style:{color:"#A6ACCD"}}," index "),s("span",{style:{color:"#89DDFF"}},"in"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_get_snapshots_index"),s("span",{style:{color:"#89DDFF"}},"};"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"do")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"=="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},".security-6"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"];"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"then"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95"}},"# \u5982\u679C\u7D22\u5F15\u4E3A .security-6 \u5219\u4E0D\u80FD\u5220\u9664")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#89DDFF"}},"continue")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"fi")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#676E95"}},"# \u5224\u65AD\u7D22\u5F15\u662F\u5426\u5B58\u5728")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    res="),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"curl -s -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," -XGET "),s("span",{style:{color:"#89DDFF"}},'"${'),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},'}"|'),s("span",{style:{color:"#C3E88D"}}," grep "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"error"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#C3E88D"}},"grep 404"),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#C3E88D"}},"awk "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"{print $1}"),s("span",{style:{color:"#89DDFF"}},"'`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"-z"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"res"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"]"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"then"),s("span",{style:{color:"#A6ACCD"}},"   "),s("span",{style:{color:"#676E95"}},"#\u5982\u679C\u5B58\u5728\u5219\u5220\u9664\u7D22\u5F15")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        curl -s -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," -XDELETE "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},"/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," -e "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"\\ndelete index data : "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"fi")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#676E95"}},"#\u6570\u636E\u6062\u590D")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"echo"),s("span",{style:{color:"#A6ACCD"}}," -e "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"data restore : "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"\\n"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    curl -s -u "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_user"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},":"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_pass"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," -XPOST "),s("span",{style:{color:"#89DDFF"}},'"${'),s("span",{style:{color:"#A6ACCD"}},"es_url"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_snapshot/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_bak_repo"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"es_restore_snapshots"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}},"/_restore"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," -H "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Content-Type: application/json"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," -d "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'{"indices": "'),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"index"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'"}'),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"done")]),l(`
`),s("span",{class:"line"})])])],-1);function $(a,f,b,g,t,v){const p=c;return y(),D(p,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":o(()=>[A,i,_,E,d,u,h,m]),"main-header":o(()=>[n(a.$slots,"main-header")]),"main-header-after":o(()=>[n(a.$slots,"main-header-after")]),"main-nav":o(()=>[n(a.$slots,"main-nav")]),"main-content":o(()=>[n(a.$slots,"main-content")]),"main-content-after":o(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":o(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":o(()=>[n(a.$slots,"main-nav-after")]),comment:o(()=>[n(a.$slots,"comment")]),footer:o(()=>[n(a.$slots,"footer")]),aside:o(()=>[n(a.$slots,"aside")]),"aside-custom":o(()=>[n(a.$slots,"aside-custom")]),default:o(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const w=r(C,[["render",$]]);export{X as __pageData,w as default};
