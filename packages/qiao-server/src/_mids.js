'use strict';

// qiao
import { 
	encode as qencode,
	json as qjson,
	user as quser,
} from './_qiao.js';

/**
 * cross domain
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const crossDomain = (req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	next();
};

/**
 * auth
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const auth = async (req, res, next) => {
	// path
    const path = req.path;

	// auth - normal visit
	let normalVisit		= false;
    const normalVisitPath = global.config.paths;
	for(let i=0; i<normalVisitPath.length; i++){
		if(path == normalVisitPath[i]) normalVisit = true;
	}
	if(normalVisit){
		next();
		return;
	}

	// auth - has token
	const userid	= req.headers.userid;
	const usertoken	= req.headers.usertoken;
	if(!userid || !usertoken){
		res.send(qjson.danger('缺少token！'));
		return;
    }
	
	// auth - check token
	try{
		// get user
		const rows = await quser.ucenterUserModel.ucenterUserGetById(userid);
		if(!rows || rows.length != 1){
			res.send(qjson.danger('缺少用户信息！'));
			return;
		}
		
		// check token
		const user 		= rows[0];
		const username	= user['ucenter_user_name'];
		const password	= user['ucenter_user_password'];
		const rUsertoken= qencode.AESEncrypt(username + password, global.config.encryptKey);
		
		// send
		if(usertoken != rUsertoken){
			res.send(qjson.danger('非法token！'));
			return;
		}
		
		// set userinfo
		req.body['express_userid'] 	= userid;
		req.body['express_username']= username;
		
		next();
	}catch(e){
		res.send(qjson.danger('校验token失败！', {errName:e.name,errMsg:e.message}));
	}
};