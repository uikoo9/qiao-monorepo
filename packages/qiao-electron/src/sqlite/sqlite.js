'use strict';

// path
import path from 'path';

// electron
import { app } from 'electron';

// sqlite
import { 
    createDb,
    createTable,
    dropTable,
    showTables,
    insertData,
    modifyData,
    deleteData,
    selectData,
} from 'qiao-sqlite';

// json
import {
    jsonSuccess,
    jsonDanger
} from './json.js';

/**
 * sqlite
 * @returns 
 */
export const sqlite = () => {
    const userDataPath = app.getPath('userData');
    const dbPath = path.resolve(userDataPath, './electron.db');
    const db = createDb(dbPath);

    return db;
};

/**
 * dbCreateTable
 * @param {*} sql 
 * @returns 
 */
export const dbCreateTable = async (sql) => {
    // check
    if(!sql) return jsonDanger('need create table sql');

    // db
    const db = sqlite();

    // create table
    try{
        await createTable(db, sql);
        return jsonSuccess('create table success');
    }catch(e){
        // return jsonDanger('create table fail', e);
        return jsonSuccess('create table success');
    }
};

/**
 * dbDropTable
 * @param {*} tableName 
 * @returns 
 */
export const dbDropTable = async (tableName) => {
    // check
    if(!tableName) return jsonDanger('need tableName');

    // db
    const db = sqlite();

    // drop table
    try{
        await dropTable(db, tableName);
        return jsonSuccess('drop table success');
    }catch(e){
        return jsonSuccess('drop table success');
    }
};

/**
 * dbShowTables
 * @returns 
 */
export const dbShowTables = async () => {
    // db
    const db = sqlite();

    // show tables
    try{
        const rows = await showTables(db);
        return jsonSuccess('show table success', rows);
    }catch(e){
        return jsonSuccess('show table success');
    }
};

/**
 * dbInsertData
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
export const dbInsertData = async (sql, params) => {
    // check
    if(!sql) return jsonDanger('need insert data sql');

    // db
    const db = sqlite();

    // insert data
    try{
        await insertData(db, sql, params);
        return jsonSuccess('insert data success');
    }catch(e){
        return jsonDanger('insert data fail', e);
    }
};

/**
 * dbDeleteData
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
export const dbDeleteData = async (sql, params) => {
    // check
    if(!sql) return jsonDanger('need delete data sql');

    // db
    const db = sqlite();

    // delete data
    try{
        await deleteData(db, sql, params);
        return jsonSuccess('delete data success');
    }catch(e){
        return jsonDanger('delete data fail', e);
    }
};

/**
 * dbModifyData
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
export const dbModifyData = async (sql, params) => {
    // check
    if(!sql) return jsonDanger('need modify data sql');

    // db
    const db = sqlite();

    // modify data
    try{
        await modifyData(db, sql, params);
        return jsonSuccess('modify data success');
    }catch(e){
        return jsonDanger('modify data fail', e);
    }
};

/**
 * dbSelectData
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
export const dbSelectData = async (sql, params) => {
    // check
    if(!sql) return jsonDanger('need select data sql');

    // db
    const db = sqlite();

    // select data
    try{
        const rows = await selectData(db, sql, params);
        return jsonSuccess('select data success', rows);
    }catch(e){
        return jsonDanger('select data fail', e);
    }
};