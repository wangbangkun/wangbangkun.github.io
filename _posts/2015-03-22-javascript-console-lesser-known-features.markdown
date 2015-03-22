---
layout:     post
title:      javascript console 少为人知的方法
date:       2015-03-22 22:40:35
summary:    javascript console feature
categories: javascript
---

---

我们已经使用<a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console">console</a>工具很长时间了（谢谢Firebug）；但是大多数人仅仅使用基本的方法，如console.log()或者console.error()。
然而console API十分强大而且它提供了很多有趣的方法。
要时刻牢记console API不是标准的而且也不会标准化。没有绝对的保证这些方法一定有效；*你一定不要在产品中使用console*。

### 字符串置换
你可以使用：
{% highlight javascript %}
console.log('User %s has %d items', 'John', 5);

// "User John has 5 items"
{% endhighlight %}

字符串置换十分有效，在避开“+”困扰同时防止单引号/双引号错误。

{% highlight javascript %}
var example = " This -> ' and this -> '";
 console.log('Here is my string "%s"', example);

// "Here is my string " This -> ' and this -> '""
{% endhighlight %}

当下，这是被支持的标识符：

%**s** *字符串* : IE, Chrome, Firefox

%**d** 或者 %**i** *整数* : IE, Chrome, Firefox

%**f** *浮点值* : IE, Chrome, Firefox

%**o** *Javascript 对象* : IE, Chrome, Firefox
Object将被整齐输出或成为指向检查器的链接。DOM Object也受支持。

%**c** *对后续文字应用CSS规则* ： Chrome, Firefox
例子：
{% highlight javascript %}
console.log(‘There are now %c%d%c listeners’, ‘font-weight: bold;’, 2, ‘font-weight: normal;’);

{% endhighlight %}

%**b** *二进制值* ： IE

%**x** *十六进制值* ：IE

