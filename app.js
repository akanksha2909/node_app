var http = require('http');
var url = require('url');
var server = http.createServer(create);
var querystring = require('querystring');
var fs = require('fs');
function create(request,response){
var filePath = request.url;
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
else if(filePath == "/calci.css"){
	fs.readFile("./calci.css",'utf8', function (error,data) {
            if (error) {
                response.writeHead(404);
                response.write("<html><head><title>Error</title></head><body bgcolor='#E2C2F6'><br><center><h3 style='color:red;'>The requested content is not available...</h3></center></body></html>");
				response.end();	
            } else {
                response.writeHead(200, {"Content-Type": "text/css" });
                response.write(data);
				response.end();
            }
    });         
}
else if(filePath == "/script.js"){
	fs.readFile("./script.js",'utf8', function (error,data) {
            if (error) {
                response.writeHead(404);
                response.write("<html><head><title>Error</title></head><body bgcolor='#E2C2F6'><br><center><h3 style='color:red;'>The requested content is not available...</h3></center></body></html>");
				response.end();	
            } else {
                response.writeHead(200,{"Content-Type": "text/javascript" });
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
console.log("server listening at 4444");
