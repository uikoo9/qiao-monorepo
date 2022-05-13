// qiao
var qiao = require('../../_qiao.js');

/**
 * ucenter role-r-user sql
 */
exports.sql = require('./ucenter-role-r-user-sql.json');

/**
 * ucenter role-r-user get by id
 */
exports.ucenterRoleRUserGetById = function(id){
	var params = [];
	params.push(id);

	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRUserGetById, params);
};

/**
 * ucenter role-r-user add
 */
exports.ucenterRoleRUserAdd = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRUserAdd, params);
};

/**
 * ucenter role-r-user edit
 */
exports.ucenterRoleRUserEdit = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRUserEdit, params);
};

/**
 * ucenter role-r-user del
 */
exports.ucenterRoleRUserDel = function(ids){
	var params = [];
	params.push(ids);
	
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRUserDel, params);
};