'use strict';

// log
var log = require('../util/log.js');

// service
var todoGroupService 	= require('../service/todo-group-service');
var todoItemService		= require('../service/todo-item-service');

/**
 * done
 */
exports.done = async function(id){
	// get item
	var item = await todoItemService.get(id);
	if(!item) return;

	// update item
	var json = await todoItemService.save(item.todo_item_name, id, item.todo_group_id, item.todo_item_order, '1');
	if(!json) return;

	// suc
	log.suc(`${json.time + item.time}ms | done success`);
};

/**
 * move
 */
exports.move = async function(id, groupId){
	// get group
	var group = await todoGroupService.get(groupId);
	if(!group) return;

	// get item
	var item = await todoItemService.get(id);
	if(!item) return;

	// update item
	var json = await todoItemService.save(item.todo_item_name, id, groupId, item.todo_item_order, item.todo_group_status);
	if(!json) return;

	// suc
	log.suc(`${json.time + item.time}ms | move success`);
};

/**
 * show
 */
exports.show = async function(num){
	// check
	var n = Number(num);
	if(!n || isNaN(n)){
		log.danger('num must be number');
		return;
	}

	// get group list
	var groups = await todoGroupService.list();
	console.log(groups, typeof num);
};