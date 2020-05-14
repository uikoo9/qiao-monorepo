# urls
## homepage
[https://code.insistime.com/qiao.db.js](https://code.insistime.com/qiao.db.js)

## github
[https://github.com/insistime/qiao.db.js](https://github.com/insistime/qiao.db.js)

## npm
[https://www.npmjs.com/package/qiao.db.js](https://www.npmjs.com/package/qiao.db.js)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.db.js

## dependencies

## documentation
1. indexeddb, [https://wangdoc.com/javascript/bom/indexeddb.html](https://wangdoc.com/javascript/bom/indexeddb.html)

# api
## openDB
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;

	qdb.openDB(databaseName, version, function(ev){
		console.log(ev ? ev.target.result : ev);
	});
};

test();
```

## delDB
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;

	qdb.delDB(databaseName, function(res){
		console.log(res);
	});
};

test();
```

## createTable
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);
	});
};

test();
```

## delTable
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		qdb.delTable(ev.target.result, 't_test1');
	});
};

test();
```

## get
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		var tx = ev.target.transaction;
		var tableName = 't_test1';

		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(tx, tableName, data, function(r){
			if(!r) return;

			qdb.get(tx, tableName, 1, function(rr){
				console.log(rr);
			});
		});
	});
};

test();
```

## add
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		var tx = ev.target.transaction;
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(tx, tableName, data, function(r){
			console.log(r);
		});
	});
};

test();
```

## put
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		var tx = ev.target.transaction;
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(tx, tableName, data, function(r){
			if(!r) return;

			data.name = '1';
			qdb.put(tx, tableName, data, function(rr){
				console.log(rr);
			});
		});
	});
};

test();
```

## del
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		var tx = ev.target.transaction;
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(tx, tableName, data, function(r){
			if(!r) return;

			qdb.del(tx, tableName, 1, function(rr){
				console.log(rr);
			});
		});
	});
};

test();
```

## clear
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		var tx = ev.target.transaction;
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(tx, tableName, data, function(r){
			if(!r) return;

			qdb.clear(tx, tableName, function(rr){
				console.log(rr);
			});
		});
	});
};

test();
```

# version
## 0.0.2.20200514
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

## 0.0.1.20200513
1. init project
