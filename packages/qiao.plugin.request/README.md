# urls
## homepage
[http://code.insistime.com/qiao.plugin.request](http://code.insistime.com/qiao.plugin.request)

## github
[https://github.com/insistime/qiao.plugin.request](https://github.com/insistime/qiao.plugin.request)

## npm
[https://www.npmjs.com/package/qiao.plugin.request](https://www.npmjs.com/package/qiao.plugin.request)

# started
## install
npm install qiao.plugin.request

## dependencies
1. http request by request

## documentation
1. request, https://www.npmjs.com/package/request

# api
## request get sync
```javascript
'use strict';

var qiaoPluginRequest = require('qiao.plugin.request');

var test = async function(){
	try{
		var url = 'http://www.baidu.com';
		var res = await qiaoPluginRequest.getSync({
			url	: url,
			qs	: {
				test : 'test'
			}
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test(); 
```

## request post sync
```javascript
'use strict';

var qiaoPluginRequest = require('qiao.plugin.request');

var test = async function(){
	try{
		var url = 'http://www.baidu.com';
		var res = await qiaoPluginRequest.postSync({
			url	: url,
			qs	: {
				test : 'test'
			}
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

## request get async
```javascript
'use strict';

var qiaoPluginRequest = require('qiao.plugin.request');

var test = function(){
	var url = 'http://www.baidu.com';
	qiaoPluginRequest.get({
		url	: url,
		qs	: {
			test : 'test'
		}
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

## request post async
```javascript
'use strict';

var qiaoPluginRequest = require('qiao.plugin.request');

var test = function(){
	var url = 'http://www.baidu.com';
	qiaoPluginRequest.post({
		url	: url,
		qs	: {
			test : 'test'
		}
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

# version
## 0.0.5.20180719
1. modify readme.md

## 0.0.4.20180523
1. npm audit

## 0.0.3.20180511
1. npm audit

## 0.0.2.20180210
1. delete reqwest
2. highlight md

## 0.0.1.20180208
1. init project
2. request get
3. request post
4. modify index.js