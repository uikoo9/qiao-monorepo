'use strict';

// fs
var fs = require('./_fs.js');

/**
 * getPkgInfo
 * @param {*} dir 
 * @returns 
 */
exports.getPkgInfo = function(dir){
    // package file
    var packageFile = fs.path.resolve(dir, 'package.json');
    if (!fs.isExists(packageFile)) return `${dir} : package.json not exists`;

    // package json
    var packageJson = getPackage(packageFile);
    if(!packageJson) return `${dir} : package.json err`;

    // package name
    var packageName = packageJson.name;
    if (packageJson.private) return `${packageName} : private package`;

    // return
    return {
        packageFile: packageFile,
        packageJson: packageJson,
        packageName: packageName
    };
}

// get package
function getPackage(p) {
    try {
        return require(p);
    } catch (e) {
        return;
    }
}