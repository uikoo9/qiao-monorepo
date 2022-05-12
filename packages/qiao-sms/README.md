# qiao-sms

## api
### send
```javascript
'use strict';

var q = require('qiao-sms');

var test = function(){
	// 普通单条短信-简化
	q.send({
		appid 	: 'your appid',
		appkey	: 'your appkey',
		sign	: 'your sign',
		mobile	: 'mobile',
		msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
	});
	
	// 普通单条短信-定制&回调
	q.send({
		appid 	: 'your appid',
		appkey	: 'your appkey',
		sign	: 'your sign',
		mobile	: 'mobile',
		msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
		mtype	: '0：普通短信，1：营销短信，可选',
		cnum	: '86：中国，可选',
	}, function(err, res){
		console.log(err, res);
	});
};

test();
```

### sendSync
```javascript
'use strict';

var q = require('qiao-sms');

var test = async function(){
	try{
		// 普通单条短信-简化
		var msg1 = await q.sendSync({
			appid 	: 'your appid',
			appkey	: 'your appkey',
			sign	: 'your sign',
			mobile	: 'mobile',
			msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
		});
		console.log(msg1);
		
		// 普通单条短信-定制&回调
		var msg2 = q.send({
			appid 	: 'your appid',
			appkey	: 'your appkey',
			sign	: 'your sign',
			mobile	: 'mobile',
			msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
			mtype	: '0：普通短信，1：营销短信，可选',
			cnum	: '86：中国，可选',
		});
		console.log(msg2);
	}catch(e){
		console.log(e);
	}
};

test();
```

## version
### 0.0.4.20220512
1. lerna

### 0.0.3.20191206
1. add funding

### 0.0.2.20190107
1. nodejs tencent sms tool

### 0.0.1.20181127
1. init project
2. send
3. send sync
