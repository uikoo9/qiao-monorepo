/**
 * res render file
 */
module.exports = function (app) {
    app.get('/res/render/file', function (req, res) {
        console.log('/res/render/file');

        res.render('./views/index.txt');
    });
};