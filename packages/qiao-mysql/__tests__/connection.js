'use strict';

var q = require('../index.js');

var connection = q.connection(require('./_config.json'));
console.log(connection);