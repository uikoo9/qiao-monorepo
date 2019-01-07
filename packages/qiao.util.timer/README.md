# urls
## homepage
[https://code.insistime.com/qiao.util.timer](https://code.insistime.com/qiao.util.timer)

## github
[https://github.com/insistime/qiao.util.timer](https://github.com/insistime/qiao.util.timer)

## npm
[https://www.npmjs.com/package/qiao.util.timer](https://www.npmjs.com/package/qiao.util.timer)

# started
## install
npm install qiao.util.timer

## dependencies
1. cron

## documentation
2. cron, https://www.npmjs.com/package/cron

# api
## cron
```javascript
'use strict';

var qiaoUtilTimer = require('qiao.util.timer');

var test = function(){
	var cron = qiaoUtilTimer.cron;
	console.log(cron);
};

test();
```

## job
```javascript
'use strict';

var qiaoUtilTimer = require('qiao.util.timer');

var test = function(){
	var time = '*/1 * * * * *';
	var tick = function(){
		console.log(new Date());
	};
	
	var job = qiaoUtilTimer.job(time, tick);
	console.log(job);
};

test();
```

## run
```javascript
'use strict';

var qiaoUtilTimer = require('qiao.util.timer');

var test = function(){
	var time = '*/1 * * * * *';
	var tick = function(){
		console.log(new Date());
	};
	
	console.log('-' + new Date());
	var job = qiaoUtilTimer.run(time, tick);
};

test();
```

## runAndInit
```javascript
'use strict';

var qiaoUtilTimer = require('qiao.util.timer');

var test = function(){
	var time = '*/1 * * * * *';
	var tick = function(){
		console.log(new Date());
	};
	
	console.log('-' + new Date());
	var job = qiaoUtilTimer.runAndInit(time, tick);
};

test();
```

# version
## 0.0.1.20190107
1. init
2. add cron method
3. add job method
3. add run method
4. add runAndInit method