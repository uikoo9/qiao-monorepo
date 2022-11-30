'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for less
 * @param {*} isDev
 */
module.exports = function (isDev) {
  // use
  var use = [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ];

  // return
  return {
    test: /\.less$/,
    use: use,
  };
};
