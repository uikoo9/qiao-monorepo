'use strict';

// webpack dev module
var webpack_dev_module = require('./module/module-dev.js');

/**
 * webpack dev options
 */
module.exports = {
    mode    : 'development',
    devtool : 'inline-source-map',
    module  : webpack_dev_module,
};