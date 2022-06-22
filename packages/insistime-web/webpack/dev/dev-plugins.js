'use strict';

// path
var path = require('path');

// template path
var pcPath = path.resolve(__dirname, '../template/pc.html');
var mobilePath = path.resolve(__dirname, '../template/mobile.html');

/**
 * qiao.webpack.js
 */
module.exports = [
    // css
    {
        type: 'css',
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[id].[contenthash:8].css',
        ignoreOrder: true,
    },

    // index
    {
        type: 'html',
        inject: 'body',
        title: 'index-pc',
        chunks: ['index-pc'],
        filename: 'index-pc.html',
        template: pcPath,
    },
    {
        type: 'html',
        inject: 'body',
        title: 'index-mobile',
        chunks: ['index-mobile'],
        filename: 'index-mobile.html',
        template: mobilePath,
    },

    // login
    {
        type: 'html',
        inject: 'body',
        title: 'login',
        chunks: ['login'],
        filename: 'login.html',
        template: pcPath,
    },

    // manage
    {
        type: 'html',
        inject: 'body',
        title: 'manage',
        chunks: ['manage'],
        filename: 'manage.html',
        template: pcPath,
    },
];
