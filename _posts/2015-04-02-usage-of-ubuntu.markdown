---
layout:     post
title:      usage of ubuntu
date:       2015-04-02 20:13:40
summary:    ubuntu usage
categories: system
---

---

#### 顶部、左侧工具栏不正常显示

<img src="{{ "/2015/04/02-1.png" | prepend: site.imgrepo }}">

两种办法


* 关闭虚拟机。管理 > 虚拟机设置 > 显示器 > 3D图形，取消选中。

> <img src="{{ "/2015/04/02-2.png" | prepend: site.imgrepo }}">

* 如果条件允许，启用/使用独立显卡。

#### 软件安装

* gksu
{% highlight bash %}
shell> sudo apt-get install gksu
#更换源
shell> gksu software-properties-gtk
{% endhighlight %}

* google chrome

{% highlight bash %}
#32位
shell> wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb
shell> sudo dpkg -i google-chrome-stable_current_i386.deb

#64位
shell> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
shell> sudo dpkg -i google-chrome-stable_current_amd64.deb 

#依赖缺失
shell> sudo apt-get install -f
{% endhighlight %}

* openssh-server
{% highlight bash %}
shell> sudo apt-get install openssh-server
shell> /etc/init.d/ssh restart
#查看状态
shell> netstat -tlp
{% endhighlight %}

* 中文输入法
{% highlight bash %}
shell> sudo apt-get install ibus-rime
{% endhighlight %}