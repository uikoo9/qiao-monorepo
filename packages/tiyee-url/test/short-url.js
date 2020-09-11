'use strict';

var t = require('../lib/t-url');

var test = async function(){
    try{
        var longUrl     = 'https://baidu.com/';
        var shortUrl    = await t.shortUrl(longUrl);
        console.log(shortUrl);
    }catch(e){
        console.log(e);
    }
};

test();