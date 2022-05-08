// path
var path = require('path');

// webpack merge
var merge = require('webpack-merge').merge;

// webpack options
var webpack_options = require('./webpack-options.js');

// webpack performance
var webpack_performance = require('./webpack-performance.js');

/**
 * webpack build config
 */
exports.build = function(configPath, target, isAnalyzer){
    // qiao.webpack.js
    var qiaoWebpack = getQiaoWebpackJs(configPath);
    if (!qiaoWebpack) return;

    // options
    var options = webpack_options(false, qiaoWebpack, isAnalyzer);

    // opt
    var opt             = {};
    opt.entry           = qiaoWebpack.entry;
    opt.output          = qiaoWebpack.output;
    opt.resolve         = qiaoWebpack.resolve;
    opt.performance     = qiaoWebpack.performance || webpack_performance;

    // target
    if(target) opt.target = target;

    // merge
    return merge(options, opt);
};

/**
 * webpack dev config
 */
 exports.dev = function(configPath, target){
    // qiao.webpack.js
    var qiaoWebpack = getQiaoWebpackJs(configPath);
    if (!qiaoWebpack) return;

    // options
    var options = webpack_options(true, qiaoWebpack);

    // opt
    var opt             = {};
    opt.entry           = qiaoWebpack.entry;
    opt.output          = qiaoWebpack.output;
    opt.resolve         = qiaoWebpack.resolve;
    opt.devServer       = qiaoWebpack.devServer;
    opt.performance     = qiaoWebpack.performance || webpack_performance;

    // target
    if(target) opt.target = target;

    // merge
    return merge(options, opt);
};

// get qiao webpack js
function getQiaoWebpackJs(configPath) {
    var cwd = process.cwd();
    if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
    
    var qiaoWebpack;
    try {
        qiaoWebpack = require(configPath);
    } catch (e) {
        console.log(e);
    }

    return qiaoWebpack;
}