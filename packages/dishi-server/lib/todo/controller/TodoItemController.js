// service
var service	= require('../service/TodoItemService.js');

/**
 * todo item controller
 */
module.exports = function(app){
	// todo item list
	app.post('/todo/item/list', function(req, res){
		service.todoItemList(req, res);
	});

	// todo item get
	app.post('/todo/item/get', function(req, res){
		service.todoItemGet(req, res);
	});
	
	// todo item save
	app.post('/todo/item/save', function(req, res){
		service.todoItemSave(req, res);
	});

	// todo item del
	app.post('/todo/item/del', function(req, res){
		service.todoItemDel(req, res);
	});
};