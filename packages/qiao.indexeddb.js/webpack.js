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
        'del-db-sync'   : './test/sync/del-db-sync.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
