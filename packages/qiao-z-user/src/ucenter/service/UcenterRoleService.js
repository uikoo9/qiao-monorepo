// mysql
var mysql = require('qiao-mysql');

// model
var model	= require('../model/UcenterRoleModel.js');

/**
 * ucenter role list
 */
exports.ucenterRoleList = async function(req, res){
	// vars
	var ucenterRoleName = req.body.ucenterRoleName;
	var ucenterRoleUrl = req.body.ucenterRoleUrl;
	
	// sql and params
	var sqlcount	= [model.sql.ucenterRoleListCount];
	var paramscount	= [];
	
	var sqlquery	= [model.sql.ucenterRoleListQuery];
	var paramsquery	= [];
	
	// query
	if(ucenterRoleName){
		sqlcount.push(' and t.ucenter_role_name = ?');
		paramscount.push(ucenterRoleName);
		
		sqlquery.push(" and t.ucenter_role_name = ?");
		paramsquery.push(ucenterRoleName);
	}
	if(ucenterRoleUrl){
		sqlcount.push(' and t.ucenter_role_url = ?');
		paramscount.push(ucenterRoleUrl);
		
		sqlquery.push(" and t.ucenter_role_url = ?");
		paramsquery.push(ucenterRoleUrl);
	}
	
	// order and page
	sqlquery.push(' order by t.? ? limit ?,?');
	var order		= req.body.order || 'desc';
	var orderby		= req.body.orderby || 'id';
	var pagesize	= parseInt(req.body.rows || 10);
	var pagenumber	= parseInt(req.body.page || 1);
	var start		= (pagenumber - 1) * pagesize;
	paramsquery.push(mysql.lib.raw(orderby));
	paramsquery.push(mysql.lib.raw(order));
	paramsquery.push(start);
	paramsquery.push(pagesize);
	
	// db
	try{
		var rs 		= await mysql.query(global.QIAO_USER_CONFIG.db, sqlcount.join(''), paramscount);
		var rows 	= await mysql.query(global.QIAO_USER_CONFIG.db, sqlquery.join(''), paramsquery);
		
		// result
		var result = {};
		result.total 		= rs[0]['tcount'];
		result.rows 		= rows;
		result.sumpage 		= Math.ceil(result.total / pagesize);
		result.pagenumber 	= pagenumber;
		result.pagesize		= pagesize;
		
		res.jsonSuccess('query success', result);
	}catch(e){
		res.jsonFail('query failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role get
 */
exports.ucenterRoleGet = async function(req, res){
	// check
	if(!req.body){
		res.jsonFail('缺少参数！');
		return;
	}
	if(!req.body.id){
		res.jsonFail('缺少参数id！');
		return;
	}
	
	// db
	try{
		var rows = await model.ucenterRoleGetById(req.body.id);
		
		res.jsonSuccess('query success', {rows:rows});
	}catch(e){
		res.jsonFail('query failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role save
 */
exports.ucenterRoleSave = async function(req, res){
	// check
	if(!req.body){
		res.jsonFail('缺少参数！');
		return;
	}
	if(!req.body.ucenterRoleName){
		res.jsonFail('缺少参数ucenterRoleName！');
		return;
	}
	if(!req.body.ucenterRoleUrl){
		res.jsonFail('缺少参数ucenterRoleUrl！');
		return;
	}
	
	// vars
	var id = req.body.id;
	var ucenterRoleName = req.body.ucenterRoleName;
	var ucenterRoleUrl = req.body.ucenterRoleUrl;
	
	
	// vars for userinfo
	var express_userid 		= req.body.express_userid;
	var express_username	= req.body.express_username;
	
	// db
	try{
		var params = [];
		
		if(!id){
			params.push(ucenterRoleName);
			params.push(ucenterRoleUrl);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			
			var rs = await model.ucenterRoleAdd(params);
			id = rs && rs.insertId ? rs.insertId : id;
		}else{
			params.push(ucenterRoleName);
			params.push(ucenterRoleUrl);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(id);
			
			await model.ucenterRoleEdit(params);
		}
		
		res.jsonSuccess('save success', {id:id});
	}catch(e){
		res.jsonFail('save failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role del
 */
exports.ucenterRoleDel = async function(req, res){
	// check
	if(!req.body){
		res.jsonFail('缺少参数！');
		return;
	}
	if(!req.body.ids){
		res.jsonFail('缺少参数ids！');
		return;
	}
	
	// db
	try{
		await model.ucenterRoleDel(req.body.ids.split(','));
		res.jsonSuccess('del success');
	}catch(e){
		res.jsonFail('del failed', {errName:e.name,errMsg:e.message});
	}
};