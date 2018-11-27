console.log('======qiao.fe.weixinx', require('../package.json').version);

/**
 * exports.ajax
 * 	options，配置项
 * 	suc，成功回调
 * 	fail，失败回调
 */
exports.ajax = function(options, suc, fail){
	var url 	= options.url;
	var data 	= options.data || {};
	var method 	= options.method || 'POST';
	var headers	= options.headers || {};

	wx.request({
		url		: url,
		data	: data,
		method	: method,
		header	: headers,
		success	: function(res){
			if(typeof suc == 'function') suc(res.data);
		},
		fail	: function(res){
			if(typeof fail == 'function'){
				fail(res.data);
			}else{
				exports.alert('加载失败，请重试！');
			}
		}
	});
};

// modal options
var _modalOptions = {
	title		: 'title',
	content		: 'msg',
	showCancel	: true,
	cancelText	: '取消',
	cancelColor	: '#000000',
	confirmText	: '确定',
	confirmColor: '#3CC51F'
};

/**
 * exports.alert
 * 	options，提示信息或配置项
 * 	cb，回调函数
 */
exports.alert = function(options, cb){
	// opt
	var opt 		= Object.assign({}, _modalOptions);
	opt.title 		= '提示';
	opt.showCancel	= false;

	// options
	if(typeof options == 'string'){
		opt.content = options;
	}else{
		Object.assign(opt, options);
	}

	// suc
	opt.success = function(res){
		if(res.confirm && typeof cb == 'function') cb();
	};

	wx.showModal(opt);
};

/**
 * exports.confirm
 * 	options，提示信息或配置项
 * 	success，点击确认
 * 	cancel，点击取消
 */
exports.confirm = function(options, success, cancel){
	// opt
	var opt 	= Object.assign({}, _modalOptions);
	opt.title 	= '提示';

	// options
	if (typeof options == 'string') {
		opt.content = options;
	} else {
		Object.assign(opt, options);
	}

	// suc
	opt.success = function(res){
		if(res.confirm){
			if(typeof success == 'function') success();
		}else{
			if(typeof cancel == 'function') cancel();
		}
	};

	wx.showModal(opt);
};

// toast options
var _toastOptions = {
	title	: 'title',
	icon	: 'success', // loading,none
	duration: 2000,
	mask	: true
};

/**
 * exports.suc
 * 	options，提示消息或配置项
 */
exports.suc = function(options){
	// opt
	var opt = Object.assign({}, _toastOptions);

	// options
	if(typeof options == 'string'){
		opt.title = options;
	}else{
		Object.assign(opt, options);
	}

	wx.showToast(opt);
};

/**
 * exports.tip
 * 	options，提示消息或配置项
 */
exports.tip = function(options){
	// opt
	var opt 	= Object.assign({}, _toastOptions);
	opt.icon 	= 'none';
	opt.duration= 2000;
	opt.mask 	= true;

	// options
	if(typeof options == 'string'){
		opt.title = options;
	}else{
		Object.assign(opt, options);
	}

	wx.showToast(opt);
};

/**
 * exports.loading
 */
exports.loading = function(s){
	// opt
	var opt 		= Object.assign({}, _toastOptions);
	opt.icon 		= 'loading';
	opt.title 		= s || '加载中...';
	opt.duration 	= 24 * 60 * 60 * 1000;

	wx.showToast(opt);
};

/**
 * exports.hideLoading
 */
exports.hideLoading = function(){
	wx.hideToast();
};

// sheet options
var _sheetOptions = {
	itemList : ['1'],
	itemColor : '#000000'
};

/**
 * exports.sheet
 */
exports.sheet = function(options, success){
	// opt
	var opt = Object.assign({}, _sheetOptions);

	// options
	if(options instanceof Array){
		opt.itemList = options;
	} else {
		Object.assign(opt, options);
	}

	// suc
	opt.success = function(res){
		if(success) success(res.tapIndex);
	};

	wx.showActionSheet(opt);
};

/**
 * exports.to
 * 	url，navigateTo的页面
 * 	suc，成功的回调
 * 	fail，失败的回调
 */
exports.to = function(url, suc, fail){
	if(!url) return;
	
	wx.navigateTo({
		url		: url,
		success	: function(){
			if(suc){
				suc();
			}else{
				console.log('navigate to url success : ' + url);
			}
		},
		fail	: function(){
			if(fail){
				fail();
			}else{
				console.log('navigate to url fail : ' + url);
			}
		}
	});
};

/**
 * exports.rto
 * 	url，redirectTo的页面
 * 	suc，成功的回调
 * 	fail，失败的回调
 */
exports.rto = function(url, suc, fail){
	if(!url) return;
	
	wx.redirectTo({
		url		: url,
		success	: function(){
			if(suc){
				suc();
			}else{
				console.log('redirect to url success : ' + url);
			}
		},
		fail	: function(){
			if(fail){
				fail();
			}else{
				console.log('redirect to url fail : ' + url);
			}
		}
	});
};

/**
 * exports.tab
 * 	url，switchTab的地址
 * 	suc，成功的回调
 * 	fail，失败的回调
 */
exports.tab = function(url, suc, fail){
	if(!url) return;
	
	wx.switchTab({
		url		: url,
		success	: function(){
			if(suc){
				suc();
			}else{
				console.log('switch tab to url success : ' + url);
			}
		},
		fail	: function(){
			if(fail){
				fail();
			}else{
				console.log('switch tab to url fail : ' + url);
			}
		}
	});
};

/**
 * exports.back
 * 	page，后退几层
 */
exports.back = function(page){
	wx.navigateBack({
		delta : page ? page : 1
	});
};

/**
 * exports.set
 * 	key
 * 	value
 */
exports.set = function(key, value){
	try{
		wx.setStorageSync(key, value);
	}catch(e){
		console.log(e);
	}
};

/**
 * exports.get
 */
exports.get = function (key) {
	try {
		return wx.getStorageSync(key);
	} catch (e) {
		console.log(e);
		return null;
	}
};

/**
 * exports.del
 */
exports.del = function(key){
	try{
		wx.removeStorageSync(key);
	}catch(e){
		console.log(e);
	}
};

/**
 * exports.clear
 */
exports.clear = function(){
	try{
		wx.clearStorageSync();
	}catch(e){
		console.log(e);
	}
};

/**
 * exports.isAndroid
 * 是否android手机
 */
exports.isAndroid = function(){
	try{
		var sys = wx.getSystemInfoSync().system;
		return sys && sys.indexOf('Android') > -1;
	}catch(e){
		console.log(e);
		return false;
	}
};

/**
 * exports.isIos
 * 是否ios手机
 */
exports.isIos = function(){
	try{
		var sys = wx.getSystemInfoSync().system;
		return sys && sys.indexOf('iOS') > -1;
	}catch(e){
		console.log(e);
		return false;
	}
};

/**
 * exports.net
 * 获取网络状态
 * wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
 */
exports.net = function(cb){
	wx.getNetworkType({
		success: function(res){
			if(cb) cb(res.networkType);
		}
	});
};

/**
 * exports.com
 * 获取component
 */
exports.com = function(that, id){
	return that && id ? that.selectComponent('#' + id) : null;
};

/**
 * exports.screen
 * 屏幕亮度相关方法
 * 	value
 * 		null，返回屏幕亮度
 * 		'on'，设置常亮
 * 		0-1，设置屏幕亮度
 */
exports.screen = function(value, suc, fail){
	// get screen
	if(!value){
		wx.getScreenBrightness({
			success : function(v){
				if(suc){
					suc(v);
				}else{
					console.log('get screen brightness suc:' + v);
				}
			},
			fail : function(){
				if(fail){
					fail();
				}else{
					console.log('get screen brightness fail');
				}
			}
		});
		
		return;
	}
	
	// set on
	if(value == 'on'){
		wx.setKeepScreenOn({
			keepScreenOn : true,
			success : function(){
				if(suc){
					suc();
				}else{
					console.log('set screen on suc');
				}
			},
			fail : function(){
				if(fail){
					fail();
				}else{
					console.log('set screen on fail');
				}
			}
		});
		
		return;
	}
	
	// check number
	if(isNaN(value)){
		console.log('set screen brightness need number');
		return;
	}
	
	// set screen
	wx.setScreenBrightness({
		value : value,
		success : function(){
			if(suc){
				suc();
			}else{
				console.log('set screen brightness suc');
			}
		},
		fail : function(){
			if(fail){
				fail();
			}else{
				console.log('set screen brightness fail');
			}
		}
	});
};

/**
 * exports.showImg
 * 图片预览
 * 	url，当前图片地址
 * 	urls，其他图片地址，选填
 */
exports.showImg = function(url, urls){
	if(!url) return;
	
	var imgUrls = urls ? urls : [url];
	wx.previewImage({
		current	: url, 
		urls	: imgUrls
	});
};

/**
 * exports.checkAuth
 * 	auth 
 * 	tip
 * 	success
 */
exports.checkAuth = function(auth, tip, success){
	wx.getSetting({
	    success: function(res){
	    	if(res.authSetting[auth]){
	    		if(success) success();
	    		return;
	    	}
	    	
	    	wx.authorize({
	    		scope: auth,
	    		success: function(){
	    			if(success) success();
	    		},
	    		fail: function(e){
	    			var msg = tip || ('需要授权：' + auth);
	    			exports.alert(msg, function(){
	    				wx.openSetting({
	    					fail: function(){
	    						exports.tip('wx.openSetting fail');
	    					}
	    				});
	    			});
	    		}
	    	});
	    },
	    fail: function(){
	    	exports.tip('get wx setting fail');
	    }
	});
};

/**
 * exports.version
 */
exports.version = function(){
	try{
		return wx.getSystemInfoSync().version;
	}catch(e){
		console.log(e);
		return null;
	}
};

/**
 * exports.sversion
 */
exports.sversion = function(){
	try{
		return wx.getSystemInfoSync().SDKVersion;
	}catch(e){
		console.log(e);
		return null;
	}
};

/**
 * exports.higherThan
 */
exports.higherThan = function(v2){
	var s = _CompareVersion(exports.sversion(), v2);
	
	return s < 0 ? false : true;
};

// compare version
function _CompareVersion(v1, v2){
	v1 = v1.split('.');
	v2 = v2.split('.');
	var len = Math.max(v1.length, v2.length);
	
	while(v1.length < len) v1.push('0');
	while(v2.length < len) v2.push('0');
	
	for(var i = 0; i < len; i++){
		var num1 = parseInt(v1[i]);
		var num2 = parseInt(v2[i]);
		
		if(num1 > num2){
			return 1;
		}else if(num1 < num2){
			return -1;
		}
	}
	
	return 0;
};