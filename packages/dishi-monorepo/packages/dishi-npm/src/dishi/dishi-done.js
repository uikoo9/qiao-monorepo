'use strict';

// log
var log = require('../util/log.js');

// service
var todoItemService	= require('../service/todo-item-service');

/**
 * done
 */
exports.done = async function(id){
	// get item
	var item = await todoItemService.get(id);
	if(!item) return;

	// update item
	var json = await todoItemService.save(item.todo_group_id, item.todo_item_name, id, item.todo_item_order, '1');
	if(!json) return;

	// suc
	log.suc(`${json.time + item.time}ms | done success`);
};