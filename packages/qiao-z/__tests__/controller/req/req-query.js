/**
 * req query
 */
module.exports = function (app) {
    app.get('/req/query', function (req, res) {
        console.log('/req/query', req.query);

        res.send(`req.query.id is ${req.query.id}`);
    });
};