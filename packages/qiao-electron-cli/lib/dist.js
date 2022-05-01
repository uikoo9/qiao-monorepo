'use strict';

// path
var path = require('path');

// q
var q = require('qiao-file');

/**
 * dist
 * @param {*} srcPath 
 * @param {*} distPath 
 * @param {*} srcFiles 
 * @returns 
 */
module.exports = function(config){
    // check
    if(!config || !config.distConfig) throw new Error('need config.distConfig params');

    // vars
    var srcPath = config.distConfig.srcPath;
    var distPath= config.distConfig.distPath;
    var srcFiles= config.distConfig.srcFiles;

    // check
    if(!srcPath) throw new Error('need config.distConfig.srcPath params');
    if(!distPath) throw new Error('need config.distConfig.distPath params');
    if(!srcFiles || !srcFiles.length) throw new Error('need config.distConfig.srcFiles params');

    // vars
    var root    = process.cwd();
    var src     = path.resolve(root, srcPath);
    var dist    = path.resolve(root, distPath);

    // mkdir
    mkDir(dist);
    
    // cp file or folder
    for(var i=0; i<srcFiles.length; i++) cpFileOrFolder(src, dist, srcFiles[i]);
};

// make electron-dist dir
function mkDir(dir){
    var res = 'success';
    try{
        // rm
        if(q.isExists(dir)) q.rm(`${dir}/`);

        // mkdir
        q.mkdir(`${dir}/`);
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`make dir: ${dir} ${res}`);
}

// cp file or folder
function cpFileOrFolder(src, dest, file){
    var srcFilePath = path.resolve(src, file);
    var destFilePath = path.resolve(dest, file);

    var res = 'success';
    try {
        q.cp(srcFilePath, destFilePath);
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`cp: ${srcFilePath} ${res}`);
}