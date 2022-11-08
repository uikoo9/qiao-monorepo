// config
const config = require('./config.json');

// qiao-cos
const qcos = require('../index.js')(config);

/**
 * upload file demo
 * upload /your/test.js to your bucket's test/test.js
 */
const test = () => {
    const destPath = 'test/test.js';
    const sourceFile = '/your/test.js';

    qcos.uploadFile(destPath, sourceFile, (err, data) => {
        console.log(err, data);
    });
};

test();