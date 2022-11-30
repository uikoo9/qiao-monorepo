'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.qec = require('../index.js');

// cmd for packmac
qiao.cli.cmd.command('packmac <configPath>').alias('pm').description('pack electron application').action(pack);

// cmd for packwin
qiao.cli.cmd.command('packwin <configPath>').alias('pw').description('pack electron application').action(pack);

// pack
async function pack(configPath) {
  try {
    var cwd = process.cwd();
    if (configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);

    await qiao.qec.pack(require(configPath));

    console.log('pack electron application success!');
    console.log();
  } catch (e) {
    console.log('pack electron application fail!');
    console.log();

    console.log(e);
  }
}
