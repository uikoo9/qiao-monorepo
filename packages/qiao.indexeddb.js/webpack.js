module.exports = {
    mode    : 'production',
    entry   : {
        'open-db'       : './test/async/open-db.js',
        'list-db'       : './test/async/list-db.js',
        'del-db'        : './test/async/del-db.js',
        'create-table'  : './test/async/create-table.js',
        'del-table'     : './test/async/del-table.js',
        'add'           : './test/async/add.js',
        'get'           : './test/async/get.js',
        'put'           : './test/async/put.js',
        'save'          : './test/async/save.js',
        'del'           : './test/async/del.js',
        'clear'         : './test/async/clear.js',

        'list-db-sync'  : './test/sync/list-db-sync.js',
        'del-db-sync'   : './test/sync/del-db-sync.js',
        'add-sync'      : './test/sync/add-sync.js',
        'get-sync'      : './test/sync/get-sync.js',
        'put-sync'      : './test/sync/put-sync.js',
        'save-sync'     : './test/sync/save-sync.js',
        'del-sync'      : './test/sync/del-sync.js',
        'clear-sync'    : './test/sync/clear-sync.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
