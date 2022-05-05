'use strict';

// html webpack plugin
var HtmlWebpackPlugin = require('./plugin-for-html.js');

/**
 * webpack plugins common
 * @param {*} plugins 
 * @returns 
 */
module.exports = function(res, plugin){
    if(!res || !plugin) return;
    
    if (plugin.type == 'html') {
        delete plugin.type;
        res.push(HtmlWebpackPlugin(plugin));
    }
    if (plugin.type == 'editor') {
        delete plugin.type;
        res.push(plugin.item);
    }
};