'use strict';

// exports
module.exports = ls;

/**
 * @function ls
 * @param {string} name key
 * @param {any} value value
 * @param {number} expires expiration time ms
 * @example
 * // get localstorage item by key: name
 * ls(name)
 * 
 * // set localstorage item by key-value: name-value
 * ls(name, value)
 * 
 * // set localstorage item by key-value: name-value, and expiration time: expires ms
 * ls(name, value, expires)
 * 
 * // del localstorage item by key: name
 * ls(name, null):
 */
function ls(name, value, expires){
	// remove
	if(value === null){
		_removeItem(name);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return _getItem(name);
	}
	
	// set
	_setItem(name, value, expires);
}

// set item
function _setItem(name, value, expires){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

    var obj = {};
    obj.value = value;
    if(expires) obj.expires = Date.now() + expires;

    localStorage.setItem(name, JSON.stringify(obj));
}

// get item
function _getItem(name){
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
}

// remove item
function _removeItem(name){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

    localStorage.removeItem(name);
}