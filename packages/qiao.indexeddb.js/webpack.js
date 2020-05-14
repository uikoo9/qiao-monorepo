module.exports = {
    mode    : 'production',
    entry   : {
        'open-db' : './test/open-db.js',
        'create-table' : './test/create-table.js',
        'add' : './test/add.js',
        'get' : './test/get.js',
        'put' : './test/put.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
