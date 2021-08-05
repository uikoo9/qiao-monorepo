'use strict';

// qiao
var qiao 	= {};
qiao.encode	= require('qiao.util.encode');
qiao.json 	= require('qiao.util.json');
qiao.mysql	= require('qiao.plugin.mysql');
qiao.txsms	= require('qiao.ext.txsms');
global.qiao	= qiao;

// ucenter
var ucenterUserController 	= require('./ucenter/controller/UcenterUserController.js');
var ucenterUserService		= require('./ucenter/service/UcenterUserService.js');
var ucenterUserModel		= require('./ucenter/model/UcenterUserModel.js');

/**
 * init
 * @param {*} app express app
 */
exports.init = function(app){
	// check config
	if(!global.cell_config){
		console.log('need global.cell_config');
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
 * ucenter user controller
 */
exports.ucenterUserController = ucenterUserController;

/**
 * ucenter user service
 */
exports.ucenterUserService = ucenterUserService;

/**
 * ucenter user model
 */
exports.ucenterUserModel = ucenterUserModel;