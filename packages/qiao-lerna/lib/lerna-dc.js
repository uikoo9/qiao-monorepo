'use strict';

// q
var q = require('qiao-console');

// check dir
var checkDir = require('./util/check-dir.js');

// handler
var handlerByParallel = require('./util/handler-dc.js');

// line
var line = 0;

/**
 * download counts
 */
module.exports = async function(folderName){
	// clear && start
	// q.clear();
	// q.writeLine(line++, `start operating folder: ${folderName}`);

	// dir
	var subFolders = checkDir(folderName);

	// handler
	handlerByParallel(subFolders, line);
};