'use strict';

// b
var b = require('../util/b.js');

// log
var log = require('../util/log.js');

// service
var todoGroupService 	= require('../service/todo-group-service');
var todoItemService		= require('../service/todo-item-service');

/**
 * list
 */
exports.list = async function(group){
	if(group){
		var json = await todoGroupService.list();
		if(!json) return;
		
		log.suc(`${json.time}ms | list group success`);
		listGroups(json.obj.rows);
	}else{
		var json = await todoItemService.list();
		if(!json) return;
		
		log.suc(`${json.time}ms | list todo success`);
		listTodos(json.obj);
	}
};

/**
 * add
 */
exports.add = async function(name, group){
	if(group){
		var json = await todoGroupService.save(name);
		if(!json) return;
		
		log.suc(`${json.time}ms | add group success`);
	}else{
		var json = await todoItemService.save(name);
		if(!json) return;
		
		log.suc(`${json.time}ms | add todo success`);
	}
};

/**
 * update
 */
exports.update = async function(id, name, group){
	if(group){
		var json = await todoGroupService.save(name, id);
		if(!json) return;
		
		log.suc(`${json.time}ms | update group success`);
	}else{
		var json = await todoItemService.save(name, id);
		if(!json) return;
		
		log.suc(`${json.time}ms | update todo success`);
	}
};

/**
 * del
 */
exports.del = async function(ids, group){
	if(group){
		var idss = ids.split(',');
		if(idss.includes('1')){
			log.danger('can note delete default group');
			return;
		}
		
		var json = await todoGroupService.del(ids);
		if(!json) return;
		
		log.suc(`${json.time}ms | delete group success`);
	}else{
		var json = await todoItemService.del(ids);
		if(!json) return;
		
		log.suc(`${json.time}ms | delete todo success`);
	}
};

// list groups
function listGroups(rows){
	log.log();
	log.info(`id	group-name`);

	for(var i=0; i<rows.length; i++){
		var item = rows[i];
		log.log(`${item.id}	${item.todo_group_name}`);
	}
}

// list todos
function listTodos(obj){
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