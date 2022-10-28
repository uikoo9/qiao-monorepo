/**
 * req useragent
 */
module.exports = function (app) {
    app.get('/req/useragent', function (req, res) {
        console.log('/req/useragent', req.useragent);

        res.json(req.useragent);
    });
};