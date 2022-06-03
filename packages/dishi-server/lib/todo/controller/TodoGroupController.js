// service
var service	= require('../service/TodoGroupService.js');

/**
 * todo group controller
 */
module.exports = function(app){
	// todo group list
	app.post('/todo/group/list', function(req, res){
		service.todoGroupList(req, res);
	});

	// todo group get
	app.post('/todo/group/get', function(req, res){
		service.todoGroupGet(req, res);
	});
	
	// todo group save
	app.post('/todo/group/save', function(req, res){
		service.todoGroupSave(req, res);
	});

	// todo group del
	app.post('/todo/group/del', function(req, res){
		service.todoGroupDel(req, res);
	});
};