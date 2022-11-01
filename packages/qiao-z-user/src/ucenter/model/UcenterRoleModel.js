// mysql
var mysql = require('qiao-mysql');

/**
 * ucenter role sql
 */
exports.sql = require('./ucenter-role-sql.json');

/**
 * ucenter role get by id
 */
exports.ucenterRoleGetById = function(id){
	var params = [];
	params.push(id);

	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterRoleGetById, params);
};

/**
 * ucenter role add
 */
exports.ucenterRoleAdd = function(params){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterRoleAdd, params);
};

/**
 * ucenter role edit
 */
exports.ucenterRoleEdit = function(params){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterRoleEdit, params);
};

/**
 * ucenter role del
 */
exports.ucenterRoleDel = function(ids){
	var params = [];
	params.push(ids);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterRoleDel, params);
};