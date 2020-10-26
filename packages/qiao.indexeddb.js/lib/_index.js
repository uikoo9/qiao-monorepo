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