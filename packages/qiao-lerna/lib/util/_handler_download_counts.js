'use strict';

// q
var q = require('qiao-npms');

// pkg
var pkg = require('./_pkg.js');

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
exports.handler = async function(folderName){
    // pkg
    var pkgInfo = pkg.getPkgInfo(folderName);
    if(typeof pkgInfo == 'string') return pkgInfo;

    // download counts
    try{
        var res = await q.downloadCountsLastMonth(pkgInfo.packageName);
        if(!res) return `${pkgInfo.packageName} : download counts err`;

        return `${pkgInfo.packageName} : ${res.downloads}`;
    }catch(e){
        return `${pkgInfo.packageName} : download counts err`;
    }
};