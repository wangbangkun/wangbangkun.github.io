---
layout:     post
title:      How to create a table with round corner
date:       2014-11-03 23:22:35
summary:    Steps of creating a table with round corner.
categories: css
---

---

The pseudo-class[^pseudoclass] is mainly used in this demo.

First,create a table with round corner outside.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        table {
          width: 50%;
          border: 3px solid #ddd;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 14px;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>1</th>
            <th>2</th>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
        </tr>
    </table>
</body>
</html>
{% endhighlight %}

<img src="{{ "/2014/11/03-1.png" | prepend: site.imgrepo }}">

Second,add vertical borders to the table by adding border-left to th and td elements those are not first element.
Add

{% highlight css %}
table tr>th:not(:first-child), table tr>td:not(:first-child) {
  border-left: 3px solid #ddd;
}
{% endhighlight %}

to *\<style\>* section.

Similarly,add horizontal borders by add border-top to td elements.

Add

{% highlight css %}
table tr:not(:first-child)>td {
  border-top: 3px solid #ddd;
}
{% endhighlight %}

to *\<style\>* section.

By now the prototype of the table has been completed.

<img src="{{ "/2014/11/03-2.png" | prepend: site.imgrepo }}">

Third use *border-spacing* to clear the spaces between borders inside the table.

{% highlight css %}
table {
  width: 50%;
  border: 3px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 14px;
  border-spacing: 0;    /*new added*/
}
{% endhighlight %}

<img src="{{ "/2014/11/03-3.png" | prepend: site.imgrepo }}">

The table narrows.Add *padding* to th and td cells.

{% highlight css %}
table tr>th, table tr>td {
  padding: 4px;
}
{% endhighlight %}

<img src="{{ "/2014/11/03-4.png" | prepend: site.imgrepo }}">

Add background color to make the table more readable.

{% highlight css %}
table tr:not(:first-child):nth-child(2n) {
  background-color: #ddd
}
{% endhighlight %}

<img src="{{ "/2014/11/03-5.png" | prepend: site.imgrepo }}">

Removing the bottom right-angles is necessary.

{% highlight css %}
/* remove right-angle at bottom left */ 
table tr:last-child>td:first-child {
  border-radius: 0 0 0 11px;
}
/* remove right-angle at bottom right */
table tr:last-child>td:last-child {
  border-radius: 0 0 11px 0;
}
{% endhighlight %}

<img src="{{ "/2014/11/03-6.png" | prepend: site.imgrepo }}">

Total *\<style\>* section would be:
{% highlight css %}
<style type="text/css">
table {
  width: 50%;
  border: 3px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 14px;
  border-spacing: 0;
}

table tr>th:not(:first-child), table tr>td:not(:first-child) {
  border-left: 3px solid #ddd;
}

table tr:not(:first-child)>td {
  border-top: 3px solid #ddd;
}

table tr>th, table tr>td {
  padding: 4px;
}

table tr:not(:first-child):nth-child(2n) {
  background-color: #ddd
}

/* remove right-angle at bottom left */ 
table tr:last-child>td:first-child {
  border-radius: 0 0 0 11px;
}

/* remove right-angle at bottom right */
table tr:last-child>td:last-child {
  border-radius: 0 0 11px 0;
}
</style>
{% endhighlight %}


[^pseudoclass]: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank">Pseudo-classes</a>