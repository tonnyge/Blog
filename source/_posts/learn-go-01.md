---
title: Golang学习 - 第一个程序 Hello World
date: 2021-06-18 13:25:20
categories: 开发相关
tags: Golang
---

# 第一个程序 Hello World

**注意：因为我用的是 macOS 系统，所以以下内容均针对 macOS。**

## 环境下载

### Golang

Go 官网下载地址：[https://golang.org/dl/](https://golang.org/dl/)

Go 官方镜像站：[https://golang.google.cn/dl/](https://golang.google.cn/dl/)

### Visual Studio Code

官网：[https://code.visualstudio.com/](https://code.visualstudio.com/)

## 环境安装

回头来补~~（没有回头，不补了）~~

## 环境配置

### Golang

为 Golang 配置代理

~~（不要问我为什么……）~~

```bash
go env -w GOPROXY=https://goproxy.cn,direct
```

### Visual Studio Code

- `Go` 插件，链接：[https://marketplace.visualstudio.com/items?itemName=golang.Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
- `Code Runner`插件，链接：[https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

## 第一个程序

1. 用 vscode 打开存放的目录
2. 输入 `go mod init github.com/gtn1024/helloworld`

   其中，`github.com/gtn1024/helloworld`为包名

   随后，你将会在当前目录下看到`go.mod`文件，为以下内容

   ```go
      module github.com/gtn1024/helloworld  // 模块名

      go 1.16  // go 版本
   ```

3. 创建`main.go`文件，输入以下代码：

   ```go
   package main

   import "fmt"

   func main(){
     fmt.Println("Hello World!")
   }
   ```

   此时，vscode 右下角可能有提示，点击`install all`，耐心等待即可。

4. 运行 go 程序

   如果已经成功安装`Code Runner`插件，点击右上角的箭头符号即可运行。

   ![](https://img-1251985644.file.myqcloud.com/images/20210618141511.png)

## 编译 go 程序

打开终端，输入`go build`即可编译

![](https://img-1251985644.file.myqcloud.com/images/20210618141708.png)

## 跨平台编译

编译到 Windows x64 平台：

```bash
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```

编译到 macOS x64 平台：

```bash
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build
```

编译到 Linux ARM64 平台：

```bash
CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build
```

## 参考资料

- [https://www.liwenzhou.com/posts/Go/install_go_dev/](https://www.liwenzhou.com/posts/Go/install_go_dev/)
