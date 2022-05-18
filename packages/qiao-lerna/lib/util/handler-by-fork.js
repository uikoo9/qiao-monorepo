'use strict';

// q
var q = require('qiao-parallel');

// vars
var _funcs 	= require('./_funcs.js');

/**
 * mult ncu
 */
exports.multiNCU = async function(folders, line){
	// line
	_funcs.line = line;

	// run
	var jsPath = require('path').resolve(__dirname, './handler-fork.js');
	q.parallelByFork(jsPath, folders, _funcs.callback, _funcs.complete);
};