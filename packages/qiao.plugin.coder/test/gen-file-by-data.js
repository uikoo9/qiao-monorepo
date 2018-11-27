'use strict';

var qiaoPluginCoder = require('../lib/qiao.plugin.coder.js');

var test = function(){
	var templateFile 	= 'd:/test/test.art';
	var templateData	= {name : 'test'};
	var destFile		= 'd:/test/test.html';
	
	qiaoPluginCoder.genFileByData(templateFile, templateData, destFile);
};

test();