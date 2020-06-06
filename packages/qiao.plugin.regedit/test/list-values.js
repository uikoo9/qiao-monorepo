'use strict';

var qiaoPluginRegedit = require('../lib/qiao.plugin.regedit.js');

var test = function(){
	// var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
	
	qiaoPluginRegedit.listValues(key, function(err, res){
		console.log(err, res);
	});
};

test();