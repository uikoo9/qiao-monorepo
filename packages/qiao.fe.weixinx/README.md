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

# api
## require
var qiaoWeixinx = require('qiao.ext.weixinx');

## alert
```javascript
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
// default loading
qiaoWeixinx.loading();

// custom loading
qiaoWeixinx.loading('custom loading');
```

## hideLoading
```javascript
// hide loading
qiaoWeixinx.hideLoading();
```

## sheet
```javascript
// sheet
qiaoWeixinx.sheet(['1', '2'], function(index){
	// index : 0,1
});
```

## ajax
```javascript
// ajax
qiaoWeixinx.ajax();
```

# version
## 0.2.3.20180724
1. readme.md

## 0.2.2.20180723
1. init