'use strict';

// fs
var fs = require('./fs.js');

// ncu
var ncu = require('npm-check-updates');

/**
 * ncu sub folders
 * @param {string} dir 
 */
exports.ncuSubFolders = async function(dir){
    var packageFile = fs.path.resolve(dir, 'package.json');
    if(!fs.isExists(packageFile)) return 'package.json not exists';
    
    var upgraded = await ncu.run({
        packageFile: packageFile,
        upgrade: false
    });

    var json = getJson(upgraded);
    return `${dir} : ${json}`;
};

// get json
function getJson(s){
	try{
		return JSON.stringify(s);
	}catch(e){
		return s;
	}
}