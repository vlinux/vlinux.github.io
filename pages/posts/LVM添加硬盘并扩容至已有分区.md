---
title: LVM添加硬盘并扩容至已有分区
categories: Linux技术
tags: [LVM]
date: 2022-01-26 15:42:00
---
# LVM添加硬盘并扩容至已有分区

## LVM简介

LVM是 Logical Volume Manager（逻辑卷管理）的简写，它是Linux环境下对磁盘分区进行管理的一种机制。LVM将一个或多个磁盘分区（PV）虚拟为一个卷组（VG），相当于一个大的硬盘，我们可以在上面划分一些逻辑卷（LV）。当卷组的空间不够使用时，可以将新的磁盘分区加入进来。我们还可以从卷组剩余空间上划分一些空间给空间不够用的逻辑卷使用。

LVM模型如下：

![fahp1lv120](https://cos.vlinux.cn/www-vlinux-cn-blog-img/fahp1lv120.png#mirages-width=700&mirages-height=542&mirages-cdn-type=5)

### LVM添加硬盘

新增一块硬盘，大小为200G，如下：

```js
# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
fd0               2:0    1    4K  0 disk 
sda               8:0    0   40G  0 disk 
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0   39G  0 part 
  ├─centos-root 253:0    0   37G  0 lvm  /
  └─centos-swap 253:1    0    2G  0 lvm  [SWAP]
sdb               8:16   0  200G  0 disk 
sr0              11:0    1 1024M  0 rom
```

### 分区(fdisk方式，针对小型磁盘<2T)

> ⚠️fdisk方式或parted模式，选择一种即可，无需两个都做

```js
# fdisk /dev/sdb        #执行此命令，进行分区
Welcome to fdisk (util-linux 2.23.2).

Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table
Building a new DOS disklabel with disk identifier 0xdf09eb6a.

Command (m for help): p   #在此输入p

Disk /dev/sdb: 214.7 GB, 214748364800 bytes, 419430400 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0xdf09eb6a

    Device Boot      Start         End      Blocks   Id  System

Command (m for help): n   #在此输入n
Partition type:
    p   primary (0 primary, 0 extended, 4 free)
    e   extended
Select (default p): p
Partition number (1-4, default 1): 1    #在此输入1
First sector (2048-419430399, default 2048):       #回车
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-419430399, default 419430399):     #回车
Using default value 419430399
Partition 1 of type Linux and of size 200 GiB is set

Command (m for help): t   #在此输入t
Selected partition 1
Hex code (type L to list all codes): L     #在此输入L

  0  Empty           24  NEC DOS         81  Minix / old Lin bf  Solaris        
  1  FAT12           27  Hidden NTFS Win 82  Linux swap / So c1  DRDOS/sec (FAT-
  2  XENIX root      39  Plan 9          83  Linux           c4  DRDOS/sec (FAT-
  3  XENIX usr       3c  PartitionMagic  84  OS/2 hidden C:  c6  DRDOS/sec (FAT-
  4  FAT16 <32M      40  Venix 80286     85  Linux extended  c7  Syrinx         
  5  Extended        41  PPC PReP Boot   86  NTFS volume set da  Non-FS data    
  6  FAT16           42  SFS             87  NTFS volume set db  CP/M / CTOS / .
  7  HPFS/NTFS/exFAT 4d  QNX4.x          88  Linux plaintext de  Dell Utility   
  8  AIX             4e  QNX4.x 2nd part 8e  Linux LVM       df  BootIt         
  9  AIX bootable    4f  QNX4.x 3rd part 93  Amoeba          e1  DOS access     
  a  OS/2 Boot Manag 50  OnTrack DM      94  Amoeba BBT      e3  DOS R/O        
  b  W95 FAT32       51  OnTrack DM6 Aux 9f  BSD/OS          e4  SpeedStor      
  c  W95 FAT32 (LBA) 52  CP/M            a0  IBM Thinkpad hi eb  BeOS fs        
  e  W95 FAT16 (LBA) 53  OnTrack DM6 Aux a5  FreeBSD         ee  GPT            
  f  W95 Ext'd (LBA) 54  OnTrackDM6      a6  OpenBSD         ef  EFI (FAT-12/16/
10  OPUS            55  EZ-Drive        a7  NeXTSTEP        f0  Linux/PA-RISC b
11  Hidden FAT12    56  Golden Bow      a8  Darwin UFS      f1  SpeedStor      
12  Compaq diagnost 5c  Priam Edisk     a9  NetBSD          f4  SpeedStor      
14  Hidden FAT16 <3 61  SpeedStor       ab  Darwin boot     f2  DOS secondary  
16  Hidden FAT16    63  GNU HURD or Sys af  HFS / HFS+      fb  VMware VMFS    
17  Hidden HPFS/NTF 64  Novell Netware  b7  BSDI fs         fc  VMware VMKCORE 
18  AST SmartSleep  65  Novell Netware  b8  BSDI swap       fd  Linux raid auto
1b  Hidden W95 FAT3 70  DiskSecure Mult bb  Boot Wizard hid fe  LANstep        
1c  Hidden W95 FAT3 75  PC/IX           be  Solaris boot    ff  BBT            
1e  Hidden W95 FAT1 80  Old Minix      
Hex code (type L to list all codes): 8e      #输入lvm类型的hex代码
Changed type of partition 'Linux' to 'Linux LVM'

Command (m for help): p    #在此输入p

Disk /dev/sdb: 214.7 GB, 214748364800 bytes, 419430400 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0xdf09eb6a

    Device Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048   419430399   209714176   8e  Linux LVM

Command (m for help): w     #保存
The partition table has been altered!

Calling ioctl() to re-read partition table.
Syncing disks.
```

### 分区（parted模式，针对磁盘>2T）

>  ⚠️fdisk方式或parted模式，选择一种即可，无需两个都做

```bash
# parted /dev/sdc
GNU Parted 3.1
Using /dev/sdc
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) mklabel gpt  #将MBR分区形式转为GPT分区形式,parted只支持GPT形式                                                 
Warning: The existing disk label on /dev/sdc will be destroyed and all data on this disk will be lost. Do you want to continue?
Yes/No? Yes  #Yes                                                             
(parted) mkpart sdc1 xfs 0 -1   #创建分区sdc1，文件系统类型为xfs，将整个磁盘都创建为一个分区                                          
Warning: The resulting partition is not properly aligned for best performance.
Ignore/Cancel? Ignore   #Ignore                                     
(parted) toggle 1 lvm  #更换分区为LVM格式                                                    
(parted) quit         #退出                                                  
Information: You may need to update /etc/fstab.

# lsblk                      
```



### 创建物理卷PV

查看是否以分好区

```js
# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
fd0               2:0    1    4K  0 disk 
sda               8:0    0   40G  0 disk 
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0   39G  0 part 
  ├─centos-root 253:0    0   37G  0 lvm  /
  └─centos-swap 253:1    0    2G  0 lvm  [SWAP]
sdb               8:16   0  200G  0 disk 
└─sdb1            8:17   0  200G  0 part 
sr0              11:0    1 1024M  0 rom
```

创建物理卷

```js
# pvcreate /dev/sdb1 
  Physical volume "/dev/sdb1" successfully created.
```

查看物理卷创建情况

```js
# pvdisplay 
  --- Physical volume ---
  PV Name               /dev/sda2
  VG Name               centos
  PV Size               <39.00 GiB / not usable 3.00 MiB
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              9983
  Free PE               1
  Allocated PE          9982
  PV UUID               jYS4Ia-7Hy9-2r9n-QGqg-Uw2I-B8D7-mQLcoR
    
  "/dev/sdb1" is a new physical volume of "<200.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sdb1      #这里是我们刚创建的物理卷
  VG Name               
  PV Size               <200.00 GiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               NGD0Ox-9ezO-vXk2-xlgo-VuqM-be8n-LBVxtj
```

### 将物理卷PV加入卷组VG

查看卷组情况

```js
# vgdisplay 
  --- Volume group ---
  VG Name               centos    #卷组的名称
  System ID             
  Format                lvm2
  Metadata Areas        1
  Metadata Sequence No  3
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                1
  Act PV                1
  VG Size               <39.00 GiB
  PE Size               4.00 MiB
  Total PE              9983
  Alloc PE / Size       9982 / 38.99 GiB
  Free  PE / Size       1 / 4.00 MiB
  VG UUID               oIgyce-IO2t-FegU-Kgvb-n2Us-6K3u-rbJCdy
```

将新的分区/dev/sdb1加入到卷组中，这里的卷组名为centos

```js
# vgextend centos /dev/sdb1 
  Volume group "centos" successfully extended
```

添加完成后再次查看卷组信息

```js
# vgdisplay                 
  --- Volume group ---
  VG Name               centos
  System ID             
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  4
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               238.99 GiB     #可以看到容量已经增加了200G
  PE Size               4.00 MiB
  Total PE              61182
  Alloc PE / Size       9982 / 38.99 GiB
  Free  PE / Size       51200 / 200.00 GiB
  VG UUID               oIgyce-IO2t-FegU-Kgvb-n2Us-6K3u-rbJCdy
```

### 扩容已有分区

下面是对现有分区进行逻辑卷扩容，我们这里根分区为40G，我们准备扩容根分区 查看根分区的LV路径

```js
# df -h
Filesystem               Size  Used Avail Use% Mounted on
devtmpfs                 7.8G     0  7.8G   0% /dev
tmpfs                    7.8G     0  7.8G   0% /dev/shm
tmpfs                    7.8G  8.9M  7.8G   1% /run
tmpfs                    7.8G     0  7.8G   0% /sys/fs/cgroup
/dev/mapper/centos-root   37G  1.7G   36G   5% /
/dev/sda1               1014M  179M  836M  18% /boot
tmpfs                    1.6G     0  1.6G   0% /run/user/0
```

或者通过lvdisplay一样可以查看，这里的路径为`/dev/mapper/centos-root`，下面进行扩容

```js
# lvextend -l +100%FREE /dev/mapper/centos-root
  Size of logical volume centos/root changed from 36.99 GiB (9470 extents) to 236.99 GiB (60670 extents).
  Logical volume centos/root successfully resized.
```

查看扩容后的逻辑卷大小

```js
# lvdisplay /dev/mapper/centos-root
  --- Logical volume ---
  LV Path                /dev/centos/root
  LV Name                root
  VG Name                centos
  LV UUID                tnXHPR-Abe6-BNL4-6EdH-bgZI-UgDM-BfCHrm
  LV Write Access        read/write
  LV Creation host, time localhost, 2019-09-23 17:31:21 +0800
  LV Status              available
  # open                 1
  LV Size                236.99 GiB
  Current LE             60670
  Segments               2
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     8192
  Block device           253:0
```

然后使用xfs_groupfs进行在线调整xfs格式的文件系统大小

> 一般到上一步就可以扩容成功,终止操作了

```js
#XFS文件系统执行下方命令
# xfs_growfs /dev/mapper/centos-root 
#ext4文件系统执行
#resize2fs -p -F /dev/mapper/vg--data-lv--data

meta-data=/dev/mapper/centos-root isize=512    agcount=4, agsize=2424320 blks
          =                       sectsz=512   attr=2, projid32bit=1
          =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=9697280, imaxpct=25
          =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=4735, version=2
          =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 9697280 to 62126080
```

最后查看下根分区的大小是否扩容成功

```js
# df -h
Filesystem               Size  Used Avail Use% Mounted on
devtmpfs                 7.8G     0  7.8G   0% /dev
tmpfs                    7.8G     0  7.8G   0% /dev/shm
tmpfs                    7.8G  8.9M  7.8G   1% /run
tmpfs                    7.8G     0  7.8G   0% /sys/fs/cgroup
/dev/mapper/centos-root  237G  1.7G  236G   1% /
/dev/sda1               1014M  179M  836M  18% /boot
tmpfs                    1.6G     0  1.6G   0% /run/user/
```

### LVM自动扩容相关脚本

[file href="https://down.kococ.cn/shell/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%98%E5%8C%96%E8%84%9A%E6%9C%AC/disk.sh"]LVM扩容脚本[/file]