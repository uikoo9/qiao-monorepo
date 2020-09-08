'use strict';

var q = require('../lib/qiao-is-online-browser');

var test = async function(){
    try{
        var isOnlineImgSrc = require('../lib/config.json').img;
        var isOnline = await q.isOnline(isOnlineImgSrc);
        console.log(isOnline);
    }catch(e){
        console.log(e);
    }
};

test();