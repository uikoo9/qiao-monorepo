'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.qec = require('../index.js');

// cmd for packmac
qiao.cli.cmd
	.command('init')
	.description('init electron application')
	.action(init);

// init project
async function init(){
	try{
		qiao.qec.init();

		console.log('init electron application success!');
		console.log();
	}catch(e){
		console.log('init electron application fail!');
		console.log();
		
		console.log(e);
	}
}