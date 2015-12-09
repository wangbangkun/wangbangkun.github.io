---
layout:     post
title:      Building environment for Jekyll
date:       2014-11-01 15:31:19
summary:    Build environment for Jekyll using VMware Player and Ubuntu gnome.
categories: jekyll
---

---

>* host : windows 7
>* virtualization app : VMware Player 6.0.7
>* image : <a href="http://ubuntugnome.org/ubuntu-gnome-14-04-lts-is-released" target="_blank">ubuntu gnome 14.04</a>

### Creating virtual machine

At the end of creation, GUI didn't appear. 

<img src="{{ "/2014/11/01-1.png" | prepend: site.imgrepo }}">

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

First we need to install some development tools and libraries that Ruby needs to compile. Run the following commands from your terminal:

{% highlight bash %}
sudo apt-get install build-essential vim git-core curl

sudo apt-get install bison openssl libreadline6 libreadline6-dev zlib1g zlib1g-dev libssl-dev libyaml-dev libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev

sudo apt-get install libcurl4-openssl-dev libopenssl-ruby apache2-prefork-dev libapr1-dev libaprutil1-dev

sudo apt-get install libx11-dev libffi-dev tcl-dev tk-dev  
{% endhighlight %}
The above contents referenced are from Paul's Software Blog[^installruby].Some libraires may have been out of date or got higher version during installation.There're hints on the terminal.
For me,there're:
    
    E: Package 'libopenssl-ruby' has no installation candidate
    Note, selecting 'apache2-dev' instead of 'apache2-prefork-dev'

so I ignored "libopenssl-ruby" and change "apache2-prefork-dev" to "apache2-dev".

<a href="https://www.ruby-lang.org/en/downloads/" target="_blank">Download</a> the tarball and extract it.Change directory to the folder extracted;compile and install.
{% highlight bash %}
tar -xzf ruby-2.2.3.tar.gz
cd ruby-2.2.3
./configure
make
sudo make install
{% endhighlight %}

After installation,run

{% highlight bash %}
ruby -verion
{% endhighlight %}

to test whether ruby installed successfully or not.

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

Add following contents to Gemfile while beyond the Great Wall:

    source 'https://rubygems.org'
    gem 'github-pages'

Or add following contents to Gemfile while inside the wall:

    source 'http://mirrors.aliyun.com/rubygems/'
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

[^nolexer]: <a href="https://github.com/jekyll/jekyll/issues/1183" target="_blank">Build fails and fails #1183</a>

[^installruby]: <a href="http://paul-wong-jr.blogspot.jp/2012/04/installing-and-compiling-ruby-from.html" target="_blank">Paul's Software Blog</a>

[^sharevpn]: <a href="http://phyllisinit.wordpress.com/2012/04/08/share-vpn-connection-between-your-host-and-guest-os-in-vmware-player/" target="_blank">Phyllis in IT</a>

[^pagesongithub]: <a href="https://help.github.com/articles/using-jekyll-with-pages/" target="_blank">Using Jekyll with Pages</a>

[^nodejs]: <a href="http://stackoverflow.com/questions/6282307/execjs-and-could-not-find-a-javascript-runtime" target="_blank">ExecJS and could not find a JavaScript runtime</a>

