# urls
## homepage
[https://code.insistime.com/qiao.plugin.mysql](https://code.insistime.com/qiao.plugin.mysql)

## github
[https://github.com/insistime/qiao.plugin.mysql](https://github.com/insistime/qiao.plugin.mysql)

## npm
[https://www.npmjs.com/package/qiao.plugin.mysql](https://www.npmjs.com/package/qiao.plugin.mysql)

# started
## install
npm install qiao.plugin.mysql

## dependencies
1. mysql

## documentation
1. mysql, https://www.npmjs.com/package/mysql

# api
## init
### init mysql pool
```javascript
'use strict';

var qiaoPluginMysql = require('qiao.plugin.mysql');

qiaoPluginMysql.init(require('your path to config.json'));
```

## con
### get mysql connection
```javascript
'use strict';

var qiaoPluginMysql = require('qiao.plugin.mysql');

var test = async function(){
	qiaoPluginMysql.init(require('./_config.json'));
	
	var con = await qiaoPluginMysql.con();
	console.log(con);
};

test();
```

## query
### query sql
```javascript
'use strict';

var qiaoPluginMysql = require('qiao.plugin.mysql');

var test = async function(){
	qiaoPluginMysql.init(require('./_config.json'));
	
	var res = await qiaoPluginMysql.query('show tables;');
	console.log(res);
};

test();
```

### get columns
```javascript
'use strict';

var qiaoPluginMysql = require('qiao.plugin.mysql');

var test = async function(){
	qiaoPluginMysql.init(require('./_config.json'));
	
	var res = await qiaoPluginMysql.getColumns('t_blog_type');
	console.log(res);
};

test();
```

### get types
```javascript
'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql');

var test = async function(){
	var type = qiaoPluginMysql.getTypes('varchar(10)');
	console.log(type);
};

test();
```

# version
## 0.0.2.20181015
1. add _connection.js
2. add _query.js
3. add getColumns()
4. add getTypes()

## 0.0.1.20180803
1. init project
2. modify md