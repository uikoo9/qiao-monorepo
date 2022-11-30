'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.qec = require('../index.js');

// cmd for init
qiao.cli.cmd.command('init <destPath>').description('init electron application').action(init);

// init project
async function init(destPath) {
  try {
    var cwd = process.cwd();
    if (destPath.startsWith('./')) destPath = path.resolve(cwd, destPath);

    qiao.qec.init(destPath);

    console.log('init electron application success!');
    console.log();
  } catch (e) {
    console.log('init electron application fail!');
    console.log();

    console.log(e);
  }
}
