'use strict';

// fs
var fs = require('./_fs.js');

// ncu
var ncu = require('npm-check-updates');

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
module.exports = async function (folderName) {
    return await ncuSubFolders(folderName);
};

// ncu sub folders
async function ncuSubFolders(dir) {
    // package file
    var packageFile = fs.path.resolve(dir, 'package.json');
    if (!fs.isExists(packageFile)) return `${dir} : package.json not exists`;

    // package json
    var packageJson = getPackage(packageFile);
    if (packageJson.private) return `${dir} : private package`;

    var upgraded = await ncu.run({
        packageFile: packageFile,
        upgrade: false
    });

    var json = getJson(upgraded);
    return `${dir} : ${json}`;
}

// get package
function getPackage(p) {
    try {
        return require(p);
    } catch (e) {
        return;
    }
}

// get json
function getJson(s) {
    try {
        return JSON.stringify(s);
    } catch (e) {
        return s;
    }
}