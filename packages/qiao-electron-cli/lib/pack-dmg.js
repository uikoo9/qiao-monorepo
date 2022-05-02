'use strict';

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
    var outPath         = config.outPath;
    var arch            = config.arch;
    var appEnv          = config.appEnv;
    var appName         = config.appName;
    var appVersion      = config.appVersion;
    var appIconPath     = config.appIconPath;
    var dmgIconSize     = config.dmgIconSize;
    var dmgBackground   = config.dmgBackground;

    // check vars
    if(!outPath)        throw new Error('need config.outPath params');
    if(!arch)           throw new Error('need config.arch params');
    if(!appEnv)         throw new Error('need config.appEnv params');
    if(!appName)        throw new Error('need config.appName params');
    if(!appVersion)     throw new Error('need config.appVersion params');
    if(!appIconPath)    throw new Error('need config.appIconPath params');
    if(!dmgIconSize)    throw new Error('need config.dmgIconSize params');
    if(!dmgBackground)  throw new Error('need config.dmgBackground params');

    // other vars
    var root            = process.cwd();
    var appPath         = path.resolve(root, `${outPath}/${appName}-darwin-${arch}/${appName}.app`);
    var dmgName         = `${appName}-${appEnv}-${appVersion}`;
    var dmgOutPath      = path.resolve(root, `${outPath}/dmg`);
    var dmgContents     = () => {
        return [ 
            { x: 520, y: 200, type: 'link', path: '/Applications' },
            { x: 120, y: 200, type: 'file', path: appPath } 
        ];
    };

    // options
    var options = {
        name        : dmgName,
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