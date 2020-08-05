'use strict';

// require
var _compress       = require('./_compress.js');
var _uncompress     = require('./_uncompress.js');

/**
 * tar file
 *  sourceFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.tarFile = function(sourceFile, destPath, onSuccess, onFail){
    _compress.compressFile('tar', sourceFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * tar file sync
 *  sourceFile
 *  destPath
 */
exports.tarFileSync = function(sourceFile, destPath){
	return new Promise(function(resolve, reject){
        exports.tarFile(sourceFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * tar folder
 *  sourceFolder
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.tarFolder = function(sourceFolder, destPath, onSuccess, onFail){
    _compress.compressFolder('tar', sourceFolder, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * tar folder sync
 *  sourceFolder
 *  destPath
 */
exports.tarFolderSync = function(sourceFolder, destPath){
	return new Promise(function(resolve, reject){
        exports.tarFolder(sourceFolder, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * untar
 *  compressFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.untar = function(compressFile, destPath, onSuccess, onFail){
    _uncompress.uncompress('tar', compressFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * untar sync
 *  compressFile
 *  destPath
 */
exports.untarSync = function(compressFile, destPath){
	return new Promise(function(resolve, reject){
        exports.untar(compressFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};