// service
var service	= require('../service/UcenterRoleRMenuService.js');

/**
 * ucenter role-r-menu controller
 */
module.exports = function(app){
	// ucenter role-r-menu list
	app.post('/ucenter/role-r-menu/list', function(req, res){
		service.ucenterRoleRMenuList(req, res);
	});

	// ucenter role-r-menu get
	app.post('/ucenter/role-r-menu/get', function(req, res){
		service.ucenterRoleRMenuGet(req, res);
	});
	
	// ucenter role-r-menu save
	app.post('/ucenter/role-r-menu/save', function(req, res){
		service.ucenterRoleRMenuSave(req, res);
	});

	// ucenter role-r-menu del
	app.post('/ucenter/role-r-menu/del', function(req, res){
		service.ucenterRoleRMenuDel(req, res);
	});
};