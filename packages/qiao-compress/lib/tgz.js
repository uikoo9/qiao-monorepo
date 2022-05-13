'use strict';

// require
var _compress       = require('./_compress.js');
var _uncompress     = require('./_uncompress.js');

/**
 * tgz file
 *  sourceFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.tgzFile = function(sourceFile, destPath, onSuccess, onFail){
    _compress.compressFile('tgz', sourceFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * tgz file sync
 *  sourceFile
 *  destPath
 */
exports.tgzFileSync = function(sourceFile, destPath){
	return new Promise(function(resolve, reject){
        exports.tgzFile(sourceFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * tgz folder
 *  sourceFolder
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.tgzFolder = function(sourceFolder, destPath, onSuccess, onFail){
    _compress.compressFolder('tgz', sourceFolder, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * tgz folder sync
 *  sourceFolder
 *  destPath
 */
exports.tgzFolderSync = function(sourceFolder, destPath){
	return new Promise(function(resolve, reject){
        exports.tgzFolder(sourceFolder, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * untgz
 *  compressFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.untgz = function(compressFile, destPath, onSuccess, onFail){
    _uncompress.uncompress('tgz', compressFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * untgz sync
 *  compressFile
 *  destPath
 */
exports.untgzSync = function(compressFile, destPath){
	return new Promise(function(resolve, reject){
        exports.untgz(compressFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};