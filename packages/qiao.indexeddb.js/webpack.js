module.exports = {
    mode    : 'production',
    entry   : {
        'open-db' : './test/open-db.js',
        'create-table' : './test/create-table.js',
        'open-db-and-create-table' : './test/open-db-and-create-table.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
