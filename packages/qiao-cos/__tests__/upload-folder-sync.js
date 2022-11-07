// config
const config = require('./config.json');

// q
const q = require('../index.js')(config);

/**
 * upload folder
 * upload /your/folder folder's files to your bucket's test folder
 */
const test = async () => {
    try {
        const destPath = 'test';
        const sourceFolder = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-cos/src';

        const rs = await q.uploadFolderSync(destPath, sourceFolder);
        console.log(rs);
    } catch (e) {
        console.log(e);
    }
};

test();