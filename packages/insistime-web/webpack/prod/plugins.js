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
        filename: '../../views/index/index-pc.html',
        publicPath:
            'https://static.insistime.com/00_insistime/static/',
        template: pcPath,
    },
    {
        type: 'html',
        inject: 'body',
        title: 'index-mobile',
        chunks: ['index-mobile'],
        filename: '../../views/index/index-mobile.html',
        publicPath:
            'https://static.insistime.com/00_insistime/static/',
        template: mobilePath,
    },

    // login
    {
        type: 'html',
        inject: 'body',
        title: 'login',
        chunks: ['login'],
        filename: '../../views/login/login.html',
        publicPath: 'https://static.insistime.com/00_insistime/static/',
        template: pcPath,
    },

    // manage
    {
        type: 'html',
        inject: 'body',
        title: 'manage',
        chunks: ['manage'],
        filename: '../../views/manage/manage.html',
        publicPath: 'https://static.insistime.com/00_insistime/static/',
        template: pcPath,
    },
];
