/**
 * res send
 */
module.exports = function (app) {
    app.get('/res/send', function (req, res) {
        console.log('/res/send');

        res.send('hello world');
    });
};