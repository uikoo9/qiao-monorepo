# urls
## homepage
[https://code.insistime.com/qiao.plugin.request](https://code.insistime.com/qiao.plugin.request)

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
## getSync
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

## postSync
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

## get
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

## post
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

## download
```javascript
'use strict';

var qiaoPluginRequest = require('qiao.plugin.request');

var test = async function(){
	try{
		var url 	= 'https://www.baidu.com/img/bd_logo1.png';
		var path	= 'd:/test.png';
		
		await qiaoPluginRequest.download(url, path);
	}catch(e){
		console.log(e);
	}
};

test();
```

# version
## 0.1.0.20190117
1. add download

## 0.0.9.20190107
1. modify desc
2. update request@2.88.0

## 0.0.8.20181127
1. modify method name
2. add .js

## 0.0.7.20181122
1. npm audit fix

## 0.0.6.20180720
1. https homepage

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