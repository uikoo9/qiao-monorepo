// service
var service	= require('../service/UcenterRoleService.js');

/**
 * ucenter role controller
 */
module.exports = function(app){
	// ucenter role list
	app.post('/ucenter/role/list', function(req, res){
		service.ucenterRoleList(req, res);
	});

	// ucenter role get
	app.post('/ucenter/role/get', function(req, res){
		service.ucenterRoleGet(req, res);
	});
	
	// ucenter role save
	app.post('/ucenter/role/save', function(req, res){
		service.ucenterRoleSave(req, res);
	});

	// ucenter role del
	app.post('/ucenter/role/del', function(req, res){
		service.ucenterRoleDel(req, res);
	});
};