module.exports = {
    mode    : 'production',
    entry   : {
        'open-db' : './test/open-db.js',
        'create-table' : './test/create-table.js',
        'add-data' : './test/add-data.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
