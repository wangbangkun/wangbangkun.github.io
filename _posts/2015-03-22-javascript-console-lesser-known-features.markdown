---
layout:     post
title:      javascript console 少为人知的方法
date:       2015-03-22 22:40:35
summary:    javascript console feature
categories: javascript
---

---

我们已经使用<a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console" target="_blank">console</a>工具很长时间了（谢谢Firebug）；但是大多数人仅仅使用基本的方法，如console.log()或者console.error()。
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

### 分组信息

信息能够被console.group()、console.groupCollapsed()和console.groupEnd()分组。

{% highlight javascript %}
console.group('First group');
console.log('a');
console.log('b');
console.log('c');
console.groupEnd();
console.group('Second group');
console.log('1');
console.log('2');
console.log('3');
console.group('Embeded subgroup');
console.log('α');
console.log('β');
console.log('γ');
console.groupEnd(); // For the "Embeded subgroup"
console.groupEnd(); // For the "Second group"
{% endhighlight %}

<img src="{{ "/images/posts/2015/03/22-1.png" | prepend: site.baseurl }}">

{% highlight javascript %}
console.groupCollapsed('Pre-collapsed to save your eyes');
console.log('Never Gonna %s', 'Give You Up');
console.log('Never Gonna %s', 'Get you down !');
console.info('This is a potato');
console.groupEnd();
{% endhighlight %}

<img src="{{ "/images/posts/2015/03/22-2.gif" | prepend: site.baseurl }}">

### 测定和分析

console.time()和console.timeEnd()可让你测定调用它们之间所用时间。

它们都使用一个标签作为参数，你可以启动多次（文档指出最多可达10,000）同时知道停止哪一个。
{% highlight javascript %}
var slowInitializer = function() {
    var collection = [];
    for (var i = 20000000; i > 0 ; i--) {
        collection.push(i);
        if (i === 1000) {
            console.time('Last iterations');
        }
    }
    console.timeEnd('Last iterations');
};
console.time('Slow initializer');
slowInitializer();
console.timeEnd('Slow initializer');
// Last iterations: 0.123ms Slow initializer: 2778.002ms
{% endhighlight %}

console.profile()和console.profileEnd()可以让你分析一部分代码。

console.profile()使用一个标签作为参数，你可以同时启动多次（没有信息表明最大次数）；console.profileEnd()将停止最后一次启动的分析器。

代码分析内容将会显示在浏览器的profiles或profiler(或其他相关的名字）标签中；显示内存/cpu/调用等信息。

{% highlight javascript %}
var fibonateIt = function(n) {
    return ((n < 2) ? n : (fibonateIt(n-1) + fibonateIt(n-2)));
};
console.profile('Fibonnaci generation');
fibonateIt(32);
console.profileEnd();
{% endhighlight %}

*IE浏览器*

<img src="{{ "/images/posts/2015/04/08-1.png" | prepend: site.baseurl }}">

*chrome浏览器*

<img src="{{ "/images/posts/2015/04/08-2.png" | prepend: site.baseurl }}">

你也可以使用console.count()用来计算某标记处被调用次数：

{% highlight javascript %}
$('#image').on('click', function() {
    console.count('Click on my image');
});
// Click on my image : 1
// Click on my image : 2
// [...]
// Click on my image : 12
{% endhighlight %}

不要将console.count()用于快速大量循环（像之前斐波那契的例子，这将导致console打印许多信息同时让浏览器变慢/不稳定。）

###条件日志

console.assert()可以让你通过将条件作为第一个参数进行条件调试。

如果第一参数是false(==松散比较而非===)，它将输出定义信息（或对象），否则将被忽略。

例如，循环中每1000次迭代时记录：

{% highlight javascript %}
for (var i = 0; i <= 10000; i++) {
    // Do something awesome.
    console.assert(i % 1000, 'Iteration #%d', i);
}
// "Iteration #0"
// "Iteration #1000"
// "Iteration #2000"
// "Iteration #3000"
// "Iteration #4000"
// "Iteration #5000"
// "Iteration #6000"
// "Iteration #7000"
// "Iteration #8000"
// "Iteration #9000"
{% endhighlight %}

**assert**听上去像是单元测试。当然可以用它进行类似单元测试，像是：

{% highlight javascript %}
console.assert(
    (fibonateIt(-1) === -1),
    'Fibonacci for -1 should be -1'
);
console.assert(
    (fibonateIt(0) === 0),
    'Fibonacci for 0 should be 0'
);
console.assert(
    (fibonateIt(10) === 55),
    'Fibonacci for 10 should be 55'
);
{% endhighlight %}

###优美地打印出表格式数据（数组、对象等）

console.table()可以让你在控制台使用图形表格调试表格式数据。

{% highlight javascript %}
console.table([['a', 'b', 'c'], ['easy as'], [1,2,3]]);
{% endhighlight %}

<img src="{{ "/images/posts/2015/04/08-3.png" | prepend: site.baseurl }}">

有些浏览器会“决定”是否使用表格显示你的数据。例如，console.table([1,2,3]);可能不会在表格中显示。

你可以过滤出你想显示的数据：

{% highlight javascript %}
var Crush = function(name, hobby, salary, cute) {
    this.name = name;
    this.hobby = hobby;
    this.salary = salary;
    this.cute = cute;
};
var venal_crushes = [
    new Crush('john', 'animals', '70K', true),
    new Crush('steeve', 'cars', '0K', false),
    new Crush('peter', 'computers', '160K', false),
    new Crush('marcel', 'france', '20K', true)
];
console.table(venal_crushes, ['name', 'salary']);
{% endhighlight %}

<img src="{{ "/images/posts/2015/04/08-4.png" | prepend: site.baseurl }}">

###记录堆栈轨迹

当调用console.trace()时可以显示至代码行的堆栈轨迹。

{% highlight javascript %}
var a = function() {
    console.trace('Hello I\'m a stack trace');
};
var b = function() {
    a(5);
};
var c = function() {
    b();
};
var d = function() {
    try {
        throw new Error('Ouch');
    } catch(err) {
        c(err);
    }
};
(function() { d(); })();
{% endhighlight %}

<img src="{{ "/images/posts/2015/04/08-5.png" | prepend: site.baseurl }}">

原文地址：
<a href="https://medium.com/@c2c/javascript-console-lesser-known-features-9fe3852ce48b" target="_blank">javascript: console lesser known features.</a>