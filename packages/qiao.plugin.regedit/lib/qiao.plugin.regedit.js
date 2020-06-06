var exec = require('child_process').exec;

var util = require('./util.js');

/**
 * default type
 */
var defaultType = 'REG_SZ';

/**
 * add value
 * 	obj
 * 		key
 * 		name
 * 		type
 * 		data
 * 	cb
 */
exports.addValue = function(obj, cb){
	if(!obj || !obj.key || !obj.name || !obj.data){
		if(cb) cb('need key,name,data');
		return;
	}

	obj.type = obj.type || defaultType;

	exec(`reg add \"${obj.key}\" /v \"${obj.name}\" /t \"${obj.type}\" /d \"${obj.data}\" /f`, { encoding: util.binaryEncoding }, function(err, stdout, stderr){
		if(cb) cb(util.msg(err, stdout, stderr));
	});
};

/**
 * add value sync
 * 	obj
 * 		key
 * 		name
 * 		type
 * 		data
 */
exports.addValueSync = function(obj){
	return new Promise(function(resolve, reject){
		exports.addValue(obj, function(res){
			resolve(res);
		});
 	});
};

/**
 * del value
 * 	obj
 * 		key
 * 		name
 * 	cb
 */
exports.delValue = function(obj, cb){
	if(!obj || !obj.key || !obj.name){
		if(cb) cb('need key,name');
		return;
	}

	exec(`reg delete \"${obj.key}\" /v \"${obj.name}\" /f`, { encoding: util.binaryEncoding }, function(err, stdout, stderr){
		if(cb) cb(util.msg(err, stdout, stderr));
	});
};

/**
 * del value sync
 * 	obj
 * 		key
 * 		name
 */
exports.delValueSync = function(obj){
	return new Promise(function(resolve, reject){
		exports.delValue(obj, function(res){
			resolve(res);
		});
 	});
};