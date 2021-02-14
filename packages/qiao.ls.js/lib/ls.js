'use strict';

// exports
module.exports = ls;

/**
 * ls('name', value, expires);
 * ls('name');
 * ls('name', null);
 */
function ls(name, value, expires){
	// remove
	if(value === null){
		removeItem(name);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return getItem(name);
	}
	
	// set
	setItem(name, value, expires);
}

// set item
function setItem(name, value, expires){
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
function getItem(name){
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
function removeItem(name){
    if(!localStorage){
        console.log('unsupport localStorage');
        return;
    }

    localStorage.removeItem(name);
}