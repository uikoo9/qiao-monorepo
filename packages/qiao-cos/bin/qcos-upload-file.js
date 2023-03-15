// path
const path = require('path');

// qiao
const cli = require('qiao-cli');
const qcos = require('../index.js');

/**
 * upload file
 * @param {*} configPath
 * @param {*} filePath
 * @param {*} bucketPath
 */
const uploadFile = async (configPath, filePath, bucketPath) => {
  try {
    const cwd = process.cwd();
    if (configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
    if (filePath.startsWith('./')) filePath = path.resolve(cwd, filePath);

    const app = qcos(require(configPath));
    const rs = await app.uploadFile(bucketPath, filePath);

    console.log('upload file to tencent cos success!');
    console.log();

    console.log(rs);
  } catch (e) {
    console.log('upload file to tencent cos fail!');
    console.log();

    console.log(e);
  }
};

// cmd for file
cli.cmd
  .command('file <configPath> <filePath> <bucketPath>')
  .alias('fi')
  .description('upload file to tencent cos bucket')
  .action(uploadFile);
