'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.qec = require('../index.js');

// cmd for uploadDmg
qiao.cli.cmd.command('uploaddmg <configPath>').alias('ud').description('upload dmg to cos').action(uploadDmg);

// upload dmg
async function uploadDmg(configPath) {
  try {
    var cwd = process.cwd();
    if (configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);

    var url = await qiao.qec.uploadDmg(require(configPath));
    if (!url) {
      console.log('upload dmg to cos fail!');
      console.log();
      return;
    }

    console.log('upload dmg to cos success! ');
    console.log(url);
    console.log();
  } catch (e) {
    console.log('upload dmg to cos fail!');
    console.log();

    console.log(e);
  }
}
