var http = require('http');
var url = require('url');

/*Basic query string processing*/
// var dt = require('./myfirstmodule');
// http.createServer(function (req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.write(txt)
//     res.end(req.url);
// }).listen(8080);

/*URL Processing*/
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query;
console.log(qdata.month);