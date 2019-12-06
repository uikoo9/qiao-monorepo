# urls
## homepage
[https://code.insistime.com/qiao.ls.js](https://code.insistime.com/qiao.ls.js)

## github
[https://github.com/insistime/qiao.ls.js](https://github.com/insistime/qiao.ls.js)

## npm
[https://www.npmjs.com/package/qiao.ls.js](https://www.npmjs.com/package/qiao.ls.js)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.ls.js

## dependencies

## documentation

# api
## setItem
```javascript
'use strict';

var qls = require('qiao.ls.js');

var test = function(){
	var name = 'name';
	var value = 'value';
	qls.setItem(name, value);

	var expires = 1;
	qls.setItem(name, value, expires);
};

test();
```

## getItem
```javascript
'use strict';

var qls = require('qiao.ls.js');

var test = function(){
	var name = 'name';
	var value = qls.getItem(name);
	console.log(value);
};

test();
```

## removeItem
```javascript
'use strict';

var qls = require('qiao.ls.js');

var test = function(){
	var name = 'name';
	qls.removeItem(name);

	var value = qls.getItem(name);
	console.log(value);
};

test();
```

# version
## 0.0.2.20191206
1. add funding

## 0.0.1.20190624
1. init project
2. set item
3. get item
4. remove item
5. modify expires
