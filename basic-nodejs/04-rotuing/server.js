/**
 * Created by angular on 3/19/17.
 */
var http = require('http');
var app = require('./app');
http.createServer(app.handleRequest).listen(3000);