# urls
## homepage
[https://code.insistime.com/qiao.plugin.upload](https://code.insistime.com/qiao.plugin.upload)

## github
[https://github.com/insistime/qiao.plugin.upload](https://github.com/insistime/qiao.plugin.upload)

## npm
[https://www.npmjs.com/package/qiao.plugin.upload](https://www.npmjs.com/package/qiao.plugin.upload)

# started
## install
npm install qiao.plugin.upload

## dependencies
1. multer

## documentation
1. multer, https://www.npmjs.com/package/multer

# api
## gen
```javascript
'use strict';

var qiaoPluginRequest = require('qiao.plugin.upload');

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

# version
## 0.0.1.20190225
1. init project
2. request get
3. request post
4. modify index.js