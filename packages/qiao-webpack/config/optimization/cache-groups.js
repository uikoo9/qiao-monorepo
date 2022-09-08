'use strict';

/**
 * default cache groups
 */
module.exports = {
    // react
    react: {
        test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
        name: 'react',
        chunks: 'all',
        priority: 0,
        reuseExistingChunk: true,
    },

    // axios
    axios: {
        test: /[\\/]node_modules[\\/]axios[\\/]/,
        name: 'axios',
        chunks: 'all',
        priority: -1,
        reuseExistingChunk: true,
    },

    // qiao
    'qiao-ui': {
        test: /[\\/]node_modules[\\/]qiao.cookie.js|qiao-json|qiao-ajax|qiao-service|qiao-ui[\\/]/,
        name: 'qiao-ui',
        chunks: 'all',
        priority: -21,
        reuseExistingChunk: true,
    },

    // ui
    antd: {
        test: /[\\/]node_modules[\\/]antd[\\/]/,
        name: 'antd',
        chunks: 'all',
        priority: -31,
        reuseExistingChunk: true,
    },
    bulma: {
        test: /[\\/]node_modules[\\/]bulma[\\/]/,
        name: 'bulma',
        chunks: 'all',
        priority: -32,
        reuseExistingChunk: true,
    },
    bootstrap: {
        test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
        name: 'bootstrap',
        chunks: 'all',
        priority: -33,
        reuseExistingChunk: true,
    },

    // editor
    quill: {
        test: /[\\/]node_modules[\\/]quill[\\/]/,
        name: 'quill',
        chunks: 'all',
        priority: -41,
        reuseExistingChunk: true,
    },
    editor: {
        test: /[\\/]node_modules[\\/]@wangeditor[\\/]/,
        name: 'editor',
        chunks: 'all',
        priority: -42,
        reuseExistingChunk: true,
    },
    prismjs: {
        test: /[\\/]node_modules[\\/]prismjs[\\/]/,
        name: 'prismjs',
        chunks: 'all',
        priority: -43,
        reuseExistingChunk: true,
    },

    // default
    default: {
        priority: -51,
        reuseExistingChunk: true,
    },
};