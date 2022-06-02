'use strict';

// path
var path = require('path');

/**
 * dev server
 */
module.exports = {
    port: 8080,
    static: path.resolve(__dirname, '../dist'),
};