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

	// default
	if(n > 5 || n < 1){
		log.danger('num less than 1 or large than 5, use 5');
		n = 5;
	}

	// get group list
	var groups = await todoGroupService.list();
	if(!groups) return;

	// check groups
	if(!groups.obj || !groups.obj.rows || !groups.obj.rows.length){
		log.danger('no groups, add group first');
		return;
	}

	// for
	var res = [];
	for(var i=0; i<n; i++){
		var item 	= groups.obj.rows[i];
		var group 	= await todoItemService.list(item.id);
		res.push(group);
	}

	// list
	listTodos(res);
};

// list todos
function listTodos(res){
	var group = b.getGroup();
	if(!group) return;

	log.log();
	log.info('========================');
	log.info(`todo group '${group.todo_group_name}[${group.id}]'`);
	log.info('========================');
	log.log();

	var todoRows = obj.todoRows;
	log.danger(`todo items`);
	log.danger('------------------------');
	for(var i=0; i<todoRows.length; i++){
		var item = todoRows[i];
		log.log(`${item.id}	${item.todo_item_name}`);
	}
	log.log();

	var doneRows = obj.doneRows;
	log.suc(`done items`);
	log.suc('------------------------');
	for(var i=0; i<doneRows.length; i++){
		var item = doneRows[i];
		log.log(`${item.id}	${item.todo_item_name}`);
	}
}