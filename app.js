var http = require('http');
/**var url = require('url');
var querystring = require('querystring')**/
var server = http.createServer(function(request,response){
//data1="";
/**request.on('data',function(chunk){data1+=chunk;});
request.on('end',function(){
var qs = querystring.parse(data1);
var num1 = parseInt(qs['num1']);
var num2 = parseInt(qs['num2']);
var result= num1+num2;**/
response.writeHead(200,{"Content-Type":"text/html"});
response.write("Welcome to first node app..."); 
response.end();
});
//});
server.listen(3333);
console.log("Server running at port 3333...");
