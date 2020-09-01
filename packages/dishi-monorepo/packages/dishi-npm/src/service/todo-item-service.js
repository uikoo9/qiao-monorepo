'use strict';

// config
var config = require('../config.json');

// fetch
var fetch = require('../util/fetch.js');

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
exports.save = async function(groupId, name, id){
	var url 	= config.host + config.todoItemSave;
	var data	= {
		todoGroupId 	: groupId,
		todoItemName	: name,
		todoItemOrder	: '1'
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