import{_ as i}from"./ValaxyMain-d9bd66f5.js";import{_ as r,p,c as d,w as l,o as A,r as o,b as s,R as n}from"./app-382fc2a2.js";import"./YunFooter-4df6b533.js";import"./YunCard-b4e8f33f.js";import"./YunPageHeader-82b6e544.js";const XS=JSON.parse('{"title":"Docker+K8s实践指南","description":"","frontmatter":{"title":"Docker+K8s实践指南","categories":"DevOps","tags":["Prometheus","Kubernetes"],"date":"2020-02-27T18:26:00.000Z"},"headers":[{"level":2,"title":"写在前面的话","slug":"写在前面的话","link":"#写在前面的话","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]},{"level":2,"title":"1.1 PXE+Kickstart介绍","slug":"_1-1-pxe-kickstart介绍","link":"#_1-1-pxe-kickstart介绍","children":[{"level":3,"title":"1.1.1 KickStart工作原理","slug":"_1-1-1-kickstart工作原理","link":"#_1-1-1-kickstart工作原理","children":[]},{"level":3,"title":"1.1.2 PXE工作原理","slug":"_1-1-2-pxe工作原理","link":"#_1-1-2-pxe工作原理","children":[]},{"level":3,"title":"1.1.3 PXE+Kickstart工作流程","slug":"_1-1-3-pxe-kickstart工作流程","link":"#_1-1-3-pxe-kickstart工作流程","children":[]}]},{"level":2,"title":"1.2 制作本地Yum仓库","slug":"_1-2-制作本地yum仓库","link":"#_1-2-制作本地yum仓库","children":[{"level":3,"title":"1.2.1 准备安装源","slug":"_1-2-1-准备安装源","link":"#_1-2-1-准备安装源","children":[]},{"level":3,"title":"1.2.2 配置TFTP-Server","slug":"_1-2-2-配置tftp-server","link":"#_1-2-2-配置tftp-server","children":[]},{"level":3,"title":"1.2.4 自动化安装和流程总结","slug":"_1-2-4-自动化安装和流程总结","link":"#_1-2-4-自动化安装和流程总结","children":[]}]},{"level":2,"title":"2.1 Cobbler部署","slug":"_2-1-cobbler部署","link":"#_2-1-cobbler部署","children":[{"level":3,"title":"2.1.1 Cobbler功能","slug":"_2-1-1-cobbler功能","link":"#_2-1-1-cobbler功能","children":[]},{"level":3,"title":"2.1.2 Cobbler安装","slug":"_2-1-2-cobbler安装","link":"#_2-1-2-cobbler安装","children":[]},{"level":3,"title":"2.1.3 Cobbler管理DHCP","slug":"_2-1-3-cobbler管理dhcp","link":"#_2-1-3-cobbler管理dhcp","children":[]},{"level":3,"title":"2.1.4 Cobbler导入镜像","slug":"_2-1-4-cobbler导入镜像","link":"#_2-1-4-cobbler导入镜像","children":[]},{"level":3,"title":"2.1.5 自定义kickstart文件","slug":"_2-1-5-自定义kickstart文件","link":"#_2-1-5-自定义kickstart文件","children":[]}]},{"level":2,"title":"2.2 使用Cobbler自动化安装CentOS","slug":"_2-2-使用cobbler自动化安装centos","link":"#_2-2-使用cobbler自动化安装centos","children":[{"level":3,"title":"2.2.1 使用Cobbler安装CentOS","slug":"_2-2-1-使用cobbler安装centos","link":"#_2-2-1-使用cobbler安装centos","children":[]},{"level":3,"title":"2.2.2 Koan重新安装系统","slug":"_2-2-2-koan重新安装系统","link":"#_2-2-2-koan重新安装系统","children":[]}]},{"level":2,"title":"2.3 Cobbler Web介绍","slug":"_2-3-cobbler-web介绍","link":"#_2-3-cobbler-web介绍","children":[]},{"level":2,"title":"2.4 深入理解Cobbler","slug":"_2-4-深入理解cobbler","link":"#_2-4-深入理解cobbler","children":[{"level":3,"title":"2.4.1 Cobbler 配置文件","slug":"_2-4-1-cobbler-配置文件","link":"#_2-4-1-cobbler-配置文件","children":[]},{"level":3,"title":"2.4.2 Cobbler设计方式","slug":"_2-4-2-cobbler设计方式","link":"#_2-4-2-cobbler设计方式","children":[]},{"level":3,"title":"2.4.3 Cobbler distro","slug":"_2-4-3-cobbler-distro","link":"#_2-4-3-cobbler-distro","children":[]},{"level":3,"title":"2.1.4 Cobbler profile","slug":"_2-1-4-cobbler-profile","link":"#_2-1-4-cobbler-profile","children":[]},{"level":3,"title":"2.1.5Cobbler repo","slug":"_2-1-5cobbler-repo","link":"#_2-1-5cobbler-repo","children":[]},{"level":3,"title":"2.1.6 Cobbler snippets","slug":"_2-1-6-cobbler-snippets","link":"#_2-1-6-cobbler-snippets","children":[]}]},{"level":2,"title":"3.1 Cobbler构建私有YUM仓库","slug":"_3-1-cobbler构建私有yum仓库","link":"#_3-1-cobbler构建私有yum仓库","children":[{"level":3,"title":"3.1.1 构建OpenStack私有仓库","slug":"_3-1-1-构建openstack私有仓库","link":"#_3-1-1-构建openstack私有仓库","children":[]},{"level":3,"title":"3.1.2 构建Zabbix私有仓库","slug":"_3-1-2-构建zabbix私有仓库","link":"#_3-1-2-构建zabbix私有仓库","children":[]},{"level":3,"title":"3.1.3 构建SaltStack私有仓库","slug":"_3-1-3-构建saltstack私有仓库","link":"#_3-1-3-构建saltstack私有仓库","children":[]},{"level":3,"title":"3.1.4 将私有仓库添加到Profile","slug":"_3-1-4-将私有仓库添加到profile","link":"#_3-1-4-将私有仓库添加到profile","children":[]}]},{"level":2,"title":"3.2 使用Cobbler自动化安装ESXi","slug":"_3-2-使用cobbler自动化安装esxi","link":"#_3-2-使用cobbler自动化安装esxi","children":[]},{"level":2,"title":"3.3 定制化服务器安装","slug":"_3-3-定制化服务器安装","link":"#_3-3-定制化服务器安装","children":[{"level":3,"title":"3.3.1 自动化安装流程梳理","slug":"_3-3-1-自动化安装流程梳理","link":"#_3-3-1-自动化安装流程梳理","children":[]},{"level":3,"title":"3.3.2 Cobbler获取安装进度","slug":"_3-3-2-cobbler获取安装进度","link":"#_3-3-2-cobbler获取安装进度","children":[]}]},{"level":2,"title":"4.1 自定义物理网卡bonding","slug":"_4-1-自定义物理网卡bonding","link":"#_4-1-自定义物理网卡bonding","children":[]},{"level":2,"title":"4.2 Cobbler电源管理","slug":"_4-2-cobbler电源管理","link":"#_4-2-cobbler电源管理","children":[]},{"level":2,"title":"4.3 Cobbler API使用","slug":"_4-3-cobbler-api使用","link":"#_4-3-cobbler-api使用","children":[]},{"level":2,"title":"云计算概述","slug":"云计算概述-1","link":"#云计算概述-1","children":[{"level":3,"title":"云计算的分类","slug":"云计算的分类","link":"#云计算的分类","children":[]},{"level":3,"title":"云计算的分层","slug":"云计算的分层","link":"#云计算的分层","children":[]}]},{"level":2,"title":"云计算与虚拟化","slug":"云计算与虚拟化","link":"#云计算与虚拟化","children":[{"level":3,"title":"全虚拟化和半虚拟化","slug":"全虚拟化和半虚拟化","link":"#全虚拟化和半虚拟化","children":[]},{"level":3,"title":"虚拟化分类","slug":"虚拟化分类","link":"#虚拟化分类","children":[]},{"level":3,"title":"云计算不等于虚拟化","slug":"云计算不等于虚拟化","link":"#云计算不等于虚拟化","children":[]},{"level":3,"title":"3.2.1 OpenStack实战案例","slug":"_3-2-1-openstack实战案例","link":"#_3-2-1-openstack实战案例","children":[]},{"level":3,"title":"3.2.2 NTP时间同步","slug":"_3-2-2-ntp时间同步","link":"#_3-2-2-ntp时间同步","children":[]},{"level":3,"title":"3.2.3 基础软件包安装","slug":"_3-2-3-基础软件包安装","link":"#_3-2-3-基础软件包安装","children":[]},{"level":3,"title":"3.2.4 MySQL数据库部署","slug":"_3-2-4-mysql数据库部署","link":"#_3-2-4-mysql数据库部署","children":[]},{"level":3,"title":"消息代理RabbitMQ","slug":"消息代理rabbitmq","link":"#消息代理rabbitmq","children":[]},{"level":3,"title":"Keystone概述","slug":"keystone概述","link":"#keystone概述","children":[]},{"level":3,"title":"KeyStone部署","slug":"keystone部署","link":"#keystone部署","children":[]},{"level":3,"title":"Keystone权限管理","slug":"keystone权限管理","link":"#keystone权限管理","children":[]},{"level":3,"title":"验证Keystone安装","slug":"验证keystone安装","link":"#验证keystone安装","children":[]},{"level":3,"title":"环境变量脚本配置","slug":"环境变量脚本配置","link":"#环境变量脚本配置","children":[]},{"level":3,"title":"Keystone概述","slug":"keystone概述-1","link":"#keystone概述-1","children":[]},{"level":3,"title":"KeyStone部署","slug":"keystone部署-1","link":"#keystone部署-1","children":[]},{"level":3,"title":"Keystone权限管理","slug":"keystone权限管理-1","link":"#keystone权限管理-1","children":[]},{"level":3,"title":"验证Keystone安装","slug":"验证keystone安装-1","link":"#验证keystone安装-1","children":[]},{"level":3,"title":"环境变量脚本配置","slug":"环境变量脚本配置-1","link":"#环境变量脚本配置-1","children":[]},{"level":3,"title":"Glance概述","slug":"glance概述","link":"#glance概述","children":[]},{"level":3,"title":"Glance部署","slug":"glance部署","link":"#glance部署","children":[]},{"level":3,"title":"验证Glance安装","slug":"验证glance安装","link":"#验证glance安装","children":[]},{"level":3,"title":"3.5.1 Placement概述","slug":"_3-5-1-placement概述","link":"#_3-5-1-placement概述","children":[]},{"level":3,"title":"3.5.2 Placement部署","slug":"_3-5-2-placement部署","link":"#_3-5-2-placement部署","children":[]},{"level":3,"title":"Nova服务组件","slug":"nova服务组件","link":"#nova服务组件","children":[]},{"level":3,"title":"Nova控制节点部署","slug":"nova控制节点部署","link":"#nova控制节点部署","children":[]},{"level":3,"title":"Nova计算节点部署","slug":"nova计算节点部署","link":"#nova计算节点部署","children":[]},{"level":3,"title":"验证Nova安装","slug":"验证nova安装","link":"#验证nova安装","children":[]},{"level":3,"title":"Neutron概述","slug":"neutron概述","link":"#neutron概述","children":[]},{"level":3,"title":"Neutron控制节点部署","slug":"neutron控制节点部署","link":"#neutron控制节点部署","children":[]},{"level":3,"title":"Neutron计算节点部署","slug":"neutron计算节点部署","link":"#neutron计算节点部署","children":[]},{"level":3,"title":"Bug解决","slug":"bug解决","link":"#bug解决","children":[]},{"level":3,"title":"创建FLAT网络","slug":"创建flat网络","link":"#创建flat网络","children":[]},{"level":3,"title":"创建云主机","slug":"创建云主机","link":"#创建云主机","children":[]},{"level":3,"title":"测试云主机","slug":"测试云主机","link":"#测试云主机","children":[]},{"level":3,"title":"Horizon部署","slug":"horizon部署","link":"#horizon部署","children":[]},{"level":3,"title":"Horizon的Session存储","slug":"horizon的session存储","link":"#horizon的session存储","children":[]}]},{"level":2,"title":"Docker介绍","slug":"docker介绍","link":"#docker介绍","children":[{"level":3,"title":"Docker与虚拟化","slug":"docker与虚拟化","link":"#docker与虚拟化","children":[]},{"level":3,"title":"Docker与OpenStack对比","slug":"docker与openstack对比","link":"#docker与openstack对比","children":[]},{"level":3,"title":"Docker改变了什么？","slug":"docker改变了什么？","link":"#docker改变了什么？","children":[]}]},{"level":2,"title":"Docker部署","slug":"docker部署","link":"#docker部署","children":[{"level":3,"title":"Docker for CentOS：","slug":"docker-for-centos：","link":"#docker-for-centos：","children":[]},{"level":3,"title":"Docker for windows:","slug":"docker-for-windows","link":"#docker-for-windows","children":[]},{"level":3,"title":"Docker Hub","slug":"docker-hub","link":"#docker-hub","children":[]}]},{"level":2,"title":"Docker镜像管理","slug":"docker镜像管理","link":"#docker镜像管理","children":[{"level":3,"title":"创建镜像","slug":"创建镜像","link":"#创建镜像","children":[]},{"level":3,"title":"获取镜像","slug":"获取镜像","link":"#获取镜像","children":[]},{"level":3,"title":"查看镜像","slug":"查看镜像","link":"#查看镜像","children":[]},{"level":3,"title":"镜像的导入导出","slug":"镜像的导入导出","link":"#镜像的导入导出","children":[]},{"level":3,"title":"删除镜像","slug":"删除镜像","link":"#删除镜像","children":[]}]},{"level":2,"title":"Docker容器管理","slug":"docker容器管理","link":"#docker容器管理","children":[{"level":3,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]},{"level":3,"title":"终止容器","slug":"终止容器","link":"#终止容器","children":[]},{"level":3,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]},{"level":3,"title":"不进入容器执行命令","slug":"不进入容器执行命令","link":"#不进入容器执行命令","children":[]},{"level":3,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[]},{"level":3,"title":"学习中的小技巧","slug":"学习中的小技巧","link":"#学习中的小技巧","children":[]}]},{"level":2,"title":"Docker网络访问","slug":"docker网络访问","link":"#docker网络访问","children":[{"level":3,"title":"随机映射","slug":"随机映射","link":"#随机映射","children":[]},{"level":3,"title":"指定端口映射","slug":"指定端口映射","link":"#指定端口映射","children":[]}]},{"level":2,"title":"Docker数据管理","slug":"docker数据管理","link":"#docker数据管理","children":[{"level":3,"title":"数据卷","slug":"数据卷","link":"#数据卷","children":[]},{"level":3,"title":"数据卷生产实践","slug":"数据卷生产实践","link":"#数据卷生产实践","children":[]},{"level":3,"title":"数据卷容器","slug":"数据卷容器","link":"#数据卷容器","children":[]},{"level":3,"title":"数据卷容器生产实践","slug":"数据卷容器生产实践","link":"#数据卷容器生产实践","children":[]}]},{"level":2,"title":"手动构建镜像","slug":"手动构建镜像","link":"#手动构建镜像","children":[{"level":3,"title":"启动容器","slug":"启动容器-1","link":"#启动容器-1","children":[]},{"level":3,"title":"提交镜像","slug":"提交镜像","link":"#提交镜像","children":[]}]},{"level":2,"title":"Dockerfile构建","slug":"dockerfile构建","link":"#dockerfile构建","children":[{"level":3,"title":"Nginx Dockerfile实战","slug":"nginx-dockerfile实战","link":"#nginx-dockerfile实战","children":[]},{"level":3,"title":"常用指令的介绍","slug":"常用指令的介绍","link":"#常用指令的介绍","children":[]},{"level":3,"title":"Dockerfile命令详解","slug":"dockerfile命令详解","link":"#dockerfile命令详解","children":[]}]},{"level":2,"title":"Docker镜像生产规划实践","slug":"docker镜像生产规划实践","link":"#docker镜像生产规划实践","children":[]},{"level":2,"title":"基础系统镜像","slug":"基础系统镜像","link":"#基础系统镜像","children":[{"level":3,"title":"CentOS系统镜像","slug":"centos系统镜像","link":"#centos系统镜像","children":[]},{"level":3,"title":"CentOS系统镜像包含SSH","slug":"centos系统镜像包含ssh","link":"#centos系统镜像包含ssh","children":[]},{"level":3,"title":"使用Supervisor管理进程","slug":"使用supervisor管理进程","link":"#使用supervisor管理进程","children":[]},{"level":3,"title":"标准化CentOS系统镜像","slug":"标准化centos系统镜像","link":"#标准化centos系统镜像","children":[]}]},{"level":2,"title":"运行环境镜像","slug":"运行环境镜像","link":"#运行环境镜像","children":[{"level":3,"title":"Java 运行环境","slug":"java-运行环境","link":"#java-运行环境","children":[]},{"level":3,"title":"Tomcat运行环境","slug":"tomcat运行环境","link":"#tomcat运行环境","children":[]}]},{"level":2,"title":"应用镜像","slug":"应用镜像","link":"#应用镜像","children":[{"level":3,"title":"Jenkins镜像构建","slug":"jenkins镜像构建","link":"#jenkins镜像构建","children":[]}]},{"level":2,"title":"Docker Registry","slug":"docker-registry","link":"#docker-registry","children":[{"level":3,"title":"创建Docker Registry","slug":"创建docker-registry","link":"#创建docker-registry","children":[]},{"level":3,"title":"配置Docker信任仓库","slug":"配置docker信任仓库","link":"#配置docker信任仓库","children":[]},{"level":3,"title":"Push镜像到Docker Registry","slug":"push镜像到docker-registry","link":"#push镜像到docker-registry","children":[]}]},{"level":2,"title":"Registry项目Harbor","slug":"registry项目harbor","link":"#registry项目harbor","children":[{"level":3,"title":"Harbor部署","slug":"harbor部署","link":"#harbor部署","children":[]},{"level":3,"title":"Harbor配置","slug":"harbor配置","link":"#harbor配置","children":[]},{"level":3,"title":"使用Harbor管理Registry","slug":"使用harbor管理registry","link":"#使用harbor管理registry","children":[]}]},{"level":2,"title":"Kubernetes架构介绍","slug":"kubernetes架构介绍","link":"#kubernetes架构介绍","children":[{"level":3,"title":"Kubernetes系统架构","slug":"kubernetes系统架构","link":"#kubernetes系统架构","children":[]},{"level":3,"title":"Kubernetes逻辑架构","slug":"kubernetes逻辑架构","link":"#kubernetes逻辑架构","children":[]},{"level":3,"title":"Kubernetes网络介绍","slug":"kubernetes网络介绍","link":"#kubernetes网络介绍","children":[]}]},{"level":2,"title":"使用kubeadm部署Kubernetes v1.16.4","slug":"使用kubeadm部署kubernetes-v1-16-4","link":"#使用kubeadm部署kubernetes-v1-16-4","children":[{"level":3,"title":"部署Docker","slug":"部署docker","link":"#部署docker","children":[]},{"level":3,"title":"部署kubadm和kubelet","slug":"部署kubadm和kubelet","link":"#部署kubadm和kubelet","children":[]},{"level":3,"title":"初始化集群部署Master","slug":"初始化集群部署master","link":"#初始化集群部署master","children":[]},{"level":3,"title":"部署网络插件","slug":"部署网络插件","link":"#部署网络插件","children":[]},{"level":3,"title":"部署Node节点","slug":"部署node节点","link":"#部署node节点","children":[]}]},{"level":2,"title":"公有云中的Kubernetes","slug":"公有云中的kubernetes","link":"#公有云中的kubernetes","children":[{"level":3,"title":"阿里云中的Kubernetes","slug":"阿里云中的kubernetes","link":"#阿里云中的kubernetes","children":[]},{"level":3,"title":"私有云中的Kubernetes","slug":"私有云中的kubernetes","link":"#私有云中的kubernetes","children":[]}]},{"level":2,"title":"第一步：将应用封装进容器中","slug":"第一步：将应用封装进容器中","link":"#第一步：将应用封装进容器中","children":[{"level":3,"title":"部署Harbor镜像仓库","slug":"部署harbor镜像仓库","link":"#部署harbor镜像仓库","children":[]},{"level":3,"title":"制作实验用的Docker镜像","slug":"制作实验用的docker镜像","link":"#制作实验用的docker镜像","children":[]},{"level":3,"title":"配置Docker仓库","slug":"配置docker仓库","link":"#配置docker仓库","children":[]},{"level":3,"title":"登录Harbor镜像仓库","slug":"登录harbor镜像仓库","link":"#登录harbor镜像仓库","children":[]},{"level":3,"title":"提交镜像到Registry","slug":"提交镜像到registry","link":"#提交镜像到registry","children":[]}]},{"level":2,"title":"Pod管理","slug":"pod管理","link":"#pod管理","children":[{"level":3,"title":"创建Service","slug":"创建service","link":"#创建service","children":[]},{"level":3,"title":"创建一个Headless Service","slug":"创建一个headless-service","link":"#创建一个headless-service","children":[]}]},{"level":2,"title":"10.1 Ingress Controller","slug":"_10-1-ingress-controller","link":"#_10-1-ingress-controller","children":[]},{"level":2,"title":"Ingress Controller Traefik","slug":"ingress-controller-traefik","link":"#ingress-controller-traefik","children":[{"level":3,"title":"部署Treafik","slug":"部署treafik","link":"#部署treafik","children":[]}]},{"level":2,"title":"7.1 Rancher快速入门","slug":"_7-1-rancher快速入门","link":"#_7-1-rancher快速入门","children":[]},{"level":2,"title":"7.2 使用Rancher进行日常管理","slug":"_7-2-使用rancher进行日常管理","link":"#_7-2-使用rancher进行日常管理","children":[]},{"level":2,"title":"7.3 Rancher生产集群部署","slug":"_7-3-rancher生产集群部署","link":"#_7-3-rancher生产集群部署","children":[{"level":3,"title":"Liveness探测","slug":"liveness探测","link":"#liveness探测","children":[]},{"level":3,"title":"Readiness探测","slug":"readiness探测","link":"#readiness探测","children":[]}]},{"level":2,"title":"健康检查的方法","slug":"健康检查的方法","link":"#健康检查的方法","children":[{"level":3,"title":"Pod的域名解析策略","slug":"pod的域名解析策略","link":"#pod的域名解析策略","children":[]}]},{"level":2,"title":"应用的DNS管理","slug":"应用的dns管理-1","link":"#应用的dns管理-1","children":[]},{"level":2,"title":"15.1 使用ConfigMap管理应用配置","slug":"_15-1-使用configmap管理应用配置","link":"#_15-1-使用configmap管理应用配置","children":[{"level":3,"title":"通过kubectl命令创建ConfigMap","slug":"通过kubectl命令创建configmap","link":"#通过kubectl命令创建configmap","children":[]},{"level":3,"title":"通过YAML文件创建ConfigMap","slug":"通过yaml文件创建configmap","link":"#通过yaml文件创建configmap","children":[]},{"level":3,"title":"通过文件创建ConfigMap","slug":"通过文件创建configmap","link":"#通过文件创建configmap","children":[]},{"level":3,"title":"从目录创建ConfigMap","slug":"从目录创建configmap","link":"#从目录创建configmap","children":[]},{"level":3,"title":"混合选项创建ConfigMap","slug":"混合选项创建configmap","link":"#混合选项创建configmap","children":[]},{"level":3,"title":"通过环境变量给容器传递ConfigMap","slug":"通过环境变量给容器传递configmap","link":"#通过环境变量给容器传递configmap","children":[]}]},{"level":2,"title":"15.2 使用Secret管理敏感数据","slug":"_15-2-使用secret管理敏感数据","link":"#_15-2-使用secret管理敏感数据","children":[{"level":3,"title":"配置Pod使用Harbor镜像","slug":"配置pod使用harbor镜像","link":"#配置pod使用harbor镜像","children":[]}]},{"level":2,"title":"Helm部署","slug":"helm部署","link":"#helm部署","children":[{"level":3,"title":"安装Helm","slug":"安装helm","link":"#安装helm","children":[]},{"level":3,"title":"使用Helm部署第一个应用","slug":"使用helm部署第一个应用","link":"#使用helm部署第一个应用","children":[]},{"level":3,"title":"Helm组件","slug":"helm组件","link":"#helm组件","children":[]},{"level":3,"title":"自定义Jenkins的Chart","slug":"自定义jenkins的chart","link":"#自定义jenkins的chart","children":[]}]},{"level":2,"title":"创建自己的Chart","slug":"创建自己的chart","link":"#创建自己的chart","children":[{"level":3,"title":"创建自定义Nginx的Chart","slug":"创建自定义nginx的chart","link":"#创建自定义nginx的chart","children":[]},{"level":3,"title":"查看Helm实例","slug":"查看helm实例","link":"#查看helm实例","children":[]}]},{"level":2,"title":"Prometheus快速入门","slug":"prometheus快速入门","link":"#prometheus快速入门","children":[{"level":3,"title":"Prometheus架构介绍","slug":"prometheus架构介绍","link":"#prometheus架构介绍","children":[]},{"level":3,"title":"安装Prometheus","slug":"安装prometheus","link":"#安装prometheus","children":[]},{"level":3,"title":"使用Node Exporter采集主机数据","slug":"使用node-exporter采集主机数据","link":"#使用node-exporter采集主机数据","children":[]},{"level":3,"title":"使用Prometheus UI查看数据","slug":"使用prometheus-ui查看数据","link":"#使用prometheus-ui查看数据","children":[]},{"level":3,"title":"使用Grafana进行数据可视化","slug":"使用grafana进行数据可视化","link":"#使用grafana进行数据可视化","children":[]}]},{"level":2,"title":"Taints（污点）","slug":"taints（污点）","link":"#taints（污点）","children":[{"level":3,"title":"自定义污点","slug":"自定义污点","link":"#自定义污点","children":[]}]},{"level":2,"title":"亲缘性调度","slug":"亲缘性调度","link":"#亲缘性调度","children":[{"level":3,"title":"使用Swagger UI进行API交互","slug":"使用swagger-ui进行api交互","link":"#使用swagger-ui进行api交互","children":[]}]}],"relativePath":"pages/posts/Docker+K8s实践指南.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker+K8s实践指南.md","lastUpdated":1671090556000}'),a=JSON.parse('{"title":"Docker+K8s实践指南","description":"","frontmatter":{"title":"Docker+K8s实践指南","categories":"DevOps","tags":["Prometheus","Kubernetes"],"date":"2020-02-27T18:26:00.000Z"},"headers":[{"level":2,"title":"写在前面的话","slug":"写在前面的话","link":"#写在前面的话","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]},{"level":2,"title":"1.1 PXE+Kickstart介绍","slug":"_1-1-pxe-kickstart介绍","link":"#_1-1-pxe-kickstart介绍","children":[{"level":3,"title":"1.1.1 KickStart工作原理","slug":"_1-1-1-kickstart工作原理","link":"#_1-1-1-kickstart工作原理","children":[]},{"level":3,"title":"1.1.2 PXE工作原理","slug":"_1-1-2-pxe工作原理","link":"#_1-1-2-pxe工作原理","children":[]},{"level":3,"title":"1.1.3 PXE+Kickstart工作流程","slug":"_1-1-3-pxe-kickstart工作流程","link":"#_1-1-3-pxe-kickstart工作流程","children":[]}]},{"level":2,"title":"1.2 制作本地Yum仓库","slug":"_1-2-制作本地yum仓库","link":"#_1-2-制作本地yum仓库","children":[{"level":3,"title":"1.2.1 准备安装源","slug":"_1-2-1-准备安装源","link":"#_1-2-1-准备安装源","children":[]},{"level":3,"title":"1.2.2 配置TFTP-Server","slug":"_1-2-2-配置tftp-server","link":"#_1-2-2-配置tftp-server","children":[]},{"level":3,"title":"1.2.4 自动化安装和流程总结","slug":"_1-2-4-自动化安装和流程总结","link":"#_1-2-4-自动化安装和流程总结","children":[]}]},{"level":2,"title":"2.1 Cobbler部署","slug":"_2-1-cobbler部署","link":"#_2-1-cobbler部署","children":[{"level":3,"title":"2.1.1 Cobbler功能","slug":"_2-1-1-cobbler功能","link":"#_2-1-1-cobbler功能","children":[]},{"level":3,"title":"2.1.2 Cobbler安装","slug":"_2-1-2-cobbler安装","link":"#_2-1-2-cobbler安装","children":[]},{"level":3,"title":"2.1.3 Cobbler管理DHCP","slug":"_2-1-3-cobbler管理dhcp","link":"#_2-1-3-cobbler管理dhcp","children":[]},{"level":3,"title":"2.1.4 Cobbler导入镜像","slug":"_2-1-4-cobbler导入镜像","link":"#_2-1-4-cobbler导入镜像","children":[]},{"level":3,"title":"2.1.5 自定义kickstart文件","slug":"_2-1-5-自定义kickstart文件","link":"#_2-1-5-自定义kickstart文件","children":[]}]},{"level":2,"title":"2.2 使用Cobbler自动化安装CentOS","slug":"_2-2-使用cobbler自动化安装centos","link":"#_2-2-使用cobbler自动化安装centos","children":[{"level":3,"title":"2.2.1 使用Cobbler安装CentOS","slug":"_2-2-1-使用cobbler安装centos","link":"#_2-2-1-使用cobbler安装centos","children":[]},{"level":3,"title":"2.2.2 Koan重新安装系统","slug":"_2-2-2-koan重新安装系统","link":"#_2-2-2-koan重新安装系统","children":[]}]},{"level":2,"title":"2.3 Cobbler Web介绍","slug":"_2-3-cobbler-web介绍","link":"#_2-3-cobbler-web介绍","children":[]},{"level":2,"title":"2.4 深入理解Cobbler","slug":"_2-4-深入理解cobbler","link":"#_2-4-深入理解cobbler","children":[{"level":3,"title":"2.4.1 Cobbler 配置文件","slug":"_2-4-1-cobbler-配置文件","link":"#_2-4-1-cobbler-配置文件","children":[]},{"level":3,"title":"2.4.2 Cobbler设计方式","slug":"_2-4-2-cobbler设计方式","link":"#_2-4-2-cobbler设计方式","children":[]},{"level":3,"title":"2.4.3 Cobbler distro","slug":"_2-4-3-cobbler-distro","link":"#_2-4-3-cobbler-distro","children":[]},{"level":3,"title":"2.1.4 Cobbler profile","slug":"_2-1-4-cobbler-profile","link":"#_2-1-4-cobbler-profile","children":[]},{"level":3,"title":"2.1.5Cobbler repo","slug":"_2-1-5cobbler-repo","link":"#_2-1-5cobbler-repo","children":[]},{"level":3,"title":"2.1.6 Cobbler snippets","slug":"_2-1-6-cobbler-snippets","link":"#_2-1-6-cobbler-snippets","children":[]}]},{"level":2,"title":"3.1 Cobbler构建私有YUM仓库","slug":"_3-1-cobbler构建私有yum仓库","link":"#_3-1-cobbler构建私有yum仓库","children":[{"level":3,"title":"3.1.1 构建OpenStack私有仓库","slug":"_3-1-1-构建openstack私有仓库","link":"#_3-1-1-构建openstack私有仓库","children":[]},{"level":3,"title":"3.1.2 构建Zabbix私有仓库","slug":"_3-1-2-构建zabbix私有仓库","link":"#_3-1-2-构建zabbix私有仓库","children":[]},{"level":3,"title":"3.1.3 构建SaltStack私有仓库","slug":"_3-1-3-构建saltstack私有仓库","link":"#_3-1-3-构建saltstack私有仓库","children":[]},{"level":3,"title":"3.1.4 将私有仓库添加到Profile","slug":"_3-1-4-将私有仓库添加到profile","link":"#_3-1-4-将私有仓库添加到profile","children":[]}]},{"level":2,"title":"3.2 使用Cobbler自动化安装ESXi","slug":"_3-2-使用cobbler自动化安装esxi","link":"#_3-2-使用cobbler自动化安装esxi","children":[]},{"level":2,"title":"3.3 定制化服务器安装","slug":"_3-3-定制化服务器安装","link":"#_3-3-定制化服务器安装","children":[{"level":3,"title":"3.3.1 自动化安装流程梳理","slug":"_3-3-1-自动化安装流程梳理","link":"#_3-3-1-自动化安装流程梳理","children":[]},{"level":3,"title":"3.3.2 Cobbler获取安装进度","slug":"_3-3-2-cobbler获取安装进度","link":"#_3-3-2-cobbler获取安装进度","children":[]}]},{"level":2,"title":"4.1 自定义物理网卡bonding","slug":"_4-1-自定义物理网卡bonding","link":"#_4-1-自定义物理网卡bonding","children":[]},{"level":2,"title":"4.2 Cobbler电源管理","slug":"_4-2-cobbler电源管理","link":"#_4-2-cobbler电源管理","children":[]},{"level":2,"title":"4.3 Cobbler API使用","slug":"_4-3-cobbler-api使用","link":"#_4-3-cobbler-api使用","children":[]},{"level":2,"title":"云计算概述","slug":"云计算概述-1","link":"#云计算概述-1","children":[{"level":3,"title":"云计算的分类","slug":"云计算的分类","link":"#云计算的分类","children":[]},{"level":3,"title":"云计算的分层","slug":"云计算的分层","link":"#云计算的分层","children":[]}]},{"level":2,"title":"云计算与虚拟化","slug":"云计算与虚拟化","link":"#云计算与虚拟化","children":[{"level":3,"title":"全虚拟化和半虚拟化","slug":"全虚拟化和半虚拟化","link":"#全虚拟化和半虚拟化","children":[]},{"level":3,"title":"虚拟化分类","slug":"虚拟化分类","link":"#虚拟化分类","children":[]},{"level":3,"title":"云计算不等于虚拟化","slug":"云计算不等于虚拟化","link":"#云计算不等于虚拟化","children":[]},{"level":3,"title":"3.2.1 OpenStack实战案例","slug":"_3-2-1-openstack实战案例","link":"#_3-2-1-openstack实战案例","children":[]},{"level":3,"title":"3.2.2 NTP时间同步","slug":"_3-2-2-ntp时间同步","link":"#_3-2-2-ntp时间同步","children":[]},{"level":3,"title":"3.2.3 基础软件包安装","slug":"_3-2-3-基础软件包安装","link":"#_3-2-3-基础软件包安装","children":[]},{"level":3,"title":"3.2.4 MySQL数据库部署","slug":"_3-2-4-mysql数据库部署","link":"#_3-2-4-mysql数据库部署","children":[]},{"level":3,"title":"消息代理RabbitMQ","slug":"消息代理rabbitmq","link":"#消息代理rabbitmq","children":[]},{"level":3,"title":"Keystone概述","slug":"keystone概述","link":"#keystone概述","children":[]},{"level":3,"title":"KeyStone部署","slug":"keystone部署","link":"#keystone部署","children":[]},{"level":3,"title":"Keystone权限管理","slug":"keystone权限管理","link":"#keystone权限管理","children":[]},{"level":3,"title":"验证Keystone安装","slug":"验证keystone安装","link":"#验证keystone安装","children":[]},{"level":3,"title":"环境变量脚本配置","slug":"环境变量脚本配置","link":"#环境变量脚本配置","children":[]},{"level":3,"title":"Keystone概述","slug":"keystone概述-1","link":"#keystone概述-1","children":[]},{"level":3,"title":"KeyStone部署","slug":"keystone部署-1","link":"#keystone部署-1","children":[]},{"level":3,"title":"Keystone权限管理","slug":"keystone权限管理-1","link":"#keystone权限管理-1","children":[]},{"level":3,"title":"验证Keystone安装","slug":"验证keystone安装-1","link":"#验证keystone安装-1","children":[]},{"level":3,"title":"环境变量脚本配置","slug":"环境变量脚本配置-1","link":"#环境变量脚本配置-1","children":[]},{"level":3,"title":"Glance概述","slug":"glance概述","link":"#glance概述","children":[]},{"level":3,"title":"Glance部署","slug":"glance部署","link":"#glance部署","children":[]},{"level":3,"title":"验证Glance安装","slug":"验证glance安装","link":"#验证glance安装","children":[]},{"level":3,"title":"3.5.1 Placement概述","slug":"_3-5-1-placement概述","link":"#_3-5-1-placement概述","children":[]},{"level":3,"title":"3.5.2 Placement部署","slug":"_3-5-2-placement部署","link":"#_3-5-2-placement部署","children":[]},{"level":3,"title":"Nova服务组件","slug":"nova服务组件","link":"#nova服务组件","children":[]},{"level":3,"title":"Nova控制节点部署","slug":"nova控制节点部署","link":"#nova控制节点部署","children":[]},{"level":3,"title":"Nova计算节点部署","slug":"nova计算节点部署","link":"#nova计算节点部署","children":[]},{"level":3,"title":"验证Nova安装","slug":"验证nova安装","link":"#验证nova安装","children":[]},{"level":3,"title":"Neutron概述","slug":"neutron概述","link":"#neutron概述","children":[]},{"level":3,"title":"Neutron控制节点部署","slug":"neutron控制节点部署","link":"#neutron控制节点部署","children":[]},{"level":3,"title":"Neutron计算节点部署","slug":"neutron计算节点部署","link":"#neutron计算节点部署","children":[]},{"level":3,"title":"Bug解决","slug":"bug解决","link":"#bug解决","children":[]},{"level":3,"title":"创建FLAT网络","slug":"创建flat网络","link":"#创建flat网络","children":[]},{"level":3,"title":"创建云主机","slug":"创建云主机","link":"#创建云主机","children":[]},{"level":3,"title":"测试云主机","slug":"测试云主机","link":"#测试云主机","children":[]},{"level":3,"title":"Horizon部署","slug":"horizon部署","link":"#horizon部署","children":[]},{"level":3,"title":"Horizon的Session存储","slug":"horizon的session存储","link":"#horizon的session存储","children":[]}]},{"level":2,"title":"Docker介绍","slug":"docker介绍","link":"#docker介绍","children":[{"level":3,"title":"Docker与虚拟化","slug":"docker与虚拟化","link":"#docker与虚拟化","children":[]},{"level":3,"title":"Docker与OpenStack对比","slug":"docker与openstack对比","link":"#docker与openstack对比","children":[]},{"level":3,"title":"Docker改变了什么？","slug":"docker改变了什么？","link":"#docker改变了什么？","children":[]}]},{"level":2,"title":"Docker部署","slug":"docker部署","link":"#docker部署","children":[{"level":3,"title":"Docker for CentOS：","slug":"docker-for-centos：","link":"#docker-for-centos：","children":[]},{"level":3,"title":"Docker for windows:","slug":"docker-for-windows","link":"#docker-for-windows","children":[]},{"level":3,"title":"Docker Hub","slug":"docker-hub","link":"#docker-hub","children":[]}]},{"level":2,"title":"Docker镜像管理","slug":"docker镜像管理","link":"#docker镜像管理","children":[{"level":3,"title":"创建镜像","slug":"创建镜像","link":"#创建镜像","children":[]},{"level":3,"title":"获取镜像","slug":"获取镜像","link":"#获取镜像","children":[]},{"level":3,"title":"查看镜像","slug":"查看镜像","link":"#查看镜像","children":[]},{"level":3,"title":"镜像的导入导出","slug":"镜像的导入导出","link":"#镜像的导入导出","children":[]},{"level":3,"title":"删除镜像","slug":"删除镜像","link":"#删除镜像","children":[]}]},{"level":2,"title":"Docker容器管理","slug":"docker容器管理","link":"#docker容器管理","children":[{"level":3,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]},{"level":3,"title":"终止容器","slug":"终止容器","link":"#终止容器","children":[]},{"level":3,"title":"进入容器","slug":"进入容器","link":"#进入容器","children":[]},{"level":3,"title":"不进入容器执行命令","slug":"不进入容器执行命令","link":"#不进入容器执行命令","children":[]},{"level":3,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[]},{"level":3,"title":"学习中的小技巧","slug":"学习中的小技巧","link":"#学习中的小技巧","children":[]}]},{"level":2,"title":"Docker网络访问","slug":"docker网络访问","link":"#docker网络访问","children":[{"level":3,"title":"随机映射","slug":"随机映射","link":"#随机映射","children":[]},{"level":3,"title":"指定端口映射","slug":"指定端口映射","link":"#指定端口映射","children":[]}]},{"level":2,"title":"Docker数据管理","slug":"docker数据管理","link":"#docker数据管理","children":[{"level":3,"title":"数据卷","slug":"数据卷","link":"#数据卷","children":[]},{"level":3,"title":"数据卷生产实践","slug":"数据卷生产实践","link":"#数据卷生产实践","children":[]},{"level":3,"title":"数据卷容器","slug":"数据卷容器","link":"#数据卷容器","children":[]},{"level":3,"title":"数据卷容器生产实践","slug":"数据卷容器生产实践","link":"#数据卷容器生产实践","children":[]}]},{"level":2,"title":"手动构建镜像","slug":"手动构建镜像","link":"#手动构建镜像","children":[{"level":3,"title":"启动容器","slug":"启动容器-1","link":"#启动容器-1","children":[]},{"level":3,"title":"提交镜像","slug":"提交镜像","link":"#提交镜像","children":[]}]},{"level":2,"title":"Dockerfile构建","slug":"dockerfile构建","link":"#dockerfile构建","children":[{"level":3,"title":"Nginx Dockerfile实战","slug":"nginx-dockerfile实战","link":"#nginx-dockerfile实战","children":[]},{"level":3,"title":"常用指令的介绍","slug":"常用指令的介绍","link":"#常用指令的介绍","children":[]},{"level":3,"title":"Dockerfile命令详解","slug":"dockerfile命令详解","link":"#dockerfile命令详解","children":[]}]},{"level":2,"title":"Docker镜像生产规划实践","slug":"docker镜像生产规划实践","link":"#docker镜像生产规划实践","children":[]},{"level":2,"title":"基础系统镜像","slug":"基础系统镜像","link":"#基础系统镜像","children":[{"level":3,"title":"CentOS系统镜像","slug":"centos系统镜像","link":"#centos系统镜像","children":[]},{"level":3,"title":"CentOS系统镜像包含SSH","slug":"centos系统镜像包含ssh","link":"#centos系统镜像包含ssh","children":[]},{"level":3,"title":"使用Supervisor管理进程","slug":"使用supervisor管理进程","link":"#使用supervisor管理进程","children":[]},{"level":3,"title":"标准化CentOS系统镜像","slug":"标准化centos系统镜像","link":"#标准化centos系统镜像","children":[]}]},{"level":2,"title":"运行环境镜像","slug":"运行环境镜像","link":"#运行环境镜像","children":[{"level":3,"title":"Java 运行环境","slug":"java-运行环境","link":"#java-运行环境","children":[]},{"level":3,"title":"Tomcat运行环境","slug":"tomcat运行环境","link":"#tomcat运行环境","children":[]}]},{"level":2,"title":"应用镜像","slug":"应用镜像","link":"#应用镜像","children":[{"level":3,"title":"Jenkins镜像构建","slug":"jenkins镜像构建","link":"#jenkins镜像构建","children":[]}]},{"level":2,"title":"Docker Registry","slug":"docker-registry","link":"#docker-registry","children":[{"level":3,"title":"创建Docker Registry","slug":"创建docker-registry","link":"#创建docker-registry","children":[]},{"level":3,"title":"配置Docker信任仓库","slug":"配置docker信任仓库","link":"#配置docker信任仓库","children":[]},{"level":3,"title":"Push镜像到Docker Registry","slug":"push镜像到docker-registry","link":"#push镜像到docker-registry","children":[]}]},{"level":2,"title":"Registry项目Harbor","slug":"registry项目harbor","link":"#registry项目harbor","children":[{"level":3,"title":"Harbor部署","slug":"harbor部署","link":"#harbor部署","children":[]},{"level":3,"title":"Harbor配置","slug":"harbor配置","link":"#harbor配置","children":[]},{"level":3,"title":"使用Harbor管理Registry","slug":"使用harbor管理registry","link":"#使用harbor管理registry","children":[]}]},{"level":2,"title":"Kubernetes架构介绍","slug":"kubernetes架构介绍","link":"#kubernetes架构介绍","children":[{"level":3,"title":"Kubernetes系统架构","slug":"kubernetes系统架构","link":"#kubernetes系统架构","children":[]},{"level":3,"title":"Kubernetes逻辑架构","slug":"kubernetes逻辑架构","link":"#kubernetes逻辑架构","children":[]},{"level":3,"title":"Kubernetes网络介绍","slug":"kubernetes网络介绍","link":"#kubernetes网络介绍","children":[]}]},{"level":2,"title":"使用kubeadm部署Kubernetes v1.16.4","slug":"使用kubeadm部署kubernetes-v1-16-4","link":"#使用kubeadm部署kubernetes-v1-16-4","children":[{"level":3,"title":"部署Docker","slug":"部署docker","link":"#部署docker","children":[]},{"level":3,"title":"部署kubadm和kubelet","slug":"部署kubadm和kubelet","link":"#部署kubadm和kubelet","children":[]},{"level":3,"title":"初始化集群部署Master","slug":"初始化集群部署master","link":"#初始化集群部署master","children":[]},{"level":3,"title":"部署网络插件","slug":"部署网络插件","link":"#部署网络插件","children":[]},{"level":3,"title":"部署Node节点","slug":"部署node节点","link":"#部署node节点","children":[]}]},{"level":2,"title":"公有云中的Kubernetes","slug":"公有云中的kubernetes","link":"#公有云中的kubernetes","children":[{"level":3,"title":"阿里云中的Kubernetes","slug":"阿里云中的kubernetes","link":"#阿里云中的kubernetes","children":[]},{"level":3,"title":"私有云中的Kubernetes","slug":"私有云中的kubernetes","link":"#私有云中的kubernetes","children":[]}]},{"level":2,"title":"第一步：将应用封装进容器中","slug":"第一步：将应用封装进容器中","link":"#第一步：将应用封装进容器中","children":[{"level":3,"title":"部署Harbor镜像仓库","slug":"部署harbor镜像仓库","link":"#部署harbor镜像仓库","children":[]},{"level":3,"title":"制作实验用的Docker镜像","slug":"制作实验用的docker镜像","link":"#制作实验用的docker镜像","children":[]},{"level":3,"title":"配置Docker仓库","slug":"配置docker仓库","link":"#配置docker仓库","children":[]},{"level":3,"title":"登录Harbor镜像仓库","slug":"登录harbor镜像仓库","link":"#登录harbor镜像仓库","children":[]},{"level":3,"title":"提交镜像到Registry","slug":"提交镜像到registry","link":"#提交镜像到registry","children":[]}]},{"level":2,"title":"Pod管理","slug":"pod管理","link":"#pod管理","children":[{"level":3,"title":"创建Service","slug":"创建service","link":"#创建service","children":[]},{"level":3,"title":"创建一个Headless Service","slug":"创建一个headless-service","link":"#创建一个headless-service","children":[]}]},{"level":2,"title":"10.1 Ingress Controller","slug":"_10-1-ingress-controller","link":"#_10-1-ingress-controller","children":[]},{"level":2,"title":"Ingress Controller Traefik","slug":"ingress-controller-traefik","link":"#ingress-controller-traefik","children":[{"level":3,"title":"部署Treafik","slug":"部署treafik","link":"#部署treafik","children":[]}]},{"level":2,"title":"7.1 Rancher快速入门","slug":"_7-1-rancher快速入门","link":"#_7-1-rancher快速入门","children":[]},{"level":2,"title":"7.2 使用Rancher进行日常管理","slug":"_7-2-使用rancher进行日常管理","link":"#_7-2-使用rancher进行日常管理","children":[]},{"level":2,"title":"7.3 Rancher生产集群部署","slug":"_7-3-rancher生产集群部署","link":"#_7-3-rancher生产集群部署","children":[{"level":3,"title":"Liveness探测","slug":"liveness探测","link":"#liveness探测","children":[]},{"level":3,"title":"Readiness探测","slug":"readiness探测","link":"#readiness探测","children":[]}]},{"level":2,"title":"健康检查的方法","slug":"健康检查的方法","link":"#健康检查的方法","children":[{"level":3,"title":"Pod的域名解析策略","slug":"pod的域名解析策略","link":"#pod的域名解析策略","children":[]}]},{"level":2,"title":"应用的DNS管理","slug":"应用的dns管理-1","link":"#应用的dns管理-1","children":[]},{"level":2,"title":"15.1 使用ConfigMap管理应用配置","slug":"_15-1-使用configmap管理应用配置","link":"#_15-1-使用configmap管理应用配置","children":[{"level":3,"title":"通过kubectl命令创建ConfigMap","slug":"通过kubectl命令创建configmap","link":"#通过kubectl命令创建configmap","children":[]},{"level":3,"title":"通过YAML文件创建ConfigMap","slug":"通过yaml文件创建configmap","link":"#通过yaml文件创建configmap","children":[]},{"level":3,"title":"通过文件创建ConfigMap","slug":"通过文件创建configmap","link":"#通过文件创建configmap","children":[]},{"level":3,"title":"从目录创建ConfigMap","slug":"从目录创建configmap","link":"#从目录创建configmap","children":[]},{"level":3,"title":"混合选项创建ConfigMap","slug":"混合选项创建configmap","link":"#混合选项创建configmap","children":[]},{"level":3,"title":"通过环境变量给容器传递ConfigMap","slug":"通过环境变量给容器传递configmap","link":"#通过环境变量给容器传递configmap","children":[]}]},{"level":2,"title":"15.2 使用Secret管理敏感数据","slug":"_15-2-使用secret管理敏感数据","link":"#_15-2-使用secret管理敏感数据","children":[{"level":3,"title":"配置Pod使用Harbor镜像","slug":"配置pod使用harbor镜像","link":"#配置pod使用harbor镜像","children":[]}]},{"level":2,"title":"Helm部署","slug":"helm部署","link":"#helm部署","children":[{"level":3,"title":"安装Helm","slug":"安装helm","link":"#安装helm","children":[]},{"level":3,"title":"使用Helm部署第一个应用","slug":"使用helm部署第一个应用","link":"#使用helm部署第一个应用","children":[]},{"level":3,"title":"Helm组件","slug":"helm组件","link":"#helm组件","children":[]},{"level":3,"title":"自定义Jenkins的Chart","slug":"自定义jenkins的chart","link":"#自定义jenkins的chart","children":[]}]},{"level":2,"title":"创建自己的Chart","slug":"创建自己的chart","link":"#创建自己的chart","children":[{"level":3,"title":"创建自定义Nginx的Chart","slug":"创建自定义nginx的chart","link":"#创建自定义nginx的chart","children":[]},{"level":3,"title":"查看Helm实例","slug":"查看helm实例","link":"#查看helm实例","children":[]}]},{"level":2,"title":"Prometheus快速入门","slug":"prometheus快速入门","link":"#prometheus快速入门","children":[{"level":3,"title":"Prometheus架构介绍","slug":"prometheus架构介绍","link":"#prometheus架构介绍","children":[]},{"level":3,"title":"安装Prometheus","slug":"安装prometheus","link":"#安装prometheus","children":[]},{"level":3,"title":"使用Node Exporter采集主机数据","slug":"使用node-exporter采集主机数据","link":"#使用node-exporter采集主机数据","children":[]},{"level":3,"title":"使用Prometheus UI查看数据","slug":"使用prometheus-ui查看数据","link":"#使用prometheus-ui查看数据","children":[]},{"level":3,"title":"使用Grafana进行数据可视化","slug":"使用grafana进行数据可视化","link":"#使用grafana进行数据可视化","children":[]}]},{"level":2,"title":"Taints（污点）","slug":"taints（污点）","link":"#taints（污点）","children":[{"level":3,"title":"自定义污点","slug":"自定义污点","link":"#自定义污点","children":[]}]},{"level":2,"title":"亲缘性调度","slug":"亲缘性调度","link":"#亲缘性调度","children":[{"level":3,"title":"使用Swagger UI进行API交互","slug":"使用swagger-ui进行api交互","link":"#使用swagger-ui进行api交互","children":[]}]}],"relativePath":"pages/posts/Docker+K8s实践指南.md","path":"/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker+K8s实践指南.md","lastUpdated":1671090556000}'),C={name:"pages/posts/Docker+K8s实践指南.md",data(){return{data:a,frontmatter:a.frontmatter}},setup(){p("pageData",a)}},u=s("h2",{id:"写在前面的话",tabindex:"-1"},[n("写在前面的话 "),s("a",{class:"header-anchor",href:"#写在前面的话","aria-hidden":"true"},"#")],-1),y=s("p",null,"不得不承认中国的IT行业已经进入了云计算时代，越来越多的企业开始使用弹性的云服务来支撑自己的业务。云计算是机遇也是挑战，作为运维人员需要面临云计算时代企业对运维需求的萎缩，以及对运维技术能力要求的大幅度提高的困境。",-1),h=s("p",null,"如果说云计算对运维行业的影响是第一波浪潮，那我认为容器技术的发展对本行业的影响算是第二波浪潮，目前几乎所有的企业招聘运维工程师都要求熟悉KVM、OpenStack、Docker和Kubernetes技术，各大公有云平台也都上线了容器服务Kubernetes版（AWS、Azure（全球版）阿里云、腾讯云、华为云、Ucloud、京东云、天翼云（公测阶段）等），掌握这些技术已经是大势所需。",-1),_=s("h2",{id:"参考文献",tabindex:"-1"},[n("参考文献 "),s("a",{class:"header-anchor",href:"#参考文献","aria-hidden":"true"},"#")],-1),D=s("ul",null,[s("li",null,[n("Docker官方文档："),s("a",{href:"https://docs.docker.com/",target:"_blank",rel:"noreferrer"},"https://docs.docker.com/")]),s("li",null,[n("Kubernetes官方文档："),s("a",{href:"https://kubernetes.io/docs/home/",target:"_blank",rel:"noreferrer"},"https://kubernetes.io/docs/home/")]),s("li",null,[n("OpenStack官方文档："),s("a",{href:"https://docs.openstack.org/",target:"_blank",rel:"noreferrer"},"https://docs.openstack.org/")]),s("li",null,[n("Prometheus官方文档："),s("a",{href:"https://prometheus.io/docs/introduction/overview/",target:"_blank",rel:"noreferrer"},"https://prometheus.io/docs/introduction/overview/")])],-1),g=s("h1",{id:"实验环境",tabindex:"-1"},[n("实验环境 "),s("a",{class:"header-anchor",href:"#实验环境","aria-hidden":"true"},"#")],-1),m=s("p",null,[s("strong",null,"硬件设备准备")],-1),b=s("ul",null,[s("li",null,"电脑一台，CPU支持VT，内存>4G，可用磁盘空间大于80G。"),s("li",null,"安装VMware Workstation Pro虚拟机软件，用于创建虚拟机。"),s("li",null,"创建三台虚拟机，安装CentOS-7.7-x86_64系统。")],-1),k=s("p",null,[s("strong",null,"实验环境详情")],-1),v=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"主机名"),s("th",null,"IP地址（NAT）"),s("th",null,"描述")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("a",{href:"http://linux-node1.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node1.linuxhot.com")]),s("td",null,"eth0:192.168.56.11"),s("td",null,"1VCPU、2G内存、一块硬盘sda50G（动态）")]),s("tr",null,[s("td",null,[s("a",{href:"http://linux-node2.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node2.linuxhot.com")]),s("td",null,"eth0:192.168.56.12"),s("td",null,"1VCPU、2G内存、一块硬盘sda50G（动态）")]),s("tr",null,[s("td",null,[s("a",{href:"http://linux-node3.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node3.linuxhot.com")]),s("td",null,"eth0:192.168.56.13"),s("td",null,"1VCPU、2G内存、一块硬盘sda50G（动态）")]),s("tr",null,[s("td",null,"备注"),s("td",null,"1.如何在安装的时候将网卡命名为eth0、eth1，请参考《附录一》。 2.其中linux-node3在学习Kubernetes中使用。"),s("td")])])],-1),x=s("p",null,[s("strong",null,"环境准备")],-1),f=s("ul",null,[s("li",null,"安装操作系统CentOS-7.7-x86_64。"),s("li",null,"基本系统：1VCPU+2048M内存+50G（动态）硬盘。"),s("li",null,"网络选择：使用网络地址转换（NAT）。"),s("li",null,"软件包选择：Minimal Install。"),s("li",null,"关闭iptables和SELinux。"),s("li",null,"设置所有节点的主机名和IP地址，同时使用内部DNS或者/etc/hosts做好主机名解析。")],-1),S=s("p",null,[s("strong",null,"实验小技巧")],-1),E=s("p",null,"[hide]",-1),P=s("ul",null,[s("li",null,"建议初学者保持实验环境和本书一致，包括但不局限于IP地址，主机名，网卡名称等，可以帮你节约很多因为环境问题的排错时间。"),s("li",null,"做好虚拟机的快照，比如可以根据本书的不同章节，创建不同的快照，便于保留实验环境和在实验过程中进行环境的回滚。"),s("li",null,"请不要把关注点仅仅放在实验环节，一定要在理解的基础上完成实验，对于不明白的地方需要反复阅读，或者根据本书前言提到的途径获取技术支持。 [/hide]")],-1),N=s("h1",{id:"附录一-实验环境准备",tabindex:"-1"},[n("附录一 实验环境准备 "),s("a",{class:"header-anchor",href:"#附录一-实验环境准备","aria-hidden":"true"},"#")],-1),R=s("p",null,[s("strong",null,"环境准备案例：")],-1),T=s("p",null,"**界面位置：**文件新建虚拟机，打开新建虚拟机选项，",-1),I=s("p",null,[s("strong",null,"创建虚拟机"),n("：请参考目录前实验环境章节，按要求创建虚拟机（创建步骤略）。")],-1),O=s("p",null,[s("strong",null,"操作系统安装：")],-1),M=s("p",null,"为了统一环境，保证实验的通用性，将网卡名称设置为eth*，不使用CentOS 7默认的网卡命名规则。所以需要在安装的时候，增加内核参数。",-1),w=s("p",null,"1)光标选择“Install CentOS 7”",-1),K=s("p",null,[s("img",{src:"http://k8s.unixhot.com/media/c4bb194b0f60ef7a32a7a4a269b31094.png",alt:"img"})],-1),L=s("p",null,"2)点击Tab，打开kernel启动选项后，增加net.ifnames=0 biosdevname=0，如下图所示。",-1),U=s("p",null,[s("img",{src:"http://k8s.unixhot.com/media/40432332febddc210781b55066a87252.png",alt:"img"})],-1),j=s("p",null,[s("strong",null,"安装完毕后设置：")],-1),G=s("p",null,"1.设置网络。",-1),H=s("p",null,"如果你的默认NAT地址段不是192.168.56.0/24可以修改VMware Workstation的配置，点击编辑虚拟网络配置，然后进行配置。",-1),F=s("p",null,[s("img",{src:"http://k8s.unixhot.com/media/b4ac2c94cc558e1150c8cc77ecd6ad13.png",alt:"img"})],-1),V=s("p",null,"2.设置IP地址，请配置静态IP地址。注意将UUID和MAC地址删除掉，便于进行虚拟机克隆。",-1),B=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# vim /etc/sysconfig/network-scripts/ifcfg-eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TYPE=Ethernet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"BOOTPROTO=static")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEFROUTE=yes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PEERDNS=no")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PEERROUTES=yes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IPV4_FAILURE_FATAL=no")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME=eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEVICE=eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ONBOOT=yes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IPADDR=192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NETMASK=255.255.255.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GATEWAY=192.168.56.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q=s("p",null,"重启网络服务",-1),Y=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# systemctl restart network")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),z=s("p",null,"3.关闭NetworkManager和防火墙开启自启动",-1),$=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl disable firewalld")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl disable NetworkManager")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),X=s("p",null,"4.设置主机名",-1),J=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# vi /etc/hostname")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W=s("p",null,"5.设置主机名解析",-1),Q=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat /etc/hosts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"::1 localhost localhost.localdomain localhost6 localhost6.localdomain6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11 linux-node1 linux-node1.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.12 linux-node2 linux-node2.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.13 linux-node3 linux-node3.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z=s("p",null,"6.设置DNS解析",-1),ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# vi /etc/resolv.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nameserver 192.168.56.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ns=s("p",null,"7.安装EPEL仓库和常用命令",-1),ls=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y net-tools vim lrzsz tree screen lsof tcpdump nc mtr nmap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),es=s("p",null,"8.关闭并确认SELinux处于关闭状态",-1),os=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/selinux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SELINUX=disabled #修改为disabled")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),as=s("p",null,"9.更新系统并重启",-1),ts=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum update -y && reboot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cs=s("p",null,"10.克隆虚拟机",-1),is=s("p",null,"请关闭虚拟机，并克隆当前虚拟机linux-node1到linux-node2，建议选择“创建完整克隆”，而不是“创建链接克隆”。克隆完毕后请给linux-node2设置正确的IP地址和主机名。",-1),rs=s("p",null,"11.给虚拟机做快照",-1),ps=s("p",null,"分别给两台虚拟机做快照。以便于随时回到一个刚初始化完毕的系统中。可以有效的减少学习过程中的环境准备时间。",-1),ds=s("h1",{id:"第一部分-cobbler自动化安装实践",tabindex:"-1"},[n("第一部分 Cobbler自动化安装实践 "),s("a",{class:"header-anchor",href:"#第一部分-cobbler自动化安装实践","aria-hidden":"true"},"#")],-1),As=s("h1",{id:"_1-自动化安装概述",tabindex:"-1"},[n("1 自动化安装概述 "),s("a",{class:"header-anchor",href:"#_1-自动化安装概述","aria-hidden":"true"},"#")],-1),Cs=s("p",null,"对于运维工程师来说，服务器上架和操作系统的安装，是实施运维工作的开始。对于自动化运维来说，自动化安装是实施自动化运维的第一步。面对大量的服务器设备，我们需要掌握如何快速，并且自动的将新上架的服务器安装上对应的操作系统、或者给已经在运行的服务器重新安装系统。而且很重要的是，从第一步开始，我们就要创建自己内部的软件仓库，而这一切的工作，Cobbler都可以完成。 对于Linux来说，我们通常使用PXE+KickStart的方式进行操作系统的自动化安装。那么首先需要先了解一下KickStart。",-1),us=s("h2",{id:"_1-1-pxe-kickstart介绍",tabindex:"-1"},[n("1.1 PXE+Kickstart介绍 "),s("a",{class:"header-anchor",href:"#_1-1-pxe-kickstart介绍","aria-hidden":"true"},"#")],-1),ys=s("h3",{id:"_1-1-1-kickstart工作原理",tabindex:"-1"},[n("1.1.1 KickStart工作原理 "),s("a",{class:"header-anchor",href:"#_1-1-1-kickstart工作原理","aria-hidden":"true"},"#")],-1),hs=s("p",null,"KickStart是Linux的一种无人职守的安装方式。KickStart的工作原理是通过记录典型的安装过程中所需人工干预填写的各种参数，并生成一个名为 ks.cfg的文件；这样在后面安装过程中当出现要求填写参数的情况时，安装程序会首先去查找 KickStart生成的文件，当找到合适的参数时，就采用找到的参数，当没有找到合适的参数时，才需要安装者手工干预。 如果KickStart文件涵盖了安装过程中出现的所有需要填写的参数时，那么就完全不需要人工干预，安装程序会根据ks.cfg中设置的选项自动进行安装，并通过设置重启选项来重启系统，并结束安装。那么如何让服务器开机就开始自动安装操作系统呢，我们要借助开机启动选项，比如从PXE启动。",-1),_s=s("h3",{id:"_1-1-2-pxe工作原理",tabindex:"-1"},[n("1.1.2 PXE工作原理 "),s("a",{class:"header-anchor",href:"#_1-1-2-pxe工作原理","aria-hidden":"true"},"#")],-1),Ds=s("p",null,"不管是服务器还是普通的PC机都支持多种启动方式，例如从硬盘、从U盘、从网络启动。而PXE是服务器开机启动的一种方式，也可以称之为网卡启动，因为进行PXE安装的必要条件是计算机上的网卡要支持PXE，即网卡中必须要有 PXE Client，不过不用担心基本上我们常见的服务器都支持这种方式。 首先我们需要了解下PXE的工作方式：PXE （Pre-boot Execution Environment）协议使计算机可以通过网络启动。PXE协议分为 Client 和 Server 端，PXE client 在网卡的 ROM 中，当计算机引导时，BIOS 把 PXE client 调入内存执行，由 PXE client 将放置在远端的文件通过网络下载到本地运行。 运行 PXE 协议需要设置 DHCP 服务器和 TFTP 服务器。DHCP 服务器用来给 PXE Client（将要安装系统的主机）分配一个 IP 地址，由于是给 PXE Client 分配 IP 地址，所以在配置 DHCP 服务器时需要增加相应的 PXE 设置。此外，在 PXE Client 的 ROM 中，已经存在了 TFTP Client。PXE Client 通过 TFTP 协议到 TFTP Server 上下载所需的文件。",-1),gs=s("h3",{id:"_1-1-3-pxe-kickstart工作流程",tabindex:"-1"},[n("1.1.3 PXE+Kickstart工作流程 "),s("a",{class:"header-anchor",href:"#_1-1-3-pxe-kickstart工作流程","aria-hidden":"true"},"#")],-1),ms=s("p",null,"下图显示了PXE+Kickstart的工作流程",-1),bs=s("p",null,"1.PXE Client发送DHCP请求到DHCP Server 2.DHCP Server提供相关信息包括IP地址和TFTP服务器的位置，以及要下载的文件。 3.PXE Client请求TFTP Server。 4.TFTP Server响应请求并将文件发送给PXE Client 5.PXE Client去下载对应的Kickstart文件，并根据Kickstart文件中的内容开始进行安装 6.安装操作系统。",-1),ks=s("h2",{id:"_1-2-制作本地yum仓库",tabindex:"-1"},[n("1.2 制作本地Yum仓库 "),s("a",{class:"header-anchor",href:"#_1-2-制作本地yum仓库","aria-hidden":"true"},"#")],-1),vs=s("p",null,"下面我们就要准备先手动来通过PXE+Kickstart来实现自动化的系统安装，那么首先需要有一个YUM仓库，而且是本地的。下面我就拿CentOS 7为例：",-1),xs=s("h3",{id:"_1-2-1-准备安装源",tabindex:"-1"},[n("1.2.1 准备安装源 "),s("a",{class:"header-anchor",href:"#_1-2-1-准备安装源","aria-hidden":"true"},"#")],-1),fs=s("ol",null,[s("li",null,[s("p",null,"安装需要软件包 我们使用HTTP的方式作为YUM仓库的安装源，需要首先安装Apache，其中createrepo 是一个对rpm 文件进行索引建立的工具。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y httpd createrepo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"下载iso镜像"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# wget https://mirrors.aliyun.com/centos/7.4.1708/isos/x86_64/CentOS-7-x86_64-DVD-1708.iso")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建yum仓库")])],-1),Ss=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mount -o loop /usr/local/src/CentOS-7-x86_64-DVD-1511.iso /mnt/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Es=s("blockquote",null,[s("p",null,"如果你使用VMWare Workstation创建虚拟机的时候设置了ISO镜像，可以不用下载，直接挂载使用。")],-1),Ps=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mount /dev/cdrom /mnt/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mount: /dev/sr0 is write-protected, mounting read-only")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ns=s("p",null,"在默认Apache的家目录下创建目录",-1),Rs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /var/www/html/CentOS-7.4-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp -a /mnt/* /var/www/html/CentOS-7.4-x86_64/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ts=s("ol",null,[s("li",null,[s("p",null,"准备Kickstart安装文件"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /var/www/html/CentOS-7-x86_64/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 CentOS-7-x86_64]# vim CentOS-7-x86_64.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Kickstart Configurator by Jason Zhao")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#platform=x86, AMD64, or Intel EM64T")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System  language")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lang en_US")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System keyboard")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"keyboard us")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Sytem timezone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"timezone Asia/Shanghai")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Root password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rootpw --iscrypted $1$example$I.i3m26O7QYNja8p5Cj9.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Use text mode install")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"text")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Install OS instead of upgrade")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"install")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Use NFS installation Media")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"url --url=http://192.168.56.11/CentOS-7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System bootloader configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'bootloader --location=mbr --driveorder=sda --append="net.ifnames=0 biosdevname=0"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Clear the Master Boot Record")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"zerombr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Partition clearing information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"clearpart --all --initlabel ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Disk partitioning information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"part /boot --fstype=xfs --size=1024")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'part swap --asprimary --fstype="swap" --size=1024')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"part / --fstype=xfs --size=1 --grow")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System authorization infomation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth  --useshadow  --enablemd5 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Network information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"network --bootproto=dhcp --device=eth0 --onboot=on --activate")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Reboot after installation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"reboot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Firewall configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"firewall --disabled ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#SELinux configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"selinux --disabled")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Service configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"services --disabled=postfix")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Do not configure XWindows")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"skipx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Package install information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%packages")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"@ base")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"@ core")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bash-completion")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sysstat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ntp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lrzsz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"openssl-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"zlib-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OpenIPMI-tools")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"screen")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%end")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),Is=s("h3",{id:"_1-2-2-配置tftp-server",tabindex:"-1"},[n("1.2.2 配置TFTP-Server "),s("a",{class:"header-anchor",href:"#_1-2-2-配置tftp-server","aria-hidden":"true"},"#")],-1),Os=s("p",null,"我们已经了解了PXE+Kickstart的原理，那么我们需要准备相关dhcp、tftp-server等。",-1),Ms=s("ol",null,[s("li",null,[s("p",null,"安装配置tftp-server"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y tftp-server xinetd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/xinetd.d/tftp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"disable                 = no（修改为no）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"准备安装需要的文件"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y syslinux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /var/lib/tftpboot/pxelinux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/pxelinux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp /mnt/isolinux/* /var/lib/tftpboot/pxelinux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp /mnt/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/pxelinux/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),ws=s("p",null,"在tftpboot下创建pxelinux.cfg目录",-1),Ks=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /var/lib/tftpboot/pxelinux/pxelinux.cfg ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp /mnt/isolinux/isolinux.cfg /var/lib/tftpboot/pxelinux/pxelinux.cfg/default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ls=s("ol",null,[s("li",null,"修改default配置，指定网站安装的kickstart文件")],-1),Us=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /var/lib/tftpboot/pxelinux.cfg/default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…省略…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#在label linux上面增加自动化安装的配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"label ks")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  menu label ^Auto Install CentOS 7")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kernel vmlinuz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  append initrd=initrd.img ip=dhcp inst.repo=http://192.168.56.11/CentOS-7-x86_64/ inst.ks=http://192.168.56.11/CentOS-7-x86_64/CentOS-7-x86_64.cfg net.ifnames=0 biosdevname=0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),js=s("ol",null,[s("li",null,[s("p",null,"配置DHCP Server"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y dhcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# /bin/cp /usr/share/doc/dhcp-4.2.5/dhcpd.conf.example /etc/dhcp/dhcpd.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/dhcp/dhcpd.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'option domain-name "devopsedu.com";')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"option domain-name-servers 192.168.56.2;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#请删除其他的subnet配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subnet 192.168.56.0 netmask 255.255.255.0 {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     range dynamic-bootp 192.168.56.100 192.168.56.200;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     option subnet-mask              255.255.255.0;  #设置子网掩码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"option routers                  192.168.56.2;    #设置网关")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     next-server                     192.168.56.11;   #设置TFTP-Server地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'     filename                        "pxelinux/pxelinux.0";   #设置TFTP需要下载的文件')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"启动httpd、tftp和dhcpd服务"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start xinetd.service dhcpd.service httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"检查服务是否启动"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Active Internet connections (only servers)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      871/sshd            ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6       0      0 :::80                   :::*                    LISTEN      1321/httpd          ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6       0      0 :::22                   :::*                    LISTEN      871/sshd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),Gs=s("p",null,"查看dhcpd和tftpd是否启动",-1),Hs=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -nulp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Active Internet connections (only servers)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"udp        0      0 0.0.0.0:67              0.0.0.0:*                           1487/dhcpd          ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"udp        0      0 0.0.0.0:69              0.0.0.0:*                           1486/xinetd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fs=s("h3",{id:"_1-2-4-自动化安装和流程总结",tabindex:"-1"},[n("1.2.4 自动化安装和流程总结 "),s("a",{class:"header-anchor",href:"#_1-2-4-自动化安装和流程总结","aria-hidden":"true"},"#")],-1),Vs=s("p",null,"现在就可以新创建一台虚拟机来进行测试了，记着选择网卡启动。DHCP后，就可以看到安装页面。我们刚才添加的Auto Install CentOS 也可以看到了。",-1),Bs=s("p",null,'下面我们可以来总结下PXE+KickStart的安装流程了： 需要经历以下的过程： 1.网卡上的PXE芯片有512字节，存放了DHCP和TFTP的客户端。 2.启动计算机选择网卡启动。 3.PXE上的DHCP客户端会向DHCP服务器，申请IP地址 4.DHCP服务器分配给它IP地址的同时通过以下字段，告诉pxe，TFTP的地址和它要下载的文件 next-server 192.168.56.11； filename "pxelinux.0"； 5.pxelinux.0告诉PXE要下载的配置文件是pxelinux.cfg目录下面的default 6.pxe下载并依据配置文件的内容下载启动必须的文件，并通过ks.cfg配置内容开始系统安装。',-1),qs=s("p",null,[s("strong",null,"我们都干了什么"),n(" 所以我们看到设置一个网络环境可能涉及到许多步骤，才能为开始安装做好准备。您必须：")],-1),Ys=s("ul",null,[s("li",null,[s("p",null,"配置服务，比如 DHCP、TFTP、DNS、HTTP、FTP 和 NFS")]),s("li",null,[s("p",null,"在 DHCP 和 TFTP 配置文件中填入各个客户端机器的信息")]),s("li",null,[s("p",null,"创建自动部署文件（比如 kickstart 和 autoinst）")]),s("li",null,[s("p",null,[n("将安装媒介解压缩到 HTTP/FTP/NFS 存储库中。 这个过程并不简单，甚至可以说复杂，我们要自己管理和创建不同的操作系统版本、手动管理DHCP等，那么如何能让我们有一个功能强大，更实用的自动化装机平台，开源社区给了我们答案就是Cobbler。 官方网站："),s("a",{href:"http://cobbler.github.io/",target:"_blank",rel:"noreferrer"},"http://cobbler.github.io/")])])],-1),zs=s("h1",{id:"_2-cobbler快速入门",tabindex:"-1"},[n("2 Cobbler快速入门 "),s("a",{class:"header-anchor",href:"#_2-cobbler快速入门","aria-hidden":"true"},"#")],-1),$s=s("p",null,"使用 Cobbler，您无需进行人工干预即可安装机器。Cobbler设置一个PXE引导环境，并控制与安装相关的所有软件和环境准备，比如网络引导服务（DHCP 和 TFTP）与存储库镜像。当希望安装一台新机器时，Cobbler 可以：",-1),Xs=s("ul",null,[s("li",null,"使用一个以前定义的模板来配置 DHCP 服务（如果启用了管理 DHCP）"),s("li",null,"将一个存储库（yum 或 rsync）建立镜像或解压缩一个媒介，以注册一个新操作系统"),s("li",null,"在 DHCP 配置文件中为需要安装的机器创建一个条目，并使用您指定的参数（IP 和 MAC 地址）"),s("li",null,"在 TFTFP 服务目录下创建适当的 PXE 文件"),s("li",null,"重新启动 DHCP 服务以反映更改"),s("li",null,"重新启动机器以开始安装（如果电源管理已启用）")],-1),Js=s("h2",{id:"_2-1-cobbler部署",tabindex:"-1"},[n("2.1 Cobbler部署 "),s("a",{class:"header-anchor",href:"#_2-1-cobbler部署","aria-hidden":"true"},"#")],-1),Ws=s("h3",{id:"_2-1-1-cobbler功能",tabindex:"-1"},[n("2.1.1 Cobbler功能 "),s("a",{class:"header-anchor",href:"#_2-1-1-cobbler功能","aria-hidden":"true"},"#")],-1),Qs=s("p",null,"Cobbler 支持众多的发行版：Red Hat、Fedora、CentOS、Debian、Ubuntu 和 SuSE。当添加一个操作系统（通常通过使用 ISO 文件）时，Cobbler 知道如何解压缩合适的文件并调整网络服务，以正确引导机器。",-1),Zs=s("p",null,[n("Cobbler 可使用 kickstart 模板。基于 Red Hat 或 Fedora 的系统使用 kickstart 文件来自动化安装流程。通过使用模板，您就会拥有基本的 kickstart 模板，然后定义如何针对一种配置文件或机器配置而替换其中的变量。例如，一个模板可能包含两个变量 $domain 和 $machine_name。在 Cobbler 配置中，一个配置文件指定 "),s("a",{href:"http://domain=mydomain.com",target:"_blank",rel:"noreferrer"},"domain=mydomain.com"),n("，并且每台使用该配置文件的机器在 machine_name 变量中指定其名称。该配置文件中的所有机器都使用相同的 kickstart 安装且针对 "),s("a",{href:"http://domain=mydomain.com",target:"_blank",rel:"noreferrer"},"domain=mydomain.com"),n(" 进行配置，但每台机器拥有其自己的机器名称。您仍然可以使用 kickstart 模板在不同的域中安装其他机器并使用不同的机器名称。")],-1),sn=s("p",null,"使用 koan 客户端，Cobbler 可从客户端配置虚拟机并重新安装系统。我不会讨论配置管理和 koan 特性，因为它们不属于本文的介绍范畴。但是，它们是值得研究的有用特性。",-1),nn=s("h3",{id:"_2-1-2-cobbler安装",tabindex:"-1"},[n("2.1.2 Cobbler安装 "),s("a",{class:"header-anchor",href:"#_2-1-2-cobbler安装","aria-hidden":"true"},"#")],-1),ln=s("ol",null,[s("li",null,"安装EPEL源")],-1),en=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),on=s("ul",null,[s("li",null,"yum安装cobbler")],-1),an=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y httpd dhcp tftp python-ctypes cobbler cobbler-web pykickstart fence-agents xinetd debmirror")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tn=s("ol",null,[s("li",null,"启动并配置cobbler")],-1),cn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable httpd cobblerd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start httpd cobblerd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rn=s("ul",null,[s("li",null,"下载Cobbler需要的启动文件")],-1),pn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler get-loaders")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dn=s("ul",null,[s("li",null,"检查Cobbler状态")],-1),An=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler check")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"The following are potential configuration items that you may want to fix:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 : The 'server' field in /etc/cobbler/settings must be set to something other than localhost, or kickstarting features will not work.  This should be a resolvable hostname or IP for the boot server as reachable by all machines that will use it.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2 : For PXE to be functional, the 'next_server' field in /etc/cobbler/settings must be set to something other than 127.0.0.1, and should match the IP of the boot server on the PXE network.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3 : change 'disable' to 'no' in /etc/xinetd.d/tftp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"4 : enable and start rsyncd.service with systemctl")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5 : comment out 'dists' on /etc/debmirror.conf for proper debian support")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6 : comment out 'arches' on /etc/debmirror.conf for proper debian support")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`7 : The default password used by the sample templates for newly installed machines (default_password_crypted in /etc/cobbler/settings) is still set to 'cobbler' and should be changed, try: "openssl passwd -1 -salt 'random-phrase-here' 'your-password-here'" to generate new one`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Restart cobblerd and then run 'cobbler sync' to apply changes.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cn=s("p",null,"这段话的意思就是需要处理上面的所有问题，然后重启cobblerd服务，然后执行cobbler sync同步修改操作。",-1),un=s("p",null,[s("strong",null,"将上面提到的7个问题进行修复")],-1),yn=s("ul",null,[s("li",null,"问题1和2解决")],-1),hn=s("p",null,"均是需要修改cobbler的配置文件。",-1),_n=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/cobbler/settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#修改以下两行即可，可以直接搜索127.0.0.1来定位")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server: 192.168.56.11   #设置cobbler server的IP地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"next_server: 192.168.56.11  #设置PXE server的IP地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dn=s("ul",null,[s("li",null,"问题3解决")],-1),gn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/xinetd.d/tftp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service tftp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        socket_type             = dgram")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        protocol                = udp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        wait                    = yes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        user                    = root")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        server                  = /usr/sbin/in.tftpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        server_args             = -s /var/lib/tftpboot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        disable                 = no")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        per_source              = 11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        cps                     = 100 2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        flags                   = IPv4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mn=s("ul",null,[s("li",null,"问题4解决")],-1),bn=s("p",null,"启动rsyncd服务，并设置开机自动启动",-1),kn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable rsyncd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start rsyncd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vn=s("ul",null,[s("li",null,"问题5、6解决")],-1),xn=s("p",null,"安装debmirror是debian系列系统使用的",-1),fn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y debmirror")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/debmirror.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#请注释掉下面两行配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'#@dists="sid";')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'#@arches="i386"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sn=s("ul",null,[s("li",null,"问题7解决")],-1),En=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openssl passwd -1 -salt 'example' 'devopsedu.com'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$1$example$I.i3m26O7QYNja8p5Cj9.0 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# vim /etc/cobbler/settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"将下面字段替换为上面生成的字段：")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'default_password_crypted: "$1$example$I.i3m26O7QYNja8p5Cj9.0"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart cobblerd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pn=s("ul",null,[s("li",null,"再次检查Cobbler")],-1),Nn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," [root@ops-node1 ~]# cobbler check")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"No configuration problems found.  All systems go.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rn=s("h3",{id:"_2-1-3-cobbler管理dhcp",tabindex:"-1"},[n("2.1.3 Cobbler管理DHCP "),s("a",{class:"header-anchor",href:"#_2-1-3-cobbler管理dhcp","aria-hidden":"true"},"#")],-1),Tn=s("ol",null,[s("li",null,"开启管理DHCP服务，这样Cobbler就可以接管DHCP的管理工作")],-1),In=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# vim /etc/cobbler/settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"manage_dhcp: 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),On=s("ol",null,[s("li",null,"首先修改dhcp的配置文件")],-1),Mn=s("p",null,"修改dhcp的模板配置文件，设置相对应的DHCP的IP地址和分配的网段。",-1),wn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# vim /etc/cobbler/dhcp.template ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subnet 192.168.56.0 netmask 255.255.255.0 {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     option routers             192.168.56.2;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     option domain-name-servers 192.168.56.2;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     option subnet-mask         255.255.255.0;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     range dynamic-bootp        192.168.56.100 192.168.56.254;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     default-lease-time         21600;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     max-lease-time             43200;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"     next-server                $next_server;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  …")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kn=s("p",null,"重启Cobbler并进行同步操作",-1),Ln=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart cobblerd ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler sync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Un=s("blockquote",null,[s("p",null,"执行完毕cobbler sync后，会自动生成/etc/dhcpd.conf。并重启dhcp服务。所以说使用Cobbler管理DHCP后，请勿修改/etc/dhcpd.conf。以后所有dhcp相关的配置都是修改Cobbler的DHCP模板文件/etc/cobbler/dhcp.template。")],-1),jn=s("h3",{id:"_2-1-4-cobbler导入镜像",tabindex:"-1"},[n("2.1.4 Cobbler导入镜像 "),s("a",{class:"header-anchor",href:"#_2-1-4-cobbler导入镜像","aria-hidden":"true"},"#")],-1),Gn=s("ol",null,[s("li",null,"下载并导入镜像")],-1),Hn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# wget https://mirror.tuna.tsinghua.edu.cn/centos/7.7.1908/isos/x86_64/CentOS-7-x86_64-Minimal-1908.iso")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# mmount -o loop /usr/local/src/CentOS-7-x86_64-Minimal-1908.iso /mnt/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# cobbler import --path=/mnt/ --name=CentOS-7.7-x86_64 --arch=x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fn=s("p",null,[s("strong",null,"参数说明:")],-1),Vn=s("ul",null,[s("li",null,"--name 为安装源定义一个名字"),s("li",null,"--arch 指定安装源是32位还是64位、ia64, 目前支持的选项有: x86│x86_64│ia64")],-1),Bn=s("blockquote",null,[s("p",null,"小提示：Cobbler 会把安装的镜像ISO拷贝到源安装镜像目录下: /var/www/cobbler/ks_mirror/")],-1),qn=s("ol",null,[s("li",null,"查看导入后结果")],-1),Yn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"distros:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   CentOS-7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"profiles:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   CentOS-7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zn=s("h3",{id:"_2-1-5-自定义kickstart文件",tabindex:"-1"},[n("2.1.5 自定义kickstart文件 "),s("a",{class:"header-anchor",href:"#_2-1-5-自定义kickstart文件","aria-hidden":"true"},"#")],-1),$n=s("p",null,"Cobbler的Kickstart文件和默认的不同，我们需要修改，主要是增加上Cobbler的变量。导入镜像后，我们一般会自定义kickstart文件给这个镜像。首先可以将自定义后的Cobbler的kickstart文件放置在/var/lib/cobbler/kickstarts目录下，这也是Cobbler的默认存放kickstart文件的地方。",-1),Xn=s("ol",null,[s("li",null,"自定义Kickstart文件")],-1),Jn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /var/lib/cobbler/kickstarts/CentOS-7.7-x86_64-Cobbler.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Kickstart Configurator by Jason Zhao")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#platform=x86, AMD64, or Intel EM64T")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System  language")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lang en_US")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System keyboard")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"keyboard us")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Sytem timezone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"timezone Asia/Shanghai")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Root password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rootpw --iscrypted $default_password_crypted")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Use text mode install")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"text")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Install OS instead of upgrade")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"install")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Use NFS installation Media")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"url --url=$tree")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System bootloader configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'bootloader --location=mbr --driveorder=sda --append="net.ifnames=0 biosdevname=0"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Clear the Master Boot Record")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"zerombr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Partition clearing information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"clearpart --all --initlabel ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Disk partitioning information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"part /boot --fstype=xfs --size=1024")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'part swap --asprimary --fstype="swap" --size=1024')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"part / --fstype=xfs --size=1 --grow")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#System authorization infomation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth  --useshadow  --enablemd5 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Network information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('network_config')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Reboot after installation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"reboot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Firewall configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"firewall --disabled ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#SELinux configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"selinux --disabled")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Service configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"services --disabled=postfix")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Do not configure XWindows")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"skipx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Package install information")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%pre")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('log_ks_pre')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('kickstart_start')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('pre_install_network_config')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Enable installation monitoring")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('pre_anamon')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%end")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%packages")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"@ base")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"@ core")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bash-completion")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sysstat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ntp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lrzsz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"openssl-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"zlib-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OpenIPMI-tools")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"screen")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%end")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wn=s("ol",null,[s("li",null,"然后编辑profile来制定kickstart文件。")],-1),Qn=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# cobbler profile edit --name=CentOS-7.7-x86_64 --kickstart=/var/lib/cobbler/kickstarts/CentOS-7.7-x86_64-Cobbler.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Zn=s("ol",null,[s("li",null,"增加安装时的内核参数")],-1),sl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ops-node1 ~]# cobbler profile edit --name=CentOS-7.7-x86_64 --kopts='net.ifnames=0 biosdevname=0'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nl=s("ol",null,[s("li",null,"最后，一定要执行同步，才能将Cobbler设置完成")],-1),ll=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler sync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),el=s("h2",{id:"_2-2-使用cobbler自动化安装centos",tabindex:"-1"},[n("2.2 使用Cobbler自动化安装CentOS "),s("a",{class:"header-anchor",href:"#_2-2-使用cobbler自动化安装centos","aria-hidden":"true"},"#")],-1),ol=s("p",null,"现在我们就可以使用Cobbler进行安装了。实验环境下，你可以新创建一个虚拟机（注意网卡的选择）来进行测试了。Cobbler非常人性化的创建了一个Local，即使从硬盘启动，这样也避免了有服务器从网卡启动开始自动安装的问题。",-1),al=s("h3",{id:"_2-2-1-使用cobbler安装centos",tabindex:"-1"},[n("2.2.1 使用Cobbler安装CentOS "),s("a",{class:"header-anchor",href:"#_2-2-1-使用cobbler安装centos","aria-hidden":"true"},"#")],-1),tl=s("ol",null,[s("li",null,"启动物理服务器"),s("li",null,"选择CentOS-7.7-x86_64之后即可重新开始安装。")],-1),cl=s("blockquote",null,[s("p",null,"在生产环境如果想要自动开始安装，我们的通常做法是有一个专门进行服务器安装的VLAN，安装完毕后，进入待调配状态，然后根据流程进入到生产环境。但是提醒大家，自动化开始进行操作系统安装风险依然很大。")],-1),il=s("h3",{id:"_2-2-2-koan重新安装系统",tabindex:"-1"},[n("2.2.2 Koan重新安装系统 "),s("a",{class:"header-anchor",href:"#_2-2-2-koan重新安装系统","aria-hidden":"true"},"#")],-1),rl=s("p",null,"在实践的运维工作中，你肯定需要重新安装操作系统，有了Cobbler你就不用去机房了，直接使用Koan就可以进行自动化重新安装操作系统。需要再待重装的服务器上安装koan。",-1),pl=s("p",null,"安装Koan软件包",-1),dl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# yum install -y koan")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Al=s("p",null,"列出可以安装的系统",-1),Cl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# koan --server=192.168.56.11 --list=profiles")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- looking for Cobbler at http://192.168.56.11:80/cobbler_api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CentOS-7.7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ul=s("p",null,"指定需要重新安装的操作系统",-1),yl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# koan --replace-self --server=192.168.56.11 --profile=CentOS-7.7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- looking for Cobbler at http://192.168.56.11:80/cobbler_api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- reading URL: http://192.168.56.11/cblr/svc/op/ks/profile/CentOS-7.7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"install_tree: http://192.168.56.11/cblr/links/CentOS-7.7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"downloading initrd initrd.img to /boot/initrd.img_koan")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"url=http://192.168.56.11/cobbler/images/CentOS-7.7-x86_64/initrd.img")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- reading URL: http://192.168.56.11/cobbler/images/CentOS-7.7-x86_64/initrd.img")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"downloading kernel vmlinuz to /boot/vmlinuz_koan")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"url=http://192.168.56.11/cobbler/images/CentOS-7.7-x86_64/vmlinuz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- reading URL: http://192.168.56.11/cobbler/images/CentOS-7.4-x86_64/vmlinuz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`- ['/sbin/grubby', '--add-kernel', '/boot/vmlinuz_koan', '--initrd', '/boot/initrd.img_koan', '--args', '"ksdevice=link lang= text net.ifnames=0 ks=http://192.168.56.11/cblr/svc/op/ks/profile/CentOS-7.4-x86_64 biosdevname=0 kssendmac "', '--copy-default', '--make-default', '--title=kick1526449287']`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- ['/sbin/grubby', '--update-kernel', '/boot/vmlinuz_koan', '--remove-args=root']")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- reboot to apply changes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hl=s("p",null,"如下图所示，Koan会创建一个新的启动选项，重启后，直接开始自动安装。",-1),_l=s("p",null,"我们先不要执行reboot先研究下是如何实现的。你打开Grub的配置文件",-1),Dl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# vim /boot/grub2/grub.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"你会发现这样的配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"menuentry 'kick1526449287' --class centos --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.10.0-693.el7.x86_64-advanced-49e658db-2c61-475a-9325-903fdbeb7cd4' {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        load_video")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        set gfxpayload=keep")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        insmod gzio")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        insmod part_msdos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        insmod xfs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        set root='hd0,msdos1'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        if [ x$feature_platform_search_hint = xy ]; then")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          search --no-floppy --fs-uuid --set=root --hint-bios=hd0,msdos1 --hint-efi=hd0,msdos1 --hint-baremetal=ahci0,msdos1 --hint='hd0,msdos1'  0a801c26-5320-448d-b261-883499529bc6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        else")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          search --no-floppy --fs-uuid --set=root 0a801c26-5320-448d-b261-883499529bc6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        fi")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        linux16 /vmlinuz_koan ro crashkernel=auto biosdevname=0 net.ifnames=0 rhgb quiet LANG=en_US.UTF-8 ksdevice=link lang= text net.ifnames=0 ks=http://192.168.56.11/cblr/svc/op/ks/profile/CentOS-7.4-x86_64 biosdevname=0 kssendmac")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        initrd16 /initrd.img_koan")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"也就是说，koan帮我们下载了安装需要的文件，并且修改了Grub的开机启动选项，增加了安装的配置，并且设置为默认启动选项，这样我们执行重启默认就开始安装了。现在执行重启来验证一下。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@hadoop-node1 ~]# reboot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gl=s("p",null,"你可以看到如下图所示的界面，然后开始进行自动化重新安装。",-1),ml=s("h2",{id:"_2-3-cobbler-web介绍",tabindex:"-1"},[n("2.3 Cobbler Web介绍 "),s("a",{class:"header-anchor",href:"#_2-3-cobbler-web介绍","aria-hidden":"true"},"#")],-1),bl=s("p",null,[n("Cobbler还提供了可视化的Web节界面叫做Cobbler Web。我们使用yum安装完毕后，会再/etc/http/conf.d/目录下生成cobbler_web.conf配置文件，可以通过"),s("a",{href:"https://ip/cobbler_web%E6%9D%A5%E8%BF%9B%E8%A1%8C%E8%AE%BF%E9%97%AE%E3%80%82",target:"_blank",rel:"noreferrer"},"https://IP/cobbler_web来进行访问。")],-1),kl=s("ol",null,[s("li",null,[s("p",null,"安装Cobbler Web"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y cobbler-web")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"配置Cobbler Web")])],-1),vl=s("p",null,"Cobbler web的权限管理有两个配置文件 /etc/cobbler/users.conf和/etc/cobbler/users.digest 后者为Cobbler权限配置文件，我们需要使用htdigest来为用户设置密码",-1),xl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# htdigest  /etc/cobbler/users.digest "Cobbler" cobbler')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Changing password for user cobbler in realm Cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"New password: ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Re-type new password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fl=s("p",null,[n("然后就可以使用cobbler用户和你设置的密码登陆了。 "),s("a",{href:"https://192.168.56.11/cobbler_web",target:"_blank",rel:"noreferrer"},"https://192.168.56.11/cobbler_web")],-1),Sl=s("h2",{id:"_2-4-深入理解cobbler",tabindex:"-1"},[n("2.4 深入理解Cobbler "),s("a",{class:"header-anchor",href:"#_2-4-深入理解cobbler","aria-hidden":"true"},"#")],-1),El=s("p",null,"经过前面的内容，我们已经可以顺利的使用Cobbler进行操作系统的安装，使用Koan进行操作系统自动重新安装的操作了，那么我们还需要更多的掌握一些Cobbler的知识，才能在生产的应用中，更如鱼得水。",-1),Pl=s("h3",{id:"_2-4-1-cobbler-配置文件",tabindex:"-1"},[n("2.4.1 Cobbler 配置文件 "),s("a",{class:"header-anchor",href:"#_2-4-1-cobbler-配置文件","aria-hidden":"true"},"#")],-1),Nl=s("ol",null,[s("li",null,"Cobbler的目录 Cobbler安装完毕后会在系统生成如下目录：")],-1),Rl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# find / -name cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/etc/selinux/targeted/active/modules/100/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/etc/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/lib/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/log/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/www/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/bin/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/lib/python2.7/site-packages/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/share/cobbler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tl=s("ol",null,[s("li",null,"Cobbler配置文件目录")],-1),Il=s("p",null,"Cobbler的配置文件存放在/etc/cobbler下。",-1),Ol=s("ul",null,[s("li",null,"/etc/cobbler/settings为主配置文件；"),s("li",null,"在/etc/cobbler下你还能看到dhcp、dns、pxe、dnsmasq的模板配置文件；"),s("li",null,"/etc/cobbler/users.digest为用于web访问的用户名密码配置文件；"),s("li",null,"/etc/cobbler/modules.conf 为模块配置文件；"),s("li",null,"/etc/cobbler/users.conf为Cobbler WebUI/Web service授权配置文件。"),s("li",null,"修改Cobbler提示")],-1),Ml=s("p",null,"如果你想修改Cobbler的提示，可以直接编辑下面文件。",-1),wl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@test-node1 ~]# vim /etc/cobbler/pxe/pxedefault.template")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DEFAULT menu")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PROMPT 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MENU TITLE DevOpsEDU | http://www.devopsedu.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TIMEOUT 200")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TOTALTIMEOUT 6000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ONTIMEOUT $pxe_timeout_profile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LABEL local")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        MENU LABEL (local)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        MENU DEFAULT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        LOCALBOOT -1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$pxe_menu_items")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MENU end")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kl=s("ol",null,[s("li",null,"Cobbler数据目录/var/lib/cobbler，")],-1),Ll=s("p",null,"此目录存储和Cobbler profiles、systems、distros相关的配置。",-1),Ul=s("ul",null,[s("li",null,"configs/ - 此目录用于存储distros、repos、systems和profiles相关信息。"),s("li",null,"backup/ - 备份目录"),s("li",null,"snippets/ - 用于放置一些可以在kickstarts导入的脚本小片段"),s("li",null,"triggers/ - 此目录用来放置一些可执行脚本"),s("li",null,"kickstarts/ - 此目录用来放置kickstart模板文件"),s("li",null,"Repo数据目录/var/www/cobbler")],-1),jl=s("p",null,"导入的发行版，repos镜像和kickstart文件都放置在/var/www/cobbler目录下。确保/var目录有足够的空间来存储这些文件。",-1),Gl=s("ul",null,[s("li",null,"images/ - 存储所有导入发行版的Kernel和initrd镜像用于远程网络启动"),s("li",null,"ks_mirror/ - 存储导入的发行版"),s("li",null,"repo_mirror/ - yum repos存储目录"),s("li",null,"Cobbler日志目录")],-1),Hl=s("p",null,"/var/log/cobbler用于存放日志文件/var/log/cobbler/cobbler.log",-1),Fl=s("h3",{$cs:"",id:"_2-4-2-cobbler设计方式",tabindex:"-1"},[n("2.4.2 Cobbler设计方式 "),s("a",{class:"header-anchor",href:"#_2-4-2-cobbler设计方式","aria-hidden":"true"},"#")],-1),Vl=s("p",null,"Cobbler 有多个对象组成的，对象和对象之间可以相互引用：",-1),Bl=s("ul",null,[s("li",null,"Repo（存储库）：保存一个 yum 或 rsync 存储库的镜像信息。例如我们可以将Zabbix的软件仓库同步到我们本地，就是一个Repo。"),s("li",null,"Distro（发行版）：表示一个操作系统。它承载了内核和 initrd 的信息，以及内核参数等其他数据。"),s("li",null,"profile（配置文件）：包含一个distro（发行版）、一个 kickstart 文件以及可能的Repo（存储库），还包含更多特定的内核参数等其他数据。"),s("li",null,"system（系统）：表示要安装的机器。它包含一个配置文件或一个镜像，还包含 IP 和 MAC 地址、电源管理（地址、凭据、类型）以及更为专业的数据等信息。"),s("li",null,"Image（镜像）：可替换一个包含不属于此类别的文件的发行版对象（例如，无法分为内核和 initrd 的对象）。 基于注册的对象以及各个对象之间的关联，Cobbler 知道如何更改文件系统以反映具体配置。因为系统配置的内部是抽象的，所以您可以仅关注想要执行的操作。")],-1),ql=s("h3",{id:"_2-4-3-cobbler-distro",tabindex:"-1"},[n("2.4.3 Cobbler distro "),s("a",{class:"header-anchor",href:"#_2-4-3-cobbler-distro","aria-hidden":"true"},"#")],-1),Yl=s("p",null,"使用Cobbler的第一步就是定义Distro，回想下我们最早执行的cobbler import，就会帮我们创建一个distro，我们可以使用下面的命令进行查看：",-1),zl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler distro list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   CentOS-7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$l=s("p",null,"Cobbler所有的命令都可以使用help这样的方式获取帮助。",-1),Xl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler distro help")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"usage")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"=====")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro add")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro copy")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro edit")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro find")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro remove")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro rename")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cobbler distro report")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jl=s("p",null,"我们可以使用report命令来看distro都包含哪些内容。",-1),Wl=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler distro report")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name                           : CentOS-7.7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Architecture                   : x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TFTP Boot Files                : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Breed                          : redhat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Comment                        : ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Fetchable Files                : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Initrd                         : /var/www/cobbler/ks_mirror/CentOS-7.7-x86_64/images/pxeboot/initrd.img")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kernel                         : /var/www/cobbler/ks_mirror/CentOS-7.7-x86_64/images/pxeboot/vmlinuz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kernel Options                 : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kernel Options (Post Install)  : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kickstart Metadata             : {'tree': 'http://@@http_server@@/cblr/links/CentOS-7.7-x86_64'}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Management Classes             : []")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OS Version                     : rhel7")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Owners                         : ['admin']")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Red Hat Management Key         : <<inherit>>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Red Hat Management Server      : <<inherit>>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Template Files                 : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  可以看到distro定义的仅仅是我们要安装操作系统发行版的kernel和initrd。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ql=s("h3",{id:"_2-1-4-cobbler-profile",tabindex:"-1"},[n("2.1.4 Cobbler profile "),s("a",{class:"header-anchor",href:"#_2-1-4-cobbler-profile","aria-hidden":"true"},"#")],-1),Zl=s("p",null,"那么在cobbler import的同时也默认创建了一个和distro同名的profile，那么cobbler profile里面包括了distribution、kickstart file和repo。我们也可以把profile理解为一个配置集合，比如在distro的基础上增加可一个kiskstart文件来生成一个特定的系统安装配置。 比如前面我们多次使用cobbler profile edit为指定的Profile设置kickstart文件和内核参数，profile的名称即使我们在使用cobbler进行自动化安装选择的菜单名称。",-1),se=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler profile report")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ne=s("h3",{id:"_2-1-5cobbler-repo",tabindex:"-1"},[n("2.1.5Cobbler repo "),s("a",{class:"header-anchor",href:"#_2-1-5cobbler-repo","aria-hidden":"true"},"#")],-1),le=s("p",null,"Cobbler repos可以帮我们管理yum仓库，把创建企业内部的yum源变成了一件极其简单的工作，比如通常生成环境我们想把EPEL仓库同步到本地，这样就避免每次安装软件包占用公网贷款。 添加EPEL源：",-1),ee=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# cobbler repo add --name=CentOS-7-x86_64-epel \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--mirror=http://mirrors.aliyun.com/epel/7/x86_64/ --arch=x86_64 --breed=wget")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),oe=s("p",null,"参数说明: --name 为安装源定义一个名字 --arch 指定安装源是32位还是64位、ia64, 目前支持的选项有: x86│x86_64│ia64 reposync 操作很重要，因为它会从远程存储库中复制文件。如果创建了存储库对象但未运行 reposync，那么您的存储库将是空的，而且您的安装可能会失败。 根据需要同步的仓库大小，注意硬盘空间，第一次同步时间比较长，建议放到screen里面允许。",-1),ae=s("p",null,"添加repo到profile 把我们自定义的repo添加到对应的profile后，那么使用对应profile安装的机器，默认就会添加该repo，前提是需要进行设置",-1),te=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# cobbler profile edit --name=CentOS-7-x86_64 --repos="openstack-liberty"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/cobbler/settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"yum_post_install_mirror: 1  #默认是开启的。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ce=s("p",null,'添加更新仓库源计划任务 如果使用的外包源链接，可以定期的进行同步，放在crontab里面每天执行。 echo "0 2 0 cobbler reposync --tries=3 --no-fail" >> /var/spool/cron/root',-1),ie=s("p",null,"设置装机自动设置Yum 修改ks脚本，增加",-1),re=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%post")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Start yum configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$yum_config_stanza")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# End yum configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%end")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"这样开机的时候就可以调用yum_config_stanza这个snippets进行设置了。等等，这个snippets是什么东东？")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pe=s("h3",{id:"_2-1-6-cobbler-snippets",tabindex:"-1"},[n("2.1.6 Cobbler snippets "),s("a",{class:"header-anchor",href:"#_2-1-6-cobbler-snippets","aria-hidden":"true"},"#")],-1),de=s("p",null,"snippets可以说是cobbler管理中的精华部分，很少有文档提及，因为大多数人使用简单的cobbler功能已经足够了，如果你想对安装过程和安装后进行定制，可以自己编写Snippet来实现。现在我们可以参考Cobbler自带的kickstart模板，给我们的模板增加上snippets的功能",-1),Ae=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /var/lib/cobbler/kickstarts/sample_end.ks")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%post")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('log_ks_post')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Start yum configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$yum_config_stanza")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# End yum configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('post_install_kernel_options')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('post_install_network_config')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('func_register_if_enabled')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('download_config_files')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('koan_environment')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('redhat_register')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('cobbler_register')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Enable post-install boot notification")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('post_anamon')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Start final steps")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$SNIPPET('kickstart_done')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# End final steps")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"%end")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ce=s("p",null,"将%post开始到%end的内容复制下来，编辑到 /var/lib/cobbler/kickstarts/CentOS-7.4-x86_64-Cobbler.cfg文件中。在后面的自动化实践和高级话题中，我们将用到这个功能。",-1),ue=s("h1",{id:"_3-cobbler自动化实践",tabindex:"-1"},[n("3 Cobbler自动化实践 "),s("a",{class:"header-anchor",href:"#_3-cobbler自动化实践","aria-hidden":"true"},"#")],-1),ye=s("p",null,"在了解了Cobbler的基本使用和Cobbler的各种组件之后，在生产环境中，我们就可以灵活的运用Cobbler来完成很多自动化的工作。",-1),he=s("h2",{id:"_3-1-cobbler构建私有yum仓库",tabindex:"-1"},[n("3.1 Cobbler构建私有YUM仓库 "),s("a",{class:"header-anchor",href:"#_3-1-cobbler构建私有yum仓库","aria-hidden":"true"},"#")],-1),_e=s("p",null,"Cobbler除了用来进行自动化安装之外，最方便的一个功能就是做YUM仓库了。从此再也不用担心，在服务器无法上外网的情况下，如何使用开源工具了。而且如果你需要，Cobbler可以帮你进行同步，及时的和官方的源保持一致。",-1),De=s("h3",{id:"_3-1-1-构建openstack私有仓库",tabindex:"-1"},[n("3.1.1 构建OpenStack私有仓库 "),s("a",{class:"header-anchor",href:"#_3-1-1-构建openstack私有仓库","aria-hidden":"true"},"#")],-1),ge=s("p",null,"添加OpenStack源：",-1),me=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler repo add --name=openstack-queens-x86_64 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --mirror=http://mirrors.aliyun.com/centos/7.4.1708/cloud/x86_64/openstack-queens/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --arch=x86_64 --breed=yum")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),be=s("p",null,[n("对于 yum 存储库 URL，Cobbler 接受 "),s("a",{href:"http://xn--ftp-3y3b//%E3%80%81rsync://%E3%80%81%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E8%B7%AF%E5%BE%84%E5%92%8C",target:"_blank",rel:"noreferrer"},"http://、ftp://、rsync://、文件系统路径和"),n(" ssh 位置（通过使用基于私钥的身份验证）。")],-1),ke=s("ul",null,[s("li",null,"http协议 方式：只能拉取到某一软件的最新版本，无法拉取所有版本。"),s("li",null,"rsync协议方式：镜像方式，可以拉取提供 rsync 服务目录下的所有目录和文件。")],-1),ve=s("p",null,"同步仓库",-1),xe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler reposync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fe=s("blockquote",null,[s("p",null,"提示：OpenStack Queens的源同步完成大约在900M左右。")],-1),Se=s("h3",{id:"_3-1-2-构建zabbix私有仓库",tabindex:"-1"},[n("3.1.2 构建Zabbix私有仓库 "),s("a",{class:"header-anchor",href:"#_3-1-2-构建zabbix私有仓库","aria-hidden":"true"},"#")],-1),Ee=s("p",null,"由于Zabbix官方不支持rsync的方式同步，所以只能使用http的方式同步最新版本的源。",-1),Pe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler repo add --name=zabbix-3.4-rhel7-x86_64  \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--mirror=http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler repo list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   zabbix-3.4-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ne=s("p",null,"同步仓库",-1),Re=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler reposync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Te=s("blockquote",null,[s("p",null,"提示：Zabbix 3.4版本的源同步完成大约在20M左右。")],-1),Ie=s("h3",{id:"_3-1-3-构建saltstack私有仓库",tabindex:"-1"},[n("3.1.3 构建SaltStack私有仓库 "),s("a",{class:"header-anchor",href:"#_3-1-3-构建saltstack私有仓库","aria-hidden":"true"},"#")],-1),Oe=s("p",null,"由于SaltStack的国外源相对比较慢，所以生产会使用Cobbler构建内部源。",-1),Me=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler repo add --name=saltstack-2018.3-rhel7-x86_64 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --mirror=https://repo.saltstack.com/yum/redhat/7/x86_64/2018.3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),we=s("p",null,"同步仓库",-1),Ke=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler reposync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Le=s("blockquote",null,[s("p",null,"提示：SaltStack 2018.3版本的源同步完成大约在50M左右。")],-1),Ue=s("h3",{id:"_3-1-4-将私有仓库添加到profile",tabindex:"-1"},[n("3.1.4 将私有仓库添加到Profile "),s("a",{class:"header-anchor",href:"#_3-1-4-将私有仓库添加到profile","aria-hidden":"true"},"#")],-1),je=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler repo list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   openstack-queens-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   saltstack-2018.3-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   zabbix-3.4-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ge=s("p",null,"将自定义的Repo添加到对应的Profile之后，我们使用该Profile安装完毕的虚拟机默认就会增加这些仓库的配置。 提示：必须执行完毕reposync之后，才能添加到Profile。多个repo之间使用空格分隔。",-1),He=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler profile edit --name CentOS-7.4-x86_64 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'--repos="openstack-queens-rhel7-x86_64 saltstack-2018.3-rhel7-x86_64 zabbix-3.4-rhel7-x86_64"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fe=s("p",null,"使用Profile CentOS-7.4-x86_64创建出来的虚拟机都会有一个cobbler-config.repo文件",-1),Ve=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost ~]# cd /etc/yum.repos.d/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@localhost yum.repos.d]# cat cobbler-config.repo ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[openstack-queens-rhel7-x86_64]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=openstack-queens-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=http://192.168.56.11/cobbler/repo_mirror/openstack-queens-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"priority=99")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[saltstack-2018.3-rhel7-x86_64]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=saltstack-2018.3-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=http://192.168.56.11/cobbler/repo_mirror/saltstack-2018.3-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"priority=99")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[zabbix-3.4-rhel7-x86_64]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=zabbix-3.4-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=http://192.168.56.11/cobbler/repo_mirror/zabbix-3.4-rhel7-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"priority=99")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Be=s("h2",{id:"_3-2-使用cobbler自动化安装esxi",tabindex:"-1"},[n("3.2 使用Cobbler自动化安装ESXi "),s("a",{class:"header-anchor",href:"#_3-2-使用cobbler自动化安装esxi","aria-hidden":"true"},"#")],-1),qe=s("ol",null,[s("li",null,"挂载ESXI镜像并导入")],-1),Ye=s("p",null,"首先使用Vmware Workstation挂载对应的ESXi镜像，这里使用的6.5版本。",-1),ze=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mount /dev/cdrom /mnt/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mount: /dev/sr0 is write-protected, mounting read-only")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler import --path=/mnt --name=ESXi6.5 --arch=x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$e=s("ol",null,[s("li",null,"会自动生成distros和profiles")],-1),Xe=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"distros:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   CentOS-7.4-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   ESXi6.5-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"profiles:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   CentOS-7.4-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"   ESXi6.5-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Je=s("ol",null,[s("li",null,"查看kickstart文件")],-1),We=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler profile report --name ESXi6.5-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name                           : ESXi6.5-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TFTP Boot Files                : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Comment                        : ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"DHCP Tag                       : default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Distribution                   : ESXi6.5-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Enable gPXE?                   : 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Enable PXE Menu?               : 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Fetchable Files                : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kernel Options                 : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kernel Options (Post Install)  : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kickstart                      : /var/lib/cobbler/kickstarts/sample_esxi6.ks")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kickstart Metadata             : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Management Classes             : []")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Management Parameters          : <<inherit>>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name Servers                   : []")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name Servers Search Path       : []")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Owners                         : ['admin']")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Parent Profile                 : ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Internal proxy                 : ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Red Hat Management Key         : <<inherit>>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Red Hat Management Server      : <<inherit>>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Repos                          : []")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server Override                : <<inherit>>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Template Files                 : {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt Auto Boot                 : 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt Bridge                    : xenbr0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt CPUs                      : 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt Disk Driver Type          : raw")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt File Size(GB)             : 5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt Path                      : ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt RAM (MB)                  : 512")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Virt Type                      : kvm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qe=s("ol",null,[s("li",null,"使用Cobbler安装ESXi")],-1),Ze=s("p",null,"首先需要同步一下",-1),so=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler sync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),no=s("ol",null,[s("li",null,"创建虚拟机进行实验。")],-1),lo=s("h2",{id:"_3-3-定制化服务器安装",tabindex:"-1"},[n("3.3 定制化服务器安装 "),s("a",{class:"header-anchor",href:"#_3-3-定制化服务器安装","aria-hidden":"true"},"#")],-1),eo=s("h3",{id:"_3-3-1-自动化安装流程梳理",tabindex:"-1"},[n("3.3.1 自动化安装流程梳理 "),s("a",{class:"header-anchor",href:"#_3-3-1-自动化安装流程梳理","aria-hidden":"true"},"#")],-1),oo=s("ul",null,[s("li",null,"采购设备送到机房。"),s("li",null,"机房同事，开机，插电验收，验收完毕。"),s("li",null,"进行CMDB资产录入。提供机器位置和MAC地址列表（供应商也可以提供）"),s("li",null,"调用IPMI开机，Cobbler API安装操作系统。"),s("li",null,"安装完毕，启动后，自动启动SaltStack。然后剩下的以SaltStack为核心了。")],-1),ao=s("p",null,"说明： 服务器网卡必须支持PXE功能 定制化 至少有这么几个：网络配置，Hostname 这些 注意： 如果不定制化，网卡通过PXE启动后，会出现一个菜单供人选择用哪个配置（其实就是Profile的名字）而且每个安装源 都有自己的默认KS文件，超过时间后，会指定使用默认的 KS文件 进行安装本文主要讨论 自动化一键部署，所以必须要做定制化 这部分的操作 主要通过 cobbler system 来实现",-1),to=s("h3",{id:"_3-3-2-cobbler获取安装进度",tabindex:"-1"},[n("3.3.2 Cobbler获取安装进度 "),s("a",{class:"header-anchor",href:"#_3-3-2-cobbler获取安装进度","aria-hidden":"true"},"#")],-1),co=s("p",null,"后面有章节介绍如何通过Cobbler API来调用Cobbler，在开始进行系统定制安装之前，我们可能有一个需求就是需要想知道安装进度。针对于基于Redhat的Linux发行版的系统安装程序叫做Anaconda，Cobbler提供了对Anaconda的监控，从而获取安装进度。",-1),io=s("ol",null,[s("li",null,[s("p",null,"开启Anaconda监控"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/cobbler/settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"anamon_enabled: 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),ro=s("p",null,"重启Cobbler",-1),po=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart cobblerd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ao=s("ol",null,[s("li",null,"查看Kickstart文件确保对应的snippet存在 ``` %pre $SNIPPET('pre_anamon')")],-1),Co=s("p",null,"%post $SNIPPET('post_anamon')",-1),uo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3. 进行系统安装后，会在/var/log/cobbler/anamon/下创建对应的System目录")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yo=s("p",null,"[root@linux-node1 ~]# tree /var/log/cobbler/anamon/ /var/log/cobbler/anamon/ └── cobbler-api-test ├── anaconda.log ├── boot.log ├── dmesg ├── ks-post.log ├── ks-pre.log ├── messages ├── program.log ├── storage.log └── sys.log",-1),ho=s("p",null,"1 directory, 9 files",-1),_o=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"### 3.3.3 Cobbler system定制安装")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Cobbler system是Cobbler提供的可以用来进行系统定制的模块，我们可以通过Cobbler system来定制待安装服务器的IP地址、主机名等操作。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1. 添加一个主机")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Do=s("p",null,[n("[root@linux-node1 ~]# cobbler system add --name=linux-node3 --mac=00:50:56:3F:84:4F \\ --profile=CentOS-7.4-x86_64 --ip-address=192.168.56.110 --subnet=255.255.255.0 \\ --gateway=192.168.56.2 --interface=eth0 --static=1 --hostname="),s("a",{href:"http://new.devopsedu.com",target:"_blank",rel:"noreferrer"},"new.devopsedu.com"),n(' \\ --name-servers="192.168.56.2" \\ --kickstart=/var/lib/cobbler/kickstarts/CentOS-7.4-x86_64-Cobbler.cfg')],-1),go=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --name=linux-node3   #设置一个主机名称")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --mac=08:00:27:67:A0:BB  #设置对应的MAC地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --profile=CentOS-7.4-x86_64  #设置需要安装的操作系统")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --ip-address=192.168.56.13 #设置一个静态IP地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --subnet=255.255.255.0    #设置子网掩码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --gateway=192.168.56.2    #设置网关")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --interface=eth0 \\          设置网卡")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --static=1                 设置静态IP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --dns-name=linux-node3.example.com  #设置dns name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --hostname=linux-node3.example.com  #设置主机名")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- --netboot-enabled=true #设置网络启动")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'- --name-servers="192.168.56.2" #设置DNS域名服务器')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2. 查看主机")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mo=s("p",null,"[root@linux-node1 ~]# cobbler system list linux-node3 ``` 下面，我们来启动虚拟机，进行自动化安装，不再出现选择的菜单，直接安装你制定的操作系统。",-1),bo=s("h1",{id:"_4-cobbler高级话题",tabindex:"-1"},[n("4 Cobbler高级话题 "),s("a",{class:"header-anchor",href:"#_4-cobbler高级话题","aria-hidden":"true"},"#")],-1),ko=s("p",null,"在实际的工作环境中，Cobbler还有很多高级的应用可以帮助我们更快的进行操作系统的部署工作。例如网卡绑定、电源管理和Cobbler API等。",-1),vo=s("h2",{id:"_4-1-自定义物理网卡bonding",tabindex:"-1"},[n("4.1 自定义物理网卡bonding "),s("a",{class:"header-anchor",href:"#_4-1-自定义物理网卡bonding","aria-hidden":"true"},"#")],-1),xo=s("ol",null,[s("li",null,"添加一台主机linux-node4")],-1),fo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler system add --name=linux-node4 --profile=CentOS-7.7-x86_64 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --hostname=new.devopsedu.com \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' --name-servers="192.168.56.2" \\')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --kickstart=/var/lib/cobbler/kickstarts/CentOS-7.7-x86_64-Cobbler.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),So=s("ol",null,[s("li",null,"添加bonding网卡")],-1),Eo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler system edit --name=linux-node4 --interface=eth0 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --mac=00:50:56:27:F0:07 --interface-type=bond_slave --interface-master=bond0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Po=s("ol",null,[s("li",null,"添加bonding网卡")],-1),No=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler system edit --name=linux-node4 --interface=eth1 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --mac=00:50:56:36:09:66 --interface-type=bond_slave --interface-master=bond0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ro=s("ol",null,[s("li",null,"设置绑定网卡")],-1),To=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler system edit --name=linux-node4 --interface=bond0 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},' --interface-type=bond --bonding-opts="miimon=100 mode=1" \\')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --ip-address=192.168.56.111 --subnet=255.255.255.0 --gateway=192.168.56.2 --static=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Io=s("p",null,"好的，万事具备，就差开机安装操作系统了。等等，怎么开机呢？既然是自动化安装，打电话让机房值班人员帮我们开机当然是不合适的，还记得IPMI吗，我们可以使用IPMI来进行电源管理。",-1),Oo=s("ol",null,[s("li",null,"网卡绑定后的效果")],-1),Mo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@new ~]# cat /proc/net/bonding/bond0 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Ethernet Channel Bonding Driver: v3.7.1 (April 27, 2011)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Bonding Mode: fault-tolerance (active-backup)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Primary Slave: None")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Currently Active Slave: eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MII Status: up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MII Polling Interval (ms): 100")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Up Delay (ms): 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Down Delay (ms): 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Slave Interface: eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MII Status: up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Speed: 1000 Mbps")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Duplex: full")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Link Failure Count: 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Permanent HW addr: 00:50:56:27:f0:07")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Slave queue ID: 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Slave Interface: eth1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MII Status: up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Speed: 1000 Mbps")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Duplex: full")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Link Failure Count: 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Permanent HW addr: 00:50:56:36:09:66")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Slave queue ID: 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wo=s("h2",{id:"_4-2-cobbler电源管理",tabindex:"-1"},[n("4.2 Cobbler电源管理 "),s("a",{class:"header-anchor",href:"#_4-2-cobbler电源管理","aria-hidden":"true"},"#")],-1),Ko=s("p",null,"要管理服务器的电源，你可以直接使用IPMI命令进行，也可以使用cobbler间接的调用IPMI进行操作。默认情况下Cobbler使用IPMI进行电源管理，我们可以在cobbler的settings配置看到以下配置。",-1),Lo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/cobbler/settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"power_management_default_type: 'ipmitool'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'power_template_dir: "/etc/cobbler/power"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cobbler system edit --name=linux-node3 --power-address=192.168.0.21 --power-type='ipmilan' --power-user=ipmi --power-pass=ipmi")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Uo=s("p",null,"服务器电源管理：",-1),jo=s("ul",null,[s("li",null,"cobbler system poweroff"),s("li",null,"cobbler system poweron"),s("li",null,"cobbler system powerstatus"),s("li",null,"cobbler system reboot")],-1),Go=s("p",null,"重启从PXE引导启动，并指定安装的操作系统配置，如下命令，",-1),Ho=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log-node1 ~]# cobbler system edit  --name=host-188116  --netboot-enabled=1 --profile=centos5.8-x86_64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@log-node1 ~]# cobbler reposync")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fo=s("h2",{id:"_4-3-cobbler-api使用",tabindex:"-1"},[n("4.3 Cobbler API使用 "),s("a",{class:"header-anchor",href:"#_4-3-cobbler-api使用","aria-hidden":"true"},"#")],-1),Vo=s("ol",null,[s("li",null,[s("p",null,"连接Cobbler"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat cobbler.py ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/usr/bin/env python")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"import xmlrpclib")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'server = xmlrpclib.Server("http://192.168.56.11/cobbler_api")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_distros()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_profiles()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_systems()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_images()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_repos()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"登录Cobbler")])],-1),Bo=s("p",null,"默认情况下，不用登录Cobbler就可以获取到Cobbler的信息，但是如果需要进行操作，就需要登录。使用用户名和密码登录后，Cobbler会返回一个token令牌，后面的操作，我们调用任何一个Cobbler的方法，都需要将token作为最后一个参数。",-1),qo=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat cobbler.py ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/usr/bin/env python")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"import xmlrpclib")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'server = xmlrpclib.Server("http://192.168.56.11/cobbler_api")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_distros()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_profiles()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_systems()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_images()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print server.get_repos()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'token = server.login("cobbler","devopsedu.com")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"print(token)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"一个添加主机的例子")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/usr/bin/env python ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# -*- coding: utf-8 -*-")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"import xmlrpclib ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"class CobblerAPI(object):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    def __init__(self,url,user,password):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        self.cobbler_user= user")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        self.cobbler_pass = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        self.cobbler_url = url")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    def add_system(self,hostname,ip_add,mac_add,profile):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        '''")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        Add Cobbler System Infomation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        '''")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ret = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "result": True,')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "comment": [],')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        #get token")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        remote = xmlrpclib.Server(self.cobbler_url) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        token = remote.login(self.cobbler_user,self.cobbler_pass) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        #add system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        system_id = remote.new_system(token) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        remote.modify_system(system_id,"name",hostname,token) ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        remote.modify_system(system_id,"hostname",hostname,token) ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        remote.modify_system(system_id,'modify_interface', { ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "macaddress-eth0" : mac_add, ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "ipaddress-eth0" : ip_add, ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "dnsname-eth0" : hostname, ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }, token) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        remote.modify_system(system_id,"profile",profile,token) ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        remote.save_system(system_id, token) ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        try:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            remote.sync(token)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        except Exception as e:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            ret['result'] = False")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            ret['comment'].append(str(e))")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        return ret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"def main():")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    cobbler = CobblerAPI("http://192.168.56.11/cobbler_api","cobbler","devopsedu.com")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ret = cobbler.add_system(hostname='cobbler-api-test',ip_add='192.168.56.111',mac_add='00:50:56:25:C2:AA',profile='CentOS-7.4-x86_64')")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    print ret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"if __name__ == '__main__':")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    main()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yo=s("h1",{id:"第二部分-kvm和openstack基础",tabindex:"-1"},[n("第二部分 KVM和OpenStack基础 "),s("a",{class:"header-anchor",href:"#第二部分-kvm和openstack基础","aria-hidden":"true"},"#")],-1),zo=s("h1",{id:"云计算概述",tabindex:"-1"},[n("云计算概述 "),s("a",{class:"header-anchor",href:"#云计算概述","aria-hidden":"true"},"#")],-1),$o=s("p",null,"在第一章，会介绍什么是云计算？什么是虚拟化？以及云计算与虚拟化的关系，然后讲解目前比较流行的虚拟化项目：KVM，了解KVM虚拟化的基本概念，使用KVM创建并管理虚拟机，为学习OpenStack打下坚实的基础。",-1),Xo=s("h2",{id:"云计算概述-1",tabindex:"-1"},[n("云计算概述 "),s("a",{class:"header-anchor",href:"#云计算概述-1","aria-hidden":"true"},"#")],-1),Jo=s("p",null,"任何事物的出现都是有背景的，云计算也不例外。云计算是由需求驱动的，首先让我们看看没有云计算之前我们都面临什么问题。",-1),Wo=s("p",null,[s("strong",null,"传统数据中心面临的问题？")],-1),Qo=s("ul",null,[s("li",null,"资源利用率低：资源利用率低是数据中心目前普遍存在的问题，多项调查数据表明企业数据中心的服务器的平均利用率普遍低于15%。"),s("li",null,"资源分配不合理：系统统建设相对独立、各自为政，其基础设施相当于一个个独立的“孤岛”，因此很难从整体的角度考虑IT基础架构的资源分配及使用的合理性。"),s("li",null,"自动化能力差：资源配置和部署过程多采用人工方式，没有相应的平台支持，使大量人力资源耗费在繁重的重复性工作上，没有自服务和自动部署的能力。")],-1),Zo=s("p",null,[s("strong",null,"什么是云计算？")],-1),sa=s("p",null,"云计算（Cloud Computing）是基于互联网的相关服务的增加、使用和交付模式。 好吧，我承认！如果你把上面那句话告诉业内人员，估计只有很少一部分人可以理解，更不用说非业内人士了。对云计算的定义有多种说法。对于到底什么是云计算,目前广为接受的是美国国家标准与技术研究院（NIST）定义：云计算是一种按使用量付费的模式，这种模式提供可用的、便捷的、按需的网络访问，进入可配置的计算资源共享池（资源包括网络，服务器，存储，应用软件，服务），这些资源能够被快速提供，只需投入很少的管理工作，或与服务供应商进行很少的交互。",-1),na=s("p",null,[s("strong",null,"用比较好理解的方式解释就是：")],-1),la=s("ol",null,[s("li",null,"是什么：云计算指的是一种模式。"),s("li",null,"使用方法：云计算的必须通过网络来使用。"),s("li",null,"特点和优势：弹性计算、按需付费、快速扩展，也就是你用多少，付多少钱。同时也不用关心基础设施的管理，由云计算供应商提供。")],-1),ea=s("h3",{id:"云计算的分类",tabindex:"-1"},[n("云计算的分类 "),s("a",{class:"header-anchor",href:"#云计算的分类","aria-hidden":"true"},"#")],-1),oa=s("p",null,"根据云计算服务性质的不同,可以将云计算区分为公有云、私有云和混合云，如图1-1",-1),aa=s("p",null,"（图1-1）",-1),ta=s("p",null,[s("strong",null,"公有云")],-1),ca=s("p",null,"是将搭建好的云资源池放到Internet上，所有有使用权限的用户都可以按需使用。相对于私有云，公有云的所有者是提供商，企业用户只是具备使用权。 优势：云计算的最大优势就是其规模经济效益，大多数企业选择云计算方案是出于成本考虑，那么公有云不需要投入基础建设，可以实现按需付费，随时使用。",-1),ia=s("p",null,[s("strong",null,"私有云"),n(" 是为一个客户单独使用而构建的一套IAAS（基础设施既服务），企业可以对数据、安全性和服务质量进行最有效控制。该公司拥有基础设施，并可以控制在此基础设施上部署应用程序的方式。私有云可部署在企业数据中心的防火墙内，也可以将它们部署在一个安全的主机托管场所。 优势：数据安全对于企业来说是至关重要的，公有云服务存在较大的安全隐患，公有云平台只适合那些非关键性业务。尤其是大型企业会更多地倾向于选择私有云计算平台。")],-1),ra=s("p",null,[s("strong",null,"混合云"),n(" 指公有云和私有云的混合，大多数是指在私有云搭建好自后，由于业务发展等原因，资源需求量超过了资源池，所以需要通过申请使用公有云作为私有云的补充。 优势：混合云既可以尽可能多地发挥云计算系统的规模经济效益，同时又可以保证数据安全性。对于不是很敏感的非关键业务可以由混合云中的公有模块实现，而对那些安全性要求较高的应用则可以迁移到私有模块实现。 公有云、私有云、混合云三种云计算模式并不会谁取代谁，谁优过谁。不同企业、不同需求，需要不同的解决方案。公有云、私有云、混合云会长期共存，优势互补，共同服务于企业用户。")],-1),pa=s("h3",{id:"云计算的分层",tabindex:"-1"},[n("云计算的分层 "),s("a",{class:"header-anchor",href:"#云计算的分层","aria-hidden":"true"},"#")],-1),da=s("p",null,"如果你理解了什么是云计算，那么就需要掌握，云基础是分层的。通常情况下，我们将云计算分为三层，分别是Infrastructure（基础设施）-as-a- Service，Platform（平台）-as-a-Service，Software（软件）-as-a-Service。基础设施在最下端，平台在中间，软件在顶端。",-1),Aa=s("p",null,'（图1-6） IaaS(Infrastructure as a Service，基础架构即服务)通过互联网提供了数据中心、基础架构硬件和软件资源。IaaS可以提供服务器、操作系统、磁盘存储、数据库和/或信息资源。最高端IaaS的代表产品是亚马逊的AWS(Elastic Compute Cloud)，不过IBM、Vmware和惠普以及其他一些传统IT厂商也提供这类的服务。国内的话阿里云、腾讯云、青云、盛大云等代表。 IaaS通常会按照"弹性云"的模式引入其他的使用和计价模式，也就是在任何一个特定的时间，都只使用你需要的服务，并且只为之付费。我们要讲的OpenStack就是IAAS的开源项目，可以用来构建公有云或者私有云。 PaaS(Platform as a Service，平台即服务)提供了基础架构，软件开发者可以在这个基础架构之上建设新的应用，或者扩展已有的应用，同时却不必购买开发、质量控制或生产服务器。Google的App Engine和新浪的SAE都采用了PASS的模式。这些平台允许公司创建个性化的应用，也允许独立软件厂商或者其他的第三方机构针对垂直细分行业创造新的解决方案。我们要讲的Docker可以用来构建PAAS平台，百度的PAAS平台核心就是基于Docker。 SaaS(Software as a Service，软件即服务)是最为成熟、最出名，也是得到最广泛应用的一种云计算。大家可以将它理解为一种软件分布模式，在这种模式下，应用软件安装在厂商或者服务供应商那里，用户可以通过某个网络来使用这些软件，通常使用的网络是互联网。这种模式通常也被称为"随需应变(on demand)"软件，这是最成熟的云计算模式，因为这种模式具有高度的灵活性、已经证明可靠的支持服务、强大的可扩展性，因此能够降低客户的维护成本和投入，而且由于这种模式的多宗旨式的基础架构，运营成本也得以降低。Google的Gmail和Jira都是SAAS的模式。',-1),Ca=s("h2",{id:"云计算与虚拟化",tabindex:"-1"},[n("云计算与虚拟化 "),s("a",{class:"header-anchor",href:"#云计算与虚拟化","aria-hidden":"true"},"#")],-1),ua=s("p",null,"首先请大家不要把虚拟化和我们之前讲解的云计算进行联想，先入为主很容易让我们陷入概念的误区，让我来代理大家搞明白云计算与虚拟化的恩恩怨怨。因为提到云计算就不得不提到虚拟化，甚至说很多人将云计算和虚拟化混为一谈，这是不正确的。好的，答案有了，云计算不等于虚拟化，那么为什么呢？ 虚拟化，是指通过虚拟化技术将一台计算机虚拟为多台逻辑计算机。在一台计算机上同时运行多个逻辑计算机，每个逻辑计算机可运行不同的操作系统，并且应用程序都可以在相互独立的空间内运行而互不影响，从而显著提高计算机的工作效率。如图1.1.1所示：",-1),ya=s("p",null,"（图1-1）",-1),ha=s("h3",{id:"全虚拟化和半虚拟化",tabindex:"-1"},[n("全虚拟化和半虚拟化 "),s("a",{class:"header-anchor",href:"#全虚拟化和半虚拟化","aria-hidden":"true"},"#")],-1),_a=s("p",null,"虚拟化技术根据特点，可以分为全虚拟化和半虚拟化。 全虚拟化（Full Virtualization)， 是原始虚拟化技术，该模型使用虚拟机协调guest操作系统和原始硬件，VMM（Virtual Machine Monitor）在GuestOS和裸硬件之间用于工作协调，一些受保护指令必须由Hypervisor（虚拟机管理程序）来捕获处理，如图1-2。",-1),Da=s("p",null,"（图1-2） KVM是全虚拟化的典型代表，KVM是集成到Linux内核的Hypervisor，是X86架构且硬件支持虚拟化技术（Intel VT或AMD-V）的Linux的全虚拟化解决方案。它是Linux的一个很小的模块，利用Linux做大量的事，如任务调度、内存管理与硬件设备交互等，如图1-3。",-1),ga=s("p",null,"半虚拟化（Para Virtualization），是另一种类似于全虚拟化的技术，它使用Hypervisor分享存取底层的硬件，但是它的guest操作系统集成了虚拟化方面的代码。该方法无需重新编译或引起陷阱，因为操作系统自身能够与虚拟进程进行很好的协作。半虚拟化需要guest操作系统做一些修改，使guest操作系统意识到自己是处于虚拟化环境的，但是半虚拟化提供了与原操作系统相近的性能，如图1-4。",-1),ma=s("p",null,"（图1-4） 半虚拟化的一个典型代表是Xen。Xen是第一类运行在裸机上的虚拟化管理程序(Hypervisor)。它支持全虚拟化和半虚拟化,Xen支持hypervisor和虚拟机互相通讯。Xen最重要的优势在于半虚拟化，此外未经修改的操作系统也可以直接在xen上运行(如Windows)，能让虚拟机有效运行而不需要仿真，因此虚拟机能感知到hypervisor，而不需要模拟虚拟硬件，从而能实现高性能，如图1-5。",-1),ba=s("p",null,"（图1-5） 在Xen环境中，主要有两个组成部分。 一个是虚拟机监控器（VMM），也叫hypervisor。Hypervisor层硬件与虚拟机之间，最先被载入到硬件的第一层。 Hypervisor载入就可部署虚拟机。在Xen中，虚拟机叫做Domain。在这些虚拟机中，Domain0具有很高的特权,负责一些专门的工作。由于hypervisor中不包含任何与硬件对话的驱动，也没有与管理员对话的接口，这些驱动就由 domain0来提供了。通过domain0，管理员可以利用一些Xen工具来创建其它虚拟机（DomainU）。这些domainU属于无特权domain。",-1),ka=s("h3",{id:"虚拟化分类",tabindex:"-1"},[n("虚拟化分类 "),s("a",{class:"header-anchor",href:"#虚拟化分类","aria-hidden":"true"},"#")],-1),va=s("p",null,"刚才从类型中把虚拟化分为全虚拟化和半虚拟化，从使用场景中进行区分，虚拟化可以分为服务器虚拟化、桌面虚拟化和应用虚拟化。更详细的根据资源的不同还提出了网络虚拟化、存储虚拟化等。 服务器虚拟化是我们最常见的方式，我们通过KVM、Xen、VMWARE ESXi等软件将我们的服务器虚拟成多个来使用，提高硬件的使用效率。不熟悉的朋友可以使用搜索引擎来获取相关知识，目前我的生产环境还稳定的运行着数年前的ESXi。",-1),xa=s("p",null,[s("strong",null,"桌面虚拟")],-1),fa=s("p",null,"化是指将计算机的终端系统（也称作桌面）进行虚拟化，以达到桌面使用的安全性和灵活性。可以通过任何设备，在任何地点，任何时间通过网络访问属于我们个人的桌面系统。目前在中小企业并没有完全普及，主要用于IT外包、呼叫中心、移动桌面等，因为在显示方面对于低成本的解决方案效果并不好，效果好的初始采购成本较高。 桌面虚拟化依赖于服务器虚拟化，首先在数据中心的服务器上进行服务器虚拟化，生成大量的独立的桌面操作系统（比如Win7），同时根据专有的虚拟桌面协议发送给终端设备（例如RDP、VNC、Spice协议）。用户终端通过以太网登陆到虚拟主机上，只需要记住用户名和密码及网关信息，即可随时随地的通过网络访问自己的桌面系统，从而实现单机多用户。 通过与IAAS的结合，桌面虚拟化也演变成桌面云（DAAS ：Desktop As a Service）.IAAS提供基础资源平台，桌面虚拟化和云平台的完美融合达到类似于SAAS一样的效果，这便是DAAS。",-1),Sa=s("p",null,[s("strong",null,"应用虚拟化")],-1),Ea=s("p",null,"比较简单的解释就是通过虚拟化软件实现传统C/S结构的软件通过Web浏览器进行交付。在用户访问一个服务器虚拟化后的应用时，用户计算机只需要把人机交互逻辑传送到服务器端，服务器端为用户开设独立的会话空间，应用程序的计算逻辑在这个会话空间中运行，把变化后的人机交互逻辑传送给客户端，并且在客户端相应设备展示出来，从而使用户获得如同运行本地应用程序一样的访问感受。比如我曾经使用过Cirtrix公司的Xenapp这款应用虚拟化产品，实现ERP客户端的浏览器交付。 经过上面的理解，我们应该可以看出，从表面来看虚拟化是一种技术，那么云计算是一个概念。云计算里面包含了很多的技术，也包括虚拟化技术。云计算是和服务相关的，虚拟化是相对于物理设备的。所以说虚拟化绝不是云计算。而云计算则远远超出了虚拟化的范畴。",-1),Pa=s("h3",{id:"云计算不等于虚拟化",tabindex:"-1"},[n("云计算不等于虚拟化 "),s("a",{class:"header-anchor",href:"#云计算不等于虚拟化","aria-hidden":"true"},"#")],-1),Na=s("p",null,"经过之前对云计算和虚拟化的学习，我们可以直接得出答案：云计算不等于虚拟化，云计算实质上是根据需要通过 Internet 交付共享计算资源。云计算可以通过虚拟化来实现，千万不要以为云计算就是虚拟化。我们再总结一下，云计算是一种资源使用和交付方式，虚拟化是一种具体的技术实现。但是呢，云计算的具体实现需要使用到虚拟化这项技术。",-1),Ra=s("h1",{id:"_2-kvm虚拟化实战",tabindex:"-1"},[n("2 KVM虚拟化实战 "),s("a",{class:"header-anchor",href:"#_2-kvm虚拟化实战","aria-hidden":"true"},"#")],-1),Ta=s("p",null,"可翻阅www.xoxoyun.cn博客其他KVM文章进行学习",-1),Ia=s("h1",{id:"_3-openstack入门实战",tabindex:"-1"},[n("3 OpenStack入门实战 "),s("a",{class:"header-anchor",href:"#_3-openstack入门实战","aria-hidden":"true"},"#")],-1),Oa=s("p",null,"在OpenStack入门实战章节，我们首先会介绍OpenStack的历史、架构。然后通过部署一个两个节点的OpenStack集群来学习OpenStack的基础组建。包括",-1),Ma=s("ul",null,[s("li",null,"OpenStack共享服务MySQL、RabbitMQ、Memcached"),s("li",null,"OpenStack验证服务Keystone"),s("li",null,"OpenStack镜像服务Glance"),s("li",null,"OpenStack计算服务Nova"),s("li",null,"OpenSTack网络服务Neutron"),s("li",null,"OpenStack管理节目Horizon")],-1),wa=s("h1",{id:"_1-1-openstack介绍",tabindex:"-1"},[n("1.1 OpenStack介绍 "),s("a",{class:"header-anchor",href:"#_1-1-openstack介绍","aria-hidden":"true"},"#")],-1),Ka=s("p",null,"OpenStack 是由 Rackspace 和 NASA（美国宇航局） 共同开发的云计算平台，是云计算中IAAS的开源实现。通过Apache许可证授权开放源码，它可以帮助服务商和企业实现类似于Amazon EC2和S3的云基础架构服务。",-1),La=s("p",null,"OpenStack是一个云平台管理的项目，它不是一个软件。OpenStack是一个可以管理整个数据中心里大量资源池的云操作系统，包括计算、存储及网络资源。管理员可以通过管理台管理整个系统，并可以通过web接口为用户划定资源。由以上可以知道OpenStack的主要目标是管理数据中心的资源，简化资源分派。它管理三部分资源，分别是：",-1),Ua=s("ul",null,[s("li",null,[s("p",null,"计算资源：OpenStack可以规划并管理大量云主机，从而允许企业或服务提供商按需提供计算资源；开发者可以通过API访问计算资源从而创建云应用，管理员与用户则可以通过web访问这些资源；")]),s("li",null,[s("p",null,"存储资源：OpenStack可以为云服务或云应用提供所需的对象及块存储资源；因对性能及价格有需求，很多组织已经不能满足于传统的企业级存储技术，因此OpenStack可以根据用户需要提供可配置的对象存储或块存储功能；")]),s("li",null,[s("p",null,"网络资源：如今的数据中心存在大量的设置，如服务器、网络设备、存储设备、安全设备而它们还将被划分成更多的虚拟设备或虚拟网络；这会导致IP地址的数量、路由配置、安全规则将爆炸式增长；传统的网络管理技术无法真正的可高扩展、高自动化地管理下一代网络；因而OpenStack提供了插件式、可扩展、API驱动型的网络及IP管理； OpenStack通过整合相关的一组服务，提供了基础设施即服务（IaaS）的解决方案。每个服务提供了一组应用程序接口（API）来促进他们之间的整合。你可以根据您的需要，选择安装这些服务中的一些或全部。")])],-1),ja=s("h1",{id:"_3-2-openstack环境准备",tabindex:"-1"},[n("3.2 OpenStack环境准备 "),s("a",{class:"header-anchor",href:"#_3-2-openstack环境准备","aria-hidden":"true"},"#")],-1),Ga=s("h3",{id:"_3-2-1-openstack实战案例",tabindex:"-1"},[n("3.2.1 OpenStack实战案例 "),s("a",{class:"header-anchor",href:"#_3-2-1-openstack实战案例","aria-hidden":"true"},"#")],-1),Ha=s("p",null,"从本章开始，开始介绍OpenStack的各个组件，为了让读者更直观的了解组件的作用和组件之间的依赖关系，将通过理论和实践部署相结合的方式进行讲解。 请参考《实验环境》来完成本实例的环境准备工作。",-1),Fa=s("p",null,"下图是我们快速学习OpenStack的实战架构图，目标是先以最小组件依赖运行一个OpenStack平台，然后再后面的章节添加其它组件。",-1),Va=s("p",null,"注意：在后面的实验过程中，我们会使用到控制节点部署和计算节点部署这样的描述方法，请到对应的主机上进行操作。",-1),Ba=s("h3",{id:"_3-2-2-ntp时间同步",tabindex:"-1"},[n("3.2.2 NTP时间同步 "),s("a",{class:"header-anchor",href:"#_3-2-2-ntp时间同步","aria-hidden":"true"},"#")],-1),qa=s("p",null,"各个服务器的时间同步是OpenStack部署和运维中往往被忽视的问题。如果各个节点时间不同步，会影响OpenStack平台的正常。所以需要保证所有节点时间同步。 在CentOS 7推荐使用Chrony来进行时间同步。 Chrony是一个开源的自由软件，它能帮助你保持系统时钟与时钟服务器（NTP）同步，因此让你的时间保持精确。它由两个程序组成，分别是chronyd和chronyc。chronyd是一个后台运行的守护进程，用于调整内核中运行的系统时钟和时钟服务器同步。它确定计算机增减时间的比率，并对此进行补偿。chronyc提供了一个用户界面，用于监控性能并进行多样化的配置。它可以在chronyd实例控制的计算机上工作，也可以在一台不同的远程计算机上工作。",-1),Ya=s("p",null,[s("strong",null,"控制节点部署"),n(" 本实例中，我们把控制节点的chrony作为内部的时钟服务器，其它节点都同步控制节点的时间，如果你的环境中已经存在时间服务器可以设置为已经存在的时间服务器。")],-1),za=s("ol",null,[s("li",null,[s("p",null,"安装chrony"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y chrony")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"配置chrony"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/chrony.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置时钟服务器，可以设置多个，这里推荐使用阿里云的公共NTP时间服务器")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server time1.aliyun.com iburst")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server time2.aliyun.com iburst")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server time3.aliyun.com iburst")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server time4.aliyun.com iburst")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置允许192.168.0.0/16网段连接")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"allow 192.168.56.0/24")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"启动 NTP 服务并将其配置为开机启动："),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable chronyd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start chronyd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),$a=s("p",null,[s("strong",null,"其它节点部署")],-1),Xa=s("ol",null,[s("li",null,[s("p",null,"安装chrony"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# yum install -y chrony")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"配置chrony"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# vim /etc/chrony.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置为控制节点的IP地址，并将其它配置全部删除。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server 192.168.56.11 iburst")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"启动 NTP 服务并将其配置为开机启动："),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl enable chronyd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl start chronyd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),Ja=s("p",null,[s("strong",null,"验证同步时间")],-1),Wa=s("p",null,"在同时时间之前要确保你的时区是正确的。CentOS7提供了timedatectl用来修改。",-1),Qa=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# timedatectl set-timezone Asia/Shanghai")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"在所有节点上执行chronyc source保证配置都正确")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# chronyc sources")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Za=s("h3",{id:"_3-2-3-基础软件包安装",tabindex:"-1"},[n("3.2.3 基础软件包安装 "),s("a",{class:"header-anchor",href:"#_3-2-3-基础软件包安装","aria-hidden":"true"},"#")],-1),st=s("p",null,"基础软件包需要在所有的OpenStack节点上进行安装，包括控制节点和计算节点。",-1),nt=s("ol",null,[s("li",null,"安装EPEL仓库")],-1),lt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),et=s("ol",null,[s("li",null,"安装OpenStack仓库")],-1),ot=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# yum install -y centos-release-openstack-train")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),at=s("ol",null,[s("li",null,"安装OpenStack客户端")],-1),tt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# yum install -y python-openstackclient")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ct=s("blockquote",null,[s("p",null,"注意：本文的实验环境是关闭SELinux，如果你启用了，需要安装openstack-selinux 包实现对OpenStac服务的安全策略进行自动管理。")],-1),it=s("ol",null,[s("li",null,"安装openstack SELinux管理包")],-1),rt=s("p",null,"虽然我们在实验环境准备中，已经要求环境中关闭SELinux，但是为了以防万一，你还是需要安装上openstack-selinux。",-1),pt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# yum install -y openstack-selinux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dt=s("p",null,[s("strong",null,"OpenStack源码包")],-1),At=s("p",null,[n("本案例使用的是yum安装，如果你想使用源码进行OpenStack部署和开发，目前OpenStack所有的源码包，都可以在这里找到"),s("a",{href:"http://tarballs.openstack.org/%EF%BC%8C%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AEhttps://launchpad.net/openstack/%E8%8E%B7%E5%8F%96%E5%88%B0%E6%AF%8F%E4%B8%AA%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%AF%A6%E6%83%85%E5%92%8C%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80%E3%80%82",target:"_blank",rel:"noreferrer"},"http://tarballs.openstack.org/，同时也可以访问https://launchpad.net/openstack/获取到每个项目的详情和下载地址。")],-1),Ct=s("h3",{id:"_3-2-4-mysql数据库部署",tabindex:"-1"},[n("3.2.4 MySQL数据库部署 "),s("a",{class:"header-anchor",href:"#_3-2-4-mysql数据库部署","aria-hidden":"true"},"#")],-1),ut=s("p",null,"数据库是OpenStack的基础组件之一，OpenStack的大多数组件如KeyStone、Glance、Nova、Neutron和Cinder都需要使用数据库存储数据，包括Horizon也可以使用数据库来进行Session的存储。因此数据库的可用率会直接影响到整个OpenStack平台的可用率。如果数据库故障，OpenStack平台将无法创建新的虚拟机和管理虚拟机，但是不不会影响到正在运行的虚拟机。 OpenStack支持MySQL、PostgreSQL等多种数据库，需要注意的是在CentOS7上默认不是MySQL，而是mariadb。 你可以将MySQL Server安装在任意的服务器上，当然最好是专用的数据库服务器，使用更多的CPU和IO性能更好的硬盘。 注：生产环境可以咨询DBA进行MySQL的性能优化和高可用的配置。",-1),yt=s("ol",null,[s("li",null,"MySQL安装")],-1),ht=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y mariadb mariadb-server python2-PyMySQL")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_t=s("ol",null,[s("li",null,[s("p",null,"修改MySQL配置文件"),s("p",null,"默认情况下MySQL已经包含了/etc/my.cnf.d的目录，我们需要把配置放在该目录下即可。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/my.cnf.d/openstack.cnf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[mysqld]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bind-address = 192.168.56.11 #设置监听的IP地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"default-storage-engine = innodb  #设置默认的存储引擎")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"innodb_file_per_table = on#使用独享表空间")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"collation-server = utf8_general_ci #服务器的默认校对规则")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"character-set-server = utf8 #服务器安装时指定的默认字符集设定")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"max_connections = 4096 #设置MySQL的最大连接数，生产请根据实际情况设置。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"启动MySQL Server并设置开机启动")])],-1),Dt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable mariadb.service ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start mariadb.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gt=s("ol",null,[s("li",null,"进行数据库安全设置")],-1),mt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mysql_secure_installation")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bt=s("ol",null,[s("li",null,"数据库创建")],-1),kt=s("p",null,"在部署完MySQL数据后，可以将各个服务的数据库创建上，给后期安装使用。注意在实际生产环境中，一定要使用复杂度更高的密码和做好访问控制，这里实验使用用户名和密码相同。",-1),vt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mysql -u root -p")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Enter password: ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MariaDB [(none)]>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Keystone数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE keystone;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' IDENTIFIED BY 'keystone';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' IDENTIFIED BY 'keystone';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Glance数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE glance;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' IDENTIFIED BY 'glance';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' IDENTIFIED BY 'glance';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Placement数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE placement;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON placement.* TO placement@'localhost' IDENTIFIED BY 'placement';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON placement.* TO placement@'%' IDENTIFIED BY 'placement';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Nova数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE nova;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON nova.* TO 'nova'@'localhost' IDENTIFIED BY 'nova';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON nova.* TO 'nova'@'%' IDENTIFIED BY 'nova';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE nova_api;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON nova_api.* TO 'nova'@'localhost' IDENTIFIED BY 'nova';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON nova_api.* TO 'nova'@'%' IDENTIFIED BY 'nova';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE nova_cell0;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON nova_cell0.* TO 'nova'@'localhost' IDENTIFIED BY 'nova';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON nova_cell0.* TO 'nova'@'%' IDENTIFIED BY 'nova';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Neutron 数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE neutron;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'localhost' IDENTIFIED BY 'neutron';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON neutron.* TO 'neutron'@'%' IDENTIFIED BY 'neutron';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Cinder数据库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CREATE DATABASE cinder;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'localhost' IDENTIFIED BY 'cinder';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"GRANT ALL PRIVILEGES ON cinder.* TO 'cinder'@'%' IDENTIFIED BY 'cinder';")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xt=s("p",null,"数据库部署完毕后，后期的很多操作都可以通过命令，甚至直接修改数据库的数据来进行。注意：本实例为了简化步骤，使用了较为简单的密码，生产环境请设置符合运维规范的复杂密码来进行替换。 注意：一定要给数据库做好相关的高可用和备份措施，像对待生成业务数据库一样对待它哦。",-1),ft=s("h3",{id:"消息代理rabbitmq",tabindex:"-1"},[n("消息代理RabbitMQ "),s("a",{class:"header-anchor",href:"#消息代理rabbitmq","aria-hidden":"true"},"#")],-1),St=s("p",null,"OpenStack 使用（Message broker）消息代理在各个服务之间进行协调和状态管理。OpenStack支持三种开源的消息队列服务。分别为RabbitMQ、Qpid、ZeroMQ。Openstack默认使用RabbitMQ。 消息队列在OpenStack整个架构中扮演着交通枢纽的作用，正是因为OpenStack部署的灵活性、各个组件的松耦合、架构的扁平化，反而使得OpenStack更加依赖于消息队列。OpenStack的控制、计算、网络与存储服务均需要通过消息队列进行通信。 你可以将RabbitMQ部署在独立的服务器中，或者使用RabbitMQ集群这取决于你的实际情况，在实验环境，部署在控制节点即可。",-1),Et=s("ol",null,[s("li",null,"安装RabbitMQ")],-1),Pt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y rabbitmq-server")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nt=s("ol",null,[s("li",null,"设置开启启动，并启动RabbitMQ")],-1),Rt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable rabbitmq-server.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start rabbitmq-server.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tt=s("ol",null,[s("li",null,"添加openstack用户。")],-1),It=s("p",null,"创建一个openstack用户，密码为openstack。注意实际使用中进行密码修改，这里设置的用户名和密码在后面配置OpenStack组件的时候需要在配置文件里面设置。",-1),Ot=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# rabbitmqctl add_user openstack openstack")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'Creating user "openstack" ...')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mt=s("ol",null,[s("li",null,"给刚才创建的openstack用户，创建权限。")],-1),wt=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# rabbitmqctl set_permissions openstack ".*" ".*" ".*"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'Setting permissions for user "openstack" in vhost "/" ...')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kt=s("ol",null,[s("li",null,"启用Web监控插件")],-1),Lt=s("p",null,[n("RabbitMQ自带了一个Web监控插件，可以通过Web界面监控RabbitMQ的运行状态。同时也提供了HTTP API。可以方便的集成到Nagios、Zabbix等监控平台上。 Web监控插件启用后就可以通过"),s("a",{href:"http://ip:15672/%E6%9D%A5%E8%AE%BF%E9%97%AEweb%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%E3%80%82",target:"_blank",rel:"noreferrer"},"http://IP:15672/来访问web管理界面。")],-1),Ut=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# rabbitmq-plugins list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# rabbitmq-plugins enable rabbitmq_management")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"（注：如果主机名不能解析，rabbitMQ将无法启动。在生产应用时建议设置为集群模式，建议三个节点。1个硬盘节点、两个内存节点。）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# lsof -i:15672")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COMMAND  PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"beam    2620 rabbitmq   15u  IPv4  16805      0t0  TCP *:15672 (LISTEN)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jt=s("p",null,[n("默认情况下RabbitMQ服务使用5672端口，而Web管理插件监听15672端口，直接在浏览器输入"),s("a",{href:"http://192.168.56.11:15672/",target:"_blank",rel:"noreferrer"},"http://192.168.56.11:15672")],-1),Gt=s("blockquote",null,[s("p",null,"RabbitMQ默认的用户名和密码均为guest。之前创建的openstack的用户是无法通过Web界面登录的。")],-1),Ht=s("p",null,"（图2.2.2）",-1),Ft=s("blockquote",null,[s("p",null,"实践经验：消息队列收发消息的性能和消息队列的HA能力直接影响OpenStack的性能和高可用。如果消息队列Down机，OpenStack将无法创建新的云主机，以及进行其它的管理工作。所以在企业生产环境中，需要使用RabbitMQ的集群来保证可用性。同时做好监控工作，RabbitMQ自带HTTP的API，便于集成到企业的监控平台上。")],-1),Vt=s("h1",{id:"_1-3-openstack验证服务keystone",tabindex:"-1"},[n("1.3 OpenStack验证服务KeyStone "),s("a",{class:"header-anchor",href:"#_1-3-openstack验证服务keystone","aria-hidden":"true"},"#")],-1),Bt=s("p",null,"Keystone（OpenStack Identity Service）是OpenStack框架中，负责身份验证、服务规则和服务令牌的功能，它实现了OpenStack的Identity API。",-1),qt=s("p",null,"Keystone类似一个服务总线， 或者说是整个OpenStack框架的注册中心，其他服务通过keystone来注册其服务的Endpoint（服务访问的URL），任何服务之间相互的调用，需要经过Keystone的身份验证，来获得目标服务的Endpoint来找到目标服务。",-1),Yt=s("h3",{id:"keystone概述",tabindex:"-1"},[n("Keystone概述 "),s("a",{class:"header-anchor",href:"#keystone概述","aria-hidden":"true"},"#")],-1),zt=s("p",null,"Keystone提供了以下两个主要的功能：",-1),$t=s("ul",null,[s("li",null,"用户与认证:用户权限与用户行为跟踪；"),s("li",null,"服务目录:提供一个服务目录，包括所有服务项与相关Api的端点。")],-1),Xt=s("p",null,"下面我们从这两个主要功能来了解Keystone的概念，和Keystone在Openstack中的作用。",-1),Jt=s("ol",null,[s("li",null,[s("p",null,"Keystone用户与认证"),s("p",null,"Keystone为各个Openstack组件提供用户和认证服务，各个组件都必须与Keystone进行交互。比如登陆认证是用户在访问Openstack各个组件中的API时，必须通过Keystone的用户名和密码验证，最终通过Kyestone验证获取token，完成对用户的登陆认证。如果认证失败，该用户将不能访问该API。")])],-1),Wt=s("p",null,[s("strong",null,"User")],-1),Qt=s("p",null,"User即用户，它是用一个数字代表使用OpenStack云服务的一个人、系统、或服务。身份验证服务将会验证传入的由用户声明将调用的请求。用户如果已经登录，可就能分配令牌（tokens）访问资源。 用户可能被直接分配给特定的租户，用户行为被包含在租户（tenant），Users通过认证信息（credentials，如密码、API Keys等）进行验证。",-1),Zt=s("p",null,[s("strong",null,"Credentials")],-1),sc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Credentials即证书，用户可以通过身份验证，保证数据通常只被一个用户属于或拥有(因为没有其他人应该知道数据)。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nc=s("p",null,"以下为证书的例子: 一个匹配的用户名和密码 一个匹配的用户名和API键 一个身份认证令牌",-1),lc=s("p",null,[s("strong",null,"Authentication")],-1),ec=s("p",null,"Authentication即认证，认证是确认身份或识别真实性的行为。身份服务通过与用户的一组声明验证以确认传入的请求是由该用户声明过的。这些声明被初始化为一组证书 (username&password, or username and API key)。初始确认后，身份服务将会给用户发布一个确认身份的令牌(Token)，在用户随后的请求中可以使用这个令牌授权访问。",-1),oc=s("p",null,[s("strong",null,"Token：")],-1),ac=s("p",null,[n("Token即令牌，是一个用户访问资源的任意文本，每一个令牌都有一个范围，描述了可以访问哪些资源。令牌可能随时撤消，是有有效期的。身份认证是支持令牌认证的，它的目的为在未来支持额外的协议。其目的是为了让它首先成为一种集成服务，而不是一种渴望成为丰富的身份存储和管理的解决方案。 T "),s("strong",null,"Tenant：")],-1),tc=s("p",null,"Tenant即租户，它是各个服务中的一些可以访问的资源集合。它是一个容器，用于组织和隔离资源，或标识对象。一个租户可以一个客户、账户、组织、项目的映射。例如，在Nova中一个tenant可以是一些机器，在Swift和Glance中一个tenant可以是一些镜像存储，在Neutron中一个tenant可以是一些网络资源。Users默认的总是绑定到某些tenant上。",-1),cc=s("p",null,[s("strong",null,"Role：")],-1),ic=s("p",null,"Role即角色，Roles代表一组用户可以访问的资源权限，例如Nova中的虚拟机、Glance中的镜像。Users可以被添加到任意一个全局的或租户内的角色中。在全局的role中，用户的role权限作用于所有的租户，即可以对所有的租户执行role规定的权限；在租户内的role中，用户仅能在当前租户内执行role规定的权限。",-1),rc=s("p",null,[s("strong",null,"Domain：")],-1),pc=s("p",null,"在KeyStone V3版本将 Tenant 改为 Project 并在其上添加 Domain 的概念，这更加符合现实世界和云服务的映射。利用 Domain 实现真正的多租户（multi-tenancy）架构，Domain 担任 Project 的高层容器。云服务的客户是 Domain 的所有者，他们可以在自己的 Domain 中创建多个 Projects、Users、Groups 和 Roles。通过引入 Domain，云服务客户可以对其拥有的多个 Project 进行统一管理，而不必再向过去那样对每一个 Project 进行单独管理。",-1),dc=s("p",null,[s("strong",null,"Group：")],-1),Ac=s("p",null,"Group 是一组 Users 的容器，可以向 Group 中添加用户，并直接给 Group 分配角色，那么在这个 Group 中的所有用户就都拥有了 Group 所拥有的角色权限。通过引入 Group 的概念，Keystone V3 实现了对用户组的管理，达到了同时管理一组用户权限的目的。这与 V2 中直接向 User/Project 指定 Role 不同，使得对云服务进行管理更加便捷。 Domain、Group、Project、User 和 Role 的关系图",-1),Cc=s("p",null,"如图 2 所示，在一个 Domain 中包含 3 个 Projects,可以通过 Group1 将 Role Sysadmin直接赋予 Domain,那么 Group1 中的所有用户将会对 Domain 中的所有 Projects 都拥有管理员权限。也可以通过 Group2 将 Role Engineer 只赋予 Project3,这样 Group2 中的 User 就只拥有对 Project3 相应的权限，而不会影响其它 Projects。",-1),uc=s("ol",null,[s("li",null,[s("p",null,"Keystone服务目录"),s("p",null,"上文说过，Keystone除了用户管理相关的支撑，还有一个重要的作用是一个服务目录。KeyStone为Openstack各个服务提供了一个REST API端点列表。")]),s("li",null,[s("p",null,"Service Service即服务，如Nova、Glance、Swift。根据前三个概念（User，Tenant和Role）一个服务可以确认当前用户是否具有访问其资源的权限。但是当一个user尝试着访问其租户内的service时，他必须知道这个service是否存在以及如何访问这个service，这里通常使用一些不同的名称表示不同的服务。在上文中谈到的Role，实际上也是可以绑定到某个service的。")]),s("li",null,[s("p",null,[n("Endpoint Endpoint，翻译为“端点”，我们可以理解它是一个服务暴露出来的访问点，如果需要访问一个服务，则必须知道他的endpoint。因此，在keystone中包含一个endpoint模板（endpoint template，在安装keystone的时候我们可以在conf文件夹下看到这个文件），这个模板提供了所有存在的服务endpoints信息。一个endpoint template包含一个URLs列表，列表中的每个URL都对应一个服务实例的访问地址，并且具有public、private和admin这三种权限。public url可以被全局访问（如"),s("a",{href:"http://compute.example.com",target:"_blank",rel:"noreferrer"},"http://compute.example.com），private"),n("%2Cprivate/) url只能被局域网访问（如"),s("a",{href:"http://compute.example.local",target:"_blank",rel:"noreferrer"},"http://compute.example.local），admin"),n("%2Cadmin/) url被从常规的访问中分离。")])])],-1),yc=s("h3",{id:"keystone部署",tabindex:"-1"},[n("KeyStone部署 "),s("a",{class:"header-anchor",href:"#keystone部署","aria-hidden":"true"},"#")],-1),hc=s("p",null,"OpenStack中所有服务的安装可以说是最简单的。复杂的就在于本身的配置文件的修改和与Keystone相关的配置。还记得上面说的，OpenStack的每个组件如果能够使用都必须在Keystone创建Service和Endpoint吗？好的，我们开始。",-1),_c=s("ol",null,[s("li",null,"安装keystone")],-1),Dc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y openstack-keystone httpd mod_wsgi memcached python-memcached")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gc=s("ol",null,[s("li",null,"设置Memcache开启启动并启动Memcached")],-1),mc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#keystone使用Memcached来缓存验证后生成的token。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable memcached.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/memcached")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'PORT="11211"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'USER="memcached"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'MAXCONN="1024"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CACHESIZE="64"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OPTIONS="-l 192.168.56.11,::1"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start memcached.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bc=s("ol",null,[s("li",null,"Keystone配置")],-1),kc=s("p",null,"KeyStone的配置只需要修改/etc/keystone/keystone.conf即可，涉及Admin Token和Mysql连接，其它均使用默认配置即可。所有配置文件都存放到/etc/keystone（项目名）目录下。日志都存放在/var/log/keystone（项目名）目录下，其它项目也是如此。 好的，我们暂停一下，在后面的部署中，我们会使用这样的方式列出配置，未列出的配置，保持默认不进行修改，除非特别提示到。另外要注意配置的位置，OpenStack所有服务都会有[DEFAULT] [dtabase] 这样的配置部分，请在文中列出的配置部分里面进行配置，切记！。因为确实有相同的配置存在在不同的配置端的情况，这样例外情况，如果没有按要求配置，可能就无法正常运行。",-1),vc=s("ul",null,[s("li",null,[s("p",null,"配置KeyStone数据库"),s("p",null,"OpenStack中所有服务的数据库同步都需要依赖与配置文件中的数据库连接的配置，所以必须先修改完毕配置文件后，再进行数据库的初始化操作。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/keystone/keystone.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"设置Token和Memcached")])],-1),xc=s("p",null,"在之前的KeyStone版本由于所有的API通信都要请求Keystone来生产Token，之前是存放在MySQL表里，导致表特别大，经常需要手动清理，而且性能下降，现在新的版本我们可以存放在memcache里面了。",-1),fc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[token]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"provider = fernet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sc=s("ul",null,[s("li",null,"同步数据库：")],-1),Ec=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "keystone-manage db_sync" keystone')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pc=s("blockquote",null,[s("p",null,"小提示：为什么要使用keystone用户来同步数据呢，因为同步操作会生产日志/var/log/keystone/keystone.log，如果使用root用户，那么生成的文件权限为root用户，keystone启动的时候没有权限读取该文件，会无法启动。如果你的同步执行有问题，那么可以查看日志获取详细的错误信息。")],-1),Nc=s("ul",null,[s("li",null,"验证数据库创建是否正常：")],-1),Rc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# mysql -h 192.168.56.11 -ukeystone -pkeystone -e "use keystone;show tables;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tc=s("ol",null,[s("li",null,[s("p",null,"初始化fernet keys"),s("p",null,"生成完毕之后，会创建/etc/keystone/fernet-keys目录"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# keystone-manage credential_setup --keystone-user keystone --keystone-group keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"初始化keystone")])],-1),Ic=s("p",null,"还记得上面说的Openstack的每个组件都必须在Keystone上进行注册。当然也包括Keystone本身。身份认证服务管理了一个与您环境相关的 API 端点的目录。服务使用这个目录来决定如何与您环境中的其他服务进行通信。 OpenStack使用三个API端点变种代表每种服务：admin，internal和public。默认情况下，管理API端点允许修改用户和租户而公共和内部APIs不允许这些操作。在生产环境中，处于安全原因，变种为了服务不同类型的用户可能驻留在单独的网络上。 对实例而言，公共API网络为了让顾客管理他们自己的云在互联网上是可见的。管理API网络在管理云基础设施的组织中操作也是有所限制的。内部API网络可能会被限制在包含OpenStack服务的主机上。此外，OpenStack支持可伸缩性的多区域。为了简单起见，我们这里均使用一个IP地址。192.168.56.11。",-1),Oc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# keystone-manage bootstrap --bootstrap-password admin \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-admin-url http://192.168.56.11:5000/v3/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-internal-url http://192.168.56.11:5000/v3/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-public-url http://192.168.56.11:5000/v3/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-region-id RegionOne")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mc=s("ol",null,[s("li",null,"验证Keystone配置")],-1),wc=s("p",null,"下面我将上面进行的配置列出来，供读者进行比对，配置应该和本文保持一致。",-1),Kc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# grep "^[a-z]" /etc/keystone/keystone.conf ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"provider = fernet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Lc=s("ol",null,[s("li",null,"KeyStone启动")],-1),Uc=s("p",null,"OpenStack Keystone使用Apache来进行启动，提高了性能。 配置ServerName，注意一定要配置，不然会有奇怪的问题出现。",-1),jc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/httpd/conf/httpd.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ServerName 192.168.56.11:80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"创建配置文件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Gc=s("p",null,"启动keystone，并查看端口。",-1),Hc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp | grep httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6       0      0 :::5000                 :::*              LISTEN      3408/httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6       0      0 :::80                   :::*              LISTEN      3408/httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"现在，如果你的Keystone没有正常的监听端口，那么请查看日志，后期我们会不停的强调读者通过查看日志来排查问题，OpenStack的日志是值得信赖的。如果你想让朋友帮助解决问题，请不要使用日志截图的方式，请发送完整的日志。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fc=s("h3",{id:"keystone权限管理",tabindex:"-1"},[n("Keystone权限管理 "),s("a",{class:"header-anchor",href:"#keystone权限管理","aria-hidden":"true"},"#")],-1),Vc=s("p",null,"我们已经成功的运行了Keystone服务，要提供身份认证服务，需要使用域、项目、用户和角色的组合。 首先我们要创建一个超级管理员用户、角色和项目。默认情况下。在创建用户之前，我们需要连接到Keystone。问题来了，现在我们没有任何用户，我们如何登录KeyStone呢？这个时候ADMIN_TOKEN就可以帮忙了，我们可以使用这个超级密码直接登录到KeyStone上，所以说，一定要保护好你的ADMIN_TOKEN。 好的，现在我们要连接到Keystone上，有两种方法：",-1),Bc=s("ul",null,[s("li",null,"使用--os-token等参数的方式（就是通过参数的方式）"),s("li",null,"使用环境变量（将参数设置为环境变量，keystone直接读取环境变量）"),s("li",null,"设置环境变量")],-1),qc=s("p",null,"在这里，我们使用三个环境变量用来连接keystone。admin用户和密码就是我们前面使用keystone-manage bootstrap初始化的。",-1),Yc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USERNAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PASSWORD=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_NAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USER_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_AUTH_URL=http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IDENTITY_API_VERSION=3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zc=s("p",null,"请注意环境变量的问题，不要打开新的会话进行操作。",-1),$c=s("ol",null,[s("li",null,"创建实验用的demo项目、用户和角色")],-1),Xc=s("p",null,"下面我们创建一个普通用户和租户，我们下面的实验均使用这个普通用户进行Openstack的管理。",-1),Jc=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack domain create --description "An Example Domain" example')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack project create --domain default --description "Demo Project" myproject')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password-prompt myuser")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role create myrole")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project myproject --user myuser myrole")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wc=s("blockquote",null,[s("p",null,"在创建用户的时候可以使用--password-prompt，然后根据提示输入密码")],-1),Qc=s("ol",null,[s("li",null,[s("p",null,"创建一个服务的项目"),s("p",null,"OpenStack服务也需要使用用户名、租户和角色，用来访问OpenStack的各个服务。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack project create --domain default --description "Service Project" service')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建各个服务连接Keystone的账户 后面我们部署的其它服务都需要到Keystone上进行认证，所以现在就可以提前将各个服务的账号创建上。并全部加入service项目。"),s("ul",null,[s("li",null,[s("p",null,"创建glance用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password glance glance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user glance admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建nova用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password nova nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user nova admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建placement用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password placement placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user placement admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建Neutron用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password neutron neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user neutron admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建cinder用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password cinder cinder")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user cinder admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])])])],-1),Zc=s("h3",{id:"验证keystone安装",tabindex:"-1"},[n("验证Keystone安装 "),s("a",{class:"header-anchor",href:"#验证keystone安装","aria-hidden":"true"},"#")],-1),si=s("p",null,"首先，我们需要取消OS_TOKEN和OS_URL这两个变量。这两个变量是用于引导我们创建Admin用户和Keystone服务自身Service和Endpoint注册时候的用的，现在已经不需要了。",-1),ni=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# unset OS_AUTH_URL OS_PASSWORD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),li=s("p",null,[s("strong",null,"测试admin用户")],-1),ei=s("p",null,"密码为admin，需要输入两次，如果能正常获取token说明配置成功。",-1),oi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-domain-name Default --os-user-domain-name Default \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-name admin --os-username admin token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#密码为admin，需要输入两次，如果能正常获取token说明配置成功。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ai=s("p",null,[s("strong",null,"测试myuser用户")],-1),ti=s("p",null,"密码为你设置的，需要输入两次，如果能正常获取token说明配置成功。",-1),ci=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-domain-name Default --os-user-domain-name Default \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-name myproject --os-username myuser token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ii=s("h3",{id:"环境变量脚本配置",tabindex:"-1"},[n("环境变量脚本配置 "),s("a",{class:"header-anchor",href:"#环境变量脚本配置","aria-hidden":"true"},"#")],-1),ri=s("p",null,"使用Keystone命令有两种方式，第一种就像上面。我们使用指定--os-username、--os-password和--os-password这样的选项来进行操作，但是这样在我们日常操作中会比较麻烦。第二种方式就是使用环境变量，这样可以避免每次使用都要制定变量。我们将这些常用的变量设置为环境变量。 下面建立环境变量为其它服务部署和配置使用",-1),pi=s("ol",null,[s("li",null,"设置admin环境变量脚本")],-1),di=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /root/admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USER_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_NAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USERNAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PASSWORD=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_AUTH_URL=http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IDENTITY_API_VERSION=3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IMAGE_API_VERSION=2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ai=s("ol",null,[s("li",null,"创建普通用户的环境变量脚本")],-1),Ci=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /root/demo-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USER_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_NAME=myproject")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USERNAME=myuser")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PASSWORD=123.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_AUTH_URL=http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IDENTITY_API_VERSION=3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IMAGE_API_VERSION=2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ui=s("p",null,"创建完毕变量后，在后期使用某个账户的权限，只需要source一下就可以使用，例如：",-1),yi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /root/admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hi=s("p",null,"测试demo用户，是否能够获取token",-1),_i=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /root/demo-openstack.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Di=s("h1",{id:"_1-3-openstack验证服务keystone-1",tabindex:"-1"},[n("1.3 OpenStack验证服务KeyStone "),s("a",{class:"header-anchor",href:"#_1-3-openstack验证服务keystone-1","aria-hidden":"true"},"#")],-1),gi=s("p",null,"Keystone（OpenStack Identity Service）是OpenStack框架中，负责身份验证、服务规则和服务令牌的功能，它实现了OpenStack的Identity API。",-1),mi=s("p",null,"Keystone类似一个服务总线， 或者说是整个OpenStack框架的注册中心，其他服务通过keystone来注册其服务的Endpoint（服务访问的URL），任何服务之间相互的调用，需要经过Keystone的身份验证，来获得目标服务的Endpoint来找到目标服务。",-1),bi=s("h3",{id:"keystone概述-1",tabindex:"-1"},[n("Keystone概述 "),s("a",{class:"header-anchor",href:"#keystone概述-1","aria-hidden":"true"},"#")],-1),ki=s("p",null,"Keystone提供了以下两个主要的功能：",-1),vi=s("ul",null,[s("li",null,"用户与认证:用户权限与用户行为跟踪；"),s("li",null,"服务目录:提供一个服务目录，包括所有服务项与相关Api的端点。")],-1),xi=s("p",null,"下面我们从这两个主要功能来了解Keystone的概念，和Keystone在Openstack中的作用。",-1),fi=s("ol",null,[s("li",null,[s("p",null,"Keystone用户与认证"),s("p",null,"Keystone为各个Openstack组件提供用户和认证服务，各个组件都必须与Keystone进行交互。比如登陆认证是用户在访问Openstack各个组件中的API时，必须通过Keystone的用户名和密码验证，最终通过Kyestone验证获取token，完成对用户的登陆认证。如果认证失败，该用户将不能访问该API。")])],-1),Si=s("p",null,[s("strong",null,"User")],-1),Ei=s("p",null,"User即用户，它是用一个数字代表使用OpenStack云服务的一个人、系统、或服务。身份验证服务将会验证传入的由用户声明将调用的请求。用户如果已经登录，可就能分配令牌（tokens）访问资源。 用户可能被直接分配给特定的租户，用户行为被包含在租户（tenant），Users通过认证信息（credentials，如密码、API Keys等）进行验证。",-1),Pi=s("p",null,[s("strong",null,"Credentials")],-1),Ni=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Credentials即证书，用户可以通过身份验证，保证数据通常只被一个用户属于或拥有(因为没有其他人应该知道数据)。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ri=s("p",null,"以下为证书的例子: 一个匹配的用户名和密码 一个匹配的用户名和API键 一个身份认证令牌",-1),Ti=s("p",null,[s("strong",null,"Authentication")],-1),Ii=s("p",null,"Authentication即认证，认证是确认身份或识别真实性的行为。身份服务通过与用户的一组声明验证以确认传入的请求是由该用户声明过的。这些声明被初始化为一组证书 (username&password, or username and API key)。初始确认后，身份服务将会给用户发布一个确认身份的令牌(Token)，在用户随后的请求中可以使用这个令牌授权访问。",-1),Oi=s("p",null,[s("strong",null,"Token：")],-1),Mi=s("p",null,[n("Token即令牌，是一个用户访问资源的任意文本，每一个令牌都有一个范围，描述了可以访问哪些资源。令牌可能随时撤消，是有有效期的。身份认证是支持令牌认证的，它的目的为在未来支持额外的协议。其目的是为了让它首先成为一种集成服务，而不是一种渴望成为丰富的身份存储和管理的解决方案。 T "),s("strong",null,"Tenant：")],-1),wi=s("p",null,"Tenant即租户，它是各个服务中的一些可以访问的资源集合。它是一个容器，用于组织和隔离资源，或标识对象。一个租户可以一个客户、账户、组织、项目的映射。例如，在Nova中一个tenant可以是一些机器，在Swift和Glance中一个tenant可以是一些镜像存储，在Neutron中一个tenant可以是一些网络资源。Users默认的总是绑定到某些tenant上。",-1),Ki=s("p",null,[s("strong",null,"Role：")],-1),Li=s("p",null,"Role即角色，Roles代表一组用户可以访问的资源权限，例如Nova中的虚拟机、Glance中的镜像。Users可以被添加到任意一个全局的或租户内的角色中。在全局的role中，用户的role权限作用于所有的租户，即可以对所有的租户执行role规定的权限；在租户内的role中，用户仅能在当前租户内执行role规定的权限。",-1),Ui=s("p",null,[s("strong",null,"Domain：")],-1),ji=s("p",null,"在KeyStone V3版本将 Tenant 改为 Project 并在其上添加 Domain 的概念，这更加符合现实世界和云服务的映射。利用 Domain 实现真正的多租户（multi-tenancy）架构，Domain 担任 Project 的高层容器。云服务的客户是 Domain 的所有者，他们可以在自己的 Domain 中创建多个 Projects、Users、Groups 和 Roles。通过引入 Domain，云服务客户可以对其拥有的多个 Project 进行统一管理，而不必再向过去那样对每一个 Project 进行单独管理。",-1),Gi=s("p",null,[s("strong",null,"Group：")],-1),Hi=s("p",null,"Group 是一组 Users 的容器，可以向 Group 中添加用户，并直接给 Group 分配角色，那么在这个 Group 中的所有用户就都拥有了 Group 所拥有的角色权限。通过引入 Group 的概念，Keystone V3 实现了对用户组的管理，达到了同时管理一组用户权限的目的。这与 V2 中直接向 User/Project 指定 Role 不同，使得对云服务进行管理更加便捷。 Domain、Group、Project、User 和 Role 的关系图",-1),Fi=s("p",null,"如图 2 所示，在一个 Domain 中包含 3 个 Projects,可以通过 Group1 将 Role Sysadmin直接赋予 Domain,那么 Group1 中的所有用户将会对 Domain 中的所有 Projects 都拥有管理员权限。也可以通过 Group2 将 Role Engineer 只赋予 Project3,这样 Group2 中的 User 就只拥有对 Project3 相应的权限，而不会影响其它 Projects。",-1),Vi=s("ol",null,[s("li",null,[s("p",null,"Keystone服务目录"),s("p",null,"上文说过，Keystone除了用户管理相关的支撑，还有一个重要的作用是一个服务目录。KeyStone为Openstack各个服务提供了一个REST API端点列表。")]),s("li",null,[s("p",null,"Service Service即服务，如Nova、Glance、Swift。根据前三个概念（User，Tenant和Role）一个服务可以确认当前用户是否具有访问其资源的权限。但是当一个user尝试着访问其租户内的service时，他必须知道这个service是否存在以及如何访问这个service，这里通常使用一些不同的名称表示不同的服务。在上文中谈到的Role，实际上也是可以绑定到某个service的。")]),s("li",null,[s("p",null,[n("Endpoint Endpoint，翻译为“端点”，我们可以理解它是一个服务暴露出来的访问点，如果需要访问一个服务，则必须知道他的endpoint。因此，在keystone中包含一个endpoint模板（endpoint template，在安装keystone的时候我们可以在conf文件夹下看到这个文件），这个模板提供了所有存在的服务endpoints信息。一个endpoint template包含一个URLs列表，列表中的每个URL都对应一个服务实例的访问地址，并且具有public、private和admin这三种权限。public url可以被全局访问（如"),s("a",{href:"http://compute.example.com",target:"_blank",rel:"noreferrer"},"http://compute.example.com），private"),n("%2Cprivate/) url只能被局域网访问（如"),s("a",{href:"http://compute.example.local",target:"_blank",rel:"noreferrer"},"http://compute.example.local），admin"),n("%2Cadmin/) url被从常规的访问中分离。")])])],-1),Bi=s("h3",{id:"keystone部署-1",tabindex:"-1"},[n("KeyStone部署 "),s("a",{class:"header-anchor",href:"#keystone部署-1","aria-hidden":"true"},"#")],-1),qi=s("p",null,"OpenStack中所有服务的安装可以说是最简单的。复杂的就在于本身的配置文件的修改和与Keystone相关的配置。还记得上面说的，OpenStack的每个组件如果能够使用都必须在Keystone创建Service和Endpoint吗？好的，我们开始。",-1),Yi=s("ol",null,[s("li",null,"安装keystone")],-1),zi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y openstack-keystone httpd mod_wsgi memcached python-memcached")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$i=s("ol",null,[s("li",null,"设置Memcache开启启动并启动Memcached")],-1),Xi=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#keystone使用Memcached来缓存验证后生成的token。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable memcached.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/memcached")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'PORT="11211"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'USER="memcached"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'MAXCONN="1024"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CACHESIZE="64"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OPTIONS="-l 192.168.56.11,::1"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start memcached.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ji=s("ol",null,[s("li",null,"Keystone配置")],-1),Wi=s("p",null,"KeyStone的配置只需要修改/etc/keystone/keystone.conf即可，涉及Admin Token和Mysql连接，其它均使用默认配置即可。所有配置文件都存放到/etc/keystone（项目名）目录下。日志都存放在/var/log/keystone（项目名）目录下，其它项目也是如此。 好的，我们暂停一下，在后面的部署中，我们会使用这样的方式列出配置，未列出的配置，保持默认不进行修改，除非特别提示到。另外要注意配置的位置，OpenStack所有服务都会有[DEFAULT] [dtabase] 这样的配置部分，请在文中列出的配置部分里面进行配置，切记！。因为确实有相同的配置存在在不同的配置端的情况，这样例外情况，如果没有按要求配置，可能就无法正常运行。",-1),Qi=s("ul",null,[s("li",null,[s("p",null,"配置KeyStone数据库"),s("p",null,"OpenStack中所有服务的数据库同步都需要依赖与配置文件中的数据库连接的配置，所以必须先修改完毕配置文件后，再进行数据库的初始化操作。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/keystone/keystone.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"设置Token和Memcached")])],-1),Zi=s("p",null,"在之前的KeyStone版本由于所有的API通信都要请求Keystone来生产Token，之前是存放在MySQL表里，导致表特别大，经常需要手动清理，而且性能下降，现在新的版本我们可以存放在memcache里面了。",-1),sr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[token]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"provider = fernet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nr=s("ul",null,[s("li",null,"同步数据库：")],-1),lr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "keystone-manage db_sync" keystone')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),er=s("blockquote",null,[s("p",null,"小提示：为什么要使用keystone用户来同步数据呢，因为同步操作会生产日志/var/log/keystone/keystone.log，如果使用root用户，那么生成的文件权限为root用户，keystone启动的时候没有权限读取该文件，会无法启动。如果你的同步执行有问题，那么可以查看日志获取详细的错误信息。")],-1),or=s("ul",null,[s("li",null,"验证数据库创建是否正常：")],-1),ar=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# mysql -h 192.168.56.11 -ukeystone -pkeystone -e "use keystone;show tables;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tr=s("ol",null,[s("li",null,[s("p",null,"初始化fernet keys"),s("p",null,"生成完毕之后，会创建/etc/keystone/fernet-keys目录"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# keystone-manage credential_setup --keystone-user keystone --keystone-group keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"初始化keystone")])],-1),cr=s("p",null,"还记得上面说的Openstack的每个组件都必须在Keystone上进行注册。当然也包括Keystone本身。身份认证服务管理了一个与您环境相关的 API 端点的目录。服务使用这个目录来决定如何与您环境中的其他服务进行通信。 OpenStack使用三个API端点变种代表每种服务：admin，internal和public。默认情况下，管理API端点允许修改用户和租户而公共和内部APIs不允许这些操作。在生产环境中，处于安全原因，变种为了服务不同类型的用户可能驻留在单独的网络上。 对实例而言，公共API网络为了让顾客管理他们自己的云在互联网上是可见的。管理API网络在管理云基础设施的组织中操作也是有所限制的。内部API网络可能会被限制在包含OpenStack服务的主机上。此外，OpenStack支持可伸缩性的多区域。为了简单起见，我们这里均使用一个IP地址。192.168.56.11。",-1),ir=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# keystone-manage bootstrap --bootstrap-password admin \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-admin-url http://192.168.56.11:5000/v3/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-internal-url http://192.168.56.11:5000/v3/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-public-url http://192.168.56.11:5000/v3/ \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --bootstrap-region-id RegionOne")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rr=s("ol",null,[s("li",null,"验证Keystone配置")],-1),pr=s("p",null,"下面我将上面进行的配置列出来，供读者进行比对，配置应该和本文保持一致。",-1),dr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# grep "^[a-z]" /etc/keystone/keystone.conf ')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection = mysql+pymysql://keystone:keystone@192.168.56.11/keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"provider = fernet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ar=s("ol",null,[s("li",null,"KeyStone启动")],-1),Cr=s("p",null,"OpenStack Keystone使用Apache来进行启动，提高了性能。 配置ServerName，注意一定要配置，不然会有奇怪的问题出现。",-1),ur=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/httpd/conf/httpd.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ServerName 192.168.56.11:80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"创建配置文件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yr=s("p",null,"启动keystone，并查看端口。",-1),hr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp | grep httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6       0      0 :::5000                 :::*              LISTEN      3408/httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6       0      0 :::80                   :::*              LISTEN      3408/httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"现在，如果你的Keystone没有正常的监听端口，那么请查看日志，后期我们会不停的强调读者通过查看日志来排查问题，OpenStack的日志是值得信赖的。如果你想让朋友帮助解决问题，请不要使用日志截图的方式，请发送完整的日志。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_r=s("h3",{id:"keystone权限管理-1",tabindex:"-1"},[n("Keystone权限管理 "),s("a",{class:"header-anchor",href:"#keystone权限管理-1","aria-hidden":"true"},"#")],-1),Dr=s("p",null,"我们已经成功的运行了Keystone服务，要提供身份认证服务，需要使用域、项目、用户和角色的组合。 首先我们要创建一个超级管理员用户、角色和项目。默认情况下。在创建用户之前，我们需要连接到Keystone。问题来了，现在我们没有任何用户，我们如何登录KeyStone呢？这个时候ADMIN_TOKEN就可以帮忙了，我们可以使用这个超级密码直接登录到KeyStone上，所以说，一定要保护好你的ADMIN_TOKEN。 好的，现在我们要连接到Keystone上，有两种方法：",-1),gr=s("ul",null,[s("li",null,"使用--os-token等参数的方式（就是通过参数的方式）"),s("li",null,"使用环境变量（将参数设置为环境变量，keystone直接读取环境变量）"),s("li",null,"设置环境变量")],-1),mr=s("p",null,"在这里，我们使用三个环境变量用来连接keystone。admin用户和密码就是我们前面使用keystone-manage bootstrap初始化的。",-1),br=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USERNAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PASSWORD=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_NAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USER_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_AUTH_URL=http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IDENTITY_API_VERSION=3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kr=s("p",null,"请注意环境变量的问题，不要打开新的会话进行操作。",-1),vr=s("ol",null,[s("li",null,"创建实验用的demo项目、用户和角色")],-1),xr=s("p",null,"下面我们创建一个普通用户和租户，我们下面的实验均使用这个普通用户进行Openstack的管理。",-1),fr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack domain create --description "An Example Domain" example')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack project create --domain default --description "Demo Project" myproject')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password-prompt myuser")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role create myrole")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project myproject --user myuser myrole")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sr=s("blockquote",null,[s("p",null,"在创建用户的时候可以使用--password-prompt，然后根据提示输入密码")],-1),Er=s("ol",null,[s("li",null,[s("p",null,"创建一个服务的项目"),s("p",null,"OpenStack服务也需要使用用户名、租户和角色，用来访问OpenStack的各个服务。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack project create --domain default --description "Service Project" service')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建各个服务连接Keystone的账户 后面我们部署的其它服务都需要到Keystone上进行认证，所以现在就可以提前将各个服务的账号创建上。并全部加入service项目。"),s("ul",null,[s("li",null,[s("p",null,"创建glance用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password glance glance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user glance admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建nova用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password nova nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user nova admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建placement用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password placement placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user placement admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建Neutron用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password neutron neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user neutron admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"创建cinder用户"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack user create --domain default --password cinder cinder")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack role add --project service --user cinder admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])])])],-1),Pr=s("h3",{id:"验证keystone安装-1",tabindex:"-1"},[n("验证Keystone安装 "),s("a",{class:"header-anchor",href:"#验证keystone安装-1","aria-hidden":"true"},"#")],-1),Nr=s("p",null,"首先，我们需要取消OS_TOKEN和OS_URL这两个变量。这两个变量是用于引导我们创建Admin用户和Keystone服务自身Service和Endpoint注册时候的用的，现在已经不需要了。",-1),Rr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# unset OS_AUTH_URL OS_PASSWORD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tr=s("p",null,[s("strong",null,"测试admin用户")],-1),Ir=s("p",null,"密码为admin，需要输入两次，如果能正常获取token说明配置成功。",-1),Or=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-domain-name Default --os-user-domain-name Default \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-name admin --os-username admin token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#密码为admin，需要输入两次，如果能正常获取token说明配置成功。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mr=s("p",null,[s("strong",null,"测试myuser用户")],-1),wr=s("p",null,"密码为你设置的，需要输入两次，如果能正常获取token说明配置成功。",-1),Kr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack --os-auth-url http://192.168.56.11:5000/v3 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-domain-name Default --os-user-domain-name Default \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--os-project-name myproject --os-username myuser token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Lr=s("h3",{id:"环境变量脚本配置-1",tabindex:"-1"},[n("环境变量脚本配置 "),s("a",{class:"header-anchor",href:"#环境变量脚本配置-1","aria-hidden":"true"},"#")],-1),Ur=s("p",null,"使用Keystone命令有两种方式，第一种就像上面。我们使用指定--os-username、--os-password和--os-password这样的选项来进行操作，但是这样在我们日常操作中会比较麻烦。第二种方式就是使用环境变量，这样可以避免每次使用都要制定变量。我们将这些常用的变量设置为环境变量。 下面建立环境变量为其它服务部署和配置使用",-1),jr=s("ol",null,[s("li",null,"设置admin环境变量脚本")],-1),Gr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /root/admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USER_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_NAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USERNAME=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PASSWORD=admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_AUTH_URL=http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IDENTITY_API_VERSION=3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IMAGE_API_VERSION=2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hr=s("ol",null,[s("li",null,"创建普通用户的环境变量脚本")],-1),Fr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /root/demo-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USER_DOMAIN_NAME=Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PROJECT_NAME=myproject")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_USERNAME=myuser")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_PASSWORD=123.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_AUTH_URL=http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IDENTITY_API_VERSION=3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"export OS_IMAGE_API_VERSION=2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vr=s("p",null,"创建完毕变量后，在后期使用某个账户的权限，只需要source一下就可以使用，例如：",-1),Br=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /root/admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),qr=s("p",null,"测试demo用户，是否能够获取token",-1),Yr=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /root/demo-openstack.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack token issue")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zr=s("h1",{id:"_1-4-openstack镜像服务glance",tabindex:"-1"},[n("1.4 OpenStack镜像服务Glance "),s("a",{class:"header-anchor",href:"#_1-4-openstack镜像服务glance","aria-hidden":"true"},"#")],-1),$r=s("h3",{id:"glance概述",tabindex:"-1"},[n("Glance概述 "),s("a",{class:"header-anchor",href:"#glance概述","aria-hidden":"true"},"#")],-1),Xr=s("p",null,"OpenStack中的Glance是镜像服务，能够提供发现、注册并查询虚拟机镜像，也是Openstack的一个组件或者说项目之一。镜像服务提供了一个Rest API的方式。 OpenStack的Glance镜像可以存放在本地文件系统，也可以存放在OpenStack的对象存储上。默认情况下是本地文件，存放在/var/lib/glance/images/目录下。 Glance还管理着快照，快照也是一种镜像，可以基于快照创建新的虚拟机。",-1),Jr=s("p",null,"Glance主要有两个组件",-1),Wr=s("p",null,"（图2.5.2）",-1),Qr=s("ul",null,[s("li",null,"Glance-api接收REST API请求，然后通过其他模块（glance-registry及image store）来完成诸如镜像的查找、获取、上传、删除等操作，api默认监听端口9292。"),s("li",null,"glance-registry用于与MySQL数据库交互，用于存储或获取镜像的元数据（metadata）；提供镜像元数据相关的REST接口，通过glance-registry，可以向数据库中写入或获取镜像的各种数据，glance-registry监听端口9191。Glance的数据库中有两张表，一张是image表，另一张是image property表。Image表保存了镜像格式、大小等信息；image property表则主要保存镜像的定制化信息。"),s("li",null,"database 用户存放镜像的元数据。"),s("li",null,"image store是一个存储的接口层，通过这个接口，glance可以获取镜像，image store支持的存储有Amazon的S3、OpenStack本身的Swift，还有诸如ceph，sheepdog，GlusterFS等分布式存储。 Image store是镜像保存与获取的接口，它仅仅是一个接口层，具体的实现需要外部的存储支持，")],-1),Zr=s("h3",{id:"glance部署",tabindex:"-1"},[n("Glance部署 "),s("a",{class:"header-anchor",href:"#glance部署","aria-hidden":"true"},"#")],-1),sp=s("ol",null,[s("li",null,[s("p",null,"安装Glance"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y openstack-glance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"配置Glance")])],-1),np=s("p",null,"Glance的配置是通过修改两个组件的配置文件来完成。Glance使用了MySQL和Keystone。",-1),lp=s("ul",null,[s("li",null,"Glance数据库配置")],-1),ep=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/glance/glance-api.conf ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection= mysql+pymysql://glance:glance@192.168.56.11/glance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),op=s("ul",null,[s("li",null,"设置Keystone")],-1),ap=s("p",null,"就像在Keystone章节提到了。OpenStack其它组件都需要和Keystone进行交互，来进行用户认证和服务目录的管理。对于Glance来说，Keystone的配置在glance-api.conf和glance-registry.conf都需要设置，而且配置相同。 glance-api.conf配置",-1),tp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/glance/glance-api.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[keystone_authtoken]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"www_authenticate_uri  = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"memcached_servers = 192.168.56.11:11211")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = glance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = glance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[paste_deploy]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"flavor=keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cp=s("ul",null,[s("li",null,[s("p",null,"设置Glance镜像存储"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/glance/glance-api.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#默认的存储方式是文件，可以指定镜像存储的路径")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[glance_store]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stores = file,http")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"default_store=file")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"filesystem_store_datadir=/var/lib/glance/images/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#也就是说，我们后面上传的镜像都保存在/var/lib/glance/images目录下。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),ip=s("ol",null,[s("li",null,[s("p",null,"同步数据库"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "glance-manage db_sync" glance')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"测试数据库同步情况")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# mysql -h 192.168.56.11 -uglance -pglance -e "use glance;show tables;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"启动Glance服务")])],-1),rp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable openstack-glance-api.service ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start openstack-glance-api.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pp=s("ol",null,[s("li",null,[s("p",null,"Glance服务注册"),s("p",null,"想要让别的服务可以使用Glance，就需要在Keystone上完成服务的注册。注意需要先source一下admin的环境变量。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /root/admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack service create --name glance --description "OpenStack Image" image')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne image public http://192.168.56.11:9292")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne image internal http://192.168.56.11:9292")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne image admin http://192.168.56.11:9292")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),dp=s("h3",{id:"验证glance安装",tabindex:"-1"},[n("验证Glance安装 "),s("a",{class:"header-anchor",href:"#验证glance安装","aria-hidden":"true"},"#")],-1),Ap=s("ol",null,[s("li",null,[s("p",null,"测试Glance状态"),s("p",null,"我们可以直接使用glance命令列出现在的所有镜像，如果出现一个空列表，说明Glance启动并配置完成。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /root/admin-openstack.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack image list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])]),s("p",null,"如果未出现报错，基本上可以确实部署没有问题，可以上传镜像进行测试。")]),s("li",null,[s("p",null,"Glance镜像上传测试")])],-1),Cp=s("p",null,"在刚开始实施OpenStack平台阶段，如果没有制作镜像。可以使用一个实验的镜像进行测试，这是一个小的Linux系统。",-1),up=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget http://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#上传并注册一个镜像。注意以后只要看到使用openstack命令，都需要保证，已经使用source命令导入了环境变量。因为这些操作都需要环境变量里面的账号进行认证授权。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 src]# openstack image create "cirros" --disk-format qcow2 \\')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--container-format bare --file cirros-0.4.0-x86_64-disk.img --public")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yp=s("h1",{id:"上传完毕后可以通过openstack-image-list再次查看上传的镜像。默认情况下，glance使用本地文件系统来保存上传的镜像。默认存放在-var-lib-glance-images-目录下，会将镜像以image-id来进行命名。",tabindex:"-1"},[n("上传完毕后可以通过openstack image list再次查看上传的镜像。默认情况下，Glance使用本地文件系统来保存上传的镜像。默认存放在/var/lib/glance/images/目录下，会将镜像以image id来进行命名。 "),s("a",{class:"header-anchor",href:"#上传完毕后可以通过openstack-image-list再次查看上传的镜像。默认情况下，glance使用本地文件系统来保存上传的镜像。默认存放在-var-lib-glance-images-目录下，会将镜像以image-id来进行命名。","aria-hidden":"true"},"#")],-1),hp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# openstack image list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Name   | Status |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| cf154a84-a73a-451b-bcb3-83c98e7c0d3e | cirros | active |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_p=s("h1",{id:"同时，这个文件会被保存到配置文件设置的目录下，并以id命名。",tabindex:"-1"},[n("同时，这个文件会被保存到配置文件设置的目录下，并以ID命名。 "),s("a",{class:"header-anchor",href:"#同时，这个文件会被保存到配置文件设置的目录下，并以id命名。","aria-hidden":"true"},"#")],-1),Dp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ls -l /var/lib/glance/images/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 12980")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r----- 1 glance glance 13287936 Dec  1 14:11 65f9826a-5ccb-47d9-8a1a-75e31fb88a4a")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gp=s("p",null,"Glance在OpenStack组件中，属于比较简单的一个。我建议读者如果一直跟着做实验的话，现在是时候停下来总结一下了。因为后面的服务的部署流程和glance都大同小异。",-1),mp=s("h1",{id:"_3-5-placement服务安装",tabindex:"-1"},[n("3.5 Placement服务安装 "),s("a",{class:"header-anchor",href:"#_3-5-placement服务安装","aria-hidden":"true"},"#")],-1),bp=s("h3",{id:"_3-5-1-placement概述",tabindex:"-1"},[n("3.5.1 Placement概述 "),s("a",{class:"header-anchor",href:"#_3-5-1-placement概述","aria-hidden":"true"},"#")],-1),kp=s("h3",{id:"_3-5-2-placement部署",tabindex:"-1"},[n("3.5.2 Placement部署 "),s("a",{class:"header-anchor",href:"#_3-5-2-placement部署","aria-hidden":"true"},"#")],-1),vp=s("ol",null,[s("li",null,"Placement服务注册")],-1),xp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack service create --name placement   --description "Placement API" placement')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne   placement public http://192.168.56.11:8778")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne   placement internal http://192.168.56.11:8778")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne   placement admin http://192.168.56.11:8778")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fp=s("ol",null,[s("li",null,[s("p",null,"安装Placement"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y openstack-placement-api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])]),s("li",null,[s("p",null,"配置Palacement")])],-1),Sp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/placement/placement.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[placement_database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection = mysql+pymysql://placement:placement@192.168.56.11/placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[api]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_strategy = keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[keystone_authtoken]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"memcached_servers = 192.168.56.11:11211")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/httpd/conf.d/00-placement-api.conf ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#增加下面配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<Directory /usr/bin>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Require all granted")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"</Directory>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"增加后如下：")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Listen 8778")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<VirtualHost *:8778>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  <Directory /usr/bin>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Require all granted")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"</Directory>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIProcessGroup placement-api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIApplicationGroup %{GLOBAL}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIPassAuthorization On")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIDaemonProcess placement-api processes=3 threads=1 user=placement group=placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIScriptAlias / /usr/bin/placement-api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  <IfVersion >= 2.4>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    ErrorLogFormat "%M"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  </IfVersion>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ErrorLog /var/log/placement/placement-api.log")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  #SSLEngine On")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  #SSLCertificateFile ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  #SSLCertificateKeyFile ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"</VirtualHost>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Alias /placement-api /usr/bin/placement-api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<Location /placement-api>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  SetHandler wsgi-script")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  Options +ExecCGI")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIProcessGroup placement-api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIApplicationGroup %{GLOBAL}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  WSGIPassAuthorization On")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"</Location>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ep=s("ol",null,[s("li",null,"同步数据库")],-1),Pp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "placement-manage db sync" placement')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Np=s("ol",null,[s("li",null,"重启httpd")],-1),Rp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart httpd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Tp=s("h1",{id:"_1-6-openstack计算服务nova",tabindex:"-1"},[n("1.6 OpenStack计算服务Nova "),s("a",{class:"header-anchor",href:"#_1-6-openstack计算服务nova","aria-hidden":"true"},"#")],-1),Ip=s("p",null,"Nova是OpenStack最早的两个模块之一（另一个是对象存储）。在OpenStack体系中是计算资源虚拟化的项目。同时Nova也是OpenStack项目中组件最多的一个项目。在中小型部署中，我们常常把除nova-compute之外的其它组件部署到一台服务器上，称之为控制节点。将nova-compute部署到单独的一台服务器上，称之为计算节点。",-1),Op=s("h3",{id:"nova服务组件",tabindex:"-1"},[n("Nova服务组件 "),s("a",{class:"header-anchor",href:"#nova服务组件","aria-hidden":"true"},"#")],-1),Mp=s("ul",null,[s("li",null,[s("p",null,"Nova-Api服务"),s("p",null,"主要用于接收和响应外部请求，它支持OpenStack API、Amazon EC2 等API"),s("ul",null,[s("li",null,"nova-api组件实现了RESTful API功能，是外部访问Nova的唯一途径。"),s("li",null,"接收外部的请求并通过Message Queue将请求发送给其他的服务组件，同时也兼容EC2 API，所以也可以用EC2的管理工具对nova进行日常管理。")])]),s("li",null,[s("p",null,"Nova-Cert服务"),s("p",null,"是Nova的证书管理服务，用来为EC2服务提供身份验证，仅仅是在EC2 API的请求中使用。")]),s("li",null,[s("p",null,"Nova-Scheduler服务"),s("p",null,"用于Nova的调度工作，在创建虚拟机时，由它选择将虚拟机创建在哪台计算节点上。")]),s("li",null,[s("p",null,"Nova-Conductor服务"),s("p",null,"这个是服务是计算节点访问数据库时的一个中间层，它出现的作用是防止计算节点的Nova-Compute服务直接访问数据库。同时这个中间层可以进行水平扩展。")]),s("li",null,[s("p",null,"Nova-Console服务"),s("p",null,"Nova增强了它的控制台服务。控制台服务允许用户可以通过代理服务器访问虚拟化实例。这就涉及了一对新的守护进程（nova-console和nova-consoleauth).")]),s("li",null,[s("p",null,"Nova-Consoleauth服务"),s("p",null,"主要用于控制台的用户访问授权")]),s("li",null,[s("p",null,"Nova-Novncproxy服务"),s("p",null,"用于为用户访问虚拟机提供了一个VNC的代理。通过VNC协议，可以支持基于浏览器的novnc客户端，后面你在网页打开的console界面就是依靠这个服务提供的。")]),s("li",null,[s("p",null,"Nova-Compute"),s("p",null,"Nova-compute是Nova最重要的组件之一。"),s("ul",null,[s("li",null,"nova-compute 一般运行在计算节点上，通过Message Queue接收并管理VM的生命周期。"),s("li",null,"Nova-compute 通过Libvirt管理KVM，通过XenAPI管理Xen等。")])])],-1),wp=s("h3",{id:"nova控制节点部署",tabindex:"-1"},[n("Nova控制节点部署 "),s("a",{class:"header-anchor",href:"#nova控制节点部署","aria-hidden":"true"},"#")],-1),Kp=s("p",null,"首先我们需要先在控制节点部署除nova-compute之外的其它必备的服务。",-1),Lp=s("ol",null,[s("li",null,"控制节点安装")],-1),Up=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y openstack-nova-api \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  openstack-nova-conductor \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  openstack-nova-novncproxy openstack-nova-scheduler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jp=s("p",null,"nova.conf是配置Nova的核心配置文件，Nova的配置主要围绕该配置文件。",-1),Gp=s("ul",null,[s("li",null,"数据库配置")],-1),Hp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[api_database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection= mysql+pymysql://nova:nova@192.168.56.11/nova_api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection= mysql+pymysql://nova:nova@192.168.56.11/nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fp=s("ul",null,[s("li",null,[s("p",null,"RabbitMQ配置"),s("p",null,"Nova和其它组件之间，以及Nova各个服务之间的通信都要通过消息队列来进行，所以需要配置RabbmitMQ的连接。注意是DEFAULT配置栏目下面。")])],-1),Vp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"transport_url = rabbit://openstack:openstack@192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bp=s("ul",null,[s("li",null,[s("p",null,"Keystone相关配置"),s("p",null,"Nova需要连接到Keystone进行认证和服务管理。")])],-1),qp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[api]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_strategy=keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[keystone_authtoken]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"www_authenticate_uri = http://192.168.56.11:5000/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"memcached_servers = 192.168.56.11:11211")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yp=s("ul",null,[s("li",null,[s("p",null,"关闭Nova的防火墙功能"),s("p",null,"因为我们要使用Neutron的防火墙功能，所以关闭Nova自己的防火墙驱动。")])],-1),zp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"use_neutron=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"firewall_driver = nova.virt.firewall.NoopFirewallDriver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$p=s("ul",null,[s("li",null,[s("p",null,"VNC配置"),s("p",null,"vnc的配置用于虚拟机VNC端口的监听和novncproxy的配置，这样后面我们通过DashBoard的novnc界面就可以查看虚拟机的界面。")])],-1),Xp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[vnc]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server_listen = 0.0.0.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server_proxyclient_address = 192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jp=s("ul",null,[s("li",null,"设置glance")],-1),Wp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[glance]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"api_servers = http://192.168.56.11:9292")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qp=s("ul",null,[s("li",null,"在 [oslo_concurrency] 部分，配置锁路径：")],-1),Zp=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[oslo_concurrency]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lock_path=/var/lib/nova/tmp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),sd=s("ul",null,[s("li",null,"设置启用的api")],-1),nd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled_apis=osapi_compute,metadata")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ld=s("ul",null,[s("li",null,"设置placement")],-1),ed=s("h1",{id:"新增到配置文件末尾",tabindex:"-1"},[n("新增到配置文件末尾 "),s("a",{class:"header-anchor",href:"#新增到配置文件末尾","aria-hidden":"true"},"#")],-1),od=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[placement]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"region_name = RegionOne")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = Default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000/v3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = placement")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ad=s("ol",null,[s("li",null,"同步数据库")],-1),td=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage api_db sync" nova')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cd=s("ul",null,[s("li",null,"注册cell0数据库")],-1),id=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 map_cell0" nova')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rd=s("ul",null,[s("li",null,"创建cell1的cell")],-1),pd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 create_cell --name=cell1 --verbose" nova')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dd=s("ul",null,[s("li",null,"同步nova数据库")],-1),Ad=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage db sync" nova')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cd=s("ul",null,[s("li",null,"验证cell0和cell1的注册是否正确")],-1),ud=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 list_cells" nova')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yd=s("ul",null,[s("li",null,"测试数据库同步情况")],-1),hd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# mysql -h 192.168.56.11 -unova -pnova -e "use nova;show tables;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# mysql -h 192.168.56.11 -unova -pnova -e "use nova_api;show tables;"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_d=s("ol",null,[s("li",null,[n("启动Nova Service "),s("ul",null,[s("li",null,"设置开机自动启动")])])],-1),Dd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable openstack-nova-api.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"openstack-nova-scheduler.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"openstack-nova-conductor.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"openstack-nova-novncproxy.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gd=s("ul",null,[s("li",null,"启动控制节点服务")],-1),md=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start openstack-nova-api.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  openstack-nova-scheduler.service openstack-nova-conductor.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  openstack-nova-novncproxy.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bd=s("ol",null,[s("li",null,[s("p",null,"Nova服务注册"),s("p",null,"和Keystone、Glance一样，Nova服务也需要在Keystone上做注册，并告诉Keystone它所暴漏的API。"),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# source admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack service create --name nova --description "OpenStack Compute" compute')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne compute public http://192.168.56.11:8774/v2.1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne compute internal http://192.168.56.11:8774/v2.1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne compute admin http://192.168.56.11:8774/v2.1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])]),s("ul",null,[s("li",null,"验证控制节点服务")])])],-1),kd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@openstack-node1 ~]# openstack compute service list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+----------------+-----------------------------+----------+---------+-------+----------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID | Binary         | Host                        | Zone     | Status  | State | Updated At                 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+----------------+-----------------------------+----------+---------+-------+----------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|  4 | nova-scheduler | linux-node1.example.com | internal | enabled | up    | 2020-02-04T04:48:47.000000 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 11 | nova-conductor | linux-node1.example.com | internal | enabled | up    | 2020-02-04T04:48:47.000000 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+----------------+-----------------------------+----------+---------+-------+----------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vd=s("h3",{id:"nova计算节点部署",tabindex:"-1"},[n("Nova计算节点部署 "),s("a",{class:"header-anchor",href:"#nova计算节点部署","aria-hidden":"true"},"#")],-1),xd=s("p",null,"根据我们开始实验规划，我们将使用一个控制节点和一个计算节点。计算节点是真正运行虚拟机的服务器，对CPU、内存和硬盘要求都比较高，通常是配置比较强劲的服务器充当。当然在实验的过程中，完全可以和控制节点在一台服务器上。好的，现在请你打开第二台虚拟机并且登陆。",-1),fd=s("ol",null,[s("li",null,"计算节点安装")],-1),Sd=s("p",null,"计算节点需要依赖与虚拟化技术来运行虚拟机实例，还记得前面我们讨论OpenStack与虚拟化之间的关系吗？OpenStack默认使用KVM作为Hypervisor，所以在计算节点上需要安装KVM和libvirt。这样OpenStack的控制节点上的nova服务就可以调用Nova-compute进行虚拟机的创建和管理。",-1),Ed=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# yum install -y openstack-nova-compute")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pd=s("ul",null,[s("li",null,[s("p",null,"复制配置文件"),s("p",null,"计算节点的配置文件和控制节点的基本相同，我们可以在控制节点nova.conf的基础上进行增加即可，所以首先请将控制节点的配置文件直接复制过来吧。")])],-1),Nd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# scp /etc/nova/nova.conf 192.168.56.12:/etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# chown root:nova /etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rd=s("ul",null,[s("li",null,[s("p",null,"删除多余的数据配置"),s("p",null,"删除数据库配置 相对于控制节点的配置，计算节点需要变更VNC的配置。")]),s("li",null,[s("p",null,"修改VNC配置"),s("p",null,"计算节点需要监听所有IP，同时设置novncproxy的访问地址")])],-1),Td=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[vnc]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server_listen = 0.0.0.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"server_proxyclient_address = 192.168.56.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"novncproxy_base_url = http://192.168.56.11:6080/vnc_auto.html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Id=s("ul",null,[s("li",null,[s("p",null,"虚拟化适配"),s("p",null,"查看计算节点的服务器是否支持硬件虚拟化。")])],-1),Od=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# egrep -c '(vmx|svm)' /proc/cpuinfo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"如果返回的是0，表示不支持硬件虚拟化，需要在nova.conf里面设置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[libvirt]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"virt_type=qemu")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"如果返回的是非0的值，那么表示计算节点服务器支持硬件虚拟化，需要在nova.conf里面设置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[libvirt]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"virt_type=kvm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Md=s("ol",null,[s("li",null,"启动nova-compute")],-1),wd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# systemctl enable libvirtd.service openstack-nova-compute.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# systemctl start libvirtd.service openstack-nova-compute.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kd=s("ol",null,[s("li",null,"计算节点加入控制节点")],-1),Ld=s("p",null,"当添加新的计算节点时，必须在控制器节点上运行nova-manage cell_v2 discover_hosts来注册这些新的计算节点。",-1),Ud=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "nova-manage cell_v2 discover_hosts --verbose" nova')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jd=s("p",null,"或者，您可以在/etc/nova/nova.conf中设置适当的间隔:",-1),Gd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[scheduler]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"discover_hosts_in_cells_interval = 300")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hd=s("ol",null,[s("li",null,"验证计算节点")],-1),Fd=s("p",null,"在控制节点再次执行host list，可以发现nova-compute已经成功注册。 再次执行host list可以看到。计算节点已经注册成功。",-1),Vd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack host list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+------------------------+-------------+----------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Host Name              | Service     | Zone     |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+------------------------+-------------+----------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| linux-node1.example.com | conductor   | internal |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| linux-node1.example.com | consoleauth | internal |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| linux-node1.example.com | scheduler   | internal |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| linux-node2.example.com | compute     | nova     |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+------------------------+-------------+----------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bd=s("h3",{id:"验证nova安装",tabindex:"-1"},[n("验证Nova安装 "),s("a",{class:"header-anchor",href:"#验证nova安装","aria-hidden":"true"},"#")],-1),qd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack compute service list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+------------------+-------------------------+----------+---------+-------+----------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID | Binary           | Host                    | Zone     | Status  | State | Updated At                 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+------------------+-------------------------+----------+---------+-------+----------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|  1 | nova-consoleauth | linux-node1.example.com | internal | enabled | up    | 2018-02-03T10:38:30.000000 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|  2 | nova-conductor   | linux-node1.example.com | internal | enabled | up    | 2018-02-03T10:38:30.000000 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|  3 | nova-scheduler   | linux-node1.example.com | internal | enabled | up    | 2018-02-03T10:38:30.000000 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|  6 | nova-compute     | linux-node2.example.com | nova     | enabled | up    | None                       |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+------------------+-------------------------+----------+---------+-------+----------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yd=s("p",null,"验证所有的Endpoint API是否正确",-1),zd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack catalog list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-----------+-----------+--------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Name      | Type      | Endpoints                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-----------+-----------+--------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| placement | placement | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   public: http://192.168.56.11:8778        |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   internal: http://192.168.56.11:8778      |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   admin: http://192.168.56.11:8778         |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |                                            |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| keystone  | identity  | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   public: http://192.168.56.11:5000/v3/    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   admin: http://192.168.56.11:35357/v3/    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   internal: http://192.168.56.11:35357/v3/ |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |                                            |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| glance    | image     | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   public: http://192.168.56.11:9292        |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   admin: http://192.168.56.11:9292         |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |                                            |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| nova      | compute   | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   admin: http://192.168.56.11:8774/v2.1    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   public: http://192.168.56.11:8774/v2.1   |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           | RegionOne                                  |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |   internal: http://192.168.56.11:8774/v2.1 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"|           |           |                                            |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-----------+-----------+--------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$d=s("p",null,"检查cells和placement API状态",-1),Xd=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# nova-status upgrade check")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Upgrade Check Results     |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Check: Cells v2           |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Result: Success           |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Details: None             |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Check: Placement API      |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Result: Success           |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Details: None             |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Check: Resource Providers |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Result: Success           |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Details: None             |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jd=s("h1",{id:"_1-7-openstack网络服务neutron",tabindex:"-1"},[n("1.7 OpenStack网络服务Neutron "),s("a",{class:"header-anchor",href:"#_1-7-openstack网络服务neutron","aria-hidden":"true"},"#")],-1),Wd=s("p",null,"上一章我们讲到Nova服务提供了OpenStack平台计算资源池，实现了计算即服务。那么仅仅有一台孤立的云主机是无法正常使用的，我们需要把它接入网络，才能正常对外提供服务。",-1),Qd=s("h3",{id:"neutron概述",tabindex:"-1"},[n("Neutron概述 "),s("a",{class:"header-anchor",href:"#neutron概述","aria-hidden":"true"},"#")],-1),Zd=s("p",null,"OpenStack Networking Services（Neutron），OpenStack 网络服务，OpenStack核心项目之一，由早期的nova-network独立成一个子项目后演变而来，它为OpenStack提供了云计算环境下的虚拟网络功能。",-1),sA=s("p",null,"在OpenStack世界中，网络组件最初叫nova-network，nova-network实现简单，直接采用基于Linux内核的Linux网桥。由于少了很多层抽象，所以比较简单稳定算。但是它的不足之处是支持的插件少（只支持Linux网桥），支持的网络拓扑少（只支持flat, vlan)。",-1),nA=s("p",null,"为了支持更多的插件，支持更多的网络拓扑，于是有了quantum工程。quantum插件不仅支持Linux网桥，也支持OpenvSwitch，以及一些SDN的插件和其他商业公司的插件。在网络拓扑上，除了支持flat，vlan外，还支持gre, vxlan。quantum因为和一家公司的名称冲突，于是，改名为neutron。",-1),lA=s("ol",null,[s("li",null,"Neutron Server")],-1),eA=s("p",null,"这一部分包含守护进程neutron-server和各种插件neutron-*-plugin。neutron-server提供API接口，并把对API的调用请求传给已经配置好的插件进行后续处理。插件需要访问数据库来维护各种配置数据和对应关系，例如路由器、网络、子网、端口、浮动IP、安全组等等。",-1),oA=s("ol",null,[s("li",null,"ML2(Module Layer2)plugin")],-1),aA=s("p",null,"上述整体框架中提到Neutron组件内部有很多个不同的插件（plugin），而在Neutron中，实现一个插件包括两个部分的内容：一部分与数据库db打交道称之为plugin（虽然都是plugin，但是这个是具体实现中的plugin），一部分是调用具体的网络设备真正干活的称之为agent。 与db进行交互的plugin在功能上有很多重复，所以在代码上有很多重复，因此在Neutron中提供了一个公共的plugin叫ML2(ModuleLayer2) plugin。所以ML2 plugin的第一个作用就是：提供与数据库交互的公共plugin。 ML2的第二个作用就是实现支持多种pulgin（原先使用linux bridge，就不能用openvswitch），ML2通过MechanismDriver实现。MechanismDriver的作用是将agent的类型agent_type和vif_type关联，这样vif_type就可以直接通过扩展api设置了。 ML2的第三个作用就是支持不同的网络拓扑，如flat, vlan, gre, vxlan，直接在ml2_conf.ini这个配置文件里都配上即可。",-1),tA=s("ol",null,[s("li",null,[s("p",null,"L3-Agent"),s("p",null,"上面的ml2解决的只是网络中L2层的问题，对于L3层的路由功能，neturon单独用l3-agent实现，为客户机访问外部网络提供3层转发服务。 L3 层的路由分静态路由和动态路由两种： 在 Linux 中，通过打开 ipv4 forward 特性可以让数据包从一块网卡路由到另外一块网卡上。 动态路由，如内部网关协议 RIP，OSPF；如外部网关协议 BGP。能够自动地学习建立路由表。")])],-1),cA=s("p",null,"目前 Neutron 只支持静态路由，要点如下： 对于不同 tenant 子网通过 namespace 功能进行隔离，在 Linux 中，一个命名空间 namespace 您可以简单理解成 linux 又启动了一个新的 TCP/IP 栈的进程。多个 tenant 意味着多个 namespace，也意味着多个 TCP/IP 栈。 对于同一tenant 中的不同子网的隔离通过 iptables 来做，也意味着，同一tenant中的相同子网的两个虚机不用走 L3 层，直接走 L2 层能通，没问题；但如果同一tenant中的不同子网的两个虚机要通讯的话，必须得绕道 L3-agent 网络节点，这是影响性能的。",-1),iA=s("ol",null,[s("li",null,"dhcp-agent")],-1),rA=s("p",null,"Dhcp-agent主要负责为各个租户网络提供DHCP服务。 L4-L7的Agent 至于再之上的L4-L7层的FwaaS,VPNaaS, DNATaaS, DNSaaS的内容，在neutron又出来一个新的服务框架用于将所有这些除L2层以外的网络服务类似于上述ml2的思想在数据库这块一网打尽。 下面我们通过一个单一扁平的提供者网络FLAT来部署neutron。为虚拟机提供网络资源。",-1),pA=s("h3",{id:"neutron控制节点部署",tabindex:"-1"},[n("Neutron控制节点部署 "),s("a",{class:"header-anchor",href:"#neutron控制节点部署","aria-hidden":"true"},"#")],-1),dA=s("ol",null,[s("li",null,"Neutron安装")],-1),AA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y openstack-neutron openstack-neutron-ml2 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"openstack-neutron-linuxbridge ebtables")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),CA=s("ol",null,[s("li",null,[n("Neutron配置 "),s("ul",null,[s("li",null,"Neutron数据库配置")])])],-1),uA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/neutron.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[database]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"connection = mysql+pymysql://neutron:neutron@192.168.56.11:3306/neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yA=s("ul",null,[s("li",null,"Keystone连接配置")],-1),hA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#注意：该配置默认不存在，需要添加")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_strategy = keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[keystone_authtoken]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"www_authenticate_uri = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"memcached_servers = 192.168.56.11:11211")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_A=s("ul",null,[s("li",null,"RabbitMQ相关设置")],-1),DA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/neutron.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"transport_url = rabbit://openstack:openstack@192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#请注意是在DEFAULT配置栏目下，因为该配置文件有多个transport_url的配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gA=s("ul",null,[s("li",null,"Neutron网络基础配置")],-1),mA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#注意：该配置默认不存在，需要添加")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"core_plugin = ml2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 这个配置没有错，就是设置为空")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service_plugins =")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bA=s("ul",null,[s("li",null,"网络拓扑变化Nova通知配置")],-1),kA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 这两行配置需要新增")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"notify_nova_on_port_status_changes = True")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"notify_nova_on_port_data_changes = True")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 在配置文件最后增加以下配置段")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[nova]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"region_name = RegionOne")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = nova")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vA=s("ul",null,[s("li",null,"在 [oslo_concurrency] 部分，配置锁路径：")],-1),xA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[oslo_concurrency]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lock_path = /var/lib/neutron/tmp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fA=s("ol",null,[s("li",null,"Neutron ML2配置")],-1),SA=s("p",null,"还是在控制节点上，我们需要配置Neutron ML2。ML2使用Linux桥接机制为实例创建Layer-2的虚拟网络基础设施。",-1),EA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/plugins/ml2/ml2_conf.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#以下所有配置目前均需要新增，默认配置文件已经移除，注意删除注释。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[ml2]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"type_drivers = flat,vlan,gre,vxlan,geneve #支持多选，所以把所有的驱动都选择上。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tenant_network_types = flat,vlan,gre,vxlan,geneve #支持多项，所以把所有的网络类型都选择上。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mechanism_drivers = linuxbridge,openvswitch,l2population #选择插件驱动，支持多选，开源的有linuxbridge和openvswitch")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#启用端口安全扩展驱动")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"extension_drivers = port_security,qos ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[ml2_type_flat]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置网络提供")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"flat_networks = provider")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[securitygroup]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#启用ipset")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enable_ipset = True")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),PA=s("ol",null,[s("li",null,"Neutron Linuxbridge配置")],-1),NA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/plugins/ml2/linuxbridge_agent.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#以下所有配置目前均需要新增，默认配置文件已经移除，注意删除注释。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[linux_bridge]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#映射虚拟网络接口和实际网络接口的对应")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"physical_interface_mappings = provider:eth0 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[vxlan]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#禁止vxlan网络")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enable_vxlan = False")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[securitygroup]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置使用Linux Bridge桥接的防火墙驱动和安全组")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"firewall_driver = neutron.agent.linux.iptables_firewall.IptablesFirewallDriver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enable_security_group = True")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),RA=s("ol",null,[s("li",null,"Neutron DHCP-Agent配置")],-1),TA=s("p",null,"Neutron中的dhcp-agent用来为云主机动态分配IP地址，DHCP Agent默认是通过调用dnsmasq来实现DHCP的分配工作。默认情况下dhcp-agent和后面要介绍的Lbaas-agent都需要依赖namespace,所以开始之前我们需要先介绍下linux的namespache。",-1),IA=s("p",null,[s("strong",null,"什么是namespace"),n(' Namespace(命名空间)，简单的说就是不同的名字空间，打个简单的比方，进程在a空间是叫a进程，在b空间也就可能叫b进程。为什么要有命名空间呢？主要是满足虚拟化的一些需求。试想，如果有一台机器，不管它是个人pc还是服务器，或是 网络交换机，路由器，一般情况下，它也就被一个用户使用。但是如果某一天，另外一个用户也要使用同样的机器，一种方法是再买一个机器，装上同样的 linux系统，但是还有一种更好的方法，就是使用容器（container），每个用户有属于自己的容器，而且容器之间相互隔离，而namespace 就是实现容器的一种手段。Namespace可以实现pid、net、ipc、mnt、uts、user等namespace将容器的进程、网络、消息、文件系统、UTS("UNIX Time-sharing System")和用户空间隔离开。在Docker中，我们会详解讲解namespace。')],-1),OA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/dhcp_agent.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"interface_driver = linuxbridge")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dhcp_driver = neutron.agent.linux.dhcp.Dnsmasq")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enable_isolated_metadata = True")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),MA=s("ol",null,[s("li",null,"Neutron metadata配置")],-1),wA=s("p",null,"metadata agent为实例提供诸如凭证的配置信息。需要设置Keystone的链接和nova的连接参数。",-1),KA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/metadata_agent.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nova_metadata_host = 192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#注意这个是为元数据代理设置的密码，需要和nova的配置相对应。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata_proxy_shared_secret = unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),LA=s("ol",null,[s("li",null,"Neutron相关配置在nova.conf")],-1),UA=s("p",null,"Neutron的配置，需要修改nova的配置文件，因为默认大多数OpenStack发行版里nova.conf里面的网络相关的配置都是比较老的，使用的最早的nova-network的配置。所以需要进行修改。",-1),jA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/nova/nova.conf ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[neutron]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"region_name = RegionOne")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service_metadata_proxy = true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata_proxy_shared_secret = unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#注意这里设置的共享秘钥需要和之前的对应上。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),GA=s("ol",null,[s("li",null,"配置完毕后，我们需要设置一个软连接，因为默认服务会读取plugin.ini。")],-1),HA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ln -s /etc/neutron/plugins/ml2/ml2_conf.ini /etc/neutron/plugin.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),FA=s("ol",null,[s("li",null,"同步数据库")],-1),VA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# su -s /bin/sh -c "neutron-db-manage --config-file /etc/neutron/neutron.conf \\')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'--config-file /etc/neutron/plugins/ml2/ml2_conf.ini upgrade head" neutron')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),BA=s("ol",null,[s("li",null,"重启计算API 服务")],-1),qA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart openstack-nova-api.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),YA=s("ol",null,[s("li",null,"启动网络服务并配置他们开机自启动。")],-1),zA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# systemctl enable neutron-server.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  neutron-linuxbridge-agent.service neutron-dhcp-agent.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  neutron-metadata-agent.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# systemctl start neutron-server.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  neutron-linuxbridge-agent.service neutron-dhcp-agent.service \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  neutron-metadata-agent.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$A=s("ol",null,[s("li",null,"Neutron服务注册")],-1),XA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"创建service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# openstack service create --name neutron --description "OpenStack Networking" network')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"创建endpoint")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne network public http://192.168.56.11:9696")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne network internal http://192.168.56.11:9696")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# openstack endpoint create --region RegionOne network admin http://192.168.56.11:9696")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),JA=s("ol",null,[s("li",null,"测试Neutron安装**")],-1),WA=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@openstack-compute-node1 neutron]# openstack network agent list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WARNING: Failed to import plugin orchestration.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WARNING: Failed to import plugin data_processing.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------------------+-------------------------------------+-------------------+-------+-------+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Agent Type         | Host                                | Availability Zone | Alive | State | Binary                    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------------------+-------------------------------------+-------------------+-------+-------+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| c4a78188-a3ad-4cda-8c47-41f854aad375 | Linux bridge agent | openstack-compute-node1.dianjoy.com | None              | :-)   | UP    | neutron-linuxbridge-agent |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| e2325b10-281b-447c-b46f-7875c0eda1fc | Metadata agent     | openstack-compute-node1.dianjoy.com | None              | :-)   | UP    | neutron-metadata-agent    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| fb73fabc-2825-42c4-ae24-ea50bb1d37b8 | DHCP agent         | openstack-compute-node1.dianjoy.com | nova              | :-)   | UP    | neutron-dhcp-agent        |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------------------+-------------------------------------+-------------------+-------+-------+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),QA=s("p",null,"如果可以正常输出，基本上Neutron的安装就没有问题。",-1),ZA=s("h3",{id:"neutron计算节点部署",tabindex:"-1"},[n("Neutron计算节点部署 "),s("a",{class:"header-anchor",href:"#neutron计算节点部署","aria-hidden":"true"},"#")],-1),sC=s("ol",null,[s("li",null,"安装软件包")],-1),nC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," [root@linux-node2 ~]# yum install -y openstack-neutron openstack-neutron-linuxbridge ebtables")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lC=s("ol",null,[s("li",null,[n("配置计算节点Neutron "),s("ul",null,[s("li",null,"Keystone连接配置")])])],-1),eC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# vim /etc/neutron/neutron.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_strategy = keystone")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[keystone_authtoken]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"www_authenticate_uri = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"memcached_servers = 192.168.56.11:11211")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),oC=s("ul",null,[s("li",null,"RabbitMQ相关设置")],-1),aC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/neutron/neutron.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[DEFAULT]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"transport_url = rabbit://openstack:openstack@192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#请注意是在DEFAULT配置栏目下，因为该配置文件有多个transport_url的配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tC=s("ul",null,[s("li",null,"锁路径")],-1),cC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[oslo_concurrency]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"lock_path = /var/lib/neutron/tmp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),iC=s("ol",null,[s("li",null,"配置LinuxBridge配置")],-1),rC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# scp /etc/neutron/plugins/ml2/linuxbridge_agent.ini 192.168.56.12:/etc/neutron/plugins/ml2/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pC=s("ol",null,[s("li",null,"设置计算节点的nova.conf")],-1),dC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# vim /etc/nova/nova.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[neutron]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_url = http://192.168.56.11:5000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"auth_type = password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"user_domain_name = default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"region_name = RegionOne")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"project_name = service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"username = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"password = neutron")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),AC=s("ol",null,[s("li",null,"重启计算服务")],-1),CC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl restart openstack-nova-compute.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),uC=s("ol",null,[s("li",null,"启动计算节点linuxbridge-agent")],-1),yC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl enable neutron-linuxbridge-agent.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl start neutron-linuxbridge-agent.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hC=s("ol",null,[s("li",null,"在控制节点上测试Neutron安装")],-1),_C=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source admin-openstack.sh ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack network agent list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------------------+-----------------------------+-------------------+-------+-------+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Agent Type         | Host                        | Availability Zone | Alive | State | Binary                    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------------------+-----------------------------+-------------------+-------+-------+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 11f1de57-836f-412f-b9b4-51dcdc9ae931 | Metadata agent     | linux-node1.example.com | None              | :-)   | UP    | neutron-metadata-agent    |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 197b84cd-7d6e-4ed2-9fa0-46499fe7cdb7 | Linux bridge agent | linux-node2.example.com | None              | :-)   | UP    | neutron-linuxbridge-agent |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 531afd6d-ee81-4b64-a0f4-ec5fd523eff8 | DHCP agent         | linux-node1.example.com | nova              | :-)   | UP    | neutron-dhcp-agent        |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| dfc431ff-dede-4a54-8371-653c6e72ffd9 | Linux bridge agent | linux-node1.example.com | None              | :-)   | UP    | neutron-linuxbridge-agent |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------------------+-----------------------------+-------------------+-------+-------+---------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),DC=s("p",null,"看是否有linux-node2.example.com的Linux bridge agent",-1),gC=s("h3",{id:"bug解决",tabindex:"-1"},[n("Bug解决 "),s("a",{class:"header-anchor",href:"#bug解决","aria-hidden":"true"},"#")],-1),mC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent [req-68a7936c-2bbc-454e-bee4-6785cd3dce7b - - - - -] Error in agent loop. Devices info: {'current': set(['tap07dc4c9c-f3']), 'timestamps': {'tap07dc4c9c-f3': 7}, 'removed': set([]), 'added': set(['tap07dc4c9c-f3']), 'updated': set([])}: KeyError: 'gateway'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent Traceback (most recent call last):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 465, in daemon_loop')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     sync = self.process_network_devices(device_info)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/osprofiler/profiler.py", line 160, in wrapper')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     result = f(*args, **kwargs)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 214, in process_network_devices')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     resync_a = self.treat_devices_added_updated(devices_added_updated)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/osprofiler/profiler.py", line 160, in wrapper')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     result = f(*args, **kwargs)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 231, in treat_devices_added_updated')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     self._process_device_if_exists(device_details)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/agent/_common_agent.py", line 258, in _process_device_if_exists')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     device, device_details['device_owner'])")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 585, in plug_interface')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     network_segment.mtu)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 521, in add_tap_interface')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     return False")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/oslo_utils/excutils.py", line 220, in __exit__')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     self.force_reraise()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/oslo_utils/excutils.py", line 196, in force_reraise')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     six.reraise(self.type_, self.value, self.tb)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 513, in add_tap_interface')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     tap_device_name, device_owner, mtu)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 546, in _add_tap_interface')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     mtu):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 497, in ensure_physical_in_bridge')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     physical_interface)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 286, in ensure_flat_bridge')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     if self.ensure_bridge(bridge_name, physical_interface):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 455, in ensure_bridge')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     self.update_interface_ip_details(bridge_name, interface)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 417, in update_interface_ip_details')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     gateway)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent   File "/usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py", line 401, in _update_interface_ip_details')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent     dst_device.route.add_gateway(gateway=gateway['gateway'],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2020-01-29 14:09:22.599 6346 ERROR neutron.plugins.ml2.drivers.agent._common_agent KeyError: 'gateway'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bC=s("p",null,"分别修改控制节点和计算节点上的Neutron源码，并重启服务",-1),kC=s("ol",null,[s("li",null,"将priority修改为metric")],-1),vC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@openstack-compute-node3 ~]# vim +1503 /usr/lib/python2.7/site-packages/neutron/agent/linux/ip_lib.py")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#'priority': get_attr(route, 'RTA_PRIORITY'),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"'metric': get_attr(route, 'RTA_PRIORITY'),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xC=s("ol",null,[s("li",null,"将gateway修改为via")],-1),fC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@openstack-compute-node3 ~]# vim +402 /usr/lib/python2.7/site-packages/neutron/plugins/ml2/drivers/linuxbridge/agent/linuxbridge_neutron_agent.py")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#dst_device.route.add_gateway(gateway=gateway['gateway'],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            dst_device.route.add_gateway(gateway=gateway['via'],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                                         metric=metric)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            #src_device.route.delete_gateway(gateway=gateway['gateway'])")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"            src_device.route.delete_gateway(gateway=gateway['via'])")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),SC=s("p",null,"计算节点重启服务",-1),EC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@openstack-compute-node3 ~]# systemctl restart neutron-linuxbridge-agent")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),PC=s("p",null,"控制节点重启服务",-1),NC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@openstack-compute-node1 ~]# systemctl restart neutron-server.service   neutron-linuxbridge-agent.s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),RC=s("h1",{id:"_1-8-创建第一台openstack云主机",tabindex:"-1"},[n("1.8 创建第一台OpenStack云主机 "),s("a",{class:"header-anchor",href:"#_1-8-创建第一台openstack云主机","aria-hidden":"true"},"#")],-1),TC=s("p",null,"好的，到目前为止，你已经完成了启动一台虚拟机所有的必备条件。",-1),IC=s("ul",null,[s("li",null,"MySQL：为各个服务提供数据存储"),s("li",null,"RabbitMQ：为各个服务之间通信提供交通枢纽"),s("li",null,"KeyStone：为各个服务器之间通信提供认证和服务注册"),s("li",null,"Glance：为虚拟机提供镜像管理"),s("li",null,"Nova：为虚拟机提供计算资源"),s("li",null,"Neutron：为虚拟机提供网络资源。")],-1),OC=s("p",null,"现在你可以着手启动一台虚拟机，剩下的OpenStack服务都可以认为是可选的，不过通常我们会用到Dashboard来通过Web界面来管理，后面的章节我们会讲到，现在我们使用命令来创建我们的第一台虚拟机。",-1),MC=s("h3",{id:"创建flat网络",tabindex:"-1"},[n("创建FLAT网络 "),s("a",{class:"header-anchor",href:"#创建flat网络","aria-hidden":"true"},"#")],-1),wC=s("p",null,"首先我们需要创建一个网络。我们现在为demo租户，创建一个FLAT类型的网络。如下图所示。",-1),KC=s("ol",null,[s("li",null,"创建Flant网络")],-1),LC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source admin-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack network create  --share --external \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --provider-physical-network provider \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --provider-network-type flat provider")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),UC=s("ol",null,[s("li",null,"查看网络")],-1),jC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack network list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),GC=s("ol",null,[s("li",null,"创建子网")],-1),HC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack subnet create --network provider \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --allocation-pool start=192.168.56.100,end=192.168.56.200 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --dns-nameserver 223.5.5.5  --gateway 192.168.56.2 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --subnet-range 192.168.56.0/24 provider-subnet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),FC=s("ol",null,[s("li",null,"查看子网")],-1),VC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack subnet list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+----------+--------------------------------------+-----------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Name     | Network                              | Subnet          |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+----------+--------------------------------------+-----------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 297530f8-62b6-4954-ad33-c8a4ba922a3e | provider | 6cf562b4-0537-4232-a2b9-ce5481e6a505 | 192.168.56.0/24 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+----------+--------------------------------------+-----------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),BC=s("h3",{id:"创建云主机",tabindex:"-1"},[n("创建云主机 "),s("a",{class:"header-anchor",href:"#创建云主机","aria-hidden":"true"},"#")],-1),qC=s("ol",null,[s("li",null,"创建云主机类型")],-1),YC=s("p",null,"由于默认的云主机大小内存最小是512M，考虑到多数人自己PC的实验环境内存有限，我们创建一个比较小的云主机类型。",-1),zC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack flavor create --id 0 --vcpus 1 --ram 64 --disk 1 m1.nano")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$C=s("ol",null,[s("li",null,"创建密钥对")],-1),XC=s("p",null,"密钥对用来使用登录创建后的虚拟机，OpenStack在创建虚拟机的时候会把公钥放到虚拟机里面，这样我们就可以不使用密码连接。 注意现在切换到demo用户，因为我们要使用demo用户来创建第一台云主机",-1),JC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source demo-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# ssh-keygen -q -N ""')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack keypair create --public-key ~/.ssh/id_rsa.pub mykey")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack keypair list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-------+-------------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Name  | Fingerprint                                     |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-------+-------------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| mykey | d2:e0:bc:3e:35:58:5f:7b:fd:c1:0a:93:5e:bf:8f:2d |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-------+-------------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),WC=s("ol",null,[s("li",null,"添加安全组规则")],-1),QC=s("p",null,"默认情况下，有一个default安全组，这个安全组会拒绝所有访问，所以为了创建虚拟机能够连接，我们需要设置运行ICMP和22端口访问。",-1),ZC=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack security group rule create --proto icmp default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack security group rule create --proto tcp --dst-port 22 default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),su=s("ol",null,[s("li",null,"启动实例前准备")],-1),nu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source demo-openstack.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lu=s("ul",null,[s("li",null,"查看可用的云主机类型")],-1),eu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack flavor list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+---------+-----+------+-----------+-------+-----------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID | Name    | RAM | Disk | Ephemeral | VCPUs | Is Public |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+---------+-----+------+-----------+-------+-----------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 0  | m1.nano |  64 |    1 |         0 |     1 | True      |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+----+---------+-----+------+-----------+-------+-----------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ou=s("ul",null,[s("li",null,"查看可用的镜像")],-1),au=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack image list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------+--------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Name   | Status | Server |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------+--------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 68615b2c-d10e-422f-9acb-c724808657ab | cirros | ACTIVE |        |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------+--------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tu=s("ul",null,[s("li",null,"查看可用的网络")],-1),cu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack network list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Name   | Subnets                              |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 557a00fa-f61d-4244-b350-29ffe0a03125 | public | c003b4b5-23d1-4211-ad2d-a62ec07d8853 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+--------+--------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),iu=s("ul",null,[s("li",null,"查看可用的安全组")],-1),ru=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack security group list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+---------+------------------------+----------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Name    | Description            | Project                          |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+---------+------------------------+----------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 74d74309-0660-4eb9-abba-e89fb6fd23ae | default | Default security group | aec911c3ae68464ba989213e5f6060b1 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pu=s("ol",null,[s("li",null,"创建虚拟机")],-1),du=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack server create --flavor m1.nano --image cirros \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--nic net-id=5c4d0706-24cd-4d42-ba78-36a05b6c81c8 --security-group default \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--key-name mykey demo-instance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Au=s("h1",{id:"注意指定网络的时候需要使用id，而不是名称。",tabindex:"-1"},[n("注意指定网络的时候需要使用ID，而不是名称。 "),s("a",{class:"header-anchor",href:"#注意指定网络的时候需要使用id，而不是名称。","aria-hidden":"true"},"#")],-1),Cu=s("h3",{id:"测试云主机",tabindex:"-1"},[n("测试云主机 "),s("a",{class:"header-anchor",href:"#测试云主机","aria-hidden":"true"},"#")],-1),uu=s("ol",null,[s("li",null,"查看云主机状态")],-1),yu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack server list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+-----------------+--------+------------+-------------+-----------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| ID                                   | Name            | Status | Task State | Power State | Networks              |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+-----------------+--------+------------+-------------+-----------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| 7f94df9a-e547-4f56-9887-bbc52c4e0fff | public-instance | ACTIVE | -          | Running     | public=192.168.56.101 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+--------------------------------------+-----------------+--------+------------+-------------+-----------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hu=s("ol",null,[s("li",null,"测试虚拟机连接")],-1),_u=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ping -c 2 192.168.56.101")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PING 192.168.56.101 (192.168.56.101) 56(84) bytes of data.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 192.168.56.101: icmp_seq=1 ttl=64 time=5.90 ms")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 192.168.56.101: icmp_seq=2 ttl=64 time=0.484 ms")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"连接虚拟机")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ssh cirros@192.168.56.101")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"The authenticity of host '192.168.56.101 (192.168.56.101)' can't be established.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RSA key fingerprint is 29:4d:76:17:05:1a:4e:e6:f9:81:a5:1d:8c:27:ff:2c.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Are you sure you want to continue connecting (yes/no)? yes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Warning: Permanently added '192.168.56.101' (RSA) to the list of known hosts.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$ ifconfig eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"eth0      Link encap:Ethernet  HWaddr FA:16:3E:E8:B9:C1  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          inet addr:192.168.56.101  Bcast:192.168.56.255  Mask:255.255.255.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          inet6 addr: fe80::f816:3eff:fee8:b9c1/64 Scope:Link")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          RX packets:150 errors:0 dropped:0 overruns:0 frame:0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          TX packets:162 errors:0 dropped:0 overruns:0 carrier:0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          collisions:0 txqueuelen:1000 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          RX bytes:18634 (18.1 KiB)  TX bytes:17264 (16.8 KiB)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Du=s("p",null,"如果无法ping通虚拟机，还可以登陆虚拟机Web页面查看，是否启动",-1),gu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openstack console url show demo-instance")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-------+------------------------------------------------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| Type  | Url                                                                                |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-------+------------------------------------------------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"| novnc | http://192.168.56.11:6080/vnc_auto.html?token=e97cffb8-cf0c-4c22-8dbc-fa88ff61f453 |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"+-------+------------------------------------------------------------------------------------+")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mu=s("p",null,"恭喜！你成功的使用OpenStack创建了第一台虚拟机，可能这一路走来有点坎坷，但是你成功了。不过这只是你在OpenStack世界里完成的第一步！",-1),bu=s("h1",{id:"openstack-dashboard",tabindex:"-1"},[n("OpenStack Dashboard "),s("a",{class:"header-anchor",href:"#openstack-dashboard","aria-hidden":"true"},"#")],-1),ku=s("p",null,"目前我们已经讲解并安装了OpenStack的Keystone、Glance、Nova、Neutron。而且我们已经使用命令成功的创建了一台虚拟机，并且可以进行连接和访问。我相信大家已经迫不及待的想看到OpenStack的DashBoard了。 那么OpenStack的有三种管理方法Horizon、CLI和API。本小节，我们就来部署Horizon。 Horizon是OpenStack的Dashboard，是一个可以让云管理员和用户管理OpenStack各种资源和服务的web接口。Horizon通过OpenStack API和各个组件进行交互。 Dashboard会根据Keystone中注册的Service去显示相应的功能。所以如果你没有安装相应的服务，却再Keystone中做了注册，登陆Dashboard是会报错的。",-1),vu=s("h3",{id:"horizon部署",tabindex:"-1"},[n("Horizon部署 "),s("a",{class:"header-anchor",href:"#horizon部署","aria-hidden":"true"},"#")],-1),xu=s("blockquote",null,[s("p",null,"需要将Keystone和Hoarizon分开部署，彼此之间有冲突。部署到linux-node2节点上。")],-1),fu=s("ol",null,[s("li",null,"安装Horizon")],-1),Su=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# yum install -y openstack-dashboard")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Eu=s("ol",null,[s("li",null,"Horizon配置")],-1),Pu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# vim /etc/openstack-dashboard/local_settings")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#允许所有主机访问")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ALLOWED_HOSTS = ['*', ]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置Keystone地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OPENSTACK_HOST = "192.168.56.11"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OPENSTACK_KEYSTONE_URL = "http://%s:5000/v3" % OPENSTACK_HOST')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置API版本，需要新增")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OPENSTACK_API_VERSIONS = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "identity": 3,')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "volume": 2,')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "compute": 2,')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#为通过仪表盘创建的用户配置默认的 user 角色")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'OPENSTACK_KEYSTONE_DEFAULT_ROLE = "user"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"开启多域支持")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OPENSTACK_KEYSTONE_MULTIDOMAIN_SUPPORT = True")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"设置默认的域")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OPENSTACK_KEYSTONE_DEFAULT_DOMAIN = 'Default'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置Session存储到Memcached")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SESSION_ENGINE = 'django.contrib.sessions.backends.cache'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CACHES = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'default': {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        'LOCATION': '192.168.56.11:11211',")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#启用Web界面上修改密码")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OPENSTACK_HYPERVISOR_FEATURES = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'can_set_mount_point': True,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'can_set_password': True,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'requires_keypair': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#设置时区")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'TIME_ZONE = "Asia/Shanghai"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#禁用自服务网络的一些高级特性")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"OPENSTACK_NEUTRON_NETWORK = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_router': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_quotas': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_distributed_router': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_ha_router': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_lb': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_firewall': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_vpn': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'enable_fip_topology_check': False,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nu=s("ol",null,[s("li",null,"重新生产Horizon配置文件")],-1),Ru=s("p",null,"如果根据官方文档，和默认安装的配置，访问/dashboard后跳转到/auth/login并且会提示404 Not Found，需要重新生成配置文件",-1),Tu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# cd /usr/share/openstack-dashboard")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# python manage.py make_web_conf --apache > /etc/httpd/conf.d/openstack-dashboard.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Iu=s("ol",null,[s("li",null,"启动服务")],-1),Ou=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl enable httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# systemctl restart httpd.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mu=s("p",null,[n("好的，现在你就可以使用"),s("a",{href:"http://192.168.56.11/%E6%9D%A5%E8%AE%BF%E9%97%AE%E4%BB%AA%E8%A1%A8%E7%9B%98%E4%BA%86%E3%80%82%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E5%AF%86%E7%A0%81%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8admin%E6%88%96%E8%80%85demo%E3%80%82%E9%9C%80%E8%A6%81%E4%BD%A0%E4%BA%B2%E8%87%AA%E6%9D%A5%E4%BD%93%E9%AA%8C%E4%BB%96%E4%BB%AC%E5%88%B0%E5%BA%95%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C%E3%80%82",target:"_blank",rel:"noreferrer"},"http://192.168.56.11/来访问仪表盘了。用户名和密码可以使用admin或者demo。需要你亲自来体验他们到底有什么不同。")],-1),wu=s("h3",{id:"horizon的session存储",tabindex:"-1"},[n("Horizon的Session存储 "),s("a",{class:"header-anchor",href:"#horizon的session存储","aria-hidden":"true"},"#")],-1),Ku=s("p",null,"我们经常在负载均衡的环境下，会遇到Session的问题，一般的解决办法有三种：",-1),Lu=s("ul",null,[s("li",null,"Session保持"),s("li",null,"Session复制"),s("li",null,"Session共享")],-1),Uu=s("p",null,"Horizon作为一个典型的Django应用，是使用 Django session架构来处理用户的session数据，目前session支持以下几种存储方式：",-1),ju=s("ul",null,[s("li",null,"本地内存缓存"),s("li",null,"键值对存储（Memcached或者Redis）"),s("li",null,"数据库存储"),s("li",null,"cookies")],-1),Gu=s("p",null,"通过修改 local_settings 文件的 SESSION_ENGINE 的配置值来自定制session后端",-1),Hu=s("p",null,[s("strong",null,"本地内存缓存")],-1),Fu=s("p",null,"本地内存缓存是最快速和最简单的session后端配置方法，因为他不需要处理任何的依赖关系。尽管如此，他也拥有以下明显的缺点：",-1),Vu=s("ul",null,[s("li",null,[s("p",null,"存储为非共享的，不能跨进程")]),s("li",null,[s("p",null,"进程终止后没有持续性。 单一的Horizon安装的默认为本地内存后端，因为他没有依赖性问题。生产环境是不推荐使用这个后端的，甚至在严肃的开发工作中也不推荐。你仍旧可以这样启用："),s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SESSION_ENGINE = 'django.contrib.sessions.backends.cache'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CACHES = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  'BACKEND': 'django.core.cache.backends.locmem.LocMemCache'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])])])],-1),Bu=s("p",null,[s("strong",null,"键值对存储")],-1),qu=s("p",null,"你可以使用Memcached 或 Redis 等应用程序作为session的外部缓存机制。这些应用程序为session提供了持久并可以共享的存储，这在小规模或开发环境中的部署中十分有用。",-1),Yu=s("ol",null,[s("li",null,"Memcached")],-1),zu=s("p",null,"Memcached 是一个高性能和分布式的内存对象缓存系统，为小块的任意数据提供进驻内存的键值对的存储。 需求： Memcached服务运行并可以访问。 安装了python-memcached 的 Python 模块 通过下面的方法启用：",-1),$u=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SESSION_ENGINE = 'django.contrib.sessions.backends.cache'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CACHES = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    'LOCATION': 'my_memcached_host:11211',")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xu=s("ol",null,[s("li",null,"Redis")],-1),Ju=s("p",null,"Redis是一个开源的，BSD许可的，高级键值对存储。他通常被称为数据结构服务器。 需求： Redis服务运行并可以访问 安装了 redis 以及 django-redis 的python模块 通过以下配置方法启用：",-1),Wu=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"SESSION_ENGINE = 'django.contrib.sessions.backends.cache'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CACHES = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "default": {')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "BACKEND": "redis_cache.cache.RedisCache",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "LOCATION": "127.0.0.1:6379:1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        "OPTIONS": {')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'            "CLIENT_CLASS": "redis_cache.client.DefaultClient",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qu=s("h1",{id:"第三部分-openstack进阶指南",tabindex:"-1"},[n("第三部分 OpenStack进阶指南 "),s("a",{class:"header-anchor",href:"#第三部分-openstack进阶指南","aria-hidden":"true"},"#")],-1),Zu=s("p",null,"联系作者----------------------------------------------------------------------",-1),s1=s("h1",{id:"第四部分-docker和kubernetes基础",tabindex:"-1"},[n("第四部分 Docker和Kubernetes基础 "),s("a",{class:"header-anchor",href:"#第四部分-docker和kubernetes基础","aria-hidden":"true"},"#")],-1),n1=s("p",null,"1.docker基础入门",-1),l1=s("p",null,"在全链路自动化运维体系中，我们已经可以完成自动化系统安装、自动化监控、配置管理、代码部署。通过SaltStack的配置管理可以保证开发、测试、生产的环境一致性；自动化代码部署可以实现一键部署、秒级回滚；但是，你有没有考虑过，SaltStack配置的环境是很难回滚的，就像你安装了一个软件包更新了其它的软件包。想回滚到你安装软件之前的状态，这个可能有点难。再或者你的代码和环境需要一起回滚！",-1),e1=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/6b19e69aac9d176124a719ad038e3bb2.png",alt:"img"})],-1),o1=s("p",null,"那么让我们马上进入容器的世界，虽然容器不仅仅是解决这些问题，但是至少我们遇到了运维痛点？引入一个新的解决方案一定是为了解决痛点。作为运维，我们不能局限于眼前的苟且，一定要高瞻远瞩，及时的跟上潮流。但是对于生产环境，我们必须要慎重的对待。",-1),a1=s("h2",{id:"docker介绍",tabindex:"-1"},[n("Docker介绍 "),s("a",{class:"header-anchor",href:"#docker介绍","aria-hidden":"true"},"#")],-1),t1=s("p",null,"Docker是Docker.Inc公司开源的一个基于LXC技术之上构建的Container容器引擎，源代码托管在GitHub上,基于Go语言并遵从Apache2.0协议开源。",-1),c1=s("p",null,"Docker是通过内核虚拟化技术（namespaces及cgroups等）来提供容器的资源隔离与安全保障等。由于Docker在操作系统层实现隔离，所以Docker容器在运行时，不需要类似虚拟机（VM）额外的操作系统开销，提高资源利用率。",-1),i1=s("p",null,[s("strong",null,"Docker运行结构")],-1),r1=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/3185f40a56d6a22b714b444d515be3f0.png",alt:"说明: Docker Engine Components Flow"})],-1),p1=s("p",null,"Docker是一个C/S结构的项目，有Docker Client、RESTAPI、Docker Server组成。",-1),d1=s("ul",null,[s("li",null,"Docker Client：Docker客户端命令工具。"),s("li",null,"REST API：提供标准的RESTful接口。"),s("li",null,"Docker Server:：Docker daemon的主要组成部分，接收用户从Docker Client调用REST API发送过来的请求。")],-1),A1=s("p",null,[s("strong",null,"Docker 包括三个基本概念：")],-1),C1=s("ul",null,[s("li",null,"镜像（Image）"),s("li",null,"容器（Container）"),s("li",null,"仓库（Repository）")],-1),u1=s("p",null,[s("strong",null,"Docker镜像")],-1),y1=s("p",null,"Docker 镜像就是一个只读的模板。你可以拿KVM虚拟机镜像来对比理解。",-1),h1=s("p",null,"例如：一个镜像可以包含一个完整的CentOS操作系统运行（注意不包含内核），里面仅安装了Nginx或用户需要的其它应用程序。",-1),_1=s("p",null,"镜像可以用来创建Docker容器。就像你使用创建好的镜像直接启动一个虚拟机一样。",-1),D1=s("p",null,"Docker 提供了一个很简单的机制来创建镜像或者更新现有的镜像，用户甚至可以直接从其他人那里下载一个已经做好的镜像来直接使用。",-1),g1=s("p",null,[s("strong",null,"小提示：为什么在CentOS的宿主机上可以运行一个Ubuntu的Docker容器？因为Docker镜像里面只是包含了容器运行时的文件、库文件等，并不包含Kernel，统一使用宿主机的Linux内核。")],-1),m1=s("p",null,[s("strong",null,"Docker容器")],-1),b1=s("p",null,"Docker利用容器来运行应用，就像你运行一个KVM虚拟机一样。容器就是从镜像创建的运行实例，就像我们上面提到了虚拟机实例一样。它可以被启动、开始、停止、删除。每个容器都是相互独立的、隔离的个体。但其实没有虚拟机隔离的那么彻底，这个我们后面再说。",-1),k1=s("p",null,"你可以把容器看做是一个简易版的Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。",-1),v1=s("p",null,[s("strong",null,"Docker仓库")],-1),x1=s("p",null,"Docker仓库是集中存放镜像文件的场所。就像OpenStack的Glance服务，仓库分为公开仓库（Public）和私有仓库（Private）两种形式。这个有点像Git代码托管，你可以把代码放在GitHub上并公开，也可是使用Gitlab创建一个私有的代码托管平台。",-1),f1=s("p",null,"Docker最大的公开仓库是Docker Hub，存放了数量庞大的镜像供用户下载，后面你也可以创建自己的镜像分享到Docker Hub中。",-1),S1=s("p",null,"同时你可以创建自己的镜像托管平台，Docker有一个叫做Registry的组件，使用Docker Registry可以启动一个私有的镜像托管平台，这个平台可以存放多个仓库，每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。",-1),E1=s("p",null,"有时候我们会把仓库和仓库注册服务器（Registry）混为一谈，并不严格区分，实际上不严谨的，不过也不用太纠结这些名词，可以根据上下文来理解。",-1),P1=s("p",null,"当用户创建了自己的镜像之后就可以使用docker push命令将它上传到公有或者私有仓库，这样下次在另外一台机器上使用这个镜像时候，只需要从仓库上docker pull下来就可以了。是的，没错，就像你操作Git那样。",-1),N1=s("h3",{id:"docker与虚拟化",tabindex:"-1"},[n("Docker与虚拟化 "),s("a",{class:"header-anchor",href:"#docker与虚拟化","aria-hidden":"true"},"#")],-1),R1=s("p",null,"Docker是一种容器技术，它和虚拟化是有区别，就像下图所示：",-1),T1=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/50b4ac39d02c080a7e3284e9b078e0c2.jpg",alt:"0731013"})],-1),I1=s("p",null,"可以看到Docker的容器并不需要运行一个Hypervisor。直接是Docker Engine来管理容器，减少了Hypervisor的开销，但是由于Docker容器并不是一个虚拟机，所以也无法提供像虚拟机一样的完全的资源隔离，还有很多隔离层面的问题。所以如果你的业务要求完全的资源隔离，可能Docker并不是一个好的选择。例如我们之前支付业务，需要在物理机上插入U Key，在虚拟机的情况下可以通过USB重定向来实现，但是Docker却并不支持。",-1),O1=s("p",null,"所有的技术都有它适用的场景，只有深入了解Docker，我们才能发挥它的作用，提高工作效率。",-1),M1=s("h3",{id:"docker与openstack对比",tabindex:"-1"},[n("Docker与OpenStack对比 "),s("a",{class:"header-anchor",href:"#docker与openstack对比","aria-hidden":"true"},"#")],-1),w1=s("p",null,"在Docker还没有普及之前，云计算、OpenStack等流行的技术铺面而来。严格来说Docker不应该和OpenStack做对比，他们没有在一个层级上，和KVM比会更好一些。",-1),K1=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"类别"),s("th",null,"Docker"),s("th",null,"OpenStack/KVM")])]),s("tbody",null,[s("tr",null,[s("td",null,"部署难度"),s("td",null,"非常简单"),s("td",null,"组件多，部署复杂")]),s("tr",null,[s("td",null,"启动速度"),s("td",null,"秒级"),s("td",null,"分钟级")]),s("tr",null,[s("td",null,"执行性能"),s("td",null,"和物理系统几乎一致"),s("td",null,"VM会占用一些资源")]),s("tr",null,[s("td",null,"镜像体积"),s("td",null,"镜像是MB级别"),s("td",null,"虚拟机镜像GB级别")]),s("tr",null,[s("td",null,"管理效率"),s("td",null,"管理简单"),s("td",null,"组件相互依赖，管理复杂")]),s("tr",null,[s("td",null,"隔离性"),s("td",null,"隔离性高"),s("td",null,"彻底隔离")]),s("tr",null,[s("td",null,"可管理性"),s("td",null,"单进程、不建议启动SSH"),s("td",null,"完整的系统管理")]),s("tr",null,[s("td",null,"网络连接"),s("td",null,"比较弱"),s("td",null,"借助Neutron可以灵活组件各类网络架构")])])],-1),L1=s("h3",{id:"docker改变了什么？",tabindex:"-1"},[n("Docker改变了什么？ "),s("a",{class:"header-anchor",href:"#docker改变了什么？","aria-hidden":"true"},"#")],-1),U1=s("p",null,"我觉得Docker在不同的层面都改变了我的工作方式：",-1),j1=s("p",null,[s("strong",null,"面向产品")],-1),G1=s("p",null,"增加了产品交付模式。在产品交付方面，之前做产品交付我们都是交付的软件包、安装操作文档等，需要用户进行部署。而现在可以直接交付Docker镜像，直接启动就可以访问。例如现在很多开源的项目都提供了Docker镜像或者Dockerfile，对于只想尝试一下的人员来说，再也不用进行繁琐的安装步骤了，而且往往部署成功后，发现并不能满足我们的要求。",-1),H1=s("p",null,[s("strong",null,"面向开发")],-1),F1=s("p",null,"简化了开发环境配置。公司每次有开发入职，当天除了办手续就是准备开发环境了。如果使用Docker，我们可以给不同项目，构建不同的Docker镜像。开发入职后，就可以快速的进入开发工作。而且这个镜像一次构建，可以在开发、测试、预生产、生产都可以使用。",-1),V1=s("p",null,[s("strong",null,"面向测试")],-1),B1=s("p",null,"Docker实现了多版本测试。之前我公司测试团队，如果想测试一个项目的不同分支，由于测试环境的局限性大家要排队，串行的进行测试。测试人员A再使用某个项目的测试环境时，其它人要排队。现在每个测试人员都可以创建不同分支的Docker容器。让测试团队可以并行测试。",-1),q1=s("p",null,[s("strong",null,"面向运维")],-1),Y1=s("p",null,"解决环境一致性、实现运行环境回滚。我们也不需要使用SaltStack进行配置管理了。做好一个Docker镜像之后，开发、测试、生产都用一套运行环境，只是上面的代码不同。当然这个虚拟机也可以实现，但是不够敏捷。而且在生产代码部署的时候，以Docker容器为单位进行发布。如果要进行回滚，直接把上一个版本的Docker容器启动即可。",-1),z1=s("p",null,[s("strong",null,"面向架构")],-1),$1=s("p",null,"SOA服务部署、微服务部署、自动化扩容。之前我们做SOA、微服务的时候最多以虚拟机为单位进行管理。但是现在启动一个Docker容器要远远快速启动一个KVM虚拟机。而且不需要太复杂的操作步骤，你就可以在一个新的服务器上安装上Docker，并下载镜像，启动容器。",-1),X1=s("h2",{id:"docker部署",tabindex:"-1"},[n("Docker部署 "),s("a",{class:"header-anchor",href:"#docker部署","aria-hidden":"true"},"#")],-1),J1=s("p",null,"目前Docker仅支持Linux和Unix环境，在Windows Server 2016版本支持Windows容器。",-1),W1=s("h3",{id:"docker-for-centos：",tabindex:"-1"},[n("Docker for CentOS： "),s("a",{class:"header-anchor",href:"#docker-for-centos：","aria-hidden":"true"},"#")],-1),Q1=s("p",null,[s("strong",null,"第一步：使用官方yum仓库")],-1),Z1=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y yum-utils")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),sy=s("p",null,"使用国内Yum源",-1),ny=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /etc/yum.repos.d/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 yum.repos.d]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ly=s("p",null,"第二步：Docker安装：",-1),ey=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y docker-ce")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),oy=s("p",null,"第三步：启动后台进程：",-1),ay=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 yum.repos.d]# docker --version")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Docker version 18.09.2, build 6247962")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ty=s("h3",{id:"docker-for-windows",tabindex:"-1"},[n("Docker for windows: "),s("a",{class:"header-anchor",href:"#docker-for-windows","aria-hidden":"true"},"#")],-1),cy=s("p",null,[n("第一步：下载boot2docker："),s("a",{href:"https://github.com/boot2docker/windows-installer/releases/latest",target:"_blank",rel:"noreferrer"},"https://github.com/boot2docker/windows-installer/releases/latest")],-1),iy=s("p",null,"第二步：运行安装程序，",-1),ry=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/ee82a72fe806ac1ae99ab7fa0aac210c.png",alt:"img"})],-1),py=s("p",null,"选择需要安装的组件，如果初次安装请选择Full installation。",-1),dy=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/920a1b8c46b133f431f0255197ddb3f8.png",alt:"img"})],-1),Ay=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/bbe62c1244b68a92383658af3a72b3a0.png",alt:"img"})],-1),Cy=s("p",null,"安装完毕，打开Docker，默认会进行初始化，初始化会创建一个virtualbox的虚拟机。",-1),uy=s("h3",{id:"docker-hub",tabindex:"-1"},[n("Docker Hub "),s("a",{class:"header-anchor",href:"#docker-hub","aria-hidden":"true"},"#")],-1),yy=s("p",null,"Docker之所以能这么快的火起来，和Docker Hub的作用是分不开的。Docker构建了像GitHub一样的仓库，用来存放大家构建好的Docker镜像，其中已经包括了超过15,000的镜像。大部分需求，都可以通过在 Docker Hub 中直接下载镜像来实现。",-1),hy=s("p",null,[s("strong",null,"搜索镜像")],-1),_y=s("p",null,"搜索，你懂的，想寻找你需要的Docker镜像，先搜索吧，因为可能已经有人做好了，合并重复造轮子呢，尤其是很多是官方提供的，可以非常放心的使用。",-1),Dy=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/bd38bd717fa1a2f84aa5f62a965a7ecd.png",alt:"img"})],-1),gy=s("p",null,"输出依次为镜像名字、描述、星级（表示该镜像的受欢迎程度）、是否官方创建、是否自动创建。OFFICIAL为OK的就是官方镜像。",-1),my=s("p",null,"本章快速的带领读者使用上Docker，了解Docker的基本操作和管理工作。记住，唯有实践才会掌握。",-1),by=s("h2",{id:"docker镜像管理",tabindex:"-1"},[n("Docker镜像管理 "),s("a",{class:"header-anchor",href:"#docker镜像管理","aria-hidden":"true"},"#")],-1),ky=s("p",null,"镜像是Docker容器的基础，想运行一个Docker容器就需要有镜像。我们上面已经学会了使用search搜索镜像。那么这个镜像是怎么创建的呢？",-1),vy=s("h3",{id:"创建镜像",tabindex:"-1"},[n("创建镜像 "),s("a",{class:"header-anchor",href:"#创建镜像","aria-hidden":"true"},"#")],-1),xy=s("p",null,"镜像的创建有以下几种方法：",-1),fy=s("p",null,"**使用ISO镜像：**回顾下OpenStack，我们在创建虚拟机的时候，首先使用iso安装定制了镜像上传到Glance上面，对于Docker来说，我们同样可以使用ISO镜像来制作基本镜像。",-1),Sy=s("p",null,"**使用工具制作镜像：**不同的操作系统都提供了相应的工具来让用户创建Docker镜像，比如Centos可以使用febootstrap。debian/ubuntu使用debootstrap。",-1),Ey=s("p",null,"**基于本地模板导入：**Docker支持从一个操作系统模板文件导入一个镜像。",-1),Py=s("p",null,"一般我们都是使用一些公共的基础镜像，然后在这个基础上，再根据自身需求进行定制。比如后面要讲到的Docker File的方式，来创建镜像。",-1),Ny=s("h3",{id:"获取镜像",tabindex:"-1"},[n("获取镜像 "),s("a",{class:"header-anchor",href:"#获取镜像","aria-hidden":"true"},"#")],-1),Ry=s("p",null,"既然有了Docker Hub，我们就不要重复造轮子了，直接下载一个官方提供的centos镜像吧。",-1),Ty=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker pull centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Using default tag: latest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"latest: Pulling from library/centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"a02a4930cb5d: Pull complete")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Digest: sha256:184e5f35598e333bfa7de10d8fb1cebb5ee4df5bc0f970bf2b1e7c7345136426")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Status: Downloaded newer image for centos:latest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Iy=s("p",null,"Docker镜像文件是有若干层组成的，行首的名称就是各层的ID。这就是Docker镜像的一个特点。其实分层设计是很多设计的最佳实践之一。由于网络原因，国内用户可能需要等待很久。如果下载中断可以再次执行docker pull centos。",-1),Oy=s("p",null,"镜像可以有不同的标签，例如v1.0、v1.1这样，默认情况下，如果我们不再centos后面增加任何的标签会下载标签为latest的镜像，也就是最新版本，而且默认是从docker hub上进行下载。",-1),My=s("h3",{id:"查看镜像",tabindex:"-1"},[n("查看镜像 "),s("a",{class:"header-anchor",href:"#查看镜像","aria-hidden":"true"},"#")],-1),wy=s("p",null,"使用docker images可以查看当前系统中都有哪些镜像。",-1),Ky=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker images")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"REPOSITORY TAG IMAGE ID CREATED SIZE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"centos latest 1e1148e4cc2c 2 months ago 202MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ly=s("p",null,"使用docker images可以列出本地主机上已经存在的镜像，每个镜像都有一个唯一的镜像ID，我们可以看到有以下几个栏目：",-1),Uy=s("ul",null,[s("li",null,"REPOSITORY：镜像来自于哪个仓库"),s("li",null,"TAG：镜像的标签。用来标记镜像的不同版本等。"),s("li",null,"IMAGE ID：镜像的唯一ID。"),s("li",null,"CREATED：镜像创建时间。"),s("li",null,"VIRTUAL SIZE：镜像的大小。")],-1),jy=s("h3",{id:"镜像的导入导出",tabindex:"-1"},[n("镜像的导入导出 "),s("a",{class:"header-anchor",href:"#镜像的导入导出","aria-hidden":"true"},"#")],-1),Gy=s("p",null,"如果你想把自己的镜像传给别人怎么办，Docker提供了导入和导出的命令：",-1),Hy=s("p",null,[s("strong",null,"导出镜像")],-1),Fy=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker save -o centos.tar centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vy=s("p",null,[s("strong",null,"导入镜像")],-1),By=s("p",null,"将导出的镜像scp到另外的一台机器上后做导入。",-1),qy=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# docker load --input centos.tar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Yy=s("p",null,"或者使用重定向进行导入",-1),zy=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# docker load < centos.tar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$y=s("p",null,"Docker镜像这种导入和导出是完整，可以看到镜像ID等都没有发生改变。",-1),Xy=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# docker images")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"REPOSITORY TAG IMAGE ID CREATED SIZE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"centos latest 1e1148e4cc2c 2 months ago 202MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jy=s("h3",{id:"删除镜像",tabindex:"-1"},[n("删除镜像 "),s("a",{class:"header-anchor",href:"#删除镜像","aria-hidden":"true"},"#")],-1),Wy=s("p",null,"使用docker rmi命令可以删除本地的镜像，可以使用镜像的标签或者镜像的ID。他们两者之间是不同的。",-1),Qy=s("p",null,"docker rmi 标签：会删除指定标签的镜像，但是镜像本身不会被删除，因为一个镜像对象可以有多个标签，就像Linux文件的硬链接，当镜像只剩下一个标签的时候，使用标签删除镜像，才会删除镜像本身。",-1),Zy=s("p",null,"docker rmi ID：使用镜像的ID删除镜像，会先删除该镜像的所有标签，然后再删除镜像文件本身。",-1),s6=s("p",null,"注意：如果镜像创建的容器存在时，镜像是无法被删除的。不过你可以使用-f的参数强制删除镜像，并不建议这么做。",-1),n6=s("p",null,"看起来Docker的镜像操作是比虚拟机要便捷的多，目前来说使用几个简单的命令，就可以完成镜像的管理工作，不过这还只是基础。",-1),l6=s("h2",{id:"docker容器管理",tabindex:"-1"},[n("Docker容器管理 "),s("a",{class:"header-anchor",href:"#docker容器管理","aria-hidden":"true"},"#")],-1),e6=s("p",null,"Docker容器相对于OpenStack的云主机实例，虽然他们本质上不同。我们需要基于镜像来创建容器。容器是独立运行的一个或一组应用，以及它们的运行环境。对应的，虚拟机可以理解为模拟运行的一整套操作系统和跑在上面的应用。",-1),o6=s("h3",{id:"启动容器",tabindex:"-1"},[n("启动容器 "),s("a",{class:"header-anchor",href:"#启动容器","aria-hidden":"true"},"#")],-1),a6=s("p",null,"启动容器其实就是创建镜像并启动，启动镜像有两种方式，一种是将已经存在，但是是stopped状态的镜像启动，一种就是基于一个镜像新建一个新的容器并启动。",-1),t6=s("p",null,[s("strong",null,"新建并启动容器")],-1),c6=s("p",null,"让我们先老生常谈，输出一个Hello World吧。",-1),i6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run centos /bin/echo 'Hello world'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Hello world")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),r6=s("p",null,"很神奇，可以在精通各种语言的Hello World计数器+1了，这个和你在本地系统运行/bin/echo ‘Hello world’ 几乎没有任何区别，但是它是Docker容器输出的，而且输出后，它就完成使命，自动退出了。",-1),p6=s("blockquote",null,[s("p",null,"注意：这里就是我们学习Docker要面临的第一个疑惑，就是容器只会在前台运行一个任务，任务结束，容器就终止了。")],-1),d6=s("p",null,"使用docker ps –a可以查看当前启动的容器：",-1),A6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -a")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`789de67bb454 centos "/bin/echo 'Hello wor" 30 seconds ago Exited (0) 29 seconds`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ago pedantic_kare")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),C6=s("p",null,"刚接触Docker到这里还会有第二个疑惑：",-1),u6=s("p",null,"Docker自动帮你生成了一个名字，比如本例中是pedantic_kare。",-1),y6=s("p",null,"很困惑？好吧，让我们来启动一个我们自定义名称，同时可以有终端的容器，就像启动一个虚拟机一样，不过只是像而已，它们本质上完全不同。",-1),h6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run --name mydocker -t -i centos /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@1b0cae722fa0 /]#")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@1b0cae722fa0 /]# ls /")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"anaconda-post.log bin dev etc home lib lib64 lost+found media mnt opt proc root")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"run sbin srv sys tmp usr var")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_6=s("p",null,"上面我们使用了两个选项，-t 选项让Docker分配一个伪终端并绑定到容器的标准输入上， -i 则让容器的标准输入保持打开。",-1),D6=s("p",null,"在交互模式下，用户可以通过所创建的终端来输入命令，例如我们可以查看当前运行的进程，只有/bin/bash和你运行的命令，注意看/bin/bash的PID为1，有意思。先记着这个特殊的地方，随着我们深入学习，再回过头来研究它。",-1),g6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@1b0cae722fa0 /]# ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 1 0.1 0.1 11776 1872 ? Ss 15:30 0:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 18 0.0 0.0 47424 1660 ? R+ 15:31 0:00 ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),m6=s("p",null,"当利用 docker run 来创建容器时，Docker 在后台运行的标准操作包括：",-1),b6=s("ul",null,[s("li",null,"检查本地是否存在指定的镜像，不存在就从公共仓库下载；"),s("li",null,"利用镜像创建并启动一个容器；"),s("li",null,"分配一个文件系统，并在只读的镜像层外面挂载一层可读写层；"),s("li",null,"从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去；"),s("li",null,"从地址池配置一个ip地址给容器；"),s("li",null,"执行用户指定的应用程序；"),s("li",null,"执行完毕后容器被终止。")],-1),k6=s("p",null,"让我们输入exit来退出这个容器，退出后，容器会自动终止运行。为什么呢？请参考我们第一个疑惑，Docker容器在前台运行一个单任务，任务结束，容器就终止。这就是Docker容器的特性！同时你有没有注意到一个小细节，默认docker容器的主机名就是CONTAINER ID。",-1),v6=s("p",null,[s("strong",null,"让容器容器后台运行")],-1),x6=s("p",null,"在使用docker run运行容器更多时候，我们是需要容器在后台运行的，也就是以守护态形式运行。可以通过-d参数来实现。",-1),f6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name mydocker2 centos /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"38e42accfa2226bb6c7da2e28e12dc95f6b6d6717326442131887a24bb321cdd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),S6=s("p",null,"容器启动后就会在后台运行，然后返回一个容器ID到控制台，而且上面这个容器也终止了，带着问题继续前进。",-1),E6=s("h3",{id:"终止容器",tabindex:"-1"},[n("终止容器 "),s("a",{class:"header-anchor",href:"#终止容器","aria-hidden":"true"},"#")],-1),P6=s("p",null,"在前面的输出Hello World的操作中我们看到了，当Docker容器中指定的应用程序运行完毕，容器也就自动终止了。同时我们可以使用exit命令退出运行/bin/bash的终端，同时我们也可以使用Ctrl+d来实现同样的效果。",-1),N6=s("p",null,"使用docker stop来停止一个容器，默认是先给容器发送SIGTERM信号，然后10秒后发生SIGKILL信号终止容器，可以使用-t或者—time来设置等待的时间，单位是秒",-1),R6=s("p",null,"docker stop 容器名称、容器ID",-1),T6=s("p",null,"对于终止的容器，可以使用docker start来启动，或者使用docker restart来重启。",-1),I6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@bc419cd0b8fa /]# exit")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Exit")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O6=s("p",null,"可以使用docker ps –a来查看容器的状态，发现已经是停止模式。",-1),M6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -a")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'38e42accfa22 centos "/bin/bash" 17 seconds ago Exited (0) 16 seconds ago')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mydocker2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'a5ef57e8783f centos "/bin/bash" 3 minutes ago Exited (0) About a minute ago')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mydocker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`d132d6e645ad centos "/bin/echo 'Hello wo…" 3 minutes ago Exited (0) 3 minutes`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ago serene_dijkstra")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),w6=s("p",null,[s("strong",null,"启动已终止容器")],-1),K6=s("p",null,"可以使用docker start来开启已经终止的容器，可以通过输入容器的CONTAINER ID，或者NAMES来进行启动。",-1),L6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker start mydocker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mydocker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),U6=s("p",null,"好的，我们又一次启动了运行/bin/bash的容器，那么问题来了，我们怎么进去呢。",-1),j6=s("h3",{id:"进入容器",tabindex:"-1"},[n("进入容器 "),s("a",{class:"header-anchor",href:"#进入容器","aria-hidden":"true"},"#")],-1),G6=s("p",null,[s("strong",null,"Docker attach")],-1),H6=s("p",null,"Docker提供了docker attach的命令，用来让我们进入已经启动的容器（如果容器已经终止，你需要使用docker start将它启动。",-1),F6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker attach mydocker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@a5ef57e8783f /]#")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V6=s("p",null,"你可以继续执行一些命令，没错，很多命令都没有。",-1),B6=s("p",null,"注意，在我们使用 attach 进入容器的时候，如果同时有多个窗口 attach 到同一个容器的时候，所有窗口都会同步显示。当某个窗口因命令阻塞时,其他窗口也无法执行操作了。这可怎么办，如果我们是团队作战，可能多个同事需要同时进入容器操作呢?还有一个最关键的问题。你输入exit以后呢？之前运行的容器退出了。",-1),q6=s("p",null,[s("strong",null,"nsenter进入容器")],-1),Y6=s("p",null,"nsenter命令被包含在util-linux软件包里面，使用nsenter可以访问另一个进程的名字空间,大多数Linux发行版默认包含了该软件，CentOS默认是有的。如果你的系统里面没有可以使用以下命令进行安装：",-1),z6=s("blockquote",null,[s("p",null,[s("strong",null,"Yum安装：")])],-1),$6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# yum install -y util-linux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),X6=s("p",null,"为了连接到容器，你还需要找到容器的第一个进程的 PID，可以通过下面的命令获取。",-1),J6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# docker inspect --format "{{ .State.Pid }}" <container ID or NAMES>')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W6=s("p",null,"通过这个 PID，就可以连接到这个容器：",-1),Q6=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# nsenter --target $PID --mount --uts --ipc --net –pid")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z6=s("p",null,"如果你刚才停止了容器，请启动。",-1),sh=s("p",null,"连接方式如下：",-1),nh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# PID=$(docker inspect --format "{{ .State.Pid }}"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mydocker)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# echo $PID")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"8029")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lh=s("p",null,"注意如果你的PID变量为0，说明mydocker容器没有启动。",-1),eh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# nsenter --target $PID --mount --uts --ipc --net --pid")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@a5ef57e8783f /]# ps -ef")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"UID PID PPID C STIME TTY TIME CMD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 1 0 0 21:11 pts/0 00:00:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 14 0 0 21:12 pts/0 00:00:00 -bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 27 14 0 21:12 pts/0 00:00:00 ps -ef")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),oh=s("p",null,[s("strong",null,"编写一个脚本用户进入容器")],-1),ah=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim docker_in.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Use nsenter to access docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker_in(){")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME_ID=$1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'PID=$(docker inspect --format "{{ .State.Pid }}" $NAME_ID)')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nsenter --target $PID --mount --uts --ipc --net --pid")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker_in $1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# chmod +x docker_in.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),th=s("p",null,"这么后面的内容，我们就直接使用docker_in.sh这个脚本来进入Docker容器，只要传给它名称或者容器ID即可，就像下面这样：",-1),ch=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ./docker_in.sh mydocker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ih=s("h3",{id:"不进入容器执行命令",tabindex:"-1"},[n("不进入容器执行命令 "),s("a",{class:"header-anchor",href:"#不进入容器执行命令","aria-hidden":"true"},"#")],-1),rh=s("p",null,"或许你的本意不是想进去容器，而是想让容器执行一个命令，docker提供了exec，使用exec可以在容器内运行命令。",-1),ph=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker exec mydocker whoami")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dh=s("p",null,"使用exec进入容器",-1),Ah=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker exec -it mydocker /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ch=s("p",null,"注意，现在你进入容器和其它方法都是不一样的，其实是你执行了一个/bin/bash的命令，所以你现在拥有了一个shell，你现在所在的shell应该是下图中PID为33的进程。",-1),uh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@1b0cae722fa0 /]# ps -ef")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"UID PID PPID C STIME TTY TIME CMD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 1 0 0 15:37 ? 00:00:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 33 0 0 15:41 ? 00:00:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 46 33 0 15:41 ? 00:00:00 ps -ef")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yh=s("p",null,"或许你也发现使用docker exec、nsenter进入容器后，执行exit退出容器，容器并不会关闭。但是使用docker attach进入容器，输入exit退出容器后，容器也会自动终止。你可以想想为什么。因为除了attach，nsenter和exec实际中都是开了一个新的shell在执行。而attach是使用容器本身启动的/bin/bash，这个shell环境退出了。那么容器就自动退出了。所以Docker的魔咒来了：docker容器只能而且必须在前台运行一个进程，如果进程退出，容器就关闭。当然如果你想在Docker容器中启动多进程也是有办法的，我们后面会讲到。",-1),hh=s("h3",{id:"删除容器",tabindex:"-1"},[n("删除容器 "),s("a",{class:"header-anchor",href:"#删除容器","aria-hidden":"true"},"#")],-1),_h=s("p",null,"可以使用 docker rm 来删除一个处于终止状态的容器。 例如",-1),Dh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker ~]# docker rm mydocker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gh=s("p",null,"如果要删除一个运行中的容器，可以添加-f参数。Docker会发送 SIGKILL信号给容器。",-1),mh=s("h3",{id:"学习中的小技巧",tabindex:"-1"},[n("学习中的小技巧 "),s("a",{class:"header-anchor",href:"#学习中的小技巧","aria-hidden":"true"},"#")],-1),bh=s("p",null,"如果你在学习和测试的过程中，经常因为启动非常多的容易想删除也很难，下面列举了几个小技巧，可以快速的帮我们进行容器的清理。",-1),kh=s("h4",{id:"容器停止后就自动删除：",tabindex:"-1"},[n("容器停止后就自动删除： "),s("a",{class:"header-anchor",href:"#容器停止后就自动删除：","aria-hidden":"true"},"#")],-1),vh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'docker run --rm centos /bin/echo "One"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xh=s("h4",{id:"杀死所有正在运行的容器：",tabindex:"-1"},[n("杀死所有正在运行的容器： "),s("a",{class:"header-anchor",href:"#杀死所有正在运行的容器：","aria-hidden":"true"},"#")],-1),fh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker kill $(docker ps -a -q)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sh=s("h4",{id:"删除所有已经停止的容器：",tabindex:"-1"},[n("删除所有已经停止的容器： "),s("a",{class:"header-anchor",href:"#删除所有已经停止的容器：","aria-hidden":"true"},"#")],-1),Eh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker rm $(docker ps -a -q)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ph=s("h4",{id:"删除所有未打-dangling-标签的镜像",tabindex:"-1"},[n("删除所有未打 dangling 标签的镜像 "),s("a",{class:"header-anchor",href:"#删除所有未打-dangling-标签的镜像","aria-hidden":"true"},"#")],-1),Nh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker rmi $(docker images -q -f dangling=true)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rh=s("h4",{id:"删除所有镜像",tabindex:"-1"},[n("删除所有镜像 "),s("a",{class:"header-anchor",href:"#删除所有镜像","aria-hidden":"true"},"#")],-1),Th=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker rmi $(docker images -q)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ih=s("p",null,"如果你觉得名称很长，不容易记，还可以为这些命令创建别名。",-1),Oh=s("h4",{id:"杀死所有正在运行的容器",tabindex:"-1"},[n("杀死所有正在运行的容器. "),s("a",{class:"header-anchor",href:"#杀死所有正在运行的容器","aria-hidden":"true"},"#")],-1),Mh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alias dockerkill='docker kill $(docker ps -a -q)'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wh=s("h4",{id:"删除所有已经停止的容器",tabindex:"-1"},[n("删除所有已经停止的容器. "),s("a",{class:"header-anchor",href:"#删除所有已经停止的容器","aria-hidden":"true"},"#")],-1),Kh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alias dockerclean='docker rm $(docker ps -a -q)'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Lh=s("h4",{id:"删除所有未打标签的镜像",tabindex:"-1"},[n("删除所有未打标签的镜像. "),s("a",{class:"header-anchor",href:"#删除所有未打标签的镜像","aria-hidden":"true"},"#")],-1),Uh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alias dockercleani='docker rmi $(docker images -q -f dangling=true)'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jh=s("h4",{id:"删除所有已经停止的容器和未打标签的镜像",tabindex:"-1"},[n("删除所有已经停止的容器和未打标签的镜像. "),s("a",{class:"header-anchor",href:"#删除所有已经停止的容器和未打标签的镜像","aria-hidden":"true"},"#")],-1),Gh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alias dockerclean='dockercleanc || true && dockercleani'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hh=s("blockquote",null,[s("p",null,"注意：生产环境一定要慎用！！！")],-1),Fh=s("h2",{id:"docker网络访问",tabindex:"-1"},[n("Docker网络访问 "),s("a",{class:"header-anchor",href:"#docker网络访问","aria-hidden":"true"},"#")],-1),Vh=s("p",null,"现在我们已经可以熟练的使用docker命令操作镜像和容器，并学会了如何进入到容器中去，那么实际的工作中，我们通常是在Docker中部署服务，我们需要在外部通过IP和端口进行访问的，那么如何访问到Docker的内部服务呢？",-1),Bh=s("p",null,"在后面我们会有专门的章节来讲解Docker的网络配置，这里我们先学习一个比较简单的通过网络访问容器的方法，就是端口映射。",-1),qh=s("p",null,"容器中可以运行一些网络应用，要让外部也可以访问这些应用，可以通过 -P 或 -p 参数来指定端口映射。",-1),Yh=s("h3",{id:"随机映射",tabindex:"-1"},[n("随机映射 "),s("a",{class:"header-anchor",href:"#随机映射","aria-hidden":"true"},"#")],-1),zh=s("p",null,"当使用 -P 标记时，Docker 会随机映射一个 49000~49900 的端口到内部容器开放的网络端口。",-1),$h=s("p",null,"下面我们以一个nginx的容器为例子来测试一下-P的功能，大家可以使用search搜索下nginx镜像，我们使用官方的nginx镜像来启动一个容器。",-1),Xh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker search nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jh=s("p",null,"这次我们不执行docker pull。直接来启动容器，你会发现docker会先查找你本地是否有该镜像，如果没有它会自动下载后，然后启动容器。",-1),Wh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -P nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Unable to find image 'nginx:latest' locally")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"latest: Pulling from library/nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6ae821421a7d: Pull complete")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"da4474e5966c: Pull complete")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"eb2aec2b9c9f: Pull complete")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Digest: sha256:dd2d0ac3fff2f007d99e033b64854be0941e19a2ad51f174d9240dda20d9f534")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Status: Downloaded newer image for nginx:latest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ecf14adb9dec09555ae31673753093e03941c41d917669dd1f254b51fdec7b51")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qh=s("p",null,"我们又学习了一个新的参数-d可以让容器直接在后台运行",-1),Zh=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`6819734a680c nginx "nginx -g 'daemon off" About an hour ago Up About an hour`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.0.0.0:32769->80/tcp, 0.0.0.0:32768->443/tcp hungry_mayer")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),s_=s("p",null,"可以看到，随机映射了一个32769端口到容器的80端口。下面就可以直接访问了。",-1),n_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head http://192.168.56.11:32769/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.11.3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Fri, 02 Sep 2016 17:44:14 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Tue, 26 Jul 2016 14:54:48 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "579779b8-264"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),l_=s("p",null,"同样的，可以通过 docker logs 命令来查看应用的日志信息。",-1),e_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker logs hungry_mayer")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'192.168.56.11 - - [02/Sep/2016:17:44:01 +0000] "HEAD / HTTP/1.1" 200 0 "-"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"curl/7.29.0" "-"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'192.168.56.11 - - [02/Sep/2016:17:44:06 +0000] "GET / HTTP/1.1" 200 612 "-"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"curl/7.29.0" "-"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'192.168.56.11 - - [02/Sep/2016:17:44:14 +0000] "HEAD / HTTP/1.1" 200 0 "-"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"curl/7.29.0" "-"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),o_=s("p",null,"是不是老使用随机的名字和ID操作容器很不方面，那么下面我们再创建容器的时候，一定要给它定义一个可读的名字。",-1),a_=s("h3",{id:"指定端口映射",tabindex:"-1"},[n("指定端口映射 "),s("a",{class:"header-anchor",href:"#指定端口映射","aria-hidden":"true"},"#")],-1),t_=s("p",null,"-p（小写的）则可以指定要映射的端口，并且，在一个指定端口上只可以绑定一个容器。支持的格式有以下三种：",-1),c_=s("ul",null,[s("li",null,"hostPort:containerPort。"),s("li",null,"ip:hostPort:containerPort"),s("li",null,"ip::containerPort")],-1),i_=s("p",null,[s("strong",null,"映射所有IP地址的指定端口")],-1),r_=s("p",null,"使用 hostPort:containerPort，将本地的 80 端口映射到Nginx容器的 80 端口",-1),p_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 80:80 --name nginx-demo1 nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),d_=s("p",null,"此时默认会绑定本地所有接口上的所有地址。注意镜像名称需要放到最后。",-1),A_=s("p",null,[s("strong",null,"映射到指定地址的指定端口")],-1),C_=s("p",null,"如果你宿主机拥有多个IP地址，可以使用 ip:hostPort:containerPort 格式指定映射使用一个特定地址，比如将Nginx的80端口绑定到本地IP地址的81端口。",-1),u_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 192.168.56.11:81:80 --name nginx-demo2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),y_=s("p",null,[s("strong",null,"映射到指定地址的任意端口")],-1),h_=s("p",null,"使用 ip::containerPort 绑定Nginx80端口到本地192.168.56.11的任意端口，本地主机会自动分配一个端口。",-1),__=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 192.168.56.11::80 --name nginx-demo3 nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),D_=s("p",null,[s("strong",null,"使用 udp 标记来指定 udp 端口")],-1),g_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 192.168.56.11:53:53/udp –name dns-udp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),m_=s("p",null,[s("strong",null,"绑定多个端口")],-1),b_=s("p",null,"如果你想绑定Docker容器里面的多个端口，可以使用多次使用-p 标记。",-1),k_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 80:80 -p 443:443 nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),v_=s("p",null,[s("strong",null,"查看映射端口配置")],-1),x_=s("p",null,"使用 docker port 来查看当前映射的端口配置，也可以查看到绑定的地址",-1),f_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker port nginx-demo1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"80/tcp -> 0.0.0.0:80 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),S_=s("h2",{id:"docker数据管理",tabindex:"-1"},[n("Docker数据管理 "),s("a",{class:"header-anchor",href:"#docker数据管理","aria-hidden":"true"},"#")],-1),E_=s("p",null,"为了能够存储持久化数据以及共享容器间的数据，Docker提出了Volume的概念。让我们通过类似mount的方式将宿主机的文件或者目录挂载到容器中。",-1),P_=s("p",null,"在容器中管理数据主要有两种方式：",-1),N_=s("ul",null,[s("li",null,"数据卷（Data volumes）"),s("li",null,"数据卷容器（Data volume containers）")],-1),R_=s("h3",{id:"数据卷",tabindex:"-1"},[n("数据卷 "),s("a",{class:"header-anchor",href:"#数据卷","aria-hidden":"true"},"#")],-1),T_=s("p",null,[s("strong",null,"创建一个数据卷")],-1),I_=s("p",null,"在使用docker run命令的时候，使用-v选项创建一个数据卷并挂载到容器里。",-1),O_=s("p",null,"下面创建一个测试容器nginx，并加载一个数据卷到容器的/data目录。",-1),M_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name nginx-volume-test1 -v /data nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),w_=s("p",null,"容器启动后，登录到容器会发现/data目录是空的。",-1),K_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ./docker_in.sh nginx-volume-test1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@00741a2a44ad:/# ls -l /data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),L_=s("p",null,"上面的命令会挂载一个data目录到容器中，并绕过联合文件系统，我们可以在主机上直接操作该目录。任何在该镜像/data 路径的文件会将被复制到Volume。那么在我们宿主机上，这个目录到底在哪里呢。",-1),U_=s("p",null,"我们可以使用 docker inspect 命令找到Volume在主机上的存储位置：",-1),j_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker inspect -f {{.Mounts}} nginx-volume-test1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[{861cbee5b650461490633fc60bd94a0df0f8b01e4a4dcc4adff4825dff509159")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/var/lib/docker/volumes/861cbee5b650461490633fc60bd94a0df0f8b01e4a4dcc4adff4825dff509159/_data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/data local true }]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G_=s("p",null,"你会发现，容器中的/data目录实际上挂载到了/var/lib/docker/volumes/容器ID/_data的目录下。",-1),H_=s("p",null,"我们现在在宿主机该目录下创建一个文件。",-1),F_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 _data]# touch mount-test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V_=s("p",null,"我们再次在容器中查看，发现已经有了。",-1),B_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ./docker_in.sh nginx-volume-test1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@00741a2a44ad:/# ls -l /data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 0 Sep 2 18:58 mount-test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q_=s("p",null,[s("strong",null,"指定一个宿主机目录作为数据卷")],-1),Y_=s("p",null,"有的时候，我们需要将宿主机的某个目录挂载到容器中来进行访问，可以通过-v 源路径：目标目录的方式进行。",-1),z_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir -p /data/docker-volume-nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name nginx-volume-test2 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-v /data/docker-volume-nginx:/data nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$_=s("p",null,"你会发现，目前容器中的/data目录和宿主机中的/data/ docker-volume-nginx目录是相同的。",-1),X_=s("p",null,[s("strong",null,"文件挂载")],-1),J_=s("p",null,"数据卷也可以挂载一个宿主机的文件作到容器中作为数据卷。",-1),W_=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name nginx-volume-test3 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-v /$HOME/.bash_history:/root/.bash_history nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q_=s("p",null,"上面案例将宿主机的.bash_history挂载到了容器中，这样就可以记录容器中的命令历史记录。",-1),Z_=s("p",null,[s("strong",null,"只读挂载")],-1),sD=s("p",null,"Docker 挂载数据卷的默认权限是读写，用户也可以通过 :ro 指定为只读。",-1),nD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name nginx-volume-test \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-v /data/docker-volume-nginx:/data:ro nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lD=s("h3",{id:"数据卷生产实践",tabindex:"-1"},[n("数据卷生产实践 "),s("a",{class:"header-anchor",href:"#数据卷生产实践","aria-hidden":"true"},"#")],-1),eD=s("p",null,"那么这种将本地的目录挂载到容器中的方法，在生产中有哪些应用场景呢？",-1),oD=s("p",null,[s("strong",null,"在开发环境中")],-1),aD=s("p",null,"在基于Docker的开发环境中，例如我们将本地的/home/code目录挂载到容器中的/data/webroot，然后容器的应用的webroot同样设置为/data/webroot，那么容器启动后，我们就可以自由的本地进行代码的编写和调试，对于解释性的语言，就比较方便了。如果你的Docker运行在虚拟机中，可以先将本地例如D:code目录通过虚拟机软件共享到虚拟机里，目前VirtualBox和Vmware workstation都支持目录映射。在Vmware中需要在虚拟机中安装Vmware Tools。",-1),tD=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/03822b520894cafdde1dbbc64b8b99e6.png",alt:"img"})],-1),cD=s("p",null,[s("strong",null,"在生产环境中")],-1),iD=s("p",null,"如果我们的容器里面运行的程序需要写一些持久化的数据到硬盘，或者共享宿主机的一些文件或者目录，显然这种数据卷的挂载非常的方便。",-1),rD=s("p",null,"不过数据卷最大的缺陷应该是不灵活了，因为Docker的理念是Build、Ship、Run。因为有这个挂载目录的依赖，那么这个Docker镜像在新的宿主机上运行就需要考虑挂载的目录是否存在等问题。",-1),pD=s("h3",{id:"数据卷容器",tabindex:"-1"},[n("数据卷容器 "),s("a",{class:"header-anchor",href:"#数据卷容器","aria-hidden":"true"},"#")],-1),dD=s("p",null,"Docker还支持让一个容器访问另一个容器的Volume，我们可以使用 -volumes-from 参数挂载其它容器的卷。",-1),AD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name nginx-volume-test4 \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--volumes-from nginx-volume-test1 nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"7d650d332e3d9bf4086be35ae5a04b618f9d8e1df03fa2fef5f5766318a4ca12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ./docker_in.sh nginx-volume-test4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@7d650d332e3d:~# ls /data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mount-test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),CD=s("p",null,"注意：不管数据卷容器nginx-volume-test1是否运行，nginx-volume-test4都可以访问到nginx-volume-test1里面挂载的数据卷。所以说数据卷容器，其实就是一个普通的容器，只不过是专门用来提供数据卷供其它容器挂载使用的。",-1),uD=s("h3",{id:"数据卷容器生产实践",tabindex:"-1"},[n("数据卷容器生产实践 "),s("a",{class:"header-anchor",href:"#数据卷容器生产实践","aria-hidden":"true"},"#")],-1),yD=s("p",null,"在生产中使用数据卷容器的方案有很多，一个非常典型的就是在进行日志收集的时候。我们可以在一台服务器上启动一个logstash或者filebeat的容器log-volume，然后其它所有应用容器启动都使用--volumes-from log-volume，将日志写入对应路径，然后使用统一收集，这样就避免在所有需要进行日志收集的容器中去部署logstash。相对于直接挂载本地目录也更加的方便。",-1),hD=s("h1",{id:"docker镜像生产构建",tabindex:"-1"},[n("Docker镜像生产构建 "),s("a",{class:"header-anchor",href:"#docker镜像生产构建","aria-hidden":"true"},"#")],-1),_D=s("p",null,"我们已经了解了Docker的基本概念和管理，下面就开始着手创建自己的第一个Docker镜像，这里我们选用最早pull下来的centos作为基础镜像，然后在上面部署Nginx来做案例讲解。",-1),DD=s("h2",{id:"手动构建镜像",tabindex:"-1"},[n("手动构建镜像 "),s("a",{class:"header-anchor",href:"#手动构建镜像","aria-hidden":"true"},"#")],-1),gD=s("p",null,"手动构建镜像，简单的说就是我们基于一个基础镜像启动一个容器，然后对这个容器进行更改，更改完毕后，进行提交。",-1),mD=s("h3",{id:"启动容器-1",tabindex:"-1"},[n("启动容器 "),s("a",{class:"header-anchor",href:"#启动容器-1","aria-hidden":"true"},"#")],-1),bD=s("p",null,"运行一个CentOS容器，命名为mynginx",-1),kD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker pull centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run --name mynginx -it centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),vD=s("p",null,"在容器里面安装Nginx",-1),xD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2e110e00eef4 /]# rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2e110e00eef4 /]# yum install -y nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fD=s("p",null,"想要Docker容器保持活跃的状态，需要其中运行的进程不能中断，默认情况下，Nginx会以守护进程的方式启动，这会导致容器只是短暂运行，在守护进程被fork启动后，发起守护进程的原始进程就会退出，这时容器就会停止运行了。所以我们需要将Nginx放在前端运行。",-1),SD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2e110e00eef4 /]# vi /etc/nginx/nginx.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#在配置文件最上面增加下面配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"daemon off;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@2e110e00eef4 /]# exit")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ED=s("h3",{id:"提交镜像",tabindex:"-1"},[n("提交镜像 "),s("a",{class:"header-anchor",href:"#提交镜像","aria-hidden":"true"},"#")],-1),PD=s("p",null,[s("strong",null,"获取容器ID")],-1),ND=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -a | grep mynginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'2e110e00eef4 centos "/bin/bash" 8 minutes ago Exited (0) 2 minutes ago mynginx')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),RD=s("p",null,[s("strong",null,"提交修改后的容器为镜像")],-1),TD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# docker commit -m "My Nginx" 2e110e00eef4 test/mynginx:v1')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sha256:cfd25da2c9c5dd2bcce9e5d2ef4e316b46b5f03617176b97b60a34f2958a6d70")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ID=s("ul",null,[s("li",null,"-m：指定提交的说明信息，类似SVN和Git。"),s("li",null,"之后是用来创建镜像的容器的 ID；"),s("li",null,"最后指定目标镜像的仓库名和标签信息。")],-1),OD=s("p",null,[s("strong",null,"查看镜像")],-1),MD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker images")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"REPOSITORY TAG IMAGE ID CREATED SIZE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"test/mynginx v1 cfd25da2c9c5 49 seconds ago 373MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx latest f09fe80eb0e7 2 weeks ago 109MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"centos latest 1e1148e4cc2c 2 months ago 202MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wD=s("p",null,[s("strong",null,"从我们创建的镜像运行一个容器")],-1),KD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 91:80 test/mynginx:v1 nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),LD=s("p",null,"现在你的手动构建的第一个镜像就完成了。你可以用同样的方式安装任意你需要的软件到镜像里面，然后使用镜像来启动一个容器，只要记住容器启动必须要有一个不会退出的进程在执行即可。",-1),UD=s("h2",{id:"dockerfile构建",tabindex:"-1"},[n("Dockerfile构建 "),s("a",{class:"header-anchor",href:"#dockerfile构建","aria-hidden":"true"},"#")],-1),jD=s("p",null,"Dockerfile是为快速构建docker image而设计的，当你使用docker build命令的时候，docker 会读取当前目录下的命名为Dockerfile(首字母大写)的纯文本文件并执行里面的指令构建出一个docker image。这比SaltStack的配置管理要简单的多，不过还是要掌握一些简单的指令。",-1),GD=s("p",null,"Dockerfile 由一行行命令语句组成，并且支持以#开头的注释行。指令是不区分大小写的，但是通常我们都大写。",-1),HD=s("p",null,"下面我们通过构建一个Nginx的镜像来学习Dockerfile的编写。",-1),FD=s("h3",{id:"nginx-dockerfile实战",tabindex:"-1"},[n("Nginx Dockerfile实战 "),s("a",{class:"header-anchor",href:"#nginx-dockerfile实战","aria-hidden":"true"},"#")],-1),VD=s("p",null,[s("strong",null,"注意：第一个指令必须是FROM。")],-1),BD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir -p /opt/dockerfile/mynginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/mynginx/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@test-node1 nginx]# vim Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# This docker file uses the centos image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# VERSION 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Author: Jason Zhao")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FROM centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Maintainer")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MAINTAINER shundong.zhao zhaoshundong@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Commands to update the image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN yum install -y nginx --enablerepo=epel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ADD index.html /usr/share/nginx/html/index.html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'RUN echo "daemon off;" >> /etc/nginx/nginx.conf')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPOSE 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CMD ["nginx"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),qD=s("p",null,"为了大家更容易学习，我这里总结一个命令的介绍：",-1),YD=s("p",null,"一般的，我们将Dockerfile 分为四部分：",-1),zD=s("ul",null,[s("li",null,"基础镜像信息"),s("li",null,"维护者信息"),s("li",null,"镜像操作指令"),s("li",null,"容器启动时执行指令")],-1),$D=s("h3",{id:"常用指令的介绍",tabindex:"-1"},[n("常用指令的介绍 "),s("a",{class:"header-anchor",href:"#常用指令的介绍","aria-hidden":"true"},"#")],-1),XD=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/74da151d98647093a4d1ade4f222fbe7.png",alt:"img"})],-1),JD=s("p",null,[s("strong",null,"构建Dockerfile")],-1),WD=s("p",null,"注意：ADD index.html就是放一个文件进去，这个文件需要大家自己准备一下。例如：",-1),QD=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 mynginx]# echo "nginx in docker test" > index.html')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ZD=s("p",null,"使用dokcer build命令构建镜像，最后的.表示当前路径",-1),sg=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 mynginx]# docker build -t mynginx:v2 .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ng=s("p",null,"构建完毕之后，我们就可以Run起来。",-1),lg=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d -p 92:80 mynginx:v2 nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),eg=s("p",null,"测试访问",-1),og=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 mynginx]# curl http://192.168.56.11:92")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx in docker test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ag=s("p",null,"现在你应该发现编写Dockerfile有多么的简单了吧，不过我们还是要系统的再来学习一遍。",-1),tg=s("h3",{id:"dockerfile命令详解",tabindex:"-1"},[n("Dockerfile命令详解 "),s("a",{class:"header-anchor",href:"#dockerfile命令详解","aria-hidden":"true"},"#")],-1),cg=s("p",null,"下面我们来分别介绍下上面使用到的命令：",-1),ig=s("p",null,[s("strong",null,"FROM")],-1),rg=s("p",null,[n("格式：FROM "),s("img",{src:"",alt:"img"}),n("或FROM "),s("img",{src:"",alt:"img"}),n(":。 解释：FROM必须是Dockerfile里的第一条指令（注视除外），后面跟有效的镜像名（如果该镜像你的本地仓库没有则会从远程仓库Pull取）。然后后面的其它指令FROM的镜像中执行。")],-1),pg=s("p",null,[s("strong",null,"MAINTAINER")],-1),dg=s("p",null,"格式：MAINTAINER 解释：指定维护者的信息。",-1),Ag=s("p",null,[s("strong",null,"RUN")],-1),Cg=s("p",null,'格式：RUN 或 RUN ["executable", "param1", "param2"]。 解释：运行命令，命令较长使可以使用来换行。推荐使用上面数组的格式',-1),ug=s("p",null,[s("strong",null,"CMD")],-1),yg=s("p",null,"格式：",-1),hg=s("p",null,'CMD ["executable","param1","param2"] 使用 exec 执行，推荐方式； CMD command param1 param2 在 /bin/sh 中执行，提供给需要交互的应用； CMD ["param1","param2"] 提供给ENTRYPOINT的默认参数；',-1),_g=s("p",null,"解释：",-1),Dg=s("p",null,"CMD指定容器启动是执行的命令，每个Dockerfile只能有一条CMD命令，如果指定了多条，只有最后一条会被执行。如果你在启动容器的时候也指定的命令，那么会覆盖Dockerfile构建的镜像里面的CMD命令。",-1),gg=s("p",null,[s("strong",null,"ENTRYPOINT")],-1),mg=s("p",null,"格式：",-1),bg=s("p",null,'ENTRYPOINT ["executable", "param1", "param2"] ENTRYPOINT command param1 param2（shell中执行）。 解释：和CMD类似都是配置容器启动后执行的命令，并且不可被 docker run提供的参数覆盖。',-1),kg=s("p",null,"每个 Dockerfile 中只能有一个ENTRYPOINT，当指定多个时，只有最后一个起效。ENTRYPOINT没有CMD的可替换特性，也就是你启动容器的时候增加运行的命令不会覆盖ENTRYPOINT指定的命令。",-1),vg=s("p",null,"所以生产实践中我们可以同时使用ENTRYPOINT和CMD，例如：",-1),xg=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ENTRYPOINT ["/usr/bin/rethinkdb"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CMD ["--help"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),fg=s("p",null,[s("strong",null,"USER")],-1),Sg=s("p",null,"格式：USER daemon 解释：指定运行容器时的用户名和UID，后续的RUN指令也会使用这里指定的用户。",-1),Eg=s("p",null,[s("strong",null,"EXPOSE")],-1),Pg=s("p",null,"格式：EXPOSE [...] 解释：设置Docker容器内部暴露的端口号，如果需要外部访问，还需要启动容器时增加-p或者-P参数进行分配。",-1),Ng=s("p",null,[s("strong",null,"ENV")],-1),Rg=s("p",null,"格式：ENV ENV = ... 解释：设置环境变量，可以在RUN之前使用，然后RUN命令时调用，容器启动时这些环境变量都会被指定",-1),Tg=s("p",null,[s("strong",null,"ADD")],-1),Ig=s("p",null,'格式： ADD ... ADD ["",... ""] 解释：将指定的复制到容器文件系统中的',-1),Og=s("p",null,"所有拷贝到container中的文件和文件夹权限为0755,uid和gid为0 如果文件是可识别的压缩格式，则docker会帮忙解压缩",-1),Mg=s("p",null,[s("strong",null,"VOLUME")],-1),wg=s("p",null,'格式：VOLUME ["/data"] 解释：可以将本地文件夹或者其他container的文件夹挂载到container中。',-1),Kg=s("p",null,[s("strong",null,"WORKDIR")],-1),Lg=s("p",null,"格式：WORKDIR /path/to/workdir 解释：切换目录，为后续的 RUN、CMD、ENTRYPOINT 指令配置工作目录。可以多次切换(相当于cd命令)，也可以使用多个 WORKDIR指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。 例如：",-1),Ug=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WORKDIR /a")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WORKDIR b")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WORKDIR c")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN pwd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jg=s("p",null,"则最终路径为 /a/b/c。",-1),Gg=s("p",null,[s("strong",null,"ONBUILD")],-1),Hg=s("p",null,"ONBUILD 指定的命令在构建镜像时并不执行，而是在它的子镜像中执行",-1),Fg=s("p",null,[s("strong",null,"ARG")],-1),Vg=s("p",null,"格式：ARG [=] 解释：ARG指定了一个变量在docker build的时候使用，可以使用--build-arg =来指定参数的值，不过如果构建的时候不指定就会报错。",-1),Bg=s("h2",{id:"docker镜像生产规划实践",tabindex:"-1"},[n("Docker镜像生产规划实践 "),s("a",{class:"header-anchor",href:"#docker镜像生产规划实践","aria-hidden":"true"},"#")],-1),qg=s("p",null,"现在我们学会了如何使用Dockerfile来构建镜像，没错，真正生产环境我们也是大规模的使用Dockerfile。那么我们应该如何入手呢？",-1),Yg=s("p",null,[n("首先我们需要参考一些别人编写的Dockerfile，学习一些规范和技巧，可以来这里找找答案："),s("a",{href:"https://github.com/dockerfile%E3%80%82",target:"_blank",rel:"noreferrer"},"https://github.com/dockerfile。")],-1),zg=s("p",null,"可以参考网友编写的Dockerfile的技巧和方法，那么真正的生产环境，肯定要根据自己公司或者团队的技术栈来构建不同的Docker镜像，根据Docker镜像的分层观念，我们可以在这个基础上对我们的镜像进行分层。",-1),$g=s("ul",null,[s("li",null,"系统层"),s("li",null,"运行环境层"),s("li",null,"应用服务层")],-1),Xg=s("p",null,"案例如下：",-1),Jg=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /opt/dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 dockerfile]# mkdir system runtime app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 dockerfile]# tree")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},".")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── app")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── runtime")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wg=s("h2",{id:"基础系统镜像",tabindex:"-1"},[n("基础系统镜像 "),s("a",{class:"header-anchor",href:"#基础系统镜像","aria-hidden":"true"},"#")],-1),Qg=s("h3",{id:"centos系统镜像",tabindex:"-1"},[n("CentOS系统镜像 "),s("a",{class:"header-anchor",href:"#centos系统镜像","aria-hidden":"true"},"#")],-1),Zg=s("p",null,"默认的官方CentOS镜像有很多常用的命令并不提供，可以根据企业需求进行定制。需要注意的是使用yum安装完毕后，记得执行yum clean all。",-1),sm=s("p",null,"因为yum会把下载的软件包和header存储在cache中，而不会自动删除。如果我们觉得它们占用了磁盘空间，可以使用yum clean all指令进行清除，可以减少镜像的大小。",-1),nm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/system/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# mkdir centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lm=s("p",null,[s("strong",null,"1.编写Dockerfile")],-1),em=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# vim centos/Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Docker for CentOS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**FROM** centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Who")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**MAINTAINER** Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base pkg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**RUN** rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**RUN** yum install -y wget mysql-devel supervisor git redis tree net-tools sudo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"psmisc && yum clean all")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),om=s("p",null,[s("strong",null,"2.构建镜像")],-1),am=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker build -t unixhot/centos ./centos/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tm=s("p",null,[s("strong",null,"3.查看镜像")],-1),cm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker images | grep unixhot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos latest 4edcb790dacf 24 seconds ago 303 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),im=s("p",null,[s("strong",null,"4.使用镜像创建容器")],-1),rm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker run --name mycentos -it unixhot/centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@b137b1cdd3ac /]# ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 1 0.3 0.0 11776 1872 ? Ss 03:56 0:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 15 0.0 0.0 47424 1668 ? R+ 03:56 0:00 ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pm=s("h3",{id:"centos系统镜像包含ssh",tabindex:"-1"},[n("CentOS系统镜像包含SSH "),s("a",{class:"header-anchor",href:"#centos系统镜像包含ssh","aria-hidden":"true"},"#")],-1),dm=s("p",null,"在很多时候如果你需要在CentOS里面启动sshd服务，那么就需要安装openssh-server并且重新生成SSH的主机密钥。同时如果，你需要给镜像设置一个密码，可以使用chpasswd非交互的方式来进行。",-1),Am=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/system/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# mkdir centos-ssh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Cm=s("p",null,[s("strong",null,"1.编写Dockerfile")],-1),um=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# vim centos-ssh/Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Docker for CentOS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FROM centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Who")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MAINTAINER Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#EPEL")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base pkg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN yum install -y openssh-clients openssl-devel openssh-server wget mysql-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"supervisor git redis tree net-tools sudo psmisc && yum clean all")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# For SSHD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ssh-keygen -A -t dsa -f /etc/ssh/ssh_host_dsa_key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Set root password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'RUN echo "root:unixhot.com" | chpasswd')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ym=s("p",null,[s("strong",null,"2.构建镜像")],-1),hm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker build -t unixhot/centos-ssh:v1 ./centos-ssh/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Sending build context to Docker daemon 2.048 kB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Step 1 : FROM centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---> 980e0e4c79ec")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Step 2 : MAINTAINER Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---> **Using cache**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---> d08da8648d91")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Step 3 : RUN rpm -ivh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---> **Using cache**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---> ad9a05bcfb78")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…（省略后面输出）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_m=s("blockquote",null,[s("p",null,"这里有一个小技巧，为了加快构建的速度，注意到上面前三步的输出Using cache，因为Docker镜像的分层原理，已经构建过的layer不会重复构建。")],-1),Dm=s("p",null,[s("strong",null,"3.查看镜像")],-1),gm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker images | grep unixhot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh v1 ff1ab7d7e7f4 19 seconds ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos latest 4edcb790dacf 2 hours ago 303 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mm=s("p",null,[s("strong",null,"4.使用镜像创建容器")],-1),bm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker run -d --name centos-ssh-demo -p 8022:22")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh:v1 /usr/sbin/sshd -D")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"5f5bbe98a17c620f91a7d3e68a605a4bcbd48621f32aaa095245e59a8691e229")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'5f5bbe98a17c unixhot/centos-ssh:v1 "/usr/sbin/sshd -D" 5 seconds ago Up 2')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"seconds 0.0.0.0:8022->22/tcp centos-ssh-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),km=s("p",null,[s("strong",null,"5.使用ssh连接容器")],-1),vm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ssh -p 8022 root@192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@192.168.56.11's password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@5f5bbe98a17c ~]# ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 1 0.0 0.0 82560 3600 ? Ss 05:46 0:00 /usr/sbin/sshd -D")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 7 0.0 0.0 11636 1116 ? Ss 05:47 0:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 13 0.0 0.0 11636 1116 ? Ss 05:48 0:00 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 63 0.7 0.0 139272 5424 ? Ss 05:51 0:00 sshd: root@pts/0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 65 0.5 0.0 13376 1988 pts/0 Ss 05:51 0:00 -bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 78 0.0 0.0 49024 1808 pts/0 R+ 05:51 0:00 ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xm=s("p",null,[n("Good Job，你现在可以通过ssh连接到自己创建的Docker容器上了。但是有没有发现一个问题，Docker只允许在前台运行一个进程，那已经运行了sshd。那么如何运行别的进程呢。显然我们做一个能ssh的镜像，目的就是为了在上面运行各种服务。怎么办呢？有很多解决方案。"),s("a",{href:"http://xn--start-fg1hyjn9fbll9onm0app1b175dr5f.sh",target:"_blank",rel:"noreferrer"},"例如你编写一个脚本start.sh"),n("。可以在里面写多个服务的启动命令，只要start.sh不执行完毕，即可。当然真正生产推荐的是使用Supervisor。")],-1),fm=s("h3",{id:"使用supervisor管理进程",tabindex:"-1"},[n("使用Supervisor管理进程 "),s("a",{class:"header-anchor",href:"#使用supervisor管理进程","aria-hidden":"true"},"#")],-1),Sm=s("p",null,[n("Supervisor ("),s("a",{href:"http://supervisord.org/",target:"_blank",rel:"noreferrer"},"http://supervisord.org"),n(") 是一个用 Python 写的进程管理工具，可以很方便的用来启动、重启、关闭进程（不仅仅是 Python 进程）。除了对单个进程的控制，还可以同时启动、关闭多个进程。")],-1),Em=s("p",null,"Supervisor 可以运行在 Linux、Mac OS X 上。如前所述，supervisor 是 Python 编写的，所以安装起来也很方便，可以直接用 pip :",-1),Pm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pip install supervisor")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nm=s("p",null,"现在让我们重新创建一个新的不启动ssh的容器，来实验下supervisor的安装和相关配置。以便于，我们编写Dockerfile。",-1),Rm=s("p",null,[s("strong",null,"1.启动测试supervisor的docker容器")],-1),Tm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 system]# docker run --rm -it unixhot/centos-ssh:v1 /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 /]# ls -l /etc/supervisord*")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 7953 Aug 20 2015 /etc/supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/etc/supervisord.d:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Im=s("p",null,"注意，在上一小节的镜像构建中，我们已经使用yum安装了supervisord。supervisor的配置文件为/etc/supervisord.conf。",-1),Om=s("p",null,[s("strong",null,"2.Supervisor配置")],-1),Mm=s("p",null,"Supervisor 相当强大，提供了很丰富的功能，不过我们可能只需要用到其中一小部分。安装完成之后，可以编写配置文件，来满足自己的需求。为了方便，我们把配置分成两部分：supervisord（supervisor 是一个 C/S 模型的程序，这是 server 端，对应的有 client 端：supervisorctl）和应用程序（即我们要管理的程序）。",-1),wm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 /]# vi /etc/supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#下面并没有列出完整的supervisord.conf的配置，默认注释掉的内容，请自行查看。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**[unix_http_server]**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# file=/var/run/supervisor/supervisor.sock #UNIX socket 文件，supervisorctl")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"会使用")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**[supervisord]**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"logfile=/var/log/supervisor/supervisord.log #主要日志文件，默认位置是")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"$CWD/supervisord.log")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"logfile_maxbytes=50MB #日志文件大小，超出会 rotate，默认 50MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"logfile_backups=10 #日志文件保留备份数量默认 10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"loglevel=info #日志级别，默认 info，其它: debug,warn,trace")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pidfile=/var/run/supervisord.pid #pid文件位置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**nodaemon=true #注意需要修改的为此处，将supervisor放在前台运行。**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"minfds=1024 #可以打开的文件描述符的最小值，默认 1024")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"minprocs=200 #可以打开的进程数的最小值，默认 200")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**[supervisorctl]**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#通过 UNIX socket 连接 supervisord，路径与 unix_http_server 部分的 file 一致")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"serverurl=unix:///var/run/supervisor/supervisor.sock ; use a unix:// URL for a")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unix socket")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**[include]**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#包含supervisord.d目录下*.ini文件，也就是说，我们可以将需要启动应用程序的配置放在这个目录下，这就是运维标准化。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"files = supervisord.d/*.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Km=s("p",null,[s("strong",null,"3. program 配置")],-1),Lm=s("p",null,"supervisor主配置文件的变更只需要修改nodaemon=true，可以看到关于程序的配置在主配置文件里面都是注释掉的：",-1),Um=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";[program:theprogramname]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";command=/bin/cat ; the program (relative uses PATH, can take args)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";process_name=%(program_name)s ; process_name expr (default %(program_name)s)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";numprocs=1 ; number of processes copies to start (def 1)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";directory=/tmp ; directory to cwd to before exec (def no cwd)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";umask=022 ; umask for process (default None)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";priority=999 ; the relative start priority (default 999)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";autostart=true ; start at supervisord start (default: true)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},";autorestart=true ; retstart at unexpected quit (default: true)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"（省略部分输出）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),jm=s("p",null,"我们现在要做的事情，就是编写一个sshd的程序管理配置，放置到/etc/supervisord.d目录下，注意文件后缀是.ini，你可以复制上面注释掉的内容进行修改：",-1),Gm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 /]# vi /etc/supervisord.d/sshd.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[program:sshd]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"command=/usr/sbin/sshd -D")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"process_name=%(program_name)s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"autostart=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stdout_logfile_maxbytes=100MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stdout_logfile_backups=10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Hm=s("p",null,[s("strong",null,"4.启动supervisord")],-1),Fm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# /usr/bin/supervisord -c /etc/supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# netstat -ntlp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Active Internet connections (only servers)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Proto Recv-Q Send-Q Local Address Foreign Address State PID/Program name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN 31/sshd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::22 :::* LISTEN 31/sshd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vm=s("p",null,"可以看到sshd已经启动了。是由supervisor进行启动的。",-1),Bm=s("p",null,[s("strong",null,"5. 使用 supervisorctl")],-1),qm=s("p",null,"Supervisorctl 是 supervisord 的一个命令行客户端工具，可以用来管理supervisord启动的进程。",-1),Ym=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# supervisorctl status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sshd RUNNING pid 31, uptime 0:02:35")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zm=s("p",null,[s("strong",null,"停止与启动sshd")],-1),$m=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# supervisorctl stop sshd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sshd: stopped")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# supervisorctl status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sshd STOPPED Oct 14 06:45 AM")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# supervisorctl start sshd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sshd: started")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# supervisorctl status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sshd RUNNING pid 42, uptime 0:00:03")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xm=s("p",null,[s("strong",null,"6..将supervisord.conf配置文件scp到宿主机目录下，和Dockerfile同目录")],-1),Jm=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 /]# scp /etc/supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11:/opt/dockerfile/system/centos-ssh/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@98aced104917 ~]# scp /etc/supervisord.d/sshd.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11:/opt/dockerfile/system/centos-ssh/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wm=s("p",null,"好的，可以退出容器，这个容器的生命周期结束。",-1),Qm=s("h3",{id:"标准化centos系统镜像",tabindex:"-1"},[n("标准化CentOS系统镜像 "),s("a",{class:"header-anchor",href:"#标准化centos系统镜像","aria-hidden":"true"},"#")],-1),Zm=s("p",null,"现在我们来构建一个全新的包含ssh的centos系统镜像。同时如果你不需要ssh。你依然可以使用supervisor连进行进程管理。",-1),sb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/system/centos-ssh/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 centos-ssh]# ls -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 16")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 554 Oct 14 01:40 Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 142 Oct 14 02:53 sshd.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 7953 Oct 14 02:30 supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nb=s("p",null,[s("strong",null,"1.重新编写Dockerfile")],-1),lb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 centos-ssh]# vim Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Docker for CentOS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FROM centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Who")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MAINTAINER Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#EPEL")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN rpm -ivh http://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base pkg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN yum install -y openssh-clients openssl-devel openssh-server wget mysql-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"supervisor git redis tree net-tools sudo psmisc && yum clean all")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# For SSHD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ssh-keygen -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ssh-keygen -A -t dsa -f /etc/ssh/ssh_host_dsa_key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Set root password")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'RUN echo "root:unixhot.com" | chpasswd')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Supervisord config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ADD supervisord.conf /etc/supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ADD sshd.ini /etc/supervisord.d/sshd.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Outside Port")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPOSE 22")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#supervisord start")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),eb=s("p",null,[s("strong",null,"2.构建镜像")],-1),ob=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 centos-ssh]# docker build -t unixhot/centos-ssh:latest .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ab=s("p",null,[s("strong",null,"3.查看镜像")],-1),tb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 centos-ssh]# docker images | grep unixhot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh latest 0d4b39f9100e 31 seconds ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh v1 ff1ab7d7e7f4 About an hour ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos latest 4edcb790dacf 3 hours ago 303 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),cb=s("p",null,[s("strong",null,"4.构建容器")],-1),ib=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name centos-ssh-supervisor -p 2222:22")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"9ebf53b3cacd093c11a9b5773c5fc62875626061f3f3fe0b5380013c78f2f15b")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'9ebf53b3cacd unixhot/centos-ssh "/usr/bin/supervisord" 6 seconds ago Up 3')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"seconds 0.0.0.0:2222->22/tcp centos-ssh-supervisor")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rb=s("p",null,[s("strong",null,"5.使用ssh连接容器")],-1),pb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ssh root@192.168.56.11 -p 2222")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root@192.168.56.11's password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@9ebf53b3cacd ~]# ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 1 0.3 0.0 117248 14668 ? Ss 07:25 0:00 /usr/bin/python /usr/bin/supervisord")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-c /etc/supervisord.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 9 0.0 0.0 82560 3608 ? S 07:25 0:00 /usr/sbin/sshd -D")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 25 1.2 0.0 139272 5428 ? Ss 07:26 0:00 sshd: root@pts/0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 27 0.0 0.0 13376 1984 pts/0 Ss 07:27 0:00 -bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"root 40 0.0 0.0 49024 1808 pts/0 R+ 07:27 0:00 ps aux")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),db=s("p",null,[s("strong",null,"操作系统标准化约定：")],-1),Ab=s("p",null,"统一使用supervisor进行进程的管理",-1),Cb=s("p",null,"所有Docker容器，使用centos-ssh镜像时提供supervisor的ini配置文件。",-1),ub=s("h2",{id:"运行环境镜像",tabindex:"-1"},[n("运行环境镜像 "),s("a",{class:"header-anchor",href:"#运行环境镜像","aria-hidden":"true"},"#")],-1),yb=s("p",null,"现在有了系统镜像，当然文中的知识案例，具体的情况可以根据你所在企业的具体情况进行相关的配置，现在我们可以在系统镜像的基础上来构建运行环境。",-1),hb=s("h3",{id:"java-运行环境",tabindex:"-1"},[n("Java 运行环境 "),s("a",{class:"header-anchor",href:"#java-运行环境","aria-hidden":"true"},"#")],-1),_b=s("p",null,"Java环境在生产中非常常见，例如会启动一个单一的Java小进程处理队列里面的内容，只需要有JDK即可。那首先我们先构建一个只包含JDK的运行环境：",-1),Db=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/runtime/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 runtime]# mkdir java")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),gb=s("p",null,"Java运行环境要基于centos-ssh的镜像来操作，所以先运行一个临时容器来构建Java运行环境，然后把操作步骤转换为Dockerfile。",-1),mb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run --rm -it unixhot/centos-ssh /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@ec2696c0f9f4 /]# yum install -y java-1.8.0-openjdk")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"java-1.8.0-openjdk-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bb=s("p",null,"使用yum安装的openjdk，默认可以不设置JAVA_HOME，即可执行相关的java程序。",-1),kb=s("p",null,[s("strong",null,"1.编写Dockerfile")],-1),vb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 runtime]# vim java/Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Docker for CentOS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FROM unixhot/centos-ssh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Who")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MAINTAINER Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base pkg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel && yum clean all")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# JAVA_HOME")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Outside Port")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPOSE 22")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#supervisord start")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xb=s("p",null,[s("strong",null,"2.构建镜像")],-1),fb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 runtime]# docker build -t unixhot/runtime-java ./java/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sb=s("p",null,[s("strong",null,"3.查看镜像")],-1),Eb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker images | grep unixhot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/runtime-java latest ff3a2bb0b2a9 2 minutes ago 505.1 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh latest 02d375a33cd1 38 minutes ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh v1 ff1ab7d7e7f4 2 hours ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos latest 4edcb790dacf 4 hours ago 303 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pb=s("p",null,"当然十分可以使用，需要大家去运行一个小程序进行测试，这里就不演示了。",-1),Nb=s("h3",{id:"tomcat运行环境",tabindex:"-1"},[n("Tomcat运行环境 "),s("a",{class:"header-anchor",href:"#tomcat运行环境","aria-hidden":"true"},"#")],-1),Rb=s("p",null,[s("strong",null,"相对于单一使用Java命令启动Java服务，Tomcat")],-1),Tb=s("p",null,[s("strong",null,"1.启动centos-ssh镜像的实例")],-1),Ib=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run --rm -it unixhot/centos-ssh /bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@80f529b965ef /]# yum install -y java-1.8.0-openjdk")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"java-1.8.0-openjdk-devel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ob=s("p",null,[s("strong",null,"为什么不直接使用Java的运行环境构建Tomcat？")],-1),Mb=s("p",null,"首先，确实可以直接使用Java的运行环境来进行Tomcat的构建，但是会破坏我们系统层、运行环境层、业务层的架构，也就是将依赖关系复杂话了，这要根据企业自身情况来做。我先说说我的理由：",-1),wb=s("p",null,"如果Tomcat使用的Java版本要升级到JDK 1.8版本，而Java运行环境的版本是1.7，不能升级，因为有很多服务就是在JDK 1.7的环境下开发的，未进行迁移。这个时候，如果Tomcat是基于Java 1.7的运行环境构建的，就出现依赖关系了。所以，仅仅是个人的建议：让问题简单化！",-1),Kb=s("p",null,[s("strong",null,"2.安装部署Tomcat 8")],-1),Lb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@80f529b965ef /]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@80f529b965ef src]# wget http://mirrors.cnnic.cn/apache/tomcat/tomcat-8/v8.5.6/bin/apache-tomcat-8.5.6.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@80f529b965ef src]# tar zxf apache-tomcat-8.5.6.tar")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@80f529b965ef src]# mv apache-tomcat-8.5.6 /usr/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@80f529b965ef src]# ln -s /usr/local/apache-tomcat-8.5.6/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ub=s("p",null,[s("strong",null,"3.使用supervisor启动tomcat")],-1),jb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@897cc10b8adf ~]# cd /etc/supervisord.d/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@897cc10b8adf supervisord.d]# vi tomcat.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[program:tomcat]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"command=/usr/local/tomcat/bin/catalina.sh run")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"process_name=%(program_name)s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"autostart=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stdout_logfile_maxbytes=100MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stdout_logfile_backups=10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Gb=s("p",null,[s("strong",null,"更新supervisor并查看tomcat状态")],-1),Hb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@897cc10b8adf supervisord.d]# supervisorctl update")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tomcat: stopped")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tomcat: updated process group")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@897cc10b8adf supervisord.d]# supervisorctl status")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sshd RUNNING pid 408, uptime 0:06:00")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tomcat RUNNING pid 704, uptime 0:00:03")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Fb=s("p",null,[s("strong",null,"4.准备Dockerfile的构建环境")],-1),Vb=s("p",null,"现在我们开始编写Dockerfile，在编写之前，我们先决定一件事情，apache-tomcat的包，我们应该是像实验中使用wget进行下载并解压呢，还是应该提前将包放在宿主机，构建的时候使用Dockerfile ADD进行呢。",-1),Bb=s("p",null,"我建议选择后者，因为实际的工作中，我们通常要对Tomcat进行很多定制化的配置，例如进行安全规范的调整等。",-1),qb=s("p",null,"这里我们能演示的就是直接下载，可以想象一下，这个已经是你修改过的软件包。",-1),Yb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/runtime/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 runtime]# mkdir tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 runtime]# cd tomcat/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 tomcat]# wget http://mirrors.cnnic.cn/apache/tomcat/tomcat-8/v8.5.6/bin/apache-tomcat-8.5.6.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zb=s("p",null,[s("strong",null,"5.编写Dockerfile")],-1),$b=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Docker for CentOS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FROM unixhot/centos-ssh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Who")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MAINTAINER Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base pkg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel && yum clean all")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# JAVA_HOME")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ADD apache-tomcat-8.5.6.tar.gz /usr/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RUN ln -s /usr/local/apache-tomcat-8.5.6 /usr/local/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ADD tomcat.ini /etc/supervisord.d/tomcat.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ENV TOMCAT_HOME /usr/local/tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Outside Port")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPOSE 22 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#supervisord start")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xb=s("p",null,[s("strong",null,"6.构建tomcat镜像")],-1),Jb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 tomcat]# ls -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 9096")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 9304958 Oct 6 16:39 apache-tomcat-8.5.6.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 546 Oct 14 05:51 Dockerfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 165 Oct 14 06:33 tomcat.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 tomcat]# docker build -t unixhot/runtime-tomcat .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wb=s("p",null,[s("strong",null,"7.查看镜像")],-1),Qb=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 tomcat]# docker images | grep unixhot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/runtime-tomcat latest ef8372a88ad4 6 minutes ago 518.2 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/runtime-java latest ff3a2bb0b2a9 2 hours ago 505.1 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh latest 02d375a33cd1 3 hours ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh v1 ff1ab7d7e7f4 4 hours ago 304 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos latest 4edcb790dacf 6 hours ago 303 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Zb=s("p",null,[s("strong",null,"8.构建tomcat-demo容器")],-1),sk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 tomcat]# docker run -d --name tomcat-demo -p 88:8080 -p")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"89:22 unixhot/runtime-tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"8cea3ef85634210eb0cfab0f65a63b0ebd6961b5a67fc765b762785c01cd2c18")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 tomcat]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'8cea3ef85634 unixhot/runtime-tomcat "/usr/bin/supervisord" 5 seconds ago Up 2')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"seconds 0.0.0.0:89->22/tcp, 0.0.0.0:88->8080/tcp tomcat-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nk=s("p",null,[s("strong",null,"9.访问tomcat")],-1),lk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"http://192.168.56.11:88/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ek=s("h2",{id:"应用镜像",tabindex:"-1"},[n("应用镜像 "),s("a",{class:"header-anchor",href:"#应用镜像","aria-hidden":"true"},"#")],-1),ok=s("p",null,"最上层的业务镜像就是在运行环境的基础上，直接使用或者根据业务情况再次进行二次定制。例如对于PHP运行环境，默认只安装基础通用的模块，对于业务需要的时候再次进行二次构建。这里我们拿一个比较简单的Jenkins来模拟。",-1),ak=s("h3",{id:"jenkins镜像构建",tabindex:"-1"},[n("Jenkins镜像构建 "),s("a",{class:"header-anchor",href:"#jenkins镜像构建","aria-hidden":"true"},"#")],-1),tk=s("p",null,"JenkinsJenkins是基于Java开发的一种持续集成工具，它有自己的yum安装方式，但是最直接的还是直接下载war包存放到tomcat目录下。",-1),ck=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /opt/dockerfile/app/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 app]# mkdir jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 app]# cd jenkins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# wget http://mirrors.jenkins-ci.org/war/latest/jenkins.war")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ik=s("p",null,[s("strong",null,"2.编写Dockerfile")],-1),rk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Docker for CentOS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Base image")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FROM unixhot/runtime-tomcat")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#Who")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"MAINTAINER Jason.Zhao xxx@gmail.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ADD jenkins.war /usr/local/tomcat/webapps/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Outside Port")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EXPOSE 22 8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#supervisord start")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),pk=s("p",null,[s("strong",null,"3.构建jenkins镜像")],-1),dk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# docker build -t unixhot/jenkins .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ak=s("p",null,[s("strong",null,"4.查看镜像")],-1),Ck=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# docker images | grep unixhot")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/jenkins latest a7b16bc093ed 40 seconds ago 588.7 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/runtime-tomcat latest 3b596c9a7696 2 hours ago 518.8 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/runtime-java latest 476a6a2fc074 2 hours ago 505.8 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh latest d85aa8a9dfd4 3 hours ago 304.6 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos-ssh v1 3309208ed679 4 hours ago 300.9 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/centos latest 83f0491a30e1 4 hours ago 282.3 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),uk=s("p",null,[s("strong",null,"5.创建jenkins-demo容器")],-1),yk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# docker run -d --name jenkins-demo -p 91:22 -p")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"92:8080 unixhot/jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"6d88ba756befc84ef1820818994be028c12ac13825c2b439d680358d101e922e")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'6d88ba756bef unixhot/jenkins "/usr/bin/supervisord" 7 seconds ago Up 2 seconds')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.0.0.0:91->22/tcp, 0.0.0.0:92->8080/tcp jenkins-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hk=s("p",null,[s("strong",null,"6.访问jenkins并进行初始化安装")],-1),_k=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/e59722d6316d2cc9702c1989e1c9f3f1.png",alt:"img"})],-1),Dk=s("p",null,"当然如果你想构建一个启动后直接就可以使用的Jenkins，可以在安装完毕后，把刚才的容器重新提交成为镜像。",-1),gk=s("p",null,[s("strong",null,"7.安装Jenkins并提交成为jenkins-login镜像。")],-1),mk=s("p",null,"进入镜像或者安装的密码，填入密码框并继续。后面步骤省略。全部安装默认即可。注意安装插件时时间会比较长。",-1),bk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ./docker_in.sh jenkins-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@b3bbada66693 /]# cat /root/.jenkins/secrets/initialAdminPassword")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"b5257b8891464ebf890b38c00d24de71")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kk=s("p",null,[s("strong",null,"获取Container ID：")],-1),vk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'b3bbada66693 unixhot/jenkins "/usr/bin/supervisord" 9 minutes ago Up 9 minutes')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.0.0.0:91->22/tcp, 0.0.0.0:92->8080/tcp jenkins-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xk=s("p",null,[s("strong",null,"提交新的镜像")],-1),fk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# docker commit -m "jenkins login" b3bbada66693')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/jenkins-login")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker images | grep jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/jenkins-login latest c453363bb9f7 22 seconds ago 776.6 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/jenkins latest a7b16bc093ed 13 minutes ago 588.7 MB")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sk=s("p",null,[s("strong",null,"8.使用jenkins-login镜像构建容器")],-1),Ek=s("p",null,"现在可以使用的Jenkins容器诞生了，赶紧创建一个容器来进行使用吧。",-1),Pk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name jenkins-login -p 93:22 -p 94:8080")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"unixhot/jenkins-login")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"af421b4d5b076c756ab58ed8cc95c615a321f9517d30b755667d5d80d1336a63")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker ps -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'af421b4d5b07 unixhot/jenkins-login "/usr/bin/supervisord" 4 seconds ago Up 2')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"seconds 0.0.0.0:93->22/tcp, 0.0.0.0:94->8080/tcp jenkins-login")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Nk=s("p",null,[s("strong",null,"9.访问Jenkins容器，开始持续集成之路")],-1),Rk=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/04b8b149d6c7ce1e18f67796998be9b5.png",alt:"img"})],-1),Tk=s("h1",{id:"_3-docker私有仓库实践",tabindex:"-1"},[n("3 Docker私有仓库实践 "),s("a",{class:"header-anchor",href:"#_3-docker私有仓库实践","aria-hidden":"true"},"#")],-1),Ik=s("h2",{id:"docker-registry",tabindex:"-1"},[n("Docker Registry "),s("a",{class:"header-anchor",href:"#docker-registry","aria-hidden":"true"},"#")],-1),Ok=s("h3",{id:"创建docker-registry",tabindex:"-1"},[n("创建Docker Registry "),s("a",{class:"header-anchor",href:"#创建docker-registry","aria-hidden":"true"},"#")],-1),Mk=s("p",null,"在安装了 Docker 后，可以通过获取官方 registry 镜像来运行。",-1),wk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --name docker-registry -p 5000:5000 registry")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"b822d0a3e77e6a3144408119ccc2e7344f60f7404651adc025ce84561245b2d2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kk=s("h3",{id:"配置docker信任仓库",tabindex:"-1"},[n("配置Docker信任仓库 "),s("a",{class:"header-anchor",href:"#配置docker信任仓库","aria-hidden":"true"},"#")],-1),Lk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/docker/daemon.json")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"insecure-registries" : ["http://192.168.56.11:5000"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Uk=s("h3",{id:"push镜像到docker-registry",tabindex:"-1"},[n("Push镜像到Docker Registry "),s("a",{class:"header-anchor",href:"#push镜像到docker-registry","aria-hidden":"true"},"#")],-1),jk=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker tag system/centos 192.168.56.11:5000/system/centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker push 192.168.56.11:5000/system/centos")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Gk=s("h2",{id:"registry项目harbor",tabindex:"-1"},[n("Registry项目Harbor "),s("a",{class:"header-anchor",href:"#registry项目harbor","aria-hidden":"true"},"#")],-1),Hk=s("p",null,"上面我们简单的介绍了Docker Registry的使用，但是真正生产环境，我们无法有效的管理Docker Regisry。官方提供了收费版的Registry，社区有开源版本的Harbor。",-1),Fk=s("p",null,[s("strong",null,"Harbor简介")],-1),Vk=s("p",null,"Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。提升用户使用Registry构建和运行环境传输镜像的效率。Harbor支持安装在多个Registry节点的镜像资源复制，镜像全部保存在私有Registry中， 确保数据和知识产权在公司内部网络中管控。另外，Harbor也提供了高级的安全特性，诸如用户管理，访问控制和活动审计等。",-1),Bk=s("p",null,"基于角色的访问控制 - 用户与Docker镜像仓库通过“项目”进行组织管理，一个用户可以对多个镜像仓库在同一命名空间（project）里有不同的权限。",-1),qk=s("p",null,"镜像复制 - 镜像可以在多个Registry实例中复制（同步）。尤其适合于负载均衡，高可用，混合云和多云的场景。",-1),Yk=s("p",null,"图形化用户界面 - 用户可以通过浏览器来浏览，检索当前Docker镜像仓库，管理项目和命名空间。",-1),zk=s("p",null,"AD/LDAP 支持 - Harbor可以集成企业内部已有的AD/LDAP，用于鉴权认证管理。",-1),$k=s("p",null,"审计管理 - 所有针对镜像仓库的操作都可以被记录追溯，用于审计管理。",-1),Xk=s("p",null,"国际化 - 已拥有英文、中文、德文、日文和俄文的本地化版本。更多的语言将会添加进来。",-1),Jk=s("p",null,"RESTful API - RESTful API 提供给管理员对于Harbor更多的操控, 使得与其它管理软件集成变得更容易。",-1),Wk=s("p",null,"部署简单 - 提供在线和离线两种安装工具， 也可以安装到vSphere平台(OVA方式)虚拟设备。",-1),Qk=s("h3",{id:"harbor部署",tabindex:"-1"},[n("Harbor部署 "),s("a",{class:"header-anchor",href:"#harbor部署","aria-hidden":"true"},"#")],-1),Zk=s("p",null,[n("Harbor为运维提供了多种部署方法，你可以直接clone最新代码，也可以支持offline的部署方法，直接下载官方构建好的镜像来进行使用。可以在github的releases查看最新版本，本文是1.7.1版本。"),s("em",null,[s("a",{href:"https://github.com/vmware/harbor/releases",target:"_blank",rel:"noreferrer"},"https://github.com/vmware/harbor/releases")])],-1),s2=s("p",null,"建议下载offline的压缩包，里面包含了harbor启动所用的所有docker镜像，可以快速的部署harbor。",-1),n2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# wget https://storage.googleapis.com/harbor-releases/release-1.7.0/harbor-offline-installer-v1.7.1.tgz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# tar zxf harbor-offline-installer-v1.7.1.tgz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),l2=s("p",null,"Harbor的每个组件都是以Docker容器的形式构建的，使用Docker Compose来对它进行部署，你可以查看docker-compose.yml文件。",-1),e2=s("h3",{id:"harbor配置",tabindex:"-1"},[n("Harbor配置 "),s("a",{class:"header-anchor",href:"#harbor配置","aria-hidden":"true"},"#")],-1),o2=s("p",null,[s("strong",null,"为Harbor配置HTTP访问")],-1),a2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd harbor")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 harbor]# vim harbor.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hostname = 192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),t2=s("p",null,[s("strong",null,"配置Docker信任仓库")],-1),c2=s("p",null,"如果使用http的方式配置harbor需要为所有Docker添加信任配置。",-1),i2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/docker/daemon.json")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'"insecure-registries" : ["http://192.168.56.11"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),r2=s("p",null,[s("strong",null,"为Harbor配置https访问")],-1),p2=s("p",null,"默认情况下Harbor是使用http进行访问，官方提供了自签名证书的方法，不过生产环境还是建议购买SSL证书。",-1),d2=s("p",null,[s("strong",null,"1.申请证书")],-1),A2=s("p",null,"如果你没有SSL证书，那么也不要使用网上复杂的自签名证书的步骤了。目前阿里云提供Symantec 免费型DV SSL证书。申请成功后，下载Nginx版本的证书文件。",-1),C2=s("p",null,[s("strong",null,"2.Harbor配置")],-1),u2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker-node1 harbor]# cd /usr/local/src/harbor/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@docker-node1 harbor]# vim harbor.cfg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hostname = reg.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ui_url_protocol = https")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssl_cert = /usr/local/src/harbor/1_registry.linuxhot.com_bundle.crt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ssl_cert_key = /usr/local/src/harbor/2_registry.linuxhot.com.key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),y2=s("p",null,"请将证书放置在宿主机上，并配置正确的证书路径。",-1),h2=s("p",null,[s("strong",null,"Docker Compose安装")],-1),_2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]#yum install -y docker-compose")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker-compose --version")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-compose version 1.8.0, build 94f7016")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),D2=s("p",null,[s("strong",null,"安装Harbor")],-1),g2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-harbor-1 ~]# cd /usr/local/src/harbor/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-harbor-1 harbor]# ./install.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),m2=s("p",null,[s("strong",null,"查看Harbor状态")],-1),b2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-harbor-1 harbor]# docker-compose ps")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name Command State Ports")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"------------------------------------------------------------------------------------------------------------------------------")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"harbor-adminserver /harbor/start.sh Up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"harbor-core /harbor/start.sh Up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"harbor-db /entrypoint.sh postgres Up 5432/tcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"harbor-jobservice /harbor/start.sh Up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"harbor-log /bin/sh -c /usr/local/bin/ ... Up 127.0.0.1:1514->10514/tcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"harbor-portal nginx -g daemon off; Up 80/tcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx nginx -g daemon off; Up 0.0.0.0:443->443/tcp, 0.0.0.0:4443->4443/tcp,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"0.0.0.0:80->80/tcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"redis docker-entrypoint.sh redis ... Up 6379/tcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"registry /entrypoint.sh /etc/regist ... Up 5000/tcp")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"registryctl /harbor/start.sh Up")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k2=s("h3",{id:"使用harbor管理registry",tabindex:"-1"},[n("使用Harbor管理Registry "),s("a",{class:"header-anchor",href:"#使用harbor管理registry","aria-hidden":"true"},"#")],-1),v2=s("p",null,[n("现在你就可以访问你的域名"),s("a",{href:"http://reg.linuxhot.xn--com-vj3fu53h4lw8bl.xn--admin%2Charbor12345-8l75a8z3f3f3fwrmtj9hrk9d./",target:"_blank",rel:"noreferrer"},"http://reg.linuxhot.com进行登录。默认用户admin，密码Harbor12345。")],-1),x2=s("p",null,[s("img",{src:"http://k8s.unixhot.com/docker/media/366c20c68d5e6467434fb8108baa6081.png",alt:"img"})],-1),f2=s("p",null,"登录后的第一件事情永远都是修改默认密码。然后你就可以在项目管理中，新建和管理项目了。不过默认情况下创建的项目library是公开的，如果你要使用这个项目，而且域名放在公网上，请取消公开。",-1),S2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker login reg.linuxhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Username: admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WARNING! Your password will be stored unencrypted in /root/.docker/config.json.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Configure a credential helper to remove this warning. See")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://docs.docker.com/engine/reference/commandline/login/#credentials-store")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Login Succeeded")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E2=s("p",null,[s("strong",null,"提交镜像到Registry")],-1),P2=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# docker tag centos:latest reg.linuxhot.com/system/centos:latest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# docker push reg.linuxhot.com/system/centos:latest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),N2=s("h1",{id:"kubernetes快速入门",tabindex:"-1"},[n("Kubernetes快速入门 "),s("a",{class:"header-anchor",href:"#kubernetes快速入门","aria-hidden":"true"},"#")],-1),R2=s("p",null,"学习Kubernetes最权威的知识来源就是Kubernetes官方文档，而且对于初学者来说，官方文档可能不是最佳选择。本章将带你循循序渐进的学习Kubernetes，后面章节会通过大量的实践案例来理解和掌握Kubernetes的知识。",-1),T2=s("ul",null,[s("li",null,[n("Kubernetes官方文档："),s("a",{href:"https://kubernetes.io/docs/home/",target:"_blank",rel:"noreferrer"},"https://kubernetes.io/docs/home/")]),s("li",null,[n("Kuernetes Github："),s("a",{href:"https://github.com/kubernetes/",target:"_blank",rel:"noreferrer"},"https://github.com/kubernetes/")])],-1),I2=s("h2",{id:"kubernetes架构介绍",tabindex:"-1"},[n("Kubernetes架构介绍 "),s("a",{class:"header-anchor",href:"#kubernetes架构介绍","aria-hidden":"true"},"#")],-1),O2=s("p",null,"Kubernetes 源于希腊语，意为 “舵手” 或 “飞行员”，是用于自动部署，扩展和管理容器化应用程序的开源系统，由于K和S之间有8个字母，被简称为K8S。Kubernetes 构建在 Google 15 年生产环境经验基础之上，可以将Kubernetes看作为Google内部的容器管理平台Brog的开源版本，当然他们之间是有一些差异的。",-1),M2=s("h3",{id:"kubernetes系统架构",tabindex:"-1"},[n("Kubernetes系统架构 "),s("a",{class:"header-anchor",href:"#kubernetes系统架构","aria-hidden":"true"},"#")],-1),w2=s("p",null,"Kubernetes被设计为Master和Node两个角色，这类似于OpenStack的架构理念，Master为控制节点，Node为计算节点或者叫工作节点，在Master节点上有一个API Server服务，对外提供标准的RestAPI，这也是Kubernetes集群的入口，意外着只要和集群进行交互必须连接到API Server上。",-1),K2=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/4f93fc22b605a967fa54a2491557c04e.png",alt:"img"})],-1),L2=s("p",null,[s("strong",null,"Master节点介绍")],-1),U2=s("p",null,"Kubernetes Master节点主要有4个组件，API Server、Scheduler、Controller、etcd。如下图所示：",-1),j2=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/0786901c59be2f756d7b979619a048b2.png",alt:"img"})],-1),G2=s("ul",null,[s("li",null,[s("strong",null,"API Server"),n("：提供Kubernetes API接口，主要处理 Rest操作以及更新Etcd中的对象。是所有资源增删改查的唯一入口。")]),s("li",null,[s("strong",null,"Scheduler"),n("：绑定Pod到Node上，主要做资源调度。")]),s("li",null,[s("strong",null,"Controller Manager"),n("：所有其他群集级别的功能，目前由控制器Manager执行。资源对象的自动化控制中心，Kubernetes集群有很多控制器。")]),s("li",null,[s("strong",null,"Etcd"),n("：所有持久化的状态信息存储在Etcd中，这个是Kubernetes集群的数据库。")])],-1),H2=s("p",null,[s("strong",null,"Node节点介绍")],-1),F2=s("p",null,"Node节点是Kubernetes集群的工作节点，在Node节点上主要运行了Docker、Kubelet、kube-proxy三个服务（Fluentd请先忽略），如下图所示：",-1),V2=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/ff26ae9ea18c1a93e50b8226abfa2fa7.png",alt:"img"})],-1),B2=s("ul",null,[s("li",null,[s("strong",null,"Docker Engine"),n("：负责节点的容器的管理工作，最终创建出来的是一个Docker容器。")]),s("li",null,[s("strong",null,"Kubelet"),n("：安装在Node上的代理服务，用来管理Pods以及容器、镜像、Volume等，实现对集群对节点的管理。")]),s("li",null,[s("strong",null,"Kube-proxy"),n("：安装在Node上的网络代理服务，提供网络代理以及负载均衡，实现与Service通讯。")])],-1),q2=s("h3",{id:"kubernetes逻辑架构",tabindex:"-1"},[n("Kubernetes逻辑架构 "),s("a",{class:"header-anchor",href:"#kubernetes逻辑架构","aria-hidden":"true"},"#")],-1),Y2=s("p",null,"在上面的介绍中提到像Pod、Service这些概念，在Kubernetes的系统架构图中并没有体现出来，这些可以理解为Kubernetes逻辑架构中的组件。也就是在Master和Node上并不具体存在的一个服务或者进程，但却是Kubernetes的组件，也是我们的管理对象。主要有Pod、Service和各种控制器等。",-1),z2=s("p",null,[s("strong",null,"Pod")],-1),$2=s("p",null,"Pod是Kubernetes的最小管理单元，一个Pod可以包含一组容器和卷。虽然一个Pod里面可以包含一个或者多个容器，但是Pod只有一个IP地址，而且Pod重启后，IP地址会发生变化。",-1),X2=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/e2a89d5ac819b578808e62d8fee0e960.png",alt:"img"})],-1),J2=s("p",null,[s("strong",null,"Controller")],-1),W2=s("p",null,"一个应用如果可以有一个或者多个Pod，就像你给某一个应用做集群，集群中的所有Pod是一模一样的。Kubernetes中有很多控制器可以来管理Pod，例如下图的Replication Controller可以控制Pod的副本数量，从而实现横向扩展。",-1),Q2=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/c4ae2886ff4fdb51b9a0dd20a14c8e50.png",alt:"img"})],-1),Z2=s("p",null,"Kubernetes中有很多控制器，后面的章节我们会一一讲到，常用的控制器如下：",-1),sv=s("ul",null,[s("li",null,"Replication Controller（新版本已经被ReplicaSet所替代）"),s("li",null,"ReplicaSet（新版本被封装在Deployment中）"),s("li",null,"Deployment：封装了Pod的副本管理、部署更新、回滚、扩容、缩容等功能。"),s("li",null,"DaemonSet：保证所有的Node上有且只有一个Pod在运行。"),s("li",null,"StatefulSet：有状态的应用，为 Pod 提供唯一的标识，它可以保证部署和 scale 的顺序。"),s("li",null,"Job：使用Kubernetes运行单一任务。"),s("li",null,"CronJob：使用Kubernetes运行定时任务。")],-1),nv=s("p",null,[s("strong",null,"Service")],-1),lv=s("p",null,"由于Pod的生命周期是短暂的，而且每次重启Pod的IP地址都会发生变化，而且一个Pod有多个副本，也就是说一个集群中有了多个节点，就需要考虑负载均衡的问题。Kubernetes使用Service来实现Pod的访问，而且Service有一个Cluster IP，通常也称之为VIP，是固定不变的。",-1),ev=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/2e61328894d1eaf548ad6ff06d85a6a3.png",alt:"img"})],-1),ov=s("h3",{id:"kubernetes网络介绍",tabindex:"-1"},[n("Kubernetes网络介绍 "),s("a",{class:"header-anchor",href:"#kubernetes网络介绍","aria-hidden":"true"},"#")],-1),av=s("p",null,"在Kubernetes集群中存在着三种网络，分别是Node网络、Pod网络和Service网络，这几种网络之间的通信需要依靠网络插件，Kubernetes本身并没有提供，社区提供了像Flannel、Calico、Cannal等，后面章节会详述。",-1),tv=s("p",null,[s("strong",null,"Node网络")],-1),cv=s("p",null,"Node网络指的是Kubernetes Node节点本地的网络，在本实验环境中使用的是192.168.56.0/24这个网段，所有的Node和Master在该网段都可以正常通信。",-1),iv=s("p",null,[s("strong",null,"Pod网络")],-1),rv=s("p",null,"后面创建的Pod，每一个Pod都会有一个IP地址，这个IP地址网络段被称之为Pod网络，如下图所示。",-1),pv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-hpn68 1/1 Running 0 9m7s 10.2.1.2 linux-node2.linuxhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<none> <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-r4mfq 1/1 Running 0 7m46s 10.2.1.3 linux-node2.linuxhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<none> <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dv=s("p",null,[s("strong",null,"Service网络")],-1),Av=s("p",null,"Service是为Pod提供访问和负载均衡的网络地址段，如下图所示。",-1),Cv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 64m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx NodePort 10.1.216.23 <none> 80:30893/TCP 8m3s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),uv=s("p",null,"Kubernetes的组件和知识绝非如此，快速入门可以先了解这么多，下一章节，我们先快速的部署一个Kubernetes集群。",-1),yv=s("h2",{id:"使用kubeadm部署kubernetes-v1-16-4",tabindex:"-1"},[n("使用kubeadm部署Kubernetes v1.16.4 "),s("a",{class:"header-anchor",href:"#使用kubeadm部署kubernetes-v1-16-4","aria-hidden":"true"},"#")],-1),hv=s("p",null,"想要快速的体验Kubernetes的功能，官方提供了非常多的部署方案，可以使用官方提供的kubeadm以容器的方式运行Kubernetes集群，也可以使用二进制方式部署更有利于理解Kubernetes的架构，我们先使用kubeadm快速的部署一个Kubernetes集群后，学习Kubernetes的使用，然后动手使用二进制的方式来深入理解Kubernetes架构。",-1),_v=s("blockquote",null,[s("p",null,"注意：请不要把目光仅仅放在部署上，要慢慢的了解其本质。")],-1),Dv=s("p",null,"Kubernetesv1.13版本发布后，kubeadm才正式进入GA，可以生产使用。目前Kubernetes的对应镜像仓库，在国内阿里云也有了镜像站点，使用kubeadm部署Kubernetes集群变得简单并且容易了很多，本文使用kubeadm带领大家快速部署Kubernetes v1.16.2版本。",-1),gv=s("p",null,[s("strong",null,"实验环境准备")],-1),mv=s("p",null,"在本书的实验环境的基础上，我们如下来分配角色：",-1),bv=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"主机名"),s("th",null,"IP地址（NAT）"),s("th",null,"最低配置"),s("th",null,"描述")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("a",{href:"http://linux-node1.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node1.linuxhot.com")]),s("td",null,"eth0:192.168.56.11"),s("td",null,"1CPU/1G内存"),s("td",null,"Kubernets Master/Etcd节点")]),s("tr",null,[s("td",null,[s("a",{href:"http://linux-node2.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node2.linuxhot.com")]),s("td",null,"eth0:192.168.56.12"),s("td",null,"1CPU/1G内存"),s("td",null,"Kubernets Node节点")]),s("tr",null,[s("td",null,[s("a",{href:"http://linux-node3.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node3.linuxhot.com")]),s("td",null,"eth0:192.168.56.13"),s("td",null,"1CPU/1G内存"),s("td",null,"Kubernets Node节点")]),s("tr",null,[s("td",null,"Service网段"),s("td",null,"10.1.0.0/16"),s("td"),s("td")]),s("tr",null,[s("td",null,"Pod网段"),s("td",null,"10.2.0.0/16"),s("td"),s("td")]),s("tr",null,[s("td",null,"备注"),s("td",null,"如果有条件可以部署多个Kubernets node，实验效果更佳。"),s("td"),s("td")])])],-1),kv=s("h3",{id:"部署docker",tabindex:"-1"},[n("部署Docker "),s("a",{class:"header-anchor",href:"#部署docker","aria-hidden":"true"},"#")],-1),vv=s("p",null,"首先需要在所有Kubernetes集群的节点中安装Docker和kubeadm。",-1),xv=s("p",null,[s("strong",null,"1.设置使用国内Yum源")],-1),fv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /etc/yum.repos.d/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 yum.repos.d]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Sv=s("p",null,[s("strong",null,"2.安装指定的Docker版本")],-1),Ev=s("p",null,[n("由于kubeadm对Docker的版本是有要求的，需要安装与Kubernetes匹配的版本，这个对应关系一般在每次发布的Changlog中可以找到，例如1.16.2的CHANGELOG如下："),s("a",{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.16.md",target:"_blank",rel:"noreferrer"},"CHANGELOG")],-1),Pv=s("p",null,"当前v1.16.2支持的Docker版本有v1.13.1, 17.03, 17.06, 17.09, 18.06, 18.09,可以通过下面命令查看：",-1),Nv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum list docker-ce.x86_64 --showduplicates | sort -r")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * updates: mirror.jdcloud.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Loading mirror speeds from cached hostfile")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Loaded plugins: fastestmirror")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * extras: mirror.jdcloud.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * epel: mirrors.njupt.edu.cn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.4-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.3-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.2-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.1-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:19.03.0-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.9-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.8-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.7-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.6-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.5-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.4-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.3-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.2-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.1-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            3:18.09.0-3.el7                     docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.3.ce-3.el7                    docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.2.ce-3.el7                    docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.1.ce-3.el7                    docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.06.0.ce-3.el7                    docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.03.1.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            18.03.0.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.12.1.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.12.0.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.09.1.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.09.0.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.06.2.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.06.1.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.06.0.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.3.ce-1.el7                    docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.2.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.1.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker-ce.x86_64            17.03.0.ce-1.el7.centos             docker-ce-stable")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," * base: mirrors.neusoft.edu.cn")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Available Packages")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rv=s("p",null,[s("strong",null,"3.安装Docker18.09版本")],-1),Tv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum -y install docker-ce-18.09.9-3.el7 docker-ce-cli-18.09.9-3.el7")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Iv=s("p",null,[s("strong",null,"4.设置cgroup驱动使用systemd")],-1),Ov=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /etc/docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat > /etc/docker/daemon.json <<EOF")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'      "registry-mirrors": ["https://dx5z2hy7.mirror.aliyuncs.com"],')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'      "exec-opts": ["native.cgroupdriver=systemd"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mv=s("p",null,[s("strong",null,"5.启动后台进程")],-1),wv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable docker && systemctl start docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kv=s("p",null,[s("strong",null,"6.查看Docker版本")],-1),Lv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker --version")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Docker version 18.09.9, build 039a7df9ba")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Uv=s("h3",{id:"部署kubadm和kubelet",tabindex:"-1"},[n("部署kubadm和kubelet "),s("a",{class:"header-anchor",href:"#部署kubadm和kubelet","aria-hidden":"true"},"#")],-1),jv=s("p",null,"在Kubernetes集群的所有节点上部署完毕Docker后，还需要全部部署kubeadm和kubelet，其中kubeadm是管理工具，kubelet是一个服务，用于启动Kubernetes对应的服务。",-1),Gv=s("p",null,[s("strong",null,"1.设置kubernetes YUM仓库")],-1),Hv=s("p",null,"这里在官方文档的基础上修改为了国内阿里云的yum仓库，",-1),Fv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/yum.repos.d/kubernetes.repo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[kubernetes]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=Kubernetes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repo_gpgcheck=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Vv=s("blockquote",null,[s("p",null,"注意：最下面一行gpgkey的两个URL地址之间是空格，因为排版问题可能导致换行。")],-1),Bv=s("p",null,[s("strong",null,"2.安装软件包")],-1),qv=s("p",null,"由于版本更新频繁，请指定对应的版本号，本文采用1.16.2版本，其它版本未经测试，如果不指定版本默认安装最新版本。",-1),Yv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y kubelet-1.16.2 kubeadm-1.16.2 kubectl-1.16.2 ipvsadm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zv=s("p",null,[s("strong",null,"3.配置kubelet")],-1),$v=s("p",null,"默认情况下，Kubelet不允许所在的主机存在交换分区，后期规划的时候，可以考虑在系统安装的时候不创建交换分区，针对已经存在交换分区的可以设置忽略禁止使用Swap的限制，不然无法启动Kubelet。",-1),Xv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/kubelet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'KUBELET_CGROUP_ARGS="--cgroup-driver=systemd"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'KUBELET_EXTRA_ARGS="--fail-swap-on=false"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Jv=s("p",null,"在所有节点上关闭SWAP",-1),Wv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# swapoff -a")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Qv=s("p",null,[s("strong",null,"4.设置内核参数")],-1),Zv=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat <<EOF >  /etc/sysctl.d/k8s.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"net.bridge.bridge-nf-call-ip6tables = 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"net.bridge.bridge-nf-call-iptables = 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"net.ipv4.ip_forward = 1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"EOF")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),s0=s("p",null,"使配置生效",-1),n0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# sysctl --system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),l0=s("p",null,[s("strong",null,"5.启动kubelet并设置开机启动")],-1),e0=s("p",null,"注意，此时kubelet是无法正常启动的，可以查看/var/log/messages有报错信息，等待执行初始化之后即可正常，为正常现象。",-1),o0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable kubelet && systemctl start kubelet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),a0=s("p",null,[s("strong",null,"6.使用IPVS进行负载均衡")],-1),t0=s("p",null,"在Kubernetes集群中Kube-Proxy组件负载均衡的功能，默认使用iptables，生产环境建议使用ipvs进行负载均衡。在所有节点启用ipvs模块",-1),c0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/sysconfig/modules/ipvs.modules")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs_rr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs_wrr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- ip_vs_sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"modprobe -- nf_conntrack_ipv4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# chmod +x /etc/sysconfig/modules/ipvs.modules")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# source /etc/sysconfig/modules/ipvs.modules")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),i0=s("p",null,"查看模块是否加载正常",-1),r0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# lsmod | grep -e ip_vs -e nf_conntrack_ipv4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs_sh               12688  0 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs_wrr              12697  0 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs_rr               12600  0 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ip_vs                 145497  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nf_conntrack_ipv4      15053  15 ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nf_defrag_ipv4         12729  1 nf_conntrack_ipv4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nf_conntrack          133095  7 ip_vs,nf_nat,nf_nat_ipv4,xt_conntrack,nf_nat_masquerade_ipv4,nf_conntrack_netlink,nf_conntrack_ipv4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"libcrc32c              12644  4 xfs,ip_vs,nf_nat,nf_conntrack")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),p0=s("ul",null,[s("li",null,[n("以上步骤请在Kubernetes的所有节点上执行，本实验环境是需要在linux-node1、linux-node2、linux-node3这三台机器上均安装Docker、kubeadm、kubelet，对于以上操作需要自动化可以参考我使用SaltStack完成的salt-kubeadm项目："),s("a",{href:"https://github.com/unixhot/salt-kubeadm",target:"_blank",rel:"noreferrer"},"https://github.com/unixhot/salt-kubeadm")])],-1),d0=s("h3",{id:"初始化集群部署master",tabindex:"-1"},[n("初始化集群部署Master "),s("a",{class:"header-anchor",href:"#初始化集群部署master","aria-hidden":"true"},"#")],-1),A0=s("p",null,"在所有节点上安装完毕后，在linux-node1这台Master节点上进行集群的初始化工作。",-1),C0=s("p",null,[s("strong",null,"1.导出所有默认的配置")],-1),u0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm config print init-defaults > kubeadm.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),y0=s("p",null,"上面的命令会生成一个默认配置的kubeadm配置文件，然后在此基础上进行修改即可。",-1),h0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat kubeadm.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: kubeadm.k8s.io/v1beta2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"bootstrapTokens:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- groups:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - system:bootstrappers:kubeadm:default-node-token")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  token: abcdef.0123456789abcdef")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ttl: 24h0m0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  usages:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - signing")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - authentication")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: InitConfiguration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"localAPIEndpoint:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  advertiseAddress: 192.168.56.11  #修改为API Server的地址")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  bindPort: 6443")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nodeRegistration:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  criSocket: /var/run/dockershim.sock")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: linux-node1.example.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  taints:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - effect: NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    key: node-role.kubernetes.io/master")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiServer:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  timeoutForControlPlane: 4m0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: kubeadm.k8s.io/v1beta2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"certificatesDir: /etc/kubernetes/pki")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"clusterName: kubernetes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"controllerManager: {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  type: CoreDNS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"etcd:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  local:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    dataDir: /var/lib/etcd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"imageRepository: registry.aliyuncs.com/google_containers  #修改为阿里云镜像仓库")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ClusterConfiguration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetesVersion: v1.16.2  #修改为具体的版本")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"networking:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  dnsDomain: cluster.local")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  serviceSubnet: 10.1.0.0/16   #修改Service的网络")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  podSubnet: 10.2.0.0/16      #新增Pod的网络")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scheduler: {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"---   #下面有增加的三行配置，用于设置Kubeproxy使用LVS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: kubeproxy.config.k8s.io/v1alpha1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: KubeProxyConfiguration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mode: ipvs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_0=s("p",null,[s("strong",null,"2. 执行初始化操作")],-1),D0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[init] Using Kubernetes version: v1.16.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] Running pre-flight checks")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"error execution phase preflight: [preflight] Some fatal errors occurred:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [ERROR NumCPU]: the number of available CPUs 1 is less than the required 2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [ERROR Swap]: running with swap on is not supported. Please disable swa")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To see the stack trace of this error execute with --v=5 or higher")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),g0=s("p",null,"如果遇到上面这样的报错，是因为在实验环境开启了交换分区，以及CPU的核数小于2造成的，可以使用--ignore-preflight-errors=进行忽略。 --ignore-preflight-errors=：忽略运行时的错误，例如上面目前存在[ERROR NumCPU]和[ERROR Swap]，忽略这两个报错就是增加--ignore-preflight-errors=NumCPU 和--ignore-preflight-errors=Swap的配置即可。",-1),m0=s("p",null,"再次执行初始化操作：",-1),b0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm init --config kubeadm.yaml \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  --ignore-preflight-errors=Swap,NumCPU ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[init] Using Kubernetes version: v1.16.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] Running pre-flight checks")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [WARNING NumCPU]: the number of available CPUs 1 is less than the required 2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        [WARNING Swap]: running with swap on is not supported. Please disable swap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] Pulling images required for setting up a Kubernetes cluster")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] This might take a minute or two, depending on the speed of your internet connection")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k0=s("p",null,"执行完毕后，会在当前输出下停留，等待下载Kubernetes组件的Docker镜像。根据你的网络情况，可以持续1-5分钟，你也可以使用docker images查看下载的镜像。镜像下载完毕之后，就会进行初始操作：",-1),v0=s("p",null,"这里省略了所有输出，初始化操作主要经历了下面15个步骤，每个阶段均输出均使用[步骤名称]作为开头：",-1),x0=s("ol",null,[s("li",null,"[init]：指定版本进行初始化操作"),s("li",null,"[preflight] ：初始化前的检查和下载所需要的Docker镜像文件。"),s("li",null,"[kubelet-start]：生成kubelet的配置文件”/var/lib/kubelet/config.yaml”，没有这个文件kubelet无法启动，所以初始化之前的kubelet实际上启动失败。"),s("li",null,"[certificates]：生成Kubernetes使用的证书，存放在/etc/kubernetes/pki目录中。"),s("li",null,"[kubeconfig] ：生成 KubeConfig文件，存放在/etc/kubernetes目录中，组件之间通信需要使用对应文件。"),s("li",null,"[control-plane]：使用/etc/kubernetes/manifest目录下的YAML文件，安装 Master组件。"),s("li",null,"[etcd]：使用/etc/kubernetes/manifest/etcd.yaml安装Etcd服务。"),s("li",null,"[wait-control-plane]：等待control-plan部署的Master组件启动。"),s("li",null,"[apiclient]：检查Master组件服务状态。"),s("li",null,"[uploadconfig]：更新配置"),s("li",null,"[kubelet]：使用configMap配置kubelet。"),s("li",null,"[patchnode]：更新CNI信息到Node上，通过注释的方式记录。"),s("li",null,"[mark-control-plane]：为当前节点打标签，打了角色Master，和不可调度标签，这样默认就不会使用Master节点来运行Pod。"),s("li",null,"[bootstrap-token]：生成token记录下来，后边使用kubeadm join往集群中添加节点时会用到"),s("li",null,"[addons]：安装附加组件CoreDNS和kube-proxy")],-1),f0=s("p",null,"成功执行之后，你会看到下面的输出：",-1),S0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Your Kubernetes master has initialized successfully!")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To start using your cluster, you need to run the following as a regular user:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mkdir -p $HOME/.kube")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sudo chown $(id -u):$(id -g) $HOME/.kube/config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"You should now deploy a pod network to the cluster.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://kubernetes.io/docs/concepts/cluster-administration/addons/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"You can now join any number of machines by running the following on each node")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"as root:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubeadm join 192.168.56.11:6443 --token 19fhhl.3mzkyk16tcgp6vga --discovery-token-ca-cert-hash sha256:76a88c38b673d3b2ac73e33127a809688cb3e58c533512ac6d92ecb66aa57a45")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),E0=s("p",null,"如果执行失败，那意味着之前的操作存在问题，检查顺序如下：",-1),P0=s("ul",null,[s("li",null,"基础环境"),s("li",null,"主机名是否可以解析，SELinux，iptables是否关闭。"),s("li",null,"交换分区是否存在free -m查看"),s("li",null,"内核参数是否修改、IPVS是否修改（目前阶段不会造成失败）"),s("li",null,"基础软件"),s("li",null,"Docker是否安装并启动"),s("li",null,"Kubelet是否安装并启动"),s("li",null,"执行kubeadm是否有别的报错是否忽略"),s("li",null,"systemctl status kubelet查看kubelet是否启动"),s("li",null,"如果kubelet无法启动，查看日志有什么报错，并解决报错。"),s("li",null,"以上都解决完毕，需要重新初始化"),s("li",null,"kubeadm reset 进行重置（生产千万不要执行，会直接删除集群）"),s("li",null,"根据kubeadm reset 提升，清楚iptables和LVS。")],-1),N0=s("p",null,"请根据上面输出的要求配置kubectl命令来访问集群。",-1),R0=s("p",null,[s("strong",null,"3.为kubectl准备Kubeconfig文件。")],-1),T0=s("p",null,"kubectl默认会在执行的用户家目录下面的.kube目录下寻找config文件。这里是将在初始化时[kubeconfig]步骤生成的admin.conf拷贝到.kube/config。",-1),I0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir -p $HOME/.kube")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cp -i /etc/kubernetes/admin.conf $HOME/.kube/config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# chown $(id -u):$(id -g) $HOME/.kube/config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O0=s("p",null,"在该配置文件中，记录了API Server的访问地址，所以后面直接执行kubectl命令就可以正常连接到API Server中。",-1),M0=s("p",null,[s("strong",null,"4.使用kubectl命令查看组件状态")],-1),w0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get cs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS MESSAGE ERROR")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scheduler Healthy ok")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"controller-manager Healthy ok")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'etcd-0 Healthy {"health": "true"}')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K0=s("p",null,"**知识回顾：为什么上面的输出没有显示API Server组件的状态",-1),L0=s("p",null,"因为API Server是Kubernetes集群的入口，所有和Kubernetes集群的交互都必须经过APIServer，kubectl命令也是连接到API Server上进行交互，所以如果能够正常使用kubectl执行命令，意味着API Server运行正常。",-1),U0=s("p",null,[s("strong",null,"5.使用kubectl获取Node信息")],-1),j0=s("p",null,"目前只有一个节点，角色是Master，状态是NotReady。",-1),G0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get node")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.unixhot.com NotReady master 14m v1.16.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H0=s("h3",{id:"部署网络插件",tabindex:"-1"},[n("部署网络插件 "),s("a",{class:"header-anchor",href:"#部署网络插件","aria-hidden":"true"},"#")],-1),F0=s("p",null,"Master节点NotReady的原因就是因为没有使用任何的网络插件，此时Node和Master的连接还不正常。目前最流行的Kubernetes网络插件有Flannel、Calico、Canal，这里分别列举了Canal和Flannel，你可以选择其中之一进行部署。 因为基础的Kubernetes集群已经配置完毕，后面的增加组件等操作，几乎都可以使用kubectl和一个YAML配置文件来完成。",-1),V0=s("p",null,"【部署canal网络插件】",-1),B0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/rbac.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl apply -f https://docs.projectcalico.org/v3.3/getting-started/kubernetes/installation/hosted/canal/canal.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q0=s("p",null,"【部署Flannel网络插件】（推荐） 部署Flannel网络插件需要修改Pod的IP地址段，修改为和你初始化一直的网段，可以先下载Flannel的YAML文件修改后，再执行。",-1),Y0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# git clone --depth 1 https://github.com/coreos/flannel.git")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd flannel/Documentation/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 Documentation]# vim kube-flannel.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# 修改"Network": "10.244.0.0/16"为"Network": "10.2.0.0/16",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"74   net-conf.json: |")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"75     {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'76       "Network": "10.2.0.0/16",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'77       "Backend": {')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'78         "Type": "vxlan"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"79       }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"80     }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 请注意，Flannel的镜像拉取速度会比较慢，可以替换为国内镜像")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# image: quay.io/coreos/flannel:v0.10.0-amd64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# 如果Node中有多个网卡，可以使用--iface来指定对应的网卡参数。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: kube-flannel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: quay-mirror.qiniu.com/coreos/flannel:v0.11.0-amd64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        command:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - /opt/bin/flanneld")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        args:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - --ip-masq")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - --kube-subnet-mgr")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - --iface=eth0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),z0=s("p",null,"部署Flannel",-1),$0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 Documentation]# kubectl create -f kube-flannel.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),X0=s("p",null,"查看Pod状态",-1),J0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 Documentation]# kubectl get pod -n kube-system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                              READY   STATUS     RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"coredns-58cc8c89f4-cjhdv                          0/1     Pending    0          41m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"coredns-58cc8c89f4-vdfn2                          0/1     Pending    0          41m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"etcd-linux-node1.unixhot.com                      1/1     Running    0          41m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-apiserver-linux-node1.unixhot.com            1/1     Running    0          40m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-controller-manager-linux-node1.unixhot.com   1/1     Running    1          40m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-bwsxl                       0/1     Init:0/1   0          20s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-proxy-5qrmh                                  1/1     Running    0          41m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-scheduler-linux-node1.unixhot.com            1/1     Running    1          41m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W0=s("p",null,"可以看到此时CoreDNS处于Pending状态，需要等待网络插件canal或者Flannel的Pod状态变成Running之后CoreDNS也会正常。所有Pod的状态都变成Running之后，这个时候再次获取Node，会发现节点变成了Ready状态。",-1),Q0=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get node")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.unixhot.com Ready master 29m v1.16.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z0=s("p",null,[s("em",null,"kubeadm其实使用Kubernetes部署Kubernetes，这样就存在先有鸡还是先有蛋的问题，所以，我们首先手动部署了Docker和kubelet，然后kubeadm调用kubelet以静态Pod的方式部署了Kubernetes集群中的其它组件。静态Pod在后面的章节会讲到。")],-1),s3=s("h3",{id:"部署node节点",tabindex:"-1"},[n("部署Node节点 "),s("a",{class:"header-anchor",href:"#部署node节点","aria-hidden":"true"},"#")],-1),n3=s("p",null,"Master节点部署完毕之后，就可以部署Node节点，首先请遵循部署Docker和kubeadm章节为Node节点部署安装好docker、kubeadm和kubelet，此过程这里不再重复列出。",-1),l3=s("p",null,[s("strong",null,"1.在Master节点输出增加节点的命令")],-1),e3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubeadm token create --print-join-command")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),o3=s("p",null,[s("strong",null,"2.在Node节点执行")],-1),a3=s("p",null,"注意如果节点有交换分区，需要增加--ignore-preflight-errors=Swap。",-1),t3=s("p",null,"部署linux-node2",-1),c3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node2 ~]# kubeadm join 192.168.56.11:6443 --token isggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),i3=s("p",null,"部署linux-node3",-1),r3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node3 ~]# kubeadm join 192.168.56.11:6443 --tokenisggqa.xjwsm3i6nex91d2x --discovery-token-ca-cert-hash sha256:718827895a9a5e63dfa9ff54e16ad6dc0c493139c9c573b67ad66968036cd569 --ignore-preflight-errors=Swap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),p3=s("p",null,"这个时候kubernetes会使用DaemonSet在所有节点上都部署canal/flannel和kube-proxy。部署完毕之后节点即部署完毕。DaemonSet的内容后面会讲解。",-1),d3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    [root@linux-node1 ~]# kubectl get daemonset --all-namespaces")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    NAMESPACE NAME DESIRED CURRENT READY UP-TO-DATE AVAILABLE NODE SELECTOR AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system canal 2 2 1 2 1 beta.kubernetes.io/os=linux 17m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-proxy 2 2 2 2 2 <none> 47m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),A3=s("p",null,"待所有Pod全部启动完毕之后，节点就恢复Ready状态。",-1),C3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    [root@linux-node1 ~]# kubectl get pod --all-namespaces")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    NAMESPACE NAME READY STATUS RESTARTS AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system canal-lv92w 3/3 Running 0 8m45s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system canal-rq5n5 3/3 Running 0 23m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system coredns-78d4cf999f-5k4sg 1/1 Running 0 53m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system coredns-78d4cf999f-bnbgf 1/1 Running 0 53m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system etcd-linux-node1.linuxhot.com 1/1 Running 0 52m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-apiserver-linux-node1.linuxhot.com 1/1 Running 0 52m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-controller-manager-linux-node1.linuxhot.com 1/1 Running 0 52m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-proxy-sddlp 1/1 Running 0 53m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-proxy-tw96b 1/1 Running 0 8m45s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    kube-system kube-scheduler-linux-node1.linuxhot.com 1/1 Running 0 52m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),u3=s("p",null,[s("strong",null,"查看所有节点"),n(" `` [root@linux-node1 ~]# kubectl get node NAME STATUS ROLES AGE VERSION "),s("a",{href:"http://linux-node1.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node1.linuxhot.com"),n(" Ready master 49m v1.13.2 "),s("a",{href:"http://linux-node2.linuxhot.com",target:"_blank",rel:"noreferrer"},"linux-node2.linuxhot.com"),n(" Ready 4m48s v1.13.2")],-1),y3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**如何给Node加上Roles标签**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"使用kubectl get node能够看到linux-node1.linuxhot.com的ROLES是master这个是在进行集群初始化的时候[mark-control-plane]进行标记的。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},`by adding the label "node-role.kubernetes.io/master=''"`)]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[mark-control-plane] Marking the node linux-node1.linuxhot.com as control-plane")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"by adding the taints [node-role.kubernetes.io/master:NoSchedule]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1.查看节点的标签")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get nodes --show-labels")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION LABELS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.linuxhot.com Ready master 48m v1.13.3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node1.linuxhot.com,node-role.kubernetes.io/master=")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node2.linuxhot.com Ready <none> 7m13s v1.13.3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=linux-node2.linuxhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2.增加标签")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl label nodes linux-node2.linuxhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node-role.kubernetes.io/node=")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node/linux-node2.linuxhot.com labeled")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3.查看效果")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get nodes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME STATUS ROLES AGE VERSION")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node1.linuxhot.com Ready master 50m v1.13.3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"linux-node2.linuxhot.com Ready node 8m41s v1.13.3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"### 测试Kubernetes集群 {#test}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"在上面的步骤中，我们创建了一个Kubernetes集群，1个Master和2个Node节点，在生产环境需要考虑Master的高可用，这里先不用考虑，后面会讲到。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**1.创建一个单Pod的Nginx应用**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create deployment nginx --image=nginx:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.apps/nginx created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-9j7ql 0/1 ContainerCreating 0 10s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**2.查看Pod详细信息**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"待Pod的状态为Running后，可以获取Pod的IP地址，这个IP地址是从Master节点初始化的--pod-network-cidr=10.2.0.0/16地址段中分配的。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-9j7ql 1/1 Running 0 59s 10.2.1.2 linux-node2.linuxhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<none> <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**3.测试Nginx访问**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head http://10.2.1.2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.15.8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Sun, 13 Jan 2019 01:16:36 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "5c240d0d-264"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**4.测试扩容**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"现在将Nginx应用的Pod副本数量拓展到2个节点")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl scale deployment nginx --replicas=2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"deployment.extensions/nginx scaled")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME READY STATUS RESTARTS AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-9j7ql 1/1 Running 0 2m13s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-54458cd494-vnm4f 1/1 Running 0 5s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**5.为Nginx增加Service**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"为Nginx增加Service，会创建一个Cluster")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IP，从Master初始化的--service-cidr=10.1.0.0/16地址段中进行分配，")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"并开启NodePort是在Node节点上进行端口映射，进行外部访问。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl expose deployment nginx --port=80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--type=NodePort")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"service/nginx exposed")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes ClusterIP 10.1.0.1 <none> 443/TCP 88m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx NodePort 10.1.147.204 <none> 80:30599/TCP 67m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"**6.测试Service的VIP**")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head http://10.1.147.204/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.15.8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Sun, 13 Jan 2019 01:26:21 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Wed, 26 Dec 2018 23:21:49 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "5c240d0d-264"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),h3=s("p",null,[n("``` "),s("strong",null,"7.测试NodePort，外部访问。")],-1),_3=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/1f9d523f359ce6d49515d04703d8e941.png",alt:"img"})],-1),D3=s("p",null,"这一切看起来似乎不是十分完美，但是现在你已经拥有了一个Kubernetes集群，接下来就可以继续探索Kubernetes的世界了。",-1),g3=s("h2",{id:"公有云中的kubernetes",tabindex:"-1"},[n("公有云中的Kubernetes "),s("a",{class:"header-anchor",href:"#公有云中的kubernetes","aria-hidden":"true"},"#")],-1),m3=s("p",null,"截止2019年2月，大多数公有云已经提供了容器Kubernetes的产品服务，对于使用公有云的用户来说，最佳实践是直接购买公有云产品，而非自己部署Kubernetes集群，主要是因为公有云已经将网络和存储与Kubernetes集成好了，解决了生产应用的难题。",-1),b3=s("h3",{id:"阿里云中的kubernetes",tabindex:"-1"},[n("阿里云中的Kubernetes "),s("a",{class:"header-anchor",href:"#阿里云中的kubernetes","aria-hidden":"true"},"#")],-1),k3=s("p",null,"国内阿里云提供了容器服务 Kubernetes 版（简称 ACK）提供高性能可伸缩的容器应用管理能力，支持企业级 Kubernetes 容器化应用的全生命周期管理。容器服务 Kubernetes 版简化集群的搭建和扩容等工作，整合阿里云虚拟化、存储、网络和安全能力，打造云端最佳的 Kubernetes 容器化应用运行环境。",-1),v3=s("p",null,[s("strong",null,"阿里云Kubernetes模式")],-1),x3=s("p",null,"容器服务Kubernetes版包含了经典Dedicated Kubernetes以及Serverless两种形态，方便您按需选择。",-1),f3=s("ul",null,[s("li",null,"经典Dedicated Kubernetes模式：您可以对集群基础设施和容器应用进行更细粒度的控制，比如选择宿主机实例规格和操作系统，指定Kubernetes 版本、自定义 Kubernetes 特性开关设置等。阿里云 Kubernetes 服务负责为集群创建底层云资源，升级等自动化运维操作。而您需要规划、维护、升级服务器集群，手动或自动在集群中添加或删除服务器。"),s("li",null,"Serverless 模式：您无需创建底层虚拟化资源，可以利用 Kubernetes 命令指明应用容器镜像、CPU 和内存要求以及对外服务方式，直接启动。")],-1),S3=s("p",null,[s("strong",null,"阿里云Kubernetes产品架构")],-1),E3=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/43688d33a81f2bd6af354d0715b6b297.png",alt:"C:UsersjasonDesktop15447553537457_zh-CN.png"})],-1),P3=s("p",null,[s("strong",null,"阿里云Kubernetes创建")],-1),N3=s("p",null,"默认情况下可以在阿里云中自行创建5个集群，每个集群最多可以添加 40 个节点。如需更高配额，需要提交工单申请。",-1),R3=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/4c165d0ebc842862595f9fd0f4650d43.png",alt:"img"})],-1),T3=s("p",null,"阿里云将网络、存储、安全等方面已经进行了深度集成，在创建Kubernetes集群时，阿里云容器服务提供两种网络插件：Terway和Flannel：",-1),I3=s("ul",null,[s("li",null,"Flannel：使用的是简单稳定的社区的Flannel CNI插件，配合阿里云的VPC的高速网络，能给集群高性能和稳定的容器网络体验，但功能偏简单，支持的特性少，例如：不支持基于Kubernetes标准的Network Policy。"),s("li",null,"Terway：是阿里云容器服务自研的网络插件，功能上完全兼容Flannel，支持将阿里云的弹性网卡分配给容器，支持基于Kubernetes标准的NetworkPolicy来定义容器间的访问策略，支持对单个容器做带宽的限流。对于不需要使用Network Policy的用户，可以选择Flannel，其他情况建议选择Terway。了解更多Terway网络插件的相关内容，请参见Terway网络插件。")],-1),O3=s("p",null,"最终阿里云会使用kubeadm帮你创建一个指定版本的Kubernetes集群。",-1),M3=s("h3",{id:"私有云中的kubernetes",tabindex:"-1"},[n("私有云中的Kubernetes "),s("a",{class:"header-anchor",href:"#私有云中的kubernetes","aria-hidden":"true"},"#")],-1),w3=s("p",null,[s("strong",null,"内网部署Kubernetes")],-1),K3=s("p",null,"很多企业需要内网部署Kubernetes但是内网又无法访问外网，就需要本地化部署，无忘了本地话部署主要包括两个方面，一个是软件仓库的准备，一个是Kubernetes镜像的准备。",-1),L3=s("ol",null,[s("li",null,"准备内网YUM仓库（略）"),s("li",null,"准备Docker Registry（请参考Harbor章节）"),s("li",null,"下载并提交镜像到Harbor中，然后将Harbor的镜像部署直接COPY到生产环境中")],-1),U3=s("p",null,"下载脚本如下，请根据需求自行修改：",-1),j3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim k8s-images.sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"#!/bin/bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# EVN")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ALIYUN_REG="registry.aliyuncs.com/google_containers"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'FLANNEL_REG="quay-mirror.qiniu.com/coreos"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'LOCAL_REG="192.168.56.11/kubernetes"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"K8S_VER=v1.15.5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PAUSE_VER=3.1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ETCD_VER=3.3.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"COREDNS_VER=1.3.1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"FLANNEL_VER=v0.11.0-amd64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Kubernetes Docker Images")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IMAGES=(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-proxy:${K8S_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-scheduler:${K8S_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-controller-manager:${K8S_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kube-apiserver:${K8S_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  pause:${PAUSE_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  etcd-amd64:${ETCD_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  coredns:${COREDNS_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"for IMAGE in ${IMAGES[@]}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"do")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  docker pull ${ALIYUN_REG}/${IMAGE}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  docker tag ${ALIYUN_REG}/${IMAGE} ${LOCAL_REG}/${IMAGE}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  #docker push ${LOCAL_REG}/${IMAGES}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"done")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Flannel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker pull ${FLANNEL_REG}/flannel:${FLANNEL_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"docker tag ${FLANNEL_REG}/flannel:${FLANNEL_VER} ${LOCAL_REG}/flannel:${FLANNEL_VER}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G3=s("h1",{id:"第五部分-将应用迁移至kubernetes",tabindex:"-1"},[n("第五部分 将应用迁移至Kubernetes "),s("a",{class:"header-anchor",href:"#第五部分-将应用迁移至kubernetes","aria-hidden":"true"},"#")],-1),H3=s("h1",{id:"_6-第一步：将应用封装进容器中",tabindex:"-1"},[n("6 第一步：将应用封装进容器中 "),s("a",{class:"header-anchor",href:"#_6-第一步：将应用封装进容器中","aria-hidden":"true"},"#")],-1),F3=s("h2",{id:"第一步：将应用封装进容器中",tabindex:"-1"},[n("第一步：将应用封装进容器中 "),s("a",{class:"header-anchor",href:"#第一步：将应用封装进容器中","aria-hidden":"true"},"#")],-1),V3=s("p",null,"在之前的容器镜像实战中，我们已经学习了如何将应用容器化，这里我们将下载使用两个官方的Nginx镜像来完成接下来的实验。",-1),B3=s("h3",{id:"部署harbor镜像仓库",tabindex:"-1"},[n("部署Harbor镜像仓库 "),s("a",{class:"header-anchor",href:"#部署harbor镜像仓库","aria-hidden":"true"},"#")],-1),q3=s("p",null,"生产环境中可以使用Harbor来管理Docker镜像，请参考之前章节的内容完成Harbor镜像仓库的部署工作，并在Harbor中创建一个devopsedu的项目。",-1),Y3=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/093b4b731c05b54a1b8426e924f93d45.png",alt:"img"})],-1),z3=s("h3",{id:"制作实验用的docker镜像",tabindex:"-1"},[n("制作实验用的Docker镜像 "),s("a",{class:"header-anchor",href:"#制作实验用的docker镜像","aria-hidden":"true"},"#")],-1),$3=s("p",null,"这里不再演示Docker镜像的构建，直接下载两个官方镜像作为案例。",-1),X3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker pull nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker pull nginx:1.14.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),J3=s("h3",{id:"配置docker仓库",tabindex:"-1"},[n("配置Docker仓库 "),s("a",{class:"header-anchor",href:"#配置docker仓库","aria-hidden":"true"},"#")],-1),W3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root\\@linux-node1 ~]# vim /etc/docker/daemon.json")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "registry-mirrors": ["https://tdimi5q1.mirror.aliyuncs.com"],')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "insecure-registries" : ["http://192.168.56.11"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart docker")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q3=s("h3",{id:"登录harbor镜像仓库",tabindex:"-1"},[n("登录Harbor镜像仓库 "),s("a",{class:"header-anchor",href:"#登录harbor镜像仓库","aria-hidden":"true"},"#")],-1),Z3=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker login 192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Username: admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Password:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WARNING! Your password will be stored unencrypted in /root/.docker/config.json.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Configure a credential helper to remove this warning. See")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    https://docs.docker.com/engine/reference/commandline/login/\\#credentials-store")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Login Succeeded")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),sx=s("h3",{id:"提交镜像到registry",tabindex:"-1"},[n("提交镜像到Registry "),s("a",{class:"header-anchor",href:"#提交镜像到registry","aria-hidden":"true"},"#")],-1),nx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker tag nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11/devopsedu/nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker tag nginx:1.14.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.56.11/devopsedu/nginx:1.14.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker push 192.168.56.11/devopsedu/nginx:1.14.0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),lx=s("p",null,"在上面的步骤中，模拟了生产环境如何构建和提交镜像，如果对于构建和提交镜像有疑问可以复习第3章的内容。",-1),ex=s("h1",{id:"_7-第二步：将容器封装到pod中",tabindex:"-1"},[n("7 第二步：将容器封装到Pod中 "),s("a",{class:"header-anchor",href:"#_7-第二步：将容器封装到pod中","aria-hidden":"true"},"#")],-1),ox=s("p",null,"Pod是Kubernetes最小的管理单元，一个Pod可以代表一个运行在集群里的进程。之前是在宿主机上运行不同的进程，现在是运行不同的Pod。前面介绍过Pod是一个逻辑架构的组件，Pod里封装了一个（或者多个）应用容器，存储资源和IP地址。",-1),ax=s("p",null,[s("strong",null,"为什么要造一个Pod出来？"),n(" 学习Kubernetes遇到的最多的名称可能就是Pod了，其它开源的容器管理平台例如Mesos直接管理和调度的是容器，但是Kubernetes确是Pod，它在容器上面做了一层封装，方便用户将一组紧耦合的容器，放置在一个共享资源的单元中。对于很多没有此类场景的初学者，可以暂时将Pod看做是容器的一个壳，你也完全可以只在Pod中运行一个容器，随着学习的深入再慢慢理解。 Kubernetes运行Pod的两种方式：")],-1),tx=s("ul",null,[s("li",null,"Pod里只运行一个单独容器，是Kubernetes最常见的使用场景；在这种情况下，可以把Pod看做是一个单独容器的连接器，Kubernetes通过Pod去管理容器，作为使用者几乎不用关心容器。"),s("li",null,"Pod里运行多个有关系容器。例如如果使用Nginx+Tomcat运行Java应用，可以制作一个镜像里面包含了Nginx+Tomcat，也可以分别制作两个镜像Nginx镜像和Tomcat镜像，如果使用Kubernetes就需要使用Pod，如果将Nginx和Tomcat单独放在两个Pod里面来管理，就会面临很多很多问题。这个时候，就可以把这两个容器放置在一个Pod中。")],-1),cx=s("h2",{id:"pod管理",tabindex:"-1"},[n("Pod管理 "),s("a",{class:"header-anchor",href:"#pod管理","aria-hidden":"true"},"#")],-1),ix=s("p",null,"在Kubernetes中使用YAML格式来描述一个Pod。",-1),rx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nginx-pod.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- containerPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),px=s("p",null,"Pod的YAML描述内容还有很多，在使用kubeadm部署Kubernetes的时候，就是使用静态Pod的方式运行的相关服务，YAML文件存放在，当然现在很多配置还是看不懂的，带着问题继续学习。",-1),dx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# ls -l /etc/kubernetes/manifests/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 16")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2041 Feb 11 20:33 etcd.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2700 Feb 11 20:33 kube-apiserver.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 2345 Feb 11 20:33 kube-controller-manager.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw------- 1 root root 1080 Feb 11 20:33 kube-scheduler.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ax=s("p",null,"创建Pod",-1),Cx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nginx-pod.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'pod "nginx-pod" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),ux=s("p",null,"查看Pod",-1),yx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY     STATUS    RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-pod                           1/1       Running   0          49s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),hx=s("p",null,"查看Pod更多信息",-1),_x=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY     STATUS    RESTARTS   AGE       IP           NODE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-pod  1/1       Running   0          1m        10.2.53.18   192.168.56.13")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Dx=s("p",null,"查看Pod详情",-1),gx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe pod nginx-pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         nginx-pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Node:         192.168.56.13/192.168.56.13")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Start Time:   Sat, 02 Jun 2018 06:42:53 +0800")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       app=nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Status:       Running")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IP:           10.2.53.18")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mx=s("p",null,"查看Pod日志",-1),bx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl logs pod/nginx-pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kx=s("p",null,[s("strong",null,"Pod中的镜像拉取策略"),n(" 当kubelet尝试拉取指定的镜像时，[imagePullPolicy]和镜像的标签会生效。")],-1),vx=s("ul",null,[s("li",null,"imagePullPolicy: IfNotPresent：仅当镜像在本地不存在时镜像才被拉取。"),s("li",null,"imagePullPolicy: Always：每次启动 pod 的时候都会拉取镜像。")],-1),xx=s("p",null,"省略imagePullPolicy，镜像标签为:latest或被省略，Always被应用。 imagePullPolicy被省略，并且镜像的标签被指定且不是:latest，IfNotPresent被应用。 imagePullPolicy: Never：镜像被假设存在于本地。 没有尝试拉取镜像。",-1),fx=s("h1",{id:"_7-3-第三步：使用controllers管理pod",tabindex:"-1"},[n("7.3 第三步：使用Controllers管理Pod "),s("a",{class:"header-anchor",href:"#_7-3-第三步：使用controllers管理pod","aria-hidden":"true"},"#")],-1),Sx=s("p",null,"在实际的生产环境中，我们其实很少单独创建Pod，而是通过控制器来进行Pod的管理，Kubernetes提供了很多的控制器，一个 Controllers 可以创建和管理很多个 Pod, 也提供复制、初始化，以及提供集群范围的自我恢复的功能。比如说： 如果一个节点宕机，Controller 将调度一个在其他节点上完全相同的 pod 来自动取代当前的 pod。",-1),Ex=s("h1",{id:"_8-1-replication-controller控制器",tabindex:"-1"},[n("8.1 Replication Controller控制器 "),s("a",{class:"header-anchor",href:"#_8-1-replication-controller控制器","aria-hidden":"true"},"#")],-1),Px=s("h1",{id:"_8-2-replica-sets控制器",tabindex:"-1"},[n("8.2 Replica Sets控制器 "),s("a",{class:"header-anchor",href:"#_8-2-replica-sets控制器","aria-hidden":"true"},"#")],-1),Nx=s("h1",{id:"_8-3-deployment控制器",tabindex:"-1"},[n("8.3 Deployment控制器 "),s("a",{class:"header-anchor",href:"#_8-3-deployment控制器","aria-hidden":"true"},"#")],-1),Rx=s("h1",{id:"_8-4-daemonset控制器",tabindex:"-1"},[n("8.4 DaemonSet控制器 "),s("a",{class:"header-anchor",href:"#_8-4-daemonset控制器","aria-hidden":"true"},"#")],-1),Tx=s("p",null,"DaemonSet 确保全部（或者一些）Node 上运行一个 Pod 的副本。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。 使用 DaemonSet 的一些典型用法：",-1),Ix=s("ul",null,[s("li",null,"运行集群存储 daemon，例如在每个 Node 上运行 glusterd、ceph。"),s("li",null,"在每个 Node 上运行日志收集 daemon，例如filebeat、logstash。"),s("li",null,"在每个 Node 上运行监控 daemon，例如 Prometheus Node Exporter、collectd、Datadog 代理、Zabbix Agent。")],-1),Ox=s("p",null,[s("strong",null,"创建DaemonSet")],-1),Mx=s("p",null,"DaemonSet的描述文件和Deployment非常相似，只需要修改Kind，并去掉副本数量的配置即可",-1),wx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 example]# vim nginx-daemonset.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: DaemonSet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-daemonset")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Kx=s("p",null,"查看Pod在Node上的分布",-1),Lx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod -o wide")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                    READY     STATUS    RESTARTS   AGE       IP           NODE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-daemonset-hk28q   1/1       Running   0          1m        10.2.56.10   192.168.56.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-daemonset-wtt68   1/1       Running   0          1m        10.2.53.10   192.168.56.13")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get daemonset")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME              DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-daemonset   2         2         2         2            2           <none>          1m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ux=s("h1",{id:"_7-4-第四步：使用service管理pod访问",tabindex:"-1"},[n("7.4 第四步：使用Service管理Pod访问 "),s("a",{class:"header-anchor",href:"#_7-4-第四步：使用service管理pod访问","aria-hidden":"true"},"#")],-1),jx=s("p",null,"在上面的小节，我们通过Deployment可以为一个应用创建多个Pod，而且可以动态的进行增加、或者删除多余的Pod，Kubernetes Pod 是有生命周期的，它们可以被创建，也可以被销毁，但是每次Pod的IP地址就会发生变化，外面如何访问到该Pod呢？总不能每次Pod重启就修改访问的IP地址吧。 每个 Pod 都会获取它自己的 IP 地址，但是每次即使这些 IP 地址不总是稳定可依赖的。 这会导致一个问题：在 Kubernetes 集群中，如果一组 Pod（称为 backend）为其它 Pod （称为 frontend）提供服务，那么那些 frontend 该如何发现，并连接到这组 Pod 中的哪些 backend 呢？",-1),Gx=s("h1",{id:"_9-1-service介绍和管理",tabindex:"-1"},[n("9.1 Service介绍和管理 "),s("a",{class:"header-anchor",href:"#_9-1-service介绍和管理","aria-hidden":"true"},"#")],-1),Hx=s("h3",{id:"创建service",tabindex:"-1"},[n("创建Service "),s("a",{class:"header-anchor",href:"#创建service","aria-hidden":"true"},"#")],-1),Fx=s("p",null,"继续我们Nginx的案例，我们为之前的应用创建一个Service",-1),Vx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat nginx-service.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - protocol: TCP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Bx=s("ul",null,[s("li",null,"第1行：定义资源类型为Service"),s("li",null,"第2行：定义当前Service API的版本"),s("li",null,"第3行：metadata设置"),s("li",null,"第4行：设置Service的名称为nginx-service"),s("li",null,"第5行：spec: 开始设置Service的内容"),s("li",null,"第6行：selector: 为该Service指定一个匹配的标签"),s("li",null,"第7行：app: nginx 所有带有标签app ：nginx的Pod将使用该Service"),s("li",null,"第8行：ports: 指定Service需要对外的端口"),s("li",null,"第9行：设置端口协议：支持TCP和UDP"),s("li",null,"第10行：设置Service的端口"),s("li",null,"第11行：设置Pod的端口，Kubernetes会将发送给Service端口的连接，转发到Pod的端口上。")],-1),qx=s("p",null,"创建Nginx Service",-1),Yx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nginx-service.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'service "nginx-service" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),zx=s("p",null,"查看Nginx Service",-1),$x=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes      ClusterIP   10.1.0.1      <none>        443/TCP   7h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-service   ClusterIP   10.1.184.53   <none>        80/TCP    25s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Xx=s("p",null,"访问Servce IP",-1),Jx=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# curl --head 10.1.181.45")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"HTTP/1.1 200 OK")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Server: nginx/1.11.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Date: Tue, 21 Feb 2017 08:20:42 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Type: text/html")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Content-Length: 612")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Last-Modified: Tue, 14 Feb 2017 15:36:04 GMT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Connection: keep-alive")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ETag: "58a323e4-264"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Accept-Ranges: bytes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Wx=s("h1",{id:"_9-2-service和endpoint",tabindex:"-1"},[n("9.2 Service和Endpoint "),s("a",{class:"header-anchor",href:"#_9-2-service和endpoint","aria-hidden":"true"},"#")],-1),Qx=s("p",null,"Service作为Kubernetes中为Pod实现负载均衡的组件，几乎在所有的文章中为了方便初学者理解，基本上说的是Service会来监听Pod的变化，然后来更新Pod的IP地址。其实这个事情不是Service干的，而是有一个幕后英雄：Endpoint Endpoints表示了一个Service对应的所有Pod副本的访问地址，而Endpoints Controller负责生成和维护所有Endpoints对象的控制器。它负责监听Service和对应的Pod副本的变化。",-1),Zx=s("ul",null,[s("li",null,"如果监测到Service被删除，则删除和该Service同名的Endpoints对象；"),s("li",null,"如果监测到新的Service被创建或修改，则根据该Service信息获得相关的Pod列表，然后创建或更新Service对应的Endpoints对象。"),s("li",null,"如果监测到Pod的事件，则更新它对应的Service的Endpoints对象。")],-1),sf=s("p",null,"kube-proxy进程获取每个Service的Endpoints，实现Service的负载均衡功能。",-1),nf=s("h3",{id:"创建一个headless-service",tabindex:"-1"},[n("创建一个Headless Service "),s("a",{class:"header-anchor",href:"#创建一个headless-service","aria-hidden":"true"},"#")],-1),lf=s("p",null,"编写一个Service不使用clusterip",-1),ef=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat mysql-service.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: mysql-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - protocol: TCP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    port: 3306")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    targetPort: 3306")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  clusterIP: None")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f mysql-service.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'service "mysql-service" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),of=s("p",null,"查看Service，可以放心CLUSTER-IP为None",-1),af=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get service mysql-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mysql-service   ClusterIP   None         <none>        3306/TCP   17s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),tf=s("p",null,"2.创建一个Endpoint",-1),cf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim mysql-endpoint.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Endpoints")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," name: mysql-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subsets:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- addresses:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - ip: 192.168.56.13")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - port: 3306")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    protocol: TCP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f mysql-endpoint.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'endpoints "mysql-service" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rf=s("p",null,"3.查看Service和Endpoint的关联",-1),pf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get ep mysql-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            ENDPOINTS            AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mysql-service   192.168.56.13:3306   42s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe svc mysql-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:              mysql-service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:         default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:            <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:       <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Selector:          <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type:              ClusterIP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"IP:                None")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Port:              <unset>  3306/TCP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"TargetPort:        3306/TCP")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Endpoints:         192.168.56.13:3306")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Session Affinity:  None")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:            <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),df=s("h1",{id:"_7-5-第五步：使用ingress提供外部访问",tabindex:"-1"},[n("7.5 第五步：使用Ingress提供外部访问 "),s("a",{class:"header-anchor",href:"#_7-5-第五步：使用ingress提供外部访问","aria-hidden":"true"},"#")],-1),Af=s("p",null,"通过Service可以将Kubernetes集群中的服务以IP：Port的方式暴露出来，我们称之为4层的负载均衡，因为这个是OSI七层模型中传输层的功能。",-1),Cf=s("p",null,"那么如何实现七层的负载均衡呢，例如像Nginx那样，可以灵活的进行反向代理的设置，根据不同的URL进行转发等，难道我需要自己部署一个Nginx来做这个事情吗？首先，如果你有这个想法，并没有错，甚至你完全可以自己独立部署一个Nginx来完成，但是Kubernetes提供了更好的解决方案就是Ingress。 Ingress就是从kubernetes集群外访问集群的入口，将用户的URL请求转发到不同的service上。ingress相当于nginx反向代理服务器，它包括的规则定义就是URL的路由信息。",-1),uf=s("h2",{id:"_10-1-ingress-controller",tabindex:"-1"},[n("10.1 Ingress Controller "),s("a",{class:"header-anchor",href:"#_10-1-ingress-controller","aria-hidden":"true"},"#")],-1),yf=s("p",null,"在学习Service的时候，我们知道最终的负载均衡由kube-proxy和LVS来完成，那么Ingress靠什么来实现7层的路由机制呢？答案是Ingress Controller。",-1),hf=s("p",null,"Ingress Controller 实质上可以理解为是个监视器，Ingress Controller 通过不断地跟 kubernetes API 打交道，实时的感知后端 service、pod 等变化，比如新增和减少 pod，service 增加与减少等；当得到这些变化信息后，Ingress Controller 再结合下文的 Ingress 生成配置，然后更新反向代理负载均衡器，并刷新其配置，达到服务发现的作用。",-1),_f=s("p",null,"Ingress Controller目前有两大开源项目，一个是Nginx Controller，一个是目前比较流行的Traefik，Traefik是一款开源的反向代理与负载均衡工具。它最大的优点是能够与常见的微服务系统直接整合，可以实现自动化动态配置。目前支持Docker, Swarm, Mesos/Marathon, Mesos, Kubernetes, Consul, Etcd, Zookeeper, BoltDB, Rest API等等后端模型。",-1),Df=s("h2",{id:"ingress-controller-traefik",tabindex:"-1"},[n("Ingress Controller Traefik "),s("a",{class:"header-anchor",href:"#ingress-controller-traefik","aria-hidden":"true"},"#")],-1),gf=s("h3",{id:"部署treafik",tabindex:"-1"},[n("部署Treafik "),s("a",{class:"header-anchor",href:"#部署treafik","aria-hidden":"true"},"#")],-1),mf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl label nodes 192.168.56.12 edgenode=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'node "192.168.56.12" labeled')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f /srv/addons/ingress/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),bf=s("h1",{id:"_11-第六步：使用pv和pvc管理数据存储",tabindex:"-1"},[n("11 第六步：使用PV和PVC管理数据存储 "),s("a",{class:"header-anchor",href:"#_11-第六步：使用pv和pvc管理数据存储","aria-hidden":"true"},"#")],-1),kf=s("p",null,"截止目前我们所启动Pod的容器中的数据存储都是临时的，因此Pod重启或者被删除的时候，产生在容器中的数据会发生丢失。实际应用中，我们有些应用是无状态，有些应用则需要保持状态数据，确保Pod重启之后能够读取到之前的状态数据，有些应用则作为集群提供服务。这三种服务归纳为无状态服务、有状态服务以及有状态的集群服务，其中后面两个存在数据保存与共享的需求，因此就要采用容器外的存储方案。 Kubernetes中存储中有四个重要的概念：Volume、PersistentVolume（PV）、PersistentVolumeClaim （PVC）、StorageClass。掌握了这四个概念，就掌握了Kubernetes中存储系统的核心。",-1),vf=s("h1",{id:"_11-1-kubernetes-volume",tabindex:"-1"},[n("11.1 Kubernetes Volume "),s("a",{class:"header-anchor",href:"#_11-1-kubernetes-volume","aria-hidden":"true"},"#")],-1),xf=s("h1",{id:"_11-2-persistentvolume（pv）",tabindex:"-1"},[n("11.2 PersistentVolume（PV） "),s("a",{class:"header-anchor",href:"#_11-2-persistentvolume（pv）","aria-hidden":"true"},"#")],-1),ff=s("p",null,"PersistentVolume（PV）是由管理员设置的存储，它是群集的一部分。就像节点是集群中的资源一样，PV 也是集群中的资源。 PV 是 Volume 之类的卷插件，但具有独立于使用 PV 的 Pod 的生命周期。此 API 对象包含存储实现的细节，即 NFS、iSCSI 或特定于云供应商的存储系统。",-1),Sf=s("p",null,[s("strong",null,"1.安装并配置NFS")],-1),Ef=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y nfs-utils rpcbind")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir -p /data/k8s-nfs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/exports")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/data/k8s-nfs *(rw,sync,no_root_squash)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Pf=s("p",null,"启动NFS",-1),Nf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable rpcbind nfs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start rpcbind nfs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Rf=s("p",null,[s("strong",null,"2.创建并查看PV")],-1),Tf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nfs-pv.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: PersistentVolume")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: pv-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  capacity:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"storage: 1Gi")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  volumeMode: Filesystem")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  accessModes:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - ReadWriteOnce")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  persistentVolumeReclaimPolicy: Recycle")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  storageClassName: nfs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  nfs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    path: /data/k8s-nfs/pv-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    server: 192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nfs-pv.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'persistentvolume "pv-demo" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),If=s("p",null,"查看创建的PV",-1),Of=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pv")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM     STORAGECLASS   REASON    AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pv-demo   1Gi        RWO            Recycle          Available             nfs                      15s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Mf=s("h1",{id:"_11-3-persistentvolumeclaim（pvc）",tabindex:"-1"},[n("11.3 PersistentVolumeClaim（PVC） "),s("a",{class:"header-anchor",href:"#_11-3-persistentvolumeclaim（pvc）","aria-hidden":"true"},"#")],-1),wf=s("p",null,"PersistentVolumeClaim（PVC）是用户存储的请求。它与 Pod 相似。Pod 消耗节点资源，PVC 消耗 PV 资源。Pod 可以请求特定级别的资源（CPU 和内存）。声明可以请求特定的大小和访问模式（例如，可以以读/写一次或 只读多次模式挂载）。",-1),Kf=s("p",null,"1.创建PVC",-1),Lf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nfs-pvc.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: PersistentVolumeClaim")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: pvc-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  accessModes:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - ReadWriteOnce")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  resources:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    requests:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      storage: 1Gi")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  storageClassName: nfs")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Uf=s("p",null,"创建并查看PVC",-1),jf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl create -f nfs-pvc.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'persistentvolumeclaim "pvc-demo" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pvc")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME       STATUS    VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pvc-demo   Bound     pv-demo   1Gi        RWO            nfs            6s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Gf=s("p",null,"2.使用PVC",-1),Hf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim nginx-deployment-pvc.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  replicas: 3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        volumeMounts:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'        - mountPath: "/usr/share/nginx/html"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          name: pvc-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      volumes:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: pvc-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        persistentVolumeClaim:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"          claimName: pvc-demo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Ff=s("h1",{id:"_11-4-storageclass",tabindex:"-1"},[n("11.4 StorageClass "),s("a",{class:"header-anchor",href:"#_11-4-storageclass","aria-hidden":"true"},"#")],-1),Vf=s("h1",{id:"_7-第七步：使用rancher管理kubernetes集群",tabindex:"-1"},[n("7 第七步：使用Rancher管理Kubernetes集群 "),s("a",{class:"header-anchor",href:"#_7-第七步：使用rancher管理kubernetes集群","aria-hidden":"true"},"#")],-1),Bf=s("p",null,"现在我们已经具备把应用迁移到Kubernetes中来的能力，那么现在，迁移后，日常的运维工作就发生的变化，截止目前，在生产环境中，我们很少使用官方自带的Dashbaord来完成日常的运维工作，而是使用第三方的运维工具Rancher。",-1),qf=s("h2",{id:"_7-1-rancher快速入门",tabindex:"-1"},[n("7.1 Rancher快速入门 "),s("a",{class:"header-anchor",href:"#_7-1-rancher快速入门","aria-hidden":"true"},"#")],-1),Yf=s("p",null,"快速部署单机版Rancher",-1),zf=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# mkdir /opt/rancher")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher/ -p 80:80 -p 443:443 rancher/rancher")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$f=s("h2",{id:"_7-2-使用rancher进行日常管理",tabindex:"-1"},[n("7.2 使用Rancher进行日常管理 "),s("a",{class:"header-anchor",href:"#_7-2-使用rancher进行日常管理","aria-hidden":"true"},"#")],-1),Xf=s("h2",{id:"_7-3-rancher生产集群部署",tabindex:"-1"},[n("7.3 Rancher生产集群部署 "),s("a",{class:"header-anchor",href:"#_7-3-rancher生产集群部署","aria-hidden":"true"},"#")],-1),Jf=s("h1",{id:"第六部分-管理kubernetes中的应用",tabindex:"-1"},[n("第六部分 管理Kubernetes中的应用 "),s("a",{class:"header-anchor",href:"#第六部分-管理kubernetes中的应用","aria-hidden":"true"},"#")],-1),Wf=s("h1",{id:"_13-应用的资源限制和健康检查",tabindex:"-1"},[n("13 应用的资源限制和健康检查 "),s("a",{class:"header-anchor",href:"#_13-应用的资源限制和健康检查","aria-hidden":"true"},"#")],-1),Qf=s("h1",{id:"_13-1-应用的资源限制",tabindex:"-1"},[n("13.1 应用的资源限制 "),s("a",{class:"header-anchor",href:"#_13-1-应用的资源限制","aria-hidden":"true"},"#")],-1),Zf=s("h1",{id:"_13-2-应用的健康检查",tabindex:"-1"},[n("13.2 应用的健康检查 "),s("a",{class:"header-anchor",href:"#_13-2-应用的健康检查","aria-hidden":"true"},"#")],-1),s8=s("h3",{id:"liveness探测",tabindex:"-1"},[n("Liveness探测 "),s("a",{class:"header-anchor",href:"#liveness探测","aria-hidden":"true"},"#")],-1),n8=s("p",null,"Kubernetes有两种探测机制，Liveness和Readiness，配置都是相似的，只是实现的功能不同。 Liveness探测是针对Pod健康状态的探测，类似于集群中的健康检查，用户可以自定义这个健康检查的条件，如果探测失败，Kubernetes将会重启容器。 如果您希望容器在探测失败时被杀死并重新启动，那么请指定一个Liveness配置，并指定restartPolicy 为 Always 或 OnFailure。 配置案例",-1),l8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"livenessProbe:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"exec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    command:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - ps aux | grep nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"initialDelaySeconds: 10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"periodSeconds: 5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"timeoutSeconds: 3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),e8=s("h3",{id:"readiness探测",tabindex:"-1"},[n("Readiness探测 "),s("a",{class:"header-anchor",href:"#readiness探测","aria-hidden":"true"},"#")],-1),o8=s("p",null,"Readiness探测是探测Pod是否准备好对外提供访问，例如我们在Pod里面运行一个Tomcat的容器，里面运行了一个Jenkins的应用，那么等Jenkins完全启动能提供服务可能需要1分钟，所以在在1分钟之前是不能提供给用户访问的，也就是不能加入Service的负载均衡中，这个就靠Readiness探测来控制。 Readiness用来控制告诉Kubernetes什么时间可以将容器加入到Service的负载均衡中，配置方法和Liveness一样，只需要修改livennessProbe替换为readinessProbe即可。",-1),a8=s("h2",{id:"健康检查的方法",tabindex:"-1"},[n("健康检查的方法 "),s("a",{class:"header-anchor",href:"#健康检查的方法","aria-hidden":"true"},"#")],-1),t8=s("p",null,"Kubernetes的健康检查是由运行在各个Node上的kubelet来完成的，kubelet目前支持以下三种健康检查的方法：",-1),c8=s("ul",null,[s("li",null,"ExecAction：在容器中执行指定的命令。如果命令退出时状态码为0，则认为诊断成功。"),s("li",null,"TCPSocketAction:对指定端口上容器的IP地址执行TCP检查。如果端口是打开的，则认为诊断是成功的。"),s("li",null,"HTTPGetAction:对指定端口和路径上容器的IP地址执行HTTP Get请求。如果响应的状态码大于或等于200，小于400，则认为诊断是成功的。")],-1),i8=s("p",null,"以上三种健康检查的方法会有三种返回结果：",-1),r8=s("ul",null,[s("li",null,[s("p",null,"Success：成功，容器通过诊断。")]),s("li",null,[s("p",null,"Failure：失败，容器诊断失败。")]),s("li",null,[s("p",null,"Unknown：探测失败，无法执行探测，所以不应该采取任何行动。"),s("p",null,"针对于探针有以下配置参数，需要注意不管是Liveness还是Readiness探测，探针的使用都是相同的，唯一的不同是探测完毕后，执行操作的不同。")]),s("li",null,[s("p",null,"initialDelaySeconds: 探测的延迟时间，单位是秒。也就是说在容器启动多少秒之后开始进行第一次探测，例如你启动一个Java的应用需要50秒，那么这个值就需要大于50s。所以这个值是需要根据应用的具体情况来设置。")]),s("li",null,[s("p",null,"periodSeconds：探测执行的周期时间，单位是秒。是指每隔多长时间执行一次探测，频率越高，发现故障的时间也就越短，并不是越短越好。如果应用服务不够稳定，太高的频率反而会导致很多你认为的“误报”。默认是10秒，最小值是1秒。")]),s("li",null,[s("p",null,"timeoutSeconds: 探测超时时间，单位是秒，执行探测如果超过这个时间没有返回结果，变意味着探测的结果是失败。默认为1秒。最小值是1秒。")]),s("li",null,[s("p",null,"failureThreshold：探测成功后，最少连续探测失败多少次才被认定为失败。这个是Kubernetes将在放弃之前尝试失败阈值时间。放弃生命探测意味着重新启动Pod。一旦准备就绪，Pod将被标记为未准备就绪。默认为3。最小值是1。")]),s("li",null,[s("p",null,"successThreshold: 在探测失败后，最少连续探测成功多少次才被认定为成功。默认为1，也就是必须探测成功1次，才能认为状态恢复，最小值是1。"),s("h1",{id:"管理应用的dns访问",tabindex:"-1"},[n("管理应用的DNS访问 "),s("a",{class:"header-anchor",href:"#管理应用的dns访问","aria-hidden":"true"},"#")])])],-1),p8=s("h1",{id:"_14-1-kubernetes中的dns",tabindex:"-1"},[s("a",{href:"http://k8s.unixhot.com/",target:"_blank",rel:"noreferrer"},"14.1 Kubernetes中的DNS"),n(),s("a",{class:"header-anchor",href:"#_14-1-kubernetes中的dns","aria-hidden":"true"},"#")],-1),d8=s("h1",{id:"应用的dns管理",tabindex:"-1"},[n("应用的DNS管理 "),s("a",{class:"header-anchor",href:"#应用的dns管理","aria-hidden":"true"},"#")],-1),A8=s("h3",{id:"pod的域名解析策略",tabindex:"-1"},[n("Pod的域名解析策略 "),s("a",{class:"header-anchor",href:"#pod的域名解析策略","aria-hidden":"true"},"#")],-1),C8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl run dns-test --generator=run-pod/v1 --image=alpine --replicas=1 sleep 360000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"pod/dns-test created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),u8=s("p",null,"查看Pod",-1),y8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod dns-test")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME       READY   STATUS    RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns-test   1/1     Running   0          79s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),h8=s("p",null,"Pod默认的DNS配置",-1),_8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl exec -it dns-test /bin/sh")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/ # cat /etc/resolv.conf ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nameserver 10.1.0.10")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"search default.svc.cluster.local svc.cluster.local cluster.local")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"options ndots:5")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),D8=s("p",null,"如何访问Service名称",-1),g8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/ # ping -c 3 wordpress-service.default.svc.cluster.local")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"PING wordpress-service.default.svc.cluster.local (10.1.92.244): 56 data bytes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 10.1.92.244: seq=0 ttl=64 time=0.074 ms")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 10.1.92.244: seq=1 ttl=64 time=0.141 ms")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"64 bytes from 10.1.92.244: seq=2 ttl=64 time=0.187 ms")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--- wordpress-service.default.svc.cluster.local ping statistics ---")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3 packets transmitted, 3 packets received, 0% packet loss")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"round-trip min/avg/max = 0.074/0.134/0.187 ms")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),m8=s("p",null,"DNS查询策略",-1),b8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod dns-test -o yaml | grep dnsPolicy")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  dnsPolicy: ClusterFirst")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),k8=s("ul",null,[s("li",null,"Default: Pod从其运行的节点中继承名称解析配置。"),s("li",null,"ClusterFirst:（默认策略）与配置的群集域名后缀不匹配的任何DNS查询都将转发到从节点继承的上游名称服务器。"),s("li",null,"ClusterFirstWithHostNet: 如果Pod使用了hostNetwork（例如Ingress Controller Treafik就是使用了hostNetwok），应显式设置其DNS策略为“ClusterFirstWithHostNet”。"),s("li",null,"None: 它允许Pod忽略Kubernetes环境中的DNS设置，这时候会使用Pod Spec中的dnsConfig字段提供的DNS设置。")],-1),v8=s("h2",{id:"应用的dns管理-1",tabindex:"-1"},[n("应用的DNS管理 "),s("a",{class:"header-anchor",href:"#应用的dns管理-1","aria-hidden":"true"},"#")],-1),x8=s("h2",{id:"_15-1-使用configmap管理应用配置",tabindex:"-1"},[n("15.1 使用ConfigMap管理应用配置 "),s("a",{class:"header-anchor",href:"#_15-1-使用configmap管理应用配置","aria-hidden":"true"},"#")],-1),f8=s("h3",{id:"通过kubectl命令创建configmap",tabindex:"-1"},[n("通过kubectl命令创建ConfigMap "),s("a",{class:"header-anchor",href:"#通过kubectl命令创建configmap","aria-hidden":"true"},"#")],-1),S8=s("p",null,[s("strong",null,"创建一个名称为cmd-config的ConfigMap")],-1),E8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap cmd-config --from-literal=host=www.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/cmd-config created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),P8=s("p",null,[s("strong",null,"查看ConfigMap")],-1),N8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME         DATA   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cmd-config   1      63s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),R8=s("p",null,[s("strong",null,"查看ConfigMap内容")],-1),T8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe configmap cmd-config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         cmd-config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"====")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"host:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"----")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"www.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),I8=s("p",null,[s("strong",null,"ConfigMap中包含多个键值对"),n(" 可以多次使用--from-literal为一个ConfigMap创建多个键值对，中间用空格分隔")],-1),O8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap mcmd-config --from-literal=host=www.unixhot.com --from-literal=port=443 --from-literal=ssl=on")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/mcmd-config created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),M8=s("h3",{id:"通过yaml文件创建configmap",tabindex:"-1"},[n("通过YAML文件创建ConfigMap "),s("a",{class:"header-anchor",href:"#通过yaml文件创建configmap","aria-hidden":"true"},"#")],-1),w8=s("p",null,"查看已创建的ConfigMap生成的YAML文件",-1),K8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  host: www.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  port: "443"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  ssl: "on"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ConfigMap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  creationTimestamp: "2019-11-05T01:45:13Z"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: mcmd-config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  resourceVersion: "5394993"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selfLink: /api/v1/namespaces/default/configmaps/mcmd-config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  uid: 02012d69-e324-4e9d-ba04-7132e9f6ecd8")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),L8=s("p",null,"只需要将metadata中无需指定的字段去掉即可生成一个YAML文件。",-1),U8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap mcmd-config -o yaml > mcmd-config-v2.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# vim mcmd-config-v2.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  host: www.unixhot.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  port: "443"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  ssl: "on"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: ConfigMap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: mcmd-config-v2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),j8=s("p",null,[s("a",{href:"http://xn--metadata-0n3mp82lcujlhxj58f8qvb.name",target:"_blank",rel:"noreferrer"},"注意需要修改metadata.name"),n(",修改完毕后直接创建即可")],-1),G8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create -f mcmd-config-v2.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/mcmd-config-v2 created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get configmap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME             DATA   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"cmd-config       1      24m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mcmd-config      3      16m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"mcmd-config-v2   3      9s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H8=s("h3",{id:"通过文件创建configmap",tabindex:"-1"},[n("通过文件创建ConfigMap "),s("a",{class:"header-anchor",href:"#通过文件创建configmap","aria-hidden":"true"},"#")],-1),F8=s("p",null,"ConfigMap除了可以存储单个或者多个键值对之外，可以存储完整的配置文件，将单个配置文件直接转换为ConfigMap在生产中十分常用",-1),V8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap file-config --from-file=/etc/hosts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/file-config created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),B8=s("p",null,"可以看到ConfigMap直接存储了文件的内容，Key名称为文件名hosts，也可以手动指定Key的名称。",-1),q8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe configmap file-config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         file-config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"====")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"hosts:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"----")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"::1         localhost localhost.localdomain localhost6 localhost6.localdomain6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.27 k8s-master1 k8s-master1.dianjoy.com ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.28 k8s-master2 k8s-master2.dianjoy.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.29 k8s-master3 k8s-master3.dianjoy.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y8=s("p",null,"将Key手动指定为host-hosts",-1),z8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap file-config-v2 --from-file=host-hosts=/etc/hosts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/file-config-v2 created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe configmap file-config-v2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Name:         file-config-v2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Namespace:    default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Labels:       <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Annotations:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Data")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"====")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"host-hosts:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"----")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"::1         localhost localhost.localdomain localhost6 localhost6.localdomain6")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.27 k8s-master1 k8s-master1.dianjoy.com ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.28 k8s-master2 k8s-master2.dianjoy.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"192.168.99.29 k8s-master3 k8s-master3.dianjoy.com")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Events:  <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$8=s("h3",{id:"从目录创建configmap",tabindex:"-1"},[n("从目录创建ConfigMap "),s("a",{class:"header-anchor",href:"#从目录创建configmap","aria-hidden":"true"},"#")],-1),X8=s("p",null,"ConfigMap还支持通过目录创建，kubectl会为目录中的每个文件单独创建条目，需要注意的是如果目录下面包含子目录，会忽略这些子目录和子目录里面的内容。",-1),J8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap dir-config --from-file=/etc/kubernetes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/dir-config created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W8=s("h3",{id:"混合选项创建configmap",tabindex:"-1"},[n("混合选项创建ConfigMap "),s("a",{class:"header-anchor",href:"#混合选项创建configmap","aria-hidden":"true"},"#")],-1),Q8=s("p",null,"同时使用命令行、文件、目录创建ConfigMap也是支持的，只需要使用不同的选项即可。",-1),Z8=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl create configmap mycp --from-literal=env=test \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --from-file=/etc/hosts \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --from-file=myhosts=/etc/hosts \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," --from-file=/etc/kubernetes")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"configmap/mycp created")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),s4=s("p",null,"ConfigMap的内容可以通过环境变量的形成传递给容器，也可通过和Volume的形式挂载到容器中。",-1),n4=s("h3",{id:"通过环境变量给容器传递configmap",tabindex:"-1"},[n("通过环境变量给容器传递ConfigMap "),s("a",{class:"header-anchor",href:"#通过环境变量给容器传递configmap","aria-hidden":"true"},"#")],-1),l4=s("p",null,"可以将ConfigMap中的键值对数据通过环境变量的形式传递到容器中，这样在配置容器的时候有一些数据可以使用环境变量，然后使用ConfigMap进行填充，这样就可以实现配置和Pod的分离。",-1),e4=s("h2",{id:"_15-2-使用secret管理敏感数据",tabindex:"-1"},[n("15.2 使用Secret管理敏感数据 "),s("a",{class:"header-anchor",href:"#_15-2-使用secret管理敏感数据","aria-hidden":"true"},"#")],-1),o4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"在应用启动过程中经常会有一些敏感信息需要存储，例如用户名和密码等，如果直接明文的方式保存会有安全风险。在Kubernetes中Secret这个资源对象类型用来保存敏感信息，例如密码、密钥、访问令牌、SSH Key等你认为需要保密的敏感信息。相对于将这些内容保存到容器镜像或者Pod的定义文件中，更加的灵活和安全。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),a4=s("h3",{id:"配置pod使用harbor镜像",tabindex:"-1"},[n("配置Pod使用Harbor镜像 "),s("a",{class:"header-anchor",href:"#配置pod使用harbor镜像","aria-hidden":"true"},"#")],-1),t4=s("p",null,"1．docker login得到 docker密码文件",-1),c4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# docker login 192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),i4=s("p",null,"2.对密码文件进行加密",-1),r4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cat /root/.docker/config.json |base64")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),p4=s("p",null,"3.创建harbor使用的Secret YAML文件：",-1),d4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim harbor-secret.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: harbor-secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"data:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  .dockerconfigjson: 'ewoJImF1dGhzIjogewoJCSJyZWcuZ3JlYXRvcHMubmV0IjogewoJCQkiYXV0aCI6ICJZV1J0YVc0Nk1YRmhlbmh6ZHpJPSIKCQl9Cgl9Cn0='")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"type: kubernetes.io/dockerconfigjson")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),A4=s("p",null,"4.创建Secret",-1),C4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@jenkins k8s-deploy]# kubectl create -f reg-harbor.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'secret "reg-harbor" created')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),u4=s("p",null,"5.创建pod并挂载资源",-1),y4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: sectest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - name: sectest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    image: 123.207.154.16/base/redis:alpine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - containerPort: 6379")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  imagePullSecrets:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - name: harbor-secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),h4=s("h1",{id:"使用helm管理kubernetes应用",tabindex:"-1"},[n("使用Helm管理Kubernetes应用 "),s("a",{class:"header-anchor",href:"#使用helm管理kubernetes应用","aria-hidden":"true"},"#")],-1),_4=s("p",null,"通过前面的学习，掌握了将应用迁移至Kubernetes的步骤和技巧，过程比较艰辛。例如我们创建一个应用，涉及到Deployment、Service、Ingress、PV、PVC，如何有效的管理这些资源呢，Kubernetes给出了一个最佳实践就是Helm。 Helm是一个kubernetes应用的包管理工具，用来管理charts——预先配置好的安装包资源，有点类似于Ubuntu的APT和CentOS中的yum。 Helm chart是用来封装kubernetes原生应用程序的yaml文件，可以在你部署应用的时候自定义应用程序的一些metadata，便与应用程序的分发。",-1),D4=s("p",null,"Helm和charts的主要作用：",-1),g4=s("ul",null,[s("li",null,"应用程序封装"),s("li",null,"版本管理"),s("li",null,"依赖检查"),s("li",null,"便于应用程序分发")],-1),m4=s("h2",{id:"helm部署",tabindex:"-1"},[n("Helm部署 "),s("a",{class:"header-anchor",href:"#helm部署","aria-hidden":"true"},"#")],-1),b4=s("h3",{id:"安装helm",tabindex:"-1"},[n("安装Helm "),s("a",{class:"header-anchor",href:"#安装helm","aria-hidden":"true"},"#")],-1),k4=s("p",null,"1.部署Helm客户端",-1),v4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget https://get.helm.sh/helm-v3.0.2-linux-amd64.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# tar zxf helm-v3.0.2-linux-amd64.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# mv linux-amd64/helm /usr/local/bin/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),x4=s("p",null,"2.验证安装是否成功",-1),f4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm version")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'version.BuildInfo{Version:"v3.0.2", GitCommit:"19e47ee3283ae98139d98460de796c1be1e3975f", GitTreeState:"clean", GoVersion:"go1.13.5"}')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),S4=s("h3",{id:"使用helm部署第一个应用",tabindex:"-1"},[n("使用Helm部署第一个应用 "),s("a",{class:"header-anchor",href:"#使用helm部署第一个应用","aria-hidden":"true"},"#")],-1),E4=s("p",null,"4.搜索Helm应用",-1),P4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm search jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME              CHART VERSION    APP VERSION    DESCRIPTION                                       ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stable/jenkins    0.13.5           2.73           Open source continuous integration server. It s...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),N4=s("p",null,"5.查看仓库",-1),R4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm repo list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME      URL                                                   ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"stable    https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"local     http://127.0.0.1:8879/charts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T4=s("p",null,"6.安装第一个应用",-1),I4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm install stable/jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME:   viable-seal")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LAST DEPLOYED: Thu Jul 26 19:21:07 2018")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAMESPACE: default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"STATUS: DEPLOYED")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RESOURCES:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/ConfigMap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                       DATA  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins        3     1s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins-tests  1     1s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/PersistentVolumeClaim")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                 STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins  Pending  1s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                       TYPE          CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins-agent  ClusterIP     10.1.154.54  <none>       50000/TCP       1s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins        LoadBalancer  10.1.63.24   <pending>    8080:20031/TCP  0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1beta1/Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                 DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins  1        1        1           0          0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Pod(related)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                  READY  STATUS   RESTARTS  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins-7f5c7bd8d4-gc5hv  0/1    Pending  0         0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                 TYPE    DATA  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal-jenkins  Opaque  2     1s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NOTES:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1. Get your 'admin' user password by running:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  printf $(kubectl get secret --namespace default viable-seal-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2. Get the Jenkins URL to visit by running these commands in the same shell:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  NOTE: It may take a few minutes for the LoadBalancer IP to be available.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        You can watch the status of by running 'kubectl get svc --namespace default -w viable-seal-jenkins'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  export SERVICE_IP=$(kubectl get svc --namespace default viable-seal-jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  echo http://$SERVICE_IP:8080/login")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3. Login with the password from step 1 and the username: admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"For more information on running Jenkins on Kubernetes, visit:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://cloud.google.com/solutions/jenkins-on-container-engine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),O4=s("h1",{id:"_15-2-深入理解helm",tabindex:"-1"},[n("15.2 深入理解Helm "),s("a",{class:"header-anchor",href:"#_15-2-深入理解helm","aria-hidden":"true"},"#")],-1),M4=s("h3",{id:"helm组件",tabindex:"-1"},[n("Helm组件 "),s("a",{class:"header-anchor",href:"#helm组件","aria-hidden":"true"},"#")],-1),w4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# tree ~/.helm/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/root/.helm/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── cache")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── archive")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│       └── jenkins-0.13.5.tgz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── plugins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── repository")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── cache")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   │   ├── local-index.yaml -> /root/.helm/repository/local/index.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   │   └── stable-index.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── local")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   │   └── index.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── repositories.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── starters")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"7 directories, 5 files")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),K4=s("p",null,"默认缓存的文件",-1),L4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd .helm/cache/archive/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 archive]# ls -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 16")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 12650 Jul 26 19:21 jenkins-0.13.5.tgz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 archive]# tar zxf jenkins-0.13.5.tgz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 archive]# mv jenkins ~/.helm/repository/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd ~/.helm/repository/local/jenkins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# tree")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},".")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── Chart.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── OWNERS")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── README.md")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── templates")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── config.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── _helpers.tpl")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── home-pvc.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-agent-svc.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-deployment.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-ingress.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-networkpolicy.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-master-svc.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jenkins-test.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── jobs.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── NOTES.txt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── rbac.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── secret.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── service-account.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── test-config.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── values.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 directory, 19 files")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),U4=s("h3",{id:"自定义jenkins的chart",tabindex:"-1"},[n("自定义Jenkins的Chart "),s("a",{class:"header-anchor",href:"#自定义jenkins的chart","aria-hidden":"true"},"#")],-1),j4=s("p",null,"修改为NodePort",-1),G4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 jenkins]# vim values.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ServiceType: NodePort")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),H4=s("p",null,"检查",-1),F4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm lint ~/.helm/repository/local/jenkins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> Linting /root/.helm/repository/local/jenkins/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Lint OK")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1 chart(s) linted, no failures")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),V4=s("p",null,"查看有哪些应用",-1),B4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME           REVISION    UPDATED                     STATUS      CHART          NAMESPACE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"viable-seal    1           Thu Jul 26 19:21:07 2018    DEPLOYED    jenkins-0.13.5 default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm delete --purge viable-seal")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'release "viable-seal" deleted')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm install ~/.helm/repository/local/jenkins/ --name devops-jenkins ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME:   devops-jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"LAST DEPLOYED: Thu Jul 26 19:36:10 2018")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAMESPACE: default")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"STATUS: DEPLOYED")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"RESOURCES:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Secret")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            TYPE    DATA  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins  Opaque  2     0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/ConfigMap")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                  DATA  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins        3     0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins-tests  1     0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/PersistentVolumeClaim")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            STATUS   VOLUME  CAPACITY  ACCESS MODES  STORAGECLASS  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins  Pending  0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                  TYPE       CLUSTER-IP   EXTERNAL-IP  PORT(S)         AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins-agent  ClusterIP  10.1.74.175  <none>       50000/TCP       0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins        NodePort   10.1.3.112   <none>       8080:23558/TCP  0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1beta1/Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME            DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins  1        1        1           0          0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"==> v1/Pod(related)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                            READY  STATUS   RESTARTS  AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"devops-jenkins-64d54b79c-pwjfb  0/1    Pending  0         0s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NOTES:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"1. Get your 'admin' user password by running:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  printf $(kubectl get secret --namespace default devops-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"2. Get the Jenkins URL to visit by running these commands in the same shell:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services devops-jenkins)')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  echo http://$NODE_IP:$NODE_PORT/login")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"3. Login with the password from step 1 and the username: admin")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"For more information on running Jenkins on Kubernetes, visit:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://cloud.google.com/solutions/jenkins-on-container-engine")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),q4=s("p",null,"查看状态",-1),Y4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm status devops-jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),z4=s("h2",{id:"创建自己的chart",tabindex:"-1"},[n("创建自己的Chart "),s("a",{class:"header-anchor",href:"#创建自己的chart","aria-hidden":"true"},"#")],-1),$4=s("h3",{id:"创建自定义nginx的chart",tabindex:"-1"},[n("创建自定义Nginx的Chart "),s("a",{class:"header-anchor",href:"#创建自定义nginx的chart","aria-hidden":"true"},"#")],-1),X4=s("p",null,"1.创建自定义Chart Nginx的结构",-1),J4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm create helm-nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Creating helm-nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}}," [root@linux-node1 ~]# tree helm-nginx/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"opencmdb/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── charts       #依赖的chart")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── Chart.yaml   #本chart的信息")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"├── templates    #模板目录")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── deployment.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── _helpers.tpl")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── ingress.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   ├── NOTES.txt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"│   └── service.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"└── values.yaml   #模板赋值")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),W4=s("p",null,"2.编辑Chart配置",-1),Q4=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd helm-nginx/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 helm-nginx]# vim values.yaml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Z4=s("p",null,"3.验证Chart配置，最后面的点表示当前目录",-1),s5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 helm-nginx]# helm install --dry-run --debug --name helm-nginx .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),n5=s("p",null,"4.安装自定义Chart，最后面的点表示当前目录",-1),l5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 helm-nginx]# helm install --name helm-nginx .")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),e5=s("h3",{id:"查看helm实例",tabindex:"-1"},[n("查看Helm实例 "),s("a",{class:"header-anchor",href:"#查看helm实例","aria-hidden":"true"},"#")],-1),o5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# helm list")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME          REVISION    UPDATED                     STATUS      CHART                 NAMESPACE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"helm-nginx    1           Sun Sep 16 19:32:19 2018    DEPLOYED    helm-nginx-0.1.0      default  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                          READY     STATUS    RESTARTS   AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"helm-nginx-6975f8dbcd-htvtd   1/1       Running   0          51s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get ingress")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME         HOSTS                ADDRESS   PORTS     AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"helm-nginx   www.helm-nginx.com             80        1m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),a5=s("h1",{id:"_17-应用的日志采集与分析",tabindex:"-1"},[n("17 应用的日志采集与分析 "),s("a",{class:"header-anchor",href:"#_17-应用的日志采集与分析","aria-hidden":"true"},"#")],-1),t5=s("h2",{id:"prometheus快速入门",tabindex:"-1"},[n("Prometheus快速入门 "),s("a",{class:"header-anchor",href:"#prometheus快速入门","aria-hidden":"true"},"#")],-1),c5=s("h3",{id:"prometheus架构介绍",tabindex:"-1"},[n("Prometheus架构介绍 "),s("a",{class:"header-anchor",href:"#prometheus架构介绍","aria-hidden":"true"},"#")],-1),i5=s("p",null,"在学习Prometheus之前我们需要清晰的掌握其架构，Prometheus是由多个组件组成的的监控系统，主要有：Prometheus Server、Alertmanager、Pushgateway组成，这三个组件均为独立的应用服务，独立部署和运行，其中Prometheus Server中内置了Prometheus web UI。",-1),r5=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/2ada1ece66fcc81d704c2ba46f9dd7d3.png",alt:"architecture"})],-1),p5=s("p",null,[s("strong",null,"Prometheus Server：")],-1),d5=s("p",null,"Promethedus Server是核心组件，负责数据的获取、存储、查询。Prometheus通过Pull的方式定期的从Jobs/Exporters中获取数据，并保存在内置的TSDB中；内置的Prometheus web UI可以让用户通过PromQL的方式进行数据的检索。",-1),A5=s("p",null,[s("strong",null,"Exporters：")],-1),C5=s("p",null,"Exporters也是一个独立的组件，有官方提供的Exporters也有社区贡献的Exportes，它将监控采集的数据通过HTTP的方式暴露给Prometheus Server，Server定期获取数据。例如有一个Exporters叫做Node Exporter，它安装在受采集的主机上，为Server提供数据，有点类似于Zabbix监控系统中的Zabbix Agent。",-1),u5=s("p",null,[s("strong",null,"Prometheus web UI：")],-1),y5=s("p",null,"Prometheus web UI是Server启动后内置的一个Web界面，通过该Web界面我们可以进行数据查询工作，不包含设置的相关功能。",-1),h5=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/cc11e0cf02ff729fb905ac3648af18f7.png",alt:"img"})],-1),_5=s("p",null,[s("strong",null,"PromQL：")],-1),D5=s("p",null,"PromQL是Prometheus内置的自定义的查询语言，提供对Prometheus Server中的TSDB这个时间序列数据库进行数据查询，支持数据聚合和一些逻辑运算，是一个相对简单的查询语言，而且PromQL也提供了一些内置函数，帮助我们进行数据处理。",-1),g5=s("p",null,[s("strong",null,"Alertmanager：")],-1),m5=s("p",null,"Alertmanager是Promethedus的告警管理组件，它支持基于PromQL来创建告警规则，类似于Zabbix中的告警表达式，对获取到的数据进行计算和比较，如果满足PromQL定义的规则条件，就会产生报警。",-1),b5=s("p",null,[s("strong",null,"Pushgateway：")],-1),k5=s("p",null,"Pushgateway可以理解为数据的一个中转站，例如当Prometheus Server不能直接和Exporters进行通信的场景下。",-1),v5=s("h3",{id:"安装prometheus",tabindex:"-1"},[n("安装Prometheus "),s("a",{class:"header-anchor",href:"#安装prometheus","aria-hidden":"true"},"#")],-1),x5=s("p",null,"学习Prometheus的第一步就是先部署一个实验环境，官方提供了多种方式进行Prometheus安装：",-1),f5=s("ul",null,[s("li",null,"源码编译安装"),s("li",null,"下载预编译好的二进制文件"),s("li",null,"使用Docker部署"),s("li",null,"使用第三方工具：Ansible、SaltStack、Puppet、Chef。")],-1),S5=s("p",null,[n("为了方便学习，首先我们使用二进制方式部署，可以在这里"),s("a",{href:"https://prometheus.io/download/%E4%B8%8B%E8%BD%BD%E5%AF%B9%E5%BA%94%E7%9A%84%E9%A2%84%E7%BC%96%E8%AF%91%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%E3%80%82",target:"_blank",rel:"noreferrer"},"https://prometheus.io/download/下载对应的预编译的二进制文件。")],-1),E5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"https://github.com/prometheus/prometheus/releases/download/v2.7.1/prometheus-2.7.1.linux-amd64.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# tar zxf prometheus-2.7.1.linux-amd64.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# mv prometheus-2.7.1.linux-amd64 /usr/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# ln -s /usr/local/prometheus-2.7.1.linux-amd64/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),P5=s("p",null,[s("strong",null,"Prometheus配置")],-1),N5=s("p",null,"Prometheus的配置文件在prometheus.yml中，直接启动也会到命令的当前目录下寻找该文件。",-1),R5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 prometheus]# vim prometheus.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# my global config")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"global:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# scrape_timeout is set to the global default (10s).")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Alertmanager configuration")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alerting:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"alertmanagers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- static_configs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# - alertmanager:9093")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Load rules once and periodically evaluate them according to the global")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"'evaluation_interval'.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rule_files:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# - "first_rules.yml"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'# - "second_rules.yml"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# A scrape configuration containing exactly one endpoint to scrape:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# Here it's Prometheus itself.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_configs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# The job name is added as a label `job=<job_name>` to any timeseries")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scraped from this config.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: 'prometheus'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# metrics_path defaults to '/metrics'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# scheme defaults to 'http'.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"static_configs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets: ['localhost:9090']")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),T5=s("p",null,[s("strong",null,"启动Prometheus")],-1),I5=s("p",null,'默认情况下Prometheus会把数据写在启动目录的./data目录下，可以通过启动参数指定目录：--storage.tsdb.path="data/"，更多参数可以通过—help查看',-1),O5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 prometheus]# ./prometheus –help")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 prometheus]# ./prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"…")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.799169159Z caller=main.go:620 msg="Starting')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'TSDB ..."')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.835497463Z caller=main.go:635 msg="TSDB')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'started"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.835598421Z caller=main.go:695 msg="Loading')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'configuration file" filename=prometheus.yml')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.83756508Z caller=main.go:722 msg="Completed')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'loading of configuration file" filename=prometheus.yml')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'level=info ts=2019-02-12T08:04:03.83760078Z caller=main.go:589 msg="Server is')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'ready to receive web requests."')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"level=info ts=2019-02-12T08:04:03.837641772Z caller=web.go:416 component=web")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'msg="Start listening for connections" address=0.0.0.0:9090')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),M5=s("p",null,"默认会在前台启动，并监听9090端口，会自动创建data目录，并存放数据。注意如何服务器时间不正确会有警告提示，请保证服务器时间同步。",-1),w5=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/266a101825cbabc2782820895e161f59.png",alt:"img"})],-1),K5=s("p",null,[s("strong",null,"放置在后台运行")],-1),L5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# groupadd prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# useradd -g prometheus -d /var/lib/prometheus -s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/sbin/nologin prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /usr/lib/systemd/system/prometheus.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=simple")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/prometheus/prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--config.file=/usr/local/prometheus/prometheus.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"--storage.tsdb.path=/var/lib/prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Restart=on-failure")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),U5=s("p",null,"后台启动",-1),j5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G5=s("p",null,"查看启动状态",-1),H5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp | grep 9090")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::9090 :::* LISTEN 61333/prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),F5=s("h3",{id:"使用node-exporter采集主机数据",tabindex:"-1"},[n("使用Node Exporter采集主机数据 "),s("a",{class:"header-anchor",href:"#使用node-exporter采集主机数据","aria-hidden":"true"},"#")],-1),V5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# cd /usr/local/src")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# wget")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<https://github.com/prometheus/node_exporter/releases/download/v0.17.0/node_exporter-0.17.0.linux-amd64.tar.gz>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# tar zxf node_exporter-0.17.0.linux-amd64.tar.gz")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# mv node_exporter-0.17.0.linux-amd64 /usr/local/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 src]# ln -s /usr/local/node_exporter-0.17.0.linux-amd64/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/usr/local/node_exporter")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /usr/lib/systemd/system/node_exporter.service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Unit]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Description=node_exporter")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"After=network.target")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Service]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Type=simple")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"User=prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"ExecStart=/usr/local/prometheus/node_exporter/node_exporter")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Restart=on-failure")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[Install]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"WantedBy=multi-user.target")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),B5=s("p",null,"启动Node Exporter",-1),q5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable node_exporter")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start node_exporter")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Y5=s("p",null,"查看状态 [root@linux-node1 ~]# netstat -ntlp | grep 9100",-1),z5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::9100 :::* LISTEN 66239/node_exporter")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),$5=s("p",null,"默认情况下Node Exporter监听9100端口，通过/metrics暴露采集到的监控数据，Prometheus默认也从该地址获取数据。",-1),X5=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/1004a69a33423c72a2989005be5a790e.png",alt:"img"})],-1),J5=s("p",null,[s("strong",null,"配置Prometheus读取Node Exporter数据")],-1),W5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /usr/local/prometheus/prometheus.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scrape_configs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# The job name is added as a label `job=<job_name>` to any timeseries")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"scraped from this config.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: 'prometheus'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# metrics_path defaults to '/metrics'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"# scheme defaults to 'http'.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"static_configs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets: ['localhost:9090']")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- job_name: 'linux-node1'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"static_configs:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- targets: ['192.168.56.11:9100']")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"instance: linux-node1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q5=s("p",null,[s("strong",null,"重启prometheus")],-1),Z5=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl restart prometheus")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),s9=s("p",null,[s("strong",null,"查看监控状态")],-1),n9=s("p",null,"登录Prometheus的Web控制台，StatusTargets如果可以linux-node1并且状态是UP的状态即为配置成功。",-1),l9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/8c3da60dbf5558dc649de1fd6ce43bf0.png",alt:"img"})],-1),e9=s("h3",{id:"使用prometheus-ui查看数据",tabindex:"-1"},[n("使用Prometheus UI查看数据 "),s("a",{class:"header-anchor",href:"#使用prometheus-ui查看数据","aria-hidden":"true"},"#")],-1),o9=s("p",null,[n("现在Prometheus会定期的从"),s("a",{href:"http://192.168.56.11:9100/metrics%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%EF%BC%8C%E5%B9%B6%E5%AD%98%E5%82%A8%EF%BC%8C%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8Prometheus",target:"_blank",rel:"noreferrer"},"http://192.168.56.11:9100/metrics获取数据，并存储，我们可以使用Prometheus"),n(" UI来查看监控数据。")],-1),a9=s("h3",{id:"使用grafana进行数据可视化",tabindex:"-1"},[n("使用Grafana进行数据可视化 "),s("a",{class:"header-anchor",href:"#使用grafana进行数据可视化","aria-hidden":"true"},"#")],-1),t9=s("p",null,[s("strong",null,"1.安装Grafana")],-1),c9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/yum.repos.d/grafana.repo")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[grafana]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"name=grafana")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"baseurl=https://packages.grafana.com/oss/rpm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"repo_gpgcheck=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"enabled=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgcheck=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"gpgkey=https://packages.grafana.com/gpg.key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sslverify=1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"sslcacert=/etc/pki/tls/certs/ca-bundle.crt")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# yum install -y grafana")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),i9=s("p",null,[s("strong",null,"2.配置Grafana")],-1),r9=s("p",null,"Grafana的配置文件在/etc/grafana/grafana.ini，默认情况下Grafana监听3000端口",-1),p9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim /etc/grafana/grafana.ini")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),d9=s("p",null,[s("strong",null,"3.启动Grafana")],-1),A9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl enable grafana-server")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# systemctl start grafana-server")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# netstat -ntlp | grep 3000")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"tcp6 0 0 :::3000 :::* LISTEN 81427/grafana-serve")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),C9=s("p",null,[s("strong",null,"4.访问Grafana")],-1),u9=s("p",null,[n("访问"),s("a",{href:"http://192.168.56.11:3000/",target:"_blank",rel:"noreferrer"},"http://192.168.56.11:3000"),n("，用户名和密码默认为admin/admin，第一次登陆会要求修改密码，请使用安全密码。")],-1),y9=s("p",null,[s("strong",null,"5.增加Prometheus数据源")],-1),h9=s("p",null,"点击",-1),_9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/b681a9b528d2ff21ba66666ce2452e51.png",alt:"img"})],-1),D9=s("p",null,"，然后选择",-1),g9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/d3e83ac4f090a51c5b5e0c341b99dda5.png",alt:"img"})],-1),m9=s("p",null,"。",-1),b9=s("p",null,[n("配置URL为："),s("a",{href:"http://192.168.56.11:9090/",target:"_blank",rel:"noreferrer"},"http://192.168.56.11:9090"),n("，并点击Save&Test。")],-1),k9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/e35d8aaebedd7e168ebd1b29b65b30bb.png",alt:"img"})],-1),v9=s("p",null,[s("strong",null,"6.设置Dashboard")],-1),x9=s("p",null,"数据源设置完毕后，就可以设置Dashboard图形展示，可以手动添加，也可以直接下载别人配置好保持的Json文件直接导入即可。",-1),f9=s("p",null,[n("下载地址："),s("a",{href:"https://grafana.com/dashboards/405%EF%BC%8C%E5%9C%A8%E5%8F%B3%E4%BE%A7%E6%9C%89Download",target:"_blank",rel:"noreferrer"},"https://grafana.com/dashboards/405，在右侧有Download"),n(" Json按钮，下载该Json文件。")],-1),S9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/d9ab69b29a964a12df52512a7b128b5b.png",alt:"img"})],-1),E9=s("p",null,"点击Home下的Import Dashboard",-1),P9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/53ffc0e739ca7b9421f9568ae4cbf117.png",alt:"img"})],-1),N9=s("p",null,"然后直接上传刚才下载的JSON文件。",-1),R9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/500958891a82067b0c987d514239ffb0.png",alt:"img"})],-1),T9=s("p",null,"导入完毕后，就可以在Grafana上查看对应节点的监控数据图表。你可以通过鼠标拖拽进行图表的自定义大小和位置的修改，效果如下：",-1),I9=s("p",null,[s("img",{src:"http://k8s.unixhot.com/kubernetes/media/698a6241faa0adc1af6c09cc369b259b.png",alt:"img"})],-1),O9=s("h1",{id:"第七部分-kubernetes高级进阶",tabindex:"-1"},[n("第七部分 Kubernetes高级进阶 "),s("a",{class:"header-anchor",href:"#第七部分-kubernetes高级进阶","aria-hidden":"true"},"#")],-1),M9=s("h1",{id:"kubernetes的权限控制rbac",tabindex:"-1"},[n("Kubernetes的权限控制RBAC "),s("a",{class:"header-anchor",href:"#kubernetes的权限控制rbac","aria-hidden":"true"},"#")],-1),w9=s("p",null,[s("strong",null,"角色")],-1),K9=s("ul",null,[s("li",null,[s("p",null,"Role: 角色，命名空间范围内的一个权限集合。")]),s("li",null,[s("p",null,"ClusterRole：集群角色，集群范围内的一个权限的集合，"),s("p",null,"Role和ClusterROle在Kubernetes中都被定义为集群内部的 API 资源，和我们前面学习过的 Pod、ConfigMap 这些类似，都是我们集群的资源对象，所以同样的可以使用我们前面的kubectl相关的命令来进行操作 Subject：主题，对应在集群中尝试操作的对象，集群中定义了3种类型的主题资源：")])],-1),L9=s("p",null,"User Account：用户，这是有外部独立服务进行管理的，管理员进行私钥的分配，用户可以使用 KeyStone或者 Goolge 帐号，甚至一个用户名和密码的文件列表也可以。对于用户的管理集群内部没有一个关联的资源对象，所以用户不能通过集群内部的 API 来进行管理 Group：组，这是用来关联多个账户的，集群中有一些默认创建的组，比如cluster-admin Service Account：服务帐号，通过Kubernetes API 来管理的一些用户帐号，和 namespace 进行关联的，适用于集群内部运行的应用程序，需要通过 API 来完成权限认证，所以在集群内部进行权限操作，我们都需要使用到 ServiceAccount，这也是我们这节课的重点 RoleBinding 和 ClusterRoleBinding：角色绑定和集群角色绑定，简单来说就是把声明的 Subject 和我们的 Role 进行绑定的过程(给某个用户绑定上操作的权限)，二者的区别也是作用范围的区别：RoleBinding 只会影响到当前 namespace 下面的资源操作权限，而 ClusterRoleBinding 会影响到所有的 namespace。",-1),U9=s("p",null,[s("strong",null,"创建用户凭证")],-1),j9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openssl genrsa -out jenkins.key 2048")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'[root@linux-node1 ~]# openssl req -new -key jenkins.key -out jenkins.csr -subj "/CN=jenkins/O=vmware"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# openssl x509 -req -in jenkins.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out jenkins.crt -days 365")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl config set-credentials jenkins --client-certificate=jenkins.crt  --client-key=jenkins.key")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl config set-context jenkins-context --cluster=kubernetes --namespace=jenkins --user=jenkins  ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pods --context=jenkins-context")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),G9=s("p",null,[s("strong",null,"创建角色")],-1),H9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim jenkins-role.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: rbac.authorization.k8s.io/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Role")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins-role")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"rules:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'- apiGroups: ["", "extensions", "apps"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  resources: ["deployments", "replicasets", "pods"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),F9=s("p",null,[s("strong",null,"创建角色绑定")],-1),V9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# vim jenkins-role-binding.yml")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: rbac.authorization.k8s.io/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: RoleBinding")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins-rolebinding")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"subjects:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"- kind: User")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  apiGroup: ""')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"roleRef:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  kind: Role")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: jenkins-role")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  apiGroup: ""')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),B9=s("h1",{id:"_22-深入理解pod调度",tabindex:"-1"},[n("22 深入理解Pod调度 "),s("a",{class:"header-anchor",href:"#_22-深入理解pod调度","aria-hidden":"true"},"#")],-1),q9=s("h1",{id:"深入理解pod调度",tabindex:"-1"},[n("深入理解Pod调度 "),s("a",{class:"header-anchor",href:"#深入理解pod调度","aria-hidden":"true"},"#")],-1),Y9=s("p",null,"在前面的章节我们已经知道在Kubernetes中使用kube-scheduler进行Pod调度，它的目标是将Pod绑定到对应的Node上，经过一系列的条件和算法尽可能的让每个Pod都满意。kube-scheduler是Kubernetes默认的调度器。",-1),z9=s("p",null,[n("kube-scheduler的代码位于"),s("a",{href:"https://github.com/kubernetes/kubernetes/tree/master/pkg/scheduler",target:"_blank",rel:"noreferrer"},"GitHub")],-1),$9=s("p",null,"可以将代码克隆到本地方便查看",-1),X9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# git clone --depth 1 https://github.com/kubernetes/kubernetes.git")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),J9=s("p",null,"在algorithm下有调度算法，调度算法分为两个阶段：Predicates和priorities，首先对Node进行过滤看哪些Node符合调度要求，然后在符合调度要求的Node上进行优先级计算，判断调度到哪个Node最合适。",-1),W9=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 algorithm]# pwd")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"/root/kubernetes/pkg/scheduler/algorithm")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 algorithm]# ls -l")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"total 20")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 1256 Dec 17 22:52 BUILD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root  735 Dec 17 22:52 doc.go")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 2 root root  276 Dec 17 22:52 predicates")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"drwxr-xr-x 3 root root 4096 Dec 17 22:52 priorities")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3278 Dec 17 22:52 scheduler_interface.go")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"-rw-r--r-- 1 root root 3383 Dec 17 22:52 types.go")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),Q9=s("p",null,[n("官方文档详细的介绍了所有的步骤："),s("a",{href:"https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/",target:"_blank",rel:"noreferrer"},"https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/")],-1),Z9=s("p",null,[s("strong",null,"设置调度器")],-1),sS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get pod kube-proxy-5wbtf -n kube-system -o yaml | grep schedulerName")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  schedulerName: default-scheduler")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),nS=s("h2",{id:"taints（污点）",tabindex:"-1"},[n("Taints（污点） "),s("a",{class:"header-anchor",href:"#taints（污点）","aria-hidden":"true"},"#")],-1),lS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe node linux-node1.unixhot.com | grep Taints")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Taints:             node-role.kubernetes.io/master:NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),eS=s("p",null,"Taints的表现形式为",-1),oS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"<key>=<value>:<effect>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),aS=s("p",null,"effect的三种类型：",-1),tS=s("ul",null,[s("li",null,"NoSchedule: 如果Pod没有容忍该污点，不调度到该节点上。"),s("li",null,"PreferNoSchedule：尽量阻止Pod被调度到这个节点上，但是如果没有其它节点能够调度，可以调度到该节点。"),s("li",null,"NoExecute： NoScheduler和PreferNoSchedule只是在调度阶段起作用，但是NoExecute会影响正常运行的Pod，如果一个节点被打了NoExecute的污点，而运行在该节点的Pod没有容忍会直接被这个节点移除。")],-1),cS=s("p",null,"查看Flannel为何能调度到Master节点",-1),iS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl get po -n kube-system | grep flannel")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-f2jrk                       1/1     Running   2          22h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-mh75v                       1/1     Running   2          22h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-flannel-ds-amd64-n52zm                       1/1     Running   4          22h")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl describe pod kube-flannel-ds-amd64-f2jrk -n kube-system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Tolerations:     :NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/disk-pressure:NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/memory-pressure:NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/network-unavailable:NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/not-ready:NoExecute")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/pid-pressure:NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/unreachable:NoExecute")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"                 node.kubernetes.io/unschedulable:NoSchedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),rS=s("h3",{id:"自定义污点",tabindex:"-1"},[n("自定义污点 "),s("a",{class:"header-anchor",href:"#自定义污点","aria-hidden":"true"},"#")],-1),pS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 ~]# kubectl taint node linux-node2.example.com node-ytpe=gpu:NoSchedule       ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"node/linux-node2.example.com tainted")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 example]# cat nginx-deployment-taint.yaml    ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: apps/v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: nginx-deployment")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  replicas: 3")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  selector:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    matchLabels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  template:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        app: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - name: nginx")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        image: nginx:1.13.12")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        ports:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        - containerPort: 80")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      tolerations:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      - key: node-type")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        operator: Equal")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        value: gpu")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        effect: Noschedule")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@linux-node1 example]# kubectl get po -o wide")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME                                READY   STATUS    RESTARTS   AGE     IP          NODE                      NOMINATED NODE   READINESS GATES")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"dns-test                            1/1     Running   1          6h15m   10.2.2.23   linux-node3.example.com   <none>           <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-deployment-77564d4546-2jkw9   1/1     Running   0          13s     10.2.2.26   linux-node3.example.com   <none>           <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-deployment-77564d4546-4hrbf   1/1     Running   0          13s     10.2.2.24   linux-node3.example.com   <none>           <none>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"nginx-deployment-77564d4546-s2r4h   1/1     Running   0          13s     10.2.2.25   linux-node3.example")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),dS=s("h2",{id:"亲缘性调度",tabindex:"-1"},[n("亲缘性调度 "),s("a",{class:"header-anchor",href:"#亲缘性调度","aria-hidden":"true"},"#")],-1),AS=s("h1",{id:"_23-kubernetes-api介绍",tabindex:"-1"},[n("23 Kubernetes API介绍 "),s("a",{class:"header-anchor",href:"#_23-kubernetes-api介绍","aria-hidden":"true"},"#")],-1),CS=s("p",null,"查看集群状态",-1),uS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl cluster-info")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Kubernetes master is running at https://192.168.56.11:6443")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"KubeDNS is running at https://192.168.56.11:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),yS=s("p",null,"直接访问Kubernetes API需要验证，无法直接访问。",-1),hS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# curl -k https://192.168.56.11:6443")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "kind": "Status",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "apiVersion": "v1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "metadata": {')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "status": "Failure",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "message": "forbidden: User \\"system:anonymous\\" cannot get path \\"/\\"",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "reason": "Forbidden",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "details": {')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "code": 403')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),_S=s("p",null,[s("strong",null,"通过Proxy访问Kubernetes API")],-1),DS=s("p",null,"使用kubectl proxy可以在Master本地启动一个代理",-1),gS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl proxy")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Starting to serve on 127.0.0.1:8001")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),mS=s("p",null,"可以通过127.0.0.1:8001与API Server进行交互",-1),bS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# curl http://127.0.0.1:8001")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'  "paths": [')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/api",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/api/v1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/admissionregistration.k8s.io",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/admissionregistration.k8s.io/v1beta1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiextensions.k8s.io",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiextensions.k8s.io/v1beta1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiregistration.k8s.io",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiregistration.k8s.io/v1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apiregistration.k8s.io/v1beta1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},'    "/apis/apps",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...（省略其它输出）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),kS=s("p",null,"可以通过修改监听地址，并关闭过滤，实现在其它地方登录和查看，这样就可以在本地浏览器访问API。切记不要再生产环境将代理地址暴露在外网。",-1),vS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl proxy --address=0.0.0.0 --disable-filter=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"W1105 16:18:45.669591   16730 proxy.go:142] Request filter disabled, your proxy is vulnerable to XSRF attacks, please be cautious")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"Starting to serve on [::]:8001")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),xS=s("h3",{id:"使用swagger-ui进行api交互",tabindex:"-1"},[n("使用Swagger UI进行API交互 "),s("a",{class:"header-anchor",href:"#使用swagger-ui进行api交互","aria-hidden":"true"},"#")],-1),fS=s("p",null,"Kubernetes支持Swagger UI访问API，需要在API Server开启，如果已经根据本书使用kubeadm部署的集群，可以通过修改Pod的YAML文件，重建Pod来开启",-1),SS=s("p",null,[s("strong",null,"修改API Server的Pod定义文件")],-1),ES=s("p",null,"在- kube-apiserver下面一行增加--enable-swagger-ui=true",-1),PS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# vim /etc/kubernetes/manifests/kube-apiserver.yaml ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"apiVersion: v1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kind: Pod")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"metadata:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  creationTimestamp: null")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  labels:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    component: kube-apiserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    tier: control-plane")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  name: kube-apiserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  namespace: kube-system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"spec:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  containers:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  - command:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - kube-apiserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - --enable-swagger-ui=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - --advertise-address=192.168.56.11")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    - --allow-privileged=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),NS=s("p",null,"删除Pod，kubelet会通过该YAML重建Pod",-1),RS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get pod -n kube-system | grep api")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kube-apiserver-linux-node1.unixhot.com            1/1     Running   0          55m")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl delete pod kube-apiserver-linux-node1.unixhot.com -n kube-system")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),TS=s("p",null,"可以看到配置已经生效",-1),IS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl describe pod kube-apiserver-linux-node1.unixhot.com -n kube-system ")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    Command:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      kube-apiserver")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      --enable-swagger-ui=true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      --advertise-address=192.168.99.27")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"....")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),OS=s("p",null,"部署一个Swagger UI服务查看API",-1),MS=s("div",{class:"language-"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl run swagger-ui --image=swaggerapi/swagger-ui:latest")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl expose deployment swagger-ui --port=8080 --type=NodePort")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"[root@k8s-master1 ~]# kubectl get service")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"NAME         TYPE        CLUSTER-IP    EXTERNAL-IP     PORT(S)          AGE")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"kubernetes   ClusterIP   10.1.0.1      <none>          443/TCP          43d")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"swagger-ui   NodePort    10.1.205.94   <none>   8080:30410/TCP   34s")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}})])])])],-1),wS=s("p",null,"因为我们部署的Swagger UI和API Server不在一个域名下，所以会有跨域的问题，Chrome浏览器需要提前安装Allow CROS插件解决",-1),KS=s("hr",null,null,-1),LS=s("hr",null,null,-1),US=s("p",null,"摘录自赵班长--------",-1);function jS(e,GS,HS,FS,t,VS){const c=i;return A(),d(c,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":l(()=>[u,y,h,_,D,g,m,b,k,v,x,f,S,E,P,N,R,T,I,O,M,w,K,L,U,j,G,H,F,V,B,q,Y,z,$,X,J,W,Q,Z,ss,ns,ls,es,os,as,ts,cs,is,rs,ps,ds,As,Cs,us,ys,hs,_s,Ds,gs,ms,bs,ks,vs,xs,fs,Ss,Es,Ps,Ns,Rs,Ts,Is,Os,Ms,ws,Ks,Ls,Us,js,Gs,Hs,Fs,Vs,Bs,qs,Ys,zs,$s,Xs,Js,Ws,Qs,Zs,sn,nn,ln,en,on,an,tn,cn,rn,pn,dn,An,Cn,un,yn,hn,_n,Dn,gn,mn,bn,kn,vn,xn,fn,Sn,En,Pn,Nn,Rn,Tn,In,On,Mn,wn,Kn,Ln,Un,jn,Gn,Hn,Fn,Vn,Bn,qn,Yn,zn,$n,Xn,Jn,Wn,Qn,Zn,sl,nl,ll,el,ol,al,tl,cl,il,rl,pl,dl,Al,Cl,ul,yl,hl,_l,Dl,gl,ml,bl,kl,vl,xl,fl,Sl,El,Pl,Nl,Rl,Tl,Il,Ol,Ml,wl,Kl,Ll,Ul,jl,Gl,Hl,Fl,Vl,Bl,ql,Yl,zl,$l,Xl,Jl,Wl,Ql,Zl,se,ne,le,ee,oe,ae,te,ce,ie,re,pe,de,Ae,Ce,ue,ye,he,_e,De,ge,me,be,ke,ve,xe,fe,Se,Ee,Pe,Ne,Re,Te,Ie,Oe,Me,we,Ke,Le,Ue,je,Ge,He,Fe,Ve,Be,qe,Ye,ze,$e,Xe,Je,We,Qe,Ze,so,no,lo,eo,oo,ao,to,co,io,ro,po,Ao,Co,uo,yo,ho,_o,Do,go,mo,bo,ko,vo,xo,fo,So,Eo,Po,No,Ro,To,Io,Oo,Mo,wo,Ko,Lo,Uo,jo,Go,Ho,Fo,Vo,Bo,qo,Yo,zo,$o,Xo,Jo,Wo,Qo,Zo,sa,na,la,ea,oa,aa,ta,ca,ia,ra,pa,da,Aa,Ca,ua,ya,ha,_a,Da,ga,ma,ba,ka,va,xa,fa,Sa,Ea,Pa,Na,Ra,Ta,Ia,Oa,Ma,wa,Ka,La,Ua,ja,Ga,Ha,Fa,Va,Ba,qa,Ya,za,$a,Xa,Ja,Wa,Qa,Za,st,nt,lt,et,ot,at,tt,ct,it,rt,pt,dt,At,Ct,ut,yt,ht,_t,Dt,gt,mt,bt,kt,vt,xt,ft,St,Et,Pt,Nt,Rt,Tt,It,Ot,Mt,wt,Kt,Lt,Ut,jt,Gt,Ht,Ft,Vt,Bt,qt,Yt,zt,$t,Xt,Jt,Wt,Qt,Zt,sc,nc,lc,ec,oc,ac,tc,cc,ic,rc,pc,dc,Ac,Cc,uc,yc,hc,_c,Dc,gc,mc,bc,kc,vc,xc,fc,Sc,Ec,Pc,Nc,Rc,Tc,Ic,Oc,Mc,wc,Kc,Lc,Uc,jc,Gc,Hc,Fc,Vc,Bc,qc,Yc,zc,$c,Xc,Jc,Wc,Qc,Zc,si,ni,li,ei,oi,ai,ti,ci,ii,ri,pi,di,Ai,Ci,ui,yi,hi,_i,Di,gi,mi,bi,ki,vi,xi,fi,Si,Ei,Pi,Ni,Ri,Ti,Ii,Oi,Mi,wi,Ki,Li,Ui,ji,Gi,Hi,Fi,Vi,Bi,qi,Yi,zi,$i,Xi,Ji,Wi,Qi,Zi,sr,nr,lr,er,or,ar,tr,cr,ir,rr,pr,dr,Ar,Cr,ur,yr,hr,_r,Dr,gr,mr,br,kr,vr,xr,fr,Sr,Er,Pr,Nr,Rr,Tr,Ir,Or,Mr,wr,Kr,Lr,Ur,jr,Gr,Hr,Fr,Vr,Br,qr,Yr,zr,$r,Xr,Jr,Wr,Qr,Zr,sp,np,lp,ep,op,ap,tp,cp,ip,rp,pp,dp,Ap,Cp,up,yp,hp,_p,Dp,gp,mp,bp,kp,vp,xp,fp,Sp,Ep,Pp,Np,Rp,Tp,Ip,Op,Mp,wp,Kp,Lp,Up,jp,Gp,Hp,Fp,Vp,Bp,qp,Yp,zp,$p,Xp,Jp,Wp,Qp,Zp,sd,nd,ld,ed,od,ad,td,cd,id,rd,pd,dd,Ad,Cd,ud,yd,hd,_d,Dd,gd,md,bd,kd,vd,xd,fd,Sd,Ed,Pd,Nd,Rd,Td,Id,Od,Md,wd,Kd,Ld,Ud,jd,Gd,Hd,Fd,Vd,Bd,qd,Yd,zd,$d,Xd,Jd,Wd,Qd,Zd,sA,nA,lA,eA,oA,aA,tA,cA,iA,rA,pA,dA,AA,CA,uA,yA,hA,_A,DA,gA,mA,bA,kA,vA,xA,fA,SA,EA,PA,NA,RA,TA,IA,OA,MA,wA,KA,LA,UA,jA,GA,HA,FA,VA,BA,qA,YA,zA,$A,XA,JA,WA,QA,ZA,sC,nC,lC,eC,oC,aC,tC,cC,iC,rC,pC,dC,AC,CC,uC,yC,hC,_C,DC,gC,mC,bC,kC,vC,xC,fC,SC,EC,PC,NC,RC,TC,IC,OC,MC,wC,KC,LC,UC,jC,GC,HC,FC,VC,BC,qC,YC,zC,$C,XC,JC,WC,QC,ZC,su,nu,lu,eu,ou,au,tu,cu,iu,ru,pu,du,Au,Cu,uu,yu,hu,_u,Du,gu,mu,bu,ku,vu,xu,fu,Su,Eu,Pu,Nu,Ru,Tu,Iu,Ou,Mu,wu,Ku,Lu,Uu,ju,Gu,Hu,Fu,Vu,Bu,qu,Yu,zu,$u,Xu,Ju,Wu,Qu,Zu,s1,n1,l1,e1,o1,a1,t1,c1,i1,r1,p1,d1,A1,C1,u1,y1,h1,_1,D1,g1,m1,b1,k1,v1,x1,f1,S1,E1,P1,N1,R1,T1,I1,O1,M1,w1,K1,L1,U1,j1,G1,H1,F1,V1,B1,q1,Y1,z1,$1,X1,J1,W1,Q1,Z1,sy,ny,ly,ey,oy,ay,ty,cy,iy,ry,py,dy,Ay,Cy,uy,yy,hy,_y,Dy,gy,my,by,ky,vy,xy,fy,Sy,Ey,Py,Ny,Ry,Ty,Iy,Oy,My,wy,Ky,Ly,Uy,jy,Gy,Hy,Fy,Vy,By,qy,Yy,zy,$y,Xy,Jy,Wy,Qy,Zy,s6,n6,l6,e6,o6,a6,t6,c6,i6,r6,p6,d6,A6,C6,u6,y6,h6,_6,D6,g6,m6,b6,k6,v6,x6,f6,S6,E6,P6,N6,R6,T6,I6,O6,M6,w6,K6,L6,U6,j6,G6,H6,F6,V6,B6,q6,Y6,z6,$6,X6,J6,W6,Q6,Z6,sh,nh,lh,eh,oh,ah,th,ch,ih,rh,ph,dh,Ah,Ch,uh,yh,hh,_h,Dh,gh,mh,bh,kh,vh,xh,fh,Sh,Eh,Ph,Nh,Rh,Th,Ih,Oh,Mh,wh,Kh,Lh,Uh,jh,Gh,Hh,Fh,Vh,Bh,qh,Yh,zh,$h,Xh,Jh,Wh,Qh,Zh,s_,n_,l_,e_,o_,a_,t_,c_,i_,r_,p_,d_,A_,C_,u_,y_,h_,__,D_,g_,m_,b_,k_,v_,x_,f_,S_,E_,P_,N_,R_,T_,I_,O_,M_,w_,K_,L_,U_,j_,G_,H_,F_,V_,B_,q_,Y_,z_,$_,X_,J_,W_,Q_,Z_,sD,nD,lD,eD,oD,aD,tD,cD,iD,rD,pD,dD,AD,CD,uD,yD,hD,_D,DD,gD,mD,bD,kD,vD,xD,fD,SD,ED,PD,ND,RD,TD,ID,OD,MD,wD,KD,LD,UD,jD,GD,HD,FD,VD,BD,qD,YD,zD,$D,XD,JD,WD,QD,ZD,sg,ng,lg,eg,og,ag,tg,cg,ig,rg,pg,dg,Ag,Cg,ug,yg,hg,_g,Dg,gg,mg,bg,kg,vg,xg,fg,Sg,Eg,Pg,Ng,Rg,Tg,Ig,Og,Mg,wg,Kg,Lg,Ug,jg,Gg,Hg,Fg,Vg,Bg,qg,Yg,zg,$g,Xg,Jg,Wg,Qg,Zg,sm,nm,lm,em,om,am,tm,cm,im,rm,pm,dm,Am,Cm,um,ym,hm,_m,Dm,gm,mm,bm,km,vm,xm,fm,Sm,Em,Pm,Nm,Rm,Tm,Im,Om,Mm,wm,Km,Lm,Um,jm,Gm,Hm,Fm,Vm,Bm,qm,Ym,zm,$m,Xm,Jm,Wm,Qm,Zm,sb,nb,lb,eb,ob,ab,tb,cb,ib,rb,pb,db,Ab,Cb,ub,yb,hb,_b,Db,gb,mb,bb,kb,vb,xb,fb,Sb,Eb,Pb,Nb,Rb,Tb,Ib,Ob,Mb,wb,Kb,Lb,Ub,jb,Gb,Hb,Fb,Vb,Bb,qb,Yb,zb,$b,Xb,Jb,Wb,Qb,Zb,sk,nk,lk,ek,ok,ak,tk,ck,ik,rk,pk,dk,Ak,Ck,uk,yk,hk,_k,Dk,gk,mk,bk,kk,vk,xk,fk,Sk,Ek,Pk,Nk,Rk,Tk,Ik,Ok,Mk,wk,Kk,Lk,Uk,jk,Gk,Hk,Fk,Vk,Bk,qk,Yk,zk,$k,Xk,Jk,Wk,Qk,Zk,s2,n2,l2,e2,o2,a2,t2,c2,i2,r2,p2,d2,A2,C2,u2,y2,h2,_2,D2,g2,m2,b2,k2,v2,x2,f2,S2,E2,P2,N2,R2,T2,I2,O2,M2,w2,K2,L2,U2,j2,G2,H2,F2,V2,B2,q2,Y2,z2,$2,X2,J2,W2,Q2,Z2,sv,nv,lv,ev,ov,av,tv,cv,iv,rv,pv,dv,Av,Cv,uv,yv,hv,_v,Dv,gv,mv,bv,kv,vv,xv,fv,Sv,Ev,Pv,Nv,Rv,Tv,Iv,Ov,Mv,wv,Kv,Lv,Uv,jv,Gv,Hv,Fv,Vv,Bv,qv,Yv,zv,$v,Xv,Jv,Wv,Qv,Zv,s0,n0,l0,e0,o0,a0,t0,c0,i0,r0,p0,d0,A0,C0,u0,y0,h0,_0,D0,g0,m0,b0,k0,v0,x0,f0,S0,E0,P0,N0,R0,T0,I0,O0,M0,w0,K0,L0,U0,j0,G0,H0,F0,V0,B0,q0,Y0,z0,$0,X0,J0,W0,Q0,Z0,s3,n3,l3,e3,o3,a3,t3,c3,i3,r3,p3,d3,A3,C3,u3,y3,h3,_3,D3,g3,m3,b3,k3,v3,x3,f3,S3,E3,P3,N3,R3,T3,I3,O3,M3,w3,K3,L3,U3,j3,G3,H3,F3,V3,B3,q3,Y3,z3,$3,X3,J3,W3,Q3,Z3,sx,nx,lx,ex,ox,ax,tx,cx,ix,rx,px,dx,Ax,Cx,ux,yx,hx,_x,Dx,gx,mx,bx,kx,vx,xx,fx,Sx,Ex,Px,Nx,Rx,Tx,Ix,Ox,Mx,wx,Kx,Lx,Ux,jx,Gx,Hx,Fx,Vx,Bx,qx,Yx,zx,$x,Xx,Jx,Wx,Qx,Zx,sf,nf,lf,ef,of,af,tf,cf,rf,pf,df,Af,Cf,uf,yf,hf,_f,Df,gf,mf,bf,kf,vf,xf,ff,Sf,Ef,Pf,Nf,Rf,Tf,If,Of,Mf,wf,Kf,Lf,Uf,jf,Gf,Hf,Ff,Vf,Bf,qf,Yf,zf,$f,Xf,Jf,Wf,Qf,Zf,s8,n8,l8,e8,o8,a8,t8,c8,i8,r8,p8,d8,A8,C8,u8,y8,h8,_8,D8,g8,m8,b8,k8,v8,x8,f8,S8,E8,P8,N8,R8,T8,I8,O8,M8,w8,K8,L8,U8,j8,G8,H8,F8,V8,B8,q8,Y8,z8,$8,X8,J8,W8,Q8,Z8,s4,n4,l4,e4,o4,a4,t4,c4,i4,r4,p4,d4,A4,C4,u4,y4,h4,_4,D4,g4,m4,b4,k4,v4,x4,f4,S4,E4,P4,N4,R4,T4,I4,O4,M4,w4,K4,L4,U4,j4,G4,H4,F4,V4,B4,q4,Y4,z4,$4,X4,J4,W4,Q4,Z4,s5,n5,l5,e5,o5,a5,t5,c5,i5,r5,p5,d5,A5,C5,u5,y5,h5,_5,D5,g5,m5,b5,k5,v5,x5,f5,S5,E5,P5,N5,R5,T5,I5,O5,M5,w5,K5,L5,U5,j5,G5,H5,F5,V5,B5,q5,Y5,z5,$5,X5,J5,W5,Q5,Z5,s9,n9,l9,e9,o9,a9,t9,c9,i9,r9,p9,d9,A9,C9,u9,y9,h9,_9,D9,g9,m9,b9,k9,v9,x9,f9,S9,E9,P9,N9,R9,T9,I9,O9,M9,w9,K9,L9,U9,j9,G9,H9,F9,V9,B9,q9,Y9,z9,$9,X9,J9,W9,Q9,Z9,sS,nS,lS,eS,oS,aS,tS,cS,iS,rS,pS,dS,AS,CS,uS,yS,hS,_S,DS,gS,mS,bS,kS,vS,xS,fS,SS,ES,PS,NS,RS,TS,IS,OS,MS,wS,KS,LS,US]),"main-header":l(()=>[o(e.$slots,"main-header")]),"main-header-after":l(()=>[o(e.$slots,"main-header-after")]),"main-nav":l(()=>[o(e.$slots,"main-nav")]),"main-content":l(()=>[o(e.$slots,"main-content")]),"main-content-after":l(()=>[o(e.$slots,"main-content-after")]),"main-nav-before":l(()=>[o(e.$slots,"main-nav-before")]),"main-nav-after":l(()=>[o(e.$slots,"main-nav-after")]),comment:l(()=>[o(e.$slots,"comment")]),footer:l(()=>[o(e.$slots,"footer")]),aside:l(()=>[o(e.$slots,"aside")]),"aside-custom":l(()=>[o(e.$slots,"aside-custom")]),default:l(()=>[o(e.$slots,"default")]),_:3},8,["frontmatter","data"])}const JS=r(C,[["render",jS],["__file","/Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/pages/posts/Docker+K8s实践指南.md"]]);export{XS as __pageData,JS as default};
