module.exports = {
    mode    : 'production',
    entry   : {
        'is-online'         : './tests/is-online.js',
        'offline-to-online' : './tests/offline-to-online.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};