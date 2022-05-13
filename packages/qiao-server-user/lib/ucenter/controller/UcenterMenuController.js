// service
var service	= require('../service/UcenterMenuService.js');

/**
 * ucenter menu controller
 */
module.exports = function(app){
	// ucenter menu list
	app.post('/ucenter/menu/list', function(req, res){
		service.ucenterMenuList(req, res);
	});

	// ucenter menu get
	app.post('/ucenter/menu/get', function(req, res){
		service.ucenterMenuGet(req, res);
	});
	
	// ucenter menu save
	app.post('/ucenter/menu/save', function(req, res){
		service.ucenterMenuSave(req, res);
	});

	// ucenter menu del
	app.post('/ucenter/menu/del', function(req, res){
		service.ucenterMenuDel(req, res);
	});
};