'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('../util/fetch.js');
qiao.log	= require('../util/log.js');

// config
var config 	= require('../config.json');

var todoItemService = require('./todo-item-service');

/**
 * list
 */
exports.list = async function(rows, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var url 	= config.host + config.todoGrouplist;
		var data	= {};
		if(rows) data.rows = rows;

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | list group success`);
		listGroups(json.obj.rows);
	}else{
		var json = await todoItemService.list(groupId, rows);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | list todo success`);
		listTodos(json.obj.rows, groupId);
	}
};

/**
 * add
 */
exports.add = async function(name, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var url 	= config.host + config.todoGroupSave;
		var data	= {
			todoGroupName : name,
			todoGroupOrder: '1'
		};

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | add group success`);
	}else{
		var json = await todoItemService.save(groupId, name);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | add todo success`);
	}
};

/**
 * update
 */
exports.update = async function(id, name, group){
	var groupId = getGroupId(group);

	if(!groupId){
		var url 	= config.host + config.todoGroupSave;
		var data	= {
			id				: id,
			todoGroupName 	: name,
			todoGroupOrder	: '1'
		};

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | update group success`);
	}else{
		var json = await todoItemService.save(groupId, name, id);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | update todo success`);
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
			qiao.log.danger('can note delete default group');
			return;
		}
		
		var url 	= config.host + config.todoGroupDel;
		var data	= {ids : ids};

		var json 	= await qiao.ajax.postWithToken(url, data);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | delete group success`);
	}else{
		var json = await todoItemService.del(ids);
		if(!json) return;
		
		qiao.log.suc(`${json.time}ms | delete todo success`);
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
	qiao.log.log();
	qiao.log.info(`id	group-name`);

	for(var i=0; i<rows.length; i++){
		var item = rows[i];
		qiao.log.log(`${item.id}	${item.todo_group_name}`);
	}
}

// list todos
function listTodos(rows, groupId){
	qiao.log.log();
	qiao.log.info(`todo group ${groupId}:`);
	qiao.log.info(`id	todo-status	todo-name`);

	for(var i=0; i<rows.length; i++){
		var item = rows[i];
		qiao.log.log(`${item.id}	${item.todo_item_status == '0' ? 'todo' : 'done'}		${item.todo_item_name}`);
	}
}