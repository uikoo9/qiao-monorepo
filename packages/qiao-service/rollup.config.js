'use strict';

// json
import json from '@rollup/plugin-json';

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
        'qiao-ajax',
        'qiao-json',
    ],
    plugins: [json()]
};