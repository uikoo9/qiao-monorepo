/**
 * res redirect
 */
module.exports = function (app) {
    app.get('/res/redirect', function (req, res) {
        console.log('/res/redirect');

        res.redirect('https://insistime.com');
    });
};