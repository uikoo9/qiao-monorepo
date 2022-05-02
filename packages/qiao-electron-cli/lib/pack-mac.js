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
    var dir             = config.appConfig.distPath;
    var out             = config.appConfig.outPath;
    var name            = config.appConfig.appName;
    var arch            = config.appConfig.arch;
    var icon            = config.appConfig.appIconPath;
    var appVersion      = config.appConfig.appVersion;
    var appCopyright    = config.appConfig.appCopyright;

    // check vars
    if(!dir)            throw new Error('need config.appConfig.distPath params');
    if(!out)            throw new Error('need config.appConfig.outPath params');
    if(!name)           throw new Error('need config.appConfig.appName params');
    if(!arch)           throw new Error('need config.appConfig.arch params');
    if(!icon)           throw new Error('need config.appConfig.appIconPath params');
    if(!appVersion)     throw new Error('need config.appConfig.appVersion params');
    if(!appCopyright)   throw new Error('need config.appConfig.appCopyright params');

    // options
    var options = {
        overwrite   : true,
        dir         : dir,
        out         : out,
        name        : name,
        arch        : arch,
        icon        : icon,
        appVersion  : appVersion,
        appCopyright: appCopyright,
    };

    // packager
    return await packager(options);
};