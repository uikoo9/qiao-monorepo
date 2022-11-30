'use strict';

// path
var path = require('path');

// q
var q = require('qiao-cos');

// checker
var checker = require('./_check.js');

/**
 * upload dmg
 * @param {*} config
 * @returns
 */
module.exports = async function (config) {
  // check
  checker.checkConfig(config);
  checker.checkCosConfig(config);

  // cos config
  var cosConfig = config.cosConfig;
  var client = q(cosConfig);

  // dest path
  var dmgName = `${config.appName}-${config.appEnv}-${config.appVersion}-${config.arch}`;
  var dmgPath = path.resolve(process.cwd(), `${config.outPath}/dmg/${dmgName}.dmg`);
  var destPath = `${cosConfig.destPath}${dmgName}.dmg`;

  // rs
  var rs = await client.uploadFileSync(destPath, dmgPath);
  if (!rs || !rs.Location) return;

  // return
  return `https://${rs.Location}`;
};
