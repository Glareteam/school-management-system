var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('hello world\n');
}).listen(3000);
console.log('server running at http://127.0.0.1:1700');