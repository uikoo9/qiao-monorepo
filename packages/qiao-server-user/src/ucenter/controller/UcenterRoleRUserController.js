// service
var service	= require('../service/UcenterRoleRUserService.js');

/**
 * ucenter role-r-user controller
 */
module.exports = function(app){
	// ucenter role-r-user list
	app.post('/ucenter/role-r-user/list', function(req, res){
		service.ucenterRoleRUserList(req, res);
	});

	// ucenter role-r-user get
	app.post('/ucenter/role-r-user/get', function(req, res){
		service.ucenterRoleRUserGet(req, res);
	});
	
	// ucenter role-r-user save
	app.post('/ucenter/role-r-user/save', function(req, res){
		service.ucenterRoleRUserSave(req, res);
	});

	// ucenter role-r-user del
	app.post('/ucenter/role-r-user/del', function(req, res){
		service.ucenterRoleRUserDel(req, res);
	});
};