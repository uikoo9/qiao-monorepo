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
	// check config
	if(!config){
		console.log('need config to init');
		return;
	}
	
	// pool
	return exports.pool ? exports.pool : exports.pool = mysql.createPool(config);
};

/**
 * con
 */
exports.con = function(){
	// check pool
	if(!exports.pool){
		console.log('need init mysql pool');
		return;
	}
	
	// connection
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
	// check pool
	if(!exports.pool){
		console.log('need init mysql pool');
		return;
	}
	
	// query
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
	// check pool
	if(!exports.pool){
		console.log('need init mysql pool');
		return;
	}
	
	// check table name
	if(!tableName){
		console.log('need table name!');
		return;
	}
	
	// columns
	return exports.query('SHOW COLUMNS FROM ?', mysql.raw(tableName));
};

/**
 * getTypes
 * 	mysqlType : mysql type
 */
exports.getTypes = function(mysqlType){
	// check
	if(!mysqlType) return 'string';
	
	// char, varchar
	if(mysqlType.indexOf('char') > -1) return 'string';
	
	// int
	if(mysqlType.indexOf('int') > -1) return 'number';
	
	// date, datetime
	if(mysqlType.indexOf('date') > -1) return 'date';

	return 'string';
};