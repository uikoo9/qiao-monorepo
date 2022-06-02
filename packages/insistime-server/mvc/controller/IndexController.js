// service
var service	= require('../service/IndexService.js');

/**
 * index controller
 */
module.exports = function(app){
	// index
	app.get('/', function(req, res){
		service.index(req, res);
	});

	// login
	app.get('/login', function(req, res){
		service.login(req, res);
	});
};