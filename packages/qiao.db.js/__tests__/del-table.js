'use strict';

var q = require('../index.js');

var test = async function(){
    try{
        var databaseName	= 'db_test';
        var db 				= await q.openDB(databaseName);
        await q.delTable(db, 't_test2');
    }catch(e){
        console.log(e);
    }
};

test();