'use strict';

// qiao
var qiao = require('./qiao.js');

/**
 * get group id
 */
exports.getGroupId = function () {
	var group = exports.getGroup();
	if (!group) return;

	return group.id;
};

/**
 * get group
 */
exports.getGroup = function () {
	var group = qiao.config.config('group');
	if (!group) {
		qiao.log.danger('please select a todo group');
		return;
	}

	return group;
};