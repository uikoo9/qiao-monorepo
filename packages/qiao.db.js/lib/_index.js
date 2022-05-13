'use strict';

/**
 * get data
 * 	tx
 * 	tableName
 * 	indexName
 */
exports.getAll = function(db, tableName, indexName){
	return new Promise(function(resolve, reject){
		var tx 		= db.transaction([tableName], 'readonly');
		var os 		= tx.objectStore(tableName);
		var index	= os.index(indexName);
		var request	= index.getAll();
	
		request.onerror = function (event) {
			reject(event.target.error);
		};
		request.onsuccess = function (event) {
			resolve(request.result);
		};
	});
};