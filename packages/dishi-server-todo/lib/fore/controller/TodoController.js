// service
var service	= require('../service/TodoService.js');

/**
 * todo controller
 */
module.exports = function(app){
	// todo list
	app.post('/todo/list', function(req, res){
		service.todoList(req, res);
	});
};