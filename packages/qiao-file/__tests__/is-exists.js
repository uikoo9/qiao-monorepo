'use strict';

var q = require('../index.js');

var test = function(){
	var fpath 	= 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
	var s		= q.isExists(fpath);
	
	console.log(s);
};

test();