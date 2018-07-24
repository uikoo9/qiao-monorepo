# urls
## homepage
[https://code.insistime.com/qiao.ext.weixinx](https://code.insistime.com/qiao.ext.weixinx)

## github
[https://github.com/insistime/qiao.ext.weixinx](https://github.com/insistime/qiao.ext.weixinx)

## npm
[https://www.npmjs.com/package/qiao.ext.weixinx](https://www.npmjs.com/package/qiao.ext.weixinx)

# started
## install
npm install qiao.ext.weixinx

# api for ajax
## ajax
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// ajax with url
// default data {}
// default method post
qiaoWeixinx.ajax({
	url : url
}, function(data){
	// success
}, function(data){
	// fail
});

// ajax with url, data, method, headers
qiaoWeixinx.ajax({
	url 	: url,
	data	: {
		// data
	},
	method	: 'POST',
	headers	: {
		// headers
	}
}, function(data){
	// success
}, function(data){
	// fail
});
```

# api for tips
## alert
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// alert, without callback
qiaoWeixinx.alert('alert');

// alert, with callback
qiaoWeixinx.alert('alert', function(){
	// callback for click ok
});

// custom alert, without callback
qiaoWeixinx.alert({
	title		: 'alert',
	content		: 'alert',
	confirmText	: 'ok',
	confirmColor: '#3CC51F'
});

// custom alert, with callback
qiaoWeixinx.alert({
	title		: 'alert',
	content		: 'alert',
	confirmText	: 'ok',
	confirmColor: '#3CC51F'
}, function(){
	// callback for click ok
});
```

## confirm
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// confirm, without callback
qiaoWeixinx.confirm('confirm');

// confirm, with callback
qiaoWeixinx.confirm('confirm', function(){
	// callback for click ok
}, function(){
	// callback for click cancel
});

// custom confirm, without callback
qiaoWeixinx.confirm({
	title		: 'confirm',
	content		: 'confirm',
	showCancel	: true,
	cancelText	: 'cancel',
	cancelColor	: '#000000',
	confirmText	: 'ok',
	confirmColor: '#3CC51F'
});

// custom confirm, with callback
qiaoWeixinx.confirm({
	title		: 'confirm',
	content		: 'confirm',
	showCancel	: true,
	cancelText	: 'cancel',
	cancelColor	: '#000000',
	confirmText	: 'ok',
	confirmColor: '#3CC51F'
}, function(){
	// callback for click ok
}, function(){
	// callback for click cancel
});
```

## suc
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// tip for success
qiaoWeixinx.suc('success message');

// custom tip for success
qiaoWeixinx.suc({
	title	: 'success message',
	duration: 3000,
	mask	: true
});
```

## tip
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// tip
qiaoWeixinx.tip('tips');

// custom tip
qiaoWeixinx.tip({
	title	: 'custom tip',
	duration: 3000,
	mask	: true
});
```

## loading
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// default loading
qiaoWeixinx.loading();

// custom loading
qiaoWeixinx.loading('custom loading');
```

## hideLoading
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// hide loading
qiaoWeixinx.hideLoading();
```

## sheet
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// sheet
qiaoWeixinx.sheet(['1', '2'], function(index){
	// index : 0,1
});
```

# api for navigate
## to
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// navigate to
qiaoWeixinx.to(url, function(){
	// success
}, function(){
	// fail
});
```

## rto
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// redirect to
qiaoWeixinx.rto(url, function(){
	// success
}, function(){
	// fail
});
```

## tab
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// switch tab
qiaoWeixinx.tab(url, function(){
	// success
}, function(){
	// fail
});
```

## back
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// navigate back
qiaoWeixinx.back(page);
```

# api for localstorage
## set
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// set data to localstorage
qiaoWeixinx.set(key, value);
```

## get
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// get data from localstorage
qiaoWeixinx.get(key);
```

## del
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// del data from localstorage
qiaoWeixinx.del(key);
```

## clear
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// clear data from localstorage
qiaoWeixinx.clear();
```

# api for device
## isAndroid
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// is android
var isAndroid = qiaoWeixinx.isAndroid();
console.log(isAndroid);
```

## isIos
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// is ios
var isIos = qiaoWeixinx.isIos();
console.log(isIos);
```

## net
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// net
qiaoWeixinx.net(function(type){
	// type : wifi/2g/3g/4g/unknown/none
});
```

## screen
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// get screen
qiaoWeixinx.screen(null, function(v){
	// success
}, function(){
	// fail
});

// set screen keep on
qiaoWeixinx.screen('on', function(){
	// success
}, function(){
	// fail
});

// set screen 0-1
qiaoWeixinx.screen(0, function(){
	// success
}, function(){
	// fail
});
```

# api for img
## showImg
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// show img with url
qiaoWeixinx.showImg(url);

// show img with urls
qiaoWeixinx.showImg(url, urls);
```

# api for auth
## checkAuth
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// check auth
qiaoWeixinx.checkAuth('scope.camera', 'need camera auth', function(){
	// success
});
```

# api for version
## version
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// get weixin version
var weixinVersion = qiaoWeixinx.version();
console.log(weixinVersion);
```

## sversion
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// get weixin sdk version
var weixinSDKVersion = qiaoWeixinx.sversion();
console.log(weixinSDKVersion);
```

## higherThan
```javascript
var qiaoWeixinx = require('qiao.ext.weixinx');

// compare weixin sdk version higher than
var flag = qiaoWeixinx.higherThan('0.9.90');
console.log(flag);
```

# version
## 0.2.3.20180724
1. readme.md
2. npm publish

## 0.2.2.20180723
1. init