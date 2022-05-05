'use strict';

// mini css extract plugin
var MiniCssExtractPlugin = require('./plugin-for-minicss.js');

// webpack bundle analyzer
var BundleAnalyzerPlugin = require('./plugin-for-analyzer.js');

// common plugins
var commonPlugins = require('./plugins-common.js');

/**
 * webpack build plugins
 * @param {*} plugins 
 * @param {*} isAnalyzer 
 * @returns 
 */
module.exports = function(plugins, isAnalyzer){
    // default
    var res = [];
    if(isAnalyzer) res.push(BundleAnalyzerPlugin());

    // check
    if (!plugins || !plugins.length) return res;
    
    // add
    for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];

        // common
        commonPlugins(res, plugin);

        // other
        if (plugin.type == 'css') {
            delete plugin.type;
            res.push(MiniCssExtractPlugin(plugin));
        }
    }

    // return
    return res;
};