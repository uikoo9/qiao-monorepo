module.exports = {
    mode    : 'production',
    entry   : {
        'get-item' : './test/get-item.js',
        'remove-item' : './test/remove-item.js',
        'set-item' : './test/set-item.js',
        'cache' : './test/cache.js',
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
