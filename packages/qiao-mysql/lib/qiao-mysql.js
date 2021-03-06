'use strict';

/**
 * lib
 * 	mysql
 */
exports.lib = require('mysql');

/**
 * connection
 * 	get mysql connection
 * 
 * 	config
 */
exports.connection = function(config){
	// check
	if(!config) return;
	
	// connection
	return exports.lib.createConnection(config);
};

/**
 * query
 * 	mysql query by connection
 * 
 * 	config
 */
exports.query = function(config, sql, params){
	// check
	if(!config || !sql) return;
	
	// connection
	var connection = exports.connection(config);
	if(!connection) return;
	
	// connect
	connection.connect();
	
	// query
	return new Promise(function(resolve, reject){
		connection.query(sql, params || [], function (error, results, fields){
			connection.end();

			error ? reject(error) : resolve(results); 
		});
	});
};

/**
 * getColumns
 * 	config
 * 	tableName
 */
exports.getColumns = function(config, tableName){
	// check
	if(!config || !tableName) return;
	
	// columns
	return exports.query(config, 'SHOW COLUMNS FROM ?', exports.lib.raw(tableName));
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

/**
 * pool
 */
exports.pool = null;

/**
 * poolInit
 * 	config
 */
exports.poolInit = function(config){
	// check
	if(!config) return;
	
	// pool
	exports.pool ? exports.pool : exports.pool = exports.lib.createPool(config);
};

/**
 * pcon
 */
exports.poolConnection = function(){
	// check pool
	if(!exports.pool) return;
	
	// connection
	return new Promise(function(resolve, reject){
		exports.pool.getConnection(function(error, connection){
			error ? reject(error) : resolve(connection);
		});
	});
};

/**
 * pquery
 */
exports.poolQuery = function(sql, params){
	// check pool
	if(!exports.pool) return;	
	
	// query
	return new Promise(function(resolve, reject){
		exports.pool.getConnection(function(error, connection){
			if(error){
				reject(error);
				return;
			}
			
			connection.query(sql, params || [], function (err, results, fields){
				connection.release();

				err ? reject(err) : resolve(results); 
			});
		});
	});
};