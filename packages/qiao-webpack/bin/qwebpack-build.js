'use strict';

// qiao
var qiao    = {};
qiao.cli    = require('qiao-cli');
qiao.webpack= require('../lib/qiao-webpack.js');

// cmd for analyzer
qiao.cli.cmd
    .command('analyzer <configPath> [target]')
    .description('analyzer project')
    .action(qiao.webpack.analyzer);

// cmd for build
qiao.cli.cmd
    .command('build <configPath> [target]')
    .description('build project')
    .action(qiao.webpack.build);

// cmd for dev
qiao.cli.cmd
    .command('dev <configPath> [target]')
    .description('build project for dev')
    .action(qiao.webpack.dev);