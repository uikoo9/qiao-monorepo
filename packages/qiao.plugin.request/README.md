# qiao.plugin.request
ajax on browser and http request on nodejs

# install
npm install qiao.plugin.request

# dependencies
1. ajax by reqwest
2. http request by request

# documentation
1. ajax, https://www.npmjs.com/package/reqwest
2. request, https://www.npmjs.com/package/request

# request get sync
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

# request post sync
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

# request get async
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

# request post async
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

# version
### 0.0.1.20180208
1. init project
2. request get
3. request post
4. modify index.js