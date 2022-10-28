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
    // app.get('/*', function (req, res) {
    //     console.log('/*', req.url, req.query);
    //     res.render('./views/index.html', data);
    // });

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

    // send
    app.get('/send', function (req, res) {
        res.send('send ok');
    });

    // json
    app.get('/json', function (req, res) {
        const obj = {
            test: 'nihao'
        };
        res.json(obj);
    });

    // jsonSuccess
    app.get('/jsonSuccess', function (req, res) {
        const obj = {
            test: 'nihao'
        };
        res.jsonSuccess('1', obj);
    });

    // cookie
    app.get('/cookie', function (req, res) {
        console.log(req.cookies);
        res.clearCookie('insistime_userid');
        
        res.jsonSuccess('1');
    });

    // post
    app.post('/blog/list', function (req, res) {
        console.log(req.body);
        res.render('./views/index.html', data);
    });
};