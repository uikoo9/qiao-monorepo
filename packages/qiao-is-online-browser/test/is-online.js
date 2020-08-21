'use strict';

var q = require('../lib/qiao-is-online-browser');

var test = async function(){
    try{
        var isOnline = await q.isOnline();
        console.log(isOnline);
    }catch(e){
        console.log(e);
    }
};

test();