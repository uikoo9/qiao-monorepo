// config
const config = require('./config.json');

// qiao-cos
const qcos = require('../index.js')(config);

/**
 * upload file demo
 * upload /your/test.js to your bucket's test/test.js
 */
const test = async () => {
    try {
        const destPath = 'test/test.js';
        const sourceFile = '/your/test.js';

        const rs = await qcos.uploadFileSync(destPath, sourceFile);
        console.log(rs);
    } catch (e) {
        console.log(e);
    }
};

test();