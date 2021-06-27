---
title: Markdown 入门
date: 2021-06-26 14:32:36
category: 实用教程
tags:
  - Markdown
---

# Markdown 入门

Markdown 是一个轻量级，并且拥有易于使用的语法的，便于写作的一种写作方式。

通过本文，你将学会如何使用 Markdown 编写文档。

## Markdown 是啥

[Markdown](http://daringfireball.net/projects/markdown/)是在网络上写作的一种方式。在 Markdown 中，你可以使文本**加粗**、_斜体_，添加图片、超链接，制作列表、表格等等。

Markdown 文件一般以`.md`、`.markdown`为扩展名。

## 基本语法

以下是 Markdown 的基本语法概述。

### 标题

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

### 加粗、斜体

```markdown
**这句话将被加粗**

_这句话将会变为斜体_

_当然，你也可以**组合**使用_
```

### 列表

#### 无序列表

```markdown
- 项目 1
- 项目 2
  - 项目 2a
  - 项目 2b
```

#### 有序列表

```markdown
1. 项目 1
2. 项目 2
   1. 项目 2a
   2. 项目 2b
3. 项目 3
```

### 图片

```markdown
![Logo](/logo.png)
语法：![名称](图片URL)
```

### 链接

```markdown
[Google](https://google.com)
语法：[显示的名称](URL)
```

### 引用

```markdown
以下是 Markdown 官网的介绍：

> Markdown is a text-to-HTML conversion tool for web writers.
>
> Markdown allows you to write using an easy-to-read, easy-to-write plain text format,
>
> then convert it to structurally valid XHTML (or HTML).
```

### 代码

#### 内联代码

```markdown
通常，你可以使用`ls`来查看当前目录下的文件。
```

#### 代码块

````markdown
第一个 Java 程序（Hello World）代码如下：

```java
public class HelloWorld{
  public static void main(String[] args){
    System.out.println("Hello World!");
  }
}
```
````

### 任务列表

```markdown
写一篇博客有以下步骤

- [x] 先将其写成 `Markdown` 文档
- [x] 对文档进行核查
- [ ] 将其发布到自己的博客上
- [ ] 同步发布到其他平台
```

解析后的效果：

写一篇博客有以下步骤

- [x] 先将其写成 `Markdown` 文档
- [x] 对文档进行核查
- [ ] 将其发布到自己的博客上
- [ ] 同步发布到其他平台

### 表格

```markdown
| 编号 | 姓名 |
| ---- | ---- |
| 001  | 张三 |
| 002  | 李四 |
| 003  | 李黑 |
```

解析后的效果：
| 编号 | 姓名 |
| ---- | ---- |
| 001 | 张三 |
| 002 | 李四 |
| 003 | 李黑 |

### 删除线

```markdown
~~咕咕咕~~
```

解析后的效果：~~咕咕咕~~

## 写在最后

当然，Markdown 中也可以使用一些独特的语法制作流程图等内容，具体的语法因软件而异，本文也无法全方位地讲解。
