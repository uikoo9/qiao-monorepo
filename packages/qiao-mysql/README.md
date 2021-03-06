# qiao-mysql

## api
### connection
```javascript
'use strict';

var q = require('qiao-mysql');

var connection = q.connection(require('./_config.json'));
console.log(connection);
```

### query
```javascript
'use strict';

var q = require('qiao-mysql');

var test = async function(){
	try{
		var rows = await q.query(require('./_config.json'), 'select * from t_share_type where id=?', [1]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();
```

### getColumns
```javascript
'use strict';

var q = require('qiao-mysql');

var test = async function(){
	try{
		var res = await q.getColumns(require('./_config.json'), 't_share_type');
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### getTypes
```javascript
'use strict';

var q = require('qiao-mysql');

var type = q.getTypes('varchar(10)');
console.log(type);
```

### poolConnection
```javascript
'use strict';

var q = require('qiao-mysql');

var test = async function(){
	try{
		q.poolInit(require('./_config.json'));
		
		var connection = await q.poolConnection();
		console.log(connection);
	}catch(e){
		console.log(e);
	}
};

test();
```

### poolQuery
```javascript
'use strict';

var q = require('qiao-mysql');

var test = async function(){
	try{
		q.poolInit(require('./_config.json'));
		
		var rows = await q.poolQuery('select * from t_share_type where id=?', [1]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();
```

## version
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
