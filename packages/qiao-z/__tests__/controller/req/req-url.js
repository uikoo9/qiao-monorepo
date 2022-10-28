/**
 * req url
 */
module.exports = function (app) {
    app.get('/req/url', function (req, res) {
        console.log('/req/url', req.url);

        res.json(req.url);
    });
};