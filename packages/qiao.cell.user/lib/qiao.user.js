'use strict';

var ucenterUserController 	= require('./ucenter/controller/UcenterUserController.js');
var ucenterUserService		= require('./ucenter/service/UcenterUserService.js');

/**
 * config
 */
exports.config = null;

/**
 * init
 * @param {*} app express app
 * @param {*} config config
 */
exports.init = function(app, config){
	// check app
	if(!app){
		console.log('need express app');
		return;
	}

	// check config
	if(!config){
		console.log('need config');
		return;
	}

	// check config.encryptKey
	if(!config.encryptKey){
		console.log('need config.encryptKey');
		return;
	}

	// check config.sms
	if(!config.sms || !config.sms.appid || !config.sms.appkey){
		console.log('need config.sms, config.sms.appid, config.sms.appkey');
		return;
	}

	// check config.db
	if(!config.db){
		console.log('need config.db');
		return;
	}

	// config
	exports.config = config;

	// init controller
	ucenterUserController(app);

	return ucenterUserService;
};