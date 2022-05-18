'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');
qiao.lerna  = require('../index.js');

// cmd for pkg
qiao.cli.cmd
    .command('pkg <destPath> [isDev]')
    .description('get package.json in path')
    .action(pkg);

// pkg
function pkg(destPath, isDev){
    qiao.lerna.pkg(destPath, isDev);
}