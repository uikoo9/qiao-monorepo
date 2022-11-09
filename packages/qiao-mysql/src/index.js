// util
import { getConnection, getPool, query, getColumns, getTypes } from './util.js';

/**
 * init
 * @param {*} config 
 * @returns 
 */
const init = (config) => {
    // check
    if (!config) return;

    // app
    const app = {};
    app.config = config;
    app.connection = getConnection(app);
    app.pool = getPool(app);
    app.query = async (sql, params) => { return await query(app, sql, params); };
    app.getColumns = async (tableName) => { return await getColumns(app, tableName); };
    app.getTypes = getTypes;

    // return
    return app;
};

export default init;