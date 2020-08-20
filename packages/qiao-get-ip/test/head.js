'use strict';

var q = require('../lib/qiao-ajax');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.head(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();