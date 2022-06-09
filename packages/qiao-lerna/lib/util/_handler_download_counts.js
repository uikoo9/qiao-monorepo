'use strict';

// q
var q = require('qiao-npms');

// fs
var fs = require('./_fs.js');

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
exports.handler = async function(folderName){
    return await downloadCounts(folderName);
};

// download counts
async function downloadCounts(dir){
    // package file
    var packageFile = fs.path.resolve(dir, 'package.json');
    if (!fs.isExists(packageFile)) return `${dir} : package.json not exists`;

    // package json
    var packageJson = getPackage(packageFile);
    if (packageJson.private) return `${dir} : private package`;

    // download counts
    try{
        var packageName = packageJson.name;
        var res = await q.downloadCountsLastMonth(packageName);
        if(!res) return `${dir} : download counts err`;

        return `${dir} : ${res.downloads}`;
    }catch(e){
        return `${dir} : download counts err`;
    }
}

// get package
function getPackage(p) {
    try {
        return require(p);
    } catch (e) {
        return;
    }
}