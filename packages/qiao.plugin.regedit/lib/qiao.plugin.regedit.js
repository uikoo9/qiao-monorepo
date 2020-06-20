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

/**
 * list values
 * 	key
 * 	cb
 */
exports.listValues = function(key, cb){
	var cmdQueryAll = `reg query \"${key}\"`;

	exec(cmdQueryAll, { encoding: util.binaryEncoding }, function(err, stdout, stderr){
		var res = util.msg(err, stdout, stderr);
		var completeKey = getCompleteKey(key);
		if(res.indexOf(completeKey) === -1){
			if(cb) cb(res);
			return;
		}
		
		var list = [];

		var ss = res.split('\r\n');
		if(!ss || !ss.length){
			if(cb) cb(res);
			return;
		}

		for(var s of ss){
			if(!s) continue;
			if(s.indexOf(completeKey) > -1) continue;

			var index = s.indexOf('REG_');
			if(!index) continue;

			var keyName = s.substring(0, index);
			keyName = keyName.replace(/(^\s*)|(\s*$)/g,'');
			list.push(keyName);
		}

		if(cb) cb(null, list);
	});
};

// get complete key
function getCompleteKey(key){
	if(key.indexOf('HKCU') === 0) return key.replace(/HKCU/g, 'HKEY_CURRENT_USER');
}

/**
 * list values sync
 */
exports.listValuesSync = function(key){
	return new Promise(function(resolve, reject){
		exports.listValues(key, function(err, res){
			resolve(err ? err : res);
		});
 	});
};