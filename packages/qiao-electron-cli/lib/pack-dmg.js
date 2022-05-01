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

    // check app config
    var appConfig = config.appConfig;
    if(!appConfig)              throw new Error('need config.appConfig params');
    if(!appConfig.appEnv)       throw new Error('need config.appConfig.appEnv params');
    if(!appConfig.appName)      throw new Error('need config.appConfig.appName params');
    if(!appConfig.appVersion)   throw new Error('need config.appConfig.appVersion params');
    if(!appConfig.appIconPath)  throw new Error('need config.appConfig.appIconPath params');

    // check packmac config
    var packmacConfig = config.packmacConfig;
    if(!packmacConfig) throw new Error('need config.packmacConfig params');

    // check packdmg config
    var packdmgConfig = config.packdmgConfig;
    if(!packdmgConfig) throw new Error('need config.packdmgConfig params');

    // options
    var options = config.packdmgConfig;
    options.name = `${appConfig.appName}-${appConfig.appEnv}-${appConfig.appVersion}`;
    options.icon = appConfig.appIconPath;

    // dmg
    return new Promise(function(resolve, reject){
        electronDMG(options, function(err){
            return err ? reject(err) : resolve();
        });
    });
};