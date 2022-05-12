module.exports = {
    mode    : 'production',
    entry   : {
        'is-online'         : './__tests__/is-online.js',
        'offline-to-online' : './__tests__/offline-to-online.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};