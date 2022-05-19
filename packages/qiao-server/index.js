'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qencode = require('qiao-encode');
var qfile = require('qiao-file');
var qjson = require('qiao-json');
var quser = require('qiao-server-user');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

/**
 * cross domain
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const crossDomain = (req, res, next) => {
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
const auth = async (req, res, next) => {
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

/**
 * init
 * @param {*} options 
 * @returns 
 */
const init = (options) => {
    // check
    if(!options) return;

    // config
    if(options.config){
        global.config = options.config;
    }
	
	// app
	const app = express();
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.text({type:'text/xml'}));
	
	// static paths
    if(options.staticPaths){
        options.staticPaths.forEach((staticPath) => {
            app.use(staticPath.name, express.static(staticPath.path, {maxAge: 0}));
        });
    }

	// auth
    app.use(crossDomain);
    if(options.checkAuth){
        app.use(auth);
    }

    // mids
    if(options.mids){
        options.mids.forEach((mid) => {
            app.use(mid);
        });
    }
	
	// controller
    const serverFiles = qfile.lsdir(process.cwd() + '/');
	for(let i=0; i<serverFiles.files.length; i++){
		const file = serverFiles.files[i].path + serverFiles.files[i].name;
		if(!/node_modules/.test(file) && /Controller\.js$/.test(file)) require(file)(app);
	}
	
	// inits
    quser.init(app);
    if(options.inits){
        options.inits.forEach((init) => {
            init.init(app);
        });
    }
	
	// port
	app.listen(global.config.port);

	// return 
	return app;
};

exports.encode = qencode;
exports.file = qfile;
exports.json = qjson;
exports.user = quser;
exports.init = init;
