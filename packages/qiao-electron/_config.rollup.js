/**
 * rollup.config.js
 */
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  external: ['path', 'electron', 'qiao-config', 'qiao-file', 'qiao-log'],
};
