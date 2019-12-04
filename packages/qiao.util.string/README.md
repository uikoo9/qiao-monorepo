# urls
## homepage
[https://code.insistime.com/qiao.util.string](https://code.insistime.com/qiao.util.string)

## github
[https://github.com/insistime/qiao.util.string](https://github.com/insistime/qiao.util.string)

## npm
[https://www.npmjs.com/package/qiao.util.string](https://www.npmjs.com/package/qiao.util.string)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.util.string

## dependencies

## documentation

# api
## firstLetterUpper
```javascript
'use strict';

var qiaoUtilString = require('qiao.util.string');

var test = function(){
	var str = 'table';
	var s	= qiaoUtilString.firstLetterUpper(str);
	
	console.log(s);
};

test();
```

## firstLetterLower
```javascript
'use strict';

var qiaoUtilString = require('qiao.util.string');

var test = function(){
	var str = 'Table';
	var s	= qiaoUtilString.firstLetterLower(str);
	
	console.log(s);
};

test();
```

## underScoreCaseToCamelCase
```javascript
'use strict';

var qiaoUtilString = require('qiao.util.string');

var test = function(){
	var str = 'share_type';
	var s	= qiaoUtilString.underScoreCaseToCamelCase(str);
	
	console.log(s);
};

test();
```

# version
## 0.0.3.20190107
1. npm audit

## 0.0.2.20181122
1. npm audit

## 0.0.1.20181107
1. init
