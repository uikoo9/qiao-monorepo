'use strict';

var ucenterUserController 		= require('./lib/ucenter/controller/UcenterUserController.js');
var ucenterMenuController 		= require('./lib/ucenter/controller/UcenterMenuController.js');
var ucenterRoleController 		= require('./lib/ucenter/controller/UcenterRoleController.js');
var ucenterRoleRMenuController 	= require('./lib/ucenter/controller/UcenterRoleRMenuController.js');
var ucenterRoleRUserController	= require('./lib/ucenter/controller/UcenterRoleRUserController.js');

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
exports.ucenterUserModel = require('./lib/ucenter/model/UcenterUserModel.js');