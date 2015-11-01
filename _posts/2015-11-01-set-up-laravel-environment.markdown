---
layout:     post
title:      set up laravel enviroment
date:       2015-11-01 23:22:15
summary:    Set up environment for Laravel
categories: php
---

---

1.下载wamp并按照默认设置安装。wamp官方下载地址：http://www.wampserver.com/en/

2.安装完成后，为php设置环境变量。
右键点击“计算机”→“属性”→“高级系统设置”→“环境变量”，选中系统变量（S）下的“Path”，单击“编辑”按钮，将php所在路径（默认安装路径是：C:\wamp\bin\php\phpx.x.xx。其中x.x.xx代表php版本号）追加到“变量值（V）”中。注意路径之间英文分号（“;”）分隔。点击“确定”→“确定”→“确定”，完成环境变量设置。启动cmd命令终端，输入“php -v”，显示php版本相关信息，则环境变量设置成功。

<img src="{{ "/images/posts/2015/11/01-1.png" | prepend: site.baseurl }}">

3.安装composer。Laravel使用composer管理依赖。composer安装包下载地址：https://getcomposer.org/Composer-Setup.exe。安装时完全按照默认确定即可。安装完毕后，为使当前安装设置的全局变量生效，重新开启cmd命令终端，在其中输入“composer”，显示如下，安装成功。

<img src="{{ "/images/posts/2015/11/01-2.png" | prepend: site.baseurl }}">

4.安装Laravel。在cmd命令终端输入：composer global require "laravel/installer=~1.1"，等待下载安装完成。默认安装路径为：C:\Users\Administrator\AppData\Roaming\Composer\vendor\bin，将其添加到环境变量。重新启动cmd命令终端，在其中输入“laravel”显示如下，安装成功。

<img src="{{ "/images/posts/2015/11/01-3.png" | prepend: site.baseurl }}">

5.初始化工作目录。在cmd命令终端中进入到wamp默认根路径“www”下，执行“laravel new xxx”（xxx为项目名称），显示如下，初始化成功。

<img src="{{ "/images/posts/2015/11/01-4.png" | prepend: site.baseurl }}">

6.更改apache配置文件C:\wamp\bin\apache\apache2.x.x\conf，开启（取消注释）LoadModule rewrite_module modules/mod_rewrite.so，访问http://127.0.0.1/member/public/index.php（member为项目名称），显示“Laravel”即成功。
