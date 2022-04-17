'use strict';

var qiaoUtilFile = require('../qiao.util.file.js');

var test = function(){
	var fpath 	= 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
	var s		= qiaoUtilFile.isExists(fpath);
	
	console.log(s);
};

test();