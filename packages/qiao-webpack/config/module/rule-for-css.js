'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for css
 * @param {*} isDev 
 * @param {*} cssIncludes 
 * [
 *  /node_modules[\\/]antd/
 * ]
 */
module.exports = function(isDev, cssIncludes){
    // use
    var use = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                modules: false,
            },
        },
    ];

    // return
    return {
        test    : /\.css$/,
        include : cssIncludes || [],
        use     : use,
    };
};