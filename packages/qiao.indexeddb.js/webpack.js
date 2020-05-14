module.exports = {
    mode    : 'production',
    entry   : {
        'open-db' : './test/open-db.js',
        'del-db' : './test/del-db.js',
        'create-table' : './test/create-table.js',
        'del-table' : './test/del-table.js',
        'get' : './test/get.js',
        'add' : './test/add.js',
        'put' : './test/put.js',
        'del' : './test/del.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
