'use strict';

// q
var q = require('qiao.ext.cos');

/**
 * upload dmg
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check
    if(!config)             throw new Error('need config params');
    if(!config.SecretId)    throw new Error('need config.SecretId params');
    if(!config.SecretKey)   throw new Error('need config.SecretKey params');
    if(!config.Region)      throw new Error('need config.Region params');
    if(!config.Bucket)      throw new Error('need config.Bucket params');
    if(!config.dmgPath)     throw new Error('need config.dmgPath params');
    if(!config.destPath)    throw new Error('need config.destPath params');

    // client
    var client      = q.client(config);
    var destPath	= config.destPath;
    var sourceFile 	= config.dmgPath;
    
    // rs
    var rs = await q.uploadFileSync(client, destPath, sourceFile);
    if(!rs || !rs.Location) return;

    // return
    return `https://${rs.Location}`;
};