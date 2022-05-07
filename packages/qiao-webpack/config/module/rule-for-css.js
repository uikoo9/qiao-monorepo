'use strict';

// mini css extract
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * rule for css dev
 *  style-loader,
 *  css-loader,
 */
exports.dev = {
  test: /\.css$/,
  include: [
      /node_modules[\\/]antd/,
      /node_modules[\\/]normalize\.css/,
      /iconfont\.css$/,
  ],
  use: [
      {
          loader: require.resolve('style-loader'),
      },
      {
          loader: require.resolve('css-loader'),
          options: {
              modules: false,
          },
      },
  ],
};

/**
 * rule for css build
 *  MiniCssExtractPlugin
 *  css-loader,
 */
exports.build = {
  test: /\.css$/,
  include: [
      /node_modules[\\/]antd/,
      /node_modules[\\/]normalize\.css/,
      /iconfont\.css$/,
  ],
  use: [
      MiniCssExtractPlugin.loader,
      {
          loader: require.resolve('css-loader'),
          options: {
              modules: false,
          },
      },
  ],
};