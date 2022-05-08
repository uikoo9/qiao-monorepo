'use strict';

// webpack module
var webpack_module = require('./module/module.js');

// webpack plugins
var webpack_plugins = require('./plugins/plugins.js');

// optimization
var optimization = require('./optimization.js');

/**
 * webpack options
 * @param {*} isDev 
 * @param {*} qiaoWebpack 
 * @param {*} isAnalyzer 
 * @returns 
 */
module.exports = function(isDev, qiaoWebpack, isAnalyzer){
    return {
        mode            : isDev ? 'development' : 'production',
        devtool         : isDev ? 'inline-source-map' : 'source-map',
        module          : webpack_module(isDev, qiaoWebpack.cssIncludes),
        plugins         : webpack_plugins(isDev, qiaoWebpack.plugins, isAnalyzer),
        optimization    : optimization,
    };
};