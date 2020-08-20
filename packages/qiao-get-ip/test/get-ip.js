'use strict';

var q = require('../lib/qiao-get-ip');

var test = async function(){
    var s = await q.getIpBySohu();
    console.log(s);
};

test();