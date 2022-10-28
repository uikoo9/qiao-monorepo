/**
 * res json fail
 */
module.exports = function (app) {
    app.get('/res/json/fail', function (req, res) {
        const obj = {
            name: 'hello'
        };
        console.log('/res/json/fail', obj);

        res.jsonFail('fail', obj);
    });
};