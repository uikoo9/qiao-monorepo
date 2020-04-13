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

## ls
```javascript
'use strict';

var qls = require('qiao.ls.js');

var test = function(){
	// set
	qls.ls('name', 'value');
	
	// get
	console.log(qls.ls('name'));
	
	// delete
	qls.ls('name', null);
	console.log(qls.ls('name'));
};

test();
```

## setCache
```javascript
'use strict';

var qls = require('qiao.ls.js');

qls.setCache('cache.group.role', 'team-123', false);
qls.setCache('cache.group.role', 'team-123', true);
```

## getCache
```javascript
'use strict';

var qls = require('qiao.ls.js');

console.log(qls.getCache('cache.group.role', 'team-123'));
```

## removeCache
```javascript
'use strict';

var qls = require('qiao.ls.js');

qls.removeCache('cache.group.role', 'team-123');
```

## clearCache
```javascript
'use strict';

var qls = require('qiao.ls.js');

qls.clearCache('cache.group.role');
```

## cache
```javascript
'use strict';

var qls = require('qiao.ls.js');

var test = function(){
	// set
	qls.cache('name', 'key', 'value');
	
	// get
	console.log(qls.cache('name', 'key'));
	
	// delete
	qls.cache('name', 'key', null);
	console.log(qls.cache('name', 'key'));

	// clear
	qls.cache('name', null);
};

test();
```

# version
## 0.0.3.20200414
1. set cache
2. get cache
3. remove cache
4. clear cache
5. add cache and ls

## 0.0.2.20191206
1. add funding

## 0.0.1.20190624
1. init project
2. set item
3. get item
4. remove item
5. modify expires
