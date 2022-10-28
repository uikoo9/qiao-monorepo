/**
 * app get
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        console.log('/');

        res.render('./views/index.html');
    });
};