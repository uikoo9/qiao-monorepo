#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');
qiao.lerna  = require('../index.js');

// package
var pkg = require('../package.json'); 

// cmd for version
qiao.cli.cmd
    .version(pkg.version, '-v, --version')
    .usage('<command> [options]');

// cmd for run
qiao.cli.cmd
    .command('run [destPath]')
    .usage('[destPath]')
    .description('multi ncu in path')
    .action(run);

// run
function run(destPath){
    var _path = destPath || '.';
    qiao.lerna.multiNCU(_path);
}

// parse
qiao.cli.cmd.parse(process.argv);