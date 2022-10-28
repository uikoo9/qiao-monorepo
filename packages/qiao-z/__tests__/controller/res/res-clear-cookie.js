/**
 * res clear cookie
 */
module.exports = function (app) {
    app.get('/res/clear/cookie', function (req, res) {
        console.log('/res/clear/cookie', req.query.name);

        res.clearCookie(req.query.name);
        res.json(req.cookies);
    });
};