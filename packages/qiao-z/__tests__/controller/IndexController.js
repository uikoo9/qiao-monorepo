/**
 * index controller
 */
module.exports = function (app) {
    const data = {
        user: {
            name: 'jack'
        }
    };

    // index
    app.get('/*', function (req, res) {
        res.render('./__tests__/views/index.html', data);
    });

    // params
    app.get('/2', function (req, res) {
        console.log(111);
        res.render('./__tests__/views/index.html', data);
    });
    app.get('/2/:md', function (req, res) {
        console.log(req.params.md);
        res.render('./__tests__/views/index.html', data);
    });
};