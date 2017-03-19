/**
 * Created by angular on 3/19/17.
 */
var http = require('http');
var fs = require('fs');
function onRequest(request,response){
    response.writeHead(200,{'Content-Type': 'text/html'});
   fs.readFile('./index.html',null, function (error, data) {
       if (error){
           response.writeHead(404);
           response.write('File not exsist');
       }else{
           response.write(data);
       }
       response.end();

   });
}

http.createServer(onRequest).listen(3000);

// var http = require('http');
//
// function onRequest(request,response){
//     response.writeHead(200,{'Content-Type': 'text/plain'});
//     response.write('nodejs');
//     response.end();
// }
//
// http.createServer(onRequest).listen(3000);