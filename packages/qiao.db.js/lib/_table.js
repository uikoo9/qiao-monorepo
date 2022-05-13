'use strict';

var _db = require('./_db.js');

/**
 * create table
 * 	db
 * 	tables
 * 		key
 * 		index
 * 			name
 * 			index
 * 			unique
 */
exports.createTable = async function(db, tables){
    if(!db || !tables || !tables.length) return null;
    var newDB = await _db.newDB(db);

	var res = [];
	for(var i=0; i<tables.length; i++){
		var table = tables[i];
        if(newDB.objectStoreNames.contains(table.name)) continue;
        
        // create table
        var objectStore = createTable(newDB, table);

        // push
        res.push(objectStore);
    }
    
    // obj
    var obj = {};
    obj.res = res;
    obj.db  = newDB;

	return obj;
};

// create table
function createTable(db, table){
    if(!db || !table) return;

    // key
    var key = {};
    if(table.key == 'auto'){
        key.autoIncrement = true;
    }else{
        key.keyPath = table.key;
    }

    // create
    var objectStore = db.createObjectStore(table.name, key);

    // index
    createIndex(objectStore, table);

    // return
    return objectStore;
}

// create index
function createIndex(os, table){
    if(!os || !table || !table.index || !table.index.length) return;

    for(var j=0; j<table.index.length; j++){
        var item 	= table.index[j];
        var name 	= item.name;
        var index	= item.index;
        var unique	= item.unique;
        os.createIndex(name, index, { unique: unique });
    }
}

/**
 * del table
 * 	db
 * 	tableName
 */
exports.delTable = async function(db, tableName){
    if(!db || !tableName) return;

    var newDB = await _db.newDB(db);
    newDB.deleteObjectStore(tableName);
};