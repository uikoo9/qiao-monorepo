'use strict';

var qiaoUtilTimer = require('../lib/qiao.util.timer.js');

var test = function(){
	var time = '*/1 * * * * *';
	var tick = function(){
		console.log(new Date());
	};
	
	console.log('-' + new Date());
	var job = qiaoUtilTimer.runAndInit(time, tick);
};

test();