// electron pakcager
var packager = require('electron-packager');

// check
var checkConfig = require('./_check.js');

/**
 * pack mac
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check
    checkConfig(config);

    // options
    var options = {
        overwrite   : true,
        dir         : config.distPath,
        out         : config.outPath,
        arch        : config.arch,
        asar        : !!config.asar,
        name        : config.appName,
        icon        : config.appIconPath,
        appVersion  : config.appVersion,
        appCopyright: config.appCopyright,
    };

    // packager
    return await packager(options);
};