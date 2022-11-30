// qiao
const cli = require('qiao-cli');
const lerna = require('../index.js');

/**
 * pkg
 * @param {*} destPath
 * @param {*} isDev
 */
const pkg = (destPath, isDev) => {
  lerna.pkg(destPath, isDev);
};

// cmd for pkg
cli.cmd.command('pkg <destPath> [isDev]').description('get package.json in path').action(pkg);
