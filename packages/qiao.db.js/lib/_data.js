'use strict';

/**
 * get
 * 	tx
 * 	tableName
 * 	key
 */
exports.get = function(db, tableName, key){
	return new Promise(function(resolve, reject){
		getData(db, tableName, key, function(r){
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
		getData(db, tableName, key, function(r){
			if(r){
				putData(db, tableName, data, function(rr){
					resolve(rr);
				});
			}else{
				addData(db, tableName, data, function(rr){
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
			reject(event.target.error);
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
			reject(event.target.error);
		};
		request.onsuccess = function (event) {
			resolve();
		};
	});
};

// get data
function getData(db, tableName, key, cb){
	var tx = db.transaction([tableName], 'readonly');
	var request = tx.objectStore(tableName).get(key);

	request.onerror = function (event) {
		if(cb) cb(null);
	};
	request.onsuccess = function (event) {
		if(cb) cb(request.result);
	};
}

// add data
function addData(db, tableName, data, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).add(data);

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
}

// put data
function putData(db, tableName, data, cb){
	var tx = db.transaction([tableName], 'readwrite');
	var request = tx.objectStore(tableName).put(data);

	request.onerror = function (event) {
		if(cb) cb(false);
	};
	request.onsuccess = function (event) {
		if(cb) cb(true);
	};
}