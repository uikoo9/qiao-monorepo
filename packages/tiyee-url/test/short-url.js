'use strict';

var tiyee = require('../lib/tiyee-url');

var test = async function(){
    try{
        var longUrl     = 'https://baidu.com/';
        var shortUrl    = await tiyee.shortUrl(longUrl);
        console.log(shortUrl);
    }catch(e){
        console.log(e);
    }
};

test();