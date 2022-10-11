// path
const path = require('path');

// template path
const templatePath = path.resolve(__dirname, './template.html');

/**
 * qiao.webpack.js
 */
module.exports = {
    entry: {
        'open-db': './__tests__/open-db.js',
        'list-db': './__tests__/list-db.js',
        'del-db': './__tests__/del-db.js',
        'create-table': './__tests__/create-table.js',
        'del-table': './__tests__/del-table.js',
        'get': './__tests__/get.js',
        'save': './__tests__/save.js',
        'del': './__tests__/del.js',
        'clear': './__tests__/clear.js',
        'index-get-all': './__tests__/index-get-all.js'
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
            title: 'open-db',
            chunks: ['open-db'],
            filename: 'open-db.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'list-db',
            chunks: ['list-db'],
            filename: 'list-db.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'del-db',
            chunks: ['del-db'],
            filename: 'del-db.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'create-table',
            chunks: ['create-table'],
            filename: 'create-table.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'del-table',
            chunks: ['del-table'],
            filename: 'del-table.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'get',
            chunks: ['get'],
            filename: 'get.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'save',
            chunks: ['save'],
            filename: 'save.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'del',
            chunks: ['del'],
            filename: 'del.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'clear',
            chunks: ['clear'],
            filename: 'clear.html',
            template: templatePath
        },
        {
            type: 'html',
            inject: 'body',
            title: 'index-get-all',
            chunks: ['index-get-all'],
            filename: 'index-get-all.html',
            template: templatePath
        },
    ]
};