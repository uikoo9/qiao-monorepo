var util = require('../lib/qiao.plugin.mysql.js');

var connection = util.connection(require('./_config.json'));
console.log(connection);