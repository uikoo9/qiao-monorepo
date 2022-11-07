// config
const config = require('./config.json');

// q
const q = require('../index.js')(config);

/**
 * upload file demo
 * upload /your/test.js to your bucket's test/test.js
 */
const test = () => {
    const destPath = 'test/test.js';
    const sourceFile = '/your/test.js';

    q.uploadFile(destPath, sourceFile, (err, data) => {
        console.log(err, data);
    });
};

test();