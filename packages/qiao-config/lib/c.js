'use strict';

var _data = require('./_data.js');

// DB
module.exports = function(dbPath){
    this.path = dbPath;

    // clear
    this.clear = function(){
        clearDB(this.path);
    };

    // all
    this.all = function(){
        return listDB(this.path);
    };

    // config
    this.config = function(key, value){
        return configDB(this.path, key, value);
    };
}

// clear db
function clearDB(p){
	_data.clear(p);
}

// list db
function listDB(p){
	return _data.all(p);
}

// config db
function configDB(p, key, value){
	// remove
	if(value === null){
		_data.del(p, key);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return _data.get(p, key);
	}
	
	// set
	_data.set(p, key, value);
}