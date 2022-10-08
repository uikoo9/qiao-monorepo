// v
const v = require('../index.js');

// app
const app = v();

// listen
app.listen(5277);

// get
app.get('/1', function(req, res){
    res.render('./__tests__/views/index.html');
});