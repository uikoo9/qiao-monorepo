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
 * create db
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
		cb(null);
	};
	
	request.onsuccess = function (event) {
		console.log('add data suc');
		cb('suc');
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
		console.log('put data fail', event);
		cb(null);
	};
	
	request.onsuccess = function (event) {
		console.log('put data suc');
		cb('suc');
	};
};