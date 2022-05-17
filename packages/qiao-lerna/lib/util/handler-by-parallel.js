'use strict';

// q
var q = {};
q.console 	= require('qiao-console');
q.parallel	= require('qiao-parallel');

// ncu
var ncu = require('./ncu.js');

// line
exports.line;

/**
 * mult ncu
 */
exports.multiNCU = async function(folders, line){
	exports.line = line;
	q.parallel.parallelByIIFE(handler, folders, callback, complete);
};

// handler
async function handler(folderName){
	return await ncu.ncuSubFolders(folderName);
}

// callback
function callback(index, res){
    q.console.writeLine(exports.line + index, res);
}

// complete
function complete(l){
	q.console.writeLine(exports.line + l, '');
	q.console.writeLine(exports.line + l + 1, 'multi update npm packages end');
}