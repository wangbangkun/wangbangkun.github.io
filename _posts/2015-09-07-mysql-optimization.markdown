---
layout:     post
title:      mysql
date:       2015-09-07 18:18:35
summary:    mysql optimization
categories: mysql
---

---

<a hef="http://www.imooc.com/learn/194" target="_blank">MySQL优化</a>

### 优化目的
* 避免出现页面访问错误
#* 数据库timeout产生5xx错误
#* 慢查询造成页面无法加载
#* 阻塞造成数据无法提交
* 增加数据库稳定性
* 优化用户体验

### 优化方向
* SQL及索引
* 数据库表结构
* 系统配置
* 硬件
成本由低到高，效果由高到低

### 如何发现有问题的SQL
* show variables like 'slow_query_log'
* set global slow_query_log_file='/home/mysql/sql_log/mysql-slow.log'
* set global log_queries_not_using_indexes=on
* set global long_query_time=1