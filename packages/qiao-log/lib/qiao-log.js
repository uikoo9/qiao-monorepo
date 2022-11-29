"use strict";

// log config
var logConfig = require("./log-config.js");

/**
 * log4js
 */
exports.log4js = require("log4js");

/**
 * get logger
 * @param {*} filename
 * @param {*} pattern
 * @returns
 */
exports.getLogger = function (filename, pattern) {
  // config
  var config = logConfig(filename, pattern);
  exports.log4js.configure(config);

  // return
  return exports.log4js.getLogger();
};
