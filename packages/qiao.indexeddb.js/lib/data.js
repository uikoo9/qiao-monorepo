'use strict';

/**
 * get data
 * 	tx
 * 	tableName
 * 	key
 * 	cb
 */
exports.getData = function(db, tableName, key, cb){
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
 * add data
 * 	tx
 * 	tableName
 * 	data
 * 	cb
 */
exports.addData = function(db, tableName, data, cb){
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
 * put data
 * 	tx
 * 	tableName
 * 	data
 * 	cb
 */
exports.putData = function(db, tableName, data, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).put(data);

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
};