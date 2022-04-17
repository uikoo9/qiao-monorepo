'use strict';

// q
var q = require('qiao-file');

// write file
exports.writeFile = function(p, data){
    q.fs.writeFileSync(p, data);
};

// read file
exports.readFile = function(p){
	try{
		// not exists write file
		if(!q.isExists(p)) exports.writeFile(p, '');
		
		return q.fs.readFileSync(p, {encoding:'utf8'});
	}catch(e){
		return null;
	}
};