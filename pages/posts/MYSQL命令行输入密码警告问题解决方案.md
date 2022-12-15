---
title: MYSQL命令行输入密码警告问题解决方案
categories: MySQL
tags: [MySQL报错]
date: 2021-01-20 10:07:11
---

# 1.1 问题显示

```
[root@localhost ~]# mysql -uroot -p1234567
mysql: [Warning] Using a password on the command line interface can be insecure.
```

# 1.2 解决方法

## 1.2.1 方法一

### 1、将密码写入到主配置文件中

```
[root@localhost ~]# vim /etc/my.cnf
[mysqldump]
user=root
password=1234567
[mysql]
user=root
password=1234567
```

### 2、直接使用命令登录，再也无需输入账号密码

```
[root@localhost ~]# mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 5.7.18-log Source distribution
Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
mysql> 
```

## 1.2.2 方法二

### 1、自动配置MYSQL密文密码

> 该操作会在用户家目录下生成一个隐藏文件".mylogin.cnf"，里面记录了MYSQL的密文的密码，只要配置了以后，我们也是直接使用命令登录，再也无需输入账号密码了，如果你想取消，删除此文件即可。

```
[root@localhost ~]# mysql_config_editor set --user=root --host=localhost --port=3306 --password
Enter password: 输入密码
```

### 2、直接使用命令登录，再也无需输入账号密码

```
[root@localhost ~]# mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 5.7.18-log Source distribution
Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved
Oracle is a registered trademark of Oracle Corporation and/or it
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
mysql> 
```

## 1.2.3 方法三

### 1、直接使用命令登录，屏蔽错误信息

> 由于告警信息是标准错误，我们可以将标准错误的输出信息输出为空。

```
[root@localhost ~]# mysql -uroot -p1234567 2>/dev/null
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 36
Server version: 5.7.18-log Source distribution
Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```