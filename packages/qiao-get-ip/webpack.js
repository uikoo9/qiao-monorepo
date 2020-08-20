module.exports = {
    mode    : 'production',
    entry   : {
        'get-ip-by-sohu' : './test/get-ip-by-sohu.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};