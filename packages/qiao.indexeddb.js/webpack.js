module.exports = {
    mode    : 'production',
    entry   : {
        'open-db'       : './test/sync/open-db.js',
        'list-db'       : './test/sync/list-db.js',
        'del-db'        : './test/sync/del-db.js',
        'create-table'  : './test/sync/create-table.js',
        'del-table'     : './test/sync/del-table.js',
        'add'           : './test/sync/add.js',
        'get'           : './test/sync/get.js',
        'put'           : './test/sync/put.js',
        'save'          : './test/sync/save.js',
        'del'           : './test/sync/del.js',
        'clear'         : './test/sync/clear.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
