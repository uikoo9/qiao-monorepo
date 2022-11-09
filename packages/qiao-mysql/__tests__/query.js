// config
const config = require('./config.json');

// client
const client = require('../index.js')(config);

// test
const test = async () => {
    try {
        const rows = await client.query('select * from t_todo_item where id=?', [8]);
        console.log(rows);
    } catch (e) {
        console.log(e);
    }
};

test();