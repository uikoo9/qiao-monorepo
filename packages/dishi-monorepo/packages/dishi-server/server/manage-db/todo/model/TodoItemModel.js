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

	return global.qiao.mysql.query(global.cell_config.db, exports.sql.todoItemGetById, params);
};

/**
 * todo item add
 */
exports.todoItemAdd = function(params){
	return global.qiao.mysql.query(global.cell_config.db, exports.sql.todoItemAdd, params);
};

/**
 * todo item edit
 */
exports.todoItemEdit = function(params){
	return global.qiao.mysql.query(global.cell_config.db, exports.sql.todoItemEdit, params);
};

/**
 * todo item del
 */
exports.todoItemDel = function(ids){
	var params = [];
	params.push(ids);
	
	return global.qiao.mysql.query(global.cell_config.db, exports.sql.todoItemDel, params);
};