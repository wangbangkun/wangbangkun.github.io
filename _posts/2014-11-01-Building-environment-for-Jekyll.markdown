---
layout:     post
title:      Building environment for Jekyll
date:       2014-11-01 15:31:19
summary:    Build environment for Jekyll using VMware Player and Ubuntu gnome.
categories: jekyll
---

---

>* host : windows 7
>* virtualization app : VMware Player 6.0.3
>* image : <a href="http://ubuntugnome.org/ubuntu-gnome-14-04-lts-is-released" >ubuntu gnome 14.04</a>

### Creating virtual machine

At the end of creation, GUI didn't appear. 

<img src="{{ "/images/posts/2014-11-01.png" | prepend: site.baseurl }}">

Follow steps[^nolexer] : 

* Restore the /etc/issue file

{% highlight bash %}
sudo mv /etc/issue.backup /etc/issue
{% endhighlight %}

* Restore the /etc/rc.local file：

{% highlight bash %}
sudo mv /etc/rc.local.backup /etc/rc.local
{% endhighlight %}

* Restore the /etc/init/gdm.conf file：

{% highlight bash %}
sudo mv /opt/vmware-tools-installer/gdm.conf /etc/init
{% endhighlight %}

* Reboot

Then login and change repositories

{% highlight bash %}
sudo apt-get install gksu
gksu software-properties-gtk
{% endhighlight %}

then

{% highlight bash %}
sudo apt-get update
sudo apt-get upgrade
{% endhighlight %}

Install google-chrome
{% highlight bash %}
#32bit
wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb
sudo dpkg -i google-chrome-stable_current_i386.deb

#64bit
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb 

#encounter error
sudo apt-get install -f
{% endhighlight %}

### Installing ruby from source code[^installruby] [^sharevpn]

Some libraires have been out of date or got higher version during installation.There're hints on the terminal.

> Note, selecting 'libxslt1-dev' instead of 'libxslt-dev'<br>Note, selecting 'libncurses5-dev' instead of 'ncurses-dev'

After installation,run

{% highlight bash %}
ruby -verion
{% endhighlight %}

to test if ruby installed successfully.

### Installing Jekyll[^pagesongithub]

1.Install bundler

{% highlight bash %}
sudo gem install bundler
{% endhighlight %}

2.Select a directory and clone the repository

{% highlight bash %}
git clone https://github.com/username/username.github.io
{% endhighlight %}

3.Change directory to username.github.io and create Gemfile

{% highlight bash %}
cd username.github.io
touch Gemfile
vi Gemfile
{% endhighlight %}

Add following content to Gemfile

    source 'https://rubygems.org'
    gem 'github-pages'

4.Run 

{% highlight bash %}
bundle install
{% endhighlight %}

5.In the root of repository

{% highlight bash %}
sudo bundle exec jekyll serve
{% endhighlight %}

6.Encounter an error:Could not find Javascript runtime[^nodejs].Run:

{% highlight bash %}
sudo apt-get install nodejs
{% endhighlight %}

Now,site can be accessed at

    http://localhost:4000

7.Error

Unresolved specs during Gem::Specification.reset:
       jekyll-watch (~> 1.1)
WARN: Clearing out unresolved specs.<br/>
Please report a bug if this causes problems.
/usr/local/lib/ruby/gems/2.1.0/gems/mercenary-0.3.4/lib/mercenary.rb:20:in \`program': cannot load such file -- mercenary/program (LoadError)<br/>
    from /usr/local/lib/ruby/gems/2.1.0/gems/jekyll-2.5.3/bin/jekyll:20:in \`<top (required)>'<br/>
    from /usr/local/bin/jekyll:23:in \`load'<br/>
    from /usr/local/bin/jekyll:23:in \`\<main\>'

Measure ：
using *bundle exec jekyll serve* instead of *jekyll serve*
<a href="https://github.com/jekyll/jekyll/issues/3103">https://github.com/jekyll/jekyll/issues/3103</a>
<a href="https://github.com/jekyll/jekyll/issues/3084">https://github.com/jekyll/jekyll/issues/3084</a>
<a href="http://stackoverflow.com/questions/27196896/jekyll-gem-unresolved-specs">http://stackoverflow.com/questions/27196896/jekyll-gem-unresolved-specs</a>
<a href="http://cenalulu.github.io/jekyll/choose-a-template-for-your-blog/
">http://cenalulu.github.io/jekyll/choose-a-template-for-your-blog/</a>



[^nolexer]:<a href="https://github.com/jekyll/jekyll/issues/1183">Build fails and fails #1183</a>

[^installruby]:<a href="http://paul-wong-jr.blogspot.jp/2012/04/installing-and-compiling-ruby-from.html">Paul's Software Blog</a>

[^sharevpn]:<a href="http://phyllisinit.wordpress.com/2012/04/08/share-vpn-connection-between-your-host-and-guest-os-in-vmware-player/">Phyllis in IT</a>

[^pagesongithub]:<a href="https://help.github.com/articles/using-jekyll-with-pages/">Using Jekyll with Pages</a>

[^nodejs]:<a href="http://stackoverflow.com/questions/6282307/execjs-and-could-not-find-a-javascript-runtime">ExecJS and could not find a JavaScript runtime</a>

