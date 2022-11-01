// mysql
var mysql = require('qiao-mysql');

// model
var model	= require('../model/UcenterRoleRMenuModel.js');

/**
 * ucenter role-r-menu list
 */
exports.ucenterRoleRMenuList = async function(req, res){
	// vars
	var ucenterRoleId = req.body.ucenterRoleId;
	var ucenterMenuId = req.body.ucenterMenuId;
	
	// sql and params
	var sqlcount	= [model.sql.ucenterRoleRMenuListCount];
	var paramscount	= [];
	
	var sqlquery	= [model.sql.ucenterRoleRMenuListQuery];
	var paramsquery	= [];
	
	// query
	if(ucenterRoleId){
		sqlcount.push(' and t.ucenter_role_id = ?');
		paramscount.push(ucenterRoleId);
		
		sqlquery.push(" and t.ucenter_role_id = ?");
		paramsquery.push(ucenterRoleId);
	}
	if(ucenterMenuId){
		sqlcount.push(' and t.ucenter_menu_id = ?');
		paramscount.push(ucenterMenuId);
		
		sqlquery.push(" and t.ucenter_menu_id = ?");
		paramsquery.push(ucenterMenuId);
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
 * ucenter role-r-menu get
 */
exports.ucenterRoleRMenuGet = async function(req, res){
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
		var rows = await model.ucenterRoleRMenuGetById(req.body.id);
		
		res.jsonSuccess('query success', {rows:rows});
	}catch(e){
		res.jsonFail('query failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role-r-menu save
 */
exports.ucenterRoleRMenuSave = async function(req, res){
	// check
	if(!req.body){
		res.jsonFail('缺少参数！');
		return;
	}
	if(!req.body.ucenterRoleId){
		res.jsonFail('缺少参数ucenterRoleId！');
		return;
	}
	if(!req.body.ucenterMenuId){
		res.jsonFail('缺少参数ucenterMenuId！');
		return;
	}
	
	// vars
	var id = req.body.id;
	var ucenterRoleId = req.body.ucenterRoleId;
	var ucenterMenuId = req.body.ucenterMenuId;
	
	
	// vars for userinfo
	var express_userid 		= req.body.express_userid;
	var express_username	= req.body.express_username;
	
	// db
	try{
		var params = [];
		
		if(!id){
			params.push(ucenterRoleId);
			params.push(ucenterMenuId);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			
			var rs = await model.ucenterRoleRMenuAdd(params);
			id = rs && rs.insertId ? rs.insertId : id;
		}else{
			params.push(ucenterRoleId);
			params.push(ucenterMenuId);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(id);
			
			await model.ucenterRoleRMenuEdit(params);
		}
		
		res.jsonSuccess('save success', {id:id});
	}catch(e){
		res.jsonFail('save failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role-r-menu del
 */
exports.ucenterRoleRMenuDel = async function(req, res){
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
		await model.ucenterRoleRMenuDel(req.body.ids.split(','));
		res.jsonSuccess('del success');
	}catch(e){
		res.jsonFail('del failed', {errName:e.name,errMsg:e.message});
	}
};