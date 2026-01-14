---
title: ES-Elasticsearch数据库备份恢复脚本
categories: ES
tags: [Elasticsearch备份脚本]
date: 2021-01-13 11:50:00
---
**1.备份数据**
1.1 创建备份仓库

```shell
$ curl -u elastic:123456 -XPOST '192.168.1.1:9200/_snapshot/hsbc_backup' -H  'Content-Type: application/json' -d '{ "type": "fs",  "settings": { "location": "/alidata1/admin/backup/elasticsearch", "compress": true, "chunk_size": "1g", "max_snapshot_bytes_per_sec": "50m", "max_restore_bytes_per_sec": "50m"}}'
1
```

1.2 备份脚本

```shell
$ cat /alidata1/admin/scripts/elasticsearch/es_bak_del.sh

#!/bin/bash

## define vars
es_url="http://192.168.1.1:9200"
es_bak_repo="hsbc_backup"
es_user="elastic"
es_pass="123456"
es_bak_date=`date +'%Y-%m-%d-%H'`

echo -e "\n =========== $es_bak_date ============"

## bak
curl -u ${es_user}:${es_pass} -XPUT "${es_url}/_snapshot/${es_bak_repo}/es_bak_${es_bak_date}?wait_for_completion=true"
echo ""

##sleep
sleep 10

##del 最后的60: 定时任务 每4小时备份一次 一天备份6次  数据保留10天
es_del_snapshots=`curl -u ${es_user}:${es_pass} -s -XGET "${es_url}/_snapshot/${es_bak_repo}/_all" | python -m json.tool| python -c 'import json; import sys; input = sys.stdin.read(); result = [x["snapshot"] for x in json.loads(input)["snapshots"]]; print("\n".join(result[:-60]));'`
for es_del_snapshot in ${es_del_snapshots}; do
    echo "===========$es_del_snapshot del"
    curl -u ${es_user}:${es_pass} -s -XDELETE "${es_url}/_snapshot/${es_bak_repo}/${es_del_snapshot}"
    echo ""
done
```

1.3 创建定时任务

```sh
$ crontab -e
0 */4 * ** /bin/bash /alidata1/admin/scripts/elasticsearch/es_bak_del.sh >> /alidata1/admin/logs/crontab/es_bak/crontab.log 2>&1
12
```

**2.数据还原**
目的：将某一个备份的文件还原到192.168.1.1

```shell
$ cat es_restore.sh

#!/bin/bash

set -e
## define vars
es_url="http://192.168.1.1:9200"
es_bak_repo="hsbc_backup"
es_restore_snapshots="es_bak_20200811"
es_user="elastic"
es_pass="123456"

##(1)获取备份文件中存在的索引
es_get_snapshots_index=`curl -u ${es_user}:${es_pass} -s -XGET "${es_url}/_snapshot/${es_bak_repo}/${es_restore_snapshots}" | python -m json.tool| python -c 'import json; import sys; input = sys.stdin.read(); result=json.loads(input); indices = result["snapshots"][0]["indices"]; sys.stdout.write("  ".join([i for i in indices]));'`

##(2)将备份文件中存在的索引删除  然后恢复
for index in ${es_get_snapshots_index}; do
    if [ ${index} == ".security-6" ]; then # 如果索引为 .security-6 则不能删除
        continue
    fi
    # 判断索引是否存在
    res=`curl -s -u ${es_user}:${es_pass} -XGET "${es_url}/${index}"| grep "error" |grep 404|awk '{print $1}'`
    if [ -z ${res} ] ; then   #如果存在则删除索引
        curl -s -u ${es_user}:${es_pass} -XDELETE ${es_url}/${index}
        echo -e "\ndelete index data : ${index} "
    fi

    #数据恢复
    echo -e "data restore : ${index}\n"
    curl -s -u ${es_user}:${es_pass} -XPOST "${es_url}/_snapshot/${es_bak_repo}/${es_restore_snapshots}/_restore" -H 'Content-Type: application/json' -d '{"indices": "'${index}'"}'
done
```