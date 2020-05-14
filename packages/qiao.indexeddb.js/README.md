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
## setItem
```javascript
'use strict';

var qls = require('qiao.db.js');

var test = function(){
	var name = 'name';
	var value = 'value';
	qls.setItem(name, value);

	var expires = 1;
	qls.setItem(name, value, expires);
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

## 0.0.1.20200513
1. init project
