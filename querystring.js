var http = require('http');
var url = require('url');
var dt = require('./myfirstmodule');
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt)
    res.end(req.url);
}).listen(8080);