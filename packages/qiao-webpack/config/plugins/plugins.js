'use strict';

// html webpack plugin
var HtmlWebpackPlugin = require('./plugin-for-html.js');

// mini css extract plugin
var MiniCssExtractPlugin = require('./plugin-for-minicss.js');

// webpack bundle analyzer
var BundleAnalyzerPlugin = require('./plugin-for-analyzer.js');

/**
 * webpack plugins
 * @param {*} isDev 
 * @param {*} plugins 
 * @param {*} isAnalyzer 
 * @returns 
 */
module.exports = function(isDev, plugins, isAnalyzer){
    // check
    var res = [];
    if (!plugins || !plugins.length) return res;

    // isAnalyzer
    if(isAnalyzer) res.push(BundleAnalyzerPlugin());
    
    // plugins
    for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];

        // html
        if (plugin.type == 'html') {
            delete plugin.type;
            res.push(HtmlWebpackPlugin(plugin));
        }

        // css
        if (plugin.type == 'css') {
            delete plugin.type;
            res.push(MiniCssExtractPlugin(plugin));
        }

        // editor
        if (plugin.type == 'editor') {
            delete plugin.type;
            res.push(plugin.item);
        }
    }

    return res;
};