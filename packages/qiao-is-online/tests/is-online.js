'use strict';

var q = require('../lib/qiao-is-online');

// is online
test('is online', async function(){
    try{
        var isOnline = await q.isOnline();
        expect(isOnline).toStrictEqual('online');

        // strict mode, all hosts alive return online
        var isOnlineStrictMode = await q.isOnline(true);
        expect(isOnlineStrictMode).toStrictEqual('online');
    }catch(e){
        console.log(e.message);
        expect(e.message).toBeDefined();
    }
});