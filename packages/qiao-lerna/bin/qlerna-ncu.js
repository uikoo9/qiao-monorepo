// qiao
const cli = require('qiao-cli');
const lerna = require('../index.js');

/**
 * ncu
 * @param {*} destPath
 */
const ncu = (destPath) => {
  lerna.multiNCU(destPath);
};

// cmd for ncu
cli.cmd.command('ncu <destPath>').description('multi ncu in path').action(ncu);
