---
layout:     post
title:      Debug php scripts with eclipse and xdebug on windows
date:       2014-11-19 22:37:45
summary:    How to debug php scripts with eclipse and xdebug on windows.
categories: php
---

---

First,get suitable .dll file.

<a href="http://www.xdebug.org/wizard.php">Tailored Installation Instructions</a>

Paste the full output of phpinfo() to the textarea and submit the form.Then follow the output instructions,including download *php_xdebug-x...x.dll* file;move the downloaded file to *path\to\php\extention*;add *zend_extension = "path\to\xdebug\file"* to php.ini file and restart the webserver.

Second,modify php.ini file.Append following contents to php.ini file :

    [XDebug]
    xdebug.remote_enable = true
    xdebug.remote_handler = "dbgp"
    xdebug.remote_host = "ip_address_of_server_running_scripts"
    xdebug.remote_port = 9000
    xdebug.remote_autostart = 1

Output phpinfo() and check if infomation like *with Xdebug vx.x.x, Copyright (c) 2002-2014, by Derick Rethans* is displayed.And also there's section named *xdebug*.Such information proves that the downloaded *php_xdebug-x...x.dll* file is available.

Third,configure the eclipse.

* Select browser in *General > Web Browser*

<img src="{{ "/images/posts/141119/01.png" | prepend: site.baseurl }}">

* Select *XDebug* in *PHP > Debug*

<img src="{{ "/images/posts/141119/02.png" | prepend: site.baseurl }}">

* Check *WorkBench Options*  in *PHP > Debug > WorkBench Options*

<img src="{{ "/images/posts/141119/03.png" | prepend: site.baseurl }}">

* Add a php server in *PHP > PHP Servers*

<img src="{{ "/images/posts/141119/04.png" | prepend: site.baseurl }}">

* Click *New*,input *Name* and *URL*

<img src="{{ "/images/posts/141119/05.png" | prepend: site.baseurl }}">

* Click next and configure server path mapping

<img src="{{ "/images/posts/141119/06.png" | prepend: site.baseurl }}">

* *Run > Debug Configrations*

<img src="{{ "/images/posts/141119/07.png" | prepend: site.baseurl }}">

* Click *Debug*

<img src="{{ "/images/posts/141119/08.png" | prepend: site.baseurl }}">