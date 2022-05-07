'use strict';

// webpack build
var webpack_build_module = require('./module/module-build.js');

/**
 * webpack build options
 */
module.exports = {
    mode    : 'production',
    devtool : 'source-map',
    module  : webpack_build_module,
};