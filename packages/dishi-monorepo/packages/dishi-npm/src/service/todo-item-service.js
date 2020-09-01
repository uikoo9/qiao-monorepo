'use strict';

// config
var config = require('../config.json');

// fetch
var fetch = require('../util/fetch.js');

// log
var log = require('../util/log.js');

/**
 * list
 */
exports.list = async function(groupId, rows){
	var url 	= config.host + config.todoItemlist;
	var data	= {
		todoGroupId : groupId
	};
	if(rows) data.rows = rows;

	return await fetch.postWithToken(url, data);
};

/**
 * save
 */
exports.save = async function(groupId, name, id, order, status){
	var url 	= config.host + config.todoItemSave;
	var data	= {
		todoGroupId 	: groupId,
		todoItemName	: name,
		todoItemOrder	: order || '1',
		todoItemStatus	: status || '0'
	};
	if(id) data.id = id;

	return await fetch.postWithToken(url, data);
};

/**
 * del
 */
exports.del = async function(ids){
	var url 	= config.host + config.todoItemDel;
	var data	= {ids : ids};

	return await fetch.postWithToken(url, data);
};

/**
 * get
 */
exports.get = async function(id){
	var url 	= config.host + config.todoItemGet;
	var data	= {id :id};

	var json 	= await fetch.postWithToken(url, data);
	if(!json) return;
	
	if(!json.obj || !json.obj.rows || !json.obj.rows.length){
		log.danger(`can not find todo item by ${id}`);
		return;
	}

	var item 	= json.obj.rows[0]; 
	item.time	= json.time;
	return item;
};