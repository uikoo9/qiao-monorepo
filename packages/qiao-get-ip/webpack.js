module.exports = {
    mode    : 'production',
    entry   : {
        'get-ip' : './test/get-ip.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
