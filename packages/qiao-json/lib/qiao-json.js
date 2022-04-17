'use strict';

/**
 * json
 * 	type
 * 	msg
 * 	obj
 */
exports.json = function(type, msg, obj){
	var json = {
		success : true,
		msg		: '',
		type	: '',
		obj		: null
	};
	
	if(type) json.type = type;
	if(msg)	json.msg = msg;
	if(obj) json.obj = obj;
	
	return json;
};

/**
 * success
 * 	msg
 * 	obj
 */
exports.success = function(msg, obj){
	return exports.json('success', msg, obj);
};

/**
 * info
 * 	msg
 * 	obj
 */
exports.info = function(msg, obj){
	return exports.json('info', msg, obj);
};

/**
 * warning
 * 	msg
 * 	obj
 */
exports.warning = function(msg, obj){
	return exports.json('warning', msg, obj);
};

/**
 * danger
 * 	msg
 * 	obj
 */
exports.danger = function(msg, obj){
	return exports.json('danger', msg, obj);
};