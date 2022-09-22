# Git
## 查看日志
```java
git log
```
## 查看提交的代码的行数
```java
 git log  --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```
