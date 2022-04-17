'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao.plugin.cli');
qiao.qec = require('../index.js');

// cmd for packmac
qiao.cli.cmd
	.command('dist <configPath>')
	.alias('d')
	.description('dist electron application')
	.action(dist);

// pack mac
async function dist(configPath){
	try{
        var cwd = process.cwd();
        if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
		
		qiao.qec.dist(require(configPath));

		console.log('dist electron application success!');
		console.log();
	}catch(e){
		console.log('dist electron application fail!');
		console.log();
		
		console.log(e);
	}
}