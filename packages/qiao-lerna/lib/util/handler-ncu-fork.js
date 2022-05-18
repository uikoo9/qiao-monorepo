'use strict';

// q
var q = require('qiao-parallel');

// vars
var _funcs 	= require('./_funcs.js');

/**
 * mult ncu
 */
module.exports = async function(folders, line){
	// line
	_funcs.line = line;

	// run
	var jsPath = require('path').resolve(__dirname, './handler-ncu-cp.js');
	q.parallelByFork(jsPath, folders, _funcs.callback, _funcs.complete);
};