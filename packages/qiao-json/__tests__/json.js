'use strict';

var q = require('../index.js');

var json = q.json('success', 'test', {});
console.log(json);