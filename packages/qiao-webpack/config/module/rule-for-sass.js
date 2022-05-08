'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for scss
 * @param {*} isDev 
 */
 module.exports = function(isDev){
  // use
  var use = [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
  ];

  // return
  return {
      test: /\.scss$/,
      use : use,
  };
};