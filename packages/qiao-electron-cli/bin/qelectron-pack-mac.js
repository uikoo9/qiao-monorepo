'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao.plugin.cli');
qiao.qec = require('../lib/qiao-electron-cli.js');

// cmd for packmac
qiao.cli.cmd
	.command('packmac <configPath>')
	.alias('pm')
	.description('pack electron application for mac')
	.action(packMac);

// pack mac
async function packMac(configPath){
	try{
        var cwd = process.cwd();
        if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
		
		await qiao.qec.packMac(require(configPath));

		console.log('pack electron application for mac success!');
		console.log();
	}catch(e){
		console.log('pack electron application for mac fail!');
		console.log();
		
		console.log(e);
	}
}