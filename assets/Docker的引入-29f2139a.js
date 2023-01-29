import{_ as a}from"./ValaxyMain.vue_vue_type_style_index_0_lang-f9369a8c.js";import{_ as h,c as _,w as o,o as u,b as e,U as n,q as r,r as i,W as k,p}from"./app-c05f80d3.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-d10a4101.js";import"./YunCard.vue_vue_type_style_index_0_lang-b99348e1.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-8e036763.js";const Wo=JSON.parse('{"title":"Docker的引入","description":"","frontmatter":{"title":"Docker的引入","categories":"Linux技术","tags":["Docker"],"date":"2019-07-23T11:09:00.000Z"},"headers":[{"level":2,"title":"1.1 docker是什么","slug":"_1-1-docker是什么","link":"#_1-1-docker是什么","children":[]},{"level":2,"title":"1.2 容器与虚拟机对比","slug":"_1-2-容器与虚拟机对比","link":"#_1-2-容器与虚拟机对比","children":[]},{"level":2,"title":"1.3 docker的三个重要概念","slug":"_1-3-docker的三个重要概念","link":"#_1-3-docker的三个重要概念","children":[]},{"level":2,"title":"1.4 docker的组成部分","slug":"_1-4-docker的组成部分","link":"#_1-4-docker的组成部分","children":[]},{"level":2,"title":"2.1 国内源安装docker-ce","slug":"_2-1-国内源安装docker-ce","link":"#_2-1-国内源安装docker-ce","children":[]},{"level":2,"title":"2.2 （国内远镜像加速）等配置","slug":"_2-2-（国内远镜像加速）等配置","link":"#_2-2-（国内远镜像加速）等配置","children":[]},{"level":2,"title":"2.3 快速安装","slug":"_2-3-快速安装","link":"#_2-3-快速安装","children":[]},{"level":2,"title":"2.4 运行第一个容器","slug":"_2-4-运行第一个容器","link":"#_2-4-运行第一个容器","children":[]},{"level":2,"title":"3.1 镜像相关命令","slug":"_3-1-镜像相关命令","link":"#_3-1-镜像相关命令","children":[]},{"level":2,"title":"3.1.1 搜索镜像","slug":"_3-1-1-搜索镜像","link":"#_3-1-1-搜索镜像","children":[]},{"level":2,"title":"3.1.2 获取镜像","slug":"_3-1-2-获取镜像","link":"#_3-1-2-获取镜像","children":[]},{"level":2,"title":"3.1.3 查看镜像","slug":"_3-1-3-查看镜像","link":"#_3-1-3-查看镜像","children":[]},{"level":2,"title":"3.1.4 删除镜像","slug":"_3-1-4-删除镜像","link":"#_3-1-4-删除镜像","children":[]},{"level":2,"title":"3.1.5 导出镜像","slug":"_3-1-5-导出镜像","link":"#_3-1-5-导出镜像","children":[]},{"level":2,"title":"3.1.6 导入镜像","slug":"_3-1-6-导入镜像","link":"#_3-1-6-导入镜像","children":[]},{"level":2,"title":"3.2 容器相关命令","slug":"_3-2-容器相关命令","link":"#_3-2-容器相关命令","children":[]},{"level":2,"title":"3.2.1 启动容器","slug":"_3-2-1-启动容器","link":"#_3-2-1-启动容器","children":[]},{"level":2,"title":"3.2.3 查看容器","slug":"_3-2-3-查看容器","link":"#_3-2-3-查看容器","children":[]},{"level":2,"title":"3.2.4 进入容器","slug":"_3-2-4-进入容器","link":"#_3-2-4-进入容器","children":[]},{"level":2,"title":"3.2.5 删除容器","slug":"_3-2-5-删除容器","link":"#_3-2-5-删除容器","children":[]},{"level":2,"title":"4.1 随机映射端口","slug":"_4-1-随机映射端口","link":"#_4-1-随机映射端口","children":[]},{"level":2,"title":"4.2 指定映射端口","slug":"_4-2-指定映射端口","link":"#_4-2-指定映射端口","children":[]},{"level":2,"title":"5.1 持久化数据卷","slug":"_5-1-持久化数据卷","link":"#_5-1-持久化数据卷","children":[]},{"level":2,"title":"5.1.1 创建游戏代码目录","slug":"_5-1-1-创建游戏代码目录","link":"#_5-1-1-创建游戏代码目录","children":[]},{"level":2,"title":"5.1.2 创建容器并映射数据卷","slug":"_5-1-2-创建容器并映射数据卷","link":"#_5-1-2-创建容器并映射数据卷","children":[]},{"level":2,"title":"5.1.3 访问游戏页面","slug":"_5-1-3-访问游戏页面","link":"#_5-1-3-访问游戏页面","children":[]},{"level":2,"title":"5.2 持久化数据卷容器","slug":"_5-2-持久化数据卷容器","link":"#_5-2-持久化数据卷容器","children":[]},{"level":2,"title":"5.2.1 创建一个容器卷","slug":"_5-2-1-创建一个容器卷","link":"#_5-2-1-创建一个容器卷","children":[]},{"level":2,"title":"5.2.2 查看卷的目录","slug":"_5-2-2-查看卷的目录","link":"#_5-2-2-查看卷的目录","children":[]},{"level":2,"title":"5.2.3 复制代码目录到容器卷目录","slug":"_5-2-3-复制代码目录到容器卷目录","link":"#_5-2-3-复制代码目录到容器卷目录","children":[]},{"level":2,"title":"5.2.4 使用容器卷创建新容器","slug":"_5-2-4-使用容器卷创建新容器","link":"#_5-2-4-使用容器卷创建新容器","children":[]},{"level":2,"title":"5.3 实验-访问不同端口展示不同页面","slug":"_5-3-实验-访问不同端口展示不同页面","link":"#_5-3-实验-访问不同端口展示不同页面","children":[]},{"level":2,"title":"5.3.1 准备nginx配置文件","slug":"_5-3-1-准备nginx配置文件","link":"#_5-3-1-准备nginx配置文件","children":[]},{"level":2,"title":"5.3.2 上传代码目录","slug":"_5-3-2-上传代码目录","link":"#_5-3-2-上传代码目录","children":[]},{"level":2,"title":"5.3.3 创建容器并挂载","slug":"_5-3-3-创建容器并挂载","link":"#_5-3-3-创建容器并挂载","children":[]},{"level":2,"title":"6.1 手动制作游戏镜像","slug":"_6-1-手动制作游戏镜像","link":"#_6-1-手动制作游戏镜像","children":[]},{"level":2,"title":"6.1.1 启动一个容器并安装nginx","slug":"_6-1-1-启动一个容器并安装nginx","link":"#_6-1-1-启动一个容器并安装nginx","children":[]},{"level":2,"title":"6.1.2 上传代码目录并配置nginx配置文件","slug":"_6-1-2-上传代码目录并配置nginx配置文件","link":"#_6-1-2-上传代码目录并配置nginx配置文件","children":[]},{"level":2,"title":"6.1.3 将容器提交为新的镜像","slug":"_6-1-3-将容器提交为新的镜像","link":"#_6-1-3-将容器提交为新的镜像","children":[]},{"level":2,"title":"6.1.4 测试镜像功能是否可用","slug":"_6-1-4-测试镜像功能是否可用","link":"#_6-1-4-测试镜像功能是否可用","children":[]},{"level":2,"title":"6.1.5 将新镜像导出","slug":"_6-1-5-将新镜像导出","link":"#_6-1-5-将新镜像导出","children":[]},{"level":2,"title":"6.2 手动制作云盘镜像","slug":"_6-2-手动制作云盘镜像","link":"#_6-2-手动制作云盘镜像","children":[]},{"level":2,"title":"6.2.1 创建容器","slug":"_6-2-1-创建容器","link":"#_6-2-1-创建容器","children":[]},{"level":2,"title":"6.2.2 进入容器安装php并求改运行用户","slug":"_6-2-2-进入容器安装php并求改运行用户","link":"#_6-2-2-进入容器安装php并求改运行用户","children":[]},{"level":2,"title":"6.2.3 配置nginx","slug":"_6-2-3-配置nginx","link":"#_6-2-3-配置nginx","children":[]},{"level":2,"title":"6.2.4 下载代码目录","slug":"_6-2-4-下载代码目录","link":"#_6-2-4-下载代码目录","children":[]},{"level":2,"title":"6.2.5 测试","slug":"_6-2-5-测试","link":"#_6-2-5-测试","children":[]},{"level":2,"title":"6.2.6 提交新的镜像","slug":"_6-2-6-提交新的镜像","link":"#_6-2-6-提交新的镜像","children":[]},{"level":2,"title":"6.2.7 编写启动脚本并提交新镜像","slug":"_6-2-7-编写启动脚本并提交新镜像","link":"#_6-2-7-编写启动脚本并提交新镜像","children":[]},{"level":2,"title":"6.2.8 启动测试","slug":"_6-2-8-启动测试","link":"#_6-2-8-启动测试","children":[]},{"level":2,"title":"6.2.9 添加GD库","slug":"_6-2-9-添加gd库","link":"#_6-2-9-添加gd库","children":[]},{"level":2,"title":"6.2.10 访问测试没问题后提交新镜像","slug":"_6-2-10-访问测试没问题后提交新镜像","link":"#_6-2-10-访问测试没问题后提交新镜像","children":[]},{"level":2,"title":"7.1 Dockerfile操作命令说明","slug":"_7-1-dockerfile操作命令说明","link":"#_7-1-dockerfile操作命令说明","children":[]},{"level":2,"title":"7.2 使用Dockerfile创建云盘","slug":"_7-2-使用dockerfile创建云盘","link":"#_7-2-使用dockerfile创建云盘","children":[]},{"level":2,"title":"7.2.1 准备需要的文件","slug":"_7-2-1-准备需要的文件","link":"#_7-2-1-准备需要的文件","children":[]},{"level":2,"title":"7.2.2 编写dockerfile","slug":"_7-2-2-编写dockerfile","link":"#_7-2-2-编写dockerfile","children":[]},{"level":2,"title":"7.2.3 构建新镜像","slug":"_7-2-3-构建新镜像","link":"#_7-2-3-构建新镜像","children":[]},{"level":2,"title":"7.2.4 基于新镜像运行容器","slug":"_7-2-4-基于新镜像运行容器","link":"#_7-2-4-基于新镜像运行容器","children":[]},{"level":2,"title":"8.1 普通的docker registry","slug":"_8-1-普通的docker-registry","link":"#_8-1-普通的docker-registry","children":[]},{"level":2,"title":"8.2 带认证的docker registry","slug":"_8-2-带认证的docker-registry","link":"#_8-2-带认证的docker-registry","children":[]},{"level":2,"title":"8.3 企业级的docker-harbor","slug":"_8-3-企业级的docker-harbor","link":"#_8-3-企业级的docker-harbor","children":[]},{"level":2,"title":"8.3.1 部署思路","slug":"_8-3-1-部署思路","link":"#_8-3-1-部署思路","children":[]},{"level":2,"title":"8.3.2 安装docker-compose","slug":"_8-3-2-安装docker-compose","link":"#_8-3-2-安装docker-compose","children":[]},{"level":2,"title":"8.3.3 上传解压docker-harbor","slug":"_8-3-3-上传解压docker-harbor","link":"#_8-3-3-上传解压docker-harbor","children":[]},{"level":2,"title":"8.3.4 修改配置文件","slug":"_8-3-4-修改配置文件","link":"#_8-3-4-修改配置文件","children":[]},{"level":2,"title":"8.3.5 安装","slug":"_8-3-5-安装","link":"#_8-3-5-安装","children":[]},{"level":2,"title":"8.3.6 修改docker信任仓库","slug":"_8-3-6-修改docker信任仓库","link":"#_8-3-6-修改docker信任仓库","children":[]},{"level":2,"title":"8.3.7 重启docker并上传镜像","slug":"_8-3-7-重启docker并上传镜像","link":"#_8-3-7-重启docker并上传镜像","children":[]},{"level":2,"title":"8.3.8 给镜像打标签并提交到dockerharbor","slug":"_8-3-8-给镜像打标签并提交到dockerharbor","link":"#_8-3-8-给镜像打标签并提交到dockerharbor","children":[]},{"level":2,"title":"8.3.9 在docker-harbor上查看","slug":"_8-3-9-在docker-harbor上查看","link":"#_8-3-9-在docker-harbor上查看","children":[]},{"level":2,"title":"8.3.10 其他主机上下载镜像","slug":"_8-3-10-其他主机上下载镜像","link":"#_8-3-10-其他主机上下载镜像","children":[]}],"relativePath":"pages/posts/Docker的引入.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker的引入.md","lastUpdated":1671090556000}'),d=JSON.parse('{"title":"Docker的引入","description":"","frontmatter":{"title":"Docker的引入","categories":"Linux技术","tags":["Docker"],"date":"2019-07-23T11:09:00.000Z"},"headers":[{"level":2,"title":"1.1 docker是什么","slug":"_1-1-docker是什么","link":"#_1-1-docker是什么","children":[]},{"level":2,"title":"1.2 容器与虚拟机对比","slug":"_1-2-容器与虚拟机对比","link":"#_1-2-容器与虚拟机对比","children":[]},{"level":2,"title":"1.3 docker的三个重要概念","slug":"_1-3-docker的三个重要概念","link":"#_1-3-docker的三个重要概念","children":[]},{"level":2,"title":"1.4 docker的组成部分","slug":"_1-4-docker的组成部分","link":"#_1-4-docker的组成部分","children":[]},{"level":2,"title":"2.1 国内源安装docker-ce","slug":"_2-1-国内源安装docker-ce","link":"#_2-1-国内源安装docker-ce","children":[]},{"level":2,"title":"2.2 （国内远镜像加速）等配置","slug":"_2-2-（国内远镜像加速）等配置","link":"#_2-2-（国内远镜像加速）等配置","children":[]},{"level":2,"title":"2.3 快速安装","slug":"_2-3-快速安装","link":"#_2-3-快速安装","children":[]},{"level":2,"title":"2.4 运行第一个容器","slug":"_2-4-运行第一个容器","link":"#_2-4-运行第一个容器","children":[]},{"level":2,"title":"3.1 镜像相关命令","slug":"_3-1-镜像相关命令","link":"#_3-1-镜像相关命令","children":[]},{"level":2,"title":"3.1.1 搜索镜像","slug":"_3-1-1-搜索镜像","link":"#_3-1-1-搜索镜像","children":[]},{"level":2,"title":"3.1.2 获取镜像","slug":"_3-1-2-获取镜像","link":"#_3-1-2-获取镜像","children":[]},{"level":2,"title":"3.1.3 查看镜像","slug":"_3-1-3-查看镜像","link":"#_3-1-3-查看镜像","children":[]},{"level":2,"title":"3.1.4 删除镜像","slug":"_3-1-4-删除镜像","link":"#_3-1-4-删除镜像","children":[]},{"level":2,"title":"3.1.5 导出镜像","slug":"_3-1-5-导出镜像","link":"#_3-1-5-导出镜像","children":[]},{"level":2,"title":"3.1.6 导入镜像","slug":"_3-1-6-导入镜像","link":"#_3-1-6-导入镜像","children":[]},{"level":2,"title":"3.2 容器相关命令","slug":"_3-2-容器相关命令","link":"#_3-2-容器相关命令","children":[]},{"level":2,"title":"3.2.1 启动容器","slug":"_3-2-1-启动容器","link":"#_3-2-1-启动容器","children":[]},{"level":2,"title":"3.2.3 查看容器","slug":"_3-2-3-查看容器","link":"#_3-2-3-查看容器","children":[]},{"level":2,"title":"3.2.4 进入容器","slug":"_3-2-4-进入容器","link":"#_3-2-4-进入容器","children":[]},{"level":2,"title":"3.2.5 删除容器","slug":"_3-2-5-删除容器","link":"#_3-2-5-删除容器","children":[]},{"level":2,"title":"4.1 随机映射端口","slug":"_4-1-随机映射端口","link":"#_4-1-随机映射端口","children":[]},{"level":2,"title":"4.2 指定映射端口","slug":"_4-2-指定映射端口","link":"#_4-2-指定映射端口","children":[]},{"level":2,"title":"5.1 持久化数据卷","slug":"_5-1-持久化数据卷","link":"#_5-1-持久化数据卷","children":[]},{"level":2,"title":"5.1.1 创建游戏代码目录","slug":"_5-1-1-创建游戏代码目录","link":"#_5-1-1-创建游戏代码目录","children":[]},{"level":2,"title":"5.1.2 创建容器并映射数据卷","slug":"_5-1-2-创建容器并映射数据卷","link":"#_5-1-2-创建容器并映射数据卷","children":[]},{"level":2,"title":"5.1.3 访问游戏页面","slug":"_5-1-3-访问游戏页面","link":"#_5-1-3-访问游戏页面","children":[]},{"level":2,"title":"5.2 持久化数据卷容器","slug":"_5-2-持久化数据卷容器","link":"#_5-2-持久化数据卷容器","children":[]},{"level":2,"title":"5.2.1 创建一个容器卷","slug":"_5-2-1-创建一个容器卷","link":"#_5-2-1-创建一个容器卷","children":[]},{"level":2,"title":"5.2.2 查看卷的目录","slug":"_5-2-2-查看卷的目录","link":"#_5-2-2-查看卷的目录","children":[]},{"level":2,"title":"5.2.3 复制代码目录到容器卷目录","slug":"_5-2-3-复制代码目录到容器卷目录","link":"#_5-2-3-复制代码目录到容器卷目录","children":[]},{"level":2,"title":"5.2.4 使用容器卷创建新容器","slug":"_5-2-4-使用容器卷创建新容器","link":"#_5-2-4-使用容器卷创建新容器","children":[]},{"level":2,"title":"5.3 实验-访问不同端口展示不同页面","slug":"_5-3-实验-访问不同端口展示不同页面","link":"#_5-3-实验-访问不同端口展示不同页面","children":[]},{"level":2,"title":"5.3.1 准备nginx配置文件","slug":"_5-3-1-准备nginx配置文件","link":"#_5-3-1-准备nginx配置文件","children":[]},{"level":2,"title":"5.3.2 上传代码目录","slug":"_5-3-2-上传代码目录","link":"#_5-3-2-上传代码目录","children":[]},{"level":2,"title":"5.3.3 创建容器并挂载","slug":"_5-3-3-创建容器并挂载","link":"#_5-3-3-创建容器并挂载","children":[]},{"level":2,"title":"6.1 手动制作游戏镜像","slug":"_6-1-手动制作游戏镜像","link":"#_6-1-手动制作游戏镜像","children":[]},{"level":2,"title":"6.1.1 启动一个容器并安装nginx","slug":"_6-1-1-启动一个容器并安装nginx","link":"#_6-1-1-启动一个容器并安装nginx","children":[]},{"level":2,"title":"6.1.2 上传代码目录并配置nginx配置文件","slug":"_6-1-2-上传代码目录并配置nginx配置文件","link":"#_6-1-2-上传代码目录并配置nginx配置文件","children":[]},{"level":2,"title":"6.1.3 将容器提交为新的镜像","slug":"_6-1-3-将容器提交为新的镜像","link":"#_6-1-3-将容器提交为新的镜像","children":[]},{"level":2,"title":"6.1.4 测试镜像功能是否可用","slug":"_6-1-4-测试镜像功能是否可用","link":"#_6-1-4-测试镜像功能是否可用","children":[]},{"level":2,"title":"6.1.5 将新镜像导出","slug":"_6-1-5-将新镜像导出","link":"#_6-1-5-将新镜像导出","children":[]},{"level":2,"title":"6.2 手动制作云盘镜像","slug":"_6-2-手动制作云盘镜像","link":"#_6-2-手动制作云盘镜像","children":[]},{"level":2,"title":"6.2.1 创建容器","slug":"_6-2-1-创建容器","link":"#_6-2-1-创建容器","children":[]},{"level":2,"title":"6.2.2 进入容器安装php并求改运行用户","slug":"_6-2-2-进入容器安装php并求改运行用户","link":"#_6-2-2-进入容器安装php并求改运行用户","children":[]},{"level":2,"title":"6.2.3 配置nginx","slug":"_6-2-3-配置nginx","link":"#_6-2-3-配置nginx","children":[]},{"level":2,"title":"6.2.4 下载代码目录","slug":"_6-2-4-下载代码目录","link":"#_6-2-4-下载代码目录","children":[]},{"level":2,"title":"6.2.5 测试","slug":"_6-2-5-测试","link":"#_6-2-5-测试","children":[]},{"level":2,"title":"6.2.6 提交新的镜像","slug":"_6-2-6-提交新的镜像","link":"#_6-2-6-提交新的镜像","children":[]},{"level":2,"title":"6.2.7 编写启动脚本并提交新镜像","slug":"_6-2-7-编写启动脚本并提交新镜像","link":"#_6-2-7-编写启动脚本并提交新镜像","children":[]},{"level":2,"title":"6.2.8 启动测试","slug":"_6-2-8-启动测试","link":"#_6-2-8-启动测试","children":[]},{"level":2,"title":"6.2.9 添加GD库","slug":"_6-2-9-添加gd库","link":"#_6-2-9-添加gd库","children":[]},{"level":2,"title":"6.2.10 访问测试没问题后提交新镜像","slug":"_6-2-10-访问测试没问题后提交新镜像","link":"#_6-2-10-访问测试没问题后提交新镜像","children":[]},{"level":2,"title":"7.1 Dockerfile操作命令说明","slug":"_7-1-dockerfile操作命令说明","link":"#_7-1-dockerfile操作命令说明","children":[]},{"level":2,"title":"7.2 使用Dockerfile创建云盘","slug":"_7-2-使用dockerfile创建云盘","link":"#_7-2-使用dockerfile创建云盘","children":[]},{"level":2,"title":"7.2.1 准备需要的文件","slug":"_7-2-1-准备需要的文件","link":"#_7-2-1-准备需要的文件","children":[]},{"level":2,"title":"7.2.2 编写dockerfile","slug":"_7-2-2-编写dockerfile","link":"#_7-2-2-编写dockerfile","children":[]},{"level":2,"title":"7.2.3 构建新镜像","slug":"_7-2-3-构建新镜像","link":"#_7-2-3-构建新镜像","children":[]},{"level":2,"title":"7.2.4 基于新镜像运行容器","slug":"_7-2-4-基于新镜像运行容器","link":"#_7-2-4-基于新镜像运行容器","children":[]},{"level":2,"title":"8.1 普通的docker registry","slug":"_8-1-普通的docker-registry","link":"#_8-1-普通的docker-registry","children":[]},{"level":2,"title":"8.2 带认证的docker registry","slug":"_8-2-带认证的docker-registry","link":"#_8-2-带认证的docker-registry","children":[]},{"level":2,"title":"8.3 企业级的docker-harbor","slug":"_8-3-企业级的docker-harbor","link":"#_8-3-企业级的docker-harbor","children":[]},{"level":2,"title":"8.3.1 部署思路","slug":"_8-3-1-部署思路","link":"#_8-3-1-部署思路","children":[]},{"level":2,"title":"8.3.2 安装docker-compose","slug":"_8-3-2-安装docker-compose","link":"#_8-3-2-安装docker-compose","children":[]},{"level":2,"title":"8.3.3 上传解压docker-harbor","slug":"_8-3-3-上传解压docker-harbor","link":"#_8-3-3-上传解压docker-harbor","children":[]},{"level":2,"title":"8.3.4 修改配置文件","slug":"_8-3-4-修改配置文件","link":"#_8-3-4-修改配置文件","children":[]},{"level":2,"title":"8.3.5 安装","slug":"_8-3-5-安装","link":"#_8-3-5-安装","children":[]},{"level":2,"title":"8.3.6 修改docker信任仓库","slug":"_8-3-6-修改docker信任仓库","link":"#_8-3-6-修改docker信任仓库","children":[]},{"level":2,"title":"8.3.7 重启docker并上传镜像","slug":"_8-3-7-重启docker并上传镜像","link":"#_8-3-7-重启docker并上传镜像","children":[]},{"level":2,"title":"8.3.8 给镜像打标签并提交到dockerharbor","slug":"_8-3-8-给镜像打标签并提交到dockerharbor","link":"#_8-3-8-给镜像打标签并提交到dockerharbor","children":[]},{"level":2,"title":"8.3.9 在docker-harbor上查看","slug":"_8-3-9-在docker-harbor上查看","link":"#_8-3-9-在docker-harbor上查看","children":[]},{"level":2,"title":"8.3.10 其他主机上下载镜像","slug":"_8-3-10-其他主机上下载镜像","link":"#_8-3-10-其他主机上下载镜像","children":[]}],"relativePath":"pages/posts/Docker的引入.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker的引入.md","lastUpdated":1671090556000}'),g={name:"pages/posts/Docker的引入.md",data(){return{data:d,frontmatter:d.frontmatter}},setup(){p("pageData",d)}},f={id:"第1章-docker容器介绍",tabindex:"-1"},b={id:"_1-1-docker是什么",tabindex:"-1"},m=e("p",null,"Docker 是 Docker.Inc 公司开源的一个基于 LXC技术之上构建的Container容器引擎， 源代码托管在 GitHub 上, 基于Go语言并遵从Apache2.0协议开源。 Docker是通过内核虚拟化技术（namespaces及cgroups等）来提供容器的资源隔离与安全保障等。由于Docker通过操作系统层的虚拟化实现隔离，所以Docker容器在运行时，不需要类似虚拟机（VM）额外的操作系统开销，提高资源利用率。",-1),x={id:"_1-2-容器与虚拟机对比",tabindex:"-1"},v=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/1147648620.png",alt:"Docker对比图"})],-1),D=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/2783417689.png",alt:"启动速度对比"})],-1),y={id:"_1-3-docker的三个重要概念",tabindex:"-1"},S=e("p",null,"Image(镜像): 那么镜像到底是什么呢？Docker 镜像可以看作是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。 Container(容器) 容器(Container)的定义和镜像(Image)几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的。 Repository(仓库) 镜像仓库是 Docker 用来集中存放镜像文件的地方，类似于我们之前常用的代码仓库。 通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本 。 我们可以通过<仓库名>:<标签>的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 Latest 作为默认标签。",-1),w=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/497164864.png",alt:"构成图"})],-1),O={id:"_1-4-docker的组成部分",tabindex:"-1"},E=e("p",null,"docker是传统的CS架构分为docker client和docker server Docker 客户端是 Docker 用户与 Docker 交互的主要方式。当您使用 Docker 命令行运行命令时，Docker 客户端将这些命令发送给服务器端，服务端将执行这些命令。 Docker 命令使用 Docker API 。Docker 客户端可以与多个服务端进行通信。",-1),C=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/kococ/IMAGE/usr/uploads/2020/07/3695901469.png",alt:"请输入图片描述"})],-1),I={id:"第2章-docker安装部署",tabindex:"-1"},N={id:"_2-1-国内源安装docker-ce",tabindex:"-1"},R=e("pre",null,[e("code",null,`# step 1: 安装必要的一些系统工具
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# Step 2: 添加软件源信息
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# Step 3: 更新并安装Docker-CE
sudo yum makecache fast
sudo yum -y install docker-ce
# Step 4: 开启Docker服务
sudo service docker start

# 注意：
# 官方软件源默认启用了最新的软件，您可以通过编辑软件源的方式获取各个版本的软件包。例如官方并没有将测试版本的软件源置为可用，您可以通过以下方式开启。同理可以开启各种测试版本等。
# vim /etc/yum.repos.d/docker-ee.repo
#   将[docker-ce-test]下方的enabled=0修改为enabled=1
#
# 安装指定版本的Docker-CE:
# Step 1: 查找Docker-CE的版本:
# yum list docker-ce.x86_64 --showduplicates | sort -r
#   Loading mirror speeds from cached hostfile
#   Loaded plugins: branch, fastestmirror, langpacks
#   docker-ce.x86_64            17.03.1.ce-1.el7.centos            docker-ce-stable
#   docker-ce.x86_64            17.03.1.ce-1.el7.centos            @docker-ce-stable
#   docker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable
#   Available Packages
# Step2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.0.ce.1-1.el7.centos)
# sudo yum -y install docker-ce-[VERSION]
`)],-1),M=e("p",null,"安装校验",-1),A=e("pre",null,[e("code",null,`root@iZbp12adskpuoxodbkqzjfZ:$ docker version
Client:
 Version:      17.03.0-ce
 API version:  1.26
 Go version:   go1.7.5
 Git commit:   3a232c8
 Built:        Tue Feb 28 07:52:04 2017
 OS/Arch:      linux/amd64

Server:
 Version:      17.03.0-ce
 API version:  1.26 (minimum version 1.12)
 Go version:   go1.7.5
 Git commit:   3a232c8
 Built:        Tue Feb 28 07:52:04 2017
 OS/Arch:      linux/amd64
 Experimental: false
`)],-1),U={id:"_2-2-（国内远镜像加速）等配置",tabindex:"-1"},T=e("pre",null,[e("code",null,`[root@docker01 ~]# cat /etc/docker/daemon.json 
{
    "graph": "/data/docker",
    "storage-driver": "overlay2",
    "insecure-registries": ["registry.access.redhat.com","quay.io"],
    "registry-mirrors": ["https://q2gr04ke.mirror.aliyuncs.com"],
    "bip": "192.168.1.1/24",
    "exec-opts": ["native.cgroupdriver=systemd"],
    "live-restore": true
}
[root@docker01 ~]# systemctl restart docker
`)],-1),P={id:"_2-3-快速安装",tabindex:"-1"},G=e("p",null,"思路：",-1),$=e("pre",null,[e("code",null,`1.开启yum缓存
2.全新环境安装docker
3.将缓存的包全部打包出来
4.安装的时候使用rpm -ivh *.rpm方式安装
`)],-1),L={id:"_2-4-运行第一个容器",tabindex:"-1"},z=e("p",null,"运行一个Hello world",-1),B=e("pre",null,[e("code",null,`docker run alpine /bin/echo "Hello world"
`)],-1),j={id:"第3章-docker镜像和容器管理",tabindex:"-1"},q={id:"_3-1-镜像相关命令",tabindex:"-1"},V={id:"_3-1-1-搜索镜像",tabindex:"-1"},F=e("p",null,"选择镜像建议：",-1),K=e("pre",null,[e("code",null,`1.优先选择官方的
2.选择星星多的

docker search centos
`)],-1),X={id:"_3-1-2-获取镜像",tabindex:"-1"},Y=e("pre",null,[e("code",null,`docker pull centos
docker pull busybox
docker pull busybox:1.29
`)],-1),Z={id:"_3-1-3-查看镜像",tabindex:"-1"},H=e("pre",null,[e("code",null,`docker images
`)],-1),J={id:"_3-1-4-删除镜像",tabindex:"-1"},W=e("pre",null,[e("code",null,`docker rmi centos
`)],-1),Q={id:"_3-1-5-导出镜像",tabindex:"-1"},ee=e("pre",null,[e("code",null,`docker save -o centos.tar centos:latest
`)],-1),ne={id:"_3-1-6-导入镜像",tabindex:"-1"},oe=e("pre",null,[e("code",null,`docker load  < centos.tar
`)],-1),le={id:"_3-2-容器相关命令",tabindex:"-1"},re={id:"_3-2-1-启动容器",tabindex:"-1"},te=e("pre",null,[e("code",null,`docker run -d -p 80:80 nginx 
docker run --name mydocker -t -i centos /bin/bash
`)],-1),ie=e("p",null,[e("strong",null,"报错：")],-1),de=e("pre",null,[e("code",null,`WARNING: IPv4 forwarding is disabled. Networking will not work.
`)],-1),ce=e("p",null,[e("strong",null,"解决方法：")],-1),se=e("pre",null,[e("code",null,`vim /usr/lib/sysctl.d/00-system.conf
net.ipv4.ip_forward=1

systemctl restart network
`)],-1),ae=e("p",null,"3.2.2 停止容器",-1),he=e("hr",null,null,-1),_e=e("pre",null,[e("code",null,`docker stop 
`)],-1),ue={id:"_3-2-3-查看容器",tabindex:"-1"},ke=e("pre",null,[e("code",null,`docker ps 
docker ps -a 
docker ps -q
docker ps -aq
`)],-1),pe={id:"_3-2-4-进入容器",tabindex:"-1"},ge=e("pre",null,[e("code",null,`docker exec会分配一个新的终端tty
docker exec -it 容器ID  /bin/bash 
docker attach会使用同一个终端
docker attach 容器ID
`)],-1),fe={id:"_3-2-5-删除容器",tabindex:"-1"},be=e("p",null,"删除单个容器",-1),me=e("pre",null,[e("code",null,`docker rm 容器ID
`)],-1),xe=e("p",null,"批量删除容器",-1),ve=e("pre",null,[e("code",null,`docker stop $(docker ps -q)
docker rm $(docker ps -aq)
`)],-1),De={id:"容器内部修改软件源（nginx举例）",tabindex:"-1"},ye=e("pre",null,[e("code",null,`tee /etc/apt/sources.list <<EOF 
deb http://mirrors.163.com/debian/ jessie main non-free contrib   
deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib
EOF
apt-get update 
apt-get -y install curl
`)],-1),Se={id:"第4章-docker网络管理",tabindex:"-1"},we={id:"_4-1-随机映射端口",tabindex:"-1"},Oe=e("pre",null,[e("code",null,`docker run -P 
`)],-1),Ee={id:"_4-2-指定映射端口",tabindex:"-1"},Ce=e("p",null,"p 宿主机端口:容器端口",-1),Ie=e("pre",null,[e("code",null,`-p 80:80 -p 443:443
`)],-1),Ne=e("p",null,"-p 宿主机IP:宿主机端口:容器端口 如果想多个容器使用8080端口，可以通过添加多个IP地址实现",-1),Re=e("pre",null,[e("code",null,`ifconfig eth0:1 10.0.1.13 up
docker run -d -p 10.0.1.11:8080:80 nginx:latest
docker run -d -p 10.0.1.13:8080:80 nginx:latest
`)],-1),Me=e("p",null,"进入容器里修改站点目录，然后访问测试",-1),Ae=e("pre",null,[e("code",null,`docker exec -it bdb2a4e7e24d /bin/bash
echo "web01" > /usr/share/nginx/html/index.html
docker exec -it 31c1de138dda /bin/bash
echo "web02" > /usr/share/nginx/html/index.html
`)],-1),Ue=e("p",null,"访问测试：",-1),Te=e("pre",null,[e("code",null,`[root@docker01 ~]# curl 10.0.1.11:8080
web02
[root@docker01 ~]# curl 10.0.1.13:8080
web01
`)],-1),Pe={id:"第5章-docker数据卷管理",tabindex:"-1"},Ge={id:"_5-1-持久化数据卷",tabindex:"-1"},$e=e("p",null,"v 宿主机目录:容器内目录 下面我们来创建一个html5小游戏",-1),Le={id:"_5-1-1-创建游戏代码目录",tabindex:"-1"},ze=e("pre",null,[e("code",null,`mkdir /data/xiaoniao -p
cd /data/
unzip xiaoniaofeifei.zip  -d xiaoniao /
`)],-1),Be={id:"_5-1-2-创建容器并映射数据卷",tabindex:"-1"},je=e("pre",null,[e("code",null,`docker run -d  -p 80:80 -v /data/xiaoniao:/usr/share/nginx/html nginx:latest
docker ps
`)],-1),qe={id:"_5-1-3-访问游戏页面",tabindex:"-1"},Ve=e("pre",null,[e("code",null,`10.0.1.11
`)],-1),Fe={id:"_5-2-持久化数据卷容器",tabindex:"-1"},Ke=e("p",null,[e("code",null,"volumes-from"),n(" (跟某一个已经存在的容器挂载相同的卷) 查看当前容器有哪些卷")],-1),Xe=e("pre",null,[e("code",null,`docker volume ls
`)],-1),Ye=e("p",null,"下面我们利用容器卷创建一个小游戏",-1),Ze={id:"_5-2-1-创建一个容器卷",tabindex:"-1"},He=e("pre",null,[e("code",null,`docker run -d  -p 8080:80 --volume xiaoniao:/usr/share/nginx/html nginx:latest
docker volume ls
`)],-1),Je={id:"_5-2-2-查看卷的目录",tabindex:"-1"},We=e("pre",null,[e("code",null,`docker volume inspect xiaoniao
`)],-1),Qe={id:"_5-2-3-复制代码目录到容器卷目录",tabindex:"-1"},en=e("pre",null,[e("code",null,`\\cp -a /data/xiaoniao/* /var/lib/docker/volumes/xiaoniao/_data/
`)],-1),nn={id:"_5-2-4-使用容器卷创建新容器",tabindex:"-1"},on=e("pre",null,[e("code",null,`docker run -d  -p 8090:80 --volume xiaoniao:/usr/share/nginx/html nginx:latest
`)],-1),ln={id:"_5-3-实验-访问不同端口展示不同页面",tabindex:"-1"},rn=e("p",null,[e("code",null,"需求："),n(" 访问8080端口，展示xiaoniao首页 访问8090端口，展示游戏集合页面")],-1),tn={id:"_5-3-1-准备nginx配置文件",tabindex:"-1"},dn=e("pre",null,[e("code",null,`[root@docker01 ~]# cat /data/game.conf 
server {
    listen       8080;
    server_name  localhost;
    location / {
        root   /opt/game/;
        index  index.html index.htm;
    }
}

server {
    listen       8090;
    server_name  localhost;
    location / {
        root   /opt/xiaoniao/;
        index  index.html index.htm;
    }
}
`)],-1),cn={id:"_5-3-2-上传代码目录",tabindex:"-1"},sn=e("pre",null,[e("code",null,`[root@docker01 /data]# ll 
总用量 18896
drwxr-xr-x 5 root root       73 9月   7 23:03 game
-rw-r--r-- 1 root root      309 9月   7 22:57 game.conf
-rw-r--r-- 1 root root 19248295 8月  28 09:48 html5.zip
drwxr-xr-x 3 root root       92 9月   7 22:15 xiaoniao
-rw-r--r-- 1 root root    91014 9月   7 22:11 xiaoniaofeifei.zip
`)],-1),an={id:"_5-3-3-创建容器并挂载",tabindex:"-1"},hn=e("p",null,"需要挂载的内容： 1.nginx配置文件 2.游戏目录 创建容器命令",-1),_n=e("pre",null,[e("code",null,`docker run -d -p 8080:8080 -p 8090:8090 -v /data/game.conf:/etc/nginx/conf.d/game.conf -v /data/game:/opt/game -v /data/xiaoniao:/opt/xiaoniao nginx:latest   
5.3.4 访问测试
10.0.1.11:8080
10.0.1.11:8090
`)],-1),un={id:"第6章-docker镜像手动构建",tabindex:"-1"},kn={id:"_6-1-手动制作游戏镜像",tabindex:"-1"},pn=e("p",null,"下面我们基于centos容器制作一个新镜像，并安装nginx服务",-1),gn={id:"_6-1-1-启动一个容器并安装nginx",tabindex:"-1"},fn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker run -it centos /bin/bash
[root@0ede2760ba65 /]# yum install wget install openssh-clients -y 
[root@0ede2760ba65 /]# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
[root@0ede2760ba65 /]# wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
[root@0ede2760ba65 /]# sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
[root@0ede2760ba65 /]# cat /etc/yum.repos.d/nginx.repo  
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
[root@0ede2760ba65 /]# yum makecache fast
[root@0ede2760ba65 /]# yum install nginx -y
`)],-1),bn={id:"_6-1-2-上传代码目录并配置nginx配置文件",tabindex:"-1"},mn=e("pre",null,[e("code",null,`[root@0ede2760ba65 /]# scp -r 10.0.1.11:/data/* /opt/
[root@0ede2760ba65 /]# ll /opt/
total 18896
drwxr-xr-x 5 root root       73 Sep  7 16:02 game
-rw-r--r-- 1 root root      303 Sep  7 16:02 game.conf
-rw-r--r-- 1 root root 19248295 Sep  7 16:02 html5.zip
drwxr-xr-x 3 root root       92 Sep  7 16:02 xiaoniao
-rw-r--r-- 1 root root    91014 Sep  7 16:02 xiaoniaofeifei.zip
[root@0ede2760ba65 /]# cp /opt/game.conf /etc/nginx/conf.d/
`)],-1),xn={id:"_6-1-3-将容器提交为新的镜像",tabindex:"-1"},vn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker ps -aq
0ede2760ba65
[root@docker01 ~]# docker commit 0ede2760ba65 game:v1
sha256:a61d28fbfe27ebe36d4b73825b55e5f94097083273ab56dccce0453ce2bd6d38
`)],-1),Dn={id:"_6-1-4-测试镜像功能是否可用",tabindex:"-1"},yn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker run -d -p 8080:8080 -p 8090:8090 game:v1  nginx -g 'daemon off;'
f58f209d4761c4bdd9bb164c0050a94a3273b1ee0e57eafe29e48b1517c72950
`)],-1),Sn={id:"_6-1-5-将新镜像导出",tabindex:"-1"},wn=e("pre",null,[e("code",null,`docker save -o game_v1.tar game:v1
`)],-1),On={id:"_6-2-手动制作云盘镜像",tabindex:"-1"},En={id:"_6-2-1-创建容器",tabindex:"-1"},Cn=e("pre",null,[e("code",null,`docker run -d -p 80:80 --name clould game:v1  nginx -g 'daemon off;'
`)],-1),In={id:"_6-2-2-进入容器安装php并求改运行用户",tabindex:"-1"},Nn=e("pre",null,[e("code",null,`[root@d0c987bcefa2 /]# yum install php-fpm -y
[root@d0c987bcefa2 /]# php-fpm -v
PHP 5.4.16 (fpm-fcgi) (built: Oct 30 2018 19:32:20)
Copyright (c) 1997-2013 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies
[root@d0c987bcefa2 /]# sed -i '/^user/c user = nginx' /etc/php-fpm.d/www.conf
[root@d0c987bcefa2 /]# sed -i '/^group/c group = nginx' /etc/php-fpm.d/www.conf
[root@d0c987bcefa2 /]# sed -i '/daemonize/s#no#yes#g' /etc/php-fpm.conf     
[root@d0c987bcefa2 /]# php-fpm -c /etc/php.ini -y /etc/php-fpm.conf
[root@d0c987bcefa2 /]# php-fpm -c /etc/php.ini -y /etc/php-fpm.conf                                   
[root@d0c987bcefa2 /]# ps -ef|grep php
root         77      0  0 21:43 ?        00:00:00 php-fpm: master process (/etc/php-fpm.conf)
nginx        78     77  0 21:43 ?        00:00:00 php-fpm: pool www
nginx        79     77  0 21:43 ?        00:00:00 php-fpm: pool www
nginx        80     77  0 21:43 ?        00:00:00 php-fpm: pool www
nginx        81     77  0 21:43 ?        00:00:00 php-fpm: pool www
nginx        82     77  0 21:43 ?        00:00:00 php-fpm: pool www
`)],-1),Rn={id:"_6-2-3-配置nginx",tabindex:"-1"},Mn=e("pre",null,[e("code",null,`[root@d0c987bcefa2 /]# cat /etc/nginx/conf.d/cloud.conf   
server {
    listen 80;
    server_name localhost;
    root /code;
    index index.php index.html;

    location ~ \\.php$ {
        root /code;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
[root@d0c987bcefa2 /]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@d0c987bcefa2 /]# nginx -s reload
`)],-1),An={id:"_6-2-4-下载代码目录",tabindex:"-1"},Un=e("pre",null,[e("code",null,`[root@d0c987bcefa2 /]# mkdir /code
[root@d0c987bcefa2 /]# cd /code/
[root@d0c987bcefa2 code]# scp -r 10.0.1.11:/data/kod/* /code/
[root@d0c987bcefa2 code]# ls
ChangeLog.md  README.MD  app  config  data  index.php  plugins  static
[root@d0c987bcefa2 code]# chown -R nginx:nginx /code/
`)],-1),Tn={id:"_6-2-5-测试",tabindex:"-1"},Pn=e("pre",null,[e("code",null,`[root@d0c987bcefa2 code]# curl -I 127.0.0.1
HTTP/1.1 302 Moved Temporarily
Server: nginx/1.16.1
Date: Sat, 07 Sep 2019 21:53:17 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Powered-By: PHP/5.4.16
Set-Cookie: KOD_SESSION_ID_9d6d9=ljq63o0tmcscon6eb3gdpqscf4; path=/
Set-Cookie: KOD_SESSION_ID_9d6d9=ljq63o0tmcscon6eb3gdpqscf4; path=/
Set-Cookie: KOD_SESSION_ID_9d6d9=ljq63o0tmcscon6eb3gdpqscf4; path=/
Set-Cookie: KOD_SESSION_SSO=bboh1p0h1uc50tfibrg67dnra7; path=/
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0
Pragma: no-cache
Set-Cookie: KOD_SESSION_ID_9d6d9=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/
Set-Cookie: kod_name=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT
Set-Cookie: kodToken=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT
Set-Cookie: X-CSRF-TOKEN=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT
Location: ./index.php?user/login
`)],-1),Gn={id:"_6-2-6-提交新的镜像",tabindex:"-1"},$n=e("pre",null,[e("code",null,`[root@docker01 ~]# docker commit d0c987bcefa2 kod:v1
sha256:169df6e8db11bd044e3e05237f2947783f9cc7a65b643dc9206ecf05fdc4a3ea
`)],-1),Ln={id:"_6-2-7-编写启动脚本并提交新镜像",tabindex:"-1"},zn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker exec -it c14835183fb5 /bin/bash
[root@c14835183fb5 /]# cat init.sh     
#!/bin/bash
php-fpm -c /etc/php.ini -y /etc/php-fpm.conf
nginx -g 'daemon off;'
[root@c14835183fb5 /]# chmod +x init.sh 
[root@docker01 ~]# docker commit c14835183fb5 kod:v2
sha256:c05ebdf400aa7f7a27aa857df0d9c75c42943db89abca66f79101771db8e9585
`)],-1),Bn={id:"_6-2-8-启动测试",tabindex:"-1"},jn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker stop $(docker ps -qa)
[root@docker01 ~]# docker run -d -p 80:80 kod:v2 /bin/bash /init.sh
dccf4aea5471713872e4fefaca45f7fac3bffec8f5f602570863ed14231dea1a
[root@docker01 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                            NAMES
dccf4aea5471        kod:v2              "/bin/bash /init.sh"     36 seconds ago      Up 35 seconds       0.0.0.0:80->80/tcp                               magical_napier
`)],-1),qn={id:"_6-2-9-添加gd库",tabindex:"-1"},Vn=e("p",null,"此时打开页面提示缺少GD库，进入容器内安装php支持插件",-1),Fn=e("pre",null,[e("code",null,`[root@dccf4aea5471 /]yum install php-mbstring php-gd -y
`)],-1),Kn=e("p",null,"然后重启容器",-1),Xn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker restart dccf4aea5471
`)],-1),Yn={id:"_6-2-10-访问测试没问题后提交新镜像",tabindex:"-1"},Zn=e("pre",null,[e("code",null,`[root@docker01 ~]# docker commit dccf4aea5471 kod:v2
sha256:23051ce545a2eb6bb50bb2307bd9cfbaf6139e52f205a4126fb1d8d974c417f4
`)],-1),Hn={id:"第7章-dockerfile自动构建docker镜像",tabindex:"-1"},Jn={id:"_7-1-dockerfile操作命令说明",tabindex:"-1"},Wn=e("pre",null,[e("code",null,`Docker通过对于在Dockerfile中的一系列指令的顺序解析实现自动的image的构建
　　通过使用build命令，根据Dockerfiel的描述来构建镜像
　　通过源代码路径的方式
　　通过标准输入流的方式
Dockerfile指令：
　　只支持Docker自己定义的一套指令，不支持自定义
　　大小写不敏感，但是建议全部使用大写
　　根据Dockerfile的内容顺序执行
FROM：
　　FROM {base镜像}
　　必须放在DOckerfile的第一行，表示从哪个baseimage开始构建
MAINTAINER：
　　可选的，用来标识image作者的地方
RUN：
　　每一个RUN指令都会是在一个新的container里面运行，并提交为一个image作为下一个RUN的base
　　一个Dockerfile中可以包含多个RUN，按定义顺序执行
　　RUN支持两种运行方式：
　　　　RUN <cmd> 这个会当作/bin/sh -c “cmd” 运行
　　　　RUN [“executable”，“arg1”，。。]，Docker把他当作json的顺序来解析，因此必须使用双引号，而且executable需要是完整路径
　　RUN 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 RUN command1 的执行仅仅是当前进程，一个内存上的变化而已，其结果不会造成任何文件。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。而如果需要将两条命令或者多条命令联合起来执行需要加上&&。如：cd /usr/local/src && wget xxxxxxx
CMD：
　　CMD的作用是作为执行container时候的默认行为（容器默认的启动命令）
　　当运行container的时候声明了command，则不再用image中的CMD默认所定义的命令
　　一个Dockerfile中只能有一个有效的CMD，当定义多个CMD的时候，只有最后一个才会起作用 
CMD定义的三种方式：
　　CMD <cmd> 这个会当作/bin/sh -c "cmd"来执行
　　CMD ["executable","arg1",....]
　　CMD ["arg1","arg2"]，这个时候CMD作为ENTRYPOINT的参数 
EXPOSE 声明端口
　　格式为 EXPOSE <端口1> [<端口2>...]。
　　EXPOSE 指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。
entrypoint：
　　entrypoint的作用是，把整个container变成了一个可执行的文件，这样不能够通过替换CMD的方法来改变创建container的方式。但是可以通过参数传递的方法影响到container内部
　　每个Dockerfile只能够包含一个entrypoint，多个entrypoint只有最后一个有效
　　当定义了entrypoint以后，CMD只能够作为参数进行传递
entrypoint定义方式：
　　entrypoint ["executable","arg1","arg2"]，这种定义方式下，CMD可以通过json的方式来定义entrypoint的参数，可以通过在运行container的时候通过指定command的方式传递参数
　　entrypoint <cmd>，当作/bin/bash -c "cmd"运行命令
ADD & COPY：
　　当在源代码构建的方式下，可以通过ADD和COPY的方式，把host上的文件或者目录复制到image中
　　ADD和COPY的源必须在context路径下
　　当src为网络URL的情况下，ADD指令可以把它下载到dest的指定位置，这个在任何build的方式下都可以work
　　ADD相对COPY还有一个多的功能，能够进行自动解压压缩包
ENV：
　　ENV key value
    调用变量格式：\${key}
　　用来设置环境变量，后续的RUN可以使用它所创建的环境变量
　　当创建基于该镜像的container的时候，会自动拥有设置的环境变量 
WORKDIR：
　　用来指定当前工作目录（或者称为当前目录）
　　当使用相对目录的情况下，采用上一个WORKDIR指定的目录作为基准 
USER：
　　指定UID或者username，来决定运行RUN指令的用户 
ONBUILD：
　　ONBUILD作为一个trigger的标记，可以用来trigger任何Dockerfile中的指令
　　可以定义多个ONBUILD指令
　　当下一个镜像B使用镜像A作为base的时候，在FROM A指令前，会先按照顺序执行在构建A时候定义的ONBUILD指令
　　ONBUILD <DOCKERFILE 指令> <content>
VOLUME：
　　用来创建一个在image之外的mount point，用来在多个container之间实现数据共享
　　运行使用json array的方式定义多个volume
　　VOLUME ["/var/data1","/var/data2"]
　　或者plain text的情况下定义多个VOLUME指令
`)],-1),Qn={id:"_7-2-使用dockerfile创建云盘",tabindex:"-1"},eo={id:"_7-2-1-准备需要的文件",tabindex:"-1"},no=e("pre",null,[e("code",null,`[root@docker01 ~/dockerfile/kod]# ls CentOS-Base.repo cloud.conf dockerfile epel.repo init.sh kodexplorer4.40.zip nginx.repo
`)],-1),oo={id:"_7-2-2-编写dockerfile",tabindex:"-1"},lo=e("pre",null,[e("code",null,`[root@docker01 ~/dockerfile/kod]# cat dockerfile 
FROM centos:latest

ADD CentOS-Base.repo  /etc/yum.repos.d/CentOS-Base.repo
ADD epel.repo  /etc/yum.repos.d/epel.repo
ADD nginx.repo  /etc/yum.repos.d/nginx.repo
RUN yum install nginx php-fpm unzip php-gd php-mbstring -y 

RUN rm -rf /etc/nginx/conf.d/default.conf 
RUN sed -i '/^user/c user = nginx' /etc/php-fpm.d/www.conf
RUN sed -i '/^group/c group = nginx' /etc/php-fpm.d/www.conf
RUN sed -i '/daemonize/s#no#yes#g' /etc/php-fpm.conf   
ADD cloud.conf /etc/nginx/conf.d/cloud.conf

RUN   mkdir /code
WORKDIR /code
ADD kodexplorer4.40.zip /code/kodexplorer4.40.zip 
RUN unzip kodexplorer4.40.zip 
RUN chown -R nginx:nginx .
VOLUME /code

ADD init.sh  /init.sh
EXPOSE 80

CMD ["/bin/bash","/init.sh"]
`)],-1),ro={id:"_7-2-3-构建新镜像",tabindex:"-1"},to=e("pre",null,[e("code",null,`[root@docker01 ~/dockerfile/kod]# docker build --network=host -t centos_kod:v1 .
[root@docker01 ~/dockerfile/kod]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos_kod          v1                  87071ea7c86b        2 minutes ago       465MB
`)],-1),io={id:"_7-2-4-基于新镜像运行容器",tabindex:"-1"},co=e("pre",null,[e("code",null,`[root@docker01 ~/dockerfile/kod]# docker run -d -p 80:80 centos_kod:v1
4d1007d7194d434248762e5aca76070206643f0f0f533f2112d0359b25fe7ba0
`)],-1),so={id:"第8章-docker私有仓库",tabindex:"-1"},ao={id:"_8-1-普通的docker-registry",tabindex:"-1"},ho={id:"_8-2-带认证的docker-registry",tabindex:"-1"},_o={id:"_8-3-企业级的docker-harbor",tabindex:"-1"},uo={id:"_8-3-1-部署思路",tabindex:"-1"},ko=e("pre",null,[e("code",null,`第一步：安装docker和docker-compose
第二步：下载harbor-offline-installer-v1.9.0-rc1.tgz
第三步：上传到/opt,并解压
第四步：修改harbor.yml配置文件 hostname = 10.0.0.11 harbor_admin_password = 123456
第五步：执行install.sh
`)],-1),po={id:"_8-3-2-安装docker-compose",tabindex:"-1"},go=e("p",null,"1.安装docker-compose",-1),fo=e("pre",null,[e("code",null,`yum install -y python2-pip
`)],-1),bo=e("p",null,"2.这里使用pip安装，默认源为国外，可以使用国内加速，相关网站",-1),mo=e("pre",null,[e("code",null,`https://mirrors.tuna.tsinghua.edu.cn/help/pypi/
`)],-1),xo=e("p",null,"pip加速操作命令",-1),vo=e("pre",null,[e("code",null,`pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
`)],-1),Do=e("p",null,"3.继续安装docker-compose",-1),yo=e("pre",null,[e("code",null,`pip install docker-compose
`)],-1),So=e("p",null,"4.检查",-1),wo=e("pre",null,[e("code",null,`docker-compose version
`)],-1),Oo={id:"_8-3-3-上传解压docker-harbor",tabindex:"-1"},Eo=e("pre",null,[e("code",null,`[root@docker01 ~]# cd /opt/
[root@docker01 /opt]# ls
harbor-offline-installer-v1.9.0-rc1.tgz
[root@docker01 /opt]# tar zxf harbor-offline-installer-v1.9.0-rc1.tgz 
[root@docker01 /opt]# ls
harbor  harbor-offline-installer-v1.9.0-rc1.tgz
[root@docker01 /opt]# cd harbor/
`)],-1),Co={id:"_8-3-4-修改配置文件",tabindex:"-1"},Io=e("p",null,"修改2个地方：",-1),No=e("pre",null,[e("code",null,`[root@docker01 /opt/harbor]# egrep "10.0.1.11|123456" harbor.yml 
hostname: 10.0.1.11
harbor_admin_password: 123456
`)],-1),Ro={id:"_8-3-5-安装",tabindex:"-1"},Mo=e("pre",null,[e("code",null,`[root@docker01 /opt/harbor]# ./install.sh
`)],-1),Ao={id:"_8-3-6-修改docker信任仓库",tabindex:"-1"},Uo=e("pre",null,[e("code",null,`[root@docker01 /opt/harbor]# cat /etc/docker/daemon.json    
{
      "registry-mirrors": ["http://hub-mirror.c.163.com"],
      "insecure-registries": ["http://10.0.1.11"] 
}
`)],-1),To={id:"_8-3-7-重启docker并上传镜像",tabindex:"-1"},Po=e("pre",null,[e("code",null,`systemctl restart docker  
`)],-1),Go={id:"_8-3-8-给镜像打标签并提交到dockerharbor",tabindex:"-1"},$o=e("pre",null,[e("code",null,`[root@docker01 /opt/harbor]# docker login 10.0.1.11           
Username: zhangya 
Password: 
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
[root@docker01 ~]# docker run -d -p 8080:80 centos_kod:v1          
78be80f7c2029b68e8943e38fa99131ec6709f798e63c94afb5a7fdfa4a8047c
[root@docker01 ~]# docker ps|grep kod
78be80f7c202        centos_kod:v1                                       "/bin/bash /init.sh"     15 seconds ago      Up 13 seconds            0.0.0.0:8080->80/tcp        tender_dirac
[root@docker01 ~]# docker commit 78be80f7c202 10.0.1.11/linux/centos_kod:v1
sha256:6bf1e1eef1969bcd4c82472aed945d4dda74a923c0d7dae91e38539676f8c240
[root@docker01 ~/dockerfile/kod]# docker images
REPOSITORY                      TAG                        IMAGE ID            CREATED             SIZE
10.0.1.11/linux/centos_kod      v1                         6bf1e1eef196        13 minutes ago      465MB
[root@docker01 /opt/harbor]# docker push 10.0.1.11/linux/centos_kod:v1
`)],-1),Lo={id:"_8-3-9-在docker-harbor上查看",tabindex:"-1"},zo={id:"_8-3-10-其他主机上下载镜像",tabindex:"-1"},Bo=e("pre",null,[e("code",null,`[root@docker02 ~]# cat /etc/docker/daemon.json 
{
      "registry-mirrors": ["http://hub-mirror.c.163.com"],
      "insecure-registries": ["http://10.0.1.11"],
      "insecure-registries": ["https://10.0.1.11"] 
}
[root@docker02 ~]# docker pull 10.0.1.11/linux/centos_kod:v1
`)],-1);function jo(t,qo,Vo,Fo,c,Ko){const l=k,s=a;return u(),_(s,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":o(()=>[e("h1",f,[n("第1章 Docker容器介绍 "),r(l,{class:"header-anchor",href:"#第1章-docker容器介绍","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",b,[n("1.1 docker是什么 "),r(l,{class:"header-anchor",href:"#_1-1-docker是什么","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),m,e("h2",x,[n("1.2 容器与虚拟机对比 "),r(l,{class:"header-anchor",href:"#_1-2-容器与虚拟机对比","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),v,D,e("h2",y,[n("1.3 docker的三个重要概念 "),r(l,{class:"header-anchor",href:"#_1-3-docker的三个重要概念","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),S,w,e("h2",O,[n("1.4 docker的组成部分 "),r(l,{class:"header-anchor",href:"#_1-4-docker的组成部分","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),E,C,e("h1",I,[n("第2章 Docker安装部署 "),r(l,{class:"header-anchor",href:"#第2章-docker安装部署","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",N,[n("2.1 国内源安装docker-ce "),r(l,{class:"header-anchor",href:"#_2-1-国内源安装docker-ce","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),R,M,A,e("h2",U,[n("2.2 （国内远镜像加速）等配置 "),r(l,{class:"header-anchor",href:"#_2-2-（国内远镜像加速）等配置","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),T,e("h2",P,[n("2.3 快速安装 "),r(l,{class:"header-anchor",href:"#_2-3-快速安装","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),G,$,e("h2",L,[n("2.4 运行第一个容器 "),r(l,{class:"header-anchor",href:"#_2-4-运行第一个容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),z,B,e("h1",j,[n("第3章 Docker镜像和容器管理 "),r(l,{class:"header-anchor",href:"#第3章-docker镜像和容器管理","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",q,[n("3.1 镜像相关命令 "),r(l,{class:"header-anchor",href:"#_3-1-镜像相关命令","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",V,[n("3.1.1 搜索镜像 "),r(l,{class:"header-anchor",href:"#_3-1-1-搜索镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),F,K,e("h2",X,[n("3.1.2 获取镜像 "),r(l,{class:"header-anchor",href:"#_3-1-2-获取镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Y,e("h2",Z,[n("3.1.3 查看镜像 "),r(l,{class:"header-anchor",href:"#_3-1-3-查看镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),H,e("h2",J,[n("3.1.4 删除镜像 "),r(l,{class:"header-anchor",href:"#_3-1-4-删除镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),W,e("h2",Q,[n("3.1.5 导出镜像 "),r(l,{class:"header-anchor",href:"#_3-1-5-导出镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),ee,e("h2",ne,[n("3.1.6 导入镜像 "),r(l,{class:"header-anchor",href:"#_3-1-6-导入镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),oe,e("h2",le,[n("3.2 容器相关命令 "),r(l,{class:"header-anchor",href:"#_3-2-容器相关命令","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",re,[n("3.2.1 启动容器 "),r(l,{class:"header-anchor",href:"#_3-2-1-启动容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),te,ie,de,ce,se,ae,he,_e,e("h2",ue,[n("3.2.3 查看容器 "),r(l,{class:"header-anchor",href:"#_3-2-3-查看容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),ke,e("h2",pe,[n("3.2.4 进入容器 "),r(l,{class:"header-anchor",href:"#_3-2-4-进入容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),ge,e("h2",fe,[n("3.2.5 删除容器 "),r(l,{class:"header-anchor",href:"#_3-2-5-删除容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),be,me,xe,ve,e("h1",De,[n("容器内部修改软件源（Nginx举例） "),r(l,{class:"header-anchor",href:"#容器内部修改软件源（nginx举例）","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),ye,e("h1",Se,[n("第4章 Docker网络管理 "),r(l,{class:"header-anchor",href:"#第4章-docker网络管理","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",we,[n("4.1 随机映射端口 "),r(l,{class:"header-anchor",href:"#_4-1-随机映射端口","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Oe,e("h2",Ee,[n("4.2 指定映射端口 "),r(l,{class:"header-anchor",href:"#_4-2-指定映射端口","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Ce,Ie,Ne,Re,Me,Ae,Ue,Te,e("h1",Pe,[n("第5章 Docker数据卷管理 "),r(l,{class:"header-anchor",href:"#第5章-docker数据卷管理","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",Ge,[n("5.1 持久化数据卷 "),r(l,{class:"header-anchor",href:"#_5-1-持久化数据卷","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),$e,e("h2",Le,[n("5.1.1 创建游戏代码目录 "),r(l,{class:"header-anchor",href:"#_5-1-1-创建游戏代码目录","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),ze,e("h2",Be,[n("5.1.2 创建容器并映射数据卷 "),r(l,{class:"header-anchor",href:"#_5-1-2-创建容器并映射数据卷","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),je,e("h2",qe,[n("5.1.3 访问游戏页面 "),r(l,{class:"header-anchor",href:"#_5-1-3-访问游戏页面","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Ve,e("h2",Fe,[n("5.2 持久化数据卷容器 "),r(l,{class:"header-anchor",href:"#_5-2-持久化数据卷容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Ke,Xe,Ye,e("h2",Ze,[n("5.2.1 创建一个容器卷 "),r(l,{class:"header-anchor",href:"#_5-2-1-创建一个容器卷","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),He,e("h2",Je,[n("5.2.2 查看卷的目录 "),r(l,{class:"header-anchor",href:"#_5-2-2-查看卷的目录","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),We,e("h2",Qe,[n("5.2.3 复制代码目录到容器卷目录 "),r(l,{class:"header-anchor",href:"#_5-2-3-复制代码目录到容器卷目录","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),en,e("h2",nn,[n("5.2.4 使用容器卷创建新容器 "),r(l,{class:"header-anchor",href:"#_5-2-4-使用容器卷创建新容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),on,e("h2",ln,[n("5.3 实验-访问不同端口展示不同页面 "),r(l,{class:"header-anchor",href:"#_5-3-实验-访问不同端口展示不同页面","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),rn,e("h2",tn,[n("5.3.1 准备nginx配置文件 "),r(l,{class:"header-anchor",href:"#_5-3-1-准备nginx配置文件","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),dn,e("h2",cn,[n("5.3.2 上传代码目录 "),r(l,{class:"header-anchor",href:"#_5-3-2-上传代码目录","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),sn,e("h2",an,[n("5.3.3 创建容器并挂载 "),r(l,{class:"header-anchor",href:"#_5-3-3-创建容器并挂载","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),hn,_n,e("h1",un,[n("第6章 Docker镜像手动构建 "),r(l,{class:"header-anchor",href:"#第6章-docker镜像手动构建","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",kn,[n("6.1 手动制作游戏镜像 "),r(l,{class:"header-anchor",href:"#_6-1-手动制作游戏镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),pn,e("h2",gn,[n("6.1.1 启动一个容器并安装nginx "),r(l,{class:"header-anchor",href:"#_6-1-1-启动一个容器并安装nginx","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),fn,e("h2",bn,[n("6.1.2 上传代码目录并配置nginx配置文件 "),r(l,{class:"header-anchor",href:"#_6-1-2-上传代码目录并配置nginx配置文件","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),mn,e("h2",xn,[n("6.1.3 将容器提交为新的镜像 "),r(l,{class:"header-anchor",href:"#_6-1-3-将容器提交为新的镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),vn,e("h2",Dn,[n("6.1.4 测试镜像功能是否可用 "),r(l,{class:"header-anchor",href:"#_6-1-4-测试镜像功能是否可用","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),yn,e("h2",Sn,[n("6.1.5 将新镜像导出 "),r(l,{class:"header-anchor",href:"#_6-1-5-将新镜像导出","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),wn,e("h2",On,[n("6.2 手动制作云盘镜像 "),r(l,{class:"header-anchor",href:"#_6-2-手动制作云盘镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",En,[n("6.2.1 创建容器 "),r(l,{class:"header-anchor",href:"#_6-2-1-创建容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Cn,e("h2",In,[n("6.2.2 进入容器安装php并求改运行用户 "),r(l,{class:"header-anchor",href:"#_6-2-2-进入容器安装php并求改运行用户","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Nn,e("h2",Rn,[n("6.2.3 配置nginx "),r(l,{class:"header-anchor",href:"#_6-2-3-配置nginx","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Mn,e("h2",An,[n("6.2.4 下载代码目录 "),r(l,{class:"header-anchor",href:"#_6-2-4-下载代码目录","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Un,e("h2",Tn,[n("6.2.5 测试 "),r(l,{class:"header-anchor",href:"#_6-2-5-测试","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Pn,e("h2",Gn,[n("6.2.6 提交新的镜像 "),r(l,{class:"header-anchor",href:"#_6-2-6-提交新的镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),$n,e("h2",Ln,[n("6.2.7 编写启动脚本并提交新镜像 "),r(l,{class:"header-anchor",href:"#_6-2-7-编写启动脚本并提交新镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),zn,e("h2",Bn,[n("6.2.8 启动测试 "),r(l,{class:"header-anchor",href:"#_6-2-8-启动测试","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),jn,e("h2",qn,[n("6.2.9 添加GD库 "),r(l,{class:"header-anchor",href:"#_6-2-9-添加gd库","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Vn,Fn,Kn,Xn,e("h2",Yn,[n("6.2.10 访问测试没问题后提交新镜像 "),r(l,{class:"header-anchor",href:"#_6-2-10-访问测试没问题后提交新镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Zn,e("h1",Hn,[n("第7章 Dockerfile自动构建Docker镜像 "),r(l,{class:"header-anchor",href:"#第7章-dockerfile自动构建docker镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",Jn,[n("7.1 Dockerfile操作命令说明 "),r(l,{class:"header-anchor",href:"#_7-1-dockerfile操作命令说明","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Wn,e("h2",Qn,[n("7.2 使用Dockerfile创建云盘 "),r(l,{class:"header-anchor",href:"#_7-2-使用dockerfile创建云盘","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",eo,[n("7.2.1 准备需要的文件 "),r(l,{class:"header-anchor",href:"#_7-2-1-准备需要的文件","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),no,e("h2",oo,[n("7.2.2 编写dockerfile "),r(l,{class:"header-anchor",href:"#_7-2-2-编写dockerfile","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),lo,e("h2",ro,[n("7.2.3 构建新镜像 "),r(l,{class:"header-anchor",href:"#_7-2-3-构建新镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),to,e("h2",io,[n("7.2.4 基于新镜像运行容器 "),r(l,{class:"header-anchor",href:"#_7-2-4-基于新镜像运行容器","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),co,e("h1",so,[n("第8章 Docker私有仓库 "),r(l,{class:"header-anchor",href:"#第8章-docker私有仓库","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",ao,[n("8.1 普通的docker registry "),r(l,{class:"header-anchor",href:"#_8-1-普通的docker-registry","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",ho,[n("8.2 带认证的docker registry "),r(l,{class:"header-anchor",href:"#_8-2-带认证的docker-registry","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",_o,[n("8.3 企业级的docker-harbor "),r(l,{class:"header-anchor",href:"#_8-3-企业级的docker-harbor","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",uo,[n("8.3.1 部署思路 "),r(l,{class:"header-anchor",href:"#_8-3-1-部署思路","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),ko,e("h2",po,[n("8.3.2 安装docker-compose "),r(l,{class:"header-anchor",href:"#_8-3-2-安装docker-compose","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),go,fo,bo,mo,xo,vo,Do,yo,So,wo,e("h2",Oo,[n("8.3.3 上传解压docker-harbor "),r(l,{class:"header-anchor",href:"#_8-3-3-上传解压docker-harbor","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Eo,e("h2",Co,[n("8.3.4 修改配置文件 "),r(l,{class:"header-anchor",href:"#_8-3-4-修改配置文件","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Io,No,e("h2",Ro,[n("8.3.5 安装 "),r(l,{class:"header-anchor",href:"#_8-3-5-安装","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Mo,e("h2",Ao,[n("8.3.6 修改docker信任仓库 "),r(l,{class:"header-anchor",href:"#_8-3-6-修改docker信任仓库","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Uo,e("h2",To,[n("8.3.7 重启docker并上传镜像 "),r(l,{class:"header-anchor",href:"#_8-3-7-重启docker并上传镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Po,e("h2",Go,[n("8.3.8 给镜像打标签并提交到dockerharbor "),r(l,{class:"header-anchor",href:"#_8-3-8-给镜像打标签并提交到dockerharbor","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),$o,e("h2",Lo,[n("8.3.9 在docker-harbor上查看 "),r(l,{class:"header-anchor",href:"#_8-3-9-在docker-harbor上查看","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),e("h2",zo,[n("8.3.10 其他主机上下载镜像 "),r(l,{class:"header-anchor",href:"#_8-3-10-其他主机上下载镜像","aria-hidden":"true"},{default:o(()=>[n("#")]),_:1})]),Bo]),"main-header":o(()=>[i(t.$slots,"main-header")]),"main-header-after":o(()=>[i(t.$slots,"main-header-after")]),"main-nav":o(()=>[i(t.$slots,"main-nav")]),"main-content":o(()=>[i(t.$slots,"main-content")]),"main-content-after":o(()=>[i(t.$slots,"main-content-after")]),"main-nav-before":o(()=>[i(t.$slots,"main-nav-before")]),"main-nav-after":o(()=>[i(t.$slots,"main-nav-after")]),comment:o(()=>[i(t.$slots,"comment")]),footer:o(()=>[i(t.$slots,"footer")]),aside:o(()=>[i(t.$slots,"aside")]),"aside-custom":o(()=>[i(t.$slots,"aside-custom")]),default:o(()=>[i(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const Qo=h(g,[["render",jo]]);export{Wo as __pageData,Qo as default};
