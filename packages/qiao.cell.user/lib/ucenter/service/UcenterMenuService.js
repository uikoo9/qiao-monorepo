// qiao
var qiao = require('../../_qiao.js');

// model
var model	= require('../model/UcenterMenuModel.js');

/**
 * ucenter menu list
 */
exports.ucenterMenuList = async function(req, res){
	// vars
	var ucenterMenuParent = req.body.ucenterMenuParent;
	var ucenterMenuSn = req.body.ucenterMenuSn;
	var ucenterMenuTitle = req.body.ucenterMenuTitle;
	var ucenterMenuUrl = req.body.ucenterMenuUrl;
	
	// sql and params
	var sqlcount	= [model.sql.ucenterMenuListCount];
	var paramscount	= [];
	
	var sqlquery	= [model.sql.ucenterMenuListQuery];
	var paramsquery	= [];
	
	// query
	if(ucenterMenuParent){
		sqlcount.push(' and t.ucenter_menu_parent = ?');
		paramscount.push(ucenterMenuParent);
		
		sqlquery.push(" and t.ucenter_menu_parent = ?");
		paramsquery.push(ucenterMenuParent);
	}
	if(ucenterMenuSn){
		sqlcount.push(' and t.ucenter_menu_sn = ?');
		paramscount.push(ucenterMenuSn);
		
		sqlquery.push(" and t.ucenter_menu_sn = ?");
		paramsquery.push(ucenterMenuSn);
	}
	if(ucenterMenuTitle){
		sqlcount.push(' and t.ucenter_menu_title = ?');
		paramscount.push(ucenterMenuTitle);
		
		sqlquery.push(" and t.ucenter_menu_title = ?");
		paramsquery.push(ucenterMenuTitle);
	}
	if(ucenterMenuUrl){
		sqlcount.push(' and t.ucenter_menu_url = ?');
		paramscount.push(ucenterMenuUrl);
		
		sqlquery.push(" and t.ucenter_menu_url = ?");
		paramsquery.push(ucenterMenuUrl);
	}
	
	// order and page
	sqlquery.push(' order by t.? ? limit ?,?');
	var order		= req.body.order || 'desc';
	var orderby		= req.body.orderby || 'id';
	var pagesize	= parseInt(req.body.rows || 10);
	var pagenumber	= parseInt(req.body.page || 1);
	var start		= (pagenumber - 1) * pagesize;
	paramsquery.push(qiao.mysql.lib.raw(orderby));
	paramsquery.push(qiao.mysql.lib.raw(order));
	paramsquery.push(start);
	paramsquery.push(pagesize);
	
	// db
	try{
		var rs 		= await qiao.mysql.query(global.config.db, sqlcount.join(''), paramscount);
		var rows 	= await qiao.mysql.query(global.config.db, sqlquery.join(''), paramsquery);
		
		// result
		var result = {};
		result.total 		= rs[0]['tcount'];
		result.rows 		= rows;
		result.sumpage 		= Math.ceil(result.total / pagesize);
		result.pagenumber 	= pagenumber;
		result.pagesize		= pagesize;
		
		res.send(qiao.json.success('query success', result));
	}catch(e){
		res.send(qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter menu get
 */
exports.ucenterMenuGet = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.id){
		res.send(qiao.json.danger('缺少参数id！'));
		return;
	}
	
	// db
	try{
		var rows = await model.ucenterMenuGetById(req.body.id);
		
		res.send(qiao.json.success('query success', {rows:rows}));
	}catch(e){
		res.send(qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter menu save
 */
exports.ucenterMenuSave = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.ucenterMenuParent){
		res.send(qiao.json.danger('缺少参数ucenterMenuParent！'));
		return;
	}
	if(!req.body.ucenterMenuSn){
		res.send(qiao.json.danger('缺少参数ucenterMenuSn！'));
		return;
	}
	if(!req.body.ucenterMenuTitle){
		res.send(qiao.json.danger('缺少参数ucenterMenuTitle！'));
		return;
	}
	if(!req.body.ucenterMenuUrl){
		res.send(qiao.json.danger('缺少参数ucenterMenuUrl！'));
		return;
	}
	
	// vars
	var id = req.body.id;
	var ucenterMenuParent = req.body.ucenterMenuParent;
	var ucenterMenuSn = req.body.ucenterMenuSn;
	var ucenterMenuTitle = req.body.ucenterMenuTitle;
	var ucenterMenuUrl = req.body.ucenterMenuUrl;
	
	
	// vars for userinfo
	var express_userid 		= req.body.express_userid;
	var express_username	= req.body.express_username;
	
	// db
	try{
		var params = [];
		
		if(!id){
			params.push(ucenterMenuParent);
			params.push(ucenterMenuSn);
			params.push(ucenterMenuTitle);
			params.push(ucenterMenuUrl);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			
			await model.ucenterMenuAdd(params);
		}else{
			params.push(ucenterMenuParent);
			params.push(ucenterMenuSn);
			params.push(ucenterMenuTitle);
			params.push(ucenterMenuUrl);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(id);
			
			await model.ucenterMenuEdit(params);
		}
		
		res.send(qiao.json.success('save success'));
	}catch(e){
		res.send(qiao.json.danger('save failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * ucenter menu del
 */
exports.ucenterMenuDel = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.ids){
		res.send(qiao.json.danger('缺少参数ids！'));
		return;
	}
	
	// db
	try{
		await model.ucenterMenuDel(req.body.ids.split(','));
		res.send(qiao.json.success('del success'));
	}catch(e){
		res.send(qiao.json.danger('del failed', {errName:e.name,errMsg:e.message}));
	}
};