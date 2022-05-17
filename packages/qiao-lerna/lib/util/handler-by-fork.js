'use strict';

// fs
var fs = require('./fs.js');

// q
var q = {};
q.console = require('qiao-console');
q.parallel	= require('qiao-parallel');

// line
exports.line;

/**
 * mult ncu
 */
exports.multiNCU = async function(folders, line){
	// line
	exports.line = line;

	// run
	var jsPath = fs.path.resolve(__dirname, './handler-fork.js');
	q.parallel.parallelByFork(jsPath, folders, callback, complete);
};

// callback
function callback(index, res){
    q.console.writeLine(exports.line + index, res);
}

// complete
function complete(l){
	q.console.writeLine(exports.line + l, '');
	q.console.writeLine(exports.line + l + 1, 'multi update npm packages end');
}