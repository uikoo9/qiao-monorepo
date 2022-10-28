/**
 * req headers
 */
module.exports = function (app) {
    app.get('/req/headers', function (req, res) {
        console.log('/req/headers', req.headers);

        res.json(req.headers);
    });
};