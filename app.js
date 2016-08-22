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
else if(filePath == "/getValue"){
	console.log("in getValue");
	var query = url.parse(filePath).query;
	var num1 = querystring.parse(query)["num1"];
	var num2 = querystring.parse(query)["num2"];
	console.log(num1+num2);
	var options = {
	  host: '172.17.0.2',
	  port: 9000,
	  path: '/MyController/'+num1+'/'+num2
	};
	http.get(options, function(resp){
	  resp.setEncoding('utf8');
	  resp.on('data', function(chunk){
	  	console.log(chunk);
	  response.writeHead(200,{"Content-Type":"text/html"});
	  response.write("Addition of "+num1+" "+"&"+" "+num2+" " +"=" +" "+chunk); 
	  response.end();
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
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
