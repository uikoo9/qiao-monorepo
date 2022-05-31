// qiao
var qiao = require('../../_qiao.js');

/**
 * todo group sql
 */
exports.sql = require('./todo-group-sql.json');

/**
 * todo group get by id
 */
exports.todoGroupGetById = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoGroupGetById, params);
};

/**
 * todo group add
 */
exports.todoGroupAdd = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoGroupAdd, params);
};

/**
 * todo group edit
 */
exports.todoGroupEdit = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoGroupEdit, params);
};

/**
 * todo group del
 */
exports.todoGroupDel = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.todoGroupDel, params);
};