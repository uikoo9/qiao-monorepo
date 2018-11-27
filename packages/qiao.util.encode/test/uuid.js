'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode');

// uuid v4
var uuid0 = qiaoUtilEncode.uuid();
console.log(uuid0);

// uuid v1
var uuid1 = qiaoUtilEncode.uuid(1);
console.log(uuid1);

// uuid v3
var uuid3 = qiaoUtilEncode.uuid(3);
console.log(uuid3);

// uuid v4
var uuid4 = qiaoUtilEncode.uuid(4);
console.log(uuid4);

// uuid v5
var uuid5 = qiaoUtilEncode.uuid(5);
console.log(uuid5);