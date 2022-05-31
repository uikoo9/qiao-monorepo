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

	// mobile
	app.get('/mobile', function(req, res){
		service.mobile(req, res);
	});
};