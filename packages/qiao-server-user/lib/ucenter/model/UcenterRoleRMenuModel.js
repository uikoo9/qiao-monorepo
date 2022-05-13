// qiao
var qiao = require('../../_qiao.js');

/**
 * ucenter role-r-menu sql
 */
exports.sql = require('./ucenter-role-r-menu-sql.json');

/**
 * ucenter role-r-menu get by id
 */
exports.ucenterRoleRMenuGetById = function(id){
	var params = [];
	params.push(id);

	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRMenuGetById, params);
};

/**
 * ucenter role-r-menu add
 */
exports.ucenterRoleRMenuAdd = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRMenuAdd, params);
};

/**
 * ucenter role-r-menu edit
 */
exports.ucenterRoleRMenuEdit = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRMenuEdit, params);
};

/**
 * ucenter role-r-menu del
 */
exports.ucenterRoleRMenuDel = function(ids){
	var params = [];
	params.push(ids);
	
	return qiao.mysql.query(global.config.db, exports.sql.ucenterRoleRMenuDel, params);
};