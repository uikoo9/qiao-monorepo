// service
var service = require('../service/IndexService.js');

/**
 * index controller
 */
module.exports = function (app) {
    // index
    app.get('/', function (req, res) {
        service.index(req, res);
    });

    // search
    app.get('/search', function (req, res) {
        service.search(req, res);
    });

    // search npm
    app.post('/search/npm', function (req, res) {
        service.searchNpm(req, res);
    });
};