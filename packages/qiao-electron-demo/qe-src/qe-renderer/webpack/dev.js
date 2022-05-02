'use strict';

// path
var path = require('path');

// dist path
var distPath = path.resolve(__dirname, '../../qe-main/renderer');

/**
 * dev server
 */
module.exports = {
    port: 5299,
    static: distPath,
};