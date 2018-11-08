var qiaoPluginMysql = require('../lib/qiao.plugin.mysql.js');

var connection = qiaoPluginMysql.connection(require('./_config.json'));
console.log(connection);