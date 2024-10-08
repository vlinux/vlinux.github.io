---
title: Nacos开启鉴权
date: 2024-10-08 10:51:37
updated: 2024-10-08 10:51:37
tags: Nacos
categories: Linux技术
end: false
---

<!-- more -->

# 安装Nacos

## 单节点安装

参考：

https://nacos.io/docs/latest/manual/admin/deployment/deployment-standalone/

https://www.cnblogs.com/liuqq1015/p/17822802.html

1. 安装JDK1.8或以上
2. 安装数据库，版本要求：5.6.5+ ，或使用内置数据库（使用内置数据库不用修改配置文件有关数据库字段application.properties）
3. 初始化mysql数据库，数据库初始化文件：[mysql-schema.sql](https://github.com/alibaba/nacos/blob/master/distribution/conf/mysql-schema.sql)
4. 配置application.properties

```
db.num=1
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user.0=*******
db.password.0=********
```

5. 启动单节点模式sh startup.sh -m standalone，查看日志tail -f /opt/nacos/logs/start.out

## 集群模式安装

此处暂时省略，可以查看官方文档





## 开启鉴权

### 1、nacos开启鉴权

- 2.2.2版本之前的Nacos默认控制台，无论服务端是否开启鉴权，都会存在一个登录页，这就导致很多用户被误导认为Nacos默认是存在鉴权的。
- 在社区安全工程师的建议下，Nacos自2.2.2版本开始，在未开启鉴权时，默认控制台将不需要登录即可访问，同时在控制台中给予提示，提醒用户当前集群未开启鉴权，在用户开启鉴权后，控制台才需要进行登录访问。
- 开启鉴权功能之后，访问Nacos服务端API和控制台都需要输入用户名和密码（默认的用户名和密码都是nacos，可以登录控制台进行修改密码），可以提高Nacos的安全性，如果客户端（其它服务或者控制台用户）无法提供正确的用户名和密码，将无法访问Nacos Server，这样可以防止服务端被非授权访问，所以对于生产环境中的Nacos Server推荐设置为true。
- 如果Nacos禁用鉴权功能，此时访问Nacos服务端API和控制台不需要任何登录即可匿名访问。

#### 1.1、修改nacos配置文件（application.properties）

如果 `nacos.core.auth.enabled` 设置为true，必须添加以下`nacos.core.auth.server.identity.key`、`nacos.core.auth.server.identity.value`、`nacos.core.auth.plugin.nacos.token.secret.key`配置，否则无法启动节点。
**推荐开启如下配置**

```ini
# 开启鉴权功能
nacos.core.auth.enabled=true
# 关闭使用user-agent判断服务端请求并放行鉴权的功能
nacos.core.auth.enable.userAgentAuthWhite=false
# 配置自定义身份识别的key和value，这两个属性是auth的白名单，用于标识来自其它服务器的请求，具体实现见 com.alibaba.nacos.core.auth.AuthFilter。
nacos.core.auth.server.identity.key=authKey
nacos.core.auth.server.identity.value=shigzh
# 自定义用于生成JWT令牌的密钥，注意：原始密钥长度不得低于32字符，且一定要进行Base64编码，否则无法启动节点。
nacos.core.auth.plugin.nacos.token.secret.key=bmFjb3NfMjAyNDAxMTBfc2hpZ3poX25hY29zX3Rva2Vu
# 权限缓存开关，开启后权限缓存的更新默认有15秒的延迟，默认 : false
nacos.core.auth.caching.enabled=true
```

#### 1.2、自定义生成JWT令牌的密钥

注意：原始密钥长度不得低于32字符，且一定要进行Base64编码，否则无法启动节点。

```typescript
/**
 * <p>
 * nacos中JWT令牌密钥生成器<br>
 * 生成 nacos.core.auth.plugin.nacos.token.secret.key 的值
 * </p>
 * @author shigzh
 * @since 2024/1/10 13:41
 */
public class NacosSecretUtil {
    public static void main(String[] args) {
        // 自定义生成JWT令牌的密钥
        String nacosSecret = "nacos_20240110_shigzh_nacos_token";
        // 输出密钥长度，要求不得低于32字符，否则无法启动节点。
        System.out.println("密钥长度》》》" + nacosSecret.length());
        // 密钥进行Base64编码
        byte[] data = nacosSecret.getBytes(StandardCharsets.UTF_8);
        System.out.println("密钥Base64编码》》》" + Base64Utils.encodeToString(data));
    }
}
```

### 2、nacos鉴权测试

#### 2.1、不开启鉴权测试

如果nacos不开启鉴权，即 `nacos.core.auth.enabled = false`，在这种情况下通过一些请求就可以绕过nacos的权限认证，然后访问nacos的一些数据。
1、在未登录认证的情况下，通过postman以get方式访问`/nacos/v1/cs/configs`请求来获取nacos的配置信息，可以正常获取到数据。

```bash
http://sgz.wz:8848/nacos/v1/cs/configs?dataId=&group=&appName=&config_tags=&pageNo=1&pageSize=10&tenant=&search=accurate&accessToken=&username=
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111151531287-527499284.png)

2、在未登录认证的情况下，通过postman以get方式访问`/nacos/v1/auth/users`请求来获取nacos的用户信息，可以正常获取到数据。

```bash
http://sgz.wz:8848/nacos/v1/auth/users?pageNo=1&pageSize=9&search=blur
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111151728348-2065281444.png)

3、在未登录认证的情况下，通过postman以post方式访问`/nacos/v1/auth/users`请求，传入指定参数，可以直接新增用户。

```bash
http://sgz.wz:8848/nacos/v1/auth/users?username=test2&password=test2
```

![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111151906922-1323107565.png)
数据库中也存在新增的用户信息
![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111152308299-1210876117.png)

#### 2.2、开启鉴权测试

如果nacos开启鉴权，即 `nacos.core.auth.enabled = true`，在这种情况下就可以避免上面的nacos权限认证问题，如果不登录认证就不能访问nacos的一些数据，此时访问就会报403 Forbidden错误。
![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111152900291-825669718.png)
此时在请求header里添加一对属性参数 `authKey=shigzh`，即我们配置的自定义身份识别的 `nacos.core.auth.server.identity.key=authKey` 和 `nacos.core.auth.server.identity.value=shigzh`（这两个属性是auth的白名单，用于标识来自其他服务器的请求），这样也可以正常操作nacos的一些接口，相当于鉴权了，即可跳过权限认证。
![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111161156423-206201221.png)

header属性配置`authKey=shigzh`能够跳过权限认证的原理是 com.alibaba.nacos.core.auth.AuthFilter 过滤器，具体逻辑如下图
![img](https://cos.vlinux.cn/www-vlinux-cn-blog-img/1680363-20240111163713753-808447754.png)
