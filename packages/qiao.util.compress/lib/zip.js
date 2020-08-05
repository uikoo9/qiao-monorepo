'use strict';

// require
var _uncompress     = require('./_uncompress.js');
var _compress       = require('./_compress.js');

/**
 * unzip
 *  compressFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.unzip = function(compressFile, destPath, onSuccess, onFail){
    _uncompress.uncompress('zip', compressFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * unzip sync
 *  compressFile
 *  destPath
 */
exports.unzipSync = function(compressFile, destPath){
	return new Promise(function(resolve, reject){
        exports.unzip(compressFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * zip file
 *  sourceFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.zipFile = function(sourceFile, destPath, onSuccess, onFail){
    _compress.compressFile('zip', sourceFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * zip file sync
 *  sourceFile
 *  destPath
 */
exports.zipFileSync = function(sourceFile, destPath){
	return new Promise(function(resolve, reject){
        exports.zipFile(sourceFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * zip folder
 *  sourceFolder
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.zipFolder = function(sourceFolder, destPath, onSuccess, onFail){
    _compress.compressFolder('zip', sourceFolder, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * zip folder sync
 *  sourceFolder
 *  destPath
 */
exports.zipFolderSync = function(sourceFolder, destPath){
	return new Promise(function(resolve, reject){
        exports.zipFolder(sourceFolder, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};