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
    var packageFile = fs.path.resolve(dir, 'package.json');
    if (!fs.isExists(packageFile)) return 'package.json not exists';
    if (packageFile.private) return 'private package';

    var upgraded = await ncu.run({
        packageFile: packageFile,
        upgrade: false
    });

    var json = getJson(upgraded);
    return `${dir} : ${json}`;
}

// get json
function getJson(s) {
    try {
        return JSON.stringify(s);
    } catch (e) {
        return s;
    }
}