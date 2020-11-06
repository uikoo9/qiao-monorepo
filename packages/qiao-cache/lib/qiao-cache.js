'use strict';

// qiao
var qiao = require('qiao.util.file');

// c
var _c = require('./c.js');

/**
 * c
 * 	p
 */
exports.c = function(p){
	// path
	var defaultPath = qiao.path.resolve(__dirname, './config.json');
	var finalPath	= !p ? defaultPath : qiao.path.resolve(process.cwd(), p); 

	// db
	return new _c(finalPath);
};