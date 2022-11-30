## qiao.db.js

[![npm version](https://img.shields.io/npm/v/qiao.db.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.db.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.db.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.db.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao.db.js)

浏览器 IndexedDB 数据库常见 api 封装，详情：[一篇文章学会 IndexedDB](https://blog.insistime.com/indexeddb)

## install

```bash
npm i qiao.db.js
```

## api

### openDB

打开一个数据库

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';

  try {
    var db = await q.openDB(databaseName);
    await q.clear(db, tableName);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### listDB

列出所有的本地数据库

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  try {
    var dbs = await q.listDB();
    console.log(dbs);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### delDB

删除某个数据库

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  try {
    var databaseName = 'db_test';
    await q.delDB(databaseName);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### createTable

创建一个数据库表

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  var databaseName = 'db_test';
  var tables = [
    {
      name: 't_test1',
      key: 'id',
      index: [
        {
          name: 'name',
          index: 'name',
          unique: false,
        },
      ],
    },
    {
      name: 't_test2',
      key: 'auto',
      index: [
        {
          name: 'name',
          index: 'name',
          unique: false,
        },
        {
          name: 'email',
          index: ['name', 'email'],
          unique: true,
        },
      ],
    },
  ];

  try {
    var db = await q.openDB(databaseName);
    var res = await q.createTable(db, tables);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### delTable

删除一个数据库表

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  try {
    var databaseName = 'db_test';
    var db = await q.openDB(databaseName);
    await q.delTable(db, 't_test2');
  } catch (e) {
    console.log(e);
  }
};

test();
```

### save

保存数据

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  try {
    var databaseName = 'db_test';
    var db = await q.openDB(databaseName);

    var tableName = 't_test1';
    var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
    await q.save(db, tableName, data.id, data);

    data.name = '1';
    await q.save(db, tableName, data.id, data);

    var data1 = { id: 2, name: '张三', age: 24, email: 'zhangsan@example.com' };
    await q.save(db, tableName, data1.id, data1);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### get

获取数据

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';

  try {
    var db = await q.openDB(databaseName);
    var s = await q.get(db, tableName, 1);
    console.log(s);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### del

删除数据

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';

  try {
    var db = await q.openDB(databaseName);
    await q.del(db, tableName, 2);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### clear

清空数据

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';

  try {
    var db = await q.openDB(databaseName);
    await q.clear(db, tableName);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### getAll

按索引获取所有数据

```javascript
'use strict';

var q = require('qiao.db.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';
  var indexName = 'name';

  try {
    var db = await q.openDB(databaseName);
    var s = await q.getAll(db, tableName, indexName);
    console.log(s);
  } catch (e) {
    console.log(e);
  }
};

test();
```

## version

### 0.1.1.20221012

1. 1.0.0 publish

### 0.1.0.20220513

1. lerna

### 0.0.9.20201027

1. fix bug

### 0.0.8.20201026

1. modify create table
2. del version

### 0.0.7.20201023

1. export sync
2. save key

### 0.0.6.20200731

1. add sync
2. clear sync
3. del db sync
4. del sync
5. get sync
6. list db sync
7. put sync
8. save sync

### 0.0.5.20200630

1. list db
2. ncu

### 0.0.4.20200609

1. del log

### 0.0.3.20200515

1. tx --> db
2. indexeddb add sync

### 0.0.2.20200514

1. open db
2. del db
3. create table
4. del table
5. get data
6. add data
7. put data
8. del data
9. clear data
10. add readme
11. save data

### 0.0.1.20200513

1. init project
