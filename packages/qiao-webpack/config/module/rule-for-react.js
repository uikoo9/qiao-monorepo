'use strict';

/**
 * rule for react
 *  npm i -D babel-loader @babel/core @babel/preset-react babel-plugin-import
 */
module.exports = {
    test    : /\.(js|jsx)$/,
    loader  : 'babel-loader',
    // exclude : /node_modules/,
    options : { 
        presets: [
            '@babel/preset-react'
        ],
        plugins: [
            [
                'import',
                {
                    libraryName       : 'antd',
                    libraryDirectory  : 'es',
                    style             : 'css'
                }
            ]
        ]
    }
};