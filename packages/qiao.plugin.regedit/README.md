# urls
## homepage
[https://code.insistime.com/qiao.plugin.regedit](https://code.insistime.com/qiao.plugin.regedit)

## github
[https://github.com/insistime/qiao.plugin.regedit](https://github.com/insistime/qiao.plugin.regedit)

## npm
[https://www.npmjs.com/package/qiao.plugin.regedit](https://www.npmjs.com/package/qiao.plugin.regedit)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.plugin.regedit

# api
## addValue
```javascript
'use strict';

var qiaoPluginRegedit = require('qiao.plugin.regedit');

var test = function(){
	// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var obj = {
		key : key,
		name: 'test',
		data: 'haha'
	};
	
	qiaoPluginRegedit.addValue(obj, function(res){
		console.log(res);
	});
};

test();
```

## addValueSync
```javascript
'use strict';

var qiaoPluginRegedit = require('qiao.plugin.regedit');

var test = async function(){
	try{
		// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var obj = {
			key : key,
			name: 'test',
			data: 'haha'
		};
		
		var res = await qiaoPluginRegedit.addValueSync(obj);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

## delValue
```javascript
'use strict';

var qiaoPluginRegedit = require('qiao.plugin.regedit');

var test = function(){
	// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var obj = {
		key : key,
		name: 'test'
	};
	
	qiaoPluginRegedit.delValue(obj, function(res){
		console.log(res);
	});
};

test();
```

## delValueSync
```javascript
'use strict';

var qiaoPluginRegedit = require('qiao.plugin.regedit');

var test = async function(){
	try{
		// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var obj = {
			key : key,
			name: 'test'
		};
		
		var res = await qiaoPluginRegedit.delValueSync(obj);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

## listValues
```javascript
'use strict';

var qiaoPluginRegedit = require('qiao.plugin.regedit');

var test = function(){
	// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	
	qiaoPluginRegedit.listValues(key, function(err, res){
		console.log(err, res);
	});
};

test();
```

## listValuesSync
```javascript
'use strict';

var qiaoPluginRegedit = require('qiao.plugin.regedit');

var test = async function(){
	try{
		// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
		
		var res = await qiaoPluginRegedit.listValuesSync(key);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

## 0.0.2.20200620
1. fix list key space bug
2. string trim

## 0.0.1.20200606
1. init project
2. add value
3. add value sync
4. del value
5. del value sync
6. 兼容中文和空格
7. list values
8. list values sync