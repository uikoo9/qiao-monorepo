'use strict';

var isOnline 			= require('./is-online.js');
var offlineToOnline 	= require('./offline-to-online.js');

// exports
exports.isOnline 		= isOnline.isOnline;
exports.offlineToOnline = offlineToOnline.offlineToOnline;