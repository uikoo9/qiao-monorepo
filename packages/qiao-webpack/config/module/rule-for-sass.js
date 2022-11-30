'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

// postcsss config
var defaultPostcssConfig = require('./postcss.js');

/**
 * rule for scss
 * @param {*} isDev
 * @param {*} postCssConfig
 */
module.exports = function (isDev, postCssConfig) {
  // use
  var use = [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: Object.assign(defaultPostcssConfig, postCssConfig || {}),
      },
    },
    'sass-loader',
  ];

  // return
  return {
    test: /\.(scss|sass)$/,
    use: use,
  };
};
