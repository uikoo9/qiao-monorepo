/**
 * rollup.config.js
 */
module.exports = {
    input: 'src/app.js',
    output: {
        file: 'index.js',
        format: 'cjs',
    },
    external: [
        'http',
        'parseurl',
        'cookie',
        'qs',
        'raw-body',
        'path',
        'art-template',
        'qiao-file',
        'qiao-ua',
    ],
};