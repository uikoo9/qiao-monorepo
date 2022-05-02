// path
var path = require('path');

// electron installer dmg
var electronDMG = require('electron-installer-dmg');

/**
 * pack dmg
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check config
    if(!config) throw new Error('need config params');

    // vars
    var appEnv          = config.appEnv;
    var appName         = config.appName;
    var appPath         = config.appPath;
    var appVersion      = config.appVersion;
    var appIconPath     = config.appIconPath;
    var dmgIconSize     = config.dmgIconSize;
    var dmgBackground   = config.dmgBackground;
    var dmgContents     = config.dmgContents;
    var dmgOutPath      = config.dmgOutPath;

    // check vars
    if(!appEnv)         throw new Error('need config.appEnv params');
    if(!appName)        throw new Error('need config.appName params');
    if(!appPath)        throw new Error('need config.appPath params');
    if(!appVersion)     throw new Error('need config.appVersion params');
    if(!appIconPath)    throw new Error('need config.appIconPath params');
    if(!dmgIconSize)    throw new Error('need config.dmgIconSize params');
    if(!dmgBackground)  throw new Error('need config.dmgBackground params');
    if(!dmgContents)    throw new Error('need config.dmgContents params');
    if(!dmgOutPath)     throw new Error('need config.dmgOutPath params');

    // options
    var options = {
        name        : `${appName}-${appEnv}-${appVersion}`,
        icon        : appIconPath,

        overwrite   : true,
        debug       : false,

        appPath     : appPath,
        iconSize    : dmgIconSize,
        background  : dmgBackground,
        contents    : dmgContents,

        out         : dmgOutPath,
    };

    // dmg
    return new Promise(function(resolve, reject){
        electronDMG(options, function(err){
            return err ? reject(err) : resolve();
        });
    });
};