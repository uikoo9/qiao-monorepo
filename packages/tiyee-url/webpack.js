module.exports = {
    mode    : 'production',
    entry   : {
        'short-url' : './test/short-url.js',
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};