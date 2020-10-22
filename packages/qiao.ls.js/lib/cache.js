'use strict';

var q = require('./ls.js');

/**
 * cache
 *  cache('name', null);
 *  cache('name', 'key', null);
 *  cache('name', 'key');
 *  cache('name', 'key', value, exp);
 */
exports.cache = function(name, key, value, expires){
	if(!name) return;

	// clear
	if(key === null){
		clearCache(name);
		return;
	}
	
	// remove
	if(value === null){
		removeCache(name, key);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return getCache(name, key);
	}
	
	// set
	setCache(name, key, value, expires);
};

/**
 * set cache
 *  name
 *  key
 *  value
 *  exp
 */
function setCache(name, key, value, exp){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

	if(!name || !key) return;

	var data = q.ls(name) || {};
	data[key] = value;

	q.ls(name, data, exp || 7);
};

/**
 * get cache
 *  name
 *  key
 */
function getCache(name, key){
	if(!name || !key) return;

	var data = q.ls(name);
	if(!data) return;

	return data[key];
};

/**
 * remove cache
 *  name
 *  key
 */
function removeCache(name, key){
	if(!name || !key) return;

	var data = q.ls(name);
	if(!data) return;

    delete data[key];
    q.ls(name, data);
};

/**
 * clear cache
 *  name
 */
function clearCache(name){
	if(!name) return;

    q.ls(name, null);
};