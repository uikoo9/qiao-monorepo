// qiao
var qiao = require('../../_qiao.js');

/**
 * todo item sql
 */
exports.sql = require('./todo-item-sql.json');

/**
 * todo item get by id
 */
exports.todoItemGetById = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoItemGetById, params);
};

/**
 * todo item add
 */
exports.todoItemAdd = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoItemAdd, params);
};

/**
 * todo item edit
 */
exports.todoItemEdit = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoItemEdit, params);
};

/**
 * todo item del
 */
exports.todoItemDel = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoItemDel, params);
};