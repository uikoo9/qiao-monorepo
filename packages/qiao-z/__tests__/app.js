// q
const q = require('../index.js');

// app
const app = q();

// listen
app.listen(5277);

// get
app.get('/*', function(req, res){
    const data = {
        user: {
            name: 'jack'
        }
    };

    res.render('./__tests__/views/index.html', data);
});