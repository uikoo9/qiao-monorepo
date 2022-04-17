'use strict';

var _io = require('./_io.js');

// clear
exports.clear = function(p){
	// check
	if(!p){
		console.log('qiao-config:get, need path');
		return;
	}

	// io
	try{
		_io.writeFile(p, '');
	}catch(e){
		console.log(`qiao-config:clear, write file error ${e.message}`);
	}
};

// all
exports.all = function(p){
	// check
	if(!p){
		console.log('qiao-config:get, need path');
		return;
	}

	var json;
	try{
		var jsonStr = _io.readFile(p);

		json = JSON.parse(jsonStr);
	}catch(e){
		json = {};
	}

	return json;
};

// get
exports.get = function(p, key){
	// check
	if(!p){
		console.log('qiao-config:get, need path');
		return;
	}
	if(typeof key == 'undefined'){
		console.log('qiao-config:get, need key');
		return;
	}

	// get
	var json = exports.all(p);
	return json[key];
};

// set
exports.set = function(p, key, value){
	// check
	if(!p){
		console.log('qiao-config:set, need path');
		return;
	}
	if(typeof key == 'undefined'){
		console.log('qiao-config:set, need key');
		return;
	}

	// set
	var json = exports.all(p);
	json[key] = value;

	// io
	try{
		_io.writeFile(p, JSON.stringify(json));
	}catch(e){
		console.log(`qiao-config:set, write file error ${e.message}`);
	}
};

// del
exports.del = function(p, key){
	// check
	if(!p){
		console.log('qiao-config:del, need path');
		return;
	}
	if(typeof key == 'undefined'){
		console.log('qiao-config:del, need key');
		return;
	}

	// get
	var v = exports.get(p, key);
	if(!v) return;

	// del
	var json = exports.all(p);
	delete json[key];

	// io
	try{
		_io.writeFile(p, JSON.stringify(json));
	}catch(e){
		console.log(`qiao-config:del, write file error ${e.message}`);
	}
};