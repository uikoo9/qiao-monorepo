'use strict';

// q
var q = require('qiao-cos');

/**
 * upload dmg
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check config
    if(!config || !config.cosConfig) throw new Error('need config.cosConfig params');

    // cos config
    var cosConfig = config.cosConfig;
    if(!cosConfig.SecretId)    throw new Error('need config.cosConfig.SecretId params');
    if(!cosConfig.SecretKey)   throw new Error('need config.cosConfig.SecretKey params');
    if(!cosConfig.Region)      throw new Error('need config.cosConfig.Region params');
    if(!cosConfig.Bucket)      throw new Error('need config.cosConfig.Bucket params');
    if(!cosConfig.dmgPath)     throw new Error('need config.cosConfig.dmgPath params');
    if(!cosConfig.destPath)    throw new Error('need config.cosConfig.destPath params');

    // client
    var client      = q.client(cosConfig);
    var destPath	= cosConfig.destPath;
    var sourceFile 	= cosConfig.dmgPath;
    
    // rs
    var rs = await q.uploadFileSync(client, destPath, sourceFile);
    if(!rs || !rs.Location) return;

    // return
    return `https://${rs.Location}`;
};