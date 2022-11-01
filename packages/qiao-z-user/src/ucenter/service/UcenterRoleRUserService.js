// mysql
var mysql = require('qiao-mysql');

// model
var model	= require('../model/UcenterRoleRUserModel.js');

/**
 * ucenter role-r-user list
 */
exports.ucenterRoleRUserList = async function(req, res){
	// vars
	var ucenterRoleId = req.body.ucenterRoleId;
	var ucenterUserId = req.body.ucenterUserId;
	
	// sql and params
	var sqlcount	= [model.sql.ucenterRoleRUserListCount];
	var paramscount	= [];
	
	var sqlquery	= [model.sql.ucenterRoleRUserListQuery];
	var paramsquery	= [];
	
	// query
	if(ucenterRoleId){
		sqlcount.push(' and t.ucenter_role_id = ?');
		paramscount.push(ucenterRoleId);
		
		sqlquery.push(" and t.ucenter_role_id = ?");
		paramsquery.push(ucenterRoleId);
	}
	if(ucenterUserId){
		sqlcount.push(' and t.ucenter_user_id = ?');
		paramscount.push(ucenterUserId);
		
		sqlquery.push(" and t.ucenter_user_id = ?");
		paramsquery.push(ucenterUserId);
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
		console.log(sqlcount.join(''), paramscount);
		console.log(sqlcount.join(''), paramscount);
		
		// result
		var result = {};
		result.total 		= rs[0]['tcount'];
		result.rows 		= rows;
		result.sumpage 		= Math.ceil(result.total / pagesize);
		result.pagenumber 	= pagenumber;
		result.pagesize		= pagesize;
		
		res.jsonSuccess('query success', result);
	}catch(e){
		console.log(e);
		res.jsonFail('query failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role-r-user get
 */
exports.ucenterRoleRUserGet = async function(req, res){
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
		var rows = await model.ucenterRoleRUserGetById(req.body.id);
		
		res.jsonSuccess('query success', {rows:rows});
	}catch(e){
		res.jsonFail('query failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role-r-user save
 */
exports.ucenterRoleRUserSave = async function(req, res){
	// check
	if(!req.body){
		res.jsonFail('缺少参数！');
		return;
	}
	if(!req.body.ucenterRoleId){
		res.jsonFail('缺少参数ucenterRoleId！');
		return;
	}
	if(!req.body.ucenterUserId){
		res.jsonFail('缺少参数ucenterUserId！');
		return;
	}
	
	// vars
	var id = req.body.id;
	var ucenterRoleId = req.body.ucenterRoleId;
	var ucenterUserId = req.body.ucenterUserId;
	
	
	// vars for userinfo
	var express_userid 		= req.body.express_userid;
	var express_username	= req.body.express_username;
	
	// db
	try{
		var params = [];
		
		if(!id){
			params.push(ucenterRoleId);
			params.push(ucenterUserId);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			
			var rs = await model.ucenterRoleRUserAdd(params);
			id = rs && rs.insertId ? rs.insertId : id;
		}else{
			params.push(ucenterRoleId);
			params.push(ucenterUserId);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(id);
			
			await model.ucenterRoleRUserEdit(params);
		}
		
		res.jsonSuccess('save success', {id:id});
	}catch(e){
		res.jsonFail('save failed', {errName:e.name,errMsg:e.message});
	}
};

/**
 * ucenter role-r-user del
 */
exports.ucenterRoleRUserDel = async function(req, res){
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
		await model.ucenterRoleRUserDel(req.body.ids.split(','));
		res.jsonSuccess('del success');
	}catch(e){
		res.jsonFail('del failed', {errName:e.name,errMsg:e.message});
	}
};