// config
const config = require('./config.json');

// client
const client = require('../index.js')(config);

const type = client.getTypes('varchar(10)');
console.log(type);