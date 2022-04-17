// electron pakcager
var packager = require('electron-packager');

/**
 * pack mac
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check
    if(!config)         throw new Error('need config params');
    if(!config.dir)     throw new Error('need config.dir params');
    if(!config.out)     throw new Error('need config.out params');
    if(!config.name)    throw new Error('need config.name params');
    if(!config.dir)     throw new Error('need config.dir params');

    // packager
    return await packager(config);
};