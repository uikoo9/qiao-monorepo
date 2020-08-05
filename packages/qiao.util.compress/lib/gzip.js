'use strict';

// require
var _compress       = require('./_compress.js');
var _uncompress     = require('./_uncompress.js');

/**
 * gzip file
 *  sourceFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.gzipFile = function(sourceFile, destPath, onSuccess, onFail){
    _compress.compressFile('gzip', sourceFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * gzip file sync
 *  sourceFile
 *  destPath
 */
exports.gzipFileSync = function(sourceFile, destPath){
	return new Promise(function(resolve, reject){
        exports.gzipFile(sourceFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

/**
 * ungzip
 *  compressFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.ungzip = function(compressFile, destPath, onSuccess, onFail){
    _uncompress.uncompress('gzip', compressFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * ungzip sync
 *  compressFile
 *  destPath
 */
exports.ungzipSync = function(compressFile, destPath){
	return new Promise(function(resolve, reject){
        exports.ungzip(compressFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};