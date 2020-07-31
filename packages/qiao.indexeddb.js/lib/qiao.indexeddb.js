'use strict';

/**
 * open db
 * 	databaseName
 * 	version
 * 	onupdate
 * 	onsuccess
 */
exports.openDB = function(databaseName, version, onupdate, onsuccess){
	var request = window.indexedDB.open(databaseName, version);
	request.onerror = function(event){
		console.log('open indexeddb fail');
		if(onsuccess) onsuccess(null);
	};
	request.onsuccess = function (event) {
		console.log('open indexeddb suc');
		if(onsuccess) onsuccess(request.result);
	};
	request.onupgradeneeded = function (event) {
		console.log('open indexeddb update');
		if(onupdate) onupdate(event.target.result);
	};
};

/**
 * list db
 * 	cb
 */
exports.listDB = function(cb){
	var promise = indexedDB.databases();
	promise.then(function(dbs){
		if(cb) cb(dbs);
	})
};

/**
 * del db
 * 	databaseName
 * 	cb
 */
exports.delDB = function(databaseName, cb){
	var request = window.indexedDB.deleteDatabase(databaseName);
	request.onerror = function(event){
		if(cb) cb(false);
	};
	request.onsuccess = function (event) {
		if(cb) cb(true);
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
 * add
 * 	tx
 * 	tableName
 * 	data
 * 	cb
 */
exports.add = function(db, tableName, data, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).add(data);

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
};

/**
 * get
 * 	tx
 * 	tableName
 * 	key
 * 	cb
 */
exports.get = function(db, tableName, key, cb){
	var tx = db.transaction([tableName], 'readonly');
	var request = tx.objectStore(tableName).get(key);

	request.onerror = function (event) {
		if(cb) cb(null);
	};
	
	request.onsuccess = function (event) {
		if(cb) cb(request.result);
	};
};

/**
 * put
 * 	tx
 * 	tableName
 * 	data
 * 	cb
 */
exports.put = function(db, tableName, data, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).put(data);

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
};

/**
 * save
 * 	tx
 * 	tableName
 * 	key
 * 	data
 * 	cb
 */
exports.save = function(db, tableName, key, data, cb){
	exports.get(db, tableName, key, function(r){
		if(r){
			exports.put(db, tableName, data, function(rr){
				if(cb) cb(rr);
			});
		}else{
			exports.add(db, tableName, data, function(rr){
				if(cb) cb(rr);
			});
		}
	});
};

/**
 * del
 * 	tx
 * 	tableName
 * 	key
 * 	cb
 */
exports.del = function(db, tableName, key, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).delete(key);

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
};

/**
 * clear
 * 	tx
 * 	tableName
 * 	cb
 */
exports.clear = function(db, tableName, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).clear();

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
};

/**
 * list db sync
 */
exports.listDBSync = function(){
	return new Promise(function(resolve, reject){
		exports.listDB(function(res){
			resolve(res);
		});
	 });
};

/**
 * addSync
 * 	tx
 * 	tableName
 * 	data
 */
exports.addSync = function(db, tableName, data){
	return new Promise(function(resolve, reject){
		exports.add(db, tableName, data, function(res){
			resolve(res);
		});
	 });
};

/**
 * getSync
 * 	tx
 * 	tableName
 * 	key
 */
exports.getSync = function(db, tableName, key){
	return new Promise(function(resolve, reject){
		exports.get(db, tableName, key, function(res){
			resolve(res);
		});
	});
};

/**
 * putSync
 * 	tx
 * 	tableName
 * 	data
 */
exports.putSync = function(db, tableName, data){
	return new Promise(function(resolve, reject){
		exports.put(db, tableName, data, function(res){
			resolve(res);
		});
	});
};

/**
 * saveSync
 * 	tx
 * 	tableName
 * 	key
 * 	data
 */
exports.saveSync = function(db, tableName, key, data){
	return new Promise(function(resolve, reject){
		exports.save(db, tableName, key, data, function(res){
			resolve(res);
		});
	});
};

/**
 * delSync
 * 	tx
 * 	tableName
 * 	key
 */
exports.delSync = function(db, tableName, key){
	return new Promise(function(resolve, reject){
		exports.del(db, tableName, key, function(res){
			resolve(res);
		});
	});
};

/**
 * clearSync
 * 	tx
 * 	tableName
 */
exports.clearSync = function(db, tableName, cb){
	return new Promise(function(resolve, reject){
		exports.clear(db, tableName, function(res){
			resolve(res);
		});
	});
};