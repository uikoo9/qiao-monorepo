'use strict';

var q = require('../index.js');

var test = function(){
	var foldersAndFiles = q.lsdir('/Users/vincent/Data/projects/qiao/qiao.util.file/');
	console.log(foldersAndFiles);
};

test();