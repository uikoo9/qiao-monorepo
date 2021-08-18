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
	exports.todoGroupController(app);
	exports.todoItemController(app);
};

/**
 * todo group
 */
exports.todoGroupController	= require('./todo/controller/TodoGroupController.js');
exports.todoGroupService	= require('./todo/service/TodoGroupService.js');
exports.todoGroupModel		= require('./todo/model/TodoGroupModel.js');

/**
 * todo item
 */
exports.todoItemController	= require('./todo/controller/TodoItemController.js');
exports.todoItemService		= require('./todo/service/TodoItemService.js');
exports.todoItemModel		= require('./todo/model/TodoItemModel.js');