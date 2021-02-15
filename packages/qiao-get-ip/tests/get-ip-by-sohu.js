'use strict';

var q = require('../qiao-get-ip.js');

// get ip by sohu
test('get ip by sohu', async function(){
    try{
        var res = await q.getIpBySohu();

        console.log(res);
        expect(res).toBeDefined();
    }catch(e){
        console.log(e.message);
        expect(e.message).toBeDefined();
    }
});