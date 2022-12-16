#!/bin/bash
#上传valaxy分支
info=$1
if ["$info" = ""]; then
  info=":pencil: update content"
fi
git add -A
git commit -m "$info"
git push 
pnpm run build
#上传mian分支
cd /Users/vlinux/vlinux/blog/vlinux.github.io/  && rm -rf * && cp -rp /Users/vlinux/vlinux/blog/valaxy/vlinux.github.io/dist/* .
git add -A
git commit -m "$info"
git push --force
