---
title: Windows Terminal添加右键菜单
date: 2020-10-09 23:33:23
categories:
  - 实用教程
tags:
  - Windows Terminal
---

**注意：Windows Terminal 已自动在右键菜单添加快捷选项，此篇文章仅供没有的朋友使用。**

Windows Terminal 安装后不会在资源管理器右键菜单添加快捷选项

不太方便

怎么添加呢？

1. 下载图标

   将[图标文件](https://raw.githubusercontent.com/microsoft/terminal/main/res/terminal.ico)放在`%USERPROFILE%\\AppData\\Local\\terminal\\terminal.ico`目录下

2. 导入以下注册表

   ```
   Windows Registry Editor Version 5.00

   [HKEY_CLASSES_ROOT\Directory\Background\shell\wt]
   @="Windows Terminal Here"
   "Icon"="%USERPROFILE%\\AppData\\Local\\terminal\\terminal.ico"

   [HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command]
   @="C:\\Users\\[YourUser]\\AppData\\Local\\Microsoft\\WindowsApps\\wt.exe -d ."
   ```

效果:

![](https://img-1251985644.image.myqcloud.com/img/blog/windows-terminal-right-key-menu/1.png)
