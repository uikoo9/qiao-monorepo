'use strict';

// path
var path = require('path');

// electron installer dmg
var electronDMG = require('electron-installer-dmg');

// checker
var checker = require('./_check.js');

/**
 * pack dmg
 * @param {*} config 
 * @returns 
 */
module.exports = async function(config){
    // check
    checker.checkConfig(config);

    // vars
    var outPath         = config.outPath;
    var arch            = config.arch;
    var appEnv          = config.appEnv;
    var appName         = config.appName;
    var appVersion      = config.appVersion;
    var appIconPath     = config.appIconPath;
    var dmgIconSize     = config.dmgIconSize;
    var dmgBackground   = config.dmgBackground;

    // other vars
    var root            = process.cwd();
    var appPath         = path.resolve(root, `${outPath}/${appName}-darwin-${arch}/${appName}.app`);
    var dmgName         = `${appName}-${appEnv}-${appVersion}-${arch}`;
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
        iconSize    : dmgIconSize || 80,
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