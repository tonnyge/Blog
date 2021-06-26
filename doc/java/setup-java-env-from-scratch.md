---
title: 从零开始配置 Java 学习环境
date: 2021-06-26 14:32:36
category: 实用教程
tags:
  - Java
---

# 从零开始配置 Java 学习环境

> 工欲善其事，必先利其器。
>
> 学习编程（Java）也是如此。
>
> 作为 Java 初学者，我们应该使用什么开发工具呢？
>
> 要我说，选择 [VSCode](https://code.visualstudio.com)（Visual Studio Code）。

在本节教程开始之前，推荐满足以下条件：

- **尽量**能访问外网
- **尽量**能够使用[Google](https://google.com)（实在不行，[Microsoft Bing](https://www.bing.com/)总能用吧……）
- 有遇到问题能够在网上寻找答案的能力

本文将讲解以下软件的安装：

- jdk 16（目前最新版本）

  因作者使用 m1 版的 mac，所以 jdk 采用的是 zulu jdk

- VSCode（及其必要的扩展）

同时，考虑到不同的操作系统，本文将涵盖以下系统：

- Windows 10
- macOS 11 Big Sur

## Windows 平台环境搭建

### jdk 16 安装及配置

#### jdk 16 安装

1. 打开[Zulu jdk 官网](https://www.azul.com/downloads/?package=jdk#download-openjdk)，我这边推荐下载 zip 包

   ![image-20210626152905008](setup-java-env-from-scratch/image-20210626152905008.png)

2. 下载完成后，将其解压到一个你能找到的地方。例如，我将它解压到`C:\Develop\jdk16`

   ![image-20210626153408463](setup-java-env-from-scratch/image-20210626153408463.png)

#### jdk 配置

针对 jdk 的配置，主要是下面两点：

- `JAVA_HOME`环境变量配置
- `PATH`环境变量配置

1. 右击“**此电脑**”，点击“**属性**”

   ![image-20210626153629421](setup-java-env-from-scratch/image-20210626153629421.png)

2. 点击“**高级系统设置**”

   ![image-20210626153653327](setup-java-env-from-scratch/image-20210626153653327.png)

3. 点击“**环境变量**”

   ![image-20210626153736871](setup-java-env-from-scratch/image-20210626153736871.png)

4. 在“**系统变量**”中添加`JAVA_HOME`变量，并选择`C:\Develop\jdk16`

   ![image-20210626153922446](setup-java-env-from-scratch/image-20210626153922446.png)

5. 为 PATH 变量添加 Java 内容。因步骤较为复杂，具体以如下 gif 为准

   ![iShot2021-06-26 15.43.55](setup-java-env-from-scratch/iShot2021-06-26%2015.43.55.gif)

6. 最后，打开`cmd`，执行`java -version`，如果看到以下内容则配置成功，否则，请重新配置。

   ![image-20210626154745950](setup-java-env-from-scratch/image-20210626154745950.png)

### Visual Studio Code 安装及配置

#### VSCode 安装

1. 打开[VSCode 官网](https://code.visualstudio.com)，点击大大的`Download for Windows`按钮，耐心等待下载完成。

   ![image-20210626151123444](setup-java-env-from-scratch/image-20210626151123444.png)

2. 下载完成后，打开安装包。

3. 选择“**我同意此协议**”，点击“**下一步**”

   ![image-20210626151451255](setup-java-env-from-scratch/image-20210626151451255.png)

4. 安装路径**推荐使用默认**，点击“**下一步**”

   ![image-20210626151553919](setup-java-env-from-scratch/image-20210626151553919.png)

5. 开始菜单默认即可，点击“**下一步**”

   ![image-20210626151631960](setup-java-env-from-scratch/image-20210626151631960.png)

6. **附加任务**推荐全选，点击“**下一步**”

   ![image-20210626151733837](setup-java-env-from-scratch/image-20210626151733837.png)

7. 点击“**安装**”

   ![image-20210626151828759](setup-java-env-from-scratch/image-20210626151828759.png)

8. 耐心等待安装完成

   ![image-20210626151849927](setup-java-env-from-scratch/image-20210626151849927.png)

9. 运行 VSCode，进行扩展安装

   ![image-20210626151938992](setup-java-env-from-scratch/image-20210626151938992.png)

#### 扩展安装

1. 中文插件安装

   ![image-20210626152457944](setup-java-env-from-scratch/image-20210626152457944.png)

2. Java 插件安装

   ![image-20210626152236458](setup-java-env-from-scratch/image-20210626152236458.png)

3. Code Runner 安装

   ![image-20210626152424700](setup-java-env-from-scratch/image-20210626152424700.png)

## macOS 平台环境搭建

### jdk 16 安装

1. 下载 jdk，地址上面有

   ![image-20210626155314918](setup-java-env-from-scratch/image-20210626155314918.png)

2. 下载完成后，建议将其解压到一个你能找到的位置。例如，我将其解压到`~/Develop/jdk16`

3. 打开用户配置文件（如`~/.bash_profile`或`~/.zprofile`），在最下面添加以下内容（其中`xxx`为用户名）：

   ```bash
   JAVA_HOME=/Users/xxx/Develop/jdk16/zulu-16.jdk/Contents/Home
   PATH=$JAVA_HOME/bin:$PATH:.
   export JAVA_HOME
   export PATH
   ```

4. 重启终端，输入`java -version`，如提示以下内容则配置成功，否则请重新配置。

   ```
   openjdk version "16.0.1" 2021-04-20
   OpenJDK Runtime Environment Zulu16.30+15-CA (build 16.0.1+9)
   OpenJDK 64-Bit Server VM Zulu16.30+15-CA (build 16.0.1+9, mixed mode)
   ```

### VSCode 安装

在官网下载安装包，将其拖到`应用程序`即可

![image-20210626160520926](setup-java-env-from-scratch/image-20210626160520926.png)

![image-20210626160630771](setup-java-env-from-scratch/image-20210626160630771.png)

至于扩展？？？向上翻 Windows 的就行了……没必要重复写。
