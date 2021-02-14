'use strict';

var ls = require('./ls.js');

// exports
module.exports = cache;

// cache
function cache(name, key, value, expires){
	if(!name) return;

	// clear
	if(key === null){
		_clearCache(name);
		return;
	}
	
	// remove
	if(value === null){
		_removeCache(name, key);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return _getCache(name, key);
	}
	
	// set
	_setCache(name, key, value, expires);
}

// set cache
function _setCache(name, key, value, exp){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

	if(!name || !key) return;

	var data = ls(name) || {};
	data[key] = value;

	ls(name, data, exp || 7 * 24 * 60 * 60 * 1000);
}

// get cache
function _getCache(name, key){
	if(!name || !key) return;

	var data = ls(name);
	if(!data) return;

	return data[key];
}

// remove cache
function _removeCache(name, key){
	if(!name || !key) return;

	var data = ls(name);
	if(!data) return;

    delete data[key];
    ls(name, data);
}

// clear cache
function _clearCache(name){
	if(!name) return;

    ls(name, null);
}