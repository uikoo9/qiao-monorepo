/**
 * req cookies
 */
module.exports = function (app) {
    app.get('/req/cookies', function (req, res) {
        console.log('/req/cookies', req.cookies);

        res.json(req.cookies);
    });
};