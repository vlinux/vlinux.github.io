---
title: 证书 PEM + KEY 合成 P12 并在集群微服务中使用（操作笔记）
tags: 证书
categories: Linux技术
end: false
date: 2026-01-14 13:30:56
---

# 证书 PEM + KEY 合成 P12 并在集群微服务中使用（操作笔记）

> - 一个 `.pem` 文件（证书，且可能包含多段证书）
> - 一个 `.key` 文件（私钥）
>
> 将其合成为 `PKCS12 (.p12)` 文件，上传到集群供微服务加载使用，
> 并在上线前后完成完整校验（匹配性 / 有效期 / 服务可用性）。

---

## 1. 初始文件与环境判断

文件示例：

- test-baidu.com.pem

结论：
- 该证书最初大概率用于 **Nginx / 网关**
- pem 文件中 **可能包含多段证书（leaf + chain）**
- 微服务（Java / JVM）更适合使用 `PKCS12 (.p12)` 格式

---

## 2. 进入目录并确认文件

```bash
ls -ltrsh
cd 22624381_test-baidu.com_nginx
ls
```

---

## 3. 从单一 pem 中拆分 leaf 证书与证书链

### 3.1 拆分 leaf.pem（第 1 段证书）

```bash
awk '
/BEGIN CERTIFICATE/{c++}
{
  if (c==1) print
}
' test-baidu.com.pem > leaf.pem
```

说明：
- 第 1 段证书通常是 **站点证书 / 叶子证书**
- 该证书必须与私钥一一对应

---

### 3.2 拆分 chain.pem（第 2 段及以后）

```bash
awk '
/BEGIN CERTIFICATE/{c++}
{
  if (c>=2) print
}
' test-baidu.com.pem > chain.pem
```

说明：
- chain.pem 用于存放 **中间证书 / CA 链**
- Java / 部分 TLS 实现强烈依赖完整链

---

### 3.3 验证拆分结果

```bash
grep -n "BEGIN CERTIFICATE" leaf.pem
grep -n "BEGIN CERTIFICATE" chain.pem
```

预期结果：
- leaf.pem 中 **只有 1 个** BEGIN CERTIFICATE
- chain.pem 中 **>=1 个** BEGIN CERTIFICATE（如果原 pem 含链）

---

## 4. 合成 PKCS12 (.p12) 文件

```bash
openssl pkcs12 -legacy -export \
  -out test-baidu.com.p12 \
  -inkey test-baidu.com.key \
  -in leaf.pem \
  -certfile chain.pem \
  -name "1"
```

关键参数说明：
- -export：生成 p12
- -inkey：私钥
- -in：叶子证书
- -certfile：证书链
- -name：keystore 中的 alias
- -legacy：
  - 用于兼容 OpenSSL 3.x 与旧版 JDK / 组件
  - 在生产环境中非常实用，避免奇怪的加密算法不兼容问题

执行过程中会提示输入 **storepass（keystore 密码）**

---

## 5. 使用 keytool 验证 p12 内容

```bash
keytool -list -v \
  -storetype PKCS12 \
  -keystore test-baidu.com.p12 \
  -storepass '<STOREPASS>' | head -n 30
```

重点关注：
- Keystore type: PKCS12
- 是否存在条目（Entry）
- 证书链长度是否合理

---

## 6. 版本化命名（便于回滚）

```bash
mv test-baidu.com.p12 \
   test-baidu.com-20260112.p12

ls -ltrsh
```

建议命名规范：

```
<service>-<env>-<domain>-YYYYMMDD.p12
```

---

## 7. 验证私钥与证书是否匹配（强校验）

这是非常关键的一步。

### 7.1 分别从 key 和 cert 中导出公钥

```bash
openssl pkey -in test-baidu.com.key -pubout > pub_from_key.pem
openssl x509 -in leaf.pem -pubkey -noout > pub_from_cert.pem
```

### 7.2 对比公钥内容

```bash
diff pub_from_key.pem pub_from_cert.pem \
  && echo "MATCH" \
  || echo "NOT MATCH"
```

结论判断：
- MATCH：证书与私钥 **是同一对**
- NOT MATCH：存在严重问题（拿错 key / pem 顺序错误 / 非 leaf 证书）

---

## 8. 校验证书有效期

### 8.1 查看 leaf.pem 有效期

```bash
openssl x509 -in leaf.pem -noout -dates
```

---

### 8.2 直接从原始 pem 中取第 1 段并查看有效期

```bash
awk '
c==0{print}
/BEGIN CERTIFICATE/{c++}
c==1{print}
' test-baidu.com.pem \
| openssl x509 -noout -dates
```

用途：
- 确认 pem 中 **第一段确实是叶子证书**
- 排除证书顺序问题

---

### 8.3 从 p12 中提取证书并查看有效期

```bash
openssl pkcs12 -legacy \
  -in test.baidu.com-20260112.p12 \
  -nokeys -clcerts \
| openssl x509 -noout -dates
```

说明：
- -nokeys：不输出私钥
- -clcerts：只输出叶子证书
- 用于确认 p12 中证书与原始 leaf.pem 一致

---

## 9. 上线后验证（服务层）

### 9.1 查看服务日志确认加载成功

```bash
tail -f ****.log
```

关注日志：
- keystore load success
- SSLContext init success
- 无 keystore password / alias / expired 相关报错

---

## 10. 本次操作结论

- 通过：
  - 拆分 pem
  - 合成 p12
  - keytool 校验
  - key / cert 匹配校验
  - 多角度有效期校验
- 上传至集群后，微服务成功加载并正常工作
- 服务连通性与日志均验证通过

---

## 11. 总结

该流程可作为：

- 证书更新 SOP
- 证书续期 SOP
- Nginx → Java / 微服务证书迁移标准流程

可直接复用。

准备了一个简单的shell 脚本也可复用

````shell
PEM="<CERT.pem>"
KEY="<CERT.key>"
OUT="<service-env-domain-YYYYMMDD>.p12"
ALIAS="1"

# 1) split leaf/chain
awk '\n/BEGIN CERTIFICATE/{c++}\n{ if(c==1) print }\n' "$PEM" > leaf.pem
awk '\n/BEGIN CERTIFICATE/{c++}\n{ if(c>=2) print }\n' "$PEM" > chain.pem

# 2) sanity check
grep -n "BEGIN CERTIFICATE" leaf.pem
grep -n "BEGIN CERTIFICATE" chain.pem

# 3) build p12 (storepass will prompt)
openssl pkcs12 -legacy -export -out "$OUT" -inkey "$KEY" -in leaf.pem -certfile chain.pem -name "$ALIAS"

# 4) verify p12 content
keytool -list -v -storetype PKCS12 -keystore "$OUT"

# 5) verify key matches cert
openssl pkey -in "$KEY" -pubout > pub_from_key.pem
openssl x509 -in leaf.pem -pubkey -noout > pub_from_cert.pem
diff pub_from_key.pem pub_from_cert.pem && echo "MATCH" || echo "NOT MATCH"

# 6) check expiry
openssl x509 -in leaf.pem -noout -dates
openssl pkcs12 -legacy -in "$OUT" -nokeys -clcerts | openssl x509 -noout -dates
````

