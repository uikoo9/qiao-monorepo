module.exports = {
    mode    : 'production',
    entry   : {
        'open-db'       : './test/open-db.js',
        'list-db'       : './test/list-db.js',
        'del-db'        : './test/del-db.js',
        'create-table'  : './test/create-table.js',
        'del-table'     : './test/del-table.js',
        'get'           : './test/get.js',
        'save'          : './test/save.js',
        'del'           : './test/del.js',
        'clear'         : './test/clear.js',
        'index-get-all' : './test/index-get-all.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
