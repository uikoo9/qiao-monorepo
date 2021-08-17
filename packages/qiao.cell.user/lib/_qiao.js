'use strict';

// qiao
var qiao 	= {};
qiao.encode	= require('qiao.util.encode');
qiao.json 	= require('qiao.util.json');
qiao.mysql	= require('qiao.plugin.mysql');
qiao.txsms	= require('qiao.ext.txsms');

// exports
module.exports = qiao;