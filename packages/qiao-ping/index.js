'use strict';

var p = require('ping');

// ping

/**
 * ping
 * 	host
 * 	config, https://www.npmjs.com/package/ping#support-configuration
 * 	return res, https://www.npmjs.com/package/ping#output-specification
 */
const ping = (host, config) => {
  return p.promise.probe(host, config || {});
};

exports.ping = ping;
