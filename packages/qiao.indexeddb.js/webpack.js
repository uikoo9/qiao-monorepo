module.exports = {
    mode    : 'production',
    entry   : {
        'open-db' : './test/open-db.js',
        'create-table' : './test/create-table.js',
        'add' : './test/add.js',
        'get' : './test/get.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
