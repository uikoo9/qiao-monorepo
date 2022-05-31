'use strict';

// log
var log = require('./log.js');

// qiao-config
var q = require('qiao-config').c();

/**
 * get group id
 */
exports.getGroupId = function(){
	var group = exports.getGroup();
	if(!group) return;

	return group.id;
};

/**
 * get group
 */
exports.getGroup = function(){
	var group = q.config('group');
	if(!group){
		log.danger('please select a todo group');
		return;
	}

	return group;
};