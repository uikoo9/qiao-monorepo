'use strict';

/**
 * open db
 * 	databaseName
 * 	version
 * 	cb
 */
exports.openDB = function(databaseName, version, cb){
	var request = window.indexedDB.open(databaseName, version);
	request.onerror = function(event){
		console.log('open indexeddb fail');
		cb(null);
	};
	request.onsuccess = function (event) {
		console.log('open indexeddb suc');
	};
	request.onupgradeneeded = function (event) {
		console.log('open indexeddb update');
		cb(event);
	};
};

/**
 * del db
 * 	databaseName
 * 	cb
 */
exports.delDB = function(databaseName, cb){
	var request = window.indexedDB.deleteDatabase(databaseName);
	request.onerror = function(event){
		console.log('del indexeddb fail');
		cb(false);
	};
	request.onsuccess = function (event) {
		console.log('del indexeddb suc');
		cb(true);
	};
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
 * 	tables
 * 		key
 * 		index
 */
exports.delTable = function(db, tableName){
	db.deleteObjectStore(tableName);
};

/**
 * get
 * 	tx
 * 	tableName
 * 	key
 * 	cb
 */
exports.get = function(tx, tableName, key, cb){
	var request = tx.objectStore(tableName).get(key);

	request.onerror = function (event) {
		console.log('get data fail');
		cb(null);
	};
	
	request.onsuccess = function (event) {
		console.log('get data suc');
		cb(request.result);
	};
};

/**
 * add
 * 	tx
 * 	tableName
 * 	data
 * 	cb
 */
exports.add = function(tx, tableName, data, cb){
	var request = tx.objectStore(tableName).add(data);

	request.onerror = function (event) {
		console.log('add data fail');
		cb(false);
	};
	
	request.onsuccess = function (event) {
		console.log('add data suc');
		cb(true);
	};
};

/**
 * put
 * 	tx
 * 	tableName
 * 	data
 * 	cb
 */
exports.put = function(tx, tableName, data, cb){
	var request = tx.objectStore(tableName).put(data);

	request.onerror = function (event) {
		console.log('put data fail');
		cb(false);
	};
	
	request.onsuccess = function (event) {
		console.log('put data suc');
		cb(true);
	};
};

/**
 * del
 * 	tx
 * 	tableName
 * 	key
 * 	cb
 */
exports.del = function(tx, tableName, key, cb){
	var request = tx.objectStore(tableName).delete(key);

	request.onerror = function (event) {
		console.log('del data fail');
		cb(false);
	};
	
	request.onsuccess = function (event) {
		console.log('del data suc');
		cb(true);
	};
};

/**
 * clear
 * 	tx
 * 	tableName
 * 	cb
 */
exports.clear = function(tx, tableName, cb){
	var request = tx.objectStore(tableName).clear();

	request.onerror = function (event) {
		console.log('clear data fail');
		cb(false);
	};
	
	request.onsuccess = function (event) {
		console.log('clear data suc');
		cb(true);
	};
};