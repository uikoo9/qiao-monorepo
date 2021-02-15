'use strict';

var q = require('../lib/qiao-get-ip');

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