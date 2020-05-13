module.exports = {
    mode    : 'production',
    entry   : {
        'get-item' : './test/get-item.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
