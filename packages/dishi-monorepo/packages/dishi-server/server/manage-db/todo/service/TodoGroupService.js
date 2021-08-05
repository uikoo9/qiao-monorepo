// model
var model	= require('../model/TodoGroupModel.js');

/**
 * todo group list
 */
exports.todoGroupList = async function(req, res){
	// vars
	var ucenterUserId = req.body['express_userid'];
	var todoGroupName = req.body.todoGroupName;
	var todoGroupOrder = req.body.todoGroupOrder;
	
	// sql and params
	var sqlcount	= [model.sql.todoGroupListCount];
	var paramscount	= [];
	
	var sqlquery	= [model.sql.todoGroupListQuery];
	var paramsquery	= [];
	
	// query
	if(ucenterUserId){
		sqlcount.push(' and t.ucenter_user_id = ?');
		paramscount.push(ucenterUserId);
		
		sqlquery.push(" and t.ucenter_user_id = ?");
		paramsquery.push(ucenterUserId);
	}
	if(todoGroupName){
		sqlcount.push(' and t.todo_group_name = ?');
		paramscount.push(todoGroupName);
		
		sqlquery.push(" and t.todo_group_name = ?");
		paramsquery.push(todoGroupName);
	}
	if(todoGroupOrder){
		sqlcount.push(' and t.todo_group_order = ?');
		paramscount.push(todoGroupOrder);
		
		sqlquery.push(" and t.todo_group_order = ?");
		paramsquery.push(todoGroupOrder);
	}
	
	// order and page
	sqlquery.push(' order by t.? ? limit ?,?');
	var order		= req.body.order || 'desc';
	var orderby		= req.body.orderby || 'id';
	var pagesize	= parseInt(req.body.rows || 10);
	var pagenumber	= parseInt(req.body.page || 1);
	var start		= (pagenumber - 1) * pagesize;
	paramsquery.push(global.qiao.mysql.lib.raw(orderby));
	paramsquery.push(global.qiao.mysql.lib.raw(order));
	paramsquery.push(start);
	paramsquery.push(pagesize);
	
	// db
	try{
		var rs 		= await global.qiao.mysql.query(global.cell_config.db, sqlcount.join(''), paramscount);
		var rows 	= await global.qiao.mysql.query(global.cell_config.db, sqlquery.join(''), paramsquery);
		
		// result
		var result = {};
		result.total 		= rs[0]['tcount'];
		result.rows 		= rows;
		result.sumpage 		= Math.ceil(result.total / pagesize);
		result.pagenumber 	= pagenumber;
		result.pagesize		= pagesize;
		
		res.send(global.qiao.json.success('query success', result));
	}catch(e){
		res.send(global.qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * todo group get
 */
exports.todoGroupGet = async function(req, res){
	// check
	if(!req.body){
		res.send(global.qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.id){
		res.send(global.qiao.json.danger('缺少参数id！'));
		return;
	}
	
	// db
	try{
		var rows = await model.todoGroupGetById(req.body.id);
		
		res.send(global.qiao.json.success('query success', {rows:rows}));
	}catch(e){
		res.send(global.qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * todo group save
 */
exports.todoGroupSave = async function(req, res){
	// check
	if(!req.body){
		res.send(global.qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.todoGroupName){
		res.send(global.qiao.json.danger('缺少参数todoGroupName！'));
		return;
	}
	if(!req.body.todoGroupOrder){
		res.send(global.qiao.json.danger('缺少参数todoGroupOrder！'));
		return;
	}
	
	// vars
	var id = req.body.id;
	var todoGroupName = req.body.todoGroupName;
	var todoGroupOrder = req.body.todoGroupOrder;
	
	
	// vars for userinfo
	var express_userid 		= req.body.express_userid;
	var express_username	= req.body.express_username;
	
	// db
	try{
		var params = [];
		
		if(!id){
			params.push(express_userid);
			params.push(todoGroupName);
			params.push(todoGroupOrder);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			
			var rs = await model.todoGroupAdd(params);
			id = rs && rs.insertId ? rs.insertId : id;
		}else{
			params.push(express_userid);
			params.push(todoGroupName);
			params.push(todoGroupOrder);
			
			params.push(express_userid || 1);
			params.push(express_username || 'admin');
			params.push(id);
			
			await model.todoGroupEdit(params);
		}
		
		res.send(global.qiao.json.success('save success', {id:id}));
	}catch(e){
		res.send(global.qiao.json.danger('save failed', {errName:e.name,errMsg:e.message}));
	}
};

/**
 * todo group del
 */
exports.todoGroupDel = async function(req, res){
	// check
	if(!req.body){
		res.send(global.qiao.json.danger('缺少参数！'));
		return;
	}
	if(!req.body.ids){
		res.send(global.qiao.json.danger('缺少参数ids！'));
		return;
	}
	
	// db
	try{
		await model.todoGroupDel(req.body.ids.split(','));
		res.send(global.qiao.json.success('del success'));
	}catch(e){
		res.send(global.qiao.json.danger('del failed', {errName:e.name,errMsg:e.message}));
	}
};