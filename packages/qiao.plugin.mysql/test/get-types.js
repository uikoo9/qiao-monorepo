'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql.js');

var type = qiaoPluginMysql.getTypes('varchar(10)');
console.log(type);