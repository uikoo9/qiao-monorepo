'use strict';

// config
var config = require('../config.json');

// fetch
var fetch = require('../util/fetch.js');

// log
var log = require('../util/log.js');

// qiao-config
var q = require('qiao-config');

/**
 * list
 */
exports.list = async function(){
	var url 	= config.host + config.todoGrouplist;
	var data	= {};
	data.rows	= q.config('rows') || '10';

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

/**
 * get
 */
exports.get = async function(id){
	if(!id){
		log.danger('need group id');
		return;
	}

	var url 	= config.host + config.todoGroupGet;
	var data	= {id :id};

	var json 	= await fetch.postWithToken(url, data);
	if(!json) return;
	
	if(!json.obj || !json.obj.rows || !json.obj.rows.length){
		log.danger(`can not find todo group by ${id}`);
		return;
	}

	var item 	= json.obj.rows[0]; 
	item.time	= json.time;
	return item;
};