module.exports = {
    mode    : 'production',
    entry   : {
        'open-db' : './test/open-db.js',
        'del-db' : './test/del-db.js',
        'create-table' : './test/create-table.js',
        'del-table' : './test/del-table.js',
        'add' : './test/add.js',
        'get' : './test/get.js',
        'put' : './test/put.js',
        'save' : './test/save.js',
        'del' : './test/del.js',
        'clear' : './test/clear.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
