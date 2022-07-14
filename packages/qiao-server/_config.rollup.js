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
        'express',
        'body-parser',
        'cookie-parser',
        'art-template',
        'express-art-template',
        'qiao-encode',
        'qiao-file',
        'qiao-json',
        'qiao-server-user',
    ],
};