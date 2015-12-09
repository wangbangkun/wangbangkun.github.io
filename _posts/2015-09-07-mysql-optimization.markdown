---
layout:     post
title:      mysql optimization
date:       2015-09-07 18:18:35
summary:    mysql optimization
categories: mysql
---

---

<a href="http://www.imooc.com/learn/194" target="_blank">MySQL优化</a>

### 优化目的
1. 避免出现页面访问错误
* 数据库timeout产生5xx错误
* 慢查询造成页面无法加载
* 阻塞造成数据无法提交
2. 增加数据库稳定性
3. 优化用户体验

### 优化方向
* SQL及索引
* 数据库表结构
* 系统配置
* 硬件
成本由低到高，效果由高到低

### 如何发现有问题的SQL
1. show variables like 'slow_query_log'
2. set global slow_query_log_file='/home/mysql/sql_log/mysql-slow.log'
* 日志存储位置
3. set global log_queries_not_using_indexes=on
* 记录没有使用索引的查询
4. set global long_query_time=1
* 记录用时大于1s的查询

### 慢查日志格式
>* # Time: 150907 21:41:20
>* # User@Host: root[root] @ localhost [127.0.0.1]  Id:    11
>* # Query_time: 0.001000  Lock_time: 0.000000 Rows_sent: 200  Rows_examined: 200
>* SET timestamp=1441633280;
>* select * from actor;
1. 查询执行时间
2. 执行SQL主机信息
3. SQL执行信息
4. SQL执行时间
5. SQL内容

### 慢查日志分析工具
1. mysqldumpslow