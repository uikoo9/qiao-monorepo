'use strict';

/**
 * open db
 * 	databaseName
 * 	version
 */
exports.openDB = function(databaseName, version){
	return new Promise(function(resolve, reject){
		var request = window.indexedDB.open(databaseName, version || 1);
		request.onerror = function(event){
			reject(event.target.error);
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
			reject(event.target.error);
		};
		request.onsuccess = function (event) {
			resolve();
		};
	});
};