'use strict';

var q = require('../lib/qiao-get-ip');

var test = async function(){
    try{
        var res = await q.getIpByIcanhazip();
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();