'use strict';

var q = require('../index.js');

var test = function(){
	var foldersAndFiles = q.lsdir('./');
	console.log(foldersAndFiles);
};

test();