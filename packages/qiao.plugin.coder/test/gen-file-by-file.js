'use strict';

var qiaoPluginCoder = require('../lib/qiao.plugin.coder');

var test = function(){
	var templateFile 		= 'd:/test/test.art';
	var templateDataFile	= 'd:/test/test.json';
	var destFile			= 'd:/test/test.html';
	
	qiaoPluginCoder.genFileByFile(templateFile, templateDataFile, destFile);
};

test();