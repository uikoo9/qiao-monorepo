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
        'qiao-config',
        'qiao-file',
        'qiao-log',
    ],
};