// qiao
var qiao = require('../../_qiao.js');

// model
var model	= require('../model/UcenterUserModel.js');

/**
 * ucenter user reg
 */
exports.ucenterUserReg = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.username){
		res.send(qiao.json.danger('缺少参数username！'));
		return;
	}
	if(!req.body.password){
		res.send(qiao.json.danger('缺少参数password！'));
		return;
	}
	if(!req.body.usercode){
		res.send(qiao.json.danger('缺少参数usercode！'));
		return;
	}
	
	// db
	try{
		// vars for code
		var type		= 'reg';
		var username 	= req.body.username;
		var usercode 	= req.body.usercode;
		
		// check code
		var codes = await model.ucenterCodeGet(type, username);
		if(codes.length != 1){
			res.send(qiao.json.danger('请先获取手机验证码！'));
			return;
		}
		if(usercode != codes[0].ucenter_code_code){
			res.send(qiao.json.danger('手机验证码错误！'));
			return;
		}
		
		// vars for reg
		var password 		= req.body.password;
		var encryptPassword	= qiao.encode.AESEncrypt(password, global.config.encryptKey);
		
		// check user
		var usersForMobile = await model.ucenterUserGetByMobile(username);
		if(usersForMobile && usersForMobile.length){
			res.send(qiao.json.danger('手机号已注册！'));
			return;
		}
		
		// reg
		var regUser = await model.ucenterUserReg(username, encryptPassword);
		await model.ucenterCodeDel(type, username);
		
		// send
		res.send(qiao.json.success('注册成功！'));
	}catch(e){
		res.send(qiao.json.danger('注册失败', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter user login
 */
exports.ucenterUserLogin = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.username){
		res.send(qiao.json.danger('缺少参数username！'));
		return;
	}
	if(!req.body.password){
		res.send(qiao.json.danger('缺少参数password！'));
		return;
	}
	
	// vars
	var username 		= req.body.username;
	var password 		= req.body.password;
	var encryptPassword	= qiao.encode.AESEncrypt(password, global.config.encryptKey); 
	
	// db
	try{
		// check user
		var rows = await model.ucenterUserLogin(username, encryptPassword);
		if(!rows || rows.length != 1){
			res.send(qiao.json.danger('用户名或密码错误！'));
			return;
		}
		
		// send
		var usertoken 	= qiao.encode.AESEncrypt(username + encryptPassword, global.config.encryptKey);
		res.send(qiao.json.success('登录成功！', {
			userid 		: rows[0].id,
			usertoken	: usertoken
		}));
	}catch(e){
		res.send(qiao.json.danger('登录失败', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter user forget 
 */
exports.ucenterUserForget = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.username){
		res.send(qiao.json.danger('缺少参数username！'));
		return;
	}
	if(!req.body.password){
		res.send(qiao.json.danger('缺少参数password！'));
		return;
	}
	if(!req.body.usercode){
		res.send(qiao.json.danger('缺少参数usercode！'));
		return;
	}
	
	// db
	try{
		// vars for code
		var type		= 'forget'
		var username 	= req.body.username;
		var usercode 	= req.body.usercode;
		
		// check code
		var codes = await model.ucenterCodeGet(type, username);
		if(codes.length != 1){
			res.send(qiao.json.danger('请先获取手机验证码！'));
			return;
		}
		if(usercode != codes[0].ucenter_code_code){
			res.send(qiao.json.danger('手机验证码错误！'));
			return;
		}
		
		// vars for reg
		var password 		= req.body.password;
		var encryptPassword	= qiao.encode.AESEncrypt(password, global.config.encryptKey);
		
		// check user
		var rows = await model.ucenterUserGetByMobile(username);
		if(rows && rows.length != 1){
			res.send(qiao.json.danger('手机号未注册！'));
			return;
		}
		
		// reg
		await model.ucenterUserForget(rows[0].id, encryptPassword);
		await model.ucenterCodeDel(type, username);
		
		// send
		res.send(qiao.json.success('修改成功！'));
	}catch(e){
		res.send(qiao.json.danger('修改失败', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter code send
 */
exports.ucenterCodeSend = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.type){
		res.send(qiao.json.danger('缺少参数type！'));
		return;
	}
	if(!req.body.sign){
		res.send(qiao.json.danger('缺少参数sign！'));
		return;
	}
	if(!req.body.mobile){
		res.send(qiao.json.danger('缺少参数mobile！'));
		return;
	}
	
	// operate
	try{
		// vars for service
		var type	= req.body.type;
		var mobile 	= req.body.mobile;

		// type service
		var users = await model.ucenterUserGetByMobile(mobile);
		if(type == 'reg' && users && users.length){
			res.send(qiao.json.danger('手机号已注册！'));
			return;
		}
		if(type == 'forget' && users && !users.length){
			res.send(qiao.json.danger('手机号未注册！'));
			return;
		}
		
		// db
		var code = qiao.encode.randomNumber(6);
		var rows = await model.ucenterCodeGet(type, mobile);
		if(rows.length == 1){
			await model.ucenterCodeUpdate(type, mobile, code);
		}else{
			await model.ucenterCodeDel(type, mobile);
			await model.ucenterCodeAdd(type, mobile, code);
		}
		
		// vars for send
		var appid 	= global.config.sms.appid;
		var appkey	= global.config.sms.appkey;
		var sign	= req.body.sign;
		
		// send
		var msg = await qiao.txsms.sendSync({
			appid 	: appid,
			appkey	: appkey,
			sign	: sign,
			mobile	: mobile,
			msg		: '您的验证码是：' + code + '，如非本人操作，请忽略此短信。',
			// 验证码：{1}（切勿向任何人透露）。
			// 您的验证码是：{1}，如非本人操作，请忽略此短信。
		});
		
		// check send
		if(msg != 'ok'){
			res.send(qiao.json.danger(msg));
			return;
		}

		// suc
		res.send(qiao.json.success('验证码发送成功！'));
	}catch(e){
		res.send(qiao.json.danger('验证码发送失败！', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter user get
 */
exports.ucenterUserGet = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.id){
		res.send(qiao.json.danger('缺少参数id！'));
		return;
	}
	
	// db
	try{
		var rows = await model.ucenterUserGetById(req.body.id);
		
		res.send(qiao.json.success('query success', {rows:rows}));
	}catch(e){
		res.send(qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter user check
 */
exports.ucenterUserCheck = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.userid){
		res.send(qiao.json.danger('缺少参数userid！'));
		return;
	}
	if(!req.body.usertoken){
		res.send(qiao.json.danger('缺少参数usertoken！'));
		return;
	}
	
	// vars
	var userid 		= req.body.userid;
	var usertoken	= req.body.usertoken;
	
	// db
	try{
		// get user
		var rows = await model.ucenterUserGetById(userid);
		if(!rows || rows.length != 1){
			res.send(qiao.json.danger('获取用户失败！'));
			return;
		}
		
		// check token
		var user 		= rows[0];
		var username	= user['ucenter_user_name'];
		var password	= user['ucenter_user_password'];
		var rUsertoken 	= qiao.encode.AESEncrypt(username + password, global.config.encryptKey);
		
		// send
		if(usertoken == rUsertoken){
			res.send(qiao.json.success('合法token！', {user:user}));
		}else{
			res.send(qiao.json.danger('非法token！'));
		}
	}catch(e){
		res.send(qiao.json.danger('校验token失败！', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter user menus
 */
exports.ucenterUserMenus = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.id){
		res.send(qiao.json.danger('缺少参数id！'));
		return;
	}
	
	// db
	try{
		var rows = await model.ucenterUserMenus(req.body.id);
		
		res.send(qiao.json.success('query success', {rows:rows}));
	}catch(e){
		res.send(qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};