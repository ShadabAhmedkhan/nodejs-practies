/**
 * Created by angular on 3/19/17.
 */
var url = require('url');
var fs = require('fs');

function renderHtml(path, response) {
    fs.readFile(path,null, function (error, data) {
        if (error){
            response.writeHead(404);
            response.write('File not exsist');
        }else{
            response.write(data);
        }
        response.end();

    });
}
module.exports={
    handleRequest: function (req,res) {
        res.writeHead(200,{'Content-Type': 'text/html'});

        var path = url.parse(req.url).pathname;
        switch (path){
            case '/':
                renderHtml('./index.html',res);
                break;
            case '/login':
                renderHtml('./login.html',res);
                break;
            default:
                res.writeHead(404);
                res.write('Route not define');
                res.end();
        }

    }
};

