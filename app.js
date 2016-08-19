var http = require('http');
var url = require('url');
var server = http.createServer(create);
var querystring = require('querystring');
var reqPlay = require('./requestPlay.js');
var route = require('./router.js');
var fs = require('fs');
function create(request,response){
if(request.url === "/" || request.url === "/calculator.html"){
    fs.readFile("./calculator.html",'utf8', function (error,data) {
            if (error) {
                response.writeHead(404);
                response.write("<html><head><title>Error</title></head><body bgcolor='#E2C2F6'><br><center><h3 style='color:red;'>The requested content is not available...</h3></center></body></html>");
				response.end();	
            } else {
                response.writeHead(200, {"Content-Type": "text/html" });
                response.write(data);
				response.end();
            }
    });         
	
}
else{
	response.writeHead(404);
    response.write("<html><head><title>Error</title></head><body bgcolor='#E2C2F6'><br><center><h3 style='color:red;'>The webpage you are looking for is not available...</h3></center></body></html>");
	response.end();	
}

}
server.listen(4444);
console.log("server listening to 4444");
