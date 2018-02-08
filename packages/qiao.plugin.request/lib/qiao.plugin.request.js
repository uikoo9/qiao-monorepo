'use strict';

var reqwest = require('reqwest');

/**
 * ajax
 * 	options, https://www.npmjs.com/package/reqwest
 */
exports.ajax = function(options){
	if(typeof options != 'object'){
		console.log('only support options type!');
		return;
	}
	
	reqwest(options);
};

/**
 * ajax sync
 * 	options, https://www.npmjs.com/package/reqwest
 * 	and you dont need success or error function in options
 * 	and you must babel first in brower
 */
exports.ajaxSync = function(options){
	if(typeof options != 'object'){
		console.log('only support options type!');
		return;
	}
	
	return new Promise(function(resolve, reject){
		options.success = function(resp){
			resolve(resp);
		};
		options.error	= function(err){
			reject(err);
		};
		
		reqwest(options);
	});
};