'use strict';

// qiao
var qiao 	= {};
qiao.config	= require('qiao-config');
qiao.log	= require('../util/log.js');

/**
 * use
 */
exports.use = async function(id){
	if(!id){
		qiao.log.danger('need group id');
		return;
	}

	qiao.config.set('groupId', id);
};