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
    if(!config || !config.appConfig) throw new Error('need config.appConfig params');

    // vars
    var appEnv          = config.appConfig.appEnv;
    var appName         = config.appConfig.appName;
    var appPath         = config.appConfig.appPath;
    var appVersion      = config.appConfig.appVersion;
    var appIconPath     = config.appConfig.appIconPath;
    var dmgIconSize     = config.appConfig.dmgIconSize;
    var dmgBackground   = config.appConfig.dmgBackground;
    var dmgContents     = config.appConfig.dmgContents;
    var dmgOutPath      = config.appConfig.dmgOutPath;

    // check vars
    if(!appEnv)         throw new Error('need config.appConfig.appEnv params');
    if(!appName)        throw new Error('need config.appConfig.appName params');
    if(!appPath)        throw new Error('need config.appConfig.appPath params');
    if(!appVersion)     throw new Error('need config.appConfig.appVersion params');
    if(!appIconPath)    throw new Error('need config.appConfig.appIconPath params');
    if(!dmgIconSize)    throw new Error('need config.appConfig.dmgIconSize params');
    if(!dmgBackground)  throw new Error('need config.appConfig.dmgBackground params');
    if(!dmgContents)    throw new Error('need config.appConfig.dmgContents params');
    if(!dmgOutPath)     throw new Error('need config.appConfig.dmgOutPath params');

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