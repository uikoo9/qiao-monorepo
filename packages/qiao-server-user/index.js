'use strict';

var ucenterUserController 		= require('./src/ucenter/controller/UcenterUserController.js');
var ucenterMenuController 		= require('./src/ucenter/controller/UcenterMenuController.js');
var ucenterRoleController 		= require('./src/ucenter/controller/UcenterRoleController.js');
var ucenterRoleRMenuController 	= require('./src/ucenter/controller/UcenterRoleRMenuController.js');
var ucenterRoleRUserController	= require('./src/ucenter/controller/UcenterRoleRUserController.js');

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
	ucenterUserController(app);
	ucenterMenuController(app);
	ucenterRoleController(app);
	ucenterRoleRMenuController(app);
	ucenterRoleRUserController(app);
};

/**
 * ucenter user model
 */
exports.ucenterUserModel = require('./src/ucenter/model/UcenterUserModel.js');