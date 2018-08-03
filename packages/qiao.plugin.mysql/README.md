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
	try{
		var connection = await qiaoPluginMysql.con();
		console.log(connection);
	}catch(e){
		console.log(e);
	}
};

test(); 
```

## query
### query sql
```javascript
'use strict';

var qiaoPluginMysql = require('qiao.plugin.mysql');

var test = async function(){
	try{
		var sql = 'select * from t_blog where id=?';
		var params = [1];
	
		var rows = await qiaoPluginMysql(sql, params);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test(); 
```

# version
## 0.0.1.20180803
1. init project
2. modify md