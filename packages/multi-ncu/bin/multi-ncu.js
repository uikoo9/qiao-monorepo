#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');

// package
var pkg = require('../package.json'); 

// multi-ncu
var mncu = require('../lib/multi-ncu.js');

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
    mncu.multiNCU(_path);
}

// parse
qiao.cli.cmd.parse(process.argv);