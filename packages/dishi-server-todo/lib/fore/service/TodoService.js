// qiao
var qiao = require('../../_qiao.js');

// service
var service = require('../../todo/service/TodoItemService.js');

/**
 * todo list
 */
exports.todoList = async function(req, res){
	try{
		req.body.todoItemStatus = '0';
		var todoRows = await service.todoItemRows(req);

		req.body.todoItemStatus = '1';
		var doneRows = await service.todoItemRows(req);

		// result
		var result = {};
		result.todoRows = todoRows.rows;
		result.doneRows = doneRows.rows;
		
		res.send(qiao.json.success('query success', result));
	}catch(e){
		res.send(qiao.json.danger('query failed', {errName:e.name,errMsg:e.message}));
	}
};