module.exports = {
    mode    : 'production',
    entry   : {
        'is-online'         : './test/is-online.js',
        'offline-to-online' : './test/offline-to-online.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};