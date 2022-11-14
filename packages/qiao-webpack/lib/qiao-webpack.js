'use strict';

// webpack
var webpack = require('webpack');

// webpack dev server
var WebpackDevServer = require('webpack-dev-server');

// log util
var logUtil = require('./log.js');

// webpack config
var webpackConfig = require('../config/webpack.js');

/**
 * analyzer
 */
exports.analyzer = function(configPath, target){
    var configJs = webpackConfig.build(configPath, target, true);
    if (!configJs) return;

    webpackCompiler(configJs);
};

/**
 * build
 */
exports.build = function(configPath, target){
    var configJs = webpackConfig.build(configPath, target);
    if (!configJs) return;

    webpackCompiler(configJs);
};

/**
 * dev
 */
exports.dev = function(configPath, target){
    // config js
    var configJs = webpackConfig.dev(configPath, target);
    if (!configJs) return;

    // compiler
    var compiler = webpack(configJs);

    // dev server options
    var devServerOptions = configJs.devServer;

    // server
    var server = new WebpackDevServer(devServerOptions, compiler);
    server.startCallback(function(){
        console.log('Successfully started server on http://localhost:8080');
    });
};

// webpack compiler
function webpackCompiler(configJs){
    var compiler = webpack(configJs);
    compiler.run(function(err, stats){
        var hasError = logUtil.showErr(err, stats);
        if(hasError) return;

        logUtil.log();
        logUtil.suc('build success!');
        logUtil.log();

        logUtil.showStats(stats);
    });
}