---
title: Solr到Elasticsearch的踩坑与优化
date: 2025-07-09 09:12:31
updated: 2025-07-09 09:12:31
tags:
categories: ES
end: false
---

<!-- more -->

## 背景

随着业务的发展，我们决定将搜索引擎从Solr迁移到Elasticsearch（ES）。迁移的数据量如下：

- 数据条数：2.5亿
- 存储大小：约30GB

迁移工具：阿里云推荐的开源工具 solr-to-es

初始迁移命令：

```bash
nohup python3.6 __main__.py \
'http://10.160.24.17:8983/solr/alert_summary/select' \
'http://elastic:******@es-cn-t8j44.elasticsearch.aliyuncs.com:9200' \
rtm-prod-alert-summary rtm-prod-alert-summary \
--rows-per-page 2000 &
```

## 问题发现

### 1. 迁移速度急剧下降

- 初始速度：每秒几千条
- 迁移至7千万条时：降至每秒几十条

**原因分析**：

- Solr的深分页性能问题（`start`参数越大，查询越慢）
- ES索引数据量增大后写入变慢

### 2. 数据混乱

- 迁移过程中，生产环境的新数据仍在写入ES
- 迁移中断后，无法确定迁移进度

### 3. 迁移中断

- Solr查询超时导致工具报错

### 4. 未指定唯一键

- 初始迁移未指定`--id-field`参数，导致迁移的数据在ES中生成随机的`_id`
- 生产写入的数据中`_id`与`alertSummaryId`相等，而迁移的数据则不等

## 解决方案

### 步骤1：清理脏数据

使用ES的`_delete_by_query`API删除迁移产生的脏数据（即`_id`不等于`alertSummaryId`的文档）：

```json
POST /rtm-prod-alert-summary/_delete_by_query?scroll_size=10000&requests_per_second=10000&conflicts=proceed&wait_for_completion=false
{
  "query": {
    "script": {
      "script": {
        "source": "doc['_id'].value != doc['alertSummaryId'].value",
        "lang": "painless"
      }
    }
  }
}
```

- **耗时**：约3小时（7千万条数据）

- 监控删除任务

  ```bash
  GET _tasks?actions=*delete*&detailed
  ```

### 步骤2：优化迁移策略

#### 关键改进1：指定唯一键

添加`--id-field alertSummaryId`参数，确保迁移数据的`_id`等于`alertSummaryId`，这样重复迁移时会自动覆盖。

#### 关键改进2：按时间范围分批迁移

使用Solr的`fq`参数按年（或月）迁移数据，避免深分页问题。示例命令：

```bash
python3.6 __main__.py \
'http://10.160.24.17:8983/solr/alert_summary/select?q=*:*&fq=alertTime:[1741968000000 TO 1743436800000]' \
'http://es-cn-t8j44.elasticsearch.aliyuncs.com:9200' \
rtm-prod-alert-summary \
--es-user elastic \
--es-password ***** \
--id-field alertSummaryId
```

### 步骤3：避免迁移期间新数据写入（可选）

- 在迁移期间暂停生产写入（根据业务情况决定）
- 或者迁移完成后，补充迁移暂停期间的新数据

## 迁移优化后的效果

1. **迁移速度稳定**：分批迁移避免了Solr深分页问题，速度保持在每秒数千条。
2. **数据一致性保证**：使用`--id-field`确保即使迁移中断重启也不会产生重复数据。
3. **可追踪进度**：按时间范围迁移，清楚知道每个批次是否成功。

## 总结与建议

- **核心教训**：大数据迁移务必指定唯一键，避免数据混乱。
- **分批策略**：按时间范围（或其他有序字段）分批次迁移，避免深分页。
  - 使用ES的`_tasks`API监控迁移和删除任务。
  - 推荐使用Elasticsearch Curator管理索引。
- **工具改进**：如果迁移工具不支持断点续传，可考虑开发脚本记录最后迁移的时间戳。
