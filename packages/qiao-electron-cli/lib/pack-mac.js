// electron pakcager
var packager = require('electron-packager');

/**
 * pack mac
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check
    if(!config)                         throw new Error('need config params');
    if(!config.appConfig)               throw new Error('need config.appConfig params');
    if(!config.appConfig.appName)       throw new Error('need config.appConfig.appName params');
    if(!config.distConfig)              throw new Error('need config.distConfig params');
    if(!config.distConfig.distPath)     throw new Error('need config.distConfig.distPath params');
    if(!config.packmacConfig)           throw new Error('need config.packmacConfig params');
    if(!config.packmacConfig.out)       throw new Error('need config.packmacConfig.out params');

    // options
    var options     = config.packmacConfig;
    options.dir     = config.distConfig.distPath;
    options.name    = config.appConfig.appName;
    if(config.appConfig.appVersion)     options.appVersion  = config.appConfig.appVersion;
    if(config.appConfig.appIconPath)    options.icon        = config.appConfig.appIconPath;
    if(config.appConfig.appCopyright)   options.appCopyright= config.appConfig.appCopyright;

    // packager
    return await packager(options);
};