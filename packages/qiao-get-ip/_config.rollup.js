const { nodeResolve } = require('@rollup/plugin-node-resolve');

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
        'qiao-ajax'
    ],
    plugins: [
        nodeResolve({
            resolveOnly: ['ip-regex']
        })
    ]
};