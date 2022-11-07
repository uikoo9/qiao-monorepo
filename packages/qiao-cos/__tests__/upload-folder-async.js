// config
const config = require('./config.json');

// q
const q = require('../index.js')(config);

/**
 * upload folder
 * upload /your/folder folder's files to your bucket's test folder
 */
const test = () => {
    const destPath = 'test';
    const sourceFolder = '/your/folder';

    q.uploadFolder(destPath, sourceFolder, (rs) => {
        console.log(rs);
    });
};

test();