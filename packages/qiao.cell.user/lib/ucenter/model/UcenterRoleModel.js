// qiao
var qiao = require('../../_qiao.js');

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

	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleGetById, params);
};

/**
 * ucenter role add
 */
exports.ucenterRoleAdd = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleAdd, params);
};

/**
 * ucenter role edit
 */
exports.ucenterRoleEdit = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleEdit, params);
};

/**
 * ucenter role del
 */
exports.ucenterRoleDel = function(ids){
	var params = [];
	params.push(ids);
	
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleDel, params);
};