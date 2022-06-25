// service
var service = require('../service/ManageService.js');

/**
 * manage controller
 */
module.exports = function (app) {
    // login
    app.get('/login', function (req, res) {
        service.login(req, res);
    });

    // logout
    app.get('/logout', function (req, res) {
        service.logout(req, res);
    });

    // manage
    app.get('/manage', function (req, res) {
        service.manage(req, res);
    });
};