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

	qdb.openDB(databaseName, version, function(db){
		console.log(db);
	}, function(db){
		console.log(db);
	});
};

test();
```

## listDB
```javascript
'use strict';

var qdb = require('qiao.db.js');

var test = function(){
	qdb.listDB(function(dbs){
		console.log(dbs);
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);

		qdb.delTable(db, 't_test1');
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(db, tableName, data, function(r){
			console.log(r);
		});
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(db, tableName, data, function(r){
			if(!r) return;

			qdb.get(db, tableName, 1, function(rr){
				console.log(rr);
			});
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(db, tableName, data, function(r){
			if(!r) return;

			data.name = '1';
			qdb.put(db, tableName, data, function(rr){
				console.log(rr);
			});
		});
	});
};

test();
```

## save
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.save(db, tableName, 1, data, function(r){
			console.log(r);

			data.name = '1';
			qdb.save(db, tableName, 1, data, function(rr){
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(db, tableName, data, function(r){
			if(!r) return;

			qdb.del(db, tableName, 1, function(rr){
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

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(db, tableName, data, function(r){
			if(!r) return;

			qdb.clear(db, tableName, function(rr){
				console.log(rr);
			});
		});
	});
};

test();
```

# version
## 0.0.5.20200630
1. list db
2. ncu

## 0.0.4.20200609
1. del log

## 0.0.3.20200515
1. tx --> db
2. indexeddb add sync

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
11. save data

## 0.0.1.20200513
1. init project
