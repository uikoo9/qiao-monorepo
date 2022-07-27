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
  bulma: {
    test: /[\\/]node_modules[\\/]bulma[\\/]/,
    name: 'bulma',
    chunks: 'all',
    priority: -3,
    reuseExistingChunk: true,
  },
  bootstrap: {
    test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
    name: 'bootstrap',
    chunks: 'all',
    priority: -4,
    reuseExistingChunk: true,
  },
  quill: {
    test: /[\\/]node_modules[\\/]quill[\\/]/,
    name: 'quill',
    chunks: 'all',
    priority: -5,
    reuseExistingChunk: true,
  },
  default: {
    priority: -20,
    reuseExistingChunk: true,
  },
};