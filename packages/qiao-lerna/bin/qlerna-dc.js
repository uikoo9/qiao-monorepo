// qiao
const cli = require('qiao-cli');
const lerna = require('../index.js');

/**
 * dc
 */
const dc = (destPath) => {
  lerna.downloadCounts(destPath);
};

// cmd for dc
cli.cmd.command('dc <destPath>').description('download counts in path').action(dc);
