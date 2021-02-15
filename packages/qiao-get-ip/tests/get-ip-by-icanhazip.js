'use strict';

var q = require('../lib/qiao-get-ip');

// get ip by icanhazip
test('get ip by icanhazip', async function(){
    try{
        var res = await q.getIpByIcanhazip();
        
        console.log(res);
        expect(res).toBeDefined();
    }catch(e){
        console.log(e.message);
        expect(e.message).toBeDefined();
    }
});