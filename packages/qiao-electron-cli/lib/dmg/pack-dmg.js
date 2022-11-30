'use strict';

// path
var path = require('path');

// appdmg
var appDMG = require('./appdmg.js');

// checker
var checker = require('../_check.js');

// util
var util = require('../_util.js');

/**
 * pack dmg
 * @param {*} config
 * @returns
 */
module.exports = async function (config) {
  // check
  checker.checkConfig(config);

  // vars
  var outPath = config.outPath;
  var arch = config.arch;
  var appEnv = config.appEnv;
  var appName = config.appName;
  var appVersion = config.appVersion;
  var dmgIconSize = config.dmgIconSize;
  var dmgBackground = config.dmgBackground;

  // other vars
  var root = process.cwd();
  var appPath = path.resolve(root, `${outPath}/${appName}-darwin-${arch}/${appName}.app`);
  var dmgName = `${appName}-${appEnv}-${appVersion}-${arch}`;
  var dmgOutPath = path.resolve(root, `${outPath}/dmg`);

  // options
  var options = {
    name: dmgName,
    icon: util.getIcon(config.appIconPath),

    overwrite: true,
    debug: false,

    appPath: appPath,
    iconSize: dmgIconSize || 80,
    background: dmgBackground,

    out: dmgOutPath,
  };

  // dmg
  return await appDMG(options);
};
