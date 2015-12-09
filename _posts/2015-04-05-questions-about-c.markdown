---
layout:     post
title:      questions about c
date:       2015-04-05 02:25:05
summary:    questions about c when reading books or doing exercises
categories: c
---

---

#### getchar() and putchar()
代码来源<The C programming language(second edition)>
{% highlight c %}
#include <stdio.h>

main()
{
    int c;
    while((c = getchar()) != EOF){
        putchar(c);
    }
}
{% endhighlight %}
gcc编译，运行后发现，输入字符串按下回车后，输出整个字符串。

<img src="{{ "/2015/04/05-1.png" | prepend: site.imgrepo }}">

书中定义：

>* getchar reads the next input character from a text stream and returns that as its value.
>* The function putchar prints a character each time it is called

getchar()/putchar()每次只读取/输出一个字符。所以为什么结果不是输入一个字符、显示一个字符，而是在输入字符串按下回车后输出整个字符串？中间有缓冲？

stackoverflow上有人问这个问题[^getchar]。得票最高的答案：

> getchar 利用缓冲输入(buffer input)工作，要让getchar读取字符之前需要按下回车。

另外一个重复问题[^getcharputchar]。提问者想要使用fflush(stdin)清空缓冲区。但是根据ANSI C标准，fflush(stdin)会引发未定义行为。


[^getchar]: <a href="http://stackoverflow.com/questions/3676796/what-does-getchar-exactly-do" target="_blank">What does getchar() exactly do?</a>

[^getcharputchar]: <a href="http://stackoverflow.com/questions/19468343/i-have-two-questions-related-to-getchar-and-putchar" target="_blank">I have two questions related to getchar() and putchar() [duplicate]</a>