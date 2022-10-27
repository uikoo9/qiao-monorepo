/**
 * index controller
 */
module.exports = function (app) {
    const data = {
        user: {
            name: 'jack'
        }
    };

    // check all
    app.get('/*', function (req, res) {
        console.log('/*', req.url, req.useragent);
        res.render('./views/index.html', data);
    });

    // check path
    app.get('/2', function (req, res) {
        console.log('/2', req.url);
        res.render('./views/index.html', data);
    });

    // check params
    app.get('/2/:md', function (req, res) {
        console.log('/2/:md', req.params.md, req.url);
        res.render('./views/index.html', data);
    });
};