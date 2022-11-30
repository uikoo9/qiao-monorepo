'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.qec = require('../index.js');

// cmd for dist
qiao.cli.cmd.command('dist <configPath>').alias('d').description('dist electron application').action(dist);

// dist
async function dist(configPath) {
  try {
    var cwd = process.cwd();
    if (configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);

    qiao.qec.dist(require(configPath));

    console.log('dist electron application success!');
    console.log();
  } catch (e) {
    console.log('dist electron application fail!');
    console.log();

    console.log(e);
  }
}
