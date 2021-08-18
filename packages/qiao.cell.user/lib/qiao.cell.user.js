'use strict';

/**
 * init
 * @param {*} app express app
 */
exports.init = function(app){
	// check config
	if(!global.config){
		console.log('need global.config');
		return;
	}

	// check app
	if(!app){
		console.log('need express app');
		return;
	}

	// init controller
	exports.ucenterUserController(app);
};

/**
 * ucenter user
 */
exports.ucenterUserController 	= require('./ucenter/controller/UcenterUserController.js');
exports.ucenterUserService		= require('./ucenter/service/UcenterUserService.js');
exports.ucenterUserModel		= require('./ucenter/model/UcenterUserModel.js');