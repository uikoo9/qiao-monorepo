/**
 * app get
 */
module.exports = function (app) {
    app.get('/app/get', function (req, res) {
        console.log('/app/get');

        res.send('/app/get');
    });
};