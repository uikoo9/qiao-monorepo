'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for less
 * @param {*} isDev 
 */
 module.exports = function(isDev){
  // use
  var use = [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'less-loader',
  ];

  // return
  return {
      test: /\.less$/,
      use : use,
  };
};