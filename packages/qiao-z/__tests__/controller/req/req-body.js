/**
 * req body
 */
module.exports = function (app) {
    app.post('/req/body', function (req, res) {
        console.log('/req/body', req.body);

        res.json(req.body);
    });
};