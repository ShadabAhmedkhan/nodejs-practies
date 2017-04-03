var express = require('express')
var app = express()

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/contact.html');
});

app.get('/profile/:name', function (req, res) {
    res.send('Hello World' + req.params.name);
});

app.get('/p', function (req, res) {
    res.render('index');//    res.render('profile');

});

app.get('/profile/:name', function (req, res) {
    // var data = {age:20, job: 'it tuts' , hobbies:['eating','fighting','fishing'] };
    res.render('index',{person: req.params.name})//, data:data
})
app.listen(3000)