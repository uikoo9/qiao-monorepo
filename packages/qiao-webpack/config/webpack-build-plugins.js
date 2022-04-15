'use strict';

// html webpack plugin
var HtmlWebpackPlugin = require('./plugin-for-html.js');

// mini css extract plugin
var MiniCssExtractPlugin = require('./plugin-for-minicss.js');

// webpack bundle analyzer
var BundleAnalyzerPlugin = require('./plugin-for-analyzer.js');

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
        if (plugin.type == 'css') {
            delete plugin.type;
            res.push(MiniCssExtractPlugin(plugin));
        }
        if (plugin.type == 'html') {
            delete plugin.type;
            res.push(HtmlWebpackPlugin(plugin));
        }
    }

    // return
    return res;
};