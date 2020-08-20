module.exports = {
    mode    : 'production',
    entry   : {
        'get'       : './test/get.js',
        'post'      : './test/post.js',
        'put'       : './test/put.js',
        'patch'     : './test/patch.js',
        'delete'    : './test/delete.js',
        'head'      : './test/head.js',
        'options'   : './test/options.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
