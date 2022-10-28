/**
 * res render html
 */
module.exports = function (app) {
    app.get('/res/render/html', function (req, res) {
        console.log('/res/render/html');

        res.render('./views/index.html');
    });
};