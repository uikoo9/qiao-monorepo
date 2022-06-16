'use strict';

// path
var path = require('path');

// template path
var templatePath = path.resolve(__dirname, './template.html');

/**
 * qiao.webpack.js
 */
module.exports = {
    entry: {
        'cookie': './__tests__/cookie.js',
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'window',
        library: 'init'
    },
    plugins: [
        {
            type: 'html',
            inject: 'body',
            title: 'cookie',
            chunks: ['cookie'],
            filename: 'cookie.html',
            template: templatePath
        },
    ]
};