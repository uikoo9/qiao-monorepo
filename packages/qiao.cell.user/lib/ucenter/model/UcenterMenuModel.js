// qiao
var qiao = require('../../_qiao.js');

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

	return qiao.mysql.query(global.config.db, exports.sql.ucenterMenuGetById, params);
};

/**
 * ucenter menu add
 */
exports.ucenterMenuAdd = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterMenuAdd, params);
};

/**
 * ucenter menu edit
 */
exports.ucenterMenuEdit = function(params){
	return qiao.mysql.query(global.config.db, exports.sql.ucenterMenuEdit, params);
};

/**
 * ucenter menu del
 */
exports.ucenterMenuDel = function(ids){
	var params = [];
	params.push(ids);
	
	return qiao.mysql.query(global.config.db, exports.sql.ucenterMenuDel, params);
};