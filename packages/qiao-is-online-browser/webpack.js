module.exports = {
    mode    : 'production',
    entry   : {
        'is-online' : './test/is-online.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};