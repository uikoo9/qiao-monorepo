'use strict';

var path        	= require('path');
var qiaoPluginCoder = require('../lib/qiao.plugin.coder');

var test = function(){
	var templateFile = path.resolve(__dirname, './test.art');
	var templateData = path.resolve(__dirname, './test.json');
	console.log(templateFile, templateData);
	
	qiaoPluginCoder.genFile(templateFile, templateData, 'd:/test.html');
};

test();