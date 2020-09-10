module.exports = {
    mode    : 'production',
    entry   : {
        'get-ip'                : './test/get-ip.js',
        'get-ip-by-sohu'        : './test/get-ip-by-sohu.js',
        'get-ip-by-icanhazip'   : './test/get-ip-by-icanhazip.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};