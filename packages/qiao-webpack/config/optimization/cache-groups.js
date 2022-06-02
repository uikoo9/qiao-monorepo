'use strict';

/**
 * default cache groups
 */
module.exports = {
  react: {
    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    name: 'react',
    chunks: 'all',
    priority: 0,
    reuseExistingChunk: true,
  },
  axios: {
    test: /[\\/]node_modules[\\/]axios[\\/]/,
    name: 'axios',
    chunks: 'all',
    priority: -1,
    reuseExistingChunk: true,
  },
  antd: {
    test: /[\\/]node_modules[\\/]antd[\\/]/,
    name: 'antd',
    chunks: 'all',
    priority: -2,
    reuseExistingChunk: true,
  },
  default: {
    priority: -20,
    reuseExistingChunk: true,
  },
};