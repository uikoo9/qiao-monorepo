/**
 * res json
 */
module.exports = function (app) {
    app.get('/res/json', function (req, res) {
        const obj = {
            name: 'hello'
        };
        console.log('/res/json', obj);

        res.json(obj);
    });
};