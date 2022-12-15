---
title: Linux find 命令详解
categories: Linux技术
tags: [基础命令]
date: 2020-09-29 17:56:20
---


> Linux 上的 `find` 命令是 `findutil` 软件包的一部分，一般已经默认集成在了几乎所有的发行版中。
>  find 命令有非常大的灵活性，可以向其指定丰富的搜索条件（如**文件权限**、**属主**、**属组**、**文件类型**、**日期**和**大小**等）来定位系统中的文件和目录。
>  此外，find 还支持对搜索到的结果进行多种类型的**命令**操作。

#### 一、简介

find 命令的基本结构如下：
 `find [paths] [expression] [actions]`

find 命令接受一个或多个**路径**（*paths*）作为搜索范围，并在该路径下**递归**地搜索。即检索完指定的目录后，还会对该目录下的子目录进行检索，以及子目录下的子目录。。。直到到达目录树底部。

默认情况下（不带任何搜索条件），find 命令会返回指定目录下的**所有文件**，所以常常需要通过特定的 `expression` 对结果进行**筛选**。

find 命令默认的 `action` 是将所有检索结果打印至标准输出。可以通过自定义 `action` ，让 find 命令对搜索到的结果执行特定的操作。

这里先不做详细解释，简单地测试下 find 命令：

1. 有如下结构的示例目录 directory



```ruby
$ tree directory
directory
├── file1
├── file2
├── sub-dir1
│   ├── file1
│   ├── file2
│   └── file3
└── sub-dir2
    ├── file2
    └── sub-subdir1
        └── file1

3 directories, 7 files
```

1. 默认的 find 命令会列出该目录下的所有文件



```ruby
$ find directory
directory
directory/sub-dir1
directory/sub-dir1/file3
directory/sub-dir1/file2
directory/sub-dir1/file1
directory/file2
directory/sub-dir2
directory/sub-dir2/file2
directory/sub-dir2/sub-subdir1
directory/sub-dir2/sub-subdir1/file1
directory/file1
```

1. 为 find 命令指定 expression 以筛选出特定的文件



```ruby
$ find directory -name file2
directory/sub-dir1/file2
directory/file2
directory/sub-dir2/file2
```

1. 为 find 命令指定特殊的 action（此处 `-delete` 表示删除搜索结果）



```ruby
$ find directory -name file2 -delete
$ find directory
directory
directory/sub-dir1
directory/sub-dir1/file3
directory/sub-dir1/file1
directory/sub-dir2
directory/sub-dir2/sub-subdir1
directory/sub-dir2/sub-subdir1/file1
directory/file1
```

#### 二、搜索条件（expression）

##### 1. 根据文件名检索

find 命令中的 `-name` 选项可以根据文件名称进行检索（**区分大小写**）。如需要忽略文件名中的大小写，可以使用 `-iname` 选项。

`-name` 和 `-iname` 两个选项都支持 **wildcards** 。如：

- `?` 可以表示任意一个单一的符号
- `*` 可以表示任意数量（包括 0）的未知符号

`find /usr -name '*.txt'` 查找 /usr 目录下所有文件名以 `.txt` 结尾的文件
 `find /usr -name '????'` 查找 /usr 目录下所有文件名刚好为 4 个字符的文件

有些时候，你需要在搜索时匹配某个文件或目录的**完整路径**，而不仅仅是匹配文件名。可以使用 `-path` 或 `-ipath` 选项。

如查找 /usr 下所有文件名以 `.txt` 结尾的文件或目录，且该文件的父目录必须是 `src`。可以使用以下命令：
 `find /usr -path '*/src/*.txt'`

##### 2. 根据文件类型检索

如果只想搜索得到文件**或**目录，即不想它们同时出现在结果中。可以使用 `-type` 选项指定文件类型。

`-type` 选项最常用的参数如下：

- f: 文件
- d: 目录
- l: 符号链接

`find /usr -type d -name 'python*'` 检索 /usr 下所有文件名以 `python` 开头的**目录**

##### 3. 检索空文件

find 命令支持 `-empty` 选项用来检索**为空**的文件或目录。空文件即文件里没有任何内容，空目录即目录中没有任何文件或子目录。

`find ~ -type d -empty` 检索用户主目录下所有的空目录

##### 4. 反义匹配

find 命令也允许用户对当前的匹配条件进行**“反义”**（类似于**逻辑非**操作）。

如需要检索 /usr 下所有文件名**不**以 `.txt` 为后缀的文件。可以使用以下命令：
 `find /usr -type f ! -name '*.txt'`

也可以“翻转”任何其他的筛选条件，如：
 `find /usr -type f ! -empty` 检索 /usr 下所有内容不为空的文件

##### 5. 根据文件的所属权检索

为了检索归属于特定用户的文件或目录，可以使用 `-user` 选项。

`find / -type f -user starky` 检索根目录下所有属主为 starky 的文件

类似于 `-user`选项，`-group` 选项则可以根据文件或目录的**属组**进行检索。

##### 6. 根据时间日期进行检索

有些时候，需要根据文件创建或修改的时间进行检索。

Linux 系统中，与文件相关联的时间参数有以下三种：

- 修改时间（Modification time）：最后一次文件内容有过更改的时间点
- 访问时间（Access time）：最后一次文件有被读取过的时间点
- 变更时间（Change time）：最后一次文件有被**变更**过的时间点（如内容被修改，或权限等 metadata 被修改）

与此对应的是 find 命令中的 `-mtime`，`-atime` 和 `-ctime` 三个选项。

这三个选项的使用遵循以下示例中的规则：

- `-mtime 2`：该文件 2 天前被修改过
- `-mtime -2`：该文件 2 天**以内**被修改过
- `-mtime +2`：该文件距离上次修改已经**超过** 2 天时间

`find /usr -type f -mtime 2` 检索 /usr 下两天前被修改过的文件

如果觉得 `-mtime` 等选项以**天**为单位时间有点长，还可以使用 `-mmin`，`-amin`，`-cmin` 三个选项：
 `find /usr -type f -mtime +50 -mtime -100` 检索 /usr 下 50 到 100 天之前修改过的文件
 `find /usr -type f -mtime 2 -amin 5` 检索 /usr 下两天前被修改过且 5 分钟前又读取过的文件

##### 7. 根据文件大小检索

`-size` 选项允许用户通过文件大小进行搜索（只适用于文件，目录没有大小……）。

表示文件大小的单位由以下字符组成：

- `c`：字节
- `k`：Kb
- `M`：Mb
- `G`：Gb

另外，还可以使用 `+` 或 `-` 符号表示**大于**或**小于**当前条件。

`find / -size +1G` 检索文件大小高于 1 GB 的文件

##### 8. 根据文件权限检索

find 命令可以使用 `-perm` 选项以文件权限为依据进行搜索。

###### 使用符号形式

如需要检索 /usr 目录下权限为 `rwxr-xr-x` 的文件，可以使用以下命令：
 `find /usr -perm u=rwx,g=rx,o=rx`

搜索 /usr 目录下所有权限为 `r-xr-xr-x`（即系统中的所有用户都只有读写权限）的文件和目录，可以使用以下命令：
 `find /usr -perm a=rx`

很多时候，我们只想匹配文件权限的一个**子集**。比如，检索可以直接被任何用户执行的文件，即只关心文件的执行权限，而不用管其读写权限是什么。

上述的需求可以通过以下命令实现：`find / -type f -perm /a=x`
 其中 `a=x` 前面的 `/` 符号即用来表示只匹配权限的某个子集（执行权限），而不用关心其他权限的具体设置。

###### 使用数字形式

`-perm` 选项也支持数字形式的文件权限标记。

`find /usr -perm 644` 搜索 /usr 目录下权限为 **644**（即 `rwxr-xr-x`）的文件

##### 9. 限制遍历的层数

find 命令默认是以**递归**的方式检索项目的，这有时候会导致得到的结果数量非常巨大。可以使用 `-maxdepth` 限制 find 命令递归的层数。

`find / -maxdepth 3` 搜索时向下递归的层数最大为 3

##### 10. 逻辑组合

在之前的例子中有出现多个搜索条件的**组合**以及对某个搜索条件的**反转**。
 实际上 find 命令支持 **“and”** 和 **“or”** 两种逻辑运算，对应的命令选项分别是 `-a` 和 `-o`。通过这两个选项可以对搜索条件进行更复杂的组合。

此外还可以使用**小括号**对搜索条件进行**分组**。注意 `find` 命令中的小括号常需要用**单引号**包裹起来。因小括号在 Shell 中有特殊的含义。

如检索 /usr 下文件名以 `python` 开头且类型为目录的文件
 `find /usr -type d -name 'python*'`

该命令等同于：
 `find /usr -type d -a -name 'python*'`

更复杂的组合形式如：
 `find / '(' -mmin -5 -o -mtime +50 ')' -a -type f`

#### 三、对搜索结果执行命令

##### 1. 删除文件

`-delete` 选项可以用来删除搜索到的文件和目录。

如删除 home 目录下所有的空目录：
 `find ~ -type d -empty -delete`

##### 2. 执行自定义命令

`-exec` 选项可以对搜索到的结果执行特定的命令。

如需要将 home 目录下所有的 MP3 音频文件复制到移动存储设备（假设路径是 `/media/MyDrive`），可使用下面的命令：
 `find ~ -type f -name '*.mp3' -exec cp {} /media/MyDrive ';'`

其中的**大括号**（`{}`）作为检索到的文件的 **占位符** ，而分号（ `;`）作为命令结束的标志。因为分号是 Shell 中有特殊含义的符号，所以需要使用单引号括起来。
 每当 find 命令检索到一个符合条件的文件，会使用其完整路径取代命令中的 `{}`，然后执行 `-exec` 后面的命令一次。

另一个很重要的用法是，在多个文件中检索某个指定的字符串。
 如在用户主目录下的所有文件中检索字符串 `hello` ，可以使用如下命令：
 `find ~ -type f -exec grep -l hello {} ';'`

###### -exec 选项中的 + 符号

创建 Gzip 格式的压缩文件的命令为：`tar -czvf filename.tar.gz <list of files>`

现在假设需要将用户主目录下所有的 MP3 文件添加到压缩包 `music.tar.gz` 中，直观的感觉是，其命令应为如下形式：
 `find ~ -type f -name '*.mp3' -exec tar -czvf music.tar.gz {} ';'`

实际情况是，这样得到的 `music.tar.gz` 其实只包含一个 MP3 文件。
 原因是 find 命令**每次**发现一个音频文件，都会再执行一次 `-exec` 选项后面的压缩命令。导致先前生成的压缩包被覆盖。

可以先让 find 命令检索出所有符合条件的音频文件，再将得到的**文件列表**传递给后面的压缩命令。完整的命令如下：
 `find ~ -type f -name '*.mp3' -exec tar -czvf music.tar.gz {} +`

###### 显示文件信息

如果想浏览搜索到的文件（目录）的详细信息（如权限和大小等），可以直接使用 `-ls` 选项。

`find / -type file -size +1G -ls` 浏览所有 1G 以上大小的文件的详细信息

#### 四、常用参数汇总

| 参数              | 解析                                               |
| ----------------- | -------------------------------------------------- |
| -atime *n[smhdw]* | 距离文件上次被访问时的时间间隔                     |
| -ctime *n[smhdw]* | 距离文件创建时的时间间隔                           |
| -delete           | 删除检索到的文件                                   |
| -depth *n*        | 检索深度为 n 的文件，即位于指定目录以下 n 层的文件 |
| -empty            | 检索空文件或空目录                                 |
| -fstype *type*    | 指定文件所在的文件系统的类型                       |
| -group *gname*    | 指定文件的属组                                     |
| -iname *pattern*  | 同 `-name`，忽略大小写                             |
| -ipath *pattern*  | 同 `-path`，忽略大小写                             |
| -ls               | 打印搜索到的文件的详细信息                         |
| -maxdepth *n*     | 指定递归的最大层数为 n                             |
| -mtime *n[smhdw]* | 距离文件上次发生变更时的时间间隔                   |
| -name *pattern*   | 搜索时使用 `pattern` 对文件名进行匹配              |
| -path *pattern*   | 搜索时使用 `pattern` 对文件路径进行匹配            |
| -perm *mode*      | 根据文件权限搜索                                   |
| -size *n[ckMGTP]* | 根据文件大小搜索                                   |
| -type *t*         | 根据文件类型搜索                                   |
| -user *uname*     | 指定文件的属主                                     |

