'use strict';

/**
 * set item
 *  name
 *  value
 *  expires, days
 */
exports.setItem = function(name, value, expires){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

    var obj = {};
    obj.value = value;
    if(expires) obj.expires = Date.now() + expires * 24 * 60 * 60 * 1000;

    localStorage.setItem(name, JSON.stringify(obj));
};

/**
 * get item
 *  name
 */
exports.getItem = function(name){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

    var objStr = localStorage.getItem(name);
    var obj;
    try{
        obj = JSON.parse(objStr);
    }catch(e){
        console.log('json parse error:');
        console.log(e);
    }
    if(!obj) return;

    if(obj.expires && obj.expires < Date.now()){
        localStorage.removeItem(name);
        return;
    }

    return obj.value;
};

/**
 * remove item
 */
exports.removeItem = function(name){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

    localStorage.removeItem(name);
};

/**
 * set cache
 *  name
 *  key
 *  value
 *  exp
 */
exports.setCache = function(name, key, value, exp){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

	if(!name || !key) return;

	var data = exports.getItem(name) || {};
	data[key] = value;

	exports.setItem(name, data, exp || 7);
};

/**
 * get cache
 *  name
 *  key
 */
exports.getCache = function(name, key){
	if(!name || !key) return;

	var data = exports.getItem(name);
	if(!data) return;

	return data[key];
};

/**
 * remove cache
 *  name
 *  key
 */
exports.removeCache = function(name, key){
	if(!name || !key) return;

	var data = exports.getItem(name);
	if(!data) return;

    delete data[key];
    exports.setItem(name, data);
};

/**
 * clear cache
 *  name
 */
exports.clearCache = function(name){
	if(!name) return;

    exports.removeItem(name);
};