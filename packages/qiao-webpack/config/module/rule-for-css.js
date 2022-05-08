'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for css
 * @param {*} isDev 
 * @param {*} cssIncludes 
 */
module.exports = function(isDev, cssIncludes){
    // css includes
    var defaultCssIncludes = [
        /iconfont\.css$/,
        /node_modules[\\/]antd/,
        /node_modules[\\/]normalize\.css/,
    ];
    var finalCssIncludes = defaultCssIncludes.concat(cssIncludes || []);

    // use
    var use = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                modules: false,
            },
        }
    ];

    // return
    return {
        test    : /\.css$/,
        include : finalCssIncludes,
        use     : use,
    };
};