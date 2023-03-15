// config
const config = require('./config.json');

// qiao-cos
const qcos = require('../index.js')(config);

/**
 * upload folder
 * upload /your/folder folder's files to your bucket's test folder
 */
const test = async () => {
  try {
    const destPath = 'test';
    const sourceFolder = '../src';

    const rs = await qcos.uploadFolder(destPath, sourceFolder);
    console.log(rs);
  } catch (e) {
    console.log(e);
  }
};

test();
