'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('../util/fetch.js');
qiao.log	= require('../util/log.js');

// config
var config 	= require('../config.json');

/**
 * done
 */
exports.done = async function(id){
	// get item
	var item = await getTodoItemById(id);
	if(!item) return;

	// update item
	var url 	= config.host + config.todoItemSave;
	var data	= {
		id 				:id,
		todoGroupId		: item.todo_group_id,
		todoItemName	: item.todo_item_name,
		todoItemOrder	: item.todo_item_order,
		todoItemStatus	: '1'
	};
	var json = await qiao.ajax.postWithToken(url, data);
	if(!json) return;

	// suc
	qiao.log.suc(`${json.time + item.time}ms | done success`);
};

// get todo item by id
async function getTodoItemById(id){
	var url 	= config.host + config.todoItemGet;
	var data	= {id :id};

	var json 	= await qiao.ajax.postWithToken(url, data);
	if(!json) return;
	
	if(!json.obj || !json.obj.rows || !json.obj.rows.length){
		qiao.log.danger(`can not find todo item by ${id}`);
		return;
	}

	var item 	= json.obj.rows[0]; 
	item.time	= json.time;
	return item;
}