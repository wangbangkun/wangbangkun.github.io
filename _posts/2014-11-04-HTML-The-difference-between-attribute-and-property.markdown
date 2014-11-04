---
layout:     post
title:      HTML The difference between attribute and property
date:       2014-11-04 23:00:59
summary:    属性（attribute）和特性（property）的区别。
categories: html
---

---

<p>原文链接：<a href="http://jquery-howto.blogspot.com/2011/06/html-difference-between-attribute-and.html">HTML: The difference between attribute and property</a></p>

在这篇短文中我将说明在HTML中attributes和properties的差异。jQuery 1.6引入的*.prop()*函数增加了许多关于两者差异的问题。我希望这篇文章能够帮助你理解它。

#### 什么是属性（*attribute*）
*attributes*携带与一个HTML元素相关的附加信息，以

    name="value"

形式出现。举例来说，

    <div class="my-class"></div>

这里我们有一个div标签，它有一个值为**my-class**的**class**属性（*attribute*）。

#### 什么是特性（*property*）
特性（*property*）是在HTML DOM树中属性（*attribute*）的表示。所以上例中会有一个名为**className**的特性（*property*），其值为**my-class**。

    DIV 节点
    |- nodeName = "DIV"
    |- className = "my-class"
    |-style
        |- ...
    |- ...

#### 属性（*attribute*）和特性（*property*）的区别

属性（*attribute*）位于HTML 文本文档/文件，然而特性（*property*）位于HTML DOM树中。这意味着属性（*attribute*）不会改变而且始终携带初始（默认）值。然而特性（*property*）可以改变。举例来说，当用户勾选一个复选框，向文本区输入文本或者使用JavaScript改变特性（*property*）值时。

这里是直观表示：

<image src="{{ "/images/posts/141104/01.png" | prepend: site.baseurl }}">

<p>假设用户在输入框中输入他的名字"Joe"。这里是一个元素的属性（<em>attribute</em>）和特性（<em>property</em>）的值。</p>

<image src="{{ "/images/posts/141104/02.png" | prepend: site.baseurl }}">

<p>正如你所看到，只有元素的特性（<em>property</em>）值改变了，因为它位于DOM中而且是动态的。但是位于HTML文本中的属性（<em>attribute</em>）值却不会发生变化。</p>

