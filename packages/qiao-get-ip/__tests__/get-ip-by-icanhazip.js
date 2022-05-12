'use strict';

var q = require('../index.js');

var test = async function(){
    try{
        var ip = await q.getIpByIcanhazip();
        console.log(ip);
    }catch(e){
        console.log(e);
    }
};

test();