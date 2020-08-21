'use strict';

var q = require('../lib/qiao-is-online-browser');

var test = async function(){
    try{
        var isOnline = await q.isOnline();
        console.log(isOnline);

        // var isOnlineByYourImg = await q.isOnline(your img src);
        // console.log(isOnlineByYourImg);
    }catch(e){
        console.log(e);
    }
};

test();