'use strict';

// qiao
var qiao 	= require('../../../_qiao.js');
qiao.user	= require('qiao.cell.user');

// vars
var configServer = require('../config/config-server.json');

/**
 * cross domain
 */
exports.crossDomain = function(req, res, next){
	res.set('Access-Control-Allow-Origin', '*');
	next();
};

/**
 * auth
 */
exports.auth = async function(req, res, next){
	// path
    var path = req.path;

	// auth - normal visit
	var normalVisit		= false;
    var normalVisitPath = configServer.path;
	for(var i=0; i<normalVisitPath.length; i++){
		if(path == normalVisitPath[i]) normalVisit = true;
	}
	if(normalVisit){
		next();
		return;
	}

	// auth - has token
	var userid		= req.headers.userid;
	var usertoken	= req.headers.usertoken;
	if(!userid || !usertoken){
		res.send(qiao.json.danger('缺少token！'));
		return;
    }
	
	// auth - check token
	try{
		// get user
		var rows = await qiao.user.ucenterUserModel.ucenterUserGetById(userid);
		if(!rows || rows.length != 1){
			res.send(qiao.json.danger('缺少用户信息！'));
			return;
		}
		
		// check token
		var user 		= rows[0];
		var username	= user['ucenter_user_name'];
		var password	= user['ucenter_user_password'];
		var rUsertoken 	= qiao.encode.AESEncrypt(username + password, global.config.encryptKey);
		
		// send
		if(usertoken != rUsertoken){
			res.send(qiao.json.danger('非法token！'));
			return;
		}
		
		// set userinfo
		req.body['express_userid'] 	= userid;
		req.body['express_username']= username;
		
		next();
	}catch(e){
		res.send(qiao.json.danger('校验token失败！', {errName:e.name,errMsg:e.message}));
	}
};