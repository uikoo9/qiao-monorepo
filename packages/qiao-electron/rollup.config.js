'use strict';

/**
 * rollup.config.js
 */
export default {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs',
        interop: false
    },
    external: [
        'path',
        'electron', 
        '@sentry/electron',
        'qiao-config',
        'qiao-file',
        'qiao-json',
        'qiao-log',
        'qiao-sqlite',
    ],
};