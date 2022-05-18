'use strict';

// q
var q = require('qiao-parallel');

// vars
var _funcs 	= require('./_funcs.js');
var handler	= require('./_handler_pkg.js');

/**
 * mult ncu
 */
module.exports = async function(folders, line, isDev){
	_funcs.line		= line;
	handler.isDev 	= isDev;

	q.parallelByIIFE(handler.handler, folders, _funcs.callback, _funcs.complete);
};