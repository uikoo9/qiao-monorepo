'use strict';

/**
 * check config
 * @param {*} config 
 */
module.exports = function(config){
    // check config
    if(!config) throw new Error('need config params');

    // vars
    var srcPath         = config.srcPath;
    var distPath        = config.distPath;
    var srcFiles        = config.srcFiles;
    var outPath         = config.outPath;

    var arch            = config.arch;

    var appEnv          = config.appEnv;
    var appName         = config.appName;
    var appIconPath     = config.appIconPath;
    var appVersion      = config.appVersion;
    var appCopyright    = config.appCopyright;

    var dmgIconSize     = config.dmgIconSize;
    var dmgBackground   = config.dmgBackground;

    // check vars
    if(!srcPath)        throw new Error('need config.srcPath params');
    if(!distPath)       throw new Error('need config.distPath params');
    if(!srcFiles || !srcFiles.length) throw new Error('need config.srcFiles params');
    if(!outPath)        throw new Error('need config.outPath params');
    
    if(!arch)           throw new Error('need config.arch params');

    if(!appEnv)         throw new Error('need config.appEnv params');
    if(!appName)        throw new Error('need config.appName params');
    if(!appIconPath)    throw new Error('need config.appIconPath params');
    if(!appVersion)     throw new Error('need config.appVersion params');
    if(!appCopyright)   throw new Error('need config.appCopyright params');

    if(!dmgIconSize)    throw new Error('need config.dmgIconSize params');
    if(!dmgBackground)  throw new Error('need config.dmgBackground params');
};