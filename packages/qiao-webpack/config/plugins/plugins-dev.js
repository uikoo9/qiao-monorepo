'use strict';

// common plugins
var commonPlugins = require('./plugins-common.js');

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

        // common
        commonPlugins(res, plugin);
    }

    return res;
};