'use strict';

// ncu
var ncu = require('npm-check-updates');

// pkg
var pkg = require('./_pkg.js');

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
module.exports = async function (folderName) {
    // pkg
    var pkgInfo = pkg.getPkgInfo(folderName);
    if(typeof pkgInfo == 'string') return pkgInfo;
    
    // ncu
    var upgraded = await ncu.run({
        packageFile: pkgInfo.packageFile,
        upgrade: false
    });
    
    var json = getJson(upgraded);
    return `${pkgInfo.packageName} : ${json}`;
};

// get json
function getJson(s) {
    try {
        return JSON.stringify(s);
    } catch (e) {
        return s;
    }
}