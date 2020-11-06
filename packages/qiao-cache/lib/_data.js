'use strict';

// node cache
var NodeCache = require('node-cache');

/**
 * cache
 */
exports.cache = new NodeCache({
	stdTTL					: 0,
	checkperiod				: 600,
	maxKeys					: -1,
	useClones				: true,
	deleteOnExpire			: true,
	enableLegacyCallbacks	: false
});

/**
 * set
 * 	key
 * 	value
 */
exports.set = function(key, value){
	exports.cache.set(key, value);
};

/**
 * get
 * 	key
 */
exports.get = function(key){
	return exports.cache.get(key);
};

/**
 * del
 * 	key
 */
exports.del = function(key){
	exports.cache.del(key);
};