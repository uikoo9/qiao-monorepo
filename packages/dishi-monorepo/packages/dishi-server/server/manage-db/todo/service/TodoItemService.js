// qiao
var qiao 	= require('qiao.util.all');
qiao.config = require('../../../config/config.json');

// model
var model	= require('../model/TodoItemModel.js');

/**
 * todo item list
 */
exports.todoItemList = async function(req, res){
	// vars
	var ucenterUserId = req.body.ucenterUserId;
	var todoGroupId = req.body.todoGroupId;
	var todoItemName = req.body.todoItemName;
	var todoItemOrder = req.body.todoItemOrder;
	var todoItemStatus = req.body.todoItemStatus;
	
	// sql and params
	var sqlcount	= [model.sql.todoItemListCount];
	var paramscount	= [];
	
	var sqlquery	= [model.sql.todoItemListQuery];
	var paramsquery	= [];
	
	// query
	if(ucenterUserId){
		sqlcount.push(' and t.ucenter_user_id = ?');
		paramscount.push(ucenterUserId);
		
		sqlquery.push(" and t.ucenter_user_id = ?");
		paramsquery.push(ucenterUserId);
	}
	if(todoGroupId){
		sqlcount.push(' and t.todo_group_id = ?');
		paramscount.push(todoGroupId);
		
		sqlquery.push(" and t.todo_group_id = ?");
		paramsquery.push(todoGroupId);
	}
	if(todoItemName){
		sqlcount.push(' and t.todo_item_name = ?');
		paramscount.push(todoItemName);
		
		sqlquery.push(" and t.todo_item_name = ?");
		paramsquery.push(todoItemName);
	}
	if(todoItemOrder){
		sqlcount.push(' and t.todo_item_order = ?');
		paramscount.push(todoItemOrder);
		
		sqlquery.push(" and t.todo_item_order = ?");
		paramsquery.push(todoItemOrder);
	}
	if(todoItemStatus){
		sqlcount.push(' and t.todo_item_status = ?');
		paramscount.push(todoItemStatus);
		
		sqlquery.push(" and t.todo_item_status = ?");
		paramsquery.push(todoItemStatus);
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
		var rs 		= await qiao.mysql.query(qiao.config.db, sqlcount.join(''), paramscount);
		var rows 	= await qiao.mysql.query(qiao.config.db, sqlquery.join(''), paramsquery);
		
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
 * todo item get
 */
exports.todoItemGet = async function(req, res){
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
		var rows = await model.todoItemGetById(req.body.id);
		
		res.send(qiao.json.success('query success', {rows:rows}));
	}catch(e){
		res.send(qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * todo item save
 */
exports.todoItemSave = async function(req, res){
	// check
	if(!req.body){
		res.send(qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.todoGroupId){
		res.send(qiao.json.danger('缺少参数todoGroupId！'));
		return;
	}
	if(!req.body.todoItemName){
		res.send(qiao.json.danger('缺少参数todoItemName！'));
		return;
	}
	if(!req.body.todoItemOrder){
		res.send(qiao.json.danger('缺少参数todoItemOrder！'));
		return;
	}
	
	// vars
	var id = req.body.id;
	var todoGroupId = req.body.todoGroupId;
	var todoItemName = req.body.todoItemName;
	var todoItemOrder = req.body.todoItemOrder;
	
	// vars for userinfo
	var express_userid 		= req.body.express_userid;
	var express_username	= req.body.express_username;
	
	// db
	try{
		var params = [];
		
		if(!id){
			params.push(express_userid);
			params.push(todoGroupId);
			params.push(todoItemName);
			params.push(todoItemOrder);
			params.push('0');
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			
			var rs = await model.todoItemAdd(params);
			id = rs && rs.insertId ? rs.insertId : id;
		}else{
			params.push(express_userid);
			params.push(todoGroupId);
			params.push(todoItemName);
			params.push(todoItemOrder);
			params.push('0');
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(id);
			
			await model.todoItemEdit(params);
		}
		
		res.send(qiao.json.success('save success', {id:id}));
	}catch(e){
		res.send(qiao.json.danger('save failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * todo item del
 */
exports.todoItemDel = async function(req, res){
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
		await model.todoItemDel(req.body.ids.split(','));
		res.send(qiao.json.success('del success'));
	}catch(e){
		res.send(qiao.json.danger('del failed', {errName:e.name,errMsg:e.message}));
	}
};