/**
 * res json success
 */
module.exports = function (app) {
    app.get('/res/json/success', function (req, res) {
        const obj = {
            name: 'hello'
        };
        console.log('/res/json/success', obj);

        res.jsonSuccess('success', obj);
    });
};