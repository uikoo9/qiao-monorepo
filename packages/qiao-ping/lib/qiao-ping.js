'use strict';

// ping
var p = require('ping');

/**
 * ping
 * 	host
 * 	config, https://www.npmjs.com/package/ping#support-configuration
 * 	return res, https://www.npmjs.com/package/ping#output-specification
 */
exports.ping = function(host, config){
	return p.promise.probe(host, config || {});
};