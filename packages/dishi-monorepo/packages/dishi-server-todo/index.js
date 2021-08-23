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
	exports.todoController(app);
};

/**
 * todo group
 */
exports.todoGroupController	= require('./lib/todo/controller/TodoGroupController.js');
exports.todoGroupService	= require('./lib/todo/service/TodoGroupService.js');
exports.todoGroupModel		= require('./lib/todo/model/TodoGroupModel.js');

/**
 * todo item
 */
exports.todoItemController	= require('./lib/todo/controller/TodoItemController.js');
exports.todoItemService		= require('./lib/todo/service/TodoItemService.js');
exports.todoItemModel		= require('./lib/todo/model/TodoItemModel.js');

/**
 * todo
 */
exports.todoController	= require('./lib/fore/controller/TodoController.js');
exports.todoService		= require('./lib/fore/service/TodoService.js');