'use strict';

var q = require('../index.js');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.patch(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();