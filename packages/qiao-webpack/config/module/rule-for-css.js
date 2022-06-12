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
        /node_modules[\\/]antd/,
        /node_modules[\\/]iconfont\.css$/,
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
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    // config: path.resolve(__dirname, "custom.config.js"),
                    plugins: [
                        require('autoprefixer')
                    ],
                },
            },
        },
    ];

    // return
    return {
        test    : /\.css$/,
        // include : finalCssIncludes,
        use     : use,
    };
};