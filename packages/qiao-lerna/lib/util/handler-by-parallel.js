'use strict';

// q
var q = require('qiao-parallel');

// vars
var _funcs 	= require('./_funcs.js');
var handler	= require('./_handler.js');

/**
 * mult ncu
 */
exports.multiNCU = async function(folders, line){
	_funcs.line = line;
	q.parallelByIIFE(handler, folders, _funcs.callback, _funcs.complete);
};