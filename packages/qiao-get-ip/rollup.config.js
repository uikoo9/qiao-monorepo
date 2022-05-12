import { nodeResolve } from '@rollup/plugin-node-resolve';

/**
 * rollup.config.js
 */
export default {
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