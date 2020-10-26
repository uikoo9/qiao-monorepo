# qiao.indexeddb.js

## documentation
1. indexeddb, [https://wangdoc.com/javascript/bom/indexeddb.html](https://wangdoc.com/javascript/bom/indexeddb.html)

## api
### openDB
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName 	= 'db_test';
		var db 				= await qdb.openDB(databaseName);
		console.log(db);
	}catch(e){
		console.log(e);
	}
};

test();
```

### listDB
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	try{
		var dbs = await qdb.listDB();
		console.log(dbs);
	}catch(e){
		console.log(e);
	}
};

test();
```

### delDB
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName = 'db_test';
		await qdb.delDB(databaseName);
	}catch(e){
		console.log(e);
	}
};

test();
```

### createTable
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	var databaseName	= 'db_test';
	var tables 			= [{
		name : 't_test1',
		key : 'id',
		index : [{
			name : 'name',
			index: 'name',
			unique : false
		}]
	},{
		name : 't_test2',
		key : 'auto',
		index : [{
			name : 'name',
			index: 'name',
			unique : false
		},{
			name : 'email',
			index: ['name', 'email'],
			unique : true
		}]
	}];

	try{
		var db 	= await qdb.openDB(databaseName);
		var res = await qdb.createTable(db, tables);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### delTable
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName	= 'db_test';
		var db 				= await qdb.openDB(databaseName);
		await qdb.delTable(db, 't_test2');
	}catch(e){
		console.log(e);
	}
};

test();
```

### save
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName 	= 'db_test';
		var db 				= await qdb.openDB(databaseName);

		var tableName 	= 't_test1';
		var data 		= { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		await qdb.save(db, tableName, data.id, data);

		data.name = '1';
		await qdb.save(db, tableName, data.id, data);

		var data1 		= { id: 2, name: '张三', age: 24, email: 'zhangsan@example.com' };
		await qdb.save(db, tableName, data1.id, data1);
	}catch(e){
		console.log(e);
	}
};

test();
```

### get
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	var databaseName 	= 'db_test';
	var tableName		= 't_test1';

	try{
		var db 	= await qdb.openDB(databaseName);
		var s 	= await qdb.get(db, tableName, 1);
		console.log(s);
	}catch(e){
		console.log(e);
	}
};

test();
```

### del
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	var databaseName 	= 'db_test';
	var tableName		= 't_test1';

	try{
		var db = await qdb.openDB(databaseName);
		await qdb.del(db, tableName, 2);
	}catch(e){
		console.log(e);
	}
};

test();
```

### clear
```javascript
'use strict';

var qdb = require('qiao.indexeddb.js');

var test = async function(){
	var databaseName 	= 'db_test';
	var tableName		= 't_test1';

	try{
		var db = await qdb.openDB(databaseName);
		await qdb.clear(db, tableName);
	}catch(e){
		console.log(e);
	}
};

test();
```

## version
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