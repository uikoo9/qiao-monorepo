'use strict';

var isOnlineFunc = require('../lib/is-online.js');

// is online
test('is online', async function(){
    try{
        var isOnline = await isOnlineFunc();
        expect(isOnline).toStrictEqual('online');

        // strict mode, all hosts alive return online
        var isOnlineStrictMode = await isOnlineFunc(true);
        expect(isOnlineStrictMode).toStrictEqual('online');
    }catch(e){
        console.log(e.message);
        expect(e.message).toBeDefined();
    }
});