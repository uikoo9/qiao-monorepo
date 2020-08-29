// qiao
var qiao 	= require('qiao.util.all');
qiao.config = require('../../../config/config.json');

/**
 * todo item sql
 */
exports.sql = require('./todo-item-sql.json');

/**
 * todo item get by id
 */
exports.todoItemGetById = function(id){
	var params = [];
	params.push(id);

	return qiao.mysql.query(qiao.config.db, exports.sql.todoItemGetById, params);
};

/**
 * todo item add
 */
exports.todoItemAdd = function(params){
	return qiao.mysql.query(qiao.config.db, exports.sql.todoItemAdd, params);
};

/**
 * todo item edit
 */
exports.todoItemEdit = function(params){
	return qiao.mysql.query(qiao.config.db, exports.sql.todoItemEdit, params);
};

/**
 * todo item del
 */
exports.todoItemDel = function(ids){
	var params = [];
	params.push(ids);
	
	return qiao.mysql.query(qiao.config.db, exports.sql.todoItemDel, params);
};