// config
const config = require('./config.json');

// client
const client = require('../index.js')(config);

// test
const test = async () => {
    try{
        const res = await client.getColumns('t_todo_item');
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();