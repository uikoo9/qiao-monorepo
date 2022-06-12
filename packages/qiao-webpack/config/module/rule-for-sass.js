'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for scss
 * @param {*} isDev 
 */
module.exports = function (isDev) {
    // use
    var use = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
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
        'sass-loader',
    ];

    // return
    return {
        test: /\.scss$/,
        use: use,
    };
};