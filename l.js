var http = require('http');
var fs = require ('fs');
http.createServer(function(request,response){
    fs.readFile('login.html',function(err,data){
        response.writeHead(200,{'content-type':'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(5000);

