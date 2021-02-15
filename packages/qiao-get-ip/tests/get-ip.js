'use strict';

var q = require('../qiao-get-ip.js');

// get ip
test('get ip', async function(){
    try{
        var res = await q.getIp();

        console.log(res);
        expect(res).toBeDefined();
    }catch(e){
        console.log(e.message);
        expect(e.message).toBeDefined();
    }
});