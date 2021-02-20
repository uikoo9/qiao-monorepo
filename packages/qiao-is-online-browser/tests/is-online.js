'use strict';

var isOnlineFunc = require('../lib/is-online.js');

var test = async function(){
    try{
        var isOnlineImgSrc = require('../lib/config.json').img;
        var isOnline = await isOnlineFunc(isOnlineImgSrc);
        console.log(isOnline);
    }catch(e){
        console.log(e);
    }
};

test();