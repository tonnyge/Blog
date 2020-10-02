---
title: 为 Git 设置代理
date: 2020-10-02 18:44:29
categories:
  - 开发相关
tags:
  - git
  - ssh
  - 代理
---

在国内，不使用代理，你想用 GitHub 进行 clone、pull、push 等基本是不可能的事情。

速度让你崩溃到极点

```shell
$ git clone https://github.com/gradle/gradle.git
Cloning into 'gradle'...
remote: Enumerating objects: 439, done.
remote: Counting objects: 100% (439/439), done.
remote: Compressing objects: 100% (239/239), done.
Receiving objects:   1% (65606/1738177), 1.05 MiB | 12.38 KiB/s
```

这篇文章主要是为了让 git 使用代理

**注 1**：本文操作环境为 Windows 10

## https 代理

执行以下命令

```shell
git config --global http.proxy "http://127.0.0.1:10086"
git config --global https.proxy "https://127.0.0.1:10086"
```

执行后 `~/.gitconfig` 文件

```
[http "https://github.com"]
        proxy = socks5://127.0.0.1:10086
[https "https://github.com"]
        proxy = socks5://127.0.0.1:10086
```

测试一下，轻松跑满带宽

```shell
$ git clone https://github.com/gradle/gradle.git
Cloning into 'gradle'...
remote: Enumerating objects: 439, done.
remote: Counting objects: 100% (439/439), done.
remote: Compressing objects: 100% (239/239), done.
Receiving objects:   9% (156436/1738177), 74.14 MiB | 10.56 MiB/s
```

## ssh 代理

https clone 是快了，但是每次 push 的时候都需要输入密码，真 xx 麻烦

这里就需要设置 ssh 代理了

修改 `~/.ssh/config` 文件

```
# ~/.ssh/config
Host github.com
  User git
  IdentityFile "~/.ssh/id_rsa"
  ProxyCommand C:/Users/[用户目录]/scoop/apps/git/current/mingw64/bin/connect.exe -S 127.0.0.1:10086 %h %p
```

因为我的 git 是使用 `scoop` 安装的，所以安装的目录可能有点不一样

不建议将 git 安装在 `Program Files` 目录下，否则可能出现各种各样的问题

再来测试一下

```shell
$ git clone git@github.com:gradle/gradle.git
Cloning into 'gradle'...
remote: Enumerating objects: 439, done.
remote: Counting objects: 100% (439/439), done.
remote: Compressing objects: 100% (239/239), done.
Receiving objects:   5% (97645/1738177), 40.91 MiB | 6.24 MiB/s
```

ssh 方式 clone 文件相比 https 方式较慢，但也足够了
