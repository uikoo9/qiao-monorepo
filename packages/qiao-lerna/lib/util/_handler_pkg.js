'use strict';

// fs
var fs = require('./_fs.js');

// is dev
exports.isDev;

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
exports.handler = function(folderName){
	return getDependencies(folderName);
};

// get dependencies
function getDependencies(dir){
    var packageFile = fs.path.resolve(dir, 'package.json');
    if(!fs.isExists(packageFile)) return 'package.json not exists';
    
    var pkg = require(packageFile);
    var res = exports.isDev ? pkg.devDependencies : pkg.dependencies;

    var json = getJson(res || {});
    var dirs = dir.split('/');
    var pkgName = dirs[dirs.length - 1];
    return `${pkgName} : ${json}`;
}

// get json
function getJson(s){
	try{
		return JSON.stringify(s);
	}catch(e){
		return s;
	}
}