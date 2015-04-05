---
layout:     post
title:      jQuery video note
date:       2015-02-14 21:34:50
summary:    视频笔记
categories: php
---

---

### 匿名函数自动执行
{% highlight javascript %}
(function( window, undefined ){
    ...
})( window );
{% endhighlight %}
使用 window 作为参数有两点作用：

1.缩短搜索到全局变量（window）所需时间

> * When control is transferred to ECMAScript executable code, control is entering an execution context. Active execution contexts logically form a stack. The top execution context on this logical stack is the running execution context.[^ecma]

2.便于代码压缩

### jQuery构造函数设计技巧
使用jQuery的时候，可以直接在传入参数创建jQuery对象之后直接调用jQuery拥有的方法，免去中间执行初始化方法。源码如下
{% highlight javascript %}
    jQuery = function( selector, context ) {
        return new jQuery.fn.init( selector, context, rootjQuery );
    },
    
jQuery.fn = jQuery.prototype = {
    ...
    init: function( selector, context, rootjQuery ){},
    ...
}；
jQuery.fn.init.prototype = jQuery.fn;
{% endhighlight %}
原理是创建jQuery对象时，返回初始化对象；之后将jQuery的原型赋值给jQuery.fn.init的原型。所谓继承。


[^ecma]:<a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf" target="_blank">Ecma-262.pdf</a>