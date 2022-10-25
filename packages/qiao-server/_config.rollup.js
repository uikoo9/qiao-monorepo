/**
 * rollup.config.js
 */
module.exports = {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs'
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