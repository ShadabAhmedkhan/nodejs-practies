/**
 * Created by angular on 4/2/17.
 */
var express = require('express');
var app = express();
app.set('view engien', 'ejs');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/contact.html');
});

// app.get('/profile/:name', function (req, res) {
//     res.send('Hello World' + req.params.name);
// });

app.get('/profile/:name', function (req, res) {
    res.render('index');//    res.render('profile');

});

app.listen(3000)