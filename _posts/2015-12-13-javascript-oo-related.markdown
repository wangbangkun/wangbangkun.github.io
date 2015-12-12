---
layout:     post
title:      javascript面向对象相关问题
date:       2015-12-13 00:18:10
summary:    PHP 7.0.0, migration
categories: javascript
tag:        object oriented
---

---

使用面向对象的方式进行编程，抛开抽象、封装、继承、多态不谈，给我最深的感受是终于不用再写面条一样的代码。代码复用率提高，代码量减少。下面是在这个过程中遇到的问题。

* this
面向对象少不了使用this。javascript中的this跟其他语言的this不太一样。javascript中this的值不是一成不变，它会根据执行上下文发生变化。通过下面的demo说明。

{% highlight html %}
<html>
  <head>
    <title>demo</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.js"></script>
  </head>
  <body>
    <input id="txt" type="text"/>
    <input id="btn" type="button" value="click me"/>
  </body>
  <script type="text/javascript">
    function Foo()
    {
        this.txt = $('#txt');
        this.btn = $('#btn');
        this.btn.click(this.log);    //①
    }

    Foo.prototype.log = function(){
        console.log(this);    //② <input id="btn" type="button" value="click me">
    }

    $(document).ready(function(){
        new Foo();
    });
  </script>
</html>
{% endhighlight %}

①处的this执行上下文是Foo，指代Foo的实例；而②处的this执行上下文是$('#btn')，jQuery处理器(handler)中this指代jQuery对象对应的DOM元素，即&lt;input id="btn" type="button" value="click me"&gt;。

另外一种书写方式。

{% highlight html %}
<html>
  <head>
    <title>demo</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.js"></script>
  </head>
  <body>
    <input id="txt" type="text"/>
    <input id="btn" type="button" value="click me"/>
  </body>
  <script type="text/javascript">
    function Foo()
    {
        this.txt = $('#txt');
        this.btn = $('#btn');
        this.btn.click(function(){
            //①
        });
    }

    Foo.prototype.log = function(){
        console.log(this);
    }

    $(document).ready(function(){
        new Foo();
    });
  </script>
</html>
{% endhighlight %}
①处不能直接使用this调用log方法(此时的this指代&lt;input id="btn" type="button" value="click me"&gt;)，为了在处理器中调用Foo的log方法，可以先使用新变量将this缓存：

{% highlight javascript%}
<script type="text/javascript">
    function Foo()
    {
        var self = this;
        this.txt = $('#txt');
        this.btn = $('#btn');
        this.btn.click(function(){
            self.log();
        });
    }

    Foo.prototype.log = function(){
        console.log(this);    //② Foo {txt: jQuery.fn.jQuery.init[1], btn: jQuery.fn.jQuery.init[1]}
    }

    $(document).ready(function(){
        new Foo();
    });
</script>
{% endhighlight %}
这种情况下②处this执行上下文是Foo，因此在log方法中可以使用this.txt等访问Foo的属性。
