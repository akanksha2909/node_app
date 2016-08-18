var http = require('http');
var url = require('url');
var server = http.createServer(create);
var querystring = require('querystring')
function create(request,response){
data1="";
data2="";
request.on('data',function(chunk){data1+=chunk;});
request.on('end',function(){
var qs = querystring.parse(data1);
console.log(data1);
var num1 = parseInt(qs['num1']);
var num2 = parseInt(qs['num2']);
var options = {
  host: '10.152.167.241',
  port: 9010,
  path: '/MyController/'+num1+'/'+num2
};
http.get(options, function(resp){
  resp.setEncoding('utf8');
  resp.on('data', function(chunk){
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("Addition of "+num1+" "+"&"+" "+num2+" " +"=" +" "+chunk); 
  response.end();
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});

});
}
server.listen(4444);
console.log("server listening to 4444");
