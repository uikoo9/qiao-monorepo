'use strict';

// electron pakcager
var packager = require('electron-packager');

// checker
var checker = require('./_check.js');

// util
var util = require('./_util.js');

/**
 * pack
 * @param {*} config
 * @returns
 */
module.exports = async function (config) {
  // check
  checker.checkConfig(config);

  // options
  var options = {
    overwrite: true,
    dir: config.distPath,
    out: config.outPath,
    arch: config.arch,
    asar: !!config.asar,
    name: config.appName,
    icon: util.getIcon(config.appIconPath),
    appVersion: config.appVersion,
    appCopyright: config.appCopyright,
  };

  // packager
  return await packager(options);
};
