'use strict';

// config
var config = require('../config.json');

// fetch
var fetch = require('../util/fetch.js');

/**
 * list
 */
exports.list = async function(rows){
	var url 	= config.host + config.todoGrouplist;
	var data	= {};
	if(rows) data.rows = rows;

	return await fetch.postWithToken(url, data);
};

/**
 * save
 */
exports.save = async function(name, id){
	var url 	= config.host + config.todoGroupSave;
	var data	= {
		todoGroupName : name,
		todoGroupOrder: '1'
	};
	if(id) data.id = id;

	return await fetch.postWithToken(url, data);
};

/**
 * del
 */
exports.del = async function(ids){
	var url 	= config.host + config.todoGroupDel;
	var data	= {ids : ids};

	return await fetch.postWithToken(url, data);
};