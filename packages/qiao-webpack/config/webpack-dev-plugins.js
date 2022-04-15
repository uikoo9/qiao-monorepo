'use strict';

// html webpack plugin
var HtmlWebpackPlugin = require('./plugin-for-html.js');

/**
 * webpack dev plugins
 * @param {*} plugins 
 * @returns 
 */
module.exports = function(plugins){
    var res = [];
    if (!plugins || !plugins.length) return res;
    
    for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];
        if (plugin.type == 'html') {
            delete plugin.type;
            res.push(HtmlWebpackPlugin(plugin));
        }
    }

    return res;
};