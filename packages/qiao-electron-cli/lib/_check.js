'use strict';

/**
 * check config
 * @param {*} config 
 */
exports.checkConfig = function(config){
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

    if(!dmgBackground)  throw new Error('need config.dmgBackground params');
};

/**
 * check cos config
 * @param {*} config 
 */
 exports.checkCosConfig = function(config){
    // check config
    if(!config || !config.cosConfig) throw new Error('need config.cosConfig params');

    // cos config
    var cosConfig = config.cosConfig;
    if(!cosConfig.SecretId)    throw new Error('need config.cosConfig.SecretId params');
    if(!cosConfig.SecretKey)   throw new Error('need config.cosConfig.SecretKey params');
    if(!cosConfig.Region)      throw new Error('need config.cosConfig.Region params');
    if(!cosConfig.Bucket)      throw new Error('need config.cosConfig.Bucket params');
    if(!cosConfig.destPath)    throw new Error('need config.cosConfig.destPath params');
};