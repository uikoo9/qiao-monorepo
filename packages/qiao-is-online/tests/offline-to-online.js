'use strict';

var offlineToOnline = require('../lib/offline-to-online.js');

// offline to online
test('offline to online', async function(){
    try{
        var res = await getCall(500);
        expect(res).toStrictEqual('offline-to-online');
    }catch(e){
        console.log(e.message);
        expect(e.message).toBeDefined();
    }
});

// get call
function getCall(time){
    return new Promise(function(resolve, reject){
        offlineToOnline(function(){
            return resolve('offline-to-online');
        }, time);
    });
 }