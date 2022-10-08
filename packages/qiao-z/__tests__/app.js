// v
const v = require('../index.js');

// app
const app = v();

// listen
app.listen(5277);

// get
app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});