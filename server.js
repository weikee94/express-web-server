const express = require('express');

// call express method
var app = express();

// middleware function here
app.use(express.static(__dirname + '/public'));

// register handler
app.get('/', (req, res) => {
    // res.send('Hello Express!');

    res.send({
        name: 'Wei',
        likes: [
            'Basketball',
            'Swim'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/bad', (req, res) => {
    res.send({
        msg: 'Bad request',
    })
})

// bind application to the port 
app.listen(8080, () => {
    console.log('Server is up on port 8080');
});


