'use strict';

var qiaoPluginRegedit = require('../lib/qiao.plugin.regedit.js');

var test = function(){
	// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var obj = {
		key : key,
		name: 'test',
		data: 'haha'
	};
	
	qiaoPluginRegedit.addValue(obj, function(res){
		console.log(res);
	});
};

test();