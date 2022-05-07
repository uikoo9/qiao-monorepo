'use strict';

// css mini
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// terser
var TerserPlugin = require('terser-webpack-plugin');

// optimization
module.exports = {
  runtimeChunk: 'single',
  minimizer: [
    new CssMinimizerPlugin(),
    new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
            format: {
              comments: false,
            },
        },
    }),
  ],
  splitChunks: {
    cacheGroups: {
      react: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: 'react',
        chunks: 'all',
        priority: 0,
        reuseExistingChunk: true,
      },
      antd: {
        test: /[\\/]node_modules[\\/]antd[\\/]/,
        name: 'antd',
        chunks: 'all',
        priority: -1,
        reuseExistingChunk: true,
      },
      default: {
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};