'use strict';

// q
var q = require('qiao-console');

// line
exports.line;

/**
 * callback
 * @param {*} index 
 * @param {*} res 
 */
exports.callback = function(index, res){
    q.writeLine(exports.line + index, res);
};

/**
 * complete
 * @param {*} l 
 */
exports.complete = function(l){
	q.writeLine(exports.line + l, '');
	q.writeLine(exports.line + l + 1, 'qiao-lerna end');
};