/**
 * rollup.config.js
 */
module.exports = {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs',
        interop: false
    },
    external: [
        'axios'
    ],
};