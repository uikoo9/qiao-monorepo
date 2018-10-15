'use strict';

var qiaoUtilString	= require('../lib/qiao.util.string');
var qiaoPluginCoder = require('../lib/qiao.plugin.coder');
var qiaoPluginMysql = require('qiao.plugin.mysql');

var test = async function(){
	// init mysql
	qiaoPluginMysql.init(require('./_config.json'));
	
	// vars
	var destFolder 	= 'z:/workspaces/fe.100tal/webroot-dev';
	var tableName	= 't_blog_article';
	var params		= [];
	
	// params
	var columns = await qiaoPluginMysql.getColumns(tableName);
	for(var i=0; i<columns.length; i++){
		var item = columns[i];
		
		// name1
		var name1 = item.Field;
		if(!notIn(name1)) continue;
		
		// name2
		var name3 = qiaoUtilString.underScoreCaseToCamelCase(name1);
		var name2 = qiaoUtilString.firstLetterLower(name3);
		
		// obj
		var obj 	= {};
		obj.type	= qiaoPluginMysql.getTypes(item.Type);
		obj.name1 	= name1;
		obj.name2 	= name2;
		
		// params
		params.push(obj);
	}
	
	console.log(params);
	
	qiaoPluginCoder.genServerCode(destFolder, tableName, params);
};

// not in
function notIn(s){
	var ss = ['id', 'cdate', 'cuser_id', 'cuser_name', 'udate', 'uuser_id', 'uuser_name', 'del_tag'];
	for(var i=0; i<ss.length; i++){
		if(s == ss[i]) return false;
	}
	
	return true;
}

test();