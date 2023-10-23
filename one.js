var http = require("http");  
http.createServer(function (request, response) {  
   response.writeHead(200, {'Content-Type': 'text/plain'});   
   response.end('Welcome to School Management system Website\n');  
}).listen(1000);   
console.log('Server running at http://127.0.0.1:1000/');  

