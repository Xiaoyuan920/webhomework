# Git
## git log
查看git提交记录
## 查看提交的代码的行数
```java
 git log  --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```
## git remote -v
查看git远程仓库
## git status
查看git仓库工作树情况