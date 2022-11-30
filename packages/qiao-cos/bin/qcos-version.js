// qiao
const cli = require('qiao-cli');

// cmd for common
cli.cmd
  .version(require('../package.json').version, '-v, --version')
  .description('qiao-cos, tencent cos upload tool on nodejs')
  .usage('<command> [options]');
