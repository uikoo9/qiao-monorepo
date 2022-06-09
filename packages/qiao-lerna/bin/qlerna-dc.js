'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');
qiao.lerna  = require('../index.js');

// cmd for dc
qiao.cli.cmd
    .command('dc <destPath>')
    .description('download counts in path')
    .action(dc);

// dc
function dc(destPath){
    qiao.lerna.downloadCounts(destPath);
}