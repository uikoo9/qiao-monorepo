'use strict';

// log
var log = require('./log.js');

// qiao-config
var q = require('qiao-config');

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
	var group = q.c('group');
	if(!group){
		log.danger('please select a todo group');
		return;
	}

	return group;
};