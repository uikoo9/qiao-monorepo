'use strict';

// path
var path = require('path');

// dist path
var distPath = path.resolve(__dirname, '../dist');

/**
 * dev server
 */
module.exports = {
    port: 5299,
    static: distPath,
};