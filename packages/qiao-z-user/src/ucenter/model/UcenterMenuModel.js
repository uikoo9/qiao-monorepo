// mysql
var mysql = require('qiao-mysql');

/**
 * ucenter menu sql
 */
exports.sql = require('./ucenter-menu-sql.json');

/**
 * ucenter menu get by id
 */
exports.ucenterMenuGetById = function(id){
	var params = [];
	params.push(id);

	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterMenuGetById, params);
};

/**
 * ucenter menu add
 */
exports.ucenterMenuAdd = function(params){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterMenuAdd, params);
};

/**
 * ucenter menu edit
 */
exports.ucenterMenuEdit = function(params){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterMenuEdit, params);
};

/**
 * ucenter menu del
 */
exports.ucenterMenuDel = function(ids){
	var params = [];
	params.push(ids);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterMenuDel, params);
};