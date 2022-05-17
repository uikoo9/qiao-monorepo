'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');
qiao.lerna  = require('../index.js');

// cmd for ncu
qiao.cli.cmd
    .command('ncu [destPath]')
    .description('multi ncu in path')
    .action(ncu);

// ncu
function ncu(destPath){
    var _path = destPath || '.';
    qiao.lerna.multiNCU(_path);
}