// path
const path = require('path');

// qiao
const cli = require('qiao-cli');
const qcos = require('../index.js');

/**
 * upload folder
 * @param {*} configPath
 * @param {*} folderPath
 * @param {*} bucketPath
 * @param {*} options
 */
const uploadFolder = async (configPath, folderPath, bucketPath, options) => {
  try {
    const cwd = process.cwd();
    if (configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
    if (folderPath.startsWith('./')) folderPath = path.resolve(cwd, folderPath);

    const app = qcos(require(configPath));
    const rs = await app.uploadFolder(bucketPath, folderPath);

    console.log('upload folder to tencent cos success!');
    console.log();

    if (options.info) console.log(rs);
  } catch (e) {
    console.log('upload folder to tencent cos fail!');
    console.log();

    console.log(e);
  }
};

// cmd for folder
cli.cmd
  .command('folder <configPath> <folderPath> <bucketPath>')
  .alias('fo')
  .description('upload folder to tencent cos bucket')
  .option('-i, --info', 'show upload info')
  .action(uploadFolder);
