module.exports = {
    mode    : 'production',
    entry   : {
        'ls'    : './test/ls.js',
        'cache' : './test/cache.js',
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};