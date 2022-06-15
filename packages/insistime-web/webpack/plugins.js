'use strict';

// path
var path = require('path');

// template path
var pcPath = path.resolve(__dirname, './template/pc.html');
var mobilePath = path.resolve(__dirname, './template/mobile.html');

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

    // black white
    {
        type: 'html',
        inject: 'body',
        title: 'black-white-index-pc',
        chunks: ['black-white-index-pc'],
        filename: '../views/black-white/index-pc.html',
        publicPath:
            'https://static.insistime.com/00_insistime/static/',
        template: pcPath,
    },
    {
        type: 'html',
        inject: 'body',
        title: 'black-white-index-mobile',
        chunks: ['black-white-index-mobile'],
        filename: '../views/black-white/index-mobile.html',
        publicPath:
            'https://static.insistime.com/00_insistime/static/',
        template: mobilePath,
    },
    {
        type: 'html',
        inject: 'body',
        title: 'black-white-login',
        chunks: ['black-white-login'],
        filename: '../views/black-white/login.html',
        publicPath:
            'https://static.insistime.com/00_insistime/static/',
        // filename: 'login.html',
        template: pcPath,
    },

    // manage
    {
        type: 'html',
        inject: 'body',
        title: 'manage',
        chunks: ['manage'],
        filename: '../views/manage.html',
        publicPath:
            'https://static.insistime.com/00_insistime/static/',
        // filename: 'manage.html',
        template: pcPath,
    },
];
