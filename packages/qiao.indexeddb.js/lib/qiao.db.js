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
		console.log('open indexeddb fail', event);
		cb(null);
	};
	request.onsuccess = function (event) {
		console.log('open indexeddb suc');
	};
	request.onupgradeneeded = function (event) {
		console.log('open indexeddb update');
		cb(event.target.result);
	};
};

/**
 * create db
 * 	db
 * 	tables
 */
exports.createTable = function(db, tables){
	if(!db) return null;

	var res = [];
	for(var i=0; i<tables.length; i++){
		var table = tables[i];
		if(!db.objectStoreNames.contains(table.name)){
			var objectStore = db.createObjectStore(table.name, table.key);
			res.push(objectStore);
		}
	}

	return res;
};

/**
 * open db and create tables
 * 	databaseName
 * 	version
 * 	tables
 * 		name
 * 		keys
 */
exports.openDBAndCreateDB = function(databaseName, version, tables){
	exports.openDB(databaseName, version, function(db){
		exports.createTable(db, tables);
	});
};