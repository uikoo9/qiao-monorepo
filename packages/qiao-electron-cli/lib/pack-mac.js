// electron pakcager
var packager = require('electron-packager');

/**
 * pack mac
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check config
    if(!config) throw new Error('need config params');

    // vars
    var distPath        = config.distPath;
    var outPath         = config.outPath;
    var arch            = config.arch;
    var asar            = config.asar;
    var appName         = config.appName;
    var appIconPath     = config.appIconPath;
    var appVersion      = config.appVersion;
    var appCopyright    = config.appCopyright;

    // check vars
    if(!distPath)       throw new Error('need config.distPath params');
    if(!outPath)        throw new Error('need config.outPath params');
    if(!appName)        throw new Error('need config.appName params');
    if(!arch)           throw new Error('need config.arch params');
    if(!appIconPath)    throw new Error('need config.appIconPath params');
    if(!appVersion)     throw new Error('need config.appVersion params');
    if(!appCopyright)   throw new Error('need config.appCopyright params');

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