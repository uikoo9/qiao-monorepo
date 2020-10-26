'use strict';

var d = require('./_data.js');
var t = require('./_table.js');

/**
 * open db
 * 	databaseName
 * 	version
 */
exports.openDB = function(databaseName, version){
	return new Promise(function(resolve, reject){
		var request = window.indexedDB.open(databaseName, version);
		request.onerror = function(event){
			reject(new Error('open indexeddb fail'));
		};
		request.onsuccess = function (event) {
			resolve(request.result);
		};
		request.onupgradeneeded = function (event) {
			resolve(event.target.result);
		};
	});
};

/**
 * list db
 */
exports.listDB = function(){
	return new Promise(function(resolve, reject){
		var promise = indexedDB.databases();
		promise
			.then(function(dbs){
				resolve(dbs);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

/**
 * del db
 * 	databaseName
 */
exports.delDB = function(databaseName){
	return new Promise(function(resolve, reject){
		var request = window.indexedDB.deleteDatabase(databaseName);
		request.onerror = function(event){
			reject(new Error('delete database fail'));
		};
		request.onsuccess = function (event) {
			resolve();
		};
	});
};

/**
 * create table
 * 	db
 * 	tables
 * 		key
 * 		index
 * 			name
 * 			index
 * 			unique
 */
exports.createTable = t.createTable;

/**
 * del table
 * 	db
 * 	tableName
 */
exports.delTable = t.delTable;

/**
 * get
 * 	tx
 * 	tableName
 * 	key
 */
exports.get = function(db, tableName, key){
	return new Promise(function(resolve, reject){
		d.getData(db, tableName, key, function(r){
			resolve(r);
		});
	});
};

/**
 * save
 * 	tx
 * 	tableName
 * 	key
 * 	data
 */
exports.save = function(db, tableName, key, data){
	return new Promise(function(resolve, reject){
		d.getData(db, tableName, key, function(r){
			if(r){
				d.putData(db, tableName, data, function(rr){
					resolve(rr);
				});
			}else{
				d.addData(db, tableName, data, function(rr){
					resolve(rr);
				});
			}
		});
	});
};

/**
 * del
 * 	db
 * 	tableName
 * 	key
 */
exports.del = function(db, tableName, key){
	return new Promise(function(resolve, reject){
		var tx = db.transaction([tableName], 'readwrite');
		var request = tx.objectStore(tableName).delete(key);
	
		request.onerror = function (event) {
			reject(new Error('del data fail'));
		};
		request.onsuccess = function (event) {
			resolve();
		};
	});
};

/**
 * clear
 * 	db
 * 	tableName
 */
exports.clear = function(db, tableName){
	return new Promise(function(resolve, reject){
		var tx = db.transaction([tableName], 'readwrite');
		var request = tx.objectStore(tableName).clear();
	
		request.onerror = function (event) {
			reject(new Error('clear fail'));
		};
		request.onsuccess = function (event) {
			resolve();
		};
	});
};