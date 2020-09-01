'use strict';

// log
var log = require('../util/log.js');

// service
var todoGroupService 	= require('./todo-group-service');
var todoItemService		= require('./todo-item-service');

/**
 * list
 */
exports.list = async function(rows, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var json = await todoGroupService.list(rows);
		if(!json) return;
		
		log.suc(`${json.time}ms | list group success`);
		listGroups(json.obj.rows);
	}else{
		var json = await todoItemService.list(groupId, rows);
		if(!json) return;
		
		log.suc(`${json.time}ms | list todo success`);
		listTodos(json.obj.rows, groupId);
	}
};

/**
 * add
 */
exports.add = async function(name, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var json = await todoGroupService.save(name);
		if(!json) return;
		
		log.suc(`${json.time}ms | add group success`);
	}else{
		var json = await todoItemService.save(groupId, name);
		if(!json) return;
		
		log.suc(`${json.time}ms | add todo success`);
	}
};

/**
 * update
 */
exports.update = async function(id, name, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var json = await todoGroupService.save(name, id);
		if(!json) return;
		
		log.suc(`${json.time}ms | update group success`);
	}else{
		var json = await todoItemService.save(groupId, name, id);
		if(!json) return;
		
		log.suc(`${json.time}ms | update todo success`);
	}
};

/**
 * del
 */
exports.del = async function(ids, group){
	var groupId = getGroupId(group);

	if(!groupId){
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

// get group id
function getGroupId(group){
	var groupId;
	if(group){
		if(typeof group == 'string') groupId = group;
	}else{
		groupId = '1';
	}

	return groupId;
}

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
function listTodos(rows, groupId){
	log.log();
	log.info(`todo group ${groupId}:`);
	log.info(`id	todo-status	todo-name`);

	for(var i=0; i<rows.length; i++){
		var item = rows[i];
		log.log(`${item.id}	${item.todo_item_status == '0' ? 'todo' : 'done'}		${item.todo_item_name}`);
	}
}