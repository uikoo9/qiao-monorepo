'use strict';

var q = require('../lib/qiao-get-ip');

var test = async function(){
    try{
        var ip = await q.getIp();
        console.log(ip);
    }catch(e){
        console.log(e);
    }
};

test();