---
layout: post
title: Vue项目如何优雅地区分开发/测试/生产环境
categories: VUE
tags: [VUE]
date: 2025-08-25 16:57:12
---

### Vue 项目如何优雅地区分开发/测试/生产环境

本文记录在 Vue CLI 项目中区分环境（本地开发、测试/预发、生产）的常见做法与实用示例，仅依赖 npm 与 node。

## 一、核心思路：用 .env.* + 环境变量

- 新建不同模式的环境文件：

- .env.development：本地开发

- .env.staging：测试/预发（可选）

- .env.production：生产

- 变量必须以 VUE_APP_ 开头，代码中通过 process.env.VUE_APP_xxx 访问。

- 通过命令的 --mode 指定模式（不指定时：serve 默认 development，build 默认 production）。

示例：

```bash
# .env.development*

VUE_APP_API_BASE=/api
VUE_APP_ENABLE_MOCK=true
VUE_APP_LOG_LEVEL=debug
```

```bash
# .env.staging*

VUE_APP_API_BASE=https://staging-api.example.com
VUE_APP_ENABLE_MOCK=false
VUE_APP_LOG_LEVEL=info
```

```bash
# .env.production*

VUE_APP_API_BASE=https://api.example.com
VUE_APP_ENABLE_MOCK=false
VUE_APP_LOG_LEVEL=warn
```



## 二、在代码中读取环境变量

以 axios 为例：

```js
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE
*// 其他差异也用环境变量控制，如日志、mock、监控上报等*
const enableMock = process.env.VUE_APP_ENABLE_MOCK === 'true'
```

建议只保留一个入口 main.js，不要维护 main-dev.js / main-prod.js 两套入口，差异统一走环境变量分支。

## 三、npm 脚本推荐写法（仅用 node/npm）

```json
{
 "scripts": {
  "serve": "NODE_OPTIONS=--openssl-legacy-provider vue-cli-service serve --mode development",
  "build:dev": "NODE_OPTIONS=--openssl-legacy-provider node ./node_modules/@vue/cli-service/bin/vue-cli-service.js build --mode development",
  "build:staging": "NODE_OPTIONS=--openssl-legacy-provider node ./node_modules/@vue/cli-service/bin/vue-cli-service.js build --mode staging",
  "build:prod": "NODE_OPTIONS=--openssl-legacy-provider node ./node_modules/@vue/cli-service/bin/vue-cli-service.js build --mode production"
 }
}
```

- 本地启动：npm run serve

- 构建测试包：npm run build:staging

- 构建生产包：npm run build:prod

## 四、在 vue.config.js 里做差异化配置

vue.config.js 中既可用 process.env.NODE_ENV，也可用自定义的 VUE_APP_*：

```js
*// vue.config.js*
module.exports = {
 publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
 devServer: {
  *// 本地可结合代理转发到后端*
  proxy: {
   '/api': {
     target: process.env.VUE_APP_API_BASE || 'http://localhost:8080',
     changeOrigin: true
   }
  }
 },
 productionSourceMap: process.env.VUE_APP_LOG_LEVEL !== 'warn'
}
```

说明：

- 生产环境可切换 publicPath，适配不同部署路径。

- 代理与是否生成 source map 等也可根据变量控制。

## 五、针对“测试/预发/生产”多套包的实践

- 每个环境一个 .env.[mode] 文件，命令用 --mode [mode] 输出一套对应包。

- 不同环境的 API 域名、开关、上报配置等都用 VUE_APP_* 变量管理。

- CI/CD 中按分支或 Tag 决定执行 build:staging 或 build:prod。

## 六、迁移建议（如果已有 main-dev.js / main-prod.js）

- 合并为单一入口 src/main.js。

- 将两者差异抽到环境变量（如 baseURL、是否启用 mock、日志等级等）。

- 在 axios 拦截器与全局配置处统一读取 process.env.VUE_APP_*。

## 七、常见问题

- 变量获取不到：必须以 VUE_APP_ 开头，且在构建时已写入 .env.*。

- 模式不生效：检查命令是否带了 --mode，或使用了默认模式。

- 本地跨域：使用 devServer.proxy，或改后端 CORS；不要硬改生产域名到本地。

## 八、总结

- 用 .env.* 定义不同环境的配置，代码通过 process.env.VUE_APP_* 一次性适配。

- 构建时用 --mode 选择环境，脚本仅用 node 和 npm 即可。

- 统一入口文件，差异尽量都走环境变量，减少维护成本与环境漂移。
