'use strict';

var d = require('./data.js');

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
 */
exports.createTable = function(db, tables){
	if(!db) return null;

	var res = [];
	for(var i=0; i<tables.length; i++){
		var table = tables[i];
		if(!db.objectStoreNames.contains(table.name)){
			// key
			var key = {};
			if(table.key == 'auto'){
				key.autoIncrement = true;
			}else{
				key.keyPath = table.key;
			}

			// create
			var objectStore = db.createObjectStore(table.name, key);

			// index
			if(table.index){
				var name = table.index.name;
				var unique = table.index.unique;
				objectStore.createIndex(name, name, { unique: unique });
			}

			// push
			res.push(objectStore);
		}
	}

	return res;
};

/**
 * del table
 * 	db
 * 	tableName
 */
exports.delTable = function(db, tableName){
	db.deleteObjectStore(tableName);
};

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
 * 	tx
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
 * 	tx
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