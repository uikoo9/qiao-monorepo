'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for css dev
 *  style-loader,
 *  css-loader,
 *  sass-loader,
 */
exports.dev = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
};

/**
 * rule for css build
 *  MiniCssExtractPlugin,
 *  css-loader,
 *  sass-loader,
 */
exports.build = {
  test: /\.scss$/,
  use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
  ],
};