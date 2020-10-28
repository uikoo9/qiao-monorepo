#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.usage('<command> [options]');

require('./dishi-version');
require('./dishi-ucenter');
require('./dishi-config');
require('./dishi-group');
require('./dishi-item');
require('./dishi-operate');

// parse
qiao.cli.cmd.parse(process.argv);

// output help
if(!process.argv.slice(2).length){
	qiao.cli.cmd.outputHelp(function(txt){
		return qiao.cli.colors.green(txt);
	});
}