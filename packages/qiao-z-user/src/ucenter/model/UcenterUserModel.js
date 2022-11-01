// mysql
var mysql = require('qiao-mysql');

/**
 * share item sql
 */
exports.sql = require('./ucenter-user-sql.json');

/**
 * ucenter user get by id
 */
exports.ucenterUserGetById = function(id){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterUserGetById, [id]);
};

/**
 * ucenter user get by mobile
 */
exports.ucenterUserGetByMobile = function(id){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterUserGetByMobile, [id]);
};

/**
 * ucenter user login
 */
exports.ucenterUserLogin = function(username, password){
	var params = [];
	params.push(username);
	params.push(password);

	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterUserLogin, params);
};

/**
 * ucenter user reg
 */
exports.ucenterUserReg = function(username, password){
	var params = [];
	params.push(username);
	params.push(password);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterUserReg, params);
};

/**
 * ucenter user forget
 */
exports.ucenterUserForget = function(userid, password){
	var params = [];
	params.push(password);
	params.push(userid);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterUserForget, params);
};

/**
 * ucenter code get
 */
exports.ucenterCodeGet = function(type, mobile){
	var params = [];
	params.push(type);
	params.push(mobile);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterCodeGet, params);
};

/**
 * ucenter code add
 */
exports.ucenterCodeAdd = function(type, mobile, code){
	var params = [];
	params.push(type);
	params.push(mobile);
	params.push(code);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterCodeAdd, params);
};

/**
 * ucenter code update
 */
exports.ucenterCodeUpdate = function(type, mobile, code){
	var params = [];
	params.push(code);
	params.push(type);
	params.push(mobile);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterCodeUpdate, params);
};

/**
 * ucenter code del
 */
exports.ucenterCodeDel = function(type, mobile){
	var params = [];
	params.push(type);
	params.push(mobile);
	
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterCodeDel, params);
};

/**
 * ucenter user menus
 */
exports.ucenterUserMenus = function(id){
	return mysql.query(global.QIAO_USER_CONFIG.db, exports.sql.ucenterUserMenus, [id]);
};