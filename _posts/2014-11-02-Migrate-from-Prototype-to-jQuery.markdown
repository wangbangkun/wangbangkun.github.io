---
layout:     post
title:      Migrate from Prototype to jQuery
date:       2014-11-02 11:44:21
summary:    Change Prototype methods to jQuery methods.
categories: jQuery
---

---

### One Prototype object only uses native method

{% highlight javascript %}
var ele = $("some_id");
ele.innerHTML = "some-value";
{% endhighlight %}

change to native javascript

{% highlight javascript %}
var ele = document.getElementById("some_id");
ele.innerHTML = "some-value";
{% endhighlight %}


---

### Checking null

|Prototype|jQuery|
|---------|------|
|<code>$("some_id") == null</code>|<code>jQuery("#some_id").length == 0</code>|
|---------|------|

---

### Creating new element
    Prototype

{% highlight javascript %}
new Element("div")
{% endhighlight %}

    jQuery

{% highlight javascript %}
jQuery("<div>")
{% endhighlight %}


---

### Traversing > Filtering

|Prototype|jQuery|
|---------|------|
|<code>$("radio_ele").checked</code>|<code>jQuery("#radio_ele").is(":checked")</code>|
|<code>$("some_id").visible()</code>|<code>jQuery("#some_id").is(":visible")</code>|
|<code>$("some_id") == target</code>|<code>jQuery("#some_id").is(jQuery(target))</code>|
|<code>$("some_id").descendantOf(target)</code>|<code>jQuer(target).has(jQuery("#some_id")).length</code>|

---

### Effects

|Prototype|jQuery|
|---------|------|
|**Basics**||
|<code>$("some_id").show()</code><br><code>Element.show($("some_id"))</code>|<code>jQuery("#some_id").show()</code>|
|<code>$("some_id").hide()</code><br><code>Element.hide($("some_id"))</code>|<code>jQuery("#some_id").hide()</code>|
|<code>$("some_id").toggle()</code>|<code>jQuery("#some_id").toggle()</code>|

---

### Manipulation

|Prototype|jQuery|
|---------|------|
|**Class Attribute\|css**||
|<code>$("some_id").addClassName("class-name")</code>|<code>jQuery("#some_id").addClass("class-name")</code>|
|<code>$("some_id").removeClassName("class-name")</code>|<code>jQuery("#some_id").removeClass("class-name")</code>|
|<code>$("some_id").hasClassName("class-name")</code>|<code>jQuery("#some_id").hasClass("class-name")</code>|
|**DOM Insertion, Inside**||
|<code>$("some_id").innerHTML</code><br><code>$("some_id").innerHTML = "some-content"</code><br><code>$("some_id").update("some-content")</code>|<code>jQuery("#some_id").html()</code><br><code>jQuery("#some_id").html("some-content")</code>|
|<code>$("some_id").appendChild(childElement)</code>|<code>jQuery("#some_id").append(childElement)</code>|
|<code>$("r_id").parentNode.insertBefore($("new_id"),$("r_id"))</code>|<code>jQuery("#new_id").insertBefore(jQuery("#r_id"))</code>|
|**DOM Removal**||
|<code>$("some_id").remove()</code>|<code>$("#some_id").remove()</code>|
|**General Attributes**||
|<code>$("some_id").value</code><br><code>$("some_id").value = "some-value"</code>|<code>jQuery("#some_id").val()</code><br><code>jQuery("#some_id").val("some-value")</code>|
|<code>$("some_id").disabled = false</code>|<code>jQuery("#some_id").prop("disabled", false)</code>|
|**Style Properties**||
|<code>$("some_id").setStyle()</code>|<code>$("#some_id").css()</code>|
|<code>$("some_id").getWidth()</code><br><code>$("some_id").getHeight()</code><br><code>$("some_id")getDimensions()</code>|<code>jQuery("#some_id").width()</code><br><code>jQuery("#some_id").height()</code>|
|<code>Element.cumulativeOffset($("some_id"))</code><br><code>Position.cumulativeOffset($("some_id"));</code>|<code>jQuery("#some_id").offset()</code><br><code>jQuery("#some_id").position()</code>|

---

### Events

|Prototype|jQuery|
|---------|------|
|**Event Handler Attachment**||
|<code>Event.observe($("some_id"),"click",function(){})</code><br><code>Event.stopObserving($("some_id"),"click",function(){})</code>|<code>jQuer("#some_id").on("click",function(){})</code><br><code>jQuer("#some_id").unbind("click",function(){})</code>|
|<code>function(){}.bind(context)</code>|<code>jQuery.proxy(function(){},context)</code>|
|<code>$("some_id").fire('some-event')</code>|<code>jQuery("#some_id").trigger('some-event')</code>|
|**Form events**||
|<code>$("some_id").focus()</code>|<code>jQuery("#some_id").focus()</code>|

---

### Ajax > Low-Level Interface

    prototype

{% highlight javascript %}
    new Ajax.Request(url,{
        requestHeaders : {Accept: 'application/json'},
        method : 'POST',
        parameters : 'p1=' + p1.value + '&p2=' + p2.value,
        onsuccess : handle_success_func(xhr){
            ...
            xhr.responseText.evalJSON();
            ...
        },
        onFailure : handle_failure_func(xhr){},
        onException : handle_exception_func(xhr){},
        onComplete : handle_complete_func(){}
    });
{% endhighlight %}

    jQuery

{% highlight javascript %}
    jQuery.ajax(url,{
        accepts : {Accept: 'application/json'},
        type : 'POST',
        data : {p1 : p1.value, p2 : p2.value},
        success : handle_success_func(data, textStatus, xhr){
            ...
            jQuery.parseJSON(xhr.responseText)
            ...
        },
        error : handle_error_func(xhr){},
        complete : handle_complete_func(){}
    });
{% endhighlight %}

---

### Miscellaneous > Collection Manipulation | Traversing

|Prototype|jQuery|
|---------|------|
|<code>$("some_id").each(function(e){})</code>|<code>jQuery("#some_id").each(function(index,e){})</code>|


---

###  Utilities

|Prototype|jQuery|
|---------|------|
|<code>someText.isJSON()</code>|<code>typeof jQuery.parseJSON(someText) === "object"</code>|

    prototype

{% highlight javascript %}
$$("#enumerable").any(function(e){
    //some judgment on e
});
{% endhighlight %}

    jQuery

{% highlight javascript %}
// solution 1.Get the length of array which contains elements those satisfy a filter function
jQuery.grep(jQuery("#enumerable").toArray(), function(e){
    //return e meets the condition ?
}).length;

// solution 2.Using each loop
var satisfy = false;
$("#enumerable").each(function(index,e){
    if(/*e meets the condition*/){
        satisfy = true;
        return false;   //break loop
    }
});
{% endhighlight %}

---

### Methods of Prototype those jQuery doesn't have

    1.prototype

{% highlight javascript %}
someStr.escapeHTML();
{% endhighlight %}

    using native javascript

{% highlight javascript %}
someStr.replace("/&/g", "&amp;").replace("/</g", "&lt;").replace("/>/g", "&gt;");
{% endhighlight %}

    2.prototype

{% highlight javascript %}
[1, 7, -2, -4, 5].detect(function(n) { return n < 0; });
{% endhighlight %}

    navtive javascript

{% highlight javascript %}
var arr = [1, 7, -2, -4, 5];
for(var i=0,l=arr.length; i<l; i++){
    if(arr[i] < 0){
        return arr[i];
    }
}
{% endhighlight %}
