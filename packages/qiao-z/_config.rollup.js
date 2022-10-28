/**
 * rollup.config.js
 */
module.exports = {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs',
    },
    external: [
        'path',
        'http',
        'parseurl',
        'raw-body',
        'art-template',
        'qiao-file',
        'qs'
    ],
};