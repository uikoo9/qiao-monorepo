'use strict';

var q = require('../lib/t-url');

var test = async function(){
    try{
        var res = await q.getIpBySohu();
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();