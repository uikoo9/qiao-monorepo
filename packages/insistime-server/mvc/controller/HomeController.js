// service
var service	= require('../service/HomeService.js');

/**
 * home controller
 */
module.exports = function(app){
	// black white
	app.get('/black-white', function(req, res){
		service.blackWhite(req, res);
	});
};