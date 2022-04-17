'use strict';

var qiaoUtilFile = require('../qiao.util.file.js');

var test = function(){
	var foldersAndFiles = qiaoUtilFile.lsdir('/Users/vincent/Data/projects/qiao/qiao.util.file/');
	console.log(foldersAndFiles);
};

test();