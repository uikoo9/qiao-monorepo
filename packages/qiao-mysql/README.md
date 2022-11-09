## qiao-mysql
[![npm version](https://img.shields.io/npm/v/qiao-mysql.svg?style=flat-square)](https://www.npmjs.org/package/qiao-mysql)
[![npm downloads](https://img.shields.io/npm/dm/qiao-mysql.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-mysql)

nodejs下mysql能力

## install

安装

```bash
npm i qiao-mysql
```

## config

配置文件，如果传入connectionLimit会使用connection pool

```json
{
    "connectionLimit": 10,
    "host": "127.0.0.1",
    "port": 3306,
    "database": "xxx",
    "user": "xxx",
    "password": "xxx"
}
```

## client
```javascript
// config
const config = require('./config.json');

// client
const client = require('qiao-mysql')(config);
```

## api

### getColumns

获取表的列属性

```javascript
const res = await client.getColumns('t_todo_item');
console.log(res);
```

### getTypes

获取表字段类型对应的js类型

```javascript
const type = client.getTypes('varchar(10)');
console.log(type);
```

### query

查询数据库

如果配置文件中没有connectionLimit属性，则每次创建connection后查询

如果配置文件中有connectionLimit，则使用connection pool查询

```javascript
const rows = await client.query('select * from t_todo_item where id=?', [8]);
console.log(rows);
```

## version
### 0.0.9.20221109
1. es6

### 0.0.8.20200803
1. ncu

### 0.0.7.20191206
1. update packages
2. add funding

### 0.0.6.20190107
1. nodejs mysql plugin

### 0.0.5.20181213
1. add lib

### 0.0.4.20181127
1. add .js

### 0.0.3.20181108
1. update query and connection

### 0.0.2.20181015
1. add _connection.js
2. add _query.js
3. add getColumns()
4. add getTypes()

### 0.0.1.20180803
1. init project
2. modify md
