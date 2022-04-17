// electron installer dmg
var electronDMG = require('electron-installer-dmg');

/**
 * pack dmg
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check
    if(!config)         throw new Error('need config params');
    if(!config.out)     throw new Error('need config.out params');
    if(!config.name)    throw new Error('need config.name params');
    if(!config.appPath) throw new Error('need config.appPath params');

    // dmg
    return new Promise(function(resolve, reject){
        electronDMG(config, function(err){
            return err ? reject(err) : resolve();
        });
    });
};