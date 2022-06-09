'use strict';

// q
var q = require('qiao-parallel');

// vars
var _funcs 	= require('./_funcs.js');
var handler	= require('./_handler_download_counts.js');

/**
 * download counts
 */
module.exports = async function(folders, line){
	_funcs.line = line;

	q.parallelByIIFE(handler.handler, folders, _funcs.callback, _funcs.complete);
};