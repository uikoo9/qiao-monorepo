'use strict';

// pkg
var pkg = require('./_pkg.js');

// is dev
exports.isDev;

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
exports.handler = function(folderName){
    // pkg
    var pkgInfo = pkg.getPkgInfo(folderName);
    if(typeof pkgInfo == 'string') return pkgInfo;

    // package json
    var packageJson = pkgInfo.packageJson;
    var res = exports.isDev ? packageJson.devDependencies : packageJson.dependencies;
    
    var json = getJson(res || {});
    return `${pkgInfo.packageName} : ${json}`;
};

// get json
function getJson(s){
	try{
		return JSON.stringify(s);
	}catch(e){
		return s;
	}
}