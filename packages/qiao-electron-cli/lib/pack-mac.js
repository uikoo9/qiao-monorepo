// electron pakcager
var packager = require('electron-packager');

/**
 * pack mac
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check config
    if(!config || !config.appConfig) throw new Error('need config.appConfig params');

    // vars
    var distPath        = config.appConfig.distPath;
    var outPath         = config.appConfig.outPath;
    var arch            = config.appConfig.arch;
    var asar            = config.appConfig.asar;
    var appName         = config.appConfig.appName;
    var appIconPath     = config.appConfig.appIconPath;
    var appVersion      = config.appConfig.appVersion;
    var appCopyright    = config.appConfig.appCopyright;

    // check vars
    if(!distPath)       throw new Error('need config.appConfig.distPath params');
    if(!outPath)        throw new Error('need config.appConfig.outPath params');
    if(!appName)        throw new Error('need config.appConfig.appName params');
    if(!arch)           throw new Error('need config.appConfig.arch params');
    if(!appIconPath)    throw new Error('need config.appConfig.appIconPath params');
    if(!appVersion)     throw new Error('need config.appConfig.appVersion params');
    if(!appCopyright)   throw new Error('need config.appConfig.appCopyright params');

    // options
    var options = {
        overwrite   : true,
        dir         : distPath,
        out         : outPath,
        arch        : arch,
        asar        : !!asar,
        name        : appName,
        icon        : appIconPath,
        appVersion  : appVersion,
        appCopyright: appCopyright,
    };

    // packager
    return await packager(options);
};