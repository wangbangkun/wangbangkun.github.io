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

Follow steps : 

* Restore the /etc/issue file

{% highlight ruby %}
sudo mv /etc/issue.backup /etc/issue
{% endhighlight %}

* Restore the /etc/rc.local file：

{% highlight ruby %}
sudo mv /etc/rc.local.backup /etc/rc.local
{% endhighlight %}

* Restore the /etc/init/gdm.conf file：

{% highlight ruby %}
sudo mv /opt/vmware-tools-installer/gdm.conf /etc/init
{% endhighlight %}

* Reboot

Then login and change repositories

{% highlight ruby %}
sudo apt-get install gksu
gksu software-properties-gtk
{% endhighlight %}

then

{% highlight ruby %}
sudo apt-get update
sudo apt-get upgrade
{% endhighlight %}

Install google-chrome
{% highlight ruby %}
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

{% highlight ruby %}
ruby -verion
{% endhighlight %}

to test if ruby installed successfully.

### Installing Jekyll[^pagesongithub]

1.Install bundler

{% highlight ruby %}
sudo gem install bundler
{% endhighlight %}

2.Select a directory and clone the repository

{% highlight ruby %}
git clone https://github.com/username/username.github.io
{% endhighlight %}

3.Change directory to username.github.io and create Gemfile

{% highlight ruby %}
cd username.github.io
touch Gemfile
vi Gemfile
{% endhighlight %}

Add following content to Gemfile

    source 'https://rubygems.org'
    gem 'github-pages'

4.Run 

{% highlight ruby %}
bundle install
{% endhighlight %}

5.In the root of repository

{% highlight ruby %}
sudo bundle exec jekyll serve
{% endhighlight %}

6.Encounter an error:Could not find Javascript runtime[^nodejs].Run:

{% highlight ruby %}
sudo apt-get install nodejs
{% endhighlight %}

Now,site can be accessed at

    http://localhost:4000


[^installruby]:<a href="http://paul-wong-jr.blogspot.jp/2012/04/installing-and-compiling-ruby-from.html">Paul's Software Blog</a>

[^sharevpn]:<a href="http://phyllisinit.wordpress.com/2012/04/08/share-vpn-connection-between-your-host-and-guest-os-in-vmware-player/">Phyllis in IT</a>

[^pagesongithub]:<a href="https://help.github.com/articles/using-jekyll-with-pages/">Using Jekyll with Pages</a>

[^nodejs]:<a href="http://stackoverflow.com/questions/6282307/execjs-and-could-not-find-a-javascript-runtime">ExecJS and could not find a JavaScript runtime</a>

