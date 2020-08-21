'use strict';

var q = require('../lib/qiao-is-online');

var test = async function(){
    try{
        var isOnline = await q.isOnline();
        console.log(isOnline);

        // strict mode, all hosts alive return online
        var isOnlineStrictMode = await q.isOnline(true);
        console.log(isOnlineStrictMode);
    }catch(e){
        console.log(e);
    }
};

test();