// service
var service	= require('../service/HomeService.js');

/**
 * index controller
 */
module.exports = function(app){
	// index
	app.get('/', function(req, res){
		service.blackWhite(req, res);
	});

	// login
	app.get('/login', function(req, res){
		service.blackWhiteLogin(req, res);
	});
};