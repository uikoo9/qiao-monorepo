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
## 0.0.1.20190624
1. init project