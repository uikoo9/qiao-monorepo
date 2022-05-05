// path
var path = require('path');

// webpack merge
var merge = require('webpack-merge').merge;

// webpack common
var webpack_common_options = require('./webpack-common-options.js');

// webpack dev
var webpack_dev_options = require('./webpack-dev-options.js');
var webpack_dev_plugins = require('./webpack-dev-plugins.js');

// webpack build
var webpack_build_options = require('./webpack-build-options.js');
var webpack_build_plugins = require('./webpack-build-plugins.js');

// webpack performance
var webpack_performance = require('./webpack-performance.js');

/**
 * webpack build config
 */
exports.build = function(configPath, target, isAnalyzer){
    // qiao.webpack.js
    var qiaoWebpack = getQiaoWebpackJs(configPath);
    if (!qiaoWebpack) return;

    // opt
    var opt             = Object.assign({}, webpack_build_options);
    opt.entry           = qiaoWebpack.entry;
    opt.output          = qiaoWebpack.output;
    opt.resolve         = qiaoWebpack.resolve;
    opt.plugins         = webpack_build_plugins(qiaoWebpack.plugins, isAnalyzer);
    opt.performance     = qiaoWebpack.performance || webpack_performance;
    opt.optimization    = qiaoWebpack.optimization;

    // target
    if(target) opt.target = target;

    // merge
    return merge(webpack_common_options, opt);
};

/**
 * webpack dev config
 */
 exports.dev = function(configPath, target){
    // qiao.webpack.js
    var qiaoWebpack = getQiaoWebpackJs(configPath);
    if (!qiaoWebpack) return;

    // opt
    var opt             = Object.assign({}, webpack_dev_options);
    opt.entry           = qiaoWebpack.entry;
    opt.output          = qiaoWebpack.output;
    opt.resolve         = qiaoWebpack.resolve;
    opt.devServer       = qiaoWebpack.devServer;
    opt.plugins         = webpack_dev_plugins(qiaoWebpack.plugins);
    opt.performance     = qiaoWebpack.performance || webpack_performance;
    opt.optimization    = qiaoWebpack.optimization;

    // target
    if(target) opt.target = target;

    // merge
    return merge(webpack_common_options, opt);
};

// get qiao webpack js
function getQiaoWebpackJs(configPath) {
    var cwd = process.cwd();
    if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
    
    var qiaoWebpack;
    try {
        qiaoWebpack = require(configPath);
    } catch (e) {
        console.error(new Error('build: need qiao.webpack.js file'));
    }

    return qiaoWebpack;
}