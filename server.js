
var http = require('http');

var app = http.createServer(function(req,res){
  res.writeHead(200, {
      "Content-Type": 'text/html'
  });
  res.end("<h2>Hello world!</h2>");
});

app.listen(8080,'localhost');
console.log("Server running at http://localhost:8080/");
console.log(app);
