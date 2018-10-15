'use strict';

var mysql = require('mysql');

/**
 * pool
 */
exports.pool = null;

/**
 * init
 * 	config
 */
exports.init = function(config){
	if(!config){
		console.log('need config to init');
		return;
	}
	
	return exports.pool ? exports.pool : exports.pool = mysql.createPool(config);
};

/**
 * con
 */
exports.con = function(){
	if(!exports.pool){
		console.log('need init mysql pool');
		return;
	}
	
	return new Promise(function(resolve, reject){
		exports.pool.getConnection(function(error, connection){
			return error ? reject(error) : resolve(connection);
		});
	});
};

/**
 * query
 */
exports.query = function(sql, params){
	if(!exports.pool){
		console.log('need init mysql pool');
		return;
	}
	
	return new Promise(function(resolve, reject){
		exports.pool.query(sql, params || [], function(error, results){
			return error ? reject(error) : resolve(results);
		});
	});
};

/**
 * getColumns
 * 	tableName : table name
 */
exports.getColumns = function(tableName){
	if(!tableName){
		console.log('need table name!');
		return;
	}
	
	return exports.query('SHOW COLUMNS FROM ?', mysql.raw(tableName));
};