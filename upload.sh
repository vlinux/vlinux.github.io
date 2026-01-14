#!/bin/bash
#上传valaxy分支
info=$1
#if ["$info" = ""]; then
#  info=":pencil: update content"
#fi
#echo $info
#git add -A
#git commit -m "$info"
#git push
pnpm run build:spa
#上传mian分支
cd /Users/vlinux/vlinux/blog/vlinux.github.io/  && rm -rf * && cp -rp /Users/vlinux/Documents/valaxy-blog/dist/* .
git add -A
git commit -m "$info"
git push --force
