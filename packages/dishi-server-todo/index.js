'use strict';

var todoGroupController	= require('./lib/todo/controller/TodoGroupController.js');
var todoItemController	= require('./lib/todo/controller/TodoItemController.js');
var todoController		= require('./lib/fore/controller/TodoController.js');

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
	todoGroupController(app);
	todoItemController(app);
	todoController(app);
};