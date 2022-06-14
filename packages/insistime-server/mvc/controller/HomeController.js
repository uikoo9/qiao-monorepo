// service
var service	= require('../service/HomeService.js');

/**
 * home controller
 */
module.exports = function(app){
	// black white index
	app.get('/black-white', function(req, res){
		service.blackWhite(req, res);
	});

	// black white login
	app.get('/black-white/login', function(req, res){
		service.blackWhiteLogin(req, res);
	});
};