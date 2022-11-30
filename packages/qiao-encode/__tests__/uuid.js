'use strict';

var q = require('../index.js');

// uuid v4
console.log(q.uuid());

// uuid v1
console.log(q.uuid(1));

// uuid v3
console.log(q.uuid(3));

// uuid v4
console.log(q.uuid(4));

// uuid v5
console.log(q.uuid(5));
