// v
const v = require('../index.js');

// app
const app = v();

// listen
app.listen(5277);

// get
app.get('/', function(req, res){
    res.render('./__tests__/views/index.html');
    res.response.writeHead(200, { 'Content-Type': 'application/json' });
    res.response.end(JSON.stringify({
        data: 'Hello World!'
    }));
});