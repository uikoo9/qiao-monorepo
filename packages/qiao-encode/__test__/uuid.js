'use strict';

var q = require('../index.js');

// uuid v4
var uuid0 = q.uuid();
console.log(uuid0);

// uuid v1
var uuid1 = q.uuid(1);
console.log(uuid1);

// uuid v3
var uuid3 = q.uuid(3);
console.log(uuid3);

// uuid v4
var uuid4 = q.uuid(4);
console.log(uuid4);

// uuid v5
var uuid5 = q.uuid(5);
console.log(uuid5);