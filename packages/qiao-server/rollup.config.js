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
        'express',
        'body-parser',
        'cookie-parser',
        'qiao-encode',
        'qiao-file',
        'qiao-json',
        'qiao-server-user',
    ],
};