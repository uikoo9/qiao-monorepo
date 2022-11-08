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
        'fs',
        'path',
        'npm-check-updates',
        'qiao-console',
        'qiao-file',
        'qiao-npms',
        'qiao-parallel',
    ],
};