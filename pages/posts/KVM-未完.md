---
title: KVM-未完
categories: DevOps
tags: [KVM]
date: 2020-03-19 15:26:00
---
# 第1章 KVM介绍

# 第2章 创建一个KVM虚拟机

## 1.VM虚拟机开启CPU虚拟化功能

设置-处理器-虚拟化

## 2.安装软件



```bash
yum install libvirt virt-install qemu-kvm -y
```

## 3.创建虚拟机



```go
systemctl start libvirtd.service 
systemctl status libvirtd.service

virt-install --virt-type kvm --os-type=linux --os-variant rhel7 --name centos7 --memory 1024 --vcpus 1 --disk /opt/centos7.raw,format=raw,size=10 --cdrom /opt/CentOS-7-x86_64-DVD-1810.iso --network network=default --graphics vnc,listen=0.0.0.0 --noautoconsole
```

## 4.连接虚拟机

安装VNC工具连接

# 第3章 KVM常用管理命令

## 1.查看虚拟机



```cpp
virsh list
virsh list --all
```

## 2.启动虚拟机



```bash
virsh start centos7
```

## 3.重启虚拟机



```bash
virsh reboot centos7
```

## 4.关闭虚拟机



```bash
virsh shutdown centos7
virsh destroy centos7
```

## 5.查看配置文件



```bash
virsh dumpxml centos7
```

## 6.导出配置文件



```css
virsh dumpxml centos7 > centos7.xml
```

## 7.删除虚拟机



```bash
virsh destroy centos7
virsh undefine centos7
```

## 8.导入虚拟机



```css
virsh define centos7.xml
```

## 9.虚拟机重命名



```bash
virsh domrename panghu shouhu
```

## 10.主机挂起



```bash
virsh suspend centos7
```

## 11.恢复主机



```bash
virsh resume centos7
```

## 12.kvm虚拟机开机启动



```bash
virsh autostart centos7
ll /etc/libvirt/qemu/autostart/
```

## 13.小项目：

把虚拟机磁盘迁移到/data目录并且启动

### 13.1.停止要迁移的虚拟机



```bash
virsh shutdown centos7
```

### 13.2.创建数据目录并移动磁盘文件



```kotlin
mkdir /data 
mv /opt/centos7.raw /data 
```

### 13.3.使用edit命令修改配置文件



```bash
virsh edit centos7
--------------------
 <source file='/data/centos7.raw'/>
--------------------
```

### 13.4.启动虚拟机



```cpp
virsh start centos7
virsh list 
```

# 第4章 KVM连接方式

## 1.VNC



```bash
virsh vncdisplay centos7
```

## 2.SSH



```css
ssh 192.168.122.77
```

## 3.console显示

登录进需要开启console的虚拟机并添加参数



```jsx
ssh 192.168.122.77
grubby --update-kernel=ALL --args="console=ttyS0,115200n8"
grep "115200" /boot/grub2/grub.cfg 
reboot
virsh destroy centos7
virsh start centos7
virsh console centos7
```

退出



```bash
ctrl + ]
```

# 第5章 KVM磁盘管理

## 1.虚拟机磁盘格式介绍



```bash
raw：不支持做快照，性能好
qcow2：支持快照，性能不如raw好
```

## 2.查看磁盘信息



```css
qemu-img info centos7.raw 
```

## 3.创建磁盘



```kotlin
qemu-img create -f qcow2 /data/centos7.qcow2 1G
```

## 4.查看磁盘信息



```css
qemu-img info centos7.qcow2
```

## 5.调整磁盘容量: 只能加不能减



```kotlin
qemu-img resize /data/centos7.qcow2 1T
```

## 6.磁盘格式转换

### 6.1.将虚拟机关机



```bash
virsh destroy centos7
```

### 6.2.转换磁盘格式



```css
qemu-img convert -f raw -O qcow2 centos7.raw centos7.qcow2  
```

### 6.3.编辑配置文件修改为qcow2格式



```bash
virsh edit centos7
------------------------------------------
      <driver name='qemu' type='qcow2'/>
      <source file='/opt/centos7.qcow2'/>
------------------------------------------
```

### 6.4.重新启动



```jsx
virsh start centos7
virsh console centos7
```

# 第6章 KVM快照管理

## 1.查看快照



```cpp
virsh snapshot-list centos7
```

## 2.创建快照



```php
virsh snapshot-create-as centos7 snap1
virsh snapshot-list centos7
```

## 3.恢复快照



```bash
virsh snapshot-revert centos7 snap1
```

## 4.删除快照



```cpp
virsh snapshot-delete centos7 snap1
virsh snapshot-list centos7
```

# 第7章 KVM克隆虚拟机

## 1.完整克隆



```php
virsh shutdown centos7
virt-clone --auto-clone -o centos7 -n centos7-backup
virsh list --all
virsh dumpxml web-blog-backup |grep "qcow2"
virsh snapshot-list centos7
```

## 2.链接克隆

### 2.1 生成虚拟机磁盘文件



```css
qemu-img create -f qcow2 -b centos7.qcow2 centos7-clone.qcow2 
```

### 2.2 查看磁盘信息



```css
qemu-img info centos7-clone.qcow2 
```

### 2.3 生成虚拟机配置文件



```php
virsh dumpxml centos7 > centos7-clone.xml
sed -i '/uuid/d' centos7-clone.xml
sed -i '/mac address/d' centos7-clone.xml
sed -i 's#centos7.qcow2#centos7-clone.qcow2#g' centos7-clone.xml
sed -i '/\<nam/s#centos7#centos7-clone#g' centos7-clone.xml
```

### 2.3 导入配置文件



```php
virsh define centos7-clone.xml 
virsh list --all 
```

### 2.4 启动虚拟机



```php
virsh start centos7-clone
```

# 第8章 KVM桥接网络

## 1.创建桥接网卡



```bash
virsh iface-bridge eth0 br0
```

## 2.连接克隆新磁盘



```bash
cd /opt
qemu-img create -f qcow2 -b centos7.qcow2 bridge.qcow2
```

## 3.创建新虚拟机



```go
virt-install --virt-type kvm --os-type=linux --os-variant rhel7 --name centos7-bridge --memory 1024 --vcpus 1 --disk /opt/bridge.qcow2 --boot hd --network bridge=br0 --graphics vnc,listen=0.0.0.0 --noautoconsole
```

## 4.登录虚拟机查看网卡信息



```jsx
virsh console centos7-bridge
ip a
```

## 5.在其他主机ping测试



```bash
ping xxxx
```

# 第9章 KVM虚拟机热添加磁盘

## 1.热添加硬盘

### 1.1 创建磁盘



```csharp
qemu-img create -f qcow2 centos7-add.qcow2 10G
```

### 1.2 临时生效添加



```csharp
virsh attach-disk centos7 /opt/centos7-add.qcow2 vdb --subdriver qcow2
```

### 1.3 虚拟机格式化并挂载



```jsx
virsh console centos7
fdisk -l
mkfs.xfs /dev/vdb
mount  /dev/vdb  /mnt/
df -h
```

### 1.4 永久生效添加



```csharp
virsh attach-disk centos7 /opt/centos7-add.qcow2 vdb --subdriver qcow2
virsh attach-disk centos7 /opt/centos7-add.qcow2 vdb --subdriver qcow2 --config
```

## 2.剥离磁盘

### 2.1 临时剥离



```bash
virsh detach-disk centos7 vdb
```

### 2.2 永久剥离



```bash
virsh detach-disk centos7 vdb
virsh detach-disk centos7 vdb --config
```

## 3.调整磁盘大小

### 3.1 调整磁盘大小



```csharp
qemu-img info /opt/centos7-add.qcow2
qemu-img resize /opt/centos7-add.qcow2 +10G
```

### 3.2 添加到虚拟机并查看



```csharp
virsh attach-disk centos7 /opt/centos7-add.qcow2 vdb --subdriver qcow2
virsh console centos7
fdisk -l /dev/vdb
mount /dev/vdb /mnt/
df -h|tail -1 
```

### 3.3 调整磁盘信息



```bash
xfs_growfs /dev/vdb
df -h|tail -1
```

# 第10章 KVM热添加网卡

## 1.临时添加



```css
virsh attach-interface centos7 --type bridge --mac 52:54:00:b1:b5:8a --source br0 --model virtio detachinterface
```

## 2.永久生效



```css
virsh attach-interface centos7 --type bridge --mac 52:54:00:b1:b5:8a --source br0 --model virtio detachinterface --config 
```

## 3,临时剥离



```kotlin
virsh detach-interface centos7 bridge
```

## 4.永久剥离



```kotlin
virsh detach-interface centos7 bridge
virsh detach-interface centos7 bridge --config
```

# 第11章 KVM热添加内存

## 1.创建虚拟机时直接添加最大内存参数



```go
virt-install --virt-type kvm --os-type=linux --os-variant rhel7 --name centos7 --
memory 512,maxmemory=2048 --vcpus 1 --disk /opt/centos7.qcow2 --boot hd --network bridge=br0 --
graphics vnc,listen=0.0.0.0 --noautoconsole
```

## 2.如果创建虚拟机的时候没有设置最大内存限制，执行如下操作添加配置



```cpp
virsh destroy centos7
virsh setmaxmem centos7 4096M
virsh start centos7 
virsh console centos7
free -h 
```

## 3.临时添加



```cpp
virsh setmem centos7 2048M --live 
virsh console centos7
free -h 
```

## 4.永久增大内存



```cpp
virsh setmem centos7 2048M --config
virsh console centos7
free -h 
```

# 第12章 KVM冷添加CPU

## 1.编辑配置文件



```jsx
virsh edit centos7
------------------------------------------------
  <vcpu placement='static' current='2'>4</vcpu>
------------------------------------------------
```

## 2.添加cpu核数



```bash
virsh setvcpus centos7 4 --live 
```

## 3.永久添加cpu核数



```bash
setvcpus centos7 4 --config
```

