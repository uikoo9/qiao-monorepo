/**
 * req params
 */
module.exports = function (app) {
    app.get('/req/params/:id', function (req, res) {
        console.log('/req/params/:id', req.params.id);

        res.send(`id is ${req.params.id}`);
    });
};