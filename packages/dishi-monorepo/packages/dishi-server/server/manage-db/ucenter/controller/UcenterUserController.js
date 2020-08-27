var service	= require('../service/UcenterUserService.js');

/**
 * ucenter user controller
 */
module.exports = function(app){
	// ucenter user login
	app.post('/ucenter/user/login', function(req, res){
		service.ucenterUserLogin(req, res);
	});

	// ucenter user reg
	app.post('/ucenter/user/reg', function(req, res){
		service.ucenterUserReg(req, res);
	});

	// ucenter user forget
	app.post('/ucenter/user/forget', function(req, res){
		service.ucenterUserForget(req, res);
	});
	
	// ucenter code send
	app.post('/ucenter/code/send', function(req, res){
		service.ucenterCodeSend(req, res);
	});

	// ucenter user get
	app.post('/ucenter/user/get', function(req, res){
		service.ucenterUserGet(req, res);
	});
	
	// ucenter user check
	app.post('/ucenter/user/check', function(req, res){
		service.ucenterUserCheck(req, res);
	});

	// ucenter user menus
	app.post('/ucenter/user/menus', function(req, res){
		service.ucenterUserMenus(req, res);
	});
};