'use strict';

// qe-src package.json
const srcPkg = require('../qe-src/qe-main/package.json');

// config
let config = {
    appEnv          : 'online',
    appName         : srcPkg.name,
    appVersion      : srcPkg.version,
    appIconPath     : 'qe-pack/static/icon/icon.icns',
    appCopyright    : 'Copyright © 2022 QE 版权所有',

    arch            : 'arm64',
    asar            : true,

    srcPath         : 'qe-src/qe-main',
    srcFiles        : [ 
        'main',
        'node_modules',
        'renderer',
        'package.json'
    ],
    distPath        : 'qe-dist',
    outPath         : 'qe-out',

    dmgBackground   : 'qe-pack/static/bg.png',
};

// cos config
// const cosConfig     = require('./cos-config.json');
// config.cosConfig    = {
//     SecretId	: cosConfig.SecretId,
//     SecretKey	: cosConfig.SecretKey,
//     Region	    : cosConfig.Region,
//     Bucket	    : cosConfig.Bucket,
//     destPath    : 'xx/',
// };

// qe config
module.exports = config;