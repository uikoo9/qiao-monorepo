'use strict';

var ls = require('./ls.js');

/**
 * cache('name', null);
 * cache('name', 'key', null);
 * cache('name', 'key');
 * cache('name', 'key', value, exp);
 */
module.exports = function(name, key, value, expires){
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

	var data = ls(name) || {};
	data[key] = value;

	ls(name, data, exp || 7);
}

/**
 * get cache
 *  name
 *  key
 */
function getCache(name, key){
	if(!name || !key) return;

	var data = ls(name);
	if(!data) return;

	return data[key];
}

/**
 * remove cache
 *  name
 *  key
 */
function removeCache(name, key){
	if(!name || !key) return;

	var data = ls(name);
	if(!data) return;

    delete data[key];
    ls(name, data);
}

/**
 * clear cache
 *  name
 */
function clearCache(name){
	if(!name) return;

    ls(name, null);
}