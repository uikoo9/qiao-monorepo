'use strict';

// data
var _data = require('./_data.js');

/**
 * node cache
 * 	https://www.npmjs.com/package/node-cache
 */
exports.nodeCache = _data.cache;

/**
 * cache
 */
exports.cache = function(key, value){
	// remove
	if(value === null){
		_data.del(key);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return _data.get(key);
	}
	
	// set
	_data.set(key, value);
};