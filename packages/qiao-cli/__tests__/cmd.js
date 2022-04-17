'use strict';

var q = require('../index.js');

// cmd
q.cmd
	.version('0.0.1', '-v, --version')
	.usage('<command> [options]')
	.description('qiao-cli is a nodejs cli tool')
	.command('test <dir>')
	.option('-s --ss', 'ss')
	.action(function(dir, options){
		console.log(dir, options);
	});

// parse
q.cmd.parse(process.argv);