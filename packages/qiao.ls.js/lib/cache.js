'use strict';

var ls = require('./ls.js');

// exports
module.exports = cache;

/**
 * cache('name', null);
 * cache('name', 'key', null);
 * cache('name', 'key');
 * cache('name', 'key', value, exp);
 */
function cache(name, key, value, expires){
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
}

// set cache
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

// get cache
function getCache(name, key){
	if(!name || !key) return;

	var data = ls(name);
	if(!data) return;

	return data[key];
}

// remove cache
function removeCache(name, key){
	if(!name || !key) return;

	var data = ls(name);
	if(!data) return;

    delete data[key];
    ls(name, data);
}

// clear cache
function clearCache(name){
	if(!name) return;

    ls(name, null);
}